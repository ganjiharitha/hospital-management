$(document).ready(function() {
    var a=[];
    window.onload=function(){
      //localStorage.clear();
    if(JSON.parse(localStorage.getItem("logeddetails"))!=null)
      a=JSON.parse(localStorage.getItem("logeddetails"));
     //console.log(a);
    }
    newTest={"email" : "" , "password" : ""};
    $("#loginto").click(function(){
      newTest.email= $('#uname').val();
      newTest.password= $('#upass').val();
      $.post("/api/login/post",newTest)
      .done(function(data){
        if(data.success==true)
        {
          a.push(data);
          //console.log(data);
          localStorage.setItem("logeddetails",JSON.stringify(a));
         //console.log(a);
          window.location ="https://hospital-management-mini.herokuapp.com/";
        }
        else{
          alert(data.message);
          $('#uname').val('');
        }
      })
    })
  })
  
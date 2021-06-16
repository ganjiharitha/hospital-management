$(document).ready(function() {
    var a=[];
    window.onload=function(){
      //localStorage.clear();
    if(JSON.parse(localStorage.getItem("loged_not"))!=null)
      a=JSON.parse(localStorage.getItem("loged_not"));
    }
    newTest={"hid" : "" , "password" : ""};
    $("#loginto").click(function(){
      newTest.hid= $('#uname').val();
      newTest.password= $('#upass').val();
      console.log(newTest.hid);
      if(newTest.hid.length>0 && newTest.password.length>0){
        console.log("you are good to go");
      }
      else{
          alert("enter the id and password");
      }
     /* $.post("/api/login/post",newTest)
      .done(function(data){
        if(data.success==true)
        {
          a.push(data);
          localStorage.setItem("loged_not",JSON.stringify(a));
          console.log(a);
          window.location ="https://hospital-management-mini.herokuapp.com/";
        }
        else{
          alert(data.message);
          $('#uname').val('');
          $('#upass').val('');
        }
      })*/
    })
    $("#rega").click(function(){
      window.location ="https://hospital-management-mini.herokuapp.com/adminreg"
    })
  })

$(document).ready(function() {
    var a=[];
    window.onload=function(){
      //localStorage.clear();
    if(JSON.parse(localStorage.getItem("logeddetails"))!=null)
      a=JSON.parse(localStorage.getItem("logeddetails"));
    }
    newTest={"hid" : "" , "hpassword" : ""};
    $("#loginto").click(function(){
      newTest.hid= $('#uname').val();
      newTest.hpassword= $('#upass').val();
        $.post("/api/admin/login",newTest)
        .done(function(data){
        if(data.success==true)
        {
          a.push(data);
          localStorage.setItem("logeddetails",JSON.stringify(a));
          window.location ="https://hospital-management-mini.herokuapp.com/";
        
        }
        else{
          alert(data.message);
          $('#uname').val('');
          $('#upass').val('');
        }
      })
      
    })
    $("#rega").click(function(){
      window.location ="https://hospital-management-mini.herokuapp.com/adminreg"
    })
  })

$(document).ready(function() {
    var a=[];
   window.onload=function(){
      if(JSON.parse(localStorage.getItem("logeddetails"))!=null)
     a=JSON.parse(localStorage.getItem("logeddetails"));
     if(a.length>0){
      if(a[0].role=='doctor'){
          window.location="https://hospital-management-mini.herokuapp.com/doctor";
      }
      else if(a[0].role=='receptionist')
      {
         window.location="https://hospital-management-mini.herokuapp.com/reception";
      }
      else if(a[0].role=='user')
      {
         window.location="https://hospital-management-mini.herokuapp.com/user";
      }
    }
    else{
      $("#adminlogb").show();
      $("#homelogb").show();
       $('#weltag').html("Welcome User");
    }
   }
   $("#homelogb").click(function(){
    window.location="https://hospital-management-mini.herokuapp.com/login";
   })
   $("#adminlogb").click(function(){
    window.location="https://hospital-management-mini.herokuapp.com/admin";
   })
 });

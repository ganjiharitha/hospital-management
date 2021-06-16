$(document).ready(function() {
    var a=[];
   window.onload=function(){
   if(JSON.parse(localStorage.getItem("loged_not"))!=null)
     a=JSON.parse(localStorage.getItem("loged_not"));
     console.log(a);
     if(a.length>0){
       $('#homelogb').hide();
       $('#adminlogb').hide();
       $('#signout').show();
       $('#weltag').html("Welcome "+a[0].user);
        console.log(a[0].user);
    }
    else{
       $('#homelogb').show();
       $('#adminlogb').show();
       $('#signout').hide();
       $('#weltag').html("Welcome User");
    }
   }
   $("#signout").click(function(){
      if(a.glog)
       {
         window.onbeforeunload = function(e){
            gapi.auth2.getAuthInstance().signOut();
          };
       }
      localStorage.clear();
      location.reload();
   })
   $("#homelogb").click(function(){
    window.location="https://hospital-management-mini.herokuapp.com/login";
   })
   $("#adminlogb").click(function(){
    window.location="https://hospital-management-mini.herokuapp.com/admin";
   })
 });
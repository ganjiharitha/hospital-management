$(document).ready(function() {
    var a=[];
    window.onload=function(){
      //localStorage.clear();
    if(JSON.parse(localStorage.getItem("loged_not"))!=null)
      a=JSON.parse(localStorage.getItem("loged_not"));
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
          localStorage.setItem("loged_not",JSON.stringify(a));
          console.log(a);
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
      window.location ="https://hospital-management-mini.herokuapp.com/register"
    })
  })
  window.onbeforeunload = function(e){
    gapi.auth2.getAuthInstance().signOut();
  };
  function onSignIn( googleUser )
  {
      var profile = googleUser.getBasicProfile();
      var a=[];
    if(JSON.parse(localStorage.getItem("loged_not"))!=null)
      a=JSON.parse(localStorage.getItem("loged_not"));
      var x={"success" : true,"message":"","user":profile.getName(),"glog":true};
      a.push(x);
      localStorage.setItem("loged_not",JSON.stringify(a));
      console.log(a);
      window.location ="https://hospital-management-mini.herokuapp.com/";
  }
  
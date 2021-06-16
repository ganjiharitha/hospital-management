$(document).ready(function() {
    var newTest = { "name" : "", "email": "" , "phonenumber" : "" , "password" : ""};
    $("#submt").click(function(){
      
      newTest.name= $('#uname').val();
      newTest.email= $('#ename').val();
      newTest.phonenumber= $('#pnum').val();
      newTest.password= $('#upass').val();
      var repass = $('#upassre').val();
      var passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
      if(newTest.password == repass){
        if(repass.match(passw))
        {
          $.post("/api/reg/post",newTest)
          .done(function(data){
            if(data.success){
              $('#uname').val('');
              $('#ename').val('');
              $('#pnum').val('');
              $('#upass').val('');
              $('#upassre').val('');
              alert("pelase kindly login to your account");
              window.location.href ="https://hospital-management-mini.herokuapp.com/login";
            }
            if(data.emailexist==true && data.nameexist==true)
            {
              alert("username and email is already existed");
              $('#uname').val('');
              $('#ename').val('');
            }
           else if(data.emailexist)
            {
              alert("email is existed. Try another Email or Login to your account");
              $('#ename').val('');
            }
            else
            {
              alert("username is already existed. Try another name");
              $('#uname').val('');
            }
          })
          
        }
        else{
          $('#upass').val('');
          $('#upassre').val('');
          alert("password must contaion [8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character]");
        }
  
      }
      else{
        alert("password does not match");
        $('#upass').val('');
        $('#upassre').val('');
      }
    })
    $("#loginrega").click(function(){
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
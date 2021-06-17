$(document).ready(function() {
    var newTest = { "name" : "", "email": "" , "phonenumber" : "" , "password" : "","address":"","role":"user","hid":""};
    $("#submt").click(function(){
      newTest.name= $('#uname').val();
      newTest.email= $('#ename').val();
      newTest.phonenumber= $('#pnum').val();
      newTest.password= $('#upass').val();
      newTest.address= $('#uadd').val();
      newTest.hid=Date.now();
      var repass = $('#upassre').val();
      var passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
      if(newTest.password == repass){
        if(repass.match(passw))
        {
          $.post("/api/reg/post",newTest)
          .done(function(data){
            if(data.success){
              
              alert("pelase kindly login to your account.Please remember your id"+data.idis);
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
      window.location ="https://hospital-management-mini.herokuapp.com/login"
    })
  
  })
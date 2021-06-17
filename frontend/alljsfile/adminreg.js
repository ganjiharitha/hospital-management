$(document).ready(function() {
 
    var newTest = {"role" : "", "hname" : "", "hemail": "" , "hpnum" : "" , "hpassword" : "","haddress" : "","hid":"","special":"","gender":""};
    $("#urole").on('change', function() {
      if ($(this).val() == 'doctor')
    $('#speciality').show();
    else
    {
      newTest.special="reception";
    $('#speciality').hide();
    }
  });
    
    $("#submt").click(function(){
        newTest.role= $('#urole').val();
        if(newTest.role=='doctor')
        newTest.special=$('#uspec').val();
      newTest.hname= $('#uname').val();
      newTest.gender= $('#gen').val();
      newTest.hemail= $('#ename').val();
      newTest.hpnum= $('#pnum').val();
      newTest.hpassword= $('#upass').val();
      newTest.haddress= $('#uadd').val();
      hidenter= $('#uid').val();
      newTest.hid=Date.now();
      var repass = $('#upassre').val();
      var passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
      if(newTest.hpassword == repass){
        if(repass.match(passw))
        {
            if(hidenter=="567567")
            {
              $.post("/api/admin/reg",newTest)
                .done(function(data){
                if(data.success){
                  alert("pelase kindly login to your account.Remember your id for further use"+data.idis);
                  if(data.role=='doctor'){
                    $.post("/api/reg/doc",
                    {
                      dname : newTest.hname,
                      did : newTest.hid,
                      doctype : newTest.special,
                      gender : newTest.gender
                      })
                      .done(function(d){
                        if(d.success)
                          window.location.href ="https://hospital-management-mini.herokuapp.com/admin";
                      })
                  }
                  else
                  window.location.href ="https://hospital-management-mini.herokuapp.com/admin";

                  
                }
                else if(data.emailexist==true && data.nameexist==true)
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
                $('#uid').val('');
                alert("Enter valid hospital id");
            }
          
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
      window.location ="https://hospital-management-mini.herokuapp.com/admin"
    })
  
  })
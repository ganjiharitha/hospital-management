$(document).ready(function() {
    var a=[];
    window.onload=function(){
      //localStorage.clear();
    if(JSON.parse(localStorage.getItem("logeddetails"))!=null)
      a=JSON.parse(localStorage.getItem("logeddetails"));
      //console.log(a);
      $('#weltag').html("Welcome "+a[0].name);
      if(a[0].role=="user"){
        $('#uname').val(a[0].name);
        $('#ename').val(a[0].email);
        $('#pnum').val(a[0].pnum);
      }
    }
    newTest={"name" : "" ,"email":"", "phonemunber" : "","doctype":"","date":"","time":"","docid":"","docname":"","pid":""};
    $("#submt").click(function(){
      newTest.name= $('#uname').val();
      newTest.email= $('#ename').val();
      newTest.phonemunber= $('#pnum').val();
      newTest.doctype= $('#dtype').val();
      newTest.date= $('#udate').val();
      newTest.pid=Date.now();
      newTest.time= $('#utime').val();
        $.post("/api/appoint/give",newTest)
        .done(function(data){
        if(data.success==true)
        {
          newTest.docid=data.foundid;
          newTest.docname=data.name;
          $.post("/api/appoint/save",newTest)
          .done(function(dat){
            if(data)
            {
              console.log("done");
            }
          })
          alert("Appointment conformed");
          window.location ="https://hospital-management-mini.herokuapp.com/";

        }
        else{
          location.reload();
          alert("Slot is not Free");
        }
      })
      
    })
    $("#cancel").click(function(){
      window.location ="https://hospital-management-mini.herokuapp.com/";
    })
    $("#signout").click(function(){
      localStorage.clear();
      location.reload();
      window.location="https://hospital-management-mini.herokuapp.com/logout";
   })
  })

$(document).ready(function() {
    var a=[];
    window.onload=function(){
      //localStorage.clear();
    if(JSON.parse(localStorage.getItem("logeddetails"))!=null)
      a=JSON.parse(localStorage.getItem("logeddetails"));
      //console.log(a);
    }
    newTest={"name" : "" ,"email":"", "phonemunber" : "","doctype":"","date":"","time":""};
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
          alert("Appointment conformed");
          window.location ="https://hospital-management-mini.herokuapp.com/";

        }
        else{
          alert("Slot is not Free");
        }
      })
      
    })
    $("#cancel").click(function(){
      window.location ="https://hospital-management-mini.herokuapp.com/";
    })
  })

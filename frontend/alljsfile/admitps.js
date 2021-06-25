$(document).ready(function() {
    var newTest = { "pname" : "","pid":"","pemail": "" ,"pnum" : "","gender":"","bloogd":"","admitdate":"","doctype":"","pasthelth":"","doctorid":"","doctorname":"","currentprob":"","roomnum":"","age":""};
    window.onload=function(){
      //localStorage.clear();
    if(JSON.parse(localStorage.getItem("logeddetails"))!=null)
      a=JSON.parse(localStorage.getItem("logeddetails"));
      //console.log(a);
      $('#weltag').html("Welcome "+a[0].name);
    }
    $("#submt").click(function(){
        newTest.pname= $('#uname').val();
        newTest.pid= Date.now();
        newTest.pemail= $('#ename').val();
        newTest.pnum= $('#pnum').val();
        newTest.gender= $('#gen').val();
        newTest.bloogd= $('#blood').val();
        newTest.admitdate =$('#udate').val();
        newTest.doctyde= $('#dtype').val();
        newTest.pasthelth= $('#past').val();
        newTest.currentprob= $('#pre').val();
        newTest.roomnum= $('#room').val();
        newTest.age= $('#age').val();
        $.get("/api/doc/admit/"+newTest.doctyde,function(data,status){
            if(data)
            {
                newTest.doctorid=data.docid;
                newTest.doctorname=data.doctorname;
                $.post("/api/admin/post",newTest)
                  .done(function(data){
                    if(data.success){
                      alert("Admitted Pateint");
                      window.location ="https://hospital-management-mini.herokuapp.com/"
                    }
                    else
                      console.log("error admitting");
                })
            }
         });

    })
    $("#cancel").click(function(){
      window.location ="https://hospital-management-mini.herokuapp.com/"
    })
    $("#signout").click(function(){
      localStorage.clear();
      location.reload();
      window.location="https://hospital-management-mini.herokuapp.com/logout";
   })
  })
  
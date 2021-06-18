$(document).ready(function() {
    var a=[];
   window.onload=function(){
    $('#search').hide();
    $('#appoint').hide();
    $('#docres').hide();
    $('#patres').hide();
    if(JSON.parse(localStorage.getItem("logeddetails"))!=null)
    a=JSON.parse(localStorage.getItem("logeddetails"));
    $('#weltag').html("Welcome "+a[0].name);
    }
    $("#appoin").click(function(){
        window.location="https://hospital-management-mini.herokuapp.com/appointment";
     })
     $("#admit").click(function(){
        window.location="https://hospital-management-mini.herokuapp.com/admit";
    })
    $("#signout").click(function(){
        localStorage.clear();
        location.reload();
        window.location="https://hospital-management-mini.herokuapp.com/";
     })
    $("#pdet").click(function(){
        $('#search').show();
        $('#patres').show();
        $('#appoint').hide();
        $('#docres').hide();
        $('#pat-table').empty();
        $.get("/api/rec/patint",function(data,status){
            for (var i in data) {
                addRowpat(data[i]);
            }
         });
    })
    $("#docl").click(function(){
        $('#search').show();
        $('#appoint').hide();
        $('#docres').show();
        $('#patres').hide();
        $('#doc-table').empty();
        $.get("/api/rec/doc",function(data,status){
            for (var i in data) {
                addRowdoc(data[i]);
            }
         });
        
    })
    $("#appo").click(function(){
        $('#search').show();
        $('#appoint').show();
        $('#docres').hide();
        $('#patres').hide();
        $('#app-table').empty();
        $.get("/api/rec/appo",function(data,status){
            for (var i in data) {
                addRowapp(data[i]);
            }
         });
    })

 });
 function addRowpat(obj) {
    //console.log(obj);
   var row = `<tr scope="row" class="test-row-${obj._id}">
                  <td>${obj.pnum}</td>
                  <td>${obj.pid}</td>
                  <td>${obj.pemail}</td>
                  <td>${obj.pnum}</td>
                  <td>${obj.gender}</td>
                  <td>${obj.bloogd}</td>
                  <td>${obj.admitdate}</td>
                  <td>${obj.doctorid}</td>
                  <td>${obj.doctorname}</td>
                  <td>${obj.doctyde}</td>
                  <td>${obj.roomnum}</td>
              </tr>`
   $('#pat-table').append(row)
}
function addRowapp(obj) {
    //console.log(obj);
   var row = `<tr scope="row" class="test-row-${obj._id}">
                  <td>${obj.pid}</td>
                  <td>${obj.pname}</td>
                  <td>${obj.email}</td>
                  <td>${obj.phonenumber}</td>
                  <td>${obj.appointmentdate}</td>
                  <td>${obj.time}</td>
                  <td>${obj.doctorid}</td>
                  <td>${obj.doctorname}</td>
                  <td>${obj.doctype}</td>
              </tr>`
   $('#app-table').append(row)
}
function addRowdoc(obj) {
   var row = `<tr scope="row" class="test-row-${obj._id}">
                  <td>${obj.did}</td>
                  <td>${obj.dname}</td>
                  <td>${obj.gender}</td>
                  <td>${obj.doctype}</td>
                  <td>${obj.dava.length}</td>
                  <td>${obj.pat.length}</td>
              </tr>`
   $('#doc-table').append(row);
}
$(document).ready(function() {
    var a=[];
   window.onload=function(){
    $('#search').hide();
    $('#appoint').hide();
    $('#adm').hide();
    if(JSON.parse(localStorage.getItem("logeddetails"))!=null)
    a=JSON.parse(localStorage.getItem("logeddetails"));
    $('#weltag').html("Welcome "+a[0].name);
    }
    $("#signout").click(function(){
        localStorage.clear();
        location.reload();
        window.location="https://hospital-management-mini.herokuapp.com/";
     })
    $("#pat").click(function(){
        $('#search').show();
        $('#adm').show();
        $('#appoint').hide();
        $('#adm-table').empty();
        $.get("/api/doc/patint/"+a[0].hid,function(data,status){
            for (var i in data) {
                addRowpat(data[i]);
            }
         });
    })
    $("#appo").click(function(){
        $('#search').show();
        $('#appoint').show();
        $('#adm').hide();
        $('#pat-table').empty();
        $.get("/api/doc/appo/"+a[0].hid,function(data,status){
            for (var i in data) {
                addRowapp(data[i]);
            }
         });
    })

 });
 function addRowpat(obj) {
    //console.log(obj);
   var row = `<tr scope="row" class="test-row-${obj._id}">
                  <td>${obj.pidi}</td>
                  <td>${obj.pname}</td>
                  <td>${obj.pgen}</td>
                  <td>${obj.pgrp}</td>
                  <td>${obj.page}</td>
                  <td>${obj.pdate}</td>
                  <td>${obj.ppast}</td>
                  <td>${obj.pcurr}</td>
                  <td>${obj.proom}</td>
              </tr>`
   $('#adm-table').append(row)
}
function addRowapp(obj) {
    //console.log(obj);
   var row = `<tr scope="row" class="test-row-${obj._id}">
                  <td>${obj.pid}</td>
                  <td>${obj.pname}</td>
                  <td>${obj.ddate}</td>
                  <td>${obj.dtime}</td>
              </tr>`
   $('#pat-table').append(row)
}
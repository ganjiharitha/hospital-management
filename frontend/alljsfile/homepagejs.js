$(document).ready(function() {
    var a=[];
   window.onload=function(){
      $('#foruser').hide();
      $('#fordoc').hide();
      $('#forrec').hide();
      $('#withoutlog').hide();
      if(JSON.parse(localStorage.getItem("logeddetails"))!=null)
     a=JSON.parse(localStorage.getItem("logeddetails"));
    console.log(a);
     if(a.length>0){
      $("#signout").show();
      $("#adminlogb").hide();
      $("#homelogb").hide();
      $('#weltag').html("Welcome "+a[0].name);
      if(a[0].role=='doctor'){
         $('#fordoc').show();
         var giveemail={"hid":a[0].hid};
         $.get("/api/doc/appoint/"+a[0].hid,function(data,status){
            var tests=data;
            console.log(tests);
            for (var i in tests) {
               addRow(tests[i]);
           }
         });
      }
      else if(a[0].role=='receptionist')
      {
         $('#forrec').show();
         $('#appoint').show();
         $('#docres').hide();
      }
      else{
         $('#foruser').show();
        
      }
    }
    else{
      $('#foruser').hide();
      $('#fordoc').hide();
      $('#forrec').hide();
      $('#withoutlog').show();
      $("#adminlogb").show();
      $("#homelogb").show();
      $("#signout").hide();
       $('#weltag').html("Welcome User");
    }
   }
   $("#signout").click(function(){
      localStorage.clear();
      location.reload();
   })
   $("#appo").click(function(){
      window.location="https://hospital-management-mini.herokuapp.com//appointment";
   })
   $("#homelogb").click(function(){
    window.location="https://hospital-management-mini.herokuapp.com/login";
   })
   $("#adminlogb").click(function(){
    window.location="https://hospital-management-mini.herokuapp.com/admin";
   })
 });
 function addRow(obj) {
    //console.log(obj);
   var row = `<tr scope="row" class="test-row-${obj._id}">
                  <td>${obj.pid}</td>
                  <td>${obj.pname}</td>
                  <td>${obj.ddate}</td>
                  <td>${obj.dtime}</td>
                  <td>
                    <button data-testid="${obj._id}" id="delete-${obj._id}">Delete</button>
                  </td>
              </tr>`
   $('#tests-table').append(row)

   $(`#delete-${obj._id}`).on('click', deleteTest);

}
function deleteTest() {
   var testid = $(this).data('testid');
   var a=[];
   if(JSON.parse(localStorage.getItem("logeddetails"))!=null)
     a=JSON.parse(localStorage.getItem("logeddetails"));
   var row = $(`.test-row-${testid}`)
   var x={"hid":"","deleteid":""};
   x.hid=a[0].hid;
   x.deleteid=testid;
   row.remove();
   $.ajax({
   url: '/api/docop/del/',
   type: 'DELETE',
   method : 'delete',
   data:x,
   dataType: 'json'
});
}
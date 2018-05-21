$(document).ready(function(){

//Hide label until form is engaged
$("label").hide();

     $("input").click(function(){
// Change form text to white
          $(".form-control").css({"color": "#fff", "font-weight": "200"});
          $("label").fadeIn(30);
     });

 });

 // var serverRequest = new XMLHTTPREQUEST();

$(document).ready(function(){

  $("form#emailSubscribe").submit(function(event){
    event.preventDefault();
    var email = $("#email-subscribe").val();
    if (email != ""){
      //console.log(email)
      alert(email + " " + "has been successfully added to our email list. Thank you.")
      $('#email-subscribe').val("");
    }else {
      alert("Type email or i'll crush you!!");
      $('#email-subscribe').val("");
    }
  });
});

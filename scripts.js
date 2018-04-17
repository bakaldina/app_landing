jQuery.validator.addMethod("checkMask", function(value, element) {
    return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value);
});
 
$.stellar({
   horizontalScrolling: false,
   verticalOffset: 40
});

$('form').validate();
  $.validator.addClassRules({
    'js-phone': {
      checkMask: true
    }
  });

$('.js-phone').mask("+7(999)999-9999", {
    autoclear: false
});

$("form").submit(function(e){
   e.preventDefault();
   var phone = $('.js-phone').val().replace(/\D/g,'');
   if (phone.length !== 11) {
       return;
   }

   var tokenName = $("meta[name=csrf-token-name]").prop("content"); // 
   var token = $("meta[name=csrf-token]").prop("content");

   $.get("/", {phone: phone}, function(response) {
       var openbutton = document.querySelector('.js-OpenModal');
       var modalwindow = document.querySelector('.modals');
       var closebutton = document.querySelector('.modals .close');
       var modalsOverley = document.querySelector('.modals__overlay');
       modalwindow.classList.add("show");
       var closebutton = document.querySelector('.modals .close');
       var modalsOverley = document.querySelector('.modals__overlay');
       modalsOverley.onclick = function() {
           modalwindow.classList.remove("show");
       }
       closebutton.onclick = function() {
           modalwindow.classList.remove("show");
       }
   });
});
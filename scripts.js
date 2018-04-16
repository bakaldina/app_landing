// var phoneInput = document.querySelector('.phone')
// phoneInput.addEventListener('keydown', function(event) {
//    if( !(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) { event.preventDefault() }
//     var mask = '+7 (111) 111-11-11'; // Задаем маску
 
//     if (/[0-9\+\ \-\(\)]/.test(event.key)) {
//         // Здесь начинаем сравнивать this.value и mask
//         // к примеру опять же
//         var currentString = this.value;
//         var currentLength = currentString.length;
//         if (/[0-9]/.test(event.key)) {
//             if (mask[currentLength] == '1') {
//                 this.value = currentString + event.key;
//             } else {
//                 for (var i=currentLength; i<mask.length; i++) {
//                 if (mask[i] == '1') {
//                     this.value = currentString + event.key;
//                     break;
//                 }
//                 currentString += mask[i];
//                 }
//             }
//         }
//     } 
// });

// jQuery.validator.addMethod("checkMask", function(value, element) {
//     return /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value);
// });
  
$.stellar({
    horizontalScrolling: false,
    verticalOffset: 40
});

$('form').validate({
    debug: true
});

$.validator.addClassRules({
    'js-phone': {
        checkMask: true
    }
});

// $('.js-phone').mask("+7(999)999-9999", {
//     autoclear: false
// });

$("form").submit(function(e){
    console.log(1);
    e.preventDefault();
    var phone = $('.js-phone').val().replace(/\D/g,'');
    console.log(phone);
    if (phone.length !== 11) {
        console.log(2);
        return;
    }

    var tokenName = $("meta[name=csrf-token-name]").prop("content"); // 
    var token = $("meta[name=csrf-token]").prop("content");

    $.get("/", {phone: phone}, function(response) {
        console.log(3);
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
  
// // var openbutton = document.querySelector('.js-OpenModal');
// // var modalwindow = document.querySelector('.modals');
// var closebutton = document.querySelector('.modals .close');
// var modalsOverley = document.querySelector('.modals__overlay');

// // openbutton.onclick = function() {
// //     modalwindow.classList.add("show");
// // }

// modalsOverley.onclick = function() {
//     modalwindow.classList.remove("show");
// }
// closebutton.onclick = function() {
//     modalwindow.classList.remove("show");
// }

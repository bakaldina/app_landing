var phoneInput = document.querySelector('.phone')
phoneInput.addEventListener('keydown', function(event) {
   if( !(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) { event.preventDefault() }
    var mask = '+7 (111) 111-11-11'; // Задаем маску
 
    if (/[0-9\+\ \-\(\)]/.test(event.key)) {
        // Здесь начинаем сравнивать this.value и mask
        // к примеру опять же
        var currentString = this.value;
        var currentLength = currentString.length;
        if (/[0-9]/.test(event.key)) {
            if (mask[currentLength] == '1') {
                this.value = currentString + event.key;
            } else {
                for (var i=currentLength; i<mask.length; i++) {
                if (mask[i] == '1') {
                    this.value = currentString + event.key;
                    break;
                }
                currentString += mask[i];
                }
            }
        }
    } 
});

var openbutton = document.querySelector('.js-OpenModal');
var modalwindow = document.querySelector('.modals');
var closebutton = document.querySelector('.modals .close');
var modalsOverley = document.querySelector('.modals__overlay');

openbutton.onclick = function() {
    modalwindow.classList.add("show");
}

modalsOverley.onclick = function() {
    modalwindow.classList.remove("show");
}
closebutton.onclick = function() {
    modalwindow.classList.remove("show");
}

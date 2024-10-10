// const = a variable that can't be changed

const PI = 3.14159;
let radius;
let circumfrence;

//PI = 314.159; // not allowed!

_button = document.getElementById("mySubmit");
_radiusInput = document.getElementById("myRadius");
_result = document.getElementById("myP");

_button.onclick = function() {
    radius = Number(_radiusInput.value)
    //alert(pi);
    circumfrence = radius * PI * 2;
    _result.textContent = circumfrence;
}

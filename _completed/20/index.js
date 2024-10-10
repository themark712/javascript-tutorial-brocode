// Javascript For Loops

const _result = document.getElementById("myP");

for (let i = 1; i <= 10; i += 2) {
    //_result.innerHTML += "Hello<br>";
}

for (let i = 1; i <= 20; i++) {
    if (i == 13) {
        continue;
    } else {
        _result.innerHTML += i + "<br>";
    }
}

for (let i = 1; i <= 20; i++) {
    if (i == 13) {
        break;
    } else {
        _result.innerHTML += i + "<br>";
    }
}
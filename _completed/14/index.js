// Javascript String Methods
let _result = document.getElementById("myP");
let userName = "615-555-1234";

_result.textContent = userName;

_result.textContent = userName.charAt(6);

_result.textContent = userName.indexOf("T");

_result.textContent = userName.lastIndexOf("p");

_result.textContent = userName.length;

_result.textContent = userName.trim();

_result.textContent = userName.toUpperCase();

_result.textContent = userName.toLowerCase();

_result.textContent = userName.repeat(5);

_result.textContent = userName.startsWith("l");

_result.textContent = userName.endsWith("5");

_result.textContent = userName.includes(" ");

_result.textContent = userName.replaceAll("-","");

_result.textContent = userName.padStart(15, "*");

_result.textContent = userName.padEnd(20, "-");
var getusername = prompt("Enter your name");

console.log(getusername);

document.getElementById("username") .innerText = getusername;


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
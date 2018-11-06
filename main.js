
function sayHello() {
  console.log("Hello, World!");
}

function popupHello() {
  alert("Hello, World!");
}

function browserHello() {
  var p=document.getElementById('browserHello')
  p.innerHTML="Hello, World!";
}

function strangerHello() {
  var person = prompt("Please enter your name");

  if (person !=null) {
      document.getElementById("strangerHello").innerHTML ="Hello " + person + "! How are you today?";
  }
}

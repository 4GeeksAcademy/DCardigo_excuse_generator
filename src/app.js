// // /* eslint-disable */
// import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };

var quien = [
  "El perro del vecino ",
  "Satanás ",
  "Michael Jackson ",
  "John Wick ",
  "Un mapache "
];
var accion = [
  "se comió ",
  "secuestró ",
  "estaba cantando ",
  "me pidió ",
  "se cargó "
];
var que = [
  "mis zapatos ",
  "el alma de mi abuela ",
  "el Aserejé ",
  "un lápiz ",
  "mi disfraz de halloween "
];
var cuando = [
  "mientras dormia ",
  "al amanecer ",
  "en la comunión de mi primo ",
  "en clase de plástica ",
  "en la siesta "
];

function frase() {
  function onLoad(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  let randomQuien = onLoad(quien);
  let randomAccion = onLoad(accion);
  let randomQue = onLoad(que);
  let randomCuando = onLoad(cuando);

  var escusa = randomQuien + randomAccion + randomQue + randomCuando;

  var excuse = document.querySelector("#excuse");
  excuse.innerHTML = escusa;
}

var btn = document
  .getElementById("btn-volumen")
  .addEventListener("click", frase);

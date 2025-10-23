function Zmien_kolor() {
  document.getElementById("czerwony").style.color = "red";
  document.getElementById("imie").style.color = "red";
}

function Zmien_kolor_zielony() {
  document.getElementById("imie").style.color = "green";
  document.getElementById("zielony").style.color = "green";
}

function Zmien_tekst_zielony() {
  document.getElementById("zielony").innerHTML = "Zielony";
}

function Wroc_tekst_czerwony() {
  document.getElementById("czerwony").style.color = "black";
}

function Wroc_tekst_zielony() {
  document.getElementById("zielony").innerHTML = "Zmień kolor";
  document.getElementById("zielony").style.color = "black";
}
function Zmien_tekst_czerwony() {
  document.getElementById("czerwony").innerHTML = "Czerwony";
}
function Wroc_tekst_czerwony() {
  document.getElementById("czerwony").innerHTML = "Zmień kolor";
  document.getElementById("czerwony").style.color = "black";
}
function Wroc_na_czarny() {
  document.getElementById("czarny").innerHTML = "Cofnij";
}
function Zmien_na_czarny() {
  document.getElementById("imie").style.color = "black";
}
let i = 0;

function BgColor() {
  const colors = ["#ee5253", "#00bce4", "#222f3e"];
  i = i < colors.length - 1 ? ++i : 0;
  document.getElementById("body").style.backgroundColor = colors[i];
}

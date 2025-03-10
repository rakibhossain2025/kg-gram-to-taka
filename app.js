document.getElementById("calculate").addEventListener("click", function () {
  const Kg = Number(document.getElementById("input-1").value) || 0;
  const Gram = Number(document.getElementById("input-2").value) || 0;
  const Taka = Number(document.getElementById("input-3").value) || 1;

  let totalGram = Kg * 1000 + Gram;
  let takapargram = Taka / 1000;

  let total = takapargram * totalGram;
  document.getElementById("toalkg").innerText = Kg + ' KG'
  document.getElementById("toalgm").innerText = Gram + '  gm'
  document.getElementById("toaltaka").innerText = total.toFixed(3) + ' Taka';

function random(){
  const red =Math.floor(199+ Math.random() *55);
  const green =Math.floor(200+ Math.random() *55);
  const blue =Math.floor(200+ Math.random() *56);
  return `rgb(${red}, ${blue},${green})`
}
document.body.style.backgroundColor =random()
alert("taka calculated 🤑")
});

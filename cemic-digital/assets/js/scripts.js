// Contraste
function toggleContrast() {
  document.body.classList.toggle("high-contrast");
}

// Tamanho da fonte
let fontSize = 1;
function adjustFontSize(delta) {
  fontSize += delta * 0.1;
  document.body.style.fontSize = fontSize + "em";
}

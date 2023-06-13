var peso = document.getElementById("peso"),
 dolar = document.getElementById("dolar"),
 tasa = document.getElementById("tc"),
 labelP = document.getElementById("labelPeso"),
 labelD = document.getElementById("labelDolar"),
 value = 0;
const radios = document.querySelectorAll('.dark-radio');

function Conversion(value) {
  var moneda;
  var tasa_cambio = tasa.value;
  if (value === 0) {
    moneda = peso.value;
    resultado = moneda * tasa_cambio;
    dolar.value = resultado;
  } else if (value === 1) {
    moneda = peso.value;
    resultado = moneda / tasa_cambio;
    dolar.value = resultado;
  }
}

radios.forEach(radio => {
  radio.addEventListener('click', function() {
    radios.forEach(otherRadio => {
      if (otherRadio !== radio) {
        otherRadio.checked = false;
      }
    });
  });

  radio.addEventListener('change', function() {
    if (radio.checked) {
      const radioID = radio.id;
      if (radioID === 'rdolar'){
        labelP.innerHTML = "Dolar";
        labelD.innerHTML = "Peso";
        value = 1;
      } else {
        labelP.innerHTML = "Peso";
        labelD.innerHTML = "Dolar";
        value = 0;
      }
    }
  })
});

document.getElementById("convert").addEventListener("click", function () {
  Conversion(value);
});

document.getElementById("clean").addEventListener("click", function () {
  const inputsTexto = document.querySelectorAll('input[type="text"]');

  inputsTexto.forEach((input) => {
    input.value = "";
  });
});
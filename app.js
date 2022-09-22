// https://www.omnicalculator.com/health/eosinophil-count

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const absoluteeosinophilcountRadio = document.getElementById('absoluteeosinophilcountRadio');
const whitebloodcellsRadio = document.getElementById('whitebloodcellsRadio');
const eosinophilsRadio = document.getElementById('eosinophilsRadio');

let absoluteeosinophilcount;
let whitebloodcells = v1;
let eosinophils = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

absoluteeosinophilcountRadio.addEventListener('click', function() {
  variable1.textContent = 'White blood cells';
  variable2.textContent = 'Eosinophils';
  whitebloodcells = v1;
  eosinophils = v2;
  result.textContent = '';
});

whitebloodcellsRadio.addEventListener('click', function() {
  variable1.textContent = 'Absolute eosinophil count';
  variable2.textContent = 'Eosinophils';
  absoluteeosinophilcount = v1;
  eosinophils = v2;
  result.textContent = '';
});

eosinophilsRadio.addEventListener('click', function() {
  variable1.textContent = 'Absolute eosinophil count';
  variable2.textContent = 'White blood cells';
  absoluteeosinophilcount = v1;
  whitebloodcells = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(absoluteeosinophilcountRadio.checked)
    result.textContent = `Absolute eosinophil count = ${computeabsoluteeosinophilcount().toFixed(2)}`;

  else if(whitebloodcellsRadio.checked)
    result.textContent = `White blood cells = ${computewhitebloodcells().toFixed(2)}`;

  else if(eosinophilsRadio.checked)
    result.textContent = `Eosinophils = ${computeeosinophils().toFixed(2)}`;
})

// calculation

function computeabsoluteeosinophilcount() {
  return Number(whitebloodcells.value) * (Number(eosinophils.value) / 100);
}

function computewhitebloodcells() {
  return Number(absoluteeosinophilcount.value) / (Number(eosinophils.value) / 100);
}

function computeeosinophils() {
  return (Number(absoluteeosinophilcount.value) / Number(whitebloodcells.value)) * 100;
}
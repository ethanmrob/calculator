const numberButtons = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const symbols = ['add', 'multiply', 'subtract', 'divide']
let equation = ''
for (let i = 0; i < numberButtons.length; i++) {
  const button = document.getElementById(numberButtons[i]);
  button.onclick = function() {
    document.getElementById('equationText').innerHTML += i.toString();
    equation = equation.concat(i)
  }
}
for (let i = 0; i < symbols.length; i++) {
    const symbolBtn = document.getElementById(symbols[i]);
    symbolBtn.onclick = function() {
        document.getElementById('equationText').innerHTML += symbolBtn.innerHTML;
        equation = equation.concat(symbolBtn.innerHTML)
        
    }
}
const submitBtn = document.getElementById('submitBtn');
submitBtn.onclick = function() {
    document.getElementById('equationText').innerHTML = eval(equation).toString()
}

const clearBtn = document.getElementById("clearBtn");
clearBtn.onclick = function() {
  const d = new Date();
  document.getElementById('equation-history').innerHTML += '<p>' + equation.toString() + '=' + eval(equation).toString() + '<h5>(' + d.toLocaleTimeString() + ')</h5>' + '</p>';
  equation = ''
  document.getElementById('equationText').innerHTML = '';
}
const form = document.querySelector('form');
const celsiusInput = document.querySelector('#celsius');
const fahrenheitElement = document.querySelector('#fahrenheit');
const kelvinElement = document.querySelector('#kelvin');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;

    fahrenheitElement.textContent = `Temperatura em Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
    kelvinElement.textContent = `Temperatura em Kelvin: ${kelvin.toFixed(2)}K`;
});


const modoBotao = document.getElementById('modo-botao');


modoBotao.addEventListener('click', () => {
 
  if (document.body.classList.contains('modo-escuro')) {
    
    document.body.classList.remove('modo-escuro');
   
    modoBotao.textContent = 'Modo Claro';
  } else {
    
    document.body.classList.add('modo-escuro');
    
    modoBotao.textContent = 'Modo Escuro';
  }
});

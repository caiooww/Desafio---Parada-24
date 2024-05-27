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

// Seleciona o botão de modo
const modoBotao = document.getElementById('modo-botao');

// Adiciona evento de clique ao botão
modoBotao.addEventListener('click', () => {
  // Verifica se o corpo do documento já tem a classe modo-escuro
  if (document.body.classList.contains('modo-escuro')) {
    // Remove a classe modo-escuro
    document.body.classList.remove('modo-escuro');
    // Altera o texto do botão para "Modo Claro"
    modoBotao.textContent = 'Modo Claro';
  } else {
    // Adiciona a classe modo-escuro
    document.body.classList.add('modo-escuro');
    // Altera o texto do botão para "Modo Escuro"
    modoBotao.textContent = 'Modo Escuro';
  }
});
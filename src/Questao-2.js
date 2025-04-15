const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function verificaNumeroFibonacci(numero) {
    let numeroInicial1 = 0;
    let numeroInicial2 = 1;
  
    if (numero === 0 || numero === 1) {
      return `O número ${numero} pertence à sequência de Fibonacci.`;
    }
  
    let proximoNumero = numeroInicial1  + numeroInicial2;
  
    while (proximoNumero <= numero) {
      if (proximoNumero === numero) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
      }
  
      numeroInicial1 = numeroInicial2;
      numeroInicial2 = proximoNumero;
      proximoNumero = numeroInicial1 + numeroInicial2;
    }
  
    return `O número ${numero} NÃO pertence à sequência de Fibonacci.`;
  }

  rl.question('Digite um número para verificar se pertence à sequência de Fibonacci: ', (input) => {
    const numero = parseInt(input);
  
    if (isNaN(numero)) {
      console.log('Por favor, digite um número válido.');
    } else {
      const resultado = verificaNumeroFibonacci(numero);
      console.log(resultado);
    }
  
    rl.close();
  });
  
  
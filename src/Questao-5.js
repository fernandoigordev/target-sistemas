function inverterString(str) {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
      resultado += str[i];
    }
    return resultado;
  }
  
  const entrada = "Target Sistemas";
  const invertida = inverterString(entrada);
  
  console.log("String Normal: " + entrada);
  console.log("String invertida: " + invertida);
  
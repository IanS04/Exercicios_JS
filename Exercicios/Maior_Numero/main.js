const { gets, print } = require('./funcoes')

const alunos = gets();
const numeroSoteio = [];

for (let i = 0; i < alunos; i++){
    const numeroSoteio = gets();
    numeroSoteio.push(numeroSoteio);
}

let maiorValor

for (let i = 0; i < numeroSoteio.length; i++) {
    const maior = numeroSoteio[i];
    if (numeroSoteio > maiorValor) {
        maiorValor = numeroSoteio;
    }
}

print(maiorValor);
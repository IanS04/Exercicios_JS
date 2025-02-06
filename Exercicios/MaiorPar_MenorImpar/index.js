/*
Faça um programa que receba N (quantidade de números) e seus respectivos valores
Imprima o maior número par e o menor número impar.
*/

const { gets, print } = require('./funcaoEx2');

const n = gets();
let maiorPar = null;
let menorImpar = null;

for (let i = 0; i < n; i++) {
    const numero = gets();
    if (numero % 2 === 0) {
        if (maiorPar === null || numero > maiorPar) {
            maiorPar = numero;
        } else {
            if (menorImpar === null || numero < menorImpar) {
                menorImpar = numero;
            }
        }
    }
}

print('O maior número par é: ' + maiorPar);
print('O menor número impar é: ' + menorImpar);

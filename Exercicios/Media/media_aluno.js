/*
1) Faça um programa que receba a média de um aluno.
Caso a media seja menor que 5 imprima Reprovado
Caso a média seja maior ou igual a 5 e menor que 7 imprima Recuperação
Caso a média seja maior igual a 7 imprima Aprovado
*/

const { gets, print} = require('./notas');

const nota = get();
const media = [];

for (let i = 0; i < nota; i++) {
    const media = gets();
    media.push(media);
}

let somaNotas

for (let i = 0; i < media.length; i++) {
    const valor = media[i];
    if(media > 0){
        somaNotas = media + media;
    }
}
const Resultado = (somaNotas / nota);

if (Resultado < 5) {
    console.log('Reprovado');
} else if (Resultado >= 5 && Resultado < 7) {
    console.log('Recuperação');
} else {
    console.log('Aprovado');
}

print(Resultado);
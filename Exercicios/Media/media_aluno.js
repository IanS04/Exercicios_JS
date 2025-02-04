/*
Faça um programa que receba a média de um aluno.
Caso a media seja menor que 5 imprima Reprovado
Caso a média seja maior ou igual a 5 e menor que 7 imprima Recuperação
Caso a média seja maior igual a 7 imprima Aprovado
*/

const { gets, print} = require('./notas');

const media = gets();

if (media < 5) {
    print('Reprovado');
} else if (media >= 5 && media < 7){
    print('Reculperação');
} else {
    print('Aprovado');
}

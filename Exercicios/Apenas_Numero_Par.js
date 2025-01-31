// Crie um programa que seja capaz de percorrer uma lista de numeros e imprima cada número Par encontrado

const numeros = [0,1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numeros.length; i++){
    const numero = numeros[i]
    if (numero%2 === 0){
        console.log("o numero " + numero + " é par");
    }
}

/*Outra alternativa para o codigo sem o uso de uma lista*/

for (let i = 0; i < 50; i++){
    const par = i
    if (par%2 === 0){
        console.log("o numero " + par + " é par");
    }
}

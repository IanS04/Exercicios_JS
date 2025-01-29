/*
1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustivel por kilometro rodado
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor
gasto em reais para realizar esse percurso
*/
class Carro {
    constructor(marca, cor, gastoKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoKm = gastoKm;
    }
    gastoPercurso(distanciaKm,valorCombustivel){
        return distanciaKm * this.gastoKm * valorCombustivel;
    }
}

const SW4 = new Carro('Toyota', 'branco', 1/7);
const Sandero = new Carro('Renault', 'prata', 1/14.7 )

console.log('O valor gasto no percurso é ' + Sandero.gastoPercurso(90, 6.13));
/*
2 - Crie uma classe para representar pessoas.
para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70Kg e 1,75 de altura e peça ao José para dizer o valor do seu IMC;
*/

class pessoa{
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    
    calculoIMC(){
      return this.peso / (this.altura * this.altura)
    }
    classificarIMC(){
        const imc = this.calculoIMC();
        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso normal';
        } else if (imc >= 25 && imc < 30) {
            return 'Acima do peso';
        } else if (imc >= 30 && imc <40) {
            return 'Obeso';
        } else {
            return 'Obesidade grave';
        }
    }
}


const jose = new pessoa('José', 70, 1.75);
console.log('o valor do IMC é de ' + jose.calculoIMC() + ' de acordo com o calculo a Classificação é: ' + jose.classificarIMC());
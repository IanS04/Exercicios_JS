const entradas = [8, 2, 10, 7];
let i = 0;

function gets () {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}
module.exports = { gets, print };
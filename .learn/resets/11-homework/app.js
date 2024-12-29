const sum = (a,b) => {
    return a + b
}
console.log(sum(3,7))
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    let valueInDollar = valueInDollar * 156.5;
    return valueInDollar;

}
const fromYenToPound = function(valueInYen){
    let valueInYen = valueInYen * 0.87;
    return valueInYen;
}
module.exports = { sum,fromEuroToDollar, fromDollarToYen, fromYenToPound };



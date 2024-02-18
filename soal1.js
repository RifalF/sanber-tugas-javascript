const prompt = require('prompt-sync')({sigint: true});

const number1 = prompt('Masukan angka: ');
const result = Math.sqrt(number1);

if (number1 < 0) {
    console.log("Tidak bisa input bilangan negatif");
}
else if (number1 % 2) {
    console.log("TIdak bisa input bilangan ganjil");
} else {
    console.log("Hasil dari akar kuadrat", number1, "adalah " + result);
}
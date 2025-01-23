//==== Menentukan ganjil genap
var bilangan = 12;
var hasilbagi = bilangan % 2;
if (hasilbagi === 0) {
    console.log("Bilangan tersebut genap");
}
else
    (console.log("Bilangan tersebut ganjil"));
//Memakai ternary operator
hasilbagi === 0 ? console.log("Bilangan tersebut genap") : console.log("Bilangan tersebut ganjil");
//===== Menentukan bilangan prima
var cekprim = 17;
var isPrime = true;
if (cekprim < 2) {
    isPrime = false;
}
else {
    for (var i = 2; i * i <= cekprim; i++) {
        if (cekprim % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log("Bilangan " + cekprim + " adalah bilangan Prima");
}
else
    console.log("Bilangan " + cekprim + " bukan bilangan Prima");
//==== SUM OF THE NUMBERS
var sumnum = 5;
var sum = 0;
var result = "";
for (var i = 1; i <= sumnum; i++) {
    sum += i;
    // Menambahkan nilai i ke dalam sum
    result += i; // Menambahkan nilai i ke string result
    // Tambahkan tanda '+' jika bukan angka terakhir
    if (i < sumnum) {
        result += "+";
    }
}
console.log("".concat(result, " = ").concat(sum));
// FACTORIAL OF NUMBER
var facnum = 5;
var facsum = 0;
var facresult = "";
for (var i = sumnum; i <= sumnum; i--) {
}

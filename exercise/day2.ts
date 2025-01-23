//==== Menentukan ganjil genap

const bilangan: number = 12

let hasilbagi: number = bilangan % 2

if (hasilbagi === 0) {
    console.log("Bilangan tersebut genap");
} else (console.log("Bilangan tersebut ganjil")
);

//Memakai ternary operator
hasilbagi === 0 ? console.log("Bilangan tersebut genap") : console.log("Bilangan tersebut ganjil");



//===== Menentukan bilangan prima

const cekprim: number = 17;

let isPrime: boolean = true;

if (cekprim < 2) {
    isPrime = false;
} else {
    for (let i = 2; i * i <= cekprim; i++) {
        if (cekprim % i === 0) {
            isPrime = false;
            break
        }

    }
}

if (isPrime) {
    console.log("Bilangan " + cekprim + " adalah bilangan Prima");
} else console.log("Bilangan " + cekprim + " bukan bilangan Prima");


//==== SUM OF THE NUMBERS

let sumnum: number = 5;
let sum: number = 0;
let result: string = "";

for (let i = 1; i <= sumnum; i++) {
    sum += i;
    // Menambahkan nilai i ke dalam sum
    result += i; // Menambahkan nilai i ke string result

    // Tambahkan tanda '+' jika bukan angka terakhir
    if (i < sumnum) {
        result += "+";
    }
}

console.log(`${result} = ${sum}`);


// FACTORIAL OF NUMBER

let facnum: number = 9;
let facsum: number = 1;
let facresult: string = "";

for (let i = facnum; i >= 1; i--) {
    facsum *= i
    facresult += i;

    if (i > 1) {
        facresult += "x"
    }

}

console.log(`${facresult} = ${facsum}`);




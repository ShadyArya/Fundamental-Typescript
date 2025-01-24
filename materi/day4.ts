//===== ARRAY

const arr: string[] = ["A", "B", "C", "D"]; //Antara kode ini dengan yang dibawah adalah sama-sama penulisan array
const arr2: string[] = new Array("A", "B", "C", "D");


//===== ARRAY OF OBJECT

// const students: { nama: string; email: string; }[] = [
//     { nama: "shady", email: "shadyaja@gmail.com" },
//     { nama: "arya", email: "aryaaja@gmail.com" },
//     { nama: "fadillah", email: "fadilaja@gmail.com" }
// ]

//Jika di riil case, { nama: string, email: string } deklarasi tipe bisa dilakukan dengan interface
//Penamaan interface harus singular, dan diawali huruf besar, contoh : Student (tanpa s dibelakang)

interface Student {
    nama: string;
    email: string;
    hoby?: string; //Diberi tanda tanya menandakan opsional, meskipun tidak ada data yang dipakai di array maka code tidak error
    street?: {
        namajalan: string; //Deklarasi type object didalam object
        nomorrumah: string;
    }
}


const students: Student[] = [
    {
        nama: "shady", email: "shadyaja@gmail.com",
        street: { namajalan: "jalan xyz", nomorrumah: "6789" }
    }, // Object didalam object
    { nama: "arya", email: "aryaaja@gmail.com" },
    { nama: "fadillah", email: "fadilaja@gmail.com" }
]

//Atau bisa juga pake type
// type Student = {
//     nama: string;
//     email: string;
// };



//===== Looping atau menampilkan semua data array tanpa harus memanggil satu-satu indeksnya

const fruits: string[] = ["Apel", "Semangka", "Alpukat"];

for (let fruit of fruits) {  //Base practise nya adalah, nama variabel yang di deklarasikan didalam for bentuk singular dari variabel utama
    console.log(fruit);
}



//==== Exercise
const angkas: number[] = [1, 2, 3, 4, 5, 6];

let result: string = "";
let total: number = 0;
let index: number = 0;

for (let angka of angkas) {
    total += angka; // Tambahkan angka ke total sum
    result += angka; // Tambahkan angka ke string result

    // Tambahkan tanda '+' jika bukan angka terakhir
    if (index < angkas.length - 1) {
        result += "+";
    }

    index++;
}

// Cetak hasil akhir
console.log(`${result} = ${total}`);



//====== FUNCTION

//Ada 2 cara untuk menuliskan fungsi
//1. Function Deklarasion

function balok(panjang: number, lebar: number) {
    return (panjang * lebar)
}

const hasil1 = balok(6, 4);
const hasil2 = balok(10, 4);

console.log(hasil1);
console.log(hasil2);

//2. Function Expresion (Mendeklarasikan variabel yang berisi value function)

const balok2 = function (panjang: number, lebar: number) {
    return (panjang * lebar)
}

const hasilbalok2 = balok2(8, 9)

console.log(hasilbalok2);



//======= ARROW FUNCTION
//Shortcut untuk function expresion

//contoh menggunakan function expression

const persegi = function (sisi: number) {
    return sisi * sisi
}
console.log(persegi(5));

//contoh menggunakan arrow function

const persegi2 = (sisi: number) => {
    return sisi * sisi
}
console.log(persegi2(4));

//jika hanya satu lain saja, bisa dibuat seperti ini
const persegi3 = (sisi: number) => sisi * sisi
console.log(persegi3(5));




//====== FUNCTION SCOPE
// Variabel yang dideklarasikan didalam function hanya bisa di panggil didalam functin saja

function pesan() {
    let isipesan: string = "Hallo semua"
    console.log(isipesan);
    return isipesan
}

console.log(pesan());


//====== PARAMETER & ARGUMEN

function login(nama: string) {
    let sambutan: string = "Hallo";
    return sambutan + " " + nama
}


const tampilpesan = login("Shady")
console.log(tampilpesan);

console.log(login("Shady"));
console.log(login("Arya"));
console.log(login("Fadillah"));


const datausers: string[] = ["Shady", "Fadil", "Yadi"]

for (let datauser of datausers) {
    console.log(login(datauser));
}



//====== DEFAULT PARAMETER

function multiply(a: number, b: number = 1) {  //paramater b udah terisi default value, value tersebut dapat terubah saat pemanggilan
    return a * b                               //default value harus paling belakang
}

console.log(multiply(3, 4));


//====== REST PARAMETER

function myFunct(a: number, b: number, ...seterusnya: number[]) {

    console.log(a);
    console.log(b);
    console.log(seterusnya);
    return;

}

myFunct(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)


//====== FUNCTION NESTED
//Function didalam function

function getMessage(username: string) {
    function sayhello() {
        return "Hallo " + username
    }

    function welcome() {
        return ", Selamat datang di Duniaku"
    }

    return sayhello() + welcome()
}

console.log(getMessage("Shady"));


//======= RECURSIVE
//Fungsi yang memanggil dirinya sendiri

function countDown(angkas: number) {

    console.log(angkas);

    let nextNumber = angkas - 1

    if (nextNumber > 0) {
        countDown(nextNumber)
    }



}

countDown(10);






//========== ARRAY BUILD IN METHOD
// -> JOIN (Menggabungkan dua kata yang terpisah)

const words: string[] = ["Hello", " World"]
console.log(words.join(""));


// ->POP (Untuk menghilangkan data array paling akhir)

const words2: string[] = ["Hello", "World", "Wkwkwkwk"]
words2.pop();
console.log(words2);

// ->SHIFT (Untuk menghilangkan data array paling depan)

const words3: string[] = ["Hello", "World", "Wkwkwkwk"]
words3.shift();
console.log(words3);

// ->PUSH (Untuk menambahkan data array paling belakang)

const words4: string[] = ["Hello", "Shady"]
words4.push("Selamat datang didunia coding");
console.log(words4);

// ->UNSHIFT (Untuk menambahkan data array paling depan)

const words5: string[] = ["Hello", "Shady"]
words5.unshift("Selamat datang didunia coding");
console.log(words5);

// ->CONCAT untuk menggabungkan 2 array menjadi 2 array

const kata1: string[] = ["Hello"]
const kata2: string[] = ["World"]
const kata3: string[] = ["Yang Indah"]

console.log(kata1.concat(kata2).concat(kata3))

//Jika ingin lebih clean dan singkat seperti ini

console.log(...kata1, ...kata2, ...kata3);

//Atau deklarasi variabel untuk menggabungkan array dulu

const gabung: string[] = [...kata1, ...kata2, ...kata3]
console.log(gabung);



//-> SPLICE untuk menghapus, menambahkan, mengganti data array
//-> Rumus : splice(startIndex, berapa yang mau didelete, item)

const bulan: string[] = ["Jan", "Mar", "Apr", "May"]

bulan.splice(1, 0, "feb") //Menambahkan data
console.log(bulan);

bulan.splice(4, 1) //Menghapus data
console.log(bulan);

bulan.splice(4, 1, "Des") //Edit data
console.log(bulan);


//-> SLICE untuk menampilkan data Array yang diinginkan 
//-> Rumus : slice(startIndex, endIndex)

const fruitss: string[] = ["Apel", "Semangka", "Rambutan", "Melon", "Pir"]

console.log(fruitss.slice(1, 4)); //Mengambil data dari depan
console.log(fruitss.slice(-4, -2)); //Mengambil data dari belakang


//-> INDEXOF untuk mencari index dari value yang di cari

const fruits2: string[] = ["Apel", "Semangka", "Rambutan", "Melon", "Pir"]
console.log(fruits2.indexOf("Pir"));


//-> SORT untuk mengurutkan data string atau number array

const fruits3: string[] = ["Apel", "Semangka", "Rambutan", "Melon", "Pir"]
console.log(fruits3.sort()); //Menampilkan urutan dari index awal ke akhir
// fruits3.sort()
console.log(fruits3.sort().reverse()); //Menampilkan urutan dari index akhir ke awal

// Versi number tanpa compare function
const points: number[] = [1, 3, 2, 4, 6, 8, 7]
points.sort();
console.log(points);

// Jika dari kecil ke besar
points.sort();
console.log(points.reverse());

// Versi number menggunakan compare function
const points2: number[] = [1, 3, 2, 4, 6, 8, 7];
points2.sort((a, b) => a - b); //Jika kecil ke besar menggunakan a - b, jika besar ke kecil menggunakan b - a
console.log(points2);


//-> FOREACH untuk melakukan looping pada Array tapi tidak bisa me return apapun
const fruits4: string[] = ["Apel", "Semangka", "Rambutan", "Melon", "Pir"]
const hasil3 = fruits4.forEach((fruit, index) => {
    console.log(fruit);
    console.log(index);
});


//-> MAP untuk melakukan looping pada Array bisa me return
const fruits5: string[] = ["Apel", "Semangka", "Rambutan", "Melon", "Pir"]

const hasil4 = fruits5.map((isiarray) => {
    return isiarray;
})

console.log(hasil4);

//-> FILTER , sama seperti MAP, namun mengikuti kondisi return

const ages: number[] = [15, 17, 19, 22, 28, 32]

const hasil5 = ages.filter((age) => {
    return age > 20
})

console.log(hasil5);


//-> FIND, mencari lalu menampilkan satu data berdasarkan index yang ditemukan pertama kali
const ages2: number[] = [15, 17, 19, 22, 28, 32]
const hasil6 = ages2.find((age) => {
    return age > 15
})
console.log(hasil6);

//-> FINDINDEX, sama seperti find, tapi data yang ditampilkan adalah indexnya

const ages3: number[] = [15, 17, 19, 22, 28, 32]
const hasil7 = ages2.findIndex((age) => {
    return age > 17
})
console.log(hasil7);


//-> REDUCE, biasa digunakan untuk menambahkan isi data tiap array

const nomor: number[] = [12, 24, 32]
const hasilnomor = nomor.reduce((a, b) => a + b);

console.log(hasilnomor);


//-> INCLUDES, mengecek apakah data array tersedia atau tidak, akan menampilkan data boolean

const fruits6: string[] = ["Apel", "Semangka", "Rambutan", "Melon", "Pir"]
console.log(fruits6.includes("Pir"));
console.log(fruits6.includes("Kaktus"));

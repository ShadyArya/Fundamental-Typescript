//==== CONDITIONAL


//==== IF ELSE

let umur: number = 15;

if (umur > 17) {
    console.log("Kamu bisa membuat KTP dan Salto dua kali");
} else (
    console.log("Kamu belum bisa buat KTP dan tidak bisa Salto")
)


const nilai: string = "A";

const convertvaluenilai: string = nilai.toLocaleLowerCase() //agar value terconvert ke huruf kecil semua

if (convertvaluenilai === "a") {
    console.log("Nilai bagus");
} else if (convertvaluenilai === "b") {
    console.log("Nilai lumayan");
} else if (convertvaluenilai === "c") {
    console.log("Nilai buruk bet dah");

} else if (convertvaluenilai === "d") {
    console.log("Nilai tidak diketahui");

}

//===== SWITCH CASE

const hari: string = "selasa"

const hariconv: string = hari.toLowerCase()

switch (hariconv) {
    case "senin":
        console.log("Hari senin");
        break;
    case "selasa":
        console.log("Hari selasa");
        break;
    case "rabu":
        console.log("Hari rabu");
        break;
    default:
        console.log("Hari tidak ditemukan");
        break
}


//========= LOGICAL OPERATOR


//==== operator &&
const username: string = "shady"
const pass: string = "shady1234"

if (username === "shady" && pass === "shady1234") {
    console.log("Anda berhasil login cuy");
} else (console.log("Anda gagal login bung Amba"));


//==== operator ||
const car: string = "mercy"

if (car === "bmw" || car === "mercy") {
    console.log("Mobil buatan German");
} else (console.log("Ga tau dah buatan mana itu")
);

//==== operator NOT untuk membalikkan/ngebaik nilai boolean

const isCerah: boolean = true; //khusus untuk boolean penamannya harus diawali dengan is
const isHujan: boolean = !isCerah;

console.log(isCerah);
console.log(isHujan);


//====== TERNARY OPERATOR

// shortcut untuk if else adalah 
// condition ? true : false

const bahasa: string = "javascript";

if (bahasa === "javascript") {
    console.log("Ya anda sedang menggunakan bahasa Javascript")
} else console.log("Anda sedang tidak menggunakan bahasa Javascript");

//begini mempersingkatnya, biasa digunakan di frontend

console.log(bahasa === "javascript" ? "Ya anda sedang menggunakan bahasa Javascript" : "Anda sedang tidak menggunakan javascript");
console.log(bahasa === "javascript" ? "Ya anda sedang menggunakan bahasa Javascript"
    : bahasa === "typescript" ? "Anda sedang menggunakan bahasa typescript" : "Tidak ditemukan");



//======= LOOPING 
//Rangkaian intruksi yang dilakukan berulang kali hingga kondisinya tidak tepenuhi

//type loop : For Loop, while loop, dan do while loop

//FOR LOOP  -> Memiliki 3 statement dalam menuliskan code
//Statement1 : Menginisialisasikan variabel dari looping itu sendiri
//Statement2 : Mendefine kondisi dari looping itu sendiri
//Statement3 : Kode yang di eksekusi diakhir setiap iterasi


for (let i: number = 0; i < 5; i++) {
    console.log("Kamu itu orang hebat");
}


//WHILE LOOPING

let i: number = 1

while (i < 4) {
    console.log("Kamu orang hebat");
    i++
}

//O WHILE LOOP

let count: number = 1

do {
    console.log("Ini iterasi ke " + count);
    count++
} while (count <= 5);


//Break sebagai pembatas agar perulangan tidak terus berjalan
let sum: number = 0;
while (true) {
    console.log("sum " + sum);
    if (sum >= 5) break; //

    sum++

}


//Melakukan skip pada looping

for (let i = 0; i < 5; i++) {
    if (i === 3) continue

    console.log(i);

}
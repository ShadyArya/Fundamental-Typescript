var pesan = "Hello World";
console.log(pesan);
var nama = "Shady";
var nama2 = "Arya";
console.log(nama.toLowerCase());
console.log(nama.toUpperCase());
console.log(nama.replace("S", "D")); // Hanya mengganti S yang ditemukan pertam kali saja
// ta
console.log(nama.split(""));
console.log(nama.concat(" ", nama2)); // Cara menggabungkan beberapa variabel string
console.log(nama.slice(0, 4)); //Menampilkan 4 huruf saja
var sayHai = "Welcome ".concat(nama);
console.log(sayHai);
console.log("Welcome " + nama);
//======== NUMBER BUILD IN METHOD
//String to Number
var angka = "24000";
console.log(Number(angka)); //proses konversi dari string ke number
console.log(parseInt(angka)); //proses konversi dari string ke number
//Number to String
var angka2 = 24;
console.log(String(123));
console.log(angka2.toString());
//Boolean
console.log(Boolean(1)); //Jika ada value nya pasti bernilai True
console.log(Boolean(0)); //Jika tidak ada value nya / 0 pasti bernilai True
console.log(Boolean(""));
console.log(Boolean("Kamu adalah orang keren"));
//Date data types
var tanggal = new Date();
//getMethod
console.log(tanggal);
console.log(tanggal.getFullYear());
console.log(tanggal.getMonth() + 1);
console.log(tanggal.getDate());
//setMethod
tanggal.setDate(24);
tanggal.setMonth(1);
tanggal.setFullYear(2001);
console.log(tanggal);
//========= BASIC OPERATOR
console.log(1 + 2);
console.log(1 - 2);
console.log(10 / 2);
console.log(10 * 2);
console.log(9 % 2);
console.log(Math.pow(9, 2));
var a = 4;
var b = 10;
var hasil = a + b;
console.log(hasil);
//========== Modify in place
var angkaku = 9;
angkaku += 3; // code aslinya adalah angkaku = angkaku + 3 atau 9 + 3
console.log(angkaku);
//========== Increment & Decrement
var angkain = 8;
angkain--;
console.log(angkain);
var angkade = 8;
angkade++;
console.log(angkade);
//========= Postfix & Prefix
var counterpre = 9;
var counterpost = 9;
console.log(++counterpre); //Ini adalah Prefix dimana, prosesnya adalah menambahkan dulu lalu ditampilkan, sehingga akan tampil angka 10
console.log(counterpost++); //Ini adalah Postfix dimana, prosesnya adalah menampilkan terlebih dahulu value yang ada di variabel, laul di belakang ditambahkan, makanya hasil yang tampl tidak berubah, tetap 9
//========== Comparison Operator
var compr = 5;
console.log(compr == 5); // jika == maka proses mencari value yang sama tanpa memperhatikan tipe data
console.log(compr == 7);
console.log(compr === 8); // jika === maka proses mencari valu & tipe data yang sama

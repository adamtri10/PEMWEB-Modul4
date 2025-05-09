// Membuat variabel dengan tipe data boolean
let isBenar = true;   // Menyimpan nilai true
let isSalah = false;  // Menyimpan nilai false

console.log(isBenar);  // Output: true
console.log(isSalah);  // Output: false

// Menggunakan tipe data boolean dalam kondisi if
let x = 2;
let y = 7;

if (x < y) {
    console.log("x lebih kecil dari y");  // Output: x lebih kecil dari y
} else {
    console.log("x lebih besar atau sama dengan y");
}

// Menggunakan hasil operasi perbandingan (boolean)
let samaDengan = x == y;
console.log(samaDengan);  // Output: false

let lebihBesar = x > y;
console.log(lebihBesar);  // Output: false

let lebihKecil = x < y;
console.log(lebihKecil);  // Output: true

// Hesap Makinasinda Girilen Rakamlarin Gorundugu Alani Seciyoruz
const display = document.querySelector('.calculator-input');

// Hesap Makinasinda Bulunan Butonlarin Hepsini Seciyoruz
const keys = document.querySelector('.calculator-keys');

// Hesap Makinasinda Girilen Rakamlarin Gorundugu Alana Baslangic Degeri Atamasi Yapiyoruz
let displayValue = '0';

// Girilen Ilk Degeri Tutuyoruz
let firstValue = null;

// Girilen Operator Bilgisini Tutuyoruz
let operator = null;

// Girilen Ikinci Deger Girilene Kadar Bekliyoruz Deger Girildiginde Tutuyoruz
let secondValue = false;
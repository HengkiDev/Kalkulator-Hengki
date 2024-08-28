const display = document.getElementById('display');
const tombol = document.querySelectorAll('.tombol button');

let angka = '';
let operator = '';

tombol.forEach((button) => {
  button.addEventListener('click', () => {
    const nilai = button.textContent;
    if (nilai === 'C') {
      angka = '';
      operator = '';
      display.value = '';
    } else if (nilai === '&lt;') {
      angka = angka.slice(0, -1);
      display.value = angka;
    } else if (nilai === '=') {
      const hasil = eval(angka);
      display.value = hasil;
      angka = '';
      operator = '';
    } else if (nilai === '+' || nilai === '-' || nilai === '*' || nilai === '/') {
      operator = nilai;
      angka += nilai;
      display.value = angka;
    } else {
      angka += nilai;
      display.value = angka;
    }
  });
});
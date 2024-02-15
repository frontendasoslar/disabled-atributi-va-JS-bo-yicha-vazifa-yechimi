//Elementlarni topib olamiz
const elinput = document.querySelector('.input');
const elselect = document.querySelector('.select');
//Input va Select teglarini klasini topib oldik

//Selektning o'zgarish hodisasiga quloq solamiz
elselect.addEventListener('change', function() {
  //Selektning o'zgarish hodisasiga quloq soldik

 //Agar selekt qiymadi Boshqaga teng bo'lsa
 if (elselect.value === 'Boshqa') {
   //Inputdagi disabledni olib tashla
  elinput.disabled = false;
 }
 else {
  //Teskari holatda
    //Inputdagi qiymatni olib tashlab disebld bo'lib qilsin
  elinput.value = '';
   //Inputni disabledga o'zgartir
  elinput.disabled = true
 }
}
)

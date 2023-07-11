let userName = prompt (`Adınızı girin`);

let info = document.querySelector(`#info`);
info.innerHTML = `Merhaba, ${userName} ! Hoş geldin !`;

const tarihSaat = () => { 
  let date = new Date().toLocaleString('tr-TR'); // tarih saati al
  let clock = document.querySelector(`#clock`);
  clock.innerHTML = `${date}`;
}
setInterval(tarihSaat, 1000);



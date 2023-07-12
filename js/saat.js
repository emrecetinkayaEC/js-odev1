let userName = prompt (`Adınızı girin`);

let info = document.querySelector(`#info`);
info.innerHTML = `Merhaba, ${userName} ! Hoş geldin !`;

const dateClock = () => { 
  /*let date = new Date().toLocaleString('tr-TR'); // tarih saati al
  let clock = document.querySelector(`#clock`);
  clock.innerHTML = `${date}`;*/
  let clock = document.querySelector(`#clock`);
  let date=new Date();
	let year=date.getFullYear();
	let month=date.getMonth();
	let day=date.getDay();
	let hour=date.getHours();
	let minute=date.getMinutes();
	let second=date.getSeconds();
  let dayName="";
  switch (day) {
    case 1:
      dayName=`Pazartesi`;
      break;
    case 2:
      dayName=`Salı`;
      break;
    case 3:
      dayName=`Çarşamba`;
      break;
    case 4:
      dayName=`Perşembe`;
      break;
    case 5:
      dayName=`Cuma`;
      break;
    case 6:
      dayName=`Cumartesi`;
      break;
    case 7:
      dayName=`Pazar`;
      break;
    default:
      dayName=`Tanımsız`;
  }
  	
	clock.innerHTML = `${hour}:${minute}:${second} ${dayName}`;
}
setInterval(dateClock, 1000);


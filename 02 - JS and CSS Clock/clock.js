const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setDate() {
  document.styleSheets['0'].rules['4'].style.setProperty(
    'transition',
    'all 0.05s'
  );
  const now = new Date();
  // seconds
  const seconds = now.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  // minutes
  const minutes = now.getMinutes();
  const minutesDegree = (minutes / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minutesDegree}deg)`;
  // hours
  const hour = now.getHours();
  const hourDegree = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
  if (seconds === 0 || minutes === 0 || hour === 0) {
    document.styleSheets['0'].rules['4'].style.removeProperty('transition');
  }
}

setInterval(setDate, 1000);

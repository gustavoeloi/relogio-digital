const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const watch = setInterval( function time() {
  let dateToday = new Date(); 
  let hrs = dateToday.getHours();
  let m = dateToday.getMinutes();
  let s = dateToday.getSeconds();

  if (hrs < 10) hr = '0' + hr;

  if (m < 10) m = '0' + m;

  if (m < 10) m = '0' + m;


  hours.textContent = hrs;
  minutes.textContent = m;
  seconds.textContent = s;
})
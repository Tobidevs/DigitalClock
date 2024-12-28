const  { dayjs } = require('dayjs');

let phour = document.querySelector('.hour');
let pminute = document.querySelector('.minute');
let psecond = document.querySelector('.second');

// Function to update the time display
function updateTime() {
    let hourformat = dayjs().format('h'); // 12-hour format
    let minute = dayjs().format('mm');    // Add leading zero
    let second = dayjs().format('ss');    // Add leading zero

    phour.innerText = hourformat;
    pminute.innerText = minute;
    psecond.innerText = second;
}

setInterval(updateTime, 1000);

updateTime();

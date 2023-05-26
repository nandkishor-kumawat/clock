const digitalClock = document.querySelector("#digitalClock");
const hoursHand = document.querySelector("#hoursHand");
const minutesHand = document.querySelector("#minutesHand");
const secondsHand = document.querySelector("#secondsHand");

function updateTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let ha = ((h / 12) * 360) + ((m / 60) * 30) % 360;
    let ma = ((m / 60) * 360) + ((s / 60) * 6) % 360;
    let sa = (s / 60 * 360) % 360;


    hoursHand.style.rotate = ha + 'deg';
    minutesHand.style.rotate = ma + 'deg';
    secondsHand.style.rotate = sa + 'deg';

    digitalClock.innerHTML = `${h}:${m}:${s}`
}

setInterval(updateTime, 1000);
updateTime();
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

    hoursHand.style.transform = `rotate(${((h / 12) * 360) + ((m / 60) * 30) + 90}deg)`;
    minutesHand.style.transform = `rotate(${((m / 60) * 360) + ((s / 60) * 6) + 90}deg)`;
    secondsHand.style.transform = `rotate(${(s / 60 * 360) + 90}deg)`;

    digitalClock.innerHTML = `${h}:${m}:${s}`
}

setInterval(updateTime, 1000);
updateTime();
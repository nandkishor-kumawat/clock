const digitalClock = document.querySelector("#digitalClock");
const hoursHand = document.querySelector("#hoursHand");
const minutesHand = document.querySelector("#minutesHand");
const secondsHand = document.querySelector("#secondsHand");

function updateTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let ha = ((h / 12) * 360) + ((m / 60) * 30);
    let ma = ((m / 60) * 360) + ((s / 60) * 6);
    let sa = (s / 60 * 360);


    hoursHand.style.rotate = `${ha}deg`;
    minutesHand.style.rotate = `${ma}deg`;
    secondsHand.style.rotate =  `${sa}deg`;

    digitalClock.innerHTML = `${String(h).padStart(2, 0)}:${String(m).padStart(2, 0)}:${String(s).padStart(2, 0)}`
}

setInterval(updateTime, 1000);
updateTime();
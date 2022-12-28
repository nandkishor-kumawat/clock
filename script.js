const digitalClock = document.querySelector("#digitalClock");
const hoursHand = document.querySelector("#hoursHand");
const minutesHand = document.querySelector("#minutesHand");
const secondsHand = document.querySelector("#secondsHand");

function updateTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hoursHand.style.transform = `rotate(${((hours / 12) * 360) + ((minutes / 60) * 30) + 90}deg)`;
    minutesHand.style.transform = `rotate(${((minutes / 60) * 360) + ((seconds / 60) * 6) + 90}deg)`;
    secondsHand.style.transform = `rotate(${(seconds / 60 * 360) + 90}deg)`;

    digitalClock.innerHTML = `${hours}:${minutes}:${seconds}`
}

setInterval(updateTime, 1000);
updateTime();
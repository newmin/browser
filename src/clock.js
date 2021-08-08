const today = new Date();

const mon = today.getMonth()+1;
const date = today.getDate();
const hour = today.getHours();
const min  = today.getMinutes();

const $day = document.querySelector(".day");
const time = document.querySelector(".clock")


$day.innerText = `${mon}월 / ${date}일`;
time.innerText = `${hour} : ${min}`;
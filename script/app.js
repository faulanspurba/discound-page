const [day, hour, minute, second]    = document.querySelectorAll('.time');
const stopButton = document.querySelector('.title');








document.addEventListener('DOMContentLoaded', timeLimited('Jul 22, 2022 00:00:00',stopButton , stopButton));








function timeLimited (target, content, stop){
    let interval = setInterval(() => {
    const nowTime    = new Date().getTime();
    const targetTime = new Date(target).getTime();

    const difference = (targetTime - nowTime) / 1000;

    const days        = Math.floor(difference / (24*60*60));
    const hours      = Math.floor(difference % (24*60*60) / (60*60));
    const minutes    = Math.floor(difference % ((60*60)) / (60));
    const seconds     = Math.floor(difference % (60));

    if(difference <= 0) {
        content.innerHTML = "It's DONE !!!"
        clearInterval(timeLimited);
    } else {
        day.innerHTML = days;
        hour.innerHTML = hours;
        minute.innerHTML = minutes;
        second.innerHTML = seconds;
    }
    
}, 1000);
stop.addEventListener('click', () => clearInterval(interval));
}





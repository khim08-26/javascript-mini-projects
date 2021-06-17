const countdown = () =>{
    const countDate = new Date("August 26, 2021 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    //default
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //calculation
    const textDay = Math.floor(gap / day); // math.floor converting to nearest whole
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;

     
};

setInterval(countdown, 1000);
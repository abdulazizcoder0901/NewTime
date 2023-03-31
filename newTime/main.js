function newTime () {
    let newTime = new Date();

    document.querySelector('.hour').textContent = newTime.getHours() < 10 ? '0' + newTime.getHours() : newTime.getHours()
    document.querySelector('.minutes').textContent = newTime.getMinutes() < 10 ? '0' + newTime.getMinutes() : newTime.getMinutes()
    document.querySelector('.second').textContent = newTime.getSeconds() < 10 ? '0' + newTime.getSeconds() : newTime.getSeconds()
}

newTime();

setInterval(function (){
    newTime();
})
let timer;

document.getElementById('start').onclick = () => {
    timer = setInterval(() => {
        document.getElementById('timer').innerText++;
    }, 10);
}

document.getElementById('stop').onclick = () => clearInterval(timer);
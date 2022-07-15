let mess = new URLSearchParams(window.location.search).get('mess') || 'Starting';

document.getElementById('loaderMess').innerText = mess;
setTimeout(() => {
    document.getElementById('loaderBar').value = 10;
}, 1000);
setTimeout(() => {
    document.getElementById('loaderBar').value = 20;
}, 2300);
setTimeout(() => {
    document.getElementById('loaderBar').value = 40;
}, 3500);
setTimeout(() => {
    document.getElementById('loaderBar').value = 80;
}, 4200);
setTimeout(() => {
    document.getElementById('loaderBar').value = 100;
}, 5700);
setTimeout(() => {
    if (window.innerWidth < 768) {
        window.location.href = '../../os-screens/errors/mobile.html';
    } else {
        window.location.href = '../../os-screens/setup/1.html'
    }
}, 7000);

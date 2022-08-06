let params = new URLSearchParams(window.location.search);
let mess  = params.get('mess') || 'Starting';
let redirect = params.get('redirect') || '../../os-screens/setup/1.html';

document.body.requestFullscreen();

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
        if (localStorage.getItem('setup') === 'done') {
            window.location.href = '../../os-screens/main/locked.html'
        } else {
            window.location.href = redirect;
        }
    }
}, 7000);

//add an event listener if the user leaves the site
window.addEventListener('beforeunload', (e) => {
    if (params.get('setup') === 'done') {
        localStorage.setItem('setup', 'done');
    }
});

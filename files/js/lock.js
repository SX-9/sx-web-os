let params = new URLSearchParams(window.location.search);
let user = localStorage.getItem('user') || params.get('user');
let pass = localStorage.getItem('pass') || params.get('pass');

localStorage.setItem('user', user);
localStorage.setItem('pass', pass);

document.getElementById('user').innerText = user;
var unlock = () => {
    if (document.getElementById('password').value === pass) {
        window.location.href = '../main/desktop.html' + window.location.search;
    } else {
        document.getElementById('password').value = '';
        alert('Wrong Password');
    }
}

document.getElementById('unlock').onclick = unlock;
window.onkeydown = (e) => {
    if (e.keyCode === 13) {
        unlock();
    }
}
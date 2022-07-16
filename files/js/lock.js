let params = new URLSearchParams(window.location.search);
let user = localStorage.getItem('user') || params.get('user');
let pass = localStorage.getItem('pass') || params.get('pass');

localStorage.setItem('user', user);
localStorage.setItem('pass', pass);

document.getElementById('user').innerText = user;
document.getElementById('unlock').onclick = () => {
    if (document.getElementById('password').value === pass) {
        window.location.href = '../desktop/main.html' + window.location.search;
    } else {
        document.getElementById('password').value = '';
        alert('Wrong Password');
    }
}
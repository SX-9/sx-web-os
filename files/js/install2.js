setTimeout(() => {
    document.getElementById('installMess').innerText = 'Checking Performance...';
    document.getElementById('installBar').value = '40';
}, 7000);
setTimeout(() => {
    document.getElementById('installMess').innerText = 'Finnishing Process...';
    document.getElementById('installBar').value = '70';
    document.body.style.backgroundImage = 'url(../../files/images/bgInstaller.jpg)';
}, 10000);
setTimeout(() => {
    document.getElementById('installBar').value = '100';
}, 13000);
setTimeout(() => {
    window.location.href = '7.html';
}, 15000);
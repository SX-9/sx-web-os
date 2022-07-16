setTimeout(() => {
    document.getElementById('installerBar').value = '20';
    document.getElementById('installerMess').innerText = 'Copying Files...';
}, 2000);
setTimeout(() => {
    document.getElementById('installerBar').value = '40';
    document.getElementById('installerMess').innerText = 'Installing Drivers...';
}, 3000);
setTimeout(() => {
    document.getElementById('installerBar').value = '60';
    document.getElementById('installerMess').innerText = 'Installing Features...';
}, 4000);
setTimeout(() => {
    document.getElementById('installerBar').value = '80';
    document.getElementById('installerMess').innerText = 'Installing Updates...';
}, 5000);
setTimeout(() => {
    document.getElementById('installerBar').value = '100';
    document.getElementById('installerMess').innerText = 'Restarting...';
}, 6000);
setTimeout(() => {
    window.location.href = '../../?mess=Restarting&redirect=os-screens/setup/6.html';
}, 7000);
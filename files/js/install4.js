setTimeout(() => {
    document.getElementById('installMess').innerText = 'Checking Performance...';
}, 7000);
setTimeout(() => {
    document.getElementById('installMess').innerText = 'Preparing Desktop...';
}, 10000);
setTimeout(() => {
    document.getElementById('installMess').innerText = 'Passing Data...';
}, 13000);
setTimeout(() => {
    window.location.href = '../locked/screen.html' + window.location.search;
}, 15000);
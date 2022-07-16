document.getElementById('next').onclick = () => {
    let name = document.getElementById('name').value;
    let user = document.getElementById('user').value;
    let pass = document.getElementById('pass').value;
    if (!name || !user) {
        alert('Please Fill The Required Fields');
    } else if (!pass) {
        window.location.href = '8.html?name=' + name + '&user=' + user;
    } else {
        window.location.href = '8.html?name=' + name + '&user=' + user + '&pass=' + pass;
    }
}
function open(x) {
    document.getElementById('content').src = 'https://sx9.is-a.dev/other-project-files/' + x;
    document.getElementById('window').showModal();
}
function startMenu() {
    document.getElementsByTagName('template')[0].content.cloneNode(true);
    document.body.appendChild(document.getElementsByTagName('template')[0].content.cloneNode(true));
}
function close() {
    document.getElementById('startMenu').remove();
}
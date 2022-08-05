var params = new URLSearchParams(window.location.search);
var user = localStorage.getItem("user") || params.get("user");
var name = localStorage.getItem("name") || params.get("name");

if (params.get("user")) {
    localStorage.setItem("user", params.get("user"));
} else if (params.get("name")) {
    localStorage.setItem("name", params.get("name"));
} else if (!user || !name) {
    user = "unknown";
    name = "unknown";
}

document.getElementById("user").innerText = user;
document.getElementById("name").innerText = name;

window.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        try {
            document.getElementById("output").innerText = JSON.stringify(eval(document.getElementById('input').value));
        } catch (e) {
            document.getElementById("output").innerText = e.message;
        }
    }
});
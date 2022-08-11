let startItem = document.getElementById("start");
let taskbarItem1 = document.getElementById("tb1");
let taskbarItem2 = document.getElementById("tb2");
let taskbarItem3 = document.getElementById("tb3");
let taskbarItem4 = document.getElementById("tb4");
let taskbarItem5 = document.getElementById("tb5");
let taskbarItem6 = document.getElementById("tb6");
let startItem1 = document.getElementById("st1");
let startItem2 = document.getElementById("st2");
let startItem3 = document.getElementById("st3");
let startItem4 = document.getElementById("st4");
let params = new URLSearchParams(window.location.search);
let user = localStorage.getItem("user") || params.get("user");
let batteryWidget = document.getElementById("battery");
let batteryMess = document.getElementById("btMess");
let batteryPercent = document.getElementById("btPercent");
let developerWidget = document.getElementById("developer");
let openWindow = (src, width, height) => {
    let window = document.getElementById("window");
    let iframe = document.getElementById("content");
    let exit = document.getElementById("close");
    window.showModal();
    window.display = "flex";
    window.style.width = width + "em";
    window.style.height = height + 2 + "em";
    exit.style.display = "block";
    iframe.src = src;
}

if (localStorage.getItem("dev") === "true") { 
    developerWidget.style.display = "block";
}

document.addEventListener('keydown', (e) => {
    if (e.keyCode == 70) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) { 
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        } 
    }
    if (e.keyCode === 91) {
        document.getElementById("startMenu").showModal();
        document.getElementById("startMenu").style.display = "flex";
    } else if (e.keyCode === 68) {
        let confirmation = confirm("Enable Developer Mode?");
        if (confirmation) {
            localStorage.setItem("dev", "true");
            location.reload();
        }
    } else if (e.keyCode === 27) {
        document.getElementById("window").close();
        document.getElementById("content").src = "";
        document.getElementById("close").style.display = "none";
    } else if (localStorage.getItem("dev") === "true") {
        if (e.keyCode === 75) {
            window.location.href = "../errors/bsod.html";
        } else if (e.keyCode === 83) {
            document.getElementById("window").remove();
            delete openWindow;
        }
    }
});

if (params.get("user")) {
    localStorage.setItem("user", params.get("user"));
}
if (localStorage.getItem("wallpaper")) {
    document.getElementById("bg").style.backgroundImage = "url(" + localStorage.getItem("wallpaper") + ")";
}
setInterval(() => document.getElementById("clock").innerText = new Date().toLocaleTimeString(), 500);
document.getElementById("username").innerText = user;
document.getElementById("date").innerText = new Date().toLocaleDateString();
setInterval(() => {
    if (navigator.getBattery) {
        navigator.getBattery().then(battery => {
            if (battery.level < 0.2) {
                batteryWidget.style.backgroundColor = "#f51e1e60";
            } else {
                batteryWidget.style.backgroundColor = "#1ef56d60";
            }
            batteryMess.innerText = battery.charging ? "Charging" : "Discharging";
            batteryPercent.innerText = battery.level * 100 + "%";
        });
    } else {
        batteryWidget.style.display = "none";
    }
}, 500);

document.getElementById("wallpaper").addEventListener("click", () => {
    let url = prompt("Enter a URL To The Wallpaper", "../../files/images/bgDesktop.jpg");
    if (url) {
        document.getElementById("bg").style.backgroundImage = "url(" + url + ")";
        localStorage.setItem("wallpaper", url);
    } else {
        alert("Invalid URL");
    }
});



document.getElementById("close").addEventListener("click", () => {
    document.getElementById("window").close();
    document.getElementById("window").display = "none";
    document.getElementById("content").src = "";
    document.getElementById("close").style.display = "none";
});

startItem.addEventListener("click", () => {
    document.getElementById("startMenu").showModal();
    document.getElementById("startMenu").style.display = "flex";
});

document.getElementById("stClose").addEventListener("click", () => {
    document.getElementById("startMenu").close();
    document.getElementById("startMenu").style.display = "none";
});

document.getElementById("stRestart").addEventListener("click", () => 
    window.location.href = "../../index.html?mess=Restarting&redirect=os-screens/main/locked.html"
);

startItem1.addEventListener("click", () => 
    openWindow("https://open.spotify.com/embed/playlist/2eRvjEvtYDjcbo7xLig8Qx", 57, 27)
);

startItem2.addEventListener("click", () =>
    openWindow("https://discord.com/widget?id=935384834250006569&theme=dark", 27, 37)
);

startItem3.addEventListener("click", () =>
    openWindow("https://youtube.com/embed/videoseries?list=PL0vfts4VzfNiI1BsIK5u7LpPaIDKMJIDN", 57, 27)
);

startItem4.addEventListener("click", () =>
    openWindow("browser.html", 57, 27)
);

taskbarItem1.addEventListener("click", () => 
    openWindow("https://sx9.is-a.dev/pwa/calc.html", 27, 37)
);

taskbarItem2.addEventListener("click", () => 
    openWindow("https://x-cord-client.sx9.repl.co", 37, 27)
);

taskbarItem3.addEventListener("click", () =>
    openWindow("timer.html", 27, 27)
);
taskbarItem4.addEventListener("click", () =>
    openWindow("cmd.html" + window.location.search, 57, 27)
);

taskbarItem5.addEventListener("click", () =>
    openWindow("about.html", 27, 27)
);
taskbarItem6.addEventListener("click", () =>
    openWindow("edit.html", 57, 27)
);
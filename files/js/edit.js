let saveBtn = document.getElementById("save");
let runBtn = document.getElementById("run");
let input = document.getElementById("code");
let output = document.getElementById("output");

if (localStorage.getItem("code")) {
    input.value = localStorage.getItem("code");
}

saveBtn.addEventListener("click", () => {
    localStorage.setItem("code", input.value);
});

runBtn.addEventListener("click", () => {
    output.innerHTML = input.value;
});
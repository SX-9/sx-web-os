document.getElementById("searchBtn").addEventListener("click", () => {
    let search = document.getElementById("search");
    window.location.href = search.value;
});
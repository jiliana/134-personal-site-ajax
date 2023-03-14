function updateDate() {
    const d = new Date();
    const date = document.getElementById("date");
    date.innerHTML = d;
}
setInterval(updateDate, 1000);
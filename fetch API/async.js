const display = document.getElementById("display");

async function getData(){
    const res = await fetch("http://127.0.0.1:5500/fetch%20API/data.txt");

    const data = await res.text();

    display.innerHTML = data;
}
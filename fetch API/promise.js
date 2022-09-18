const display = document.getElementById("display");

function getData(){
    fetch("http://127.0.0.1:5500/fetch%20API/data.txt")
    .then((res) => res.text())
    .then((data) =>{
        console.log("hello2");
        display.innerHTML = data;
    });
}

console.log("hello");
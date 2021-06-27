const period = document.getElementById("period");
const time = document.querySelector("#time");

function updateTime() {
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();  
    if (hour < 12) {
        period.innerText = "morning";
    } else if (hour < 18) {
        period.innerText = "afternoon";
    } else {
        period.innerText = "evening";
    }
    // string interpolation
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    } 
    time.innerText = `${hour}:${minute}:${second}`; // 18:50:23
    
}

function updateBackground() {
    let currentTime = new Date();
    if (currentTime.getHours() < 12) {
        document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80)";
        document.body.classList.toggle("dark");
    } else if (currentTime.getHours() < 18) {
        document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1595809535380-cb82ca846c24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)";
    } else {
        document.body.style.backgroundImage = "url(https://images.unsplash.com/photo-1509916849829-d5b32d24dcca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)";
        document.body.classList.toggle("dark");
    }
}

// chạy updateTime mỗi 1000ms
setInterval(updateTime, 1000);

updateBackground();
setInterval(updateBackground, 60 * 60 * 1000);

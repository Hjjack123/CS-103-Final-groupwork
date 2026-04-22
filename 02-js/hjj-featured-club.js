let today = new Date();

let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();

if (day < 10) {
    day = "0" + day;
}

if (month < 10) {
    month = "0" + month;
}

let hour = today.getHours();
let minute = today.getMinutes();
let period = "AM";

if (minute < 10) {
    minute = "0" + minute;
}

if (hour >= 12) {
    period = "PM";
}

if (hour === 0) {
    hour = 12;
} else if (hour > 12) {
    hour = hour - 12;
}

let time = hour + ":" + minute + " " + period;

document.getElementById("time-date").innerHTML =
    "<h3>" + time + "</h3>" +
    "<h5>" + day + "/" + month + "/" + year + "</h5>";

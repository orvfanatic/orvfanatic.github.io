function displayTime() {
    let currentDate = new Date().getTime();
    
    var countDownDate = new Date("May 17, 2026 18:00:00").getTime();
    var timeRemaining = countDownDate - currentDate;

    // Calculating time remaining
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished
    if (timeRemaining < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "SCENARIO STARTED";
    }
}

displayTime(); 
setInterval(displayTime, 1000);  
 // Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2026 20:00:00").getTime();
            
var x = setInterval(function() {
            
var now = new Date().getTime();
                
var distance = countDownDate - now;
                
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
document.getElementById("timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
                
if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000);

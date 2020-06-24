'use strict'

var today = new Date()
var hourNow = today.getHours();
var openStatus;

if (hourNow >= 20) {
    openStatus = 'Closed for the night.';
} else if (hourNow >= 12) {
    openStatus = 'The brewery is open for pick up.';
} else if (hourNow >= 0) {
    openStatus = "Don't you think it's a bit early? Check again later.";
} else {
    openStatus = 'Check the operating hours section to see when';
}

document.write('<h3>' + openStatus + '</h3>');
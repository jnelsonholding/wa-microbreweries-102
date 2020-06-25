'use strict'

// This section creates a message in the header to let the user know if the brewery is currently open

function openHour() {
    var today = new Date();
    var hourNow = today.getHours();
    return hourNow;
}



function openMessage(hourNow) {
    var openStatus
    if (hourNow >= 20) {
        openStatus = 'The brewery is closed for the night.';
    } else if (hourNow >= 12) {
        openStatus = 'The brewery is currently open for pick up.';
    } else if (hourNow >= 0) {
        openStatus = "Don't you think it's a bit early? Check again later.";
    } else {
        openStatus = 'Operation hours available below! Nothing wrong here ... just scroll down.';
    }
    return openStatus;
}


function replaceTextByEl(elID, message) {
    var elToReplace = document.getElementById(elID);
    elToReplace.textContent = message;
}

// This will prompt the user for their name and personalize a message.

function getUserName() {
    var userName = prompt("Please enter your name!");
    return userName;
}


function checkForNameEntered(userName) {
    if (typeof userName !== 'string' || userName === '') {
        userName = 'friend';
        confirm("I'll just call you friend ...");
    } else {
        confirm("Welcome, " + userName + "!");
    }
    return userName
}


// line below for testing a date failure
// hourNow = 'tom'

// line below for testing name failure
// userName = 20


var hourNow = openHour();
var openStatus = openMessage(hourNow);
replaceTextByEl('openStatus', openStatus);
var userName = getUserName();
userName = checkForNameEntered(userName);
replaceTextByEl('name', userName);

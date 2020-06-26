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
    } else if (hourNow >= 0 && hourNow < 12) {
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
// If they enter nothing and hit ok the it will continue to prompt them.
// If the user hits cancel instead of enter, then a further block of code
// will just label them as 'friend' instead.


function getUserName() {
    var userName = prompt("Please enter your name!");
    var i = 0
    while (userName === '') {
        if (i > 3) {
            userName = prompt("I don't get why you're being so stubborn, just type something, I don't care if it's a name really.");
        } else {
            userName = prompt("It would make me really happy if you would actually enter something");
            i++
        }
    }
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



// function replaceTextByEl(elID, message) {
//     var elToReplace = document.getElementById(elID);
//     elToReplace.textContent = message;
// }
function addBeerGlasses(amount) {
    // var beerGlasses = 'beer';
    // var beerGlasses = '<img src="http://res.publicdomainfiles.com/pdf_view/74/13932316828562.png"></img>'
    var ul = document.getElementById('beerGlasses');

    for (var i = 0; i < amount; i++) {
        var li = document.createElement('li');
        // li.appendChild(document.createTextNode(beerGlasses));
        var img = document.createElement('img');
        img.src = "http://res.publicdomainfiles.com/pdf_view/74/13932316828562.png";
        li.appendChild(img);
        ul.appendChild(li);
    }

    // li = ul.getElementsByTagName('li');


}


function howManyBeers() {
    var beerQty = parseInt(prompt('How many beers?'));
    if (isNaN(beerQty)) {
        alert('I can\'t understand you, no beers ...');
        beerQty = 0
    } else if (beerQty >= 8) {
        alert('That\'s too many, we\'re cutting you off at 6.');
        beerQty = 6;
    } else if (beerQty < 1) {
        alert('I admire your restraint.');
        beerQty = 0
    }
    return beerQty
}


addBeerGlasses(howManyBeers());
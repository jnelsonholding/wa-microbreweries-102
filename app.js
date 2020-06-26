'use strict'

// openHour() checks the time and returns the current hour

function openHour() {
    var today = new Date();
    var hourNow = today.getHours();
    return hourNow;
}

// openMessage uses the hour of the day to determine the appropriate message for the user.

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

// replaceTextByEl() targets an element's ID and replaces the text with a message.

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
    var i = 0;
    while (userName === '') {
        if (i > 3) {
            userName = prompt("I don't get why you're being so stubborn, just type something, I don't care if it's a name really.");
        } else {
            userName = prompt("It would make me really happy if you would actually enter something");
            i++;
        }
    }
    return userName;
}

// checkForNameEntered serves a welcome message

function checkForNameEntered(userName) {
    if (typeof userName !== 'string' || userName === '') {
        userName = 'friend';
        confirm("I'll just call you friend ...");
    } else {
        confirm("Welcome, " + userName + "!");
    }
    return userName;
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



// This function uses the amount argument to determine how many glasses
// of beer to add to a header list.

function addBeerGlasses(amount) {
    var ul = document.getElementById('beerGlasses'); // saves the empty ul by ID

    for (var i = 0; i < amount; i++) { // will loop 'amount' times
        var li = document.createElement('li'); // creates a list element
        var img = document.createElement('img'); // creates an img element
        img.src = "http://res.publicdomainfiles.com/pdf_view/74/13932316828562.png"; // assigns a source to the img
        li.appendChild(img); // inserts the new img into the new li
        ul.appendChild(li); // adds the li to the header ul
    }
}


// howManyBeers(), it asks.
// this many, the user says.
// no beers for user if they don't play nice.
// extra beers if they're not too greedy.

function howManyBeers() {
    var beerQty = parseInt(prompt('How many beers?'));
    if (isNaN(beerQty)) {                               // if parseInt couldn't convert the user input
        alert('I can\'t understand you, no beers ...');
        beerQty = 0;
    } else if (beerQty > 10) {
        alert('That\'s too many, we\'re cutting you off at 6.');
        beerQty = 6;
    } else if (beerQty < 1) {
        alert('Thank you. Stay as long as you like.');
        beerQty = 0;
    }
    return beerQty;
}


addBeerGlasses(howManyBeers());
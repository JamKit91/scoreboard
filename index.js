let homeScore = 0;
let awayScore = 0;

let homeScoreEl = document.getElementById("home-score");
let awayScoreEl = document.getElementById("away-score");

function homeAddOne() {
    homeScore +=1
    homeScoreEl.textContent = homeScore
}

function homeAddTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function homeAddThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}


function awayAddOne() {
    awayScore +=1
    awayScoreEl.textContent = awayScore
}

function awayAddTwo() {
    awayScore += 2
    awayScoreEl.textContent = awayScore
}

function awayAddThree() {
    awayScore += 3
    awayScoreEl.textContent = awayScore
}
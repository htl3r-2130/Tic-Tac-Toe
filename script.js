'use strict';

const field_1 = document.querySelector("#field_1");
const field_2 = document.querySelector("#field_2");
const field_3 = document.querySelector("#field_3");
const field_4 = document.querySelector("#field_4");
const field_5 = document.querySelector("#field_5");
const field_6 = document.querySelector("#field_6");
const field_7 = document.querySelector("#field_7");
const field_8 = document.querySelector("#field_8");
const field_9 = document.querySelector("#field_9");

let colorX = "red";
let colorO = "green";

let field_1_value = 0;
let field_2_value = 0;
let field_3_value = 0;
let field_4_value = 0;
let field_5_value = 0;
let field_6_value = 0;
let field_7_value = 0;
let field_8_value = 0;
let field_9_value = 0;

field_1.addEventListener("click", function() {setSymbol(1);});
field_2.addEventListener("click", function() {setSymbol(2);});
field_3.addEventListener("click", function() {setSymbol(3);});
field_4.addEventListener("click", function() {setSymbol(4);});
field_5.addEventListener("click", function() {setSymbol(5);});
field_6.addEventListener("click", function() {setSymbol(6);});
field_7.addEventListener("click", function() {setSymbol(7);});
field_8.addEventListener("click", function() {setSymbol(8);});
field_9.addEventListener("click", function() {setSymbol(9);});

const gameEnd = document.querySelector(".hiddenScreen");
const gameEndStatus = document.querySelector("#outputStatus");

let startValue=1;
let gameCounter=0;
let gameStarted=false;
let gameEnded = false;


const x = document.querySelector("#x-value");
x.addEventListener("click", function () {setStartValue(1);});

const o = document.querySelector("#o-value");
o.addEventListener("click", function () {setStartValue(2);});

const restart = document.querySelector("#restart");
restart.addEventListener("click", reset);


setStartValue(startValue);

//functions
function setStartValue(indicator) {
    if (!gameStarted) {
        if (indicator === 1) {
            startValue = 1
            x.style.borderBottom = "2px solid gray";
            o.style.borderBottom = "none";
        } else {
            startValue = 2;
            o.style.borderBottom = "2px solid gray";
            x.style.borderBottom = "none"; 
        }
    }
}

function setSymbol(fieldNumber) {
    let field = "field_" + fieldNumber;

    if (gameEnded===false) {
        if (startValue === 1) {
            switch (field) {
                case "field_1":
                    if (field_1_value === 0) {
                        field_1.innerHTML = "X";
                        field_1.style.color = colorX;
                        field_1_value = 1;
                        startValue = 2;
                        gameCounter+=1;
                    }
                    break;
                case "field_2":
                    if (field_2_value === 0) {
                        field_2.innerHTML = "X";
                        field_2.style.color = colorX;
                        field_2_value = 1;
                        startValue = 2;
                        gameCounter+=1;
                    }
                    break;
                case "field_3":
                    if (field_3_value === 0) {
                        field_3.innerHTML = "X";
                        field_3.style.color = colorX;
                        field_3_value = 1;
                        startValue = 2;
                        gameCounter+=1;
                    }
                    break;
                case "field_4":
                    if (field_4_value === 0) {
                        field_4.innerHTML = "X";
                        field_4.style.color = colorX;
                        field_4_value = 1;
                        startValue = 2;
                        gameCounter+=1;
                    }
                    break;
                case "field_5":
                    if (field_5_value === 0) {
                        field_5.innerHTML = "X";
                        field_5.style.color = colorX;
                        field_5_value = 1;
                        startValue = 2;
                        gameCounter+=1;
                    }
                    break;
                case "field_6":
                    if (field_6_value === 0) {
                        field_6.innerHTML = "X";
                        field_6.style.color = colorX;
                        field_6_value = 1;
                        startValue = 2;
                        gameCounter+=1;
                    }
                    break;
                case "field_7":
                    if (field_7_value === 0) {
                        field_7.innerHTML = "X";
                        field_7.style.color = colorX;
                        field_7_value = 1;
                        startValue = 2;
                        gameCounter+=1;
                    }
                    break;
                case "field_8":
                    if (field_8_value === 0) {
                        field_8.innerHTML = "X";
                        field_8.style.color = colorX;
                        field_8_value = 1;
                        startValue = 2;
                        gameCounter+=1;
                    }
                    break;
                case "field_9":
                    if (field_9_value === 0) {
                        field_9.innerHTML = "X";
                        field_9.style.color = colorX;
                        field_9_value = 1;
                        startValue = 2;
                        gameCounter+=1;
                    }
                    break;
            }
        } else if (startValue === 2) {
            switch (field) {
                case "field_1":
                    if (field_1_value === 0) {
                        field_1.innerHTML = "O";
                        field_1.style.color = colorO;
                        field_1_value = 2;
                        startValue = 1;
                        gameCounter+=1;
                    }
                    break;
                case "field_2":
                    if (field_2_value === 0) {
                        field_2.innerHTML = "O";
                        field_2.style.color = colorO;
                        field_2_value = 2;
                        startValue = 1;
                        gameCounter+=1;
                    }
                    break;
                case "field_3":
                    if (field_3_value === 0) {
                        field_3.innerHTML = "O";
                        field_3.style.color = colorO;
                        field_3_value = 2;
                        startValue = 1;
                        gameCounter+=1;
                    }
                    break;
                case "field_4":
                    if (field_4_value === 0) {
                        field_4.innerHTML = "O";
                        field_4.style.color = colorO;
                        field_4_value = 2;
                        startValue = 1;
                        gameCounter+=1;
                    }
                    break;
                case "field_5":
                    if (field_5_value === 0) {
                        field_5.innerHTML = "O";
                        field_5.style.color = colorO;
                        field_5_value = 2;
                        startValue = 1;
                        gameCounter+=1;
                    }
                    break;
                case "field_6":
                    if (field_6_value === 0) {
                        field_6.innerHTML = "O";
                        field_6.style.color = colorO;
                        field_6_value = 2;
                        startValue = 1;
                        gameCounter+=1;
                    }
                    break;
                case "field_7":
                    if (field_7_value === 0) {
                        field_7.innerHTML = "O";
                        field_7.style.color = colorO;
                        field_7_value = 2;
                        startValue = 1;
                        gameCounter+=1;
                    }
                    break;
                case "field_8":
                    if (field_8_value === 0) {
                        field_8.innerHTML = "O";
                        field_8.style.color = colorO;
                        field_8_value = 2;
                        startValue = 1;
                        gameCounter+=1;
                    }
                    break;
                case "field_9":
                    if (field_9_value === 0) {
                        field_9.innerHTML = "O";
                        field_9.style.color = colorO;
                        field_9_value = 2;
                        startValue = 1;
                        gameCounter+=1;
                    }
                    break;
            }
        }
    }
    if (!(startValue===0)) {
        gameStarted=true;
        checkWin();
    }
}

function checkWin() {
    if (
        (field_1_value === 1 && field_2_value === 1 && field_3_value === 1) ||
        (field_4_value === 1 && field_5_value === 1 && field_6_value === 1) ||
        (field_7_value === 1 && field_8_value === 1 && field_9_value === 1) ||
        (field_1_value === 1 && field_5_value === 1 && field_9_value === 1) ||
        (field_3_value === 1 && field_5_value === 1 && field_7_value === 1) ||
        (field_1_value === 1 && field_4_value === 1 && field_7_value === 1) ||
        (field_2_value === 1 && field_5_value === 1 && field_8_value === 1) ||
        (field_3_value === 1 && field_6_value === 1 && field_9_value === 1)
    ) {
        gameEnded=true;
        gameEnd.style.display = "flex";
        gameEndStatus.innerHTML = "X hat gewonnen!";
    } else if (
        (field_1_value === 2 && field_2_value === 2 && field_3_value === 2) ||
        (field_4_value === 2 && field_5_value === 2 && field_6_value === 2) ||
        (field_7_value === 2 && field_8_value === 2 && field_9_value === 2) ||
        (field_1_value === 2 && field_5_value === 2 && field_9_value === 2) ||
        (field_3_value === 2 && field_5_value === 2 && field_7_value === 2) ||
        (field_1_value === 2 && field_4_value === 2 && field_7_value === 2) ||
        (field_2_value === 2 && field_5_value === 2 && field_8_value === 2) ||
        (field_3_value === 2 && field_6_value === 2 && field_9_value === 2)
    ) {
        gameEnded=true;
        gameEnd.style.display = "flex";
        gameEndStatus.innerHTML = "O hat gewonnen!";
    } else if (gameCounter === 9) {
        gameEnded=true;
        gameEnd.style.display = "flex";
        gameEndStatus.innerHTML = "Unentschieden!";
    }
}

function reset() {
    field_1_value = 0;
    field_2_value = 0;
    field_3_value = 0;
    field_4_value = 0;
    field_5_value = 0;
    field_6_value = 0;
    field_7_value = 0;
    field_8_value = 0;
    field_9_value = 0;

    field_1.innerHTML = "";
    field_2.innerHTML = "";
    field_3.innerHTML = "";
    field_4.innerHTML = "";
    field_5.innerHTML = "";
    field_6.innerHTML = "";
    field_7.innerHTML = "";
    field_8.innerHTML = "";
    field_9.innerHTML = "";

    x.style.borderBottom = "none";
    o.style.borderBottom = "none";

    startValue = 0;
    gameCounter = 0;
    gameStarted = false;

    gameEnd.style.display = "none";
    gameEndStatus.innerHTML = "";
    setStartValue(1);
    gameEnded=false;
}
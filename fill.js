//acessing all the html element from the document
const fillInput = document.getElementById("fill-input");
const enterBtn = document.getElementById("enter-btn");
const userInput = document.getElementById("user-input");
const resetBtn = document.getElementById("reset-btn");
const stand1 = document.getElementById('stand1');
const stand2 = document.getElementById('stand2');
const hang = document.getElementById('hang');
const rope = document.getElementById('rope');
const form = document.getElementById('form');
const winnerDisplay = document.getElementById('winner');
const leftHand = document.getElementById('left-hand');
const rightHand = document.getElementById('right-hand');
const human = document.getElementById('human');
const mouth = document.getElementById('mouth');
let fillWrd;
let wrd;
let wrdArr;
let attempt;
let warning = [undefined, stand1, stand2, hang, rope];
//function to show the warning to user if entered wrong answer
const wrongAns = () => {
    attempt++;
    if (attempt < 5)
        warning[attempt].style.display = "";
    else
        looser();
}
//function to show the winner text if the user gussed correct answer
const winner = () => {
    form.style.display = "none";
    winnerDisplay.style.display = "";
    winnerDisplay.innerHTML = `<h1>You won the game</h1>`;
}
//function to show the dead body and tell user that they have lost
const looser = () => {
    human.setAttribute('class', 'deadBody');
    form.style.display = "none";
    rope.style.display = 'none';
    rightHand.style = 'top: 235px;left: 44.9%;transform: rotate(160deg); ';
    leftHand.style = 'left: 40.3%;transform: rotate(-160deg);top:33px;';
    document.getElementById('eye1').innerText = "❌";
    document.getElementById('eye2').innerText = "❌";
    mouth.innerText = "___";
    hang.innerHTML = '<div id="hang2"></div>'
    winnerDisplay.style.display = "";
    winnerDisplay.innerHTML = `<h1>You lost the game</h1>`;
}
//function to reset all the display settings
const resetDisplay = () => {
    attempt = 0;
    stand1.style.display = "none"
    stand2.style.display = "none"
    hang.style.display = "none"
    rope.style.display = "none"
    winnerDisplay.style.display = "none";
    form.style.display = "";
    human.classList.remove("deadBody");
    document.getElementById('eye1').innerText = "⚫";
    document.getElementById('eye2').innerText = "⚫";
    mouth.innerText = "👄";
}
//function to give a new word to find
const reset = () => {
    resetDisplay();
    wrdArr = ["rhythm", "consciousness", "occurrence", "questionnaire", "embarrass", "necessary", "beautiful", "believe", "argument", "separate", "develop", "business", "financial", "comfortable", "government", "psychology", "restaurant",
        "temperature", "knowledge"];
    wrd = Math.floor(Math.random() * 4);
    fillWrd = wrdArr[wrd].split("");
    for (let i = 0; i < fillWrd.length; i++)
        if (Math.ceil(Math.random() * 4) != 2)
            fillWrd[i] = " _ ";
    fillInput.innerText = fillWrd.join("");
}
//function to enter the user input to the blank statement
enterBtn.addEventListener("click", () => {
    let input = userInput.value;
    if (input == "")
        alert("Please enter the letter")
    else {
        let correct = 0;
        for (let i = 0; i < fillWrd.length; i++)
            if(fillWrd[i] == " _ ")
            if (input == wrdArr[wrd][i]) {
                console.log(input,wrdArr[wrd][i],fillWrd[i]);
                fillWrd[i] = input;
                correct++
            }
        fillInput.innerText = fillWrd.join("");
        if (fillWrd.join("") == wrdArr[wrd])
            winner();
        else if (correct == 0)
            wrongAns();
    }
    userInput.value = "";
})
reset();
resetBtn.addEventListener("click", () => { reset() })


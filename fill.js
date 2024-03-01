const prompt = require('prompt-sync')();
while (true) {
    let wrdArr = ["bottel", "morning", "apple", "computer", "battery"];
    let wrd = Math.floor(Math.random() * 4);
    let fillWrd = wrdArr[wrd].split("");
    for (let letter in fillWrd)
        if (Math.ceil(Math.random() * 5) != 2) {
            fillWrd[letter] = " _ ";
        }
    while (true) {
        console.log(fillWrd.join(""));

        let guess = prompt("Enter the letter :");
        for (let i = 0; i < fillWrd.length; i++) {
            // console.log(guess,wrdArr[wrd][i]);
            if (guess == wrdArr[wrd][i]) {
                fillWrd[i] = guess;
            }
        }
        if (fillWrd.join("") == wrdArr[wrd])
            break;
    }
    console.log(wrdArr[wrd]);
    console.log('you gussed it correct');
    let a = prompt("want to try another one ? :");
    if (a != 'y')
        break;
}

// console.log(fillWrd);


// array of words
const word = ['Jerry', 'Newman', 'Krammer', 'Elaine', 'Costanza', 'Morty', 'Frank'];

// choose words randomly
let randNum = Math.floor(Math.random() * word.length);
let rightWord = [];
let wrongWord = [];
let choosenWord = word[randNum];
let underScore = [];

let docUnderScore = document.getElementsByClassName('underScore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');

//TEST
//console.log(choosenWord);

// create underscores based on length of word
let generateUnderscore = () => {
    for (let i = 0; i < choosenWord.length; i++) {
        underScore.push('_');
     //   docUnderScore[0].innerHTML = underScore.join(' ');
    }
    return underScore;

}

//console.log(generateUnderscore());

//get user guess - event keypress
document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keycode);

    // if user guess is right - word exist push to right word array
    //indexOf() method - does the string exist if does <1
    if (choosenWord.indexOf(keyword) > -1) {
        // push / add to right words array
        rightWord.push(keyword);
        underScore[choosenWord.indextOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join(' ');
        docRightGuess[0].innerHTML = rightWord;
        if (underScore.join('') == choosenWord) {
            alert('You Win');
        }
        else {
            wrongWord.push(keyword);
            docWrongGuess[0].innerHTML = wrongWord;
        }


    }
});

//convert keycode into a letter



// if guess is right
// then if right push to right array
// if wrong push to wrong array


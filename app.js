/* app.js
---------
write by Ben.R 
Js code for all html pages */


// scrolling titleTableOfElement
  ctr="Realisation of an Periodic Table of Elements";
  i=0;
  dir="D";
  function titleElementTable(){
    // let sleep = 0, temp_pause = 1000; //1 sec
    t=setTimeout("titleElementTable()", 100);
    document.fo.titleElement.value=ctr.substring(0,i);
  if(dir == "D"){
    if(i<ctr.length)
      i++;
    else
      dir="G";
    }
    // setTimeOut(function(_titleElementTable) {sleep = 1;}, temp_pause = 400); /* don't continu to decrement, why ?*/
  if(dir == "G"){
    if(i>0)
      i--;
    else
      dir="D";
    } 
  }
  

// scrolling titleGame
  str="Your turn to play !!";
  i=0;
  dir="D";
  function titleGame(){
    t=setTimeout("titleGame()", 200);
    document.fo.titleGame.value=str.substring(0,i);
  if(dir == "D"){
    if(i<str.length)
      i++;
    else
      dir="G";
    }
  if(dir == "G"){
    if(i>0)
      i--;
    else
      dir="D";
    }
  }
  
// Guess The Number => start in July 2021
  let randomNumber = Math.floor(Math.random() * 100) + 1;

  let guesses = document.querySelector('.guesses');
  let lastResult = document.querySelector('.lastResult');
  let lowOrHi = document.querySelector('.lowOrHi');

  let guessSubmit = document.querySelector('.guessSubmit');
  let guessField = document.querySelector('.guessField');

  let guessCount = 1;
  let resetButton;

  // game function
  function checkGuess(){
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
      guesses.textContent = 'Propositions précédentes : ';
    }
      guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
      lastResult.textContent = 'Bravo, vous avez trouvé le nombre !';
      lastResult.style.backgroundColor = 'green';
      lowOrHi.textContent = '';
      setGameOver();
    } else if (guessCount === 10) {
      lastResult.textContent = '!!! PERDU !!!';
      setGameOver();
    } else {
        lastResult.textContent = 'Faux !';
        lastResult.style.backgroundColor = 'red';
      if (userGuess < randomNumber) {
          lowOrHi.textContent = 'Le nombre saisi est trop petit !';
      } else if (userGuess > randomNumber) {
          lowOrHi.textContent = 'Le nombre saisi est trop grand !';
      }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
  }
  // call the function
  guessSubmit.addEventListener('click', checkGuess);

  // reset game
  function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
  }

  function resetGame() {
    guessCount = 1;

    let resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
  }

  /* // basic function
  function checkGuess() {
    alert('tu va bientôt pouvoir jouer');
  }*/ 

// other functions
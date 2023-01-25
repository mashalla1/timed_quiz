    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//     const question = document.querySelector('#question');
//     const options = Array.from(document.querySelector('.option-text'));
//     const progressText = document.querySelector('#progressText');
//     const scoreText = document.querySelector('#score');
//     const progressBarFull = document.querySelector('#progressBarFull');
    
//     let currentQuestion = {};
//     let acceptingAnswers = true;
//     let score = 0;
//     let questionCounter = 0;
//     let availableQuestions = [];
//     let timer;
//     let timerCount;

    
//     let questions = [
//         {
//             question: "What is Europe's tallest mountain?",
//             option1: "Mt. Blanc", 
//             option2: "Mt. Dykh-Tau", 
//             option3: "Mt. Elbrus", 
//             option4: "Mt. Kazbek", 
//             answer: 3,
//         },
//         {
//             question: "What is the capital of Canada?",
//             option1: "Toronto", 
//             option2: "Ottawa", 
//             option3: "Montreal", 
//             option4: "Vancouver", 
//             answer: 2,
//         },
//         {
//             question: "Who is British most decorated Olympian?",
//             option1: "Chris Hoy",
//             option2: "Steve Redgrave",
//             option3: "Jason Kenny",
//             option4: "Ben Ainslie",
//             answer: 3,
//         },
//         {
//             question: "What is the world's longest river?",
//             option1: "River Amazon",
//             option2: "River Nile",
//             option3: "River Yangtze",
//             option4: "River Mississippi",
//             answer: 2,
//         },
//         {
//             question: "Which author published the book titled - Cain and Abel",
//             option1: "Jeffrey Archer",
//             option2: "James Patterson",
//             option3: "Stephen King",
//             option4: "Sidney Sheldon",
//             answer: 1,
//         },
//         {
//             question: "Who is the best-selling solo artist of all time?",
//             option1: "Michael Jackson",
//             option2: "Madonna",
//             option3: "Elton John",
//             option4: "Elvis Presley",
//             answer: 4,
//         }
// ]

// const scorePoints = 100;
// const maxQuestions = 6;

// // Start the Quiz
// var start = true;
// function startQuiz () {
//     console.log("started");
//     startButton.classList.add("hide");
//     shuffledQuestions = questions.sort(() => Math.random() - .5);
//     currentQuestionIndex = 0
// }

// getNewQuestion = () => {
//     if(availableQuestions.length === 0 || questionCounter > maxQuestions) {
//         localStorage.setItem('mostRecentScore', score)

//         return window.location.assign('/end.html')
//     }

//     questionCounter++
//     progressText.innerText = `Question ${questionCounter} of ${maxQuestions}`
//     progressBarFull.getElementsByClassName.width = `${(questionCounter/maxQuestions) * 100}%`

//     const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
//     currentQuestions = availableQuestions[questionsIndex];
//     question.innerText = currentQuestion.question;

//     options.forEach(option => {
//         const number = option.dataset['number'];
//         option.innerText = currentQuestion['option' + number]
//     })

//     availableQuestions.splice(questionsIndex, 1);

//     acceptingAnswers = true;
// }

// options.forEach(option => {
//     option.addEventListener("click", e => {
//         if(!acceptingAnswers) return;

//         accceptingAnswers = false;
//         const selectedOption = e.target;
//         const selectedAnswer = selectedOption.dataset['number'];
        
//         let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

//         if(classToApply ==='correct') {
//             incrementScore(scorePoints)
//         }

//         selectedOption.parentElement.classList.add(classToApply);  

//         setTimeout(() => {
//             selectedOption.parentElement.classList.remove(classToApply);
//             getNewQuestion()
//         },  1000)
//     })
// })

// incrementScore = num => {
//     score +=num
//     scoreText.innerText = score
// }
// // startQuiz()
// const username = document.querySelector('#username');
// const saveScoreBtn = document.querySelector('#saveScoreBtn');
// const finalScore = document.querySelector('#finalScore');
// const mostRecentScore = localStorage.getItem('mostRecentScore');

// const highScores = JSON.parse(localStorage.getItem('highScores')) || []

// const maxHighScores = 6;

// finalScore.innerText = mostRecentScore;

// username.addEventListener('keyup', () => {
//     saveScoreBtn.disabled = !username.value
// })

// saveHighScore = e => {
//     e.preventDefault()

//     const score = {
//         score: mostRecentScore,
//         name: username.value
//     }

//     highScores.push(score);

//     highScores.sort((a,b) => {
//         return b.score - a.score
//     })

//     highScores.splice(6);

//     localStorage.setItem('highScores', JSON.stringify(highScores));
//     window.location.assign('/')
// }



// var wordBlank = document.querySelector(".word-blanks");
// var win = document.querySelector(".win");
// var lose = document.querySelector(".lose");
// var timerElement = document.querySelector(".timer-count");
// var startButton = document.querySelector(".start-button");

// var chosenWord = "";
// var numBlanks = 0;
// var winCounter = 0;
// var loseCounter = 0;
// var isWin = false;
// var timer;
// var timerCount;

// // Arrays used to create blanks and letters on screen
// var lettersInChosenWord = [];
// var blanksLetters = [];

// // Array of words the user will guess
// var words = ["variable","array", "modulus", "object", "function", "string", "boolean"];

// // The init function is called when the page loads 
// function init() {
//   getWins();
//   getlosses();
// }

// // The startGame function is called when the start button is clicked
// function startGame() {
//   isWin = false;
//   timerCount = 10;
//   // Prevents start button from being clicked when round is in progress
//   startButton.disabled = true;
//   renderBlanks()
//   startTimer()
// }

// // The winGame function is called when the win condition is met
// function winGame() {
//   wordBlank.textContent = "YOU WON!!!🏆 ";
//   winCounter++
//   startButton.disabled = false;
//   setWins()
// }

// // The loseGame function is called when timer reaches 0
// function loseGame() {
//   wordBlank.textContent = "GAME OVER";
//   loseCounter++
//   startButton.disabled = false;
//   setLosses()
// }

// // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
// function startTimer() {
//   // Sets timer
//   timer = setInterval(function() {
//     timerCount--;
//     timerElement.textContent = timerCount;
//     if (timerCount >= 0) {
//       // Tests if win condition is met
//       if (isWin && timerCount > 0) {
//         // Clears interval and stops timer
//         clearInterval(timer);
//         winGame();
//       }
//     }
//     // Tests if time has run out
//     if (timerCount === 0) {
//       // Clears interval
//       clearInterval(timer);
//       loseGame();
//     }
//   }, 1000);
// }

// // Creates blanks on screen
// function renderBlanks() {
//   // Randomly picks word from words array
//   chosenWord = words[Math.floor(Math.random() * words.length)];
//   lettersInChosenWord = chosenWord.split("");
//   numBlanks = lettersInChosenWord.length;
//   blanksLetters = []
//   // Uses loop to push blanks to blankLetters array
//   for (var i = 0; i < numBlanks; i++) {
//     blanksLetters.push("_");
//   }
//   // Converts blankLetters array into a string and renders it on the screen
//   wordBlank.textContent = blanksLetters.join(" ")
// }

// // Updates win count on screen and sets win count to client storage
// function setWins() {
//   win.textContent = winCounter;
//   localStorage.setItem("winCount", winCounter);
// }

// // Updates lose count on screen and sets lose count to client storage
// function setLosses() {
//   lose.textContent = loseCounter;
//   localStorage.setItem("loseCount", loseCounter);
// }

// // These functions are used by init
// function getWins() {
//   // Get stored value from client storage, if it exists
//   var storedWins = localStorage.getItem("winCount");
//   // If stored value doesn't exist, set counter to 0
//   if (storedWins === null) {
//     winCounter = 0;
//   } else {
//     // If a value is retrieved from client storage set the winCounter to that value
//     winCounter = storedWins;
//   }
//   //Render win count to page
//   win.textContent = winCounter;
// }

// function getlosses() {
//   var storedLosses = localStorage.getItem("loseCount");
//   if (storedLosses === null) {
//     loseCounter = 0;
//   } else {
//     loseCounter = storedLosses;
//   }
//   lose.textContent = loseCounter;
// }

// function checkWin() {
//   // If the word equals the blankLetters array when converted to string, set isWin to true
//   if (chosenWord === blanksLetters.join("")) {
//     // This value is used in the timer function to test if win condition is met
//     isWin = true;
//   }
// }

// // Tests if guessed letter is in word and renders it to the screen.
// function checkLetters(letter) {
//   var letterInWord = false;
//   for (var i = 0; i < numBlanks; i++) {
//     if (chosenWord[i] === letter) {
//       letterInWord = true;
//     }
//   }
//   if (letterInWord) {
//     for (var j = 0; j < numBlanks; j++) {
//       if (chosenWord[j] === letter) {
//         blanksLetters[j] = letter;
//       }
//     }
//     wordBlank.textContent = blanksLetters.join(" ");
//   }
// }

// // Attach event listener to document to listen for key event
// document.addEventListener("keydown", function(event) {
//   // If the count is zero, exit function
//   if (timerCount === 0) {
//     return;
//   }
//   // Convert all keys to lower case
//   var key = event.key.toLowerCase();
//   var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
//   // Test if key pushed is letter
//   if (alphabetNumericCharacters.includes(key)) {
//     var letterGuessed = event.key;
//     checkLetters(letterGuessed)
//     checkWin();
//   }
// });

// // Attach event listener to start button to call startGame function on click
// startButton.addEventListener("click", startGame);

// // Calls init() so that it fires when page opened
// init();

// // Bonus: Add reset button
// var resetButton = document.querySelector(".reset-button");

// function resetGame() {
//   // Resets win and loss counts
//   winCounter = 0;
//   loseCounter = 0;
//   // Renders win and loss counts and sets them into client storage
//   setWins()
//   setLosses()
// }
// // Attaches event listener to button
// resetButton.addEventListener("click", resetGame);






// Start the Quiz
// var start = true;
// function startQuiz () {
//     console.log("started");
//     startButton.classList.add("hide");
//     shuffledQuestions = questions.sort(() => Math.random() - .5);
//     currentQuestionIndex = 0
// }

// / The setTimer function starts and stops the timer and triggers winGame() and loseGame()
// function startTimer() {
//   // Sets timer
//   timer = setInterval(function() {
//     timerCount--;
//     timerElement.textContent = timerCount;
//     if (timerCount >= 0) {
//       // Tests if win condition is met
//       if (isWin && timerCount > 0) {
//         // Clears interval and stops timer
//         clearInterval(timer);
//         winGame();
//       }
//     }
//     // Tests if time has run out
//     if (timerCount === 0) {
//       // Clears interval
//       clearInterval(timer);
//       loseGame();
//     }
//   }, 1000);
// }

// Iteration
// function iterate(id) {

//     // Show the result dispay part
//     var result = document.getElementsByClassName("result");
//     result[0].innerText = "";

//     // Retrieve the question
//     const question = document.getElementById("question");

//     // Display question text
//     question.innerText = Questions[id].q;

//     // Grab the multiple choice options
//     const op1 = document.getElementById('op1');
//     const op2 = document.getElementById('op2');
//     const op3 = document.getElementById('op3');
//     const op4 = document.getElementById('op4');

//     // Display the multiple choice text
//     op1.innerText = Questions[id].a[0].text;
//     op2.innerText = Questions[id].a[1].text;
//     op3.innerText = Questions[id].a[2].text;
//     op4.innerText = Questions[id].a[3].text;

//     // Give true or false value to the options
//     op1.value = Questions[id].a[0].isCorrect;
//     op2.value = Questions[id].a[1].isCorrect;
//     op3.value = Questions[id].a[2].isCorrect;
//     op4.value = Questions[id].a[3].isCorrect;

//     var selected = "";

//     // Present selection for option 1
//     op1.addEventListener("click", () => {
//         op1.style.backgroundColor = "lightgoldenrodyellow";
//         op2.style.backgroundColor = "lightskyblue";
//         op3.style.backgroundColor = "lightskyblue";
//         op4.style.backgroundColor = "lightskyblue";
//         selected = op1.value;
//     })

//     // Present selection for option 2
//     op2.addEventListener("click", () => {
//         op1.style.backgroundColor = "lightskyblue";
//         op2.style.backgroundColor = "lightgoldenrodyellow";
//         op3.style.backgroundColor = "lightskyblue";
//         op4.style.backgroundColor = "lightskyblue";
//         selected = op2.value;
//     })

//     // Present selection for option 3
//     op3.addEventListener("click", () => {
//         op1.style.backgroundColor = "lightskyblue";
//         op2.style.backgroundColor = "lightskyblue";
//         op3.style.backgroundColor = "lightgoldenrodyellow";
//         op4.style.backgroundColor = "lightskyblue";
//         selected = op3.value;
//     })

//     // Present selection for option 4
//     op4.addEventListener("click", () => {
//         op1.style.backgroundColor = "lightskyblue";
//         op2.style.backgroundColor = "lightskyblue";
//         op3.style.backgroundColor = "lightskyblue";
//         op4.style.backgroundColor = "lightgoldenrodyellow";
//         selected = op4.value;
//     })

//     // Assign the submit button
//     const submit = document.getElementsByClassName("submit");

//     // Submit procedure
//     submit[0.].addEventListener("click", () => {
//         if (selected == "true") {
//             result[0].innerHTML = "True";
//             result[0].style.color = "green";
//         } else {
//             result[0].innerHTML = "False";
//             result[0].style.color = "red";
//         }
//     })
// }

// if (start) {
//     iterate("0");
// }

// // Next button and procedure
// const next = document.getElementsByClassName('next')[0];
// var id = 0;

// next.addEventListener("click", () => {
//     start = false;
//     if (id < 2) {
//         id++;
//         iterate(id);
//         console.log(id)
//     }
// })
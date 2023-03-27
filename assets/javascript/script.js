// list of all questions, choices, and answers
var questions = [
    {
      title: 'Commonly used data types DO NOT include:',
      choices: ['strings', 'booleans', 'alerts', 'numbers'],
      answer: 'alerts',
    },
    {
      title: 'The condition in an if / else statement is enclosed within ____.',
      choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
      answer: 'parentheses',
    },
    {
      title: 'Arrays in JavaScript can be used to store ____.',
      choices: [
        'numbers and strings',
        'other arrays',
        'booleans',
        'all of the above',
      ],
      answer: 'all of the above',
    },
    {
      title:
        'String values must be enclosed within ____ when being assigned to variables.',
      choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
      answer: 'quotes',
    },
    {
      title:
        'A very useful tool used during development and debugging for printing content to the debugger is:',
      choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
      answer: 'console.log',
    },
  ];

  //   Pseudocode
/*
1. WHEN I click the START QUIZ button: (eventlistener will be needed on button)
    a.timer will begin
    b.questions will load up

2. WHEN I answer a question:
    a.Correctly:
        i. i am presented with another question
    b.Incorrectly:
        i. time is subtracted from the clock
        ii. i am presented with another question

3. WHEN all questions are answered OR the timer reaches 0:
    a.the game is over

4. WHEN the game is over:
    a. i can save my initials and my score
*/

//-------------------------------------------------------------------------------
/*
1. WHEN I click the START QUIZ button:
    a.timer will begin
    b.questions will load up
*/

// ----------------Query Selectors--------------------------
var startQuizButton = document.querySelector('#startQuiz');
var displayedTime = document.querySelector('#displayTime');

// ----------------Global Variables-------------------------
// number reliant on amount of questions
var timeLeft = questions.length * 15; // 75 (for now)


// ------------------------------------------------------------------------------
// (1)event listener added to START QUIZ button in html.
//(a) timer function created and placed within click event
startQuizButton.addEventListener("click", function (){
  function countDown(){
    const minutes = Math.floor(timeLeft/60);
    var seconds = timeLeft % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    displayedTime.innerHTML = `${minutes}:${seconds}`;
    timeLeft--;
  };
  setInterval(countDown, 1000);

  
});


// b.questions will be presented

function quizQuestions (){
  if (timeLeft > 0) {
    
  }
};
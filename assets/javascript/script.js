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
var startQuizButton = document.querySelector('#startQuiz');
var displayedTime = document.querySelector('#displayTime');

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
// (1)event listener added to START QUIZ button in html.
//(a) timer function to be assisnged
startQuizButton.addEventListener("click", function (){
  
});

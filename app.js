var readlineSync =  require('readline-sync');
var score = 0 ;
var userName = readlineSync.question("give your name ?");
console.log("welcome"+" "+userName);
console.log("Do you know me well?");
function play(question, answer)
  {
    var userAnswer = readlineSync.question(question);
    if(userAnswer.toUpperCase() === answer)
    {
      console.log("right");
      score = score + 1;
    }
    else{
      console.log("wrong");
      score = score - 1;
    }
    console.log("current score",score);
  }
var questions = [{
  question: "where do i live?",
  answer: "BANGALORE"
},
{
  question:"where is my hometown?",
  answer: "KOLKATA"              
},
{  
  question:"what is my hobbie?",
  answer: "GAMING"
},
{
  question:"what is my passion?",
  answer:"BUILDING APPS"
}
];
for(var i=0; i<questions.length; i++){
    var current = questions[i];
    play(current.question,current.answer);
  }
console.log("total score"+ score);
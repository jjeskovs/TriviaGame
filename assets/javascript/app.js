// List of global variables 
var correctAnswer = 0;
var inccorectAnswers = 0;
var time = 100;
var questionNumber = 0;
var intervalId;


// Creating on click event that will start the game and display the first question

$("#start").on("click", function(){
    
    // This will display questions on the screen
    $("#question").text(questions[questionNumber].question)
    $("#a").text(questions[questionNumber].a)
    $("#b").text(questions[questionNumber].b)
    $("#c").text(questions[questionNumber].c)
    $("#d").text(questions[questionNumber].d)
    //console.log(this)
    
    // Timer starts
    intervalId = setInterval(count, 1000);
    
    // Score count
    if (userInput === questions[questionNumber].correctAnswer) {
        correctAnswer++;
        //questionNumber++; // posibly be inside of reset function 
        reset();
    }
    
   
       
});

function count() {
    time--;
    $("#timer").text(time);
    if (time === 0){
        reset();
        
    }
}


function reset() {
    clearInterval(intervalId);
    $("#question").text("");
    $("#a").text("");
    $("#b").text("");
    $("#c").text("");
    $("#d").text("");
    questionNumber++

}



// Questions 
var questions = [{
    "question": "One human hair can support how many kilograms?",
    "a": "Three",
    "b": "Five",
    "c": "Seven",
    "d": "Nine",
    "correctAnswer": "c"
 }, 
{
    "question":"In ʻBen Hurʼ, which modern thing can be seen during the chario scene?",
    "a": " A waitress",
    "b": "A car",
    "c": "A postbox",
    "d": "A street lamp"

}];
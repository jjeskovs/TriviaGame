// List of global variables 
var correctAnswer = 0;
var inccorectAnswers = 0;
var timer = 0;


// Creating on click event that will start the game and display the first question

$("#start").on("click", function(){

    //$("#question").text(JSON.stringify(q1))
    // to display one question on the screen
    $("#question").text(q1.question)
    $("#a").text(q1.a)
    $("#b").text(q1.b)
    $("#c").text(q1.c)
    $("#d").text(q1.d)
    //console.log(this)
    
    
    
})



// Questions 
var q1 = {
    "question": "One human hair can support how many kilograms?",
    "a": "Three",
    "b": "Five",
    "c": "Seven",
    "d": "Nine",
}
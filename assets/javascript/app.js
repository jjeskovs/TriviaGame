    
    
    // List of global variables
    var correctAnswer = 0;
    var inccorectAnswers = 0;
    var time = 25;
    var questionNumber = 0;
    var intervalId;
    var result;
    
    // Syntaxes to load the image to HTML                                   <--------   
    // $("#image-div").html("<img src = 'assets/images/win.gif'/>");
    
    //function to clear the image                                           <--------
    // function hideGif (){
        setTimeout(reset, 5000);
    // }
    // Creating on click event that will start the game and display the first question
    
    $("#start").on("click", function() {
        questionNumber = 0;
        game();
    });
        
    function game() {
        // This will display questions on the screen
        $("#start").hide();
        $("#clock").show();
        $("#result").text("");
        $("#question").text(questions[questionNumber].question);
        $("#a").text(questions[questionNumber].a);
        $("#b").text(questions[questionNumber].b);
        $("#c").text(questions[questionNumber].c);
        $("#d").text(questions[questionNumber].d);
        

        // Setting countdown
         intervalId = setInterval(count, 1000);
    }
    
    $(".answers").on("click", function() {
        var userInput = $(this).attr("data-value");
        if (userInput === questions[questionNumber].correctAnswer) {
            correctAnswer++;
            // clear()
            reset();
        } else {
            inccorectAnswers++;
            // clear()
            // showLoserImg()
            reset();
        }
    }); 
                  
     // This function is responsible for the count 
    function count() {
        $("#clock").text("Time Left " +time);
        time--;
        if (time === 0) {
            reset();
        };
    }
   
    function reset() {
        questionNumber++;
        clearInterval(intervalId);
        time = 25;
        
        // $("#image-div").html("")
        //clear();
        
        //console.log(questionNumber)
        if (questionNumber > questions.length - 1){
            console.log("will end here")
            endGame() 
        }  else {
            game();
        }

    }
        
    function endGame () {
        // debugger;
        clear()
        $("#clock").hide();
        $("#result").text("You have answered: " + correctAnswer + " questions correctly and you missed " + inccorectAnswers);
        $("#start").show()
    }
                
    function clear() {
        $("#question").text("");
        $("#a").text("");
        $("#b").text("");
        $("#c").text("");
        $("#d").text("");
        // ("#image-div").html("");
                

    }

            // Questions
            var questions = [
            {
                question: "One human hair can support how many kilograms?",
                a: "Three",
                b: "Five",
                c: "Seven",
                d: "Nine",
                correctAnswer: "a"
            },
            {
                question:
                "In ʻBen Hurʼ, which modern thing can be seen during the chario scene?",
                a: " A waitress",
                b: "A car",
                c: "A postbox",
                d: "A street lamp",
                correctAnswer: "b"
            },
            {
                Question: "Whatʼs the best way to stop crying while peeling onions?",
                a: "Sniff almonds",
                b: "Suck lemons",
                c: "Eat cheese",
                d: "Chew gum",
                correctAnswer: "d"
            },

            {
                question: "What was Karl Marxʼs favorite color?",
                a: "Brown",
                b: "Blue",
                c: "Red",
                d: "Purple",
                correctAnswer: "c"
            },

            {
                question: "How old was the youngest Pope?",
                a: "11",
                b: "17",
                c: "22",
                d: "26",
                correctAnswer: "a"
            },
            {
                question: "Which animal sleeps for only five minutes a day?",
                a: "A chameleon",
                b: "A koala",
                c: "A giraffe",
                d: "A beaver",
                correctAnswer: "c"
            },

            {
                question: "The bikini was originally called the what?",
                a: "Vest",
                b: "Range",
                c: "Line",
                d: "Atom",
                correctAnswer: "d"
            },

            {
                question: "Whatʼs a frogʼs favorite color?",
                a: "Blue",
                b: "Orange",
                c: "Yellow",
                d: "Brown",
                correctAnswer: "a"
            },
            {
                question: "On average, what do you do 15 times a day?",
                a: "Laugh",
                b: "Burp",
                c: "Break wind",
                d: "Lick your lips",
                correctAnswer: "a"
            },
            {
                question: "The inventor of the paint roller was of which nationality?",
                a: "Hungarian",
                b: "Canadian",
                c: "Norwegian",
                d: "Argentinian",
                correctAnswer: "b"
            }
            ];

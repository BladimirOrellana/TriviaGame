/// <reference path="../typings/globals/jquery/index.d.ts" />

//LAUNCH SCREEN VARIABLES
var hideLaunchScreenTimeOut;
var showLaunchScreenTimeOut;
//SOUND VARIABLES
var sounds = {
    "incorrect": new Audio("assets/sound/incorrect.mp3"),
    "correct": new Audio("assets/sound/correct.mp3")
}

var clickSound = new Audio("assets/sound/click.mp3");
var questionBackGroundSound = new Audio("assets/sound/question-sound-background.mp3")
var soundOnOff = false;
// CREATE A VARIABLE TO FOR NETX QUESTION
var showNextQuestion;
var count = 0;

// CATEGIRIES VARIABLES
var categoriesHtml = ['html','css','javascriH3T','jquery'];
//RANDON QUESTION VARIABLE
var randonQuestion;
//--------------HTML---------
var categoryHtmlQuestions = ['What does HTML mean?', 'What is a P tag','What is a IMG tag'];
var categoryHtmlOptios = ['Hypertext Markup Language', 'The HTML P element represents a paragraph.','The img tag defines an image in an HTML page']
//CATEGORY QUESTIONS 2
var categoryHtmlQuestions2 = ['What does a strong tag do?', 'What is a div tag?','What is a h1 tag?'];
var categoryHtmlOptios2 = [' Strong tag is used to highlight or emphasize text.', 'The div tag defines a division or a section in an HTML document','The h1 tag in HTML will usually be the title of a post or other emphasized text on the page']

//CATEGORY QUESTION 

//CONVERT TO RANDON THE VARIABLE categoryHtmlQuestions
var categoryHtmlQuestionsRandon = categoryHtmlQuestions[Math.floor(Math.random() * categoryHtmlQuestions.length)]
//--------------HTML---------
//WINER VARIABLE
var winner = '';
//LOSSER VARIABLE
var loser = '';
//INTERVAL TIMER
var timer = 5 + 1;
var timerV;
// DISPLAY TOP NAV FUNCTION
 function displayNav(){
     $(".buttons-container").show();
 }
function timerFuntion(){

 timerV = setInterval(activateTimer, 1000);

function activateTimer(){
    timer--;
    $("#timer").html("Timer: " + timer).css("color", "green");
   
    if(timer === 0){
        nextButtonFunction();
        loser++;
        $(".loser").html("Wrong " + loser);
        $(".score").show();
        $(".play").hide();
        $(".wrong").show();
        $(".answer").hide();
        $(".wrong-container").html("Times's Up");
        $("#timer").html("Timer: " + timer).css("color", "red");
        clearInterval(timerV)
        pauseBackgroundSound();

       
    }
}



}





//ON CLICK EVENTS
$("#startGame").on('click', startGame);
$("#backgroundSoundPause").on('click', function(){
    
    pauseBackgroundSound();
    $("#backgroundSoundPause").attr("id", "backgroundSoundOn");
})

$("#backgroundSoundOn").on('click', function(){
    $("#backgroundSoundOn").attr("id", "backgroundSoundPause");
    playBackgroundSound();
   
})
   
  
//PLAY SOUND FUNCTION
function playBackgroundSound(){
    
   
    $("#backgroundSoundPause").html("<i class='fas fa-volume-up volume-icon'></i>");
    questionBackGroundSound.play();
}
//PAUSE SOUND FUNCTION
function pauseBackgroundSound(){
   
    $("#backgroundSoundPause").html("<i class='fas fa-volume-mute volume-icon'></i>");
    
    questionBackGroundSound.pause();
}
var counter = 0;
function displayCategory(){
    alert(categoriesHtml[counter])
}
function nextButtonFunction(){
    var nextButton = $("<button>");
    nextButton.attr("id", "next");
    nextButton.attr("data-next", "next");
    nextButton.addClass("next");
    nextButton.html("Next");
    
    $(".main-background").append(nextButton);
    $(".next").click(function(){
        
        displayCategory();
        counter++;
        if(counter === categoriesHtml.length){
            counter = 0;
        }
    })
}

//WINNER SCREEN FUNTION
function winnerScreen(){
    $(".winner").html("Correct " + winner);
    $(".score").show();
   $(".play").hide();
   $(".correct").show();
   $(".correct-container").html("CORRECT");
  
}

//CATEGORIES FUNCTION
var categoriesFuntion = function(){
    showLaunchScreenTimeOut = setTimeout(function(){
        $(".categories").show();
        for (var i =0; i<categoriesHtml.length; i++){
            var category = $("<button>");
            category.attr("id", categoriesHtml[i]);
            category.addClass("category");
            category.html(categoriesHtml[i]);
            $(".categories-container").append(category);

            $(category).on('click', function(){
                displayNav();
              clickSound.play();
                console.log($(this).attr("id"));
                if($(this).attr("id") === "html"){
                    //Play background sound
                    playBackgroundSound();
                    //TIMER FUNTION
                    timerFuntion()
                    //HTML FUNTION
                    htmlFunction();
                }
            })
            
           
        }
    }, 500);

   
  
}
//  SHOW LAUNCH SCREEN FUNCTION
function showLaunchScreen(){
    $("#launch-screen").show();
    }

    //HIDE LAUNCH SCREEN FUNCTION
function hideLaunchScreen(){
    clickSound.play();
     setTimeout(function(){
        $("#launch-screen").hide();
     }, 500);
}
// SHOW CATEGORIES SCREEN FUNCTION
function showCategoriesFuntions(){
    $(".categories").show();
    }
    // HIDE CATEGORIES  SCREEN FUNCTION
    function hideCategoriesFuntions(){
        $(".categories").hide();
        setTimeout(function(){
            $(".categories").hide();
         }, 500);
        }

        function showPlayFunction(){
            $(".play").show();
            
        }

        // HTML  CATEGORY FUNCTION
        function htmlFunction(){
  setTimeout(function(){
                hideCategoriesFuntions();
                showPlayFunction();
                randonQuestion =$("<h3>");
                randonQuestion.html(categoryHtmlQuestionsRandon);
                $(".question-container").append(randonQuestion);
                
                for (var a = 0; a<categoryHtmlOptios.length; a++){
                    randonQuestion.attr("data-categoty", categoryHtmlQuestionsRandon);
                  var   categoryNewDiv = $("<div>");
                  categoryNewDiv.attr("data-id", categoryHtmlQuestions[a]);
                  categoryNewDiv.attr("title", categoryHtmlOptios[a]);
                  categoryNewDiv.addClass("options-div");
                  categoryNewDiv.html(categoryHtmlOptios[a]);
                  $(".play-container").append(categoryNewDiv);
                  //ALEX COMTINUE WORKING  HERE
                  $(categoryNewDiv).on('click', function(){
                    
                   //WINNER WINDOW CODE
                    if($(this).attr("data-id") === categoryHtmlQuestionsRandon ){
                        pauseBackgroundSound();
                        sounds.correct.play();
                        winner++;
                        $(".answer").append($(this).attr("title"));
                        winnerScreen();
                       clearInterval(timerV);
                       nextButtonFunction();
                        

                      }else{
                        pauseBackgroundSound();
                        sounds.incorrect.play();
                        loser++;
                        $(".loser").html("Wrong " + loser);
                        $(".score").show();
                        $(".play").hide();
                        $(".wrong").show();
                        $(".wrong-container").html("WRONG");
                        if(categoryHtmlQuestionsRandon === categoryHtmlQuestions[0]){
                            $(".answer").html(categoryHtmlOptios[0]).css("border","2px solid green");
                        }else if(categoryHtmlQuestionsRandon === categoryHtmlQuestions[1]){
                            $(".answer").html(categoryHtmlOptios[1]).css("border","2px solid green");
                        }else if(categoryHtmlQuestionsRandon === categoryHtmlQuestions[2]){
                            $(".answer").html(categoryHtmlOptios[2]).css("border","2px solid green");
                        }
                        
                        clearInterval(timerV);
                        
                        nextButtonFunction();
                      }
                      
                  })

                }
            },500)
              

              
            }
        
function startGame(){
    hideLaunchScreen();
   categoriesFuntion();
  

}



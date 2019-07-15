/// <reference path="../typings/globals/jquery/index.d.ts" />

//LAUNCH SCREEN VARIABLES
var hideLaunchScreenTimeOut;
var showLaunchScreenTimeOut;
//SOUND VARIABLES
var clickSound = new Audio("assets/sound/click.mp3");
var questionBackGroundSound = new Audio("assets/sound/question-sound-background.mp3")
var soundOnOff = false;

// CATEGIRIES VARIABLES
var categoriesHtml = ['html','css','javascriH3T','jquery'];

//WINER VARIABLE
var winner = '';
//LOSSER VARIABLE
var loser = '';
//INTERVAL TIMER
var timer = 5 + 1;
function timerFuntion(){

var timerV = setInterval(activateTimer, 1000);

function activateTimer(){
    timer--;
    console.log(timer)
    if(timer === 0){
        console.log("Time's UP") 
        loser++;
        $(".loser").html("Wrong " + loser);
        $(".score").show();
        $(".play").hide();
        $(".wrong").show();
        $(".wrong-container").html("Times's Up");
        stopTimer()
    }
}

function stopTimer(){

    clearInterval(timerV);
}

}



//RANDON QUESTION VARIABLE
var randonQuestionH3Tag;
//CATEGORY QUESTION 
var categoryHtmlQuestions = ['What is HTML', 'What is a P tag','What is a IMG tag'];
var categoryHtmlOptios = ['Hypertext Markup Language', 'Represents a paragraph','The img tag defines an image in an HTML page']
//CONVERT TO RANDON THE VARIABLE categoryHtmlQuestions
var categoryHtmlQuestionsRandon = categoryHtmlQuestions[Math.floor(Math.random() * categoryHtmlQuestions.length)]

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
                clickSound.play();
                console.log($(this).attr("id"));
                if($(this).attr("id") === "html"){
                    timerFuntion();
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
                randonQuestionH3Tag =$("<h3>");
                randonQuestionH3Tag.html(categoryHtmlQuestionsRandon);
                randonQuestionH3Tag.attr("data-categoty",categoryHtmlQuestionsRandon);  
                $(".question-container").append(randonQuestionH3Tag);
                
                for (var a = 0; a<categoryHtmlOptios.length; a++){
                   
                  var   categoryNewDiv = $("<div>");
                  categoryNewDiv.attr("data-id", categoryHtmlQuestions[a]);
                  categoryNewDiv.addClass("options-div");
                  categoryNewDiv.html(categoryHtmlOptios[a]);
                  $(".play-container").append(categoryNewDiv);
                  //ALEX COMTINUE WORKING  HERE
                  $(categoryNewDiv).on('click', function(){
                    
                    clickSound.play();
                    if($(this).attr("data-id") === categoryHtmlQuestionsRandon ){
                        
                        winner++;
                        $(".winner").html("Correct " + winner);
                        $(".score").show();
                       $(".play").hide();
                       $(".correct").show();
                       $(".correct-container").html("CORRECT");
                       stopTimer();
                        

                      }else{
                        
                        loser++;
                        $(".loser").html("Wrong " + loser);
                        $(".score").show();
                        $(".play").hide();
                        $(".wrong").show();
                        $(".wrong-container").html("WRONG");
                        
                        if(loser > 0){
                            
                        }
                      }
                      
                  })

                }
            },500)
              

              
            }
        
function startGame(){
    hideLaunchScreen();
    playBackgroundSound();
    categoriesFuntion();
  

}



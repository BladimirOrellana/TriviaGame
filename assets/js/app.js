
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
// CREATE A VARIABLE TO SHOW THE NETX QUESTION
var showNextQuestion;
var count = 0;

// CATEGORIES VARIABLES
var categoriesHtml = ['html','css','javascript','jquery'];
//RANDON QUESTION VARIABLE
var randonQuestion;
//--------------HTML---------
//CATEGORY QUESTIONS 1
var categoryHtmlQuestions = ['What does HTML mean?', 'What is a P tag','What is a IMG tag'];
var categoryHtmlOptios = ['Hypertext Markup Language', 'The HTML P element represents a paragraph.','The img tag defines an image in an HTML page']
//CONVERT TO RANDON THE VARIABLE categoryHtmlQuestions
var categoryHtmlQuestionsRandon = categoryHtmlQuestions[Math.floor(Math.random() * categoryHtmlQuestions.length)]
//CATEGORY QUESTIONS 2
var categoryHtmlQuestions2 = ['What does a strong tag do?', 'What is a div tag?','What is a h1 tag?'];
var categoryHtmlOptios2 = [' Strong tag is used to highlight or emphasize text.', 'The div tag defines a division or a section in an HTML document','The h1 tag in HTML will usually be the title of a post or other emphasized text on the page']
//CONVERT TO RANDON THE VARIABLE categoryHtmlQuestions
var categoryHtmlQuestions2Randon = categoryHtmlQuestions2[Math.floor(Math.random() * categoryHtmlQuestions2.length)]
//--------------HTML---------

//--------------CSS---------
//CATEGORY QUESTIONS 1
var categorycssQuestions = ['What does css stand for?', 'What is inline css?','What is margin?'];
var categorycssOptios = ['Cascading Style Sheet', 'Inline CSS contains the CSS property in the body section attached with element.','The CSS margin properties are used to create space around elements']
//CONVERT TO RANDON THE VARIABLE categorycssQuestions
var categorycssQuestionsRandon = categorycssQuestions[Math.floor(Math.random() * categorycssQuestions.length)]

//--------------CSS---------
//--------------JAVASCRIPT---------
//CATEGORY QUESTIONS 1
var categoryJavascriptQuestions = ['What is javascript?', 'What is a loop in javascript??','What is a boolean object?'];
var categoryJavascriptOptios = ['JavaScript is a programming language for the web.', 'JavaScript loops are used to repeatedly run a block of code - until a certain condition is met.','The Boolean object represents two values, either "true" or "false".']
//CONVERT TO RANDON THE VARIABLE categorycssQuestions
var categoryJavascriptQuestionsRandon = categoryJavascriptQuestions[Math.floor(Math.random() * categoryJavascriptQuestions.length)]


//--------------JAVASCRIPT---------

//--------------JQUERY---------
//CATEGORY QUESTIONS 1
var categoryJqueryQuestions = ['What is jQuery?', 'Is jquery a programming language?','What is CDN?'];
var categoryJqueryOptios = ['jQuery is a lightweight,  JavaScript library.', 'No, Jquery is not a programing lenguaje.','A content delivery network']
//CONVERT TO RANDON THE VARIABLE categorycssQuestions
var categoryJqueryQuestionsRandon = categoryJqueryQuestions[Math.floor(Math.random() * categoryJqueryQuestions.length)]


//--------------JQUERY---------
//WINER VARIABLE
var winner = '';
//LOSSER VARIABLE
var loser = '';
//INTERVAL TIMER
var timer = 5 + 1;
var timerV;
// CONTER VARIABLE
var counter = 0;
// DISPLAY TOP NAV FUNCTION
 function displayNav(){
     $(".buttons-container").show();
 }
 //TIMER FUNTION
function timerFuntion(){

 timerV = setInterval(activateTimer, 1000);

function activateTimer(){
    timer--;
    $("#timer").html("Timer: " + timer).css("color", "green");
   
    if(timer === 0){
        
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

function displayNextcategory(){
    
    alert("dispaly Category")
   
 
  if(counter === counter){
   

  }
}
function nextButtonFunction(){
  
    $("#next").click(function(){
        $(".correct").hide();
       
        for (var b =0; b<categoryHtmlQuestions2.length; b++){
            
        }
        $(".play").show();
        itervalNext = setInterval(function(){

counter++;





        if(counter === categoryHtmlQuestions2.length){
            counter = 0;
        }
        }, 2000)
        
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
            //THIS CREATE THE BUTTONS WITH THE OPTIONS FOR THE CATEGORIES
            var category = $("<button>");
            category.attr("id", categoriesHtml[i]);
            category.addClass("category");
            category.html(categoriesHtml[i]);
            // WE APPEND THE BUTTONS TO THE PARENT DIV
            $(".categories-container").append(category);
//HERE WHEN USER CLICKS ON ANY CATEGORY WE WILL SHOW THE QUESTION FOR THAT CATEGORY AND START THE TIMER
            $(category).on('click', function(){
                //THIS displayNav()FUNCTION  DISPLAY THE TOP NAV WHERE WE SHOW THE CORRECT AND WRONG ANSWERS
                displayNav();
                //EVERY TIME WE CLICK THE BUTTON THE SOUND IS ACTIVATED
              clickSound.play();
              //THIS CHECK WHAT CATEGORI THE USER HAS CLICK AND SHOWS THE QUESTIONS FOR THAT CATEGORY
              if($(this).attr("id") === "html"){
                    //Play background sound
                    playBackgroundSound();
                    //TIMER FUNTION 
                    timerFuntion()
                    //HTML FUNTION THE QUESTION FOR THE ANSWER
                    htmlFunction();
                    
                }else  if($(this).attr("id") === "css"){
                    console.log("css")
                    //Play background sound
                    playBackgroundSound();
                    //TIMER FUNTION 
                    timerFuntion()
                    //CSS FUNTION THE QUESTION FOR THE ANSWER
                    cssFunction()
                 
                    
                } if($(this).attr("id") === "javascript"){
                    console.log("Java")
                    //Play background sound
                    playBackgroundSound();
                    //TIMER FUNTION 
                    timerFuntion()
                    //HTML FUNTION THE QUESTION FOR THE ANSWER
                    javascriptFunction()
                    
                    
                } if($(this).attr("id") === "jquery"){
                    console.log("J")
                    //Play background sound
                    playBackgroundSound();
                    //TIMER FUNTION 
                    timerFuntion()
                    //HTML FUNTION THE QUESTION FOR THE ANSWER
                    jqueryFunction()
                   
                    
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
        
                // CSS CATEGORY FUNCTION
        function cssFunction(){
            setTimeout(function(){
                          hideCategoriesFuntions();
                          showPlayFunction();
                          randonQuestion =$("<h3>");
                          randonQuestion.html(categorycssQuestionsRandon);
                          $(".question-container").append(randonQuestion);
                          
                          for (var a = 0; a<categorycssOptios.length; a++){
                              randonQuestion.attr("data-categoty", categorycssQuestionsRandon);
                            var   categoryNewDiv = $("<div>");
                            categoryNewDiv.attr("data-id", categorycssQuestions[a]);
                            categoryNewDiv.attr("title", categorycssOptios[a]);
                            categoryNewDiv.addClass("options-div");
                            categoryNewDiv.html(categorycssOptios[a]);
                            $(".play-container").append(categoryNewDiv);
                             $(categoryNewDiv).on('click', function(){
                              
                             //WINNER WINDOW CODE
                              if($(this).attr("data-id") === categorycssQuestionsRandon ){
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
                                  if(categorycssQuestionsRandon === categorycssQuestions[0]){
                                      $(".answer").html(categorycssOptios[0]).css("border","2px solid green");
                                  }else if(categorycssQuestionsRandon === categorycssQuestions[1]){
                                      $(".answer").html(categorycssOptios[1]).css("border","2px solid green");
                                  }else if(categorycssQuestionsRandon === categorycssQuestions[2]){
                                      $(".answer").html(categorycssOptios[2]).css("border","2px solid green");
                                  }
                                  
                                  clearInterval(timerV);
                                  
                                  nextButtonFunction();
                                }
                                
                            })
          
                          }
                      },500)
                        
          
                        
                      }
                         // JAVASCRIPT CATEGORY FUNCTION
        function javascriptFunction(){
            setTimeout(function(){
                          hideCategoriesFuntions();
                          showPlayFunction();
                          randonQuestion =$("<h3>");
                          randonQuestion.html(categoryJavascriptQuestionsRandon);
                          $(".question-container").append(randonQuestion);
                          
                          for (var a = 0; a<categoryJavascriptOptios.length; a++){
                              randonQuestion.attr("data-categoty", categoryJavascriptQuestionsRandon);
                            var   categoryNewDiv = $("<div>");
                            categoryNewDiv.attr("data-id", categoryJavascriptQuestions[a]);
                            categoryNewDiv.attr("title", categoryJavascriptOptios[a]);
                            categoryNewDiv.addClass("options-div");
                            categoryNewDiv.html(categoryJavascriptOptios[a]);
                            $(".play-container").append(categoryNewDiv);
                             $(categoryNewDiv).on('click', function(){
                              
                             //WINNER WINDOW CODE
                              if($(this).attr("data-id") === categoryJavascriptQuestionsRandon ){
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
                                  if(categoryJavascriptQuestionsRandon === categoryJavascriptQuestions[0]){
                                      $(".answer").html(categoryJavascriptOptios[0]).css("border","2px solid green");
                                  }else if(categoryJavascriptQuestionsRandon === categoryJavascriptQuestions[1]){
                                      $(".answer").html(categoryJavascriptOptios[1]).css("border","2px solid green");
                                  }else if(categoryJavascriptQuestionsRandon === categoryJavascriptQuestions[2]){
                                      $(".answer").html(categoryJavascriptOptios[2]).css("border","2px solid green");
                                  }
                                  
                                  clearInterval(timerV);
                                  
                                  nextButtonFunction();
                                }
                                
                            })
          
                          }
                      },500)
                        
          
                        
                      }

                          // JQUERY CATEGORY FUNCTION
        function jqueryFunction(){
            setTimeout(function(){
                          hideCategoriesFuntions();
                          showPlayFunction();
                          randonQuestion =$("<h3>");
                          randonQuestion.html(categoryJqueryQuestionsRandon);
                          $(".question-container").append(randonQuestion);
                          
                          for (var a = 0; a<categoryJqueryOptios.length; a++){
                              randonQuestion.attr("data-categoty", categoryJqueryQuestionsRandon);
                            var   categoryNewDiv = $("<div>");
                            categoryNewDiv.attr("data-id", categoryJqueryQuestions[a]);
                            categoryNewDiv.attr("title", categoryJqueryOptios[a]);
                            categoryNewDiv.addClass("options-div");
                            categoryNewDiv.html(categoryJqueryOptios[a]);
                            $(".play-container").append(categoryNewDiv);
                             $(categoryNewDiv).on('click', function(){
                              
                             //WINNER WINDOW CODE
                              if($(this).attr("data-id") === categoryJqueryQuestionsRandon ){
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
                                  if(categoryJqueryQuestionsRandon === categoryJqueryQuestions[0]){
                                      $(".answer").html(categoryJqueryOptios[0]).css("border","2px solid green");
                                  }else if(categoryJqueryQuestionsRandon === categoryJqueryQuestions[1]){
                                      $(".answer").html(categoryJqueryOptios[1]).css("border","2px solid green");
                                  }else if(categoryJqueryQuestionsRandon === categoryJqueryQuestions[2]){
                                      $(".answer").html(categoryJqueryOptios[2]).css("border","2px solid green");
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




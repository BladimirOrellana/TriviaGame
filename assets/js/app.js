/// <reference path="../typings/globals/jquery/index.d.ts" />
$("#startGame").on('click', startGame);
var hideLaunchScreenTimeOut;
var showLaunchScreenTimeOut;
//SOUND VARIABLES
var clickSound = new Audio("assets/sound/click.mp3");
var soundOnOff = false;
function soundOnOffFunction(){
    if(soundOnOff === false){
        soundOnOff = true;
        $("#soundOnOffButton").html("on");
        
    }
}


//HIDE SCREEN FUNCTION
function hideLaunchScreen(){
    clickSound.play();
$("#launch-screen").hide();
}
// HIDE SHOW SCREEN FUNCTION
function showLaunchScreen(){
    $("#launch-screen").show();
    }
function startGame(){
    hideLaunchScreen();

  

}

soundOnOffFunction();

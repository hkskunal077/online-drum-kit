
//FOR ALL MOUSE EVENTS
var numButtons = document.querySelectorAll(".drum").length;
for(var i = 0; i < numButtons; i++){
  //Anonymous function
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    //fileLocation = "sounds/tom-" + i + ".mp3";
    //this.style.color = "white";
    var buttonPressed = this.innerHTML;
    makesound(buttonPressed);
    buttonAnimation(buttonPressed);
});
}




//FOR ALL KEYBOARD EVENTS
document.addEventListener("keydown", function(){
   makesound(event.key);
   buttonAnimation(event.key);

});


//THE FUNCTION THAT MAKES SOUND
function makesound(condition) {

  switch (condition) {
  case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

  case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

  case "s":
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;

  case "d":
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;

  case "j":
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
    break;

  case "k":
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
    break;

  case "l":
    var kick = new Audio('sounds/kick-bass.mp3');
    kick.play();
    break;
    default: alert("Do not press any other key");
  }
}


function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." +currentKey);
  activeButton.classList.add("pressed");
  //timeout functions
  setTimeout(function(){
    activeButton.classList.remove("pressed")
  }, 100);

}
// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
//Higher order funcions can take other fucntions as input.
//In this case we are passign say any <respondToClick> function

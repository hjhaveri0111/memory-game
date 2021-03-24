
const clueHoldTime = 1000
const cluePauseTime = 333; //delay between clues
const nextClueWaitTime = 1000; //delay between tone playback

//Global Variables
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var lenPattern = 8; // variable that sets the length of pattern

function startGame(){
  progress = 0;
  gamePlaying = true;
  makePattern(); //creates randomized pattern every time
  document.getElementById("startBtn").classList.add("hidden"); // hides start button
  document.getElementById("stopBtn").classList.remove("hidden"); //shows stop button
  playClueSequence();
}

// Generates a random pattern for 
function makePattern(){
  for(let i = 0; i < lenPattern; i++){
    pattern[i] = Math.round(Math.random()*4)
  }
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("stopBtn").classList.add("hidden"); // hides stop button
  document.getElementById("startBtn").classList.remove("hidden"); // shows start button
}

function lightButton(num){
  document.getElementById("btn"+num).classList.add("lit")
}

function clearButton(num){
  document.getElementById("btn"+num).classList.remove("lit")
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!.");
}

function playSingleClue(btn){
  if(gamePlaying){
    
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
    
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; 
  
  for(let i=0;i<=progress;i++){ 
    
    setTimeout(playSingleClue,delay,pattern[i]) 
    
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  if(pattern[guessCounter] == btn){ //Is the guess correct?
    
    if(guessCounter == progress){ //checks if the guess is the last guess for the turn
      
      if(progress == pattern.length -1){
        //End of the Game
        winGame();
      }
      else{
        progress ++; //Not the last turn, update the end point for the next sequence
        playClueSequence();
      }
      
    }
    else{
      guessCounter ++; //Still more guesses in this turn
    }
  }
  else{
    loseGame(); //Wrong guess
  }

  
  
}





// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

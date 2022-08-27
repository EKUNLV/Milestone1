var story = 0; // keep story from being undefined 
var form = document.getElementById('theAdventure');// get the element with matching ids
var submit = document.getElementById('continueButton');
var reset = document.getElementById('resetButton');
var answer = '';
//localStorage.setItem("deathCount", "0")
//var deathCount = parseInt(localStorage.getItem("deathCount"));

var story_telling = {
  "start": { //beginning of the story
    "question": "You wake up in a forest, you don't know how you got here. There's two paths ahead, which path do you choose?",
    "answers": {
      "a": "Mansion",
      "b": "Cave",
    }
  }, 
  // Mansion Path
  "1_a": {
    "question": "You decide to go to the abandoned mansion, and once again met with a decision. Do you...",
    "answers": {
      "a": "Walk over to the old root cellar",
      "b": "Try the front door",
      "c": "Run away"
    }
  },
  
  "2_a": {
    "question": "The root cellar leads to a dark basement, a dim light from the other end seems to be headed your way. A huge orc is headed towards you, without hesistation the orc swings at your head knocking you unconscious. YOU DIED ",
     
  },
  "2_b": {
    "question": "You try the front door, locked obviously, you look under the mat and find a key. But there's no keyhole to this door.  ",
    "answers": {
        "a": "Head over to the ominous looking shed",
        "b": "Climb the side of the house to a locked window"
    }
  },
  "2_c": {
    "question": "You turn and run, not to deal with any of the bullshit, you trip, fall, and twist your ankle. YOU DIED",
    
  },
  // Winning path
  "3_a": {
    "question": "You open the shed and try the key, UNLOCKED, you head inside and find a BMW M3 Matte Black and drive home to safety. THE END",
  },
  "3_b": {
    "question": "You attempt to climb the side of the mansion, SNAP!, the wood breaks and you fall to the ground. At first you seem fine but your chest becomes warm and wet. It seems you have landed on the debris from the house. YOU DIED ",
    
  },

   // Cave Path

   "1_b": {
    "question": "You go to the caves. What do you do?",
    "answers": {
      "d": "Run away screaming.",
      "e": "Head inside the cave",
    }
  },
  "2_d": {
    "question": "You start to run away to not deal with the bullshit, trip, fall, and twist your ankle. YOU DIED",
    
  },
  "2_e": {
    "question": "You head inside the cave and it forks into 2 paths, one has dim light coming from the end, the other has traces of blood. Which path do you choose?",
    "answers": {
    "d": "You head towards the dim light",
    "e": "You head towards the trail of blood"
    }
},
"3_d": {
    "question": "You head toward the dim light, you find yourself in a little hut with 2 baby bear cubs. You turn around and find mama bear very angry... YOU DIED",
    
  },
  "3_e": {
    "question": "You follow the traces of blood, you end up finding a dead body with car keys in his hand, you pick up the keys and walk a little further to find a BMW M3 Matte Black. You get in the car and drive home!",
    
},


}
//Both buttons I followed a tutorial by "8bitBritt"
submit.addEventListener('mouseup', function(){ //when a button on a pointing device is released while the pointer is located inside it
    answer = form.querySelectorAll('input[type=radio]:checked')[0].value; //a list of the document's elements that match the specified group of selectors.
    if(answer) {
      story++;//increment or add 1 to
      populateForm(story + '_' + answer);//if a radio is checked populate our form with the answer
      console.log("Story time!"); // Console log to make sure things are working
      //console.log(deathCount)
    }
  });
  
  // Reset button
  function resetForm(){
      document.getElementById("theAdventure").reset();
      //localStorage.setItem("deathCount", deathCount)
  }
  
  // Generate answers from story
  function populateForm(story) {
    var current_story = story_telling[story];//take values from story_telling story
    var text = '';
  
    for(var prop in current_story['answers']) {
      if(current_story['answers'].hasOwnProperty(prop)) { //method returns a boolean (true or false) indicating whether the object has the specified property as its own property
        text += '<label><input type="radio" name="answer" value="' + prop + '"/><span>' + current_story['answers'][prop] + '</span></label>';// adding answers to the story
      }
    }
  
    form.querySelector('p').innerHTML = current_story.question;//write questions to the p tag in the HTML
    form.querySelector('fieldset').innerHTML = text;//write answers to the fieldset 
    //form.querySelector('count').innerHTML = deathCount;//add field for deathcount
  }
  
  populateForm('start');//set the form at the beginning
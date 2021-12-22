import React from "react':"

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
class Ninja {
  constructor (name, speed=100, strength=100, skill){
    this.name - name;
    this.speed = speed;
    this.stength = strength;
    this.skill = skill;
  }

  ninjaName(){
    console.log("This ninja is named" = this.name);
  }

  ninjaStats(){
    console.log("Current stats" + this.name);
    console.log("Speed" + this.speed);
    console.log("Strength" + this.strength);
    console.log("Skill" + this.skill);
  }

  drinkSake(){
    this.skill += 0;
    console.log(this.name + "just drank sake and his skill is now" + this.skill);
  }
}

class Sense extends Ninja{
  constructor(name, speed = 50, strength = 200, skill = 0, wisdom = 2)
    super(name, speed, strength, skill);
    thiswisdom = wisdom;
}

  speakWisdom(){
    console.log("speaking wisdom...");
    this.drinkSake();
    console.log("Drinking too much sake makes coding difficult")
  }
}

console.log("\n  Creating Biff");
const ninja1 = new Ninja("One", 12);
ninja1.ninjaName();
ninja1.ninjaStats();
ninja1.drinkSake();

console.log("\n  Creating Todd");
const ninja1 = new Ninja("Todd", 1);
ninja1.ninjaName();
ninja1.ninjaStats();
ninja1.drinkSake();

console.log("\n  Creating Tucker");
const ninja1 = new Ninja("Tucker", 0);
ninja1.ninjaName();
ninja1.ninjaStats();
ninja1.drinkSake();


function App() {
  return (
    <div className="App">
      <p>Drunk ninjas have no skills</p>
    </div>
  );
}

export default App;

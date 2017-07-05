class Ninja{
    constructor(name, age){
    this.name = name;
    this.age = age;
    var speed = 3;
    var strength = 3;
    this.health = 100;
  }

  sayName(){
    console.log(`${this.name}`)
  }

  showstats(){
    console.log(`Name: ${this.name}, Health: ${this.health}`)
  }


  kick(who){
      if(who instanceof Ninja){
      who.health-=5
      console.log(` ${who.name} was kicked by ${this.name} and ${this.name}'s health is now ${who.health}`)
    }
  }

  punch(who){
      if(who instanceof Ninja){
      who.health-=5
    	console.log(`${who.name} was punched by ${this.name} and lost 5 health`)
    }
    }

  drinkSake(){
	   this.health+=10
     console.log(`${this.name} just had some sake so ${this.name}'s  health is  up to ${this.health}`)
   }
}

class Sensei extends Ninja{
  constructor(name, age){
    super(name,age);
    this.name = name;
    this.age = age;
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }
  speakWisdom(){
    super.drinkSake();
    console.log("squirrels sneeze, they sneeze real tall they sneaze real small, because they eat their soup!")
  }
}

let spence = new Ninja('spence', 32);
let hersch = new Ninja('hersch', 22);
spence.sayName();
spence.showstats();
spence.drinkSake();
hersch.kick(spence);
spence.punch(hersch);
let liz_warren = new Sensei('LizWarren')
liz_warren.speakWisdom();

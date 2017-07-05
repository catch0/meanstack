//function Person(name, age){
//    // create a private variable that stores a reference to the new object we create
//    var self = this;
//    var privateVariable = "This variable is private";
//    var privateMethod = function(){
//        console.log("this is a private method for " + self.name);
//        console.log(self);
//    }
//    this.name = name;
//    this.age = age;
//    this.greet = function(){
//        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
//        // we can access our attributes within the constructor!
//        console.log("Also my privateVariable says: " + privateVariable)
//        // we can access our methods within the constructor!
//        privateMethod();
//    }
//}
//var joe = new Person("Joe", 23);
//joe.greet();
function Ninja(name, health){
    var self= this;
//    var privateVariable = speed;
//    var private Variable = strength;
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    
    this.sayName = function(){
        console.log(this.name);
    }
    
    this.showStats = function(){
        console.log('Name:' +this.name + ' Health:' +this.health + ' Speed:' +speed + ' Strength:' + strength)
    }
    
    this.drinkWhiskey = function(shots){
        this.health += 10 * shots;
        console.log(this.name +' just took ' + shots + ' shots of whiskey so his health is now:' + this.health)
        return this.health;
    }
    
    Ninja.prototype.punch = function(n){
        if( n instanceof Ninja){
        n.health -= 5;
        console.log(this.name + ' just punched '+ n.name + ' health is now ' + n.health)
        }
    }
    this.kick = function(n){
        n.health -= 5;
        console.log(this.name+ ' just kicked the shit out of ' + n.name+ ' so now ' + n.name+"'s"+ ' health is now '+ n.health)
    }
}
var spenc = new Ninja("spenc");
var spencer = new Ninja("spencero")
spencer.kick(spenc);
spencer.punch(spenc);
spenc.drinkWhiskey(2);
spenc.showStats();
//spenc.showStats();
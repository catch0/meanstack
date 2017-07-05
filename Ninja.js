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
        console.log(this.name, this.health, speed, strength)
    }
    
    this.drinkWhiskey = function(){
        this.health += 10;
        return this.health;
    }
    
    this.punch = function(n){
        if( n instanceof Ninja){
        n.health -= 5;
        }
    }
    this.kick = function(n){
        n.health -= 5;
    }
}
var spenc = new Ninja("spenc");
var spencer = new Ninja("spencero")
spenc.punch(spencer);
console.log("spenc punched spencer so now spencer's stats are")
spencer.showStats();
spencer.kick(spenc);
console.log("after spencer kicked spenc's stats are")
spenc.showStats();
//spenc.sayName();
//spenc.drinkWhiskey();
//spenc.showStats();
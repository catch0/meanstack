function Deck(){

  this.createDeck = function(){
    var suites=['Hearts', 'Diamonds', 'Spades', 'Clubs']
    var ranks=['Ace', '2','3','4','5','6','7','8','9','10','Jack', 'Queen', 'King']
    var cards=[]

      for(var x=0; x<suites.length;x++){
        for(var y=0; y<ranks.length; y++){
          var card=`${ranks[y]} of ${suites[x]}`
          cards.push(card);
        }
      }
      return cards;
    }
    this.cards = this.createDeck();
  }


  Deck.prototype.shuffle = function(){
    var currentIndex = this.cards.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
    return this;
  }

  Deck.prototype.reset = function(){
    this.cards=this.createDeck();
    return this
  }

  Deck.prototype.deal = function(){
    var card = this.cards.pop();
    console.log(card);
    return this
  }


new_deck=new Deck
console.log(new_deck.shuffle());
new_deck.shuffle().deal();

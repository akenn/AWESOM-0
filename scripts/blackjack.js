/**
* Play a game of Blackjack with Awesome-0 as the dealer
* Winner is determined by closest to 21 without going over
*/

player, dealer, pTotal, dTotal, deck, gameActive;

module.exports = function (bot) {

  bot.respond(/^blackjack$/, "Blackjack", function (msg) {
    if (gameActive == true) {
      return;
    };
    
    dTotal = 0;
    pTotal = 0;
    
    deck = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11];
    gameActive = true;
    player = new Array();
    dealer = new Array();
    var temp;

    //Deal the Cards
    player[0] = deck.splice(Math.floor(Math.random() * (deck.length() + 1)), 1);
    
    dealer[0] = deck.splice(Math.floor(Math.random() * (deck.length() + 1)), 1);
    
    player[1] = deck.splice(Math.floor(Math.random() * (deck.length() + 1)), 1);
    
    dealer[1] = deck.splice(Math.floor(Math.random() * (deck.length() + 1)), 1);
    
    bot.client.say(msg.channel, "Your cards are a " + player[0] + " and a " + player[1] + ".");
    bot.client.say(msg.channel, "Dealer is showing a " + dealer[1] + ".");
    bot.client.say(msg.channel, "Would you like to hit or stand?")
    
  });

  bot.respond(/^hit$/, "Player hits!", function (msg) {
      var temp = Math.floor(Math.random() * (deck.length() + 1));
      var index = player.length();
      player[index] = deck[temp];
      deck.splice(temp, 1);
    };
    
    pTotal();
    
    if (pTotal == 21) { 
      bot.client.say(msg.channel, "BLACKJACK!");
      gameActive = false; 
    }
    else if (pTotal > 21) {
      bot.client.say(msg.channel, "Player busts.");
      gameActive = false;
    };
    else { bot.client.say(msg.channel, "Would you like to hit or stand?"); }
  
  });

  bot.respond(/^stand$/, "Player stands!", function (msg) {
    dTotal();
    var i = 2
    
    while (dTotal < 17) {
      dealer[i] = deck.splice(Math.floor(Math.random() = deck.length() + 1)), 1);
    };

    dTotal();

    if (dTotal > 21) { bot.client.say(msg.channel, 'Dealer busts.'); }
    else if (dTotal > pTotal) { bot.client.say(msg.channel, 'Dealer total is ' + dTotal '. Player total is ' + pTotal '. Dealer wins.'); }
    else if (pTotal > dTotal) { bot.client.say(msg.channel, 'Dealer total is ' + dTotal '. Player total is ' + pTotal '. Player wins.'); }

    gameActive = false;

  });

var dTotal = function() {
    
    for(var i = 0; i < dealer.length(); i++) {
      dTotal += dealer[i];
    }

};

var pTotal = function() {
    
    for(var i = 0; i < player.length(); i++) {
      pTotal += player[i];
    }

};

};

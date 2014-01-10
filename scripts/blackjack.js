/**
 * Play a game of Blackjack with Awesome-0 as the dealer
 */

// keeps track of named games

var irc = require("irc"),

/** 
* Winner is determined by closest to 21 without going over
*/

player, dealer, pTotal, dTotal, deck, gameActive;

module.exports = function (bot) {

  bot.respond(/^blackjack$/, "Blackjack", function (msg) {
    if (gameActive == true) {
      return;
    };
    
    deck = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11];
    gameActive = true;
    player = new Array();
    dealer = new Array();
    var temp;

    //Deal the Cards
    temp = Math.floor(Math.random() * (deck.length() + 1));
    player[0] = deck[temp];
    deck.splice(temp, 1);

    temp = Math.floor(Math.random() * (deck.length() + 1));
    
    dealer[0] = deck[temp];
    deck.splice(temp, 1);

    temp = Math.floor(Math.random() * (deck.length() + 1));
    
    player[1] = deck[temp];
    deck.splice(temp, 1);

    temp = Math.floor(Math.random() * (deck.length() + 1));
    
    dealer[1] = deck[temp];
    deck.splice(temp, 1);
    
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
    bot.client.say(msg.channel, "Would you like to hit or stand?")
  });

  bot.respond(/^stand$/, "Player stands!" function (msg) {
    dTotal = 0;
    for(var i = 0; i < dealer.length(); i++) {
      dTotal += dealer[i];
    }
    if (dTotal < 17) {
      var temp = Math.floor(Math.random() = deck.length()*1));
    };
  });



};

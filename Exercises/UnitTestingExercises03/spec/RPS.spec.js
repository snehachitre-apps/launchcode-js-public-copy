const whoWon = require('../RPS.js');

describe("test rock paper scissors who won function",function(){

  it("return TIE! if player1 and player 2 tie in game",function(){

    let result = whoWon("rock","rock") || whoWon("paper","paper") || whoWon("scissors","scissors")
    expect(result).toEqual("TIE!")
  });


  it("return player 2 wins if player1 plays rock and player 2 plays paper",function(){

    let result = whoWon("rock","paper")
    expect(result).toEqual("Player 2 wins!")
  });

  it("return player 2 wins if player1 plays paper and player 2 plays scissors",function(){

    let result = whoWon("paper","scissors")
    expect(result).toEqual("Player 2 wins!")
  });

  it("return player 2 wins if player1 plays scissors and player 2 plays rock",function(){

    let result = whoWon("scissors","rock")
    expect(result).toEqual("Player 2 wins!")
  });

    
  it("return player 1 wins if player1 plays paper and player 2 plays rock",function(){

    let result = whoWon("paper","rock")
    expect(result).toEqual("Player 1 wins!")
  });

  it("return player 1 wins if player1 plays scissors and player 2 plays paper",function(){

    let result = whoWon("scissors","paper")
    expect(result).toEqual("Player 1 wins!")
  });

  it("return player 1 wins if player1 plays rock and player 2 plays scissors",function(){

    let result = whoWon("rock","scissors")
    expect(result).toEqual("Player 1 wins!")
  });
  
});
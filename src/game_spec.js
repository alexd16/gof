var Game = require('./game');

describe('Game', ()=> {
  var game;
  beforeEach(()=> game = new Game());
  
  describe('#initBoard', ()=> {
    it('inits the board with live cells in the given positions')
  });
  
  describe('#nextStep', ()=> {
    it('it advances the state of the board in one step')
  });
  
  describe('#next', ()=> {
    it('it advances the state of the board in the number of given steps')
  });
});
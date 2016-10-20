describe ('Game', function() {

  var game;
  var playerX;
  var playerO;

  beforeEach(function () {
    game = new Game();
    playerX = new Player();
    playerO = new Player();
  });

  describe('Player X', function() {

    it('A new game creates Player X', function() {
      expect(game._playerX).toEqual([playerX]);
    });

    it('A new game creates Player O', function() {
      expect(game._playerO).toEqual([playerO]);
    });

    it('A board of 9 spaces is created', function() {
      expect(game._board).toEqual([[" "," ",""], [" "," ",""], [" "," ",""]]);
    });


  });

});

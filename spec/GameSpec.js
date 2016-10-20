describe ('Game', function() {

  var game;
  var player;

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

  });

});

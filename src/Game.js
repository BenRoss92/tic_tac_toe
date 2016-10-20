function Game(player) {
  this._playerX = [new Player()];
  this._playerO = [new Player()];
  // this._board = [[nil, nil, nil],[nil, nil, nil],[nil, nil, nil]];
  this._board = [
    [" "," ",""],
    [" "," ",""],
    [" "," ",""]];
}

Game.prototype = {

};

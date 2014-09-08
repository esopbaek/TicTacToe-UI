(function(root) {
  var TTT = root.TTT = (root.TTT || {});
    
  var Board = TTT.Board = function() {
    this.grid = [[null, null, null], [null, null, null], [null, null, null]];
    this.player = Board.marks[0];
  };
  
  Board.marks = ["X", "O"];
  
  Board.prototype.placeMark = function (xCoord, yCoord) {
    this.grid[xCoord][yCoord] = this.player;
    this.player = (this.player == Board.marks[0] ? Board.marks[1] : Board.marks[0]);
  };
  
  Board.prototype.winner = function () {
    for (var i = 0; i < 3; i++) {
	  // row match
      if (
        this.grid[i][0] && 
        this.grid[i][0] == this.grid[i][1] && 
        this.grid[i][1] == this.grid[i][2]
      ) {
        return this.grid[i][0]   
      }
      
	  // column match
      if (
        this.grid[0][i] && 
        this.grid[0][i] == this.grid[1][i] && 
        this.grid[1][i] == this.grid[2][i]
      ) {
        return this.grid[0][i]
      }
    }
    
	// first diagonal
    if (this.grid[0][0] &&
      this.grid[0][0] == this.grid[1][1] && 
      this.grid[1][1] == this.grid[2][2]
    ) {
      return this.grid[0][0];
    }
    
	// second diagonal
    if (this.grid[0][2] &&
      this.grid[1][1] == this.grid[0][2] && 
      this.grid[1][1] == this.grid[2][0]
    ) {
      return this.grid[0][2];
    }
    return null;
  };
  
  
  
})(this);
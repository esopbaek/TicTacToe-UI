$(document).ready(function() {
  var Board = new TTT.Board();
  $("li").on("click", function(event) {
    if (this.className == "empty") {
      var index = $(this).index()
      var xCoord = index % 3;
      var yCoord = Math.floor(index / 3);
      this.innerHTML = Board.player;
      Board.placeMark(xCoord, yCoord);
      $(this).removeClass("empty");
      
      if (Board.winner()) {
        for (var i = 0; i < 9; i++) {
          $($("li")[i]).removeClass("empty");
        }
        
        alert(Board.winner() + " won!");
      }
    }
  });
});
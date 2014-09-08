$(document).ready(function() {
  var Board = new TTT.Board();
  
  
  var txt2 = $("<p></p>").text(Board.player + ", place mark");
  $("body").append(txt2)
  
  $("li").on("click", function(event) {
    if (this.className == "empty") {
      var index = $(this).index()
      var xCoord = index % 3;
      var yCoord = Math.floor(index / 3);
      this.innerHTML = Board.player;
	  
	  switch(Board.player) {
	      case "X":
	          $(this).css("background-color", "#FF8566")
	          break;
	      case "O":
			  $(this).css("background-color", "#99CCFF")
	          break;
	  }
	  
      Board.placeMark(xCoord, yCoord);
	  
	  $("p").html(Board.player + ", place your mark")
      $(this).removeClass("empty");
	  
	  

      if (Board.winner()) {
        for (var i = 0; i < 9; i++) {
          $($("li")[i]).removeClass("empty");
        }
        
		$("p").html(Board.winner() + " wins!")
      }
    }
  });
});
$(() => {
////////////////// MODAL //////////////////
  //Grabbing Elements
const $openBtn = $('#openModal');
const $modal = $('#modal');
const $closeBtn = $('#close');

//Event Handlers
const openModal = () => {
  $modal.css('display', 'block');
}
const closeModal = () => {
  $modal.css('display', 'none');
}

//Event Listeners
$openBtn.on('click', openModal);
$closeBtn.on('click', closeModal);

////////////////// Create Board //////////////////

class Game {
  constructor(selector){
    this.selector = selector;
    this.rows = 6;
    this.cols = 7;
    this.board();
  }
  //create the board
  board(){
    //jquery object board equals the selector
    const $board = $(this.selector);
    // console.log($board);
    // console.log(this.selector);
    //loop to create the 6 rows from above
    for (let row = 0; row<this.rows; row++) {
      //jquery object $row that's a div with a class "row"
      const $row = $("<div>").addClass("row").attr("data-row", row)
      // console.log($row);
      //loop to create the 7 columns from above
      for(let col = 0; col<this.cols; col++) {
        //jquery object $col that's a div with a class "col"
        const $col = $("<div>").addClass("col").attr("data-col", col).attr("data-row", row)
        // console.log($col);
        //append the columns to the rows to make a grid
        $row.append($col)
      }//end col loop
      //append my grid to the board... not sure if necessary?
      $board.append($row)
    }//end row loop
    //append my board to the html body
    $("body").append($board)

//////////////// Event Listeners ///////////////
//alternatly change color of background on the divs clicked, after each click, check for a win

    // define alternate
    let alternate = true;
    //when you click on a specific div, an event takes place
    $(".col").on("click", function(event) {
    // console.log($(event.currentTarget).attr("data-col"));
    // console.log($(event.currentTarget).attr("data-row"));
      //if the variable returns true
      if (alternate === true) {
        //playerBlue is a clicked Blue div
        const $playerBlue = $(event.currentTarget).css("background-color", "#64748c");
        alternate = false;
        console.log($playerBlue.attr("data-col"));
        console.log($playerBlue.attr("data-row"));
      } else {
        const $playerRed = $(event.currentTarget).css("background-color", "#fc6e4b");
        alternate = true
        console.log($playerRed.attr("data-col"));
        console.log($playerRed.attr("data-row"));
      }//end else

//////////////// Check for a Winner ///////////////
// check all viable horizonal segments FOR THE WIN. Return the winner OR
// check all viable vertical segments FOR THE WIN. Return the winner OR keep playing.

    })//end on click function
  }//end board()


///////////// end class below //////////////
}//end Class
const connect4 = new Game("#board")

})//endpage

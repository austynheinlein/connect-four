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
    this.checkWin();
  }
  //create the board
  board(){
    //jquery object board equals the selector
    const $board = $(this.selector);
    console.log($board);
    console.log(this.selector);
    //loop to create the 6 rows from above
    for (let row = 0; row<this.rows; row++) {
      //jquery object $row that's a div with a class "row"
      const $row = $("<div>").addClass("row").attr("data-row", row)
      // console.log($row);
      //loop to create the 7 columns from above
      for(let col = 0; col<this.cols; col++) {
        //jquery object $col that's a div with a class "col"
        const $col = $("<div>").addClass("col").attr("data-col", col)
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
    // define alternate
    let alternate = true;
    //when you click on a specific div, an event takes place
    $(".col").on("click", function(event) {
    console.log(event.currentTarget);

      //if the variable returns true
      if (alternate === true) {
        const playerBlue = $(event.currentTarget).css("background-color", "#64748c");
        alternate = false;
      } else {
        const playerRed = $(event.currentTarget).css("background-color", "#fc6e4b");
        alternate = true
      }//end else
      checkWin()
    })//end on click function
  }//end board()
//////////////// Check for a Winner ///////////////
  checkWin() {
      fourHorizontal();
      fourVertical();

    //checking for four same colored circles in horizontal line
    const fourHorizontal(){

    }//end fourHorizontal()

    //checking for four same colored circles in vertical line
    const fourVertical(){

    }//end fourVertical()
  }//end checkWin

///////////// end class below //////////////
}//end Class
const connect4 = new Game("#board")

})//endpage


  ///////////** event listeners **////////////

    // //define findEmptyCircle as a function
    // function findEmptyCircle(column) {
    //   //grab all empty circles in the column selected
    //   //hey jQuery, collect ALL the columns that have the same attr data-column equal to the column index passed in.
    //   const circles = $(`.column[data-column="${column}"]`)
    //   //now i have circle indexes, need to loop them starting at the bottom until finding an empty circle
    //   //start at end of index, circles.length as long as i is greater or equal to 0, subtract 1.
    //   for (let i=circles.length; i>=0; i--){
    //   //get jQuery representation of circle
    //   const $circle = $(circles[i])
    //     if (true) {
    //       return $circle;
    //     }
    //   }
    //   return null;
    // }

    // $grid.on('click', '.column', function() {
    //   const column = $(this).data("column")
    //   const $emptyCircle = findEmptyCircle(column)
    //   $emptyCircle.addClass("player1")
    // })//grid on click end

$(() => {

////////////////// Create Board //////////////////
//create the divs that will make up my board
  //jquery object board that's a div with a class "board"
  const $board = $("<div>").addClass("board")
  //loop to create 6 rows
  for (let row = 0; row<6; row++) {
    //jquery object $row that's a div with a class "row"
    const $row = $("<div>").addClass("row").attr("data-row", row)
    //loop to create 6 columns
    for(let col = 0; col<7; col++) {
      //jquery object $col that's a div with a class "col"
      const $col = $("<div>").addClass("col").attr("data-col", col)
      //append the columns to the rows to make a grid
      $row.append($col)
    }//end col loop
    //append my grid to the board... not sure if necessary?
    $board.append($row)
  }//end row loop
  //append my board to the html body
  $("body").append($board)

//////////////// Event Listeners ///////////////
  //when i click on any divs in the board, the first empty circle of the column clicked, change bg color.
  //i need the column index of the currentTarget??
  //i need to find the first empty circle of that column
  //change that circle bg color
  //the color needs to alternate between grey and orange with each click
  //there needs to be a winCheck after each click
  //winCheck for 4 of same color vertical, horizontal and diagonals
  //if winner, disable click function and alert winner
  //reset game button


    let alternate = true;
    $(".col").on("click", function(event) {
    //   console.log(event.currentTarget);
      if (alternate === true) {
        $(event.currentTarget).css("background-color", "#64748c");
        alternate = false;
      } else {
        $(event.currentTarget).css("background-color", "#fc6e4b");
        alternate = true
      }//end else
    })//end on click function





})//endpage



// //create a class for the game like the alien attack game
// class Game {
//   //pass in a selector (when theGame initializes, this all runs/get created... )
//   constructor(selector) {
//     //set 6 rows
//     //set 7 columns to be in the rows
//     //create the "make a grid" function
//     this.selector = selector;
//     this.ROWS = 6;
//     this.COLUMNS = 7;
//     this.generateGrid()
//     // this.eventListeners()
//   }
// ///////////** add functions **//////////////
//   generateGrid() {
//     // create the grid - function (building up a bunch of divs)
//     //creates div for connect4
//     const $grid = $(this.selector)
//     //generate rows with for loops
//     for (let row=0; row<this.ROWS; row++){
//     //create jquery object with class and "data-row" attr and pass in the row index 0-5
//       const $row = $("<div>").addClass("row").attr("data-row", row)
//         for (let column=0; column<this.COLUMNS; column++){
//         //create jquery object with class column empty(to use later) and "data-column" attr and pass in the column index 0-6
//           const $column = $("<div>").addClass("column empty").attr("data-column", column)
//           //append columns to the rows
//           $row.append($column)
//         } // columns for loop end.
//           //nest the rows inside the grid
//           $grid.append($row);
  //   }//rows for loop end
  // }//generateGrid end

  ///////////** event listeners **////////////

  // .data() ->Store arbitrary data associated with the matched elements or return the value at the named data store for the first element in the set of matched elements.

   // eventListeners(){
   //  const $grid = $(this.selector)
    // console.log($grid);
   //  //define findEmptyCircle as a function
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


 // }//class end
 // initializes Connect4 with name connect4. passes in selector "#connect4"
    // const connect4 = new Game('#connect4')
    // //calling generateGrid function.
    // connect4.generateGrid()

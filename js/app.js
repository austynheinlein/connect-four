$(() => {

//create a class for the game like the alien attack game
class Game {
  //pass in a selector (when theGame initializes, this all runs/get created... )
  constructor(selector) {
    //set 6 rows
    //set 7 columns to be in the rows
    //create the "make a grid" function
    this.selector = selector;
    this.ROWS = 6;
    this.COLUMNS = 7;
    this.generateGrid()
    // this.eventListeners()
  }
///////////** add functions **//////////////
  generateGrid() {
    // create the grid - function (building up a bunch of divs)
    //creates div for connect4
    const $grid = $(this.selector)
    //generate rows with for loops
    for (let row=0; row<this.ROWS; row++){
    //create jquery object with class and "data-row" attr and pass in the row index 0-5
      const $row = $("<div>").addClass("row").attr("data-row", row)
        for (let column=0; column<this.COLUMNS; column++){
        //create jquery object with class column empty(to use later) and "data-column" attr and pass in the column index 0-6
          const $column = $("<div>").addClass("column empty").attr("data-column", column)
          //append columns to the rows
          $row.append($column)
        } // columns for loop end.
          //nest the rows inside the grid
          $grid.append($row);
    }//rows for loop end
  }//generateGrid end

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


 }//class end
 // initializes Connect4 with name connect4. passes in selector "#connect4"
    const connect4 = new Game('#connect4')
    //calling generateGrid function.
    connect4.generateGrid()








})//endpage

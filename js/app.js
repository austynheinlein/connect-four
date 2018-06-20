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
    //define alternate
    let alternate = true;
    //when you click on a specific div, an event takes place
    $(".col").on("click", function(event) {
    console.log(event.currentTarget);

      //if the variable returns true
      if (alternate === true) {
        //div turns slate blue
        // $(event.currentTarget).css("background-color", "#64748c");
        $(event.currentTarget).css("background-color", "#64748c");
        alternate = false;
      } else {
        //div turns redorange
        // $(event.currentTarget).css("background-color", "#fc6e4b");
        $(event.currentTarget).css("background-color", "#fc6e4b");
        alternate = true
      }//end else
    })//end on click function

//////////////// Check for Win ///////////////
//if four divs of the same background color are touching, that color wins.
//check for this between each click.
//if true, alert




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

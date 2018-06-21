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
    this.ROWS = 6;
    this.COLS = 7;
    this.board();
    this.boardData = [
      [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined, undefined, undefined]
    ]
  }

  //create the board
  board(){
    //jquery object board equals the selector
    const $board = $(this.selector);
    // console.log($board);
    // console.log(this.selector);
    //loop to create the 6 rows from above
    for (let row = 0; row<this.ROWS; row++) {
      //jquery object $row that's a div with a class "row"
      const $row = $("<div>").addClass("row").attr("data-row", row)
      // console.log($row);
      //loop to create the 7 columns from above
      for(let col = 0; col<this.COLS; col++) {
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
        const $playerBlue = $(event.currentTarget).addClass("Blue").attr("play","blue")
        alternate = false;
        console.log($playerBlue.attr("data-row"), $playerBlue.attr("data-col"), $playerBlue.attr("play"));
        connect4.boardData[$playerBlue.attr("data-row")][$playerBlue.attr("data-col")] = $playerBlue.attr("play")
        console.log(connect4.boardData);
        checkWinVertical()
      } else {
        const $playerRed = $(event.currentTarget).addClass("Red").attr("play","red")
        alternate = true
        console.log($playerRed.attr("data-row"),$playerRed.attr("data-col"), $playerRed.attr("play"));
        connect4.boardData[$playerRed.attr("data-row")][$playerRed.attr("data-col")] = $playerRed.attr("play")
        console.log(connect4.boardData);
        checkWinVertical()
      }//end else

    })//end on click function
}//end board()
//////////////// Check for a Winner ///////////////
// check all viable horizonal segments FOR THE WIN. Return the winner OR
// check all viable vertical segments FOR THE WIN. Return the winner OR keep playing.



///////////// end class below //////////////
}//end Class
const connect4 = new Game("#board")

const checkWinVertical = () => {
//checking the array for 4 "blues" in a row
/////////////column index 0//////////////////////
  if (
      connect4.boardData[0][0] !== undefined &&
      connect4.boardData[0][0] ===
      connect4.boardData[1][0] &&
      connect4.boardData[0][0] ===
      connect4.boardData[2][0] &&
      connect4.boardData[0][0] ===
      connect4.boardData[3][0]){
    alert("winner!");
    console.log("winner!");
  }else if (
      connect4.boardData[1][0] !== undefined &&
      connect4.boardData[1][0] ===
      connect4.boardData[2][0] &&
      connect4.boardData[1][0] ===
      connect4.boardData[3][0] &&
      connect4.boardData[1][0] ===
      connect4.boardData[4][0]) {
    alert("winner!")
    console.log("winner!");
  }else if (
      connect4.boardData[2][0] !== undefined &&
      connect4.boardData[2][0] ===
      connect4.boardData[3][0] &&
      connect4.boardData[2][0] ===
      connect4.boardData[4][0] &&
      connect4.boardData[2][0] ===
      connect4.boardData[5][0]) {
    alert("winner!")
    console.log("winner!");
  }else if (
      connect4.boardData[0][1] !== undefined &&
      connect4.boardData[0][1] ===
      connect4.boardData[1][1] &&
      connect4.boardData[0][1] ===
      connect4.boardData[2][1] &&
      connect4.boardData[0][1] ===
      connect4.boardData[3][1]) {
    alert("winner!")
    console.log("winner!");
  }else if (
      connect4.boardData[1][1] !== undefined &&
      connect4.boardData[1][1] ===
      connect4.boardData[2][1] &&
      connect4.boardData[1][1] ===
      connect4.boardData[3][1] &&
      connect4.boardData[1][1] ===
      connect4.boardData[4][1]) {
    alert("winner!")
    console.log("winner!");
  }else if (
      connect4.boardData[2][1] !== undefined &&
      connect4.boardData[2][1] ===
      connect4.boardData[3][1] &&
      connect4.boardData[2][1] ===
      connect4.boardData[4][1] &&
      connect4.boardData[2][1] ===
      connect4.boardData[5][1]) {
    alert("winner!")
    console.log("winner!");
  }else if (
      connect4.boardData[0][2] !== undefined &&
      connect4.boardData[0][2] ===
      connect4.boardData[1][2] &&
      connect4.boardData[0][2] ===
      connect4.boardData[2][2] &&
      connect4.boardData[0][2] ===
      connect4.boardData[3][2]) {
    alert("winner!")
    console.log("winner!");
  }else if (
      connect4.boardData[1][2] !== undefined &&
      connect4.boardData[1][2] ===
      connect4.boardData[2][2] &&
      connect4.boardData[1][2] ===
      connect4.boardData[3][2] &&
      connect4.boardData[1][2] ===
      connect4.boardData[4][2]) {
    alert("winner!")
    console.log("winner!");
  }else if (
      connect4.boardData[2][2] !== undefined &&
      connect4.boardData[2][2] ===
      connect4.boardData[3][2] &&
      connect4.boardData[2][2] ===
      connect4.boardData[4][2] &&
      connect4.boardData[2][2] ===
      connect4.boardData[5][2]) {
    alert("winner!")
    console.log("winner!");
  }else if (
      connect4.boardData[0][3] !== undefined &&
      connect4.boardData[0][3] ===
      connect4.boardData[1][3] &&
      connect4.boardData[0][3] ===
      connect4.boardData[2][3] &&
      connect4.boardData[0][3] ===
      connect4.boardData[3][3]) {
    alert("winner!")
    console.log("winner!");
  }else if (
      connect4.boardData[1][3] !== undefined &&
      connect4.boardData[1][3] ===
      connect4.boardData[2][3] &&
      connect4.boardData[1][3] ===
      connect4.boardData[3][3] &&
      connect4.boardData[1][3] ===
      connect4.boardData[4][3]) {
    alert("winner!")
    console.log("winner!");
  }else if (
      connect4.boardData[2][3] !== undefined &&
      connect4.boardData[2][3] ===
      connect4.boardData[3][3] &&
      connect4.boardData[2][3] ===
      connect4.boardData[4][3] &&
      connect4.boardData[2][3] ===
      connect4.boardData[5][3]) {
    alert("winner!")
    console.log("winner!");
  }else if (
      connect4.boardData[0][4] !== undefined &&
      connect4.boardData[0][4] ===
      connect4.boardData[1][4] &&
      connect4.boardData[0][4] ===
      connect4.boardData[2][4] &&
      connect4.boardData[0][4] ===
      connect4.boardData[3][4]) {
    alert("winner!")
    console.log("winner!");
  }else if (
      connect4.boardData[1][4] !== undefined &&
      connect4.boardData[1][4] ===
      connect4.boardData[2][4] &&
      connect4.boardData[1][4] ===
      connect4.boardData[3][4] &&
      connect4.boardData[1][4] ===
      connect4.boardData[4][4]) {
    alert("winner!")
    console.log("winner!");
  }else if (
      connect4.boardData[2][4] !== undefined &&
      connect4.boardData[2][4] ===
      connect4.boardData[3][4] &&
      connect4.boardData[2][4] ===
      connect4.boardData[4][4] &&
      connect4.boardData[2][4] ===
      connect4.boardData[5][4]) {
    alert("winner!")
    console.log("winner!");

  }else {
      null;
    }


  // }else if (
  //     connect4.boardData[2][0] ===
  //     connect4.boardData[3][0] &&
  //     connect4.boardData[2][0] ===
  //     connect4.boardData[4][0] &&
  //     connect4.boardData[2][0] ===
  //     connect4.boardData[5][0]){
  //   alert("winner!");
  // }else if (
  //     connect4.boardData[0][1] ===
  //     connect4.boardData[1][1] &&
  //     connect4.boardData[0][1] ===
  //     connect4.boardData[2][1] &&
  //     connect4.boardData[0][1] ===
  //     connect4.boardData[3][1]){
  //   alert("winner!");
  // }else if (
  //     connect4.boardData[1][1] ===
  //     connect4.boardData[2][1] &&
  //     connect4.boardData[1][1] ===
  //     connect4.boardData[3][1] &&
  //     connect4.boardData[1][1] ===
  //     connect4.boardData[4][1]){
  //  alert("winner!");
  // }else if (
  //     connect4.boardData[2][1] ===
  //     connect4.boardData[3][1] &&
  //     connect4.boardData[2][1] ===
  //     connect4.boardData[4][1] &&
  //     connect4.boardData[2][1] ===
  //     connect4.boardData[5][1]){
  //  alert("winner!");



  console.log("checking win");
  console.table(connect4.boardData);
}//end checkWinVerticals

})//endpage

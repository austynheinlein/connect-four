# Connect Four

Title: CONNECT FOUR
https://austynheinlein.github.io/
This game is developed for two players. 
The two players will alternate turns clicking on any circle in the grid. 
A click function alternates the background colors of the clicked circles, representing the two players.
The objective is for a player to connect 4 of their circles in a line. Players want to block their opponent from doing this. 

This game was built by creating a Class. 
The dataBoard property is equal to an array that held arrays inside of it. 
The nested arrays each contain 7 "undefined" strings to help me in my check win functions.

The board/grid was built with a for loop nested within a for loop to generate the rows and columns.
The rows and columns each have attributes that help me collect their index coordinates.
The alternating colors make this a two player game, this was created with an on click function that targeted the circle clicked on.

The check win functions check all viable horizontal and vertical segments and use if statements to compare these segments for a win. 
Currently, this game has a check win function for horizontal and vertical lines.
When a player does line up four of their circles next to eachother, an alert will display "Winner!".
A "Restart" button can be clicked after a player has won, to begin a new game. 
A "How to Play" button can be clicked to learn about the objective of the game. 

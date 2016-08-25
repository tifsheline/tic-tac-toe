//SELECTORS:
var $boxes = $('.box');
var $reset = $('#resetBtn');
var $box1 = $('#box1');
var $box2 = $('#box2');
var $box3 = $('#box3');
var $box4 = $('#box4');
var $box5 = $('#box5');
var $box6 = $('#box6');
var $box7 = $('#box7');
var $box8 = $('#box8');
var $box9 = $('#box9');

$boxes.text("");

$box1.on('click', function(){
  $box1.fadeIn("5000");
  $box1.text("X");
})

$box2.on('click', function(){
  $box2.fadeIn("5000");
  $box2.text("O");
})

$box3.on('click', function(){
  $box3.fadeIn("5000");
  $box3.text("X");
})

$box4.on('click', function(){
  $box4.fadeIn("5000");
  $box4.text("O");
})

$box5.on('click', function(){
  $box5.fadeIn("5000");
  $box5.text("X");
})

$box6.on('click', function(){
  $box6.fadeIn("5000");
  $box6.text("O");
})

$box7.on('click', function(){
  $box7.fadeIn("5000");
  $box7.text("O");
})

$box8.on('click', function(){
  $box8.fadeIn("5000");
  $box8.text("X");
})

$box9.on('click', function(){
  $box9.fadeIn("5000");
  $box9.text("X");
})












//Reset button:
$reset.on('click', function(){
  console.log("Reset Clicked!");
  $boxes.empty();
})
//FUNCTIONS:
// var player = true;
// function switchPlayers(){
//   if(player === true){
//     player = false;
//   } else {
//     player = true;
//   }
// }
//
// function markButton(whichButton){
//   if(player){
//     $(this).text("X");
//   } else {
//     $(this).text("O");
//   }
// };
//
// //EVENT LISTENERS:
// //Box contents:
// // $box1.text(function(){
// //   return X;
// // })
// // $box1.css(["color"]);
//
//  $boxes.on('click', function(){
//    console.log("Box clicked!")
//    markButton()
//    switchPlayers()
//  });
//
//

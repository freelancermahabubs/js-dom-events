// option 1 directly set on the html element
// {/* <button onclick="console.log(65)">Another Button</button>  */}

console.log("This is Separate JS File");
// option 02: add onclick function on the html element
function makeRed(){
  document.body.style.backgroundColor = "red";
 }
  // option 03
  const makeBlueButton = document.getElementById('make-blue');
  makeBlueButton.onclick = makeBlue;

  function makeBlue(){
    document.body.style.backgroundColor = 'blue';
  }

  // option 03 another
  const makeTomatoButton = document.getElementById('make-tomato');
  makeTomatoButton.onclick = function makeTomato(){
    document.body.style.backgroundColor = 'tomato'
  }

  // <!-- option 04 -->
  // <button id="make-pink">Make Pink</button>
  // option number 04
  const pinkButton = document.getElementById('make-pink');
  pinkButton.addEventListener('click', makePink)
  function makePink(){
    document.body.style.backgroundColor = 'pink'
  }

  // <!-- option another 04 -->
  // <button id="make-green">Make Green</button>

  const makeGreenButton = document.getElementById('make-green');
  makeGreenButton.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
  });

  // option 04 final 
  <button id="make-goldenrod">Make GoldenRod</button>
  document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
  })
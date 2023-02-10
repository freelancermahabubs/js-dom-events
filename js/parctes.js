// option 1 directly set on the html element
// {/* <button onclick="console.log(45)">Red Me</button> */}
// option 02: add onclick function on the html element
// Important [we will use this sometimes]
// {/* <button onclick="makeRed()">Make Red</button> */}
function makeRed(){
  document.body.style.backgroundColor = 'red';
}


   // option number 03
   const makeBlueButton = document.getElementById('make-blue');
   makeBlueButton.onclick = makeBlue;
   function makeBlue(){
     document.body.style.backgroundColor = 'blue'
   }
   // option 03 same
   const makePurpleButton = document.getElementById('make-purple');
   makePurpleButton.onclick = makePurple;
   function makePurple(){
     document.body.style.backgroundColor = 'purple';
   }

   // option 03 another 
   const makeTomatoButton = document.getElementById('make-tomato');
   makeTomatoButton.onclick = function makeTomato(){
    document.body.style.backgroundColor = 'tomato'
   }

  //  <!-- option 04 -->
  //  <button id="make-pink">Make Pink</button>
  //  option number 04
   const makePinkButton = document.getElementById('make-pink');
    makePinkButton.addEventListener('click', makePink );
    function makePink(){
      document.body.style.backgroundColor = 'pink'
    }

    // <!-- option 04 another -->
    // <button id="make-green">Make Green</button>
    const makeGreenButton = document.getElementById('make-green');
    makeGreenButton.addEventListener('click', function makeGreen(){
      document.body.style.backgroundColor = 'green';
    })

    // Important [we will use this sometimes]
    // <!-- option 04 final -->
    // <button id="make-goldenrod">Make GoldenRod</button>
    document.getElementById('make-goldenrod').addEventListener('click', function(){
      document.body.style.backgroundColor = 'goldenrod';
    })


      // option 01

      // <h3 id="handler-status">Mahaub</h3>
      // <button onclick="handelOnClick()">Handel Event Add onClick Function</button>
      function handelOnClick(){
        const handlerStatus = document.getElementById('handler-status');
        handlerStatus.innerText = "Mahaub Alom"
      }

       // option 02
      //  <button id="event-listener">Handle event by addEventListener</button>
    document.getElementById('event-listener').addEventListener('click', function(){
      const handlerStatus = document.getElementById('handler-status');
      handlerStatus.innerText = "Text Update by add event listener button"
    })
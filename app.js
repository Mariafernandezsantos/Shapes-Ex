const triangle = disguiseTriangle;
const square = disguiseSquare;
const round = disguiseRound;
const reset = buttonReset;


function disguiseTriangle() {
  let triangle = document.getElementById('triangle');
  triangle.style.top = '-20px'
  triangle.style.display = 'none';
}


function disguiseSquare() {
  let square = document.getElementById('square');
  square.style.top = '-20px'
  square.style.display = 'none';
}

function disguiseRound() {
    let round = document.getElementById('round');
    round.style.top = '-20px'
    round.style.display = 'none';
}

buttonReset.addEventListener('click',resetAnimation);

function buttonReset(){
    round.style.top = roundInitialtop;
    round.style.display = 'block';
}

let buttonReset = document.getElementById('buttonReset');
buttonReset.addEventListener('click', function(){
    console.log('se ha reseteado la animacion');
})
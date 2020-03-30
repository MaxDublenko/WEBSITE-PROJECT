//If quiz is submitted

document.getElementById('submit').addEventListener('click', submithandler)

let q1a1val = '';
let q1a2val = '';
let q1a3val = '';
let q2a1val = '';
let q2a2val = '';
let q2a3val = '';
let q3a1val = '';
let q3a2val = '';
let q3a3val = '';

let checkarray = [];
let truearray = [];

let correctanswers = 0;

let amountofcheckedanswers = [];
let amountofcheckedanswerslength = [];

function submithandler() {
  //q1
  q1a1val =  document.getElementById('q1a1').checked;
  q1a2val =  document.getElementById('q1a2').checked;
  q1a3val =  document.getElementById('q1a3').checked;
  //q2
  q2a1val =  document.getElementById('q2a1').checked;
  q2a2val =  document.getElementById('q2a2').checked;
  q2a3val =  document.getElementById('q2a3').checked;
  //q3
  q3a1val =  document.getElementById('q3a1').checked;
  q3a2val =  document.getElementById('q3a2').checked;
  q3a3val =  document.getElementById('q3a3').checked;

  //Strange method I'm trying for fun to check if answers are correct

  checkarray = [q1a3val, q2a1val, q3a2val]

  //if answer is correct it will go into truearray

  for (i=0; i<checkarray.length; i++) {
    if (checkarray[i] == true && (checkarray[i] == (q1a3val || q2a1val || q3a2val))) {
      truearray.push(checkarray[i])
    }
  }

  //checking how many answers are correct

  amountofcheckedanswers = [q1a1val, q1a2val, q1a3val, q2a1val, q2a2val, q2a3val, q3a1val, q3a2val, q3a3val]

  for (j=0; j<amountofcheckedanswers.length; j++) {
    if (amountofcheckedanswers[j] == true) {
      amountofcheckedanswerslength.push(amountofcheckedanswers[j])
    }
  }

  // and that there is only one answer per question

  if (amountofcheckedanswerslength.length > 3) {
    alert('Too many answers')
  } else {
    correctanswers = truearray.length
    document.getElementById('result').innerHTML = 'Your score is: ' + correctanswers + '/3';
  }



}

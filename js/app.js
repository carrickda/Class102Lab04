'use strict';
console. log('Hello World!');

let LeaguePlayer = prompt('What is your name?');
alert('Hello,  ' + LeaguePlayer + ' Click OK to proceed');

function playLeague(){
  //you have errors on line 7 because your still not using your parameters.
  let role = prompt('Do you play League?');
  console. log('prompt question', role);
  let answer;
  if (role === 'no'){
    //on line 12 we should use the tripe equals for a strict data type check. ===
    answer=('You should play it is fun. Click OK to proceed.');
    alert(answer);
  } else {
    // normally we lowerCase the first letter of our variables.
    let champion = prompt('Which role?');
  }
}
playLeague();
alert('I play Support and Jungle');


let worldsPizza = function () {
  let count = prompt ('How many pizzas would you like to eat while watching Worlds?');
  //remove the comma to a dot operator the '.'
  console. log('prompt question', count);

  while (count === '' || isNaN(count)) {

    count = prompt('Please enter a number');
  }

  console. log('howMany():', Number(count));
  return Number(count);
};
worldsPizza ();


function getItem() {

  let order = prompt('which topping do you like, Pepperoni or Sausage?');
  let item;

  while (order !== 'Pepperoni' && order !== 'Sausage') {
    order = prompt('Please enter Pepperoni or Sausage');
  }
  if (order === 'Pepperoni') {
    item = '<img src="images/pepperoni.jpg">';
  }
  else if (order === 'Sausage') {
    item = '<img src="images/Sausage.jpg">';
  }
  console.log('getItem():', item);
  return item;
}
getItem ();

//your not calling this function either.
function showOrder() {

  let item = getItem();

  //we also lowerCase our function names
  let total = worldsPizza();
  let result = '';
  for (let i = 0; i < total; i++) {
    result = result + '<p>Model #' + i + ' ' + item + '<p>';
  }

  console.log('showOrder() result: ', result);
  // console.log('showOrder() result: ', result);
  return result;
}
showOrder();


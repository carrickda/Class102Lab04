
'use strict';
console. log("Hello World!");

var LeaguePlayer = prompt('What is your name?');
alert('Hello,  ' + LeaguePlayer + ' Click OK to proceed');

function playLeague(msg, target){
   var role = prompt('Do you play League?');
   console. log('prompt question', role);

   var answer;

if (role == 'no'){
    answer=('You should play it is fun. Click OK to proceed.');
    alert(answer);
} else {
    prompt('Which role?');
} 
}    

playLeague('Hello', 1);

alert('I play Support and Jungle');


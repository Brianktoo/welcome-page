alert('welcome to  Brianktoo tech');
let name= prompt('Enter your first name to continue');
let name1Char = name.slice(0,1);
let name1CharUpper = name1Char.toUpperCase();
let nameRestChar = name.slice(1,name.lenght);
let nameRestCharUpper =nameRestChar.toLowerCase();
let finalName = name1CharUpper + nameRestCharUpper;

document.getElementById('welcome').innerHTML = "welcome " + finalName;
document.getElementById('welcome').style.color ='grey';
document.getElementById('welcome').style.textAlign ='center';
document.getElementById('welcome').style.fontSize ='50px';
document.getElementById('welcome').style.backgroundColor = 'red';



//exeone

//day of the week
var today = new Date();
var day = today.getDay();
var dayList = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwarte', 'Piątek', 'Sobota'];
console.log("Today is " + dayList[day] + ".");

//time
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12)? " PM " : " AM ";
hour = (hour >= 12)? hour - 12 : hour;
if(hour===0 && prepand===" PM ")
{
	if(minute===0 && second===0)
	{
		hour = 12;
		prepand = " Noon ";
	} else
	{
		hour = 12;
		prepand = " PM ";
	}
}
if(hour===12 && prepand=== " AM ")
{
	if(minute===0 && second===0)
	{
		hour = 12;
		prepand = "Midnight";
	} else
	{
		hour = 12;
		prepand = " AM ";
	}
}

document.getElementById("exeone").innerHTML = "Today is " + dayList[day] + ".<br>" + "The time is: " + hour + ":" + minute + ":" + second + " " + prepand;

//exethree

var date = today.getDate();
var month = today.getMonth();
var year = today.getFullYear();
month += 1;
if(month===13)
{
	month = 1;
}
document.getElementById("exethree").innerHTML = date + "-" + month + "-" + year;

//exefour

var a = 5;
var b = 6;
var c = 7;

var obwod = (a+b+c)/2
var powierzchnia = Math.sqrt(obwod*(obwod - a)*(obwod - b)*(obwod - c));
document.getElementById("exefour").innerHTML = "Trójkąt o bokach " + a + ", " + b + ", " + c + " ma pole równe " + powierzchnia + ".";

//exefive

function animateString(id){
	var element = document.getElementById(id);
	var textNode = element.childNodes[0];
	var text = textNode.data;

	setInterval(function ()
	{
		text = text[text.length - 1] + text.substring(0, text.length - 1);
		textNode.data = text;
	}, 100);
}

//exesix

function checkYear()
{
year = window.prompt("Input a Year: ");
x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
x ? (document.getElementById("exesix").innerHTML = year + " is a leap year.") : (document.getElementById("exesix").innerHTML = year + " isn't a leap Year.")
};

//exeseven

console.log("=============");
console.log("Ćwiczenie 7");
console.log("=============");

for(var year = 2014; year <= 2050; year++)
{
	var d = new Date(year, 0, 1);
	var day = d.getDay()
	if(day === 0)
	{
	console.log("1 stycznia " + year + " roku to była niedziela");
	console.log("=============");
	}
}

//exeeight

function randomInteger(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function zgadywanka()
{
	var losowaLiczba = randomInteger(1, 10);
	console.log("Wylosowana liczba to " + losowaLiczba);
	var zgaduje = window.prompt("Zgadnij liczbę od 1 do 10: ");
	if(zgaduje == losowaLiczba) {
		alert("Udało się!")
		var zakonczenie = ", brawo!";
	} else {
		alert("Spróbuj jeszcze raz");
		var zakonczenie = ", może uda się następnym razem.";
	}
	document.getElementById("exeeight").innerHTML = "Wylosowana liczba to " + losowaLiczba + ", ty wybrałeś " + zgaduje + zakonczenie;
};

//exenine


// import {without} from 'lodash';


var head = document.getElementById("head");
var howdy = document.getElementById("howdy");
var opacity = 0;
var intervalID = 0;

function click1()
{
	if(head.classList.value === "aayush")
	{
		head.classList.remove("aayush");
	}
	else
	{
		head.classList.add("aayush");
	}
}
function click2()
{
	if(howdy.classList.value === "howdy1")
	{
		howdy.classList.remove("howdy1");
	}
	else
	{
		howdy.classList.add("howdy1");

	}
}


function fadeOut()
{
	intervalID = setInterval(hide, 20);
}

function fadeIn()
{
	intervalID = setInterval(show, 20);
}

function hide()
{
	opacity = Number(window.getComputedStyle(howdy).getPropertyValue("opacity"));

	if (opacity > 0.5)
	{
		opacity = opacity - 0.01;
		howdy.style.opacity = opacity;
	}
	else
	{
		clearInterval(intervalID);
	}

}

function show()
{
	opacity = Number(window.getComputedStyle(howdy).getPropertyValue("opacity"));

	if (opacity < 1)
	{
		opacity = opacity + 0.01;
		howdy.style.opacity = opacity;
	}
	else
	{
		clearInterval(intervalID);
	}

}


head.addEventListener("click", click1);
howdy.addEventListener("click", click2);
howdy.addEventListener("mouseenter", fadeOut);
howdy.addEventListener("mouseleave", fadeIn);

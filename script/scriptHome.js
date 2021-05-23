
var head = document.getElementById("head");
var opacity = 0;
var howdy = document.getElementById("howdy");
var intervalID = 0;


function click()
{
	if(head.classList.value === "aayush")
	{
		head.classList.remove("aayush");
	}
	else
	{
		window.location.href = 'index.html';
		head.classList.add("aayush");

	}
}

function fadeOut()
{
	intervalID = setInterval(hide, 100);
}

function fadeIn()
{
	intervalID = setInterval(show, 100);
}

function hide()
{
	opacity = Number(window.getComputedStyle(howdy).getPropertyValue("opacity"));
	if(opacity > 0.5)
	{
		opacity = opacity - 0.1;
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
	if(opacity < 1)
	{
		opacity = opacity + 0.1;
		howdy.style.opacity = opacity;
	}
	else 
	{
		clearInterval(intervalID);
	}
}




head.addEventListener("click", click);
howdy.addEventListener("mouseenter", fadeOut);
howdy.addEventListener("mouseleave", fadeIn);





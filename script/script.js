

console.log(2);
var head = document.getElementById("head");


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

head.addEventListener("click", click);
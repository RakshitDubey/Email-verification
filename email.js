let check = document.querySelector(".check");
let password = document.querySelector(".password");
let text = document.querySelector(".text");

let regex = /^[^]+\@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;

check.addEventListener("click",()=>{
	if(password.value == ""){
		text.innerText = "Please Enter An Email Address";
		text.style.color = "#000";
	}
	else if(password.value.match(regex)){
		text.innerText = "Congrats! You Enter A Valid Email Address";
		text.style.color = "rgba(4,125,9,1)";
	}
	else
		{
		text.innerText = "Sorry! Your Email Address is Invalid";
		text.style.color = "rgba(255,0,0,1)";
		}
});
var hamBurger1 = document.querySelector("#hamburger-box .box1");
var hamBurger2 = document.querySelector("#hamburger-box .box2");
var hamBurger3 = document.querySelector("#hamburger-box .box3");
var header = document.querySelector("#header");
var hamBurgerBox = document.querySelector("#hamburger-box");
hamBurgerBox.addEventListener("click", headerToggler);
var toggle = 1;
function headerToggler(){
	if(toggle == 1){
		header.style.left = "0%";
		toggle = 0;
		console.log("header show");
		hamBurgerBox.style.left = "85px";
		hamBurger1.style.background = "var(--theme-color-4)";
		hamBurger2.style.background = "var(--theme-color-4)";
		hamBurger3.style.background = "var(--theme-color-4)";
		hamBurger1.style.transform = "rotate(45deg)";
		hamBurger3.style.transform = "rotate(-45deg)";
		hamBurger2.style.width = "0px";
	}
	else{
		header.style.left = "-200%";
		toggle = 1;
		console.log("header hide");
		hamBurgerBox.style.left = "45px";
		hamBurger1.style.background = "var(--theme-color-3)";
		hamBurger2.style.background = "var(--theme-color-3)";
		hamBurger3.style.background = "var(--theme-color-3)";
		hamBurger1.style.transform = "rotate(0deg)";
		hamBurger3.style.transform = "rotate(0deg)";
		hamBurger2.style.width = "30px";
		
	}
}




var keywords = [" Programmer", " Designer", " Developer"];
var word = document.querySelector(".auto-type");
var hide = 1, j = 0, k = 0;
var i = 0, a = 0;

setInterval(type, 200);

function type(){
	if(k == 3){
		k = 0;
	}
	var keyword = keywords[k];
	var len = keyword.length;
	
	if(hide == 1){
		len = len - i;
		if(len == -1){
			hide = 0;
			i = 0;
			k = k + 1;
		}
		else{
			word.innerText = keyword.substr(0, len);
			i = i + 1;
		}
	}
	else{
		if(j == len + 1){
			hide = 1;
			j = 0;
		}
		else{
			word.innerText = keyword.substr(0, j);
			j = j + 1;
		}	
	}
}
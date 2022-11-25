/*Menu Hide By Tap Any Where Start*/
var a = document.querySelector("#home");
var b = document.querySelector("#about");
var c = document.querySelector("#services");
var d = document.querySelector("#projects");
var e = document.querySelector("#contact");

a.addEventListener("click", menuHide);
b.addEventListener("click", menuHide);
c.addEventListener("click", menuHide);
d.addEventListener("click", menuHide);
e.addEventListener("click", menuHide);
function menuHide(){
	navBar.style.right = "-100%";
	hamburger1.style.transform = "rotate(0deg)";
	hamburger1.style.background = "var(--theme-color-4)";
	hamburger3.style.transform = "rotate(0deg)";
	hamburger3.style.background = "var(--theme-color-4)";
	hamburger2.style.width = "100%";
	click = true;
}
/*Menu Hide By Tap Any Where End*/

/*----------------------------------------------------------------------------------------*/

/*Hamburger Start*/
var hamburgerBox = document.querySelector("#header .hamburger-box");
var hamburger1 = document.querySelector("#header .box1");
var hamburger2 = document.querySelector("#header .box2");
var hamburger3 = document.querySelector("#header .box3");
var navBar = document.querySelector("#header .nav-bar");

hamburgerBox.addEventListener("click", hamburgerToggler);
var click = true;
function hamburgerToggler(){
	if(click){
		navBar.style.right = "2%";
		hamburger1.style.transform = "rotate(45deg)";
		hamburger1.style.background = "var(--theme-color-1)";
		hamburger3.style.transform = "rotate(-45deg)";
		hamburger3.style.background = "var(--theme-color-1)";
		hamburger2.style.width = "0px";
		click = false;
	}
	else{
		navBar.style.right = "-100%";
		hamburger1.style.transform = "rotate(0deg)";
		hamburger1.style.background = "var(--theme-color-4)";
		hamburger3.style.transform = "rotate(0deg)";
		hamburger3.style.background = "var(--theme-color-4)";
		hamburger2.style.width = "100%";
		click = true;
	}
}
/*Hamburger End*/

/*----------------------------------------------------------------------------------------*/

/*Auto Type Start*/

/*Auto Type End*/
var keyword = ["Designer", "Developer", "Programmer"];
//var keyword = "Programmer";
var editWord, len;
setInterval(autoType, 300);
var i = len, j = 1, k = 0;
function autoType(){
	len = keyword[k].length;
	if(i == 0){
		k = k + 1;
	}
	if(k > 2){
		k = 0;
	}
	if(i > -1){
		editWord = keyword[k].substr(0,i);
		document.querySelector("#home .auto-type").innerText = editWord;
		//console.log(editWord);
		//console.log(i);
		i--;
		j = 1;
	}
	else{
		if(j < len){			
			editWord = keyword[k].substr(0, j);
			document.querySelector("#home .auto-type").innerText = editWord;
			//console.log(editWord);
			//console.log(j);
			j++;
		}
		else{
			i = len;
		}
	}
	
}
/*
var len = keyword.length;
for(var i = len; i > -2; i--){
	if(i == -1){
		for(var j = 1;j < len + 1; j++){			
			backup = keyword.substr(0,j);
			console.log(backup);
		}
	}
	else{
		backup = keyword.substr(0,i);
		console.log(backup);
	}
}
/*Auto Type End*/
 var  grid = document.querySelectorAll("div.grid_12");

 var  bttnGrid = document.querySelectorAll("a.grid__button");
 var values = 1 ;
 var b = 0;

 function showGrid(){
 	values = 1;
 	if(values == 1 && b == 0 ){
 		grid[0].classList.add("disnone");
 		bttnGrid[0].style.background = "red";
 		values = 0; 
 		b = 1;
 	}

 	if(values == 1 && b == 1 ){
 		grid[0].classList.remove("disnone");
 		bttnGrid[0].style.background = "#0f0c";
 		b = 0;
 		values = 0;
 	}
 }
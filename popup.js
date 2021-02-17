		

	var formk = document.getElementById("elem_popup");
	let myForm = document.getElementById("myForm_popup");

	formk.onclick = function(event) {
	    event.preventDefault();
	    dfff();

		if(check == 4){
			myForm.submit();
	 	}
	 	 check = 0;
	}
	var order = 0;
	var inputCheck = document.querySelectorAll(".input_text");
	var textInputCheck = document.querySelectorAll("p.f-feedback__p-text");
	var maskMail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
	var maskText = /[^ ]/;

	var check = 0;  
	function dfff(){
		order = 0;
		 for(var i = 0;i < 4;i++){
		 		if(order == 3){
			 		if(inputCheck[order].value.match(maskMail)){

			 			inputCheck[order].classList.add("green");
			 			inputCheck[order].classList.add("text_visi");
			 			textInputCheck[order].classList.add("text_visi");
			 			check++; 
				 	}	
				 	else{
				 		inputCheck[order].classList.add("red");
				 		inputCheck[order].classList.remove("text_visi");
				 		textInputCheck[order].classList.add("visit");
				 		textInputCheck[order].classList.remove("text_visi");
				 		check = 0;
				 	}
			 	}
			 	else{
				 	if(inputCheck[order].value.match(maskText)){

				 		inputCheck[order].classList.add("green");
				 		inputCheck[order].classList.remove("red");
				 		textInputCheck[order].classList.add("text_visi");
				 		check++; 
				 	}
				 	else{
				 		inputCheck[order].classList.add("red");
				 		inputCheck[order].classList.remove("green");
				 		textInputCheck[order].classList.add("visit");
				 		textInputCheck[order].classList.remove("text_visi");
				 		check = 0;
				 	}
		 		}
		 	order++;
		 	
	  	}
	 	return order;
	}

function popup(){
	var popup = document.querySelectorAll(".popup");
	popup[0].classList.add("height");
}
function closer(){
	var rclose = document.querySelectorAll(".popup");
	rclose[0].classList.remove("height");
}

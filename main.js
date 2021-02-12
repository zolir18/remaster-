		

	var formk = document.getElementById("elem");
	let myForm = document.getElementById("myForm");

	// formk.onclick = function(event) {
	//     event.preventDefault();
	//     dfff();

	// 	if(check == 4){
	// 		myForm.submit();
	//  	}
	//  	 check = 0;
	// }
	var order = 0;
	var inputCheck = document.querySelectorAll("input.input_text");
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
			 			textInputCheck[order].classList.remove("visit");
			 			check++; 
				 	}	
				 	else{
				 		inputCheck[order].classList.add("red");
				 		inputCheck[order].classList.remove("green");
				 		textInputCheck[order].classList.add("visit");
				 		check = 0;
				 	}
			 	}
			 	else{
				 	if(inputCheck[order].value.match(maskText)){
				 		inputCheck[order].classList.add("green");
				 		textInputCheck[order].classList.remove("visit");
				 		check++; 
				 	}
				 	else{
				 		inputCheck[order].classList.add("red");
				 		inputCheck[order].classList.remove("green");
				 		textInputCheck[order].classList.add("visit");
				 		check = 0;
				 	}
		 		}
		 	order++;
		 	
	  	}
	  	return order;
	}
	function dfd(){
			alert("Fff");
		}

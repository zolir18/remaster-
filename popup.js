		

	var formk_popup = document.getElementById("elem_popup");
	let myForm_popup = document.getElementById("myForm_popup_popup");

	formk_popup.onclick = function(event) {
	    event.preventDefault();
	    popupShow();

		if(check == 4){
			myForm_popup.submit();
	 	}
	 	 check = 0;
	}
	var order = 0;
	var inputCheck_popup = document.querySelectorAll(".input_text_popup");
	var textinputCheck_popup = document.querySelectorAll("p.f-feedback__p-text--popup");
	var maskMail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
	var maskText = /[^ ]/;

	var check = 0;  
	function popupShow(){
		order = 0;
		 for(var i = 0;i < 4;i++){
		 		if(order == 3){
			 		if(inputCheck_popup[order].value.match(maskMail)){

			 			inputCheck_popup[order].classList.add("green");
			 			inputCheck_popup[order].classList.add("text_visi");
			 			textinputCheck_popup[order].classList.add("text_visi");
			 			check++; 
				 	}	
				 	else{
				 		inputCheck_popup[order].classList.add("red");
				 		inputCheck_popup[order].classList.remove("text_visi");
				 		textinputCheck_popup[order].classList.add("visit");
				 		textinputCheck_popup[order].classList.remove("text_visi");
				 		check = 0;
				 	}
			 	}
			 	else{
				 	if(inputCheck_popup[order].value.match(maskText)){

				 		inputCheck_popup[order].classList.add("green");
				 		inputCheck_popup[order].classList.remove("red");
				 		textinputCheck_popup[order].classList.add("text_visi");
				 		check++; 
				 	}
				 	else{
				 		inputCheck_popup[order].classList.add("red");
				 		inputCheck_popup[order].classList.remove("green");
				 		textinputCheck_popup[order].classList.add("visit");
				 		textinputCheck_popup[order].classList.remove("text_visi");
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

function display_word_selected(event){
	const pop_up_exist = document.getElementById("display_wrd_ext");
	console.log(!!pop_up_exist);
	if(!!pop_up_exist){
		document.body.removeChild(pop_up_exist);
	}
	const pop_up = document.createElement("div");
	pop_up.setAttribute("id","display_wrd_ext");
	const selected_text = window.getSelection().toString().trim();
    const style = `
		color:white;
		background:red;
		position: absolute;
		height: 22px;
		width: 22px;
		top: 523px;
		left: 786px;
    `;
    if(event.type == "mouseup" || event.type == "dbclick" || event.type == "dbclick"){
		  if(selected_text == ""){
			  console.log("empty text");
			  return 0;
		  }
		  if(pop_up.innerText != ""){
			  pop_up.innerText = " ";
		  }
		  pop_up.style.cssText = style;

		  pop_up.innerText = selected_text;
		  document.body.appendChild(pop_up);
	  }
}
document.addEventListener("mouseup", display_word_selected);

var Sb = document.querySelector("#subscribeB");  // submit button
Sb.addEventListener("click", pform ); 
var heading = document.querySelector("#myform"); // calling the heading h1
function pform() {// event 

	heading.innerHTML = "You have successfully Subscribe to receive email about Tourism Mauritius." ;
}



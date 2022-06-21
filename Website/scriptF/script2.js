var Sb1 = document.querySelector("#submit");  // submit button
Sb1.addEventListener("click", feedbackform ); 
var heading = document.querySelector("#myformfeed"); // calling the heading h1
function feedbackform() {// event 
	 /* var clientname = document.queryselector("myform").name.value;
	 var newmessage = document.querySelector("#myform").comment.value; 
	 heading.innerHTML = "Thank you for your feedback " + name;  */

	heading.innerHTML = "Thank you for your message." ;
	
}
//check when click on equal button if empty and give us alert 
$(document).ready(function(){
	$('#equal').click(function(){
		if($('#screen1').val('')){
			alert("Plese Entere number");
		}
	})
});



function insert(num){

	calc.display.value +=num;
}
function result(){
	calc.display.value = eval(calc.display.value)
}
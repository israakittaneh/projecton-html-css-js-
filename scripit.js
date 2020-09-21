// //check when click on equal button if empty and give us alert 
// $(document).ready(function(){
// 	$('#equal').click(function(){
// 		if($('#screen1').val('')){
// 			alert("Plese Entere number");
// 		}
// 	})
// });

//check when click on equal button if empty and give us alert 
function getinput(val){
var x = val;
if(x === '='){
document.getElementById('screen1').value= eval(document.getElementById('screen1').value);
}else if(x === 'c'){
	document.getElementById('screen1').value = '';

}//else if(x = '+' ||x = '-' ||x = '*' ||x = '/' ){
// console.log("ok");
// }
else{

	document.getElementById('screen1').value+=x;
	// var firstNum = document.getElementById('screen1').value;
}
	

}
//clear last character from input text
//israa is vanigator ,,deema is driver
function backspace(){
	var input = document.getElementById('screen1');
	var x = input.value;
	if(x.length > 0){
		x= x.substring(0 , x.length -1);
		document.getElementById('screen1').value = x;
	}
     
}

// var users = ["israa" , "deema" , "Ahmad"];

// for(var i = 0 ; i <users.length ; i++){
// $('#users').append((i+1)+" "+users[i] +' <br>');

// }




//clear last character from input text by jquerey


// $('#backspace').click(function (){
// 	var x = $('#screen1').value;
// 	console.log(x);
	
// 	if(x.length > 0){
// 		x= x.substring(0 , x.length -1);
// 		$('#screen1').value = x;
// 	}
// })






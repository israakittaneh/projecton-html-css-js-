// //check when click on equal button if empty and give us alert 
// $(document).ready(function(){
// 	$('#equal').click(function(){
// 		if($('#screen1').val('')){
// 			alert("Plese Entere number");
// 		}
// 	})
// });



function getinput(num){
var x = num;
if(x === '='){
document.getElementById('screen1').value= eval(document.getElementById('screen1').value);
}else if(x === 'c'){
	document.getElementById('screen1').value ='';
}
else{
	document.getElementById('screen1').value+=num;
}
	

}



// var pre = 0;
// var precalc ;
// var c= false;
// var flag = false;
// var screen =function (par){
// 	if(par == '.' && flag == true){
// 		return ;
// 	}
// 	if(c ==true){
// 		$("#screen").val('');
// 		c=false;
// 	}
// 	var r = $('#screen').val('')+par;
// 	if(par == '.'){
// 		flag = true;
// 	}else{
// 		r = r * 1;
// 	}
// 	$('#screen').val('');
// }

// var calculate = function(par){
// 	if(pre){
// 		result();
// 	}
// 	flag = false;
// 	c =true;
// 	pre = $('#screen').val('');
// 	precalc = par;
// 	}


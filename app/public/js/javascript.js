$("#viewTables").on("click", function(){
	window.location.href = "/tables";
});


$("#viewRes").on("click", function(){
	window.location.href = "/reserve";
});

$("#clear").on("click", function(e){

	$.ajax({
  		type: "POST",
  		url: "/api/clear",
 		data: "true",
 		success: function(result){
       		alert(result);
   		} 
    });
    e.preventDefault();
});

$("#reserveSubmit").on("click", function(e){
	var newReserve = {
		name: $('#name').val().trim(),
		phone: $('#phone').val().trim(),
		email: $('#email').val().trim(),
		ID: $('#idNum').val().trim()
	}
	$.ajax({
  		type: "POST",
  		url: "/api/reserve",
 		data: newReserve, 
 		success: function(result){
       		alert(result);
   		}
    });
    e.preventDefault();
});
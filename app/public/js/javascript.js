
//Click handlers

//view tables handler
$("#viewTables").on("click", function(){
	window.location.href = "/tables";
});

//view reservations handler
$("#viewRes").on("click", function(){
	window.location.href = "/reserve";
});

//Clear tables, waiting lists
$("#clear").on("click", function(e){ 
	$.ajax({
  		type: "POST",
  		url: "/api/clear",
 		data: "true",
 		success: function(result){
       		alert(result);
   		} 
    });
    e.preventDefault(); //prevents refresh
});

//Send form values 
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
    e.preventDefault(); //prevents refresh
});
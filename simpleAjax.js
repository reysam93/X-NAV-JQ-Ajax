$(document).ready(function(){
	$("#start").click(function(){
		$.ajax({
			url: "doc.txt",
			type: "GET",
			cache: false
		}).done(function(data){
			alert("succes");
			$("#doc").html(data);
		}).fail(function(jqXHR, textStatus){
			alert("Request failed: " + textStatus)
		})
	});
});
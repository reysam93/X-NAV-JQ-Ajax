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
	$("#fail").click(function(){
		$.ajax("docsd.txt").done(function(){
			alert("Should not enter here :/");
		}).fail(function(jqXHR, textStatus){
			alert("Request failed (as espected): " + textStatus);
		});
	});
});
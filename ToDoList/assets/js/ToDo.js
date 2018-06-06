$("input").hide();
// mark as done
$("ul").on("click","li",function(){
	$(this).toggleClass("done");
});

// click X to delete a task
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//text input
$("input[type='text']").keypress(function(event){
	if(event.which===13){
		var newTask=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> "+newTask+"</li>");
	}
});

//fadeOut test box
$(".fa-pencil-alt").click(function(){
	$("input").fadeToggle();
});
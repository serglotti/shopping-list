$(document).ready(function() {

	//Add item scripting
	$(".add-btn").on("mousedown", function() {
		$(".cart-add").hide();
		$(".cart-add-buttonDown").show();
	})
	
	.on("mouseup", function() {
		$(".cart-add-buttonDown").hide();
		$(".cart-add").show();

		// Adds item to list and appends delete and done buttons
		var itemVal = document.getElementById("input-box-text").value;
		var shopItem = $("<li class=listItem><span class=delete></span>".concat(itemVal).concat("<span class=done></span></li>"));
		$(".item-list").append(shopItem);
	})

	// Deletes item from the list
	$(".item-list").on("click", ".delete", function(){
    	$(this).closest('li').fadeOut(250); //could also use remove()
	})

	// Toggles completed/non-completed item from the list
	$(".item-list").on("click", ".done", function(){
    	if($(this).closest("li").hasClass("strikethrough")) {
    		$(this).closest('li').removeClass("strikethrough");
    	}
    	else {
    		$(this).closest('li').addClass("strikethrough");
    	}
	});	

});
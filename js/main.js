/* Window */
	$(".window-close").on("click", function() {
		$(".window").removeClass("open");
	});
	$(".window").on("click", function(e) {
	    e.stopPropagation();
	});
	$(document).keyup(function(e) {
		if (e.keyCode == 27) { 
			$(".window").removeClass("open");
		}
	});
	
/* Menu auth */
$("#menu-auth").on("click", function() {
	$("#window-auth").addClass("open");
});

/* Menu */
$(".menu-node").on("click", function(e) {
    $(".menu-node").removeClass("open");
    $(this).addClass("open");
});


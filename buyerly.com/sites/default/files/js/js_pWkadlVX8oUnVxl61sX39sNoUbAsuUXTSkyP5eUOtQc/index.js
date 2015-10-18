(function ($) {
Drupal.behaviors.buyerly = {
    attach: function (context, settings) {


	// Adding Default word for password
	$("#edit-pass").hide();
	 $(".defaultPasswordText").show();

	 $(".defaultPasswordText").focus(function() {
		  $(".defaultPasswordText").hide();
		  $("#edit-pass").show();
		  $("#edit-pass").focus();
	 });
	 $("#edit-pass").blur(function() {
	   if($("#edit-pass").val() == "") {
	   	$(".defaultPasswordText").show();
	   	$("#edit-pass").hide();
	   }
	 });

	 




    }
};

})(jQuery);
;

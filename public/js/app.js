(function(){
	angular
		.module('FS', [
			'ngRoute',
			'ngMessages',
			'ngCookies',
			'ngAnimate',
			'layout-controller',
			'global-factory'
		])
		.directive('mainDirective', function($timeout){
			return{
				restrict: 'AE',
				link: function(){
					$timeout(function(){
						//jQuery modules init
						/*$(".form_select select, .form_checkbox input, .form_radio input").custom_form({
							responsive_select: true
						});
					  $("input[type=file]").custom_form({
					    file_button: $("input[type=file]").data("translate-button"),
					    file_label: $("input[type=file]").data("translate-label")
					  });
					  $("[data-sticky]").stick_in_parent({
					  	parent: $('#page')
					  });*/
					}, 100, false);
				}
			};
		});
})();
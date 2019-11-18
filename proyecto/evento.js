$(document).ready(function(){
	$('ul.ventana li a:first').addClass('active');
	

	$('ul.ventana li a').click(function(){
		$('ul.ventana li a').removeClass('active');
		$(this).addClass('active');
		
			});
});
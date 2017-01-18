$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
	$('#search').click(function(){
		$('#search').hide();
		$('#div-src').show(1, function(){
			$('#btn-src').show(1,function()
				{
					$('#input-src').show();
					$('#input-src').animate({
						width: 200+'px'
					});
				});
		});
		return false;
	})
	$('#close-src').click(function(){
		$('#div-src').hide(1,function(){
			$('#btn-src').hide();
			$('#input-src').width(0);
			$('#search').show();
		})
	})

	$('#da-slider').cslider(
		{
			autoplay: true,
		});
})

function rapair_slider()
{
	width = $(window).width();
	calcula = width * 0.10;
	if(width <= 768){
		$('head').append('<style>.da-slide-current>h2{magin-left: -'+calcula+'px !important;}</style>');
		setTimeout(function()
		{
			$('#slide0>h1').removeAttr('style');
		},5000)
	}
}
rapair_slider();
//$(document).ready(function(){
  /*$('.single-item').slick({
  dots:false,
  arrows:false,
  centerMode: true,
  autoplay: true,
  mobileFirst     : true,
  autoplaySpeed: 8000,
  slidesToShow: 1,
  });*/
  //$('.single-item').slickLightbox();

//});

$(document).ready(function(){
  $('.carousel-hero').slick({
  dots:true,
  arrows:false,
  centerMode: true,
  autoplay: true,
  slidesToShow: 1,
  mobileFirst     : true,
  autoplaySpeed: 3500,
  variableWidth: true,
  adaptiveHeight: true,
	});
});

/*$(".publicar").click(function(e){
var id = $(this).data("id");
var input = "#input-"+id;
//alert($(input).val());
$('#body-comentario').appendTo($(input).val());
});*/
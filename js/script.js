/*$(document).ready(function(){
  $('.single-item').slick({
  dots:false,
  arrows:false,
  centerMode: true,
  autoplay: true,
  mobileFirst     : true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  });
  //$('.single-item').slickLightbox();

});*/

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
	
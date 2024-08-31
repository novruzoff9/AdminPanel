$('#menubtn').click(function () {
  $('aside').toggleClass('mini-show');
  $('header').toggleClass('show-more');
  $('#content').toggleClass('show-more');
});
$(document).click(function (event) {
  var $target = $(event.target);
  if (
    !$target.closest('#notficiationsbtn').length &&
    !$target.closest('#notficiations-menu').length
  ) {
    $('#notficiations-menu').hide();
  }
  if (
    !$target.closest('#user-data').length &&
    !$target.closest('#profile-menu').length
  ) {
    $('#profile-menu').hide();
  }
});

$('#notficiationsbtn').click(function (event) {
  event.stopPropagation();
  $('#profile-menu').hide(); // Profil menüsünü kapat
  $('#notficiations-menu').toggle();
});

$('#user-data').click(function (event) {
  event.stopPropagation();
  $('#notficiations-menu').hide(); // Bildirim menüsünü kapat
  $('#profile-menu').toggle();
});

$(".open-sub-menu").click(function(){
  console.log("dad");
  console.log($(this));
  
  $(this).children("i").toggleClass("fa-chevron-down");
  $(this).children("i").toggleClass("fa-chevron-up");
  $(this).siblings(".sub-menu").toggle();
});
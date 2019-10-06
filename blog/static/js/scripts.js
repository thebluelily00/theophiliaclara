
$( document ).ready(function() {
  console.log( 'ready!' );
  $( "#menu " ).css('left','-275px');
  $( "#other" ).css('margin-left','0px');

  $( "#open-m").on('click', function(){
    if(screen.width>601){
      $('#menu').show();
      $('#menu').css('left','0px');
      $('#other').css('margin-left','275px');
    }
    else{
      $('#menu').slideDown();
      $('#other').slideUp();
    }
  });
  $('#close-m').on('click', function(){
    if(screen.width>601){
      $('#menu').css('left','-275px');
      $('#other').css('margin-left','0px');
      $('#menu').hide();
    }
    else{
      $('#menu').slideUp();
      $('#other').slideDown();
    }
  });
  var d = new Date();
  $('.footer').html('<a>&copy '+d.getFullYear()+" Theophilia Clara</a>");
});

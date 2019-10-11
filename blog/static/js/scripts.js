$( document ).ready(function() {
  console.log( 'ready!' );
  if(screen.width>601){
    $( "#menu " ).css('left','-275px');
    $( "#other" ).css('margin-left','0px');
    $( "#open-m").on('click', function(){
      $('#menu').show();
      $('#menu').css('left','0px');
      $('#other').css('margin-left','275px');
    });
    $('#close-m').on('click', function(){
      $('#menu').css('left','-275px');
      $('#other').css('margin-left','0px');
      $('#menu').hide();
    });
  }
  else{
    $("#menu").hide();
    $( "#open-m").on('click', function(){
      $('#menu').slideDown();
      $('#other').slideUp();
    });
    $('#close-m').on('click', function(){
      $('#menu').slideUp();
      $('#other').slideDown();
    });
  }
  var d = new Date();
  $('.footer').html('<a>&copy '+d.getFullYear()+" Theophilia Clara</a>");
});

$( document ).ready(function() {
  console.log( 'ready!' );
  /*if(screen.width>601){
    $( "#menu " ).css('left','-300px');
    $( "#other" ).css('margin-left','0px');
    $( "#open-m").on('click', function(){
      $('#menu').show();
      $('#menu').css('left','0px');
      $('#other').css('margin-left','300px');
    });
    $('#close-m').on('click', function(){
    $('#other').css('margin-left','0px');
      $('#menu').css('left','-300px');
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
  }*/
  var d = new Date();
  $('.copy').html('<a>&copy '+d.getFullYear()+" Theophilia Clara</a>");

  $("#id_title").attr('placeholder','Title');
  $("#id_text").attr('placeholder','Text');
  $("#id_tag").attr('placeholder','Tag');
  $("#id_author").attr('placeholder','Author name');
});

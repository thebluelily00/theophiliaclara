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

  if(screen.width>screen.height){ // for landscape
    if($('.litness').width > $('.litness').height){ // when photo is horizontal
      $('.litness').css('max-width','400px');
    }
    else{ // when photo is vertical
      $('.litness').css('width','30%');
    }
  }
  else{ //for portrait
    if($('.litness').width > $('.litness').height){ // when photo is horizontal
      //nada
    }
    else{ // when photo is vertical
      //nada
    }
  } //nothing really necessary

  $("#id_title").attr('placeholder','Title');
  $("#id_text").attr('placeholder','Text');
  $("#id_tag").attr('placeholder','Tag');
  $("#id_author").attr('placeholder','Author name');

  $(function() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    $("html, body").css({"width":w,"height":h});
});
});

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
  $("#id_text").attr('autocorrect','onn');
  $("#id_tag").attr('placeholder','Tag');
  $("#id_author").attr('placeholder','Author name');
  $("#posty p:nth-child(3)").append("\
    <div class='text-options'>\
      <ul>\
        <li><i class='fas fa-align-justify' id='paragraph'></i></li>\
        <li><i class='fas fa-list-ol' id='ordered'></i></li>\
        <li><i class='fas fa-list-ul' id='unordered'></i></li>\
        <li><i class='fas fa-italic' id='italic'></i></li>\
        <li><i class='fas fa-bold' id='bold'></i></li>\
        <li><i class='fas fa-underline' id='underline'></i></li>\
        <li><i class='fas fa-strikethrough' id='strikethrough'></i></li>\
        <li><i class='fas fa-link' id='link'></i></li>\
        <li><i class='fas fa-image' id='img'></i></li>\
        <li><i class='fas fa-utensils' id='recipe'></i></li>\
      </ul>\
    </div>\
  ");

  $('#paragraph').click(function(){
    $('#id_text').val($('#id_text').val() + '\n <p></p>');
  });

  $('#ordered').click(function(){
    $('#id_text').val($('#id_text').val() + '\n <ol>\n <li></li>\n </ol>');
  });

  $('#unordered').click(function(){
    $('#id_text').val($('#id_text').val() + '\n <ul>\n <li></li>\n </ul>');
  });

  $('#italic').click(function(){
    $('#id_text').val($('#id_text').val() + '\n <em></em>');
  });

  $('#bold').click(function(){
    $('#id_text').val($('#id_text').val() + '\n <strong></strong>');
  });

  $('#underline').click(function(){
    $('#id_text').val($('#id_text').val() + '\n <span style="text-decoration:underline;"></span>');
  });

  $('#strikethrough').click(function(){
    $('#id_text').val($('#id_text').val() + '\n <span style="text-decoration: line-through;"></span>');
  });

  $('#link').click(function(){
    $('#id_text').val($('#id_text').val() + '\n <a src=""></a>');
  });

  $('#img').click(function(){
    $('#id_text').val($('#id_text').val() + '\n <img src="">');
  });
  //ADD ANOTHER BOX FOR MAKING LISTS. UNDER APPEND + THIS SECTION TO ACTUALLY FNCTION
  // ALSO, add UNDERLINE and STRIKETHROUGH
  $('#recipe').click(function(){
    $('#id_text').val($('#id_text').val() + '\
<div class="recipe">\n\
    <h2></h2>\n\
    <p></p>\n\
    <ul class="recipe-menu">\n\
      <li>[] <br> servings</li>\n\
      <li>prep <br> (time)</li>\n\
      <li>cook <br> (time)</li>\n\
    </ul>\n\
    <hr>\n\
    <h3><em>Ingredients</em></h3>\n\
    <ul id="ingredients">\n\
        <li></li>\n\
    </ul>\n\
    <br>\n\
    <h3><em>Instructions</em></h3>\n\
    <ol id="instruct">\n\
        <li></li>\n\
    </ol>\n\
</div>\n\
');
  });
});

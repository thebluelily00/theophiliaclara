$( document ).ready(function(){
  console.log( 'ready!');
  $('#sty, #lif, #ent, #foo').hide();

  var d = new Date();
  $('.copy').html('<a>&copy '+d.getFullYear()+" Theophilia Clara</a>");

 //nothing really necessary
  $("#id_title").attr('placeholder','Title');
  $("#id_text").attr('placeholder','Text');
  $("#id_text").attr('autocorrect','on');
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

  // time for covid stuff
  var creative = ["write a journal about what you do each day and how you're feeling about it.","write a short story about where you wish you were","write about someone you miss","write about what you think is beautiful","follow a drawing tutorial on youtube","color your own masterpiece using a <a href='http://library.nyam.org/colorourcollections/'>coloring sheet from a museum</a>","try out zentangles or fill a sheet with doodles","make a video each day about what you're up to", 'make a collection of music playlists to share with friends','try some macro photography on things in your home','make an instagram profile for your pet',"plan new outifits with clothes you don't normally wear.",'paint your nails!','cook up an insta worthy meal'];
  var relaxed = ["read a book in your house you've never looked at","look through a cookbook for some recipe inspiration","research online about an event or historical era that interests you","learn something about your heritage","watch your favorite movie",'take a <a href="https://www.southernliving.com/syndication/museums-with-virtual-tours?fbclid=IwAR0SfMsZLm7IY27VnOKtewMAq-wNeSLNjzf7xsivu70CnqLWlaXN9YOKii8">digital tour </a> of a museum from the comfort of your own home!','update your insta/twitter bio','make some tea','play <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwiiqK7OtqfoAhWBQs0KHdXdAWIQFjAAegQIBhAB&url=https%3A%2F%2Fwww.geoguessr.com%2F&usg=AOvVaw2fdlU1Sgj5l-H_maAtfhhk">GeoGuessr</a>','stretch out'];
  var wornout = ["go take a hot shower","wash your face","put on some lip balm","brush out your hair or braid it","turn off music, find a quiet place to relax"];
  var energetic = ["take your dog outside","do an ab workout!","do a leg workout","do an arm workout","follow a yoga or pilates video on youtube!","learn a new dance on youtube!","clean out your closet!",'rearrange your furniture','clean your windows','go take a walk and listen for bird sounds, see if you can identify any'];
  var lonely = ["find a crossword puzzle and text your friends to figure it out together","watch netflix with your friends digitally using a <a href='https://chrome.google.com/webstore/detail/netflix-party/oocalimimngaihdkbihfgmpkcpnmlaoa?hl=en'>plugin on google chrome</a>","find memes to send to your friend","check in with your family + see how they're feeling","facetime someone you care about",'ask friends for some music reccomendations','three truths and a lie on a group chat','video call with the people you normally eat lunch with'];

  //steps for function:
  // change text, change background color, make text show
  // make all buttons slideup, make advice show + tool slide slideDown
  // somehow make redo fit this online
  // close to redo all that DONE

  var help = {'crea':[creative,'creative','#A0E5FA'],'rela':[relaxed,'relaxed','#8EB6DE'],'worn':[wornout,'worn out','#AABCF5'],'ener':[energetic,'energetic','#908EDE'],'lone':[lonely,'lonely','#BCA0FA']};
  var last;

  $('#tools').hide();

  function produceIdea(heyo){
    console.log(heyo);
    console.log(help[heyo][0]);
    console.log(help[heyo][1]);
    console.log(help[heyo][2]);

    $("#feeling").text(help[heyo][1]);
    $("#feeling").css('background',help[heyo][2]);
    $("#feeling").css('text-transform','uppercase');
    $('#crea, #rela, #worn, #ener, #lone').slideUp();
    $('#idea').html(help[heyo][0][Math.floor(Math.random() * help[heyo][0].length)]);
    $('#tools').slideDown();
    $('#note').css('color','grey');
    last = heyo;
  }

  $('.mai button').click(function(event){
      event.preventDefault();
      console.log('no1');
      produceIdea($(this).attr("id"));
      console.log('no2');
  });

  $("#close").click(function(){
    $('#tools').slideUp();
    $('#crea,#rela, #worn, #ener, #lone').slideDown();
    $('#feeling').text('...');
    $("#feeling").css('background','none');
    $('#note').css('color','black');

  });
  $("#redo").click(function(){
    produceIdea(last);
  });

});

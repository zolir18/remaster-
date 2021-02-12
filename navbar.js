

$(document).ready(function(){
    $('a.navbar__button').click(function(){
        alert("b");
        // $('ul.navbar').addClass('nav-open');
   });

        $('a').click(function(){
        $('ul.navbar').addClass('close').slideToggle('300');
      });
          

           });
(function () {
    var words = ["Software Engineer","Backend Engineer","Software Developer","Web Developer","Application Developer","Billionaire" ],
    i = 0;
    setInterval(function(){ $('#words').fadeOut(function(){
        $(this).html(words[(i = (i + 1) % words.length)]).fadeIn();
      }); }, 2000)
  })();
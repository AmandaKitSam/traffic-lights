console.log("js file connected");


$(document).ready(function() {

  const totalSteps = function() {

    // The Initial State - North & South are green; East & West are red
    // green - 270s
    setTimeout(function() {
      $('.go1').addClass('go');
      $('.opposite-stop').addClass('stop');
    }, 1000);

    // (Step 1 - 30s = 30000 )
    setTimeout(function() {
      $('.go1').removeClass('go');
      $('.slow1').addClass('slow');
    }, 3000);

    // (Step 2 Switch Lights)
    setTimeout(function() {
      $('.stop1').addClass('stop');
      $('.slow1').removeClass('slow');
      $('.opposite-stop').removeClass('stop');
      $('.opposite-go').addClass('go');
    }, 5000);

    // (Step 3 - after 270s - turn yellow & stay 30s)
    setTimeout(function() {
      $('.opposite-slow').addClass('slow');
      $('.opposite-go').removeClass('go');
    }, 7000);

    // (Step 4 Switch Lights)
    setTimeout(function() {
      $('.opposite-slow').removeClass('slow');
      $('.stop1').removeClass('stop');
      $('.go1').addClass('go');
      $('.opposite-stop').addClass('stop');
    }, 9000);
  }; // END of totalSteps function


  // Set the animation for 6 times
  let counter = 0;
  setInterval(function() {
    if ( counter < 2 ) {
      totalSteps();
      counter += 1;
    } else {
      let showFinal = function() {
        $('.finalMessage').html('<h2>This is the end of the thirty minute period.</h2>');
      } // END showFinal
      showFinal();
    }
  }, 9000);

}); // END.ready function

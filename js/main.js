console.log("js file connected");


$(document).ready(function() {

  // The Initial State - North & South are green; East & West are red
  $('.go1').addClass('go');
  $('.opposite-stop').addClass('stop');

  const totalSteps = function() {

    // (Step 1 - 30s = 30000 )
    setTimeout(function() {
      $('.go1').removeClass('go');
      $('.slow1').addClass('slow');
    }, 30000);

    // (Step 2 Switch Lights: after 30s + stay 270s = 300s)
    setTimeout(function() {
      $('.stop1').addClass('stop');
      $('.slow1').removeClass('slow');
      $('.opposite-stop').removeClass('stop');
      $('.opposite-go').addClass('go');
    }, 300000);

    // (Step 3 Turn Yellow: Step 2 + 30s = 330s)
    setTimeout(function() {
      $('.opposite-slow').addClass('slow');
      $('.opposite-go').removeClass('go');
    }, 330000);

    // (Step 4 Switch Lights: Step 3 + stay 270s = )
    setTimeout(function() {
      $('.opposite-slow').removeClass('slow');
      $('.stop1').removeClass('stop');
      $('.go1').addClass('go');
      $('.opposite-stop').addClass('stop');
    }, 600000);
  }; // END of totalSteps function


  // Set the animation for 6 times
  let counter = 0;
  setInterval(function() {
    if ( counter < 6 ) {
      totalSteps();
      counter += 1;
    } else {
      let showFinal = function() {
        $('.finalMessage').html('<h2>This is the end of the thirty minute period.</h2>');
      } // END showFinal
      showFinal();
    }
  }, 600000);

}); // END.ready function

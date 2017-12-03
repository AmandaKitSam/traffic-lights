console.log("js file connected");


$(document).ready(function() {
  // debugger;

  const totalSteps = function() {

    // The Initial State - North & South are green
    $('.go1').addClass('go');
    $('.opposite-stop').addClass('stop');

    // (Step 1)
    setTimeout(function() {
      $('.go1').removeClass('go');
      $('.slow1').addClass('slow');
    }, 3000);

    // (Step 2)
    setTimeout(function() {
      $('.stop1').addClass('stop');
      $('.slow1').removeClass('slow');
      $('.opposite-stop').removeClass('stop');
      $('.opposite-go').addClass('go');
    }, 5000);

    // (Step 3)
    setTimeout(function() {
      $('.opposite-slow').addClass('slow');
      $('.opposite-go').removeClass('go');
    }, 8000);

    // (Step 4)
    setTimeout(function() {
      $('.opposite-slow').removeClass('slow');
      $('.stop1').removeClass('stop');
      $('.go1').addClass('go');
      $('.opposite-stop').addClass('stop');
    }, 10000);
  }; // END of totalSteps function

  totalSteps();

}); // END.ready function

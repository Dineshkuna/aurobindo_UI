jQuery(document).ready(function() {
    jQuery("#btnreadedu").click(function() {
      var elem = jQuery("#btnreadedu").text();
      if (elem == "Read More") {
        //Stuff to do when btn is in the read more state
        jQuery("#btnreadedu").text("Read Less");
        jQuery("#txteducontent").slideDown();
      } else {
        //Stuff to do when btn is in the read less state
        jQuery("#btnreadedu").text("Read More");
        jQuery("#txteducontent").slideUp();
      }
    }),
     jQuery("#btnreadedu1").click(function() {
      var elem = jQuery("#btnreadedu1").text();
      if (elem == "Read More") {
        //Stuff to do when btn is in the read more state
        jQuery("#btnreadedu1").text("Read Less");
        jQuery("#txteducontent1").slideDown();
      } else {
        //Stuff to do when btn is in the read less state
        jQuery("#btnreadedu1").text("Read More");
        jQuery("#txteducontent1").slideUp();
      }
    }),
     jQuery("#btnreadedu2").click(function() {
      var elem = jQuery("#btnreadedu2").text();
      if (elem == "Read More") {
        //Stuff to do when btn is in the read more state
        jQuery("#btnreadedu2").text("Read Less");
        jQuery("#txteducontent2").slideDown();
      } else {
        //Stuff to do when btn is in the read less state
        jQuery("#btnreadedu2").text("Read More");
        jQuery("#txteducontent2").slideUp();
      }
    }),
     jQuery("#btnreadedu3").click(function() {
      var elem = jQuery("#btnreadedu3").text();
      if (elem == "Read More") {
        //Stuff to do when btn is in the read more state
        jQuery("#btnreadedu3").text("Read Less");
        jQuery("#txteducontent3").slideDown();
      } else {
        //Stuff to do when btn is in the read less state
        jQuery("#btnreadedu3").text("Read More");
        jQuery("#txteducontent3").slideUp();
      }
    }),
     jQuery("#btnreadedu4").click(function() {
      var elem = jQuery("#btnreadedu4").text();
      if (elem == "Read More") {
        //Stuff to do when btn is in the read more state
        jQuery("#btnreadedu4").text("Read Less");
        jQuery("#txteducontent4").slideDown();
      } else {
        //Stuff to do when btn is in the read less state
        jQuery("#btnreadedu4").text("Read More");
        jQuery("#txteducontent4").slideUp();
      }
    }),
     jQuery("#btnreadedu5").click(function() {
      var elem = jQuery("#btnreadedu5").text();
      if (elem == "Read More") {
        //Stuff to do when btn is in the read more state
        jQuery("#btnreadedu5").text("Read Less");
        jQuery("#txteducontent5").slideDown();
      } else {
        //Stuff to do when btn is in the read less state
        jQuery("#btnreadedu5").text("Read More");
        jQuery("#txteducontent5").slideUp();
      }
    });
  });

  /*  product scrirt */
  $(function(){
    $(".fold-table tr.view").on("click", function(){
      $(this).toggleClass("open").next(".fold").toggleClass("open");
    });
  });
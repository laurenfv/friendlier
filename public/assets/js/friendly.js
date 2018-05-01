// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    $('#bounceIn').addClass('animated bounceInLeft');
    $('#bounceIn2').addClass('animated bounceInUp');

    // $( window ).scroll(function() {
    //     $( ".mdl-layout__header--transparent.mdl-layout__header--transparent" ).css( "background", "pink" );
    //   });

    // $(document).scroll(function () {
    //     var $nav = $(".mdl-layout__header--transparent.mdl-layout__header--transparent");
    //     $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    // });

    // $('#bounceIn').animateCss('bounceInLeft');

    $(".change-done").on("click", function(event) {
      var id = $(this).data("id");
      var newDone = $(this).data("newdone");
  
      var newDoneState = {
        done: newDone
      };
  
      // Send the PUT request.
      $.ajax("/api/random_acts/" + id, {
        type: "PUT",
        data: newDoneState
      }).then(
        function() {
          console.log("changed sleep to", newDone);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newAct = {
        act_name: $("#act").val().trim(),
        done: $("[name=done]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/random_acts", {
        type: "POST",
        data: newAct
      }).then(
        function() {
          console.log("created new act");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    // $(".delete-act").on("click", function(event) {
    //   var id = $(this).data("id");
  
    //   // Send the DELETE request.
    //   $.ajax("/api/random_acts/" + id, {
    //     type: "DELETE"
    //   }).then(
    //     function() {
    //       console.log("deleted act", id);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  });
  
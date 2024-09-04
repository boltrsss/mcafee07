$(document).ready(function() {
  /*  */
  /* GLOBALS */
  /* */
  var second_offer_link = document.querySelector(".second_offer_link");
  var second_offer_button = document.querySelectorAll(".second_offer_button");
  var back_offer_link = document.querySelector(".back_offer_link");
  /*  */
  /* SECOND OFFER */
  /* */
  /* Lets check if we have second offer on page */
  if (second_offer_link != null) {
    /* Hide second offer link */
    second_offer_link.style.display = "none";
    /* Second offer button event */
    for(var i = 0; i < second_offer_button.length; i++) {
      second_offer_button[i].onclick = function second_click(event) {
        var final_url = this.getAttribute("href");
        console.log(final_url)
        event.preventDefault();
        var url_address = location.protocol + '//' + window.location.hostname;
        var prev_address = $(".second_offer_link").attr("href");
        var myNewTab = window.open('about:blank', '_blank');
        $.ajax({
          url: url_address,
           type: 'GET',
           async: false,
           success: function(res) {
             myNewTab.location.href = final_url;
             location.href = prev_address;
           },
           error: function(res) {
           	 myNewTab.location.href = final_url;
             location.href = prev_address;
           }
          }
        );
      }
    }
  }
  /*  */
  /* BACK OFFER */
  /* */
  /* Hide back offer link links */
  back_offer_link.style.display = "none";
  /* Back offer button event */
  window.onload = function() {
    if (typeof history.pushState === "function") {
      history.pushState("jibberish", null, null);
      window.onpopstate = function() {
        history.pushState('newjibberish', null, null);
        location.href = back_offer_link.getAttribute('href');
      };
    }
    else {
      var ignoreHashChange = true;
      window.onhashchange = function() {
        if (!ignoreHashChange) {
          ignoreHashChange = true;
          window.location.hash = Math.random();
          location.href = back_offer_link.getAttribute('href');
        }
        else {
          ignoreHashChange = false;
        }
      };
    }
  }
}
                  );
//<a href="#2" class="second_offer_link" style="display: none;"></a>
//<a href="#3" class="back_offer_link" style="display: none;"></a>

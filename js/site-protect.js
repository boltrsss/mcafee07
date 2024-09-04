$(document).ready(function() {
  // **************************************************************** //
  //                                                                  //
  //  ____            _            _     ____  _             _        //
  // |  _ \ _ __ ___ | |_ ___  ___| |_  |  _ \| |_   _  __ _(_)_ __   //
  // | |_) | '__/ _ \| __/ _ \/ __| __| | |_) | | | | |/ _` | | '_ \  //
  // |  __/| | | (_) | ||  __/ (__| |_  |  __/| | |_| | (_| | | | | | //
  // |_|   |_|  \___/ \__\___|\___|\__| |_|   |_|\__,_|\__, |_|_| |_| //
  //                                                   |___/          //
  //                                                                  //
  // **************************************************************** //
  /* Protect website from open dev tool to copy */
  var devToolOpen = function() {
    var checkStatus = null;
    var changeStatus = false;
    var element = new Image();
    Object.defineProperty(element, 'id', {
                           get: function() {
                             checkStatus = 'on';
                             throw new Error("Dev tools checker");
                           }
                           }
                          );
    requestAnimationFrame(function check() {
      checkStatus = 'off';
      console.dir(element);
      if (checkStatus === 'on' && !changeStatus) {
        location.href = "https://www.google.com.ua/";
      }
      requestAnimationFrame(check);
    }
                          );
  }
  /* Block save buttons */
  $(document).bind('keydown keypress', 'ctrl+s', function() {
    return false;
  }
                   );
  /* Block clicks on site */
  document.onmousedown = disableClick;
  var disableClick = function(event) {
    if (event.button == 2) {
      alert(status);
      return false;
    }
  }
  /* Block any key pressed */
  $.fn.onEnterKey = function(callback) {
    $(this).keypress(function(event) {
      var code = event.keyCode ? event.keyCode : event.which;
      if (code == 13) {
        callback();
        return false;
      }
    }
                     );
  }
  /* Block right mouse click */
  $(function() {
    $(this).bind("contextmenu", function(e) {
      e.preventDefault();
    }
                 );
  }
    );
  /* Run all scripts to protect */
  devToolOpen();
}
                  );

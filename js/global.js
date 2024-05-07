/**
 * @file
 * Global utilities.
 *
 */
(function (Drupal) {
  "use strict";

  Drupal.behaviors.bmedia_barrio = {
    attach: function (context, settings) {
      var clipboard = new ClipboardJS(".btnCopy");
      clipboard.on("success", function (e) {
        // setTooltip("Copied!");

        console.info("Action:", e.action);
        console.info("Text:", e.text);
        console.info("Trigger:", e.trigger);

        e.clearSelection();
      });

      clipboard.on("error", function (e) {
        console.error("Action:", e.action);
        console.error("Trigger:", e.trigger);
      });

      $(".alertCopy", context).attr("onclick", "alert('Copied!')");
    },
  };
})(jQuery, Drupal);

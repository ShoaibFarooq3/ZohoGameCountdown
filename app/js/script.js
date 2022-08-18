$(document).ready(function(){
	function setupFlip(tick) {
        Tick.helper.interval(function() {
          tick.value++;
        }, 1000);
      }
});
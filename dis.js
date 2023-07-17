disintegrate.init();

/* A simple drag effect demo */
var objMoving;
if(document.querySelector(".draggable")) {
  window.addEventListener("load", addListeners);

  function addListeners() {
    disintegrate.dises.forEach(function(disObj) {
      if(disObj.elem.classList.contains("draggable")) {
        disObj.elem.addEventListener('mousedown', function(e) { 
          objMoving = disObj;
          mouseDown(e);
        }, false);
      }
    });
  }

  function mouseUp() {
    objMoving.elem.style.zIndex = "";
    window.removeEventListener('mousemove', elMove, true);
  }

  var mXo, mYo;
  function mouseDown(e) {
    window.addEventListener('mousemove', elMove, true);
    window.addEventListener('mouseup', mouseUp, false);
    mXo = e.offsetX;
    mYo = e.offsetY;
    objMoving.elem.style.zIndex = "100";

    // Only relevant if hover effect needed, but an additional
    // hover class is required - see the below link for more info
    // https://github.com/niklasvh/html2canvas/issues/683#issuecomment-316503359
    // getScreenshot(objMoving);
  } 

  function elMove(e) {
    objMoving.elem.style.margin = 0;
    objMoving.elem.style.top = 0;
    objMoving.elem.style.left = 0;
    objMoving.elem.style.position = 'absolute';
    var coords = getRelativeCoordinates(e);
    objMoving.elem.style.transform = "translate(" + (coords.x - mXo) + "px, " + (coords.y - mYo) + "px)";
  }

  // From https://stackoverflow.com/a/36860652/2065702 then modified
  function getRelativeCoordinates (e) {
      var pos = {}, offset = {}, ref;
      ref = objMoving.container.offsetParent;

      pos.x = !! e.touches ? e.touches[ 0 ].pageX : e.pageX;
      pos.y = !! e.touches ? e.touches[ 0 ].pageY : e.pageY;

      offset.left = objMoving.container.offsetLeft;
      offset.top = objMoving.container.offsetTop;

      while (ref) {
          offset.left += ref.offsetLeft;
          offset.top += ref.offsetTop;

          ref = ref.offsetParent;
      }

      return { 
          x : pos.x - offset.left,
          y : pos.y - offset.top,
      }; 
  }
}
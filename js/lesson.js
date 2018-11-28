var gl_Time = null;
var width = 0;
var cont = 1;

function frame() {
  var elem = document.getElementById("myBar");
  var text = document.getElementById("text_process");
  if (width >= 100) {
    clearInterval(gl_Time);
  } else {
    width++;
    elem.style.width = width + '%';
    text.innerHTML = width + '%';
  }
}

function reset() {
  width = 0;
  clearInterval(gl_Time);
  gl_Time = setInterval(frame, 100);
}

function resume() {
  var btn = document.getElementById("btn_Continue");
  if (cont) {
    clearInterval(gl_Time);
    btn.innerHTML = "Continue";
    cont = 0;
  } else {
    gl_Time = setInterval(frame, 100);
    btn.innerHTML = "Stop";
    cont = 1;
  }
}
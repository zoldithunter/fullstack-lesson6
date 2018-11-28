var t_process_bar = null;
var t_circle = null;
var width = 0;
var cont = 1;
var cont_circle = 1;

// Process bar
function frame() {
    var elem = document.getElementById("myBar");
    var text = document.getElementById("text_process");
    if (width >= 100) {
        clearInterval(t_process_bar);
    } else {
        width++;
        elem.style.width = width + '%';
        text.innerHTML = width + '%';
    }
}

function reset() {
    width = 0;
    clearInterval(t_process_bar);
    t_process_bar = setInterval(frame, 100);
}

function resume() {
    var btn = document.getElementById("btn_Procees");
    if (cont) {
        clearInterval(t_process_bar);
        btn.innerHTML = "Continue";
        cont = 0;
    } else {
        t_process_bar = setInterval(frame, 100);
        btn.innerHTML = "Stop";
        cont = 1;
    }
}

// Circle
function run_circle() {
    var w = 30;
    var h = 30;
    var tmp = -2;
    var circle = document.getElementById("circle");
    var text = document.getElementById("text_result");
    t_circle = setInterval(change_circle, 100);

    function change_circle () {
        if ((w > 150 && h > 150) || (w < 30 && h < 30)) {
            tmp = -tmp;
        }
        w += tmp;
        h += tmp;
        circle.style.width = w + 'px';
        circle.style.height= h + 'px';
        text.innerHTML = 'Width: ' + w + 'px' + ' - ' + 'Height: ' + h + 'px'
    }
}

function stop_circle() {
    var btn = document.getElementById("btn_Circle");
    if (cont_circle) {
        clearInterval(t_circle);
        btn.innerHTML = "Continue";
        cont_circle = 0;
    } else {
        run_circle();
        btn.innerHTML = "Stop";
        cont_circle = 1;
    }
}
var t_process_bar = null;
var t_circle = null;
var t_zoomout = null;
var t_opcity = null;
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
    document.getElementById("btn_Procees").innerHTML = "Stop";
    cont = 1;
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

// Control box

function showVal(value) {
    var box_child = document.getElementById("box_child"); // range 100
    var box_w = document.getElementById("box").offsetWidth;
    // var data = (value <= 0) ? 1 : (value >= 95) ? 94 : value;
    box_w -= box_child.offsetWidth;
    var marginLeft = (box_w * value)/100;
    box_child.style.marginLeft = marginLeft + 'px';
    document.getElementById("box_content").innerHTML = value + "%"
}


// Zoom Out

function zoom_out() {
    // reset 
    clearInterval(t_zoomout);
    var el_zoom = document.getElementById("zoom_out");
    el_zoom.style.width = '40%';
    el_zoom.style.height = '150px';

    // zoom out
    var current_w = el_zoom.offsetWidth;
    var current_h = el_zoom.offsetHeight;
    var step = 1;
    t_zoomout = setInterval(zoom_el, 10);
    function zoom_el() {
        if (current_w > current_h) {
            current_w -= step;
        } else {
            current_h -= step;
        }
        el_zoom.style.width = current_w + 'px';
        el_zoom.style.height = current_h + 'px';
        if (current_w <= 0 || current_h <= 0) {
            clearInterval(t_zoomout);
        }
    }
}

function change_color() {
    var box_color = document.getElementById("box_color");
    var input_r = document.getElementById("range_r").value;
    var input_g = document.getElementById("range_g").value;
    var input_b = document.getElementById("range_b").value;
    box_color.style.backgroundColor = "rgb(" + input_r + "," + input_g + "," + input_b + ")";
}


// Opacity

function opcity() {
    clearInterval(t_opcity);
    var run = 1;
    var step = 0.02;
    var value = 1;
    var box1 = document.getElementById("opacity_box1");
    var box2 = document.getElementById("opacity_box2");
    t_opcity = setInterval(run_opacity, 100);

    function run_opacity() {
        value -= step;
        if (run == 1) {
            box1.style.opacity = value;
            if (value <= 0) {
                run = 2;
                value = 1;
                box1.style.opacity = 1;
            }
        } else {
            box2.style.opacity = value;
            if (value <= 0) {
                run = 1;
                value = 1;
                box2.style.opacity = 1;
            }
        }
    }
}

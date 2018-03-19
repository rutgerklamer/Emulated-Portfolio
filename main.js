let hide = false;
let close = false;
$(document).ready(function () {
    $("#time").text(get_time());
    $("#terminalexe").dblclick(function () {
        $("#terminal").show("fade", {}, 400);
        $("#bar").show("fade", {}, 400);
        if (close) {
            $("#tasks").append("<a id='terminaltask' class='left active' style='cursor: default;'> Terminal</a>");
            close = false;
        }
    });

    $("#bar").draggable();
    setInterval(function () { $("#time").text(get_time()); }, 1000);
    $("#red").click(function () {
        close = true;
        $("#terminal").hide("fade", {}, 400);
        $("#bar").hide("fade", {}, 400);
        $('a').remove("#terminaltask");
    });
    $("#bar").dblclick(function(){
        if (!hide) {
            $("#terminal").hide("fade", {}, 400);
            $("#terminaltask").removeClass("active");
        } else {
            $("#terminal").show("fade", {}, 400);
            $("#terminaltask").addClass("active");
        }
        hide = !hide;
    });

    $("#green").click(function () {
        if (!hide) {
            $("#terminal").hide("fade", {}, 400);
            $("#bar").hide("fade", {}, 400);
            $("#terminaltask").removeClass("active");
        } else {
            $("#terminal").show("fade", {}, 400);
            $("#bar").show("fade", {}, 400);
            $("#terminaltask").addClass("active");
        }
        hide = !hide;
        $("#yellow").click(function () {
            $("#terminal").show("fade", {}, 400);
            $("#terminaltask").addClass("active");
        });
    });
});
 
$(document).on('click', '#terminaltask', function () {
    if (!hide) {
        $("#terminal").hide("fade", {}, 400);
        $("#bar").hide("fade", {}, 400);
        $("#terminaltask").removeClass("active");
    } else {
        $("#terminal").show("fade", {}, 400);
        $("#bar").show("fade", {}, 400);
        $("#terminaltask").addClass("active");
    }
    hide = !hide;
});

function get_time() {
    let now = new Date(),
    ampm = 'am',
    h = now.getHours();
    m = now.getMinutes();
    s = now.getSeconds();
    if (h >= 12) {
        if (h > 12)
            h -= 12;
        ampm = 'pm';
    }

    if (m < 10)
        m = '0' + m;
    return now.toLocaleDateString() + ' ' + h + ':' + m + ':' + s + ' ' + ampm;
}
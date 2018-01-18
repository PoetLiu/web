$(document).ready(function () {
    powerBarUpdate("high");
    $(".power .select-bar a").click(function (e) {
        powerBarUpdate($(this).attr('mode'));
        resizeAppPage();
    });
    resizeAppPage();
    getPower();
});

function getPower(onSuccess) {
    var postData = {action: "get"};
    $.post("/app/radio_power/radio_power.cgi",
        postData,
        function (data) {
            try {
                console.log(data.now_power);
            } catch (e) {
                showMessage("get power failed.");
            }
        });
}

function setPower() {

}

function powerBarUpdate(mode) {
    var modes = {
        "low": {
            width: 40,
            intro: "2%的WiFi发射功率，准妈妈再也不用担心辐射问题",
            power: 2
        },
        "middle": {
            width: 316,
            intro: "WiFi发射功率50%，既能轻松上网，又能降低辐射",
            power: 50
        },
        "high": {
            width: 630,
            intro: "P+内核信号增益已开，手机WiFi信号较弱时自动增强发射功率，家中信号死角地区也能畅快上网",
            power: 100
        }
    };
    var m = modes[mode];
    if (m) {
        $("#pw-select").animate({width: m.width + "px"}, 500);
        $("#pw-intro").html(m.intro);
        $("#pwa-" + mode).addClass("selected").siblings().removeClass("selected");
    }
}



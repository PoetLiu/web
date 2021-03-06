function initFuncPage(path) {
    console.log("Init Functions page.", path);
    $("#functions-nav li").unbind("click").bind("click", function() {
        var id = $(this).attr("id");
        window.location.hash = "functions/"+navIdToPageId(id);
    });

    $(".tool-box .inner-box").unbind("click").bind("click", function () {
        var id = $(this).attr("id");
        var nav = $("#functions-nav li.current").attr("id");
        window.location.hash = "functions/"+navIdToPageId(nav)+"/"+id;
    });

    var sub = path[1] || "fast-tool",
        app = path[2];

    sub = "#"+sub;
    setCurClass(sub);
    setCurClass(sub+"-nav");

    if (app) {
        $(".functions .app-list").hide();
        $(".functions .nav").show();
        loadApp(app);
        showPathNav("功能扩展", "信号调节");
    } else {
        $(".functions .nav").hide();
        $(".functions .app").hide();
    }

    // fast-tool-nav to fast-tool
    function navIdToPageId(nav) {
        return nav.substring(0, nav.length-4);
    }

    function loadApp(name) {
        var src = "app/" + name + "/index.html";
        $("#app_iframe").attr("src", src);
    }
}

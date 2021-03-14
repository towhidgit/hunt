$(function () {

    // yellow color js area
    $(".color-vartions .yellow").click(function () {
        $("body").addClass("yellow-co");
        $("body").removeClass("red-co");
        $("body").removeClass("green-co");
    });

    // red color js area
    $(".color-vartions .red").click(function () {
        $("body").addClass("red-co");
        $("body").removeClass("yellow-co");
        $("body").removeClass("green-co");
    });


    // green color js area
    $(".color-vartions .green").click(function () {
        $("body").addClass("green-co");
        $("body").removeClass("yellow-co");
        $("body").removeClass("red-co");
    });


})
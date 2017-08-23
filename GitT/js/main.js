$(document).ready(function(){
/*
    var $middle_blockHeight = $(".middle_block").width * 1.2;
    $(".middle_block").css("height",$middle_blockHeight + "px");
 */


    $(".middle_block").mouseenter(function() {
        $(".img_changer",this).animate({opacity: '0.5'}, "fast");
        $("h3", this).css("text-decoration", "underline");
    });
    $(".middle_block").mouseleave(function() {
        $(".img_changer",this).animate({opacity: '0'}, "fast");
        $("h3", this).css("text-decoration", "none");
    });

});

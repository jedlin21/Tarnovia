$(document).ready(function(){
/*
    var $middle_blockHeight = $(".middle_block").width * 1.2;
    $(".middle_block").css("height",$middle_blockHeight + "px");

   $(window).on('resize',funtion(){

    })
 */
    $(".middle_block").mouseenter(function() {
        $(".img_changer",this).css("background-color", "rgba(83, 167, 70, 0.6)");
        $("h3", this).css("text-decoration", "underline");
    });
    $(".middle_block").mouseleave(function() {
        $(".img_changer",this).css("background-color", "rgba(0, 0, 0, 0.6)");
        $("h3", this).css("text-decoration", "none");
    });


});

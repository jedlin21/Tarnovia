$(document).ready(function(){
/*
    var $middle_blockHeight = $(".middle_block").width * 1.2;
    $(".middle_block").css("height",$middle_blockHeight + "px");


 var isBig = 1;
 var $window = $(window);
 if($window.width()<992){
 $(".main_board").addClass("container-fluid");
 isBig = 0;
 }
 else {
 $(".main_board").addClass("container");
 }

 $window.on('resize',funtion() {
 if ((this.width() < 992) && (isBig)) {
 $(".main_board").removeClass("container");
 $(".main_board").addClass("container-fluid");
 }
 else if((this.width() >= 992) && !(isBig)) {
 $(".main_board").removeClass("container-fluid");
 $(".main_board").addClass("container");
 }
 });


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

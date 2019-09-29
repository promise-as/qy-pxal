$(function(){
   /* 案例列表有没有图片的判断 */
   $(".pxal-ul li").each(function() {
    if ($(this).find('.row-bg').has("img").length) {
        // 有左边图片的时候
        $(this).find(".row-r").css("float", "right");
        $(this).find(".cont").width("480px");
    } else {
        // 没有左边图片的时候
        $(this).find(".cont").width("700px");
    }
  });
});
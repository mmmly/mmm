$(function(){
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getcoupon",
    dataType:"json",
    success:function(info){
      console.log(info);
      var htmlStr = template("picTpl",info);
      $('.mm-nav ul').html(htmlStr);
    }
  })
})
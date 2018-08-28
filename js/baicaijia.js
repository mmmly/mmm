$(function(){
  //定义全局变量titleid
  var titleid = 0;
  var width;
  //功能1:一进入页面,发送请求,获取导航栏数据,并进行渲染
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getbaicaijiatitle",
    dataType:"json",
    success:function(info){
      console.log(info);
      var htmlStr = template("navTpl",info);
      $('#wrapper ul').html(htmlStr);
      width = $('#wrapper ul li').outerWidth(true);
      console.log(width,info.result.length);
      $('#wrapper ul').width(width * (info.result.length + 2) / 100+"rem");
        //导航滚动初始化
      new IScroll('.mm-nav', {
        // disableMouse: true,
        // disablePointer: true,
        scrollX: true,
        // scrollY: true
    });
    }
  })


  
  
   
render(titleid);

function render(titleid){
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getbaicaijiaproduct",
    data:{
      titleid :titleid
    },
    dataType:"json",
    success:function(info){
      // console.log(info);
      var htmlStr = template("listTpl",info);
      // console.log(htmlStr);
      $('.list-pro').html(htmlStr);
    }
  })
}
  //功能3:在点击事件中获取对应的导航下的数据,并渲染
  $('.mm-nav ul').on("click","li a",function(){
    var titleid = $(this).data("id");
    $('.mm-nav ul li a').removeClass('active');
    $(this).addClass('active');
    // console.log(titleid);  
    render(titleid);
  })
  
})
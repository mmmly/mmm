$(function(){
  

  //功能1,进入页面,动态加载导航栏并动态渲染
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getindexmenu",
    dataType:"json",
    success:function(info){
      // console.log(info.result[0].img);
      var htmlStr = template("navTpl",info);
      $('.mm-nav ul').html(htmlStr);
    }
  })

  //功能2:点击更多按钮,显示隐藏的导航
  $('.mm-nav ul').on("click","li:nth-child(8)",function(){
    $('.nav-hide').toggleClass('hide');
  })

  //功能3:进入页面,动态加载折扣数据进行渲染
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getmoneyctrl",
    dataType:"json",
    success:function(info){
      console.log(info);
      var htmlStr = template('proTpl',info);
      $('.list-item-detail').html(htmlStr);

    }
  })
})
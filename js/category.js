$(function(){
  //功能1:一进入页面,获取商品分类标题数据,进行渲染
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getcategorytitle",
    dataType:"json",
    success:function(info){
      // console.log(info);
      var htmlStr = template('cateTpl',info);
      $('.mm-main').html(htmlStr);
    }
  })

  //功能2:点击每个分类标题,显示下面的列表(动态渲染)
  $('.mm-main').on('click','a',function(){
    // console.log(1);
    //渲染列表页
    var id = $(this).parent().data("id");
    var that = $(this);
    // console.log(id);
    $.ajax({
      type:"get",
      url:"http://127.0.0.1:9090/api/getcategory",
      data:{
        titleid:id
      },
      dataType:"json",
      success:function(info){
        console.log(info);
        var htmlStr = template('cateListTpl',info);
        // console.log(htmlStr);
        that.next().html(htmlStr);
        that.next().toggleClass('hide');
      }
    })
   
    
  })
})
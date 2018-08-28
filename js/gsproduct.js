$(function(){
  //定义全局变量,保存区域id和店铺id
  var shopId;
  var areaId;
  //京东下拉导航渲染
  $('.jd').on("click",function(){
    $('.jd-nav').toggleClass("hide").siblings(".down-nav").addClass('hide'); 
    $.ajax({
      type:"get",
      url:"http://127.0.0.1:9090/api/getgsshop",
      dataType:"json",
      success:function(info){
        console.log(info);
        var htmlStr = template("jdTpl",info);
        $('.jd-nav').html(htmlStr);
      }
    })
  })
 

  //华北下拉导航渲染
  $('.hb').on("click",function(){
    $('.hb-nav').toggleClass("hide").siblings(".down-nav").addClass('hide'); 
    $.ajax({
      type:"get",
      url:"http://127.0.0.1:9090/api/getgsshoparea",
      dataType:"json",
      success:function(info){
        console.log(info);
        var htmlStr = template("hbTpl",info);
        $('.hb-nav').html(htmlStr);
      }
    })
  })
  //全部下拉导航
  $('.all').on("click",function(){
    $('.all-nav').toggleClass('hide').siblings(".down-nav").addClass('hide');
  })

  //发送数据,获取商品详情
  function render(shopId,areaId){
    $.ajax({
      type:"get",
      url:"http://127.0.0.1:9090/api/getgsproduct",
      data:{
        shopid : shopId || 0,
        areaid : areaId || 0
      },
      dataType:"json",
      success:function(info){
        console.log(info);
        var htmlStr = template("proTpl",info);
        $('.mm-list').html(htmlStr);
      }
    })
  }
  render(shopId,areaId);

  //获取店铺id和区域id,并动态渲染
  $('.jd-nav').on("click",'a',function(){
    shopId = $(this).data("shopid");
    render(shopId);
  })
  $('.hb-nav').on("click",'a',function(){
    areaId = $(this).data("areaid");
    console.log(areaId);
    render(areaId);
  })
  $('.all-nav').on("click",'a',function(){
    render();
  })
})
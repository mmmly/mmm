$(function(){
  var brandtitleid = getSearch()["brandtitleid"];
  var pagesize;
  var productId;
  console.log(brandtitleid);
  //十大品牌动态渲染
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getbrand",
    data:{
      brandtitleid :brandtitleid
    },
    dataType:"json",
    success:function(info){
      console.log(info);
      var htmlStr = template('tenTpl',info);
      $('.content').html(htmlStr);
    }
  })
  //产品销量动态渲染
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getbrandproductlist",
    data:{
      brandtitleid : brandtitleid,
      pagesize : pagesize || 4
    },
    dataType:"json",
    success:function(info){
      console.log(info);
      var htmlStr = template("proTpl",info);
      $('.product').html(htmlStr);
      productId = $('.product li:nth-child(1) a').data("id");
      console.log(productId);
      renderCom();
    }
  })

  //评论动态渲染
  // 获取第一个商品的productid
  function renderCom(){
    $.ajax({
      type:"get",
      url:"http://127.0.0.1:9090/api/getproductcom",
      data:{
        productid: productId
      },
      dataType:"json",
      success:function(info){
        console.log(info);
        var htmlStr = template("comTpl",info);
        $('.comlist').html(htmlStr);
      }
    })
  }
})
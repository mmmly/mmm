$(function(){
  //定义全局变量productName
  var productName = "";
  var des = getSearch();
 
  console.log(des);
 
  function renderNav(){
    //功能1:动态渲染面包屑导航
    $.ajax({
     type:"get",
     url:"http://127.0.0.1:9090/api/getcategorybyid",
     data:{
       categoryid:des["categoryid"]
     },
     dataType:"json",
     success:function(info){
       var htmlStr = template("navTpl",{info:info.result[0],productName:productName});
       $('.bread-nav').html(htmlStr);
     }
   })
 }


  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getproduct",
    data:{
      productid:des['productid']
    },
    dataType:"json",
    success:function(info){
      // console.log(info);
     productName = info.result[0].productName.split(" ")[0];
      // console.log(productName);
      var htmlStr = template("proTpl",info);
      $('.pro-detail').html(htmlStr);
      renderNav();
    }
  })

  
  
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getproductcom",
    data:{
      productid:des["productid"]
    },
    dataType:"json",
    success:function(info){
      // console.log(info);
      var htmlStr = template("comTpl",info);
      $('.comment').html(htmlStr);
    }
  })
})
$(function(){
  var couponid = getSearch()["couponid"];
  var length ;
  var id;
  var width = $('.imgBox').width;
  // var index = id;//当前图片
  var index ;
  // var prev = length - 1;
  var prev;
  // var next = 1;
  var next;
  // console.log(prev,index,next);
  //发送ajax
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getcouponproduct",
    data:{
      couponid:couponid
    },
    dataType:"json",
    success:function(info){
      console.log(info);
      length = info.result.length;
      console.log(length);
      var htmlStr = template("couponTpl",info);
      $('.coupon-list ul').html(htmlStr);
      var imgStr = template("imgTpl",info);
      $('.imgBox').html(imgStr);
    }
  })

  // 点击优惠券列表,弹出模态框
  $('.coupon-list ul').on("click","li",function(){
    id = $(this).find(".pic").data("index");
    index = id;
    console.log(id);
    setData();
    $('.modal').css("display","block");
    return false;//阻止默认跳转
  })

  // 关闭模态框
  $('.close').on("click",function(){
    $('.modal').css("display","none");
  })

 
    
    function setData(){
    //对inde值进行判断
    if(index > length - 1){
      index = 0;
      }
    if(index < 0){
      index = length - 1;
      }
    //在index值没有越界的情况下,对prev和next值进行赋值
    prev = index - 1;
    next = index + 1;
    console.log(index);
    //对prev和next进行越界判断
    if(prev < 0){
      prev = length - 1;
      }
    if(next > length - 1){
      next = 0;
      }
      //让当前的img显示在imgBox的位置
      $('.imgBox img').eq(index).css({
        transform:"translateX(0)",
      }).addClass('.current').siblings().removeClass('current');
      $('.imgBox img').eq(prev).css({
        transform:"translateX(-100%)",
      });
      $('.imgBox img').eq(next).css({
        transform:"translateX(100%)",
      });
    }
    //点击箭头切换图片
    $('.left').on("click",function(){
      if(length === 1){
        return;
      }
      index++;
      setData();
      // console.log(index,prev,next);
      $('.imgBox img').eq(index).css({
        transform:"translateX(0)",
        transition:"transform 0.3s"
      });
      $('.imgBox img').eq(prev).css({
        transform:"translateX(-100%)",
        transition:"transform 0.3s"
      });
      $('.imgBox img').eq(next).css({
        transform:"translateX("+width+"rem)",
        transition:"none"
      })
    })
    $('.right').on("click",function(){
      if(length === 1){
        return;
      }
      index--;
      setData();
      // console.log(index,prev,next);
      $('.imgBox img').eq(index).css({
        transform:"translateX(0)",
        transition:"transform 0.3s"
      })
      $('.imgBox img').eq(prev).css({
        transform:"translateX(-100%)",
        transition:"none"
      })
      $('.imgBox img').eq(next).css({
        transform:"translateX(100%)",
        transition:"transform 0.3s"
      })
    })
 
})
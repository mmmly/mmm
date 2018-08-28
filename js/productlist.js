$(function(){
  // //定义全局变量currentPage
  // var currentPage;
  // var totalPage;
  var des = getSearch();
  console.log(des);

  //功能2:进入页面,发送请求,渲染导航栏
  $.ajax({
    type:"get",
    url:"http://127.0.0.1:9090/api/getcategorybyid",
    data:{
      categoryid:des.categoryid
    },
    dataType:"json",
    success:function(info){
      var htmlStr = template("navTpl",info);
      $('.bread-nav').html(htmlStr);
    }
  })
  // render();
  url = "http://127.0.0.1:9090/api/getproductlist";
  paging(des,url,1);

  //功能3:根据id获取对应分类的第一页数据,进行渲染
//  function render(page){
//    currentPage = page || 1;
//   $.ajax({
//     type:"get",
//     url:"http://127.0.0.1:9090/api/getproductlist",
//     data:{
//       categoryid :des,
//       pageid : currentPage
//     },
//     dataType:"json",
//     success:function(info){
//       console.log(info);
//       var htmlStr = template("listTpl",info);
//       $('.list-item-detail').html(htmlStr);
//       totalPage = info.totalCount / info.pagesize;
//       // console.log(page);
//       var htmlStr1 = template("pageTpl",{totalPage:totalPage,currentPage:currentPage});
//       // console.log(htmlStr1);
//       $('.currentPage').html(htmlStr1);
//     }
//   })
//  }

//   //点击页码,显示分页
//   $('.currentPage').on("click",function(){
//     $('.currentPage ul').toggleClass('hide');
//   })
//   // var text ;
//   //功能4:点击下方的分页按钮,切换页面
//   $('.currentPage').on("click","li",function(){
//     $(this).parent().toggleClass('hide');
//     text = $(this).text();
//     // console.log(text);
//     var page = $(this).data("page-id");
//     // console.log(page);
//     render(page);
//     //将分页值赋值给当前页码
//     $('.currentPage span').text(text);
//   })

//   //功能5:点击上一页,切换到上一页,若为第一页,则不动
//   $('.prev').on("click",function(){
//     //判断currentPage是否为第一页
//     if(currentPage <= 1){
//       currentPage = 1;
//     }else{
//       currentPage--;
//     }
//     render(currentPage);
//   })

//   //功能6:点击下一页,切换到下一页,判断当前页是否为最后一页
//   $('.next').on("click",function(){
//     if(currentPage >= totalPage){
//       currentPage = totalPage;
//     }else{
//       currentPage++;
//       render(currentPage);
//     }
//   })
})
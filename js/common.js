//功能1:获取地址栏传过来的参数
function getSearch(){
  var str = decodeURI(location.search.slice(1));
  var arr = str.split("&");
  // console.log(arr);
  var des = [];
  var obj = {};
  arr.forEach(function(v,i){
    var key = v.split("=")[0];
    var value = v.split("=")[1];
    obj[key] = value;
  })

  return obj;
}

/*返回顶部功能*/
$('#top').on("click",function(){
  window.scrollTop(0);
})

// 分页功能
//定义全局变量currentPage
function paging (des,url,setPage){
  var currentPage;
  var totalPage;
  render();
 
 console.log(des);
  //功能3:根据id获取对应分类的第一页数据,进行渲染
  function render(page){
    currentPage = page || setPage;
    des["pageid"] = currentPage;
   $.ajax({
     type:"get",
     url:url,
     data:des,
     dataType:"json",
     success:function(info){
       console.log(info);
       var htmlStr = template("listTpl",info);
       $('.list-item-detail').html(htmlStr);
       totalPage = Math.ceil(info.totalCount / info.pagesize);
       console.log(totalPage);
       var htmlStr1 = template("pageTpl",{totalPage:totalPage,currentPage:currentPage});
       // console.log(htmlStr1);
       $('.currentPage').html(htmlStr1);
     }
   })
  }
    window.render = render;
    console.log(window);

   //点击页码,显示分页
   $('.currentPage').on("click",function(){
     $('.currentPage ul').toggleClass('hide');
   })
   // var text ;
   //功能4:点击下方的分页按钮,切换页面
   $('.currentPage').on("click","li",function(){
     $(this).parent().toggleClass('hide');
     text = $(this).text();
     // console.log(text);
     var page = $(this).data("page-id") - 1 + setPage ;
     // console.log(page);
     render(page);
     //将分页值赋值给当前页码
     $('.currentPage span').text(text);
   })
 
   //功能5:点击上一页,切换到上一页,若为第一页,则不动
   $('.prev').on("click",function(){
     //判断currentPage是否为第一页
     if(currentPage <= 0){
       currentPage = 0;
     }else{
       currentPage--;
     }
     render(currentPage);
   })
 
   //功能6:点击下一页,切换到下一页,判断当前页是否为最后一页
   $('.next').on("click",function(){
     if(currentPage >= totalPage - 1 + setPage ){
       currentPage = totalPage;
     }else{
       currentPage++;
       render(currentPage);
     }
   })
   
}
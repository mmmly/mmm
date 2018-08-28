$(function(){
  var des = getSearch("pageid") || 1;
  console.log(des);
  url = "http://127.0.0.1:9090/api/getmoneyctrl";
  paging(des,url,0);
})
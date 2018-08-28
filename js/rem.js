
  function setRem(design){
    var width = window.innerWidth;
    var rate = 100 / design;
    if(width > design){
      width = design;
    }
    if(width < 320){
      width = 320;
    }
    document.querySelector('html').style.fontSize = width * rate + 'px';
  };
  setRem(640);
  //检测屏幕变化,动态设置rem的值
  window.onresize = function(){
    console.log("屏幕有变化");
    setRem(640);
  }

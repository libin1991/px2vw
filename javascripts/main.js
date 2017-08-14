(function() {
  //****************px2vw start****************
  var WIDTH = 640;
  //,FIXED = 5;

  var REG = /([1-9]\d*\.\d*|0\.\d*[1-9]|\d)+px(?!(\s*\)))/gi; //去零正则表达式
  // function trimEnd0(str) { //去掉未尾多余的0.
  //   str = str.replace(/0+$/, '');
  //   var lastIndex = str.length - 1;
  //   return str[lastIndex] !== '.' ? str : str.substr(0, lastIndex);
  // }

  function matchCtrl(width) {
    return function(m) { //replace匹配字符串处理
      m = m.substr(0, m.length - 2);
      m = Number(m);
      m = (m / width) * 100;
      //m = m.toFixed(fixed);
      //return trimEnd0(m.toString()) + 'vw';
      return m + 'vw';
    }
  }

  function px2vw(width, str) {
    width = width || WIDTH;
    return str.replace(REG, matchCtrl(width));
  }

  //****************px2vw end****************

  function $(id){
    return document.getElementById(id)
  }

  var $pxText = $('pxText'),
    $optWidth = $('optWidth'),
    $vwTest = $('vwText'),
    $btn_submit = $('btn_submit');

  // var def_px_text = "@media (max-width: 750px){.test{height:30px;}}";
  // if (!$pxText.value) {
  //   $pxText.value = def_px_text;
  // }


  function to() {
    $vwTest.value = px2vw($optWidth.value, $pxText.value);
  }

  $pxText.addEventListener('input', function() {
    to();
  });

  $btn_submit.addEventListener('click', function(){
    to();
  })

  $vwTest.addEventListener('click', function() {
    $vwTest.select();
  });
  to();
  $pxText.focus();

})();

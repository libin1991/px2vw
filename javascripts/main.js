$(function() {
  //****************px2vw start****************
  //https://github.com/hezedu/px2vw
  var WIDTH = 320;
  //,FIXED = 5;

  var REG = /([1-9]\d*\.\d*|0\.\d*[1-9]\d|\d)+px/gi; //去零正则表达式

  function trimEnd0(str) { //去掉未尾多余的0.
    str = str.replace(/0+$/, '');
    var lastIndex = str.length - 1;
    return str[lastIndex] !== '.' ? str : str.substr(0, lastIndex);
  }

  function matchCtrl(width) {
    return function(m) { //replace匹配字符串处理
      m = m.substr(0, m.length - 2);
      m = Number(m);
      m = (m / width) * 100;
      //m = m.toFixed(fixed);
      return trimEnd0(m.toString()) + 'vw';
    }
  }

  function px2vw(width, str) {
    width = width || WIDTH;
    return str.replace(REG, matchCtrl(width));
  }
  //****************px2vw end****************


  var $pxText = $('#pxText'),
    $optWidth = $('#optWidth'),
    //$optFixed = $('#optFixed'),
    $vwTest = $('#vwText'),
    $btn_submit = $('#btn_submit');

  var def_px_text = ".test{height:30px;}";
  if (!$pxText.val()) {
    $pxText.val(def_px_text);
  }


  function to() {
    $vwTest.val(px2vw($optWidth.val(), $pxText.val()));
  }

  $pxText.on('input', function() {
    to();
  });

  $btn_submit.click(function() {
    to();
  });

  $vwTest.click(function() {
    $vwTest.select();
  });

  to();
  $pxText.focus();
})

$(function() {
  //****************px2vw start**************** 
  //https://github.com/hezedu/px2vw
  var WIDTH = 320,
    FIXED = 5;

  var REG = /([1-9]\d*\.\d*|0\.\d*[1-9]\d|\d)+px/gi; //去零正则表达式

  function trimEnd0(str) { //去掉未尾多余的0.
    str = str.replace(/0+$/, '');
    var lastIndex = str.length - 1;
    return str[lastIndex] !== '.' ? str : str.substr(0, lastIndex);
  }

  function matchCtrl(width, fixed) {
    fixed = fixed || FIXED;
    width = width || WIDTH;
    return function(m) { //replace匹配字符串处理
      m = m.substr(0, m.length - 2);
      m = Number(m);
      m = (m / width) * 100;
      m = m.toFixed(fixed);
      return trimEnd0(m) + 'vw';
    }
  }

  function px2vw(str, opt) {
    opt = opt || {};
    return str.replace(REG, matchCtrl(opt.width, opt.fixed));
  }
  //****************px2vw end****************


  var $pxText = $('#pxText'),
    $optWidth = $('#optWidth'),
    $optFixed = $('#optFixed'),
    $vwTest = $('#vwText'),
    $btn_submit = $('#btn_submit');

  var def_px_text = ".test{height:30px;}";
  if (!$pxText.val()) {
    $pxText.val(def_px_text);
  }


  function getOpt() {
    return {
      width: $optWidth.val(),
      fixed: $optFixed.val()
    };
  }

  function to() {
    var str = $pxText.val(),
      opts = getOpt();
    $vwTest.val(px2vw(str, opts));
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
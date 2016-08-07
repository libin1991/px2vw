//https://github.com/hezedu/px2vw
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
module.exports = px2vw;
},{}]},{},[1]);
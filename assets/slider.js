!function u(l,o,s){function c(r,e){if(!o[r]){if(!l[r]){var t="function"==typeof require&&require;if(!e&&t)return t(r,!0);if(d)return d(r,!0);var i=new Error("Cannot find module '"+r+"'");throw i.code="MODULE_NOT_FOUND",i}var n=o[r]={exports:{}};l[r][0].call(n.exports,function(e){return c(l[r][1][e]||e)},n,n.exports,u,l,o,s)}return o[r].exports}for(var d="function"==typeof require&&require,e=0;e<s.length;e++)c(s[e]);return c}({1:[function(e,r,t){"use strict";function i(e){var r,t=document.querySelector(".ul-slider--view__slides.is-active"),i=Array.from(l).indexOf(t)+e+e,n=document.querySelector(".ul-slider--view__slides:nth-child("+i+")");s<i&&(n=document.querySelector(".ul-slider--view__slides:nth-child(1)")),0==i&&(n=document.querySelector(".ul-slider--view__slides:nth-child("+s+")")),r=n,t.classList.remove("is-active"),r.classList.add("is-active"),u.setAttribute("style","transform:translateX(-"+r.offsetLeft+"px)")}var u=document.querySelector(".ul-slider--view > ul"),l=document.querySelectorAll(".ul-slider--view__slides"),n=document.querySelector(".ul-slider--arrows__left"),o=document.querySelector(".ul-slider--arrows__right"),s=l.length;o.addEventListener("click",function(){return i(1)}),n.addEventListener("click",function(){return i(0)})},{}]},{},[1]);
//# sourceMappingURL=slider.js.map

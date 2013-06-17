/*! function-extended - v0.0.6 - 2013-06-06
 * Copyright (c) 2013 Doug Martin; Licensed MIT */
!function(){"use strict";function a(a,b,c){function d(a,b,c){if(c=o(arguments,2),m(b)&&!(b in a))throw new Error(b+" property not defined in scope");if(!m(b)&&!n(b))throw new Error(b+" is not a function");return m(b)?function(){var d=a[b];if(n(d)){var e=c.concat(o(arguments));return d.apply(a,e)}return d}:c.length?function(){var d=c.concat(o(arguments));return b.apply(a,d)}:function(){return b.apply(a,arguments)}}function e(a,b){if(b=o(arguments,1),!m(a)&&!n(a))throw new Error(a+" must be the name of a property or function to execute");return m(a)?function(){var c=o(arguments),d=c.shift(),e=d[a];return n(e)?(c=b.concat(c),e.apply(d,c)):e}:function(){var c=o(arguments),d=c.shift();return c=b.concat(c),a.apply(d,c)}}function f(a,b,c){if(c=o(arguments,2),m(b)&&!(b in a))throw new Error(b+" property not defined in scope");if(!m(b)&&!n(b))throw new Error(b+" is not a function");return m(b)?function(){var d=a[b];return n(d)?d.apply(a,c):d}:function(){return b.apply(a,c)}}function g(a){var b=o(arguments,1);if(!l(a)&&!n(a))throw new TypeError("scope must be an object");if(1===b.length&&k(b[0])&&(b=b[0]),!b.length){b=[];for(var c in a)a.hasOwnProperty(c)&&n(a[c])&&b.push(c)}for(var e=0,f=b.length;f>e;e++)a[b[e]]=d(a,a[b[e]]);return a}function h(a,b){if(b=o(arguments,1),!m(a)&&!n(a))throw new Error(a+" must be the name of a property or function to execute");return m(a)?function(){var c=this[a];if(n(c)){var d=b.concat(o(arguments));return c.apply(this,d)}return c}:function(){var c=b.concat(o(arguments));return a.apply(this,c)}}function i(a,b){return function(){var c=o(arguments);return b?a.apply(this,arguments):function(){return a.apply(this,c.concat(o(arguments)))}}}function j(a,b,c){var e;if(e=c?d(c,b):b,a)for(var f=a-1,g=f;g>=0;g--)e=i(e,g===f);return e}var k=b.isArray,l=b.isObject,m=b.isString,n=b.isFunction,o=c.argsToArray;return a.define(l,{bind:d,bindAll:g,bindIgnore:f,curry:function(a,b,c){return j(b,c,a)}}).define(n,{bind:function(a,b){return d.apply(this,[b,a].concat(o(arguments,2)))},bindIgnore:function(a,b){return f.apply(this,[b,a].concat(o(arguments,2)))},partial:h,applyFirst:e,curry:function(a,b,c){return j(b,a,c)},noWrap:{f:function(){return this.value()}}}).define(m,{bind:function(a,b){return d(b,a)},bindIgnore:function(a,b){return f(b,a)},partial:h,applyFirst:e,curry:function(a,b,c){return j(b,a,c)}}).expose({bind:d,bindAll:g,bindIgnore:f,partial:h,applyFirst:e,curry:j})}"undefined"!=typeof exports?"undefined"!=typeof module&&module.exports&&(module.exports=a(require("extended"),require("is-extended"),require("arguments-extended"))):"function"==typeof define&&define.amd?define(["../../../","is-extended","arguments-extended"],function(b,c,d){return a(b,c,d)}):this.functionExtended=a(this.extended,this.isExtended,this.argumentsExtended)}.call(this);
/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2013 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 2.2.5
*/
(function(e){void 0==e.fn.inputmask&&(e.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},escapeChar:"\\",mask:null,oncomplete:e.noop,onincomplete:e.noop,oncleared:e.noop,repeat:0,greedy:!0,autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},onKeyUp:e.noop,onKeyDown:e.noop,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:e.noop,skipOptionalPartCharacter:" ",showTooltip:!1,numericInput:!1,radixPoint:"",rightAlignNumerics:!0,definitions:{9:{validator:"[0-9]",
cardinality:1},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451]",cardinality:1},"*":{validator:"[A-Za-z\u0410-\u044f\u0401\u04510-9]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,
TAB:9,UP:38,WINDOWS:91},ignorables:[9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123],getMaskLength:function(e,E,P){var M=e.length;!E&&1<P&&(M+=e.length*(P-1));return M}},val:e.fn.val,escapeRegex:function(e){return e.replace(RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\)","gim"),"\\$1")}},e.fn.inputmask=function(x,E){var P,M;function J(b,c){var f=a.aliases[b];return f?(f.alias&&J(f.alias),e.extend(!0,a,f),e.extend(!0,a,c),!0):!1}function N(b){var c=
!1,f=0,k=a.greedy,n=a.repeat;1==b.length&&!1==k&&(a.placeholder="");for(var b=e.map(b.split(""),function(b){var e=[];if(b==a.escapeChar)c=true;else if(b!=a.optionalmarker.start&&b!=a.optionalmarker.end||c){var n=a.definitions[b];if(n&&!c)for(b=0;b<n.cardinality;b++)e.push(F(f+b));else{e.push(b);c=false}f=f+e.length;return e}}),s=b.slice(),g=1;g<n&&k;g++)s=s.concat(b.slice());return{mask:s,repeat:n,greedy:k}}function R(b){var c=!1,f=!1,k=!1;return e.map(b.split(""),function(b){var e=[];if(b==a.escapeChar)f=
!0;else if(b==a.optionalmarker.start&&!f)k=c=!0;else if(b==a.optionalmarker.end&&!f)c=!1,k=!0;else{var g=a.definitions[b];if(g&&!f){for(var j=g.prevalidator,h=j?j.length:0,o=1;o<g.cardinality;o++){var d=h>=o?j[o-1]:[],l=d.validator,d=d.cardinality;e.push({fn:l?"string"==typeof l?RegExp(l):new function(){this.test=l}:/./,cardinality:d?d:1,optionality:c,newBlockMarker:!0==c?k:!1,offset:0,casing:g.casing,def:g.definitionSymbol|b});!0==c&&(k=!1)}e.push({fn:g.validator?"string"==typeof g.validator?RegExp(g.validator):
new function(){this.test=g.validator}:/./,cardinality:g.cardinality,optionality:c,newBlockMarker:k,offset:0,casing:g.casing,def:g.definitionSymbol|b})}else e.push({fn:null,cardinality:0,optionality:c,newBlockMarker:k,offset:0,casing:null,def:b}),f=!1;k=!1;return e}})}function V(){function b(b){var c=b.length;for(i=0;i<c&&b.charAt(i)!=a.optionalmarker.start;i++);var f=[b.substring(0,i)];i<c&&f.push(b.substring(i+1,c));return f}function c(e,l){var g=0,j=0,h=l.length;for(i=0;i<h&&!(l.charAt(i)==a.optionalmarker.start&&
g++,l.charAt(i)==a.optionalmarker.end&&j++,0<g&&g==j);i++);g=[l.substring(0,i)];i<h&&g.push(l.substring(i+1,h));var o=b(g[0]);if(1<o.length){if(h=e+o[0]+(a.optionalmarker.start+o[1]+a.optionalmarker.end)+(1<g.length?g[1]:""),-1==k.indexOf(h)&&(k.push(h),j=N(h),f.push({mask:h,_buffer:j.mask,tests:R(h),lastValidPosition:void 0,greedy:j.greedy,repeat:j.repeat})),h=e+o[0]+(1<g.length?g[1]:""),-1==k.indexOf(h)&&(k.push(h),j=N(h),f.push({mask:h,_buffer:j.mask,tests:R(h),lastValidPosition:void 0,greedy:j.greedy,
repeat:j.repeat})),1<b(o[1]).length&&c(e+o[0],o[1]+g[1]),1<g.length&&1<b(g[1]).length)c(e+o[0]+(a.optionalmarker.start+o[1]+a.optionalmarker.end),g[1]),c(e+o[0],g[1])}else h=e+g,-1==k.indexOf(h)&&(k.push(h),j=N(h),f.push({mask:h,_buffer:j.mask,tests:R(h),lastValidPosition:void 0,greedy:j.greedy,repeat:j.repeat}))}var f=[],k=[];e.isArray(a.mask)?e.each(a.mask,function(b,a){c("",a.toString())}):c("",a.mask.toString());return f}function y(){return t[p]}function G(){return y().tests}function l(){return y()._buffer}
function H(b,c,f,k,n){function l(b,d){for(var e=B(b),g=c?1:0,h="",n=d.tests[e].cardinality;n>g;n--)h+=A(f,e-(n-1));c&&(h+=c);return null!=d.tests[e].fn?d.tests[e].fn.test(h,f,b,k,a):!1}if(k)return l(b,y());var g=[],j=!1,h=p;e.each(t,function(e){p=e;var d=b;if(h!=p&&!z(b)){if(c==this._buffer[d]||c==a.skipOptionalPartCharacter)return g[e]={refresh:!0},this.lastValidPosition=d,!1;d=n?K(f,b):w(f,b)}if(((void 0==this.lastValidPosition&&d==n?K(f,q(f)):w(f,-1))||n||a.numericInput?this.lastValidPosition<=
a.numericInput?q(f):w(f,d):this.lastValidPosition>=K(f,d))&&0<=d&&d<q(f))g[e]=l(d,this),!1!==g[e]?(!0===g[e]&&(g[e]={pos:d}),this.lastValidPosition=g[e].pos||d):this.lastValidPosition=n?b==q(f)?void 0:w(f,b):0==b?void 0:K(f,b)});p=h;S(f,b,h,n);j=g[p]||j;setTimeout(function(){a.onKeyValidation.call(this,j,a)},0);return j}function S(b,c,f,k){e.each(t,function(e){if(this.lastValidPosition&&(k||a.numericInput)?this.lastValidPosition<=c:this.lastValidPosition>=c){p=e;if(p!=f){var e=q(b),s=l();if(k||a.numericInput)b.reverse(),
s.reverse();for(var g=b.length=c;g<e;g++){var j=B(g);I(b,g,A(s,j))}k&&b.reverse()}return!1}})}function z(b){b=B(b);b=G()[b];return void 0!=b?b.fn:!1}function B(b){return b%G().length}function F(b){return a.placeholder.charAt(b%a.placeholder.length)}function q(b){return a.getMaskLength(l(),y().greedy,y().repeat,b,a)}function w(b,c){var a=q(b);if(c>=a)return a;for(var e=c;++e<a&&!z(e););return e}function K(b,c){var a=c;if(0>=a)return 0;for(;0<--a&&!z(a););return a}function I(b,c,a){var e=G()[B(c)],
n=a;if(void 0!=n)switch(e.casing){case "upper":n=a.toUpperCase();break;case "lower":n=a.toLowerCase()}b[c]=n}function A(b,c,a){a&&(c=W(b,c));return b[c]}function W(b,c,a){if(a)for(;0>c&&b.length<q(b);){a=l().length-1;for(c=l().length;void 0!==l()[a];)b.unshift(l()[a--])}else for(;void 0==b[c]&&b.length<q(b);)for(a=0;void 0!==l()[a];)b.push(l()[a++]);return c}function C(b,a,e){b._valueSet(a.join(""));void 0!=e&&r(b,e)}function X(b,a,e){for(var k=q(b);a<e&&a<k;a++)I(b,a,A(l().slice(),a))}function O(b,
a){var e=B(a);I(b,a,A(l(),e))}function D(b,c,f,k){var n=e(b).data("inputmask").isRTL,s=T(b._valueGet(),n).split(""),g=q(c);if(n){var j=s.reverse();j.length=g;for(var h=0;h<g;h++){var o=B(g-(h+1));null==G()[o].fn&&j[h]!=A(l(),o)?(j.splice(h,0,A(l(),o)),j.length=g):j[h]=j[h]||A(l(),o)}s=j.reverse()}X(c,0,c.length);c.length=l().length;for(var d=j=-1,p,r=s.length,o=0==r?g:-1,h=0;h<r;h++)for(var u=d+1;u<g;u++)if(z(u)){var t=s[h];!1!==(p=H(u,t,c,!f,n))?(!0!==p&&(u=void 0!=p.pos?p.pos:u,t=void 0!=p.c?p.c:
t),I(c,u,t),j=d=u):(O(c,u),t==F(u)&&(o=d=u));break}else if(O(c,u),j==d&&(j=u),d=u,s[h]==A(c,u))break;if(!1==y().greedy){h=T(c.join(""),n).split("");s=h.length;for(d=0;d<s;d++)c[d]=h[d];c.length=h.length}f&&C(b,c);return n?a.numericInput?""!=a.radixPoint&&-1!=e.inArray(a.radixPoint,c)&&!0!==k?e.inArray(a.radixPoint,c):w(c,g):w(c,o):w(c,j)}function $(b){return e.inputmask.escapeRegex.call(this,b)}function T(b,a){return a?b.replace(RegExp("^("+$(l().join(""))+")*"),""):b.replace(RegExp("("+$(l().join(""))+
")*$"),"")}function Y(b,a){D(b,a,!1);var f=a.slice(),k,n;if(e(b).data("inputmask").isRTL)for(n=0;n<=f.length-1;n++)if(k=B(n),G()[k].optionality)if(!z(n)||!H(n,a[n],a,!0))f.splice(0,1);else break;else break;else for(n=f.length-1;0<=n;n--)if(k=B(n),G()[k].optionality)if(!z(n)||!H(n,a[n],a,!0))f.pop();else break;else break;C(b,f)}function aa(a,c){var f=a[0];if(G()&&(!0===c||!a.hasClass("hasDatepicker"))){var k=l().slice();D(f,k);return e.map(k,function(a,b){return z(b)&&H(b,a,k,!0)?a:null}).join("")}return f._valueGet()}
function r(b,c,f){var k=b.jquery&&0<b.length?b[0]:b;if("number"==typeof c)e(b).is(":visible")&&(f="number"==typeof f?f:c,!1==a.insertMode&&c==f&&f++,k.setSelectionRange?U?(setTimeout(function(){k.selectionStart=c;k.selectionEnd=U?c:f},10),P=c,M=f):(k.selectionStart=c,k.selectionEnd=f):k.createTextRange&&(range=k.createTextRange(),range.collapse(!0),range.moveEnd("character",f),range.moveStart("character",c),range.select()));else{if(!e(b).is(":visible"))return{begin:0,end:0};k.setSelectionRange?(c=
k.selectionStart,f=k.selectionEnd):document.selection&&document.selection.createRange&&(range=document.selection.createRange(),c=0-range.duplicate().moveStart("character",-1E5),f=c+range.text.length);return{begin:c,end:f}}}function Q(a){var c=!1,f=0,k=p;e.each(t,function(e,k){p=e;var g=q(a);if(k.lastValidPosition&&k.lastValidPosition>=f&&k.lastValidPosition==g-1){for(var j=!0,h=0;h<g;h++){var o=z(h);if(o&&a[h]==F(h)||!o&&a[h]!=l()[h]){j=!1;break}}if(c=c||j)return!1}f=k.lastValidPosition});p=k;return c}
function Z(b){function c(a){a=e._data(a).events;e.each(a,function(a,b){e.each(b,function(a,b){if("inputmask"==b.namespace){var d=b.handler;b.handler=function(){return this.readOnly||this.disabled?!1:d.apply(this,arguments)}}})})}function f(a){var b;Object.getOwnPropertyDescriptor&&(b=Object.getOwnPropertyDescriptor(a,"value"));if(b&&b.get)a._valueGet||(a._valueGet=b.get,a._valueSet=b.set,Object.defineProperty(a,"value",{get:function(){var a=e(this),b=e(this).data("inputmask"),d=b.masksets,c=b.activeMasksetIndex;
return b&&b.autoUnmask?a.inputmask("unmaskedvalue"):this._valueGet()!=d[c]._buffer.join("")?this._valueGet():""},set:function(a){this._valueSet(a);e(this).triggerHandler("setvalue.inputmask")}}));else if(document.__lookupGetter__&&a.__lookupGetter__("value"))a._valueGet||(a._valueGet=a.__lookupGetter__("value"),a._valueSet=a.__lookupSetter__("value"),a.__defineGetter__("value",function(){var a=e(this),b=e(this).data("inputmask"),d=b.masksets,c=b.activeMasksetIndex;return b&&b.autoUnmask?a.inputmask("unmaskedvalue"):
this._valueGet()!=d[c]._buffer.join("")?this._valueGet():""}),a.__defineSetter__("value",function(a){this._valueSet(a);e(this).triggerHandler("setvalue.inputmask")}));else if(a._valueGet||(a._valueGet=function(){return this.value},a._valueSet=function(a){this.value=a}),!0!=e.fn.val.inputmaskpatch)e.fn.val=function(){if(arguments.length==0){var a=e(this);if(a.data("inputmask")){if(a.data("inputmask").autoUnmask)return a.inputmask("unmaskedvalue");var a=e.inputmask.val.apply(a),b=e(this).data("inputmask");
return a!=b.masksets[b.activeMasksetIndex]._buffer.join("")?a:""}return e.inputmask.val.apply(a)}var d=arguments;return this.each(function(){var a=e(this),b=e.inputmask.val.apply(a,d);a.data("inputmask")&&a.triggerHandler("setvalue.inputmask");return b})},e.extend(e.fn.val,{inputmaskpatch:!0})}function k(b,d){if(a.numericInput&&""!=a.radixPoint){var e=b._valueGet().indexOf(a.radixPoint);v=d.begin<=e||d.end<=e||-1==e}}function n(a,b,e){for(;!z(a)&&0<=a-1;)a--;for(var c=a;c<b&&c<q(d);c++)if(z(c)){O(d,
c);var f=w(d,c),h=A(d,f);if(h!=F(f))if(f<q(d)&&!1!==H(c,h,d,!0,v)&&G()[B(c)].def==G()[B(f)].def)I(d,c,A(d,f)),O(d,f);else{if(z(c))break}else if(void 0==e)break}else O(d,c);void 0!=e&&I(d,v?b:K(d,b),e);d=T(d.join(""),v).split("");0==d.length&&(d=l().slice());return a}function s(a,b,c,e){for(;a<=b&&a<q(d);a++)if(z(a)){var f=A(d,a);I(d,a,c);if(f!=F(a))if(c=w(d,a),c<q(d))if(!1!==H(c,f,d,!0,v)&&G()[B(a)].def==G()[B(c)].def)c=f;else if(z(c))break;else c=f;else break;else if(!0!==e)break}else O(d,a);e=d.length;
d=T(d.join(""),v).split("");0==d.length&&(d=l().slice());return b-(e-d.length)}function g(b){u=!1;var c=this,f=b.keyCode,h=r(c);k(c,h);if(f==a.keyCode.BACKSPACE||f==a.keyCode.DELETE||ca&&127==f){var g=q(d),j=w(d,-1);if(0==h.begin&&h.end==g)p=0,d=l().slice(),C(c,d),r(c,D(c,d,!1));else if(1<h.end-h.begin||1==h.end-h.begin&&a.insertMode)X(d,h.begin,h.end),S(d,h.begin,p),C(c,d,v?D(c,d,!1):h.begin);else{var m=ba?h.end:h.begin;f==a.keyCode.DELETE?(m<j&&(m=j),m<g&&(a.numericInput&&""!=a.radixPoint&&d[m]==
a.radixPoint?(m=d.length-1==m?m:w(d,m),m=n(m,g)):v?(m=s(j,m,F(m),!0),m=w(d,m)):m=n(m,g),S(d,m,p),C(c,d,m))):f==a.keyCode.BACKSPACE&&(m>j?(m-=1,a.numericInput&&""!=a.radixPoint&&d[m]==a.radixPoint?(m=s(j,d.length-1==m?m:m-1,F(m),!0),m++):v?(m=s(j,m,F(m),!0),m=d[m+1]==a.radixPoint?m+1:w(d,m)):m=n(m,g),S(d,m,p),C(c,d,m)):0<p&&(m=n(m-1,g),p=0,C(c,l(),m)))}c._valueGet()==l().join("")&&e(c).trigger("cleared");a.showTooltip&&o.prop("title",y().mask);b.preventDefault()}else f==a.keyCode.END||f==a.keyCode.PAGE_DOWN?
setTimeout(function(){var e=D(c,d,!1,!0);!a.insertMode&&(e==q(d)&&!b.shiftKey)&&e--;r(c,b.shiftKey?h.begin:e,e)},0):f==a.keyCode.HOME&&!b.shiftKey||f==a.keyCode.PAGE_UP?r(c,0,b.shiftKey?h.begin:0):f==a.keyCode.ESCAPE?(c._valueSet(E),r(c,0,D(c,d))):f==a.keyCode.INSERT?(a.insertMode=!a.insertMode,r(c,!a.insertMode&&h.begin==q(d)?h.begin-1:h.begin)):b.ctrlKey&&88==f?setTimeout(function(){r(c,D(c,d,!0))},0):a.insertMode||(f==a.keyCode.RIGHT?(g=h.begin==h.end?h.end+1:h.end,g=g<q(d)?g:h.end,r(c,b.shiftKey?
h.begin:g,b.shiftKey?g+1:g)):f==a.keyCode.LEFT&&(g=h.begin-1,g=0<g?g:0,r(c,g,b.shiftKey?h.end:g)));a.onKeyDown.call(this,b,d,a);J=-1!=e.inArray(f,a.ignorables)}function j(b){if(u)return!1;u=!0;var c=e(this),b=b||window.event,f=b.which||b.charCode||b.keyCode,h=String.fromCharCode(f);if(a.numericInput&&h==a.radixPoint){var g=this._valueGet().indexOf(a.radixPoint);r(this,w(d,-1!=g?g:q(d)))}if(b.metaKey||J)return!0;if(f){var k=r(this),m=q(d),f=!0;X(d,k.begin,k.end);if(v){var g=K(d,k.end),j;if(!1!==(j=
H(g==m||A(d,g)==a.radixPoint?K(d,g):g,h,d,!1,v))){var l=!1;!0!==j&&(l=j.refresh,g=void 0!=j.pos?j.pos:g,h=void 0!=j.c?j.c:h);if(!0!==l){var m=q(d),o=w(d,-1);j=o;if(!0==a.insertMode){if(!0==y().greedy)for(l=d.slice();A(l,j,!0)!=F(j)&&j<=g;)j=j==m?m+1:w(d,j);j<=g&&(y().greedy||d.length<m)?(d[o]!=F(o)&&d.length<m&&(l=W(d,-1,v),0!=k.end&&(g+=l),m=d.length),n(j,g,h)):f=!1}else I(d,g,h)}f&&(C(this,d,a.numericInput?g+1:g),setTimeout(function(){Q(d)&&c.trigger("complete")},0))}}else if(g=w(d,k.begin-1),W(d,
g,v),!1!==(j=H(g,h,d,!1,v))){l=!1;!0!==j&&(l=j.refresh,g=void 0!=j.pos?j.pos:g,h=void 0!=j.c?j.c:h);if(!0!==l)if(!0==a.insertMode){k=q(d);for(l=d.slice();A(l,k,!0)!=F(k)&&k>=g;)k=0==k?-1:K(d,k);k>=g?s(g,d.length,h):f=!1}else I(d,g,h);f&&(h=w(d,g),C(this,d,h),setTimeout(function(){Q(d)&&c.trigger("complete")},0))}U&&r(this,P,M);a.showTooltip&&c.prop("title",y().mask);b.preventDefault()}}function h(b){var c=e(this),f=b.keyCode;a.onKeyUp.call(this,b,d,a);f==a.keyCode.TAB&&(c.hasClass("focus.inputmask")&&
0==this._valueGet().length&&a.showMaskOnFocus)&&(d=l().slice(),C(this,d),v||r(this,0),E=this._valueGet())}var o=e(b);if(o.is(":input")){a.showTooltip&&o.prop("title",y().mask);var d=l().slice();y().greedy=y().greedy?y().greedy:0==y().repeat;var x=o.prop("maxLength");q(d)>x&&-1<x&&(x<l().length&&(l().length=x),!1==y().greedy&&(y().repeat=Math.round(x/l().length)),o.prop("maxLength",2*q(d)));o.data("inputmask",{masksets:t,activeMasksetIndex:p,opts:a,isRTL:!1});f(b);var E=b._valueGet(),u=!1,J=!1,L=-1,
v=!1;if("rtl"==b.dir||a.numericInput)("rtl"==b.dir||a.numericInput&&a.rightAlignNumerics)&&o.css("text-align","right"),b.dir="ltr",o.removeAttr("dir"),x=o.data("inputmask"),x.isRTL=!0,o.data("inputmask",x),v=!0;o.unbind(".inputmask");o.removeClass("focus.inputmask");o.bind("mouseenter.inputmask",function(){if(!e(this).hasClass("focus.inputmask")&&a.showMaskOnHover){var b=this._valueGet().length;if(b<d.length){b==0&&(d=l().slice());C(this,d)}}}).bind("blur.inputmask",function(){var b=e(this),c=this._valueGet();
b.removeClass("focus.inputmask");c!=E&&b.change();a.clearMaskOnLostFocus&&c!=""&&(c==l().join("")?this._valueSet(""):Y(this,d));if(!Q(d)){b.trigger("incomplete");if(a.clearIncomplete)if(a.clearMaskOnLostFocus)this._valueSet("");else{d=l().slice();C(this,d)}}}).bind("focus.inputmask",function(){var b=e(this),c=this._valueGet();if(a.showMaskOnFocus&&!b.hasClass("focus.inputmask")&&(!a.showMaskOnHover||a.showMaskOnHover&&c=="")){c=c.length;if(c<d.length){c==0&&(d=l().slice());r(this,D(this,d,true))}}b.addClass("focus.inputmask");
E=this._valueGet()}).bind("mouseleave.inputmask",function(){var b=e(this);a.clearMaskOnLostFocus&&(b.hasClass("focus.inputmask")||(this._valueGet()==l().join("")||this._valueGet()==""?this._valueSet(""):Y(this,d)))}).bind("click.inputmask",function(){var a=this;setTimeout(function(){var b=r(a);if(b.begin==b.end){var c=b.begin;L=D(a,d,false);k(a,b);v?r(a,c>L&&(H(c,d[c],d,true,v)!==false||!z(c))?c:L):r(a,c<L&&(H(c,d[c],d,true,v)!==false||!z(c))?c:L)}},0)}).bind("dblclick.inputmask",function(){var a=
this;setTimeout(function(){r(a,0,L)},0)}).bind("keydown.inputmask",g).bind("keypress.inputmask",j).bind("keyup.inputmask",h).bind(da+".inputmask dragdrop.inputmask drop.inputmask",function(){var a=this;setTimeout(function(){r(a,D(a,d,true));Q(d)&&o.trigger("complete")},0)}).bind("setvalue.inputmask",function(){E=this._valueGet();D(this,d,true);this._valueGet()==l().join("")&&this._valueSet("")}).bind("complete.inputmask",a.oncomplete).bind("incomplete.inputmask",a.onincomplete).bind("cleared.inputmask",
a.oncleared);var L=D(b,d,!0),N;try{N=document.activeElement}catch(R){}N===b?(o.addClass("focus.inputmask"),r(b,L)):a.clearMaskOnLostFocus&&(b._valueGet()==l().join("")?b._valueSet(""):Y(b,d));c(b)}}var a=e.extend(!0,{},e.inputmask.defaults,E),da=function(a){var c=document.createElement("input"),a="on"+a,e=a in c;e||(c.setAttribute(a,"return;"),e="function"==typeof c[a]);return e}("paste")?"paste":"input",ca=null!=navigator.userAgent.match(/iphone/i),U=null!=navigator.userAgent.match(/android.*safari.*/i),
ba;if(U){var ea=navigator.userAgent.match(/safari.*/i);ba=533>=parseInt(RegExp(/[0-9]+/).exec(ea))}var t,p=0;if("string"==typeof x)switch(x){case "mask":return J(a.alias,E),t=V(),this.each(function(){Z(this)});case "unmaskedvalue":return t=this.data("inputmask").masksets,p=this.data("inputmask").activeMasksetIndex,a=this.data("inputmask").opts,aa(this);case "remove":return this.each(function(){var b=e(this),c=this;setTimeout(function(){if(b.data("inputmask")){t=b.data("inputmask").masksets;p=b.data("inputmask").activeMasksetIndex;
a=b.data("inputmask").opts;c._valueSet(aa(b,!0));b.removeData("inputmask");b.unbind(".inputmask");b.removeClass("focus.inputmask");var e;Object.getOwnPropertyDescriptor&&(e=Object.getOwnPropertyDescriptor(c,"value"));e&&e.get?c._valueGet&&Object.defineProperty(c,"value",{get:c._valueGet,set:c._valueSet}):document.__lookupGetter__&&c.__lookupGetter__("value")&&c._valueGet&&(c.__defineGetter__("value",c._valueGet),c.__defineSetter__("value",c._valueSet));delete c._valueGet;delete c._valueSet}},0)});
case "getemptymask":return this.data("inputmask")?(t=this.data("inputmask").masksets,p=this.data("inputmask").activeMasksetIndex,t[p]._buffer.join("")):"";case "hasMaskedValue":return this.data("inputmask")?!this.data("inputmask").opts.autoUnmask:!1;case "isComplete":return t=this.data("inputmask").masksets,p=this.data("inputmask").activeMasksetIndex,a=this.data("inputmask").opts,Q(this[0]._valueGet().split(""));default:return J(x,E)||(a.mask=x),t=V(),this.each(function(){Z(this)})}else{if("object"==
typeof x)return a=e.extend(!0,{},e.inputmask.defaults,x),J(a.alias,x),t=V(),this.each(function(){Z(this)});if(void 0==x)return this.each(function(){var b=e(this).attr("data-inputmask");if(b&&""!=b)try{var b=b.replace(RegExp("'","g"),'"'),c=e.parseJSON("{"+b+"}");a=e.extend(!0,{},e.inputmask.defaults,c);J(a.alias,c);a.alias=void 0;e(this).inputmask(a)}catch(f){}})}return this})})(jQuery);

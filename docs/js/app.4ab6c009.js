(function(t){function n(n){for(var r,i,c=n[0],u=n[1],l=n[2],f=0,p=[];f<c.length;f++)i=c[f],o[i]&&p.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);s&&s(n);while(p.length)p.shift()();return a.push.apply(a,l||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],r=!0,c=1;c<e.length;c++){var u=e[c];0!==o[u]&&(r=!1)}r&&(a.splice(n--,1),t=i(i.s=e[0]))}return t}var r={},o={app:0},a=[];function i(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=r,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)i.d(e,r,function(n){return t[n]}.bind(null,r));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/converter/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=n,c=c.slice();for(var l=0;l<c.length;l++)n(c[l]);var s=u;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("cd49")},"0cfb":function(t,n,e){},cd49:function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{display:"flex","flex-direction":"column"},attrs:{id:"app"}},[e("div",{staticClass:"banner"},[t._v("JACOBS TEXT MAGIC")]),e("div",{staticClass:"row grow"},[e("div",{staticClass:"relative grow col"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],ref:"input",staticClass:"input text",domProps:{value:t.input},on:{input:function(n){n.target.composing||(t.input=n.target.value)}}})]),e("div",{staticClass:"output text grow col"},[t._v(t._s(t.output))])])])},a=[],i=e("d225"),c=e("b0b4"),u=e("308d"),l=e("6bb5"),s=e("4e2b"),f=e("9ab4"),p=e("60a3"),d=(e("28a5"),e("e814")),v=e.n(d),b=(e("ac6a"),e("768b")),h=(e("6b54"),e("4917"),e("3b2b"),"R([0-9])+"),m=" +",w="([0-9]+)",g=new RegExp("^".concat(h).concat(m).concat(h).concat(m).concat(h,"$")),y=new RegExp("^".concat(h).concat(m).concat(h,"$")),j=new RegExp("^".concat(h).concat(m).concat(w,"$")),O=/^([0-9a-zA-Z]+)(.*?)$/,x=/^$/,E=function(t){return[[t[1],1],[t[2],2]]},_=function(t){return[[t[1],1],[t[2],1]]},k=function(t){return[[t[1],1],[t[2],1],[t[3],1]]},S={mov1:[j,E],mov2:[j,E],mov3:[y,_],mov4:[j,E],add:[g,k],sub:[g,k],jz:[j,E],halt:[x,function(){return[]}],mul:[g,k]},C={mov1:0,mov2:1,mov3:2,mov4:3,add:4,sub:5,jz:6,halt:15,mul:8},$=function(t){if(t=t.trim(),!t)return"";var n=t.match(O);if(!n)throw Error("Unable to parse line");var e=n[1];if(t=n[2].trim(),!(e in S))throw Error("Unknown instruction: ".concat(e));var r=e,o=C[r].toString(16),a=S[r];if(null!==a){var i=Object(b["a"])(a,2),c=i[0],u=i[1];if(n=t.match(c),null===n)throw Error('Unable to parse arguments for "'.concat(e,'": "').concat(t,'"'));u(n).forEach(function(t){var n=Object(b["a"])(t,2),e=n[0],r=n[1],a=v()(e,10).toString(16);while(a.length!==r)a="0"+a;o+=a})}while(o.length<4)o+="0";if(o.length>4)throw Error("Bad parser");return o.toUpperCase()},P=function(t){return t.split("\n").map($).join("\n")},M=function(t){function n(){var t;return Object(i["a"])(this,n),t=Object(u["a"])(this,Object(l["a"])(n).apply(this,arguments)),t.input="",t.output="",t}return Object(s["a"])(n,t),Object(c["a"])(n,[{key:"mounted",value:function(){window.addEventListener("keydown",this.parse);var t=this.$refs.input;t.focus()}},{key:"destroyed",value:function(){window.removeEventListener("keydown",this.parse)}},{key:"parse",value:function(t){if(83===t.which&&t.ctrlKey){t.preventDefault();try{this.output=P(this.input)}catch(n){this.output=n.message}}}}]),n}(p["b"]);M=f["a"]([p["a"]],M);var T=M,R=T,U=(e("cf25"),e("2877")),z=Object(U["a"])(R,o,a,!1,null,null,null),A=z.exports;r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(A)}}).$mount("#app")},cf25:function(t,n,e){"use strict";var r=e("0cfb"),o=e.n(r);o.a}});
//# sourceMappingURL=app.4ab6c009.js.map
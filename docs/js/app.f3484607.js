(function(t){function e(e){for(var r,a,s=e[0],u=e[1],c=e[2],p=0,d=[];p<s.length;p++)a=s[p],i[a]&&d.push(i[a][0]),i[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==i[u]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/assembly/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0fbb":function(t,e,n){},"1c7d":function(t,e,n){"use strict";var r=n("72e7"),i=n.n(r);i.a},"2f8f":function(t,e,n){},"72e7":function(t,e,n){},"9ef1":function(t,e,n){"use strict";var r=n("2f8f"),i=n.n(r);i.a},bb93:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=n("bb71");n("da64");r["default"].use(i["a"],{iconfont:"md"});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-content",[n("router-view")],1)],1)},a=[],s=n("d225"),u=n("308d"),c=n("6bb5"),l=n("4e2b"),p=n("9ab4"),d=n("60a3"),f=function(t){function e(){return Object(s["a"])(this,e),Object(u["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(d["c"]);f=p["a"]([d["a"]],f);var v=f,h=v,g=(n("cf25"),n("2877")),b=n("6544"),m=n.n(b),y=n("7496"),j=n("549c"),w=Object(g["a"])(h,o,a,!1,null,null,null),O=w.exports;m()(w,{VApp:y["a"],VContent:j["a"]});var k=n("8c4f"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex","flex-direction":"column"},attrs:{id:"app"}},[n("div",{staticClass:"banner"},[t._v("JACOBS TEXT MAGIC")]),n("div",{staticClass:"row grow"},[n("editor",{staticClass:"input grow col",attrs:{"highlight-line":t.highlightLine,outline:"",autofocus:"",copy:""},on:{copy:t.copyUrl},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),n("div",{staticClass:"col grow"},[n("editor",{staticClass:"output",style:t.editorStyle,attrs:{outline:"",value:t.output,readonly:""}}),n("div",{staticClass:"dragger-wrapper"},[n("drag-element",{staticClass:"dragger",attrs:{cursor:"ns-resize"},on:{move:t.resizeRightSide}})],1),n("debugger",{style:t.debugStyle,attrs:{program:t.program,debugging:t.debugging},on:{"update:debugging":function(e){t.debugging=e},compile:t.parse,debug:t.debug}})],1)],1),n("v-snackbar",{model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t._v("Copied URL to clipboard.")])],1)},L=[],E=(n("386d"),n("b0b4")),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor"},[n("v-textarea",t._b({ref:"input",staticClass:"textarea",attrs:{value:t.value,"no-resize":"","append-icon":t.copy?"file_copy":void 0},on:{input:t.input,keydown:t.keydown,"click:append":t.appendCb}},"v-textarea",t.$attrs,!1))],1)},_=[],$=(n("c5f6"),n("774e")),S=n.n($),M=(n("28a5"),function(t){function e(){return Object(s["a"])(this,e),Object(u["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(E["a"])(e,[{key:"mounted",value:function(){this.styleLine()}},{key:"input",value:function(t){this.$emit("input",t)}},{key:"keydown",value:function(t){9===t.which&&(t.preventDefault(),this.$emit("input",this.value+"    "))}},{key:"appendCb",value:function(t){this.copy&&this.$emit("copy",t)}},{key:"styleLine",value:function(){if(void 0!==this.highlightLine){for(var t=this.value.split("\n"),e=0,n=0;n<t.length;n++){if(n===this.highlightLine)break;e+=t[n].length+1}var r=t[this.highlightLine].length+e,i=this.$el,o=S()(i.getElementsByTagName("textarea"))[0];o.focus(),o.selectionStart=e,o.selectionEnd=r}}}]),e}(d["c"]));p["a"]([Object(d["b"])({type:String,required:!0})],M.prototype,"value",void 0),p["a"]([Object(d["b"])(Boolean)],M.prototype,"copy",void 0),p["a"]([Object(d["b"])({type:Number,required:!1})],M.prototype,"highlightLine",void 0),p["a"]([Object(d["d"])("highlightLine")],M.prototype,"styleLine",null),M=p["a"]([d["a"]],M);var B=M,D=B,P=(n("fc94"),n("a844")),z=Object(g["a"])(D,C,_,!1,null,"454d421b",null),A=z.exports;m()(z,{VTextarea:P["a"]});var T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"debugger"},[n("div",{staticClass:"toolbar"},[n("icon",{staticStyle:{"margin-left":"-18px"},attrs:{tooltip:"Compile To Binary",top:"",icon:"build",disabled:t.debugging},on:{click:function(e){return t.$emit("compile")}}}),n("icon",{attrs:{tooltip:"Start Debugging",top:"",icon:"bug_report",disabled:t.debugging},on:{click:function(e){return t.$emit("debug")}}}),n("icon",{attrs:{tooltip:"Stop Debugging",top:"",icon:"stop",disabled:!t.debugging},on:{click:t.stop}}),n("icon",{attrs:{tooltip:"Next Line",top:"",disabled:!t.debugging,icon:"arrow_forward"},on:{click:t.nextLine}})],1),t.debugging?n("vue-json-pretty",{ref:"pretty",staticClass:"json",staticStyle:{height:"calc(100% - 48px)"},attrs:{deep:1,data:t.programData}}):t._e()],1)},U=[],q=(n("ac6a"),n("5176")),V=n.n(q),R=(n("96cf"),n("5d73")),H=n.n(R),I=n("a4bb"),J=n.n(I),X=n("e814"),N=n.n(X),Y=n("768b"),Z=(n("4917"),n("6b54"),n("3b2b"),n("75fc")),G=(n("6c7b"),regeneratorRuntime.mark(jt)),K=function(){return{registers:Array(Math.pow(2,4)).fill(0),memory:Array(Math.pow(2,8)).fill(0),counter:0,time:0,out:[]}},F=K(),Q=/^([0-9a-zA-Z]+)(.*?)$/,W=function(t){return Object(Z["a"])(Array(t).keys())},tt="([a-zA-Z0-9_]+)",et="^#define +".concat(tt," +").concat(tt,"$"),nt=function(t){var e=[];return W(t.registers||0).forEach(function(){e.push("R([0-9]+)")}),t.immediate&&e.push("([0-9]+)"),new RegExp("^".concat(e.join(" +"),"$"))},rt=function(t,e){F.registers[t]=F.memory[e]},it=function(t,e){F.memory[e]=F.registers[t]},ot=function(t,e){F.memory[F.registers[t]]=F.registers[e]},at=function(t,e){F.registers[t]=e},st=function(t,e,n){F.registers[t]=F.registers[e]+F.registers[n]},ut=function(t,e,n){F.registers[t]=F.registers[e]-F.registers[n]},ct=function(t,e){0!==F.registers[t]&&(F.counter=e)},lt=function(){return!0},pt=function(t,e,n){F.registers[t]=F.registers[e]*F.registers[n]},dt=function(t,e){F.registers[t]=F.memory[F.registers[e]]},ft=function(t){F.out[F.time]=t},vt={mov1:[{registers:1,immediate:!0},rt],mov2:[{registers:1,immediate:!0},it],mov3:[{registers:2},ot],mov4:[{registers:1,immediate:!0},at],add:[{registers:3},st],subt:[{registers:3},ut],jz:[{registers:1,immediate:!0},ct],halt:[{},lt],mul:[{registers:3},pt],load:[{registers:2},dt],readm:[{immediate:!0},ft]},ht={mov1:0,mov2:1,mov3:2,mov4:3,add:4,subt:5,jz:6,halt:15,mul:8,load:10,readm:7},gt=function(t,e){if(t>=Math.pow(16,e))throw Error("Unable to convert ".concat(t," to HEX as it is too big"));var n=t.toString(16);while(n.length<e)n="0"+n;return n},bt={},mt=function(t){t=t.trim();var e=t.match(et);if(e)return bt[e[1]]=e[2],null;if(t=t.split("#")[0].trim(),!t)return null;for(var n=J()(bt),r=0;r<n.length;r++){var i=n[r];t=t.split(i).join(bt[i])}var o=t.match(Q);if(!o)throw Error("Unable to parse instruction name for line: ".concat(t));var a=o[1];if(t=o[2].trim(),!(a in vt))throw Error("Unknown instruction: ".concat(a));var s=a,u=ht[s];if(u>15)throw Error("Invalid instruction number: ".concat(u));var c=ht[s]<<12,l=vt[s],p=Object(Y["a"])(l,2),d=p[0],f=p[1],v=d.registers,h=void 0===v?0:v,g=d.immediate,b=void 0!==g&&g,m=nt(d);if(o=t.match(m),null===o)throw Error('Unable to parse arguments for "'.concat(a,'": "').concat(t,'"'));var y=o.slice(1).map(function(t){return N()(t,10)}),j=!0,w=!1,O=void 0;try{for(var k,x=H()(W(h));!(j=(k=x.next()).done);j=!0){var L=k.value;c+=y[L]<<4*(2-L)}}catch(C){w=!0,O=C}finally{try{j||null==x.return||x.return()}finally{if(w)throw O}}b&&(c+=y[y.length-1]);var E=gt(c,4).toUpperCase();return{evaluate:f,args:y,hex:E}},yt=function(t){var e=[],n={};return t.split("\n").map(mt).forEach(function(t,r){t&&(n[e.length]=r,e.push(t))}),{instructions:e,sourceMap:n}};function jt(t){var e,n,r,i;return regeneratorRuntime.wrap(function(o){while(1)switch(o.prev=o.next){case 0:V()(F,K());case 1:return void(o.next=4);case 4:if(!(F.counter>=t.length)){o.next=6;break}return o.abrupt("break",15);case 6:if(e=t[F.counter],F.time++,F.counter++,n=e.evaluate,r=e.args,i=n.apply(void 0,Object(Z["a"])(r)),!i){o.next=13;break}return o.abrupt("break",15);case 13:o.next=1;break;case 15:case"end":return o.stop()}},G,this)}var wt=n("d538"),Ot=n.n(wt),kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-tooltip",{attrs:{right:t.right,left:t.left,top:t.top,bottom:t.bottom,"z-index":"100"}},[n("template",{slot:"activator"},[n("v-btn",t._g(t._b({staticClass:"button",attrs:{icon:""}},"v-btn",t.$attrs,!1),t.$listeners),[n("v-icon",[t._v(t._s(t.icon))])],1)],1),n("span",[t._v(t._s(t.tooltip))])],2)},xt=[],Lt=function(t){function e(){return Object(s["a"])(this,e),Object(u["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(d["c"]);p["a"]([Object(d["b"])({type:String,required:!0})],Lt.prototype,"tooltip",void 0),p["a"]([Object(d["b"])({type:String,required:!0})],Lt.prototype,"icon",void 0),p["a"]([Object(d["b"])({type:Boolean,default:!1})],Lt.prototype,"right",void 0),p["a"]([Object(d["b"])({type:Boolean,default:!1})],Lt.prototype,"left",void 0),p["a"]([Object(d["b"])({type:Boolean,default:!1})],Lt.prototype,"top",void 0),p["a"]([Object(d["b"])({type:Boolean,default:!1})],Lt.prototype,"bottom",void 0),Lt=p["a"]([d["a"]],Lt);var Et=Lt,Ct=Et,_t=(n("9ef1"),n("8336")),$t=n("132d"),St=n("3a2f"),Mt=Object(g["a"])(Ct,kt,xt,!1,null,"1cbddf3a",null),Bt=Mt.exports;m()(Mt,{VBtn:_t["a"],VIcon:$t["a"],VTooltip:St["a"]});var Dt=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(u["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.programData=F,t}return Object(l["a"])(e,t),Object(E["a"])(e,[{key:"nextLine",value:function(){if(this.program){var t=this.program.next().done,e=this.$refs.pretty;e&&e.$children.forEach(function(t){return t.$forceUpdate()}),t&&this.stop()}}},{key:"stop",value:function(){this.$emit("update:debugging",!1)}},{key:"start",value:function(){this.debugging&&this.nextLine()}}]),e}(d["c"]);p["a"]([Object(d["b"])({required:!1})],Dt.prototype,"program",void 0),p["a"]([Object(d["b"])({type:Boolean,required:!0})],Dt.prototype,"debugging",void 0),p["a"]([Object(d["d"])("debugging")],Dt.prototype,"start",null),Dt=p["a"]([Object(d["a"])({components:{VueJsonPretty:Ot.a,Icon:Bt}})],Dt);var Pt=Dt,zt=Pt,At=(n("ecd9"),Object(g["a"])(zt,T,U,!1,null,"511b2800",null)),Tt=At.exports,Ut=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(u["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.previous=null,t.moving=!1,t.in=!1,t.mousemoveListener=function(){return{}},t}return Object(l["a"])(e,t),Object(E["a"])(e,[{key:"move",value:function(t){this.$emit("move",t)}},{key:"render",value:function(t){return t(this.tag,{class:"draggable",on:{mousedown:this.addListeners,mouseup:this.removeListeners,mouseenter:this.onHover,mouseleave:this.afterHover,click:function(t){return t.stopPropagation()}}},this.$slots.default)}},{key:"showCursor",value:function(){document.documentElement&&(document.documentElement.style.cursor=this.cursor)}},{key:"resetCursor",value:function(){document.documentElement&&(document.documentElement.style.cursor="auto")}},{key:"addListeners",value:function(t){for(var e=this,n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];1===t.which&&(this.prevent(t),this.showCursor(),this.moving=!0,this.previous={x:t.clientX,y:t.clientY},this.mousemoveListener=function(t){return e.startMove.apply(e,[t].concat(r))},window.addEventListener("mousemove",this.mousemoveListener),window.addEventListener("mouseup",this.removeListeners))}},{key:"removeListeners",value:function(t){t&&this.prevent(t),this.resetCursor(),this.previous=null,this.moving=!1,window.removeEventListener("mousemove",this.mousemoveListener),window.removeEventListener("mouseup",this.removeListeners),this.mousemoveListener=function(){return{}},this.afterHover()}},{key:"startMove",value:function(t){this.previous?(this.prevent(t),this.previous={x:t.clientX,y:t.clientY},this.$emit("move",t)):this.removeListeners()}},{key:"prevent",value:function(t){t&&t.preventDefault&&t.preventDefault(),t&&t.stopPropagation&&t.stopPropagation()}},{key:"onHover",value:function(){this.moving||(this.in=!0,this.showCursor())}},{key:"afterHover",value:function(){this.moving||(this.in=!1,this.resetCursor())}}]),e}(d["c"]);p["a"]([Object(d["b"])({type:String,default:"div"})],Ut.prototype,"tag",void 0),p["a"]([Object(d["b"])({type:String,default:"auto"})],Ut.prototype,"cursor",void 0),Ut=p["a"]([d["a"]],Ut);var qt=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(u["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.input="",t.output="",t.show=!1,t.offset=0,t.debugging=!1,t.program=null,t.sourceMap=null,t}return Object(l["a"])(e,t),Object(E["a"])(e,[{key:"mounted",value:function(){window.addEventListener("keydown",this.keydown);var t=this.$route.query.text;t&&"string"===typeof t&&(this.input=t)}},{key:"destroyed",value:function(){window.removeEventListener("keydown",this.keydown)}},{key:"keydown",value:function(t){83===t.which&&t.ctrlKey&&(t.preventDefault(),this.parse())}},{key:"parse",value:function(){try{var t=yt(this.input),e=t.instructions,n=t.sourceMap;return this.sourceMap=n,this.output=e.map(function(t){var e=t.hex;return e}).join("\n"),e}catch(r){return this.output=r.message,null}}},{key:"debug",value:function(){var t=this.parse();t&&(this.program=jt(t),this.debugging=!0)}},{key:"copyUrl",value:function(){var t=document.createElement("a"),e=this.input?{text:this.input}:{};t.href=this.$router.resolve({path:this.$route.path,query:e}).href;var n=t.protocol+"//"+t.host+t.pathname+t.search+t.hash,r=document.createElement("textarea");r.value=n,document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r),this.show=!0}},{key:"resizeRightSide",value:function(t){this.offset+=t.movementY}},{key:"editorStyle",get:function(){return{height:"calc(50% + ".concat(this.offset,"px)")}}},{key:"debugStyle",get:function(){return{height:"calc(50% - ".concat(this.offset,"px)")}}},{key:"highlightLine",get:function(){if(this.debugging&&this.sourceMap)return this.sourceMap[F.counter]}}]),e}(d["c"]);qt=p["a"]([Object(d["a"])({components:{Editor:A,Debugger:Tt,DragElement:Ut}})],qt);var Vt=qt,Rt=Vt,Ht=(n("1c7d"),n("2db4")),It=Object(g["a"])(Rt,x,L,!1,null,"49813fe9",null),Jt=It.exports;m()(It,{VSnackbar:Ht["a"]});var Xt=[{path:"/",component:Jt}],Nt=new k["a"]({routes:Xt});r["default"].config.productionTip=!1,r["default"].use(k["a"]),new r["default"]({router:Nt,render:function(t){return t(O)}}).$mount("#app")},cf25:function(t,e,n){"use strict";var r=n("bb93"),i=n.n(r);i.a},e32b:function(t,e,n){},ecd9:function(t,e,n){"use strict";var r=n("0fbb"),i=n.n(r);i.a},fc94:function(t,e,n){"use strict";var r=n("e32b"),i=n.n(r);i.a}});
//# sourceMappingURL=app.f3484607.js.map
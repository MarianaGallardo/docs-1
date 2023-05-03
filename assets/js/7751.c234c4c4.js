"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7751],{67751:(t,e,n)=>{n.r(e),n.d(e,{default:()=>na});var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},o=function(t){return t&&t.Math==Math&&t},i=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof r&&r)||function(){return this}()||Function("return this")(),a={},c=function(t){try{return!!t()}catch(t){return!0}},u=!c((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),f={},s={}.propertyIsEnumerable,l=Object.getOwnPropertyDescriptor,p=l&&!s.call({1:2},1);f.f=p?function(t){var e=l(this,t);return!!e&&e.enumerable}:s;var h=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},d={}.toString,v=function(t){return d.call(t).slice(8,-1)},y=v,g="".split,m=c((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==y(t)?g.call(t,""):Object(t)}:Object,b=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},w=m,j=b,x=function(t){return w(j(t))},O=function(t){return"object"==typeof t?null!==t:"function"==typeof t},E=O,S=function(t,e){if(!E(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!E(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!E(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!E(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},P=b,T=function(t){return Object(P(t))},_=T,k={}.hasOwnProperty,L=function(t,e){return k.call(_(t),e)},M=O,A=i.document,I=M(A)&&M(A.createElement),C=function(t){return I?A.createElement(t):{}},R=C,N=!u&&!c((function(){return 7!=Object.defineProperty(R("div"),"a",{get:function(){return 7}}).a})),F=u,J=f,D=h,$=x,G=S,H=L,z=N,W=Object.getOwnPropertyDescriptor;a.f=F?W:function(t,e){if(t=$(t),e=G(e,!0),z)try{return W(t,e)}catch(t){}if(H(t,e))return D(!J.f.call(t,e),t[e])};var q={},U=O,K=function(t){if(!U(t))throw TypeError(String(t)+" is not an object");return t},Q=u,X=N,Y=K,B=S,V=Object.defineProperty;q.f=Q?V:function(t,e,n){if(Y(t),e=B(e,!0),Y(n),X)try{return V(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var Z=q,tt=h,et=u?function(t,e,n){return Z.f(t,e,tt(1,n))}:function(t,e,n){return t[e]=n,t},nt={exports:{}},rt=i,ot=et,it=function(t,e){try{ot(rt,t,e)}catch(n){rt[t]=e}return e},at=it,ct=i["__core-js_shared__"]||at("__core-js_shared__",{}),ut=ct,ft=Function.toString;"function"!=typeof ut.inspectSource&&(ut.inspectSource=function(t){return ft.call(t)});var st=ut.inspectSource,lt=st,pt=i.WeakMap,ht="function"==typeof pt&&/native code/.test(lt(pt)),dt={exports:{}},vt=ct;(dt.exports=function(t,e){return vt[t]||(vt[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.12.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"});var yt,gt,mt,bt=0,wt=Math.random(),jt=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++bt+wt).toString(36)},xt=dt.exports,Ot=jt,Et=xt("keys"),St=function(t){return Et[t]||(Et[t]=Ot(t))},Pt={},Tt=ht,_t=O,kt=et,Lt=L,Mt=ct,At=St,It=Pt,Ct=i.WeakMap;if(Tt||Mt.state){var Rt=Mt.state||(Mt.state=new Ct),Nt=Rt.get,Ft=Rt.has,Jt=Rt.set;yt=function(t,e){if(Ft.call(Rt,t))throw new TypeError("Object already initialized");return e.facade=t,Jt.call(Rt,t,e),e},gt=function(t){return Nt.call(Rt,t)||{}},mt=function(t){return Ft.call(Rt,t)}}else{var Dt=At("state");It[Dt]=!0,yt=function(t,e){if(Lt(t,Dt))throw new TypeError("Object already initialized");return e.facade=t,kt(t,Dt,e),e},gt=function(t){return Lt(t,Dt)?t[Dt]:{}},mt=function(t){return Lt(t,Dt)}}var $t={set:yt,get:gt,has:mt,enforce:function(t){return mt(t)?gt(t):yt(t,{})},getterFor:function(t){return function(e){var n;if(!_t(e)||(n=gt(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},Gt=i,Ht=et,zt=L,Wt=it,qt=st,Ut=$t.get,Kt=$t.enforce,Qt=String(String).split("String");(nt.exports=function(t,e,n,r){var o,i=!!r&&!!r.unsafe,a=!!r&&!!r.enumerable,c=!!r&&!!r.noTargetGet;"function"==typeof n&&("string"!=typeof e||zt(n,"name")||Ht(n,"name",e),(o=Kt(n)).source||(o.source=Qt.join("string"==typeof e?e:""))),t!==Gt?(i?!c&&t[e]&&(a=!0):delete t[e],a?t[e]=n:Ht(t,e,n)):a?t[e]=n:Wt(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&Ut(this).source||qt(this)}));var Xt=i,Yt=i,Bt=function(t){return"function"==typeof t?t:void 0},Vt=function(t,e){return arguments.length<2?Bt(Xt[t])||Bt(Yt[t]):Xt[t]&&Xt[t][e]||Yt[t]&&Yt[t][e]},Zt={},te=Math.ceil,ee=Math.floor,ne=function(t){return isNaN(t=+t)?0:(t>0?ee:te)(t)},re=ne,oe=Math.min,ie=function(t){return t>0?oe(re(t),9007199254740991):0},ae=ne,ce=Math.max,ue=Math.min,fe=x,se=ie,le=function(t){return function(e,n,r){var o,i=fe(e),a=se(i.length),c=function(t,e){var n=ae(t);return n<0?ce(n+e,0):ue(n,e)}(r,a);if(t&&n!=n){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((t||c in i)&&i[c]===n)return t||c||0;return!t&&-1}},pe={includes:le(!0),indexOf:le(!1)},he=L,de=x,ve=pe.indexOf,ye=Pt,ge=function(t,e){var n,r=de(t),o=0,i=[];for(n in r)!he(ye,n)&&he(r,n)&&i.push(n);for(;e.length>o;)he(r,n=e[o++])&&(~ve(i,n)||i.push(n));return i},me=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],be=ge,we=me.concat("length","prototype");Zt.f=Object.getOwnPropertyNames||function(t){return be(t,we)};var je={};je.f=Object.getOwnPropertySymbols;var xe=Zt,Oe=je,Ee=K,Se=Vt("Reflect","ownKeys")||function(t){var e=xe.f(Ee(t)),n=Oe.f;return n?e.concat(n(t)):e},Pe=L,Te=Se,_e=a,ke=q,Le=c,Me=/#|\.prototype\./,Ae=function(t,e){var n=Ce[Ie(t)];return n==Ne||n!=Re&&("function"==typeof e?Le(e):!!e)},Ie=Ae.normalize=function(t){return String(t).replace(Me,".").toLowerCase()},Ce=Ae.data={},Re=Ae.NATIVE="N",Ne=Ae.POLYFILL="P",Fe=Ae,Je=i,De=a.f,$e=et,Ge=nt.exports,He=it,ze=function(t,e){for(var n=Te(e),r=ke.f,o=_e.f,i=0;i<n.length;i++){var a=n[i];Pe(t,a)||r(t,a,o(e,a))}},We=Fe,qe=function(t,e){var n,r,o,i,a,c=t.target,u=t.global,f=t.stat;if(n=u?Je:f?Je[c]||He(c,{}):(Je[c]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(a=De(n,r))&&a.value:n[r],!We(u?r:c+(f?".":"#")+r,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;ze(i,o)}(t.sham||o&&o.sham)&&$e(i,"sham",!0),Ge(n,r,i,t)}},Ue=ge,Ke=me,Qe=Object.keys||function(t){return Ue(t,Ke)},Xe=u,Ye=c,Be=Qe,Ve=je,Ze=f,tn=T,en=m,nn=Object.assign,rn=Object.defineProperty,on=!nn||Ye((function(){if(Xe&&1!==nn({b:1},nn(rn({},"a",{enumerable:!0,get:function(){rn(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=nn({},t)[n]||Be(nn({},e)).join("")!=r}))?function(t,e){for(var n=tn(t),r=arguments.length,o=1,i=Ve.f,a=Ze.f;r>o;)for(var c,u=en(arguments[o++]),f=i?Be(u).concat(i(u)):Be(u),s=f.length,l=0;s>l;)c=f[l++],Xe&&!a.call(u,c)||(n[c]=u[c]);return n}:nn;function an(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function cn(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?an(Object(n),!0).forEach((function(e){sn(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):an(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function un(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function fn(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){un(i,r,o,a,c,"next",t)}function c(t){un(i,r,o,a,c,"throw",t)}a(void 0)}))}}function sn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ln(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function pn(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return ln(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ln(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}qe({target:"Object",stat:!0,forced:Object.assign!==on},{assign:on}),function(t){var e=function(t){var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new _(r||[]);return i._invoke=function(t,e,n){var r=l;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return L()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=S(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var u=s(t,e,n);if("normal"===u.type){if(r=n.done?d:p,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var l="suspendedStart",p="suspendedYield",h="executing",d="completed",v={};function y(){}function g(){}function m(){}var b={};b[i]=function(){return this};var w=Object.getPrototypeOf,j=w&&w(w(k([])));j&&j!==n&&r.call(j,i)&&(b=j);var x=m.prototype=y.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var f=u.arg,l=f.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function S(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function k(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:L}}function L(){return{value:e,done:!0}}return g.prototype=x.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},O(E.prototype),E.prototype[a]=function(){return this},t.AsyncIterator=E,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new E(f(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(x),u(x,c,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),f=r.call(a,"finallyLoc");if(u&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:k(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}({});try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}();var hn,dn,vn=Vt("navigator","userAgent")||"",yn=vn,gn=i.process,mn=gn&&gn.versions,bn=mn&&mn.v8;bn?dn=(hn=bn.split("."))[0]<4?1:hn[0]+hn[1]:yn&&(!(hn=yn.match(/Edge\/(\d+)/))||hn[1]>=74)&&(hn=yn.match(/Chrome\/(\d+)/))&&(dn=hn[1]);var wn=dn&&+dn,jn=wn,xn=c,On=!!Object.getOwnPropertySymbols&&!xn((function(){return!String(Symbol())||!Symbol.sham&&jn&&jn<41})),En=On&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Sn=i,Pn=dt.exports,Tn=L,_n=jt,kn=On,Ln=En,Mn=Pn("wks"),An=Sn.Symbol,In=Ln?An:An&&An.withoutSetter||_n,Cn=function(t){return Tn(Mn,t)&&(kn||"string"==typeof Mn[t])||(kn&&Tn(An,t)?Mn[t]=An[t]:Mn[t]=In("Symbol."+t)),Mn[t]},Rn={};Rn[Cn("toStringTag")]="z";var Nn="[object z]"===String(Rn),Fn=Nn,Jn=v,Dn=Cn("toStringTag"),$n="Arguments"==Jn(function(){return arguments}()),Gn=Fn?Jn:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),Dn))?n:$n?Jn(e):"Object"==(r=Jn(e))&&"function"==typeof e.callee?"Arguments":r},Hn=Gn,zn=Nn?{}.toString:function(){return"[object "+Hn(this)+"]"},Wn=Nn,qn=nt.exports,Un=zn;Wn||qn(Object.prototype,"toString",Un,{unsafe:!0});var Kn=i.Promise,Qn=nt.exports,Xn=O,Yn=K,Bn=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,r){return Yn(n),function(t){if(!Xn(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}(r),e?t.call(n,r):n.__proto__=r,n}}():void 0),Vn=q.f,Zn=L,tr=Cn("toStringTag"),er=Vt,nr=q,rr=u,or=Cn("species"),ir=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},ar={},cr=ar,ur=Cn("iterator"),fr=Array.prototype,sr=ir,lr=function(t,e,n){if(sr(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},pr=Gn,hr=ar,dr=Cn("iterator"),vr=K,yr=K,gr=ie,mr=lr,br=function(t){var e=t.return;if(void 0!==e)return vr(e.call(t)).value},wr=function(t,e){this.stopped=t,this.result=e},jr=Cn("iterator"),xr=!1;try{var Or=0,Er={next:function(){return{done:!!Or++}},return:function(){xr=!0}};Er[jr]=function(){return this},Array.from(Er,(function(){throw 2}))}catch(r){}var Sr,Pr,Tr,_r=K,kr=ir,Lr=Cn("species"),Mr=Vt("document","documentElement"),Ar=/(?:iphone|ipod|ipad).*applewebkit/i.test(vn),Ir="process"==v(i.process),Cr=i,Rr=c,Nr=lr,Fr=Mr,Jr=C,Dr=Ar,$r=Ir,Gr=Cr.location,Hr=Cr.setImmediate,zr=Cr.clearImmediate,Wr=Cr.process,qr=Cr.MessageChannel,Ur=Cr.Dispatch,Kr=0,Qr={},Xr=function(t){if(Qr.hasOwnProperty(t)){var e=Qr[t];delete Qr[t],e()}},Yr=function(t){return function(){Xr(t)}},Br=function(t){Xr(t.data)},Vr=function(t){Cr.postMessage(t+"",Gr.protocol+"//"+Gr.host)};Hr&&zr||(Hr=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return Qr[++Kr]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},Sr(Kr),Kr},zr=function(t){delete Qr[t]},$r?Sr=function(t){Wr.nextTick(Yr(t))}:Ur&&Ur.now?Sr=function(t){Ur.now(Yr(t))}:qr&&!Dr?(Tr=(Pr=new qr).port2,Pr.port1.onmessage=Br,Sr=Nr(Tr.postMessage,Tr,1)):Cr.addEventListener&&"function"==typeof postMessage&&!Cr.importScripts&&Gr&&"file:"!==Gr.protocol&&!Rr(Vr)?(Sr=Vr,Cr.addEventListener("message",Br,!1)):Sr="onreadystatechange"in Jr("script")?function(t){Fr.appendChild(Jr("script")).onreadystatechange=function(){Fr.removeChild(this),Xr(t)}}:function(t){setTimeout(Yr(t),0)});var Zr,to,eo,no,ro,oo,io,ao,co={set:Hr,clear:zr},uo=/web0s(?!.*chrome)/i.test(vn),fo=i,so=a.f,lo=co.set,po=Ar,ho=uo,vo=Ir,yo=fo.MutationObserver||fo.WebKitMutationObserver,go=fo.document,mo=fo.process,bo=fo.Promise,wo=so(fo,"queueMicrotask"),jo=wo&&wo.value;jo||(Zr=function(){var t,e;for(vo&&(t=mo.domain)&&t.exit();to;){e=to.fn,to=to.next;try{e()}catch(t){throw to?no():eo=void 0,t}}eo=void 0,t&&t.enter()},po||vo||ho||!yo||!go?bo&&bo.resolve?((io=bo.resolve(void 0)).constructor=bo,ao=io.then,no=function(){ao.call(io,Zr)}):no=vo?function(){mo.nextTick(Zr)}:function(){lo.call(fo,Zr)}:(ro=!0,oo=go.createTextNode(""),new yo(Zr).observe(oo,{characterData:!0}),no=function(){oo.data=ro=!ro}));var xo=jo||function(t){var e={fn:t,next:void 0};eo&&(eo.next=e),to||(to=e,no()),eo=e},Oo={},Eo=ir,So=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=Eo(e),this.reject=Eo(n)};Oo.f=function(t){return new So(t)};var Po,To,_o,ko,Lo=K,Mo=O,Ao=Oo,Io=i,Co="object"==typeof window,Ro=qe,No=i,Fo=Vt,Jo=Kn,Do=nt.exports,$o=Bn,Go=O,Ho=ir,zo=st,Wo=function(t,e,n){var r,o,i,a,c,u,f,s=n&&n.that,l=!(!n||!n.AS_ENTRIES),p=!(!n||!n.IS_ITERATOR),h=!(!n||!n.INTERRUPTED),d=mr(e,s,1+l+h),v=function(t){return r&&br(r),new wr(!0,t)},y=function(t){return l?(yr(t),h?d(t[0],t[1],v):d(t[0],t[1])):h?d(t,v):d(t)};if(p)r=t;else{if("function"!=typeof(o=function(t){if(null!=t)return t[dr]||t["@@iterator"]||hr[pr(t)]}(t)))throw TypeError("Target is not iterable");if(function(t){return void 0!==t&&(cr.Array===t||fr[ur]===t)}(o)){for(i=0,a=gr(t.length);a>i;i++)if((c=y(t[i]))&&c instanceof wr)return c;return new wr(!1)}r=o.call(t)}for(u=r.next;!(f=u.call(r)).done;){try{c=y(f.value)}catch(t){throw br(r),t}if("object"==typeof c&&c&&c instanceof wr)return c}return new wr(!1)},qo=co.set,Uo=xo,Ko=Oo,Qo=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},Xo=$t,Yo=Fe,Bo=Co,Vo=Ir,Zo=wn,ti=Cn("species"),ei="Promise",ni=Xo.get,ri=Xo.set,oi=Xo.getterFor(ei),ii=Jo&&Jo.prototype,ai=Jo,ci=ii,ui=No.TypeError,fi=No.document,si=No.process,li=Ko.f,pi=li,hi=!!(fi&&fi.createEvent&&No.dispatchEvent),di="function"==typeof PromiseRejectionEvent,vi=!1,yi=Yo(ei,(function(){var t=zo(ai)!==String(ai);if(!t&&66===Zo)return!0;if(Zo>=51&&/native code/.test(ai))return!1;var e=new ai((function(t){t(1)})),n=function(t){t((function(){}),(function(){}))};return(e.constructor={})[ti]=n,!(vi=e.then((function(){}))instanceof n)||!t&&Bo&&!di})),gi=yi||!function(t,e){if(!xr)return!1;var n=!1;try{var r={};r[jr]=function(){return{next:function(){return{done:n=!0}}}},function(t){ai.all(t).catch((function(){}))}(r)}catch(t){}return n}(),mi=function(t){var e;return!(!Go(t)||"function"!=typeof(e=t.then))&&e},bi=function(t,e){if(!t.notified){t.notified=!0;var n=t.reactions;Uo((function(){for(var r=t.value,o=1==t.state,i=0;n.length>i;){var a,c,u,f=n[i++],s=o?f.ok:f.fail,l=f.resolve,p=f.reject,h=f.domain;try{s?(o||(2===t.rejection&&Oi(t),t.rejection=1),!0===s?a=r:(h&&h.enter(),a=s(r),h&&(h.exit(),u=!0)),a===f.promise?p(ui("Promise-chain cycle")):(c=mi(a))?c.call(a,l,p):l(a)):p(r)}catch(t){h&&!u&&h.exit(),p(t)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&ji(t)}))}},wi=function(t,e,n){var r,o;hi?((r=fi.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),No.dispatchEvent(r)):r={promise:e,reason:n},!di&&(o=No["on"+t])?o(r):"unhandledrejection"===t&&function(t,e){var n=Io.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}("Unhandled promise rejection",n)},ji=function(t){qo.call(No,(function(){var e,n=t.facade,r=t.value;if(xi(t)&&(e=Qo((function(){Vo?si.emit("unhandledRejection",r,n):wi("unhandledrejection",n,r)})),t.rejection=Vo||xi(t)?2:1,e.error))throw e.value}))},xi=function(t){return 1!==t.rejection&&!t.parent},Oi=function(t){qo.call(No,(function(){var e=t.facade;Vo?si.emit("rejectionHandled",e):wi("rejectionhandled",e,t.value)}))},Ei=function(t,e,n){return function(r){t(e,r,n)}},Si=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=2,bi(t,!0))},Pi=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw ui("Promise can't be resolved itself");var r=mi(e);r?Uo((function(){var n={done:!1};try{r.call(e,Ei(Pi,n,t),Ei(Si,n,t))}catch(e){Si(n,e,t)}})):(t.value=e,t.state=1,bi(t,!1))}catch(e){Si({done:!1},e,t)}}};if(yi&&(ci=(ai=function(t){(function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+n+" invocation")})(this,ai,ei),Ho(t),Po.call(this);var e=ni(this);try{t(Ei(Pi,e),Ei(Si,e))}catch(t){Si(e,t)}}).prototype,(Po=function(t){ri(this,{type:ei,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=function(t,e,n){for(var r in e)Qn(t,r,e[r],undefined);return t}(ci,{then:function(t,e){var n=oi(this),r=li(function(t,e){var n,r=_r(t).constructor;return void 0===r||null==(n=_r(r)[Lr])?e:kr(n)}(this,ai));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=Vo?si.domain:void 0,n.parent=!0,n.reactions.push(r),0!=n.state&&bi(n,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),To=function(){var t=new Po,e=ni(t);this.promise=t,this.resolve=Ei(Pi,e),this.reject=Ei(Si,e)},Ko.f=li=function(t){return t===ai||t===_o?new To(t):pi(t)},"function"==typeof Jo&&ii!==Object.prototype)){ko=ii.then,vi||(Do(ii,"then",(function(t,e){var n=this;return new ai((function(t,e){ko.call(n,t,e)})).then(t,e)}),{unsafe:!0}),Do(ii,"catch",ci.catch,{unsafe:!0}));try{delete ii.constructor}catch(r){}$o&&$o(ii,ci)}Ro({global:!0,wrap:!0,forced:yi},{Promise:ai}),function(t,e,n){t&&!Zn(t=t.prototype,tr)&&Vn(t,tr,{configurable:!0,value:"Promise"})}(ai),function(t){var e=er("Promise"),n=nr.f;rr&&e&&!e[or]&&n(e,or,{configurable:!0,get:function(){return this}})}(),_o=Fo(ei),Ro({target:ei,stat:!0,forced:yi},{reject:function(t){var e=li(this);return e.reject.call(void 0,t),e.promise}}),Ro({target:ei,stat:!0,forced:yi},{resolve:function(t){return function(t,e){if(Lo(t),Mo(e)&&e.constructor===t)return e;var n=Ao.f(t);return(0,n.resolve)(e),n.promise}(this,t)}}),Ro({target:ei,stat:!0,forced:gi},{all:function(t){var e=this,n=li(e),r=n.resolve,o=n.reject,i=Qo((function(){var n=Ho(e.resolve),i=[],a=0,c=1;Wo(t,(function(t){var u=a++,f=!1;i.push(void 0),c++,n.call(e,t).then((function(t){f||(f=!0,i[u]=t,--c||r(i))}),o)})),--c||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=li(e),r=n.reject,o=Qo((function(){var o=Ho(e.resolve);Wo(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}});var Ti,_i=q,ki=K,Li=Qe,Mi=u?Object.defineProperties:function(t,e){ki(t);for(var n,r=Li(e),o=r.length,i=0;o>i;)_i.f(t,n=r[i++],e[n]);return t},Ai=K,Ii=Mi,Ci=me,Ri=Pt,Ni=Mr,Fi=C,Ji=St("IE_PROTO"),Di=function(){},$i=function(t){return"<script>"+t+"<\/script>"},Gi=function(){try{Ti=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;Gi=Ti?function(t){t.write($i("")),t.close();var e=t.parentWindow.Object;return t=null,e}(Ti):((e=Fi("iframe")).style.display="none",Ni.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write($i("document.F=Object")),t.close(),t.F);for(var n=Ci.length;n--;)delete Gi.prototype[Ci[n]];return Gi()};Ri[Ji]=!0;var Hi=Object.create||function(t,e){var n;return null!==t?(Di.prototype=Ai(t),n=new Di,Di.prototype=null,n[Ji]=t):n=Gi(),void 0===e?n:Ii(n,e)},zi=q,Wi=Cn("unscopables"),qi=Array.prototype;null==qi[Wi]&&zi.f(qi,Wi,{configurable:!0,value:Hi(null)});var Ui=pe.includes;qe({target:"Array",proto:!0},{includes:function(t){return Ui(this,t,arguments.length>1?arguments[1]:void 0)}}),qi[Wi].includes=!0;var Ki=O,Qi=v,Xi=Cn("match"),Yi=Cn("match"),Bi=function(t){if(function(t){var e;return Ki(t)&&(void 0!==(e=t[Xi])?!!e:"RegExp"==Qi(t))}(t))throw TypeError("The method doesn't accept regular expressions");return t},Vi=b;qe({target:"String",proto:!0,forced:!function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[Yi]=!1,"/./"[t](e)}catch(t){}}return!1}("includes")},{includes:function(t){return!!~String(Vi(this)).indexOf(Bi(t),arguments.length>1?arguments[1]:void 0)}});var Zi=function(){var t,e={messageStyle:"none",tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]],skipTags:["script","noscript","style","textarea","pre"]},skipStartupTypeset:!0};return{id:"mathjax2",init:function(n){var r=(t=n).getConfig().mathjax2||t.getConfig().math||{},o=cn(cn({},e),r),i=(o.mathjax||"https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js")+"?config="+(o.config||"TeX-AMS_HTML-full");o.tex2jax=cn(cn({},e.tex2jax),r.tex2jax),o.mathjax=o.config=null,function(t,e){var n=this,r=document.querySelector("head"),o=document.createElement("script");o.type="text/javascript",o.src=t;var i=function(){"function"==typeof e&&(e.call(),e=null)};o.onload=i,o.onreadystatechange=function(){"loaded"===n.readyState&&i()},r.appendChild(o)}(i,(function(){MathJax.Hub.Config(o),MathJax.Hub.Queue(["Typeset",MathJax.Hub,t.getRevealElement()]),MathJax.Hub.Queue(t.layout),t.on("slidechanged",(function(t){MathJax.Hub.Queue(["Typeset",MathJax.Hub,t.currentSlide])}))}))}}},ta=Zi,ea=Plugin=Object.assign(ta(),{KaTeX:function(){var t,e={version:"latest",delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1},{left:"\\(",right:"\\)",display:!1},{left:"\\[",right:"\\]",display:!0}],ignoredTags:["script","noscript","style","textarea","pre"]},n=function(t){return new Promise((function(e,n){var r=document.createElement("script");r.type="text/javascript",r.onload=e,r.onerror=n,r.src=t,document.head.append(r)}))};function r(){return(r=fn(regeneratorRuntime.mark((function t(e){var r,o,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=pn(e),t.prev=1,r.s();case 3:if((o=r.n()).done){t.next=9;break}return i=o.value,t.next=7,n(i);case 7:t.next=3;break;case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),r.e(t.t0);case 14:return t.prev=14,r.f(),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[1,11,14,17]])})))).apply(this,arguments)}return{id:"katex",init:function(n){var o=this,i=(t=n).getConfig().katex||{},a=cn(cn({},e),i);a.local,a.version,a.extensions;var c=function(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}(a,["local","version","extensions"]),u=a.local||"https://cdn.jsdelivr.net/npm/katex",f=a.local?"":"@"+a.version,s=u+f+"/dist/katex.min.css",l=u+f+"/dist/contrib/mhchem.min.js",p=u+f+"/dist/contrib/auto-render.min.js",h=[u+f+"/dist/katex.min.js"];a.extensions&&a.extensions.includes("mhchem")&&h.push(l),h.push(p);var d,v,y=function(){renderMathInElement(n.getSlidesElement(),c),t.layout()};d=s,(v=document.createElement("link")).rel="stylesheet",v.href=d,document.head.appendChild(v),function(t){return r.apply(this,arguments)}(h).then((function(){t.isReady()?y():t.on("ready",y.bind(o))}))}}},MathJax2:Zi,MathJax3:function(){var t={tex:{inlineMath:[["$","$"],["\\(","\\)"]]},options:{skipHtmlTags:["script","noscript","style","textarea","pre"]},startup:{ready:function(){MathJax.startup.defaultReady(),MathJax.startup.promise.then((function(){Reveal.layout()}))}}};return{id:"mathjax3",init:function(e){var n=e.getConfig().mathjax3||{},r=cn(cn({},t),n);r.tex=cn(cn({},t.tex),n.tex),r.options=cn(cn({},t.options),n.options),r.startup=cn(cn({},t.startup),n.startup);var o=r.mathjax||"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";r.mathjax=null,window.MathJax=r,function(t,e){var n=document.createElement("script");n.type="text/javascript",n.id="MathJax-script",n.src=t,n.async=!0,n.onload=function(){"function"==typeof e&&(e.call(),e=null)},document.head.appendChild(n)}(o,(function(){Reveal.addEventListener("slidechanged",(function(t){MathJax.typeset()}))}))}}}});const na=ea}}]);
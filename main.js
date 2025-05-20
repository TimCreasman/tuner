(()=>{var En=Object.create;var Re=Object.defineProperty;var di=Object.getOwnPropertyDescriptor;var $n=Object.getOwnPropertyNames;var Cn=Object.getPrototypeOf,Tn=Object.prototype.hasOwnProperty;var yr=Math.pow;var fi=i=>Re(i,"__esModule",{value:!0});var Rt=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports),ht=(i,t)=>{fi(i);for(var e in t)Re(i,e,{get:t[e],enumerable:!0})},Rn=(i,t,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of $n(t))!Tn.call(i,r)&&r!=="default"&&Re(i,r,{get:()=>t[r],enumerable:!(e=di(t,r))||e.enumerable});return i},Ze=i=>Rn(fi(Re(i!=null?En(Cn(i)):{},"default",i&&i.__esModule&&"default"in i?{get:()=>i.default,enumerable:!0}:{value:i,enumerable:!0})),i),q=(i,t,e,r)=>{for(var n=r>1?void 0:r?di(t,e):t,a=i.length-1,o;a>=0;a--)(o=i[a])&&(n=(r?o(t,e,n):o(n))||n);return r&&n&&Re(t,e,n),n};var wr=(i,t,e)=>new Promise((r,n)=>{var a=c=>{try{s(e.next(c))}catch(l){n(l)}},o=c=>{try{s(e.throw(c))}catch(l){n(l)}},s=c=>c.done?r(c.value):Promise.resolve(c.value).then(a,o);s((e=e.apply(i,t)).next())});var zi=Rt(()=>{var Di;(function(i){(function(t){var e=typeof globalThis=="object"?globalThis:typeof global=="object"?global:typeof self=="object"?self:typeof this=="object"?this:s(),r=n(i);typeof e.Reflect!="undefined"&&(r=n(e.Reflect,r)),t(r,e),typeof e.Reflect=="undefined"&&(e.Reflect=i);function n(c,l){return function(v,h){Object.defineProperty(c,v,{configurable:!0,writable:!0,value:h}),l&&l(v,h)}}function a(){try{return Function("return this;")()}catch{}}function o(){try{return(0,eval)("(function() { return this; })()")}catch{}}function s(){return a()||o()}})(function(t,e){var r=Object.prototype.hasOwnProperty,n=typeof Symbol=="function",a=n&&typeof Symbol.toPrimitive!="undefined"?Symbol.toPrimitive:"@@toPrimitive",o=n&&typeof Symbol.iterator!="undefined"?Symbol.iterator:"@@iterator",s=typeof Object.create=="function",c={__proto__:[]}instanceof Array,l=!s&&!c,v={create:s?function(){return Te(Object.create(null))}:c?function(){return Te({__proto__:null})}:function(){return Te({})},has:l?function(u,f){return r.call(u,f)}:function(u,f){return f in u},get:l?function(u,f){return r.call(u,f)?u[f]:void 0}:function(u,f){return u[f]}},h=Object.getPrototypeOf(Function),d=typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:vr(),_=typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:gr(),y=typeof WeakMap=="function"?WeakMap:br(),k=n?Symbol.for("@reflect-metadata:registry"):void 0,A=hr(),m=mr(A);function g(u,f,p,x){if($(p)){if(!gt(u))throw new TypeError;if(!Dt(f))throw new TypeError;return tt(u,f)}else{if(!gt(u))throw new TypeError;if(!et(f))throw new TypeError;if(!et(x)&&!$(x)&&!nt(x))throw new TypeError;return nt(x)&&(x=void 0),p=ft(p),L(u,f,p,x)}}t("decorate",g);function b(u,f){function p(x,U){if(!et(x))throw new TypeError;if(!$(U)&&!$e(U))throw new TypeError;F(u,f,x,U)}return p}t("metadata",b);function S(u,f,p,x){if(!et(p))throw new TypeError;return $(x)||(x=ft(x)),F(u,f,p,x)}t("defineMetadata",S);function M(u,f,p){if(!et(f))throw new TypeError;return $(p)||(p=ft(p)),T(u,f,p)}t("hasMetadata",M);function D(u,f,p){if(!et(f))throw new TypeError;return $(p)||(p=ft(p)),R(u,f,p)}t("hasOwnMetadata",D);function B(u,f,p){if(!et(f))throw new TypeError;return $(p)||(p=ft(p)),w(u,f,p)}t("getMetadata",B);function E(u,f,p){if(!et(f))throw new TypeError;return $(p)||(p=ft(p)),I(u,f,p)}t("getOwnMetadata",E);function H(u,f){if(!et(u))throw new TypeError;return $(f)||(f=ft(f)),j(u,f)}t("getMetadataKeys",H);function W(u,f){if(!et(u))throw new TypeError;return $(f)||(f=ft(f)),Y(u,f)}t("getOwnMetadataKeys",W);function it(u,f,p){if(!et(f))throw new TypeError;if($(p)||(p=ft(p)),!et(f))throw new TypeError;$(p)||(p=ft(p));var x=Gt(f,p,!1);return $(x)?!1:x.OrdinaryDeleteMetadata(u,f,p)}t("deleteMetadata",it);function tt(u,f){for(var p=u.length-1;p>=0;--p){var x=u[p],U=x(f);if(!$(U)&&!nt(U)){if(!Dt(U))throw new TypeError;f=U}}return f}function L(u,f,p,x){for(var U=u.length-1;U>=0;--U){var ut=u[U],pt=ut(f,p,x);if(!$(pt)&&!nt(pt)){if(!et(pt))throw new TypeError;x=pt}}return x}function T(u,f,p){var x=R(u,f,p);if(x)return!0;var U=Ce(f);return nt(U)?!1:T(u,U,p)}function R(u,f,p){var x=Gt(f,p,!1);return $(x)?!1:ot(x.OrdinaryHasOwnMetadata(u,f,p))}function w(u,f,p){var x=R(u,f,p);if(x)return I(u,f,p);var U=Ce(f);if(!nt(U))return w(u,U,p)}function I(u,f,p){var x=Gt(f,p,!1);if(!$(x))return x.OrdinaryGetOwnMetadata(u,f,p)}function F(u,f,p,x){var U=Gt(p,x,!0);U.OrdinaryDefineOwnMetadata(u,f,p,x)}function j(u,f){var p=Y(u,f),x=Ce(u);if(x===null)return p;var U=j(x,f);if(U.length<=0)return p;if(p.length<=0)return U;for(var ut=new _,pt=[],J=0,C=p;J<C.length;J++){var P=C[J],N=ut.has(P);N||(ut.add(P),pt.push(P))}for(var z=0,X=U;z<X.length;z++){var P=X[z],N=ut.has(P);N||(ut.add(P),pt.push(P))}return pt}function Y(u,f){var p=Gt(u,f,!1);return p?p.OrdinaryOwnMetadataKeys(u,f):[]}function G(u){if(u===null)return 1;switch(typeof u){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return u===null?1:6;default:return 6}}function $(u){return u===void 0}function nt(u){return u===null}function kt(u){return typeof u=="symbol"}function et(u){return typeof u=="object"?u!==null:typeof u=="function"}function mt(u,f){switch(G(u)){case 0:return u;case 1:return u;case 2:return u;case 3:return u;case 4:return u;case 5:return u}var p=f===3?"string":f===5?"number":"default",x=te(u,a);if(x!==void 0){var U=x.call(u,p);if(et(U))throw new TypeError;return U}return Ct(u,p==="default"?"number":p)}function Ct(u,f){if(f==="string"){var p=u.toString;if(bt(p)){var x=p.call(u);if(!et(x))return x}var U=u.valueOf;if(bt(U)){var x=U.call(u);if(!et(x))return x}}else{var U=u.valueOf;if(bt(U)){var x=U.call(u);if(!et(x))return x}var ut=u.toString;if(bt(ut)){var x=ut.call(u);if(!et(x))return x}}throw new TypeError}function ot(u){return!!u}function Tt(u){return""+u}function ft(u){var f=mt(u,3);return kt(f)?f:Tt(f)}function gt(u){return Array.isArray?Array.isArray(u):u instanceof Object?u instanceof Array:Object.prototype.toString.call(u)==="[object Array]"}function bt(u){return typeof u=="function"}function Dt(u){return typeof u=="function"}function $e(u){switch(G(u)){case 3:return!0;case 4:return!0;default:return!1}}function Wt(u,f){return u===f||u!==u&&f!==f}function te(u,f){var p=u[f];if(p!=null){if(!bt(p))throw new TypeError;return p}}function ee(u){var f=te(u,o);if(!bt(f))throw new TypeError;var p=f.call(u);if(!et(p))throw new TypeError;return p}function re(u){return u.value}function ie(u){var f=u.next();return f.done?!1:f}function ne(u){var f=u.return;f&&f.call(u)}function Ce(u){var f=Object.getPrototypeOf(u);if(typeof u!="function"||u===h||f!==h)return f;var p=u.prototype,x=p&&Object.getPrototypeOf(p);if(x==null||x===Object.prototype)return f;var U=x.constructor;return typeof U!="function"||U===u?f:U}function fr(){var u;!$(k)&&typeof e.Reflect!="undefined"&&!(k in e.Reflect)&&typeof e.Reflect.defineMetadata=="function"&&(u=pr(e.Reflect));var f,p,x,U=new y,ut={registerProvider:pt,getProvider:C,setProvider:N};return ut;function pt(z){if(!Object.isExtensible(ut))throw new Error("Cannot add provider to a frozen registry.");switch(!0){case u===z:break;case $(f):f=z;break;case f===z:break;case $(p):p=z;break;case p===z:break;default:x===void 0&&(x=new _),x.add(z);break}}function J(z,X){if(!$(f)){if(f.isProviderFor(z,X))return f;if(!$(p)){if(p.isProviderFor(z,X))return f;if(!$(x))for(var st=ee(x);;){var dt=ie(st);if(!dt)return;var St=re(dt);if(St.isProviderFor(z,X))return ne(st),St}}}if(!$(u)&&u.isProviderFor(z,X))return u}function C(z,X){var st=U.get(z),dt;return $(st)||(dt=st.get(X)),$(dt)&&(dt=J(z,X),$(dt)||($(st)&&(st=new d,U.set(z,st)),st.set(X,dt))),dt}function P(z){if($(z))throw new TypeError;return f===z||p===z||!$(x)&&x.has(z)}function N(z,X,st){if(!P(st))throw new Error("Metadata provider not registered.");var dt=C(z,X);if(dt!==st){if(!$(dt))return!1;var St=U.get(z);$(St)&&(St=new d,U.set(z,St)),St.set(X,st)}return!0}}function hr(){var u;return!$(k)&&et(e.Reflect)&&Object.isExtensible(e.Reflect)&&(u=e.Reflect[k]),$(u)&&(u=fr()),!$(k)&&et(e.Reflect)&&Object.isExtensible(e.Reflect)&&Object.defineProperty(e.Reflect,k,{enumerable:!1,configurable:!1,writable:!1,value:u}),u}function mr(u){var f=new y,p={isProviderFor:function(P,N){var z=f.get(P);return $(z)?!1:z.has(N)},OrdinaryDefineOwnMetadata:pt,OrdinaryHasOwnMetadata:U,OrdinaryGetOwnMetadata:ut,OrdinaryOwnMetadataKeys:J,OrdinaryDeleteMetadata:C};return A.registerProvider(p),p;function x(P,N,z){var X=f.get(P),st=!1;if($(X)){if(!z)return;X=new d,f.set(P,X),st=!0}var dt=X.get(N);if($(dt)){if(!z)return;if(dt=new d,X.set(N,dt),!u.setProvider(P,N,p))throw X.delete(N),st&&f.delete(P),new Error("Wrong provider for target.")}return dt}function U(P,N,z){var X=x(N,z,!1);return $(X)?!1:ot(X.has(P))}function ut(P,N,z){var X=x(N,z,!1);if(!$(X))return X.get(P)}function pt(P,N,z,X){var st=x(z,X,!0);st.set(P,N)}function J(P,N){var z=[],X=x(P,N,!1);if($(X))return z;for(var st=X.keys(),dt=ee(st),St=0;;){var ui=ie(dt);if(!ui)return z.length=St,z;var Sn=re(ui);try{z[St]=Sn}catch(Mn){try{ne(dt)}finally{throw Mn}}St++}}function C(P,N,z){var X=x(N,z,!1);if($(X)||!X.delete(P))return!1;if(X.size===0){var st=f.get(N);$(st)||(st.delete(z),st.size===0&&f.delete(st))}return!0}}function pr(u){var f=u.defineMetadata,p=u.hasOwnMetadata,x=u.getOwnMetadata,U=u.getOwnMetadataKeys,ut=u.deleteMetadata,pt=new y,J={isProviderFor:function(C,P){var N=pt.get(C);return!$(N)&&N.has(P)?!0:U(C,P).length?($(N)&&(N=new _,pt.set(C,N)),N.add(P),!0):!1},OrdinaryDefineOwnMetadata:f,OrdinaryHasOwnMetadata:p,OrdinaryGetOwnMetadata:x,OrdinaryOwnMetadataKeys:U,OrdinaryDeleteMetadata:ut};return J}function Gt(u,f,p){var x=A.getProvider(u,f);if(!$(x))return x;if(p){if(A.setProvider(u,f,m))return m;throw new Error("Illegal state.")}}function vr(){var u={},f=[],p=function(){function J(C,P,N){this._index=0,this._keys=C,this._values=P,this._selector=N}return J.prototype["@@iterator"]=function(){return this},J.prototype[o]=function(){return this},J.prototype.next=function(){var C=this._index;if(C>=0&&C<this._keys.length){var P=this._selector(this._keys[C],this._values[C]);return C+1>=this._keys.length?(this._index=-1,this._keys=f,this._values=f):this._index++,{value:P,done:!1}}return{value:void 0,done:!0}},J.prototype.throw=function(C){throw this._index>=0&&(this._index=-1,this._keys=f,this._values=f),C},J.prototype.return=function(C){return this._index>=0&&(this._index=-1,this._keys=f,this._values=f),{value:C,done:!0}},J}(),x=function(){function J(){this._keys=[],this._values=[],this._cacheKey=u,this._cacheIndex=-2}return Object.defineProperty(J.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),J.prototype.has=function(C){return this._find(C,!1)>=0},J.prototype.get=function(C){var P=this._find(C,!1);return P>=0?this._values[P]:void 0},J.prototype.set=function(C,P){var N=this._find(C,!0);return this._values[N]=P,this},J.prototype.delete=function(C){var P=this._find(C,!1);if(P>=0){for(var N=this._keys.length,z=P+1;z<N;z++)this._keys[z-1]=this._keys[z],this._values[z-1]=this._values[z];return this._keys.length--,this._values.length--,Wt(C,this._cacheKey)&&(this._cacheKey=u,this._cacheIndex=-2),!0}return!1},J.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=u,this._cacheIndex=-2},J.prototype.keys=function(){return new p(this._keys,this._values,U)},J.prototype.values=function(){return new p(this._keys,this._values,ut)},J.prototype.entries=function(){return new p(this._keys,this._values,pt)},J.prototype["@@iterator"]=function(){return this.entries()},J.prototype[o]=function(){return this.entries()},J.prototype._find=function(C,P){if(!Wt(this._cacheKey,C)){this._cacheIndex=-1;for(var N=0;N<this._keys.length;N++)if(Wt(this._keys[N],C)){this._cacheIndex=N;break}}return this._cacheIndex<0&&P&&(this._cacheIndex=this._keys.length,this._keys.push(C),this._values.push(void 0)),this._cacheIndex},J}();return x;function U(J,C){return J}function ut(J,C){return C}function pt(J,C){return[J,C]}}function gr(){var u=function(){function f(){this._map=new d}return Object.defineProperty(f.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),f.prototype.has=function(p){return this._map.has(p)},f.prototype.add=function(p){return this._map.set(p,p),this},f.prototype.delete=function(p){return this._map.delete(p)},f.prototype.clear=function(){this._map.clear()},f.prototype.keys=function(){return this._map.keys()},f.prototype.values=function(){return this._map.keys()},f.prototype.entries=function(){return this._map.entries()},f.prototype["@@iterator"]=function(){return this.keys()},f.prototype[o]=function(){return this.keys()},f}();return u}function br(){var u=16,f=v.create(),p=x();return function(){function C(){this._key=x()}return C.prototype.has=function(P){var N=U(P,!1);return N!==void 0?v.has(N,this._key):!1},C.prototype.get=function(P){var N=U(P,!1);return N!==void 0?v.get(N,this._key):void 0},C.prototype.set=function(P,N){var z=U(P,!0);return z[this._key]=N,this},C.prototype.delete=function(P){var N=U(P,!1);return N!==void 0?delete N[this._key]:!1},C.prototype.clear=function(){this._key=x()},C}();function x(){var C;do C="@@WeakMap@@"+J();while(v.has(f,C));return f[C]=!0,C}function U(C,P){if(!r.call(C,p)){if(!P)return;Object.defineProperty(C,p,{value:v.create()})}return C[p]}function ut(C,P){for(var N=0;N<P;++N)C[N]=Math.random()*255|0;return C}function pt(C){if(typeof Uint8Array=="function"){var P=new Uint8Array(C);return typeof crypto!="undefined"?crypto.getRandomValues(P):typeof msCrypto!="undefined"?msCrypto.getRandomValues(P):ut(P,C),P}return ut(new Array(C),C)}function J(){var C=pt(u);C[6]=C[6]&79|64,C[8]=C[8]&191|128;for(var P="",N=0;N<u;++N){var z=C[N];(N===4||N===6||N===8)&&(P+="-"),z<16&&(P+="0"),P+=z.toString(16).toLowerCase()}return P}}function Te(u){return u.__=void 0,delete u.__,u}})})(Di||(Di={}))});var Xi=Rt((Xs,Qi)=>{"use strict";function wt(i){if(this.size=i|0,this.size<=1||(this.size&this.size-1)!=0)throw new Error("FFT size must be a power of two and bigger than 1");this._csize=i<<1;for(var t=new Array(this.size*2),e=0;e<t.length;e+=2){let c=Math.PI*e/this.size;t[e]=Math.cos(c),t[e+1]=-Math.sin(c)}this.table=t;for(var r=0,n=1;this.size>n;n<<=1)r++;this._width=r%2==0?r-1:r,this._bitrev=new Array(1<<this._width);for(var a=0;a<this._bitrev.length;a++){this._bitrev[a]=0;for(var o=0;o<this._width;o+=2){var s=this._width-o-2;this._bitrev[a]|=(a>>>o&3)<<s}}this._out=null,this._data=null,this._inv=0}Qi.exports=wt;wt.prototype.fromComplexArray=function(t,e){for(var r=e||new Array(t.length>>>1),n=0;n<t.length;n+=2)r[n>>>1]=t[n];return r};wt.prototype.createComplexArray=function(){let t=new Array(this._csize);for(var e=0;e<t.length;e++)t[e]=0;return t};wt.prototype.toComplexArray=function(t,e){for(var r=e||this.createComplexArray(),n=0;n<r.length;n+=2)r[n]=t[n>>>1],r[n+1]=0;return r};wt.prototype.completeSpectrum=function(t){for(var e=this._csize,r=e>>>1,n=2;n<r;n+=2)t[e-n]=t[n],t[e-n+1]=-t[n+1]};wt.prototype.transform=function(t,e){if(t===e)throw new Error("Input and output buffers must be different");this._out=t,this._data=e,this._inv=0,this._transform4(),this._out=null,this._data=null};wt.prototype.realTransform=function(t,e){if(t===e)throw new Error("Input and output buffers must be different");this._out=t,this._data=e,this._inv=0,this._realTransform4(),this._out=null,this._data=null};wt.prototype.inverseTransform=function(t,e){if(t===e)throw new Error("Input and output buffers must be different");this._out=t,this._data=e,this._inv=1,this._transform4();for(var r=0;r<t.length;r++)t[r]/=this.size;this._out=null,this._data=null};wt.prototype._transform4=function(){var t=this._out,e=this._csize,r=this._width,n=1<<r,a=e/n<<1,o,s,c=this._bitrev;if(a===4)for(o=0,s=0;o<e;o+=a,s++){let k=c[s];this._singleTransform2(o,k,n)}else for(o=0,s=0;o<e;o+=a,s++){let k=c[s];this._singleTransform4(o,k,n)}var l=this._inv?-1:1,v=this.table;for(n>>=2;n>=2;n>>=2){a=e/n<<1;var h=a>>>2;for(o=0;o<e;o+=a)for(var d=o+h,_=o,y=0;_<d;_+=2,y+=n){let k=_,A=k+h,m=A+h,g=m+h,b=t[k],S=t[k+1],M=t[A],D=t[A+1],B=t[m],E=t[m+1],H=t[g],W=t[g+1],it=b,tt=S,L=v[y],T=l*v[y+1],R=M*L-D*T,w=M*T+D*L,I=v[2*y],F=l*v[2*y+1],j=B*I-E*F,Y=B*F+E*I,G=v[3*y],$=l*v[3*y+1],nt=H*G-W*$,kt=H*$+W*G,et=it+j,mt=tt+Y,Ct=it-j,ot=tt-Y,Tt=R+nt,ft=w+kt,gt=l*(R-nt),bt=l*(w-kt),Dt=et+Tt,$e=mt+ft,Wt=et-Tt,te=mt-ft,ee=Ct+bt,re=ot-gt,ie=Ct-bt,ne=ot+gt;t[k]=Dt,t[k+1]=$e,t[A]=ee,t[A+1]=re,t[m]=Wt,t[m+1]=te,t[g]=ie,t[g+1]=ne}}};wt.prototype._singleTransform2=function(t,e,r){let n=this._out,a=this._data,o=a[e],s=a[e+1],c=a[e+r],l=a[e+r+1],v=o+c,h=s+l,d=o-c,_=s-l;n[t]=v,n[t+1]=h,n[t+2]=d,n[t+3]=_};wt.prototype._singleTransform4=function(t,e,r){let n=this._out,a=this._data,o=this._inv?-1:1,s=r*2,c=r*3,l=a[e],v=a[e+1],h=a[e+r],d=a[e+r+1],_=a[e+s],y=a[e+s+1],k=a[e+c],A=a[e+c+1],m=l+_,g=v+y,b=l-_,S=v-y,M=h+k,D=d+A,B=o*(h-k),E=o*(d-A),H=m+M,W=g+D,it=b+E,tt=S-B,L=m-M,T=g-D,R=b-E,w=S+B;n[t]=H,n[t+1]=W,n[t+2]=it,n[t+3]=tt,n[t+4]=L,n[t+5]=T,n[t+6]=R,n[t+7]=w};wt.prototype._realTransform4=function(){var t=this._out,e=this._csize,r=this._width,n=1<<r,a=e/n<<1,o,s,c=this._bitrev;if(a===4)for(o=0,s=0;o<e;o+=a,s++){let x=c[s];this._singleRealTransform2(o,x>>>1,n>>>1)}else for(o=0,s=0;o<e;o+=a,s++){let x=c[s];this._singleRealTransform4(o,x>>>1,n>>>1)}var l=this._inv?-1:1,v=this.table;for(n>>=2;n>=2;n>>=2){a=e/n<<1;var h=a>>>1,d=h>>>1,_=d>>>1;for(o=0;o<e;o+=a)for(var y=0,k=0;y<=_;y+=2,k+=n){var A=o+y,m=A+d,g=m+d,b=g+d,S=t[A],M=t[A+1],D=t[m],B=t[m+1],E=t[g],H=t[g+1],W=t[b],it=t[b+1],tt=S,L=M,T=v[k],R=l*v[k+1],w=D*T-B*R,I=D*R+B*T,F=v[2*k],j=l*v[2*k+1],Y=E*F-H*j,G=E*j+H*F,$=v[3*k],nt=l*v[3*k+1],kt=W*$-it*nt,et=W*nt+it*$,mt=tt+Y,Ct=L+G,ot=tt-Y,Tt=L-G,ft=w+kt,gt=I+et,bt=l*(w-kt),Dt=l*(I-et),$e=mt+ft,Wt=Ct+gt,te=ot+Dt,ee=Tt-bt;if(t[A]=$e,t[A+1]=Wt,t[m]=te,t[m+1]=ee,y===0){var re=mt-ft,ie=Ct-gt;t[g]=re,t[g+1]=ie;continue}if(y!==_){var ne=ot,Ce=-Tt,fr=mt,hr=-Ct,mr=-l*Dt,pr=-l*bt,Gt=-l*gt,vr=-l*ft,gr=ne+mr,br=Ce+pr,Te=fr+vr,u=hr-Gt,f=o+d-y,p=o+h-y;t[f]=gr,t[f+1]=br,t[p]=Te,t[p+1]=u}}}};wt.prototype._singleRealTransform2=function(t,e,r){let n=this._out,a=this._data,o=a[e],s=a[e+r],c=o+s,l=o-s;n[t]=c,n[t+1]=0,n[t+2]=l,n[t+3]=0};wt.prototype._singleRealTransform4=function(t,e,r){let n=this._out,a=this._data,o=this._inv?-1:1,s=r*2,c=r*3,l=a[e],v=a[e+r],h=a[e+s],d=a[e+c],_=l+h,y=l-h,k=v+d,A=o*(v-d),m=_+k,g=y,b=-A,S=_-k,M=y,D=A;n[t]=m,n[t+1]=0,n[t+2]=g,n[t+3]=b,n[t+4]=S,n[t+5]=0,n[t+6]=M,n[t+7]=D}});var tn=Rt(qe=>{"use strict";var rr=qe&&qe.__assign||function(){return rr=Object.assign||function(i){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},rr.apply(this,arguments)};Object.defineProperty(qe,"__esModule",{value:!0});var ea={threshold:.1,sampleRate:44100,probabilityThreshold:.1};function ra(i){i===void 0&&(i={});var t=rr(rr({},ea),i),e=t.threshold,r=t.sampleRate,n=t.probabilityThreshold;return function(o){var s;for(s=1;s<o.length;s*=2);s/=2;for(var c=s/2,l=new Float32Array(c),v=0,h,d=0;d<c;d++)l[d]=0;for(var d=1;d<c;d++)for(var _=0;_<c;_++){var y=o[_]-o[_+d];l[d]+=y*y}l[0]=1,l[1]=1;for(var k=0,d=1;d<c;d++)k+=l[d],l[d]*=d/k;for(h=2;h<c;h++)if(l[h]<e){for(;h+1<c&&l[h+1]<l[h];)h++;v=1-l[h];break}if(h===c||l[h]>=e||v<n)return null;var A,m,g;if(h<1?m=h:m=h-1,h+1<c?g=h+1:g=h,m===h)l[h]<=l[g]?A=h:A=g;else if(g===h)l[h]<=l[m]?A=h:A=m;else{var b=l[m],S=l[h],M=l[g];A=h+(M-b)/(2*(2*S-M-b))}return r/A}}qe.YIN=ra});var en=Rt(je=>{"use strict";var ir=je&&je.__assign||function(){return ir=Object.assign||function(i){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},ir.apply(this,arguments)};Object.defineProperty(je,"__esModule",{value:!0});var ia={sampleRate:44100,minFrequency:82,maxFrequency:1e3,ratio:5,sensitivity:.1};function na(i){i===void 0&&(i={});var t=ir(ir({},ia),i),e=t.sampleRate,r=t.minFrequency,n=t.maxFrequency,a=t.sensitivity,o=t.ratio,s=[],c=Math.ceil(e/r),l=Math.floor(e/n);return function(h){var d=h.length,_=0,y=1/0,k=-1/0,A,m,g,b,S,M,D,B;for(b=0;b<d;b++)if(l<=b&&b<=c){for(D=0,B=b,_=0,A=[],m=[];D<d-b;_++,B++,D++)A[_]=h[D],m[_]=h[B];var E=A.length;for(g=[],M=0;M<E;M++)g[M]=A[M]-m[M];var H=0;for(M=0;M<E;M++)H+=Math.abs(g[M]);s[b]=H}for(S=l;S<c;S++)s[S]<y&&(y=s[S]),s[S]>k&&(k=s[S]);var W=Math.round(a*(k-y)+y);for(S=l;S<=c&&s[S]>W;S++);var it=l/2;y=s[S];var tt=S;for(b=S-1;b<S+it&&b<=c;b++)s[b]<y&&(y=s[b],tt=b);return Math.round(s[tt]*o)<k?e/tt:null}}je.AMDF=na});var nn=Rt(Ue=>{"use strict";var nr=Ue&&Ue.__assign||function(){return nr=Object.assign||function(i){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},nr.apply(this,arguments)};Object.defineProperty(Ue,"__esModule",{value:!0});var rn={sampleRate:44100};function aa(i){i===void 0&&(i=rn);var t=nr(nr({},rn),i),e=t.sampleRate;return function(n){var a=n.length,o=0,s,c,l,v;for(s=0;s<a;s++)v=n[s],o+=v*v;if(o=Math.sqrt(o/a),o<.01)return-1;var h=0,d=a-1,_=.2;for(s=0;s<a/2;s++)if(Math.abs(n[s])<_){h=s;break}for(s=1;s<a/2;s++)if(Math.abs(n[a-s])<_){d=a-s;break}var y=n.slice(h,d),k=y.length,A=new Array(k).fill(0);for(s=0;s<k;s++)for(c=0;c<k-s;c++)A[s]=A[s]+y[c]*y[c+s];for(l=0;A[l]>A[l+1];)l++;var m=-1,g=-1;for(s=l;s<k;s++)A[s]>m&&(m=A[s],g=s);var b=g,S=A[b-1],M=A[b],D=A[b+1],B=(S+D-2*M)/2,E=(D-S)/2;return B&&(b=b-E/(2*B)),e/b}}Ue.ACF2PLUS=aa});var an=Rt(He=>{"use strict";var ar=He&&He.__assign||function(){return ar=Object.assign||function(i){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},ar.apply(this,arguments)};Object.defineProperty(He,"__esModule",{value:!0});var oa=6,sa=3e3,la=3,ca=.75,ua={sampleRate:44100};function da(i){i===void 0&&(i={});var t=ar(ar({},ua),i),e=t.sampleRate;return function(n){for(var a=[],o=[],s=n.length,c=null,l=0,v=0,h=0,d=0;d<s;d++){var _=n[d];l=l+_,h=Math.max(h,_),v=Math.min(v,_)}l/=s,v-=l,h-=l;for(var y=h>-1*v?h:-1*v,k=y*ca,A=0,m=-1,g=n.length,b,S,M;b=~~(e/(Math.pow(2,A)*sa)),!(g<2);){var D=void 0,B=-1e3,E=-1e6,H=-1e6,W=!1,it=!1;M=0,S=0;for(var d=2;d<g;d++){var tt=n[d]-l,L=n[d-1]-l;L<=0&&tt>0&&(W=!0),L>=0&&tt<0&&(it=!0),D=tt-L,B>-1e3&&(it&&B<0&&D>=0&&Math.abs(tt)>=k&&d>E+b&&(a[M++]=d,E=d,it=!1),W&&B>0&&D<=0&&Math.abs(tt)>=k&&d>H+b&&(o[S++]=d,H=d,W=!1)),B=D}if(M===0&&S===0)break;for(var T=void 0,R=[],d=0;d<g;d++)R[d]=0;for(var d=0;d<M;d++)for(var w=1;w<la;w++)d+w<M&&(T=Math.abs(a[d]-a[d+w]),R[T]+=1);for(var I=-1,F=-1,d=0;d<g;d++){for(var j=0,w=-1*b;w<=b;w++)d+w>=0&&d+w<g&&(j+=R[d+w]);j===F?d===2*I&&(I=d):j>F&&(F=j,I=d)}for(var Y=0,G=0,w=-b;w<=b;w++)if(I+w>=0&&I+w<s){var $=R[I+w];$>0&&(G+=$,Y+=(I+w)*$)}if(Y/=G,m>-1&&Math.abs(Y*2-m)<=2*b){c=e/(Math.pow(2,A-1)*m);break}if(m=Y,A++,A>=oa||g<2)break;var nt=n.subarray(0);g===R.length&&(nt=new Float32Array(g/2));for(var d=0;d<g/2;d++)nt[d]=(n[2*d]+n[2*d+1])/2;n=nt,g/=2}return c}}He.DynamicWavelet=da});var on=Rt(Be=>{"use strict";var or=Be&&Be.__assign||function(){return or=Object.assign||function(i){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},or.apply(this,arguments)};Object.defineProperty(Be,"__esModule",{value:!0});var fa={bufferSize:1024,cutoff:.97,sampleRate:44100};function ha(i){i===void 0&&(i={});var t=or(or({},fa),i),e=t.bufferSize,r=t.cutoff,n=t.sampleRate,a=.5,o=80,s=new Float32Array(e),c=new Float32Array(e),l,v,h=[],d=[],_=[];function y(m){var g,b;c[0]=m[0]*m[0];for(var S=1;S<m.length;S+=1)c[S]=m[S]*m[S]+c[S-1];for(var M=0;M<m.length;M++){g=0,b=c[m.length-1-M]+c[m.length-1]-c[M];for(var S=0;S<m.length-M;S++)g+=m[S]*m[S+M];s[M]=2*g/b}}function k(m){var g=s[m-1],b=s[m],S=s[m+1],M=m,D=S+g-2*b;if(D===0)l=M,v=b;else{var B=g-S;l=M+B/(2*D),v=b-B*B/(8*D)}}function A(){for(var m=0,g=0;m<(s.length-1)/3&&s[m]>0;)m++;for(;m<s.length-1&&s[m]<=0;)m++;for(m==0&&(m=1);m<s.length-1;)if(s[m]>s[m-1]&&s[m]>=s[m+1]&&(g==0||s[m]>s[g])&&(g=m),m++,m<s.length-1&&s[m]<=0)for(g>0&&(h.push(g),g=0);m<s.length-1&&s[m]<=0;)m++;g>0&&h.push(g)}return function(g){var b;h=[],d=[],_=[],y(g),A();for(var S=-1/0,M=0;M<h.length;M++){var D=h[M];S=Math.max(S,s[D]),s[D]>a&&(k(D),_.push(v),d.push(l),S=Math.max(S,v))}if(d.length){for(var B=r*S,E=0,M=0;M<_.length;M++)if(_[M]>=B){E=M;break}var H=d[E],W=n/H;W>o?b=W:b=-1}else b=-1;return{probability:S,freq:b}}}Be.Macleod=ha});var sn=Rt(Kt=>{"use strict";var sr=Kt&&Kt.__assign||function(){return sr=Object.assign||function(i){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},sr.apply(this,arguments)};Object.defineProperty(Kt,"__esModule",{value:!0});Kt.DEFAULT_FREQUENCIES_PARAMS={tempo:120,quantization:4,sampleRate:44100};function ma(i,t){var e=i.map(function(l){return l(t)}).filter(function(l){return l!==null}).sort(function(l,v){return l-v});if(e.length===1)return e[0];if(e.length===2){var r=e[0],n=e[1];return r*2>n?Math.sqrt(r*n):r}else{var r=e[0],n=e[1],a=e[e.length-2],o=e[e.length-1],s=r*2>n?e:e.slice(1),c=a*2>o?s:s.slice(0,-1);return Math.pow(c.reduce(function(h,d){return h*d},1),1/c.length)}}function pa(i,t,e){e===void 0&&(e={});var r=sr(sr({},Kt.DEFAULT_FREQUENCIES_PARAMS),e),n=r.tempo,a=r.quantization,o=r.sampleRate,s=t.length,c=Math.round(o*60/(a*n)),l;Array.isArray(i)?l=ma.bind(null,i):l=i;for(var v=[],h=0,d=s-c;h<=d;h+=c){var _=t.slice(h,h+c),y=l(_);v.push(y)}return v}Kt.frequencies=pa});var mn=Rt(jt=>{"use strict";Object.defineProperty(jt,"__esModule",{value:!0});var ln=tn();jt.YIN=ln.YIN;var cn=en();jt.AMDF=cn.AMDF;var un=nn();jt.ACF2PLUS=un.ACF2PLUS;var dn=an();jt.DynamicWavelet=dn.DynamicWavelet;var fn=on();jt.Macleod=fn.Macleod;var hn=sn();jt.frequencies=hn.frequencies;jt.default={YIN:ln.YIN,AMDF:cn.AMDF,ACF2PLUS:un.ACF2PLUS,DynamicWavelet:dn.DynamicWavelet,Macleod:fn.Macleod,frequencies:hn.frequencies}});var kn=Rt((Bl,_n)=>{var wa=4,_a=.001,ka=1e-7,xa=10,We=11,ur=1/(We-1),Aa=typeof Float32Array=="function";function gn(i,t){return 1-3*t+3*i}function bn(i,t){return 3*t-6*i}function yn(i){return 3*i}function dr(i,t,e){return((gn(t,e)*i+bn(t,e))*i+yn(t))*i}function wn(i,t,e){return 3*gn(t,e)*i*i+2*bn(t,e)*i+yn(t)}function Sa(i,t,e,r,n){var a,o,s=0;do o=t+(e-t)/2,a=dr(o,r,n)-i,a>0?e=o:t=o;while(Math.abs(a)>ka&&++s<xa);return o}function Ma(i,t,e,r){for(var n=0;n<wa;++n){var a=wn(t,e,r);if(a===0)return t;var o=dr(t,e,r)-i;t-=o/a}return t}function Ea(i){return i}_n.exports=function(t,e,r,n){if(!(0<=t&&t<=1&&0<=r&&r<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===e&&r===n)return Ea;for(var a=Aa?new Float32Array(We):new Array(We),o=0;o<We;++o)a[o]=dr(o*ur,t,r);function s(c){for(var l=0,v=1,h=We-1;v!==h&&a[v]<=c;++v)l+=ur;--v;var d=(c-a[v])/(a[v+1]-a[v]),_=l+d*ur,y=wn(_,t,r);return y>=_a?Ma(c,_,t,r):y===0?_:Sa(c,l,l+ur,t,r)}return function(l){return l===0?0:l===1?1:dr(s(l),e,n)}}});var Pr={};ht(Pr,{AppBodyComponent:()=>qt});var rt=i=>t=>typeof t=="function"?((e,r)=>(window.customElements.define(e,r),r))(i,t):((e,r)=>{let{kind:n,elements:a}=r;return{kind:n,elements:a,finisher(o){window.customElements.define(e,o)}}})(i,t);var Pn=(i,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,i)}};function at(i){return(t,e)=>e!==void 0?((r,n,a)=>{n.constructor.createProperty(a,r)})(i,t,e):Pn(i,t)}function hi(i){return at({...i,state:!0})}var ae=({finisher:i,descriptor:t})=>(e,r)=>{var n;if(r===void 0){let a=(n=e.originalKey)!==null&&n!==void 0?n:e.key,o=t!=null?{kind:"method",placement:"prototype",key:a,descriptor:t(e.key)}:{...e,key:a};return i!=null&&(o.finisher=function(s){i(s,a)}),o}{let a=e.constructor;t!==void 0&&Object.defineProperty(e,r,t(r)),i==null||i(a,r)}};function mi(i,t){return ae({descriptor:e=>{let r={get(){var n,a;return(a=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(i))!==null&&a!==void 0?a:null},enumerable:!0,configurable:!0};if(t){let n=typeof e=="symbol"?Symbol():"__"+e;r.get=function(){var a,o;return this[n]===void 0&&(this[n]=(o=(a=this.renderRoot)===null||a===void 0?void 0:a.querySelector(i))!==null&&o!==void 0?o:null),this[n]}}return r}})}var Je=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_r=Symbol(),pi=new Map,Qe=class{constructor(t,e){if(this._$cssResult$=!0,e!==_r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=pi.get(this.cssText);return Je&&t===void 0&&(pi.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}},oe=i=>new Qe(typeof i=="string"?i:i+"",_r),K=(i,...t)=>{let e=i.length===1?i[0]:t.reduce((r,n,a)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+i[a+1],i[0]);return new Qe(e,_r)},kr=(i,t)=>{Je?i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let r=document.createElement("style"),n=window.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=e.cssText,i.appendChild(r)})},Xe=Je?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return oe(e)})(i):i;var xr,vi=window.trustedTypes,On=vi?vi.emptyScript:"",gi=window.reactiveElementPolyfillSupport,Ar={toAttribute(i,t){switch(t){case Boolean:i=i?On:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},bi=(i,t)=>t!==i&&(t==t||i==i),Sr={attribute:!0,type:String,converter:Ar,reflect:!1,hasChanged:bi},Bt=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,r)=>{let n=this._$Eh(r,e);n!==void 0&&(this._$Eu.set(n,r),t.push(n))}),t}static createProperty(t,e=Sr){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let r=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,r,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(n){let a=this[t];this[e]=n,this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Sr}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){let e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let n of r)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let n of r)e.unshift(Xe(n))}else t!==void 0&&e.push(Xe(t));return e}static _$Eh(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,r;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return kr(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostConnected)===null||r===void 0?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostDisconnected)===null||r===void 0?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ES(t,e,r=Sr){var n,a;let o=this.constructor._$Eh(t,r);if(o!==void 0&&r.reflect===!0){let s=((a=(n=r.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&a!==void 0?a:Ar.toAttribute)(e,r.type);this._$Ei=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Ei=null}}_$AK(t,e){var r,n,a;let o=this.constructor,s=o._$Eu.get(t);if(s!==void 0&&this._$Ei!==s){let c=o.getPropertyOptions(s),l=c.converter,v=(a=(n=(r=l)===null||r===void 0?void 0:r.fromAttribute)!==null&&n!==void 0?n:typeof l=="function"?l:null)!==null&&a!==void 0?a:Ar.fromAttribute;this._$Ei=s,this[s]=v(e,c.type),this._$Ei=null}}requestUpdate(t,e,r){let n=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||bi)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Ei!==t&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(t,r))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((n,a)=>this[a]=n),this._$Et=void 0);let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$Eg)===null||t===void 0||t.forEach(n=>{var a;return(a=n.hostUpdate)===null||a===void 0?void 0:a.call(n)}),this.update(r)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostUpdated)===null||n===void 0?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$E_!==void 0&&(this._$E_.forEach((e,r)=>this._$ES(r,this[r],e)),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}};Bt.finalized=!0,Bt.elementProperties=new Map,Bt.elementStyles=[],Bt.shadowRootOptions={mode:"open"},gi==null||gi({ReactiveElement:Bt}),((xr=globalThis.reactiveElementVersions)!==null&&xr!==void 0?xr:globalThis.reactiveElementVersions=[]).push("1.0.2");var Mr,se=globalThis.trustedTypes,yi=se?se.createPolicy("lit-html",{createHTML:i=>i}):void 0,Vt=`lit$${(Math.random()+"").slice(9)}$`,wi="?"+Vt,In=`<${wi}>`,le=document,Pe=(i="")=>le.createComment(i),Oe=i=>i===null||typeof i!="object"&&typeof i!="function",_i=Array.isArray,Fn=i=>{var t;return _i(i)||typeof((t=i)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},Ie=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ki=/-->/g,xi=/>/g,Zt=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Ai=/'/g,Si=/"/g,Mi=/^(?:script|style|textarea)$/i,Ei=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),V=Ei(1),ce=Ei(2),zt=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),$i=new WeakMap,Ci=(i,t,e)=>{var r,n;let a=(r=e==null?void 0:e.renderBefore)!==null&&r!==void 0?r:t,o=a._$litPart$;if(o===void 0){let s=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:null;a._$litPart$=o=new he(t.insertBefore(Pe(),s),s,void 0,e??{})}return o._$AI(i),o},ue=le.createTreeWalker(le,129,null,!1),Nn=(i,t)=>{let e=i.length-1,r=[],n,a=t===2?"<svg>":"",o=Ie;for(let c=0;c<e;c++){let l=i[c],v,h,d=-1,_=0;for(;_<l.length&&(o.lastIndex=_,h=o.exec(l),h!==null);)_=o.lastIndex,o===Ie?h[1]==="!--"?o=ki:h[1]!==void 0?o=xi:h[2]!==void 0?(Mi.test(h[2])&&(n=RegExp("</"+h[2],"g")),o=Zt):h[3]!==void 0&&(o=Zt):o===Zt?h[0]===">"?(o=n??Ie,d=-1):h[1]===void 0?d=-2:(d=o.lastIndex-h[2].length,v=h[1],o=h[3]===void 0?Zt:h[3]==='"'?Si:Ai):o===Si||o===Ai?o=Zt:o===ki||o===xi?o=Ie:(o=Zt,n=void 0);let y=o===Zt&&i[c+1].startsWith("/>")?" ":"";a+=o===Ie?l+In:d>=0?(r.push(v),l.slice(0,d)+"$lit$"+l.slice(d)+Vt+y):l+Vt+(d===-2?(r.push(void 0),c):y)}let s=a+(i[e]||"<?>")+(t===2?"</svg>":"");return[yi!==void 0?yi.createHTML(s):s,r]},de=class{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,v]=Nn(t,e);if(this.el=de.createElement(l,r),ue.currentNode=this.el.content,e===2){let h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(n=ue.nextNode())!==null&&c.length<s;){if(n.nodeType===1){if(n.hasAttributes()){let h=[];for(let d of n.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(Vt)){let _=v[o++];if(h.push(d),_!==void 0){let y=n.getAttribute(_.toLowerCase()+"$lit$").split(Vt),k=/([.?@])?(.*)/.exec(_);c.push({type:1,index:a,name:k[2],strings:y,ctor:k[1]==="."?Ri:k[1]==="?"?Pi:k[1]==="@"?Oi:Fe})}else c.push({type:6,index:a})}for(let d of h)n.removeAttribute(d)}if(Mi.test(n.tagName)){let h=n.textContent.split(Vt),d=h.length-1;if(d>0){n.textContent=se?se.emptyScript:"";for(let _=0;_<d;_++)n.append(h[_],Pe()),ue.nextNode(),c.push({type:2,index:++a});n.append(h[d],Pe())}}}else if(n.nodeType===8)if(n.data===wi)c.push({type:2,index:a});else{let h=-1;for(;(h=n.data.indexOf(Vt,h+1))!==-1;)c.push({type:7,index:a}),h+=Vt.length-1}a++}}static createElement(t,e){let r=le.createElement("template");return r.innerHTML=t,r}};function fe(i,t,e=i,r){var n,a,o,s;if(t===zt)return t;let c=r!==void 0?(n=e._$Cl)===null||n===void 0?void 0:n[r]:e._$Cu,l=Oe(t)?void 0:t._$litDirective$;return(c==null?void 0:c.constructor)!==l&&((a=c==null?void 0:c._$AO)===null||a===void 0||a.call(c,!1),l===void 0?c=void 0:(c=new l(i),c._$AT(i,e,r)),r!==void 0?((o=(s=e)._$Cl)!==null&&o!==void 0?o:s._$Cl=[])[r]=c:e._$Cu=c),c!==void 0&&(t=fe(i,c._$AS(i,t.values),c,r)),t}var Ti=class{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;let{el:{content:r},parts:n}=this._$AD,a=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:le).importNode(r,!0);ue.currentNode=a;let o=ue.nextNode(),s=0,c=0,l=n[0];for(;l!==void 0;){if(s===l.index){let v;l.type===2?v=new he(o,o.nextSibling,this,t):l.type===1?v=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(v=new Ii(o,this,t)),this.v.push(v),l=n[++c]}s!==(l==null?void 0:l.index)&&(o=ue.nextNode(),s++)}return a}m(t){let e=0;for(let r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},he=class{constructor(t,e,r,n){var a;this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cg=(a=n==null?void 0:n.isConnected)===null||a===void 0||a}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=fe(this,t,e),Oe(t)?t===Z||t==null||t===""?(this._$AH!==Z&&this._$AR(),this._$AH=Z):t!==this._$AH&&t!==zt&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.S(t):Fn(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==Z&&Oe(this._$AH)?this._$AA.nextSibling.data=t:this.S(le.createTextNode(t)),this._$AH=t}T(t){var e;let{values:r,_$litType$:n}=t,a=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=de.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===a)this._$AH.m(r);else{let o=new Ti(a,this),s=o.p(this.options);o.m(r),this.S(s),this._$AH=o}}_$AC(t){let e=$i.get(t.strings);return e===void 0&&$i.set(t.strings,e=new de(t)),e}M(t){_i(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,n=0;for(let a of t)n===e.length?e.push(r=new he(this.A(Pe()),this.A(Pe()),this,this.options)):r=e[n],r._$AI(a),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,e);t&&t!==this._$AB;){let n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Fe=class{constructor(t,e,r,n,a){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,n){let a=this.strings,o=!1;if(a===void 0)t=fe(this,t,e,0),o=!Oe(t)||t!==this._$AH&&t!==zt,o&&(this._$AH=t);else{let s=t,c,l;for(t=a[0],c=0;c<a.length-1;c++)l=fe(this,s[r+c],e,c),l===zt&&(l=this._$AH[c]),o||(o=!Oe(l)||l!==this._$AH[c]),l===Z?t=Z:t!==Z&&(t+=(l??"")+a[c+1]),this._$AH[c]=l}o&&!n&&this.k(t)}k(t){t===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ri=class extends Fe{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===Z?void 0:t}},Dn=se?se.emptyScript:"",Pi=class extends Fe{constructor(){super(...arguments),this.type=4}k(t){t&&t!==Z?this.element.setAttribute(this.name,Dn):this.element.removeAttribute(this.name)}},Oi=class extends Fe{constructor(t,e,r,n,a){super(t,e,r,n,a),this.type=5}_$AI(t,e=this){var r;if((t=(r=fe(this,t,e,0))!==null&&r!==void 0?r:Z)===zt)return;let n=this._$AH,a=t===Z&&n!==Z||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==Z&&(n===Z||a);a&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;typeof this._$AH=="function"?this._$AH.call((r=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}},Ii=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){fe(this,t)}};var Fi=window.litHtmlPolyfillSupport;Fi==null||Fi(de,he),((Mr=globalThis.litHtmlVersions)!==null&&Mr!==void 0?Mr:globalThis.litHtmlVersions=[]).push("2.0.2");var Er,$r;var Q=class extends Bt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;let r=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=r.firstChild),r}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Ci(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return zt}};Q.finalized=!0,Q._$litElement$=!0,(Er=globalThis.litElementHydrateSupport)===null||Er===void 0||Er.call(globalThis,{LitElement:Q});var Ni=globalThis.litElementPolyfillSupport;Ni==null||Ni({LitElement:Q});(($r=globalThis.litElementVersions)!==null&&$r!==void 0?$r:globalThis.litElementVersions=[]).push("3.0.2");var Cr={};ht(Cr,{default:()=>ct});console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");var ct=K`
  /*!
 * Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2023 Fonticons, Inc.
 */

  .fa {
    font-family: var(--fa-style-family, "Font Awesome 6 Free");
    font-weight: var(--fa-style, 900);
  }

  .fa,
  .fa-classic,
  .fa-sharp,
  .fas,
  .fa-solid,
  .far,
  .fa-regular,
  .fab,
  .fa-brands {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    display: var(--fa-display, inline-block);
    font-style: normal;
    font-variant: normal;
    line-height: 1;
    text-rendering: auto;
  }

  .fas,
  .fa-classic,
  .fa-solid,
  .far,
  .fa-regular {
    font-family: 'Font Awesome 6 Free';
  }

  .fab,
  .fa-brands {
    font-family: 'Font Awesome 6 Brands';
  }

  .fa-1x {
    font-size: 1em;
  }

  .fa-2x {
    font-size: 2em;
  }

  .fa-3x {
    font-size: 3em;
  }

  .fa-4x {
    font-size: 4em;
  }

  .fa-5x {
    font-size: 5em;
  }

  .fa-6x {
    font-size: 6em;
  }

  .fa-7x {
    font-size: 7em;
  }

  .fa-8x {
    font-size: 8em;
  }

  .fa-9x {
    font-size: 9em;
  }

  .fa-10x {
    font-size: 10em;
  }

  .fa-2xs {
    font-size: 0.625em;
    line-height: 0.1em;
    vertical-align: 0.225em;
  }

  .fa-xs {
    font-size: 0.75em;
    line-height: 0.08333em;
    vertical-align: 0.125em;
  }

  .fa-sm {
    font-size: 0.875em;
    line-height: 0.07143em;
    vertical-align: 0.05357em;
  }

  .fa-lg {
    font-size: 1.25em;
    line-height: 0.05em;
    vertical-align: -0.075em;
  }

  .fa-xl {
    font-size: 1.5em;
    line-height: 0.04167em;
    vertical-align: -0.125em;
  }

  .fa-2xl {
    font-size: 2em;
    line-height: 0.03125em;
    vertical-align: -0.1875em;
  }

  .fa-fw {
    text-align: center;
    width: 1.25em;
  }

  .fa-ul {
    list-style-type: none;
    margin-left: var(--fa-li-margin, 2.5em);
    padding-left: 0;
  }

  .fa-ul > li {
    position: relative;
  }

  .fa-li {
    left: calc(var(--fa-li-width, 2em) * -1);
    position: absolute;
    text-align: center;
    width: var(--fa-li-width, 2em);
    line-height: inherit;
  }

  .fa-border {
    border-color: var(--fa-border-color, #eee);
    border-radius: var(--fa-border-radius, 0.1em);
    border-style: var(--fa-border-style, solid);
    border-width: var(--fa-border-width, 0.08em);
    padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
  }

  .fa-pull-left {
    float: left;
    margin-right: var(--fa-pull-margin, 0.3em);
  }

  .fa-pull-right {
    float: right;
    margin-left: var(--fa-pull-margin, 0.3em);
  }

  .fa-beat {
    -webkit-animation-name: fa-beat;
    animation-name: fa-beat;
    -webkit-animation-delay: var(--fa-animation-delay, 0s);
    animation-delay: var(--fa-animation-delay, 0s);
    -webkit-animation-direction: var(--fa-animation-direction, normal);
    animation-direction: var(--fa-animation-direction, normal);
    -webkit-animation-duration: var(--fa-animation-duration, 1s);
    animation-duration: var(--fa-animation-duration, 1s);
    -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
    animation-iteration-count: var(--fa-animation-iteration-count, infinite);
    -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
    animation-timing-function: var(--fa-animation-timing, ease-in-out);
  }

  .fa-bounce {
    -webkit-animation-name: fa-bounce;
    animation-name: fa-bounce;
    -webkit-animation-delay: var(--fa-animation-delay, 0s);
    animation-delay: var(--fa-animation-delay, 0s);
    -webkit-animation-direction: var(--fa-animation-direction, normal);
    animation-direction: var(--fa-animation-direction, normal);
    -webkit-animation-duration: var(--fa-animation-duration, 1s);
    animation-duration: var(--fa-animation-duration, 1s);
    -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
    animation-iteration-count: var(--fa-animation-iteration-count, infinite);
    -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
    animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
  }

  .fa-fade {
    -webkit-animation-name: fa-fade;
    animation-name: fa-fade;
    -webkit-animation-delay: var(--fa-animation-delay, 0s);
    animation-delay: var(--fa-animation-delay, 0s);
    -webkit-animation-direction: var(--fa-animation-direction, normal);
    animation-direction: var(--fa-animation-direction, normal);
    -webkit-animation-duration: var(--fa-animation-duration, 1s);
    animation-duration: var(--fa-animation-duration, 1s);
    -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
    animation-iteration-count: var(--fa-animation-iteration-count, infinite);
    -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
    animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
  }

  .fa-beat-fade {
    -webkit-animation-name: fa-beat-fade;
    animation-name: fa-beat-fade;
    -webkit-animation-delay: var(--fa-animation-delay, 0s);
    animation-delay: var(--fa-animation-delay, 0s);
    -webkit-animation-direction: var(--fa-animation-direction, normal);
    animation-direction: var(--fa-animation-direction, normal);
    -webkit-animation-duration: var(--fa-animation-duration, 1s);
    animation-duration: var(--fa-animation-duration, 1s);
    -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
    animation-iteration-count: var(--fa-animation-iteration-count, infinite);
    -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
    animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
  }

  .fa-flip {
    -webkit-animation-name: fa-flip;
    animation-name: fa-flip;
    -webkit-animation-delay: var(--fa-animation-delay, 0s);
    animation-delay: var(--fa-animation-delay, 0s);
    -webkit-animation-direction: var(--fa-animation-direction, normal);
    animation-direction: var(--fa-animation-direction, normal);
    -webkit-animation-duration: var(--fa-animation-duration, 1s);
    animation-duration: var(--fa-animation-duration, 1s);
    -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
    animation-iteration-count: var(--fa-animation-iteration-count, infinite);
    -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
    animation-timing-function: var(--fa-animation-timing, ease-in-out);
  }

  .fa-shake {
    -webkit-animation-name: fa-shake;
    animation-name: fa-shake;
    -webkit-animation-delay: var(--fa-animation-delay, 0s);
    animation-delay: var(--fa-animation-delay, 0s);
    -webkit-animation-direction: var(--fa-animation-direction, normal);
    animation-direction: var(--fa-animation-direction, normal);
    -webkit-animation-duration: var(--fa-animation-duration, 1s);
    animation-duration: var(--fa-animation-duration, 1s);
    -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
    animation-iteration-count: var(--fa-animation-iteration-count, infinite);
    -webkit-animation-timing-function: var(--fa-animation-timing, linear);
    animation-timing-function: var(--fa-animation-timing, linear);
  }

  .fa-spin {
    -webkit-animation-name: fa-spin;
    animation-name: fa-spin;
    -webkit-animation-delay: var(--fa-animation-delay, 0s);
    animation-delay: var(--fa-animation-delay, 0s);
    -webkit-animation-direction: var(--fa-animation-direction, normal);
    animation-direction: var(--fa-animation-direction, normal);
    -webkit-animation-duration: var(--fa-animation-duration, 2s);
    animation-duration: var(--fa-animation-duration, 2s);
    -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
    animation-iteration-count: var(--fa-animation-iteration-count, infinite);
    -webkit-animation-timing-function: var(--fa-animation-timing, linear);
    animation-timing-function: var(--fa-animation-timing, linear);
  }

  .fa-spin-reverse {
    --fa-animation-direction: reverse;
  }

  .fa-pulse,
  .fa-spin-pulse {
    -webkit-animation-name: fa-spin;
    animation-name: fa-spin;
    -webkit-animation-direction: var(--fa-animation-direction, normal);
    animation-direction: var(--fa-animation-direction, normal);
    -webkit-animation-duration: var(--fa-animation-duration, 1s);
    animation-duration: var(--fa-animation-duration, 1s);
    -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
    animation-iteration-count: var(--fa-animation-iteration-count, infinite);
    -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
    animation-timing-function: var(--fa-animation-timing, steps(8));
  }

  @media (prefers-reduced-motion: reduce) {
    .fa-beat,
    .fa-bounce,
    .fa-fade,
    .fa-beat-fade,
    .fa-flip,
    .fa-pulse,
    .fa-shake,
    .fa-spin,
    .fa-spin-pulse {
      -webkit-animation-delay: -1ms;
      animation-delay: -1ms;
      -webkit-animation-duration: 1ms;
      animation-duration: 1ms;
      -webkit-animation-iteration-count: 1;
      animation-iteration-count: 1;
      -webkit-transition-delay: 0s;
      transition-delay: 0s;
      -webkit-transition-duration: 0s;
      transition-duration: 0s;
    }
  }

  @-webkit-keyframes fa-beat {
    0%, 90% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    45% {
      -webkit-transform: scale(var(--fa-beat-scale, 1.25));
      transform: scale(var(--fa-beat-scale, 1.25));
    }
  }

  @keyframes fa-beat {
    0%, 90% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    45% {
      -webkit-transform: scale(var(--fa-beat-scale, 1.25));
      transform: scale(var(--fa-beat-scale, 1.25));
    }
  }

  @-webkit-keyframes fa-bounce {
    0% {
      -webkit-transform: scale(1, 1) translateY(0);
      transform: scale(1, 1) translateY(0);
    }
    10% {
      -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
      transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
    }
    30% {
      -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
      transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
    }
    50% {
      -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
      transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
    }
    57% {
      -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
      transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
    }
    64% {
      -webkit-transform: scale(1, 1) translateY(0);
      transform: scale(1, 1) translateY(0);
    }
    100% {
      -webkit-transform: scale(1, 1) translateY(0);
      transform: scale(1, 1) translateY(0);
    }
  }

  @keyframes fa-bounce {
    0% {
      -webkit-transform: scale(1, 1) translateY(0);
      transform: scale(1, 1) translateY(0);
    }
    10% {
      -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
      transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
    }
    30% {
      -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
      transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
    }
    50% {
      -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
      transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
    }
    57% {
      -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
      transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
    }
    64% {
      -webkit-transform: scale(1, 1) translateY(0);
      transform: scale(1, 1) translateY(0);
    }
    100% {
      -webkit-transform: scale(1, 1) translateY(0);
      transform: scale(1, 1) translateY(0);
    }
  }

  @-webkit-keyframes fa-fade {
    50% {
      opacity: var(--fa-fade-opacity, 0.4);
    }
  }

  @keyframes fa-fade {
    50% {
      opacity: var(--fa-fade-opacity, 0.4);
    }
  }

  @-webkit-keyframes fa-beat-fade {
    0%, 100% {
      opacity: var(--fa-beat-fade-opacity, 0.4);
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    50% {
      opacity: 1;
      -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
      transform: scale(var(--fa-beat-fade-scale, 1.125));
    }
  }

  @keyframes fa-beat-fade {
    0%, 100% {
      opacity: var(--fa-beat-fade-opacity, 0.4);
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    50% {
      opacity: 1;
      -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
      transform: scale(var(--fa-beat-fade-scale, 1.125));
    }
  }

  @-webkit-keyframes fa-flip {
    50% {
      -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
      transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
    }
  }

  @keyframes fa-flip {
    50% {
      -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
      transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
    }
  }

  @-webkit-keyframes fa-shake {
    0% {
      -webkit-transform: rotate(-15deg);
      transform: rotate(-15deg);
    }
    4% {
      -webkit-transform: rotate(15deg);
      transform: rotate(15deg);
    }
    8%, 24% {
      -webkit-transform: rotate(-18deg);
      transform: rotate(-18deg);
    }
    12%, 28% {
      -webkit-transform: rotate(18deg);
      transform: rotate(18deg);
    }
    16% {
      -webkit-transform: rotate(-22deg);
      transform: rotate(-22deg);
    }
    20% {
      -webkit-transform: rotate(22deg);
      transform: rotate(22deg);
    }
    32% {
      -webkit-transform: rotate(-12deg);
      transform: rotate(-12deg);
    }
    36% {
      -webkit-transform: rotate(12deg);
      transform: rotate(12deg);
    }
    40%, 100% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }

  @keyframes fa-shake {
    0% {
      -webkit-transform: rotate(-15deg);
      transform: rotate(-15deg);
    }
    4% {
      -webkit-transform: rotate(15deg);
      transform: rotate(15deg);
    }
    8%, 24% {
      -webkit-transform: rotate(-18deg);
      transform: rotate(-18deg);
    }
    12%, 28% {
      -webkit-transform: rotate(18deg);
      transform: rotate(18deg);
    }
    16% {
      -webkit-transform: rotate(-22deg);
      transform: rotate(-22deg);
    }
    20% {
      -webkit-transform: rotate(22deg);
      transform: rotate(22deg);
    }
    32% {
      -webkit-transform: rotate(-12deg);
      transform: rotate(-12deg);
    }
    36% {
      -webkit-transform: rotate(12deg);
      transform: rotate(12deg);
    }
    40%, 100% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }

  @-webkit-keyframes fa-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes fa-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .fa-rotate-90 {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  .fa-rotate-180 {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  .fa-rotate-270 {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }

  .fa-flip-horizontal {
    -webkit-transform: scale(-1, 1);
    transform: scale(-1, 1);
  }

  .fa-flip-vertical {
    -webkit-transform: scale(1, -1);
    transform: scale(1, -1);
  }

  .fa-flip-both,
  .fa-flip-horizontal.fa-flip-vertical {
    -webkit-transform: scale(-1, -1);
    transform: scale(-1, -1);
  }

  .fa-rotate-by {
    -webkit-transform: rotate(var(--fa-rotate-angle, none));
    transform: rotate(var(--fa-rotate-angle, none));
  }

  .fa-stack {
    display: inline-block;
    height: 2em;
    line-height: 2em;
    position: relative;
    vertical-align: middle;
    width: 2.5em;
  }

  .fa-stack-1x,
  .fa-stack-2x {
    left: 0;
    position: absolute;
    text-align: center;
    width: 100%;
    z-index: var(--fa-stack-z-index, auto);
  }

  .fa-stack-1x {
    line-height: inherit;
  }

  .fa-stack-2x {
    font-size: 2em;
  }

  .fa-inverse {
    color: var(--fa-inverse, #fff);
  }

  /* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen
readers do not read off random characters that represent icons */

    /*
    * This is only a partial list. This was easier than unessecarily loading a ton of unused css.
    */

  .fa-undo::before {
    content: "\\f0e2";
  }

  .fa-coffee::before {
    content: "\\f0f4";
  }

  .fa-gear::before {
    content: "\\f013";
  }

  .fa-circle-dollar-to-slot::before {
    content: "\\f4b9";
  }

  .fa-circle-xmark::before {
    content: "\\f057";
  }

  .fa-circle-play::before {
    content: "\\f144";
  }

  .sr-only,
  .fa-sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .sr-only-focusable:not(:focus),
  .fa-sr-only-focusable:not(:focus) {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;var Fo=Ze(zi()),Tr=Symbol(),Ke=class{constructor(){this.subscribers={}}static getInstance(){return this.instance===void 0&&(this.instance=new Ke),this.instance}dispatch(t,e){let r=this.subscribers[t];r!==void 0&&Object.keys(r).forEach(n=>r[n](e))}register(t,e){let r=this.getNextId();return this.subscribers[t]||(this.subscribers[t]={}),this.subscribers[t][r]=e,{unregister:()=>{this.subscribers[t]!==void 0&&(delete this.subscribers[t][r],Object.keys(this.subscribers[t]).length===0&&delete this.subscribers[t])}}}getNextId(){return Ke.nextId++}},Pt=Ke;Pt.nextId=0,Pt.instance=void 0;function Mt(i){return(t,e)=>{let r=Reflect.getMetadata(Tr,t)||[];r.push({key:e,event:i}),Reflect.defineMetadata(Tr,r,t)}}function Ot(i){return class extends i{constructor(...t){super(...t);this.$subscriptions=[];(Reflect.getMetadata(Tr,i.prototype)||[]).forEach(r=>{let n=this[r.key].bind(this);this.$subscriptions.push(Pt.getInstance().register(r.event,n))})}disconnectedCallback(){super.disconnectedCallback(),this.$subscriptions.forEach(t=>{t.unregister()})}}}var tr=["primary","highlight","background"],Yt=class extends Event{constructor(t){super("theme-change",{bubbles:!0,composed:!0});this.updatedColors=t}static updatedColor(t,e){return new Yt(new Map([[t,e]]))}static allReset(){let t=[];for(let e of tr)t.push([e,O.defaultConfig[e]]);return new Yt(new Map(t))}};var me={frequencyRing:"Frequency Ring",volumeRing:"Volume Ring",noteFill:"Note Fill",noteOctave:"Note Octave",noteOutline:"Note Outline",needle:"Needle",donationButton:"Donation Button",settingsButton:"Settings Button"};var vt=class{};vt.map=(t,e,r)=>(t-e[0])*(r[1]-r[0])/(e[1]-e[0])+r[0],vt.clamp=(t,e)=>Math.min(Math.max(t,e[0]),e[1]),vt.round=(t,e)=>Number(Math.round(Number(t+"e"+e))+"e-"+e);var Jt=class{static Instance(){return this._instance||(this._instance=new this)}static isHexCode(t){return t.match(/^#[0-9a-f]{6}/i)}static getPropertyName(t,e){let r={};return Object.keys(t).map(n=>r[n]=n),e(r)}static getStoredValueOrDefault(t){var e;return(e=localStorage.getItem(t))!=null?e:this.defaultConfig[t]}static set config(t){Object.keys(t).forEach(e=>{localStorage.setItem(e,t[e].toString())})}static get config(){let t={accidentalMode:this.accidentalMode,frequencyOfA:this.frequencyOfA,debugMode:"false",algorithm:this.algorithm};for(let e in tr)t[e]=this.getColor(e);for(let e in me)t[e]=this.getComponent(e).toString();return t}static reset(){Jt.accidentalMode=this.defaultConfig.accidentalMode,Jt.frequencyOfA=this.defaultConfig.frequencyOfA;for(let t of tr)Jt.setColor(t,this.defaultConfig[t]);Jt.algorithm=this.defaultConfig.algorithm;for(let t in me)Jt.setComponent(t,!0)}static get debugMode(){return this.getStoredValueOrDefault("debugMode")==="true"}static set debugMode(t){localStorage.setItem(this.getPropertyName(this.defaultConfig,e=>e.debugMode),t.toString())}static set accidentalMode(t){localStorage.setItem(this.getPropertyName(this.defaultConfig,e=>e.accidentalMode),t.toString()),Pt.getInstance().dispatch("config-change",new Event("config-change"))}static get accidentalMode(){return Number(this.getStoredValueOrDefault("accidentalMode"))}static set frequencyOfA(t){t=vt.clamp(t,[this.ALowerBoundFreq,this.AUpperBoundFreq]),localStorage.setItem(this.getPropertyName(this.defaultConfig,e=>e.frequencyOfA),t.toString()),Pt.getInstance().dispatch("config-change",new Event("config-change"))}static get frequencyOfA(){return Number(this.getStoredValueOrDefault("frequencyOfA"))}static setColor(t,e){this.isHexCode(e)&&(localStorage.setItem(this.getPropertyName(this.defaultConfig,r=>r[t]),e),Pt.getInstance().dispatch("theme-change",Yt.updatedColor(t,e)))}static getColor(t){return this.getStoredValueOrDefault(t)}static set algorithm(t){localStorage.setItem(this.getPropertyName(this.defaultConfig,e=>e.algorithm),t),Pt.getInstance().dispatch("config-change",new Event("config-change"))}static get algorithm(){return this.getStoredValueOrDefault("algorithm")}static setComponent(t,e){localStorage.setItem(this.getPropertyName(this.defaultConfig,r=>r[t]),e.toString()),Pt.getInstance().dispatch("config-change",new Event("config-change"))}static getComponent(t){return this.getStoredValueOrDefault(t)==="true"}},O=Jt;O.defaultConfig={accidentalMode:1,frequencyOfA:440,debugMode:"true",primary:"#FF7A00",highlight:"#FFFFFF",background:"#000000",algorithm:"McLeod",frequencyRing:"true",volumeRing:"true",noteFill:"true",noteOctave:"true",noteOutline:"true",needle:"true",donationButton:"true",settingsButton:"true"},O.ALowerBoundFreq=415,O.AUpperBoundFreq=466;var pe=class{static hexToRgb(t){let e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;t=t.replace(e,function(n,a,o,s){return a+a+o+o+s+s});let r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return r?{r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16)}:null}};var Rr={};ht(Rr,{default:()=>Lt});var Lt=K`
    a, button {
        margin: 1em;
        padding: 1em;

        border-radius: 1em;
        backdrop-filter: blur(25px);
        background-color: rgba(var(--primary-color), 0.3);

        font: inherit;
        border: none;
        color: inherit;
        cursor: pointer;

        align-self: center;
        height: fit-content;
        font-size: 4cqi;

        text-decoration: none;

        transition-duration: .2s;
        transition-timing-function: var(--entrance-transition);
        transition-property: background-color, scale;
    }

    a:hover, button:hover {
        background-color: rgba(var(--primary-color), 0.6);
        scale: 1.1;
    }
`;var zn=K`
    :root {
        --doc-height: 100%;
    }

    :host {
        // Necessary for using the theme on load
        --primary-color: ${oe(O.defaultConfig.primary)};
        --background-color: ${oe(O.defaultConfig.background)};
        --highlight-color: ${oe(O.defaultConfig.highlight)};
        --font-family: "Archivo Black", sans-serif;

        // Set some defaults
        background-color: rgb(var(--background-color));
        color: rgb(var(--primary-color));
        font-family: var(--font-family);
    }

    .app-body {
        width: 100%;
        height: 100vh; /* fallback for Js load */
        height: var(--doc-height);
        background-color: rgb(var(--background-color, black));
    }

    /* Create a square view centered */

    .app-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90vw;
        height: 90vw;
        max-height: 90vh;
        max-width: 90vh;

        container-type: inline-size;
    }
    
    .floating-button {
        color: rgb(var(--highlight-color));
        font-size: clamp(1rem, 3cqi, 2rem);
        z-index: 2;
        position: absolute;
        margin: 0.5em;
        padding: 0.5em;

        width: clamp(3rem, 10cqi, 6rem);
        height: clamp(3rem, 10cqi, 6rem);
    }

    .settings-button {
        right: 0%;
    }

    .donation-button {
        left: 0%;
    }
`,qt=class extends Q{constructor(){super(...arguments);this.showSettings=!1;this.showDonation=!1;this.refreshTheme=t=>{t.updatedColors.forEach((e,r)=>{let n=pe.hexToRgb(e);this.style.setProperty("--"+r+"-color",`${n.r}, ${n.g}, ${n.b}`)})};this.refresh=()=>{this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.calculateDocumentHeight();let t=pe.hexToRgb(O.getColor("primary")),e=pe.hexToRgb(O.getColor("highlight")),r=pe.hexToRgb(O.getColor("background"));this.style.setProperty("--primary-color",`${t.r}, ${t.g}, ${t.b}`),this.style.setProperty("--highlight-color",`${e.r}, ${e.g}, ${e.b}`),this.style.setProperty("--background-color",`${r.r}, ${r.g}, ${r.b}`)}calculateDocumentHeight(){let t=()=>{document.documentElement.style.setProperty("--doc-height",`${window.innerHeight}px`)};window.addEventListener("resize",t),t()}toggleSettings(){this.showDonation=!1,this.showSettings=!this.showSettings}renderSettings(){return this.showSettings?V`
            <tn-settings @settings-close="${this.toggleSettings}"></tn-settings>`:Z}toggleDonation(){this.showSettings=!1,this.showDonation=!this.showDonation}onDoubleClick(){this.showSettings||this.toggleSettings()}renderDonation(){return this.showDonation?V`
            <tn-donation></tn-donation>`:Z}renderButtonDonation(){return O.getComponent("donationButton")?V`
                <button class="floating-button donation-button" @click="${this.toggleDonation}" aria-label="Donation"><i
                        class="${this.showDonation?"far fa-circle-xmark":"fa fa-coffee"}"></i></button>
        `:Z}renderButtonSettings(){return O.getComponent("settingsButton")?V`
                <button class="floating-button settings-button" @click="${this.toggleSettings}" aria-label="Settings"><i
                        class="${this.showSettings?"far fa-circle-xmark":"fa fa-gear"}"></i></button>
        `:Z}render(){return V`
            <div class="app-body" @dblclick="${this.onDoubleClick}">
                ${this.renderButtonDonation()}
                ${this.renderButtonSettings()}
                ${this.renderSettings()}
                ${this.renderDonation()}
                <div class="app-content">
                    <tn-carousel>
                        <tn-tuner></tn-tuner>
                        <tn-pitch-pipe></tn-pitch-pipe>
                    </tn-carousel>
                </div>
            </div>
        `}};qt.styles=[zn,ct,Lt],q([at()],qt.prototype,"showSettings",2),q([at()],qt.prototype,"showDonation",2),q([Mt("theme-change")],qt.prototype,"refreshTheme",2),q([Mt("config-change")],qt.prototype,"refresh",2),qt=q([rt("tn-app"),Ot],qt);var Fr={};ht(Fr,{DonationComponent:()=>Ne,DonationComponentStyles:()=>Li});var Ir={};ht(Ir,{default:()=>Or});var Or=K`
    /*!
     * Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com
     * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
     * Copyright 2024 Fonticons, Inc.
     */

    /*
    * This is only a partial list. This was easier than unessecarily loading a ton of unused css.
    */

    .fa-paypal::before {
      content: "\\f1ed";
    }
`;var Li=K`

    .donation-container{
        display:flex;
        flex-direction: column;
        height: 50vh;

        margin: 2em;
        padding: 4em;
        color: rgb(var(--highlight-color));

        height: 30vw;
        container-type: inline-size;
    }

    .donation-blurb {
        font-size: clamp(1rem, 4cqi, 4rem);
    }

    .emphasis {
        font-size: 1.5em;
        font-weight: bold;
        text-decoration: underline double rgb(var(--primary-color));
    }
`,Ne=class extends Q{constructor(){super()}render(){return V`
            <tn-modal>
                <div slot="header">Buy me a coffee?</div>
                <div slot="content" class="donation-container">
                    <div class="donation-blurb">
                        <span class="emphasis">This application will always remain free,</span> but I love coffee and if you want to buy me one, I won't stop you.
                    </div>
                    <a class="donation-button" target="_blank" href="https://www.paypal.com/donate/?business=5NG3ZRJL9KA2G&no_recurring=0&item_name=Thank+you%21&currency_code=USD">
                        <i class="fab fa-paypal"></i> Donate
                    </a>
                </div>
            </tn-modal>
        `}};Ne.styles=[Li,Lt,Or,ct],Ne=q([rt("tn-donation")],Ne);var Nr={};ht(Nr,{PitchPipeComponent:()=>ve});var Ln=K`
    .play-note-button-container {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
        pointer-events: none;
    }

    .play-note-button {
        pointer-events: auto;
        width: 9ch;
        height: 9ch;
        border-radius: 50%;
        margin-top: 38.5%;
        color: rgb(var(--highlight-color));
    }
`,ve=class extends Q{constructor(){super(...arguments);this._handlePlay=()=>{var t;new Audio(`./audio/pitch${(t=this.note)==null?void 0:t.index}.mp3`).play()}}render(){return V`
                <div class="play-note-button-container" @click=${this._handlePlay}>
                    <button class="play-note-button" aria-label="Play Note"><i class="fa fa-circle-play"></i></button>
                </div>
        `}};ve.styles=[Ln,Lt,ct],q([at()],ve.prototype,"note",2),ve=q([rt("tn-pitch-pipe-player")],ve);var Br={};ht(Br,{PitchPipeComponent:()=>we});var qi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ji=i=>(...t)=>({_$litDirective$:i,values:t}),Dr=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var Et=ji(class extends Dr{constructor(i){var t;if(super(i),i.type!==qi.ATTRIBUTE||i.name!=="class"||((t=i.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){var e,r;if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.et=new Set(i.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(let a in t)t[a]&&!((e=this.et)===null||e===void 0?void 0:e.has(a))&&this.st.add(a);return this.render(t)}let n=i.element.classList;this.st.forEach(a=>{a in t||(n.remove(a),this.st.delete(a))});for(let a in t){let o=!!t[a];o===this.st.has(a)||((r=this.et)===null||r===void 0?void 0:r.has(a))||(o?(n.add(a),this.st.add(a)):(n.remove(a),this.st.delete(a)))}return zt}});var ge=12,qn=["C","C","D","D","E","F","F","G","G","A","A","B"],jn=[1,3,6,8,10],Un=["C","D","D","E","E","F","G","G","A","A","B","B"],Qt;(function(e){e[e.sharp=0]="sharp",e[e.flat=1]="flat"})(Qt||(Qt={}));var lt=class{get letter(){return this.lookupLetter()}get accidental(){return this.lookupAccidental()}constructor(t){this.index=vt.clamp(t,[0,127]),this.octave=Math.floor(t/ge)-1}equals(t){return this.index===t.index&&this.letter===t.letter&&this.accidental===t.accidental}lookupLetter(){return O.accidentalMode?qn[this.index%ge]:Un[this.index%ge]}lookupAccidental(){return jn.includes(this.index%ge)?O.accidentalMode?"#":"b":""}},zr=new lt(0),Hn=new lt(69),Ui=new lt(127),be=class{static freqToNote(t){if(t<this.noteToPitch(zr))return zr;if(t>this.noteToPitch(Ui))return Ui;let e=Math.round(ge*Math.log2(t/this.noteToPitch(zr)));if(isNaN(e))throw new Error("calculated frequency produced NaN");return new lt(e)}static noteToPitch(t){let e=t.index-Hn.index,r=yr(2,1/ge);return O.frequencyOfA*yr(r,e)}};var Hr={};ht(Hr,{CarouselComponent:()=>_t});var qr={};ht(qr,{default:()=>Lr});var Lr=K`
    .keen-slider:not([data-keen-slider-disabled]){-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;align-content:flex-start;display:flex;overflow:hidden;position:relative;touch-action:pan-y;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-khtml-user-select:none;width:100%}.keen-slider:not([data-keen-slider-disabled]) .keen-slider__slide{min-height:100%;overflow:hidden;position:relative;width:100%}.keen-slider:not([data-keen-slider-disabled])[data-keen-slider-reverse]{flex-direction:row-reverse}.keen-slider:not([data-keen-slider-disabled])[data-keen-slider-v]{flex-wrap:wrap}
`;var ye=function(){return ye=Object.assign||function(i){for(var t,e=1,r=arguments.length;e<r;e++)for(var n in t=arguments[e])Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n]);return i},ye.apply(this,arguments)};function Hi(i,t,e){if(e||arguments.length===2)for(var r,n=0,a=t.length;n<a;n++)!r&&n in t||(r||(r=Array.prototype.slice.call(t,0,n)),r[n]=t[n]);return i.concat(r||Array.prototype.slice.call(t))}function Bi(i){return Array.prototype.slice.call(i)}function Vi(i,t){var e=Math.floor(i);return e===t||e+1===t?i:t}function Yi(){return Date.now()}function jr(i,t,e){if(t="data-keen-slider-"+t,e===null)return i.removeAttribute(t);i.setAttribute(t,e||"")}function er(i,t){return t=t||document,typeof i=="function"&&(i=i(t)),Array.isArray(i)?i:typeof i=="string"?Bi(t.querySelectorAll(i)):i instanceof HTMLElement?[i]:i instanceof NodeList?Bi(i):[]}function De(i){i.raw&&(i=i.raw),i.cancelable&&!i.defaultPrevented&&i.preventDefault()}function ze(i){i.raw&&(i=i.raw),i.stopPropagation&&i.stopPropagation()}function Wi(){var i=[];return{add:function(t,e,r,n){t.addListener?t.addListener(r):t.addEventListener(e,r,n),i.push([t,e,r,n])},input:function(t,e,r,n){this.add(t,e,function(a){return function(o){o.nativeEvent&&(o=o.nativeEvent);var s=o.changedTouches||[],c=o.targetTouches||[],l=o.detail&&o.detail.x?o.detail:null;return a({id:l?l.identifier?l.identifier:"i":c[0]?c[0]?c[0].identifier:"e":"d",idChanged:l?l.identifier?l.identifier:"i":s[0]?s[0]?s[0].identifier:"e":"d",raw:o,x:l&&l.x?l.x:c[0]?c[0].screenX:l?l.x:o.pageX,y:l&&l.y?l.y:c[0]?c[0].screenY:l?l.y:o.pageY})}}(r),n)},purge:function(){i.forEach(function(t){t[0].removeListener?t[0].removeListener(t[2]):t[0].removeEventListener(t[1],t[2],t[3])}),i=[]}}}function Ur(i,t,e){return Math.min(Math.max(i,t),e)}function $t(i){return(i>0?1:0)-(i<0?1:0)||+i}function Gi(i){var t=i.getBoundingClientRect();return{height:Vi(t.height,i.offsetHeight),width:Vi(t.width,i.offsetWidth)}}function yt(i,t,e,r){var n=i&&i[t];return n==null?e:r&&typeof n=="function"?n():n}function xt(i){return Math.round(1e6*i)/1e6}function Bn(i){var t,e,r,n,a,o;function s(d){o||(o=d),c(!0);var _=d-o;_>r&&(_=r);var y=n[e];if(y[3]<_)return e++,s(d);var k=y[2],A=y[4],m=y[0],g=y[1]*(0,y[5])(A===0?1:(_-k)/A);if(g&&i.track.to(m+g),_<r)return v();o=null,c(!1),l(null),i.emit("animationEnded")}function c(d){t.active=d}function l(d){t.targetIdx=d}function v(){var d;d=s,a=window.requestAnimationFrame(d)}function h(){var d;d=a,window.cancelAnimationFrame(d),c(!1),l(null),o&&i.emit("animationStopped"),o=null}return t={active:!1,start:function(d){if(h(),i.track.details){var _=0,y=i.track.details.position;e=0,r=0,n=d.map(function(k){var A,m=Number(y),g=(A=k.earlyExit)!==null&&A!==void 0?A:k.duration,b=k.easing,S=k.distance*b(g/k.duration)||0;y+=S;var M=r;return r+=g,_+=S,[m,k.distance,M,r,k.duration,b]}),l(i.track.distToIdx(_)),v(),i.emit("animationStarted")}},stop:h,targetIdx:null}}function Vn(i){var t,e,r,n,a,o,s,c,l,v,h,d,_,y,k=1/0,A=[],m=null,g=0;function b(T){tt(g+T)}function S(T){var R=M(g+T).abs;return E(R)?R:null}function M(T){var R=Math.floor(Math.abs(xt(T/e))),w=xt((T%e+e)%e);w===e&&(w=0);var I=$t(T),F=s.indexOf(Hi([],s,!0).reduce(function(Y,G){return Math.abs(G-w)<Math.abs(Y-w)?G:Y})),j=F;return I<0&&R++,F===o&&(j=0,R+=I>0?1:-1),{abs:j+R*o*I,origin:F,rel:j}}function D(T,R,w){var I;if(R||!W())return B(T,w);if(!E(T))return null;var F=M(w??g),j=F.abs,Y=T-F.rel,G=j+Y;I=B(G);var $=B(G-o*$t(Y));return($!==null&&Math.abs($)<Math.abs(I)||I===null)&&(I=$),xt(I)}function B(T,R){if(R==null&&(R=xt(g)),!E(T)||T===null)return null;T=Math.round(T);var w=M(R),I=w.abs,F=w.rel,j=w.origin,Y=it(T),G=(R%e+e)%e,$=s[j],nt=Math.floor((T-(I-F))/o)*e;return xt($-G-$+s[Y]+nt+(j===o?e:0))}function E(T){return H(T)===T}function H(T){return Ur(T,l,v)}function W(){return n.loop}function it(T){return(T%o+o)%o}function tt(T){var R;R=T-g,A.push({distance:R,timestamp:Yi()}),A.length>6&&(A=A.slice(-6)),g=xt(T);var w=L().abs;if(w!==m){var I=m!==null;m=w,I&&i.emit("slideChanged")}}function L(T){var R=T?null:function(){if(o){var w=W(),I=w?(g%e+e)%e:g,F=(w?g%e:g)-a[0][2],j=0-(F<0&&w?e-Math.abs(F):F),Y=0,G=M(g),$=G.abs,nt=G.rel,kt=a[nt][2],et=a.map(function(mt,Ct){var ot=j+Y;(ot<0-mt[0]||ot>1)&&(ot+=(Math.abs(ot)>e-1&&w?e:0)*$t(-ot));var Tt=Ct-nt,ft=$t(Tt),gt=Tt+$;w&&(ft===-1&&ot>kt&&(gt+=o),ft===1&&ot<kt&&(gt-=o),h!==null&&gt<h&&(ot+=e),d!==null&&gt>d&&(ot-=e));var bt=ot+mt[0]+mt[1],Dt=Math.max(ot>=0&&bt<=1?1:bt<0||ot>1?0:ot<0?Math.min(1,(mt[0]+ot)/mt[0]):(1-ot)/mt[0],0);return Y+=mt[0]+mt[1],{abs:gt,distance:n.rtl?-1*ot+1-mt[0]:ot,portion:Dt,size:mt[0]}});return $=H($),nt=it($),{abs:H($),length:r,max:y,maxIdx:v,min:_,minIdx:l,position:g,progress:w?I/e:g/r,rel:nt,slides:et,slidesLength:e}}}();return t.details=R,i.emit("detailsChanged"),R}return t={absToRel:it,add:b,details:null,distToIdx:S,idxToDist:D,init:function(T){if(function(){if(n=i.options,a=(n.trackConfig||[]).map(function(F){return[yt(F,"size",1),yt(F,"spacing",0),yt(F,"origin",0)]}),o=a.length){e=xt(a.reduce(function(F,j){return F+j[0]+j[1]},0));var w,I=o-1;r=xt(e+a[0][2]-a[I][0]-a[I][2]-a[I][1]),s=a.reduce(function(F,j){if(!F)return[0];var Y=a[F.length-1],G=F[F.length-1]+(Y[0]+Y[2])+Y[1];return G-=j[2],F[F.length-1]>G&&(G=F[F.length-1]),G=xt(G),F.push(G),(!w||w<G)&&(c=F.length-1),w=G,F},null),r===0&&(c=0),s.push(xt(e))}}(),!o)return L(!0);var R;(function(){var w=i.options.range,I=i.options.loop;h=l=I?yt(I,"min",-1/0):0,d=v=I?yt(I,"max",k):c;var F=yt(w,"min",null),j=yt(w,"max",null);F!==null&&(l=F),j!==null&&(v=j),_=l===-1/0?l:i.track.idxToDist(l||0,!0,0),y=v===k?v:D(v,!0,0),j===null&&(d=v),yt(w,"align",!1)&&v!==k&&a[it(v)][2]===0&&(y-=1-a[it(v)][0],v=S(y-g)),_=xt(_),y=xt(y)})(),R=T,Number(R)===R?b(B(H(T))):L()},to:tt,velocity:function(){var T=Yi(),R=A.reduce(function(w,I){var F=I.distance,j=I.timestamp;return T-j>200||($t(F)!==$t(w.distance)&&w.distance&&(w={distance:0,lastTimestamp:0,time:0}),w.time&&(w.distance+=F),w.lastTimestamp&&(w.time+=j-w.lastTimestamp),w.lastTimestamp=j),w},{distance:0,lastTimestamp:0,time:0});return R.distance/R.time||0}}}function Yn(i){var t,e,r,n,a,o,s,c;function l(m){return 2*m}function v(m){return Ur(m,s,c)}function h(m){return 1-Math.pow(1-m,3)}function d(){return r?i.track.velocity():0}function _(){A();var m=i.options.mode==="free-snap",g=i.track,b=d();n=$t(b);var S=i.track.details,M=[];if(b||!m){var D=y(b),B=D.dist,E=D.dur;if(E=l(E),B*=n,m){var H=g.idxToDist(g.distToIdx(B),!0);H&&(B=H)}M.push({distance:B,duration:E,easing:h});var W=S.position,it=W+B;if(it<a||it>o){var tt=it<a?a-W:o-W,L=0,T=b;if($t(tt)===n){var R=Math.min(Math.abs(tt)/Math.abs(B),1),w=function(j){return 1-Math.pow(1-j,1/3)}(R)*E;M[0].earlyExit=w,T=b*(1-R)}else M[0].earlyExit=0,L+=tt;var I=y(T,100),F=I.dist*n;i.options.rubberband&&(M.push({distance:F,duration:l(I.dur),easing:h}),M.push({distance:-F+L,duration:500,easing:h}))}i.animator.start(M)}else i.moveToIdx(v(S.abs),!0,{duration:500,easing:function(j){return 1+--j*j*j*j*j}})}function y(m,g){g===void 0&&(g=1e3);var b=147e-9+(m=Math.abs(m))/g;return{dist:Math.pow(m,2)/b,dur:m/b}}function k(){var m=i.track.details;m&&(a=m.min,o=m.max,s=m.minIdx,c=m.maxIdx)}function A(){i.animator.stop()}i.on("updated",k),i.on("optionsChanged",k),i.on("created",k),i.on("dragStarted",function(){r=!1,A(),t=e=i.track.details.abs}),i.on("dragChecked",function(){r=!0}),i.on("dragEnded",function(){var m=i.options.mode;m==="snap"&&function(){var g=i.track,b=i.track.details,S=b.position,M=$t(d());(S>o||S<a)&&(M=0);var D=t+M;b.slides[g.absToRel(D)].portion===0&&(D-=M),t!==e&&(D=e),$t(g.idxToDist(D,!0))!==M&&(D+=M),D=v(D);var B=g.idxToDist(D,!0);i.animator.start([{distance:B,duration:500,easing:function(E){return 1+--E*E*E*E*E}}])}(),m!=="free"&&m!=="free-snap"||_()}),i.on("dragged",function(){e=i.track.details.abs})}function Wn(i){var t,e,r,n,a,o,s,c,l,v,h,d,_,y,k,A,m,g,b=Wi();function S(L){if(o&&c===L.id){var T=E(L);if(l){if(!B(L))return D(L);v=T,l=!1,i.emit("dragChecked")}if(A)return v=T;De(L);var R=function(I){if(m===-1/0&&g===1/0)return I;var F=i.track.details,j=F.length,Y=F.position,G=Ur(I,m-Y,g-Y);if(j===0)return 0;if(!i.options.rubberband)return G;if(Y<=g&&Y>=m||Y<m&&e>0||Y>g&&e<0)return I;var $=(Y<m?Y-m:Y-g)/j,nt=n*j,kt=Math.abs($*nt),et=Math.max(0,1-kt/a*2);return et*et*I}(s(v-T)/n*r);e=$t(R);var w=i.track.details.position;(w>m&&w<g||w===m&&e>0||w===g&&e<0)&&ze(L),h+=R,!d&&Math.abs(h*n)>5&&(d=!0),i.track.add(R),v=T,i.emit("dragged")}}function M(L){!o&&i.track.details&&i.track.details.length&&(h=0,o=!0,d=!1,l=!0,c=L.id,B(L),v=E(L),i.emit("dragStarted"))}function D(L){o&&c===L.idChanged&&(o=!1,i.emit("dragEnded"))}function B(L){var T=H(),R=T?L.y:L.x,w=T?L.x:L.y,I=_!==void 0&&y!==void 0&&Math.abs(y-w)<=Math.abs(_-R);return _=R,y=w,I}function E(L){return H()?L.y:L.x}function H(){return i.options.vertical}function W(){n=i.size,a=H()?window.innerHeight:window.innerWidth;var L=i.track.details;L&&(m=L.min,g=L.max)}function it(L){d&&(ze(L),De(L))}function tt(){if(b.purge(),i.options.drag&&!i.options.disabled){var L;L=i.options.dragSpeed||1,s=typeof L=="function"?L:function(R){return R*L},r=i.options.rtl?-1:1,W(),t=i.container,function(){var R="data-keen-slider-clickable";er("[".concat(R,"]:not([").concat(R,"=false])"),t).map(function(w){b.add(w,"dragstart",ze),b.add(w,"mousedown",ze),b.add(w,"touchstart",ze)})}(),b.add(t,"dragstart",function(R){De(R)}),b.add(t,"click",it,{capture:!0}),b.input(t,"ksDragStart",M),b.input(t,"ksDrag",S),b.input(t,"ksDragEnd",D),b.input(t,"mousedown",M),b.input(t,"mousemove",S),b.input(t,"mouseleave",D),b.input(t,"mouseup",D),b.input(t,"touchstart",M,{passive:!0}),b.input(t,"touchmove",S,{passive:!1}),b.input(t,"touchend",D),b.input(t,"touchcancel",D),b.add(window,"wheel",function(R){o&&De(R)});var T="data-keen-slider-scrollable";er("[".concat(T,"]:not([").concat(T,"=false])"),i.container).map(function(R){return function(w){var I;b.input(w,"touchstart",function(F){I=E(F),A=!0,k=!0},{passive:!0}),b.input(w,"touchmove",function(F){var j=H(),Y=j?w.scrollHeight-w.clientHeight:w.scrollWidth-w.clientWidth,G=I-E(F),$=j?w.scrollTop:w.scrollLeft,nt=j&&w.style.overflowY==="scroll"||!j&&w.style.overflowX==="scroll";if(I=E(F),(G<0&&$>0||G>0&&$<Y)&&k&&nt)return A=!0;k=!1,De(F),A=!1}),b.input(w,"touchend",function(){A=!1})}(R)})}}i.on("updated",W),i.on("optionsChanged",tt),i.on("created",tt),i.on("destroyed",b.purge)}function Gn(i){var t,e,r=null;function n(_,y,k){i.animator.active?o(_,y,k):requestAnimationFrame(function(){return o(_,y,k)})}function a(){n(!1,!1,e)}function o(_,y,k){var A=0,m=i.size,g=i.track.details;if(g&&t){var b=g.slides;t.forEach(function(S,M){if(_)!r&&y&&c(S,null,k),l(S,null,k);else{if(!b[M])return;var D=b[M].size*m;!r&&y&&c(S,D,k),l(S,b[M].distance*m-A,k),A+=D}})}}function s(_){return i.options.renderMode==="performance"?Math.round(_):_}function c(_,y,k){var A=k?"height":"width";y!==null&&(y=s(y)+"px"),_.style["min-"+A]=y,_.style["max-"+A]=y}function l(_,y,k){if(y!==null){y=s(y);var A=k?y:0;y="translate3d(".concat(k?0:y,"px, ").concat(A,"px, 0)")}_.style.transform=y,_.style["-webkit-transform"]=y}function v(){t&&(o(!0,!0,e),t=null),i.on("detailsChanged",a,!0)}function h(){n(!1,!0,e)}function d(){v(),e=i.options.vertical,i.options.disabled||i.options.renderMode==="custom"||(r=yt(i.options.slides,"perView",null)==="auto",i.on("detailsChanged",a),(t=i.slides).length&&h())}i.on("created",d),i.on("optionsChanged",d),i.on("beforeOptionsChanged",function(){v()}),i.on("updated",h),i.on("destroyed",v)}function Zn(i,t){return function(e){var r,n,a,o,s,c,l=Wi();function v(E){var H;jr(e.container,"reverse",(H=e.container,window.getComputedStyle(H,null).getPropertyValue("direction")!=="rtl"||E?null:"")),jr(e.container,"v",e.options.vertical&&!E?"":null),jr(e.container,"disabled",e.options.disabled&&!E?"":null)}function h(){d()&&m()}function d(){var E=null;if(o.forEach(function(W){W.matches&&(E=W.__media)}),E===r)return!1;r||e.emit("beforeOptionsChanged"),r=E;var H=E?a.breakpoints[E]:a;return e.options=ye(ye({},a),H),v(),D(),B(),b(),!0}function _(E){var H=Gi(E);return(e.options.vertical?H.height:H.width)/e.size||1}function y(){return e.options.trackConfig.length}function k(E){for(var H in r=!1,a=ye(ye({},t),E),l.purge(),n=e.size,o=[],a.breakpoints||[]){var W=window.matchMedia(H);W.__media=H,o.push(W),l.add(W,"change",h)}l.add(window,"orientationchange",M),l.add(window,"resize",S),d()}function A(E){e.animator.stop();var H=e.track.details;e.track.init(E??(H?H.abs:0))}function m(E){A(E),e.emit("optionsChanged")}function g(E,H){if(E)return k(E),void m(H);D(),B();var W=y();b(),y()!==W?m(H):A(H),e.emit("updated")}function b(){var E=e.options.slides;if(typeof E=="function")return e.options.trackConfig=E(e.size,e.slides);for(var H=e.slides,W=H.length,it=typeof E=="number"?E:yt(E,"number",W,!0),tt=[],L=yt(E,"perView",1,!0),T=yt(E,"spacing",0,!0)/e.size||0,R=L==="auto"?T:T/L,w=yt(E,"origin","auto"),I=0,F=0;F<it;F++){var j=L==="auto"?_(H[F]):1/L-T+R,Y=w==="center"?.5-j/2:w==="auto"?0:w;tt.push({origin:Y,size:j,spacing:T}),I+=j}if(I+=T*(it-1),w==="auto"&&!e.options.loop&&L!==1){var G=0;tt.map(function($){var nt=I-G;return G+=$.size+T,nt>=1||($.origin=1-nt-(I>1?0:1-I)),$})}e.options.trackConfig=tt}function S(){D();var E=e.size;e.options.disabled||E===n||(n=E,g())}function M(){S(),setTimeout(S,500),setTimeout(S,2e3)}function D(){var E=Gi(e.container);e.size=(e.options.vertical?E.height:E.width)||1}function B(){e.slides=er(e.options.selector,e.container)}e.container=(c=er(i,s||document)).length?c[0]:null,e.destroy=function(){l.purge(),e.emit("destroyed"),v(!0)},e.prev=function(){e.moveToIdx(e.track.details.abs-1,!0)},e.next=function(){e.moveToIdx(e.track.details.abs+1,!0)},e.update=g,k(e.options)}}var Zi=function(i,t,e){try{return function(r,n){var a,o={};return a={emit:function(s){o[s]&&o[s].forEach(function(l){l(a)});var c=a.options&&a.options[s];c&&c(a)},moveToIdx:function(s,c,l){var v=a.track.idxToDist(s,c);if(v){var h=a.options.defaultAnimation;a.animator.start([{distance:v,duration:yt(l||h,"duration",500),easing:yt(l||h,"easing",function(d){return 1+--d*d*d*d*d})}])}},on:function(s,c,l){l===void 0&&(l=!1),o[s]||(o[s]=[]);var v=o[s].indexOf(c);v>-1?l&&delete o[s][v]:l||o[s].push(c)},options:r},function(){if(a.track=Vn(a),a.animator=Bn(a),n)for(var s=0,c=n;s<c.length;s++)(0,c[s])(a);a.track.init(a.options.initial||0),a.emit("created")}(),a}(t,Hi([Zn(i,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),Gn,Wn,Yn],e||[],!0))}catch(r){console.error(r)}};var Jn=K`
    .track-container {
        margin-block-start: -5%;
        display: flex;
        justify-content: center;
    }

    .track-ball {
        display: inline-block;
        border: solid 0.3em rgb(var(--primary-color));
        border-radius: 100%;
        width: 1em;
        height: 1em;
        margin-inline: 0.2em;
        transition: all .2s var(--entrance-transition);
    }

    .active {
        background-color: rgb(var(--primary-color));
    }
`,_t=class extends Q{constructor(){super(...arguments);this.slider=null;this.sliderWrapper=null;this._trackDetails=null}firstUpdated(){this.sliderWrapper=this.shadowRoot.getElementById("slider"),this.slider=new Zi(this.sliderWrapper,{loop:!0})}disconnectedCallback(){this.slider.destroy()}handleSlotchange(t){var r,n;let e=t.target.assignedElements({flatten:!0});e.forEach(a=>{a.className="keen-slider__slide",this.sliderWrapper.appendChild(a)}),this.slider.update(),this._trackDetails=(n=(r=this.slider)==null?void 0:r.track)==null?void 0:n.details,this.slider.on("slideChanged",()=>{var a,o;e.forEach((s,c)=>{var l,v,h;s.setAttribute(_t.slideShownAttribute,(((h=(v=(l=this.slider)==null?void 0:l.track)==null?void 0:v.details)==null?void 0:h.rel)===c).toString())}),this._trackDetails=(o=(a=this.slider)==null?void 0:a.track)==null?void 0:o.details})}render(){var t;return V`
            <div id="slider" class="keen-slider">
               <slot @slotchange=${this.handleSlotchange}></slot>
            </div>
            <div class="track-container">
                <div>
                    ${(t=this._trackDetails)==null?void 0:t.slides.map((e,r)=>V`<div class="track-ball ${this._trackDetails.rel===r?"active":""}"></div>`)}
                </div>
            </div>
        `}};_t.styles=[Jn,ct,Lr],_t.slideShownAttribute="carousel-slide-shown",q([hi()],_t.prototype,"_trackDetails",2),_t=q([rt("tn-carousel")],_t);var Qn=K`
    :host {
        display: flex;
        justify-content: center;
        align-items: center;
        --stroke-width: 20;
    }
    .pitch-pipe-gears {
        height: 100%;
        width: 100%;
        position: relative;
    }
    .center-text {
        text-anchor: middle;
        dominant-baseline: central;
    }
    .gear {
        font-family: var(--fa-style-family, "Font Awesome 6 Free");
        font-weight: var(--fa-style, 900);
        font-size: 50em;

        stroke-width: var(--stroke-width);
    }
    .gear-gradient {
        /* These percentages are a ratio of the view box size: 1 / (2 * (viewbox / 100))*/
        transform-origin: 0.0505% 0.0505%;
    }
    .stop-color-highlight {
        stop-color: rgb(var(--highlight-color));
    }
    .stop-color-background {
        stop-color: rgb(var(--background-color));
    }
    .stop-color-primary {
        stop-color: rgb(var(--primary-color));
    }

    .fill-primary-stroke-background {
        stroke: rgb(var(--background-color));
        fill: rgb(var(--primary-color));
    }
    .fill-background-stroke-primary {
        stroke: rgb(var(--primary-color));
        fill: rgb(var(--background-color));
    }

    .gear-note {
        font-size: 8em;
        stroke-width: calc(var(--stroke-width) / 2);
        stroke-linejoin: round;
        transition: font-size 0.3s var(--entrance-transition);
    }
    .gear-note-selected {
        font-size: 12em;
    }
    .gear-note-accidental {
        font-size: 4em;
        stroke-width: calc(var(--stroke-width) / 4);
    }
    .gear-note-accidental-selected {
        font-size: 8em;
    }
`,we=class extends Q{constructor(){super(...arguments);this._pipeRotation=0;this._pipeRotationVelocity=0;this._pipeRotationOffset=30;this._isUserInteracting=!0;this._shouldUpdatePhysics=!1;this.isShown=!1;this._notes=[new lt(48),new lt(49),new lt(50),new lt(51),new lt(52),new lt(53),new lt(54),new lt(55),new lt(56),new lt(57),new lt(58),new lt(59)];this._currentNote=this._notes[0];this.simulate=()=>{if(!this._isUserInteracting&&this._shouldUpdatePhysics&&this.isShown)if(this._shouldUpdatePhysics=!1,this.pipeRotationVelocity<.1&&this.pipeRotationVelocity>-.1){this.pipeRotationVelocity=0;let t=this.pipeRotation-Math.round(this.pipeRotation/30)*30;this.rotateToAngle(t)}else{let t=this.pipeRotationVelocity>0?-.2:.2;this.pipeRotationVelocity+=t,this.pipeRotation+=this.pipeRotationVelocity}requestAnimationFrame(this.simulate)};this._previousTouch=null}set pipeRotation(t){let e=this.pipeRotation;this._pipeRotation=t%360,this.pipeRotationVelocity=this.pipeRotation-e,this._currentNote=this._getCurrentNote(),this.requestUpdate("pipeRotation",e)}get pipeRotation(){return this._pipeRotation}set pipeRotationVelocity(t){this._pipeRotation!=t&&(this._shouldUpdatePhysics=!0),this._pipeRotationVelocity=t}get pipeRotationVelocity(){return this._pipeRotationVelocity}connectedCallback(){super.connectedCallback(),requestAnimationFrame(this.simulate)}rotateToAngle(t){let e=t>0?-1:1,n=Math.sqrt(2*.2*Math.abs(t));this.pipeRotationVelocity=n*e}_handleMouseMove(t){if(t.buttons>0){this._isUserInteracting=!0;let e=t.pageX>window.innerWidth/2;this._handleRotationStart(t.movementY,e)}}_handleMouseUp(){this._isUserInteracting=!1}_handleTouchMove(t){this._isUserInteracting=!0;let e=t.touches[0];if(this._previousTouch){let r=e.pageX>window.innerWidth/2;this._handleRotationStart(e.pageY-this._previousTouch.pageY,r)}this._previousTouch=e}_handleTouchEnd(){this._previousTouch=null,this._isUserInteracting=!1}_handleRotationStart(t,e=!0){e?this.pipeRotation+=t/4:this.pipeRotation-=t/4}_getCurrentNote(){let t=this.pipeRotation<0?this.pipeRotation:this.pipeRotation-360,e=vt.round(Math.abs(t)/30,0)%12;return this._notes[e]}_renderNotes(){return ce`
            ${this._notes.map((t,e)=>{let r=this.pipeRotation+30*e,n={"gear-note":!0,"center-text":!0,"gear-note-selected":this._currentNote.equals(t),"fill-primary-stroke-background":this._currentNote.equals(t),"fill-background-stroke-primary":!this._currentNote.equals(t)},a=structuredClone(n);return a["gear-note-accidental"]=!0,a["fill-primary-stroke-background"]=!this._currentNote.equals(t),a["gear-note-accidental-selected"]=this._currentNote.equals(t),a["fill-background-stroke-primary"]=this._currentNote.equals(t),ce`
                    <text @click=${()=>this.rotateToAngle(r)}
                        class="${Et(n)}" x="0%" y="-33%"
                        transform="rotate(${r})">
                        ${t.letter}
                    </text>
                    <text class="${Et(a)}" x="4%" y="-37%"
                        transform="rotate(${r})">
                        ${t.accidental}
                    </text>
                `})}
        `}render(){return V`

            <div class="pitch-pipe-gears"
                @mouseup="${this._handleMouseUp}"
                @touchend="${this._handleTouchEnd}"
                @mousemove="${this._handleMouseMove}"
                @touchmove="${this._handleTouchMove}">
                <svg viewbox="0 0 1000 1000" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(500, 500)">
                        <text class="${Et({gear:!0,"background-gear":!0,"center-text":!0})}" 
                              fill="url(#gradient-fill-background-gear)" 
                              stroke="url(#gradient-stroke-background-gear)"
                              transform="rotate(${this.pipeRotation-this._pipeRotationOffset})">
                            \uf013
                        </text>
                        <text class="${Et({gear:!0,"foreground-gear":!0,"center-text":!0})}" 
                              fill="url(#gradient-fill-foreground-gear)" 
                              stroke="url(#gradient-stroke-foreground-gear)"
                              transform="rotate(${this.pipeRotation})">
                            \uf013
                        </text>
                        ${this._renderNotes()}
                    </g>
                    <defs>
                        <!-- gear fill gradients -->
                        <linearGradient id="gradient-fill-background-gear" 
                            class="gear-gradient"
                            gradientTransform="rotate(${-(this.pipeRotation-this._pipeRotationOffset)+90})">
                            <stop offset="50%" class="stop-color-highlight"/>
                            <stop offset="50%" class="stop-color-primary"/>
                        </linearGradient>
                        <linearGradient id="gradient-fill-foreground-gear" 
                            class="gear-gradient"
                            gradientTransform="rotate(${-this.pipeRotation+90})">
                            <stop offset="50%" class="stop-color-background"/>
                            <stop offset="50%" class="stop-color-primary"/>
                        </linearGradient>

                        <!-- gear stroke gradients -->
                        <linearGradient id="gradient-stroke-background-gear"
                            class="${Et({"gear-gradient":!0})}"
                            gradientTransform="rotate(${-(this.pipeRotation-this._pipeRotationOffset)+90})">
                            <stop offset="50%" class="stop-color-highlight"/>
                            <stop offset="50%" class="stop-color-primary"/>
                        </linearGradient>
                        <linearGradient id="gradient-stroke-foreground-gear" 
                            class="${Et({"gear-gradient":!0})}"
                            gradientTransform="rotate(${-this.pipeRotation+90})">
                            <stop offset="50%" class="stop-color-highlight"/>
                            <stop offset="50%" class="stop-color-primary"/>
                        </linearGradient>
                    </defs>
                </svg>
                <tn-pitch-pipe-player .note="${this._currentNote}"></tn-pitch-pipe-player>
            </div>
        `}};we.styles=[ct,Qn],q([at({attribute:_t.slideShownAttribute})],we.prototype,"isShown",2),we=q([rt("tn-pitch-pipe")],we);var Yr={};ht(Yr,{AppearanceSettingsComponent:()=>_e,AppearanceSettingsComponentStyles:()=>Ji});var Vr={};ht(Vr,{SettingsComponent:()=>Le,SettingsComponentStyles:()=>It});var It=K`
    input {
        margin-inline-end: 1em;
    }

    /* The switch - the box around the slider */

    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
        margin-inline-end: 1em;
    }

    /* Hide default HTML checkbox */

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgb(var(--background-color));
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: rgb(var(--highlight-color));
    }

    input:checked + .slider {
        background-color: rgb(var(--primary-color));
    }

    input:focus + .slider {
        box-shadow: 0 0 1px rgb(var(--background-color));
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    /* Rounded sliders */

    .slider.round {
        border-radius: 1em;
    }

    .slider.round:before {
        border-radius: 50%;
    }

    /***** Chrome, Safari, Opera, and Edge Chromium *****/

    input[type="range"]::-webkit-slider-runnable-track {
        margin: 0;
        background: rgb(var(--background-color));
        height: 0.5rem;
    }

    /******** Firefox ********/

    input[type="range"]::-moz-range-track {
        background: rgb(var(--background-color));
        height: 0.5rem;
    }

    /***** Chrome, Safari, Opera, and Edge Chromium *****/

    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        margin-top: -12px; /* Centers thumb on the track */
        background-color: rgb(var(--primary-color));
        height: 2rem;
        width: 1rem;
    }

    input[type="range"] {
        -webkit-appearance: none;
        appearance: none;
        background: transparent;
        cursor: pointer;
        width: 15rem;
    }

    input[type="text"] {
        border: none;
        background: rgb(var(--background-color));
        color: rgb(var(--highlight-color));
        align-self: stretch;
        border-radius: 1em;
        font-family: var(--font-family);
    }

    select {
        border: none;
        background: rgb(var(--background-color));
        color: rgb(var(--highlight-color));
        align-self: stretch;
        border-radius: 1em;
        font-family: var(--font-family);
    }

    .row {
        display: flex;
        margin-block: 1em;
        margin-inline: 1em;
    }

    i {
        cursor: pointer;
    }

    .setting .content {
        padding: 1.5em;
        backdrop-filter: blur(25px);
        border-radius: 1em;
        background-color: rgba(0, 0, 0, 0.8);
        color: rgb(var(--highlight-color));
    }

    .setting > .header {
        padding-bottom: 1.5em;
    }

    .row input, select {
        font-size: 0.75em;
        margin-inline: 1em;
        padding-inline: 1em;
    }

    .bottom-button {
        font-size: clamp(1rem, 3cqi, 2rem);
        margin: 0;
    }

    .bottom-button-container {
        margin-inline: 9rem;
        display: flex;
        color: rgb(var(--highlight-color));
        text-align: center;
        justify-content: space-between;
    }
`,Le=class extends Q{constructor(){super();this.openedDetails=null}handleToggle(t){this.openedDetails&&!this.openedDetails.isSameNode(t.detailsElement)&&this.openedDetails.removeAttribute("open"),this.openedDetails=t.detailsElement}handleClose(t){this.dispatchEvent(new CustomEvent("settings-close",t))}handleResetSettings(){O.reset(),this.dispatchEvent(Yt.allReset())}render(){return V`
            <tn-modal>
                <div slot="header">Settings</div>
                <div slot="content">
                    <tn-general-settings @accordion-toggle="${this.handleToggle}"></tn-general-settings>
                    <tn-theme-settings @accordion-toggle="${this.handleToggle}"></tn-theme-settings>
                    <tn-appearance-settings @accordion-toggle="${this.handleToggle}"></tn-appearance-settings>
                    <tn-experimental-settings @accordion-toggle="${this.handleToggle}"></tn-experimental-settings>
                    <div class="bottom-button-container">
                        <button class="bottom-button" @click="${this.handleResetSettings}" aria-label="Settings Reset"><i class="fa fa-undo"></i></button>
                        <button class="bottom-button" @click="${this.handleClose}" aria-label="Settings Done">Done</button>
                    </div>
                </div>
            </tn-modal>
        `}};Le.styles=[It,ct,Lt],Le=q([rt("tn-settings")],Le);var Ji=K`
    .helper-text {
        font-size: 0.75em;
        font-style: italic;
        align-self: center;
        margin-inline-start: 0.75em;
        color: rgb(var(--background-color));
    }
    .nowrap {
        white-space: nowrap;
    }
`,_e=class extends Q{constructor(){super();this.settingsButtonHelperText="To get to this modal again without the settings button, double tap the screen.";this.configUpdated=()=>{this.requestUpdate()}}updateComponent(t,e){let r=t.target.checked;O.setComponent(e,r)}render(){return V`
            <tn-accordion>
                <div slot="header">Appearance</div>
                <div slot="content">
                    ${Object.keys(me).map(t=>V`
                        <div class="row">
                            <label for="${t}" class="switch">
                                <input id="${t}"
                                       type="checkbox"
                                       .checked="${O.getComponent(t)}"
                                       @click=${e=>this.updateComponent(e,t)}>
                                <span class="slider round"></span>
                            </label>
                            <span class="nowrap">${me[t]}</span>
                            <span class="helper-text">
                                ${t==="settingsButton"?this.settingsButtonHelperText:Z}
                            </span>
                        </div>
                        `)}
                </div>
            </tn-accordion>
        `}};_e.styles=[It,Ji,ct],q([Mt("config-change")],_e.prototype,"configUpdated",2),_e=q([rt("tn-appearance-settings"),Ot],_e);var Xr={};ht(Xr,{ExperimentalSettingsComponent:()=>Ae});var Ki=Ze(Xi()),ke=class{_inputLength;_fft;_bufferSupplier;_paddedInputBuffer;_transformBuffer;_inverseBuffer;static forFloat32Array(t){return new ke(t,e=>new Float32Array(e))}static forFloat64Array(t){return new ke(t,e=>new Float64Array(e))}static forNumberArray(t){return new ke(t,e=>Array(e))}constructor(t,e){if(t<1)throw new Error("Input length must be at least one");this._inputLength=t,this._fft=new Ki.default(ta(2*t)),this._bufferSupplier=e,this._paddedInputBuffer=this._bufferSupplier(this._fft.size),this._transformBuffer=this._bufferSupplier(2*this._fft.size),this._inverseBuffer=this._bufferSupplier(2*this._fft.size)}get inputLength(){return this._inputLength}autocorrelate(t,e=this._bufferSupplier(t.length)){if(t.length!==this._inputLength)throw new Error(`Input must have length ${this._inputLength} but had length ${t.length}`);for(let n=0;n<t.length;n++)this._paddedInputBuffer[n]=t[n];for(let n=t.length;n<this._paddedInputBuffer.length;n++)this._paddedInputBuffer[n]=0;this._fft.realTransform(this._transformBuffer,this._paddedInputBuffer),this._fft.completeSpectrum(this._transformBuffer);let r=this._transformBuffer;for(let n=0;n<r.length;n+=2)r[n]=r[n]*r[n]+r[n+1]*r[n+1],r[n+1]=0;this._fft.inverseTransform(this._inverseBuffer,this._transformBuffer);for(let n=0;n<t.length;n++)e[n]=this._inverseBuffer[2*n];return e}};function Xn(i){let t=[],e=!1,r=-1/0,n=-1;for(let a=1;a<i.length-1;a++)i[a-1]<=0&&i[a]>0?(e=!0,n=a,r=i[a]):i[a-1]>0&&i[a]<=0?(e=!1,n!==-1&&t.push(n)):e&&i[a]>r&&(r=i[a],n=a);return t}function Kn(i,t){let[e,r,n]=[i-1,i,i+1],[a,o,s]=[t[e],t[r],t[n]],c=a/2-o+s/2,l=-(a/2)*(r+n)+o*(e+n)-s/2*(e+r),v=a*r*n/2-o*e*n+s*e*r/2,h=-l/(2*c),d=c*h*h+l*h+v;return[h,d]}var Xt=class{_autocorrelator;_nsdfBuffer;_clarityThreshold=.9;static forFloat32Array(t){return new Xt(t,e=>new Float32Array(e))}static forFloat64Array(t){return new Xt(t,e=>new Float64Array(e))}static forNumberArray(t){return new Xt(t,e=>Array(e))}constructor(t,e){this._autocorrelator=new ke(t,e),this._nsdfBuffer=e(t)}get inputLength(){return this._autocorrelator.inputLength}findPitch(t,e){this._nsdf(t);let r=Xn(this._nsdfBuffer);if(r.length===0)return[0,0];let n=Math.max(...r.map(c=>this._nsdfBuffer[c])),a=r.find(c=>this._nsdfBuffer[c]>=this._clarityThreshold*n),[o,s]=Kn(a,this._nsdfBuffer);return[e/o,Math.min(s,1)]}_nsdf(t){this._autocorrelator.autocorrelate(t,this._nsdfBuffer);let e=2*this._nsdfBuffer[0],r;for(r=0;r<this._nsdfBuffer.length&&e>0;r++)this._nsdfBuffer[r]=2*this._nsdfBuffer[r]/e,e-=t[r]**2+t[t.length-r-1]**2;for(;r<this._nsdfBuffer.length;r++)this._nsdfBuffer[r]=0}};function ta(i){return i--,i|=i>>1,i|=i>>2,i|=i>>4,i|=i>>8,i|=i>>16,i++,i}var xe=Ze(mn()),pn=["McLeod","YIN","AMDF","Dynamic Wavelet"],Wr=class{constructor(){this.pitch=-1;this.volume=-1;this.clarity=-1}},Gr=class{constructor(t){this.detector=Xt.forFloat32Array(t.analyserNode.fftSize)}detect(t){let e=new Float32Array(this.detector.inputLength);t.analyserNode.getFloatTimeDomainData(e);let r=new Wr;[r.pitch,r.clarity]=this.detector.findPitch(e,t.audioContext.sampleRate);let n=e.reduce((a,o)=>a+o*o,0);return r.volume=Math.sqrt(n/e.length),r}},lr=class{detect(t){let e=new Float32Array(2048);t.analyserNode.getFloatTimeDomainData(e);let r=new Wr;r.pitch=this.detector(e),r.clarity=1;let n=e.reduce((a,o)=>a+o*o,0);return r.volume=Math.sqrt(n/e.length),r}},Zr=class extends lr{constructor(){super();this.detector=xe.YIN()}},Jr=class extends lr{constructor(){super();this.detector=xe.AMDF()}},Qr=class extends lr{constructor(){super();this.detector=xe.DynamicWavelet()}};var Ae=class extends Q{constructor(){super();this.refresh=()=>{this.requestUpdate()}}updateAlgorithm(t){let e=t.target.value;O.algorithm=e}render(){return V`
                    <tn-accordion>
                        <div slot="header">Experimental</div>
                        <div slot="content">
                            <div class="row">
                                <label>Pitch Detection Algorithm</label>
                                <select @input="${this.updateAlgorithm}">
                                    ${pn.map(t=>V`
                                        <option .selected="${t===O.algorithm}" .value="${t}">${t}</option>
                                    `)}
                                </select>
                            </div>
                        </div>
                    </tn-accordion>
        `}};Ae.styles=[It,ct],q([Mt("config-change")],Ae.prototype,"refresh",2),Ae=q([rt("tn-experimental-settings"),Ot],Ae);var Kr={};ht(Kr,{GeneralSettingsComponent:()=>Se});var Se=class extends Q{constructor(){super();this.refresh=()=>{this.requestUpdate()}}updateAccidentalMode(t){let e=t.target.checked===!1?1:0;O.accidentalMode=e}resetFrequencyOfA(){O.frequencyOfA=O.defaultConfig.frequencyOfA}updateFrequencyOfA(t){let e=Number(t.target.value);O.frequencyOfA=e}render(){return V`
                <tn-accordion >
                    <div slot="header">General</div>
                    <div slot="content">
                        <div class="row">
                            <label for="flats" class="switch">
                                <input id="flats"
                                       type="checkbox"
                                       .checked="${O.accidentalMode===0}"
                                       @click=${this.updateAccidentalMode}>
                                <span class="slider round"></span>
                            </label>
                            <span>Use Flats</span>
                        </div>
                        <div class="row">
                            <input id="frequencyOfA"
                                   type="range"
                                   max="${O.AUpperBoundFreq}"
                                   min="${O.ALowerBoundFreq}"
                                   .value="${O.frequencyOfA}"
                                   @input=${this.updateFrequencyOfA}>
                            <label style="flex: 1" for="frequencyOfA">
                                A = ${O.frequencyOfA}HZ
                            </label>
                            ${O.frequencyOfA!==O.defaultConfig.frequencyOfA?V`
                                <i class="fa fa-undo" @click=${this.resetFrequencyOfA}></i>`:Z}
                        </div>
                    </div>
                </tn-accordion>
    `}};Se.styles=[It,ct],q([Mt("config-change")],Se.prototype,"refresh",2),Se=q([rt("tn-general-settings"),Ot],Se);var ti={};ht(ti,{ThemeSettingsComponent:()=>Me});var va=K`
    .color-row {
        align-items: center;
    }

    .row input, select {
        margin-inline: 1em;
    }

    .color-ball {
        display: inline-block;
        border-radius: 100%;
        width: 1.5em;
        height: 1.5em;
        -webkit-box-shadow: inset 0.3em -0.3em 0 0 rgba(0, 0, 0, 0.5);
        -moz-box-shadow: inset 0.3em -0.3em 0 0 rgba(0, 0, 0, 0.5);
        box-shadow: inset 0.3em -0.3em 0 0 rgba(0, 0, 0, 0.5);
    }

    .color-ball.primary {
        background-color: rgb(var(--primary-color));
    }

    .color-ball.highlight {
        background-color: rgb(var(--highlight-color));
    }

    .color-ball.background {
        background-color: rgb(var(--background-color));
    }

    .color-label {
        flex: 1;
    }
`,Me=class extends Q{constructor(){super();this.onThemeChange=()=>{this.requestUpdate()}}updateColor(t,e){let r=t.target.value;O.setColor(e,r)}resetColor(t){O.setColor(t,O.defaultConfig[t])}render(){return V`
            <tn-accordion>
                <div slot="header">Theme</div>
                <div slot="content">
                    <div class="row color-row">
                        <div class="color-ball primary"></div>
                        <input id="primary-color" type="text" maxlength="7" size="7"
                               .value="${O.getColor("primary")}"
                               @input="${t=>this.updateColor(t,"primary")}">
                        <label for="primary-color" class="color-label">Primary</label>
                        ${O.getColor("primary")!==O.defaultConfig.primary?V`
                            <i class="fa fa-undo" @click=${()=>this.resetColor("primary")}></i>`:Z}
                    </div>
                    <div class="row color-row">
                        <div class="color-ball highlight"></div>
                        <input id="highlight-color" type="text" maxlength="7" size="7"
                               .value="${O.getColor("highlight")}"
                               @input="${t=>this.updateColor(t,"highlight")}"
                        >
                        <label for="highlight-color" class="color-label">Highlight</label>
                        ${O.getColor("highlight")!==O.defaultConfig.highlight?V`
                            <i class="fa fa-undo" @click=${()=>this.resetColor("highlight")}></i>`:Z}
                    </div>
                    <div class="row color-row">
                        <div class="color-ball background"></div>
                        <input id="background-color" type="text" maxlength="7" size="7"
                               .value="${O.getColor("background")}"
                               @input="${t=>this.updateColor(t,"background")}"
                        >
                        <label for="background-color" class="color-label">Background</label>
                        ${O.getColor("background")!==O.defaultConfig.background?V`
                            <i class="fa fa-undo" @click=${()=>this.resetColor("background")}></i>`:Z}
                    </div>
                </div>
            </tn-accordion>
        `}};Me.styles=[va,It,ct],q([Mt("theme-change")],Me.prototype,"onThemeChange",2),Me=q([rt("tn-theme-settings"),Ot],Me);var ri={};ht(ri,{AccordionComponent:()=>Ve});var ei=class extends Event{constructor(t){super("accordion-toggle",{bubbles:!0,composed:!0});this.detailsElement=t}};var ga=K`
    details > summary {
        list-style: none;
        padding: 1em;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    summary::-webkit-details-marker {
        display: none
    }

    summary::marker {
        content: none;
    }

    summary::after {
        font-family: "Font Awesome 6 Free";
        font-weight: 900;
        content: "\\f107";
    }

    details[open] summary:after {
        font-family: "Font Awesome 6 Free";
        font-weight: 900;
        content: "\\f106";
    }

    details {
        border-radius: 1em;
        backdrop-filter: blur(25px);
        background-color: rgba(var(--primary-color), 0.3);
        color: rgb(var(--highlight-color));
        font-size: 2em;

        margin-block: 2rem;
        margin-inline: 9rem;
        padding-block-end: 0.1px;

        transition: all .2s var(--entrance-transition);
    }

    details:hover {
        scale: 1.1;
        background-color: rgba(var(--primary-color), 0.6);
    }

    details[open] {
        background-color: rgba(var(--primary-color), 0.6);
    }

    .content {
        padding-inline: 1em;
        padding-block-end: 1em;
        border-radius: 1em;
        color: rgb(var(--highlight-color));
    }
`,Ve=class extends Q{propogateOpenEvent(t){t.newState==="open"&&this.dispatchEvent(new ei(t.target))}render(){return V`
            <details @toggle="${this.propogateOpenEvent}">
                <summary class="header">
                    <slot name="header"></slot>
                </summary>
                <div class="content">
                    <slot name="content"></slot>
                </div>
            </details>
        `}};Ve.styles=[ga,ct],Ve=q([rt("tn-accordion")],Ve);var ii={};ht(ii,{SettingsComponent:()=>Ye});var ba=K`
    .modal {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;

        backdrop-filter: blur(6em);
        -webkit-backdrop-filter: blur(6em); /* Safari */
        overflow-y: scroll;

        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */

        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */

        container-type: inline-size;
    }

    .scroll-shadow {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
        box-shadow: inset 0 0 1em 2em rgb(var(--background-color));
        -webkit-box-shadow: inset 0 0 1em 2em rgb(var(--background-color));
        -moz-box-shadow: inset 0 0 1em 2em rgb(var(--background-color));
        pointer-events: none;
    }

    .header {
        text-align: center;
        font-size: clamp(1rem, 4cqi, 4rem);
        justify-content: center;
        color: rgb(var(--highlight-color));
    }

    .row {
        display: flex;
        margin-top: 8rem;
        margin-inline: 4rem;
    }

    /* Hide scrollbar for Chrome, Safari and Opera */

    .modal::-webkit-scrollbar {
        display: none;
    }
`,Ye=class extends Q{render(){return V`
            <div class="modal">
                <slot class="header row" name="header"></slot>
                <slot name="content"></slot>
            </div>
            <div class="scroll-shadow"></div>
        `}};Ye.styles=[ba],Ye=q([rt("tn-modal")],Ye);var ni={};ht(ni,{snapshots:()=>vn});var vn={};vn["TunerComponent should equal snapshot"]=`<tn-tuner>
</tn-tuner>
`;var ai={};ht(ai,{TunerNoteComponent:()=>At});var ya=K`
    :host {
        font-family: var(--font-family);
    }

    .tuner-note-stroke-half {
        stroke: rgb(var(--highlight-color));
        stroke-linecap: round;
        stroke-width: 0.5;
    }

    .tuner-note-stroke-full {
        stroke: rgb(var(--highlight-color));
        stroke-width: 1;
    }

    .tuner-note-letter {
        fill: rgb(var(--background-color));
        font-size: 2.5em;
    }

    .tuner-note-letter-mask {
        stroke: black;
        stroke-width: 0.5;
        fill: white;
        font-size: 2.5em;
    }

    .tuner-note-accidental {
        fill: rgb(var(--background-color));
        font-size: 1em;
    }

    .tuner-note-accidental-mask {
        stroke: black;
        stroke-width: 0.5;
        fill: white;
        stroke-linecap: round;
        font-size: 1em;
    }

    .tuner-note-octave {
        fill: rgb(var(--background-color));
        font-size: 1em;
    }

    .tuner-note-octave-mask {
        stroke: black;
        stroke-width: 0.5;
        fill: white;
        font-size: 1em;
    }

    .tuner-liquid {
        fill: rgb(var(--primary-color));
    }
`,At=class extends Q{constructor(){super();this.note=new lt(0);this.clarity=1;this.accuracy=0;this.accuracyBuffer=[At.bufferSize];this.heightAnimator=new cr}updateHeightAnimation(){if(this.heightAnimatorReference)this.heightAnimator.reference=this.heightAnimatorReference;else return;let t=vt.map(this.accuracy,[0,1],[90,25]);this.heightAnimator.to=t+""}update(t){super.update(t),!isNaN(Number(t.get("accuracy")))&&this.updateHeightAnimation()}render(){let t={"tuner-note-stroke-half":O.getComponent("noteOutline"),"tuner-note-octave":!0},e={"tuner-note-stroke-full":O.getComponent("noteOutline"),"tuner-note-letter":!0},r={"tuner-note-stroke-half":O.getComponent("noteOutline"),"tuner-note-accidental":!0};return V`
            <div class="tuner-note-container">
                <svg id="view" viewBox="0 2 100 100" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">

                    <use href="#note-letter" class=${Et(e)}/>

                    ${O.getComponent("noteFill")?ce`<use href="#liquid-effect" mask="url(#note-mask)"/>`:Z}
                    ${O.getComponent("noteOctave")?ce`<use href="#note-octave" class=${Et(t)}/>`:Z}

                    <use href="#note-accidental" class=${Et(r)}/>
                    <defs>
                        <!-- Define the text used in the scene -->
                        <text id="note-letter" x="50%" y="50%" dominant-baseline="central"
                              text-anchor="middle">
                            ${this.note.letter}
                        </text>
                        <text id="note-accidental" x="60%" y="35%" dominant-baseline="central"
                              text-anchor="middle">
                            ${this.note.accidental}
                        </text>
                        <text id="note-octave" x="60%" y="60%" dominant-baseline="central" text-anchor="middle">
                            ${this.note.octave}
                        </text>

                        <!-- Defines the liquid effect that fills up the note -->
                        <g id="liquid-effect" class="tuner-liquid">
                            <rect width="50%" height="65%"/>
                            <path id="liquid-top"
                                  d="M 0,0.3 C 50,-4 0,-4 50,0"/>

                            <!-- Animates the top of the liquid -->
                            <animate href="#liquid-top"
                                     attributeName="d"
                                     attributeType="XML"
                                     values="M 0,0.3 C 12.5,0 37.5,-10 50,0; 
                                    M 0,0.3 C 12.5,-10 37.5,0 50,0; 
                                    M 0,0.3 C 12.5,0 37.5,-10 50,0"
                                     dur="0.7s"
                                     calcMode="spline"
                                     keySplines="0.6 0.3 0.3 1; 0.6 0.3 0.3 1"
                                     repeatCount="indefinite"/>

                            <!-- Animates the liquid height -->
                            <animateTransform
                                    id="height-animator"
                                    @endEvent="${this.heightAnimator.onEndEvent}"
                                    attributeName="transform"
                                    attributeType="XML"
                                    type="translate"
                                    fill="freeze"
                                    restart="whenNotActive"
                                    values="25, 20; 25, 35"
                                    calcMode="spline"
                                    keySplines="0.5 0 0.5 1"
                                    dur="0.5s"/>
                        </g>

                        <!-- Defines the mask used to create the cutout of the liquid -->
                        <mask id="note-mask">
                            <use href="#note-letter" class="tuner-note-letter-mask"/>
                            <use href="#note-octave" class="tuner-note-accidental-mask"/>
                            <use href="#note-accidental" class="tuner-note-octave-mask"/>
                        </mask>
                    </defs>
                </svg>
            </div>
        `}};At.styles=ya,At.bufferSize=25,q([at()],At.prototype,"note",2),q([at()],At.prototype,"clarity",2),q([at({type:Number})],At.prototype,"accuracy",2),q([mi("#height-animator")],At.prototype,"heightAnimatorReference",2),At=q([rt("tn-tuner-note")],At);var Ee=class{set reference(t){this._reference=t}get from(){return this._reference.getAttribute("values").match(Ee.fromMatcher)[0]}set from(t){this._reference.setAttribute("values",this._reference.getAttribute("values").replace(Ee.fromMatcher,t))}get to(){return this._reference.getAttribute("values").match(Ee.toMatcher)[0]}set to(t){this._reference.setAttribute("values",this._reference.getAttribute("values").replace(Ee.toMatcher,t))}onEndEvent(){this.from=this.to}},cr=Ee;cr.fromMatcher=/-?\d+\.?\d*(?=;)/g,cr.toMatcher=/-?\d+\.?\d*$/g;var oi={};ht(oi,{SpokeComponent:()=>Ut,TunerRingComponent:()=>Ft});var xn=Ze(kn());var $a=K`
  :host {
    --needle-degree: 0rad;
    --opacity: 1;
  }

  .tuner-needle {
    --width: 1.5vmin;

    background: linear-gradient(0deg, transparent 70%, rgb(var(--primary-color)) 30%);
    width: var(--width);
    height: 52%;
    position: absolute;
    left: calc(50% - (var(--width) / 2));
    bottom: 50%;
    border-radius: 25%;

    opacity: var(--opacity);
    transform: rotate(var(--needle-degree));
    transform-origin: bottom;
    transition: all cubic-bezier(0, 0, .2, 1.3) 300ms
  }

  .ring {
    position: absolute;
    height: 80%;
    width: 80%;
    left: 10%;
    top: 10%;
  }

  .top-spokes > tn-spoke {
    background-color: rgb(var(--highlight-color));
  }

  .bottom-spokes > tn-spoke {
    background-color: rgb(var(--primary-color));
  }
`,Ft=class extends Q{constructor(){super(...arguments);this.accuracy=0;this.volume=0}updated(){this.style.setProperty("--needle-degree",this.convertAccuracyToRadians()+"rad")}convertAccuracyToRadians(){let t=this.accuracy*(Math.PI/2)-Math.PI/2;return this.pitchAccidental==Qt.sharp&&(t*=-1),t}static angleDifference(t,e){let r=t-e;return r+=r>Math.PI?-(2*Math.PI):r<-Math.PI?2*Math.PI:0,Math.abs(r)}render(){let t=[],e=[],r=41;for(let n=0;n<r;n++){let a=n*(Math.PI/(r-1))-Math.PI/2,o=n>=(r-3)/2&&n<=(r+1)/2,s=Ft.angleDifference(a,this.convertAccuracyToRadians()),c=vt.map(s,[Math.PI,0],[0,1]),l=vt.clamp(this.volume*8,[.3,.9]);t.push(V`
                <tn-spoke .index="${n}" .scaleFactor="${c}"
                          .arcPosition="${a}" .isMiddle="${o}"></tn-spoke>
            `),e.push(V`
                <tn-spoke .index="${n}" .scaleFactor="${l}"
                          .arcPosition="${a+Math.PI}"></tn-spoke>
            `)}return V`
            <div class="tuner-ring">
                <div class="ring">
                    <span class="top-spokes">
                        ${O.getComponent("frequencyRing")?t:Z}
                    </span>
                    <span class="bottom-spokes">
                        ${O.getComponent("volumeRing")?e:Z}
                    </span>
                </div>
                ${O.getComponent("needle")?V`<div class="tuner-needle"></div>`:Z}
            </div>
        `}};Ft.styles=$a,q([at()],Ft.prototype,"accuracy",2),q([at()],Ft.prototype,"volume",2),q([at()],Ft.prototype,"pitchAccidental",2),Ft=q([rt("tn-tuner-ring")],Ft);var Ca=K`
  :host {
    --x-scale: 1;
    --y-scale: 1;
    --angle: 0;

    position: absolute;
    height: 4vmin;
    width: 0.3vmin;
    border-radius: 25%;
    transform: translate(-50%, 50%) rotate(var(--angle)) scaleX(var(--x-scale)) scaleY(var(--y-scale));

    transition: all cubic-bezier(0, 0, .2, 1.3) 600ms;
  }

`,Ut=class extends Q{constructor(){super(...arguments);this.scaleFactor=0;this.arcPosition=0;this.index=0;this.isMiddle=!1}connectedCallback(){super.connectedCallback(),this.isMiddle&&this.style.setProperty("background","rgb(var(--primary-color))"),this.setupPosition()}updated(){let t=(0,xn.default)(0,0,1,0),e=this.scaleFactor,r=vt.map(this.scaleFactor,[0,1],[1,0]),n=t(e)*5,a=t(r)*15;this.style.setProperty("--x-scale",n+a+""),this.style.setProperty("--y-scale",n+"")}setupPosition(){let t=50*Math.cos(this.arcPosition)+50+"%",e=50*Math.sin(this.arcPosition)+50+"%";this.style.setProperty("bottom",t),this.style.setProperty("left",e),this.style.setProperty("--angle",this.arcPosition+"rad")}};Ut.styles=Ca,q([at()],Ut.prototype,"scaleFactor",2),q([at()],Ut.prototype,"arcPosition",2),q([at()],Ut.prototype,"index",2),q([at()],Ut.prototype,"isMiddle",2),Ut=q([rt("tn-spoke")],Ut);var ci={};ht(ci,{TunerComponent:()=>Nt});var Ht=class{static debug(...t){O.debugMode&&console.debug(...t)}static error(...t){console.error(...t)}};var si=class{constructor(){this.audioContext=new AudioContext,this.analyserNode=new AnalyserNode(this.audioContext)}connect(){return wr(this,null,function*(){let t;try{t=yield navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,autoGainControl:!1,noiseSuppression:!1,latency:0}})}catch(r){Ht.error(r)}this.sourceNode=this.audioContext.createMediaStreamSource(t);let e=this.audioContext.createBiquadFilter();return e.type="lowpass",e.frequency.setTargetAtTime(si.lowpassThreshold,this.audioContext.currentTime,0),this.sourceNode.connect(e),e.connect(this.analyserNode),yield this.audioContext.resume(),this})}disconnect(){return wr(this,null,function*(){try{yield this.audioContext.suspend()}catch(t){Ht.error(t)}})}},Ge=si;Ge.lowpassThreshold=8e3;var li=class{constructor(t=new Ge,e=17){this.refreshRate=e,this._audioSource=t,this.algorithms=new Map,this.algorithms.set("McLeod",new Gr(this._audioSource)),this.algorithms.set("YIN",new Zr),this.algorithms.set("AMDF",new Jr),this.algorithms.set("Dynamic Wavelet",new Qr)}static Instance(t=new Ge,e=17){return this._instance||(this._instance=new this(t,e))}startListening(){this._audioSource.connect().then(()=>{window.clearInterval(this.intervalReference),this.intervalReference=window.setInterval(this.listen.bind(this),this.refreshRate)})}stopListening(){this._audioSource.disconnect(),window.clearInterval(this.intervalReference)}setOnListen(t){this.onListen=t}get pitch(){return this._algorithmResult.pitch}get clarity(){return this._algorithmResult.clarity}get volume(){return this._algorithmResult.volume}get audioSource(){return this._audioSource}set audioSource(t){t.analyserNode.smoothingTimeConstant=1,this._audioSource=t}listen(){this._algorithmResult=this.algorithms.get(O.algorithm).detect(this._audioSource),this.pitch===-1&&Ht.debug("Pitch not detected.",this._algorithmResult.pitch,this._algorithmResult.clarity),this.onListen(this._algorithmResult.pitch,this._algorithmResult.clarity,this._algorithmResult.volume)}};var Nt=class extends Q{constructor(){super(...arguments);this.pitchDetectorService=li.Instance();this.note=new lt(0);this.accuracy=0;this.clarity=1;this.volume=0;this.isShown=!0;this.inTune=!1}connectedCallback(){super.connectedCallback(),this.pitchDetectorService.setOnListen((t,e,r)=>{if(this.clarity=e,this.volume=r,r<.01||e<.95)return;this.note=be.freqToNote(t);let n=be.noteToPitch(this.note),a=be.noteToPitch(new lt(this.note.index-1)),o=be.noteToPitch(new lt(this.note.index+1)),s;t<n?(this.pitchAccidental=Qt.flat,s=vt.map(t,[a,n],[-1,1])):(this.pitchAccidental=Qt.sharp,s=vt.map(t,[o,n],[-1,1])),s<0&&(s=0),this.inTune=s>.95,this.accuracy=s}),this.pitchDetectorService.startListening()}disconnectedCallback(){super.disconnectedCallback(),this.pitchDetectorService.stopListening()}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),this.isShown?this.pitchDetectorService.startListening():this.pitchDetectorService.stopListening()}updateOscillatorFrequency(t){let e=this.pitchDetectorService.audioSource;e.frequency=Number(t.target.value)}setPlayback(t){t.target.checked?this.pitchDetectorService.audioSource.sourceNode.connect(this.pitchDetectorService.audioSource.audioContext.destination):this.pitchDetectorService.audioSource.sourceNode.disconnect(this.pitchDetectorService.audioSource.audioContext.destination)}resumeContext(){this.pitchDetectorService.audioSource.audioContext.resume().then(()=>{Ht.debug("Audio source resumed")},t=>{Ht.error("Audio source failed to resume",t)})}render(){return V`
        <!-- <div>
                <input type="range" min="200"
                                   max="300"
                                   @input="${this.updateOscillatorFrequency}">
                        </div>
 <div>
                Audio Playback: <input type="checkbox" @input="${this.setPlayback}">
            </div> -->
        <div data-test-id="tuner.body" @click="${this.resumeContext}">
            <tn-tuner-ring .accuracy="${this.accuracy}" .pitchAccidental="${this.pitchAccidental}"
                           .volume="${this.volume}"></tn-tuner-ring>
            <tn-tuner-note .note="${this.note}" .accuracy="${this.accuracy}"
                           .clarity="${this.clarity}"></tn-tuner-note>
        </div>
    `}};q([at()],Nt.prototype,"note",2),q([at()],Nt.prototype,"accuracy",2),q([at()],Nt.prototype,"clarity",2),q([at()],Nt.prototype,"volume",2),q([at({attribute:_t.slideShownAttribute,converter:t=>t==="true"})],Nt.prototype,"isShown",2),q([at()],Nt.prototype,"pitchAccidental",2),Nt=q([rt("tn-tuner")],Nt);var Ta=[Pr,Fr,Nr,Br,Yr,Xr,Kr,Vr,ti,ri,Hr,Rr,Ir,Cr,qr,ii,ni,ai,oi,ci],An=Ta;An[0].default;"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/serviceWorker.js").catch(i=>console.log("service worker not registered",i))});})();
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

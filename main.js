(()=>{var $i=Object.create;var Pe=Object.defineProperty;var mo=Object.getOwnPropertyDescriptor;var Ti=Object.getOwnPropertyNames;var Ri=Object.getPrototypeOf,Pi=Object.prototype.hasOwnProperty;var Cr=Math.pow;var ho=o=>Pe(o,"__esModule",{value:!0});var Pt=(o,t)=>()=>(t||o((t={exports:{}}).exports,t),t.exports),mt=(o,t)=>{ho(o);for(var e in t)Pe(o,e,{get:t[e],enumerable:!0})},Oi=(o,t,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Ti(t))!Pi.call(o,r)&&r!=="default"&&Pe(o,r,{get:()=>t[r],enumerable:!(e=mo(t,r))||e.enumerable});return o},Qe=o=>Oi(ho(Pe(o!=null?$i(Ri(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o),L=(o,t,e,r)=>{for(var i=r>1?void 0:r?mo(t,e):t,n=o.length-1,a;n>=0;n--)(a=o[n])&&(i=(r?a(t,e,i):a(i))||i);return r&&i&&Pe(t,e,i),i};var wr=(o,t,e)=>new Promise((r,i)=>{var n=c=>{try{s(e.next(c))}catch(l){i(l)}},a=c=>{try{s(e.throw(c))}catch(l){i(l)}},s=c=>c.done?r(c.value):Promise.resolve(c.value).then(n,a);s((e=e.apply(o,t)).next())});var jo=Pt(()=>{var qo;(function(o){(function(t){var e=typeof globalThis=="object"?globalThis:typeof global=="object"?global:typeof self=="object"?self:typeof this=="object"?this:s(),r=i(o);typeof e.Reflect!="undefined"&&(r=i(e.Reflect,r)),t(r,e),typeof e.Reflect=="undefined"&&(e.Reflect=o);function i(c,l){return function(b,m){Object.defineProperty(c,b,{configurable:!0,writable:!0,value:m}),l&&l(b,m)}}function n(){try{return Function("return this;")()}catch{}}function a(){try{return(0,eval)("(function() { return this; })()")}catch{}}function s(){return n()||a()}})(function(t,e){var r=Object.prototype.hasOwnProperty,i=typeof Symbol=="function",n=i&&typeof Symbol.toPrimitive!="undefined"?Symbol.toPrimitive:"@@toPrimitive",a=i&&typeof Symbol.iterator!="undefined"?Symbol.iterator:"@@iterator",s=typeof Object.create=="function",c={__proto__:[]}instanceof Array,l=!s&&!c,b={create:s?function(){return Re(Object.create(null))}:c?function(){return Re({__proto__:null})}:function(){return Re({})},has:l?function(u,d){return r.call(u,d)}:function(u,d){return d in u},get:l?function(u,d){return r.call(u,d)?u[d]:void 0}:function(u,d){return u[d]}},m=Object.getPrototypeOf(Function),f=typeof Map=="function"&&typeof Map.prototype.entries=="function"?Map:gr(),w=typeof Set=="function"&&typeof Set.prototype.entries=="function"?Set:vr(),y=typeof WeakMap=="function"?WeakMap:yr(),x=i?Symbol.for("@reflect-metadata:registry"):void 0,k=hr(),h=pr(k);function g(u,d,p,_){if(E(p)){if(!gt(u))throw new TypeError;if(!Dt(d))throw new TypeError;return tt(u,d)}else{if(!gt(u))throw new TypeError;if(!et(d))throw new TypeError;if(!et(_)&&!E(_)&&!it(_))throw new TypeError;return it(_)&&(_=void 0),p=dt(p),z(u,d,p,_)}}t("decorate",g);function v(u,d){function p(_,U){if(!et(_))throw new TypeError;if(!E(U)&&!$e(U))throw new TypeError;F(u,d,_,U)}return p}t("metadata",v);function A(u,d,p,_){if(!et(p))throw new TypeError;return E(_)||(_=dt(_)),F(u,d,p,_)}t("defineMetadata",A);function S(u,d,p){if(!et(d))throw new TypeError;return E(p)||(p=dt(p)),T(u,d,p)}t("hasMetadata",S);function N(u,d,p){if(!et(d))throw new TypeError;return E(p)||(p=dt(p)),R(u,d,p)}t("hasOwnMetadata",N);function B(u,d,p){if(!et(d))throw new TypeError;return E(p)||(p=dt(p)),C(u,d,p)}t("getMetadata",B);function M(u,d,p){if(!et(d))throw new TypeError;return E(p)||(p=dt(p)),O(u,d,p)}t("getOwnMetadata",M);function H(u,d){if(!et(u))throw new TypeError;return E(d)||(d=dt(d)),q(u,d)}t("getMetadataKeys",H);function W(u,d){if(!et(u))throw new TypeError;return E(d)||(d=dt(d)),V(u,d)}t("getOwnMetadataKeys",W);function ot(u,d,p){if(!et(d))throw new TypeError;if(E(p)||(p=dt(p)),!et(d))throw new TypeError;E(p)||(p=dt(p));var _=Gt(d,p,!1);return E(_)?!1:_.OrdinaryDeleteMetadata(u,d,p)}t("deleteMetadata",ot);function tt(u,d){for(var p=u.length-1;p>=0;--p){var _=u[p],U=_(d);if(!E(U)&&!it(U)){if(!Dt(U))throw new TypeError;d=U}}return d}function z(u,d,p,_){for(var U=u.length-1;U>=0;--U){var ut=u[U],pt=ut(d,p,_);if(!E(pt)&&!it(pt)){if(!et(pt))throw new TypeError;_=pt}}return _}function T(u,d,p){var _=R(u,d,p);if(_)return!0;var U=Te(d);return it(U)?!1:T(u,U,p)}function R(u,d,p){var _=Gt(d,p,!1);return E(_)?!1:at(_.OrdinaryHasOwnMetadata(u,d,p))}function C(u,d,p){var _=R(u,d,p);if(_)return O(u,d,p);var U=Te(d);if(!it(U))return C(u,U,p)}function O(u,d,p){var _=Gt(d,p,!1);if(!E(_))return _.OrdinaryGetOwnMetadata(u,d,p)}function F(u,d,p,_){var U=Gt(p,_,!0);U.OrdinaryDefineOwnMetadata(u,d,p,_)}function q(u,d){var p=V(u,d),_=Te(u);if(_===null)return p;var U=q(_,d);if(U.length<=0)return p;if(p.length<=0)return U;for(var ut=new w,pt=[],Z=0,$=p;Z<$.length;Z++){var P=$[Z],I=ut.has(P);I||(ut.add(P),pt.push(P))}for(var D=0,Q=U;D<Q.length;D++){var P=Q[D],I=ut.has(P);I||(ut.add(P),pt.push(P))}return pt}function V(u,d){var p=Gt(u,d,!1);return p?p.OrdinaryOwnMetadataKeys(u,d):[]}function G(u){if(u===null)return 1;switch(typeof u){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return u===null?1:6;default:return 6}}function E(u){return u===void 0}function it(u){return u===null}function xt(u){return typeof u=="symbol"}function et(u){return typeof u=="object"?u!==null:typeof u=="function"}function ht(u,d){switch(G(u)){case 0:return u;case 1:return u;case 2:return u;case 3:return u;case 4:return u;case 5:return u}var p=d===3?"string":d===5?"number":"default",_=re(u,n);if(_!==void 0){var U=_.call(u,p);if(et(U))throw new TypeError;return U}return Tt(u,p==="default"?"number":p)}function Tt(u,d){if(d==="string"){var p=u.toString;if(vt(p)){var _=p.call(u);if(!et(_))return _}var U=u.valueOf;if(vt(U)){var _=U.call(u);if(!et(_))return _}}else{var U=u.valueOf;if(vt(U)){var _=U.call(u);if(!et(_))return _}var ut=u.toString;if(vt(ut)){var _=ut.call(u);if(!et(_))return _}}throw new TypeError}function at(u){return!!u}function Rt(u){return""+u}function dt(u){var d=ht(u,3);return xt(d)?d:Rt(d)}function gt(u){return Array.isArray?Array.isArray(u):u instanceof Object?u instanceof Array:Object.prototype.toString.call(u)==="[object Array]"}function vt(u){return typeof u=="function"}function Dt(u){return typeof u=="function"}function $e(u){switch(G(u)){case 3:return!0;case 4:return!0;default:return!1}}function Wt(u,d){return u===d||u!==u&&d!==d}function re(u,d){var p=u[d];if(p!=null){if(!vt(p))throw new TypeError;return p}}function oe(u){var d=re(u,a);if(!vt(d))throw new TypeError;var p=d.call(u);if(!et(p))throw new TypeError;return p}function ie(u){return u.value}function ne(u){var d=u.next();return d.done?!1:d}function ae(u){var d=u.return;d&&d.call(u)}function Te(u){var d=Object.getPrototypeOf(u);if(typeof u!="function"||u===m||d!==m)return d;var p=u.prototype,_=p&&Object.getPrototypeOf(p);if(_==null||_===Object.prototype)return d;var U=_.constructor;return typeof U!="function"||U===u?d:U}function mr(){var u;!E(x)&&typeof e.Reflect!="undefined"&&!(x in e.Reflect)&&typeof e.Reflect.defineMetadata=="function"&&(u=br(e.Reflect));var d,p,_,U=new y,ut={registerProvider:pt,getProvider:$,setProvider:I};return ut;function pt(D){if(!Object.isExtensible(ut))throw new Error("Cannot add provider to a frozen registry.");switch(!0){case u===D:break;case E(d):d=D;break;case d===D:break;case E(p):p=D;break;case p===D:break;default:_===void 0&&(_=new w),_.add(D);break}}function Z(D,Q){if(!E(d)){if(d.isProviderFor(D,Q))return d;if(!E(p)){if(p.isProviderFor(D,Q))return d;if(!E(_))for(var st=oe(_);;){var ft=ne(st);if(!ft)return;var At=ie(ft);if(At.isProviderFor(D,Q))return ae(st),At}}}if(!E(u)&&u.isProviderFor(D,Q))return u}function $(D,Q){var st=U.get(D),ft;return E(st)||(ft=st.get(Q)),E(ft)&&(ft=Z(D,Q),E(ft)||(E(st)&&(st=new f,U.set(D,st)),st.set(Q,ft))),ft}function P(D){if(E(D))throw new TypeError;return d===D||p===D||!E(_)&&_.has(D)}function I(D,Q,st){if(!P(st))throw new Error("Metadata provider not registered.");var ft=$(D,Q);if(ft!==st){if(!E(ft))return!1;var At=U.get(D);E(At)&&(At=new f,U.set(D,At)),At.set(Q,st)}return!0}}function hr(){var u;return!E(x)&&et(e.Reflect)&&Object.isExtensible(e.Reflect)&&(u=e.Reflect[x]),E(u)&&(u=mr()),!E(x)&&et(e.Reflect)&&Object.isExtensible(e.Reflect)&&Object.defineProperty(e.Reflect,x,{enumerable:!1,configurable:!1,writable:!1,value:u}),u}function pr(u){var d=new y,p={isProviderFor:function(P,I){var D=d.get(P);return E(D)?!1:D.has(I)},OrdinaryDefineOwnMetadata:pt,OrdinaryHasOwnMetadata:U,OrdinaryGetOwnMetadata:ut,OrdinaryOwnMetadataKeys:Z,OrdinaryDeleteMetadata:$};return k.registerProvider(p),p;function _(P,I,D){var Q=d.get(P),st=!1;if(E(Q)){if(!D)return;Q=new f,d.set(P,Q),st=!0}var ft=Q.get(I);if(E(ft)){if(!D)return;if(ft=new f,Q.set(I,ft),!u.setProvider(P,I,p))throw Q.delete(I),st&&d.delete(P),new Error("Wrong provider for target.")}return ft}function U(P,I,D){var Q=_(I,D,!1);return E(Q)?!1:at(Q.has(P))}function ut(P,I,D){var Q=_(I,D,!1);if(!E(Q))return Q.get(P)}function pt(P,I,D,Q){var st=_(D,Q,!0);st.set(P,I)}function Z(P,I){var D=[],Q=_(P,I,!1);if(E(Q))return D;for(var st=Q.keys(),ft=oe(st),At=0;;){var fo=ne(ft);if(!fo)return D.length=At,D;var Mi=ie(fo);try{D[At]=Mi}catch(Ei){try{ae(ft)}finally{throw Ei}}At++}}function $(P,I,D){var Q=_(I,D,!1);if(E(Q)||!Q.delete(P))return!1;if(Q.size===0){var st=d.get(I);E(st)||(st.delete(D),st.size===0&&d.delete(st))}return!0}}function br(u){var d=u.defineMetadata,p=u.hasOwnMetadata,_=u.getOwnMetadata,U=u.getOwnMetadataKeys,ut=u.deleteMetadata,pt=new y,Z={isProviderFor:function($,P){var I=pt.get($);return!E(I)&&I.has(P)?!0:U($,P).length?(E(I)&&(I=new w,pt.set($,I)),I.add(P),!0):!1},OrdinaryDefineOwnMetadata:d,OrdinaryHasOwnMetadata:p,OrdinaryGetOwnMetadata:_,OrdinaryOwnMetadataKeys:U,OrdinaryDeleteMetadata:ut};return Z}function Gt(u,d,p){var _=k.getProvider(u,d);if(!E(_))return _;if(p){if(k.setProvider(u,d,h))return h;throw new Error("Illegal state.")}}function gr(){var u={},d=[],p=function(){function Z($,P,I){this._index=0,this._keys=$,this._values=P,this._selector=I}return Z.prototype["@@iterator"]=function(){return this},Z.prototype[a]=function(){return this},Z.prototype.next=function(){var $=this._index;if($>=0&&$<this._keys.length){var P=this._selector(this._keys[$],this._values[$]);return $+1>=this._keys.length?(this._index=-1,this._keys=d,this._values=d):this._index++,{value:P,done:!1}}return{value:void 0,done:!0}},Z.prototype.throw=function($){throw this._index>=0&&(this._index=-1,this._keys=d,this._values=d),$},Z.prototype.return=function($){return this._index>=0&&(this._index=-1,this._keys=d,this._values=d),{value:$,done:!0}},Z}(),_=function(){function Z(){this._keys=[],this._values=[],this._cacheKey=u,this._cacheIndex=-2}return Object.defineProperty(Z.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),Z.prototype.has=function($){return this._find($,!1)>=0},Z.prototype.get=function($){var P=this._find($,!1);return P>=0?this._values[P]:void 0},Z.prototype.set=function($,P){var I=this._find($,!0);return this._values[I]=P,this},Z.prototype.delete=function($){var P=this._find($,!1);if(P>=0){for(var I=this._keys.length,D=P+1;D<I;D++)this._keys[D-1]=this._keys[D],this._values[D-1]=this._values[D];return this._keys.length--,this._values.length--,Wt($,this._cacheKey)&&(this._cacheKey=u,this._cacheIndex=-2),!0}return!1},Z.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=u,this._cacheIndex=-2},Z.prototype.keys=function(){return new p(this._keys,this._values,U)},Z.prototype.values=function(){return new p(this._keys,this._values,ut)},Z.prototype.entries=function(){return new p(this._keys,this._values,pt)},Z.prototype["@@iterator"]=function(){return this.entries()},Z.prototype[a]=function(){return this.entries()},Z.prototype._find=function($,P){if(!Wt(this._cacheKey,$)){this._cacheIndex=-1;for(var I=0;I<this._keys.length;I++)if(Wt(this._keys[I],$)){this._cacheIndex=I;break}}return this._cacheIndex<0&&P&&(this._cacheIndex=this._keys.length,this._keys.push($),this._values.push(void 0)),this._cacheIndex},Z}();return _;function U(Z,$){return Z}function ut(Z,$){return $}function pt(Z,$){return[Z,$]}}function vr(){var u=function(){function d(){this._map=new f}return Object.defineProperty(d.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),d.prototype.has=function(p){return this._map.has(p)},d.prototype.add=function(p){return this._map.set(p,p),this},d.prototype.delete=function(p){return this._map.delete(p)},d.prototype.clear=function(){this._map.clear()},d.prototype.keys=function(){return this._map.keys()},d.prototype.values=function(){return this._map.keys()},d.prototype.entries=function(){return this._map.entries()},d.prototype["@@iterator"]=function(){return this.keys()},d.prototype[a]=function(){return this.keys()},d}();return u}function yr(){var u=16,d=b.create(),p=_();return function(){function $(){this._key=_()}return $.prototype.has=function(P){var I=U(P,!1);return I!==void 0?b.has(I,this._key):!1},$.prototype.get=function(P){var I=U(P,!1);return I!==void 0?b.get(I,this._key):void 0},$.prototype.set=function(P,I){var D=U(P,!0);return D[this._key]=I,this},$.prototype.delete=function(P){var I=U(P,!1);return I!==void 0?delete I[this._key]:!1},$.prototype.clear=function(){this._key=_()},$}();function _(){var $;do $="@@WeakMap@@"+Z();while(b.has(d,$));return d[$]=!0,$}function U($,P){if(!r.call($,p)){if(!P)return;Object.defineProperty($,p,{value:b.create()})}return $[p]}function ut($,P){for(var I=0;I<P;++I)$[I]=Math.random()*255|0;return $}function pt($){if(typeof Uint8Array=="function"){var P=new Uint8Array($);return typeof crypto!="undefined"?crypto.getRandomValues(P):typeof msCrypto!="undefined"?msCrypto.getRandomValues(P):ut(P,$),P}return ut(new Array($),$)}function Z(){var $=pt(u);$[6]=$[6]&79|64,$[8]=$[8]&191|128;for(var P="",I=0;I<u;++I){var D=$[I];(I===4||I===6||I===8)&&(P+="-"),D<16&&(P+="0"),P+=D.toString(16).toLowerCase()}return P}}function Re(u){return u.__=void 0,delete u.__,u}})})(qo||(qo={}))});var ei=Pt((rl,ti)=>{"use strict";function Ct(o){if(this.size=o|0,this.size<=1||(this.size&this.size-1)!=0)throw new Error("FFT size must be a power of two and bigger than 1");this._csize=o<<1;for(var t=new Array(this.size*2),e=0;e<t.length;e+=2){let c=Math.PI*e/this.size;t[e]=Math.cos(c),t[e+1]=-Math.sin(c)}this.table=t;for(var r=0,i=1;this.size>i;i<<=1)r++;this._width=r%2==0?r-1:r,this._bitrev=new Array(1<<this._width);for(var n=0;n<this._bitrev.length;n++){this._bitrev[n]=0;for(var a=0;a<this._width;a+=2){var s=this._width-a-2;this._bitrev[n]|=(n>>>a&3)<<s}}this._out=null,this._data=null,this._inv=0}ti.exports=Ct;Ct.prototype.fromComplexArray=function(t,e){for(var r=e||new Array(t.length>>>1),i=0;i<t.length;i+=2)r[i>>>1]=t[i];return r};Ct.prototype.createComplexArray=function(){let t=new Array(this._csize);for(var e=0;e<t.length;e++)t[e]=0;return t};Ct.prototype.toComplexArray=function(t,e){for(var r=e||this.createComplexArray(),i=0;i<r.length;i+=2)r[i]=t[i>>>1],r[i+1]=0;return r};Ct.prototype.completeSpectrum=function(t){for(var e=this._csize,r=e>>>1,i=2;i<r;i+=2)t[e-i]=t[i],t[e-i+1]=-t[i+1]};Ct.prototype.transform=function(t,e){if(t===e)throw new Error("Input and output buffers must be different");this._out=t,this._data=e,this._inv=0,this._transform4(),this._out=null,this._data=null};Ct.prototype.realTransform=function(t,e){if(t===e)throw new Error("Input and output buffers must be different");this._out=t,this._data=e,this._inv=0,this._realTransform4(),this._out=null,this._data=null};Ct.prototype.inverseTransform=function(t,e){if(t===e)throw new Error("Input and output buffers must be different");this._out=t,this._data=e,this._inv=1,this._transform4();for(var r=0;r<t.length;r++)t[r]/=this.size;this._out=null,this._data=null};Ct.prototype._transform4=function(){var t=this._out,e=this._csize,r=this._width,i=1<<r,n=e/i<<1,a,s,c=this._bitrev;if(n===4)for(a=0,s=0;a<e;a+=n,s++){let x=c[s];this._singleTransform2(a,x,i)}else for(a=0,s=0;a<e;a+=n,s++){let x=c[s];this._singleTransform4(a,x,i)}var l=this._inv?-1:1,b=this.table;for(i>>=2;i>=2;i>>=2){n=e/i<<1;var m=n>>>2;for(a=0;a<e;a+=n)for(var f=a+m,w=a,y=0;w<f;w+=2,y+=i){let x=w,k=x+m,h=k+m,g=h+m,v=t[x],A=t[x+1],S=t[k],N=t[k+1],B=t[h],M=t[h+1],H=t[g],W=t[g+1],ot=v,tt=A,z=b[y],T=l*b[y+1],R=S*z-N*T,C=S*T+N*z,O=b[2*y],F=l*b[2*y+1],q=B*O-M*F,V=B*F+M*O,G=b[3*y],E=l*b[3*y+1],it=H*G-W*E,xt=H*E+W*G,et=ot+q,ht=tt+V,Tt=ot-q,at=tt-V,Rt=R+it,dt=C+xt,gt=l*(R-it),vt=l*(C-xt),Dt=et+Rt,$e=ht+dt,Wt=et-Rt,re=ht-dt,oe=Tt+vt,ie=at-gt,ne=Tt-vt,ae=at+gt;t[x]=Dt,t[x+1]=$e,t[k]=oe,t[k+1]=ie,t[h]=Wt,t[h+1]=re,t[g]=ne,t[g+1]=ae}}};Ct.prototype._singleTransform2=function(t,e,r){let i=this._out,n=this._data,a=n[e],s=n[e+1],c=n[e+r],l=n[e+r+1],b=a+c,m=s+l,f=a-c,w=s-l;i[t]=b,i[t+1]=m,i[t+2]=f,i[t+3]=w};Ct.prototype._singleTransform4=function(t,e,r){let i=this._out,n=this._data,a=this._inv?-1:1,s=r*2,c=r*3,l=n[e],b=n[e+1],m=n[e+r],f=n[e+r+1],w=n[e+s],y=n[e+s+1],x=n[e+c],k=n[e+c+1],h=l+w,g=b+y,v=l-w,A=b-y,S=m+x,N=f+k,B=a*(m-x),M=a*(f-k),H=h+S,W=g+N,ot=v+M,tt=A-B,z=h-S,T=g-N,R=v-M,C=A+B;i[t]=H,i[t+1]=W,i[t+2]=ot,i[t+3]=tt,i[t+4]=z,i[t+5]=T,i[t+6]=R,i[t+7]=C};Ct.prototype._realTransform4=function(){var t=this._out,e=this._csize,r=this._width,i=1<<r,n=e/i<<1,a,s,c=this._bitrev;if(n===4)for(a=0,s=0;a<e;a+=n,s++){let _=c[s];this._singleRealTransform2(a,_>>>1,i>>>1)}else for(a=0,s=0;a<e;a+=n,s++){let _=c[s];this._singleRealTransform4(a,_>>>1,i>>>1)}var l=this._inv?-1:1,b=this.table;for(i>>=2;i>=2;i>>=2){n=e/i<<1;var m=n>>>1,f=m>>>1,w=f>>>1;for(a=0;a<e;a+=n)for(var y=0,x=0;y<=w;y+=2,x+=i){var k=a+y,h=k+f,g=h+f,v=g+f,A=t[k],S=t[k+1],N=t[h],B=t[h+1],M=t[g],H=t[g+1],W=t[v],ot=t[v+1],tt=A,z=S,T=b[x],R=l*b[x+1],C=N*T-B*R,O=N*R+B*T,F=b[2*x],q=l*b[2*x+1],V=M*F-H*q,G=M*q+H*F,E=b[3*x],it=l*b[3*x+1],xt=W*E-ot*it,et=W*it+ot*E,ht=tt+V,Tt=z+G,at=tt-V,Rt=z-G,dt=C+xt,gt=O+et,vt=l*(C-xt),Dt=l*(O-et),$e=ht+dt,Wt=Tt+gt,re=at+Dt,oe=Rt-vt;if(t[k]=$e,t[k+1]=Wt,t[h]=re,t[h+1]=oe,y===0){var ie=ht-dt,ne=Tt-gt;t[g]=ie,t[g+1]=ne;continue}if(y!==w){var ae=at,Te=-Rt,mr=ht,hr=-Tt,pr=-l*Dt,br=-l*vt,Gt=-l*gt,gr=-l*dt,vr=ae+pr,yr=Te+br,Re=mr+gr,u=hr-Gt,d=a+f-y,p=a+m-y;t[d]=vr,t[d+1]=yr,t[p]=Re,t[p+1]=u}}}};Ct.prototype._singleRealTransform2=function(t,e,r){let i=this._out,n=this._data,a=n[e],s=n[e+r],c=a+s,l=a-s;i[t]=c,i[t+1]=0,i[t+2]=l,i[t+3]=0};Ct.prototype._singleRealTransform4=function(t,e,r){let i=this._out,n=this._data,a=this._inv?-1:1,s=r*2,c=r*3,l=n[e],b=n[e+r],m=n[e+s],f=n[e+c],w=l+m,y=l-m,x=b+f,k=a*(b-f),h=w+x,g=y,v=-k,A=w-x,S=y,N=k;i[t]=h,i[t+1]=0,i[t+2]=g,i[t+3]=v,i[t+4]=A,i[t+5]=0,i[t+6]=S,i[t+7]=N}});var oi=Pt(Ue=>{"use strict";var or=Ue&&Ue.__assign||function(){return or=Object.assign||function(o){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(o[i]=t[i])}return o},or.apply(this,arguments)};Object.defineProperty(Ue,"__esModule",{value:!0});var on={threshold:.1,sampleRate:44100,probabilityThreshold:.1};function nn(o){o===void 0&&(o={});var t=or(or({},on),o),e=t.threshold,r=t.sampleRate,i=t.probabilityThreshold;return function(a){var s;for(s=1;s<a.length;s*=2);s/=2;for(var c=s/2,l=new Float32Array(c),b=0,m,f=0;f<c;f++)l[f]=0;for(var f=1;f<c;f++)for(var w=0;w<c;w++){var y=a[w]-a[w+f];l[f]+=y*y}l[0]=1,l[1]=1;for(var x=0,f=1;f<c;f++)x+=l[f],l[f]*=f/x;for(m=2;m<c;m++)if(l[m]<e){for(;m+1<c&&l[m+1]<l[m];)m++;b=1-l[m];break}if(m===c||l[m]>=e||b<i)return null;var k,h,g;if(m<1?h=m:h=m-1,m+1<c?g=m+1:g=m,h===m)l[m]<=l[g]?k=m:k=g;else if(g===m)l[m]<=l[h]?k=m:k=h;else{var v=l[h],A=l[m],S=l[g];k=m+(S-v)/(2*(2*A-S-v))}return r/k}}Ue.YIN=nn});var ii=Pt(He=>{"use strict";var ir=He&&He.__assign||function(){return ir=Object.assign||function(o){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(o[i]=t[i])}return o},ir.apply(this,arguments)};Object.defineProperty(He,"__esModule",{value:!0});var an={sampleRate:44100,minFrequency:82,maxFrequency:1e3,ratio:5,sensitivity:.1};function sn(o){o===void 0&&(o={});var t=ir(ir({},an),o),e=t.sampleRate,r=t.minFrequency,i=t.maxFrequency,n=t.sensitivity,a=t.ratio,s=[],c=Math.ceil(e/r),l=Math.floor(e/i);return function(m){var f=m.length,w=0,y=1/0,x=-1/0,k,h,g,v,A,S,N,B;for(v=0;v<f;v++)if(l<=v&&v<=c){for(N=0,B=v,w=0,k=[],h=[];N<f-v;w++,B++,N++)k[w]=m[N],h[w]=m[B];var M=k.length;for(g=[],S=0;S<M;S++)g[S]=k[S]-h[S];var H=0;for(S=0;S<M;S++)H+=Math.abs(g[S]);s[v]=H}for(A=l;A<c;A++)s[A]<y&&(y=s[A]),s[A]>x&&(x=s[A]);var W=Math.round(n*(x-y)+y);for(A=l;A<=c&&s[A]>W;A++);var ot=l/2;y=s[A];var tt=A;for(v=A-1;v<A+ot&&v<=c;v++)s[v]<y&&(y=s[v],tt=v);return Math.round(s[tt]*a)<x?e/tt:null}}He.AMDF=sn});var ai=Pt(Be=>{"use strict";var nr=Be&&Be.__assign||function(){return nr=Object.assign||function(o){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(o[i]=t[i])}return o},nr.apply(this,arguments)};Object.defineProperty(Be,"__esModule",{value:!0});var ni={sampleRate:44100};function ln(o){o===void 0&&(o=ni);var t=nr(nr({},ni),o),e=t.sampleRate;return function(i){var n=i.length,a=0,s,c,l,b;for(s=0;s<n;s++)b=i[s],a+=b*b;if(a=Math.sqrt(a/n),a<.01)return-1;var m=0,f=n-1,w=.2;for(s=0;s<n/2;s++)if(Math.abs(i[s])<w){m=s;break}for(s=1;s<n/2;s++)if(Math.abs(i[n-s])<w){f=n-s;break}var y=i.slice(m,f),x=y.length,k=new Array(x).fill(0);for(s=0;s<x;s++)for(c=0;c<x-s;c++)k[s]=k[s]+y[c]*y[c+s];for(l=0;k[l]>k[l+1];)l++;var h=-1,g=-1;for(s=l;s<x;s++)k[s]>h&&(h=k[s],g=s);var v=g,A=k[v-1],S=k[v],N=k[v+1],B=(A+N-2*S)/2,M=(N-A)/2;return B&&(v=v-M/(2*B)),e/v}}Be.ACF2PLUS=ln});var si=Pt(Ve=>{"use strict";var ar=Ve&&Ve.__assign||function(){return ar=Object.assign||function(o){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(o[i]=t[i])}return o},ar.apply(this,arguments)};Object.defineProperty(Ve,"__esModule",{value:!0});var cn=6,un=3e3,fn=3,dn=.75,mn={sampleRate:44100};function hn(o){o===void 0&&(o={});var t=ar(ar({},mn),o),e=t.sampleRate;return function(i){for(var n=[],a=[],s=i.length,c=null,l=0,b=0,m=0,f=0;f<s;f++){var w=i[f];l=l+w,m=Math.max(m,w),b=Math.min(b,w)}l/=s,b-=l,m-=l;for(var y=m>-1*b?m:-1*b,x=y*dn,k=0,h=-1,g=i.length,v,A,S;v=~~(e/(Math.pow(2,k)*un)),!(g<2);){var N=void 0,B=-1e3,M=-1e6,H=-1e6,W=!1,ot=!1;S=0,A=0;for(var f=2;f<g;f++){var tt=i[f]-l,z=i[f-1]-l;z<=0&&tt>0&&(W=!0),z>=0&&tt<0&&(ot=!0),N=tt-z,B>-1e3&&(ot&&B<0&&N>=0&&Math.abs(tt)>=x&&f>M+v&&(n[S++]=f,M=f,ot=!1),W&&B>0&&N<=0&&Math.abs(tt)>=x&&f>H+v&&(a[A++]=f,H=f,W=!1)),B=N}if(S===0&&A===0)break;for(var T=void 0,R=[],f=0;f<g;f++)R[f]=0;for(var f=0;f<S;f++)for(var C=1;C<fn;C++)f+C<S&&(T=Math.abs(n[f]-n[f+C]),R[T]+=1);for(var O=-1,F=-1,f=0;f<g;f++){for(var q=0,C=-1*v;C<=v;C++)f+C>=0&&f+C<g&&(q+=R[f+C]);q===F?f===2*O&&(O=f):q>F&&(F=q,O=f)}for(var V=0,G=0,C=-v;C<=v;C++)if(O+C>=0&&O+C<s){var E=R[O+C];E>0&&(G+=E,V+=(O+C)*E)}if(V/=G,h>-1&&Math.abs(V*2-h)<=2*v){c=e/(Math.pow(2,k-1)*h);break}if(h=V,k++,k>=cn||g<2)break;var it=i.subarray(0);g===R.length&&(it=new Float32Array(g/2));for(var f=0;f<g/2;f++)it[f]=(i[2*f]+i[2*f+1])/2;i=it,g/=2}return c}}Ve.DynamicWavelet=hn});var li=Pt(Ye=>{"use strict";var sr=Ye&&Ye.__assign||function(){return sr=Object.assign||function(o){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(o[i]=t[i])}return o},sr.apply(this,arguments)};Object.defineProperty(Ye,"__esModule",{value:!0});var pn={bufferSize:1024,cutoff:.97,sampleRate:44100};function bn(o){o===void 0&&(o={});var t=sr(sr({},pn),o),e=t.bufferSize,r=t.cutoff,i=t.sampleRate,n=.5,a=80,s=new Float32Array(e),c=new Float32Array(e),l,b,m=[],f=[],w=[];function y(h){var g,v;c[0]=h[0]*h[0];for(var A=1;A<h.length;A+=1)c[A]=h[A]*h[A]+c[A-1];for(var S=0;S<h.length;S++){g=0,v=c[h.length-1-S]+c[h.length-1]-c[S];for(var A=0;A<h.length-S;A++)g+=h[A]*h[A+S];s[S]=2*g/v}}function x(h){var g=s[h-1],v=s[h],A=s[h+1],S=h,N=A+g-2*v;if(N===0)l=S,b=v;else{var B=g-A;l=S+B/(2*N),b=v-B*B/(8*N)}}function k(){for(var h=0,g=0;h<(s.length-1)/3&&s[h]>0;)h++;for(;h<s.length-1&&s[h]<=0;)h++;for(h==0&&(h=1);h<s.length-1;)if(s[h]>s[h-1]&&s[h]>=s[h+1]&&(g==0||s[h]>s[g])&&(g=h),h++,h<s.length-1&&s[h]<=0)for(g>0&&(m.push(g),g=0);h<s.length-1&&s[h]<=0;)h++;g>0&&m.push(g)}return function(g){var v;m=[],f=[],w=[],y(g),k();for(var A=-1/0,S=0;S<m.length;S++){var N=m[S];A=Math.max(A,s[N]),s[N]>n&&(x(N),w.push(b),f.push(l),A=Math.max(A,b))}if(f.length){for(var B=r*A,M=0,S=0;S<w.length;S++)if(w[S]>=B){M=S;break}var H=f[M],W=i/H;W>a?v=W:v=-1}else v=-1;return{probability:A,freq:v}}}Ye.Macleod=bn});var ci=Pt(ee=>{"use strict";var lr=ee&&ee.__assign||function(){return lr=Object.assign||function(o){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(o[i]=t[i])}return o},lr.apply(this,arguments)};Object.defineProperty(ee,"__esModule",{value:!0});ee.DEFAULT_FREQUENCIES_PARAMS={tempo:120,quantization:4,sampleRate:44100};function gn(o,t){var e=o.map(function(l){return l(t)}).filter(function(l){return l!==null}).sort(function(l,b){return l-b});if(e.length===1)return e[0];if(e.length===2){var r=e[0],i=e[1];return r*2>i?Math.sqrt(r*i):r}else{var r=e[0],i=e[1],n=e[e.length-2],a=e[e.length-1],s=r*2>i?e:e.slice(1),c=n*2>a?s:s.slice(0,-1);return Math.pow(c.reduce(function(m,f){return m*f},1),1/c.length)}}function vn(o,t,e){e===void 0&&(e={});var r=lr(lr({},ee.DEFAULT_FREQUENCIES_PARAMS),e),i=r.tempo,n=r.quantization,a=r.sampleRate,s=t.length,c=Math.round(a*60/(n*i)),l;Array.isArray(o)?l=gn.bind(null,o):l=o;for(var b=[],m=0,f=s-c;m<=f;m+=c){var w=t.slice(m,m+c),y=l(w);b.push(y)}return b}ee.frequencies=vn});var bi=Pt(Ut=>{"use strict";Object.defineProperty(Ut,"__esModule",{value:!0});var ui=oi();Ut.YIN=ui.YIN;var fi=ii();Ut.AMDF=fi.AMDF;var di=ai();Ut.ACF2PLUS=di.ACF2PLUS;var mi=si();Ut.DynamicWavelet=mi.DynamicWavelet;var hi=li();Ut.Macleod=hi.Macleod;var pi=ci();Ut.frequencies=pi.frequencies;Ut.default={YIN:ui.YIN,AMDF:fi.AMDF,ACF2PLUS:di.ACF2PLUS,DynamicWavelet:mi.DynamicWavelet,Macleod:hi.Macleod,frequencies:pi.frequencies}});var ki=Pt((Xl,_i)=>{var _n=4,kn=.001,An=1e-7,Sn=10,Ze=11,fr=1/(Ze-1),Mn=typeof Float32Array=="function";function yi(o,t){return 1-3*t+3*o}function Ci(o,t){return 3*t-6*o}function wi(o){return 3*o}function dr(o,t,e){return((yi(t,e)*o+Ci(t,e))*o+wi(t))*o}function xi(o,t,e){return 3*yi(t,e)*o*o+2*Ci(t,e)*o+wi(t)}function En(o,t,e,r,i){var n,a,s=0;do a=t+(e-t)/2,n=dr(a,r,i)-o,n>0?e=a:t=a;while(Math.abs(n)>An&&++s<Sn);return a}function $n(o,t,e,r){for(var i=0;i<_n;++i){var n=xi(t,e,r);if(n===0)return t;var a=dr(t,e,r)-o;t-=a/n}return t}function Tn(o){return o}_i.exports=function(t,e,r,i){if(!(0<=t&&t<=1&&0<=r&&r<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===e&&r===i)return Tn;for(var n=Mn?new Float32Array(Ze):new Array(Ze),a=0;a<Ze;++a)n[a]=dr(a*fr,t,r);function s(c){for(var l=0,b=1,m=Ze-1;b!==m&&n[b]<=c;++b)l+=fr;--b;var f=(c-n[b])/(n[b+1]-n[b]),w=l+f*fr,y=xi(w,t,r);return y>=kn?$n(c,w,t,r):y===0?w:En(c,l,l+fr,t,r)}return function(l){return l===0?0:l===1?1:dr(s(l),e,i)}}});var Or={};mt(Or,{AppBodyComponent:()=>jt});var rt=o=>t=>typeof t=="function"?((e,r)=>(window.customElements.define(e,r),r))(o,t):((e,r)=>{let{kind:i,elements:n}=r;return{kind:i,elements:n,finisher(a){window.customElements.define(e,a)}}})(o,t);var Fi=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}};function nt(o){return(t,e)=>e!==void 0?((r,i,n)=>{i.constructor.createProperty(n,r)})(o,t,e):Fi(o,t)}function po(o){return nt({...o,state:!0})}var se=({finisher:o,descriptor:t})=>(e,r)=>{var i;if(r===void 0){let n=(i=e.originalKey)!==null&&i!==void 0?i:e.key,a=t!=null?{kind:"method",placement:"prototype",key:n,descriptor:t(e.key)}:{...e,key:n};return o!=null&&(a.finisher=function(s){o(s,n)}),a}{let n=e.constructor;t!==void 0&&Object.defineProperty(e,r,t(r)),o==null||o(n,r)}};function bo(o,t){return se({descriptor:e=>{let r={get(){var i,n;return(n=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(o))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(t){let i=typeof e=="symbol"?Symbol():"__"+e;r.get=function(){var n,a;return this[i]===void 0&&(this[i]=(a=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&a!==void 0?a:null),this[i]}}return r}})}var Xe=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,xr=Symbol(),go=new Map,Ke=class{constructor(t,e){if(this._$cssResult$=!0,e!==xr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=go.get(this.cssText);return Xe&&t===void 0&&(go.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}},Zt=o=>new Ke(typeof o=="string"?o:o+"",xr),X=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((r,i,n)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[n+1],o[0]);return new Ke(e,xr)},_r=(o,t)=>{Xe?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let r=document.createElement("style"),i=window.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=e.cssText,o.appendChild(r)})},tr=Xe?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return Zt(e)})(o):o;var kr,vo=window.trustedTypes,Ii=vo?vo.emptyScript:"",yo=window.reactiveElementPolyfillSupport,Ar={toAttribute(o,t){switch(t){case Boolean:o=o?Ii:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Co=(o,t)=>t!==o&&(t==t||o==o),Sr={attribute:!0,type:String,converter:Ar,reflect:!1,hasChanged:Co},Vt=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,r)=>{let i=this._$Eh(r,e);i!==void 0&&(this._$Eu.set(i,r),t.push(i))}),t}static createProperty(t,e=Sr){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let r=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,r,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(i){let n=this[t];this[e]=i,this.requestUpdate(t,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Sr}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){let e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let i of r)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let i of r)e.unshift(tr(i))}else t!==void 0&&e.push(tr(t));return e}static _$Eh(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,r;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return _r(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostConnected)===null||r===void 0?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostDisconnected)===null||r===void 0?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ES(t,e,r=Sr){var i,n;let a=this.constructor._$Eh(t,r);if(a!==void 0&&r.reflect===!0){let s=((n=(i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==null&&n!==void 0?n:Ar.toAttribute)(e,r.type);this._$Ei=t,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$Ei=null}}_$AK(t,e){var r,i,n;let a=this.constructor,s=a._$Eu.get(t);if(s!==void 0&&this._$Ei!==s){let c=a.getPropertyOptions(s),l=c.converter,b=(n=(i=(r=l)===null||r===void 0?void 0:r.fromAttribute)!==null&&i!==void 0?i:typeof l=="function"?l:null)!==null&&n!==void 0?n:Ar.fromAttribute;this._$Ei=s,this[s]=b(e,c.type),this._$Ei=null}}requestUpdate(t,e,r){let i=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||Co)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Ei!==t&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(t,r))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((i,n)=>this[n]=i),this._$Et=void 0);let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(r)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$E_!==void 0&&(this._$E_.forEach((e,r)=>this._$ES(r,this[r],e)),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}};Vt.finalized=!0,Vt.elementProperties=new Map,Vt.elementStyles=[],Vt.shadowRootOptions={mode:"open"},yo==null||yo({ReactiveElement:Vt}),((kr=globalThis.reactiveElementVersions)!==null&&kr!==void 0?kr:globalThis.reactiveElementVersions=[]).push("1.0.2");var Mr,le=globalThis.trustedTypes,wo=le?le.createPolicy("lit-html",{createHTML:o=>o}):void 0,Yt=`lit$${(Math.random()+"").slice(9)}$`,xo="?"+Yt,Ni=`<${xo}>`,ce=document,Oe=(o="")=>ce.createComment(o),Fe=o=>o===null||typeof o!="object"&&typeof o!="function",_o=Array.isArray,Di=o=>{var t;return _o(o)||typeof((t=o)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},Ie=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ko=/-->/g,Ao=/>/g,Jt=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,So=/'/g,Mo=/"/g,Eo=/^(?:script|style|textarea)$/i,$o=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),Y=$o(1),ue=$o(2),zt=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),To=new WeakMap,Ro=(o,t,e)=>{var r,i;let n=(r=e==null?void 0:e.renderBefore)!==null&&r!==void 0?r:t,a=n._$litPart$;if(a===void 0){let s=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=a=new he(t.insertBefore(Oe(),s),s,void 0,e??{})}return a._$AI(o),a},fe=ce.createTreeWalker(ce,129,null,!1),zi=(o,t)=>{let e=o.length-1,r=[],i,n=t===2?"<svg>":"",a=Ie;for(let c=0;c<e;c++){let l=o[c],b,m,f=-1,w=0;for(;w<l.length&&(a.lastIndex=w,m=a.exec(l),m!==null);)w=a.lastIndex,a===Ie?m[1]==="!--"?a=ko:m[1]!==void 0?a=Ao:m[2]!==void 0?(Eo.test(m[2])&&(i=RegExp("</"+m[2],"g")),a=Jt):m[3]!==void 0&&(a=Jt):a===Jt?m[0]===">"?(a=i??Ie,f=-1):m[1]===void 0?f=-2:(f=a.lastIndex-m[2].length,b=m[1],a=m[3]===void 0?Jt:m[3]==='"'?Mo:So):a===Mo||a===So?a=Jt:a===ko||a===Ao?a=Ie:(a=Jt,i=void 0);let y=a===Jt&&o[c+1].startsWith("/>")?" ":"";n+=a===Ie?l+Ni:f>=0?(r.push(b),l.slice(0,f)+"$lit$"+l.slice(f)+Yt+y):l+Yt+(f===-2?(r.push(void 0),c):y)}let s=n+(o[e]||"<?>")+(t===2?"</svg>":"");return[wo!==void 0?wo.createHTML(s):s,r]},de=class{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let n=0,a=0,s=t.length-1,c=this.parts,[l,b]=zi(t,e);if(this.el=de.createElement(l,r),fe.currentNode=this.el.content,e===2){let m=this.el.content,f=m.firstChild;f.remove(),m.append(...f.childNodes)}for(;(i=fe.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes()){let m=[];for(let f of i.getAttributeNames())if(f.endsWith("$lit$")||f.startsWith(Yt)){let w=b[a++];if(m.push(f),w!==void 0){let y=i.getAttribute(w.toLowerCase()+"$lit$").split(Yt),x=/([.?@])?(.*)/.exec(w);c.push({type:1,index:n,name:x[2],strings:y,ctor:x[1]==="."?Oo:x[1]==="?"?Fo:x[1]==="@"?Io:Ne})}else c.push({type:6,index:n})}for(let f of m)i.removeAttribute(f)}if(Eo.test(i.tagName)){let m=i.textContent.split(Yt),f=m.length-1;if(f>0){i.textContent=le?le.emptyScript:"";for(let w=0;w<f;w++)i.append(m[w],Oe()),fe.nextNode(),c.push({type:2,index:++n});i.append(m[f],Oe())}}}else if(i.nodeType===8)if(i.data===xo)c.push({type:2,index:n});else{let m=-1;for(;(m=i.data.indexOf(Yt,m+1))!==-1;)c.push({type:7,index:n}),m+=Yt.length-1}n++}}static createElement(t,e){let r=ce.createElement("template");return r.innerHTML=t,r}};function me(o,t,e=o,r){var i,n,a,s;if(t===zt)return t;let c=r!==void 0?(i=e._$Cl)===null||i===void 0?void 0:i[r]:e._$Cu,l=Fe(t)?void 0:t._$litDirective$;return(c==null?void 0:c.constructor)!==l&&((n=c==null?void 0:c._$AO)===null||n===void 0||n.call(c,!1),l===void 0?c=void 0:(c=new l(o),c._$AT(o,e,r)),r!==void 0?((a=(s=e)._$Cl)!==null&&a!==void 0?a:s._$Cl=[])[r]=c:e._$Cu=c),c!==void 0&&(t=me(o,c._$AS(o,t.values),c,r)),t}var Po=class{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;let{el:{content:r},parts:i}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:ce).importNode(r,!0);fe.currentNode=n;let a=fe.nextNode(),s=0,c=0,l=i[0];for(;l!==void 0;){if(s===l.index){let b;l.type===2?b=new he(a,a.nextSibling,this,t):l.type===1?b=new l.ctor(a,l.name,l.strings,this,t):l.type===6&&(b=new No(a,this,t)),this.v.push(b),l=i[++c]}s!==(l==null?void 0:l.index)&&(a=fe.nextNode(),s++)}return n}m(t){let e=0;for(let r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},he=class{constructor(t,e,r,i){var n;this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cg=(n=i==null?void 0:i.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=me(this,t,e),Fe(t)?t===K||t==null||t===""?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==zt&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.S(t):Di(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==K&&Fe(this._$AH)?this._$AA.nextSibling.data=t:this.S(ce.createTextNode(t)),this._$AH=t}T(t){var e;let{values:r,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=de.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.m(r);else{let a=new Po(n,this),s=a.p(this.options);a.m(r),this.S(s),this._$AH=a}}_$AC(t){let e=To.get(t.strings);return e===void 0&&To.set(t.strings,e=new de(t)),e}M(t){_o(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,i=0;for(let n of t)i===e.length?e.push(r=new he(this.A(Oe()),this.A(Oe()),this,this.options)):r=e[i],r._$AI(n),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Ne=class{constructor(t,e,r,i,n){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=K}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,i){let n=this.strings,a=!1;if(n===void 0)t=me(this,t,e,0),a=!Fe(t)||t!==this._$AH&&t!==zt,a&&(this._$AH=t);else{let s=t,c,l;for(t=n[0],c=0;c<n.length-1;c++)l=me(this,s[r+c],e,c),l===zt&&(l=this._$AH[c]),a||(a=!Fe(l)||l!==this._$AH[c]),l===K?t=K:t!==K&&(t+=(l??"")+n[c+1]),this._$AH[c]=l}a&&!i&&this.k(t)}k(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Oo=class extends Ne{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===K?void 0:t}},Li=le?le.emptyScript:"",Fo=class extends Ne{constructor(){super(...arguments),this.type=4}k(t){t&&t!==K?this.element.setAttribute(this.name,Li):this.element.removeAttribute(this.name)}},Io=class extends Ne{constructor(t,e,r,i,n){super(t,e,r,i,n),this.type=5}_$AI(t,e=this){var r;if((t=(r=me(this,t,e,0))!==null&&r!==void 0?r:K)===zt)return;let i=this._$AH,n=t===K&&i!==K||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==K&&(i===K||n);n&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;typeof this._$AH=="function"?this._$AH.call((r=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}},No=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){me(this,t)}};var Do=window.litHtmlPolyfillSupport;Do==null||Do(de,he),((Mr=globalThis.litHtmlVersions)!==null&&Mr!==void 0?Mr:globalThis.litHtmlVersions=[]).push("2.0.2");var Er,$r;var J=class extends Vt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;let r=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=r.firstChild),r}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Ro(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return zt}};J.finalized=!0,J._$litElement$=!0,(Er=globalThis.litElementHydrateSupport)===null||Er===void 0||Er.call(globalThis,{LitElement:J});var zo=globalThis.litElementPolyfillSupport;zo==null||zo({LitElement:J});(($r=globalThis.litElementVersions)!==null&&$r!==void 0?$r:globalThis.litElementVersions=[]).push("3.0.2");var Tr={};mt(Tr,{default:()=>ct});console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");var ct=X`
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
`;var pe=["primary","highlight","background","text"],De={"8008":{bgColor:"#333a45",mainColor:"#f44c7f",subColor:"#939eae",textColor:"#e9ecf0"},"9009":{bgColor:"#eeebe2",mainColor:"#080909",subColor:"#99947f",textColor:"#080909"},dark_note:{bgColor:"#1f1f1f",mainColor:"#f2c17b",subColor:"#768f95",textColor:"#d2dff4"},viridescent:{bgColor:"#2c3333",mainColor:"#95d5b2",subColor:"#84a98c",textColor:"#e9f5db"},dark:{bgColor:"#111",mainColor:"#eee",subColor:"#444",textColor:"#eee"},phantom:{bgColor:"#1a1b26",mainColor:"#7aa2f7",subColor:"#414868",textColor:"#c0caf5"},muted:{bgColor:"#525252",mainColor:"#c5b4e3",subColor:"#939eae",textColor:"#b1e4e3"},dark_magic_girl:{bgColor:"#091f2c",mainColor:"#f5b1cc",subColor:"#93e8d3",textColor:"#a288d9"},carbon:{bgColor:"#313131",mainColor:"#f66e0d",subColor:"#616161",textColor:"#f5e6c8"},vesper:{bgColor:"#101010",mainColor:"#ffc799",subColor:"#99ffe4",textColor:"#ffffff"},our_theme:{bgColor:"#ce1226",mainColor:"#fcd116",subColor:"#6d0f19",textColor:"#ffffff"},dots:{bgColor:"#121520",mainColor:"#fff",subColor:"#676e8a",textColor:"#fff"},nautilus:{bgColor:"#132237",mainColor:"#ebb723",subColor:"#0b4c6c",textColor:"#1cbaac"},serika:{bgColor:"#e1e1e3",mainColor:"#e2b714",subColor:"#aaaeb3",textColor:"#323437"},serika_dark:{bgColor:"#323437",mainColor:"#e2b714",subColor:"#646669",textColor:"#d1d0c5"},bushido:{bgColor:"#242933",mainColor:"#ec4c56",subColor:"#596172",textColor:"#f6f0e9"},red_samurai:{bgColor:"#84202c",mainColor:"#c79e6e",subColor:"#55131b",textColor:"#e2dad0"},rgb:{bgColor:"#111",mainColor:"#eee",subColor:"#444",textColor:"#eee"},oblivion:{bgColor:"#313231",mainColor:"#a5a096",subColor:"#5d6263",textColor:"#f7f5f1"},magic_girl:{bgColor:"#ffffff",mainColor:"#f5b1cc",subColor:"#93e8d3",textColor:"#00ac8c"},metropolis:{bgColor:"#0f1f2c",mainColor:"#56c3b7",subColor:"#326984",textColor:"#e4edf1"},mountain:{bgColor:"#0f0f0f",mainColor:"#e7e7e7",subColor:"#4c4c4c",textColor:"#e7e7e7"},laser:{bgColor:"#221b44",mainColor:"#009eaf",subColor:"#b82356",textColor:"#dbe7e8"},retro:{bgColor:"#dad3c1",mainColor:"#1d1b17",subColor:"#918b7d",textColor:"#1d1b17"},dracula:{bgColor:"#282a36",mainColor:"#bd93f9",subColor:"#6272a4",textColor:"#f8f8f2"},nord:{bgColor:"#242933",mainColor:"#88C0D0",subColor:"#2E3440",textColor:"#88C0D0"},mr_sleeves:{bgColor:"#d1d7da",mainColor:"#daa99b",subColor:"#9a9fa1",textColor:"#1d1d1d"},olivia:{bgColor:"#1c1b1d",mainColor:"#deaf9d",subColor:"#4e3e3e",textColor:"#f2efed"},bliss:{bgColor:"#262727",mainColor:"#f0d3c9",subColor:"#665957",textColor:"#fff"},mizu:{bgColor:"#afcbdd",mainColor:"#fcfbf6",subColor:"#85a5bb",textColor:"#1a2633"},metaverse:{bgColor:"#232323",mainColor:"#d82934",subColor:"#5e5e5e",textColor:"#e8e8e8"},shadow:{bgColor:"#000",mainColor:"#eee",subColor:"#444",textColor:"#eee"},mint:{bgColor:"#05385b",mainColor:"#5cdb95",subColor:"#20688a",textColor:"#edf5e1"},miami:{bgColor:"#f35588",mainColor:"#05dfd7",subColor:"#94294c",textColor:"#f0e9ec"},miami_nights:{bgColor:"#18181a",mainColor:"#e4609b",subColor:"#47bac0",textColor:"#fff"},modern_dolch:{bgColor:"#2d2e30",mainColor:"#7eddd3",subColor:"#54585c",textColor:"#e3e6eb"},botanical:{bgColor:"#7b9c98",mainColor:"#eaf1f3",subColor:"#495755",textColor:"#eaf1f3"},bingsu:{bgColor:"#b8a7aa",mainColor:"#83616e",subColor:"#48373d",textColor:"#ebe6ea"},terminal:{bgColor:"#191a1b",mainColor:"#79a617",subColor:"#48494b",textColor:"#e7eae0"},lavender:{bgColor:"#ada6c2",mainColor:"#e4e3e9",subColor:"#e4e3e9",textColor:"#2f2a41"},taro:{bgColor:"#b3baff",mainColor:"#130f1a",subColor:"#6f6c91",textColor:"#130f1a"},striker:{bgColor:"#124883",mainColor:"#d7dcda",subColor:"#0f2d4e",textColor:"#d6dbd9"},gruvbox_dark:{bgColor:"#282828",mainColor:"#d79921",subColor:"#665c54",textColor:"#ebdbb2"},gruvbox_light:{bgColor:"#fbf1c7",mainColor:"#689d6a",subColor:"#a89984",textColor:"#3c3836"},monokai:{bgColor:"#272822",mainColor:"#a6e22e",subColor:"#e6db74",textColor:"#e2e2dc"},sonokai:{bgColor:"#2c2e34",mainColor:"#9ed072",subColor:"#e7c664",textColor:"#e2e2e3"},camping:{bgColor:"#faf1e4",mainColor:"#618c56",subColor:"#c2b8aa",textColor:"#3c403b"},voc:{bgColor:"#190618",mainColor:"#e0caac",subColor:"#4c1e48",textColor:"#eeeae4"},vaporwave:{bgColor:"#a4a7ea",mainColor:"#e368da",subColor:"#7c7faf",textColor:"#f1ebf1"},pulse:{bgColor:"#181818",mainColor:"#17b8bd",subColor:"#53565a",textColor:"#e5f4f4"},matrix:{bgColor:"#000000",mainColor:"#15ff00",subColor:"#006500",textColor:"#d1ffcd"},olive:{bgColor:"#e9e5cc",mainColor:"#92946f",subColor:"#b7b39e",textColor:"#373731"},strawberry:{bgColor:"#f37f83",mainColor:"#fcfcf8",subColor:"#e53c58",textColor:"#fcfcf8"},night_runner:{bgColor:"#212121",mainColor:"#feff04",subColor:"#5c4a9c",textColor:"#e8e8e8"},cyberspace:{bgColor:"#181c18",mainColor:"#00ce7c",subColor:"#9578d3",textColor:"#c2fbe1"},joker:{bgColor:"#1a0e25",mainColor:"#99de1e",subColor:"#7554a3",textColor:"#e9e2f5"},dualshot:{bgColor:"#737373",mainColor:"#212222",subColor:"#aaaaaa",textColor:"#212222"},solarized_dark:{bgColor:"#002b36",mainColor:"#859900",subColor:"#2aa198",textColor:"#268bd2"},solarized_light:{bgColor:"#fdf6e3",mainColor:"#859900",subColor:"#2aa198",textColor:"#181819"},solarized_osaka:{bgColor:"#00141a",mainColor:"#859900",subColor:"#2aa198",textColor:"#b58900"},terra:{bgColor:"#0c100e",mainColor:"#89c559",subColor:"#436029",textColor:"#f0edd1"},red_dragon:{bgColor:"#1a0b0c",mainColor:"#ff3a32",subColor:"#e2a528",textColor:"#4a4d4e"},hammerhead:{bgColor:"#030613",mainColor:"#4fcdb9",subColor:"#213c53",textColor:"#e2f1f5"},future_funk:{bgColor:"#2e1a47",mainColor:"#f7f2ea",subColor:"#c18fff",textColor:"#f7f2ea"},milkshake:{bgColor:"#ffffff",mainColor:"#212b43",subColor:"#62cfe6",textColor:"#212b43"},aether:{bgColor:"#101820",mainColor:"#eedaea",subColor:"#cf6bdd",textColor:"#eedaea"},froyo:{bgColor:"#e1dacb",mainColor:"#7b7d7d",subColor:"#b29c5e",textColor:"#7b7d7d"},retrocast:{bgColor:"#07737a",mainColor:"#88dbdf",subColor:"#f3e03b",textColor:"#ffffff"},luna:{bgColor:"#221c35",mainColor:"#f67599",subColor:"#5a3a7e",textColor:"#ffe3eb"},graen:{bgColor:"#303c36",mainColor:"#a59682",subColor:"#181d1a",textColor:"#a59682"},bento:{bgColor:"#2d394d",mainColor:"#ff7a90",subColor:"#4a768d",textColor:"#fffaf8"},watermelon:{bgColor:"#1f4437",mainColor:"#d6686f",subColor:"#3e7a65",textColor:"#cdc6bc"},menthol:{bgColor:"#00c18c",mainColor:"#ffffff",subColor:"#186544",textColor:"#ffffff"},ishtar:{bgColor:"#202020",mainColor:"#91170c",subColor:"#847869",textColor:"#fae1c3"},mashu:{bgColor:"#2b2b2c",mainColor:"#76689a",subColor:"#d8a0a6",textColor:"#f1e2e4"},deku:{bgColor:"#058b8c",mainColor:"#b63530",subColor:"#255458",textColor:"#f7f2ea"},honey:{bgColor:"#f2aa00",mainColor:"#fff546",subColor:"#a66b00",textColor:"#f3eecb"},shoko:{bgColor:"#ced7e0",mainColor:"#81c4dd",subColor:"#7599b1",textColor:"#3b4c58"},norse:{bgColor:"#242425",mainColor:"#2b5f6d",subColor:"#505b5e",textColor:"#ccc2b1"},matcha_moccha:{bgColor:"#523525",mainColor:"#7ec160",subColor:"#9e6749",textColor:"#ecddcc"},cafe:{bgColor:"#ceb18d",mainColor:"#14120f",subColor:"#d4d2d1",textColor:"#14120f"},alpine:{bgColor:"#6c687f",mainColor:"#ffffff",subColor:"#9994b8",textColor:"#ffffff"},superuser:{bgColor:"#262a33",mainColor:"#43ffaf",subColor:"#526777",textColor:"#e5f7ef"},ms_cupcakes:{bgColor:"#ffffff",mainColor:"#5ed5f3",subColor:"#d64090",textColor:"#0a282f"},dollar:{bgColor:"#e4e4d4",mainColor:"#6b886b",subColor:"#8a9b69",textColor:"#555a56"},lime:{bgColor:"#7c878e",mainColor:"#93c247",subColor:"#4b5257",textColor:"#bfcfdc"},sweden:{bgColor:"#0058a3",mainColor:"#ffcc02",subColor:"#57abdb",textColor:"#ffffff"},wavez:{bgColor:"#1c292f",mainColor:"#6bde3b",subColor:"#1f5e6b",textColor:"#e9efe6"},nebula:{bgColor:"#212135",mainColor:"#be3c88",subColor:"#19b3b8",textColor:"#838686"},lil_dragon:{bgColor:"#ebe1ef",mainColor:"#8a5bd6",subColor:"#a28db8",textColor:"#212b43"},pastel:{bgColor:"#e0b2bd",mainColor:"#fbf4b6",subColor:"#b4e9ff",textColor:"#6d5c6f"},alduin:{bgColor:"#1c1c1c",mainColor:"#dfd7af",subColor:"#444444",textColor:"#f5f3ed"},paper:{bgColor:"#eeeeee",mainColor:"#444444",subColor:"#b2b2b2",textColor:"#444444"},fundamentals:{bgColor:"#727474",mainColor:"#7fa482",subColor:"#cac4be",textColor:"#131313"},drowning:{bgColor:"#191826",mainColor:"#4a6fb5",subColor:"#50688c",textColor:"#9393a7"},iceberg_dark:{bgColor:"#161821",mainColor:"#84a0c6",subColor:"#595e76",textColor:"#c6c8d1"},iceberg_light:{bgColor:"#e8e9ec",mainColor:"#2d539e",subColor:"#adb1c4",textColor:"#33374c"},onedark:{bgColor:"#2f343f",mainColor:"#61afef",subColor:"#eceff4",textColor:"#98c379"},darling:{bgColor:"#fec8cd",mainColor:"#ffffff",subColor:"#a30000",textColor:"#ffffff"},repose_dark:{bgColor:"#2f3338",mainColor:"#d6d2bc",subColor:"#8f8e84",textColor:"#d6d2bc"},repose_light:{bgColor:"#efead0",mainColor:"#5f605e",subColor:"#8f8e84",textColor:"#333538"},horizon:{bgColor:"#1c1e26",mainColor:"#c4a88a",subColor:"#db886f",textColor:"#bbbbbb"},rudy:{bgColor:"#1a2b3e",mainColor:"#af8f5c",subColor:"#3a506c",textColor:"#c9c8bf"},stealth:{bgColor:"#010203",mainColor:"#383e42",subColor:"#5e676e",textColor:"#383e42"},"80s_after_dark":{bgColor:"#1b1d36",mainColor:"#fca6d1",subColor:"#99d6ea",textColor:"#e1e7ec"},arch:{bgColor:"#0c0d11",mainColor:"#7ebab5",subColor:"#454864",textColor:"#f6f5f5"},rose_pine:{bgColor:"#1f1d27",mainColor:"#9ccfd8",subColor:"#c4a7e7",textColor:"#e0def4"},rose_pine_moon:{bgColor:"#2a273f",mainColor:"#9ccfd8",subColor:"#c4a7e7",textColor:"#e0def4"},rose_pine_dawn:{bgColor:"#fffaf3",mainColor:"#56949f",subColor:"#c4a7e7",textColor:"#286983"},copper:{bgColor:"#442f29",mainColor:"#b46a55",subColor:"#7ebab5",textColor:"#e7e0de"},grand_prix:{bgColor:"#36475c",mainColor:"#c0d036",subColor:"#5c6c80",textColor:"#c1c7d7"},peaches:{bgColor:"#e0d7c1",mainColor:"#dd7a5f",subColor:"#e7b28e",textColor:"#5f4c41"},bouquet:{bgColor:"#173f35",mainColor:"#eaa09c",subColor:"#408e7b",textColor:"#e9e0d2"},midnight:{bgColor:"#0b0e13",mainColor:"#60759f",subColor:"#394760",textColor:"#9fadc6"},blueberry_light:{bgColor:"#dae0f5",mainColor:"#506477",subColor:"#92a4be",textColor:"#678198"},blueberry_dark:{bgColor:"#212b42",mainColor:"#add7ff",subColor:"#5c7da5",textColor:"#91b4d5"},fledgling:{bgColor:"#3b363f",mainColor:"#fc6e83",subColor:"#8e5568",textColor:"#e6d5d3"},ez_mode:{bgColor:"#0068c6",mainColor:"#fa62d5",subColor:"#138bf7",textColor:"#ffffff"},vscode:{bgColor:"#1e1e1e",mainColor:"#007acc",subColor:"#4d4d4d",textColor:"#d4d4d4"},material:{bgColor:"#263238",mainColor:"#80cbc4",subColor:"#4c6772",textColor:"#e6edf3"},godspeed:{bgColor:"#eae4cf",mainColor:"#9abbcd",subColor:"#ada998",textColor:"#646669"},witch_girl:{bgColor:"#f3dbda",mainColor:"#56786a",subColor:"#ddb4a7",textColor:"#56786a"},terror_below:{bgColor:"#0b1e1a",mainColor:"#66ac92",subColor:"#015c53",textColor:"#dceae5"},sewing_tin:{bgColor:"#241963",mainColor:"#f2ce83",subColor:"#446ad5",textColor:"#ffffff"},soaring_skies:{bgColor:"#fff9f2",mainColor:"#55c6f0",subColor:"#1e107a",textColor:"#1d1e1e"},sewing_tin_light:{bgColor:"#ffffff",mainColor:"#2d2076",subColor:"#385eca",textColor:"#2d2076"},chaos_theory:{bgColor:"#141221",mainColor:"#fd77d7",subColor:"#676e8a",textColor:"#dde5ed"},hanok:{bgColor:"#d8d2c3",mainColor:"#513a2a",subColor:"#8b6f5c",textColor:"#393b3b"},comfy:{bgColor:"#4a5b6e",mainColor:"#f8cdc6",subColor:"#9ec1cc",textColor:"#f5efee"},tiramisu:{bgColor:"#cfc6b9",mainColor:"#c0976f",subColor:"#c0976f",textColor:"#7d5448"},diner:{bgColor:"#537997",mainColor:"#c3af5b",subColor:"#445c7f",textColor:"#dfdbc8"},modern_ink:{bgColor:"#ffffff",mainColor:"#ff360d",subColor:"#b7b7b7",textColor:"#000000"},dev:{bgColor:"#1b2028",mainColor:"#23a9d5",subColor:"#4b5975",textColor:"#ccccb5"},moonlight:{bgColor:"#191f28",mainColor:"#c69f68",subColor:"#4b5975",textColor:"#ccccb5"},pink_lemonade:{bgColor:"#f6d992",mainColor:"#f6a192",subColor:"#f6b092",textColor:"#fcfcf8"},creamsicle:{bgColor:"#ff9869",mainColor:"#fcfcf8",subColor:"#ff661f",textColor:"#fcfcf8"},beach:{bgColor:"#ffeead",mainColor:"#96ceb4",subColor:"#ffcc5c",textColor:"#5b7869"},desert_oasis:{bgColor:"#fff2d5",mainColor:"#d19d01",subColor:"#0061fe",textColor:"#332800"},frozen_llama:{bgColor:"#9bf2ea",mainColor:"#6d44a6",subColor:"#b690fd",textColor:"#ffffff"},ryujinscales:{bgColor:"#081426",mainColor:"#f17754",subColor:"#ffbc90",textColor:"#ffe4bc"},trackday:{bgColor:"#464d66",mainColor:"#e0513e",subColor:"#5c7eb9",textColor:"#cfcfcf"},fruit_chew:{bgColor:"#d6d3d6",mainColor:"#5c1e5f",subColor:"#b49cb5",textColor:"#282528"},evil_eye:{bgColor:"#0084c2",mainColor:"#f7f2ea",subColor:"#01589f",textColor:"#171718"},trance:{bgColor:"#00021b",mainColor:"#e51376",subColor:"#3c4c79",textColor:"#fff"},fire:{bgColor:"#0f0000",mainColor:"#b31313",subColor:"#683434",textColor:"#ffffff"},aurora:{bgColor:"#011926",mainColor:"#00e980",subColor:"#245c69",textColor:"#fff"},leather:{bgColor:"#a86948",mainColor:"#ffe4bc",subColor:"#81482b",textColor:"#ffe4bc"},fleuriste:{bgColor:"#c6b294",mainColor:"#405a52",subColor:"#64374d",textColor:"#091914"},dmg:{bgColor:"#dadbdc",mainColor:"#ae185e",subColor:"#3846b1",textColor:"#414141"},catppuccin:{bgColor:"#1e1e2e",mainColor:"#cba6f7",subColor:"#7f849c",textColor:"#cdd6f4"},snes:{bgColor:"#bfbec2",mainColor:"#553d94",subColor:"#9f8ad4",textColor:"#2e2e2e"},passion_fruit:{bgColor:"#7c2142",mainColor:"#f4a3b4",subColor:"#9994b8",textColor:"#ffffff"},blue_dolphin:{bgColor:"#003950",mainColor:"#ffcefb",subColor:"#00e4ff",textColor:"#82eaff"},mexican:{bgColor:"#f8ad34",mainColor:"#b12189",subColor:"#333",textColor:"#eee"},husqy:{bgColor:"#000000",mainColor:"#c58aff",subColor:"#972fff",textColor:"#ebd7ff"},peach_blossom:{bgColor:"#292929",mainColor:"#99b898",subColor:"#616161",textColor:"#fecea8"},dino:{bgColor:"#ffffff",mainColor:"#40d672",subColor:"#d5d5d5",textColor:"#1d221f"},tron_orange:{bgColor:"#0d1c1c",mainColor:"#f0e800",subColor:"#ff6600",textColor:"#ffffff"},hedge:{bgColor:"#415e31",mainColor:"#6a994e",subColor:"#ede5b4",textColor:"#f7f1d6"},modern_dolch_light:{bgColor:"#dbdbdb",mainColor:"#8fd1c3",subColor:"#acacac",textColor:"#454545"},iv_spade:{bgColor:"#0c0c0c",mainColor:"#b7976a",subColor:"#404040",textColor:"#d3c2c3"},iv_clover:{bgColor:"#a0a0a0",mainColor:"#573e40",subColor:"#353535",textColor:"#3b2d3b"},cheesecake:{bgColor:"#fdf0d5",mainColor:"#8e2949",subColor:"#d91c81",textColor:"#3a3335"},earthsong:{bgColor:"#292521",mainColor:"#509452",subColor:"#f5ae2d",textColor:"#e6c7a8"},purpleish:{bgColor:"#1e1e32",mainColor:"#7a52cc",subColor:"#3d3d66",textColor:"#7a52cc"},nord_light:{bgColor:"#eceff4",mainColor:"#8fbcbb",subColor:"#6a7791",textColor:"#8fbcbb"},slambook:{bgColor:"#FFFDDE",mainColor:"#13005A",subColor:"#1c82adc4",textColor:"#125d98"},breeze:{bgColor:"#e8d5c4",mainColor:"#7d67a9",subColor:"#3a98b9",textColor:"#1b4c5e"},cherry_blossom:{bgColor:"#323437",mainColor:"#d65ccc",subColor:"#787d82",textColor:"#d1d0c5"},everblush:{bgColor:"#141b1e",mainColor:"#8ccf7e",subColor:"#838887",textColor:"#dadada"},grape:{bgColor:"#2c003e",mainColor:"#ff8f00",subColor:"#651e56",textColor:"#fff"},rainbow_trail:{bgColor:"#f5f5f5",mainColor:"#363636",subColor:"#4f4f4f",textColor:"#1f1f1f"},tangerine:{bgColor:"#ffede0",mainColor:"#fe5503",subColor:"#ff9562",textColor:"#3d1705"},macroblank:{bgColor:"#b2d2c8",mainColor:"#c13117",subColor:"#717977",textColor:"#490909"},anti_hero:{bgColor:"#00002e",mainColor:"#ffadad",subColor:"#ff3d8b",textColor:"#f1deef"},incognito:{bgColor:"#0e0e0e",mainColor:"#ff9900",subColor:"#2f2f2f",textColor:"#c6c6c6"},discord:{bgColor:"#313338",mainColor:"#5a65ea",subColor:"#565861",textColor:"#dcdee3"},cy_red:{bgColor:"#6e2626",mainColor:"#e55050",subColor:"#ff6060",textColor:"#ffaaaa"},floret:{bgColor:"#00272c",mainColor:" #ffdd6d",subColor:"#779097",textColor:"#E5E5E5"},lilac_mist:{bgColor:"#fffbfe",mainColor:"#b94189",subColor:"#e094c2",textColor:"#5c2954"},terrazzo:{bgColor:"#f1e5da",mainColor:"#e0794e",subColor:"#688e8f",textColor:"#023e3b"},suisei:{bgColor:"#3b4a62",mainColor:"#bef0ff",subColor:"#fe9841",textColor:"#dbdeeb"},github:{bgColor:"#212830",mainColor:"#41ce5c",subColor:"#788386",textColor:"#ccdae6"},sunset:{bgColor:"#211e24",mainColor:"#f79777",subColor:"#5b578e",textColor:"#f4e0c9"}},Lo=Object.keys(De).sort().map(o=>({name:o,primary:De[o].mainColor,text:De[o].textColor,highlight:De[o].subColor,background:De[o].bgColor}));var za=Qe(jo()),Rr=Symbol(),er=class{constructor(){this.subscribers={}}static getInstance(){return this.instance===void 0&&(this.instance=new er),this.instance}dispatch(t,e){let r=this.subscribers[t];r!==void 0&&Object.keys(r).forEach(i=>r[i](e))}register(t,e){let r=this.getNextId();return this.subscribers[t]||(this.subscribers[t]={}),this.subscribers[t][r]=e,{unregister:()=>{this.subscribers[t]!==void 0&&(delete this.subscribers[t][r],Object.keys(this.subscribers[t]).length===0&&delete this.subscribers[t])}}}getNextId(){return er.nextId++}},St=er;St.nextId=0,St.instance=void 0;function Mt(o){return(t,e)=>{let r=Reflect.getMetadata(Rr,t)||[];r.push({key:e,event:o}),Reflect.defineMetadata(Rr,r,t)}}function Ot(o){return class extends o{constructor(...t){super(...t);this.$subscriptions=[];(Reflect.getMetadata(Rr,o.prototype)||[]).forEach(r=>{let i=this[r.key].bind(this);this.$subscriptions.push(St.getInstance().register(r.event,i))})}disconnectedCallback(){super.disconnectedCallback(),this.$subscriptions.forEach(t=>{t.unregister()})}}}var Lt=class extends Event{constructor(t){super("theme-change",{bubbles:!0,composed:!0});this.updatedColors=t}static updatedColor(t,e){return new Lt(new Map([[t,e]]))}static allReset(){let t=[];for(let e of pe)t.push([e,j.defaultConfig[e]]);return new Lt(new Map(t))}};var be={frequencyRing:"Frequency Ring",volumeRing:"Volume Ring",noteFill:"Note Fill",noteOctave:"Note Octave",noteOutline:"Note Outline",needle:"Needle",donationButton:"Donation Button",settingsButton:"Settings Button"};var bt=class{};bt.map=(t,e,r)=>(t-e[0])*(r[1]-r[0])/(e[1]-e[0])+r[0],bt.clamp=(t,e)=>Math.min(Math.max(t,e[0]),e[1]),bt.round=(t,e)=>Number(Math.round(Number(t+"e"+e))+"e-"+e);var Qt=class{static Instance(){return this._instance||(this._instance=new this)}static isHexCode(t){return t.match(/^#[0-9a-f]{6}/i)}static getPropertyName(t,e){let r={};return Object.keys(t).map(i=>r[i]=i),e(r)}static getStoredValueOrDefault(t){var e;return(e=localStorage.getItem(t))!=null?e:this.defaultConfig[t]}static set config(t){Object.keys(t).forEach(e=>{localStorage.setItem(e,t[e].toString())})}static get config(){let t={accidentalMode:this.accidentalMode,frequencyOfA:this.frequencyOfA,debugMode:"false",algorithm:this.algorithm};for(let e in pe)t[e]=this.getColor(e);for(let e in be)t[e]=this.getComponent(e).toString();return t}static reset(){Qt.accidentalMode=this.defaultConfig.accidentalMode,Qt.frequencyOfA=this.defaultConfig.frequencyOfA;for(let t of pe)Qt.setColor(t,this.defaultConfig[t]);Qt.algorithm=this.defaultConfig.algorithm;for(let t in be)Qt.setComponent(t,!0)}static get debugMode(){return this.getStoredValueOrDefault("debugMode")==="true"}static set debugMode(t){localStorage.setItem(this.getPropertyName(this.defaultConfig,e=>e.debugMode),t.toString())}static set accidentalMode(t){localStorage.setItem(this.getPropertyName(this.defaultConfig,e=>e.accidentalMode),t.toString()),St.getInstance().dispatch("config-change",new Event("config-change"))}static get accidentalMode(){return Number(this.getStoredValueOrDefault("accidentalMode"))}static set frequencyOfA(t){t=bt.clamp(t,[this.ALowerBoundFreq,this.AUpperBoundFreq]),localStorage.setItem(this.getPropertyName(this.defaultConfig,e=>e.frequencyOfA),t.toString()),St.getInstance().dispatch("config-change",new Event("config-change"))}static get frequencyOfA(){return Number(this.getStoredValueOrDefault("frequencyOfA"))}static setTheme(t){let e=new Map;pe.forEach(r=>{this.setColor(r,t[r]),e.set(r,t[r])}),St.getInstance().dispatch("theme-change",new Lt(e))}static setColor(t,e){this.isHexCode(e)&&(localStorage.setItem(this.getPropertyName(this.defaultConfig,r=>r[t]),e),St.getInstance().dispatch("theme-change",Lt.updatedColor(t,e)))}static getColor(t){return this.getStoredValueOrDefault(t)}static set algorithm(t){localStorage.setItem(this.getPropertyName(this.defaultConfig,e=>e.algorithm),t),St.getInstance().dispatch("config-change",new Event("config-change"))}static get algorithm(){return this.getStoredValueOrDefault("algorithm")}static setComponent(t,e){localStorage.setItem(this.getPropertyName(this.defaultConfig,r=>r[t]),e.toString()),St.getInstance().dispatch("config-change",new Event("config-change"))}static getComponent(t){return this.getStoredValueOrDefault(t)==="true"}},j=Qt;j.defaultConfig={accidentalMode:1,frequencyOfA:440,debugMode:"true",primary:"#FF7A00",highlight:"#FFFFFF",text:"#FFFFFF",background:"#000000",algorithm:"McLeod",frequencyRing:"true",volumeRing:"true",noteFill:"true",noteOctave:"true",noteOutline:"true",needle:"true",donationButton:"true",settingsButton:"true"},j.ALowerBoundFreq=415,j.AUpperBoundFreq=466;var Xt=class{static hexToRgb(t){let e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;t=t.replace(e,function(i,n,a,s){return n+n+a+a+s+s});let r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return r?{r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16)}:null}};var Pr={};mt(Pr,{default:()=>qt});var qt=X`
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
`;var qi=X`
    :root {
        --doc-height: 100%;
    }

    :host {
        // Necessary for using the theme on load
        --primary-color: ${Zt(j.defaultConfig.primary)};
        --background-color: ${Zt(j.defaultConfig.background)};
        --highlight-color: ${Zt(j.defaultConfig.highlight)};
        --text-color: ${Zt(j.defaultConfig.text)};
        --font-family: "Archivo Black", sans-serif;

        // Set some defaults
        background-color: rgb(var(--background-color));
        color: rgb(var(--text-color));
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
        color: rgb(var(--text-color));
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
`,jt=class extends J{constructor(){super(...arguments);this.showSettings=!1;this.showDonation=!1;this.refreshTheme=t=>{t.updatedColors.forEach((e,r)=>{let i=Xt.hexToRgb(e);this.style.setProperty("--"+r+"-color",`${i.r}, ${i.g}, ${i.b}`)})};this.refresh=()=>{this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.calculateDocumentHeight();let t=Xt.hexToRgb(j.getColor("primary")),e=Xt.hexToRgb(j.getColor("text")),r=Xt.hexToRgb(j.getColor("highlight")),i=Xt.hexToRgb(j.getColor("background"));this.style.setProperty("--primary-color",`${t.r}, ${t.g}, ${t.b}`),this.style.setProperty("--text-color",`${e.r}, ${e.g}, ${e.b}`),this.style.setProperty("--highlight-color",`${r.r}, ${r.g}, ${r.b}`),this.style.setProperty("--background-color",`${i.r}, ${i.g}, ${i.b}`)}calculateDocumentHeight(){let t=()=>{document.documentElement.style.setProperty("--doc-height",`${window.innerHeight}px`)};window.addEventListener("resize",t),t()}toggleSettings(){this.showDonation=!1,this.showSettings=!this.showSettings}renderSettings(){return this.showSettings?Y`
            <tn-settings @settings-close="${this.toggleSettings}"></tn-settings>`:K}toggleDonation(){this.showSettings=!1,this.showDonation=!this.showDonation}onDoubleClick(){this.showSettings||this.toggleSettings()}renderDonation(){return this.showDonation?Y`
            <tn-donation></tn-donation>`:K}renderButtonDonation(){return j.getComponent("donationButton")?Y`
                <button class="floating-button donation-button" @click="${this.toggleDonation}" aria-label="Donation"><i
                        class="${this.showDonation?"far fa-circle-xmark":"fa fa-coffee"}"></i></button>
        `:K}renderButtonSettings(){return j.getComponent("settingsButton")?Y`
                <button class="floating-button settings-button" @click="${this.toggleSettings}" aria-label="Settings"><i
                        class="${this.showSettings?"far fa-circle-xmark":"fa fa-gear"}"></i></button>
        `:K}render(){return Y`
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
        `}};jt.styles=[qi,ct,qt],L([nt()],jt.prototype,"showSettings",2),L([nt()],jt.prototype,"showDonation",2),L([Mt("theme-change")],jt.prototype,"refreshTheme",2),L([Mt("config-change")],jt.prototype,"refresh",2),jt=L([rt("tn-app"),Ot],jt);var Nr={};mt(Nr,{DonationComponent:()=>ze,DonationComponentStyles:()=>Uo});var Ir={};mt(Ir,{default:()=>Fr});var Fr=X`
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
`;var Uo=X`

    .donation-container{
        display:flex;
        flex-direction: column;
        height: 50vh;

        margin: 2em;
        padding: 4em;
        color: rgb(var(--text-color));

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
`,ze=class extends J{constructor(){super()}render(){return Y`
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
        `}};ze.styles=[Uo,qt,Fr,ct],ze=L([rt("tn-donation")],ze);var Dr={};mt(Dr,{PitchPipeComponent:()=>ge});var ji=X`
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
        color: rgb(var(--text-color));
    }
`,ge=class extends J{constructor(){super(...arguments);this._handlePlay=()=>{var t;new Audio(`./audio/pitch${(t=this.note)==null?void 0:t.index}.mp3`).play()}}render(){return Y`
                <div class="play-note-button-container" @click=${this._handlePlay}>
                    <button class="play-note-button" aria-label="Play Note"><i class="fa fa-circle-play"></i></button>
                </div>
        `}};ge.styles=[ji,qt,ct],L([nt()],ge.prototype,"note",2),ge=L([rt("tn-pitch-pipe-player")],ge);var Vr={};mt(Vr,{PitchPipeComponent:()=>we});var Ho={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Bo=o=>(...t)=>({_$litDirective$:o,values:t}),zr=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var Et=Bo(class extends zr{constructor(o){var t;if(super(o),o.type!==Ho.ATTRIBUTE||o.name!=="class"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(t=>o[t]).join(" ")+" "}update(o,[t]){var e,r;if(this.st===void 0){this.st=new Set,o.strings!==void 0&&(this.et=new Set(o.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in t)t[n]&&!((e=this.et)===null||e===void 0?void 0:e.has(n))&&this.st.add(n);return this.render(t)}let i=o.element.classList;this.st.forEach(n=>{n in t||(i.remove(n),this.st.delete(n))});for(let n in t){let a=!!t[n];a===this.st.has(n)||((r=this.et)===null||r===void 0?void 0:r.has(n))||(a?(i.add(n),this.st.add(n)):(i.remove(n),this.st.delete(n)))}return zt}});var ve=12,Ui=["C","C","D","D","E","F","F","G","G","A","A","B"],Hi=[1,3,6,8,10],Bi=["C","D","D","E","E","F","G","G","A","A","B","B"],Kt;(function(e){e[e.sharp=0]="sharp",e[e.flat=1]="flat"})(Kt||(Kt={}));var lt=class{get letter(){return this.lookupLetter()}get accidental(){return this.lookupAccidental()}constructor(t){this.index=bt.clamp(t,[0,127]),this.octave=Math.floor(t/ve)-1}equals(t){return this.index===t.index&&this.letter===t.letter&&this.accidental===t.accidental}lookupLetter(){return j.accidentalMode?Ui[this.index%ve]:Bi[this.index%ve]}lookupAccidental(){return Hi.includes(this.index%ve)?j.accidentalMode?"#":"b":""}},Lr=new lt(0),Vi=new lt(69),Vo=new lt(127),ye=class{static freqToNote(t){if(t<this.noteToPitch(Lr))return Lr;if(t>this.noteToPitch(Vo))return Vo;let e=Math.round(ve*Math.log2(t/this.noteToPitch(Lr)));if(isNaN(e))throw new Error("calculated frequency produced NaN");return new lt(e)}static noteToPitch(t){let e=t.index-Vi.index,r=Cr(2,1/ve);return j.frequencyOfA*Cr(r,e)}};var Br={};mt(Br,{CarouselComponent:()=>wt});var jr={};mt(jr,{default:()=>qr});var qr=X`
    .keen-slider:not([data-keen-slider-disabled]){-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;align-content:flex-start;display:flex;overflow:hidden;position:relative;touch-action:pan-y;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-khtml-user-select:none;width:100%}.keen-slider:not([data-keen-slider-disabled]) .keen-slider__slide{min-height:100%;overflow:hidden;position:relative;width:100%}.keen-slider:not([data-keen-slider-disabled])[data-keen-slider-reverse]{flex-direction:row-reverse}.keen-slider:not([data-keen-slider-disabled])[data-keen-slider-v]{flex-wrap:wrap}
`;var Ce=function(){return Ce=Object.assign||function(o){for(var t,e=1,r=arguments.length;e<r;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(o[i]=t[i]);return o},Ce.apply(this,arguments)};function Yo(o,t,e){if(e||arguments.length===2)for(var r,i=0,n=t.length;i<n;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return o.concat(r||Array.prototype.slice.call(t))}function Wo(o){return Array.prototype.slice.call(o)}function Go(o,t){var e=Math.floor(o);return e===t||e+1===t?o:t}function Zo(){return Date.now()}function Ur(o,t,e){if(t="data-keen-slider-"+t,e===null)return o.removeAttribute(t);o.setAttribute(t,e||"")}function rr(o,t){return t=t||document,typeof o=="function"&&(o=o(t)),Array.isArray(o)?o:typeof o=="string"?Wo(t.querySelectorAll(o)):o instanceof HTMLElement?[o]:o instanceof NodeList?Wo(o):[]}function Le(o){o.raw&&(o=o.raw),o.cancelable&&!o.defaultPrevented&&o.preventDefault()}function qe(o){o.raw&&(o=o.raw),o.stopPropagation&&o.stopPropagation()}function Jo(){var o=[];return{add:function(t,e,r,i){t.addListener?t.addListener(r):t.addEventListener(e,r,i),o.push([t,e,r,i])},input:function(t,e,r,i){this.add(t,e,function(n){return function(a){a.nativeEvent&&(a=a.nativeEvent);var s=a.changedTouches||[],c=a.targetTouches||[],l=a.detail&&a.detail.x?a.detail:null;return n({id:l?l.identifier?l.identifier:"i":c[0]?c[0]?c[0].identifier:"e":"d",idChanged:l?l.identifier?l.identifier:"i":s[0]?s[0]?s[0].identifier:"e":"d",raw:a,x:l&&l.x?l.x:c[0]?c[0].screenX:l?l.x:a.pageX,y:l&&l.y?l.y:c[0]?c[0].screenY:l?l.y:a.pageY})}}(r),i)},purge:function(){o.forEach(function(t){t[0].removeListener?t[0].removeListener(t[2]):t[0].removeEventListener(t[1],t[2],t[3])}),o=[]}}}function Hr(o,t,e){return Math.min(Math.max(o,t),e)}function $t(o){return(o>0?1:0)-(o<0?1:0)||+o}function Qo(o){var t=o.getBoundingClientRect();return{height:Go(t.height,o.offsetHeight),width:Go(t.width,o.offsetWidth)}}function yt(o,t,e,r){var i=o&&o[t];return i==null?e:r&&typeof i=="function"?i():i}function _t(o){return Math.round(1e6*o)/1e6}function Yi(o){var t,e,r,i,n,a;function s(f){a||(a=f),c(!0);var w=f-a;w>r&&(w=r);var y=i[e];if(y[3]<w)return e++,s(f);var x=y[2],k=y[4],h=y[0],g=y[1]*(0,y[5])(k===0?1:(w-x)/k);if(g&&o.track.to(h+g),w<r)return b();a=null,c(!1),l(null),o.emit("animationEnded")}function c(f){t.active=f}function l(f){t.targetIdx=f}function b(){var f;f=s,n=window.requestAnimationFrame(f)}function m(){var f;f=n,window.cancelAnimationFrame(f),c(!1),l(null),a&&o.emit("animationStopped"),a=null}return t={active:!1,start:function(f){if(m(),o.track.details){var w=0,y=o.track.details.position;e=0,r=0,i=f.map(function(x){var k,h=Number(y),g=(k=x.earlyExit)!==null&&k!==void 0?k:x.duration,v=x.easing,A=x.distance*v(g/x.duration)||0;y+=A;var S=r;return r+=g,w+=A,[h,x.distance,S,r,x.duration,v]}),l(o.track.distToIdx(w)),b(),o.emit("animationStarted")}},stop:m,targetIdx:null}}function Wi(o){var t,e,r,i,n,a,s,c,l,b,m,f,w,y,x=1/0,k=[],h=null,g=0;function v(T){tt(g+T)}function A(T){var R=S(g+T).abs;return M(R)?R:null}function S(T){var R=Math.floor(Math.abs(_t(T/e))),C=_t((T%e+e)%e);C===e&&(C=0);var O=$t(T),F=s.indexOf(Yo([],s,!0).reduce(function(V,G){return Math.abs(G-C)<Math.abs(V-C)?G:V})),q=F;return O<0&&R++,F===a&&(q=0,R+=O>0?1:-1),{abs:q+R*a*O,origin:F,rel:q}}function N(T,R,C){var O;if(R||!W())return B(T,C);if(!M(T))return null;var F=S(C??g),q=F.abs,V=T-F.rel,G=q+V;O=B(G);var E=B(G-a*$t(V));return(E!==null&&Math.abs(E)<Math.abs(O)||O===null)&&(O=E),_t(O)}function B(T,R){if(R==null&&(R=_t(g)),!M(T)||T===null)return null;T=Math.round(T);var C=S(R),O=C.abs,F=C.rel,q=C.origin,V=ot(T),G=(R%e+e)%e,E=s[q],it=Math.floor((T-(O-F))/a)*e;return _t(E-G-E+s[V]+it+(q===a?e:0))}function M(T){return H(T)===T}function H(T){return Hr(T,l,b)}function W(){return i.loop}function ot(T){return(T%a+a)%a}function tt(T){var R;R=T-g,k.push({distance:R,timestamp:Zo()}),k.length>6&&(k=k.slice(-6)),g=_t(T);var C=z().abs;if(C!==h){var O=h!==null;h=C,O&&o.emit("slideChanged")}}function z(T){var R=T?null:function(){if(a){var C=W(),O=C?(g%e+e)%e:g,F=(C?g%e:g)-n[0][2],q=0-(F<0&&C?e-Math.abs(F):F),V=0,G=S(g),E=G.abs,it=G.rel,xt=n[it][2],et=n.map(function(ht,Tt){var at=q+V;(at<0-ht[0]||at>1)&&(at+=(Math.abs(at)>e-1&&C?e:0)*$t(-at));var Rt=Tt-it,dt=$t(Rt),gt=Rt+E;C&&(dt===-1&&at>xt&&(gt+=a),dt===1&&at<xt&&(gt-=a),m!==null&&gt<m&&(at+=e),f!==null&&gt>f&&(at-=e));var vt=at+ht[0]+ht[1],Dt=Math.max(at>=0&&vt<=1?1:vt<0||at>1?0:at<0?Math.min(1,(ht[0]+at)/ht[0]):(1-at)/ht[0],0);return V+=ht[0]+ht[1],{abs:gt,distance:i.rtl?-1*at+1-ht[0]:at,portion:Dt,size:ht[0]}});return E=H(E),it=ot(E),{abs:H(E),length:r,max:y,maxIdx:b,min:w,minIdx:l,position:g,progress:C?O/e:g/r,rel:it,slides:et,slidesLength:e}}}();return t.details=R,o.emit("detailsChanged"),R}return t={absToRel:ot,add:v,details:null,distToIdx:A,idxToDist:N,init:function(T){if(function(){if(i=o.options,n=(i.trackConfig||[]).map(function(F){return[yt(F,"size",1),yt(F,"spacing",0),yt(F,"origin",0)]}),a=n.length){e=_t(n.reduce(function(F,q){return F+q[0]+q[1]},0));var C,O=a-1;r=_t(e+n[0][2]-n[O][0]-n[O][2]-n[O][1]),s=n.reduce(function(F,q){if(!F)return[0];var V=n[F.length-1],G=F[F.length-1]+(V[0]+V[2])+V[1];return G-=q[2],F[F.length-1]>G&&(G=F[F.length-1]),G=_t(G),F.push(G),(!C||C<G)&&(c=F.length-1),C=G,F},null),r===0&&(c=0),s.push(_t(e))}}(),!a)return z(!0);var R;(function(){var C=o.options.range,O=o.options.loop;m=l=O?yt(O,"min",-1/0):0,f=b=O?yt(O,"max",x):c;var F=yt(C,"min",null),q=yt(C,"max",null);F!==null&&(l=F),q!==null&&(b=q),w=l===-1/0?l:o.track.idxToDist(l||0,!0,0),y=b===x?b:N(b,!0,0),q===null&&(f=b),yt(C,"align",!1)&&b!==x&&n[ot(b)][2]===0&&(y-=1-n[ot(b)][0],b=A(y-g)),w=_t(w),y=_t(y)})(),R=T,Number(R)===R?v(B(H(T))):z()},to:tt,velocity:function(){var T=Zo(),R=k.reduce(function(C,O){var F=O.distance,q=O.timestamp;return T-q>200||($t(F)!==$t(C.distance)&&C.distance&&(C={distance:0,lastTimestamp:0,time:0}),C.time&&(C.distance+=F),C.lastTimestamp&&(C.time+=q-C.lastTimestamp),C.lastTimestamp=q),C},{distance:0,lastTimestamp:0,time:0});return R.distance/R.time||0}}}function Gi(o){var t,e,r,i,n,a,s,c;function l(h){return 2*h}function b(h){return Hr(h,s,c)}function m(h){return 1-Math.pow(1-h,3)}function f(){return r?o.track.velocity():0}function w(){k();var h=o.options.mode==="free-snap",g=o.track,v=f();i=$t(v);var A=o.track.details,S=[];if(v||!h){var N=y(v),B=N.dist,M=N.dur;if(M=l(M),B*=i,h){var H=g.idxToDist(g.distToIdx(B),!0);H&&(B=H)}S.push({distance:B,duration:M,easing:m});var W=A.position,ot=W+B;if(ot<n||ot>a){var tt=ot<n?n-W:a-W,z=0,T=v;if($t(tt)===i){var R=Math.min(Math.abs(tt)/Math.abs(B),1),C=function(q){return 1-Math.pow(1-q,1/3)}(R)*M;S[0].earlyExit=C,T=v*(1-R)}else S[0].earlyExit=0,z+=tt;var O=y(T,100),F=O.dist*i;o.options.rubberband&&(S.push({distance:F,duration:l(O.dur),easing:m}),S.push({distance:-F+z,duration:500,easing:m}))}o.animator.start(S)}else o.moveToIdx(b(A.abs),!0,{duration:500,easing:function(q){return 1+--q*q*q*q*q}})}function y(h,g){g===void 0&&(g=1e3);var v=147e-9+(h=Math.abs(h))/g;return{dist:Math.pow(h,2)/v,dur:h/v}}function x(){var h=o.track.details;h&&(n=h.min,a=h.max,s=h.minIdx,c=h.maxIdx)}function k(){o.animator.stop()}o.on("updated",x),o.on("optionsChanged",x),o.on("created",x),o.on("dragStarted",function(){r=!1,k(),t=e=o.track.details.abs}),o.on("dragChecked",function(){r=!0}),o.on("dragEnded",function(){var h=o.options.mode;h==="snap"&&function(){var g=o.track,v=o.track.details,A=v.position,S=$t(f());(A>a||A<n)&&(S=0);var N=t+S;v.slides[g.absToRel(N)].portion===0&&(N-=S),t!==e&&(N=e),$t(g.idxToDist(N,!0))!==S&&(N+=S),N=b(N);var B=g.idxToDist(N,!0);o.animator.start([{distance:B,duration:500,easing:function(M){return 1+--M*M*M*M*M}}])}(),h!=="free"&&h!=="free-snap"||w()}),o.on("dragged",function(){e=o.track.details.abs})}function Zi(o){var t,e,r,i,n,a,s,c,l,b,m,f,w,y,x,k,h,g,v=Jo();function A(z){if(a&&c===z.id){var T=M(z);if(l){if(!B(z))return N(z);b=T,l=!1,o.emit("dragChecked")}if(k)return b=T;Le(z);var R=function(O){if(h===-1/0&&g===1/0)return O;var F=o.track.details,q=F.length,V=F.position,G=Hr(O,h-V,g-V);if(q===0)return 0;if(!o.options.rubberband)return G;if(V<=g&&V>=h||V<h&&e>0||V>g&&e<0)return O;var E=(V<h?V-h:V-g)/q,it=i*q,xt=Math.abs(E*it),et=Math.max(0,1-xt/n*2);return et*et*O}(s(b-T)/i*r);e=$t(R);var C=o.track.details.position;(C>h&&C<g||C===h&&e>0||C===g&&e<0)&&qe(z),m+=R,!f&&Math.abs(m*i)>5&&(f=!0),o.track.add(R),b=T,o.emit("dragged")}}function S(z){!a&&o.track.details&&o.track.details.length&&(m=0,a=!0,f=!1,l=!0,c=z.id,B(z),b=M(z),o.emit("dragStarted"))}function N(z){a&&c===z.idChanged&&(a=!1,o.emit("dragEnded"))}function B(z){var T=H(),R=T?z.y:z.x,C=T?z.x:z.y,O=w!==void 0&&y!==void 0&&Math.abs(y-C)<=Math.abs(w-R);return w=R,y=C,O}function M(z){return H()?z.y:z.x}function H(){return o.options.vertical}function W(){i=o.size,n=H()?window.innerHeight:window.innerWidth;var z=o.track.details;z&&(h=z.min,g=z.max)}function ot(z){f&&(qe(z),Le(z))}function tt(){if(v.purge(),o.options.drag&&!o.options.disabled){var z;z=o.options.dragSpeed||1,s=typeof z=="function"?z:function(R){return R*z},r=o.options.rtl?-1:1,W(),t=o.container,function(){var R="data-keen-slider-clickable";rr("[".concat(R,"]:not([").concat(R,"=false])"),t).map(function(C){v.add(C,"dragstart",qe),v.add(C,"mousedown",qe),v.add(C,"touchstart",qe)})}(),v.add(t,"dragstart",function(R){Le(R)}),v.add(t,"click",ot,{capture:!0}),v.input(t,"ksDragStart",S),v.input(t,"ksDrag",A),v.input(t,"ksDragEnd",N),v.input(t,"mousedown",S),v.input(t,"mousemove",A),v.input(t,"mouseleave",N),v.input(t,"mouseup",N),v.input(t,"touchstart",S,{passive:!0}),v.input(t,"touchmove",A,{passive:!1}),v.input(t,"touchend",N),v.input(t,"touchcancel",N),v.add(window,"wheel",function(R){a&&Le(R)});var T="data-keen-slider-scrollable";rr("[".concat(T,"]:not([").concat(T,"=false])"),o.container).map(function(R){return function(C){var O;v.input(C,"touchstart",function(F){O=M(F),k=!0,x=!0},{passive:!0}),v.input(C,"touchmove",function(F){var q=H(),V=q?C.scrollHeight-C.clientHeight:C.scrollWidth-C.clientWidth,G=O-M(F),E=q?C.scrollTop:C.scrollLeft,it=q&&C.style.overflowY==="scroll"||!q&&C.style.overflowX==="scroll";if(O=M(F),(G<0&&E>0||G>0&&E<V)&&x&&it)return k=!0;x=!1,Le(F),k=!1}),v.input(C,"touchend",function(){k=!1})}(R)})}}o.on("updated",W),o.on("optionsChanged",tt),o.on("created",tt),o.on("destroyed",v.purge)}function Ji(o){var t,e,r=null;function i(w,y,x){o.animator.active?a(w,y,x):requestAnimationFrame(function(){return a(w,y,x)})}function n(){i(!1,!1,e)}function a(w,y,x){var k=0,h=o.size,g=o.track.details;if(g&&t){var v=g.slides;t.forEach(function(A,S){if(w)!r&&y&&c(A,null,x),l(A,null,x);else{if(!v[S])return;var N=v[S].size*h;!r&&y&&c(A,N,x),l(A,v[S].distance*h-k,x),k+=N}})}}function s(w){return o.options.renderMode==="performance"?Math.round(w):w}function c(w,y,x){var k=x?"height":"width";y!==null&&(y=s(y)+"px"),w.style["min-"+k]=y,w.style["max-"+k]=y}function l(w,y,x){if(y!==null){y=s(y);var k=x?y:0;y="translate3d(".concat(x?0:y,"px, ").concat(k,"px, 0)")}w.style.transform=y,w.style["-webkit-transform"]=y}function b(){t&&(a(!0,!0,e),t=null),o.on("detailsChanged",n,!0)}function m(){i(!1,!0,e)}function f(){b(),e=o.options.vertical,o.options.disabled||o.options.renderMode==="custom"||(r=yt(o.options.slides,"perView",null)==="auto",o.on("detailsChanged",n),(t=o.slides).length&&m())}o.on("created",f),o.on("optionsChanged",f),o.on("beforeOptionsChanged",function(){b()}),o.on("updated",m),o.on("destroyed",b)}function Qi(o,t){return function(e){var r,i,n,a,s,c,l=Jo();function b(M){var H;Ur(e.container,"reverse",(H=e.container,window.getComputedStyle(H,null).getPropertyValue("direction")!=="rtl"||M?null:"")),Ur(e.container,"v",e.options.vertical&&!M?"":null),Ur(e.container,"disabled",e.options.disabled&&!M?"":null)}function m(){f()&&h()}function f(){var M=null;if(a.forEach(function(W){W.matches&&(M=W.__media)}),M===r)return!1;r||e.emit("beforeOptionsChanged"),r=M;var H=M?n.breakpoints[M]:n;return e.options=Ce(Ce({},n),H),b(),N(),B(),v(),!0}function w(M){var H=Qo(M);return(e.options.vertical?H.height:H.width)/e.size||1}function y(){return e.options.trackConfig.length}function x(M){for(var H in r=!1,n=Ce(Ce({},t),M),l.purge(),i=e.size,a=[],n.breakpoints||[]){var W=window.matchMedia(H);W.__media=H,a.push(W),l.add(W,"change",m)}l.add(window,"orientationchange",S),l.add(window,"resize",A),f()}function k(M){e.animator.stop();var H=e.track.details;e.track.init(M??(H?H.abs:0))}function h(M){k(M),e.emit("optionsChanged")}function g(M,H){if(M)return x(M),void h(H);N(),B();var W=y();v(),y()!==W?h(H):k(H),e.emit("updated")}function v(){var M=e.options.slides;if(typeof M=="function")return e.options.trackConfig=M(e.size,e.slides);for(var H=e.slides,W=H.length,ot=typeof M=="number"?M:yt(M,"number",W,!0),tt=[],z=yt(M,"perView",1,!0),T=yt(M,"spacing",0,!0)/e.size||0,R=z==="auto"?T:T/z,C=yt(M,"origin","auto"),O=0,F=0;F<ot;F++){var q=z==="auto"?w(H[F]):1/z-T+R,V=C==="center"?.5-q/2:C==="auto"?0:C;tt.push({origin:V,size:q,spacing:T}),O+=q}if(O+=T*(ot-1),C==="auto"&&!e.options.loop&&z!==1){var G=0;tt.map(function(E){var it=O-G;return G+=E.size+T,it>=1||(E.origin=1-it-(O>1?0:1-O)),E})}e.options.trackConfig=tt}function A(){N();var M=e.size;e.options.disabled||M===i||(i=M,g())}function S(){A(),setTimeout(A,500),setTimeout(A,2e3)}function N(){var M=Qo(e.container);e.size=(e.options.vertical?M.height:M.width)||1}function B(){e.slides=rr(e.options.selector,e.container)}e.container=(c=rr(o,s||document)).length?c[0]:null,e.destroy=function(){l.purge(),e.emit("destroyed"),b(!0)},e.prev=function(){e.moveToIdx(e.track.details.abs-1,!0)},e.next=function(){e.moveToIdx(e.track.details.abs+1,!0)},e.update=g,x(e.options)}}var Xo=function(o,t,e){try{return function(r,i){var n,a={};return n={emit:function(s){a[s]&&a[s].forEach(function(l){l(n)});var c=n.options&&n.options[s];c&&c(n)},moveToIdx:function(s,c,l){var b=n.track.idxToDist(s,c);if(b){var m=n.options.defaultAnimation;n.animator.start([{distance:b,duration:yt(l||m,"duration",500),easing:yt(l||m,"easing",function(f){return 1+--f*f*f*f*f})}])}},on:function(s,c,l){l===void 0&&(l=!1),a[s]||(a[s]=[]);var b=a[s].indexOf(c);b>-1?l&&delete a[s][b]:l||a[s].push(c)},options:r},function(){if(n.track=Wi(n),n.animator=Yi(n),i)for(var s=0,c=i;s<c.length;s++)(0,c[s])(n);n.track.init(n.options.initial||0),n.emit("created")}(),n}(t,Yo([Qi(o,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),Ji,Zi,Gi],e||[],!0))}catch(r){console.error(r)}};var Xi=X`
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
`,wt=class extends J{constructor(){super(...arguments);this.slider=null;this.sliderWrapper=null;this._trackDetails=null}firstUpdated(){this.sliderWrapper=this.shadowRoot.getElementById("slider"),this.slider=new Xo(this.sliderWrapper,{loop:!0})}disconnectedCallback(){this.slider.destroy()}handleSlotchange(t){var r,i;let e=t.target.assignedElements({flatten:!0});e.forEach(n=>{n.className="keen-slider__slide",this.sliderWrapper.appendChild(n)}),this.slider.update(),this._trackDetails=(i=(r=this.slider)==null?void 0:r.track)==null?void 0:i.details,this.slider.on("slideChanged",()=>{var n,a;e.forEach((s,c)=>{var l,b,m;s.setAttribute(wt.slideShownAttribute,(((m=(b=(l=this.slider)==null?void 0:l.track)==null?void 0:b.details)==null?void 0:m.rel)===c).toString())}),this._trackDetails=(a=(n=this.slider)==null?void 0:n.track)==null?void 0:a.details})}render(){var t;return Y`
            <div id="slider" class="keen-slider">
               <slot @slotchange=${this.handleSlotchange}></slot>
            </div>
            <div class="track-container">
                <div>
                    ${(t=this._trackDetails)==null?void 0:t.slides.map((e,r)=>Y`<div class="track-ball ${this._trackDetails.rel===r?"active":""}"></div>`)}
                </div>
            </div>
        `}};wt.styles=[Xi,ct,qr],wt.slideShownAttribute="carousel-slide-shown",L([po()],wt.prototype,"_trackDetails",2),wt=L([rt("tn-carousel")],wt);var Ki=X`
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
    .fill-text-stroke-background {
        stroke: rgb(var(--background-color));
        fill: rgb(var(--text-color));
    }
    .fill-background-stroke-primary {
        stroke: rgb(var(--primary-color));
        fill: rgb(var(--background-color));
    }
    .fill-background-stroke-text {
        stroke: rgb(var(--text-color));
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
        font-size: 6em;
    }
`,we=class extends J{constructor(){super(...arguments);this._pipeRotation=0;this._pipeRotationVelocity=0;this._pipeRotationOffset=30;this._isUserInteracting=!0;this._shouldUpdatePhysics=!1;this.isShown=!1;this._notes=[new lt(48),new lt(49),new lt(50),new lt(51),new lt(52),new lt(53),new lt(54),new lt(55),new lt(56),new lt(57),new lt(58),new lt(59)];this._currentNote=this._notes[0];this.simulate=()=>{if(!this._isUserInteracting&&this._shouldUpdatePhysics&&this.isShown)if(this._shouldUpdatePhysics=!1,this.pipeRotationVelocity<.1&&this.pipeRotationVelocity>-.1){this.pipeRotationVelocity=0;let t=this.pipeRotation-Math.round(this.pipeRotation/30)*30;this.rotateToAngle(t)}else{let t=this.pipeRotationVelocity>0?-.2:.2;this.pipeRotationVelocity+=t,this.pipeRotation+=this.pipeRotationVelocity}requestAnimationFrame(this.simulate)};this._previousTouch=null}set pipeRotation(t){let e=this.pipeRotation;this._pipeRotation=t%360,this.pipeRotationVelocity=this.pipeRotation-e,this._currentNote=this._getCurrentNote(),this.requestUpdate("pipeRotation",e)}get pipeRotation(){return this._pipeRotation}set pipeRotationVelocity(t){this._pipeRotation!=t&&(this._shouldUpdatePhysics=!0),this._pipeRotationVelocity=t}get pipeRotationVelocity(){return this._pipeRotationVelocity}connectedCallback(){super.connectedCallback(),requestAnimationFrame(this.simulate)}rotateToAngle(t){let e=t>0?-1:1,i=Math.sqrt(2*.2*Math.abs(t));this.pipeRotationVelocity=i*e}_handleMouseMove(t){if(t.buttons>0){this._isUserInteracting=!0;let e=t.pageX>window.innerWidth/2;this._handleRotationStart(t.movementY,e)}}_handleMouseUp(){this._isUserInteracting=!1}_handleTouchMove(t){this._isUserInteracting=!0;let e=t.touches[0];if(this._previousTouch){let r=e.pageX>window.innerWidth/2;this._handleRotationStart(e.pageY-this._previousTouch.pageY,r)}this._previousTouch=e}_handleTouchEnd(){this._previousTouch=null,this._isUserInteracting=!1}_handleRotationStart(t,e=!0){e?this.pipeRotation+=t/4:this.pipeRotation-=t/4}_getCurrentNote(){let t=this.pipeRotation<0?this.pipeRotation:this.pipeRotation-360,e=bt.round(Math.abs(t)/30,0)%12;return this._notes[e]}_renderNotes(){return ue`
            ${this._notes.map((t,e)=>{let r=this.pipeRotation+30*e,i={"gear-note":!0,"center-text":!0,"gear-note-selected":this._currentNote.equals(t),"fill-text-stroke-background":this._currentNote.equals(t),"fill-background-stroke-primary":!this._currentNote.equals(t)},n={"gear-note-accidental":!0,"center-text":!0,"gear-note-accidental-selected":this._currentNote.equals(t),"fill-primary-stroke-background":!this._currentNote.equals(t),"fill-background-stroke-text":this._currentNote.equals(t)};return ue`
                    <text @click=${()=>this.rotateToAngle(r)}
                        class="${Et(i)}" x="0%" y="-33%"
                        transform="rotate(${r})">
                        ${t.letter}
                    </text>
                    <text class="${Et(n)}" x="4%" y="-37%"
                        transform="rotate(${r})">
                        ${t.accidental}
                    </text>
                `})}
        `}render(){return Y`

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
        `}};we.styles=[ct,Ki],L([nt({attribute:wt.slideShownAttribute})],we.prototype,"isShown",2),we=L([rt("tn-pitch-pipe")],we);var Wr={};mt(Wr,{AppearanceSettingsComponent:()=>xe,AppearanceSettingsComponentStyles:()=>Ko});var Yr={};mt(Yr,{SettingsComponent:()=>je,SettingsComponentStyles:()=>Ft});var Ft=X`
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
        color: rgb(var(--text-color));
        align-self: stretch;
        border-radius: 1em;
        font-family: var(--font-family);
    }

    select {
        border: none;
        background: rgb(var(--background-color));
        color: rgb(var(--text-color));
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
        color: rgb(var(--text-color));
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
        color: rgb(var(--text-color));
        text-align: center;
        justify-content: space-between;
    }
`,je=class extends J{constructor(){super();this.openedDetails=null}handleToggle(t){this.openedDetails&&!this.openedDetails.isSameNode(t.detailsElement)&&this.openedDetails.removeAttribute("open"),this.openedDetails=t.detailsElement}handleClose(t){this.dispatchEvent(new CustomEvent("settings-close",t))}handleResetSettings(){j.reset(),this.dispatchEvent(Lt.allReset())}render(){return Y`
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
        `}};je.styles=[Ft,ct,qt],je=L([rt("tn-settings")],je);var Ko=X`
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
`,xe=class extends J{constructor(){super();this.settingsButtonHelperText="To get to this modal again without the settings button, double tap the screen.";this.configUpdated=()=>{this.requestUpdate()}}updateComponent(t,e){let r=t.target.checked;j.setComponent(e,r)}render(){return Y`
            <tn-accordion>
                <div slot="header">Appearance</div>
                <div slot="content">
                    ${Object.keys(be).map(t=>Y`
                        <div class="row">
                            <label for="${t}" class="switch">
                                <input id="${t}"
                                       type="checkbox"
                                       .checked="${j.getComponent(t)}"
                                       @click=${e=>this.updateComponent(e,t)}>
                                <span class="slider round"></span>
                            </label>
                            <span class="nowrap">${be[t]}</span>
                            <span class="helper-text">
                                ${t==="settingsButton"?this.settingsButtonHelperText:K}
                            </span>
                        </div>
                        `)}
                </div>
            </tn-accordion>
        `}};xe.styles=[Ft,Ko,ct],L([Mt("config-change")],xe.prototype,"configUpdated",2),xe=L([rt("tn-appearance-settings"),Ot],xe);var Kr={};mt(Kr,{ExperimentalSettingsComponent:()=>Ae});var ri=Qe(ei()),_e=class{_inputLength;_fft;_bufferSupplier;_paddedInputBuffer;_transformBuffer;_inverseBuffer;static forFloat32Array(t){return new _e(t,e=>new Float32Array(e))}static forFloat64Array(t){return new _e(t,e=>new Float64Array(e))}static forNumberArray(t){return new _e(t,e=>Array(e))}constructor(t,e){if(t<1)throw new Error("Input length must be at least one");this._inputLength=t,this._fft=new ri.default(rn(2*t)),this._bufferSupplier=e,this._paddedInputBuffer=this._bufferSupplier(this._fft.size),this._transformBuffer=this._bufferSupplier(2*this._fft.size),this._inverseBuffer=this._bufferSupplier(2*this._fft.size)}get inputLength(){return this._inputLength}autocorrelate(t,e=this._bufferSupplier(t.length)){if(t.length!==this._inputLength)throw new Error(`Input must have length ${this._inputLength} but had length ${t.length}`);for(let i=0;i<t.length;i++)this._paddedInputBuffer[i]=t[i];for(let i=t.length;i<this._paddedInputBuffer.length;i++)this._paddedInputBuffer[i]=0;this._fft.realTransform(this._transformBuffer,this._paddedInputBuffer),this._fft.completeSpectrum(this._transformBuffer);let r=this._transformBuffer;for(let i=0;i<r.length;i+=2)r[i]=r[i]*r[i]+r[i+1]*r[i+1],r[i+1]=0;this._fft.inverseTransform(this._inverseBuffer,this._transformBuffer);for(let i=0;i<t.length;i++)e[i]=this._inverseBuffer[2*i];return e}};function tn(o){let t=[],e=!1,r=-1/0,i=-1;for(let n=1;n<o.length-1;n++)o[n-1]<=0&&o[n]>0?(e=!0,i=n,r=o[n]):o[n-1]>0&&o[n]<=0?(e=!1,i!==-1&&t.push(i)):e&&o[n]>r&&(r=o[n],i=n);return t}function en(o,t){let[e,r,i]=[o-1,o,o+1],[n,a,s]=[t[e],t[r],t[i]],c=n/2-a+s/2,l=-(n/2)*(r+i)+a*(e+i)-s/2*(e+r),b=n*r*i/2-a*e*i+s*e*r/2,m=-l/(2*c),f=c*m*m+l*m+b;return[m,f]}var te=class{_autocorrelator;_nsdfBuffer;_clarityThreshold=.9;static forFloat32Array(t){return new te(t,e=>new Float32Array(e))}static forFloat64Array(t){return new te(t,e=>new Float64Array(e))}static forNumberArray(t){return new te(t,e=>Array(e))}constructor(t,e){this._autocorrelator=new _e(t,e),this._nsdfBuffer=e(t)}get inputLength(){return this._autocorrelator.inputLength}findPitch(t,e){this._nsdf(t);let r=tn(this._nsdfBuffer);if(r.length===0)return[0,0];let i=Math.max(...r.map(c=>this._nsdfBuffer[c])),n=r.find(c=>this._nsdfBuffer[c]>=this._clarityThreshold*i),[a,s]=en(n,this._nsdfBuffer);return[e/a,Math.min(s,1)]}_nsdf(t){this._autocorrelator.autocorrelate(t,this._nsdfBuffer);let e=2*this._nsdfBuffer[0],r;for(r=0;r<this._nsdfBuffer.length&&e>0;r++)this._nsdfBuffer[r]=2*this._nsdfBuffer[r]/e,e-=t[r]**2+t[t.length-r-1]**2;for(;r<this._nsdfBuffer.length;r++)this._nsdfBuffer[r]=0}};function rn(o){return o--,o|=o>>1,o|=o>>2,o|=o>>4,o|=o>>8,o|=o>>16,o++,o}var ke=Qe(bi()),gi=["McLeod","YIN","AMDF","Dynamic Wavelet"],Gr=class{constructor(){this.pitch=-1;this.volume=-1;this.clarity=-1}},Zr=class{constructor(t){this.detector=te.forFloat32Array(t.analyserNode.fftSize)}detect(t){let e=new Float32Array(this.detector.inputLength);t.analyserNode.getFloatTimeDomainData(e);let r=new Gr;[r.pitch,r.clarity]=this.detector.findPitch(e,t.audioContext.sampleRate);let i=e.reduce((n,a)=>n+a*a,0);return r.volume=Math.sqrt(i/e.length),r}},cr=class{detect(t){let e=new Float32Array(2048);t.analyserNode.getFloatTimeDomainData(e);let r=new Gr;r.pitch=this.detector(e),r.clarity=1;let i=e.reduce((n,a)=>n+a*a,0);return r.volume=Math.sqrt(i/e.length),r}},Jr=class extends cr{constructor(){super();this.detector=ke.YIN()}},Qr=class extends cr{constructor(){super();this.detector=ke.AMDF()}},Xr=class extends cr{constructor(){super();this.detector=ke.DynamicWavelet()}};var Ae=class extends J{constructor(){super();this.refresh=()=>{this.requestUpdate()}}updateAlgorithm(t){let e=t.target.value;j.algorithm=e}render(){return Y`
                    <tn-accordion>
                        <div slot="header">Experimental</div>
                        <div slot="content">
                            <div class="row">
                                <label>Pitch Detection Algorithm</label>
                                <select @input="${this.updateAlgorithm}">
                                    ${gi.map(t=>Y`
                                        <option .selected="${t===j.algorithm}" .value="${t}">${t}</option>
                                    `)}
                                </select>
                            </div>
                        </div>
                    </tn-accordion>
        `}};Ae.styles=[Ft,ct],L([Mt("config-change")],Ae.prototype,"refresh",2),Ae=L([rt("tn-experimental-settings"),Ot],Ae);var to={};mt(to,{GeneralSettingsComponent:()=>Se});var Se=class extends J{constructor(){super();this.refresh=()=>{this.requestUpdate()}}updateAccidentalMode(t){let e=t.target.checked===!1?1:0;j.accidentalMode=e}resetFrequencyOfA(){j.frequencyOfA=j.defaultConfig.frequencyOfA}updateFrequencyOfA(t){let e=Number(t.target.value);j.frequencyOfA=e}render(){return Y`
                <tn-accordion >
                    <div slot="header">General</div>
                    <div slot="content">
                        <div class="row">
                            <label for="flats" class="switch">
                                <input id="flats"
                                       type="checkbox"
                                       .checked="${j.accidentalMode===0}"
                                       @click=${this.updateAccidentalMode}>
                                <span class="slider round"></span>
                            </label>
                            <span>Use Flats</span>
                        </div>
                        <div class="row">
                            <input id="frequencyOfA"
                                   type="range"
                                   max="${j.AUpperBoundFreq}"
                                   min="${j.ALowerBoundFreq}"
                                   .value="${j.frequencyOfA}"
                                   @input=${this.updateFrequencyOfA}>
                            <label style="flex: 1" for="frequencyOfA">
                                A = ${j.frequencyOfA}HZ
                            </label>
                            ${j.frequencyOfA!==j.defaultConfig.frequencyOfA?Y`
                                <i class="fa fa-undo" @click=${this.resetFrequencyOfA}></i>`:K}
                        </div>
                    </div>
                </tn-accordion>
    `}};Se.styles=[Ft,ct],L([Mt("config-change")],Se.prototype,"refresh",2),Se=L([rt("tn-general-settings"),Ot],Se);var eo={};mt(eo,{ThemeSettingsComponent:()=>Me});var yn=X`
    .color-row {
        align-items: center;
        justify-content: space-between;
    }

    .row input, select {
        margin-inline: 1em;
    }

    .color-ball {
        display: inline-block;
        border-radius: 100%;
        width: 1em;
        height: 1em;
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

    .theme-container {
        height: 10em;
        overflow-y: scroll;
    }

    .d-inline {
        display: inline-block;
    }

    .theme-name {
        margin-inline-end: 1em;
    }

    .palette {
        display: flex;
        width: 50%;
        gap: 0.5em;
        border-radius: 1em;
        padding: 0.3em;
    }
`,Me=class extends J{constructor(){super();this.onThemeChange=()=>{this.requestUpdate()}}updateTheme(t){j.setTheme(t)}render(){return Y`
            <tn-accordion>
                <div slot="header">Theme</div>
                <div slot="content">
                    <div class="theme-container">
                        ${Lo.map(t=>Y`
                            <div class="row color-row" @click=${()=>this.updateTheme(t)}>
                                <span class="d-inline theme-name">${t.name}</span>
                                <span class="palette" style="background: ${t.background}"> 
                                    <span class="color-ball" style="background: ${t.primary}"></span>
                                    <span class="color-ball" style="background: ${t.highlight}"></span>
                                    <span class="color-ball" style="background: ${t.text}"></span>
                                </span>
                            </div>
                        `)}
                    </div>
            </tn-accordion>
        `}};Me.styles=[yn,Ft,ct],L([Mt("theme-change")],Me.prototype,"onThemeChange",2),Me=L([rt("tn-theme-settings"),Ot],Me);var oo={};mt(oo,{AccordionComponent:()=>We});var ro=class extends Event{constructor(t){super("accordion-toggle",{bubbles:!0,composed:!0});this.detailsElement=t}};var Cn=X`
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
        background-color: rgba(var(--highlight-color), 0.1);
        color: rgb(var(--text-color));
        font-size: 2em;

        margin-block: 2rem;
        margin-inline: 9rem;
        padding-block-end: 0.1px;

        transition: all .2s var(--entrance-transition);
    }

    details:hover {
        scale: 1.1;
        background-color: rgba(var(--highlight-color), 0.3);
    }

    details[open] {
        background-color: rgba(var(--highlight-color), 0.3);
    }

    .content {
        padding-inline: 1em;
        padding-block-end: 1em;
        border-radius: 1em;
        color: rgb(var(--text-color));
    }
`,We=class extends J{propogateOpenEvent(t){t.newState==="open"&&this.dispatchEvent(new ro(t.target))}render(){return Y`
            <details @toggle="${this.propogateOpenEvent}">
                <summary class="header">
                    <slot name="header"></slot>
                </summary>
                <div class="content">
                    <slot name="content"></slot>
                </div>
            </details>
        `}};We.styles=[Cn,ct],We=L([rt("tn-accordion")],We);var io={};mt(io,{SettingsComponent:()=>Ge});var wn=X`
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
        color: rgb(var(--text-color));
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
`,Ge=class extends J{render(){return Y`
            <div class="modal">
                <slot class="header row" name="header"></slot>
                <slot name="content"></slot>
            </div>
            <div class="scroll-shadow"></div>
        `}};Ge.styles=[wn],Ge=L([rt("tn-modal")],Ge);var no={};mt(no,{snapshots:()=>vi});var vi={};vi["TunerComponent should equal snapshot"]=`<tn-tuner>
</tn-tuner>
`;var ao={};mt(ao,{TunerNoteComponent:()=>kt});var xn=X`
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
        stroke: rgb(var(--primary-color));
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
        stroke: rgb(var(--primary-color));
        font-size: 1em;
    }

    .tuner-note-octave-mask {
        stroke: black;
        stroke-width: 0.5;
        fill: white;
        font-size: 1em;
    }

    .tuner-liquid {
        fill: rgb(var(--text-color));
    }
`,kt=class extends J{constructor(){super();this.note=new lt(0);this.clarity=1;this.accuracy=0;this.accuracyBuffer=[kt.bufferSize];this.heightAnimator=new ur}updateHeightAnimation(){if(this.heightAnimatorReference)this.heightAnimator.reference=this.heightAnimatorReference;else return;let t=bt.map(this.accuracy,[0,1],[90,25]);this.heightAnimator.to=t+""}update(t){super.update(t),!isNaN(Number(t.get("accuracy")))&&this.updateHeightAnimation()}render(){let t={"tuner-note-stroke-half":j.getComponent("noteOutline"),"tuner-note-octave":!0},e={"tuner-note-stroke-full":j.getComponent("noteOutline"),"tuner-note-letter":!0},r={"tuner-note-stroke-half":j.getComponent("noteOutline"),"tuner-note-accidental":!0};return Y`
            <div class="tuner-note-container">
                <svg id="view" viewBox="0 2 100 100" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">

                    <use href="#note-letter" class=${Et(e)}/>

                    ${j.getComponent("noteFill")?ue`<use href="#liquid-effect" mask="url(#note-mask)"/>`:K}
                    ${j.getComponent("noteOctave")?ue`<use href="#note-octave" class=${Et(t)}/>`:K}

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
        `}};kt.styles=xn,kt.bufferSize=25,L([nt()],kt.prototype,"note",2),L([nt()],kt.prototype,"clarity",2),L([nt({type:Number})],kt.prototype,"accuracy",2),L([bo("#height-animator")],kt.prototype,"heightAnimatorReference",2),kt=L([rt("tn-tuner-note")],kt);var Ee=class{set reference(t){this._reference=t}get from(){return this._reference.getAttribute("values").match(Ee.fromMatcher)[0]}set from(t){this._reference.setAttribute("values",this._reference.getAttribute("values").replace(Ee.fromMatcher,t))}get to(){return this._reference.getAttribute("values").match(Ee.toMatcher)[0]}set to(t){this._reference.setAttribute("values",this._reference.getAttribute("values").replace(Ee.toMatcher,t))}onEndEvent(){this.from=this.to}},ur=Ee;ur.fromMatcher=/-?\d+\.?\d*(?=;)/g,ur.toMatcher=/-?\d+\.?\d*$/g;var so={};mt(so,{SpokeComponent:()=>Ht,TunerRingComponent:()=>It});var Ai=Qe(ki());var Rn=X`
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
`,It=class extends J{constructor(){super(...arguments);this.accuracy=0;this.volume=0}updated(){this.style.setProperty("--needle-degree",this.convertAccuracyToRadians()+"rad")}convertAccuracyToRadians(){let t=this.accuracy*(Math.PI/2)-Math.PI/2;return this.pitchAccidental==Kt.sharp&&(t*=-1),t}static angleDifference(t,e){let r=t-e;return r+=r>Math.PI?-(2*Math.PI):r<-Math.PI?2*Math.PI:0,Math.abs(r)}render(){let t=[],e=[],r=41;for(let i=0;i<r;i++){let n=i*(Math.PI/(r-1))-Math.PI/2,a=i>=(r-3)/2&&i<=(r+1)/2,s=It.angleDifference(n,this.convertAccuracyToRadians()),c=bt.map(s,[Math.PI,0],[0,1]),l=bt.clamp(this.volume*8,[.3,.9]);t.push(Y`
                <tn-spoke .index="${i}" .scaleFactor="${c}"
                          .arcPosition="${n}" .isMiddle="${a}"></tn-spoke>
            `),e.push(Y`
                <tn-spoke .index="${i}" .scaleFactor="${l}"
                          .arcPosition="${n+Math.PI}"></tn-spoke>
            `)}return Y`
            <div class="tuner-ring">
                <div class="ring">
                    <span class="top-spokes">
                        ${j.getComponent("frequencyRing")?t:K}
                    </span>
                    <span class="bottom-spokes">
                        ${j.getComponent("volumeRing")?e:K}
                    </span>
                </div>
                ${j.getComponent("needle")?Y`<div class="tuner-needle"></div>`:K}
            </div>
        `}};It.styles=Rn,L([nt()],It.prototype,"accuracy",2),L([nt()],It.prototype,"volume",2),L([nt()],It.prototype,"pitchAccidental",2),It=L([rt("tn-tuner-ring")],It);var Pn=X`
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

`,Ht=class extends J{constructor(){super(...arguments);this.scaleFactor=0;this.arcPosition=0;this.index=0;this.isMiddle=!1}connectedCallback(){super.connectedCallback(),this.isMiddle&&this.style.setProperty("background","rgb(var(--primary-color))"),this.setupPosition()}updated(){let t=(0,Ai.default)(0,0,1,0),e=this.scaleFactor,r=bt.map(this.scaleFactor,[0,1],[1,0]),i=t(e)*5,n=t(r)*15;this.style.setProperty("--x-scale",i+n+""),this.style.setProperty("--y-scale",i+"")}setupPosition(){let t=50*Math.cos(this.arcPosition)+50+"%",e=50*Math.sin(this.arcPosition)+50+"%";this.style.setProperty("bottom",t),this.style.setProperty("left",e),this.style.setProperty("--angle",this.arcPosition+"rad")}};Ht.styles=Pn,L([nt()],Ht.prototype,"scaleFactor",2),L([nt()],Ht.prototype,"arcPosition",2),L([nt()],Ht.prototype,"index",2),L([nt()],Ht.prototype,"isMiddle",2),Ht=L([rt("tn-spoke")],Ht);var uo={};mt(uo,{TunerComponent:()=>Nt});var Bt=class{static debug(...t){j.debugMode&&console.debug(...t)}static error(...t){console.error(...t)}};var lo=class{constructor(){this.audioContext=new AudioContext,this.analyserNode=new AnalyserNode(this.audioContext)}connect(){return wr(this,null,function*(){let t;try{t=yield navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,autoGainControl:!1,noiseSuppression:!1,latency:0}})}catch(r){Bt.error(r)}this.sourceNode=this.audioContext.createMediaStreamSource(t);let e=this.audioContext.createBiquadFilter();return e.type="lowpass",e.frequency.setTargetAtTime(lo.lowpassThreshold,this.audioContext.currentTime,0),this.sourceNode.connect(e),e.connect(this.analyserNode),yield this.audioContext.resume(),this})}disconnect(){return wr(this,null,function*(){try{yield this.audioContext.suspend()}catch(t){Bt.error(t)}})}},Je=lo;Je.lowpassThreshold=8e3;var co=class{constructor(t=new Je,e=17){this.refreshRate=e,this._audioSource=t,this.algorithms=new Map,this.algorithms.set("McLeod",new Zr(this._audioSource)),this.algorithms.set("YIN",new Jr),this.algorithms.set("AMDF",new Qr),this.algorithms.set("Dynamic Wavelet",new Xr)}static Instance(t=new Je,e=17){return this._instance||(this._instance=new this(t,e))}startListening(){this._audioSource.connect().then(()=>{window.clearInterval(this.intervalReference),this.intervalReference=window.setInterval(this.listen.bind(this),this.refreshRate)})}stopListening(){this._audioSource.disconnect(),window.clearInterval(this.intervalReference)}setOnListen(t){this.onListen=t}get pitch(){return this._algorithmResult.pitch}get clarity(){return this._algorithmResult.clarity}get volume(){return this._algorithmResult.volume}get audioSource(){return this._audioSource}set audioSource(t){t.analyserNode.smoothingTimeConstant=1,this._audioSource=t}listen(){this._algorithmResult=this.algorithms.get(j.algorithm).detect(this._audioSource),this.pitch===-1&&Bt.debug("Pitch not detected.",this._algorithmResult.pitch,this._algorithmResult.clarity),this.onListen(this._algorithmResult.pitch,this._algorithmResult.clarity,this._algorithmResult.volume)}};var Nt=class extends J{constructor(){super(...arguments);this.pitchDetectorService=co.Instance();this.note=new lt(0);this.accuracy=0;this.clarity=1;this.volume=0;this.isShown=!0;this.inTune=!1}connectedCallback(){super.connectedCallback(),this.pitchDetectorService.setOnListen((t,e,r)=>{if(this.clarity=e,this.volume=r,r<.01||e<.95)return;this.note=ye.freqToNote(t);let i=ye.noteToPitch(this.note),n=ye.noteToPitch(new lt(this.note.index-1)),a=ye.noteToPitch(new lt(this.note.index+1)),s;t<i?(this.pitchAccidental=Kt.flat,s=bt.map(t,[n,i],[-1,1])):(this.pitchAccidental=Kt.sharp,s=bt.map(t,[a,i],[-1,1])),s<0&&(s=0),this.inTune=s>.95,this.accuracy=s}),this.pitchDetectorService.startListening()}disconnectedCallback(){super.disconnectedCallback(),this.pitchDetectorService.stopListening()}attributeChangedCallback(t,e,r){super.attributeChangedCallback(t,e,r),this.isShown?this.pitchDetectorService.startListening():this.pitchDetectorService.stopListening()}updateOscillatorFrequency(t){let e=this.pitchDetectorService.audioSource;e.frequency=Number(t.target.value)}setPlayback(t){t.target.checked?this.pitchDetectorService.audioSource.sourceNode.connect(this.pitchDetectorService.audioSource.audioContext.destination):this.pitchDetectorService.audioSource.sourceNode.disconnect(this.pitchDetectorService.audioSource.audioContext.destination)}resumeContext(){this.pitchDetectorService.audioSource.audioContext.resume().then(()=>{Bt.debug("Audio source resumed")},t=>{Bt.error("Audio source failed to resume",t)})}render(){return Y`
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
    `}};L([nt()],Nt.prototype,"note",2),L([nt()],Nt.prototype,"accuracy",2),L([nt()],Nt.prototype,"clarity",2),L([nt()],Nt.prototype,"volume",2),L([nt({attribute:wt.slideShownAttribute,converter:t=>t==="true"})],Nt.prototype,"isShown",2),L([nt()],Nt.prototype,"pitchAccidental",2),Nt=L([rt("tn-tuner")],Nt);var On=[Or,Nr,Dr,Vr,Wr,Kr,to,Yr,eo,oo,Br,Pr,Ir,Tr,jr,io,no,ao,so,uo],Si=On;Si[0].default;"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/serviceWorker.js").catch(o=>console.log("service worker not registered",o))});})();
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

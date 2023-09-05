(()=>{var Cr=Object.create;var Nt=Object.defineProperty;var ke=Object.getOwnPropertyDescriptor;var Pr=Object.getOwnPropertyNames;var Mr=Object.getPrototypeOf,Ir=Object.prototype.hasOwnProperty;var Xt=Math.pow;var Ce=o=>Nt(o,"__esModule",{value:!0});var te=(o,t)=>()=>(t||o((t={exports:{}}).exports,t),t.exports),Dt=(o,t)=>{Ce(o);for(var e in t)Nt(o,e,{get:t[e],enumerable:!0})},Rr=(o,t,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Pr(t))!Ir.call(o,r)&&r!=="default"&&Nt(o,r,{get:()=>t[r],enumerable:!(e=ke(t,r))||e.enumerable});return o},ee=o=>Rr(Ce(Nt(o!=null?Cr(Mr(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o),v=(o,t,e,r)=>{for(var i=r>1?void 0:r?ke(t,e):t,s=o.length-1,n;s>=0;s--)(n=o[s])&&(i=(r?n(t,e,i):n(i))||i);return r&&i&&Nt(t,e,i),i};var re=(o,t,e)=>new Promise((r,i)=>{var s=l=>{try{a(e.next(l))}catch(c){i(c)}},n=l=>{try{a(e.throw(l))}catch(c){i(c)}},a=l=>l.done?r(l.value):Promise.resolve(l.value).then(s,n);a((e=e.apply(o,t)).next())});var lr=te((io,ar)=>{var Wr=4,Kr=.001,Gr=1e-7,Jr=10,It=11,Ut=1/(It-1),Zr=typeof Float32Array=="function";function ir(o,t){return 1-3*t+3*o}function or(o,t){return 3*t-6*o}function sr(o){return 3*o}function Ot(o,t,e){return((ir(t,e)*o+or(t,e))*o+sr(t))*o}function nr(o,t,e){return 3*ir(t,e)*o*o+2*or(t,e)*o+sr(t)}function Qr(o,t,e,r,i){var s,n,a=0;do n=t+(e-t)/2,s=Ot(n,r,i)-o,s>0?e=n:t=n;while(Math.abs(s)>Gr&&++a<Jr);return n}function Yr(o,t,e,r){for(var i=0;i<Wr;++i){var s=nr(t,e,r);if(s===0)return t;var n=Ot(t,e,r)-o;t-=n/s}return t}function Xr(o){return o}ar.exports=function(t,e,r,i){if(!(0<=t&&t<=1&&0<=r&&r<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===e&&r===i)return Xr;for(var s=Zr?new Float32Array(It):new Array(It),n=0;n<It;++n)s[n]=Ot(n*Ut,t,r);function a(l){for(var c=0,d=1,u=It-1;d!==u&&s[d]<=l;++d)c+=Ut;--d;var h=(l-s[d])/(s[d+1]-s[d]),p=c+h*Ut,f=nr(p,t,r);return f>=Kr?Yr(l,p,t,r):f===0?p:Qr(l,c,c+Ut,t,r)}return function(c){return c===0?0:c===1?1:Ot(a(c),e,i)}}});var dr=te((Io,hr)=>{"use strict";function S(o){if(this.size=o|0,this.size<=1||(this.size&this.size-1)!=0)throw new Error("FFT size must be a power of two and bigger than 1");this._csize=o<<1;for(var t=new Array(this.size*2),e=0;e<t.length;e+=2){let l=Math.PI*e/this.size;t[e]=Math.cos(l),t[e+1]=-Math.sin(l)}this.table=t;for(var r=0,i=1;this.size>i;i<<=1)r++;this._width=r%2==0?r-1:r,this._bitrev=new Array(1<<this._width);for(var s=0;s<this._bitrev.length;s++){this._bitrev[s]=0;for(var n=0;n<this._width;n+=2){var a=this._width-n-2;this._bitrev[s]|=(s>>>n&3)<<a}}this._out=null,this._data=null,this._inv=0}hr.exports=S;S.prototype.fromComplexArray=function(t,e){for(var r=e||new Array(t.length>>>1),i=0;i<t.length;i+=2)r[i>>>1]=t[i];return r};S.prototype.createComplexArray=function(){let t=new Array(this._csize);for(var e=0;e<t.length;e++)t[e]=0;return t};S.prototype.toComplexArray=function(t,e){for(var r=e||this.createComplexArray(),i=0;i<r.length;i+=2)r[i]=t[i>>>1],r[i+1]=0;return r};S.prototype.completeSpectrum=function(t){for(var e=this._csize,r=e>>>1,i=2;i<r;i+=2)t[e-i]=t[i],t[e-i+1]=-t[i+1]};S.prototype.transform=function(t,e){if(t===e)throw new Error("Input and output buffers must be different");this._out=t,this._data=e,this._inv=0,this._transform4(),this._out=null,this._data=null};S.prototype.realTransform=function(t,e){if(t===e)throw new Error("Input and output buffers must be different");this._out=t,this._data=e,this._inv=0,this._realTransform4(),this._out=null,this._data=null};S.prototype.inverseTransform=function(t,e){if(t===e)throw new Error("Input and output buffers must be different");this._out=t,this._data=e,this._inv=1,this._transform4();for(var r=0;r<t.length;r++)t[r]/=this.size;this._out=null,this._data=null};S.prototype._transform4=function(){var t=this._out,e=this._csize,r=this._width,i=1<<r,s=e/i<<1,n,a,l=this._bitrev;if(s===4)for(n=0,a=0;n<e;n+=s,a++){let m=l[a];this._singleTransform2(n,m,i)}else for(n=0,a=0;n<e;n+=s,a++){let m=l[a];this._singleTransform4(n,m,i)}var c=this._inv?-1:1,d=this.table;for(i>>=2;i>=2;i>>=2){s=e/i<<1;var u=s>>>2;for(n=0;n<e;n+=s)for(var h=n+u,p=n,f=0;p<h;p+=2,f+=i){let m=p,g=m+u,b=g+u,A=b+u,P=t[m],D=t[m+1],M=t[g],N=t[g+1],z=t[b],B=t[b+1],O=t[A],j=t[A+1],q=P,V=D,W=d[f],K=c*d[f+1],G=M*W-N*K,J=M*K+N*W,vt=d[2*f],yt=c*d[2*f+1],_t=z*vt-B*yt,gt=z*yt+B*vt,bt=d[3*f],At=c*d[3*f+1],$t=O*bt-j*At,St=O*At+j*bt,xt=q+_t,et=V+gt,rt=q-_t,wt=V-gt,Et=G+$t,it=J+St,ot=c*(G-$t),Tt=c*(J-St),Ft=xt+Et,Vt=et+it,Wt=xt-Et,Kt=et-it,Gt=rt+Tt,Jt=wt-ot,Zt=rt-Tt,Qt=wt+ot;t[m]=Ft,t[m+1]=Vt,t[g]=Gt,t[g+1]=Jt,t[b]=Wt,t[b+1]=Kt,t[A]=Zt,t[A+1]=Qt}}};S.prototype._singleTransform2=function(t,e,r){let i=this._out,s=this._data,n=s[e],a=s[e+1],l=s[e+r],c=s[e+r+1],d=n+l,u=a+c,h=n-l,p=a-c;i[t]=d,i[t+1]=u,i[t+2]=h,i[t+3]=p};S.prototype._singleTransform4=function(t,e,r){let i=this._out,s=this._data,n=this._inv?-1:1,a=r*2,l=r*3,c=s[e],d=s[e+1],u=s[e+r],h=s[e+r+1],p=s[e+a],f=s[e+a+1],m=s[e+l],g=s[e+l+1],b=c+p,A=d+f,P=c-p,D=d-f,M=u+m,N=h+g,z=n*(u-m),B=n*(h-g),O=b+M,j=A+N,q=P+B,V=D-z,W=b-M,K=A-N,G=P-B,J=D+z;i[t]=O,i[t+1]=j,i[t+2]=q,i[t+3]=V,i[t+4]=W,i[t+5]=K,i[t+6]=G,i[t+7]=J};S.prototype._realTransform4=function(){var t=this._out,e=this._csize,r=this._width,i=1<<r,s=e/i<<1,n,a,l=this._bitrev;if(s===4)for(n=0,a=0;n<e;n+=s,a++){let Yt=l[a];this._singleRealTransform2(n,Yt>>>1,i>>>1)}else for(n=0,a=0;n<e;n+=s,a++){let Yt=l[a];this._singleRealTransform4(n,Yt>>>1,i>>>1)}var c=this._inv?-1:1,d=this.table;for(i>>=2;i>=2;i>>=2){s=e/i<<1;var u=s>>>1,h=u>>>1,p=h>>>1;for(n=0;n<e;n+=s)for(var f=0,m=0;f<=p;f+=2,m+=i){var g=n+f,b=g+h,A=b+h,P=A+h,D=t[g],M=t[g+1],N=t[b],z=t[b+1],B=t[A],O=t[A+1],j=t[P],q=t[P+1],V=D,W=M,K=d[m],G=c*d[m+1],J=N*K-z*G,vt=N*G+z*K,yt=d[2*m],_t=c*d[2*m+1],gt=B*yt-O*_t,bt=B*_t+O*yt,At=d[3*m],$t=c*d[3*m+1],St=j*At-q*$t,xt=j*$t+q*At,et=V+gt,rt=W+bt,wt=V-gt,Et=W-bt,it=J+St,ot=vt+xt,Tt=c*(J-St),Ft=c*(vt-xt),Vt=et+it,Wt=rt+ot,Kt=wt+Ft,Gt=Et-Tt;if(t[g]=Vt,t[g+1]=Wt,t[b]=Kt,t[b+1]=Gt,f===0){var Jt=et-it,Zt=rt-ot;t[A]=Jt,t[A+1]=Zt;continue}if(f!==p){var Qt=wt,gr=-Et,br=et,Ar=-rt,$r=-c*Ft,Sr=-c*Tt,xr=-c*ot,wr=-c*it,Er=Qt+$r,Tr=gr+Sr,Nr=br+wr,kr=Ar-xr,Te=n+h-f,Ne=n+u-f;t[Te]=Er,t[Te+1]=Tr,t[Ne]=Nr,t[Ne+1]=kr}}}};S.prototype._singleRealTransform2=function(t,e,r){let i=this._out,s=this._data,n=s[e],a=s[e+r],l=n+a,c=n-a;i[t]=l,i[t+1]=0,i[t+2]=c,i[t+3]=0};S.prototype._singleRealTransform4=function(t,e,r){let i=this._out,s=this._data,n=this._inv?-1:1,a=r*2,l=r*3,c=s[e],d=s[e+r],u=s[e+a],h=s[e+l],p=c+u,f=c-u,m=d+h,g=n*(d-h),b=p+m,A=f,P=-g,D=p-m,M=f,N=g;i[t]=b,i[t+1]=0,i[t+2]=A,i[t+3]=P,i[t+4]=D,i[t+5]=0,i[t+6]=M,i[t+7]=N}});var fr=te((Ro,pr)=>{pr.exports=function(o){return o+=o===0,--o,o|=o>>>1,o|=o>>>2,o|=o>>>4,o|=o>>>8,o|=o>>>16,o+1}});var ie={};Dt(ie,{snapshots:()=>Pe});var Pe={};Pe["TunerComponent should equal snapshot"]=`<tn-tuner>
</tn-tuner>
`;var pe={};Dt(pe,{TunerNoteComponent:()=>w});var zt=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,oe=Symbol(),Me=new Map,Bt=class{constructor(t,e){if(this._$cssResult$=!0,e!==oe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=Me.get(this.cssText);return zt&&t===void 0&&(Me.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}},Ie=o=>new Bt(typeof o=="string"?o:o+"",oe),H=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((r,i,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[s+1],o[0]);return new Bt(e,oe)},se=(o,t)=>{zt?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let r=document.createElement("style"),i=window.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=e.cssText,o.appendChild(r)})},Ht=zt?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return Ie(e)})(o):o;var ne,Re=window.trustedTypes,Fr=Re?Re.emptyScript:"",Fe=window.reactiveElementPolyfillSupport,ae={toAttribute(o,t){switch(t){case Boolean:o=o?Fr:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},De=(o,t)=>t!==o&&(t==t||o==o),le={attribute:!0,type:String,converter:ae,reflect:!1,hasChanged:De},L=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,r)=>{let i=this._$Eh(r,e);i!==void 0&&(this._$Eu.set(i,r),t.push(i))}),t}static createProperty(t,e=le){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let r=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,r,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(i){let s=this[t];this[e]=i,this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||le}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){let e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let i of r)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let i of r)e.unshift(Ht(i))}else t!==void 0&&e.push(Ht(t));return e}static _$Eh(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,r;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return se(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostConnected)===null||r===void 0?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostDisconnected)===null||r===void 0?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ES(t,e,r=le){var i,s;let n=this.constructor._$Eh(t,r);if(n!==void 0&&r.reflect===!0){let a=((s=(i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==null&&s!==void 0?s:ae.toAttribute)(e,r.type);this._$Ei=t,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$Ei=null}}_$AK(t,e){var r,i,s;let n=this.constructor,a=n._$Eu.get(t);if(a!==void 0&&this._$Ei!==a){let l=n.getPropertyOptions(a),c=l.converter,d=(s=(i=(r=c)===null||r===void 0?void 0:r.fromAttribute)!==null&&i!==void 0?i:typeof c=="function"?c:null)!==null&&s!==void 0?s:ae.fromAttribute;this._$Ei=a,this[a]=d(e,l.type),this._$Ei=null}}requestUpdate(t,e,r){let i=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||De)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Ei!==t&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(t,r))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((i,s)=>this[s]=i),this._$Et=void 0);let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(r)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$E_!==void 0&&(this._$E_.forEach((e,r)=>this._$ES(r,this[r],e)),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}};L.finalized=!0,L.elementProperties=new Map,L.elementStyles=[],L.shadowRootOptions={mode:"open"},Fe==null||Fe({ReactiveElement:L}),((ne=globalThis.reactiveElementVersions)!==null&&ne!==void 0?ne:globalThis.reactiveElementVersions=[]).push("1.0.2");var ce,st=globalThis.trustedTypes,ze=st?st.createPolicy("lit-html",{createHTML:o=>o}):void 0,U=`lit$${(Math.random()+"").slice(9)}$`,Be="?"+U,Dr=`<${Be}>`,nt=document,kt=(o="")=>nt.createComment(o),Ct=o=>o===null||typeof o!="object"&&typeof o!="function",He=Array.isArray,zr=o=>{var t;return He(o)||typeof((t=o)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},Pt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Le=/-->/g,Ue=/>/g,Z=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Oe=/'/g,je=/"/g,qe=/^(?:script|style|textarea)$/i,Ve=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),I=Ve(1),di=Ve(2),Q=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),We=new WeakMap,Ke=(o,t,e)=>{var r,i;let s=(r=e==null?void 0:e.renderBefore)!==null&&r!==void 0?r:t,n=s._$litPart$;if(n===void 0){let a=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=n=new ut(t.insertBefore(kt(),a),a,void 0,e??{})}return n._$AI(o),n},at=nt.createTreeWalker(nt,129,null,!1),Br=(o,t)=>{let e=o.length-1,r=[],i,s=t===2?"<svg>":"",n=Pt;for(let l=0;l<e;l++){let c=o[l],d,u,h=-1,p=0;for(;p<c.length&&(n.lastIndex=p,u=n.exec(c),u!==null);)p=n.lastIndex,n===Pt?u[1]==="!--"?n=Le:u[1]!==void 0?n=Ue:u[2]!==void 0?(qe.test(u[2])&&(i=RegExp("</"+u[2],"g")),n=Z):u[3]!==void 0&&(n=Z):n===Z?u[0]===">"?(n=i??Pt,h=-1):u[1]===void 0?h=-2:(h=n.lastIndex-u[2].length,d=u[1],n=u[3]===void 0?Z:u[3]==='"'?je:Oe):n===je||n===Oe?n=Z:n===Le||n===Ue?n=Pt:(n=Z,i=void 0);let f=n===Z&&o[l+1].startsWith("/>")?" ":"";s+=n===Pt?c+Dr:h>=0?(r.push(d),c.slice(0,h)+"$lit$"+c.slice(h)+U+f):c+U+(h===-2?(r.push(void 0),l):f)}let a=s+(o[e]||"<?>")+(t===2?"</svg>":"");return[ze!==void 0?ze.createHTML(a):a,r]},lt=class{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let s=0,n=0,a=t.length-1,l=this.parts,[c,d]=Br(t,e);if(this.el=lt.createElement(c,r),at.currentNode=this.el.content,e===2){let u=this.el.content,h=u.firstChild;h.remove(),u.append(...h.childNodes)}for(;(i=at.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes()){let u=[];for(let h of i.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(U)){let p=d[n++];if(u.push(h),p!==void 0){let f=i.getAttribute(p.toLowerCase()+"$lit$").split(U),m=/([.?@])?(.*)/.exec(p);l.push({type:1,index:s,name:m[2],strings:f,ctor:m[1]==="."?Je:m[1]==="?"?Ze:m[1]==="@"?Qe:Mt})}else l.push({type:6,index:s})}for(let h of u)i.removeAttribute(h)}if(qe.test(i.tagName)){let u=i.textContent.split(U),h=u.length-1;if(h>0){i.textContent=st?st.emptyScript:"";for(let p=0;p<h;p++)i.append(u[p],kt()),at.nextNode(),l.push({type:2,index:++s});i.append(u[h],kt())}}}else if(i.nodeType===8)if(i.data===Be)l.push({type:2,index:s});else{let u=-1;for(;(u=i.data.indexOf(U,u+1))!==-1;)l.push({type:7,index:s}),u+=U.length-1}s++}}static createElement(t,e){let r=nt.createElement("template");return r.innerHTML=t,r}};function ct(o,t,e=o,r){var i,s,n,a;if(t===Q)return t;let l=r!==void 0?(i=e._$Cl)===null||i===void 0?void 0:i[r]:e._$Cu,c=Ct(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(o),l._$AT(o,e,r)),r!==void 0?((n=(a=e)._$Cl)!==null&&n!==void 0?n:a._$Cl=[])[r]=l:e._$Cu=l),l!==void 0&&(t=ct(o,l._$AS(o,t.values),l,r)),t}var Ge=class{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;let{el:{content:r},parts:i}=this._$AD,s=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:nt).importNode(r,!0);at.currentNode=s;let n=at.nextNode(),a=0,l=0,c=i[0];for(;c!==void 0;){if(a===c.index){let d;c.type===2?d=new ut(n,n.nextSibling,this,t):c.type===1?d=new c.ctor(n,c.name,c.strings,this,t):c.type===6&&(d=new Ye(n,this,t)),this.v.push(d),c=i[++l]}a!==(c==null?void 0:c.index)&&(n=at.nextNode(),a++)}return s}m(t){let e=0;for(let r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},ut=class{constructor(t,e,r,i){var s;this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cg=(s=i==null?void 0:i.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ct(this,t,e),Ct(t)?t===_||t==null||t===""?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==Q&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.S(t):zr(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==_&&Ct(this._$AH)?this._$AA.nextSibling.data=t:this.S(nt.createTextNode(t)),this._$AH=t}T(t){var e;let{values:r,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=lt.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.m(r);else{let n=new Ge(s,this),a=n.p(this.options);n.m(r),this.S(a),this._$AH=n}}_$AC(t){let e=We.get(t.strings);return e===void 0&&We.set(t.strings,e=new lt(t)),e}M(t){He(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,i=0;for(let s of t)i===e.length?e.push(r=new ut(this.A(kt()),this.A(kt()),this,this.options)):r=e[i],r._$AI(s),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Mt=class{constructor(t,e,r,i,s){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=_}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,i){let s=this.strings,n=!1;if(s===void 0)t=ct(this,t,e,0),n=!Ct(t)||t!==this._$AH&&t!==Q,n&&(this._$AH=t);else{let a=t,l,c;for(t=s[0],l=0;l<s.length-1;l++)c=ct(this,a[r+l],e,l),c===Q&&(c=this._$AH[l]),n||(n=!Ct(c)||c!==this._$AH[l]),c===_?t=_:t!==_&&(t+=(c??"")+s[l+1]),this._$AH[l]=c}n&&!i&&this.k(t)}k(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Je=class extends Mt{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===_?void 0:t}},Hr=st?st.emptyScript:"",Ze=class extends Mt{constructor(){super(...arguments),this.type=4}k(t){t&&t!==_?this.element.setAttribute(this.name,Hr):this.element.removeAttribute(this.name)}},Qe=class extends Mt{constructor(t,e,r,i,s){super(t,e,r,i,s),this.type=5}_$AI(t,e=this){var r;if((t=(r=ct(this,t,e,0))!==null&&r!==void 0?r:_)===Q)return;let i=this._$AH,s=t===_&&i!==_||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==_&&(i===_||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;typeof this._$AH=="function"?this._$AH.call((r=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}},Ye=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){ct(this,t)}};var Xe=window.litHtmlPolyfillSupport;Xe==null||Xe(lt,ut),((ce=globalThis.litHtmlVersions)!==null&&ce!==void 0?ce:globalThis.litHtmlVersions=[]).push("2.0.2");var ue,he;var x=class extends L{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;let r=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=r.firstChild),r}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Ke(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return Q}};x.finalized=!0,x._$litElement$=!0,(ue=globalThis.litElementHydrateSupport)===null||ue===void 0||ue.call(globalThis,{LitElement:x});var tr=globalThis.litElementPolyfillSupport;tr==null||tr({LitElement:x});((he=globalThis.litElementVersions)!==null&&he!==void 0?he:globalThis.litElementVersions=[]).push("3.0.2");var Y=o=>t=>typeof t=="function"?((e,r)=>(window.customElements.define(e,r),r))(o,t):((e,r)=>{let{kind:i,elements:s}=r;return{kind:i,elements:s,finisher(n){window.customElements.define(e,n)}}})(o,t);var Lr=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}};function y(o){return(t,e)=>e!==void 0?((r,i,s)=>{i.constructor.createProperty(s,r)})(o,t,e):Lr(o,t)}var ht=({finisher:o,descriptor:t})=>(e,r)=>{var i;if(r===void 0){let s=(i=e.originalKey)!==null&&i!==void 0?i:e.key,n=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(e.key)}:{...e,key:s};return o!=null&&(n.finisher=function(a){o(a,s)}),n}{let s=e.constructor;t!==void 0&&Object.defineProperty(e,r,t(r)),o==null||o(s,r)}};function er(o,t){return ht({descriptor:e=>{let r={get(){var i,s;return(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(o))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(t){let i=typeof e=="symbol"?Symbol():"__"+e;r.get=function(){var s,n;return this[i]===void 0&&(this[i]=(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(o))!==null&&n!==void 0?n:null),this[i]}}return r}})}var R={accidentalMode:1,frequencyOfA:440,debugMode:undefined};var $=class{};$.map=(t,e,r)=>(t-e[0])*(r[1]-r[0])/(e[1]-e[0])+r[0],$.clamp=(t,e)=>Math.min(Math.max(t,e[0]),e[1]),$.round=(t,e)=>Number(Math.round(Number(t+"e"+e))+"e-"+e);var dt=12,Ur=["C","C","D","D","E","F","F","G","G","A","A","B"],Or=[1,3,6,8,10],jr=["C","D","D","E","E","F","G","G","A","A","B","B"],X;(function(e){e[e.sharp=0]="sharp",e[e.flat=1]="flat"})(X||(X={}));var E=class{get letter(){return this.lookupLetter()}get accidental(){return this.lookupAccidental()}constructor(t){this.index=$.clamp(t,[0,127]),this.octave=Math.floor(t/dt)-1}lookupLetter(){return R.accidentalMode?Ur[this.index%dt]:jr[this.index%dt]}lookupAccidental(){return Or.includes(this.index%dt)?R.accidentalMode?"#":"b":""}},de=new E(0),qr=new E(69),rr=new E(127),pt=class{static freqToNote(t){if(t<this.noteToPitch(de))return de;if(t>this.noteToPitch(rr))return rr;let e=Math.round(dt*Math.log2(t/this.noteToPitch(de)));if(isNaN(e))throw new Error("calculated frequency produced NaN");return new E(e)}static noteToPitch(t){let e=t.index-qr.index,r=Xt(2,1/dt);return R.frequencyOfA*Xt(r,e)}};var Vr=H`
  .tuner-note-container {
    width: 100%;
    height: 100%;
    text-align: center;
    font-family: "Rubik Mono One", sans-serif;
  }

  .tuner-note-letter {
    stroke: var(--highlight-color);
    stroke-width: 2;
    font-size: 2.5em;
  }

  .tuner-note-letter-mask {
    stroke: black;
    stroke-width: 0.5;
    fill: white;
    font-size: 2.5em;
  }

  .tuner-note-accidental {
    stroke: var(--highlight-color);
    stroke-width: 1;
    stroke-linecap: round;
    font-size: 1em;
  }

  .tuner-note-accidental-mask {
    stroke: black;
    stroke-width: 1;
    fill: white;
    stroke-linecap: round;
    font-size: 1em;
  }

  .tuner-note-octave {
    stroke: var(--highlight-color);
    stroke-width: 1;
    stroke-linecap: round;
    font-size: 1em;
  }

  .tuner-note-octave-mask {
    stroke: black;
    stroke-width: 1;
    fill: white;
    font-size: 1em;
  }

  .tuner-liquid {
    fill: var(--primary-color);
  }

  .test {
    stroke: var(--highlight-color);
    stroke-width: 3;
    fill: var(--primary-color);
    font-weight: bold;
  }
`,w=class extends x{constructor(){super();this.note=new E(0);this.clarity=1;this.accuracy=0;this.accuracyBuffer=[w.bufferSize];this.heightAnimator=new Lt}updateHeightAnimation(){if(this.heightAnimatorReference)this.heightAnimator.reference=this.heightAnimatorReference;else return;let t=$.map(this.accuracy,[0,1],[90,25]);this.heightAnimator.to=t+""}update(t){super.update(t),!isNaN(Number(t.get("accuracy")))&&this.updateHeightAnimation()}render(){return I`
            <div class="tuner-note-container">
                <svg id="view" viewBox="0 2 100 100" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <use href="#note-letter" class="tuner-note-letter"/>

                    <use href="#liquid-effect" mask="url(#note-mask)"/>

                    <use href="#note-octave" class="tuner-note-octave"/>
                    <use href="#note-accidental" class="tuner-note-accidental"/>

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
                        </mask>
                    </defs>
                </svg>
            </div>
        `}};w.styles=Vr,w.bufferSize=25,v([y()],w.prototype,"note",2),v([y()],w.prototype,"clarity",2),v([y({type:Number})],w.prototype,"accuracy",2),v([er("#height-animator")],w.prototype,"heightAnimatorReference",2),w=v([Y("tn-tuner-note")],w);var ft=class{set reference(t){this._reference=t}get from(){return this._reference.getAttribute("values").match(ft.fromMatcher)[0]}set from(t){this._reference.setAttribute("values",this._reference.getAttribute("values").replace(ft.fromMatcher,t))}get to(){return this._reference.getAttribute("values").match(ft.toMatcher)[0]}set to(t){this._reference.setAttribute("values",this._reference.getAttribute("values").replace(ft.toMatcher,t))}onEndEvent(){this.from=this.to}},Lt=ft;Lt.fromMatcher=/-?\d+\.?\d*(?=;)/g,Lt.toMatcher=/-?\d+\.?\d*$/g;var fe={};Dt(fe,{SpokeComponent:()=>F,TunerRingComponent:()=>k});var cr=ee(lr()),ti=H`
  :host {
    --needle-degree: 0rad;
    --opacity: 1;
  }

  .tuner-needle {
    --width: 2vmin;

    background: linear-gradient(0deg, transparent 70%, var(--primary-color) 30%);
    width: var(--width);
    height: 60%;
    position: absolute;
    left: calc(50% - (var(--width) / 2));
    bottom: 55%;
    border-radius: 25%;

    opacity: var(--opacity);
    transform: rotate(var(--needle-degree));
    transform-origin: bottom;
    transition: all cubic-bezier(0, 0, .2, 1.3) 300ms
  }

  .tuner-ring {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75vw;
    max-width: 75vh;
  }

  .tuner-ring:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  .ring {
    position: absolute;
    height: 90%;
    width: 90%;
    left: 5%;
    border-radius: 50%;
  }

  .top-spokes > tn-spoke {
    background-color: var(--highlight-color);
  }

  .bottom-spokes > tn-spoke {
    background-color: var(--primary-color);
  }
`,k=class extends x{constructor(){super(...arguments);this.accuracy=0;this.volume=0}updated(){this.style.setProperty("--needle-degree",this.convertAccuracyToRadians()+"rad")}convertAccuracyToRadians(){let t=this.accuracy*(Math.PI/2)-Math.PI/2;return this.pitchAccidental==X.sharp&&(t*=-1),t}static angleDifference(t,e){let r=t-e;return r+=r>Math.PI?-(2*Math.PI):r<-Math.PI?2*Math.PI:0,Math.abs(r)}render(){let t=[],e=[],r=41;for(let i=0;i<r;i++){let s=i*(Math.PI/(r-1))-Math.PI/2,n=i>=(r-3)/2&&i<=(r+1)/2,a=k.angleDifference(s,this.convertAccuracyToRadians()),l=$.map(a,[Math.PI,0],[0,1]),c=$.clamp(this.volume*8,[.3,.9]);t.push(I`
                <tn-spoke .index="${i}" .scaleFactor="${l}"
                          .arcPosition="${s}" .isMiddle="${n}"></tn-spoke>
            `),e.push(I`
                <tn-spoke .index="${i}" .scaleFactor="${c}"
                          .arcPosition="${s+Math.PI}"></tn-spoke>
            `)}return I`
            <div class="tuner-ring">
                <div class="ring">
                    <span class="top-spokes">
                        ${t}
                    </span>
                    <span class="bottom-spokes">
                        ${e}
                    </span>
                </div>
                <div class="tuner-needle"></div>
            </div>
        `}};k.styles=ti,v([y()],k.prototype,"accuracy",2),v([y()],k.prototype,"volume",2),v([y()],k.prototype,"pitchAccidental",2),k=v([Y("tn-tuner-ring")],k);var ei=H`
  :host {
    --x-scale: 1;
    --y-scale: 1;
    --angle: 0;

    position: absolute;
    height: 4vmin;
    width: 0.4vmin;
    border-radius: 25%;
    transform: translate(-50%, 50%) rotate(var(--angle)) scaleX(var(--x-scale)) scaleY(var(--y-scale));

    transition: all cubic-bezier(0, 0, .2, 1.3) 600ms;
  }

`,F=class extends x{constructor(){super(...arguments);this.scaleFactor=0;this.arcPosition=0;this.index=0;this.isMiddle=!1}connectedCallback(){super.connectedCallback(),this.isMiddle&&this.style.setProperty("background","var(--primary-color)"),this.setupPosition()}updated(){let t=(0,cr.default)(0,0,1,0),e=this.scaleFactor,r=$.map(this.scaleFactor,[0,1],[1,0]),i=t(e)*5,s=t(r)*15;this.style.setProperty("--x-scale",i+s+""),this.style.setProperty("--y-scale",i+"")}setupPosition(){let t=50*Math.cos(this.arcPosition)+50+"%",e=50*Math.sin(this.arcPosition)+50+"%";this.style.setProperty("bottom",t),this.style.setProperty("left",e),this.style.setProperty("--angle",this.arcPosition+"rad")}};F.styles=ei,v([y()],F.prototype,"scaleFactor",2),v([y()],F.prototype,"arcPosition",2),v([y()],F.prototype,"index",2),v([y()],F.prototype,"isMiddle",2),F=v([Y("tn-spoke")],F);var Ee={};Dt(Ee,{TunerComponent:()=>C});function me(o){if(Array.isArray(o))return o}function ve(o,t){var e=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(e!=null){var r=[],i=!0,s=!1,n,a;try{for(e=e.call(o);!(i=(n=e.next()).done)&&(r.push(n.value),!(t&&r.length===t));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&e.return!=null&&e.return()}finally{if(s)throw a}}return r}}function mt(o,t){(t==null||t>o.length)&&(t=o.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=o[e];return r}function Rt(o,t){if(!!o){if(typeof o=="string")return mt(o,t);var e=Object.prototype.toString.call(o).slice(8,-1);if(e==="Object"&&o.constructor&&(e=o.constructor.name),e==="Map"||e==="Set")return Array.from(o);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return mt(o,t)}}function ye(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _e(o,t){return me(o)||ve(o,t)||Rt(o,t)||ye()}function ge(o){if(Array.isArray(o))return mt(o)}function be(o){if(typeof Symbol!="undefined"&&o[Symbol.iterator]!=null||o["@@iterator"]!=null)return Array.from(o)}function Ae(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $e(o){return ge(o)||be(o)||Rt(o)||Ae()}function jt(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function ur(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function qt(o,t,e){return t&&ur(o.prototype,t),e&&ur(o,e),o}function T(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var mr=ee(dr()),vr=ee(fr()),ri=function(){function o(t,e){if(jt(this,o),T(this,"_inputLength",void 0),T(this,"_fft",void 0),T(this,"_bufferSupplier",void 0),T(this,"_paddedInputBuffer",void 0),T(this,"_transformBuffer",void 0),T(this,"_inverseBuffer",void 0),t<1)throw new Error("Input length must be at least one");this._inputLength=t,this._fft=new mr.default((0,vr.default)(2*t)),this._bufferSupplier=e,this._paddedInputBuffer=this._bufferSupplier(this._fft.size),this._transformBuffer=this._bufferSupplier(2*this._fft.size),this._inverseBuffer=this._bufferSupplier(2*this._fft.size)}return qt(o,[{key:"inputLength",get:function(){return this._inputLength}},{key:"autocorrelate",value:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this._bufferSupplier(e.length);if(e.length!==this._inputLength)throw new Error("Input must have length ".concat(this._inputLength," but had length ").concat(e.length));for(var i=0;i<e.length;i++)this._paddedInputBuffer[i]=e[i];for(var s=e.length;s<this._paddedInputBuffer.length;s++)this._paddedInputBuffer[s]=0;this._fft.realTransform(this._transformBuffer,this._paddedInputBuffer),this._fft.completeSpectrum(this._transformBuffer);for(var n=this._transformBuffer,a=0;a<n.length;a+=2)n[a]=n[a]*n[a]+n[a+1]*n[a+1],n[a+1]=0;this._fft.inverseTransform(this._inverseBuffer,this._transformBuffer);for(var l=0;l<e.length;l++)r[l]=this._inverseBuffer[2*l];return r}}],[{key:"forFloat32Array",value:function(e){return new o(e,function(r){return new Float32Array(r)})}},{key:"forFloat64Array",value:function(e){return new o(e,function(r){return new Float64Array(r)})}},{key:"forNumberArray",value:function(e){return new o(e,function(r){return Array(r)})}}]),o}();function ii(o){for(var t=[],e=!1,r=-1/0,i=-1,s=1;s<o.length-1;s++)o[s-1]<=0&&o[s]>0?(e=!0,i=s,r=o[s]):o[s-1]>0&&o[s]<=0?(e=!1,i!==-1&&t.push(i)):e&&o[s]>r&&(r=o[s],i=s);return t}function oi(o,t){var e=o-1,r=o,i=o+1,s=[t[e],t[r],t[i]],n=s[0],a=s[1],l=s[2],c=n/2-a+l/2,d=-(n/2)*(r+i)+a*(e+i)-l/2*(e+r),u=n*r*i/2-a*e*i+l*e*r/2,h=-d/(2*c),p=c*h*h+d*h+u;return[h,p]}var yr=function(){function o(t,e){jt(this,o),T(this,"_autocorrelator",void 0),T(this,"_nsdfBuffer",void 0),T(this,"_clarityThreshold",.9),this._autocorrelator=new ri(t,e),this._nsdfBuffer=e(t)}return qt(o,[{key:"inputLength",get:function(){return this._autocorrelator.inputLength}},{key:"findPitch",value:function(e,r){var i=this;this._nsdf(e);var s=ii(this._nsdfBuffer);if(s.length===0)return[0,0];var n=Math.max.apply(Math,$e(s.map(function(h){return i._nsdfBuffer[h]}))),a=s.find(function(h){return i._nsdfBuffer[h]>=i._clarityThreshold*n}),l=oi(a,this._nsdfBuffer),c=_e(l,2),d=c[0],u=c[1];return[r/d,Math.min(u,1)]}},{key:"_nsdf",value:function(e){this._autocorrelator.autocorrelate(e,this._nsdfBuffer);var r=2*this._nsdfBuffer[0],i;for(i=0;i<this._nsdfBuffer.length&&r>0;i++)this._nsdfBuffer[i]=2*this._nsdfBuffer[i]/r,r-=Math.pow(e[i],2)+Math.pow(e[e.length-i-1],2);for(;i<this._nsdfBuffer.length;i++)this._nsdfBuffer[i]=0}}],[{key:"forFloat32Array",value:function(e){return new o(e,function(r){return new Float32Array(r)})}},{key:"forFloat64Array",value:function(e){return new o(e,function(r){return new Float64Array(r)})}},{key:"forNumberArray",value:function(e){return new o(e,function(r){return Array(r)})}}]),o}();var tt=class{static debug(...t){R.debugMode&&console.debug(t)}static error(...t){console.error(t)}};var Se=class{constructor(t=new xe,e=17){this.refreshRate=e,this._audioSource=t,this.pitchDetector=yr.forFloat32Array(this._audioSource.analyserNode.fftSize)}static Instance(t=new xe,e=17){return this._instance||(this._instance=new this(t,e))}startListening(){this._audioSource.connect().then(()=>{this.intervalReference=window.setInterval(this.listen.bind(this),this.refreshRate)})}stopListening(){window.clearInterval(this.intervalReference)}setOnListen(t){this.onListen=t}get pitch(){return this._pitch}get clarity(){return this._clarity}get volume(){return this._volume}get audioSource(){return this._audioSource}set audioSource(t){t.analyserNode.smoothingTimeConstant=1,this._audioSource=t}listen(){let t=new Float32Array(this.pitchDetector.inputLength);this._audioSource.analyserNode.getFloatTimeDomainData(t),[this._pitch,this._clarity]=this.pitchDetector.findPitch(t,this._audioSource.audioContext.sampleRate),this.pitch===0&&tt.debug("Pitch not detected.",this._pitch,this._clarity);let e=t.reduce((r,i)=>r+i*i,0);this._volume=Math.sqrt(e/t.length),this.onListen(this._pitch,this._clarity,this._volume)}},xe=class{constructor(){this.audioContext=new AudioContext,this.analyserNode=new AnalyserNode(this.audioContext)}connect(){return re(this,null,function*(){let t;try{t=yield navigator.mediaDevices.getUserMedia({audio:!0})}catch(e){tt.error(e)}return this.sourceNode=this.audioContext.createMediaStreamSource(t),this.sourceNode.connect(this.analyserNode),yield this.audioContext.resume(),this})}},we=class{constructor(){this.audioContext=new AudioContext,this.analyserNode=new AnalyserNode(this.audioContext)}connect(){return re(this,null,function*(){return this.sourceNode=this.audioContext.createOscillator(),this.sourceNode.type="sine",this.sourceNode.frequency.setValueAtTime(440,this.audioContext.currentTime),this.sourceNode.start(),this.sourceNode.connect(this.analyserNode),yield this.audioContext.resume(),this})}set frequency(t){this.sourceNode.frequency.setValueAtTime(t,this.audioContext.currentTime)}};var si=H`
  :root {
    --doc-height: 100%;
  }

  .tuner-body {
    width: 100%;
    height: 100vh; /* fallback for Js load */
    height: var(--doc-height);
  }
`,C=class extends x{constructor(){super(...arguments);this.pitchDetectorService=Se.Instance();this.note=new E(0);this.accuracy=0;this.clarity=1;this.volume=0;this.inTune=!1}connectedCallback(){super.connectedCallback(),this.calculateDocumentHeight(),this.pitchDetectorService.setOnListen((t,e,r)=>{if(this.clarity=e,this.volume=r,r<.1&&e<.99)return;this.note=pt.freqToNote(t);let i=pt.noteToPitch(this.note),s=pt.noteToPitch(new E(this.note.index-1)),n=pt.noteToPitch(new E(this.note.index+1)),a;t<i?(this.pitchAccidental=X.flat,a=$.map(t,[s,i],[-1,1])):(this.pitchAccidental=X.sharp,a=$.map(t,[n,i],[-1,1])),a<0&&(a=0),this.inTune=a>.95,this.accuracy=a}),R.debugMode&&(this.pitchDetectorService.audioSource=new we),this.pitchDetectorService.startListening()}disconnectedCallback(){super.disconnectedCallback(),this.pitchDetectorService.stopListening()}calculateDocumentHeight(){let t=()=>{document.documentElement.style.setProperty("--doc-height",`${window.innerHeight}px`)};window.addEventListener("resize",t),t()}updateOscillatorFrequency(t){let e=this.pitchDetectorService.audioSource;e.frequency=Number(t.target.value)}setPlayback(t){t.target.checked?this.pitchDetectorService.audioSource.sourceNode.connect(this.pitchDetectorService.audioSource.audioContext.destination):this.pitchDetectorService.audioSource.sourceNode.disconnect(this.pitchDetectorService.audioSource.audioContext.destination)}resumeContext(){this.pitchDetectorService.audioSource.audioContext.resume().then(()=>{tt.debug("Audio source resumed")},t=>{tt.error("Audio source failed to resume",t)})}render(){return I`

            <div class="tuner-body" data-test-id="tuner.body" @click="${this.resumeContext}">
                <tn-tuner-ring .accuracy="${this.accuracy}" .pitchAccidental="${this.pitchAccidental}"
                               .volume="${this.volume}"></tn-tuner-ring>
                <tn-tuner-note .note="${this.note}" .accuracy="${this.accuracy}"
                               .clarity="${this.clarity}"></tn-tuner-note>
            </div>
            ${R.debugMode?I`
                        <div style="z-index: 1000">
                            <p>${this.pitchDetectorService.pitch}</p>
                            <p>${this.pitchDetectorService.clarity}</p>
                            <p>${this.pitchDetectorService.volume}</p>
                            <div data-test-id="tuner.debug-info">
                                <input type="range" min="400"
                                       max="1300"
                                       @input="${this.updateOscillatorFrequency}">
                            </div>
                            <div data-test-id="tuner.audio-slider">
                                Audio Playback: <input type="checkbox" @input="${this.setPlayback}">
                            </div>
                        </div>
                    `:""}
        `}};C.styles=si,v([y()],C.prototype,"note",2),v([y()],C.prototype,"accuracy",2),v([y()],C.prototype,"clarity",2),v([y()],C.prototype,"volume",2),v([y()],C.prototype,"pitchAccidental",2),C=v([Y("tn-tuner")],C);var ni=[ie,pe,fe,Ee],_r=ni;_r[0].default;})();
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

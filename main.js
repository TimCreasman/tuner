(()=>{var Mr=Object.create;var Nt=Object.defineProperty;var Ne=Object.getOwnPropertyDescriptor;var Pr=Object.getOwnPropertyNames;var kr=Object.getPrototypeOf,Ir=Object.prototype.hasOwnProperty;var Xt=Math.pow;var Ce=o=>Nt(o,"__esModule",{value:!0});var te=(o,t)=>()=>(t||o((t={exports:{}}).exports,t),t.exports),zt=(o,t)=>{Ce(o);for(var e in t)Nt(o,e,{get:t[e],enumerable:!0})},Dr=(o,t,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Pr(t))!Ir.call(o,r)&&r!=="default"&&Nt(o,r,{get:()=>t[r],enumerable:!(e=Ne(t,r))||e.enumerable});return o},ee=o=>Dr(Ce(Nt(o!=null?Mr(kr(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o),v=(o,t,e,r)=>{for(var i=r>1?void 0:r?Ne(t,e):t,n=o.length-1,s;n>=0;n--)(s=o[n])&&(i=(r?s(t,e,i):s(i))||i);return r&&i&&Nt(t,e,i),i};var re=(o,t,e)=>new Promise((r,i)=>{var n=l=>{try{a(e.next(l))}catch(c){i(c)}},s=l=>{try{a(e.throw(l))}catch(c){i(c)}},a=l=>l.done?r(l.value):Promise.resolve(l.value).then(n,s);a((e=e.apply(o,t)).next())});var ar=te((io,sr)=>{var Wr=4,Kr=.001,Gr=1e-7,Jr=10,It=11,Ut=1/(It-1),Zr=typeof Float32Array=="function";function rr(o,t){return 1-3*t+3*o}function ir(o,t){return 3*t-6*o}function or(o){return 3*o}function Ot(o,t,e){return((rr(t,e)*o+ir(t,e))*o+or(t))*o}function nr(o,t,e){return 3*rr(t,e)*o*o+2*ir(t,e)*o+or(t)}function Qr(o,t,e,r,i){var n,s,a=0;do s=t+(e-t)/2,n=Ot(s,r,i)-o,n>0?e=s:t=s;while(Math.abs(n)>Gr&&++a<Jr);return s}function Yr(o,t,e,r){for(var i=0;i<Wr;++i){var n=nr(t,e,r);if(n===0)return t;var s=Ot(t,e,r)-o;t-=s/n}return t}function Xr(o){return o}sr.exports=function(t,e,r,i){if(!(0<=t&&t<=1&&0<=r&&r<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===e&&r===i)return Xr;for(var n=Zr?new Float32Array(It):new Array(It),s=0;s<It;++s)n[s]=Ot(s*Ut,t,r);function a(l){for(var c=0,d=1,u=It-1;d!==u&&n[d]<=l;++d)c+=Ut;--d;var h=(l-n[d])/(n[d+1]-n[d]),p=c+h*Ut,f=nr(p,t,r);return f>=Kr?Yr(l,p,t,r):f===0?p:Qr(l,c,c+Ut,t,r)}return function(c){return c===0?0:c===1?1:Ot(a(c),e,i)}}});var hr=te((ko,ur)=>{"use strict";function S(o){if(this.size=o|0,this.size<=1||(this.size&this.size-1)!=0)throw new Error("FFT size must be a power of two and bigger than 1");this._csize=o<<1;for(var t=new Array(this.size*2),e=0;e<t.length;e+=2){let l=Math.PI*e/this.size;t[e]=Math.cos(l),t[e+1]=-Math.sin(l)}this.table=t;for(var r=0,i=1;this.size>i;i<<=1)r++;this._width=r%2==0?r-1:r,this._bitrev=new Array(1<<this._width);for(var n=0;n<this._bitrev.length;n++){this._bitrev[n]=0;for(var s=0;s<this._width;s+=2){var a=this._width-s-2;this._bitrev[n]|=(n>>>s&3)<<a}}this._out=null,this._data=null,this._inv=0}ur.exports=S;S.prototype.fromComplexArray=function(t,e){for(var r=e||new Array(t.length>>>1),i=0;i<t.length;i+=2)r[i>>>1]=t[i];return r};S.prototype.createComplexArray=function(){let t=new Array(this._csize);for(var e=0;e<t.length;e++)t[e]=0;return t};S.prototype.toComplexArray=function(t,e){for(var r=e||this.createComplexArray(),i=0;i<r.length;i+=2)r[i]=t[i>>>1],r[i+1]=0;return r};S.prototype.completeSpectrum=function(t){for(var e=this._csize,r=e>>>1,i=2;i<r;i+=2)t[e-i]=t[i],t[e-i+1]=-t[i+1]};S.prototype.transform=function(t,e){if(t===e)throw new Error("Input and output buffers must be different");this._out=t,this._data=e,this._inv=0,this._transform4(),this._out=null,this._data=null};S.prototype.realTransform=function(t,e){if(t===e)throw new Error("Input and output buffers must be different");this._out=t,this._data=e,this._inv=0,this._realTransform4(),this._out=null,this._data=null};S.prototype.inverseTransform=function(t,e){if(t===e)throw new Error("Input and output buffers must be different");this._out=t,this._data=e,this._inv=1,this._transform4();for(var r=0;r<t.length;r++)t[r]/=this.size;this._out=null,this._data=null};S.prototype._transform4=function(){var t=this._out,e=this._csize,r=this._width,i=1<<r,n=e/i<<1,s,a,l=this._bitrev;if(n===4)for(s=0,a=0;s<e;s+=n,a++){let m=l[a];this._singleTransform2(s,m,i)}else for(s=0,a=0;s<e;s+=n,a++){let m=l[a];this._singleTransform4(s,m,i)}var c=this._inv?-1:1,d=this.table;for(i>>=2;i>=2;i>>=2){n=e/i<<1;var u=n>>>2;for(s=0;s<e;s+=n)for(var h=s+u,p=s,f=0;p<h;p+=2,f+=i){let m=p,_=m+u,b=_+u,A=b+u,M=t[m],D=t[m+1],P=t[_],C=t[_+1],R=t[b],z=t[b+1],U=t[A],O=t[A+1],j=M,q=D,V=d[f],W=c*d[f+1],K=P*V-C*W,G=P*W+C*V,vt=d[2*f],yt=c*d[2*f+1],_t=R*vt-z*yt,gt=R*yt+z*vt,bt=d[3*f],At=c*d[3*f+1],$t=U*bt-O*At,St=U*At+O*bt,xt=j+_t,et=q+gt,rt=j-_t,wt=q-gt,Et=K+$t,it=G+St,ot=c*(K-$t),Tt=c*(G-St),Rt=xt+Et,Vt=et+it,Wt=xt-Et,Kt=et-it,Gt=rt+Tt,Jt=wt-ot,Zt=rt-Tt,Qt=wt+ot;t[m]=Rt,t[m+1]=Vt,t[_]=Gt,t[_+1]=Jt,t[b]=Wt,t[b+1]=Kt,t[A]=Zt,t[A+1]=Qt}}};S.prototype._singleTransform2=function(t,e,r){let i=this._out,n=this._data,s=n[e],a=n[e+1],l=n[e+r],c=n[e+r+1],d=s+l,u=a+c,h=s-l,p=a-c;i[t]=d,i[t+1]=u,i[t+2]=h,i[t+3]=p};S.prototype._singleTransform4=function(t,e,r){let i=this._out,n=this._data,s=this._inv?-1:1,a=r*2,l=r*3,c=n[e],d=n[e+1],u=n[e+r],h=n[e+r+1],p=n[e+a],f=n[e+a+1],m=n[e+l],_=n[e+l+1],b=c+p,A=d+f,M=c-p,D=d-f,P=u+m,C=h+_,R=s*(u-m),z=s*(h-_),U=b+P,O=A+C,j=M+z,q=D-R,V=b-P,W=A-C,K=M-z,G=D+R;i[t]=U,i[t+1]=O,i[t+2]=j,i[t+3]=q,i[t+4]=V,i[t+5]=W,i[t+6]=K,i[t+7]=G};S.prototype._realTransform4=function(){var t=this._out,e=this._csize,r=this._width,i=1<<r,n=e/i<<1,s,a,l=this._bitrev;if(n===4)for(s=0,a=0;s<e;s+=n,a++){let Yt=l[a];this._singleRealTransform2(s,Yt>>>1,i>>>1)}else for(s=0,a=0;s<e;s+=n,a++){let Yt=l[a];this._singleRealTransform4(s,Yt>>>1,i>>>1)}var c=this._inv?-1:1,d=this.table;for(i>>=2;i>=2;i>>=2){n=e/i<<1;var u=n>>>1,h=u>>>1,p=h>>>1;for(s=0;s<e;s+=n)for(var f=0,m=0;f<=p;f+=2,m+=i){var _=s+f,b=_+h,A=b+h,M=A+h,D=t[_],P=t[_+1],C=t[b],R=t[b+1],z=t[A],U=t[A+1],O=t[M],j=t[M+1],q=D,V=P,W=d[m],K=c*d[m+1],G=C*W-R*K,vt=C*K+R*W,yt=d[2*m],_t=c*d[2*m+1],gt=z*yt-U*_t,bt=z*_t+U*yt,At=d[3*m],$t=c*d[3*m+1],St=O*At-j*$t,xt=O*$t+j*At,et=q+gt,rt=V+bt,wt=q-gt,Et=V-bt,it=G+St,ot=vt+xt,Tt=c*(G-St),Rt=c*(vt-xt),Vt=et+it,Wt=rt+ot,Kt=wt+Rt,Gt=Et-Tt;if(t[_]=Vt,t[_+1]=Wt,t[b]=Kt,t[b+1]=Gt,f===0){var Jt=et-it,Zt=rt-ot;t[A]=Jt,t[A+1]=Zt;continue}if(f!==p){var Qt=wt,gr=-Et,br=et,Ar=-rt,$r=-c*Rt,Sr=-c*Tt,xr=-c*ot,wr=-c*it,Er=Qt+$r,Tr=gr+Sr,Nr=br+wr,Cr=Ar-xr,Ee=s+h-f,Te=s+u-f;t[Ee]=Er,t[Ee+1]=Tr,t[Te]=Nr,t[Te+1]=Cr}}}};S.prototype._singleRealTransform2=function(t,e,r){let i=this._out,n=this._data,s=n[e],a=n[e+r],l=s+a,c=s-a;i[t]=l,i[t+1]=0,i[t+2]=c,i[t+3]=0};S.prototype._singleRealTransform4=function(t,e,r){let i=this._out,n=this._data,s=this._inv?-1:1,a=r*2,l=r*3,c=n[e],d=n[e+r],u=n[e+a],h=n[e+l],p=c+u,f=c-u,m=d+h,_=s*(d-h),b=p+m,A=f,M=-_,D=p-m,P=f,C=_;i[t]=b,i[t+1]=0,i[t+2]=A,i[t+3]=M,i[t+4]=D,i[t+5]=0,i[t+6]=P,i[t+7]=C}});var pr=te((Io,dr)=>{dr.exports=function(o){return o+=o===0,--o,o|=o>>>1,o|=o>>>2,o|=o>>>4,o|=o>>>8,o|=o>>>16,o+1}});var ie={};zt(ie,{snapshots:()=>Me});var Me={};Me["TunerComponent should equal snapshot"]=`<tn-tuner>
</tn-tuner>
`;var pe={};zt(pe,{TunerNoteComponent:()=>w});var Ft=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,oe=Symbol(),Pe=new Map,Bt=class{constructor(t,e){if(this._$cssResult$=!0,e!==oe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=Pe.get(this.cssText);return Ft&&t===void 0&&(Pe.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}},ke=o=>new Bt(typeof o=="string"?o:o+"",oe),F=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((r,i,n)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[n+1],o[0]);return new Bt(e,oe)},ne=(o,t)=>{Ft?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let r=document.createElement("style"),i=window.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=e.cssText,o.appendChild(r)})},Ht=Ft?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return ke(e)})(o):o;var se,Ie=window.trustedTypes,Rr=Ie?Ie.emptyScript:"",De=window.reactiveElementPolyfillSupport,ae={toAttribute(o,t){switch(t){case Boolean:o=o?Rr:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Re=(o,t)=>t!==o&&(t==t||o==o),le={attribute:!0,type:String,converter:ae,reflect:!1,hasChanged:Re},B=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,r)=>{let i=this._$Eh(r,e);i!==void 0&&(this._$Eu.set(i,r),t.push(i))}),t}static createProperty(t,e=le){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let r=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,r,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(i){let n=this[t];this[e]=i,this.requestUpdate(t,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||le}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){let e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let i of r)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let i of r)e.unshift(Ht(i))}else t!==void 0&&e.push(Ht(t));return e}static _$Eh(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,r;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ne(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostConnected)===null||r===void 0?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostDisconnected)===null||r===void 0?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ES(t,e,r=le){var i,n;let s=this.constructor._$Eh(t,r);if(s!==void 0&&r.reflect===!0){let a=((n=(i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==null&&n!==void 0?n:ae.toAttribute)(e,r.type);this._$Ei=t,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Ei=null}}_$AK(t,e){var r,i,n;let s=this.constructor,a=s._$Eu.get(t);if(a!==void 0&&this._$Ei!==a){let l=s.getPropertyOptions(a),c=l.converter,d=(n=(i=(r=c)===null||r===void 0?void 0:r.fromAttribute)!==null&&i!==void 0?i:typeof c=="function"?c:null)!==null&&n!==void 0?n:ae.fromAttribute;this._$Ei=a,this[a]=d(e,l.type),this._$Ei=null}}requestUpdate(t,e,r){let i=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||Re)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Ei!==t&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(t,r))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((i,n)=>this[n]=i),this._$Et=void 0);let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(r)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$E_!==void 0&&(this._$E_.forEach((e,r)=>this._$ES(r,this[r],e)),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}};B.finalized=!0,B.elementProperties=new Map,B.elementStyles=[],B.shadowRootOptions={mode:"open"},De==null||De({ReactiveElement:B}),((se=globalThis.reactiveElementVersions)!==null&&se!==void 0?se:globalThis.reactiveElementVersions=[]).push("1.0.2");var ce,nt=globalThis.trustedTypes,ze=nt?nt.createPolicy("lit-html",{createHTML:o=>o}):void 0,H=`lit$${(Math.random()+"").slice(9)}$`,Fe="?"+H,zr=`<${Fe}>`,st=document,Ct=(o="")=>st.createComment(o),Mt=o=>o===null||typeof o!="object"&&typeof o!="function",Be=Array.isArray,Fr=o=>{var t;return Be(o)||typeof((t=o)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},Pt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,He=/-->/g,Le=/>/g,J=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Ue=/'/g,Oe=/"/g,je=/^(?:script|style|textarea)$/i,qe=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),L=qe(1),di=qe(2),Z=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Ve=new WeakMap,We=(o,t,e)=>{var r,i;let n=(r=e==null?void 0:e.renderBefore)!==null&&r!==void 0?r:t,s=n._$litPart$;if(s===void 0){let a=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=s=new ut(t.insertBefore(Ct(),a),a,void 0,e??{})}return s._$AI(o),s},at=st.createTreeWalker(st,129,null,!1),Br=(o,t)=>{let e=o.length-1,r=[],i,n=t===2?"<svg>":"",s=Pt;for(let l=0;l<e;l++){let c=o[l],d,u,h=-1,p=0;for(;p<c.length&&(s.lastIndex=p,u=s.exec(c),u!==null);)p=s.lastIndex,s===Pt?u[1]==="!--"?s=He:u[1]!==void 0?s=Le:u[2]!==void 0?(je.test(u[2])&&(i=RegExp("</"+u[2],"g")),s=J):u[3]!==void 0&&(s=J):s===J?u[0]===">"?(s=i??Pt,h=-1):u[1]===void 0?h=-2:(h=s.lastIndex-u[2].length,d=u[1],s=u[3]===void 0?J:u[3]==='"'?Oe:Ue):s===Oe||s===Ue?s=J:s===He||s===Le?s=Pt:(s=J,i=void 0);let f=s===J&&o[l+1].startsWith("/>")?" ":"";n+=s===Pt?c+zr:h>=0?(r.push(d),c.slice(0,h)+"$lit$"+c.slice(h)+H+f):c+H+(h===-2?(r.push(void 0),l):f)}let a=n+(o[e]||"<?>")+(t===2?"</svg>":"");return[ze!==void 0?ze.createHTML(a):a,r]},lt=class{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let n=0,s=0,a=t.length-1,l=this.parts,[c,d]=Br(t,e);if(this.el=lt.createElement(c,r),at.currentNode=this.el.content,e===2){let u=this.el.content,h=u.firstChild;h.remove(),u.append(...h.childNodes)}for(;(i=at.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes()){let u=[];for(let h of i.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(H)){let p=d[s++];if(u.push(h),p!==void 0){let f=i.getAttribute(p.toLowerCase()+"$lit$").split(H),m=/([.?@])?(.*)/.exec(p);l.push({type:1,index:n,name:m[2],strings:f,ctor:m[1]==="."?Ge:m[1]==="?"?Je:m[1]==="@"?Ze:kt})}else l.push({type:6,index:n})}for(let h of u)i.removeAttribute(h)}if(je.test(i.tagName)){let u=i.textContent.split(H),h=u.length-1;if(h>0){i.textContent=nt?nt.emptyScript:"";for(let p=0;p<h;p++)i.append(u[p],Ct()),at.nextNode(),l.push({type:2,index:++n});i.append(u[h],Ct())}}}else if(i.nodeType===8)if(i.data===Fe)l.push({type:2,index:n});else{let u=-1;for(;(u=i.data.indexOf(H,u+1))!==-1;)l.push({type:7,index:n}),u+=H.length-1}n++}}static createElement(t,e){let r=st.createElement("template");return r.innerHTML=t,r}};function ct(o,t,e=o,r){var i,n,s,a;if(t===Z)return t;let l=r!==void 0?(i=e._$Cl)===null||i===void 0?void 0:i[r]:e._$Cu,c=Mt(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),c===void 0?l=void 0:(l=new c(o),l._$AT(o,e,r)),r!==void 0?((s=(a=e)._$Cl)!==null&&s!==void 0?s:a._$Cl=[])[r]=l:e._$Cu=l),l!==void 0&&(t=ct(o,l._$AS(o,t.values),l,r)),t}var Ke=class{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;let{el:{content:r},parts:i}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:st).importNode(r,!0);at.currentNode=n;let s=at.nextNode(),a=0,l=0,c=i[0];for(;c!==void 0;){if(a===c.index){let d;c.type===2?d=new ut(s,s.nextSibling,this,t):c.type===1?d=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(d=new Qe(s,this,t)),this.v.push(d),c=i[++l]}a!==(c==null?void 0:c.index)&&(s=at.nextNode(),a++)}return n}m(t){let e=0;for(let r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},ut=class{constructor(t,e,r,i){var n;this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cg=(n=i==null?void 0:i.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ct(this,t,e),Mt(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==Z&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.S(t):Fr(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==y&&Mt(this._$AH)?this._$AA.nextSibling.data=t:this.S(st.createTextNode(t)),this._$AH=t}T(t){var e;let{values:r,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=lt.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.m(r);else{let s=new Ke(n,this),a=s.p(this.options);s.m(r),this.S(a),this._$AH=s}}_$AC(t){let e=Ve.get(t.strings);return e===void 0&&Ve.set(t.strings,e=new lt(t)),e}M(t){Be(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,i=0;for(let n of t)i===e.length?e.push(r=new ut(this.A(Ct()),this.A(Ct()),this,this.options)):r=e[i],r._$AI(n),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},kt=class{constructor(t,e,r,i,n){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,i){let n=this.strings,s=!1;if(n===void 0)t=ct(this,t,e,0),s=!Mt(t)||t!==this._$AH&&t!==Z,s&&(this._$AH=t);else{let a=t,l,c;for(t=n[0],l=0;l<n.length-1;l++)c=ct(this,a[r+l],e,l),c===Z&&(c=this._$AH[l]),s||(s=!Mt(c)||c!==this._$AH[l]),c===y?t=y:t!==y&&(t+=(c??"")+n[l+1]),this._$AH[l]=c}s&&!i&&this.k(t)}k(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ge=class extends kt{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===y?void 0:t}},Hr=nt?nt.emptyScript:"",Je=class extends kt{constructor(){super(...arguments),this.type=4}k(t){t&&t!==y?this.element.setAttribute(this.name,Hr):this.element.removeAttribute(this.name)}},Ze=class extends kt{constructor(t,e,r,i,n){super(t,e,r,i,n),this.type=5}_$AI(t,e=this){var r;if((t=(r=ct(this,t,e,0))!==null&&r!==void 0?r:y)===Z)return;let i=this._$AH,n=t===y&&i!==y||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==y&&(i===y||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;typeof this._$AH=="function"?this._$AH.call((r=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}},Qe=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){ct(this,t)}};var Ye=window.litHtmlPolyfillSupport;Ye==null||Ye(lt,ut),((ce=globalThis.litHtmlVersions)!==null&&ce!==void 0?ce:globalThis.litHtmlVersions=[]).push("2.0.2");var ue,he;var x=class extends B{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;let r=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=r.firstChild),r}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=We(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return Z}};x.finalized=!0,x._$litElement$=!0,(ue=globalThis.litElementHydrateSupport)===null||ue===void 0||ue.call(globalThis,{LitElement:x});var Xe=globalThis.litElementPolyfillSupport;Xe==null||Xe({LitElement:x});((he=globalThis.litElementVersions)!==null&&he!==void 0?he:globalThis.litElementVersions=[]).push("3.0.2");var Q=o=>t=>typeof t=="function"?((e,r)=>(window.customElements.define(e,r),r))(o,t):((e,r)=>{let{kind:i,elements:n}=r;return{kind:i,elements:n,finisher(s){window.customElements.define(e,s)}}})(o,t);var Lr=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}};function g(o){return(t,e)=>e!==void 0?((r,i,n)=>{i.constructor.createProperty(n,r)})(o,t,e):Lr(o,t)}var ht=({finisher:o,descriptor:t})=>(e,r)=>{var i;if(r===void 0){let n=(i=e.originalKey)!==null&&i!==void 0?i:e.key,s=t!=null?{kind:"method",placement:"prototype",key:n,descriptor:t(e.key)}:{...e,key:n};return o!=null&&(s.finisher=function(a){o(a,n)}),s}{let n=e.constructor;t!==void 0&&Object.defineProperty(e,r,t(r)),o==null||o(n,r)}};function tr(o,t){return ht({descriptor:e=>{let r={get(){var i,n;return(n=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(o))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(t){let i=typeof e=="symbol"?Symbol():"__"+e;r.get=function(){var n,s;return this[i]===void 0&&(this[i]=(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&s!==void 0?s:null),this[i]}}return r}})}var k={accidentalMode:1,frequencyOfA:440,debugMode:undefined};var $=class{};$.map=(t,e,r)=>(t-e[0])*(r[1]-r[0])/(e[1]-e[0])+r[0],$.clamp=(t,e)=>Math.min(Math.max(t,e[0]),e[1]),$.round=(t,e)=>Number(Math.round(Number(t+"e"+e))+"e-"+e);var dt=12,Ur=["C","C","D","D","E","F","F","G","G","A","A","B"],Or=[1,3,6,8,10],jr=["C","D","D","E","E","F","G","G","A","A","B","B"],Y;(function(e){e[e.sharp=0]="sharp",e[e.flat=1]="flat"})(Y||(Y={}));var E=class{get letter(){return this.lookupLetter()}get accidental(){return this.lookupAccidental()}constructor(t){this.index=$.clamp(t,[0,127]),this.octave=Math.floor(t/dt)-1}lookupLetter(){return k.accidentalMode?Ur[this.index%dt]:jr[this.index%dt]}lookupAccidental(){return Or.includes(this.index%dt)?k.accidentalMode?"#":"b":""}},de=new E(0),qr=new E(69),er=new E(127),pt=class{static freqToNote(t){if(t<this.noteToPitch(de))return de;if(t>this.noteToPitch(er))return er;let e=Math.round(dt*Math.log2(t/this.noteToPitch(de)));if(isNaN(e))throw new Error("calculated frequency produced NaN");return new E(e)}static noteToPitch(t){let e=t.index-qr.index,r=Xt(2,1/dt);return k.frequencyOfA*Xt(r,e)}};var Vr=F`
  .tuner-note-container {
    width: 100%;
    height: 100%;
    text-align: center;
    font-family: "Lalezar";
  }

  .tuner-note-letter {
    stroke: var(--highlight-color);
    stroke-width: 2;
    font-size: 3em;
  }

  .tuner-note-letter-mask {
    stroke: black;
    fill: white;
    font-size: 3em;
  }

  .tuner-note-accidental {
    stroke: var(--highlight-color);
    stroke-width: 1;
    font-size: 1.5em;
  }

  .tuner-note-accidental-mask {
    stroke: black;
    stroke-width: 1;
    fill: white;
    font-size: 1.5em;
  }

  .tuner-note-octave {
    stroke: var(--highlight-color);
    stroke-width: 1;
    font-size: 1.5em;
  }

  .tuner-note-octave-mask {
    stroke: black;
    stroke-width: 1;
    fill: white;
    font-size: 1.5em;
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
`,w=class extends x{constructor(){super();this.note=new E(0);this.clarity=1;this.accuracy=0;this.accuracyBuffer=[w.bufferSize];this.heightAnimator=new Lt}updateHeightAnimation(){if(this.heightAnimatorReference)this.heightAnimator.reference=this.heightAnimatorReference;else return;let t=$.map(this.accuracy,[0,1],[90,25]);this.heightAnimator.to=t+""}update(t){super.update(t),!isNaN(Number(t.get("accuracy")))&&this.updateHeightAnimation()}render(){return L`
            <div class="tuner-note-container">
                <svg id="view" viewBox="1 0 100 100" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
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
        `}};w.styles=Vr,w.bufferSize=25,v([g()],w.prototype,"note",2),v([g()],w.prototype,"clarity",2),v([g({type:Number})],w.prototype,"accuracy",2),v([tr("#height-animator")],w.prototype,"heightAnimatorReference",2),w=v([Q("tn-tuner-note")],w);var ft=class{set reference(t){this._reference=t}get from(){return this._reference.getAttribute("values").match(ft.fromMatcher)[0]}set from(t){this._reference.setAttribute("values",this._reference.getAttribute("values").replace(ft.fromMatcher,t))}get to(){return this._reference.getAttribute("values").match(ft.toMatcher)[0]}set to(t){this._reference.setAttribute("values",this._reference.getAttribute("values").replace(ft.toMatcher,t))}onEndEvent(){this.from=this.to}},Lt=ft;Lt.fromMatcher=/-?\d+\.?\d*(?=;)/g,Lt.toMatcher=/-?\d+\.?\d*$/g;var fe={};zt(fe,{CircleComponent:()=>T,TunerRingComponent:()=>X});var lr=ee(ar()),ti=F`
  :host {
    --needle-degree: 0rad;
    --opacity: 1;
  }

  .tuner-needle {
    --width: 2vmin;

    background: linear-gradient(0deg, transparent 70%, var(--primary-color) 30%);
    width: var(--width);
    height: 55%;
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

    box-shadow: 0 2vmin 0 var(--primary-color);
  }
`,X=class extends x{constructor(){super(...arguments);this.accuracy=0}updated(){this.style.setProperty("--needle-degree",this.convertAccuracyToRadians()+"rad")}convertAccuracyToRadians(){let t=this.accuracy*(Math.PI/2)-Math.PI/2;return this.pitchAccidental==Y.sharp&&(t*=-1),t}render(){let t=[],e=50;for(let r=0;r<e;r++){let i=Math.PI/e*r,n=r<=e/2+1&&r>=e/2-1;t.push(L`
                <tn-circle .index="${r}" .frequencyDegree="${this.convertAccuracyToRadians()}"
                           .targetDegree="${i-Math.PI/2}" .isMiddle="${n}"></tn-circle>
            `)}return L`
            <div class="tuner-ring">
                <div class="ring">
                    <span class="circles">
                        ${t}
                    </span>
                </div>
                <div class="tuner-needle"></div>
            </div>
        `}};X.styles=ti,v([g()],X.prototype,"accuracy",2),v([g()],X.prototype,"pitchAccidental",2),X=v([Q("tn-tuner-ring")],X);var ei=F`
  :host {
    --bottom: 0%;
    --left: 0%;
    --x-scale: 1;
    --y-scale: 1;
    --z-index: 0;
    --inner-opacity: 1;
    --opacity: 1;
    --angle: 0;

    bottom: var(--bottom);
    left: var(--left);
    position: absolute;
    height: 4vmin;
    width: 0.4vmin;
    background-color: var(--highlight-color);
    border-radius: 25%;
    transform: translate(-50%, 50%) rotate(var(--angle)) scaleX(var(--x-scale)) scaleY(var(--y-scale));
    z-index: var(--z-index);

    transition: all cubic-bezier(0, 0, .2, 1.3) 600ms, z-index 0ms;
  }

`,T=class extends x{constructor(){super(...arguments);this.frequencyDegree=0;this.targetDegree=0;this.index=0;this.isMiddle=!1}connectedCallback(){super.connectedCallback(),this.setupPosition()}updated(){let t=T.angleDifference(this.targetDegree,this.frequencyDegree),e=[0,Math.PI],r=(0,lr.default)(0,0,1,0),i=$.map(t,e,[1,0]),n=$.map(t,e,[0,1]),s=r(i)*5,a=r(n)*15,l=s;this.style.setProperty("--x-scale",s+a+""),this.style.setProperty("--y-scale",s+""),this.style.setProperty("--opacity",l+"")}static angleDifference(t,e){let r=t-e;return r+=r>Math.PI?-(2*Math.PI):r<-Math.PI?2*Math.PI:0,Math.abs(r)}setupPosition(){this.isMiddle&&this.style.setProperty("background","var(--primary-color)");let t=50*Math.cos(this.targetDegree)+50+"%",e=50*Math.sin(this.targetDegree)+50+"%";this.style.setProperty("--bottom",t),this.style.setProperty("--left",e),this.style.setProperty("--angle",this.targetDegree+"rad")}};T.styles=ei,v([g()],T.prototype,"frequencyDegree",2),v([g()],T.prototype,"targetDegree",2),v([g()],T.prototype,"index",2),v([g()],T.prototype,"isMiddle",2),T=v([Q("tn-circle")],T);var we={};zt(we,{TunerComponent:()=>I});function me(o){if(Array.isArray(o))return o}function ve(o,t){var e=o==null?null:typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(e!=null){var r=[],i=!0,n=!1,s,a;try{for(e=e.call(o);!(i=(s=e.next()).done)&&(r.push(s.value),!(t&&r.length===t));i=!0);}catch(l){n=!0,a=l}finally{try{!i&&e.return!=null&&e.return()}finally{if(n)throw a}}return r}}function mt(o,t){(t==null||t>o.length)&&(t=o.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=o[e];return r}function Dt(o,t){if(!!o){if(typeof o=="string")return mt(o,t);var e=Object.prototype.toString.call(o).slice(8,-1);if(e==="Object"&&o.constructor&&(e=o.constructor.name),e==="Map"||e==="Set")return Array.from(o);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return mt(o,t)}}function ye(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _e(o,t){return me(o)||ve(o,t)||Dt(o,t)||ye()}function ge(o){if(Array.isArray(o))return mt(o)}function be(o){if(typeof Symbol!="undefined"&&o[Symbol.iterator]!=null||o["@@iterator"]!=null)return Array.from(o)}function Ae(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $e(o){return ge(o)||be(o)||Dt(o)||Ae()}function jt(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")}function cr(o,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(o,r.key,r)}}function qt(o,t,e){return t&&cr(o.prototype,t),e&&cr(o,e),o}function N(o,t,e){return t in o?Object.defineProperty(o,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):o[t]=e,o}var fr=ee(hr()),mr=ee(pr()),ri=function(){function o(t,e){if(jt(this,o),N(this,"_inputLength",void 0),N(this,"_fft",void 0),N(this,"_bufferSupplier",void 0),N(this,"_paddedInputBuffer",void 0),N(this,"_transformBuffer",void 0),N(this,"_inverseBuffer",void 0),t<1)throw new Error("Input length must be at least one");this._inputLength=t,this._fft=new fr.default((0,mr.default)(2*t)),this._bufferSupplier=e,this._paddedInputBuffer=this._bufferSupplier(this._fft.size),this._transformBuffer=this._bufferSupplier(2*this._fft.size),this._inverseBuffer=this._bufferSupplier(2*this._fft.size)}return qt(o,[{key:"inputLength",get:function(){return this._inputLength}},{key:"autocorrelate",value:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this._bufferSupplier(e.length);if(e.length!==this._inputLength)throw new Error("Input must have length ".concat(this._inputLength," but had length ").concat(e.length));for(var i=0;i<e.length;i++)this._paddedInputBuffer[i]=e[i];for(var n=e.length;n<this._paddedInputBuffer.length;n++)this._paddedInputBuffer[n]=0;this._fft.realTransform(this._transformBuffer,this._paddedInputBuffer),this._fft.completeSpectrum(this._transformBuffer);for(var s=this._transformBuffer,a=0;a<s.length;a+=2)s[a]=s[a]*s[a]+s[a+1]*s[a+1],s[a+1]=0;this._fft.inverseTransform(this._inverseBuffer,this._transformBuffer);for(var l=0;l<e.length;l++)r[l]=this._inverseBuffer[2*l];return r}}],[{key:"forFloat32Array",value:function(e){return new o(e,function(r){return new Float32Array(r)})}},{key:"forFloat64Array",value:function(e){return new o(e,function(r){return new Float64Array(r)})}},{key:"forNumberArray",value:function(e){return new o(e,function(r){return Array(r)})}}]),o}();function ii(o){for(var t=[],e=!1,r=-1/0,i=-1,n=1;n<o.length-1;n++)o[n-1]<=0&&o[n]>0?(e=!0,i=n,r=o[n]):o[n-1]>0&&o[n]<=0?(e=!1,i!==-1&&t.push(i)):e&&o[n]>r&&(r=o[n],i=n);return t}function oi(o,t){var e=o-1,r=o,i=o+1,n=[t[e],t[r],t[i]],s=n[0],a=n[1],l=n[2],c=s/2-a+l/2,d=-(s/2)*(r+i)+a*(e+i)-l/2*(e+r),u=s*r*i/2-a*e*i+l*e*r/2,h=-d/(2*c),p=c*h*h+d*h+u;return[h,p]}var vr=function(){function o(t,e){jt(this,o),N(this,"_autocorrelator",void 0),N(this,"_nsdfBuffer",void 0),N(this,"_clarityThreshold",.9),this._autocorrelator=new ri(t,e),this._nsdfBuffer=e(t)}return qt(o,[{key:"inputLength",get:function(){return this._autocorrelator.inputLength}},{key:"findPitch",value:function(e,r){var i=this;this._nsdf(e);var n=ii(this._nsdfBuffer);if(n.length===0)return[0,0];var s=Math.max.apply(Math,$e(n.map(function(h){return i._nsdfBuffer[h]}))),a=n.find(function(h){return i._nsdfBuffer[h]>=i._clarityThreshold*s}),l=oi(a,this._nsdfBuffer),c=_e(l,2),d=c[0],u=c[1];return[r/d,Math.min(u,1)]}},{key:"_nsdf",value:function(e){this._autocorrelator.autocorrelate(e,this._nsdfBuffer);var r=2*this._nsdfBuffer[0],i;for(i=0;i<this._nsdfBuffer.length&&r>0;i++)this._nsdfBuffer[i]=2*this._nsdfBuffer[i]/r,r-=Math.pow(e[i],2)+Math.pow(e[e.length-i-1],2);for(;i<this._nsdfBuffer.length;i++)this._nsdfBuffer[i]=0}}],[{key:"forFloat32Array",value:function(e){return new o(e,function(r){return new Float32Array(r)})}},{key:"forFloat64Array",value:function(e){return new o(e,function(r){return new Float64Array(r)})}},{key:"forNumberArray",value:function(e){return new o(e,function(r){return Array(r)})}}]),o}();var tt=class{static debug(...t){k.debugMode&&console.debug(t)}static error(...t){console.error(t)}};var Se=class{constructor(t=new yr,e=17){this.refreshRate=e,this._audioSource=t,this.pitchDetector=vr.forFloat32Array(this._audioSource.analyserNode.fftSize)}startListening(){this._audioSource.connect().then(()=>{this.intervalReference=window.setInterval(this.listen.bind(this),this.refreshRate)})}stopListening(){window.clearInterval(this.intervalReference)}setOnListen(t){this.onListen=t}get pitch(){return this._pitch}get clarity(){return this._clarity}get volume(){return this._volume}get audioSource(){return this._audioSource}set audioSource(t){t.analyserNode.smoothingTimeConstant=1,this._audioSource=t}listen(){let t=new Float32Array(this.pitchDetector.inputLength);this._audioSource.analyserNode.getFloatTimeDomainData(t),[this._pitch,this._clarity]=this.pitchDetector.findPitch(t,this._audioSource.audioContext.sampleRate),this.pitch===0&&tt.debug("Pitch not detected.",this._pitch,this._clarity);let e=t.reduce((r,i)=>r+i*i,0);this._volume=Math.sqrt(e/t.length),this.onListen(this._pitch,this._clarity,this._volume)}},yr=class{constructor(){this.audioContext=new AudioContext,this.analyserNode=new AnalyserNode(this.audioContext)}connect(){return re(this,null,function*(){let t;try{t=yield navigator.mediaDevices.getUserMedia({audio:!0})}catch(e){tt.error(e)}return this.sourceNode=this.audioContext.createMediaStreamSource(t),this.sourceNode.connect(this.analyserNode),yield this.audioContext.resume(),this})}},xe=class{constructor(){this.audioContext=new AudioContext,this.analyserNode=new AnalyserNode(this.audioContext)}connect(){return re(this,null,function*(){return this.sourceNode=this.audioContext.createOscillator(),this.sourceNode.type="sine",this.sourceNode.frequency.setValueAtTime(440,this.audioContext.currentTime),this.sourceNode.start(),this.sourceNode.connect(this.analyserNode),yield this.audioContext.resume(),this})}set frequency(t){this.sourceNode.frequency.setValueAtTime(t,this.audioContext.currentTime)}};var ni=F`
  :root {
    --doc-height: 100%;
  }

  .tuner-body {
    width: 100%;
    height: 100vh; /* fallback for Js load */
    height: var(--doc-height);
  }
`,I=class extends x{constructor(){super(...arguments);this.pitchDetectorService=new Se;this.note=new E(0);this.accuracy=0;this.clarity=1;this.inTune=!1}connectedCallback(){super.connectedCallback(),this.calculateDocumentHeight(),this.pitchDetectorService.setOnListen((t,e,r)=>{if(this.clarity=e,r<.1&&e<.99)return;this.note=pt.freqToNote(t);let i=pt.noteToPitch(this.note),n=pt.noteToPitch(new E(this.note.index-1)),s=pt.noteToPitch(new E(this.note.index+1)),a;t<i?(this.pitchAccidental=Y.flat,a=$.map(t,[n,i],[-1,1])):(this.pitchAccidental=Y.sharp,a=$.map(t,[s,i],[-1,1])),a<0&&(a=0),this.inTune=a>.95,this.accuracy=a}),k.debugMode&&(this.pitchDetectorService.audioSource=new xe),this.pitchDetectorService.startListening()}disconnectedCallback(){super.disconnectedCallback(),this.pitchDetectorService.stopListening()}calculateDocumentHeight(){let t=()=>{document.documentElement.style.setProperty("--doc-height",`${window.innerHeight}px`)};window.addEventListener("resize",t),t()}updateOscillatorFrequency(t){let e=this.pitchDetectorService.audioSource;e.frequency=Number(t.target.value)}setPlayback(t){t.target.checked?this.pitchDetectorService.audioSource.sourceNode.connect(this.pitchDetectorService.audioSource.audioContext.destination):this.pitchDetectorService.audioSource.sourceNode.disconnect(this.pitchDetectorService.audioSource.audioContext.destination)}resumeContext(){this.pitchDetectorService.audioSource.audioContext.resume().then(()=>{tt.debug("Audio source resumed")},t=>{tt.error("Audio source failed to resume",t)})}render(){return L`

            <div class="tuner-body" data-test-id="tuner.body" @click="${this.resumeContext}">
                <tn-tuner-ring .accuracy="${this.accuracy}" .pitchAccidental="${this.pitchAccidental}"></tn-tuner-ring>
                <tn-tuner-note .note="${this.note}" .accuracy="${this.accuracy}"
                               .clarity="${this.clarity}"></tn-tuner-note>
            </div>
            ${k.debugMode?L`
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
        `}};I.styles=ni,v([g()],I.prototype,"note",2),v([g()],I.prototype,"accuracy",2),v([g()],I.prototype,"clarity",2),v([g()],I.prototype,"pitchAccidental",2),I=v([Q("tn-tuner")],I);var si=[ie,pe,fe,we],_r=si;_r[0].default;})();
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

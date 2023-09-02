(()=>{var Mr=Object.create;var Nt=Object.defineProperty;var Ce=Object.getOwnPropertyDescriptor;var kr=Object.getOwnPropertyNames;var Ir=Object.getPrototypeOf,Dr=Object.prototype.hasOwnProperty;var Xt=Math.pow;var Pe=i=>Nt(i,"__esModule",{value:!0});var te=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports),zt=(i,t)=>{Pe(i);for(var e in t)Nt(i,e,{get:t[e],enumerable:!0})},Rr=(i,t,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of kr(t))!Dr.call(i,r)&&r!=="default"&&Nt(i,r,{get:()=>t[r],enumerable:!(e=Ce(t,r))||e.enumerable});return i},ee=i=>Rr(Pe(Nt(i!=null?Mr(Ir(i)):{},"default",i&&i.__esModule&&"default"in i?{get:()=>i.default,enumerable:!0}:{value:i,enumerable:!0})),i),v=(i,t,e,r)=>{for(var o=r>1?void 0:r?Ce(t,e):t,n=i.length-1,s;n>=0;n--)(s=i[n])&&(o=(r?s(t,e,o):s(o))||o);return r&&o&&Nt(t,e,o),o};var re=(i,t,e)=>new Promise((r,o)=>{var n=a=>{try{c(e.next(a))}catch(l){o(l)}},s=a=>{try{c(e.throw(a))}catch(l){o(l)}},c=a=>a.done?r(a.value):Promise.resolve(a.value).then(n,s);c((e=e.apply(i,t)).next())});var lr=te((oo,ar)=>{var Kr=4,Gr=.001,Zr=1e-7,Jr=10,It=11,Ut=1/(It-1),Qr=typeof Float32Array=="function";function ir(i,t){return 1-3*t+3*i}function or(i,t){return 3*t-6*i}function nr(i){return 3*i}function Ot(i,t,e){return((ir(t,e)*i+or(t,e))*i+nr(t))*i}function sr(i,t,e){return 3*ir(t,e)*i*i+2*or(t,e)*i+nr(t)}function Yr(i,t,e,r,o){var n,s,c=0;do s=t+(e-t)/2,n=Ot(s,r,o)-i,n>0?e=s:t=s;while(Math.abs(n)>Zr&&++c<Jr);return s}function Xr(i,t,e,r){for(var o=0;o<Kr;++o){var n=sr(t,e,r);if(n===0)return t;var s=Ot(t,e,r)-i;t-=s/n}return t}function ti(i){return i}ar.exports=function(t,e,r,o){if(!(0<=t&&t<=1&&0<=r&&r<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===e&&r===o)return ti;for(var n=Qr?new Float32Array(It):new Array(It),s=0;s<It;++s)n[s]=Ot(s*Ut,t,r);function c(a){for(var l=0,d=1,u=It-1;d!==u&&n[d]<=a;++d)l+=Ut;--d;var h=(a-n[d])/(n[d+1]-n[d]),p=l+h*Ut,f=sr(p,t,r);return f>=Gr?Xr(a,p,t,r):f===0?p:Yr(a,l,l+Ut,t,r)}return function(l){return l===0?0:l===1?1:Ot(c(l),e,o)}}});var dr=te((Io,hr)=>{"use strict";function S(i){if(this.size=i|0,this.size<=1||(this.size&this.size-1)!=0)throw new Error("FFT size must be a power of two and bigger than 1");this._csize=i<<1;for(var t=new Array(this.size*2),e=0;e<t.length;e+=2){let a=Math.PI*e/this.size;t[e]=Math.cos(a),t[e+1]=-Math.sin(a)}this.table=t;for(var r=0,o=1;this.size>o;o<<=1)r++;this._width=r%2==0?r-1:r,this._bitrev=new Array(1<<this._width);for(var n=0;n<this._bitrev.length;n++){this._bitrev[n]=0;for(var s=0;s<this._width;s+=2){var c=this._width-s-2;this._bitrev[n]|=(n>>>s&3)<<c}}this._out=null,this._data=null,this._inv=0}hr.exports=S;S.prototype.fromComplexArray=function(t,e){for(var r=e||new Array(t.length>>>1),o=0;o<t.length;o+=2)r[o>>>1]=t[o];return r};S.prototype.createComplexArray=function(){let t=new Array(this._csize);for(var e=0;e<t.length;e++)t[e]=0;return t};S.prototype.toComplexArray=function(t,e){for(var r=e||this.createComplexArray(),o=0;o<r.length;o+=2)r[o]=t[o>>>1],r[o+1]=0;return r};S.prototype.completeSpectrum=function(t){for(var e=this._csize,r=e>>>1,o=2;o<r;o+=2)t[e-o]=t[o],t[e-o+1]=-t[o+1]};S.prototype.transform=function(t,e){if(t===e)throw new Error("Input and output buffers must be different");this._out=t,this._data=e,this._inv=0,this._transform4(),this._out=null,this._data=null};S.prototype.realTransform=function(t,e){if(t===e)throw new Error("Input and output buffers must be different");this._out=t,this._data=e,this._inv=0,this._realTransform4(),this._out=null,this._data=null};S.prototype.inverseTransform=function(t,e){if(t===e)throw new Error("Input and output buffers must be different");this._out=t,this._data=e,this._inv=1,this._transform4();for(var r=0;r<t.length;r++)t[r]/=this.size;this._out=null,this._data=null};S.prototype._transform4=function(){var t=this._out,e=this._csize,r=this._width,o=1<<r,n=e/o<<1,s,c,a=this._bitrev;if(n===4)for(s=0,c=0;s<e;s+=n,c++){let m=a[c];this._singleTransform2(s,m,o)}else for(s=0,c=0;s<e;s+=n,c++){let m=a[c];this._singleTransform4(s,m,o)}var l=this._inv?-1:1,d=this.table;for(o>>=2;o>=2;o>>=2){n=e/o<<1;var u=n>>>2;for(s=0;s<e;s+=n)for(var h=s+u,p=s,f=0;p<h;p+=2,f+=o){let m=p,_=m+u,g=_+u,$=g+u,P=t[m],D=t[m+1],M=t[_],N=t[_+1],R=t[g],z=t[g+1],U=t[$],O=t[$+1],j=P,q=D,V=d[f],W=l*d[f+1],K=M*V-N*W,G=M*W+N*V,vt=d[2*f],yt=l*d[2*f+1],_t=R*vt-z*yt,gt=R*yt+z*vt,bt=d[3*f],At=l*d[3*f+1],$t=U*bt-O*At,St=U*At+O*bt,xt=j+_t,tt=q+gt,et=j-_t,wt=q-gt,Et=K+$t,rt=G+St,it=l*(K-$t),Tt=l*(G-St),Rt=xt+Et,Vt=tt+rt,Wt=xt-Et,Kt=tt-rt,Gt=et+Tt,Zt=wt-it,Jt=et-Tt,Qt=wt+it;t[m]=Rt,t[m+1]=Vt,t[_]=Gt,t[_+1]=Zt,t[g]=Wt,t[g+1]=Kt,t[$]=Jt,t[$+1]=Qt}}};S.prototype._singleTransform2=function(t,e,r){let o=this._out,n=this._data,s=n[e],c=n[e+1],a=n[e+r],l=n[e+r+1],d=s+a,u=c+l,h=s-a,p=c-l;o[t]=d,o[t+1]=u,o[t+2]=h,o[t+3]=p};S.prototype._singleTransform4=function(t,e,r){let o=this._out,n=this._data,s=this._inv?-1:1,c=r*2,a=r*3,l=n[e],d=n[e+1],u=n[e+r],h=n[e+r+1],p=n[e+c],f=n[e+c+1],m=n[e+a],_=n[e+a+1],g=l+p,$=d+f,P=l-p,D=d-f,M=u+m,N=h+_,R=s*(u-m),z=s*(h-_),U=g+M,O=$+N,j=P+z,q=D-R,V=g-M,W=$-N,K=P-z,G=D+R;o[t]=U,o[t+1]=O,o[t+2]=j,o[t+3]=q,o[t+4]=V,o[t+5]=W,o[t+6]=K,o[t+7]=G};S.prototype._realTransform4=function(){var t=this._out,e=this._csize,r=this._width,o=1<<r,n=e/o<<1,s,c,a=this._bitrev;if(n===4)for(s=0,c=0;s<e;s+=n,c++){let Yt=a[c];this._singleRealTransform2(s,Yt>>>1,o>>>1)}else for(s=0,c=0;s<e;s+=n,c++){let Yt=a[c];this._singleRealTransform4(s,Yt>>>1,o>>>1)}var l=this._inv?-1:1,d=this.table;for(o>>=2;o>=2;o>>=2){n=e/o<<1;var u=n>>>1,h=u>>>1,p=h>>>1;for(s=0;s<e;s+=n)for(var f=0,m=0;f<=p;f+=2,m+=o){var _=s+f,g=_+h,$=g+h,P=$+h,D=t[_],M=t[_+1],N=t[g],R=t[g+1],z=t[$],U=t[$+1],O=t[P],j=t[P+1],q=D,V=M,W=d[m],K=l*d[m+1],G=N*W-R*K,vt=N*K+R*W,yt=d[2*m],_t=l*d[2*m+1],gt=z*yt-U*_t,bt=z*_t+U*yt,At=d[3*m],$t=l*d[3*m+1],St=O*At-j*$t,xt=O*$t+j*At,tt=q+gt,et=V+bt,wt=q-gt,Et=V-bt,rt=G+St,it=vt+xt,Tt=l*(G-St),Rt=l*(vt-xt),Vt=tt+rt,Wt=et+it,Kt=wt+Rt,Gt=Et-Tt;if(t[_]=Vt,t[_+1]=Wt,t[g]=Kt,t[g+1]=Gt,f===0){var Zt=tt-rt,Jt=et-it;t[$]=Zt,t[$+1]=Jt;continue}if(f!==p){var Qt=wt,br=-Et,Ar=tt,$r=-et,Sr=-l*Rt,xr=-l*Tt,wr=-l*it,Er=-l*rt,Tr=Qt+Sr,Nr=br+xr,Cr=Ar+Er,Pr=$r-wr,Te=s+h-f,Ne=s+u-f;t[Te]=Tr,t[Te+1]=Nr,t[Ne]=Cr,t[Ne+1]=Pr}}}};S.prototype._singleRealTransform2=function(t,e,r){let o=this._out,n=this._data,s=n[e],c=n[e+r],a=s+c,l=s-c;o[t]=a,o[t+1]=0,o[t+2]=l,o[t+3]=0};S.prototype._singleRealTransform4=function(t,e,r){let o=this._out,n=this._data,s=this._inv?-1:1,c=r*2,a=r*3,l=n[e],d=n[e+r],u=n[e+c],h=n[e+a],p=l+u,f=l-u,m=d+h,_=s*(d-h),g=p+m,$=f,P=-_,D=p-m,M=f,N=_;o[t]=g,o[t+1]=0,o[t+2]=$,o[t+3]=P,o[t+4]=D,o[t+5]=0,o[t+6]=M,o[t+7]=N}});var fr=te((Do,pr)=>{pr.exports=function(i){return i+=i===0,--i,i|=i>>>1,i|=i>>>2,i|=i>>>4,i|=i>>>8,i|=i>>>16,i+1}});var ie={};zt(ie,{snapshots:()=>Me});var Me={};Me["TunerComponent should equal snapshot"]=`<tn-tuner>
</tn-tuner>
`;var pe={};zt(pe,{TunerNoteComponent:()=>w});var Bt=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,oe=Symbol(),ke=new Map,Ft=class{constructor(t,e){if(this._$cssResult$=!0,e!==oe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=ke.get(this.cssText);return Bt&&t===void 0&&(ke.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}},Ie=i=>new Ft(typeof i=="string"?i:i+"",oe),B=(i,...t)=>{let e=i.length===1?i[0]:t.reduce((r,o,n)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[n+1],i[0]);return new Ft(e,oe)},ne=(i,t)=>{Bt?i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let r=document.createElement("style"),o=window.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=e.cssText,i.appendChild(r)})},Ht=Bt?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return Ie(e)})(i):i;var se,De=window.trustedTypes,zr=De?De.emptyScript:"",Re=window.reactiveElementPolyfillSupport,ae={toAttribute(i,t){switch(t){case Boolean:i=i?zr:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},ze=(i,t)=>t!==i&&(t==t||i==i),le={attribute:!0,type:String,converter:ae,reflect:!1,hasChanged:ze},F=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,r)=>{let o=this._$Eh(r,e);o!==void 0&&(this._$Eu.set(o,r),t.push(o))}),t}static createProperty(t,e=le){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let r=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,r,e);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(o){let n=this[t];this[e]=o,this.requestUpdate(t,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||le}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){let e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let o of r)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let o of r)e.unshift(Ht(o))}else t!==void 0&&e.push(Ht(t));return e}static _$Eh(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,r;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ne(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostConnected)===null||r===void 0?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostDisconnected)===null||r===void 0?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ES(t,e,r=le){var o,n;let s=this.constructor._$Eh(t,r);if(s!==void 0&&r.reflect===!0){let c=((n=(o=r.converter)===null||o===void 0?void 0:o.toAttribute)!==null&&n!==void 0?n:ae.toAttribute)(e,r.type);this._$Ei=t,c==null?this.removeAttribute(s):this.setAttribute(s,c),this._$Ei=null}}_$AK(t,e){var r,o,n;let s=this.constructor,c=s._$Eu.get(t);if(c!==void 0&&this._$Ei!==c){let a=s.getPropertyOptions(c),l=a.converter,d=(n=(o=(r=l)===null||r===void 0?void 0:r.fromAttribute)!==null&&o!==void 0?o:typeof l=="function"?l:null)!==null&&n!==void 0?n:ae.fromAttribute;this._$Ei=c,this[c]=d(e,a.type),this._$Ei=null}}requestUpdate(t,e,r){let o=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||ze)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Ei!==t&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(t,r))):o=!1),!this.isUpdatePending&&o&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((o,n)=>this[n]=o),this._$Et=void 0);let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$Eg)===null||t===void 0||t.forEach(o=>{var n;return(n=o.hostUpdate)===null||n===void 0?void 0:n.call(o)}),this.update(r)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var o;return(o=r.hostUpdated)===null||o===void 0?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$E_!==void 0&&(this._$E_.forEach((e,r)=>this._$ES(r,this[r],e)),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}};F.finalized=!0,F.elementProperties=new Map,F.elementStyles=[],F.shadowRootOptions={mode:"open"},Re==null||Re({ReactiveElement:F}),((se=globalThis.reactiveElementVersions)!==null&&se!==void 0?se:globalThis.reactiveElementVersions=[]).push("1.0.2");var ce,ot=globalThis.trustedTypes,Be=ot?ot.createPolicy("lit-html",{createHTML:i=>i}):void 0,H=`lit$${(Math.random()+"").slice(9)}$`,Fe="?"+H,Br=`<${Fe}>`,nt=document,Ct=(i="")=>nt.createComment(i),Pt=i=>i===null||typeof i!="object"&&typeof i!="function",He=Array.isArray,Fr=i=>{var t;return He(i)||typeof((t=i)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},Mt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Le=/-->/g,Ue=/>/g,Z=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Oe=/'/g,je=/"/g,qe=/^(?:script|style|textarea)$/i,Ve=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),L=Ve(1),pi=Ve(2),J=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),We=new WeakMap,Ke=(i,t,e)=>{var r,o;let n=(r=e==null?void 0:e.renderBefore)!==null&&r!==void 0?r:t,s=n._$litPart$;if(s===void 0){let c=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:null;n._$litPart$=s=new ct(t.insertBefore(Ct(),c),c,void 0,e??{})}return s._$AI(i),s},st=nt.createTreeWalker(nt,129,null,!1),Hr=(i,t)=>{let e=i.length-1,r=[],o,n=t===2?"<svg>":"",s=Mt;for(let a=0;a<e;a++){let l=i[a],d,u,h=-1,p=0;for(;p<l.length&&(s.lastIndex=p,u=s.exec(l),u!==null);)p=s.lastIndex,s===Mt?u[1]==="!--"?s=Le:u[1]!==void 0?s=Ue:u[2]!==void 0?(qe.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=Z):u[3]!==void 0&&(s=Z):s===Z?u[0]===">"?(s=o??Mt,h=-1):u[1]===void 0?h=-2:(h=s.lastIndex-u[2].length,d=u[1],s=u[3]===void 0?Z:u[3]==='"'?je:Oe):s===je||s===Oe?s=Z:s===Le||s===Ue?s=Mt:(s=Z,o=void 0);let f=s===Z&&i[a+1].startsWith("/>")?" ":"";n+=s===Mt?l+Br:h>=0?(r.push(d),l.slice(0,h)+"$lit$"+l.slice(h)+H+f):l+H+(h===-2?(r.push(void 0),a):f)}let c=n+(i[e]||"<?>")+(t===2?"</svg>":"");return[Be!==void 0?Be.createHTML(c):c,r]},at=class{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let n=0,s=0,c=t.length-1,a=this.parts,[l,d]=Hr(t,e);if(this.el=at.createElement(l,r),st.currentNode=this.el.content,e===2){let u=this.el.content,h=u.firstChild;h.remove(),u.append(...h.childNodes)}for(;(o=st.nextNode())!==null&&a.length<c;){if(o.nodeType===1){if(o.hasAttributes()){let u=[];for(let h of o.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(H)){let p=d[s++];if(u.push(h),p!==void 0){let f=o.getAttribute(p.toLowerCase()+"$lit$").split(H),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:n,name:m[2],strings:f,ctor:m[1]==="."?Ze:m[1]==="?"?Je:m[1]==="@"?Qe:kt})}else a.push({type:6,index:n})}for(let h of u)o.removeAttribute(h)}if(qe.test(o.tagName)){let u=o.textContent.split(H),h=u.length-1;if(h>0){o.textContent=ot?ot.emptyScript:"";for(let p=0;p<h;p++)o.append(u[p],Ct()),st.nextNode(),a.push({type:2,index:++n});o.append(u[h],Ct())}}}else if(o.nodeType===8)if(o.data===Fe)a.push({type:2,index:n});else{let u=-1;for(;(u=o.data.indexOf(H,u+1))!==-1;)a.push({type:7,index:n}),u+=H.length-1}n++}}static createElement(t,e){let r=nt.createElement("template");return r.innerHTML=t,r}};function lt(i,t,e=i,r){var o,n,s,c;if(t===J)return t;let a=r!==void 0?(o=e._$Cl)===null||o===void 0?void 0:o[r]:e._$Cu,l=Pt(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((n=a==null?void 0:a._$AO)===null||n===void 0||n.call(a,!1),l===void 0?a=void 0:(a=new l(i),a._$AT(i,e,r)),r!==void 0?((s=(c=e)._$Cl)!==null&&s!==void 0?s:c._$Cl=[])[r]=a:e._$Cu=a),a!==void 0&&(t=lt(i,a._$AS(i,t.values),a,r)),t}var Ge=class{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;let{el:{content:r},parts:o}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:nt).importNode(r,!0);st.currentNode=n;let s=st.nextNode(),c=0,a=0,l=o[0];for(;l!==void 0;){if(c===l.index){let d;l.type===2?d=new ct(s,s.nextSibling,this,t):l.type===1?d=new l.ctor(s,l.name,l.strings,this,t):l.type===6&&(d=new Ye(s,this,t)),this.v.push(d),l=o[++a]}c!==(l==null?void 0:l.index)&&(s=st.nextNode(),c++)}return n}m(t){let e=0;for(let r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},ct=class{constructor(t,e,r,o){var n;this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cg=(n=o==null?void 0:o.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=lt(this,t,e),Pt(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==J&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.S(t):Fr(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==y&&Pt(this._$AH)?this._$AA.nextSibling.data=t:this.S(nt.createTextNode(t)),this._$AH=t}T(t){var e;let{values:r,_$litType$:o}=t,n=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=at.createElement(o.h,this.options)),o);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.m(r);else{let s=new Ge(n,this),c=s.p(this.options);s.m(r),this.S(c),this._$AH=s}}_$AC(t){let e=We.get(t.strings);return e===void 0&&We.set(t.strings,e=new at(t)),e}M(t){He(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,o=0;for(let n of t)o===e.length?e.push(r=new ct(this.A(Ct()),this.A(Ct()),this,this.options)):r=e[o],r._$AI(n),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,e);t&&t!==this._$AB;){let o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},kt=class{constructor(t,e,r,o,n){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,o){let n=this.strings,s=!1;if(n===void 0)t=lt(this,t,e,0),s=!Pt(t)||t!==this._$AH&&t!==J,s&&(this._$AH=t);else{let c=t,a,l;for(t=n[0],a=0;a<n.length-1;a++)l=lt(this,c[r+a],e,a),l===J&&(l=this._$AH[a]),s||(s=!Pt(l)||l!==this._$AH[a]),l===y?t=y:t!==y&&(t+=(l??"")+n[a+1]),this._$AH[a]=l}s&&!o&&this.k(t)}k(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ze=class extends kt{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===y?void 0:t}},Lr=ot?ot.emptyScript:"",Je=class extends kt{constructor(){super(...arguments),this.type=4}k(t){t&&t!==y?this.element.setAttribute(this.name,Lr):this.element.removeAttribute(this.name)}},Qe=class extends kt{constructor(t,e,r,o,n){super(t,e,r,o,n),this.type=5}_$AI(t,e=this){var r;if((t=(r=lt(this,t,e,0))!==null&&r!==void 0?r:y)===J)return;let o=this._$AH,n=t===y&&o!==y||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==y&&(o===y||n);n&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;typeof this._$AH=="function"?this._$AH.call((r=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}},Ye=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){lt(this,t)}};var Xe=window.litHtmlPolyfillSupport;Xe==null||Xe(at,ct),((ce=globalThis.litHtmlVersions)!==null&&ce!==void 0?ce:globalThis.litHtmlVersions=[]).push("2.0.2");var ue,he;var x=class extends F{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;let r=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=r.firstChild),r}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Ke(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return J}};x.finalized=!0,x._$litElement$=!0,(ue=globalThis.litElementHydrateSupport)===null||ue===void 0||ue.call(globalThis,{LitElement:x});var tr=globalThis.litElementPolyfillSupport;tr==null||tr({LitElement:x});((he=globalThis.litElementVersions)!==null&&he!==void 0?he:globalThis.litElementVersions=[]).push("3.0.2");var Q=i=>t=>typeof t=="function"?((e,r)=>(window.customElements.define(e,r),r))(i,t):((e,r)=>{let{kind:o,elements:n}=r;return{kind:o,elements:n,finisher(s){window.customElements.define(e,s)}}})(i,t);var Ur=(i,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,i)}};function b(i){return(t,e)=>e!==void 0?((r,o,n)=>{o.constructor.createProperty(n,r)})(i,t,e):Ur(i,t)}var ut=({finisher:i,descriptor:t})=>(e,r)=>{var o;if(r===void 0){let n=(o=e.originalKey)!==null&&o!==void 0?o:e.key,s=t!=null?{kind:"method",placement:"prototype",key:n,descriptor:t(e.key)}:{...e,key:n};return i!=null&&(s.finisher=function(c){i(c,n)}),s}{let n=e.constructor;t!==void 0&&Object.defineProperty(e,r,t(r)),i==null||i(n,r)}};function er(i,t){return ut({descriptor:e=>{let r={get(){var o,n;return(n=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(i))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(t){let o=typeof e=="symbol"?Symbol():"__"+e;r.get=function(){var n,s;return this[o]===void 0&&(this[o]=(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(i))!==null&&s!==void 0?s:null),this[o]}}return r}})}var k={accidentalMode:1,frequencyOfA:440,debugMode:undefined};var A=class{};A.map=(t,e,r)=>(t-e[0])*(r[1]-r[0])/(e[1]-e[0])+r[0],A.clamp=(t,e)=>Math.min(Math.max(t,e[0]),e[1]),A.round=(t,e)=>Number(Math.round(Number(t+"e"+e))+"e-"+e);var ht=12,Or=["C","C","D","D","E","F","F","G","G","A","A","B"],jr=[1,3,6,8,10],qr=["C","D","D","E","E","F","G","G","A","A","B","B"],Y;(function(e){e[e.sharp=0]="sharp",e[e.flat=1]="flat"})(Y||(Y={}));var E=class{get letter(){return this.lookupLetter()}get accidental(){return this.lookupAccidental()}constructor(t){this.index=A.clamp(t,[0,127]),this.octave=Math.floor(t/ht)-1}lookupLetter(){return k.accidentalMode?Or[this.index%ht]:qr[this.index%ht]}lookupAccidental(){return jr.includes(this.index%ht)?k.accidentalMode?"#":"b":""}},de=new E(0),Vr=new E(69),rr=new E(127),dt=class{static freqToNote(t){if(t<this.noteToPitch(de))return de;if(t>this.noteToPitch(rr))return rr;let e=Math.round(ht*Math.log2(t/this.noteToPitch(de)));if(isNaN(e))throw new Error("calculated frequency produced NaN");return new E(e)}static noteToPitch(t){let e=t.index-Vr.index,r=Xt(2,1/ht);return k.frequencyOfA*Xt(r,e)}};var Wr=B`
  .tuner-note-container {
    width: 100%;
    height: 100%;
    text-align: center;
    font-family: "Lalezar";
  }

  .tuner-note-border {
    stroke: var(--outline-color);
  }

  .tuner-note-letter {
    stroke: var(--outline-color);
    stroke-width: 3;
    font-size: 4em;
  }

  .tuner-note-letter-mask {
    stroke: black;
    fill: white;
    font-size: 4em;
  }

  .tuner-note-accidental {
    stroke: var(--outline-color);
    stroke-width: 1;
    font-size: 2em;
  }

  .tuner-note-accidental-mask {
    stroke: black;
    stroke-width: 1;
    fill: white;
    font-size: 2em;
  }

  .tuner-note-octave {
    stroke: var(--outline-color);
    stroke-width: 1;
    font-size: 2em;
  }

  .tuner-note-octave-mask {
    stroke: black;
    stroke-width: 1;
    fill: white;
    font-size: 2em;
  }

  .tuner-liquid {
    fill: var(--primary-color);
  }

  .test {
    stroke: var(--outline-color);
    stroke-width: 3;
    fill: var(--primary-color);
    font-weight: bold;
  }
`,w=class extends x{constructor(){super();this.note=new E(0);this.clarity=1;this.accuracy=0;this.accuracyBuffer=[w.bufferSize];this.heightAnimator=new Lt}updateHeightAnimation(){if(this.heightAnimatorReference)this.heightAnimator.reference=this.heightAnimatorReference;else return;let t=A.map(this.accuracy,[0,1],[90,25]);this.heightAnimator.to=t+""}update(t){super.update(t),!isNaN(Number(t.get("accuracy")))&&this.updateHeightAnimation()}render(){return L`
            <div class="tuner-note-container">
                <svg id="view" viewBox="0 0 100 100" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
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
                        <text id="note-accidental" x="65%" y="25%" dominant-baseline="central"
                              text-anchor="middle">
                            ${this.note.accidental}
                        </text>
                        <text id="note-octave" x="65%" y="65%" dominant-baseline="central" text-anchor="middle">
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
        `}};w.styles=Wr,w.bufferSize=25,v([b()],w.prototype,"note",2),v([b()],w.prototype,"clarity",2),v([b({type:Number})],w.prototype,"accuracy",2),v([er("#height-animator")],w.prototype,"heightAnimatorReference",2),w=v([Q("tn-tuner-note")],w);var pt=class{set reference(t){this._reference=t}get from(){return this._reference.getAttribute("values").match(pt.fromMatcher)[0]}set from(t){this._reference.setAttribute("values",this._reference.getAttribute("values").replace(pt.fromMatcher,t))}get to(){return this._reference.getAttribute("values").match(pt.toMatcher)[0]}set to(t){this._reference.setAttribute("values",this._reference.getAttribute("values").replace(pt.toMatcher,t))}onEndEvent(){this.from=this.to}},Lt=pt;Lt.fromMatcher=/-?\d+\.?\d*(?=;)/g,Lt.toMatcher=/-?\d+\.?\d*$/g;var fe={};zt(fe,{CircleComponent:()=>C,TunerRingComponent:()=>X});var cr=ee(lr()),ei=B`
  :host {
    --needle-degree: 0rad;
    --opacity: 1;
  }

  .tuner-ring {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .tuner-needle {
    --width: 5px;

    background: white;

    width: var(--width);
    height: 50%;

    position: absolute;
    left: calc(50% - (var(--width) / 2));

    opacity: var(--opacity);
    transform: rotate(var(--needle-degree));
    transform-origin: bottom;
  }

  .ring {
    position: relative;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    outline: 0.5rem solid white;
    outline-offset: -0.25rem;
  }

  .circles {
    outline: red;
  }
`,X=class extends x{constructor(){super(...arguments);this.accuracy=0;this.frequencyDegree=0}updated(){this.frequencyDegree=this.convertAccuracyToRadians(),this.style.setProperty("--needle-degree",this.frequencyDegree+"rad")}convertAccuracyToRadians(){let t=this.accuracy*(Math.PI/2)-Math.PI/2;return this.pitchAccidental==Y.sharp&&(t*=-1),t}render(){let t=[],e=16;for(let r=0;r<e;r++){let o=Math.PI/e*r;t.push(L`
                <tn-circle .index="${r}" .frequencyDegree="${this.frequencyDegree}"
                           .targetDegree="${o-Math.PI/2}"></tn-circle>
            `)}return L`
            <div class="tuner-ring">
                <!--                <div class="tuner-needle"></div>-->
                <div class="ring">
                    <span class="circles">
                        ${t}
                    </span>
                </div>
            </div>
        `}};X.styles=ei,v([b()],X.prototype,"accuracy",2),v([b()],X.prototype,"pitchAccidental",2),X=v([Q("tn-tuner-ring")],X);var ri=B`
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
    border-radius: 50%;
    height: 1rem;
    width: 1rem;
    //outline: 0.1rem solid var(--outline-color);
    //outline-offset: -0.1rem;
    border: 0.1rem solid var(--outline-color);
    background-color: var(--primary-color);
    transform: translate(-50%, 50%) rotate(var(--angle)) scaleX(var(--x-scale)) scaleY(var(--y-scale));
    z-index: var(--z-index);
    opacity: var(--opacity);

    transition: all cubic-bezier(0, 0, .2, 1.3) 300ms, z-index 0ms;
  }

`,C=class extends x{constructor(){super(...arguments);this.frequencyDegree=0;this.targetDegree=0;this.index=0}connectedCallback(){super.connectedCallback(),this.setupPosition()}updated(){let t=C.angleDifference(this.targetDegree,this.frequencyDegree),e=[0,Math.PI],r=(0,cr.default)(0,0,1,0),o=A.map(t,e,[1,0]),n=A.map(t,e,[0,1]),s=r(o)*5,c=r(n)*15,a=s,l=Math.floor(A.map(t,e,[23,4]));this.style.setProperty("--x-scale",s+c+""),this.style.setProperty("--y-scale",s+""),this.style.setProperty("--z-index",l+""),this.style.setProperty("--opacity",a+"")}static angleDifference(t,e){let r=t-e;return r+=r>Math.PI?-(2*Math.PI):r<-Math.PI?2*Math.PI:0,Math.abs(r)}setupPosition(){let t=50*Math.cos(this.targetDegree)+50+"%",e=50*Math.sin(this.targetDegree)+50+"%";this.style.setProperty("--bottom",t),this.style.setProperty("--left",e),this.style.setProperty("--angle",this.targetDegree+"rad")}};C.styles=ri,v([b()],C.prototype,"frequencyDegree",2),v([b()],C.prototype,"targetDegree",2),v([b()],C.prototype,"index",2),C=v([Q("tn-circle")],C);var Ee={};zt(Ee,{TunerComponent:()=>I});function me(i){if(Array.isArray(i))return i}function ve(i,t){var e=i==null?null:typeof Symbol!="undefined"&&i[Symbol.iterator]||i["@@iterator"];if(e!=null){var r=[],o=!0,n=!1,s,c;try{for(e=e.call(i);!(o=(s=e.next()).done)&&(r.push(s.value),!(t&&r.length===t));o=!0);}catch(a){n=!0,c=a}finally{try{!o&&e.return!=null&&e.return()}finally{if(n)throw c}}return r}}function ft(i,t){(t==null||t>i.length)&&(t=i.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=i[e];return r}function Dt(i,t){if(!!i){if(typeof i=="string")return ft(i,t);var e=Object.prototype.toString.call(i).slice(8,-1);if(e==="Object"&&i.constructor&&(e=i.constructor.name),e==="Map"||e==="Set")return Array.from(i);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return ft(i,t)}}function ye(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _e(i,t){return me(i)||ve(i,t)||Dt(i,t)||ye()}function ge(i){if(Array.isArray(i))return ft(i)}function be(i){if(typeof Symbol!="undefined"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function Ae(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $e(i){return ge(i)||be(i)||Dt(i)||Ae()}function jt(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")}function ur(i,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(i,r.key,r)}}function qt(i,t,e){return t&&ur(i.prototype,t),e&&ur(i,e),i}function T(i,t,e){return t in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}var mr=ee(dr()),vr=ee(fr()),ii=function(){function i(t,e){if(jt(this,i),T(this,"_inputLength",void 0),T(this,"_fft",void 0),T(this,"_bufferSupplier",void 0),T(this,"_paddedInputBuffer",void 0),T(this,"_transformBuffer",void 0),T(this,"_inverseBuffer",void 0),t<1)throw new Error("Input length must be at least one");this._inputLength=t,this._fft=new mr.default((0,vr.default)(2*t)),this._bufferSupplier=e,this._paddedInputBuffer=this._bufferSupplier(this._fft.size),this._transformBuffer=this._bufferSupplier(2*this._fft.size),this._inverseBuffer=this._bufferSupplier(2*this._fft.size)}return qt(i,[{key:"inputLength",get:function(){return this._inputLength}},{key:"autocorrelate",value:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this._bufferSupplier(e.length);if(e.length!==this._inputLength)throw new Error("Input must have length ".concat(this._inputLength," but had length ").concat(e.length));for(var o=0;o<e.length;o++)this._paddedInputBuffer[o]=e[o];for(var n=e.length;n<this._paddedInputBuffer.length;n++)this._paddedInputBuffer[n]=0;this._fft.realTransform(this._transformBuffer,this._paddedInputBuffer),this._fft.completeSpectrum(this._transformBuffer);for(var s=this._transformBuffer,c=0;c<s.length;c+=2)s[c]=s[c]*s[c]+s[c+1]*s[c+1],s[c+1]=0;this._fft.inverseTransform(this._inverseBuffer,this._transformBuffer);for(var a=0;a<e.length;a++)r[a]=this._inverseBuffer[2*a];return r}}],[{key:"forFloat32Array",value:function(e){return new i(e,function(r){return new Float32Array(r)})}},{key:"forFloat64Array",value:function(e){return new i(e,function(r){return new Float64Array(r)})}},{key:"forNumberArray",value:function(e){return new i(e,function(r){return Array(r)})}}]),i}();function oi(i){for(var t=[],e=!1,r=-1/0,o=-1,n=1;n<i.length-1;n++)i[n-1]<=0&&i[n]>0?(e=!0,o=n,r=i[n]):i[n-1]>0&&i[n]<=0?(e=!1,o!==-1&&t.push(o)):e&&i[n]>r&&(r=i[n],o=n);return t}function ni(i,t){var e=i-1,r=i,o=i+1,n=[t[e],t[r],t[o]],s=n[0],c=n[1],a=n[2],l=s/2-c+a/2,d=-(s/2)*(r+o)+c*(e+o)-a/2*(e+r),u=s*r*o/2-c*e*o+a*e*r/2,h=-d/(2*l),p=l*h*h+d*h+u;return[h,p]}var yr=function(){function i(t,e){jt(this,i),T(this,"_autocorrelator",void 0),T(this,"_nsdfBuffer",void 0),T(this,"_clarityThreshold",.9),this._autocorrelator=new ii(t,e),this._nsdfBuffer=e(t)}return qt(i,[{key:"inputLength",get:function(){return this._autocorrelator.inputLength}},{key:"findPitch",value:function(e,r){var o=this;this._nsdf(e);var n=oi(this._nsdfBuffer);if(n.length===0)return[0,0];var s=Math.max.apply(Math,$e(n.map(function(h){return o._nsdfBuffer[h]}))),c=n.find(function(h){return o._nsdfBuffer[h]>=o._clarityThreshold*s}),a=ni(c,this._nsdfBuffer),l=_e(a,2),d=l[0],u=l[1];return[r/d,Math.min(u,1)]}},{key:"_nsdf",value:function(e){this._autocorrelator.autocorrelate(e,this._nsdfBuffer);var r=2*this._nsdfBuffer[0],o;for(o=0;o<this._nsdfBuffer.length&&r>0;o++)this._nsdfBuffer[o]=2*this._nsdfBuffer[o]/r,r-=Math.pow(e[o],2)+Math.pow(e[e.length-o-1],2);for(;o<this._nsdfBuffer.length;o++)this._nsdfBuffer[o]=0}}],[{key:"forFloat32Array",value:function(e){return new i(e,function(r){return new Float32Array(r)})}},{key:"forFloat64Array",value:function(e){return new i(e,function(r){return new Float64Array(r)})}},{key:"forNumberArray",value:function(e){return new i(e,function(r){return Array(r)})}}]),i}();var mt=class{static debug(...t){k.debugMode&&console.debug(t)}static error(...t){console.error(t)}};var Se=class{constructor(t=new _r,e=17){this.refreshRate=e,this._audioSource=t,this.pitchDetector=yr.forFloat32Array(this._audioSource.analyserNode.fftSize)}startListening(){this._audioSource.connect().then(()=>{this.intervalReference=window.setInterval(this.listen.bind(this),this.refreshRate)})}stopListening(){window.clearInterval(this.intervalReference)}setOnListen(t){this.onListen=t}get pitch(){return this._pitch}get clarity(){return this._clarity}get audioSource(){return this._audioSource}set audioSource(t){this._audioSource=t}listen(){let t=new Float32Array(this.pitchDetector.inputLength);this._audioSource.analyserNode.getFloatTimeDomainData(t),[this._pitch,this._clarity]=this.pitchDetector.findPitch(t,this._audioSource.audioContext.sampleRate),this.pitch===0&&mt.debug("Pitch not detected.",this._pitch,this._clarity),this.onListen(this._pitch,this._clarity)}},_r=class{constructor(){this.audioContext=new AudioContext,this.analyserNode=new AnalyserNode(this.audioContext)}connect(){return re(this,null,function*(){let t;try{console.log(navigator.mediaDevices),t=yield navigator.mediaDevices.getUserMedia({audio:!0})}catch(e){console.log(e)}return this.sourceNode=this.audioContext.createMediaStreamSource(t),this.sourceNode.connect(this.analyserNode),yield this.audioContext.resume(),this})}},xe=class{constructor(){this.audioContext=new AudioContext,this.analyserNode=new AnalyserNode(this.audioContext)}connect(){return re(this,null,function*(){return this.sourceNode=this.audioContext.createOscillator(),this.sourceNode.type="sine",this.sourceNode.frequency.setValueAtTime(440,this.audioContext.currentTime),this.sourceNode.start(),this.sourceNode.connect(this.analyserNode),yield this.audioContext.resume(),this})}set frequency(t){this.sourceNode.frequency.setValueAtTime(t,this.audioContext.currentTime)}};var we=class{constructor(t){if(t<1)throw new RangeError("Buffer size cannot be below zero.");this._bufferSize=t,this._buffer=[]}get average(){return this._buffer.reduce((t,e)=>t+e)/this._buffer.length}add(t){this._buffer.includes(t)||(this._buffer.push(t),this._buffer.length===this._bufferSize+1&&this._buffer.shift())}get bufferSize(){return this._bufferSize}};var si=B`
  .tuner-body {
    width: 100vw;
    height: 100vh;
  }
`,I=class extends x{constructor(){super(...arguments);this.pitchDetectorService=new Se;this.accuracyBuffer=new we(10);this.note=new E(0);this.accuracy=0;this.clarity=1;this.inTune=!1}connectedCallback(){super.connectedCallback(),this.pitchDetectorService.setOnListen((t,e)=>{if(this.clarity=e,e>.98)this.note=dt.freqToNote(t);else return;let r=dt.noteToPitch(this.note),o=dt.noteToPitch(new E(this.note.index-1)),n=dt.noteToPitch(new E(this.note.index+1)),s;t<r?(this.pitchAccidental=Y.flat,s=A.map(t,[o,r],[-1,1])):(this.pitchAccidental=Y.sharp,s=A.map(t,[n,r],[-1,1])),s<0&&(s=0),this.inTune=s>.95,this.accuracyBuffer.add(s),this.accuracy=A.round(this.accuracyBuffer.average,2)}),k.debugMode&&(this.pitchDetectorService.audioSource=new xe),this.pitchDetectorService.startListening()}disconnectedCallback(){super.disconnectedCallback(),this.pitchDetectorService.stopListening()}updateOscillatorFrequency(t){let e=this.pitchDetectorService.audioSource;e.frequency=Number(t.target.value)}setPlayback(t){t.target.checked?this.pitchDetectorService.audioSource.sourceNode.connect(this.pitchDetectorService.audioSource.audioContext.destination):this.pitchDetectorService.audioSource.sourceNode.disconnect(this.pitchDetectorService.audioSource.audioContext.destination)}resumeContext(){this.pitchDetectorService.audioSource.audioContext.resume().then(()=>{mt.debug("Audio source resumed")},t=>{mt.error("Audio source failed to resume",t)})}render(){return L`
            ${k.debugMode?L`
                        ${this.inTune}
                        ${this.accuracy}
                        <div data-test-id="tuner.debug-info">
                            <input type="range" min="400"
                                   max="1300"
                                   @input="${this.updateOscillatorFrequency}">
                        </div>
                        <div data-test-id="tuner.audio-slider">
                            Audio Playback: <input type="checkbox" @input="${this.setPlayback}">
                        </div>
                    `:""}
            <div class="tuner-body" data-test-id="tuner.body" @click="${this.resumeContext}">
                    <!--                <tn-tuner-ring .accuracy="${this.accuracy}
                    " .pitchAccidental="${this.pitchAccidental}"></tn-tuner-ring>-->
                <tn-tuner-note .note="${this.note}" .accuracy="${this.accuracy}"
                               .clarity="${this.clarity}"></tn-tuner-note>
            </div>
        `}};I.styles=si,v([b()],I.prototype,"note",2),v([b()],I.prototype,"accuracy",2),v([b()],I.prototype,"clarity",2),v([b()],I.prototype,"pitchAccidental",2),I=v([Q("tn-tuner")],I);var ai=[ie,pe,fe,Ee],gr=ai;gr[0].default;})();
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

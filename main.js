(()=>{var bi=Object.create;var jt=Object.defineProperty;var or=Object.getOwnPropertyDescriptor;var yi=Object.getOwnPropertyNames;var wi=Object.getPrototypeOf,_i=Object.prototype.hasOwnProperty;var Ee=Math.pow;var nr=a=>jt(a,"__esModule",{value:!0});var tt=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports),H=(a,t)=>{nr(a);for(var e in t)jt(a,e,{get:t[e],enumerable:!0})},Ai=(a,t,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of yi(t))!_i.call(a,r)&&r!=="default"&&jt(a,r,{get:()=>t[r],enumerable:!(e=or(t,r))||e.enumerable});return a},Ce=a=>Ai(nr(jt(a!=null?bi(wi(a)):{},"default",a&&a.__esModule&&"default"in a?{get:()=>a.default,enumerable:!0}:{value:a,enumerable:!0})),a),w=(a,t,e,r)=>{for(var i=r>1?void 0:r?or(t,e):t,o=a.length-1,n;o>=0;o--)(n=a[o])&&(i=(r?n(t,e,i):n(i))||i);return r&&i&&jt(t,e,i),i};var sr=(a,t,e)=>new Promise((r,i)=>{var o=c=>{try{s(e.next(c))}catch(l){i(l)}},n=c=>{try{s(e.throw(c))}catch(l){i(l)}},s=c=>c.done?r(c.value):Promise.resolve(c.value).then(o,n);s((e=e.apply(a,t)).next())});var Rr=tt((Io,Nr)=>{"use strict";function D(a){if(this.size=a|0,this.size<=1||(this.size&this.size-1)!=0)throw new Error("FFT size must be a power of two and bigger than 1");this._csize=a<<1;for(var t=new Array(this.size*2),e=0;e<t.length;e+=2){let c=Math.PI*e/this.size;t[e]=Math.cos(c),t[e+1]=-Math.sin(c)}this.table=t;for(var r=0,i=1;this.size>i;i<<=1)r++;this._width=r%2==0?r-1:r,this._bitrev=new Array(1<<this._width);for(var o=0;o<this._bitrev.length;o++){this._bitrev[o]=0;for(var n=0;n<this._width;n+=2){var s=this._width-n-2;this._bitrev[o]|=(o>>>n&3)<<s}}this._out=null,this._data=null,this._inv=0}Nr.exports=D;D.prototype.fromComplexArray=function(t,e){for(var r=e||new Array(t.length>>>1),i=0;i<t.length;i+=2)r[i>>>1]=t[i];return r};D.prototype.createComplexArray=function(){let t=new Array(this._csize);for(var e=0;e<t.length;e++)t[e]=0;return t};D.prototype.toComplexArray=function(t,e){for(var r=e||this.createComplexArray(),i=0;i<r.length;i+=2)r[i]=t[i>>>1],r[i+1]=0;return r};D.prototype.completeSpectrum=function(t){for(var e=this._csize,r=e>>>1,i=2;i<r;i+=2)t[e-i]=t[i],t[e-i+1]=-t[i+1]};D.prototype.transform=function(t,e){if(t===e)throw new Error("Input and output buffers must be different");this._out=t,this._data=e,this._inv=0,this._transform4(),this._out=null,this._data=null};D.prototype.realTransform=function(t,e){if(t===e)throw new Error("Input and output buffers must be different");this._out=t,this._data=e,this._inv=0,this._realTransform4(),this._out=null,this._data=null};D.prototype.inverseTransform=function(t,e){if(t===e)throw new Error("Input and output buffers must be different");this._out=t,this._data=e,this._inv=1,this._transform4();for(var r=0;r<t.length;r++)t[r]/=this.size;this._out=null,this._data=null};D.prototype._transform4=function(){var t=this._out,e=this._csize,r=this._width,i=1<<r,o=e/i<<1,n,s,c=this._bitrev;if(o===4)for(n=0,s=0;n<e;n+=o,s++){let _=c[s];this._singleTransform2(n,_,i)}else for(n=0,s=0;n<e;n+=o,s++){let _=c[s];this._singleTransform4(n,_,i)}var l=this._inv?-1:1,m=this.table;for(i>>=2;i>=2;i>>=2){o=e/i<<1;var h=o>>>2;for(n=0;n<e;n+=o)for(var d=n+h,g=n,y=0;g<d;g+=2,y+=i){let _=g,A=_+h,u=A+h,f=u+h,p=t[_],v=t[_+1],b=t[A],x=t[A+1],C=t[u],N=t[u+1],L=t[f],z=t[f+1],q=p,R=v,Y=m[y],W=l*m[y+1],U=b*Y-x*W,M=b*W+x*Y,j=m[2*y],J=l*m[2*y+1],K=C*j-N*J,Z=C*J+N*j,ot=m[3*y],Q=l*m[3*y+1],X=L*ot-z*Q,Lt=L*Q+z*ot,Ot=q+K,bt=R+Z,yt=q-K,Dt=R-Z,qt=U+X,wt=M+Lt,_t=l*(U-X),Ut=l*(M-Lt),ae=Ot+qt,ye=bt+wt,we=Ot-qt,_e=bt-wt,Ae=yt+Ut,ke=Dt-_t,xe=yt-Ut,$e=Dt+_t;t[_]=ae,t[_+1]=ye,t[A]=Ae,t[A+1]=ke,t[u]=we,t[u+1]=_e,t[f]=xe,t[f+1]=$e}}};D.prototype._singleTransform2=function(t,e,r){let i=this._out,o=this._data,n=o[e],s=o[e+1],c=o[e+r],l=o[e+r+1],m=n+c,h=s+l,d=n-c,g=s-l;i[t]=m,i[t+1]=h,i[t+2]=d,i[t+3]=g};D.prototype._singleTransform4=function(t,e,r){let i=this._out,o=this._data,n=this._inv?-1:1,s=r*2,c=r*3,l=o[e],m=o[e+1],h=o[e+r],d=o[e+r+1],g=o[e+s],y=o[e+s+1],_=o[e+c],A=o[e+c+1],u=l+g,f=m+y,p=l-g,v=m-y,b=h+_,x=d+A,C=n*(h-_),N=n*(d-A),L=u+b,z=f+x,q=p+N,R=v-C,Y=u-b,W=f-x,U=p-N,M=v+C;i[t]=L,i[t+1]=z,i[t+2]=q,i[t+3]=R,i[t+4]=Y,i[t+5]=W,i[t+6]=U,i[t+7]=M};D.prototype._realTransform4=function(){var t=this._out,e=this._csize,r=this._width,i=1<<r,o=e/i<<1,n,s,c=this._bitrev;if(o===4)for(n=0,s=0;n<e;n+=o,s++){let Se=c[s];this._singleRealTransform2(n,Se>>>1,i>>>1)}else for(n=0,s=0;n<e;n+=o,s++){let Se=c[s];this._singleRealTransform4(n,Se>>>1,i>>>1)}var l=this._inv?-1:1,m=this.table;for(i>>=2;i>=2;i>>=2){o=e/i<<1;var h=o>>>1,d=h>>>1,g=d>>>1;for(n=0;n<e;n+=o)for(var y=0,_=0;y<=g;y+=2,_+=i){var A=n+y,u=A+d,f=u+d,p=f+d,v=t[A],b=t[A+1],x=t[u],C=t[u+1],N=t[f],L=t[f+1],z=t[p],q=t[p+1],R=v,Y=b,W=m[_],U=l*m[_+1],M=x*W-C*U,j=x*U+C*W,J=m[2*_],K=l*m[2*_+1],Z=N*J-L*K,ot=N*K+L*J,Q=m[3*_],X=l*m[3*_+1],Lt=z*Q-q*X,Ot=z*X+q*Q,bt=R+Z,yt=Y+ot,Dt=R-Z,qt=Y-ot,wt=M+Lt,_t=j+Ot,Ut=l*(M-Lt),ae=l*(j-Ot),ye=bt+wt,we=yt+_t,_e=Dt+ae,Ae=qt-Ut;if(t[A]=ye,t[A+1]=we,t[u]=_e,t[u+1]=Ae,y===0){var ke=bt-wt,xe=yt-_t;t[f]=ke,t[f+1]=xe;continue}if(y!==g){var $e=Dt,si=-qt,li=bt,ci=-yt,di=-l*ae,hi=-l*Ut,ui=-l*_t,mi=-l*wt,fi=$e+di,pi=si+hi,vi=li+mi,gi=ci-ui,ir=n+d-y,ar=n+h-y;t[ir]=fi,t[ir+1]=pi,t[ar]=vi,t[ar+1]=gi}}}};D.prototype._singleRealTransform2=function(t,e,r){let i=this._out,o=this._data,n=o[e],s=o[e+r],c=n+s,l=n-s;i[t]=c,i[t+1]=0,i[t+2]=l,i[t+3]=0};D.prototype._singleRealTransform4=function(t,e,r){let i=this._out,o=this._data,n=this._inv?-1:1,s=r*2,c=r*3,l=o[e],m=o[e+r],h=o[e+s],d=o[e+c],g=l+h,y=l-h,_=m+d,A=n*(m-d),u=g+_,f=y,p=-A,v=g-_,b=y,x=A;i[t]=u,i[t+1]=0,i[t+2]=f,i[t+3]=p,i[t+4]=v,i[t+5]=0,i[t+6]=b,i[t+7]=x}});var zr=tt(Zt=>{"use strict";var le=Zt&&Zt.__assign||function(){return le=Object.assign||function(a){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(a[i]=t[i])}return a},le.apply(this,arguments)};Object.defineProperty(Zt,"__esModule",{value:!0});var Ni={threshold:.1,sampleRate:44100,probabilityThreshold:.1};function Ri(a){a===void 0&&(a={});var t=le(le({},Ni),a),e=t.threshold,r=t.sampleRate,i=t.probabilityThreshold;return function(n){var s;for(s=1;s<n.length;s*=2);s/=2;for(var c=s/2,l=new Float32Array(c),m=0,h,d=0;d<c;d++)l[d]=0;for(var d=1;d<c;d++)for(var g=0;g<c;g++){var y=n[g]-n[g+d];l[d]+=y*y}l[0]=1,l[1]=1;for(var _=0,d=1;d<c;d++)_+=l[d],l[d]*=d/_;for(h=2;h<c;h++)if(l[h]<e){for(;h+1<c&&l[h+1]<l[h];)h++;m=1-l[h];break}if(h===c||l[h]>=e||m<i)return null;var A,u,f;if(h<1?u=h:u=h-1,h+1<c?f=h+1:f=h,u===h)l[h]<=l[f]?A=h:A=f;else if(f===h)l[h]<=l[u]?A=h:A=u;else{var p=l[u],v=l[h],b=l[f];A=h+(b-p)/(2*(2*v-b-p))}return r/A}}Zt.YIN=Ri});var Lr=tt(Gt=>{"use strict";var ce=Gt&&Gt.__assign||function(){return ce=Object.assign||function(a){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(a[i]=t[i])}return a},ce.apply(this,arguments)};Object.defineProperty(Gt,"__esModule",{value:!0});var Ii={sampleRate:44100,minFrequency:82,maxFrequency:1e3,ratio:5,sensitivity:.1};function zi(a){a===void 0&&(a={});var t=ce(ce({},Ii),a),e=t.sampleRate,r=t.minFrequency,i=t.maxFrequency,o=t.sensitivity,n=t.ratio,s=[],c=Math.ceil(e/r),l=Math.floor(e/i);return function(h){var d=h.length,g=0,y=1/0,_=-1/0,A,u,f,p,v,b,x,C;for(p=0;p<d;p++)if(l<=p&&p<=c){for(x=0,C=p,g=0,A=[],u=[];x<d-p;g++,C++,x++)A[g]=h[x],u[g]=h[C];var N=A.length;for(f=[],b=0;b<N;b++)f[b]=A[b]-u[b];var L=0;for(b=0;b<N;b++)L+=Math.abs(f[b]);s[p]=L}for(v=l;v<c;v++)s[v]<y&&(y=s[v]),s[v]>_&&(_=s[v]);var z=Math.round(o*(_-y)+y);for(v=l;v<=c&&s[v]>z;v++);var q=l/2;y=s[v];var R=v;for(p=v-1;p<v+q&&p<=c;p++)s[p]<y&&(y=s[p],R=p);return Math.round(s[R]*n)<_?e/R:null}}Gt.AMDF=zi});var Dr=tt(Jt=>{"use strict";var de=Jt&&Jt.__assign||function(){return de=Object.assign||function(a){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(a[i]=t[i])}return a},de.apply(this,arguments)};Object.defineProperty(Jt,"__esModule",{value:!0});var Or={sampleRate:44100};function Li(a){a===void 0&&(a=Or);var t=de(de({},Or),a),e=t.sampleRate;return function(i){var o=i.length,n=0,s,c,l,m;for(s=0;s<o;s++)m=i[s],n+=m*m;if(n=Math.sqrt(n/o),n<.01)return-1;var h=0,d=o-1,g=.2;for(s=0;s<o/2;s++)if(Math.abs(i[s])<g){h=s;break}for(s=1;s<o/2;s++)if(Math.abs(i[o-s])<g){d=o-s;break}var y=i.slice(h,d),_=y.length,A=new Array(_).fill(0);for(s=0;s<_;s++)for(c=0;c<_-s;c++)A[s]=A[s]+y[c]*y[c+s];for(l=0;A[l]>A[l+1];)l++;var u=-1,f=-1;for(s=l;s<_;s++)A[s]>u&&(u=A[s],f=s);var p=f,v=A[p-1],b=A[p],x=A[p+1],C=(v+x-2*b)/2,N=(x-v)/2;return C&&(p=p-N/(2*C)),e/p}}Jt.ACF2PLUS=Li});var qr=tt(Qt=>{"use strict";var he=Qt&&Qt.__assign||function(){return he=Object.assign||function(a){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(a[i]=t[i])}return a},he.apply(this,arguments)};Object.defineProperty(Qt,"__esModule",{value:!0});var Oi=6,Di=3e3,qi=3,Ui=.75,ji={sampleRate:44100};function Hi(a){a===void 0&&(a={});var t=he(he({},ji),a),e=t.sampleRate;return function(i){for(var o=[],n=[],s=i.length,c=null,l=0,m=0,h=0,d=0;d<s;d++){var g=i[d];l=l+g,h=Math.max(h,g),m=Math.min(m,g)}l/=s,m-=l,h-=l;for(var y=h>-1*m?h:-1*m,_=y*Ui,A=0,u=-1,f=i.length,p,v,b;p=~~(e/(Math.pow(2,A)*Di)),!(f<2);){var x=void 0,C=-1e3,N=-1e6,L=-1e6,z=!1,q=!1;b=0,v=0;for(var d=2;d<f;d++){var R=i[d]-l,Y=i[d-1]-l;Y<=0&&R>0&&(z=!0),Y>=0&&R<0&&(q=!0),x=R-Y,C>-1e3&&(q&&C<0&&x>=0&&Math.abs(R)>=_&&d>N+p&&(o[b++]=d,N=d,q=!1),z&&C>0&&x<=0&&Math.abs(R)>=_&&d>L+p&&(n[v++]=d,L=d,z=!1)),C=x}if(b===0&&v===0)break;for(var W=void 0,U=[],d=0;d<f;d++)U[d]=0;for(var d=0;d<b;d++)for(var M=1;M<qi;M++)d+M<b&&(W=Math.abs(o[d]-o[d+M]),U[W]+=1);for(var j=-1,J=-1,d=0;d<f;d++){for(var K=0,M=-1*p;M<=p;M++)d+M>=0&&d+M<f&&(K+=U[d+M]);K===J?d===2*j&&(j=d):K>J&&(J=K,j=d)}for(var Z=0,ot=0,M=-p;M<=p;M++)if(j+M>=0&&j+M<s){var Q=U[j+M];Q>0&&(ot+=Q,Z+=(j+M)*Q)}if(Z/=ot,u>-1&&Math.abs(Z*2-u)<=2*p){c=e/(Math.pow(2,A-1)*u);break}if(u=Z,A++,A>=Oi||f<2)break;var X=i.subarray(0);f===U.length&&(X=new Float32Array(f/2));for(var d=0;d<f/2;d++)X[d]=(i[2*d]+i[2*d+1])/2;i=X,f/=2}return c}}Qt.DynamicWavelet=Hi});var Ur=tt(Xt=>{"use strict";var ue=Xt&&Xt.__assign||function(){return ue=Object.assign||function(a){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(a[i]=t[i])}return a},ue.apply(this,arguments)};Object.defineProperty(Xt,"__esModule",{value:!0});var Bi={bufferSize:1024,cutoff:.97,sampleRate:44100};function Yi(a){a===void 0&&(a={});var t=ue(ue({},Bi),a),e=t.bufferSize,r=t.cutoff,i=t.sampleRate,o=.5,n=80,s=new Float32Array(e),c=new Float32Array(e),l,m,h=[],d=[],g=[];function y(u){var f,p;c[0]=u[0]*u[0];for(var v=1;v<u.length;v+=1)c[v]=u[v]*u[v]+c[v-1];for(var b=0;b<u.length;b++){f=0,p=c[u.length-1-b]+c[u.length-1]-c[b];for(var v=0;v<u.length-b;v++)f+=u[v]*u[v+b];s[b]=2*f/p}}function _(u){var f=s[u-1],p=s[u],v=s[u+1],b=u,x=v+f-2*p;if(x===0)l=b,m=p;else{var C=f-v;l=b+C/(2*x),m=p-C*C/(8*x)}}function A(){for(var u=0,f=0;u<(s.length-1)/3&&s[u]>0;)u++;for(;u<s.length-1&&s[u]<=0;)u++;for(u==0&&(u=1);u<s.length-1;)if(s[u]>s[u-1]&&s[u]>=s[u+1]&&(f==0||s[u]>s[f])&&(f=u),u++,u<s.length-1&&s[u]<=0)for(f>0&&(h.push(f),f=0);u<s.length-1&&s[u]<=0;)u++;f>0&&h.push(f)}return function(f){var p;h=[],d=[],g=[],y(f),A();for(var v=-1/0,b=0;b<h.length;b++){var x=h[b];v=Math.max(v,s[x]),s[x]>o&&(_(x),g.push(m),d.push(l),v=Math.max(v,m))}if(d.length){for(var C=r*v,N=0,b=0;b<g.length;b++)if(g[b]>=C){N=b;break}var L=d[N],z=i/L;z>n?p=z:p=-1}else p=-1;return{probability:v,freq:p}}}Xt.Macleod=Yi});var jr=tt(pt=>{"use strict";var me=pt&&pt.__assign||function(){return me=Object.assign||function(a){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(a[i]=t[i])}return a},me.apply(this,arguments)};Object.defineProperty(pt,"__esModule",{value:!0});pt.DEFAULT_FREQUENCIES_PARAMS={tempo:120,quantization:4,sampleRate:44100};function Vi(a,t){var e=a.map(function(l){return l(t)}).filter(function(l){return l!==null}).sort(function(l,m){return l-m});if(e.length===1)return e[0];if(e.length===2){var r=e[0],i=e[1];return r*2>i?Math.sqrt(r*i):r}else{var r=e[0],i=e[1],o=e[e.length-2],n=e[e.length-1],s=r*2>i?e:e.slice(1),c=o*2>n?s:s.slice(0,-1);return Math.pow(c.reduce(function(h,d){return h*d},1),1/c.length)}}function Wi(a,t,e){e===void 0&&(e={});var r=me(me({},pt.DEFAULT_FREQUENCIES_PARAMS),e),i=r.tempo,o=r.quantization,n=r.sampleRate,s=t.length,c=Math.round(n*60/(o*i)),l;Array.isArray(a)?l=Vi.bind(null,a):l=a;for(var m=[],h=0,d=s-c;h<=d;h+=c){var g=t.slice(h,h+c),y=l(g);m.push(y)}return m}pt.frequencies=Wi});var Zr=tt(rt=>{"use strict";Object.defineProperty(rt,"__esModule",{value:!0});var Hr=zr();rt.YIN=Hr.YIN;var Br=Lr();rt.AMDF=Br.AMDF;var Yr=Dr();rt.ACF2PLUS=Yr.ACF2PLUS;var Vr=qr();rt.DynamicWavelet=Vr.DynamicWavelet;var Wr=Ur();rt.Macleod=Wr.Macleod;var Kr=jr();rt.frequencies=Kr.frequencies;rt.default={YIN:Hr.YIN,AMDF:Br.AMDF,ACF2PLUS:Yr.ACF2PLUS,DynamicWavelet:Vr.DynamicWavelet,Macleod:Wr.Macleod,frequencies:Kr.frequencies}});var ai=tt((kn,ii)=>{var ra=4,ia=.001,aa=1e-7,oa=10,re=11,ge=1/(re-1),na=typeof Float32Array=="function";function Xr(a,t){return 1-3*t+3*a}function ti(a,t){return 3*t-6*a}function ei(a){return 3*a}function be(a,t,e){return((Xr(t,e)*a+ti(t,e))*a+ei(t))*a}function ri(a,t,e){return 3*Xr(t,e)*a*a+2*ti(t,e)*a+ei(t)}function sa(a,t,e,r,i){var o,n,s=0;do n=t+(e-t)/2,o=be(n,r,i)-a,o>0?e=n:t=n;while(Math.abs(o)>aa&&++s<oa);return n}function la(a,t,e,r){for(var i=0;i<ra;++i){var o=ri(t,e,r);if(o===0)return t;var n=be(t,e,r)-a;t-=n/o}return t}function ca(a){return a}ii.exports=function(t,e,r,i){if(!(0<=t&&t<=1&&0<=r&&r<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===e&&r===i)return ca;for(var o=na?new Float32Array(re):new Array(re),n=0;n<re;++n)o[n]=be(n*ge,t,r);function s(c){for(var l=0,m=1,h=re-1;m!==h&&o[m]<=c;++m)l+=ge;--m;var d=(c-o[m])/(o[m+1]-o[m]),g=l+d*ge,y=ri(g,t,r);return y>=ia?la(c,g,t,r):y===0?g:sa(c,l,l+ge,t,r)}return function(l){return l===0?0:l===1?1:be(s(l),e,i)}}});var Le={};H(Le,{AppBodyComponent:()=>mt});var P=a=>t=>typeof t=="function"?((e,r)=>(window.customElements.define(e,r),r))(a,t):((e,r)=>{let{kind:i,elements:o}=r;return{kind:i,elements:o,finisher(n){window.customElements.define(e,n)}}})(a,t);var ki=(a,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,a)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,a)}};function F(a){return(t,e)=>e!==void 0?((r,i,o)=>{i.constructor.createProperty(o,r)})(a,t,e):ki(a,t)}function et(a){return F({...a,state:!0})}var At=({finisher:a,descriptor:t})=>(e,r)=>{var i;if(r===void 0){let o=(i=e.originalKey)!==null&&i!==void 0?i:e.key,n=t!=null?{kind:"method",placement:"prototype",key:o,descriptor:t(e.key)}:{...e,key:o};return a!=null&&(n.finisher=function(s){a(s,o)}),n}{let o=e.constructor;t!==void 0&&Object.defineProperty(e,r,t(r)),a==null||a(o,r)}};function lr(a,t){return At({descriptor:e=>{let r={get(){var i,o;return(o=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(a))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(t){let i=typeof e=="symbol"?Symbol():"__"+e;r.get=function(){var o,n;return this[i]===void 0&&(this[i]=(n=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(a))!==null&&n!==void 0?n:null),this[i]}}return r}})}var oe=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Me=Symbol(),cr=new Map,ne=class{constructor(t,e){if(this._$cssResult$=!0,e!==Me)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=cr.get(this.cssText);return oe&&t===void 0&&(cr.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}},kt=a=>new ne(typeof a=="string"?a:a+"",Me),T=(a,...t)=>{let e=a.length===1?a[0]:t.reduce((r,i,o)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+a[o+1],a[0]);return new ne(e,Me)},Pe=(a,t)=>{oe?a.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let r=document.createElement("style"),i=window.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=e.cssText,a.appendChild(r)})},se=oe?a=>a:a=>a instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return kt(e)})(a):a;var Fe,dr=window.trustedTypes,xi=dr?dr.emptyScript:"",hr=window.reactiveElementPolyfillSupport,Te={toAttribute(a,t){switch(t){case Boolean:a=a?xi:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,t){let e=a;switch(t){case Boolean:e=a!==null;break;case Number:e=a===null?null:Number(a);break;case Object:case Array:try{e=JSON.parse(a)}catch{e=null}}return e}},ur=(a,t)=>t!==a&&(t==t||a==a),Ne={attribute:!0,type:String,converter:Te,reflect:!1,hasChanged:ur},nt=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,r)=>{let i=this._$Eh(r,e);i!==void 0&&(this._$Eu.set(i,r),t.push(i))}),t}static createProperty(t,e=Ne){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let r=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,r,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(i){let o=this[t];this[e]=i,this.requestUpdate(t,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ne}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){let e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let i of r)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let i of r)e.unshift(se(i))}else t!==void 0&&e.push(se(t));return e}static _$Eh(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,r;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Pe(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostConnected)===null||r===void 0?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostDisconnected)===null||r===void 0?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ES(t,e,r=Ne){var i,o;let n=this.constructor._$Eh(t,r);if(n!==void 0&&r.reflect===!0){let s=((o=(i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==null&&o!==void 0?o:Te.toAttribute)(e,r.type);this._$Ei=t,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Ei=null}}_$AK(t,e){var r,i,o;let n=this.constructor,s=n._$Eu.get(t);if(s!==void 0&&this._$Ei!==s){let c=n.getPropertyOptions(s),l=c.converter,m=(o=(i=(r=l)===null||r===void 0?void 0:r.fromAttribute)!==null&&i!==void 0?i:typeof l=="function"?l:null)!==null&&o!==void 0?o:Te.fromAttribute;this._$Ei=s,this[s]=m(e,c.type),this._$Ei=null}}requestUpdate(t,e,r){let i=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||ur)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Ei!==t&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(t,r))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((i,o)=>this[o]=i),this._$Et=void 0);let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostUpdate)===null||o===void 0?void 0:o.call(i)}),this.update(r)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$E_!==void 0&&(this._$E_.forEach((e,r)=>this._$ES(r,this[r],e)),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}};nt.finalized=!0,nt.elementProperties=new Map,nt.elementStyles=[],nt.shadowRootOptions={mode:"open"},hr==null||hr({ReactiveElement:nt}),((Fe=globalThis.reactiveElementVersions)!==null&&Fe!==void 0?Fe:globalThis.reactiveElementVersions=[]).push("1.0.2");var Re,xt=globalThis.trustedTypes,mr=xt?xt.createPolicy("lit-html",{createHTML:a=>a}):void 0,st=`lit$${(Math.random()+"").slice(9)}$`,fr="?"+st,$i=`<${fr}>`,$t=document,Ht=(a="")=>$t.createComment(a),Bt=a=>a===null||typeof a!="object"&&typeof a!="function",pr=Array.isArray,Si=a=>{var t;return pr(a)||typeof((t=a)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},Yt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vr=/-->/g,gr=/>/g,ht=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,br=/'/g,yr=/"/g,wr=/^(?:script|style|textarea)$/i,_r=a=>(t,...e)=>({_$litType$:a,strings:t,values:e}),$=_r(1),ja=_r(2),ut=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),Ar=new WeakMap,kr=(a,t,e)=>{var r,i;let o=(r=e==null?void 0:e.renderBefore)!==null&&r!==void 0?r:t,n=o._$litPart$;if(n===void 0){let s=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;o._$litPart$=n=new Mt(t.insertBefore(Ht(),s),s,void 0,e??{})}return n._$AI(a),n},St=$t.createTreeWalker($t,129,null,!1),Ei=(a,t)=>{let e=a.length-1,r=[],i,o=t===2?"<svg>":"",n=Yt;for(let c=0;c<e;c++){let l=a[c],m,h,d=-1,g=0;for(;g<l.length&&(n.lastIndex=g,h=n.exec(l),h!==null);)g=n.lastIndex,n===Yt?h[1]==="!--"?n=vr:h[1]!==void 0?n=gr:h[2]!==void 0?(wr.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=ht):h[3]!==void 0&&(n=ht):n===ht?h[0]===">"?(n=i??Yt,d=-1):h[1]===void 0?d=-2:(d=n.lastIndex-h[2].length,m=h[1],n=h[3]===void 0?ht:h[3]==='"'?yr:br):n===yr||n===br?n=ht:n===vr||n===gr?n=Yt:(n=ht,i=void 0);let y=n===ht&&a[c+1].startsWith("/>")?" ":"";o+=n===Yt?l+$i:d>=0?(r.push(m),l.slice(0,d)+"$lit$"+l.slice(d)+st+y):l+st+(d===-2?(r.push(void 0),c):y)}let s=o+(a[e]||"<?>")+(t===2?"</svg>":"");return[mr!==void 0?mr.createHTML(s):s,r]},Et=class{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let o=0,n=0,s=t.length-1,c=this.parts,[l,m]=Ei(t,e);if(this.el=Et.createElement(l,r),St.currentNode=this.el.content,e===2){let h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(i=St.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes()){let h=[];for(let d of i.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(st)){let g=m[n++];if(h.push(d),g!==void 0){let y=i.getAttribute(g.toLowerCase()+"$lit$").split(st),_=/([.?@])?(.*)/.exec(g);c.push({type:1,index:o,name:_[2],strings:y,ctor:_[1]==="."?$r:_[1]==="?"?Sr:_[1]==="@"?Er:Vt})}else c.push({type:6,index:o})}for(let d of h)i.removeAttribute(d)}if(wr.test(i.tagName)){let h=i.textContent.split(st),d=h.length-1;if(d>0){i.textContent=xt?xt.emptyScript:"";for(let g=0;g<d;g++)i.append(h[g],Ht()),St.nextNode(),c.push({type:2,index:++o});i.append(h[d],Ht())}}}else if(i.nodeType===8)if(i.data===fr)c.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(st,h+1))!==-1;)c.push({type:7,index:o}),h+=st.length-1}o++}}static createElement(t,e){let r=$t.createElement("template");return r.innerHTML=t,r}};function Ct(a,t,e=a,r){var i,o,n,s;if(t===ut)return t;let c=r!==void 0?(i=e._$Cl)===null||i===void 0?void 0:i[r]:e._$Cu,l=Bt(t)?void 0:t._$litDirective$;return(c==null?void 0:c.constructor)!==l&&((o=c==null?void 0:c._$AO)===null||o===void 0||o.call(c,!1),l===void 0?c=void 0:(c=new l(a),c._$AT(a,e,r)),r!==void 0?((n=(s=e)._$Cl)!==null&&n!==void 0?n:s._$Cl=[])[r]=c:e._$Cu=c),c!==void 0&&(t=Ct(a,c._$AS(a,t.values),c,r)),t}var xr=class{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;let{el:{content:r},parts:i}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:$t).importNode(r,!0);St.currentNode=o;let n=St.nextNode(),s=0,c=0,l=i[0];for(;l!==void 0;){if(s===l.index){let m;l.type===2?m=new Mt(n,n.nextSibling,this,t):l.type===1?m=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(m=new Cr(n,this,t)),this.v.push(m),l=i[++c]}s!==(l==null?void 0:l.index)&&(n=St.nextNode(),s++)}return o}m(t){let e=0;for(let r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},Mt=class{constructor(t,e,r,i){var o;this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cg=(o=i==null?void 0:i.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ct(this,t,e),Bt(t)?t===E||t==null||t===""?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==ut&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.S(t):Si(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==E&&Bt(this._$AH)?this._$AA.nextSibling.data=t:this.S($t.createTextNode(t)),this._$AH=t}T(t){var e;let{values:r,_$litType$:i}=t,o=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Et.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.m(r);else{let n=new xr(o,this),s=n.p(this.options);n.m(r),this.S(s),this._$AH=n}}_$AC(t){let e=Ar.get(t.strings);return e===void 0&&Ar.set(t.strings,e=new Et(t)),e}M(t){pr(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,i=0;for(let o of t)i===e.length?e.push(r=new Mt(this.A(Ht()),this.A(Ht()),this,this.options)):r=e[i],r._$AI(o),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Vt=class{constructor(t,e,r,i,o){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=E}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,i){let o=this.strings,n=!1;if(o===void 0)t=Ct(this,t,e,0),n=!Bt(t)||t!==this._$AH&&t!==ut,n&&(this._$AH=t);else{let s=t,c,l;for(t=o[0],c=0;c<o.length-1;c++)l=Ct(this,s[r+c],e,c),l===ut&&(l=this._$AH[c]),n||(n=!Bt(l)||l!==this._$AH[c]),l===E?t=E:t!==E&&(t+=(l??"")+o[c+1]),this._$AH[c]=l}n&&!i&&this.k(t)}k(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},$r=class extends Vt{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===E?void 0:t}},Ci=xt?xt.emptyScript:"",Sr=class extends Vt{constructor(){super(...arguments),this.type=4}k(t){t&&t!==E?this.element.setAttribute(this.name,Ci):this.element.removeAttribute(this.name)}},Er=class extends Vt{constructor(t,e,r,i,o){super(t,e,r,i,o),this.type=5}_$AI(t,e=this){var r;if((t=(r=Ct(this,t,e,0))!==null&&r!==void 0?r:E)===ut)return;let i=this._$AH,o=t===E&&i!==E||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==E&&(i===E||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;typeof this._$AH=="function"?this._$AH.call((r=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}},Cr=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Ct(this,t)}};var Mr=window.litHtmlPolyfillSupport;Mr==null||Mr(Et,Mt),((Re=globalThis.litHtmlVersions)!==null&&Re!==void 0?Re:globalThis.litHtmlVersions=[]).push("2.0.2");var Ie,ze;var S=class extends nt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;let r=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=r.firstChild),r}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=kr(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return ut}};S.finalized=!0,S._$litElement$=!0,(Ie=globalThis.litElementHydrateSupport)===null||Ie===void 0||Ie.call(globalThis,{LitElement:S});var Pr=globalThis.litElementPolyfillSupport;Pr==null||Pr({LitElement:S});((ze=globalThis.litElementVersions)!==null&&ze!==void 0?ze:globalThis.litElementVersions=[]).push("3.0.2");console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");var O=T`
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
`;var I=class{};I.map=(t,e,r)=>(t-e[0])*(r[1]-r[0])/(e[1]-e[0])+r[0],I.clamp=(t,e)=>Math.min(Math.max(t,e[0]),e[1]),I.round=(t,e)=>Number(Math.round(Number(t+"e"+e))+"e-"+e);var k=class{static Instance(){return this._instance||(this._instance=new this)}static isHexCode(t){return t.match(/^#[0-9a-f]{6}/i)}static getPropertyName(t,e){let r={};return Object.keys(t).map(i=>r[i]=i),e(r)}static getStoredValueOrDefault(t){var e;return(e=localStorage.getItem(t))!=null?e:this.defaultConfig[t]}static set config(t){Object.keys(t).forEach(e=>{localStorage.setItem(e,t[e].toString())})}static get config(){return{accidentalMode:this.accidentalMode,frequencyOfA:this.frequencyOfA,debugMode:"false",primary:this.getColor("primary"),highlight:this.getColor("highlight"),background:this.getColor("background"),algorithm:this.algorithm}}static get debugMode(){return Boolean(this.getStoredValueOrDefault("debugMode"))}static set debugMode(t){localStorage.setItem(this.getPropertyName(this.defaultConfig,e=>e.debugMode),t.toString())}static set accidentalMode(t){localStorage.setItem(this.getPropertyName(this.defaultConfig,e=>e.accidentalMode),t.toString())}static get accidentalMode(){return Number(this.getStoredValueOrDefault("accidentalMode"))}static set frequencyOfA(t){t=I.clamp(t,[this.ALowerBoundFreq,this.AUpperBoundFreq]),localStorage.setItem(this.getPropertyName(this.defaultConfig,e=>e.frequencyOfA),t.toString())}static get frequencyOfA(){return Number(this.getStoredValueOrDefault("frequencyOfA"))}static setColor(t,e){this.isHexCode(e)&&localStorage.setItem(this.getPropertyName(this.defaultConfig,r=>r[t]),e)}static getColor(t){return this.getStoredValueOrDefault(t)}static set algorithm(t){localStorage.setItem(this.getPropertyName(this.defaultConfig,e=>e.algorithm),t)}static get algorithm(){return this.getStoredValueOrDefault("algorithm")}};k.defaultConfig={accidentalMode:1,frequencyOfA:440,debugMode:"true",primary:"#FF7A00",highlight:"#FFFFFF",background:"#000000",algorithm:"McLeod"},k.ALowerBoundFreq=415,k.AUpperBoundFreq=466;var Pt=class{static hexToRgb(t){let e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;t=t.replace(e,function(i,o,n,s){return o+o+n+n+s+s});let r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return r?{r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16)}:null}};var Mi=T`
    :root {
        --doc-height: 100%;
    }

    :host {
        // Necessary for using the theme on load
        --primary-color: ${kt(k.defaultConfig.primary)};
        --background-color: ${kt(k.defaultConfig.background)};
        --highlight-color: ${kt(k.defaultConfig.highlight)};
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
    }
    
    .floating-button {
        color: rgb(var(--highlight-color));
        font-size: 3em;
        z-index: 2;
        position: absolute;
    }

    .settings-button {
        right: 0%;
    }

    .settings-button:hover {
        -webkit-animation: fa-spin 1.7s infinite linear;
        -moz-animation: fa-spin 1.7s infinite linear;
        -o-animation: fa-spin 1.7s infinite linear;
        animation: fa-spin 1.7s infinite linear;
    }

    .donation-button {
        left: 0%;
    }

    .donation-button:hover {
        -webkit-animation: fa-shake 1s infinite linear;
        -moz-animation: fa-shake 1s infinite linear;
        -o-animation: fa-shake 1s infinite linear;
        animation: fa-shake 1s infinite linear;
    }
`,mt=class extends S{constructor(){super(...arguments);this.showSettings=!1;this.showDonation=!1}connectedCallback(){super.connectedCallback(),this.calculateDocumentHeight();let t=Pt.hexToRgb(k.getColor("primary")),e=Pt.hexToRgb(k.getColor("highlight")),r=Pt.hexToRgb(k.getColor("background"));this.style.setProperty("--primary-color",`${t.r}, ${t.g}, ${t.b}`),this.style.setProperty("--highlight-color",`${e.r}, ${e.g}, ${e.b}`),this.style.setProperty("--background-color",`${r.r}, ${r.g}, ${r.b}`)}calculateDocumentHeight(){let t=()=>{document.documentElement.style.setProperty("--doc-height",`${window.innerHeight}px`)};window.addEventListener("resize",t),t()}refreshTheme(t){let e=Pt.hexToRgb(t.value);this.style.setProperty("--"+t.color+"-color",`${e.r}, ${e.g}, ${e.b}`)}toggleSettings(){this.showDonation=!1,this.showSettings=!this.showSettings}renderSettings(){return this.showSettings?$`
            <tn-settings @theme-changed="${this.refreshTheme}"></tn-settings>`:E}toggleDonation(){this.showSettings=!1,this.showDonation=!this.showDonation}renderDonation(){return this.showDonation?$`
            <tn-donation></tn-donation>`:E}render(){return $`
            <div class="app-body">
                <div class="app-content">
                    <div class="floating-button settings-button" @click="${this.toggleSettings}"><i
                            class="${this.showSettings?"far fa-circle-xmark":"fa fa-gear"}"></i></div>
                    <div class="floating-button donation-button" @click="${this.toggleDonation}"><i
                            class="${this.showDonation?"far fa-circle-xmark":"fa fa-coffee"}"></i></div>
                    <tn-tuner></tn-tuner>
                    ${this.renderSettings()}
                    ${this.renderDonation()}
                </div>
            </div>
        `}};mt.styles=[Mi,O],w([F()],mt.prototype,"showSettings",2),w([F()],mt.prototype,"showDonation",2),mt=w([P("tn-app")],mt);var Oe={};H(Oe,{DonationComponent:()=>Wt,DonationComponentStyles:()=>Tr});var Fr=T`
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
`;var Tr=T`

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

    .donation-button {
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
        font-size: clamp(1rem, 4cqi, 4rem);

        text-decoration: none;
    }

    .donation-button:hover {
        -webkit-animation: fa-bounce 0.7s infinite linear;
        -moz-animation: fa-bounce 0.7s infinite linear;
        -o-animation: fa-bounce 0.7s infinite linear;
        animation: fa-bounce 0.7s infinite linear;
    }

    .donation-blurb {
        font-size: clamp(1rem, 4cqi, 4rem);
    }

    .emphasis {
        font-size: 1.5em;
        font-weight: bold;
        text-decoration: underline double rgb(var(--primary-color));
    }
`,Wt=class extends S{constructor(){super()}render(){return $`
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
        `}};Wt.styles=[Tr,Fr,O],Wt=w([P("tn-donation")],Wt);var Ye={};H(Ye,{ExperimentalSettingsComponent:()=>Nt});var De={};H(De,{SettingsComponent:()=>Kt,SettingsComponentStyles:()=>lt});var lt=T`
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
`,Kt=class extends S{constructor(){super()}render(){return $`
            <tn-modal>
                <div slot="header">Settings</div>
                <div slot="content">
                    <tn-general-settings></tn-general-settings>
                    <tn-theme-settings></tn-theme-settings>
                    <tn-experimental-settings></tn-experimental-settings>
                </div>
            </tn-modal>
        `}};Kt.styles=[lt,O],Kt=w([P("tn-settings")],Kt);var Ir=Ce(Rr()),Ft=class{_inputLength;_fft;_bufferSupplier;_paddedInputBuffer;_transformBuffer;_inverseBuffer;static forFloat32Array(t){return new Ft(t,e=>new Float32Array(e))}static forFloat64Array(t){return new Ft(t,e=>new Float64Array(e))}static forNumberArray(t){return new Ft(t,e=>Array(e))}constructor(t,e){if(t<1)throw new Error("Input length must be at least one");this._inputLength=t,this._fft=new Ir.default(Ti(2*t)),this._bufferSupplier=e,this._paddedInputBuffer=this._bufferSupplier(this._fft.size),this._transformBuffer=this._bufferSupplier(2*this._fft.size),this._inverseBuffer=this._bufferSupplier(2*this._fft.size)}get inputLength(){return this._inputLength}autocorrelate(t,e=this._bufferSupplier(t.length)){if(t.length!==this._inputLength)throw new Error(`Input must have length ${this._inputLength} but had length ${t.length}`);for(let i=0;i<t.length;i++)this._paddedInputBuffer[i]=t[i];for(let i=t.length;i<this._paddedInputBuffer.length;i++)this._paddedInputBuffer[i]=0;this._fft.realTransform(this._transformBuffer,this._paddedInputBuffer),this._fft.completeSpectrum(this._transformBuffer);let r=this._transformBuffer;for(let i=0;i<r.length;i+=2)r[i]=r[i]*r[i]+r[i+1]*r[i+1],r[i+1]=0;this._fft.inverseTransform(this._inverseBuffer,this._transformBuffer);for(let i=0;i<t.length;i++)e[i]=this._inverseBuffer[2*i];return e}};function Pi(a){let t=[],e=!1,r=-1/0,i=-1;for(let o=1;o<a.length-1;o++)a[o-1]<=0&&a[o]>0?(e=!0,i=o,r=a[o]):a[o-1]>0&&a[o]<=0?(e=!1,i!==-1&&t.push(i)):e&&a[o]>r&&(r=a[o],i=o);return t}function Fi(a,t){let[e,r,i]=[a-1,a,a+1],[o,n,s]=[t[e],t[r],t[i]],c=o/2-n+s/2,l=-(o/2)*(r+i)+n*(e+i)-s/2*(e+r),m=o*r*i/2-n*e*i+s*e*r/2,h=-l/(2*c),d=c*h*h+l*h+m;return[h,d]}var ft=class{_autocorrelator;_nsdfBuffer;_clarityThreshold=.9;static forFloat32Array(t){return new ft(t,e=>new Float32Array(e))}static forFloat64Array(t){return new ft(t,e=>new Float64Array(e))}static forNumberArray(t){return new ft(t,e=>Array(e))}constructor(t,e){this._autocorrelator=new Ft(t,e),this._nsdfBuffer=e(t)}get inputLength(){return this._autocorrelator.inputLength}findPitch(t,e){this._nsdf(t);let r=Pi(this._nsdfBuffer);if(r.length===0)return[0,0];let i=Math.max(...r.map(c=>this._nsdfBuffer[c])),o=r.find(c=>this._nsdfBuffer[c]>=this._clarityThreshold*i),[n,s]=Fi(o,this._nsdfBuffer);return[e/n,Math.min(s,1)]}_nsdf(t){this._autocorrelator.autocorrelate(t,this._nsdfBuffer);let e=2*this._nsdfBuffer[0],r;for(r=0;r<this._nsdfBuffer.length&&e>0;r++)this._nsdfBuffer[r]=2*this._nsdfBuffer[r]/e,e-=t[r]**2+t[t.length-r-1]**2;for(;r<this._nsdfBuffer.length;r++)this._nsdfBuffer[r]=0}};function Ti(a){return a--,a|=a>>1,a|=a>>2,a|=a>>4,a|=a>>8,a|=a>>16,a++,a}var Tt=Ce(Zr()),Gr=["McLeod","YIN","AMDF","Dynamic Wavelet"],qe=class{constructor(){this.pitch=-1;this.volume=-1;this.clarity=-1}},Ue=class{constructor(t){this.detector=ft.forFloat32Array(t.analyserNode.fftSize)}detect(t){let e=new Float32Array(this.detector.inputLength);t.analyserNode.getFloatTimeDomainData(e);let r=new qe;[r.pitch,r.clarity]=this.detector.findPitch(e,t.audioContext.sampleRate);let i=e.reduce((o,n)=>o+n*n,0);return r.volume=Math.sqrt(i/e.length),r}},fe=class{detect(t){let e=new Float32Array(2048);t.analyserNode.getFloatTimeDomainData(e);let r=new qe;r.pitch=this.detector(e),r.clarity=1;let i=e.reduce((o,n)=>o+n*n,0);return r.volume=Math.sqrt(i/e.length),r}},je=class extends fe{constructor(){super();this.detector=Tt.YIN()}},He=class extends fe{constructor(){super();this.detector=Tt.AMDF()}},Be=class extends fe{constructor(){super();this.detector=Tt.DynamicWavelet()}};var Nt=class extends S{constructor(){super();this.algorithm=k.algorithm}updateAlgorithm(t){let e=t.target.value;this.algorithm=e,k.algorithm=e}render(){return $`
                    <tn-accordion>
                        <div slot="header">Experimental</div>
                        <div slot="content">
                            <div class="row">
                                <label>Pitch Detection Algorithm</label>
                                <select @input="${this.updateAlgorithm}">
                                    ${Gr.map(t=>$`
                                        <option .selected="${t===this.algorithm}" .value="${t}">${t}</option>
                                    `)}
                                </select>
                            </div>
                        </div>
                    </tn-accordion>
        `}};Nt.styles=[lt,O],w([et()],Nt.prototype,"algorithm",2),Nt=w([P("tn-experimental-settings")],Nt);var Ve={};H(Ve,{GeneralSettingsComponent:()=>vt});var vt=class extends S{constructor(){super();this.frequencyOfA=k.frequencyOfA;this.accidentalMode=k.accidentalMode}updateAccidentalMode(t){let e=t.target.checked===!1?1:0;this.accidentalMode=e,k.accidentalMode=e}resetFrequencyOfA(){this.frequencyOfA=k.defaultConfig.frequencyOfA,k.frequencyOfA=k.defaultConfig.frequencyOfA}updateFrequencyOfA(t){let e=Number(t.target.value);this.frequencyOfA=e,k.frequencyOfA=e}render(){return $`
                <tn-accordion>
                    <div slot="header">General</div>
                    <div slot="content">
                        <div class="row">
                            <label for="flats" class="switch">
                                <input id="flats"
                                       type="checkbox"
                                       .checked="${this.accidentalMode===0}"
                                       @click=${this.updateAccidentalMode}>
                                <span class="slider round"></span>
                            </label>
                            <span>Use Flats</span>
                        </div>
                        <div class="row">
                            <input id="frequencyOfA"
                                   type="range"
                                   max="${k.AUpperBoundFreq}"
                                   min="${k.ALowerBoundFreq}"
                                   .value="${this.frequencyOfA}"
                                   @input=${this.updateFrequencyOfA}>
                            <label style="flex: 1" for="frequencyOfA">
                                A = ${this.frequencyOfA}HZ
                            </label>
                            ${this.frequencyOfA!==k.defaultConfig.frequencyOfA?$`
                                <i class="fa fa-undo" @click=${this.resetFrequencyOfA}></i>`:E}
                        </div>
                    </div>
                </tn-accordion>
    `}};vt.styles=[lt,O],w([et()],vt.prototype,"frequencyOfA",2),w([et()],vt.prototype,"accidentalMode",2),vt=w([P("tn-general-settings")],vt);var We={};H(We,{ThemeSettingsComponent:()=>ct});var pe=class extends Event{constructor(t,e){super("theme-changed",{bubbles:!0,composed:!0});this.color=t,this.value=e}};var Ki=T`
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
`,ct=class extends S{constructor(){super();this.primaryColor=k.getColor("primary");this.highlightColor=k.getColor("highlight");this.backgroundColor=k.getColor("background")}updateColor(t,e){let r=t.target.value;k.setColor(e,r),this.updateLocalColor(e,r),this.dispatchEvent(new pe(e,r))}resetColor(t){k.setColor(t,k.defaultConfig[t]),this.updateLocalColor(t,k.defaultConfig[t]),this.dispatchEvent(new pe(t,k.defaultConfig[t]))}updateLocalColor(t,e){switch(t){case"primary":this.primaryColor=e;break;case"background":this.backgroundColor=e;break;case"highlight":this.highlightColor=e;break}}render(){return $`
            <tn-accordion>
                <div slot="header">Theme</div>
                <div slot="content">
                    <div class="row color-row">
                        <div class="color-ball primary"></div>
                        <input id="primary-color" type="text" maxlength="7" size="7"
                               .value="${this.primaryColor}"
                               @input="${t=>this.updateColor(t,"primary")}">
                        <label for="primary-color" class="color-label">Primary</label>
                        ${this.primaryColor!==k.defaultConfig.primary?$`
                            <i class="fa fa-undo" @click=${()=>this.resetColor("primary")}></i>`:E}
                    </div>
                    <div class="row color-row">
                        <div class="color-ball highlight"></div>
                        <input id="highlight-color" type="text" maxlength="7" size="7"
                               .value="${this.highlightColor}"
                               @input="${t=>this.updateColor(t,"highlight")}"
                        >
                        <label for="highlight-color" class="color-label">Highlight</label>
                        ${this.highlightColor!==k.defaultConfig.highlight?$`
                            <i class="fa fa-undo" @click=${()=>this.resetColor("highlight")}></i>`:E}
                    </div>
                    <div class="row color-row">
                        <div class="color-ball background"></div>
                        <input id="background-color" type="text" maxlength="7" size="7"
                               .value="${this.backgroundColor}"
                               @input="${t=>this.updateColor(t,"background")}"
                        >
                        <label for="background-color" class="color-label">Background</label>
                        ${this.backgroundColor!==k.defaultConfig.background?$`
                            <i class="fa fa-undo" @click=${()=>this.resetColor("background")}></i>`:E}
                    </div>
                </div>
            </tn-accordion>
        `}};ct.styles=[Ki,lt,O],w([et()],ct.prototype,"primaryColor",2),w([et()],ct.prototype,"highlightColor",2),w([et()],ct.prototype,"backgroundColor",2),ct=w([P("tn-theme-settings")],ct);var Ke={};H(Ke,{AccordionComponent:()=>te});var Zi=T`
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
        background-color: rgba(var(--highlight-color), 0.3);
        color: rgb(var(--highlight-color));
        font-size: 2em;

        margin-block: 1em;
        margin-inline: 1em;
        padding-block-end: 0.1px;
    }

    .content {
        padding-inline: 1em;
        padding-block-end: 1em;
        border-radius: 1em;
        color: rgb(var(--highlight-color));
    }
`,te=class extends S{render(){return $`
            <details>
                <summary class="header">
                    <slot name="header"></slot>
                </summary>
                <div class="content">
                    <slot name="content"></slot>
                </div>
            </details>
        `}};te.styles=[Zi,O],te=w([P("tn-accordion")],te);var Ze={};H(Ze,{SettingsComponent:()=>ee});var Gi=T`
    .modal {
        width: 110%;
        height: 110%;
        right: -5%;
        top: -5%;
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
        width: 110%;
        height: 111%;
        right: -5%;
        top: -5%;
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
        margin-top: 2em;
        margin-inline: 1em;
    }

    /* Hide scrollbar for Chrome, Safari and Opera */

    .modal::-webkit-scrollbar {
        display: none;
    }
`,ee=class extends S{render(){return $`
            <div class="modal">
                <slot class="header row" name="header"></slot>
                <slot name="content"></slot>
            </div>
            <div class="scroll-shadow"></div>
        `}};ee.styles=[Gi],ee=w([P("tn-modal")],ee);var Ge={};H(Ge,{snapshots:()=>Jr});var Jr={};Jr["TunerComponent should equal snapshot"]=`<tn-tuner>
</tn-tuner>
`;var Qe={};H(Qe,{TunerNoteComponent:()=>B});var Rt=12,Ji=["C","C","D","D","E","F","F","G","G","A","A","B"],Qi=[1,3,6,8,10],Xi=["C","D","D","E","E","F","G","G","A","A","B","B"],gt;(function(e){e[e.sharp=0]="sharp",e[e.flat=1]="flat"})(gt||(gt={}));var V=class{get letter(){return this.lookupLetter()}get accidental(){return this.lookupAccidental()}constructor(t){this.index=I.clamp(t,[0,127]),this.octave=Math.floor(t/Rt)-1}lookupLetter(){return k.accidentalMode?Ji[this.index%Rt]:Xi[this.index%Rt]}lookupAccidental(){return Qi.includes(this.index%Rt)?k.accidentalMode?"#":"\u266D":""}},Je=new V(0),ta=new V(69),Qr=new V(127),It=class{static freqToNote(t){if(t<this.noteToPitch(Je))return Je;if(t>this.noteToPitch(Qr))return Qr;let e=Math.round(Rt*Math.log2(t/this.noteToPitch(Je)));if(isNaN(e))throw new Error("calculated frequency produced NaN");return new V(e)}static noteToPitch(t){let e=t.index-ta.index,r=Ee(2,1/Rt);return k.frequencyOfA*Ee(r,e)}};var ea=T`
    :host {
        font-family: var(--font-family);
    }

    .tuner-note-letter {
        stroke: rgb(var(--highlight-color));
        stroke-width: 1;
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
        stroke: rgb(var(--highlight-color));
        stroke-width: 0.5;
        stroke-linecap: round;
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
        stroke: rgb(var(--highlight-color));
        stroke-width: 0.5;
        stroke-linecap: round;
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
`,B=class extends S{constructor(){super();this.note=new V(0);this.clarity=1;this.accuracy=0;this.accuracyBuffer=[B.bufferSize];this.heightAnimator=new ve}updateHeightAnimation(){if(this.heightAnimatorReference)this.heightAnimator.reference=this.heightAnimatorReference;else return;let t=I.map(this.accuracy,[0,1],[90,25]);this.heightAnimator.to=t+""}update(t){super.update(t),!isNaN(Number(t.get("accuracy")))&&this.updateHeightAnimation()}render(){return $`
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
        `}};B.styles=ea,B.bufferSize=25,w([F()],B.prototype,"note",2),w([F()],B.prototype,"clarity",2),w([F({type:Number})],B.prototype,"accuracy",2),w([lr("#height-animator")],B.prototype,"heightAnimatorReference",2),B=w([P("tn-tuner-note")],B);var zt=class{set reference(t){this._reference=t}get from(){return this._reference.getAttribute("values").match(zt.fromMatcher)[0]}set from(t){this._reference.setAttribute("values",this._reference.getAttribute("values").replace(zt.fromMatcher,t))}get to(){return this._reference.getAttribute("values").match(zt.toMatcher)[0]}set to(t){this._reference.setAttribute("values",this._reference.getAttribute("values").replace(zt.toMatcher,t))}onEndEvent(){this.from=this.to}},ve=zt;ve.fromMatcher=/-?\d+\.?\d*(?=;)/g,ve.toMatcher=/-?\d+\.?\d*$/g;var Xe={};H(Xe,{SpokeComponent:()=>it,TunerRingComponent:()=>G});var oi=Ce(ai()),da=T`
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
`,G=class extends S{constructor(){super(...arguments);this.accuracy=0;this.volume=0}updated(){this.style.setProperty("--needle-degree",this.convertAccuracyToRadians()+"rad")}convertAccuracyToRadians(){let t=this.accuracy*(Math.PI/2)-Math.PI/2;return this.pitchAccidental==gt.sharp&&(t*=-1),t}static angleDifference(t,e){let r=t-e;return r+=r>Math.PI?-(2*Math.PI):r<-Math.PI?2*Math.PI:0,Math.abs(r)}render(){let t=[],e=[],r=41;for(let i=0;i<r;i++){let o=i*(Math.PI/(r-1))-Math.PI/2,n=i>=(r-3)/2&&i<=(r+1)/2,s=G.angleDifference(o,this.convertAccuracyToRadians()),c=I.map(s,[Math.PI,0],[0,1]),l=I.clamp(this.volume*8,[.3,.9]);t.push($`
                <tn-spoke .index="${i}" .scaleFactor="${c}"
                          .arcPosition="${o}" .isMiddle="${n}"></tn-spoke>
            `),e.push($`
                <tn-spoke .index="${i}" .scaleFactor="${l}"
                          .arcPosition="${o+Math.PI}"></tn-spoke>
            `)}return $`
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
        `}};G.styles=da,w([F()],G.prototype,"accuracy",2),w([F()],G.prototype,"volume",2),w([F()],G.prototype,"pitchAccidental",2),G=w([P("tn-tuner-ring")],G);var ha=T`
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

`,it=class extends S{constructor(){super(...arguments);this.scaleFactor=0;this.arcPosition=0;this.index=0;this.isMiddle=!1}connectedCallback(){super.connectedCallback(),this.isMiddle&&this.style.setProperty("background","rgb(var(--primary-color))"),this.setupPosition()}updated(){let t=(0,oi.default)(0,0,1,0),e=this.scaleFactor,r=I.map(this.scaleFactor,[0,1],[1,0]),i=t(e)*5,o=t(r)*15;this.style.setProperty("--x-scale",i+o+""),this.style.setProperty("--y-scale",i+"")}setupPosition(){let t=50*Math.cos(this.arcPosition)+50+"%",e=50*Math.sin(this.arcPosition)+50+"%";this.style.setProperty("bottom",t),this.style.setProperty("left",e),this.style.setProperty("--angle",this.arcPosition+"rad")}};it.styles=ha,w([F()],it.prototype,"scaleFactor",2),w([F()],it.prototype,"arcPosition",2),w([F()],it.prototype,"index",2),w([F()],it.prototype,"isMiddle",2),it=w([P("tn-spoke")],it);var rr={};H(rr,{TunerComponent:()=>at});var dt=class{static debug(...t){k.debugMode&&console.debug(t)}static error(...t){console.error(t)}};var tr=class{constructor(){this.audioContext=new AudioContext,this.analyserNode=new AnalyserNode(this.audioContext)}connect(){return sr(this,null,function*(){let t;try{t=yield navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,autoGainControl:!1,noiseSuppression:!1,latency:0}})}catch(r){dt.error(r)}this.sourceNode=this.audioContext.createMediaStreamSource(t);let e=this.audioContext.createBiquadFilter();return e.type="lowpass",e.frequency.setTargetAtTime(tr.lowpassThreshold,this.audioContext.currentTime,0),this.sourceNode.connect(e),e.connect(this.analyserNode),yield this.audioContext.resume(),this})}},ie=tr;ie.lowpassThreshold=8e3;var er=class{constructor(t=new ie,e=17){this.refreshRate=e,this._audioSource=t,this.algorithms=new Map,this.algorithms.set("McLeod",new Ue(this._audioSource)),this.algorithms.set("YIN",new je),this.algorithms.set("AMDF",new He),this.algorithms.set("Dynamic Wavelet",new Be)}static Instance(t=new ie,e=17){return this._instance||(this._instance=new this(t,e))}startListening(){this._audioSource.connect().then(()=>{this.intervalReference=window.setInterval(this.listen.bind(this),this.refreshRate)})}stopListening(){window.clearInterval(this.intervalReference)}setOnListen(t){this.onListen=t}get pitch(){return this._algorithmResult.pitch}get clarity(){return this._algorithmResult.clarity}get volume(){return this._algorithmResult.volume}get audioSource(){return this._audioSource}set audioSource(t){t.analyserNode.smoothingTimeConstant=1,this._audioSource=t}listen(){this._algorithmResult=this.algorithms.get(k.algorithm).detect(this._audioSource),this.pitch===-1&&dt.debug("Pitch not detected.",this._algorithmResult.pitch,this._algorithmResult.clarity),this.onListen(this._algorithmResult.pitch,this._algorithmResult.clarity,this._algorithmResult.volume)}};var at=class extends S{constructor(){super(...arguments);this.pitchDetectorService=er.Instance();this.note=new V(0);this.accuracy=0;this.clarity=1;this.volume=0;this.inTune=!1}connectedCallback(){super.connectedCallback(),this.pitchDetectorService.setOnListen((t,e,r)=>{if(this.clarity=e,this.volume=r,r<.1&&e<.99)return;this.note=It.freqToNote(t);let i=It.noteToPitch(this.note),o=It.noteToPitch(new V(this.note.index-1)),n=It.noteToPitch(new V(this.note.index+1)),s;t<i?(this.pitchAccidental=gt.flat,s=I.map(t,[o,i],[-1,1])):(this.pitchAccidental=gt.sharp,s=I.map(t,[n,i],[-1,1])),s<0&&(s=0),this.inTune=s>.95,this.accuracy=s}),this.pitchDetectorService.startListening()}disconnectedCallback(){super.disconnectedCallback(),this.pitchDetectorService.stopListening()}updateOscillatorFrequency(t){let e=this.pitchDetectorService.audioSource;e.frequency=Number(t.target.value)}setPlayback(t){t.target.checked?this.pitchDetectorService.audioSource.sourceNode.connect(this.pitchDetectorService.audioSource.audioContext.destination):this.pitchDetectorService.audioSource.sourceNode.disconnect(this.pitchDetectorService.audioSource.audioContext.destination)}resumeContext(){this.pitchDetectorService.audioSource.audioContext.resume().then(()=>{dt.debug("Audio source resumed")},t=>{dt.error("Audio source failed to resume",t)})}render(){return $`
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
        `}};w([F()],at.prototype,"note",2),w([F()],at.prototype,"accuracy",2),w([F()],at.prototype,"clarity",2),w([F()],at.prototype,"volume",2),w([F()],at.prototype,"pitchAccidental",2),at=w([P("tn-tuner")],at);var ua=[Le,Oe,Ye,Ve,De,We,Ke,Ze,Ge,Qe,Xe,rr],ni=ua;ni[0].default;})();
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

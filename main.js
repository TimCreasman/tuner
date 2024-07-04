(()=>{var Fi=Object.create;var Ut=Object.defineProperty;var vr=Object.getOwnPropertyDescriptor;var Ni=Object.getOwnPropertyNames;var Ri=Object.getPrototypeOf,Ii=Object.prototype.hasOwnProperty;var Pe=Math.pow;var gr=o=>Ut(o,"__esModule",{value:!0});var et=(o,t)=>()=>(t||o((t={exports:{}}).exports,t),t.exports),L=(o,t)=>{gr(o);for(var e in t)Ut(o,e,{get:t[e],enumerable:!0})},Oi=(o,t,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Ni(t))!Ii.call(o,r)&&r!=="default"&&Ut(o,r,{get:()=>t[r],enumerable:!(e=vr(t,r))||e.enumerable});return o},Fe=o=>Oi(gr(Ut(o!=null?Fi(Ri(o)):{},"default",o&&o.__esModule&&"default"in o?{get:()=>o.default,enumerable:!0}:{value:o,enumerable:!0})),o),_=(o,t,e,r)=>{for(var i=r>1?void 0:r?vr(t,e):t,n=o.length-1,a;n>=0;n--)(a=o[n])&&(i=(r?a(t,e,i):a(i))||i);return r&&i&&Ut(t,e,i),i};var br=(o,t,e)=>new Promise((r,i)=>{var n=c=>{try{s(e.next(c))}catch(l){i(l)}},a=c=>{try{s(e.throw(c))}catch(l){i(l)}},s=c=>c.done?r(c.value):Promise.resolve(c.value).then(n,a);s((e=e.apply(o,t)).next())});var Vr=et((la,Yr)=>{"use strict";function q(o){if(this.size=o|0,this.size<=1||(this.size&this.size-1)!=0)throw new Error("FFT size must be a power of two and bigger than 1");this._csize=o<<1;for(var t=new Array(this.size*2),e=0;e<t.length;e+=2){let c=Math.PI*e/this.size;t[e]=Math.cos(c),t[e+1]=-Math.sin(c)}this.table=t;for(var r=0,i=1;this.size>i;i<<=1)r++;this._width=r%2==0?r-1:r,this._bitrev=new Array(1<<this._width);for(var n=0;n<this._bitrev.length;n++){this._bitrev[n]=0;for(var a=0;a<this._width;a+=2){var s=this._width-a-2;this._bitrev[n]|=(n>>>a&3)<<s}}this._out=null,this._data=null,this._inv=0}Yr.exports=q;q.prototype.fromComplexArray=function(t,e){for(var r=e||new Array(t.length>>>1),i=0;i<t.length;i+=2)r[i>>>1]=t[i];return r};q.prototype.createComplexArray=function(){let t=new Array(this._csize);for(var e=0;e<t.length;e++)t[e]=0;return t};q.prototype.toComplexArray=function(t,e){for(var r=e||this.createComplexArray(),i=0;i<r.length;i+=2)r[i]=t[i>>>1],r[i+1]=0;return r};q.prototype.completeSpectrum=function(t){for(var e=this._csize,r=e>>>1,i=2;i<r;i+=2)t[e-i]=t[i],t[e-i+1]=-t[i+1]};q.prototype.transform=function(t,e){if(t===e)throw new Error("Input and output buffers must be different");this._out=t,this._data=e,this._inv=0,this._transform4(),this._out=null,this._data=null};q.prototype.realTransform=function(t,e){if(t===e)throw new Error("Input and output buffers must be different");this._out=t,this._data=e,this._inv=0,this._realTransform4(),this._out=null,this._data=null};q.prototype.inverseTransform=function(t,e){if(t===e)throw new Error("Input and output buffers must be different");this._out=t,this._data=e,this._inv=1,this._transform4();for(var r=0;r<t.length;r++)t[r]/=this.size;this._out=null,this._data=null};q.prototype._transform4=function(){var t=this._out,e=this._csize,r=this._width,i=1<<r,n=e/i<<1,a,s,c=this._bitrev;if(n===4)for(a=0,s=0;a<e;a+=n,s++){let k=c[s];this._singleTransform2(a,k,i)}else for(a=0,s=0;a<e;a+=n,s++){let k=c[s];this._singleTransform4(a,k,i)}var l=this._inv?-1:1,h=this.table;for(i>>=2;i>=2;i>>=2){n=e/i<<1;var m=n>>>2;for(a=0;a<e;a+=n)for(var d=a+m,b=a,w=0;b<d;b+=2,w+=i){let k=b,A=k+m,u=A+m,p=u+m,v=t[k],g=t[k+1],y=t[A],S=t[A+1],E=t[u],N=t[u+1],D=t[p],z=t[p+1],j=v,R=g,Y=h[w],W=l*h[w+1],U=y*Y-S*W,T=y*W+S*Y,H=h[2*w],Q=l*h[2*w+1],K=E*H-N*Q,Z=E*Q+N*H,st=h[3*w],X=l*h[3*w+1],tt=D*st-z*X,zt=D*X+z*st,Lt=j+K,bt=R+Z,yt=j-K,Dt=R-Z,qt=U+tt,wt=T+zt,_t=l*(U-tt),jt=l*(T-zt),se=Lt+qt,Ae=bt+wt,xe=Lt-qt,$e=bt-wt,Se=yt+jt,Ce=Dt-_t,Ee=yt-jt,Me=Dt+_t;t[k]=se,t[k+1]=Ae,t[A]=Se,t[A+1]=Ce,t[u]=xe,t[u+1]=$e,t[p]=Ee,t[p+1]=Me}}};q.prototype._singleTransform2=function(t,e,r){let i=this._out,n=this._data,a=n[e],s=n[e+1],c=n[e+r],l=n[e+r+1],h=a+c,m=s+l,d=a-c,b=s-l;i[t]=h,i[t+1]=m,i[t+2]=d,i[t+3]=b};q.prototype._singleTransform4=function(t,e,r){let i=this._out,n=this._data,a=this._inv?-1:1,s=r*2,c=r*3,l=n[e],h=n[e+1],m=n[e+r],d=n[e+r+1],b=n[e+s],w=n[e+s+1],k=n[e+c],A=n[e+c+1],u=l+b,p=h+w,v=l-b,g=h-w,y=m+k,S=d+A,E=a*(m-k),N=a*(d-A),D=u+y,z=p+S,j=v+N,R=g-E,Y=u-y,W=p-S,U=v-N,T=g+E;i[t]=D,i[t+1]=z,i[t+2]=j,i[t+3]=R,i[t+4]=Y,i[t+5]=W,i[t+6]=U,i[t+7]=T};q.prototype._realTransform4=function(){var t=this._out,e=this._csize,r=this._width,i=1<<r,n=e/i<<1,a,s,c=this._bitrev;if(n===4)for(a=0,s=0;a<e;a+=n,s++){let Te=c[s];this._singleRealTransform2(a,Te>>>1,i>>>1)}else for(a=0,s=0;a<e;a+=n,s++){let Te=c[s];this._singleRealTransform4(a,Te>>>1,i>>>1)}var l=this._inv?-1:1,h=this.table;for(i>>=2;i>=2;i>>=2){n=e/i<<1;var m=n>>>1,d=m>>>1,b=d>>>1;for(a=0;a<e;a+=n)for(var w=0,k=0;w<=b;w+=2,k+=i){var A=a+w,u=A+d,p=u+d,v=p+d,g=t[A],y=t[A+1],S=t[u],E=t[u+1],N=t[p],D=t[p+1],z=t[v],j=t[v+1],R=g,Y=y,W=h[k],U=l*h[k+1],T=S*W-E*U,H=S*U+E*W,Q=h[2*k],K=l*h[2*k+1],Z=N*Q-D*K,st=N*K+D*Q,X=h[3*k],tt=l*h[3*k+1],zt=z*X-j*tt,Lt=z*tt+j*X,bt=R+Z,yt=Y+st,Dt=R-Z,qt=Y-st,wt=T+zt,_t=H+Lt,jt=l*(T-zt),se=l*(H-Lt),Ae=bt+wt,xe=yt+_t,$e=Dt+se,Se=qt-jt;if(t[A]=Ae,t[A+1]=xe,t[u]=$e,t[u+1]=Se,w===0){var Ce=bt-wt,Ee=yt-_t;t[p]=Ce,t[p+1]=Ee;continue}if(w!==b){var Me=Dt,_i=-qt,ki=bt,Ai=-yt,xi=-l*se,$i=-l*jt,Si=-l*_t,Ci=-l*wt,Ei=Me+xi,Mi=_i+$i,Ti=ki+Ci,Pi=Ai-Si,fr=a+d-w,pr=a+m-w;t[fr]=Ei,t[fr+1]=Mi,t[pr]=Ti,t[pr+1]=Pi}}}};q.prototype._singleRealTransform2=function(t,e,r){let i=this._out,n=this._data,a=n[e],s=n[e+r],c=a+s,l=a-s;i[t]=c,i[t+1]=0,i[t+2]=l,i[t+3]=0};q.prototype._singleRealTransform4=function(t,e,r){let i=this._out,n=this._data,a=this._inv?-1:1,s=r*2,c=r*3,l=n[e],h=n[e+r],m=n[e+s],d=n[e+c],b=l+m,w=l-m,k=h+d,A=a*(h-d),u=b+k,p=w,v=-A,g=b-k,y=w,S=A;i[t]=u,i[t+1]=0,i[t+2]=p,i[t+3]=v,i[t+4]=g,i[t+5]=0,i[t+6]=y,i[t+7]=S}});var Kr=et(Qt=>{"use strict";var ue=Qt&&Qt.__assign||function(){return ue=Object.assign||function(o){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(o[i]=t[i])}return o},ue.apply(this,arguments)};Object.defineProperty(Qt,"__esModule",{value:!0});var Wi={threshold:.1,sampleRate:44100,probabilityThreshold:.1};function Ki(o){o===void 0&&(o={});var t=ue(ue({},Wi),o),e=t.threshold,r=t.sampleRate,i=t.probabilityThreshold;return function(a){var s;for(s=1;s<a.length;s*=2);s/=2;for(var c=s/2,l=new Float32Array(c),h=0,m,d=0;d<c;d++)l[d]=0;for(var d=1;d<c;d++)for(var b=0;b<c;b++){var w=a[b]-a[b+d];l[d]+=w*w}l[0]=1,l[1]=1;for(var k=0,d=1;d<c;d++)k+=l[d],l[d]*=d/k;for(m=2;m<c;m++)if(l[m]<e){for(;m+1<c&&l[m+1]<l[m];)m++;h=1-l[m];break}if(m===c||l[m]>=e||h<i)return null;var A,u,p;if(m<1?u=m:u=m-1,m+1<c?p=m+1:p=m,u===m)l[m]<=l[p]?A=m:A=p;else if(p===m)l[m]<=l[u]?A=m:A=u;else{var v=l[u],g=l[m],y=l[p];A=m+(y-v)/(2*(2*g-y-v))}return r/A}}Qt.YIN=Ki});var Zr=et(Xt=>{"use strict";var he=Xt&&Xt.__assign||function(){return he=Object.assign||function(o){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(o[i]=t[i])}return o},he.apply(this,arguments)};Object.defineProperty(Xt,"__esModule",{value:!0});var Zi={sampleRate:44100,minFrequency:82,maxFrequency:1e3,ratio:5,sensitivity:.1};function Gi(o){o===void 0&&(o={});var t=he(he({},Zi),o),e=t.sampleRate,r=t.minFrequency,i=t.maxFrequency,n=t.sensitivity,a=t.ratio,s=[],c=Math.ceil(e/r),l=Math.floor(e/i);return function(m){var d=m.length,b=0,w=1/0,k=-1/0,A,u,p,v,g,y,S,E;for(v=0;v<d;v++)if(l<=v&&v<=c){for(S=0,E=v,b=0,A=[],u=[];S<d-v;b++,E++,S++)A[b]=m[S],u[b]=m[E];var N=A.length;for(p=[],y=0;y<N;y++)p[y]=A[y]-u[y];var D=0;for(y=0;y<N;y++)D+=Math.abs(p[y]);s[v]=D}for(g=l;g<c;g++)s[g]<w&&(w=s[g]),s[g]>k&&(k=s[g]);var z=Math.round(n*(k-w)+w);for(g=l;g<=c&&s[g]>z;g++);var j=l/2;w=s[g];var R=g;for(v=g-1;v<g+j&&v<=c;v++)s[v]<w&&(w=s[v],R=v);return Math.round(s[R]*a)<k?e/R:null}}Xt.AMDF=Gi});var Jr=et(te=>{"use strict";var fe=te&&te.__assign||function(){return fe=Object.assign||function(o){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(o[i]=t[i])}return o},fe.apply(this,arguments)};Object.defineProperty(te,"__esModule",{value:!0});var Gr={sampleRate:44100};function Ji(o){o===void 0&&(o=Gr);var t=fe(fe({},Gr),o),e=t.sampleRate;return function(i){var n=i.length,a=0,s,c,l,h;for(s=0;s<n;s++)h=i[s],a+=h*h;if(a=Math.sqrt(a/n),a<.01)return-1;var m=0,d=n-1,b=.2;for(s=0;s<n/2;s++)if(Math.abs(i[s])<b){m=s;break}for(s=1;s<n/2;s++)if(Math.abs(i[n-s])<b){d=n-s;break}var w=i.slice(m,d),k=w.length,A=new Array(k).fill(0);for(s=0;s<k;s++)for(c=0;c<k-s;c++)A[s]=A[s]+w[c]*w[c+s];for(l=0;A[l]>A[l+1];)l++;var u=-1,p=-1;for(s=l;s<k;s++)A[s]>u&&(u=A[s],p=s);var v=p,g=A[v-1],y=A[v],S=A[v+1],E=(g+S-2*y)/2,N=(S-g)/2;return E&&(v=v-N/(2*E)),e/v}}te.ACF2PLUS=Ji});var Qr=et(ee=>{"use strict";var pe=ee&&ee.__assign||function(){return pe=Object.assign||function(o){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(o[i]=t[i])}return o},pe.apply(this,arguments)};Object.defineProperty(ee,"__esModule",{value:!0});var Qi=6,Xi=3e3,to=3,eo=.75,ro={sampleRate:44100};function io(o){o===void 0&&(o={});var t=pe(pe({},ro),o),e=t.sampleRate;return function(i){for(var n=[],a=[],s=i.length,c=null,l=0,h=0,m=0,d=0;d<s;d++){var b=i[d];l=l+b,m=Math.max(m,b),h=Math.min(h,b)}l/=s,h-=l,m-=l;for(var w=m>-1*h?m:-1*h,k=w*eo,A=0,u=-1,p=i.length,v,g,y;v=~~(e/(Math.pow(2,A)*Xi)),!(p<2);){var S=void 0,E=-1e3,N=-1e6,D=-1e6,z=!1,j=!1;y=0,g=0;for(var d=2;d<p;d++){var R=i[d]-l,Y=i[d-1]-l;Y<=0&&R>0&&(z=!0),Y>=0&&R<0&&(j=!0),S=R-Y,E>-1e3&&(j&&E<0&&S>=0&&Math.abs(R)>=k&&d>N+v&&(n[y++]=d,N=d,j=!1),z&&E>0&&S<=0&&Math.abs(R)>=k&&d>D+v&&(a[g++]=d,D=d,z=!1)),E=S}if(y===0&&g===0)break;for(var W=void 0,U=[],d=0;d<p;d++)U[d]=0;for(var d=0;d<y;d++)for(var T=1;T<to;T++)d+T<y&&(W=Math.abs(n[d]-n[d+T]),U[W]+=1);for(var H=-1,Q=-1,d=0;d<p;d++){for(var K=0,T=-1*v;T<=v;T++)d+T>=0&&d+T<p&&(K+=U[d+T]);K===Q?d===2*H&&(H=d):K>Q&&(Q=K,H=d)}for(var Z=0,st=0,T=-v;T<=v;T++)if(H+T>=0&&H+T<s){var X=U[H+T];X>0&&(st+=X,Z+=(H+T)*X)}if(Z/=st,u>-1&&Math.abs(Z*2-u)<=2*v){c=e/(Math.pow(2,A-1)*u);break}if(u=Z,A++,A>=Qi||p<2)break;var tt=i.subarray(0);p===U.length&&(tt=new Float32Array(p/2));for(var d=0;d<p/2;d++)tt[d]=(i[2*d]+i[2*d+1])/2;i=tt,p/=2}return c}}ee.DynamicWavelet=io});var Xr=et(re=>{"use strict";var ve=re&&re.__assign||function(){return ve=Object.assign||function(o){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(o[i]=t[i])}return o},ve.apply(this,arguments)};Object.defineProperty(re,"__esModule",{value:!0});var oo={bufferSize:1024,cutoff:.97,sampleRate:44100};function no(o){o===void 0&&(o={});var t=ve(ve({},oo),o),e=t.bufferSize,r=t.cutoff,i=t.sampleRate,n=.5,a=80,s=new Float32Array(e),c=new Float32Array(e),l,h,m=[],d=[],b=[];function w(u){var p,v;c[0]=u[0]*u[0];for(var g=1;g<u.length;g+=1)c[g]=u[g]*u[g]+c[g-1];for(var y=0;y<u.length;y++){p=0,v=c[u.length-1-y]+c[u.length-1]-c[y];for(var g=0;g<u.length-y;g++)p+=u[g]*u[g+y];s[y]=2*p/v}}function k(u){var p=s[u-1],v=s[u],g=s[u+1],y=u,S=g+p-2*v;if(S===0)l=y,h=v;else{var E=p-g;l=y+E/(2*S),h=v-E*E/(8*S)}}function A(){for(var u=0,p=0;u<(s.length-1)/3&&s[u]>0;)u++;for(;u<s.length-1&&s[u]<=0;)u++;for(u==0&&(u=1);u<s.length-1;)if(s[u]>s[u-1]&&s[u]>=s[u+1]&&(p==0||s[u]>s[p])&&(p=u),u++,u<s.length-1&&s[u]<=0)for(p>0&&(m.push(p),p=0);u<s.length-1&&s[u]<=0;)u++;p>0&&m.push(p)}return function(p){var v;m=[],d=[],b=[],w(p),A();for(var g=-1/0,y=0;y<m.length;y++){var S=m[y];g=Math.max(g,s[S]),s[S]>n&&(k(S),b.push(h),d.push(l),g=Math.max(g,h))}if(d.length){for(var E=r*g,N=0,y=0;y<b.length;y++)if(b[y]>=E){N=y;break}var D=d[N],z=i/D;z>a?v=z:v=-1}else v=-1;return{probability:g,freq:v}}}re.Macleod=no});var ti=et(pt=>{"use strict";var ge=pt&&pt.__assign||function(){return ge=Object.assign||function(o){for(var t,e=1,r=arguments.length;e<r;e++){t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(o[i]=t[i])}return o},ge.apply(this,arguments)};Object.defineProperty(pt,"__esModule",{value:!0});pt.DEFAULT_FREQUENCIES_PARAMS={tempo:120,quantization:4,sampleRate:44100};function ao(o,t){var e=o.map(function(l){return l(t)}).filter(function(l){return l!==null}).sort(function(l,h){return l-h});if(e.length===1)return e[0];if(e.length===2){var r=e[0],i=e[1];return r*2>i?Math.sqrt(r*i):r}else{var r=e[0],i=e[1],n=e[e.length-2],a=e[e.length-1],s=r*2>i?e:e.slice(1),c=n*2>a?s:s.slice(0,-1);return Math.pow(c.reduce(function(m,d){return m*d},1),1/c.length)}}function so(o,t,e){e===void 0&&(e={});var r=ge(ge({},pt.DEFAULT_FREQUENCIES_PARAMS),e),i=r.tempo,n=r.quantization,a=r.sampleRate,s=t.length,c=Math.round(a*60/(n*i)),l;Array.isArray(o)?l=ao.bind(null,o):l=o;for(var h=[],m=0,d=s-c;m<=d;m+=c){var b=t.slice(m,m+c),w=l(b);h.push(w)}return h}pt.frequencies=so});var si=et(ot=>{"use strict";Object.defineProperty(ot,"__esModule",{value:!0});var ei=Kr();ot.YIN=ei.YIN;var ri=Zr();ot.AMDF=ri.AMDF;var ii=Jr();ot.ACF2PLUS=ii.ACF2PLUS;var oi=Qr();ot.DynamicWavelet=oi.DynamicWavelet;var ni=Xr();ot.Macleod=ni.Macleod;var ai=ti();ot.frequencies=ai.frequencies;ot.default={YIN:ei.YIN,AMDF:ri.AMDF,ACF2PLUS:ii.ACF2PLUS,DynamicWavelet:oi.DynamicWavelet,Macleod:ni.Macleod,frequencies:ai.frequencies}});var bi=et((rs,gi)=>{var go=4,bo=.001,yo=1e-7,wo=10,ne=11,_e=1/(ne-1),_o=typeof Float32Array=="function";function hi(o,t){return 1-3*t+3*o}function fi(o,t){return 3*t-6*o}function pi(o){return 3*o}function ke(o,t,e){return((hi(t,e)*o+fi(t,e))*o+pi(t))*o}function vi(o,t,e){return 3*hi(t,e)*o*o+2*fi(t,e)*o+pi(t)}function ko(o,t,e,r,i){var n,a,s=0;do a=t+(e-t)/2,n=ke(a,r,i)-o,n>0?e=a:t=a;while(Math.abs(n)>yo&&++s<wo);return a}function Ao(o,t,e,r){for(var i=0;i<go;++i){var n=vi(t,e,r);if(n===0)return t;var a=ke(t,e,r)-o;t-=a/n}return t}function xo(o){return o}gi.exports=function(t,e,r,i){if(!(0<=t&&t<=1&&0<=r&&r<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===e&&r===i)return xo;for(var n=_o?new Float32Array(ne):new Array(ne),a=0;a<ne;++a)n[a]=ke(a*_e,t,r);function s(c){for(var l=0,h=1,m=ne-1;h!==m&&n[h]<=c;++h)l+=_e;--h;var d=(c-n[h])/(n[h+1]-n[h]),b=l+d*_e,w=vi(b,t,r);return w>=bo?Ao(c,b,t,r):w===0?b:ko(c,l,l+_e,t,r)}return function(l){return l===0?0:l===1?1:ke(s(l),e,i)}}});var Be={};L(Be,{AppBodyComponent:()=>ht});var P=o=>t=>typeof t=="function"?((e,r)=>(window.customElements.define(e,r),r))(o,t):((e,r)=>{let{kind:i,elements:n}=r;return{kind:i,elements:n,finisher(a){window.customElements.define(e,a)}}})(o,t);var zi=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}};function F(o){return(t,e)=>e!==void 0?((r,i,n)=>{i.constructor.createProperty(n,r)})(o,t,e):zi(o,t)}function rt(o){return F({...o,state:!0})}var kt=({finisher:o,descriptor:t})=>(e,r)=>{var i;if(r===void 0){let n=(i=e.originalKey)!==null&&i!==void 0?i:e.key,a=t!=null?{kind:"method",placement:"prototype",key:n,descriptor:t(e.key)}:{...e,key:n};return o!=null&&(a.finisher=function(s){o(s,n)}),a}{let n=e.constructor;t!==void 0&&Object.defineProperty(e,r,t(r)),o==null||o(n,r)}};function yr(o,t){return kt({descriptor:e=>{let r={get(){var i,n;return(n=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(o))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(t){let i=typeof e=="symbol"?Symbol():"__"+e;r.get=function(){var n,a;return this[i]===void 0&&(this[i]=(a=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&a!==void 0?a:null),this[i]}}return r}})}var le=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ne=Symbol(),wr=new Map,ce=class{constructor(t,e){if(this._$cssResult$=!0,e!==Ne)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=wr.get(this.cssText);return le&&t===void 0&&(wr.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}},At=o=>new ce(typeof o=="string"?o:o+"",Ne),M=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((r,i,n)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[n+1],o[0]);return new ce(e,Ne)},Re=(o,t)=>{le?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let r=document.createElement("style"),i=window.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=e.cssText,o.appendChild(r)})},de=le?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return At(e)})(o):o;var Ie,_r=window.trustedTypes,Li=_r?_r.emptyScript:"",kr=window.reactiveElementPolyfillSupport,Oe={toAttribute(o,t){switch(t){case Boolean:o=o?Li:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Ar=(o,t)=>t!==o&&(t==t||o==o),ze={attribute:!0,type:String,converter:Oe,reflect:!1,hasChanged:Ar},lt=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,r)=>{let i=this._$Eh(r,e);i!==void 0&&(this._$Eu.set(i,r),t.push(i))}),t}static createProperty(t,e=ze){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let r=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,r,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(i){let n=this[t];this[e]=i,this.requestUpdate(t,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ze}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){let e=this.properties,r=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let i of r)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let i of r)e.unshift(de(i))}else t!==void 0&&e.push(de(t));return e}static _$Eh(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,r;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)===null||r===void 0||r.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Re(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostConnected)===null||r===void 0?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var r;return(r=e.hostDisconnected)===null||r===void 0?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ES(t,e,r=ze){var i,n;let a=this.constructor._$Eh(t,r);if(a!==void 0&&r.reflect===!0){let s=((n=(i=r.converter)===null||i===void 0?void 0:i.toAttribute)!==null&&n!==void 0?n:Oe.toAttribute)(e,r.type);this._$Ei=t,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$Ei=null}}_$AK(t,e){var r,i,n;let a=this.constructor,s=a._$Eu.get(t);if(s!==void 0&&this._$Ei!==s){let c=a.getPropertyOptions(s),l=c.converter,h=(n=(i=(r=l)===null||r===void 0?void 0:r.fromAttribute)!==null&&i!==void 0?i:typeof l=="function"?l:null)!==null&&n!==void 0?n:Oe.fromAttribute;this._$Ei=s,this[s]=h(e,c.type),this._$Ei=null}}requestUpdate(t,e,r){let i=!0;t!==void 0&&(((r=r||this.constructor.getPropertyOptions(t)).hasChanged||Ar)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Ei!==t&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(t,r))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((i,n)=>this[n]=i),this._$Et=void 0);let e=!1,r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(t=this._$Eg)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdate)===null||n===void 0?void 0:n.call(i)}),this.update(r)):this._$EU()}catch(i){throw e=!1,this._$EU(),i}e&&this._$AE(r)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var i;return(i=r.hostUpdated)===null||i===void 0?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$E_!==void 0&&(this._$E_.forEach((e,r)=>this._$ES(r,this[r],e)),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}};lt.finalized=!0,lt.elementProperties=new Map,lt.elementStyles=[],lt.shadowRootOptions={mode:"open"},kr==null||kr({ReactiveElement:lt}),((Ie=globalThis.reactiveElementVersions)!==null&&Ie!==void 0?Ie:globalThis.reactiveElementVersions=[]).push("1.0.2");var Le,xt=globalThis.trustedTypes,xr=xt?xt.createPolicy("lit-html",{createHTML:o=>o}):void 0,ct=`lit$${(Math.random()+"").slice(9)}$`,$r="?"+ct,Di=`<${$r}>`,$t=document,Ht=(o="")=>$t.createComment(o),Bt=o=>o===null||typeof o!="object"&&typeof o!="function",Sr=Array.isArray,qi=o=>{var t;return Sr(o)||typeof((t=o)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},Yt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Cr=/-->/g,Er=/>/g,ut=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Mr=/'/g,Tr=/"/g,Pr=/^(?:script|style|textarea)$/i,Fr=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),$=Fr(1),De=Fr(2),it=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),Nr=new WeakMap,Rr=(o,t,e)=>{var r,i;let n=(r=e==null?void 0:e.renderBefore)!==null&&r!==void 0?r:t,a=n._$litPart$;if(a===void 0){let s=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;n._$litPart$=a=new Mt(t.insertBefore(Ht(),s),s,void 0,e??{})}return a._$AI(o),a},St=$t.createTreeWalker($t,129,null,!1),ji=(o,t)=>{let e=o.length-1,r=[],i,n=t===2?"<svg>":"",a=Yt;for(let c=0;c<e;c++){let l=o[c],h,m,d=-1,b=0;for(;b<l.length&&(a.lastIndex=b,m=a.exec(l),m!==null);)b=a.lastIndex,a===Yt?m[1]==="!--"?a=Cr:m[1]!==void 0?a=Er:m[2]!==void 0?(Pr.test(m[2])&&(i=RegExp("</"+m[2],"g")),a=ut):m[3]!==void 0&&(a=ut):a===ut?m[0]===">"?(a=i??Yt,d=-1):m[1]===void 0?d=-2:(d=a.lastIndex-m[2].length,h=m[1],a=m[3]===void 0?ut:m[3]==='"'?Tr:Mr):a===Tr||a===Mr?a=ut:a===Cr||a===Er?a=Yt:(a=ut,i=void 0);let w=a===ut&&o[c+1].startsWith("/>")?" ":"";n+=a===Yt?l+Di:d>=0?(r.push(h),l.slice(0,d)+"$lit$"+l.slice(d)+ct+w):l+ct+(d===-2?(r.push(void 0),c):w)}let s=n+(o[e]||"<?>")+(t===2?"</svg>":"");return[xr!==void 0?xr.createHTML(s):s,r]},Ct=class{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let n=0,a=0,s=t.length-1,c=this.parts,[l,h]=ji(t,e);if(this.el=Ct.createElement(l,r),St.currentNode=this.el.content,e===2){let m=this.el.content,d=m.firstChild;d.remove(),m.append(...d.childNodes)}for(;(i=St.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes()){let m=[];for(let d of i.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(ct)){let b=h[a++];if(m.push(d),b!==void 0){let w=i.getAttribute(b.toLowerCase()+"$lit$").split(ct),k=/([.?@])?(.*)/.exec(b);c.push({type:1,index:n,name:k[2],strings:w,ctor:k[1]==="."?Or:k[1]==="?"?zr:k[1]==="@"?Lr:Vt})}else c.push({type:6,index:n})}for(let d of m)i.removeAttribute(d)}if(Pr.test(i.tagName)){let m=i.textContent.split(ct),d=m.length-1;if(d>0){i.textContent=xt?xt.emptyScript:"";for(let b=0;b<d;b++)i.append(m[b],Ht()),St.nextNode(),c.push({type:2,index:++n});i.append(m[d],Ht())}}}else if(i.nodeType===8)if(i.data===$r)c.push({type:2,index:n});else{let m=-1;for(;(m=i.data.indexOf(ct,m+1))!==-1;)c.push({type:7,index:n}),m+=ct.length-1}n++}}static createElement(t,e){let r=$t.createElement("template");return r.innerHTML=t,r}};function Et(o,t,e=o,r){var i,n,a,s;if(t===it)return t;let c=r!==void 0?(i=e._$Cl)===null||i===void 0?void 0:i[r]:e._$Cu,l=Bt(t)?void 0:t._$litDirective$;return(c==null?void 0:c.constructor)!==l&&((n=c==null?void 0:c._$AO)===null||n===void 0||n.call(c,!1),l===void 0?c=void 0:(c=new l(o),c._$AT(o,e,r)),r!==void 0?((a=(s=e)._$Cl)!==null&&a!==void 0?a:s._$Cl=[])[r]=c:e._$Cu=c),c!==void 0&&(t=Et(o,c._$AS(o,t.values),c,r)),t}var Ir=class{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;let{el:{content:r},parts:i}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:$t).importNode(r,!0);St.currentNode=n;let a=St.nextNode(),s=0,c=0,l=i[0];for(;l!==void 0;){if(s===l.index){let h;l.type===2?h=new Mt(a,a.nextSibling,this,t):l.type===1?h=new l.ctor(a,l.name,l.strings,this,t):l.type===6&&(h=new Dr(a,this,t)),this.v.push(h),l=i[++c]}s!==(l==null?void 0:l.index)&&(a=St.nextNode(),s++)}return n}m(t){let e=0;for(let r of this.v)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},Mt=class{constructor(t,e,r,i){var n;this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cg=(n=i==null?void 0:i.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Et(this,t,e),Bt(t)?t===x||t==null||t===""?(this._$AH!==x&&this._$AR(),this._$AH=x):t!==this._$AH&&t!==it&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.S(t):qi(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==x&&Bt(this._$AH)?this._$AA.nextSibling.data=t:this.S($t.createTextNode(t)),this._$AH=t}T(t){var e;let{values:r,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Ct.createElement(i.h,this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.m(r);else{let a=new Ir(n,this),s=a.p(this.options);a.m(r),this.S(s),this._$AH=a}}_$AC(t){let e=Nr.get(t.strings);return e===void 0&&Nr.set(t.strings,e=new Ct(t)),e}M(t){Sr(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,i=0;for(let n of t)i===e.length?e.push(r=new Mt(this.A(Ht()),this.A(Ht()),this,this.options)):r=e[i],r._$AI(n),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Vt=class{constructor(t,e,r,i,n){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=x}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,r,i){let n=this.strings,a=!1;if(n===void 0)t=Et(this,t,e,0),a=!Bt(t)||t!==this._$AH&&t!==it,a&&(this._$AH=t);else{let s=t,c,l;for(t=n[0],c=0;c<n.length-1;c++)l=Et(this,s[r+c],e,c),l===it&&(l=this._$AH[c]),a||(a=!Bt(l)||l!==this._$AH[c]),l===x?t=x:t!==x&&(t+=(l??"")+n[c+1]),this._$AH[c]=l}a&&!i&&this.k(t)}k(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Or=class extends Vt{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===x?void 0:t}},Ui=xt?xt.emptyScript:"",zr=class extends Vt{constructor(){super(...arguments),this.type=4}k(t){t&&t!==x?this.element.setAttribute(this.name,Ui):this.element.removeAttribute(this.name)}},Lr=class extends Vt{constructor(t,e,r,i,n){super(t,e,r,i,n),this.type=5}_$AI(t,e=this){var r;if((t=(r=Et(this,t,e,0))!==null&&r!==void 0?r:x)===it)return;let i=this._$AH,n=t===x&&i!==x||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==x&&(i===x||n);n&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,r;typeof this._$AH=="function"?this._$AH.call((r=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&r!==void 0?r:this.element,t):this._$AH.handleEvent(t)}},Dr=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Et(this,t)}};var qr=window.litHtmlPolyfillSupport;qr==null||qr(Ct,Mt),((Le=globalThis.litHtmlVersions)!==null&&Le!==void 0?Le:globalThis.litHtmlVersions=[]).push("2.0.2");var qe,je;var C=class extends lt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;let r=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=r.firstChild),r}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Rr(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return it}};C.finalized=!0,C._$litElement$=!0,(qe=globalThis.litElementHydrateSupport)===null||qe===void 0||qe.call(globalThis,{LitElement:C});var jr=globalThis.litElementPolyfillSupport;jr==null||jr({LitElement:C});((je=globalThis.litElementVersions)!==null&&je!==void 0?je:globalThis.litElementVersions=[]).push("3.0.2");var Ue={};L(Ue,{default:()=>I});console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");var I=M`
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
`;var Ur=["primary","highlight","background"],me=class extends Event{constructor(t,e){super("theme-changed",{bubbles:!0,composed:!0});this.color=t,this.value=e}};var Wt={frequencyRing:"Frequency Ring",volumeRing:"Volume Ring",noteFill:"Note Fill",noteOctave:"Note Octave",noteOutline:"Note Outline",needle:"Needle",donationButton:"Donation Button",settingsButton:"Settings Button"};var O=class{};O.map=(t,e,r)=>(t-e[0])*(r[1]-r[0])/(e[1]-e[0])+r[0],O.clamp=(t,e)=>Math.min(Math.max(t,e[0]),e[1]),O.round=(t,e)=>Number(Math.round(Number(t+"e"+e))+"e-"+e);var f=class{static Instance(){return this._instance||(this._instance=new this)}static isHexCode(t){return t.match(/^#[0-9a-f]{6}/i)}static getPropertyName(t,e){let r={};return Object.keys(t).map(i=>r[i]=i),e(r)}static getStoredValueOrDefault(t){var e;return(e=localStorage.getItem(t))!=null?e:this.defaultConfig[t]}static set config(t){Object.keys(t).forEach(e=>{localStorage.setItem(e,t[e].toString())})}static get config(){let t={accidentalMode:this.accidentalMode,frequencyOfA:this.frequencyOfA,debugMode:"false",algorithm:this.algorithm};for(let e in Ur)t[e]=this.getColor(e);for(let e in Wt)t[e]=this.getComponent(e).toString();return t}static get debugMode(){return this.getStoredValueOrDefault("debugMode")==="true"}static set debugMode(t){localStorage.setItem(this.getPropertyName(this.defaultConfig,e=>e.debugMode),t.toString())}static set accidentalMode(t){localStorage.setItem(this.getPropertyName(this.defaultConfig,e=>e.accidentalMode),t.toString())}static get accidentalMode(){return Number(this.getStoredValueOrDefault("accidentalMode"))}static set frequencyOfA(t){t=O.clamp(t,[this.ALowerBoundFreq,this.AUpperBoundFreq]),localStorage.setItem(this.getPropertyName(this.defaultConfig,e=>e.frequencyOfA),t.toString())}static get frequencyOfA(){return Number(this.getStoredValueOrDefault("frequencyOfA"))}static setColor(t,e){this.isHexCode(e)&&localStorage.setItem(this.getPropertyName(this.defaultConfig,r=>r[t]),e)}static getColor(t){return this.getStoredValueOrDefault(t)}static set algorithm(t){localStorage.setItem(this.getPropertyName(this.defaultConfig,e=>e.algorithm),t)}static get algorithm(){return this.getStoredValueOrDefault("algorithm")}static setComponent(t,e){localStorage.setItem(this.getPropertyName(this.defaultConfig,r=>r[t]),e.toString())}static getComponent(t){return this.getStoredValueOrDefault(t)==="true"}};f.defaultConfig={accidentalMode:1,frequencyOfA:440,debugMode:"true",primary:"#FF7A00",highlight:"#FFFFFF",background:"#000000",algorithm:"McLeod",frequencyRing:"true",volumeRing:"true",noteFill:"true",noteOctave:"true",noteOutline:"true",needle:"true",donationButton:"true",settingsButton:"true"},f.ALowerBoundFreq=415,f.AUpperBoundFreq=466;var Tt=class{static hexToRgb(t){let e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;t=t.replace(e,function(i,n,a,s){return n+n+a+a+s+s});let r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return r?{r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16)}:null}};var He={};L(He,{default:()=>Kt});var Kt=M`
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
`;var Hi=M`
    :root {
        --doc-height: 100%;
    }

    :host {
        // Necessary for using the theme on load
        --primary-color: ${At(f.defaultConfig.primary)};
        --background-color: ${At(f.defaultConfig.background)};
        --highlight-color: ${At(f.defaultConfig.highlight)};
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
`,ht=class extends C{constructor(){super(...arguments);this.showSettings=!1;this.showDonation=!1}connectedCallback(){super.connectedCallback(),this.calculateDocumentHeight();let t=Tt.hexToRgb(f.getColor("primary")),e=Tt.hexToRgb(f.getColor("highlight")),r=Tt.hexToRgb(f.getColor("background"));this.style.setProperty("--primary-color",`${t.r}, ${t.g}, ${t.b}`),this.style.setProperty("--highlight-color",`${e.r}, ${e.g}, ${e.b}`),this.style.setProperty("--background-color",`${r.r}, ${r.g}, ${r.b}`)}calculateDocumentHeight(){let t=()=>{document.documentElement.style.setProperty("--doc-height",`${window.innerHeight}px`)};window.addEventListener("resize",t),t()}refreshTheme(t){let e=Tt.hexToRgb(t.value);this.style.setProperty("--"+t.color+"-color",`${e.r}, ${e.g}, ${e.b}`)}toggleSettings(){this.showDonation=!1,this.showSettings=!this.showSettings}renderSettings(){return this.showSettings?$`
            <tn-settings @theme-changed="${this.refreshTheme}"></tn-settings>`:x}toggleDonation(){this.showSettings=!1,this.showDonation=!this.showDonation}onDoubleClick(){this.showSettings||this.toggleSettings()}renderDonation(){return this.showDonation?$`
            <tn-donation></tn-donation>`:x}renderButtonDonation(){return f.getComponent("donationButton")?$`
                <button class="floating-button donation-button" @click="${this.toggleDonation}"><i
                        class="${this.showDonation?"far fa-circle-xmark":"fa fa-coffee"}"></i></button>
        `:x}renderButtonSettings(){return!f.getComponent("settingsButton")&&!this.showSettings?x:$`
                <button class="floating-button settings-button" @click="${this.toggleSettings}"><i
                        class="${this.showSettings?"far fa-circle-xmark":"fa fa-gear"}"></i></button>
        `}render(){return $`
            <div class="app-body" @dblclick="${this.onDoubleClick}">
                ${this.renderButtonDonation()}
                ${this.renderButtonSettings()}
                <div class="app-content">
                    <tn-tuner></tn-tuner>
                    ${this.renderSettings()}
                    ${this.renderDonation()}
                </div>
            </div>
        `}};ht.styles=[Hi,I,Kt],_([F()],ht.prototype,"showSettings",2),_([F()],ht.prototype,"showDonation",2),ht=_([P("tn-app")],ht);var We={};L(We,{DonationComponent:()=>Zt,DonationComponentStyles:()=>Hr});var Ve={};L(Ve,{default:()=>Ye});var Ye=M`
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
`;var Hr=M`

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
`,Zt=class extends C{constructor(){super()}render(){return $`
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
        `}};Zt.styles=[Hr,Kt,Ye,I],Zt=_([P("tn-donation")],Zt);var Ze={};L(Ze,{AppearanceSettingsComponent:()=>Jt,AppearanceSettingsComponentStyles:()=>Br});var Ke={};L(Ke,{SettingsComponent:()=>Gt,SettingsComponentStyles:()=>G});var G=M`
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
`,Gt=class extends C{constructor(){super()}render(){return $`
            <tn-modal>
                <div slot="header">Settings</div>
                <div slot="content">
                    <tn-general-settings></tn-general-settings>
                    <tn-theme-settings></tn-theme-settings>
                    <tn-appearance-settings></tn-appearance-settings>
                    <tn-experimental-settings></tn-experimental-settings>
                </div>
            </tn-modal>
        `}};Gt.styles=[G,I],Gt=_([P("tn-settings")],Gt);var Br=M`
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
`,Jt=class extends C{constructor(){super();this.settingsButtonHelperText="To get to this modal again without the settings button, double tap the screen."}updateComponent(t,e){let r=t.target.checked;f.setComponent(e,r)}render(){return $`
            <tn-accordion>
                <div slot="header">Appearance</div>
                <div slot="content">
                    ${Object.keys(Wt).map(t=>$`
                        <div class="row">
                            <label for="${t}" class="switch">
                                <input id="${t}"
                                       type="checkbox"
                                       .checked="${f.getComponent(t)}"
                                       @click= ${e=>this.updateComponent(e,t)}>
                                <span class="slider round"></span>
                            </label>
                            <span class="nowrap">${Wt[t]}</span>
                            <span class="helper-text">
                                ${t==="settingsButton"?this.settingsButtonHelperText:x}
                            </span>
                        </div>
                        `)}
                </div>
            </tn-accordion>
        `}};Jt.styles=[G,Br,I],Jt=_([P("tn-appearance-settings")],Jt);var er={};L(er,{ExperimentalSettingsComponent:()=>Nt});var Wr=Fe(Vr()),Pt=class{_inputLength;_fft;_bufferSupplier;_paddedInputBuffer;_transformBuffer;_inverseBuffer;static forFloat32Array(t){return new Pt(t,e=>new Float32Array(e))}static forFloat64Array(t){return new Pt(t,e=>new Float64Array(e))}static forNumberArray(t){return new Pt(t,e=>Array(e))}constructor(t,e){if(t<1)throw new Error("Input length must be at least one");this._inputLength=t,this._fft=new Wr.default(Vi(2*t)),this._bufferSupplier=e,this._paddedInputBuffer=this._bufferSupplier(this._fft.size),this._transformBuffer=this._bufferSupplier(2*this._fft.size),this._inverseBuffer=this._bufferSupplier(2*this._fft.size)}get inputLength(){return this._inputLength}autocorrelate(t,e=this._bufferSupplier(t.length)){if(t.length!==this._inputLength)throw new Error(`Input must have length ${this._inputLength} but had length ${t.length}`);for(let i=0;i<t.length;i++)this._paddedInputBuffer[i]=t[i];for(let i=t.length;i<this._paddedInputBuffer.length;i++)this._paddedInputBuffer[i]=0;this._fft.realTransform(this._transformBuffer,this._paddedInputBuffer),this._fft.completeSpectrum(this._transformBuffer);let r=this._transformBuffer;for(let i=0;i<r.length;i+=2)r[i]=r[i]*r[i]+r[i+1]*r[i+1],r[i+1]=0;this._fft.inverseTransform(this._inverseBuffer,this._transformBuffer);for(let i=0;i<t.length;i++)e[i]=this._inverseBuffer[2*i];return e}};function Bi(o){let t=[],e=!1,r=-1/0,i=-1;for(let n=1;n<o.length-1;n++)o[n-1]<=0&&o[n]>0?(e=!0,i=n,r=o[n]):o[n-1]>0&&o[n]<=0?(e=!1,i!==-1&&t.push(i)):e&&o[n]>r&&(r=o[n],i=n);return t}function Yi(o,t){let[e,r,i]=[o-1,o,o+1],[n,a,s]=[t[e],t[r],t[i]],c=n/2-a+s/2,l=-(n/2)*(r+i)+a*(e+i)-s/2*(e+r),h=n*r*i/2-a*e*i+s*e*r/2,m=-l/(2*c),d=c*m*m+l*m+h;return[m,d]}var ft=class{_autocorrelator;_nsdfBuffer;_clarityThreshold=.9;static forFloat32Array(t){return new ft(t,e=>new Float32Array(e))}static forFloat64Array(t){return new ft(t,e=>new Float64Array(e))}static forNumberArray(t){return new ft(t,e=>Array(e))}constructor(t,e){this._autocorrelator=new Pt(t,e),this._nsdfBuffer=e(t)}get inputLength(){return this._autocorrelator.inputLength}findPitch(t,e){this._nsdf(t);let r=Bi(this._nsdfBuffer);if(r.length===0)return[0,0];let i=Math.max(...r.map(c=>this._nsdfBuffer[c])),n=r.find(c=>this._nsdfBuffer[c]>=this._clarityThreshold*i),[a,s]=Yi(n,this._nsdfBuffer);return[e/a,Math.min(s,1)]}_nsdf(t){this._autocorrelator.autocorrelate(t,this._nsdfBuffer);let e=2*this._nsdfBuffer[0],r;for(r=0;r<this._nsdfBuffer.length&&e>0;r++)this._nsdfBuffer[r]=2*this._nsdfBuffer[r]/e,e-=t[r]**2+t[t.length-r-1]**2;for(;r<this._nsdfBuffer.length;r++)this._nsdfBuffer[r]=0}};function Vi(o){return o--,o|=o>>1,o|=o>>2,o|=o>>4,o|=o>>8,o|=o>>16,o++,o}var Ft=Fe(si()),li=["McLeod","YIN","AMDF","Dynamic Wavelet"],Ge=class{constructor(){this.pitch=-1;this.volume=-1;this.clarity=-1}},Je=class{constructor(t){this.detector=ft.forFloat32Array(t.analyserNode.fftSize)}detect(t){let e=new Float32Array(this.detector.inputLength);t.analyserNode.getFloatTimeDomainData(e);let r=new Ge;[r.pitch,r.clarity]=this.detector.findPitch(e,t.audioContext.sampleRate);let i=e.reduce((n,a)=>n+a*a,0);return r.volume=Math.sqrt(i/e.length),r}},be=class{detect(t){let e=new Float32Array(2048);t.analyserNode.getFloatTimeDomainData(e);let r=new Ge;r.pitch=this.detector(e),r.clarity=1;let i=e.reduce((n,a)=>n+a*a,0);return r.volume=Math.sqrt(i/e.length),r}},Qe=class extends be{constructor(){super();this.detector=Ft.YIN()}},Xe=class extends be{constructor(){super();this.detector=Ft.AMDF()}},tr=class extends be{constructor(){super();this.detector=Ft.DynamicWavelet()}};var Nt=class extends C{constructor(){super();this.algorithm=f.algorithm}updateAlgorithm(t){let e=t.target.value;this.algorithm=e,f.algorithm=e}render(){return $`
                    <tn-accordion>
                        <div slot="header">Experimental</div>
                        <div slot="content">
                            <div class="row">
                                <label>Pitch Detection Algorithm</label>
                                <select @input="${this.updateAlgorithm}">
                                    ${li.map(t=>$`
                                        <option .selected="${t===this.algorithm}" .value="${t}">${t}</option>
                                    `)}
                                </select>
                            </div>
                        </div>
                    </tn-accordion>
        `}};Nt.styles=[G,I],_([rt()],Nt.prototype,"algorithm",2),Nt=_([P("tn-experimental-settings")],Nt);var rr={};L(rr,{GeneralSettingsComponent:()=>vt});var vt=class extends C{constructor(){super();this.frequencyOfA=f.frequencyOfA;this.accidentalMode=f.accidentalMode}updateAccidentalMode(t){let e=t.target.checked===!1?1:0;this.accidentalMode=e,f.accidentalMode=e}resetFrequencyOfA(){this.frequencyOfA=f.defaultConfig.frequencyOfA,f.frequencyOfA=f.defaultConfig.frequencyOfA}updateFrequencyOfA(t){let e=Number(t.target.value);this.frequencyOfA=e,f.frequencyOfA=e}render(){return $`
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
                                   max="${f.AUpperBoundFreq}"
                                   min="${f.ALowerBoundFreq}"
                                   .value="${this.frequencyOfA}"
                                   @input=${this.updateFrequencyOfA}>
                            <label style="flex: 1" for="frequencyOfA">
                                A = ${this.frequencyOfA}HZ
                            </label>
                            ${this.frequencyOfA!==f.defaultConfig.frequencyOfA?$`
                                <i class="fa fa-undo" @click=${this.resetFrequencyOfA}></i>`:x}
                        </div>
                    </div>
                </tn-accordion>
    `}};vt.styles=[G,I],_([rt()],vt.prototype,"frequencyOfA",2),_([rt()],vt.prototype,"accidentalMode",2),vt=_([P("tn-general-settings")],vt);var ir={};L(ir,{ThemeSettingsComponent:()=>dt});var lo=M`
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
`,dt=class extends C{constructor(){super();this.primaryColor=f.getColor("primary");this.highlightColor=f.getColor("highlight");this.backgroundColor=f.getColor("background")}updateColor(t,e){let r=t.target.value;f.setColor(e,r),this.updateLocalColor(e,r),this.dispatchEvent(new me(e,r))}resetColor(t){f.setColor(t,f.defaultConfig[t]),this.updateLocalColor(t,f.defaultConfig[t]),this.dispatchEvent(new me(t,f.defaultConfig[t]))}updateLocalColor(t,e){switch(t){case"primary":this.primaryColor=e;break;case"background":this.backgroundColor=e;break;case"highlight":this.highlightColor=e;break}}render(){return $`
            <tn-accordion>
                <div slot="header">Theme</div>
                <div slot="content">
                    <div class="row color-row">
                        <div class="color-ball primary"></div>
                        <input id="primary-color" type="text" maxlength="7" size="7"
                               .value="${this.primaryColor}"
                               @input="${t=>this.updateColor(t,"primary")}">
                        <label for="primary-color" class="color-label">Primary</label>
                        ${this.primaryColor!==f.defaultConfig.primary?$`
                            <i class="fa fa-undo" @click=${()=>this.resetColor("primary")}></i>`:x}
                    </div>
                    <div class="row color-row">
                        <div class="color-ball highlight"></div>
                        <input id="highlight-color" type="text" maxlength="7" size="7"
                               .value="${this.highlightColor}"
                               @input="${t=>this.updateColor(t,"highlight")}"
                        >
                        <label for="highlight-color" class="color-label">Highlight</label>
                        ${this.highlightColor!==f.defaultConfig.highlight?$`
                            <i class="fa fa-undo" @click=${()=>this.resetColor("highlight")}></i>`:x}
                    </div>
                    <div class="row color-row">
                        <div class="color-ball background"></div>
                        <input id="background-color" type="text" maxlength="7" size="7"
                               .value="${this.backgroundColor}"
                               @input="${t=>this.updateColor(t,"background")}"
                        >
                        <label for="background-color" class="color-label">Background</label>
                        ${this.backgroundColor!==f.defaultConfig.background?$`
                            <i class="fa fa-undo" @click=${()=>this.resetColor("background")}></i>`:x}
                    </div>
                </div>
            </tn-accordion>
        `}};dt.styles=[lo,G,I],_([rt()],dt.prototype,"primaryColor",2),_([rt()],dt.prototype,"highlightColor",2),_([rt()],dt.prototype,"backgroundColor",2),dt=_([P("tn-theme-settings")],dt);var or={};L(or,{AccordionComponent:()=>ie});var co=M`
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

        margin-block: 1em;
        margin-inline: 3em;
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
`,ie=class extends C{render(){return $`
            <details>
                <summary class="header">
                    <slot name="header"></slot>
                </summary>
                <div class="content">
                    <slot name="content"></slot>
                </div>
            </details>
        `}};ie.styles=[co,I],ie=_([P("tn-accordion")],ie);var nr={};L(nr,{SettingsComponent:()=>oe});var mo=M`
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
`,oe=class extends C{render(){return $`
            <div class="modal">
                <slot class="header row" name="header"></slot>
                <slot name="content"></slot>
            </div>
            <div class="scroll-shadow"></div>
        `}};oe.styles=[mo],oe=_([P("tn-modal")],oe);var ar={};L(ar,{snapshots:()=>ci});var ci={};ci["TunerComponent should equal snapshot"]=`<tn-tuner>
</tn-tuner>
`;var cr={};L(cr,{TunerNoteComponent:()=>B});var di={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},mi=o=>(...t)=>({_$litDirective$:o,values:t}),sr=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var ye=mi(class extends sr{constructor(o){var t;if(super(o),o.type!==di.ATTRIBUTE||o.name!=="class"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(t=>o[t]).join(" ")+" "}update(o,[t]){var e,r;if(this.st===void 0){this.st=new Set,o.strings!==void 0&&(this.et=new Set(o.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in t)t[n]&&!((e=this.et)===null||e===void 0?void 0:e.has(n))&&this.st.add(n);return this.render(t)}let i=o.element.classList;this.st.forEach(n=>{n in t||(i.remove(n),this.st.delete(n))});for(let n in t){let a=!!t[n];a===this.st.has(n)||((r=this.et)===null||r===void 0?void 0:r.has(n))||(a?(i.add(n),this.st.add(n)):(i.remove(n),this.st.delete(n)))}return it}});var Rt=12,uo=["C","C","D","D","E","F","F","G","G","A","A","B"],ho=[1,3,6,8,10],fo=["C","D","D","E","E","F","G","G","A","A","B","B"],gt;(function(e){e[e.sharp=0]="sharp",e[e.flat=1]="flat"})(gt||(gt={}));var V=class{get letter(){return this.lookupLetter()}get accidental(){return this.lookupAccidental()}constructor(t){this.index=O.clamp(t,[0,127]),this.octave=Math.floor(t/Rt)-1}lookupLetter(){return f.accidentalMode?uo[this.index%Rt]:fo[this.index%Rt]}lookupAccidental(){return ho.includes(this.index%Rt)?f.accidentalMode?"#":"\u266D":""}},lr=new V(0),po=new V(69),ui=new V(127),It=class{static freqToNote(t){if(t<this.noteToPitch(lr))return lr;if(t>this.noteToPitch(ui))return ui;let e=Math.round(Rt*Math.log2(t/this.noteToPitch(lr)));if(isNaN(e))throw new Error("calculated frequency produced NaN");return new V(e)}static noteToPitch(t){let e=t.index-po.index,r=Pe(2,1/Rt);return f.frequencyOfA*Pe(r,e)}};var vo=M`
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
`,B=class extends C{constructor(){super();this.note=new V(0);this.clarity=1;this.accuracy=0;this.accuracyBuffer=[B.bufferSize];this.heightAnimator=new we}updateHeightAnimation(){if(this.heightAnimatorReference)this.heightAnimator.reference=this.heightAnimatorReference;else return;let t=O.map(this.accuracy,[0,1],[90,25]);this.heightAnimator.to=t+""}update(t){super.update(t),!isNaN(Number(t.get("accuracy")))&&this.updateHeightAnimation()}render(){let t={"tuner-note-stroke-half":f.getComponent("noteOutline"),"tuner-note-octave":!0},e={"tuner-note-stroke-full":f.getComponent("noteOutline"),"tuner-note-letter":!0},r={"tuner-note-stroke-half":f.getComponent("noteOutline"),"tuner-note-accidental":!0};return $`
            <div class="tuner-note-container">
                <svg id="view" viewBox="0 2 100 100" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">

                    <use href="#note-letter" class=${ye(e)}/>

                    ${f.getComponent("noteFill")?De`<use href="#liquid-effect" mask="url(#note-mask)"/>`:x}
                    ${f.getComponent("noteOctave")?De`<use href="#note-octave" class=${ye(t)}/>`:x}

                    <use href="#note-accidental" class=${ye(r)}/>
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
        `}};B.styles=vo,B.bufferSize=25,_([F()],B.prototype,"note",2),_([F()],B.prototype,"clarity",2),_([F({type:Number})],B.prototype,"accuracy",2),_([yr("#height-animator")],B.prototype,"heightAnimatorReference",2),B=_([P("tn-tuner-note")],B);var Ot=class{set reference(t){this._reference=t}get from(){return this._reference.getAttribute("values").match(Ot.fromMatcher)[0]}set from(t){this._reference.setAttribute("values",this._reference.getAttribute("values").replace(Ot.fromMatcher,t))}get to(){return this._reference.getAttribute("values").match(Ot.toMatcher)[0]}set to(t){this._reference.setAttribute("values",this._reference.getAttribute("values").replace(Ot.toMatcher,t))}onEndEvent(){this.from=this.to}},we=Ot;we.fromMatcher=/-?\d+\.?\d*(?=;)/g,we.toMatcher=/-?\d+\.?\d*$/g;var dr={};L(dr,{SpokeComponent:()=>nt,TunerRingComponent:()=>J});var yi=Fe(bi());var $o=M`
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
`,J=class extends C{constructor(){super(...arguments);this.accuracy=0;this.volume=0}updated(){this.style.setProperty("--needle-degree",this.convertAccuracyToRadians()+"rad")}convertAccuracyToRadians(){let t=this.accuracy*(Math.PI/2)-Math.PI/2;return this.pitchAccidental==gt.sharp&&(t*=-1),t}static angleDifference(t,e){let r=t-e;return r+=r>Math.PI?-(2*Math.PI):r<-Math.PI?2*Math.PI:0,Math.abs(r)}render(){let t=[],e=[],r=41;for(let i=0;i<r;i++){let n=i*(Math.PI/(r-1))-Math.PI/2,a=i>=(r-3)/2&&i<=(r+1)/2,s=J.angleDifference(n,this.convertAccuracyToRadians()),c=O.map(s,[Math.PI,0],[0,1]),l=O.clamp(this.volume*8,[.3,.9]);t.push($`
                <tn-spoke .index="${i}" .scaleFactor="${c}"
                          .arcPosition="${n}" .isMiddle="${a}"></tn-spoke>
            `),e.push($`
                <tn-spoke .index="${i}" .scaleFactor="${l}"
                          .arcPosition="${n+Math.PI}"></tn-spoke>
            `)}return $`
            <div class="tuner-ring">
                <div class="ring">
                    <span class="top-spokes">
                        ${f.getComponent("frequencyRing")?t:x}
                    </span>
                    <span class="bottom-spokes">
                        ${f.getComponent("volumeRing")?e:x}
                    </span>
                </div>
                ${f.getComponent("needle")?$`<div class="tuner-needle"></div>`:x}
            </div>
        `}};J.styles=$o,_([F()],J.prototype,"accuracy",2),_([F()],J.prototype,"volume",2),_([F()],J.prototype,"pitchAccidental",2),J=_([P("tn-tuner-ring")],J);var So=M`
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

`,nt=class extends C{constructor(){super(...arguments);this.scaleFactor=0;this.arcPosition=0;this.index=0;this.isMiddle=!1}connectedCallback(){super.connectedCallback(),this.isMiddle&&this.style.setProperty("background","rgb(var(--primary-color))"),this.setupPosition()}updated(){let t=(0,yi.default)(0,0,1,0),e=this.scaleFactor,r=O.map(this.scaleFactor,[0,1],[1,0]),i=t(e)*5,n=t(r)*15;this.style.setProperty("--x-scale",i+n+""),this.style.setProperty("--y-scale",i+"")}setupPosition(){let t=50*Math.cos(this.arcPosition)+50+"%",e=50*Math.sin(this.arcPosition)+50+"%";this.style.setProperty("bottom",t),this.style.setProperty("left",e),this.style.setProperty("--angle",this.arcPosition+"rad")}};nt.styles=So,_([F()],nt.prototype,"scaleFactor",2),_([F()],nt.prototype,"arcPosition",2),_([F()],nt.prototype,"index",2),_([F()],nt.prototype,"isMiddle",2),nt=_([P("tn-spoke")],nt);var hr={};L(hr,{TunerComponent:()=>at});var mt=class{static debug(...t){f.debugMode&&console.debug(t)}static error(...t){console.error(t)}};var mr=class{constructor(){this.audioContext=new AudioContext,this.analyserNode=new AnalyserNode(this.audioContext)}connect(){return br(this,null,function*(){let t;try{t=yield navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,autoGainControl:!1,noiseSuppression:!1,latency:0}})}catch(r){mt.error(r)}this.sourceNode=this.audioContext.createMediaStreamSource(t);let e=this.audioContext.createBiquadFilter();return e.type="lowpass",e.frequency.setTargetAtTime(mr.lowpassThreshold,this.audioContext.currentTime,0),this.sourceNode.connect(e),e.connect(this.analyserNode),yield this.audioContext.resume(),this})}},ae=mr;ae.lowpassThreshold=8e3;var ur=class{constructor(t=new ae,e=17){this.refreshRate=e,this._audioSource=t,this.algorithms=new Map,this.algorithms.set("McLeod",new Je(this._audioSource)),this.algorithms.set("YIN",new Qe),this.algorithms.set("AMDF",new Xe),this.algorithms.set("Dynamic Wavelet",new tr)}static Instance(t=new ae,e=17){return this._instance||(this._instance=new this(t,e))}startListening(){this._audioSource.connect().then(()=>{this.intervalReference=window.setInterval(this.listen.bind(this),this.refreshRate)})}stopListening(){window.clearInterval(this.intervalReference)}setOnListen(t){this.onListen=t}get pitch(){return this._algorithmResult.pitch}get clarity(){return this._algorithmResult.clarity}get volume(){return this._algorithmResult.volume}get audioSource(){return this._audioSource}set audioSource(t){t.analyserNode.smoothingTimeConstant=1,this._audioSource=t}listen(){this._algorithmResult=this.algorithms.get(f.algorithm).detect(this._audioSource),this.pitch===-1&&mt.debug("Pitch not detected.",this._algorithmResult.pitch,this._algorithmResult.clarity),this.onListen(this._algorithmResult.pitch,this._algorithmResult.clarity,this._algorithmResult.volume)}};var at=class extends C{constructor(){super(...arguments);this.pitchDetectorService=ur.Instance();this.note=new V(0);this.accuracy=0;this.clarity=1;this.volume=0;this.inTune=!1}connectedCallback(){super.connectedCallback(),this.pitchDetectorService.setOnListen((t,e,r)=>{if(this.clarity=e,this.volume=r,r<.01||e<.95)return;this.note=It.freqToNote(t);let i=It.noteToPitch(this.note),n=It.noteToPitch(new V(this.note.index-1)),a=It.noteToPitch(new V(this.note.index+1)),s;t<i?(this.pitchAccidental=gt.flat,s=O.map(t,[n,i],[-1,1])):(this.pitchAccidental=gt.sharp,s=O.map(t,[a,i],[-1,1])),s<0&&(s=0),this.inTune=s>.95,this.accuracy=s}),this.pitchDetectorService.startListening()}disconnectedCallback(){super.disconnectedCallback(),this.pitchDetectorService.stopListening()}updateOscillatorFrequency(t){let e=this.pitchDetectorService.audioSource;e.frequency=Number(t.target.value)}setPlayback(t){t.target.checked?this.pitchDetectorService.audioSource.sourceNode.connect(this.pitchDetectorService.audioSource.audioContext.destination):this.pitchDetectorService.audioSource.sourceNode.disconnect(this.pitchDetectorService.audioSource.audioContext.destination)}resumeContext(){this.pitchDetectorService.audioSource.audioContext.resume().then(()=>{mt.debug("Audio source resumed")},t=>{mt.error("Audio source failed to resume",t)})}render(){return $`
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
    `}};_([F()],at.prototype,"note",2),_([F()],at.prototype,"accuracy",2),_([F()],at.prototype,"clarity",2),_([F()],at.prototype,"volume",2),_([F()],at.prototype,"pitchAccidental",2),at=_([P("tn-tuner")],at);var Co=[Be,We,Ze,er,rr,Ke,ir,or,He,Ve,Ue,nr,ar,cr,dr,hr],wi=Co;wi[0].default;"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/serviceWorker.js").catch(o=>console.log("service worker not registered",o))});})();
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

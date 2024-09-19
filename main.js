(()=>{var ro=Object.create;var Xt=Object.defineProperty;var Fr=Object.getOwnPropertyDescriptor;var io=Object.getOwnPropertyNames;var oo=Object.getPrototypeOf,no=Object.prototype.hasOwnProperty;var je=Math.pow;var Nr=r=>Xt(r,"__esModule",{value:!0});var pt=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports),J=(r,t)=>{Nr(r);for(var e in t)Xt(r,e,{get:t[e],enumerable:!0})},ao=(r,t,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of io(t))!no.call(r,i)&&i!=="default"&&Xt(r,i,{get:()=>t[i],enumerable:!(e=Fr(t,i))||e.enumerable});return r},He=r=>ao(Nr(Xt(r!=null?ro(oo(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r),T=(r,t,e,i)=>{for(var o=i>1?void 0:i?Fr(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(o=(i?a(t,e,o):a(o))||o);return i&&o&&Xt(t,e,o),o};var Ir=(r,t,e)=>new Promise((i,o)=>{var n=c=>{try{s(e.next(c))}catch(l){o(l)}},a=c=>{try{s(e.throw(c))}catch(l){o(l)}},s=c=>c.done?i(c.value):Promise.resolve(c.value).then(n,a);s((e=e.apply(r,t)).next())});var yi=pt((fs,bi)=>{"use strict";function et(r){if(this.size=r|0,this.size<=1||(this.size&this.size-1)!=0)throw new Error("FFT size must be a power of two and bigger than 1");this._csize=r<<1;for(var t=new Array(this.size*2),e=0;e<t.length;e+=2){let c=Math.PI*e/this.size;t[e]=Math.cos(c),t[e+1]=-Math.sin(c)}this.table=t;for(var i=0,o=1;this.size>o;o<<=1)i++;this._width=i%2==0?i-1:i,this._bitrev=new Array(1<<this._width);for(var n=0;n<this._bitrev.length;n++){this._bitrev[n]=0;for(var a=0;a<this._width;a+=2){var s=this._width-a-2;this._bitrev[n]|=(n>>>a&3)<<s}}this._out=null,this._data=null,this._inv=0}bi.exports=et;et.prototype.fromComplexArray=function(t,e){for(var i=e||new Array(t.length>>>1),o=0;o<t.length;o+=2)i[o>>>1]=t[o];return i};et.prototype.createComplexArray=function(){let t=new Array(this._csize);for(var e=0;e<t.length;e++)t[e]=0;return t};et.prototype.toComplexArray=function(t,e){for(var i=e||this.createComplexArray(),o=0;o<i.length;o+=2)i[o]=t[o>>>1],i[o+1]=0;return i};et.prototype.completeSpectrum=function(t){for(var e=this._csize,i=e>>>1,o=2;o<i;o+=2)t[e-o]=t[o],t[e-o+1]=-t[o+1]};et.prototype.transform=function(t,e){if(t===e)throw new Error("Input and output buffers must be different");this._out=t,this._data=e,this._inv=0,this._transform4(),this._out=null,this._data=null};et.prototype.realTransform=function(t,e){if(t===e)throw new Error("Input and output buffers must be different");this._out=t,this._data=e,this._inv=0,this._realTransform4(),this._out=null,this._data=null};et.prototype.inverseTransform=function(t,e){if(t===e)throw new Error("Input and output buffers must be different");this._out=t,this._data=e,this._inv=1,this._transform4();for(var i=0;i<t.length;i++)t[i]/=this.size;this._out=null,this._data=null};et.prototype._transform4=function(){var t=this._out,e=this._csize,i=this._width,o=1<<i,n=e/o<<1,a,s,c=this._bitrev;if(n===4)for(a=0,s=0;a<e;a+=n,s++){let y=c[s];this._singleTransform2(a,y,o)}else for(a=0,s=0;a<e;a+=n,s++){let y=c[s];this._singleTransform4(a,y,o)}var l=this._inv?-1:1,m=this.table;for(o>>=2;o>=2;o>>=2){n=e/o<<1;var u=n>>>2;for(a=0;a<e;a+=n)for(var d=a+u,b=a,v=0;b<d;b+=2,v+=o){let y=b,_=y+u,h=_+u,f=h+u,p=t[y],w=t[y+1],k=t[_],C=t[_+1],N=t[h],x=t[h+1],F=t[f],L=t[f+1],Y=p,j=w,R=m[v],A=l*m[v+1],$=k*R-C*A,g=k*A+C*R,S=m[2*v],E=l*m[2*v+1],P=N*S-x*E,z=N*E+x*S,q=m[3*v],H=l*m[3*v+1],G=F*q-L*H,ct=F*H+L*q,dt=Y+P,X=j+z,yt=Y-P,K=j-z,wt=$+G,ft=g+ct,ot=l*($-G),kt=l*(g-ct),Ft=dt+wt,Ne=X+ft,Ie=dt-wt,ze=X-ft,De=yt+kt,Le=K-ot,Oe=yt-kt,qe=K+ot;t[y]=Ft,t[y+1]=Ne,t[_]=De,t[_+1]=Le,t[h]=Ie,t[h+1]=ze,t[f]=Oe,t[f+1]=qe}}};et.prototype._singleTransform2=function(t,e,i){let o=this._out,n=this._data,a=n[e],s=n[e+1],c=n[e+i],l=n[e+i+1],m=a+c,u=s+l,d=a-c,b=s-l;o[t]=m,o[t+1]=u,o[t+2]=d,o[t+3]=b};et.prototype._singleTransform4=function(t,e,i){let o=this._out,n=this._data,a=this._inv?-1:1,s=i*2,c=i*3,l=n[e],m=n[e+1],u=n[e+i],d=n[e+i+1],b=n[e+s],v=n[e+s+1],y=n[e+c],_=n[e+c+1],h=l+b,f=m+v,p=l-b,w=m-v,k=u+y,C=d+_,N=a*(u-y),x=a*(d-_),F=h+k,L=f+C,Y=p+x,j=w-N,R=h-k,A=f-C,$=p-x,g=w+N;o[t]=F,o[t+1]=L,o[t+2]=Y,o[t+3]=j,o[t+4]=R,o[t+5]=A,o[t+6]=$,o[t+7]=g};et.prototype._realTransform4=function(){var t=this._out,e=this._csize,i=this._width,o=1<<i,n=e/o<<1,a,s,c=this._bitrev;if(n===4)for(a=0,s=0;a<e;a+=n,s++){let Ue=c[s];this._singleRealTransform2(a,Ue>>>1,o>>>1)}else for(a=0,s=0;a<e;a+=n,s++){let Ue=c[s];this._singleRealTransform4(a,Ue>>>1,o>>>1)}var l=this._inv?-1:1,m=this.table;for(o>>=2;o>=2;o>>=2){n=e/o<<1;var u=n>>>1,d=u>>>1,b=d>>>1;for(a=0;a<e;a+=n)for(var v=0,y=0;v<=b;v+=2,y+=o){var _=a+v,h=_+d,f=h+d,p=f+d,w=t[_],k=t[_+1],C=t[h],N=t[h+1],x=t[f],F=t[f+1],L=t[p],Y=t[p+1],j=w,R=k,A=m[y],$=l*m[y+1],g=C*A-N*$,S=C*$+N*A,E=m[2*y],P=l*m[2*y+1],z=x*E-F*P,q=x*P+F*E,H=m[3*y],G=l*m[3*y+1],ct=L*H-Y*G,dt=L*G+Y*H,X=j+z,yt=R+q,K=j-z,wt=R-q,ft=g+ct,ot=S+dt,kt=l*(g-ct),Ft=l*(S-dt),Ne=X+ft,Ie=yt+ot,ze=K+Ft,De=wt-kt;if(t[_]=Ne,t[_+1]=Ie,t[h]=ze,t[h+1]=De,v===0){var Le=X-ft,Oe=yt-ot;t[f]=Le,t[f+1]=Oe;continue}if(v!==b){var qe=K,Yi=-wt,Vi=X,Wi=-yt,Gi=-l*Ft,Ki=-l*kt,Zi=-l*ot,Ji=-l*ft,Qi=qe+Gi,Xi=Yi+Ki,to=Vi+Ji,eo=Wi-Zi,Rr=a+d-v,Pr=a+u-v;t[Rr]=Qi,t[Rr+1]=Xi,t[Pr]=to,t[Pr+1]=eo}}}};et.prototype._singleRealTransform2=function(t,e,i){let o=this._out,n=this._data,a=n[e],s=n[e+i],c=a+s,l=a-s;o[t]=c,o[t+1]=0,o[t+2]=l,o[t+3]=0};et.prototype._singleRealTransform4=function(t,e,i){let o=this._out,n=this._data,a=this._inv?-1:1,s=i*2,c=i*3,l=n[e],m=n[e+i],u=n[e+s],d=n[e+c],b=l+u,v=l-u,y=m+d,_=a*(m-d),h=b+y,f=v,p=-_,w=b-y,k=v,C=_;o[t]=h,o[t+1]=0,o[t+2]=f,o[t+3]=p,o[t+4]=w,o[t+5]=0,o[t+6]=k,o[t+7]=C}});var ki=pt(de=>{"use strict";var Ae=de&&de.__assign||function(){return Ae=Object.assign||function(r){for(var t,e=1,i=arguments.length;e<i;e++){t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},Ae.apply(this,arguments)};Object.defineProperty(de,"__esModule",{value:!0});var Ro={threshold:.1,sampleRate:44100,probabilityThreshold:.1};function Po(r){r===void 0&&(r={});var t=Ae(Ae({},Ro),r),e=t.threshold,i=t.sampleRate,o=t.probabilityThreshold;return function(a){var s;for(s=1;s<a.length;s*=2);s/=2;for(var c=s/2,l=new Float32Array(c),m=0,u,d=0;d<c;d++)l[d]=0;for(var d=1;d<c;d++)for(var b=0;b<c;b++){var v=a[b]-a[b+d];l[d]+=v*v}l[0]=1,l[1]=1;for(var y=0,d=1;d<c;d++)y+=l[d],l[d]*=d/y;for(u=2;u<c;u++)if(l[u]<e){for(;u+1<c&&l[u+1]<l[u];)u++;m=1-l[u];break}if(u===c||l[u]>=e||m<o)return null;var _,h,f;if(u<1?h=u:h=u-1,u+1<c?f=u+1:f=u,h===u)l[u]<=l[f]?_=u:_=f;else if(f===u)l[u]<=l[h]?_=u:_=h;else{var p=l[h],w=l[u],k=l[f];_=u+(k-p)/(2*(2*w-k-p))}return i/_}}de.YIN=Po});var _i=pt(ue=>{"use strict";var $e=ue&&ue.__assign||function(){return $e=Object.assign||function(r){for(var t,e=1,i=arguments.length;e<i;e++){t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},$e.apply(this,arguments)};Object.defineProperty(ue,"__esModule",{value:!0});var Fo={sampleRate:44100,minFrequency:82,maxFrequency:1e3,ratio:5,sensitivity:.1};function No(r){r===void 0&&(r={});var t=$e($e({},Fo),r),e=t.sampleRate,i=t.minFrequency,o=t.maxFrequency,n=t.sensitivity,a=t.ratio,s=[],c=Math.ceil(e/i),l=Math.floor(e/o);return function(u){var d=u.length,b=0,v=1/0,y=-1/0,_,h,f,p,w,k,C,N;for(p=0;p<d;p++)if(l<=p&&p<=c){for(C=0,N=p,b=0,_=[],h=[];C<d-p;b++,N++,C++)_[b]=u[C],h[b]=u[N];var x=_.length;for(f=[],k=0;k<x;k++)f[k]=_[k]-h[k];var F=0;for(k=0;k<x;k++)F+=Math.abs(f[k]);s[p]=F}for(w=l;w<c;w++)s[w]<v&&(v=s[w]),s[w]>y&&(y=s[w]);var L=Math.round(n*(y-v)+v);for(w=l;w<=c&&s[w]>L;w++);var Y=l/2;v=s[w];var j=w;for(p=w-1;p<w+Y&&p<=c;p++)s[p]<v&&(v=s[p],j=p);return Math.round(s[j]*a)<y?e/j:null}}ue.AMDF=No});var Ai=pt(he=>{"use strict";var Se=he&&he.__assign||function(){return Se=Object.assign||function(r){for(var t,e=1,i=arguments.length;e<i;e++){t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},Se.apply(this,arguments)};Object.defineProperty(he,"__esModule",{value:!0});var xi={sampleRate:44100};function Io(r){r===void 0&&(r=xi);var t=Se(Se({},xi),r),e=t.sampleRate;return function(o){var n=o.length,a=0,s,c,l,m;for(s=0;s<n;s++)m=o[s],a+=m*m;if(a=Math.sqrt(a/n),a<.01)return-1;var u=0,d=n-1,b=.2;for(s=0;s<n/2;s++)if(Math.abs(o[s])<b){u=s;break}for(s=1;s<n/2;s++)if(Math.abs(o[n-s])<b){d=n-s;break}var v=o.slice(u,d),y=v.length,_=new Array(y).fill(0);for(s=0;s<y;s++)for(c=0;c<y-s;c++)_[s]=_[s]+v[c]*v[c+s];for(l=0;_[l]>_[l+1];)l++;var h=-1,f=-1;for(s=l;s<y;s++)_[s]>h&&(h=_[s],f=s);var p=f,w=_[p-1],k=_[p],C=_[p+1],N=(w+C-2*k)/2,x=(C-w)/2;return N&&(p=p-x/(2*N)),e/p}}he.ACF2PLUS=Io});var $i=pt(me=>{"use strict";var Ee=me&&me.__assign||function(){return Ee=Object.assign||function(r){for(var t,e=1,i=arguments.length;e<i;e++){t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},Ee.apply(this,arguments)};Object.defineProperty(me,"__esModule",{value:!0});var zo=6,Do=3e3,Lo=3,Oo=.75,qo={sampleRate:44100};function Uo(r){r===void 0&&(r={});var t=Ee(Ee({},qo),r),e=t.sampleRate;return function(o){for(var n=[],a=[],s=o.length,c=null,l=0,m=0,u=0,d=0;d<s;d++){var b=o[d];l=l+b,u=Math.max(u,b),m=Math.min(m,b)}l/=s,m-=l,u-=l;for(var v=u>-1*m?u:-1*m,y=v*Oo,_=0,h=-1,f=o.length,p,w,k;p=~~(e/(Math.pow(2,_)*Do)),!(f<2);){var C=void 0,N=-1e3,x=-1e6,F=-1e6,L=!1,Y=!1;k=0,w=0;for(var d=2;d<f;d++){var j=o[d]-l,R=o[d-1]-l;R<=0&&j>0&&(L=!0),R>=0&&j<0&&(Y=!0),C=j-R,N>-1e3&&(Y&&N<0&&C>=0&&Math.abs(j)>=y&&d>x+p&&(n[k++]=d,x=d,Y=!1),L&&N>0&&C<=0&&Math.abs(j)>=y&&d>F+p&&(a[w++]=d,F=d,L=!1)),N=C}if(k===0&&w===0)break;for(var A=void 0,$=[],d=0;d<f;d++)$[d]=0;for(var d=0;d<k;d++)for(var g=1;g<Lo;g++)d+g<k&&(A=Math.abs(n[d]-n[d+g]),$[A]+=1);for(var S=-1,E=-1,d=0;d<f;d++){for(var P=0,g=-1*p;g<=p;g++)d+g>=0&&d+g<f&&(P+=$[d+g]);P===E?d===2*S&&(S=d):P>E&&(E=P,S=d)}for(var z=0,q=0,g=-p;g<=p;g++)if(S+g>=0&&S+g<s){var H=$[S+g];H>0&&(q+=H,z+=(S+g)*H)}if(z/=q,h>-1&&Math.abs(z*2-h)<=2*p){c=e/(Math.pow(2,_-1)*h);break}if(h=z,_++,_>=zo||f<2)break;var G=o.subarray(0);f===$.length&&(G=new Float32Array(f/2));for(var d=0;d<f/2;d++)G[d]=(o[2*d]+o[2*d+1])/2;o=G,f/=2}return c}}me.DynamicWavelet=Uo});var Si=pt(fe=>{"use strict";var Ce=fe&&fe.__assign||function(){return Ce=Object.assign||function(r){for(var t,e=1,i=arguments.length;e<i;e++){t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},Ce.apply(this,arguments)};Object.defineProperty(fe,"__esModule",{value:!0});var jo={bufferSize:1024,cutoff:.97,sampleRate:44100};function Ho(r){r===void 0&&(r={});var t=Ce(Ce({},jo),r),e=t.bufferSize,i=t.cutoff,o=t.sampleRate,n=.5,a=80,s=new Float32Array(e),c=new Float32Array(e),l,m,u=[],d=[],b=[];function v(h){var f,p;c[0]=h[0]*h[0];for(var w=1;w<h.length;w+=1)c[w]=h[w]*h[w]+c[w-1];for(var k=0;k<h.length;k++){f=0,p=c[h.length-1-k]+c[h.length-1]-c[k];for(var w=0;w<h.length-k;w++)f+=h[w]*h[w+k];s[k]=2*f/p}}function y(h){var f=s[h-1],p=s[h],w=s[h+1],k=h,C=w+f-2*p;if(C===0)l=k,m=p;else{var N=f-w;l=k+N/(2*C),m=p-N*N/(8*C)}}function _(){for(var h=0,f=0;h<(s.length-1)/3&&s[h]>0;)h++;for(;h<s.length-1&&s[h]<=0;)h++;for(h==0&&(h=1);h<s.length-1;)if(s[h]>s[h-1]&&s[h]>=s[h+1]&&(f==0||s[h]>s[f])&&(f=h),h++,h<s.length-1&&s[h]<=0)for(f>0&&(u.push(f),f=0);h<s.length-1&&s[h]<=0;)h++;f>0&&u.push(f)}return function(f){var p;u=[],d=[],b=[],v(f),_();for(var w=-1/0,k=0;k<u.length;k++){var C=u[k];w=Math.max(w,s[C]),s[C]>n&&(y(C),b.push(m),d.push(l),w=Math.max(w,m))}if(d.length){for(var N=i*w,x=0,k=0;k<b.length;k++)if(b[k]>=N){x=k;break}var F=d[x],L=o/F;L>a?p=L:p=-1}else p=-1;return{probability:w,freq:p}}}fe.Macleod=Ho});var Ei=pt(Rt=>{"use strict";var Me=Rt&&Rt.__assign||function(){return Me=Object.assign||function(r){for(var t,e=1,i=arguments.length;e<i;e++){t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},Me.apply(this,arguments)};Object.defineProperty(Rt,"__esModule",{value:!0});Rt.DEFAULT_FREQUENCIES_PARAMS={tempo:120,quantization:4,sampleRate:44100};function Bo(r,t){var e=r.map(function(l){return l(t)}).filter(function(l){return l!==null}).sort(function(l,m){return l-m});if(e.length===1)return e[0];if(e.length===2){var i=e[0],o=e[1];return i*2>o?Math.sqrt(i*o):i}else{var i=e[0],o=e[1],n=e[e.length-2],a=e[e.length-1],s=i*2>o?e:e.slice(1),c=n*2>a?s:s.slice(0,-1);return Math.pow(c.reduce(function(u,d){return u*d},1),1/c.length)}}function Yo(r,t,e){e===void 0&&(e={});var i=Me(Me({},Rt.DEFAULT_FREQUENCIES_PARAMS),e),o=i.tempo,n=i.quantization,a=i.sampleRate,s=t.length,c=Math.round(a*60/(n*o)),l;Array.isArray(r)?l=Bo.bind(null,r):l=r;for(var m=[],u=0,d=s-c;u<=d;u+=c){var b=t.slice(u,u+c),v=l(b);m.push(v)}return m}Rt.frequencies=Yo});var Ni=pt(gt=>{"use strict";Object.defineProperty(gt,"__esModule",{value:!0});var Ci=ki();gt.YIN=Ci.YIN;var Mi=_i();gt.AMDF=Mi.AMDF;var Ti=Ai();gt.ACF2PLUS=Ti.ACF2PLUS;var Ri=$i();gt.DynamicWavelet=Ri.DynamicWavelet;var Pi=Si();gt.Macleod=Pi.Macleod;var Fi=Ei();gt.frequencies=Fi.frequencies;gt.default={YIN:Ci.YIN,AMDF:Mi.AMDF,ACF2PLUS:Ti.ACF2PLUS,DynamicWavelet:Ri.DynamicWavelet,Macleod:Pi.Macleod,frequencies:Fi.frequencies}});var ji=pt((Xs,Ui)=>{var Zo=4,Jo=.001,Qo=1e-7,Xo=10,ge=11,Pe=1/(ge-1),tn=typeof Float32Array=="function";function Di(r,t){return 1-3*t+3*r}function Li(r,t){return 3*t-6*r}function Oi(r){return 3*r}function Fe(r,t,e){return((Di(t,e)*r+Li(t,e))*r+Oi(t))*r}function qi(r,t,e){return 3*Di(t,e)*r*r+2*Li(t,e)*r+Oi(t)}function en(r,t,e,i,o){var n,a,s=0;do a=t+(e-t)/2,n=Fe(a,i,o)-r,n>0?e=a:t=a;while(Math.abs(n)>Qo&&++s<Xo);return a}function rn(r,t,e,i){for(var o=0;o<Zo;++o){var n=qi(t,e,i);if(n===0)return t;var a=Fe(t,e,i)-r;t-=a/n}return t}function on(r){return r}Ui.exports=function(t,e,i,o){if(!(0<=t&&t<=1&&0<=i&&i<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===e&&i===o)return on;for(var n=tn?new Float32Array(ge):new Array(ge),a=0;a<ge;++a)n[a]=Fe(a*Pe,t,i);function s(c){for(var l=0,m=1,u=ge-1;m!==u&&n[m]<=c;++m)l+=Pe;--m;var d=(c-n[m])/(n[m+1]-n[m]),b=l+d*Pe,v=qi(b,t,i);return v>=Jo?rn(c,b,t,i):v===0?b:en(c,l,l+Pe,t,i)}return function(l){return l===0?0:l===1?1:Fe(s(l),e,o)}}});var tr={};J(tr,{AppBodyComponent:()=>Ct});var B=r=>t=>typeof t=="function"?((e,i)=>(window.customElements.define(e,i),i))(r,t):((e,i)=>{let{kind:o,elements:n}=i;return{kind:o,elements:n,finisher(a){window.customElements.define(e,a)}}})(r,t);var so=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,r)}};function V(r){return(t,e)=>e!==void 0?((i,o,n)=>{o.constructor.createProperty(n,i)})(r,t,e):so(r,t)}function st(r){return V({...r,state:!0})}var Nt=({finisher:r,descriptor:t})=>(e,i)=>{var o;if(i===void 0){let n=(o=e.originalKey)!==null&&o!==void 0?o:e.key,a=t!=null?{kind:"method",placement:"prototype",key:n,descriptor:t(e.key)}:{...e,key:n};return r!=null&&(a.finisher=function(s){r(s,n)}),a}{let n=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),r==null||r(n,i)}};function zr(r,t){return Nt({descriptor:e=>{let i={get(){var o,n;return(n=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(r))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(t){let o=typeof e=="symbol"?Symbol():"__"+e;i.get=function(){var n,a;return this[o]===void 0&&(this[o]=(a=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(r))!==null&&a!==void 0?a:null),this[o]}}return i}})}var ye=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Be=Symbol(),Dr=new Map,we=class{constructor(t,e){if(this._$cssResult$=!0,e!==Be)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=Dr.get(this.cssText);return ye&&t===void 0&&(Dr.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}},It=r=>new we(typeof r=="string"?r:r+"",Be),U=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((i,o,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[n+1],r[0]);return new we(e,Be)},Ye=(r,t)=>{ye?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let i=document.createElement("style"),o=window.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=e.cssText,r.appendChild(i)})},ke=ye?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return It(e)})(r):r;var Ve,Lr=window.trustedTypes,lo=Lr?Lr.emptyScript:"",Or=window.reactiveElementPolyfillSupport,We={toAttribute(r,t){switch(t){case Boolean:r=r?lo:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},qr=(r,t)=>t!==r&&(t==t||r==r),Ge={attribute:!0,type:String,converter:We,reflect:!1,hasChanged:qr},_t=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,i)=>{let o=this._$Eh(i,e);o!==void 0&&(this._$Eu.set(o,i),t.push(o))}),t}static createProperty(t,e=Ge){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){let n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ge}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){let e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let o of i)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let o of i)e.unshift(ke(o))}else t!==void 0&&e.push(ke(t));return e}static _$Eh(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Ye(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=Ge){var o,n;let a=this.constructor._$Eh(t,i);if(a!==void 0&&i.reflect===!0){let s=((n=(o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==null&&n!==void 0?n:We.toAttribute)(e,i.type);this._$Ei=t,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$Ei=null}}_$AK(t,e){var i,o,n;let a=this.constructor,s=a._$Eu.get(t);if(s!==void 0&&this._$Ei!==s){let c=a.getPropertyOptions(s),l=c.converter,m=(n=(o=(i=l)===null||i===void 0?void 0:i.fromAttribute)!==null&&o!==void 0?o:typeof l=="function"?l:null)!==null&&n!==void 0?n:We.fromAttribute;this._$Ei=s,this[s]=m(e,c.type),this._$Ei=null}}requestUpdate(t,e,i){let o=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||qr)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Ei!==t&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((o,n)=>this[n]=o),this._$Et=void 0);let e=!1,i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$Eg)===null||t===void 0||t.forEach(o=>{var n;return(n=o.hostUpdate)===null||n===void 0?void 0:n.call(o)}),this.update(i)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$E_!==void 0&&(this._$E_.forEach((e,i)=>this._$ES(i,this[i],e)),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}};_t.finalized=!0,_t.elementProperties=new Map,_t.elementStyles=[],_t.shadowRootOptions={mode:"open"},Or==null||Or({ReactiveElement:_t}),((Ve=globalThis.reactiveElementVersions)!==null&&Ve!==void 0?Ve:globalThis.reactiveElementVersions=[]).push("1.0.2");var Ke,zt=globalThis.trustedTypes,Ur=zt?zt.createPolicy("lit-html",{createHTML:r=>r}):void 0,xt=`lit$${(Math.random()+"").slice(9)}$`,jr="?"+xt,co=`<${jr}>`,Dt=document,te=(r="")=>Dt.createComment(r),ee=r=>r===null||typeof r!="object"&&typeof r!="function",Hr=Array.isArray,uo=r=>{var t;return Hr(r)||typeof((t=r)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},re=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Br=/-->/g,Yr=/>/g,St=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Vr=/'/g,Wr=/"/g,Gr=/^(?:script|style|textarea)$/i,Kr=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),I=Kr(1),Lt=Kr(2),vt=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),Zr=new WeakMap,Jr=(r,t,e)=>{var i,o;let n=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t,a=n._$litPart$;if(a===void 0){let s=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:null;n._$litPart$=a=new jt(t.insertBefore(te(),s),s,void 0,e??{})}return a._$AI(r),a},Ot=Dt.createTreeWalker(Dt,129,null,!1),ho=(r,t)=>{let e=r.length-1,i=[],o,n=t===2?"<svg>":"",a=re;for(let c=0;c<e;c++){let l=r[c],m,u,d=-1,b=0;for(;b<l.length&&(a.lastIndex=b,u=a.exec(l),u!==null);)b=a.lastIndex,a===re?u[1]==="!--"?a=Br:u[1]!==void 0?a=Yr:u[2]!==void 0?(Gr.test(u[2])&&(o=RegExp("</"+u[2],"g")),a=St):u[3]!==void 0&&(a=St):a===St?u[0]===">"?(a=o??re,d=-1):u[1]===void 0?d=-2:(d=a.lastIndex-u[2].length,m=u[1],a=u[3]===void 0?St:u[3]==='"'?Wr:Vr):a===Wr||a===Vr?a=St:a===Br||a===Yr?a=re:(a=St,o=void 0);let v=a===St&&r[c+1].startsWith("/>")?" ":"";n+=a===re?l+co:d>=0?(i.push(m),l.slice(0,d)+"$lit$"+l.slice(d)+xt+v):l+xt+(d===-2?(i.push(void 0),c):v)}let s=n+(r[e]||"<?>")+(t===2?"</svg>":"");return[Ur!==void 0?Ur.createHTML(s):s,i]},qt=class{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,a=0,s=t.length-1,c=this.parts,[l,m]=ho(t,e);if(this.el=qt.createElement(l,i),Ot.currentNode=this.el.content,e===2){let u=this.el.content,d=u.firstChild;d.remove(),u.append(...d.childNodes)}for(;(o=Ot.nextNode())!==null&&c.length<s;){if(o.nodeType===1){if(o.hasAttributes()){let u=[];for(let d of o.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(xt)){let b=m[a++];if(u.push(d),b!==void 0){let v=o.getAttribute(b.toLowerCase()+"$lit$").split(xt),y=/([.?@])?(.*)/.exec(b);c.push({type:1,index:n,name:y[2],strings:v,ctor:y[1]==="."?Xr:y[1]==="?"?ti:y[1]==="@"?ei:ie})}else c.push({type:6,index:n})}for(let d of u)o.removeAttribute(d)}if(Gr.test(o.tagName)){let u=o.textContent.split(xt),d=u.length-1;if(d>0){o.textContent=zt?zt.emptyScript:"";for(let b=0;b<d;b++)o.append(u[b],te()),Ot.nextNode(),c.push({type:2,index:++n});o.append(u[d],te())}}}else if(o.nodeType===8)if(o.data===jr)c.push({type:2,index:n});else{let u=-1;for(;(u=o.data.indexOf(xt,u+1))!==-1;)c.push({type:7,index:n}),u+=xt.length-1}n++}}static createElement(t,e){let i=Dt.createElement("template");return i.innerHTML=t,i}};function Ut(r,t,e=r,i){var o,n,a,s;if(t===vt)return t;let c=i!==void 0?(o=e._$Cl)===null||o===void 0?void 0:o[i]:e._$Cu,l=ee(t)?void 0:t._$litDirective$;return(c==null?void 0:c.constructor)!==l&&((n=c==null?void 0:c._$AO)===null||n===void 0||n.call(c,!1),l===void 0?c=void 0:(c=new l(r),c._$AT(r,e,i)),i!==void 0?((a=(s=e)._$Cl)!==null&&a!==void 0?a:s._$Cl=[])[i]=c:e._$Cu=c),c!==void 0&&(t=Ut(r,c._$AS(r,t.values),c,i)),t}var Qr=class{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;let{el:{content:i},parts:o}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:Dt).importNode(i,!0);Ot.currentNode=n;let a=Ot.nextNode(),s=0,c=0,l=o[0];for(;l!==void 0;){if(s===l.index){let m;l.type===2?m=new jt(a,a.nextSibling,this,t):l.type===1?m=new l.ctor(a,l.name,l.strings,this,t):l.type===6&&(m=new ri(a,this,t)),this.v.push(m),l=o[++c]}s!==(l==null?void 0:l.index)&&(a=Ot.nextNode(),s++)}return n}m(t){let e=0;for(let i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},jt=class{constructor(t,e,i,o){var n;this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cg=(n=o==null?void 0:o.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ut(this,t,e),ee(t)?t===D||t==null||t===""?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==vt&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.S(t):uo(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==D&&ee(this._$AH)?this._$AA.nextSibling.data=t:this.S(Dt.createTextNode(t)),this._$AH=t}T(t){var e;let{values:i,_$litType$:o}=t,n=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=qt.createElement(o.h,this.options)),o);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.m(i);else{let a=new Qr(n,this),s=a.p(this.options);a.m(i),this.S(s),this._$AH=a}}_$AC(t){let e=Zr.get(t.strings);return e===void 0&&Zr.set(t.strings,e=new qt(t)),e}M(t){Hr(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,o=0;for(let n of t)o===e.length?e.push(i=new jt(this.A(te()),this.A(te()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){let o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},ie=class{constructor(t,e,i,o,n){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=D}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){let n=this.strings,a=!1;if(n===void 0)t=Ut(this,t,e,0),a=!ee(t)||t!==this._$AH&&t!==vt,a&&(this._$AH=t);else{let s=t,c,l;for(t=n[0],c=0;c<n.length-1;c++)l=Ut(this,s[i+c],e,c),l===vt&&(l=this._$AH[c]),a||(a=!ee(l)||l!==this._$AH[c]),l===D?t=D:t!==D&&(t+=(l??"")+n[c+1]),this._$AH[c]=l}a&&!o&&this.k(t)}k(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Xr=class extends ie{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===D?void 0:t}},mo=zt?zt.emptyScript:"",ti=class extends ie{constructor(){super(...arguments),this.type=4}k(t){t&&t!==D?this.element.setAttribute(this.name,mo):this.element.removeAttribute(this.name)}},ei=class extends ie{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=Ut(this,t,e,0))!==null&&i!==void 0?i:D)===vt)return;let o=this._$AH,n=t===D&&o!==D||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,a=t!==D&&(o===D||n);n&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},ri=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ut(this,t)}};var ii=window.litHtmlPolyfillSupport;ii==null||ii(qt,jt),((Ke=globalThis.litHtmlVersions)!==null&&Ke!==void 0?Ke:globalThis.litHtmlVersions=[]).push("2.0.2");var Ze,Je;var O=class extends _t{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Jr(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return vt}};O.finalized=!0,O._$litElement$=!0,(Ze=globalThis.litElementHydrateSupport)===null||Ze===void 0||Ze.call(globalThis,{LitElement:O});var oi=globalThis.litElementPolyfillSupport;oi==null||oi({LitElement:O});((Je=globalThis.litElementVersions)!==null&&Je!==void 0?Je:globalThis.litElementVersions=[]).push("3.0.2");var Qe={};J(Qe,{default:()=>Z});console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");var Z=U`
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
`;var ni=["primary","highlight","background"],_e=class extends Event{constructor(t,e){super("theme-changed",{bubbles:!0,composed:!0});this.color=t,this.value=e}};var oe={frequencyRing:"Frequency Ring",volumeRing:"Volume Ring",noteFill:"Note Fill",noteOctave:"Note Octave",noteOutline:"Note Outline",needle:"Needle",donationButton:"Donation Button",settingsButton:"Settings Button"};var Q=class{};Q.map=(t,e,i)=>(t-e[0])*(i[1]-i[0])/(e[1]-e[0])+i[0],Q.clamp=(t,e)=>Math.min(Math.max(t,e[0]),e[1]),Q.round=(t,e)=>Number(Math.round(Number(t+"e"+e))+"e-"+e);var M=class{static Instance(){return this._instance||(this._instance=new this)}static isHexCode(t){return t.match(/^#[0-9a-f]{6}/i)}static getPropertyName(t,e){let i={};return Object.keys(t).map(o=>i[o]=o),e(i)}static getStoredValueOrDefault(t){var e;return(e=localStorage.getItem(t))!=null?e:this.defaultConfig[t]}static set config(t){Object.keys(t).forEach(e=>{localStorage.setItem(e,t[e].toString())})}static get config(){let t={accidentalMode:this.accidentalMode,frequencyOfA:this.frequencyOfA,debugMode:"false",algorithm:this.algorithm};for(let e in ni)t[e]=this.getColor(e);for(let e in oe)t[e]=this.getComponent(e).toString();return t}static get debugMode(){return this.getStoredValueOrDefault("debugMode")==="true"}static set debugMode(t){localStorage.setItem(this.getPropertyName(this.defaultConfig,e=>e.debugMode),t.toString())}static set accidentalMode(t){localStorage.setItem(this.getPropertyName(this.defaultConfig,e=>e.accidentalMode),t.toString())}static get accidentalMode(){return Number(this.getStoredValueOrDefault("accidentalMode"))}static set frequencyOfA(t){t=Q.clamp(t,[this.ALowerBoundFreq,this.AUpperBoundFreq]),localStorage.setItem(this.getPropertyName(this.defaultConfig,e=>e.frequencyOfA),t.toString())}static get frequencyOfA(){return Number(this.getStoredValueOrDefault("frequencyOfA"))}static setColor(t,e){this.isHexCode(e)&&localStorage.setItem(this.getPropertyName(this.defaultConfig,i=>i[t]),e)}static getColor(t){return this.getStoredValueOrDefault(t)}static set algorithm(t){localStorage.setItem(this.getPropertyName(this.defaultConfig,e=>e.algorithm),t)}static get algorithm(){return this.getStoredValueOrDefault("algorithm")}static setComponent(t,e){localStorage.setItem(this.getPropertyName(this.defaultConfig,i=>i[t]),e.toString())}static getComponent(t){return this.getStoredValueOrDefault(t)==="true"}};M.defaultConfig={accidentalMode:1,frequencyOfA:440,debugMode:"true",primary:"#FF7A00",highlight:"#FFFFFF",background:"#000000",algorithm:"McLeod",frequencyRing:"true",volumeRing:"true",noteFill:"true",noteOctave:"true",noteOutline:"true",needle:"true",donationButton:"true",settingsButton:"true"},M.ALowerBoundFreq=415,M.AUpperBoundFreq=466;var Ht=class{static hexToRgb(t){let e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;t=t.replace(e,function(o,n,a,s){return n+n+a+a+s+s});let i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return i?{r:parseInt(i[1],16),g:parseInt(i[2],16),b:parseInt(i[3],16)}:null}};var Xe={};J(Xe,{default:()=>Et});var Et=U`
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
`;var fo=U`
    :root {
        --doc-height: 100%;
    }

    :host {
        // Necessary for using the theme on load
        --primary-color: ${It(M.defaultConfig.primary)};
        --background-color: ${It(M.defaultConfig.background)};
        --highlight-color: ${It(M.defaultConfig.highlight)};
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
`,Ct=class extends O{constructor(){super(...arguments);this.showSettings=!1;this.showDonation=!1}connectedCallback(){super.connectedCallback(),this.calculateDocumentHeight();let t=Ht.hexToRgb(M.getColor("primary")),e=Ht.hexToRgb(M.getColor("highlight")),i=Ht.hexToRgb(M.getColor("background"));this.style.setProperty("--primary-color",`${t.r}, ${t.g}, ${t.b}`),this.style.setProperty("--highlight-color",`${e.r}, ${e.g}, ${e.b}`),this.style.setProperty("--background-color",`${i.r}, ${i.g}, ${i.b}`)}calculateDocumentHeight(){let t=()=>{document.documentElement.style.setProperty("--doc-height",`${window.innerHeight}px`)};window.addEventListener("resize",t),t()}refreshTheme(t){let e=Ht.hexToRgb(t.value);this.style.setProperty("--"+t.color+"-color",`${e.r}, ${e.g}, ${e.b}`)}toggleSettings(){this.showDonation=!1,this.showSettings=!this.showSettings}renderSettings(){return this.showSettings?I`
            <tn-settings @theme-changed="${this.refreshTheme}"></tn-settings>`:D}toggleDonation(){this.showSettings=!1,this.showDonation=!this.showDonation}onDoubleClick(){this.showSettings||this.toggleSettings()}renderDonation(){return this.showDonation?I`
            <tn-donation></tn-donation>`:D}renderButtonDonation(){return M.getComponent("donationButton")?I`
                <button class="floating-button donation-button" @click="${this.toggleDonation}"><i
                        class="${this.showDonation?"far fa-circle-xmark":"fa fa-coffee"}"></i></button>
        `:D}renderButtonSettings(){return!M.getComponent("settingsButton")&&!this.showSettings?D:I`
                <button class="floating-button settings-button" @click="${this.toggleSettings}"><i
                        class="${this.showSettings?"far fa-circle-xmark":"fa fa-gear"}"></i></button>
        `}render(){return I`
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
        `}};Ct.styles=[fo,Z,Et],T([V()],Ct.prototype,"showSettings",2),T([V()],Ct.prototype,"showDonation",2),Ct=T([B("tn-app")],Ct);var ir={};J(ir,{DonationComponent:()=>ne,DonationComponentStyles:()=>ai});var rr={};J(rr,{default:()=>er});var er=U`
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
`;var ai=U`

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
`,ne=class extends O{constructor(){super()}render(){return I`
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
        `}};ne.styles=[ai,Et,er,Z],ne=T([B("tn-donation")],ne);var or={};J(or,{PitchPipeComponent:()=>Bt});var po=U`
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
`,Bt=class extends O{constructor(){super(...arguments);this._handlePlay=()=>{var t;new Audio(`./audio/pitch${(t=this.note)==null?void 0:t.index}.mp3`).play()}}render(){return I`
                <div class="play-note-button-container" @click=${this._handlePlay}>
                    <button class="play-note-button"><i class="fa fa-circle-play"></i></button>
                </div>
        `}};Bt.styles=[po,Et,Z],T([V()],Bt.prototype,"note",2),Bt=T([B("tn-pitch-pipe-player")],Bt);var hr={};J(hr,{PitchPipeComponent:()=>Gt});var si={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},li=r=>(...t)=>({_$litDirective$:r,values:t}),nr=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var rt=li(class extends nr{constructor(r){var t;if(super(r),r.type!==si.ATTRIBUTE||r.name!=="class"||((t=r.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){var e,i;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.et=new Set(r.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in t)t[n]&&!((e=this.et)===null||e===void 0?void 0:e.has(n))&&this.st.add(n);return this.render(t)}let o=r.element.classList;this.st.forEach(n=>{n in t||(o.remove(n),this.st.delete(n))});for(let n in t){let a=!!t[n];a===this.st.has(n)||((i=this.et)===null||i===void 0?void 0:i.has(n))||(a?(o.add(n),this.st.add(n)):(o.remove(n),this.st.delete(n)))}return vt}});var Yt=12,vo=["C","C","D","D","E","F","F","G","G","A","A","B"],go=[1,3,6,8,10],bo=["C","D","D","E","E","F","G","G","A","A","B","B"],Mt;(function(e){e[e.sharp=0]="sharp",e[e.flat=1]="flat"})(Mt||(Mt={}));var W=class{get letter(){return this.lookupLetter()}get accidental(){return this.lookupAccidental()}constructor(t){this.index=Q.clamp(t,[0,127]),this.octave=Math.floor(t/Yt)-1}equals(t){return this.index===t.index&&this.letter===t.letter&&this.accidental===t.accidental}lookupLetter(){return M.accidentalMode?vo[this.index%Yt]:bo[this.index%Yt]}lookupAccidental(){return go.includes(this.index%Yt)?M.accidentalMode?"#":"b":""}},ar=new W(0),yo=new W(69),ci=new W(127),Vt=class{static freqToNote(t){if(t<this.noteToPitch(ar))return ar;if(t>this.noteToPitch(ci))return ci;let e=Math.round(Yt*Math.log2(t/this.noteToPitch(ar)));if(isNaN(e))throw new Error("calculated frequency produced NaN");return new W(e)}static noteToPitch(t){let e=t.index-yo.index,i=je(2,1/Yt);return M.frequencyOfA*je(i,e)}};var ur={};J(ur,{CarouselComponent:()=>it});var lr={};J(lr,{default:()=>sr});var sr=U`
    .keen-slider:not([data-keen-slider-disabled]){-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;align-content:flex-start;display:flex;overflow:hidden;position:relative;touch-action:pan-y;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-khtml-user-select:none;width:100%}.keen-slider:not([data-keen-slider-disabled]) .keen-slider__slide{min-height:100%;overflow:hidden;position:relative;width:100%}.keen-slider:not([data-keen-slider-disabled])[data-keen-slider-reverse]{flex-direction:row-reverse}.keen-slider:not([data-keen-slider-disabled])[data-keen-slider-v]{flex-wrap:wrap}
`;var Wt=function(){return Wt=Object.assign||function(r){for(var t,e=1,i=arguments.length;e<i;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o]);return r},Wt.apply(this,arguments)};function di(r,t,e){if(e||arguments.length===2)for(var i,o=0,n=t.length;o<n;o++)!i&&o in t||(i||(i=Array.prototype.slice.call(t,0,o)),i[o]=t[o]);return r.concat(i||Array.prototype.slice.call(t))}function ui(r){return Array.prototype.slice.call(r)}function hi(r,t){var e=Math.floor(r);return e===t||e+1===t?r:t}function mi(){return Date.now()}function cr(r,t,e){if(t="data-keen-slider-"+t,e===null)return r.removeAttribute(t);r.setAttribute(t,e||"")}function xe(r,t){return t=t||document,typeof r=="function"&&(r=r(t)),Array.isArray(r)?r:typeof r=="string"?ui(t.querySelectorAll(r)):r instanceof HTMLElement?[r]:r instanceof NodeList?ui(r):[]}function ae(r){r.raw&&(r=r.raw),r.cancelable&&!r.defaultPrevented&&r.preventDefault()}function se(r){r.raw&&(r=r.raw),r.stopPropagation&&r.stopPropagation()}function fi(){var r=[];return{add:function(t,e,i,o){t.addListener?t.addListener(i):t.addEventListener(e,i,o),r.push([t,e,i,o])},input:function(t,e,i,o){this.add(t,e,function(n){return function(a){a.nativeEvent&&(a=a.nativeEvent);var s=a.changedTouches||[],c=a.targetTouches||[],l=a.detail&&a.detail.x?a.detail:null;return n({id:l?l.identifier?l.identifier:"i":c[0]?c[0]?c[0].identifier:"e":"d",idChanged:l?l.identifier?l.identifier:"i":s[0]?s[0]?s[0].identifier:"e":"d",raw:a,x:l&&l.x?l.x:c[0]?c[0].screenX:l?l.x:a.pageX,y:l&&l.y?l.y:c[0]?c[0].screenY:l?l.y:a.pageY})}}(i),o)},purge:function(){r.forEach(function(t){t[0].removeListener?t[0].removeListener(t[2]):t[0].removeEventListener(t[1],t[2],t[3])}),r=[]}}}function dr(r,t,e){return Math.min(Math.max(r,t),e)}function lt(r){return(r>0?1:0)-(r<0?1:0)||+r}function pi(r){var t=r.getBoundingClientRect();return{height:hi(t.height,r.offsetHeight),width:hi(t.width,r.offsetWidth)}}function tt(r,t,e,i){var o=r&&r[t];return o==null?e:i&&typeof o=="function"?o():o}function nt(r){return Math.round(1e6*r)/1e6}function wo(r){var t,e,i,o,n,a;function s(d){a||(a=d),c(!0);var b=d-a;b>i&&(b=i);var v=o[e];if(v[3]<b)return e++,s(d);var y=v[2],_=v[4],h=v[0],f=v[1]*(0,v[5])(_===0?1:(b-y)/_);if(f&&r.track.to(h+f),b<i)return m();a=null,c(!1),l(null),r.emit("animationEnded")}function c(d){t.active=d}function l(d){t.targetIdx=d}function m(){var d;d=s,n=window.requestAnimationFrame(d)}function u(){var d;d=n,window.cancelAnimationFrame(d),c(!1),l(null),a&&r.emit("animationStopped"),a=null}return t={active:!1,start:function(d){if(u(),r.track.details){var b=0,v=r.track.details.position;e=0,i=0,o=d.map(function(y){var _,h=Number(v),f=(_=y.earlyExit)!==null&&_!==void 0?_:y.duration,p=y.easing,w=y.distance*p(f/y.duration)||0;v+=w;var k=i;return i+=f,b+=w,[h,y.distance,k,i,y.duration,p]}),l(r.track.distToIdx(b)),m(),r.emit("animationStarted")}},stop:u,targetIdx:null}}function ko(r){var t,e,i,o,n,a,s,c,l,m,u,d,b,v,y=1/0,_=[],h=null,f=0;function p(A){j(f+A)}function w(A){var $=k(f+A).abs;return x($)?$:null}function k(A){var $=Math.floor(Math.abs(nt(A/e))),g=nt((A%e+e)%e);g===e&&(g=0);var S=lt(A),E=s.indexOf(di([],s,!0).reduce(function(z,q){return Math.abs(q-g)<Math.abs(z-g)?q:z})),P=E;return S<0&&$++,E===a&&(P=0,$+=S>0?1:-1),{abs:P+$*a*S,origin:E,rel:P}}function C(A,$,g){var S;if($||!L())return N(A,g);if(!x(A))return null;var E=k(g??f),P=E.abs,z=A-E.rel,q=P+z;S=N(q);var H=N(q-a*lt(z));return(H!==null&&Math.abs(H)<Math.abs(S)||S===null)&&(S=H),nt(S)}function N(A,$){if($==null&&($=nt(f)),!x(A)||A===null)return null;A=Math.round(A);var g=k($),S=g.abs,E=g.rel,P=g.origin,z=Y(A),q=($%e+e)%e,H=s[P],G=Math.floor((A-(S-E))/a)*e;return nt(H-q-H+s[z]+G+(P===a?e:0))}function x(A){return F(A)===A}function F(A){return dr(A,l,m)}function L(){return o.loop}function Y(A){return(A%a+a)%a}function j(A){var $;$=A-f,_.push({distance:$,timestamp:mi()}),_.length>6&&(_=_.slice(-6)),f=nt(A);var g=R().abs;if(g!==h){var S=h!==null;h=g,S&&r.emit("slideChanged")}}function R(A){var $=A?null:function(){if(a){var g=L(),S=g?(f%e+e)%e:f,E=(g?f%e:f)-n[0][2],P=0-(E<0&&g?e-Math.abs(E):E),z=0,q=k(f),H=q.abs,G=q.rel,ct=n[G][2],dt=n.map(function(X,yt){var K=P+z;(K<0-X[0]||K>1)&&(K+=(Math.abs(K)>e-1&&g?e:0)*lt(-K));var wt=yt-G,ft=lt(wt),ot=wt+H;g&&(ft===-1&&K>ct&&(ot+=a),ft===1&&K<ct&&(ot-=a),u!==null&&ot<u&&(K+=e),d!==null&&ot>d&&(K-=e));var kt=K+X[0]+X[1],Ft=Math.max(K>=0&&kt<=1?1:kt<0||K>1?0:K<0?Math.min(1,(X[0]+K)/X[0]):(1-K)/X[0],0);return z+=X[0]+X[1],{abs:ot,distance:o.rtl?-1*K+1-X[0]:K,portion:Ft,size:X[0]}});return H=F(H),G=Y(H),{abs:F(H),length:i,max:v,maxIdx:m,min:b,minIdx:l,position:f,progress:g?S/e:f/i,rel:G,slides:dt,slidesLength:e}}}();return t.details=$,r.emit("detailsChanged"),$}return t={absToRel:Y,add:p,details:null,distToIdx:w,idxToDist:C,init:function(A){if(function(){if(o=r.options,n=(o.trackConfig||[]).map(function(E){return[tt(E,"size",1),tt(E,"spacing",0),tt(E,"origin",0)]}),a=n.length){e=nt(n.reduce(function(E,P){return E+P[0]+P[1]},0));var g,S=a-1;i=nt(e+n[0][2]-n[S][0]-n[S][2]-n[S][1]),s=n.reduce(function(E,P){if(!E)return[0];var z=n[E.length-1],q=E[E.length-1]+(z[0]+z[2])+z[1];return q-=P[2],E[E.length-1]>q&&(q=E[E.length-1]),q=nt(q),E.push(q),(!g||g<q)&&(c=E.length-1),g=q,E},null),i===0&&(c=0),s.push(nt(e))}}(),!a)return R(!0);var $;(function(){var g=r.options.range,S=r.options.loop;u=l=S?tt(S,"min",-1/0):0,d=m=S?tt(S,"max",y):c;var E=tt(g,"min",null),P=tt(g,"max",null);E!==null&&(l=E),P!==null&&(m=P),b=l===-1/0?l:r.track.idxToDist(l||0,!0,0),v=m===y?m:C(m,!0,0),P===null&&(d=m),tt(g,"align",!1)&&m!==y&&n[Y(m)][2]===0&&(v-=1-n[Y(m)][0],m=w(v-f)),b=nt(b),v=nt(v)})(),$=A,Number($)===$?p(N(F(A))):R()},to:j,velocity:function(){var A=mi(),$=_.reduce(function(g,S){var E=S.distance,P=S.timestamp;return A-P>200||(lt(E)!==lt(g.distance)&&g.distance&&(g={distance:0,lastTimestamp:0,time:0}),g.time&&(g.distance+=E),g.lastTimestamp&&(g.time+=P-g.lastTimestamp),g.lastTimestamp=P),g},{distance:0,lastTimestamp:0,time:0});return $.distance/$.time||0}}}function _o(r){var t,e,i,o,n,a,s,c;function l(h){return 2*h}function m(h){return dr(h,s,c)}function u(h){return 1-Math.pow(1-h,3)}function d(){return i?r.track.velocity():0}function b(){_();var h=r.options.mode==="free-snap",f=r.track,p=d();o=lt(p);var w=r.track.details,k=[];if(p||!h){var C=v(p),N=C.dist,x=C.dur;if(x=l(x),N*=o,h){var F=f.idxToDist(f.distToIdx(N),!0);F&&(N=F)}k.push({distance:N,duration:x,easing:u});var L=w.position,Y=L+N;if(Y<n||Y>a){var j=Y<n?n-L:a-L,R=0,A=p;if(lt(j)===o){var $=Math.min(Math.abs(j)/Math.abs(N),1),g=function(P){return 1-Math.pow(1-P,1/3)}($)*x;k[0].earlyExit=g,A=p*(1-$)}else k[0].earlyExit=0,R+=j;var S=v(A,100),E=S.dist*o;r.options.rubberband&&(k.push({distance:E,duration:l(S.dur),easing:u}),k.push({distance:-E+R,duration:500,easing:u}))}r.animator.start(k)}else r.moveToIdx(m(w.abs),!0,{duration:500,easing:function(P){return 1+--P*P*P*P*P}})}function v(h,f){f===void 0&&(f=1e3);var p=147e-9+(h=Math.abs(h))/f;return{dist:Math.pow(h,2)/p,dur:h/p}}function y(){var h=r.track.details;h&&(n=h.min,a=h.max,s=h.minIdx,c=h.maxIdx)}function _(){r.animator.stop()}r.on("updated",y),r.on("optionsChanged",y),r.on("created",y),r.on("dragStarted",function(){i=!1,_(),t=e=r.track.details.abs}),r.on("dragChecked",function(){i=!0}),r.on("dragEnded",function(){var h=r.options.mode;h==="snap"&&function(){var f=r.track,p=r.track.details,w=p.position,k=lt(d());(w>a||w<n)&&(k=0);var C=t+k;p.slides[f.absToRel(C)].portion===0&&(C-=k),t!==e&&(C=e),lt(f.idxToDist(C,!0))!==k&&(C+=k),C=m(C);var N=f.idxToDist(C,!0);r.animator.start([{distance:N,duration:500,easing:function(x){return 1+--x*x*x*x*x}}])}(),h!=="free"&&h!=="free-snap"||b()}),r.on("dragged",function(){e=r.track.details.abs})}function xo(r){var t,e,i,o,n,a,s,c,l,m,u,d,b,v,y,_,h,f,p=fi();function w(R){if(a&&c===R.id){var A=x(R);if(l){if(!N(R))return C(R);m=A,l=!1,r.emit("dragChecked")}if(_)return m=A;ae(R);var $=function(S){if(h===-1/0&&f===1/0)return S;var E=r.track.details,P=E.length,z=E.position,q=dr(S,h-z,f-z);if(P===0)return 0;if(!r.options.rubberband)return q;if(z<=f&&z>=h||z<h&&e>0||z>f&&e<0)return S;var H=(z<h?z-h:z-f)/P,G=o*P,ct=Math.abs(H*G),dt=Math.max(0,1-ct/n*2);return dt*dt*S}(s(m-A)/o*i);e=lt($);var g=r.track.details.position;(g>h&&g<f||g===h&&e>0||g===f&&e<0)&&se(R),u+=$,!d&&Math.abs(u*o)>5&&(d=!0),r.track.add($),m=A,r.emit("dragged")}}function k(R){!a&&r.track.details&&r.track.details.length&&(u=0,a=!0,d=!1,l=!0,c=R.id,N(R),m=x(R),r.emit("dragStarted"))}function C(R){a&&c===R.idChanged&&(a=!1,r.emit("dragEnded"))}function N(R){var A=F(),$=A?R.y:R.x,g=A?R.x:R.y,S=b!==void 0&&v!==void 0&&Math.abs(v-g)<=Math.abs(b-$);return b=$,v=g,S}function x(R){return F()?R.y:R.x}function F(){return r.options.vertical}function L(){o=r.size,n=F()?window.innerHeight:window.innerWidth;var R=r.track.details;R&&(h=R.min,f=R.max)}function Y(R){d&&(se(R),ae(R))}function j(){if(p.purge(),r.options.drag&&!r.options.disabled){var R;R=r.options.dragSpeed||1,s=typeof R=="function"?R:function($){return $*R},i=r.options.rtl?-1:1,L(),t=r.container,function(){var $="data-keen-slider-clickable";xe("[".concat($,"]:not([").concat($,"=false])"),t).map(function(g){p.add(g,"dragstart",se),p.add(g,"mousedown",se),p.add(g,"touchstart",se)})}(),p.add(t,"dragstart",function($){ae($)}),p.add(t,"click",Y,{capture:!0}),p.input(t,"ksDragStart",k),p.input(t,"ksDrag",w),p.input(t,"ksDragEnd",C),p.input(t,"mousedown",k),p.input(t,"mousemove",w),p.input(t,"mouseleave",C),p.input(t,"mouseup",C),p.input(t,"touchstart",k,{passive:!0}),p.input(t,"touchmove",w,{passive:!1}),p.input(t,"touchend",C),p.input(t,"touchcancel",C),p.add(window,"wheel",function($){a&&ae($)});var A="data-keen-slider-scrollable";xe("[".concat(A,"]:not([").concat(A,"=false])"),r.container).map(function($){return function(g){var S;p.input(g,"touchstart",function(E){S=x(E),_=!0,y=!0},{passive:!0}),p.input(g,"touchmove",function(E){var P=F(),z=P?g.scrollHeight-g.clientHeight:g.scrollWidth-g.clientWidth,q=S-x(E),H=P?g.scrollTop:g.scrollLeft,G=P&&g.style.overflowY==="scroll"||!P&&g.style.overflowX==="scroll";if(S=x(E),(q<0&&H>0||q>0&&H<z)&&y&&G)return _=!0;y=!1,ae(E),_=!1}),p.input(g,"touchend",function(){_=!1})}($)})}}r.on("updated",L),r.on("optionsChanged",j),r.on("created",j),r.on("destroyed",p.purge)}function Ao(r){var t,e,i=null;function o(b,v,y){r.animator.active?a(b,v,y):requestAnimationFrame(function(){return a(b,v,y)})}function n(){o(!1,!1,e)}function a(b,v,y){var _=0,h=r.size,f=r.track.details;if(f&&t){var p=f.slides;t.forEach(function(w,k){if(b)!i&&v&&c(w,null,y),l(w,null,y);else{if(!p[k])return;var C=p[k].size*h;!i&&v&&c(w,C,y),l(w,p[k].distance*h-_,y),_+=C}})}}function s(b){return r.options.renderMode==="performance"?Math.round(b):b}function c(b,v,y){var _=y?"height":"width";v!==null&&(v=s(v)+"px"),b.style["min-"+_]=v,b.style["max-"+_]=v}function l(b,v,y){if(v!==null){v=s(v);var _=y?v:0;v="translate3d(".concat(y?0:v,"px, ").concat(_,"px, 0)")}b.style.transform=v,b.style["-webkit-transform"]=v}function m(){t&&(a(!0,!0,e),t=null),r.on("detailsChanged",n,!0)}function u(){o(!1,!0,e)}function d(){m(),e=r.options.vertical,r.options.disabled||r.options.renderMode==="custom"||(i=tt(r.options.slides,"perView",null)==="auto",r.on("detailsChanged",n),(t=r.slides).length&&u())}r.on("created",d),r.on("optionsChanged",d),r.on("beforeOptionsChanged",function(){m()}),r.on("updated",u),r.on("destroyed",m)}function $o(r,t){return function(e){var i,o,n,a,s,c,l=fi();function m(x){var F;cr(e.container,"reverse",(F=e.container,window.getComputedStyle(F,null).getPropertyValue("direction")!=="rtl"||x?null:"")),cr(e.container,"v",e.options.vertical&&!x?"":null),cr(e.container,"disabled",e.options.disabled&&!x?"":null)}function u(){d()&&h()}function d(){var x=null;if(a.forEach(function(L){L.matches&&(x=L.__media)}),x===i)return!1;i||e.emit("beforeOptionsChanged"),i=x;var F=x?n.breakpoints[x]:n;return e.options=Wt(Wt({},n),F),m(),C(),N(),p(),!0}function b(x){var F=pi(x);return(e.options.vertical?F.height:F.width)/e.size||1}function v(){return e.options.trackConfig.length}function y(x){for(var F in i=!1,n=Wt(Wt({},t),x),l.purge(),o=e.size,a=[],n.breakpoints||[]){var L=window.matchMedia(F);L.__media=F,a.push(L),l.add(L,"change",u)}l.add(window,"orientationchange",k),l.add(window,"resize",w),d()}function _(x){e.animator.stop();var F=e.track.details;e.track.init(x??(F?F.abs:0))}function h(x){_(x),e.emit("optionsChanged")}function f(x,F){if(x)return y(x),void h(F);C(),N();var L=v();p(),v()!==L?h(F):_(F),e.emit("updated")}function p(){var x=e.options.slides;if(typeof x=="function")return e.options.trackConfig=x(e.size,e.slides);for(var F=e.slides,L=F.length,Y=typeof x=="number"?x:tt(x,"number",L,!0),j=[],R=tt(x,"perView",1,!0),A=tt(x,"spacing",0,!0)/e.size||0,$=R==="auto"?A:A/R,g=tt(x,"origin","auto"),S=0,E=0;E<Y;E++){var P=R==="auto"?b(F[E]):1/R-A+$,z=g==="center"?.5-P/2:g==="auto"?0:g;j.push({origin:z,size:P,spacing:A}),S+=P}if(S+=A*(Y-1),g==="auto"&&!e.options.loop&&R!==1){var q=0;j.map(function(H){var G=S-q;return q+=H.size+A,G>=1||(H.origin=1-G-(S>1?0:1-S)),H})}e.options.trackConfig=j}function w(){C();var x=e.size;e.options.disabled||x===o||(o=x,f())}function k(){w(),setTimeout(w,500),setTimeout(w,2e3)}function C(){var x=pi(e.container);e.size=(e.options.vertical?x.height:x.width)||1}function N(){e.slides=xe(e.options.selector,e.container)}e.container=(c=xe(r,s||document)).length?c[0]:null,e.destroy=function(){l.purge(),e.emit("destroyed"),m(!0)},e.prev=function(){e.moveToIdx(e.track.details.abs-1,!0)},e.next=function(){e.moveToIdx(e.track.details.abs+1,!0)},e.update=f,y(e.options)}}var vi=function(r,t,e){try{return function(i,o){var n,a={};return n={emit:function(s){a[s]&&a[s].forEach(function(l){l(n)});var c=n.options&&n.options[s];c&&c(n)},moveToIdx:function(s,c,l){var m=n.track.idxToDist(s,c);if(m){var u=n.options.defaultAnimation;n.animator.start([{distance:m,duration:tt(l||u,"duration",500),easing:tt(l||u,"easing",function(d){return 1+--d*d*d*d*d})}])}},on:function(s,c,l){l===void 0&&(l=!1),a[s]||(a[s]=[]);var m=a[s].indexOf(c);m>-1?l&&delete a[s][m]:l||a[s].push(c)},options:i},function(){if(n.track=ko(n),n.animator=wo(n),o)for(var s=0,c=o;s<c.length;s++)(0,c[s])(n);n.track.init(n.options.initial||0),n.emit("created")}(),n}(t,di([$o(r,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),Ao,xo,_o],e||[],!0))}catch(i){console.error(i)}};var So=U`
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
`,it=class extends O{constructor(){super(...arguments);this.slider=null;this.sliderWrapper=null;this._trackDetails=null}firstUpdated(){this.sliderWrapper=this.shadowRoot.getElementById("slider"),this.slider=new vi(this.sliderWrapper,{loop:!0})}disconnectedCallback(){this.slider.destroy()}handleSlotchange(t){var i,o;let e=t.target.assignedElements({flatten:!0});e.forEach(n=>{n.className="keen-slider__slide",this.sliderWrapper.appendChild(n)}),this.slider.update(),this._trackDetails=(o=(i=this.slider)==null?void 0:i.track)==null?void 0:o.details,this.slider.on("slideChanged",()=>{var n,a;e.forEach((s,c)=>{var l,m,u;s.setAttribute(it.slideShownAttribute,(((u=(m=(l=this.slider)==null?void 0:l.track)==null?void 0:m.details)==null?void 0:u.rel)===c).toString())}),this._trackDetails=(a=(n=this.slider)==null?void 0:n.track)==null?void 0:a.details})}render(){var t;return I`
            <div id="slider" class="keen-slider">
               <slot @slotchange=${this.handleSlotchange}></slot>
            </div>
            <div class="track-container">
                <div>
                    ${(t=this._trackDetails)==null?void 0:t.slides.map((e,i)=>I`<div class="track-ball ${this._trackDetails.rel===i?"active":""}"></div>`)}
                </div>
            </div>
        `}};it.styles=[So,Z,sr],it.slideShownAttribute="carousel-slide-shown",T([st()],it.prototype,"_trackDetails",2),it=T([B("tn-carousel")],it);var Eo=U`
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
`,Gt=class extends O{constructor(){super(...arguments);this._pipeRotation=0;this._pipeRotationVelocity=0;this._pipeRotationOffset=30;this._isUserInteracting=!0;this._shouldUpdatePhysics=!1;this.isShown=!1;this._notes=[new W(48),new W(49),new W(50),new W(51),new W(52),new W(53),new W(54),new W(55),new W(56),new W(57),new W(58),new W(59)];this._currentNote=this._notes[0];this._previousTouch=null}set pipeRotation(t){let e=this.pipeRotation;this._pipeRotation=t%360,this.pipeRotationVelocity=this.pipeRotation-e,this._currentNote=this._getCurrentNote(),this.requestUpdate("pipeRotation",e)}get pipeRotation(){return this._pipeRotation}set pipeRotationVelocity(t){this._pipeRotation!=t&&(this._shouldUpdatePhysics=!0),this._pipeRotationVelocity=t}get pipeRotationVelocity(){return this._pipeRotationVelocity}connectedCallback(){super.connectedCallback();let t=1e3/60;setInterval(()=>{if(!this._isUserInteracting&&this._shouldUpdatePhysics&&this.isShown)if(this._shouldUpdatePhysics=!1,this.pipeRotationVelocity<.1&&this.pipeRotationVelocity>-.1){this.pipeRotationVelocity=0;let e=this.pipeRotation-Math.round(this.pipeRotation/30)*30;this.rotateToAngle(e)}else{let e=this.pipeRotationVelocity>0?-.2:.2;this.pipeRotationVelocity+=e,this.pipeRotation+=this.pipeRotationVelocity}},t)}rotateToAngle(t){let e=t>0?-1:1,o=Math.sqrt(2*.2*Math.abs(t));this.pipeRotationVelocity=o*e}_handleMouseMove(t){this._isUserInteracting=!0,t.buttons>0&&this._handleRotationStart(t.movementY)}_handleMouseUp(){this._isUserInteracting=!1}_handleTouchMove(t){this._isUserInteracting=!0;let e=t.touches[0];this._previousTouch&&this._handleRotationStart(e.pageY-this._previousTouch.pageY),this._previousTouch=e}_handleTouchEnd(){this._previousTouch=null,this._isUserInteracting=!1}_handleRotationStart(t){this.pipeRotation+=t/4}_getCurrentNote(){let t=this.pipeRotation<0?this.pipeRotation:this.pipeRotation-360,e=Q.round(Math.abs(t)/30,0)%12;return this._notes[e]}_renderNotes(){return Lt`
            ${this._notes.map((t,e)=>{let i=this.pipeRotation+30*e,o={"gear-note":!0,"center-text":!0,"gear-note-selected":this._currentNote.equals(t),"fill-primary-stroke-background":this._currentNote.equals(t),"fill-background-stroke-primary":!this._currentNote.equals(t)},n=structuredClone(o);return n["gear-note-accidental"]=!0,n["fill-primary-stroke-background"]=!this._currentNote.equals(t),n["gear-note-accidental-selected"]=this._currentNote.equals(t),n["fill-background-stroke-primary"]=this._currentNote.equals(t),Lt`
                    <text @click=${()=>this.rotateToAngle(i)}
                        class="${rt(o)}" x="0%" y="-33%"
                        transform="rotate(${i})">
                        ${t.letter}
                    </text>
                    <text class="${rt(n)}" x="4%" y="-37%"
                        transform="rotate(${i})">
                        ${t.accidental}
                    </text>
                `})}
        `}render(){return I`

            <div class="pitch-pipe-gears"
                @mouseup="${this._handleMouseUp}"
                @touchend="${this._handleTouchEnd}"
                @mousemove="${this._handleMouseMove}"
                @touchmove="${this._handleTouchMove}">
                <svg viewbox="0 0 1000 1000" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(500, 500)">
                        <text class="${rt({gear:!0,"background-gear":!0,"center-text":!0})}" 
                              fill="url(#gradient-fill-background-gear)" 
                              stroke="url(#gradient-stroke-background-gear)"
                              transform="rotate(${this.pipeRotation-this._pipeRotationOffset})">
                            \uf013
                        </text>
                        <text class="${rt({gear:!0,"foreground-gear":!0,"center-text":!0})}" 
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
                            class="${rt({"gear-gradient":!0})}"
                            gradientTransform="rotate(${-(this.pipeRotation-this._pipeRotationOffset)+90})">
                            <stop offset="50%" class="stop-color-highlight"/>
                            <stop offset="50%" class="stop-color-primary"/>
                        </linearGradient>
                        <linearGradient id="gradient-fill-foreground-gear" 
                            class="${rt({"gear-gradient":!0})}"
                            gradientTransform="rotate(${-this.pipeRotation+90})">
                            <stop offset="50%" class="stop-color-background"/>
                            <stop offset="50%" class="stop-color-primary"/>
                        </linearGradient>

                        <!-- gear stroke gradients -->
                        <linearGradient id="gradient-stroke-background-gear"
                            class="${rt({"gear-gradient":!0})}"
                            gradientTransform="rotate(${-(this.pipeRotation-this._pipeRotationOffset)+90})">
                            <stop offset="50%" class="stop-color-highlight"/>
                            <stop offset="50%" class="stop-color-primary"/>
                        </linearGradient>
                        <linearGradient id="gradient-stroke-foreground-gear" 
                            class="${rt({"gear-gradient":!0})}"
                            gradientTransform="rotate(${-this.pipeRotation+90})">
                            <stop offset="50%" class="stop-color-highlight"/>
                            <stop offset="50%" class="stop-color-primary"/>
                        </linearGradient>
                    </defs>
                </svg>
                <tn-pitch-pipe-player .note="${this._currentNote}"></tn-pitch-pipe-player>
            </div>
        `}};Gt.styles=[Z,Eo],T([V({attribute:it.slideShownAttribute})],Gt.prototype,"isShown",2),Gt=T([B("tn-pitch-pipe")],Gt);var fr={};J(fr,{AppearanceSettingsComponent:()=>ce,AppearanceSettingsComponentStyles:()=>gi});var mr={};J(mr,{SettingsComponent:()=>le,SettingsComponentStyles:()=>ut});var ut=U`
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
`,le=class extends O{constructor(){super()}render(){return I`
            <tn-modal>
                <div slot="header">Settings</div>
                <div slot="content">
                    <tn-general-settings></tn-general-settings>
                    <tn-theme-settings></tn-theme-settings>
                    <tn-appearance-settings></tn-appearance-settings>
                    <tn-experimental-settings></tn-experimental-settings>
                </div>
            </tn-modal>
        `}};le.styles=[ut,Z],le=T([B("tn-settings")],le);var gi=U`
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
`,ce=class extends O{constructor(){super();this.settingsButtonHelperText="To get to this modal again without the settings button, double tap the screen."}updateComponent(t,e){let i=t.target.checked;M.setComponent(e,i)}render(){return I`
            <tn-accordion>
                <div slot="header">Appearance</div>
                <div slot="content">
                    ${Object.keys(oe).map(t=>I`
                        <div class="row">
                            <label for="${t}" class="switch">
                                <input id="${t}"
                                       type="checkbox"
                                       .checked="${M.getComponent(t)}"
                                       @click= ${e=>this.updateComponent(e,t)}>
                                <span class="slider round"></span>
                            </label>
                            <span class="nowrap">${oe[t]}</span>
                            <span class="helper-text">
                                ${t==="settingsButton"?this.settingsButtonHelperText:D}
                            </span>
                        </div>
                        `)}
                </div>
            </tn-accordion>
        `}};ce.styles=[ut,gi,Z],ce=T([B("tn-appearance-settings")],ce);var wr={};J(wr,{ExperimentalSettingsComponent:()=>Jt});var wi=He(yi()),Kt=class{_inputLength;_fft;_bufferSupplier;_paddedInputBuffer;_transformBuffer;_inverseBuffer;static forFloat32Array(t){return new Kt(t,e=>new Float32Array(e))}static forFloat64Array(t){return new Kt(t,e=>new Float64Array(e))}static forNumberArray(t){return new Kt(t,e=>Array(e))}constructor(t,e){if(t<1)throw new Error("Input length must be at least one");this._inputLength=t,this._fft=new wi.default(To(2*t)),this._bufferSupplier=e,this._paddedInputBuffer=this._bufferSupplier(this._fft.size),this._transformBuffer=this._bufferSupplier(2*this._fft.size),this._inverseBuffer=this._bufferSupplier(2*this._fft.size)}get inputLength(){return this._inputLength}autocorrelate(t,e=this._bufferSupplier(t.length)){if(t.length!==this._inputLength)throw new Error(`Input must have length ${this._inputLength} but had length ${t.length}`);for(let o=0;o<t.length;o++)this._paddedInputBuffer[o]=t[o];for(let o=t.length;o<this._paddedInputBuffer.length;o++)this._paddedInputBuffer[o]=0;this._fft.realTransform(this._transformBuffer,this._paddedInputBuffer),this._fft.completeSpectrum(this._transformBuffer);let i=this._transformBuffer;for(let o=0;o<i.length;o+=2)i[o]=i[o]*i[o]+i[o+1]*i[o+1],i[o+1]=0;this._fft.inverseTransform(this._inverseBuffer,this._transformBuffer);for(let o=0;o<t.length;o++)e[o]=this._inverseBuffer[2*o];return e}};function Co(r){let t=[],e=!1,i=-1/0,o=-1;for(let n=1;n<r.length-1;n++)r[n-1]<=0&&r[n]>0?(e=!0,o=n,i=r[n]):r[n-1]>0&&r[n]<=0?(e=!1,o!==-1&&t.push(o)):e&&r[n]>i&&(i=r[n],o=n);return t}function Mo(r,t){let[e,i,o]=[r-1,r,r+1],[n,a,s]=[t[e],t[i],t[o]],c=n/2-a+s/2,l=-(n/2)*(i+o)+a*(e+o)-s/2*(e+i),m=n*i*o/2-a*e*o+s*e*i/2,u=-l/(2*c),d=c*u*u+l*u+m;return[u,d]}var Tt=class{_autocorrelator;_nsdfBuffer;_clarityThreshold=.9;static forFloat32Array(t){return new Tt(t,e=>new Float32Array(e))}static forFloat64Array(t){return new Tt(t,e=>new Float64Array(e))}static forNumberArray(t){return new Tt(t,e=>Array(e))}constructor(t,e){this._autocorrelator=new Kt(t,e),this._nsdfBuffer=e(t)}get inputLength(){return this._autocorrelator.inputLength}findPitch(t,e){this._nsdf(t);let i=Co(this._nsdfBuffer);if(i.length===0)return[0,0];let o=Math.max(...i.map(c=>this._nsdfBuffer[c])),n=i.find(c=>this._nsdfBuffer[c]>=this._clarityThreshold*o),[a,s]=Mo(n,this._nsdfBuffer);return[e/a,Math.min(s,1)]}_nsdf(t){this._autocorrelator.autocorrelate(t,this._nsdfBuffer);let e=2*this._nsdfBuffer[0],i;for(i=0;i<this._nsdfBuffer.length&&e>0;i++)this._nsdfBuffer[i]=2*this._nsdfBuffer[i]/e,e-=t[i]**2+t[t.length-i-1]**2;for(;i<this._nsdfBuffer.length;i++)this._nsdfBuffer[i]=0}};function To(r){return r--,r|=r>>1,r|=r>>2,r|=r>>4,r|=r>>8,r|=r>>16,r++,r}var Zt=He(Ni()),Ii=["McLeod","YIN","AMDF","Dynamic Wavelet"],pr=class{constructor(){this.pitch=-1;this.volume=-1;this.clarity=-1}},vr=class{constructor(t){this.detector=Tt.forFloat32Array(t.analyserNode.fftSize)}detect(t){let e=new Float32Array(this.detector.inputLength);t.analyserNode.getFloatTimeDomainData(e);let i=new pr;[i.pitch,i.clarity]=this.detector.findPitch(e,t.audioContext.sampleRate);let o=e.reduce((n,a)=>n+a*a,0);return i.volume=Math.sqrt(o/e.length),i}},Te=class{detect(t){let e=new Float32Array(2048);t.analyserNode.getFloatTimeDomainData(e);let i=new pr;i.pitch=this.detector(e),i.clarity=1;let o=e.reduce((n,a)=>n+a*a,0);return i.volume=Math.sqrt(o/e.length),i}},gr=class extends Te{constructor(){super();this.detector=Zt.YIN()}},br=class extends Te{constructor(){super();this.detector=Zt.AMDF()}},yr=class extends Te{constructor(){super();this.detector=Zt.DynamicWavelet()}};var Jt=class extends O{constructor(){super();this.algorithm=M.algorithm}updateAlgorithm(t){let e=t.target.value;this.algorithm=e,M.algorithm=e}render(){return I`
                    <tn-accordion>
                        <div slot="header">Experimental</div>
                        <div slot="content">
                            <div class="row">
                                <label>Pitch Detection Algorithm</label>
                                <select @input="${this.updateAlgorithm}">
                                    ${Ii.map(t=>I`
                                        <option .selected="${t===this.algorithm}" .value="${t}">${t}</option>
                                    `)}
                                </select>
                            </div>
                        </div>
                    </tn-accordion>
        `}};Jt.styles=[ut,Z],T([st()],Jt.prototype,"algorithm",2),Jt=T([B("tn-experimental-settings")],Jt);var kr={};J(kr,{GeneralSettingsComponent:()=>Pt});var Pt=class extends O{constructor(){super();this.frequencyOfA=M.frequencyOfA;this.accidentalMode=M.accidentalMode}updateAccidentalMode(t){let e=t.target.checked===!1?1:0;this.accidentalMode=e,M.accidentalMode=e}resetFrequencyOfA(){this.frequencyOfA=M.defaultConfig.frequencyOfA,M.frequencyOfA=M.defaultConfig.frequencyOfA}updateFrequencyOfA(t){let e=Number(t.target.value);this.frequencyOfA=e,M.frequencyOfA=e}render(){return I`
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
                                   max="${M.AUpperBoundFreq}"
                                   min="${M.ALowerBoundFreq}"
                                   .value="${this.frequencyOfA}"
                                   @input=${this.updateFrequencyOfA}>
                            <label style="flex: 1" for="frequencyOfA">
                                A = ${this.frequencyOfA}HZ
                            </label>
                            ${this.frequencyOfA!==M.defaultConfig.frequencyOfA?I`
                                <i class="fa fa-undo" @click=${this.resetFrequencyOfA}></i>`:D}
                        </div>
                    </div>
                </tn-accordion>
    `}};Pt.styles=[ut,Z],T([st()],Pt.prototype,"frequencyOfA",2),T([st()],Pt.prototype,"accidentalMode",2),Pt=T([B("tn-general-settings")],Pt);var _r={};J(_r,{ThemeSettingsComponent:()=>At});var Vo=U`
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
`,At=class extends O{constructor(){super();this.primaryColor=M.getColor("primary");this.highlightColor=M.getColor("highlight");this.backgroundColor=M.getColor("background")}updateColor(t,e){let i=t.target.value;M.setColor(e,i),this.updateLocalColor(e,i),this.dispatchEvent(new _e(e,i))}resetColor(t){M.setColor(t,M.defaultConfig[t]),this.updateLocalColor(t,M.defaultConfig[t]),this.dispatchEvent(new _e(t,M.defaultConfig[t]))}updateLocalColor(t,e){switch(t){case"primary":this.primaryColor=e;break;case"background":this.backgroundColor=e;break;case"highlight":this.highlightColor=e;break}}render(){return I`
            <tn-accordion>
                <div slot="header">Theme</div>
                <div slot="content">
                    <div class="row color-row">
                        <div class="color-ball primary"></div>
                        <input id="primary-color" type="text" maxlength="7" size="7"
                               .value="${this.primaryColor}"
                               @input="${t=>this.updateColor(t,"primary")}">
                        <label for="primary-color" class="color-label">Primary</label>
                        ${this.primaryColor!==M.defaultConfig.primary?I`
                            <i class="fa fa-undo" @click=${()=>this.resetColor("primary")}></i>`:D}
                    </div>
                    <div class="row color-row">
                        <div class="color-ball highlight"></div>
                        <input id="highlight-color" type="text" maxlength="7" size="7"
                               .value="${this.highlightColor}"
                               @input="${t=>this.updateColor(t,"highlight")}"
                        >
                        <label for="highlight-color" class="color-label">Highlight</label>
                        ${this.highlightColor!==M.defaultConfig.highlight?I`
                            <i class="fa fa-undo" @click=${()=>this.resetColor("highlight")}></i>`:D}
                    </div>
                    <div class="row color-row">
                        <div class="color-ball background"></div>
                        <input id="background-color" type="text" maxlength="7" size="7"
                               .value="${this.backgroundColor}"
                               @input="${t=>this.updateColor(t,"background")}"
                        >
                        <label for="background-color" class="color-label">Background</label>
                        ${this.backgroundColor!==M.defaultConfig.background?I`
                            <i class="fa fa-undo" @click=${()=>this.resetColor("background")}></i>`:D}
                    </div>
                </div>
            </tn-accordion>
        `}};At.styles=[Vo,ut,Z],T([st()],At.prototype,"primaryColor",2),T([st()],At.prototype,"highlightColor",2),T([st()],At.prototype,"backgroundColor",2),At=T([B("tn-theme-settings")],At);var xr={};J(xr,{AccordionComponent:()=>pe});var Wo=U`
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
`,pe=class extends O{render(){return I`
            <details>
                <summary class="header">
                    <slot name="header"></slot>
                </summary>
                <div class="content">
                    <slot name="content"></slot>
                </div>
            </details>
        `}};pe.styles=[Wo,Z],pe=T([B("tn-accordion")],pe);var Ar={};J(Ar,{SettingsComponent:()=>ve});var Go=U`
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
`,ve=class extends O{render(){return I`
            <div class="modal">
                <slot class="header row" name="header"></slot>
                <slot name="content"></slot>
            </div>
            <div class="scroll-shadow"></div>
        `}};ve.styles=[Go],ve=T([B("tn-modal")],ve);var $r={};J($r,{snapshots:()=>zi});var zi={};zi["TunerComponent should equal snapshot"]=`<tn-tuner>
</tn-tuner>
`;var Sr={};J(Sr,{TunerNoteComponent:()=>at});var Ko=U`
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
`,at=class extends O{constructor(){super();this.note=new W(0);this.clarity=1;this.accuracy=0;this.accuracyBuffer=[at.bufferSize];this.heightAnimator=new Re}updateHeightAnimation(){if(this.heightAnimatorReference)this.heightAnimator.reference=this.heightAnimatorReference;else return;let t=Q.map(this.accuracy,[0,1],[90,25]);this.heightAnimator.to=t+""}update(t){super.update(t),!isNaN(Number(t.get("accuracy")))&&this.updateHeightAnimation()}render(){let t={"tuner-note-stroke-half":M.getComponent("noteOutline"),"tuner-note-octave":!0},e={"tuner-note-stroke-full":M.getComponent("noteOutline"),"tuner-note-letter":!0},i={"tuner-note-stroke-half":M.getComponent("noteOutline"),"tuner-note-accidental":!0};return I`
            <div class="tuner-note-container">
                <svg id="view" viewBox="0 2 100 100" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">

                    <use href="#note-letter" class=${rt(e)}/>

                    ${M.getComponent("noteFill")?Lt`<use href="#liquid-effect" mask="url(#note-mask)"/>`:D}
                    ${M.getComponent("noteOctave")?Lt`<use href="#note-octave" class=${rt(t)}/>`:D}

                    <use href="#note-accidental" class=${rt(i)}/>
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
        `}};at.styles=Ko,at.bufferSize=25,T([V()],at.prototype,"note",2),T([V()],at.prototype,"clarity",2),T([V({type:Number})],at.prototype,"accuracy",2),T([zr("#height-animator")],at.prototype,"heightAnimatorReference",2),at=T([B("tn-tuner-note")],at);var Qt=class{set reference(t){this._reference=t}get from(){return this._reference.getAttribute("values").match(Qt.fromMatcher)[0]}set from(t){this._reference.setAttribute("values",this._reference.getAttribute("values").replace(Qt.fromMatcher,t))}get to(){return this._reference.getAttribute("values").match(Qt.toMatcher)[0]}set to(t){this._reference.setAttribute("values",this._reference.getAttribute("values").replace(Qt.toMatcher,t))}onEndEvent(){this.from=this.to}},Re=Qt;Re.fromMatcher=/-?\d+\.?\d*(?=;)/g,Re.toMatcher=/-?\d+\.?\d*$/g;var Er={};J(Er,{SpokeComponent:()=>bt,TunerRingComponent:()=>ht});var Hi=He(ji());var nn=U`
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
`,ht=class extends O{constructor(){super(...arguments);this.accuracy=0;this.volume=0}updated(){this.style.setProperty("--needle-degree",this.convertAccuracyToRadians()+"rad")}convertAccuracyToRadians(){let t=this.accuracy*(Math.PI/2)-Math.PI/2;return this.pitchAccidental==Mt.sharp&&(t*=-1),t}static angleDifference(t,e){let i=t-e;return i+=i>Math.PI?-(2*Math.PI):i<-Math.PI?2*Math.PI:0,Math.abs(i)}render(){let t=[],e=[],i=41;for(let o=0;o<i;o++){let n=o*(Math.PI/(i-1))-Math.PI/2,a=o>=(i-3)/2&&o<=(i+1)/2,s=ht.angleDifference(n,this.convertAccuracyToRadians()),c=Q.map(s,[Math.PI,0],[0,1]),l=Q.clamp(this.volume*8,[.3,.9]);t.push(I`
                <tn-spoke .index="${o}" .scaleFactor="${c}"
                          .arcPosition="${n}" .isMiddle="${a}"></tn-spoke>
            `),e.push(I`
                <tn-spoke .index="${o}" .scaleFactor="${l}"
                          .arcPosition="${n+Math.PI}"></tn-spoke>
            `)}return I`
            <div class="tuner-ring">
                <div class="ring">
                    <span class="top-spokes">
                        ${M.getComponent("frequencyRing")?t:D}
                    </span>
                    <span class="bottom-spokes">
                        ${M.getComponent("volumeRing")?e:D}
                    </span>
                </div>
                ${M.getComponent("needle")?I`<div class="tuner-needle"></div>`:D}
            </div>
        `}};ht.styles=nn,T([V()],ht.prototype,"accuracy",2),T([V()],ht.prototype,"volume",2),T([V()],ht.prototype,"pitchAccidental",2),ht=T([B("tn-tuner-ring")],ht);var an=U`
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

`,bt=class extends O{constructor(){super(...arguments);this.scaleFactor=0;this.arcPosition=0;this.index=0;this.isMiddle=!1}connectedCallback(){super.connectedCallback(),this.isMiddle&&this.style.setProperty("background","rgb(var(--primary-color))"),this.setupPosition()}updated(){let t=(0,Hi.default)(0,0,1,0),e=this.scaleFactor,i=Q.map(this.scaleFactor,[0,1],[1,0]),o=t(e)*5,n=t(i)*15;this.style.setProperty("--x-scale",o+n+""),this.style.setProperty("--y-scale",o+"")}setupPosition(){let t=50*Math.cos(this.arcPosition)+50+"%",e=50*Math.sin(this.arcPosition)+50+"%";this.style.setProperty("bottom",t),this.style.setProperty("left",e),this.style.setProperty("--angle",this.arcPosition+"rad")}};bt.styles=an,T([V()],bt.prototype,"scaleFactor",2),T([V()],bt.prototype,"arcPosition",2),T([V()],bt.prototype,"index",2),T([V()],bt.prototype,"isMiddle",2),bt=T([B("tn-spoke")],bt);var Tr={};J(Tr,{TunerComponent:()=>mt});var $t=class{static debug(...t){M.debugMode&&console.debug(t)}static error(...t){console.error(t)}};var Cr=class{constructor(){this.audioContext=new AudioContext,this.analyserNode=new AnalyserNode(this.audioContext)}connect(){return Ir(this,null,function*(){let t;try{t=yield navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,autoGainControl:!1,noiseSuppression:!1,latency:0}})}catch(i){$t.error(i)}this.sourceNode=this.audioContext.createMediaStreamSource(t);let e=this.audioContext.createBiquadFilter();return e.type="lowpass",e.frequency.setTargetAtTime(Cr.lowpassThreshold,this.audioContext.currentTime,0),this.sourceNode.connect(e),e.connect(this.analyserNode),yield this.audioContext.resume(),this})}},be=Cr;be.lowpassThreshold=8e3;var Mr=class{constructor(t=new be,e=17){this.refreshRate=e,this._audioSource=t,this.algorithms=new Map,this.algorithms.set("McLeod",new vr(this._audioSource)),this.algorithms.set("YIN",new gr),this.algorithms.set("AMDF",new br),this.algorithms.set("Dynamic Wavelet",new yr)}static Instance(t=new be,e=17){return this._instance||(this._instance=new this(t,e))}startListening(){this._audioSource.connect().then(()=>{window.clearInterval(this.intervalReference),this.intervalReference=window.setInterval(this.listen.bind(this),this.refreshRate)})}stopListening(){window.clearInterval(this.intervalReference)}setOnListen(t){this.onListen=t}get pitch(){return this._algorithmResult.pitch}get clarity(){return this._algorithmResult.clarity}get volume(){return this._algorithmResult.volume}get audioSource(){return this._audioSource}set audioSource(t){t.analyserNode.smoothingTimeConstant=1,this._audioSource=t}listen(){this._algorithmResult=this.algorithms.get(M.algorithm).detect(this._audioSource),this.pitch===-1&&$t.debug("Pitch not detected.",this._algorithmResult.pitch,this._algorithmResult.clarity),this.onListen(this._algorithmResult.pitch,this._algorithmResult.clarity,this._algorithmResult.volume)}};var mt=class extends O{constructor(){super(...arguments);this.pitchDetectorService=Mr.Instance();this.note=new W(0);this.accuracy=0;this.clarity=1;this.volume=0;this.isShown=!0;this.inTune=!1}connectedCallback(){super.connectedCallback(),this.pitchDetectorService.setOnListen((t,e,i)=>{if(this.clarity=e,this.volume=i,i<.01||e<.95)return;this.note=Vt.freqToNote(t);let o=Vt.noteToPitch(this.note),n=Vt.noteToPitch(new W(this.note.index-1)),a=Vt.noteToPitch(new W(this.note.index+1)),s;t<o?(this.pitchAccidental=Mt.flat,s=Q.map(t,[n,o],[-1,1])):(this.pitchAccidental=Mt.sharp,s=Q.map(t,[a,o],[-1,1])),s<0&&(s=0),this.inTune=s>.95,this.accuracy=s,console.log("Listening")}),this.pitchDetectorService.startListening()}disconnectedCallback(){super.disconnectedCallback(),this.pitchDetectorService.stopListening()}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i),this.isShown?this.pitchDetectorService.startListening():this.pitchDetectorService.stopListening()}updateOscillatorFrequency(t){let e=this.pitchDetectorService.audioSource;e.frequency=Number(t.target.value)}setPlayback(t){t.target.checked?this.pitchDetectorService.audioSource.sourceNode.connect(this.pitchDetectorService.audioSource.audioContext.destination):this.pitchDetectorService.audioSource.sourceNode.disconnect(this.pitchDetectorService.audioSource.audioContext.destination)}resumeContext(){this.pitchDetectorService.audioSource.audioContext.resume().then(()=>{$t.debug("Audio source resumed")},t=>{$t.error("Audio source failed to resume",t)})}render(){return I`
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
    `}};T([V()],mt.prototype,"note",2),T([V()],mt.prototype,"accuracy",2),T([V()],mt.prototype,"clarity",2),T([V()],mt.prototype,"volume",2),T([V({attribute:it.slideShownAttribute,converter:t=>t==="true"})],mt.prototype,"isShown",2),T([V()],mt.prototype,"pitchAccidental",2),mt=T([B("tn-tuner")],mt);var sn=[tr,ir,or,hr,fr,wr,kr,mr,_r,xr,ur,Xe,rr,Qe,lr,Ar,$r,Sr,Er,Tr],Bi=sn;Bi[0].default;"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/serviceWorker.js").catch(r=>console.log("service worker not registered",r))});})();
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

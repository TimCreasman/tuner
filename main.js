(()=>{var ro=Object.create;var Qt=Object.defineProperty;var Fr=Object.getOwnPropertyDescriptor;var io=Object.getOwnPropertyNames;var oo=Object.getPrototypeOf,no=Object.prototype.hasOwnProperty;var je=Math.pow;var Nr=r=>Qt(r,"__esModule",{value:!0});var mt=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports),J=(r,t)=>{Nr(r);for(var e in t)Qt(r,e,{get:t[e],enumerable:!0})},ao=(r,t,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of io(t))!no.call(r,i)&&i!=="default"&&Qt(r,i,{get:()=>t[i],enumerable:!(e=Fr(t,i))||e.enumerable});return r},He=r=>ao(Nr(Qt(r!=null?ro(oo(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r),R=(r,t,e,i)=>{for(var o=i>1?void 0:i?Fr(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(o=(i?a(t,e,o):a(o))||o);return i&&o&&Qt(t,e,o),o};var Ir=(r,t,e)=>new Promise((i,o)=>{var n=c=>{try{s(e.next(c))}catch(l){o(l)}},a=c=>{try{s(e.throw(c))}catch(l){o(l)}},s=c=>c.done?i(c.value):Promise.resolve(c.value).then(n,a);s((e=e.apply(r,t)).next())});var hi=mt((as,ui)=>{"use strict";function et(r){if(this.size=r|0,this.size<=1||(this.size&this.size-1)!=0)throw new Error("FFT size must be a power of two and bigger than 1");this._csize=r<<1;for(var t=new Array(this.size*2),e=0;e<t.length;e+=2){let c=Math.PI*e/this.size;t[e]=Math.cos(c),t[e+1]=-Math.sin(c)}this.table=t;for(var i=0,o=1;this.size>o;o<<=1)i++;this._width=i%2==0?i-1:i,this._bitrev=new Array(1<<this._width);for(var n=0;n<this._bitrev.length;n++){this._bitrev[n]=0;for(var a=0;a<this._width;a+=2){var s=this._width-a-2;this._bitrev[n]|=(n>>>a&3)<<s}}this._out=null,this._data=null,this._inv=0}ui.exports=et;et.prototype.fromComplexArray=function(t,e){for(var i=e||new Array(t.length>>>1),o=0;o<t.length;o+=2)i[o>>>1]=t[o];return i};et.prototype.createComplexArray=function(){let t=new Array(this._csize);for(var e=0;e<t.length;e++)t[e]=0;return t};et.prototype.toComplexArray=function(t,e){for(var i=e||this.createComplexArray(),o=0;o<i.length;o+=2)i[o]=t[o>>>1],i[o+1]=0;return i};et.prototype.completeSpectrum=function(t){for(var e=this._csize,i=e>>>1,o=2;o<i;o+=2)t[e-o]=t[o],t[e-o+1]=-t[o+1]};et.prototype.transform=function(t,e){if(t===e)throw new Error("Input and output buffers must be different");this._out=t,this._data=e,this._inv=0,this._transform4(),this._out=null,this._data=null};et.prototype.realTransform=function(t,e){if(t===e)throw new Error("Input and output buffers must be different");this._out=t,this._data=e,this._inv=0,this._realTransform4(),this._out=null,this._data=null};et.prototype.inverseTransform=function(t,e){if(t===e)throw new Error("Input and output buffers must be different");this._out=t,this._data=e,this._inv=1,this._transform4();for(var i=0;i<t.length;i++)t[i]/=this.size;this._out=null,this._data=null};et.prototype._transform4=function(){var t=this._out,e=this._csize,i=this._width,o=1<<i,n=e/o<<1,a,s,c=this._bitrev;if(n===4)for(a=0,s=0;a<e;a+=n,s++){let y=c[s];this._singleTransform2(a,y,o)}else for(a=0,s=0;a<e;a+=n,s++){let y=c[s];this._singleTransform4(a,y,o)}var l=this._inv?-1:1,f=this.table;for(o>>=2;o>=2;o>>=2){n=e/o<<1;var u=n>>>2;for(a=0;a<e;a+=n)for(var d=a+u,b=a,v=0;b<d;b+=2,v+=o){let y=b,k=y+u,h=k+u,m=h+u,p=t[y],w=t[y+1],_=t[k],E=t[k+1],N=t[h],x=t[h+1],F=t[m],D=t[m+1],Y=p,j=w,T=f[v],A=l*f[v+1],$=_*T-E*A,g=_*A+E*T,S=f[2*v],C=l*f[2*v+1],P=N*S-x*C,z=N*C+x*S,q=f[3*v],H=l*f[3*v+1],G=F*q-D*H,lt=F*H+D*q,ct=Y+P,X=j+z,bt=Y-P,K=j-z,yt=$+G,ht=g+lt,it=l*($-G),wt=l*(g-lt),Pt=ct+yt,Ne=X+ht,Ie=ct-yt,ze=X-ht,Oe=bt+wt,De=K-it,Le=bt-wt,qe=K+it;t[y]=Pt,t[y+1]=Ne,t[k]=Oe,t[k+1]=De,t[h]=Ie,t[h+1]=ze,t[m]=Le,t[m+1]=qe}}};et.prototype._singleTransform2=function(t,e,i){let o=this._out,n=this._data,a=n[e],s=n[e+1],c=n[e+i],l=n[e+i+1],f=a+c,u=s+l,d=a-c,b=s-l;o[t]=f,o[t+1]=u,o[t+2]=d,o[t+3]=b};et.prototype._singleTransform4=function(t,e,i){let o=this._out,n=this._data,a=this._inv?-1:1,s=i*2,c=i*3,l=n[e],f=n[e+1],u=n[e+i],d=n[e+i+1],b=n[e+s],v=n[e+s+1],y=n[e+c],k=n[e+c+1],h=l+b,m=f+v,p=l-b,w=f-v,_=u+y,E=d+k,N=a*(u-y),x=a*(d-k),F=h+_,D=m+E,Y=p+x,j=w-N,T=h-_,A=m-E,$=p-x,g=w+N;o[t]=F,o[t+1]=D,o[t+2]=Y,o[t+3]=j,o[t+4]=T,o[t+5]=A,o[t+6]=$,o[t+7]=g};et.prototype._realTransform4=function(){var t=this._out,e=this._csize,i=this._width,o=1<<i,n=e/o<<1,a,s,c=this._bitrev;if(n===4)for(a=0,s=0;a<e;a+=n,s++){let Ue=c[s];this._singleRealTransform2(a,Ue>>>1,o>>>1)}else for(a=0,s=0;a<e;a+=n,s++){let Ue=c[s];this._singleRealTransform4(a,Ue>>>1,o>>>1)}var l=this._inv?-1:1,f=this.table;for(o>>=2;o>=2;o>>=2){n=e/o<<1;var u=n>>>1,d=u>>>1,b=d>>>1;for(a=0;a<e;a+=n)for(var v=0,y=0;v<=b;v+=2,y+=o){var k=a+v,h=k+d,m=h+d,p=m+d,w=t[k],_=t[k+1],E=t[h],N=t[h+1],x=t[m],F=t[m+1],D=t[p],Y=t[p+1],j=w,T=_,A=f[y],$=l*f[y+1],g=E*A-N*$,S=E*$+N*A,C=f[2*y],P=l*f[2*y+1],z=x*C-F*P,q=x*P+F*C,H=f[3*y],G=l*f[3*y+1],lt=D*H-Y*G,ct=D*G+Y*H,X=j+z,bt=T+q,K=j-z,yt=T-q,ht=g+lt,it=S+ct,wt=l*(g-lt),Pt=l*(S-ct),Ne=X+ht,Ie=bt+it,ze=K+Pt,Oe=yt-wt;if(t[k]=Ne,t[k+1]=Ie,t[h]=ze,t[h+1]=Oe,v===0){var De=X-ht,Le=bt-it;t[m]=De,t[m+1]=Le;continue}if(v!==b){var qe=K,Yi=-yt,Vi=X,Wi=-bt,Gi=-l*Pt,Ki=-l*wt,Zi=-l*it,Ji=-l*ht,Qi=qe+Gi,Xi=Yi+Ki,to=Vi+Ji,eo=Wi-Zi,Rr=a+d-v,Pr=a+u-v;t[Rr]=Qi,t[Rr+1]=Xi,t[Pr]=to,t[Pr+1]=eo}}}};et.prototype._singleRealTransform2=function(t,e,i){let o=this._out,n=this._data,a=n[e],s=n[e+i],c=a+s,l=a-s;o[t]=c,o[t+1]=0,o[t+2]=l,o[t+3]=0};et.prototype._singleRealTransform4=function(t,e,i){let o=this._out,n=this._data,a=this._inv?-1:1,s=i*2,c=i*3,l=n[e],f=n[e+i],u=n[e+s],d=n[e+c],b=l+u,v=l-u,y=f+d,k=a*(f-d),h=b+y,m=v,p=-k,w=b-y,_=v,E=k;o[t]=h,o[t+1]=0,o[t+2]=m,o[t+3]=p,o[t+4]=w,o[t+5]=0,o[t+6]=_,o[t+7]=E}});var fi=mt(le=>{"use strict";var xe=le&&le.__assign||function(){return xe=Object.assign||function(r){for(var t,e=1,i=arguments.length;e<i;e++){t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},xe.apply(this,arguments)};Object.defineProperty(le,"__esModule",{value:!0});var Ao={threshold:.1,sampleRate:44100,probabilityThreshold:.1};function $o(r){r===void 0&&(r={});var t=xe(xe({},Ao),r),e=t.threshold,i=t.sampleRate,o=t.probabilityThreshold;return function(a){var s;for(s=1;s<a.length;s*=2);s/=2;for(var c=s/2,l=new Float32Array(c),f=0,u,d=0;d<c;d++)l[d]=0;for(var d=1;d<c;d++)for(var b=0;b<c;b++){var v=a[b]-a[b+d];l[d]+=v*v}l[0]=1,l[1]=1;for(var y=0,d=1;d<c;d++)y+=l[d],l[d]*=d/y;for(u=2;u<c;u++)if(l[u]<e){for(;u+1<c&&l[u+1]<l[u];)u++;f=1-l[u];break}if(u===c||l[u]>=e||f<o)return null;var k,h,m;if(u<1?h=u:h=u-1,u+1<c?m=u+1:m=u,h===u)l[u]<=l[m]?k=u:k=m;else if(m===u)l[u]<=l[h]?k=u:k=h;else{var p=l[h],w=l[u],_=l[m];k=u+(_-p)/(2*(2*w-_-p))}return i/k}}le.YIN=$o});var pi=mt(ce=>{"use strict";var Ae=ce&&ce.__assign||function(){return Ae=Object.assign||function(r){for(var t,e=1,i=arguments.length;e<i;e++){t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},Ae.apply(this,arguments)};Object.defineProperty(ce,"__esModule",{value:!0});var So={sampleRate:44100,minFrequency:82,maxFrequency:1e3,ratio:5,sensitivity:.1};function Co(r){r===void 0&&(r={});var t=Ae(Ae({},So),r),e=t.sampleRate,i=t.minFrequency,o=t.maxFrequency,n=t.sensitivity,a=t.ratio,s=[],c=Math.ceil(e/i),l=Math.floor(e/o);return function(u){var d=u.length,b=0,v=1/0,y=-1/0,k,h,m,p,w,_,E,N;for(p=0;p<d;p++)if(l<=p&&p<=c){for(E=0,N=p,b=0,k=[],h=[];E<d-p;b++,N++,E++)k[b]=u[E],h[b]=u[N];var x=k.length;for(m=[],_=0;_<x;_++)m[_]=k[_]-h[_];var F=0;for(_=0;_<x;_++)F+=Math.abs(m[_]);s[p]=F}for(w=l;w<c;w++)s[w]<v&&(v=s[w]),s[w]>y&&(y=s[w]);var D=Math.round(n*(y-v)+v);for(w=l;w<=c&&s[w]>D;w++);var Y=l/2;v=s[w];var j=w;for(p=w-1;p<w+Y&&p<=c;p++)s[p]<v&&(v=s[p],j=p);return Math.round(s[j]*a)<y?e/j:null}}ce.AMDF=Co});var gi=mt(de=>{"use strict";var $e=de&&de.__assign||function(){return $e=Object.assign||function(r){for(var t,e=1,i=arguments.length;e<i;e++){t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},$e.apply(this,arguments)};Object.defineProperty(de,"__esModule",{value:!0});var vi={sampleRate:44100};function Eo(r){r===void 0&&(r=vi);var t=$e($e({},vi),r),e=t.sampleRate;return function(o){var n=o.length,a=0,s,c,l,f;for(s=0;s<n;s++)f=o[s],a+=f*f;if(a=Math.sqrt(a/n),a<.01)return-1;var u=0,d=n-1,b=.2;for(s=0;s<n/2;s++)if(Math.abs(o[s])<b){u=s;break}for(s=1;s<n/2;s++)if(Math.abs(o[n-s])<b){d=n-s;break}var v=o.slice(u,d),y=v.length,k=new Array(y).fill(0);for(s=0;s<y;s++)for(c=0;c<y-s;c++)k[s]=k[s]+v[c]*v[c+s];for(l=0;k[l]>k[l+1];)l++;var h=-1,m=-1;for(s=l;s<y;s++)k[s]>h&&(h=k[s],m=s);var p=m,w=k[p-1],_=k[p],E=k[p+1],N=(w+E-2*_)/2,x=(E-w)/2;return N&&(p=p-x/(2*N)),e/p}}de.ACF2PLUS=Eo});var bi=mt(ue=>{"use strict";var Se=ue&&ue.__assign||function(){return Se=Object.assign||function(r){for(var t,e=1,i=arguments.length;e<i;e++){t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},Se.apply(this,arguments)};Object.defineProperty(ue,"__esModule",{value:!0});var Mo=6,To=3e3,Ro=3,Po=.75,Fo={sampleRate:44100};function No(r){r===void 0&&(r={});var t=Se(Se({},Fo),r),e=t.sampleRate;return function(o){for(var n=[],a=[],s=o.length,c=null,l=0,f=0,u=0,d=0;d<s;d++){var b=o[d];l=l+b,u=Math.max(u,b),f=Math.min(f,b)}l/=s,f-=l,u-=l;for(var v=u>-1*f?u:-1*f,y=v*Po,k=0,h=-1,m=o.length,p,w,_;p=~~(e/(Math.pow(2,k)*To)),!(m<2);){var E=void 0,N=-1e3,x=-1e6,F=-1e6,D=!1,Y=!1;_=0,w=0;for(var d=2;d<m;d++){var j=o[d]-l,T=o[d-1]-l;T<=0&&j>0&&(D=!0),T>=0&&j<0&&(Y=!0),E=j-T,N>-1e3&&(Y&&N<0&&E>=0&&Math.abs(j)>=y&&d>x+p&&(n[_++]=d,x=d,Y=!1),D&&N>0&&E<=0&&Math.abs(j)>=y&&d>F+p&&(a[w++]=d,F=d,D=!1)),N=E}if(_===0&&w===0)break;for(var A=void 0,$=[],d=0;d<m;d++)$[d]=0;for(var d=0;d<_;d++)for(var g=1;g<Ro;g++)d+g<_&&(A=Math.abs(n[d]-n[d+g]),$[A]+=1);for(var S=-1,C=-1,d=0;d<m;d++){for(var P=0,g=-1*p;g<=p;g++)d+g>=0&&d+g<m&&(P+=$[d+g]);P===C?d===2*S&&(S=d):P>C&&(C=P,S=d)}for(var z=0,q=0,g=-p;g<=p;g++)if(S+g>=0&&S+g<s){var H=$[S+g];H>0&&(q+=H,z+=(S+g)*H)}if(z/=q,h>-1&&Math.abs(z*2-h)<=2*p){c=e/(Math.pow(2,k-1)*h);break}if(h=z,k++,k>=Mo||m<2)break;var G=o.subarray(0);m===$.length&&(G=new Float32Array(m/2));for(var d=0;d<m/2;d++)G[d]=(o[2*d]+o[2*d+1])/2;o=G,m/=2}return c}}ue.DynamicWavelet=No});var yi=mt(he=>{"use strict";var Ce=he&&he.__assign||function(){return Ce=Object.assign||function(r){for(var t,e=1,i=arguments.length;e<i;e++){t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},Ce.apply(this,arguments)};Object.defineProperty(he,"__esModule",{value:!0});var Io={bufferSize:1024,cutoff:.97,sampleRate:44100};function zo(r){r===void 0&&(r={});var t=Ce(Ce({},Io),r),e=t.bufferSize,i=t.cutoff,o=t.sampleRate,n=.5,a=80,s=new Float32Array(e),c=new Float32Array(e),l,f,u=[],d=[],b=[];function v(h){var m,p;c[0]=h[0]*h[0];for(var w=1;w<h.length;w+=1)c[w]=h[w]*h[w]+c[w-1];for(var _=0;_<h.length;_++){m=0,p=c[h.length-1-_]+c[h.length-1]-c[_];for(var w=0;w<h.length-_;w++)m+=h[w]*h[w+_];s[_]=2*m/p}}function y(h){var m=s[h-1],p=s[h],w=s[h+1],_=h,E=w+m-2*p;if(E===0)l=_,f=p;else{var N=m-w;l=_+N/(2*E),f=p-N*N/(8*E)}}function k(){for(var h=0,m=0;h<(s.length-1)/3&&s[h]>0;)h++;for(;h<s.length-1&&s[h]<=0;)h++;for(h==0&&(h=1);h<s.length-1;)if(s[h]>s[h-1]&&s[h]>=s[h+1]&&(m==0||s[h]>s[m])&&(m=h),h++,h<s.length-1&&s[h]<=0)for(m>0&&(u.push(m),m=0);h<s.length-1&&s[h]<=0;)h++;m>0&&u.push(m)}return function(m){var p;u=[],d=[],b=[],v(m),k();for(var w=-1/0,_=0;_<u.length;_++){var E=u[_];w=Math.max(w,s[E]),s[E]>n&&(y(E),b.push(f),d.push(l),w=Math.max(w,f))}if(d.length){for(var N=i*w,x=0,_=0;_<b.length;_++)if(b[_]>=N){x=_;break}var F=d[x],D=o/F;D>a?p=D:p=-1}else p=-1;return{probability:w,freq:p}}}he.Macleod=zo});var wi=mt(Tt=>{"use strict";var Ee=Tt&&Tt.__assign||function(){return Ee=Object.assign||function(r){for(var t,e=1,i=arguments.length;e<i;e++){t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},Ee.apply(this,arguments)};Object.defineProperty(Tt,"__esModule",{value:!0});Tt.DEFAULT_FREQUENCIES_PARAMS={tempo:120,quantization:4,sampleRate:44100};function Oo(r,t){var e=r.map(function(l){return l(t)}).filter(function(l){return l!==null}).sort(function(l,f){return l-f});if(e.length===1)return e[0];if(e.length===2){var i=e[0],o=e[1];return i*2>o?Math.sqrt(i*o):i}else{var i=e[0],o=e[1],n=e[e.length-2],a=e[e.length-1],s=i*2>o?e:e.slice(1),c=n*2>a?s:s.slice(0,-1);return Math.pow(c.reduce(function(u,d){return u*d},1),1/c.length)}}function Do(r,t,e){e===void 0&&(e={});var i=Ee(Ee({},Tt.DEFAULT_FREQUENCIES_PARAMS),e),o=i.tempo,n=i.quantization,a=i.sampleRate,s=t.length,c=Math.round(a*60/(n*o)),l;Array.isArray(r)?l=Oo.bind(null,r):l=r;for(var f=[],u=0,d=s-c;u<=d;u+=c){var b=t.slice(u,u+c),v=l(b);f.push(v)}return f}Tt.frequencies=Do});var Ci=mt(pt=>{"use strict";Object.defineProperty(pt,"__esModule",{value:!0});var _i=fi();pt.YIN=_i.YIN;var ki=pi();pt.AMDF=ki.AMDF;var xi=gi();pt.ACF2PLUS=xi.ACF2PLUS;var Ai=bi();pt.DynamicWavelet=Ai.DynamicWavelet;var $i=yi();pt.Macleod=$i.Macleod;var Si=wi();pt.frequencies=Si.frequencies;pt.default={YIN:_i.YIN,AMDF:ki.AMDF,ACF2PLUS:xi.ACF2PLUS,DynamicWavelet:Ai.DynamicWavelet,Macleod:$i.Macleod,frequencies:Si.frequencies}});var ji=mt((Qs,Ui)=>{var Zo=4,Jo=.001,Qo=1e-7,Xo=10,ge=11,Pe=1/(ge-1),tn=typeof Float32Array=="function";function Oi(r,t){return 1-3*t+3*r}function Di(r,t){return 3*t-6*r}function Li(r){return 3*r}function Fe(r,t,e){return((Oi(t,e)*r+Di(t,e))*r+Li(t))*r}function qi(r,t,e){return 3*Oi(t,e)*r*r+2*Di(t,e)*r+Li(t)}function en(r,t,e,i,o){var n,a,s=0;do a=t+(e-t)/2,n=Fe(a,i,o)-r,n>0?e=a:t=a;while(Math.abs(n)>Qo&&++s<Xo);return a}function rn(r,t,e,i){for(var o=0;o<Zo;++o){var n=qi(t,e,i);if(n===0)return t;var a=Fe(t,e,i)-r;t-=a/n}return t}function on(r){return r}Ui.exports=function(t,e,i,o){if(!(0<=t&&t<=1&&0<=i&&i<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===e&&i===o)return on;for(var n=tn?new Float32Array(ge):new Array(ge),a=0;a<ge;++a)n[a]=Fe(a*Pe,t,i);function s(c){for(var l=0,f=1,u=ge-1;f!==u&&n[f]<=c;++f)l+=Pe;--f;var d=(c-n[f])/(n[f+1]-n[f]),b=l+d*Pe,v=qi(b,t,i);return v>=Jo?rn(c,b,t,i):v===0?b:en(c,l,l+Pe,t,i)}return function(l){return l===0?0:l===1?1:Fe(s(l),e,o)}}});var tr={};J(tr,{AppBodyComponent:()=>Ct});var B=r=>t=>typeof t=="function"?((e,i)=>(window.customElements.define(e,i),i))(r,t):((e,i)=>{let{kind:o,elements:n}=i;return{kind:o,elements:n,finisher(a){window.customElements.define(e,a)}}})(r,t);var so=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,r)}};function V(r){return(t,e)=>e!==void 0?((i,o,n)=>{o.constructor.createProperty(n,i)})(r,t,e):so(r,t)}function at(r){return V({...r,state:!0})}var Ft=({finisher:r,descriptor:t})=>(e,i)=>{var o;if(i===void 0){let n=(o=e.originalKey)!==null&&o!==void 0?o:e.key,a=t!=null?{kind:"method",placement:"prototype",key:n,descriptor:t(e.key)}:{...e,key:n};return r!=null&&(a.finisher=function(s){r(s,n)}),a}{let n=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),r==null||r(n,i)}};function zr(r,t){return Ft({descriptor:e=>{let i={get(){var o,n;return(n=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(r))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(t){let o=typeof e=="symbol"?Symbol():"__"+e;i.get=function(){var n,a;return this[o]===void 0&&(this[o]=(a=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(r))!==null&&a!==void 0?a:null),this[o]}}return i}})}var ye=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Be=Symbol(),Or=new Map,we=class{constructor(t,e){if(this._$cssResult$=!0,e!==Be)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=Or.get(this.cssText);return ye&&t===void 0&&(Or.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}},Nt=r=>new we(typeof r=="string"?r:r+"",Be),U=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((i,o,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[n+1],r[0]);return new we(e,Be)},Ye=(r,t)=>{ye?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let i=document.createElement("style"),o=window.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=e.cssText,r.appendChild(i)})},_e=ye?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return Nt(e)})(r):r;var Ve,Dr=window.trustedTypes,lo=Dr?Dr.emptyScript:"",Lr=window.reactiveElementPolyfillSupport,We={toAttribute(r,t){switch(t){case Boolean:r=r?lo:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},qr=(r,t)=>t!==r&&(t==t||r==r),Ge={attribute:!0,type:String,converter:We,reflect:!1,hasChanged:qr},_t=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,i)=>{let o=this._$Eh(i,e);o!==void 0&&(this._$Eu.set(o,i),t.push(o))}),t}static createProperty(t,e=Ge){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let i=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){let n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ge}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){let e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let o of i)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let o of i)e.unshift(_e(o))}else t!==void 0&&e.push(_e(t));return e}static _$Eh(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Ye(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=Ge){var o,n;let a=this.constructor._$Eh(t,i);if(a!==void 0&&i.reflect===!0){let s=((n=(o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==null&&n!==void 0?n:We.toAttribute)(e,i.type);this._$Ei=t,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$Ei=null}}_$AK(t,e){var i,o,n;let a=this.constructor,s=a._$Eu.get(t);if(s!==void 0&&this._$Ei!==s){let c=a.getPropertyOptions(s),l=c.converter,f=(n=(o=(i=l)===null||i===void 0?void 0:i.fromAttribute)!==null&&o!==void 0?o:typeof l=="function"?l:null)!==null&&n!==void 0?n:We.fromAttribute;this._$Ei=s,this[s]=f(e,c.type),this._$Ei=null}}requestUpdate(t,e,i){let o=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||qr)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Ei!==t&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((o,n)=>this[n]=o),this._$Et=void 0);let e=!1,i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$Eg)===null||t===void 0||t.forEach(o=>{var n;return(n=o.hostUpdate)===null||n===void 0?void 0:n.call(o)}),this.update(i)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$E_!==void 0&&(this._$E_.forEach((e,i)=>this._$ES(i,this[i],e)),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}};_t.finalized=!0,_t.elementProperties=new Map,_t.elementStyles=[],_t.shadowRootOptions={mode:"open"},Lr==null||Lr({ReactiveElement:_t}),((Ve=globalThis.reactiveElementVersions)!==null&&Ve!==void 0?Ve:globalThis.reactiveElementVersions=[]).push("1.0.2");var Ke,It=globalThis.trustedTypes,Ur=It?It.createPolicy("lit-html",{createHTML:r=>r}):void 0,kt=`lit$${(Math.random()+"").slice(9)}$`,jr="?"+kt,co=`<${jr}>`,zt=document,Xt=(r="")=>zt.createComment(r),te=r=>r===null||typeof r!="object"&&typeof r!="function",Hr=Array.isArray,uo=r=>{var t;return Hr(r)||typeof((t=r)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},ee=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Br=/-->/g,Yr=/>/g,$t=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Vr=/'/g,Wr=/"/g,Gr=/^(?:script|style|textarea)$/i,Kr=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),I=Kr(1),Ot=Kr(2),ft=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),Zr=new WeakMap,Jr=(r,t,e)=>{var i,o;let n=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t,a=n._$litPart$;if(a===void 0){let s=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:null;n._$litPart$=a=new Ut(t.insertBefore(Xt(),s),s,void 0,e??{})}return a._$AI(r),a},Dt=zt.createTreeWalker(zt,129,null,!1),ho=(r,t)=>{let e=r.length-1,i=[],o,n=t===2?"<svg>":"",a=ee;for(let c=0;c<e;c++){let l=r[c],f,u,d=-1,b=0;for(;b<l.length&&(a.lastIndex=b,u=a.exec(l),u!==null);)b=a.lastIndex,a===ee?u[1]==="!--"?a=Br:u[1]!==void 0?a=Yr:u[2]!==void 0?(Gr.test(u[2])&&(o=RegExp("</"+u[2],"g")),a=$t):u[3]!==void 0&&(a=$t):a===$t?u[0]===">"?(a=o??ee,d=-1):u[1]===void 0?d=-2:(d=a.lastIndex-u[2].length,f=u[1],a=u[3]===void 0?$t:u[3]==='"'?Wr:Vr):a===Wr||a===Vr?a=$t:a===Br||a===Yr?a=ee:(a=$t,o=void 0);let v=a===$t&&r[c+1].startsWith("/>")?" ":"";n+=a===ee?l+co:d>=0?(i.push(f),l.slice(0,d)+"$lit$"+l.slice(d)+kt+v):l+kt+(d===-2?(i.push(void 0),c):v)}let s=n+(r[e]||"<?>")+(t===2?"</svg>":"");return[Ur!==void 0?Ur.createHTML(s):s,i]},Lt=class{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,a=0,s=t.length-1,c=this.parts,[l,f]=ho(t,e);if(this.el=Lt.createElement(l,i),Dt.currentNode=this.el.content,e===2){let u=this.el.content,d=u.firstChild;d.remove(),u.append(...d.childNodes)}for(;(o=Dt.nextNode())!==null&&c.length<s;){if(o.nodeType===1){if(o.hasAttributes()){let u=[];for(let d of o.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(kt)){let b=f[a++];if(u.push(d),b!==void 0){let v=o.getAttribute(b.toLowerCase()+"$lit$").split(kt),y=/([.?@])?(.*)/.exec(b);c.push({type:1,index:n,name:y[2],strings:v,ctor:y[1]==="."?Xr:y[1]==="?"?ti:y[1]==="@"?ei:re})}else c.push({type:6,index:n})}for(let d of u)o.removeAttribute(d)}if(Gr.test(o.tagName)){let u=o.textContent.split(kt),d=u.length-1;if(d>0){o.textContent=It?It.emptyScript:"";for(let b=0;b<d;b++)o.append(u[b],Xt()),Dt.nextNode(),c.push({type:2,index:++n});o.append(u[d],Xt())}}}else if(o.nodeType===8)if(o.data===jr)c.push({type:2,index:n});else{let u=-1;for(;(u=o.data.indexOf(kt,u+1))!==-1;)c.push({type:7,index:n}),u+=kt.length-1}n++}}static createElement(t,e){let i=zt.createElement("template");return i.innerHTML=t,i}};function qt(r,t,e=r,i){var o,n,a,s;if(t===ft)return t;let c=i!==void 0?(o=e._$Cl)===null||o===void 0?void 0:o[i]:e._$Cu,l=te(t)?void 0:t._$litDirective$;return(c==null?void 0:c.constructor)!==l&&((n=c==null?void 0:c._$AO)===null||n===void 0||n.call(c,!1),l===void 0?c=void 0:(c=new l(r),c._$AT(r,e,i)),i!==void 0?((a=(s=e)._$Cl)!==null&&a!==void 0?a:s._$Cl=[])[i]=c:e._$Cu=c),c!==void 0&&(t=qt(r,c._$AS(r,t.values),c,i)),t}var Qr=class{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;let{el:{content:i},parts:o}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:zt).importNode(i,!0);Dt.currentNode=n;let a=Dt.nextNode(),s=0,c=0,l=o[0];for(;l!==void 0;){if(s===l.index){let f;l.type===2?f=new Ut(a,a.nextSibling,this,t):l.type===1?f=new l.ctor(a,l.name,l.strings,this,t):l.type===6&&(f=new ri(a,this,t)),this.v.push(f),l=o[++c]}s!==(l==null?void 0:l.index)&&(a=Dt.nextNode(),s++)}return n}m(t){let e=0;for(let i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Ut=class{constructor(t,e,i,o){var n;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cg=(n=o==null?void 0:o.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=qt(this,t,e),te(t)?t===O||t==null||t===""?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==ft&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.S(t):uo(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==O&&te(this._$AH)?this._$AA.nextSibling.data=t:this.S(zt.createTextNode(t)),this._$AH=t}T(t){var e;let{values:i,_$litType$:o}=t,n=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Lt.createElement(o.h,this.options)),o);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.m(i);else{let a=new Qr(n,this),s=a.p(this.options);a.m(i),this.S(s),this._$AH=a}}_$AC(t){let e=Zr.get(t.strings);return e===void 0&&Zr.set(t.strings,e=new Lt(t)),e}M(t){Hr(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,o=0;for(let n of t)o===e.length?e.push(i=new Ut(this.A(Xt()),this.A(Xt()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){let o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},re=class{constructor(t,e,i,o,n){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){let n=this.strings,a=!1;if(n===void 0)t=qt(this,t,e,0),a=!te(t)||t!==this._$AH&&t!==ft,a&&(this._$AH=t);else{let s=t,c,l;for(t=n[0],c=0;c<n.length-1;c++)l=qt(this,s[i+c],e,c),l===ft&&(l=this._$AH[c]),a||(a=!te(l)||l!==this._$AH[c]),l===O?t=O:t!==O&&(t+=(l??"")+n[c+1]),this._$AH[c]=l}a&&!o&&this.k(t)}k(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Xr=class extends re{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===O?void 0:t}},mo=It?It.emptyScript:"",ti=class extends re{constructor(){super(...arguments),this.type=4}k(t){t&&t!==O?this.element.setAttribute(this.name,mo):this.element.removeAttribute(this.name)}},ei=class extends re{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=qt(this,t,e,0))!==null&&i!==void 0?i:O)===ft)return;let o=this._$AH,n=t===O&&o!==O||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,a=t!==O&&(o===O||n);n&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},ri=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){qt(this,t)}};var ii=window.litHtmlPolyfillSupport;ii==null||ii(Lt,Ut),((Ke=globalThis.litHtmlVersions)!==null&&Ke!==void 0?Ke:globalThis.litHtmlVersions=[]).push("2.0.2");var Ze,Je;var L=class extends _t{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;let i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Jr(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return ft}};L.finalized=!0,L._$litElement$=!0,(Ze=globalThis.litElementHydrateSupport)===null||Ze===void 0||Ze.call(globalThis,{LitElement:L});var oi=globalThis.litElementPolyfillSupport;oi==null||oi({LitElement:L});((Je=globalThis.litElementVersions)!==null&&Je!==void 0?Je:globalThis.litElementVersions=[]).push("3.0.2");var Qe={};J(Qe,{default:()=>Z});console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");var Z=U`
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
`;var ni=["primary","highlight","background"],ke=class extends Event{constructor(t,e){super("theme-changed",{bubbles:!0,composed:!0});this.color=t,this.value=e}};var ie={frequencyRing:"Frequency Ring",volumeRing:"Volume Ring",noteFill:"Note Fill",noteOctave:"Note Octave",noteOutline:"Note Outline",needle:"Needle",donationButton:"Donation Button",settingsButton:"Settings Button"};var Q=class{};Q.map=(t,e,i)=>(t-e[0])*(i[1]-i[0])/(e[1]-e[0])+i[0],Q.clamp=(t,e)=>Math.min(Math.max(t,e[0]),e[1]),Q.round=(t,e)=>Number(Math.round(Number(t+"e"+e))+"e-"+e);var M=class{static Instance(){return this._instance||(this._instance=new this)}static isHexCode(t){return t.match(/^#[0-9a-f]{6}/i)}static getPropertyName(t,e){let i={};return Object.keys(t).map(o=>i[o]=o),e(i)}static getStoredValueOrDefault(t){var e;return(e=localStorage.getItem(t))!=null?e:this.defaultConfig[t]}static set config(t){Object.keys(t).forEach(e=>{localStorage.setItem(e,t[e].toString())})}static get config(){let t={accidentalMode:this.accidentalMode,frequencyOfA:this.frequencyOfA,debugMode:"false",algorithm:this.algorithm};for(let e in ni)t[e]=this.getColor(e);for(let e in ie)t[e]=this.getComponent(e).toString();return t}static get debugMode(){return this.getStoredValueOrDefault("debugMode")==="true"}static set debugMode(t){localStorage.setItem(this.getPropertyName(this.defaultConfig,e=>e.debugMode),t.toString())}static set accidentalMode(t){localStorage.setItem(this.getPropertyName(this.defaultConfig,e=>e.accidentalMode),t.toString())}static get accidentalMode(){return Number(this.getStoredValueOrDefault("accidentalMode"))}static set frequencyOfA(t){t=Q.clamp(t,[this.ALowerBoundFreq,this.AUpperBoundFreq]),localStorage.setItem(this.getPropertyName(this.defaultConfig,e=>e.frequencyOfA),t.toString())}static get frequencyOfA(){return Number(this.getStoredValueOrDefault("frequencyOfA"))}static setColor(t,e){this.isHexCode(e)&&localStorage.setItem(this.getPropertyName(this.defaultConfig,i=>i[t]),e)}static getColor(t){return this.getStoredValueOrDefault(t)}static set algorithm(t){localStorage.setItem(this.getPropertyName(this.defaultConfig,e=>e.algorithm),t)}static get algorithm(){return this.getStoredValueOrDefault("algorithm")}static setComponent(t,e){localStorage.setItem(this.getPropertyName(this.defaultConfig,i=>i[t]),e.toString())}static getComponent(t){return this.getStoredValueOrDefault(t)==="true"}};M.defaultConfig={accidentalMode:1,frequencyOfA:440,debugMode:"true",primary:"#FF7A00",highlight:"#FFFFFF",background:"#000000",algorithm:"McLeod",frequencyRing:"true",volumeRing:"true",noteFill:"true",noteOctave:"true",noteOutline:"true",needle:"true",donationButton:"true",settingsButton:"true"},M.ALowerBoundFreq=415,M.AUpperBoundFreq=466;var jt=class{static hexToRgb(t){let e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;t=t.replace(e,function(o,n,a,s){return n+n+a+a+s+s});let i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return i?{r:parseInt(i[1],16),g:parseInt(i[2],16),b:parseInt(i[3],16)}:null}};var Xe={};J(Xe,{default:()=>St});var St=U`
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
        --primary-color: ${Nt(M.defaultConfig.primary)};
        --background-color: ${Nt(M.defaultConfig.background)};
        --highlight-color: ${Nt(M.defaultConfig.highlight)};
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
`,Ct=class extends L{constructor(){super(...arguments);this.showSettings=!1;this.showDonation=!1}connectedCallback(){super.connectedCallback(),this.calculateDocumentHeight();let t=jt.hexToRgb(M.getColor("primary")),e=jt.hexToRgb(M.getColor("highlight")),i=jt.hexToRgb(M.getColor("background"));this.style.setProperty("--primary-color",`${t.r}, ${t.g}, ${t.b}`),this.style.setProperty("--highlight-color",`${e.r}, ${e.g}, ${e.b}`),this.style.setProperty("--background-color",`${i.r}, ${i.g}, ${i.b}`)}calculateDocumentHeight(){let t=()=>{document.documentElement.style.setProperty("--doc-height",`${window.innerHeight}px`)};window.addEventListener("resize",t),t()}refreshTheme(t){let e=jt.hexToRgb(t.value);this.style.setProperty("--"+t.color+"-color",`${e.r}, ${e.g}, ${e.b}`)}toggleSettings(){this.showDonation=!1,this.showSettings=!this.showSettings}renderSettings(){return this.showSettings?I`
            <tn-settings @theme-changed="${this.refreshTheme}"></tn-settings>`:O}toggleDonation(){this.showSettings=!1,this.showDonation=!this.showDonation}onDoubleClick(){this.showSettings||this.toggleSettings()}renderDonation(){return this.showDonation?I`
            <tn-donation></tn-donation>`:O}renderButtonDonation(){return M.getComponent("donationButton")?I`
                <button class="floating-button donation-button" @click="${this.toggleDonation}"><i
                        class="${this.showDonation?"far fa-circle-xmark":"fa fa-coffee"}"></i></button>
        `:O}renderButtonSettings(){return!M.getComponent("settingsButton")&&!this.showSettings?O:I`
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
        `}};Ct.styles=[fo,Z,St],R([V()],Ct.prototype,"showSettings",2),R([V()],Ct.prototype,"showDonation",2),Ct=R([B("tn-app")],Ct);var ir={};J(ir,{DonationComponent:()=>oe,DonationComponentStyles:()=>ai});var rr={};J(rr,{default:()=>er});var er=U`
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
`,oe=class extends L{constructor(){super()}render(){return I`
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
        `}};oe.styles=[ai,St,er,Z],oe=R([B("tn-donation")],oe);var or={};J(or,{PitchPipeComponent:()=>Ht});var po=U`
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
        width: 8.75ch;
        height: 8.75ch;
        border-radius: 50%;
        margin-top: 38%;
        color: rgb(var(--highlight-color));
    }
`,Ht=class extends L{constructor(){super(...arguments);this._handlePlay=()=>{var t;new Audio(`./audio/pitch${(t=this.note)==null?void 0:t.index}.mp3`).play()}}render(){return I`
                <div class="play-note-button-container" @click=${this._handlePlay}>
                    <button class="play-note-button"><i class="fa fa-circle-play"></i></button>
                </div>
        `}};Ht.styles=[po,St,Z],R([V()],Ht.prototype,"note",2),Ht=R([B("tn-pitch-pipe-player")],Ht);var sr={};J(sr,{PitchPipeComponent:()=>ne});var si={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},li=r=>(...t)=>({_$litDirective$:r,values:t}),nr=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var rt=li(class extends nr{constructor(r){var t;if(super(r),r.type!==si.ATTRIBUTE||r.name!=="class"||((t=r.strings)===null||t===void 0?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter(t=>r[t]).join(" ")+" "}update(r,[t]){var e,i;if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.et=new Set(r.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in t)t[n]&&!((e=this.et)===null||e===void 0?void 0:e.has(n))&&this.st.add(n);return this.render(t)}let o=r.element.classList;this.st.forEach(n=>{n in t||(o.remove(n),this.st.delete(n))});for(let n in t){let a=!!t[n];a===this.st.has(n)||((i=this.et)===null||i===void 0?void 0:i.has(n))||(a?(o.add(n),this.st.add(n)):(o.remove(n),this.st.delete(n)))}return ft}});var Bt=12,vo=["C","C","D","D","E","F","F","G","G","A","A","B"],go=[1,3,6,8,10],bo=["C","D","D","E","E","F","G","G","A","A","B","B"],Et;(function(e){e[e.sharp=0]="sharp",e[e.flat=1]="flat"})(Et||(Et={}));var W=class{get letter(){return this.lookupLetter()}get accidental(){return this.lookupAccidental()}constructor(t){this.index=Q.clamp(t,[0,127]),this.octave=Math.floor(t/Bt)-1}equals(t){return this.index===t.index&&this.letter===t.letter&&this.accidental===t.accidental}lookupLetter(){return M.accidentalMode?vo[this.index%Bt]:bo[this.index%Bt]}lookupAccidental(){return go.includes(this.index%Bt)?M.accidentalMode?"#":"b":""}},ar=new W(0),yo=new W(69),ci=new W(127),Yt=class{static freqToNote(t){if(t<this.noteToPitch(ar))return ar;if(t>this.noteToPitch(ci))return ci;let e=Math.round(Bt*Math.log2(t/this.noteToPitch(ar)));if(isNaN(e))throw new Error("calculated frequency produced NaN");return new W(e)}static noteToPitch(t){let e=t.index-yo.index,i=je(2,1/Bt);return M.frequencyOfA*je(i,e)}};var wo=U`
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
        dominant-baseline: middle;
        /* The gear shape is not perfectly square, so I account for that here */
        transform-origin: 50% 49.44444%;
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
`,ne=class extends L{constructor(){super(...arguments);this._pipeRotation=0;this._pipeRotationVelocity=0;this._pipeRotationOffset=30;this._isUserInteracting=!0;this._shouldUpdatePhysics=!1;this._notes=[new W(48),new W(49),new W(50),new W(51),new W(52),new W(53),new W(54),new W(55),new W(56),new W(57),new W(58),new W(59)];this._currentNote=this._notes[0];this._previousTouch=null}set pipeRotation(t){let e=this.pipeRotation;this._pipeRotation=t%360,this.pipeRotationVelocity=this.pipeRotation-e,this._currentNote=this._getCurrentNote(),this.requestUpdate("pipeRotation",e)}get pipeRotation(){return this._pipeRotation}set pipeRotationVelocity(t){this._pipeRotation!=t&&(this._shouldUpdatePhysics=!0),this._pipeRotationVelocity=t}get pipeRotationVelocity(){return this._pipeRotationVelocity}connectedCallback(){super.connectedCallback();let t=1e3/60;setInterval(()=>{if(!this._isUserInteracting&&this._shouldUpdatePhysics)if(this._shouldUpdatePhysics=!1,this.pipeRotationVelocity<.1&&this.pipeRotationVelocity>-.1){this.pipeRotationVelocity=0;let e=this.pipeRotation-Math.round(this.pipeRotation/30)*30;this.rotateToAngle(e)}else{let e=this.pipeRotationVelocity>0?-.1:.1;this.pipeRotationVelocity+=e,this.pipeRotation+=this.pipeRotationVelocity}},t)}rotateToAngle(t){let e=t>0?-1:1,o=Math.sqrt(2*.1*Math.abs(t));this.pipeRotationVelocity=o*e}_handleMouseMove(t){this._isUserInteracting=!0,t.buttons>0&&this._handleRotationStart(t.movementY)}_handleMouseUp(){this._isUserInteracting=!1}_handleTouchMove(t){this._isUserInteracting=!0;let e=t.touches[0];this._previousTouch&&this._handleRotationStart(e.pageY-this._previousTouch.pageY),this._previousTouch=e}_handleTouchEnd(){this._previousTouch=null,this._isUserInteracting=!1}_handleRotationStart(t){this.pipeRotation+=t}_getCurrentNote(){let t=this.pipeRotation<0?this.pipeRotation:this.pipeRotation-360,e=Q.round(Math.abs(t)/30,0)%12;return this._notes[e]}_renderNotes(){return Ot`
            ${this._notes.map((t,e)=>{let i=this.pipeRotation+30*e,o={"gear-note":!0,"center-text":!0,"gear-note-selected":this._currentNote.equals(t),"fill-primary-stroke-background":this._currentNote.equals(t),"fill-background-stroke-primary":!this._currentNote.equals(t)},n=structuredClone(o);return n["gear-note-accidental"]=!0,n["fill-primary-stroke-background"]=!this._currentNote.equals(t),n["gear-note-accidental-selected"]=this._currentNote.equals(t),n["fill-background-stroke-primary"]=this._currentNote.equals(t),Ot`
                    <text @click=${()=>this.rotateToAngle(i)}
                        class="${rt(o)}" x="50%" y="16%"
                        transform="rotate(${i})">
                        ${t.letter}
                    </text>
                    <text class="${rt(n)}" x="54%" y="12%"
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
                    <text class="${rt({gear:!0,"background-gear":!0,"center-text":!0})}" 
                          fill="url(#gradient-fill-background-gear)" 
                          stroke="url(#gradient-stroke-background-gear)"
                          transform="rotate(${this.pipeRotation-this._pipeRotationOffset})"
                          x="50%" y="55%">
                        \uf013
                    </text>
                    <text class="${rt({gear:!0,"foreground-gear":!0,"center-text":!0})}" 
                          fill="url(#gradient-fill-foreground-gear)" 
                          stroke="url(#gradient-stroke-foreground-gear)"
                          transform="rotate(${this.pipeRotation})"
                          x="50%" y="55%">
                        \uf013
                    </text>
                    ${this._renderNotes()}
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
        `}};ne.styles=[Z,wo],ne=R([B("tn-pitch-pipe")],ne);var cr={};J(cr,{AppearanceSettingsComponent:()=>se,AppearanceSettingsComponentStyles:()=>di});var lr={};J(lr,{SettingsComponent:()=>ae,SettingsComponentStyles:()=>dt});var dt=U`
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
`,ae=class extends L{constructor(){super()}render(){return I`
            <tn-modal>
                <div slot="header">Settings</div>
                <div slot="content">
                    <tn-general-settings></tn-general-settings>
                    <tn-theme-settings></tn-theme-settings>
                    <tn-appearance-settings></tn-appearance-settings>
                    <tn-experimental-settings></tn-experimental-settings>
                </div>
            </tn-modal>
        `}};ae.styles=[dt,Z],ae=R([B("tn-settings")],ae);var di=U`
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
`,se=class extends L{constructor(){super();this.settingsButtonHelperText="To get to this modal again without the settings button, double tap the screen."}updateComponent(t,e){let i=t.target.checked;M.setComponent(e,i)}render(){return I`
            <tn-accordion>
                <div slot="header">Appearance</div>
                <div slot="content">
                    ${Object.keys(ie).map(t=>I`
                        <div class="row">
                            <label for="${t}" class="switch">
                                <input id="${t}"
                                       type="checkbox"
                                       .checked="${M.getComponent(t)}"
                                       @click= ${e=>this.updateComponent(e,t)}>
                                <span class="slider round"></span>
                            </label>
                            <span class="nowrap">${ie[t]}</span>
                            <span class="helper-text">
                                ${t==="settingsButton"?this.settingsButtonHelperText:O}
                            </span>
                        </div>
                        `)}
                </div>
            </tn-accordion>
        `}};se.styles=[dt,di,Z],se=R([B("tn-appearance-settings")],se);var pr={};J(pr,{ExperimentalSettingsComponent:()=>Gt});var mi=He(hi()),Vt=class{_inputLength;_fft;_bufferSupplier;_paddedInputBuffer;_transformBuffer;_inverseBuffer;static forFloat32Array(t){return new Vt(t,e=>new Float32Array(e))}static forFloat64Array(t){return new Vt(t,e=>new Float64Array(e))}static forNumberArray(t){return new Vt(t,e=>Array(e))}constructor(t,e){if(t<1)throw new Error("Input length must be at least one");this._inputLength=t,this._fft=new mi.default(xo(2*t)),this._bufferSupplier=e,this._paddedInputBuffer=this._bufferSupplier(this._fft.size),this._transformBuffer=this._bufferSupplier(2*this._fft.size),this._inverseBuffer=this._bufferSupplier(2*this._fft.size)}get inputLength(){return this._inputLength}autocorrelate(t,e=this._bufferSupplier(t.length)){if(t.length!==this._inputLength)throw new Error(`Input must have length ${this._inputLength} but had length ${t.length}`);for(let o=0;o<t.length;o++)this._paddedInputBuffer[o]=t[o];for(let o=t.length;o<this._paddedInputBuffer.length;o++)this._paddedInputBuffer[o]=0;this._fft.realTransform(this._transformBuffer,this._paddedInputBuffer),this._fft.completeSpectrum(this._transformBuffer);let i=this._transformBuffer;for(let o=0;o<i.length;o+=2)i[o]=i[o]*i[o]+i[o+1]*i[o+1],i[o+1]=0;this._fft.inverseTransform(this._inverseBuffer,this._transformBuffer);for(let o=0;o<t.length;o++)e[o]=this._inverseBuffer[2*o];return e}};function _o(r){let t=[],e=!1,i=-1/0,o=-1;for(let n=1;n<r.length-1;n++)r[n-1]<=0&&r[n]>0?(e=!0,o=n,i=r[n]):r[n-1]>0&&r[n]<=0?(e=!1,o!==-1&&t.push(o)):e&&r[n]>i&&(i=r[n],o=n);return t}function ko(r,t){let[e,i,o]=[r-1,r,r+1],[n,a,s]=[t[e],t[i],t[o]],c=n/2-a+s/2,l=-(n/2)*(i+o)+a*(e+o)-s/2*(e+i),f=n*i*o/2-a*e*o+s*e*i/2,u=-l/(2*c),d=c*u*u+l*u+f;return[u,d]}var Mt=class{_autocorrelator;_nsdfBuffer;_clarityThreshold=.9;static forFloat32Array(t){return new Mt(t,e=>new Float32Array(e))}static forFloat64Array(t){return new Mt(t,e=>new Float64Array(e))}static forNumberArray(t){return new Mt(t,e=>Array(e))}constructor(t,e){this._autocorrelator=new Vt(t,e),this._nsdfBuffer=e(t)}get inputLength(){return this._autocorrelator.inputLength}findPitch(t,e){this._nsdf(t);let i=_o(this._nsdfBuffer);if(i.length===0)return[0,0];let o=Math.max(...i.map(c=>this._nsdfBuffer[c])),n=i.find(c=>this._nsdfBuffer[c]>=this._clarityThreshold*o),[a,s]=ko(n,this._nsdfBuffer);return[e/a,Math.min(s,1)]}_nsdf(t){this._autocorrelator.autocorrelate(t,this._nsdfBuffer);let e=2*this._nsdfBuffer[0],i;for(i=0;i<this._nsdfBuffer.length&&e>0;i++)this._nsdfBuffer[i]=2*this._nsdfBuffer[i]/e,e-=t[i]**2+t[t.length-i-1]**2;for(;i<this._nsdfBuffer.length;i++)this._nsdfBuffer[i]=0}};function xo(r){return r--,r|=r>>1,r|=r>>2,r|=r>>4,r|=r>>8,r|=r>>16,r++,r}var Wt=He(Ci()),Ei=["McLeod","YIN","AMDF","Dynamic Wavelet"],dr=class{constructor(){this.pitch=-1;this.volume=-1;this.clarity=-1}},ur=class{constructor(t){this.detector=Mt.forFloat32Array(t.analyserNode.fftSize)}detect(t){let e=new Float32Array(this.detector.inputLength);t.analyserNode.getFloatTimeDomainData(e);let i=new dr;[i.pitch,i.clarity]=this.detector.findPitch(e,t.audioContext.sampleRate);let o=e.reduce((n,a)=>n+a*a,0);return i.volume=Math.sqrt(o/e.length),i}},Me=class{detect(t){let e=new Float32Array(2048);t.analyserNode.getFloatTimeDomainData(e);let i=new dr;i.pitch=this.detector(e),i.clarity=1;let o=e.reduce((n,a)=>n+a*a,0);return i.volume=Math.sqrt(o/e.length),i}},hr=class extends Me{constructor(){super();this.detector=Wt.YIN()}},mr=class extends Me{constructor(){super();this.detector=Wt.AMDF()}},fr=class extends Me{constructor(){super();this.detector=Wt.DynamicWavelet()}};var Gt=class extends L{constructor(){super();this.algorithm=M.algorithm}updateAlgorithm(t){let e=t.target.value;this.algorithm=e,M.algorithm=e}render(){return I`
                    <tn-accordion>
                        <div slot="header">Experimental</div>
                        <div slot="content">
                            <div class="row">
                                <label>Pitch Detection Algorithm</label>
                                <select @input="${this.updateAlgorithm}">
                                    ${Ei.map(t=>I`
                                        <option .selected="${t===this.algorithm}" .value="${t}">${t}</option>
                                    `)}
                                </select>
                            </div>
                        </div>
                    </tn-accordion>
        `}};Gt.styles=[dt,Z],R([at()],Gt.prototype,"algorithm",2),Gt=R([B("tn-experimental-settings")],Gt);var vr={};J(vr,{GeneralSettingsComponent:()=>Rt});var Rt=class extends L{constructor(){super();this.frequencyOfA=M.frequencyOfA;this.accidentalMode=M.accidentalMode}updateAccidentalMode(t){let e=t.target.checked===!1?1:0;this.accidentalMode=e,M.accidentalMode=e}resetFrequencyOfA(){this.frequencyOfA=M.defaultConfig.frequencyOfA,M.frequencyOfA=M.defaultConfig.frequencyOfA}updateFrequencyOfA(t){let e=Number(t.target.value);this.frequencyOfA=e,M.frequencyOfA=e}render(){return I`
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
                                <i class="fa fa-undo" @click=${this.resetFrequencyOfA}></i>`:O}
                        </div>
                    </div>
                </tn-accordion>
    `}};Rt.styles=[dt,Z],R([at()],Rt.prototype,"frequencyOfA",2),R([at()],Rt.prototype,"accidentalMode",2),Rt=R([B("tn-general-settings")],Rt);var gr={};J(gr,{ThemeSettingsComponent:()=>xt});var Lo=U`
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
`,xt=class extends L{constructor(){super();this.primaryColor=M.getColor("primary");this.highlightColor=M.getColor("highlight");this.backgroundColor=M.getColor("background")}updateColor(t,e){let i=t.target.value;M.setColor(e,i),this.updateLocalColor(e,i),this.dispatchEvent(new ke(e,i))}resetColor(t){M.setColor(t,M.defaultConfig[t]),this.updateLocalColor(t,M.defaultConfig[t]),this.dispatchEvent(new ke(t,M.defaultConfig[t]))}updateLocalColor(t,e){switch(t){case"primary":this.primaryColor=e;break;case"background":this.backgroundColor=e;break;case"highlight":this.highlightColor=e;break}}render(){return I`
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
                            <i class="fa fa-undo" @click=${()=>this.resetColor("primary")}></i>`:O}
                    </div>
                    <div class="row color-row">
                        <div class="color-ball highlight"></div>
                        <input id="highlight-color" type="text" maxlength="7" size="7"
                               .value="${this.highlightColor}"
                               @input="${t=>this.updateColor(t,"highlight")}"
                        >
                        <label for="highlight-color" class="color-label">Highlight</label>
                        ${this.highlightColor!==M.defaultConfig.highlight?I`
                            <i class="fa fa-undo" @click=${()=>this.resetColor("highlight")}></i>`:O}
                    </div>
                    <div class="row color-row">
                        <div class="color-ball background"></div>
                        <input id="background-color" type="text" maxlength="7" size="7"
                               .value="${this.backgroundColor}"
                               @input="${t=>this.updateColor(t,"background")}"
                        >
                        <label for="background-color" class="color-label">Background</label>
                        ${this.backgroundColor!==M.defaultConfig.background?I`
                            <i class="fa fa-undo" @click=${()=>this.resetColor("background")}></i>`:O}
                    </div>
                </div>
            </tn-accordion>
        `}};xt.styles=[Lo,dt,Z],R([at()],xt.prototype,"primaryColor",2),R([at()],xt.prototype,"highlightColor",2),R([at()],xt.prototype,"backgroundColor",2),xt=R([B("tn-theme-settings")],xt);var br={};J(br,{AccordionComponent:()=>me});var qo=U`
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
`,me=class extends L{render(){return I`
            <details>
                <summary class="header">
                    <slot name="header"></slot>
                </summary>
                <div class="content">
                    <slot name="content"></slot>
                </div>
            </details>
        `}};me.styles=[qo,Z],me=R([B("tn-accordion")],me);var xr={};J(xr,{CarouselComponent:()=>Zt});var wr={};J(wr,{default:()=>yr});var yr=U`
    .keen-slider:not([data-keen-slider-disabled]){-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;align-content:flex-start;display:flex;overflow:hidden;position:relative;touch-action:pan-y;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-khtml-user-select:none;width:100%}.keen-slider:not([data-keen-slider-disabled]) .keen-slider__slide{min-height:100%;overflow:hidden;position:relative;width:100%}.keen-slider:not([data-keen-slider-disabled])[data-keen-slider-reverse]{flex-direction:row-reverse}.keen-slider:not([data-keen-slider-disabled])[data-keen-slider-v]{flex-wrap:wrap}
`;var Kt=function(){return Kt=Object.assign||function(r){for(var t,e=1,i=arguments.length;e<i;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o]);return r},Kt.apply(this,arguments)};function Mi(r,t,e){if(e||arguments.length===2)for(var i,o=0,n=t.length;o<n;o++)!i&&o in t||(i||(i=Array.prototype.slice.call(t,0,o)),i[o]=t[o]);return r.concat(i||Array.prototype.slice.call(t))}function Ti(r){return Array.prototype.slice.call(r)}function Ri(r,t){var e=Math.floor(r);return e===t||e+1===t?r:t}function Pi(){return Date.now()}function _r(r,t,e){if(t="data-keen-slider-"+t,e===null)return r.removeAttribute(t);r.setAttribute(t,e||"")}function Te(r,t){return t=t||document,typeof r=="function"&&(r=r(t)),Array.isArray(r)?r:typeof r=="string"?Ti(t.querySelectorAll(r)):r instanceof HTMLElement?[r]:r instanceof NodeList?Ti(r):[]}function fe(r){r.raw&&(r=r.raw),r.cancelable&&!r.defaultPrevented&&r.preventDefault()}function pe(r){r.raw&&(r=r.raw),r.stopPropagation&&r.stopPropagation()}function Fi(){var r=[];return{add:function(t,e,i,o){t.addListener?t.addListener(i):t.addEventListener(e,i,o),r.push([t,e,i,o])},input:function(t,e,i,o){this.add(t,e,function(n){return function(a){a.nativeEvent&&(a=a.nativeEvent);var s=a.changedTouches||[],c=a.targetTouches||[],l=a.detail&&a.detail.x?a.detail:null;return n({id:l?l.identifier?l.identifier:"i":c[0]?c[0]?c[0].identifier:"e":"d",idChanged:l?l.identifier?l.identifier:"i":s[0]?s[0]?s[0].identifier:"e":"d",raw:a,x:l&&l.x?l.x:c[0]?c[0].screenX:l?l.x:a.pageX,y:l&&l.y?l.y:c[0]?c[0].screenY:l?l.y:a.pageY})}}(i),o)},purge:function(){r.forEach(function(t){t[0].removeListener?t[0].removeListener(t[2]):t[0].removeEventListener(t[1],t[2],t[3])}),r=[]}}}function kr(r,t,e){return Math.min(Math.max(r,t),e)}function st(r){return(r>0?1:0)-(r<0?1:0)||+r}function Ni(r){var t=r.getBoundingClientRect();return{height:Ri(t.height,r.offsetHeight),width:Ri(t.width,r.offsetWidth)}}function tt(r,t,e,i){var o=r&&r[t];return o==null?e:i&&typeof o=="function"?o():o}function ot(r){return Math.round(1e6*r)/1e6}function Uo(r){var t,e,i,o,n,a;function s(d){a||(a=d),c(!0);var b=d-a;b>i&&(b=i);var v=o[e];if(v[3]<b)return e++,s(d);var y=v[2],k=v[4],h=v[0],m=v[1]*(0,v[5])(k===0?1:(b-y)/k);if(m&&r.track.to(h+m),b<i)return f();a=null,c(!1),l(null),r.emit("animationEnded")}function c(d){t.active=d}function l(d){t.targetIdx=d}function f(){var d;d=s,n=window.requestAnimationFrame(d)}function u(){var d;d=n,window.cancelAnimationFrame(d),c(!1),l(null),a&&r.emit("animationStopped"),a=null}return t={active:!1,start:function(d){if(u(),r.track.details){var b=0,v=r.track.details.position;e=0,i=0,o=d.map(function(y){var k,h=Number(v),m=(k=y.earlyExit)!==null&&k!==void 0?k:y.duration,p=y.easing,w=y.distance*p(m/y.duration)||0;v+=w;var _=i;return i+=m,b+=w,[h,y.distance,_,i,y.duration,p]}),l(r.track.distToIdx(b)),f(),r.emit("animationStarted")}},stop:u,targetIdx:null}}function jo(r){var t,e,i,o,n,a,s,c,l,f,u,d,b,v,y=1/0,k=[],h=null,m=0;function p(A){j(m+A)}function w(A){var $=_(m+A).abs;return x($)?$:null}function _(A){var $=Math.floor(Math.abs(ot(A/e))),g=ot((A%e+e)%e);g===e&&(g=0);var S=st(A),C=s.indexOf(Mi([],s,!0).reduce(function(z,q){return Math.abs(q-g)<Math.abs(z-g)?q:z})),P=C;return S<0&&$++,C===a&&(P=0,$+=S>0?1:-1),{abs:P+$*a*S,origin:C,rel:P}}function E(A,$,g){var S;if($||!D())return N(A,g);if(!x(A))return null;var C=_(g??m),P=C.abs,z=A-C.rel,q=P+z;S=N(q);var H=N(q-a*st(z));return(H!==null&&Math.abs(H)<Math.abs(S)||S===null)&&(S=H),ot(S)}function N(A,$){if($==null&&($=ot(m)),!x(A)||A===null)return null;A=Math.round(A);var g=_($),S=g.abs,C=g.rel,P=g.origin,z=Y(A),q=($%e+e)%e,H=s[P],G=Math.floor((A-(S-C))/a)*e;return ot(H-q-H+s[z]+G+(P===a?e:0))}function x(A){return F(A)===A}function F(A){return kr(A,l,f)}function D(){return o.loop}function Y(A){return(A%a+a)%a}function j(A){var $;$=A-m,k.push({distance:$,timestamp:Pi()}),k.length>6&&(k=k.slice(-6)),m=ot(A);var g=T().abs;if(g!==h){var S=h!==null;h=g,S&&r.emit("slideChanged")}}function T(A){var $=A?null:function(){if(a){var g=D(),S=g?(m%e+e)%e:m,C=(g?m%e:m)-n[0][2],P=0-(C<0&&g?e-Math.abs(C):C),z=0,q=_(m),H=q.abs,G=q.rel,lt=n[G][2],ct=n.map(function(X,bt){var K=P+z;(K<0-X[0]||K>1)&&(K+=(Math.abs(K)>e-1&&g?e:0)*st(-K));var yt=bt-G,ht=st(yt),it=yt+H;g&&(ht===-1&&K>lt&&(it+=a),ht===1&&K<lt&&(it-=a),u!==null&&it<u&&(K+=e),d!==null&&it>d&&(K-=e));var wt=K+X[0]+X[1],Pt=Math.max(K>=0&&wt<=1?1:wt<0||K>1?0:K<0?Math.min(1,(X[0]+K)/X[0]):(1-K)/X[0],0);return z+=X[0]+X[1],{abs:it,distance:o.rtl?-1*K+1-X[0]:K,portion:Pt,size:X[0]}});return H=F(H),G=Y(H),{abs:F(H),length:i,max:v,maxIdx:f,min:b,minIdx:l,position:m,progress:g?S/e:m/i,rel:G,slides:ct,slidesLength:e}}}();return t.details=$,r.emit("detailsChanged"),$}return t={absToRel:Y,add:p,details:null,distToIdx:w,idxToDist:E,init:function(A){if(function(){if(o=r.options,n=(o.trackConfig||[]).map(function(C){return[tt(C,"size",1),tt(C,"spacing",0),tt(C,"origin",0)]}),a=n.length){e=ot(n.reduce(function(C,P){return C+P[0]+P[1]},0));var g,S=a-1;i=ot(e+n[0][2]-n[S][0]-n[S][2]-n[S][1]),s=n.reduce(function(C,P){if(!C)return[0];var z=n[C.length-1],q=C[C.length-1]+(z[0]+z[2])+z[1];return q-=P[2],C[C.length-1]>q&&(q=C[C.length-1]),q=ot(q),C.push(q),(!g||g<q)&&(c=C.length-1),g=q,C},null),i===0&&(c=0),s.push(ot(e))}}(),!a)return T(!0);var $;(function(){var g=r.options.range,S=r.options.loop;u=l=S?tt(S,"min",-1/0):0,d=f=S?tt(S,"max",y):c;var C=tt(g,"min",null),P=tt(g,"max",null);C!==null&&(l=C),P!==null&&(f=P),b=l===-1/0?l:r.track.idxToDist(l||0,!0,0),v=f===y?f:E(f,!0,0),P===null&&(d=f),tt(g,"align",!1)&&f!==y&&n[Y(f)][2]===0&&(v-=1-n[Y(f)][0],f=w(v-m)),b=ot(b),v=ot(v)})(),$=A,Number($)===$?p(N(F(A))):T()},to:j,velocity:function(){var A=Pi(),$=k.reduce(function(g,S){var C=S.distance,P=S.timestamp;return A-P>200||(st(C)!==st(g.distance)&&g.distance&&(g={distance:0,lastTimestamp:0,time:0}),g.time&&(g.distance+=C),g.lastTimestamp&&(g.time+=P-g.lastTimestamp),g.lastTimestamp=P),g},{distance:0,lastTimestamp:0,time:0});return $.distance/$.time||0}}}function Ho(r){var t,e,i,o,n,a,s,c;function l(h){return 2*h}function f(h){return kr(h,s,c)}function u(h){return 1-Math.pow(1-h,3)}function d(){return i?r.track.velocity():0}function b(){k();var h=r.options.mode==="free-snap",m=r.track,p=d();o=st(p);var w=r.track.details,_=[];if(p||!h){var E=v(p),N=E.dist,x=E.dur;if(x=l(x),N*=o,h){var F=m.idxToDist(m.distToIdx(N),!0);F&&(N=F)}_.push({distance:N,duration:x,easing:u});var D=w.position,Y=D+N;if(Y<n||Y>a){var j=Y<n?n-D:a-D,T=0,A=p;if(st(j)===o){var $=Math.min(Math.abs(j)/Math.abs(N),1),g=function(P){return 1-Math.pow(1-P,1/3)}($)*x;_[0].earlyExit=g,A=p*(1-$)}else _[0].earlyExit=0,T+=j;var S=v(A,100),C=S.dist*o;r.options.rubberband&&(_.push({distance:C,duration:l(S.dur),easing:u}),_.push({distance:-C+T,duration:500,easing:u}))}r.animator.start(_)}else r.moveToIdx(f(w.abs),!0,{duration:500,easing:function(P){return 1+--P*P*P*P*P}})}function v(h,m){m===void 0&&(m=1e3);var p=147e-9+(h=Math.abs(h))/m;return{dist:Math.pow(h,2)/p,dur:h/p}}function y(){var h=r.track.details;h&&(n=h.min,a=h.max,s=h.minIdx,c=h.maxIdx)}function k(){r.animator.stop()}r.on("updated",y),r.on("optionsChanged",y),r.on("created",y),r.on("dragStarted",function(){i=!1,k(),t=e=r.track.details.abs}),r.on("dragChecked",function(){i=!0}),r.on("dragEnded",function(){var h=r.options.mode;h==="snap"&&function(){var m=r.track,p=r.track.details,w=p.position,_=st(d());(w>a||w<n)&&(_=0);var E=t+_;p.slides[m.absToRel(E)].portion===0&&(E-=_),t!==e&&(E=e),st(m.idxToDist(E,!0))!==_&&(E+=_),E=f(E);var N=m.idxToDist(E,!0);r.animator.start([{distance:N,duration:500,easing:function(x){return 1+--x*x*x*x*x}}])}(),h!=="free"&&h!=="free-snap"||b()}),r.on("dragged",function(){e=r.track.details.abs})}function Bo(r){var t,e,i,o,n,a,s,c,l,f,u,d,b,v,y,k,h,m,p=Fi();function w(T){if(a&&c===T.id){var A=x(T);if(l){if(!N(T))return E(T);f=A,l=!1,r.emit("dragChecked")}if(k)return f=A;fe(T);var $=function(S){if(h===-1/0&&m===1/0)return S;var C=r.track.details,P=C.length,z=C.position,q=kr(S,h-z,m-z);if(P===0)return 0;if(!r.options.rubberband)return q;if(z<=m&&z>=h||z<h&&e>0||z>m&&e<0)return S;var H=(z<h?z-h:z-m)/P,G=o*P,lt=Math.abs(H*G),ct=Math.max(0,1-lt/n*2);return ct*ct*S}(s(f-A)/o*i);e=st($);var g=r.track.details.position;(g>h&&g<m||g===h&&e>0||g===m&&e<0)&&pe(T),u+=$,!d&&Math.abs(u*o)>5&&(d=!0),r.track.add($),f=A,r.emit("dragged")}}function _(T){!a&&r.track.details&&r.track.details.length&&(u=0,a=!0,d=!1,l=!0,c=T.id,N(T),f=x(T),r.emit("dragStarted"))}function E(T){a&&c===T.idChanged&&(a=!1,r.emit("dragEnded"))}function N(T){var A=F(),$=A?T.y:T.x,g=A?T.x:T.y,S=b!==void 0&&v!==void 0&&Math.abs(v-g)<=Math.abs(b-$);return b=$,v=g,S}function x(T){return F()?T.y:T.x}function F(){return r.options.vertical}function D(){o=r.size,n=F()?window.innerHeight:window.innerWidth;var T=r.track.details;T&&(h=T.min,m=T.max)}function Y(T){d&&(pe(T),fe(T))}function j(){if(p.purge(),r.options.drag&&!r.options.disabled){var T;T=r.options.dragSpeed||1,s=typeof T=="function"?T:function($){return $*T},i=r.options.rtl?-1:1,D(),t=r.container,function(){var $="data-keen-slider-clickable";Te("[".concat($,"]:not([").concat($,"=false])"),t).map(function(g){p.add(g,"dragstart",pe),p.add(g,"mousedown",pe),p.add(g,"touchstart",pe)})}(),p.add(t,"dragstart",function($){fe($)}),p.add(t,"click",Y,{capture:!0}),p.input(t,"ksDragStart",_),p.input(t,"ksDrag",w),p.input(t,"ksDragEnd",E),p.input(t,"mousedown",_),p.input(t,"mousemove",w),p.input(t,"mouseleave",E),p.input(t,"mouseup",E),p.input(t,"touchstart",_,{passive:!0}),p.input(t,"touchmove",w,{passive:!1}),p.input(t,"touchend",E),p.input(t,"touchcancel",E),p.add(window,"wheel",function($){a&&fe($)});var A="data-keen-slider-scrollable";Te("[".concat(A,"]:not([").concat(A,"=false])"),r.container).map(function($){return function(g){var S;p.input(g,"touchstart",function(C){S=x(C),k=!0,y=!0},{passive:!0}),p.input(g,"touchmove",function(C){var P=F(),z=P?g.scrollHeight-g.clientHeight:g.scrollWidth-g.clientWidth,q=S-x(C),H=P?g.scrollTop:g.scrollLeft,G=P&&g.style.overflowY==="scroll"||!P&&g.style.overflowX==="scroll";if(S=x(C),(q<0&&H>0||q>0&&H<z)&&y&&G)return k=!0;y=!1,fe(C),k=!1}),p.input(g,"touchend",function(){k=!1})}($)})}}r.on("updated",D),r.on("optionsChanged",j),r.on("created",j),r.on("destroyed",p.purge)}function Yo(r){var t,e,i=null;function o(b,v,y){r.animator.active?a(b,v,y):requestAnimationFrame(function(){return a(b,v,y)})}function n(){o(!1,!1,e)}function a(b,v,y){var k=0,h=r.size,m=r.track.details;if(m&&t){var p=m.slides;t.forEach(function(w,_){if(b)!i&&v&&c(w,null,y),l(w,null,y);else{if(!p[_])return;var E=p[_].size*h;!i&&v&&c(w,E,y),l(w,p[_].distance*h-k,y),k+=E}})}}function s(b){return r.options.renderMode==="performance"?Math.round(b):b}function c(b,v,y){var k=y?"height":"width";v!==null&&(v=s(v)+"px"),b.style["min-"+k]=v,b.style["max-"+k]=v}function l(b,v,y){if(v!==null){v=s(v);var k=y?v:0;v="translate3d(".concat(y?0:v,"px, ").concat(k,"px, 0)")}b.style.transform=v,b.style["-webkit-transform"]=v}function f(){t&&(a(!0,!0,e),t=null),r.on("detailsChanged",n,!0)}function u(){o(!1,!0,e)}function d(){f(),e=r.options.vertical,r.options.disabled||r.options.renderMode==="custom"||(i=tt(r.options.slides,"perView",null)==="auto",r.on("detailsChanged",n),(t=r.slides).length&&u())}r.on("created",d),r.on("optionsChanged",d),r.on("beforeOptionsChanged",function(){f()}),r.on("updated",u),r.on("destroyed",f)}function Vo(r,t){return function(e){var i,o,n,a,s,c,l=Fi();function f(x){var F;_r(e.container,"reverse",(F=e.container,window.getComputedStyle(F,null).getPropertyValue("direction")!=="rtl"||x?null:"")),_r(e.container,"v",e.options.vertical&&!x?"":null),_r(e.container,"disabled",e.options.disabled&&!x?"":null)}function u(){d()&&h()}function d(){var x=null;if(a.forEach(function(D){D.matches&&(x=D.__media)}),x===i)return!1;i||e.emit("beforeOptionsChanged"),i=x;var F=x?n.breakpoints[x]:n;return e.options=Kt(Kt({},n),F),f(),E(),N(),p(),!0}function b(x){var F=Ni(x);return(e.options.vertical?F.height:F.width)/e.size||1}function v(){return e.options.trackConfig.length}function y(x){for(var F in i=!1,n=Kt(Kt({},t),x),l.purge(),o=e.size,a=[],n.breakpoints||[]){var D=window.matchMedia(F);D.__media=F,a.push(D),l.add(D,"change",u)}l.add(window,"orientationchange",_),l.add(window,"resize",w),d()}function k(x){e.animator.stop();var F=e.track.details;e.track.init(x??(F?F.abs:0))}function h(x){k(x),e.emit("optionsChanged")}function m(x,F){if(x)return y(x),void h(F);E(),N();var D=v();p(),v()!==D?h(F):k(F),e.emit("updated")}function p(){var x=e.options.slides;if(typeof x=="function")return e.options.trackConfig=x(e.size,e.slides);for(var F=e.slides,D=F.length,Y=typeof x=="number"?x:tt(x,"number",D,!0),j=[],T=tt(x,"perView",1,!0),A=tt(x,"spacing",0,!0)/e.size||0,$=T==="auto"?A:A/T,g=tt(x,"origin","auto"),S=0,C=0;C<Y;C++){var P=T==="auto"?b(F[C]):1/T-A+$,z=g==="center"?.5-P/2:g==="auto"?0:g;j.push({origin:z,size:P,spacing:A}),S+=P}if(S+=A*(Y-1),g==="auto"&&!e.options.loop&&T!==1){var q=0;j.map(function(H){var G=S-q;return q+=H.size+A,G>=1||(H.origin=1-G-(S>1?0:1-S)),H})}e.options.trackConfig=j}function w(){E();var x=e.size;e.options.disabled||x===o||(o=x,m())}function _(){w(),setTimeout(w,500),setTimeout(w,2e3)}function E(){var x=Ni(e.container);e.size=(e.options.vertical?x.height:x.width)||1}function N(){e.slides=Te(e.options.selector,e.container)}e.container=(c=Te(r,s||document)).length?c[0]:null,e.destroy=function(){l.purge(),e.emit("destroyed"),f(!0)},e.prev=function(){e.moveToIdx(e.track.details.abs-1,!0)},e.next=function(){e.moveToIdx(e.track.details.abs+1,!0)},e.update=m,y(e.options)}}var Ii=function(r,t,e){try{return function(i,o){var n,a={};return n={emit:function(s){a[s]&&a[s].forEach(function(l){l(n)});var c=n.options&&n.options[s];c&&c(n)},moveToIdx:function(s,c,l){var f=n.track.idxToDist(s,c);if(f){var u=n.options.defaultAnimation;n.animator.start([{distance:f,duration:tt(l||u,"duration",500),easing:tt(l||u,"easing",function(d){return 1+--d*d*d*d*d})}])}},on:function(s,c,l){l===void 0&&(l=!1),a[s]||(a[s]=[]);var f=a[s].indexOf(c);f>-1?l&&delete a[s][f]:l||a[s].push(c)},options:i},function(){if(n.track=jo(n),n.animator=Uo(n),o)for(var s=0,c=o;s<c.length;s++)(0,c[s])(n);n.track.init(n.options.initial||0),n.emit("created")}(),n}(t,Mi([Vo(r,{drag:!0,mode:"snap",renderMode:"precision",rubberband:!0,selector:".keen-slider__slide"}),Yo,Bo,Ho],e||[],!0))}catch(i){console.error(i)}};var Wo=U`
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
`,Zt=class extends L{constructor(){super(...arguments);this.slider=null;this.sliderWrapper=null;this._trackDetails=null}firstUpdated(){this.sliderWrapper=this.shadowRoot.getElementById("slider"),this.slider=new Ii(this.sliderWrapper,{loop:!0})}disconnectedCallback(){this.slider.destroy()}handleSlotchange(t){var i,o;let e=t.target.assignedElements({flatten:!0});for(let n of e)n.className="keen-slider__slide",this.sliderWrapper.appendChild(n);this.slider.update(),this._trackDetails=(o=(i=this.slider)==null?void 0:i.track)==null?void 0:o.details,this.slider.on("slideChanged",()=>{var n,a;this._trackDetails=(a=(n=this.slider)==null?void 0:n.track)==null?void 0:a.details})}render(){var t;return I`
            <div id="slider" class="keen-slider">
               <slot @slotchange=${this.handleSlotchange}></slot>
            </div>
            <div class="track-container">
                <div>
                    ${(t=this._trackDetails)==null?void 0:t.slides.map((e,i)=>I`<div class="track-ball ${this._trackDetails.rel===i?"active":""}"></div>`)}
                </div>
            </div>
        `}};Zt.styles=[Wo,Z,yr],R([at()],Zt.prototype,"_trackDetails",2),Zt=R([B("tn-carousel")],Zt);var Ar={};J(Ar,{SettingsComponent:()=>ve});var Go=U`
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
`,ve=class extends L{render(){return I`
            <div class="modal">
                <slot class="header row" name="header"></slot>
                <slot name="content"></slot>
            </div>
            <div class="scroll-shadow"></div>
        `}};ve.styles=[Go],ve=R([B("tn-modal")],ve);var $r={};J($r,{snapshots:()=>zi});var zi={};zi["TunerComponent should equal snapshot"]=`<tn-tuner>
</tn-tuner>
`;var Sr={};J(Sr,{TunerNoteComponent:()=>nt});var Ko=U`
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
`,nt=class extends L{constructor(){super();this.note=new W(0);this.clarity=1;this.accuracy=0;this.accuracyBuffer=[nt.bufferSize];this.heightAnimator=new Re}updateHeightAnimation(){if(this.heightAnimatorReference)this.heightAnimator.reference=this.heightAnimatorReference;else return;let t=Q.map(this.accuracy,[0,1],[90,25]);this.heightAnimator.to=t+""}update(t){super.update(t),!isNaN(Number(t.get("accuracy")))&&this.updateHeightAnimation()}render(){let t={"tuner-note-stroke-half":M.getComponent("noteOutline"),"tuner-note-octave":!0},e={"tuner-note-stroke-full":M.getComponent("noteOutline"),"tuner-note-letter":!0},i={"tuner-note-stroke-half":M.getComponent("noteOutline"),"tuner-note-accidental":!0};return I`
            <div class="tuner-note-container">
                <svg id="view" viewBox="0 2 100 100" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">

                    <use href="#note-letter" class=${rt(e)}/>

                    ${M.getComponent("noteFill")?Ot`<use href="#liquid-effect" mask="url(#note-mask)"/>`:O}
                    ${M.getComponent("noteOctave")?Ot`<use href="#note-octave" class=${rt(t)}/>`:O}

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
        `}};nt.styles=Ko,nt.bufferSize=25,R([V()],nt.prototype,"note",2),R([V()],nt.prototype,"clarity",2),R([V({type:Number})],nt.prototype,"accuracy",2),R([zr("#height-animator")],nt.prototype,"heightAnimatorReference",2),nt=R([B("tn-tuner-note")],nt);var Jt=class{set reference(t){this._reference=t}get from(){return this._reference.getAttribute("values").match(Jt.fromMatcher)[0]}set from(t){this._reference.setAttribute("values",this._reference.getAttribute("values").replace(Jt.fromMatcher,t))}get to(){return this._reference.getAttribute("values").match(Jt.toMatcher)[0]}set to(t){this._reference.setAttribute("values",this._reference.getAttribute("values").replace(Jt.toMatcher,t))}onEndEvent(){this.from=this.to}},Re=Jt;Re.fromMatcher=/-?\d+\.?\d*(?=;)/g,Re.toMatcher=/-?\d+\.?\d*$/g;var Cr={};J(Cr,{SpokeComponent:()=>vt,TunerRingComponent:()=>ut});var Hi=He(ji());var nn=U`
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
`,ut=class extends L{constructor(){super(...arguments);this.accuracy=0;this.volume=0}updated(){this.style.setProperty("--needle-degree",this.convertAccuracyToRadians()+"rad")}convertAccuracyToRadians(){let t=this.accuracy*(Math.PI/2)-Math.PI/2;return this.pitchAccidental==Et.sharp&&(t*=-1),t}static angleDifference(t,e){let i=t-e;return i+=i>Math.PI?-(2*Math.PI):i<-Math.PI?2*Math.PI:0,Math.abs(i)}render(){let t=[],e=[],i=41;for(let o=0;o<i;o++){let n=o*(Math.PI/(i-1))-Math.PI/2,a=o>=(i-3)/2&&o<=(i+1)/2,s=ut.angleDifference(n,this.convertAccuracyToRadians()),c=Q.map(s,[Math.PI,0],[0,1]),l=Q.clamp(this.volume*8,[.3,.9]);t.push(I`
                <tn-spoke .index="${o}" .scaleFactor="${c}"
                          .arcPosition="${n}" .isMiddle="${a}"></tn-spoke>
            `),e.push(I`
                <tn-spoke .index="${o}" .scaleFactor="${l}"
                          .arcPosition="${n+Math.PI}"></tn-spoke>
            `)}return I`
            <div class="tuner-ring">
                <div class="ring">
                    <span class="top-spokes">
                        ${M.getComponent("frequencyRing")?t:O}
                    </span>
                    <span class="bottom-spokes">
                        ${M.getComponent("volumeRing")?e:O}
                    </span>
                </div>
                ${M.getComponent("needle")?I`<div class="tuner-needle"></div>`:O}
            </div>
        `}};ut.styles=nn,R([V()],ut.prototype,"accuracy",2),R([V()],ut.prototype,"volume",2),R([V()],ut.prototype,"pitchAccidental",2),ut=R([B("tn-tuner-ring")],ut);var an=U`
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

`,vt=class extends L{constructor(){super(...arguments);this.scaleFactor=0;this.arcPosition=0;this.index=0;this.isMiddle=!1}connectedCallback(){super.connectedCallback(),this.isMiddle&&this.style.setProperty("background","rgb(var(--primary-color))"),this.setupPosition()}updated(){let t=(0,Hi.default)(0,0,1,0),e=this.scaleFactor,i=Q.map(this.scaleFactor,[0,1],[1,0]),o=t(e)*5,n=t(i)*15;this.style.setProperty("--x-scale",o+n+""),this.style.setProperty("--y-scale",o+"")}setupPosition(){let t=50*Math.cos(this.arcPosition)+50+"%",e=50*Math.sin(this.arcPosition)+50+"%";this.style.setProperty("bottom",t),this.style.setProperty("left",e),this.style.setProperty("--angle",this.arcPosition+"rad")}};vt.styles=an,R([V()],vt.prototype,"scaleFactor",2),R([V()],vt.prototype,"arcPosition",2),R([V()],vt.prototype,"index",2),R([V()],vt.prototype,"isMiddle",2),vt=R([B("tn-spoke")],vt);var Tr={};J(Tr,{TunerComponent:()=>gt});var At=class{static debug(...t){M.debugMode&&console.debug(t)}static error(...t){console.error(t)}};var Er=class{constructor(){this.audioContext=new AudioContext,this.analyserNode=new AnalyserNode(this.audioContext)}connect(){return Ir(this,null,function*(){let t;try{t=yield navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,autoGainControl:!1,noiseSuppression:!1,latency:0}})}catch(i){At.error(i)}this.sourceNode=this.audioContext.createMediaStreamSource(t);let e=this.audioContext.createBiquadFilter();return e.type="lowpass",e.frequency.setTargetAtTime(Er.lowpassThreshold,this.audioContext.currentTime,0),this.sourceNode.connect(e),e.connect(this.analyserNode),yield this.audioContext.resume(),this})}},be=Er;be.lowpassThreshold=8e3;var Mr=class{constructor(t=new be,e=17){this.refreshRate=e,this._audioSource=t,this.algorithms=new Map,this.algorithms.set("McLeod",new ur(this._audioSource)),this.algorithms.set("YIN",new hr),this.algorithms.set("AMDF",new mr),this.algorithms.set("Dynamic Wavelet",new fr)}static Instance(t=new be,e=17){return this._instance||(this._instance=new this(t,e))}startListening(){this._audioSource.connect().then(()=>{this.intervalReference=window.setInterval(this.listen.bind(this),this.refreshRate)})}stopListening(){window.clearInterval(this.intervalReference)}setOnListen(t){this.onListen=t}get pitch(){return this._algorithmResult.pitch}get clarity(){return this._algorithmResult.clarity}get volume(){return this._algorithmResult.volume}get audioSource(){return this._audioSource}set audioSource(t){t.analyserNode.smoothingTimeConstant=1,this._audioSource=t}listen(){this._algorithmResult=this.algorithms.get(M.algorithm).detect(this._audioSource),this.pitch===-1&&At.debug("Pitch not detected.",this._algorithmResult.pitch,this._algorithmResult.clarity),this.onListen(this._algorithmResult.pitch,this._algorithmResult.clarity,this._algorithmResult.volume)}};var gt=class extends L{constructor(){super(...arguments);this.pitchDetectorService=Mr.Instance();this.note=new W(0);this.accuracy=0;this.clarity=1;this.volume=0;this.inTune=!1}connectedCallback(){super.connectedCallback(),this.pitchDetectorService.setOnListen((t,e,i)=>{if(this.clarity=e,this.volume=i,i<.01||e<.95)return;this.note=Yt.freqToNote(t);let o=Yt.noteToPitch(this.note),n=Yt.noteToPitch(new W(this.note.index-1)),a=Yt.noteToPitch(new W(this.note.index+1)),s;t<o?(this.pitchAccidental=Et.flat,s=Q.map(t,[n,o],[-1,1])):(this.pitchAccidental=Et.sharp,s=Q.map(t,[a,o],[-1,1])),s<0&&(s=0),this.inTune=s>.95,this.accuracy=s}),this.pitchDetectorService.startListening()}disconnectedCallback(){super.disconnectedCallback(),this.pitchDetectorService.stopListening()}updateOscillatorFrequency(t){let e=this.pitchDetectorService.audioSource;e.frequency=Number(t.target.value)}setPlayback(t){t.target.checked?this.pitchDetectorService.audioSource.sourceNode.connect(this.pitchDetectorService.audioSource.audioContext.destination):this.pitchDetectorService.audioSource.sourceNode.disconnect(this.pitchDetectorService.audioSource.audioContext.destination)}resumeContext(){this.pitchDetectorService.audioSource.audioContext.resume().then(()=>{At.debug("Audio source resumed")},t=>{At.error("Audio source failed to resume",t)})}render(){return I`
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
    `}};R([V()],gt.prototype,"note",2),R([V()],gt.prototype,"accuracy",2),R([V()],gt.prototype,"clarity",2),R([V()],gt.prototype,"volume",2),R([V()],gt.prototype,"pitchAccidental",2),gt=R([B("tn-tuner")],gt);var sn=[tr,ir,or,sr,cr,pr,vr,lr,gr,br,xr,Xe,rr,Qe,wr,Ar,$r,Sr,Cr,Tr],Bi=sn;Bi[0].default;"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/serviceWorker.js").catch(r=>console.log("service worker not registered",r))});})();
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

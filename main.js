(()=>{var mn=Object.create;var De=Object.defineProperty;var oo=Object.getOwnPropertyDescriptor;var pn=Object.getOwnPropertyNames;var gn=Object.getPrototypeOf,vn=Object.prototype.hasOwnProperty;var St=Math.pow;var no=r=>De(r,"__esModule",{value:!0});var ee=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),B=(r,e)=>{no(r);for(var t in e)De(r,t,{get:e[t],enumerable:!0})},yn=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of pn(e))!vn.call(r,n)&&n!=="default"&&De(r,n,{get:()=>e[n],enumerable:!(t=oo(e,n))||t.enumerable});return r},$t=r=>yn(no(De(r!=null?mn(gn(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r),x=(r,e,t,n)=>{for(var o=n>1?void 0:n?oo(e,t):e,a=r.length-1,f;a>=0;a--)(f=r[a])&&(o=(n?f(e,t,o):f(o))||o);return n&&o&&De(e,t,o),o};var ro=(r,e,t)=>new Promise((n,o)=>{var a=s=>{try{c(t.next(s))}catch(i){o(i)}},f=s=>{try{c(t.throw(s))}catch(i){o(i)}},c=s=>s.done?n(s.value):Promise.resolve(s.value).then(a,f);c((t=t.apply(r,e)).next())});var Co=ee((xa,Mo)=>{"use strict";function O(r){if(this.size=r|0,this.size<=1||(this.size&this.size-1)!=0)throw new Error("FFT size must be a power of two and bigger than 1");this._csize=r<<1;for(var e=new Array(this.size*2),t=0;t<e.length;t+=2){let s=Math.PI*t/this.size;e[t]=Math.cos(s),e[t+1]=-Math.sin(s)}this.table=e;for(var n=0,o=1;this.size>o;o<<=1)n++;this._width=n%2==0?n-1:n,this._bitrev=new Array(1<<this._width);for(var a=0;a<this._bitrev.length;a++){this._bitrev[a]=0;for(var f=0;f<this._width;f+=2){var c=this._width-f-2;this._bitrev[a]|=(a>>>f&3)<<c}}this._out=null,this._data=null,this._inv=0}Mo.exports=O;O.prototype.fromComplexArray=function(e,t){for(var n=t||new Array(e.length>>>1),o=0;o<e.length;o+=2)n[o>>>1]=e[o];return n};O.prototype.createComplexArray=function(){let e=new Array(this._csize);for(var t=0;t<e.length;t++)e[t]=0;return e};O.prototype.toComplexArray=function(e,t){for(var n=t||this.createComplexArray(),o=0;o<n.length;o+=2)n[o]=e[o>>>1],n[o+1]=0;return n};O.prototype.completeSpectrum=function(e){for(var t=this._csize,n=t>>>1,o=2;o<n;o+=2)e[t-o]=e[o],e[t-o+1]=-e[o+1]};O.prototype.transform=function(e,t){if(e===t)throw new Error("Input and output buffers must be different");this._out=e,this._data=t,this._inv=0,this._transform4(),this._out=null,this._data=null};O.prototype.realTransform=function(e,t){if(e===t)throw new Error("Input and output buffers must be different");this._out=e,this._data=t,this._inv=0,this._realTransform4(),this._out=null,this._data=null};O.prototype.inverseTransform=function(e,t){if(e===t)throw new Error("Input and output buffers must be different");this._out=e,this._data=t,this._inv=1,this._transform4();for(var n=0;n<e.length;n++)e[n]/=this.size;this._out=null,this._data=null};O.prototype._transform4=function(){var e=this._out,t=this._csize,n=this._width,o=1<<n,a=t/o<<1,f,c,s=this._bitrev;if(a===4)for(f=0,c=0;f<t;f+=a,c++){let w=s[c];this._singleTransform2(f,w,o)}else for(f=0,c=0;f<t;f+=a,c++){let w=s[c];this._singleTransform4(f,w,o)}var i=this._inv?-1:1,h=this.table;for(o>>=2;o>=2;o>>=2){a=t/o<<1;var b=a>>>2;for(f=0;f<t;f+=a)for(var l=f+b,g=f,y=0;g<l;g+=2,y+=o){let w=g,k=w+b,d=k+b,u=d+b,m=e[w],p=e[w+1],v=e[k],A=e[k+1],E=e[d],F=e[d+1],R=e[u],I=e[u+1],L=m,z=p,Y=h[y],W=i*h[y+1],j=v*Y-A*W,M=v*W+A*Y,D=h[2*y],Q=i*h[2*y+1],K=E*D-F*Q,Z=E*Q+F*D,ae=h[3*y],G=i*h[3*y+1],X=R*ae-I*G,Ie=R*G+I*ae,Re=L+K,ge=z+Z,ve=L-K,Oe=z-Z,Le=j+X,ye=M+Ie,we=i*(j-X),je=i*(M-Ie),ot=Re+Le,gt=ge+ye,vt=Re-Le,yt=ge-ye,wt=ve+je,kt=Oe-we,_t=ve-je,xt=Oe+we;e[w]=ot,e[w+1]=gt,e[k]=wt,e[k+1]=kt,e[d]=vt,e[d+1]=yt,e[u]=_t,e[u+1]=xt}}};O.prototype._singleTransform2=function(e,t,n){let o=this._out,a=this._data,f=a[t],c=a[t+1],s=a[t+n],i=a[t+n+1],h=f+s,b=c+i,l=f-s,g=c-i;o[e]=h,o[e+1]=b,o[e+2]=l,o[e+3]=g};O.prototype._singleTransform4=function(e,t,n){let o=this._out,a=this._data,f=this._inv?-1:1,c=n*2,s=n*3,i=a[t],h=a[t+1],b=a[t+n],l=a[t+n+1],g=a[t+c],y=a[t+c+1],w=a[t+s],k=a[t+s+1],d=i+g,u=h+y,m=i-g,p=h-y,v=b+w,A=l+k,E=f*(b-w),F=f*(l-k),R=d+v,I=u+A,L=m+F,z=p-E,Y=d-v,W=u-A,j=m-F,M=p+E;o[e]=R,o[e+1]=I,o[e+2]=L,o[e+3]=z,o[e+4]=Y,o[e+5]=W,o[e+6]=j,o[e+7]=M};O.prototype._realTransform4=function(){var e=this._out,t=this._csize,n=this._width,o=1<<n,a=t/o<<1,f,c,s=this._bitrev;if(a===4)for(f=0,c=0;f<t;f+=a,c++){let At=s[c];this._singleRealTransform2(f,At>>>1,o>>>1)}else for(f=0,c=0;f<t;f+=a,c++){let At=s[c];this._singleRealTransform4(f,At>>>1,o>>>1)}var i=this._inv?-1:1,h=this.table;for(o>>=2;o>=2;o>>=2){a=t/o<<1;var b=a>>>1,l=b>>>1,g=l>>>1;for(f=0;f<t;f+=a)for(var y=0,w=0;y<=g;y+=2,w+=o){var k=f+y,d=k+l,u=d+l,m=u+l,p=e[k],v=e[k+1],A=e[d],E=e[d+1],F=e[u],R=e[u+1],I=e[m],L=e[m+1],z=p,Y=v,W=h[w],j=i*h[w+1],M=A*W-E*j,D=A*j+E*W,Q=h[2*w],K=i*h[2*w+1],Z=F*Q-R*K,ae=F*K+R*Q,G=h[3*w],X=i*h[3*w+1],Ie=I*G-L*X,Re=I*X+L*G,ge=z+Z,ve=Y+ae,Oe=z-Z,Le=Y-ae,ye=M+Ie,we=D+Re,je=i*(M-Ie),ot=i*(D-Re),gt=ge+ye,vt=ve+we,yt=Oe+ot,wt=Le-je;if(e[k]=gt,e[k+1]=vt,e[d]=yt,e[d+1]=wt,y===0){var kt=ge-ye,_t=ve-we;e[u]=kt,e[u+1]=_t;continue}if(y!==g){var xt=Oe,nn=-Le,rn=ge,an=-ve,fn=-i*ot,cn=-i*je,sn=-i*we,ln=-i*ye,bn=xt+fn,dn=nn+cn,hn=rn+ln,un=an-sn,eo=f+l-y,to=f+b-y;e[eo]=bn,e[eo+1]=dn,e[to]=hn,e[to+1]=un}}}};O.prototype._singleRealTransform2=function(e,t,n){let o=this._out,a=this._data,f=a[t],c=a[t+n],s=f+c,i=f-c;o[e]=s,o[e+1]=0,o[e+2]=i,o[e+3]=0};O.prototype._singleRealTransform4=function(e,t,n){let o=this._out,a=this._data,f=this._inv?-1:1,c=n*2,s=n*3,i=a[t],h=a[t+n],b=a[t+c],l=a[t+s],g=i+b,y=i-b,w=h+l,k=f*(h-l),d=g+w,u=y,m=-k,p=g-w,v=y,A=k;o[e]=d,o[e+1]=0,o[e+2]=u,o[e+3]=m,o[e+4]=p,o[e+5]=0,o[e+6]=v,o[e+7]=A}});var Fo=ee(We=>{"use strict";var ft=We&&We.__assign||function(){return ft=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++){e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o])}return r},ft.apply(this,arguments)};Object.defineProperty(We,"__esModule",{value:!0});var Cn={threshold:.1,sampleRate:44100,probabilityThreshold:.1};function Pn(r){r===void 0&&(r={});var e=ft(ft({},Cn),r),t=e.threshold,n=e.sampleRate,o=e.probabilityThreshold;return function(f){var c;for(c=1;c<f.length;c*=2);c/=2;for(var s=c/2,i=new Float32Array(s),h=0,b,l=0;l<s;l++)i[l]=0;for(var l=1;l<s;l++)for(var g=0;g<s;g++){var y=f[g]-f[g+l];i[l]+=y*y}i[0]=1,i[1]=1;for(var w=0,l=1;l<s;l++)w+=i[l],i[l]*=l/w;for(b=2;b<s;b++)if(i[b]<t){for(;b+1<s&&i[b+1]<i[b];)b++;h=1-i[b];break}if(b===s||i[b]>=t||h<o)return null;var k,d,u;if(b<1?d=b:d=b-1,b+1<s?u=b+1:u=b,d===b)i[b]<=i[u]?k=b:k=u;else if(u===b)i[b]<=i[d]?k=b:k=d;else{var m=i[d],p=i[b],v=i[u];k=b+(v-m)/(2*(2*p-v-m))}return n/k}}We.YIN=Pn});var To=ee(Ke=>{"use strict";var ct=Ke&&Ke.__assign||function(){return ct=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++){e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o])}return r},ct.apply(this,arguments)};Object.defineProperty(Ke,"__esModule",{value:!0});var Fn={sampleRate:44100,minFrequency:82,maxFrequency:1e3,ratio:5,sensitivity:.1};function Tn(r){r===void 0&&(r={});var e=ct(ct({},Fn),r),t=e.sampleRate,n=e.minFrequency,o=e.maxFrequency,a=e.sensitivity,f=e.ratio,c=[],s=Math.ceil(t/n),i=Math.floor(t/o);return function(b){var l=b.length,g=0,y=1/0,w=-1/0,k,d,u,m,p,v,A,E;for(m=0;m<l;m++)if(i<=m&&m<=s){for(A=0,E=m,g=0,k=[],d=[];A<l-m;g++,E++,A++)k[g]=b[A],d[g]=b[E];var F=k.length;for(u=[],v=0;v<F;v++)u[v]=k[v]-d[v];var R=0;for(v=0;v<F;v++)R+=Math.abs(u[v]);c[m]=R}for(p=i;p<s;p++)c[p]<y&&(y=c[p]),c[p]>w&&(w=c[p]);var I=Math.round(a*(w-y)+y);for(p=i;p<=s&&c[p]>I;p++);var L=i/2;y=c[p];var z=p;for(m=p-1;m<p+L&&m<=s;m++)c[m]<y&&(y=c[m],z=m);return Math.round(c[z]*f)<w?t/z:null}}Ke.AMDF=Tn});var No=ee(Ze=>{"use strict";var it=Ze&&Ze.__assign||function(){return it=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++){e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o])}return r},it.apply(this,arguments)};Object.defineProperty(Ze,"__esModule",{value:!0});var zo={sampleRate:44100};function zn(r){r===void 0&&(r=zo);var e=it(it({},zo),r),t=e.sampleRate;return function(o){var a=o.length,f=0,c,s,i,h;for(c=0;c<a;c++)h=o[c],f+=h*h;if(f=Math.sqrt(f/a),f<.01)return-1;var b=0,l=a-1,g=.2;for(c=0;c<a/2;c++)if(Math.abs(o[c])<g){b=c;break}for(c=1;c<a/2;c++)if(Math.abs(o[a-c])<g){l=a-c;break}var y=o.slice(b,l),w=y.length,k=new Array(w).fill(0);for(c=0;c<w;c++)for(s=0;s<w-c;s++)k[c]=k[c]+y[s]*y[s+c];for(i=0;k[i]>k[i+1];)i++;var d=-1,u=-1;for(c=i;c<w;c++)k[c]>d&&(d=k[c],u=c);var m=u,p=k[m-1],v=k[m],A=k[m+1],E=(p+A-2*v)/2,F=(A-p)/2;return E&&(m=m-F/(2*E)),t/m}}Ze.ACF2PLUS=zn});var Io=ee(Je=>{"use strict";var st=Je&&Je.__assign||function(){return st=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++){e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o])}return r},st.apply(this,arguments)};Object.defineProperty(Je,"__esModule",{value:!0});var Nn=6,In=3e3,Rn=3,On=.75,Ln={sampleRate:44100};function jn(r){r===void 0&&(r={});var e=st(st({},Ln),r),t=e.sampleRate;return function(o){for(var a=[],f=[],c=o.length,s=null,i=0,h=0,b=0,l=0;l<c;l++){var g=o[l];i=i+g,b=Math.max(b,g),h=Math.min(h,g)}i/=c,h-=i,b-=i;for(var y=b>-1*h?b:-1*h,w=y*On,k=0,d=-1,u=o.length,m,p,v;m=~~(t/(Math.pow(2,k)*In)),!(u<2);){var A=void 0,E=-1e3,F=-1e6,R=-1e6,I=!1,L=!1;v=0,p=0;for(var l=2;l<u;l++){var z=o[l]-i,Y=o[l-1]-i;Y<=0&&z>0&&(I=!0),Y>=0&&z<0&&(L=!0),A=z-Y,E>-1e3&&(L&&E<0&&A>=0&&Math.abs(z)>=w&&l>F+m&&(a[v++]=l,F=l,L=!1),I&&E>0&&A<=0&&Math.abs(z)>=w&&l>R+m&&(f[p++]=l,R=l,I=!1)),E=A}if(v===0&&p===0)break;for(var W=void 0,j=[],l=0;l<u;l++)j[l]=0;for(var l=0;l<v;l++)for(var M=1;M<Rn;M++)l+M<v&&(W=Math.abs(a[l]-a[l+M]),j[W]+=1);for(var D=-1,Q=-1,l=0;l<u;l++){for(var K=0,M=-1*m;M<=m;M++)l+M>=0&&l+M<u&&(K+=j[l+M]);K===Q?l===2*D&&(D=l):K>Q&&(Q=K,D=l)}for(var Z=0,ae=0,M=-m;M<=m;M++)if(D+M>=0&&D+M<c){var G=j[D+M];G>0&&(ae+=G,Z+=(D+M)*G)}if(Z/=ae,d>-1&&Math.abs(Z*2-d)<=2*m){s=t/(Math.pow(2,k-1)*d);break}if(d=Z,k++,k>=Nn||u<2)break;var X=o.subarray(0);u===j.length&&(X=new Float32Array(u/2));for(var l=0;l<u/2;l++)X[l]=(o[2*l]+o[2*l+1])/2;o=X,u/=2}return s}}Je.DynamicWavelet=jn});var Ro=ee(Qe=>{"use strict";var lt=Qe&&Qe.__assign||function(){return lt=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++){e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o])}return r},lt.apply(this,arguments)};Object.defineProperty(Qe,"__esModule",{value:!0});var Dn={bufferSize:1024,cutoff:.97,sampleRate:44100};function Un(r){r===void 0&&(r={});var e=lt(lt({},Dn),r),t=e.bufferSize,n=e.cutoff,o=e.sampleRate,a=.5,f=80,c=new Float32Array(t),s=new Float32Array(t),i,h,b=[],l=[],g=[];function y(d){var u,m;s[0]=d[0]*d[0];for(var p=1;p<d.length;p+=1)s[p]=d[p]*d[p]+s[p-1];for(var v=0;v<d.length;v++){u=0,m=s[d.length-1-v]+s[d.length-1]-s[v];for(var p=0;p<d.length-v;p++)u+=d[p]*d[p+v];c[v]=2*u/m}}function w(d){var u=c[d-1],m=c[d],p=c[d+1],v=d,A=p+u-2*m;if(A===0)i=v,h=m;else{var E=u-p;i=v+E/(2*A),h=m-E*E/(8*A)}}function k(){for(var d=0,u=0;d<(c.length-1)/3&&c[d]>0;)d++;for(;d<c.length-1&&c[d]<=0;)d++;for(d==0&&(d=1);d<c.length-1;)if(c[d]>c[d-1]&&c[d]>=c[d+1]&&(u==0||c[d]>c[u])&&(u=d),d++,d<c.length-1&&c[d]<=0)for(u>0&&(b.push(u),u=0);d<c.length-1&&c[d]<=0;)d++;u>0&&b.push(u)}return function(u){var m;b=[],l=[],g=[],y(u),k();for(var p=-1/0,v=0;v<b.length;v++){var A=b[v];p=Math.max(p,c[A]),c[A]>a&&(w(A),g.push(h),l.push(i),p=Math.max(p,h))}if(l.length){for(var E=n*p,F=0,v=0;v<g.length;v++)if(g[v]>=E){F=v;break}var R=l[F],I=o/R;I>f?m=I:m=-1}else m=-1;return{probability:p,freq:m}}}Qe.Macleod=Un});var Oo=ee(ue=>{"use strict";var bt=ue&&ue.__assign||function(){return bt=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++){e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o])}return r},bt.apply(this,arguments)};Object.defineProperty(ue,"__esModule",{value:!0});ue.DEFAULT_FREQUENCIES_PARAMS={tempo:120,quantization:4,sampleRate:44100};function Hn(r,e){var t=r.map(function(i){return i(e)}).filter(function(i){return i!==null}).sort(function(i,h){return i-h});if(t.length===1)return t[0];if(t.length===2){var n=t[0],o=t[1];return n*2>o?Math.sqrt(n*o):n}else{var n=t[0],o=t[1],a=t[t.length-2],f=t[t.length-1],c=n*2>o?t:t.slice(1),s=a*2>f?c:c.slice(0,-1);return Math.pow(s.reduce(function(b,l){return b*l},1),1/s.length)}}function Yn(r,e,t){t===void 0&&(t={});var n=bt(bt({},ue.DEFAULT_FREQUENCIES_PARAMS),t),o=n.tempo,a=n.quantization,f=n.sampleRate,c=e.length,s=Math.round(f*60/(a*o)),i;Array.isArray(r)?i=Hn.bind(null,r):i=r;for(var h=[],b=0,l=c-s;b<=l;b+=s){var g=e.slice(b,b+s),y=i(g);h.push(y)}return h}ue.frequencies=Yn});var Bo=ee(oe=>{"use strict";Object.defineProperty(oe,"__esModule",{value:!0});var Lo=Fo();oe.YIN=Lo.YIN;var jo=To();oe.AMDF=jo.AMDF;var Do=No();oe.ACF2PLUS=Do.ACF2PLUS;var Uo=Io();oe.DynamicWavelet=Uo.DynamicWavelet;var Ho=Ro();oe.Macleod=Ho.Macleod;var Yo=Oo();oe.frequencies=Yo.frequencies;oe.default={YIN:Lo.YIN,AMDF:jo.AMDF,ACF2PLUS:Do.ACF2PLUS,DynamicWavelet:Uo.DynamicWavelet,Macleod:Ho.Macleod,frequencies:Yo.frequencies}});var en=ee((bf,Xo)=>{var Xn=4,er=.001,tr=1e-7,or=10,et=11,mt=1/(et-1),nr=typeof Float32Array=="function";function Zo(r,e){return 1-3*e+3*r}function Jo(r,e){return 3*e-6*r}function Qo(r){return 3*r}function pt(r,e,t){return((Zo(e,t)*r+Jo(e,t))*r+Qo(e))*r}function Go(r,e,t){return 3*Zo(e,t)*r*r+2*Jo(e,t)*r+Qo(e)}function rr(r,e,t,n,o){var a,f,c=0;do f=e+(t-e)/2,a=pt(f,n,o)-r,a>0?t=f:e=f;while(Math.abs(a)>tr&&++c<or);return f}function ar(r,e,t,n){for(var o=0;o<Xn;++o){var a=Go(e,t,n);if(a===0)return e;var f=pt(e,t,n)-r;e-=f/a}return e}function fr(r){return r}Xo.exports=function(e,t,n,o){if(!(0<=e&&e<=1&&0<=n&&n<=1))throw new Error("bezier x values must be in [0, 1] range");if(e===t&&n===o)return fr;for(var a=nr?new Float32Array(et):new Array(et),f=0;f<et;++f)a[f]=pt(f*mt,e,n);function c(s){for(var i=0,h=1,b=et-1;h!==b&&a[h]<=s;++h)i+=mt;--h;var l=(s-a[h])/(a[h+1]-a[h]),g=i+l*mt,y=Go(g,e,n);return y>=er?ar(s,g,e,n):y===0?g:rr(s,i,i+mt,e,n)}return function(i){return i===0?0:i===1?1:pt(c(i),t,o)}}});var Nt={};B(Nt,{AppBodyComponent:()=>Me});var P=r=>e=>typeof e=="function"?((t,n)=>(window.customElements.define(t,n),n))(r,e):((t,n)=>{let{kind:o,elements:a}=n;return{kind:o,elements:a,finisher(f){window.customElements.define(t,f)}}})(r,e);var wn=(r,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,r)}};function C(r){return(e,t)=>t!==void 0?((n,o,a)=>{o.constructor.createProperty(a,n)})(r,e,t):wn(r,e)}function te(r){return C({...r,state:!0})}var ke=({finisher:r,descriptor:e})=>(t,n)=>{var o;if(n===void 0){let a=(o=t.originalKey)!==null&&o!==void 0?o:t.key,f=e!=null?{kind:"method",placement:"prototype",key:a,descriptor:e(t.key)}:{...t,key:a};return r!=null&&(f.finisher=function(c){r(c,a)}),f}{let a=t.constructor;e!==void 0&&Object.defineProperty(t,n,e(n)),r==null||r(a,n)}};function ao(r,e){return ke({descriptor:t=>{let n={get(){var o,a;return(a=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(r))!==null&&a!==void 0?a:null},enumerable:!0,configurable:!0};if(e){let o=typeof t=="symbol"?Symbol():"__"+t;n.get=function(){var a,f;return this[o]===void 0&&(this[o]=(f=(a=this.renderRoot)===null||a===void 0?void 0:a.querySelector(r))!==null&&f!==void 0?f:null),this[o]}}return n}})}var nt=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Et=Symbol(),fo=new Map,rt=class{constructor(e,t){if(this._$cssResult$=!0,t!==Et)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=fo.get(this.cssText);return nt&&e===void 0&&(fo.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}},_e=r=>new rt(typeof r=="string"?r:r+"",Et),T=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((n,o,a)=>n+(f=>{if(f._$cssResult$===!0)return f.cssText;if(typeof f=="number")return f;throw Error("Value passed to 'css' function must be a 'css' function result: "+f+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[a+1],r[0]);return new rt(t,Et)},qt=(r,e)=>{nt?r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let n=document.createElement("style"),o=window.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,r.appendChild(n)})},at=nt?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return _e(t)})(r):r;var Mt,co=window.trustedTypes,kn=co?co.emptyScript:"",io=window.reactiveElementPolyfillSupport,Ct={toAttribute(r,e){switch(e){case Boolean:r=r?kn:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},so=(r,e)=>e!==r&&(e==e||r==r),Pt={attribute:!0,type:String,converter:Ct,reflect:!1,hasChanged:so},fe=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;(t=this.l)!==null&&t!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,n)=>{let o=this._$Eh(n,t);o!==void 0&&(this._$Eu.set(o,n),e.push(o))}),e}static createProperty(e,t=Pt){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let n=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,n,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(o){let a=this[e];this[t]=o,this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Pt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){let t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let o of n)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let o of n)t.unshift(at(o))}else e!==void 0&&t.push(at(e));return t}static _$Eh(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$Eg)!==null&&t!==void 0?t:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$Eg)===null||t===void 0||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return qt(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ES(e,t,n=Pt){var o,a;let f=this.constructor._$Eh(e,n);if(f!==void 0&&n.reflect===!0){let c=((a=(o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==null&&a!==void 0?a:Ct.toAttribute)(t,n.type);this._$Ei=e,c==null?this.removeAttribute(f):this.setAttribute(f,c),this._$Ei=null}}_$AK(e,t){var n,o,a;let f=this.constructor,c=f._$Eu.get(e);if(c!==void 0&&this._$Ei!==c){let s=f.getPropertyOptions(c),i=s.converter,h=(a=(o=(n=i)===null||n===void 0?void 0:n.fromAttribute)!==null&&o!==void 0?o:typeof i=="function"?i:null)!==null&&a!==void 0?a:Ct.fromAttribute;this._$Ei=c,this[c]=h(t,s.type),this._$Ei=null}}requestUpdate(e,t,n){let o=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||so)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$Ei!==e&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(e,n))):o=!1),!this.isUpdatePending&&o&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((o,a)=>this[a]=o),this._$Et=void 0);let t=!1,n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$Eg)===null||e===void 0||e.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(n)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$Eg)===null||t===void 0||t.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$E_!==void 0&&(this._$E_.forEach((t,n)=>this._$ES(n,this[n],t)),this._$E_=void 0),this._$EU()}updated(e){}firstUpdated(e){}};fe.finalized=!0,fe.elementProperties=new Map,fe.elementStyles=[],fe.shadowRootOptions={mode:"open"},io==null||io({ReactiveElement:fe}),((Mt=globalThis.reactiveElementVersions)!==null&&Mt!==void 0?Mt:globalThis.reactiveElementVersions=[]).push("1.0.2");var Ft,xe=globalThis.trustedTypes,lo=xe?xe.createPolicy("lit-html",{createHTML:r=>r}):void 0,ce=`lit$${(Math.random()+"").slice(9)}$`,bo="?"+ce,_n=`<${bo}>`,Ae=document,Ue=(r="")=>Ae.createComment(r),He=r=>r===null||typeof r!="object"&&typeof r!="function",ho=Array.isArray,xn=r=>{var e;return ho(r)||typeof((e=r)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},Ye=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,uo=/-->/g,mo=/>/g,be=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,po=/'/g,go=/"/g,vo=/^(?:script|style|textarea)$/i,yo=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),S=yo(1),Lr=yo(2),de=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),wo=new WeakMap,ko=(r,e,t)=>{var n,o;let a=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e,f=a._$litPart$;if(f===void 0){let c=(o=t==null?void 0:t.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=f=new qe(e.insertBefore(Ue(),c),c,void 0,t??{})}return f._$AI(r),f},Se=Ae.createTreeWalker(Ae,129,null,!1),An=(r,e)=>{let t=r.length-1,n=[],o,a=e===2?"<svg>":"",f=Ye;for(let s=0;s<t;s++){let i=r[s],h,b,l=-1,g=0;for(;g<i.length&&(f.lastIndex=g,b=f.exec(i),b!==null);)g=f.lastIndex,f===Ye?b[1]==="!--"?f=uo:b[1]!==void 0?f=mo:b[2]!==void 0?(vo.test(b[2])&&(o=RegExp("</"+b[2],"g")),f=be):b[3]!==void 0&&(f=be):f===be?b[0]===">"?(f=o??Ye,l=-1):b[1]===void 0?l=-2:(l=f.lastIndex-b[2].length,h=b[1],f=b[3]===void 0?be:b[3]==='"'?go:po):f===go||f===po?f=be:f===uo||f===mo?f=Ye:(f=be,o=void 0);let y=f===be&&r[s+1].startsWith("/>")?" ":"";a+=f===Ye?i+_n:l>=0?(n.push(h),i.slice(0,l)+"$lit$"+i.slice(l)+ce+y):i+ce+(l===-2?(n.push(void 0),s):y)}let c=a+(r[t]||"<?>")+(e===2?"</svg>":"");return[lo!==void 0?lo.createHTML(c):c,n]},$e=class{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let a=0,f=0,c=e.length-1,s=this.parts,[i,h]=An(e,t);if(this.el=$e.createElement(i,n),Se.currentNode=this.el.content,t===2){let b=this.el.content,l=b.firstChild;l.remove(),b.append(...l.childNodes)}for(;(o=Se.nextNode())!==null&&s.length<c;){if(o.nodeType===1){if(o.hasAttributes()){let b=[];for(let l of o.getAttributeNames())if(l.endsWith("$lit$")||l.startsWith(ce)){let g=h[f++];if(b.push(l),g!==void 0){let y=o.getAttribute(g.toLowerCase()+"$lit$").split(ce),w=/([.?@])?(.*)/.exec(g);s.push({type:1,index:a,name:w[2],strings:y,ctor:w[1]==="."?xo:w[1]==="?"?Ao:w[1]==="@"?So:Be})}else s.push({type:6,index:a})}for(let l of b)o.removeAttribute(l)}if(vo.test(o.tagName)){let b=o.textContent.split(ce),l=b.length-1;if(l>0){o.textContent=xe?xe.emptyScript:"";for(let g=0;g<l;g++)o.append(b[g],Ue()),Se.nextNode(),s.push({type:2,index:++a});o.append(b[l],Ue())}}}else if(o.nodeType===8)if(o.data===bo)s.push({type:2,index:a});else{let b=-1;for(;(b=o.data.indexOf(ce,b+1))!==-1;)s.push({type:7,index:a}),b+=ce.length-1}a++}}static createElement(e,t){let n=Ae.createElement("template");return n.innerHTML=e,n}};function Ee(r,e,t=r,n){var o,a,f,c;if(e===de)return e;let s=n!==void 0?(o=t._$Cl)===null||o===void 0?void 0:o[n]:t._$Cu,i=He(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==i&&((a=s==null?void 0:s._$AO)===null||a===void 0||a.call(s,!1),i===void 0?s=void 0:(s=new i(r),s._$AT(r,t,n)),n!==void 0?((f=(c=t)._$Cl)!==null&&f!==void 0?f:c._$Cl=[])[n]=s:t._$Cu=s),s!==void 0&&(e=Ee(r,s._$AS(r,e.values),s,n)),e}var _o=class{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;let{el:{content:n},parts:o}=this._$AD,a=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Ae).importNode(n,!0);Se.currentNode=a;let f=Se.nextNode(),c=0,s=0,i=o[0];for(;i!==void 0;){if(c===i.index){let h;i.type===2?h=new qe(f,f.nextSibling,this,e):i.type===1?h=new i.ctor(f,i.name,i.strings,this,e):i.type===6&&(h=new $o(f,this,e)),this.v.push(h),i=o[++s]}c!==(i==null?void 0:i.index)&&(f=Se.nextNode(),c++)}return a}m(e){let t=0;for(let n of this.v)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},qe=class{constructor(e,t,n,o){var a;this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cg=(a=o==null?void 0:o.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ee(this,e,t),He(e)?e===q||e==null||e===""?(this._$AH!==q&&this._$AR(),this._$AH=q):e!==this._$AH&&e!==de&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.S(e):xn(e)?this.M(e):this.$(e)}A(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}S(e){this._$AH!==e&&(this._$AR(),this._$AH=this.A(e))}$(e){this._$AH!==q&&He(this._$AH)?this._$AA.nextSibling.data=e:this.S(Ae.createTextNode(e)),this._$AH=e}T(e){var t;let{values:n,_$litType$:o}=e,a=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=$e.createElement(o.h,this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.m(n);else{let f=new _o(a,this),c=f.p(this.options);f.m(n),this.S(c),this._$AH=f}}_$AC(e){let t=wo.get(e.strings);return t===void 0&&wo.set(e.strings,t=new $e(e)),t}M(e){ho(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,o=0;for(let a of e)o===t.length?t.push(n=new qe(this.A(Ue()),this.A(Ue()),this,this.options)):n=t[o],n._$AI(a),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){let o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Be=class{constructor(e,t,n,o,a){this.type=1,this._$AH=q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=q}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,o){let a=this.strings,f=!1;if(a===void 0)e=Ee(this,e,t,0),f=!He(e)||e!==this._$AH&&e!==de,f&&(this._$AH=e);else{let c=e,s,i;for(e=a[0],s=0;s<a.length-1;s++)i=Ee(this,c[n+s],t,s),i===de&&(i=this._$AH[s]),f||(f=!He(i)||i!==this._$AH[s]),i===q?e=q:e!==q&&(e+=(i??"")+a[s+1]),this._$AH[s]=i}f&&!o&&this.k(e)}k(e){e===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},xo=class extends Be{constructor(){super(...arguments),this.type=3}k(e){this.element[this.name]=e===q?void 0:e}},Sn=xe?xe.emptyScript:"",Ao=class extends Be{constructor(){super(...arguments),this.type=4}k(e){e&&e!==q?this.element.setAttribute(this.name,Sn):this.element.removeAttribute(this.name)}},So=class extends Be{constructor(e,t,n,o,a){super(e,t,n,o,a),this.type=5}_$AI(e,t=this){var n;if((e=(n=Ee(this,e,t,0))!==null&&n!==void 0?n:q)===de)return;let o=this._$AH,a=e===q&&o!==q||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,f=e!==q&&(o===q||a);a&&this.element.removeEventListener(this.name,this,o),f&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}},$o=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ee(this,e)}};var Eo=window.litHtmlPolyfillSupport;Eo==null||Eo($e,qe),((Ft=globalThis.litHtmlVersions)!==null&&Ft!==void 0?Ft:globalThis.litHtmlVersions=[]).push("2.0.2");var Tt,zt;var $=class extends fe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;let n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=ko(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Dt)===null||e===void 0||e.setConnected(!1)}render(){return de}};$.finalized=!0,$._$litElement$=!0,(Tt=globalThis.litElementHydrateSupport)===null||Tt===void 0||Tt.call(globalThis,{LitElement:$});var qo=globalThis.litElementPolyfillSupport;qo==null||qo({LitElement:$});((zt=globalThis.litElementVersions)!==null&&zt!==void 0?zt:globalThis.litElementVersions=[]).push("3.0.2");console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");var U=T`
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

  .fa-0::before {
    content: "\\30";
  }

  .fa-1::before {
    content: "\\31";
  }

  .fa-2::before {
    content: "\\32";
  }

  .fa-3::before {
    content: "\\33";
  }

  .fa-4::before {
    content: "\\34";
  }

  .fa-5::before {
    content: "\\35";
  }

  .fa-6::before {
    content: "\\36";
  }

  .fa-7::before {
    content: "\\37";
  }

  .fa-8::before {
    content: "\\38";
  }

  .fa-9::before {
    content: "\\39";
  }

  .fa-fill-drip::before {
    content: "\\f576";
  }

  .fa-arrows-to-circle::before {
    content: "\\e4bd";
  }

  .fa-circle-chevron-right::before {
    content: "\\f138";
  }

  .fa-chevron-circle-right::before {
    content: "\\f138";
  }

  .fa-at::before {
    content: "\\40";
  }

  .fa-trash-can::before {
    content: "\\f2ed";
  }

  .fa-trash-alt::before {
    content: "\\f2ed";
  }

  .fa-text-height::before {
    content: "\\f034";
  }

  .fa-user-xmark::before {
    content: "\\f235";
  }

  .fa-user-times::before {
    content: "\\f235";
  }

  .fa-stethoscope::before {
    content: "\\f0f1";
  }

  .fa-message::before {
    content: "\\f27a";
  }

  .fa-comment-alt::before {
    content: "\\f27a";
  }

  .fa-info::before {
    content: "\\f129";
  }

  .fa-down-left-and-up-right-to-center::before {
    content: "\\f422";
  }

  .fa-compress-alt::before {
    content: "\\f422";
  }

  .fa-explosion::before {
    content: "\\e4e9";
  }

  .fa-file-lines::before {
    content: "\\f15c";
  }

  .fa-file-alt::before {
    content: "\\f15c";
  }

  .fa-file-text::before {
    content: "\\f15c";
  }

  .fa-wave-square::before {
    content: "\\f83e";
  }

  .fa-ring::before {
    content: "\\f70b";
  }

  .fa-building-un::before {
    content: "\\e4d9";
  }

  .fa-dice-three::before {
    content: "\\f527";
  }

  .fa-calendar-days::before {
    content: "\\f073";
  }

  .fa-calendar-alt::before {
    content: "\\f073";
  }

  .fa-anchor-circle-check::before {
    content: "\\e4aa";
  }

  .fa-building-circle-arrow-right::before {
    content: "\\e4d1";
  }

  .fa-volleyball::before {
    content: "\\f45f";
  }

  .fa-volleyball-ball::before {
    content: "\\f45f";
  }

  .fa-arrows-up-to-line::before {
    content: "\\e4c2";
  }

  .fa-sort-down::before {
    content: "\\f0dd";
  }

  .fa-sort-desc::before {
    content: "\\f0dd";
  }

  .fa-circle-minus::before {
    content: "\\f056";
  }

  .fa-minus-circle::before {
    content: "\\f056";
  }

  .fa-door-open::before {
    content: "\\f52b";
  }

  .fa-right-from-bracket::before {
    content: "\\f2f5";
  }

  .fa-sign-out-alt::before {
    content: "\\f2f5";
  }

  .fa-atom::before {
    content: "\\f5d2";
  }

  .fa-soap::before {
    content: "\\e06e";
  }

  .fa-icons::before {
    content: "\\f86d";
  }

  .fa-heart-music-camera-bolt::before {
    content: "\\f86d";
  }

  .fa-microphone-lines-slash::before {
    content: "\\f539";
  }

  .fa-microphone-alt-slash::before {
    content: "\\f539";
  }

  .fa-bridge-circle-check::before {
    content: "\\e4c9";
  }

  .fa-pump-medical::before {
    content: "\\e06a";
  }

  .fa-fingerprint::before {
    content: "\\f577";
  }

  .fa-hand-point-right::before {
    content: "\\f0a4";
  }

  .fa-magnifying-glass-location::before {
    content: "\\f689";
  }

  .fa-search-location::before {
    content: "\\f689";
  }

  .fa-forward-step::before {
    content: "\\f051";
  }

  .fa-step-forward::before {
    content: "\\f051";
  }

  .fa-face-smile-beam::before {
    content: "\\f5b8";
  }

  .fa-smile-beam::before {
    content: "\\f5b8";
  }

  .fa-flag-checkered::before {
    content: "\\f11e";
  }

  .fa-football::before {
    content: "\\f44e";
  }

  .fa-football-ball::before {
    content: "\\f44e";
  }

  .fa-school-circle-exclamation::before {
    content: "\\e56c";
  }

  .fa-crop::before {
    content: "\\f125";
  }

  .fa-angles-down::before {
    content: "\\f103";
  }

  .fa-angle-double-down::before {
    content: "\\f103";
  }

  .fa-users-rectangle::before {
    content: "\\e594";
  }

  .fa-people-roof::before {
    content: "\\e537";
  }

  .fa-people-line::before {
    content: "\\e534";
  }

  .fa-beer-mug-empty::before {
    content: "\\f0fc";
  }

  .fa-beer::before {
    content: "\\f0fc";
  }

  .fa-diagram-predecessor::before {
    content: "\\e477";
  }

  .fa-arrow-up-long::before {
    content: "\\f176";
  }

  .fa-long-arrow-up::before {
    content: "\\f176";
  }

  .fa-fire-flame-simple::before {
    content: "\\f46a";
  }

  .fa-burn::before {
    content: "\\f46a";
  }

  .fa-person::before {
    content: "\\f183";
  }

  .fa-male::before {
    content: "\\f183";
  }

  .fa-laptop::before {
    content: "\\f109";
  }

  .fa-file-csv::before {
    content: "\\f6dd";
  }

  .fa-menorah::before {
    content: "\\f676";
  }

  .fa-truck-plane::before {
    content: "\\e58f";
  }

  .fa-record-vinyl::before {
    content: "\\f8d9";
  }

  .fa-face-grin-stars::before {
    content: "\\f587";
  }

  .fa-grin-stars::before {
    content: "\\f587";
  }

  .fa-bong::before {
    content: "\\f55c";
  }

  .fa-spaghetti-monster-flying::before {
    content: "\\f67b";
  }

  .fa-pastafarianism::before {
    content: "\\f67b";
  }

  .fa-arrow-down-up-across-line::before {
    content: "\\e4af";
  }

  .fa-spoon::before {
    content: "\\f2e5";
  }

  .fa-utensil-spoon::before {
    content: "\\f2e5";
  }

  .fa-jar-wheat::before {
    content: "\\e517";
  }

  .fa-envelopes-bulk::before {
    content: "\\f674";
  }

  .fa-mail-bulk::before {
    content: "\\f674";
  }

  .fa-file-circle-exclamation::before {
    content: "\\e4eb";
  }

  .fa-circle-h::before {
    content: "\\f47e";
  }

  .fa-hospital-symbol::before {
    content: "\\f47e";
  }

  .fa-pager::before {
    content: "\\f815";
  }

  .fa-address-book::before {
    content: "\\f2b9";
  }

  .fa-contact-book::before {
    content: "\\f2b9";
  }

  .fa-strikethrough::before {
    content: "\\f0cc";
  }

  .fa-k::before {
    content: "\\4b";
  }

  .fa-landmark-flag::before {
    content: "\\e51c";
  }

  .fa-pencil::before {
    content: "\\f303";
  }

  .fa-pencil-alt::before {
    content: "\\f303";
  }

  .fa-backward::before {
    content: "\\f04a";
  }

  .fa-caret-right::before {
    content: "\\f0da";
  }

  .fa-comments::before {
    content: "\\f086";
  }

  .fa-paste::before {
    content: "\\f0ea";
  }

  .fa-file-clipboard::before {
    content: "\\f0ea";
  }

  .fa-code-pull-request::before {
    content: "\\e13c";
  }

  .fa-clipboard-list::before {
    content: "\\f46d";
  }

  .fa-truck-ramp-box::before {
    content: "\\f4de";
  }

  .fa-truck-loading::before {
    content: "\\f4de";
  }

  .fa-user-check::before {
    content: "\\f4fc";
  }

  .fa-vial-virus::before {
    content: "\\e597";
  }

  .fa-sheet-plastic::before {
    content: "\\e571";
  }

  .fa-blog::before {
    content: "\\f781";
  }

  .fa-user-ninja::before {
    content: "\\f504";
  }

  .fa-person-arrow-up-from-line::before {
    content: "\\e539";
  }

  .fa-scroll-torah::before {
    content: "\\f6a0";
  }

  .fa-torah::before {
    content: "\\f6a0";
  }

  .fa-broom-ball::before {
    content: "\\f458";
  }

  .fa-quidditch::before {
    content: "\\f458";
  }

  .fa-quidditch-broom-ball::before {
    content: "\\f458";
  }

  .fa-toggle-off::before {
    content: "\\f204";
  }

  .fa-box-archive::before {
    content: "\\f187";
  }

  .fa-archive::before {
    content: "\\f187";
  }

  .fa-person-drowning::before {
    content: "\\e545";
  }

  .fa-arrow-down-9-1::before {
    content: "\\f886";
  }

  .fa-sort-numeric-desc::before {
    content: "\\f886";
  }

  .fa-sort-numeric-down-alt::before {
    content: "\\f886";
  }

  .fa-face-grin-tongue-squint::before {
    content: "\\f58a";
  }

  .fa-grin-tongue-squint::before {
    content: "\\f58a";
  }

  .fa-spray-can::before {
    content: "\\f5bd";
  }

  .fa-truck-monster::before {
    content: "\\f63b";
  }

  .fa-w::before {
    content: "\\57";
  }

  .fa-earth-africa::before {
    content: "\\f57c";
  }

  .fa-globe-africa::before {
    content: "\\f57c";
  }

  .fa-rainbow::before {
    content: "\\f75b";
  }

  .fa-circle-notch::before {
    content: "\\f1ce";
  }

  .fa-tablet-screen-button::before {
    content: "\\f3fa";
  }

  .fa-tablet-alt::before {
    content: "\\f3fa";
  }

  .fa-paw::before {
    content: "\\f1b0";
  }

  .fa-cloud::before {
    content: "\\f0c2";
  }

  .fa-trowel-bricks::before {
    content: "\\e58a";
  }

  .fa-face-flushed::before {
    content: "\\f579";
  }

  .fa-flushed::before {
    content: "\\f579";
  }

  .fa-hospital-user::before {
    content: "\\f80d";
  }

  .fa-tent-arrow-left-right::before {
    content: "\\e57f";
  }

  .fa-gavel::before {
    content: "\\f0e3";
  }

  .fa-legal::before {
    content: "\\f0e3";
  }

  .fa-binoculars::before {
    content: "\\f1e5";
  }

  .fa-microphone-slash::before {
    content: "\\f131";
  }

  .fa-box-tissue::before {
    content: "\\e05b";
  }

  .fa-motorcycle::before {
    content: "\\f21c";
  }

  .fa-bell-concierge::before {
    content: "\\f562";
  }

  .fa-concierge-bell::before {
    content: "\\f562";
  }

  .fa-pen-ruler::before {
    content: "\\f5ae";
  }

  .fa-pencil-ruler::before {
    content: "\\f5ae";
  }

  .fa-people-arrows::before {
    content: "\\e068";
  }

  .fa-people-arrows-left-right::before {
    content: "\\e068";
  }

  .fa-mars-and-venus-burst::before {
    content: "\\e523";
  }

  .fa-square-caret-right::before {
    content: "\\f152";
  }

  .fa-caret-square-right::before {
    content: "\\f152";
  }

  .fa-scissors::before {
    content: "\\f0c4";
  }

  .fa-cut::before {
    content: "\\f0c4";
  }

  .fa-sun-plant-wilt::before {
    content: "\\e57a";
  }

  .fa-toilets-portable::before {
    content: "\\e584";
  }

  .fa-hockey-puck::before {
    content: "\\f453";
  }

  .fa-table::before {
    content: "\\f0ce";
  }

  .fa-magnifying-glass-arrow-right::before {
    content: "\\e521";
  }

  .fa-tachograph-digital::before {
    content: "\\f566";
  }

  .fa-digital-tachograph::before {
    content: "\\f566";
  }

  .fa-users-slash::before {
    content: "\\e073";
  }

  .fa-clover::before {
    content: "\\e139";
  }

  .fa-reply::before {
    content: "\\f3e5";
  }

  .fa-mail-reply::before {
    content: "\\f3e5";
  }

  .fa-star-and-crescent::before {
    content: "\\f699";
  }

  .fa-house-fire::before {
    content: "\\e50c";
  }

  .fa-square-minus::before {
    content: "\\f146";
  }

  .fa-minus-square::before {
    content: "\\f146";
  }

  .fa-helicopter::before {
    content: "\\f533";
  }

  .fa-compass::before {
    content: "\\f14e";
  }

  .fa-square-caret-down::before {
    content: "\\f150";
  }

  .fa-caret-square-down::before {
    content: "\\f150";
  }

  .fa-file-circle-question::before {
    content: "\\e4ef";
  }

  .fa-laptop-code::before {
    content: "\\f5fc";
  }

  .fa-swatchbook::before {
    content: "\\f5c3";
  }

  .fa-prescription-bottle::before {
    content: "\\f485";
  }

  .fa-bars::before {
    content: "\\f0c9";
  }

  .fa-navicon::before {
    content: "\\f0c9";
  }

  .fa-people-group::before {
    content: "\\e533";
  }

  .fa-hourglass-end::before {
    content: "\\f253";
  }

  .fa-hourglass-3::before {
    content: "\\f253";
  }

  .fa-heart-crack::before {
    content: "\\f7a9";
  }

  .fa-heart-broken::before {
    content: "\\f7a9";
  }

  .fa-square-up-right::before {
    content: "\\f360";
  }

  .fa-external-link-square-alt::before {
    content: "\\f360";
  }

  .fa-face-kiss-beam::before {
    content: "\\f597";
  }

  .fa-kiss-beam::before {
    content: "\\f597";
  }

  .fa-film::before {
    content: "\\f008";
  }

  .fa-ruler-horizontal::before {
    content: "\\f547";
  }

  .fa-people-robbery::before {
    content: "\\e536";
  }

  .fa-lightbulb::before {
    content: "\\f0eb";
  }

  .fa-caret-left::before {
    content: "\\f0d9";
  }

  .fa-circle-exclamation::before {
    content: "\\f06a";
  }

  .fa-exclamation-circle::before {
    content: "\\f06a";
  }

  .fa-school-circle-xmark::before {
    content: "\\e56d";
  }

  .fa-arrow-right-from-bracket::before {
    content: "\\f08b";
  }

  .fa-sign-out::before {
    content: "\\f08b";
  }

  .fa-circle-chevron-down::before {
    content: "\\f13a";
  }

  .fa-chevron-circle-down::before {
    content: "\\f13a";
  }

  .fa-unlock-keyhole::before {
    content: "\\f13e";
  }

  .fa-unlock-alt::before {
    content: "\\f13e";
  }

  .fa-cloud-showers-heavy::before {
    content: "\\f740";
  }

  .fa-headphones-simple::before {
    content: "\\f58f";
  }

  .fa-headphones-alt::before {
    content: "\\f58f";
  }

  .fa-sitemap::before {
    content: "\\f0e8";
  }

  .fa-circle-dollar-to-slot::before {
    content: "\\f4b9";
  }

  .fa-donate::before {
    content: "\\f4b9";
  }

  .fa-memory::before {
    content: "\\f538";
  }

  .fa-road-spikes::before {
    content: "\\e568";
  }

  .fa-fire-burner::before {
    content: "\\e4f1";
  }

  .fa-flag::before {
    content: "\\f024";
  }

  .fa-hanukiah::before {
    content: "\\f6e6";
  }

  .fa-feather::before {
    content: "\\f52d";
  }

  .fa-volume-low::before {
    content: "\\f027";
  }

  .fa-volume-down::before {
    content: "\\f027";
  }

  .fa-comment-slash::before {
    content: "\\f4b3";
  }

  .fa-cloud-sun-rain::before {
    content: "\\f743";
  }

  .fa-compress::before {
    content: "\\f066";
  }

  .fa-wheat-awn::before {
    content: "\\e2cd";
  }

  .fa-wheat-alt::before {
    content: "\\e2cd";
  }

  .fa-ankh::before {
    content: "\\f644";
  }

  .fa-hands-holding-child::before {
    content: "\\e4fa";
  }

  .fa-asterisk::before {
    content: "\\2a";
  }

  .fa-square-check::before {
    content: "\\f14a";
  }

  .fa-check-square::before {
    content: "\\f14a";
  }

  .fa-peseta-sign::before {
    content: "\\e221";
  }

  .fa-heading::before {
    content: "\\f1dc";
  }

  .fa-header::before {
    content: "\\f1dc";
  }

  .fa-ghost::before {
    content: "\\f6e2";
  }

  .fa-list::before {
    content: "\\f03a";
  }

  .fa-list-squares::before {
    content: "\\f03a";
  }

  .fa-square-phone-flip::before {
    content: "\\f87b";
  }

  .fa-phone-square-alt::before {
    content: "\\f87b";
  }

  .fa-cart-plus::before {
    content: "\\f217";
  }

  .fa-gamepad::before {
    content: "\\f11b";
  }

  .fa-circle-dot::before {
    content: "\\f192";
  }

  .fa-dot-circle::before {
    content: "\\f192";
  }

  .fa-face-dizzy::before {
    content: "\\f567";
  }

  .fa-dizzy::before {
    content: "\\f567";
  }

  .fa-egg::before {
    content: "\\f7fb";
  }

  .fa-house-medical-circle-xmark::before {
    content: "\\e513";
  }

  .fa-campground::before {
    content: "\\f6bb";
  }

  .fa-folder-plus::before {
    content: "\\f65e";
  }

  .fa-futbol::before {
    content: "\\f1e3";
  }

  .fa-futbol-ball::before {
    content: "\\f1e3";
  }

  .fa-soccer-ball::before {
    content: "\\f1e3";
  }

  .fa-paintbrush::before {
    content: "\\f1fc";
  }

  .fa-paint-brush::before {
    content: "\\f1fc";
  }

  .fa-lock::before {
    content: "\\f023";
  }

  .fa-gas-pump::before {
    content: "\\f52f";
  }

  .fa-hot-tub-person::before {
    content: "\\f593";
  }

  .fa-hot-tub::before {
    content: "\\f593";
  }

  .fa-map-location::before {
    content: "\\f59f";
  }

  .fa-map-marked::before {
    content: "\\f59f";
  }

  .fa-house-flood-water::before {
    content: "\\e50e";
  }

  .fa-tree::before {
    content: "\\f1bb";
  }

  .fa-bridge-lock::before {
    content: "\\e4cc";
  }

  .fa-sack-dollar::before {
    content: "\\f81d";
  }

  .fa-pen-to-square::before {
    content: "\\f044";
  }

  .fa-edit::before {
    content: "\\f044";
  }

  .fa-car-side::before {
    content: "\\f5e4";
  }

  .fa-share-nodes::before {
    content: "\\f1e0";
  }

  .fa-share-alt::before {
    content: "\\f1e0";
  }

  .fa-heart-circle-minus::before {
    content: "\\e4ff";
  }

  .fa-hourglass-half::before {
    content: "\\f252";
  }

  .fa-hourglass-2::before {
    content: "\\f252";
  }

  .fa-microscope::before {
    content: "\\f610";
  }

  .fa-sink::before {
    content: "\\e06d";
  }

  .fa-bag-shopping::before {
    content: "\\f290";
  }

  .fa-shopping-bag::before {
    content: "\\f290";
  }

  .fa-arrow-down-z-a::before {
    content: "\\f881";
  }

  .fa-sort-alpha-desc::before {
    content: "\\f881";
  }

  .fa-sort-alpha-down-alt::before {
    content: "\\f881";
  }

  .fa-mitten::before {
    content: "\\f7b5";
  }

  .fa-person-rays::before {
    content: "\\e54d";
  }

  .fa-users::before {
    content: "\\f0c0";
  }

  .fa-eye-slash::before {
    content: "\\f070";
  }

  .fa-flask-vial::before {
    content: "\\e4f3";
  }

  .fa-hand::before {
    content: "\\f256";
  }

  .fa-hand-paper::before {
    content: "\\f256";
  }

  .fa-om::before {
    content: "\\f679";
  }

  .fa-worm::before {
    content: "\\e599";
  }

  .fa-house-circle-xmark::before {
    content: "\\e50b";
  }

  .fa-plug::before {
    content: "\\f1e6";
  }

  .fa-chevron-up::before {
    content: "\\f077";
  }

  .fa-hand-spock::before {
    content: "\\f259";
  }

  .fa-stopwatch::before {
    content: "\\f2f2";
  }

  .fa-face-kiss::before {
    content: "\\f596";
  }

  .fa-kiss::before {
    content: "\\f596";
  }

  .fa-bridge-circle-xmark::before {
    content: "\\e4cb";
  }

  .fa-face-grin-tongue::before {
    content: "\\f589";
  }

  .fa-grin-tongue::before {
    content: "\\f589";
  }

  .fa-chess-bishop::before {
    content: "\\f43a";
  }

  .fa-face-grin-wink::before {
    content: "\\f58c";
  }

  .fa-grin-wink::before {
    content: "\\f58c";
  }

  .fa-ear-deaf::before {
    content: "\\f2a4";
  }

  .fa-deaf::before {
    content: "\\f2a4";
  }

  .fa-deafness::before {
    content: "\\f2a4";
  }

  .fa-hard-of-hearing::before {
    content: "\\f2a4";
  }

  .fa-road-circle-check::before {
    content: "\\e564";
  }

  .fa-dice-five::before {
    content: "\\f523";
  }

  .fa-square-rss::before {
    content: "\\f143";
  }

  .fa-rss-square::before {
    content: "\\f143";
  }

  .fa-land-mine-on::before {
    content: "\\e51b";
  }

  .fa-i-cursor::before {
    content: "\\f246";
  }

  .fa-stamp::before {
    content: "\\f5bf";
  }

  .fa-stairs::before {
    content: "\\e289";
  }

  .fa-i::before {
    content: "\\49";
  }

  .fa-hryvnia-sign::before {
    content: "\\f6f2";
  }

  .fa-hryvnia::before {
    content: "\\f6f2";
  }

  .fa-pills::before {
    content: "\\f484";
  }

  .fa-face-grin-wide::before {
    content: "\\f581";
  }

  .fa-grin-alt::before {
    content: "\\f581";
  }

  .fa-tooth::before {
    content: "\\f5c9";
  }

  .fa-v::before {
    content: "\\56";
  }

  .fa-bangladeshi-taka-sign::before {
    content: "\\e2e6";
  }

  .fa-bicycle::before {
    content: "\\f206";
  }

  .fa-staff-snake::before {
    content: "\\e579";
  }

  .fa-rod-asclepius::before {
    content: "\\e579";
  }

  .fa-rod-snake::before {
    content: "\\e579";
  }

  .fa-staff-aesculapius::before {
    content: "\\e579";
  }

  .fa-head-side-cough-slash::before {
    content: "\\e062";
  }

  .fa-truck-medical::before {
    content: "\\f0f9";
  }

  .fa-ambulance::before {
    content: "\\f0f9";
  }

  .fa-wheat-awn-circle-exclamation::before {
    content: "\\e598";
  }

  .fa-snowman::before {
    content: "\\f7d0";
  }

  .fa-mortar-pestle::before {
    content: "\\f5a7";
  }

  .fa-road-barrier::before {
    content: "\\e562";
  }

  .fa-school::before {
    content: "\\f549";
  }

  .fa-igloo::before {
    content: "\\f7ae";
  }

  .fa-joint::before {
    content: "\\f595";
  }

  .fa-angle-right::before {
    content: "\\f105";
  }

  .fa-horse::before {
    content: "\\f6f0";
  }

  .fa-q::before {
    content: "\\51";
  }

  .fa-g::before {
    content: "\\47";
  }

  .fa-notes-medical::before {
    content: "\\f481";
  }

  .fa-temperature-half::before {
    content: "\\f2c9";
  }

  .fa-temperature-2::before {
    content: "\\f2c9";
  }

  .fa-thermometer-2::before {
    content: "\\f2c9";
  }

  .fa-thermometer-half::before {
    content: "\\f2c9";
  }

  .fa-dong-sign::before {
    content: "\\e169";
  }

  .fa-capsules::before {
    content: "\\f46b";
  }

  .fa-poo-storm::before {
    content: "\\f75a";
  }

  .fa-poo-bolt::before {
    content: "\\f75a";
  }

  .fa-face-frown-open::before {
    content: "\\f57a";
  }

  .fa-frown-open::before {
    content: "\\f57a";
  }

  .fa-hand-point-up::before {
    content: "\\f0a6";
  }

  .fa-money-bill::before {
    content: "\\f0d6";
  }

  .fa-bookmark::before {
    content: "\\f02e";
  }

  .fa-align-justify::before {
    content: "\\f039";
  }

  .fa-umbrella-beach::before {
    content: "\\f5ca";
  }

  .fa-helmet-un::before {
    content: "\\e503";
  }

  .fa-bullseye::before {
    content: "\\f140";
  }

  .fa-bacon::before {
    content: "\\f7e5";
  }

  .fa-hand-point-down::before {
    content: "\\f0a7";
  }

  .fa-arrow-up-from-bracket::before {
    content: "\\e09a";
  }

  .fa-folder::before {
    content: "\\f07b";
  }

  .fa-folder-blank::before {
    content: "\\f07b";
  }

  .fa-file-waveform::before {
    content: "\\f478";
  }

  .fa-file-medical-alt::before {
    content: "\\f478";
  }

  .fa-radiation::before {
    content: "\\f7b9";
  }

  .fa-chart-simple::before {
    content: "\\e473";
  }

  .fa-mars-stroke::before {
    content: "\\f229";
  }

  .fa-vial::before {
    content: "\\f492";
  }

  .fa-gauge::before {
    content: "\\f624";
  }

  .fa-dashboard::before {
    content: "\\f624";
  }

  .fa-gauge-med::before {
    content: "\\f624";
  }

  .fa-tachometer-alt-average::before {
    content: "\\f624";
  }

  .fa-wand-magic-sparkles::before {
    content: "\\e2ca";
  }

  .fa-magic-wand-sparkles::before {
    content: "\\e2ca";
  }

  .fa-e::before {
    content: "\\45";
  }

  .fa-pen-clip::before {
    content: "\\f305";
  }

  .fa-pen-alt::before {
    content: "\\f305";
  }

  .fa-bridge-circle-exclamation::before {
    content: "\\e4ca";
  }

  .fa-user::before {
    content: "\\f007";
  }

  .fa-school-circle-check::before {
    content: "\\e56b";
  }

  .fa-dumpster::before {
    content: "\\f793";
  }

  .fa-van-shuttle::before {
    content: "\\f5b6";
  }

  .fa-shuttle-van::before {
    content: "\\f5b6";
  }

  .fa-building-user::before {
    content: "\\e4da";
  }

  .fa-square-caret-left::before {
    content: "\\f191";
  }

  .fa-caret-square-left::before {
    content: "\\f191";
  }

  .fa-highlighter::before {
    content: "\\f591";
  }

  .fa-key::before {
    content: "\\f084";
  }

  .fa-bullhorn::before {
    content: "\\f0a1";
  }

  .fa-globe::before {
    content: "\\f0ac";
  }

  .fa-synagogue::before {
    content: "\\f69b";
  }

  .fa-person-half-dress::before {
    content: "\\e548";
  }

  .fa-road-bridge::before {
    content: "\\e563";
  }

  .fa-location-arrow::before {
    content: "\\f124";
  }

  .fa-c::before {
    content: "\\43";
  }

  .fa-tablet-button::before {
    content: "\\f10a";
  }

  .fa-building-lock::before {
    content: "\\e4d6";
  }

  .fa-pizza-slice::before {
    content: "\\f818";
  }

  .fa-money-bill-wave::before {
    content: "\\f53a";
  }

  .fa-chart-area::before {
    content: "\\f1fe";
  }

  .fa-area-chart::before {
    content: "\\f1fe";
  }

  .fa-house-flag::before {
    content: "\\e50d";
  }

  .fa-person-circle-minus::before {
    content: "\\e540";
  }

  .fa-ban::before {
    content: "\\f05e";
  }

  .fa-cancel::before {
    content: "\\f05e";
  }

  .fa-camera-rotate::before {
    content: "\\e0d8";
  }

  .fa-spray-can-sparkles::before {
    content: "\\f5d0";
  }

  .fa-air-freshener::before {
    content: "\\f5d0";
  }

  .fa-star::before {
    content: "\\f005";
  }

  .fa-repeat::before {
    content: "\\f363";
  }

  .fa-cross::before {
    content: "\\f654";
  }

  .fa-box::before {
    content: "\\f466";
  }

  .fa-venus-mars::before {
    content: "\\f228";
  }

  .fa-arrow-pointer::before {
    content: "\\f245";
  }

  .fa-mouse-pointer::before {
    content: "\\f245";
  }

  .fa-maximize::before {
    content: "\\f31e";
  }

  .fa-expand-arrows-alt::before {
    content: "\\f31e";
  }

  .fa-charging-station::before {
    content: "\\f5e7";
  }

  .fa-shapes::before {
    content: "\\f61f";
  }

  .fa-triangle-circle-square::before {
    content: "\\f61f";
  }

  .fa-shuffle::before {
    content: "\\f074";
  }

  .fa-random::before {
    content: "\\f074";
  }

  .fa-person-running::before {
    content: "\\f70c";
  }

  .fa-running::before {
    content: "\\f70c";
  }

  .fa-mobile-retro::before {
    content: "\\e527";
  }

  .fa-grip-lines-vertical::before {
    content: "\\f7a5";
  }

  .fa-spider::before {
    content: "\\f717";
  }

  .fa-hands-bound::before {
    content: "\\e4f9";
  }

  .fa-file-invoice-dollar::before {
    content: "\\f571";
  }

  .fa-plane-circle-exclamation::before {
    content: "\\e556";
  }

  .fa-x-ray::before {
    content: "\\f497";
  }

  .fa-spell-check::before {
    content: "\\f891";
  }

  .fa-slash::before {
    content: "\\f715";
  }

  .fa-computer-mouse::before {
    content: "\\f8cc";
  }

  .fa-mouse::before {
    content: "\\f8cc";
  }

  .fa-arrow-right-to-bracket::before {
    content: "\\f090";
  }

  .fa-sign-in::before {
    content: "\\f090";
  }

  .fa-shop-slash::before {
    content: "\\e070";
  }

  .fa-store-alt-slash::before {
    content: "\\e070";
  }

  .fa-server::before {
    content: "\\f233";
  }

  .fa-virus-covid-slash::before {
    content: "\\e4a9";
  }

  .fa-shop-lock::before {
    content: "\\e4a5";
  }

  .fa-hourglass-start::before {
    content: "\\f251";
  }

  .fa-hourglass-1::before {
    content: "\\f251";
  }

  .fa-blender-phone::before {
    content: "\\f6b6";
  }

  .fa-building-wheat::before {
    content: "\\e4db";
  }

  .fa-person-breastfeeding::before {
    content: "\\e53a";
  }

  .fa-right-to-bracket::before {
    content: "\\f2f6";
  }

  .fa-sign-in-alt::before {
    content: "\\f2f6";
  }

  .fa-venus::before {
    content: "\\f221";
  }

  .fa-passport::before {
    content: "\\f5ab";
  }

  .fa-heart-pulse::before {
    content: "\\f21e";
  }

  .fa-heartbeat::before {
    content: "\\f21e";
  }

  .fa-people-carry-box::before {
    content: "\\f4ce";
  }

  .fa-people-carry::before {
    content: "\\f4ce";
  }

  .fa-temperature-high::before {
    content: "\\f769";
  }

  .fa-microchip::before {
    content: "\\f2db";
  }

  .fa-crown::before {
    content: "\\f521";
  }

  .fa-weight-hanging::before {
    content: "\\f5cd";
  }

  .fa-xmarks-lines::before {
    content: "\\e59a";
  }

  .fa-file-prescription::before {
    content: "\\f572";
  }

  .fa-weight-scale::before {
    content: "\\f496";
  }

  .fa-weight::before {
    content: "\\f496";
  }

  .fa-user-group::before {
    content: "\\f500";
  }

  .fa-user-friends::before {
    content: "\\f500";
  }

  .fa-arrow-up-a-z::before {
    content: "\\f15e";
  }

  .fa-sort-alpha-up::before {
    content: "\\f15e";
  }

  .fa-chess-knight::before {
    content: "\\f441";
  }

  .fa-face-laugh-squint::before {
    content: "\\f59b";
  }

  .fa-laugh-squint::before {
    content: "\\f59b";
  }

  .fa-wheelchair::before {
    content: "\\f193";
  }

  .fa-circle-arrow-up::before {
    content: "\\f0aa";
  }

  .fa-arrow-circle-up::before {
    content: "\\f0aa";
  }

  .fa-toggle-on::before {
    content: "\\f205";
  }

  .fa-person-walking::before {
    content: "\\f554";
  }

  .fa-walking::before {
    content: "\\f554";
  }

  .fa-l::before {
    content: "\\4c";
  }

  .fa-fire::before {
    content: "\\f06d";
  }

  .fa-bed-pulse::before {
    content: "\\f487";
  }

  .fa-procedures::before {
    content: "\\f487";
  }

  .fa-shuttle-space::before {
    content: "\\f197";
  }

  .fa-space-shuttle::before {
    content: "\\f197";
  }

  .fa-face-laugh::before {
    content: "\\f599";
  }

  .fa-laugh::before {
    content: "\\f599";
  }

  .fa-folder-open::before {
    content: "\\f07c";
  }

  .fa-heart-circle-plus::before {
    content: "\\e500";
  }

  .fa-code-fork::before {
    content: "\\e13b";
  }

  .fa-city::before {
    content: "\\f64f";
  }

  .fa-microphone-lines::before {
    content: "\\f3c9";
  }

  .fa-microphone-alt::before {
    content: "\\f3c9";
  }

  .fa-pepper-hot::before {
    content: "\\f816";
  }

  .fa-unlock::before {
    content: "\\f09c";
  }

  .fa-colon-sign::before {
    content: "\\e140";
  }

  .fa-headset::before {
    content: "\\f590";
  }

  .fa-store-slash::before {
    content: "\\e071";
  }

  .fa-road-circle-xmark::before {
    content: "\\e566";
  }

  .fa-user-minus::before {
    content: "\\f503";
  }

  .fa-mars-stroke-up::before {
    content: "\\f22a";
  }

  .fa-mars-stroke-v::before {
    content: "\\f22a";
  }

  .fa-champagne-glasses::before {
    content: "\\f79f";
  }

  .fa-glass-cheers::before {
    content: "\\f79f";
  }

  .fa-clipboard::before {
    content: "\\f328";
  }

  .fa-house-circle-exclamation::before {
    content: "\\e50a";
  }

  .fa-file-arrow-up::before {
    content: "\\f574";
  }

  .fa-file-upload::before {
    content: "\\f574";
  }

  .fa-wifi::before {
    content: "\\f1eb";
  }

  .fa-wifi-3::before {
    content: "\\f1eb";
  }

  .fa-wifi-strong::before {
    content: "\\f1eb";
  }

  .fa-bath::before {
    content: "\\f2cd";
  }

  .fa-bathtub::before {
    content: "\\f2cd";
  }

  .fa-underline::before {
    content: "\\f0cd";
  }

  .fa-user-pen::before {
    content: "\\f4ff";
  }

  .fa-user-edit::before {
    content: "\\f4ff";
  }

  .fa-signature::before {
    content: "\\f5b7";
  }

  .fa-stroopwafel::before {
    content: "\\f551";
  }

  .fa-bold::before {
    content: "\\f032";
  }

  .fa-anchor-lock::before {
    content: "\\e4ad";
  }

  .fa-building-ngo::before {
    content: "\\e4d7";
  }

  .fa-manat-sign::before {
    content: "\\e1d5";
  }

  .fa-not-equal::before {
    content: "\\f53e";
  }

  .fa-border-top-left::before {
    content: "\\f853";
  }

  .fa-border-style::before {
    content: "\\f853";
  }

  .fa-map-location-dot::before {
    content: "\\f5a0";
  }

  .fa-map-marked-alt::before {
    content: "\\f5a0";
  }

  .fa-jedi::before {
    content: "\\f669";
  }

  .fa-square-poll-vertical::before {
    content: "\\f681";
  }

  .fa-poll::before {
    content: "\\f681";
  }

  .fa-mug-hot::before {
    content: "\\f7b6";
  }

  .fa-car-battery::before {
    content: "\\f5df";
  }

  .fa-battery-car::before {
    content: "\\f5df";
  }

  .fa-gift::before {
    content: "\\f06b";
  }

  .fa-dice-two::before {
    content: "\\f528";
  }

  .fa-chess-queen::before {
    content: "\\f445";
  }

  .fa-glasses::before {
    content: "\\f530";
  }

  .fa-chess-board::before {
    content: "\\f43c";
  }

  .fa-building-circle-check::before {
    content: "\\e4d2";
  }

  .fa-person-chalkboard::before {
    content: "\\e53d";
  }

  .fa-mars-stroke-right::before {
    content: "\\f22b";
  }

  .fa-mars-stroke-h::before {
    content: "\\f22b";
  }

  .fa-hand-back-fist::before {
    content: "\\f255";
  }

  .fa-hand-rock::before {
    content: "\\f255";
  }

  .fa-square-caret-up::before {
    content: "\\f151";
  }

  .fa-caret-square-up::before {
    content: "\\f151";
  }

  .fa-cloud-showers-water::before {
    content: "\\e4e4";
  }

  .fa-chart-bar::before {
    content: "\\f080";
  }

  .fa-bar-chart::before {
    content: "\\f080";
  }

  .fa-hands-bubbles::before {
    content: "\\e05e";
  }

  .fa-hands-wash::before {
    content: "\\e05e";
  }

  .fa-less-than-equal::before {
    content: "\\f537";
  }

  .fa-train::before {
    content: "\\f238";
  }

  .fa-eye-low-vision::before {
    content: "\\f2a8";
  }

  .fa-low-vision::before {
    content: "\\f2a8";
  }

  .fa-crow::before {
    content: "\\f520";
  }

  .fa-sailboat::before {
    content: "\\e445";
  }

  .fa-window-restore::before {
    content: "\\f2d2";
  }

  .fa-square-plus::before {
    content: "\\f0fe";
  }

  .fa-plus-square::before {
    content: "\\f0fe";
  }

  .fa-torii-gate::before {
    content: "\\f6a1";
  }

  .fa-frog::before {
    content: "\\f52e";
  }

  .fa-bucket::before {
    content: "\\e4cf";
  }

  .fa-image::before {
    content: "\\f03e";
  }

  .fa-microphone::before {
    content: "\\f130";
  }

  .fa-cow::before {
    content: "\\f6c8";
  }

  .fa-caret-up::before {
    content: "\\f0d8";
  }

  .fa-screwdriver::before {
    content: "\\f54a";
  }

  .fa-folder-closed::before {
    content: "\\e185";
  }

  .fa-house-tsunami::before {
    content: "\\e515";
  }

  .fa-square-nfi::before {
    content: "\\e576";
  }

  .fa-arrow-up-from-ground-water::before {
    content: "\\e4b5";
  }

  .fa-martini-glass::before {
    content: "\\f57b";
  }

  .fa-glass-martini-alt::before {
    content: "\\f57b";
  }

  .fa-rotate-left::before {
    content: "\\f2ea";
  }

  .fa-rotate-back::before {
    content: "\\f2ea";
  }

  .fa-rotate-backward::before {
    content: "\\f2ea";
  }

  .fa-undo-alt::before {
    content: "\\f2ea";
  }

  .fa-table-columns::before {
    content: "\\f0db";
  }

  .fa-columns::before {
    content: "\\f0db";
  }

  .fa-lemon::before {
    content: "\\f094";
  }

  .fa-head-side-mask::before {
    content: "\\e063";
  }

  .fa-handshake::before {
    content: "\\f2b5";
  }

  .fa-gem::before {
    content: "\\f3a5";
  }

  .fa-dolly::before {
    content: "\\f472";
  }

  .fa-dolly-box::before {
    content: "\\f472";
  }

  .fa-smoking::before {
    content: "\\f48d";
  }

  .fa-minimize::before {
    content: "\\f78c";
  }

  .fa-compress-arrows-alt::before {
    content: "\\f78c";
  }

  .fa-monument::before {
    content: "\\f5a6";
  }

  .fa-snowplow::before {
    content: "\\f7d2";
  }

  .fa-angles-right::before {
    content: "\\f101";
  }

  .fa-angle-double-right::before {
    content: "\\f101";
  }

  .fa-cannabis::before {
    content: "\\f55f";
  }

  .fa-circle-play::before {
    content: "\\f144";
  }

  .fa-play-circle::before {
    content: "\\f144";
  }

  .fa-tablets::before {
    content: "\\f490";
  }

  .fa-ethernet::before {
    content: "\\f796";
  }

  .fa-euro-sign::before {
    content: "\\f153";
  }

  .fa-eur::before {
    content: "\\f153";
  }

  .fa-euro::before {
    content: "\\f153";
  }

  .fa-chair::before {
    content: "\\f6c0";
  }

  .fa-circle-check::before {
    content: "\\f058";
  }

  .fa-check-circle::before {
    content: "\\f058";
  }

  .fa-circle-stop::before {
    content: "\\f28d";
  }

  .fa-stop-circle::before {
    content: "\\f28d";
  }

  .fa-compass-drafting::before {
    content: "\\f568";
  }

  .fa-drafting-compass::before {
    content: "\\f568";
  }

  .fa-plate-wheat::before {
    content: "\\e55a";
  }

  .fa-icicles::before {
    content: "\\f7ad";
  }

  .fa-person-shelter::before {
    content: "\\e54f";
  }

  .fa-neuter::before {
    content: "\\f22c";
  }

  .fa-id-badge::before {
    content: "\\f2c1";
  }

  .fa-marker::before {
    content: "\\f5a1";
  }

  .fa-face-laugh-beam::before {
    content: "\\f59a";
  }

  .fa-laugh-beam::before {
    content: "\\f59a";
  }

  .fa-helicopter-symbol::before {
    content: "\\e502";
  }

  .fa-universal-access::before {
    content: "\\f29a";
  }

  .fa-circle-chevron-up::before {
    content: "\\f139";
  }

  .fa-chevron-circle-up::before {
    content: "\\f139";
  }

  .fa-lari-sign::before {
    content: "\\e1c8";
  }

  .fa-volcano::before {
    content: "\\f770";
  }

  .fa-person-walking-dashed-line-arrow-right::before {
    content: "\\e553";
  }

  .fa-sterling-sign::before {
    content: "\\f154";
  }

  .fa-gbp::before {
    content: "\\f154";
  }

  .fa-pound-sign::before {
    content: "\\f154";
  }

  .fa-viruses::before {
    content: "\\e076";
  }

  .fa-square-person-confined::before {
    content: "\\e577";
  }

  .fa-user-tie::before {
    content: "\\f508";
  }

  .fa-arrow-down-long::before {
    content: "\\f175";
  }

  .fa-long-arrow-down::before {
    content: "\\f175";
  }

  .fa-tent-arrow-down-to-line::before {
    content: "\\e57e";
  }

  .fa-certificate::before {
    content: "\\f0a3";
  }

  .fa-reply-all::before {
    content: "\\f122";
  }

  .fa-mail-reply-all::before {
    content: "\\f122";
  }

  .fa-suitcase::before {
    content: "\\f0f2";
  }

  .fa-person-skating::before {
    content: "\\f7c5";
  }

  .fa-skating::before {
    content: "\\f7c5";
  }

  .fa-filter-circle-dollar::before {
    content: "\\f662";
  }

  .fa-funnel-dollar::before {
    content: "\\f662";
  }

  .fa-camera-retro::before {
    content: "\\f083";
  }

  .fa-circle-arrow-down::before {
    content: "\\f0ab";
  }

  .fa-arrow-circle-down::before {
    content: "\\f0ab";
  }

  .fa-file-import::before {
    content: "\\f56f";
  }

  .fa-arrow-right-to-file::before {
    content: "\\f56f";
  }

  .fa-square-arrow-up-right::before {
    content: "\\f14c";
  }

  .fa-external-link-square::before {
    content: "\\f14c";
  }

  .fa-box-open::before {
    content: "\\f49e";
  }

  .fa-scroll::before {
    content: "\\f70e";
  }

  .fa-spa::before {
    content: "\\f5bb";
  }

  .fa-location-pin-lock::before {
    content: "\\e51f";
  }

  .fa-pause::before {
    content: "\\f04c";
  }

  .fa-hill-avalanche::before {
    content: "\\e507";
  }

  .fa-temperature-empty::before {
    content: "\\f2cb";
  }

  .fa-temperature-0::before {
    content: "\\f2cb";
  }

  .fa-thermometer-0::before {
    content: "\\f2cb";
  }

  .fa-thermometer-empty::before {
    content: "\\f2cb";
  }

  .fa-bomb::before {
    content: "\\f1e2";
  }

  .fa-registered::before {
    content: "\\f25d";
  }

  .fa-address-card::before {
    content: "\\f2bb";
  }

  .fa-contact-card::before {
    content: "\\f2bb";
  }

  .fa-vcard::before {
    content: "\\f2bb";
  }

  .fa-scale-unbalanced-flip::before {
    content: "\\f516";
  }

  .fa-balance-scale-right::before {
    content: "\\f516";
  }

  .fa-subscript::before {
    content: "\\f12c";
  }

  .fa-diamond-turn-right::before {
    content: "\\f5eb";
  }

  .fa-directions::before {
    content: "\\f5eb";
  }

  .fa-burst::before {
    content: "\\e4dc";
  }

  .fa-house-laptop::before {
    content: "\\e066";
  }

  .fa-laptop-house::before {
    content: "\\e066";
  }

  .fa-face-tired::before {
    content: "\\f5c8";
  }

  .fa-tired::before {
    content: "\\f5c8";
  }

  .fa-money-bills::before {
    content: "\\e1f3";
  }

  .fa-smog::before {
    content: "\\f75f";
  }

  .fa-crutch::before {
    content: "\\f7f7";
  }

  .fa-cloud-arrow-up::before {
    content: "\\f0ee";
  }

  .fa-cloud-upload::before {
    content: "\\f0ee";
  }

  .fa-cloud-upload-alt::before {
    content: "\\f0ee";
  }

  .fa-palette::before {
    content: "\\f53f";
  }

  .fa-arrows-turn-right::before {
    content: "\\e4c0";
  }

  .fa-vest::before {
    content: "\\e085";
  }

  .fa-ferry::before {
    content: "\\e4ea";
  }

  .fa-arrows-down-to-people::before {
    content: "\\e4b9";
  }

  .fa-seedling::before {
    content: "\\f4d8";
  }

  .fa-sprout::before {
    content: "\\f4d8";
  }

  .fa-left-right::before {
    content: "\\f337";
  }

  .fa-arrows-alt-h::before {
    content: "\\f337";
  }

  .fa-boxes-packing::before {
    content: "\\e4c7";
  }

  .fa-circle-arrow-left::before {
    content: "\\f0a8";
  }

  .fa-arrow-circle-left::before {
    content: "\\f0a8";
  }

  .fa-group-arrows-rotate::before {
    content: "\\e4f6";
  }

  .fa-bowl-food::before {
    content: "\\e4c6";
  }

  .fa-candy-cane::before {
    content: "\\f786";
  }

  .fa-arrow-down-wide-short::before {
    content: "\\f160";
  }

  .fa-sort-amount-asc::before {
    content: "\\f160";
  }

  .fa-sort-amount-down::before {
    content: "\\f160";
  }

  .fa-cloud-bolt::before {
    content: "\\f76c";
  }

  .fa-thunderstorm::before {
    content: "\\f76c";
  }

  .fa-text-slash::before {
    content: "\\f87d";
  }

  .fa-remove-format::before {
    content: "\\f87d";
  }

  .fa-face-smile-wink::before {
    content: "\\f4da";
  }

  .fa-smile-wink::before {
    content: "\\f4da";
  }

  .fa-file-word::before {
    content: "\\f1c2";
  }

  .fa-file-powerpoint::before {
    content: "\\f1c4";
  }

  .fa-arrows-left-right::before {
    content: "\\f07e";
  }

  .fa-arrows-h::before {
    content: "\\f07e";
  }

  .fa-house-lock::before {
    content: "\\e510";
  }

  .fa-cloud-arrow-down::before {
    content: "\\f0ed";
  }

  .fa-cloud-download::before {
    content: "\\f0ed";
  }

  .fa-cloud-download-alt::before {
    content: "\\f0ed";
  }

  .fa-children::before {
    content: "\\e4e1";
  }

  .fa-chalkboard::before {
    content: "\\f51b";
  }

  .fa-blackboard::before {
    content: "\\f51b";
  }

  .fa-user-large-slash::before {
    content: "\\f4fa";
  }

  .fa-user-alt-slash::before {
    content: "\\f4fa";
  }

  .fa-envelope-open::before {
    content: "\\f2b6";
  }

  .fa-handshake-simple-slash::before {
    content: "\\e05f";
  }

  .fa-handshake-alt-slash::before {
    content: "\\e05f";
  }

  .fa-mattress-pillow::before {
    content: "\\e525";
  }

  .fa-guarani-sign::before {
    content: "\\e19a";
  }

  .fa-arrows-rotate::before {
    content: "\\f021";
  }

  .fa-refresh::before {
    content: "\\f021";
  }

  .fa-sync::before {
    content: "\\f021";
  }

  .fa-fire-extinguisher::before {
    content: "\\f134";
  }

  .fa-cruzeiro-sign::before {
    content: "\\e152";
  }

  .fa-greater-than-equal::before {
    content: "\\f532";
  }

  .fa-shield-halved::before {
    content: "\\f3ed";
  }

  .fa-shield-alt::before {
    content: "\\f3ed";
  }

  .fa-book-atlas::before {
    content: "\\f558";
  }

  .fa-atlas::before {
    content: "\\f558";
  }

  .fa-virus::before {
    content: "\\e074";
  }

  .fa-envelope-circle-check::before {
    content: "\\e4e8";
  }

  .fa-layer-group::before {
    content: "\\f5fd";
  }

  .fa-arrows-to-dot::before {
    content: "\\e4be";
  }

  .fa-archway::before {
    content: "\\f557";
  }

  .fa-heart-circle-check::before {
    content: "\\e4fd";
  }

  .fa-house-chimney-crack::before {
    content: "\\f6f1";
  }

  .fa-house-damage::before {
    content: "\\f6f1";
  }

  .fa-file-zipper::before {
    content: "\\f1c6";
  }

  .fa-file-archive::before {
    content: "\\f1c6";
  }

  .fa-square::before {
    content: "\\f0c8";
  }

  .fa-martini-glass-empty::before {
    content: "\\f000";
  }

  .fa-glass-martini::before {
    content: "\\f000";
  }

  .fa-couch::before {
    content: "\\f4b8";
  }

  .fa-cedi-sign::before {
    content: "\\e0df";
  }

  .fa-italic::before {
    content: "\\f033";
  }

  .fa-church::before {
    content: "\\f51d";
  }

  .fa-comments-dollar::before {
    content: "\\f653";
  }

  .fa-democrat::before {
    content: "\\f747";
  }

  .fa-z::before {
    content: "\\5a";
  }

  .fa-person-skiing::before {
    content: "\\f7c9";
  }

  .fa-skiing::before {
    content: "\\f7c9";
  }

  .fa-road-lock::before {
    content: "\\e567";
  }

  .fa-a::before {
    content: "\\41";
  }

  .fa-temperature-arrow-down::before {
    content: "\\e03f";
  }

  .fa-temperature-down::before {
    content: "\\e03f";
  }

  .fa-feather-pointed::before {
    content: "\\f56b";
  }

  .fa-feather-alt::before {
    content: "\\f56b";
  }

  .fa-p::before {
    content: "\\50";
  }

  .fa-snowflake::before {
    content: "\\f2dc";
  }

  .fa-newspaper::before {
    content: "\\f1ea";
  }

  .fa-rectangle-ad::before {
    content: "\\f641";
  }

  .fa-ad::before {
    content: "\\f641";
  }

  .fa-circle-arrow-right::before {
    content: "\\f0a9";
  }

  .fa-arrow-circle-right::before {
    content: "\\f0a9";
  }

  .fa-filter-circle-xmark::before {
    content: "\\e17b";
  }

  .fa-locust::before {
    content: "\\e520";
  }

  .fa-sort::before {
    content: "\\f0dc";
  }

  .fa-unsorted::before {
    content: "\\f0dc";
  }

  .fa-list-ol::before {
    content: "\\f0cb";
  }

  .fa-list-1-2::before {
    content: "\\f0cb";
  }

  .fa-list-numeric::before {
    content: "\\f0cb";
  }

  .fa-person-dress-burst::before {
    content: "\\e544";
  }

  .fa-money-check-dollar::before {
    content: "\\f53d";
  }

  .fa-money-check-alt::before {
    content: "\\f53d";
  }

  .fa-vector-square::before {
    content: "\\f5cb";
  }

  .fa-bread-slice::before {
    content: "\\f7ec";
  }

  .fa-language::before {
    content: "\\f1ab";
  }

  .fa-face-kiss-wink-heart::before {
    content: "\\f598";
  }

  .fa-kiss-wink-heart::before {
    content: "\\f598";
  }

  .fa-filter::before {
    content: "\\f0b0";
  }

  .fa-question::before {
    content: "\\3f";
  }

  .fa-file-signature::before {
    content: "\\f573";
  }

  .fa-up-down-left-right::before {
    content: "\\f0b2";
  }

  .fa-arrows-alt::before {
    content: "\\f0b2";
  }

  .fa-house-chimney-user::before {
    content: "\\e065";
  }

  .fa-hand-holding-heart::before {
    content: "\\f4be";
  }

  .fa-puzzle-piece::before {
    content: "\\f12e";
  }

  .fa-money-check::before {
    content: "\\f53c";
  }

  .fa-star-half-stroke::before {
    content: "\\f5c0";
  }

  .fa-star-half-alt::before {
    content: "\\f5c0";
  }

  .fa-code::before {
    content: "\\f121";
  }

  .fa-whiskey-glass::before {
    content: "\\f7a0";
  }

  .fa-glass-whiskey::before {
    content: "\\f7a0";
  }

  .fa-building-circle-exclamation::before {
    content: "\\e4d3";
  }

  .fa-magnifying-glass-chart::before {
    content: "\\e522";
  }

  .fa-arrow-up-right-from-square::before {
    content: "\\f08e";
  }

  .fa-external-link::before {
    content: "\\f08e";
  }

  .fa-cubes-stacked::before {
    content: "\\e4e6";
  }

  .fa-won-sign::before {
    content: "\\f159";
  }

  .fa-krw::before {
    content: "\\f159";
  }

  .fa-won::before {
    content: "\\f159";
  }

  .fa-virus-covid::before {
    content: "\\e4a8";
  }

  .fa-austral-sign::before {
    content: "\\e0a9";
  }

  .fa-f::before {
    content: "\\46";
  }

  .fa-leaf::before {
    content: "\\f06c";
  }

  .fa-road::before {
    content: "\\f018";
  }

  .fa-taxi::before {
    content: "\\f1ba";
  }

  .fa-cab::before {
    content: "\\f1ba";
  }

  .fa-person-circle-plus::before {
    content: "\\e541";
  }

  .fa-chart-pie::before {
    content: "\\f200";
  }

  .fa-pie-chart::before {
    content: "\\f200";
  }

  .fa-bolt-lightning::before {
    content: "\\e0b7";
  }

  .fa-sack-xmark::before {
    content: "\\e56a";
  }

  .fa-file-excel::before {
    content: "\\f1c3";
  }

  .fa-file-contract::before {
    content: "\\f56c";
  }

  .fa-fish-fins::before {
    content: "\\e4f2";
  }

  .fa-building-flag::before {
    content: "\\e4d5";
  }

  .fa-face-grin-beam::before {
    content: "\\f582";
  }

  .fa-grin-beam::before {
    content: "\\f582";
  }

  .fa-object-ungroup::before {
    content: "\\f248";
  }

  .fa-poop::before {
    content: "\\f619";
  }

  .fa-location-pin::before {
    content: "\\f041";
  }

  .fa-map-marker::before {
    content: "\\f041";
  }

  .fa-kaaba::before {
    content: "\\f66b";
  }

  .fa-toilet-paper::before {
    content: "\\f71e";
  }

  .fa-helmet-safety::before {
    content: "\\f807";
  }

  .fa-hard-hat::before {
    content: "\\f807";
  }

  .fa-hat-hard::before {
    content: "\\f807";
  }

  .fa-eject::before {
    content: "\\f052";
  }

  .fa-circle-right::before {
    content: "\\f35a";
  }

  .fa-arrow-alt-circle-right::before {
    content: "\\f35a";
  }

  .fa-plane-circle-check::before {
    content: "\\e555";
  }

  .fa-face-rolling-eyes::before {
    content: "\\f5a5";
  }

  .fa-meh-rolling-eyes::before {
    content: "\\f5a5";
  }

  .fa-object-group::before {
    content: "\\f247";
  }

  .fa-chart-line::before {
    content: "\\f201";
  }

  .fa-line-chart::before {
    content: "\\f201";
  }

  .fa-mask-ventilator::before {
    content: "\\e524";
  }

  .fa-arrow-right::before {
    content: "\\f061";
  }

  .fa-signs-post::before {
    content: "\\f277";
  }

  .fa-map-signs::before {
    content: "\\f277";
  }

  .fa-cash-register::before {
    content: "\\f788";
  }

  .fa-person-circle-question::before {
    content: "\\e542";
  }

  .fa-h::before {
    content: "\\48";
  }

  .fa-tarp::before {
    content: "\\e57b";
  }

  .fa-screwdriver-wrench::before {
    content: "\\f7d9";
  }

  .fa-tools::before {
    content: "\\f7d9";
  }

  .fa-arrows-to-eye::before {
    content: "\\e4bf";
  }

  .fa-plug-circle-bolt::before {
    content: "\\e55b";
  }

  .fa-heart::before {
    content: "\\f004";
  }

  .fa-mars-and-venus::before {
    content: "\\f224";
  }

  .fa-house-user::before {
    content: "\\e1b0";
  }

  .fa-home-user::before {
    content: "\\e1b0";
  }

  .fa-dumpster-fire::before {
    content: "\\f794";
  }

  .fa-house-crack::before {
    content: "\\e3b1";
  }

  .fa-martini-glass-citrus::before {
    content: "\\f561";
  }

  .fa-cocktail::before {
    content: "\\f561";
  }

  .fa-face-surprise::before {
    content: "\\f5c2";
  }

  .fa-surprise::before {
    content: "\\f5c2";
  }

  .fa-bottle-water::before {
    content: "\\e4c5";
  }

  .fa-circle-pause::before {
    content: "\\f28b";
  }

  .fa-pause-circle::before {
    content: "\\f28b";
  }

  .fa-toilet-paper-slash::before {
    content: "\\e072";
  }

  .fa-apple-whole::before {
    content: "\\f5d1";
  }

  .fa-apple-alt::before {
    content: "\\f5d1";
  }

  .fa-kitchen-set::before {
    content: "\\e51a";
  }

  .fa-r::before {
    content: "\\52";
  }

  .fa-temperature-quarter::before {
    content: "\\f2ca";
  }

  .fa-temperature-1::before {
    content: "\\f2ca";
  }

  .fa-thermometer-1::before {
    content: "\\f2ca";
  }

  .fa-thermometer-quarter::before {
    content: "\\f2ca";
  }

  .fa-cube::before {
    content: "\\f1b2";
  }

  .fa-bitcoin-sign::before {
    content: "\\e0b4";
  }

  .fa-shield-dog::before {
    content: "\\e573";
  }

  .fa-solar-panel::before {
    content: "\\f5ba";
  }

  .fa-lock-open::before {
    content: "\\f3c1";
  }

  .fa-elevator::before {
    content: "\\e16d";
  }

  .fa-money-bill-transfer::before {
    content: "\\e528";
  }

  .fa-money-bill-trend-up::before {
    content: "\\e529";
  }

  .fa-house-flood-water-circle-arrow-right::before {
    content: "\\e50f";
  }

  .fa-square-poll-horizontal::before {
    content: "\\f682";
  }

  .fa-poll-h::before {
    content: "\\f682";
  }

  .fa-circle::before {
    content: "\\f111";
  }

  .fa-backward-fast::before {
    content: "\\f049";
  }

  .fa-fast-backward::before {
    content: "\\f049";
  }

  .fa-recycle::before {
    content: "\\f1b8";
  }

  .fa-user-astronaut::before {
    content: "\\f4fb";
  }

  .fa-plane-slash::before {
    content: "\\e069";
  }

  .fa-trademark::before {
    content: "\\f25c";
  }

  .fa-basketball::before {
    content: "\\f434";
  }

  .fa-basketball-ball::before {
    content: "\\f434";
  }

  .fa-satellite-dish::before {
    content: "\\f7c0";
  }

  .fa-circle-up::before {
    content: "\\f35b";
  }

  .fa-arrow-alt-circle-up::before {
    content: "\\f35b";
  }

  .fa-mobile-screen-button::before {
    content: "\\f3cd";
  }

  .fa-mobile-alt::before {
    content: "\\f3cd";
  }

  .fa-volume-high::before {
    content: "\\f028";
  }

  .fa-volume-up::before {
    content: "\\f028";
  }

  .fa-users-rays::before {
    content: "\\e593";
  }

  .fa-wallet::before {
    content: "\\f555";
  }

  .fa-clipboard-check::before {
    content: "\\f46c";
  }

  .fa-file-audio::before {
    content: "\\f1c7";
  }

  .fa-burger::before {
    content: "\\f805";
  }

  .fa-hamburger::before {
    content: "\\f805";
  }

  .fa-wrench::before {
    content: "\\f0ad";
  }

  .fa-bugs::before {
    content: "\\e4d0";
  }

  .fa-rupee-sign::before {
    content: "\\f156";
  }

  .fa-rupee::before {
    content: "\\f156";
  }

  .fa-file-image::before {
    content: "\\f1c5";
  }

  .fa-circle-question::before {
    content: "\\f059";
  }

  .fa-question-circle::before {
    content: "\\f059";
  }

  .fa-plane-departure::before {
    content: "\\f5b0";
  }

  .fa-handshake-slash::before {
    content: "\\e060";
  }

  .fa-book-bookmark::before {
    content: "\\e0bb";
  }

  .fa-code-branch::before {
    content: "\\f126";
  }

  .fa-hat-cowboy::before {
    content: "\\f8c0";
  }

  .fa-bridge::before {
    content: "\\e4c8";
  }

  .fa-phone-flip::before {
    content: "\\f879";
  }

  .fa-phone-alt::before {
    content: "\\f879";
  }

  .fa-truck-front::before {
    content: "\\e2b7";
  }

  .fa-cat::before {
    content: "\\f6be";
  }

  .fa-anchor-circle-exclamation::before {
    content: "\\e4ab";
  }

  .fa-truck-field::before {
    content: "\\e58d";
  }

  .fa-route::before {
    content: "\\f4d7";
  }

  .fa-clipboard-question::before {
    content: "\\e4e3";
  }

  .fa-panorama::before {
    content: "\\e209";
  }

  .fa-comment-medical::before {
    content: "\\f7f5";
  }

  .fa-teeth-open::before {
    content: "\\f62f";
  }

  .fa-file-circle-minus::before {
    content: "\\e4ed";
  }

  .fa-tags::before {
    content: "\\f02c";
  }

  .fa-wine-glass::before {
    content: "\\f4e3";
  }

  .fa-forward-fast::before {
    content: "\\f050";
  }

  .fa-fast-forward::before {
    content: "\\f050";
  }

  .fa-face-meh-blank::before {
    content: "\\f5a4";
  }

  .fa-meh-blank::before {
    content: "\\f5a4";
  }

  .fa-square-parking::before {
    content: "\\f540";
  }

  .fa-parking::before {
    content: "\\f540";
  }

  .fa-house-signal::before {
    content: "\\e012";
  }

  .fa-bars-progress::before {
    content: "\\f828";
  }

  .fa-tasks-alt::before {
    content: "\\f828";
  }

  .fa-faucet-drip::before {
    content: "\\e006";
  }

  .fa-cart-flatbed::before {
    content: "\\f474";
  }

  .fa-dolly-flatbed::before {
    content: "\\f474";
  }

  .fa-ban-smoking::before {
    content: "\\f54d";
  }

  .fa-smoking-ban::before {
    content: "\\f54d";
  }

  .fa-terminal::before {
    content: "\\f120";
  }

  .fa-mobile-button::before {
    content: "\\f10b";
  }

  .fa-house-medical-flag::before {
    content: "\\e514";
  }

  .fa-basket-shopping::before {
    content: "\\f291";
  }

  .fa-shopping-basket::before {
    content: "\\f291";
  }

  .fa-tape::before {
    content: "\\f4db";
  }

  .fa-bus-simple::before {
    content: "\\f55e";
  }

  .fa-bus-alt::before {
    content: "\\f55e";
  }

  .fa-eye::before {
    content: "\\f06e";
  }

  .fa-face-sad-cry::before {
    content: "\\f5b3";
  }

  .fa-sad-cry::before {
    content: "\\f5b3";
  }

  .fa-audio-description::before {
    content: "\\f29e";
  }

  .fa-person-military-to-person::before {
    content: "\\e54c";
  }

  .fa-file-shield::before {
    content: "\\e4f0";
  }

  .fa-user-slash::before {
    content: "\\f506";
  }

  .fa-pen::before {
    content: "\\f304";
  }

  .fa-tower-observation::before {
    content: "\\e586";
  }

  .fa-file-code::before {
    content: "\\f1c9";
  }

  .fa-signal::before {
    content: "\\f012";
  }

  .fa-signal-5::before {
    content: "\\f012";
  }

  .fa-signal-perfect::before {
    content: "\\f012";
  }

  .fa-bus::before {
    content: "\\f207";
  }

  .fa-heart-circle-xmark::before {
    content: "\\e501";
  }

  .fa-house-chimney::before {
    content: "\\e3af";
  }

  .fa-home-lg::before {
    content: "\\e3af";
  }

  .fa-window-maximize::before {
    content: "\\f2d0";
  }

  .fa-face-frown::before {
    content: "\\f119";
  }

  .fa-frown::before {
    content: "\\f119";
  }

  .fa-prescription::before {
    content: "\\f5b1";
  }

  .fa-shop::before {
    content: "\\f54f";
  }

  .fa-store-alt::before {
    content: "\\f54f";
  }

  .fa-floppy-disk::before {
    content: "\\f0c7";
  }

  .fa-save::before {
    content: "\\f0c7";
  }

  .fa-vihara::before {
    content: "\\f6a7";
  }

  .fa-scale-unbalanced::before {
    content: "\\f515";
  }

  .fa-balance-scale-left::before {
    content: "\\f515";
  }

  .fa-sort-up::before {
    content: "\\f0de";
  }

  .fa-sort-asc::before {
    content: "\\f0de";
  }

  .fa-comment-dots::before {
    content: "\\f4ad";
  }

  .fa-commenting::before {
    content: "\\f4ad";
  }

  .fa-plant-wilt::before {
    content: "\\e5aa";
  }

  .fa-diamond::before {
    content: "\\f219";
  }

  .fa-face-grin-squint::before {
    content: "\\f585";
  }

  .fa-grin-squint::before {
    content: "\\f585";
  }

  .fa-hand-holding-dollar::before {
    content: "\\f4c0";
  }

  .fa-hand-holding-usd::before {
    content: "\\f4c0";
  }

  .fa-bacterium::before {
    content: "\\e05a";
  }

  .fa-hand-pointer::before {
    content: "\\f25a";
  }

  .fa-drum-steelpan::before {
    content: "\\f56a";
  }

  .fa-hand-scissors::before {
    content: "\\f257";
  }

  .fa-hands-praying::before {
    content: "\\f684";
  }

  .fa-praying-hands::before {
    content: "\\f684";
  }

  .fa-arrow-rotate-right::before {
    content: "\\f01e";
  }

  .fa-arrow-right-rotate::before {
    content: "\\f01e";
  }

  .fa-arrow-rotate-forward::before {
    content: "\\f01e";
  }

  .fa-redo::before {
    content: "\\f01e";
  }

  .fa-biohazard::before {
    content: "\\f780";
  }

  .fa-location-crosshairs::before {
    content: "\\f601";
  }

  .fa-location::before {
    content: "\\f601";
  }

  .fa-mars-double::before {
    content: "\\f227";
  }

  .fa-child-dress::before {
    content: "\\e59c";
  }

  .fa-users-between-lines::before {
    content: "\\e591";
  }

  .fa-lungs-virus::before {
    content: "\\e067";
  }

  .fa-face-grin-tears::before {
    content: "\\f588";
  }

  .fa-grin-tears::before {
    content: "\\f588";
  }

  .fa-phone::before {
    content: "\\f095";
  }

  .fa-calendar-xmark::before {
    content: "\\f273";
  }

  .fa-calendar-times::before {
    content: "\\f273";
  }

  .fa-child-reaching::before {
    content: "\\e59d";
  }

  .fa-head-side-virus::before {
    content: "\\e064";
  }

  .fa-user-gear::before {
    content: "\\f4fe";
  }

  .fa-user-cog::before {
    content: "\\f4fe";
  }

  .fa-arrow-up-1-9::before {
    content: "\\f163";
  }

  .fa-sort-numeric-up::before {
    content: "\\f163";
  }

  .fa-door-closed::before {
    content: "\\f52a";
  }

  .fa-shield-virus::before {
    content: "\\e06c";
  }

  .fa-dice-six::before {
    content: "\\f526";
  }

  .fa-mosquito-net::before {
    content: "\\e52c";
  }

  .fa-bridge-water::before {
    content: "\\e4ce";
  }

  .fa-person-booth::before {
    content: "\\f756";
  }

  .fa-text-width::before {
    content: "\\f035";
  }

  .fa-hat-wizard::before {
    content: "\\f6e8";
  }

  .fa-pen-fancy::before {
    content: "\\f5ac";
  }

  .fa-person-digging::before {
    content: "\\f85e";
  }

  .fa-digging::before {
    content: "\\f85e";
  }

  .fa-trash::before {
    content: "\\f1f8";
  }

  .fa-gauge-simple::before {
    content: "\\f629";
  }

  .fa-gauge-simple-med::before {
    content: "\\f629";
  }

  .fa-tachometer-average::before {
    content: "\\f629";
  }

  .fa-book-medical::before {
    content: "\\f7e6";
  }

  .fa-poo::before {
    content: "\\f2fe";
  }

  .fa-quote-right::before {
    content: "\\f10e";
  }

  .fa-quote-right-alt::before {
    content: "\\f10e";
  }

  .fa-shirt::before {
    content: "\\f553";
  }

  .fa-t-shirt::before {
    content: "\\f553";
  }

  .fa-tshirt::before {
    content: "\\f553";
  }

  .fa-cubes::before {
    content: "\\f1b3";
  }

  .fa-divide::before {
    content: "\\f529";
  }

  .fa-tenge-sign::before {
    content: "\\f7d7";
  }

  .fa-tenge::before {
    content: "\\f7d7";
  }

  .fa-headphones::before {
    content: "\\f025";
  }

  .fa-hands-holding::before {
    content: "\\f4c2";
  }

  .fa-hands-clapping::before {
    content: "\\e1a8";
  }

  .fa-republican::before {
    content: "\\f75e";
  }

  .fa-arrow-left::before {
    content: "\\f060";
  }

  .fa-person-circle-xmark::before {
    content: "\\e543";
  }

  .fa-ruler::before {
    content: "\\f545";
  }

  .fa-align-left::before {
    content: "\\f036";
  }

  .fa-dice-d6::before {
    content: "\\f6d1";
  }

  .fa-restroom::before {
    content: "\\f7bd";
  }

  .fa-j::before {
    content: "\\4a";
  }

  .fa-users-viewfinder::before {
    content: "\\e595";
  }

  .fa-file-video::before {
    content: "\\f1c8";
  }

  .fa-up-right-from-square::before {
    content: "\\f35d";
  }

  .fa-external-link-alt::before {
    content: "\\f35d";
  }

  .fa-table-cells::before {
    content: "\\f00a";
  }

  .fa-th::before {
    content: "\\f00a";
  }

  .fa-file-pdf::before {
    content: "\\f1c1";
  }

  .fa-book-bible::before {
    content: "\\f647";
  }

  .fa-bible::before {
    content: "\\f647";
  }

  .fa-o::before {
    content: "\\4f";
  }

  .fa-suitcase-medical::before {
    content: "\\f0fa";
  }

  .fa-medkit::before {
    content: "\\f0fa";
  }

  .fa-user-secret::before {
    content: "\\f21b";
  }

  .fa-otter::before {
    content: "\\f700";
  }

  .fa-person-dress::before {
    content: "\\f182";
  }

  .fa-female::before {
    content: "\\f182";
  }

  .fa-comment-dollar::before {
    content: "\\f651";
  }

  .fa-business-time::before {
    content: "\\f64a";
  }

  .fa-briefcase-clock::before {
    content: "\\f64a";
  }

  .fa-table-cells-large::before {
    content: "\\f009";
  }

  .fa-th-large::before {
    content: "\\f009";
  }

  .fa-book-tanakh::before {
    content: "\\f827";
  }

  .fa-tanakh::before {
    content: "\\f827";
  }

  .fa-phone-volume::before {
    content: "\\f2a0";
  }

  .fa-volume-control-phone::before {
    content: "\\f2a0";
  }

  .fa-hat-cowboy-side::before {
    content: "\\f8c1";
  }

  .fa-clipboard-user::before {
    content: "\\f7f3";
  }

  .fa-child::before {
    content: "\\f1ae";
  }

  .fa-lira-sign::before {
    content: "\\f195";
  }

  .fa-satellite::before {
    content: "\\f7bf";
  }

  .fa-plane-lock::before {
    content: "\\e558";
  }

  .fa-tag::before {
    content: "\\f02b";
  }

  .fa-comment::before {
    content: "\\f075";
  }

  .fa-cake-candles::before {
    content: "\\f1fd";
  }

  .fa-birthday-cake::before {
    content: "\\f1fd";
  }

  .fa-cake::before {
    content: "\\f1fd";
  }

  .fa-envelope::before {
    content: "\\f0e0";
  }

  .fa-angles-up::before {
    content: "\\f102";
  }

  .fa-angle-double-up::before {
    content: "\\f102";
  }

  .fa-paperclip::before {
    content: "\\f0c6";
  }

  .fa-arrow-right-to-city::before {
    content: "\\e4b3";
  }

  .fa-ribbon::before {
    content: "\\f4d6";
  }

  .fa-lungs::before {
    content: "\\f604";
  }

  .fa-arrow-up-9-1::before {
    content: "\\f887";
  }

  .fa-sort-numeric-up-alt::before {
    content: "\\f887";
  }

  .fa-litecoin-sign::before {
    content: "\\e1d3";
  }

  .fa-border-none::before {
    content: "\\f850";
  }

  .fa-circle-nodes::before {
    content: "\\e4e2";
  }

  .fa-parachute-box::before {
    content: "\\f4cd";
  }

  .fa-indent::before {
    content: "\\f03c";
  }

  .fa-truck-field-un::before {
    content: "\\e58e";
  }

  .fa-hourglass::before {
    content: "\\f254";
  }

  .fa-hourglass-empty::before {
    content: "\\f254";
  }

  .fa-mountain::before {
    content: "\\f6fc";
  }

  .fa-user-doctor::before {
    content: "\\f0f0";
  }

  .fa-user-md::before {
    content: "\\f0f0";
  }

  .fa-circle-info::before {
    content: "\\f05a";
  }

  .fa-info-circle::before {
    content: "\\f05a";
  }

  .fa-cloud-meatball::before {
    content: "\\f73b";
  }

  .fa-camera::before {
    content: "\\f030";
  }

  .fa-camera-alt::before {
    content: "\\f030";
  }

  .fa-square-virus::before {
    content: "\\e578";
  }

  .fa-meteor::before {
    content: "\\f753";
  }

  .fa-car-on::before {
    content: "\\e4dd";
  }

  .fa-sleigh::before {
    content: "\\f7cc";
  }

  .fa-arrow-down-1-9::before {
    content: "\\f162";
  }

  .fa-sort-numeric-asc::before {
    content: "\\f162";
  }

  .fa-sort-numeric-down::before {
    content: "\\f162";
  }

  .fa-hand-holding-droplet::before {
    content: "\\f4c1";
  }

  .fa-hand-holding-water::before {
    content: "\\f4c1";
  }

  .fa-water::before {
    content: "\\f773";
  }

  .fa-calendar-check::before {
    content: "\\f274";
  }

  .fa-braille::before {
    content: "\\f2a1";
  }

  .fa-prescription-bottle-medical::before {
    content: "\\f486";
  }

  .fa-prescription-bottle-alt::before {
    content: "\\f486";
  }

  .fa-landmark::before {
    content: "\\f66f";
  }

  .fa-truck::before {
    content: "\\f0d1";
  }

  .fa-crosshairs::before {
    content: "\\f05b";
  }

  .fa-person-cane::before {
    content: "\\e53c";
  }

  .fa-tent::before {
    content: "\\e57d";
  }

  .fa-vest-patches::before {
    content: "\\e086";
  }

  .fa-check-double::before {
    content: "\\f560";
  }

  .fa-arrow-down-a-z::before {
    content: "\\f15d";
  }

  .fa-sort-alpha-asc::before {
    content: "\\f15d";
  }

  .fa-sort-alpha-down::before {
    content: "\\f15d";
  }

  .fa-money-bill-wheat::before {
    content: "\\e52a";
  }

  .fa-cookie::before {
    content: "\\f563";
  }

  .fa-arrow-rotate-left::before {
    content: "\\f0e2";
  }

  .fa-arrow-left-rotate::before {
    content: "\\f0e2";
  }

  .fa-arrow-rotate-back::before {
    content: "\\f0e2";
  }

  .fa-arrow-rotate-backward::before {
    content: "\\f0e2";
  }

  .fa-undo::before {
    content: "\\f0e2";
  }

  .fa-hard-drive::before {
    content: "\\f0a0";
  }

  .fa-hdd::before {
    content: "\\f0a0";
  }

  .fa-face-grin-squint-tears::before {
    content: "\\f586";
  }

  .fa-grin-squint-tears::before {
    content: "\\f586";
  }

  .fa-dumbbell::before {
    content: "\\f44b";
  }

  .fa-rectangle-list::before {
    content: "\\f022";
  }

  .fa-list-alt::before {
    content: "\\f022";
  }

  .fa-tarp-droplet::before {
    content: "\\e57c";
  }

  .fa-house-medical-circle-check::before {
    content: "\\e511";
  }

  .fa-person-skiing-nordic::before {
    content: "\\f7ca";
  }

  .fa-skiing-nordic::before {
    content: "\\f7ca";
  }

  .fa-calendar-plus::before {
    content: "\\f271";
  }

  .fa-plane-arrival::before {
    content: "\\f5af";
  }

  .fa-circle-left::before {
    content: "\\f359";
  }

  .fa-arrow-alt-circle-left::before {
    content: "\\f359";
  }

  .fa-train-subway::before {
    content: "\\f239";
  }

  .fa-subway::before {
    content: "\\f239";
  }

  .fa-chart-gantt::before {
    content: "\\e0e4";
  }

  .fa-indian-rupee-sign::before {
    content: "\\e1bc";
  }

  .fa-indian-rupee::before {
    content: "\\e1bc";
  }

  .fa-inr::before {
    content: "\\e1bc";
  }

  .fa-crop-simple::before {
    content: "\\f565";
  }

  .fa-crop-alt::before {
    content: "\\f565";
  }

  .fa-money-bill-1::before {
    content: "\\f3d1";
  }

  .fa-money-bill-alt::before {
    content: "\\f3d1";
  }

  .fa-left-long::before {
    content: "\\f30a";
  }

  .fa-long-arrow-alt-left::before {
    content: "\\f30a";
  }

  .fa-dna::before {
    content: "\\f471";
  }

  .fa-virus-slash::before {
    content: "\\e075";
  }

  .fa-minus::before {
    content: "\\f068";
  }

  .fa-subtract::before {
    content: "\\f068";
  }

  .fa-chess::before {
    content: "\\f439";
  }

  .fa-arrow-left-long::before {
    content: "\\f177";
  }

  .fa-long-arrow-left::before {
    content: "\\f177";
  }

  .fa-plug-circle-check::before {
    content: "\\e55c";
  }

  .fa-street-view::before {
    content: "\\f21d";
  }

  .fa-franc-sign::before {
    content: "\\e18f";
  }

  .fa-volume-off::before {
    content: "\\f026";
  }

  .fa-hands-asl-interpreting::before {
    content: "\\f2a3";
  }

  .fa-american-sign-language-interpreting::before {
    content: "\\f2a3";
  }

  .fa-asl-interpreting::before {
    content: "\\f2a3";
  }

  .fa-hands-american-sign-language-interpreting::before {
    content: "\\f2a3";
  }

  .fa-gear::before {
    content: "\\f013";
  }

  .fa-cog::before {
    content: "\\f013";
  }

  .fa-droplet-slash::before {
    content: "\\f5c7";
  }

  .fa-tint-slash::before {
    content: "\\f5c7";
  }

  .fa-mosque::before {
    content: "\\f678";
  }

  .fa-mosquito::before {
    content: "\\e52b";
  }

  .fa-star-of-david::before {
    content: "\\f69a";
  }

  .fa-person-military-rifle::before {
    content: "\\e54b";
  }

  .fa-cart-shopping::before {
    content: "\\f07a";
  }

  .fa-shopping-cart::before {
    content: "\\f07a";
  }

  .fa-vials::before {
    content: "\\f493";
  }

  .fa-plug-circle-plus::before {
    content: "\\e55f";
  }

  .fa-place-of-worship::before {
    content: "\\f67f";
  }

  .fa-grip-vertical::before {
    content: "\\f58e";
  }

  .fa-arrow-turn-up::before {
    content: "\\f148";
  }

  .fa-level-up::before {
    content: "\\f148";
  }

  .fa-u::before {
    content: "\\55";
  }

  .fa-square-root-variable::before {
    content: "\\f698";
  }

  .fa-square-root-alt::before {
    content: "\\f698";
  }

  .fa-clock::before {
    content: "\\f017";
  }

  .fa-clock-four::before {
    content: "\\f017";
  }

  .fa-backward-step::before {
    content: "\\f048";
  }

  .fa-step-backward::before {
    content: "\\f048";
  }

  .fa-pallet::before {
    content: "\\f482";
  }

  .fa-faucet::before {
    content: "\\e005";
  }

  .fa-baseball-bat-ball::before {
    content: "\\f432";
  }

  .fa-s::before {
    content: "\\53";
  }

  .fa-timeline::before {
    content: "\\e29c";
  }

  .fa-keyboard::before {
    content: "\\f11c";
  }

  .fa-caret-down::before {
    content: "\\f0d7";
  }

  .fa-house-chimney-medical::before {
    content: "\\f7f2";
  }

  .fa-clinic-medical::before {
    content: "\\f7f2";
  }

  .fa-temperature-three-quarters::before {
    content: "\\f2c8";
  }

  .fa-temperature-3::before {
    content: "\\f2c8";
  }

  .fa-thermometer-3::before {
    content: "\\f2c8";
  }

  .fa-thermometer-three-quarters::before {
    content: "\\f2c8";
  }

  .fa-mobile-screen::before {
    content: "\\f3cf";
  }

  .fa-mobile-android-alt::before {
    content: "\\f3cf";
  }

  .fa-plane-up::before {
    content: "\\e22d";
  }

  .fa-piggy-bank::before {
    content: "\\f4d3";
  }

  .fa-battery-half::before {
    content: "\\f242";
  }

  .fa-battery-3::before {
    content: "\\f242";
  }

  .fa-mountain-city::before {
    content: "\\e52e";
  }

  .fa-coins::before {
    content: "\\f51e";
  }

  .fa-khanda::before {
    content: "\\f66d";
  }

  .fa-sliders::before {
    content: "\\f1de";
  }

  .fa-sliders-h::before {
    content: "\\f1de";
  }

  .fa-folder-tree::before {
    content: "\\f802";
  }

  .fa-network-wired::before {
    content: "\\f6ff";
  }

  .fa-map-pin::before {
    content: "\\f276";
  }

  .fa-hamsa::before {
    content: "\\f665";
  }

  .fa-cent-sign::before {
    content: "\\e3f5";
  }

  .fa-flask::before {
    content: "\\f0c3";
  }

  .fa-person-pregnant::before {
    content: "\\e31e";
  }

  .fa-wand-sparkles::before {
    content: "\\f72b";
  }

  .fa-ellipsis-vertical::before {
    content: "\\f142";
  }

  .fa-ellipsis-v::before {
    content: "\\f142";
  }

  .fa-ticket::before {
    content: "\\f145";
  }

  .fa-power-off::before {
    content: "\\f011";
  }

  .fa-right-long::before {
    content: "\\f30b";
  }

  .fa-long-arrow-alt-right::before {
    content: "\\f30b";
  }

  .fa-flag-usa::before {
    content: "\\f74d";
  }

  .fa-laptop-file::before {
    content: "\\e51d";
  }

  .fa-tty::before {
    content: "\\f1e4";
  }

  .fa-teletype::before {
    content: "\\f1e4";
  }

  .fa-diagram-next::before {
    content: "\\e476";
  }

  .fa-person-rifle::before {
    content: "\\e54e";
  }

  .fa-house-medical-circle-exclamation::before {
    content: "\\e512";
  }

  .fa-closed-captioning::before {
    content: "\\f20a";
  }

  .fa-person-hiking::before {
    content: "\\f6ec";
  }

  .fa-hiking::before {
    content: "\\f6ec";
  }

  .fa-venus-double::before {
    content: "\\f226";
  }

  .fa-images::before {
    content: "\\f302";
  }

  .fa-calculator::before {
    content: "\\f1ec";
  }

  .fa-people-pulling::before {
    content: "\\e535";
  }

  .fa-n::before {
    content: "\\4e";
  }

  .fa-cable-car::before {
    content: "\\f7da";
  }

  .fa-tram::before {
    content: "\\f7da";
  }

  .fa-cloud-rain::before {
    content: "\\f73d";
  }

  .fa-building-circle-xmark::before {
    content: "\\e4d4";
  }

  .fa-ship::before {
    content: "\\f21a";
  }

  .fa-arrows-down-to-line::before {
    content: "\\e4b8";
  }

  .fa-download::before {
    content: "\\f019";
  }

  .fa-face-grin::before {
    content: "\\f580";
  }

  .fa-grin::before {
    content: "\\f580";
  }

  .fa-delete-left::before {
    content: "\\f55a";
  }

  .fa-backspace::before {
    content: "\\f55a";
  }

  .fa-eye-dropper::before {
    content: "\\f1fb";
  }

  .fa-eye-dropper-empty::before {
    content: "\\f1fb";
  }

  .fa-eyedropper::before {
    content: "\\f1fb";
  }

  .fa-file-circle-check::before {
    content: "\\e5a0";
  }

  .fa-forward::before {
    content: "\\f04e";
  }

  .fa-mobile::before {
    content: "\\f3ce";
  }

  .fa-mobile-android::before {
    content: "\\f3ce";
  }

  .fa-mobile-phone::before {
    content: "\\f3ce";
  }

  .fa-face-meh::before {
    content: "\\f11a";
  }

  .fa-meh::before {
    content: "\\f11a";
  }

  .fa-align-center::before {
    content: "\\f037";
  }

  .fa-book-skull::before {
    content: "\\f6b7";
  }

  .fa-book-dead::before {
    content: "\\f6b7";
  }

  .fa-id-card::before {
    content: "\\f2c2";
  }

  .fa-drivers-license::before {
    content: "\\f2c2";
  }

  .fa-outdent::before {
    content: "\\f03b";
  }

  .fa-dedent::before {
    content: "\\f03b";
  }

  .fa-heart-circle-exclamation::before {
    content: "\\e4fe";
  }

  .fa-house::before {
    content: "\\f015";
  }

  .fa-home::before {
    content: "\\f015";
  }

  .fa-home-alt::before {
    content: "\\f015";
  }

  .fa-home-lg-alt::before {
    content: "\\f015";
  }

  .fa-calendar-week::before {
    content: "\\f784";
  }

  .fa-laptop-medical::before {
    content: "\\f812";
  }

  .fa-b::before {
    content: "\\42";
  }

  .fa-file-medical::before {
    content: "\\f477";
  }

  .fa-dice-one::before {
    content: "\\f525";
  }

  .fa-kiwi-bird::before {
    content: "\\f535";
  }

  .fa-arrow-right-arrow-left::before {
    content: "\\f0ec";
  }

  .fa-exchange::before {
    content: "\\f0ec";
  }

  .fa-rotate-right::before {
    content: "\\f2f9";
  }

  .fa-redo-alt::before {
    content: "\\f2f9";
  }

  .fa-rotate-forward::before {
    content: "\\f2f9";
  }

  .fa-utensils::before {
    content: "\\f2e7";
  }

  .fa-cutlery::before {
    content: "\\f2e7";
  }

  .fa-arrow-up-wide-short::before {
    content: "\\f161";
  }

  .fa-sort-amount-up::before {
    content: "\\f161";
  }

  .fa-mill-sign::before {
    content: "\\e1ed";
  }

  .fa-bowl-rice::before {
    content: "\\e2eb";
  }

  .fa-skull::before {
    content: "\\f54c";
  }

  .fa-tower-broadcast::before {
    content: "\\f519";
  }

  .fa-broadcast-tower::before {
    content: "\\f519";
  }

  .fa-truck-pickup::before {
    content: "\\f63c";
  }

  .fa-up-long::before {
    content: "\\f30c";
  }

  .fa-long-arrow-alt-up::before {
    content: "\\f30c";
  }

  .fa-stop::before {
    content: "\\f04d";
  }

  .fa-code-merge::before {
    content: "\\f387";
  }

  .fa-upload::before {
    content: "\\f093";
  }

  .fa-hurricane::before {
    content: "\\f751";
  }

  .fa-mound::before {
    content: "\\e52d";
  }

  .fa-toilet-portable::before {
    content: "\\e583";
  }

  .fa-compact-disc::before {
    content: "\\f51f";
  }

  .fa-file-arrow-down::before {
    content: "\\f56d";
  }

  .fa-file-download::before {
    content: "\\f56d";
  }

  .fa-caravan::before {
    content: "\\f8ff";
  }

  .fa-shield-cat::before {
    content: "\\e572";
  }

  .fa-bolt::before {
    content: "\\f0e7";
  }

  .fa-zap::before {
    content: "\\f0e7";
  }

  .fa-glass-water::before {
    content: "\\e4f4";
  }

  .fa-oil-well::before {
    content: "\\e532";
  }

  .fa-vault::before {
    content: "\\e2c5";
  }

  .fa-mars::before {
    content: "\\f222";
  }

  .fa-toilet::before {
    content: "\\f7d8";
  }

  .fa-plane-circle-xmark::before {
    content: "\\e557";
  }

  .fa-yen-sign::before {
    content: "\\f157";
  }

  .fa-cny::before {
    content: "\\f157";
  }

  .fa-jpy::before {
    content: "\\f157";
  }

  .fa-rmb::before {
    content: "\\f157";
  }

  .fa-yen::before {
    content: "\\f157";
  }

  .fa-ruble-sign::before {
    content: "\\f158";
  }

  .fa-rouble::before {
    content: "\\f158";
  }

  .fa-rub::before {
    content: "\\f158";
  }

  .fa-ruble::before {
    content: "\\f158";
  }

  .fa-sun::before {
    content: "\\f185";
  }

  .fa-guitar::before {
    content: "\\f7a6";
  }

  .fa-face-laugh-wink::before {
    content: "\\f59c";
  }

  .fa-laugh-wink::before {
    content: "\\f59c";
  }

  .fa-horse-head::before {
    content: "\\f7ab";
  }

  .fa-bore-hole::before {
    content: "\\e4c3";
  }

  .fa-industry::before {
    content: "\\f275";
  }

  .fa-circle-down::before {
    content: "\\f358";
  }

  .fa-arrow-alt-circle-down::before {
    content: "\\f358";
  }

  .fa-arrows-turn-to-dots::before {
    content: "\\e4c1";
  }

  .fa-florin-sign::before {
    content: "\\e184";
  }

  .fa-arrow-down-short-wide::before {
    content: "\\f884";
  }

  .fa-sort-amount-desc::before {
    content: "\\f884";
  }

  .fa-sort-amount-down-alt::before {
    content: "\\f884";
  }

  .fa-less-than::before {
    content: "\\3c";
  }

  .fa-angle-down::before {
    content: "\\f107";
  }

  .fa-car-tunnel::before {
    content: "\\e4de";
  }

  .fa-head-side-cough::before {
    content: "\\e061";
  }

  .fa-grip-lines::before {
    content: "\\f7a4";
  }

  .fa-thumbs-down::before {
    content: "\\f165";
  }

  .fa-user-lock::before {
    content: "\\f502";
  }

  .fa-arrow-right-long::before {
    content: "\\f178";
  }

  .fa-long-arrow-right::before {
    content: "\\f178";
  }

  .fa-anchor-circle-xmark::before {
    content: "\\e4ac";
  }

  .fa-ellipsis::before {
    content: "\\f141";
  }

  .fa-ellipsis-h::before {
    content: "\\f141";
  }

  .fa-chess-pawn::before {
    content: "\\f443";
  }

  .fa-kit-medical::before {
    content: "\\f479";
  }

  .fa-first-aid::before {
    content: "\\f479";
  }

  .fa-person-through-window::before {
    content: "\\e5a9";
  }

  .fa-toolbox::before {
    content: "\\f552";
  }

  .fa-hands-holding-circle::before {
    content: "\\e4fb";
  }

  .fa-bug::before {
    content: "\\f188";
  }

  .fa-credit-card::before {
    content: "\\f09d";
  }

  .fa-credit-card-alt::before {
    content: "\\f09d";
  }

  .fa-car::before {
    content: "\\f1b9";
  }

  .fa-automobile::before {
    content: "\\f1b9";
  }

  .fa-hand-holding-hand::before {
    content: "\\e4f7";
  }

  .fa-book-open-reader::before {
    content: "\\f5da";
  }

  .fa-book-reader::before {
    content: "\\f5da";
  }

  .fa-mountain-sun::before {
    content: "\\e52f";
  }

  .fa-arrows-left-right-to-line::before {
    content: "\\e4ba";
  }

  .fa-dice-d20::before {
    content: "\\f6cf";
  }

  .fa-truck-droplet::before {
    content: "\\e58c";
  }

  .fa-file-circle-xmark::before {
    content: "\\e5a1";
  }

  .fa-temperature-arrow-up::before {
    content: "\\e040";
  }

  .fa-temperature-up::before {
    content: "\\e040";
  }

  .fa-medal::before {
    content: "\\f5a2";
  }

  .fa-bed::before {
    content: "\\f236";
  }

  .fa-square-h::before {
    content: "\\f0fd";
  }

  .fa-h-square::before {
    content: "\\f0fd";
  }

  .fa-podcast::before {
    content: "\\f2ce";
  }

  .fa-temperature-full::before {
    content: "\\f2c7";
  }

  .fa-temperature-4::before {
    content: "\\f2c7";
  }

  .fa-thermometer-4::before {
    content: "\\f2c7";
  }

  .fa-thermometer-full::before {
    content: "\\f2c7";
  }

  .fa-bell::before {
    content: "\\f0f3";
  }

  .fa-superscript::before {
    content: "\\f12b";
  }

  .fa-plug-circle-xmark::before {
    content: "\\e560";
  }

  .fa-star-of-life::before {
    content: "\\f621";
  }

  .fa-phone-slash::before {
    content: "\\f3dd";
  }

  .fa-paint-roller::before {
    content: "\\f5aa";
  }

  .fa-handshake-angle::before {
    content: "\\f4c4";
  }

  .fa-hands-helping::before {
    content: "\\f4c4";
  }

  .fa-location-dot::before {
    content: "\\f3c5";
  }

  .fa-map-marker-alt::before {
    content: "\\f3c5";
  }

  .fa-file::before {
    content: "\\f15b";
  }

  .fa-greater-than::before {
    content: "\\3e";
  }

  .fa-person-swimming::before {
    content: "\\f5c4";
  }

  .fa-swimmer::before {
    content: "\\f5c4";
  }

  .fa-arrow-down::before {
    content: "\\f063";
  }

  .fa-droplet::before {
    content: "\\f043";
  }

  .fa-tint::before {
    content: "\\f043";
  }

  .fa-eraser::before {
    content: "\\f12d";
  }

  .fa-earth-americas::before {
    content: "\\f57d";
  }

  .fa-earth::before {
    content: "\\f57d";
  }

  .fa-earth-america::before {
    content: "\\f57d";
  }

  .fa-globe-americas::before {
    content: "\\f57d";
  }

  .fa-person-burst::before {
    content: "\\e53b";
  }

  .fa-dove::before {
    content: "\\f4ba";
  }

  .fa-battery-empty::before {
    content: "\\f244";
  }

  .fa-battery-0::before {
    content: "\\f244";
  }

  .fa-socks::before {
    content: "\\f696";
  }

  .fa-inbox::before {
    content: "\\f01c";
  }

  .fa-section::before {
    content: "\\e447";
  }

  .fa-gauge-high::before {
    content: "\\f625";
  }

  .fa-tachometer-alt::before {
    content: "\\f625";
  }

  .fa-tachometer-alt-fast::before {
    content: "\\f625";
  }

  .fa-envelope-open-text::before {
    content: "\\f658";
  }

  .fa-hospital::before {
    content: "\\f0f8";
  }

  .fa-hospital-alt::before {
    content: "\\f0f8";
  }

  .fa-hospital-wide::before {
    content: "\\f0f8";
  }

  .fa-wine-bottle::before {
    content: "\\f72f";
  }

  .fa-chess-rook::before {
    content: "\\f447";
  }

  .fa-bars-staggered::before {
    content: "\\f550";
  }

  .fa-reorder::before {
    content: "\\f550";
  }

  .fa-stream::before {
    content: "\\f550";
  }

  .fa-dharmachakra::before {
    content: "\\f655";
  }

  .fa-hotdog::before {
    content: "\\f80f";
  }

  .fa-person-walking-with-cane::before {
    content: "\\f29d";
  }

  .fa-blind::before {
    content: "\\f29d";
  }

  .fa-drum::before {
    content: "\\f569";
  }

  .fa-ice-cream::before {
    content: "\\f810";
  }

  .fa-heart-circle-bolt::before {
    content: "\\e4fc";
  }

  .fa-fax::before {
    content: "\\f1ac";
  }

  .fa-paragraph::before {
    content: "\\f1dd";
  }

  .fa-check-to-slot::before {
    content: "\\f772";
  }

  .fa-vote-yea::before {
    content: "\\f772";
  }

  .fa-star-half::before {
    content: "\\f089";
  }

  .fa-boxes-stacked::before {
    content: "\\f468";
  }

  .fa-boxes::before {
    content: "\\f468";
  }

  .fa-boxes-alt::before {
    content: "\\f468";
  }

  .fa-link::before {
    content: "\\f0c1";
  }

  .fa-chain::before {
    content: "\\f0c1";
  }

  .fa-ear-listen::before {
    content: "\\f2a2";
  }

  .fa-assistive-listening-systems::before {
    content: "\\f2a2";
  }

  .fa-tree-city::before {
    content: "\\e587";
  }

  .fa-play::before {
    content: "\\f04b";
  }

  .fa-font::before {
    content: "\\f031";
  }

  .fa-rupiah-sign::before {
    content: "\\e23d";
  }

  .fa-magnifying-glass::before {
    content: "\\f002";
  }

  .fa-search::before {
    content: "\\f002";
  }

  .fa-table-tennis-paddle-ball::before {
    content: "\\f45d";
  }

  .fa-ping-pong-paddle-ball::before {
    content: "\\f45d";
  }

  .fa-table-tennis::before {
    content: "\\f45d";
  }

  .fa-person-dots-from-line::before {
    content: "\\f470";
  }

  .fa-diagnoses::before {
    content: "\\f470";
  }

  .fa-trash-can-arrow-up::before {
    content: "\\f82a";
  }

  .fa-trash-restore-alt::before {
    content: "\\f82a";
  }

  .fa-naira-sign::before {
    content: "\\e1f6";
  }

  .fa-cart-arrow-down::before {
    content: "\\f218";
  }

  .fa-walkie-talkie::before {
    content: "\\f8ef";
  }

  .fa-file-pen::before {
    content: "\\f31c";
  }

  .fa-file-edit::before {
    content: "\\f31c";
  }

  .fa-receipt::before {
    content: "\\f543";
  }

  .fa-square-pen::before {
    content: "\\f14b";
  }

  .fa-pen-square::before {
    content: "\\f14b";
  }

  .fa-pencil-square::before {
    content: "\\f14b";
  }

  .fa-suitcase-rolling::before {
    content: "\\f5c1";
  }

  .fa-person-circle-exclamation::before {
    content: "\\e53f";
  }

  .fa-chevron-down::before {
    content: "\\f078";
  }

  .fa-battery-full::before {
    content: "\\f240";
  }

  .fa-battery::before {
    content: "\\f240";
  }

  .fa-battery-5::before {
    content: "\\f240";
  }

  .fa-skull-crossbones::before {
    content: "\\f714";
  }

  .fa-code-compare::before {
    content: "\\e13a";
  }

  .fa-list-ul::before {
    content: "\\f0ca";
  }

  .fa-list-dots::before {
    content: "\\f0ca";
  }

  .fa-school-lock::before {
    content: "\\e56f";
  }

  .fa-tower-cell::before {
    content: "\\e585";
  }

  .fa-down-long::before {
    content: "\\f309";
  }

  .fa-long-arrow-alt-down::before {
    content: "\\f309";
  }

  .fa-ranking-star::before {
    content: "\\e561";
  }

  .fa-chess-king::before {
    content: "\\f43f";
  }

  .fa-person-harassing::before {
    content: "\\e549";
  }

  .fa-brazilian-real-sign::before {
    content: "\\e46c";
  }

  .fa-landmark-dome::before {
    content: "\\f752";
  }

  .fa-landmark-alt::before {
    content: "\\f752";
  }

  .fa-arrow-up::before {
    content: "\\f062";
  }

  .fa-tv::before {
    content: "\\f26c";
  }

  .fa-television::before {
    content: "\\f26c";
  }

  .fa-tv-alt::before {
    content: "\\f26c";
  }

  .fa-shrimp::before {
    content: "\\e448";
  }

  .fa-list-check::before {
    content: "\\f0ae";
  }

  .fa-tasks::before {
    content: "\\f0ae";
  }

  .fa-jug-detergent::before {
    content: "\\e519";
  }

  .fa-circle-user::before {
    content: "\\f2bd";
  }

  .fa-user-circle::before {
    content: "\\f2bd";
  }

  .fa-user-shield::before {
    content: "\\f505";
  }

  .fa-wind::before {
    content: "\\f72e";
  }

  .fa-car-burst::before {
    content: "\\f5e1";
  }

  .fa-car-crash::before {
    content: "\\f5e1";
  }

  .fa-y::before {
    content: "\\59";
  }

  .fa-person-snowboarding::before {
    content: "\\f7ce";
  }

  .fa-snowboarding::before {
    content: "\\f7ce";
  }

  .fa-truck-fast::before {
    content: "\\f48b";
  }

  .fa-shipping-fast::before {
    content: "\\f48b";
  }

  .fa-fish::before {
    content: "\\f578";
  }

  .fa-user-graduate::before {
    content: "\\f501";
  }

  .fa-circle-half-stroke::before {
    content: "\\f042";
  }

  .fa-adjust::before {
    content: "\\f042";
  }

  .fa-clapperboard::before {
    content: "\\e131";
  }

  .fa-circle-radiation::before {
    content: "\\f7ba";
  }

  .fa-radiation-alt::before {
    content: "\\f7ba";
  }

  .fa-baseball::before {
    content: "\\f433";
  }

  .fa-baseball-ball::before {
    content: "\\f433";
  }

  .fa-jet-fighter-up::before {
    content: "\\e518";
  }

  .fa-diagram-project::before {
    content: "\\f542";
  }

  .fa-project-diagram::before {
    content: "\\f542";
  }

  .fa-copy::before {
    content: "\\f0c5";
  }

  .fa-volume-xmark::before {
    content: "\\f6a9";
  }

  .fa-volume-mute::before {
    content: "\\f6a9";
  }

  .fa-volume-times::before {
    content: "\\f6a9";
  }

  .fa-hand-sparkles::before {
    content: "\\e05d";
  }

  .fa-grip::before {
    content: "\\f58d";
  }

  .fa-grip-horizontal::before {
    content: "\\f58d";
  }

  .fa-share-from-square::before {
    content: "\\f14d";
  }

  .fa-share-square::before {
    content: "\\f14d";
  }

  .fa-child-combatant::before {
    content: "\\e4e0";
  }

  .fa-child-rifle::before {
    content: "\\e4e0";
  }

  .fa-gun::before {
    content: "\\e19b";
  }

  .fa-square-phone::before {
    content: "\\f098";
  }

  .fa-phone-square::before {
    content: "\\f098";
  }

  .fa-plus::before {
    content: "\\2b";
  }

  .fa-add::before {
    content: "\\2b";
  }

  .fa-expand::before {
    content: "\\f065";
  }

  .fa-computer::before {
    content: "\\e4e5";
  }

  .fa-xmark::before {
    content: "\\f00d";
  }

  .fa-close::before {
    content: "\\f00d";
  }

  .fa-multiply::before {
    content: "\\f00d";
  }

  .fa-remove::before {
    content: "\\f00d";
  }

  .fa-times::before {
    content: "\\f00d";
  }

  .fa-arrows-up-down-left-right::before {
    content: "\\f047";
  }

  .fa-arrows::before {
    content: "\\f047";
  }

  .fa-chalkboard-user::before {
    content: "\\f51c";
  }

  .fa-chalkboard-teacher::before {
    content: "\\f51c";
  }

  .fa-peso-sign::before {
    content: "\\e222";
  }

  .fa-building-shield::before {
    content: "\\e4d8";
  }

  .fa-baby::before {
    content: "\\f77c";
  }

  .fa-users-line::before {
    content: "\\e592";
  }

  .fa-quote-left::before {
    content: "\\f10d";
  }

  .fa-quote-left-alt::before {
    content: "\\f10d";
  }

  .fa-tractor::before {
    content: "\\f722";
  }

  .fa-trash-arrow-up::before {
    content: "\\f829";
  }

  .fa-trash-restore::before {
    content: "\\f829";
  }

  .fa-arrow-down-up-lock::before {
    content: "\\e4b0";
  }

  .fa-lines-leaning::before {
    content: "\\e51e";
  }

  .fa-ruler-combined::before {
    content: "\\f546";
  }

  .fa-copyright::before {
    content: "\\f1f9";
  }

  .fa-equals::before {
    content: "\\3d";
  }

  .fa-blender::before {
    content: "\\f517";
  }

  .fa-teeth::before {
    content: "\\f62e";
  }

  .fa-shekel-sign::before {
    content: "\\f20b";
  }

  .fa-ils::before {
    content: "\\f20b";
  }

  .fa-shekel::before {
    content: "\\f20b";
  }

  .fa-sheqel::before {
    content: "\\f20b";
  }

  .fa-sheqel-sign::before {
    content: "\\f20b";
  }

  .fa-map::before {
    content: "\\f279";
  }

  .fa-rocket::before {
    content: "\\f135";
  }

  .fa-photo-film::before {
    content: "\\f87c";
  }

  .fa-photo-video::before {
    content: "\\f87c";
  }

  .fa-folder-minus::before {
    content: "\\f65d";
  }

  .fa-store::before {
    content: "\\f54e";
  }

  .fa-arrow-trend-up::before {
    content: "\\e098";
  }

  .fa-plug-circle-minus::before {
    content: "\\e55e";
  }

  .fa-sign-hanging::before {
    content: "\\f4d9";
  }

  .fa-sign::before {
    content: "\\f4d9";
  }

  .fa-bezier-curve::before {
    content: "\\f55b";
  }

  .fa-bell-slash::before {
    content: "\\f1f6";
  }

  .fa-tablet::before {
    content: "\\f3fb";
  }

  .fa-tablet-android::before {
    content: "\\f3fb";
  }

  .fa-school-flag::before {
    content: "\\e56e";
  }

  .fa-fill::before {
    content: "\\f575";
  }

  .fa-angle-up::before {
    content: "\\f106";
  }

  .fa-drumstick-bite::before {
    content: "\\f6d7";
  }

  .fa-holly-berry::before {
    content: "\\f7aa";
  }

  .fa-chevron-left::before {
    content: "\\f053";
  }

  .fa-bacteria::before {
    content: "\\e059";
  }

  .fa-hand-lizard::before {
    content: "\\f258";
  }

  .fa-notdef::before {
    content: "\\e1fe";
  }

  .fa-disease::before {
    content: "\\f7fa";
  }

  .fa-briefcase-medical::before {
    content: "\\f469";
  }

  .fa-genderless::before {
    content: "\\f22d";
  }

  .fa-chevron-right::before {
    content: "\\f054";
  }

  .fa-retweet::before {
    content: "\\f079";
  }

  .fa-car-rear::before {
    content: "\\f5de";
  }

  .fa-car-alt::before {
    content: "\\f5de";
  }

  .fa-pump-soap::before {
    content: "\\e06b";
  }

  .fa-video-slash::before {
    content: "\\f4e2";
  }

  .fa-battery-quarter::before {
    content: "\\f243";
  }

  .fa-battery-2::before {
    content: "\\f243";
  }

  .fa-radio::before {
    content: "\\f8d7";
  }

  .fa-baby-carriage::before {
    content: "\\f77d";
  }

  .fa-carriage-baby::before {
    content: "\\f77d";
  }

  .fa-traffic-light::before {
    content: "\\f637";
  }

  .fa-thermometer::before {
    content: "\\f491";
  }

  .fa-vr-cardboard::before {
    content: "\\f729";
  }

  .fa-hand-middle-finger::before {
    content: "\\f806";
  }

  .fa-percent::before {
    content: "\\25";
  }

  .fa-percentage::before {
    content: "\\25";
  }

  .fa-truck-moving::before {
    content: "\\f4df";
  }

  .fa-glass-water-droplet::before {
    content: "\\e4f5";
  }

  .fa-display::before {
    content: "\\e163";
  }

  .fa-face-smile::before {
    content: "\\f118";
  }

  .fa-smile::before {
    content: "\\f118";
  }

  .fa-thumbtack::before {
    content: "\\f08d";
  }

  .fa-thumb-tack::before {
    content: "\\f08d";
  }

  .fa-trophy::before {
    content: "\\f091";
  }

  .fa-person-praying::before {
    content: "\\f683";
  }

  .fa-pray::before {
    content: "\\f683";
  }

  .fa-hammer::before {
    content: "\\f6e3";
  }

  .fa-hand-peace::before {
    content: "\\f25b";
  }

  .fa-rotate::before {
    content: "\\f2f1";
  }

  .fa-sync-alt::before {
    content: "\\f2f1";
  }

  .fa-spinner::before {
    content: "\\f110";
  }

  .fa-robot::before {
    content: "\\f544";
  }

  .fa-peace::before {
    content: "\\f67c";
  }

  .fa-gears::before {
    content: "\\f085";
  }

  .fa-cogs::before {
    content: "\\f085";
  }

  .fa-warehouse::before {
    content: "\\f494";
  }

  .fa-arrow-up-right-dots::before {
    content: "\\e4b7";
  }

  .fa-splotch::before {
    content: "\\f5bc";
  }

  .fa-face-grin-hearts::before {
    content: "\\f584";
  }

  .fa-grin-hearts::before {
    content: "\\f584";
  }

  .fa-dice-four::before {
    content: "\\f524";
  }

  .fa-sim-card::before {
    content: "\\f7c4";
  }

  .fa-transgender::before {
    content: "\\f225";
  }

  .fa-transgender-alt::before {
    content: "\\f225";
  }

  .fa-mercury::before {
    content: "\\f223";
  }

  .fa-arrow-turn-down::before {
    content: "\\f149";
  }

  .fa-level-down::before {
    content: "\\f149";
  }

  .fa-person-falling-burst::before {
    content: "\\e547";
  }

  .fa-award::before {
    content: "\\f559";
  }

  .fa-ticket-simple::before {
    content: "\\f3ff";
  }

  .fa-ticket-alt::before {
    content: "\\f3ff";
  }

  .fa-building::before {
    content: "\\f1ad";
  }

  .fa-angles-left::before {
    content: "\\f100";
  }

  .fa-angle-double-left::before {
    content: "\\f100";
  }

  .fa-qrcode::before {
    content: "\\f029";
  }

  .fa-clock-rotate-left::before {
    content: "\\f1da";
  }

  .fa-history::before {
    content: "\\f1da";
  }

  .fa-face-grin-beam-sweat::before {
    content: "\\f583";
  }

  .fa-grin-beam-sweat::before {
    content: "\\f583";
  }

  .fa-file-export::before {
    content: "\\f56e";
  }

  .fa-arrow-right-from-file::before {
    content: "\\f56e";
  }

  .fa-shield::before {
    content: "\\f132";
  }

  .fa-shield-blank::before {
    content: "\\f132";
  }

  .fa-arrow-up-short-wide::before {
    content: "\\f885";
  }

  .fa-sort-amount-up-alt::before {
    content: "\\f885";
  }

  .fa-house-medical::before {
    content: "\\e3b2";
  }

  .fa-golf-ball-tee::before {
    content: "\\f450";
  }

  .fa-golf-ball::before {
    content: "\\f450";
  }

  .fa-circle-chevron-left::before {
    content: "\\f137";
  }

  .fa-chevron-circle-left::before {
    content: "\\f137";
  }

  .fa-house-chimney-window::before {
    content: "\\e00d";
  }

  .fa-pen-nib::before {
    content: "\\f5ad";
  }

  .fa-tent-arrow-turn-left::before {
    content: "\\e580";
  }

  .fa-tents::before {
    content: "\\e582";
  }

  .fa-wand-magic::before {
    content: "\\f0d0";
  }

  .fa-magic::before {
    content: "\\f0d0";
  }

  .fa-dog::before {
    content: "\\f6d3";
  }

  .fa-carrot::before {
    content: "\\f787";
  }

  .fa-moon::before {
    content: "\\f186";
  }

  .fa-wine-glass-empty::before {
    content: "\\f5ce";
  }

  .fa-wine-glass-alt::before {
    content: "\\f5ce";
  }

  .fa-cheese::before {
    content: "\\f7ef";
  }

  .fa-yin-yang::before {
    content: "\\f6ad";
  }

  .fa-music::before {
    content: "\\f001";
  }

  .fa-code-commit::before {
    content: "\\f386";
  }

  .fa-temperature-low::before {
    content: "\\f76b";
  }

  .fa-person-biking::before {
    content: "\\f84a";
  }

  .fa-biking::before {
    content: "\\f84a";
  }

  .fa-broom::before {
    content: "\\f51a";
  }

  .fa-shield-heart::before {
    content: "\\e574";
  }

  .fa-gopuram::before {
    content: "\\f664";
  }

  .fa-earth-oceania::before {
    content: "\\e47b";
  }

  .fa-globe-oceania::before {
    content: "\\e47b";
  }

  .fa-square-xmark::before {
    content: "\\f2d3";
  }

  .fa-times-square::before {
    content: "\\f2d3";
  }

  .fa-xmark-square::before {
    content: "\\f2d3";
  }

  .fa-hashtag::before {
    content: "\\23";
  }

  .fa-up-right-and-down-left-from-center::before {
    content: "\\f424";
  }

  .fa-expand-alt::before {
    content: "\\f424";
  }

  .fa-oil-can::before {
    content: "\\f613";
  }

  .fa-t::before {
    content: "\\54";
  }

  .fa-hippo::before {
    content: "\\f6ed";
  }

  .fa-chart-column::before {
    content: "\\e0e3";
  }

  .fa-infinity::before {
    content: "\\f534";
  }

  .fa-vial-circle-check::before {
    content: "\\e596";
  }

  .fa-person-arrow-down-to-line::before {
    content: "\\e538";
  }

  .fa-voicemail::before {
    content: "\\f897";
  }

  .fa-fan::before {
    content: "\\f863";
  }

  .fa-person-walking-luggage::before {
    content: "\\e554";
  }

  .fa-up-down::before {
    content: "\\f338";
  }

  .fa-arrows-alt-v::before {
    content: "\\f338";
  }

  .fa-cloud-moon-rain::before {
    content: "\\f73c";
  }

  .fa-calendar::before {
    content: "\\f133";
  }

  .fa-trailer::before {
    content: "\\e041";
  }

  .fa-bahai::before {
    content: "\\f666";
  }

  .fa-haykal::before {
    content: "\\f666";
  }

  .fa-sd-card::before {
    content: "\\f7c2";
  }

  .fa-dragon::before {
    content: "\\f6d5";
  }

  .fa-shoe-prints::before {
    content: "\\f54b";
  }

  .fa-circle-plus::before {
    content: "\\f055";
  }

  .fa-plus-circle::before {
    content: "\\f055";
  }

  .fa-face-grin-tongue-wink::before {
    content: "\\f58b";
  }

  .fa-grin-tongue-wink::before {
    content: "\\f58b";
  }

  .fa-hand-holding::before {
    content: "\\f4bd";
  }

  .fa-plug-circle-exclamation::before {
    content: "\\e55d";
  }

  .fa-link-slash::before {
    content: "\\f127";
  }

  .fa-chain-broken::before {
    content: "\\f127";
  }

  .fa-chain-slash::before {
    content: "\\f127";
  }

  .fa-unlink::before {
    content: "\\f127";
  }

  .fa-clone::before {
    content: "\\f24d";
  }

  .fa-person-walking-arrow-loop-left::before {
    content: "\\e551";
  }

  .fa-arrow-up-z-a::before {
    content: "\\f882";
  }

  .fa-sort-alpha-up-alt::before {
    content: "\\f882";
  }

  .fa-fire-flame-curved::before {
    content: "\\f7e4";
  }

  .fa-fire-alt::before {
    content: "\\f7e4";
  }

  .fa-tornado::before {
    content: "\\f76f";
  }

  .fa-file-circle-plus::before {
    content: "\\e494";
  }

  .fa-book-quran::before {
    content: "\\f687";
  }

  .fa-quran::before {
    content: "\\f687";
  }

  .fa-anchor::before {
    content: "\\f13d";
  }

  .fa-border-all::before {
    content: "\\f84c";
  }

  .fa-face-angry::before {
    content: "\\f556";
  }

  .fa-angry::before {
    content: "\\f556";
  }

  .fa-cookie-bite::before {
    content: "\\f564";
  }

  .fa-arrow-trend-down::before {
    content: "\\e097";
  }

  .fa-rss::before {
    content: "\\f09e";
  }

  .fa-feed::before {
    content: "\\f09e";
  }

  .fa-draw-polygon::before {
    content: "\\f5ee";
  }

  .fa-scale-balanced::before {
    content: "\\f24e";
  }

  .fa-balance-scale::before {
    content: "\\f24e";
  }

  .fa-gauge-simple-high::before {
    content: "\\f62a";
  }

  .fa-tachometer::before {
    content: "\\f62a";
  }

  .fa-tachometer-fast::before {
    content: "\\f62a";
  }

  .fa-shower::before {
    content: "\\f2cc";
  }

  .fa-desktop::before {
    content: "\\f390";
  }

  .fa-desktop-alt::before {
    content: "\\f390";
  }

  .fa-m::before {
    content: "\\4d";
  }

  .fa-table-list::before {
    content: "\\f00b";
  }

  .fa-th-list::before {
    content: "\\f00b";
  }

  .fa-comment-sms::before {
    content: "\\f7cd";
  }

  .fa-sms::before {
    content: "\\f7cd";
  }

  .fa-book::before {
    content: "\\f02d";
  }

  .fa-user-plus::before {
    content: "\\f234";
  }

  .fa-check::before {
    content: "\\f00c";
  }

  .fa-battery-three-quarters::before {
    content: "\\f241";
  }

  .fa-battery-4::before {
    content: "\\f241";
  }

  .fa-house-circle-check::before {
    content: "\\e509";
  }

  .fa-angle-left::before {
    content: "\\f104";
  }

  .fa-diagram-successor::before {
    content: "\\e47a";
  }

  .fa-truck-arrow-right::before {
    content: "\\e58b";
  }

  .fa-arrows-split-up-and-left::before {
    content: "\\e4bc";
  }

  .fa-hand-fist::before {
    content: "\\f6de";
  }

  .fa-fist-raised::before {
    content: "\\f6de";
  }

  .fa-cloud-moon::before {
    content: "\\f6c3";
  }

  .fa-briefcase::before {
    content: "\\f0b1";
  }

  .fa-person-falling::before {
    content: "\\e546";
  }

  .fa-image-portrait::before {
    content: "\\f3e0";
  }

  .fa-portrait::before {
    content: "\\f3e0";
  }

  .fa-user-tag::before {
    content: "\\f507";
  }

  .fa-rug::before {
    content: "\\e569";
  }

  .fa-earth-europe::before {
    content: "\\f7a2";
  }

  .fa-globe-europe::before {
    content: "\\f7a2";
  }

  .fa-cart-flatbed-suitcase::before {
    content: "\\f59d";
  }

  .fa-luggage-cart::before {
    content: "\\f59d";
  }

  .fa-rectangle-xmark::before {
    content: "\\f410";
  }

  .fa-rectangle-times::before {
    content: "\\f410";
  }

  .fa-times-rectangle::before {
    content: "\\f410";
  }

  .fa-window-close::before {
    content: "\\f410";
  }

  .fa-baht-sign::before {
    content: "\\e0ac";
  }

  .fa-book-open::before {
    content: "\\f518";
  }

  .fa-book-journal-whills::before {
    content: "\\f66a";
  }

  .fa-journal-whills::before {
    content: "\\f66a";
  }

  .fa-handcuffs::before {
    content: "\\e4f8";
  }

  .fa-triangle-exclamation::before {
    content: "\\f071";
  }

  .fa-exclamation-triangle::before {
    content: "\\f071";
  }

  .fa-warning::before {
    content: "\\f071";
  }

  .fa-database::before {
    content: "\\f1c0";
  }

  .fa-share::before {
    content: "\\f064";
  }

  .fa-arrow-turn-right::before {
    content: "\\f064";
  }

  .fa-mail-forward::before {
    content: "\\f064";
  }

  .fa-bottle-droplet::before {
    content: "\\e4c4";
  }

  .fa-mask-face::before {
    content: "\\e1d7";
  }

  .fa-hill-rockslide::before {
    content: "\\e508";
  }

  .fa-right-left::before {
    content: "\\f362";
  }

  .fa-exchange-alt::before {
    content: "\\f362";
  }

  .fa-paper-plane::before {
    content: "\\f1d8";
  }

  .fa-road-circle-exclamation::before {
    content: "\\e565";
  }

  .fa-dungeon::before {
    content: "\\f6d9";
  }

  .fa-align-right::before {
    content: "\\f038";
  }

  .fa-money-bill-1-wave::before {
    content: "\\f53b";
  }

  .fa-money-bill-wave-alt::before {
    content: "\\f53b";
  }

  .fa-life-ring::before {
    content: "\\f1cd";
  }

  .fa-hands::before {
    content: "\\f2a7";
  }

  .fa-sign-language::before {
    content: "\\f2a7";
  }

  .fa-signing::before {
    content: "\\f2a7";
  }

  .fa-calendar-day::before {
    content: "\\f783";
  }

  .fa-water-ladder::before {
    content: "\\f5c5";
  }

  .fa-ladder-water::before {
    content: "\\f5c5";
  }

  .fa-swimming-pool::before {
    content: "\\f5c5";
  }

  .fa-arrows-up-down::before {
    content: "\\f07d";
  }

  .fa-arrows-v::before {
    content: "\\f07d";
  }

  .fa-face-grimace::before {
    content: "\\f57f";
  }

  .fa-grimace::before {
    content: "\\f57f";
  }

  .fa-wheelchair-move::before {
    content: "\\e2ce";
  }

  .fa-wheelchair-alt::before {
    content: "\\e2ce";
  }

  .fa-turn-down::before {
    content: "\\f3be";
  }

  .fa-level-down-alt::before {
    content: "\\f3be";
  }

  .fa-person-walking-arrow-right::before {
    content: "\\e552";
  }

  .fa-square-envelope::before {
    content: "\\f199";
  }

  .fa-envelope-square::before {
    content: "\\f199";
  }

  .fa-dice::before {
    content: "\\f522";
  }

  .fa-bowling-ball::before {
    content: "\\f436";
  }

  .fa-brain::before {
    content: "\\f5dc";
  }

  .fa-bandage::before {
    content: "\\f462";
  }

  .fa-band-aid::before {
    content: "\\f462";
  }

  .fa-calendar-minus::before {
    content: "\\f272";
  }

  .fa-circle-xmark::before {
    content: "\\f057";
  }

  .fa-times-circle::before {
    content: "\\f057";
  }

  .fa-xmark-circle::before {
    content: "\\f057";
  }

  .fa-gifts::before {
    content: "\\f79c";
  }

  .fa-hotel::before {
    content: "\\f594";
  }

  .fa-earth-asia::before {
    content: "\\f57e";
  }

  .fa-globe-asia::before {
    content: "\\f57e";
  }

  .fa-id-card-clip::before {
    content: "\\f47f";
  }

  .fa-id-card-alt::before {
    content: "\\f47f";
  }

  .fa-magnifying-glass-plus::before {
    content: "\\f00e";
  }

  .fa-search-plus::before {
    content: "\\f00e";
  }

  .fa-thumbs-up::before {
    content: "\\f164";
  }

  .fa-user-clock::before {
    content: "\\f4fd";
  }

  .fa-hand-dots::before {
    content: "\\f461";
  }

  .fa-allergies::before {
    content: "\\f461";
  }

  .fa-file-invoice::before {
    content: "\\f570";
  }

  .fa-window-minimize::before {
    content: "\\f2d1";
  }

  .fa-mug-saucer::before {
    content: "\\f0f4";
  }

  .fa-coffee::before {
    content: "\\f0f4";
  }

  .fa-brush::before {
    content: "\\f55d";
  }

  .fa-mask::before {
    content: "\\f6fa";
  }

  .fa-magnifying-glass-minus::before {
    content: "\\f010";
  }

  .fa-search-minus::before {
    content: "\\f010";
  }

  .fa-ruler-vertical::before {
    content: "\\f548";
  }

  .fa-user-large::before {
    content: "\\f406";
  }

  .fa-user-alt::before {
    content: "\\f406";
  }

  .fa-train-tram::before {
    content: "\\e5b4";
  }

  .fa-user-nurse::before {
    content: "\\f82f";
  }

  .fa-syringe::before {
    content: "\\f48e";
  }

  .fa-cloud-sun::before {
    content: "\\f6c4";
  }

  .fa-stopwatch-20::before {
    content: "\\e06f";
  }

  .fa-square-full::before {
    content: "\\f45c";
  }

  .fa-magnet::before {
    content: "\\f076";
  }

  .fa-jar::before {
    content: "\\e516";
  }

  .fa-note-sticky::before {
    content: "\\f249";
  }

  .fa-sticky-note::before {
    content: "\\f249";
  }

  .fa-bug-slash::before {
    content: "\\e490";
  }

  .fa-arrow-up-from-water-pump::before {
    content: "\\e4b6";
  }

  .fa-bone::before {
    content: "\\f5d7";
  }

  .fa-user-injured::before {
    content: "\\f728";
  }

  .fa-face-sad-tear::before {
    content: "\\f5b4";
  }

  .fa-sad-tear::before {
    content: "\\f5b4";
  }

  .fa-plane::before {
    content: "\\f072";
  }

  .fa-tent-arrows-down::before {
    content: "\\e581";
  }

  .fa-exclamation::before {
    content: "\\21";
  }

  .fa-arrows-spin::before {
    content: "\\e4bb";
  }

  .fa-print::before {
    content: "\\f02f";
  }

  .fa-turkish-lira-sign::before {
    content: "\\e2bb";
  }

  .fa-try::before {
    content: "\\e2bb";
  }

  .fa-turkish-lira::before {
    content: "\\e2bb";
  }

  .fa-dollar-sign::before {
    content: "\\24";
  }

  .fa-dollar::before {
    content: "\\24";
  }

  .fa-usd::before {
    content: "\\24";
  }

  .fa-x::before {
    content: "\\58";
  }

  .fa-magnifying-glass-dollar::before {
    content: "\\f688";
  }

  .fa-search-dollar::before {
    content: "\\f688";
  }

  .fa-users-gear::before {
    content: "\\f509";
  }

  .fa-users-cog::before {
    content: "\\f509";
  }

  .fa-person-military-pointing::before {
    content: "\\e54a";
  }

  .fa-building-columns::before {
    content: "\\f19c";
  }

  .fa-bank::before {
    content: "\\f19c";
  }

  .fa-institution::before {
    content: "\\f19c";
  }

  .fa-museum::before {
    content: "\\f19c";
  }

  .fa-university::before {
    content: "\\f19c";
  }

  .fa-umbrella::before {
    content: "\\f0e9";
  }

  .fa-trowel::before {
    content: "\\e589";
  }

  .fa-d::before {
    content: "\\44";
  }

  .fa-stapler::before {
    content: "\\e5af";
  }

  .fa-masks-theater::before {
    content: "\\f630";
  }

  .fa-theater-masks::before {
    content: "\\f630";
  }

  .fa-kip-sign::before {
    content: "\\e1c4";
  }

  .fa-hand-point-left::before {
    content: "\\f0a5";
  }

  .fa-handshake-simple::before {
    content: "\\f4c6";
  }

  .fa-handshake-alt::before {
    content: "\\f4c6";
  }

  .fa-jet-fighter::before {
    content: "\\f0fb";
  }

  .fa-fighter-jet::before {
    content: "\\f0fb";
  }

  .fa-square-share-nodes::before {
    content: "\\f1e1";
  }

  .fa-share-alt-square::before {
    content: "\\f1e1";
  }

  .fa-barcode::before {
    content: "\\f02a";
  }

  .fa-plus-minus::before {
    content: "\\e43c";
  }

  .fa-video::before {
    content: "\\f03d";
  }

  .fa-video-camera::before {
    content: "\\f03d";
  }

  .fa-graduation-cap::before {
    content: "\\f19d";
  }

  .fa-mortar-board::before {
    content: "\\f19d";
  }

  .fa-hand-holding-medical::before {
    content: "\\e05c";
  }

  .fa-person-circle-check::before {
    content: "\\e53e";
  }

  .fa-turn-up::before {
    content: "\\f3bf";
  }

  .fa-level-up-alt::before {
    content: "\\f3bf";
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
`;var N=class{};N.map=(e,t,n)=>(e-t[0])*(n[1]-n[0])/(t[1]-t[0])+n[0],N.clamp=(e,t)=>Math.min(Math.max(e,t[0]),t[1]),N.round=(e,t)=>Number(Math.round(Number(e+"e"+t))+"e-"+t);var _=class{static Instance(){return this._instance||(this._instance=new this)}static isHexCode(e){return e.match(/^#[0-9a-f]{6}/i)}static getPropertyName(e,t){let n={};return Object.keys(e).map(o=>n[o]=o),t(n)}static getStoredValueOrDefault(e){var t;return(t=localStorage.getItem(e))!=null?t:this.defaultConfig[e]}static set config(e){Object.keys(e).forEach(t=>{localStorage.setItem(t,e[t].toString())})}static get config(){return{accidentalMode:this.accidentalMode,frequencyOfA:this.frequencyOfA,debugMode:"false",primary:this.getColor("primary"),highlight:this.getColor("highlight"),background:this.getColor("background"),algorithm:this.algorithm}}static get debugMode(){return Boolean(this.getStoredValueOrDefault("debugMode"))}static set debugMode(e){localStorage.setItem(this.getPropertyName(this.defaultConfig,t=>t.debugMode),e.toString())}static set accidentalMode(e){localStorage.setItem(this.getPropertyName(this.defaultConfig,t=>t.accidentalMode),e.toString())}static get accidentalMode(){return Number(this.getStoredValueOrDefault("accidentalMode"))}static set frequencyOfA(e){e=N.clamp(e,[this.ALowerBoundFreq,this.AUpperBoundFreq]),localStorage.setItem(this.getPropertyName(this.defaultConfig,t=>t.frequencyOfA),e.toString())}static get frequencyOfA(){return Number(this.getStoredValueOrDefault("frequencyOfA"))}static setColor(e,t){this.isHexCode(t)&&localStorage.setItem(this.getPropertyName(this.defaultConfig,n=>n[e]),t)}static getColor(e){return this.getStoredValueOrDefault(e)}static set algorithm(e){localStorage.setItem(this.getPropertyName(this.defaultConfig,t=>t.algorithm),e)}static get algorithm(){return this.getStoredValueOrDefault("algorithm")}};_.defaultConfig={accidentalMode:1,frequencyOfA:440,debugMode:"true",primary:"#FF7A00",highlight:"#FFFFFF",background:"#000000",algorithm:"McLeod"},_.ALowerBoundFreq=415,_.AUpperBoundFreq=466;var $n=T`
    :root {
        --doc-height: 100%;
    }

    :host {
        --primary-color: ${_e(_.defaultConfig.primary)};
        --background-color: ${_e(_.defaultConfig.background)};
        --highlight-color: ${_e(_.defaultConfig.highlight)};
        --font-family: "Archivo Black", sans-serif;

        // Set some defaults
        background-color: var(--background-color, black);
        color: var(--primary-color, orange);
        font-family: var(--font-family);
    }

    .app-body {
        width: 100%;
        height: 100vh; /* fallback for Js load */
        height: var(--doc-height);
        background-color: var(--background-color, black);
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

    .icon {
        z-index: 2;
        position: absolute;
        right: 0%;
        top: 0%;
        color: var(--highlight-color);
        font-size: 3em;
    }
`,Me=class extends ${constructor(){super(...arguments);this.showSettings=!1}connectedCallback(){super.connectedCallback(),this.calculateDocumentHeight(),this.style.setProperty("--primary-color",_.getColor("primary")),this.style.setProperty("--highlight-color",_.getColor("highlight")),this.style.setProperty("--background-color",_.getColor("background"))}calculateDocumentHeight(){let e=()=>{document.documentElement.style.setProperty("--doc-height",`${window.innerHeight}px`)};window.addEventListener("resize",e),e()}refreshTheme(e){this.style.setProperty("--"+e.color+"-color",e.value)}toggleSettings(){this.showSettings=!this.showSettings}renderSettings(){return this.showSettings?S`
            <tn-settings @theme-changed="${this.refreshTheme}"></tn-settings>`:q}render(){return S`
            <div class="app-body">
                <div class="app-content">
                    <div class="icon" @click="${this.toggleSettings}"><i
                            class="${this.showSettings?"far fa-circle-xmark":"fa fa-gear"}"></i></div>
                    <tn-tuner></tn-tuner>
                    ${this.renderSettings()}
                </div>
            </div>
        `}};Me.styles=[$n,U],x([C()],Me.prototype,"showSettings",2),Me=x([P("tn-app")],Me);var Ut={};B(Ut,{ExperimentalSettingsComponent:()=>Fe});var It={};B(It,{SettingsComponent:()=>Ve,SettingsComponentStyles:()=>ie});var ie=T`
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
        background-color: var(--background-color);
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: var(--highlight-color);
    }

    input:checked + .slider {
        background-color: var(--primary-color);
    }

    input:focus + .slider {
        box-shadow: 0 0 1px var(--background-color);
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
        background: var(--background-color);
        height: 0.5rem;
    }

    /******** Firefox ********/

    input[type="range"]::-moz-range-track {
        background: var(--background-color);
        height: 0.5rem;
    }

    /***** Chrome, Safari, Opera, and Edge Chromium *****/

    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        margin-top: -12px; /* Centers thumb on the track */
        background-color: var(--primary-color);
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
        background: var(--background-color);
        color: var(--highlight-color);
        align-self: stretch;
        border-radius: 1em;
        font-family: var(--font-family);
    }

    select {
        border: none;
        background: var(--background-color);
        color: var(--highlight-color);
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
        color: var(--highlight-color);
    }

    .setting > .header {
        padding-bottom: 1.5em;
    }

    /* Hide scrollbar for Chrome, Safari and Opera */

    .row input, select {
        font-size: 0.75em;
        margin-inline: 1em;
        padding-inline: 1em;
    }
`,Ve=class extends ${constructor(){super()}render(){return S`
            <tn-modal>
                <div slot="header">Settings</div>
                <div slot="content">
                    <tn-general-settings></tn-general-settings>
                    <tn-theme-settings></tn-theme-settings>
                    <tn-experimental-settings></tn-experimental-settings>
                </div>
            </tn-modal>
        `}};Ve.styles=[ie,U],Ve=x([P("tn-settings")],Ve);var Po=$t(Co()),Ce=class{_inputLength;_fft;_bufferSupplier;_paddedInputBuffer;_transformBuffer;_inverseBuffer;static forFloat32Array(e){return new Ce(e,t=>new Float32Array(t))}static forFloat64Array(e){return new Ce(e,t=>new Float64Array(t))}static forNumberArray(e){return new Ce(e,t=>Array(t))}constructor(e,t){if(e<1)throw new Error("Input length must be at least one");this._inputLength=e,this._fft=new Po.default(Mn(2*e)),this._bufferSupplier=t,this._paddedInputBuffer=this._bufferSupplier(this._fft.size),this._transformBuffer=this._bufferSupplier(2*this._fft.size),this._inverseBuffer=this._bufferSupplier(2*this._fft.size)}get inputLength(){return this._inputLength}autocorrelate(e,t=this._bufferSupplier(e.length)){if(e.length!==this._inputLength)throw new Error(`Input must have length ${this._inputLength} but had length ${e.length}`);for(let o=0;o<e.length;o++)this._paddedInputBuffer[o]=e[o];for(let o=e.length;o<this._paddedInputBuffer.length;o++)this._paddedInputBuffer[o]=0;this._fft.realTransform(this._transformBuffer,this._paddedInputBuffer),this._fft.completeSpectrum(this._transformBuffer);let n=this._transformBuffer;for(let o=0;o<n.length;o+=2)n[o]=n[o]*n[o]+n[o+1]*n[o+1],n[o+1]=0;this._fft.inverseTransform(this._inverseBuffer,this._transformBuffer);for(let o=0;o<e.length;o++)t[o]=this._inverseBuffer[2*o];return t}};function En(r){let e=[],t=!1,n=-1/0,o=-1;for(let a=1;a<r.length-1;a++)r[a-1]<=0&&r[a]>0?(t=!0,o=a,n=r[a]):r[a-1]>0&&r[a]<=0?(t=!1,o!==-1&&e.push(o)):t&&r[a]>n&&(n=r[a],o=a);return e}function qn(r,e){let[t,n,o]=[r-1,r,r+1],[a,f,c]=[e[t],e[n],e[o]],s=a/2-f+c/2,i=-(a/2)*(n+o)+f*(t+o)-c/2*(t+n),h=a*n*o/2-f*t*o+c*t*n/2,b=-i/(2*s),l=s*b*b+i*b+h;return[b,l]}var he=class{_autocorrelator;_nsdfBuffer;_clarityThreshold=.9;static forFloat32Array(e){return new he(e,t=>new Float32Array(t))}static forFloat64Array(e){return new he(e,t=>new Float64Array(t))}static forNumberArray(e){return new he(e,t=>Array(t))}constructor(e,t){this._autocorrelator=new Ce(e,t),this._nsdfBuffer=t(e)}get inputLength(){return this._autocorrelator.inputLength}findPitch(e,t){this._nsdf(e);let n=En(this._nsdfBuffer);if(n.length===0)return[0,0];let o=Math.max(...n.map(s=>this._nsdfBuffer[s])),a=n.find(s=>this._nsdfBuffer[s]>=this._clarityThreshold*o),[f,c]=qn(a,this._nsdfBuffer);return[t/f,Math.min(c,1)]}_nsdf(e){this._autocorrelator.autocorrelate(e,this._nsdfBuffer);let t=2*this._nsdfBuffer[0],n;for(n=0;n<this._nsdfBuffer.length&&t>0;n++)this._nsdfBuffer[n]=2*this._nsdfBuffer[n]/t,t-=e[n]**2+e[e.length-n-1]**2;for(;n<this._nsdfBuffer.length;n++)this._nsdfBuffer[n]=0}};function Mn(r){return r--,r|=r>>1,r|=r>>2,r|=r>>4,r|=r>>8,r|=r>>16,r++,r}var Pe=$t(Bo()),Vo=["McLeod","YIN","AMDF","Dynamic Wavelet"],Rt=class{constructor(){this.pitch=-1;this.volume=-1;this.clarity=-1}},Ot=class{constructor(e){this.detector=he.forFloat32Array(e.analyserNode.fftSize)}detect(e){let t=new Float32Array(this.detector.inputLength);e.analyserNode.getFloatTimeDomainData(t);let n=new Rt;[n.pitch,n.clarity]=this.detector.findPitch(t,e.audioContext.sampleRate);let o=t.reduce((a,f)=>a+f*f,0);return n.volume=Math.sqrt(o/t.length),n}},dt=class{detect(e){let t=new Float32Array(2048);e.analyserNode.getFloatTimeDomainData(t);let n=new Rt;n.pitch=this.detector(t),n.clarity=1;let o=t.reduce((a,f)=>a+f*f,0);return n.volume=Math.sqrt(o/t.length),n}},Lt=class extends dt{constructor(){super();this.detector=Pe.YIN()}},jt=class extends dt{constructor(){super();this.detector=Pe.AMDF()}},Dt=class extends dt{constructor(){super();this.detector=Pe.DynamicWavelet()}};var Fe=class extends ${constructor(){super();this.algorithm=_.algorithm}updateAlgorithm(e){let t=e.target.value;this.algorithm=t,_.algorithm=t}render(){return S`
                    <tn-accordion>
                        <div slot="header">Experimental</div>
                        <div slot="content">
                            <div class="row">
                                <label>Pitch Detection Algorithm</label>
                                <select @input="${this.updateAlgorithm}">
                                    ${Vo.map(e=>S`
                                        <option .selected="${e===this.algorithm}" .value="${e}">${e}</option>
                                    `)}
                                </select>
                            </div>
                        </div>
                    </tn-accordion>
        `}};Fe.styles=[ie,U],x([te()],Fe.prototype,"algorithm",2),Fe=x([P("tn-experimental-settings")],Fe);var Ht={};B(Ht,{GeneralSettingsComponent:()=>me});var me=class extends ${constructor(){super();this.frequencyOfA=_.frequencyOfA;this.accidentalMode=_.accidentalMode}updateAccidentalMode(e){let t=e.target.checked===!1?1:0;this.accidentalMode=t,_.accidentalMode=t}resetFrequencyOfA(){this.frequencyOfA=_.defaultConfig.frequencyOfA,_.frequencyOfA=_.defaultConfig.frequencyOfA}updateFrequencyOfA(e){let t=Number(e.target.value);this.frequencyOfA=t,_.frequencyOfA=t}render(){return S`
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
                                   max="${_.AUpperBoundFreq}"
                                   min="${_.ALowerBoundFreq}"
                                   .value="${this.frequencyOfA}"
                                   @input=${this.updateFrequencyOfA}>
                            <label style="flex: 1" for="frequencyOfA">
                                A = ${this.frequencyOfA}HZ
                            </label>
                            ${this.frequencyOfA!==_.defaultConfig.frequencyOfA?S`
                                <i class="fa fa-undo" @click=${this.resetFrequencyOfA}></i>`:q}
                        </div>
                    </div>
                </tn-accordion>
    `}};me.styles=[ie,U],x([te()],me.prototype,"frequencyOfA",2),x([te()],me.prototype,"accidentalMode",2),me=x([P("tn-general-settings")],me);var Yt={};B(Yt,{ThemeSettingsComponent:()=>se});var ht=class extends Event{constructor(e,t){super("theme-changed",{bubbles:!0,composed:!0});this.color=e,this.value=t}};var Bn=T`
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
        background-color: var(--primary-color);
    }

    .color-ball.highlight {
        background-color: var(--highlight-color);
    }

    .color-ball.background {
        background-color: var(--background-color);
    }

    .color-label {
        flex: 1;
    }
`,se=class extends ${constructor(){super();this.primaryColor=_.getColor("primary");this.highlightColor=_.getColor("highlight");this.backgroundColor=_.getColor("background")}updateColor(e,t){let n=e.target.value;_.setColor(t,n),this.updateLocalColor(t,n),this.dispatchEvent(new ht(t,n))}resetColor(e){_.setColor(e,_.defaultConfig[e]),this.updateLocalColor(e,_.defaultConfig[e]),this.dispatchEvent(new ht(e,_.defaultConfig[e]))}updateLocalColor(e,t){switch(e){case"primary":this.primaryColor=t;break;case"background":this.backgroundColor=t;break;case"highlight":this.highlightColor=t;break}}render(){return S`
            <tn-accordion>
                <div slot="header">Theme</div>
                <div slot="content">
                    <div class="row color-row">
                        <div class="color-ball primary"></div>
                        <input id="primary-color" type="text" maxlength="7" size="7"
                               .value="${this.primaryColor}"
                               @input="${e=>this.updateColor(e,"primary")}">
                        <label for="primary-color" class="color-label">Primary</label>
                        ${this.primaryColor!==_.defaultConfig.primary?S`
                            <i class="fa fa-undo" @click=${()=>this.resetColor("primary")}></i>`:q}
                    </div>
                    <div class="row color-row">
                        <div class="color-ball highlight"></div>
                        <input id="highlight-color" type="text" maxlength="7" size="7"
                               .value="${this.highlightColor}"
                               @input="${e=>this.updateColor(e,"highlight")}"
                        >
                        <label for="highlight-color" class="color-label">Highlight</label>
                        ${this.highlightColor!==_.defaultConfig.highlight?S`
                            <i class="fa fa-undo" @click=${()=>this.resetColor("highlight")}></i>`:q}
                    </div>
                    <div class="row color-row">
                        <div class="color-ball background"></div>
                        <input id="background-color" type="text" maxlength="7" size="7"
                               .value="${this.backgroundColor}"
                               @input="${e=>this.updateColor(e,"background")}"
                        >
                        <label for="background-color" class="color-label">Background</label>
                        ${this.backgroundColor!==_.defaultConfig.background?S`
                            <i class="fa fa-undo" @click=${()=>this.resetColor("background")}></i>`:q}
                    </div>
                </div>
            </tn-accordion>
        `}};se.styles=[Bn,ie,U],x([te()],se.prototype,"primaryColor",2),x([te()],se.prototype,"highlightColor",2),x([te()],se.prototype,"backgroundColor",2),se=x([P("tn-theme-settings")],se);var Bt={};B(Bt,{AccordionComponent:()=>Ge});var Vn=T`
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
        background-color: rgba(255, 255, 255, 0.3);
        color: var(--highlight-color);
        font-size: 2em;

        margin-block: 1em;
        margin-inline: 1em;
        padding-block-end: 0.1px;
    }

    .content {
        padding-inline: 1em;
        padding-block-end: 1em;
        border-radius: 1em;
        color: var(--highlight-color);
    }
`,Ge=class extends ${render(){return S`
            <details>
                <summary class="header">
                    <slot name="header"></slot>
                </summary>
                <div class="content">
                    <slot name="content"></slot>
                </div>
            </details>
        `}};Ge.styles=[Vn,U],Ge=x([P("tn-accordion")],Ge);var Vt={};B(Vt,{SettingsComponent:()=>Xe});var Wn=T`
    .modal {
        width: 110%;
        height: 110%;
        right: -5%;
        top: -5%;
        position: absolute;
        z-index: 1;

        backdrop-filter: blur(3em);
        -webkit-backdrop-filter: blur(3em); /* Safari */
        overflow-y: scroll;

        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */

        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
    }

    .scroll-shadow {
        width: 110%;
        height: 111%;
        right: -5%;
        top: -5%;
        position: absolute;
        z-index: 1;
        box-shadow: inset 0 0 0 2em var(--background-color);
        pointer-events: none;
    }

    .header {
        font-size: 3em;
    }

    .row {
        display: flex;
        margin-block: 1em;
        margin-inline: 1em;
    }

    /* Hide scrollbar for Chrome, Safari and Opera */

    .modal::-webkit-scrollbar {
        display: none;
    }
`,Xe=class extends ${render(){return S`
            <div class="modal">
                <slot class="header row" name="header"></slot>
                <slot name="content"></slot>
            </div>
            <div class="scroll-shadow"></div>
        `}};Xe.styles=[Wn],Xe=x([P("tn-modal")],Xe);var Wt={};B(Wt,{snapshots:()=>Wo});var Wo={};Wo["TunerComponent should equal snapshot"]=`<tn-tuner>
</tn-tuner>
`;var Zt={};B(Zt,{TunerNoteComponent:()=>H});var Te=12,Kn=["C","C","D","D","E","F","F","G","G","A","A","B"],Zn=[1,3,6,8,10],Jn=["C","D","D","E","E","F","G","G","A","A","B","B"],pe;(function(t){t[t.sharp=0]="sharp",t[t.flat=1]="flat"})(pe||(pe={}));var V=class{get letter(){return this.lookupLetter()}get accidental(){return this.lookupAccidental()}constructor(e){this.index=N.clamp(e,[0,127]),this.octave=Math.floor(e/Te)-1}lookupLetter(){return _.accidentalMode?Kn[this.index%Te]:Jn[this.index%Te]}lookupAccidental(){return Zn.includes(this.index%Te)?_.accidentalMode?"#":"\u266D":""}},Kt=new V(0),Qn=new V(69),Ko=new V(127),ze=class{static freqToNote(e){if(e<this.noteToPitch(Kt))return Kt;if(e>this.noteToPitch(Ko))return Ko;let t=Math.round(Te*Math.log2(e/this.noteToPitch(Kt)));if(isNaN(t))throw new Error("calculated frequency produced NaN");return new V(t)}static noteToPitch(e){let t=e.index-Qn.index,n=St(2,1/Te);return _.frequencyOfA*St(n,t)}};var Gn=T`
    :host {
        font-family: var(--font-family);
    }

    .tuner-note-letter {
        stroke: var(--highlight-color);
        stroke-width: 1;
        fill: var(--background-color);
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
        stroke-width: 0.5;
        stroke-linecap: round;
        fill: var(--background-color);
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
        stroke: var(--highlight-color);
        stroke-width: 0.5;
        stroke-linecap: round;
        fill: var(--background-color);
        font-size: 1em;
    }

    .tuner-note-octave-mask {
        stroke: black;
        stroke-width: 0.5;
        fill: white;
        font-size: 1em;
    }

    .tuner-liquid {
        fill: var(--primary-color);
    }
`,H=class extends ${constructor(){super();this.note=new V(0);this.clarity=1;this.accuracy=0;this.accuracyBuffer=[H.bufferSize];this.heightAnimator=new ut}updateHeightAnimation(){if(this.heightAnimatorReference)this.heightAnimator.reference=this.heightAnimatorReference;else return;let e=N.map(this.accuracy,[0,1],[90,25]);this.heightAnimator.to=e+""}update(e){super.update(e),!isNaN(Number(e.get("accuracy")))&&this.updateHeightAnimation()}render(){return S`
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
        `}};H.styles=Gn,H.bufferSize=25,x([C()],H.prototype,"note",2),x([C()],H.prototype,"clarity",2),x([C({type:Number})],H.prototype,"accuracy",2),x([ao("#height-animator")],H.prototype,"heightAnimatorReference",2),H=x([P("tn-tuner-note")],H);var Ne=class{set reference(e){this._reference=e}get from(){return this._reference.getAttribute("values").match(Ne.fromMatcher)[0]}set from(e){this._reference.setAttribute("values",this._reference.getAttribute("values").replace(Ne.fromMatcher,e))}get to(){return this._reference.getAttribute("values").match(Ne.toMatcher)[0]}set to(e){this._reference.setAttribute("values",this._reference.getAttribute("values").replace(Ne.toMatcher,e))}onEndEvent(){this.from=this.to}},ut=Ne;ut.fromMatcher=/-?\d+\.?\d*(?=;)/g,ut.toMatcher=/-?\d+\.?\d*$/g;var Jt={};B(Jt,{SpokeComponent:()=>ne,TunerRingComponent:()=>J});var tn=$t(en()),cr=T`
  :host {
    --needle-degree: 0rad;
    --opacity: 1;
  }

  .tuner-needle {
    --width: 1.5vmin;

    background: linear-gradient(0deg, transparent 70%, var(--primary-color) 30%);
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
    background-color: var(--highlight-color);
  }

  .bottom-spokes > tn-spoke {
    background-color: var(--primary-color);
  }
`,J=class extends ${constructor(){super(...arguments);this.accuracy=0;this.volume=0}updated(){this.style.setProperty("--needle-degree",this.convertAccuracyToRadians()+"rad")}convertAccuracyToRadians(){let e=this.accuracy*(Math.PI/2)-Math.PI/2;return this.pitchAccidental==pe.sharp&&(e*=-1),e}static angleDifference(e,t){let n=e-t;return n+=n>Math.PI?-(2*Math.PI):n<-Math.PI?2*Math.PI:0,Math.abs(n)}render(){let e=[],t=[],n=41;for(let o=0;o<n;o++){let a=o*(Math.PI/(n-1))-Math.PI/2,f=o>=(n-3)/2&&o<=(n+1)/2,c=J.angleDifference(a,this.convertAccuracyToRadians()),s=N.map(c,[Math.PI,0],[0,1]),i=N.clamp(this.volume*8,[.3,.9]);e.push(S`
                <tn-spoke .index="${o}" .scaleFactor="${s}"
                          .arcPosition="${a}" .isMiddle="${f}"></tn-spoke>
            `),t.push(S`
                <tn-spoke .index="${o}" .scaleFactor="${i}"
                          .arcPosition="${a+Math.PI}"></tn-spoke>
            `)}return S`
            <div class="tuner-ring">
                <div class="ring">
                    <span class="top-spokes">
                        ${e}
                    </span>
                    <span class="bottom-spokes">
                        ${t}
                    </span>
                </div>
                <div class="tuner-needle"></div>
            </div>
        `}};J.styles=cr,x([C()],J.prototype,"accuracy",2),x([C()],J.prototype,"volume",2),x([C()],J.prototype,"pitchAccidental",2),J=x([P("tn-tuner-ring")],J);var ir=T`
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

`,ne=class extends ${constructor(){super(...arguments);this.scaleFactor=0;this.arcPosition=0;this.index=0;this.isMiddle=!1}connectedCallback(){super.connectedCallback(),this.isMiddle&&this.style.setProperty("background","var(--primary-color)"),this.setupPosition()}updated(){let e=(0,tn.default)(0,0,1,0),t=this.scaleFactor,n=N.map(this.scaleFactor,[0,1],[1,0]),o=e(t)*5,a=e(n)*15;this.style.setProperty("--x-scale",o+a+""),this.style.setProperty("--y-scale",o+"")}setupPosition(){let e=50*Math.cos(this.arcPosition)+50+"%",t=50*Math.sin(this.arcPosition)+50+"%";this.style.setProperty("bottom",e),this.style.setProperty("left",t),this.style.setProperty("--angle",this.arcPosition+"rad")}};ne.styles=ir,x([C()],ne.prototype,"scaleFactor",2),x([C()],ne.prototype,"arcPosition",2),x([C()],ne.prototype,"index",2),x([C()],ne.prototype,"isMiddle",2),ne=x([P("tn-spoke")],ne);var Xt={};B(Xt,{TunerComponent:()=>re});var le=class{static debug(...e){_.debugMode&&console.debug(e)}static error(...e){console.error(e)}};var Qt=class{constructor(){this.audioContext=new AudioContext,this.analyserNode=new AnalyserNode(this.audioContext)}connect(){return ro(this,null,function*(){let e;try{e=yield navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,autoGainControl:!1,noiseSuppression:!1,latency:0}})}catch(n){le.error(n)}this.sourceNode=this.audioContext.createMediaStreamSource(e);let t=this.audioContext.createBiquadFilter();return t.type="lowpass",t.frequency.setTargetAtTime(Qt.lowpassThreshold,this.audioContext.currentTime,0),this.sourceNode.connect(t),t.connect(this.analyserNode),yield this.audioContext.resume(),this})}},tt=Qt;tt.lowpassThreshold=8e3;var Gt=class{constructor(e=new tt,t=17){this.refreshRate=t,this._audioSource=e,this.algorithms=new Map,this.algorithms.set("McLeod",new Ot(this._audioSource)),this.algorithms.set("YIN",new Lt),this.algorithms.set("AMDF",new jt),this.algorithms.set("Dynamic Wavelet",new Dt)}static Instance(e=new tt,t=17){return this._instance||(this._instance=new this(e,t))}startListening(){this._audioSource.connect().then(()=>{this.intervalReference=window.setInterval(this.listen.bind(this),this.refreshRate)})}stopListening(){window.clearInterval(this.intervalReference)}setOnListen(e){this.onListen=e}get pitch(){return this._algorithmResult.pitch}get clarity(){return this._algorithmResult.clarity}get volume(){return this._algorithmResult.volume}get audioSource(){return this._audioSource}set audioSource(e){e.analyserNode.smoothingTimeConstant=1,this._audioSource=e}listen(){this._algorithmResult=this.algorithms.get(_.algorithm).detect(this._audioSource),this.pitch===-1&&le.debug("Pitch not detected.",this._algorithmResult.pitch,this._algorithmResult.clarity),this.onListen(this._algorithmResult.pitch,this._algorithmResult.clarity,this._algorithmResult.volume)}};var re=class extends ${constructor(){super(...arguments);this.pitchDetectorService=Gt.Instance();this.note=new V(0);this.accuracy=0;this.clarity=1;this.volume=0;this.inTune=!1}connectedCallback(){super.connectedCallback(),this.pitchDetectorService.setOnListen((e,t,n)=>{if(this.clarity=t,this.volume=n,n<.1&&t<.99)return;this.note=ze.freqToNote(e);let o=ze.noteToPitch(this.note),a=ze.noteToPitch(new V(this.note.index-1)),f=ze.noteToPitch(new V(this.note.index+1)),c;e<o?(this.pitchAccidental=pe.flat,c=N.map(e,[a,o],[-1,1])):(this.pitchAccidental=pe.sharp,c=N.map(e,[f,o],[-1,1])),c<0&&(c=0),this.inTune=c>.95,this.accuracy=c}),this.pitchDetectorService.startListening()}disconnectedCallback(){super.disconnectedCallback(),this.pitchDetectorService.stopListening()}updateOscillatorFrequency(e){let t=this.pitchDetectorService.audioSource;t.frequency=Number(e.target.value)}setPlayback(e){e.target.checked?this.pitchDetectorService.audioSource.sourceNode.connect(this.pitchDetectorService.audioSource.audioContext.destination):this.pitchDetectorService.audioSource.sourceNode.disconnect(this.pitchDetectorService.audioSource.audioContext.destination)}resumeContext(){this.pitchDetectorService.audioSource.audioContext.resume().then(()=>{le.debug("Audio source resumed")},e=>{le.error("Audio source failed to resume",e)})}render(){return S`
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
        `}};x([C()],re.prototype,"note",2),x([C()],re.prototype,"accuracy",2),x([C()],re.prototype,"clarity",2),x([C()],re.prototype,"volume",2),x([C()],re.prototype,"pitchAccidental",2),re=x([P("tn-tuner")],re);var sr=[Nt,Ut,Ht,It,Yt,Bt,Vt,Wt,Zt,Jt,Xt],on=sr;on[0].default;})();
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

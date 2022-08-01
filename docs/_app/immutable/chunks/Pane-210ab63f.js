import{S as Se,i as pe,s as Pe,F as ge,e as le,c as ae,a as oe,d as q,b,O as B,g as J,K as _e,L as ye,M as ve,q as Me,o as xe,Q as Ye,_ as H,r as Qe,a9 as W,v as we,aa as ke,D as ie,a3 as be,T as Ue,k as We,m as Xe,$ as Ge,ab as Je}from"./index-632af6f3.js";import{w as se}from"./index-ead1d761.js";function Ze(c){let a,o,h;const _=c[16].default,S=ge(_,c,c[15],null);return{c(){a=le("div"),S&&S.c(),this.h()},l(d){a=ae(d,"DIV",{id:!0,class:!0,style:!0});var u=oe(a);S&&S.l(u),u.forEach(q),this.h()},h(){b(a,"id",c[0]),b(a,"class",o=`splitpanes ${c[3]||""} ${c[4]||""}`),b(a,"style",c[2]),B(a,"splitpanes--horizontal",c[1]),B(a,"splitpanes--vertical",!c[1]),B(a,"splitpanes--dragging",c[6]||c[7])},m(d,u){J(d,a,u),S&&S.m(a,null),c[17](a),h=!0},p(d,u){S&&S.p&&(!h||u[0]&32768)&&_e(S,_,d,d[15],h?ve(_,d[15],u,null):ye(d[15]),null),(!h||u[0]&1)&&b(a,"id",d[0]),(!h||u[0]&24&&o!==(o=`splitpanes ${d[3]||""} ${d[4]||""}`))&&b(a,"class",o),(!h||u[0]&4)&&b(a,"style",d[2]),u[0]&26&&B(a,"splitpanes--horizontal",d[1]),u[0]&26&&B(a,"splitpanes--vertical",!d[1]),u[0]&216&&B(a,"splitpanes--dragging",d[6]||d[7])},i(d){h||(Me(S,d),h=!0)},o(d){xe(S,d),h=!1},d(d){d&&q(a),S&&S.d(d),c[17](null)}}}const Ce={};function $e(c,a,o){let h,_,S,{$$slots:d={},$$scope:u}=a,{id:E=void 0}=a,{horizontal:g=!1}=a,{pushOtherPanes:m=!0}=a,{dblClickSplitter:v=!0}=a,{rtl:N="auto"}=a,{firstSplitter:I=!1}=a,{style:V=null}=a,{theme:j="default-theme"}=a,{class:Y=""}=a;const y=Ye();let M,x=!1,C=!1,A=!1,R=-1,D=-1,w,s=new Array,L=se(g);H(c,L,e=>o(25,S=e));const K=se(I);H(c,K,e=>o(24,_=e));const O=se(void 0);H(c,O,e=>o(23,h=e));function Q(e){return s.findIndex(i=>i.key===e)}Qe(Ce,{showFirstSplitter:K,veryFirstPaneKey:O,isHorizontal:L,onPaneInit:e=>(h===void 0&&W(O,h=e,h),{onSplitterDown:i=>{const n=Q(e);n>0&&Ee(i,n-1)},onSplitterClick:i=>{const n=Q(e);n>0&&Ae(i,n)},onSplitterDblClick:i=>{v&&fe(i,Q(e))}}),onPaneAdd:Z,onPaneClick:$,onPaneRemove:z});async function Z(e){let i=-1;Array.from(e.element.parentNode.children).some(n=>(n.className.includes("splitpanes__pane")&&i++,n===e.element)),i===0&&W(O,h=e.key,h),s.splice(i,0,e);for(let n=0;n<s.length;n++)s[n].index=n;x&&(await ie(),ee(s[i],void 0),y("pane-add",{index:i,panes:T()}))}async function z(e){const i=s.findIndex(n=>n.key===e);if(i>=0){const n=s.splice(i,1)[0];for(let r=0;r<s.length;r++)s[r].index=r;i===0&&W(O,h=s.length>0?s[0].key:void 0,h),x&&(await ie(),ee(void 0,{...n,index:i}),y("pane-remove",{removed:n,panes:T()}))}}function $(e,i){y("pane-click",s.find(n=>{n.key==i}))}we(()=>{He(),ee(),x=!0,y("ready")}),ke(()=>{x&&ce(),x=!1});function Re(){if(N==="auto")try{return window.getComputedStyle(M).direction==="rtl"}catch{}return N===!0}function De(){document.body.style.cursor=L?"col-resize":"row-resize",document.addEventListener("mousemove",X,{passive:!1}),document.addEventListener("mouseup",G),"ontouchstart"in window&&(document.addEventListener("touchmove",X,{passive:!1}),document.addEventListener("touchend",G))}function ce(){document.body.style.cursor="",document.removeEventListener("mousemove",X),document.removeEventListener("mouseup",G),"ontouchstart"in window&&(document.removeEventListener("touchmove",X),document.removeEventListener("touchend",G))}function Ee(e,i){De(),o(6,C=!0),R=i}function X(e){C&&(e.preventDefault(),o(7,A=!0),Fe(Le(e)),y("resize",T()))}function G(){A&&y("resized",T()),o(6,C=!1),setTimeout(()=>{o(7,A=!1),ce()},100)}function Ae(e,i){"ontouchstart"in window&&(e.preventDefault(),v&&(D===i?(w&&clearTimeout(w),w=null,fe(e,i),D=-1):(D=i,w=setTimeout(()=>{D=-1},500)))),A||y("splitter-click",s[i])}function fe(e,i){let n=0;for(let f=0;f<s.length;f++){const t=s[f],l=f===i?t.max():t.min();t.setSz(l),f!==i&&(n+=t.min())}const r=s[i],P=r.sz()-n;r.setSz(P),y("pane-maximize",r),y("resized",T()),o(6,C=!1)}function T(){const e=new Array(s.length);for(let i=0;i<s.length;i++){const n=s[i];e[i]={min:n.min(),max:n.max(),size:n.sz(),snap:n.snap()}}return e}function Le(e){const i=M.getBoundingClientRect(),n=e,r=e,{clientX:P,clientY:f}="ontouchstart"in window&&r.touches?r.touches[0]:n;return{x:P-i.left,y:f-i.top}}function Oe(e){let i=e[g?"y":"x"];const n=M[g?"clientHeight":"clientWidth"];return Re()&&!g&&(i=n-i),i*100/n}function Fe(e){const i=R;let n={prevPanesSize:ue(i),nextPanesSize:me(i),prevReachedMinPanes:0,nextReachedMinPanes:0};const r=0+(m?0:n.prevPanesSize),P=100-(m?0:n.nextPanesSize);let f=[i,i+1],t=s[f[0]]||null,l=s[f[1]]||null;const p=Math.max(Math.min(Oe(e),P),r),k=n.prevPanesSize+t.min()+t.snap(),U=100-(n.nextPanesSize+l.min()+l.snap());let F=p,te=!1;p<=k?p>n.prevPanesSize+t.min()&&(F=Math.max(t.min()+n.prevPanesSize,100-(l.max()+n.nextPanesSize)),te=!0):p>=U&&p<100-n.nextPanesSize-l.min()&&(F=Math.min(100-(l.min()+n.nextPanesSize),t.max()+n.prevPanesSize),te=!0);const he=t.max()<100&&F>=t.max()+n.prevPanesSize,je=l.max()<100&&F<=100-(l.max()+n.nextPanesSize);if(he||je)he?(t.setSz(t.max()),l.setSz(Math.max(100-t.max()-n.prevPanesSize-n.nextPanesSize,0))):(t.setSz(Math.max(100-l.max()-n.prevPanesSize-n.nextPanesSize,0)),l.setSz(l.max()));else{if(m&&!te){const de=qe(n,F);if(!de)return;({sums:n,panesToResize:f}=de),t=s[f[0]]||null,l=s[f[1]]||null}t!==null&&t.setSz(Math.min(Math.max(F-n.prevPanesSize-n.prevReachedMinPanes,t.min()),t.max())),l!==null&&l.setSz(Math.min(Math.max(100-F-n.nextPanesSize-n.nextReachedMinPanes,l.min()),l.max()))}}function qe(e,i){var P,f;const n=R,r=[n,n+1];if(i<e.prevPanesSize+s[r[0]].min()){if(r[0]=(P=Ne(n))==null?void 0:P.index,e.prevReachedMinPanes=0,r[0]<n)for(let t=0;t<s.length;t++){const l=s[t];t>r[0]&&t<=n&&(l.setSz(l.min()),e.prevReachedMinPanes+=l.min())}if(e.prevPanesSize=ue(r[0]),r[0]===void 0){e.prevReachedMinPanes=0,s[0].setSz(s[0].min());for(let t=0;t<s.length;t++){const l=s[t];t>0&&t<=n&&(l.setSz(l.min()),e.prevReachedMinPanes+=l.min())}return s[r[1]].setSz(100-e.prevReachedMinPanes-s[0].min()-e.prevPanesSize-e.nextPanesSize),null}}if(i>100-e.nextPanesSize-s[r[1]].min()){if(r[1]=(f=Ie(n))==null?void 0:f.index,e.nextReachedMinPanes=0,r[1]>n+1)for(let l=0;l<s.length;l++){const p=s[l];l>n&&l<r[1]&&(p.setSz(p.min()),e.nextReachedMinPanes+=p.min())}e.nextPanesSize=me(r[1]-1);const t=s.length;if(r[1]===void 0){e.nextReachedMinPanes=0,s[t-1].setSz(s[t-1].min());for(let l=0;l<s.length;l++){const p=s[l];l<t-1&&l>=n+1&&(p.setSz(p.min()),e.nextReachedMinPanes+=p.min())}return s[r[0]].setSz(100-e.prevPanesSize-e.nextReachedMinPanes-s[t-1].min()-e.nextPanesSize),null}}return{sums:e,panesToResize:r}}function ue(e){return s.reduce((i,n,r)=>i+(r<e?n.sz():0),0)}function me(e){return s.reduce((i,n,r)=>i+(r>e+1?n.sz():0),0)}function Ne(e){return[...s].reverse().find(n=>n.index<e&&n.sz()>n.min())||null}function Ie(e){return s.find(n=>n.index>e+1&&n.sz()>n.min())||null}function ee(e,i){!e&&!i||s.length===1?Te():s.some(n=>n.givenSize!=null||n.min()||n.max()<100)?Be(e):Ke(),x&&y("resized",T())}function Ke(){const e=s.length,i=100/e;let n=0,r=Array(),P=Array();for(let f=0;f<s.length;f++){const t=s[f],l=t.min(),p=t.max(),k=Math.max(Math.min(i,p),l);t.setSz(k),n-=k,k>=p&&r.push(t.key),k<=l&&P.push(t.key)}n>.1&&ne(n,r,P)}function Te(){let e=100,i=Array(),n=Array(),r=0;for(let f=0;f<s.length;f++){const t=s[f],l=t.sz();e-=l,t.givenSize!=null&&r++,l>=t.max()&&i.push(t.key),l<=t.min()&&n.push(t.key)}let P=100;if(e>.1){for(let f=0;f<s.length;f++){const t=s[f];if(t.givenSize==null){const l=s.length,p=Math.max(Math.min(e/(l-r),t.max()),t.min());t.setSz(p)}P-=t.sz()}P>.1&&ne(e,i,n)}}function Be(e){const i=s.length;let n=100/i,r=0,P=new Array,f=new Array;e&&e.givenSize!=null&&(n=(100-e.givenSize)/(i-1));for(let t=0;t<s.length;t++){const l=s[t],p=l.sz();r-=p,p>=l.max()&&P.push(l.key),p<=l.min()&&f.push(l.key)}if(!(Math.abs(r)<.1)){for(let t=0;t<s.length;t++){const l=s[t],p=l.max(),k=l.min();e&&e.givenSize!=null&&e.key===l.key||l.setSz(Math.max(Math.min(n,p),k));const U=l.sz();r-=U,U>=p&&P.push(l.key),U<=k&&f.push(l.key)}r>.1&&ne(r,P,f)}}async function ne(e,i,n){const r=s.length;let P;if(e>0?P=e/(r-i.length):P=e/(r-n.length),s.length===1)s[0].setSz(100),e=0;else for(let f=0;f<s.length;f++){const t=s[f],l=t.sz();if(e>0&&!i.includes(t.key)){const p=Math.max(Math.min(l+P,t.max()),t.min());e-=p-l,t.setSz(p)}else if(!n.includes(t.key)){const p=Math.max(Math.min(l+P,t.max()),t.min());e-=p-l,t.setSz(p)}}Math.abs(e)>.1&&(await ie(),x&&console.warn("Splitpanes: Could not resize panes correctly due to their constraints."))}function He(){var e;if(M){const i=Array.from(M.children);for(let n=0;n<i.length;n++){const r=i[n],P=r.classList.contains("splitpanes__pane"),f=r.classList.contains("splitpanes__splitter");if(!P&&!f){(e=r.parentNode)==null||e.removeChild(r),console.warn("Splitpanes: Only <Pane> elements are allowed at the root of <Splitpanes>. One of your DOM nodes was removed.");return}}}}function Ve(e){be[e?"unshift":"push"](()=>{M=e,o(5,M)})}return c.$$set=e=>{"id"in e&&o(0,E=e.id),"horizontal"in e&&o(1,g=e.horizontal),"pushOtherPanes"in e&&o(11,m=e.pushOtherPanes),"dblClickSplitter"in e&&o(12,v=e.dblClickSplitter),"rtl"in e&&o(13,N=e.rtl),"firstSplitter"in e&&o(14,I=e.firstSplitter),"style"in e&&o(2,V=e.style),"theme"in e&&o(3,j=e.theme),"class"in e&&o(4,Y=e.class),"$$scope"in e&&o(15,u=e.$$scope)},c.$$.update=()=>{c.$$.dirty[0]&2&&W(L,S=g,S),c.$$.dirty[0]&16384&&W(K,_=I,_)},[E,g,V,j,Y,M,C,A,L,K,O,m,v,N,I,u,d,Ve]}class ln extends Se{constructor(a){super(),pe(this,a,$e,Ze,Pe,{id:0,horizontal:1,pushOtherPanes:11,dblClickSplitter:12,rtl:13,firstSplitter:14,style:2,theme:3,class:4},null,[-1,-1])}}function ze(c){let a,o,h,_;return{c(){a=le("div"),this.h()},l(S){a=ae(S,"DIV",{class:!0}),oe(a).forEach(q),this.h()},h(){b(a,"class","splitpanes__splitter")},m(S,d){J(S,a,d),h||(_=Ue(o=c[10].call(null,a)),h=!0)},d(S){S&&q(a),h=!1,_()}}}function en(c){let a,o,h,_,S,d,u=(c[3]!==c[8]||c[4])&&ze(c);const E=c[19].default,g=ge(E,c,c[18],null);return{c(){u&&u.c(),a=We(),o=le("div"),g&&g.c(),this.h()},l(m){u&&u.l(m),a=Xe(m),o=ae(m,"DIV",{class:!0,style:!0});var v=oe(o);g&&g.l(v),v.forEach(q),this.h()},h(){b(o,"class",h=`splitpanes__pane ${c[0]||""}`),b(o,"style",c[2])},m(m,v){u&&u.m(m,v),J(m,a,v),J(m,o,v),g&&g.m(o,null),c[20](o),_=!0,S||(d=Ge(o,"click",c[9]),S=!0)},p(m,[v]){m[3]!==m[8]||m[4]?u||(u=ze(m),u.c(),u.m(a.parentNode,a)):u&&(u.d(1),u=null),g&&g.p&&(!_||v&262144)&&_e(g,E,m,m[18],_?ve(E,m[18],v,null):ye(m[18]),null),(!_||v&1&&h!==(h=`splitpanes__pane ${m[0]||""}`))&&b(o,"class",h),(!_||v&4)&&b(o,"style",m[2])},i(m){_||(Me(g,m),_=!0)},o(m){xe(g,m),_=!1},d(m){u&&u.d(m),m&&q(a),m&&q(o),g&&g.d(m),c[20](null),S=!1,d()}}}function nn(c,a,o){let h,_,S,d,u,{$$slots:E={},$$scope:g}=a;const{onPaneInit:m,onPaneAdd:v,onPaneRemove:N,onPaneClick:I,isHorizontal:V,showFirstSplitter:j,veryFirstPaneKey:Y}=Je(Ce);H(c,V,z=>o(17,S=z)),H(c,j,z=>o(4,u=z)),H(c,Y,z=>o(3,d=z));let{size:y=null}=a,{minSize:M=0}=a,{maxSize:x=100}=a,{snapSize:C=0}=a,{class:A=""}=a;const R={};let D,w=y==null?0:y;const s=typeof window<"u",{onSplitterDown:L,onSplitterClick:K,onSplitterDblClick:O}=m(R);function Q(z){I(z,R)}const re=z=>{z.onmousedown=L,"ontouchstart"in window&&(z.ontouchstart=L),z.onclick=K,z.ondblclick=O};we(()=>{v({key:R,element:D,givenSize:y,sz:()=>w,setSz:$=>{o(15,w=$),y!=null&&o(11,y=w)},min:()=>M,max:()=>x,snap:()=>C})}),ke(()=>{N(R)});function Z(z){be[z?"unshift":"push"](()=>{D=z,o(1,D)})}return c.$$set=z=>{"size"in z&&o(11,y=z.size),"minSize"in z&&o(12,M=z.minSize),"maxSize"in z&&o(13,x=z.maxSize),"snapSize"in z&&o(14,C=z.snapSize),"class"in z&&o(0,A=z.class),"$$scope"in z&&o(18,g=z.$$scope)},c.$$.update=()=>{c.$$.dirty&2048&&y!=null&&o(15,w=y),c.$$.dirty&131072&&o(16,h=S?"height":"width"),c.$$.dirty&112640&&o(2,_=[!s&&M>0?`min-${h}: ${M}%;`:void 0,!s&&x<100?`max-${h}: ${x}%;`:void 0,s||y!=null?`${h}: ${w}%;`:void 0].filter(z=>z!==void 0).join(" ")||void 0)},[A,D,_,d,u,V,j,Y,R,Q,re,y,M,x,C,w,h,S,g,E,Z]}class an extends Se{constructor(a){super(),pe(this,a,nn,en,Pe,{size:11,minSize:12,maxSize:13,snapSize:14,class:0})}}export{an as P,ln as S};

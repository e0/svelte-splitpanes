import{S as ze,i as _e,s as Se,F as ge,e as le,c as ae,a as oe,d as q,b as k,O as B,g as G,K as ve,L as Pe,M as xe,q as ye,o as we,Q as je,Z as H,r as Qe,a8 as W,D as ie,v as be,a9 as Me,a2 as ke,aa as Ue,k as We,m as Xe,_ as Ze,ab as Ge}from"./index-6274fd6d.js";import{w as se}from"./index-f048e47e.js";function Je(p){let o,r,h;const v=p[16].default,z=ge(v,p,p[15],null);return{c(){o=le("div"),z&&z.c(),this.h()},l(d){o=ae(d,"DIV",{id:!0,class:!0,style:!0});var c=oe(o);z&&z.l(c),c.forEach(q),this.h()},h(){k(o,"id",p[0]),k(o,"class",r=`splitpanes ${p[3]||""} ${p[4]||""}`),k(o,"style",p[2]),B(o,"splitpanes--horizontal",p[1]),B(o,"splitpanes--vertical",!p[1]),B(o,"splitpanes--dragging",p[6]||p[7])},m(d,c){G(d,o,c),z&&z.m(o,null),p[17](o),h=!0},p(d,c){z&&z.p&&(!h||c[0]&32768)&&ve(z,v,d,d[15],h?xe(v,d[15],c,null):Pe(d[15]),null),(!h||c[0]&1)&&k(o,"id",d[0]),(!h||c[0]&24&&r!==(r=`splitpanes ${d[3]||""} ${d[4]||""}`))&&k(o,"class",r),(!h||c[0]&4)&&k(o,"style",d[2]),c[0]&26&&B(o,"splitpanes--horizontal",d[1]),c[0]&26&&B(o,"splitpanes--vertical",!d[1]),c[0]&216&&B(o,"splitpanes--dragging",d[6]||d[7])},i(d){h||(ye(z,d),h=!0)},o(d){we(z,d),h=!1},d(d){d&&q(o),z&&z.d(d),p[17](null)}}}const Ce={};function $e(p,o,r){let h,v,z,{$$slots:d={},$$scope:c}=o,{id:A=void 0}=o,{horizontal:g=!1}=o,{pushOtherPanes:u=!0}=o,{dblClickSplitter:x=!0}=o,{rtl:N="auto"}=o,{firstSplitter:I=!1}=o,{style:V=null}=o,{theme:Y="default-theme"}=o,{class:j=""}=o;const P=je();let y,w=!1,C=!1,E=!1,R=-1,D=-1,b,s=new Array,L=se(g);H(p,L,e=>r(25,z=e));const K=se(I);H(p,K,e=>r(24,v=e));const O=se(void 0);H(p,O,e=>r(23,h=e));function Q(e){return s.findIndex(i=>i.key===e)}Qe(Ce,{showFirstSplitter:K,veryFirstPaneKey:O,isHorizontal:L,onPaneInit:e=>(h===void 0&&W(O,h=e,h),{onSplitterDown:i=>{const t=Q(e);t>0&&Ae(i,t-1)},onSplitterClick:i=>{const t=Q(e);t>0&&Ee(i,t)},onSplitterDblClick:i=>{x&&fe(i,Q(e))}}),onPaneAdd:J,onPaneClick:$,onPaneRemove:m});async function J(e){let i=-1;Array.from(e.element.parentNode.children).some(t=>(t.className.includes("splitpanes__pane")&&i++,t===e.element)),i===0&&W(O,h=e.key,h),s.splice(i,0,e);for(let t=0;t<s.length;t++){const a=s[t];a.index=t}w&&(await ie(),ee(s[i],void 0),P("pane-add",{index:i,panes:T()}))}async function m(e){const i=s.findIndex(a=>a.key===e),t=s.splice(i,1)[0];for(let a=0;a<s.length;a++){const S=s[a];S.index=a}i===0&&W(O,h=s.length>0?s[0].key:void 0,h),await ie(),ee(void 0,{...t,index:i}),P("pane-remove",{removed:t,panes:T()})}function $(e,i){P("pane-click",s.find(t=>{t.key==i}))}be(()=>{He(),ee(),w=!0,P("ready")}),Me(()=>{w&&pe(),w=!1});function Re(){if(N==="auto")try{return window.getComputedStyle(y).direction==="rtl"}catch{}return N===!0}function De(){document.body.style.cursor=L?"col-resize":"row-resize",document.addEventListener("mousemove",X,{passive:!1}),document.addEventListener("mouseup",Z),"ontouchstart"in window&&(document.addEventListener("touchmove",X,{passive:!1}),document.addEventListener("touchend",Z))}function pe(){document.body.style.cursor="",document.removeEventListener("mousemove",X),document.removeEventListener("mouseup",Z),"ontouchstart"in window&&(document.removeEventListener("touchmove",X),document.removeEventListener("touchend",Z))}function Ae(e,i){De(),r(6,C=!0),R=i}function X(e){C&&(e.preventDefault(),r(7,E=!0),Fe(Le(e)),P("resize",T()))}function Z(){E&&P("resized",T()),r(6,C=!1),setTimeout(()=>{r(7,E=!1),pe()},100)}function Ee(e,i){"ontouchstart"in window&&(e.preventDefault(),x&&(D===i?(b&&clearTimeout(b),b=null,fe(e,i),D=-1):(D=i,b=setTimeout(()=>{D=-1},500)))),E||P("splitter-click",s[i])}function fe(e,i){let t=0;for(let f=0;f<s.length;f++){const n=s[f],l=f===i?n.max():n.min();n.setSz(l),f!==i&&(t+=n.min())}const a=s[i],S=a.sz()-t;a.setSz(S),P("pane-maximize",a),P("resized",T()),r(6,C=!1)}function T(){const e=new Array(s.length);for(let i=0;i<s.length;i++){const t=s[i];e[i]={min:t.min(),max:t.max(),size:t.sz(),snap:t.snap()}}return e}function Le(e){const i=y.getBoundingClientRect(),t=e,a=e,{clientX:S,clientY:f}="ontouchstart"in window&&a.touches?a.touches[0]:t;return{x:S-i.left,y:f-i.top}}function Oe(e){let i=e[g?"y":"x"];const t=y[g?"clientHeight":"clientWidth"];return Re()&&!g&&(i=t-i),i*100/t}function Fe(e){const i=R;let t={prevPanesSize:ce(i),nextPanesSize:ue(i),prevReachedMinPanes:0,nextReachedMinPanes:0};const a=0+(u?0:t.prevPanesSize),S=100-(u?0:t.nextPanesSize);let f=[i,i+1],n=s[f[0]]||null,l=s[f[1]]||null;const _=Math.max(Math.min(Oe(e),S),a),M=t.prevPanesSize+n.min()+n.snap(),U=100-(t.nextPanesSize+l.min()+l.snap());let F=_,ne=!1;_<=M?_>t.prevPanesSize+n.min()&&(F=Math.max(n.min()+t.prevPanesSize,100-(l.max()+t.nextPanesSize)),ne=!0):_>=U&&_<100-t.nextPanesSize-l.min()&&(F=Math.min(100-(l.min()+t.nextPanesSize),n.max()+t.prevPanesSize),ne=!0);const he=n.max()<100&&F>=n.max()+t.prevPanesSize,Ye=l.max()<100&&F<=100-(l.max()+t.nextPanesSize);if(he||Ye)console.log(100-(l.max()+t.nextPanesSize)),he?(n.setSz(n.max()),l.setSz(Math.max(100-n.max()-t.prevPanesSize-t.nextPanesSize,0))):(n.setSz(Math.max(100-l.max()-t.prevPanesSize-t.nextPanesSize,0)),l.setSz(l.max()));else{if(u&&!ne){const de=qe(t,F);if(!de)return;({sums:t,panesToResize:f}=de),n=s[f[0]]||null,l=s[f[1]]||null}n!==null&&n.setSz(Math.min(Math.max(F-t.prevPanesSize-t.prevReachedMinPanes,n.min()),n.max())),l!==null&&l.setSz(Math.min(Math.max(100-F-t.nextPanesSize-t.nextReachedMinPanes,l.min()),l.max()))}}function qe(e,i){var S,f;const t=R,a=[t,t+1];if(i<e.prevPanesSize+s[a[0]].min()){if(a[0]=(S=Ne(t))==null?void 0:S.index,e.prevReachedMinPanes=0,a[0]<t)for(let n=0;n<s.length;n++){const l=s[n];n>a[0]&&n<=t&&(l.setSz(l.min()),e.prevReachedMinPanes+=l.min())}if(e.prevPanesSize=ce(a[0]),a[0]===void 0){e.prevReachedMinPanes=0,s[0].setSz(s[0].min());for(let n=0;n<s.length;n++){const l=s[n];n>0&&n<=t&&(l.setSz(l.min()),e.prevReachedMinPanes+=l.min())}return s[a[1]].setSz(100-e.prevReachedMinPanes-s[0].min()-e.prevPanesSize-e.nextPanesSize),null}}if(i>100-e.nextPanesSize-s[a[1]].min()){if(a[1]=(f=Ie(t))==null?void 0:f.index,e.nextReachedMinPanes=0,a[1]>t+1)for(let l=0;l<s.length;l++){const _=s[l];l>t&&l<a[1]&&(_.sz=_.min,e.nextReachedMinPanes+=_.min())}e.nextPanesSize=ue(a[1]-1);const n=s.length;if(a[1]===void 0){e.nextReachedMinPanes=0,s[n-1].sz=s[n-1].min;for(let l=0;l<s.length;l++){const _=s[l];l<n-1&&l>=t+1&&(_.sz=_.min,e.nextReachedMinPanes+=_.min())}return s[a[0]].setSz(100-e.prevPanesSize-e.nextReachedMinPanes-s[n-1].min()-e.nextPanesSize),null}}return{sums:e,panesToResize:a}}function ce(e){return s.reduce((i,t,a)=>i+(a<e?t.sz():0),0)}function ue(e){return s.reduce((i,t,a)=>i+(a>e+1?t.sz():0),0)}function Ne(e){return[...s].reverse().find(t=>t.index<e&&t.sz()>t.min())||null}function Ie(e){return s.find(t=>t.index>e+1&&t.sz()>t.min())||null}function ee(e,i){!e&&!i||s.length===1?Te():s.some(t=>t.givenSize!=null||t.min()||t.max()<100)?Be(e):Ke(),w&&P("resized",T())}function Ke(){const e=s.length,i=100/e;let t=0,a=Array(),S=Array();for(let f=0;f<s.length;f++){const n=s[f],l=n.min(),_=n.max(),M=Math.max(Math.min(i,_),l);n.setSz(M),t-=M,M>=_&&a.push(n.key),M<=l&&S.push(n.key)}t>.1&&te(t,a,S)}function Te(){let e=100,i=Array(),t=Array(),a=0;for(let f=0;f<s.length;f++){const n=s[f],l=n.sz();e-=l,n.givenSize!=null&&a++,l>=n.max()&&i.push(n.key),l<=n.min()&&t.push(n.key)}let S=100;if(e>.1){for(let f=0;f<s.length;f++){const n=s[f];if(n.givenSize==null){const l=s.length,_=Math.max(Math.min(e/(l-a),n.max()),n.min());n.setSz(_)}S-=n.sz()}S>.1&&te(e,i,t)}}function Be(e){const i=s.length;let t=100/i,a=0,S=new Array,f=new Array;e&&e.givenSize!=null&&(t=(100-e.givenSize)/(i-1));for(let n=0;n<s.length;n++){const l=s[n],_=l.sz();a-=_,_>=l.max()&&S.push(l.key),_<=l.min()&&f.push(l.key)}if(!(Math.abs(a)<.1)){for(let n=0;n<s.length;n++){const l=s[n],_=l.max(),M=l.min();e&&e.givenSize!=null&&e.key===l.key||l.setSz(Math.max(Math.min(t,_),M));const U=l.sz();a-=U,U>=_&&S.push(l.key),U<=M&&f.push(l.key)}a>.1&&te(a,S,f)}}async function te(e,i,t){const a=s.length;let S;e>0?S=e/(a-i.length):S=e/(a-t.length);for(let f=0;f<s.length;f++){const n=s[f],l=n.sz();if(e>0&&!i.includes(n.key)){const _=Math.max(Math.min(l+S,n.max()),n.min());e-=_-l,n.setSz(_)}else if(!t.includes(n.key)){const _=Math.max(Math.min(l+S,n.max()),n.min());e-=_-l,n.setSz(_)}}Math.abs(e)>.1&&(await ie(),w&&console.warn("Splitpanes: Could not resize panes correctly due to their constraints."))}function He(){var e;if(y){const i=Array.from(y.children);for(let t=0;t<i.length;t++){const a=i[t],S=a.classList.contains("splitpanes__pane"),f=a.classList.contains("splitpanes__splitter");if(!S&&!f){(e=a.parentNode)==null||e.removeChild(a),console.warn("Splitpanes: Only <Pane> elements are allowed at the root of <Splitpanes>. One of your DOM nodes was removed.");return}}}}function Ve(e){ke[e?"unshift":"push"](()=>{y=e,r(5,y)})}return p.$$set=e=>{"id"in e&&r(0,A=e.id),"horizontal"in e&&r(1,g=e.horizontal),"pushOtherPanes"in e&&r(11,u=e.pushOtherPanes),"dblClickSplitter"in e&&r(12,x=e.dblClickSplitter),"rtl"in e&&r(13,N=e.rtl),"firstSplitter"in e&&r(14,I=e.firstSplitter),"style"in e&&r(2,V=e.style),"theme"in e&&r(3,Y=e.theme),"class"in e&&r(4,j=e.class),"$$scope"in e&&r(15,c=e.$$scope)},p.$$.update=()=>{p.$$.dirty[0]&2&&W(L,z=g,z),p.$$.dirty[0]&16384&&W(K,v=I,v)},[A,g,V,Y,j,y,C,E,L,K,O,u,x,N,I,c,d,Ve]}class st extends ze{constructor(o){super(),_e(this,o,$e,Je,Se,{id:0,horizontal:1,pushOtherPanes:11,dblClickSplitter:12,rtl:13,firstSplitter:14,style:2,theme:3,class:4},null,[-1,-1])}}function me(p){let o,r,h,v;return{c(){o=le("div"),this.h()},l(z){o=ae(z,"DIV",{class:!0}),oe(o).forEach(q),this.h()},h(){k(o,"class","splitpanes__splitter")},m(z,d){G(z,o,d),h||(v=Ue(r=p[10].call(null,o)),h=!0)},d(z){z&&q(o),h=!1,v()}}}function et(p){let o,r,h,v,z,d,c=(p[3]!==p[8]||p[4])&&me(p);const A=p[19].default,g=ge(A,p,p[18],null);return{c(){c&&c.c(),o=We(),r=le("div"),g&&g.c(),this.h()},l(u){c&&c.l(u),o=Xe(u),r=ae(u,"DIV",{class:!0,style:!0});var x=oe(r);g&&g.l(x),x.forEach(q),this.h()},h(){k(r,"class",h=`splitpanes__pane ${p[0]||""}`),k(r,"style",p[2])},m(u,x){c&&c.m(u,x),G(u,o,x),G(u,r,x),g&&g.m(r,null),p[20](r),v=!0,z||(d=Ze(r,"click",p[9]),z=!0)},p(u,[x]){u[3]!==u[8]||u[4]?c||(c=me(u),c.c(),c.m(o.parentNode,o)):c&&(c.d(1),c=null),g&&g.p&&(!v||x&262144)&&ve(g,A,u,u[18],v?xe(A,u[18],x,null):Pe(u[18]),null),(!v||x&1&&h!==(h=`splitpanes__pane ${u[0]||""}`))&&k(r,"class",h),(!v||x&4)&&k(r,"style",u[2])},i(u){v||(ye(g,u),v=!0)},o(u){we(g,u),v=!1},d(u){c&&c.d(u),u&&q(o),u&&q(r),g&&g.d(u),p[20](null),z=!1,d()}}}function tt(p,o,r){let h,v,z,d,c,{$$slots:A={},$$scope:g}=o;const{onPaneInit:u,onPaneAdd:x,onPaneRemove:N,onPaneClick:I,isHorizontal:V,showFirstSplitter:Y,veryFirstPaneKey:j}=Ge(Ce);H(p,V,m=>r(17,z=m)),H(p,Y,m=>r(4,c=m)),H(p,j,m=>r(3,d=m));let{size:P=null}=o,{minSize:y=0}=o,{maxSize:w=100}=o,{snapSize:C=0}=o,{class:E=""}=o;const R={};let D,b;const s=typeof window!="undefined",{onSplitterDown:L,onSplitterClick:K,onSplitterDblClick:O}=u(R);function Q(m){I(m,R)}const re=m=>{m.onmousedown=L,"ontouchstart"in window&&(m.ontouchstart=L),m.onclick=K,m.ondblclick=O};be(()=>{x({key:R,element:D,givenSize:P,sz:()=>b,setSz:$=>{r(15,b=$),P!=null&&r(11,P=b)},min:()=>y,max:()=>w,snap:()=>C})}),Me(()=>{N(R)});function J(m){ke[m?"unshift":"push"](()=>{D=m,r(1,D)})}return p.$$set=m=>{"size"in m&&r(11,P=m.size),"minSize"in m&&r(12,y=m.minSize),"maxSize"in m&&r(13,w=m.maxSize),"snapSize"in m&&r(14,C=m.snapSize),"class"in m&&r(0,E=m.class),"$$scope"in m&&r(18,g=m.$$scope)},p.$$.update=()=>{p.$$.dirty&2048&&r(15,b=P==null?0:P),p.$$.dirty&131072&&r(16,h=z?"height":"width"),p.$$.dirty&112640&&r(2,v=[!s&&y>0?`min-${h}: ${y}%;`:void 0,!s&&w<100?`max-${h}: ${w}%;`:void 0,s||P!=null?`${h}: ${b}%;`:void 0].filter(m=>m!==void 0).join(" ")||void 0)},[E,D,v,d,c,V,Y,j,R,Q,re,P,y,w,C,b,h,z,g,A,J]}class lt extends ze{constructor(o){super(),_e(this,o,tt,et,Se,{size:11,minSize:12,maxSize:13,snapSize:14,class:0})}}export{lt as P,st as S};
import{S as Me,i as ke,s as Ce,F as Ee,e as ue,c as de,a as he,d as I,b as M,O as H,g as te,K as Re,L as De,M as Ae,q as Le,o as Ne,Q as sn,_ as W,r as ln,a9 as J,v as Oe,aa as Te,D as ce,a3 as Fe,T as on,k as an,m as rn,$ as cn,ab as fn}from"./index-3f0bd6f8.js";import{w as fe}from"./index-32dbe4dd.js";function un(c){let a,r,m;const _=c[16].default,g=Ee(_,c,c[15],null);return{c(){a=ue("div"),g&&g.c(),this.h()},l(h){a=de(h,"DIV",{id:!0,class:!0,style:!0});var d=he(a);g&&g.l(d),d.forEach(I),this.h()},h(){M(a,"id",c[0]),M(a,"class",r=`splitpanes ${c[3]||""} ${c[4]||""}`),M(a,"style",c[2]),H(a,"splitpanes--horizontal",c[1]),H(a,"splitpanes--vertical",!c[1]),H(a,"splitpanes--dragging",c[6]||c[7])},m(h,d){te(h,a,d),g&&g.m(a,null),c[17](a),m=!0},p(h,d){g&&g.p&&(!m||d[0]&32768)&&Re(g,_,h,h[15],m?Ae(_,h[15],d,null):De(h[15]),null),(!m||d[0]&1)&&M(a,"id",h[0]),(!m||d[0]&24&&r!==(r=`splitpanes ${h[3]||""} ${h[4]||""}`))&&M(a,"class",r),(!m||d[0]&4)&&M(a,"style",h[2]),d[0]&26&&H(a,"splitpanes--horizontal",h[1]),d[0]&26&&H(a,"splitpanes--vertical",!h[1]),d[0]&216&&H(a,"splitpanes--dragging",h[6]||h[7])},i(h){m||(Le(g,h),m=!0)},o(h){Ne(g,h),m=!1},d(h){h&&I(a),g&&g.d(h),c[17](null)}}}const Be={};function ne(c){if(!c.endsWith("px"))return;const a=parseFloat(c.slice(0,c.length-2));return isNaN(a)?void 0:a}function be(c){const a=c,r=c,{clientX:m,clientY:_}="ontouchstart"in window&&r.touches?r.touches[0]:a;return{x:m,y:_}}function dn(c,a,r){let m,_,g,{$$slots:h={},$$scope:d}=a,{id:N=void 0}=a,{horizontal:P=!1}=a,{pushOtherPanes:p=!0}=a,{dblClickSplitter:w=!0}=a,{rtl:V="auto"}=a,{firstSplitter:q=!1}=a,{style:j=null}=a,{theme:Y="default-theme"}=a,{class:G=""}=a;const y=sn();let b,x=!1,E=!1,O=!1,k=-1,R=-1,C,o=new Array,D=fe(P);W(c,D,e=>r(28,g=e));const B=fe(q);W(c,B,e=>r(27,_=e));const T=fe(void 0);W(c,T,e=>r(26,m=e));let F=null,Q=null,Z=null;function U(e){return o.findIndex(i=>i.key===e)}ln(Be,{showFirstSplitter:B,veryFirstPaneKey:T,isHorizontal:D,onPaneInit:e=>(m===void 0&&J(T,m=e,m),{onSplitterDown:i=>{const t=U(e);t>0&&Ke(i,t-1)},onSplitterClick:i=>{const t=U(e);t>0&&He(i,t)},onSplitterDblClick:i=>{w&&ze(i,U(e))}}),onPaneAdd:X,onPaneClick:Ve,onPaneRemove:Ie});async function X(e){let i=-1;Array.from(e.element.parentNode.children).some(t=>(t.className.includes("splitpanes__pane")&&i++,t===e.element)),i===0&&J(T,m=e.key,m),o.splice(i,0,e);for(let t=0;t<o.length;t++)o[t].index=t;x&&(await ce(),le(o[i],void 0),y("pane-add",{index:i,panes:K()}))}async function Ie(e){const i=o.findIndex(t=>t.key===e);if(i>=0){const t=o.splice(i,1)[0];for(let n=0;n<o.length;n++)o[n].index=n;i===0&&J(T,m=o.length>0?o[0].key:void 0,m),x&&(await ce(),le(void 0,{...t,index:i}),y("pane-remove",{removed:t,panes:K()}))}}function Ve(e,i){y("pane-click",o.find(t=>{t.key==i}))}Oe(()=>{en(),le(),x=!0,y("ready")}),Te(()=>{x&&me(),x=!1});function pe(e){if(V==="auto")try{return e.direction==="rtl"}catch{}return V===!0}function qe(){document.body.style.cursor=D?"col-resize":"row-resize",document.addEventListener("mousemove",$,{passive:!1}),document.addEventListener("mouseup",ee),"ontouchstart"in window&&(document.addEventListener("touchmove",$,{passive:!1}),document.addEventListener("touchend",ee))}function me(){document.body.style.cursor="",document.removeEventListener("mousemove",$),document.removeEventListener("mouseup",ee),"ontouchstart"in window&&(document.removeEventListener("touchmove",$),document.removeEventListener("touchend",ee))}const ie=e=>e.nodeType===Node.ELEMENT_NODE&&e.classList.contains("splitpanes__splitter");function Se(e,i,t){let n=e[P?"y":"x"];return t&&!P&&(n=i-n),n}function Ke(e,i){r(6,E=!0),k=i;const t=k+1,n=o[t];n.setSplitterActive(!0);let u=n.element;for(;u!=null&&(u=u.previousSibling,!ie(u)););u==null&&console.error("Splitpane Error: Active splitter wasn't found!"),F=u;const l=window.getComputedStyle(b),s=be(e);Q=se(s,F)[P?"y":"x"];const f=pe(l),v=Pe(b,l)[P?"height":"width"],A=se(s,b);Z=Se(A,v,f),qe()}function $(e){if(E){e.preventDefault(),r(7,O=!0);const i=window.getComputedStyle(b),t=be(e),n=se(t,b,i);Ge(n,i),y("resize",K())}}function ee(){O&&y("resized",K()),r(6,E=!1);const e=k+1;o[e].setSplitterActive(!1),setTimeout(()=>{r(7,O=!1),me()},100)}function He(e,i){"ontouchstart"in window&&(e.preventDefault(),w&&(R===i?(C&&clearTimeout(C),C=null,ze(e,i),R=-1):(R=i,C=setTimeout(()=>{R=-1},500)))),O||y("splitter-click",o[i])}function ze(e,i){let t=0;for(let u=0;u<o.length;u++){const l=o[u],s=u===i?l.max():l.min();l.setSz(s),u!==i&&(t+=l.min())}const n=o[i],S=n.sz()-t;n.setSz(S),y("pane-maximize",n),y("resized",K()),r(6,E=!1)}function K(){const e=new Array(o.length);for(let i=0;i<o.length;i++){const t=o[i];e[i]={min:t.min(),max:t.max(),size:t.sz(),snap:t.snap()}}return e}const ge=(e,i=!0)=>{if(e.getPropertyValue("box-sizing")==="border-box")return;const t=ne(e.getPropertyValue("border-left-width"));if(t===void 0){console.error("Splitpanes Error: Fail to parse container `border-left-width`.");return}const n=ne(e.getPropertyValue("border-top-width"));if(n===void 0){console.error("Splitpanes Error: Fail to parse container `border-top-width`.");return}const S={left:t,top:n};if(i){const u=ne(e.getPropertyValue("border-right-width"));if(u===void 0){console.error("Splitpanes Error: Fail to parse container `border-right-width`.");return}const l=ne(e.getPropertyValue("border-bottom-width"));if(l===void 0){console.error("Splitpanes Error: Fail to parse container `border-bottom-width`.");return}const s=S;s.right=u,s.bottom=l}return S};function We(e,i){i||(i=window.getComputedStyle(e));const t=e.getBoundingClientRect(),n=ge(i,!1)||{left:0,top:0};return{x:t.left+n.left,y:t.top+n.top}}function Pe(e,i){i||(i=window.getComputedStyle(e));const t=e.getBoundingClientRect(),n=ge(i,!0)||{left:0,top:0,right:0,bottom:0};return{width:t.width-n.left-n.right,height:t.height-n.top-n.bottom,x:t.left+n.left,y:t.top+n.top}}function se(e,i,t){const n=We(i,t);return{x:e.x-n.x,y:e.y-n.y}}function je(e,i,t){const n=L=>L.getBoundingClientRect()[P?"height":"width"];if(F==null)return e;const S=n(F),u=S-Q;let l=0,s=F.previousSibling;for(;s!=null;)ie(s)&&(l+=n(s)),s=s.previousSibling;let f=0,v=F.nextSibling;for(;v!=null;)ie(v)&&(f+=n(v)),v=v.nextSibling;const A=l+(t&&!P?u:Q)+(e-Z)*S/i,ae=l+S+f;return(e-A)/(i-ae)}function Ye(e,i){const t=pe(i),n=Pe(b,i)[P?"height":"width"],S=Se(e,n,t);return je(S,n,t)*100}function Ge(e,i){const t=k;let n={prevPanesSize:_e(t),nextPanesSize:ve(t),prevReachedMinPanes:0,nextReachedMinPanes:0};const S=0+(p?0:n.prevPanesSize),u=100-(p?0:n.nextPanesSize);let l=[t,t+1],s=o[l[0]]||null,f=o[l[1]]||null;const v=Math.max(Math.min(Ye(e,i),u),S),A=n.prevPanesSize+s.min()+s.snap(),ae=100-(n.nextPanesSize+f.min()+f.snap());let L=v,re=!1;v<=A?v>n.prevPanesSize+s.min()&&(L=Math.max(s.min()+n.prevPanesSize,100-(f.max()+n.nextPanesSize)),re=!0):v>=ae&&v<100-n.nextPanesSize-f.min()&&(L=Math.min(100-(f.min()+n.nextPanesSize),s.max()+n.prevPanesSize),re=!0);const ye=s.max()<100&&L>=s.max()+n.prevPanesSize,tn=f.max()<100&&L<=100-(f.max()+n.nextPanesSize);if(ye||tn)ye?(s.setSz(s.max()),f.setSz(Math.max(100-s.max()-n.prevPanesSize-n.nextPanesSize,0))):(s.setSz(Math.max(100-f.max()-n.prevPanesSize-n.nextPanesSize,0)),f.setSz(f.max()));else{if(p&&!re){const we=Qe(n,L);if(!we)return;({sums:n,panesToResize:l}=we),s=o[l[0]]||null,f=o[l[1]]||null}s!==null&&s.setSz(Math.min(Math.max(L-n.prevPanesSize-n.prevReachedMinPanes,s.min()),s.max())),f!==null&&f.setSz(Math.min(Math.max(100-L-n.nextPanesSize-n.nextReachedMinPanes,f.min()),f.max()))}}function Qe(e,i){var S,u;const t=k,n=[t,t+1];if(i<e.prevPanesSize+o[n[0]].min()){if(n[0]=(S=Ue(t))==null?void 0:S.index,e.prevReachedMinPanes=0,n[0]<t)for(let l=0;l<o.length;l++){const s=o[l];l>n[0]&&l<=t&&(s.setSz(s.min()),e.prevReachedMinPanes+=s.min())}if(e.prevPanesSize=_e(n[0]),n[0]===void 0){e.prevReachedMinPanes=0,o[0].setSz(o[0].min());for(let l=0;l<o.length;l++){const s=o[l];l>0&&l<=t&&(s.setSz(s.min()),e.prevReachedMinPanes+=s.min())}return o[n[1]].setSz(100-e.prevReachedMinPanes-o[0].min()-e.prevPanesSize-e.nextPanesSize),null}}if(i>100-e.nextPanesSize-o[n[1]].min()){if(n[1]=(u=Xe(t))==null?void 0:u.index,e.nextReachedMinPanes=0,n[1]>t+1)for(let s=0;s<o.length;s++){const f=o[s];s>t&&s<n[1]&&(f.setSz(f.min()),e.nextReachedMinPanes+=f.min())}e.nextPanesSize=ve(n[1]-1);const l=o.length;if(n[1]===void 0){e.nextReachedMinPanes=0,o[l-1].setSz(o[l-1].min());for(let s=0;s<o.length;s++){const f=o[s];s<l-1&&s>=t+1&&(f.setSz(f.min()),e.nextReachedMinPanes+=f.min())}return o[n[0]].setSz(100-e.prevPanesSize-e.nextReachedMinPanes-o[l-1].min()-e.nextPanesSize),null}}return{sums:e,panesToResize:n}}function _e(e){return o.reduce((i,t,n)=>i+(n<e?t.sz():0),0)}function ve(e){return o.reduce((i,t,n)=>i+(n>e+1?t.sz():0),0)}function Ue(e){return[...o].reverse().find(t=>t.index<e&&t.sz()>t.min())||null}function Xe(e){return o.find(t=>t.index>e+1&&t.sz()>t.min())||null}function le(e,i){!e&&!i||o.length===1?Ze():o.some(t=>t.givenSize!=null||t.min()||t.max()<100)?$e(e):Je(),x&&y("resized",K())}function Je(){const e=o.length,i=100/e;let t=0,n=Array(),S=Array();for(let u=0;u<o.length;u++){const l=o[u],s=l.min(),f=l.max(),v=Math.max(Math.min(i,f),s);l.setSz(v),t-=v,v>=f&&n.push(l.key),v<=s&&S.push(l.key)}t>.1&&oe(t,n,S)}function Ze(){let e=100,i=Array(),t=Array(),n=0;for(let u=0;u<o.length;u++){const l=o[u],s=l.sz();e-=s,l.givenSize!=null&&n++,s>=l.max()&&i.push(l.key),s<=l.min()&&t.push(l.key)}let S=100;if(e>.1){for(let u=0;u<o.length;u++){const l=o[u];if(l.givenSize==null){const s=o.length,f=Math.max(Math.min(e/(s-n),l.max()),l.min());l.setSz(f)}S-=l.sz()}S>.1&&oe(e,i,t)}}function $e(e){const i=o.length;let t=100/i,n=0,S=new Array,u=new Array;e&&e.givenSize!=null&&(t=(100-e.givenSize)/(i-1));for(let l=0;l<o.length;l++){const s=o[l],f=s.sz();n-=f,f>=s.max()&&S.push(s.key),f<=s.min()&&u.push(s.key)}if(!(Math.abs(n)<.1)){for(let l=0;l<o.length;l++){const s=o[l],f=s.max(),v=s.min();e&&e.givenSize!=null&&e.key===s.key||s.setSz(Math.max(Math.min(t,f),v));const A=s.sz();n-=A,A>=f&&S.push(s.key),A<=v&&u.push(s.key)}n>.1&&oe(n,S,u)}}async function oe(e,i,t){const n=o.length;let S;if(e>0?S=e/(n-i.length):S=e/(n-t.length),o.length===1)o[0].setSz(100),e=0;else for(let u=0;u<o.length;u++){const l=o[u],s=l.sz();if(e>0&&!i.includes(l.key)){const f=Math.max(Math.min(s+S,l.max()),l.min());e-=f-s,l.setSz(f)}else if(!t.includes(l.key)){const f=Math.max(Math.min(s+S,l.max()),l.min());e-=f-s,l.setSz(f)}}Math.abs(e)>.1&&(await ce(),x&&console.warn("Splitpanes: Could not resize panes correctly due to their constraints."))}function en(){var e;if(b){const i=Array.from(b.children);for(let t=0;t<i.length;t++){const n=i[t],S=n.classList.contains("splitpanes__pane"),u=n.classList.contains("splitpanes__splitter");if(!S&&!u){(e=n.parentNode)==null||e.removeChild(n),console.warn("Splitpanes: Only <Pane> elements are allowed at the root of <Splitpanes>. One of your DOM nodes was removed.");return}}}}function nn(e){Fe[e?"unshift":"push"](()=>{b=e,r(5,b)})}return c.$$set=e=>{"id"in e&&r(0,N=e.id),"horizontal"in e&&r(1,P=e.horizontal),"pushOtherPanes"in e&&r(11,p=e.pushOtherPanes),"dblClickSplitter"in e&&r(12,w=e.dblClickSplitter),"rtl"in e&&r(13,V=e.rtl),"firstSplitter"in e&&r(14,q=e.firstSplitter),"style"in e&&r(2,j=e.style),"theme"in e&&r(3,Y=e.theme),"class"in e&&r(4,G=e.class),"$$scope"in e&&r(15,d=e.$$scope)},c.$$.update=()=>{c.$$.dirty[0]&2&&J(D,g=P,g),c.$$.dirty[0]&16384&&J(B,_=q,_)},[N,P,j,Y,G,b,E,O,D,B,T,p,w,V,q,d,h,nn]}class zn extends Me{constructor(a){super(),ke(this,a,dn,un,Ce,{id:0,horizontal:1,pushOtherPanes:11,dblClickSplitter:12,rtl:13,firstSplitter:14,style:2,theme:3,class:4},null,[-1,-1,-1])}}function xe(c){let a,r,m,_,g;return{c(){a=ue("div"),this.h()},l(h){a=de(h,"DIV",{class:!0}),he(a).forEach(I),this.h()},h(){M(a,"class",r="splitpanes__splitter "+(c[2]?"splitpanes__splitter__active":""))},m(h,d){te(h,a,d),_||(g=on(m=c[11].call(null,a)),_=!0)},p(h,d){d&4&&r!==(r="splitpanes__splitter "+(h[2]?"splitpanes__splitter__active":""))&&M(a,"class",r)},d(h){h&&I(a),_=!1,g()}}}function hn(c){let a,r,m,_,g,h,d=(c[4]!==c[9]||c[5])&&xe(c);const N=c[20].default,P=Ee(N,c,c[19],null);return{c(){d&&d.c(),a=an(),r=ue("div"),P&&P.c(),this.h()},l(p){d&&d.l(p),a=rn(p),r=de(p,"DIV",{class:!0,style:!0});var w=he(r);P&&P.l(w),w.forEach(I),this.h()},h(){M(r,"class",m=`splitpanes__pane ${c[0]||""}`),M(r,"style",c[3])},m(p,w){d&&d.m(p,w),te(p,a,w),te(p,r,w),P&&P.m(r,null),c[21](r),_=!0,g||(h=cn(r,"click",c[10]),g=!0)},p(p,[w]){p[4]!==p[9]||p[5]?d?d.p(p,w):(d=xe(p),d.c(),d.m(a.parentNode,a)):d&&(d.d(1),d=null),P&&P.p&&(!_||w&524288)&&Re(P,N,p,p[19],_?Ae(N,p[19],w,null):De(p[19]),null),(!_||w&1&&m!==(m=`splitpanes__pane ${p[0]||""}`))&&M(r,"class",m),(!_||w&8)&&M(r,"style",p[3])},i(p){_||(Le(P,p),_=!0)},o(p){Ne(P,p),_=!1},d(p){d&&d.d(p),p&&I(a),p&&I(r),P&&P.d(p),c[21](null),g=!1,h()}}}function pn(c,a,r){let m,_,g,h,d,{$$slots:N={},$$scope:P}=a;const{onPaneInit:p,onPaneAdd:w,onPaneRemove:V,onPaneClick:q,isHorizontal:j,showFirstSplitter:Y,veryFirstPaneKey:G}=fn(Be);W(c,j,z=>r(18,g=z)),W(c,Y,z=>r(5,d=z)),W(c,G,z=>r(4,h=z));let{size:y=null}=a,{minSize:b=0}=a,{maxSize:x=100}=a,{snapSize:E=0}=a,{class:O=""}=a;const k={};let R,C=y==null?0:y,o=!1;const D=typeof window<"u",{onSplitterDown:B,onSplitterClick:T,onSplitterDblClick:F}=p(k);function Q(z){q(z,k)}const Z=z=>{z.onmousedown=B,"ontouchstart"in window&&(z.ontouchstart=B),z.onclick=T,z.ondblclick=F};Oe(()=>{w({key:k,element:R,givenSize:y,sz:()=>C,setSz:X=>{r(16,C=X),y!=null&&r(12,y=C)},min:()=>b,max:()=>x,snap:()=>E,setSplitterActive:X=>{r(2,o=X)}})}),Te(()=>{V(k)});function U(z){Fe[z?"unshift":"push"](()=>{R=z,r(1,R)})}return c.$$set=z=>{"size"in z&&r(12,y=z.size),"minSize"in z&&r(13,b=z.minSize),"maxSize"in z&&r(14,x=z.maxSize),"snapSize"in z&&r(15,E=z.snapSize),"class"in z&&r(0,O=z.class),"$$scope"in z&&r(19,P=z.$$scope)},c.$$.update=()=>{c.$$.dirty&4096&&y!=null&&r(16,C=y),c.$$.dirty&262144&&r(17,m=g?"height":"width"),c.$$.dirty&225280&&r(3,_=[!D&&b>0?`min-${m}: ${b}%;`:void 0,!D&&x<100?`max-${m}: ${x}%;`:void 0,D||y!=null?`${m}: ${C}%;`:void 0].filter(z=>z!==void 0).join(" ")||void 0)},[O,R,o,_,h,d,j,Y,G,k,Q,Z,y,b,x,E,C,m,g,P,N,U]}class gn extends Me{constructor(a){super(),ke(this,a,pn,hn,Ce,{size:12,minSize:13,maxSize:14,snapSize:15,class:0})}}export{gn as P,zn as S};

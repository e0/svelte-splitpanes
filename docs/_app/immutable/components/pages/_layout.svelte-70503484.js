import{S as te,i as le,s as se,k as v,l as b,m as j,h as u,n as c,b as C,C as h,B as ee,D as Pe,E as we,q as P,a as L,r as w,c as R,u as F,p as Ce,F as ze,G as $e,H as De,w as ue,x as pe,y as _e,I as Me,f as Z,t as x,z as me,J as Oe,K as qe,e as ye,L as Be,M as Ge,N as U,O as He,P as Ue,Q as Fe,R as Je}from"../../chunks/index-15259a8c.js";import{j as B}from"../../chunks/singletons-5b10adf0.js";import{p as Ne}from"../../chunks/stores-a1f3eb77.js";const Ke="<style>pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}.hljs{background:#011627;color:#d6deeb}.hljs-keyword{color:#c792ea;font-style:italic}.hljs-built_in{color:#addb67;font-style:italic}.hljs-type{color:#82aaff}.hljs-literal{color:#ff5874}.hljs-number{color:#f78c6c}.hljs-regexp{color:#5ca7e4}.hljs-string{color:#ecc48d}.hljs-subst{color:#d3423e}.hljs-symbol{color:#82aaff}.hljs-class{color:#ffcb8b}.hljs-function{color:#82aaff}.hljs-title{color:#dcdcaa;font-style:italic}.hljs-params{color:#7fdbca}.hljs-comment{color:#637777;font-style:italic}.hljs-doctag{color:#7fdbca}.hljs-meta,.hljs-meta .hljs-keyword{color:#82aaff}.hljs-meta .hljs-string{color:#ecc48d}.hljs-section{color:#82b1ff}.hljs-attr,.hljs-name,.hljs-tag{color:#7fdbca}.hljs-attribute{color:#80cbc4}.hljs-variable{color:#addb67}.hljs-bullet{color:#d9f5dd}.hljs-code{color:#80cbc4}.hljs-emphasis{color:#c792ea;font-style:italic}.hljs-strong{color:#addb67;font-weight:700}.hljs-formula{color:#c792ea}.hljs-link{color:#ff869a}.hljs-quote{color:#697098;font-style:italic}.hljs-selector-tag{color:#ff6363}.hljs-selector-id{color:#fad430}.hljs-selector-class{color:#addb67;font-style:italic}.hljs-selector-attr,.hljs-selector-pseudo{color:#c792ea;font-style:italic}.hljs-template-tag{color:#c792ea}.hljs-template-variable{color:#addb67}.hljs-addition{color:#addb67ff;font-style:italic}.hljs-deletion{color:#ef535090;font-style:italic}</style>",Qe=Ke,Se=l=>l.endsWith("/")?l.slice(0,-1):l,ge=(l,e)=>Se(B+l)===Se(e.url.pathname);function Ee(l,e,t){const s=l.slice();return s[2]=e[t],s}function Te(l,e,t){const s=l.slice();return s[5]=e[t].title,s[6]=e[t].path,s}function Le(l){let e,t,s=l[5]+"",n,a,o,i;return{c(){e=v("li"),t=v("a"),n=P(s),i=L(),this.h()},l(f){e=b(f,"LI",{class:!0});var r=j(e);t=b(r,"A",{"data-sveltekit-preload-data":!0,class:!0,"aria-current":!0,href:!0});var _=j(t);n=w(_,s),_.forEach(u),i=R(r),r.forEach(u),this.h()},h(){c(t,"data-sveltekit-preload-data",""),c(t,"class","page svelte-6bn3ki"),c(t,"aria-current",a=ge(l[6],l[1])?"page":void 0),c(t,"href",o=B+l[6]),c(e,"class","svelte-6bn3ki")},m(f,r){C(f,e,r),h(e,t),h(t,n),h(e,i)},p(f,r){r&1&&s!==(s=f[5]+"")&&F(n,s),r&3&&a!==(a=ge(f[6],f[1])?"page":void 0)&&c(t,"aria-current",a),r&1&&o!==(o=B+f[6])&&c(t,"href",o)},d(f){f&&u(e)}}}function Re(l){let e,t,s=l[2].title+"",n,a,o,i,f=l[2].pages,r=[];for(let _=0;_<f.length;_+=1)r[_]=Le(Te(l,f,_));return{c(){e=v("li"),t=v("span"),n=P(s),a=L(),o=v("ul");for(let _=0;_<r.length;_+=1)r[_].c();i=L(),this.h()},l(_){e=b(_,"LI",{class:!0});var g=j(e);t=b(g,"SPAN",{class:!0});var p=j(t);n=w(p,s),p.forEach(u),a=R(g),o=b(g,"UL",{class:!0});var k=j(o);for(let m=0;m<r.length;m+=1)r[m].l(k);k.forEach(u),i=R(g),g.forEach(u),this.h()},h(){c(t,"class","section svelte-6bn3ki"),c(o,"class","svelte-6bn3ki"),c(e,"class","svelte-6bn3ki")},m(_,g){C(_,e,g),h(e,t),h(t,n),h(e,a),h(e,o);for(let p=0;p<r.length;p+=1)r[p].m(o,null);h(e,i)},p(_,g){if(g&1&&s!==(s=_[2].title+"")&&F(n,s),g&3){f=_[2].pages;let p;for(p=0;p<f.length;p+=1){const k=Te(_,f,p);r[p]?r[p].p(k,g):(r[p]=Le(k),r[p].c(),r[p].m(o,null))}for(;p<r.length;p+=1)r[p].d(1);r.length=f.length}},d(_){_&&u(e),Pe(r,_)}}}function We(l){let e,t,s=l[0],n=[];for(let a=0;a<s.length;a+=1)n[a]=Re(Ee(l,s,a));return{c(){e=v("nav"),t=v("ul");for(let a=0;a<n.length;a+=1)n[a].c();this.h()},l(a){e=b(a,"NAV",{"aria-label":!0,class:!0});var o=j(e);t=b(o,"UL",{class:!0});var i=j(t);for(let f=0;f<n.length;f+=1)n[f].l(i);i.forEach(u),o.forEach(u),this.h()},h(){c(t,"class","sidebar svelte-6bn3ki"),c(e,"aria-label","Docs"),c(e,"class","svelte-6bn3ki")},m(a,o){C(a,e,o),h(e,t);for(let i=0;i<n.length;i+=1)n[i].m(t,null)},p(a,[o]){if(o&3){s=a[0];let i;for(i=0;i<s.length;i+=1){const f=Ee(a,s,i);n[i]?n[i].p(f,o):(n[i]=Re(f),n[i].c(),n[i].m(t,null))}for(;i<n.length;i+=1)n[i].d(1);n.length=s.length}},i:ee,o:ee,d(a){a&&u(e),Pe(n,a)}}}function Xe(l,e,t){let s;we(l,Ne,a=>t(1,s=a));let{contents:n=[]}=e;return l.$$set=a=>{"contents"in a&&t(0,n=a.contents)},[n,s]}class Ye extends te{constructor(e){super(),le(this,e,Xe,We,se,{contents:0})}}function Ze(l){let e,t,s,n,a,o;return{c(){e=v("button"),t=v("span"),s=P(l[1]),this.h()},l(i){e=b(i,"BUTTON",{"aria-pressed":!0,class:!0});var f=j(e);t=b(f,"SPAN",{style:!0});var r=j(t);s=w(r,l[1]),r.forEach(u),f.forEach(u),this.h()},h(){Ce(t,"display","none"),c(e,"aria-pressed",n=l[0]?"true":"false"),c(e,"class","svelte-ki38mm")},m(i,f){C(i,e,f),h(e,t),h(t,s),a||(o=ze(e,"click",l[2]),a=!0)},p(i,[f]){f&2&&F(s,i[1]),f&1&&n!==(n=i[0]?"true":"false")&&c(e,"aria-pressed",n)},i:ee,o:ee,d(i){i&&u(e),a=!1,o()}}}function xe(l,e,t){let{pressed:s}=e,{label:n}=e;const a=()=>t(0,s=!s);return l.$$set=o=>{"pressed"in o&&t(0,s=o.pressed),"label"in o&&t(1,n=o.label)},[s,n,a]}class et extends te{constructor(e){super(),le(this,e,xe,Ze,se,{pressed:0,label:1})}}function tt(l){let e,t,s,n,a,o,i,f,r,_,g;function p(m){l[1](m)}let k={label:"RTL direction"};return l[0]!==void 0&&(k.pressed=l[0]),o=new et({props:k}),$e.push(()=>De(o,"pressed",p,l[0])),{c(){e=v("div"),t=P(`Splitpane direction:
	`),s=v("span"),n=P("LTR"),a=L(),ue(o.$$.fragment),f=L(),r=v("span"),_=P("RTL"),this.h()},l(m){e=b(m,"DIV",{class:!0});var T=j(e);t=w(T,`Splitpane direction:
	`),s=b(T,"SPAN",{"aria-hidden":!0});var D=j(s);n=w(D,"LTR"),D.forEach(u),a=R(T),pe(o.$$.fragment,T),f=R(T),r=b(T,"SPAN",{"aria-hidden":!0});var A=j(r);_=w(A,"RTL"),A.forEach(u),T.forEach(u),this.h()},h(){c(s,"aria-hidden","true"),c(r,"aria-hidden","true"),c(e,"class","input-output-toggle svelte-snxs5h")},m(m,T){C(m,e,T),h(e,t),h(e,s),h(s,n),h(e,a),_e(o,e,null),h(e,f),h(e,r),h(r,_),g=!0},p(m,[T]){const D={};!i&&T&1&&(i=!0,D.pressed=m[0],Me(()=>i=!1)),o.$set(D)},i(m){g||(Z(o.$$.fragment,m),g=!0)},o(m){x(o.$$.fragment,m),g=!1},d(m){m&&u(e),me(o)}}}function lt(l,e,t){let{isRTL:s}=e;function n(a){s=a,t(0,s)}return l.$$set=a=>{"isRTL"in a&&t(0,s=a.isRTL)},[s,n]}class st extends te{constructor(e){super(),le(this,e,lt,tt,se,{isRTL:0})}}function Ie(l){let e,t=l[2].title+"",s,n;return{c(){e=v("a"),s=P(t),this.h()},l(a){e=b(a,"A",{"data-sveltekit-preload-data":!0,href:!0,class:!0});var o=j(e);s=w(o,t),o.forEach(u),this.h()},h(){c(e,"data-sveltekit-preload-data",""),c(e,"href",n=B+l[2].path),c(e,"class","svelte-it1f3m")},m(a,o){C(a,e,o),h(e,s)},p(a,o){o&4&&t!==(t=a[2].title+"")&&F(s,t),o&4&&n!==(n=B+a[2].path)&&c(e,"href",n)},d(a){a&&u(e)}}}function Ae(l){let e,t=l[1].title+"",s,n;return{c(){e=v("a"),s=P(t),this.h()},l(a){e=b(a,"A",{"data-sveltekit-preload-data":!0,href:!0,class:!0});var o=j(e);s=w(o,t),o.forEach(u),this.h()},h(){c(e,"data-sveltekit-preload-data",""),c(e,"href",n=B+l[1].path),c(e,"class","svelte-it1f3m")},m(a,o){C(a,e,o),h(e,s)},p(a,o){o&2&&t!==(t=a[1].title+"")&&F(s,t),o&2&&n!==(n=B+a[1].path)&&c(e,"href",n)},d(a){a&&u(e)}}}function at(l){let e,t,s,n,a,o,i,f,r,_,g,p,k,m,T,D,A,z,ae,ne,oe,O,M,G,q,ve,ie,re,H,ce,N,fe,$;document.title=e="Svelte-Splitpanes"+(l[3]?` - ${l[3].title}`:"");const he=l[9].default,I=Oe(he,l,l[8],null);let y=l[2]&&Ie(l),S=l[1]&&Ae(l);H=new Ye({props:{contents:l[4]}});function Ve(d){l[10](d)}let be={};return l[0]!==void 0&&(be.isRTL=l[0]),N=new st({props:be}),$e.push(()=>De(N,"isRTL",Ve,l[0])),{c(){t=v("meta"),s=new qe(!1),n=ye(),a=L(),o=v("div"),i=v("div"),f=L(),r=v("main"),I&&I.c(),_=L(),g=v("div"),p=v("div"),k=v("span"),m=P("previous"),T=L(),y&&y.c(),D=L(),A=v("div"),z=v("span"),ae=P("next"),ne=L(),S&&S.c(),oe=L(),O=v("div"),M=v("div"),G=v("h1"),q=v("img"),ie=P(" Svelte-Splitpane"),re=L(),ue(H.$$.fragment),ce=L(),ue(N.$$.fragment),this.h()},l(d){const E=Be("svelte-1cl4sjo",document.head);t=b(E,"META",{name:!0,content:!0}),s=Ge(E,!1),n=ye(),E.forEach(u),a=R(d),o=b(d,"DIV",{class:!0});var V=j(o);i=b(V,"DIV",{role:!0,class:!0}),j(i).forEach(u),f=R(V),r=b(V,"MAIN",{class:!0});var J=j(r);I&&I.l(J),_=R(J),g=b(J,"DIV",{class:!0});var K=j(g);p=b(K,"DIV",{class:!0});var Q=j(p);k=b(Q,"SPAN",{class:!0});var je=j(k);m=w(je,"previous"),je.forEach(u),T=R(Q),y&&y.l(Q),Q.forEach(u),D=R(K),A=b(K,"DIV",{class:!0});var W=j(A);z=b(W,"SPAN",{class:!0});var ke=j(z);ae=w(ke,"next"),ke.forEach(u),ne=R(W),S&&S.l(W),W.forEach(u),K.forEach(u),J.forEach(u),oe=R(V),O=b(V,"DIV",{class:!0});var X=j(O);M=b(X,"DIV",{role:!0,class:!0});var Y=j(M);G=b(Y,"H1",{class:!0});var de=j(G);q=b(de,"IMG",{src:!0,alt:!0,width:!0,height:!0}),ie=w(de," Svelte-Splitpane"),de.forEach(u),re=R(Y),pe(H.$$.fragment,Y),Y.forEach(u),ce=R(X),pe(N.$$.fragment,X),X.forEach(u),V.forEach(u),this.h()},h(){c(t,"name","description"),c(t,"content","A Fantastic pane splitter for Svelte"),s.a=n,c(i,"role","presentation"),c(i,"class","toc-container-space svelte-it1f3m"),c(k,"class","svelte-it1f3m"),U(k,"faded",!l[2]),c(p,"class","svelte-it1f3m"),c(z,"class","svelte-it1f3m"),U(z,"faded",!l[1]),c(A,"class","svelte-it1f3m"),c(g,"class","controls svelte-it1f3m"),c(r,"class","svelte-it1f3m"),U(r,"rtl-containers",l[0]),He(q.src,ve=B+"/favicon.svg")||c(q,"src",ve),c(q,"alt","Icon"),c(q,"width","30"),c(q,"height","30"),c(G,"class","toc-head svelte-it1f3m"),c(M,"role","presentation"),c(M,"class","toc-contents-wrap svelte-it1f3m"),c(O,"class","toc-container svelte-it1f3m"),c(o,"class","page-container svelte-it1f3m")},m(d,E){h(document.head,t),s.m(Qe,document.head),h(document.head,n),C(d,a,E),C(d,o,E),h(o,i),h(o,f),h(o,r),I&&I.m(r,null),h(r,_),h(r,g),h(g,p),h(p,k),h(k,m),h(p,T),y&&y.m(p,null),h(g,D),h(g,A),h(A,z),h(z,ae),h(A,ne),S&&S.m(A,null),h(o,oe),h(o,O),h(O,M),h(M,G),h(G,q),h(G,ie),h(M,re),_e(H,M,null),h(O,ce),_e(N,O,null),$=!0},p(d,[E]){(!$||E&8)&&e!==(e="Svelte-Splitpanes"+(d[3]?` - ${d[3].title}`:""))&&(document.title=e),I&&I.p&&(!$||E&256)&&Ue(I,he,d,d[8],$?Je(he,d[8],E,null):Fe(d[8]),null),(!$||E&4)&&U(k,"faded",!d[2]),d[2]?y?y.p(d,E):(y=Ie(d),y.c(),y.m(p,null)):y&&(y.d(1),y=null),(!$||E&2)&&U(z,"faded",!d[1]),d[1]?S?S.p(d,E):(S=Ae(d),S.c(),S.m(A,null)):S&&(S.d(1),S=null),(!$||E&1)&&U(r,"rtl-containers",d[0]);const V={};!fe&&E&1&&(fe=!0,V.isRTL=d[0],Me(()=>fe=!1)),N.$set(V)},i(d){$||(Z(I,d),Z(H.$$.fragment,d),Z(N.$$.fragment,d),$=!0)},o(d){x(I,d),x(H.$$.fragment,d),x(N.$$.fragment,d),$=!1},d(d){u(t),u(n),d&&s.d(),d&&u(a),d&&u(o),I&&I.d(d),y&&y.d(),S&&S.d(),me(H),me(N)}}}function nt(l,e,t){let s,n,a,o,i,f;we(l,Ne,m=>t(7,f=m));let{$$slots:r={},$$scope:_}=e,g=!1;const p=[{title:"Getting started",pages:[{title:"Introduction",path:"/"}]},{title:"General Examples",pages:[{title:"Min-Max",path:"/examples/min-max"},{title:"Default Size",path:"/examples/default-size"},{title:"Lock Layout",path:"/examples/lock-layout"},{title:"Push Other Panes",path:"/examples/push-other-panes"},{title:"Add Remove Splitter",path:"/examples/add-remove-splitter"},{title:"ChangeOrientation",path:"/examples/change-orientation"},{title:"Prog Resize",path:"/examples/prog-resize"},{title:"Toggle Panes",path:"/examples/toggle-panes"},{title:"Listen To Events",path:"/examples/listen-to-events"}]},{title:"Snap",pages:[{title:"Simple Snap",path:"/examples/snap/simple"},{title:"Middle Snap",path:"/examples/snap/middle"},{title:"Min-Max Snap",path:"/examples/snap/min-max"}]},{title:"Styling",pages:[{title:"Style Splitters",path:"/examples/styling/splitters"},{title:"Style Splitters Modern",path:"/examples/styling/splitters-modern"}]}];function k(m){g=m,t(0,g)}return l.$$set=m=>{"$$scope"in m&&t(8,_=m.$$scope)},l.$$.update=()=>{l.$$.dirty&192&&t(5,n=s.findIndex(({path:m})=>ge(m,f))),l.$$.dirty&96&&t(3,a=n>=0?s[n]:void 0),l.$$.dirty&96&&t(2,o=n>=1?s[n-1]:void 0),l.$$.dirty&96&&t(1,i=n>=0&&n<s.length-1?s[n+1]:void 0)},t(6,s=p.map(m=>m.pages).flat()),[g,i,o,a,p,n,s,f,_,r,k]}class ct extends te{constructor(e){super(),le(this,e,nt,at,se,{})}}export{ct as default};
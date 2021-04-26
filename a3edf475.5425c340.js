(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{122:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),p=(t(0),t(150)),c={id:"math1",title:"Numpy \uae30\ucd08",sidebar_label:"Numpy \uae30\ucd08"},o={unversionedId:"kdt/math/math1",id:"kdt/math/math1",isDocsHomePage:!1,title:"Numpy \uae30\ucd08",description:"\ud83d\udca1 \u300eKDT \ud504\ub85c\uadf8\ub798\uba38\uc2a4 \uc778\uacf5\uc9c0\ub2a5 \ub370\ube0c\ucf54\uc2a4\u300f\uc5d0\uc11c \uacf5\ubd80\uc911..\ud83d\udc40",source:"@site/docs\\kdt\\math\\math1.md",slug:"/kdt/math/math1",permalink:"/willbe/docs/kdt/math/math1",version:"current",sidebar_label:"Numpy \uae30\ucd08",sidebar:"kdt",previous:{title:"\uc5f0\uc2b5\ubb38\uc81c",permalink:"/willbe/docs/kdt/data_structures/exercise"},next:{title:"\uc120\ud615\ub300\uc218",permalink:"/willbe/docs/kdt/math/math2"}},u=[{value:"1. Numpy \uc2dc\uc791\ud558\uae30",id:"1-numpy-\uc2dc\uc791\ud558\uae30",children:[{value:"Numpy\uc758 \uc18d\ub3c4 \ube44\uad50",id:"numpy\uc758-\uc18d\ub3c4-\ube44\uad50",children:[]},{value:"Numpy \uae30\ubcf8 \uba54\uc11c\ub4dc",id:"numpy-\uae30\ubcf8-\uba54\uc11c\ub4dc",children:[]}]}],i={toc:u};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(p.b)("p",null,"\ud83d\udca1 \u300eKDT \ud504\ub85c\uadf8\ub798\uba38\uc2a4 \uc778\uacf5\uc9c0\ub2a5 \ub370\ube0c\ucf54\uc2a4\u300f\uc5d0\uc11c \uacf5\ubd80\uc911..\ud83d\udc40"),Object(p.b)("h2",{id:"1-numpy-\uc2dc\uc791\ud558\uae30"},"1. Numpy \uc2dc\uc791\ud558\uae30"),Object(p.b)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c \ud30c\uc774\uc36c\uc740 C++, \uc790\ubc14 \ub4f1\uc5d0 \ube44\ud574 \uc18d\ub3c4\uac00 \ub9ce\uc774 \ub290\ub9ac\uba70, \ub9ac\uc2a4\ud2b8\ub294 \ud3b8\ub9ac\ud558\uc9c0\ub9cc \ud2b9\ud788\ub098 \uc18d\ub3c4\uac00 \ub290\ub9b0 \uc5f0\uc0b0\uc774\ub2e4. \ub54c\ubb38\uc5d0 \uc218\uce58 \uc5f0\uc0b0\uc744 \uc804\ubb38\uc801\uc73c\ub85c \ud558\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \ud544\uc694\ud588\uace0, numpy\ub294 \uc5f0\uc0b0\uc744 C\ub85c \uad6c\ud604\ud558\uc5ec \uc5f0\uc0b0 \uc18d\ub3c4\ub97c \ub192\uc600\ub2e4.  "),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-cmd",metastring:'title="numpy \uc124\uce58"',title:'"numpy','\uc124\uce58"':!0},"pip install numpy\n")),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-cmd",metastring:'title="numpy \ubaa8\ub4c8 \ubd88\ub7ec\uc624\uae30"',title:'"numpy',"\ubaa8\ub4c8":!0,'\ubd88\ub7ec\uc624\uae30"':!0},"import numpy as np\n")),Object(p.b)("h3",{id:"numpy\uc758-\uc18d\ub3c4-\ube44\uad50"},"Numpy\uc758 \uc18d\ub3c4 \ube44\uad50"),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-python",metastring:'title="\ub9ac\uc2a4\ud2b8 vs. numpy"',title:'"\ub9ac\uc2a4\ud2b8',"vs.":!0,'numpy"':!0},"L = range(1000)\n%timeit [i**2 for i in L]\n# 334 \xb5s \xb1 18.2 \xb5s per loop (mean \xb1 std. dev. of 7 runs, 1000 loops each)\n\nN = np.arange(1000)\n%timeit N**2\n# 2.17 \xb5s \xb1 260 ns per loop (mean \xb1 std. dev. of 7 runs, 100000 loops each)\n")),Object(p.b)("p",null,"numpy\ub97c \uc0ac\uc6a9\ud558\uc600\uc744 \uacbd\uc6b0, \uac19\uc740 \uc5f0\uc0b0\uc5d0 \ub300\ud574 \ub354 \uc5ec\ub7ec \ubc88 \ubc18\ubcf5\ud558\uba74\uc11c \ub354 \uc9e7\uc740 \uc2dc\uac04\uc774 \uc18c\uc694\ub418\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4.  "),Object(p.b)("h3",{id:"numpy-\uae30\ubcf8-\uba54\uc11c\ub4dc"},"Numpy \uae30\ubcf8 \uba54\uc11c\ub4dc"),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"numpy.array"),": numpy\uc758 container \uc5ed\ud560\uc744 \ud55c\ub2e4.  "),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-python"},"arr = np.array([1, 2, 3])  # \uc77c\ubc18\uc801\uc73c\ub85c \ub9ac\uc2a4\ud2b8\ub97c \ub9ce\uc774 \uc785\ub825\n# array([1, 2, 3])\narr_2d = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])\n# array([[1, 2, 3],\n#        [4, 5, 6],\n#        [7, 8, 9]])\n")),Object(p.b)("p",null,Object(p.b)("inlineCode",{parentName:"p"},"Numpy\uac1d\uccb4.shape"),": numpy\uc758 \ucc28\uc6d0\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4.  "),Object(p.b)("pre",null,Object(p.b)("code",{parentName:"pre",className:"language-python"},"arr.shape\n# (3,)\narr_2d.shape\n# (3, 3)\n")))}l.isMDXComponent=!0},150:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return y}));var r=t(0),a=t.n(r);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),l=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=l(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),m=l(t),b=r,y=m["".concat(c,".").concat(b)]||m[b]||s[b]||p;return t?a.a.createElement(y,o(o({ref:n},i),{},{components:t})):a.a.createElement(y,o({ref:n},i))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,c=new Array(p);c[0]=b;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var i=2;i<p;i++)c[i]=t[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);
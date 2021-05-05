(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{138:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(159)),c={id:"dp_programmers",title:"\ub3d9\uc801\uacc4\ud68d\ubc95 (Dynamic Programming)",sidebar_label:"DP"},i={unversionedId:"coding-practice/dp_programmers",id:"coding-practice/dp_programmers",isDocsHomePage:!1,title:"\ub3d9\uc801\uacc4\ud68d\ubc95 (Dynamic Programming)",description:"\ub3c4\ub451\uc9c8",source:"@site/docs\\coding-practice\\dp_programmers.md",slug:"/coding-practice/dp_programmers",permalink:"/willbe/docs/coding-practice/dp_programmers",version:"current",sidebar_label:"DP",sidebar:"codingpractice",previous:{title:"\ud799 \uc54c\uace0\ub9ac\uc998",permalink:"/willbe/docs/coding-practice/heap_programmers"},next:{title:"\uce74\uce74\uc624 \ucf54\ub529\ud14c\uc2a4\ud2b8 \uae30\ucd9c\ubb38\uc81c",permalink:"/willbe/docs/coding-practice/kakao_programmers"}},p=[{value:"\ub3c4\ub451\uc9c8",id:"\ub3c4\ub451\uc9c8",children:[]}],l={toc:p};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"\ub3c4\ub451\uc9c8"},"\ub3c4\ub451\uc9c8"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"\uc644\uc131\ub3c4"),Object(o.b)("br",{parentName:"p"}),"\n","\ud83d\udd11\ud83d\udd11\ud83d\udd11\ud83d\udd11\ud83d\udd11",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"\uc774\ud574\ub3c4"),Object(o.b)("br",{parentName:"p"}),"\n","\ud83d\udc8a\ud83d\udc8a\ud83d\udc8a\ud83d\udc8a\ud83d\udc8a",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("strong",{parentName:"p"},"\ud47c \ud69f\uc218"),Object(o.b)("br",{parentName:"p"}),"\n","\ud83c\udf96")),Object(o.b)("h5",{id:"\uc785\ucd9c\ub825-\uc608"},"\uc785\ucd9c\ub825 \uc608"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"left"},"money"),Object(o.b)("th",{parentName:"tr",align:"left"},"return"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"left"},"[1, 2, 3, 1]"),Object(o.b)("td",{parentName:"tr",align:"left"},"4")))),Object(o.b)("h5",{id:"\ub0b4-\ud480\uc774"},"\ub0b4 \ud480\uc774"),Object(o.b)("p",null,"\ube44\uc2b7\ud55c \ubb38\uc81c\ub85c \uace0\ubbfc\ud55c \uc801\uc774 \uc788\uc5b4\uc11c \uae08\ubc29 \ud480\uc5c8\ub2e4.  "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python"},"def solution(money):\n    N = len(money)\n    # 1\ubc88 \uc9d1\uc744 \uc120\ud0dd\ud558\ub294 \uacbd\uc6b0\n    lst = [money[0]]*2 + [0]*(N-2)\n    for i in range(2, N-1):  # \ub9c8\uc9c0\ub9c9 \uc9d1 \ube7c\ub294 \uac70 \uc8fc\uc758\n        lst[i] = max(lst[i-1], lst[i-2] + money[i])\n    res = max(lst)\n    # 2\ubc88 \uc9d1\uc744 \uc120\ud0dd\ud558\ub294 \uacbd\uc6b0\n    lst = [0]*N\n    lst[1] = money[1]\n    for i in range(2, N):\n        lst[i] = max(lst[i-1], lst[i-2] + money[i])\n    res = res if res > max(lst) else max(lst)\n    return res\n")))}b.isMDXComponent=!0},159:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=b(r),u=n,d=m["".concat(c,".").concat(u)]||m[u]||s[u]||o;return r?a.a.createElement(d,i(i({ref:t},l),{},{components:r})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);
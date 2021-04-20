(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{101:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return i}));var n=r(3),a=r(7),b=(r(0),r(124)),c={id:"greedy_programmers",title:"\uadf8\ub9ac\ub514 \uc54c\uace0\ub9ac\uc998",sidebar_label:"Greedy"},l={unversionedId:"coding-practice/greedy_programmers",id:"coding-practice/greedy_programmers",isDocsHomePage:!1,title:"\uadf8\ub9ac\ub514 \uc54c\uace0\ub9ac\uc998",description:"\ud83d\udca1 \ucf54\ub529\ud14c\uc2a4\ud2b8 \uace0\ub4dd\uc810 Kit \ubb38\uc81c",source:"@site/docs\\coding-practice\\greedy_programmers.md",slug:"/coding-practice/greedy_programmers",permalink:"/willbe/docs/coding-practice/greedy_programmers",version:"current",sidebar_label:"Greedy"},p=[{value:"\uccb4\uc721\ubcf5",id:"\uccb4\uc721\ubcf5",children:[]},{value:"\ud070 \uc218 \ub9cc\ub4e4\uae30",id:"\ud070-\uc218-\ub9cc\ub4e4\uae30",children:[]}],o={toc:p};function i(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\ud83d\udca1 \ucf54\ub529\ud14c\uc2a4\ud2b8 \uace0\ub4dd\uc810 Kit \ubb38\uc81c"),Object(b.b)("h3",{id:"\uccb4\uc721\ubcf5"},"\uccb4\uc721\ubcf5"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"\uc644\uc131\ub3c4"),Object(b.b)("br",{parentName:"p"}),"\n","\ud83d\udd11\ud83d\udd11\ud83d\udd11\ud83d\udd11",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("strong",{parentName:"p"},"\uc774\ud574\ub3c4"),Object(b.b)("br",{parentName:"p"}),"\n","\ud83d\udc8a\ud83d\udc8a\ud83d\udc8a\ud83d\udc8a",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("strong",{parentName:"p"},"\ud47c \ud69f\uc218"),Object(b.b)("br",{parentName:"p"}),"\n","\ud83c\udf96")),Object(b.b)("h5",{id:"\uc785\ucd9c\ub825-\uc608"},"\uc785\ucd9c\ub825 \uc608"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"n"),Object(b.b)("th",{parentName:"tr",align:"left"},"lost"),Object(b.b)("th",{parentName:"tr",align:"left"},"reserve"),Object(b.b)("th",{parentName:"tr",align:"left"},"return"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"5"),Object(b.b)("td",{parentName:"tr",align:"left"},"[2, 4]"),Object(b.b)("td",{parentName:"tr",align:"left"},"[1, 3, 5]"),Object(b.b)("td",{parentName:"tr",align:"left"},"5")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"5"),Object(b.b)("td",{parentName:"tr",align:"left"},"[2, 4]"),Object(b.b)("td",{parentName:"tr",align:"left"},"[3]"),Object(b.b)("td",{parentName:"tr",align:"left"},"4")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},"3"),Object(b.b)("td",{parentName:"tr",align:"left"},"[1, 3]"),Object(b.b)("td",{parentName:"tr",align:"left"},"[1]"),Object(b.b)("td",{parentName:"tr",align:"left"},"2")))),Object(b.b)("h5",{id:"\ub0b4-\ud480\uc774"},"\ub0b4 \ud480\uc774"),Object(b.b)("p",null,"\u2757 \uc5ec\ubc8c \uccb4\uc721\ubcf5\uc744 \uac00\uc838\uc628 \ud559\uc0dd\uc774 \ub3c4\ub09c\ub2f9\ud55c \uacbd\uc6b0, \ube4c\ub824\uc904 \uc218 \uc5c6\ub2e4\ub294 \uc810\uc744 \uac04\uacfc\ud588\ub2e4."),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-python"},"def solution(n, lost, reserve):\n    for i in range(1, n+1):\n        if i in lost and i in reserve:\n            lost.remove(i)\n            reserve.remove(i)\n    answer = n - len(lost)\n    for i in reserve:\n        if i-1 in lost:\n            answer += 1\n            lost.remove(i-1)\n        elif i + 1 in lost:\n            answer += 1\n            lost.remove(i+1)\n    return answer\n")),Object(b.b)("h3",{id:"\ud070-\uc218-\ub9cc\ub4e4\uae30"},"\ud070 \uc218 \ub9cc\ub4e4\uae30"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"\uc644\uc131\ub3c4"),Object(b.b)("br",{parentName:"p"}),"\n","\ud83d\udd11\ud83d\udd11",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("strong",{parentName:"p"},"\uc774\ud574\ub3c4"),Object(b.b)("br",{parentName:"p"}),"\n","\ud83d\udc8a\ud83d\udc8a\ud83d\udc8a\ud83d\udc8a",Object(b.b)("br",{parentName:"p"}),"\n",Object(b.b)("strong",{parentName:"p"},"\ud47c \ud69f\uc218"),Object(b.b)("br",{parentName:"p"}),"\n","\ud83c\udf96")),Object(b.b)("h5",{id:"\uc785\ucd9c\ub825-\uc608-1"},"\uc785\ucd9c\ub825 \uc608"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"left"},"number"),Object(b.b)("th",{parentName:"tr",align:"left"},"k"),Object(b.b)("th",{parentName:"tr",align:"left"},"return"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},'"1924"'),Object(b.b)("td",{parentName:"tr",align:"left"},"2"),Object(b.b)("td",{parentName:"tr",align:"left"},'"94"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},'"1231234"'),Object(b.b)("td",{parentName:"tr",align:"left"},"3"),Object(b.b)("td",{parentName:"tr",align:"left"},'"3234"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"left"},'"4177252841"'),Object(b.b)("td",{parentName:"tr",align:"left"},"4"),Object(b.b)("td",{parentName:"tr",align:"left"},'"775841"')))),Object(b.b)("h5",{id:"\ub0b4-\ud480\uc774-1"},"\ub0b4 \ud480\uc774"),Object(b.b)("p",null,"\u2757 \ubb34\uc791\uc815 \ucd5c\ub313\uac12 \ucc3e\uc544\uc11c \ud558\ub824\uace0 \ud558\uba74 \ud55c \ubb38\uc81c \uc624\ub958 + \ub450 \ubb38\uc81c \uc2dc\uac04\ucd08\uacfc \ub72c\ub2e4 \u3160\u3160"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-python"},"def solution(number, k):\n    lst = [number[0]]\n    for i in number[1:]:\n        while len(lst) > 0 and lst[-1] < i and k > 0:\n            k -= 1\n            lst.pop()\n        lst.append(i)\n    if k != 0:\n        lst = lst[:-k]\n    answer = ''.join(lst)\n    return answer\n")))}i.isMDXComponent=!0},124:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return j}));var n=r(0),a=r.n(n);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},b=Object.keys(e);for(n=0;n<b.length;n++)r=b[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)r=b[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=a.a.createContext({}),i=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=i(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),m=i(r),d=n,j=m["".concat(c,".").concat(d)]||m[d]||O[d]||b;return r?a.a.createElement(j,l(l({ref:t},o),{},{components:r})):a.a.createElement(j,l({ref:t},o))}));function j(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=r.length,c=new Array(b);c[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<b;o++)c[o]=r[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);
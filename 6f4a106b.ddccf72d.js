(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{112:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return p})),t.d(r,"default",(function(){return l}));var n=t(3),a=t(7),c=(t(0),t(159)),o={id:"exercise_programmers",title:"\uc5f0\uc2b5\ubb38\uc81c",sidebar_label:"\uc5f0\uc2b5\ubb38\uc81c"},i={unversionedId:"coding-practice/exercise_programmers",id:"coding-practice/exercise_programmers",isDocsHomePage:!1,title:"\uc5f0\uc2b5\ubb38\uc81c",description:"\uc774\uc0c1\ud55c \ubb38\uc790 \ub9cc\ub4e4\uae30",source:"@site/docs\\coding-practice\\exercise_programmers.md",slug:"/coding-practice/exercise_programmers",permalink:"/willbe/docs/coding-practice/exercise_programmers",version:"current",sidebar_label:"\uc5f0\uc2b5\ubb38\uc81c"},p=[{value:"\uc774\uc0c1\ud55c \ubb38\uc790 \ub9cc\ub4e4\uae30",id:"\uc774\uc0c1\ud55c-\ubb38\uc790-\ub9cc\ub4e4\uae30",children:[]}],b={toc:p};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},b,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"\uc774\uc0c1\ud55c-\ubb38\uc790-\ub9cc\ub4e4\uae30"},"\uc774\uc0c1\ud55c \ubb38\uc790 \ub9cc\ub4e4\uae30"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("strong",{parentName:"p"},"\uc644\uc131\ub3c4"),Object(c.b)("br",{parentName:"p"}),"\n","\ud83d\udd11\ud83d\udd11\ud83d\udd11\ud83d\udd11\ud83d\udd11",Object(c.b)("br",{parentName:"p"}),"\n",Object(c.b)("strong",{parentName:"p"},"\uc774\ud574\ub3c4"),Object(c.b)("br",{parentName:"p"}),"\n","\ud83d\udc8a\ud83d\udc8a\ud83d\udc8a\ud83d\udc8a\ud83d\udc8a",Object(c.b)("br",{parentName:"p"}),"\n",Object(c.b)("strong",{parentName:"p"},"\ud47c \ud69f\uc218"),Object(c.b)("br",{parentName:"p"}),"\n","\ud83c\udf96")),Object(c.b)("h5",{id:"\uc785\ucd9c\ub825-\uc608"},"\uc785\ucd9c\ub825 \uc608"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"s"),Object(c.b)("th",{parentName:"tr",align:"left"},"return"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},'"try hello world"'),Object(c.b)("td",{parentName:"tr",align:"left"},'"TrY HeLlO WoRlD"')))),Object(c.b)("h5",{id:"\ub0b4-\ud480\uc774"},"\ub0b4 \ud480\uc774"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-python"},"def solution(s):\n    answer = ''\n    for i in s.split(' '):\n        for j, x in enumerate(i):\n            if j % 2 == 1:\n                answer += x.lower()\n            else:\n                answer += x.upper()\n        answer += ' '\n    return answer[:-1]\n")))}l.isMDXComponent=!0},159:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var b=a.a.createContext({}),l=function(e){var r=a.a.useContext(b),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return a.a.createElement(b.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),u=l(t),m=n,f=u["".concat(o,".").concat(m)]||u[m]||s[m]||c;return t?a.a.createElement(f,i(i({ref:r},b),{},{components:t})):a.a.createElement(f,i({ref:r},b))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,o=new Array(c);o[0]=m;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var b=2;b<c;b++)o[b]=t[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);
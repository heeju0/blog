(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{103:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return g})),a.d(t,"metadata",(function(){return O})),a.d(t,"toc",(function(){return m})),a.d(t,"default",(function(){return T}));var M=a(3),n=a(7),i=a(0),j=a.n(i),c=a(106),b=a(120),u=a(107),l=a(85),r=a.n(l);const N=37,o=39;var L=function(e){const{lazy:t,block:a,defaultValue:M,values:n,groupId:c,className:l}=e,{tabGroupChoices:L,setTabGroupChoices:s}=Object(b.a)(),[g,O]=Object(i.useState)(M),m=i.Children.toArray(e.children);if(null!=c){const e=L[c];null!=e&&e!==g&&n.some((t=>t.value===e))&&O(e)}const d=e=>{O(e),null!=c&&s(c,e)},T=[];return j.a.createElement("div",null,j.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(u.a)("tabs",{"tabs--block":a},l)},n.map((({value:e,label:t})=>j.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===e,className:Object(u.a)("tabs__item",r.a.tabItem,{"tabs__item--active":g===e}),key:e,ref:e=>T.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case o:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case N:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(T,e.target,e)},onFocus:()=>d(e),onClick:()=>{d(e)}},t)))),t?Object(i.cloneElement)(m.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):j.a.createElement("div",{className:"margin-vert--md"},m.map(((e,t)=>Object(i.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))};var s=function({children:e,hidden:t,className:a}){return j.a.createElement("div",Object(M.a)({role:"tabpanel"},{hidden:t,className:a}),e)},g={id:"doc1",title:"Style Guide",sidebar_label:"Style Guide"},O={unversionedId:"doc1",id:"doc1",isDocsHomePage:!1,title:"Style Guide",description:"You can write content using GitHub-flavored Markdown syntax.",source:"@site/docs\\doc1.md",slug:"/doc1",permalink:"/willbe/docs/doc1",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/doc1.md",version:"current",sidebar_label:"Style Guide",sidebar:"docs",previous:{title:"Deployment",permalink:"/willbe/docs/deployment"},next:{title:"Powered by MDX",permalink:"/willbe/docs/mdx"}},m=[{value:"Introduction",id:"introduction",children:[]},{value:"Markdown Syntax",id:"markdown-syntax",children:[]},{value:"Headers",id:"headers",children:[]},{value:"H2 - Create the best documentation",id:"h2---create-the-best-documentation",children:[{value:"H3 - Create the best documentation",id:"h3---create-the-best-documentation",children:[]}]},{value:"Emphasis",id:"emphasis",children:[]},{value:"Lists",id:"lists",children:[]},{value:"Links",id:"links",children:[]},{value:"Images",id:"images",children:[]},{value:"Code",id:"code",children:[]},{value:"Tables",id:"tables",children:[]},{value:"Blockquotes",id:"blockquotes",children:[]},{value:"Inline HTML",id:"inline-html",children:[]},{value:"Line Breaks",id:"line-breaks",children:[]},{value:"Tabs",id:"tabs",children:[]},{value:"Admonitions",id:"admonitions",children:[]}],d={toc:m};function T(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(M.a)({},d,i,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"You can write content using ",Object(c.b)("a",Object(M.a)({parentName:"p"},{href:"https://github.github.com/gfm/"}),"GitHub-flavored Markdown syntax"),".  "),Object(c.b)("h2",{id:"introduction"},"Introduction"),Object(c.b)("p",null,"This website contains our documantation."),Object(c.b)("h2",{id:"markdown-syntax"},"Markdown Syntax"),Object(c.b)("p",null,"To serve as an example page when styling markdown based Docusaurus sites."),Object(c.b)("h2",{id:"headers"},"Headers"),Object(c.b)("h1",{id:"h1---create-the-best-documentation"},"H1 - Create the best documentation"),Object(c.b)("h2",{id:"h2---create-the-best-documentation"},"H2 - Create the best documentation"),Object(c.b)("h3",{id:"h3---create-the-best-documentation"},"H3 - Create the best documentation"),Object(c.b)("h4",{id:"h4---create-the-best-documentation"},"H4 - Create the best documentation"),Object(c.b)("h5",{id:"h5---create-the-best-documentation"},"H5 - Create the best documentation"),Object(c.b)("h6",{id:"h6---create-the-best-documentation"},"H6 - Create the best documentation"),Object(c.b)("hr",null),Object(c.b)("h2",{id:"emphasis"},"Emphasis"),Object(c.b)("p",null,"Emphasis, aka italics, with ",Object(c.b)("em",{parentName:"p"},"asterisks")," or ",Object(c.b)("em",{parentName:"p"},"underscores"),"."),Object(c.b)("p",null,"Strong emphasis, aka bold, with ",Object(c.b)("strong",{parentName:"p"},"asterisks")," or ",Object(c.b)("strong",{parentName:"p"},"underscores"),"."),Object(c.b)("p",null,"Combined emphasis with ",Object(c.b)("strong",{parentName:"p"},"asterisks and ",Object(c.b)("em",{parentName:"strong"},"underscores")),"."),Object(c.b)("p",null,"Strikethrough uses two tildes. ",Object(c.b)("del",{parentName:"p"},"Scratch this.")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"lists"},"Lists"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"First ordered list item"),Object(c.b)("li",{parentName:"ol"},"Another item",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Unordered sub-list."))),Object(c.b)("li",{parentName:"ol"},"Actual numbers don't matter, just that it's a number",Object(c.b)("ol",{parentName:"li"},Object(c.b)("li",{parentName:"ol"},"Ordered sub-list"))),Object(c.b)("li",{parentName:"ol"},"And another item.")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Unordered list can use asterisks")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Or minuses")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Or pluses")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"links"},"Links"),Object(c.b)("p",null,Object(c.b)("a",Object(M.a)({parentName:"p"},{href:"https://www.google.com/"}),"I'm an inline-style link")),Object(c.b)("p",null,Object(c.b)("a",Object(M.a)({parentName:"p"},{href:"https://www.google.com/",title:"Google's Homepage"}),"I'm an inline-style link with title")),Object(c.b)("p",null,Object(c.b)("a",Object(M.a)({parentName:"p"},{href:"https://www.mozilla.org/"}),"I'm a reference-style link")),Object(c.b)("p",null,Object(c.b)("a",Object(M.a)({parentName:"p"},{href:"http://slashdot.org/"}),"You can use numbers for reference-style link definitions")),Object(c.b)("p",null,"Or leave it empty and use the ",Object(c.b)("a",Object(M.a)({parentName:"p"},{href:"http://www.reddit.com/"}),"link text itself"),"."),Object(c.b)("p",null,"URLs and URLs in angle brackets will automatically get turned into links. ",Object(c.b)("a",Object(M.a)({parentName:"p"},{href:"http://www.example.com/"}),"http://www.example.com/")," or ",Object(c.b)("a",Object(M.a)({parentName:"p"},{href:"http://www.example.com/"}),"http://www.example.com/")," and sometimes example.com (but not on GitHub, for example)."),Object(c.b)("p",null,"Some text to show that the reference links can follow later."),Object(c.b)("hr",null),Object(c.b)("h2",{id:"images"},"Images"),Object(c.b)("p",null,"Here's our logo (hover to see the title text):"),Object(c.b)("p",null,"Inline-style: ",Object(c.b)("img",Object(M.a)({parentName:"p"},{src:"https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png",alt:"alt text",title:"Logo Title Text 1"}))),Object(c.b)("p",null,"Reference-style: ",Object(c.b)("img",Object(M.a)({parentName:"p"},{src:"https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png",alt:"alt text",title:"Logo Title Text 2"}))),Object(c.b)("p",null,"Images from any folder can be used by providing path to file. Path should be relative to markdown file."),Object(c.b)("p",null,Object(c.b)("img",{alt:"img",src:a(159).default})),Object(c.b)("hr",null),Object(c.b)("h2",{id:"code"},"Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(M.a)({parentName:"pre"},{className:"language-javascript"}),"var s = 'JavaScript syntax highlighting';\nalert(s);\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(M.a)({parentName:"pre"},{className:"language-python"}),'s = "Python syntax highlighting"\nprint(s)\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(M.a)({parentName:"pre"},{}),"No language indicated, so no syntax highlighting.\nBut let's throw in a <b>tag</b>.\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(M.a)({parentName:"pre"},{className:"language-js",metastring:"{2}","{2}":!0}),"function highlightMe() {\n  console.log('This line can be highlighted!');\n}\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(M.a)({parentName:"pre"},{className:"language-python",metastring:"live",live:!0}),"print('Hello World!')\n")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"tables"},"Tables"),Object(c.b)("p",null,"Colons can be used to align columns."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(M.a)({parentName:"tr"},{align:null}),"Tables"),Object(c.b)("th",Object(M.a)({parentName:"tr"},{align:"center"}),"Are"),Object(c.b)("th",Object(M.a)({parentName:"tr"},{align:"right"}),"Cool"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(M.a)({parentName:"tr"},{align:null}),"col 3 is"),Object(c.b)("td",Object(M.a)({parentName:"tr"},{align:"center"}),"right-aligned"),Object(c.b)("td",Object(M.a)({parentName:"tr"},{align:"right"}),"\\$1600")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(M.a)({parentName:"tr"},{align:null}),"col 2 is"),Object(c.b)("td",Object(M.a)({parentName:"tr"},{align:"center"}),"centered"),Object(c.b)("td",Object(M.a)({parentName:"tr"},{align:"right"}),"\\$12")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(M.a)({parentName:"tr"},{align:null}),"zebra stripes"),Object(c.b)("td",Object(M.a)({parentName:"tr"},{align:"center"}),"are neat"),Object(c.b)("td",Object(M.a)({parentName:"tr"},{align:"right"}),"\\$1")))),Object(c.b)("p",null,"There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(M.a)({parentName:"tr"},{align:null}),"Markdown"),Object(c.b)("th",Object(M.a)({parentName:"tr"},{align:null}),"Less"),Object(c.b)("th",Object(M.a)({parentName:"tr"},{align:null}),"Pretty"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(M.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"Still")),Object(c.b)("td",Object(M.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"renders")),Object(c.b)("td",Object(M.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"nicely"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(M.a)({parentName:"tr"},{align:null}),"1"),Object(c.b)("td",Object(M.a)({parentName:"tr"},{align:null}),"2"),Object(c.b)("td",Object(M.a)({parentName:"tr"},{align:null}),"3")))),Object(c.b)("hr",null),Object(c.b)("h2",{id:"blockquotes"},"Blockquotes"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Blockquotes are very handy in email to emulate reply text. This line is part of the same quote.")),Object(c.b)("p",null,"Quote break."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can ",Object(c.b)("em",{parentName:"p"},"put")," ",Object(c.b)("strong",{parentName:"p"},"Markdown")," into a blockquote.")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"inline-html"},"Inline HTML"),Object(c.b)("dl",null,Object(c.b)("dt",null,"Definition list"),Object(c.b)("dd",null,"Is something people use sometimes."),Object(c.b)("dt",null,"Markdown in HTML"),Object(c.b)("dd",null,"Does *not* work **very** well. Use HTML ",Object(c.b)("em",null,"tags"),".")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"line-breaks"},"Line Breaks"),Object(c.b)("p",null,"Here's a line for us to start with."),Object(c.b)("p",null,"This line is separated from the one above by two newlines, so it will be a ",Object(c.b)("em",{parentName:"p"},"separate paragraph"),"."),Object(c.b)("p",null,"This line is also a separate paragraph, but... This line is only separated by a single newline, so it's a separate line in the ",Object(c.b)("em",{parentName:"p"},"same paragraph"),"."),Object(c.b)("hr",null),Object(c.b)("h2",{id:"tabs"},"Tabs"),Object(c.b)(L,{defaultValue:"apple",values:[{label:"Apple",value:"apple"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana"}],mdxType:"Tabs"},Object(c.b)(s,{value:"apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),Object(c.b)(s,{value:"orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),Object(c.b)(s,{value:"banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")),Object(c.b)(L,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}],mdxType:"Tabs"},Object(c.b)(s,{value:"win",mdxType:"TabItem"},"Use Ctrl + C to copy."),Object(c.b)(s,{value:"mac",mdxType:"TabItem"},"Use Command + C to copy.")),Object(c.b)(L,{groupId:"operating-systems",defaultValue:"win",values:[{label:"Windows",value:"win"},{label:"macOS",value:"mac"}],mdxType:"Tabs"},Object(c.b)(s,{value:"win",mdxType:"TabItem"},"Use Ctrl + V to paste."),Object(c.b)(s,{value:"mac",mdxType:"TabItem"},"Use Command + V to paste.")),Object(c.b)("hr",null),Object(c.b)("h2",{id:"admonitions"},"Admonitions"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(M.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(M.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(M.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(M.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(M.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This is a note"))),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(M.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(M.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(M.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(M.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(M.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This is a tip"))),Object(c.b)("div",{className:"admonition admonition-important alert alert--info"},Object(c.b)("div",Object(M.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(M.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(M.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(M.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(c.b)("div",Object(M.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This is important"))),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",Object(M.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(M.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(M.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(c.b)("path",Object(M.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(c.b)("div",Object(M.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This is a caution"))),Object(c.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(c.b)("div",Object(M.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(M.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(M.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(M.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(c.b)("div",Object(M.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"This is a warning"))))}T.isMDXComponent=!0},106:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return L}));var M=a(0),n=a.n(M);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(e);t&&(M=M.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,M)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,M,n=function(e,t){if(null==e)return{};var a,M,n={},i=Object.keys(e);for(M=0;M<i.length;M++)a=i[M],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(M=0;M<i.length;M++)a=i[M],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=n.a.createContext({}),l=function(e){var t=n.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},r=function(e){var t=l(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},N={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},o=n.a.forwardRef((function(e,t){var a=e.components,M=e.mdxType,i=e.originalType,j=e.parentName,u=b(e,["components","mdxType","originalType","parentName"]),r=l(a),o=M,L=r["".concat(j,".").concat(o)]||r[o]||N[o]||i;return a?n.a.createElement(L,c(c({ref:t},u),{},{components:a})):n.a.createElement(L,c({ref:t},u))}));function L(e,t){var a=arguments,M=t&&t.mdxType;if("string"==typeof e||M){var i=a.length,j=new Array(i);j[0]=o;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:M,j[1]=c;for(var u=2;u<i;u++)j[u]=a[u];return n.a.createElement.apply(null,j)}return n.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"},107:function(e,t,a){"use strict";function M(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=M(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=M(e))&&(n&&(n+=" "),n+=t);return n}},120:function(e,t,a){"use strict";var M=a(0),n=a(121);t.a=function(){const e=Object(M.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},121:function(e,t,a){"use strict";var M=a(0);const n=Object(M.createContext)(void 0);t.a=n},159:function(e,t,a){"use strict";a.r(t),t.default="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjRkZGIiBkPSJNOTkgNTJoODR2MzRIOTl6Ii8+PHBhdGggZD0iTTIzIDE2M2MtNy4zOTggMC0xMy44NDMtNC4wMjctMTcuMzAzLTEwQTE5Ljg4NiAxOS44ODYgMCAwIDAgMyAxNjNjMCAxMS4wNDYgOC45NTQgMjAgMjAgMjBoMjB2LTIwSDIzeiIgZmlsbD0iIzNFQ0M1RiIvPjxwYXRoIGQ9Ik0xMTIuOTggNTcuMzc2TDE4MyA1M1Y0M2MwLTExLjA0Ni04Ljk1NC0yMC0yMC0yMEg3M2wtMi41LTQuMzNjLTEuMTEyLTEuOTI1LTMuODg5LTEuOTI1LTUgMEw2MyAyM2wtMi41LTQuMzNjLTEuMTExLTEuOTI1LTMuODg5LTEuOTI1LTUgMEw1MyAyM2wtMi41LTQuMzNjLTEuMTExLTEuOTI1LTMuODg5LTEuOTI1LTUgMEw0MyAyM2MtLjAyMiAwLS4wNDIuMDAzLS4wNjUuMDAzbC00LjE0Mi00LjE0MWMtMS41Ny0xLjU3MS00LjI1Mi0uODUzLTQuODI4IDEuMjk0bC0xLjM2OSA1LjEwNC01LjE5Mi0xLjM5MmMtMi4xNDgtLjU3NS00LjExMSAxLjM4OS0zLjUzNSAzLjUzNmwxLjM5IDUuMTkzLTUuMTAyIDEuMzY3Yy0yLjE0OC41NzYtMi44NjcgMy4yNTktMS4yOTYgNC44M2w0LjE0MiA0LjE0MmMwIC4wMjEtLjAwMy4wNDItLjAwMy4wNjRsLTQuMzMgMi41Yy0xLjkyNSAxLjExMS0xLjkyNSAzLjg4OSAwIDVMMjMgNTNsLTQuMzMgMi41Yy0xLjkyNSAxLjExMS0xLjkyNSAzLjg4OSAwIDVMMjMgNjNsLTQuMzMgMi41Yy0xLjkyNSAxLjExMS0xLjkyNSAzLjg4OSAwIDVMMjMgNzNsLTQuMzMgMi41Yy0xLjkyNSAxLjExMS0xLjkyNSAzLjg4OSAwIDVMMjMgODNsLTQuMzMgMi41Yy0xLjkyNSAxLjExMS0xLjkyNSAzLjg4OSAwIDVMMjMgOTNsLTQuMzMgMi41Yy0xLjkyNSAxLjExMS0xLjkyNSAzLjg4OSAwIDVMMjMgMTAzbC00LjMzIDIuNWMtMS45MjUgMS4xMTEtMS45MjUgMy44ODkgMCA1TDIzIDExM2wtNC4zMyAyLjVjLTEuOTI1IDEuMTExLTEuOTI1IDMuODg5IDAgNUwyMyAxMjNsLTQuMzMgMi41Yy0xLjkyNSAxLjExMS0xLjkyNSAzLjg4OSAwIDVMMjMgMTMzbC00LjMzIDIuNWMtMS45MjUgMS4xMTEtMS45MjUgMy44ODkgMCA1TDIzIDE0M2wtNC4zMyAyLjVjLTEuOTI1IDEuMTExLTEuOTI1IDMuODg5IDAgNUwyMyAxNTNsLTQuMzMgMi41Yy0xLjkyNSAxLjExMS0xLjkyNSAzLjg4OSAwIDVMMjMgMTYzYzAgMTEuMDQ2IDguOTU0IDIwIDIwIDIwaDEyMGMxMS4wNDYgMCAyMC04Ljk1NCAyMC0yMFY4M2wtNzAuMDItNC4zNzZBMTAuNjQ1IDEwLjY0NSAwIDAgMSAxMDMgNjhjMC01LjYyMSA0LjM3LTEwLjI3MyA5Ljk4LTEwLjYyNCIgZmlsbD0iIzNFQ0M1RiIvPjxwYXRoIGZpbGw9IiMzRUNDNUYiIGQ9Ik0xNDMgMTgzaDMwdi00MGgtMzB6Ii8+PHBhdGggZD0iTTE5MyAxNThjLS4yMTkgMC0uNDI4LjAzNy0uNjM5LjA2NC0uMDM4LS4xNS0uMDc0LS4zMDEtLjExNi0uNDUxQTUgNSAwIDAgMCAxOTAuMzIgMTQ4YTQuOTYgNC45NiAwIDAgMC0zLjAxNiAxLjAzNiAyNi41MzEgMjYuNTMxIDAgMCAwLS4zMzUtLjMzNiA0Ljk1NSA0Ljk1NSAwIDAgMCAxLjAxMS0yLjk4NyA1IDUgMCAwIDAtOS41OTktMS45NTljLS4xNDgtLjA0Mi0uMjk3LS4wNzctLjQ0NS0uMTE1LjAyNy0uMjExLjA2NC0uNDIuMDY0LS42MzlhNSA1IDAgMCAwLTUtNSA1IDUgMCAwIDAtNSA1YzAgLjIxOS4wMzcuNDI4LjA2NC42MzktLjE0OC4wMzgtLjI5Ny4wNzMtLjQ0NS4xMTVhNC45OTggNC45OTggMCAwIDAtOS41OTkgMS45NTljMCAxLjEyNS4zODQgMi4xNTEgMS4wMTEgMi45ODctMy43MTcgMy42MzItNi4wMzEgOC42OTMtNi4wMzEgMTQuMyAwIDExLjA0NiA4Ljk1NCAyMCAyMCAyMCA5LjMzOSAwIDE3LjE2LTYuNDEgMTkuMzYxLTE1LjA2NC4yMTEuMDI3LjQyLjA2NC42MzkuMDY0YTUgNSAwIDAgMCA1LTUgNSA1IDAgMCAwLTUtNSIgZmlsbD0iIzQ0RDg2MCIvPjxwYXRoIGZpbGw9IiMzRUNDNUYiIGQ9Ik0xNTMgMTIzaDMwdi0yMGgtMzB6Ii8+PHBhdGggZD0iTTE5MyAxMTUuNWEyLjUgMi41IDAgMSAwIDAtNWMtLjEwOSAwLS4yMTQuMDE5LS4zMTkuMDMyLS4wMi0uMDc1LS4wMzctLjE1LS4wNTgtLjIyNWEyLjUwMSAyLjUwMSAwIDAgMC0uOTYzLTQuODA3Yy0uNTY5IDAtMS4wODguMTk3LTEuNTA4LjUxOGE2LjY1MyA2LjY1MyAwIDAgMC0uMTY4LS4xNjhjLjMxNC0uNDE3LjUwNi0uOTMxLjUwNi0xLjQ5NGEyLjUgMi41IDAgMCAwLTQuOC0uOTc5QTkuOTg3IDkuOTg3IDAgMCAwIDE4MyAxMDNjLTUuNTIyIDAtMTAgNC40NzgtMTAgMTBzNC40NzggMTAgMTAgMTBjLjkzNCAwIDEuODMzLS4xMzggMi42OS0uMzc3YTIuNSAyLjUgMCAwIDAgNC44LS45NzljMC0uNTYzLS4xOTItMS4wNzctLjUwNi0xLjQ5NC4wNTctLjA1NS4xMTMtLjExMS4xNjgtLjE2OC40Mi4zMjEuOTM5LjUxOCAxLjUwOC41MThhMi41IDIuNSAwIDAgMCAuOTYzLTQuODA3Yy4wMjEtLjA3NC4wMzgtLjE1LjA1OC0uMjI1LjEwNS4wMTMuMjEuMDMyLjMxOS4wMzIiIGZpbGw9IiM0NEQ4NjAiLz48cGF0aCBkPSJNNjMgNTUuNWEyLjUgMi41IDAgMCAxLTIuNS0yLjVjMC00LjEzNi0zLjM2NC03LjUtNy41LTcuNXMtNy41IDMuMzY0LTcuNSA3LjVhMi41IDIuNSAwIDEgMS01IDBjMC02Ljg5MyA1LjYwNy0xMi41IDEyLjUtMTIuNVM2NS41IDQ2LjEwNyA2NS41IDUzYTIuNSAyLjUgMCAwIDEtMi41IDIuNSIgZmlsbD0iIzAwMCIvPjxwYXRoIGQ9Ik0xMDMgMTgzaDYwYzExLjA0NiAwIDIwLTguOTU0IDIwLTIwVjkzaC02MGMtMTEuMDQ2IDAtMjAgOC45NTQtMjAgMjB2NzB6IiBmaWxsPSIjRkZGRjUwIi8+PHBhdGggZD0iTTE2OC4wMiAxMjRoLTUwLjA0YTEgMSAwIDEgMSAwLTJoNTAuMDRhMSAxIDAgMSAxIDAgMm0wIDIwaC01MC4wNGExIDEgMCAxIDEgMC0yaDUwLjA0YTEgMSAwIDEgMSAwIDJtMCAyMGgtNTAuMDRhMSAxIDAgMSAxIDAtMmg1MC4wNGExIDEgMCAxIDEgMCAybTAtNDkuODE0aC01MC4wNGExIDEgMCAxIDEgMC0yaDUwLjA0YTEgMSAwIDEgMSAwIDJtMCAxOS44MTRoLTUwLjA0YTEgMSAwIDEgMSAwLTJoNTAuMDRhMSAxIDAgMSAxIDAgMm0wIDIwaC01MC4wNGExIDEgMCAxIDEgMC0yaDUwLjA0YTEgMSAwIDEgMSAwIDJNMTgzIDYxLjYxMWMtLjAxMiAwLS4wMjItLjAwNi0uMDM0LS4wMDUtMy4wOS4xMDUtNC41NTIgMy4xOTYtNS44NDIgNS45MjMtMS4zNDYgMi44NS0yLjM4NyA0LjcwMy00LjA5MyA0LjY0Ny0xLjg4OS0uMDY4LTIuOTY5LTIuMjAyLTQuMTEzLTQuNDYtMS4zMTQtMi41OTQtMi44MTQtNS41MzYtNS45NjMtNS40MjYtMy4wNDYuMTA0LTQuNTEzIDIuNzk0LTUuODA3IDUuMTY3LTEuMzc3IDIuNTI4LTIuMzE0IDQuMDY1LTQuMTIxIDMuOTk0LTEuOTI3LS4wNy0yLjk1MS0xLjgwNS00LjEzNi0zLjgxMy0xLjMyMS0yLjIzNi0yLjg0OC00Ljc1LTUuOTM2LTQuNjY0LTIuOTk0LjEwMy00LjQ2NSAyLjM4NS01Ljc2MyA0LjQtMS4zNzMgMi4xMy0yLjMzNSAzLjQyOC00LjE2NSAzLjM1MS0xLjk3My0uMDctMi45OTItMS41MS00LjE3MS0zLjE3Ny0xLjMyNC0xLjg3My0yLjgxNi0zLjk5My01Ljg5NS0zLjg5LTIuOTI4LjEtNC4zOTkgMS45Ny01LjY5NiAzLjYxOC0xLjIzMiAxLjU2NC0yLjE5NCAyLjgwMi00LjIyOSAyLjcyNGExIDEgMCAwIDAtLjA3MiAyYzMuMDE3LjEwMSA0LjU0NS0xLjggNS44NzItMy40ODcgMS4xNzctMS40OTYgMi4xOTMtMi43ODcgNC4xOTMtMi44NTUgMS45MjYtLjA4MiAyLjgyOSAxLjExNSA0LjE5NSAzLjA0NSAxLjI5NyAxLjgzNCAyLjc2OSAzLjkxNCA1LjczMSA0LjAyMSAzLjEwMy4xMDQgNC41OTYtMi4yMTUgNS45MTgtNC4yNjcgMS4xODItMS44MzQgMi4yMDItMy40MTcgNC4xNS0zLjQ4NCAxLjc5My0uMDY3IDIuNzY5IDEuMzUgNC4xNDUgMy42ODEgMS4yOTcgMi4xOTcgMi43NjYgNC42ODYgNS43ODcgNC43OTYgMy4xMjUuMTA4IDQuNjM0LTIuNjIgNS45NDktNS4wMzUgMS4xMzktMi4wODggMi4yMTQtNC4wNiA0LjExOS00LjEyNiAxLjc5My0uMDQyIDIuNzI4IDEuNTk1IDQuMTExIDQuMzMgMS4yOTIgMi41NTMgMi43NTcgNS40NDUgNS44MjUgNS41NTZsLjE2OS4wMDNjMy4wNjQgMCA0LjUxOC0zLjA3NSA1LjgwNS01Ljc5NCAxLjEzOS0yLjQxIDIuMjE3LTQuNjggNC4wNjctNC43NzN2LTJ6IiBmaWxsPSIjMDAwIi8+PHBhdGggZmlsbD0iIzNFQ0M1RiIgZD0iTTgzIDE4M2g0MHYtNDBIODN6Ii8+PHBhdGggZD0iTTE0MyAxNThjLS4yMTkgMC0uNDI4LjAzNy0uNjM5LjA2NC0uMDM4LS4xNS0uMDc0LS4zMDEtLjExNi0uNDUxQTUgNSAwIDAgMCAxNDAuMzIgMTQ4YTQuOTYgNC45NiAwIDAgMC0zLjAxNiAxLjAzNiAyNi41MzEgMjYuNTMxIDAgMCAwLS4zMzUtLjMzNiA0Ljk1NSA0Ljk1NSAwIDAgMCAxLjAxMS0yLjk4NyA1IDUgMCAwIDAtOS41OTktMS45NTljLS4xNDgtLjA0Mi0uMjk3LS4wNzctLjQ0NS0uMTE1LjAyNy0uMjExLjA2NC0uNDIuMDY0LS42MzlhNSA1IDAgMCAwLTUtNSA1IDUgMCAwIDAtNSA1YzAgLjIxOS4wMzcuNDI4LjA2NC42MzktLjE0OC4wMzgtLjI5Ny4wNzMtLjQ0NS4xMTVhNC45OTggNC45OTggMCAwIDAtOS41OTkgMS45NTljMCAxLjEyNS4zODQgMi4xNTEgMS4wMTEgMi45ODctMy43MTcgMy42MzItNi4wMzEgOC42OTMtNi4wMzEgMTQuMyAwIDExLjA0NiA4Ljk1NCAyMCAyMCAyMCA5LjMzOSAwIDE3LjE2LTYuNDEgMTkuMzYxLTE1LjA2NC4yMTEuMDI3LjQyLjA2NC42MzkuMDY0YTUgNSAwIDAgMCA1LTUgNSA1IDAgMCAwLTUtNSIgZmlsbD0iIzQ0RDg2MCIvPjxwYXRoIGZpbGw9IiMzRUNDNUYiIGQ9Ik04MyAxMjNoNDB2LTIwSDgzeiIvPjxwYXRoIGQ9Ik0xMzMgMTE1LjVhMi41IDIuNSAwIDEgMCAwLTVjLS4xMDkgMC0uMjE0LjAxOS0uMzE5LjAzMi0uMDItLjA3NS0uMDM3LS4xNS0uMDU4LS4yMjVhMi41MDEgMi41MDEgMCAwIDAtLjk2My00LjgwN2MtLjU2OSAwLTEuMDg4LjE5Ny0xLjUwOC41MThhNi42NTMgNi42NTMgMCAwIDAtLjE2OC0uMTY4Yy4zMTQtLjQxNy41MDYtLjkzMS41MDYtMS40OTRhMi41IDIuNSAwIDAgMC00LjgtLjk3OUE5Ljk4NyA5Ljk4NyAwIDAgMCAxMjMgMTAzYy01LjUyMiAwLTEwIDQuNDc4LTEwIDEwczQuNDc4IDEwIDEwIDEwYy45MzQgMCAxLjgzMy0uMTM4IDIuNjktLjM3N2EyLjUgMi41IDAgMCAwIDQuOC0uOTc5YzAtLjU2My0uMTkyLTEuMDc3LS41MDYtMS40OTQuMDU3LS4wNTUuMTEzLS4xMTEuMTY4LS4xNjguNDIuMzIxLjkzOS41MTggMS41MDguNTE4YTIuNSAyLjUgMCAwIDAgLjk2My00LjgwN2MuMDIxLS4wNzQuMDM4LS4xNS4wNTgtLjIyNS4xMDUuMDEzLjIxLjAzMi4zMTkuMDMyIiBmaWxsPSIjNDREODYwIi8+PHBhdGggZD0iTTE0MyA0MS43NWMtLjE2IDAtLjMzLS4wMi0uNDktLjA1YTIuNTIgMi41MiAwIDAgMS0uNDctLjE0Yy0uMTUtLjA2LS4yOS0uMTQtLjQzMS0uMjMtLjEzLS4wOS0uMjU5LS4yLS4zOC0uMzEtLjEwOS0uMTItLjIxOS0uMjQtLjMwOS0uMzhzLS4xNy0uMjgtLjIzMS0uNDNhMi42MTkgMi42MTkgMCAwIDEtLjE4OS0uOTZjMC0uMTYuMDItLjMzLjA1LS40OS4wMy0uMTYuMDgtLjMxLjEzOS0uNDcuMDYxLS4xNS4xNDEtLjI5LjIzMS0uNDMuMDktLjEzLjItLjI2LjMwOS0uMzguMTIxLS4xMS4yNS0uMjIuMzgtLjMxLjE0MS0uMDkuMjgxLS4xNy40MzEtLjIzLjE0OS0uMDYuMzEtLjExLjQ3LS4xNC4zMi0uMDcuNjUtLjA3Ljk4IDAgLjE1OS4wMy4zMi4wOC40Ny4xNC4xNDkuMDYuMjkuMTQuNDMuMjMuMTMuMDkuMjU5LjIuMzguMzEuMTEuMTIuMjIuMjUuMzEuMzguMDkuMTQuMTcuMjguMjMuNDMuMDYuMTYuMTEuMzEuMTQuNDcuMDI5LjE2LjA1LjMzLjA1LjQ5IDAgLjY2LS4yNzEgMS4zMS0uNzMgMS43Ny0uMTIxLjExLS4yNS4yMi0uMzguMzEtLjE0LjA5LS4yODEuMTctLjQzLjIzYTIuNTY1IDIuNTY1IDAgMCAxLS45Ni4xOW0yMC0xLjI1Yy0uNjYgMC0xLjMtLjI3LTEuNzcxLS43M2EzLjgwMiAzLjgwMiAwIDAgMS0uMzA5LS4zOGMtLjA5LS4xNC0uMTctLjI4LS4yMzEtLjQzYTIuNjE5IDIuNjE5IDAgMCAxLS4xODktLjk2YzAtLjY2LjI3LTEuMy43MjktMS43Ny4xMjEtLjExLjI1LS4yMi4zOC0uMzEuMTQxLS4wOS4yODEtLjE3LjQzMS0uMjMuMTQ5LS4wNi4zMS0uMTEuNDctLjE0LjMyLS4wNy42Ni0uMDcuOTggMCAuMTU5LjAzLjMyLjA4LjQ3LjE0LjE0OS4wNi4yOS4xNC40My4yMy4xMy4wOS4yNTkuMi4zOC4zMS40NTkuNDcuNzMgMS4xMS43MyAxLjc3IDAgLjE2LS4wMjEuMzMtLjA1LjQ5LS4wMy4xNi0uMDguMzItLjE0LjQ3LS4wNy4xNS0uMTQuMjktLjIzLjQzLS4wOS4xMy0uMi4yNi0uMzEuMzgtLjEyMS4xMS0uMjUuMjItLjM4LjMxLS4xNC4wOS0uMjgxLjE3LS40My4yM2EyLjU2NSAyLjU2NSAwIDAgMS0uOTYuMTkiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+"}}]);
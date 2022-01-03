"use strict";(self.webpackChunklukso_docs=self.webpackChunklukso_docs||[]).push([[9012],{3905:function(e,a,t){t.d(a,{Zo:function(){return s},kt:function(){return k}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),c=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=c(e.components);return n.createElement(o.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=c(t),k=r,f=m["".concat(o,".").concat(k)]||m[k]||p[k]||i;return t?n.createElement(f,l(l({ref:a},s),{},{components:t})):n.createElement(f,l({ref:a},s))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var d={};for(var o in a)hasOwnProperty.call(a,o)&&(d[o]=a[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var c=2;c<i;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4182:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var n=t(7462),r=t(3366),i=(t(7294),t(3905)),l=["components"],d={},o="ERC725",c={unversionedId:"tools/erc725js/class/ERC725",id:"tools/erc725js/class/ERC725",isDocsHomePage:!1,title:"ERC725",description:"This package is currently in early stages of development, use only for testing or experimentation purposes.",source:"@site/docs/tools/erc725js/class/ERC725.md",sourceDirName:"tools/erc725js/class",slug:"/tools/erc725js/class/ERC725",permalink:"/tools/erc725js/class/ERC725",editUrl:"https://github.com/lukso-network/docs/tree/main/docs/tools/erc725js/class/ERC725.md",tags:[],version:"current",frontMatter:{},sidebar:"toolsSidebar",previous:{title:"Writing Data",permalink:"/tools/erc725js/writing-data"},next:{title:"Getting Started",permalink:"/tools/lsp-factoryjs/introduction/getting-started"}},s=[{value:"decodeData",id:"decodedata",children:[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Returns",id:"returns",children:[],level:3},{value:"Example",id:"example",children:[],level:3}],level:2},{value:"encodeData",id:"encodedata",children:[{value:"Parameters",id:"parameters-1",children:[],level:3},{value:"Returns",id:"returns-1",children:[],level:3},{value:"Example",id:"example-1",children:[],level:3}],level:2},{value:"fetchData",id:"fetchdata",children:[{value:"Parameters",id:"parameters-2",children:[],level:3},{value:"Returns",id:"returns-2",children:[],level:3},{value:"Example",id:"example-2",children:[],level:3}],level:2},{value:"getData",id:"getdata",children:[{value:"Parameters",id:"parameters-3",children:[],level:3},{value:"Returns",id:"returns-3",children:[],level:3},{value:"Example",id:"example-3",children:[],level:3}],level:2},{value:"getOwner",id:"getowner",children:[{value:"Parameters",id:"parameters-4",children:[],level:3},{value:"Returns",id:"returns-4",children:[],level:3},{value:"Example",id:"example-4",children:[],level:3}],level:2}],p={toc:s};function m(e){var a=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"erc725"},"ERC725"),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This package is currently in early stages of development, use only for testing or experimentation purposes."))),(0,i.kt)("h2",{id:"decodedata"},"decodeData"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"decodeData"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"In case you are reading the key-value store from an ERC725 smart-contract key-value store\nwithout ",(0,i.kt)("inlineCode",{parentName:"p"},"@erc725/erc725.js")," you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"decodeData")," to do the decoding for you."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It is more convenient to use ",(0,i.kt)("a",{parentName:"p",href:"/tools/erc725js/class/ERC725#fetchdata"},(0,i.kt)("inlineCode",{parentName:"a"},"fetchData")),".\nIt does the ",(0,i.kt)("inlineCode",{parentName:"p"},"decoding")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"fetching")," of external references for you automatically."))),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object")),(0,i.kt)("td",{parentName:"tr",align:"left"},"An object with one or many properties.")))),(0,i.kt)("h3",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"Returns decoded data as defined and expected in the schema:"),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Decode one key"',title:'"Decode',one:!0,'key"':!0},"const decodedDataOneKey = myERC725.decodeData({\n  LSP3Profile:\n    '0x6f357c6a820464ddfac1bec070cc14a8daf04129871d458f2ca94368aae8391311af6361696670733a2f2f516d597231564a4c776572673670456f73636468564775676f3339706136727963455a4c6a7452504466573834554178',\n});\n/**\n{\n  LSP3Profile: {\n    hashFunction: 'keccak256(utf8)',\n    hash: '0x820464ddfac1bec070cc14a8daf04129871d458f2ca94368aae8391311af6361',\n    url: 'ifps://QmYr1VJLwerg6pEoscdhVGugo39pa6rycEZLjtRPDfW84UAx',\n  },\n}\n*/\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Decode multiple keys"',title:'"Decode',multiple:!0,'keys"':!0},"const decodedDataManyKeys = myERC725.decodeData({\n  LSP3Profile:\n    '0x6f357c6a820464ddfac1bec070cc14a8daf04129871d458f2ca94368aae8391311af6361696670733a2f2f516d597231564a4c776572673670456f73636468564775676f3339706136727963455a4c6a7452504466573834554178',\n  'LSP3IssuedAssets[]': [\n    {\n      key: '0x3a47ab5bd3a594c3a8995f8fa58d0876c96819ca4516bd76100c92462f2f9dc0',\n      value:\n        '0x0000000000000000000000000000000000000000000000000000000000000002',\n    },\n    {\n      key: '0x3a47ab5bd3a594c3a8995f8fa58d087600000000000000000000000000000000',\n      value: '0xd94353d9b005b3c0a9da169b768a31c57844e490',\n    },\n    {\n      key: '0x3a47ab5bd3a594c3a8995f8fa58d087600000000000000000000000000000001',\n      value: '0xdaea594e385fc724449e3118b2db7e86dfba1826',\n    },\n  ],\n});\n/**\n{\n  LSP3Profile: {\n    hashFunction: 'keccak256(utf8)',\n    hash: '0x820464ddfac1bec070cc14a8daf04129871d458f2ca94368aae8391311af6361',\n    url: 'ifps://QmYr1VJLwerg6pEoscdhVGugo39pa6rycEZLjtRPDfW84UAx',\n  },\n  LSP1UniversalReceiverDelegate: '0x1183790f29BE3cDfD0A102862fEA1a4a30b3AdAb',\n}\n*/\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"encodedata"},"encodeData"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"encodeData"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"To be able to store your data on the blockchain, you need to encode it according to your ",(0,i.kt)("inlineCode",{parentName:"p"},"ERC725JSONSchema"),"."),(0,i.kt)("h3",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object")),(0,i.kt)("td",{parentName:"tr",align:"left"},"An object with one or many properties, containing the data that needs to be encoded.")))),(0,i.kt)("h3",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("p",null,"An object with the same keys as the object that was passed in as a parameter containing the encoded data, ready to be stored on the blockchain."),(0,i.kt)("h3",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Encoding object with one key"',title:'"Encoding',object:!0,with:!0,one:!0,'key"':!0},"const encodedDataOneKey = myERC725.encodeData({\n  LSP3Profile: {\n    json: profileJson, // check instantiation.js to see the actual JSON\n    url: 'ifps://QmQTqheBLZFnQUxu5RDs8tA9JtkxfZqMBcmGd9sukXxwRm',\n  },\n});\n/**\n{\n  LSP3Profile: {\n    value: '0x6f357c6a2404a2866f05e53e141eb61382a045e53c2fc54831daca9d9e1e039a11f739e1696670733a2f2f516d5154716865424c5a466e5155787535524473387441394a746b78665a714d42636d47643973756b587877526d',\n    key: '0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5'\n  }\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Encoding object with one key"',title:'"Encoding',object:!0,with:!0,one:!0,'key"':!0},"const encodedDataOneKeyV2 = myERC725.encodeData({\n  LSP3Profile: {\n    hashFunction: 'keccak256(utf8)',\n    hash: '0x820464ddfac1bec070cc14a8daf04129871d458f2ca94368aae8391311af6361',\n    url: 'ifps://QmYr1VJLwerg6pEoscdhVGugo39pa6rycEZLjtRPDfW84UAx',\n  },\n});\n/**\n{\n  LSP3Profile: {\n    value:\n      '0x6f357c6a820464ddfac1bec070cc14a8daf04129871d458f2ca94368aae8391311af6361696670733a2f2f516d597231564a4c776572673670456f73636468564775676f3339706136727963455a4c6a7452504466573834554178',\n    key: '0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5',\n  },\n}\n*/\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Encoding object with one key"',title:'"Encoding',object:!0,with:!0,one:!0,'key"':!0},"const encodedDataManyKeys = myERC725.encodeData({\n  LSP3Profile: {\n    hashFunction: 'keccak256(utf8)',\n    hash: '0x820464ddfac1bec070cc14a8daf04129871d458f2ca94368aae8391311af6361',\n    url: 'ifps://QmYr1VJLwerg6pEoscdhVGugo39pa6rycEZLjtRPDfW84UAx',\n  },\n  'LSP3IssuedAssets[]': [\n    '0xD94353D9B005B3c0A9Da169b768a31C57844e490',\n    '0xDaea594E385Fc724449E3118B2Db7E86dFBa1826',\n  ],\n  LSP1UniversalReceiverDelegate: '0x1183790f29BE3cDfD0A102862fEA1a4a30b3AdAb',\n});\n/**\n{\n  LSP3Profile: {\n    value:\n      '0x6f357c6a820464ddfac1bec070cc14a8daf04129871d458f2ca94368aae8391311af6361696670733a2f2f516d597231564a4c776572673670456f73636468564775676f3339706136727963455a4c6a7452504466573834554178',\n    key: '0x5ef83ad9559033e6e941db7d7c495acdce616347d28e90c7ce47cbfcfcad3bc5',\n  },\n  'LSP3IssuedAssets[]': {\n    value: [[Object], [Object], [Object]],\n    key: '0x3a47ab5bd3a594c3a8995f8fa58d0876c96819ca4516bd76100c92462f2f9dc0',\n  },\n  LSP1UniversalReceiverDelegate: {\n    value: '0x1183790f29be3cdfd0a102862fea1a4a30b3adab',\n    key: '0x0cfc51aec37c55a4d0b1a65c6255c4bf2fbdf6277f3cc0730c45b828b6db8b47',\n  },\n}\n*/\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When encoding JSON it is possible to pass in the JSON object and the URL where it is available publicly.\nThe JSON will be hashed with ",(0,i.kt)("inlineCode",{parentName:"p"},"keccak256"),"."))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"fetchdata"},"fetchData"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"fetchData"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"keyOrKeys?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Object"),">"),(0,i.kt)("p",null,"Since ",(0,i.kt)("a",{parentName:"p",href:"/tools/erc725js/class/ERC725#getdata"},(0,i.kt)("inlineCode",{parentName:"a"},"getData"))," exclusively returns data that is stored on the blockchain, ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchData")," comes in handy.\nAdditionally to the data from the blockchain, ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchData")," also returns data from IPFS or HTTP(s) endpoints\nstored as ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/master/LSPs/LSP-2-ERC725YJSONSchema.md#jsonurl"},(0,i.kt)("inlineCode",{parentName:"a"},"JSONURL"))," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/master/LSPs/LSP-2-ERC725YJSONSchema.md#asseturl"},(0,i.kt)("inlineCode",{parentName:"a"},"ASSETURL")),"."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To ensure ",(0,i.kt)("strong",{parentName:"p"},"data authenticity")," ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchData")," compares the ",(0,i.kt)("inlineCode",{parentName:"p"},"hash")," of the fetched JSON with the ",(0,i.kt)("inlineCode",{parentName:"p"},"hash")," stored on the blockchain."))),(0,i.kt)("h3",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"keyOrKeys?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The name (or the encoded name as the schema \u2018key\u2019) of the schema element in the class instance\u2019s schema.")))),(0,i.kt)("h3",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Object"),">"),(0,i.kt)("p",null,"Returns the fetched and decoded value depending ",(0,i.kt)("inlineCode",{parentName:"p"},"valueContent")," for the schema element, otherwise works like ",(0,i.kt)("a",{parentName:"p",href:"#getdata"},(0,i.kt)("inlineCode",{parentName:"a"},"getData()")),"."),(0,i.kt)("h3",{id:"example-2"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="All keys from schema"',title:'"All',keys:!0,from:!0,'schema"':!0},"const dataAllKeys = await myERC725.fetchData();\n/**\n{\n  'SupportedStandards:LSP3UniversalProfile': '0xabe425d6',\n  LSP3Profile: {\n    LSP3Profile: {\n      name: 'patrick-mcdowell',\n      links: [Array],\n      description: \"Beautiful clothing that doesn't cost the Earth. A sustainable designer based in London Patrick works with brand partners to refocus on systemic change centred around creative education. \",\n      profileImage: [Array],\n      backgroundImage: [Array],\n      tags: [Array]\n    }\n  },\n  LSP1UniversalReceiverDelegate: '0x50A02EF693fF6961A7F9178d1e53CC8BbE1DaD68',\n  'LSP3IssuedAssets[]': [\n    '0xc444009d38d3046bb0cF81Fa2Cd295ce46A67C78',\n    '0x4fEbC3491230571F6e1829E46602e3b110215A2E',\n    '0xB92a8DdA288638491AEE5C2a003D4CAbfa47aE3F',\n    '0x1e52e7F1707dcda57dD33F003B2311652A465acA',\n    '0x0BDA71aA980D37Ea56E8a3784E4c309101DAf3E4',\n    '0xfDB4D9C299438B9839e9d04E34B9609C5b56600D',\n    '0x081D3F0bff8ae2339cb65113822eEc1510704d5c',\n    '0x55C98c6944B7497FaAf4db0386a1aD1E6efF526E',\n    '0x90D1a1D68fa23AEEE991220703f1a1C3782e0b35',\n    '0xdB5AB19792d9fB61c1Dff57810Fb7C6f839Af8ED'\n  ]\n}\n*/\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="One key"',title:'"One','key"':!0},"const dataOneKey = await myERC725.fetchData('LSP3Profile');\n/**\n{\n  LSP3Profile: {\n    LSP3Profile: {\n      name: 'patrick-mcdowell',\n      links: [Array],\n      description: \"Beautiful clothing that doesn't cost the Earth. A sustainable designer based in London Patrick works with brand partners to refocus on systemic change centred around creative education. \",\n      profileImage: [Array],\n      backgroundImage: [Array],\n      tags: [Array]\n    }\n  }\n}\n*/\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Many keys"',title:'"Many','keys"':!0},"const dataManyKeys = await myERC725.fetchData([\n  'LSP3Profile',\n  'LSP1UniversalReceiverDelegate',\n]);\n/**\n{\n  LSP3Profile: {\n    LSP3Profile: {\n      name: 'patrick-mcdowell',\n      links: [Array],\n      description: \"Beautiful clothing that doesn't cost the Earth. A sustainable designer based in London Patrick works with brand partners to refocus on systemic change centred around creative education. \",\n      profileImage: [Array],\n      backgroundImage: [Array],\n      tags: [Array]\n    }\n  },\n  LSP1UniversalReceiverDelegate: '0x50A02EF693fF6961A7F9178d1e53CC8BbE1DaD68'\n}\n*/\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"getdata"},"getData"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getData"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"keyOrKeys?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Object"),">"),(0,i.kt)("p",null,"Gets ",(0,i.kt)("strong",{parentName:"p"},"decoded data")," for one, many or all keys of the specified ",(0,i.kt)("inlineCode",{parentName:"p"},"ERC725")," smart-contract.\nWhen omitting the ",(0,i.kt)("inlineCode",{parentName:"p"},"keyOrKeys")," parameter, it will get all the keys (as per ",(0,i.kt)("inlineCode",{parentName:"p"},"ERC725JSONSchema")," definition)."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Data returned by this function does not contain external data of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/master/LSPs/LSP-2-ERC725YJSONSchema.md#jsonurl"},(0,i.kt)("inlineCode",{parentName:"a"},"JSONURL")),"\nor ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lukso-network/LIPs/blob/master/LSPs/LSP-2-ERC725YJSONSchema.md#asseturl"},(0,i.kt)("inlineCode",{parentName:"a"},"ASSETURL"))," schema elements."),(0,i.kt)("p",{parentName:"div"},"If you would like to receive everything in one go, you can use ",(0,i.kt)("a",{parentName:"p",href:"/tools/erc725js/class/ERC725#fetchdata"},(0,i.kt)("inlineCode",{parentName:"a"},"fetchData"))," for that."))),(0,i.kt)("h3",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"keyOrKeys?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),"[]")))),(0,i.kt)("h3",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Object"),">"),(0,i.kt)("p",null,"An object with schema element key names as properties, with corresponding ",(0,i.kt)("strong",{parentName:"p"},"decoded")," data as values."),(0,i.kt)("h3",{id:"example-3"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="All keys from schema"',title:'"All',keys:!0,from:!0,'schema"':!0},"const dataAllKeys = await myERC725.getData();\n/**\n{\n  'SupportedStandards:LSP3UniversalProfile': '0xabe425d6',\n  LSP3Profile: {\n    hashFunction: 'keccak256(utf8)',\n    hash: '0xd96ff7776660095f661d16010c4349aa7478a9129ce0670f771596a6ff2d864a',\n    url: 'ipfs://QmbTmcbp8ZW23vkQrqkasMFqNg2z1iP4e3BCUMz9PKDsSV'\n  },\n  LSP1UniversalReceiverDelegate: '0x50A02EF693fF6961A7F9178d1e53CC8BbE1DaD68',\n  'LSP3IssuedAssets[]': [\n    '0xc444009d38d3046bb0cF81Fa2Cd295ce46A67C78',\n    '0x4fEbC3491230571F6e1829E46602e3b110215A2E',\n    '0xB92a8DdA288638491AEE5C2a003D4CAbfa47aE3F',\n    '0x1e52e7F1707dcda57dD33F003B2311652A465acA',\n    '0x0BDA71aA980D37Ea56E8a3784E4c309101DAf3E4',\n    '0xfDB4D9C299438B9839e9d04E34B9609C5b56600D',\n    '0x081D3F0bff8ae2339cb65113822eEc1510704d5c',\n    '0x55C98c6944B7497FaAf4db0386a1aD1E6efF526E',\n    '0x90D1a1D68fa23AEEE991220703f1a1C3782e0b35',\n    '0xdB5AB19792d9fB61c1Dff57810Fb7C6f839Af8ED'\n  ]\n}\n*/\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="One key"',title:'"One','key"':!0},"const dataOneKey = await myERC725.getData('LSP3Profile');\n/*\n{\n  LSP3Profile: {\n    hashFunction: 'keccak256(utf8)',\n    hash: '0xd96ff7776660095f661d16010c4349aa7478a9129ce0670f771596a6ff2d864a',\n    url: 'ipfs://QmbTmcbp8ZW23vkQrqkasMFqNg2z1iP4e3BCUMz9PKDsSV'\n  }\n}\n*/\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Many keys"',title:'"Many','keys"':!0},"const dataManyKeys = await myERC725.getData([\n  'LSP3Profile',\n  'LSP1UniversalReceiverDelegate',\n]);\n/**\n{\n  LSP3Profile: {\n    hashFunction: 'keccak256(utf8)',\n    hash: '0xd96ff7776660095f661d16010c4349aa7478a9129ce0670f771596a6ff2d864a',\n    url: 'ipfs://QmbTmcbp8ZW23vkQrqkasMFqNg2z1iP4e3BCUMz9PKDsSV'\n  },\n  LSP1UniversalReceiverDelegate: '0x50A02EF693fF6961A7F9178d1e53CC8BbE1DaD68'\n}\n*/\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"getowner"},"getOwner"),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This method is not yet supported when using the ",(0,i.kt)("inlineCode",{parentName:"p"},"graph")," provider type."))),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getOwner"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"_address?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("p",null,"An added utility method which simply returns the owner of the contract.\nNot directly related to ERC725 specifications."),(0,i.kt)("h3",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_address?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h3",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("p",null,"The address of the contract owner as stored in the contract."),(0,i.kt)("h3",{id:"example-4"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// If no _address is set, it will return the owner of the contract used to initialise the ERC725() class.\nawait myERC725.getOwner();\n// '0x94933413384997F9402cc07a650e8A34d60F437A'\n\n// You can also get the owner of a specific contract by setting the _address paramater\nawait myERC725.getOwner('0x3000783905Cc7170cCCe49a4112Deda952DDBe24');\n// '0x7f1b797b2Ba023Da2482654b50724e92EB5a7091'\n")))}m.isMDXComponent=!0}}]);
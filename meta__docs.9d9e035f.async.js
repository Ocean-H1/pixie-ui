"use strict";(self.webpackChunk_pixie_ui_docs=self.webpackChunk_pixie_ui_docs||[]).push([[904],{85989:function(u,n,e){e.r(n),e.d(n,{demos:function(){return i}});var r=e(44194),i={}},56510:function(u,n,e){e.r(n),e.d(n,{demos:function(){return i}});var r=e(44194),i={}},35927:function(u,n,e){var r;e.r(n),e.d(n,{demos:function(){return f}});var i=e(90819),p=e.n(i),x=e(89933),v=e.n(x),c=e(44194),_=e(98505),f={"docs-demo-0":{component:c.memo(c.lazy(v()(p()().mark(function m(){var l,o,d,I,s,t;return p()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,44194,19));case 2:return l=a.sent,o=l.default,a.next=6,Promise.resolve().then(e.bind(e,98505));case 6:return d=a.sent,I=d.Button,s=d.Input,t=function(){return o.createElement("div",null,o.createElement(I,{variant:"primary"},"\u70B9\u51FB\u6211"),o.createElement(s,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9"}))},a.abrupt("return",{default:t});case 11:case"end":return a.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';\r
import { Button, Input } from '@pixie-ui/core';\r
\r
const App = () => (\r
  <div>\r
    <Button variant="primary">\u70B9\u51FB\u6211</Button>\r
    <Input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />\r
  </div>\r
);\r
\r
export default App;`},react:{type:"NPM",value:"18.3.1"},"@pixie-ui/core":{type:"NPM",value:"1.0.4"}},entry:"index.tsx"},context:{react:r||(r=e.t(c,2)),"@pixie-ui/core":_},renderOpts:{compile:function(){var m=v()(p()().mark(function o(){var d,I=arguments;return p()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(415).then(e.bind(e,31415));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,I));case 3:case"end":return t.stop()}},o)}));function l(){return m.apply(this,arguments)}return l}()}}}},87726:function(u,n,e){e.r(n),e.d(n,{texts:function(){return r}});const r=[{value:"\u7EC4\u4EF6\u5217\u8868:",paraId:0,tocIndex:0},{value:"Button \u6309\u94AE",paraId:1,tocIndex:1},{value:"Icon \u56FE\u6807",paraId:2,tocIndex:1},{value:"Flex \u5F39\u6027\u5E03\u5C40",paraId:3,tocIndex:2},{value:"Input \u8F93\u5165\u6846",paraId:4,tocIndex:3},{value:"Form \u8868\u5355",paraId:5,tocIndex:3},{value:"Rate \u8BC4\u5206",paraId:6,tocIndex:3},{value:"Select \u9009\u62E9\u5668",paraId:7,tocIndex:3},{value:"Table \u8868\u683C",paraId:8,tocIndex:4},{value:"Card \u5361\u7247",paraId:9,tocIndex:4},{value:"Menu \u83DC\u5355",paraId:10,tocIndex:5},{value:"Modal \u6A21\u6001\u6846",paraId:11,tocIndex:6}]},57268:function(u,n,e){e.r(n),e.d(n,{texts:function(){return r}});const r=[{value:"\u672C\u8282\u5C06\u4ECB\u7ECD\u5982\u4F55\u5728\u9879\u76EE\u4E2D\u4F7F\u7528 Pixie UI \u7EC4\u4EF6\u5E93\u3002",paraId:0,tocIndex:0},{value:`# \u4F7F\u7528 npm\r
npm install @pixie-ui/core\r
\r
# \u4F7F\u7528 yarn\r
yarn add @pixie-ui/core\r
\r
# \u4F7F\u7528 pnpm\r
pnpm add @pixie-ui/core
`,paraId:1,tocIndex:1},{value:`import React from 'react';\r
import ReactDOM from 'react-dom';\r
import * as PixieUI from '@pixie-ui/core';\r
\r
const App = () => (\r
  <div>\r
    <PixieUI.Button>\u6309\u94AE</PixieUI.Button>\r
    <PixieUI.Input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />\r
  </div>\r
);\r
\r
ReactDOM.render(<App />, document.getElementById('root'));
`,paraId:2,tocIndex:3},{value:`import React from 'react';\r
import ReactDOM from 'react-dom';\r
import { Button, Input } from '@pixie-ui/core';\r
\r
const App = () => (\r
  <div>\r
    <Button>\u6309\u94AE</Button>\r
    <Input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" />\r
  </div>\r
);\r
\r
ReactDOM.render(<App />, document.getElementById('root'));
`,paraId:3,tocIndex:4},{value:"\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u793A\u4F8B\uFF0C\u5C55\u793A\u4E86\u5982\u4F55\u4F7F\u7528 Pixie UI \u7684\u6309\u94AE\u7EC4\u4EF6\uFF1A",paraId:4,tocIndex:5},{value:`import React from 'react';\r
import { Button } from '@pixie-ui/core';\r
\r
const App = () => (\r
  <div>\r
    <Button variant="primary">\u4E3B\u8981\u6309\u94AE</Button>\r
    <Button variant="secondary">\u6B21\u8981\u6309\u94AE</Button>\r
    <Button variant="text">\u6587\u672C\u6309\u94AE</Button>\r
    <Button disabled>\u7981\u7528\u6309\u94AE</Button>\r
  </div>\r
);\r
\r
export default App;
`,paraId:5,tocIndex:5}]},16701:function(u,n,e){e.r(n),e.d(n,{texts:function(){return r}});const r=[{value:"Pixie UI \u662F\u4E00\u4E2A\u73B0\u4EE3\u5316\u7684 React \u7EC4\u4EF6\u5E93\uFF0C\u4E13\u6CE8\u4E8E\u63D0\u4F9B\u7F8E\u89C2\u3001\u6613\u7528\u3001\u9AD8\u6548\u7684\u7528\u6237\u754C\u9762\u7EC4\u4EF6\u3002\u65E0\u8BBA\u662F\u5FEB\u901F\u642D\u5EFA\u4F01\u4E1A\u7EA7\u5E94\u7528\uFF0C\u8FD8\u662F\u6784\u5EFA\u4E2A\u4EBA\u9879\u76EE\uFF0CPixie UI \u90FD\u80FD\u6EE1\u8DB3\u60A8\u7684\u9700\u6C42\u3002",paraId:0,tocIndex:0},{value:`# \u4F7F\u7528 npm\r
npm install @pixie-ui/core\r
\r
# \u4F7F\u7528 yarn\r
yarn add @pixie-ui/core\r
\r
# \u4F7F\u7528 pnpm\r
pnpm add @pixie-ui/core
`,paraId:1,tocIndex:1},{value:"Pixie UI \u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u7EC4\u4EF6\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\uFF1A",paraId:2,tocIndex:3},{value:"\u901A\u7528\u7EC4\u4EF6",paraId:3,tocIndex:3},{value:"\uFF1AButton\uFF08\u6309\u94AE\uFF09\u3001Icon\uFF08\u56FE\u6807\uFF09\u7B49",paraId:3,tocIndex:3},{value:"\u5E03\u5C40\u7EC4\u4EF6",paraId:3,tocIndex:3},{value:"\uFF1AGrid\uFF08\u6805\u683C\uFF09\u3001Layout\uFF08\u5E03\u5C40\uFF09\u7B49",paraId:3,tocIndex:3},{value:"\u5BFC\u822A\u7EC4\u4EF6",paraId:3,tocIndex:3},{value:"\uFF1AMenu\uFF08\u83DC\u5355\uFF09\u3001Pagination\uFF08\u5206\u9875\uFF09\u7B49",paraId:3,tocIndex:3},{value:"\u6570\u636E\u5F55\u5165\u7EC4\u4EF6",paraId:3,tocIndex:3},{value:"\uFF1AForm\uFF08\u8868\u5355\uFF09\u3001Input\uFF08\u8F93\u5165\u6846\uFF09\u7B49",paraId:3,tocIndex:3},{value:"\u6570\u636E\u5C55\u793A\u7EC4\u4EF6",paraId:3,tocIndex:3},{value:"\uFF1ATable\uFF08\u8868\u683C\uFF09\u3001Card\uFF08\u5361\u7247\uFF09\u7B49",paraId:3,tocIndex:3},{value:"\u53CD\u9988\u7EC4\u4EF6",paraId:3,tocIndex:3},{value:"\uFF1AModal\uFF08\u6A21\u6001\u6846\uFF09\u3001Message\uFF08\u6D88\u606F\uFF09\u7B49",paraId:3,tocIndex:3},{value:"\u6211\u4EEC\u975E\u5E38\u6B22\u8FCE\u60A8\u4E3A Pixie UI \u8D21\u732E\u4EE3\u7801\u3002\u5982\u679C\u60A8\u53D1\u73B0\u4E86\u4EFB\u4F55\u95EE\u9898\u6216\u6709\u4EFB\u4F55\u5EFA\u8BAE\uFF0C\u8BF7\u5728 GitHub \u4E0A\u63D0\u4EA4 Issue \u6216 Pull Request\u3002",paraId:4,tocIndex:4},{value:"\u5982\u679C\u60A8\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u9047\u5230\u4EFB\u4F55\u95EE\u9898\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u83B7\u53D6\u5E2E\u52A9\uFF1A",paraId:5,tocIndex:5},{value:"\u5728 GitHub \u4E0A\u63D0\u4EA4 ",paraId:6,tocIndex:5},{value:"Issue",paraId:6,tocIndex:5},{value:"\u52A0\u5165\u6211\u4EEC\u7684\u793E\u533A\u4EA4\u6D41\u7FA4",paraId:6,tocIndex:5},{value:"Pixie UI \u4F7F\u7528 ",paraId:7,tocIndex:6},{value:"MIT \u8BB8\u53EF\u8BC1",paraId:7,tocIndex:6},{value:"\u3002",paraId:7,tocIndex:6}]}}]);

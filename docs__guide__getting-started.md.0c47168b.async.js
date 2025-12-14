"use strict";(self.webpackChunk_pixie_ui_docs=self.webpackChunk_pixie_ui_docs||[]).push([[655],{58747:function(d,i,e){e.r(i);var r=e(83269),p=e(21362),l=e(73680),m=e(28657),c=e(49075),t=e(51747),x=e(86613),h=e(48083),u=e(54780),a=e(3871),o=e(52983),n=e(3801),_=e(97458);function s(){return(0,_.jsx)(u.dY,{children:(0,_.jsx)(o.Suspense,{fallback:(0,_.jsx)(a.Z,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h1",{id:"\u5FEB\u901F\u4E0A\u624B",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5FEB\u901F\u4E0A\u624B",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u5FEB\u901F\u4E0A\u624B"]}),(0,_.jsx)("p",{children:n.texts[0].value}),(0,_.jsxs)("h2",{id:"\u5B89\u88C5",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5B89\u88C5",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u5B89\u88C5"]}),(0,_.jsx)(t.Z,{lang:"bash",children:n.texts[1].value}),(0,_.jsxs)("h2",{id:"\u4F7F\u7528",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F7F\u7528",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u4F7F\u7528"]}),(0,_.jsxs)("h3",{id:"\u5B8C\u6574\u5F15\u5165",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5B8C\u6574\u5F15\u5165",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u5B8C\u6574\u5F15\u5165"]}),(0,_.jsx)(t.Z,{lang:"tsx",children:n.texts[2].value}),(0,_.jsxs)("h3",{id:"\u6309\u9700\u5F15\u5165",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6309\u9700\u5F15\u5165",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u6309\u9700\u5F15\u5165"]}),(0,_.jsx)(t.Z,{lang:"tsx",children:n.texts[3].value}),(0,_.jsxs)("h2",{id:"\u793A\u4F8B",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u793A\u4F8B",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u793A\u4F8B"]}),(0,_.jsx)("p",{children:n.texts[4].value}),(0,_.jsx)(t.Z,{lang:"tsx",children:n.texts[5].value})]})})})})}i.default=s},3801:function(d,i,e){e.r(i),e.d(i,{texts:function(){return r}});const r=[{value:"\u672C\u8282\u5C06\u4ECB\u7ECD\u5982\u4F55\u5728\u9879\u76EE\u4E2D\u4F7F\u7528 Pixie UI \u7EC4\u4EF6\u5E93\u3002",paraId:0,tocIndex:0},{value:`# \u4F7F\u7528 npm\r
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
`,paraId:5,tocIndex:5}]}}]);

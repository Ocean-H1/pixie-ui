!(function(){"use strict";var lr=Object.defineProperty,cr=Object.defineProperties;var ur=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var pe=(P,$,m)=>$ in P?lr(P,$,{enumerable:!0,configurable:!0,writable:!0,value:m}):P[$]=m,x=(P,$)=>{for(var m in $||($={}))he.call($,m)&&pe(P,m,$[m]);if(G)for(var m of G($))fe.call($,m)&&pe(P,m,$[m]);return P},N=(P,$)=>cr(P,ur($));var J=(P,$)=>{var m={};for(var A in P)he.call(P,A)&&$.indexOf(A)<0&&(m[A]=P[A]);if(P!=null&&G)for(var A of G(P))$.indexOf(A)<0&&fe.call(P,A)&&(m[A]=P[A]);return m};var X=(P,$,m)=>new Promise((A,p)=>{var Y=R=>{try{H(m.next(R))}catch(V){p(V)}},q=R=>{try{H(m.throw(R))}catch(V){p(V)}},H=R=>R.done?A(R.value):Promise.resolve(R.value).then(Y,q);H((m=m.apply(P,$)).next())});(self.webpackChunk_pixie_ui_docs=self.webpackChunk_pixie_ui_docs||[]).push([[220],{40220:function(P,$,m){m.r($),m.d($,{Button:function(){return Re},Form:function(){return rr},FormItem:function(){return nr},FormList:function(){return sr},Input:function(){return Ue},Table:function(){return Qe},ThemeProvider:function(){return B.f6},darkTheme:function(){return B.$_},lightTheme:function(){return B.Wb},useForm:function(){return K},useTheme:function(){return B.Fg}});var A=m(75737),p=m(52983),Y=m(50261),q=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,H=(0,Y.Z)(function(e){return q.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),R=m(77926),V=m(82579),Q=m(62261),ee=!0,re={}.hasOwnProperty,Z=p.createContext(typeof HTMLElement!="undefined"?(0,R.Z)({key:"css"}):null),ge=Z.Provider,te=function(){return useContext(Z)},M=function(r){return(0,p.forwardRef)(function(t,a){var o=(0,p.useContext)(Z);return r(t,o,a)})};ee||(M=function(r){return function(t){var a=(0,p.useContext)(Z);return a===null?(a=(0,R.Z)({key:"css"}),p.createElement(Z.Provider,{value:a},r(t,a))):r(t,a)}});var W=p.createContext({}),ae=function(){return React.useContext(W)},oe=function(r,t){if(typeof t=="function"){var a=t(r);return a}return _extends({},r,t)},f=null,b=function(r){var t=React.useContext(W);return r.theme!==t&&(t=f(t)(r.theme)),React.createElement(W.Provider,{value:t},r.children)};function T(e){var r=e.displayName||e.name||"Component",t=function(l,h){var y=React.useContext(W);return React.createElement(e,_extends({theme:y,ref:h},l))},a=React.forwardRef(t);return a.displayName="WithTheme("+r+")",hoistNonReactStatics(a,e)}var g=function(r){var t=r.split(".");return t[t.length-1]},ve=function(r){var t=/^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(r);if(t||(t=/^([A-Za-z0-9$.]+)@/.exec(r),t))return g(t[1])},ye=new Set(["renderWithHooks","processChild","finishClassComponent","renderToString"]),be=function(r){return r.replace(/\$/g,"-")},dr=function(r){if(r)for(var t=r.split(`
`),a=0;a<t.length;a++){var o=ve(t[a]);if(o){if(ye.has(o))break;if(/^[A-Z]/.test(o))return be(o)}}},xe="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",mr="__EMOTION_LABEL_PLEASE_DO_NOT_USE__",pr=function(r,t){var a={};for(var o in t)re.call(t,o)&&(a[o]=t[o]);if(a[xe]=r,0)var l;return a},hr=function(r){var t=r.cache,a=r.serialized,o=r.isStringTag;return registerStyles(t,a,o),useInsertionEffectAlwaysWithSyncFallback(function(){return insertStyles(t,a,o)}),null},fr=null,gr=null,$e=!0;function we(e,r,t){var a="";return t.split(" ").forEach(function(o){e[o]!==void 0?r.push(e[o]+";"):o&&(a+=o+" ")}),a}var ne=function(r,t,a){var o=r.key+"-"+t.name;(a===!1||$e===!1)&&r.registered[o]===void 0&&(r.registered[o]=t.styles)},ke=function(r,t,a){ne(r,t,a);var o=r.key+"-"+t.name;if(r.inserted[t.name]===void 0){var l=t;do r.insert(t===l?"."+o:"",l,r.sheet,!0),l=l.next;while(l!==void 0)}},Se=H,Ce=function(r){return r!=="theme"},ie=function(r){return typeof r=="string"&&r.charCodeAt(0)>96?Se:Ce},se=function(r,t,a){var o;if(t){var l=t.shouldForwardProp;o=r.__emotion_forwardProp&&l?function(h){return r.__emotion_forwardProp(h)&&l(h)}:l}return typeof o!="function"&&a&&(o=r.__emotion_forwardProp),o},vr=`You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`,Pe=function(r){var t=r.cache,a=r.serialized,o=r.isStringTag;return ne(t,a,o),(0,Q.L)(function(){return ke(t,a,o)}),null},_e=function e(r,t){var a=r.__emotion_real===r,o=a&&r.__emotion_base||r,l,h;t!==void 0&&(l=t.label,h=t.target);var y=se(r,t,a),v=y||ie(o),z=!v("as");return function(){var c=arguments,_=a&&r.__emotion_styles!==void 0?r.__emotion_styles.slice(0):[];if(l!==void 0&&_.push("label:"+l+";"),c[0]==null||c[0].raw===void 0)_.push.apply(_,c);else{_.push(c[0][0]);for(var I=c.length,L=1;L<I;L++)_.push(c[L],c[0][L])}var i=M(function(n,d,k){var O=z&&n.as||o,D="",U=[],s=n;if(n.theme==null){s={};for(var S in n)s[S]=n[S];s.theme=p.useContext(W)}typeof n.className=="string"?D=we(d.registered,U,n.className):n.className!=null&&(D=n.className+" ");var u=(0,V.O)(_.concat(U),d.registered,s);D+=d.key+"-"+u.name,h!==void 0&&(D+=" "+h);var j=z&&y===void 0?ie(O):v,F={};for(var C in n)z&&C==="as"||j(C)&&(F[C]=n[C]);return F.className=D,F.ref=k,p.createElement(p.Fragment,null,p.createElement(Pe,{cache:d,serialized:u,isStringTag:typeof O=="string"}),p.createElement(O,F))});return i.displayName=l!==void 0?l:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",i.defaultProps=r.defaultProps,i.__emotion_real=i,i.__emotion_base=o,i.__emotion_styles=_,i.__emotion_forwardProp=y,Object.defineProperty(i,"toString",{value:function(){return"."+h}}),i.withComponent=function(n,d){return e(n,(0,A.Z)({},t,d,{shouldForwardProp:se(i,d,!0)})).apply(void 0,_)},i}},Ee=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],E=_e.bind();Ee.forEach(function(e){E[e]=E(e)});var B=m(37503),w=m(97458),ze=(e,r)=>{switch(e){case"primary":return r.colors.primary;case"secondary":return r.colors.secondary;case"text":return"transparent";default:return r.colors.primary}},Te=(e,r)=>{switch(e){case"primary":case"secondary":return r.colors.text.primary;case"text":return r.colors.primary;default:return r.colors.text.primary}},Fe=e=>{switch(e){case"primary":case"secondary":return"none";case"text":return"none";default:return"none"}},Ae=(e,r)=>{switch(e){case"primary":return r.colors.hover.primary;case"secondary":return r.colors.hover.secondary;case"text":return r.colors.hover.text;default:return r.colors.hover.primary}},Ne=(e,r)=>{switch(e){case"small":return`${r.spacing.xs} ${r.spacing.sm}`;case"medium":return`${r.spacing.xs} ${r.spacing.md}`;case"large":return`${r.spacing.sm} ${r.spacing.lg}`;default:return`${r.spacing.xs} ${r.spacing.md}`}},je=(e,r)=>{switch(e){case"small":return r.fontSizes.xs;case"medium":return r.fontSizes.sm;case"large":return r.fontSizes.md;default:return r.fontSizes.sm}},Oe=E.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  outline: 0;
  border: ${({$variant:e})=>Fe(e)};
  border-radius: ${({theme:e})=>e.radii.sm};
  padding: ${({$size:e,theme:r})=>Ne(e,r)};
  background-color: ${({$variant:e,theme:r})=>ze(e,r)};
  color: ${({$variant:e,theme:r})=>Te(e,r)};
  font-family: inherit;
  font-size: ${({$size:e,theme:r})=>je(e,r)};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  line-height: ${({theme:e})=>e.typography.lineHeight.relaxed};
  letter-spacing: ${({theme:e})=>e.typography.letterSpacing.wide};
  min-width: 64px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  
  &:hover {
    background-color: ${({$variant:e,theme:r})=>Ae(e,r)};
  }
  
  &:disabled {
    color: ${({theme:e})=>e.colors.text.disabled};
    background-color: ${({$variant:e,theme:r})=>e==="text"?"transparent":r.colors.disabled.background};
    cursor: not-allowed;
    pointer-events: none;
  }
`,Re=l=>{var h=l,{variant:e="primary",size:r="medium",disabled:t=!1,children:a}=h,o=J(h,["variant","size","disabled","children"]);let y=(0,B.Fg)();return(0,w.jsx)(Oe,N(x({$variant:e,$size:r,disabled:t,theme:y},o),{children:a}))},Le=(e,r)=>{switch(e){case"small":return`${r.spacing.xl}`;case"medium":return`${r.spacing.xl}`;case"large":return`${r.spacing.xl}`;default:return`${r.spacing.xl}`}},Be=(e,r)=>{switch(e){case"small":return`0 ${r.spacing.sm}`;case"medium":return`0 ${r.spacing.md}`;case"large":return`0 ${r.spacing.lg}`;default:return`0 ${r.spacing.md}`}},Ie=(e,r)=>{switch(e){case"small":return r.fontSizes.xs;case"medium":return r.fontSizes.sm;case"large":return r.fontSizes.md;default:return r.fontSizes.sm}},Me=E.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,De=E.input`
  box-sizing: border-box;
  width: 100%;
  height: ${({$size:e,theme:r})=>Le(e,r)};
  padding: ${({$size:e,theme:r})=>Be(e,r)};
  font-size: ${({$size:e,theme:r})=>Ie(e,r)};
  font-family: inherit;
  background-color: ${({theme:e})=>e.colors.background};
  color: ${({theme:e})=>e.colors.text.primary};
  border: 1px solid ${({$error:e,theme:r})=>e?r.colors.error:r.colors.border};
  border-radius: ${({theme:e})=>e.radii.sm};
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  
  &:focus {
    border-color: ${({$error:e,theme:r})=>e?r.colors.error:r.colors.primary};
    box-shadow: 0 0 0 2px ${({$error:e,theme:r})=>e?`${r.colors.error}33`:`${r.colors.primary}33`};
  }
  
  &:disabled {
    background-color: ${({theme:e})=>e.colors.surface};
    color: ${({theme:e})=>e.colors.text.disabled};
    cursor: not-allowed;
    border-color: ${({theme:e})=>e.colors.border};
  }
  
  &::placeholder {
    color: ${({theme:e})=>e.colors.text.secondary};
  }
`,We=E.div`
  margin-top: ${({theme:e})=>e.spacing.xs};
  color: ${({theme:e})=>e.colors.error};
  font-size: ${({theme:e})=>e.fontSizes.xs};
`,Ue=l=>{var h=l,{size:e="medium",error:r=!1,errorMessage:t,disabled:a=!1}=h,o=J(h,["size","error","errorMessage","disabled"]);let y=(0,B.Fg)();return(0,w.jsxs)(Me,{children:[(0,w.jsx)(De,x({$size:e,$error:r,disabled:a,theme:y},o)),r&&t&&(0,w.jsx)(We,{theme:y,children:t})]})},le=(e,r)=>{switch(e){case"small":return`${r.spacing.xl}`;case"medium":return`${r.spacing.xl}`;case"large":return`${r.spacing.xl}`;default:return`${r.spacing.xl}`}},ce=(e,r)=>{switch(e){case"small":return r.spacing.xs;case"medium":return r.spacing.sm;case"large":return r.spacing.md;default:return r.spacing.sm}},He=E.div`
  position: relative;
  overflow: auto;
  max-width: 100%;
  ${({$scroll:e})=>(e==null?void 0:e.x)&&"overflow-x: auto;"}
  ${({$scroll:e})=>(e==null?void 0:e.y)&&`
    overflow-y: auto;
    max-height: ${e.y}px;
  `}
`,Ve=E.table`
  width: 100%;
  border-collapse: ${({$bordered:e})=>e?"collapse":"separate"};
  border-spacing: 0;
  font-family: inherit;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  color: ${({theme:e})=>e.colors.text.primary};
  
  ${({$bordered:e,theme:r})=>e&&`
    border: 1px solid ${r.colors.border};
    border-radius: ${r.radii.sm};
    overflow: hidden;
  `}
`,Ze=E.thead`
  background-color: ${({theme:e})=>e.colors.surface};
`,Xe=E.tr`
  height: ${({theme:e})=>le("medium",e)};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.hover.text};
  }
  
  ${({className:e})=>e&&`
    &.${e} {
      // \u81EA\u5B9A\u4E49\u6837\u5F0F
    }
  `}
`,Ye=E.th`
  padding: ${({theme:e,$size:r})=>ce(r,e)};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  text-align: ${({$align:e})=>e||"left"};
  color: ${({theme:e})=>e.colors.text.secondary};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  
  ${({$bordered:e,theme:r})=>e&&`
    border-right: 1px solid ${r.colors.border};
    
    &:last-of-type {
      border-right: none;
    }
  `}
  
  ${({$width:e})=>e&&`width: ${e};`}
`,qe=E.tbody`
  background-color: ${({theme:e})=>e.colors.background};
`,Ge=E.tr`
  height: ${({theme:e,$size:r})=>le(r,e)};
  transition: background-color 0.3s;
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.hover.text};
  }
  
  ${({$striped:e,$index:r,theme:t})=>e&&r%2!==0&&`
    background-color: ${t.colors.surface};
  `}
  
  ${({className:e})=>e&&`
    &.${e} {
      // \u81EA\u5B9A\u4E49\u6837\u5F0F
    }
  `}
`,Je=E.td`
  padding: ${({theme:e,$size:r})=>ce(r,e)};
  text-align: ${({$align:e})=>e||"left"};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  
  ${({$bordered:e,theme:r})=>e&&`
    border-right: 1px solid ${r.colors.border};
    
    &:last-of-type {
      border-right: none;
    }
  `}
`,Ke=E.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({theme:e})=>e.spacing.xl} 0;
  color: ${({theme:e})=>e.colors.text.secondary};
`,Qe=({dataSource:e=[],columns:r=[],bordered:t=!0,size:a="medium",scroll:o,emptyText:l="\u6682\u65E0\u6570\u636E",onRowClick:h,headerRowClassName:y,rowClassName:v,striped:z=!1})=>{let c=(0,B.Fg)(),_=(n,d)=>v?typeof v=="function"?v(n,d):v:"",I=()=>(0,w.jsx)(Ze,{theme:c,children:(0,w.jsx)(Xe,{theme:c,className:y,children:r.map(n=>(0,w.jsx)(Ye,{theme:c,$bordered:t,$size:a,$width:n.width,$align:n.align,children:n.title},n.key))})}),L=(n,d,k)=>{let O=n[d.key];return d.render?d.render(O,n,k):O},i=()=>(0,w.jsx)(qe,{theme:c,children:e.length>0?e.map((n,d)=>(0,w.jsx)(Ge,{theme:c,$size:a,$striped:z,$index:d,className:_(n,d),onClick:h?()=>h(n,d):void 0,children:r.map(k=>(0,w.jsx)(Je,{theme:c,$bordered:t,$size:a,$align:k.align,children:L(n,k,d)},`${d}-${k.key}`))},d)):(0,w.jsx)("tr",{children:(0,w.jsx)("td",{colSpan:r.length,children:(0,w.jsx)(Ke,{theme:c,children:l})})})});return(0,w.jsx)(He,{theme:c,$scroll:o,children:(0,w.jsxs)(Ve,{theme:c,$bordered:t,$size:a,children:[I(),i()]})})},ue=(0,p.createContext)(void 0),er=E.form`
  display: flex;
  flex-direction: ${({$layout:e})=>e==="inline"?"row":"column"};
  gap: ${({theme:e,$layout:r})=>r==="inline"?e.spacing.md:e.spacing.sm};
  flex-wrap: ${({$layout:e})=>e==="inline"?"wrap":"nowrap"};
  width: 100%;
`,de=(e,r)=>{if(!e||!r)return;let t=r.replace(/\[(\w+)\]/g,".$1").split("."),a=e;for(let o of t){if(!a||typeof a!="object")return;a=a[o]}return a},me=(e,r,t)=>{if(!r)return e;let a=x({},e),o=r.replace(/\[(\w+)\]/g,".$1").split("."),l=a;for(let y=0;y<o.length-1;y++){let v=o[y];if(!l[v]||typeof l[v]!="object"){let z=o[y+1],c=/^\d+$/.test(z);l[v]=c?[]:{}}l=l[v]}let h=o[o.length-1];return l[h]=t,a},rr=y=>{var v=y,{initialValues:e={},layout:r="vertical",onSubmit:t,onError:a,onChange:o,children:l}=v,h=J(v,["initialValues","layout","onSubmit","onError","onChange","children"]);let z=(0,B.Fg)(),[c,_]=(0,p.useState)({values:x({},e),errors:{},touched:{},rules:{}}),I=(0,p.useCallback)((s,S)=>{s&&_(u=>{if(u.rules[s])return JSON.stringify(u.rules[s])===JSON.stringify(S||[])?u:N(x({},u),{rules:N(x({},u.rules),{[s]:S||[]})});let j=de(u.values,s),F=j!==void 0?j:"";return N(x({},u),{values:me(u.values,s,F),errors:N(x({},u.errors),{[s]:[]}),touched:N(x({},u.touched),{[s]:!1}),rules:N(x({},u.rules),{[s]:S||[]})})})},[]),L=(0,p.useCallback)((s,S)=>{s&&_(u=>{let j=me(u.values,s,S);return o&&o(j),N(x({},u),{values:j})})},[o]),i=(0,p.useCallback)((s,S)=>{s&&_(u=>N(x({},u),{errors:N(x({},u.errors),{[s]:S})}))},[]),n=(0,p.useCallback)((s,S)=>{s&&_(u=>N(x({},u),{touched:N(x({},u.touched),{[s]:S})}))},[]),d=(0,p.useCallback)((s,S)=>X(this,null,function*(){if(!s)return[];let u=S!==void 0?S:de(c.values,s),j=c.rules[s]||[],F=[];for(let C of j){if(C.required&&(u==null||u==="")){F.push(C.message||"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879");continue}if(!(u==null||u==="")){if(C.min!==void 0&&Number(u)<C.min){F.push(C.message||`\u4E0D\u80FD\u5C0F\u4E8E ${C.min}`);continue}if(C.max!==void 0&&Number(u)>C.max){F.push(C.message||`\u4E0D\u80FD\u5927\u4E8E ${C.max}`);continue}if(C.pattern&&!C.pattern.test(String(u))){F.push(C.message||"\u683C\u5F0F\u4E0D\u6B63\u786E");continue}if(C.validator)try{(yield Promise.resolve(C.validator(u,c.values)))||F.push(C.message||"\u9A8C\u8BC1\u5931\u8D25")}catch(yr){F.push(C.message||"\u9A8C\u8BC1\u51FA\u9519")}}}return i(s,F),F}),[c.values,c.rules,i]),k=(0,p.useCallback)(()=>X(this,null,function*(){let s=Object.keys(c.rules).map(u=>d(u)),S=(yield Promise.all(s)).every(u=>u.length===0);return!S&&a&&a(c.errors),S}),[c.rules,c.errors,d,a]),O=(0,p.useCallback)(()=>{_({values:x({},e),errors:{},touched:{},rules:x({},c.rules)})},[e,c.rules]),D=s=>X(this,null,function*(){s.preventDefault(),(yield k())&&t&&t(c.values)}),U={state:c,layout:r,setFieldValue:L,setFieldError:i,setFieldTouched:n,registerField:I,validateField:d,validateForm:k,resetForm:O};return(0,w.jsx)(ue.Provider,{value:U,children:(0,w.jsx)(er,N(x({onSubmit:D,$layout:r,theme:z},h),{children:l}))})},K=()=>{let e=(0,p.useContext)(ue);if(!e)throw new Error("useForm must be used within a Form component");return e},tr=E.div`
  display: flex;
  flex-direction: ${({$layout:e})=>e==="horizontal"?"row":"column"};
  gap: ${({theme:e})=>e.spacing.sm};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  
  ${({$layout:e,theme:r})=>e==="inline"&&`
    margin-bottom: 0;
    margin-right: ${r.spacing.md};
  `}
`,ar=E.label`
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  
  ${({$required:e,theme:r})=>e&&`
    &::after {
      content: '*';
      color: ${r.colors.error};
      margin-left: ${r.spacing.xs};
    }
  `}
`,or=E.div`
  color: ${({theme:e})=>e.colors.error};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  margin-top: ${({theme:e})=>e.spacing.xs};
`,nr=({name:e,label:r,rules:t=[],required:a=!1,children:o})=>{var U;let l=(0,B.Fg)(),h=K(),{layout:y,state:v,setFieldValue:z,setFieldTouched:c,registerField:_,validateField:I}=h,{values:L,errors:i,touched:n}=v;(0,p.useEffect)(()=>{let s=[...t];a&&!s.some(S=>S.required)&&s.push({required:!0,message:"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879"}),_(e,s)},[e,_,t,a]);let d=s=>X(this,null,function*(){z(e,s),c(e,!0),yield I(e,s)}),k=()=>X(this,null,function*(){c(e,!0),yield I(e)}),O=e&&e.includes(".")||e.includes("[")?D(e,L):L[e];function D(s,S){let u=s.replace(/\[(\w+)\]/g,".$1").split("."),j=S;for(let F of u){if(!j||typeof j!="object")return;j=j[F]}return j}return(0,w.jsxs)(tr,{$layout:y,theme:l,children:[r&&(0,w.jsx)(ar,{$required:a,theme:l,children:r}),(0,w.jsxs)("div",{style:{flex:1},children:[o({value:O,onChange:d,onBlur:k,error:i[e]||[],touched:n[e]||!1,form:h}),n[e]&&((U=i[e])==null?void 0:U.length)>0&&(0,w.jsx)(or,{theme:l,children:i[e][0]})]})]})},ir=E.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
`,sr=({name:e,children:r})=>{let t=(0,B.Fg)(),a=K(),{state:o,setFieldValue:l}=a,{values:h}=o,y=(0,p.useCallback)((i,n)=>{if(!i||!n)return;let d=n.replace(/\[(\w+)\]/g,".$1").split("."),k=i;for(let O of d){if(!k||typeof k!="object")return;k=k[O]}return k},[]),v=(0,p.useCallback)(()=>{let i=y(h,e);return Array.isArray(i)?i:[]},[e,h,y]),z=(0,p.useCallback)(i=>{l(e,i)},[e,l]),c=(0,p.useCallback)(i=>{let n=v();z([...n,i||{}])},[v,z]),_=(0,p.useCallback)(i=>{let n=v();if(i<0||i>=n.length)return;let d=[...n];d.splice(i,1),z(d)},[v,z]),I=(0,p.useCallback)((i,n)=>{let d=v();if(i<0||i>=d.length||n<0||n>=d.length||i===n)return;let k=[...d],[O]=k.splice(i,1);k.splice(n,0,O),z(k)},[v,z]),L=v().map((i,n)=>({name:`${e}[${n}]`,key:`${e}-${n}`}));return(0,w.jsx)(ir,{theme:t,children:r(L,{add:c,remove:_,move:I})})}},37503:function(P,$,m){m.d($,{f6:function(){return ae},$_:function(){return W},Wb:function(){return M},Fg:function(){return oe}});var A=m(63873),p=()=>typeof window<"u",Y=(f,b)=>window.getComputedStyle(f).getPropertyValue(b),q=(f,b,T,g)=>{f.addEventListener(b,T,g)},H=(f,b,T,g)=>{f.removeEventListener(b,T,g)},R=(f,b)=>{let T=x({},f);for(let g in b)Object.prototype.hasOwnProperty.call(b,g)&&(b[g]&&typeof b[g]=="object"&&!Array.isArray(b[g])?f[g]?T[g]=R(f[g],b[g]):Object.assign(T,{[g]:b[g]}):Object.assign(T,{[g]:b[g]}));return T},V=f=>Object.entries(f).reduce((b,[T,g])=>(g!=null&&g!==""&&(b[T]=g),b),{}),Q=(f,b)=>b.reduce((T,g)=>(Object.prototype.hasOwnProperty.call(f,g)&&(T[g]=f[g]),T),{}),ee=f=>f.charAt(0).toUpperCase()+f.slice(1),re=f=>f.replace(/([A-Z])/g,"-$1").toLowerCase(),Z=f=>f.replace(/-([a-z])/g,(b,T)=>T.toUpperCase()),ge=(f="id")=>`${f}-${Math.random().toString(36).substr(2,9)}`,te=m(97458),M={colors:{primary:"#1976d2",secondary:"#9c27b0",success:"#2e7d32",warning:"#ed6c02",error:"#d32f2f",info:"#0288d1",background:"#ffffff",surface:"#f5f5f5",text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},border:"rgba(0, 0, 0, 0.12)",hover:{primary:"#1565c0",secondary:"#7b1fa2",text:"rgba(25, 118, 210, 0.08)"},disabled:{background:"rgba(0, 0, 0, 0.12)"}},shadows:{sm:"0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",md:"0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)",lg:"0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1)"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px"},breakpoints:{xs:"0px",sm:"600px",md:"960px",lg:"1280px",xl:"1920px"},fontSizes:{xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.25rem",xl:"1.5rem",xxl:"2rem"},typography:{fontWeight:{regular:400,medium:500,bold:700},lineHeight:{normal:1.5,relaxed:1.75,loose:2},letterSpacing:{normal:"0.01em",wide:"0.02em",wider:"0.03em"}},radii:{xs:"2px",sm:"4px",md:"8px",lg:"16px",xl:"24px",round:"50%"}},W=N(x({},M),{colors:N(x({},M.colors),{background:"#121212",surface:"#1e1e1e",text:{primary:"rgba(255, 255, 255, 0.87)",secondary:"rgba(255, 255, 255, 0.6)",disabled:"rgba(255, 255, 255, 0.38)"},border:"rgba(255, 255, 255, 0.12)",hover:x({},M.colors.hover),disabled:{background:"rgba(255, 255, 255, 0.12)"}})}),ae=({theme:f,children:b})=>{let T=f?R(M,f):M;return(0,te.jsx)(A.a,{theme:T,children:b})},oe=()=>(0,A.u)()}}]);
}());
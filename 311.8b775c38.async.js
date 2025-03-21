!(function(){"use strict";var Ye=Object.defineProperty,Xe=Object.defineProperties;var qe=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var ce=(F,S,f)=>S in F?Ye(F,S,{enumerable:!0,configurable:!0,writable:!0,value:f}):F[S]=f,j=(F,S)=>{for(var f in S||(S={}))ue.call(S,f)&&ce(F,f,S[f]);if(H)for(var f of H(S))me.call(S,f)&&ce(F,f,S[f]);return F},B=(F,S)=>Xe(F,qe(S));var R=(F,S)=>{var f={};for(var i in F)ue.call(F,i)&&S.indexOf(i)<0&&(f[i]=F[i]);if(F!=null&&H)for(var i of H(F))S.indexOf(i)<0&&me.call(F,i)&&(f[i]=F[i]);return f};var J=(F,S,f)=>new Promise((i,Z)=>{var c=L=>{try{W(f.next(L))}catch(V){Z(V)}},p=L=>{try{W(f.throw(L))}catch(V){Z(V)}},W=L=>L.done?i(L.value):Promise.resolve(L.value).then(c,p);W((f=f.apply(F,S)).next())});(self.webpackChunk_pixie_ui_docs=self.webpackChunk_pixie_ui_docs||[]).push([[311],{93311:function(F,S,f){f.r(S),f.d(S,{Button:function(){return Y},Form:function(){return je},FormItem:function(){return Ee},FormList:function(){return Oe},Input:function(){return he},Menu:function(){return Te},MenuItem:function(){return Le},SubMenu:function(){return Ue},Table:function(){return ze},ThemeProvider:function(){return Z.f6},darkTheme:function(){return Z.$_},lightTheme:function(){return Z.Wb},useForm:function(){return G},useMenu:function(){return Q},useTheme:function(){return Z.Fg}});var i=f(71566),Z=f(37503),c=f(97458),p=f(52983);function W(e=!1){let[r,t]=useState(e),o=useCallback(()=>{t(a=>!a)},[]);return[r,o,t]}function L(e,r){let t=()=>{if(typeof window>"u")return r;try{let s=window.localStorage.getItem(e);return s?JSON.parse(s):r}catch(s){return console.warn(`Error reading localStorage key "${e}":`,s),r}},[o,a]=useState(t),h=s=>{try{let d=s instanceof Function?s(o):s;a(d),typeof window<"u"&&window.localStorage.setItem(e,JSON.stringify(d))}catch(d){console.warn(`Error setting localStorage key "${e}":`,d)}};return useEffect(()=>{let s=d=>{d.key===e&&d.newValue&&a(JSON.parse(d.newValue))};return window.addEventListener("storage",s),()=>{window.removeEventListener("storage",s)}},[e]),[o,h]}function V(e){let r=a=>typeof window<"u"?window.matchMedia(a).matches:!1,[t,o]=(0,p.useState)(r(e));return(0,p.useEffect)(()=>{let a=window.matchMedia(e),h=()=>o(a.matches);return h(),a.addEventListener("change",h),()=>{a.removeEventListener("change",h)}},[e]),t}var _=(e,r)=>{switch(e){case"primary":return r.colors.primary;case"secondary":return r.colors.secondary;case"text":return"transparent";default:return r.colors.primary}},ee=(e,r)=>{switch(e){case"primary":case"secondary":return r.colors.text.primary;case"text":return r.colors.primary;default:return r.colors.text.primary}},re=e=>{switch(e){case"primary":case"secondary":return"none";case"text":return"none";default:return"none"}},te=(e,r)=>{switch(e){case"primary":return r.colors.hover.primary;case"secondary":return r.colors.hover.secondary;case"text":return r.colors.hover.text;default:return r.colors.hover.primary}},oe=(e,r)=>{switch(e){case"small":return`${r.spacing.xs} ${r.spacing.sm}`;case"medium":return`${r.spacing.xs} ${r.spacing.md}`;case"large":return`${r.spacing.sm} ${r.spacing.lg}`;default:return`${r.spacing.xs} ${r.spacing.md}`}},U=(e,r)=>{switch(e){case"small":return r.fontSizes.xs;case"medium":return r.fontSizes.sm;case"large":return r.fontSizes.md;default:return r.fontSizes.sm}},D=i.Z.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  outline: 0;
  border: ${({$variant:e})=>re(e)};
  border-radius: ${({theme:e})=>e.radii.sm};
  padding: ${({$size:e,theme:r})=>oe(e,r)};
  background-color: ${({$variant:e,theme:r})=>_(e,r)};
  color: ${({$variant:e,theme:r})=>ee(e,r)};
  font-family: inherit;
  font-size: ${({$size:e,theme:r})=>U(e,r)};
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
    background-color: ${({$variant:e,theme:r})=>te(e,r)};
  }
  
  &:disabled {
    color: ${({theme:e})=>e.colors.text.disabled};
    background-color: ${({$variant:e,theme:r})=>e==="text"?"transparent":r.colors.disabled.background};
    cursor: not-allowed;
    pointer-events: none;
  }
`,Y=h=>{var s=h,{variant:e="primary",size:r="medium",disabled:t=!1,children:o}=s,a=R(s,["variant","size","disabled","children"]);let d=(0,Z.Fg)();return(0,c.jsx)(D,B(j({$variant:e,$size:r,disabled:t,theme:d},a),{children:o}))},X=(e,r)=>{switch(e){case"small":return`${r.spacing.xl}`;case"medium":return`${r.spacing.xl}`;case"large":return`${r.spacing.xl}`;default:return`${r.spacing.xl}`}},q=(e,r)=>{switch(e){case"small":return`0 ${r.spacing.sm}`;case"medium":return`0 ${r.spacing.md}`;case"large":return`0 ${r.spacing.lg}`;default:return`0 ${r.spacing.md}`}},b=(e,r)=>{switch(e){case"small":return r.fontSizes.xs;case"medium":return r.fontSizes.sm;case"large":return r.fontSizes.md;default:return r.fontSizes.sm}},v=i.Z.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,E=i.Z.input`
  box-sizing: border-box;
  width: 100%;
  height: ${({$size:e,theme:r})=>X(e,r)};
  padding: ${({$size:e,theme:r})=>q(e,r)};
  font-size: ${({$size:e,theme:r})=>b(e,r)};
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
`,y=i.Z.div`
  margin-top: ${({theme:e})=>e.spacing.xs};
  color: ${({theme:e})=>e.colors.error};
  font-size: ${({theme:e})=>e.fontSizes.xs};
`,he=h=>{var s=h,{size:e="medium",error:r=!1,errorMessage:t,disabled:o=!1}=s,a=R(s,["size","error","errorMessage","disabled"]);let d=(0,Z.Fg)();return(0,c.jsxs)(v,{children:[(0,c.jsx)(E,j({$size:e,$error:r,disabled:o,theme:d},a)),r&&t&&(0,c.jsx)(y,{theme:d,children:t})]})},se=(e,r)=>{switch(e){case"small":return`${r.spacing.xl}`;case"medium":return`${r.spacing.xl}`;case"large":return`${r.spacing.xl}`;default:return`${r.spacing.xl}`}},ne=(e,r)=>{switch(e){case"small":return r.spacing.xs;case"medium":return r.spacing.sm;case"large":return r.spacing.md;default:return r.spacing.sm}},pe=i.Z.div`
  position: relative;
  overflow: auto;
  max-width: 100%;
  ${({$scroll:e})=>(e==null?void 0:e.x)&&"overflow-x: auto;"}
  ${({$scroll:e})=>(e==null?void 0:e.y)&&`
    overflow-y: auto;
    max-height: ${e.y}px;
  `}
`,$e=i.Z.table`
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
`,ge=i.Z.thead`
  background-color: ${({theme:e})=>e.colors.surface};
`,fe=i.Z.tr`
  height: ${({theme:e})=>se("medium",e)};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.hover.text};
  }
  
  ${({className:e})=>e&&`
    &.${e} {
      // \u81EA\u5B9A\u4E49\u6837\u5F0F
    }
  `}
`,xe=i.Z.th`
  padding: ${({theme:e,$size:r})=>ne(r,e)};
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
`,be=i.Z.tbody`
  background-color: ${({theme:e})=>e.colors.background};
`,ye=i.Z.tr`
  height: ${({theme:e,$size:r})=>se(r,e)};
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
`,ve=i.Z.td`
  padding: ${({theme:e,$size:r})=>ne(r,e)};
  text-align: ${({$align:e})=>e||"left"};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  
  ${({$bordered:e,theme:r})=>e&&`
    border-right: 1px solid ${r.colors.border};
    
    &:last-of-type {
      border-right: none;
    }
  `}
`,we=i.Z.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({theme:e})=>e.spacing.xl} 0;
  color: ${({theme:e})=>e.colors.text.secondary};
`,ze=({dataSource:e=[],columns:r=[],bordered:t=!0,size:o="medium",scroll:a,emptyText:h="\u6682\u65E0\u6570\u636E",onRowClick:s,headerRowClassName:d,rowClassName:x,striped:w=!1})=>{let l=(0,Z.Fg)(),C=(m,g)=>x?typeof x=="function"?x(m,g):x:"",T=()=>(0,c.jsx)(ge,{theme:l,children:(0,c.jsx)(fe,{theme:l,className:d,children:r.map(m=>(0,c.jsx)(xe,{theme:l,$bordered:t,$size:o,$width:m.width,$align:m.align,children:m.title},m.key))})}),A=(m,g,k)=>{let M=m[g.key];return g.render?g.render(M,m,k):M},$=()=>(0,c.jsx)(be,{theme:l,children:e.length>0?e.map((m,g)=>(0,c.jsx)(ye,{theme:l,$size:o,$striped:w,$index:g,className:C(m,g),onClick:s?()=>s(m,g):void 0,children:r.map(k=>(0,c.jsx)(ve,{theme:l,$bordered:t,$size:o,$align:k.align,children:A(m,k,g)},`${g}-${k.key}`))},g)):(0,c.jsx)("tr",{children:(0,c.jsx)("td",{colSpan:r.length,children:(0,c.jsx)(we,{theme:l,children:h})})})});return(0,c.jsx)(pe,{theme:l,$scroll:a,children:(0,c.jsxs)($e,{theme:l,$bordered:t,$size:o,children:[T(),$()]})})},ie=(0,p.createContext)(void 0),ke=i.Z.form`
  display: flex;
  flex-direction: ${({$layout:e})=>e==="inline"?"row":"column"};
  gap: ${({theme:e,$layout:r})=>r==="inline"?e.spacing.md:e.spacing.sm};
  flex-wrap: ${({$layout:e})=>e==="inline"?"wrap":"nowrap"};
  width: 100%;
`,ae=(e,r)=>{if(!e||!r)return;let t=r.replace(/\[(\w+)\]/g,".$1").split("."),o=e;for(let a of t){if(!o||typeof o!="object")return;o=o[a]}return o},le=(e,r,t)=>{if(!r)return e;let o=j({},e),a=r.replace(/\[(\w+)\]/g,".$1").split("."),h=o;for(let d=0;d<a.length-1;d++){let x=a[d];if(!h[x]||typeof h[x]!="object"){let w=a[d+1],l=/^\d+$/.test(w);h[x]=l?[]:{}}h=h[x]}let s=a[a.length-1];return h[s]=t,o},je=d=>{var x=d,{initialValues:e={},layout:r="vertical",onSubmit:t,onError:o,onChange:a,children:h}=x,s=R(x,["initialValues","layout","onSubmit","onError","onChange","children"]);let w=(0,Z.Fg)(),[l,C]=(0,p.useState)({values:j({},e),errors:{},touched:{},rules:{}}),T=(0,p.useCallback)((n,z)=>{n&&C(u=>{if(u.rules[n])return JSON.stringify(u.rules[n])===JSON.stringify(z||[])?u:B(j({},u),{rules:B(j({},u.rules),{[n]:z||[]})});let N=ae(u.values,n),K=N!==void 0?N:"";return B(j({},u),{values:le(u.values,n,K),errors:B(j({},u.errors),{[n]:[]}),touched:B(j({},u.touched),{[n]:!1}),rules:B(j({},u.rules),{[n]:z||[]})})})},[]),A=(0,p.useCallback)((n,z)=>{n&&C(u=>{let N=le(u.values,n,z);return a&&a(N),B(j({},u),{values:N})})},[a]),$=(0,p.useCallback)((n,z)=>{n&&C(u=>B(j({},u),{errors:B(j({},u.errors),{[n]:z})}))},[]),m=(0,p.useCallback)((n,z)=>{n&&C(u=>B(j({},u),{touched:B(j({},u.touched),{[n]:z})}))},[]),g=(0,p.useCallback)((n,z)=>J(this,null,function*(){if(!n)return[];let u=z!==void 0?z:ae(l.values,n),N=l.rules[n]||[],K=[];for(let O of N){if(O.required&&(u==null||u==="")){K.push(O.message||"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879");continue}if(!(u==null||u==="")){if(O.min!==void 0&&Number(u)<O.min){K.push(O.message||`\u4E0D\u80FD\u5C0F\u4E8E ${O.min}`);continue}if(O.max!==void 0&&Number(u)>O.max){K.push(O.message||`\u4E0D\u80FD\u5927\u4E8E ${O.max}`);continue}if(O.pattern&&!O.pattern.test(String(u))){K.push(O.message||"\u683C\u5F0F\u4E0D\u6B63\u786E");continue}if(O.validator)try{(yield Promise.resolve(O.validator(u,l.values)))||K.push(O.message||"\u9A8C\u8BC1\u5931\u8D25")}catch(Ge){K.push(O.message||"\u9A8C\u8BC1\u51FA\u9519")}}}return $(n,K),K}),[l.values,l.rules,$]),k=(0,p.useCallback)(()=>J(this,null,function*(){let n=Object.keys(l.rules).map(u=>g(u)),z=(yield Promise.all(n)).every(u=>u.length===0);return!z&&o&&o(l.errors),z}),[l.rules,l.errors,g,o]),M=(0,p.useCallback)(()=>{C({values:j({},e),errors:{},touched:{},rules:j({},l.rules)})},[e,l.rules]),P=n=>J(this,null,function*(){n.preventDefault(),(yield k())&&t&&t(l.values)}),I={state:l,layout:r,setFieldValue:A,setFieldError:$,setFieldTouched:m,registerField:T,validateField:g,validateForm:k,resetForm:M};return(0,c.jsx)(ie.Provider,{value:I,children:(0,c.jsx)(ke,B(j({onSubmit:P,$layout:r,theme:w},s),{children:h}))})},G=()=>{let e=(0,p.useContext)(ie);if(!e)throw new Error("useForm must be used within a Form component");return e},Se=i.Z.div`
  display: flex;
  flex-direction: ${({$layout:e})=>e==="horizontal"?"row":"column"};
  gap: ${({theme:e})=>e.spacing.sm};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  
  ${({$layout:e,theme:r})=>e==="inline"&&`
    margin-bottom: 0;
    margin-right: ${r.spacing.md};
  `}
`,Ce=i.Z.label`
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
`,Fe=i.Z.div`
  color: ${({theme:e})=>e.colors.error};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  margin-top: ${({theme:e})=>e.spacing.xs};
`,Ee=({name:e,label:r,rules:t=[],required:o=!1,children:a})=>{var I;let h=(0,Z.Fg)(),s=G(),{layout:d,state:x,setFieldValue:w,setFieldTouched:l,registerField:C,validateField:T}=s,{values:A,errors:$,touched:m}=x;(0,p.useEffect)(()=>{let n=[...t];o&&!n.some(z=>z.required)&&n.push({required:!0,message:"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879"}),C(e,n)},[e,C,t,o]);let g=n=>J(this,null,function*(){w(e,n),l(e,!0),yield T(e,n)}),k=()=>J(this,null,function*(){l(e,!0),yield T(e)}),M=e&&e.includes(".")||e.includes("[")?P(e,A):A[e];function P(n,z){let u=n.replace(/\[(\w+)\]/g,".$1").split("."),N=z;for(let K of u){if(!N||typeof N!="object")return;N=N[K]}return N}return(0,c.jsxs)(Se,{$layout:d,theme:h,children:[r&&(0,c.jsx)(Ce,{$required:o,theme:h,children:r}),(0,c.jsxs)("div",{style:{flex:1},children:[a({value:M,onChange:g,onBlur:k,error:$[e]||[],touched:m[e]||!1,form:s}),m[e]&&((I=$[e])==null?void 0:I.length)>0&&(0,c.jsx)(Fe,{theme:h,children:$[e][0]})]})]})},Ze=i.Z.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
`,Oe=({name:e,children:r})=>{let t=(0,Z.Fg)(),o=G(),{state:a,setFieldValue:h}=o,{values:s}=a,d=(0,p.useCallback)(($,m)=>{if(!$||!m)return;let g=m.replace(/\[(\w+)\]/g,".$1").split("."),k=$;for(let M of g){if(!k||typeof k!="object")return;k=k[M]}return k},[]),x=(0,p.useCallback)(()=>{let $=d(s,e);return Array.isArray($)?$:[]},[e,s,d]),w=(0,p.useCallback)($=>{h(e,$)},[e,h]),l=(0,p.useCallback)($=>{let m=x();w([...m,$||{}])},[x,w]),C=(0,p.useCallback)($=>{let m=x();if($<0||$>=m.length)return;let g=[...m];g.splice($,1),w(g)},[x,w]),T=(0,p.useCallback)(($,m)=>{let g=x();if($<0||$>=g.length||m<0||m>=g.length||$===m)return;let k=[...g],[M]=k.splice($,1);k.splice(m,0,M),w(k)},[x,w]),A=x().map(($,m)=>({name:`${e}[${m}]`,key:`${e}-${m}`}));return(0,c.jsx)(Ze,{theme:t,children:r(A,{add:l,remove:C,move:T})})},de=(0,p.createContext)(void 0),Q=()=>{let e=(0,p.useContext)(de);if(!e)throw new Error("useMenu\u5FC5\u987B\u5728Menu\u7EC4\u4EF6\u5185\u4F7F\u7528");return e},Be=i.Z.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: ${({theme:e})=>e.colors.background};
  color: ${({theme:e})=>e.colors.text.primary};
  border-right: ${({theme:e,$mode:r})=>r==="vertical"?`1px solid ${e.colors.border}`:"none"};
  display: flex;
  flex-direction: ${({$mode:e})=>e==="horizontal"?"row":"column"};
  width: ${({$mode:e,$collapsed:r})=>e==="vertical"&&r?"80px":"100%"};
  transition: width 0.3s ease;
  overflow: ${({$collapsed:e})=>"visible"};
  
  ${({$mode:e,theme:r})=>e==="horizontal"&&`
    border-bottom: 1px solid ${r.colors.border};
    height: 56px;
    align-items: center;
    flex-wrap: wrap;
  `}
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    flex-direction: column;
    ${({$mode:e})=>e==="horizontal"&&`
      height: auto;
      border-bottom: none;
      border-right: 1px solid;
    `}
  }
`,Te=({mode:e="vertical",defaultSelectedKeys:r=[],selectedKeys:t,defaultOpenKeys:o=[],openKeys:a,collapsed:h=!1,onCollapse:s,onSelect:d,onOpenChange:x,breakpoint:w,children:l})=>{let C=(0,Z.Fg)(),[T,A]=(0,p.useState)(t||r),[$,m]=(0,p.useState)(a||o),[g,k]=(0,p.useState)(h);(0,p.useEffect)(()=>{t&&A(t)},[t]),(0,p.useEffect)(()=>{a&&m(a)},[a]),(0,p.useEffect)(()=>{k(h)},[h]);let M=w?(n=>typeof n=="number"?`${n}px`:C.breakpoints[n]||C.breakpoints.md)(w):null,P=V(M?`(max-width: ${M})`:"");(0,p.useEffect)(()=>{w&&P!==g&&(k(P),s==null||s(P))},[P,w]);let I={mode:e,collapsed:g,selectedKeys:T,openKeys:$,onSelect:n=>{t||A([n]),d==null||d(n)},onOpenChange:n=>{if(!a){let z=[...$],u=z.indexOf(n);u>=0?z.splice(u,1):z.push(n),m(z)}x==null||x(n)}};return(0,c.jsx)(de.Provider,{value:I,children:(0,c.jsx)(Be,{theme:C,$mode:e,$collapsed:g,children:l})})},Ae=i.Z.li`
  display: flex;
  align-items: center;
  padding: ${({theme:e,$mode:r})=>r==="horizontal"?`0 ${e.spacing.md}`:`${e.spacing.sm} ${e.spacing.md}`};
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  transition: all 0.3s ease;
  color: ${({theme:e,$isSelected:r,$disabled:t})=>t?e.colors.text.disabled:r?e.colors.primary:e.colors.text.primary};
  background-color: ${({theme:e,$isSelected:r})=>r?`${e.colors.hover.text}`:"transparent"};
  border-right: ${({theme:e,$isSelected:r,$mode:t})=>r&&t==="vertical"?`3px solid ${e.colors.primary}`:"none"};
  border-bottom: ${({theme:e,$isSelected:r,$mode:t})=>r&&t==="horizontal"?`2px solid ${e.colors.primary}`:"none"};
  height: ${({$mode:e})=>e==="horizontal"?"100%":"auto"};
  
  &:hover {
    background-color: ${({theme:e,$disabled:r})=>r?"transparent":e.colors.hover.text};
  }
  
  ${({$collapsed:e})=>e&&`
    justify-content: center;
    padding: 12px 0;
    text-align: center;
  `}
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: ${({theme:e})=>`${e.spacing.sm} ${e.spacing.md}`};
    ${({$mode:e})=>e==="horizontal"&&`
      height: auto;
    `}
  }
`,Me=i.Z.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  
  ${({$collapsed:e})=>e&&`
    flex-direction: column;
    gap: 4px;
  `}
`,Ne=i.Z.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({theme:e})=>e.fontSizes.lg};
`,Ke=i.Z.span`
  transition: opacity 0.3s;
  opacity: ${({$collapsed:e})=>e?"0":"1"};
  display: ${({$collapsed:e})=>e?"none":"block"};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: block;
    opacity: 1;
  }
`,Le=e=>{let{children:r,icon:t,disabled:o=!1,onClick:a}=e,h=e.key,s=(0,Z.Fg)(),{mode:d,selectedKeys:x,onSelect:w,collapsed:l}=Q(),C=x.includes(h);return(0,c.jsx)(Ae,{theme:s,$mode:d,$isSelected:C,$disabled:o,$collapsed:l,onClick:()=>{o||(a&&a(),w(h))},children:(0,c.jsxs)(Me,{theme:s,$collapsed:l,children:[t&&(0,c.jsx)(Ne,{theme:s,children:t}),(0,c.jsx)(Ke,{theme:s,$collapsed:l,children:r})]})})},De=i.Z.li`
  list-style: none;
  position: relative;
`,Pe=i.Z.div`
  display: flex;
  align-items: center;
  padding: ${({theme:e,$mode:r})=>r==="horizontal"?`0 ${e.spacing.md}`:`${e.spacing.sm} ${e.spacing.md}`};
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  transition: all 0.3s ease;
  color: ${({theme:e,$isOpen:r,$disabled:t})=>t?e.colors.text.disabled:r?e.colors.primary:e.colors.text.primary};
  background-color: ${({theme:e,$isOpen:r})=>r?`${e.colors.hover.text}`:"transparent"};
  height: ${({$mode:e})=>e==="horizontal"?"100%":"auto"};

  &:hover {
    background-color: ${({theme:e,$disabled:r})=>r?"transparent":e.colors.hover.text};
  }
  
  ${({$collapsed:e})=>e&&`
    justify-content: center;
    padding: 12px 0;
    text-align: center;
  `}
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    padding: ${({theme:e})=>`${e.spacing.sm} ${e.spacing.md}`};
    ${({$mode:e})=>e==="horizontal"&&`
      height: auto;
    `}
  }
`,Ve=i.Z.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  
  ${({$collapsed:e})=>e&&`
    flex-direction: column;
    gap: 4px;
  `}
`,Ie=i.Z.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sm};
  
  ${({$collapsed:e})=>e&&`
    flex-direction: column;
    gap: 4px;
  `}
`,Je=i.Z.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({theme:e})=>e.fontSizes.lg};
`,We=i.Z.span`
  transition: opacity 0.3s;
  opacity: ${({$collapsed:e})=>e?"0":"1"};
  display: ${({$collapsed:e})=>e?"none":"block"};
  font-size: ${({theme:e})=>e.fontSizes.sm};
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: block;
    opacity: 1;
  }
`,He=i.Z.span`
  display: ${({$collapsed:e})=>e?"none":"flex"};
  align-items: center;
  justify-content: center;
  transition: transform 0.3s;
  transform: rotate(${({$isOpen:e,$mode:r})=>r==="horizontal"?e?"180deg":"0deg":e?"90deg":"0deg"});
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    display: flex;
  }
`,Re=i.Z.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  transition: height 0.3s ease;
  background-color: ${({theme:e})=>e.colors.background};
  
  ${({$mode:e,$isOpen:r,theme:t,$collapsed:o})=>e==="horizontal"?`
      position: absolute;
      top: 100%;
      left: 0;
      min-width: 160px;
      box-shadow: ${t.shadows.md};
      border-radius: ${t.radii.sm};
      z-index: 1000;
      display: ${r?"block":"none"};
      `:`
      padding-left: ${o?"0":t.spacing.md};
      max-height: ${r?"1000px":"0px"};
      border-left: ${o?"none":`1px solid ${t.colors.border}`};
      margin-left: ${o?"0":t.spacing.md};
      `}
  
  @media (max-width: ${({theme:e})=>e.breakpoints.md}) {
    position: static;
    box-shadow: none;
    min-width: auto;
    border-radius: 0;
    max-height: ${({$isOpen:e})=>e?"1000px":"0px"};
  }
`,Ue=e=>{let{title:r,icon:t,disabled:o=!1,children:a}=e,h=e.key,s=(0,Z.Fg)(),{mode:d,openKeys:x,onOpenChange:w,collapsed:l}=Q(),C=x.includes(h),[T,A]=(0,p.useState)(!1);return(0,p.useEffect)(()=>{d==="horizontal"&&T&&!o&&w(h)},[T,d]),(0,c.jsxs)(De,{theme:s,onMouseEnter:()=>{d==="horizontal"&&!o&&A(!0)},onMouseLeave:()=>{d==="horizontal"&&!o&&A(!1)},children:[(0,c.jsx)(Pe,{theme:s,$mode:d,$isOpen:C,$disabled:o,$collapsed:l,onClick:()=>{o||w(h)},children:(0,c.jsxs)(Ve,{theme:s,$collapsed:l,children:[(0,c.jsxs)(Ie,{theme:s,$collapsed:l,children:[t&&(0,c.jsx)(Je,{theme:s,children:t}),(0,c.jsx)(We,{theme:s,$collapsed:l,children:r})]}),(0,c.jsx)(He,{theme:s,$isOpen:C,$mode:d,$collapsed:l,children:d==="horizontal"?"\u25BC":"\u25B6"})]})}),(0,c.jsx)(Re,{theme:s,$mode:d,$isOpen:C||d==="horizontal"&&T,$collapsed:l,children:a})]})}},37503:function(F,S,f){f.d(S,{f6:function(){return X},$_:function(){return Y},Wb:function(){return D},Fg:function(){return q}});var i=f(63873),Z=()=>typeof window<"u",c=(b,v)=>window.getComputedStyle(b).getPropertyValue(v),p=(b,v,E,y)=>{b.addEventListener(v,E,y)},W=(b,v,E,y)=>{b.removeEventListener(v,E,y)},L=(b,v)=>{let E=j({},b);for(let y in v)Object.prototype.hasOwnProperty.call(v,y)&&(v[y]&&typeof v[y]=="object"&&!Array.isArray(v[y])?b[y]?E[y]=L(b[y],v[y]):Object.assign(E,{[y]:v[y]}):Object.assign(E,{[y]:v[y]}));return E},V=b=>Object.entries(b).reduce((v,[E,y])=>(y!=null&&y!==""&&(v[E]=y),v),{}),_=(b,v)=>v.reduce((E,y)=>(Object.prototype.hasOwnProperty.call(b,y)&&(E[y]=b[y]),E),{}),ee=b=>b.charAt(0).toUpperCase()+b.slice(1),re=b=>b.replace(/([A-Z])/g,"-$1").toLowerCase(),te=b=>b.replace(/-([a-z])/g,(v,E)=>E.toUpperCase()),oe=(b="id")=>`${b}-${Math.random().toString(36).substr(2,9)}`,U=f(97458),D={colors:{primary:"#1976d2",secondary:"#9c27b0",success:"#2e7d32",warning:"#ed6c02",error:"#d32f2f",info:"#0288d1",background:"#ffffff",surface:"#f5f5f5",text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},border:"rgba(0, 0, 0, 0.12)",hover:{primary:"#1565c0",secondary:"#7b1fa2",text:"rgba(25, 118, 210, 0.08)"},disabled:{background:"rgba(0, 0, 0, 0.12)"}},shadows:{sm:"0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",md:"0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)",lg:"0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1)"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px"},breakpoints:{xs:"0px",sm:"600px",md:"960px",lg:"1280px",xl:"1920px"},fontSizes:{xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.25rem",xl:"1.5rem",xxl:"2rem"},typography:{fontWeight:{regular:400,medium:500,bold:700},lineHeight:{normal:1.5,relaxed:1.75,loose:2},letterSpacing:{normal:"0.01em",wide:"0.02em",wider:"0.03em"}},radii:{xs:"2px",sm:"4px",md:"8px",lg:"16px",xl:"24px",round:"50%"}},Y=B(j({},D),{colors:B(j({},D.colors),{background:"#121212",surface:"#1e1e1e",text:{primary:"rgba(255, 255, 255, 0.87)",secondary:"rgba(255, 255, 255, 0.6)",disabled:"rgba(255, 255, 255, 0.38)"},border:"rgba(255, 255, 255, 0.12)",hover:j({},D.colors.hover),disabled:{background:"rgba(255, 255, 255, 0.12)"}})}),X=({theme:b,children:v})=>{let E=b?L(D,b):D;return(0,U.jsx)(i.a,{theme:E,children:v})},q=()=>(0,i.u)()}}]);
}());
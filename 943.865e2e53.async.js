!(function(){"use strict";var or=Object.defineProperty,ir=Object.defineProperties;var sr=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var me=(S,C,f)=>C in S?or(S,C,{enumerable:!0,configurable:!0,writable:!0,value:f}):S[C]=f,z=(S,C)=>{for(var f in C||(C={}))he.call(C,f)&&me(S,f,C[f]);if(Y)for(var f of Y(C))pe.call(C,f)&&me(S,f,C[f]);return S},_=(S,C)=>ir(S,sr(C));var R=(S,C)=>{var f={};for(var s in S)he.call(S,s)&&C.indexOf(s)<0&&(f[s]=S[s]);if(S!=null&&Y)for(var s of Y(S))C.indexOf(s)<0&&pe.call(S,s)&&(f[s]=S[s]);return f};var H=(S,C,f)=>new Promise((s,F)=>{var a=A=>{try{K(f.next(A))}catch(L){F(L)}},x=A=>{try{K(f.throw(A))}catch(L){F(L)}},K=A=>A.done?s(A.value):Promise.resolve(A.value).then(a,x);K((f=f.apply(S,C)).next())});(self.webpackChunk_pixie_ui_docs=self.webpackChunk_pixie_ui_docs||[]).push([[943],{98943:function(S,C,f){f.r(C),f.d(C,{Button:function(){return ae},Card:function(){return tr},Flex:function(){return Le},Form:function(){return Ce},FormItem:function(){return Ze},FormList:function(){return _e},Input:function(){return j},Menu:function(){return Ne},MenuContext:function(){return V},MenuItem:function(){return ce},SubMenu:function(){return ue},Table:function(){return je},ThemeProvider:function(){return F.f6},darkTheme:function(){return F.$_},lightTheme:function(){return F.Wb},useForm:function(){return re},useMenuContext:function(){return J},useTheme:function(){return F.Fg}});var s=f(74560),F=f(37503),a=f(97458),x=f(52983),K=(e,r)=>{switch(e){case"primary":return r.colors.primary;case"secondary":return r.colors.secondary;case"text":return"transparent";default:return r.colors.primary}},A=(e,r)=>{switch(e){case"primary":case"secondary":return r.colors.text.primary;case"text":return r.colors.primary;default:return r.colors.text.primary}},L=e=>{switch(e){case"primary":case"secondary":return"none";case"text":return"none";default:return"none"}},te=(e,r)=>{switch(e){case"primary":return r.colors.hover.primary;case"secondary":return r.colors.hover.secondary;case"text":return r.colors.hover.text;default:return r.colors.hover.primary}},oe=(e,r)=>{switch(e){case"small":return`${r.spacing.xs} ${r.spacing.sm}`;case"medium":return`${r.spacing.xs} ${r.spacing.md}`;case"large":return`${r.spacing.sm} ${r.spacing.lg}`;default:return`${r.spacing.xs} ${r.spacing.md}`}},ie=(e,r)=>{switch(e){case"small":return r.fontSizes.xs;case"medium":return r.fontSizes.sm;case"large":return r.fontSizes.md;default:return r.fontSizes.sm}},se=s.Z.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  outline: 0;
  border: ${({$variant:e})=>L(e)};
  border-radius: ${({theme:e})=>e.radii.sm};
  padding: ${({$size:e,theme:r})=>oe(e,r)};
  background-color: ${({$variant:e,theme:r})=>K(e,r)};
  color: ${({$variant:e,theme:r})=>A(e,r)};
  font-family: inherit;
  font-size: ${({$size:e,theme:r})=>ie(e,r)};
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
`,ae=h=>{var $=h,{variant:e="primary",size:r="medium",disabled:o=!1,children:l}=$,p=R($,["variant","size","disabled","children"]);let b=(0,F.Fg)();return(0,a.jsx)(se,_(z({$variant:e,$size:r,disabled:o,theme:b},p),{children:l}))},G=(e,r)=>{switch(e){case"small":return`${r.spacing.xl}`;case"medium":return`${r.spacing.xl}`;case"large":return`${r.spacing.xl}`;default:return`${r.spacing.xl}`}},W=(e,r)=>{switch(e){case"small":return`0 ${r.spacing.sm}`;case"medium":return`0 ${r.spacing.md}`;case"large":return`0 ${r.spacing.lg}`;default:return`0 ${r.spacing.md}`}},Q=(e,r)=>{switch(e){case"small":return r.fontSizes.xs;case"medium":return r.fontSizes.sm;case"large":return r.fontSizes.md;default:return r.fontSizes.sm}},X=s.Z.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,ee=s.Z.input`
  box-sizing: border-box;
  width: 100%;
  height: ${({$size:e,theme:r})=>G(e,r)};
  padding: ${({$size:e,theme:r})=>W(e,r)};
  font-size: ${({$size:e,theme:r})=>Q(e,r)};
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
`,y=s.Z.div`
  margin-top: ${({theme:e})=>e.spacing.xs};
  color: ${({theme:e})=>e.colors.error};
  font-size: ${({theme:e})=>e.fontSizes.xs};
`,j=h=>{var $=h,{size:e="medium",error:r=!1,errorMessage:o,disabled:l=!1}=$,p=R($,["size","error","errorMessage","disabled"]);let b=(0,F.Fg)();return(0,a.jsxs)(X,{children:[(0,a.jsx)(ee,z({$size:e,$error:r,disabled:l,theme:b},p)),r&&o&&(0,a.jsx)(y,{theme:b,children:o})]})},E=(e,r)=>{switch(e){case"small":return`${r.spacing.xl}`;case"medium":return`${r.spacing.xl}`;case"large":return`${r.spacing.xl}`;default:return`${r.spacing.xl}`}},v=(e,r)=>{switch(e){case"small":return r.spacing.xs;case"medium":return r.spacing.sm;case"large":return r.spacing.md;default:return r.spacing.sm}},ge=s.Z.div`
  position: relative;
  overflow: auto;
  max-width: 100%;
  ${({$scroll:e})=>(e==null?void 0:e.x)&&"overflow-x: auto;"}
  ${({$scroll:e})=>(e==null?void 0:e.y)&&`
    overflow-y: auto;
    max-height: ${e.y}px;
  `}
`,$e=s.Z.table`
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
`,fe=s.Z.thead`
  background-color: ${({theme:e})=>e.colors.surface};
`,xe=s.Z.tr`
  height: ${({theme:e})=>E("medium",e)};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.hover.text};
  }
  
  ${({className:e})=>e&&`
    &.${e} {
      // \u81EA\u5B9A\u4E49\u6837\u5F0F
    }
  `}
`,be=s.Z.th`
  padding: ${({theme:e,$size:r})=>v(r,e)};
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
`,ye=s.Z.tbody`
  background-color: ${({theme:e})=>e.colors.background};
`,ve=s.Z.tr`
  height: ${({theme:e,$size:r})=>E(r,e)};
  transition: background-color 0.3s;
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.hover.text};
  }
  
  ${({$striped:e,$index:r,theme:o})=>e&&r%2!==0&&`
    background-color: ${o.colors.surface};
  `}
  
  ${({className:e})=>e&&`
    &.${e} {
      // \u81EA\u5B9A\u4E49\u6837\u5F0F
    }
  `}
`,we=s.Z.td`
  padding: ${({theme:e,$size:r})=>v(r,e)};
  text-align: ${({$align:e})=>e||"left"};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  
  ${({$bordered:e,theme:r})=>e&&`
    border-right: 1px solid ${r.colors.border};
    
    &:last-of-type {
      border-right: none;
    }
  `}
`,ze=s.Z.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({theme:e})=>e.spacing.xl} 0;
  color: ${({theme:e})=>e.colors.text.secondary};
`,je=({dataSource:e=[],columns:r=[],bordered:o=!0,size:l="medium",scroll:p,emptyText:h="\u6682\u65E0\u6570\u636E",onRowClick:$,headerRowClassName:b,rowClassName:i,striped:u=!1})=>{let d=(0,F.Fg)(),k=(t,g)=>i?typeof i=="function"?i(t,g):i:"",Z=()=>(0,a.jsx)(fe,{theme:d,children:(0,a.jsx)(xe,{theme:d,className:b,children:r.map(t=>(0,a.jsx)(be,{theme:d,$bordered:o,$size:l,$width:t.width,$align:t.align,children:t.title},t.key))})}),N=(t,g,w)=>{let O=t[g.key];return g.render?g.render(O,t,w):O},n=()=>(0,a.jsx)(ye,{theme:d,children:e.length>0?e.map((t,g)=>(0,a.jsx)(ve,{theme:d,$size:l,$striped:u,$index:g,className:k(t,g),onClick:$?()=>$(t,g):void 0,children:r.map(w=>(0,a.jsx)(we,{theme:d,$bordered:o,$size:l,$align:w.align,children:N(t,w,g)},`${g}-${w.key}`))},g)):(0,a.jsx)("tr",{children:(0,a.jsx)("td",{colSpan:r.length,children:(0,a.jsx)(ze,{theme:d,children:h})})})});return(0,a.jsx)(ge,{theme:d,$scroll:p,children:(0,a.jsxs)($e,{theme:d,$bordered:o,$size:l,children:[Z(),n()]})})},le=(0,x.createContext)(void 0),ke=s.Z.form`
  display: flex;
  flex-direction: ${({$layout:e})=>e==="inline"?"row":"column"};
  gap: ${({theme:e,$layout:r})=>r==="inline"?e.spacing.md:e.spacing.sm};
  flex-wrap: ${({$layout:e})=>e==="inline"?"wrap":"nowrap"};
  width: 100%;
`,ne=(e,r)=>{if(!e||!r)return;let o=r.replace(/\[(\w+)\]/g,".$1").split("."),l=e;for(let p of o){if(!l||typeof l!="object")return;l=l[p]}return l},de=(e,r,o)=>{if(!r)return e;let l=z({},e),p=r.replace(/\[(\w+)\]/g,".$1").split("."),h=l;for(let b=0;b<p.length-1;b++){let i=p[b];if(!h[i]||typeof h[i]!="object"){let u=p[b+1],d=/^\d+$/.test(u);h[i]=d?[]:{}}h=h[i]}let $=p[p.length-1];return h[$]=o,l},Ce=b=>{var i=b,{initialValues:e={},layout:r="vertical",onSubmit:o,onError:l,onChange:p,children:h}=i,$=R(i,["initialValues","layout","onSubmit","onError","onChange","children"]);let u=(0,F.Fg)(),[d,k]=(0,x.useState)({values:z({},e),errors:{},touched:{},rules:{}}),Z=(0,x.useCallback)((c,B)=>{c&&k(m=>{if(m.rules[c])return JSON.stringify(m.rules[c])===JSON.stringify(B||[])?m:_(z({},m),{rules:_(z({},m.rules),{[c]:B||[]})});let T=ne(m.values,c),D=T!==void 0?T:"";return _(z({},m),{values:de(m.values,c,D),errors:_(z({},m.errors),{[c]:[]}),touched:_(z({},m.touched),{[c]:!1}),rules:_(z({},m.rules),{[c]:B||[]})})})},[]),N=(0,x.useCallback)((c,B)=>{c&&k(m=>{let T=de(m.values,c,B);return p&&p(T),_(z({},m),{values:T})})},[p]),n=(0,x.useCallback)((c,B)=>{c&&k(m=>_(z({},m),{errors:_(z({},m.errors),{[c]:B})}))},[]),t=(0,x.useCallback)((c,B)=>{c&&k(m=>_(z({},m),{touched:_(z({},m.touched),{[c]:B})}))},[]),g=(0,x.useCallback)((c,B)=>H(this,null,function*(){if(!c)return[];let m=B!==void 0?B:ne(d.values,c),T=d.rules[c]||[],D=[];for(let M of T){if(M.required&&(m==null||m==="")){D.push(M.message||"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879");continue}if(!(m==null||m==="")){if(M.min!==void 0&&Number(m)<M.min){D.push(M.message||`\u4E0D\u80FD\u5C0F\u4E8E ${M.min}`);continue}if(M.max!==void 0&&Number(m)>M.max){D.push(M.message||`\u4E0D\u80FD\u5927\u4E8E ${M.max}`);continue}if(M.pattern&&!M.pattern.test(String(m))){D.push(M.message||"\u683C\u5F0F\u4E0D\u6B63\u786E");continue}if(M.validator)try{(yield Promise.resolve(M.validator(m,d.values)))||D.push(M.message||"\u9A8C\u8BC1\u5931\u8D25")}catch(ar){D.push(M.message||"\u9A8C\u8BC1\u51FA\u9519")}}}return n(c,D),D}),[d.values,d.rules,n]),w=(0,x.useCallback)(()=>H(this,null,function*(){let c=Object.keys(d.rules).map(m=>g(m)),B=(yield Promise.all(c)).every(m=>m.length===0);return!B&&l&&l(d.errors),B}),[d.rules,d.errors,g,l]),O=(0,x.useCallback)(()=>{k({values:z({},e),errors:{},touched:{},rules:z({},d.rules)})},[e,d.rules]),P=c=>H(this,null,function*(){c.preventDefault(),(yield w())&&o&&o(d.values)}),I={state:d,layout:r,setFieldValue:N,setFieldError:n,setFieldTouched:t,registerField:Z,validateField:g,validateForm:w,resetForm:O};return(0,a.jsx)(le.Provider,{value:I,children:(0,a.jsx)(ke,_(z({onSubmit:P,$layout:r,theme:u},$),{children:h}))})},re=()=>{let e=(0,x.useContext)(le);if(!e)throw new Error("useForm must be used within a Form component");return e},Se=s.Z.div`
  display: flex;
  flex-direction: ${({$layout:e})=>e==="horizontal"?"row":"column"};
  gap: ${({theme:e})=>e.spacing.sm};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  
  ${({$layout:e,theme:r})=>e==="inline"&&`
    margin-bottom: 0;
    margin-right: ${r.spacing.md};
  `}
`,Fe=s.Z.label`
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
`,Ee=s.Z.div`
  color: ${({theme:e})=>e.colors.error};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  margin-top: ${({theme:e})=>e.spacing.xs};
`,Ze=({name:e,label:r,rules:o=[],required:l=!1,children:p})=>{var I;let h=(0,F.Fg)(),$=re(),{layout:b,state:i,setFieldValue:u,setFieldTouched:d,registerField:k,validateField:Z}=$,{values:N,errors:n,touched:t}=i;(0,x.useEffect)(()=>{let c=[...o];l&&!c.some(B=>B.required)&&c.push({required:!0,message:"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879"}),k(e,c)},[e,k,o,l]);let g=c=>H(this,null,function*(){u(e,c),d(e,!0),yield Z(e,c)}),w=()=>H(this,null,function*(){d(e,!0),yield Z(e)}),O=e&&e.includes(".")||e.includes("[")?P(e,N):N[e];function P(c,B){let m=c.replace(/\[(\w+)\]/g,".$1").split("."),T=B;for(let D of m){if(!T||typeof T!="object")return;T=T[D]}return T}return(0,a.jsxs)(Se,{$layout:b,theme:h,children:[r&&(0,a.jsx)(Fe,{$required:l,theme:h,children:r}),(0,a.jsxs)("div",{style:{flex:1},children:[p({value:O,onChange:g,onBlur:w,error:n[e]||[],touched:t[e]||!1,form:$}),t[e]&&((I=n[e])==null?void 0:I.length)>0&&(0,a.jsx)(Ee,{theme:h,children:n[e][0]})]})]})},Be=s.Z.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
`,_e=({name:e,children:r})=>{let o=(0,F.Fg)(),l=re(),{state:p,setFieldValue:h}=l,{values:$}=p,b=(0,x.useCallback)((n,t)=>{if(!n||!t)return;let g=t.replace(/\[(\w+)\]/g,".$1").split("."),w=n;for(let O of g){if(!w||typeof w!="object")return;w=w[O]}return w},[]),i=(0,x.useCallback)(()=>{let n=b($,e);return Array.isArray(n)?n:[]},[e,$,b]),u=(0,x.useCallback)(n=>{h(e,n)},[e,h]),d=(0,x.useCallback)(n=>{let t=i();u([...t,n||{}])},[i,u]),k=(0,x.useCallback)(n=>{let t=i();if(n<0||n>=t.length)return;let g=[...t];g.splice(n,1),u(g)},[i,u]),Z=(0,x.useCallback)((n,t)=>{let g=i();if(n<0||n>=g.length||t<0||t>=g.length||n===t)return;let w=[...g],[O]=w.splice(n,1);w.splice(t,0,O),u(w)},[i,u]),N=i().map((n,t)=>({name:`${e}[${t}]`,key:`${e}-${t}`}));return(0,a.jsx)(Be,{theme:o,children:r(N,{add:d,remove:k,move:Z})})},V=(0,x.createContext)(void 0),J=()=>{let e=(0,x.useContext)(V);if(!e)throw new Error("useMenuContext must be used within a MenuProvider");return e},Me=s.Z.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  font-family: inherit;
  font-size: ${({theme:e})=>e.fontSizes.sm};
  line-height: ${({theme:e})=>e.typography.lineHeight.normal};
  background-color: ${({theme:e})=>e.colors.background};
  
  // 水平布局
  ${({mode:e})=>e==="horizontal"&&`
    display: flex;
    flex-wrap: nowrap;
    border-bottom: 1px solid;
    border-color: inherit;
  `}
  
  // 垂直布局
  ${({mode:e})=>e==="vertical"&&`
    width: 100%;
  `}
`,Ne=({mode:e="vertical",defaultSelectedKey:r,selectedKey:o,defaultOpenKeys:l=[],openKeys:p,onSelect:h,onOpenChange:$,children:b})=>{let[i,u]=(0,x.useState)(r||null),[d,k]=(0,x.useState)(l),Z=o!==void 0,N=p!==void 0,n=Z?o:i,t=N?p:d,g=(0,F.Fg)(),w=(0,x.useCallback)(P=>{Z||u(P),h==null||h(P)},[Z,h]),O=(0,x.useCallback)(P=>{let I=t!=null&&t.includes(P)?t.filter(c=>c!==P):[...t||[],P];N||k(I),$==null||$(I)},[N,t,$]);return(0,a.jsx)(V.Provider,{value:{mode:e,selectedKey:n,openKeys:t||[],onSelect:w,toggleOpen:O},children:(0,a.jsx)(Me,{mode:e,theme:g,role:"menu",children:b})})},Oe=s.Z.li`
  position: relative;
  padding: ${({theme:e})=>`${e.spacing.xs} ${e.spacing.md}`};
  margin: ${({isInSubMenu:e,theme:r})=>e?`${r.spacing.xs} 0`:"0"};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  transition: all 0.3s;
  display: flex;
  align-items: center;
  white-space: nowrap;
  border-radius: ${({theme:e})=>e.radii.xs};
  color: ${({disabled:e,theme:r})=>e?r.colors.text.disabled:r.colors.text.primary};
  background-color: ${({selected:e,theme:r})=>{var o;return e?(o=r.colors.menu)==null?void 0:o.selectedBg:"transparent"}};
  opacity: ${({disabled:e})=>e?.5:1};
  
  // 水平模式
  ${({mode:e})=>e==="horizontal"&&`
    display: inline-flex;
  `}

  // 垂直模式下，子菜单中的项
  ${({isInSubMenu:e,mode:r})=>e&&r==="vertical"&&`
    padding-left: 24px;
  `}

  &:hover {
    background-color: ${({selected:e,disabled:r,theme:o})=>{var l;return r?"transparent":e?(l=o.colors.menu)==null?void 0:l.selectedHoverBg:o.colors.hover.text}};
  }
`,ce=x.forwardRef(({id:e,disabled:r=!1,style:o,className:l,children:p},h)=>{let $=(0,F.Fg)(),{selectedKey:b,onSelect:i,mode:u,isInSubMenu:d=!1}=J(),k=b===e;return(0,a.jsx)(Oe,{ref:h,selected:k,disabled:r,isInSubMenu:d,mode:u,theme:$,onClick:Z=>{if(r){Z.preventDefault();return}i(e)},style:o,className:l,role:"menuitem","aria-disabled":r,"aria-selected":k,children:p})});ce.displayName="MenuItem";var Te=s.Z.li`
  position: relative;
  list-style: none;
`,Ae=s.Z.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>`${e.spacing.xs} ${e.spacing.md}`};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  transition: all 0.3s;
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({disabled:e,theme:r})=>e?r.colors.text.disabled:r.colors.text.primary};
  background-color: ${({open:e,theme:r})=>{var o;return e?(o=r.colors.menu)==null?void 0:o.selectedBg:"transparent"}};
  
  opacity: ${({disabled:e})=>e?.5:1};

  &:hover {
    background-color: ${({open:e,disabled:r,theme:o})=>{var l;return r?"transparent":e?(l=o.colors.menu)==null?void 0:l.selectedHoverBg:o.colors.hover.text}};
  }
`,Pe=s.Z.span`
  display: inline-flex;
  align-items: center;
  margin-left: 8px;
  font-size: 0.75rem;
  transform: ${({open:e,mode:r})=>r==="vertical"?e?"rotate(90deg)":"rotate(0deg)":e?"rotate(180deg)":"rotate(0deg)"};
  transition: transform 0.3s;
`,De=s.Z.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  transition: all 0.3s ease-in-out;
  
  // 垂直模式
  ${({mode:e,open:r})=>e==="vertical"&&`
    max-height: ${r?"1000px":"0"};
    overflow: hidden;
  `}
  
  // 水平模式
  ${({mode:e,open:r,theme:o})=>e==="horizontal"&&`
    position: absolute;
    min-width: 160px;
    left: 0;
    top: 100%;
    background-color: ${o.colors.background};
    box-shadow: ${o.shadows.md};
    border-radius: ${o.radii.sm};
    z-index: 1000;
    visibility: ${r?"visible":"hidden"};
    opacity: ${r?1:0};
    transform: ${r?"translateY(0)":"translateY(-10px)"};
  `}
`,ue=x.forwardRef(({id:e,disabled:r=!1,title:o,style:l,className:p,children:h},$)=>{let b=(0,F.Fg)(),{mode:i,openKeys:u,toggleOpen:d}=J(),k=u.includes(e),[Z,N]=(0,x.useState)(!1),n=i==="horizontal"?Z:k,t=w=>{w.preventDefault(),w.stopPropagation(),!(r||i==="horizontal")&&d(e)},g=_(z({},J()),{isInSubMenu:!0});return(0,a.jsxs)(Te,{ref:$,theme:b,style:l,className:p,role:"none",onMouseEnter:i==="horizontal"?()=>N(!0):void 0,onMouseLeave:i==="horizontal"?()=>N(!1):void 0,children:[(0,a.jsxs)(Ae,{open:n,disabled:r,mode:i,theme:b,onClick:t,role:"menuitem","aria-disabled":r,"aria-expanded":n,children:[o,(0,a.jsx)(Pe,{open:n,mode:i,children:i==="vertical"?"\u203A":"\u25BE"})]}),(0,a.jsx)(De,{open:n,mode:i,theme:b,role:"menu",children:(0,a.jsx)(V.Provider,{value:g,children:h})})]})});ue.displayName="SubMenu";var Ie=(e,r)=>typeof e=="number"?`${e}px`:typeof e=="string"?e==="small"?r.spacing.sm:e==="middle"?r.spacing.md:e==="large"?r.spacing.lg:e:"0",We=e=>typeof e=="boolean"?e?"wrap":"nowrap":e,Ke=s.Z.div`
  display: flex;
  flex-direction: ${({$vertical:e})=>e?"column":"row"};
  justify-content: ${({$justify:e})=>e};
  align-items: ${({$align:e})=>e};
  flex-wrap: ${({$wrap:e})=>We(e)};
  gap: ${({$gap:e,theme:r})=>e?Ie(e,r):"0"};
  ${({$flex:e})=>e!==void 0&&`flex: ${e};`}
`,Le=d=>{var k=d,{vertical:e=!1,justify:r="normal",align:o="normal",wrap:l=!1,gap:p,flex:h,component:$="div",style:b,children:i}=k,u=R(k,["vertical","justify","align","wrap","gap","flex","component","style","children"]);let Z=(0,F.Fg)();return(0,a.jsx)(Ke,_(z({as:$,$vertical:e,$justify:r,$align:o,$wrap:l,$gap:p,$flex:h,theme:Z,style:b},u),{children:i}))},Re=(e,r)=>{switch(e){case"outlined":return r.colors.background;case"borderless":return"transparent";default:return r.colors.background}},He=(e,r)=>{switch(e){case"outlined":return`1px solid ${r.colors.border}`;case"borderless":return"none";default:return`1px solid ${r.colors.border}`}},U=(e,r)=>{switch(e){case"small":return r.spacing.md;case"default":return r.spacing.lg;default:return r.spacing.lg}},Ue=(e,r)=>e?r.shadows.md:"none",Ve=(e,r)=>e?r.shadows.lg:"none",Je=s.Z.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.fontSizes.md};
  background-color: ${({$variant:e,theme:r})=>Re(e,r)};
  border: ${({$variant:e,theme:r})=>He(e,r)};
  border-radius: ${({theme:e})=>e.radii.sm};
  box-shadow: ${({$hoverable:e,theme:r})=>Ue(e,r)};
  transition: all 0.3s;
  
  &:hover {
    box-shadow: ${({$hoverable:e,theme:r})=>Ve(e,r)};
  }
`,qe=s.Z.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({$size:e,theme:r})=>`${U(e,r)} ${U(e,r)} 0`};
  border-bottom: 0;
  min-height: 48px;
`,Ye=s.Z.div`
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.colors.text.primary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  font-size: ${({theme:e,$size:r})=>r==="small"?e.fontSizes.md:e.fontSizes.lg};
`,Ge=s.Z.div`
  margin-left: ${({theme:e})=>e.spacing.md};
  color: ${({theme:e})=>e.colors.text.secondary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.regular};
`,Qe=s.Z.div`
  position: relative;
  margin-top: -1px;
  margin-right: -1px;
  margin-left: -1px;
  overflow: hidden;
  
  & > * {
    display: block;
    width: 100%;
  }
  
  &:first-child {
    border-top-left-radius: ${({theme:e})=>e.radii.sm};
    border-top-right-radius: ${({theme:e})=>e.radii.sm};
  }
`,Xe=s.Z.div`
  padding: ${({$size:e,theme:r})=>U(e,r)};
  flex: 1;
`,er=s.Z.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  padding: ${({$size:e,theme:r})=>`0 ${U(e,r)} ${U(e,r)}`};
`,q=s.Z.div`
  width: ${({width:e})=>e||"100%"};
  height: ${({height:e})=>e||"16px"};
  background: ${({theme:e})=>e.colors.surface};
  border-radius: ${({theme:e})=>e.radii.xs};
  margin-bottom: ${({theme:e})=>e.spacing.sm};
  animation: pulse 1.5s ease-in-out infinite;
  
  @keyframes pulse {
    0% {
      opacity: 0.6;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.6;
    }
  }
`,rr=()=>{let e=(0,F.Fg)();return(0,a.jsxs)("div",{children:[(0,a.jsx)(q,{width:"50%",height:"24px",theme:e}),(0,a.jsx)(q,{theme:e}),(0,a.jsx)(q,{theme:e}),(0,a.jsx)(q,{width:"80%",theme:e})]})},tr=N=>{var n=N,{variant:e="outlined",size:r="default",title:o,extra:l,cover:p,actions:h,hoverable:$=!1,loading:b=!1,classNames:i,styles:u,type:d,children:k}=n,Z=R(n,["variant","size","title","extra","cover","actions","hoverable","loading","classNames","styles","type","children"]);let t=(0,F.Fg)(),g=()=>!o&&!l?null:(0,a.jsxs)(qe,{$size:r,theme:t,className:i==null?void 0:i.head,style:u==null?void 0:u.head,children:[o&&(0,a.jsx)(Ye,{theme:t,$size:r,children:o}),l&&(0,a.jsx)(Ge,{theme:t,children:l})]}),w=()=>p?(0,a.jsx)(Qe,{theme:t,className:i==null?void 0:i.cover,style:u==null?void 0:u.cover,children:p}):null,O=()=>!h||h.length===0?null:(0,a.jsx)(er,{$size:r,theme:t,className:i==null?void 0:i.actions,style:u==null?void 0:u.actions,children:h.map((P,I)=>(0,a.jsx)("div",{children:P},`action-${I}`))});return(0,a.jsxs)(Je,_(z({$variant:e,$size:r,$hoverable:$,theme:t},Z),{children:[g(),w(),(0,a.jsx)(Xe,{$size:r,theme:t,className:i==null?void 0:i.body,style:u==null?void 0:u.body,children:b?(0,a.jsx)(rr,{}):k}),O()]}))}},37503:function(S,C,f){f.d(C,{f6:function(){return X},$_:function(){return Q},Wb:function(){return W},Fg:function(){return ee}});var s=f(63873),F=()=>typeof window<"u",a=(y,j)=>window.getComputedStyle(y).getPropertyValue(j),x=(y,j,E,v)=>{y.addEventListener(j,E,v)},K=(y,j,E,v)=>{y.removeEventListener(j,E,v)},A=(y,j)=>{let E=z({},y);for(let v in j)Object.prototype.hasOwnProperty.call(j,v)&&(j[v]&&typeof j[v]=="object"&&!Array.isArray(j[v])?y[v]?E[v]=A(y[v],j[v]):Object.assign(E,{[v]:j[v]}):Object.assign(E,{[v]:j[v]}));return E},L=y=>Object.entries(y).reduce((j,[E,v])=>(v!=null&&v!==""&&(j[E]=v),j),{}),te=(y,j)=>j.reduce((E,v)=>(Object.prototype.hasOwnProperty.call(y,v)&&(E[v]=y[v]),E),{}),oe=y=>y.charAt(0).toUpperCase()+y.slice(1),ie=y=>y.replace(/([A-Z])/g,"-$1").toLowerCase(),se=y=>y.replace(/-([a-z])/g,(j,E)=>E.toUpperCase()),ae=(y="id")=>`${y}-${Math.random().toString(36).substr(2,9)}`,G=f(97458),W={colors:{primary:"#1976d2",secondary:"#9c27b0",success:"#2e7d32",warning:"#ed6c02",error:"#d32f2f",info:"#0288d1",background:"#ffffff",surface:"#f5f5f5",text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},border:"rgba(0, 0, 0, 0.12)",hover:{primary:"#1565c0",secondary:"#7b1fa2",text:"rgba(25, 118, 210, 0.08)"},disabled:{background:"rgba(0, 0, 0, 0.12)"},menu:{selectedBg:"rgba(25, 118, 210, 0.12)",selectedHoverBg:"rgba(25, 118, 210, 0.18)"}},shadows:{sm:"0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",md:"0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)",lg:"0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1)"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px"},breakpoints:{xs:"0px",sm:"600px",md:"960px",lg:"1280px",xl:"1920px"},fontSizes:{xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.25rem",xl:"1.5rem",xxl:"2rem"},typography:{fontWeight:{regular:400,medium:500,bold:700},lineHeight:{normal:1.5,relaxed:1.75,loose:2},letterSpacing:{normal:"0.01em",wide:"0.02em",wider:"0.03em"}},radii:{xs:"2px",sm:"4px",md:"8px",lg:"16px",xl:"24px",round:"50%"}},Q=_(z({},W),{colors:_(z({},W.colors),{background:"#121212",surface:"#1e1e1e",text:{primary:"rgba(255, 255, 255, 0.87)",secondary:"rgba(255, 255, 255, 0.6)",disabled:"rgba(255, 255, 255, 0.38)"},border:"rgba(255, 255, 255, 0.12)",hover:z({},W.colors.hover),disabled:{background:"rgba(255, 255, 255, 0.12)"},menu:{selectedBg:"rgba(25, 118, 210, 0.24)",selectedHoverBg:"rgba(25, 118, 210, 0.32)"}})}),X=({theme:y,children:j})=>{let E=y?A(W,y):W;return(0,G.jsx)(s.a,{theme:E,children:j})},ee=()=>(0,s.u)()}}]);
}());
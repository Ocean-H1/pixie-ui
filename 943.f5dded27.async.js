!(function(){"use strict";var Te=Object.defineProperty,Ne=Object.defineProperties;var Ie=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var ce=(C,k,h)=>k in C?Te(C,k,{enumerable:!0,configurable:!0,writable:!0,value:h}):C[k]=h,z=(C,k)=>{for(var h in k||(k={}))ue.call(k,h)&&ce(C,h,k[h]);if(V)for(var h of V(k))me.call(k,h)&&ce(C,h,k[h]);return C},_=(C,k)=>Ne(C,Ie(k));var J=(C,k)=>{var h={};for(var s in C)ue.call(C,s)&&k.indexOf(s)<0&&(h[s]=C[s]);if(C!=null&&V)for(var s of V(C))k.indexOf(s)<0&&me.call(C,s)&&(h[s]=C[s]);return h};var R=(C,k,h)=>new Promise((s,B)=>{var u=P=>{try{W(h.next(P))}catch(L){B(L)}},p=P=>{try{W(h.throw(P))}catch(L){B(L)}},W=P=>P.done?s(P.value):Promise.resolve(P.value).then(u,p);W((h=h.apply(C,k)).next())});(self.webpackChunk_pixie_ui_docs=self.webpackChunk_pixie_ui_docs||[]).push([[943],{98943:function(C,k,h){h.r(k),h.d(k,{Button:function(){return se},Form:function(){return ke},FormItem:function(){return Ee},FormList:function(){return Be},Input:function(){return w},Menu:function(){return _e},MenuContext:function(){return H},MenuItem:function(){return ie},SubMenu:function(){return de},Table:function(){return we},ThemeProvider:function(){return B.f6},darkTheme:function(){return B.$_},lightTheme:function(){return B.Wb},useForm:function(){return X},useMenuContext:function(){return U},useTheme:function(){return B.Fg}});var s=h(71566),B=h(37503),u=h(97458),p=h(52983),W=(e,r)=>{switch(e){case"primary":return r.colors.primary;case"secondary":return r.colors.secondary;case"text":return"transparent";default:return r.colors.primary}},P=(e,r)=>{switch(e){case"primary":case"secondary":return r.colors.text.primary;case"text":return r.colors.primary;default:return r.colors.text.primary}},L=e=>{switch(e){case"primary":case"secondary":return"none";case"text":return"none";default:return"none"}},ee=(e,r)=>{switch(e){case"primary":return r.colors.hover.primary;case"secondary":return r.colors.hover.secondary;case"text":return r.colors.hover.text;default:return r.colors.hover.primary}},re=(e,r)=>{switch(e){case"small":return`${r.spacing.xs} ${r.spacing.sm}`;case"medium":return`${r.spacing.xs} ${r.spacing.md}`;case"large":return`${r.spacing.sm} ${r.spacing.lg}`;default:return`${r.spacing.xs} ${r.spacing.md}`}},te=(e,r)=>{switch(e){case"small":return r.fontSizes.xs;case"medium":return r.fontSizes.sm;case"large":return r.fontSizes.md;default:return r.fontSizes.sm}},oe=s.Z.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  outline: 0;
  border: ${({$variant:e})=>L(e)};
  border-radius: ${({theme:e})=>e.radii.sm};
  padding: ${({$size:e,theme:r})=>re(e,r)};
  background-color: ${({$variant:e,theme:r})=>W(e,r)};
  color: ${({$variant:e,theme:r})=>P(e,r)};
  font-family: inherit;
  font-size: ${({$size:e,theme:r})=>te(e,r)};
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
    background-color: ${({$variant:e,theme:r})=>ee(e,r)};
  }
  
  &:disabled {
    color: ${({theme:e})=>e.colors.text.disabled};
    background-color: ${({$variant:e,theme:r})=>e==="text"?"transparent":r.colors.disabled.background};
    cursor: not-allowed;
    pointer-events: none;
  }
`,se=f=>{var x=f,{variant:e="primary",size:r="medium",disabled:t=!1,children:a}=x,$=J(x,["variant","size","disabled","children"]);let y=(0,B.Fg)();return(0,u.jsx)(oe,_(z({$variant:e,$size:r,disabled:t,theme:y},$),{children:a}))},Q=(e,r)=>{switch(e){case"small":return`${r.spacing.xl}`;case"medium":return`${r.spacing.xl}`;case"large":return`${r.spacing.xl}`;default:return`${r.spacing.xl}`}},I=(e,r)=>{switch(e){case"small":return`0 ${r.spacing.sm}`;case"medium":return`0 ${r.spacing.md}`;case"large":return`0 ${r.spacing.lg}`;default:return`0 ${r.spacing.md}`}},Y=(e,r)=>{switch(e){case"small":return r.fontSizes.xs;case"medium":return r.fontSizes.sm;case"large":return r.fontSizes.md;default:return r.fontSizes.sm}},G=s.Z.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,q=s.Z.input`
  box-sizing: border-box;
  width: 100%;
  height: ${({$size:e,theme:r})=>Q(e,r)};
  padding: ${({$size:e,theme:r})=>I(e,r)};
  font-size: ${({$size:e,theme:r})=>Y(e,r)};
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
`,g=s.Z.div`
  margin-top: ${({theme:e})=>e.spacing.xs};
  color: ${({theme:e})=>e.colors.error};
  font-size: ${({theme:e})=>e.fontSizes.xs};
`,w=f=>{var x=f,{size:e="medium",error:r=!1,errorMessage:t,disabled:a=!1}=x,$=J(x,["size","error","errorMessage","disabled"]);let y=(0,B.Fg)();return(0,u.jsxs)(G,{children:[(0,u.jsx)(q,z({$size:e,$error:r,disabled:a,theme:y},$)),r&&t&&(0,u.jsx)(g,{theme:y,children:t})]})},j=(e,r)=>{switch(e){case"small":return`${r.spacing.xl}`;case"medium":return`${r.spacing.xl}`;case"large":return`${r.spacing.xl}`;default:return`${r.spacing.xl}`}},b=(e,r)=>{switch(e){case"small":return r.spacing.xs;case"medium":return r.spacing.sm;case"large":return r.spacing.md;default:return r.spacing.sm}},he=s.Z.div`
  position: relative;
  overflow: auto;
  max-width: 100%;
  ${({$scroll:e})=>(e==null?void 0:e.x)&&"overflow-x: auto;"}
  ${({$scroll:e})=>(e==null?void 0:e.y)&&`
    overflow-y: auto;
    max-height: ${e.y}px;
  `}
`,pe=s.Z.table`
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
`,ge=s.Z.thead`
  background-color: ${({theme:e})=>e.colors.surface};
`,$e=s.Z.tr`
  height: ${({theme:e})=>j("medium",e)};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.hover.text};
  }
  
  ${({className:e})=>e&&`
    &.${e} {
      // \u81EA\u5B9A\u4E49\u6837\u5F0F
    }
  `}
`,fe=s.Z.th`
  padding: ${({theme:e,$size:r})=>b(r,e)};
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
`,be=s.Z.tbody`
  background-color: ${({theme:e})=>e.colors.background};
`,xe=s.Z.tr`
  height: ${({theme:e,$size:r})=>j(r,e)};
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
`,ye=s.Z.td`
  padding: ${({theme:e,$size:r})=>b(r,e)};
  text-align: ${({$align:e})=>e||"left"};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  
  ${({$bordered:e,theme:r})=>e&&`
    border-right: 1px solid ${r.colors.border};
    
    &:last-of-type {
      border-right: none;
    }
  `}
`,ve=s.Z.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({theme:e})=>e.spacing.xl} 0;
  color: ${({theme:e})=>e.colors.text.secondary};
`,we=({dataSource:e=[],columns:r=[],bordered:t=!0,size:a="medium",scroll:$,emptyText:f="\u6682\u65E0\u6570\u636E",onRowClick:x,headerRowClassName:y,rowClassName:d,striped:F=!1})=>{let n=(0,B.Fg)(),E=(o,m)=>d?typeof d=="function"?d(o,m):d:"",Z=()=>(0,u.jsx)(ge,{theme:n,children:(0,u.jsx)($e,{theme:n,className:y,children:r.map(o=>(0,u.jsx)(fe,{theme:n,$bordered:t,$size:a,$width:o.width,$align:o.align,children:o.title},o.key))})}),O=(o,m,v)=>{let D=o[m.key];return m.render?m.render(D,o,v):D},i=()=>(0,u.jsx)(be,{theme:n,children:e.length>0?e.map((o,m)=>(0,u.jsx)(xe,{theme:n,$size:a,$striped:F,$index:m,className:E(o,m),onClick:x?()=>x(o,m):void 0,children:r.map(v=>(0,u.jsx)(ye,{theme:n,$bordered:t,$size:a,$align:v.align,children:O(o,v,m)},`${m}-${v.key}`))},m)):(0,u.jsx)("tr",{children:(0,u.jsx)("td",{colSpan:r.length,children:(0,u.jsx)(ve,{theme:n,children:f})})})});return(0,u.jsx)(he,{theme:n,$scroll:$,children:(0,u.jsxs)(pe,{theme:n,$bordered:t,$size:a,children:[Z(),i()]})})},ae=(0,p.createContext)(void 0),ze=s.Z.form`
  display: flex;
  flex-direction: ${({$layout:e})=>e==="inline"?"row":"column"};
  gap: ${({theme:e,$layout:r})=>r==="inline"?e.spacing.md:e.spacing.sm};
  flex-wrap: ${({$layout:e})=>e==="inline"?"wrap":"nowrap"};
  width: 100%;
`,le=(e,r)=>{if(!e||!r)return;let t=r.replace(/\[(\w+)\]/g,".$1").split("."),a=e;for(let $ of t){if(!a||typeof a!="object")return;a=a[$]}return a},ne=(e,r,t)=>{if(!r)return e;let a=z({},e),$=r.replace(/\[(\w+)\]/g,".$1").split("."),f=a;for(let y=0;y<$.length-1;y++){let d=$[y];if(!f[d]||typeof f[d]!="object"){let F=$[y+1],n=/^\d+$/.test(F);f[d]=n?[]:{}}f=f[d]}let x=$[$.length-1];return f[x]=t,a},ke=y=>{var d=y,{initialValues:e={},layout:r="vertical",onSubmit:t,onError:a,onChange:$,children:f}=d,x=J(d,["initialValues","layout","onSubmit","onError","onChange","children"]);let F=(0,B.Fg)(),[n,E]=(0,p.useState)({values:z({},e),errors:{},touched:{},rules:{}}),Z=(0,p.useCallback)((l,S)=>{l&&E(c=>{if(c.rules[l])return JSON.stringify(c.rules[l])===JSON.stringify(S||[])?c:_(z({},c),{rules:_(z({},c.rules),{[l]:S||[]})});let A=le(c.values,l),T=A!==void 0?A:"";return _(z({},c),{values:ne(c.values,l,T),errors:_(z({},c.errors),{[l]:[]}),touched:_(z({},c.touched),{[l]:!1}),rules:_(z({},c.rules),{[l]:S||[]})})})},[]),O=(0,p.useCallback)((l,S)=>{l&&E(c=>{let A=ne(c.values,l,S);return $&&$(A),_(z({},c),{values:A})})},[$]),i=(0,p.useCallback)((l,S)=>{l&&E(c=>_(z({},c),{errors:_(z({},c.errors),{[l]:S})}))},[]),o=(0,p.useCallback)((l,S)=>{l&&E(c=>_(z({},c),{touched:_(z({},c.touched),{[l]:S})}))},[]),m=(0,p.useCallback)((l,S)=>R(this,null,function*(){if(!l)return[];let c=S!==void 0?S:le(n.values,l),A=n.rules[l]||[],T=[];for(let M of A){if(M.required&&(c==null||c==="")){T.push(M.message||"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879");continue}if(!(c==null||c==="")){if(M.min!==void 0&&Number(c)<M.min){T.push(M.message||`\u4E0D\u80FD\u5C0F\u4E8E ${M.min}`);continue}if(M.max!==void 0&&Number(c)>M.max){T.push(M.message||`\u4E0D\u80FD\u5927\u4E8E ${M.max}`);continue}if(M.pattern&&!M.pattern.test(String(c))){T.push(M.message||"\u683C\u5F0F\u4E0D\u6B63\u786E");continue}if(M.validator)try{(yield Promise.resolve(M.validator(c,n.values)))||T.push(M.message||"\u9A8C\u8BC1\u5931\u8D25")}catch(Ke){T.push(M.message||"\u9A8C\u8BC1\u51FA\u9519")}}}return i(l,T),T}),[n.values,n.rules,i]),v=(0,p.useCallback)(()=>R(this,null,function*(){let l=Object.keys(n.rules).map(c=>m(c)),S=(yield Promise.all(l)).every(c=>c.length===0);return!S&&a&&a(n.errors),S}),[n.rules,n.errors,m,a]),D=(0,p.useCallback)(()=>{E({values:z({},e),errors:{},touched:{},rules:z({},n.rules)})},[e,n.rules]),N=l=>R(this,null,function*(){l.preventDefault(),(yield v())&&t&&t(n.values)}),K={state:n,layout:r,setFieldValue:O,setFieldError:i,setFieldTouched:o,registerField:Z,validateField:m,validateForm:v,resetForm:D};return(0,u.jsx)(ae.Provider,{value:K,children:(0,u.jsx)(ze,_(z({onSubmit:N,$layout:r,theme:F},x),{children:f}))})},X=()=>{let e=(0,p.useContext)(ae);if(!e)throw new Error("useForm must be used within a Form component");return e},Ce=s.Z.div`
  display: flex;
  flex-direction: ${({$layout:e})=>e==="horizontal"?"row":"column"};
  gap: ${({theme:e})=>e.spacing.sm};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  
  ${({$layout:e,theme:r})=>e==="inline"&&`
    margin-bottom: 0;
    margin-right: ${r.spacing.md};
  `}
`,je=s.Z.label`
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
`,Fe=s.Z.div`
  color: ${({theme:e})=>e.colors.error};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  margin-top: ${({theme:e})=>e.spacing.xs};
`,Ee=({name:e,label:r,rules:t=[],required:a=!1,children:$})=>{var K;let f=(0,B.Fg)(),x=X(),{layout:y,state:d,setFieldValue:F,setFieldTouched:n,registerField:E,validateField:Z}=x,{values:O,errors:i,touched:o}=d;(0,p.useEffect)(()=>{let l=[...t];a&&!l.some(S=>S.required)&&l.push({required:!0,message:"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879"}),E(e,l)},[e,E,t,a]);let m=l=>R(this,null,function*(){F(e,l),n(e,!0),yield Z(e,l)}),v=()=>R(this,null,function*(){n(e,!0),yield Z(e)}),D=e&&e.includes(".")||e.includes("[")?N(e,O):O[e];function N(l,S){let c=l.replace(/\[(\w+)\]/g,".$1").split("."),A=S;for(let T of c){if(!A||typeof A!="object")return;A=A[T]}return A}return(0,u.jsxs)(Ce,{$layout:y,theme:f,children:[r&&(0,u.jsx)(je,{$required:a,theme:f,children:r}),(0,u.jsxs)("div",{style:{flex:1},children:[$({value:D,onChange:m,onBlur:v,error:i[e]||[],touched:o[e]||!1,form:x}),o[e]&&((K=i[e])==null?void 0:K.length)>0&&(0,u.jsx)(Fe,{theme:f,children:i[e][0]})]})]})},Se=s.Z.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
`,Be=({name:e,children:r})=>{let t=(0,B.Fg)(),a=X(),{state:$,setFieldValue:f}=a,{values:x}=$,y=(0,p.useCallback)((i,o)=>{if(!i||!o)return;let m=o.replace(/\[(\w+)\]/g,".$1").split("."),v=i;for(let D of m){if(!v||typeof v!="object")return;v=v[D]}return v},[]),d=(0,p.useCallback)(()=>{let i=y(x,e);return Array.isArray(i)?i:[]},[e,x,y]),F=(0,p.useCallback)(i=>{f(e,i)},[e,f]),n=(0,p.useCallback)(i=>{let o=d();F([...o,i||{}])},[d,F]),E=(0,p.useCallback)(i=>{let o=d();if(i<0||i>=o.length)return;let m=[...o];m.splice(i,1),F(m)},[d,F]),Z=(0,p.useCallback)((i,o)=>{let m=d();if(i<0||i>=m.length||o<0||o>=m.length||i===o)return;let v=[...m],[D]=v.splice(i,1);v.splice(o,0,D),F(v)},[d,F]),O=d().map((i,o)=>({name:`${e}[${o}]`,key:`${e}-${o}`}));return(0,u.jsx)(Se,{theme:t,children:r(O,{add:n,remove:E,move:Z})})},H=(0,p.createContext)(void 0),U=()=>{let e=(0,p.useContext)(H);if(!e)throw new Error("useMenuContext must be used within a MenuProvider");return e},Me=s.Z.ul`
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
`,_e=({mode:e="vertical",defaultSelectedKey:r,selectedKey:t,defaultOpenKeys:a=[],openKeys:$,onSelect:f,onOpenChange:x,children:y})=>{let[d,F]=(0,p.useState)(r||null),[n,E]=(0,p.useState)(a),Z=t!==void 0,O=$!==void 0,i=Z?t:d,o=O?$:n,m=(0,B.Fg)(),v=(0,p.useCallback)(N=>{Z||F(N),f==null||f(N)},[Z,f]),D=(0,p.useCallback)(N=>{let K=o!=null&&o.includes(N)?o.filter(l=>l!==N):[...o||[],N];O||E(K),x==null||x(K)},[O,o,x]);return(0,u.jsx)(H.Provider,{value:{mode:e,selectedKey:i,openKeys:o||[],onSelect:v,toggleOpen:D},children:(0,u.jsx)(Me,{mode:e,theme:m,role:"menu",children:y})})},Ze=s.Z.li`
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
  background-color: ${({selected:e,theme:r})=>{var t;return e?(t=r.colors.menu)==null?void 0:t.selectedBg:"transparent"}};
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
    background-color: ${({selected:e,disabled:r,theme:t})=>{var a;return r?"transparent":e?(a=t.colors.menu)==null?void 0:a.selectedHoverBg:t.colors.hover.text}};
  }
`,ie=p.forwardRef(({id:e,disabled:r=!1,style:t,className:a,children:$},f)=>{let x=(0,B.Fg)(),{selectedKey:y,onSelect:d,mode:F,isInSubMenu:n=!1}=U(),E=y===e;return(0,u.jsx)(Ze,{ref:f,selected:E,disabled:r,isInSubMenu:n,mode:F,theme:x,onClick:Z=>{if(r){Z.preventDefault();return}d(e)},style:t,className:a,role:"menuitem","aria-disabled":r,"aria-selected":E,children:$})});ie.displayName="MenuItem";var Oe=s.Z.li`
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
  background-color: ${({open:e,theme:r})=>{var t;return e?(t=r.colors.menu)==null?void 0:t.selectedBg:"transparent"}};
  
  opacity: ${({disabled:e})=>e?.5:1};

  &:hover {
    background-color: ${({open:e,disabled:r,theme:t})=>{var a;return r?"transparent":e?(a=t.colors.menu)==null?void 0:a.selectedHoverBg:t.colors.hover.text}};
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
  ${({mode:e,open:r,theme:t})=>e==="horizontal"&&`
    position: absolute;
    min-width: 160px;
    left: 0;
    top: 100%;
    background-color: ${t.colors.background};
    box-shadow: ${t.shadows.md};
    border-radius: ${t.radii.sm};
    z-index: 1000;
    visibility: ${r?"visible":"hidden"};
    opacity: ${r?1:0};
    transform: ${r?"translateY(0)":"translateY(-10px)"};
  `}
`,de=p.forwardRef(({id:e,disabled:r=!1,title:t,style:a,className:$,children:f},x)=>{let y=(0,B.Fg)(),{mode:d,openKeys:F,toggleOpen:n}=U(),E=F.includes(e),[Z,O]=(0,p.useState)(!1),i=d==="horizontal"?Z:E,o=v=>{v.preventDefault(),v.stopPropagation(),!(r||d==="horizontal")&&n(e)},m=_(z({},U()),{isInSubMenu:!0});return(0,u.jsxs)(Oe,{ref:x,theme:y,style:a,className:$,role:"none",onMouseEnter:d==="horizontal"?()=>O(!0):void 0,onMouseLeave:d==="horizontal"?()=>O(!1):void 0,children:[(0,u.jsxs)(Ae,{open:i,disabled:r,mode:d,theme:y,onClick:o,role:"menuitem","aria-disabled":r,"aria-expanded":i,children:[t,(0,u.jsx)(Pe,{open:i,mode:d,children:d==="vertical"?"\u203A":"\u25BE"})]}),(0,u.jsx)(De,{open:i,mode:d,theme:y,role:"menu",children:(0,u.jsx)(H.Provider,{value:m,children:f})})]})});de.displayName="SubMenu"},37503:function(C,k,h){h.d(k,{f6:function(){return G},$_:function(){return Y},Wb:function(){return I},Fg:function(){return q}});var s=h(63873),B=()=>typeof window<"u",u=(g,w)=>window.getComputedStyle(g).getPropertyValue(w),p=(g,w,j,b)=>{g.addEventListener(w,j,b)},W=(g,w,j,b)=>{g.removeEventListener(w,j,b)},P=(g,w)=>{let j=z({},g);for(let b in w)Object.prototype.hasOwnProperty.call(w,b)&&(w[b]&&typeof w[b]=="object"&&!Array.isArray(w[b])?g[b]?j[b]=P(g[b],w[b]):Object.assign(j,{[b]:w[b]}):Object.assign(j,{[b]:w[b]}));return j},L=g=>Object.entries(g).reduce((w,[j,b])=>(b!=null&&b!==""&&(w[j]=b),w),{}),ee=(g,w)=>w.reduce((j,b)=>(Object.prototype.hasOwnProperty.call(g,b)&&(j[b]=g[b]),j),{}),re=g=>g.charAt(0).toUpperCase()+g.slice(1),te=g=>g.replace(/([A-Z])/g,"-$1").toLowerCase(),oe=g=>g.replace(/-([a-z])/g,(w,j)=>j.toUpperCase()),se=(g="id")=>`${g}-${Math.random().toString(36).substr(2,9)}`,Q=h(97458),I={colors:{primary:"#1976d2",secondary:"#9c27b0",success:"#2e7d32",warning:"#ed6c02",error:"#d32f2f",info:"#0288d1",background:"#ffffff",surface:"#f5f5f5",text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},border:"rgba(0, 0, 0, 0.12)",hover:{primary:"#1565c0",secondary:"#7b1fa2",text:"rgba(25, 118, 210, 0.08)"},disabled:{background:"rgba(0, 0, 0, 0.12)"},menu:{selectedBg:"rgba(25, 118, 210, 0.12)",selectedHoverBg:"rgba(25, 118, 210, 0.18)"}},shadows:{sm:"0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",md:"0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)",lg:"0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1)"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px"},breakpoints:{xs:"0px",sm:"600px",md:"960px",lg:"1280px",xl:"1920px"},fontSizes:{xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.25rem",xl:"1.5rem",xxl:"2rem"},typography:{fontWeight:{regular:400,medium:500,bold:700},lineHeight:{normal:1.5,relaxed:1.75,loose:2},letterSpacing:{normal:"0.01em",wide:"0.02em",wider:"0.03em"}},radii:{xs:"2px",sm:"4px",md:"8px",lg:"16px",xl:"24px",round:"50%"}},Y=_(z({},I),{colors:_(z({},I.colors),{background:"#121212",surface:"#1e1e1e",text:{primary:"rgba(255, 255, 255, 0.87)",secondary:"rgba(255, 255, 255, 0.6)",disabled:"rgba(255, 255, 255, 0.38)"},border:"rgba(255, 255, 255, 0.12)",hover:z({},I.colors.hover),disabled:{background:"rgba(255, 255, 255, 0.12)"},menu:{selectedBg:"rgba(25, 118, 210, 0.24)",selectedHoverBg:"rgba(25, 118, 210, 0.32)"}})}),G=({theme:g,children:w})=>{let j=g?P(I,g):I;return(0,Q.jsx)(s.a,{theme:j,children:w})},q=()=>(0,s.u)()}}]);
}());
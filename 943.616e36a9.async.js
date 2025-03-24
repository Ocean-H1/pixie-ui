!(function(){"use strict";var Fr=Object.defineProperty,Er=Object.defineProperties;var Zr=Object.getOwnPropertyDescriptors;var ee=Object.getOwnPropertySymbols;var ze=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable;var we=(M,E,y)=>E in M?Fr(M,E,{enumerable:!0,configurable:!0,writable:!0,value:y}):M[E]=y,j=(M,E)=>{for(var y in E||(E={}))ze.call(E,y)&&we(M,y,E[y]);if(ee)for(var y of ee(E))je.call(E,y)&&we(M,y,E[y]);return M},D=(M,E)=>Er(M,Zr(E));var J=(M,E)=>{var y={};for(var s in M)ze.call(M,s)&&E.indexOf(s)<0&&(y[s]=M[s]);if(M!=null&&ee)for(var s of ee(M))E.indexOf(s)<0&&je.call(M,s)&&(y[s]=M[s]);return y};var Y=(M,E,y)=>new Promise((s,Z)=>{var o=L=>{try{U(y.next(L))}catch(R){Z(R)}},$=L=>{try{U(y.throw(L))}catch(R){Z(R)}},U=L=>L.done?s(L.value):Promise.resolve(L.value).then(o,$);U((y=y.apply(M,E)).next())});(self.webpackChunk_pixie_ui_docs=self.webpackChunk_pixie_ui_docs||[]).push([[943],{98943:function(M,E,y){y.r(E),y.d(E,{Button:function(){return re},Card:function(){return mr},Flex:function(){return qe},Form:function(){return De},FormItem:function(){return Ie},FormList:function(){return We},Icon:function(){return $e},Input:function(){return N},Menu:function(){return He},MenuContext:function(){return G},MenuItem:function(){return ge},Rate:function(){return yr},SubMenu:function(){return fe},Table:function(){return Oe},ThemeProvider:function(){return Z.f6},darkTheme:function(){return Z.$_},lightTheme:function(){return Z.Wb},useForm:function(){return se},useMenuContext:function(){return Q},useTheme:function(){return Z.Fg}});var s=y(74560),Z=y(37503),o=y(97458),$=y(52983),U=y(91646),L=(e,r)=>{switch(e){case"primary":return r.colors.primary;case"secondary":return r.colors.secondary;case"text":return"transparent";default:return r.colors.primary}},R=(e,r)=>{switch(e){case"primary":case"secondary":return r.colors.text.primary;case"text":return r.colors.primary;default:return r.colors.text.primary}},ne=e=>{switch(e){case"primary":case"secondary":return"none";case"text":return"none";default:return"none"}},ae=(e,r)=>{switch(e){case"primary":return r.colors.hover.primary;case"secondary":return r.colors.hover.secondary;case"text":return r.colors.hover.text;default:return r.colors.hover.primary}},le=(e,r)=>{switch(e){case"small":return`${r.spacing.xs} ${r.spacing.sm}`;case"medium":return`${r.spacing.xs} ${r.spacing.md}`;case"large":return`${r.spacing.sm} ${r.spacing.lg}`;default:return`${r.spacing.xs} ${r.spacing.md}`}},de=(e,r)=>{switch(e){case"small":return r.fontSizes.xs;case"medium":return r.fontSizes.sm;case"large":return r.fontSizes.md;default:return r.fontSizes.sm}},ce=s.Z.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  outline: 0;
  border: ${({$variant:e})=>ne(e)};
  border-radius: ${({theme:e})=>e.radii.sm};
  padding: ${({$size:e,theme:r})=>le(e,r)};
  background-color: ${({$variant:e,theme:r})=>L(e,r)};
  color: ${({$variant:e,theme:r})=>R(e,r)};
  font-family: inherit;
  font-size: ${({$size:e,theme:r})=>de(e,r)};
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
    background-color: ${({$variant:e,theme:r})=>ae(e,r)};
  }
  
  &:disabled {
    color: ${({theme:e})=>e.colors.text.disabled};
    background-color: ${({$variant:e,theme:r})=>e==="text"?"transparent":r.colors.disabled.background};
    cursor: not-allowed;
    pointer-events: none;
  }
`,re=u=>{var x=u,{variant:e="primary",size:r="medium",disabled:i=!1,children:a}=x,p=J(x,["variant","size","disabled","children"]);let h=(0,Z.Fg)();return(0,o.jsx)(ce,D(j({$variant:e,$size:r,disabled:i,theme:h},p),{children:a}))},V=(e,r)=>{switch(e){case"small":return`${r.spacing.xl}`;case"medium":return`${r.spacing.xl}`;case"large":return`${r.spacing.xl}`;default:return`${r.spacing.xl}`}},te=(e,r)=>{switch(e){case"small":return`0 ${r.spacing.sm}`;case"medium":return`0 ${r.spacing.md}`;case"large":return`0 ${r.spacing.lg}`;default:return`0 ${r.spacing.md}`}},oe=(e,r)=>{switch(e){case"small":return r.fontSizes.xs;case"medium":return r.fontSizes.sm;case"large":return r.fontSizes.md;default:return r.fontSizes.sm}},ie=s.Z.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,w=s.Z.input`
  box-sizing: border-box;
  width: 100%;
  height: ${({$size:e,theme:r})=>V(e,r)};
  padding: ${({$size:e,theme:r})=>te(e,r)};
  font-size: ${({$size:e,theme:r})=>oe(e,r)};
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
`,k=s.Z.div`
  margin-top: ${({theme:e})=>e.spacing.xs};
  color: ${({theme:e})=>e.colors.error};
  font-size: ${({theme:e})=>e.fontSizes.xs};
`,N=u=>{var x=u,{size:e="medium",error:r=!1,errorMessage:i,disabled:a=!1}=x,p=J(x,["size","error","errorMessage","disabled"]);let h=(0,Z.Fg)();return(0,o.jsxs)(ie,{children:[(0,o.jsx)(w,j({$size:e,$error:r,disabled:a,theme:h},p)),r&&i&&(0,o.jsx)(k,{theme:h,children:i})]})},z=(e,r)=>{switch(e){case"small":return`${r.spacing.xl}`;case"medium":return`${r.spacing.xl}`;case"large":return`${r.spacing.xl}`;default:return`${r.spacing.xl}`}},ue=(e,r)=>{switch(e){case"small":return r.spacing.xs;case"medium":return r.spacing.sm;case"large":return r.spacing.md;default:return r.spacing.sm}},ke=s.Z.div`
  position: relative;
  overflow: auto;
  max-width: 100%;
  ${({$scroll:e})=>(e==null?void 0:e.x)&&"overflow-x: auto;"}
  ${({$scroll:e})=>(e==null?void 0:e.y)&&`
    overflow-y: auto;
    max-height: ${e.y}px;
  `}
`,Ce=s.Z.table`
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
`,Se=s.Z.thead`
  background-color: ${({theme:e})=>e.colors.surface};
`,Fe=s.Z.tr`
  height: ${({theme:e})=>z("medium",e)};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.hover.text};
  }
  
  ${({className:e})=>e&&`
    &.${e} {
      // \u81EA\u5B9A\u4E49\u6837\u5F0F
    }
  `}
`,Ee=s.Z.th`
  padding: ${({theme:e,$size:r})=>ue(r,e)};
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
`,Ze=s.Z.tbody`
  background-color: ${({theme:e})=>e.colors.background};
`,Me=s.Z.tr`
  height: ${({theme:e,$size:r})=>z(r,e)};
  transition: background-color 0.3s;
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.hover.text};
  }
  
  ${({$striped:e,$index:r,theme:i})=>e&&r%2!==0&&`
    background-color: ${i.colors.surface};
  `}
  
  ${({className:e})=>e&&`
    &.${e} {
      // \u81EA\u5B9A\u4E49\u6837\u5F0F
    }
  `}
`,_e=s.Z.td`
  padding: ${({theme:e,$size:r})=>ue(r,e)};
  text-align: ${({$align:e})=>e||"left"};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  
  ${({$bordered:e,theme:r})=>e&&`
    border-right: 1px solid ${r.colors.border};
    
    &:last-of-type {
      border-right: none;
    }
  `}
`,Be=s.Z.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({theme:e})=>e.spacing.xl} 0;
  color: ${({theme:e})=>e.colors.text.secondary};
`,Oe=({dataSource:e=[],columns:r=[],bordered:i=!0,size:a="medium",scroll:p,emptyText:u="\u6682\u65E0\u6570\u636E",onRowClick:x,headerRowClassName:h,rowClassName:n,striped:m=!1})=>{let l=(0,Z.Fg)(),v=(t,g)=>n?typeof n=="function"?n(t,g):n:"",C=()=>(0,o.jsx)(Se,{theme:l,children:(0,o.jsx)(Fe,{theme:l,className:h,children:r.map(t=>(0,o.jsx)(Ee,{theme:l,$bordered:i,$size:a,$width:t.width,$align:t.align,children:t.title},t.key))})}),S=(t,g,b)=>{let _=t[g.key];return g.render?g.render(_,t,b):_},d=()=>(0,o.jsx)(Ze,{theme:l,children:e.length>0?e.map((t,g)=>(0,o.jsx)(Me,{theme:l,$size:a,$striped:m,$index:g,className:v(t,g),onClick:x?()=>x(t,g):void 0,children:r.map(b=>(0,o.jsx)(_e,{theme:l,$bordered:i,$size:a,$align:b.align,children:S(t,b,g)},`${g}-${b.key}`))},g)):(0,o.jsx)("tr",{children:(0,o.jsx)("td",{colSpan:r.length,children:(0,o.jsx)(Be,{theme:l,children:u})})})});return(0,o.jsx)(ke,{theme:l,$scroll:p,children:(0,o.jsxs)(Ce,{theme:l,$bordered:i,$size:a,children:[C(),d()]})})},me=(0,$.createContext)(void 0),Ne=s.Z.form`
  display: flex;
  flex-direction: ${({$layout:e})=>e==="inline"?"row":"column"};
  gap: ${({theme:e,$layout:r})=>r==="inline"?e.spacing.md:e.spacing.sm};
  flex-wrap: ${({$layout:e})=>e==="inline"?"wrap":"nowrap"};
  width: 100%;
`,he=(e,r)=>{if(!e||!r)return;let i=r.replace(/\[(\w+)\]/g,".$1").split("."),a=e;for(let p of i){if(!a||typeof a!="object")return;a=a[p]}return a},pe=(e,r,i)=>{if(!r)return e;let a=j({},e),p=r.replace(/\[(\w+)\]/g,".$1").split("."),u=a;for(let h=0;h<p.length-1;h++){let n=p[h];if(!u[n]||typeof u[n]!="object"){let m=p[h+1],l=/^\d+$/.test(m);u[n]=l?[]:{}}u=u[n]}let x=p[p.length-1];return u[x]=i,a},De=h=>{var n=h,{initialValues:e={},layout:r="vertical",onSubmit:i,onError:a,onChange:p,children:u}=n,x=J(n,["initialValues","layout","onSubmit","onError","onChange","children"]);let m=(0,Z.Fg)(),[l,v]=(0,$.useState)({values:j({},e),errors:{},touched:{},rules:{}}),C=(0,$.useCallback)((c,F)=>{c&&v(f=>{if(f.rules[c])return JSON.stringify(f.rules[c])===JSON.stringify(F||[])?f:D(j({},f),{rules:D(j({},f.rules),{[c]:F||[]})});let K=he(f.values,c),T=K!==void 0?K:"";return D(j({},f),{values:pe(f.values,c,T),errors:D(j({},f.errors),{[c]:[]}),touched:D(j({},f.touched),{[c]:!1}),rules:D(j({},f.rules),{[c]:F||[]})})})},[]),S=(0,$.useCallback)((c,F)=>{c&&v(f=>{let K=pe(f.values,c,F);return p&&p(K),D(j({},f),{values:K})})},[p]),d=(0,$.useCallback)((c,F)=>{c&&v(f=>D(j({},f),{errors:D(j({},f.errors),{[c]:F})}))},[]),t=(0,$.useCallback)((c,F)=>{c&&v(f=>D(j({},f),{touched:D(j({},f.touched),{[c]:F})}))},[]),g=(0,$.useCallback)((c,F)=>Y(this,null,function*(){if(!c)return[];let f=F!==void 0?F:he(l.values,c),K=l.rules[c]||[],T=[];for(let O of K){if(O.required&&(f==null||f==="")){T.push(O.message||"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879");continue}if(!(f==null||f==="")){if(O.min!==void 0&&Number(f)<O.min){T.push(O.message||`\u4E0D\u80FD\u5C0F\u4E8E ${O.min}`);continue}if(O.max!==void 0&&Number(f)>O.max){T.push(O.message||`\u4E0D\u80FD\u5927\u4E8E ${O.max}`);continue}if(O.pattern&&!O.pattern.test(String(f))){T.push(O.message||"\u683C\u5F0F\u4E0D\u6B63\u786E");continue}if(O.validator)try{(yield Promise.resolve(O.validator(f,l.values)))||T.push(O.message||"\u9A8C\u8BC1\u5931\u8D25")}catch(be){T.push(O.message||"\u9A8C\u8BC1\u51FA\u9519")}}}return d(c,T),T}),[l.values,l.rules,d]),b=(0,$.useCallback)(()=>Y(this,null,function*(){let c=Object.keys(l.rules).map(f=>g(f)),F=(yield Promise.all(c)).every(f=>f.length===0);return!F&&a&&a(l.errors),F}),[l.rules,l.errors,g,a]),_=(0,$.useCallback)(()=>{v({values:j({},e),errors:{},touched:{},rules:j({},l.rules)})},[e,l.rules]),I=c=>Y(this,null,function*(){c.preventDefault(),(yield b())&&i&&i(l.values)}),B={state:l,layout:r,setFieldValue:S,setFieldError:d,setFieldTouched:t,registerField:C,validateField:g,validateForm:b,resetForm:_};return(0,o.jsx)(me.Provider,{value:B,children:(0,o.jsx)(Ne,D(j({onSubmit:I,$layout:r,theme:m},x),{children:u}))})},se=()=>{let e=(0,$.useContext)(me);if(!e)throw new Error("useForm must be used within a Form component");return e},Ae=s.Z.div`
  display: flex;
  flex-direction: ${({$layout:e})=>e==="horizontal"?"row":"column"};
  gap: ${({theme:e})=>e.spacing.sm};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  
  ${({$layout:e,theme:r})=>e==="inline"&&`
    margin-bottom: 0;
    margin-right: ${r.spacing.md};
  `}
`,Pe=s.Z.label`
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
`,Ke=s.Z.div`
  color: ${({theme:e})=>e.colors.error};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  margin-top: ${({theme:e})=>e.spacing.xs};
`,Ie=({name:e,label:r,rules:i=[],required:a=!1,children:p})=>{var B;let u=(0,Z.Fg)(),x=se(),{layout:h,state:n,setFieldValue:m,setFieldTouched:l,registerField:v,validateField:C}=x,{values:S,errors:d,touched:t}=n;(0,$.useEffect)(()=>{let c=[...i];a&&!c.some(F=>F.required)&&c.push({required:!0,message:"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879"}),v(e,c)},[e,v,i,a]);let g=c=>Y(this,null,function*(){m(e,c),l(e,!0),yield C(e,c)}),b=()=>Y(this,null,function*(){l(e,!0),yield C(e)}),_=e&&e.includes(".")||e.includes("[")?I(e,S):S[e];function I(c,F){let f=c.replace(/\[(\w+)\]/g,".$1").split("."),K=F;for(let T of f){if(!K||typeof K!="object")return;K=K[T]}return K}return(0,o.jsxs)(Ae,{$layout:h,theme:u,children:[r&&(0,o.jsx)(Pe,{$required:a,theme:u,children:r}),(0,o.jsxs)("div",{style:{flex:1},children:[p({value:_,onChange:g,onBlur:b,error:d[e]||[],touched:t[e]||!1,form:x}),t[e]&&((B=d[e])==null?void 0:B.length)>0&&(0,o.jsx)(Ke,{theme:u,children:d[e][0]})]})]})},Te=s.Z.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
`,We=({name:e,children:r})=>{let i=(0,Z.Fg)(),a=se(),{state:p,setFieldValue:u}=a,{values:x}=p,h=(0,$.useCallback)((d,t)=>{if(!d||!t)return;let g=t.replace(/\[(\w+)\]/g,".$1").split("."),b=d;for(let _ of g){if(!b||typeof b!="object")return;b=b[_]}return b},[]),n=(0,$.useCallback)(()=>{let d=h(x,e);return Array.isArray(d)?d:[]},[e,x,h]),m=(0,$.useCallback)(d=>{u(e,d)},[e,u]),l=(0,$.useCallback)(d=>{let t=n();m([...t,d||{}])},[n,m]),v=(0,$.useCallback)(d=>{let t=n();if(d<0||d>=t.length)return;let g=[...t];g.splice(d,1),m(g)},[n,m]),C=(0,$.useCallback)((d,t)=>{let g=n();if(d<0||d>=g.length||t<0||t>=g.length||d===t)return;let b=[...g],[_]=b.splice(d,1);b.splice(t,0,_),m(b)},[n,m]),S=n().map((d,t)=>({name:`${e}[${t}]`,key:`${e}-${t}`}));return(0,o.jsx)(Te,{theme:i,children:r(S,{add:l,remove:v,move:C})})},G=(0,$.createContext)(void 0),Q=()=>{let e=(0,$.useContext)(G);if(!e)throw new Error("useMenuContext must be used within a MenuProvider");return e},Le=s.Z.ul`
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
`,He=({mode:e="vertical",defaultSelectedKey:r,selectedKey:i,defaultOpenKeys:a=[],openKeys:p,onSelect:u,onOpenChange:x,children:h})=>{let[n,m]=(0,$.useState)(r||null),[l,v]=(0,$.useState)(a),C=i!==void 0,S=p!==void 0,d=C?i:n,t=S?p:l,g=(0,Z.Fg)(),b=(0,$.useCallback)(I=>{C||m(I),u==null||u(I)},[C,u]),_=(0,$.useCallback)(I=>{let B=t!=null&&t.includes(I)?t.filter(c=>c!==I):[...t||[],I];S||v(B),x==null||x(B)},[S,t,x]);return(0,o.jsx)(G.Provider,{value:{mode:e,selectedKey:d,openKeys:t||[],onSelect:b,toggleOpen:_},children:(0,o.jsx)(Le,{mode:e,theme:g,role:"menu",children:h})})},Ve=s.Z.li`
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
  background-color: ${({selected:e,theme:r})=>{var i;return e?(i=r.colors.menu)==null?void 0:i.selectedBg:"transparent"}};
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
    background-color: ${({selected:e,disabled:r,theme:i})=>{var a;return r?"transparent":e?(a=i.colors.menu)==null?void 0:a.selectedHoverBg:i.colors.hover.text}};
  }
`,ge=$.forwardRef(({id:e,disabled:r=!1,style:i,className:a,children:p},u)=>{let x=(0,Z.Fg)(),{selectedKey:h,onSelect:n,mode:m,isInSubMenu:l=!1}=Q(),v=h===e;return(0,o.jsx)(Ve,{ref:u,selected:v,disabled:r,isInSubMenu:l,mode:m,theme:x,onClick:C=>{if(r){C.preventDefault();return}n(e)},style:i,className:a,role:"menuitem","aria-disabled":r,"aria-selected":v,children:p})});ge.displayName="MenuItem";var Ue=s.Z.li`
  position: relative;
  list-style: none;
`,Re=s.Z.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>`${e.spacing.xs} ${e.spacing.md}`};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  transition: all 0.3s;
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  color: ${({disabled:e,theme:r})=>e?r.colors.text.disabled:r.colors.text.primary};
  background-color: ${({open:e,theme:r})=>{var i;return e?(i=r.colors.menu)==null?void 0:i.selectedBg:"transparent"}};
  
  opacity: ${({disabled:e})=>e?.5:1};

  &:hover {
    background-color: ${({open:e,disabled:r,theme:i})=>{var a;return r?"transparent":e?(a=i.colors.menu)==null?void 0:a.selectedHoverBg:i.colors.hover.text}};
  }
`,Je=s.Z.span`
  display: inline-flex;
  align-items: center;
  margin-left: 8px;
  font-size: 0.75rem;
  transform: ${({open:e,mode:r})=>r==="vertical"?e?"rotate(90deg)":"rotate(0deg)":e?"rotate(180deg)":"rotate(0deg)"};
  transition: transform 0.3s;
`,Ye=s.Z.ul`
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
  ${({mode:e,open:r,theme:i})=>e==="horizontal"&&`
    position: absolute;
    min-width: 160px;
    left: 0;
    top: 100%;
    background-color: ${i.colors.background};
    box-shadow: ${i.shadows.md};
    border-radius: ${i.radii.sm};
    z-index: 1000;
    visibility: ${r?"visible":"hidden"};
    opacity: ${r?1:0};
    transform: ${r?"translateY(0)":"translateY(-10px)"};
  `}
`,fe=$.forwardRef(({id:e,disabled:r=!1,title:i,style:a,className:p,children:u},x)=>{let h=(0,Z.Fg)(),{mode:n,openKeys:m,toggleOpen:l}=Q(),v=m.includes(e),[C,S]=(0,$.useState)(!1),d=n==="horizontal"?C:v,t=b=>{b.preventDefault(),b.stopPropagation(),!(r||n==="horizontal")&&l(e)},g=D(j({},Q()),{isInSubMenu:!0});return(0,o.jsxs)(Ue,{ref:x,theme:h,style:a,className:p,role:"none",onMouseEnter:n==="horizontal"?()=>S(!0):void 0,onMouseLeave:n==="horizontal"?()=>S(!1):void 0,children:[(0,o.jsxs)(Re,{open:d,disabled:r,mode:n,theme:h,onClick:t,role:"menuitem","aria-disabled":r,"aria-expanded":d,children:[i,(0,o.jsx)(Je,{open:d,mode:n,children:n==="vertical"?"\u203A":"\u25BE"})]}),(0,o.jsx)(Ye,{open:d,mode:n,theme:h,role:"menu",children:(0,o.jsx)(G.Provider,{value:g,children:u})})]})});fe.displayName="SubMenu";var Xe=(e,r)=>typeof e=="number"?`${e}px`:typeof e=="string"?e==="small"?r.spacing.sm:e==="middle"?r.spacing.md:e==="large"?r.spacing.lg:e:"0",Ge=e=>typeof e=="boolean"?e?"wrap":"nowrap":e,Qe=s.Z.div`
  display: flex;
  flex-direction: ${({$vertical:e})=>e?"column":"row"};
  justify-content: ${({$justify:e})=>e};
  align-items: ${({$align:e})=>e};
  flex-wrap: ${({$wrap:e})=>Ge(e)};
  gap: ${({$gap:e,theme:r})=>e?Xe(e,r):"0"};
  ${({$flex:e})=>e!==void 0&&`flex: ${e};`}
`,qe=l=>{var v=l,{vertical:e=!1,justify:r="normal",align:i="normal",wrap:a=!1,gap:p,flex:u,component:x="div",style:h,children:n}=v,m=J(v,["vertical","justify","align","wrap","gap","flex","component","style","children"]);let C=(0,Z.Fg)();return(0,o.jsx)(Qe,D(j({as:x,$vertical:e,$justify:r,$align:i,$wrap:a,$gap:p,$flex:u,theme:C,style:h},m),{children:n}))},er=(e,r)=>{switch(e){case"outlined":return r.colors.background;case"borderless":return"transparent";default:return r.colors.background}},rr=(e,r)=>{switch(e){case"outlined":return`1px solid ${r.colors.border}`;case"borderless":return"none";default:return`1px solid ${r.colors.border}`}},X=(e,r)=>{switch(e){case"small":return r.spacing.md;case"default":return r.spacing.lg;default:return r.spacing.lg}},tr=(e,r)=>e?r.shadows.md:"none",or=(e,r)=>e?r.shadows.lg:"none",ir=s.Z.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.fontSizes.md};
  background-color: ${({$variant:e,theme:r})=>er(e,r)};
  border: ${({$variant:e,theme:r})=>rr(e,r)};
  border-radius: ${({theme:e})=>e.radii.sm};
  box-shadow: ${({$hoverable:e,theme:r})=>tr(e,r)};
  transition: all 0.3s;
  
  &:hover {
    box-shadow: ${({$hoverable:e,theme:r})=>or(e,r)};
  }
`,sr=s.Z.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({$size:e,theme:r})=>`${X(e,r)} ${X(e,r)} 0`};
  border-bottom: 0;
  min-height: 48px;
`,nr=s.Z.div`
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.colors.text.primary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  font-size: ${({theme:e,$size:r})=>r==="small"?e.fontSizes.md:e.fontSizes.lg};
`,ar=s.Z.div`
  margin-left: ${({theme:e})=>e.spacing.md};
  color: ${({theme:e})=>e.colors.text.secondary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.regular};
`,lr=s.Z.div`
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
`,dr=s.Z.div`
  padding: ${({$size:e,theme:r})=>X(e,r)};
  flex: 1;
`,cr=s.Z.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  padding: ${({$size:e,theme:r})=>`0 ${X(e,r)} ${X(e,r)}`};
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
`,ur=()=>{let e=(0,Z.Fg)();return(0,o.jsxs)("div",{children:[(0,o.jsx)(q,{width:"50%",height:"24px",theme:e}),(0,o.jsx)(q,{theme:e}),(0,o.jsx)(q,{theme:e}),(0,o.jsx)(q,{width:"80%",theme:e})]})},mr=S=>{var d=S,{variant:e="outlined",size:r="default",title:i,extra:a,cover:p,actions:u,hoverable:x=!1,loading:h=!1,classNames:n,styles:m,type:l,children:v}=d,C=J(d,["variant","size","title","extra","cover","actions","hoverable","loading","classNames","styles","type","children"]);let t=(0,Z.Fg)(),g=()=>!i&&!a?null:(0,o.jsxs)(sr,{$size:r,theme:t,className:n==null?void 0:n.head,style:m==null?void 0:m.head,children:[i&&(0,o.jsx)(nr,{theme:t,$size:r,children:i}),a&&(0,o.jsx)(ar,{theme:t,children:a})]}),b=()=>p?(0,o.jsx)(lr,{theme:t,className:n==null?void 0:n.cover,style:m==null?void 0:m.cover,children:p}):null,_=()=>!u||u.length===0?null:(0,o.jsx)(cr,{$size:r,theme:t,className:n==null?void 0:n.actions,style:m==null?void 0:m.actions,children:u.map((I,B)=>(0,o.jsx)("div",{children:I},`action-${B}`))});return(0,o.jsxs)(ir,D(j({$variant:e,$size:r,$hoverable:x,theme:t},C),{children:[g(),b(),(0,o.jsx)(dr,{$size:r,theme:t,className:n==null?void 0:n.body,style:m==null?void 0:m.body,children:h?(0,o.jsx)(ur,{}):v}),_()]}))},hr=(e,r)=>{if(typeof e=="number")return e;switch(e){case"small":return r.fontSizes.sm;case"large":return r.fontSizes.lg;case"medium":default:return r.fontSizes.md}},pr=s.Z.div`
  display: ${({$inline:e})=>e?"inline-flex":"flex"};
  align-items: center;
  justify-content: center;
  vertical-align: ${({$inline:e})=>e?"-0.125em":"middle"};
  font-size: ${({$size:e,theme:r})=>hr(e,r)}px;
  color: ${({$color:e})=>e||"inherit"};
  line-height: 1;
  cursor: ${({onClick:e})=>e?"pointer":"inherit"};
`,$e=({icon:e,size:r="medium",color:i,rotate:a,horizontalFlip:p=!1,verticalFlip:u=!1,className:x,style:h,inline:n=!1,onClick:m})=>{let l=(0,Z.Fg)();return(0,o.jsx)(pr,{$size:r,$color:i,$inline:n,className:x,style:h,onClick:m,theme:l,children:(0,o.jsx)(U.JO,{icon:e,rotate:a,hFlip:p,vFlip:u,style:{width:"1em",height:"1em"}})})},gr=s.Z.div`
  display: inline-flex;
  align-items: center;
  outline: 0;
  margin: 0;
  padding: 0;
  color: ${({theme:e})=>e.colors.gold};
  font-size: ${({theme:e})=>e.fontSizes.lg}px;
  line-height: 1;
  list-style: none;
  opacity: ${({disabled:e})=>e?.5:1};
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  transition: opacity 0.3s;
`,xe=s.Z.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: inherit;
  transition: transform 0.15s ease-in-out;
  
  &:hover {
    transform: scale(1.1);
  }
`,fr=s.Z.div`
  position: relative;
  display: inline-block;
  margin-right: 8px;
  height: 24px;
  width: 24px;
`,$r=s.Z.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 50%;
  height: 100%;
  overflow: hidden;
  opacity: ${({active:e})=>e?1:0};
  cursor: pointer;
  z-index: 2;
  
  &:hover {
    opacity: 1;
  }

  & > div {
    position: absolute;
    left: 0;
    top: 0;
    width: 200%;
    height: 100%;
  }
`,xr=s.Z.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 1;
`,br=s.Z.div`
  position: absolute;
  left: 50%;
  top: -30px;
  transform: translateX(-50%);
  padding: ${({theme:e})=>`${e.spacing.xs}px ${e.spacing.sm}px`};
  background-color: ${({theme:e})=>e.colors.surface};
  color: ${({theme:e})=>e.colors.text.primary};
  border-radius: ${({theme:e})=>e.radii.sm};
  font-size: ${({theme:e})=>e.fontSizes.xs}px;
  white-space: nowrap;
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  opacity: ${({visible:e})=>e?1:0};
  transition: all 0.3s;
  pointer-events: none;
  
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -4px;
    transform: translateX(-50%) rotate(45deg);
    width: 8px;
    height: 8px;
    background-color: ${({theme:e})=>e.colors.surface};
  }
`,yr=({allowClear:e=!0,allowHalf:r=!1,autoFocus:i=!1,character:a,className:p,count:u=5,defaultValue:x=0,disabled:h=!1,keyboard:n=!0,style:m,tooltips:l,value:v,onBlur:C,onChange:S,onFocus:d,onHoverChange:t,onKeyDown:g})=>{let b=(0,Z.Fg)(),[_,I]=(0,$.useState)(0),[B,c]=(0,$.useState)(v!==void 0?v:x),F=(0,$.useRef)(null);(0,$.useEffect)(()=>{v!==void 0&&c(v)},[v]),(0,$.useEffect)(()=>{i&&F.current&&F.current.focus()},[i]);let f=(A,P)=>P?A+.5:A+1,K=A=>{if(h)return;let P=A;e&&B===A&&(P=0),c(P),S==null||S(P)},T=A=>{h||(I(A),t==null||t(A))},O=()=>{I(0),t==null||t(0)},be=()=>{d==null||d()},vr=()=>{C==null||C()},wr=A=>{if(!n||h)return;let{keyCode:P}=A,W=B,H=r?.5:1;P===37?(W=Math.max(0,B-H),A.preventDefault()):P===39?(W=Math.min(u,B+H),A.preventDefault()):P===13&&A.preventDefault(),W!==B&&(c(W),S==null||S(W)),g==null||g(A)},ye=(A,P=!1)=>{let W=f(A,P),H=(_||B)>=W;return typeof a=="function"?a({index:A,value:B,hoverValue:_,allowClear:e,allowHalf:r,count:u,disabled:h}):$.isValidElement(a)?$.cloneElement(a):(0,o.jsx)($e,{icon:"material-symbols:star",color:H?b.colors.gold:b.colors.disabled.foreground,size:24})};return(0,o.jsx)(gr,{theme:b,disabled:h,className:p,style:m,ref:F,tabIndex:h?-1:0,onFocus:be,onBlur:vr,onKeyDown:wr,children:Array.from({length:u}).map((A,P)=>{let W=P+1,H=P+.5,zr=B===H,jr=B>=W,kr=_===H,Cr=_>=W,Sr=r&&(zr||kr)&&!jr&&!Cr,ve=l&&l[P];return(0,o.jsxs)(fr,{children:[ve&&(0,o.jsx)(br,{theme:b,visible:_===W||_===0&&B===W,children:ve}),r&&(0,o.jsx)($r,{active:Sr,onClick:()=>K(H),onMouseOver:()=>T(H),onMouseLeave:O,children:(0,o.jsx)(xe,{theme:b,children:ye(P,!0)})}),(0,o.jsx)(xr,{onClick:()=>K(W),onMouseOver:()=>T(W),onMouseLeave:O,children:(0,o.jsx)(xe,{theme:b,children:ye(P)})})]},P)})})}},37503:function(M,E,y){y.d(E,{f6:function(){return oe},$_:function(){return te},Wb:function(){return V},Fg:function(){return ie}});var s=y(63873),Z=()=>typeof window<"u",o=(w,k)=>window.getComputedStyle(w).getPropertyValue(k),$=(w,k,N,z)=>{w.addEventListener(k,N,z)},U=(w,k,N,z)=>{w.removeEventListener(k,N,z)},L=(w,k)=>{let N=j({},w);for(let z in k)Object.prototype.hasOwnProperty.call(k,z)&&(k[z]&&typeof k[z]=="object"&&!Array.isArray(k[z])?w[z]?N[z]=L(w[z],k[z]):Object.assign(N,{[z]:k[z]}):Object.assign(N,{[z]:k[z]}));return N},R=w=>Object.entries(w).reduce((k,[N,z])=>(z!=null&&z!==""&&(k[N]=z),k),{}),ne=(w,k)=>k.reduce((N,z)=>(Object.prototype.hasOwnProperty.call(w,z)&&(N[z]=w[z]),N),{}),ae=w=>w.charAt(0).toUpperCase()+w.slice(1),le=w=>w.replace(/([A-Z])/g,"-$1").toLowerCase(),de=w=>w.replace(/-([a-z])/g,(k,N)=>N.toUpperCase()),ce=(w="id")=>`${w}-${Math.random().toString(36).substr(2,9)}`,re=y(97458),V={colors:{primary:"#1976d2",secondary:"#9c27b0",success:"#2e7d32",warning:"#ed6c02",error:"#d32f2f",info:"#0288d1",gold:"#fadb14",background:"#ffffff",surface:"#f5f5f5",text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},border:"rgba(0, 0, 0, 0.12)",hover:{primary:"#1565c0",secondary:"#7b1fa2",text:"rgba(25, 118, 210, 0.08)"},disabled:{background:"rgba(0, 0, 0, 0.12)",foreground:"rgba(0, 0, 0, 0.26)"},menu:{selectedBg:"rgba(25, 118, 210, 0.12)",selectedHoverBg:"rgba(25, 118, 210, 0.18)"}},shadows:{sm:"0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",md:"0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)",lg:"0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1)"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px"},breakpoints:{xs:"0px",sm:"600px",md:"960px",lg:"1280px",xl:"1920px"},fontSizes:{xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.25rem",xl:"1.5rem",xxl:"2rem"},typography:{fontWeight:{regular:400,medium:500,bold:700},lineHeight:{normal:1.5,relaxed:1.75,loose:2},letterSpacing:{normal:"0.01em",wide:"0.02em",wider:"0.03em"}},radii:{xs:"2px",sm:"4px",md:"8px",lg:"16px",xl:"24px",round:"50%"}},te=D(j({},V),{colors:D(j({},V.colors),{gold:"#fadb14",background:"#121212",surface:"#1e1e1e",text:{primary:"rgba(255, 255, 255, 0.87)",secondary:"rgba(255, 255, 255, 0.6)",disabled:"rgba(255, 255, 255, 0.38)"},border:"rgba(255, 255, 255, 0.12)",hover:j({},V.colors.hover),disabled:{background:"rgba(255, 255, 255, 0.12)",foreground:"rgba(255, 255, 255, 0.3)"},menu:{selectedBg:"rgba(25, 118, 210, 0.24)",selectedHoverBg:"rgba(25, 118, 210, 0.32)"}})}),oe=({theme:w,children:k})=>{let N=w?L(V,w):V;return(0,re.jsx)(s.a,{theme:N,children:k})},ie=()=>(0,s.u)()}}]);
}());
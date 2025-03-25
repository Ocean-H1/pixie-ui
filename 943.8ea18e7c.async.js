!(function(){"use strict";var Nt=Object.defineProperty,Jt=Object.defineProperties;var Qt=Object.getOwnPropertyDescriptors;var Me=Object.getOwnPropertySymbols;var hr=Object.prototype.hasOwnProperty,pr=Object.prototype.propertyIsEnumerable;var mr=(T,I,S)=>I in T?Nt(T,I,{enumerable:!0,configurable:!0,writable:!0,value:S}):T[I]=S,B=(T,I)=>{for(var S in I||(I={}))hr.call(I,S)&&mr(T,S,I[S]);if(Me)for(var S of Me(I))pr.call(I,S)&&mr(T,S,I[S]);return T},K=(T,I)=>Jt(T,Qt(I));var ue=(T,I)=>{var S={};for(var a in T)hr.call(T,a)&&I.indexOf(a)<0&&(S[a]=T[a]);if(T!=null&&Me)for(var a of Me(T))I.indexOf(a)<0&&pr.call(T,a)&&(S[a]=T[a]);return S};var be=(T,I,S)=>new Promise((a,P)=>{var o=U=>{try{me(S.next(U))}catch(he){P(he)}},s=U=>{try{me(S.throw(U))}catch(he){P(he)}},me=U=>U.done?a(U.value):Promise.resolve(U.value).then(o,s);me((S=S.apply(T,I)).next())});(self.webpackChunk_pixie_ui_docs=self.webpackChunk_pixie_ui_docs||[]).push([[943],{98943:function(T,I,S){S.r(I),S.d(I,{Button:function(){return De},Card:function(){return tt},Flex:function(){return Hr},Form:function(){return Cr},FormItem:function(){return Er},FormList:function(){return Br},Icon:function(){return pe},Input:function(){return N},Menu:function(){return Dr},MenuContext:function(){return we},MenuItem:function(){return tr},Rate:function(){return ct},Select:function(){return dr},SubMenu:function(){return or},Table:function(){return zr},ThemeProvider:function(){return P.f6},darkTheme:function(){return P.$_},lightTheme:function(){return P.Wb},useForm:function(){return Re},useMenuContext:function(){return je},useTheme:function(){return P.Fg}});var a=S(74560),P=S(37503),o=S(97458),s=S(52983),me=S(91646),U=(e,r)=>{switch(e){case"primary":return r.colors.primary;case"secondary":return r.colors.secondary;case"text":return"transparent";default:return r.colors.primary}},he=(e,r)=>{switch(e){case"primary":case"secondary":return r.colors.text.primary;case"text":return r.colors.primary;default:return r.colors.text.primary}},Je=e=>{switch(e){case"primary":case"secondary":return"none";case"text":return"none";default:return"none"}},Qe=(e,r)=>{switch(e){case"primary":return r.colors.hover.primary;case"secondary":return r.colors.hover.secondary;case"text":return r.colors.hover.text;default:return r.colors.hover.primary}},Ge=(e,r)=>{switch(e){case"small":return`${r.spacing.xs} ${r.spacing.sm}`;case"medium":return`${r.spacing.xs} ${r.spacing.md}`;case"large":return`${r.spacing.sm} ${r.spacing.lg}`;default:return`${r.spacing.xs} ${r.spacing.md}`}},Ye=(e,r)=>{switch(e){case"small":return r.fontSizes.xs;case"medium":return r.fontSizes.sm;case"large":return r.fontSizes.md;default:return r.fontSizes.sm}},Xe=a.Z.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  outline: 0;
  border: ${({$variant:e})=>Je(e)};
  border-radius: ${({theme:e})=>e.radii.sm};
  padding: ${({$size:e,theme:r})=>Ge(e,r)};
  background-color: ${({$variant:e,theme:r})=>U(e,r)};
  color: ${({$variant:e,theme:r})=>he(e,r)};
  font-family: inherit;
  font-size: ${({$size:e,theme:r})=>Ye(e,r)};
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
    background-color: ${({$variant:e,theme:r})=>Qe(e,r)};
  }
  
  &:disabled {
    color: ${({theme:e})=>e.colors.text.disabled};
    background-color: ${({$variant:e,theme:r})=>e==="text"?"transparent":r.colors.disabled.background};
    cursor: not-allowed;
    pointer-events: none;
  }
`,De=d=>{var $=d,{variant:e="primary",size:r="medium",disabled:t=!1,children:l}=$,p=ue($,["variant","size","disabled","children"]);let g=(0,P.Fg)();return(0,o.jsx)(Xe,K(B({$variant:e,$size:r,disabled:t,theme:g},p),{children:l}))},te=(e,r)=>{switch(e){case"small":return`${r.spacing.xl}`;case"medium":return`${r.spacing.xl}`;case"large":return`${r.spacing.xl}`;default:return`${r.spacing.xl}`}},Le=(e,r)=>{switch(e){case"small":return`0 ${r.spacing.sm}`;case"medium":return`0 ${r.spacing.md}`;case"large":return`0 ${r.spacing.lg}`;default:return`0 ${r.spacing.md}`}},Pe=(e,r)=>{switch(e){case"small":return r.fontSizes.xs;case"medium":return r.fontSizes.sm;case"large":return r.fontSizes.md;default:return r.fontSizes.sm}},Oe=a.Z.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Z=a.Z.input`
  box-sizing: border-box;
  width: 100%;
  height: ${({$size:e,theme:r})=>te(e,r)};
  padding: ${({$size:e,theme:r})=>Le(e,r)};
  font-size: ${({$size:e,theme:r})=>Pe(e,r)};
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
`,_=a.Z.div`
  margin-top: ${({theme:e})=>e.spacing.xs};
  color: ${({theme:e})=>e.colors.error};
  font-size: ${({theme:e})=>e.fontSizes.xs};
`,N=d=>{var $=d,{size:e="medium",error:r=!1,errorMessage:t,disabled:l=!1}=$,p=ue($,["size","error","errorMessage","disabled"]);let g=(0,P.Fg)();return(0,o.jsxs)(Oe,{children:[(0,o.jsx)(Z,B({$size:e,$error:r,disabled:l,theme:g},p)),r&&t&&(0,o.jsx)(_,{theme:g,children:t})]})},M=(e,r)=>{switch(e){case"small":return`${r.spacing.xl}`;case"medium":return`${r.spacing.xl}`;case"large":return`${r.spacing.xl}`;default:return`${r.spacing.xl}`}},qe=(e,r)=>{switch(e){case"small":return r.spacing.xs;case"medium":return r.spacing.sm;case"large":return r.spacing.md;default:return r.spacing.sm}},gr=a.Z.div`
  position: relative;
  overflow: auto;
  max-width: 100%;
  ${({$scroll:e})=>(e==null?void 0:e.x)&&"overflow-x: auto;"}
  ${({$scroll:e})=>(e==null?void 0:e.y)&&`
    overflow-y: auto;
    max-height: ${e.y}px;
  `}
`,fr=a.Z.table`
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
`,$r=a.Z.thead`
  background-color: ${({theme:e})=>e.colors.surface};
`,xr=a.Z.tr`
  height: ${({theme:e})=>M("medium",e)};
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.hover.text};
  }
  
  ${({className:e})=>e&&`
    &.${e} {
      // \u81EA\u5B9A\u4E49\u6837\u5F0F
    }
  `}
`,br=a.Z.th`
  padding: ${({theme:e,$size:r})=>qe(r,e)};
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
`,yr=a.Z.tbody`
  background-color: ${({theme:e})=>e.colors.background};
`,vr=a.Z.tr`
  height: ${({theme:e,$size:r})=>M(r,e)};
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
`,wr=a.Z.td`
  padding: ${({theme:e,$size:r})=>qe(r,e)};
  text-align: ${({$align:e})=>e||"left"};
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  
  ${({$bordered:e,theme:r})=>e&&`
    border-right: 1px solid ${r.colors.border};
    
    &:last-of-type {
      border-right: none;
    }
  `}
`,jr=a.Z.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({theme:e})=>e.spacing.xl} 0;
  color: ${({theme:e})=>e.colors.text.secondary};
`,zr=({dataSource:e=[],columns:r=[],bordered:t=!0,size:l="medium",scroll:p,emptyText:d="\u6682\u65E0\u6570\u636E",onRowClick:$,headerRowClassName:g,rowClassName:n,striped:u=!1})=>{let c=(0,P.Fg)(),v=(i,y)=>n?typeof n=="function"?n(i,y):n:"",z=()=>(0,o.jsx)($r,{theme:c,children:(0,o.jsx)(xr,{theme:c,className:g,children:r.map(i=>(0,o.jsx)(br,{theme:c,$bordered:t,$size:l,$width:i.width,$align:i.align,children:i.title},i.key))})}),k=(i,y,w)=>{let C=i[y.key];return y.render?y.render(C,i,w):C},f=()=>(0,o.jsx)(yr,{theme:c,children:e.length>0?e.map((i,y)=>(0,o.jsx)(vr,{theme:c,$size:l,$striped:u,$index:y,className:v(i,y),onClick:$?()=>$(i,y):void 0,children:r.map(w=>(0,o.jsx)(wr,{theme:c,$bordered:t,$size:l,$align:w.align,children:k(i,w,y)},`${y}-${w.key}`))},y)):(0,o.jsx)("tr",{children:(0,o.jsx)("td",{colSpan:r.length,children:(0,o.jsx)(jr,{theme:c,children:d})})})});return(0,o.jsx)(gr,{theme:c,$scroll:p,children:(0,o.jsxs)(fr,{theme:c,$bordered:t,$size:l,children:[z(),f()]})})},Ue=(0,s.createContext)(void 0),kr=a.Z.form`
  display: flex;
  flex-direction: ${({$layout:e})=>e==="inline"?"row":"column"};
  gap: ${({theme:e,$layout:r})=>r==="inline"?e.spacing.md:e.spacing.sm};
  flex-wrap: ${({$layout:e})=>e==="inline"?"wrap":"nowrap"};
  width: 100%;
`,er=(e,r)=>{if(!e||!r)return;let t=r.replace(/\[(\w+)\]/g,".$1").split("."),l=e;for(let p of t){if(!l||typeof l!="object")return;l=l[p]}return l},rr=(e,r,t)=>{if(!r)return e;let l=B({},e),p=r.replace(/\[(\w+)\]/g,".$1").split("."),d=l;for(let g=0;g<p.length-1;g++){let n=p[g];if(!d[n]||typeof d[n]!="object"){let u=p[g+1],c=/^\d+$/.test(u);d[n]=c?[]:{}}d=d[n]}let $=p[p.length-1];return d[$]=t,l},Cr=g=>{var n=g,{initialValues:e={},layout:r="vertical",onSubmit:t,onError:l,onChange:p,children:d}=n,$=ue(n,["initialValues","layout","onSubmit","onError","onChange","children"]);let u=(0,P.Fg)(),[c,v]=(0,s.useState)({values:B({},e),errors:{},touched:{},rules:{}}),z=(0,s.useCallback)((x,E)=>{x&&v(j=>{if(j.rules[x])return JSON.stringify(j.rules[x])===JSON.stringify(E||[])?j:K(B({},j),{rules:K(B({},j.rules),{[x]:E||[]})});let b=er(j.values,x),O=b!==void 0?b:"";return K(B({},j),{values:rr(j.values,x,O),errors:K(B({},j.errors),{[x]:[]}),touched:K(B({},j.touched),{[x]:!1}),rules:K(B({},j.rules),{[x]:E||[]})})})},[]),k=(0,s.useCallback)((x,E)=>{x&&v(j=>{let b=rr(j.values,x,E);return p&&p(b),K(B({},j),{values:b})})},[p]),f=(0,s.useCallback)((x,E)=>{x&&v(j=>K(B({},j),{errors:K(B({},j.errors),{[x]:E})}))},[]),i=(0,s.useCallback)((x,E)=>{x&&v(j=>K(B({},j),{touched:K(B({},j.touched),{[x]:E})}))},[]),y=(0,s.useCallback)((x,E)=>be(this,null,function*(){if(!x)return[];let j=E!==void 0?E:er(c.values,x),b=c.rules[x]||[],O=[];for(let A of b){if(A.required&&(j==null||j==="")){O.push(A.message||"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879");continue}if(!(j==null||j==="")){if(A.min!==void 0&&Number(j)<A.min){O.push(A.message||`\u4E0D\u80FD\u5C0F\u4E8E ${A.min}`);continue}if(A.max!==void 0&&Number(j)>A.max){O.push(A.message||`\u4E0D\u80FD\u5927\u4E8E ${A.max}`);continue}if(A.pattern&&!A.pattern.test(String(j))){O.push(A.message||"\u683C\u5F0F\u4E0D\u6B63\u786E");continue}if(A.validator)try{(yield Promise.resolve(A.validator(j,c.values)))||O.push(A.message||"\u9A8C\u8BC1\u5931\u8D25")}catch(ie){O.push(A.message||"\u9A8C\u8BC1\u51FA\u9519")}}}return f(x,O),O}),[c.values,c.rules,f]),w=(0,s.useCallback)(()=>be(this,null,function*(){let x=Object.keys(c.rules).map(j=>y(j)),E=(yield Promise.all(x)).every(j=>j.length===0);return!E&&l&&l(c.errors),E}),[c.rules,c.errors,y,l]),C=(0,s.useCallback)(()=>{v({values:B({},e),errors:{},touched:{},rules:B({},c.rules)})},[e,c.rules]),W=x=>be(this,null,function*(){x.preventDefault(),(yield w())&&t&&t(c.values)}),L={state:c,layout:r,setFieldValue:k,setFieldError:f,setFieldTouched:i,registerField:z,validateField:y,validateForm:w,resetForm:C};return(0,o.jsx)(Ue.Provider,{value:L,children:(0,o.jsx)(kr,K(B({onSubmit:W,$layout:r,theme:u},$),{children:d}))})},Re=()=>{let e=(0,s.useContext)(Ue);if(!e)throw new Error("useForm must be used within a Form component");return e},Sr=a.Z.div`
  display: flex;
  flex-direction: ${({$layout:e})=>e==="horizontal"?"row":"column"};
  gap: ${({theme:e})=>e.spacing.sm};
  margin-bottom: ${({theme:e})=>e.spacing.md};
  
  ${({$layout:e,theme:r})=>e==="inline"&&`
    margin-bottom: 0;
    margin-right: ${r.spacing.md};
  `}
`,Fr=a.Z.label`
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
`,Zr=a.Z.div`
  color: ${({theme:e})=>e.colors.error};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  margin-top: ${({theme:e})=>e.spacing.xs};
`,Er=({name:e,label:r,rules:t=[],required:l=!1,children:p})=>{var L;let d=(0,P.Fg)(),$=Re(),{layout:g,state:n,setFieldValue:u,setFieldTouched:c,registerField:v,validateField:z}=$,{values:k,errors:f,touched:i}=n;(0,s.useEffect)(()=>{let x=[...t];l&&!x.some(E=>E.required)&&x.push({required:!0,message:"\u8BE5\u5B57\u6BB5\u4E3A\u5FC5\u586B\u9879"}),v(e,x)},[e,v,t,l]);let y=x=>be(this,null,function*(){u(e,x),c(e,!0),yield z(e,x)}),w=()=>be(this,null,function*(){c(e,!0),yield z(e)}),C=e&&e.includes(".")||e.includes("[")?W(e,k):k[e];function W(x,E){let j=x.replace(/\[(\w+)\]/g,".$1").split("."),b=E;for(let O of j){if(!b||typeof b!="object")return;b=b[O]}return b}return(0,o.jsxs)(Sr,{$layout:g,theme:d,children:[r&&(0,o.jsx)(Fr,{$required:l,theme:d,children:r}),(0,o.jsxs)("div",{style:{flex:1},children:[p({value:C,onChange:y,onBlur:w,error:f[e]||[],touched:i[e]||!1,form:$}),i[e]&&((L=f[e])==null?void 0:L.length)>0&&(0,o.jsx)(Zr,{theme:d,children:f[e][0]})]})]})},Ar=a.Z.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.md};
`,Br=({name:e,children:r})=>{let t=(0,P.Fg)(),l=Re(),{state:p,setFieldValue:d}=l,{values:$}=p,g=(0,s.useCallback)((f,i)=>{if(!f||!i)return;let y=i.replace(/\[(\w+)\]/g,".$1").split("."),w=f;for(let C of y){if(!w||typeof w!="object")return;w=w[C]}return w},[]),n=(0,s.useCallback)(()=>{let f=g($,e);return Array.isArray(f)?f:[]},[e,$,g]),u=(0,s.useCallback)(f=>{d(e,f)},[e,d]),c=(0,s.useCallback)(f=>{let i=n();u([...i,f||{}])},[n,u]),v=(0,s.useCallback)(f=>{let i=n();if(f<0||f>=i.length)return;let y=[...i];y.splice(f,1),u(y)},[n,u]),z=(0,s.useCallback)((f,i)=>{let y=n();if(f<0||f>=y.length||i<0||i>=y.length||f===i)return;let w=[...y],[C]=w.splice(f,1);w.splice(i,0,C),u(w)},[n,u]),k=n().map((f,i)=>({name:`${e}[${i}]`,key:`${e}-${i}`}));return(0,o.jsx)(Ar,{theme:t,children:r(k,{add:c,remove:v,move:z})})},we=(0,s.createContext)(void 0),je=()=>{let e=(0,s.useContext)(we);if(!e)throw new Error("useMenuContext must be used within a MenuProvider");return e},Mr=a.Z.ul`
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
`,Dr=({mode:e="vertical",defaultSelectedKey:r,selectedKey:t,defaultOpenKeys:l=[],openKeys:p,onSelect:d,onOpenChange:$,children:g})=>{let[n,u]=(0,s.useState)(r||null),[c,v]=(0,s.useState)(l),z=t!==void 0,k=p!==void 0,f=z?t:n,i=k?p:c,y=(0,P.Fg)(),w=(0,s.useCallback)(W=>{z||u(W),d==null||d(W)},[z,d]),C=(0,s.useCallback)(W=>{let L=i!=null&&i.includes(W)?i.filter(x=>x!==W):[...i||[],W];k||v(L),$==null||$(L)},[k,i,$]);return(0,o.jsx)(we.Provider,{value:{mode:e,selectedKey:f,openKeys:i||[],onSelect:w,toggleOpen:C},children:(0,o.jsx)(Mr,{mode:e,theme:y,role:"menu",children:g})})},Lr=a.Z.li`
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
    background-color: ${({selected:e,disabled:r,theme:t})=>{var l;return r?"transparent":e?(l=t.colors.menu)==null?void 0:l.selectedHoverBg:t.colors.hover.text}};
  }
`,tr=s.forwardRef(({id:e,disabled:r=!1,style:t,className:l,children:p},d)=>{let $=(0,P.Fg)(),{selectedKey:g,onSelect:n,mode:u,isInSubMenu:c=!1}=je(),v=g===e;return(0,o.jsx)(Lr,{ref:d,selected:v,disabled:r,isInSubMenu:c,mode:u,theme:$,onClick:z=>{if(r){z.preventDefault();return}n(e)},style:t,className:l,role:"menuitem","aria-disabled":r,"aria-selected":v,children:p})});tr.displayName="MenuItem";var Pr=a.Z.li`
  position: relative;
  list-style: none;
`,Or=a.Z.div`
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
    background-color: ${({open:e,disabled:r,theme:t})=>{var l;return r?"transparent":e?(l=t.colors.menu)==null?void 0:l.selectedHoverBg:t.colors.hover.text}};
  }
`,Rr=a.Z.span`
  display: inline-flex;
  align-items: center;
  margin-left: 8px;
  font-size: 0.75rem;
  transform: ${({open:e,mode:r})=>r==="vertical"?e?"rotate(90deg)":"rotate(0deg)":e?"rotate(180deg)":"rotate(0deg)"};
  transition: transform 0.3s;
`,_r=a.Z.ul`
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
`,or=s.forwardRef(({id:e,disabled:r=!1,title:t,style:l,className:p,children:d},$)=>{let g=(0,P.Fg)(),{mode:n,openKeys:u,toggleOpen:c}=je(),v=u.includes(e),[z,k]=(0,s.useState)(!1),f=n==="horizontal"?z:v,i=w=>{w.preventDefault(),w.stopPropagation(),!(r||n==="horizontal")&&c(e)},y=K(B({},je()),{isInSubMenu:!0});return(0,o.jsxs)(Pr,{ref:$,theme:g,style:l,className:p,role:"none",onMouseEnter:n==="horizontal"?()=>k(!0):void 0,onMouseLeave:n==="horizontal"?()=>k(!1):void 0,children:[(0,o.jsxs)(Or,{open:f,disabled:r,mode:n,theme:g,onClick:i,role:"menuitem","aria-disabled":r,"aria-expanded":f,children:[t,(0,o.jsx)(Rr,{open:f,mode:n,children:n==="vertical"?"\u203A":"\u25BE"})]}),(0,o.jsx)(_r,{open:f,mode:n,theme:g,role:"menu",children:(0,o.jsx)(we.Provider,{value:y,children:d})})]})});or.displayName="SubMenu";var Ir=(e,r)=>typeof e=="number"?`${e}px`:typeof e=="string"?e==="small"?r.spacing.sm:e==="middle"?r.spacing.md:e==="large"?r.spacing.lg:e:"0",Vr=e=>typeof e=="boolean"?e?"wrap":"nowrap":e,Tr=a.Z.div`
  display: flex;
  flex-direction: ${({$vertical:e})=>e?"column":"row"};
  justify-content: ${({$justify:e})=>e};
  align-items: ${({$align:e})=>e};
  flex-wrap: ${({$wrap:e})=>Vr(e)};
  gap: ${({$gap:e,theme:r})=>e?Ir(e,r):"0"};
  ${({$flex:e})=>e!==void 0&&`flex: ${e};`}
`,Hr=c=>{var v=c,{vertical:e=!1,justify:r="normal",align:t="normal",wrap:l=!1,gap:p,flex:d,component:$="div",style:g,children:n}=v,u=ue(v,["vertical","justify","align","wrap","gap","flex","component","style","children"]);let z=(0,P.Fg)();return(0,o.jsx)(Tr,K(B({as:$,$vertical:e,$justify:r,$align:t,$wrap:l,$gap:p,$flex:d,theme:z,style:g},u),{children:n}))},Wr=(e,r)=>{switch(e){case"outlined":return r.colors.background;case"borderless":return"transparent";default:return r.colors.background}},Kr=(e,r)=>{switch(e){case"outlined":return`1px solid ${r.colors.border}`;case"borderless":return"none";default:return`1px solid ${r.colors.border}`}},ye=(e,r)=>{switch(e){case"small":return r.spacing.md;case"default":return r.spacing.lg;default:return r.spacing.lg}},Nr=(e,r)=>e?r.shadows.md:"none",Jr=(e,r)=>e?r.shadows.lg:"none",Qr=a.Z.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: ${({theme:e})=>e.fontSizes.md};
  background-color: ${({$variant:e,theme:r})=>Wr(e,r)};
  border: ${({$variant:e,theme:r})=>Kr(e,r)};
  border-radius: ${({theme:e})=>e.radii.sm};
  box-shadow: ${({$hoverable:e,theme:r})=>Nr(e,r)};
  transition: all 0.3s;
  
  &:hover {
    box-shadow: ${({$hoverable:e,theme:r})=>Jr(e,r)};
  }
`,Gr=a.Z.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({$size:e,theme:r})=>`${ye(e,r)} ${ye(e,r)} 0`};
  border-bottom: 0;
  min-height: 48px;
`,Yr=a.Z.div`
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.colors.text.primary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.medium};
  font-size: ${({theme:e,$size:r})=>r==="small"?e.fontSizes.md:e.fontSizes.lg};
`,Xr=a.Z.div`
  margin-left: ${({theme:e})=>e.spacing.md};
  color: ${({theme:e})=>e.colors.text.secondary};
  font-weight: ${({theme:e})=>e.typography.fontWeight.regular};
`,qr=a.Z.div`
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
`,Ur=a.Z.div`
  padding: ${({$size:e,theme:r})=>ye(e,r)};
  flex: 1;
`,et=a.Z.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.md};
  padding: ${({$size:e,theme:r})=>`0 ${ye(e,r)} ${ye(e,r)}`};
`,ze=a.Z.div`
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
`,rt=()=>{let e=(0,P.Fg)();return(0,o.jsxs)("div",{children:[(0,o.jsx)(ze,{width:"50%",height:"24px",theme:e}),(0,o.jsx)(ze,{theme:e}),(0,o.jsx)(ze,{theme:e}),(0,o.jsx)(ze,{width:"80%",theme:e})]})},tt=k=>{var f=k,{variant:e="outlined",size:r="default",title:t,extra:l,cover:p,actions:d,hoverable:$=!1,loading:g=!1,classNames:n,styles:u,type:c,children:v}=f,z=ue(f,["variant","size","title","extra","cover","actions","hoverable","loading","classNames","styles","type","children"]);let i=(0,P.Fg)(),y=()=>!t&&!l?null:(0,o.jsxs)(Gr,{$size:r,theme:i,className:n==null?void 0:n.head,style:u==null?void 0:u.head,children:[t&&(0,o.jsx)(Yr,{theme:i,$size:r,children:t}),l&&(0,o.jsx)(Xr,{theme:i,children:l})]}),w=()=>p?(0,o.jsx)(qr,{theme:i,className:n==null?void 0:n.cover,style:u==null?void 0:u.cover,children:p}):null,C=()=>!d||d.length===0?null:(0,o.jsx)(et,{$size:r,theme:i,className:n==null?void 0:n.actions,style:u==null?void 0:u.actions,children:d.map((W,L)=>(0,o.jsx)("div",{children:W},`action-${L}`))});return(0,o.jsxs)(Qr,K(B({$variant:e,$size:r,$hoverable:$,theme:i},z),{children:[y(),w(),(0,o.jsx)(Ur,{$size:r,theme:i,className:n==null?void 0:n.body,style:u==null?void 0:u.body,children:g?(0,o.jsx)(rt,{}):v}),C()]}))},ot=(e,r)=>{if(typeof e=="number")return e;switch(e){case"small":return r.fontSizes.sm;case"large":return r.fontSizes.lg;case"medium":default:return r.fontSizes.md}},lt=a.Z.div`
  display: ${({$inline:e})=>e?"inline-flex":"flex"};
  align-items: center;
  justify-content: center;
  vertical-align: ${({$inline:e})=>e?"-0.125em":"middle"};
  font-size: ${({$size:e,theme:r})=>ot(e,r)}px;
  color: ${({$color:e})=>e||"inherit"};
  line-height: 1;
  cursor: ${({onClick:e})=>e?"pointer":"inherit"};
`,pe=({icon:e,size:r="medium",color:t,rotate:l,horizontalFlip:p=!1,verticalFlip:d=!1,className:$,style:g,inline:n=!1,onClick:u})=>{let c=(0,P.Fg)();return(0,o.jsx)(lt,{$size:r,$color:t,$inline:n,className:$,style:g,onClick:u,theme:c,children:(0,o.jsx)(me.JO,{icon:e,rotate:l,hFlip:p,vFlip:d,style:{width:"1em",height:"1em"}})})},it=a.Z.div`
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
`,lr=a.Z.div`
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
`,at=a.Z.div`
  position: relative;
  display: inline-block;
  margin-right: 8px;
  height: 24px;
  width: 24px;
`,st=a.Z.div`
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
`,nt=a.Z.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 1;
`,dt=a.Z.div`
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
`,ct=({allowClear:e=!0,allowHalf:r=!1,autoFocus:t=!1,character:l,className:p,count:d=5,defaultValue:$=0,disabled:g=!1,keyboard:n=!0,style:u,tooltips:c,value:v,onBlur:z,onChange:k,onFocus:f,onHoverChange:i,onKeyDown:y})=>{let w=(0,P.Fg)(),[C,W]=(0,s.useState)(0),[L,x]=(0,s.useState)(v!==void 0?v:$),E=(0,s.useRef)(null);(0,s.useEffect)(()=>{v!==void 0&&x(v)},[v]),(0,s.useEffect)(()=>{t&&E.current&&E.current.focus()},[t]);let j=(V,H)=>H?V+.5:V+1,b=V=>{if(g)return;let H=V;e&&L===V&&(H=0),x(H),k==null||k(H)},O=V=>{g||(W(V),i==null||i(V))},A=()=>{W(0),i==null||i(0)},ie=()=>{f==null||f()},ge=()=>{z==null||z()},_e=V=>{if(!n||g)return;let{keyCode:H}=V,Y=L,re=r?.5:1;H===37?(Y=Math.max(0,L-re),V.preventDefault()):H===39?(Y=Math.min(d,L+re),V.preventDefault()):H===13&&V.preventDefault(),Y!==L&&(x(Y),k==null||k(Y)),y==null||y(V)},ne=(V,H=!1)=>{let Y=j(V,H),re=(C||L)>=Y;return typeof l=="function"?l({index:V,value:L,hoverValue:C,allowClear:e,allowHalf:r,count:d,disabled:g}):s.isValidElement(l)?s.cloneElement(l):(0,o.jsx)(pe,{icon:"material-symbols:star",color:re?w.colors.gold:w.colors.disabled.foreground,size:24})};return(0,o.jsx)(it,{theme:w,disabled:g,className:p,style:u,ref:E,tabIndex:g?-1:0,onFocus:ie,onBlur:ge,onKeyDown:_e,children:Array.from({length:d}).map((V,H)=>{let Y=H+1,re=H+.5,Ie=L===re,cr=L>=Y,oe=C===re,J=C>=Y,fe=r&&(Ie||oe)&&!cr&&!J,de=c&&c[H];return(0,o.jsxs)(at,{children:[de&&(0,o.jsx)(dt,{theme:w,visible:C===Y||C===0&&L===Y,children:de}),r&&(0,o.jsx)(st,{active:fe,onClick:()=>b(re),onMouseOver:()=>O(re),onMouseLeave:A,children:(0,o.jsx)(lr,{theme:w,children:ne(H,!0)})}),(0,o.jsx)(nt,{onClick:()=>b(Y),onMouseOver:()=>O(Y),onMouseLeave:A,children:(0,o.jsx)(lr,{theme:w,children:ne(H)})})]},H)})})},ut=a.Z.div`
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  margin: 0 ${({theme:e})=>e.spacing.xs} ${({theme:e})=>e.spacing.xs} 0;
  padding: 0 ${({theme:e})=>e.spacing.xs};
  font-size: ${({theme:e})=>e.fontSizes.xs};
  line-height: 20px;
  height: 20px;
  background-color: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: ${({theme:e})=>e.radii.sm};
  transition: all 0.3s;
  opacity: ${({$disabled:e})=>e?.5:1};
  cursor: ${({$disabled:e})=>e?"not-allowed":"default"};
  user-select: none;
  white-space: nowrap;
`,mt=a.Z.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ht=a.Z.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: ${({theme:e})=>e.spacing.xs};
  font-size: 10px;
  line-height: 10px;
  color: ${({theme:e})=>e.colors.text.secondary};
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  
  &:hover {
    color: ${({theme:e,$disabled:r})=>r?e.colors.text.secondary:e.colors.text.primary};
  }
`,ir=({value:e,label:r,closable:t=!0,disabled:l=!1,tagRender:p,maxTagTextLength:d,onClose:$,removeIcon:g})=>{let n=(0,P.Fg)(),u=v=>{v.stopPropagation(),!l&&($==null||$())},c=s.useMemo(()=>typeof r=="string"&&d&&r.length>d?`${r.slice(0,d)}...`:r,[r,d]);return p?(0,o.jsx)(o.Fragment,{children:p({label:c,value:e,closable:!!t&&!l,onClose:u})}):(0,o.jsxs)(ut,{theme:n,$disabled:l,children:[(0,o.jsx)(mt,{children:c}),t&&!l&&(0,o.jsx)(ht,{theme:n,$disabled:l,onClick:u,children:g||(0,o.jsx)(pe,{icon:"mdi:close",size:"small"})})]})},pt=a.Z.div`
  position: relative;
  overflow-y: auto;
  overflow-x: hidden;
  will-change: transform;
`,gt=a.Z.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
`;function ft({dataSource:e,itemHeight:r,height:t,renderItem:l,onScroll:p}){let d=(0,s.useRef)(null),[$,g]=(0,s.useState)(0),n=Math.ceil(t/r)+1,u=Math.floor($/r),c=Math.min(e.length-1,u+n),v=e.length*r,z=u*r,k=(0,s.useCallback)(i=>{let y=i.currentTarget.scrollTop;g(y),p==null||p(i)},[p]),f=e.slice(u,c+1);return(0,o.jsxs)(pt,{ref:d,style:{height:t},onScroll:k,children:[(0,o.jsx)("div",{style:{height:v}}),(0,o.jsx)(gt,{style:{transform:`translateY(${z}px)`},children:f.map((i,y)=>(0,o.jsx)("div",{style:{height:r},children:l(i,u+y)},u+y))})]})}var $t=a.Z.div`
  position: absolute;
  z-index: 1050;
  box-sizing: border-box;
  padding: ${({theme:e})=>e.spacing.xs} 0;
  background-color: ${({theme:e})=>e.colors.background};
  border-radius: ${({theme:e})=>e.radii.sm};
  box-shadow: ${({theme:e})=>e.shadows.md};
  display: ${({$visible:e})=>e?"block":"none"};
  ${({$width:e})=>e?`width: ${typeof e=="number"?`${e}px`:e};`:"min-width: 100%;"}
  
  ${({$placement:e})=>{switch(e){case"bottomLeft":return`
          left: 0;
          top: 100%;
          margin-top: 4px;
        `;case"bottomRight":return`
          right: 0;
          top: 100%;
          margin-top: 4px;
        `;case"topLeft":return`
          left: 0;
          bottom: 100%;
          margin-bottom: 4px;
        `;case"topRight":return`
          right: 0;
          bottom: 100%;
          margin-bottom: 4px;
        `;default:return`
          left: 0;
          top: 100%;
          margin-top: 4px;
        `}}}
`,xt=a.Z.div`
  max-height: ${({$maxHeight:e})=>e?`${e}px`:"256px"};
  overflow-y: auto;
  padding: ${({theme:e})=>e.spacing.xs} 0;
  
  /* 滚动条样式 */
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.border};
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`,ar=a.Z.div`
  padding: ${({theme:e})=>`${e.spacing.xs} ${e.spacing.md}`};
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  transition: background-color 0.3s;
  color: ${({theme:e,$disabled:r})=>r?e.colors.text.disabled:e.colors.text.primary};
  background-color: ${({theme:e,$selected:r})=>{var t;return r?(t=e.colors.menu)==null?void 0:t.selectedBg:"transparent"}};
  opacity: ${({$disabled:e})=>e?.5:1};
  
  &:hover {
    background-color: ${({theme:e,$selected:r,$disabled:t})=>{var l;return t?"transparent":r?(l=e.colors.menu)==null?void 0:l.selectedHoverBg:e.colors.hover.text}};
  }
`,sr=a.Z.div`
  padding: ${({theme:e})=>`${e.spacing.md} ${e.spacing.md}`};
  color: ${({theme:e})=>e.colors.text.secondary};
  text-align: center;
`,bt=({visible:e,options:r=[],placement:t="bottomLeft",selectedValues:l=[],matchWidth:p=!0,style:d,className:$,notFoundContent:g="\u65E0\u5339\u914D\u7ED3\u679C",virtual:n=!0,listHeight:u=256,optionRender:c,searchValue:v="",onSelect:z,onPopupScroll:k,dropdownRender:f})=>{let i=(0,P.Fg)(),y=(0,s.useRef)(null),w=(0,s.useCallback)(b=>{b.disabled||(z==null||z(b.value,b))},[z]),C=(0,s.useMemo)(()=>v?r.filter(b=>{let O=String(b.label).toLowerCase(),A=v.toLowerCase();return O.includes(A)}):r,[r,v]),W=(0,s.useMemo)(()=>C.length===0?(0,o.jsx)(sr,{theme:i,children:g}):C.map((b,O)=>{let A=l.includes(b.value),ie=c?c(b,{index:O}):b.label;return(0,o.jsx)(ar,{theme:i,$selected:A,$disabled:!!b.disabled,onClick:()=>w(b),children:ie},b.key||b.value)}),[C,l,i,w,c,g]),L=(0,s.useCallback)(b=>{k==null||k(b)},[k]),x=(0,s.useCallback)((b,O)=>{let A=l.includes(b.value),ie=c?c(b,{index:O}):b.label;return(0,o.jsx)(ar,{theme:i,$selected:A,$disabled:!!b.disabled,onClick:()=>w(b),children:ie},b.key||b.value)},[w,c,l,i]),E=(0,s.useMemo)(()=>C.length===0?(0,o.jsx)(sr,{theme:i,children:g}):n&&C.length>50?(0,o.jsx)(ft,{dataSource:C,itemHeight:32,height:u,renderItem:x,onScroll:L}):(0,o.jsx)(xt,{theme:i,$maxHeight:u,onScroll:L,children:W}),[C,L,u,g,x,W,i,n]),j=f?f(E):E;return(0,o.jsx)($t,{ref:y,theme:i,$visible:e,$placement:t,$width:typeof p=="boolean"?p?"100%":void 0:p,style:d,className:$,children:j})},yt=(e,r)=>{switch(e){case"small":return r.controlSizes.height.small;case"medium":return r.controlSizes.height.medium;case"large":return r.controlSizes.height.large;default:return r.controlSizes.height.medium}},vt=(e,r)=>{switch(e){case"small":return`0 ${r.spacing.sm}`;case"medium":return`0 ${r.spacing.md}`;case"large":return`0 ${r.spacing.lg}`;default:return`0 ${r.spacing.md}`}},wt=(e,r)=>{switch(e){case"small":return r.fontSizes.xs;case"medium":return r.fontSizes.sm;case"large":return r.fontSizes.md;default:return r.fontSizes.sm}},jt=a.Z.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  width: 100%;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({$disabled:e})=>e?"0.65":"1"};
`,nr=a.Z.div`
  display: flex;
  align-items: center;
  flex-wrap: ${({$mode:e})=>e==="multiple"||e==="tags"?"wrap":"nowrap"};
  box-sizing: border-box;
  width: 100%;
  min-height: ${({$size:e,theme:r})=>yt(e,r)};
  padding: ${({$size:e,theme:r})=>vt(e,r)};
  font-size: ${({$size:e,theme:r})=>wt(e,r)};
  background-color: ${({theme:e,$disabled:r})=>r?e.colors.disabled.background:e.colors.background};
  color: ${({theme:e,$disabled:r})=>r?e.colors.text.disabled:e.colors.text.primary};
  border: 1px solid ${({theme:e,$status:r,$focused:t})=>r==="error"?e.colors.error:r==="warning"?e.colors.warning:t?e.colors.primary:e.colors.border};
  border-radius: ${({theme:e})=>e.radii.sm};
  transition: all 0.3s;
  
  &:hover {
    border-color: ${({theme:e,$disabled:r,$status:t})=>r?e.colors.border:t==="error"?e.colors.error:t==="warning"?e.colors.warning:e.colors.primary};
  }
`,zt=a.Z.span`
  color: ${({theme:e})=>e.colors.text.secondary};
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,kt=a.Z.span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ct=a.Z.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  transform: ${({$open:e,$loading:r})=>r?"none":e?"rotate(180deg)":"rotate(0)"};
  transition: transform 0.3s;
`,St=a.Z.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${({theme:e})=>e.spacing.xs};
  font-size: 12px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s;
  
  ${nr}:hover & {
    visibility: visible;
    opacity: 1;
  }
  
  &:hover {
    color: ${({theme:e})=>e.colors.text.primary};
  }
`,Ft=a.Z.span`
  display: flex;
  align-items: center;
  margin-right: ${({theme:e})=>e.spacing.xs};
`,Zt=a.Z.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  overflow: hidden;
`,Et=a.Z.input`
  border: none;
  outline: none;
  background: transparent;
  width: ${({$width:e})=>e};
  min-width: 30px;
  flex: 1;
`,dr=s.forwardRef((Yt,Dt)=>{var ur=Yt,{size:e="medium",mode:r,value:t,defaultValue:l,defaultOpen:p=!1,disabled:d=!1,allowClear:$=!1,options:g=[],open:n,placement:u="bottomLeft",loading:c=!1,showSearch:v=r==="multiple"||r==="tags",status:z,prefix:k,suffixIcon:f,removeIcon:i,placeholder:y="\u8BF7\u9009\u62E9",defaultActiveFirstOption:w=!0,autoClearSearchValue:C=!0,popupClassName:W,dropdownStyle:L,dropdownRender:x,popupMatchSelectWidth:E=!0,searchValue:j,maxTagCount:b,maxTagPlaceholder:O,maxTagTextLength:A,virtual:ie=!0,maxCount:ge,notFoundContent:_e="\u65E0\u5339\u914D\u7ED3\u679C",filterOption:ne=!0,filterSort:V,optionFilterProp:H="value",optionLabelProp:Y="children",optionRender:re,listHeight:Ie=256,getPopupContainer:cr,labelInValue:oe=!1,onChange:J,onBlur:fe,onFocus:de,onClear:ke,onInputKeyDown:Ce,onSearch:Se,onSelect:Fe,onDeselect:ae,onDropdownVisibleChange:Q,onPopupScroll:At,labelRender:Gt,tagRender:Bt,tokenSeparators:Ze,children:Ve}=ur,Mt=ue(ur,["size","mode","value","defaultValue","defaultOpen","disabled","allowClear","options","open","placement","loading","showSearch","status","prefix","suffixIcon","removeIcon","placeholder","defaultActiveFirstOption","autoClearSearchValue","popupClassName","dropdownStyle","dropdownRender","popupMatchSelectWidth","searchValue","maxTagCount","maxTagPlaceholder","maxTagTextLength","virtual","maxCount","notFoundContent","filterOption","filterSort","optionFilterProp","optionLabelProp","optionRender","listHeight","getPopupContainer","labelInValue","onChange","onBlur","onFocus","onClear","onInputKeyDown","onSearch","onSelect","onDeselect","onDropdownVisibleChange","onPopupScroll","labelRender","tagRender","tokenSeparators","children"]);let se=(0,P.Fg)(),Ee=(0,s.useRef)(null),Te=(0,s.useRef)(null);s.useImperativeHandle(Dt,()=>Ee.current);let[Lt,$e]=(0,s.useState)(p),[Pt,He]=(0,s.useState)(!1),[Ot,ve]=(0,s.useState)(""),ee=n!==void 0?n:Lt,q=j!==void 0?j:Ot,[F,ce]=(0,s.useState)(()=>l!==void 0?Array.isArray(l)&&l.length>0&&typeof l[0]=="object"&&"value"in l[0]?l.map(m=>m.value):!Array.isArray(l)&&typeof l=="object"&&"value"in l?l.value:l:t!==void 0?Array.isArray(t)&&t.length>0&&typeof t[0]=="object"&&"value"in t[0]?t.map(m=>m.value):!Array.isArray(t)&&typeof t=="object"&&"value"in t?t.value:t:r==="multiple"||r==="tags"?[]:"");(0,s.useEffect)(()=>{t!==void 0&&(Array.isArray(t)&&t.length>0&&typeof t[0]=="object"&&"value"in t[0]?ce(t.map(m=>m.value)):!Array.isArray(t)&&typeof t=="object"&&"value"in t?ce(t.value):ce(t))},[t]);let X=(0,s.useMemo)(()=>{var m;return Ve?((m=s.Children.map(Ve,h=>{var D;return s.isValidElement(h)&&h.type==="option"?{value:h.props.value,label:h.props.children,disabled:h.props.disabled,key:(D=h.key)==null?void 0:D.toString()}:null}))==null?void 0:m.filter(Boolean))||[]:g},[Ve,g]),We=(0,s.useMemo)(()=>!v||!q?X:typeof ne=="function"?X.filter(m=>ne(q,m)):ne?X.filter(m=>{let h=m[H];return typeof h=="string"||typeof h=="number"?String(h).toLowerCase().includes(q.toLowerCase()):!1}):X,[X,v,q,ne,H]),Ae=(0,s.useMemo)(()=>V&&q?[...We].sort((m,h)=>V(m,h,{searchValue:q})):We,[We,V,q]),xe=(0,s.useCallback)(m=>X.find(h=>h.value===m),[X]);(0,s.useEffect)(()=>{let m=h=>{Ee.current&&!Ee.current.contains(h.target)&&($e(!1),He(!1))};return document.addEventListener("mousedown",m),()=>{document.removeEventListener("mousedown",m)}},[]);let Rt=(0,s.useCallback)(()=>{d||($e(!ee),Q==null||Q(!ee),!ee&&Te.current&&Te.current.focus())},[d,ee,Q]),_t=(0,s.useCallback)(m=>{m.stopPropagation();let h=r==="multiple"||r==="tags"?[]:"";ce(h),J==null||J(h,[]),ke==null||ke()},[r,J,ke]),Ke=(0,s.useCallback)((m,h)=>{let D;if(r==="multiple"||r==="tags"){let R=Array.isArray(F)?F:[];if(ge&&typeof ge=="number"&&R.length>=ge&&!R.includes(m))return;R.includes(m)?(D=R.filter(G=>G!==m),ae==null||ae(m)):D=[...R,m],C&&ve("")}else D=m,$e(!1),Q==null||Q(!1),ve("");if(ce(D),J)if(r==="multiple"||r==="tags"){let R=Array.isArray(D)?D.map(G=>xe(G)).filter(Boolean):[];J(oe?Be(D,X):D,R)}else J(oe?Be(D,X):D,h);Fe==null||Fe(m,h)},[r,F,ge,C,oe,X,J,ae,Q,Fe,xe,ve,$e]),Ne=(0,s.useCallback)(m=>{if(d)return;let h=(Array.isArray(F)?F:[]).filter(D=>D!==m);if(ce(h),J){let D=h.map(R=>xe(R)).filter(Boolean);J(oe?Be(h,X):h,D)}ae==null||ae(m)},[d,F,J,ae,xe,X,oe]),It=(0,s.useCallback)(m=>{let h=m.target.value;if(ve(h),Se==null||Se(h),r==="tags"&&Ze&&Ze.length&&h){let D=h[h.length-1];if(Ze.includes(D)){let R=h.slice(0,h.length-1).trim();if(R){let G=Array.isArray(F)?F:[];if(!G.includes(R)){let le=[...G,R];ce(le),J&&J(oe?Be(le,X):le,[])}ve("")}}}h&&!ee&&($e(!0),Q==null||Q(!0))},[r,Ze,F,ee,J,Se,Q,X,oe]),Vt=(0,s.useCallback)(m=>{if(Ce==null||Ce(m),m.key==="Backspace"&&!q&&Array.isArray(F)&&F.length>0){let h=F[F.length-1];Ne(h)}if(m.key==="Enter"&&ee&&Ae.length>0&&w){let h=Ae[0];h.disabled||(Ke(h.value,h),m.preventDefault())}m.key==="Escape"&&ee&&($e(!1),Q==null||Q(!1),m.preventDefault())},[Ce,q,F,ee,Ae,w,Ke,Ne,Q]),Tt=(0,s.useCallback)(()=>{He(!1),fe==null||fe()},[fe]),Ht=(0,s.useCallback)(m=>{He(!0),de==null||de(m)},[de]),Be=(0,s.useCallback)((m,h)=>{if(Array.isArray(m))return m.map(R=>{let G=h.find(le=>le.value===R);return{value:R,label:(G==null?void 0:G.label)||R}});let D=h.find(R=>R.value===m);return{value:m,label:(D==null?void 0:D.label)||m}},[]),Wt=()=>{if(F===void 0||F===""||Array.isArray(F)&&F.length===0)return(0,o.jsx)(zt,{theme:se,children:y});if(r==="multiple"||r==="tags"){let h=F,D=[...h],R=[];return b!==void 0&&h.length>0&&(b==="responsive"?(D=h.slice(0,5),R=h.slice(5)):typeof b=="number"&&h.length>b&&(D=h.slice(0,b),R=h.slice(b))),(0,o.jsxs)(Zt,{children:[D.map(G=>{let le=xe(G);return(0,o.jsx)(ir,{value:G,label:(le==null?void 0:le.label)||G,closable:!d,disabled:d,maxTagTextLength:A,onClose:()=>Ne(G),tagRender:Bt,removeIcon:i},G)}),R.length>0&&(0,o.jsx)(ir,{value:"omitted",label:typeof O=="function"?O(R):O||`+${R.length}...`,closable:!1,disabled:d}),v&&(0,o.jsx)(Et,{ref:Te,theme:se,$width:q?`${q.length*8}px`:"4px",type:"text",value:q,onChange:It,onKeyDown:Vt,onFocus:Ht,onBlur:Tt,disabled:d})]})}let m=xe(F);return(0,o.jsx)(kt,{theme:se,children:(m==null?void 0:m.label)||F})},Kt=r==="multiple"||r==="tags"?Array.isArray(F)&&F.length>0:F!==void 0&&F!=="";return(0,o.jsxs)(jt,K(B({ref:Ee,theme:se,$disabled:d,$status:z},Mt),{children:[(0,o.jsxs)(nr,{theme:se,$size:e,$open:ee,$disabled:d,$status:z,$focused:Pt,$mode:r,onClick:Rt,children:[k&&(0,o.jsx)(Ft,{theme:se,children:k}),Wt(),Kt&&$&&(0,o.jsx)(St,{theme:se,onClick:_t,children:typeof $=="object"&&$.clearIcon?$.clearIcon:(0,o.jsx)(pe,{icon:"mdi:close-circle",size:"small"})}),(0,o.jsx)(Ct,{theme:se,$open:ee,$loading:c,children:c?(0,o.jsx)(pe,{icon:"mdi:loading",size:"small"}):f||(0,o.jsx)(pe,{icon:"mdi:chevron-down",size:"small"})})]}),(0,o.jsx)(bt,{visible:ee,options:Ae,placement:u,selectedValues:Array.isArray(F)?F:F?[F]:[],matchWidth:E,style:L,className:W,notFoundContent:_e,virtual:ie,listHeight:Ie,optionRender:re,searchValue:q,onSelect:Ke,onPopupScroll:At,dropdownRender:x})]}))});dr.displayName="Select"},37503:function(T,I,S){S.d(I,{f6:function(){return Pe},$_:function(){return Le},Wb:function(){return te},Fg:function(){return Oe}});var a=S(63873),P=()=>typeof window<"u",o=(Z,_)=>window.getComputedStyle(Z).getPropertyValue(_),s=(Z,_,N,M)=>{Z.addEventListener(_,N,M)},me=(Z,_,N,M)=>{Z.removeEventListener(_,N,M)},U=(Z,_)=>{let N=B({},Z);for(let M in _)Object.prototype.hasOwnProperty.call(_,M)&&(_[M]&&typeof _[M]=="object"&&!Array.isArray(_[M])?Z[M]?N[M]=U(Z[M],_[M]):Object.assign(N,{[M]:_[M]}):Object.assign(N,{[M]:_[M]}));return N},he=Z=>Object.entries(Z).reduce((_,[N,M])=>(M!=null&&M!==""&&(_[N]=M),_),{}),Je=(Z,_)=>_.reduce((N,M)=>(Object.prototype.hasOwnProperty.call(Z,M)&&(N[M]=Z[M]),N),{}),Qe=Z=>Z.charAt(0).toUpperCase()+Z.slice(1),Ge=Z=>Z.replace(/([A-Z])/g,"-$1").toLowerCase(),Ye=Z=>Z.replace(/-([a-z])/g,(_,N)=>N.toUpperCase()),Xe=(Z="id")=>`${Z}-${Math.random().toString(36).substr(2,9)}`,De=S(97458),te={colors:{primary:"#1976d2",secondary:"#9c27b0",success:"#2e7d32",warning:"#ed6c02",error:"#d32f2f",info:"#0288d1",gold:"#fadb14",background:"#ffffff",surface:"#f5f5f5",text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},border:"rgba(0, 0, 0, 0.12)",hover:{primary:"#1565c0",secondary:"#7b1fa2",text:"rgba(25, 118, 210, 0.08)"},disabled:{background:"rgba(0, 0, 0, 0.12)",foreground:"rgba(0, 0, 0, 0.26)"},menu:{selectedBg:"rgba(25, 118, 210, 0.12)",selectedHoverBg:"rgba(25, 118, 210, 0.18)"}},shadows:{sm:"0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",md:"0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12)",lg:"0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1)"},spacing:{xs:"4px",sm:"8px",md:"16px",lg:"24px",xl:"32px"},breakpoints:{xs:"0px",sm:"600px",md:"960px",lg:"1280px",xl:"1920px"},fontSizes:{xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.25rem",xl:"1.5rem",xxl:"2rem"},typography:{fontWeight:{regular:400,medium:500,bold:700},lineHeight:{normal:1.5,relaxed:1.75,loose:2},letterSpacing:{normal:"0.01em",wide:"0.02em",wider:"0.03em"}},radii:{xs:"2px",sm:"4px",md:"8px",lg:"16px",xl:"24px",round:"50%"},controlSizes:{height:{small:"24px",medium:"32px",large:"40px"}}},Le=K(B({},te),{colors:K(B({},te.colors),{gold:"#fadb14",background:"#121212",surface:"#1e1e1e",text:{primary:"rgba(255, 255, 255, 0.87)",secondary:"rgba(255, 255, 255, 0.6)",disabled:"rgba(255, 255, 255, 0.38)"},border:"rgba(255, 255, 255, 0.12)",hover:B({},te.colors.hover),disabled:{background:"rgba(255, 255, 255, 0.12)",foreground:"rgba(255, 255, 255, 0.3)"},menu:{selectedBg:"rgba(25, 118, 210, 0.24)",selectedHoverBg:"rgba(25, 118, 210, 0.32)"}}),controlSizes:B({},te.controlSizes)}),Pe=({theme:Z,children:_})=>{let N=Z?U(te,Z):te;return(0,De.jsx)(a.a,{theme:N,children:_})},Oe=()=>(0,a.u)()}}]);
}());
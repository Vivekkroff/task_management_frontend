const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/sideNav-D1RMlpre.js","assets/vendor-s1X2VnKx.js","assets/ProjectMember-DFXB2tCR.js","assets/styles-B0qleVj-.js","assets/TaskCreation-C2T0s3_j.js","assets/TaskRoutes-dsaO6y5d.js","assets/dataRenderLayoutOrg-CaBDVQhG.js","assets/dialogService-BE7n5xdD.js","assets/EmployTaskTable-B8w7usDQ.js","assets/dataRenderLayoutAgent-CnK40ISY.js","assets/TaskDetails-C-KC8PCY.js","assets/EmployCompleteTask-DJhOLi50.js","assets/EmployeTable-CZZtkuXg.js","assets/LoginPage-CafwdCOM.js","assets/TeamLeadTaskTable-GI62CiT7.js"])))=>i.map(i=>d[i]);
import{r as l,j as p,a as e,D as ee,b as me,c as te,d as ne,B as E,e as oe,s as _,f as m,T as B,u as ae,g as F,h as b,I as $,R as f,O as V,S as q,i as pe,G as z,k as ge,l as fe,L as ye,m as be,n as ve,o as Se,p as we,q as xe,t as Ce,F as J,v as ke,w as Te,x as K,y as re,z as Ee,A as Pe,C as Ae,M as Y,E as I,H as je,J as Q,K as se,N as _e,P as De,Q as Le,U as Ie,V as Ne,W as Me,X as $e,Y as Oe,Z as ze,_ as Re,$ as Be,a0 as Fe,a1 as T,a2 as U,a3 as Ue,a4 as We}from"./vendor-s1X2VnKx.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const He="modulepreload",Ve=function(n){return"/"+n},X={},j=function(a,s,r){let t=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));t=Promise.all(s.map(h=>{if(h=Ve(h),h in X)return;X[h]=!0;const y=h.endsWith(".css"),v=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${v}`))return;const u=document.createElement("link");if(u.rel=y?"stylesheet":He,y||(u.as="script",u.crossOrigin=""),u.href=h,c&&u.setAttribute("nonce",c),document.head.appendChild(u),y)return new Promise((g,i)=>{u.addEventListener("load",g),u.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${h}`)))})}))}return t.then(()=>a()).catch(o=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o})},ie=l.createContext(null),le=()=>{const n=l.useContext(ie);if(!n)throw new Error("useAppContext must be used within an AppContextProvider");return n},G=({open:n,onClose:a,onConfirm:s})=>p(oe,{open:n,onClose:a,children:[e(ee,{children:"Confirm Logout"}),e(te,{children:e(me,{children:"Are you sure you want to log out?"})}),p(ne,{children:[e(E,{onClick:a,color:"primary",children:"Cancel"}),e(E,{onClick:s,color:"secondary",children:"Logout"})]})]}),N="https://app.manikanta.info/api/v1",A="faf61ac9d4fdb0000025bdf7375e4fc90200123",M="faf61ac9d4fdb0000025bdf7375e4fc90200456",R="faf61ac9d4fdb0000025bdf7375e4fc90200789",qe=_(m)({display:"flex",height:"8vh",alignItems:"center",justifyContent:"space-between",background:"#29315a",padding:"0 2rem",boxShadow:"0 4px 10px rgba(0, 0, 0, 0.1)"}),Ge=_(B)({fontSize:"24px",color:"white",fontWeight:"bold",textTransform:"uppercase"}),Je=()=>{b.get(A)?b.remove(A):b.get(M)?b.remove(M):b.get(R)&&b.remove(R)},Ke=()=>{const[n,a]=l.useState(!1),s=ae();return p(qe,{children:[e(Ge,{variant:"h6",children:"Manager"}),e(F,{title:"Logout",children:e(E,{variant:"contained",color:"secondary",onClick:()=>{a(!0)},children:"Logout"})}),e(G,{open:n,onClose:()=>{a(!1)},onConfirm:()=>{Je(),a(!1),s("/login")}})]})};function Ye(n){const[a,s]=l.useState(1),[r,t]=l.useState(!1),[o,c]=l.useState(!1),[h,y]=l.useState(""),[v,u]=l.useState(5e7),g=e(f.Fragment,{children:e($,{size:"small","aria-label":"close",color:"inherit",onClick:()=>c(!o),children:e(E,{children:"close"})})}),i=[{id:1,name:"dashboard",path:"/"},{id:2,name:"Users",path:"/admin-dashboard/users"},{id:12,name:"Filed Executive",path:"/admin-dashboard/field-executive"},{id:3,name:"Country Master",path:"/admin-dashboard/country"},{id:4,name:"State Master",path:"/admin-dashboard/state"},{id:5,name:"District Master",path:"/admin-dashboard/district"},{id:6,name:"Parliment Master",path:"/admin-dashboard/parliment"},{id:7,name:"Assembly Master",path:"/admin-dashboard/assembly"},{id:8,name:"Mandal Master",path:"/admin-dashboard/mandal"},{id:9,name:"Polling Station Master",path:"/admin-dashboard/polling-station"},{id:10,name:"Task Creation Master",path:"/admin-dashboard/task-creation"},{id:11,name:"Task Allocation",path:"/admin-dashboard/task-allocation"}];function k(d){const w=["http://localhost:3001","'http://localhost:5173'"];for(const C of w)if(d.startsWith(C)){let x=d.substring(C.length);return x.endsWith("/")&&(x=x.slice(0,-1)),x}return d}return l.useEffect(()=>{const d=window.location.href,w=k(d);console.log(w);const C=i==null?void 0:i.find(x=>{var D;return(D=x==null?void 0:x.path)==null?void 0:D.includes(w)});s(C==null?void 0:C.id)},[]),p(ie.Provider,{value:{currentTab:a,setCurrentTab:s,navigationArray:i,hideDurationNotifier:v,setHiderDurationNotifier:u,notifyMessage:h,setNotifyMessage:y,openNotifer:o,setOpenNotifier:c,showMiniNav:r,setShowMiniNav:t},children:[p(m,{sx:{display:"flex",flexDirection:"column",width:"100%",height:"100vh",overflow:"hidden"},children:[e(Ke,{}),e(m,{sx:{height:"92vh",display:"flex",flexDirection:"column",overflow:"hidden"},children:e(V,{})})]}),e(q,{open:o,autoHideDuration:v,onClose:()=>c(!o),message:h,action:g})]})}const ce=l.createContext(null),Ct=()=>{const n=l.useContext(ce);if(!n)throw new Error("useAppContext must be used within an AppContextProvider");return n},Qe=_(m)({display:"flex",height:"8vh",alignItems:"center",justifyContent:"space-between",background:"#29315a",padding:"0 2rem",boxShadow:"0 4px 10px rgba(0, 0, 0, 0.1)"}),Xe=_(B)({fontSize:"24px",color:"white",fontWeight:"bold",textTransform:"uppercase"});_(pe)({color:"white",marginLeft:"0.5rem","& .MuiInputBase-input":{padding:"0.5rem",color:"white"},"& .MuiInputBase-input::placeholder":{color:"#B0B0B0"}});const Ze=()=>{const[n,a]=l.useState(!1);return p(Qe,{children:[e(Xe,{variant:"h6",children:"Team Lead"}),e(m,{children:e(F,{title:"Logout",children:e(E,{variant:"contained",color:"secondary",onClick:()=>a(!0),children:"Logout"})})}),e(G,{open:n,onClose:()=>a(!1),onConfirm:()=>{b.remove(M),window.location.href="/login"}})]})};function et(n){const[a,s]=l.useState(1),[r,t]=l.useState(!1),[o,c]=l.useState(!1),[h,y]=l.useState(""),[v,u]=l.useState(5e7),g=e(f.Fragment,{children:e($,{size:"small","aria-label":"close",color:"inherit",onClick:()=>c(!o),children:e(E,{children:"close"})})}),i=[{id:1,name:"dashboard",path:"/"},{id:2,name:"Users",path:"/admin-dashboard/users"},{id:12,name:"Filed Executive",path:"/admin-dashboard/field-executive"},{id:3,name:"Country Master",path:"/admin-dashboard/country"},{id:4,name:"State Master",path:"/admin-dashboard/state"},{id:5,name:"District Master",path:"/admin-dashboard/district"},{id:6,name:"Parliment Master",path:"/admin-dashboard/parliment"},{id:7,name:"Assembly Master",path:"/admin-dashboard/assembly"},{id:8,name:"Mandal Master",path:"/admin-dashboard/mandal"},{id:9,name:"Polling Station Master",path:"/admin-dashboard/polling-station"},{id:10,name:"Task Creation Master",path:"/admin-dashboard/task-creation"},{id:11,name:"Task Allocation",path:"/admin-dashboard/task-allocation"}];function k(d){const w=["http://localhost:3001","'http://localhost:5173'"];for(const C of w)if(d.startsWith(C)){let x=d.substring(C.length);return x.endsWith("/")&&(x=x.slice(0,-1)),x}return d}return l.useEffect(()=>{const d=window.location.href,w=k(d);console.log(w);const C=i==null?void 0:i.find(x=>{var D;return(D=x==null?void 0:x.path)==null?void 0:D.includes(w)});s(C==null?void 0:C.id)},[]),p(ce.Provider,{value:{currentTab:a,setCurrentTab:s,navigationArray:i,hideDurationNotifier:v,setHiderDurationNotifier:u,notifyMessage:h,setNotifyMessage:y,openNotifer:o,setOpenNotifier:c,showMiniNav:r,setShowMiniNav:t},children:[p(m,{sx:{display:"flex",flexDirection:"column",width:"100%"},children:[e(Ze,{}),e(z,{container:!0,sx:{minHeight:"90vh",background:"#fff",overflow:"auto"},children:e(V,{})})]}),e(q,{open:o,autoHideDuration:v,onClose:()=>c(!o),message:h,action:g})]})}const de=l.createContext(null),kt=()=>{const n=l.useContext(de);if(!n)throw new Error("useAppContext must be used within an AppContextProvider");return n},tt=_(m)({display:"flex",height:"8vh",alignItems:"center",justifyContent:"space-between",background:"#29315a",padding:"0 2rem",boxShadow:"0 4px 10px rgba(0, 0, 0, 0.1)"}),nt=_(B)({fontSize:"24px",color:"white",fontWeight:"bold",textTransform:"uppercase"}),ot=()=>{const[n,a]=l.useState(!1);return p(tt,{children:[e(nt,{variant:"h6",children:"Employee"}),e(F,{title:"Logout",children:e(E,{variant:"contained",color:"secondary",onClick:()=>a(!0),children:"Logout"})}),e(G,{open:n,onClose:()=>a(!1),onConfirm:()=>{b.remove("employeeCookies"),window.location.href="/login"}})]})};function at(){const[n,a]=l.useState(1),[s,r]=l.useState(!1),[t,o]=l.useState(!1),[c,h]=l.useState(""),[y,v]=l.useState(5e7),u=e(f.Fragment,{children:e($,{size:"small","aria-label":"close",color:"inherit",onClick:()=>o(!t),children:e(E,{children:"close"})})}),g=[{id:1,name:"Pendingtask",path:"/employee-task/EmployTask"},{id:2,name:"Completedtask",path:"/employee-task/CompletedTask"}];return p(de.Provider,{value:{currentTab:n,setCurrentTab:a,hideDurationNotifier:y,navigationArray:g,setHiderDurationNotifier:v,notifyMessage:c,setNotifyMessage:h,openNotifer:t,setOpenNotifier:o,showMiniNav:s,setShowMiniNav:r},children:[p(m,{sx:{display:"flex",flexDirection:"column",width:"100%",height:"100vh",overflow:"hidden"},children:[e(ot,{}),e(m,{sx:{height:"92vh",display:"flex",flexDirection:"column",overflow:"hidden"},children:e(V,{})})]}),e(q,{open:t,autoHideDuration:y,onClose:()=>o(!t),message:c,action:u})]})}function H(n){const a=ae(),s=ge(),{darkMode:r,routes:t,showMiniNav:o,setShowMiniNav:c}=n;fe();const{currentTab:h,setCurrentTab:y}=le();f.useEffect(()=>{if((t==null?void 0:t.length)>0){const g=t.find(i=>s.pathname.startsWith(i.path));g&&g.id!==h&&(y(g.id),localStorage.setItem("currentTab",JSON.stringify(g.id)))}},[s.pathname,t,h,y]);const v=(g,i)=>{localStorage.setItem("currentTab",JSON.stringify(g)),y(g),a(`${i}`)},u=g=>{var d;const{item:i}=g,k=h===(i==null?void 0:i.id)||!h&&((d=t[0])==null?void 0:d.id)===(i==null?void 0:i.id);return p(ve,{onClick:()=>v(i==null?void 0:i.id,i==null?void 0:i.path),component:"li",sx:{width:"100%",background:k?"linear-gradient(to right, #f26729 2%, #333333 1%)":"transparent",clipPath:k?"polygon(0 0, 10% , 20% 100%, 0 100%)":"none",height:"40px",marginBottom:"10px",gap:2,cursor:"pointer",color:k?"grey":"black","&:hover":{backgroundColor:k?"grey":"#333333",color:"black"}},children:[e(m,{sx:{color:k?"white":"inherit",display:"flex",justifyContent:"center",alignItems:"center","&:hover":{color:"white"}},children:i==null?void 0:i.icon}),e(be,{primary:i==null?void 0:i.name,sx:{fontSize:"20px",textTransform:"capitalize",whiteSpace:"nowrap",color:"white",overflow:"hidden",textOverflow:"ellipsis","&:hover":{color:"white"}}})]},i==null?void 0:i.id)};return p(m,{sx:{display:"flex",flexDirection:"column",alignItems:"center",height:"92vh",boxShadow:"0rem 1.25rem 1.6875rem 0rem rgba(0, 0, 0, 0.05)",position:o?"absolute":"relative",zIndex:"1000",width:"100%",backgroundColor:"#0A152F"},children:[o&&e(Se,{sx:{color:"white",alignSelf:"flex-end"},onClick:()=>c(!o)}),e(we,{sx:{borderColor:"gray",width:"100%"}}),p(ye,{sx:{width:"100%",height:"100%",gap:2,background:"#29315a"},children:[" ",t==null?void 0:t.map(g=>e(u,{item:g},g.id))]})]})}const rt=Object.freeze(Object.defineProperty({__proto__:null,default:H},Symbol.toStringTag,{value:"Module"}));function he({children:n}){const a=[{id:1,name:"Projects",path:"/projects/project-table",icon:e(m,{sx:{display:"flex",alignItems:"center",justifyContent:"center","&:hover svg":{color:"white"}},children:e(J,{})})},{id:2,name:"Employee",path:"/projects/Employee",icon:e(m,{sx:{display:"flex",alignItems:"center",justifyContent:"center","&:hover svg":{color:"white"}},children:e(J,{})})}],{darkMode:s,activeTab:r,setActiveTab:t,showMiniNav:o,setShowMiniNav:c}=le(),h=l.useRef(null),[y,v]=l.useState(!1),[u,g]=l.useState(!1),i=()=>{g(!u)};return l.useEffect(()=>{const k=()=>{if(h.current){const{scrollTop:w}=h.current;w>1?(v(!0),console.log(`on:${w}`)):(v(!1),console.log(`off:${w}`))}},d=h.current;return d&&d.addEventListener("scroll",k),()=>{d&&d.removeEventListener("scroll",k)}},[]),p(z,{container:!0,sx:{height:"92vh",background:s?"#010101":"#fff",overflow:"hidden"},children:[e(z,{item:!0,xs:0,md:0,lg:2.5,m:0,p:0,sx:{display:{xs:"none",lg:"block"},height:"auto",overflow:"auto"},children:e(H,{darkMode:s,activeTab:r,setActiveTab:t,routes:a,showMiniNav:o,setShowMiniNav:c})}),p(z,{item:!0,xs:12,md:12,lg:0,sx:{display:{xs:"block",lg:"none"}},children:[e($,{edge:"start",color:"inherit","aria-label":"menu",onClick:i,sx:{ml:2,alignItems:"center",textAlign:"right"},children:e(xe,{sx:{color:"#29315a"}})}),e(Ce,{anchor:"left",open:u,onClose:i,sx:{"& .MuiDrawer-paper":{boxSizing:"border-box",width:250,mt:6}},children:e(H,{darkMode:s,activeTab:r,setActiveTab:t,routes:a,showMiniNav:o,setShowMiniNav:c})})]}),e(z,{item:!0,xs:12,md:12,lg:9.5,sx:{ml:{lg:"auto"},overflowY:"auto",height:"92vh"},ref:h,children:n})]})}const st=()=>e(he,{children:e("div",{children:e("h1",{children:" Hi hello How are you"})})}),it=({open:n,onClose:a,onSubmit:s})=>{const r=ke({initialValues:{projectName:"",Status:""},validationSchema:Te({projectName:K().required("Project Name is required"),Status:K().required("Status is required")}),onSubmit:o=>{s(o),r.resetForm(),a()}}),t=()=>{r.resetForm(),a()};return p(oe,{open:n,onClose:t,children:[e(ee,{children:"Add Project"}),e(te,{children:p("form",{onSubmit:r.handleSubmit,children:[e(re,{fullWidth:!0,id:"projectName",name:"projectName",label:"Project Name",value:r.values.projectName,onChange:r.handleChange,error:r.touched.projectName&&!!r.errors.projectName,helperText:r.touched.projectName&&r.errors.projectName,margin:"dense",onBlur:r.handleBlur}),p(Ee,{fullWidth:!0,margin:"dense",error:r.touched.Status&&!!r.errors.Status,children:[e(Pe,{id:"Status-label",children:"Project Status"}),p(Ae,{labelId:"Status-label",id:"Status",name:"Status",value:r.values.Status,onChange:r.handleChange,label:"Project Status",onBlur:r.handleBlur,children:[e(Y,{value:"Active",children:"Active"}),e(Y,{value:"Inactive",children:"Inactive"})]}),r.touched.Status&&r.errors.Status&&e("div",{style:{marginLeft:"1.4em",color:"#d32f2f",fontSize:"12px"},children:r.errors.Status})]})]})}),p(ne,{children:[e(E,{onClick:t,color:"secondary",children:"Cancel"}),e(E,{onClick:r.submitForm,color:"primary",children:"Submit"})]})]})},lt=async(n,a,s)=>{var t,o;const r=b.get(A);try{return(await I.get(`${N}/GetProject/projects`,{headers:{Authorization:`Bearer ${r}`},params:{page:n,pageSize:a,search:s}})).data}catch(c){throw console.error("Failed to fetch projects",c),new Error(((o=(t=c.response)==null?void 0:t.data)==null?void 0:o.message)||"Error fetching projects")}},Tt=async(n,a,s,r)=>{var o,c;const t=b.get(A);try{return(await I.get(`${N}/ProjectEmployee/${n}`,{headers:{Authorization:`Bearer ${t}`},params:{page:a,pageSize:s,search:r}})).data}catch(h){throw new Error(((c=(o=h.response)==null?void 0:o.data)==null?void 0:c.message)||"Error fetching project employees")}},Et=async(n,a,s)=>{var t,o;const r=b.get(A);try{return(await I.get(`${N}/Employee/GetEmployee1?page=${n}&limit=${a}&search=${encodeURIComponent(s)}`,{headers:{Authorization:`Bearer ${r}`}})).data}catch(c){throw new Error(((o=(t=c.response)==null?void 0:t.data)==null?void 0:o.message)||"Error fetching employees")}},Pt=async(n=1,a="")=>{var r,t;const s=b.get(A);try{return(await I.get(`${N}/Employee/GetEmployee`,{headers:{Authorization:`Bearer ${s}`},params:{page:n,searchTerm:a}})).data}catch(o){throw console.error("Error fetching employees:",o),new Error(((t=(r=o.response)==null?void 0:r.data)==null?void 0:t.message)||"Error fetching employees")}},At=async(n,a,s,r)=>{try{return(await I.post(`${N}/ProjectEmployee/${n}`,{Emp_Id:a,Role_Id:s,Degesination:r},{headers:{"Content-Type":"application/json"}})).data}catch(t){throw t.response?t.response:new Error("Failed to add or update project employee")}},jt=async n=>{var s,r;const a=b.get(A);try{return(await I.post(`${N}/Employee/post`,n,{headers:{Authorization:`Bearer ${a}`}})).data}catch(t){throw new Error(((r=(s=t.response)==null?void 0:s.data)==null?void 0:r.message)||"Failed to create employee")}},ct=async n=>{var s,r;const a=b.get(A);try{return(await I.post(`${N}/GetProject/addProject`,n,{headers:{Authorization:`Bearer ${a}`}})).data}catch(t){throw console.error("Error adding project:",t),new Error(((r=(s=t.response)==null?void 0:s.data)==null?void 0:r.message)||"Error adding project")}},P=_(je)(({theme:n})=>({[`&.${Q.head}`]:{backgroundColor:"#f26729",color:"white",padding:"1em 8px"},[`&.${Q.body}`]:{fontSize:12,padding:"6px 8px"}})),Z=_(se)(({theme:n})=>({"&:nth-of-type(odd)":{backgroundColor:n.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}));function dt(){const[n,a]=l.useState([]),[s,r]=l.useState(!0),[t,o]=l.useState(!1),[c,h]=l.useState(null),[y,v]=l.useState(""),[u,g]=l.useState(1),[i,k]=l.useState(5),[d,w]=l.useState(1),C=async(S=1,L="")=>{r(!0);try{const O=await lt(S,i,L);O.success&&(a(O.data),w(O.pagination.totalPages))}catch{h("Failed to fetch projects")}finally{r(!1)}};l.useEffect(()=>{C(u,y)},[u,y]);const x=async S=>{try{const L={Project_Name:S.projectName,Status:S.Status},O=await ct(L);C(u,y)}catch(L){console.error("Error adding project:",L)}},D=S=>{v(S.target.value),g(1)},ue=S=>S?new Date(S).toISOString().split("T")[0]:"";return e(he,{children:p(m,{sx:{display:"flex",flexDirection:"column",width:"100%",paddingLeft:2,paddingRight:2,marginTop:-6,overflow:"auto"},children:[e(_e,{}),p(m,{sx:{display:"flex",justifyContent:"space-between",zIndex:200,marginTop:"4em",marginBottom:"-3em"},children:[e(re,{label:"Search Projects",variant:"outlined",value:y,onChange:D,size:"small"}),e(E,{variant:"contained",color:"primary",onClick:()=>o(!0),children:"Add Project"})]}),e(it,{open:t,onClose:()=>o(!1),onSubmit:x}),p(m,{component:"main",sx:{flexGrow:1,bgcolor:"background.default",width:"100%"},children:[e(De,{}),e(Le,{component:Ie,children:p(Ne,{sx:{minWidth:700},"aria-label":"customized table",children:[e(Me,{children:p(se,{children:[e(P,{children:"S.No"}),e(P,{align:"center",children:"Project Name"}),e(P,{align:"center",children:"Created Date"}),e(P,{align:"center",children:"Status"}),e(P,{align:"center",children:"Actions"})]})}),e($e,{children:n.length>0?n.map((S,L)=>p(Z,{children:[e(P,{component:"th",scope:"row",children:L+1}),e(P,{align:"center",children:e(Oe,{style:{textDecoration:"none"},to:`/projects/project-member/${S.Project_Id}`,children:S==null?void 0:S.Project_Name})}),e(P,{align:"center",children:ue(S==null?void 0:S.createdAt)}),e(P,{align:"center",children:S==null?void 0:S.Status}),p(P,{align:"center",children:[e(F,{title:"Edit",placement:"top",children:e($,{style:{marginRight:"5px"},children:e(ze,{color:"blue"})})}),e(F,{title:"Delete",placement:"top",children:e($,{children:e(Re,{color:"red"})})})]})]},S.Project_Id)):e(Z,{children:e(P,{colSpan:5,align:"center",children:e(B,{variant:"body1",color:"textSecondary",children:"No projects found"})})})})]})}),e(m,{sx:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:2},children:p(B,{variant:"body2",component:"div",children:[e(E,{disabled:u===1,onClick:()=>g(u-1),children:"Previous"}),"Page ",u," of ",d," | Total Projects: ",n.length,e(E,{disabled:n.length<i||u===d,onClick:()=>g(u+1),children:"Next"})]})})]})]})})}const W=()=>{let n="",a="";if(b.get(A)?(n=b.get(A),a="manager"):b.get(M)?(n=b.get(M),a="teamlead"):b.get(R)&&(n=b.get(R),a="member"),n){const s=Be(n),r=Date.now()/1e3;return s.exp<r?(a=="manager"?b.remove(A):a=="teamlead"?b.remove(M):a=="member"&&b.remove(R),!1):(console.log(a),a)}};f.lazy(()=>j(()=>import("./sideNav-D1RMlpre.js"),__vite__mapDeps([0,1])));f.lazy(()=>j(()=>Promise.resolve().then(()=>rt),void 0));const ht=f.lazy(()=>j(()=>import("./ProjectMember-DFXB2tCR.js"),__vite__mapDeps([2,1,3]))),ut=f.lazy(()=>j(()=>import("./TaskCreation-C2T0s3_j.js"),__vite__mapDeps([4,1,3,5,6,7]))),mt=f.lazy(()=>j(()=>import("./EmployTaskTable-B8w7usDQ.js"),__vite__mapDeps([8,1,3,9,0,5]))),pt=f.lazy(()=>j(()=>import("./TaskDetails-C-KC8PCY.js"),__vite__mapDeps([10,1,6,5]))),gt=f.lazy(()=>j(()=>import("./EmployCompleteTask-DJhOLi50.js"),__vite__mapDeps([11,1,3,9,0]))),ft=f.lazy(()=>j(()=>import("./EmployeTable-CZZtkuXg.js"),__vite__mapDeps([12,1]))),yt=f.lazy(()=>j(()=>import("./LoginPage-CafwdCOM.js"),__vite__mapDeps([13,1]))),bt=f.lazy(()=>j(()=>import("./TeamLeadTaskTable-GI62CiT7.js"),__vite__mapDeps([14,1,3,5,6,7])));function vt(){const[n,a]=l.useState(!1),s=Fe([{path:"projects",element:W()=="manager"?e(f.Suspense,{fallback:e(m,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",padding:"2em",children:e(T,{})}),children:e(Ye,{darkMode:n,setDarkMode:a})}):e(U,{to:"/login"}),children:[{path:"",element:e(f.Suspense,{fallback:e(m,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",padding:"2em",children:e(T,{})}),children:e(st,{})})},{path:"project-table",element:e(f.Suspense,{fallback:e(m,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",padding:"2em",children:e(T,{})}),children:e(dt,{})})},{path:"project-member/:id",element:e(f.Suspense,{fallback:e(m,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",padding:"2em",children:e(T,{})}),children:e(ht,{})})},{path:"Employee",element:e(f.Suspense,{fallback:e(m,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",padding:"2em",children:e(T,{})}),children:e(ft,{})})}]},{path:"org-dashboard",element:W()=="teamlead"?e(f.Suspense,{fallback:e(m,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",padding:"2em",children:e(T,{})}),children:e(et,{darkMode:n,setDarkMode:a})}):e(U,{to:"/login"}),children:[{path:"task-table",element:e(f.Suspense,{fallback:e(m,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",padding:"2em",children:e(T,{})}),children:e(ut,{})})},{path:"task-table/task-details/:Task_details_Id",element:e(f.Suspense,{fallback:e(m,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",padding:"2em",children:e(T,{})}),children:e(pt,{})})},{path:"own-task",element:e(f.Suspense,{fallback:e(m,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",padding:"2em",children:e(T,{})}),children:e(bt,{})})}]},{path:"employee-task",element:W()=="member"?e(f.Suspense,{fallback:e(m,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",padding:"2em",children:e(T,{})}),children:e(at,{})}):e(U,{to:"/login"}),children:[{path:"EmployTask",element:e(f.Suspense,{fallback:e(m,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",padding:"2em",children:e(T,{})}),children:e(mt,{})})},{path:"CompletedTask",element:e(f.Suspense,{fallback:e(m,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",padding:"2em",children:e(T,{})}),children:e(gt,{})})}]},{path:"/login",element:e(f.Suspense,{fallback:e(m,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",padding:"2em",children:e(T,{})}),children:e(yt,{})})}]);return e(Ue,{router:s})}const St=l.createContext({superAdminToken:null,adminToken:null,userToken:null,agentToken:null,setSuperAdminToken:()=>{},setAdminToken:()=>{},setUserToken:()=>{},setAgentToken:()=>{}}),wt=({children:n})=>{const[a,s]=l.useState(localStorage.getItem("superAdminToken")),[r,t]=l.useState(localStorage.getItem("adminToken")),[o,c]=l.useState(localStorage.getItem("userToken")),[h,y]=l.useState(localStorage.getItem("agentToken")),v=(d,w)=>{w?(localStorage.setItem(d,w),console.log(`Token set in localStorage for ${d}:`,w)):(localStorage.removeItem(d),console.log(`Token removed from localStorage for ${d}`))},u=d=>{s(d),v("superAdminToken",d)},g=d=>{t(d),v("adminToken",d)},i=d=>{c(d),v("userToken",d)},k=d=>{y(d),v("agentToken",d)};return e(St.Provider,{value:{superAdminToken:a,adminToken:r,userToken:o,agentToken:h,setSuperAdminToken:u,setAdminToken:g,setUserToken:i,setAgentToken:k},children:n})};We.createRoot(document.getElementById("root")).render(e(wt,{children:e(vt,{})}));export{N as A,he as D,At as a,Tt as b,Et as c,jt as d,A as e,Ct as f,Pt as g,R as m,M as t,kt as u};
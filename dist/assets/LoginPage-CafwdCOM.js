import{E,s as h,ai as A,U as _,r as o,j as l,G as d,a as t,T as F,y as x,a1 as W,B,aj as R,S as U,h as s}from"./vendor-s1X2VnKx.js";import{A as q,e as p,t as m,m as g}from"./index-CBGQAfrx.js";const D=async(a,c)=>(await E.post(`${q}/auth/login`,{email:a,password:c})).data;h(A)(({theme:a})=>({height:"100vh",background:"#f5f5f5",padding:0}));const G=h(_)(({theme:a})=>({padding:a.spacing(4),opacity:.9,backdropFilter:"blur(5px)",borderRadius:"10px",width:"100%",maxWidth:"400px"})),M=h("img")({width:"100%",height:"100%",objectFit:"cover"}),J=()=>{const[a,c]=o.useState(""),[n,S]=o.useState(""),[f,y]=o.useState(!1),[C,u]=o.useState(!1),[L,b]=o.useState(""),[P,k]=o.useState("success"),T=()=>{s.get(p)?s.remove(p):s.get(m)?s.remove(m):s.get(g)&&s.remove(g)};function j(){T()}const I=async r=>{var i,w;r.preventDefault(),y(!0);try{const e=await D(a,n);j();const{access_token:O,type:z}=e;console.log(e),e.type===1?(s.set(p,e==null?void 0:e.access_token),setTimeout(()=>window.location.href="/projects/project-table",1500)):e.type===2?(s.set(m,e==null?void 0:e.access_token),setTimeout(()=>window.location.href="/org-dashboard/task-table",1500)):e.type===3&&(s.set(g,e==null?void 0:e.access_token),setTimeout(()=>window.location.href="/employee-task/EmployTask",1500)),b("Login successful! Redirecting..."),k("success"),u(!0),setTimeout(()=>{},2e3)}catch(e){b(((w=(i=e.response)==null?void 0:i.data)==null?void 0:w.message)||"An error occurred, please try again"),k("error"),u(!0)}finally{y(!1)}},v=(r,i)=>{i!=="clickaway"&&u(!1)};return l(d,{container:!0,style:{height:"100%"},children:[l(d,{item:!0,xs:12,sm:6,md:6,display:"flex",justifyContent:"center",alignItems:"center",sx:{padding:"4em"},children:[l(G,{elevation:3,children:[t(F,{variant:"h5",align:"center",sx:{marginBottom:2},children:"Login"}),l("form",{onSubmit:I,children:[t(x,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:a,onChange:r=>c(r.target.value),placeholder:"Enter your email",InputLabelProps:{shrink:!0},InputProps:{value:a}}),t(x,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:n,onChange:r=>S(r.target.value),placeholder:"Enter your password",InputLabelProps:{shrink:!0},InputProps:{value:n}}),t(B,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",disabled:f,sx:{marginTop:2},children:f?t(W,{size:24}):"Login"})]})]}),t(U,{open:C,autoHideDuration:6e3,onClose:v,children:t(R,{onClose:v,severity:P,sx:{width:"100%"},children:L})})]}),t(d,{item:!0,xs:12,sm:6,md:6,sx:{padding:"5em"},children:t(M,{src:"../../../src/utils/signup 1.png",alt:"Login Illustration"})})]})};export{J as default};

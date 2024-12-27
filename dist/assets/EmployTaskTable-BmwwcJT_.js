import{w as K,x as $,ab as Q,j as o,a as e,D as Y,a9 as X,r as u,ac as Z,G as x,z as V,A as ee,C as te,M as A,a7 as ae,y,af as ne,d as re,B as C,c as se,e as ie,ag as le,s as L,H as oe,J as z,K as O,N as ce,f as w,T as R,_ as de,Q as ue,U as me,V as he,W as Se,g as Te,I as ge,ah as pe,S as _e}from"./vendor-BtQO_-CK.js";import{a as De}from"./styles-sAMJ7xpl.js";import{D as be,g as fe}from"./dataRenderLayoutAgent-Dp-FLcUH.js";import{b as xe}from"./TaskRoutes-CpDOhjap.js";import"./index-IdKhXTeo.js";import"./sideNav-zQ2NtQ9K.js";function p(n){const i=new Date(n),m=`0${i.getMonth()+1}`.slice(-2),c=`0${i.getDate()}`.slice(-2);return`${i.getFullYear()}-${m}-${c}`}const ke=K({Status:$().required("Status is required"),Remarks:$().nullable().test("is-overdue","Remarks is required when the task is overdue",function(n){const{End_Date:i,End_Time:m}=this.parent,c=`${p(i)}T${m}:00`;return!(new Date(c)<new Date)||n&&n.trim()!==""}),Actual_Start_Date:Q().nullable().test("validate-actual-start-date","Invalid Actual Start Date",function(n){const{Start_Date:i,Start_Time:m,createdAt:c,Actual_Start_Time:h}=this.parent;if(n){const r=new Date(`${p(i)}T${m}:00`),d=new Date(c),S=h||new Date().toTimeString().slice(0,5),a=new Date(`${p(n)}T${S}:00`),s=new Date(a);if(s.setDate(s.getDate()),s>r)return this.createError({message:`Actual Start Date cannot be more than ${r}`});if(s<d)return this.createError({message:`Actual Start Date cannot be less than ${d}`})}return!0}),Actual_Start_Time:$().nullable().test("validate-actual-start-time","Actual Start Time should not be null if starting early",function(n){const{Start_Date:i,Start_Time:m}=this.parent,c=`${p(i)}T${m}:00`;return new Date(c)>new Date&&(!n||n.trim()==="")?this.createError({message:"Actual Start Time is required when starting early"}):!0})}),Ae=le(()=>({dialog:{width:"400px",maxWidth:"100%"},inputField:{width:"100%",boxSizing:"border-box"}})),we=({open:n,onClose:i,initialValues:m,onSubmit:c})=>{const h=Ae();return o(ie,{open:n,onClose:i,classes:{paper:h.dialog},children:[e(Y,{children:"Edit Task"}),e(se,{children:e(X,{initialValues:{...m,Remarks:m.Remarks||""},validationSchema:ke,onSubmit:(r,{setSubmitting:d})=>{const S={...r,Remarks:r.Remarks?r.Remarks.trim():""};c(S),d(!1)},children:({values:r,handleChange:d,handleBlur:S,errors:a,touched:s,isSubmitting:g,setFieldValue:_})=>{const f=`${p(r.End_Date)}T${r.End_Time}:00`,T=new Date(f)<new Date,k=`${p(r.Start_Date)}T${r.Start_Time}:00`,D=new Date(k)>new Date;return u.useEffect(()=>{(T||!T&&!D)&&(_("Actual_Start_Date",null),_("Actual_Start_Time",null))},[T,D,_]),console.log("is overdue",T),console.log("is start before",D),o(Z,{children:[o(x,{container:!0,spacing:2,children:[e(x,{item:!0,xs:12,children:o(V,{fullWidth:!0,variant:"outlined",margin:"dense",error:!!(s.Status&&a.Status),children:[e(ee,{children:"Status"}),o(te,{name:"Status",value:r.Status,onChange:d,onBlur:S,label:"Status",className:h.inputField,children:[e(A,{value:"",children:e("em",{children:"None"})}),e(A,{value:"Pending",children:"Pending"}),e(A,{value:"In Progress",children:"In Progress"}),e(A,{value:"Completed",children:"Completed"})]}),s.Status&&a.Status&&e(ae,{children:typeof a.Status=="string"?a.Status:""})]})}),T&&e(x,{item:!0,xs:12,children:e(y,{name:"Remarks",label:"Remarks",fullWidth:!0,variant:"outlined",margin:"dense",value:r.Remarks||"",onChange:d,onBlur:S,error:!!(s.Remarks&&a.Remarks),helperText:s.Remarks&&a.Remarks?String(a.Remarks):"",className:h.inputField})}),D&&o(ne,{children:[e(x,{item:!0,xs:12,children:e(y,{name:"Actual_Start_Date",label:"Actual Start Date",type:"date",variant:"outlined",margin:"dense",value:r.Actual_Start_Date?p(r.Actual_Start_Date):"",onChange:d,onBlur:S,error:!!(s.Actual_Start_Date&&a.Actual_Start_Date),helperText:s.Actual_Start_Date&&a.Actual_Start_Date?String(a.Actual_Start_Date):"",className:h.inputField,InputLabelProps:{shrink:!0}})}),e(x,{item:!0,xs:12,children:e(y,{name:"Actual_Start_Time",label:"Actual Start Time",type:"time",variant:"outlined",margin:"dense",value:r.Actual_Start_Time,onChange:d,onBlur:S,error:!!(s.Actual_Start_Time&&a.Actual_Start_Time),helperText:s.Actual_Start_Time&&a.Actual_Start_Time?String(a.Actual_Start_Time):"",className:h.inputField,InputLabelProps:{shrink:!0}})})]})]}),o(re,{children:[e(C,{onClick:i,color:"primary",children:"Cancel"}),e(C,{type:"submit",color:"primary",disabled:g,children:"Save"})]})]})}})})]})},l=L(oe)(({theme:n})=>({[`&.${z.head}`]:{backgroundColor:"#f26729",color:"white",padding:"1em 8px"},[`&.${z.body}`]:{fontSize:12,padding:"6px 8px"}})),N=L(O)(({theme:n})=>({"&:nth-of-type(odd)":{backgroundColor:n.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}));function Ie(){const[n,i]=u.useState([]),[m,c]=u.useState(null),[h,r]=u.useState(!1),[d,S]=u.useState(null),[a,s]=u.useState(1),[g,_]=u.useState(5),[f,v]=u.useState(""),[T,k]=u.useState(0),[I,D]=u.useState(null),[M,B]=u.useState(!1),j=async()=>{try{const t=await fe(a,g,f);console.log("API Response:",t),t.tasks&&t.tasks.length>0?(i(t.tasks),k(t.total)):(i([]),k(0))}catch(t){c("Failed to fetch tasks."),console.error("Fetch error:",t)}};u.useEffect(()=>{j()},[a,g,f]);const W=t=>{S(t),r(!0)},F=()=>{r(!1),S(null)},q=async t=>{try{const b=await xe(d.Task_details_Id,t.Status,t.Remarks,t.Actual_Start_Date,t.Actual_Start_Time);if(console.log("hello"),b.message==="Task updated successfully"){const P=b.task,J=n.map(E=>E.Task_details_Id===P.Task_details_Id?{...E,...P}:E);i(J),D("Task updated successfully."),B(!0),F()}}catch(b){console.error("Failed to update task:",b),c("Failed to update task.")}},H=t=>{v(t.target.value),s(1)},G=()=>{B(!1)},U=t=>t?new Date(t).toISOString().split("T")[0]:"";return e(be,{children:o(w,{sx:{width:"100%",paddingLeft:2,paddingRight:2,marginTop:1,overflow:"auto"},children:[e(ce,{}),e(w,{sx:{display:"flex",flexDirection:"column",marginBottom:"4em"},children:o(De,{children:[e(R,{variant:"h6",component:"div",sx:{flex:"1 1 1",color:"black",marginLeft:"1em"},children:"Task List"}),e(y,{variant:"outlined",placeholder:"Search tasks...",value:f,size:"small",onChange:H,sx:{zIndex:200}})]})}),o(w,{component:"main",sx:{flexGrow:1,bgcolor:"background.default",marginTop:"-4em",width:"100%"},children:[e(de,{component:ue,children:o(me,{sx:{minWidth:700},"aria-label":"customized table",children:[o(he,{sx:{backgroundColor:"black"},children:[" ",o(O,{children:[e(l,{sx:{color:"white"},children:"S.No"})," ",e(l,{align:"center",sx:{color:"white"},children:"Task"}),e(l,{align:"center",sx:{color:"white"},children:"Start Time"}),e(l,{align:"center",sx:{color:"white"},children:"End Date"}),e(l,{align:"center",sx:{color:"white"},children:"End Time"}),e(l,{align:"center",sx:{color:"white"},children:"Task Status"}),e(l,{align:"center",sx:{color:"white"},children:"Actions"})]})]}),e(Se,{children:n.length>0?n.map((t,b)=>o(N,{children:[e(l,{component:"th",scope:"row",children:b+1+(a-1)*g}),e(l,{align:"center",children:t==null?void 0:t.Task_Details}),e(l,{align:"center",children:t==null?void 0:t.Start_Time}),e(l,{align:"center",children:U(t==null?void 0:t.End_Date)}),e(l,{align:"center",children:t==null?void 0:t.End_Time}),e(l,{align:"center",children:t==null?void 0:t.Status}),e(l,{align:"center",children:e(Te,{title:"Update status",placement:"top",children:e(ge,{sx:{zIndex:20,backgroundColor:"rgba(255, 255, 255, 0.5)"},onClick:()=>W(t),children:e(pe,{sx:{color:"blue"}})})})})]},t.Task_details_Id)):e(N,{children:e(l,{colSpan:7,align:"center",children:e(R,{variant:"body1",children:"No tasks found."})})})})]})}),e(w,{sx:{display:"flex",justifyContent:"center",marginTop:2},children:o(R,{variant:"body2",component:"div",children:[e(C,{disabled:a===1,onClick:()=>s(a-1),children:"Previous"}),"Page ",a," of ",Math.ceil(T/g)," | Total Tasks: ",T,e(C,{disabled:n.length<g,onClick:()=>s(a+1),children:"Next"})]})})]}),e(we,{open:h,onClose:F,initialValues:d||{},onSubmit:q}),e(_e,{open:M,autoHideDuration:6e3,onClose:G,message:I})]})})}export{Ie as default};
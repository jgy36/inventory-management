"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[70],{22998:function(e,s,t){var a=t(57437),n=t(29338);t(2265),s.Z=e=>{let{rating:s}=e;return[1,2,3,4,5].map(e=>(0,a.jsx)(n.Z,{color:e<=s?"#FFC107":"#E4E5E9",className:"w-4 h-4"},e))}},9070:function(e,s,t){t.r(s),t.d(s,{default:function(){return q}});var a=t(57437),n=t(67524),l=t(53225),r=t(29162),c=t(92940),i=t(16717),d=t(51994),o=t(35231),x=t(23909),m=t(85369),h=t(68295);let u=["#00C49F","#0088FE","#FFBB28"];var j=()=>{let{data:e,isLoading:s}=(0,d.je)(),t=null==e?void 0:e.expenseSummary[0],n=Object.entries(((null==e?void 0:e.expenseByCategorySummary)||[]).reduce((e,s)=>{let t=s.category+" Expenses",a=parseInt(s.amount,10);return e[t]||(e[t]=0),e[t]+=a,e},{})).map(e=>{let[s,t]=e;return{name:s,value:t}}),r=n.reduce((e,s)=>e+s.value,0).toFixed(2);return(0,a.jsx)("div",{className:"row-span-3 bg-white shadow-md rounded-2xl flex flex-col justify-between",children:s?(0,a.jsx)("div",{className:"m-5",children:"Loading..."}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-lg font-semibold mb-2 px-7 pt-5",children:"Expense Summary"}),(0,a.jsx)("hr",{})]}),(0,a.jsxs)("div",{className:"xl:flex justify-between pr-7",children:[(0,a.jsxs)("div",{className:"relative basis-3/5",children:[(0,a.jsx)(o.h,{width:"100%",height:140,children:(0,a.jsx)(x.u,{children:(0,a.jsx)(m.b,{data:n,innerRadius:50,outerRadius:60,fill:"#8884d8",dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",children:n.map((e,s)=>(0,a.jsx)(h.b,{fill:u[s%u.length]},"cell-".concat(s)))})})}),(0,a.jsx)("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center basis-2/5",children:(0,a.jsxs)("span",{className:"font-bold text-xl",children:["$",r]})})]}),(0,a.jsx)("ul",{className:"flex flex-col justify-around items-center xl:items-start py-5 gap-3",children:n.map((e,s)=>(0,a.jsxs)("li",{className:"flex items-center text-xs",children:[(0,a.jsx)("span",{className:"mr-2 w-3 h-3 rounded-full",style:{backgroundColor:u[s%u.length]}}),e.name]},"legend-".concat(s)))})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("hr",{}),t&&(0,a.jsxs)("div",{className:"mt-3 flex justify-between items-center px-7 mb-4",children:[(0,a.jsx)("div",{className:"pt-2",children:(0,a.jsxs)("p",{className:"text-sm",children:["Average:"," ",(0,a.jsxs)("span",{className:"font-semibold",children:["$",t.totalExpenses.toFixed(2)]})]})}),(0,a.jsxs)("span",{className:"flex items-center mt-2",children:[(0,a.jsx)(l.Z,{className:"mr-2 text-green-500"}),"30%"]})]})]})]})})},g=t(29715),p=t(2265),f=t(22998),b=t(66648),y=()=>{let{data:e,isLoading:s}=(0,d.je)();return(0,a.jsx)("div",{className:"row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl pb-16",children:s?(0,a.jsx)("div",{className:"m-5",children:"Loading..."}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h3",{className:"text-lg font-semibold px-7 pt-5 pb-2",children:"Popular Products"}),(0,a.jsx)("hr",{}),(0,a.jsx)("div",{className:"overflow-auto h-full",children:null==e?void 0:e.popularProducts.map(e=>(0,a.jsxs)("div",{className:"flex items-center justify-between gap-3 px-5 py-7 border-b",children:[(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)(b.default,{src:"https://s3-inventorymanagement001.s3.us-east-2.amazonaws.com/product".concat(Math.floor(3*Math.random())+1,".png"),alt:e.name,width:48,height:48,className:"rounded-lg w-14 h-14"}),(0,a.jsxs)("div",{className:"flex flex-col justify-between gap-1",children:[(0,a.jsx)("div",{className:"font-bold text-gray-700",children:e.name}),(0,a.jsxs)("div",{className:"flex text-sm items-center",children:[(0,a.jsxs)("span",{className:"font-bold text-blue-500 text-xs",children:["$",e.price]}),(0,a.jsx)("span",{className:"mx-2",children:"|"}),(0,a.jsx)(f.Z,{rating:e.rating||0})]})]})]}),(0,a.jsxs)("div",{className:"text-xs flex items-center",children:[(0,a.jsx)("button",{className:"p-2 rounded-full bg-blue-100 text-blue-600 mr-2",children:(0,a.jsx)(g.Z,{className:"w-4 h-4"})}),Math.round(e.stockQuantity/1e3),"k Sold"]})]},e.productId))})]})})},N=t(64746),v=t.n(N),w=t(27561),P=t(2842),S=t(9542),F=t(85475),k=t(86991),C=()=>{let{data:e,isLoading:s}=(0,d.je)(),t=(null==e?void 0:e.purchaseSummary)||[],n=t[t.length-1]||null;return(0,a.jsx)("div",{className:"flex flex-col justify-between row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-white shadow-md rounded-2xl",children:s?(0,a.jsx)("div",{className:"m-5",children:"Loading..."}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-lg font-semibold mb-2 px-7 pt-5",children:"Purchase Summary"}),(0,a.jsx)("hr",{})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"mb-4 mt-7 px-7",children:[(0,a.jsx)("p",{className:"text-xs text-gray-400",children:"Purchased"}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("p",{className:"text-2xl font-bold",children:n?v()(n.totalPurchased).format("$0.00a"):"0"}),n&&(0,a.jsxs)("p",{className:"text-sm ".concat(n.changePercentage>=0?"text-green-500":"text-red-500"," flex ml-3"),children:[n.changePercentage>=0?(0,a.jsx)(l.Z,{className:"w-5 h-5 mr-1"}):(0,a.jsx)(r.Z,{className:"w-5 h-5 mr-1"}),Math.abs(n.changePercentage),"%"]})]})]}),(0,a.jsx)(o.h,{width:"100%",height:200,className:"p-2",children:(0,a.jsxs)(w.T,{data:t,margin:{top:0,right:0,left:-50,bottom:45},children:[(0,a.jsx)(P.K,{dataKey:"date",tick:!1,axisLine:!1}),(0,a.jsx)(S.B,{tickLine:!1,tick:!1,axisLine:!1}),(0,a.jsx)(F.u,{formatter:e=>["$".concat(e.toLocaleString("en"))],labelFormatter:e=>new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}),(0,a.jsx)(k.u,{type:"linear",dataKey:"totalPurchased",stroke:"#8884d8",fill:"#8884d8",dot:!0})]})})]})]})})},D=t(25974),L=t(54142),Z=t(45745),E=()=>{let{data:e,isLoading:s,isError:t}=(0,d.je)(),n=(null==e?void 0:e.salesSummary)||[],[r,c]=(0,p.useState)("weekly"),i=n.reduce((e,s)=>e+s.totalValue,0)||0,x=n.reduce((e,s,t,a)=>e+s.changePercentage/a.length,0)||0,m=n.reduce((e,s)=>e.totalValue>s.totalValue?e:s,n[0]||{}),h=m.date?new Date(m.date).toLocaleDateString("en-US",{month:"numeric",day:"numeric",year:"2-digit"}):"N/A";return t?(0,a.jsx)("div",{className:"m-5",children:"Failed to fetch data"}):(0,a.jsx)("div",{className:"row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl flex flex-col justify-between",children:s?(0,a.jsx)("div",{className:"m-5",children:"Loading..."}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-lg font-semibold mb-2 px-7 pt-5",children:"Sales Summary"}),(0,a.jsx)("hr",{})]}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-6 px-7 mt-5",children:[(0,a.jsxs)("div",{className:"text-lg font-medium",children:[(0,a.jsx)("p",{className:"text-xs text-gray-400",children:"Value"}),(0,a.jsxs)("span",{className:"text-2xl font-extrabold",children:["$",(i/1e6).toLocaleString("en",{maximumFractionDigits:2}),"m"]}),(0,a.jsxs)("span",{className:"text-green-500 text-sm ml-2",children:[(0,a.jsx)(l.Z,{className:"inline w-4 h-4 mr-1"}),x.toFixed(2),"%"]})]}),(0,a.jsxs)("select",{className:"shadow-sm border border-gray-300 bg-white p-2 rounded",value:r,onChange:e=>{c(e.target.value)},children:[(0,a.jsx)("option",{value:"daily",children:"Daily"}),(0,a.jsx)("option",{value:"weekly",children:"Weekly"}),(0,a.jsx)("option",{value:"monthly",children:"Monthly"})]})]}),(0,a.jsx)(o.h,{width:"100%",height:350,className:"px-7",children:(0,a.jsxs)(D.v,{data:n,margin:{top:0,right:0,left:-25,bottom:0},children:[(0,a.jsx)(L.q,{strokeDasharray:"",vertical:!1}),(0,a.jsx)(P.K,{dataKey:"date",tickFormatter:e=>{let s=new Date(e);return"".concat(s.getMonth()+1,"/").concat(s.getDate())}}),(0,a.jsx)(S.B,{tickFormatter:e=>"$".concat((e/1e6).toFixed(0),"m"),tick:{fontSize:12,dx:-1},tickLine:!1,axisLine:!1}),(0,a.jsx)(F.u,{formatter:e=>["$".concat(e.toLocaleString("en"))],labelFormatter:e=>new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}),(0,a.jsx)(Z.$,{dataKey:"totalValue",fill:"#3182ce",barSize:10,radius:[10,10,0,0]})]})})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("hr",{}),(0,a.jsxs)("div",{className:"flex justify-between items-center mt-6 text-sm px-7 mb-4",children:[(0,a.jsxs)("p",{children:[n.length||0," days"]}),(0,a.jsxs)("p",{className:"text-sm",children:["Highest Sales Date:"," ",(0,a.jsx)("span",{className:"font-bold",children:h})]})]})]})]})})},I=e=>{let{title:s,primaryIcon:t,details:n,dateRange:l}=e,r=e=>"".concat(e>=0?"+":"").concat(e.toFixed(),"%"),c=e=>e>=0?"text-green-500":"text-red-500";return(0,a.jsxs)("div",{className:"md:row-span-1 xl:row-span-2 bg-white col-span-1 shadow-md rounded-2xl flex flex-col justify-between",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-2 px-5 pt-4",children:[(0,a.jsx)("h2",{className:"font-semibold text-lg text-gray-700",children:s}),(0,a.jsx)("span",{className:"text-xs text-gray-400",children:l})]}),(0,a.jsx)("hr",{})]}),(0,a.jsxs)("div",{className:"flex mb-6 items-center justify-around gap-4 px-5",children:[(0,a.jsx)("div",{className:"rounded-full p-5 bg-blue-50 border-sky-300 border-[1px]",children:t}),(0,a.jsx)("div",{className:"flex-1",children:n.map((e,s)=>(0,a.jsxs)(p.Fragment,{children:[(0,a.jsxs)("div",{className:"flex items-center justify-between my-4",children:[(0,a.jsx)("span",{className:"text-gray-500",children:e.title}),(0,a.jsx)("span",{className:"font-bold text-gray-800",children:e.amount}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(e.IconComponent,{className:"w-4 h-4 mr-1 ".concat(c(e.changePercentage))}),(0,a.jsx)("span",{className:"font-medium ".concat(c(e.changePercentage)),children:r(e.changePercentage)})]})]}),s<n.length-1&&(0,a.jsx)("hr",{})]},s))})]})]})},q=()=>(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows",children:[(0,a.jsx)(y,{}),(0,a.jsx)(E,{}),(0,a.jsx)(C,{}),(0,a.jsx)(j,{}),(0,a.jsx)(I,{title:"Customer & Expenses",primaryIcon:(0,a.jsx)(n.Z,{className:"text-blue-600 w-6 h-6"}),dateRange:"22 - 29 October 2023",details:[{title:"Customer Growth",amount:"175.00",changePercentage:131,IconComponent:l.Z},{title:"Expenses",amount:"10.00",changePercentage:-56,IconComponent:r.Z}]}),(0,a.jsx)(I,{title:"Dues & Pending Orders",primaryIcon:(0,a.jsx)(c.Z,{className:"text-blue-600 w-6 h-6"}),dateRange:"22 - 29 October 2023",details:[{title:"Dues",amount:"250.00",changePercentage:131,IconComponent:l.Z},{title:"Pending Orders",amount:"147",changePercentage:-56,IconComponent:r.Z}]}),(0,a.jsx)(I,{title:"Sales & Discount",primaryIcon:(0,a.jsx)(i.Z,{className:"text-blue-600 w-6 h-6"}),dateRange:"22 - 29 October 2023",details:[{title:"Sales",amount:"1000.00",changePercentage:20,IconComponent:l.Z},{title:"Discount",amount:"200.00",changePercentage:-10,IconComponent:r.Z}]})]})},51994:function(e,s,t){t.d(s,{C$:function(){return i},Nh:function(){return x},hi:function(){return r},je:function(){return c},qX:function(){return d},zQ:function(){return o}});var a=t(8507),n=t(36074),l=t(20357);let r=(0,a.LC)({baseQuery:(0,n.ni)({baseUrl:l.env.NEXT_PUBLIC_API_BASE_URL}),reducerPath:"api",tagTypes:["DashboardMetrics","Products","Users","Expenses"],endpoints:e=>({getDashboardMetrics:e.query({query:()=>"/dashboard",providesTags:["DashboardMetrics"]}),getProducts:e.query({query:e=>({url:"/products",params:e?{search:e}:{}}),providesTags:["Products"]}),createProduct:e.mutation({query:e=>({url:"/products",method:"POST",body:e}),invalidatesTags:["Products"]}),getUsers:e.query({query:()=>"/users",providesTags:["Users"]}),getExpensesByCategory:e.query({query:()=>"/expenses",providesTags:["Expenses"]})})}),{useGetDashboardMetricsQuery:c,useGetProductsQuery:i,useCreateProductMutation:d,useGetUsersQuery:o,useGetExpensesByCategoryQuery:x}=r}}]);
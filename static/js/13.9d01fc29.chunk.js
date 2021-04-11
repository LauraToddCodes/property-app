(this["webpackJsonpproperty-app"]=this["webpackJsonpproperty-app"]||[]).push([[13],{146:function(e,t,a){"use strict";a.r(t);a(0);var s=a(2),r=a(147),n=a.n(r),c=a(4);t.default=function(){var e=Object(s.g)();return Object(c.jsxs)("button",{onClick:function(){return e.goBack()},id:"backBtn",children:[Object(c.jsx)(n.a,{})," ",Object(c.jsx)("span",{children:"go back"})]})}},527:function(e,t,a){"use strict";a.r(t);var s=a(80),r=a(0),n=a.n(r),c=a(248),o=a.n(c),i=a(92),l=a.n(i),d=a(91),j=a.n(d),p=a(93),m=a.n(p),b=a(25),u=a(3),O=a(514),x=a(44),h=a(171),y=a(516),g=a(529),f=a(523),v=a(530),N=a(518),T=a(261),R=a(4),I=Object(h.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",flexDirection:"row"},margin:{margin:e.spacing(1)},withoutLabel:{marginTop:e.spacing(3)},textField:{width:"25ch"}}}));var C=function(e){for(var t=I(),a=n.a.useState({propertyPrice:e.propertyPrice,deposit:.1*e.propertyPrice,years:"25",interestRate:"3",repaymentType:"Repayment"}),r=Object(s.a)(a,2),c=r[0],o=r[1],i=function(e){return function(t){o(Object(u.a)(Object(u.a)({},c),{},Object(b.a)({},e,t.target.value)))}},l=12*Number(c.years),d=Number(c.interestRate/100)/12,j=d+1,p=Math.pow(j,l),m=Number(c.propertyPrice-c.deposit),h=(m*d*p/(p-1)).toFixed(2),C=m*d,P="Repayment"==c.repaymentType?"show":"hide",w="Interest"==c.repaymentType?"show":"hide",k=new Array(Number(c.years+1)).fill(m),A=[0],B=0;B<c.years;B++){var S=A[B]+12*h;A.push(S)}A.reverse();for(var F=Object.values(A),D=[],L=0;L<F.length;L++)D.push(F[L].toFixed(2));for(var M="Repayment"==c.repaymentType?D:k,V=[0],J=0;J<c.years;J++)V.push(J+1);return Object(R.jsxs)(O.a,{elevation:3,className:t.root+" mortgageCalculator",children:[Object(R.jsxs)("div",{id:"mortgageCalc",children:[Object(R.jsx)("h2",{children:"Mortgage Calculator"}),Object(R.jsxs)("div",{children:[Object(R.jsxs)("div",{className:t.root,children:[Object(R.jsx)(g.a,{label:"Total Property Price",defaultValue:e.propertyPrice,variant:"outlined",className:Object(x.a)(t.margin,t.textField),InputProps:{startAdornment:Object(R.jsx)(y.a,{className:t.adornment,position:"start",children:"\xa3"})},onChange:i("propertyPrice")}),Object(R.jsx)(g.a,{label:"Deposit",defaultValue:.1*e.propertyPrice,variant:"outlined",className:Object(x.a)(t.margin,t.textField),InputProps:{startAdornment:Object(R.jsx)(y.a,{className:t.adornment,position:"start",children:"\xa3"})},onChange:i("deposit")})]}),Object(R.jsxs)("div",{children:[Object(R.jsx)(g.a,{label:"Mortgage Term",defaultValue:"25",variant:"outlined",className:Object(x.a)(t.margin,t.textField),InputProps:{endAdornment:Object(R.jsx)(y.a,{className:t.adornment,position:"end",children:"years"})},onChange:i("years")}),Object(R.jsx)(g.a,{label:"Interest Rate",defaultValue:"3",variant:"outlined",className:Object(x.a)(t.margin,t.textField),InputProps:{endAdornment:Object(R.jsx)(y.a,{className:t.adornment,position:"end",children:"%"})},onChange:i("interestRate")})]})]}),Object(R.jsxs)("div",{className:"radioResultContainer",children:[Object(R.jsxs)(v.a,{"aria-label":"repaymentType",defaultValue:"Repayment",onChange:i("repaymentType"),children:[Object(R.jsx)(N.a,{name:"Repayment",value:"Repayment",control:Object(R.jsx)(f.a,{}),label:"Repayment"}),Object(R.jsx)(N.a,{name:"Interest",value:"Interest",control:Object(R.jsx)(f.a,{}),label:"Interest Only"})]}),Object(R.jsxs)("div",{className:"resultContainer",children:[Object(R.jsxs)("p",{className:"mortgageLargeText",children:["You would pay",Object(R.jsxs)("span",{className:P+" mortgageAmount",children:["\xa3",h]}),Object(R.jsxs)("span",{className:w+" mortgageAmount",children:["\xa3",C]})," /month"]}),Object(R.jsxs)("p",{className:"mortgageSmallText",children:["over the course of ",c.years," years"]})]})]})]}),Object(R.jsx)("div",{className:"mortgageChartContainer",children:Object(R.jsx)(T.Line,{className:"mortgageChart",legend:{display:!1},data:{label:"none",labels:Object.values(V),datasets:[{data:M,backgroundColor:"rgba(73, 74, 243, 0.2)",borderColor:"rgba(73, 74, 243, 1)"}]},options:{scales:{yAxes:[{scaleLabel:{display:!0,labelString:"Amount (\xa3)"},ticks:{stepSize:5e4}}],xAxes:[{scaleLabel:{display:!0,labelString:"Years"}}]}}})})]})},P=a(16),w=a(74),k=a(146);t.default=Object(P.b)((function(e){return{currentItem:e.save.currentItem}}),(function(e){return{addToSaved:function(t){return e(Object(w.a)(t))}}}))((function(e){var t=e.currentItem,a=e.addToSaved,n=Object(r.useState)(!1),c=Object(s.a)(n,2),i=c[0],d=c[1],p=i?"show":"hide",b=t.bedrooms>1?"s":"",u=t.bathrooms>1?"s":"",O=t.livingRooms>1?"s":"";return Object(R.jsxs)("div",{className:"profileContainer",children:[Object(R.jsxs)("div",{className:"profilePanel",children:[Object(R.jsx)(k.default,{}),Object(R.jsxs)("div",{className:"profileTop",children:[t.imgs.length>1?Object(R.jsx)(o.a,{className:"carousel",autoPlay:!1,navButtonsProps:{style:{padding:"10px"}},navButtonsAlwaysVisible:"false",children:t.imgs.map((function(e){return Object(R.jsx)("img",{src:"/property-app/images/properties/"+e,alt:t.imgAlt,className:"carouselImg"})}))}):Object(R.jsx)("img",{src:"/property-app/images/properties/"+t.imgs[0],alt:t.imgAlt,className:"propertyProfileImg"}),Object(R.jsxs)("div",{className:"profileMainDetails",children:[Object(R.jsx)("p",{id:"profilePrice",children:t.displayPrice}),Object(R.jsxs)("p",{id:"profileTagline",children:[t.bedrooms," bedroom ",t.type]}),Object(R.jsxs)("div",{className:"roomTypes desktopRooms",children:[Object(R.jsxs)("div",{className:"indiRoomType",children:[Object(R.jsx)(j.a,{className:"roomTypeIcon"}),t.bedrooms,Object(R.jsxs)("p",{children:["Bedroom",b]})]}),Object(R.jsxs)("div",{className:"indiRoomType",children:[Object(R.jsx)(l.a,{className:"roomTypeIcon"}),t.bathrooms,Object(R.jsxs)("p",{children:["Bathroom",u]})]}),Object(R.jsxs)("div",{className:"indiRoomType",children:[Object(R.jsx)(m.a,{className:"roomTypeIcon"}),t.livingRooms,Object(R.jsxs)("p",{children:["Living Room",O]})]})]}),Object(R.jsxs)("div",{id:"profileBtnsCont",children:[Object(R.jsx)("button",{className:"contactBtn btn",onClick:function(){d(!0)},children:"contact the agent"}),Object(R.jsx)("button",{className:"profileSaveBtn saveBtn btn",onClick:function(){return a(t.id)},children:"save"})]})]})]}),Object(R.jsxs)("div",{className:"roomTypes mobileRooms",children:[Object(R.jsxs)("div",{className:"indiRoomType",children:[Object(R.jsx)(j.a,{className:"roomTypeIcon"}),t.bedrooms,Object(R.jsx)("p",{children:"Bedrooms"})]}),Object(R.jsxs)("div",{className:"indiRoomType",children:[Object(R.jsx)(l.a,{className:"roomTypeIcon"}),t.bathrooms,Object(R.jsx)("p",{children:"Bathrooms"})]}),Object(R.jsxs)("div",{className:"indiRoomType",children:[Object(R.jsx)(m.a,{className:"roomTypeIcon"}),t.livingRooms,Object(R.jsx)("p",{children:"Living Rooms"})]})]}),Object(R.jsxs)("div",{className:"profileFeaturesDesc",children:[Object(R.jsxs)("div",{className:"featuresDesc",children:[Object(R.jsx)("h2",{children:"Features"}),Object(R.jsx)("ul",{className:"featureList",children:t.features.map((function(e){return Object(R.jsx)("li",{children:e})}))})]}),Object(R.jsxs)("div",{className:"featuresDesc",children:[Object(R.jsx)("h2",{children:"Description"}),Object(R.jsx)("p",{children:t.propertyDesc})]})]})]}),Object(R.jsx)(C,{propertyPrice:t.price}),Object(R.jsx)("div",{id:"modalBackground",className:p,children:Object(R.jsxs)("div",{id:"contactModal",children:[Object(R.jsx)("button",{id:"closeModal",onClick:function(){d(!1)},children:"X"}),"If Homelee were a real company we'd provide details of the agent here.",Object(R.jsx)("br",{})," Unfortunately it's not.",Object(R.jsx)("br",{})," So we can't.",Object(R.jsx)("img",{src:"/property-app/images/modal/modalImg.png",id:"modalImg"})]})})]})}))},74:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"g",(function(){return n})),a.d(t,"f",(function(){return c})),a.d(t,"e",(function(){return o})),a.d(t,"c",(function(){return i})),a.d(t,"d",(function(){return l})),a.d(t,"b",(function(){return d}));var s=a(9),r=function(e){return{type:s.a,payload:{id:e}}},n=function(e){return{type:s.g,payload:{id:e}}},c=function(e){return{type:s.f,payload:e}},o=function(e){return{type:s.e,payload:e}},i=function(e){return{type:s.c,payload:e}},l=function(e){return{type:s.d,payload:e}},d=function(e){return{type:s.b,payload:e}}}}]);
//# sourceMappingURL=13.9d01fc29.chunk.js.map
"use strict";(self.webpackChunkproperty_app=self.webpackChunkproperty_app||[]).push([[629],{4861:(e,o,s)=>{s.d(o,{A:()=>i});s(5043);var a=s(579);function i(e){const{className:o,icon:s,quantity:i}=e;return(0,a.jsxs)("div",{className:o,children:[s,(0,a.jsx)("p",{children:i})]})}},6629:(e,o,s)=>{s.r(o),s.d(o,{default:()=>f});var a=s(9942),i=s(5043),r=s(6524),t=s(8846),n=s(7468),d=s(4861),p=s(1047),l=s(579);function c(e){return(0,l.jsxs)("div",{className:"infoWindow",children:[(0,l.jsxs)("div",{className:"infoCol1",children:[(0,l.jsx)("img",{src:"/property-app/images/properties/"+e.img,className:"windowInfoImg",alt:"property"}),(0,l.jsx)("p",{className:"infoWindowPrice",children:e.price}),(0,l.jsxs)("p",{className:"infoTagLine",children:[e.beds," bedroom ",e.type]})]}),(0,l.jsxs)("div",{className:"infoCol2",children:[(0,l.jsxs)("div",{className:"infoRoomTypes",children:[(0,l.jsx)(d.A,{className:"infoRoomType",icon:(0,l.jsx)(n.A,{}),quantity:e.beds}),(0,l.jsx)(d.A,{className:"infoRoomType",icon:(0,l.jsx)(t.A,{}),quantity:e.baths}),(0,l.jsx)(d.A,{className:"infoRoomType",icon:(0,l.jsx)(p.A,{}),quantity:e.living})]}),(0,l.jsxs)("div",{className:"infoWindowBtnsContainer",children:[(0,l.jsx)("a",{href:`/property-profile/${e.id}`,className:"moreBtn infoWindowBtns",onClick:function(o){o.preventDefault(),e.findOutMore(o.currentTarget.getAttribute("href"))},children:"find out more"}),(0,l.jsx)("button",{className:"saveBtn infoWindowBtns",onClick:e.saveItem,children:"save"})]})]})]})}var m=s(2166);const h=JSON.parse('[{"id":"0","lat":51.232712,"lng":-0.540188,"imgs":["property-1-1.jpg","property-3-2.jpg"],"imgAlt":"property 1 image","displayPrice":"\xa31,000,000","price":1000000,"propertyDesc":"Modern and stylish house with floor to ceiling windows to make the most of the spectacular views across the countryside. Plenty of outside space and an outdoor swimming pool.","type":"detached house","bedrooms":6,"bathrooms":3,"livingRooms":2,"address":"an address, somewhere","features":["garden","swimming pool","underfloor heating","cinema room","state of the art kitchen"]},{"id":"1","lat":51.23313,"lng":-0.59202,"imgs":["property-2-1.jpg"],"imgAlt":"property 2 image","displayPrice":"\xa3750,000","price":750000,"propertyDesc":"New build semi-detached family house for sale. Close to excellent schools and transport links. Situated in a quiet cul-de-sac.","type":"semi-detached house","bedrooms":5,"bathrooms":2,"livingRooms":1,"address":"an address, somewhere","features":["garden","swimming pool","underfloor heating","cinema room","state of the art kitchen"]},{"id":"2","lat":51.206777,"lng":-0.546255,"imgs":["property-3-1.jpg"],"imgAlt":"property 3 image","displayPrice":"\xa3600,000","price":600000,"propertyDesc":"Charming detached clapboard house with white picket fence. The house and wrap-around garden boast plenty of character.","type":"detached house","bedrooms":3,"bathrooms":2,"livingRooms":1,"address":"an address, somewhere","features":["garden","swimming pool","underfloor heating","cinema room","state of the art kitchen"]},{"id":"3","lat":51.206777,"lng":-0.563556,"imgs":["property-4-1.jpg"],"imgAlt":"property 4 image","displayPrice":"\xa3100,000","price":100000,"propertyDesc":"Cosy 1 bedroom detatched property featuring a complete lack of plumbing.","type":"detached house","bedrooms":1,"bathrooms":0,"livingRooms":1,"address":"an address, somewhere","features":["detached","quiet area","plenty of outside space"]},{"id":"4","lat":51.221523,"lng":-0.596995,"imgs":["property-5-1.jpg"],"imgAlt":"property 5 image","displayPrice":"\xa3200,000","price":200000,"propertyDesc":"Detached house with plenty of character. In need of some repair.","type":"detached house","bedrooms":1,"bathrooms":1,"livingRooms":1,"address":"an address, somewhere","features":["glass in almost all windows","quirky character","plenty of outside space"]}]');var y=s(3216);const g={lat:51.23651480350905,lng:-.5703780104611352},u={width:"100%",height:"100%"};const f=(0,m.Ng)((e=>({minPrice:e.save.minPrice,maxPrice:e.save.maxPrice,minBedrooms:e.save.minBedrooms,maxBedrooms:e.save.maxBedrooms})),(e=>({addToSaved:o=>e((0,r.wD)(o)),loadCurrentItem:o=>e((0,r.TJ)(o))})))((function(e){let{minPrice:o,maxPrice:s,minBedrooms:r,maxBedrooms:t,addToSaved:n,loadCurrentItem:d}=e;const p=(0,y.Zp)(),[m,f]=(0,i.useState)(null);return(0,l.jsx)(a.aJ,{googleMapsApiKey:"AIzaSyCjkm8LUaURCANXU9Qf23j-NihG3IMeVT8",children:(0,l.jsxs)(a.u6,{mapContainerStyle:u,center:g,zoom:12,children:[h.map((e=>{return i=e.price,n=e.bedrooms,i>=o&&i<=s&&n>=r&&n<=t&&(0,l.jsx)(a.pH,{position:{lat:e.lat,lng:e.lng},onClick:()=>{f(e)},icon:{url:"https://i.imgur.com/FpHIBa7.png"}},e.id);var i,n})),m&&(0,l.jsx)(a.Fu,{position:{lat:m.lat,lng:m.lng},onCloseClick:()=>{f(null)},children:(0,l.jsx)(c,{id:m.id,img:m.imgs[0],price:m.displayPrice,type:m.type,beds:m.bedrooms,baths:m.bathrooms,living:m.livingRooms,findOutMore:function(e){d(m),p(e)},saveItem:()=>n(m.id)},m.id)})]})})}))},6524:(e,o,s)=>{s.d(o,{QS:()=>p,TJ:()=>t,ct:()=>r,lO:()=>d,nK:()=>n,sV:()=>l,wD:()=>i});var a=s(166);const i=e=>({type:a.yA,payload:{id:e}}),r=e=>({type:a.mp,payload:{id:e}}),t=e=>({type:a.je,payload:e}),n=e=>({type:a.j,payload:e}),d=e=>({type:a.T9,payload:e}),p=e=>({type:a.IM,payload:e}),l=e=>({type:a.Un,payload:e})}}]);
//# sourceMappingURL=629.b5cfe936.chunk.js.map
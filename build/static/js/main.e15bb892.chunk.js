(this["webpackJsonpproperty-app"]=this["webpackJsonpproperty-app"]||[]).push([[4],{26:function(e,t,r){e.exports=r(38)},31:function(e,t,r){},38:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(13),s=r.n(o),i=(r(31),r(1)),c=r(12),l=Object(a.lazy)((function(){return r.e(15).then(r.bind(null,301))})),d=Object(a.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(14)]).then(r.bind(null,333))})),p=Object(a.lazy)((function(){return r.e(16).then(r.bind(null,327))})),u=Object(a.lazy)((function(){return Promise.all([r.e(0),r.e(1),r.e(6),r.e(13)]).then(r.bind(null,332))})),m=Object(a.lazy)((function(){return Promise.all([r.e(0),r.e(10)]).then(r.bind(null,330))}));var h=Object(c.b)((function(e){return{currentItem:e.save.currentItem}}))((function(e){var t=e.currentItem;return n.a.createElement(a.Suspense,{fallback:n.a.createElement("div",null)},n.a.createElement(l,null),n.a.createElement(i.c,null,n.a.createElement(i.a,{path:"/property-app",element:n.a.createElement(d,null)}),n.a.createElement(i.a,{path:"/map-view",element:n.a.createElement(p,null)}),n.a.createElement(i.a,{path:"/saved",element:n.a.createElement(m,null)}),t&&n.a.createElement(i.a,{exact:!0,path:"/property-profile/:id",element:n.a.createElement(u,null)})))})),y=r(14),f=(r(37),r(25)),b=r(8),g=r(11),j=r(3),E=r(6),O={properties:[{id:"0",lat:"51.232712",lng:"-0.540188",imgs:["property-1-1.jpg"],imgAlt:"property 1 image",displayPrice:"\xa31,000,000",price:1e6,propertyDesc:"Modern and stylish house with floor to ceiling windows to make the most of the spectacular views across the countryside. Plenty of outside space and an outdoor swimming pool.",type:"detached house",bedrooms:6,bathrooms:3,livingRooms:2,address:"an address, somewhere",features:["garden","swimming pool","underfloor heating","cinema room","state of the art kitchen"]},{id:"1",lat:"51.233130",lng:"-0.592020",imgs:["property-2-1.jpg"],imgAlt:"property 2 image",displayPrice:"\xa3750,000",price:75e4,propertyDesc:"New build semi-detached family house for sale. Close to excellent schools and transport links. Situated in a quiet cul-de-sac.",type:"semi-detached house",bedrooms:5,bathrooms:2,livingRooms:1,address:"an address, somewhere",features:["garden","swimming pool","underfloor heating","cinema room","state of the art kitchen"]},{id:"2",lat:"51.206777",lng:"-0.546255",imgs:["property-3-1.jpg","property-3-2.jpg"],imgAlt:"property 3 image",displayPrice:"\xa3600,000",price:6e5,propertyDesc:"Charming detached clapboard house with white picket fence. The house and wrap-around garden boast plenty of character.",type:"detached house",bedrooms:3,bathrooms:2,livingRooms:1,address:"an address, somewhere",features:["garden","swimming pool","underfloor heating","cinema room","state of the art kitchen"]},{id:"3",lat:"51.206777",lng:"-0.563556",imgs:["property-4-1.jpg"],imgAlt:"property 4 image",displayPrice:"\xa3100,000",price:1e5,propertyDesc:"Cosy 1 bedroom detatched property featuring a complete lack of plumbing.",type:"detached house",bedrooms:1,bathrooms:0,livingRooms:1,address:"an address, somewhere",features:["detached","quiet area","plenty of outside space"]},{id:"4",lat:"51.221523",lng:"-0.596995",imgs:["property-5-1.jpg"],imgAlt:"property 5 image",displayPrice:"\xa3200,000",price:2e5,propertyDesc:"Detached house with plenty of character. In need of some repair.",type:"detached house",bedrooms:1,bathrooms:1,livingRooms:1,address:"an address, somewhere",features:["glass in almost all windows","quirky character","plenty of outside space"]}],savedItems:[],currentItem:null,minPrice:0,maxPrice:1e6,minBedrooms:1,maxBedrooms:10},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.a:var r=e.properties.find((function(e){return e.id===t.payload.id})),a=e.savedItems.find((function(e){return e.id===t.payload.id}));return Object(j.a)(Object(j.a)({},e),{},{savedItems:a?e.savedItems.map((function(e){return e.id===t.payload.id?Object(j.a)(Object(j.a)({},e),{},{qty:e.qty+1}):e})):[].concat(Object(g.a)(e.savedItems),[Object(j.a)(Object(j.a)({},r),{},{qty:1})])});case E.g:return Object(j.a)(Object(j.a)({},e),{},{savedItems:e.savedItems.filter((function(e){return e.id!==t.payload.id}))});case E.f:return Object(j.a)(Object(j.a)({},e),{},{currentItem:t.payload});case E.e:return Object(j.a)(Object(j.a)({},e),{},{minPrice:t.payload});case E.c:return Object(j.a)(Object(j.a)({},e),{},{maxPrice:t.payload});case E.d:return Object(j.a)(Object(j.a)({},e),{},{minBedrooms:t.payload});case E.b:return Object(j.a)(Object(j.a)({},e),{},{maxBedrooms:t.payload});default:return e}},w=Object(b.combineReducers)({save:v});var I=Object(b.createStore)(w,function(){try{var e=localStorage.getItem("persistantState");if(null===e)return;return JSON.parse(e)}catch(t){return void console.warn(t)}}(),Object(f.composeWithDevTools)());I.subscribe((function(){return function(e){try{var t=JSON.stringify(e);localStorage.setItem("persistantState",t)}catch(r){console.warn(r)}}(I.getState())}));var A=I;s.a.render(n.a.createElement(c.a,{store:A},n.a.createElement(y.a,null,n.a.createElement(h,null))),document.getElementById("root"))},6:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"g",(function(){return n})),r.d(t,"f",(function(){return o})),r.d(t,"e",(function(){return s})),r.d(t,"c",(function(){return i})),r.d(t,"d",(function(){return c})),r.d(t,"b",(function(){return l}));var a="ADD_TO_SAVED",n="REMOVE_FROM_SAVED",o="LOAD_CURRENT_ITEM",s="GET_MINPRICE_VALUE",i="GET_MAXPRICE_VALUE",c="GET_MINBEDS_VALUE",l="GET_MAXBEDS_VALUE"}},[[26,5,7]]]);
//# sourceMappingURL=main.e15bb892.chunk.js.map
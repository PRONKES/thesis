(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{490:function(e,t,n){var content=n(561);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("5f097d4c",content,!0,{sourceMap:!1})},560:function(e,t,n){"use strict";n(490)},561:function(e,t,n){(t=n(8)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap);"]),t.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Englebert&display=swap);"]),t.push([e.i,'.header[data-v-688397ff]{padding:30px;font-size:40px;background:#000}.header[data-v-688397ff],h2[data-v-688397ff]{text-align:center}h2[data-v-688397ff]{font-family:"Englebert",sans-serif;font-size:50px;color:#fff;font-weight:600;margin:40px 0 20px}.img[data-v-688397ff]{height:300px;width:650px}p[data-v-688397ff]{font-family:"italic";color:#fff;font-size:20px}h1[data-v-688397ff]{font-size:30px;font-family:"Gloria Hallelujah",cursive;text-align:center}.div[data-v-688397ff]{background-color:#212121}.mb-2[data-v-688397ff]{left:180px}',""]),e.exports=t},647:function(e,t,n){"use strict";n.r(t);n(92),n(37),n(46);var o=n(17),l=n(105),r=n.n(l),d={data:function(){return{dialog:!1,dialogDelete:!1,blogs:[],selectedFile:null,valid:!0,editedIndex:-1,editedItem:{image:"",title:"",body:""},defaultItem:{image:"",title:"",body:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},created:function(){this.initialize()},methods:{onFileSelected:function(e){this.selectedFile=e},initialize:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/api/blogs");case 2:n=t.sent,e.blogs=n,console.log(n);case 5:case"end":return t.stop()}}),t)})))()},validate:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=new FormData,null!==e.selectedFile&&n.append("image",e.selectedFile,e.selectedFile.name,e.editedItem.image),n.append("body",e.editedItem.body),n.append("title",e.editedItem.title),!(e.editedIndex>-1)){t.next=12;break}return Object.assign(e.blogs[e.editedIndex],e.editedItem),t.next=8,e.$axios.$put("/api/blogs/".concat(e.editedItem._id),e.editedItem);case 8:return t.next=10,e.initialize();case 10:t.next=13;break;case 12:r.a.post("/api/blogs",n,{onUploadProgress:function(e){console.log("upload Progress"+Math.round(e.loaded/e.total*100)+"%")}}).then((function(t){e.initialize()})).then((function(){return e.close()}));case 13:case"end":return t.stop()}}),t)})))()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},editItem:function(e){console.log(e),this.editedIndex=this.blogs.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e),n.next=3,t.$axios.$delete("/api/blogs/".concat(e._id));case 3:t.initialize(),console.log(e),t.editedIndex=t.blogs.indexOf(e),t.editedItem=Object.assign({},e),t.dialogDelete=!0;case 8:case"end":return n.stop()}}),n)})))()}}},c=(n(560),n(73)),f=n(112),v=n.n(f),m=n(200),x=n(175),h=n(145),_=n(467),I=n(464),w=n(529),k=n(640),y=n(174),V=n(138),C=n(468),O=n(430),j=n(472),F=n(641),component=Object(c.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("THE ESCAPER'S BLOG")]),e._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,l=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"deep-purple accent-1",dark:""}},"v-btn",l,!1),o),[e._v("\n        Add Your Post\n      ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))]),e._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-file-input",{attrs:{"truncate-length":"15"},on:{change:e.onFileSelected}})],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{required:"",label:"title"},model:{value:e.editedItem.title,callback:function(t){e.$set(e.editedItem,"title",t)},expression:"editedItem.title"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{required:"",label:"body"},model:{value:e.editedItem.body,callback:function(t){e.$set(e.editedItem,"body",t)},expression:"editedItem.body"}})],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancel ")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.validate}},[e._v(" Save ")])],1)],1)],1),e._v(" "),n("v-container",e._l(e.blogs,(function(t,o){return n("v-col",{key:o,staticClass:"row"},[n("v-card",{staticClass:"rounded-lg"},[n("h1",[e._v(e._s(t.title))]),e._v(" "),n("div",[n("v-img",{staticClass:"img",attrs:{src:"/api/images/"+t.image}})],1),e._v(" "),n("div",{staticClass:"div"},[n("p",[e._v(e._s(t.body))]),e._v(" "),n("v-btn",{attrs:{color:"warning",text:""},on:{click:function(n){return e.editItem(t)}}},[n("v-icon",{attrs:{left:""}},[e._v("\n              mdi-pencil\n            ")]),e._v("\n            edit\n          ")],1),e._v(" "),n("v-btn",{attrs:{color:"warning",text:""},on:{click:function(n){return e.deleteItem(t)}}},[n("v-icon",{attrs:{left:""}},[e._v("\n              mdi-delete\n            ")]),e._v("\n            delete\n          ")],1)],1)])],1)})),1)],1)}),[],!1,null,"688397ff",null);t.default=component.exports;v()(component,{VBtn:m.a,VCard:x.a,VCardActions:h.a,VCardText:h.c,VCol:_.a,VContainer:I.a,VDialog:w.a,VFileInput:k.a,VIcon:y.a,VImg:V.a,VRow:C.a,VSpacer:O.a,VTextField:j.a,VTextarea:F.a})}}]);
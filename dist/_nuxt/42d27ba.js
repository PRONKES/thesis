(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{481:function(e,t,n){var content=n(548);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("d09dd03c",content,!0,{sourceMap:!1})},547:function(e,t,n){"use strict";n(481)},548:function(e,t,n){(t=n(8)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Anton&display=swap);"]),t.push([e.i,'body[data-v-435890f2]{font-family:Arial;padding:20px;background:#f1f1f1}.header[data-v-435890f2]{padding:30px;font-size:40px;text-align:center;background:#000}.leftcolumn[data-v-435890f2]{float:left;width:75%}.rightcolumn[data-v-435890f2]{float:left;width:25%;padding-left:20px}.card[data-v-435890f2]{background-color:#000;padding:20px;margin-top:20px}.row[data-v-435890f2]:after{content:"";display:table;clear:both}@media screen and (max-width:800px){.leftcolumn[data-v-435890f2],.rightcolumn[data-v-435890f2]{width:100%;padding:0}}h2[data-v-435890f2]{font-family:"Anton",sans-serif}.img[data-v-435890f2]{height:300px;width:150%}.div[data-v-435890f2]{background-color:#aaa;width:100%;padding:20px}',""]),e.exports=t},636:function(e,t,n){"use strict";n.r(t);n(91),n(39),n(66);var o=n(17),d=n(107),r=n.n(d),l={data:function(){return{dialog:!1,dialogDelete:!1,blogs:[],selectedFile:null,date:(new Date).toLocaleString(),valid:!0,editedIndex:-1,editedItem:{image:"",title:"",body:""},defaultItem:{image:"",title:"",body:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},created:function(){this.initialize()},methods:{onFileSelected:function(e){this.selectedFile=e},initialize:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/api/blogs");case 2:n=t.sent,e.blogs=n,console.log(n);case 5:case"end":return t.stop()}}),t)})))()},validate:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((n=new FormData).append("image",e.selectedFile,e.selectedFile.name),n.append("body",e.editedItem.body),n.append("title",e.editedItem.title),!(e.editedIndex>-1)){t.next=12;break}return Object.assign(e.blogs[e.editedIndex],e.editedItem),t.next=8,e.$axios.$put("/api/blogs/".concat(e.editedItem._id),e.editedItem);case 8:return t.next=10,e.initialize();case 10:t.next=13;break;case 12:r.a.post("/api/blogs",n,{onUploadProgress:function(e){console.log("upload Progress"+Math.round(e.loaded/e.total*100)+"%")}}).then((function(t){e.initialize()})).then((function(){return e.close()}));case 13:case"end":return t.stop()}}),t)})))()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},editItem:function(e){console.log(e),this.editedIndex=this.blogs.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e),n.next=3,t.$axios.$delete("/api/blogs/".concat(e._id));case 3:t.initialize(),console.log(e),t.editedIndex=t.blogs.indexOf(e),t.editedItem=Object.assign({},e),t.dialogDelete=!0;case 8:case"end":return n.stop()}}),n)})))()}}},c=(n(547),n(72)),v=n(112),f=n.n(v),m=n(191),h=n(173),x=n(144),_=n(627),I=n(464),w=n(518),k=n(628),y=n(142),C=n(629),V=n(423),O=n(460),$=n(630),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,d=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",d,!1),o),[e._v("\n        New Blog\n      ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))]),e._v(" "),n("p",[e._v("time")]),e._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-file-input",{attrs:{"truncate-length":"15"},on:{change:e.onFileSelected}})],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{required:"",label:"title"},model:{value:e.editedItem.title,callback:function(t){e.$set(e.editedItem,"title",t)},expression:"editedItem.title"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{required:"",label:"body"},model:{value:e.editedItem.body,callback:function(t){e.$set(e.editedItem,"body",t)},expression:"editedItem.body"}})],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancel ")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.validate}},[e._v(" Save ")])],1)],1)],1),e._v(" "),n("v-container",e._l(e.blogs,(function(t,o){return n("div",{key:o,staticClass:"row"},[n("div",{staticClass:"leftcolumn"},[n("div",{staticClass:"card"},[n("h1",[e._v(e._s(t.title))]),e._v(" "),n("div",{staticClass:"div"},[n("v-img",{staticClass:"img",attrs:{src:"/api/images/"+t.image}})],1),e._v(" "),n("div",{staticClass:"div"},[n("p",[e._v(e._s(t.body))])]),e._v(" "),n("v-btn",{attrs:{color:"warning",text:""},on:{click:function(n){return e.editItem(t)}}},[e._v("\n            edit\n          ")]),e._v(" "),n("v-btn",{attrs:{color:"danger",text:""},on:{click:function(n){return e.deleteItem(t)}}},[e._v("\n            delete\n          ")])],1)])])})),0)],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header"},[t("h2",[this._v("THE ESCAPER'S BLOG")])])}],!1,null,"435890f2",null);t.default=component.exports;f()(component,{VBtn:m.a,VCard:h.a,VCardActions:x.a,VCardText:x.b,VCol:_.a,VContainer:I.a,VDialog:w.a,VFileInput:k.a,VImg:y.a,VRow:C.a,VSpacer:V.a,VTextField:O.a,VTextarea:$.a})}}]);
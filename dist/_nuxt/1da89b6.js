(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{650:function(e,t,n){"use strict";n.r(t);n(259),n(260),n(91),n(37),n(47);var r=n(17),c=n(107),o=n.n(c),d={data:function(){return{dialog:!1,dialogDelete:!1,activities:[],selectedFile:null,valid:!0,editedIndex:-1,editedItem:{image:"",price:0,description:""},defaultItem:{image:"",price:0,description:""}}},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},created:function(){this.initialize()},methods:{onFileSelected:function(e){this.selectedFile=e},initialize:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/api/activity");case 2:n=t.sent,e.activities=n,console.log(n);case 5:case"end":return t.stop()}}),t)})))()},validate:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((n=new FormData).append("image",e.selectedFile,e.selectedFile.name,e.editedItem.image),n.append("description",e.editedItem.description),n.append("price",e.editedItem.price),!(e.editedIndex>-1)){t.next=12;break}return Object.assign(e.activities[e.editedIndex],e.editedItem),t.next=8,e.$axios.$put("/api/activity/".concat(e.editedItem._id),e.editedItem);case 8:return t.next=10,e.initialize();case 10:t.next=13;break;case 12:o.a.post("/api/activity",n,{onUploadProgress:function(e){console.log("upload Progress"+Math.round(e.loaded/e.total*100)+"%")}}).then((function(t){e.initialize()})).then((function(){return e.close()}));case 13:case"end":return t.stop()}}),t)})))()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},editItem:function(e){console.log(e),this.editedIndex=this.activities.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e),n.next=3,t.$axios.$delete("/api/activity/".concat(e._id));case 3:t.initialize(),console.log(e),t.editedIndex=t.activities.indexOf(e),t.editedItem=Object.assign({},e),t.dialogDelete=!0;case 8:case"end":return n.stop()}}),n)})))()}}},l=n(73),v=n(112),m=n.n(v),f=n(194),x=n(175),_=n(145),h=n(643),I=n(470),w=n(527),k=n(644),V=n(140),y=n(645),C=n(429),O=n(463),$=n(540),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"py-6"},[n("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,c=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",c,!1),r),[e._v("\n        New Activity\n      ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))]),e._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-file-input",{attrs:{"truncate-length":"15"},on:{change:e.onFileSelected}})],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{required:"",label:"Price"},model:{value:e.editedItem.price,callback:function(t){e.$set(e.editedItem,"price",t)},expression:"editedItem.price"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-textarea",{attrs:{required:"",label:"description"},model:{value:e.editedItem.description,callback:function(t){e.$set(e.editedItem,"description",t)},expression:"editedItem.description"}})],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v(" Cancel ")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.validate}},[e._v(" Save ")])],1)],1)],1),e._v(" "),n("v-container",[n("v-row",{attrs:{"align-content":"stretch",justify:"center"}},e._l(e.activities,(function(t,r){return n("v-col",{key:r,attrs:{lg:"4",sm:"6",xs:"12"}},[n("v-card",{staticStyle:{height:"100%"}},[n("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:"/api/images/"+t.image}}),e._v(" "),n("v-card-text",{staticClass:"text--primary"},[n("div",[e._v(e._s(t.description))]),e._v(" "),n("div",[e._v(e._s(t.price))])]),e._v(" "),n("v-spacer"),e._v(" "),n("v-card-actions",[n("v-btn",{attrs:{color:"warning",text:""},on:{click:function(n){return e.editItem(t)}}},[e._v("\n              edit\n            ")]),e._v(" "),n("v-btn",{attrs:{color:"danger",text:""},on:{click:function(n){return e.deleteItem(t)}}},[e._v("\n              delete\n            ")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:"",to:"/places/"+t._id}},[e._v("\n              Add Places")])],1)],1)],1)})),1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:f.a,VCard:x.a,VCardActions:_.a,VCardText:_.b,VCol:h.a,VContainer:I.a,VDialog:w.a,VFileInput:k.a,VImg:V.a,VRow:y.a,VSpacer:C.a,VTextField:O.a,VTextarea:$.a})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{510:function(t,e,r){var content=r(613);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("7f73fa54",content,!0,{sourceMap:!1})},612:function(t,e,r){"use strict";r(510)},613:function(t,e,r){(e=r(8)(!1)).push([t.i,"#customTextInput[data-v-562fb778]{background-color:#fff}",""]),t.exports=e},650:function(t,e,r){"use strict";r.r(e);r(46);var n=r(17),c={data:function(){return{places:[],customText:""}},created:function(){this.initialize()},methods:{initialize:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/api/place");case 2:r=e.sent,t.places=r;case 4:case"end":return e.stop()}}),e)})))()},getLatLng:function(t){return[t.lat,t.lng]},addMarker:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c,o,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=t.latlng,c=n.lat,o=n.lng,""===e.customText){r.next=7;break}return l={activity:"id",lat:c,lng:o,title:e.customText},r.next=5,e.$axios.$post("/api/place",l);case 5:return r.next=7,e.initialize();case 7:case"end":return r.stop()}}),r)})))()},removeMarker:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.places[t],r.next=3,e.$axios.$delete("/api/place/".concat(n._id));case 3:return r.next=5,e.initialize();case 5:case"end":return r.stop()}}),r)})))()}}},o=(r(612),r(73)),l=r(112),f=r.n(l),d=r(472),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("v-text-field",{attrs:{label:"Place Title",required:""},model:{value:t.customText,callback:function(e){t.customText=e},expression:"customText"}}),r("br"),r("br")],1),t._v(" "),r("div",{staticStyle:{height:"80vh"},attrs:{id:"map-wrap"}},[r("no-ssr",[r("l-map",{attrs:{zoom:7,center:[34.46427430192848,9.551030828063602]},on:{click:t.addMarker}},[r("l-tile-layer",{attrs:{url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}}),t._v(" "),t._l(t.places,(function(e,n){return r("l-marker",{key:n,attrs:{"lat-lng":t.getLatLng(e)},on:{click:function(e){return t.removeMarker(n)}}},[r("l-tooltip",{attrs:{options:{permanent:!0,interactive:!0}}},[t._v(t._s(e.title))])],1)}))],2)],1)],1)])}),[],!1,null,"562fb778",null);e.default=component.exports;f()(component,{VTextField:d.a})}}]);
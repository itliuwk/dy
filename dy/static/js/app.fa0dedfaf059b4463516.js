webpackJsonp([1],{AawP:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("/5sW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var l=n("VU/8")({name:"App"},o,!1,function(t){n("yA5k")},null,null).exports,i=n("/ocq"),r=n("mtWM"),u=n.n(r),s=n("//Fk"),c=n.n(s),d=n("hU7x"),f=n.n(d);function p(t){var e="";for(var n in t){var a=t[n];e+="&"+n+"="+encodeURIComponent(a)}return e?e.substring(1):""}var v={data:function(){return{data:{},timer:null,loading:!1,isReload:!1,count:0}},mounted:function(){var t=this;this.getList(),setInterval(function(){t.getList()},5e3)},methods:{getList:function(){var t=this;this.count>=1?this.loading=!1:this.loading=!0,this.count=this.count+1,function(t,e,n){return t.indexOf("?")<0?t+="?"+p(e):t+="&"+p(e),new c.a(function(e,a){f()(t,n,function(t,n){t?a(t):e(n)})})}("https://api.shenjian.io/promovie/piaofang?appid=6d2e16b89ef4bbff34b7f69b226c4aa5&date="+this.filterDate(),"","jsonpCallBack").then(function(e){t.data=e.data,t.loading=!1,e.data.length||(t.isReload=!0)})},reload:function(){window.location.reload()},filterDate:function(){var t=new Date,e=t.getFullYear(),n=t.getMonth()+1,a=t.getDate();return n>=1&&n<=9&&(n="0"+n),a>=0&&a<=9&&(a="0"+a),e+"-"+n+"-"+a}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticStyle:{"text-align":"center","font-weight":"bold",margin:"30px 0","font-size":"50px",color:"#fff"}},[t._v("\n    日期: "+t._s(this.filterDate())+"\n  ")]),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.data,stripe:"","empty-text":"暂无数据,刷新页面试试"}},[n("el-table-column",{attrs:{type:"index"}}),t._v(" "),n("el-table-column",{attrs:{prop:"movie_name",label:"影片"}}),t._v(" "),n("el-table-column",{attrs:{prop:"duration",label:"上映天数"}}),t._v(" "),n("el-table-column",{attrs:{prop:"real_office",label:"综合票房"}}),t._v(" "),n("el-table-column",{attrs:{prop:"totle_office",label:"票房"}}),t._v(" "),n("el-table-column",{attrs:{prop:"office_ratio",label:"票房占比"}}),t._v(" "),n("el-table-column",{attrs:{prop:"show_rate",label:"排片占比"}}),t._v(" "),n("el-table-column",{attrs:{prop:"avg_seat_view",label:"上座率"}})],1),t._v(" "),t.isReload?n("div",{staticStyle:{"text-align":"center",background:"#fff"}},[n("el-button",{attrs:{type:"text"},on:{click:function(e){return t.reload()}}},[t._v("刷新页面")])],1):t._e()],1)},staticRenderFns:[]};var _=n("VU/8")(v,b,!1,function(t){n("AawP")},null,null).exports;a.default.use(i.a);var m=new i.a({routes:[{path:"/",name:"dy",component:_}]}),g=n("zL8q"),h=n.n(g),w=n("Rf8U"),x=n.n(w),y=n("qJdI"),R=n.n(y);n("tvR6");a.default.use(x.a,u.a),a.default.use(R.a),a.default.config.productionTip=!1,a.default.use(h.a),new a.default({el:"#app",router:m,render:function(t){return t(l)}})},tvR6:function(t,e){},yA5k:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.fa0dedfaf059b4463516.js.map
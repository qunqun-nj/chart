(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{25:function(e,a,t){var i=t(26);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,t(1).default)("data-quickpaper-944f50e2",i,!0)},26:function(e,a,t){(e.exports=t(0)(!1)).push([e.i,"",""])},29:function(e,a,t){"use strict";t.r(a);var i=[],n=null,r=function(e,a){a=a||60;var t=document.getElementById("root-view");if(e){var r=document.getElementById("fixed-"+e);if(r){var o=r.offsetTop-a,c=t.scrollTop||0;!function(e,a,t){arguments.length<2&&(a=400);var r={timer:function(e,a,t){if(!e)throw new Error("Tick is required!");var n=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return i.push({id:n,createTime:new Date,tick:e,duration:a,callback:t}),r.start(),n},start:function(){n||(n=setInterval(r.tick,13))},tick:function(){var e,a,t,n,o,c,p,u=i;for((i=[]).length=0,a=0;a<u.length;a++)e=(o=u[a]).createTime,t=o.tick,c=o.duration,n=o.callback,!1,(p=(+new Date-e)/c)>=1&&!0,t(p=p>1?1:p),p<1&&o.id?i.push(o):n&&n(p);i.length<=0&&r.stop()},stop:function(){n&&(clearInterval(n),n=null)}},o=r.timer((function(a){e(a)}),a,t)}((function(e){t.scrollTop=(o-c)*e+c}),500,(function(){t.scrollTop=o}))}}else t.scrollTop=0},o={start:function(){return t.e(2).then(t.bind(null,31))}},c={data:function(){return{page:null,pagename:""}},mounted:function(){var e=this.urlFormat(window.location.href);this.openPage(e.router[1]in o?e.router[1]:"start",e.params.fixed||"top")},methods:{openPage:function(e,a,t){var i=this;o[e]().then((function(n){i.page=n.default,i.pagename=e,"no"==t&&(window.location.href="#/api/"+e+"?fixed="+a),r(a)}))},doScroll:function(e){window.location.href="#/api/"+this.pagename+"?fixed="+e,r(e)}}};t(25);c.render=function(e){return e("div",{class:"nav-view",quickpaper:"","data-quickpaper-944f50e2":""},[e("div",{class:"menu","data-quickpaper-944f50e2":""},[e("ul",{":active":'pagename=="start"?"yes":"no"',"data-quickpaper-944f50e2":""},[e("li",{"data-quickpaper-944f50e2":""},[e("h3",{"@click":'openPage("start","top","no")',"data-quickpaper-944f50e2":""},["开始使用"]),e("ul",{"data-quickpaper-944f50e2":""},[e("li",{"data-quickpaper-944f50e2":""},[e("h4",{"@click":'doScroll("platform")',"data-quickpaper-944f50e2":""},["兼容更多平台"]),e("ul",{"data-quickpaper-944f50e2":""},[e("li",{"data-quickpaper-944f50e2":""},[e("h5",{"@click":'doScroll("uni-app")',"data-quickpaper-944f50e2":""},["uni-app"])]),e("li",{"data-quickpaper-944f50e2":""},[e("h5",{"@click":'doScroll("weixin")',"data-quickpaper-944f50e2":""},["微信小程序"])])])]),e("li",{"data-quickpaper-944f50e2":""},[e("h4",{"@click":'doScroll("issue")',"data-quickpaper-944f50e2":""},["反馈"])])])])])]),e("div",{id:"root-view",class:"view","data-quickpaper-944f50e2":""},[e("div",{"data-quickpaper-944f50e2":""},[e("component",{":is":"page","data-quickpaper-944f50e2":""},[])])])])};a.default=c}}]);
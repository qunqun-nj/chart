(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{36:function(a,e,c){var p=c(37);"string"==typeof p&&(p=[[a.i,p,""]]),p.locals&&(a.exports=p.locals);(0,c(1).default)("data-quickpaper-c62e3210",p,!0)},37:function(a,e,c){(a.exports=c(0)(!1)).push([a.i,"\n .subtitle{\n\nfont-size: 18px;\n\ntext-indent: 0;\n\n}\n",""])},45:function(a,e,c){"use strict";c.r(e);var p={};c(36);p.render=function(a){return a("div",{class:"doc-view",quickpaper:"","data-quickpaper-c62e3210":""},[a("header",{id:"fixed-top","data-quickpaper-c62e3210":""},["第一步：获取图表对象"]),a("p",{"data-quickpaper-c62e3210":""},["首先，我们以web端为例，在使用前，你需要首先创建",a("span",{class:"important","data-quickpaper-c62e3210":""},["图表对象"]),"："]),a("pre",{"q-code":"","data-quickpaper-c62e3210":""},["import Clunch from 'clunch';↵↵// myChart就是完成了初始化的图表对象(下同)↵let myChart = PlainChart.init(Clunch, document.getElementById('canvas'));"]),a("p",{"data-quickpaper-c62e3210":""},[a("span",{class:"important","data-quickpaper-c62e3210":""},["图表对象"]),"上有很多方法，使用上面的方法，就可以完成各种绘图等操作。"]),a("h2",{id:"fixed-platform","data-quickpaper-c62e3210":""},["兼容更多平台"]),a("p",{"data-quickpaper-c62e3210":""},["由于本库基于的",a("a",{href:"https://hai2007.gitee.io/clunch",target:"_blank",class:"link","data-quickpaper-c62e3210":""},["框架clunch"]),"是跨平台的，因此，本项目的跨平台和其保持一致。"]),a("h3",{id:"fixed-uni-app","data-quickpaper-c62e3210":""},["uni-app"]),a("p",{"data-quickpaper-c62e3210":""},["首先，你需要引入uni-app组件，引入以后需要进行注册："]),a("pre",{"q-code":"","data-quickpaper-c62e3210":""},["import uiClunch from 'clunch/platform/uni-app/index.vue';↵↵export default {↵    components:{↵        uiClunch↵    }↵};"]),a("p",{"data-quickpaper-c62e3210":""},["注册完毕就可以在页面中使用了："]),a("pre",{"q-code":"html","data-quickpaper-c62e3210":""},["<ui-clunch ref='clunch' width='100vw' height='100vh-10px'></ui-clunch>"]),a("p",{class:"warn","data-quickpaper-c62e3210":""},["温馨提示：上面的宽、高属性支持常见的运算，除了数字外，还支持px、vh、vw和rpx等单位。"]),a("p",{"data-quickpaper-c62e3210":""},["最后，进行初始化并获取",a("span",{class:"important","data-quickpaper-c62e3210":""},["图表对象"]),"："]),a("pre",{"q-code":"","data-quickpaper-c62e3210":""},["PlainChart(function (options, serieslist) {↵    return new Promise(resolve => {↵↵        // 第一步：创建对象↵        let clunch = this.$refs.clunch.new(options,serieslist);↵↵        // 第二步：标记已解决↵        resolve(clunch);↵↵    });↵}).then(myChart => {});"]),a("h3",{id:"fixed-weixin","data-quickpaper-c62e3210":""},["微信小程序"]),a("p",{"data-quickpaper-c62e3210":""},["首先，你需要配置配置初始化命令："]),a("pre",{"q-code":"","data-quickpaper-c62e3210":""},['// package.json↵{↵    "init-clunch": "clunch --weixin ./ui-clunch"↵}']),a("p",{"data-quickpaper-c62e3210":""},["然后执行一下："]),a("pre",{"q-code":"","data-quickpaper-c62e3210":""},["npm run init-clunch"]),a("p",{"data-quickpaper-c62e3210":""},["接着，你还需要构建npm（通过在微信小程序开发工具界面的『工具』->『构建 npm』）。"]),a("p",{"data-quickpaper-c62e3210":""},["然后注册组件："]),a("pre",{"q-code":"","data-quickpaper-c62e3210":""},['// page.json↵{↵    "usingComponents": {↵        "ui-clunch": "../../ui-clunch/index"↵    }↵}']),a("p",{"data-quickpaper-c62e3210":""},["注册完毕就可以在页面中使用了："]),a("pre",{"q-code":"html","data-quickpaper-c62e3210":""},["<ui-clunch id='clunch' width='200px' height='100px'></ui-clunch>"]),a("p",{class:"warn","data-quickpaper-c62e3210":""},["温馨提示：上面的宽、高属性支持常见的运算，除了数字外，还支持px、vh、vw和rpx等单位。"]),a("p",{"data-quickpaper-c62e3210":""},["同样的，最后，进行初始化并获取",a("span",{class:"important","data-quickpaper-c62e3210":""},["图表对象"]),"："]),a("pre",{"q-code":"","data-quickpaper-c62e3210":""},["PlainChart(function (options, serieslist) {↵    return new Promise(resolve => {↵↵        // 第一步：创建对象↵        this.selectComponent('#clunch').new(options,serieslist,clunch=>{↵↵            // 第二步：标记已解决↵            resolve(clunch);↵↵        });↵↵    });↵}).then(myChart => {});"]),a("h2",{id:"fixed-issue","data-quickpaper-c62e3210":""},["反馈"]),a("p",{class:"important subtitle","data-quickpaper-c62e3210":""},["你也可以和我们一起做贡献！"]),a("p",{"data-quickpaper-c62e3210":""},["我们的最终目的是兼容所有端，如果没有你需要的端，可以去",a("a",{href:"https://github.com/hai2007/clunch/issues",target:"_blank",class:"link","data-quickpaper-c62e3210":""},["clunch.js"]),"或",a("a",{href:"https://github.com/clunch-contrib/chart/issues",target:"_blank",class:"link","data-quickpaper-c62e3210":""},["本项目"]),"给我们提issue~"]),a("p",{"data-quickpaper-c62e3210":""},["同时，非常欢迎你加入我们，参与项目的设计、开发和维护，成为长期稳定的贡献者，和我们保持密切的联系。最终，我们会带着初心矢志不渝的坚持维护，并永远保持自由、开源、讨论和进步。"])])};e.default=p}}]);
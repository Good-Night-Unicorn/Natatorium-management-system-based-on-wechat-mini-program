(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{"221b":function(r,e,i){var t=i("5256");"string"===typeof t&&(t=[[r.i,t,""]]),t.locals&&(r.exports=t.locals);var a=i("4f06").default;a("351d1112",t,!0,{sourceMap:!1,shadowMode:!1})},"2e23":function(r,e,i){"use strict";var t=i("beed"),a=i.n(t);a.a},"2e61":function(r,e,i){"use strict";var t=i("221b"),a=i.n(t);a.a},3735:function(r,e,i){"use strict";i.r(e);var t=i("a690"),a=i("48c7");for(var n in a)"default"!==n&&function(r){i.d(e,r,(function(){return a[r]}))}(n);i("2e61"),i("2e23");var o,u=i("f0c5"),d=Object(u["a"])(a["default"],t["b"],t["c"],!1,null,"29d91b5e",null,!1,t["a"],o);e["default"]=d.exports},"48c7":function(r,e,i){"use strict";i.r(e);var t=i("4e2d"),a=i.n(t);for(var n in t)"default"!==n&&function(r){i.d(e,r,(function(){return t[r]}))}(n);e["default"]=a.a},"4e2d":function(r,e,i){"use strict";var t=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("28a5"),i("96cf");var a=t(i("3b8d")),n={data:function(){return{huiyuanxingbieOptions:[],huiyuanxingbieIndex:0,ruleForm:{},emailcode:"",tableName:""}},onLoad:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(){var e;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:[],e=uni.getStorageSync("loginTable"),this.tableName=e,"huiyuan"==this.tableName&&(this.huiyuanxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.huiyuanxingbieOptions[0]),this.styleChange();case 5:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),methods:{huiyuanxingbieChange:function(r){this.huiyuanxingbieIndex=r.target.value,this.ruleForm.xingbie=this.huiyuanxingbieOptions[this.huiyuanxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var r=(0,a.default)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(this.ruleForm.huiyuanzhanghao||"huiyuan"!=this.tableName){r.next=3;break}return this.$utils.msg("会员账号不能为空"),r.abrupt("return");case 3:if(this.ruleForm.mima||"huiyuan"!=this.tableName){r.next=6;break}return this.$utils.msg("密码不能为空"),r.abrupt("return");case 6:if("huiyuan"!=this.tableName||this.ruleForm.mima==this.ruleForm.mima2){r.next=9;break}return this.$utils.msg("两次密码输入不一致"),r.abrupt("return");case 9:if(this.ruleForm.huiyuanxingming||"huiyuan"!=this.tableName){r.next=12;break}return this.$utils.msg("会员姓名不能为空"),r.abrupt("return");case 12:if("huiyuan"!=this.tableName||!this.ruleForm.lianxifangshi||this.$validate.isMobile(this.ruleForm.lianxifangshi)){r.next=15;break}return this.$utils.msg("联系方式应输入手机格式"),r.abrupt("return");case 15:return r.next=17,this.$api.register("".concat(this.tableName),this.ruleForm,this.emailcode);case 17:this.$utils.msgBack("注册成功");case 19:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}()}};e.default=n},5256:function(r,e,i){var t=i("24fb");e=t(!1),e.push([r.i,".btn-submit[data-v-29d91b5e]{height:auto!important;line-height:%?88?%}",""]),r.exports=e},a690:function(r,e,i){"use strict";var t,a=function(){var r=this,e=r.$createElement,i=r._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"box",style:{padding:"60rpx 120rpx",boxShadow:" 0px 6rpx 12rpx rgba(0, 0, 0, 0.16)",margin:"0 5%",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"90%",borderStyle:"solid",height:"auto"}},[i("v-uni-view",{staticClass:"logo",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-image",{style:{padding:"0",boxShadow:"0 0 0px #59f43e",margin:"0 auto",borderColor:"#ccc",borderRadius:"40rpx",borderWidth:"0",width:"160rpx",borderStyle:"solid",url:"http://codegen.caihongy.cn/20220211/2eff605617a840bcb954b9faaabcf77b.jfif",isShow:!0,height:"160rpx"},attrs:{src:"http://codegen.caihongy.cn/20220211/2eff605617a840bcb954b9faaabcf77b.jfif",mode:"aspectFill"}})],1),"huiyuan"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(229, 229, 229, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"会员账号"},model:{value:r.ruleForm.huiyuanzhanghao,callback:function(e){r.$set(r.ruleForm,"huiyuanzhanghao",e)},expression:"ruleForm.huiyuanzhanghao"}})],1):r._e(),"huiyuan"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(229, 229, 229, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"密码"},model:{value:r.ruleForm.mima,callback:function(e){r.$set(r.ruleForm,"mima",e)},expression:"ruleForm.mima"}})],1):r._e(),"huiyuan"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column"},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(229, 229, 229, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"password",name:"",placeholder:"确认密码"},model:{value:r.ruleForm.mima2,callback:function(e){r.$set(r.ruleForm,"mima2",e)},expression:"ruleForm.mima2"}})],1):r._e(),"huiyuan"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(229, 229, 229, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"会员姓名"},model:{value:r.ruleForm.huiyuanxingming,callback:function(e){r.$set(r.ruleForm,"huiyuanxingming",e)},expression:"ruleForm.huiyuanxingming"}})],1):r._e(),"huiyuan"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-picker",{attrs:{value:r.huiyuanxingbieIndex,range:r.huiyuanxingbieOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.huiyuanxingbieChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{padding:"0 20rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(229, 229, 229, 1)",backgroundColor:"rgba(255, 255, 255, 1)",color:"rgba(135, 133, 133, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(r.ruleForm.xingbie?r.ruleForm.xingbie:"请选择性别"))])],1)],1):r._e(),"huiyuan"==r.tableName?i("v-uni-view",{staticClass:"uni-form-item uni-column",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0 0 24rpx",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[i("v-uni-input",{staticClass:"uni-input",style:{padding:"0 24rpx",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(229, 229, 229, 1)",backgroundColor:"#fff",color:"#333",textAlign:"left",borderRadius:"16rpx",borderWidth:"4rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"text",name:"",placeholder:"联系方式"},model:{value:r.ruleForm.lianxifangshi,callback:function(e){r.$set(r.ruleForm,"lianxifangshi",e)},expression:"ruleForm.lianxifangshi"}})],1):r._e(),i("v-uni-button",{staticClass:"btn-submit",style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(118, 196, 97, 1)",borderRadius:"8rpx",color:"rgba(255, 255, 255, 1)",borderWidth:"0",width:"100%",fontSize:"32rpx",borderStyle:"solid",height:"88rpx"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.register.apply(void 0,arguments)}}},[r._v("注册")])],1)],1)},n=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return t}))},beed:function(r,e,i){var t=i("d81a");"string"===typeof t&&(t=[[r.i,t,""]]),t.locals&&(r.exports=t.locals);var a=i("4f06").default;a("fcb0f5f2",t,!0,{sourceMap:!1,shadowMode:!1})},d81a:function(r,e,i){var t=i("24fb");e=t(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-29d91b5e]{height:calc(100vh - 44px);overflow:auto}.content[data-v-29d91b5e]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20220214/4d1d425b19604a72b7b906cf4125e971.png);background-attachment:fixed;background-size:cover;background-position:50%}.logo[data-v-29d91b5e]{text-align:center}.logo uni-image[data-v-29d91b5e]{height:%?200?%;width:%?200?%;margin:0 0 %?60?%}.uni-form-item[data-v-29d91b5e]{margin-bottom:%?40?%;padding:0}.uni-form-item .uni-input[data-v-29d91b5e]{font-size:%?30?%;padding:7px 0}uni-button[type="primary"][data-v-29d91b5e]{background-color:#b49950;border-radius:0;font-size:%?34?%;margin-top:%?60?%}.links[data-v-29d91b5e]{text-align:center;margin-top:%?40?%;font-size:%?26?%;color:#999}.links uni-view[data-v-29d91b5e]{display:inline-block;vertical-align:top;margin:0 %?10?%}.links .link-highlight[data-v-29d91b5e]{color:#b49950}.picker-select-input[data-v-29d91b5e]{line-height:%?88?%}',""]),r.exports=e}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{356:function(t,e,r){var content=r(364);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("2ea0846c",content,!0,{sourceMap:!1})},363:function(t,e,r){"use strict";var n=r(356);r.n(n).a},364:function(t,e,r){(t.exports=r(8)(!1)).push([t.i,'.btns[data-v-7f807000]{font-size:12px;padding-bottom:20px;margin-bottom:15px;margin-top:5px;position:relative}.btns[data-v-7f807000]:after{content:"";position:absolute;bottom:0;left:0;width:100%;height:2px;background:rgba(69,76,82,.2)}.btns button[data-v-7f807000]{padding:8px 10px}.form-row[data-v-7f807000]{padding-left:20px;height:60px;width:100%;margin:0 0 10px}.form-row .el-textarea__inner[data-v-7f807000]{resize:none}.markdown-body[data-v-7f807000]{height:calc(100vh - 245px)}',""])},377:function(t,e,r){"use strict";r.r(e);var n={layout:"admin",data:function(){return{id:"",article:{_id:"",title:"",type:"",introduce:"",content_md:"",content_html:""},rules:{title:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,message:"长度需大于3",trigger:"blur"}],type:[{required:!0,message:"请选择文章类型",trigger:"change"}],introduce:[{required:!0,message:"请输入简介",trigger:"blur"},{min:10,message:"长度需大于10",trigger:"blur"}]}}},methods:{save:function(t,e){var r=this;this.$refs.articleForm.validate(function(t){if(!t)return!1;r.$confirm("确定保存?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){r.article.content_html=r.$refs.md.d_render,r.$axios.post("http://localhost:3000/article/add",r.article).then(function(t){200==t.status?(r.$message({type:"success",message:t.data.msg}),r.$router.push("/admin")):r.$message({type:"warning",message:"添加失败！"})})}).catch(function(){r.$message({type:"warning",message:"已取消保存"})})})}},mounted:function(){var t=this;this.id=this.$route.query.id||"",this.id&&this.$axios.get("http://localhost:3000/article/getArticle?id=".concat(this.id)).then(function(e){200===e.status&&(t.article=e.data.article)})}},l=(r(363),r(10)),component=Object(l.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"btns"},[r("nuxt-link",{attrs:{to:"/admin"}},[r("el-button",{attrs:{type:"info",icon:"el-icon-close",plain:""}},[t._v("退出")])],1),t._v(" "),r("el-button",{attrs:{type:"primary",icon:"el-icon-finished",plain:""},on:{click:t.save}},[t._v("保存")])],1),t._v(" "),r("el-form",{ref:"articleForm",staticClass:"demo-ruleForm",attrs:{model:t.article,rules:t.rules,"label-width":"100px","label-position":"left"}},[r("el-row",{staticClass:"form-row"},[r("el-col",{attrs:{span:5}},[r("el-form-item",{attrs:{label:"标题",prop:"title"}},[r("el-input",{attrs:{placeholder:"请输入文章标题"},model:{value:t.article.title,callback:function(e){t.$set(t.article,"title",e)},expression:"article.title"}})],1)],1),t._v(" "),r("el-col",{attrs:{span:4,offset:1}},[r("el-form-item",{attrs:{label:"类型",prop:"type"}},[r("el-select",{attrs:{placeholder:"请选择文章类型"},model:{value:t.article.type,callback:function(e){t.$set(t.article,"type",e)},expression:"article.type"}},[r("el-option",{attrs:{label:"Css",value:"Css"}}),t._v(" "),r("el-option",{attrs:{label:"Javascript",value:"Javascript"}})],1)],1)],1),t._v(" "),r("el-col",{attrs:{span:12,offset:1}},[r("el-form-item",{attrs:{label:"简介",prop:"introduce"}},[r("el-input",{attrs:{placeholder:"文章简介..."},model:{value:t.article.introduce,callback:function(e){t.$set(t.article,"introduce",e)},expression:"article.introduce"}})],1)],1)],1),t._v(" "),r("mavon-editor",{ref:"md",on:{save:t.save},model:{value:t.article.content_md,callback:function(e){t.$set(t.article,"content_md",e)},expression:"article.content_md"}})],1)],1)},[],!1,null,"7f807000",null);e.default=component.exports}}]);
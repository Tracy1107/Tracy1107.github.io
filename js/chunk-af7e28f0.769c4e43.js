(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-af7e28f0"],{b30a:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("CCard",[o("CCardBody",[o("h4",{staticStyle:{color:"#8c5c7d"}},[o("CIcon",{attrs:{name:"cil-people",size:"lg"}}),e._v(" 帳號管理")],1),o("hr",{staticClass:"mt-0 mb-2"}),o("CRow",{staticClass:"pt-2"},[o("CCol",{attrs:{md:"3"}},[o("CButton",{staticClass:"mr-2 mb-4",attrs:{variant:"outline",color:"info"},on:{click:e.openSearchModal}},[o("font-awesome-icon",{attrs:{icon:"search"}}),e._v(" 查詢")],1),o("CButton",{staticClass:"mr-2 mb-4",attrs:{variant:"outline",color:"info"},on:{click:e.openAddModal}},[o("font-awesome-icon",{attrs:{icon:"user-plus"}}),e._v(" 新增")],1)],1)],1),o("CModal",{attrs:{show:e.searchModal,"no-close-on-backdrop":!0,title:"查詢帳號",color:"info"},on:{"update:show":function(t){e.searchModal=t}},scopedSlots:e._u([{key:"footer",fn:function(){return[o("CButton",{attrs:{color:"secondary"},on:{click:function(t){e.searchModal=!1}}},[e._v("取消")]),o("CButton",{attrs:{color:"info"},on:{click:e.Search}},[e._v("查詢")])]},proxy:!0}])},[o("CForm",[o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-3 col-form-label text-center"},[e._v("帳號")]),o("div",{staticClass:"col-sm-8"},[o("multiselect",{attrs:{options:e.optionsAccount,selectLabel:"選取",deselectLabel:"取消",placeholder:"輸入幾碼搜尋"},on:{open:e.openOptionsAccount},model:{value:e.searchObj.account,callback:function(t){e.$set(e.searchObj,"account",t)},expression:"searchObj.account"}})],1)]),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-3 col-form-label text-center"},[e._v("姓名")]),o("div",{staticClass:"col-sm-8"},[o("multiselect",{attrs:{options:e.optionsName,selectLabel:"選取",deselectLabel:"取消",placeholder:"輸入幾碼搜尋"},on:{open:e.openOptionsName},model:{value:e.searchObj.name,callback:function(t){e.$set(e.searchObj,"name",t)},expression:"searchObj.name"}})],1)]),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-3 col-form-label text-center"},[e._v("工號")]),o("div",{staticClass:"col-sm-8"},[o("multiselect",{attrs:{options:e.optionsJobNum,selectLabel:"選取",deselectLabel:"取消",placeholder:"輸入幾碼搜尋"},on:{open:e.openOptionsJobNum},model:{value:e.searchObj.jobNum,callback:function(t){e.$set(e.searchObj,"jobNum",t)},expression:"searchObj.jobNum"}})],1)]),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-3 col-form-label text-center"},[e._v("部門")]),o("div",{staticClass:"col-sm-8"},[o("multiselect",{attrs:{options:e.optionsDept,selectLabel:"選取",deselectLabel:"取消",placeholder:"輸入幾碼搜尋"},on:{open:e.openOptionsDept},model:{value:e.searchObj.dept,callback:function(t){e.$set(e.searchObj,"dept",t)},expression:"searchObj.dept"}})],1)]),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-sm-3 col-form-label text-center"},[e._v("權限")]),o("div",{staticClass:"col-sm-8"},[o("multiselect",{attrs:{options:e.optionsRole,selectLabel:"選取",deselectLabel:"取消",placeholder:"輸入幾碼搜尋"},on:{open:e.openOptionsRole},model:{value:e.searchObj.role,callback:function(t){e.$set(e.searchObj,"role",t)},expression:"searchObj.role"}})],1)])])],1),o("CModal",{attrs:{show:e.addModal,"no-close-on-backdrop":!0,title:"新增帳號",color:"info"},on:{"update:show":function(t){e.addModal=t}},scopedSlots:e._u([{key:"footer",fn:function(){return[o("CButton",{attrs:{color:"secondary"},on:{click:function(t){e.addModal=!1}}},[e._v("取消")]),o("CButton",{attrs:{color:"info"},on:{click:e.Add}},[e._v("新增")])]},proxy:!0}])},[o("CForm",{staticClass:"px-5 py-2"},[e.bExist?o("div",{staticClass:"small text-danger float-right"},[e._v("此帳號已存在!")]):e._e(),o("CInput",{attrs:{placeholder:"帳號",autocomplete:"username"},on:{input:e.checkAccount},scopedSlots:e._u([{key:"prepend-content",fn:function(){return[o("CIcon",{attrs:{name:"cil-user"}})]},proxy:!0}]),model:{value:e.addObj.account,callback:function(t){e.$set(e.addObj,"account",t)},expression:"addObj.account"}}),o("CInput",{attrs:{placeholder:"姓名",autocomplete:"username"},scopedSlots:e._u([{key:"prepend-content",fn:function(){return[o("CIcon",{attrs:{name:"cil-user"}})]},proxy:!0}]),model:{value:e.addObj.name,callback:function(t){e.$set(e.addObj,"name",t)},expression:"addObj.name"}}),o("CInput",{attrs:{placeholder:"工號",autocomplete:"username"},scopedSlots:e._u([{key:"prepend-content",fn:function(){return[o("CIcon",{attrs:{name:"cil-user"}})]},proxy:!0}]),model:{value:e.addObj.jobNum,callback:function(t){e.$set(e.addObj,"jobNum",t)},expression:"addObj.jobNum"}}),o("div",[o("multiselect",{attrs:{options:e.optionsDept,selectLabel:"選取",deselectLabel:"取消",placeholder:"部門"},on:{open:e.openOptionsDept},model:{value:e.addObj.dept,callback:function(t){e.$set(e.addObj,"dept",t)},expression:"addObj.dept"}})],1),o("div",{staticClass:"py-2"},[o("multiselect",{attrs:{options:e.optionsRole,selectLabel:"選取",deselectLabel:"取消",placeholder:"權限"},on:{open:e.openOptionsRole},model:{value:e.addObj.role,callback:function(t){e.$set(e.addObj,"role",t)},expression:"addObj.role"}})],1),o("CInput",{attrs:{placeholder:"密碼",type:"password",autocomplete:"new-password"},scopedSlots:e._u([{key:"prepend-content",fn:function(){return[o("CIcon",{attrs:{name:"cil-lock-locked"}})]},proxy:!0}]),model:{value:e.addObj.password,callback:function(t){e.$set(e.addObj,"password",t)},expression:"addObj.password"}}),e.bDiff?o("div",{staticClass:"small text-danger float-right"},[e._v("確認密碼與密碼不符!")]):e._e(),o("CInput",{staticClass:"mb-4",attrs:{placeholder:"確認密碼",type:"password",autocomplete:"new-password"},on:{input:e.checkPassword},scopedSlots:e._u([{key:"prepend-content",fn:function(){return[o("CIcon",{attrs:{name:"cil-lock-locked"}})]},proxy:!0}]),model:{value:e.addObj.confirmPassword,callback:function(t){e.$set(e.addObj,"confirmPassword",t)},expression:"addObj.confirmPassword"}})],1)],1),o("CModal",{attrs:{show:e.modifyModal,"no-close-on-backdrop":!0,title:"修改基本資料",color:"info"},on:{"update:show":function(t){e.modifyModal=t}},scopedSlots:e._u([{key:"footer",fn:function(){return[o("CButton",{attrs:{color:"secondary"},on:{click:function(t){e.modifyModal=!1}}},[e._v("取消")]),o("CButton",{attrs:{color:"info"},on:{click:e.Modify}},[e._v("存檔")])]},proxy:!0}])},[o("CForm",{staticClass:"px-5 py-2"},[o("CInput",{attrs:{disabled:"",placeholder:"帳號",autocomplete:"username"},on:{input:e.checkAccount},scopedSlots:e._u([{key:"prepend-content",fn:function(){return[o("CIcon",{attrs:{name:"cil-user"}})]},proxy:!0}]),model:{value:e.modifyObj.account,callback:function(t){e.$set(e.modifyObj,"account",t)},expression:"modifyObj.account"}}),o("CInput",{attrs:{placeholder:"姓名",autocomplete:"username"},scopedSlots:e._u([{key:"prepend-content",fn:function(){return[o("CIcon",{attrs:{name:"cil-user"}})]},proxy:!0}]),model:{value:e.modifyObj.name,callback:function(t){e.$set(e.modifyObj,"name",t)},expression:"modifyObj.name"}}),o("CInput",{attrs:{placeholder:"工號",autocomplete:"username"},scopedSlots:e._u([{key:"prepend-content",fn:function(){return[o("CIcon",{attrs:{name:"cil-user"}})]},proxy:!0}]),model:{value:e.modifyObj.jobNum,callback:function(t){e.$set(e.modifyObj,"jobNum",t)},expression:"modifyObj.jobNum"}}),o("div",[o("multiselect",{attrs:{options:e.optionsDept,selectLabel:"選取",deselectLabel:"取消",placeholder:"部門"},on:{open:e.openOptionsDept},model:{value:e.modifyObj.dept,callback:function(t){e.$set(e.modifyObj,"dept",t)},expression:"modifyObj.dept"}})],1),o("div",{staticClass:"py-2"},[o("multiselect",{attrs:{options:e.optionsRole,selectLabel:"選取",deselectLabel:"取消",placeholder:"權限"},on:{open:e.openOptionsRole},model:{value:e.modifyObj.role,callback:function(t){e.$set(e.modifyObj,"role",t)},expression:"modifyObj.role"}})],1)],1)],1),o("CModal",{attrs:{show:e.modifyPsModal,"no-close-on-backdrop":!0,title:"重設密碼",color:"info"},on:{"update:show":function(t){e.modifyPsModal=t}},scopedSlots:e._u([{key:"footer",fn:function(){return[o("CButton",{attrs:{color:"secondary"},on:{click:function(t){e.modifyPsModal=!1}}},[e._v("取消")]),o("CButton",{attrs:{color:"info"},on:{click:e.ModifyPassword}},[e._v("存檔")])]},proxy:!0}])},[o("CForm",{staticClass:"px-5 py-2"},[o("CInput",{attrs:{disabled:"",placeholder:"帳號",autocomplete:"username"},on:{input:e.checkAccount},scopedSlots:e._u([{key:"prepend-content",fn:function(){return[o("CIcon",{attrs:{name:"cil-user"}})]},proxy:!0}]),model:{value:e.modifyObj.account,callback:function(t){e.$set(e.modifyObj,"account",t)},expression:"modifyObj.account"}}),o("CInput",{attrs:{placeholder:"新密碼",type:"password",autocomplete:"new-password"},scopedSlots:e._u([{key:"prepend-content",fn:function(){return[o("CIcon",{attrs:{name:"cil-lock-locked"}})]},proxy:!0}]),model:{value:e.modifyObj.password,callback:function(t){e.$set(e.modifyObj,"password",t)},expression:"modifyObj.password"}}),e.bDiff?o("div",{staticClass:"small text-danger float-right"},[e._v("確認密碼與密碼不符!")]):e._e(),o("CInput",{staticClass:"mb-4",attrs:{placeholder:"確認新密碼",type:"password",autocomplete:"new-password"},on:{input:e.checkNewPassword},scopedSlots:e._u([{key:"prepend-content",fn:function(){return[o("CIcon",{attrs:{name:"cil-lock-locked"}})]},proxy:!0}]),model:{value:e.modifyObj.confirmPassword,callback:function(t){e.$set(e.modifyObj,"confirmPassword",t)},expression:"modifyObj.confirmPassword"}})],1)],1),o("h6",{staticClass:"float-right"},[e._v("資料筆數: "),o("CBadge",{attrs:{color:"warning"}},[e._v(e._s(e.items.length))])],1),o("CDataTable",{staticClass:"text-center",attrs:{hover:e.hover,striped:e.striped,bordered:e.bordered,small:e.small,fixed:e.fixed,items:e.items,fields:e.fields,"items-per-page":e.small?20:50,dark:e.dark,border:"",pagination:""},scopedSlots:e._u([{key:"no-items-view",fn:function(){return[o("br"),o("h5",[e._v(" 無資料 ")]),o("br")]},proxy:!0},{key:"start_time",fn:function(t){var s=t.item;return[o("td",[e._v(" "+e._s(e.formatTime(s.start_time))+" ")])]}},{key:"action",fn:function(t){var s=t.item;return[o("td",{staticClass:"p-1"},[o("CButton",{staticClass:"mx-1 my-1",attrs:{type:"reset",variant:"outline",color:"info"},on:{click:function(t){return e.openModifyModal(s)}}},[o("font-awesome-icon",{attrs:{icon:"pencil-alt"}}),e._v(" 修改基本資料")],1),o("CButton",{staticClass:"mx-1 my-1",attrs:{type:"reset",variant:"outline",color:"info"},on:{click:function(t){return e.openModifyPsModal(s)}}},[o("font-awesome-icon",{attrs:{icon:"key"}}),e._v(" 重設密碼")],1),o("CButton",{staticClass:"mx-1 my-1",attrs:{type:"reset",color:"danger"},on:{click:function(t){return e.Delete(s)}}},[o("font-awesome-icon",{attrs:{icon:"trash-alt"}}),e._v(" 刪除")],1)],1)]}}])})],1)],1)],1)},a=[],n=(o("bd76"),{name:"Users",data:function(){return{searchModal:!1,addModal:!1,modifyModal:!1,modifyPsModal:!1,searchObj:{account:"",name:"",jobNum:"",dept:"",role:""},addObj:{account:"",name:"",jobNum:"",dept:"",role:"",password:"",confirmPassword:""},modifyObj:{account:"",name:"",jobNum:"",dept:"",role:"",password:"",confirmPassword:""},optionsAccount:[],optionsName:[],optionsJobNum:[],optionsDept:[],optionsRole:[],items:[],fields:[{key:"account",label:"帳號",_style:"background:#FFFFF1"},{key:"name",label:"姓名",_style:"background:#FFFFF1"},{key:"job_number",label:"工號",_style:"background:#FFFFF1"},{key:"dept",label:"部門",_style:"background:#FFFFF1"},{key:"role",label:"權限",_style:"background:#FFFFF1"},{key:"action",label:"操作",_style:"background:#FFFFF1"}],hover:!0,striped:!0,bordered:!0,small:!1,fixed:!0,dark:!1,bExist:!1,bDiff:!1}},paginationProps:{align:"center",doubleArrows:!1,previousButtonHtml:"prev",nextButtonHtml:"next"},created:function(){var e=this;this.$http.get("/api/accounts").then((function(t){e.items=t.data,e.optionsAccount=[];for(var o=0;o<t.data.length;o++)e.optionsAccount.push(t.data[o].account)})).catch((function(e){console.log(e.response.data.message)}))},methods:{openSearchModal:function(){this.searchObj.account=null,this.searchObj.name=null,this.searchObj.jobNum=null,this.searchObj.dept=null,this.searchObj.role=null,this.searchModal=!0},openAddModal:function(){this.addModal=!0},openModifyModal:function(e){this.modifyObj.account=e.account,this.modifyObj.name=e.name,this.modifyObj.jobNum=e.job_number,this.modifyObj.dept=e.dept,this.modifyObj.role=e.role,this.modifyModal=!0},openModifyPsModal:function(e){this.modifyObj.account=e.account,this.modifyObj.password="",this.modifyObj.confirmPassword="",this.modifyPsModal=!0},openOptionsAccount:function(){var e=this;this.optionsAccount=[],this.$http.get("/api/accounts").then((function(t){for(var o=0;o<t.data.length;o++)e.optionsAccount.push(t.data[o].account)})).catch((function(e){console.log(e.response.data.message)}))},openOptionsName:function(){var e=this;this.optionsName=[],this.$http.get("/api/accounts").then((function(t){for(var o=0;o<t.data.length;o++)e.optionsName.push(t.data[o].name)})).catch((function(e){console.log(e.response.data.message)}))},openOptionsJobNum:function(){var e=this;this.optionsJobNum=[],this.$http.get("/api/accounts").then((function(t){for(var o=0;o<t.data.length;o++)e.optionsJobNum.push(t.data[o].job_number)})).catch((function(e){console.log(e.response.data.message)}))},openOptionsDept:function(){var e=this;this.optionsDept=[],this.$http.get("/api/accounts").then((function(t){for(var o=0;o<t.data.length;o++)e.optionsDept.push(t.data[o].dept)})).catch((function(e){console.log(e.response.data.message)}))},openOptionsRole:function(){var e=this;this.optionsRole=[],this.$http.get("/api/accounts").then((function(t){for(var o=0;o<t.data.length;o++)e.optionsRole.push(t.data[o].role)})).catch((function(e){console.log(e.response.data.message)}))},Search:function(){var e=this,t={account:this.searchObj.account,name:this.searchObj.name,job_number:this.searchObj.jobNum,dept:this.searchObj.dept,role:this.searchObj.role};this.$http.get("/api/accounts/find",{params:t}).then((function(t){e.items=t.data})).catch((function(e){console.log(e.response.data.message)})),this.searchModal=!1},Add:function(){var e=this;if(!this.bExist&&this.addObj.account)if(!this.bDiff&&this.addObj.password){var t={account:this.addObj.account,name:this.addObj.name,job_number:this.addObj.jobNum,dept:this.addObj.dept,role:this.addObj.role,password:this.addObj.password};this.$http.post("/api/accounts",{data:t}).then((function(o){e.items.splice(0,0,t)})).catch((function(e){console.log(e.response.data.message)})),this.addModal=!1}else alert("請確認輸入之密碼是否正確");else alert("請確認輸入之帳號是否正確!")},checkAccount:function(){var e=this,t={account:this.addObj.account};this.$http.post("/api/accounts/checkAccount",{data:t}).then((function(t){t.data.length>0?e.bExist=!0:e.bExist=!1})).catch((function(e){console.log(e.response.data.message)}))},checkPassword:function(){var e=String(this.addObj.password),t=String(this.addObj.confirmPassword),o=e.split(""),s=t.split("");if(s.length>o.length)this.bDiff=!0;else for(var a=0;a<s.length;a++)s[a]!==o[a]?this.bDiff=!0:this.bDiff=!1},checkNewPassword:function(){var e=String(this.modifyObj.password),t=String(this.modifyObj.confirmPassword),o=e.split(""),s=t.split("");if(s.length>o.length)this.bDiff=!0;else for(var a=0;a<s.length;a++)s[a]!==o[a]?this.bDiff=!0:this.bDiff=!1},Delete:function(e){var t=this;if(confirm("確定要將帳號:"+e.account+"，這筆資料刪除?")){e.account;this.$http.delete("/api/accounts/".concat(e.account)).then((function(o){var s=t.items.findIndex((function(t){return t.account===e.account}));t.items.splice(s,1)})).catch((function(e){console.log(e.response.data.message)}))}},Modify:function(){var e=this,t={name:this.modifyObj.name,job_number:this.modifyObj.jobNum,dept:this.modifyObj.dept,role:this.modifyObj.role};this.$http.put("/api/accounts/".concat(this.modifyObj.account),{data:t}).then((function(t){var o=e.items.findIndex((function(t){return t.account===e.modifyObj.account}));e.items[o].name=e.modifyObj.name,e.items[o].job_number=e.modifyObj.jobNum,e.items[o].dept=e.modifyObj.dept,e.items[o].role=e.modifyObj.role})).catch((function(e){console.log(e.response.data.message)})),this.modifyModal=!1},ModifyPassword:function(){var e={account:this.modifyObj.account,password:this.modifyObj.password};this.$http.post("/api/accounts/updatePwd",{data:e}).then((function(e){alert("新密碼設定完成")})).catch((function(e){console.log(e.response.data.message)})),this.modifyPsModal=!1}}}),c=n,i=o("2877"),r=Object(i["a"])(c,s,a,!1,null,null,null);t["default"]=r.exports},bd76:function(e,t,o){"use strict";var s=[{username:"Samppa Nori",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Estavan Lykos",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Chetan Mohamed",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Derick Maximinus",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Friderik Dávid",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Yiorgos Avraamu",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Avram Tarasios",registered:"2012/02/01",role:"Staff",status:"Banned",_classes:"table-success"},{username:"Quintin Ed",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Enéas Kwadwo",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Agapetus Tadeáš",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Carwyn Fachtna",registered:"2012/01/01",role:"Member",status:"Active",_classes:"table-success"},{username:"Nehemiah Tatius",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Ebbe Gemariah",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Eustorgios Amulius",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Leopold Gáspár",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Pompeius René",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Paĉjo Jadon",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Micheal Mercurius",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Ganesha Dubhghall",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Hiroto Šimun",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Vishnu Serghei",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Zbyněk Phoibos",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Einar Randall",registered:"2012/02/01",role:"Admin",status:"Inactive",_classes:"table-danger"},{username:"Félix Troels",registered:"2012/03/21",role:"Staff",status:"Active"},{username:"Aulus Agmundr",registered:"2012/01/01",role:"Member",status:"Pending"}];t["a"]=s}}]);
//# sourceMappingURL=chunk-af7e28f0.769c4e43.js.map
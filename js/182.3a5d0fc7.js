"use strict";(self["webpackChunkproyecto_final_vue"]=self["webpackChunkproyecto_final_vue"]||[]).push([[182],{5182:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("table",{staticClass:"table"},[t._m(1),a("tbody",[a("tr",[a("td",[t._v(t._s(this.$route.params.producto.marca)+" "+t._s(this.$route.params.producto.modelo))]),a("td",[a("button",{staticClass:"btn btn-danger",on:{click:function(e){return e.preventDefault(),t.Delete.apply(null,arguments)}}},[t._v("Delete")])]),a("td",[a("router-link",{staticClass:"btn btn-success",attrs:{to:"/Admin"}},[t._v("Admin ")])],1)])])])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"titulo"},[a("h1",{staticClass:"text-center"},[t._v("Actualizacion de stock y precio ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Producto")])])])}];const o="https://628e2cc9a339dfef87a8fd8c.mockapi.io",r=a(6166);var n={name:"Update",data:()=>({stock:0,precio:0,ventana:!1}),methods:{async Delete(){await r.delete(`${o}/api/producto/${this.$route.params.producto.id}`).then((t=>{t.data})).catch((t=>console.log(t))),null!=this.$route.params.producto.id&&this.$toastr.success("Registro eliminado!")}}},i=n,l=a(1001),u=(0,l.Z)(i,s,c,!1,null,"2f2ec101",null),d=u.exports}}]);
//# sourceMappingURL=182.3a5d0fc7.js.map
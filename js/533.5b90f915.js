"use strict";(self["webpackChunkproyecto_final_vue"]=self["webpackChunkproyecto_final_vue"]||[]).push([[533],{3899:function(t,a,s){s.d(a,{Z:function(){return f}});var r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("nav",{staticClass:"navbar navbar-expand-lg navbar-light navbar-color"},[s("div",{staticClass:"container-fluid"},[s("button",{staticClass:"btn btn-primary",attrs:{"data-bs-toggle":"modal","data-bs-target":"#carritoModal"}},[s("span",[t._v(t._s(t.getProductosEnCarritoLength))])]),s("h1",[t._v("LoRun")]),s("div",{staticClass:"modal",attrs:{id:"carritoModal",tabindex:"-1",role:"dialog","aria-labelledby":"carritoModalTitulo","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0),s("div",{staticClass:"modal-body"},[s("Carrito")],1)])])])])])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"carritoModalTitulo",attrs:{id:"carritoModalTitulo"}},[t._v("Carrito LoRun")]),s("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}})])])}],o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("button",{staticClass:"btn btn-danger",on:{click:function(a){return a.preventDefault(),t.VaciarCarrito.apply(null,arguments)}}},[t._v("Vaciar Carrito")]),s("p",[t._v("Para eliminar el producto lleve el contador a 0")]),s("table",{staticClass:"table table-striped table-bordered"},[t._m(0),s("tbody",t._l(t.getProductosEnCarrito,(function(a){return s("tr",{key:a.id,staticClass:"producto"},[s("th",{staticClass:"text-dark",attrs:{scope:"col",colspan:"10"}},[t._v(t._s(a.marca)+" "+t._s(a.modelo))]),s("th",{staticClass:"text-dark",attrs:{scope:"col",colspan:"1"}},[s("button",{on:{click:function(s){return t.Restar(a)}}},[t._v("-")]),t._v(" "+t._s(a.quantity)+" "),s("button",{on:{click:function(s){return t.Sumar(a)}}},[t._v("+")])]),s("th",{staticClass:"text-dark",attrs:{scope:"col"}},[t._v(t._s(a.stock))]),s("th",{staticClass:"text-dark",attrs:{scope:"col"}},[t._v(t._s(a.precio))]),s("th",{staticClass:"text-dark",attrs:{scope:"col"}},[t._v(t._s(a.total))])])})),0),s("tfoot",[s("td",{attrs:{scope:"col",colspan:"10"}}),s("td",{staticClass:"text-dark",attrs:{scope:"col"}},[s("h4",[t._v("Cantidad total: "+t._s(t.totalQuantity))])]),s("td",{attrs:{scope:"col"}}),s("td",{attrs:{scope:"col"}}),s("td",{staticClass:"text-dark",attrs:{scope:"col"}},[s("h5",[t._v("Precio Total: $"+t._s(t.totalFinal))])])])]),t.getProductosEnCarrito?s("div",{staticClass:"btnCompra text-center"},[s("button",{staticClass:"btn btn-dark",on:{click:function(a){return a.preventDefault(),t.Comprar.apply(null,arguments)}}},[t._v("Finalizar compra")])]):t._e()])},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",{staticClass:"text-dark"},[s("tr",[s("th",{attrs:{scope:"col",colspan:"10"}},[t._v("Productos")]),s("th",{attrs:{scope:"col",colspan:"1"}},[t._v("Cantidad")]),s("th",{attrs:{scope:"col"}},[t._v("Stock disponible ")]),s("th",{attrs:{scope:"col"}},[t._v(" Unidad $")]),s("th",{attrs:{scope:"col"}},[t._v("Total $")])])])}],c=s(4665),n={name:"Carrito",created(){this.toSetUserLogged(),this.toSetCarrito()},mounted(){this.getUserLogged,this.getProductosEnCarrito},computed:{...(0,c.Se)("carrito",["getProductosEnCarrito","getProdContador"]),...(0,c.Se)("users",["getUserLogged"]),totalQuantity(){return this.getProductosEnCarrito.reduce(((t,a)=>t+a.quantity),0)},totalFinal(){return this.getProductosEnCarrito.reduce(((t,a)=>t+parseInt(a.total)),0)},validarStock(){for(const t of Object.values(this.getProductosEnCarrito))return t.stock-t.quantity},async stockUpdate(){for(const t of Object.values(this.getProductosEnCarrito)){let a=t.id,s={stock:t.stock-t.quantity};await this.$http.put(`https://628e2cc9a339dfef87a8fd8c.mockapi.io/api/producto/${a}`,s).then((t=>t.data)).catch((t=>console.log(t)))}}},methods:{...(0,c.nv)(["toSetStock"]),...(0,c.nv)("carrito",["toVaciarProductos","toSetCarrito","toSetSumar","toSetRestar"]),...(0,c.nv)("users",["toSetUserLogged"]),VaciarCarrito(){this.toVaciarProductos(),localStorage.removeItem("carrito")},RemoveModal(){let t=document.querySelector(".modal-backdrop");null!=t&&t.remove();let a=document.querySelector("body");null!=a&&(a.style=null,a.classList=[])},async Comprar(){if(this.validarStock,!this.getUserLogged)return this.$toastr.warning("Inicia sesion para finalizar la compra");if(this.validarStock<0)return this.$toastr.warning("Verifique que haya stock disponible");if(0==this.getProductosEnCarrito)return this.$toastr.warning("Agrega un producto al carrito");{let t=this.getProductosEnCarrito.map((t=>{let{id:a,marca:s,modelo:r,precio:e,quantity:o,stock:i}=t;return{id:a,marca:s,modelo:r,precio:e,quantity:o,stock:i}}));const a=new Date,s={day:"numeric",month:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"},r={productos:t,quantity:this.totalQuantity,total:this.totalFinal,fecha:a.toLocaleDateString("es-AR",s)};if(await this.$http.post(`https://628e2cc9a339dfef87a8fd8c.mockapi.io/api/corredor/${this.getUserLogged.id}/compras`,r).then((t=>{t.data})).catch((t=>console.log(t))),this.$toastr.success("Compra realizada!"),r){let a=this.validarStock;this.toSetStock({prodCompra:t,stock:a}),this.stockUpdate,localStorage.removeItem("carrito"),this.RemoveModal(),this.$router.push({name:"UsuarioCompras"})}}},Sumar(t){this.toSetSumar(t)},Restar(t){this.toSetRestar(t)}}},l=n,d=s(1001),m=(0,d.Z)(l,o,i,!1,null,"46de2ad2",null),u=m.exports,p={name:"NavBar",components:{Carrito:u},mounted(){this.getProductosEnCarritoLength},methods:{},computed:{...(0,c.Se)("carrito",["getProductosEnCarritoLength"])}},v=p,h=(0,d.Z)(v,r,e,!1,null,"3655dc14",null),f=h.exports},2921:function(t,a,s){s.d(a,{Z:function(){return d}});var r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},t._l(t.getProductosLista,(function(a,r){return s("div",{key:r,staticClass:"row"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"face front"},[s("img",{staticClass:"card-img-top",attrs:{src:a.img,alt:a.modelo}}),s("h5",{staticClass:"card-title text-dark"},[t._v(t._s(a.marca))]),s("p",{staticClass:"card-text text-dark"},[t._v(t._s(a.modelo))])]),s("div",{staticClass:"face back"},[s("p",{staticClass:"card-text text-dark"},[t._v(t._s(a.marca)+" "+t._s(a.modelo))]),s("p",{staticClass:"card-text text-dark"},[t._v("Weight: "+t._s(a.peso))]),s("p",{staticClass:"card-text text-dark"},[t._v("Drop: "+t._s(a.drop))]),s("p",{staticClass:"card-text text-dark"},[t._v("Precio $"+t._s(a.precio))]),s("p",{staticClass:"card-text text-dark"},[t._v(" Stock: "+t._s(a.stock))]),s("div",{staticClass:"contador"},[s("button",{on:{click:function(s){return t.Restar(a)}}},[t._v("-")]),s("p",[t._v(" "+t._s(a.quantity)+" ")]),s("button",{on:{click:function(s){return t.Sumar(a)}}},[t._v("+")])]),s("button",{staticClass:"btn btn-dark text-center",on:{click:function(s){return t.ProductoAlCarrito(a)}}},[t._v("Agregar al carrito")])])])])])})),0)},e=[],o=s(4665),i={name:"Productos",created(){this.toProductosLista()},computed:{...(0,o.Se)(["getProductosLista"])},methods:{...(0,o.nv)(["toProductosLista","toSetSumarQuantity","toSetRestarQuantity"]),...(0,o.nv)("carrito",["toProductosEnCarrito"]),ProductoAlCarrito(t){this.toProductosEnCarrito(t),this.$toastr.success("Producto agregado!")},Sumar(t){this.toSetSumarQuantity(t)},Restar(t){this.toSetRestarQuantity(t)}}},c=i,n=s(1001),l=(0,n.Z)(c,r,e,!1,null,"a10cd608",null),d=l.exports},9533:function(t,a,s){s.r(a),s.d(a,{default:function(){return S}});var r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"home"},[s("div",{staticClass:"nav"},[s("NavBar")],1),s("div",{staticClass:"login"},[s("UserLogin")],1),s("div",{staticClass:"productos"},[s("Productos")],1)])},e=[],o=s(3899),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"UserLogin"},[s("section",{staticClass:"Form my-4 mx-5"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row no-gutters"},[t._m(0),s("div",{staticClass:"col-lg-7 text-dark loginForm"},[s("h1",{staticClass:"font-weight-bold "},[t._v("Lo Run")]),s("h4",[t._v("Inicia Sesion")]),s("form",[s("div",{staticClass:"form-row"},[s("div",{staticClass:"col-lg-7"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email-Adress"},domProps:{value:t.form.email},on:{input:function(a){a.target.composing||t.$set(t.form,"email",a.target.value)}}})])]),s("div",{staticClass:"form-row"},[s("div",{staticClass:"col-lg-7"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.pass,expression:"form.pass"}],staticClass:"form-control mt-2",attrs:{type:"password",placeholder:"*******"},domProps:{value:t.form.pass},on:{input:function(a){a.target.composing||t.$set(t.form,"pass",a.target.value)}}})])]),s("div",{staticClass:"form-row"},[s("div",{staticClass:"col-lg-7"},[s("button",{staticClass:"btn1 mt-2",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.validarDatos.apply(null,arguments)}}},[t._v("Login")])]),s("div",[s("h5",{staticClass:"text-success mt-2"},[t._v("No tienes cuenta?")]),s("button",{staticClass:"btn btn-primary",attrs:{"data-bs-toggle":"modal","data-bs-target":"#formModal"}},[t._v(" Registrate ")]),s("div",{staticClass:"modal",attrs:{id:"formModal",tabindex:"-1",role:"dialog","aria-labelledby":"formModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(1),s("div",{staticClass:"modal-body"},[s("FormLogin")],1)])])])])])])])])])])])},c=[function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"col-lg-5"},[r("img",{staticClass:"img-fluid",attrs:{src:s(9315),alt:"Logo login"}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"formModalLabel"}},[t._v("FormLogin")]),s("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}})])])}],n=s(4665),l=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"UserLogin"},[s("section",{staticClass:"Form"},[s("div",{staticClass:"container"},[s("div",{staticClass:"column no-gutters text-dark"},[t._m(0),s("div",{staticClass:"col-12 text-center"},[s("h4",[t._v("Inicia tu cuenta LoRun")]),s("form",[s("div",{staticClass:"from-column"},[s("div",{staticClass:"col-12"},[s("h4",{staticClass:"text-center"},[t._v("Nombre y Apellido")]),s("div",{staticClass:"form-group text-center"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.nombre,expression:"form.nombre"}],staticClass:"form-control text-center",attrs:{type:"text",placeholder:"Ingrese su nombre",name:"Nombre"},domProps:{value:t.form.nombre},on:{keyup:t.validarNombre,input:function(a){a.target.composing||t.$set(t.form,"nombre",a.target.value)}}}),t.error.nombre?s("span",{staticClass:"alert-danger"},[t._v(t._s(t.error.nombre))]):t._e()])])]),s("div",{staticClass:"from-column"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"form-group"},[s("h4",{staticClass:"text-center mt-3"},[t._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control text-center",attrs:{type:"email",id:"inputEmail4",placeholder:"Email",name:"Email"},domProps:{value:t.form.email},on:{keyup:t.validarEmail,input:function(a){a.target.composing||t.$set(t.form,"email",a.target.value)}}}),t.error.email?s("span",{staticClass:"alert-danger"},[t._v(t._s(t.error.email))]):t._e()]),s("div",{staticClass:"form-group "},[s("h4",{staticClass:"text-center mt-3"},[t._v("Contrasenia LoRun")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.pass,expression:"form.pass"}],staticClass:"form-control text-center",attrs:{type:"password",id:"Pass",placeholder:"Crea tu contrasenia LoRun",name:"inputPass"},domProps:{value:t.form.pass},on:{keyup:t.validarPass,input:function(a){a.target.composing||t.$set(t.form,"pass",a.target.value)}}}),t.error.pass?s("span",{staticClass:"alert-danger"},[t._v(t._s(t.error.pass))]):t._e()]),s("br")])]),s("div",{staticClass:"from-column"},[s("div",{staticClass:"col-12"},[s("h4",{staticClass:"text-center mt-3"},[t._v("Seleccione su pisada")]),s("div",{staticClass:"row checkbox-row",on:{mouseover:t.validarPisada}},[s("div",{staticClass:"col-xl text-center"},[s("div",{staticClass:"checkbox-inline"},[s("label",{staticClass:"checkbox-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.pisada,expression:"form.pisada"}],attrs:{type:"checkbox",id:"pronador",value:"pronador"},domProps:{checked:Array.isArray(t.form.pisada)?t._i(t.form.pisada,"pronador")>-1:t.form.pisada},on:{mouseout:t.validarPisada,change:function(a){var s=t.form.pisada,r=a.target,e=!!r.checked;if(Array.isArray(s)){var o="pronador",i=t._i(s,o);r.checked?i<0&&t.$set(t.form,"pisada",s.concat([o])):i>-1&&t.$set(t.form,"pisada",s.slice(0,i).concat(s.slice(i+1)))}else t.$set(t.form,"pisada",e)}}}),t._v(" Pronador - poco arco")])]),s("div",{staticClass:"checkbox-inline"},[s("label",{staticClass:"checkbox-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.pisada,expression:"form.pisada"}],attrs:{type:"checkbox",id:"neutro",value:"neutro"},domProps:{checked:Array.isArray(t.form.pisada)?t._i(t.form.pisada,"neutro")>-1:t.form.pisada},on:{mouseout:t.validarPisada,change:function(a){var s=t.form.pisada,r=a.target,e=!!r.checked;if(Array.isArray(s)){var o="neutro",i=t._i(s,o);r.checked?i<0&&t.$set(t.form,"pisada",s.concat([o])):i>-1&&t.$set(t.form,"pisada",s.slice(0,i).concat(s.slice(i+1)))}else t.$set(t.form,"pisada",e)}}}),t._v(" Neutro - arco normal")])]),s("div",{staticClass:"checkbox-inline"},[s("label",{staticClass:"checkbox-inline"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.pisada,expression:"form.pisada"}],attrs:{type:"checkbox",id:"supinador",value:"supinador"},domProps:{checked:Array.isArray(t.form.pisada)?t._i(t.form.pisada,"supinador")>-1:t.form.pisada},on:{mouseout:t.validarPisada,change:function(a){var s=t.form.pisada,r=a.target,e=!!r.checked;if(Array.isArray(s)){var o="supinador",i=t._i(s,o);r.checked?i<0&&t.$set(t.form,"pisada",s.concat([o])):i>-1&&t.$set(t.form,"pisada",s.slice(0,i).concat(s.slice(i+1)))}else t.$set(t.form,"pisada",e)}}}),t._v(" Supinador - mucho arco")])]),t.error.pisada?s("span",{staticClass:"alert-danger"},[t._v(t._s(t.error.pisada))]):t._e()])])])]),s("br"),s("div",{staticClass:"from-row"},[s("div",{staticClass:"col-12"},[t.error.validacion?s("span",{staticClass:"alert-danger p-1 mt-3"},[t._v(t._s(t.error.validacion))]):t._e(),s("br"),s("button",{staticClass:"btn btn-primary mt-3",attrs:{type:"submit"},on:{click:function(a){return a.preventDefault(),t.nuevoUsuario.apply(null,arguments)}}},[t._v("INGRESAR")])])])])])])])])])},d=[function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"col-12 text-center"},[r("img",{staticClass:"img-fluid ",attrs:{src:s(9315),alt:"Logo login"}})])}],m={name:"FormLogin",data(){return{form:{nombre:"",email:"",pass:"",pisada:[]},error:{nombre:"",email:"",pass:"",pisada:"",validacion:""}}},mounted(){this.toSetUsers()},methods:{...(0,n.nv)("users",["toSaveUserLoggedInStorage","toSetUsers"]),RemoveModal(){let t=document.querySelector(".modal-backdrop");null!=t&&t.remove();let a=document.querySelector("body");null!=a&&(a.style=null,a.classList=[])},async nuevoUsuario(){if(!this.form.nombre||!this.form.email||!this.form.pass||!this.form.pisada)return this.error.validacion="Debe completar el formulario";const t={nombre:this.form.nombre,email:this.form.email,pass:this.form.pass,pisada:this.form.pisada};await this.$http.post("https://628e2cc9a339dfef87a8fd8c.mockapi.io/api/corredor",t).then((t=>{let a=t.data;this.toSaveUserLoggedInStorage(a)})).catch((t=>console.log(t))),Object.keys(this.form).forEach((t=>this.form[t]="")),this.form.pisada=[],this.error.validacion="",this.RemoveModal(),this.$router.push({name:"UsuarioView"})},validarNombre(){const t=/[a-zA-Z]{2,}\s+[a-zA-Z]{2,12}/g;this.form.nombre&&t.test(this.form.nombre)?this.error.nombre="":this.error.nombre="Ingresa un nombre y un apellido "},validarEmail(){const t=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;this.form.email&&t.test(this.form.email)?this.error.email="":this.error.email='Ingresa un email valido (con "@" y ".")'},validarPass(){this.form.pass.length>4?this.error.pass="":this.error.pass="Ingresa una contrasenia de 5 caracteres"},validarPisada(){""!=this.form.pisada?this.error.pisada="":this.error.pisada="Ingresa su pisada"}}},u=m,p=s(1001),v=(0,p.Z)(u,l,d,!1,null,"719fdc8e",null),h=v.exports,f={name:"UserLogin",components:{FormLogin:h},data(){return{form:{email:"",pass:""},error:!1}},created(){this.toSetUsers()},computed:{...(0,n.Se)("users",["getUsers","getUserLogged"])},methods:{...(0,n.nv)("users",["toSetUsers","toSaveUserLoggedInStorage"]),validarDatos(){let t=!1;this.getUsers.find((a=>{a.email==this.form.email&&a.pass==this.form.pass?(t=!0,this.toSaveUserLoggedInStorage(a)):t=!1})),null!=this.getUserLogged?0==this.getUserLogged?.isAdmin?this.$router.push({name:"UsuarioView"}):this.$router.push({name:"Admin"}):this.error=!0}}},g=f,C=(0,p.Z)(g,i,c,!1,null,"f194577e",null),_=C.exports,b=s(2921),k={name:"Home",components:{Productos:b.Z,NavBar:o.Z,UserLogin:_},mounted(){this.toSetCarrito()},methods:{...(0,n.nv)("carrito",["toSetCarrito"])}},y=k,x=(0,p.Z)(y,r,e,!1,null,"481b447c",null),S=x.exports},9315:function(t,a,s){t.exports=s.p+"img/logoRun.418ad650.jpeg"}}]);
//# sourceMappingURL=533.5b90f915.js.map
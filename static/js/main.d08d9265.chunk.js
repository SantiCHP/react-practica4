(this.webpackJsonpclase01=this.webpackJsonpclase01||[]).push([[0],[,,,,,,,,,,,,,function(e,a,s){},function(e,a,s){},function(e,a,s){},,function(e,a,s){},function(e,a,s){},function(e,a,s){},function(e,a,s){"use strict";s.r(a);var r=s(1),t=s(7),c=s.n(t),i=(s(13),s(6)),o=s(2),n=(s(14),s(15),s(21)),l=s(0),m=function(e){var a=e.onNuevaZapatilla,s=Object(r.useState)(!1),t=Object(o.a)(s,2),c=t[0],i=t[1],m=Object(r.useState)(""),d=Object(o.a)(m,2),u=d[0],j=d[1],b=Object(r.useState)(""),p=Object(o.a)(b,2),x=p[0],h=p[1],f=Object(r.useState)(""),O=Object(o.a)(f,2),g=O[0],v=O[1],N=Object(r.useState)(),w=Object(o.a)(N,2),C=w[0],y=w[1];return Object(l.jsxs)("div",{className:"card border-success p-2 mb-2 container",children:[Object(l.jsx)("div",{class:"card-header",children:Object(l.jsx)("h2",{className:"text-center",children:"A\xf1ada una nueva zapatilla"})}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("span",{children:Object(l.jsx)("a",{className:"text-danger",href:"https://www.sneakersnstuff.com/en/1279/sneakers-on-sale?orderBy=Popularity",target:"_blank",rel:"noopener noreferrer",children:"P\xe1gina referente"})}),c?Object(l.jsx)("h3",{className:"error-campos",children:"Debe completar todos los campos"}):null,Object(l.jsxs)("form",{className:"form",onSubmit:function(e){if(e.preventDefault(),i(!1),""!==u.trim()&&""!==x.trim()&&""!==g.trim()&&""!==C){var s={id:Object(n.a)(),marca:u,image:x,modelo:g,precio:C};a(s),j(""),h(""),v(""),y("")}else i(!0)},action:"",children:[Object(l.jsx)("div",{className:"form-group",children:Object(l.jsxs)("div",{className:"form-floating mb-3",children:[Object(l.jsx)("input",{onChange:function(e){j(e.target.value)},className:"form-control form-text mt-2",type:"text",name:"marca",id:"marca",placeholder:"Marca",required:!0,value:u}),Object(l.jsx)("label",{for:"marca",children:"Marca"})]})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("div",{className:"form-floating mb-3",children:Object(l.jsxs)("div",{className:"form-floating",children:[Object(l.jsx)("input",{onChange:function(e){h(e.target.value)},className:"form-control form-text",type:"text",name:"image",id:"image",placeholder:"Imagen(URL)",required:!0,value:x}),Object(l.jsx)("label",{for:"image",children:"Imagen - URL"})]})})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("div",{className:"form-floating mb-3",children:Object(l.jsxs)("div",{className:"form-floating",children:[Object(l.jsx)("input",{onChange:function(e){v(e.target.value)},className:"form-control form-text",type:"modelo",name:"modelo",id:"modelo",placeholder:"Modelo",required:!0,value:g}),Object(l.jsx)("label",{for:"modelo",children:"Modelo"})]})})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsx)("div",{className:"form-floating mb-3",children:Object(l.jsxs)("div",{className:"form-floating",children:[Object(l.jsx)("input",{onChange:function(e){y(e.target.value)},className:"form-control form-text",type:"number",name:"precio",id:"precio",placeholder:"Precio",required:!0,value:C}),Object(l.jsx)("label",{for:"precio",children:"Precio"})]})})}),Object(l.jsx)("button",{className:"btn btn-success w-100",type:"submit",children:"A\xf1adir"})]})]})]})},d=(s(17),function(e){var a=e.listaZapatillas;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Lista de zapatillas registradas"}),Object(l.jsx)("div",{className:"contiene-zapatilla",children:a.map((function(e){return Object(l.jsxs)("div",{className:"a-box card",children:[Object(l.jsx)("div",{className:"img-container",children:Object(l.jsx)("div",{className:"img-inner",children:Object(l.jsx)("div",{className:"inner-skew",children:Object(l.jsx)("img",{src:e.image})})})}),Object(l.jsxs)("div",{className:"text-container",children:[Object(l.jsx)("h3",{children:e.marca}),Object(l.jsx)("div",{className:"desc-model",children:Object(l.jsx)("span",{class:"badge bg-dark mb-2",children:e.modelo})}),Object(l.jsx)("p",{className:"text-dark",children:Object(l.jsx)("strong",{children:Object(l.jsxs)("h4",{children:["Precio: ",e.precio,"\u20ac "]})})})]})]})}))})]})}),u=(s(18),function(e){var a=e.onNuevoUsuario,s=Object(r.useState)(!1),t=Object(o.a)(s,2),c=(t[0],t[1]),i=Object(r.useState)([""]),m=Object(o.a)(i,2),d=m[0],u=m[1],j=Object(r.useState)([""]),b=Object(o.a)(j,2),p=b[0],x=b[1],h=Object(r.useState)([""]),f=Object(o.a)(h,2),O=f[0],g=f[1],v=Object(r.useState)([""]),N=Object(o.a)(v,2),w=N[0],C=N[1],y=Object(r.useState)([""]),A=Object(o.a)(y,2),S=A[0],k=A[1];return Object(l.jsxs)("div",{className:"card border-primary nuevo-usuario",children:[Object(l.jsx)("div",{class:"card-header",children:Object(l.jsx)("h2",{className:"text-center",children:"Registrar usuario"})}),Object(l.jsx)("div",{class:"card-body",children:Object(l.jsxs)("form",{className:"form form-nuevo-usuario",onSubmit:function(e){if(e.preventDefault(),c(!1),""!==d.trim()&&""!==p.trim()&&""!==O.trim()&&""!==w.trim()&&""!==S.trim()){var s={id:Object(n.a)(),name:d,surname:p,author:O,email:w,password:S};a(s),u(""),x(""),g(""),C(""),k(""),console.log(s)}else c(!0)},children:[Object(l.jsx)("div",{className:"form-group",children:Object(l.jsxs)("div",{className:"form-floating mb-3",children:[Object(l.jsx)("input",{onChange:function(e){u(e.target.value)},className:"form-control form-text",type:"text",name:"name",id:"form-name",placeholder:"Nombre",required:!0,value:d}),Object(l.jsx)("label",{for:"name",children:"Nombre"})]})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsxs)("div",{className:"form-floating mb-3",children:[Object(l.jsx)("input",{onChange:function(e){x(e.target.value)},className:"form-control form-text",type:"text",name:"surname",id:"form-control form-surname",placeholder:"Apellidos",required:!0,value:p}),Object(l.jsx)("label",{for:"surname",children:"Apellidos"})]})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsxs)("div",{className:"form-floating mb-3",children:[Object(l.jsx)("input",{onChange:function(e){g(e.target.value)},className:"form-control form-text",type:"text",name:"author",id:"form-author-usr",placeholder:"Autor",required:!0,value:O}),Object(l.jsx)("label",{for:"author",children:"Alias"})]})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsxs)("div",{className:"form-floating mb-3",children:[Object(l.jsx)("input",{onChange:function(e){C(e.target.value)},className:"form-control form-text",type:"email",name:"email",id:"form-email",placeholder:"Correo electr\xf3nico",required:!0,value:w}),Object(l.jsx)("label",{for:"email",children:"Correo electr\xf3nico"})]})}),Object(l.jsx)("div",{className:"form-group",children:Object(l.jsxs)("div",{className:"form-floating mb-3",children:[Object(l.jsx)("input",{onChange:function(e){k(e.target.value)},className:"form-control form-text mb-1",type:"password",name:"password",id:"form-password",placeholder:"Contrase\xf1a",required:!0,value:S}),Object(l.jsx)("label",{for:"password",children:"Contrase\xf1a"})]})}),Object(l.jsx)("button",{className:"btn btn-primary w-100 mb-2",type:"submit",children:"REGISTRAR"})]})})]})}),j=(s(19),function(e){var a=e.listaUsuarios;return Object(l.jsxs)("div",{className:"list-group muestra-usuarios",children:[Object(l.jsx)("h2",{className:"list-group-item list-group-item-action bg-info text-center",children:"Usuarios"}),Object(l.jsx)("ul",{className:"list-group-item list-group-item-action",children:a.map((function(e){return Object(l.jsx)("li",{children:e.name},e.id)}))})]})});var b=function(){var e=Object(r.useState)([{id:1,name:"Santiago",surname:"Castellano Hern\xe1ndez",author:"SantiCHP",email:"miemail@midominio.com",password:"superseguro*"},{id:2,name:"Ana",surname:"Castro S\xe1nchez",author:"Annita",email:"annita@midominio.com",password:"supersegura*"},{id:3,name:"Matias",surname:"Prats Justo",author:"LineaDirecta",email:"matias@midominio.com",password:"superseguro*"},{id:4,name:"Andrea",surname:"Nu\xf1ez Santana",author:"AEA",email:"andrea@midominio.com",password:"supersegura*"}]),a=Object(o.a)(e,2),s=a[0],t=a[1],c=Object(r.useState)([{id:"001",marca:"Nike Sportswear",modelo:"Air Force 1 Low Retro SP",image:"https://www.sneakersnstuff.com/images/271633/product_xlarge.jpg",precio:78},{id:"002",marca:"adidas Consortium",modelo:"SUPERSTAR 50 RUN DMC",image:"https://www.sneakersnstuff.com/images/274478/product_xlarge.jpg",precio:84},{id:"003",marca:"adidas Consortium",modelo:"ZX 4000 4D x SNS",image:"https://www.sneakersnstuff.com/images/243305/product_xlarge.jpg",precio:90},{id:"004",marca:"Nike Sportswear",modelo:"Air Force 1 Ndestrukt",image:"https://www.sneakersnstuff.com/images/278881/product_xlarge.jpg",precio:75},{id:"005",marca:"adidas Originals",modelo:"Campus 80s",image:"https://www.sneakersnstuff.com/images/267172/product_xlarge.jpg",precio:30},{id:"006",marca:"Nike Sportswear",modelo:"Air Max 95 x Kim Jones",image:"https://www.sneakersnstuff.com/images/290118/product_xlarge.jpg",precio:176},{id:"007",marca:"Converse",modelo:"Chuck 70 Hi x Golf Wang",image:"https://www.sneakersnstuff.com/images/276144/product_xlarge.jpg",precio:70},{id:"008",marca:"Jordan Brand",modelo:"Air Jordan 7 Retro Gc",image:"https://www.sneakersnstuff.com/images/269135/product_xlarge.jpg",precio:137}]),n=Object(o.a)(c,2),b=n[0],p=n[1];return Object(l.jsxs)("div",{className:"App container",children:[Object(l.jsx)("div",{className:"cabecera-titulo"}),Object(l.jsx)("img",{src:"https://i.ibb.co/3dy67bH/snickerbanner.png",alt:"snickerbanner"}),Object(l.jsx)("div",{className:"alta-usuarios",children:Object(l.jsx)(u,{onNuevoUsuario:function(e){t([].concat(Object(i.a)(s),[e]))}})}),Object(l.jsxs)("div",{className:"muestra-usuarios",children:[Object(l.jsxs)("audio",{autoplay:!0,controls:!0,children:[Object(l.jsx)("source",{src:"https://r2---sn-npoe7nes.googlevideo.com/videoplayback?expire=1625894921&ei=qdvoYO-nCP2hz7sP1KiRmAk&ip=27.73.150.201&id=o-AOh_O6A9-4cBajdV56xn0RavvM6FX1WXcLd4eIEoDPpC&itag=251&source=youtube&requiressl=yes&vprv=1&mime=audio%2Fwebm&ns=RkRygU7QWZxXVoggnP3IpsEG&gir=yes&clen=4491049&dur=276.301&lmt=1614279254874031&keepalive=yes&fexp=24001373,24007246&beids=9466586&c=WEB&txp=5531432&n=W1r1K-0P8yyOq60BPl&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRAIgJVMubD-aLHaXaJX2zbL6-D3M3EbBtag7wbTvAVyvIiUCIFa2AH1VGCtRJHwWwRaLX9Xu_YN5hCHUKen7oczDqx0U&rm=sn-8pxuuxa-i2iz7l,sn-8pxuuxa-i5ozs7r&req_id=ae413b9b4a8ca3ee&redirect_counter=2&cms_redirect=yes&ipbypass=yes&mh=w4&mm=30&mn=sn-npoe7nes&ms=nxu&mt=1625883389&mv=m&mvi=2&pl=21&lsparams=ipbypass,mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAJJZlcpQatyFCA9vuqnOTN56J7bJgz60v9ouIaHoCMQrAiAj961sZlOJu-EbvBCqutCwAwYG_P7b20ZvPVBr7LHdzQ%3D%3D",type:"audio/webm"}),"Your browser does not support the audio element."]}),Object(l.jsx)(j,{listaUsuarios:s},s.id)]}),Object(l.jsx)("div",{className:"muestra-zapatillas",children:Object(l.jsx)(d,{listaZapatillas:b},b.id)}),Object(l.jsx)("div",{className:"nueva-zapatilla",children:Object(l.jsx)(m,{onNuevaZapatilla:function(e){p([].concat(Object(i.a)(b),[e]))}})})]})};c.a.render(Object(l.jsx)(b,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.d08d9265.chunk.js.map
(window.webpackJsonpcv=window.webpackJsonpcv||[]).push([[0],{29:function(e,a,t){e.exports=t.p+"static/media/profileimage.2adb9eeb.jpeg"},33:function(e,a,t){e.exports=t(77)},54:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},74:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(27),r=t.n(l),s=t(28),i=t(3),o=t(4),m=t(6),u=t(5),d=t(7),p=t(13),E=t.n(p),f=t(29),h=t.n(f),b=(t(54),function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.user;return c.a.createElement("section",{className:"header columns"},c.a.createElement("div",{className:"profile-image column is-one-third"},c.a.createElement("img",{src:h.a,alt:e.fullname})),c.a.createElement("div",{className:"info"},c.a.createElement("h1",{className:"full-name title"},e.fullname),c.a.createElement("h2",{className:"job subtitle"},c.a.createElement("strong",null,e.job)," en"," ",c.a.createElement("a",{href:e.company_url,target:"_black",alt:e.company},e.company))))}}]),a}(n.Component)),v=t(10),N=t(12),g=t(9),O=t(14),j=t(8);t(59);N.b.add(O.b,j.d,j.a,j.b,j.c,j.e);var y=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={showForm:!1,loading:!1,name:"",email:"",comment:""},t.renderForm=t.renderForm.bind(Object(v.a)(t)),t.closeModal=t.closeModal.bind(Object(v.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(v.a)(t)),t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),this.setState({loading:!0});var t={params:{data:JSON.stringify({name:this.state.name,email:this.state.email,comment:this.state.comment})},mode:"cors"};E.a.get("//jgmcloud.000webhostapp.com/cvapi/contact",t).then(function(e){e.data;a.setState({loading:!1,showForm:!1,name:"",email:"",comment:""})}).catch(function(){a.setState({loading:!1})})}},{key:"closeModal",value:function(e){this.setState({showForm:!1}),e.stopPropagation()}},{key:"renderForm",value:function(){var e=this,a=this.state.loading;return c.a.createElement("div",{className:"modal form-container is-active"},c.a.createElement("div",{className:"modal-background"}),c.a.createElement("div",{className:"modal-card form"},c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("header",{className:"modal-card-head"},c.a.createElement("div",{className:"modal-card-title"},"Contactar"),c.a.createElement("button",{className:"delete","aria-label":"close",onClick:this.closeModal})),a?c.a.createElement("section",{className:"modal-card-body"},c.a.createElement("div",{className:"is-loading"},c.a.createElement(g.a,{icon:"spinner",size:"4x",pulse:!0}))):c.a.createElement("section",{className:"modal-card-body"},c.a.createElement("div",{className:"field"},c.a.createElement("label",{className:"label"},"Nombre"),c.a.createElement("div",{className:"control"},c.a.createElement("input",{className:"input",type:"text",value:this.state.name,onChange:function(a){return e.setState({name:a.target.value})}}))),c.a.createElement("div",{className:"field"},c.a.createElement("label",{className:"label"},"Email"),c.a.createElement("div",{className:"control"},c.a.createElement("input",{className:"input",type:"text",value:this.state.email,onChange:function(a){return e.setState({email:a.target.value})}}))),c.a.createElement("div",{className:"field"},c.a.createElement("label",{className:"label"},"Cu\xe9ntame por qu\xe9 quieres contactarme"),c.a.createElement("div",{className:"control"},c.a.createElement("textarea",{className:"textarea",type:"text",value:this.state.comment,onChange:function(a){return e.setState({comment:a.target.value})}})))),c.a.createElement("footer",{className:"modal-card-foot"},c.a.createElement("button",{className:"button is-text",onClick:this.closeModal},"Cancelar"),c.a.createElement("button",{className:"button is-dark",type:"submit"},"Enviar")))))}},{key:"render",value:function(){var e=this,a=this.props.user,t=this.state.showForm;return c.a.createElement("div",{className:"contact-info"},c.a.createElement("h3",null,"Datos personales"),c.a.createElement("div",{className:"box"},c.a.createElement("div",{className:"tlf"},c.a.createElement(g.a,{className:"icon",icon:j.d}),c.a.createElement("a",{onClick:function(){return e.setState({showForm:!0})}},"6xx xxx xxx")),c.a.createElement("div",{className:"email"},c.a.createElement(g.a,{className:"icon",icon:j.a}),c.a.createElement("a",{onClick:function(){return e.setState({showForm:!0})}},"jxxxxxxx@xxx.com")),c.a.createElement("div",{className:"www"},c.a.createElement(g.a,{className:"icon",icon:j.c}),c.a.createElement("a",{href:a.siteurl,target:"_black"},a.sitename)),c.a.createElement("div",{className:"linkedin"},c.a.createElement(g.a,{className:"icon",icon:O.a}),c.a.createElement("a",{href:a.linkedinurl,target:"_blank"},a.linkedinuser)),c.a.createElement("div",{className:"birthday"},c.a.createElement(g.a,{className:"icon",icon:j.b}),c.a.createElement("a",null,a.birthday))),t?this.renderForm():null)}}]),a}(n.Component),x=(t(60),function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.skills;return e.length>0?c.a.createElement("div",{className:"skills"},c.a.createElement("h3",null,"Conocimientos"),c.a.createElement("div",{className:"box"},e.map(function(e){return c.a.createElement(n.Fragment,{key:e.id},c.a.createElement("span",null,e.name),c.a.createElement("progress",{className:"progress is-small",value:e.percentage,max:"100"},e.percentage,"%"))}))):null}}]),a}(n.Component)),k=(t(61),function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"skills"},c.a.createElement("h3",null,"Idiomas"),c.a.createElement("div",{className:"box"},c.a.createElement("span",null,"Espa\xf1ol"),c.a.createElement("progress",{className:"progress is-small",value:"100",max:"100"},"100%"),c.a.createElement("span",null,"Gallego"),c.a.createElement("progress",{className:"progress is-small",value:"100",max:"100"},"100%"),c.a.createElement("span",null,"Ingl\xe9s"),c.a.createElement("progress",{className:"progress is-small",value:"50",max:"100"},"50%")))}}]),a}(n.Component)),w=function(e){var a=e.bio,t=e.bio_ref;return c.a.createElement("div",{className:"user-profile"},c.a.createElement("h3",null,"Perfil"),c.a.createElement("p",{className:"cuote"},a),c.a.createElement("p",{className:"cuote_ref"},c.a.createElement("i",null,t)))},S=(t(62),function(e){var a=e.experience;return c.a.createElement("div",null,c.a.createElement("h3",null,"Experiencia"),c.a.createElement("div",{className:"experience-data"},a.map(function(e){return c.a.createElement("div",{className:"experience-item",key:e.id},c.a.createElement("div",{className:"dates"},"".concat(e.start," - ").concat(e.end)),c.a.createElement("div",{className:"explanation"},c.a.createElement("h4",null,e.title),c.a.createElement("p",null,e.description)))})))}),C=(t(63),function(e){var a=e.education;return c.a.createElement("div",null,c.a.createElement("h3",null,"Estudios"),c.a.createElement("div",{className:"education-data"},a.map(function(e){return c.a.createElement("div",{className:"education-item",key:e.id},c.a.createElement("div",{className:"dates"},"".concat(e.start," - ").concat(e.end)),c.a.createElement("div",{className:"explanation"},c.a.createElement("h4",null,e.title),c.a.createElement("p",null,e.description)))})))}),F=t(30),M=t.n(F),P=t(32),D=t.n(P),_=(t(74),function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;setInterval(function(){e.forceUpdate()},5e3)}},{key:"render",value:function(){var e=this.props.tags;return c.a.createElement("div",{className:"tag-cloud-container"},c.a.createElement(M.a,{className:"tag-cloud",random:Math.random,style:{fontFamily:"sans-serif",fontSize:13,color:function(){return D()()},padding:10,width:"100%",height:"500px"}},e.map(function(e){return c.a.createElement("div",{key:e.id,style:{fontSize:e.percentage/4,fontStyle:Math.random()>.8?"italic":"normal",fontWeight:e.percentage>90&&Math.random()<.5?"bold":"normal"},rotate:Math.random()>.99?-90:0},e.name)})))}}]),a}(n.Component)),z=t(15);t(75),t(76);function I(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}var J=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={user:null,education:[],experience:[],skills:[]},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;z.a.initialize("UA-148892916-1"),z.a.pageview(window.location.pathname+window.location.search),E.a.get("//jgmcloud.000webhostapp.com/cvapi/",{mode:"cors"}).then(function(a){var t=a.data;e.setState(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?I(t,!0).forEach(function(a){Object(s.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}({},t))})}},{key:"render",value:function(){var e=this.state,a=e.user,t=e.skills,n=e.experience,l=e.education;return a&&n&&l&&t?c.a.createElement("div",{className:"container box"},c.a.createElement(b,{user:a}),c.a.createElement("section",{className:"content columns"},c.a.createElement("div",{className:"col1 column is-one-third"},c.a.createElement(y,{user:a}),c.a.createElement(x,{skills:t.filter(function(e){return"1"===e.skill&&e.percentage>=75})}),c.a.createElement(k,null)),c.a.createElement("div",{className:"col2 column"},c.a.createElement(w,{bio:a.bio,bio_ref:a.bio_ref}),c.a.createElement(S,{experience:n}),c.a.createElement(C,{education:l}),c.a.createElement(_,{tags:t.filter(function(e){return"1"===e.tags})})))):null}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.b198e9d0.chunk.js.map
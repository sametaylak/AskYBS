webpackJsonp([0],{194:function(t,s,e){function n(t){e(226)}var a=e(22)(e(206),e(219),n,null,null);t.exports=a.exports},199:function(t,s,e){"use strict";function n(t,s,n){e.i(i.a)('mutation {\n    createQuestion(\n      quest: "'+t+'",\n      userId: "'+s+'"\n    ) {\n      id,\n      quest,\n      user {\n        id,\n        name\n      }\n    }\n  }')().then(function(t){n({success:!0,data:t})}).catch(function(t){n({success:!1})})}function a(t,s,n,a){e.i(i.a)('mutation {\n  createComment(\n    text: "'+t+'"\n    questionId: "'+s+'"\n    userId: "'+n+'"\n  ) {\n    id\n    text\n    user {\n      id\n      name\n    }\n  }\n}')().then(function(t){a({success:!0,data:t})}).catch(function(t){a({success:!1})})}e.d(s,"a",function(){return n}),e.d(s,"b",function(){return a});var i=e(87)},200:function(t,s,e){var n=e(22)(e(204),e(222),null,null,null);t.exports=n.exports},201:function(t,s,e){"use strict";function n(t,s,n,a){e.i(i.a)('mutation {\n    createUser(\n      name: "'+t+'"\n      authProvider: {\n        email: {\n          email: "'+s+'"\n          password: "'+n+'"\n        }\n      }\n    ) {\n      id,\n      name,\n      email\n    }\n  }')().then(function(t){a({success:!0,data:t})}).catch(function(t){a({success:!1})})}function a(t,s,n){e.i(i.a)('mutation {\n    signinUser(email: {\n      email: "'+t+'"\n      password: "'+s+'"\n    }) {\n      token,\n      user {\n        id,\n        name,\n        email\n      }\n    }\n  }')().then(function(t){n({success:!0,data:t.signinUser})}).catch(function(t){n({success:!1})})}e.d(s,"a",function(){return n}),e.d(s,"b",function(){return a});var i=e(87)},202:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e(199),a=e(200),i=e.n(a);s.default={components:{notify:i.a},props:{show:{type:Boolean,required:!0,twoWay:!0}},data:function(){return{question:"",loading:!1,showNotify:!1}},methods:{ask:function(){var t=this;this.showNotify=!1,this.loading=!0,e.i(n.a)(this.question,this.$store.state.user.user.id,function(s){t.loading=!1,s.success?t.$emit("close"):t.showNotify=!0})}}}},203:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e(56),a=e.n(n),i=e(201),o=e(23),l=e(200),r=e.n(l);s.default={components:{notify:r.a},props:{show:{type:Boolean,required:!0,twoWay:!0}},data:function(){return{email:"",password:"",loading:!1,showNotify:!1}},methods:a()({},e.i(o.mapActions)(["setUser"]),{login:function(){var t=this;this.showNotify=!1,this.loading=!0,e.i(i.b)(this.email,this.password,function(s){t.loading=!1,s.success?(t.setUser(s.data),t.$emit("close")):t.showNotify=!0})}})}},204:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:["message"]}},205:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e(201),a=e(200),i=e.n(a);s.default={components:{notify:i.a},props:{show:{type:Boolean,required:!0,twoWay:!0}},data:function(){return{name:"",email:"",password:"",loading:!1,showNotify:!1}},methods:{register:function(){var t=this;this.loading=!0,e.i(n.a)(this.name,this.email,this.password,function(s){t.loading=!1,s.success?t.$emit("close"):t.showNotify=!0})}}}},206:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e(56),a=e.n(n),i=e(23),o=e(214),l=e.n(o),r=e(215),c=e.n(r),u=e(213),d=e.n(u);s.default={components:{login:l.a,register:c.a,ask:d.a},created:function(){this.allQuestions(),this.allUsers()},data:function(){return{login:!1,register:!1,ask:!1}},computed:e.i(i.mapGetters)(["user","loggedIn"]),methods:a()({},e.i(i.mapActions)(["allUsers","allQuestions","unsetUser"]),{signOut:function(){this.unsetUser()}})}},212:function(t,s,e){s=t.exports=e(24)(!0),s.push([t.i,"html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}*,:after,:before,html{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}","",{version:3,sources:["/Users/sametaylak/Documents/askybs/layouts/default.vue"],names:[],mappings:"AACA,KAEE,6GAA2H,AAC3H,eAAgB,AAChB,iBAAkB,AAClB,0BAA2B,AAC3B,8BAA+B,AAC/B,kCAAmC,AACnC,kCAAoC,CAGrC,AACD,sBAHE,8BAA+B,AACvB,qBAAuB,CAOhC,AALD,iBAIE,QAAU,CACX,AACD,eAEE,qBAAsB,AACtB,kBAAmB,AACnB,yBAA0B,AAC1B,cAAe,AACf,qBAAsB,AACtB,iBAAmB,CACpB,AACD,qBAEE,WAAY,AACZ,wBAA0B,CAC3B,AACD,cAEE,qBAAsB,AACtB,kBAAmB,AACnB,yBAA0B,AAC1B,cAAe,AACf,qBAAsB,AACtB,kBAAmB,AACnB,gBAAkB,CACnB,AACD,oBAEE,WAAY,AACZ,wBAA0B,CAC3B",file:"default.vue",sourcesContent:['\nhtml\n{\n  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;\n  font-size: 16px;\n  word-spacing: 1px;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n*, *:before, *:after\n{\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n}\n.button--green\n{\n  display: inline-block;\n  border-radius: 4px;\n  border: 1px solid #3b8070;\n  color: #3b8070;\n  text-decoration: none;\n  padding: 10px 30px;\n}\n.button--green:hover\n{\n  color: #fff;\n  background-color: #3b8070;\n}\n.button--grey\n{\n  display: inline-block;\n  border-radius: 4px;\n  border: 1px solid #35495e;\n  color: #35495e;\n  text-decoration: none;\n  padding: 10px 30px;\n  margin-left: 15px;\n}\n.button--grey:hover\n{\n  color: #fff;\n  background-color: #35495e;\n}\n'],sourceRoot:""}])},213:function(t,s,e){var n=e(22)(e(202),e(220),null,null,null);t.exports=n.exports},214:function(t,s,e){var n=e(22)(e(203),e(218),null,null,null);t.exports=n.exports},215:function(t,s,e){var n=e(22)(e(205),e(223),null,null,null);t.exports=n.exports},218:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"modal",class:{"is-active":t.show}},[e("div",{staticClass:"modal-background",on:{click:function(s){t.$emit("close")}}}),e("div",{staticClass:"modal-content"},[t.showNotify?e("notify",{attrs:{message:"Lütfen girmiş olduğunuz bilgileri kontrol ediniz."},on:{close:function(s){t.showNotify=!1}}}):t._e(),e("div",{staticClass:"card"},[t._m(0),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[e("form",{on:{submit:function(s){s.preventDefault(),t.login(s)}}},[e("div",{staticClass:"field"},[e("p",{staticClass:"control has-icons-left"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}}),t._m(1)])]),e("div",{staticClass:"field"},[e("p",{staticClass:"control has-icons-left"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Parola",required:""},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}}),t._m(2)])]),e("div",{staticClass:"field"},[e("p",{staticClass:"control"},[e("button",{staticClass:"button is-success"},[t.loading?e("i",{staticClass:"loader"}):t._e(),t._v("\n                  Giriş\n                ")])])])])])])])],1),e("button",{staticClass:"modal-close is-large",on:{click:function(s){t.$emit("close")}}})])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[t._v("\n          Giriş Yap\n        ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fa fa-envelope"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fa fa-lock"})])}]}},219:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("section",{staticClass:"hero is-info is-large"},[e("div",{staticClass:"hero-head"},[e("header",{staticClass:"nav"},[e("div",{staticClass:"container"},[t._m(0),t._m(1),t.loggedIn?t._e():e("div",{staticClass:"nav-right nav-menu"},[e("a",{staticClass:"nav-item",on:{click:function(s){t.register=!0}}},[t._v("\n              Üye Ol\n            ")]),e("span",{staticClass:"nav-item",on:{click:function(s){t.login=!0}}},[t._m(2)])]),t.loggedIn?e("div",{staticClass:"nav-right nav-menu"},[t._m(3),e("span",{staticClass:"nav-item"},[e("a",{staticClass:"button is-primary",on:{click:function(s){t.ask=!0}}},[t._m(4),e("span",[t._v("Sor")])])]),e("span",{staticClass:"nav-item"},[e("a",{staticClass:"button is-primary is-outlined",on:{click:t.signOut}},[t._v("Çıkış Yap")])])]):t._e()])])]),t._m(5),e("div",{staticClass:"hero-foot"},[e("nav",{staticClass:"tabs is-boxed is-fullwidth"},[e("div",{staticClass:"container"},[e("ul",[e("li",[e("nuxt-link",{attrs:{to:"/popular"}},[t._v("Popüler")])],1),e("li",[e("nuxt-link",{attrs:{to:"/recent"}},[t._v("Son Eklenenler")])],1),e("li",[e("nuxt-link",{attrs:{to:"/members"}},[t._v("Üyeler")])],1),e("li",[e("nuxt-link",{attrs:{to:"/images"}},[t._v("Görseller")])],1),e("li",[e("nuxt-link",{attrs:{to:"/about"}},[t._v("Bölüm Hakkında")])],1),e("li",[e("nuxt-link",{attrs:{to:"/contact"}},[t._v("İletişim")])],1)])])])])]),e("nuxt"),t.login?e("login",{attrs:{show:t.login},on:{close:function(s){t.login=!1}}}):t._e(),t.register?e("register",{attrs:{show:t.register},on:{close:function(s){t.register=!1}}}):t._e(),t.ask?e("ask",{attrs:{show:t.ask},on:{close:function(s){t.ask=!1}}}):t._e()],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"nav-left"},[e("a",{staticClass:"nav-item"},[e("h1",[t._v("#AskYBS")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"nav-toggle"},[e("span"),e("span"),e("span")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"button is-info is-inverted"},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fa fa-sign-in"})]),e("span",[t._v("Giriş Yap")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"nav-item"},[e("a",{staticClass:"button is-info is-inverted"},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fa fa-user"})]),e("span",[t._v("Hesabım")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon"},[e("i",{staticClass:"fa fa-question"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"hero-body",staticStyle:{"padding-bottom":"6em","padding-top":"6em"}},[e("div",{staticClass:"container has-text-centered"},[e("h1",{staticClass:"title"},[t._v("\n          #AskYBS\n        ")]),e("h2",{staticClass:"subtitle"},[t._v("\n          Yönetim Bilişim Sistemlerine dair tüm sorularınız ve cevaplarınız\n        ")])])])}]}},220:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"modal",class:{"is-active":t.show}},[e("div",{staticClass:"modal-background",on:{click:function(s){t.$emit("close")}}}),e("div",{staticClass:"modal-content"},[t.showNotify?e("notify",{attrs:{message:"Bir hata meydana geldi."},on:{close:function(s){t.showNotify=!1}}}):t._e(),e("div",{staticClass:"card"},[t._m(0),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[e("form",{on:{submit:function(s){s.preventDefault(),t.ask(s)}}},[e("div",{staticClass:"field"},[e("label",{staticClass:"label"},[t._v("Soru")]),e("p",{staticClass:"control"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.question,expression:"question"}],staticClass:"textarea",attrs:{required:""},domProps:{value:t.question},on:{input:function(s){s.target.composing||(t.question=s.target.value)}}})])]),e("div",{staticClass:"field"},[e("p",{staticClass:"control"},[e("button",{staticClass:"button is-success"},[t.loading?e("i",{staticClass:"loader"}):t._e(),t._v("\n                  Paylaş!\n                ")])])])])])])])],1),e("button",{staticClass:"modal-close is-large",on:{click:function(s){t.$emit("close")}}})])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[t._v("\n          Sor\n        ")])])}]}},222:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"notification is-danger"},[e("button",{staticClass:"delete",on:{click:function(s){t.$emit("close")}}}),t._v("\n  "+t._s(t.message)+"\n")])},staticRenderFns:[]}},223:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"modal",class:{"is-active":t.show}},[e("div",{staticClass:"modal-background",on:{click:function(s){t.$emit("close")}}}),e("div",{staticClass:"modal-content"},[t.showNotify?e("notify",{attrs:{message:"Bir hata meydana geldi."},on:{close:function(s){t.showNotify=!1}}}):t._e(),e("div",{staticClass:"card"},[t._m(0),e("div",{staticClass:"card-content"},[e("div",{staticClass:"content"},[e("form",{on:{submit:function(s){s.preventDefault(),t.register(s)}}},[e("div",{staticClass:"field"},[e("p",{staticClass:"control has-icons-left"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input",attrs:{type:"text",placeholder:"Ad Soyad",required:""},domProps:{value:t.name},on:{input:function(s){s.target.composing||(t.name=s.target.value)}}}),t._m(1)])]),e("div",{staticClass:"field"},[e("p",{staticClass:"control has-icons-left"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:"Email",required:""},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}}),t._m(2)])]),e("div",{staticClass:"field"},[e("p",{staticClass:"control has-icons-left"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Parola",required:""},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}}),t._m(3)])]),e("div",{staticClass:"field"},[e("p",{staticClass:"control"},[e("button",{staticClass:"button is-success"},[t.loading?e("i",{staticClass:"loader"}):t._e(),t._v("\n                  Üye Ol\n                ")])])])])])])])],1),e("button",{staticClass:"modal-close is-large",on:{click:function(s){t.$emit("close")}}})])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("header",{staticClass:"card-header"},[e("p",{staticClass:"card-header-title"},[t._v("\n          Üye Ol\n        ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fa fa-user"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fa fa-envelope"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fa fa-lock"})])}]}},226:function(t,s,e){var n=e(212);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(25)("65ce0c16",n,!0)}});
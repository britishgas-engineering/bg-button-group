"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,a,r){var o=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,o=t.default.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:n.default}),(0,a.default)(o,r.default.modulePrefix),e.default=o}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,n){var a=n.default.APP.name,r=n.default.APP.version;e.default=t.default.extend({version:r,name:a})}),define("dummy/components/bg-button-group",["exports","bg-button-group/components/bg-button-group"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/bg-button-group/bg-button",["exports","bg-button-group/components/bg-button-group/bg-button"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/bg-button-group/bg-button/component",["exports","bg-button-group/components/bg-button-group/bg-button/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/bg-button-group/component",["exports","bg-button-group/components/bg-button-group/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/bg-button/component",["exports","bg-button-group/components/bg-button/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/dummy-component",["exports","ember"],function(e,t){e.default=t.default.Component.extend({buttons:[{id:1,label:"apple"},{id:2,label:"melon"},{id:3,label:"plum"}],selectedValue:{id:2,label:"melon"},didInsertElement:function(){this._super.apply(this,arguments),this.set("result",JSON.stringify(this.get("selectedValue")))},actions:{onButtonClickHandler:function(e){this.set("result",JSON.stringify(e))}}})}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){e.default={name:"App Version",initialize:(0,t.default)(n.default.APP.name,n.default.APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:t.default.K}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e.default={name:"ember-data",initialize:t.default}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n.default.exportApplicationGlobal!==!1){var a;if("undefined"!=typeof window)a=window;else if("undefined"!=typeof global)a=global;else{if("undefined"==typeof self)return;a=self}var r,o=n.default.exportApplicationGlobal;r="string"==typeof o?o:t.default.String.classify(n.default.modulePrefix),a[r]||(a[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete a[r]}}))}}e.initialize=a,e.default={name:"export-application-global",initialize:a}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:t.default.K}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:t.default.K}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:t.default.K}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var a=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL});a.map(function(){}),e.default=a}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.7.3",loc:{source:null,start:{line:1,column:0},end:{line:11,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","container");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("img");e.setAttribute(a,"src","http://www.britishgas.co.uk/content/dam/british-gas/beta/images/bg-logo-mobile.svg"),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("hr");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("hr");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","text-center");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("a");e.setAttribute(a,"class","btn btn-default"),e.setAttribute(a,"href","https://github.com/britishgas-engineering/bg-button-group");var r=e.createTextNode("back to github");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,4,4,n),a},statements:[["content","dummy-component",["loc",[null,[5,0],[5,19]]],0,0,0,0]],locals:[],templates:[]}}())}),define("dummy/templates/components/dummy-component",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){var e=function(){var e=function(){return{meta:{revision:"Ember@2.7.3",loc:{source:null,start:{line:9,column:10},end:{line:11,column:10}},moduleName:"dummy/templates/components/dummy-component.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("            ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["content","btn.label",["loc",[null,[10,12],[10,25]]],0,0,0,0]],locals:[],templates:[]}}();return{meta:{revision:"Ember@2.7.3",loc:{source:null,start:{line:8,column:8},end:{line:12,column:8}},moduleName:"dummy/templates/components/dummy-component.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","bg.button",[],["class","btn-success","value",["subexpr","@mut",[["get","btn",["loc",[null,[9,49],[9,52]]],0,0,0,0]],[],[],0,0]],0,null,["loc",[null,[9,10],[11,24]]]]],locals:["btn"],templates:[e]}}();return{meta:{revision:"Ember@2.7.3",loc:{source:null,start:{line:7,column:6},end:{line:13,column:6}},moduleName:"dummy/templates/components/dummy-component.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),a},statements:[["block","each",[["get","buttons",["loc",[null,[8,16],[8,23]]],0,0,0,0]],[],0,null,["loc",[null,[8,8],[12,17]]]]],locals:["bg"],templates:[e]}}();return{meta:{revision:"Ember@2.7.3",loc:{source:null,start:{line:1,column:0},end:{line:22,column:0}},moduleName:"dummy/templates/components/dummy-component.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","container");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","row");var r=e.createTextNode("\n\n    ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","col-sm-3");var o=e.createTextNode("\n\n");e.appendChild(r,o);var o=e.createComment("");e.appendChild(r,o);var o=e.createTextNode("    ");e.appendChild(r,o),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","col-sm-3");var o=e.createTextNode("\n      Selected:\n      ");e.appendChild(r,o);var o=e.createComment("");e.appendChild(r,o);var o=e.createTextNode("\n    ");e.appendChild(r,o),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1,1]),r=new Array(2);return r[0]=e.createMorphAt(e.childAt(a,[1]),1,1),r[1]=e.createMorphAt(e.childAt(a,[3]),1,1),r},statements:[["block","bg-button-group",[],["onButtonClick",["subexpr","action",["onButtonClickHandler"],[],["loc",[null,[7,39],[7,70]]],0,0],"selectedValue",["subexpr","@mut",[["get","selectedValue",["loc",[null,[7,85],[7,98]]],0,0,0,0]],[],[],0,0]],0,null,["loc",[null,[7,6],[13,26]]]],["content","result",["loc",[null,[17,6],[17,16]]],0,0,0,0]],locals:[],templates:[e]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=e.default.$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{default:r}}catch(e){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app").default.create({name:"bg-button-group",version:"0.0.3+e597b712"});
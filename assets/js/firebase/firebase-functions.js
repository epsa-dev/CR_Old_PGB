try{!function(e,t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};function r(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}u((r=r.apply(e,t||[])).next())})}function o(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=r[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}var i={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},a=function(e){function t(n,r,o){var i=e.call(this,r)||this;return Object.setPrototypeOf(i,t.prototype),i.code=n,i.details=o,i}return function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}(t,e),t}(Error);var s=function(){function e(e){this.app=e}return e.prototype.getAuthToken=function(){return r(this,void 0,void 0,function(){var e;return o(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,this.app.INTERNAL.getToken()];case 1:return(e=t.sent())?[2,e.accessToken]:[2,void 0];case 2:return t.sent(),[2,void 0];case 3:return[2]}})})},e.prototype.getInstanceIdToken=function(){return r(this,void 0,void 0,function(){var e;return o(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),this.app.messaging?[4,this.app.messaging().getToken()]:[2,void 0];case 1:return(e=t.sent())?[2,e]:[2,void 0];case 2:return t.sent(),[2,void 0];case 3:return[2]}})})},e.prototype.getContext=function(){return r(this,void 0,void 0,function(){var e,t;return o(this,function(n){switch(n.label){case 0:return[4,this.getAuthToken()];case 1:return e=n.sent(),[4,this.getInstanceIdToken()];case 2:return t=n.sent(),[2,{authToken:e,instanceIdToken:t}]}})})},e}();function u(e,t){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n}var c,l=function(){function e(){}return e.prototype.encode=function(e){var t=this;if(null===e||void 0===e)return null;if(e instanceof Number&&(e=e.valueOf()),"number"==typeof e&&isFinite(e))return e;if(!0===e||!1===e)return e;if("[object String]"===Object.prototype.toString.call(e))return e;if(Array.isArray(e))return e.map(function(e){return t.encode(e)});if("function"==typeof e||"object"==typeof e)return u(e,function(e){return t.encode(e)});throw new Error("Data cannot be encoded in JSON: "+e)},e.prototype.decode=function(e){var t=this;if(null===e)return e;if(e["@type"])switch(e["@type"]){case"type.googleapis.com/google.protobuf.Int64Value":case"type.googleapis.com/google.protobuf.UInt64Value":var n=parseFloat(e.value);if(isNaN(n))throw new Error("Data cannot be decoded from JSON: "+e);return n;default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map(function(e){return t.decode(e)}):"function"==typeof e||"object"==typeof e?u(e,function(e){return t.decode(e)}):e},e}(),f=function(){function e(e,t){void 0===t&&(t="us-central1"),this.app_=e,this.region_=t,this.serializer=new l,this.emulatorOrigin=null,this.contextProvider=new s(e)}return Object.defineProperty(e.prototype,"app",{get:function(){return this.app_},enumerable:!0,configurable:!0}),e.prototype._url=function(e){var t=this.app_.options.projectId,n=this.region_;return null!==this.emulatorOrigin?this.emulatorOrigin+"/"+t+"/"+n+"/"+e:"https://"+n+"-"+t+".cloudfunctions.net/"+e},e.prototype.useFunctionsEmulator=function(e){this.emulatorOrigin=e},e.prototype.httpsCallable=function(e){var t=this;return function(n){return t.call(e,n)}},e.prototype.postJSON=function(e,t,n){return r(this,void 0,void 0,function(){var r,i;return o(this,function(o){switch(o.label){case 0:n.append("Content-Type","application/json"),o.label=1;case 1:return o.trys.push([1,3,,4]),[4,fetch(e,{method:"POST",body:JSON.stringify(t),headers:n})];case 2:return r=o.sent(),[3,4];case 3:return o.sent(),[2,{status:0,json:null}];case 4:i=null,o.label=5;case 5:return o.trys.push([5,7,,8]),[4,r.json()];case 6:return i=o.sent(),[3,8];case 7:return o.sent(),[3,8];case 8:return[2,{status:r.status,json:i}]}})})},e.prototype.call=function(e,t){return r(this,void 0,void 0,function(){var n,r,s,u,c,l,f;return o(this,function(o){switch(o.label){case 0:return n=this._url(e),t=this.serializer.encode(t),r={data:t},s=new Headers,[4,this.contextProvider.getContext()];case 1:return(u=o.sent()).authToken&&s.append("Authorization","Bearer "+u.authToken),u.instanceIdToken&&s.append("Firebase-Instance-ID-Token",u.instanceIdToken),[4,this.postJSON(n,r,s)];case 2:if(c=o.sent(),l=function(e,t,n){var r=function(e){if(e>=200&&e<300)return"ok";switch(e){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}(e),o=r,s=void 0;try{var u=t.error;if(u){var c=u.status;if("string"==typeof c){if(!i[c])return new a("internal","internal");r=i[c]}o=c;var l=u.message;"string"==typeof l&&(o=l),void 0!==(s=u.details)&&(s=n.decode(s))}}catch(e){}return"ok"===r?null:new a(r,o,s)}(c.status,c.json,this.serializer))throw l;if(!c.json)throw new a("internal","Response is not valid JSON object.");if(void 0===(f=c.json.data)&&(f=c.json.result),void 0===f)throw new a("internal","Response is missing data field.");return[2,{data:this.serializer.decode(f)}]}})})},e}(),p="functions";function d(e,t,n){return new f(e,n)}c={Functions:f},t.INTERNAL.registerService(p,d,c,void 0,!0)}(this.firebase=this.firebase||{},firebase)}catch(e){throw console.error(e),new Error("Cannot instantiate firebase-functions - be sure to load firebase-app.js first.")}
//# sourceMappingURL=firebase-functions.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-admin-layout-admin-layout-module"],{

/***/ "./node_modules/leaflet-geosearch/dist/geosearch.module.js":
/*!*****************************************************************!*\
  !*** ./node_modules/leaflet-geosearch/dist/geosearch.module.js ***!
  \*****************************************************************/
/*! exports provided: AlgoliaProvider, BingProvider, EsriProvider, GeoSearchControl, GoogleProvider, HereProvider, JsonProvider, LocationIQProvider, OpenCageProvider, OpenStreetMapProvider, SearchControl, SearchElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgoliaProvider", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BingProvider", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsriProvider", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoSearchControl", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleProvider", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HereProvider", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonProvider", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationIQProvider", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenCageProvider", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenStreetMapProvider", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchControl", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchElement", function() { return v; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
function e(){return(e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function i(t,e,n){return(i=o()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var i=new(Function.bind.apply(t,o));return n&&r(i,n.prototype),i}).apply(null,arguments)}function s(t,e,n,r){void 0===e&&(e=""),void 0===r&&(r={});var o=document.createElement(t);return e&&(o.className=e),Object.keys(r).forEach(function(t){if("function"==typeof r[t]){var e=0===t.indexOf("on")?t.substr(2).toLowerCase():t;o.addEventListener(e,r[t])}else"html"===t?o.innerHTML=r[t]:"text"===t?o.innerText=r[t]:o.setAttribute(t,r[t])}),n&&n.appendChild(o),o}function a(t){t.preventDefault(),t.stopPropagation()}var u=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.filter(Boolean).join(" ").trim()};function c(t,e){t&&t.classList&&(Array.isArray(e)?e:[e]).forEach(function(e){t.classList.contains(e)||t.classList.add(e)})}function l(t,e){t&&t.classList&&(Array.isArray(e)?e:[e]).forEach(function(e){t.classList.contains(e)&&t.classList.remove(e)})}var h,p=13,f=40,d=38,m=[p,27,f,d,37,39],v=function(){function t(t){var e=this,n=t.handleSubmit,r=t.searchLabel,o=t.classNames,i=void 0===o?{}:o;this.hasError=!1,this.container=s("div",u("geosearch",i.container)),this.form=s("form",["",i.form].join(" "),this.container,{autocomplete:"none",onClick:a,onDblClick:a,touchStart:a,touchEnd:a}),this.input=s("input",["glass",i.input].join(" "),this.form,{type:"text",placeholder:r||"search",onInput:this.onInput,onKeyUp:function(t){return e.onKeyUp(t)},onKeyPress:function(t){return e.onKeyPress(t)},onFocus:this.onFocus,onBlur:this.onBlur,onClick:function(){e.input.focus(),e.input.dispatchEvent(new Event("focus"))}}),this.handleSubmit=n}var e=t.prototype;return e.onFocus=function(){c(this.form,"active")},e.onBlur=function(){l(this.form,"active")},e.onSubmit=function(t){try{var e=this;return a(t),l(n=e.container,"error"),c(n,"pending"),Promise.resolve(e.handleSubmit({query:e.input.value})).then(function(){l(e.container,"pending")})}catch(t){return Promise.reject(t)}var n},e.onInput=function(){this.hasError&&(l(this.container,"error"),this.hasError=!1)},e.onKeyUp=function(t){27===t.keyCode&&(l(this.container,["pending","active"]),this.input.value="",document.body.focus(),document.body.blur())},e.onKeyPress=function(t){t.keyCode===p&&this.onSubmit(t)},e.setQuery=function(t){this.input.value=t},t}(),y=function(){function t(t){var e=this,n=t.handleClick,r=t.classNames,o=void 0===r?{}:r;this.selected=-1,this.results=[],this.onClick=function(t){if("function"==typeof e.handleClick){var n=t.target;if(n&&e.container.contains(n)&&n.hasAttribute("data-key")){var r=Number(n.getAttribute("data-key"));e.handleClick({result:e.results[r]})}}},this.handleClick=n,this.container=s("div",u("results",o.container)),this.container.addEventListener("click",this.onClick,!0),this.resultItem=s("div",u(o.item))}var e=t.prototype;return e.render=function(t){var e=this;void 0===t&&(t=[]),this.clear(),t.forEach(function(t,n){var r=e.resultItem.cloneNode(!0);r.setAttribute("data-key",""+n),r.innerHTML=t.label,e.container.appendChild(r)}),t.length>0&&(c(this.container.parentElement,"open"),c(this.container,"active")),this.results=t},e.select=function(t){return Array.from(this.container.children).forEach(function(e,n){return n===t?c(e,"active"):l(e,"active")}),this.selected=t,this.results[t]},e.count=function(){return this.results?this.results.length:0},e.clear=function(){for(this.selected=-1;this.container.lastChild;)this.container.removeChild(this.container.lastChild);l(this.container.parentElement,"open"),l(this.container,"active")},t}(),g={position:"topleft",style:"button",showMarker:!0,showPopup:!1,popupFormat:function(t){return""+t.result.label},marker:{icon:leaflet__WEBPACK_IMPORTED_MODULE_0___default.a&&leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.Icon?new leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.Icon.Default:void 0,draggable:!1},maxMarkers:1,maxSuggestions:5,retainZoomLevel:!1,animateZoom:!0,searchLabel:"Enter address",notFoundMessage:"Sorry, that address could not be found.",messageHideDelay:3e3,zoomLevel:18,classNames:{container:"leaflet-bar leaflet-control leaflet-control-geosearch",button:"leaflet-bar-part leaflet-bar-part-single",resetButton:"reset",msgbox:"leaflet-bar message",form:"",input:""},autoComplete:!0,autoCompleteDelay:250,autoClose:!1,keepResult:!1},b="Leaflet must be loaded before instantiating the GeoSearch control",E={options:e({},g),classNames:e({},g.classNames),initialize:function(n){var r,o,i,a,u=this;if(!leaflet__WEBPACK_IMPORTED_MODULE_0___default.a)throw new Error(b);if(!n.provider)throw new Error("Provider is missing from options");this.options=e({},this.options,{},n),this.classNames=e({},this.classNames,{},n.classNames),this.markers=new leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.FeatureGroup,this.classNames.container+=" leaflet-geosearch-"+this.options.style,this.searchElement=new v({searchLabel:this.options.searchLabel,classNames:{container:this.classNames.container,form:this.classNames.form,input:this.classNames.input},handleSubmit:function(t){return u.onSubmit(t)}}),this.button=s("a",this.classNames.button,this.searchElement.container,{title:this.options.searchLabel,href:"#",onClick:function(t){return u.onClick(t)}}),leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.DomEvent.disableClickPropagation(this.button),this.resetButton=s("a",this.classNames.resetButton,this.searchElement.form,{text:"×",href:"#",onClick:function(){return u.clearResults(null,!0)}}),leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.DomEvent.disableClickPropagation(this.resetButton),this.options.autoComplete&&(this.resultList=new y({handleClick:function(t){var e=t.result;u.searchElement.input.value=e.label,u.onSubmit({query:e.label,data:e})}}),this.searchElement.form.appendChild(this.resultList.container),this.searchElement.input.addEventListener("keyup",(r=function(t){return u.autoSearch(t)},void 0===(o=this.options.autoCompleteDelay)&&(o=250),void 0===i&&(i=!1),function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];a&&clearTimeout(a),a=setTimeout(function(){a=null,i||r.apply(void 0,e)},o),i&&!a&&r.apply(void 0,e)}),!0),this.searchElement.input.addEventListener("keydown",function(t){return u.selectResult(t)},!0),this.searchElement.input.addEventListener("keydown",function(t){return u.clearResults(t,!0)},!0)),this.searchElement.form.addEventListener("click",function(t){t.preventDefault()},!1)},onAdd:function(e){var n=this.options,r=n.showMarker,o=n.style;if(this.map=e,r&&this.markers.addTo(e),"bar"===o){var i=e.getContainer().querySelector(".leaflet-control-container");this.container=s("div","leaflet-control-geosearch leaflet-geosearch-bar"),this.container.appendChild(this.searchElement.form),i.appendChild(this.container)}return leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.DomEvent.disableClickPropagation(this.searchElement.form),this.searchElement.container},onRemove:function(){var t;return null==(t=this.container)||t.remove(),this},onClick:function(t){t.preventDefault(),t.stopPropagation();var e=this.searchElement,n=e.container,r=e.input;n.classList.contains("active")?(l(n,"active"),this.clearResults()):(c(n,"active"),r.focus())},selectResult:function(t){if(-1!==[p,f,d].indexOf(t.keyCode))if(t.preventDefault(),t.keyCode!==p){var e=this.resultList.count()-1;if(!(e<0)){var n=this.resultList.selected,r=t.keyCode===f?n+1:n-1,o=this.resultList.select(r<0?e:r>e?0:r);this.searchElement.input.value=o.label}}else{var i=this.resultList.select(this.resultList.selected);this.onSubmit({query:this.searchElement.input.value,data:i})}},clearResults:function(t,e){if(void 0===e&&(e=!1),!t||27===t.keyCode){var n=this.options,r=n.autoComplete;!e&&n.keepResult||(this.searchElement.input.value="",this.markers.clearLayers()),r&&this.resultList.clear()}},autoSearch:function(t){try{var e=this;if(m.indexOf(t.keyCode)>-1)return Promise.resolve();var n=t.target.value,r=e.options.provider,o=function(){if(n.length)return Promise.resolve(r.search({query:n})).then(function(t){t=t.slice(0,e.options.maxSuggestions),e.resultList.render(t)});e.resultList.clear()}();return Promise.resolve(o&&o.then?o.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},onSubmit:function(t){try{var e=this;return Promise.resolve(e.options.provider.search(t)).then(function(n){n&&n.length>0&&e.showResult(n[0],t)})}catch(t){return Promise.reject(t)}},showResult:function(t,e){var n=this.options.autoClose,r=Object.keys(this.markers._layers);r.length>=this.options.maxMarkers&&this.markers.removeLayer(r[0]);var o=this.addMarker(t,e);this.centerMap(t),this.map.fireEvent("geosearch/showlocation",{location:t,marker:o}),n&&this.closeResults()},closeResults:function(){var t=this.searchElement.container;t.classList.contains("active")&&l(t,"active"),this.clearResults()},addMarker:function(e,n){var r=this,o=this.options,i=o.marker,s=o.showPopup,a=o.popupFormat,u=new leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.Marker([e.y,e.x],i),c=e.label;return"function"==typeof a&&(c=a({query:n,result:e})),u.bindPopup(c),this.markers.addLayer(u),s&&u.openPopup(),i.draggable&&u.on("dragend",function(t){r.map.fireEvent("geosearch/marker/dragend",{location:u.getLatLng(),event:t})}),u},centerMap:function(e){var n=this.options,r=n.retainZoomLevel,o=n.animateZoom,i=e.bounds?new leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.LatLngBounds(e.bounds):new leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.LatLng(e.y,e.x).toBounds(10),s=i.isValid()?i:this.markers.getBounds();!r&&i.isValid()?this.map.fitBounds(s,{animate:o}):this.map.setView(s.getCenter(),this.getZoom(),{animate:o})},getZoom:function(){var t=this.options,e=t.zoomLevel;return t.retainZoomLevel?this.map.getZoom():e}};function L(){if(!leaflet__WEBPACK_IMPORTED_MODULE_0___default.a)throw new Error(b);for(var e=leaflet__WEBPACK_IMPORTED_MODULE_0___default.a.Control.extend(E),n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return i(e,r)}!function(t){t[t.SEARCH=0]="SEARCH",t[t.REVERSE=1]="REVERSE"}(h||(h={}));var k=function(){function t(t){void 0===t&&(t={}),this.options=t}var n=t.prototype;return n.getParamString=function(t){void 0===t&&(t={});var n=e({},this.options.params,{},t);return Object.keys(n).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(n[t])}).join("&")},n.getUrl=function(t,e){return t+"?"+this.getParamString(e)},n.search=function(t){try{var e=this,n=e.endpoint({query:t.query,type:h.SEARCH});return Promise.resolve(fetch(n)).then(function(t){return Promise.resolve(t.json()).then(function(t){return e.parse({data:t})})})}catch(t){return Promise.reject(t)}},t}(),w=function(t){function r(){return t.apply(this,arguments)||this}n(r,t);var o=r.prototype;return o.endpoint=function(){return"https://places-dsn.algolia.net/1/places/query"},o.findBestMatchLevelIndex=function(t){var e=t.find(function(t){return"full"===t.matchLevel})||t.find(function(t){return"partial"===t.matchLevel});return e?t.indexOf(e):0},o.getLabel=function(t){var e,n,r,o;return[null==(e=t.locale_names)?void 0:e.default[this.findBestMatchLevelIndex(t._highlightResult.locale_names.default)],null==(n=t.city)?void 0:n.default[this.findBestMatchLevelIndex(t._highlightResult.city.default)],t.administrative[this.findBestMatchLevelIndex(t._highlightResult.administrative)],null==(r=t.postcode)?void 0:r[this.findBestMatchLevelIndex(t._highlightResult.postcode)],null==(o=t.country)?void 0:o.default].filter(Boolean).join(", ")},o.parse=function(t){var e=this;return t.data.hits.map(function(t){return{x:t._geoloc.lng,y:t._geoloc.lat,label:e.getLabel(t),bounds:null,raw:t}})},o.search=function(t){var n=t.query;try{var r=this,o="string"==typeof n?{query:n}:n;return Promise.resolve(fetch(r.endpoint(),{method:"POST",body:JSON.stringify(e({},r.options.params,{},o))})).then(function(t){return Promise.resolve(t.json()).then(function(t){return r.parse({data:t})})})}catch(t){return Promise.reject(t)}},r}(k),C=function(t){function e(){var e;return(e=t.apply(this,arguments)||this).searchUrl="https://dev.virtualearth.net/REST/v1/Locations",e}n(e,t);var r=e.prototype;return r.endpoint=function(t){var e=t.query,n="string"==typeof e?{q:e}:e;return n.jsonp=t.jsonp,this.getUrl(this.searchUrl,n)},r.parse=function(t){return 0===t.data.resourceSets.length?[]:t.data.resourceSets[0].resources.map(function(t){return{x:t.point.coordinates[1],y:t.point.coordinates[0],label:t.address.formattedAddress,bounds:[[t.bbox[0],t.bbox[1]],[t.bbox[2],t.bbox[3]]],raw:t}})},r.search=function(t){var e,n,r,o=t.query;try{var i=this,a="BING_JSONP_CB_"+Date.now();return Promise.resolve((e=i.endpoint({query:o,jsonp:a}),n=a,r=s("script",null,document.body),r.setAttribute("type","text/javascript"),new Promise(function(t){window[n]=function(e){r.remove(),delete window[n],t(e)},r.setAttribute("src",e)}))).then(function(t){return i.parse({data:t})})}catch(t){return Promise.reject(t)}},e}(k),x=function(t){function e(){var e;return(e=t.apply(this,arguments)||this).searchUrl="https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/find",e}n(e,t);var r=e.prototype;return r.endpoint=function(t){var e=t.query,n="string"==typeof e?{text:e}:e;return n.f="json",this.getUrl(this.searchUrl,n)},r.parse=function(t){return t.data.locations.map(function(t){return{x:t.feature.geometry.x,y:t.feature.geometry.y,label:t.name,bounds:[[t.extent.ymin,t.extent.xmin],[t.extent.ymax,t.extent.xmax]],raw:t}})},e}(k),P=function(t){function e(){var e;return(e=t.apply(this,arguments)||this).searchUrl="https://maps.googleapis.com/maps/api/geocode/json",e}n(e,t);var r=e.prototype;return r.endpoint=function(t){var e=t.query;return this.getUrl(this.searchUrl,"string"==typeof e?{address:e}:e)},r.parse=function(t){return t.data.results.map(function(t){return{x:t.geometry.location.lng,y:t.geometry.location.lat,label:t.formatted_address,bounds:[[t.geometry.viewport.southwest.lat,t.geometry.viewport.southwest.lng],[t.geometry.viewport.northeast.lat,t.geometry.viewport.northeast.lng]],raw:t}})},e}(k),R=function(t){function e(){var e;return(e=t.apply(this,arguments)||this).searchUrl="https://geocode.search.hereapi.com/v1/geocode",e}n(e,t);var r=e.prototype;return r.endpoint=function(t){var e=t.query;return this.getUrl(this.searchUrl,"string"==typeof e?{q:e}:e)},r.parse=function(t){return t.data.items.map(function(t){return{x:t.position.lng,y:t.position.lat,label:t.address.label,bounds:null,raw:t}})},e}(k),S=function(t){function e(e){var n;void 0===e&&(e={});var r="https://nominatim.openstreetmap.org";return(n=t.call(this,e)||this).searchUrl=e.searchUrl||r+"/search",n.reverseUrl=e.reverseUrl||r+"/reverse",n}n(e,t);var r=e.prototype;return r.endpoint=function(t){var e=t.query,n=t.type,r="string"==typeof e?{q:e}:e;switch(r.format="json",n){case h.REVERSE:return this.getUrl(this.reverseUrl,r);default:return this.getUrl(this.searchUrl,r)}},r.parse=function(t){return(Array.isArray(t.data)?t.data:[t.data]).map(function(t){return{x:Number(t.lon),y:Number(t.lat),label:t.display_name,bounds:[[parseFloat(t.boundingbox[0]),parseFloat(t.boundingbox[2])],[parseFloat(t.boundingbox[1]),parseFloat(t.boundingbox[3])]],raw:t}})},e}(k),U=function(t){function r(n){return t.call(this,e({},n,{searchUrl:"https://locationiq.org/v1/search.php",reverseUrl:"https://locationiq.org/v1/reverse.php"}))||this}return n(r,t),r}(S),j=function(t){function e(){var e;return(e=t.apply(this,arguments)||this).searchUrl="https://api.opencagedata.com/geocode/v1/json",e}n(e,t);var r=e.prototype;return r.endpoint=function(t){var e=t.query,n="string"==typeof e?{q:e}:e;return n.format="json",this.getUrl(this.searchUrl,n)},r.parse=function(t){return t.data.results.map(function(t){return{x:t.geometry.lng,y:t.geometry.lat,label:t.formatted,bounds:[[t.bounds.southwest.lat,t.bounds.southwest.lng],[t.bounds.northeast.lat,t.bounds.northeast.lng]],raw:t}})},r.search=function(e){try{return Promise.resolve(e.query.length<2?[]:t.prototype.search.call(this,e))}catch(t){return Promise.reject(t)}},e}(k);
//# sourceMappingURL=geosearch.module.js.map


/***/ }),

/***/ "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm5/ngx-clipboard.js":
/*!************************************************************************!*\
  !*** ./node_modules/ngx-clipboard/__ivy_ngcc__/fesm5/ngx-clipboard.js ***!
  \************************************************************************/
/*! exports provided: ClipboardDirective, ClipboardIfSupportedDirective, ClipboardModule, ClipboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardDirective", function() { return ClipboardDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardIfSupportedDirective", function() { return ClipboardIfSupportedDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardModule", function() { return ClipboardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardService", function() { return ClipboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ngx_window_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-window-token */ "./node_modules/ngx-window-token/__ivy_ngcc__/fesm5/ngx-window-token.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






/**
 * The following code is heavily copied from https://github.com/zenorocha/clipboard.js
 */

var ClipboardService = /** @class */ (function () {
    function ClipboardService(document, window) {
        this.document = document;
        this.window = window;
        this.copySubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.copyResponse$ = this.copySubject.asObservable();
        this.config = {};
    }
    ClipboardService.prototype.configure = function (config) {
        this.config = config;
    };
    ClipboardService.prototype.copy = function (content) {
        if (!this.isSupported || !content) {
            return this.pushCopyResponse({ isSuccess: false, content: content });
        }
        var copyResult = this.copyFromContent(content);
        if (copyResult) {
            return this.pushCopyResponse({ content: content, isSuccess: copyResult });
        }
        return this.pushCopyResponse({ isSuccess: false, content: content });
    };
    Object.defineProperty(ClipboardService.prototype, "isSupported", {
        get: function () {
            return !!this.document.queryCommandSupported && !!this.document.queryCommandSupported('copy') && !!this.window;
        },
        enumerable: true,
        configurable: true
    });
    ClipboardService.prototype.isTargetValid = function (element) {
        if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
            if (element.hasAttribute('disabled')) {
                throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
            }
            return true;
        }
        throw new Error('Target should be input or textarea');
    };
    /**
     * Attempts to copy from an input `targetElm`
     */
    ClipboardService.prototype.copyFromInputElement = function (targetElm, isFocus) {
        if (isFocus === void 0) { isFocus = true; }
        try {
            this.selectTarget(targetElm);
            var re = this.copyText();
            this.clearSelection(isFocus ? targetElm : undefined, this.window);
            return re && this.isCopySuccessInIE11();
        }
        catch (error) {
            return false;
        }
    };
    /**
     * This is a hack for IE11 to return `true` even if copy fails.
     */
    ClipboardService.prototype.isCopySuccessInIE11 = function () {
        var clipboardData = this.window['clipboardData'];
        if (clipboardData && clipboardData.getData) {
            if (!clipboardData.getData('Text')) {
                return false;
            }
        }
        return true;
    };
    /**
     * Creates a fake textarea element, sets its value from `text` property,
     * and makes a selection on it.
     */
    ClipboardService.prototype.copyFromContent = function (content, container) {
        if (container === void 0) { container = this.document.body; }
        // check if the temp textarea still belongs to the current container.
        // In case we have multiple places using ngx-clipboard, one is in a modal using container but the other one is not.
        if (this.tempTextArea && !container.contains(this.tempTextArea)) {
            this.destroy(this.tempTextArea.parentElement);
        }
        if (!this.tempTextArea) {
            this.tempTextArea = this.createTempTextArea(this.document, this.window);
            try {
                container.appendChild(this.tempTextArea);
            }
            catch (error) {
                throw new Error('Container should be a Dom element');
            }
        }
        this.tempTextArea.value = content;
        var toReturn = this.copyFromInputElement(this.tempTextArea, false);
        if (this.config.cleanUpAfterCopy) {
            this.destroy(this.tempTextArea.parentElement);
        }
        return toReturn;
    };
    /**
     * Remove temporary textarea if any exists.
     */
    ClipboardService.prototype.destroy = function (container) {
        if (container === void 0) { container = this.document.body; }
        if (this.tempTextArea) {
            container.removeChild(this.tempTextArea);
            // removeChild doesn't remove the reference from memory
            this.tempTextArea = undefined;
        }
    };
    /**
     * Select the target html input element.
     */
    ClipboardService.prototype.selectTarget = function (inputElement) {
        inputElement.select();
        inputElement.setSelectionRange(0, inputElement.value.length);
        return inputElement.value.length;
    };
    ClipboardService.prototype.copyText = function () {
        return this.document.execCommand('copy');
    };
    /**
     * Moves focus away from `target` and back to the trigger, removes current selection.
     */
    ClipboardService.prototype.clearSelection = function (inputElement, window) {
        inputElement && inputElement.focus();
        window.getSelection().removeAllRanges();
    };
    /**
     * Creates a fake textarea for copy command.
     */
    ClipboardService.prototype.createTempTextArea = function (doc, window) {
        var isRTL = doc.documentElement.getAttribute('dir') === 'rtl';
        var ta;
        ta = doc.createElement('textarea');
        // Prevent zooming on iOS
        ta.style.fontSize = '12pt';
        // Reset box model
        ta.style.border = '0';
        ta.style.padding = '0';
        ta.style.margin = '0';
        // Move element out of screen horizontally
        ta.style.position = 'absolute';
        ta.style[isRTL ? 'right' : 'left'] = '-9999px';
        // Move element to the same position vertically
        var yPosition = window.pageYOffset || doc.documentElement.scrollTop;
        ta.style.top = yPosition + 'px';
        ta.setAttribute('readonly', '');
        return ta;
    };
    /**
     * Pushes copy operation response to copySubject, to provide global access
     * to the response.
     */
    ClipboardService.prototype.pushCopyResponse = function (response) {
        this.copySubject.next(response);
    };
    /**
     * @deprecated use pushCopyResponse instead.
     */
    ClipboardService.prototype.pushCopyReponse = function (response) {
        this.pushCopyResponse(response);
    };
    ClipboardService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [ngx_window_token__WEBPACK_IMPORTED_MODULE_3__["WINDOW"],] }] }
    ]; };
    ClipboardService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"])({ factory: function ClipboardService_Factory() { return new ClipboardService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"])(ngx_window_token__WEBPACK_IMPORTED_MODULE_3__["WINDOW"], 8)); }, token: ClipboardService, providedIn: "root" });
    ClipboardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(ngx_window_token__WEBPACK_IMPORTED_MODULE_3__["WINDOW"]))
    ], ClipboardService);
ClipboardService.ɵfac = function ClipboardService_Factory(t) { return new (t || ClipboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_window_token__WEBPACK_IMPORTED_MODULE_3__["WINDOW"], 8)); };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ClipboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [ngx_window_token__WEBPACK_IMPORTED_MODULE_3__["WINDOW"]]
            }] }]; }, null); })();
    return ClipboardService;
}());

var ClipboardDirective = /** @class */ (function () {
    function ClipboardDirective(clipboardSrv) {
        this.clipboardSrv = clipboardSrv;
        this.cbOnSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.cbOnError = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    // tslint:disable-next-line:no-empty
    ClipboardDirective.prototype.ngOnInit = function () { };
    ClipboardDirective.prototype.ngOnDestroy = function () {
        this.clipboardSrv.destroy(this.container);
    };
    ClipboardDirective.prototype.onClick = function (event) {
        if (!this.clipboardSrv.isSupported) {
            this.handleResult(false, undefined, event);
        }
        else if (this.targetElm && this.clipboardSrv.isTargetValid(this.targetElm)) {
            this.handleResult(this.clipboardSrv.copyFromInputElement(this.targetElm), this.targetElm.value, event);
        }
        else if (this.cbContent) {
            this.handleResult(this.clipboardSrv.copyFromContent(this.cbContent, this.container), this.cbContent, event);
        }
    };
    /**
     * Fires an event based on the copy operation result.
     * @param succeeded
     */
    ClipboardDirective.prototype.handleResult = function (succeeded, copiedContent, event) {
        var response = {
            isSuccess: succeeded,
            event: event
        };
        if (succeeded) {
            response = Object.assign(response, {
                content: copiedContent,
                successMessage: this.cbSuccessMsg
            });
            this.cbOnSuccess.emit(response);
        }
        else {
            this.cbOnError.emit(response);
        }
        this.clipboardSrv.pushCopyResponse(response);
    };
    ClipboardDirective.ctorParameters = function () { return [
        { type: ClipboardService }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('ngxClipboard')
    ], ClipboardDirective.prototype, "targetElm", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
    ], ClipboardDirective.prototype, "container", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
    ], ClipboardDirective.prototype, "cbContent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
    ], ClipboardDirective.prototype, "cbSuccessMsg", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
    ], ClipboardDirective.prototype, "cbOnSuccess", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
    ], ClipboardDirective.prototype, "cbOnError", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('click', ['$event.target'])
    ], ClipboardDirective.prototype, "onClick", null);
ClipboardDirective.ɵfac = function ClipboardDirective_Factory(t) { return new (t || ClipboardDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ClipboardService)); };
ClipboardDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: ClipboardDirective, selectors: [["", "ngxClipboard", ""]], hostBindings: function ClipboardDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClipboardDirective_click_HostBindingHandler($event) { return ctx.onClick($event.target); });
    } }, inputs: { targetElm: ["ngxClipboard", "targetElm"], container: "container", cbContent: "cbContent", cbSuccessMsg: "cbSuccessMsg" }, outputs: { cbOnSuccess: "cbOnSuccess", cbOnError: "cbOnError" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ClipboardDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[ngxClipboard]'
            }]
    }], function () { return [{ type: ClipboardService }]; }, { cbOnSuccess: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], cbOnError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['click', ['$event.target']]
        }], targetElm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['ngxClipboard']
        }], container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], cbContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], cbSuccessMsg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
    return ClipboardDirective;
}());

var ClipboardIfSupportedDirective = /** @class */ (function () {
    function ClipboardIfSupportedDirective(_clipboardService, _viewContainerRef, _templateRef) {
        this._clipboardService = _clipboardService;
        this._viewContainerRef = _viewContainerRef;
        this._templateRef = _templateRef;
    }
    ClipboardIfSupportedDirective.prototype.ngOnInit = function () {
        if (this._clipboardService.isSupported) {
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }
    };
    ClipboardIfSupportedDirective.ctorParameters = function () { return [
        { type: ClipboardService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] }
    ]; };
ClipboardIfSupportedDirective.ɵfac = function ClipboardIfSupportedDirective_Factory(t) { return new (t || ClipboardIfSupportedDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ClipboardService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"])); };
ClipboardIfSupportedDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: ClipboardIfSupportedDirective, selectors: [["", "ngxClipboardIfSupported", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ClipboardIfSupportedDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: '[ngxClipboardIfSupported]'
            }]
    }], function () { return [{ type: ClipboardService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"] }]; }, null); })();
    return ClipboardIfSupportedDirective;
}());

var ClipboardModule = /** @class */ (function () {
    function ClipboardModule() {
    }
ClipboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ClipboardModule });
ClipboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ClipboardModule_Factory(t) { return new (t || ClipboardModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ClipboardModule, { declarations: function () { return [ClipboardDirective,
        ClipboardIfSupportedDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [ClipboardDirective,
        ClipboardIfSupportedDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ClipboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [ClipboardDirective, ClipboardIfSupportedDirective],
                exports: [ClipboardDirective, ClipboardIfSupportedDirective]
            }]
    }], function () { return []; }, null); })();
    return ClipboardModule;
}());

/*
 * Public API Surface of ngx-clipboard
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-clipboard.js.map

/***/ }),

/***/ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js":
/*!********************************************************************!*\
  !*** ./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js ***!
  \********************************************************************/
/*! exports provided: NgxSpinnerComponent, NgxSpinnerModule, NgxSpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSpinnerComponent", function() { return NgxSpinnerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSpinnerModule", function() { return NgxSpinnerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSpinnerService", function() { return NgxSpinnerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");










function NgxSpinnerComponent_div_0_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");
} }
function NgxSpinnerComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgxSpinnerComponent_div_0_div_1_div_1_Template, 1, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r1.spinner.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("color", ctx_r1.spinner.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.spinner.divArray);
} }
function NgxSpinnerComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 6);
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r2.template, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function NgxSpinnerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgxSpinnerComponent_div_0_div_1_Template, 2, 5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NgxSpinnerComponent_div_0_div_2_Template, 1, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx_r0.spinner.bdColor)("z-index", ctx_r0.spinner.zIndex)("position", ctx_r0.spinner.fullScreen ? "fixed" : "absolute");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeIn", "in");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.template);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.template);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("z-index", ctx_r0.spinner.zIndex);
} }
var _c0 = ["*"];
var LOADERS = {
    'ball-8bits': 16,
    'ball-atom': 4,
    'ball-beat': 3,
    'ball-circus': 5,
    'ball-climbing-dot': 4,
    'ball-clip-rotate': 1,
    'ball-clip-rotate-multiple': 2,
    'ball-clip-rotate-pulse': 2,
    'ball-elastic-dots': 5,
    'ball-fall': 3,
    'ball-fussion': 4,
    'ball-grid-beat': 9,
    'ball-grid-pulse': 9,
    'ball-newton-cradle': 4,
    'ball-pulse': 3,
    'ball-pulse-rise': 5,
    'ball-pulse-sync': 3,
    'ball-rotate': 1,
    'ball-running-dots': 5,
    'ball-scale': 1,
    'ball-scale-multiple': 3,
    'ball-scale-pulse': 2,
    'ball-scale-ripple': 1,
    'ball-scale-ripple-multiple': 3,
    'ball-spin': 8,
    'ball-spin-clockwise': 8,
    'ball-spin-clockwise-fade': 8,
    'ball-spin-clockwise-fade-rotating': 8,
    'ball-spin-fade': 8,
    'ball-spin-fade-rotating': 8,
    'ball-spin-rotate': 2,
    'ball-square-clockwise-spin': 8,
    'ball-square-spin': 8,
    'ball-triangle-path': 3,
    'ball-zig-zag': 2,
    'ball-zig-zag-deflect': 2,
    'cog': 1,
    'cube-transition': 2,
    'fire': 3,
    'line-scale': 5,
    'line-scale-party': 5,
    'line-scale-pulse-out': 5,
    'line-scale-pulse-out-rapid': 5,
    'line-spin-clockwise-fade': 8,
    'line-spin-clockwise-fade-rotating': 8,
    'line-spin-fade': 8,
    'line-spin-fade-rotating': 8,
    'pacman': 6,
    'square-jelly-box': 2,
    'square-loader': 1,
    'square-spin': 1,
    'timer': 1,
    'triangle-skew-spin': 1
};
var DEFAULTS = {
    BD_COLOR: 'rgba(51,51,51,0.8)',
    SPINNER_COLOR: '#fff',
    SPINNER_TYPE: 'ball-scale-multiple',
    Z_INDEX: 99999,
};
var PRIMARY_SPINNER = 'primary';
var NgxSpinner = /** @class */ (function () {
    function NgxSpinner(init) {
        Object.assign(this, init);
    }
    return NgxSpinner;
}());

var NgxSpinnerService = /** @class */ (function () {
    /**
     * Creates an instance of NgxSpinnerService.
     * @memberof NgxSpinnerService
     */
    function NgxSpinnerService() {
        /**
         * Spinner observable
         *
         * @memberof NgxSpinnerService
         */
        this.spinnerObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
    }
    /**
    * Get subscription of desired spinner
    * @memberof NgxSpinnerService
    **/
    NgxSpinnerService.prototype.getSpinner = function (name) {
        return this.spinnerObservable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (x) { return x && x.name === name; }));
    };
    /**
     * To show spinner
     *
     * @memberof NgxSpinnerService
     */
    NgxSpinnerService.prototype.show = function (name, spinner) {
        var _this = this;
        if (name === void 0) { name = PRIMARY_SPINNER; }
        var showPromise = new Promise(function (resolve, _reject) {
            if (spinner && Object.keys(spinner).length) {
                spinner['name'] = name;
                _this.spinnerObservable.next(new NgxSpinner(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, spinner), { show: true })));
                resolve(true);
            }
            else {
                _this.spinnerObservable.next(new NgxSpinner({ name: name, show: true }));
                resolve(true);
            }
        });
        return showPromise;
    };
    /**
    * To hide spinner
    *
    * @memberof NgxSpinnerService
    */
    NgxSpinnerService.prototype.hide = function (name, debounce) {
        var _this = this;
        if (name === void 0) { name = PRIMARY_SPINNER; }
        if (debounce === void 0) { debounce = 0; }
        var hidePromise = new Promise(function (resolve, _reject) {
            setTimeout(function () {
                _this.spinnerObservable.next(new NgxSpinner({ name: name, show: false }));
                resolve(true);
            }, debounce);
        });
        return hidePromise;
    };
    NgxSpinnerService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function NgxSpinnerService_Factory() { return new NgxSpinnerService(); }, token: NgxSpinnerService, providedIn: "root" });
    NgxSpinnerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], NgxSpinnerService);
NgxSpinnerService.ɵfac = function NgxSpinnerService_Factory(t) { return new (t || NgxSpinnerService)(); };
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxSpinnerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
    return NgxSpinnerService;
}());

var NgxSpinnerComponent = /** @class */ (function () {
    /**
     * Creates an instance of NgxSpinnerComponent.
     *
     * @memberof NgxSpinnerComponent
     */
    function NgxSpinnerComponent(spinnerService, changeDetector) {
        var _this = this;
        this.spinnerService = spinnerService;
        this.changeDetector = changeDetector;
        /**
         * Spinner Object
         *
         * @memberof NgxSpinnerComponent
         */
        this.spinner = new NgxSpinner();
        /**
         * Unsubscribe from spinner's observable
         *
         * @memberof NgxSpinnerComponent
        **/
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * To set default ngx-spinner options
         *
         * @memberof NgxSpinnerComponent
         */
        this.setDefaultOptions = function () {
            _this.spinner = new NgxSpinner({
                name: _this.name,
                bdColor: _this.bdColor,
                size: _this.size,
                color: _this.color,
                type: _this.type,
                fullScreen: _this.fullScreen,
                divArray: _this.divArray,
                divCount: _this.divCount,
                show: _this.show,
                zIndex: _this.zIndex,
                template: _this.template,
            });
        };
        this.bdColor = DEFAULTS.BD_COLOR;
        this.zIndex = DEFAULTS.Z_INDEX;
        this.color = DEFAULTS.SPINNER_COLOR;
        this.type = DEFAULTS.SPINNER_TYPE;
        this.size = 'large';
        this.fullScreen = true;
        this.name = PRIMARY_SPINNER;
        this.template = null;
        this.divArray = [];
        this.divCount = 0;
        this.show = false;
    }
    /**
     * Initialization method
     *
     * @memberof NgxSpinnerComponent
     */
    NgxSpinnerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setDefaultOptions();
        this.spinnerService.getSpinner(this.name)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (spinner) {
            _this.setDefaultOptions();
            Object.assign(_this.spinner, spinner);
            if (spinner.show) {
                _this.onInputChange();
            }
            _this.changeDetector.markForCheck();
        });
    };
    /**
     * On changes event for input variables
     *
     * @memberof NgxSpinnerComponent
     */
    NgxSpinnerComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            if (propName) {
                var changedProp = changes[propName];
                if (changedProp.isFirstChange()) {
                    return;
                }
                else if (typeof changedProp.currentValue !== 'undefined' && changedProp.currentValue !== changedProp.previousValue) {
                    if (changedProp.currentValue !== '') {
                        this.spinner[propName] = changedProp.currentValue;
                    }
                }
            }
        }
    };
    /**
     * To get class for spinner
     *
     * @memberof NgxSpinnerComponent
     */
    NgxSpinnerComponent.prototype.getClass = function (type, size) {
        this.spinner.divCount = LOADERS[type];
        this.spinner.divArray = Array(this.spinner.divCount).fill(0).map(function (x, i) { return i; });
        var sizeClass = '';
        switch (size.toLowerCase()) {
            case 'small':
                sizeClass = 'la-sm';
                break;
            case 'medium':
                sizeClass = 'la-2x';
                break;
            case 'large':
                sizeClass = 'la-3x';
                break;
            default:
                break;
        }
        return 'la-' + type + ' ' + sizeClass;
    };
    /**
     * Check if input variables have changed
     *
     * @memberof NgxSpinnerComponent
     */
    NgxSpinnerComponent.prototype.onInputChange = function () {
        this.spinner.class = this.getClass(this.spinner.type, this.spinner.size);
    };
    /**
     * Component destroy event
     *
     * @memberof NgxSpinnerComponent
     */
    NgxSpinnerComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    NgxSpinnerComponent.ctorParameters = function () { return [
        { type: NgxSpinnerService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], NgxSpinnerComponent.prototype, "bdColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], NgxSpinnerComponent.prototype, "size", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], NgxSpinnerComponent.prototype, "color", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], NgxSpinnerComponent.prototype, "type", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], NgxSpinnerComponent.prototype, "fullScreen", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], NgxSpinnerComponent.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], NgxSpinnerComponent.prototype, "zIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], NgxSpinnerComponent.prototype, "template", void 0);
    NgxSpinnerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([ Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [NgxSpinnerService, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], NgxSpinnerComponent);
NgxSpinnerComponent.ɵfac = function NgxSpinnerComponent_Factory(t) { return new (t || NgxSpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
NgxSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgxSpinnerComponent, selectors: [["ngx-spinner"]], inputs: { bdColor: "bdColor", zIndex: "zIndex", color: "color", type: "type", size: "size", fullScreen: "fullScreen", name: "name", template: "template" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]()], ngContentSelectors: _c0, decls: 1, vars: 1, consts: [["class", "overlay", 3, "background-color", "z-index", "position", 4, "ngIf"], [1, "overlay"], [3, "class", "color", 4, "ngIf"], [3, "innerHTML", 4, "ngIf"], [1, "loading-text"], [4, "ngFor", "ngForOf"], [3, "innerHTML"]], template: function NgxSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NgxSpinnerComponent_div_0_Template, 5, 11, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.spinner.show);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".la-ball-8bits[_ngcontent-%COMP%], .la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-8bits[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:12px;height:12px}.la-ball-8bits.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:4px;height:4px;border-radius:0;opacity:0;-webkit-transform:translate(100%,100%);transform:translate(100%,100%);-webkit-animation:1s infinite ball-8bits;animation:1s infinite ball-8bits}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){-webkit-animation-delay:-.9375s;animation-delay:-.9375s;top:-100%;left:0}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.875s;animation-delay:-.875s;top:-100%;left:33.3333333333%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.8125s;animation-delay:-.8125s;top:-66.6666666667%;left:66.6666666667%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-.75s;animation-delay:-.75s;top:-33.3333333333%;left:100%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-.6875s;animation-delay:-.6875s;top:0;left:100%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:-.625s;animation-delay:-.625s;top:33.3333333333%;left:100%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-delay:-.5625s;animation-delay:-.5625s;top:66.6666666667%;left:66.6666666667%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-delay:-.5s;animation-delay:-.5s;top:100%;left:33.3333333333%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(9){-webkit-animation-delay:-.4375s;animation-delay:-.4375s;top:100%;left:0}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(10){-webkit-animation-delay:-.375s;animation-delay:-.375s;top:100%;left:-33.3333333333%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(11){-webkit-animation-delay:-.3125s;animation-delay:-.3125s;top:66.6666666667%;left:-66.6666666667%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(12){-webkit-animation-delay:-.25s;animation-delay:-.25s;top:33.3333333333%;left:-100%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(13){-webkit-animation-delay:-.1875s;animation-delay:-.1875s;top:0;left:-100%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(14){-webkit-animation-delay:-.125s;animation-delay:-.125s;top:-33.3333333333%;left:-100%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(15){-webkit-animation-delay:-.0625s;animation-delay:-.0625s;top:-66.6666666667%;left:-66.6666666667%}.la-ball-8bits[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(16){-webkit-animation-delay:0s;animation-delay:0s;top:-100%;left:-33.3333333333%}.la-ball-8bits.la-sm[_ngcontent-%COMP%]{width:6px;height:6px}.la-ball-8bits.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:2px;height:2px}.la-ball-8bits.la-2x[_ngcontent-%COMP%]{width:24px;height:24px}.la-ball-8bits.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:8px;height:8px}.la-ball-8bits.la-3x[_ngcontent-%COMP%]{width:36px;height:36px}.la-ball-8bits.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:12px;height:12px}@-webkit-keyframes ball-8bits{0%,50%{opacity:1}51%{opacity:0}}@keyframes ball-8bits{0%,50%{opacity:1}51%{opacity:0}}.la-ball-atom[_ngcontent-%COMP%], .la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-atom[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-atom.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){position:absolute;top:50%;left:50%;z-index:1;width:60%;height:60%;background:#aaa;border-radius:100%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-animation:4.5s linear infinite ball-atom-shrink;animation:4.5s linear infinite ball-atom-shrink}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:nth-child(1)){position:absolute;left:0;z-index:0;width:100%;height:100%;background:0 0;-webkit-animation:1.5s steps(2,end) infinite ball-atom-zindex;animation:1.5s steps(2,end) infinite ball-atom-zindex}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:nth-child(1)):before{position:absolute;top:0;left:0;width:10px;height:10px;margin-top:-5px;margin-left:-5px;content:\"\";background:currentColor;border-radius:50%;opacity:.75;-webkit-animation:1.5s infinite ball-atom-position,1.5s infinite ball-atom-size;animation:1.5s infinite ball-atom-position,1.5s infinite ball-atom-size}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:.75s;animation-delay:.75s}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2):before{-webkit-animation-delay:0s,-1.125s;animation-delay:0s,-1.125s}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-transform:rotate(120deg);transform:rotate(120deg);-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3):before{-webkit-animation-delay:-1s,-.75s;animation-delay:-1s,-.75s}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-transform:rotate(240deg);transform:rotate(240deg);-webkit-animation-delay:.25s;animation-delay:.25s}.la-ball-atom[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4):before{-webkit-animation-delay:-.5s,-125ms;animation-delay:-.5s,-125ms}.la-ball-atom.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-atom.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:nth-child(1)):before{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-atom.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-atom.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:nth-child(1)):before{width:20px;height:20px;margin-top:-10px;margin-left:-10px}.la-ball-atom.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-atom.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:nth-child(1)):before{width:30px;height:30px;margin-top:-15px;margin-left:-15px}@-webkit-keyframes ball-atom-position{50%{top:100%;left:100%}}@keyframes ball-atom-position{50%{top:100%;left:100%}}@-webkit-keyframes ball-atom-size{50%{-webkit-transform:scale(.5,.5);transform:scale(.5,.5)}}@keyframes ball-atom-size{50%{-webkit-transform:scale(.5,.5);transform:scale(.5,.5)}}@-webkit-keyframes ball-atom-zindex{50%{z-index:10}}@keyframes ball-atom-zindex{50%{z-index:10}}@-webkit-keyframes ball-atom-shrink{50%{-webkit-transform:translate(-50%,-50%) scale(.8,.8);transform:translate(-50%,-50%) scale(.8,.8)}}@keyframes ball-atom-shrink{50%{-webkit-transform:translate(-50%,-50%) scale(.8,.8);transform:translate(-50%,-50%) scale(.8,.8)}}.la-ball-beat[_ngcontent-%COMP%], .la-ball-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-beat[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:54px;height:18px}.la-ball-beat.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10px;height:10px;margin:4px;border-radius:100%;-webkit-animation:.7s linear -.15s infinite ball-beat;animation:.7s linear -.15s infinite ball-beat}.la-ball-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2n-1){-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-beat.la-sm[_ngcontent-%COMP%]{width:26px;height:8px}.la-ball-beat.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin:2px}.la-ball-beat.la-2x[_ngcontent-%COMP%]{width:108px;height:36px}.la-ball-beat.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px;margin:8px}.la-ball-beat.la-3x[_ngcontent-%COMP%]{width:162px;height:54px}.la-ball-beat.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-beat{50%{opacity:.2;-webkit-transform:scale(.75);transform:scale(.75)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-beat{50%{opacity:.2;-webkit-transform:scale(.75);transform:scale(.75)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.la-ball-circus[_ngcontent-%COMP%], .la-ball-circus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-circus[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:16px;height:16px}.la-ball-circus.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-circus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:0;left:-100%;display:block;width:100%;height:100%;border-radius:100%;opacity:.5;-webkit-animation:2.5s cubic-bezier(.25,0,.75,1) infinite ball-circus-position,2.5s cubic-bezier(.25,0,.75,1) infinite ball-circus-size;animation:2.5s cubic-bezier(.25,0,.75,1) infinite ball-circus-position,2.5s cubic-bezier(.25,0,.75,1) infinite ball-circus-size}.la-ball-circus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){-webkit-animation-delay:0s,-.5s;animation-delay:0s,-.5s}.la-ball-circus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.5s,-1s;animation-delay:-.5s,-1s}.la-ball-circus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-1s,-1.5s;animation-delay:-1s,-1.5s}.la-ball-circus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-1.5s,-2s;animation-delay:-1.5s,-2s}.la-ball-circus[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-2s,-2.5s;animation-delay:-2s,-2.5s}.la-ball-circus.la-sm[_ngcontent-%COMP%], .la-ball-circus.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:8px;height:8px}.la-ball-circus.la-2x[_ngcontent-%COMP%], .la-ball-circus.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:32px;height:32px}.la-ball-circus.la-3x[_ngcontent-%COMP%], .la-ball-circus.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:48px;height:48px}@-webkit-keyframes ball-circus-position{50%{left:100%}}@keyframes ball-circus-position{50%{left:100%}}@-webkit-keyframes ball-circus-size{50%{-webkit-transform:scale(.3,.3);transform:scale(.3,.3)}}@keyframes ball-circus-size{50%{-webkit-transform:scale(.3,.3);transform:scale(.3,.3)}}.la-ball-climbing-dot[_ngcontent-%COMP%], .la-ball-climbing-dot[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-climbing-dot[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:42px;height:32px}.la-ball-climbing-dot.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-climbing-dot[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.la-ball-climbing-dot[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){position:absolute;bottom:32%;left:18%;width:14px;height:14px;border-radius:100%;-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation:.6s ease-in-out infinite ball-climbing-dot-jump;animation:.6s ease-in-out infinite ball-climbing-dot-jump}.la-ball-climbing-dot[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:nth-child(1)){position:absolute;top:0;right:0;width:14px;height:2px;border-radius:0;-webkit-transform:translate(60%,0);transform:translate(60%,0);-webkit-animation:1.8s linear infinite ball-climbing-dot-steps;animation:1.8s linear infinite ball-climbing-dot-steps}.la-ball-climbing-dot[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:nth-child(1)):nth-child(2){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-climbing-dot[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:nth-child(1)):nth-child(3){-webkit-animation-delay:-.6s;animation-delay:-.6s}.la-ball-climbing-dot[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:nth-child(1)):nth-child(4){-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.la-ball-climbing-dot.la-sm[_ngcontent-%COMP%]{width:20px;height:16px}.la-ball-climbing-dot.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){width:6px;height:6px}.la-ball-climbing-dot.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:nth-child(1)){width:6px;height:1px}.la-ball-climbing-dot.la-2x[_ngcontent-%COMP%]{width:84px;height:64px}.la-ball-climbing-dot.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){width:28px;height:28px}.la-ball-climbing-dot.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:nth-child(1)){width:28px;height:4px}.la-ball-climbing-dot.la-3x[_ngcontent-%COMP%]{width:126px;height:96px}.la-ball-climbing-dot.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){width:42px;height:42px}.la-ball-climbing-dot.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:nth-child(1)){width:42px;height:6px}@-webkit-keyframes ball-climbing-dot-jump{0%,100%{-webkit-transform:scale(1,.7);transform:scale(1,.7)}20%,80%,90%{-webkit-transform:scale(.7,1.2);transform:scale(.7,1.2)}40%,46%{-webkit-transform:scale(1,1);transform:scale(1,1)}50%{bottom:125%}}@keyframes ball-climbing-dot-jump{0%,100%{-webkit-transform:scale(1,.7);transform:scale(1,.7)}20%,80%,90%{-webkit-transform:scale(.7,1.2);transform:scale(.7,1.2)}40%,46%{-webkit-transform:scale(1,1);transform:scale(1,1)}50%{bottom:125%}}@-webkit-keyframes ball-climbing-dot-steps{0%{top:0;right:0;opacity:0}50%{opacity:1}100%{top:100%;right:100%;opacity:0}}@keyframes ball-climbing-dot-steps{0%{top:0;right:0;opacity:0}50%{opacity:1}100%{top:100%;right:100%;opacity:0}}.la-ball-clip-rotate-multiple[_ngcontent-%COMP%], .la-ball-clip-rotate-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-clip-rotate-multiple[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-clip-rotate-multiple.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-clip-rotate-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;border:2px solid currentColor;position:absolute;top:50%;left:50%;background:0 0;border-radius:100%;-webkit-animation:1s ease-in-out infinite ball-clip-rotate-multiple-rotate;animation:1s ease-in-out infinite ball-clip-rotate-multiple-rotate}.la-ball-clip-rotate-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{position:absolute;width:32px;height:32px;border-right-color:transparent;border-left-color:transparent}.la-ball-clip-rotate-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{width:16px;height:16px;border-top-color:transparent;border-bottom-color:transparent;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-direction:reverse;animation-direction:reverse}.la-ball-clip-rotate-multiple.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-clip-rotate-multiple.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:1px}.la-ball-clip-rotate-multiple.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{width:16px;height:16px}.la-ball-clip-rotate-multiple.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{width:8px;height:8px}.la-ball-clip-rotate-multiple.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-clip-rotate-multiple.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:4px}.la-ball-clip-rotate-multiple.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{width:64px;height:64px}.la-ball-clip-rotate-multiple.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{width:32px;height:32px}.la-ball-clip-rotate-multiple.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-clip-rotate-multiple.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:6px}.la-ball-clip-rotate-multiple.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{width:96px;height:96px}.la-ball-clip-rotate-multiple.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{width:48px;height:48px}@-webkit-keyframes ball-clip-rotate-multiple-rotate{0%{-webkit-transform:translate(-50%,-50%) rotate(0);transform:translate(-50%,-50%) rotate(0)}50%{-webkit-transform:translate(-50%,-50%) rotate(180deg);transform:translate(-50%,-50%) rotate(180deg)}100%{-webkit-transform:translate(-50%,-50%) rotate(360deg);transform:translate(-50%,-50%) rotate(360deg)}}@keyframes ball-clip-rotate-multiple-rotate{0%{-webkit-transform:translate(-50%,-50%) rotate(0);transform:translate(-50%,-50%) rotate(0)}50%{-webkit-transform:translate(-50%,-50%) rotate(180deg);transform:translate(-50%,-50%) rotate(180deg)}100%{-webkit-transform:translate(-50%,-50%) rotate(360deg);transform:translate(-50%,-50%) rotate(360deg)}}.la-ball-clip-rotate-pulse[_ngcontent-%COMP%], .la-ball-clip-rotate-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-clip-rotate-pulse[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-clip-rotate-pulse.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-clip-rotate-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;border-radius:100%}.la-ball-clip-rotate-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{position:absolute;width:32px;height:32px;background:0 0;border-style:solid;border-width:2px;border-right-color:transparent;border-left-color:transparent;-webkit-animation:1s cubic-bezier(.09,.57,.49,.9) infinite ball-clip-rotate-pulse-rotate;animation:1s cubic-bezier(.09,.57,.49,.9) infinite ball-clip-rotate-pulse-rotate}.la-ball-clip-rotate-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{width:16px;height:16px;-webkit-animation:1s cubic-bezier(.09,.57,.49,.9) infinite ball-clip-rotate-pulse-scale;animation:1s cubic-bezier(.09,.57,.49,.9) infinite ball-clip-rotate-pulse-scale}.la-ball-clip-rotate-pulse.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-clip-rotate-pulse.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{width:16px;height:16px;border-width:1px}.la-ball-clip-rotate-pulse.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{width:8px;height:8px}.la-ball-clip-rotate-pulse.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-clip-rotate-pulse.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{width:64px;height:64px;border-width:4px}.la-ball-clip-rotate-pulse.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{width:32px;height:32px}.la-ball-clip-rotate-pulse.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-clip-rotate-pulse.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{width:96px;height:96px;border-width:6px}.la-ball-clip-rotate-pulse.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{width:48px;height:48px}@-webkit-keyframes ball-clip-rotate-pulse-rotate{0%{-webkit-transform:translate(-50%,-50%) rotate(0);transform:translate(-50%,-50%) rotate(0)}50%{-webkit-transform:translate(-50%,-50%) rotate(180deg);transform:translate(-50%,-50%) rotate(180deg)}100%{-webkit-transform:translate(-50%,-50%) rotate(360deg);transform:translate(-50%,-50%) rotate(360deg)}}@keyframes ball-clip-rotate-pulse-rotate{0%{-webkit-transform:translate(-50%,-50%) rotate(0);transform:translate(-50%,-50%) rotate(0)}50%{-webkit-transform:translate(-50%,-50%) rotate(180deg);transform:translate(-50%,-50%) rotate(180deg)}100%{-webkit-transform:translate(-50%,-50%) rotate(360deg);transform:translate(-50%,-50%) rotate(360deg)}}@-webkit-keyframes ball-clip-rotate-pulse-scale{0%,100%{opacity:1;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}30%{opacity:.3;-webkit-transform:translate(-50%,-50%) scale(.15);transform:translate(-50%,-50%) scale(.15)}}@keyframes ball-clip-rotate-pulse-scale{0%,100%{opacity:1;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}30%{opacity:.3;-webkit-transform:translate(-50%,-50%) scale(.15);transform:translate(-50%,-50%) scale(.15)}}.la-ball-clip-rotate[_ngcontent-%COMP%], .la-ball-clip-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-clip-rotate[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-clip-rotate.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-clip-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;border:2px solid currentColor;width:32px;height:32px;background:0 0;border-bottom-color:transparent;border-radius:100%;-webkit-animation:.75s linear infinite ball-clip-rotate;animation:.75s linear infinite ball-clip-rotate}.la-ball-clip-rotate.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-clip-rotate.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;border-width:1px}.la-ball-clip-rotate.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-clip-rotate.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:64px;height:64px;border-width:4px}.la-ball-clip-rotate.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-clip-rotate.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:96px;height:96px;border-width:6px}@-webkit-keyframes ball-clip-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes ball-clip-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.la-ball-elastic-dots[_ngcontent-%COMP%], .la-ball-elastic-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-elastic-dots[_ngcontent-%COMP%]{display:block;color:#fff;width:120px;height:10px;font-size:0;text-align:center}.la-ball-elastic-dots.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-elastic-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{float:none;background-color:currentColor;border:0 solid currentColor;display:inline-block;width:10px;height:10px;white-space:nowrap;border-radius:100%;-webkit-animation:1s infinite ball-elastic-dots-anim;animation:1s infinite ball-elastic-dots-anim}.la-ball-elastic-dots.la-sm[_ngcontent-%COMP%]{width:60px;height:4px}.la-ball-elastic-dots.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px}.la-ball-elastic-dots.la-2x[_ngcontent-%COMP%]{width:240px;height:20px}.la-ball-elastic-dots.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px}.la-ball-elastic-dots.la-3x[_ngcontent-%COMP%]{width:360px;height:30px}.la-ball-elastic-dots.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px}@-webkit-keyframes ball-elastic-dots-anim{0%,100%{margin:0;-webkit-transform:scale(1);transform:scale(1)}50%{margin:0 5%;-webkit-transform:scale(.65);transform:scale(.65)}}@keyframes ball-elastic-dots-anim{0%,100%{margin:0;-webkit-transform:scale(1);transform:scale(1)}50%{margin:0 5%;-webkit-transform:scale(.65);transform:scale(.65)}}.la-ball-fall[_ngcontent-%COMP%], .la-ball-fall[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-fall[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:54px;height:18px}.la-ball-fall.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-fall[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10px;height:10px;margin:4px;border-radius:100%;opacity:0;-webkit-animation:1s ease-in-out infinite ball-fall;animation:1s ease-in-out infinite ball-fall}.la-ball-fall[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){-webkit-animation-delay:-.2s;animation-delay:-.2s}.la-ball-fall[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.1s;animation-delay:-.1s}.la-ball-fall[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-fall.la-sm[_ngcontent-%COMP%]{width:26px;height:8px}.la-ball-fall.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin:2px}.la-ball-fall.la-2x[_ngcontent-%COMP%]{width:108px;height:36px}.la-ball-fall.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px;margin:8px}.la-ball-fall.la-3x[_ngcontent-%COMP%]{width:162px;height:54px}.la-ball-fall.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-fall{0%{opacity:0;-webkit-transform:translateY(-145%);transform:translateY(-145%)}10%,90%{opacity:.5}20%,80%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(145%);transform:translateY(145%)}}@keyframes ball-fall{0%{opacity:0;-webkit-transform:translateY(-145%);transform:translateY(-145%)}10%,90%{opacity:.5}20%,80%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(145%);transform:translateY(145%)}}.la-ball-fussion[_ngcontent-%COMP%], .la-ball-fussion[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-fussion[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:8px;height:8px}.la-ball-fussion.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-fussion[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;width:12px;height:12px;border-radius:100%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-animation:1s infinite ball-fussion-ball1;animation:1s infinite ball-fussion-ball1}.la-ball-fussion[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){top:0;left:50%;z-index:1}.la-ball-fussion[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:50%;left:100%;z-index:2;-webkit-animation-name:ball-fussion-ball2;animation-name:ball-fussion-ball2}.la-ball-fussion[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:100%;left:50%;z-index:1;-webkit-animation-name:ball-fussion-ball3;animation-name:ball-fussion-ball3}.la-ball-fussion[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:50%;left:0;z-index:2;-webkit-animation-name:ball-fussion-ball4;animation-name:ball-fussion-ball4}.la-ball-fussion.la-sm[_ngcontent-%COMP%]{width:4px;height:4px}.la-ball-fussion.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:6px;height:6px}.la-ball-fussion.la-2x[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-fussion.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .la-ball-fussion.la-3x[_ngcontent-%COMP%]{width:24px;height:24px}.la-ball-fussion.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:36px;height:36px}@-webkit-keyframes ball-fussion-ball1{0%{opacity:.35}50%{top:-100%;left:200%;opacity:1}100%{top:50%;left:100%;z-index:2;opacity:.35}}@keyframes ball-fussion-ball1{0%{opacity:.35}50%{top:-100%;left:200%;opacity:1}100%{top:50%;left:100%;z-index:2;opacity:.35}}@-webkit-keyframes ball-fussion-ball2{0%{opacity:.35}50%{top:200%;left:200%;opacity:1}100%{top:100%;left:50%;z-index:1;opacity:.35}}@keyframes ball-fussion-ball2{0%{opacity:.35}50%{top:200%;left:200%;opacity:1}100%{top:100%;left:50%;z-index:1;opacity:.35}}@-webkit-keyframes ball-fussion-ball3{0%{opacity:.35}50%{top:200%;left:-100%;opacity:1}100%{top:50%;left:0;z-index:2;opacity:.35}}@keyframes ball-fussion-ball3{0%{opacity:.35}50%{top:200%;left:-100%;opacity:1}100%{top:50%;left:0;z-index:2;opacity:.35}}@-webkit-keyframes ball-fussion-ball4{0%{opacity:.35}50%{top:-100%;left:-100%;opacity:1}100%{top:0;left:50%;z-index:1;opacity:.35}}@keyframes ball-fussion-ball4{0%{opacity:.35}50%{top:-100%;left:-100%;opacity:1}100%{top:0;left:50%;z-index:1;opacity:.35}}.la-ball-grid-beat[_ngcontent-%COMP%], .la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-grid-beat[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:36px;height:36px}.la-ball-grid-beat.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:8px;height:8px;margin:2px;border-radius:100%;-webkit-animation-name:ball-grid-beat;animation-name:ball-grid-beat;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){-webkit-animation-duration:.65s;animation-duration:.65s;-webkit-animation-delay:.03s;animation-delay:.03s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-duration:1.02s;animation-duration:1.02s;-webkit-animation-delay:.09s;animation-delay:.09s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-duration:1.06s;animation-duration:1.06s;-webkit-animation-delay:-.69s;animation-delay:-.69s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-delay:-.41s;animation-delay:-.41s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-duration:1.6s;animation-duration:1.6s;-webkit-animation-delay:.04s;animation-delay:.04s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-duration:.84s;animation-duration:.84s;-webkit-animation-delay:.07s;animation-delay:.07s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-duration:.68s;animation-duration:.68s;-webkit-animation-delay:-.66s;animation-delay:-.66s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-duration:.93s;animation-duration:.93s;-webkit-animation-delay:-.76s;animation-delay:-.76s}.la-ball-grid-beat[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(9){-webkit-animation-duration:1.24s;animation-duration:1.24s;-webkit-animation-delay:-.76s;animation-delay:-.76s}.la-ball-grid-beat.la-sm[_ngcontent-%COMP%]{width:18px;height:18px}.la-ball-grid-beat.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin:1px}.la-ball-grid-beat.la-2x[_ngcontent-%COMP%]{width:72px;height:72px}.la-ball-grid-beat.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;margin:4px}.la-ball-grid-beat.la-3x[_ngcontent-%COMP%]{width:108px;height:108px}.la-ball-grid-beat.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px;margin:6px}@-webkit-keyframes ball-grid-beat{0%,100%{opacity:1}50%{opacity:.35}}@keyframes ball-grid-beat{0%,100%{opacity:1}50%{opacity:.35}}.la-ball-grid-pulse[_ngcontent-%COMP%], .la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-grid-pulse[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:36px;height:36px}.la-ball-grid-pulse.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:8px;height:8px;margin:2px;border-radius:100%;-webkit-animation-name:ball-grid-pulse;animation-name:ball-grid-pulse;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){-webkit-animation-duration:.65s;animation-duration:.65s;-webkit-animation-delay:.03s;animation-delay:.03s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-duration:1.02s;animation-duration:1.02s;-webkit-animation-delay:.09s;animation-delay:.09s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-duration:1.06s;animation-duration:1.06s;-webkit-animation-delay:-.69s;animation-delay:-.69s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-delay:-.41s;animation-delay:-.41s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-duration:1.6s;animation-duration:1.6s;-webkit-animation-delay:.04s;animation-delay:.04s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-duration:.84s;animation-duration:.84s;-webkit-animation-delay:.07s;animation-delay:.07s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-duration:.68s;animation-duration:.68s;-webkit-animation-delay:-.66s;animation-delay:-.66s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-duration:.93s;animation-duration:.93s;-webkit-animation-delay:-.76s;animation-delay:-.76s}.la-ball-grid-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(9){-webkit-animation-duration:1.24s;animation-duration:1.24s;-webkit-animation-delay:-.76s;animation-delay:-.76s}.la-ball-grid-pulse.la-sm[_ngcontent-%COMP%]{width:18px;height:18px}.la-ball-grid-pulse.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin:1px}.la-ball-grid-pulse.la-2x[_ngcontent-%COMP%]{width:72px;height:72px}.la-ball-grid-pulse.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;margin:4px}.la-ball-grid-pulse.la-3x[_ngcontent-%COMP%]{width:108px;height:108px}.la-ball-grid-pulse.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px;margin:6px}@-webkit-keyframes ball-grid-pulse{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.35;-webkit-transform:scale(.45);transform:scale(.45)}}@keyframes ball-grid-pulse{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.35;-webkit-transform:scale(.45);transform:scale(.45)}}.la-ball-newton-cradle[_ngcontent-%COMP%], .la-ball-newton-cradle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-newton-cradle[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:40px;height:10px}.la-ball-newton-cradle.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-newton-cradle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10px;height:10px;border-radius:100%}.la-ball-newton-cradle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-transform:translateX(0);transform:translateX(0);-webkit-animation:1s ease-out infinite ball-newton-cradle-left;animation:1s ease-out infinite ball-newton-cradle-left}.la-ball-newton-cradle[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{-webkit-transform:translateX(0);transform:translateX(0);-webkit-animation:1s ease-out infinite ball-newton-cradle-right;animation:1s ease-out infinite ball-newton-cradle-right}.la-ball-newton-cradle.la-sm[_ngcontent-%COMP%]{width:20px;height:4px}.la-ball-newton-cradle.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px}.la-ball-newton-cradle.la-2x[_ngcontent-%COMP%]{width:80px;height:20px}.la-ball-newton-cradle.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px}.la-ball-newton-cradle.la-3x[_ngcontent-%COMP%]{width:120px;height:30px}.la-ball-newton-cradle.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px}@-webkit-keyframes ball-newton-cradle-left{25%{-webkit-transform:translateX(-100%);transform:translateX(-100%);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes ball-newton-cradle-left{25%{-webkit-transform:translateX(-100%);transform:translateX(-100%);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes ball-newton-cradle-right{100%,50%{-webkit-transform:translateX(0);transform:translateX(0)}75%{-webkit-transform:translateX(100%);transform:translateX(100%);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}@keyframes ball-newton-cradle-right{100%,50%{-webkit-transform:translateX(0);transform:translateX(0)}75%{-webkit-transform:translateX(100%);transform:translateX(100%);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}.la-ball-pulse-rise[_ngcontent-%COMP%], .la-ball-pulse-rise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-pulse-rise[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:70px;height:14px}.la-ball-pulse-rise.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-pulse-rise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10px;height:10px;margin:2px;border-radius:100%;-webkit-animation:1s cubic-bezier(.15,.36,.9,.6) infinite ball-pulse-rise-even;animation:1s cubic-bezier(.15,.36,.9,.6) infinite ball-pulse-rise-even}.la-ball-pulse-rise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2n-1){-webkit-animation-name:ball-pulse-rise-odd;animation-name:ball-pulse-rise-odd}.la-ball-pulse-rise.la-sm[_ngcontent-%COMP%]{width:34px;height:6px}.la-ball-pulse-rise.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin:1px}.la-ball-pulse-rise.la-2x[_ngcontent-%COMP%]{width:140px;height:28px}.la-ball-pulse-rise.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px;margin:4px}.la-ball-pulse-rise.la-3x[_ngcontent-%COMP%]{width:210px;height:42px}.la-ball-pulse-rise.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px;margin:6px}@-webkit-keyframes ball-pulse-rise-even{0%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1)}25%{-webkit-transform:translateY(-200%);transform:translateY(-200%)}50%{opacity:.35;-webkit-transform:scale(.3);transform:scale(.3)}75%{-webkit-transform:translateY(200%);transform:translateY(200%)}100%{opacity:1;-webkit-transform:translateY(0);-webkit-transform:scale(1);transform:translateY(0);transform:scale(1)}}@keyframes ball-pulse-rise-even{0%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1)}25%{-webkit-transform:translateY(-200%);transform:translateY(-200%)}50%{opacity:.35;-webkit-transform:scale(.3);transform:scale(.3)}75%{-webkit-transform:translateY(200%);transform:translateY(200%)}100%{opacity:1;-webkit-transform:translateY(0);-webkit-transform:scale(1);transform:translateY(0);transform:scale(1)}}@-webkit-keyframes ball-pulse-rise-odd{0%{opacity:.35;-webkit-transform:scale(.4);transform:scale(.4)}25%{-webkit-transform:translateY(200%);transform:translateY(200%)}50%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1)}75%{-webkit-transform:translateY(-200%);transform:translateY(-200%)}100%{opacity:.35;-webkit-transform:translateY(0);-webkit-transform:scale(.75);transform:translateY(0);transform:scale(.75)}}@keyframes ball-pulse-rise-odd{0%{opacity:.35;-webkit-transform:scale(.4);transform:scale(.4)}25%{-webkit-transform:translateY(200%);transform:translateY(200%)}50%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1)}75%{-webkit-transform:translateY(-200%);transform:translateY(-200%)}100%{opacity:.35;-webkit-transform:translateY(0);-webkit-transform:scale(.75);transform:translateY(0);transform:scale(.75)}}.la-ball-pulse-sync[_ngcontent-%COMP%], .la-ball-pulse-sync[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-pulse-sync[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:54px;height:18px}.la-ball-pulse-sync.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-pulse-sync[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10px;height:10px;margin:4px;border-radius:100%;-webkit-animation:.6s ease-in-out infinite ball-pulse-sync;animation:.6s ease-in-out infinite ball-pulse-sync}.la-ball-pulse-sync[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){-webkit-animation-delay:-.14s;animation-delay:-.14s}.la-ball-pulse-sync[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.07s;animation-delay:-.07s}.la-ball-pulse-sync[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-pulse-sync.la-sm[_ngcontent-%COMP%]{width:26px;height:8px}.la-ball-pulse-sync.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin:2px}.la-ball-pulse-sync.la-2x[_ngcontent-%COMP%]{width:108px;height:36px}.la-ball-pulse-sync.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px;margin:8px}.la-ball-pulse-sync.la-3x[_ngcontent-%COMP%]{width:162px;height:54px}.la-ball-pulse-sync.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-pulse-sync{33%{-webkit-transform:translateY(100%);transform:translateY(100%)}66%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes ball-pulse-sync{33%{-webkit-transform:translateY(100%);transform:translateY(100%)}66%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}.la-ball-pulse[_ngcontent-%COMP%], .la-ball-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-pulse[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:54px;height:18px}.la-ball-pulse.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10px;height:10px;margin:4px;border-radius:100%;-webkit-animation:1s infinite ball-pulse;animation:1s infinite ball-pulse}.la-ball-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){-webkit-animation-delay:-.2s;animation-delay:-.2s}.la-ball-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.1s;animation-delay:-.1s}.la-ball-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-pulse.la-sm[_ngcontent-%COMP%]{width:26px;height:8px}.la-ball-pulse.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin:2px}.la-ball-pulse.la-2x[_ngcontent-%COMP%]{width:108px;height:36px}.la-ball-pulse.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px;margin:8px}.la-ball-pulse.la-3x[_ngcontent-%COMP%]{width:162px;height:54px}.la-ball-pulse.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-pulse{0%,100%,60%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}30%{opacity:.1;-webkit-transform:scale(.01);transform:scale(.01)}}@keyframes ball-pulse{0%,100%,60%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}30%{opacity:.1;-webkit-transform:scale(.01);transform:scale(.01)}}.la-ball-rotate[_ngcontent-%COMP%], .la-ball-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-rotate[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:10px;height:10px}.la-ball-rotate.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10px;height:10px;border-radius:100%;-webkit-animation:1s cubic-bezier(.7,-.13,.22,.86) infinite ball-rotate-animation;animation:1s cubic-bezier(.7,-.13,.22,.86) infinite ball-rotate-animation}.la-ball-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after, .la-ball-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{position:absolute;width:inherit;height:inherit;margin:inherit;content:\"\";background:currentColor;border-radius:inherit;opacity:.8}.la-ball-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{top:0;left:-150%}.la-ball-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{top:0;left:150%}.la-ball-rotate.la-sm[_ngcontent-%COMP%], .la-ball-rotate.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px}.la-ball-rotate.la-2x[_ngcontent-%COMP%], .la-ball-rotate.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px}.la-ball-rotate.la-3x[_ngcontent-%COMP%], .la-ball-rotate.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px}@-webkit-keyframes ball-rotate-animation{0%{-webkit-transform:rotate(0);transform:rotate(0)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes ball-rotate-animation{0%{-webkit-transform:rotate(0);transform:rotate(0)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.la-ball-running-dots[_ngcontent-%COMP%], .la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-running-dots[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:10px;height:10px}.la-ball-running-dots.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;width:10px;height:10px;margin-left:-25px;border-radius:100%;-webkit-animation:2s linear infinite ball-running-dots-animate;animation:2s linear infinite ball-running-dots-animate}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-.4s;animation-delay:-.4s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.8s;animation-delay:-.8s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-1.6s;animation-delay:-1.6s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){-webkit-animation-delay:-2.4s;animation-delay:-2.4s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){-webkit-animation-delay:-2.8s;animation-delay:-2.8s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(9){-webkit-animation-delay:-3.2s;animation-delay:-3.2s}.la-ball-running-dots[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(10){-webkit-animation-delay:-3.6s;animation-delay:-3.6s}.la-ball-running-dots.la-sm[_ngcontent-%COMP%]{width:4px;height:4px}.la-ball-running-dots.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin-left:-12px}.la-ball-running-dots.la-2x[_ngcontent-%COMP%]{width:20px;height:20px}.la-ball-running-dots.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px;margin-left:-50px}.la-ball-running-dots.la-3x[_ngcontent-%COMP%]{width:30px;height:30px}.la-ball-running-dots.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px;margin-left:-75px}@-webkit-keyframes ball-running-dots-animate{0%,100%{width:100%;height:100%;-webkit-transform:translateY(0) translateX(500%);transform:translateY(0) translateX(500%)}80%{-webkit-transform:translateY(0) translateX(0);transform:translateY(0) translateX(0)}85%{width:100%;height:100%;-webkit-transform:translateY(-125%) translateX(0);transform:translateY(-125%) translateX(0)}90%{width:200%;height:75%}95%{width:100%;height:100%;-webkit-transform:translateY(-100%) translateX(500%);transform:translateY(-100%) translateX(500%)}}@keyframes ball-running-dots-animate{0%,100%{width:100%;height:100%;-webkit-transform:translateY(0) translateX(500%);transform:translateY(0) translateX(500%)}80%{-webkit-transform:translateY(0) translateX(0);transform:translateY(0) translateX(0)}85%{width:100%;height:100%;-webkit-transform:translateY(-125%) translateX(0);transform:translateY(-125%) translateX(0)}90%{width:200%;height:75%}95%{width:100%;height:100%;-webkit-transform:translateY(-100%) translateX(500%);transform:translateY(-100%) translateX(500%)}}.la-ball-scale-multiple[_ngcontent-%COMP%], .la-ball-scale-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-scale-multiple[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-scale-multiple.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-scale-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:0;left:0;width:32px;height:32px;border-radius:100%;opacity:0;-webkit-animation:1s linear infinite ball-scale-multiple;animation:1s linear infinite ball-scale-multiple}.la-ball-scale-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:.2s;animation-delay:.2s}.la-ball-scale-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:.4s;animation-delay:.4s}.la-ball-scale-multiple.la-sm[_ngcontent-%COMP%], .la-ball-scale-multiple.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-scale-multiple.la-2x[_ngcontent-%COMP%], .la-ball-scale-multiple.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-scale-multiple.la-3x[_ngcontent-%COMP%], .la-ball-scale-multiple.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:96px;height:96px}@-webkit-keyframes ball-scale-multiple{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}5%{opacity:.75}100%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-scale-multiple{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}5%{opacity:.75}100%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}}.la-ball-scale-pulse[_ngcontent-%COMP%], .la-ball-scale-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-scale-pulse[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-scale-pulse.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-scale-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:0;left:0;width:32px;height:32px;border-radius:100%;opacity:.5;-webkit-animation:2s ease-in-out infinite ball-scale-pulse;animation:2s ease-in-out infinite ball-scale-pulse}.la-ball-scale-pulse[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{-webkit-animation-delay:-1s;animation-delay:-1s}.la-ball-scale-pulse.la-sm[_ngcontent-%COMP%], .la-ball-scale-pulse.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-scale-pulse.la-2x[_ngcontent-%COMP%], .la-ball-scale-pulse.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-scale-pulse.la-3x[_ngcontent-%COMP%], .la-ball-scale-pulse.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:96px;height:96px}@-webkit-keyframes ball-scale-pulse{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-scale-pulse{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}.la-ball-scale-ripple-multiple[_ngcontent-%COMP%], .la-ball-scale-ripple-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-scale-ripple-multiple[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-scale-ripple-multiple.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-scale-ripple-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;border:2px solid currentColor;position:absolute;top:0;left:0;width:32px;height:32px;background:0 0;border-radius:100%;opacity:0;-webkit-animation:1.25s cubic-bezier(.21,.53,.56,.8) infinite ball-scale-ripple-multiple;animation:1.25s cubic-bezier(.21,.53,.56,.8) infinite ball-scale-ripple-multiple}.la-ball-scale-ripple-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-scale-ripple-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:.25s;animation-delay:.25s}.la-ball-scale-ripple-multiple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:.5s;animation-delay:.5s}.la-ball-scale-ripple-multiple.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-scale-ripple-multiple.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;border-width:1px}.la-ball-scale-ripple-multiple.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-scale-ripple-multiple.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:64px;height:64px;border-width:4px}.la-ball-scale-ripple-multiple.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-scale-ripple-multiple.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:96px;height:96px;border-width:6px}@-webkit-keyframes ball-scale-ripple-multiple{0%{opacity:1;-webkit-transform:scale(.1);transform:scale(.1)}70%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}95%{opacity:0}}@keyframes ball-scale-ripple-multiple{0%{opacity:1;-webkit-transform:scale(.1);transform:scale(.1)}70%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}95%{opacity:0}}.la-ball-scale-ripple[_ngcontent-%COMP%], .la-ball-scale-ripple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-scale-ripple[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-scale-ripple.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-scale-ripple[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;border:2px solid currentColor;width:32px;height:32px;background:0 0;border-radius:100%;opacity:0;-webkit-animation:1s cubic-bezier(.21,.53,.56,.8) infinite ball-scale-ripple;animation:1s cubic-bezier(.21,.53,.56,.8) infinite ball-scale-ripple}.la-ball-scale-ripple.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-scale-ripple.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;border-width:1px}.la-ball-scale-ripple.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-scale-ripple.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:64px;height:64px;border-width:4px}.la-ball-scale-ripple.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-scale-ripple.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:96px;height:96px;border-width:6px}@-webkit-keyframes ball-scale-ripple{0%{opacity:1;-webkit-transform:scale(.1);transform:scale(.1)}70%{opacity:.65;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0}}@keyframes ball-scale-ripple{0%{opacity:1;-webkit-transform:scale(.1);transform:scale(.1)}70%{opacity:.65;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0}}.la-ball-scale[_ngcontent-%COMP%], .la-ball-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-scale[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-scale.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:32px;height:32px;border-radius:100%;opacity:0;-webkit-animation:1s ease-in-out infinite ball-scale;animation:1s ease-in-out infinite ball-scale}.la-ball-scale.la-sm[_ngcontent-%COMP%], .la-ball-scale.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-scale.la-2x[_ngcontent-%COMP%], .la-ball-scale.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-scale.la-3x[_ngcontent-%COMP%], .la-ball-scale.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:96px;height:96px}@-webkit-keyframes ball-scale{0%{opacity:1;-webkit-transform:scale(0);transform:scale(0)}100%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-scale{0%{opacity:1;-webkit-transform:scale(0);transform:scale(0)}100%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%], .la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:32px;height:32px;-webkit-animation:6s linear infinite ball-spin-clockwise-fade-rotating-rotate;animation:6s linear infinite ball-spin-clockwise-fade-rotating-rotate}.la-ball-spin-clockwise-fade-rotating.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:1s linear infinite ball-spin-clockwise-fade-rotating;animation:1s linear infinite ball-spin-clockwise-fade-rotating}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}.la-ball-spin-clockwise-fade-rotating.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-spin-clockwise-fade-rotating.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-clockwise-fade-rotating.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-spin-clockwise-fade-rotating.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-clockwise-fade-rotating.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-spin-clockwise-fade-rotating.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-clockwise-fade-rotating-rotate{100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@keyframes ball-spin-clockwise-fade-rotating-rotate{100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@-webkit-keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%], .la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-spin-clockwise-fade.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:1s linear infinite ball-spin-clockwise-fade;animation:1s linear infinite ball-spin-clockwise-fade}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}.la-ball-spin-clockwise-fade.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-spin-clockwise-fade.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-clockwise-fade.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-spin-clockwise-fade.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-clockwise-fade.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-spin-clockwise-fade.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-clockwise-fade{50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-spin-clockwise-fade{50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.la-ball-spin-clockwise[_ngcontent-%COMP%], .la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-spin-clockwise[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-spin-clockwise.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:1s ease-in-out infinite ball-spin-clockwise;animation:1s ease-in-out infinite ball-spin-clockwise}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-spin-clockwise[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}.la-ball-spin-clockwise.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-spin-clockwise.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-clockwise.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-spin-clockwise.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-clockwise.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-spin-clockwise.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-clockwise{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:1}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes ball-spin-clockwise{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:1}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}.la-ball-spin-fade-rotating[_ngcontent-%COMP%], .la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-spin-fade-rotating[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:32px;height:32px;-webkit-animation:6s linear infinite ball-spin-fade-rotate;animation:6s linear infinite ball-spin-fade-rotate}.la-ball-spin-fade-rotating.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:1s linear infinite ball-spin-fade;animation:1s linear infinite ball-spin-fade}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-ball-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-spin-fade-rotating.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-spin-fade-rotating.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-fade-rotating.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-spin-fade-rotating.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-fade-rotating.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-spin-fade-rotating.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-fade-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes ball-spin-fade-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.la-ball-spin-fade[_ngcontent-%COMP%], .la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-spin-fade[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-spin-fade.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:1s linear infinite ball-spin-fade;animation:1s linear infinite ball-spin-fade}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-ball-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-spin-fade.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-spin-fade.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-fade.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-spin-fade.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-fade.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-spin-fade.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-fade{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}}@keyframes ball-spin-fade{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}}.la-ball-spin-rotate[_ngcontent-%COMP%], .la-ball-spin-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-spin-rotate[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:32px;height:32px;-webkit-animation:2s linear infinite ball-spin-rotate;animation:2s linear infinite ball-spin-rotate}.la-ball-spin-rotate.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-spin-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:0;width:60%;height:60%;border-radius:100%;-webkit-animation:2s ease-in-out infinite ball-spin-bounce;animation:2s ease-in-out infinite ball-spin-bounce}.la-ball-spin-rotate[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{top:auto;bottom:0;-webkit-animation-delay:-1s;animation-delay:-1s}.la-ball-spin-rotate.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-spin-rotate.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-spin-rotate.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}@-webkit-keyframes ball-spin-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes ball-spin-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes ball-spin-bounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-spin-bounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}.la-ball-spin[_ngcontent-%COMP%], .la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-spin[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-spin.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:1s ease-in-out infinite ball-spin;animation:1s ease-in-out infinite ball-spin}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-ball-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-spin.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-spin.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-spin.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-spin.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:1}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes ball-spin{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:1}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}.la-ball-square-clockwise-spin[_ngcontent-%COMP%], .la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-square-clockwise-spin[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:26px;height:26px}.la-ball-square-clockwise-spin.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:12px;height:12px;margin-top:-6px;margin-left:-6px;border-radius:100%;-webkit-animation:1s ease-in-out infinite ball-square-clockwise-spin;animation:1s ease-in-out infinite ball-square-clockwise-spin}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){top:0;left:0;-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:0;left:50%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:0;left:100%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:50%;left:100%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:100%;left:100%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:100%;left:50%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:100%;left:0;-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-square-clockwise-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:50%;left:0;-webkit-animation-delay:0s;animation-delay:0s}.la-ball-square-clockwise-spin.la-sm[_ngcontent-%COMP%]{width:12px;height:12px}.la-ball-square-clockwise-spin.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:6px;height:6px;margin-top:-3px;margin-left:-3px}.la-ball-square-clockwise-spin.la-2x[_ngcontent-%COMP%]{width:52px;height:52px}.la-ball-square-clockwise-spin.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px;margin-top:-12px;margin-left:-12px}.la-ball-square-clockwise-spin.la-3x[_ngcontent-%COMP%]{width:78px;height:78px}.la-ball-square-clockwise-spin.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:36px;height:36px;margin-top:-18px;margin-left:-18px}@-webkit-keyframes ball-square-clockwise-spin{0%,100%,40%{-webkit-transform:scale(.4);transform:scale(.4)}70%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-square-clockwise-spin{0%,100%,40%{-webkit-transform:scale(.4);transform:scale(.4)}70%{-webkit-transform:scale(1);transform:scale(1)}}.la-ball-square-spin[_ngcontent-%COMP%], .la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-square-spin[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:26px;height:26px}.la-ball-square-spin.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:12px;height:12px;margin-top:-6px;margin-left:-6px;border-radius:100%;-webkit-animation:1s ease-in-out infinite ball-square-spin;animation:1s ease-in-out infinite ball-square-spin}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){top:0;left:0;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:0;left:50%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:0;left:100%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:50%;left:100%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:100%;left:100%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:100%;left:50%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:100%;left:0;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-ball-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:50%;left:0;-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-square-spin.la-sm[_ngcontent-%COMP%]{width:12px;height:12px}.la-ball-square-spin.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:6px;height:6px;margin-top:-3px;margin-left:-3px}.la-ball-square-spin.la-2x[_ngcontent-%COMP%]{width:52px;height:52px}.la-ball-square-spin.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px;margin-top:-12px;margin-left:-12px}.la-ball-square-spin.la-3x[_ngcontent-%COMP%]{width:78px;height:78px}.la-ball-square-spin.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:36px;height:36px;margin-top:-18px;margin-left:-18px}@-webkit-keyframes ball-square-spin{0%,100%,40%{-webkit-transform:scale(.4);transform:scale(.4)}70%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-square-spin{0%,100%,40%{-webkit-transform:scale(.4);transform:scale(.4)}70%{-webkit-transform:scale(1);transform:scale(1)}}.la-ball-triangle-path[_ngcontent-%COMP%], .la-ball-triangle-path[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-ball-triangle-path[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-triangle-path.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-triangle-path[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:0;left:0;width:10px;height:10px;border-radius:100%}.la-ball-triangle-path[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){-webkit-animation:2s ease-in-out infinite ball-triangle-path-ball-one;animation:2s ease-in-out infinite ball-triangle-path-ball-one}.la-ball-triangle-path[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation:2s ease-in-out infinite ball-triangle-path-ball-two;animation:2s ease-in-out infinite ball-triangle-path-ball-two}.la-ball-triangle-path[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation:2s ease-in-out infinite ball-triangle-path-ball-tree;animation:2s ease-in-out infinite ball-triangle-path-ball-tree}.la-ball-triangle-path.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-triangle-path.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px}.la-ball-triangle-path.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-triangle-path.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px}.la-ball-triangle-path.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-triangle-path.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px}@-webkit-keyframes ball-triangle-path-ball-one{0%{-webkit-transform:translate(0,220%);transform:translate(0,220%)}17%,50%,83%{opacity:.25}33%{opacity:1;-webkit-transform:translate(110%,0);transform:translate(110%,0)}66%{opacity:1;-webkit-transform:translate(220%,220%);transform:translate(220%,220%)}100%{opacity:1;-webkit-transform:translate(0,220%);transform:translate(0,220%)}}@keyframes ball-triangle-path-ball-one{0%{-webkit-transform:translate(0,220%);transform:translate(0,220%)}17%,50%,83%{opacity:.25}33%{opacity:1;-webkit-transform:translate(110%,0);transform:translate(110%,0)}66%{opacity:1;-webkit-transform:translate(220%,220%);transform:translate(220%,220%)}100%{opacity:1;-webkit-transform:translate(0,220%);transform:translate(0,220%)}}@-webkit-keyframes ball-triangle-path-ball-two{0%{-webkit-transform:translate(110%,0);transform:translate(110%,0)}17%,50%,83%{opacity:.25}33%{opacity:1;-webkit-transform:translate(220%,220%);transform:translate(220%,220%)}66%{opacity:1;-webkit-transform:translate(0,220%);transform:translate(0,220%)}100%{opacity:1;-webkit-transform:translate(110%,0);transform:translate(110%,0)}}@keyframes ball-triangle-path-ball-two{0%{-webkit-transform:translate(110%,0);transform:translate(110%,0)}17%,50%,83%{opacity:.25}33%{opacity:1;-webkit-transform:translate(220%,220%);transform:translate(220%,220%)}66%{opacity:1;-webkit-transform:translate(0,220%);transform:translate(0,220%)}100%{opacity:1;-webkit-transform:translate(110%,0);transform:translate(110%,0)}}@-webkit-keyframes ball-triangle-path-ball-tree{0%{-webkit-transform:translate(220%,220%);transform:translate(220%,220%)}17%,50%,83%{opacity:.25}33%{opacity:1;-webkit-transform:translate(0,220%);transform:translate(0,220%)}66%{opacity:1;-webkit-transform:translate(110%,0);transform:translate(110%,0)}100%{opacity:1;-webkit-transform:translate(220%,220%);transform:translate(220%,220%)}}@keyframes ball-triangle-path-ball-tree{0%{-webkit-transform:translate(220%,220%);transform:translate(220%,220%)}17%,50%,83%{opacity:.25}33%{opacity:1;-webkit-transform:translate(0,220%);transform:translate(0,220%)}66%{opacity:1;-webkit-transform:translate(110%,0);transform:translate(110%,0)}100%{opacity:1;-webkit-transform:translate(220%,220%);transform:translate(220%,220%)}}.la-ball-zig-zag-deflect[_ngcontent-%COMP%], .la-ball-zig-zag-deflect[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box}.la-ball-zig-zag-deflect[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;position:relative;width:32px;height:32px}.la-ball-zig-zag-deflect.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-zig-zag-deflect[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:10px;height:10px;margin-top:-5px;margin-left:-5px;border-radius:100%}.la-ball-zig-zag-deflect[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation:1.5s linear infinite ball-zig-deflect;animation:1.5s linear infinite ball-zig-deflect}.la-ball-zig-zag-deflect[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{-webkit-animation:1.5s linear infinite ball-zag-deflect;animation:1.5s linear infinite ball-zag-deflect}.la-ball-zig-zag-deflect.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-zig-zag-deflect.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-zig-zag-deflect.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-zig-zag-deflect.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px;margin-top:-10px;margin-left:-10px}.la-ball-zig-zag-deflect.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-zig-zag-deflect.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px;margin-top:-15px;margin-left:-15px}@-webkit-keyframes ball-zig-deflect{17%,84%{-webkit-transform:translate(-80%,-160%);transform:translate(-80%,-160%)}34%,67%{-webkit-transform:translate(80%,-160%);transform:translate(80%,-160%)}100%,50%{-webkit-transform:translate(0,0);transform:translate(0,0)}}@keyframes ball-zig-deflect{17%,84%{-webkit-transform:translate(-80%,-160%);transform:translate(-80%,-160%)}34%,67%{-webkit-transform:translate(80%,-160%);transform:translate(80%,-160%)}100%,50%{-webkit-transform:translate(0,0);transform:translate(0,0)}}@-webkit-keyframes ball-zag-deflect{17%,84%{-webkit-transform:translate(80%,160%);transform:translate(80%,160%)}34%,67%{-webkit-transform:translate(-80%,160%);transform:translate(-80%,160%)}100%,50%{-webkit-transform:translate(0,0);transform:translate(0,0)}}@keyframes ball-zag-deflect{17%,84%{-webkit-transform:translate(80%,160%);transform:translate(80%,160%)}34%,67%{-webkit-transform:translate(-80%,160%);transform:translate(-80%,160%)}100%,50%{-webkit-transform:translate(0,0);transform:translate(0,0)}}.la-ball-zig-zag[_ngcontent-%COMP%], .la-ball-zig-zag[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{box-sizing:border-box}.la-ball-zig-zag[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;position:relative;width:32px;height:32px}.la-ball-zig-zag.la-dark[_ngcontent-%COMP%]{color:#333}.la-ball-zig-zag[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:10px;height:10px;margin-top:-5px;margin-left:-5px;border-radius:100%}.la-ball-zig-zag[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{-webkit-animation:.7s linear infinite ball-zig-effect;animation:.7s linear infinite ball-zig-effect}.la-ball-zig-zag[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{-webkit-animation:.7s linear infinite ball-zag-effect;animation:.7s linear infinite ball-zag-effect}.la-ball-zig-zag.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-ball-zig-zag.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-zig-zag.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-ball-zig-zag.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:20px;height:20px;margin-top:-10px;margin-left:-10px}.la-ball-zig-zag.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-ball-zig-zag.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:30px;height:30px;margin-top:-15px;margin-left:-15px}@-webkit-keyframes ball-zig-effect{0%,100%{-webkit-transform:translate(0,0);transform:translate(0,0)}33%{-webkit-transform:translate(-75%,-150%);transform:translate(-75%,-150%)}66%{-webkit-transform:translate(75%,-150%);transform:translate(75%,-150%)}}@keyframes ball-zig-effect{0%,100%{-webkit-transform:translate(0,0);transform:translate(0,0)}33%{-webkit-transform:translate(-75%,-150%);transform:translate(-75%,-150%)}66%{-webkit-transform:translate(75%,-150%);transform:translate(75%,-150%)}}@-webkit-keyframes ball-zag-effect{0%,100%{-webkit-transform:translate(0,0);transform:translate(0,0)}33%{-webkit-transform:translate(75%,150%);transform:translate(75%,150%)}66%{-webkit-transform:translate(-75%,150%);transform:translate(-75%,150%)}}@keyframes ball-zag-effect{0%,100%{-webkit-transform:translate(0,0);transform:translate(0,0)}33%{-webkit-transform:translate(75%,150%);transform:translate(75%,150%)}66%{-webkit-transform:translate(-75%,150%);transform:translate(-75%,150%)}}.la-cog[_ngcontent-%COMP%], .la-cog[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-cog[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:31px;height:31px}.la-cog.la-dark[_ngcontent-%COMP%]{color:#333}.la-cog[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;border:2px dashed currentColor;width:100%;height:100%;background-color:transparent;border-radius:100%;-webkit-animation:4s linear infinite cog-rotate;animation:4s linear infinite cog-rotate}.la-cog[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;width:100%;height:100%;content:\"\";border:2px solid currentColor;border-radius:100%}.la-cog.la-sm[_ngcontent-%COMP%]{width:15px;height:15px}.la-cog.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .la-cog.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{border-width:1px}.la-cog.la-2x[_ngcontent-%COMP%]{width:61px;height:61px}.la-cog.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .la-cog.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{border-width:4px}.la-cog.la-3x[_ngcontent-%COMP%]{width:91px;height:91px}.la-cog.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%], .la-cog.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{border-width:6px}@-webkit-keyframes cog-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cog-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.la-cube-transition[_ngcontent-%COMP%], .la-cube-transition[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-cube-transition[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-cube-transition.la-dark[_ngcontent-%COMP%]{color:#333}.la-cube-transition[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:0;left:0;width:14px;height:14px;margin-top:-7px;margin-left:-7px;border-radius:0;-webkit-animation:1.6s ease-in-out infinite cube-transition;animation:1.6s ease-in-out infinite cube-transition}.la-cube-transition[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{-webkit-animation-delay:-.8s;animation-delay:-.8s}.la-cube-transition.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-cube-transition.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:6px;height:6px;margin-top:-3px;margin-left:-3px}.la-cube-transition.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-cube-transition.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:28px;height:28px;margin-top:-14px;margin-left:-14px}.la-cube-transition.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-cube-transition.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:42px;height:42px;margin-top:-21px;margin-left:-21px}@-webkit-keyframes cube-transition{25%{top:0;left:100%;-webkit-transform:scale(.5) rotate(-90deg);transform:scale(.5) rotate(-90deg)}50%{top:100%;left:100%;-webkit-transform:scale(1) rotate(-180deg);transform:scale(1) rotate(-180deg)}75%{top:100%;left:0;-webkit-transform:scale(.5) rotate(-270deg);transform:scale(.5) rotate(-270deg)}100%{top:0;left:0;-webkit-transform:scale(1) rotate(-360deg);transform:scale(1) rotate(-360deg)}}@keyframes cube-transition{25%{top:0;left:100%;-webkit-transform:scale(.5) rotate(-90deg);transform:scale(.5) rotate(-90deg)}50%{top:100%;left:100%;-webkit-transform:scale(1) rotate(-180deg);transform:scale(1) rotate(-180deg)}75%{top:100%;left:0;-webkit-transform:scale(.5) rotate(-270deg);transform:scale(.5) rotate(-270deg)}100%{top:0;left:0;-webkit-transform:scale(1) rotate(-360deg);transform:scale(1) rotate(-360deg)}}.la-fire[_ngcontent-%COMP%], .la-fire[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-fire[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-fire.la-dark[_ngcontent-%COMP%]{color:#333}.la-fire[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;bottom:0;left:50%;width:12px;height:12px;border-radius:2px;-webkit-transform:translateY(0) translateX(-50%) rotate(45deg) scale(0);transform:translateY(0) translateX(-50%) rotate(45deg) scale(0);-webkit-animation:1.5s linear infinite fire-diamonds;animation:1.5s linear infinite fire-diamonds}.la-fire[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){-webkit-animation-delay:-.85s;animation-delay:-.85s}.la-fire[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-1.85s;animation-delay:-1.85s}.la-fire[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-2.85s;animation-delay:-2.85s}.la-fire.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-fire.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:6px;height:6px}.la-fire.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-fire.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:24px;height:24px}.la-fire.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-fire.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:36px;height:36px}@-webkit-keyframes fire-diamonds{0%{-webkit-transform:translateY(75%) translateX(-50%) rotate(45deg) scale(0);transform:translateY(75%) translateX(-50%) rotate(45deg) scale(0)}50%{-webkit-transform:translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1);transform:translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1)}100%{-webkit-transform:translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0);transform:translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0)}}@keyframes fire-diamonds{0%{-webkit-transform:translateY(75%) translateX(-50%) rotate(45deg) scale(0);transform:translateY(75%) translateX(-50%) rotate(45deg) scale(0)}50%{-webkit-transform:translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1);transform:translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1)}100%{-webkit-transform:translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0);transform:translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0)}}.la-line-scale-party[_ngcontent-%COMP%], .la-line-scale-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-line-scale-party[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:40px;height:32px}.la-line-scale-party.la-dark[_ngcontent-%COMP%]{color:#333}.la-line-scale-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:4px;height:32px;margin:0 2px;border-radius:0;-webkit-animation-name:line-scale-party;animation-name:line-scale-party;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.la-line-scale-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){-webkit-animation-duration:.43s;animation-duration:.43s;-webkit-animation-delay:-.23s;animation-delay:-.23s}.la-line-scale-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-duration:.62s;animation-duration:.62s;-webkit-animation-delay:-.32s;animation-delay:-.32s}.la-line-scale-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-duration:.43s;animation-duration:.43s;-webkit-animation-delay:-.44s;animation-delay:-.44s}.la-line-scale-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-delay:-.31s;animation-delay:-.31s}.la-line-scale-party[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-duration:.74s;animation-duration:.74s;-webkit-animation-delay:-.24s;animation-delay:-.24s}.la-line-scale-party.la-sm[_ngcontent-%COMP%]{width:20px;height:16px}.la-line-scale-party.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:2px;height:16px;margin:0 1px}.la-line-scale-party.la-2x[_ngcontent-%COMP%]{width:80px;height:64px}.la-line-scale-party.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:8px;height:64px;margin:0 4px}.la-line-scale-party.la-3x[_ngcontent-%COMP%]{width:120px;height:96px}.la-line-scale-party.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:12px;height:96px;margin:0 6px}@-webkit-keyframes line-scale-party{0%,100%{-webkit-transform:scaleY(1);transform:scaleY(1)}50%{-webkit-transform:scaleY(.3);transform:scaleY(.3)}}@keyframes line-scale-party{0%,100%{-webkit-transform:scaleY(1);transform:scaleY(1)}50%{-webkit-transform:scaleY(.3);transform:scaleY(.3)}}.la-line-scale-pulse-out-rapid[_ngcontent-%COMP%], .la-line-scale-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-line-scale-pulse-out-rapid[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:40px;height:32px}.la-line-scale-pulse-out-rapid.la-dark[_ngcontent-%COMP%]{color:#333}.la-line-scale-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:4px;height:32px;margin:0 2px;border-radius:0;-webkit-animation:.9s cubic-bezier(.11,.49,.38,.78) infinite line-scale-pulse-out-rapid;animation:.9s cubic-bezier(.11,.49,.38,.78) infinite line-scale-pulse-out-rapid}.la-line-scale-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.la-line-scale-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2), .la-line-scale-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-.65s;animation-delay:-.65s}.la-line-scale-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1), .la-line-scale-pulse-out-rapid[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-.4s;animation-delay:-.4s}.la-line-scale-pulse-out-rapid.la-sm[_ngcontent-%COMP%]{width:20px;height:16px}.la-line-scale-pulse-out-rapid.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:2px;height:16px;margin:0 1px}.la-line-scale-pulse-out-rapid.la-2x[_ngcontent-%COMP%]{width:80px;height:64px}.la-line-scale-pulse-out-rapid.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:8px;height:64px;margin:0 4px}.la-line-scale-pulse-out-rapid.la-3x[_ngcontent-%COMP%]{width:120px;height:96px}.la-line-scale-pulse-out-rapid.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:12px;height:96px;margin:0 6px}@-webkit-keyframes line-scale-pulse-out-rapid{0%,90%{-webkit-transform:scaley(1);transform:scaley(1)}80%{-webkit-transform:scaley(.3);transform:scaley(.3)}}@keyframes line-scale-pulse-out-rapid{0%,90%{-webkit-transform:scaley(1);transform:scaley(1)}80%{-webkit-transform:scaley(.3);transform:scaley(.3)}}.la-line-scale-pulse-out[_ngcontent-%COMP%], .la-line-scale-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-line-scale-pulse-out[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:40px;height:32px}.la-line-scale-pulse-out.la-dark[_ngcontent-%COMP%]{color:#333}.la-line-scale-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:4px;height:32px;margin:0 2px;border-radius:0;-webkit-animation:.9s cubic-bezier(.85,.25,.37,.85) infinite line-scale-pulse-out;animation:.9s cubic-bezier(.85,.25,.37,.85) infinite line-scale-pulse-out}.la-line-scale-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.la-line-scale-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2), .la-line-scale-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-.7s;animation-delay:-.7s}.la-line-scale-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1), .la-line-scale-pulse-out[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-line-scale-pulse-out.la-sm[_ngcontent-%COMP%]{width:20px;height:16px}.la-line-scale-pulse-out.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:2px;height:16px;margin:0 1px}.la-line-scale-pulse-out.la-2x[_ngcontent-%COMP%]{width:80px;height:64px}.la-line-scale-pulse-out.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:8px;height:64px;margin:0 4px}.la-line-scale-pulse-out.la-3x[_ngcontent-%COMP%]{width:120px;height:96px}.la-line-scale-pulse-out.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:12px;height:96px;margin:0 6px}@-webkit-keyframes line-scale-pulse-out{0%,100%{-webkit-transform:scaley(1);transform:scaley(1)}50%{-webkit-transform:scaley(.3);transform:scaley(.3)}}@keyframes line-scale-pulse-out{0%,100%{-webkit-transform:scaley(1);transform:scaley(1)}50%{-webkit-transform:scaley(.3);transform:scaley(.3)}}.la-line-scale[_ngcontent-%COMP%], .la-line-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-line-scale[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:40px;height:32px}.la-line-scale.la-dark[_ngcontent-%COMP%]{color:#333}.la-line-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:4px;height:32px;margin:0 2px;border-radius:0;-webkit-animation:1.2s infinite line-scale;animation:1.2s infinite line-scale}.la-line-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.la-line-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.la-line-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-1s;animation-delay:-1s}.la-line-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-.9s;animation-delay:-.9s}.la-line-scale[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-.8s;animation-delay:-.8s}.la-line-scale.la-sm[_ngcontent-%COMP%]{width:20px;height:16px}.la-line-scale.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:2px;height:16px;margin:0 1px}.la-line-scale.la-2x[_ngcontent-%COMP%]{width:80px;height:64px}.la-line-scale.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:8px;height:64px;margin:0 4px}.la-line-scale.la-3x[_ngcontent-%COMP%]{width:120px;height:96px}.la-line-scale.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:12px;height:96px;margin:0 6px}@-webkit-keyframes line-scale{0%,100%,40%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}20%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes line-scale{0%,100%,40%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}20%{-webkit-transform:scaleY(1);transform:scaleY(1)}}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%], .la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:32px;height:32px;-webkit-animation:6s linear infinite line-spin-clockwise-fade-rotating-rotate;animation:6s linear infinite line-spin-clockwise-fade-rotating-rotate}.la-line-spin-clockwise-fade-rotating.la-dark[_ngcontent-%COMP%]{color:#333}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;width:2px;height:10px;margin:-5px 2px 2px -1px;border-radius:0;-webkit-animation:1s ease-in-out infinite line-spin-clockwise-fade-rotating;animation:1s ease-in-out infinite line-spin-clockwise-fade-rotating}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){top:15%;left:50%;-webkit-transform:rotate(0);transform:rotate(0);-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:25.2512626585%;left:74.7487373415%;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:85%;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:74.7487373415%;left:74.7487373415%;-webkit-transform:rotate(135deg);transform:rotate(135deg);-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:84.9999999974%;left:50.0000000004%;-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:74.7487369862%;left:25.2512627193%;-webkit-transform:rotate(225deg);transform:rotate(225deg);-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999806189%;left:15.0000039834%;-webkit-transform:rotate(270deg);transform:rotate(270deg);-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-line-spin-clockwise-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:25.2506949798%;left:25.2513989292%;-webkit-transform:rotate(315deg);transform:rotate(315deg);-webkit-animation-delay:0s;animation-delay:0s}.la-line-spin-clockwise-fade-rotating.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-line-spin-clockwise-fade-rotating.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:1px;height:4px;margin-top:-2px;margin-left:0}.la-line-spin-clockwise-fade-rotating.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-line-spin-clockwise-fade-rotating.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:20px;margin-top:-10px;margin-left:-2px}.la-line-spin-clockwise-fade-rotating.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-line-spin-clockwise-fade-rotating.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:6px;height:30px;margin-top:-15px;margin-left:-3px}@-webkit-keyframes line-spin-clockwise-fade-rotating-rotate{100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@keyframes line-spin-clockwise-fade-rotating-rotate{100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@-webkit-keyframes line-spin-clockwise-fade-rotating{50%{opacity:.2}100%{opacity:1}}@keyframes line-spin-clockwise-fade-rotating{50%{opacity:.2}100%{opacity:1}}.la-line-spin-clockwise-fade[_ngcontent-%COMP%], .la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-line-spin-clockwise-fade[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-line-spin-clockwise-fade.la-dark[_ngcontent-%COMP%]{color:#333}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;width:2px;height:10px;margin:-5px 2px 2px -1px;border-radius:0;-webkit-animation:1s ease-in-out infinite line-spin-clockwise-fade;animation:1s ease-in-out infinite line-spin-clockwise-fade}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){top:15%;left:50%;-webkit-transform:rotate(0);transform:rotate(0);-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:25.2512626585%;left:74.7487373415%;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:85%;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:74.7487373415%;left:74.7487373415%;-webkit-transform:rotate(135deg);transform:rotate(135deg);-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:84.9999999974%;left:50.0000000004%;-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:74.7487369862%;left:25.2512627193%;-webkit-transform:rotate(225deg);transform:rotate(225deg);-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999806189%;left:15.0000039834%;-webkit-transform:rotate(270deg);transform:rotate(270deg);-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-line-spin-clockwise-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:25.2506949798%;left:25.2513989292%;-webkit-transform:rotate(315deg);transform:rotate(315deg);-webkit-animation-delay:0s;animation-delay:0s}.la-line-spin-clockwise-fade.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-line-spin-clockwise-fade.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:1px;height:4px;margin-top:-2px;margin-left:0}.la-line-spin-clockwise-fade.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-line-spin-clockwise-fade.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:20px;margin-top:-10px;margin-left:-2px}.la-line-spin-clockwise-fade.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-line-spin-clockwise-fade.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:6px;height:30px;margin-top:-15px;margin-left:-3px}@-webkit-keyframes line-spin-clockwise-fade{50%{opacity:.2}100%{opacity:1}}@keyframes line-spin-clockwise-fade{50%{opacity:.2}100%{opacity:1}}.la-line-spin-fade-rotating[_ngcontent-%COMP%], .la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-line-spin-fade-rotating[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:32px;height:32px;-webkit-animation:6s linear infinite ball-spin-fade-rotating-rotate;animation:6s linear infinite ball-spin-fade-rotating-rotate}.la-line-spin-fade-rotating.la-dark[_ngcontent-%COMP%]{color:#333}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;width:2px;height:10px;margin:-5px 2px 2px -1px;border-radius:0;-webkit-animation:1s ease-in-out infinite line-spin-fade-rotating;animation:1s ease-in-out infinite line-spin-fade-rotating}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){top:15%;left:50%;-webkit-transform:rotate(0);transform:rotate(0);-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:25.2512626585%;left:74.7487373415%;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:85%;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:74.7487373415%;left:74.7487373415%;-webkit-transform:rotate(135deg);transform:rotate(135deg);-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:84.9999999974%;left:50.0000000004%;-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:74.7487369862%;left:25.2512627193%;-webkit-transform:rotate(225deg);transform:rotate(225deg);-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999806189%;left:15.0000039834%;-webkit-transform:rotate(270deg);transform:rotate(270deg);-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-line-spin-fade-rotating[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:25.2506949798%;left:25.2513989292%;-webkit-transform:rotate(315deg);transform:rotate(315deg);-webkit-animation-delay:-2s;animation-delay:-2s}.la-line-spin-fade-rotating.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-line-spin-fade-rotating.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:1px;height:4px;margin-top:-2px;margin-left:0}.la-line-spin-fade-rotating.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-line-spin-fade-rotating.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:20px;margin-top:-10px;margin-left:-2px}.la-line-spin-fade-rotating.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-line-spin-fade-rotating.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:6px;height:30px;margin-top:-15px;margin-left:-3px}@-webkit-keyframes ball-spin-fade-rotating-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes ball-spin-fade-rotating-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes line-spin-fade-rotating{50%{opacity:.2}100%{opacity:1}}@keyframes line-spin-fade-rotating{50%{opacity:.2}100%{opacity:1}}.la-line-spin-fade[_ngcontent-%COMP%], .la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-line-spin-fade[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-line-spin-fade.la-dark[_ngcontent-%COMP%]{color:#333}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;width:2px;height:10px;margin:-5px 2px 2px -1px;border-radius:0;-webkit-animation:1s ease-in-out infinite line-spin-fade;animation:1s ease-in-out infinite line-spin-fade}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){top:15%;left:50%;-webkit-transform:rotate(0);transform:rotate(0);-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){top:25.2512626585%;left:74.7487373415%;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){top:50%;left:85%;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){top:74.7487373415%;left:74.7487373415%;-webkit-transform:rotate(135deg);transform:rotate(135deg);-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){top:84.9999999974%;left:50.0000000004%;-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){top:74.7487369862%;left:25.2512627193%;-webkit-transform:rotate(225deg);transform:rotate(225deg);-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(7){top:49.9999806189%;left:15.0000039834%;-webkit-transform:rotate(270deg);transform:rotate(270deg);-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-line-spin-fade[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(8){top:25.2506949798%;left:25.2513989292%;-webkit-transform:rotate(315deg);transform:rotate(315deg);-webkit-animation-delay:-2s;animation-delay:-2s}.la-line-spin-fade.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-line-spin-fade.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:1px;height:4px;margin-top:-2px;margin-left:0}.la-line-spin-fade.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-line-spin-fade.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:4px;height:20px;margin-top:-10px;margin-left:-2px}.la-line-spin-fade.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-line-spin-fade.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:6px;height:30px;margin-top:-15px;margin-left:-3px}@-webkit-keyframes line-spin-fade{50%{opacity:.2}100%{opacity:1}}@keyframes line-spin-fade{50%{opacity:.2}100%{opacity:1}}.la-pacman[_ngcontent-%COMP%], .la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-pacman[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-pacman.la-dark[_ngcontent-%COMP%]{color:#333}.la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1), .la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){width:0;height:0;background:0 0;border-style:solid;border-width:16px;border-right-color:transparent;border-radius:100%;-webkit-animation:.5s infinite pacman-rotate-half-up;animation:.5s infinite pacman-rotate-half-up}.la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){margin-top:-32px;-webkit-animation-name:pacman-rotate-half-down;animation-name:pacman-rotate-half-down}.la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3), .la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4), .la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5), .la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){position:absolute;top:50%;left:200%;width:8px;height:8px;border-radius:100%;opacity:0;-webkit-animation:2s linear infinite pacman-balls;animation:2s linear infinite pacman-balls}.la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation-delay:-1.44s;animation-delay:-1.44s}.la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-delay:-1.94s;animation-delay:-1.94s}.la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5){-webkit-animation-delay:-2.44s;animation-delay:-2.44s}.la-pacman[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){-webkit-animation-delay:-2.94s;animation-delay:-2.94s}.la-pacman.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-pacman.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1), .la-pacman.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){border-width:8px}.la-pacman.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){margin-top:-16px}.la-pacman.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3), .la-pacman.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4), .la-pacman.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5), .la-pacman.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){width:4px;height:4px}.la-pacman.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-pacman.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1), .la-pacman.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){border-width:32px}.la-pacman.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){margin-top:-64px}.la-pacman.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3), .la-pacman.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4), .la-pacman.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5), .la-pacman.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){width:16px;height:16px}.la-pacman.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-pacman.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1), .la-pacman.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){border-width:48px}.la-pacman.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){margin-top:-96px}.la-pacman.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3), .la-pacman.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4), .la-pacman.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(5), .la-pacman.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(6){width:24px;height:24px}@-webkit-keyframes pacman-rotate-half-up{0%,100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}50%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes pacman-rotate-half-up{0%,100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}50%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes pacman-rotate-half-down{0%,100%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}50%{-webkit-transform:rotate(0);transform:rotate(0)}}@keyframes pacman-rotate-half-down{0%,100%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}50%{-webkit-transform:rotate(0);transform:rotate(0)}}@-webkit-keyframes pacman-balls{0%{left:200%;opacity:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}5%{opacity:.5}66%{opacity:1}67%{opacity:0}100%{left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}}@keyframes pacman-balls{0%{left:200%;opacity:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}5%{opacity:.5}66%{opacity:1}67%{opacity:0}100%{left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}}.la-square-jelly-box[_ngcontent-%COMP%], .la-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-square-jelly-box[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-square-jelly-box.la-dark[_ngcontent-%COMP%]{color:#333}.la-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.la-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1), .la-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){position:absolute;left:0;width:100%}.la-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){top:-25%;z-index:1;height:100%;border-radius:10%;-webkit-animation:.6s linear -.1s infinite square-jelly-box-animate;animation:.6s linear -.1s infinite square-jelly-box-animate}.la-square-jelly-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){bottom:-9%;height:10%;background:#000;border-radius:50%;opacity:.2;-webkit-animation:.6s linear -.1s infinite square-jelly-box-shadow;animation:.6s linear -.1s infinite square-jelly-box-shadow}.la-square-jelly-box.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-square-jelly-box.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-square-jelly-box.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}@-webkit-keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{-webkit-transform:translateY(25%) rotate(22.5deg);transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;-webkit-transform:translateY(50%) scale(1,.9) rotate(45deg);transform:translateY(50%) scale(1,.9) rotate(45deg)}75%{-webkit-transform:translateY(25%) rotate(67.5deg);transform:translateY(25%) rotate(67.5deg)}100%{-webkit-transform:translateY(0) rotate(90deg);transform:translateY(0) rotate(90deg)}}@keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{-webkit-transform:translateY(25%) rotate(22.5deg);transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;-webkit-transform:translateY(50%) scale(1,.9) rotate(45deg);transform:translateY(50%) scale(1,.9) rotate(45deg)}75%{-webkit-transform:translateY(25%) rotate(67.5deg);transform:translateY(25%) rotate(67.5deg)}100%{-webkit-transform:translateY(0) rotate(90deg);transform:translateY(0) rotate(90deg)}}@-webkit-keyframes square-jelly-box-shadow{50%{-webkit-transform:scale(1.25,1);transform:scale(1.25,1)}}@keyframes square-jelly-box-shadow{50%{-webkit-transform:scale(1.25,1);transform:scale(1.25,1)}}.la-square-loader[_ngcontent-%COMP%], .la-square-loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-square-loader[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-square-loader.la-dark[_ngcontent-%COMP%]{color:#333}.la-square-loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;border:2px solid currentColor;width:100%;height:100%;background:0 0;border-radius:0;-webkit-animation:2s infinite square-loader;animation:2s infinite square-loader}.la-square-loader[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{display:inline-block;width:100%;vertical-align:top;content:\"\";background-color:currentColor;-webkit-animation:2s ease-in infinite square-loader-inner;animation:2s ease-in infinite square-loader-inner}.la-square-loader.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-square-loader.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:1px}.la-square-loader.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-square-loader.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:4px}.la-square-loader.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-square-loader.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:6px}@-webkit-keyframes square-loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}25%,50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%,75%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes square-loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}25%,50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%,75%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes square-loader-inner{0%,100%,25%{height:0}50%,75%{height:100%}}@keyframes square-loader-inner{0%,100%,25%{height:0}50%,75%{height:100%}}.la-square-spin[_ngcontent-%COMP%], .la-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-square-spin[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-square-spin.la-dark[_ngcontent-%COMP%]{color:#333}.la-square-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:100%;height:100%;border-radius:0;-webkit-animation:3s cubic-bezier(.09,.57,.49,.9) infinite square-spin;animation:3s cubic-bezier(.09,.57,.49,.9) infinite square-spin}.la-square-spin.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-square-spin.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-square-spin.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}@-webkit-keyframes square-spin{0%{-webkit-transform:perspective(100px) rotateX(0) rotateY(0);transform:perspective(100px) rotateX(0) rotateY(0)}25%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(0);transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(180deg);transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:perspective(100px) rotateX(0) rotateY(180deg);transform:perspective(100px) rotateX(0) rotateY(180deg)}100%{-webkit-transform:perspective(100px) rotateX(0) rotateY(360deg);transform:perspective(100px) rotateX(0) rotateY(360deg)}}@keyframes square-spin{0%{-webkit-transform:perspective(100px) rotateX(0) rotateY(0);transform:perspective(100px) rotateX(0) rotateY(0)}25%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(0);transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(180deg);transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:perspective(100px) rotateX(0) rotateY(180deg);transform:perspective(100px) rotateX(0) rotateY(180deg)}100%{-webkit-transform:perspective(100px) rotateX(0) rotateY(360deg);transform:perspective(100px) rotateX(0) rotateY(360deg)}}.la-timer[_ngcontent-%COMP%], .la-timer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-timer[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-timer.la-dark[_ngcontent-%COMP%]{color:#333}.la-timer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;border:2px solid currentColor;width:32px;height:32px;background:0 0;border-radius:100%}.la-timer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after, .la-timer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{position:absolute;top:14px;left:14px;display:block;width:2px;margin-top:-1px;margin-left:-1px;content:\"\";background:currentColor;border-radius:2px;-webkit-transform-origin:1px 1px 0;transform-origin:1px 1px 0;-webkit-animation:1.25s linear -625ms infinite timer-loader;animation:1.25s linear -625ms infinite timer-loader}.la-timer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{height:12px}.la-timer[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{height:8px;-webkit-animation-duration:15s;animation-duration:15s;-webkit-animation-delay:-7.5s;animation-delay:-7.5s}.la-timer.la-sm[_ngcontent-%COMP%]{width:16px;height:16px}.la-timer.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:16px;height:16px;border-width:1px}.la-timer.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after, .la-timer.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{top:7px;left:7px;width:1px;margin-top:-.5px;margin-left:-.5px;border-radius:1px;-webkit-transform-origin:.5px .5px 0;transform-origin:.5px .5px 0}.la-timer.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{height:6px}.la-timer.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{height:4px}.la-timer.la-2x[_ngcontent-%COMP%]{width:64px;height:64px}.la-timer.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:64px;height:64px;border-width:4px}.la-timer.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after, .la-timer.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{top:28px;left:28px;width:4px;margin-top:-2px;margin-left:-2px;border-radius:4px;-webkit-transform-origin:2px 2px 0;transform-origin:2px 2px 0}.la-timer.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{height:24px}.la-timer.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{height:16px}.la-timer.la-3x[_ngcontent-%COMP%]{width:96px;height:96px}.la-timer.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:96px;height:96px;border-width:6px}.la-timer.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after, .la-timer.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{top:42px;left:42px;width:6px;margin-top:-3px;margin-left:-3px;border-radius:6px;-webkit-transform-origin:3px 3px 0;transform-origin:3px 3px 0}.la-timer.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:before{height:36px}.la-timer.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:after{height:24px}@-webkit-keyframes timer-loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes timer-loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.la-triangle-skew-spin[_ngcontent-%COMP%], .la-triangle-skew-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:relative;box-sizing:border-box}.la-triangle-skew-spin[_ngcontent-%COMP%]{display:block;font-size:0;color:#fff;width:32px;height:16px}.la-triangle-skew-spin.la-dark[_ngcontent-%COMP%]{color:#333}.la-triangle-skew-spin[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inline-block;float:none;border:0 solid currentColor;width:0;height:0;background:0 0;border:solid;border-width:0 16px 16px;border-right-color:transparent;border-left-color:transparent;-webkit-animation:3s cubic-bezier(.09,.57,.49,.9) infinite triangle-skew-spin;animation:3s cubic-bezier(.09,.57,.49,.9) infinite triangle-skew-spin}.la-triangle-skew-spin.la-sm[_ngcontent-%COMP%]{width:16px;height:8px}.la-triangle-skew-spin.la-sm[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:0 8px 8px}.la-triangle-skew-spin.la-2x[_ngcontent-%COMP%]{width:64px;height:32px}.la-triangle-skew-spin.la-2x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:0 32px 32px}.la-triangle-skew-spin.la-3x[_ngcontent-%COMP%]{width:96px;height:48px}.la-triangle-skew-spin.la-3x[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-width:0 48px 48px}@-webkit-keyframes triangle-skew-spin{0%{-webkit-transform:perspective(100px) rotateX(0) rotateY(0);transform:perspective(100px) rotateX(0) rotateY(0)}25%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(0);transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(180deg);transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:perspective(100px) rotateX(0) rotateY(180deg);transform:perspective(100px) rotateX(0) rotateY(180deg)}100%{-webkit-transform:perspective(100px) rotateX(0) rotateY(360deg);transform:perspective(100px) rotateX(0) rotateY(360deg)}}@keyframes triangle-skew-spin{0%{-webkit-transform:perspective(100px) rotateX(0) rotateY(0);transform:perspective(100px) rotateX(0) rotateY(0)}25%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(0);transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(180deg);transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:perspective(100px) rotateX(0) rotateY(180deg);transform:perspective(100px) rotateX(0) rotateY(180deg)}100%{-webkit-transform:perspective(100px) rotateX(0) rotateY(360deg);transform:perspective(100px) rotateX(0) rotateY(360deg)}}.overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}.overlay[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.loading-text[_ngcontent-%COMP%]{position:absolute;top:60%;left:50%;-webkit-transform:translate(-50%,-60%);transform:translate(-50%,-60%)}"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('fadeIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(300)
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 })))
            ])
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxSpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'ngx-spinner',
                template: "<div [@fadeIn]=\"'in'\" *ngIf=\"spinner.show\" class=\"overlay\" [style.background-color]=\"spinner.bdColor\"\n  [style.z-index]=\"spinner.zIndex\" [style.position]=\"spinner.fullScreen ? 'fixed' : 'absolute'\">\n  <div *ngIf=\"!template\" [class]=\"spinner.class\" [style.color]=\"spinner.color\">\n    <div *ngFor=\"let index of spinner.divArray\"></div>\n  </div>\n  <div *ngIf=\"template\" [innerHTML]=\"template\"></div>\n  <div class=\"loading-text\" [style.z-index]=\"spinner.zIndex\">\n    <ng-content></ng-content>\n  </div>\n</div>",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('fadeIn', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(300)
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 })))
                    ])
                ],
                styles: ["/*!\n * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/)\n * Copyright 2015 Daniel Cardoso <@DanielCardoso>\n * Licensed under MIT\n */.la-ball-8bits,.la-ball-8bits>div{position:relative;box-sizing:border-box}.la-ball-8bits{display:block;font-size:0;color:#fff;width:12px;height:12px}.la-ball-8bits.la-dark{color:#333}.la-ball-8bits>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:4px;height:4px;border-radius:0;opacity:0;-webkit-transform:translate(100%,100%);transform:translate(100%,100%);-webkit-animation:1s infinite ball-8bits;animation:1s infinite ball-8bits}.la-ball-8bits>div:nth-child(1){-webkit-animation-delay:-.9375s;animation-delay:-.9375s;top:-100%;left:0}.la-ball-8bits>div:nth-child(2){-webkit-animation-delay:-.875s;animation-delay:-.875s;top:-100%;left:33.3333333333%}.la-ball-8bits>div:nth-child(3){-webkit-animation-delay:-.8125s;animation-delay:-.8125s;top:-66.6666666667%;left:66.6666666667%}.la-ball-8bits>div:nth-child(4){-webkit-animation-delay:-.75s;animation-delay:-.75s;top:-33.3333333333%;left:100%}.la-ball-8bits>div:nth-child(5){-webkit-animation-delay:-.6875s;animation-delay:-.6875s;top:0;left:100%}.la-ball-8bits>div:nth-child(6){-webkit-animation-delay:-.625s;animation-delay:-.625s;top:33.3333333333%;left:100%}.la-ball-8bits>div:nth-child(7){-webkit-animation-delay:-.5625s;animation-delay:-.5625s;top:66.6666666667%;left:66.6666666667%}.la-ball-8bits>div:nth-child(8){-webkit-animation-delay:-.5s;animation-delay:-.5s;top:100%;left:33.3333333333%}.la-ball-8bits>div:nth-child(9){-webkit-animation-delay:-.4375s;animation-delay:-.4375s;top:100%;left:0}.la-ball-8bits>div:nth-child(10){-webkit-animation-delay:-.375s;animation-delay:-.375s;top:100%;left:-33.3333333333%}.la-ball-8bits>div:nth-child(11){-webkit-animation-delay:-.3125s;animation-delay:-.3125s;top:66.6666666667%;left:-66.6666666667%}.la-ball-8bits>div:nth-child(12){-webkit-animation-delay:-.25s;animation-delay:-.25s;top:33.3333333333%;left:-100%}.la-ball-8bits>div:nth-child(13){-webkit-animation-delay:-.1875s;animation-delay:-.1875s;top:0;left:-100%}.la-ball-8bits>div:nth-child(14){-webkit-animation-delay:-.125s;animation-delay:-.125s;top:-33.3333333333%;left:-100%}.la-ball-8bits>div:nth-child(15){-webkit-animation-delay:-.0625s;animation-delay:-.0625s;top:-66.6666666667%;left:-66.6666666667%}.la-ball-8bits>div:nth-child(16){-webkit-animation-delay:0s;animation-delay:0s;top:-100%;left:-33.3333333333%}.la-ball-8bits.la-sm{width:6px;height:6px}.la-ball-8bits.la-sm>div{width:2px;height:2px}.la-ball-8bits.la-2x{width:24px;height:24px}.la-ball-8bits.la-2x>div{width:8px;height:8px}.la-ball-8bits.la-3x{width:36px;height:36px}.la-ball-8bits.la-3x>div{width:12px;height:12px}@-webkit-keyframes ball-8bits{0%,50%{opacity:1}51%{opacity:0}}@keyframes ball-8bits{0%,50%{opacity:1}51%{opacity:0}}.la-ball-atom,.la-ball-atom>div{position:relative;box-sizing:border-box}.la-ball-atom{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-atom.la-dark{color:#333}.la-ball-atom>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.la-ball-atom>div:nth-child(1){position:absolute;top:50%;left:50%;z-index:1;width:60%;height:60%;background:#aaa;border-radius:100%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-animation:4.5s linear infinite ball-atom-shrink;animation:4.5s linear infinite ball-atom-shrink}.la-ball-atom>div:not(:nth-child(1)){position:absolute;left:0;z-index:0;width:100%;height:100%;background:0 0;-webkit-animation:1.5s steps(2,end) infinite ball-atom-zindex;animation:1.5s steps(2,end) infinite ball-atom-zindex}.la-ball-atom>div:not(:nth-child(1)):before{position:absolute;top:0;left:0;width:10px;height:10px;margin-top:-5px;margin-left:-5px;content:\"\";background:currentColor;border-radius:50%;opacity:.75;-webkit-animation:1.5s infinite ball-atom-position,1.5s infinite ball-atom-size;animation:1.5s infinite ball-atom-position,1.5s infinite ball-atom-size}.la-ball-atom>div:nth-child(2){-webkit-animation-delay:.75s;animation-delay:.75s}.la-ball-atom>div:nth-child(2):before{-webkit-animation-delay:0s,-1.125s;animation-delay:0s,-1.125s}.la-ball-atom>div:nth-child(3){-webkit-transform:rotate(120deg);transform:rotate(120deg);-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-atom>div:nth-child(3):before{-webkit-animation-delay:-1s,-.75s;animation-delay:-1s,-.75s}.la-ball-atom>div:nth-child(4){-webkit-transform:rotate(240deg);transform:rotate(240deg);-webkit-animation-delay:.25s;animation-delay:.25s}.la-ball-atom>div:nth-child(4):before{-webkit-animation-delay:-.5s,-125ms;animation-delay:-.5s,-125ms}.la-ball-atom.la-sm{width:16px;height:16px}.la-ball-atom.la-sm>div:not(:nth-child(1)):before{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-atom.la-2x{width:64px;height:64px}.la-ball-atom.la-2x>div:not(:nth-child(1)):before{width:20px;height:20px;margin-top:-10px;margin-left:-10px}.la-ball-atom.la-3x{width:96px;height:96px}.la-ball-atom.la-3x>div:not(:nth-child(1)):before{width:30px;height:30px;margin-top:-15px;margin-left:-15px}@-webkit-keyframes ball-atom-position{50%{top:100%;left:100%}}@keyframes ball-atom-position{50%{top:100%;left:100%}}@-webkit-keyframes ball-atom-size{50%{-webkit-transform:scale(.5,.5);transform:scale(.5,.5)}}@keyframes ball-atom-size{50%{-webkit-transform:scale(.5,.5);transform:scale(.5,.5)}}@-webkit-keyframes ball-atom-zindex{50%{z-index:10}}@keyframes ball-atom-zindex{50%{z-index:10}}@-webkit-keyframes ball-atom-shrink{50%{-webkit-transform:translate(-50%,-50%) scale(.8,.8);transform:translate(-50%,-50%) scale(.8,.8)}}@keyframes ball-atom-shrink{50%{-webkit-transform:translate(-50%,-50%) scale(.8,.8);transform:translate(-50%,-50%) scale(.8,.8)}}.la-ball-beat,.la-ball-beat>div{position:relative;box-sizing:border-box}.la-ball-beat{display:block;font-size:0;color:#fff;width:54px;height:18px}.la-ball-beat.la-dark{color:#333}.la-ball-beat>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10px;height:10px;margin:4px;border-radius:100%;-webkit-animation:.7s linear -.15s infinite ball-beat;animation:.7s linear -.15s infinite ball-beat}.la-ball-beat>div:nth-child(2n-1){-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-beat.la-sm{width:26px;height:8px}.la-ball-beat.la-sm>div{width:4px;height:4px;margin:2px}.la-ball-beat.la-2x{width:108px;height:36px}.la-ball-beat.la-2x>div{width:20px;height:20px;margin:8px}.la-ball-beat.la-3x{width:162px;height:54px}.la-ball-beat.la-3x>div{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-beat{50%{opacity:.2;-webkit-transform:scale(.75);transform:scale(.75)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-beat{50%{opacity:.2;-webkit-transform:scale(.75);transform:scale(.75)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.la-ball-circus,.la-ball-circus>div{position:relative;box-sizing:border-box}.la-ball-circus{display:block;font-size:0;color:#fff;width:16px;height:16px}.la-ball-circus.la-dark{color:#333}.la-ball-circus>div{float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:0;left:-100%;display:block;width:100%;height:100%;border-radius:100%;opacity:.5;-webkit-animation:2.5s cubic-bezier(.25,0,.75,1) infinite ball-circus-position,2.5s cubic-bezier(.25,0,.75,1) infinite ball-circus-size;animation:2.5s cubic-bezier(.25,0,.75,1) infinite ball-circus-position,2.5s cubic-bezier(.25,0,.75,1) infinite ball-circus-size}.la-ball-circus>div:nth-child(1){-webkit-animation-delay:0s,-.5s;animation-delay:0s,-.5s}.la-ball-circus>div:nth-child(2){-webkit-animation-delay:-.5s,-1s;animation-delay:-.5s,-1s}.la-ball-circus>div:nth-child(3){-webkit-animation-delay:-1s,-1.5s;animation-delay:-1s,-1.5s}.la-ball-circus>div:nth-child(4){-webkit-animation-delay:-1.5s,-2s;animation-delay:-1.5s,-2s}.la-ball-circus>div:nth-child(5){-webkit-animation-delay:-2s,-2.5s;animation-delay:-2s,-2.5s}.la-ball-circus.la-sm,.la-ball-circus.la-sm>div{width:8px;height:8px}.la-ball-circus.la-2x,.la-ball-circus.la-2x>div{width:32px;height:32px}.la-ball-circus.la-3x,.la-ball-circus.la-3x>div{width:48px;height:48px}@-webkit-keyframes ball-circus-position{50%{left:100%}}@keyframes ball-circus-position{50%{left:100%}}@-webkit-keyframes ball-circus-size{50%{-webkit-transform:scale(.3,.3);transform:scale(.3,.3)}}@keyframes ball-circus-size{50%{-webkit-transform:scale(.3,.3);transform:scale(.3,.3)}}.la-ball-climbing-dot,.la-ball-climbing-dot>div{position:relative;box-sizing:border-box}.la-ball-climbing-dot{display:block;font-size:0;color:#fff;width:42px;height:32px}.la-ball-climbing-dot.la-dark{color:#333}.la-ball-climbing-dot>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.la-ball-climbing-dot>div:nth-child(1){position:absolute;bottom:32%;left:18%;width:14px;height:14px;border-radius:100%;-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation:.6s ease-in-out infinite ball-climbing-dot-jump;animation:.6s ease-in-out infinite ball-climbing-dot-jump}.la-ball-climbing-dot>div:not(:nth-child(1)){position:absolute;top:0;right:0;width:14px;height:2px;border-radius:0;-webkit-transform:translate(60%,0);transform:translate(60%,0);-webkit-animation:1.8s linear infinite ball-climbing-dot-steps;animation:1.8s linear infinite ball-climbing-dot-steps}.la-ball-climbing-dot>div:not(:nth-child(1)):nth-child(2){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-climbing-dot>div:not(:nth-child(1)):nth-child(3){-webkit-animation-delay:-.6s;animation-delay:-.6s}.la-ball-climbing-dot>div:not(:nth-child(1)):nth-child(4){-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.la-ball-climbing-dot.la-sm{width:20px;height:16px}.la-ball-climbing-dot.la-sm>div:nth-child(1){width:6px;height:6px}.la-ball-climbing-dot.la-sm>div:not(:nth-child(1)){width:6px;height:1px}.la-ball-climbing-dot.la-2x{width:84px;height:64px}.la-ball-climbing-dot.la-2x>div:nth-child(1){width:28px;height:28px}.la-ball-climbing-dot.la-2x>div:not(:nth-child(1)){width:28px;height:4px}.la-ball-climbing-dot.la-3x{width:126px;height:96px}.la-ball-climbing-dot.la-3x>div:nth-child(1){width:42px;height:42px}.la-ball-climbing-dot.la-3x>div:not(:nth-child(1)){width:42px;height:6px}@-webkit-keyframes ball-climbing-dot-jump{0%,100%{-webkit-transform:scale(1,.7);transform:scale(1,.7)}20%,80%,90%{-webkit-transform:scale(.7,1.2);transform:scale(.7,1.2)}40%,46%{-webkit-transform:scale(1,1);transform:scale(1,1)}50%{bottom:125%}}@keyframes ball-climbing-dot-jump{0%,100%{-webkit-transform:scale(1,.7);transform:scale(1,.7)}20%,80%,90%{-webkit-transform:scale(.7,1.2);transform:scale(.7,1.2)}40%,46%{-webkit-transform:scale(1,1);transform:scale(1,1)}50%{bottom:125%}}@-webkit-keyframes ball-climbing-dot-steps{0%{top:0;right:0;opacity:0}50%{opacity:1}100%{top:100%;right:100%;opacity:0}}@keyframes ball-climbing-dot-steps{0%{top:0;right:0;opacity:0}50%{opacity:1}100%{top:100%;right:100%;opacity:0}}.la-ball-clip-rotate-multiple,.la-ball-clip-rotate-multiple>div{position:relative;box-sizing:border-box}.la-ball-clip-rotate-multiple{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-clip-rotate-multiple.la-dark{color:#333}.la-ball-clip-rotate-multiple>div{display:inline-block;float:none;border:2px solid currentColor;position:absolute;top:50%;left:50%;background:0 0;border-radius:100%;-webkit-animation:1s ease-in-out infinite ball-clip-rotate-multiple-rotate;animation:1s ease-in-out infinite ball-clip-rotate-multiple-rotate}.la-ball-clip-rotate-multiple>div:first-child{position:absolute;width:32px;height:32px;border-right-color:transparent;border-left-color:transparent}.la-ball-clip-rotate-multiple>div:last-child{width:16px;height:16px;border-top-color:transparent;border-bottom-color:transparent;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-direction:reverse;animation-direction:reverse}.la-ball-clip-rotate-multiple.la-sm{width:16px;height:16px}.la-ball-clip-rotate-multiple.la-sm>div{border-width:1px}.la-ball-clip-rotate-multiple.la-sm>div:first-child{width:16px;height:16px}.la-ball-clip-rotate-multiple.la-sm>div:last-child{width:8px;height:8px}.la-ball-clip-rotate-multiple.la-2x{width:64px;height:64px}.la-ball-clip-rotate-multiple.la-2x>div{border-width:4px}.la-ball-clip-rotate-multiple.la-2x>div:first-child{width:64px;height:64px}.la-ball-clip-rotate-multiple.la-2x>div:last-child{width:32px;height:32px}.la-ball-clip-rotate-multiple.la-3x{width:96px;height:96px}.la-ball-clip-rotate-multiple.la-3x>div{border-width:6px}.la-ball-clip-rotate-multiple.la-3x>div:first-child{width:96px;height:96px}.la-ball-clip-rotate-multiple.la-3x>div:last-child{width:48px;height:48px}@-webkit-keyframes ball-clip-rotate-multiple-rotate{0%{-webkit-transform:translate(-50%,-50%) rotate(0);transform:translate(-50%,-50%) rotate(0)}50%{-webkit-transform:translate(-50%,-50%) rotate(180deg);transform:translate(-50%,-50%) rotate(180deg)}100%{-webkit-transform:translate(-50%,-50%) rotate(360deg);transform:translate(-50%,-50%) rotate(360deg)}}@keyframes ball-clip-rotate-multiple-rotate{0%{-webkit-transform:translate(-50%,-50%) rotate(0);transform:translate(-50%,-50%) rotate(0)}50%{-webkit-transform:translate(-50%,-50%) rotate(180deg);transform:translate(-50%,-50%) rotate(180deg)}100%{-webkit-transform:translate(-50%,-50%) rotate(360deg);transform:translate(-50%,-50%) rotate(360deg)}}.la-ball-clip-rotate-pulse,.la-ball-clip-rotate-pulse>div{position:relative;box-sizing:border-box}.la-ball-clip-rotate-pulse{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-clip-rotate-pulse.la-dark{color:#333}.la-ball-clip-rotate-pulse>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;border-radius:100%}.la-ball-clip-rotate-pulse>div:first-child{position:absolute;width:32px;height:32px;background:0 0;border-style:solid;border-width:2px;border-right-color:transparent;border-left-color:transparent;-webkit-animation:1s cubic-bezier(.09,.57,.49,.9) infinite ball-clip-rotate-pulse-rotate;animation:1s cubic-bezier(.09,.57,.49,.9) infinite ball-clip-rotate-pulse-rotate}.la-ball-clip-rotate-pulse>div:last-child{width:16px;height:16px;-webkit-animation:1s cubic-bezier(.09,.57,.49,.9) infinite ball-clip-rotate-pulse-scale;animation:1s cubic-bezier(.09,.57,.49,.9) infinite ball-clip-rotate-pulse-scale}.la-ball-clip-rotate-pulse.la-sm{width:16px;height:16px}.la-ball-clip-rotate-pulse.la-sm>div:first-child{width:16px;height:16px;border-width:1px}.la-ball-clip-rotate-pulse.la-sm>div:last-child{width:8px;height:8px}.la-ball-clip-rotate-pulse.la-2x{width:64px;height:64px}.la-ball-clip-rotate-pulse.la-2x>div:first-child{width:64px;height:64px;border-width:4px}.la-ball-clip-rotate-pulse.la-2x>div:last-child{width:32px;height:32px}.la-ball-clip-rotate-pulse.la-3x{width:96px;height:96px}.la-ball-clip-rotate-pulse.la-3x>div:first-child{width:96px;height:96px;border-width:6px}.la-ball-clip-rotate-pulse.la-3x>div:last-child{width:48px;height:48px}@-webkit-keyframes ball-clip-rotate-pulse-rotate{0%{-webkit-transform:translate(-50%,-50%) rotate(0);transform:translate(-50%,-50%) rotate(0)}50%{-webkit-transform:translate(-50%,-50%) rotate(180deg);transform:translate(-50%,-50%) rotate(180deg)}100%{-webkit-transform:translate(-50%,-50%) rotate(360deg);transform:translate(-50%,-50%) rotate(360deg)}}@keyframes ball-clip-rotate-pulse-rotate{0%{-webkit-transform:translate(-50%,-50%) rotate(0);transform:translate(-50%,-50%) rotate(0)}50%{-webkit-transform:translate(-50%,-50%) rotate(180deg);transform:translate(-50%,-50%) rotate(180deg)}100%{-webkit-transform:translate(-50%,-50%) rotate(360deg);transform:translate(-50%,-50%) rotate(360deg)}}@-webkit-keyframes ball-clip-rotate-pulse-scale{0%,100%{opacity:1;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}30%{opacity:.3;-webkit-transform:translate(-50%,-50%) scale(.15);transform:translate(-50%,-50%) scale(.15)}}@keyframes ball-clip-rotate-pulse-scale{0%,100%{opacity:1;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1)}30%{opacity:.3;-webkit-transform:translate(-50%,-50%) scale(.15);transform:translate(-50%,-50%) scale(.15)}}.la-ball-clip-rotate,.la-ball-clip-rotate>div{position:relative;box-sizing:border-box}.la-ball-clip-rotate{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-clip-rotate.la-dark{color:#333}.la-ball-clip-rotate>div{display:inline-block;float:none;border:2px solid currentColor;width:32px;height:32px;background:0 0;border-bottom-color:transparent;border-radius:100%;-webkit-animation:.75s linear infinite ball-clip-rotate;animation:.75s linear infinite ball-clip-rotate}.la-ball-clip-rotate.la-sm{width:16px;height:16px}.la-ball-clip-rotate.la-sm>div{width:16px;height:16px;border-width:1px}.la-ball-clip-rotate.la-2x{width:64px;height:64px}.la-ball-clip-rotate.la-2x>div{width:64px;height:64px;border-width:4px}.la-ball-clip-rotate.la-3x{width:96px;height:96px}.la-ball-clip-rotate.la-3x>div{width:96px;height:96px;border-width:6px}@-webkit-keyframes ball-clip-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes ball-clip-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.la-ball-elastic-dots,.la-ball-elastic-dots>div{position:relative;box-sizing:border-box}.la-ball-elastic-dots{display:block;color:#fff;width:120px;height:10px;font-size:0;text-align:center}.la-ball-elastic-dots.la-dark{color:#333}.la-ball-elastic-dots>div{float:none;background-color:currentColor;border:0 solid currentColor;display:inline-block;width:10px;height:10px;white-space:nowrap;border-radius:100%;-webkit-animation:1s infinite ball-elastic-dots-anim;animation:1s infinite ball-elastic-dots-anim}.la-ball-elastic-dots.la-sm{width:60px;height:4px}.la-ball-elastic-dots.la-sm>div{width:4px;height:4px}.la-ball-elastic-dots.la-2x{width:240px;height:20px}.la-ball-elastic-dots.la-2x>div{width:20px;height:20px}.la-ball-elastic-dots.la-3x{width:360px;height:30px}.la-ball-elastic-dots.la-3x>div{width:30px;height:30px}@-webkit-keyframes ball-elastic-dots-anim{0%,100%{margin:0;-webkit-transform:scale(1);transform:scale(1)}50%{margin:0 5%;-webkit-transform:scale(.65);transform:scale(.65)}}@keyframes ball-elastic-dots-anim{0%,100%{margin:0;-webkit-transform:scale(1);transform:scale(1)}50%{margin:0 5%;-webkit-transform:scale(.65);transform:scale(.65)}}.la-ball-fall,.la-ball-fall>div{position:relative;box-sizing:border-box}.la-ball-fall{display:block;font-size:0;color:#fff;width:54px;height:18px}.la-ball-fall.la-dark{color:#333}.la-ball-fall>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10px;height:10px;margin:4px;border-radius:100%;opacity:0;-webkit-animation:1s ease-in-out infinite ball-fall;animation:1s ease-in-out infinite ball-fall}.la-ball-fall>div:nth-child(1){-webkit-animation-delay:-.2s;animation-delay:-.2s}.la-ball-fall>div:nth-child(2){-webkit-animation-delay:-.1s;animation-delay:-.1s}.la-ball-fall>div:nth-child(3){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-fall.la-sm{width:26px;height:8px}.la-ball-fall.la-sm>div{width:4px;height:4px;margin:2px}.la-ball-fall.la-2x{width:108px;height:36px}.la-ball-fall.la-2x>div{width:20px;height:20px;margin:8px}.la-ball-fall.la-3x{width:162px;height:54px}.la-ball-fall.la-3x>div{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-fall{0%{opacity:0;-webkit-transform:translateY(-145%);transform:translateY(-145%)}10%,90%{opacity:.5}20%,80%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(145%);transform:translateY(145%)}}@keyframes ball-fall{0%{opacity:0;-webkit-transform:translateY(-145%);transform:translateY(-145%)}10%,90%{opacity:.5}20%,80%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(145%);transform:translateY(145%)}}.la-ball-fussion,.la-ball-fussion>div{position:relative;box-sizing:border-box}.la-ball-fussion{display:block;font-size:0;color:#fff;width:8px;height:8px}.la-ball-fussion.la-dark{color:#333}.la-ball-fussion>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;width:12px;height:12px;border-radius:100%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-animation:1s infinite ball-fussion-ball1;animation:1s infinite ball-fussion-ball1}.la-ball-fussion>div:nth-child(1){top:0;left:50%;z-index:1}.la-ball-fussion>div:nth-child(2){top:50%;left:100%;z-index:2;-webkit-animation-name:ball-fussion-ball2;animation-name:ball-fussion-ball2}.la-ball-fussion>div:nth-child(3){top:100%;left:50%;z-index:1;-webkit-animation-name:ball-fussion-ball3;animation-name:ball-fussion-ball3}.la-ball-fussion>div:nth-child(4){top:50%;left:0;z-index:2;-webkit-animation-name:ball-fussion-ball4;animation-name:ball-fussion-ball4}.la-ball-fussion.la-sm{width:4px;height:4px}.la-ball-fussion.la-sm>div{width:6px;height:6px}.la-ball-fussion.la-2x{width:16px;height:16px}.la-ball-fussion.la-2x>div,.la-ball-fussion.la-3x{width:24px;height:24px}.la-ball-fussion.la-3x>div{width:36px;height:36px}@-webkit-keyframes ball-fussion-ball1{0%{opacity:.35}50%{top:-100%;left:200%;opacity:1}100%{top:50%;left:100%;z-index:2;opacity:.35}}@keyframes ball-fussion-ball1{0%{opacity:.35}50%{top:-100%;left:200%;opacity:1}100%{top:50%;left:100%;z-index:2;opacity:.35}}@-webkit-keyframes ball-fussion-ball2{0%{opacity:.35}50%{top:200%;left:200%;opacity:1}100%{top:100%;left:50%;z-index:1;opacity:.35}}@keyframes ball-fussion-ball2{0%{opacity:.35}50%{top:200%;left:200%;opacity:1}100%{top:100%;left:50%;z-index:1;opacity:.35}}@-webkit-keyframes ball-fussion-ball3{0%{opacity:.35}50%{top:200%;left:-100%;opacity:1}100%{top:50%;left:0;z-index:2;opacity:.35}}@keyframes ball-fussion-ball3{0%{opacity:.35}50%{top:200%;left:-100%;opacity:1}100%{top:50%;left:0;z-index:2;opacity:.35}}@-webkit-keyframes ball-fussion-ball4{0%{opacity:.35}50%{top:-100%;left:-100%;opacity:1}100%{top:0;left:50%;z-index:1;opacity:.35}}@keyframes ball-fussion-ball4{0%{opacity:.35}50%{top:-100%;left:-100%;opacity:1}100%{top:0;left:50%;z-index:1;opacity:.35}}.la-ball-grid-beat,.la-ball-grid-beat>div{position:relative;box-sizing:border-box}.la-ball-grid-beat{display:block;font-size:0;color:#fff;width:36px;height:36px}.la-ball-grid-beat.la-dark{color:#333}.la-ball-grid-beat>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:8px;height:8px;margin:2px;border-radius:100%;-webkit-animation-name:ball-grid-beat;animation-name:ball-grid-beat;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.la-ball-grid-beat>div:nth-child(1){-webkit-animation-duration:.65s;animation-duration:.65s;-webkit-animation-delay:.03s;animation-delay:.03s}.la-ball-grid-beat>div:nth-child(2){-webkit-animation-duration:1.02s;animation-duration:1.02s;-webkit-animation-delay:.09s;animation-delay:.09s}.la-ball-grid-beat>div:nth-child(3){-webkit-animation-duration:1.06s;animation-duration:1.06s;-webkit-animation-delay:-.69s;animation-delay:-.69s}.la-ball-grid-beat>div:nth-child(4){-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-delay:-.41s;animation-delay:-.41s}.la-ball-grid-beat>div:nth-child(5){-webkit-animation-duration:1.6s;animation-duration:1.6s;-webkit-animation-delay:.04s;animation-delay:.04s}.la-ball-grid-beat>div:nth-child(6){-webkit-animation-duration:.84s;animation-duration:.84s;-webkit-animation-delay:.07s;animation-delay:.07s}.la-ball-grid-beat>div:nth-child(7){-webkit-animation-duration:.68s;animation-duration:.68s;-webkit-animation-delay:-.66s;animation-delay:-.66s}.la-ball-grid-beat>div:nth-child(8){-webkit-animation-duration:.93s;animation-duration:.93s;-webkit-animation-delay:-.76s;animation-delay:-.76s}.la-ball-grid-beat>div:nth-child(9){-webkit-animation-duration:1.24s;animation-duration:1.24s;-webkit-animation-delay:-.76s;animation-delay:-.76s}.la-ball-grid-beat.la-sm{width:18px;height:18px}.la-ball-grid-beat.la-sm>div{width:4px;height:4px;margin:1px}.la-ball-grid-beat.la-2x{width:72px;height:72px}.la-ball-grid-beat.la-2x>div{width:16px;height:16px;margin:4px}.la-ball-grid-beat.la-3x{width:108px;height:108px}.la-ball-grid-beat.la-3x>div{width:24px;height:24px;margin:6px}@-webkit-keyframes ball-grid-beat{0%,100%{opacity:1}50%{opacity:.35}}@keyframes ball-grid-beat{0%,100%{opacity:1}50%{opacity:.35}}.la-ball-grid-pulse,.la-ball-grid-pulse>div{position:relative;box-sizing:border-box}.la-ball-grid-pulse{display:block;font-size:0;color:#fff;width:36px;height:36px}.la-ball-grid-pulse.la-dark{color:#333}.la-ball-grid-pulse>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:8px;height:8px;margin:2px;border-radius:100%;-webkit-animation-name:ball-grid-pulse;animation-name:ball-grid-pulse;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.la-ball-grid-pulse>div:nth-child(1){-webkit-animation-duration:.65s;animation-duration:.65s;-webkit-animation-delay:.03s;animation-delay:.03s}.la-ball-grid-pulse>div:nth-child(2){-webkit-animation-duration:1.02s;animation-duration:1.02s;-webkit-animation-delay:.09s;animation-delay:.09s}.la-ball-grid-pulse>div:nth-child(3){-webkit-animation-duration:1.06s;animation-duration:1.06s;-webkit-animation-delay:-.69s;animation-delay:-.69s}.la-ball-grid-pulse>div:nth-child(4){-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-delay:-.41s;animation-delay:-.41s}.la-ball-grid-pulse>div:nth-child(5){-webkit-animation-duration:1.6s;animation-duration:1.6s;-webkit-animation-delay:.04s;animation-delay:.04s}.la-ball-grid-pulse>div:nth-child(6){-webkit-animation-duration:.84s;animation-duration:.84s;-webkit-animation-delay:.07s;animation-delay:.07s}.la-ball-grid-pulse>div:nth-child(7){-webkit-animation-duration:.68s;animation-duration:.68s;-webkit-animation-delay:-.66s;animation-delay:-.66s}.la-ball-grid-pulse>div:nth-child(8){-webkit-animation-duration:.93s;animation-duration:.93s;-webkit-animation-delay:-.76s;animation-delay:-.76s}.la-ball-grid-pulse>div:nth-child(9){-webkit-animation-duration:1.24s;animation-duration:1.24s;-webkit-animation-delay:-.76s;animation-delay:-.76s}.la-ball-grid-pulse.la-sm{width:18px;height:18px}.la-ball-grid-pulse.la-sm>div{width:4px;height:4px;margin:1px}.la-ball-grid-pulse.la-2x{width:72px;height:72px}.la-ball-grid-pulse.la-2x>div{width:16px;height:16px;margin:4px}.la-ball-grid-pulse.la-3x{width:108px;height:108px}.la-ball-grid-pulse.la-3x>div{width:24px;height:24px;margin:6px}@-webkit-keyframes ball-grid-pulse{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.35;-webkit-transform:scale(.45);transform:scale(.45)}}@keyframes ball-grid-pulse{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.35;-webkit-transform:scale(.45);transform:scale(.45)}}.la-ball-newton-cradle,.la-ball-newton-cradle>div{position:relative;box-sizing:border-box}.la-ball-newton-cradle{display:block;font-size:0;color:#fff;width:40px;height:10px}.la-ball-newton-cradle.la-dark{color:#333}.la-ball-newton-cradle>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10px;height:10px;border-radius:100%}.la-ball-newton-cradle>div:first-child{-webkit-transform:translateX(0);transform:translateX(0);-webkit-animation:1s ease-out infinite ball-newton-cradle-left;animation:1s ease-out infinite ball-newton-cradle-left}.la-ball-newton-cradle>div:last-child{-webkit-transform:translateX(0);transform:translateX(0);-webkit-animation:1s ease-out infinite ball-newton-cradle-right;animation:1s ease-out infinite ball-newton-cradle-right}.la-ball-newton-cradle.la-sm{width:20px;height:4px}.la-ball-newton-cradle.la-sm>div{width:4px;height:4px}.la-ball-newton-cradle.la-2x{width:80px;height:20px}.la-ball-newton-cradle.la-2x>div{width:20px;height:20px}.la-ball-newton-cradle.la-3x{width:120px;height:30px}.la-ball-newton-cradle.la-3x>div{width:30px;height:30px}@-webkit-keyframes ball-newton-cradle-left{25%{-webkit-transform:translateX(-100%);transform:translateX(-100%);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes ball-newton-cradle-left{25%{-webkit-transform:translateX(-100%);transform:translateX(-100%);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes ball-newton-cradle-right{100%,50%{-webkit-transform:translateX(0);transform:translateX(0)}75%{-webkit-transform:translateX(100%);transform:translateX(100%);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}@keyframes ball-newton-cradle-right{100%,50%{-webkit-transform:translateX(0);transform:translateX(0)}75%{-webkit-transform:translateX(100%);transform:translateX(100%);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}.la-ball-pulse-rise,.la-ball-pulse-rise>div{position:relative;box-sizing:border-box}.la-ball-pulse-rise{display:block;font-size:0;color:#fff;width:70px;height:14px}.la-ball-pulse-rise.la-dark{color:#333}.la-ball-pulse-rise>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10px;height:10px;margin:2px;border-radius:100%;-webkit-animation:1s cubic-bezier(.15,.36,.9,.6) infinite ball-pulse-rise-even;animation:1s cubic-bezier(.15,.36,.9,.6) infinite ball-pulse-rise-even}.la-ball-pulse-rise>div:nth-child(2n-1){-webkit-animation-name:ball-pulse-rise-odd;animation-name:ball-pulse-rise-odd}.la-ball-pulse-rise.la-sm{width:34px;height:6px}.la-ball-pulse-rise.la-sm>div{width:4px;height:4px;margin:1px}.la-ball-pulse-rise.la-2x{width:140px;height:28px}.la-ball-pulse-rise.la-2x>div{width:20px;height:20px;margin:4px}.la-ball-pulse-rise.la-3x{width:210px;height:42px}.la-ball-pulse-rise.la-3x>div{width:30px;height:30px;margin:6px}@-webkit-keyframes ball-pulse-rise-even{0%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1)}25%{-webkit-transform:translateY(-200%);transform:translateY(-200%)}50%{opacity:.35;-webkit-transform:scale(.3);transform:scale(.3)}75%{-webkit-transform:translateY(200%);transform:translateY(200%)}100%{opacity:1;-webkit-transform:translateY(0);-webkit-transform:scale(1);transform:translateY(0);transform:scale(1)}}@keyframes ball-pulse-rise-even{0%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1)}25%{-webkit-transform:translateY(-200%);transform:translateY(-200%)}50%{opacity:.35;-webkit-transform:scale(.3);transform:scale(.3)}75%{-webkit-transform:translateY(200%);transform:translateY(200%)}100%{opacity:1;-webkit-transform:translateY(0);-webkit-transform:scale(1);transform:translateY(0);transform:scale(1)}}@-webkit-keyframes ball-pulse-rise-odd{0%{opacity:.35;-webkit-transform:scale(.4);transform:scale(.4)}25%{-webkit-transform:translateY(200%);transform:translateY(200%)}50%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1)}75%{-webkit-transform:translateY(-200%);transform:translateY(-200%)}100%{opacity:.35;-webkit-transform:translateY(0);-webkit-transform:scale(.75);transform:translateY(0);transform:scale(.75)}}@keyframes ball-pulse-rise-odd{0%{opacity:.35;-webkit-transform:scale(.4);transform:scale(.4)}25%{-webkit-transform:translateY(200%);transform:translateY(200%)}50%{opacity:1;-webkit-transform:scale(1.1);transform:scale(1.1)}75%{-webkit-transform:translateY(-200%);transform:translateY(-200%)}100%{opacity:.35;-webkit-transform:translateY(0);-webkit-transform:scale(.75);transform:translateY(0);transform:scale(.75)}}.la-ball-pulse-sync,.la-ball-pulse-sync>div{position:relative;box-sizing:border-box}.la-ball-pulse-sync{display:block;font-size:0;color:#fff;width:54px;height:18px}.la-ball-pulse-sync.la-dark{color:#333}.la-ball-pulse-sync>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10px;height:10px;margin:4px;border-radius:100%;-webkit-animation:.6s ease-in-out infinite ball-pulse-sync;animation:.6s ease-in-out infinite ball-pulse-sync}.la-ball-pulse-sync>div:nth-child(1){-webkit-animation-delay:-.14s;animation-delay:-.14s}.la-ball-pulse-sync>div:nth-child(2){-webkit-animation-delay:-.07s;animation-delay:-.07s}.la-ball-pulse-sync>div:nth-child(3){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-pulse-sync.la-sm{width:26px;height:8px}.la-ball-pulse-sync.la-sm>div{width:4px;height:4px;margin:2px}.la-ball-pulse-sync.la-2x{width:108px;height:36px}.la-ball-pulse-sync.la-2x>div{width:20px;height:20px;margin:8px}.la-ball-pulse-sync.la-3x{width:162px;height:54px}.la-ball-pulse-sync.la-3x>div{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-pulse-sync{33%{-webkit-transform:translateY(100%);transform:translateY(100%)}66%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes ball-pulse-sync{33%{-webkit-transform:translateY(100%);transform:translateY(100%)}66%{-webkit-transform:translateY(-100%);transform:translateY(-100%)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}.la-ball-pulse,.la-ball-pulse>div{position:relative;box-sizing:border-box}.la-ball-pulse{display:block;font-size:0;color:#fff;width:54px;height:18px}.la-ball-pulse.la-dark{color:#333}.la-ball-pulse>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10px;height:10px;margin:4px;border-radius:100%;-webkit-animation:1s infinite ball-pulse;animation:1s infinite ball-pulse}.la-ball-pulse>div:nth-child(1){-webkit-animation-delay:-.2s;animation-delay:-.2s}.la-ball-pulse>div:nth-child(2){-webkit-animation-delay:-.1s;animation-delay:-.1s}.la-ball-pulse>div:nth-child(3){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-pulse.la-sm{width:26px;height:8px}.la-ball-pulse.la-sm>div{width:4px;height:4px;margin:2px}.la-ball-pulse.la-2x{width:108px;height:36px}.la-ball-pulse.la-2x>div{width:20px;height:20px;margin:8px}.la-ball-pulse.la-3x{width:162px;height:54px}.la-ball-pulse.la-3x>div{width:30px;height:30px;margin:12px}@-webkit-keyframes ball-pulse{0%,100%,60%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}30%{opacity:.1;-webkit-transform:scale(.01);transform:scale(.01)}}@keyframes ball-pulse{0%,100%,60%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}30%{opacity:.1;-webkit-transform:scale(.01);transform:scale(.01)}}.la-ball-rotate,.la-ball-rotate>div{position:relative;box-sizing:border-box}.la-ball-rotate{display:block;font-size:0;color:#fff;width:10px;height:10px}.la-ball-rotate.la-dark{color:#333}.la-ball-rotate>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:10px;height:10px;border-radius:100%;-webkit-animation:1s cubic-bezier(.7,-.13,.22,.86) infinite ball-rotate-animation;animation:1s cubic-bezier(.7,-.13,.22,.86) infinite ball-rotate-animation}.la-ball-rotate>div:after,.la-ball-rotate>div:before{position:absolute;width:inherit;height:inherit;margin:inherit;content:\"\";background:currentColor;border-radius:inherit;opacity:.8}.la-ball-rotate>div:before{top:0;left:-150%}.la-ball-rotate>div:after{top:0;left:150%}.la-ball-rotate.la-sm,.la-ball-rotate.la-sm>div{width:4px;height:4px}.la-ball-rotate.la-2x,.la-ball-rotate.la-2x>div{width:20px;height:20px}.la-ball-rotate.la-3x,.la-ball-rotate.la-3x>div{width:30px;height:30px}@-webkit-keyframes ball-rotate-animation{0%{-webkit-transform:rotate(0);transform:rotate(0)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes ball-rotate-animation{0%{-webkit-transform:rotate(0);transform:rotate(0)}50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.la-ball-running-dots,.la-ball-running-dots>div{position:relative;box-sizing:border-box}.la-ball-running-dots{display:block;font-size:0;color:#fff;width:10px;height:10px}.la-ball-running-dots.la-dark{color:#333}.la-ball-running-dots>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;width:10px;height:10px;margin-left:-25px;border-radius:100%;-webkit-animation:2s linear infinite ball-running-dots-animate;animation:2s linear infinite ball-running-dots-animate}.la-ball-running-dots>div:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-running-dots>div:nth-child(2){-webkit-animation-delay:-.4s;animation-delay:-.4s}.la-ball-running-dots>div:nth-child(3){-webkit-animation-delay:-.8s;animation-delay:-.8s}.la-ball-running-dots>div:nth-child(4){-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.la-ball-running-dots>div:nth-child(5){-webkit-animation-delay:-1.6s;animation-delay:-1.6s}.la-ball-running-dots>div:nth-child(6){-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-running-dots>div:nth-child(7){-webkit-animation-delay:-2.4s;animation-delay:-2.4s}.la-ball-running-dots>div:nth-child(8){-webkit-animation-delay:-2.8s;animation-delay:-2.8s}.la-ball-running-dots>div:nth-child(9){-webkit-animation-delay:-3.2s;animation-delay:-3.2s}.la-ball-running-dots>div:nth-child(10){-webkit-animation-delay:-3.6s;animation-delay:-3.6s}.la-ball-running-dots.la-sm{width:4px;height:4px}.la-ball-running-dots.la-sm>div{width:4px;height:4px;margin-left:-12px}.la-ball-running-dots.la-2x{width:20px;height:20px}.la-ball-running-dots.la-2x>div{width:20px;height:20px;margin-left:-50px}.la-ball-running-dots.la-3x{width:30px;height:30px}.la-ball-running-dots.la-3x>div{width:30px;height:30px;margin-left:-75px}@-webkit-keyframes ball-running-dots-animate{0%,100%{width:100%;height:100%;-webkit-transform:translateY(0) translateX(500%);transform:translateY(0) translateX(500%)}80%{-webkit-transform:translateY(0) translateX(0);transform:translateY(0) translateX(0)}85%{width:100%;height:100%;-webkit-transform:translateY(-125%) translateX(0);transform:translateY(-125%) translateX(0)}90%{width:200%;height:75%}95%{width:100%;height:100%;-webkit-transform:translateY(-100%) translateX(500%);transform:translateY(-100%) translateX(500%)}}@keyframes ball-running-dots-animate{0%,100%{width:100%;height:100%;-webkit-transform:translateY(0) translateX(500%);transform:translateY(0) translateX(500%)}80%{-webkit-transform:translateY(0) translateX(0);transform:translateY(0) translateX(0)}85%{width:100%;height:100%;-webkit-transform:translateY(-125%) translateX(0);transform:translateY(-125%) translateX(0)}90%{width:200%;height:75%}95%{width:100%;height:100%;-webkit-transform:translateY(-100%) translateX(500%);transform:translateY(-100%) translateX(500%)}}.la-ball-scale-multiple,.la-ball-scale-multiple>div{position:relative;box-sizing:border-box}.la-ball-scale-multiple{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-scale-multiple.la-dark{color:#333}.la-ball-scale-multiple>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:0;left:0;width:32px;height:32px;border-radius:100%;opacity:0;-webkit-animation:1s linear infinite ball-scale-multiple;animation:1s linear infinite ball-scale-multiple}.la-ball-scale-multiple>div:nth-child(2){-webkit-animation-delay:.2s;animation-delay:.2s}.la-ball-scale-multiple>div:nth-child(3){-webkit-animation-delay:.4s;animation-delay:.4s}.la-ball-scale-multiple.la-sm,.la-ball-scale-multiple.la-sm>div{width:16px;height:16px}.la-ball-scale-multiple.la-2x,.la-ball-scale-multiple.la-2x>div{width:64px;height:64px}.la-ball-scale-multiple.la-3x,.la-ball-scale-multiple.la-3x>div{width:96px;height:96px}@-webkit-keyframes ball-scale-multiple{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}5%{opacity:.75}100%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-scale-multiple{0%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}5%{opacity:.75}100%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}}.la-ball-scale-pulse,.la-ball-scale-pulse>div{position:relative;box-sizing:border-box}.la-ball-scale-pulse{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-scale-pulse.la-dark{color:#333}.la-ball-scale-pulse>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:0;left:0;width:32px;height:32px;border-radius:100%;opacity:.5;-webkit-animation:2s ease-in-out infinite ball-scale-pulse;animation:2s ease-in-out infinite ball-scale-pulse}.la-ball-scale-pulse>div:last-child{-webkit-animation-delay:-1s;animation-delay:-1s}.la-ball-scale-pulse.la-sm,.la-ball-scale-pulse.la-sm>div{width:16px;height:16px}.la-ball-scale-pulse.la-2x,.la-ball-scale-pulse.la-2x>div{width:64px;height:64px}.la-ball-scale-pulse.la-3x,.la-ball-scale-pulse.la-3x>div{width:96px;height:96px}@-webkit-keyframes ball-scale-pulse{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-scale-pulse{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}.la-ball-scale-ripple-multiple,.la-ball-scale-ripple-multiple>div{position:relative;box-sizing:border-box}.la-ball-scale-ripple-multiple{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-scale-ripple-multiple.la-dark{color:#333}.la-ball-scale-ripple-multiple>div{display:inline-block;float:none;border:2px solid currentColor;position:absolute;top:0;left:0;width:32px;height:32px;background:0 0;border-radius:100%;opacity:0;-webkit-animation:1.25s cubic-bezier(.21,.53,.56,.8) infinite ball-scale-ripple-multiple;animation:1.25s cubic-bezier(.21,.53,.56,.8) infinite ball-scale-ripple-multiple}.la-ball-scale-ripple-multiple>div:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.la-ball-scale-ripple-multiple>div:nth-child(2){-webkit-animation-delay:.25s;animation-delay:.25s}.la-ball-scale-ripple-multiple>div:nth-child(3){-webkit-animation-delay:.5s;animation-delay:.5s}.la-ball-scale-ripple-multiple.la-sm{width:16px;height:16px}.la-ball-scale-ripple-multiple.la-sm>div{width:16px;height:16px;border-width:1px}.la-ball-scale-ripple-multiple.la-2x{width:64px;height:64px}.la-ball-scale-ripple-multiple.la-2x>div{width:64px;height:64px;border-width:4px}.la-ball-scale-ripple-multiple.la-3x{width:96px;height:96px}.la-ball-scale-ripple-multiple.la-3x>div{width:96px;height:96px;border-width:6px}@-webkit-keyframes ball-scale-ripple-multiple{0%{opacity:1;-webkit-transform:scale(.1);transform:scale(.1)}70%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}95%{opacity:0}}@keyframes ball-scale-ripple-multiple{0%{opacity:1;-webkit-transform:scale(.1);transform:scale(.1)}70%{opacity:.5;-webkit-transform:scale(1);transform:scale(1)}95%{opacity:0}}.la-ball-scale-ripple,.la-ball-scale-ripple>div{position:relative;box-sizing:border-box}.la-ball-scale-ripple{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-scale-ripple.la-dark{color:#333}.la-ball-scale-ripple>div{display:inline-block;float:none;border:2px solid currentColor;width:32px;height:32px;background:0 0;border-radius:100%;opacity:0;-webkit-animation:1s cubic-bezier(.21,.53,.56,.8) infinite ball-scale-ripple;animation:1s cubic-bezier(.21,.53,.56,.8) infinite ball-scale-ripple}.la-ball-scale-ripple.la-sm{width:16px;height:16px}.la-ball-scale-ripple.la-sm>div{width:16px;height:16px;border-width:1px}.la-ball-scale-ripple.la-2x{width:64px;height:64px}.la-ball-scale-ripple.la-2x>div{width:64px;height:64px;border-width:4px}.la-ball-scale-ripple.la-3x{width:96px;height:96px}.la-ball-scale-ripple.la-3x>div{width:96px;height:96px;border-width:6px}@-webkit-keyframes ball-scale-ripple{0%{opacity:1;-webkit-transform:scale(.1);transform:scale(.1)}70%{opacity:.65;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0}}@keyframes ball-scale-ripple{0%{opacity:1;-webkit-transform:scale(.1);transform:scale(.1)}70%{opacity:.65;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0}}.la-ball-scale,.la-ball-scale>div{position:relative;box-sizing:border-box}.la-ball-scale{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-scale.la-dark{color:#333}.la-ball-scale>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:32px;height:32px;border-radius:100%;opacity:0;-webkit-animation:1s ease-in-out infinite ball-scale;animation:1s ease-in-out infinite ball-scale}.la-ball-scale.la-sm,.la-ball-scale.la-sm>div{width:16px;height:16px}.la-ball-scale.la-2x,.la-ball-scale.la-2x>div{width:64px;height:64px}.la-ball-scale.la-3x,.la-ball-scale.la-3x>div{width:96px;height:96px}@-webkit-keyframes ball-scale{0%{opacity:1;-webkit-transform:scale(0);transform:scale(0)}100%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-scale{0%{opacity:1;-webkit-transform:scale(0);transform:scale(0)}100%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}}.la-ball-spin-clockwise-fade-rotating,.la-ball-spin-clockwise-fade-rotating>div{position:relative;box-sizing:border-box}.la-ball-spin-clockwise-fade-rotating{display:block;font-size:0;color:#fff;width:32px;height:32px;-webkit-animation:6s linear infinite ball-spin-clockwise-fade-rotating-rotate;animation:6s linear infinite ball-spin-clockwise-fade-rotating-rotate}.la-ball-spin-clockwise-fade-rotating.la-dark{color:#333}.la-ball-spin-clockwise-fade-rotating>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:1s linear infinite ball-spin-clockwise-fade-rotating;animation:1s linear infinite ball-spin-clockwise-fade-rotating}.la-ball-spin-clockwise-fade-rotating>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-spin-clockwise-fade-rotating>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}.la-ball-spin-clockwise-fade-rotating.la-sm{width:16px;height:16px}.la-ball-spin-clockwise-fade-rotating.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-clockwise-fade-rotating.la-2x{width:64px;height:64px}.la-ball-spin-clockwise-fade-rotating.la-2x>div{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-clockwise-fade-rotating.la-3x{width:96px;height:96px}.la-ball-spin-clockwise-fade-rotating.la-3x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-clockwise-fade-rotating-rotate{100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@keyframes ball-spin-clockwise-fade-rotating-rotate{100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@-webkit-keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-spin-clockwise-fade-rotating{50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.la-ball-spin-clockwise-fade,.la-ball-spin-clockwise-fade>div{position:relative;box-sizing:border-box}.la-ball-spin-clockwise-fade{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-spin-clockwise-fade.la-dark{color:#333}.la-ball-spin-clockwise-fade>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:1s linear infinite ball-spin-clockwise-fade;animation:1s linear infinite ball-spin-clockwise-fade}.la-ball-spin-clockwise-fade>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-spin-clockwise-fade>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-spin-clockwise-fade>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-spin-clockwise-fade>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-spin-clockwise-fade>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-spin-clockwise-fade>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-spin-clockwise-fade>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-spin-clockwise-fade>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}.la-ball-spin-clockwise-fade.la-sm{width:16px;height:16px}.la-ball-spin-clockwise-fade.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-clockwise-fade.la-2x{width:64px;height:64px}.la-ball-spin-clockwise-fade.la-2x>div{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-clockwise-fade.la-3x{width:96px;height:96px}.la-ball-spin-clockwise-fade.la-3x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-clockwise-fade{50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-spin-clockwise-fade{50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.la-ball-spin-clockwise,.la-ball-spin-clockwise>div{position:relative;box-sizing:border-box}.la-ball-spin-clockwise{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-spin-clockwise.la-dark{color:#333}.la-ball-spin-clockwise>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:1s ease-in-out infinite ball-spin-clockwise;animation:1s ease-in-out infinite ball-spin-clockwise}.la-ball-spin-clockwise>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-spin-clockwise>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-spin-clockwise>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-spin-clockwise>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-spin-clockwise>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-spin-clockwise>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-spin-clockwise>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-spin-clockwise>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:0s;animation-delay:0s}.la-ball-spin-clockwise.la-sm{width:16px;height:16px}.la-ball-spin-clockwise.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-clockwise.la-2x{width:64px;height:64px}.la-ball-spin-clockwise.la-2x>div{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-clockwise.la-3x{width:96px;height:96px}.la-ball-spin-clockwise.la-3x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-clockwise{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:1}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes ball-spin-clockwise{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:1}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}.la-ball-spin-fade-rotating,.la-ball-spin-fade-rotating>div{position:relative;box-sizing:border-box}.la-ball-spin-fade-rotating{display:block;font-size:0;color:#fff;width:32px;height:32px;-webkit-animation:6s linear infinite ball-spin-fade-rotate;animation:6s linear infinite ball-spin-fade-rotate}.la-ball-spin-fade-rotating.la-dark{color:#333}.la-ball-spin-fade-rotating>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:1s linear infinite ball-spin-fade;animation:1s linear infinite ball-spin-fade}.la-ball-spin-fade-rotating>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-ball-spin-fade-rotating>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-ball-spin-fade-rotating>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-ball-spin-fade-rotating>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-ball-spin-fade-rotating>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-ball-spin-fade-rotating>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-ball-spin-fade-rotating>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-ball-spin-fade-rotating>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-spin-fade-rotating.la-sm{width:16px;height:16px}.la-ball-spin-fade-rotating.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-fade-rotating.la-2x{width:64px;height:64px}.la-ball-spin-fade-rotating.la-2x>div{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-fade-rotating.la-3x{width:96px;height:96px}.la-ball-spin-fade-rotating.la-3x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-fade-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes ball-spin-fade-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.la-ball-spin-fade,.la-ball-spin-fade>div{position:relative;box-sizing:border-box}.la-ball-spin-fade{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-spin-fade.la-dark{color:#333}.la-ball-spin-fade>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:1s linear infinite ball-spin-fade;animation:1s linear infinite ball-spin-fade}.la-ball-spin-fade>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-ball-spin-fade>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-ball-spin-fade>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-ball-spin-fade>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-ball-spin-fade>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-ball-spin-fade>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-ball-spin-fade>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-ball-spin-fade>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-spin-fade.la-sm{width:16px;height:16px}.la-ball-spin-fade.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin-fade.la-2x{width:64px;height:64px}.la-ball-spin-fade.la-2x>div{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin-fade.la-3x{width:96px;height:96px}.la-ball-spin-fade.la-3x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin-fade{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}}@keyframes ball-spin-fade{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.25;-webkit-transform:scale(.5);transform:scale(.5)}}.la-ball-spin-rotate,.la-ball-spin-rotate>div{position:relative;box-sizing:border-box}.la-ball-spin-rotate{display:block;font-size:0;color:#fff;width:32px;height:32px;-webkit-animation:2s linear infinite ball-spin-rotate;animation:2s linear infinite ball-spin-rotate}.la-ball-spin-rotate.la-dark{color:#333}.la-ball-spin-rotate>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:0;width:60%;height:60%;border-radius:100%;-webkit-animation:2s ease-in-out infinite ball-spin-bounce;animation:2s ease-in-out infinite ball-spin-bounce}.la-ball-spin-rotate>div:last-child{top:auto;bottom:0;-webkit-animation-delay:-1s;animation-delay:-1s}.la-ball-spin-rotate.la-sm{width:16px;height:16px}.la-ball-spin-rotate.la-2x{width:64px;height:64px}.la-ball-spin-rotate.la-3x{width:96px;height:96px}@-webkit-keyframes ball-spin-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes ball-spin-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes ball-spin-bounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-spin-bounce{0%,100%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1);transform:scale(1)}}.la-ball-spin,.la-ball-spin>div{position:relative;box-sizing:border-box}.la-ball-spin{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-spin.la-dark{color:#333}.la-ball-spin>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:8px;height:8px;margin-top:-4px;margin-left:-4px;border-radius:100%;-webkit-animation:1s ease-in-out infinite ball-spin;animation:1s ease-in-out infinite ball-spin}.la-ball-spin>div:nth-child(1){top:5%;left:50%;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-ball-spin>div:nth-child(2){top:18.1801948466%;left:81.8198051534%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-ball-spin>div:nth-child(3){top:50%;left:95%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-ball-spin>div:nth-child(4){top:81.8198051534%;left:81.8198051534%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-ball-spin>div:nth-child(5){top:94.9999999966%;left:50.0000000005%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-ball-spin>div:nth-child(6){top:81.8198046966%;left:18.1801949248%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-ball-spin>div:nth-child(7){top:49.9999750815%;left:5.0000051215%;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-ball-spin>div:nth-child(8){top:18.179464974%;left:18.1803700518%;-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-spin.la-sm{width:16px;height:16px}.la-ball-spin.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-spin.la-2x{width:64px;height:64px}.la-ball-spin.la-2x>div{width:16px;height:16px;margin-top:-8px;margin-left:-8px}.la-ball-spin.la-3x{width:96px;height:96px}.la-ball-spin.la-3x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}@-webkit-keyframes ball-spin{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:1}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes ball-spin{0%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}20%{opacity:1}80%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}.la-ball-square-clockwise-spin,.la-ball-square-clockwise-spin>div{position:relative;box-sizing:border-box}.la-ball-square-clockwise-spin{display:block;font-size:0;color:#fff;width:26px;height:26px}.la-ball-square-clockwise-spin.la-dark{color:#333}.la-ball-square-clockwise-spin>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:12px;height:12px;margin-top:-6px;margin-left:-6px;border-radius:100%;-webkit-animation:1s ease-in-out infinite ball-square-clockwise-spin;animation:1s ease-in-out infinite ball-square-clockwise-spin}.la-ball-square-clockwise-spin>div:nth-child(1){top:0;left:0;-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-ball-square-clockwise-spin>div:nth-child(2){top:0;left:50%;-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-ball-square-clockwise-spin>div:nth-child(3){top:0;left:100%;-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-ball-square-clockwise-spin>div:nth-child(4){top:50%;left:100%;-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-ball-square-clockwise-spin>div:nth-child(5){top:100%;left:100%;-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-ball-square-clockwise-spin>div:nth-child(6){top:100%;left:50%;-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-ball-square-clockwise-spin>div:nth-child(7){top:100%;left:0;-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-ball-square-clockwise-spin>div:nth-child(8){top:50%;left:0;-webkit-animation-delay:0s;animation-delay:0s}.la-ball-square-clockwise-spin.la-sm{width:12px;height:12px}.la-ball-square-clockwise-spin.la-sm>div{width:6px;height:6px;margin-top:-3px;margin-left:-3px}.la-ball-square-clockwise-spin.la-2x{width:52px;height:52px}.la-ball-square-clockwise-spin.la-2x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}.la-ball-square-clockwise-spin.la-3x{width:78px;height:78px}.la-ball-square-clockwise-spin.la-3x>div{width:36px;height:36px;margin-top:-18px;margin-left:-18px}@-webkit-keyframes ball-square-clockwise-spin{0%,100%,40%{-webkit-transform:scale(.4);transform:scale(.4)}70%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-square-clockwise-spin{0%,100%,40%{-webkit-transform:scale(.4);transform:scale(.4)}70%{-webkit-transform:scale(1);transform:scale(1)}}.la-ball-square-spin,.la-ball-square-spin>div{position:relative;box-sizing:border-box}.la-ball-square-spin{display:block;font-size:0;color:#fff;width:26px;height:26px}.la-ball-square-spin.la-dark{color:#333}.la-ball-square-spin>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:12px;height:12px;margin-top:-6px;margin-left:-6px;border-radius:100%;-webkit-animation:1s ease-in-out infinite ball-square-spin;animation:1s ease-in-out infinite ball-square-spin}.la-ball-square-spin>div:nth-child(1){top:0;left:0;-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-ball-square-spin>div:nth-child(2){top:0;left:50%;-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-ball-square-spin>div:nth-child(3){top:0;left:100%;-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-ball-square-spin>div:nth-child(4){top:50%;left:100%;-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-ball-square-spin>div:nth-child(5){top:100%;left:100%;-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-ball-square-spin>div:nth-child(6){top:100%;left:50%;-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-ball-square-spin>div:nth-child(7){top:100%;left:0;-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-ball-square-spin>div:nth-child(8){top:50%;left:0;-webkit-animation-delay:-2s;animation-delay:-2s}.la-ball-square-spin.la-sm{width:12px;height:12px}.la-ball-square-spin.la-sm>div{width:6px;height:6px;margin-top:-3px;margin-left:-3px}.la-ball-square-spin.la-2x{width:52px;height:52px}.la-ball-square-spin.la-2x>div{width:24px;height:24px;margin-top:-12px;margin-left:-12px}.la-ball-square-spin.la-3x{width:78px;height:78px}.la-ball-square-spin.la-3x>div{width:36px;height:36px;margin-top:-18px;margin-left:-18px}@-webkit-keyframes ball-square-spin{0%,100%,40%{-webkit-transform:scale(.4);transform:scale(.4)}70%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes ball-square-spin{0%,100%,40%{-webkit-transform:scale(.4);transform:scale(.4)}70%{-webkit-transform:scale(1);transform:scale(1)}}.la-ball-triangle-path,.la-ball-triangle-path>div{position:relative;box-sizing:border-box}.la-ball-triangle-path{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-ball-triangle-path.la-dark{color:#333}.la-ball-triangle-path>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:0;left:0;width:10px;height:10px;border-radius:100%}.la-ball-triangle-path>div:nth-child(1){-webkit-animation:2s ease-in-out infinite ball-triangle-path-ball-one;animation:2s ease-in-out infinite ball-triangle-path-ball-one}.la-ball-triangle-path>div:nth-child(2){-webkit-animation:2s ease-in-out infinite ball-triangle-path-ball-two;animation:2s ease-in-out infinite ball-triangle-path-ball-two}.la-ball-triangle-path>div:nth-child(3){-webkit-animation:2s ease-in-out infinite ball-triangle-path-ball-tree;animation:2s ease-in-out infinite ball-triangle-path-ball-tree}.la-ball-triangle-path.la-sm{width:16px;height:16px}.la-ball-triangle-path.la-sm>div{width:4px;height:4px}.la-ball-triangle-path.la-2x{width:64px;height:64px}.la-ball-triangle-path.la-2x>div{width:20px;height:20px}.la-ball-triangle-path.la-3x{width:96px;height:96px}.la-ball-triangle-path.la-3x>div{width:30px;height:30px}@-webkit-keyframes ball-triangle-path-ball-one{0%{-webkit-transform:translate(0,220%);transform:translate(0,220%)}17%,50%,83%{opacity:.25}33%{opacity:1;-webkit-transform:translate(110%,0);transform:translate(110%,0)}66%{opacity:1;-webkit-transform:translate(220%,220%);transform:translate(220%,220%)}100%{opacity:1;-webkit-transform:translate(0,220%);transform:translate(0,220%)}}@keyframes ball-triangle-path-ball-one{0%{-webkit-transform:translate(0,220%);transform:translate(0,220%)}17%,50%,83%{opacity:.25}33%{opacity:1;-webkit-transform:translate(110%,0);transform:translate(110%,0)}66%{opacity:1;-webkit-transform:translate(220%,220%);transform:translate(220%,220%)}100%{opacity:1;-webkit-transform:translate(0,220%);transform:translate(0,220%)}}@-webkit-keyframes ball-triangle-path-ball-two{0%{-webkit-transform:translate(110%,0);transform:translate(110%,0)}17%,50%,83%{opacity:.25}33%{opacity:1;-webkit-transform:translate(220%,220%);transform:translate(220%,220%)}66%{opacity:1;-webkit-transform:translate(0,220%);transform:translate(0,220%)}100%{opacity:1;-webkit-transform:translate(110%,0);transform:translate(110%,0)}}@keyframes ball-triangle-path-ball-two{0%{-webkit-transform:translate(110%,0);transform:translate(110%,0)}17%,50%,83%{opacity:.25}33%{opacity:1;-webkit-transform:translate(220%,220%);transform:translate(220%,220%)}66%{opacity:1;-webkit-transform:translate(0,220%);transform:translate(0,220%)}100%{opacity:1;-webkit-transform:translate(110%,0);transform:translate(110%,0)}}@-webkit-keyframes ball-triangle-path-ball-tree{0%{-webkit-transform:translate(220%,220%);transform:translate(220%,220%)}17%,50%,83%{opacity:.25}33%{opacity:1;-webkit-transform:translate(0,220%);transform:translate(0,220%)}66%{opacity:1;-webkit-transform:translate(110%,0);transform:translate(110%,0)}100%{opacity:1;-webkit-transform:translate(220%,220%);transform:translate(220%,220%)}}@keyframes ball-triangle-path-ball-tree{0%{-webkit-transform:translate(220%,220%);transform:translate(220%,220%)}17%,50%,83%{opacity:.25}33%{opacity:1;-webkit-transform:translate(0,220%);transform:translate(0,220%)}66%{opacity:1;-webkit-transform:translate(110%,0);transform:translate(110%,0)}100%{opacity:1;-webkit-transform:translate(220%,220%);transform:translate(220%,220%)}}.la-ball-zig-zag-deflect,.la-ball-zig-zag-deflect>div{box-sizing:border-box}.la-ball-zig-zag-deflect{display:block;font-size:0;color:#fff;position:relative;width:32px;height:32px}.la-ball-zig-zag-deflect.la-dark{color:#333}.la-ball-zig-zag-deflect>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:10px;height:10px;margin-top:-5px;margin-left:-5px;border-radius:100%}.la-ball-zig-zag-deflect>div:first-child{-webkit-animation:1.5s linear infinite ball-zig-deflect;animation:1.5s linear infinite ball-zig-deflect}.la-ball-zig-zag-deflect>div:last-child{-webkit-animation:1.5s linear infinite ball-zag-deflect;animation:1.5s linear infinite ball-zag-deflect}.la-ball-zig-zag-deflect.la-sm{width:16px;height:16px}.la-ball-zig-zag-deflect.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-zig-zag-deflect.la-2x{width:64px;height:64px}.la-ball-zig-zag-deflect.la-2x>div{width:20px;height:20px;margin-top:-10px;margin-left:-10px}.la-ball-zig-zag-deflect.la-3x{width:96px;height:96px}.la-ball-zig-zag-deflect.la-3x>div{width:30px;height:30px;margin-top:-15px;margin-left:-15px}@-webkit-keyframes ball-zig-deflect{17%,84%{-webkit-transform:translate(-80%,-160%);transform:translate(-80%,-160%)}34%,67%{-webkit-transform:translate(80%,-160%);transform:translate(80%,-160%)}100%,50%{-webkit-transform:translate(0,0);transform:translate(0,0)}}@keyframes ball-zig-deflect{17%,84%{-webkit-transform:translate(-80%,-160%);transform:translate(-80%,-160%)}34%,67%{-webkit-transform:translate(80%,-160%);transform:translate(80%,-160%)}100%,50%{-webkit-transform:translate(0,0);transform:translate(0,0)}}@-webkit-keyframes ball-zag-deflect{17%,84%{-webkit-transform:translate(80%,160%);transform:translate(80%,160%)}34%,67%{-webkit-transform:translate(-80%,160%);transform:translate(-80%,160%)}100%,50%{-webkit-transform:translate(0,0);transform:translate(0,0)}}@keyframes ball-zag-deflect{17%,84%{-webkit-transform:translate(80%,160%);transform:translate(80%,160%)}34%,67%{-webkit-transform:translate(-80%,160%);transform:translate(-80%,160%)}100%,50%{-webkit-transform:translate(0,0);transform:translate(0,0)}}.la-ball-zig-zag,.la-ball-zig-zag>div{box-sizing:border-box}.la-ball-zig-zag{display:block;font-size:0;color:#fff;position:relative;width:32px;height:32px}.la-ball-zig-zag.la-dark{color:#333}.la-ball-zig-zag>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:50%;left:50%;width:10px;height:10px;margin-top:-5px;margin-left:-5px;border-radius:100%}.la-ball-zig-zag>div:first-child{-webkit-animation:.7s linear infinite ball-zig-effect;animation:.7s linear infinite ball-zig-effect}.la-ball-zig-zag>div:last-child{-webkit-animation:.7s linear infinite ball-zag-effect;animation:.7s linear infinite ball-zag-effect}.la-ball-zig-zag.la-sm{width:16px;height:16px}.la-ball-zig-zag.la-sm>div{width:4px;height:4px;margin-top:-2px;margin-left:-2px}.la-ball-zig-zag.la-2x{width:64px;height:64px}.la-ball-zig-zag.la-2x>div{width:20px;height:20px;margin-top:-10px;margin-left:-10px}.la-ball-zig-zag.la-3x{width:96px;height:96px}.la-ball-zig-zag.la-3x>div{width:30px;height:30px;margin-top:-15px;margin-left:-15px}@-webkit-keyframes ball-zig-effect{0%,100%{-webkit-transform:translate(0,0);transform:translate(0,0)}33%{-webkit-transform:translate(-75%,-150%);transform:translate(-75%,-150%)}66%{-webkit-transform:translate(75%,-150%);transform:translate(75%,-150%)}}@keyframes ball-zig-effect{0%,100%{-webkit-transform:translate(0,0);transform:translate(0,0)}33%{-webkit-transform:translate(-75%,-150%);transform:translate(-75%,-150%)}66%{-webkit-transform:translate(75%,-150%);transform:translate(75%,-150%)}}@-webkit-keyframes ball-zag-effect{0%,100%{-webkit-transform:translate(0,0);transform:translate(0,0)}33%{-webkit-transform:translate(75%,150%);transform:translate(75%,150%)}66%{-webkit-transform:translate(-75%,150%);transform:translate(-75%,150%)}}@keyframes ball-zag-effect{0%,100%{-webkit-transform:translate(0,0);transform:translate(0,0)}33%{-webkit-transform:translate(75%,150%);transform:translate(75%,150%)}66%{-webkit-transform:translate(-75%,150%);transform:translate(-75%,150%)}}.la-cog,.la-cog>div{position:relative;box-sizing:border-box}.la-cog{display:block;font-size:0;color:#fff;width:31px;height:31px}.la-cog.la-dark{color:#333}.la-cog>div{display:inline-block;float:none;border:2px dashed currentColor;width:100%;height:100%;background-color:transparent;border-radius:100%;-webkit-animation:4s linear infinite cog-rotate;animation:4s linear infinite cog-rotate}.la-cog>div:after{position:absolute;top:0;left:0;width:100%;height:100%;content:\"\";border:2px solid currentColor;border-radius:100%}.la-cog.la-sm{width:15px;height:15px}.la-cog.la-sm>div,.la-cog.la-sm>div:after{border-width:1px}.la-cog.la-2x{width:61px;height:61px}.la-cog.la-2x>div,.la-cog.la-2x>div:after{border-width:4px}.la-cog.la-3x{width:91px;height:91px}.la-cog.la-3x>div,.la-cog.la-3x>div:after{border-width:6px}@-webkit-keyframes cog-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes cog-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.la-cube-transition,.la-cube-transition>div{position:relative;box-sizing:border-box}.la-cube-transition{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-cube-transition.la-dark{color:#333}.la-cube-transition>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;top:0;left:0;width:14px;height:14px;margin-top:-7px;margin-left:-7px;border-radius:0;-webkit-animation:1.6s ease-in-out infinite cube-transition;animation:1.6s ease-in-out infinite cube-transition}.la-cube-transition>div:last-child{-webkit-animation-delay:-.8s;animation-delay:-.8s}.la-cube-transition.la-sm{width:16px;height:16px}.la-cube-transition.la-sm>div{width:6px;height:6px;margin-top:-3px;margin-left:-3px}.la-cube-transition.la-2x{width:64px;height:64px}.la-cube-transition.la-2x>div{width:28px;height:28px;margin-top:-14px;margin-left:-14px}.la-cube-transition.la-3x{width:96px;height:96px}.la-cube-transition.la-3x>div{width:42px;height:42px;margin-top:-21px;margin-left:-21px}@-webkit-keyframes cube-transition{25%{top:0;left:100%;-webkit-transform:scale(.5) rotate(-90deg);transform:scale(.5) rotate(-90deg)}50%{top:100%;left:100%;-webkit-transform:scale(1) rotate(-180deg);transform:scale(1) rotate(-180deg)}75%{top:100%;left:0;-webkit-transform:scale(.5) rotate(-270deg);transform:scale(.5) rotate(-270deg)}100%{top:0;left:0;-webkit-transform:scale(1) rotate(-360deg);transform:scale(1) rotate(-360deg)}}@keyframes cube-transition{25%{top:0;left:100%;-webkit-transform:scale(.5) rotate(-90deg);transform:scale(.5) rotate(-90deg)}50%{top:100%;left:100%;-webkit-transform:scale(1) rotate(-180deg);transform:scale(1) rotate(-180deg)}75%{top:100%;left:0;-webkit-transform:scale(.5) rotate(-270deg);transform:scale(.5) rotate(-270deg)}100%{top:0;left:0;-webkit-transform:scale(1) rotate(-360deg);transform:scale(1) rotate(-360deg)}}.la-fire,.la-fire>div{position:relative;box-sizing:border-box}.la-fire{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-fire.la-dark{color:#333}.la-fire>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;bottom:0;left:50%;width:12px;height:12px;border-radius:2px;-webkit-transform:translateY(0) translateX(-50%) rotate(45deg) scale(0);transform:translateY(0) translateX(-50%) rotate(45deg) scale(0);-webkit-animation:1.5s linear infinite fire-diamonds;animation:1.5s linear infinite fire-diamonds}.la-fire>div:nth-child(1){-webkit-animation-delay:-.85s;animation-delay:-.85s}.la-fire>div:nth-child(2){-webkit-animation-delay:-1.85s;animation-delay:-1.85s}.la-fire>div:nth-child(3){-webkit-animation-delay:-2.85s;animation-delay:-2.85s}.la-fire.la-sm{width:16px;height:16px}.la-fire.la-sm>div{width:6px;height:6px}.la-fire.la-2x{width:64px;height:64px}.la-fire.la-2x>div{width:24px;height:24px}.la-fire.la-3x{width:96px;height:96px}.la-fire.la-3x>div{width:36px;height:36px}@-webkit-keyframes fire-diamonds{0%{-webkit-transform:translateY(75%) translateX(-50%) rotate(45deg) scale(0);transform:translateY(75%) translateX(-50%) rotate(45deg) scale(0)}50%{-webkit-transform:translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1);transform:translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1)}100%{-webkit-transform:translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0);transform:translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0)}}@keyframes fire-diamonds{0%{-webkit-transform:translateY(75%) translateX(-50%) rotate(45deg) scale(0);transform:translateY(75%) translateX(-50%) rotate(45deg) scale(0)}50%{-webkit-transform:translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1);transform:translateY(-87.5%) translateX(-50%) rotate(45deg) scale(1)}100%{-webkit-transform:translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0);transform:translateY(-212.5%) translateX(-50%) rotate(45deg) scale(0)}}.la-line-scale-party,.la-line-scale-party>div{position:relative;box-sizing:border-box}.la-line-scale-party{display:block;font-size:0;color:#fff;width:40px;height:32px}.la-line-scale-party.la-dark{color:#333}.la-line-scale-party>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:4px;height:32px;margin:0 2px;border-radius:0;-webkit-animation-name:line-scale-party;animation-name:line-scale-party;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.la-line-scale-party>div:nth-child(1){-webkit-animation-duration:.43s;animation-duration:.43s;-webkit-animation-delay:-.23s;animation-delay:-.23s}.la-line-scale-party>div:nth-child(2){-webkit-animation-duration:.62s;animation-duration:.62s;-webkit-animation-delay:-.32s;animation-delay:-.32s}.la-line-scale-party>div:nth-child(3){-webkit-animation-duration:.43s;animation-duration:.43s;-webkit-animation-delay:-.44s;animation-delay:-.44s}.la-line-scale-party>div:nth-child(4){-webkit-animation-duration:.8s;animation-duration:.8s;-webkit-animation-delay:-.31s;animation-delay:-.31s}.la-line-scale-party>div:nth-child(5){-webkit-animation-duration:.74s;animation-duration:.74s;-webkit-animation-delay:-.24s;animation-delay:-.24s}.la-line-scale-party.la-sm{width:20px;height:16px}.la-line-scale-party.la-sm>div{width:2px;height:16px;margin:0 1px}.la-line-scale-party.la-2x{width:80px;height:64px}.la-line-scale-party.la-2x>div{width:8px;height:64px;margin:0 4px}.la-line-scale-party.la-3x{width:120px;height:96px}.la-line-scale-party.la-3x>div{width:12px;height:96px;margin:0 6px}@-webkit-keyframes line-scale-party{0%,100%{-webkit-transform:scaleY(1);transform:scaleY(1)}50%{-webkit-transform:scaleY(.3);transform:scaleY(.3)}}@keyframes line-scale-party{0%,100%{-webkit-transform:scaleY(1);transform:scaleY(1)}50%{-webkit-transform:scaleY(.3);transform:scaleY(.3)}}.la-line-scale-pulse-out-rapid,.la-line-scale-pulse-out-rapid>div{position:relative;box-sizing:border-box}.la-line-scale-pulse-out-rapid{display:block;font-size:0;color:#fff;width:40px;height:32px}.la-line-scale-pulse-out-rapid.la-dark{color:#333}.la-line-scale-pulse-out-rapid>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:4px;height:32px;margin:0 2px;border-radius:0;-webkit-animation:.9s cubic-bezier(.11,.49,.38,.78) infinite line-scale-pulse-out-rapid;animation:.9s cubic-bezier(.11,.49,.38,.78) infinite line-scale-pulse-out-rapid}.la-line-scale-pulse-out-rapid>div:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.la-line-scale-pulse-out-rapid>div:nth-child(2),.la-line-scale-pulse-out-rapid>div:nth-child(4){-webkit-animation-delay:-.65s;animation-delay:-.65s}.la-line-scale-pulse-out-rapid>div:nth-child(1),.la-line-scale-pulse-out-rapid>div:nth-child(5){-webkit-animation-delay:-.4s;animation-delay:-.4s}.la-line-scale-pulse-out-rapid.la-sm{width:20px;height:16px}.la-line-scale-pulse-out-rapid.la-sm>div{width:2px;height:16px;margin:0 1px}.la-line-scale-pulse-out-rapid.la-2x{width:80px;height:64px}.la-line-scale-pulse-out-rapid.la-2x>div{width:8px;height:64px;margin:0 4px}.la-line-scale-pulse-out-rapid.la-3x{width:120px;height:96px}.la-line-scale-pulse-out-rapid.la-3x>div{width:12px;height:96px;margin:0 6px}@-webkit-keyframes line-scale-pulse-out-rapid{0%,90%{-webkit-transform:scaley(1);transform:scaley(1)}80%{-webkit-transform:scaley(.3);transform:scaley(.3)}}@keyframes line-scale-pulse-out-rapid{0%,90%{-webkit-transform:scaley(1);transform:scaley(1)}80%{-webkit-transform:scaley(.3);transform:scaley(.3)}}.la-line-scale-pulse-out,.la-line-scale-pulse-out>div{position:relative;box-sizing:border-box}.la-line-scale-pulse-out{display:block;font-size:0;color:#fff;width:40px;height:32px}.la-line-scale-pulse-out.la-dark{color:#333}.la-line-scale-pulse-out>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:4px;height:32px;margin:0 2px;border-radius:0;-webkit-animation:.9s cubic-bezier(.85,.25,.37,.85) infinite line-scale-pulse-out;animation:.9s cubic-bezier(.85,.25,.37,.85) infinite line-scale-pulse-out}.la-line-scale-pulse-out>div:nth-child(3){-webkit-animation-delay:-.9s;animation-delay:-.9s}.la-line-scale-pulse-out>div:nth-child(2),.la-line-scale-pulse-out>div:nth-child(4){-webkit-animation-delay:-.7s;animation-delay:-.7s}.la-line-scale-pulse-out>div:nth-child(1),.la-line-scale-pulse-out>div:nth-child(5){-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-line-scale-pulse-out.la-sm{width:20px;height:16px}.la-line-scale-pulse-out.la-sm>div{width:2px;height:16px;margin:0 1px}.la-line-scale-pulse-out.la-2x{width:80px;height:64px}.la-line-scale-pulse-out.la-2x>div{width:8px;height:64px;margin:0 4px}.la-line-scale-pulse-out.la-3x{width:120px;height:96px}.la-line-scale-pulse-out.la-3x>div{width:12px;height:96px;margin:0 6px}@-webkit-keyframes line-scale-pulse-out{0%,100%{-webkit-transform:scaley(1);transform:scaley(1)}50%{-webkit-transform:scaley(.3);transform:scaley(.3)}}@keyframes line-scale-pulse-out{0%,100%{-webkit-transform:scaley(1);transform:scaley(1)}50%{-webkit-transform:scaley(.3);transform:scaley(.3)}}.la-line-scale,.la-line-scale>div{position:relative;box-sizing:border-box}.la-line-scale{display:block;font-size:0;color:#fff;width:40px;height:32px}.la-line-scale.la-dark{color:#333}.la-line-scale>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:4px;height:32px;margin:0 2px;border-radius:0;-webkit-animation:1.2s infinite line-scale;animation:1.2s infinite line-scale}.la-line-scale>div:nth-child(1){-webkit-animation-delay:-1.2s;animation-delay:-1.2s}.la-line-scale>div:nth-child(2){-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.la-line-scale>div:nth-child(3){-webkit-animation-delay:-1s;animation-delay:-1s}.la-line-scale>div:nth-child(4){-webkit-animation-delay:-.9s;animation-delay:-.9s}.la-line-scale>div:nth-child(5){-webkit-animation-delay:-.8s;animation-delay:-.8s}.la-line-scale.la-sm{width:20px;height:16px}.la-line-scale.la-sm>div{width:2px;height:16px;margin:0 1px}.la-line-scale.la-2x{width:80px;height:64px}.la-line-scale.la-2x>div{width:8px;height:64px;margin:0 4px}.la-line-scale.la-3x{width:120px;height:96px}.la-line-scale.la-3x>div{width:12px;height:96px;margin:0 6px}@-webkit-keyframes line-scale{0%,100%,40%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}20%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes line-scale{0%,100%,40%{-webkit-transform:scaleY(.4);transform:scaleY(.4)}20%{-webkit-transform:scaleY(1);transform:scaleY(1)}}.la-line-spin-clockwise-fade-rotating,.la-line-spin-clockwise-fade-rotating>div{position:relative;box-sizing:border-box}.la-line-spin-clockwise-fade-rotating{display:block;font-size:0;color:#fff;width:32px;height:32px;-webkit-animation:6s linear infinite line-spin-clockwise-fade-rotating-rotate;animation:6s linear infinite line-spin-clockwise-fade-rotating-rotate}.la-line-spin-clockwise-fade-rotating.la-dark{color:#333}.la-line-spin-clockwise-fade-rotating>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;width:2px;height:10px;margin:-5px 2px 2px -1px;border-radius:0;-webkit-animation:1s ease-in-out infinite line-spin-clockwise-fade-rotating;animation:1s ease-in-out infinite line-spin-clockwise-fade-rotating}.la-line-spin-clockwise-fade-rotating>div:nth-child(1){top:15%;left:50%;-webkit-transform:rotate(0);transform:rotate(0);-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-line-spin-clockwise-fade-rotating>div:nth-child(2){top:25.2512626585%;left:74.7487373415%;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-line-spin-clockwise-fade-rotating>div:nth-child(3){top:50%;left:85%;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-line-spin-clockwise-fade-rotating>div:nth-child(4){top:74.7487373415%;left:74.7487373415%;-webkit-transform:rotate(135deg);transform:rotate(135deg);-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-line-spin-clockwise-fade-rotating>div:nth-child(5){top:84.9999999974%;left:50.0000000004%;-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-line-spin-clockwise-fade-rotating>div:nth-child(6){top:74.7487369862%;left:25.2512627193%;-webkit-transform:rotate(225deg);transform:rotate(225deg);-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-line-spin-clockwise-fade-rotating>div:nth-child(7){top:49.9999806189%;left:15.0000039834%;-webkit-transform:rotate(270deg);transform:rotate(270deg);-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-line-spin-clockwise-fade-rotating>div:nth-child(8){top:25.2506949798%;left:25.2513989292%;-webkit-transform:rotate(315deg);transform:rotate(315deg);-webkit-animation-delay:0s;animation-delay:0s}.la-line-spin-clockwise-fade-rotating.la-sm{width:16px;height:16px}.la-line-spin-clockwise-fade-rotating.la-sm>div{width:1px;height:4px;margin-top:-2px;margin-left:0}.la-line-spin-clockwise-fade-rotating.la-2x{width:64px;height:64px}.la-line-spin-clockwise-fade-rotating.la-2x>div{width:4px;height:20px;margin-top:-10px;margin-left:-2px}.la-line-spin-clockwise-fade-rotating.la-3x{width:96px;height:96px}.la-line-spin-clockwise-fade-rotating.la-3x>div{width:6px;height:30px;margin-top:-15px;margin-left:-3px}@-webkit-keyframes line-spin-clockwise-fade-rotating-rotate{100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@keyframes line-spin-clockwise-fade-rotating-rotate{100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@-webkit-keyframes line-spin-clockwise-fade-rotating{50%{opacity:.2}100%{opacity:1}}@keyframes line-spin-clockwise-fade-rotating{50%{opacity:.2}100%{opacity:1}}.la-line-spin-clockwise-fade,.la-line-spin-clockwise-fade>div{position:relative;box-sizing:border-box}.la-line-spin-clockwise-fade{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-line-spin-clockwise-fade.la-dark{color:#333}.la-line-spin-clockwise-fade>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;width:2px;height:10px;margin:-5px 2px 2px -1px;border-radius:0;-webkit-animation:1s ease-in-out infinite line-spin-clockwise-fade;animation:1s ease-in-out infinite line-spin-clockwise-fade}.la-line-spin-clockwise-fade>div:nth-child(1){top:15%;left:50%;-webkit-transform:rotate(0);transform:rotate(0);-webkit-animation-delay:-.875s;animation-delay:-.875s}.la-line-spin-clockwise-fade>div:nth-child(2){top:25.2512626585%;left:74.7487373415%;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation-delay:-.75s;animation-delay:-.75s}.la-line-spin-clockwise-fade>div:nth-child(3){top:50%;left:85%;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-animation-delay:-.625s;animation-delay:-.625s}.la-line-spin-clockwise-fade>div:nth-child(4){top:74.7487373415%;left:74.7487373415%;-webkit-transform:rotate(135deg);transform:rotate(135deg);-webkit-animation-delay:-.5s;animation-delay:-.5s}.la-line-spin-clockwise-fade>div:nth-child(5){top:84.9999999974%;left:50.0000000004%;-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-animation-delay:-.375s;animation-delay:-.375s}.la-line-spin-clockwise-fade>div:nth-child(6){top:74.7487369862%;left:25.2512627193%;-webkit-transform:rotate(225deg);transform:rotate(225deg);-webkit-animation-delay:-.25s;animation-delay:-.25s}.la-line-spin-clockwise-fade>div:nth-child(7){top:49.9999806189%;left:15.0000039834%;-webkit-transform:rotate(270deg);transform:rotate(270deg);-webkit-animation-delay:-.125s;animation-delay:-.125s}.la-line-spin-clockwise-fade>div:nth-child(8){top:25.2506949798%;left:25.2513989292%;-webkit-transform:rotate(315deg);transform:rotate(315deg);-webkit-animation-delay:0s;animation-delay:0s}.la-line-spin-clockwise-fade.la-sm{width:16px;height:16px}.la-line-spin-clockwise-fade.la-sm>div{width:1px;height:4px;margin-top:-2px;margin-left:0}.la-line-spin-clockwise-fade.la-2x{width:64px;height:64px}.la-line-spin-clockwise-fade.la-2x>div{width:4px;height:20px;margin-top:-10px;margin-left:-2px}.la-line-spin-clockwise-fade.la-3x{width:96px;height:96px}.la-line-spin-clockwise-fade.la-3x>div{width:6px;height:30px;margin-top:-15px;margin-left:-3px}@-webkit-keyframes line-spin-clockwise-fade{50%{opacity:.2}100%{opacity:1}}@keyframes line-spin-clockwise-fade{50%{opacity:.2}100%{opacity:1}}.la-line-spin-fade-rotating,.la-line-spin-fade-rotating>div{position:relative;box-sizing:border-box}.la-line-spin-fade-rotating{display:block;font-size:0;color:#fff;width:32px;height:32px;-webkit-animation:6s linear infinite ball-spin-fade-rotating-rotate;animation:6s linear infinite ball-spin-fade-rotating-rotate}.la-line-spin-fade-rotating.la-dark{color:#333}.la-line-spin-fade-rotating>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;width:2px;height:10px;margin:-5px 2px 2px -1px;border-radius:0;-webkit-animation:1s ease-in-out infinite line-spin-fade-rotating;animation:1s ease-in-out infinite line-spin-fade-rotating}.la-line-spin-fade-rotating>div:nth-child(1){top:15%;left:50%;-webkit-transform:rotate(0);transform:rotate(0);-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-line-spin-fade-rotating>div:nth-child(2){top:25.2512626585%;left:74.7487373415%;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-line-spin-fade-rotating>div:nth-child(3){top:50%;left:85%;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-line-spin-fade-rotating>div:nth-child(4){top:74.7487373415%;left:74.7487373415%;-webkit-transform:rotate(135deg);transform:rotate(135deg);-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-line-spin-fade-rotating>div:nth-child(5){top:84.9999999974%;left:50.0000000004%;-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-line-spin-fade-rotating>div:nth-child(6){top:74.7487369862%;left:25.2512627193%;-webkit-transform:rotate(225deg);transform:rotate(225deg);-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-line-spin-fade-rotating>div:nth-child(7){top:49.9999806189%;left:15.0000039834%;-webkit-transform:rotate(270deg);transform:rotate(270deg);-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-line-spin-fade-rotating>div:nth-child(8){top:25.2506949798%;left:25.2513989292%;-webkit-transform:rotate(315deg);transform:rotate(315deg);-webkit-animation-delay:-2s;animation-delay:-2s}.la-line-spin-fade-rotating.la-sm{width:16px;height:16px}.la-line-spin-fade-rotating.la-sm>div{width:1px;height:4px;margin-top:-2px;margin-left:0}.la-line-spin-fade-rotating.la-2x{width:64px;height:64px}.la-line-spin-fade-rotating.la-2x>div{width:4px;height:20px;margin-top:-10px;margin-left:-2px}.la-line-spin-fade-rotating.la-3x{width:96px;height:96px}.la-line-spin-fade-rotating.la-3x>div{width:6px;height:30px;margin-top:-15px;margin-left:-3px}@-webkit-keyframes ball-spin-fade-rotating-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes ball-spin-fade-rotating-rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes line-spin-fade-rotating{50%{opacity:.2}100%{opacity:1}}@keyframes line-spin-fade-rotating{50%{opacity:.2}100%{opacity:1}}.la-line-spin-fade,.la-line-spin-fade>div{position:relative;box-sizing:border-box}.la-line-spin-fade{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-line-spin-fade.la-dark{color:#333}.la-line-spin-fade>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;position:absolute;width:2px;height:10px;margin:-5px 2px 2px -1px;border-radius:0;-webkit-animation:1s ease-in-out infinite line-spin-fade;animation:1s ease-in-out infinite line-spin-fade}.la-line-spin-fade>div:nth-child(1){top:15%;left:50%;-webkit-transform:rotate(0);transform:rotate(0);-webkit-animation-delay:-1.125s;animation-delay:-1.125s}.la-line-spin-fade>div:nth-child(2){top:25.2512626585%;left:74.7487373415%;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation-delay:-1.25s;animation-delay:-1.25s}.la-line-spin-fade>div:nth-child(3){top:50%;left:85%;-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-animation-delay:-1.375s;animation-delay:-1.375s}.la-line-spin-fade>div:nth-child(4){top:74.7487373415%;left:74.7487373415%;-webkit-transform:rotate(135deg);transform:rotate(135deg);-webkit-animation-delay:-1.5s;animation-delay:-1.5s}.la-line-spin-fade>div:nth-child(5){top:84.9999999974%;left:50.0000000004%;-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-animation-delay:-1.625s;animation-delay:-1.625s}.la-line-spin-fade>div:nth-child(6){top:74.7487369862%;left:25.2512627193%;-webkit-transform:rotate(225deg);transform:rotate(225deg);-webkit-animation-delay:-1.75s;animation-delay:-1.75s}.la-line-spin-fade>div:nth-child(7){top:49.9999806189%;left:15.0000039834%;-webkit-transform:rotate(270deg);transform:rotate(270deg);-webkit-animation-delay:-1.875s;animation-delay:-1.875s}.la-line-spin-fade>div:nth-child(8){top:25.2506949798%;left:25.2513989292%;-webkit-transform:rotate(315deg);transform:rotate(315deg);-webkit-animation-delay:-2s;animation-delay:-2s}.la-line-spin-fade.la-sm{width:16px;height:16px}.la-line-spin-fade.la-sm>div{width:1px;height:4px;margin-top:-2px;margin-left:0}.la-line-spin-fade.la-2x{width:64px;height:64px}.la-line-spin-fade.la-2x>div{width:4px;height:20px;margin-top:-10px;margin-left:-2px}.la-line-spin-fade.la-3x{width:96px;height:96px}.la-line-spin-fade.la-3x>div{width:6px;height:30px;margin-top:-15px;margin-left:-3px}@-webkit-keyframes line-spin-fade{50%{opacity:.2}100%{opacity:1}}@keyframes line-spin-fade{50%{opacity:.2}100%{opacity:1}}.la-pacman,.la-pacman>div{position:relative;box-sizing:border-box}.la-pacman{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-pacman.la-dark{color:#333}.la-pacman>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.la-pacman>div:nth-child(1),.la-pacman>div:nth-child(2){width:0;height:0;background:0 0;border-style:solid;border-width:16px;border-right-color:transparent;border-radius:100%;-webkit-animation:.5s infinite pacman-rotate-half-up;animation:.5s infinite pacman-rotate-half-up}.la-pacman>div:nth-child(2){margin-top:-32px;-webkit-animation-name:pacman-rotate-half-down;animation-name:pacman-rotate-half-down}.la-pacman>div:nth-child(3),.la-pacman>div:nth-child(4),.la-pacman>div:nth-child(5),.la-pacman>div:nth-child(6){position:absolute;top:50%;left:200%;width:8px;height:8px;border-radius:100%;opacity:0;-webkit-animation:2s linear infinite pacman-balls;animation:2s linear infinite pacman-balls}.la-pacman>div:nth-child(3){-webkit-animation-delay:-1.44s;animation-delay:-1.44s}.la-pacman>div:nth-child(4){-webkit-animation-delay:-1.94s;animation-delay:-1.94s}.la-pacman>div:nth-child(5){-webkit-animation-delay:-2.44s;animation-delay:-2.44s}.la-pacman>div:nth-child(6){-webkit-animation-delay:-2.94s;animation-delay:-2.94s}.la-pacman.la-sm{width:16px;height:16px}.la-pacman.la-sm>div:nth-child(1),.la-pacman.la-sm>div:nth-child(2){border-width:8px}.la-pacman.la-sm>div:nth-child(2){margin-top:-16px}.la-pacman.la-sm>div:nth-child(3),.la-pacman.la-sm>div:nth-child(4),.la-pacman.la-sm>div:nth-child(5),.la-pacman.la-sm>div:nth-child(6){width:4px;height:4px}.la-pacman.la-2x{width:64px;height:64px}.la-pacman.la-2x>div:nth-child(1),.la-pacman.la-2x>div:nth-child(2){border-width:32px}.la-pacman.la-2x>div:nth-child(2){margin-top:-64px}.la-pacman.la-2x>div:nth-child(3),.la-pacman.la-2x>div:nth-child(4),.la-pacman.la-2x>div:nth-child(5),.la-pacman.la-2x>div:nth-child(6){width:16px;height:16px}.la-pacman.la-3x{width:96px;height:96px}.la-pacman.la-3x>div:nth-child(1),.la-pacman.la-3x>div:nth-child(2){border-width:48px}.la-pacman.la-3x>div:nth-child(2){margin-top:-96px}.la-pacman.la-3x>div:nth-child(3),.la-pacman.la-3x>div:nth-child(4),.la-pacman.la-3x>div:nth-child(5),.la-pacman.la-3x>div:nth-child(6){width:24px;height:24px}@-webkit-keyframes pacman-rotate-half-up{0%,100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}50%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes pacman-rotate-half-up{0%,100%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}50%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes pacman-rotate-half-down{0%,100%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}50%{-webkit-transform:rotate(0);transform:rotate(0)}}@keyframes pacman-rotate-half-down{0%,100%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}50%{-webkit-transform:rotate(0);transform:rotate(0)}}@-webkit-keyframes pacman-balls{0%{left:200%;opacity:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}5%{opacity:.5}66%{opacity:1}67%{opacity:0}100%{left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}}@keyframes pacman-balls{0%{left:200%;opacity:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}5%{opacity:.5}66%{opacity:1}67%{opacity:0}100%{left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}}.la-square-jelly-box,.la-square-jelly-box>div{position:relative;box-sizing:border-box}.la-square-jelly-box{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-square-jelly-box.la-dark{color:#333}.la-square-jelly-box>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor}.la-square-jelly-box>div:nth-child(1),.la-square-jelly-box>div:nth-child(2){position:absolute;left:0;width:100%}.la-square-jelly-box>div:nth-child(1){top:-25%;z-index:1;height:100%;border-radius:10%;-webkit-animation:.6s linear -.1s infinite square-jelly-box-animate;animation:.6s linear -.1s infinite square-jelly-box-animate}.la-square-jelly-box>div:nth-child(2){bottom:-9%;height:10%;background:#000;border-radius:50%;opacity:.2;-webkit-animation:.6s linear -.1s infinite square-jelly-box-shadow;animation:.6s linear -.1s infinite square-jelly-box-shadow}.la-square-jelly-box.la-sm{width:16px;height:16px}.la-square-jelly-box.la-2x{width:64px;height:64px}.la-square-jelly-box.la-3x{width:96px;height:96px}@-webkit-keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{-webkit-transform:translateY(25%) rotate(22.5deg);transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;-webkit-transform:translateY(50%) scale(1,.9) rotate(45deg);transform:translateY(50%) scale(1,.9) rotate(45deg)}75%{-webkit-transform:translateY(25%) rotate(67.5deg);transform:translateY(25%) rotate(67.5deg)}100%{-webkit-transform:translateY(0) rotate(90deg);transform:translateY(0) rotate(90deg)}}@keyframes square-jelly-box-animate{17%{border-bottom-right-radius:10%}25%{-webkit-transform:translateY(25%) rotate(22.5deg);transform:translateY(25%) rotate(22.5deg)}50%{border-bottom-right-radius:100%;-webkit-transform:translateY(50%) scale(1,.9) rotate(45deg);transform:translateY(50%) scale(1,.9) rotate(45deg)}75%{-webkit-transform:translateY(25%) rotate(67.5deg);transform:translateY(25%) rotate(67.5deg)}100%{-webkit-transform:translateY(0) rotate(90deg);transform:translateY(0) rotate(90deg)}}@-webkit-keyframes square-jelly-box-shadow{50%{-webkit-transform:scale(1.25,1);transform:scale(1.25,1)}}@keyframes square-jelly-box-shadow{50%{-webkit-transform:scale(1.25,1);transform:scale(1.25,1)}}.la-square-loader,.la-square-loader>div{position:relative;box-sizing:border-box}.la-square-loader{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-square-loader.la-dark{color:#333}.la-square-loader>div{display:inline-block;float:none;border:2px solid currentColor;width:100%;height:100%;background:0 0;border-radius:0;-webkit-animation:2s infinite square-loader;animation:2s infinite square-loader}.la-square-loader>div:after{display:inline-block;width:100%;vertical-align:top;content:\"\";background-color:currentColor;-webkit-animation:2s ease-in infinite square-loader-inner;animation:2s ease-in infinite square-loader-inner}.la-square-loader.la-sm{width:16px;height:16px}.la-square-loader.la-sm>div{border-width:1px}.la-square-loader.la-2x{width:64px;height:64px}.la-square-loader.la-2x>div{border-width:4px}.la-square-loader.la-3x{width:96px;height:96px}.la-square-loader.la-3x>div{border-width:6px}@-webkit-keyframes square-loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}25%,50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%,75%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes square-loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}25%,50%{-webkit-transform:rotate(180deg);transform:rotate(180deg)}100%,75%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes square-loader-inner{0%,100%,25%{height:0}50%,75%{height:100%}}@keyframes square-loader-inner{0%,100%,25%{height:0}50%,75%{height:100%}}.la-square-spin,.la-square-spin>div{position:relative;box-sizing:border-box}.la-square-spin{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-square-spin.la-dark{color:#333}.la-square-spin>div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;width:100%;height:100%;border-radius:0;-webkit-animation:3s cubic-bezier(.09,.57,.49,.9) infinite square-spin;animation:3s cubic-bezier(.09,.57,.49,.9) infinite square-spin}.la-square-spin.la-sm{width:16px;height:16px}.la-square-spin.la-2x{width:64px;height:64px}.la-square-spin.la-3x{width:96px;height:96px}@-webkit-keyframes square-spin{0%{-webkit-transform:perspective(100px) rotateX(0) rotateY(0);transform:perspective(100px) rotateX(0) rotateY(0)}25%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(0);transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(180deg);transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:perspective(100px) rotateX(0) rotateY(180deg);transform:perspective(100px) rotateX(0) rotateY(180deg)}100%{-webkit-transform:perspective(100px) rotateX(0) rotateY(360deg);transform:perspective(100px) rotateX(0) rotateY(360deg)}}@keyframes square-spin{0%{-webkit-transform:perspective(100px) rotateX(0) rotateY(0);transform:perspective(100px) rotateX(0) rotateY(0)}25%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(0);transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(180deg);transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:perspective(100px) rotateX(0) rotateY(180deg);transform:perspective(100px) rotateX(0) rotateY(180deg)}100%{-webkit-transform:perspective(100px) rotateX(0) rotateY(360deg);transform:perspective(100px) rotateX(0) rotateY(360deg)}}.la-timer,.la-timer>div{position:relative;box-sizing:border-box}.la-timer{display:block;font-size:0;color:#fff;width:32px;height:32px}.la-timer.la-dark{color:#333}.la-timer>div{display:inline-block;float:none;border:2px solid currentColor;width:32px;height:32px;background:0 0;border-radius:100%}.la-timer>div:after,.la-timer>div:before{position:absolute;top:14px;left:14px;display:block;width:2px;margin-top:-1px;margin-left:-1px;content:\"\";background:currentColor;border-radius:2px;-webkit-transform-origin:1px 1px 0;transform-origin:1px 1px 0;-webkit-animation:1.25s linear -625ms infinite timer-loader;animation:1.25s linear -625ms infinite timer-loader}.la-timer>div:before{height:12px}.la-timer>div:after{height:8px;-webkit-animation-duration:15s;animation-duration:15s;-webkit-animation-delay:-7.5s;animation-delay:-7.5s}.la-timer.la-sm{width:16px;height:16px}.la-timer.la-sm>div{width:16px;height:16px;border-width:1px}.la-timer.la-sm>div:after,.la-timer.la-sm>div:before{top:7px;left:7px;width:1px;margin-top:-.5px;margin-left:-.5px;border-radius:1px;-webkit-transform-origin:.5px .5px 0;transform-origin:.5px .5px 0}.la-timer.la-sm>div:before{height:6px}.la-timer.la-sm>div:after{height:4px}.la-timer.la-2x{width:64px;height:64px}.la-timer.la-2x>div{width:64px;height:64px;border-width:4px}.la-timer.la-2x>div:after,.la-timer.la-2x>div:before{top:28px;left:28px;width:4px;margin-top:-2px;margin-left:-2px;border-radius:4px;-webkit-transform-origin:2px 2px 0;transform-origin:2px 2px 0}.la-timer.la-2x>div:before{height:24px}.la-timer.la-2x>div:after{height:16px}.la-timer.la-3x{width:96px;height:96px}.la-timer.la-3x>div{width:96px;height:96px;border-width:6px}.la-timer.la-3x>div:after,.la-timer.la-3x>div:before{top:42px;left:42px;width:6px;margin-top:-3px;margin-left:-3px;border-radius:6px;-webkit-transform-origin:3px 3px 0;transform-origin:3px 3px 0}.la-timer.la-3x>div:before{height:36px}.la-timer.la-3x>div:after{height:24px}@-webkit-keyframes timer-loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes timer-loader{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.la-triangle-skew-spin,.la-triangle-skew-spin>div{position:relative;box-sizing:border-box}.la-triangle-skew-spin{display:block;font-size:0;color:#fff;width:32px;height:16px}.la-triangle-skew-spin.la-dark{color:#333}.la-triangle-skew-spin>div{display:inline-block;float:none;border:0 solid currentColor;width:0;height:0;background:0 0;border:solid;border-width:0 16px 16px;border-right-color:transparent;border-left-color:transparent;-webkit-animation:3s cubic-bezier(.09,.57,.49,.9) infinite triangle-skew-spin;animation:3s cubic-bezier(.09,.57,.49,.9) infinite triangle-skew-spin}.la-triangle-skew-spin.la-sm{width:16px;height:8px}.la-triangle-skew-spin.la-sm>div{border-width:0 8px 8px}.la-triangle-skew-spin.la-2x{width:64px;height:32px}.la-triangle-skew-spin.la-2x>div{border-width:0 32px 32px}.la-triangle-skew-spin.la-3x{width:96px;height:48px}.la-triangle-skew-spin.la-3x>div{border-width:0 48px 48px}@-webkit-keyframes triangle-skew-spin{0%{-webkit-transform:perspective(100px) rotateX(0) rotateY(0);transform:perspective(100px) rotateX(0) rotateY(0)}25%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(0);transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(180deg);transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:perspective(100px) rotateX(0) rotateY(180deg);transform:perspective(100px) rotateX(0) rotateY(180deg)}100%{-webkit-transform:perspective(100px) rotateX(0) rotateY(360deg);transform:perspective(100px) rotateX(0) rotateY(360deg)}}@keyframes triangle-skew-spin{0%{-webkit-transform:perspective(100px) rotateX(0) rotateY(0);transform:perspective(100px) rotateX(0) rotateY(0)}25%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(0);transform:perspective(100px) rotateX(180deg) rotateY(0)}50%{-webkit-transform:perspective(100px) rotateX(180deg) rotateY(180deg);transform:perspective(100px) rotateX(180deg) rotateY(180deg)}75%{-webkit-transform:perspective(100px) rotateX(0) rotateY(180deg);transform:perspective(100px) rotateX(0) rotateY(180deg)}100%{-webkit-transform:perspective(100px) rotateX(0) rotateY(360deg);transform:perspective(100px) rotateX(0) rotateY(360deg)}}.overlay{position:fixed;top:0;left:0;width:100%;height:100%}.overlay>div:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.loading-text{position:absolute;top:60%;left:50%;-webkit-transform:translate(-50%,-60%);transform:translate(-50%,-60%)}"]
            }]
    }], function () { return [{ type: NgxSpinnerService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { bdColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], fullScreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
    return NgxSpinnerComponent;
}());

var NgxSpinnerModule = /** @class */ (function () {
    function NgxSpinnerModule() {
    }
NgxSpinnerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgxSpinnerModule });
NgxSpinnerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NgxSpinnerModule_Factory(t) { return new (t || NgxSpinnerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxSpinnerModule, { declarations: function () { return [NgxSpinnerComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]]; }, exports: function () { return [NgxSpinnerComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxSpinnerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]
                ],
                declarations: [NgxSpinnerComponent],
                exports: [NgxSpinnerComponent]
            }]
    }], function () { return []; }, null); })();
    return NgxSpinnerModule;
}());

/*
 * Public API Surface of ngx-spinner
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-spinner.js.map

/***/ }),

/***/ "./node_modules/ngx-window-token/__ivy_ngcc__/fesm5/ngx-window-token.js":
/*!******************************************************************************!*\
  !*** ./node_modules/ngx-window-token/__ivy_ngcc__/fesm5/ngx-window-token.js ***!
  \******************************************************************************/
/*! exports provided: WINDOW */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('WindowToken', typeof window !== 'undefined' && window.document ? { providedIn: 'root', factory: function () { return window; } } : undefined);

/*
 * Public API Surface of ngx-window-token
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-window-token.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/action-log/action-log.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/action-log/action-log.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\r\n  class=\"header pb-8 pt-5 pt-md-8\"\r\n  style=\"\r\n    background: linear-gradient(87deg, #13547a 0, #80d0c7 100%) !important;\r\n  \"\r\n>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"header-body\">\r\n      <!-- Card stats -->\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-4\">\r\n          <div class=\"form-group\">\r\n            <label\r\n              class=\"form-control-label-white\"\r\n              style=\"color: white;\"\r\n              for=\"inputLocation\"\r\n              >Kiểu tác động</label\r\n            >\r\n            <div class=\"input-group mb-4\">\r\n              <input\r\n                class=\"form-control\"\r\n                placeholder=\"Nhập hành động cần tìm kiếm\"\r\n                type=\"text\"\r\n                [(ngModel)]=\"searchActionType\"\r\n              />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-4\">\r\n          <div class=\"form-group\">\r\n            <label\r\n              class=\"form-control-label-white\"\r\n              style=\"color: white;\"\r\n              for=\"inputLocation\"\r\n              >Tên bảng</label\r\n            >\r\n            <div class=\"input-group mb-4\">\r\n              <input\r\n                class=\"form-control\"\r\n                placeholder=\"Nhập tên bảng cần tìm kiếm\"\r\n                type=\"text\"\r\n                [(ngModel)]=\"searchLocationStore\"\r\n              />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-4\">\r\n          <div class=\"form-group\">\r\n            <label\r\n              class=\"form-control-label-white\"\r\n              style=\"color: white;\"\r\n              for=\"inputLocation\"\r\n              >Tài khoản tác động</label\r\n            >\r\n            <div class=\"input-group mb-4\">\r\n              <input\r\n                class=\"form-control\"\r\n                placeholder=\"Nhập tài khoản cần tìm kiếm\"\r\n                type=\"text\"\r\n                [(ngModel)]=\"searchActionUser\"\r\n              />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-4\">\r\n          <div class=\"form-group\">\r\n            <label\r\n              class=\"form-control-label-white\"\r\n              style=\"color: white;\"\r\n              for=\"inputLocation\"\r\n              >Ngày bắt đầu</label\r\n            >\r\n            <div class=\"input-group mb-4\">\r\n              <input\r\n                  class=\"form-control\"\r\n                  type=\"date\"\r\n                  value=\"30-07-2020\"\r\n                  id=\"example-date-input\"\r\n                  [(ngModel)]=\"searchActionTime\"\r\n                />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-4\">\r\n          <div class=\"form-group\">\r\n            <label\r\n              class=\"form-control-label-white\"\r\n              style=\"color: white;\"\r\n              for=\"inputLocation\"\r\n              >Ngày kết thúc</label\r\n            >\r\n            <div class=\"input-group mb-4\">\r\n              <input\r\n                  class=\"form-control\"\r\n                  type=\"date\"\r\n                  value=\"30-07-2020\"\r\n                  id=\"example-date-input\"\r\n                  [(ngModel)]=\"searchEndDate\"\r\n                />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-4\">\r\n          <div class=\"form-group\">\r\n            <label\r\n              class=\"form-control-label-white\"\r\n              style=\"color: white;\"\r\n              for=\"inputLocation\"\r\n              ></label\r\n            >\r\n            <div class=\"row\" style=\"margin-top: 8px;\">\r\n              <div class=\"col-1\"></div>\r\n              <button type=\"button\" class=\"btn btn-primary\" style=\"background-color: #FDC667; border-color: #FEA200;\" (click)=\"search()\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\r\n              <button type=\"button\" class=\"btn btn-primary\" style=\"background-color: #0165B9; border-color: #0165B9;\" (click)=\"reset()\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Page content -->\r\n<div class=\"container-fluid mt--7\">\r\n  <!-- Table -->\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card shadow\">\r\n        <div class=\"card-header border-0\">\r\n          <h3 class=\"mb-0\">Danh sách Action Log</h3>\r\n        </div>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table align-items-center table-flush\">\r\n            <thead class=\"thead-light\">\r\n              <tr style=\"text-align: center;\">\r\n                <th scope=\"col\">STT</th>\r\n                <th scope=\"col\" *ngFor=\"let field of fields\">\r\n                  {{ field.label }}\r\n                </th>\r\n                <th>Thời gian xử lý (ms)</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr\r\n                *ngFor=\"let action of actionLogList; let index = index\"\r\n                style=\"text-align: center;\"\r\n                data-toggle=\"modal\" data-target=\"#detailModal\" (click)=\"currentActionLog=action\"\r\n              >\r\n                <td>{{ (currentPage - 1) * sizePage + index + 1 }}</td>\r\n                <td *ngFor=\"let field of fields\">\r\n                  <span *ngIf=\"field.name!='action_time' && field.name!='action_user'\">{{\r\n                    getTableInfo(action, field.name)\r\n                  }}</span>\r\n                  <span *ngIf=\"field.name=='action_time'\">{{\r\n                    getTableInfo(action, field.name) | date:'dd/MM/yyyy HH:mm:ss'\r\n                  }}</span>\r\n                  <span *ngIf=\"field.name=='action_user'\">{{\r\n                    getTableInfo(action, field.name, field.key)\r\n                  }}</span>\r\n                </td>\r\n                <td><span>{{ action.execution_time }}</span></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <h4 class=\"mb-0\" style=\"padding: 10px 24px 20px 24px;\" *ngIf=\"actionLogList.length==0\">Không tìm thấy kết quả phù hợp</h4>\r\n        </div>\r\n        <ngx-spinner></ngx-spinner>\r\n        <app-pagination\r\n          [totalPages]=\"totalItems\"\r\n          (pageEmit)=\"getActionLogList(filter, $event, sizePage)\"\r\n        ></app-pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div  class=\"modal fade bd-example-modal-lg\" id=\"detailModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n            <h3 class=\"modal-title\">Chi tiết action log</h3>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n            <div class=\"w-100 d-inline-block\">\r\n                <div *ngFor=\"let field of fields\" class=\"w-50 float-left prl-15 col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-control-label\">{{ field.label }}</label>\r\n                        <div class=\"form-group\">\r\n                            <input\r\n                                *ngIf=\"field.name!='action_time' && field.name!='action_user'\"\r\n                                value=\"{{ currentActionLog[field.name] }}\"\r\n                                type=\"text\"\r\n                                class=\"form-control\"\r\n                                readonly\r\n                            />\r\n                            <input\r\n                                *ngIf=\"field.name=='action_time'\"\r\n                                value=\"{{ currentActionLog[field.name] | date:'dd/MM/yyyy HH:mm:ss' }}\"\r\n                                type=\"text\"\r\n                                class=\"form-control\"\r\n                                readonly\r\n                            />\r\n                            <input\r\n                                *ngIf=\"field.name=='action_user'\"\r\n                                value=\"{{ getModalInfo(field) }}\"\r\n                                type=\"text\"\r\n                                class=\"form-control\"\r\n                                readonly\r\n                            />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div *ngFor=\"let detail of details\" class=\"w-50 float-left prl-15 col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-control-label\">{{ detail.label }}</label>\r\n                        <div class=\"form-group\">\r\n                            <textarea \r\n                                value=\"\"\r\n                                type=\"text\"\r\n                                class=\"form-control\"\r\n                                readonly\r\n                                style=\"height: 250px;\"\r\n                            >{{ currentActionLog[detail.name] }}\r\n                            </textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"w-50 float-left prl-15 col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\">Thời gian xử lý (ms)</label>\r\n                    <div class=\"form-group\">\r\n                        <input \r\n                          value=\"{{ currentActionLog.execution_time }}\"\r\n                          type=\"text\"\r\n                          class=\"form-control\"\r\n                          readonly\r\n                        />\r\n                    </div>\r\n                </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n            </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n    \r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-role/create-role.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-role/create-role.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-8 pt-5 pt-md-8\" style=\"background: linear-gradient(87deg, #13547a 0, #80d0c7 100%) !important;\"></div>\r\n<div class=\"container-fluid mt--7\">\r\n  <div class=\"\">\r\n    <div class=\"\">\r\n      <div class=\"card bg-secondary shadow\">\r\n        <div class=\"card-header bg-white border-0\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-8\">\r\n              <h3 class=\"mb-0\">Tạo mới vai trò</h3>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form>\r\n            <h6 class=\"heading-small text-muted mb-4\">Thông tin vai trò</h6>\r\n            <div class=\"pl-lg-4\">\r\n              <div class=\"row\" >\r\n                <div class=\"col-lg-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"name\"\r\n                      >Tên vai trò\r\n                      <p\r\n                        style=\"display: inline-flex !important; color: red;\"\r\n                        placement=\"right\"\r\n                        ngbTooltip=\"Không được để trống\"\r\n                      >\r\n                        *\r\n                      </p></label\r\n                    >\r\n                    <div>\r\n                      <input\r\n                        class=\"form-control form-control-alternative\"\r\n                        name=\"name\"\r\n                        id=\"name\"\r\n                        [(ngModel)]=\"role.name\"\r\n                        placeholder=\"Tên vai trò\"\r\n                        (input)=\"checkNameInvalid($event.target.value)\"\r\n                        disabled\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-6\"></div>\r\n                <div class=\"col-lg-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"permission\"\r\n                      >Quyền\r\n                      <p\r\n                        style=\"display: inline-flex !important; color: red;\"\r\n                        placement=\"right\"\r\n                        ngbTooltip=\"Không được để trống\"\r\n                      >\r\n                        *\r\n                      </p></label\r\n                    >\r\n                    <select\r\n                      *ngIf=\"is_permissions_valid\"\r\n                      name=\"permission\"\r\n                      [(ngModel)]=\"selected_permission\"\r\n                      id=\"permission\"\r\n                      class=\"form-control form-control-alternative\"\r\n                      (change)=\"selectPermission()\"\r\n                    >\r\n                      <option value=\"\" hidden selected>Chọn quyền</option>\r\n                      <option\r\n                        *ngFor=\"let permission of permissions\"\r\n                        [value]=\"permission._id\"\r\n                        >{{ permission.name }}</option\r\n                      >\r\n                    </select>\r\n                    <select\r\n                      *ngIf=\"!is_permissions_valid\"\r\n                      name=\"permission\"\r\n                      [(ngModel)]=\"selected_permission\"\r\n                      id=\"permission\"\r\n                      class=\"form-control is-invalid\"\r\n                      (change)=\"selectPermission()\"\r\n                    >\r\n                      <option value=\"\" hidden selected class=\"is-invalid\">Quyền không được để trống</option>\r\n                      <option\r\n                        *ngFor=\"let permission of permissions\"\r\n                        [value]=\"permission._id\"\r\n                        >{{ permission.name }}</option\r\n                      >\r\n                    </select>\r\n                  </div>\r\n                  <div>\r\n                    <button\r\n                      *ngFor=\"let _id of role.action_permission\"\r\n                      type=\"button\"\r\n                      class=\"btn btn-primary\"\r\n                      style=\"margin-bottom: 10px;\"\r\n                      (click)=\"removePermission(_id)\"\r\n                    >\r\n                      <span>{{ getPermissionName(_id) }}</span>\r\n                      <a\r\n                        \r\n                        class=\"btn-inner--icon\"\r\n                        ><i class=\"ni ni-fat-remove\"></i\r\n                      ></a>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"area\"\r\n                      >Khu vực\r\n                      <p\r\n                        style=\"display: inline-flex !important; color: red;\"\r\n                        placement=\"right\"\r\n                        ngbTooltip=\"Không được để trống\"\r\n                      >\r\n                        *\r\n                      </p>\r\n                    </label>\r\n                    <select\r\n                      [disabled]=\"!isCreateNode\"\r\n                      name=\"area\"\r\n                      [(ngModel)]=\"selected_area\"\r\n                      id=\"area\"\r\n                      class=\"form-control form-control-alternative\"\r\n                      (change)=\"selectArea()\"\r\n                    >\r\n                      <option value=\"\" selected hidden>Chọn khu vực</option>\r\n                      <option *ngIf=\"!check_areas\" value=\"\" hidden selected class=\"is-invalid\">Quyền tạo mới node phải chọn khu vực</option>\r\n                      <option *ngFor=\"let area of areas\" [value]=\"area._id\">{{\r\n                        area.name\r\n                      }}</option>\r\n                    </select>\r\n                    <!-- <select\r\n                      *ngIf=\"!check_areas\"\r\n                      [disabled]=\"!isCreateNode\"\r\n                      name=\"area\"\r\n                      [(ngModel)]=\"selected_area\"\r\n                      id=\"area\"\r\n                      class=\"form-control is-invalid\"\r\n                      (change)=\"selectArea()\"\r\n                    >\r\n                      <option value=\"\" selected hidden class=\"is-invalid\">Quyền tạo mới node phải chọn khu vực</option>\r\n                      <option *ngFor=\"let area of areas\" [value]=\"area._id\">{{\r\n                        area.name\r\n                      }}</option>\r\n                    </select> -->\r\n                  </div>\r\n                  <div>\r\n                    <button\r\n                      *ngFor=\"let _id of role.area_permission\"\r\n                      type=\"button\"\r\n                      class=\"btn btn-info\"\r\n                      style=\"margin-bottom: 10px;\"\r\n                      (click)=\"removeArea(_id)\"\r\n                    >\r\n                      <span>{{ getAreaName(_id) }}</span>\r\n                      <a  class=\"btn-inner--icon\"\r\n                        ><i class=\"ni ni-fat-remove\"></i\r\n                      ></a>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <hr style=\"margin: 0px;\" />\r\n        <div class=\"col-lg-4 card-body\" style=\"padding-top: 15px;\">\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn btn-success\"\r\n            style=\"margin-left: 24px;\"\r\n            (click)=\"create()\"\r\n          >\r\n            Tạo mới\r\n          </button>\r\n          <!-- <button type=\"button\" class=\"btn btn-danger\" (click)=\"redirect()\" >Thoát</button> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"header-body\">\r\n      <!-- Card stats -->\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"card card-stats mb-4 mb-xl-0\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Traffic</h5>\r\n                  <span class=\"h2 font-weight-bold mb-0\">350,897</span>\r\n                </div>\r\n                <div class=\"col-auto\">\r\n                  <div class=\"icon icon-shape bg-danger text-white rounded-circle shadow\">\r\n                    <i class=\"fas fa-chart-bar\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\r\n                <span class=\"text-success mr-2\"><i class=\"fa fa-arrow-up\"></i> 3.48%</span>\r\n                <span class=\"text-nowrap\">Since last month</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"card card-stats mb-4 mb-xl-0\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">New users</h5>\r\n                  <span class=\"h2 font-weight-bold mb-0\">2,356</span>\r\n                </div>\r\n                <div class=\"col-auto\">\r\n                  <div class=\"icon icon-shape bg-warning text-white rounded-circle shadow\">\r\n                    <i class=\"fas fa-chart-pie\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\r\n                <span class=\"text-danger mr-2\"><i class=\"fas fa-arrow-down\"></i> 3.48%</span>\r\n                <span class=\"text-nowrap\">Since last week</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"card card-stats mb-4 mb-xl-0\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Sales</h5>\r\n                  <span class=\"h2 font-weight-bold mb-0\">924</span>\r\n                </div>\r\n                <div class=\"col-auto\">\r\n                  <div class=\"icon icon-shape bg-yellow text-white rounded-circle shadow\">\r\n                    <i class=\"fas fa-users\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\r\n                <span class=\"text-warning mr-2\"><i class=\"fas fa-arrow-down\"></i> 1.10%</span>\r\n                <span class=\"text-nowrap\">Since yesterday</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"card card-stats mb-4 mb-xl-0\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Performance</h5>\r\n                  <span class=\"h2 font-weight-bold mb-0\">49,65%</span>\r\n                </div>\r\n                <div class=\"col-auto\">\r\n                  <div class=\"icon icon-shape bg-info text-white rounded-circle shadow\">\r\n                    <i class=\"fas fa-percent\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\r\n                <span class=\"text-success mr-2\"><i class=\"fas fa-arrow-up\"></i> 12%</span>\r\n                <span class=\"text-nowrap\">Since last month</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container-fluid mt--7\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-8 mb-5 mb-xl-0\">\r\n      <div class=\"card bg-gradient-default shadow\">\r\n        <div class=\"card-header bg-transparent\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col\">\r\n              <h6 class=\"text-uppercase text-light ls-1 mb-1\">Overview</h6>\r\n              <h2 class=\"text-white mb-0\">Sales value</h2>\r\n            </div>\r\n            <div class=\"col\">\r\n              <ul class=\"nav nav-pills justify-content-end\">\r\n                <li class=\"nav-item mr-2 mr-md-0\" data-toggle=\"chart\" data-target=\"#chart-sales\"  (click)=\"data=datasets[0];updateOptions()\">\r\n                  <a href=\"javascript:void(0)\" class=\"nav-link py-2 px-3\" [ngClass]=\"{'active':clicked===true}\" data-toggle=\"tab\" (click)=\"clicked=true;clicked1=false\">\r\n                    <span class=\"d-none d-md-block\">Month</span>\r\n                    <span class=\"d-md-none\">M</span>\r\n                  </a>\r\n                </li>\r\n                <li class=\"nav-item\" data-toggle=\"chart\" data-target=\"#chart-sales\"  (click)=\"data=datasets[1];updateOptions()\">\r\n                  <a href=\"javascript:void(0)\" class=\"nav-link py-2 px-3\" [ngClass]=\"{'active':clicked1===true}\" data-toggle=\"tab\" (click)=\"clicked=false;clicked1=true\">\r\n                    <span class=\"d-none d-md-block\">Week</span>\r\n                    <span class=\"d-md-none\">W</span>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <!-- Chart -->\r\n          <div class=\"chart\">\r\n            <!-- Chart wrapper -->\r\n            <canvas id=\"chart-sales\" class=\"chart-canvas\"></canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4\">\r\n      <div class=\"card shadow\">\r\n        <div class=\"card-header bg-transparent\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col\">\r\n              <h6 class=\"text-uppercase text-muted ls-1 mb-1\">Performance</h6>\r\n              <h2 class=\"mb-0\">Total orders</h2>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <!-- Chart -->\r\n          <div class=\"chart\">\r\n            <canvas id=\"chart-orders\" class=\"chart-canvas\"></canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mt-5\">\r\n    <div class=\"col-xl-8 mb-5 mb-xl-0\">\r\n      <div class=\"card shadow\">\r\n        <div class=\"card-header border-0\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col\">\r\n              <h3 class=\"mb-0\">Page visits</h3>\r\n            </div>\r\n            <div class=\"col text-right\">\r\n              <a href=\"#!\" class=\"btn btn-sm btn-primary\">See all</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"table-responsive\">\r\n          <!-- Projects table -->\r\n          <table class=\"table align-items-center table-flush\">\r\n            <thead class=\"thead-light\">\r\n              <tr>\r\n                <th scope=\"col\">Page name</th>\r\n                <th scope=\"col\">Visitors</th>\r\n                <th scope=\"col\">Unique users</th>\r\n                <th scope=\"col\">Bounce rate</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <th scope=\"row\">\r\n                  /argon/\r\n                </th>\r\n                <td>\r\n                  4,569\r\n                </td>\r\n                <td>\r\n                  340\r\n                </td>\r\n                <td>\r\n                  <i class=\"fas fa-arrow-up text-success mr-3\"></i> 46,53%\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th scope=\"row\">\r\n                  /argon/index.html\r\n                </th>\r\n                <td>\r\n                  3,985\r\n                </td>\r\n                <td>\r\n                  319\r\n                </td>\r\n                <td>\r\n                  <i class=\"fas fa-arrow-down text-warning mr-3\"></i> 46,53%\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th scope=\"row\">\r\n                  /argon/charts.html\r\n                </th>\r\n                <td>\r\n                  3,513\r\n                </td>\r\n                <td>\r\n                  294\r\n                </td>\r\n                <td>\r\n                  <i class=\"fas fa-arrow-down text-warning mr-3\"></i> 36,49%\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th scope=\"row\">\r\n                  /argon/tables.html\r\n                </th>\r\n                <td>\r\n                  2,050\r\n                </td>\r\n                <td>\r\n                  147\r\n                </td>\r\n                <td>\r\n                  <i class=\"fas fa-arrow-up text-success mr-3\"></i> 50,87%\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th scope=\"row\">\r\n                  /argon/profile.html\r\n                </th>\r\n                <td>\r\n                  1,795\r\n                </td>\r\n                <td>\r\n                  190\r\n                </td>\r\n                <td>\r\n                  <i class=\"fas fa-arrow-down text-danger mr-3\"></i> 46,53%\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-4\">\r\n      <div class=\"card shadow\">\r\n        <div class=\"card-header border-0\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col\">\r\n              <h3 class=\"mb-0\">Social traffic</h3>\r\n            </div>\r\n            <div class=\"col text-right\">\r\n              <a href=\"#!\" class=\"btn btn-sm btn-primary\">See all</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"table-responsive\">\r\n          <!-- Projects table -->\r\n          <table class=\"table align-items-center table-flush\">\r\n            <thead class=\"thead-light\">\r\n              <tr>\r\n                <th scope=\"col\">Referral</th>\r\n                <th scope=\"col\">Visitors</th>\r\n                <th scope=\"col\"></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <th scope=\"row\">\r\n                  Facebook\r\n                </th>\r\n                <td>\r\n                  1,480\r\n                </td>\r\n                <td>\r\n                  <div class=\"d-flex align-items-center\">\r\n                    <span class=\"mr-2\">60%</span>\r\n                    <div>\r\n                      <div class=\"progress\">\r\n                        <div class=\"progress-bar bg-gradient-danger\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th scope=\"row\">\r\n                  Facebook\r\n                </th>\r\n                <td>\r\n                  5,480\r\n                </td>\r\n                <td>\r\n                  <div class=\"d-flex align-items-center\">\r\n                    <span class=\"mr-2\">70%</span>\r\n                    <div>\r\n                      <div class=\"progress\">\r\n                        <div class=\"progress-bar bg-gradient-success\" role=\"progressbar\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 70%;\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th scope=\"row\">\r\n                  Google\r\n                </th>\r\n                <td>\r\n                  4,807\r\n                </td>\r\n                <td>\r\n                  <div class=\"d-flex align-items-center\">\r\n                    <span class=\"mr-2\">80%</span>\r\n                    <div>\r\n                      <div class=\"progress\">\r\n                        <div class=\"progress-bar bg-gradient-primary\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%;\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th scope=\"row\">\r\n                  Instagram\r\n                </th>\r\n                <td>\r\n                  3,678\r\n                </td>\r\n                <td>\r\n                  <div class=\"d-flex align-items-center\">\r\n                    <span class=\"mr-2\">75%</span>\r\n                    <div>\r\n                      <div class=\"progress\">\r\n                        <div class=\"progress-bar bg-gradient-info\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 75%;\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th scope=\"row\">\r\n                  twitter\r\n                </th>\r\n                <td>\r\n                  2,645\r\n                </td>\r\n                <td>\r\n                  <div class=\"d-flex align-items-center\">\r\n                    <span class=\"mr-2\">30%</span>\r\n                    <div>\r\n                      <div class=\"progress\">\r\n                        <div class=\"progress-bar bg-gradient-warning\" role=\"progressbar\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 30%;\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/icons/icons.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/icons/icons.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"header-body\">\r\n      <!-- Card stats -->\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"card card-stats mb-4 mb-xl-0\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Traffic</h5>\r\n                  <span class=\"h2 font-weight-bold mb-0\">350,897</span>\r\n                </div>\r\n                <div class=\"col-auto\">\r\n                  <div class=\"icon icon-shape bg-danger text-white rounded-circle shadow\">\r\n                    <i class=\"fas fa-chart-bar\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\r\n                <span class=\"text-success mr-2\"><i class=\"fa fa-arrow-up\"></i> 3.48%</span>\r\n                <span class=\"text-nowrap\">Since last month</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"card card-stats mb-4 mb-xl-0\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">New users</h5>\r\n                  <span class=\"h2 font-weight-bold mb-0\">2,356</span>\r\n                </div>\r\n                <div class=\"col-auto\">\r\n                  <div class=\"icon icon-shape bg-warning text-white rounded-circle shadow\">\r\n                    <i class=\"fas fa-chart-pie\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\r\n                <span class=\"text-danger mr-2\"><i class=\"fas fa-arrow-down\"></i> 3.48%</span>\r\n                <span class=\"text-nowrap\">Since last week</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"card card-stats mb-4 mb-xl-0\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Sales</h5>\r\n                  <span class=\"h2 font-weight-bold mb-0\">924</span>\r\n                </div>\r\n                <div class=\"col-auto\">\r\n                  <div class=\"icon icon-shape bg-yellow text-white rounded-circle shadow\">\r\n                    <i class=\"fas fa-users\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\r\n                <span class=\"text-warning mr-2\"><i class=\"fas fa-arrow-down\"></i> 1.10%</span>\r\n                <span class=\"text-nowrap\">Since yesterday</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"card card-stats mb-4 mb-xl-0\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Performance</h5>\r\n                  <span class=\"h2 font-weight-bold mb-0\">49,65%</span>\r\n                </div>\r\n                <div class=\"col-auto\">\r\n                  <div class=\"icon icon-shape bg-info text-white rounded-circle shadow\">\r\n                    <i class=\"fas fa-percent\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\r\n                <span class=\"text-success mr-2\"><i class=\"fas fa-arrow-up\"></i> 12%</span>\r\n                <span class=\"text-nowrap\">Since last month</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Page content -->\r\n<div class=\"container-fluid mt--7\">\r\n  <!-- Table -->\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card shadow\">\r\n        <div class=\"card-header bg-transparent\">\r\n          <h3 class=\"mb-0\">Icons</h3>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"row icon-examples\">\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'active-40' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'active-40'\" (cbOnSuccess) = \"copy = 'active-40'\">\r\n                <div>\r\n                  <i class=\"ni ni-active-40\"></i>\r\n                  <span>active-40</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'air-baloon' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'air-baloon'\" (cbOnSuccess) = \"copy = 'air-baloon'\">\r\n                <div>\r\n                  <i class=\"ni ni-air-baloon\"></i>\r\n                  <span>air-baloon</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'album-2' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'album-2'\" (cbOnSuccess) = \"copy = 'album-2'\">\r\n                <div>\r\n                  <i class=\"ni ni-album-2\"></i>\r\n                  <span>album-2</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'align-center' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'align-center'\" (cbOnSuccess) = \"copy = 'align-center'\">\r\n                <div>\r\n                  <i class=\"ni ni-align-center\"></i>\r\n                  <span>align-center</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'align-left-2' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'align-left-2'\" (cbOnSuccess) = \"copy = 'align-left-2'\">\r\n                <div>\r\n                  <i class=\"ni ni-align-left-2\"></i>\r\n                  <span>align-left-2</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'ambulance' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'ambulance'\" (cbOnSuccess) = \"copy = 'ambulance'\">\r\n                <div>\r\n                  <i class=\"ni ni-ambulance\"></i>\r\n                  <span>ambulance</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'app' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'app'\" (cbOnSuccess) = \"copy = 'app'\">\r\n                <div>\r\n                  <i class=\"ni ni-app\"></i>\r\n                  <span>app</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'archive-2' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'archive-2'\" (cbOnSuccess) = \"copy = 'archive-2'\">\r\n                <div>\r\n                  <i class=\"ni ni-archive-2\"></i>\r\n                  <span>archive-2</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'atom' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'atom'\" (cbOnSuccess) = \"copy = 'atom'\">\r\n                <div>\r\n                  <i class=\"ni ni-atom\"></i>\r\n                  <span>atom</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'badge' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'badge'\" (cbOnSuccess) = \"copy = 'badge'\">\r\n                <div>\r\n                  <i class=\"ni ni-badge\"></i>\r\n                  <span>badge</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'bag-17' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'bag-17'\" (cbOnSuccess) = \"copy = 'bag-17'\">\r\n                <div>\r\n                  <i class=\"ni ni-bag-17\"></i>\r\n                  <span>bag-17</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'basket' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'basket'\" (cbOnSuccess) = \"copy = 'basket'\">\r\n                <div>\r\n                  <i class=\"ni ni-basket\"></i>\r\n                  <span>basket</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'bell-55' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'bell-55'\" (cbOnSuccess) = \"copy = 'bell-55'\">\r\n                <div>\r\n                  <i class=\"ni ni-bell-55\"></i>\r\n                  <span>bell-55</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'bold-down' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'bold-down'\" (cbOnSuccess) = \"copy = 'bold-down'\">\r\n                <div>\r\n                  <i class=\"ni ni-bold-down\"></i>\r\n                  <span>bold-down</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'bold-left' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'bold-left'\" (cbOnSuccess) = \"copy = 'bold-left'\">\r\n                <div>\r\n                  <i class=\"ni ni-bold-left\"></i>\r\n                  <span>bold-left</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'bold-right' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'bold-right'\" (cbOnSuccess) = \"copy = 'bold-right'\">\r\n                <div>\r\n                  <i class=\"ni ni-bold-right\"></i>\r\n                  <span>bold-right</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'bold-up' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'bold-up'\" (cbOnSuccess) = \"copy = 'bold-up'\">\r\n                <div>\r\n                  <i class=\"ni ni-bold-up\"></i>\r\n                  <span>bold-up</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'bold' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'bold'\" (cbOnSuccess) = \"copy = 'bold'\">\r\n                <div>\r\n                  <i class=\"ni ni-bold\"></i>\r\n                  <span>bold</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'book-bookmark' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'book-bookmark'\" (cbOnSuccess) = \"copy = 'book-bookmark'\">\r\n                <div>\r\n                  <i class=\"ni ni-book-bookmark\"></i>\r\n                  <span>book-bookmark</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'books' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'books'\" (cbOnSuccess) = \"copy = 'books'\">\r\n                <div>\r\n                  <i class=\"ni ni-books\"></i>\r\n                  <span>books</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'box-2' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'box-2'\" (cbOnSuccess) = \"copy = 'box-2'\">\r\n                <div>\r\n                  <i class=\"ni ni-box-2\"></i>\r\n                  <span>box-2</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'briefcase-24' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'briefcase-24'\" (cbOnSuccess) = \"copy = 'briefcase-24'\">\r\n                <div>\r\n                  <i class=\"ni ni-briefcase-24\"></i>\r\n                  <span>briefcase-24</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'building' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'building'\" (cbOnSuccess) = \"copy = 'building'\">\r\n                <div>\r\n                  <i class=\"ni ni-building\"></i>\r\n                  <span>building</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'bulb-61' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'bulb-61'\" (cbOnSuccess) = \"copy = 'bulb-61'\">\r\n                <div>\r\n                  <i class=\"ni ni-bulb-61\"></i>\r\n                  <span>bulb-61</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'bullet-list-67' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'bullet-list-67'\" (cbOnSuccess) = \"copy = 'bullet-list-67'\">\r\n                <div>\r\n                  <i class=\"ni ni-bullet-list-67\"></i>\r\n                  <span>bullet-list-67</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'bus-front-12' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'bus-front-12'\" (cbOnSuccess) = \"copy = 'bus-front-12'\">\r\n                <div>\r\n                  <i class=\"ni ni-bus-front-12\"></i>\r\n                  <span>bus-front-12</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'button-pause' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'button-pause'\" (cbOnSuccess) = \"copy = 'button-pause'\">\r\n                <div>\r\n                  <i class=\"ni ni-button-pause\"></i>\r\n                  <span>button-pause</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'button-play' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'button-play'\" (cbOnSuccess) = \"copy = 'button-play'\">\r\n                <div>\r\n                  <i class=\"ni ni-button-play\"></i>\r\n                  <span>button-play</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'button-power' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'button-power'\" (cbOnSuccess) = \"copy = 'button-power'\">\r\n                <div>\r\n                  <i class=\"ni ni-button-power\"></i>\r\n                  <span>button-power</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'calendar-grid-58' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'calendar-grid-58'\" (cbOnSuccess) = \"copy = 'calendar-grid-58'\">\r\n                <div>\r\n                  <i class=\"ni ni-calendar-grid-58\"></i>\r\n                  <span>calendar-grid-58</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'camera-compact' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'camera-compact'\" (cbOnSuccess) = \"copy = 'camera-compact'\">\r\n                <div>\r\n                  <i class=\"ni ni-camera-compact\"></i>\r\n                  <span>camera-compact</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'caps-small' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'caps-small'\" (cbOnSuccess) = \"copy = 'caps-small'\">\r\n                <div>\r\n                  <i class=\"ni ni-caps-small\"></i>\r\n                  <span>caps-small</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'cart' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'cart'\" (cbOnSuccess) = \"copy = 'cart'\">\r\n                <div>\r\n                  <i class=\"ni ni-cart\"></i>\r\n                  <span>cart</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'chart-bar-32' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'chart-bar-32'\" (cbOnSuccess) = \"copy = 'chart-bar-32'\">\r\n                <div>\r\n                  <i class=\"ni ni-chart-bar-32\"></i>\r\n                  <span>chart-bar-32</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'chart-pie-35' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'chart-pie-35'\" (cbOnSuccess) = \"copy = 'chart-pie-35'\">\r\n                <div>\r\n                  <i class=\"ni ni-chart-pie-35\"></i>\r\n                  <span>chart-pie-35</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'chat-round' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'chat-round'\" (cbOnSuccess) = \"copy = 'chat-round'\">\r\n                <div>\r\n                  <i class=\"ni ni-chat-round\"></i>\r\n                  <span>chat-round</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'check-bold' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'check-bold'\" (cbOnSuccess) = \"copy = 'check-bold'\">\r\n                <div>\r\n                  <i class=\"ni ni-check-bold\"></i>\r\n                  <span>check-bold</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'circle-08' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'circle-08'\" (cbOnSuccess) = \"copy = 'circle-08'\">\r\n                <div>\r\n                  <i class=\"ni ni-circle-08\"></i>\r\n                  <span>circle-08</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'cloud-download-95' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'cloud-download-95'\" (cbOnSuccess) = \"copy = 'cloud-download-95'\">\r\n                <div>\r\n                  <i class=\"ni ni-cloud-download-95\"></i>\r\n                  <span>cloud-download-95</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'cloud-upload-96' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'cloud-upload-96'\" (cbOnSuccess) = \"copy = 'cloud-upload-96'\">\r\n                <div>\r\n                  <i class=\"ni ni-cloud-upload-96\"></i>\r\n                  <span>cloud-upload-96</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'compass-04' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'compass-04'\" (cbOnSuccess) = \"copy = 'compass-04'\">\r\n                <div>\r\n                  <i class=\"ni ni-compass-04\"></i>\r\n                  <span>compass-04</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'controller' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'controller'\" (cbOnSuccess) = \"copy = 'controller'\">\r\n                <div>\r\n                  <i class=\"ni ni-controller\"></i>\r\n                  <span>controller</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'credit-card' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'credit-card'\" (cbOnSuccess) = \"copy = 'credit-card'\">\r\n                <div>\r\n                  <i class=\"ni ni-credit-card\"></i>\r\n                  <span>credit-card</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'curved-next' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'curved-next'\" (cbOnSuccess) = \"copy = 'curved-next'\">\r\n                <div>\r\n                  <i class=\"ni ni-curved-next\"></i>\r\n                  <span>curved-next</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'delivery-fast' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'delivery-fast'\" (cbOnSuccess) = \"copy = 'delivery-fast'\">\r\n                <div>\r\n                  <i class=\"ni ni-delivery-fast\"></i>\r\n                  <span>delivery-fast</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'diamond' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'diamond'\" (cbOnSuccess) = \"copy = 'diamond'\">\r\n                <div>\r\n                  <i class=\"ni ni-diamond\"></i>\r\n                  <span>diamond</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'email-83' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'email-83'\" (cbOnSuccess) = \"copy = 'email-83'\">\r\n                <div>\r\n                  <i class=\"ni ni-email-83\"></i>\r\n                  <span>email-83</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'fat-add' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'fat-add'\" (cbOnSuccess) = \"copy = 'fat-add'\">\r\n                <div>\r\n                  <i class=\"ni ni-fat-add\"></i>\r\n                  <span>fat-add</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'fat-delete' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'fat-delete'\" (cbOnSuccess) = \"copy = 'fat-delete'\">\r\n                <div>\r\n                  <i class=\"ni ni-fat-delete\"></i>\r\n                  <span>fat-delete</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'fat-remove' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'fat-remove'\" (cbOnSuccess) = \"copy = 'fat-remove'\">\r\n                <div>\r\n                  <i class=\"ni ni-fat-remove\"></i>\r\n                  <span>fat-remove</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'favourite-28' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'favourite-28'\" (cbOnSuccess) = \"copy = 'favourite-28'\">\r\n                <div>\r\n                  <i class=\"ni ni-favourite-28\"></i>\r\n                  <span>favourite-28</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'folder-17' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'folder-17'\" (cbOnSuccess) = \"copy = 'folder-17'\">\r\n                <div>\r\n                  <i class=\"ni ni-folder-17\"></i>\r\n                  <span>folder-17</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'glasses-2' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'glasses-2'\" (cbOnSuccess) = \"copy = 'glasses-2'\">\r\n                <div>\r\n                  <i class=\"ni ni-glasses-2\"></i>\r\n                  <span>glasses-2</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'hat-3' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'hat-3'\" (cbOnSuccess) = \"copy = 'hat-3'\">\r\n                <div>\r\n                  <i class=\"ni ni-hat-3\"></i>\r\n                  <span>hat-3</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'headphones' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'headphones'\" (cbOnSuccess) = \"copy = 'headphones'\">\r\n                <div>\r\n                  <i class=\"ni ni-headphones\"></i>\r\n                  <span>headphones</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'html5' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'html5'\" (cbOnSuccess) = \"copy = 'html5'\">\r\n                <div>\r\n                  <i class=\"ni ni-html5\"></i>\r\n                  <span>html5</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'istanbul' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'istanbul'\" (cbOnSuccess) = \"copy = 'istanbul'\">\r\n                <div>\r\n                  <i class=\"ni ni-istanbul\"></i>\r\n                  <span>istanbul</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'circle-08' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'circle-08'\" (cbOnSuccess) = \"copy = 'circle-08'\">\r\n                <div>\r\n                  <i class=\"ni ni-circle-08\"></i>\r\n                  <span>circle-08</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'key-25' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'key-25'\" (cbOnSuccess) = \"copy = 'key-25'\">\r\n                <div>\r\n                  <i class=\"ni ni-key-25\"></i>\r\n                  <span>key-25</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'laptop' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'laptop'\" (cbOnSuccess) = \"copy = 'laptop'\">\r\n                <div>\r\n                  <i class=\"ni ni-laptop\"></i>\r\n                  <span>laptop</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'like-2' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'like-2'\" (cbOnSuccess) = \"copy = 'like-2'\">\r\n                <div>\r\n                  <i class=\"ni ni-like-2\"></i>\r\n                  <span>like-2</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'lock-circle-open' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'lock-circle-open'\" (cbOnSuccess) = \"copy = 'lock-circle-open'\">\r\n                <div>\r\n                  <i class=\"ni ni-lock-circle-open\"></i>\r\n                  <span>lock-circle-open</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'map-big' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'map-big'\" (cbOnSuccess) = \"copy = 'map-big'\">\r\n                <div>\r\n                  <i class=\"ni ni-map-big\"></i>\r\n                  <span>map-big</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'mobile-button' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'mobile-button'\" (cbOnSuccess) = \"copy = 'mobile-button'\">\r\n                <div>\r\n                  <i class=\"ni ni-mobile-button\"></i>\r\n                  <span>mobile-button</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'money-coins' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'money-coins'\" (cbOnSuccess) = \"copy = 'money-coins'\">\r\n                <div>\r\n                  <i class=\"ni ni-money-coins\"></i>\r\n                  <span>money-coins</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'note-03' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'note-03'\" (cbOnSuccess) = \"copy = 'note-03'\">\r\n                <div>\r\n                  <i class=\"ni ni-note-03\"></i>\r\n                  <span>note-03</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'notification-70' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'notification-70'\" (cbOnSuccess) = \"copy = 'notification-70'\">\r\n                <div>\r\n                  <i class=\"ni ni-notification-70\"></i>\r\n                  <span>notification-70</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'palette' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'palette'\" (cbOnSuccess) = \"copy = 'palette'\">\r\n                <div>\r\n                  <i class=\"ni ni-palette\"></i>\r\n                  <span>palette</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'paper-diploma' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'paper-diploma'\" (cbOnSuccess) = \"copy = 'paper-diploma'\">\r\n                <div>\r\n                  <i class=\"ni ni-paper-diploma\"></i>\r\n                  <span>paper-diploma</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'pin-3' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'pin-3'\" (cbOnSuccess) = \"copy = 'pin-3'\">\r\n                <div>\r\n                  <i class=\"ni ni-pin-3\"></i>\r\n                  <span>pin-3</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'planet' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'planet'\" (cbOnSuccess) = \"copy = 'planet'\">\r\n                <div>\r\n                  <i class=\"ni ni-planet\"></i>\r\n                  <span>planet</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'ruler-pencil' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'ruler-pencil'\" (cbOnSuccess) = \"copy = 'ruler-pencil'\">\r\n                <div>\r\n                  <i class=\"ni ni-ruler-pencil\"></i>\r\n                  <span>ruler-pencil</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'satisfied' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'satisfied'\" (cbOnSuccess) = \"copy = 'satisfied'\">\r\n                <div>\r\n                  <i class=\"ni ni-satisfied\"></i>\r\n                  <span>satisfied</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'scissors' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'scissors'\" (cbOnSuccess) = \"copy = 'scissors'\">\r\n                <div>\r\n                  <i class=\"ni ni-scissors\"></i>\r\n                  <span>scissors</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'send' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'send'\" (cbOnSuccess) = \"copy = 'send'\">\r\n                <div>\r\n                  <i class=\"ni ni-send\"></i>\r\n                  <span>send</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'settings-gear-65' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'settings-gear-65'\" (cbOnSuccess) = \"copy = 'settings-gear-65'\">\r\n                <div>\r\n                  <i class=\"ni ni-settings-gear-65\"></i>\r\n                  <span>settings-gear-65</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'settings' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'settings'\" (cbOnSuccess) = \"copy = 'settings'\">\r\n                <div>\r\n                  <i class=\"ni ni-settings\"></i>\r\n                  <span>settings</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'single-02' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'single-02'\" (cbOnSuccess) = \"copy = 'single-02'\">\r\n                <div>\r\n                  <i class=\"ni ni-single-02\"></i>\r\n                  <span>single-02</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'single-copy-04' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'single-copy-04'\" (cbOnSuccess) = \"copy = 'single-copy-04'\">\r\n                <div>\r\n                  <i class=\"ni ni-single-copy-04\"></i>\r\n                  <span>single-copy-04</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'sound-wave' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'sound-wave'\" (cbOnSuccess) = \"copy = 'sound-wave'\">\r\n                <div>\r\n                  <i class=\"ni ni-sound-wave\"></i>\r\n                  <span>sound-wave</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'spaceship' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'spaceship'\" (cbOnSuccess) = \"copy = 'spaceship'\">\r\n                <div>\r\n                  <i class=\"ni ni-spaceship\"></i>\r\n                  <span>spaceship</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'square-pin' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'square-pin'\" (cbOnSuccess) = \"copy = 'square-pin'\">\r\n                <div>\r\n                  <i class=\"ni ni-square-pin\"></i>\r\n                  <span>square-pin</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'support-16' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'support-16'\" (cbOnSuccess) = \"copy = 'support-16'\">\r\n                <div>\r\n                  <i class=\"ni ni-support-16\"></i>\r\n                  <span>support-16</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'tablet-button' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'tablet-button'\" (cbOnSuccess) = \"copy = 'tablet-button'\">\r\n                <div>\r\n                  <i class=\"ni ni-tablet-button\"></i>\r\n                  <span>tablet-button</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'tag' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'tag'\" (cbOnSuccess) = \"copy = 'tag'\">\r\n                <div>\r\n                  <i class=\"ni ni-tag\"></i>\r\n                  <span>tag</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'tie-bow' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'tie-bow'\" (cbOnSuccess) = \"copy = 'tie-bow'\">\r\n                <div>\r\n                  <i class=\"ni ni-tie-bow\"></i>\r\n                  <span>tie-bow</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'time-alarm' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'time-alarm'\" (cbOnSuccess) = \"copy = 'time-alarm'\">\r\n                <div>\r\n                  <i class=\"ni ni-time-alarm\"></i>\r\n                  <span>time-alarm</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'trophy' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'trophy'\" (cbOnSuccess) = \"copy = 'trophy'\">\r\n                <div>\r\n                  <i class=\"ni ni-trophy\"></i>\r\n                  <span>trophy</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'tv-2' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'tv-2'\" (cbOnSuccess) = \"copy = 'tv-2'\">\r\n                <div>\r\n                  <i class=\"ni ni-tv-2\"></i>\r\n                  <span>tv-2</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'umbrella-13' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'umbrella-13'\" (cbOnSuccess) = \"copy = 'umbrella-13'\">\r\n                <div>\r\n                  <i class=\"ni ni-umbrella-13\"></i>\r\n                  <span>umbrella-13</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'user-run' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'user-run'\" (cbOnSuccess) = \"copy = 'user-run'\">\r\n                <div>\r\n                  <i class=\"ni ni-user-run\"></i>\r\n                  <span>user-run</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'vector' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'vector'\" (cbOnSuccess) = \"copy = 'vector'\">\r\n                <div>\r\n                  <i class=\"ni ni-vector\"></i>\r\n                  <span>vector</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'watch-time' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'watch-time'\" (cbOnSuccess) = \"copy = 'watch-time'\">\r\n                <div>\r\n                  <i class=\"ni ni-watch-time\"></i>\r\n                  <span>watch-time</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'world' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'world'\" (cbOnSuccess) = \"copy = 'world'\">\r\n                <div>\r\n                  <i class=\"ni ni-world\"></i>\r\n                  <span>world</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'zoom-split-in' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'zoom-split-in'\" (cbOnSuccess) = \"copy = 'zoom-split-in'\">\r\n                <div>\r\n                  <i class=\"ni ni-zoom-split-in\"></i>\r\n                  <span>zoom-split-in</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'collection' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'collection'\" (cbOnSuccess) = \"copy = 'collection'\">\r\n                <div>\r\n                  <i class=\"ni ni-collection\"></i>\r\n                  <span>collection</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'image' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'image'\" (cbOnSuccess) = \"copy = 'image'\">\r\n                <div>\r\n                  <i class=\"ni ni-image\"></i>\r\n                  <span>image</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'shop' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'shop'\" (cbOnSuccess) = \"copy = 'shop'\">\r\n                <div>\r\n                  <i class=\"ni ni-shop\"></i>\r\n                  <span>shop</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'ungroup' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'ungroup'\" (cbOnSuccess) = \"copy = 'ungroup'\">\r\n                <div>\r\n                  <i class=\"ni ni-ungroup\"></i>\r\n                  <span>ungroup</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'world-2' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'world-2'\" (cbOnSuccess) = \"copy = 'world-2'\">\r\n                <div>\r\n                  <i class=\"ni ni-world-2\"></i>\r\n                  <span>world-2</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <button type=\"button\" placement=\"top-center\" triggers=\"hover focus click\" ngbTooltip=\"{{copy === 'ui-04' ? 'Copied':'Copy to clipboard'}}\"  class=\"btn-icon-clipboard\" ngxClipboard [cbContent]=\"'ui-04'\" (cbOnSuccess) = \"copy = 'ui-04'\">\r\n                <div>\r\n                  <i class=\"ni ni-ui-04\"></i>\r\n                  <span>ui-04</span>\r\n                </div>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/location/location.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/location/location.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-8 pt-5 pt-md-8\" style=\"background: linear-gradient(87deg, #13547a 0, #80d0c7 100%) !important;\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"header-body\">\r\n      <!-- Card stats -->\r\n      <!-- <div class=\"row\">\r\n        <div class=\"col-xl-2 col-lg-6\"></div>\r\n        <div class=\"col-xl-3 col-lg-6\"></div>\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-control-label-white\" style=\"color: white;\" for=\"province\"\r\n              >Thành phố</label\r\n            >\r\n            <select\r\n              name=\"province\"\r\n              id=\"province\"\r\n              class=\"form-control form-control-alternative\"\r\n              [(ngModel)]=\"searchProvince\"\r\n              (ngModelChange)=\"getProvinceCodeAndProvinceId($event)\"\r\n            >\r\n              <option value=\"\" disabled selected hidden>Chọn thành phố cần tìm kiếm</option>\r\n              <option *ngFor=\"let province of provinceList\" [ngValue]=\"province\">{{ province.name }}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-control-label-white\" style=\"color: white;\"\r\n              >Quận</label\r\n            >\r\n            <select\r\n              name=\"status\"\r\n              id=\"status\"\r\n              class=\"form-control form-control-alternative\"\r\n              [(ngModel)]=\"searchDistrict\"\r\n              (ngModelChange)=\"getDistrictId($event)\"\r\n              [disabled]=\"!checkCityCode\"\r\n            >\r\n              <option value=\"\" disabled selected hidden\r\n                >Chọn quận cần tìm kiếm</option\r\n              >\r\n              <option *ngFor=\"let district of districtList\"  [ngValue]=\"district\">\r\n                <span *ngIf=\"district.parent_code==provinceCode\">{{ district.name }}</span>\r\n              </option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-1 col-lg-6\">\r\n          <button class=\"btn btn-icon btn-2 btn-warning\" type=\"button\" style=\"margin-top: 33px\" (click)=\"search()\">\r\n            <span class=\"btn-inner--icon\"><i class=\"fa fa-search\" aria-hidden=\"true\" style=\"color: black;\"></i></span>\r\n          </button>\r\n        </div>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Page content -->\r\n<div class=\"container-fluid mt--7\">\r\n  <!-- Table -->\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card shadow\">\r\n        <div class=\"card-header border-0\">\r\n          <h3 class=\"mb-0\">Danh sách khu vực</h3>\r\n        </div>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table align-items-center table-flush\">\r\n            <thead class=\"thead-light\">\r\n              <tr style=\"text-align: center;\">\r\n                <th scope=\"col\">STT</th>\r\n                <th scope=\"col\" *ngFor=\"let field of fields\">{{ field.label }}</th>\r\n                <!-- <th scope=\"col\">Lựa chọn</th> -->\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let location of locationList; let index = index\" style=\"text-align: center;\">\r\n                <td>{{ (currentPage - 1) * sizePage + index + 1 }}</td>\r\n                <td *ngFor=\"let field of fields\">\r\n                  <span *ngIf=\"field.name!='detail_location'\">{{ location[field.name].name }}</span>\r\n                  <span *ngIf=\"field.name=='detail_location'\">{{ location[field.name] }}</span>\r\n                </td> \r\n                <!-- <td>\r\n                  <button\r\n                    class=\"btn btn-icon btn-sm btn-info\"\r\n                    type=\"button\"\r\n                    placement=\"top\"\r\n                    ngbTooltip=\"Sửa\"\r\n                    data-toggle=\"modal\"\r\n                    data-target=\"#editModal\"\r\n                    (click)=\"currentLocation = location\"\r\n                  >\r\n                    <span class=\"btn-inner--icon\"\r\n                      ><i class=\"ni ni-single-copy-04\"></i\r\n                    ></span>\r\n                  </button>\r\n                </td> -->\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <ngx-spinner></ngx-spinner>\r\n        <app-pagination [totalPages]='totalItems' (pageEmit)='getLocationList(filter, $event, sizePage)'></app-pagination>\r\n      </div>\r\n    </div>\r\n  </div>      \r\n\r\n<!-- Modal Sửa -->\r\n<!-- <div\r\nclass=\"modal fade bd-example-modal-lg\"\r\nid=\"editModal\"\r\ntabindex=\"-1\"\r\nrole=\"dialog\"\r\naria-hidden=\"true\"\r\n> -->\r\n<!-- <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n  <div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n      <h3 class=\"modal-title\">Cập nhật thông tin khu vực</h3>\r\n      <button\r\n        type=\"button\"\r\n        class=\"close\"\r\n        data-dismiss=\"modal\"\r\n        aria-label=\"Close\"\r\n      >\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <div class=\"w-100 d-inline-block\">\r\n        <div *ngFor=\"let field of modal\" class=\"w-50 float-left prl-15\">\r\n          <div class=\"form-group\">\r\n            <label class=\"form-control-label\" [for]=\"field.fin\">{{\r\n              field.label\r\n            }}</label>\r\n            <div class=\"form-group\">\r\n              <input\r\n                *ngIf=\"is_input(field.type)\"\r\n                value=\"{{ currentNode[field.key] }}\"\r\n                [name]=\"field.fin\"\r\n                [id]=\"field.fin\"\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                [readonly]=\"field.readonly\"\r\n              />\r\n              <select\r\n                *ngIf=\"is_select(field.type)\"\r\n                [(ngModel)]=\"currentNode[field.key]\"\r\n                [name]=\"field.fin\"\r\n                [id]=\"field.fin\"\r\n                class=\"form-control\"\r\n              >\r\n                <option value=\"\" disabled selected hidden>{{\r\n                  currentNode[field.key]\r\n                }}</option>\r\n                <option\r\n                  *ngFor=\"let item of data[field.key]\"\r\n                  [ngValue]=\"item.value\"\r\n                  >{{ item.name }}</option\r\n                >\r\n              </select>\r\n              <div *ngIf=\"is_switch(field.type)\">\r\n                <div\r\n                  *ngFor=\"let item of data[field.key]\"\r\n                  class=\"w-50 float-left prl-15\"\r\n                >\r\n                  <div\r\n                    class=\"form-group d-flex justify-content-between align-items-center\"\r\n                  >\r\n                    <label class=\"form-control-label\">{{\r\n                      item.label\r\n                    }}</label>\r\n                    <label\r\n                      class=\"form-control-label custom-toggle\"\r\n                      [for]=\"item.fin\"\r\n                    >\r\n                      <input\r\n                        type=\"checkbox\"\r\n                        checked\r\n                        [id]=\"item.fin\"\r\n                        [name]=\"item.fin\"\r\n                        value=\"{{ currentNode[item.key] }}\"\r\n                        [(ngModel)]=\"currentNode[item.key]\"\r\n                      />\r\n                      <span\r\n                        class=\"custom-toggle-slider rounded-circle\"\r\n                      ></span>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-secondary\"\r\n          data-dismiss=\"modal\"\r\n        >\r\n          Hủy\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-default\"\r\n          data-dismiss=\"modal\"\r\n          (click)=\"updateNodeInfo(currentNode)\"\r\n        >\r\n          Lưu\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n   -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/maps.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/maps.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"header-body\">\r\n      <!-- Card stats -->\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"card card-stats mb-4 mb-xl-0\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Traffic</h5>\r\n                  <span class=\"h2 font-weight-bold mb-0\">350,897</span>\r\n                </div>\r\n                <div class=\"col-auto\">\r\n                  <div class=\"icon icon-shape bg-danger text-white rounded-circle shadow\">\r\n                    <i class=\"fas fa-chart-bar\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\r\n                <span class=\"text-success mr-2\"><i class=\"fa fa-arrow-up\"></i> 3.48%</span>\r\n                <span class=\"text-nowrap\">Since last month</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"card card-stats mb-4 mb-xl-0\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">New users</h5>\r\n                  <span class=\"h2 font-weight-bold mb-0\">2,356</span>\r\n                </div>\r\n                <div class=\"col-auto\">\r\n                  <div class=\"icon icon-shape bg-warning text-white rounded-circle shadow\">\r\n                    <i class=\"fas fa-chart-pie\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\r\n                <span class=\"text-danger mr-2\"><i class=\"fas fa-arrow-down\"></i> 3.48%</span>\r\n                <span class=\"text-nowrap\">Since last week</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"card card-stats mb-4 mb-xl-0\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Sales</h5>\r\n                  <span class=\"h2 font-weight-bold mb-0\">924</span>\r\n                </div>\r\n                <div class=\"col-auto\">\r\n                  <div class=\"icon icon-shape bg-yellow text-white rounded-circle shadow\">\r\n                    <i class=\"fas fa-users\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\r\n                <span class=\"text-warning mr-2\"><i class=\"fas fa-arrow-down\"></i> 1.10%</span>\r\n                <span class=\"text-nowrap\">Since yesterday</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"card card-stats mb-4 mb-xl-0\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Performance</h5>\r\n                  <span class=\"h2 font-weight-bold mb-0\">49,65%</span>\r\n                </div>\r\n                <div class=\"col-auto\">\r\n                  <div class=\"icon icon-shape bg-info text-white rounded-circle shadow\">\r\n                    <i class=\"fas fa-percent\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\r\n                <span class=\"text-success mr-2\"><i class=\"fas fa-arrow-up\"></i> 12%</span>\r\n                <span class=\"text-nowrap\">Since last month</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Page content -->\r\n<div class=\"container-fluid mt--7\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card shadow border-0\">\r\n        <div id=\"map-canvas\" class=\"map-canvas\" data-lat=\"40.748817\" data-lng=\"-73.985428\" style=\"height: 600px;\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-location/new-location.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-location/new-location.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-8 pt-5 pt-md-8\" style=\"background: linear-gradient(87deg, #13547a 0, #80d0c7 100%) !important;\">\r\n  \r\n</div>\r\n<div class=\"container-fluid mt--7\">\r\n  <div class=\"\">\r\n    \r\n    <div class=\"\">\r\n      <div class=\"card bg-secondary shadow\">\r\n        <div class=\"card-header bg-white border-0\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-8\">\r\n              <h3 class=\"mb-0\">Tạo mới khu vực</h3>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form>\r\n            <h6 class=\"heading-small text-muted mb-4\">Thông tin khu vực</h6>\r\n            <div class=\"pl-lg-4\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"province\">Thành phố <p style=\"display:inline-flex !important; color: red \">*</p></label>\r\n                    <select *ngIf=\"!isProvinceInvalid\" name=\"province\" id=\"province\" class=\"form-control form-control-alternative\" [(ngModel)]=\"chosenProvince\" (ngModelChange)=\"checkProvince($event)\">\r\n                      <option value=\"\" disabled selected hidden>Chọn thành phố</option>\r\n                      <option *ngFor=\"let province of provinceList\" [ngValue]=\"province\">{{ province.name }}</option>\r\n                    </select>     \r\n                    <div *ngIf=\"isProvinceInvalid\" class=\"form-group has-danger\">\r\n                      <select name=\"province\" id=\"province\" id=\"province\" class=\"form-control is-invalid\" [(ngModel)]=\"chosenProvince\" (ngModelChange)=\"checkProvince($event)\">\r\n                        <option value=\"\" disabled selected hidden class=\"is-invalid\">Thành phố không được để trống</option>\r\n                        <option *ngFor=\"let province of provinceList\" [ngValue]=\"province\">{{ province.name }}</option>\r\n                      </select> \r\n                    </div>        \r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"district\">Quận, huyện <p style=\"display:inline-flex !important; color: red \">*</p></label>\r\n                    <select *ngIf=\"!isDistrictInvalid\" [disabled]=\"!checkSelectedProvince\" name=\"district\" id=\"district\" class=\"form-control form-control-alternative\" [(ngModel)]=\"chosenDistrict\" (ngModelChange)=\"checkDistrict($event)\">\r\n                      <option value=\"\" disabled selected hidden>Chọn quận, huyện</option>\r\n                      <option *ngFor=\"let district of districtList\" [ngValue]=\"district\"><span >{{ district.name }}</span></option>\r\n                    </select>     \r\n                    <div *ngIf=\"isDistrictInvalid\" class=\"form-group has-danger\">\r\n                      <select  name=\"district\" id=\"district\" id=\"district\" class=\"form-control is-invalid\" [(ngModel)]=\"chosenDistrict\" (ngModelChange)=\"checkDistrict($event)\">\r\n                        <option value=\"\" disabled selected hidden class=\"is-invalid\">Quận không được để trống</option>\r\n                        <option *ngFor=\"let district of districtList\" [ngValue]=\"district\"><span >{{ district.name }}</span></option>\r\n                      </select> \r\n                    </div>        \r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"sub_district\">Phường, xã <p style=\"display:inline-flex !important; color: red \">*</p></label>\r\n                    <select *ngIf=\"!isSubDistrictInvalid\" [disabled]=\"!checkSelectedDistrict\" name=\"sub_district\" id=\"sub_district\" class=\"form-control form-control-alternative\"  [(ngModel)]=\"chosenSubDistrict\" (ngModelChange)=\"checkSubDistrict($event)\">\r\n                      <option value=\"\" disabled selected hidden>Chọn phường</option>\r\n                      <option *ngFor=\"let sub_district of sub_districtList\" [ngValue]=\"sub_district\"><span *ngIf=\"districtCode==sub_district.parent_code\">{{ sub_district.name }}</span></option>\r\n                    </select>     \r\n                    <div *ngIf=\"isSubDistrictInvalid\" class=\"form-group has-danger\">\r\n                      <select  name=\"location\" id=\"location\" id=\"inputLocation\" class=\"form-control is-invalid\" [(ngModel)]=\"chosenSubDistrict\" (ngModelChange)=\"checkSubDistrict($event)\">\r\n                        <option value=\"\" disabled selected hidden class=\"is-invalid\">Phường không được để trống</option>\r\n                        <option *ngFor=\"let sub_district of sub_districtList\" [ngValue]=\"sub_district\"><span *ngIf=\"districtCode==sub_district.parent_code\">{{ sub_district.name }}</span></option>\r\n                      </select> \r\n                    </div>        \r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"detail\">Địa chỉ <p style=\"display:inline-flex !important; color: red \">*</p></label>\r\n                    <div [ngClass]=\"{'has-danger': isDetailLocationInvalid == true}\">\r\n                      <input  name=\"detail\" type=\"text\" id=\"detail\" class=\"form-control form-control-alternative\" [(ngModel)]=\"newLocation.detail_location\" (input)=\"checkDetail($event.target.value)\" [placeholder]=\"isDetailLocationInvalid ? 'Địa chỉ cụ thể không được để trống' : 'Địa chỉ cụ thể'\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"latitude\">Vĩ độ <p style=\"display:inline-flex !important; color: red \">*</p></label>\r\n                    <div [ngClass]=\"{'has-danger': isLatitudeInvalid == true}\">\r\n                      <input class=\"form-control form-control-alternative\" name=\"latitude\" type=\"number\" id=\"latitude\" [(ngModel)]=\"newLocation.latitude\" (input)=\"checkLatitude($event.target.value)\" [placeholder]=\"isLatitudeInvalid ? 'Vĩ độ không được để trống' : 'Vĩ độ'\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"longitude\">Kinh độ <p style=\"display:inline-flex !important; color: red \">*</p></label>\r\n                    <div [ngClass]=\"{'has-danger': isLongitudeInvalid == true}\">\r\n                      <input \r\n                        name=\"longitude\" type=\"number\" id=\"longitude\" class=\"form-control form-control-alternative\"\r\n                         [(ngModel)]=\"newLocation.longitude\" (input)=\"checkLongitude($event.target.value)\" [placeholder]=\"isLongitudeInvalid ? 'Kinh độ không được để trống' : 'Kinh độ'\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                  <div style=\"margin-bottom: 420px;\">\r\n                    <app-support-map (newItemEvent)=\"addItem($event)\"></app-support-map>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <hr style=\"margin: 0px;\">\r\n        <div class=\"col-lg-4 card-body\" style=\"padding-top:15px;\">\r\n            <button type=\"button\" class=\"btn btn-success\" style=\"margin-left:24px;\" (click)=\"createLocation()\" >Lưu</button>\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"redirect()\">Thoát</button>\r\n        </div>         \r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-node/new-node.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-node/new-node.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-8 pt-5 pt-md-8\" style=\"background: linear-gradient(87deg, #13547a 0, #80d0c7 100%) !important;\">\r\n  \r\n</div>\r\n<div class=\"container-fluid mt--7\">\r\n  <div class=\"\">\r\n    \r\n    <div class=\"\">\r\n      <div class=\"card bg-secondary shadow\">\r\n        <div class=\"card-header bg-white border-0\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-8\">\r\n              <h3 class=\"mb-0\">Tạo mới node</h3>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form>\r\n            <h6 class=\"heading-small text-muted mb-4\">Thông tin node</h6>\r\n            <div class=\"pl-lg-4\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"location\">Khu vực <p style=\"display:inline-flex !important; color: red \">*</p></label>\r\n                    <select *ngIf=\"!isLocationInvalid\" name=\"location\" id=\"location\" class=\"form-control form-control-alternative\" [(ngModel)]=\"newNode.location\" (ngModelChange)=\"checkLocation($event)\">\r\n                      <option value=\"\" disabled selected hidden>Chọn khu vực</option>\r\n                      <option *ngFor=\"let location of locationList\" [ngValue]=\"location._id\">{{ location.detail_location }}, {{ location.district.name }}, {{ location.province.name }}</option>\r\n                    </select>     \r\n                    <div *ngIf=\"isLocationInvalid\" class=\"form-group has-danger\">\r\n                      <select  name=\"location\" id=\"location\" id=\"location\" class=\"form-control is-invalid\" [(ngModel)]=\"newNode.location\" (ngModelChange)=\"checkLocation($event)\">\r\n                        <option value=\"\" disabled selected hidden class=\"is-invalid\">Khu vực không được để trống</option>\r\n                        <option *ngFor=\"let location of locationList\" [ngValue]=\"location._id\">{{ location.detail_location }}, {{ location.district.name }}, {{ location.province.name }}</option>\r\n                      </select> \r\n                    </div>        \r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"ip\">IP <p style=\"display:inline-flex !important; color: red \">*</p></label>\r\n                    <div [ngClass]=\"{'has-danger': isIpInvalid == true}\">\r\n                      <input class=\"form-control form-control-alternative\" name=\"ip\" type=\"text\" id=\"ip\" [(ngModel)]=\"newNode.ip\" (input)=\"checkIp($event.target.value)\" [placeholder]=\"isIPInvalid ? 'IP không được để trống' : 'IP'\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"name\">Tên node <p style=\"display:inline-flex !important; color: red \">*</p></label>\r\n                    <div [ngClass]=\"{'has-danger': isNameInvalid == true}\">\r\n                      <input  name=\"name\" type=\"text\" id=\"name\" class=\"form-control form-control-alternative\" [(ngModel)]=\"newNode.name\" disabled [placeholder]=\"newNode.name\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-control-label\">Các cảm biến <p style=\"display:inline-flex !important; color: red \">*</p></label>\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"form-control-label\">Nhiệt độ</label>\r\n                                </div>\r\n                            </div>     \r\n                            <div class=\"col\">\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"custom-toggle\" for=\"temperature_status\">\r\n                                        <input type=\"checkbox\" checked id=\"temperature_status\" [(ngModel)]=\"newNode.temperature_status\" name=\"temperature_status\">\r\n                                        <span class=\"custom-toggle-slider rounded-circle\"></span>\r\n                                    </label>\r\n                                </div>\r\n                            </div>   \r\n                            <div class=\"col\">\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"form-control-label\">Độ ẩm</label>\r\n                                </div>\r\n                            </div>     \r\n                            <div class=\"col\">\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"custom-toggle\" for=\"humidity_status\">\r\n                                        <input type=\"checkbox\" checked id=\"humidity_status\" [(ngModel)]=\"newNode.humidity_status\" name=\"humidity_status\">\r\n                                        <span class=\"custom-toggle-slider rounded-circle\"></span>\r\n                                    </label>\r\n                                </div>\r\n                            </div>   \r\n                            <div class=\"col\">\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"form-control-label\">Khí CO</label>\r\n                                </div>\r\n                            </div>     \r\n                            <div class=\"col\">\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"custom-toggle\" for=\"co_status\">\r\n                                        <input type=\"checkbox\" checked id=\"co_status\" [(ngModel)]=\"newNode.co_status\" name=\"co_status\">\r\n                                        <span class=\"custom-toggle-slider rounded-circle\"></span>\r\n                                    </label>\r\n                                </div>\r\n                            </div>   \r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"form-control-label\">Khí CO2</label>\r\n                                </div>\r\n                            </div>     \r\n                            <div class=\"col\">\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"custom-toggle\" for=\"co2_status\">\r\n                                        <input type=\"checkbox\" checked id=\"co2_status\" [(ngModel)]=\"newNode.co2_status\" name=\"co2_status\">\r\n                                        <span class=\"custom-toggle-slider rounded-circle\"></span>\r\n                                    </label>\r\n                                </div>\r\n                            </div>   \r\n                            <div class=\"col\">\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"form-control-label\">Bụi PM2.5</label>\r\n                                </div>\r\n                            </div>     \r\n                            <div class=\"col\">\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"custom-toggle\" for=\"dust_status\">\r\n                                        <input type=\"checkbox\" checked id=\"dust_status\" [(ngModel)]=\"newNode.dust_status\" name=\"dust_status\">\r\n                                        <span class=\"custom-toggle-slider rounded-circle\"></span>\r\n                                    </label>\r\n                                </div>\r\n                            </div>   \r\n                            <div class=\"col\">\r\n                                \r\n                            </div>     \r\n                            <div class=\"col\">\r\n                                \r\n                            </div>   \r\n                        </div>\r\n                        \r\n                    </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <hr style=\"margin: 0px;\">\r\n        <div class=\"col-lg-4 card-body\" style=\"padding-top:15px;\">\r\n            <button type=\"button\" class=\"btn btn-success\" style=\"margin-left:24px;\" (click)=\"createNode()\" >Tạo mới</button>\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"redirect()\" >Thoát</button>\r\n        </div>         \r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-user/new-user.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-user/new-user.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-8 pt-5 pt-md-8\" style=\"background: linear-gradient(87deg, #13547a 0, #80d0c7 100%) !important;\">\r\n  \r\n</div>\r\n<div class=\"container-fluid mt--7\">\r\n  <div class=\"\">\r\n    \r\n    <div class=\"\">\r\n      <div class=\"card bg-secondary shadow\">\r\n        <div class=\"card-header bg-white border-0\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-8\">\r\n              <h3 class=\"mb-0\">Tạo mới tài khoản</h3>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form>\r\n            <h6 class=\"heading-small text-muted mb-4\">Thông tin tài khoản</h6>\r\n            <div class=\"pl-lg-4\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"name\">Tên đăng nhập <p style=\"display:inline-flex !important; color: red \">*</p></label>\r\n                    <div [ngClass]=\"{'has-danger': isUsernameInvalid == true}\">\r\n                      <input \r\n                        name=\"username\" type=\"text\" id=\"username\" class=\"form-control form-control-alternative\" [(ngModel)]=\"newUser.username\" [placeholder]=\"newUser.username\" disabled>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"name\">Tên người dùng <p style=\"display:inline-flex !important; color: red \">*</p><span style=\" color: red; font-size: 13px; \" *ngIf=\"!checkValidationName.length\">Tên người dùng cần chứa ít nhất 5 ký tự và nhiều nhất 255 ký tự</span></label>\r\n                    <div [ngClass]=\"{'has-danger': isNameInvalid == true || checkValidationName.length == false}\">\r\n                      <input \r\n                        name=\"name\" type=\"text\" id=\"name\" class=\"form-control form-control-alternative\" [(ngModel)]=\"newUser.name\" (input)=\"checkName($event.target.value)\" [placeholder]=\"isNameInvalid ? 'Họ và tên không được để trống' : 'Họ và tên'\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"password\">Mật khẩu <p style=\"display:inline-flex !important; color: red; font-size: 14px; \">*</p></label>\r\n                    <div>\r\n                      <input \r\n                        name=\"password\" type=\"text\" id=\"password\" class=\"form-control form-control-alternative\" placeholder=\"123456\" disabled>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"role\">Vai trò <p style=\"display:inline-flex !important; color: red \">*</p></label>\r\n                    <select *ngIf=\"!isRoleInvalid\" [(ngModel)]=\"newUser.role\" (ngModelChange)=\"checkRole($event)\" name=\"role\" id=\"role\" class=\"form-control form-control-alternative\">\r\n                      <option value=\"\" disabled selected hidden>Chọn Role</option>\r\n                      <option *ngFor=\"let role of roleList\" [ngValue]=\"role._id\">{{ role.name }}</option>\r\n                    </select>     \r\n                    <div *ngIf=\"isRoleInvalid\" class=\"form-group has-danger\">\r\n                      <select  [(ngModel)]=\"newUser.role\" (ngModelChange)=\"checkRole($event)\" name=\"role\" id=\"role\" class=\"form-control is-invalid\">\r\n                        <option value=\"\" disabled selected hidden class=\"is-invalid\">Vai trò không được để trống</option>\r\n                        <option *ngFor=\"let role of roleList\" [ngValue]=\"role._id\">{{ role.name }}</option>\r\n                      </select> \r\n                    </div>        \r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"email\">Email <p style=\"display:inline-flex !important; color: red \">*</p><span style=\" color: red; font-size: 13px; \" *ngIf=\"!checkValidationEmail.length\">Email cần chứa ít nhất 6 ký tự và nhiều nhất 255 ký tự</span><span style=\" color: red; font-size: 13px; \" *ngIf=\"!checkValidationEmail.unique\">Email đã tồn tại</span></label>\r\n                    <div [ngClass]=\"{'has-danger': isEmailInvalid == true || checkValidationEmail.length == false || checkValidationEmail.unique == false}\">\r\n                      <input \r\n                        name=\"email\" type=\"text\" id=\"email\" class=\"form-control form-control-alternative\" [(ngModel)]=\"newUser.email\" (input)=\"checkEmail($event.target.value)\" [placeholder]=\"isEmailInvalid ? 'Email không được để trống' : 'Email'\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"phone\">Điện thoại <p style=\"display:inline-flex !important; color: red \">*</p><span style=\" color: red; font-size: 13px; \" *ngIf=\"!checkValidationPhone.unique\">Số điện thoại đã tồn tại</span></label>\r\n                    <div [ngClass]=\"{'has-danger': isPhoneInvalid == true || checkValidationPhone.unique == false}\">\r\n                      <input \r\n                        name=\"phone\" type=\"text\" id=\"phone\" class=\"form-control form-control-alternative\" [(ngModel)]=\"newUser.phone\" (input)=\"checkPhone($event.target.value)\" [placeholder]=\"isPhoneInvalid ? 'Điện thoại không được để trống' : 'Điện thoại'\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                  \r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <hr style=\"margin: 0px;\">\r\n        <div class=\"col-lg-4 card-body\" style=\"padding-top:15px;\">\r\n            <button type=\"button\" class=\"btn btn-success\" style=\"margin-left:24px;\" (click)=\"createUser()\">Lưu</button>\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"redirect()\">Thoát</button>\r\n        </div>         \r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/node/node.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/node/node.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-8 pt-5 pt-md-8\" style=\"background: linear-gradient(87deg, #13547a 0, #80d0c7 100%) !important;\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"header-body\">\r\n      <!-- Card stats -->\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xl-6\">\r\n              <div class=\"form-group\">\r\n                <label\r\n                  class=\"form-control-label-white\"\r\n                  style=\"color: white;\"\r\n                  for=\"inputLocation\"\r\n                  >Tên node</label\r\n                >\r\n                <div class=\"input-group mb-4\">\r\n                  <input\r\n                    class=\"form-control\"\r\n                    placeholder=\"Nhập tên node cần tìm kiếm\"\r\n                    type=\"text\"\r\n                    [(ngModel)]=\"searchName\"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-6\">\r\n              <div class=\"form-group\">\r\n                <label\r\n                  class=\"form-control-label-white\"\r\n                  style=\"color: white;\"\r\n                  for=\"inputLocation\"\r\n                  >Địa chỉ cụ thể</label\r\n                >\r\n                <div class=\"input-group mb-4\">\r\n                  <input\r\n                    class=\"form-control\"\r\n                    placeholder=\"Nhập địa chỉ cần tìm kiếm\"\r\n                    type=\"text\"\r\n                    [(ngModel)]=\"searchDetailLocation\"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xl-6\">\r\n              <div class=\"form-group\">\r\n                <label class=\"form-control-label-white\" style=\"color: white;\"\r\n                  >Quận</label\r\n                >\r\n                <select\r\n                  name=\"district\"\r\n                  id=\"district\"\r\n                  class=\"form-control form-control-alternative\"\r\n                  [(ngModel)]=\"searchDistrict\" \r\n                >\r\n                  <option value=\"\" disabled selected hidden\r\n                    >Chọn quận cần tìm kiếm</option\r\n                  >\r\n                  <option *ngFor=\"let district of districtList\" name=\"district\" [ngValue]=\"district._id\" id=\"district\">{{ district.name }}</option>\r\n                  <option value=\"all\">Tất cả</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-6\">\r\n              <div class=\"form-group\">\r\n                <label class=\"form-control-label-white\" style=\"color: white;\"\r\n                  >Trạng thái</label\r\n                >\r\n                <select\r\n                  name=\"status\"\r\n                  id=\"status\"\r\n                  class=\"form-control form-control-alternative\"\r\n                  [(ngModel)]=\"searchStatus\" \r\n                >\r\n                  <option value=\"\" disabled selected hidden\r\n                    >Chọn trạng thái cần tìm kiếm</option\r\n                  >\r\n                  <option *ngFor=\"let status of data.status\" [ngValue]=\"status.value\">{{ status.name }}</option>\r\n                  <option value=\"all\">Tất cả</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-2\">\r\n          <label class=\"form-control-label-white\" style=\"color: white;\"\r\n                  ></label\r\n                >\r\n          <div class=\"row\" style=\"margin-top: 8px;\">\r\n            <button type=\"button\" class=\"btn btn-primary\" style=\"background-color: #FDC667; border-color: #FEA200;\" (click)=\"search()\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\r\n            <button type=\"button\" class=\"btn btn-primary\" style=\"background-color: #0165B9; border-color: #0165B9;\" (click)=\"reset()\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Page content -->\r\n<div class=\"container-fluid mt--7\">\r\n  <!-- Table -->\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card shadow\">\r\n        <div class=\"card-header border-0\">\r\n          <h3 class=\"mb-0\">Danh sách các node</h3>\r\n        </div>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table align-items-center table-flush\" *ngIf=\"isHavingEditNodePermission!=0\">\r\n            <thead class=\"thead-light\">\r\n              <tr style=\"text-align: center;\">\r\n                <th scope=\"col\">STT</th>\r\n                <th scope=\"col\" *ngFor=\"let field of fields\">{{ field.label }}</th>\r\n                <th scope=\"col\" *ngFor=\"let env of envs\">{{ env.label }}</th>\r\n                <th scope=\"col\" *ngIf=\"isHavingEditNodePermission!=3\">Lựa chọn</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let node of nodeList; let index = index\" style=\"text-align: center;\">\r\n                <td>{{ (currentPage - 1) * sizePage + index + 1 }}</td>\r\n                <td *ngFor=\"let item of key_data\">\r\n                  <span *ngIf=\"is_string(item.type) && item.key!='location_info'\">{{ node[item.key] }}</span>\r\n                  <span *ngIf=\"is_string(item.type) && item.key=='location_info'\">{{ node[item.key].detail_location }}, {{ node.district.name_with_type }}, {{ node.province.name_with_type }}</span>\r\n                  <div *ngIf=\"is_boolean(item.type)\">\r\n                    <span\r\n                      [ngClass]=\"[\r\n                        'badge',\r\n                        'badge-pill',\r\n                        node[item.key] ? 'badge-success' : 'badge-danger'\r\n                      ]\"\r\n                      >{{ status_vn(node[item.key]) }}</span\r\n                    >\r\n                  </div>\r\n                </td>\r\n                <td *ngIf=\"isHavingEditNodePermission!=3\">\r\n                  <button\r\n                    class=\"btn btn-icon btn-sm btn-info\"\r\n                    type=\"button\"\r\n                    placement=\"top\"\r\n                    ngbTooltip=\"Sửa\"\r\n                    data-toggle=\"modal\"\r\n                    data-target=\"#editModal\"\r\n                    (click)=\"currentNode = node\"\r\n                  >\r\n                    <span class=\"btn-inner--icon\"\r\n                      ><i class=\"ni ni-single-copy-04\"></i\r\n                    ></span>\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <h4 class=\"mb-0\" style=\"padding: 10px 24px 20px 24px;\" *ngIf=\"nodeList.length==0\">Không tìm thấy kết quả phù hợp</h4>\r\n        </div>\r\n        <ngx-spinner></ngx-spinner>\r\n        <app-pagination [totalPages]='totalItems' (pageEmit)='getNodeList(filter, $event, sizePage)'></app-pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Modal Sửa -->\r\n  <div\r\n    class=\"modal fade bd-example-modal-lg\"\r\n    id=\"editModal\"\r\n    tabindex=\"-1\"\r\n    role=\"dialog\"\r\n    aria-hidden=\"true\"\r\n  >\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h3 class=\"modal-title\">Cập nhật thông tin node</h3>\r\n          <button\r\n            type=\"button\"\r\n            class=\"close\"\r\n            data-dismiss=\"modal\"\r\n            aria-label=\"Close\"\r\n          >\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"w-100 d-inline-block\">\r\n            <div *ngFor=\"let field of modal\" class=\"w-50 float-left prl-15\">\r\n              <div class=\"form-group\">\r\n                <label class=\"form-control-label\" [for]=\"field.fin\">{{\r\n                  field.label\r\n                }}</label>\r\n                <div class=\"form-group\">\r\n                  <input\r\n                    *ngIf=\"is_input(field.type) && field.key!='location_info'\"\r\n                    value=\"{{ currentNode[field.key] }}\"\r\n                    [name]=\"field.fin\"\r\n                    [id]=\"field.fin\"\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    [readonly]=\"field.readonly\"\r\n                  />\r\n                  <input\r\n                    *ngIf=\"is_input(field.type) && field.key=='location_info'\"\r\n                    value=\"{{ getFullLocation(field) }}\"\r\n                    [name]=\"field.fin\"\r\n                    [id]=\"field.fin\"\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    [readonly]=\"field.readonly\"\r\n                  />\r\n                  <select\r\n                    *ngIf=\"is_select(field.type)\"\r\n                    [(ngModel)]=\"currentNode[field.key]\"\r\n                    [name]=\"field.fin\"\r\n                    [id]=\"field.fin\"\r\n                    class=\"form-control form-control-alternative\"\r\n                  >\r\n                    <option\r\n                      *ngFor=\"let item of data[field.key]\"\r\n                      [ngValue]=\"item.value\"\r\n                      >{{ item.name }}</option\r\n                    >\r\n                  </select>\r\n                  <div *ngIf=\"is_switch(field.type)\">\r\n                    <div\r\n                      *ngFor=\"let item of data[field.key]\"\r\n                      class=\"w-50 float-left prl-15\"\r\n                    >\r\n                      <div\r\n                        class=\"form-group d-flex justify-content-between align-items-center\"\r\n                      >\r\n                        <label class=\"form-control-label\">{{\r\n                          item.label\r\n                        }}</label>\r\n                        <label\r\n                          class=\"form-control-label custom-toggle\"\r\n                          [for]=\"item.fin\"\r\n                        >\r\n                          <input\r\n                            type=\"checkbox\"\r\n                            checked\r\n                            [id]=\"item.fin\"\r\n                            [name]=\"item.fin\"\r\n                            value=\"{{ currentNode[item.key] }}\"\r\n                            [(ngModel)]=\"currentNode[item.key]\"\r\n                          />\r\n                          <span\r\n                            class=\"custom-toggle-slider rounded-circle\"\r\n                          ></span>\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-secondary\"\r\n              data-dismiss=\"modal\"\r\n            >\r\n              Hủy\r\n            </button>\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-default\"\r\n              data-dismiss=\"modal\"\r\n              style=\"background-color: #004D90; border-color:#013E7A\"\r\n              (click)=\"updateNodeInfo(currentNode)\"\r\n            >\r\n              Lưu\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pagination/pagination.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pagination/pagination.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"card-footer py-4\">\r\n    <nav aria-label=\"...\">\r\n      <ul class=\"pagination justify-content-end mb-0\">\r\n        <li [ngClass]=\"{'page-item': true, 'disabled':currentPage==1}\">\r\n          <a class=\"page-link\" tabindex=\"-1\" (click)=\"pagination(1)\">\r\n            <i class=\"fas fa-angle-left\"></i>\r\n            <i class=\"fas fa-angle-left\"></i>\r\n            <span class=\"sr-only\">Trang đầu</span>\r\n          </a>\r\n        </li>\r\n        <li [ngClass]=\"{'page-item': true, 'disabled':currentPage==1}\" (click)=\"pagination(currentPage-1)\">\r\n          <a class=\"page-link\" tabindex=\"-1\">\r\n            <i class=\"fas fa-angle-left\"></i>\r\n            <span class=\"sr-only\">Trước</span>\r\n          </a>\r\n        </li>\r\n        <li *ngFor=\"let page of pages\" [ngClass]=\"{'active': page==currentPage, 'page-item':true}\">\r\n          <a class=\"page-link\" (click)=\"pagination(page)\">{{page}}</a>\r\n        </li>\r\n        <li [ngClass]=\"{'page-item': true, 'disabled':currentPage==totalPage}\">\r\n          <a class=\"page-link\" (click)=\"pagination(currentPage+1)\">\r\n            <i class=\"fas fa-angle-right\"></i>\r\n            <span class=\"sr-only\">Sau</span>\r\n          </a>\r\n        </li>\r\n        <li [ngClass]=\"{'page-item': true, 'disabled':currentPage==totalPage}\">\r\n          <a class=\"page-link\" (click)=\"pagination(totalPage)\">\r\n            <i class=\"fas fa-angle-right\"></i>\r\n            <i class=\"fas fa-angle-right\"></i>\r\n            <span class=\"sr-only\">Trang cuối</span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n</div> -->\r\n\r\n<div class=\"card-footer py-4\">\r\n  <nav aria-label=\"...\">\r\n    <ul class=\"pagination justify-content-end mb-0\" *ngIf=\"pager.pages && pager.pages.length\">\r\n      <li [ngClass]=\"{'page-item': true, 'disabled':pager.currentPage === 1}\">\r\n        <a class=\"page-link\" tabindex=\"-1\" (click)=\"setPage(1)\">\r\n          <i class=\"fas fa-angle-left\"></i>\r\n          <i class=\"fas fa-angle-left\"></i>\r\n          <span class=\"sr-only\">Trang đầu</span>\r\n        </a>\r\n      </li>\r\n      <li [ngClass]=\"{'page-item': true, 'disabled':pager.currentPage === 1}\" (click)=\"setPage(pager.currentPage - 1)\">\r\n        <a class=\"page-link\" tabindex=\"-1\">\r\n          <i class=\"fas fa-angle-left\"></i>\r\n          <span class=\"sr-only\">Trước</span>\r\n        </a>\r\n      </li>\r\n      <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{'active': pager.currentPage === page, 'page-item':true}\">\r\n        <a *ngIf=\"pager.currentPage === page\" style=\"background-color: #004D90; border-color:#013E7A\" class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\r\n        <a *ngIf=\"pager.currentPage !== page\" class=\"page-link\" (click)=\"setPage(page)\">{{page}}</a>\r\n      </li>\r\n      <li [ngClass]=\"{'page-item': true, 'disabled':pager.currentPage === pager.totalPages}\">\r\n        <a class=\"page-link\" (click)=\"setPage(pager.currentPage + 1)\">\r\n          <i class=\"fas fa-angle-right\"></i>\r\n          <span class=\"sr-only\">Sau</span>\r\n        </a>\r\n      </li>\r\n      <li [ngClass]=\"{'page-item': true, 'disabled':pager.currentPage === pager.totalPages}\">\r\n        <a class=\"page-link\" (click)=\"setPage(pager.totalPages)\">\r\n          <i class=\"fas fa-angle-right\"></i>\r\n          <i class=\"fas fa-angle-right\"></i>\r\n          <span class=\"sr-only\">Trang cuối</span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pending-node/pending-node.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pending-node/pending-node.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-8 pt-5 pt-md-8\" style=\"background: linear-gradient(87deg, #13547a 0, #80d0c7 100%) !important;\"></div>\r\n<!-- Page content -->\r\n<div class=\"container-fluid mt--7\">\r\n  <!-- Table -->\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card shadow\">\r\n        <div class=\"card-header border-0\">\r\n          <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link active\" id=\"pending-tab\" data-toggle=\"tab\" href=\"#pending\" role=\"tab\" aria-controls=\"pending\" aria-selected=\"true\" (click)=\"getPending()\">Chờ phê duyệt</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" id=\"approved-tab\" data-toggle=\"tab\" href=\"#approved\" role=\"tab\" aria-controls=\"approved\" aria-selected=\"false\" (click)=\"getApprove()\">Được phê duyệt</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" id=\"unapproved-tab\" data-toggle=\"tab\" href=\"#unapproved\" role=\"tab\" aria-controls=\"unapproved\" aria-selected=\"false\" (click)=\"getDisapprove()\">Không được phê duyệt</a>\r\n            </li>\r\n          </ul>\r\n          <!-- <div class=\"tab-content\" id=\"myTabContent\">\r\n            <h3 class=\"mb-0 tab-pane fade show active\" id=\"pending\" role=\"tabpanel\" aria-labelledby=\"pending-tab\">Danh sách người dùng chờ phê duyệt</h3>\r\n            <div class=\"mb-0 tab-pane fade\" id=\"approved\" role=\"tabpanel\" aria-labelledby=\"approved-tab\">Danh sách người dùng được phê duyệt</div>\r\n            <div class=\"mb-0 tab-pane fade\" id=\"unapproved\" role=\"tabpanel\" aria-labelledby=\"unapproved-tab\">Danh sách người dùng không được phê duyệt</div>\r\n          </div> -->\r\n        </div>\r\n        <div class=\"tab-content\" id=\"myTabContent\">\r\n          <div class=\"mb-0 tab-pane fade show active\" id=\"pending\" role=\"tabpanel\" aria-labelledby=\"pending-tab\">\r\n            <h3 class=\"mb-0\" style=\"padding: 10px 24px 20px 24px;\">Danh sách các node đang chờ phê duyệt</h3>\r\n            <div class=\"table-responsive tab-pane fade show active\" id=\"pending\" role=\"tabpanel\" aria-labelledby=\"pending-tab\">\r\n              <table class=\"table align-items-center table-flush\">\r\n                <thead class=\"thead-light\">\r\n                  <tr style=\"text-align: center;\">\r\n                    <th scope=\"col\">STT</th>\r\n                    <th scope=\"col\" *ngFor=\"let field of fields\">{{ field.label }}</th>\r\n                    <th scope=\"col\">Lựa chọn</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let node of nodeList; let index = index\" style=\"text-align: center;\">\r\n                    <td>{{ (currentPage - 1) * sizePage + index + 1 }}</td>\r\n                    <td *ngFor=\"let key_data of key_data\" >\r\n                      <span *ngIf=\"key_data.key!='location_info'\">{{ node[key_data.key] }}</span>\r\n                      <span *ngIf=\"key_data.key=='location_info'\">{{ node[key_data.key].detail_location }}, {{ node.district.name }}, {{ node.province.name }}</span>\r\n                    </td>\r\n                    <td>\r\n                      <button class=\"btn btn-icon btn-sm btn-info\" type=\"button\" placement=\"top\"\r\n                        data-toggle=\"modal\" data-target=\"#approveModal\" (click)=\"currentNode = node\">Phê duyệt\r\n                      </button>\r\n                      <button class=\"btn btn-icon btn-sm btn-danger\" style=\"margin-right: 8px;\"\r\n                      type=\"button\" placement=\"top\" data-toggle=\"modal\"\r\n                      data-target=\"#disapproveModal\" (click)=\"currentNode = node\">Từ chối\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <h4 class=\"mb-0\" style=\"padding: 10px 24px 20px 24px;\" *ngIf=\"!checkNodeList\">Không có dữ liệu</h4>\r\n            </div>\r\n            <ngx-spinner></ngx-spinner>\r\n            <app-pagination [totalPages]='totalItems' (pageEmit)='getNodeList(filter, $event, sizePage)'></app-pagination>\r\n          </div>\r\n          <div class=\"mb-0 tab-pane fade\" id=\"approved\" role=\"tabpanel\" aria-labelledby=\"approved-tab\" >\r\n            <h3 class=\"mb-0\" style=\"padding: 10px 24px 20px 24px;\">Danh sách các node được phê duyệt</h3>\r\n            <div class=\"table-responsive tab-pane fade show active\" id=\"pending\" role=\"tabpanel\" aria-labelledby=\"pending-tab\">\r\n              <table class=\"table align-items-center table-flush\">\r\n                <thead class=\"thead-light\">\r\n                  <tr style=\"text-align: center;\">\r\n                    <th scope=\"col\">STT</th>\r\n                    <th scope=\"col\" *ngFor=\"let field of fields\">{{ field.label }}</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let node1 of approveNodeList; let index = index\" style=\"text-align: center;\">\r\n                    <td>{{ (currentPage - 1) * sizePage + index + 1 }}</td>\r\n                    <td *ngFor=\"let key_data of key_data\" >\r\n                      <span *ngIf=\"key_data.key!='location_info'\">{{ node1[key_data.key] }}</span>\r\n                      <span *ngIf=\"key_data.key=='location_info'\">{{ node1[key_data.key].detail_location }}, {{ node1.district.name }}, {{ node1.province.name }}</span>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <h4 class=\"mb-0\" style=\"padding: 10px 24px 20px 24px;\" *ngIf=\"!checkApproveNodeList\">Không có dữ liệu</h4>\r\n            </div>\r\n            <ngx-spinner></ngx-spinner>\r\n            <app-pagination [totalPages]=\"totalItems1\" (pageEmit)='getApprovedNodeList(filter, $event, sizePage)'></app-pagination>\r\n          </div>\r\n          <div class=\"mb-0 tab-pane fade\" id=\"unapproved\" role=\"tabpanel\" aria-labelledby=\"unapproved-tab\">\r\n            <h3 class=\"mb-0\" style=\"padding: 10px 24px 20px 24px;\">Danh sách các node không được phê duyệt</h3>\r\n            <div class=\"table-responsive tab-pane fade show active\" id=\"pending\" role=\"tabpanel\" aria-labelledby=\"pending-tab\">\r\n              <table class=\"table align-items-center table-flush\">\r\n                <thead class=\"thead-light\">\r\n                  <tr style=\"text-align: center;\">\r\n                    <th scope=\"col\">STT</th>\r\n                    <th scope=\"col\" *ngFor=\"let field of fields\">{{ field.label }}</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let node2 of disapproveNodeList; let index = index\" style=\"text-align: center;\">\r\n                    <td>{{ (currentPage - 1) * sizePage + index + 1 }}</td>\r\n                    <td *ngFor=\"let key_data of key_data\" >\r\n                      <span *ngIf=\"key_data.key!='location_info'\">{{ node2[key_data.key] }}</span>\r\n                      <span *ngIf=\"key_data.key=='location_info'\">{{ node2[key_data.key].detail_location }}, {{ node2.district.name }}, {{ node2.province.name }}</span>\r\n                    </td>\r\n                </tbody>\r\n              </table>\r\n              <h4 class=\"mb-0\" style=\"padding: 10px 24px 20px 24px;\" *ngIf=\"!checkDisapproveNodeList\">Không có dữ liệu</h4>\r\n            </div>\r\n            <ngx-spinner></ngx-spinner>\r\n            <app-pagination [totalPages]='totalItems2' (pageEmit)='getDisapprovedNodeList(filter, $event, sizePage)'></app-pagination>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>      \r\n\r\n<!-- Modal Sửa -->\r\n<div  class=\"modal fade bd-example-modal-lg\" id=\"approveModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h3 class=\"modal-title\">Bạn có chắc là muốn phê duyệt node này không?</h3>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Hủy</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"\r\n            (click)=\"approve()\">Đồng ý</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal Xóa -->\r\n<div  class=\"modal fade bd-example-modal-lg\" id=\"disapproveModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h3 class=\"modal-title\">Bạn có chắc là muốn từ chối phê duyệt node này không?</h3>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Hủy</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"\r\n            (click)=\"disapprove()\">Đồng ý</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pending-user/pending-user.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pending-user/pending-user.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-8 pt-5 pt-md-8\" style=\"background: linear-gradient(87deg, #13547a 0, #80d0c7 100%) !important;\"></div>\r\n<!-- Page content -->\r\n<div class=\"container-fluid mt--7\">\r\n  <!-- Table -->\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card shadow\">\r\n        <div class=\"card-header border-0\">\r\n          <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link active\" id=\"pending-tab\" data-toggle=\"tab\" href=\"#pending\" role=\"tab\" aria-controls=\"pending\" aria-selected=\"true\" (click)=\"getPending()\">Chờ phê duyệt</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" id=\"approved-tab\" data-toggle=\"tab\" href=\"#approved\" role=\"tab\" aria-controls=\"approved\" aria-selected=\"false\" (click)=\"getApprove()\">Được phê duyệt</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" id=\"unapproved-tab\" data-toggle=\"tab\" href=\"#unapproved\" role=\"tab\" aria-controls=\"unapproved\" aria-selected=\"false\" (click)=\"getDisapprove()\">Không được phê duyệt</a>\r\n            </li>\r\n          </ul>\r\n          <!-- <div class=\"tab-content\" id=\"myTabContent\">\r\n            <h3 class=\"mb-0 tab-pane fade show active\" id=\"pending\" role=\"tabpanel\" aria-labelledby=\"pending-tab\">Danh sách người dùng chờ phê duyệt</h3>\r\n            <div class=\"mb-0 tab-pane fade\" id=\"approved\" role=\"tabpanel\" aria-labelledby=\"approved-tab\">Danh sách người dùng được phê duyệt</div>\r\n            <div class=\"mb-0 tab-pane fade\" id=\"unapproved\" role=\"tabpanel\" aria-labelledby=\"unapproved-tab\">Danh sách người dùng không được phê duyệt</div>\r\n          </div> -->\r\n        </div>\r\n        <div class=\"tab-content\" id=\"myTabContent\">\r\n          <div class=\"mb-0 tab-pane fade show active\" id=\"pending\" role=\"tabpanel\" aria-labelledby=\"pending-tab\">\r\n            <h3 class=\"mb-0\" style=\"padding: 10px 24px 20px 24px;\">Danh sách người dùng chờ phê duyệt</h3>\r\n            <div class=\"table-responsive tab-pane fade show active\" id=\"pending\" role=\"tabpanel\" aria-labelledby=\"pending-tab\">\r\n              <table class=\"table align-items-center table-flush\">\r\n                <thead class=\"thead-light\">\r\n                  <tr style=\"text-align: center;\">\r\n                    <th scope=\"col\">STT</th>\r\n                    <th scope=\"col\" *ngFor=\"let field of fields\">{{ field.label }}</th>\r\n                    <th scope=\"col\">Lựa chọn</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let user of userList; let index = index\" style=\"text-align: center;\">\r\n                    <td>{{ (currentPage1 - 1) * sizePage + index + 1 }}</td>\r\n                    <td *ngFor=\"let key_data of key_data\" >\r\n                      <span *ngIf=\"key_data.key!=='role'\">{{ user[key_data.key] }}</span>\r\n                      <span *ngIf=\"key_data.key=='role'\">{{ user[key_data.key].name }}</span>\r\n                    </td>\r\n                    <td>\r\n                      <button class=\"btn btn-icon btn-sm btn-info\" type=\"button\" placement=\"top\"\r\n                        data-toggle=\"modal\" data-target=\"#approveModal\" (click)=\"currentUser = user\">Phê duyệt\r\n                      </button>\r\n                      <button class=\"btn btn-icon btn-sm btn-danger\" style=\"margin-right: 8px;\"\r\n                      type=\"button\" placement=\"top\" data-toggle=\"modal\"\r\n                      data-target=\"#disapproveModal\" (click)=\"currentUser = user\">Từ chối\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <h4 class=\"mb-0\" style=\"padding: 10px 24px 20px 24px;\" *ngIf=\"!checkUserList\">Không có dữ liệu</h4>\r\n            </div>\r\n            <ngx-spinner></ngx-spinner>\r\n            <app-pagination [totalPages]=\"totalItems\" (pageEmit)=\"getUserList(filter, $event, sizePage)\"></app-pagination>\r\n          </div>\r\n          <div class=\"mb-0 tab-pane fade\" id=\"approved\" role=\"tabpanel\" aria-labelledby=\"approved-tab\" >\r\n            <h3 class=\"mb-0\" style=\"padding: 10px 24px 20px 24px;\">Danh sách người dùng được phê duyệt</h3>\r\n            <div class=\"table-responsive tab-pane fade show active\" id=\"pending\" role=\"tabpanel\" aria-labelledby=\"pending-tab\">\r\n              <table class=\"table align-items-center table-flush\">\r\n                <thead class=\"thead-light\">\r\n                  <tr style=\"text-align: center;\">\r\n                    <th scope=\"col\">STT</th>\r\n                    <th scope=\"col\" *ngFor=\"let field of fields\">{{ field.label }}</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let user1 of approveUserList; let index = index\" style=\"text-align: center;\">\r\n                    <td>{{ (currentPage2 - 1) * sizePage + index + 1 }}</td>\r\n                    <td *ngFor=\"let key_data of key_data\" >\r\n                      <span *ngIf=\"key_data.key!=='role'\">{{ user1[key_data.key] }}</span>\r\n                      <span *ngIf=\"key_data.key=='role'\">{{ user1[key_data.key].name }}</span>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <h4 class=\"mb-0\" style=\"padding: 10px 24px 20px 24px;\" *ngIf=\"!checkApproveUserList\">Không có dữ liệu</h4>\r\n            </div>\r\n            <ngx-spinner></ngx-spinner>\r\n          <app-pagination [totalPages]=\"totalItems1\" (pageEmit)=\"getApprovedUserList(filter, $event, sizePage)\"></app-pagination>\r\n          </div>\r\n          <div class=\"mb-0 tab-pane fade\" id=\"unapproved\" role=\"tabpanel\" aria-labelledby=\"unapproved-tab\">\r\n            <h3 class=\"mb-0\" style=\"padding: 10px 24px 20px 24px;\">Danh sách người dùng không được phê duyệt</h3>\r\n            <div class=\"table-responsive tab-pane fade show active\" id=\"pending\" role=\"tabpanel\" aria-labelledby=\"pending-tab\">\r\n              <table class=\"table align-items-center table-flush\">\r\n                <thead class=\"thead-light\">\r\n                  <tr style=\"text-align: center;\">\r\n                    <th scope=\"col\">STT</th>\r\n                    <th scope=\"col\" *ngFor=\"let field of fields\">{{ field.label }}</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let user2 of disapproveUserList; let index = index\" style=\"text-align: center;\">\r\n                    <td>{{ (currentPage - 1) * sizePage + index + 1 }}</td>\r\n                    <td *ngFor=\"let key_data of key_data\" >\r\n                      <span *ngIf=\"key_data.key!=='role'\">{{ user2[key_data.key] }}</span>\r\n                      <span *ngIf=\"key_data.key=='role'\">{{ user2[key_data.key].name }}</span>\r\n                    </td>\r\n                </tbody>\r\n              </table>\r\n              <h4 class=\"mb-0\" style=\"padding: 10px 24px 20px 24px;\" *ngIf=\"!checkDisapproveUserList\">Không có dữ liệu</h4>\r\n            </div>\r\n            <ngx-spinner></ngx-spinner>\r\n          <app-pagination [totalPages]=\"totalItems2\" (pageEmit)=\"getDisapprovedUserList(filter, $event, sizePage)\"></app-pagination>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>      \r\n\r\n<!-- Modal Sửa -->\r\n<div  class=\"modal fade bd-example-modal-lg\" id=\"approveModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h3 class=\"modal-title\">Bạn có chắc là muốn phê duyệt tài khoản này không?</h3>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Hủy</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"\r\n            (click)=\"approve()\">Đồng ý</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal Xóa -->\r\n<div  class=\"modal fade bd-example-modal-lg\" id=\"disapproveModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h3 class=\"modal-title\">Bạn có chắc là muốn từ chối phê duyệt tài khoản này không?</h3>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Hủy</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"\r\n            (click)=\"disapprove()\">Đồng ý</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/report/report.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/report/report.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  class=\"header pb-8 pt-5 pt-md-8\"\n  style=\"\n    background: linear-gradient(87deg, #13547a 0, #80d0c7 100%) !important;\n  \"\n>\n  <div class=\"container-fluid\">\n    <div class=\"header-body\">\n      <!-- Card stats -->\n      <div class=\"row\">\n        <div class=\"col-xl-5\">\n          <div class=\"row\">\n            <div class=\"col-xl-6\">\n              <div class=\"form-group\">\n                <label class=\"form-control-label-white\" style=\"color: white;\"\n                  >Node</label\n                >\n                <select\n                  name=\"node\"\n                  id=\"node\"\n                  class=\"form-control form-control-alternative\"\n                  [(ngModel)]=\"currentNode\"\n                >\n                  <option value=\"\" disabled selected hidden>Chọn node</option>\n                  <option\n                    *ngFor=\"let node of nodeList\"\n                    name=\"node\"\n                    [ngValue]=\"node\"\n                    id=\"node\"\n                    >{{ node.name }}</option\n                  >\n                </select>\n              </div>\n            </div>\n            <div class=\"col-xl-6\">\n              <div class=\"form-group\">\n                <label class=\"form-control-label-white\" style=\"color: white;\"\n                  >Ngày bắt đầu</label\n                >\n                <input\n                  class=\"form-control\"\n                  type=\"date\"\n                  value=\"30-07-2020\"\n                  id=\"example-date-input\"\n                  [(ngModel)]=\"filter.start_date\"\n                />\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-xl-5\">\n          <div class=\"row\">\n            <div class=\"col-xl-6\">\n              <div class=\"form-group\">\n                <label class=\"form-control-label-white\" style=\"color: white;\"\n                  >Ngày kết thúc</label\n                >\n                <input\n                  class=\"form-control\"\n                  type=\"date\"\n                  value=\"30-07-2020\"\n                  id=\"example-date-input\"\n                  [(ngModel)]=\"end_date\"\n                />\n              </div>\n            </div>\n            <div class=\"col-xl-6\">\n              <div class=\"form-group\">\n                <label\n                  class=\"form-control-label-white\"\n                  style=\"color: white;\"\n                ></label>\n                <div class=\"row\" style=\"margin-top: 8px;\">\n                  <button\n                    type=\"button\"\n                    class=\"btn btn-primary\"\n                    style=\"background-color: #fdc667; border-color: #fea200;\"\n                    (click)=\"makeAReport()\"\n                  >\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                  </button>\n                  <button\n                    *ngIf=\"check==true\"\n                    type=\"button\"\n                    class=\"btn btn-primary\"\n                    style=\"background-color: #0165b9; border-color: #0165b9;\"\n                    (click)=\"table()\"\n                  >\n                    <i class=\"fa fa-table\" aria-hidden=\"true\"></i>\n                  </button>\n                  <button\n                    *ngIf=\"check==true\"\n                    type=\"button\"\n                    class=\"btn btn-primary\"\n                    style=\"background-color: #0165b9; border-color: #0165b9;\"\n                    (click)=\"chart()\"\n                  >\n                    <i class=\"fas fa-chart-pie\"></i>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Page content -->\n<div class=\"container-fluid mt--7\">\n  <!-- Table -->\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"card shadow\">\n        <div class=\"card-header border-0\">\n          <h3 *ngIf=\"check == true\" class=\"mb-0\">{{ getDate() }}</h3>\n        </div>\n        <div *ngIf=\"isShowingTable\">\n          <div class=\"table-responsive\">\n            <table class=\"table align-items-center table-flush\">\n              <thead class=\"thead-light\">\n                <tr style=\"text-align: center;\">\n                  <th scope=\"col\">STT</th>\n                  <th scope=\"col\" *ngFor=\"let field of fields\">\n                    {{ field.label }}\n                  </th>\n                  <th>Đánh giá</th>\n                </tr>\n              </thead>\n              <tbody *ngIf=\"check == true\">\n                <tr\n                  *ngFor=\"let data of dataList; let index = index\"\n                  style=\"text-align: center;\"\n                >\n                  <td>{{ (currentPage - 1) * sizePage + index + 1 }}</td>\n                  <td *ngFor=\"let field of fields\">\n                    <span *ngIf=\"field.name != 'datetime' && field.name != 'aqi'\">{{\n                      data[field.name]\n                    }}</span>\n                    <span *ngIf=\"field.name == 'datetime' && field.name != 'aqi'\"\n                      >{{ data.datetime | date: \"dd/MM/yyyy HH\" }}h</span\n                    >\n                    <span *ngIf=\"field.name == 'aqi' && evaluate(data.aqi)=='Tốt'\" style=\"color: #006100; font-weight: bold;\">{{\n                      data[field.name]\n                    }}</span>\n                    <span *ngIf=\"field.name == 'aqi' && evaluate(data.aqi)=='Trung bình'\" style=\"color: #DFAC05; font-weight: bold;\">{{\n                      data[field.name]\n                    }}</span>\n                    <span *ngIf=\"field.name == 'aqi' && evaluate(data.aqi)=='Kém'\" style=\"color: #F1923D; font-weight: bold;\">{{\n                      data[field.name]\n                    }}</span>\n                    <span *ngIf=\"field.name == 'aqi' && evaluate(data.aqi)=='Xấu'\" style=\"color: #FF3232; font-weight: bold;\">{{\n                      data[field.name]\n                    }}</span>\n                    <span *ngIf=\"field.name == 'aqi' && evaluate(data.aqi)=='Rất xấu'\" style=\"color: #CC3399; font-weight: bold;\">{{\n                      data[field.name]\n                    }}</span>\n                    <span *ngIf=\"field.name == 'aqi' && evaluate(data.aqi)=='Nguy hại'\" style=\"color: #A52A2A; font-weight: bold;\">{{\n                      data[field.name]\n                    }}</span>\n                  </td>\n                  <td>{{ evaluate(data.aqi) }}</td>\n                </tr>\n              </tbody>\n            </table>\n            <h4\n              class=\"mb-0\"\n              style=\"padding: 10px 24px 20px 24px;\"\n              *ngIf=\"dataList.length == 0\"\n            >\n              Không tìm thấy kết quả phù hợp\n            </h4>\n          </div>\n          <ngx-spinner></ngx-spinner>\n          <app-pagination\n            [totalPages]=\"totalItems\"\n            [pageSize]=\"sizePage\"\n            (pageEmit)=\"getDataOfNode(filter, $event, sizePage)\"\n            *ngIf=\"check == true\"\n          ></app-pagination>\n        </div>\n        <div *ngIf=\"isShowingTable==false\">\n          <div>\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-xl-6\">\n                  <div class=\"chart\">\n                    <canvas id=\"aqi_pie_chart\" class=\"chart-canvas\"></canvas>\n                  </div>\n                </div>\n                <div class=\"col-xl-6\">\n                  <div class=\"col-xl-1\"></div>\n                  <div class=\"col-xl-10\">\n                    <div class=\"table-responsive\">\n                      <table class=\"table align-items-center table-dark table-flush out\">\n                        <thead class=\"thead-dark\">\n                          <tr style=\"text-align: center;\">\n                            <th>Mức độ</th>\n                            <th>Số giờ</th>\n                            <th>Phần trăm</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr style=\"text-align: center;\">\n                            <td>Tốt</td>\n                            <td>{{ percentageList[0] }}</td>\n                            <td>{{ percentageList[0] / totalItems * 100 }}%</td>\n                          </tr>\n                          <tr style=\"text-align: center;\">\n                            <td>Trung bình</td>\n                            <td>{{ percentageList[1] }}</td>\n                            <td>{{ percentageList[1] / totalItems * 100 }}%</td>\n                          </tr>\n                          <tr style=\"text-align: center;\">\n                            <td>Kém</td>\n                            <td>{{ percentageList[2] }}</td>\n                            <td>{{ percentageList[2] / totalItems * 100 }}%</td>\n                          </tr>\n                          <tr style=\"text-align: center;\">\n                            <td>Xấu</td>\n                            <td>{{ percentageList[3] }}</td>\n                            <td>{{ percentageList[3] / totalItems * 100 }}%</td>\n                          </tr>\n                          <tr style=\"text-align: center;\">\n                            <td>Rất xấu</td>\n                            <td>{{ percentageList[4] }}</td>\n                            <td>{{ percentageList[4] / totalItems * 100 }}%</td>\n                          </tr>\n                          <tr style=\"text-align: center;\">\n                            <td>Nguy hại</td>\n                            <td>{{ percentageList[5] }}</td>\n                            <td>{{ percentageList[5] / totalItems * 100 }}%</td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                  <div class=\"col-xl-1\"></div>\n                </div>\n              </div>\n              <br>\n              <br>\n              <br>\n              <div class=\"row\">\n                <div class=\"col-xl-12\">\n                  <div class=\"chart\">\n                    <canvas id=\"aqi_bar_chart\" class=\"chart-canvas\"></canvas>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/role/role.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/role/role.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-8 pt-5 pt-md-8\" style=\"background: linear-gradient(87deg, #13547a 0, #80d0c7 100%) !important;\"></div>\r\n<!-- Page content -->\r\n<div class=\"container-fluid mt--7\">\r\n  <!-- Table -->\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card shadow\">\r\n        <div class=\"card-header border-0\">\r\n          <h3 class=\"mb-0\">Danh sách vai trò</h3>\r\n        </div>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table align-items-center table-flush\">\r\n            <thead class=\"thead-light\">\r\n              <tr style=\"text-align: center;\">\r\n                <th scope=\"col\">STT</th>\r\n                <th scope=\"col\" *ngFor=\"let field of fields\">\r\n                  {{ field.label }}\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let role of roles; let index = index\" style=\"text-align: center;\">\r\n                <td>{{ (currentPage - 1) * sizePage + index + 1 }}</td>\r\n                <td *ngFor=\"let item of key_data\">\r\n                  <span *ngIf=\"is_string(item.type)\">{{ role[item.key] }}</span>\r\n                  <div *ngIf=\"is_array(item.type)\">\r\n                    <span \r\n                      *ngFor=\"let data of role[item.key]\"\r\n                      style=\"font-size: 18px;\"\r\n                      [ngClass]=\"['badge', 'badge-pill', item.color]\"\r\n                      style=\"margin-right: 10px;\"\r\n                      >{{ data.name }}</span\r\n                    >\r\n                  </div>\r\n                </td>\r\n                <!-- <td>\r\n                  <button\r\n                    class=\"btn btn-icon btn-sm btn-info\"\r\n                    type=\"button\"\r\n                    placement=\"top\"\r\n                    ngbTooltip=\"Sửa\"\r\n                    data-toggle=\"modal\"\r\n                    data-target=\"#modal\"\r\n                    (click)=\"setModal(role)\"\r\n                  >\r\n                    <span class=\"btn-inner--icon\"\r\n                      ><i class=\"ni ni-single-copy-04\"></i\r\n                    ></span>\r\n                  </button>\r\n                </td> -->\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <ngx-spinner></ngx-spinner>\r\n        <app-pagination [totalPages]='totalItems' (pageEmit)='getRoleList(filter, $event, sizePage)'></app-pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Modal Sửa\r\n  <div\r\n    class=\"modal fade bd-example-modal-lg\"\r\n    id=\"modal\"\r\n    tabindex=\"-1\"\r\n    role=\"dialog\"\r\n    aria-hidden=\"true\"\r\n  >\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h3 class=\"modal-title\">Cập nhật thông tin vai trò</h3>\r\n          <button\r\n            type=\"button\"\r\n            class=\"close\"\r\n            data-dismiss=\"modal\"\r\n            aria-label=\"Close\"\r\n          >\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"w-100 d-inline-block\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-6\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-control-label\" for=\"name\"\r\n                    >Tên vai trò\r\n                    <p\r\n                      style=\"display: inline-flex !important; color: red;\"\r\n                      placement=\"right\"\r\n                      ngbTooltip=\"Không được để trống\"\r\n                    >\r\n                      *\r\n                    </p></label\r\n                  >\r\n                  <div [ngClass]=\"[is_name_valid ? '' : 'has-danger']\">\r\n                    <input\r\n                      class=\"form-control form-control-alternative\"\r\n                      name=\"name\"\r\n                      id=\"name\"\r\n                      [(ngModel)]=\"currentRole.name\"\r\n                      placeholder=\"Tên vai trò\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-6\"></div>\r\n              <div class=\"col-lg-6\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-control-label\" for=\"permission\"\r\n                    >Quyền\r\n                    <p\r\n                      style=\"display: inline-flex !important; color: red;\"\r\n                      placement=\"right\"\r\n                      ngbTooltip=\"Không được để trống\"\r\n                    >\r\n                      *\r\n                    </p></label\r\n                  >\r\n                  <select\r\n                    name=\"permission\"\r\n                    [(ngModel)]=\"selected_permission\"\r\n                    id=\"permission\"\r\n                    class=\"form-control form-control-alternative\"\r\n                    (change)=\"selectPermission()\"\r\n                  >\r\n                    <option value=\"\" hidden selected>Chọn quyền</option>\r\n                    <option\r\n                      *ngFor=\"let permission of permissions\"\r\n                      [value]=\"permission.id\"\r\n                      >{{ permission.name }}</option\r\n                    >\r\n                  </select>\r\n                </div>\r\n                <div>\r\n                  <button\r\n                    *ngFor=\"let permission of currentRole.action_permission\"\r\n                    type=\"button\"\r\n                    class=\"btn btn-primary\"\r\n                    style=\"margin-bottom: 10px;\"\r\n                  >\r\n                    <span>{{ getPermissionName(permission) }}</span>\r\n                    <a\r\n                      (click)=\"removePermission(permission)\"\r\n                      class=\"btn-inner--icon\"\r\n                      ><i class=\"ni ni-fat-remove\"></i\r\n                    ></a>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-lg-6\">\r\n                <div class=\"form-group\">\r\n                  <label class=\"form-control-label\" for=\"area\"\r\n                    >Khu vực\r\n                    <p></p\r\n                  ></label>\r\n                  <select\r\n                    name=\"area\"\r\n                    [(ngModel)]=\"selected_area\"\r\n                    id=\"area\"\r\n                    class=\"form-control form-control-alternative\"\r\n                    (change)=\"selectArea()\"\r\n                  >\r\n                    <option value=\"\" selected hidden>Chọn khu vực</option>\r\n                    <option *ngFor=\"let area of areas\" [value]=\"area.id\">{{\r\n                      area.name\r\n                    }}</option>\r\n                  </select>\r\n                </div>\r\n                <div>\r\n                  <button\r\n                    *ngFor=\"let area of currentRole.area_permission\"\r\n                    type=\"button\"\r\n                    class=\"btn btn-info\"\r\n                    style=\"margin-bottom: 10px;\"\r\n                  >\r\n                    <span>{{ getAreaName(area) }}</span>\r\n                    <a (click)=\"removeArea(area)\" class=\"btn-inner--icon\"\r\n                      ><i class=\"ni ni-fat-remove\"></i\r\n                    ></a>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button\r\n              id=\"closeModal\"\r\n              type=\"button\"\r\n              class=\"btn btn-secondary\"\r\n              data-dismiss=\"modal\"\r\n            >\r\n              Hủy\r\n            </button>\r\n            <button\r\n              type=\"button\"\r\n              class=\"btn btn-default\"\r\n              (click)=\"updateRole()\"\r\n            >\r\n              Lưu\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support-map/support-map.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support-map/support-map.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"map-container\" style=\"height: 350px; margin-bottom: 350px;\" >\n    <div class=\"map-frame\">\n      <div id=\"map\"></div>\n    </div>\n  </div>\n  <!-- <div style=\"height: 300px;\"\n     leaflet \n     [leafletOptions]=\"options\">\n</div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tables/tables.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tables/tables.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger pb-8 pt-5 pt-md-8\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"header-body\">\r\n      <!-- Card stats -->\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"card card-stats mb-4 mb-xl-0\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Traffic</h5>\r\n                  <span class=\"h2 font-weight-bold mb-0\">350,897</span>\r\n                </div>\r\n                <div class=\"col-auto\">\r\n                  <div class=\"icon icon-shape bg-danger text-white rounded-circle shadow\">\r\n                    <i class=\"fas fa-chart-bar\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\r\n                <span class=\"text-success mr-2\"><i class=\"fa fa-arrow-up\"></i> 3.48%</span>\r\n                <span class=\"text-nowrap\">Since last month</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"card card-stats mb-4 mb-xl-0\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">New users</h5>\r\n                  <span class=\"h2 font-weight-bold mb-0\">2,356</span>\r\n                </div>\r\n                <div class=\"col-auto\">\r\n                  <div class=\"icon icon-shape bg-warning text-white rounded-circle shadow\">\r\n                    <i class=\"fas fa-chart-pie\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\r\n                <span class=\"text-danger mr-2\"><i class=\"fas fa-arrow-down\"></i> 3.48%</span>\r\n                <span class=\"text-nowrap\">Since last week</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"card card-stats mb-4 mb-xl-0\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Sales</h5>\r\n                  <span class=\"h2 font-weight-bold mb-0\">924</span>\r\n                </div>\r\n                <div class=\"col-auto\">\r\n                  <div class=\"icon icon-shape bg-yellow text-white rounded-circle shadow\">\r\n                    <i class=\"fas fa-users\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\r\n                <span class=\"text-warning mr-2\"><i class=\"fas fa-arrow-down\"></i> 1.10%</span>\r\n                <span class=\"text-nowrap\">Since yesterday</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6\">\r\n          <div class=\"card card-stats mb-4 mb-xl-0\">\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <h5 class=\"card-title text-uppercase text-muted mb-0\">Performance</h5>\r\n                  <span class=\"h2 font-weight-bold mb-0\">49,65%</span>\r\n                </div>\r\n                <div class=\"col-auto\">\r\n                  <div class=\"icon icon-shape bg-info text-white rounded-circle shadow\">\r\n                    <i class=\"fas fa-percent\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <p class=\"mt-3 mb-0 text-muted text-sm\">\r\n                <span class=\"text-success mr-2\"><i class=\"fas fa-arrow-up\"></i> 12%</span>\r\n                <span class=\"text-nowrap\">Since last month</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Page content -->\r\n<div class=\"container-fluid mt--7\">\r\n  <!-- Table -->\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card shadow\">\r\n        <div class=\"card-header border-0\">\r\n          <h3 class=\"mb-0\">Card tables</h3>\r\n        </div>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table align-items-center table-flush\">\r\n            <thead class=\"thead-light\">\r\n              <tr>\r\n                <th scope=\"col\">Project</th>\r\n                <th scope=\"col\">Budget</th>\r\n                <th scope=\"col\">Status</th>\r\n                <th scope=\"col\">Users</th>\r\n                <th scope=\"col\">Completion</th>\r\n                <th scope=\"col\"></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <th scope=\"row\">\r\n                  <div class=\"media align-items-center\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar rounded-circle mr-3\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/bootstrap.jpg\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                      <span class=\"mb-0 text-sm\">Argon Design System</span>\r\n                    </div>\r\n                  </div>\r\n                </th>\r\n                <td>\r\n                  $2,500 USD\r\n                </td>\r\n                <td>\r\n                  <span class=\"badge badge-dot mr-4\">\r\n                    <i class=\"bg-warning\"></i> pending\r\n                  </span>\r\n                </td>\r\n                <td>\r\n                  <div class=\"avatar-group\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div class=\"d-flex align-items-center\">\r\n                    <span class=\"mr-2\">60%</span>\r\n                    <div>\r\n                      <div class=\"progress\">\r\n                        <div class=\"progress-bar bg-warning\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-right\">\r\n                  <div ngbDropdown placement=\"bottom-right\">\r\n                    <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\r\n                      <i class=\"fas fa-ellipsis-v\"></i>\r\n                    </a>\r\n                    <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th scope=\"row\">\r\n                  <div class=\"media align-items-center\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar rounded-circle mr-3\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/angular.jpg\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                      <span class=\"mb-0 text-sm\">Angular Now UI Kit PRO</span>\r\n                    </div>\r\n                  </div>\r\n                </th>\r\n                <td>\r\n                  $1,800 USD\r\n                </td>\r\n                <td>\r\n                  <span class=\"badge badge-dot\">\r\n                    <i class=\"bg-success\"></i> completed\r\n                  </span>\r\n                </td>\r\n                <td>\r\n                  <div class=\"avatar-group\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div class=\"d-flex align-items-center\">\r\n                    <span class=\"mr-2\">100%</span>\r\n                    <div>\r\n                      <div class=\"progress\">\r\n                        <div class=\"progress-bar bg-success\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%;\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-right\">\r\n                  <div ngbDropdown  placement=\"bottom-right\">\r\n                    <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\r\n                      <i class=\"fas fa-ellipsis-v\"></i>\r\n                    </a>\r\n                    <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th scope=\"row\">\r\n                  <div class=\"media align-items-center\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar rounded-circle mr-3\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/sketch.jpg\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                      <span class=\"mb-0 text-sm\">Black Dashboard</span>\r\n                    </div>\r\n                  </div>\r\n                </th>\r\n                <td>\r\n                  $3,150 USD\r\n                </td>\r\n                <td>\r\n                  <span class=\"badge badge-dot mr-4\">\r\n                    <i class=\"bg-danger\"></i> delayed\r\n                  </span>\r\n                </td>\r\n                <td>\r\n                  <div class=\"avatar-group\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div class=\"d-flex align-items-center\">\r\n                    <span class=\"mr-2\">72%</span>\r\n                    <div>\r\n                      <div class=\"progress\">\r\n                        <div class=\"progress-bar bg-danger\" role=\"progressbar\" aria-valuenow=\"72\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 72%;\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-right\">\r\n                  <div ngbDropdown  placement=\"top-right\">\r\n                    <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\r\n                      <i class=\"fas fa-ellipsis-v\"></i>\r\n                    </a>\r\n                    <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th scope=\"row\">\r\n                  <div class=\"media align-items-center\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar rounded-circle mr-3\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/react.jpg\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                      <span class=\"mb-0 text-sm\">React Material Dashboard</span>\r\n                    </div>\r\n                  </div>\r\n                </th>\r\n                <td>\r\n                  $4,400 USD\r\n                </td>\r\n                <td>\r\n                  <span class=\"badge badge-dot\">\r\n                    <i class=\"bg-info\"></i> on schedule\r\n                  </span>\r\n                </td>\r\n                <td>\r\n                  <div class=\"avatar-group\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div class=\"d-flex align-items-center\">\r\n                    <span class=\"mr-2\">90%</span>\r\n                    <div>\r\n                      <div class=\"progress\">\r\n                        <div class=\"progress-bar bg-info\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 90%;\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-right\">\r\n                  <div ngbDropdown   placement=\"top-right\">\r\n                    <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\r\n                      <i class=\"fas fa-ellipsis-v\"></i>\r\n                    </a>\r\n                    <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th scope=\"row\">\r\n                  <div class=\"media align-items-center\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar rounded-circle mr-3\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/vue.jpg\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                      <span class=\"mb-0 text-sm\">Vue Paper UI Kit PRO</span>\r\n                    </div>\r\n                  </div>\r\n                </th>\r\n                <td>\r\n                  $2,200 USD\r\n                </td>\r\n                <td>\r\n                  <span class=\"badge badge-dot mr-4\">\r\n                    <i class=\"bg-success\"></i> completed\r\n                  </span>\r\n                </td>\r\n                <td>\r\n                  <div class=\"avatar-group\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div class=\"d-flex align-items-center\">\r\n                    <span class=\"mr-2\">100%</span>\r\n                    <div>\r\n                      <div class=\"progress\">\r\n                        <div class=\"progress-bar bg-success\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%;\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-right\">\r\n                  <div ngbDropdown   placement=\"top-right\">\r\n                    <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\r\n                      <i class=\"fas fa-ellipsis-v\"></i>\r\n                    </a>\r\n                    <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"card-footer py-4\">\r\n          <nav aria-label=\"...\">\r\n            <ul class=\"pagination justify-content-end mb-0\">\r\n              <li class=\"page-item disabled\">\r\n                <a class=\"page-link\" href=\"javascript:void(0)\" tabindex=\"-1\">\r\n                  <i class=\"fas fa-angle-left\"></i>\r\n                  <span class=\"sr-only\">Previous</span>\r\n                </a>\r\n              </li>\r\n              <li class=\"page-item active\">\r\n                <a class=\"page-link\" href=\"javascript:void(0)\">1</a>\r\n              </li>\r\n              <li class=\"page-item\">\r\n                <a class=\"page-link\" href=\"javascript:void(0)\">2 <span class=\"sr-only\">(current)</span></a>\r\n              </li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"javascript:void(0)\">3</a></li>\r\n              <li class=\"page-item\">\r\n                <a class=\"page-link\" href=\"javascript:void(0)\">\r\n                  <i class=\"fas fa-angle-right\"></i>\r\n                  <span class=\"sr-only\">Next</span>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </nav>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Dark table -->\r\n  <div class=\"row mt-5\">\r\n    <div class=\"col\">\r\n      <div class=\"card bg-default shadow\">\r\n        <div class=\"card-header bg-transparent border-0\">\r\n          <h3 class=\"text-white mb-0\">Card tables</h3>\r\n        </div>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table align-items-center table-dark table-flush\">\r\n            <thead class=\"thead-dark\">\r\n              <tr>\r\n                <th scope=\"col\">Project</th>\r\n                <th scope=\"col\">Budget</th>\r\n                <th scope=\"col\">Status</th>\r\n                <th scope=\"col\">Users</th>\r\n                <th scope=\"col\">Completion</th>\r\n                <th scope=\"col\"></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <th scope=\"row\">\r\n                  <div class=\"media align-items-center\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar rounded-circle mr-3\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/bootstrap.jpg\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                      <span class=\"mb-0 text-sm\">Argon Design System</span>\r\n                    </div>\r\n                  </div>\r\n                </th>\r\n                <td>\r\n                  $2,500 USD\r\n                </td>\r\n                <td>\r\n                  <span class=\"badge badge-dot mr-4\">\r\n                    <i class=\"bg-warning\"></i> pending\r\n                  </span>\r\n                </td>\r\n                <td>\r\n                  <div class=\"avatar-group\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div class=\"d-flex align-items-center\">\r\n                    <span class=\"mr-2\">60%</span>\r\n                    <div>\r\n                      <div class=\"progress\">\r\n                        <div class=\"progress-bar bg-warning\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-right\">\r\n                  <div ngbDropdown placement=\"bottom-right\">\r\n                    <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\r\n                      <i class=\"fas fa-ellipsis-v\"></i>\r\n                    </a>\r\n                    <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th scope=\"row\">\r\n                  <div class=\"media align-items-center\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar rounded-circle mr-3\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/angular.jpg\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                      <span class=\"mb-0 text-sm\">Angular Now UI Kit PRO</span>\r\n                    </div>\r\n                  </div>\r\n                </th>\r\n                <td>\r\n                  $1,800 USD\r\n                </td>\r\n                <td>\r\n                  <span class=\"badge badge-dot\">\r\n                    <i class=\"bg-success\"></i> completed\r\n                  </span>\r\n                </td>\r\n                <td>\r\n                  <div class=\"avatar-group\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div class=\"d-flex align-items-center\">\r\n                    <span class=\"mr-2\">100%</span>\r\n                    <div>\r\n                      <div class=\"progress\">\r\n                        <div class=\"progress-bar bg-success\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%;\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-right\">\r\n                  <div ngbDropdown placement=\"bottom-right\">\r\n                    <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\r\n                      <i class=\"fas fa-ellipsis-v\"></i>\r\n                    </a>\r\n                    <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th scope=\"row\">\r\n                  <div class=\"media align-items-center\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar rounded-circle mr-3\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/sketch.jpg\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                      <span class=\"mb-0 text-sm\">Black Dashboard</span>\r\n                    </div>\r\n                  </div>\r\n                </th>\r\n                <td>\r\n                  $3,150 USD\r\n                </td>\r\n                <td>\r\n                  <span class=\"badge badge-dot mr-4\">\r\n                    <i class=\"bg-danger\"></i> delayed\r\n                  </span>\r\n                </td>\r\n                <td>\r\n                  <div class=\"avatar-group\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div class=\"d-flex align-items-center\">\r\n                    <span class=\"mr-2\">72%</span>\r\n                    <div>\r\n                      <div class=\"progress\">\r\n                        <div class=\"progress-bar bg-danger\" role=\"progressbar\" aria-valuenow=\"72\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 72%;\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-right\">\r\n                  <div ngbDropdown placement=\"top-right\">\r\n                    <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\r\n                      <i class=\"fas fa-ellipsis-v\"></i>\r\n                    </a>\r\n                    <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th scope=\"row\">\r\n                  <div class=\"media align-items-center\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar rounded-circle mr-3\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/react.jpg\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                      <span class=\"mb-0 text-sm\">React Material Dashboard</span>\r\n                    </div>\r\n                  </div>\r\n                </th>\r\n                <td>\r\n                  $4,400 USD\r\n                </td>\r\n                <td>\r\n                  <span class=\"badge badge-dot\">\r\n                    <i class=\"bg-info\"></i> on schedule\r\n                  </span>\r\n                </td>\r\n                <td>\r\n                  <div class=\"avatar-group\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div class=\"d-flex align-items-center\">\r\n                    <span class=\"mr-2\">90%</span>\r\n                    <div>\r\n                      <div class=\"progress\">\r\n                        <div class=\"progress-bar bg-info\" role=\"progressbar\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 90%;\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-right\">\r\n                  <div ngbDropdown placement=\"top-right\">\r\n                    <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\r\n                      <i class=\"fas fa-ellipsis-v\"></i>\r\n                    </a>\r\n                    <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <th scope=\"row\">\r\n                  <div class=\"media align-items-center\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar rounded-circle mr-3\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/vue.jpg\">\r\n                    </a>\r\n                    <div class=\"media-body\">\r\n                      <span class=\"mb-0 text-sm\">Vue Paper UI Kit PRO</span>\r\n                    </div>\r\n                  </div>\r\n                </th>\r\n                <td>\r\n                  $2,200 USD\r\n                </td>\r\n                <td>\r\n                  <span class=\"badge badge-dot mr-4\">\r\n                    <i class=\"bg-success\"></i> completed\r\n                  </span>\r\n                </td>\r\n                <td>\r\n                  <div class=\"avatar-group\">\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Ryan Tompson\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-1-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Romina Hadid\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-2-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Alexander Smith\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-3-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                    <a href=\"javascript:void(0)\" class=\"avatar avatar-sm\" data-toggle=\"tooltip\" data-original-title=\"Jessica Doe\">\r\n                      <img alt=\"Image placeholder\" src=\"../assets/img/theme/team-4-800x800.jpg\" class=\"rounded-circle\">\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div class=\"d-flex align-items-center\">\r\n                    <span class=\"mr-2\">100%</span>\r\n                    <div>\r\n                      <div class=\"progress\">\r\n                        <div class=\"progress-bar bg-success\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%;\"></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-right\">\r\n                  <div ngbDropdown placement=\"top-right\">\r\n                    <a class=\"btn btn-sm btn-icon-only text-light\"  ngbDropdownToggle>\r\n                      <i class=\"fas fa-ellipsis-v\"></i>\r\n                    </a>\r\n                    <div ngbDropdownMenu class=\" dropdown-menu-right dropdown-menu-arrow\">\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n                      <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-profile/user-profile.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-profile/user-profile.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-8 pt-5 pt-lg-8 d-flex align-items-center\">\r\n  <!-- Mask -->\r\n  <span\r\n    class=\"mask opacity-8\"\r\n    style=\"\r\n      background: linear-gradient(87deg, #13547a 0, #80d0c7 100%) !important;\r\n    \"\r\n  ></span>\r\n  <!-- Header container -->\r\n  <div class=\"container-fluid d-flex align-items-center\">\r\n    <!-- <div class=\"row\">\r\n      <div class=\"col-lg-7 col-md-10\">\r\n        <a href=\"#!\" class=\"btn btn-info\">Edit profile</a>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n</div>\r\n<div class=\"container-fluid mt--7\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-4 order-xl-2 mb-5 mb-xl-0\">\r\n      <div class=\"card card-profile shadow\">\r\n        <div class=\"row justify-content-center\">\r\n          <div class=\"col-lg-3 order-lg-2\">\r\n            <div class=\"card-profile-image\">\r\n              <a href=\"javascript:void(0)\">\r\n                <img\r\n                  src=\"assets/icon/avatar.jpg\"\r\n                  class=\"rounded-circle\"\r\n                />\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4\">\r\n          <div class=\"d-flex justify-content-between\">\r\n            <!-- <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-info mr-4\">Connect</a>\r\n            <a href=\"javascript:void(0)\" class=\"btn btn-sm btn-default float-right\">Message</a> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body pt-0 pt-md-4\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <div\r\n                class=\"card-profile-stats d-flex justify-content-center mt-md-5\"\r\n              >\r\n                <!-- <div>\r\n                  <span class=\"heading\">22</span>\r\n                  <span class=\"description\">Friends</span>\r\n                </div>\r\n                <div>\r\n                  <span class=\"heading\">10</span>\r\n                  <span class=\"description\">Photos</span>\r\n                </div>\r\n                <div>\r\n                  <span class=\"heading\">89</span>\r\n                  <span class=\"description\">Comments</span>\r\n                </div> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"text-center\">\r\n            <h3>\r\n              {{ profile_user.username }}\r\n            </h3>\r\n            <div class=\"h5 font-weight-300\">\r\n              <i class=\"ni location_pin mr-2\"></i>{{ roleName }}\r\n            </div>\r\n            <div class=\"h5 mt-4\">\r\n              <!-- <i class=\"ni business_briefcase-24 mr-2\"></i>Solution Manager - Creative Tim Officer -->\r\n            </div>\r\n            <div>\r\n              <!-- <i class=\"ni education_hat mr-2\"></i>University of Computer Science -->\r\n            </div>\r\n            <hr class=\"my-4\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-8 order-xl-1\">\r\n      <div class=\"card bg-secondary shadow\">\r\n        <div class=\"card-header bg-white border-0\">\r\n          <div class=\"row align-items-center\">\r\n            <div class=\"col-8\">\r\n              <h3 class=\"mb-0\">Tài khoản của tôi</h3>\r\n            </div>\r\n            <div class=\"col-4 text-right\">\r\n              <button\r\n                *ngIf=\"checkEdit == false\"\r\n                class=\"btn btn-sm btn-primary\"\r\n                (click)=\"edit()\"\r\n              >\r\n                Chỉnh sửa\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form>\r\n            <h6 class=\"heading-small text-muted mb-4\">Thông tin cá nhân</h6>\r\n            <div class=\"pl-lg-4\">\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"name\"\r\n                      >Họ và tên</label\r\n                    >\r\n                    <input\r\n                      [disabled]=\"checkEdit == false\"\r\n                      type=\"text\"\r\n                      id=\"name\"\r\n                      class=\"form-control form-control-alternative\"\r\n                      name=\"name\"\r\n                      [(ngModel)]=\"profile_user.name\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"phone\"\r\n                      >Điện thoại</label\r\n                    >\r\n                    <input\r\n                      [disabled]=\"checkEdit == false\"\r\n                      type=\"text\"\r\n                      id=\"phone\"\r\n                      name=\"phone\"\r\n                      class=\"form-control form-control-alternative\"\r\n                      [(ngModel)]=\"profile_user.phone\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-lg-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"password\"\r\n                      >Mật khẩu</label\r\n                    >\r\n                    <input\r\n                      [disabled]=\"checkEdit == false\"\r\n                      type=\"text\"\r\n                      id=\"password\"\r\n                      name=\"password\"\r\n                      class=\"form-control form-control-alternative\"\r\n                      [(ngModel)]=\"profile_user.password\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-lg-6\">\r\n                  <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"email\">Email</label>\r\n                    <input\r\n                      [disabled]=\"checkEdit == false\"\r\n                      type=\"text\"\r\n                      id=\"email\"\r\n                      name=\"email\"\r\n                      class=\"form-control form-control-alternative\"\r\n                      [(ngModel)]=\"profile_user.email\"\r\n                    />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <hr class=\"my-4\" />\r\n            <div class=\"col-lg-4 card-body\" style=\"padding-top: 15px;\">\r\n              <button\r\n                *ngIf=\"checkEdit == true\"\r\n                type=\"button\"\r\n                class=\"btn btn-success\"\r\n                style=\"margin-left: 24px;\"\r\n                (click)=\"save()\"\r\n              >\r\n                Lưu\r\n              </button>\r\n              <button\r\n                *ngIf=\"checkEdit == true\"\r\n                type=\"button\"\r\n                class=\"btn btn-danger\"\r\n                (click)=\"out()\"\r\n              >\r\n                Thoát\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <ngx-spinner></ngx-spinner>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header pb-8 pt-5 pt-md-8\" style=\"background: linear-gradient(87deg, #13547a 0, #80d0c7 100%) !important;\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"header-body\">\r\n      <!-- Card stats -->\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xl-6\">\r\n              <div class=\"form-group\">\r\n                <label\r\n                  class=\"form-control-label-white\"\r\n                  style=\"color: white;\"\r\n                  for=\"inputLocation\"\r\n                  >Username</label\r\n                >\r\n                <div class=\"input-group mb-4\">\r\n                  <input\r\n                    class=\"form-control\"\r\n                    placeholder=\"Nhập username cần tìm kiếm\"\r\n                    type=\"text\"\r\n                    [(ngModel)]=\"searchUsername\"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-6\">\r\n              <div class=\"form-group\">\r\n                <label\r\n                  class=\"form-control-label-white\"\r\n                  style=\"color: white;\"\r\n                  for=\"inputLocation\"\r\n                  >Họ và tên</label\r\n                >\r\n                <div class=\"input-group mb-4\">\r\n                  <input\r\n                    class=\"form-control\"\r\n                    placeholder=\"Nhập họ và tên cần tìm kiếm\"\r\n                    type=\"text\"\r\n                    [(ngModel)]=\"searchName\"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xl-6\">\r\n              <div class=\"form-group\">\r\n                <label class=\"form-control-label-white\" style=\"color: white;\"\r\n                  >Vai trò</label\r\n                >\r\n                <select\r\n                  name=\"role\"\r\n                  id=\"role\"\r\n                  class=\"form-control form-control-alternative\"\r\n                  [(ngModel)]=\"searchRole\" \r\n                >\r\n                  <option value=\"\" disabled selected hidden\r\n                    >Chọn vai trò cần tìm kiếm</option\r\n                  >\r\n                  <option *ngFor=\"let role of roleList\" name=\"role\" [ngValue]=\"role._id\" id=\"role\">{{ role.name }}</option>\r\n                  <option value=\"all\">Tất cả</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xl-6\">\r\n              <div class=\"form-group\">\r\n                <label class=\"form-control-label-white\" style=\"color: white;\"\r\n                  >Trạng thái</label\r\n                >\r\n                <select\r\n                  name=\"status\"\r\n                  id=\"status\"\r\n                  class=\"form-control form-control-alternative\"\r\n                  [(ngModel)]=\"searchStatus\" \r\n                >\r\n                  <option value=\"\" disabled selected hidden\r\n                    >Chọn trạng thái cần tìm kiếm</option\r\n                  >\r\n                  <option *ngFor=\"let status of status\" [ngValue]=\"status.value\">{{ status.name }}</option>\r\n                  <option value=\"all\">Tất cả</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-2\">\r\n          <label class=\"form-control-label-white\" style=\"color: white;\"\r\n                  ></label\r\n                >\r\n          <div class=\"row\" style=\"margin-top: 8px;\">\r\n            <button type=\"button\" class=\"btn btn-primary\" style=\"background-color: #FDC667; border-color: #FEA200;\" (click)=\"search()\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\r\n            <button type=\"button\" class=\"btn btn-primary\" style=\"background-color: #0165B9; border-color: #0165B9;\" (click)=\"reset()\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Page content -->\r\n<div class=\"container-fluid mt--7\">\r\n  <!-- Table -->\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <div class=\"card shadow\">\r\n        <div class=\"card-header border-0\">\r\n          <h3 class=\"mb-0\">Danh sách người dùng</h3>\r\n        </div>\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table align-items-center table-flush\" *ngIf=\"check==true\">\r\n            <thead class=\"thead-light\">\r\n              <tr style=\"text-align: center;\">\r\n                <th scope=\"col\">STT</th>\r\n                <th scope=\"col\" *ngFor=\"let field of fields;\">{{ field.label }}</th>\r\n                <th scope=\"col\" *ngIf=\"isHavingEditUserPermission\">Lựa chọn</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let user of userList; let index=index\" style=\"text-align: center;\">\r\n                <td>{{ (currentPage - 1) * sizePage + index + 1 }}</td>\r\n                <td *ngFor=\"let key_data of key_data\">\r\n                  <span *ngIf=\"key_data.key=='role'\">{{ user[key_data.key].name }}</span>\r\n                  <span *ngIf=\"is_string(key_data.type) && key_data.key!='role'\">{{ user[key_data.key] }}</span>\r\n                  <div *ngIf=\"is_boolean(key_data.type)\">\r\n                    <span\r\n                      [ngClass]=\"[\r\n                        'badge',\r\n                        'badge-pill',\r\n                        user[key_data.key] ? 'badge-success' : 'badge-danger'\r\n                      ]\"\r\n                      >{{ status_vn(user[key_data.key]) }}</span\r\n                    >\r\n                  </div>\r\n                </td>\r\n                <td *ngIf=\"isHavingEditUserPermission\">\r\n                  <button class=\"btn btn-icon btn-sm btn-info\" type=\"button\" placement=\"top\" ngbTooltip=\"Sửa\" data-toggle=\"modal\" data-target=\"#editModal\" (click)=\"currentUser=user\" (click)=\"nameRole = currentUser.role.name\">\r\n                    <span class=\"btn-inner--icon\"><i class=\"ni ni-single-copy-04\"></i></span>\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <h4 class=\"mb-0\" style=\"padding: 10px 24px 20px 24px;\" *ngIf=\"userList.length==0\">Không có kết quả tìm kiếm phù hợp</h4>\r\n        </div>\r\n        <ngx-spinner></ngx-spinner>\r\n        <app-pagination [totalPages]='totalItems' (pageEmit)='goToPage($event)'></app-pagination>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n\r\n<!-- Modal Sửa -->\r\n<div *ngIf=\"is_have_data\" class=\"modal fade bd-example-modal-lg\" id=\"editModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h3 class=\"modal-title\">Cập nhật thông tin người dùng</h3>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"w-100 d-inline-block\">\r\n          <div *ngFor=\"let modal of modals\" class=\"w-50 float-left prl-15 col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label class=\"form-control-label\" [for]=\"modal.fin\">{{ modal.label }}</label>\r\n              <div class=\"form-group\">\r\n                <input\r\n                    *ngIf=\"is_input(modal.type)\"\r\n                    value=\"{{ currentUser[modal.key] }}\"\r\n                    [name]=\"modal.fin\"\r\n                    [id]=\"modal.fin\"\r\n                    type=\"text\"\r\n                    class=\"form-control form-control-alternative\"\r\n                    [readonly]=\"modal.readonly\"\r\n                />\r\n                <select\r\n                  *ngIf=\"is_select(modal.type) && modal.key!='role'\"\r\n                  [(ngModel)]=\"currentUser[modal.key]\"\r\n                  [name]=\"modal.fin\"\r\n                  [id]=\"modal.fin\"\r\n                  class=\"form-control form-control-alternative\"\r\n                >\r\n                  <option value=\"\" disabled selected hidden>{{ status_vn(currentUser[modal.key]) }}</option>\r\n                  <option *ngFor=\"let data of data[modal.key]\" [ngValue]=\"data.value\" >{{ data.name }}</option>\r\n                </select>\r\n                <select\r\n                  *ngIf=\"is_select(modal.type) && modal.key=='role'\"\r\n                  [(ngModel)]=\"currentUser[modal.key]._id\"\r\n                  [name]=\"modal.fin\"\r\n                  [id]=\"modal.fin\"\r\n                  class=\"form-control form-control-alternative\"\r\n                >\r\n                  <!-- <option value=\"\" disabled selected hidden>{{ log(currentUser, modal) }}</option> -->\r\n                  <option *ngFor=\"let data of roleList\" [value]=\"data._id\" >{{ data.name }}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"redirect()\">Hủy</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" style=\"background-color: #004D90; border-color:#013E7A\"\r\n            (click)=\"updateUserInfo(currentUser)\">Lưu</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n  ");

/***/ }),

/***/ "./src/app/guards/authorization.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/guards/authorization.guard.ts ***!
  \***********************************************/
/*! exports provided: AuthorizationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationGuard", function() { return AuthorizationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var AuthorizationGuard = /** @class */ (function () {
    function AuthorizationGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthorizationGuard.prototype.canActivate = function (next, state) {
        return __awaiter(this, void 0, void 0, function () {
            var allowedRoles, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(123);
                        allowedRoles = next.data.allowedRoles;
                        return [4 /*yield*/, this.authService.isAuthorized(allowedRoles)];
                    case 1:
                        res = _a.sent();
                        if (!res) {
                            console.log("res", res);
                            this.router.navigate(['user-profile']);
                        }
                        return [2 /*return*/, res];
                }
            });
        });
    };
    AuthorizationGuard.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AuthorizationGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthorizationGuard);
    return AuthorizationGuard;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function() { return AdminLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm5/ngx-clipboard.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-layout.routing */ "./src/app/layouts/admin-layout/admin-layout.routing.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_icons_icons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pages/icons/icons.component */ "./src/app/pages/icons/icons.component.ts");
/* harmony import */ var _pages_maps_maps_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pages/maps/maps.component */ "./src/app/pages/maps/maps.component.ts");
/* harmony import */ var _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pages/user-profile/user-profile.component */ "./src/app/pages/user-profile/user-profile.component.ts");
/* harmony import */ var _pages_tables_tables_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pages/tables/tables.component */ "./src/app/pages/tables/tables.component.ts");
/* harmony import */ var src_app_pages_user_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/pages/user/user.component */ "./src/app/pages/user/user.component.ts");
/* harmony import */ var src_app_pages_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/pages/new-user/new-user.component */ "./src/app/pages/new-user/new-user.component.ts");
/* harmony import */ var src_app_pages_pending_user_pending_user_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/pages/pending-user/pending-user.component */ "./src/app/pages/pending-user/pending-user.component.ts");
/* harmony import */ var src_app_pages_node_node_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/pages/node/node.component */ "./src/app/pages/node/node.component.ts");
/* harmony import */ var src_app_pages_new_node_new_node_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/pages/new-node/new-node.component */ "./src/app/pages/new-node/new-node.component.ts");
/* harmony import */ var src_app_pages_location_location_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/pages/location/location.component */ "./src/app/pages/location/location.component.ts");
/* harmony import */ var src_app_pages_new_location_new_location_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/pages/new-location/new-location.component */ "./src/app/pages/new-location/new-location.component.ts");
/* harmony import */ var src_app_pages_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/pages/pagination/pagination.component */ "./src/app/pages/pagination/pagination.component.ts");
/* harmony import */ var _pages_create_role_create_role_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../pages/create-role/create-role.component */ "./src/app/pages/create-role/create-role.component.ts");
/* harmony import */ var _pages_role_role_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../pages/role/role.component */ "./src/app/pages/role/role.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_pages_pending_node_pending_node_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/pages/pending-node/pending-node.component */ "./src/app/pages/pending-node/pending-node.component.ts");
/* harmony import */ var src_app_pages_action_log_action_log_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/pages/action-log/action-log.component */ "./src/app/pages/action-log/action-log.component.ts");
/* harmony import */ var src_app_pages_support_map_support_map_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/pages/support-map/support-map.component */ "./src/app/pages/support-map/support-map.component.ts");
/* harmony import */ var src_app_pages_report_report_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/pages/report/report.component */ "./src/app/pages/report/report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};























// import { ToastrModule } from 'ngx-toastr';





var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_admin_layout_routing__WEBPACK_IMPORTED_MODULE_7__["AdminLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_5__["ClipboardModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_23__["NgxSpinnerModule"]
            ],
            declarations: [
                _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_11__["UserProfileComponent"],
                _pages_tables_tables_component__WEBPACK_IMPORTED_MODULE_12__["TablesComponent"],
                _pages_icons_icons_component__WEBPACK_IMPORTED_MODULE_9__["IconsComponent"],
                _pages_maps_maps_component__WEBPACK_IMPORTED_MODULE_10__["MapsComponent"],
                src_app_pages_user_user_component__WEBPACK_IMPORTED_MODULE_13__["UserComponent"],
                src_app_pages_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_14__["NewUserComponent"],
                src_app_pages_pending_user_pending_user_component__WEBPACK_IMPORTED_MODULE_15__["PendingUserComponent"],
                src_app_pages_node_node_component__WEBPACK_IMPORTED_MODULE_16__["NodeComponent"],
                src_app_pages_new_node_new_node_component__WEBPACK_IMPORTED_MODULE_17__["NewNodeComponent"],
                src_app_pages_location_location_component__WEBPACK_IMPORTED_MODULE_18__["LocationComponent"],
                src_app_pages_new_location_new_location_component__WEBPACK_IMPORTED_MODULE_19__["NewLocationComponent"],
                src_app_pages_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_20__["PaginationComponent"],
                _pages_create_role_create_role_component__WEBPACK_IMPORTED_MODULE_21__["CreateRoleComponent"],
                _pages_role_role_component__WEBPACK_IMPORTED_MODULE_22__["RoleComponent"],
                src_app_pages_pending_node_pending_node_component__WEBPACK_IMPORTED_MODULE_24__["PendingNodeComponent"],
                src_app_pages_action_log_action_log_component__WEBPACK_IMPORTED_MODULE_25__["ActionLogComponent"],
                src_app_pages_support_map_support_map_component__WEBPACK_IMPORTED_MODULE_26__["SupportMapComponent"],
                src_app_pages_report_report_component__WEBPACK_IMPORTED_MODULE_27__["ReportComponent"]
            ],
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.routing.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
  \**************************************************************/
/*! exports provided: AdminLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutes", function() { return AdminLayoutRoutes; });
/* harmony import */ var _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/user-profile/user-profile.component */ "./src/app/pages/user-profile/user-profile.component.ts");
/* harmony import */ var src_app_pages_user_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/pages/user/user.component */ "./src/app/pages/user/user.component.ts");
/* harmony import */ var src_app_pages_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/new-user/new-user.component */ "./src/app/pages/new-user/new-user.component.ts");
/* harmony import */ var src_app_pages_pending_user_pending_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/pending-user/pending-user.component */ "./src/app/pages/pending-user/pending-user.component.ts");
/* harmony import */ var src_app_pages_node_node_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/node/node.component */ "./src/app/pages/node/node.component.ts");
/* harmony import */ var src_app_pages_new_node_new_node_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/new-node/new-node.component */ "./src/app/pages/new-node/new-node.component.ts");
/* harmony import */ var src_app_pages_location_location_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pages/location/location.component */ "./src/app/pages/location/location.component.ts");
/* harmony import */ var src_app_pages_new_location_new_location_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pages/new-location/new-location.component */ "./src/app/pages/new-location/new-location.component.ts");
/* harmony import */ var src_app_pages_pending_node_pending_node_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pages/pending-node/pending-node.component */ "./src/app/pages/pending-node/pending-node.component.ts");
/* harmony import */ var _pages_create_role_create_role_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pages/create-role/create-role.component */ "./src/app/pages/create-role/create-role.component.ts");
/* harmony import */ var _pages_role_role_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pages/role/role.component */ "./src/app/pages/role/role.component.ts");
/* harmony import */ var src_app_pages_action_log_action_log_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/pages/action-log/action-log.component */ "./src/app/pages/action-log/action-log.component.ts");
/* harmony import */ var src_app_guards_authorization_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/guards/authorization.guard */ "./src/app/guards/authorization.guard.ts");
/* harmony import */ var src_app_pages_report_report_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/pages/report/report.component */ "./src/app/pages/report/report.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};














var AdminLayoutRoutes = [
    // // { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile', component: _pages_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_0__["UserProfileComponent"] },
    // { path: 'tables',         component: TablesComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    {
        path: 'user',
        component: src_app_pages_user_user_component__WEBPACK_IMPORTED_MODULE_1__["UserComponent"],
        canActivate: [src_app_guards_authorization_guard__WEBPACK_IMPORTED_MODULE_12__["AuthorizationGuard"]],
        data: {
            allowedRoles: ['Phê duyệt user', 'Tạo mới user']
        }
    },
    {
        path: 'new-user',
        component: src_app_pages_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_2__["NewUserComponent"],
        canActivate: [src_app_guards_authorization_guard__WEBPACK_IMPORTED_MODULE_12__["AuthorizationGuard"]],
        data: {
            allowedRoles: ['Tạo mới user']
        }
    },
    {
        path: 'pending-user',
        component: src_app_pages_pending_user_pending_user_component__WEBPACK_IMPORTED_MODULE_3__["PendingUserComponent"],
        canActivate: [src_app_guards_authorization_guard__WEBPACK_IMPORTED_MODULE_12__["AuthorizationGuard"]],
        data: {
            allowedRoles: ['Phê duyệt user']
        }
    },
    {
        path: 'node',
        component: src_app_pages_node_node_component__WEBPACK_IMPORTED_MODULE_4__["NodeComponent"],
        canActivate: [src_app_guards_authorization_guard__WEBPACK_IMPORTED_MODULE_12__["AuthorizationGuard"]],
        data: {
            allowedRoles: ['Phê duyệt node', 'Tạo mới node']
        }
    },
    {
        path: 'new-node',
        component: src_app_pages_new_node_new_node_component__WEBPACK_IMPORTED_MODULE_5__["NewNodeComponent"],
        canActivate: [src_app_guards_authorization_guard__WEBPACK_IMPORTED_MODULE_12__["AuthorizationGuard"]],
        data: {
            allowedRoles: ['Tạo mới node']
        }
    },
    {
        path: 'create-role',
        component: _pages_create_role_create_role_component__WEBPACK_IMPORTED_MODULE_9__["CreateRoleComponent"],
        canActivate: [src_app_guards_authorization_guard__WEBPACK_IMPORTED_MODULE_12__["AuthorizationGuard"]],
        data: {
            allowedRoles: ['Admin']
        }
    },
    {
        path: 'role',
        component: _pages_role_role_component__WEBPACK_IMPORTED_MODULE_10__["RoleComponent"],
        canActivate: [src_app_guards_authorization_guard__WEBPACK_IMPORTED_MODULE_12__["AuthorizationGuard"]],
        data: {
            allowedRoles: ['Phê duyệt user', 'Tạo mới user']
        }
    },
    {
        path: 'location',
        component: src_app_pages_location_location_component__WEBPACK_IMPORTED_MODULE_6__["LocationComponent"],
        canActivate: [src_app_guards_authorization_guard__WEBPACK_IMPORTED_MODULE_12__["AuthorizationGuard"]],
        data: {
            allowedRoles: ['Phê duyệt node', 'Tạo mới node']
        }
    },
    {
        path: 'new-location',
        component: src_app_pages_new_location_new_location_component__WEBPACK_IMPORTED_MODULE_7__["NewLocationComponent"],
        canActivate: [src_app_guards_authorization_guard__WEBPACK_IMPORTED_MODULE_12__["AuthorizationGuard"]],
        data: {
            allowedRoles: ['Admin']
        }
    },
    {
        path: 'pending-node',
        component: src_app_pages_pending_node_pending_node_component__WEBPACK_IMPORTED_MODULE_8__["PendingNodeComponent"],
        canActivate: [src_app_guards_authorization_guard__WEBPACK_IMPORTED_MODULE_12__["AuthorizationGuard"]],
        data: {
            allowedRoles: ['Phê duyệt node']
        }
    },
    {
        path: 'action-log',
        component: src_app_pages_action_log_action_log_component__WEBPACK_IMPORTED_MODULE_11__["ActionLogComponent"],
        canActivate: [src_app_guards_authorization_guard__WEBPACK_IMPORTED_MODULE_12__["AuthorizationGuard"]],
        data: {
            allowedRoles: ['Admin']
        }
    },
    {
        path: 'report',
        component: src_app_pages_report_report_component__WEBPACK_IMPORTED_MODULE_13__["ReportComponent"],
        canActivate: [src_app_guards_authorization_guard__WEBPACK_IMPORTED_MODULE_12__["AuthorizationGuard"]],
        data: {
            allowedRoles: ['Admin']
        }
    }
];


/***/ }),

/***/ "./src/app/pages/action-log/action-log.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/action-log/action-log.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjdGlvbi1sb2cvYWN0aW9uLWxvZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/action-log/action-log.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/action-log/action-log.component.ts ***!
  \**********************************************************/
/*! exports provided: ActionLogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionLogComponent", function() { return ActionLogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_actionlog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/actionlog.service */ "./src/app/services/actionlog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var ActionLogComponent = /** @class */ (function () {
    function ActionLogComponent(actionLogService, spinnerService) {
        this.actionLogService = actionLogService;
        this.spinnerService = spinnerService;
        this.actionLogList = [];
        this.filter = {
            action_user: undefined,
            action_type: undefined,
            collection_store: undefined,
            action_time: undefined
        };
        this.currentActionLog = [];
        this.currentPage = 1;
        this.sizePage = 5;
        // search
        this.searchActionUser = "";
        this.searchActionType = "";
        this.searchCollectionType = "";
        this.searchActionTime = "";
    }
    ActionLogComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getActionLogList(this.filter, this.currentPage, this.sizePage)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(ActionLogComponent.prototype, "fields", {
        get: function () {
            return FIELDS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionLogComponent.prototype, "details", {
        get: function () {
            return DETAILS;
        },
        enumerable: true,
        configurable: true
    });
    ActionLogComponent.prototype.getActionLogList = function (filter, currentPage, sizePage) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spinnerService.show();
                        this.currentPage = currentPage;
                        return [4 /*yield*/, this.actionLogService.getActionLogList(filter, currentPage, sizePage).then(function (data) {
                                _this.totalItems = data.total;
                                _this.actionLogList = data.data;
                            }).catch(function (err) {
                                _this.currentPage = 1;
                            })];
                    case 1:
                        _a.sent();
                        this.spinnerService.hide();
                        return [2 /*return*/];
                }
            });
        });
    };
    ActionLogComponent.prototype.getModalInfo = function (field) {
        if (Object.keys(this.currentActionLog).length && this.currentActionLog[field.name]) {
            return this.currentActionLog[field.name];
        }
    };
    ActionLogComponent.prototype.getTableInfo = function (data, name, key) {
        if (key === void 0) { key = ''; }
        if (Object.keys(data).length && data[name]) {
            if (key) {
                return data[name][key];
            }
            else {
                return data[name];
            }
        }
    };
    ActionLogComponent.prototype.search = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.searchActionType.length == 0) {
                            this.filter.action_type = undefined;
                        }
                        else {
                            this.filter.action_type = this.searchActionType;
                        }
                        if (this.searchActionUser.length == 0) {
                            this.filter.action_user = undefined;
                        }
                        else {
                            this.filter.action_user = this.searchActionUser;
                        }
                        if (this.searchCollectionType.length == 0) {
                            this.filter.collection_store = undefined;
                        }
                        else {
                            this.filter.collection_store = this.searchCollectionType;
                        }
                        if (this.searchActionTime.length == 0) {
                            this.filter.action_time = undefined;
                        }
                        else {
                            this.filter.action_time = this.searchActionTime;
                        }
                        this.currentPage = 1;
                        return [4 /*yield*/, this.getActionLogList(this.filter, this.currentPage, this.sizePage)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ActionLogComponent.prototype.reset = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.filter.action_time = undefined;
                        this.filter.action_user = undefined;
                        this.filter.action_type = undefined;
                        this.filter.collection_store = undefined;
                        this.searchActionTime = this.searchActionType = this.searchActionUser = this.searchCollectionType = "";
                        this.currentPage = 1;
                        return [4 /*yield*/, this.getActionLogList(this.filter, this.currentPage, this.sizePage)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ActionLogComponent.ctorParameters = function () { return [
        { type: src_app_services_actionlog_service__WEBPACK_IMPORTED_MODULE_2__["ActionlogService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] }
    ]; };
    ActionLogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-action-log',
            template: __importDefault(__webpack_require__(/*! raw-loader!./action-log.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/action-log/action-log.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./action-log.component.css */ "./src/app/pages/action-log/action-log.component.css")).default]
        }),
        __metadata("design:paramtypes", [src_app_services_actionlog_service__WEBPACK_IMPORTED_MODULE_2__["ActionlogService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]])
    ], ActionLogComponent);
    return ActionLogComponent;
}());

var FIELDS = [
    {
        label: "Kiểu tác động",
        name: "action_type",
    },
    {
        label: "Tên bảng",
        name: "collection_store",
    },
    {
        label: "Tài khoản tác động",
        name: "action_user",
        key: "username"
    },
    {
        label: "Thời gian tác động",
        name: "action_time"
    },
];
var DETAILS = [
    {
        label: "Request",
        name: "request",
    },
    {
        label: "Response",
        name: "response",
    },
    {
        label: "Dữ liệu cũ",
        name: "previous_data",
    },
    {
        label: "Dữ liệu hiện tại",
        name: "current_data",
    }
];


/***/ }),

/***/ "./src/app/pages/create-role/create-role.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/create-role/create-role.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS1yb2xlL2NyZWF0ZS1yb2xlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/create-role/create-role.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/create-role/create-role.component.ts ***!
  \************************************************************/
/*! exports provided: CreateRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRoleComponent", function() { return CreateRoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/role.service */ "./src/app/services/role.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var CreateRoleComponent = /** @class */ (function () {
    function CreateRoleComponent(toastrService, router, roles) {
        this.toastrService = toastrService;
        this.router = router;
        this.roles = roles;
        this.isCreateNode = false;
        this.role = {
            name: "",
            action_permission: [],
            area_permission: [],
        };
        // temp
        this.check = true;
        this.check_areas = true;
        this.name = [];
        this.area_name = [];
        this.checkCreateNode = -1;
        this.temp = "";
        this.selected_permission = "";
        this.selected_area = "";
    }
    CreateRoleComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.roles
                            .getActionPermissions()
                            .then(function (data) { return (_this.PERMISSIONS = data.data); })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.roles.getAreaPermissions().then(function (data) { return (_this.AREAS = data); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(CreateRoleComponent.prototype, "is_permissions_valid", {
        get: function () {
            if (this.check == true) {
                return true;
            }
            else {
                return this.role.action_permission.length > 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateRoleComponent.prototype, "is_areas_valid", {
        get: function () {
            return this.check_areas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateRoleComponent.prototype, "permissions", {
        get: function () {
            var _this = this;
            if (!this.PERMISSIONS || !this.PERMISSIONS.length) {
                return [];
            }
            return this.PERMISSIONS.filter(function (v) { return !_this.role.action_permission.includes(v._id); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateRoleComponent.prototype, "areas", {
        get: function () {
            var _this = this;
            if (!this.AREAS || !this.AREAS.length) {
                return [];
            }
            return this.AREAS.filter(function (v) { return !_this.role.area_permission.includes(v._id); });
        },
        enumerable: true,
        configurable: true
    });
    CreateRoleComponent.prototype.create = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isCreate;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isCreate = true;
                        if (!this.is_permissions_valid) {
                            this.check = false;
                        }
                        if (this.role.action_permission.includes("5f10c6c8aca322264669cb40") &&
                            this.role.area_permission.length == 0) {
                            this.check_areas = false;
                        }
                        if (this.role.action_permission.includes("5f10c6c8aca322264669cb40")) {
                            if (this.role.action_permission.includes("5f10c6dcaca322264669cb41")) {
                                this.toastrService.warning("Không được chọn cùng lúc 2 quyền: Tạo mới node và Phê duyệt node");
                                isCreate = false;
                            }
                        }
                        if (this.role.action_permission.includes("5ef8878ff768fa241cb226f1")) {
                            if (this.role.action_permission.includes("5f099925b591ba349aa02e33")) {
                                this.toastrService.warning("Không được chọn cùng lúc 2 quyền: Tạo mới người dùng và Phê duyệt người dùng");
                                isCreate = false;
                            }
                        }
                        if (this.role.action_permission.includes("5f10c6c8aca322264669cb40")) {
                            if (this.role.area_permission.length <= 0) {
                                isCreate = false;
                            }
                        }
                        if (!(this.is_permissions_valid == true && isCreate == true)) return [3 /*break*/, 2];
                        console.log(this.role);
                        return [4 /*yield*/, this.roles.createRole(this.role).then(function (data) {
                                _this.toastrService.success("Tạo mới vai trò thành công");
                                _this.router.navigate(["/role"]);
                            })
                                .catch(function (err) {
                                _this.toastrService.warning("Tạo mới vai trò thất bại");
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    CreateRoleComponent.prototype.selectPermission = function () {
        this.check = false;
        if (this.selected_permission == "5f10c6c8aca322264669cb40") {
            this.isCreateNode = true;
        }
        this.role.action_permission.push(this.selected_permission);
        this.name.push(this.getPermissionName(this.selected_permission));
        if (this.getPermissionName(this.selected_permission) == "Tạo mới node") {
            this.checkCreateNode = this.name.indexOf("Tạo mới node");
        }
        if (this.role.action_permission.length >= 1) {
            this.role.name = "";
            for (var i = 0; i < this.name.length; i++) {
                if (i == 0) {
                    this.role.name = this.role.name + this.name[i];
                }
                else {
                    this.role.name = this.role.name + ", " + this.name[i];
                }
            }
        }
        this.selected_permission = "";
    };
    CreateRoleComponent.prototype.selectArea = function () {
        this.role.area_permission.push(this.selected_area);
        this.area_name.push(this.getAreaName(this.selected_area));
        if (this.role.area_permission.length >= 1) {
            this.temp = "";
            for (var i = 0; i < this.area_name.length; i++) {
                if (i == 0) {
                    this.temp = this.temp + this.area_name[i];
                }
                else {
                    this.temp = this.temp + " + " + this.area_name[i];
                    console.log(this.temp);
                }
            }
        }
        if (this.checkCreateNode > -1) {
            this.name[this.checkCreateNode] = "Tạo mới node " + this.temp;
        }
        if (this.role.action_permission.length >= 1) {
            this.role.name = "";
            for (var i = 0; i < this.name.length; i++) {
                if (i == 0) {
                    this.role.name = this.role.name + this.name[i];
                }
                else {
                    this.role.name = this.role.name + ", " + this.name[i];
                }
            }
        }
        this.selected_area = "";
    };
    CreateRoleComponent.prototype.getPermissionName = function (id) {
        var permission = this.PERMISSIONS.find(function (v) { return v._id === id; });
        if (permission) {
            return permission.name;
        }
        return "Quyền không tên!";
    };
    CreateRoleComponent.prototype.getAreaName = function (id) {
        var area = this.AREAS.find(function (v) { return v._id === id; });
        if (area) {
            return area.name;
        }
        return "Khu vực không tên!";
    };
    CreateRoleComponent.prototype.removePermission = function (id) {
        this.role.action_permission = this.role.action_permission.filter(function (v) { return v !== id; });
        var index = this.name.indexOf(this.getPermissionName(id));
        if (index > -1) {
            this.name.splice(index, 1);
        }
        if (this.getPermissionName(id) == "Tạo mới node") {
            this.isCreateNode = false;
            this.name.splice(this.checkCreateNode, 1);
            this.checkCreateNode = -1;
            this.role.area_permission = [];
            this.area_name = [];
        }
        if (this.role.action_permission.length >= 1) {
            this.role.name = "";
            for (var i = 0; i < this.name.length; i++) {
                if (i == 0) {
                    this.role.name = this.role.name + this.name[i];
                }
                else {
                    this.role.name = this.role.name + ", " + this.name[i];
                }
            }
        }
    };
    CreateRoleComponent.prototype.removeArea = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, index, i, i;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.role;
                        return [4 /*yield*/, this.role.area_permission.filter(function (v) { return v !== id; })];
                    case 1:
                        _a.area_permission = _b.sent();
                        console.log(1, this.role.area_permission);
                        return [4 /*yield*/, this.area_name.indexOf(this.getAreaName(id))];
                    case 2:
                        index = _b.sent();
                        if (!(index > -1)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.area_name.splice(index, 1)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        console.log(2, this.area_name);
                        if (this.role.area_permission.length > 0) {
                            this.temp = "";
                            for (i = 0; i < this.area_name.length; i++) {
                                if (i == 0) {
                                    this.temp = this.temp + this.area_name[i];
                                }
                                else {
                                    this.temp = this.temp + " + " + this.area_name[i];
                                }
                            }
                        }
                        if (this.role.area_permission.length == 0) {
                            this.temp = "";
                        }
                        console.log(3, this.temp);
                        if (this.checkCreateNode > -1) {
                            this.name[this.checkCreateNode] = "Tạo mới node " + this.temp;
                        }
                        console.log(4, this.name[this.checkCreateNode]);
                        console.log(5, this.checkCreateNode);
                        if (this.role.action_permission.length >= 1) {
                            this.role.name = "";
                            for (i = 0; i < this.name.length; i++) {
                                if (i == 0) {
                                    this.role.name = this.role.name + this.name[i];
                                }
                                else {
                                    this.role.name = this.role.name + ", " + this.name[i];
                                }
                            }
                        }
                        console.log(6, this.role.name);
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateRoleComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: src_app_services_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"] }
    ]; };
    CreateRoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-create-role",
            template: __importDefault(__webpack_require__(/*! raw-loader!./create-role.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/create-role/create-role.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./create-role.component.css */ "./src/app/pages/create-role/create-role.component.css")).default]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_role_service__WEBPACK_IMPORTED_MODULE_3__["RoleService"]])
    ], CreateRoleComponent);
    return CreateRoleComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/src/chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _variables_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../variables/charts */ "./src/app/variables/charts.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


// core components

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.clicked = true;
        this.clicked1 = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        console.log(123);
        this.datasets = [
            [0, 20, 10, 30, 15, 40, 20, 60, 60],
            [0, 20, 5, 25, 10, 30, 15, 40, 40]
        ];
        this.data = this.datasets[0];
        var chartOrders = document.getElementById('chart-orders');
        Object(_variables_charts__WEBPACK_IMPORTED_MODULE_2__["parseOptions"])(chart_js__WEBPACK_IMPORTED_MODULE_1___default.a, Object(_variables_charts__WEBPACK_IMPORTED_MODULE_2__["chartOptions"])());
        var ordersChart = new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a(chartOrders, {
            type: 'bar',
            options: _variables_charts__WEBPACK_IMPORTED_MODULE_2__["chartExample2"].options,
            data: _variables_charts__WEBPACK_IMPORTED_MODULE_2__["chartExample2"].data
        });
        var chartSales = document.getElementById('chart-sales');
        this.salesChart = new chart_js__WEBPACK_IMPORTED_MODULE_1___default.a(chartSales, {
            type: 'line',
            options: _variables_charts__WEBPACK_IMPORTED_MODULE_2__["chartExample1"].options,
            data: _variables_charts__WEBPACK_IMPORTED_MODULE_2__["chartExample1"].data
        });
    };
    DashboardComponent.prototype.updateOptions = function () {
        this.salesChart.data.datasets[0].data = this.data;
        this.salesChart.update();
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __importDefault(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/dashboard/dashboard.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/icons/icons.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/icons/icons.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ljb25zL2ljb25zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/icons/icons.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/icons/icons.component.ts ***!
  \************************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
    }
    IconsComponent.prototype.ngOnInit = function () {
    };
    IconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-icons',
            template: __importDefault(__webpack_require__(/*! raw-loader!./icons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/icons/icons.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./icons.component.scss */ "./src/app/pages/icons/icons.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "./src/app/pages/location/location.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/location/location.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvY2F0aW9uL2xvY2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/location/location.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/location/location.component.ts ***!
  \******************************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var LocationComponent = /** @class */ (function () {
    function LocationComponent(locationService, spinnerService) {
        this.locationService = locationService;
        this.spinnerService = spinnerService;
        this.locationList = [];
        this.provinceList = [];
        this.districtList = [];
        this.currentLocation = {};
        this.searchProvince = "";
        this.searchDistrict = "";
        this.searchByProvince = "";
        this.searchByDistrict = "";
        this.checkCityCode = false;
        this.filter = {};
        this.currentPage = 1;
        this.sizePage = 5;
    }
    LocationComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getLocationList(this.filter, this.currentPage, this.sizePage)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getProvinceList()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(LocationComponent.prototype, "fields", {
        get: function () {
            return FIELDS;
        },
        enumerable: true,
        configurable: true
    });
    LocationComponent.prototype.getLocationList = function (filter, currentPage, sizePage) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spinnerService.show();
                        this.currentPage = currentPage;
                        return [4 /*yield*/, this.locationService.getLocationList(filter, currentPage, sizePage).then(function (data) {
                                _this.totalItems = data.total;
                                _this.locationList = data.data;
                            })];
                    case 1:
                        _a.sent();
                        this.spinnerService.hide();
                        return [2 /*return*/];
                }
            });
        });
    };
    LocationComponent.prototype.getProvinceList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.locationService.getProvinceList().then(function (data) {
                            _this.provinceList = data;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // async getDistrictList() {
    //   await this.locationService.getDistrictList().then(data => {
    //     this.districtList = data;
    //   })
    // }
    LocationComponent.prototype.getProvinceCodeAndProvinceId = function (value) {
        this.checkCityCode = true;
        this.provinceCode = value.code;
        this.searchByProvince = value._id;
        console.log(this.provinceCode, this.searchByProvince);
    };
    LocationComponent.prototype.getDistrictId = function (value) {
        this.searchByDistrict = value._id;
        console.log(this.searchByDistrict);
    };
    LocationComponent.prototype.search = function () {
    };
    LocationComponent.ctorParameters = function () { return [
        { type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_1__["LocationService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }
    ]; };
    LocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-location',
            template: __importDefault(__webpack_require__(/*! raw-loader!./location.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/location/location.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./location.component.css */ "./src/app/pages/location/location.component.css")).default]
        }),
        __metadata("design:paramtypes", [src_app_services_location_service__WEBPACK_IMPORTED_MODULE_1__["LocationService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], LocationComponent);
    return LocationComponent;
}());

var KEY_DATA = [
    {
        key: "province",
        type: "string",
    },
    {
        key: "district",
        type: "string",
    },
    {
        key: "sub_district",
        type: "string",
    },
    {
        key: "detail_location",
        type: "string",
    },
    {
        key: "latitude",
        type: "string",
    },
    {
        key: "longitude",
        type: "string",
    },
    {
        key: "numberNode",
        type: "number",
    },
    {
        key: "numberActiveNode",
        type: "number",
    },
    {
        key: "numberDeactiveNode",
        type: "number"
    }
];
var FIELDS = [
    // {
    //   label: "Tên khu vực",
    //   name: "name",
    // },
    {
        label: "Địa chỉ",
        name: "detail_location",
    },
    {
        label: "Phường",
        name: "sub_district",
    },
    {
        label: "Quận",
        name: "district",
    },
    {
        label: "Thành phố",
        name: "province"
    },
];


/***/ }),

/***/ "./src/app/pages/maps/maps.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/maps/maps.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcHMvbWFwcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/maps/maps.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/maps/maps.component.ts ***!
  \**********************************************/
/*! exports provided: MapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsComponent", function() { return MapsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var MapsComponent = /** @class */ (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
        var map = document.getElementById('map-canvas');
        var lat = map.getAttribute('data-lat');
        var lng = map.getAttribute('data-lng');
        var myLatlng = new google.maps.LatLng(lat, lng);
        var mapOptions = {
            zoom: 12,
            scrollwheel: false,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
                { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#444444" }] },
                { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] },
                { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] },
                { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] },
                { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] },
                { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
                { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] },
                { "featureType": "water", "elementType": "all", "stylers": [{ "color": '#5e72e4' }, { "visibility": "on" }] }
            ]
        };
        map = new google.maps.Map(map, mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Hello World!'
        });
        var contentString = '<div class="info-window-content"><h2>Argon Dashboard</h2>' +
            '<p>A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</p></div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });
    };
    MapsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-maps',
            template: __importDefault(__webpack_require__(/*! raw-loader!./maps.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/maps.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./maps.component.scss */ "./src/app/pages/maps/maps.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], MapsComponent);
    return MapsComponent;
}());



/***/ }),

/***/ "./src/app/pages/new-location/new-location.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/new-location/new-location.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ldy1sb2NhdGlvbi9uZXctbG9jYXRpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/new-location/new-location.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/new-location/new-location.component.ts ***!
  \**************************************************************/
/*! exports provided: NewLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewLocationComponent", function() { return NewLocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var NewLocationComponent = /** @class */ (function () {
    function NewLocationComponent(locationService, toastrService, router) {
        this.locationService = locationService;
        this.toastrService = toastrService;
        this.router = router;
        this.newLocation = {
            province: "",
            district: "",
            sub_district: "",
            detail_location: "",
            // numberNode: "",
            // numberActiveNode: "",
            // numberDeactiveNode: "",
            latitude: "",
            longitude: "",
        };
        this.chosenProvince = "";
        this.chosenDistrict = "";
        this.chosenSubDistrict = "";
        // declare invalid variables
        this.isProvinceInvalid = false;
        this.isDistrictInvalid = false;
        this.isSubDistrictInvalid = false;
        this.isDetailLocationInvalid = false;
        this.isLatitudeInvalid = false;
        this.isLongitudeInvalid = false;
        this.checkSelectedProvince = false;
        this.checkSelectedDistrict = false;
    }
    NewLocationComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.getProvinceList();
                return [2 /*return*/];
            });
        });
    };
    // async ngAfterViewInit() {
    //   this.message = this.map.latlng;
    //   console.log(this.message);
    // }
    NewLocationComponent.prototype.createLocation = function () {
        var _this = this;
        if (!this.newLocation.province) {
            this.isProvinceInvalid = true;
        }
        else {
            this.isProvinceInvalid = false;
        }
        if (!this.newLocation.district) {
            this.isDistrictInvalid = true;
        }
        else {
            this.isDistrictInvalid = false;
        }
        if (!this.newLocation.sub_district) {
            this.isSubDistrictInvalid = true;
        }
        else {
            this.isSubDistrictInvalid = false;
        }
        if (!this.newLocation.detail_location) {
            this.isDetailLocationInvalid = true;
        }
        else {
            this.isDetailLocationInvalid = false;
        }
        if (!this.newLocation.latitude) {
            this.isLatitudeInvalid = true;
        }
        else {
            this.isLatitudeInvalid = false;
        }
        if (!this.newLocation.longitude) {
            this.isLongitudeInvalid = true;
        }
        else {
            this.isLongitudeInvalid = false;
        }
        if (!this.isProvinceInvalid && !this.isDistrictInvalid && !this.isSubDistrictInvalid && !this.isDetailLocationInvalid && !this.isLatitudeInvalid && !this.isLongitudeInvalid) {
            // this.newLocation.numberNode = this.newLocation.numberActiveNode = this.newLocation.numberDeactiveNode = "0";
            console.log(this.newLocation);
            this.locationService.createLocation(this.newLocation)
                .then(function (data) {
                _this.toastrService.success("Tạo mới khu vực thành công");
                _this.router.navigate(["/location"]);
            })
                .catch(function (err) {
                _this.toastrService.warning("Tạo mới khu vực thất bại");
            });
        }
    };
    NewLocationComponent.prototype.redirect = function () {
        this.router.navigate(["/location"]);
    };
    NewLocationComponent.prototype.getProvinceList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.locationService.getProvinceList().then(function (data) {
                    _this.provinceList = data;
                });
                return [2 /*return*/];
            });
        });
    };
    // async getDistrictList() {
    //   this.locationService.getDistrictList().then(data => {
    //     this.districtList = data;
    //   })
    // }
    // async getSubDistrictList() {
    //   this.locationService.getSubDistrictList().then(data => {
    //     this.sub_districtList = data;
    //   })
    // }
    NewLocationComponent.prototype.checkProvince = function (value) {
        var _this = this;
        if (value) {
            this.isProvinceInvalid = false;
            this.provinceCode = value.code;
            this.checkSelectedProvince = true;
            this.newLocation.province = value._id;
            this.locationService.getDistrictList({ parent_code: value.code }).then(function (data) {
                _this.districtList = data;
            });
        }
        else {
            this.isProvinceInvalid = true;
            this.checkSelectedProvince = false;
        }
    };
    NewLocationComponent.prototype.checkDistrict = function (value) {
        var _this = this;
        if (value) {
            this.isDistrictInvalid = false;
            this.districtCode = value.code;
            this.checkSelectedDistrict = true;
            this.newLocation.district = value._id;
            this.locationService.getSubDistrictList({ parent_code: value.code }).then(function (data) {
                _this.sub_districtList = data;
            });
        }
        else {
            this.isDistrictInvalid = true;
            this.checkSelectedDistrict = false;
        }
    };
    NewLocationComponent.prototype.checkSubDistrict = function (value) {
        if (value) {
            this.isSubDistrictInvalid = false;
            this.newLocation.sub_district = value._id;
        }
        else {
            this.isSubDistrictInvalid = true;
        }
    };
    NewLocationComponent.prototype.checkDetail = function (value) {
        if (value) {
            this.isDetailLocationInvalid = false;
        }
        else {
            this.isDetailLocationInvalid = true;
        }
    };
    NewLocationComponent.prototype.checkLatitude = function (value) {
        if (value) {
            this.isLatitudeInvalid = false;
        }
        else {
            this.isLatitudeInvalid = true;
        }
    };
    NewLocationComponent.prototype.checkLongitude = function (value) {
        if (value) {
            this.isLongitudeInvalid = false;
        }
        else {
            this.isLongitudeInvalid = true;
        }
    };
    NewLocationComponent.prototype.addItem = function (newItem) {
        this.newLocation.latitude = newItem.lat;
        this.newLocation.longitude = newItem.lon;
    };
    NewLocationComponent.ctorParameters = function () { return [
        { type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_1__["LocationService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    NewLocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-location',
            template: __importDefault(__webpack_require__(/*! raw-loader!./new-location.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-location/new-location.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./new-location.component.css */ "./src/app/pages/new-location/new-location.component.css")).default]
        }),
        __metadata("design:paramtypes", [src_app_services_location_service__WEBPACK_IMPORTED_MODULE_1__["LocationService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewLocationComponent);
    return NewLocationComponent;
}());



/***/ }),

/***/ "./src/app/pages/new-node/new-node.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/new-node/new-node.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ldy1ub2RlL25ldy1ub2RlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/new-node/new-node.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/new-node/new-node.component.ts ***!
  \******************************************************/
/*! exports provided: NewNodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewNodeComponent", function() { return NewNodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_services_node_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/node.service */ "./src/app/services/node.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/location.service */ "./src/app/services/location.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var NewNodeComponent = /** @class */ (function () {
    function NewNodeComponent(nodeService, toastrService, router, locationService, profileSerive) {
        this.nodeService = nodeService;
        this.toastrService = toastrService;
        this.router = router;
        this.locationService = locationService;
        this.profileSerive = profileSerive;
        this.newNode = {
            name: "",
            location: "",
            co2_status: "",
            co_status: "",
            dust_status: "",
            temperature_status: "",
            humidity_status: "",
            status: "",
            approve: "",
            ip: "",
            created_by: ""
        };
        this.id_current_user = "";
        // declare invalid variables
        this.isNameInvalid = false;
        this.isLocationInvalid = false;
        this.isIpInvalid = false;
    }
    NewNodeComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.nodeService.getNodeListNoFilter().then(function (data) {
                            var temp = data.total + 1;
                            _this.newNode.name = "Node " + temp;
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getLocationList()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewNodeComponent.prototype.createNode = function () {
        var _this = this;
        if (!this.newNode.location) {
            this.isLocationInvalid = true;
        }
        else {
            this.isLocationInvalid = false;
        }
        if (!this.newNode.ip) {
            this.isIpInvalid = true;
        }
        else {
            this.isIpInvalid = false;
        }
        if (!this.newNode.name) {
            this.isNameInvalid = true;
        }
        else {
            this.isNameInvalid = false;
        }
        if (!this.isIpInvalid && !this.isNameInvalid && !this.isLocationInvalid) {
            console.log(this.newNode);
            this.newNode.approve = "0";
            this.newNode.status = "0";
            this.newNode.created_by = this.id_current_user;
            this.nodeService
                .createNode(this.newNode)
                .then(function (data) {
                _this.toastrService.success("Node mới tạo đang trong danh sách chờ phê duyệt");
                _this.router.navigate(["/node"]);
            })
                .catch(function (err) {
                _this.toastrService.warning("Tạo mới node thất bại");
            });
        }
    };
    NewNodeComponent.prototype.redirect = function () {
        this.router.navigate(["/node"]);
    };
    NewNodeComponent.prototype.getLocationList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.locationService.getLocationListNoFilter().then(function (data) {
                            _this.locationList = data.data;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewNodeComponent.prototype.checkName = function (value) {
        if (value) {
            this.isNameInvalid = false;
        }
        else {
            this.isNameInvalid = true;
        }
    };
    NewNodeComponent.prototype.checkLocation = function (value) {
        if (value) {
            this.isLocationInvalid = false;
        }
        else {
            this.isLocationInvalid = true;
        }
    };
    NewNodeComponent.prototype.checkIp = function (value) {
        if (value) {
            this.isIpInvalid = false;
        }
        else {
            this.isIpInvalid = true;
        }
    };
    NewNodeComponent.ctorParameters = function () { return [
        { type: src_app_services_node_service__WEBPACK_IMPORTED_MODULE_1__["NodeService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"] },
        { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] }
    ]; };
    NewNodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-new-node",
            template: __importDefault(__webpack_require__(/*! raw-loader!./new-node.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-node/new-node.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./new-node.component.css */ "./src/app/pages/new-node/new-node.component.css")).default]
        }),
        __metadata("design:paramtypes", [src_app_services_node_service__WEBPACK_IMPORTED_MODULE_1__["NodeService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"],
            src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]])
    ], NewNodeComponent);
    return NewNodeComponent;
}());



/***/ }),

/***/ "./src/app/pages/new-user/new-user.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/new-user/new-user.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ldy11c2VyL25ldy11c2VyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/new-user/new-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/new-user/new-user.component.ts ***!
  \******************************************************/
/*! exports provided: NewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserComponent", function() { return NewUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_services_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/role.service */ "./src/app/services/role.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var NewUserComponent = /** @class */ (function () {
    // isAdminChecked: boolean = false;
    // isCreateUserChecked: boolean = false;
    // isEditUserChecked: boolean = false;
    // isApproveUserChecked: boolean = false;
    // isCreateNodeChecked: boolean = false;
    // isEditNodeChecked: boolean = false;
    function NewUserComponent(userService, roleService, toastrService, router) {
        this.userService = userService;
        this.roleService = roleService;
        this.toastrService = toastrService;
        this.router = router;
        this.checkCreateNodeRole = false;
        this.checkEditNodeRole = false;
        this.userList = [];
        this.roleList = [];
        this.newUser = {
            _id: "",
            username: "",
            approve: "",
            name: "",
            email: "",
            password: "",
            phone: "",
            role: "",
            status: ""
        };
        this.filter = {};
        this.currentPage = 1;
        this.sizePage = 5;
        // declare variables to check validation of inputs
        this.checkValidationEmail = {
            length: true,
            unique: true
        };
        this.checkValidationName = {
            length: true
        };
        this.checkValidationPhone = {
            length: true,
            unique: true
        };
        // declare invalid variables
        this.isUsernameInvalid = false;
        this.isNameInvalid = false;
        this.isRoleInvalid = false;
        this.isEmailInvalid = false;
        this.isPhoneInvalid = false;
        this.checkInput = false;
        this.newUser = {
            _id: "",
            username: "",
            approve: "",
            name: "",
            email: "",
            password: "",
            phone: "",
            role: "",
            status: "",
        };
    }
    NewUserComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var temp;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.getUserList(this.filter, this.currentPage, this.sizePage).then(function (data) {
                            temp = data.total + 1;
                            if (data.total < 10) {
                                _this.newUser.username = "A000" + temp;
                            }
                            else if (data.total >= 10) {
                                _this.newUser.username = "A00" + temp;
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.userService.getUserList(this.filter, 1, temp).then(function (data) {
                                _this.userList = data.data;
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.getRoleList()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewUserComponent.prototype.getRoleList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.roleService.getRoles().then(function (data) {
                            _this.roleList = data.data;
                            console.log(_this.roleList);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewUserComponent.prototype.createUser = function () {
        var _this = this;
        if (!this.newUser.username) {
            this.isUsernameInvalid = true;
        }
        else {
            this.isUsernameInvalid = false;
        }
        if (!this.newUser.name) {
            this.isNameInvalid = true;
        }
        else {
            this.isNameInvalid = false;
        }
        if (!this.newUser.role) {
            this.isRoleInvalid = true;
        }
        else {
            this.isRoleInvalid = false;
        }
        if (!this.newUser.email) {
            this.isEmailInvalid = true;
        }
        else {
            this.isEmailInvalid = false;
        }
        if (!this.newUser.phone) {
            this.isPhoneInvalid = true;
        }
        else {
            this.isPhoneInvalid = false;
        }
        if (this.newUser.name.length >= 5 && this.newUser.name.length <= 255) {
            this.checkValidationName.length = true;
        }
        else {
            this.checkValidationName.length = false;
        }
        if (this.newUser.email.length >= 6 && this.newUser.email.length <= 255) {
            this.checkValidationEmail.length = true;
        }
        else {
            this.checkValidationEmail.length = false;
        }
        if (!this.isUsernameInvalid && !this.isNameInvalid && !this.isRoleInvalid && !this.isEmailInvalid && !this.isPhoneInvalid) {
            this.newUser.approve = "0";
            this.newUser.status = "0";
            this.newUser.password = "123456";
            this.userService.createUser(this.newUser)
                .then(function (data) {
                _this.toastrService.success("Tài khoản đang trong danh sách chờ phê duyệt");
                _this.router.navigate(["/user"]);
            })
                .catch(function (err) {
                _this.toastrService.warning("Yêu cầu tạo tài khoản thất bại");
            });
        }
    };
    NewUserComponent.prototype.redirect = function () {
        this.newUser = {
            _id: "",
            username: "",
            approve: "",
            name: "",
            email: "",
            password: "",
            phone: "",
            role: "",
            status: ""
        };
        this.router.navigate(["/new-user"]);
    };
    NewUserComponent.prototype.checkValue = function (event) {
        console.log(event);
    };
    NewUserComponent.prototype.checkUsername = function (value) {
        if (value) {
            this.isUsernameInvalid = false;
        }
        else {
            this.isUsernameInvalid = true;
        }
    };
    NewUserComponent.prototype.checkName = function (value) {
        if (value) {
            this.isNameInvalid = false;
        }
        else {
            this.isNameInvalid = true;
        }
        if (value.length >= 5 && value.length <= 255) {
            this.checkValidationName.length = true;
        }
        else {
            this.checkValidationName.length = false;
        }
    };
    NewUserComponent.prototype.checkRole = function (value) {
        if (value) {
            this.isRoleInvalid = false;
        }
        else {
            this.isRoleInvalid = true;
        }
    };
    NewUserComponent.prototype.checkEmail = function (value) {
        if (value) {
            this.isEmailInvalid = false;
        }
        else {
            this.isEmailInvalid = true;
        }
        if (value.length >= 6 && value.length <= 255) {
            this.checkValidationEmail.length = true;
        }
        else {
            this.checkValidationEmail.length = false;
        }
        if (!!this.userList.find(function (e) { return e.email == value; })) {
            this.checkValidationEmail.unique = false;
        }
        else {
            this.checkValidationEmail.unique = true;
        }
    };
    NewUserComponent.prototype.checkPhone = function (value) {
        if (value) {
            this.isPhoneInvalid = false;
        }
        else {
            this.isPhoneInvalid = true;
        }
        if (!!this.userList.find(function (e) { return e.phone == value; })) {
            this.checkValidationPhone.unique = false;
        }
        else {
            this.checkValidationPhone.unique = true;
        }
    };
    NewUserComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: src_app_services_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    NewUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-user',
            template: __importDefault(__webpack_require__(/*! raw-loader!./new-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-user/new-user.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./new-user.component.css */ "./src/app/pages/new-user/new-user.component.css")).default]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_services_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NewUserComponent);
    return NewUserComponent;
}());

var ROLES = [
    { _id: '5ef888abf768fa241cb226f5', role: 'Vai trò 1' },
    { _id: '2', role: 'Vai trò 2' },
];


/***/ }),

/***/ "./src/app/pages/node/node.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/node/node.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".prl-15 {\r\n  padding: 0 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm9kZS9ub2RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbm9kZS9ub2RlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJsLTE1IHtcclxuICBwYWRkaW5nOiAwIDE1cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/pages/node/node.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/node/node.component.ts ***!
  \**********************************************/
/*! exports provided: NodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeComponent", function() { return NodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_node_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/node.service */ "./src/app/services/node.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/location.service */ "./src/app/services/location.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var NodeComponent = /** @class */ (function () {
    function NodeComponent(nodeService, profileService, locationService, toastrService, spinnerService) {
        this.nodeService = nodeService;
        this.profileService = profileService;
        this.locationService = locationService;
        this.toastrService = toastrService;
        this.spinnerService = spinnerService;
        this.nodeList = [];
        this.districtList = [];
        this.currentNode = {};
        this.filter = {
            approve: "1",
            status: undefined,
            name: undefined,
            district: undefined,
            detail_location: undefined
        };
        this.filter1 = {
            approve: "1",
            status: undefined,
            name: undefined,
            district: undefined,
            location_info: undefined
        };
        this.currentPage = 1;
        this.sizePage = 5;
        // check permission
        this.isHavingEditNodePermission = 0; //1: Admin   2: Tạo mới node    3: Phê duyệt node
        this.districCode = [];
        //search
        this.searchName = "";
        this.searchDistrict = "";
        this.searchDetailLocation = "";
        this.searchStatus = "";
        // check 
        this.check = true;
    }
    NodeComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.currentPage = 1;
                        this.spinnerService.show();
                        return [4 /*yield*/, this.checkEditNodePermission()];
                    case 1:
                        _a.sent();
                        this.spinnerService.hide();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(NodeComponent.prototype, "fields", {
        get: function () {
            return FIELDS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NodeComponent.prototype, "envs", {
        get: function () {
            return ENV;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NodeComponent.prototype, "key_data", {
        get: function () {
            return KEY_DATA;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NodeComponent.prototype, "modal", {
        get: function () {
            return MODAL;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NodeComponent.prototype, "data", {
        get: function () {
            return {
                status: STATUS,
                sensor: SENSOR,
            };
        },
        enumerable: true,
        configurable: true
    });
    NodeComponent.prototype.is_string = function (type) {
        return type === "string";
    };
    NodeComponent.prototype.is_boolean = function (type) {
        return type === "boolean";
    };
    NodeComponent.prototype.is_input = function (type) {
        return type === "input";
    };
    NodeComponent.prototype.is_select = function (type) {
        return type === "select";
    };
    NodeComponent.prototype.is_switch = function (type) {
        return type === "switch";
    };
    NodeComponent.prototype.status_vn = function (value) {
        return value ? "Đang hoạt động" : "Dừng hoạt động";
    };
    NodeComponent.prototype.getNodeList = function (filter, currentPage, sizePage) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.currentPage = currentPage;
                        return [4 /*yield*/, this.nodeService.getNodeList(filter, currentPage, sizePage).then(function (data) {
                                _this.check = true;
                                _this.totalItems = data.total;
                                _this.nodeList = data.data;
                                console.log(data);
                            }).catch(function (err) {
                                _this.check = false;
                                _this.currentPage = 1;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NodeComponent.prototype.updateNodeInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.nodeService
                            .updateNodeInfo(this.currentNode._id, {
                            temperature_status: this.currentNode.temperature_status,
                            humidity_status: this.currentNode.humidity_status,
                            co_status: this.currentNode.co_status,
                            co2_status: this.currentNode.co2_status,
                            dust_status: this.currentNode.dust_status
                        })
                            .then(function (data) {
                            _this.toastrService.success("Cập nhật thông tin node thành công");
                        })
                            .catch(function (err) {
                            _this.toastrService.warning("Cập nhật thông tin node thất bại");
                        })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.nodeService.updateStatus(this.currentNode._id, {
                                status: this.currentNode.status
                            })
                                .then(function (data) { })
                                .catch(function (err) {
                                _this.toastrService.warning("Cập nhật trạng thái node thất bại");
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NodeComponent.prototype.checkEditNodePermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            var nameRole, actionName, areaName, check;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nameRole = "";
                        actionName = [];
                        areaName = [];
                        return [4 /*yield*/, this.profileService.getProfile().then(function (data) {
                                nameRole = data.role.name;
                                actionName = data.role.action_permission;
                                areaName = data.role.area_permission;
                                _this.districtList = data.role.area_permission;
                            })];
                    case 1:
                        _a.sent();
                        if (!(nameRole == "Admin")) return [3 /*break*/, 4];
                        this.isHavingEditNodePermission = 1;
                        this.currentPage = 1;
                        return [4 /*yield*/, this.getNodeList(this.filter, this.currentPage, this.sizePage)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.locationService.getDistrictList({}).then(function (data) { return _this.districtList = data; })];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 4:
                        check = [];
                        return [4 /*yield*/, actionName.forEach(function (e) {
                                check.push(e.name);
                            })];
                    case 5:
                        _a.sent();
                        if (!check.includes("Tạo mới node")) return [3 /*break*/, 8];
                        return [4 /*yield*/, areaName.forEach(function (e) {
                                _this.districCode.push(e._id);
                            })];
                    case 6:
                        _a.sent();
                        console.log('districtCode', this.districCode);
                        this.filter.district = this.districCode;
                        this.currentPage = 1;
                        return [4 /*yield*/, this.getNodeList(this.filter, this.currentPage, this.sizePage)];
                    case 7:
                        _a.sent();
                        this.isHavingEditNodePermission = 2;
                        return [3 /*break*/, 9];
                    case 8:
                        this.isHavingEditNodePermission = 3;
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    NodeComponent.prototype.getFullLocation = function () {
        if (!Object.keys(this.currentNode).length) {
            return;
        }
        return this.currentNode.location_info.detail_location +
            ', ' +
            this.currentNode.district.name +
            ', ' +
            this.currentNode.province.name;
    };
    NodeComponent.prototype.search = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.searchName.length == 0) {
                            this.filter.name = undefined;
                        }
                        else {
                            this.filter.name = this.searchName;
                        }
                        if (this.searchDetailLocation.length == 0) {
                            this.filter.detail_location = undefined;
                        }
                        else {
                            this.filter.detail_location = this.searchDetailLocation;
                        }
                        if (this.isHavingEditNodePermission == 2) {
                            if (this.searchDistrict.length == 0) {
                                this.filter.district = this.districCode;
                            }
                            else {
                                if (this.searchDistrict == "all") {
                                    this.filter.district = this.districCode;
                                }
                                else {
                                    this.filter.district = [];
                                    this.filter.district.push(this.searchDistrict);
                                }
                            }
                        }
                        else {
                            if (this.searchDistrict.length == 0) {
                                this.filter.district = undefined;
                            }
                            else {
                                if (this.searchDistrict == "all") {
                                    this.filter.district = undefined;
                                }
                                else {
                                    this.filter.district = [];
                                    this.filter.district.push(this.searchDistrict);
                                }
                            }
                        }
                        if (this.searchStatus.length == 0) {
                            this.filter.status = undefined;
                        }
                        else {
                            if (this.searchStatus == "all") {
                                this.filter.status = undefined;
                            }
                            else {
                                this.filter.status = String(this.searchStatus);
                            }
                        }
                        console.log(this.filter);
                        this.currentPage = 1;
                        this.spinnerService.show();
                        return [4 /*yield*/, this.getNodeList(this.filter, this.currentPage, this.sizePage)];
                    case 1:
                        _a.sent();
                        this.spinnerService.hide();
                        return [2 /*return*/];
                }
            });
        });
    };
    NodeComponent.prototype.reset = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.filter.district = undefined;
                        this.filter.name = undefined;
                        this.filter.detail_location = undefined;
                        this.filter.status = undefined;
                        this.searchName = this.searchDistrict = this.searchDetailLocation = this.searchStatus = "";
                        if (this.isHavingEditNodePermission == 2) {
                            this.filter.district = this.districCode;
                        }
                        this.currentPage = 1;
                        this.spinnerService.show();
                        return [4 /*yield*/, this.getNodeList(this.filter, this.currentPage, this.sizePage)];
                    case 1:
                        _a.sent();
                        this.spinnerService.hide();
                        return [2 /*return*/];
                }
            });
        });
    };
    NodeComponent.ctorParameters = function () { return [
        { type: _services_node_service__WEBPACK_IMPORTED_MODULE_1__["NodeService"] },
        { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"] },
        { type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
    ]; };
    NodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-node",
            template: __importDefault(__webpack_require__(/*! raw-loader!./node.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/node/node.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./node.component.css */ "./src/app/pages/node/node.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_node_service__WEBPACK_IMPORTED_MODULE_1__["NodeService"],
            src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"],
            src_app_services_location_service__WEBPACK_IMPORTED_MODULE_5__["LocationService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], NodeComponent);
    return NodeComponent;
}());

var KEY_DATA = [
    {
        key: "name",
        type: "string",
    },
    {
        key: "location_info",
        type: "string",
    },
    {
        key: "ip",
        type: "string",
    },
    {
        key: "status",
        type: "boolean",
    },
    {
        key: "temperature_status",
        type: "boolean",
    },
    {
        key: "humidity_status",
        type: "boolean",
    },
    {
        key: "co2_status",
        type: "boolean",
    },
    {
        key: "dust_status",
        type: "boolean",
    },
    {
        key: "co_status",
        type: "boolean",
    }
];
var FIELDS = [
    {
        label: "Tên node",
        name: "name",
    },
    {
        label: "Khu vực",
        name: "location_info",
    },
    {
        label: "IP",
        name: "ip",
    },
    {
        label: "Trạng thái",
        name: "status",
    }
];
var ENV = [
    {
        label: "Nhiệt độ",
    },
    {
        label: "Độ ẩm",
    },
    {
        label: "CO2",
    },
    {
        label: "CO",
    },
    {
        label: "Bụi PM 2.5",
    }
];
var MODAL = [
    {
        label: "Tên node",
        fin: "name",
        key: "name",
        type: "input",
        readonly: true,
    },
    {
        label: "Trạng thái",
        fin: "status",
        key: "status",
        type: "select",
    },
    {
        label: "Khu vực",
        fin: "location",
        key: "location_info",
        type: "input",
        readonly: true,
    },
    {
        label: "IP",
        fin: "ip",
        key: "ip",
        type: "input",
        readonly: true,
    },
];
var STATUS = [
    { value: 1, name: "Đang hoạt động" },
    { value: 0, name: "Dừng hoạt động" },
];
var SENSOR = [
    {
        label: "Nhiệt độ",
        fin: "temperatureStatus",
        key: "temperature_status",
    },
    {
        label: "Độ ẩm",
        fin: "humidityStatus",
        key: "humidity_status",
    },
    {
        label: "CO2",
        fin: "co2Status",
        key: "co2_status",
    },
    {
        label: "CO",
        fin: "coStatus",
        key: "co_status",
    },
    {
        label: "Bụi PM2.5",
        fin: "dustStatus",
        key: "dust_status",
    },
];


/***/ }),

/***/ "./src/app/pages/pagination/pagination.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/pagination/pagination.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/pagination/pagination.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/pagination/pagination.component.ts ***!
  \**********************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.changePage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.initialPage = 1;
        this.pageSize = 5;
        this.maxPages = 5;
        this.pageEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pager = {};
        this.currentPage = 1;
    }
    PaginationComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.currentPage = 1;
                // await this.pagination(this.currentPage);
                this.setPage(this.initialPage);
                return [2 /*return*/];
            });
        });
    };
    PaginationComponent.prototype.ngOnChanges = function (changes) {
        return __awaiter(this, void 0, void 0, function () {
            var totalPages;
            return __generator(this, function (_a) {
                totalPages = changes.totalPages;
                if (totalPages && totalPages.currentValue !== totalPages.previousValue) {
                    this.setPage(this.pager.currentPage);
                }
                return [2 /*return*/];
            });
        });
    };
    PaginationComponent.prototype.setPage = function (page) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: 
                    // get new pager object for specified page
                    return [4 /*yield*/, this.pageEmit.emit(page)];
                    case 1:
                        // get new pager object for specified page
                        _b.sent();
                        _a = this;
                        return [4 /*yield*/, this.paginate(this.totalPages, page, this.pageSize, this.maxPages)];
                    case 2:
                        _a.pager = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PaginationComponent.prototype.paginate = function (totalItems, currentPage, pageSize, maxPages) {
        if (currentPage === void 0) {
            currentPage = 1;
        }
        if (pageSize === void 0) {
            pageSize = 10;
        }
        if (maxPages === void 0) {
            maxPages = 10;
        }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        var startPage, endPage;
        if (totalPages <= maxPages) {
            // total pages less than max so show all pages
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // total pages more than max so calculate start and end pages
            var maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
            var maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
            if (currentPage <= maxPagesBeforeCurrentPage) {
                // current page near the start
                startPage = 1;
                endPage = maxPages;
            }
            else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
                // current page near the end
                startPage = totalPages - maxPages + 1;
                endPage = totalPages;
            }
            else {
                // current page somewhere in the middle
                startPage = currentPage - maxPagesBeforeCurrentPage;
                endPage = currentPage + maxPagesAfterCurrentPage;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        // return object with all pager properties required by the view
        console.log(pages);
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "changePage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "initialPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "pageSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "maxPages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "totalPages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "pageEmit", void 0);
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagination',
            template: __importDefault(__webpack_require__(/*! raw-loader!./pagination.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pagination/pagination.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./pagination.component.css */ "./src/app/pages/pagination/pagination.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/pages/pending-node/pending-node.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/pending-node/pending-node.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlbmRpbmctbm9kZS9wZW5kaW5nLW5vZGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/pending-node/pending-node.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/pending-node/pending-node.component.ts ***!
  \**************************************************************/
/*! exports provided: PendingNodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingNodeComponent", function() { return PendingNodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_services_node_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/node.service */ "./src/app/services/node.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var PendingNodeComponent = /** @class */ (function () {
    function PendingNodeComponent(nodeService, spinnerService, toastrService) {
        this.nodeService = nodeService;
        this.spinnerService = spinnerService;
        this.toastrService = toastrService;
        this.filter = {
            approve: ""
        };
        this.currentNode = {};
        this.currentPage = 1;
        this.sizePage = 5;
        //check
        this.checkNodeList = true;
        this.checkApproveNodeList = true;
        this.checkDisapproveNodeList = true;
    }
    Object.defineProperty(PendingNodeComponent.prototype, "key_data", {
        get: function () {
            return KEY_DATA;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PendingNodeComponent.prototype, "fields", {
        get: function () {
            return FIELDS;
        },
        enumerable: true,
        configurable: true
    });
    PendingNodeComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPending()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PendingNodeComponent.prototype.getNodeList = function (filter, currentPage, sizePage) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spinnerService.show();
                        this.currentPage = currentPage;
                        return [4 /*yield*/, this.nodeService.getNodeList(filter, currentPage, sizePage).then(function (data) {
                                _this.totalItems = data.total;
                                _this.nodeList = data.data;
                                if (_this.nodeList == "") {
                                    _this.checkNodeList = false;
                                }
                                else {
                                    _this.checkNodeList = true;
                                }
                            }).catch(function (err) {
                                _this.currentPage = 1;
                            })];
                    case 1:
                        _a.sent();
                        this.spinnerService.hide();
                        return [2 /*return*/];
                }
            });
        });
    };
    PendingNodeComponent.prototype.getApprovedNodeList = function (filter, currentPage, sizePage) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spinnerService.show();
                        this.currentPage = currentPage;
                        return [4 /*yield*/, this.nodeService.getNodeList(filter, currentPage, sizePage).then(function (data) {
                                _this.totalItems1 = data.total;
                                _this.approveNodeList = data.data;
                                if (_this.approveNodeList == "") {
                                    _this.checkApproveNodeList = false;
                                }
                                else {
                                    _this.checkApproveNodeList = true;
                                }
                            }).catch(function (err) {
                                _this.currentPage = 1;
                            })];
                    case 1:
                        _a.sent();
                        this.spinnerService.hide();
                        return [2 /*return*/];
                }
            });
        });
    };
    PendingNodeComponent.prototype.getDisapprovedNodeList = function (filter, currentPage, sizePage) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spinnerService.show();
                        this.currentPage = currentPage;
                        return [4 /*yield*/, this.nodeService.getNodeList(filter, currentPage, sizePage).then(function (data) {
                                _this.totalItems2 = data.total;
                                _this.disapproveNodeList = data.data;
                                if (_this.disapproveNodeList == "") {
                                    _this.checkDisapproveNodeList = false;
                                }
                                else {
                                    _this.checkDisapproveNodeList = true;
                                }
                            }).catch(function (err) {
                                _this.currentPage = 1;
                            })];
                    case 1:
                        _a.sent();
                        this.spinnerService.hide();
                        return [2 /*return*/];
                }
            });
        });
    };
    PendingNodeComponent.prototype.approve = function () {
        var _this = this;
        this.nodeService.approve(this.currentNode._id, { approve: "1" })
            .then(function (data) {
            _this.toastrService.success("Node đã được phê duyệt thành công");
            _this.getPending();
        })
            .catch(function (err) {
            _this.toastrService.warning("Xảy ra lỗi trong quá trình phê duyệt node");
        });
        this.nodeService.updateStatus(this.currentNode._id, { status: "1" });
    };
    PendingNodeComponent.prototype.disapprove = function () {
        var _this = this;
        this.nodeService.approve(this.currentNode._id, { approve: "-1" })
            .then(function (data) {
            _this.toastrService.success("Node đã bị từ chối phê duyệt");
            _this.getPending();
        })
            .catch(function (err) {
            _this.toastrService.warning("Xảy ra lỗi trong quá trình từ chối phê duyệt node");
        });
    };
    PendingNodeComponent.prototype.getApprove = function () {
        this.filter.approve = "1";
        this.currentPage = 1;
        this.getApprovedNodeList(this.filter, this.currentPage, this.sizePage);
    };
    PendingNodeComponent.prototype.getDisapprove = function () {
        this.filter.approve = "-1";
        this.currentPage = 1;
        this.getDisapprovedNodeList(this.filter, this.currentPage, this.sizePage);
    };
    PendingNodeComponent.prototype.getPending = function () {
        this.filter.approve = "0";
        this.currentPage = 1;
        this.getNodeList(this.filter, this.currentPage, this.sizePage);
    };
    PendingNodeComponent.ctorParameters = function () { return [
        { type: src_app_services_node_service__WEBPACK_IMPORTED_MODULE_1__["NodeService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
    ]; };
    PendingNodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pending-node',
            template: __importDefault(__webpack_require__(/*! raw-loader!./pending-node.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pending-node/pending-node.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./pending-node.component.css */ "./src/app/pages/pending-node/pending-node.component.css")).default]
        }),
        __metadata("design:paramtypes", [src_app_services_node_service__WEBPACK_IMPORTED_MODULE_1__["NodeService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], PendingNodeComponent);
    return PendingNodeComponent;
}());

var KEY_DATA = [
    {
        key: "name",
        type: "string",
    },
    {
        key: "location_info",
        type: "string",
    },
    {
        key: "ip",
        type: "string",
    }
];
var FIELDS = [
    {
        label: "Tên node",
        name: "name",
    },
    {
        label: "Khu vực",
        name: "location_info",
    },
    {
        label: "IP",
        name: "ip",
    }
];


/***/ }),

/***/ "./src/app/pages/pending-user/pending-user.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/pending-user/pending-user.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlbmRpbmctdXNlci9wZW5kaW5nLXVzZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/pending-user/pending-user.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/pending-user/pending-user.component.ts ***!
  \**************************************************************/
/*! exports provided: PendingUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingUserComponent", function() { return PendingUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var PendingUserComponent = /** @class */ (function () {
    function PendingUserComponent(userService, spinnerService, toastrService) {
        this.userService = userService;
        this.spinnerService = spinnerService;
        this.toastrService = toastrService;
        this.filter = {
            approve: ""
        };
        this.currentUser = {};
        this.currentPage = 1;
        this.currentPage1 = 1;
        this.currentPage2 = 1;
        this.sizePage = 5;
        //check
        this.checkUserList = true;
        this.checkApproveUserList = true;
        this.checkDisapproveUserList = true;
    }
    Object.defineProperty(PendingUserComponent.prototype, "key_data", {
        get: function () {
            return KEY_DATA;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PendingUserComponent.prototype, "fields", {
        get: function () {
            return FIELDS;
        },
        enumerable: true,
        configurable: true
    });
    PendingUserComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPending()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PendingUserComponent.prototype.getUserList = function (filter, currentPage, sizePage) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spinnerService.show();
                        this.currentPage = currentPage;
                        return [4 /*yield*/, this.userService.getUserList(filter, currentPage, sizePage).then(function (data) {
                                _this.totalItems = data.total;
                                _this.userList = data.data;
                                if (_this.userList == "") {
                                    _this.checkUserList = false;
                                }
                                else {
                                    _this.checkUserList = true;
                                }
                            }).catch(function (err) {
                                _this.currentPage = 1;
                            })];
                    case 1:
                        _a.sent();
                        this.spinnerService.hide();
                        return [2 /*return*/];
                }
            });
        });
    };
    PendingUserComponent.prototype.getApprovedUserList = function (filter, currentPage, sizePage) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spinnerService.show();
                        this.currentPage1 = currentPage;
                        return [4 /*yield*/, this.userService.getUserList(filter, currentPage, sizePage).then(function (data) {
                                _this.totalItems1 = data.total;
                                _this.approveUserList = data.data;
                                if (_this.approveUserList == "") {
                                    _this.checkApproveUserList = false;
                                }
                                else {
                                    _this.checkApproveUserList = true;
                                }
                            }).catch(function (err) {
                                _this.currentPage1 = 1;
                            })];
                    case 1:
                        _a.sent();
                        this.spinnerService.hide();
                        return [2 /*return*/];
                }
            });
        });
    };
    PendingUserComponent.prototype.getDisapprovedUserList = function (filter, currentPage, sizePage) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spinnerService.show();
                        this.currentPage2 = currentPage;
                        return [4 /*yield*/, this.userService.getUserList(filter, currentPage, sizePage).then(function (data) {
                                _this.totalItems2 = data.total;
                                _this.disapproveUserList = data.data;
                                if (_this.disapproveUserList == "") {
                                    _this.checkDisapproveUserList = false;
                                }
                                else {
                                    _this.checkDisapproveUserList = true;
                                }
                            }).catch(function (err) {
                                _this.currentPage2 = 1;
                            })];
                    case 1:
                        _a.sent();
                        this.spinnerService.hide();
                        return [2 /*return*/];
                }
            });
        });
    };
    PendingUserComponent.prototype.approve = function () {
        var _this = this;
        this.userService.approve(this.currentUser._id, { approve: "1" })
            .then(function (data) {
            _this.toastrService.success("Tài khoản đã được phê duyệt thành công");
            _this.getPending();
        })
            .catch(function (err) {
            _this.toastrService.warning("Xảy ra lỗi trong quá trình phê duyệt tài khoản");
        });
        this.userService.updateStatus(this.currentUser._id, { status: "1" });
    };
    PendingUserComponent.prototype.disapprove = function () {
        var _this = this;
        this.userService.approve(this.currentUser._id, { approve: "-1" })
            .then(function (data) {
            _this.toastrService.success("Tài khoản đã bị từ chối phê duyệt");
            _this.getPending();
        })
            .catch(function (err) {
            _this.toastrService.warning("Xảy ra lỗi trong quá trình từ chối phê duyệt tài khoản");
        });
    };
    PendingUserComponent.prototype.getApprove = function () {
        this.filter.approve = "1";
        this.currentPage1 = 1;
        this.getApprovedUserList(this.filter, this.currentPage1, this.sizePage);
    };
    PendingUserComponent.prototype.getDisapprove = function () {
        this.filter.approve = "-1";
        this.currentPage2 = 1;
        this.getDisapprovedUserList(this.filter, this.currentPage2, this.sizePage);
    };
    PendingUserComponent.prototype.getPending = function () {
        this.filter.approve = "0";
        this.currentPage = 1;
        this.getUserList(this.filter, this.currentPage, this.sizePage);
    };
    PendingUserComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
    ]; };
    PendingUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pending-user',
            template: __importDefault(__webpack_require__(/*! raw-loader!./pending-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pending-user/pending-user.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./pending-user.component.css */ "./src/app/pages/pending-user/pending-user.component.css")).default]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], PendingUserComponent);
    return PendingUserComponent;
}());

var KEY_DATA = [
    {
        key: "username",
        type: "string",
    },
    {
        key: "name",
        type: "string",
    },
    {
        key: "role",
        type: "string",
    },
    {
        key: "email",
        type: "string",
    },
    {
        key: "phone",
        type: "string"
    }
];
var FIELDS = [
    {
        label: "Username",
        name: "username",
    },
    {
        label: "Họ và tên",
        name: "name",
    },
    {
        label: "Vai trò",
        name: "role",
    },
    {
        label: "Email",
        name: "email"
    },
    {
        label: "Điện thoại",
        name: "phone"
    }
];


/***/ }),

/***/ "./src/app/pages/report/report.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/report/report.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlcG9ydC9yZXBvcnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/report/report.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/report/report.component.ts ***!
  \**************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_node_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/node.service */ "./src/app/services/node.service.ts");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/src/chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _variables_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../variables/charts */ "./src/app/variables/charts.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






// core components

var ReportComponent = /** @class */ (function () {
    function ReportComponent(dataService, nodeService, spinnerService) {
        this.dataService = dataService;
        this.nodeService = nodeService;
        this.spinnerService = spinnerService;
        this.sizePage = 20;
        this.currentPage = 1;
        this.nodeList = [];
        this.dataList = [];
        this.dayList = [];
        this.aqiList = [];
        this.backgroundColor = [];
        this.percentageList = [];
        this.tableList = [];
        this.filter = {
            node_id: "",
            start_date: "",
            end_date: ""
        };
        this.end_date = "";
        this.currentNode = "";
        this.check = false;
        this.isShowingTable = true;
    }
    ReportComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Object(_variables_charts__WEBPACK_IMPORTED_MODULE_6__["parseOptions"])(chart_js__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_variables_charts__WEBPACK_IMPORTED_MODULE_6__["chartOptions"])());
                        return [4 /*yield*/, this.getNodeList()];
                    case 1:
                        _a.sent();
                        console.log(this.dataList);
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(ReportComponent.prototype, "fields", {
        get: function () {
            return FIELDS;
        },
        enumerable: true,
        configurable: true
    });
    ReportComponent.prototype.getNodeList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.nodeService.getNodeListApprovedFilter({ approve: 1 }).then(function (data) {
                    _this.nodeList = data.data;
                });
                return [2 /*return*/];
            });
        });
    };
    ReportComponent.prototype.getDataOfNode = function (filter, currentPage, sizePage) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spinnerService.show();
                        this.currentPage = currentPage;
                        return [4 /*yield*/, this.dataService.getDataOfNode(filter, currentPage, sizePage).then(function (data) {
                                _this.dataList = data.rows;
                                _this.totalItems = data.count;
                            }).catch(function (err) {
                                _this.currentPage = 1;
                            })];
                    case 1:
                        _a.sent();
                        this.spinnerService.hide();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReportComponent.prototype.getChart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tempList, aqiBarChart, aqiPieChart, aqi_bar_chart, aqi_pie_chart;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tempList = [];
                        this.aqiList = [];
                        this.dayList = [];
                        this.percentageList = [0, 0, 0, 0, 0, 0];
                        this.backgroundColor = [];
                        return [4 /*yield*/, this.dataService.getDataOfNode(this.filter, 1, this.totalItems).then(function (data) {
                                tempList = data.rows;
                            })];
                    case 1:
                        _a.sent();
                        tempList.forEach(function (e) {
                            _this.dayList.push(moment__WEBPACK_IMPORTED_MODULE_5___default()(e.datetime).format("DD/MM/YYYY HH:mm"));
                            _this.aqiList.push(e.aqi);
                            if (e.aqi >= 0 && e.aqi <= 50) {
                                _this.backgroundColor.push("#02B067");
                                _this.percentageList[0]++;
                            }
                            else if (e.aqi >= 51 && e.aqi <= 100) {
                                _this.backgroundColor.push("#F8D22E");
                                _this.percentageList[1]++;
                            }
                            else if (e.aqi >= 101 && e.aqi <= 150) {
                                _this.backgroundColor.push("#FF6037");
                                _this.percentageList[2]++;
                            }
                            else if (e.aqi >= 151 && e.aqi <= 200) {
                                _this.backgroundColor.push("#FF3232");
                                _this.percentageList[3]++;
                            }
                            else if (e.aqi >= 201 && e.aqi <= 300) {
                                _this.backgroundColor.push("#CC3399");
                                _this.percentageList[4]++;
                            }
                            else if (e.aqi >= 301) {
                                _this.backgroundColor.push("#A52A2A");
                                _this.percentageList[5]++;
                            }
                        });
                        console.log("date", this.dayList);
                        console.log("date", this.aqiList);
                        console.log("date", this.backgroundColor);
                        console.log("pie", this.percentageList);
                        console.log("pie", this.percentageList);
                        aqiBarChart = document.getElementById("aqi_bar_chart");
                        aqiPieChart = document.getElementById("aqi_pie_chart");
                        aqi_bar_chart = new chart_js__WEBPACK_IMPORTED_MODULE_4___default.a(aqiBarChart, {
                            type: "bar",
                            options: {
                                maintainAspectRatio: false,
                                scales: {
                                    yAxes: [
                                        {
                                            scaleLabel: {
                                                labelString: "AQI",
                                                display: true,
                                            },
                                        },
                                    ],
                                    xAxes: [
                                        {
                                            ticks: {
                                                display: false,
                                            },
                                        },
                                    ],
                                },
                            },
                            data: {
                                labels: this.dayList,
                                datasets: [
                                    {
                                        label: "AQI",
                                        data: this.aqiList,
                                        backgroundColor: this.backgroundColor
                                    },
                                ],
                            },
                        });
                        aqi_pie_chart = new chart_js__WEBPACK_IMPORTED_MODULE_4___default.a(aqiPieChart, {
                            type: "pie",
                            options: {
                                title: {
                                    display: true,
                                    position: 'top'
                                },
                                legend: {
                                    display: true,
                                    position: 'top'
                                }
                            },
                            data: {
                                labels: ["Tốt", "Trung bình", "Kém", "Xấu", "Rất xấu", "Nguy hại"],
                                datasets: [
                                    {
                                        fill: true,
                                        label: "AQI",
                                        backgroundColor: ["#02B067", "#F8D22E", "#FF6037", "#FF3232", "#CC3399", "#A52A2A"],
                                        borderWidth: [0, 0, 0, 0, 0, 0],
                                        data: this.percentageList
                                    },
                                ],
                            },
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ReportComponent.prototype.makeAReport = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isShowingTable = true;
                        this.check = true;
                        console.log(this.filter);
                        if (this.currentNode != {}) {
                            this.filter.node_id = this.currentNode._id;
                        }
                        if (this.end_date != "") {
                            this.filter.end_date = moment__WEBPACK_IMPORTED_MODULE_5___default()(this.end_date).add(23, 'hours').format("YYYY-MM-DD HH:mm:ss");
                        }
                        if (!(this.filter.node_id != "" && this.filter.start_date != "" && this.filter.end_date != "")) return [3 /*break*/, 3];
                        this.currentPage = 1;
                        return [4 /*yield*/, this.getDataOfNode(this.filter, this.currentPage, this.sizePage)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getDate()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ReportComponent.prototype.table = function () {
        this.isShowingTable = true;
    };
    ReportComponent.prototype.chart = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isShowingTable = false;
                        return [4 /*yield*/, this.getChart()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReportComponent.prototype.getDate = function () {
        var name = this.currentNode.name;
        var start = moment__WEBPACK_IMPORTED_MODULE_5___default()(this.filter.start_date).format("DD/MM/YYYY");
        var end = moment__WEBPACK_IMPORTED_MODULE_5___default()(this.end_date).format("DD/MM/YYYY");
        if (this.filter.start_date == this.end_date) {
            return "B\u00E1o c\u00E1o th\u00F4ng s\u1ED1 c\u00E1c c\u1EA3m bi\u1EBFn v\u00E0 ch\u1EC9 s\u1ED1 ch\u1EA5t l\u01B0\u1EE3ng kh\u00F4ng kh\u00ED t\u1EA1i " + name + " trong ng\u00E0y " + start + " ";
        }
        else {
            return "B\u00E1o c\u00E1o th\u00F4ng s\u1ED1 c\u00E1c c\u1EA3m bi\u1EBFn v\u00E0 ch\u1EC9 s\u1ED1 ch\u1EA5t l\u01B0\u1EE3ng kh\u00F4ng kh\u00ED t\u1EA1i " + name + " t\u1EEB " + start + " \u0111\u1EBFn " + end + " ";
        }
    };
    ReportComponent.prototype.evaluate = function (aqi) {
        if (aqi >= 0 && aqi <= 50) {
            return "Tốt";
        }
        else if (aqi >= 51 && aqi <= 100) {
            return "Trung bình";
        }
        else if (aqi >= 101 && aqi <= 150) {
            return "Kém";
        }
        else if (aqi >= 151 && aqi <= 200) {
            return "Xấu";
        }
        else if (aqi >= 201 && aqi <= 300) {
            return "Rất xấu";
        }
        else {
            return "Nguy hại";
        }
    };
    ReportComponent.ctorParameters = function () { return [
        { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] },
        { type: src_app_services_node_service__WEBPACK_IMPORTED_MODULE_3__["NodeService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }
    ]; };
    ReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report',
            template: __importDefault(__webpack_require__(/*! raw-loader!./report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/report/report.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./report.component.css */ "./src/app/pages/report/report.component.css")).default]
        }),
        __metadata("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            src_app_services_node_service__WEBPACK_IMPORTED_MODULE_3__["NodeService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], ReportComponent);
    return ReportComponent;
}());

var FIELDS = [
    {
        label: "Thời gian",
        name: "datetime",
    },
    {
        label: "Nhiệt độ",
        name: "tem",
    },
    {
        label: "Độ ẩm",
        name: "hum"
    },
    {
        label: "Khí CO",
        name: "co"
    },
    {
        label: "Khí CO2",
        name: "co2"
    },
    {
        label: "Bụi PM2.5",
        name: "pm_25"
    },
    {
        label: "Chỉ số AQI",
        name: "aqi",
    }
];


/***/ }),

/***/ "./src/app/pages/role/role.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/role/role.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JvbGUvcm9sZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/role/role.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/role/role.component.ts ***!
  \**********************************************/
/*! exports provided: RoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleComponent", function() { return RoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_services_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/role.service */ "./src/app/services/role.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var RoleComponent = /** @class */ (function () {
    function RoleComponent(toastrService, roleService, spinnerService) {
        this.toastrService = toastrService;
        this.roleService = roleService;
        this.spinnerService = spinnerService;
        this.currentRole = {};
        this.selected_permission = "";
        this.selected_area = "";
        this.filter = {};
        // pagination
        this.currentPage = 1;
        this.showPages = 5;
        this.sizePage = 5;
    }
    RoleComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRoleList(this.filter, this.currentPage, this.sizePage)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.roleService.getActionPermissions().then(function (data) { return _this.PERMISSIONS = data.data; })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.roleService.getAreaPermissions().then(function (data) { return _this.AREAS = data.data; })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RoleComponent.prototype.getRoleList = function (filter, currentPage, sizePage) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spinnerService.show();
                        this.currentPage = currentPage;
                        return [4 /*yield*/, this.roleService.getRoleList(filter, currentPage, sizePage).then(function (data) {
                                _this.totalItems = data.total;
                                _this.ROLES = data.data;
                            })];
                    case 1:
                        _a.sent();
                        this.spinnerService.hide();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(RoleComponent.prototype, "roles", {
        get: function () {
            return this.ROLES;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoleComponent.prototype, "fields", {
        get: function () {
            return FIELDS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoleComponent.prototype, "key_data", {
        get: function () {
            return KEY_DATA;
        },
        enumerable: true,
        configurable: true
    });
    // get permissions() {
    //   if (!this.PERMISSIONS || !this.PERMISSIONS.length) {
    //     return []
    //   }
    //   const ids = this.currentRole.action_permission.map(v => v.id)
    //   return this.PERMISSIONS.filter((v) => !ids.includes(v.id));
    // }
    // get areas() {
    //   if (!this.AREAS || !this.AREAS.length) {
    //     return []
    //   }
    //   const ids = this.currentRole.area_permission.map(v => v.id)
    //   return this.AREAS.filter((v) => !ids.includes(v.id));
    // }
    // get is_name_valid() {
    //   return this.currentRole.name ? true : false;
    // }
    // get is_permissions_valid() {
    //   return this.currentRole.action_permission.length > 0;
    // }
    RoleComponent.prototype.is_string = function (type) {
        return type === 'string';
    };
    RoleComponent.prototype.is_array = function (type) {
        return type === 'array';
    };
    RoleComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] },
        { type: src_app_services_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
    ]; };
    RoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-role",
            template: __importDefault(__webpack_require__(/*! raw-loader!./role.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/role/role.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./role.component.css */ "./src/app/pages/role/role.component.css")).default]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"],
            src_app_services_role_service__WEBPACK_IMPORTED_MODULE_2__["RoleService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], RoleComponent);
    return RoleComponent;
}());

var KEY_DATA = [
    {
        key: "name",
        type: "string",
    },
    {
        key: "action_permission",
        type: "array",
        key_value: 'name',
        color: "badge-primary",
    },
    {
        key: "area_permission",
        type: "array",
        key_value: 'name',
        color: "badge-info"
    },
];
var FIELDS = [
    {
        label: "Tên vai trò",
    },
    {
        label: "Quyền",
    },
    {
        label: "Khu vực",
    }
];


/***/ }),

/***/ "./src/app/pages/support-map/support-map.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/support-map/support-map.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* required styles */\r\n\r\n.leaflet-pane,\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-tile-container,\r\n.leaflet-pane > svg,\r\n.leaflet-pane > canvas,\r\n.leaflet-zoom-box,\r\n.leaflet-image-layer,\r\n.leaflet-layer {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\t}\r\n\r\n.leaflet-container {\r\n\toverflow: hidden;\r\n\t}\r\n\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t        -ms-user-select: none;\r\n\t    user-select: none;\r\n\t  -webkit-user-drag: none;\r\n\t}\r\n\r\n/* Prevents IE11 from highlighting tiles in blue */\r\n\r\n.leaflet-tile::-moz-selection {\r\n\tbackground: transparent;\r\n}\r\n\r\n.leaflet-tile::selection {\r\n\tbackground: transparent;\r\n}\r\n\r\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\r\n\r\n.leaflet-safari .leaflet-tile {\r\n\timage-rendering: -webkit-optimize-contrast;\r\n\t}\r\n\r\n/* hack that prevents hw layers \"stretching\" when loading new tiles */\r\n\r\n.leaflet-safari .leaflet-tile-container {\r\n\twidth: 1600px;\r\n\theight: 1600px;\r\n\t-webkit-transform-origin: 0 0;\r\n\t}\r\n\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\tdisplay: block;\r\n\t}\r\n\r\n/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\r\n\r\n/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\r\n\r\n.leaflet-container .leaflet-overlay-pane svg,\r\n.leaflet-container .leaflet-marker-pane img,\r\n.leaflet-container .leaflet-shadow-pane img,\r\n.leaflet-container .leaflet-tile-pane img,\r\n.leaflet-container img.leaflet-image-layer,\r\n.leaflet-container .leaflet-tile {\r\n\tmax-width: none !important;\r\n\tmax-height: none !important;\r\n\t}\r\n\r\n.leaflet-container.leaflet-touch-zoom {\r\n\ttouch-action: pan-x pan-y;\r\n\t}\r\n\r\n.leaflet-container.leaflet-touch-drag {\r\n\t/* Fallback for FF which doesn't support pinch-zoom */\r\n\ttouch-action: none;\r\n\ttouch-action: pinch-zoom;\r\n}\r\n\r\n.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\r\n\ttouch-action: none;\r\n}\r\n\r\n.leaflet-container {\r\n\t-webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n.leaflet-container a {\r\n\t-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\r\n}\r\n\r\n.leaflet-tile {\r\n\t-webkit-filter: inherit;\r\n\t        filter: inherit;\r\n\tvisibility: hidden;\r\n\t}\r\n\r\n.leaflet-tile-loaded {\r\n\tvisibility: inherit;\r\n\t}\r\n\r\n.leaflet-zoom-box {\r\n\twidth: 0;\r\n\theight: 0;\r\n\tbox-sizing: border-box;\r\n\tz-index: 800;\r\n\t}\r\n\r\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\r\n\r\n.leaflet-overlay-pane svg {\r\n\t-moz-user-select: none;\r\n\t}\r\n\r\n.leaflet-pane         { z-index: 400; }\r\n\r\n.leaflet-tile-pane    { z-index: 200; }\r\n\r\n.leaflet-overlay-pane { z-index: 400; }\r\n\r\n.leaflet-shadow-pane  { z-index: 500; }\r\n\r\n.leaflet-marker-pane  { z-index: 600; }\r\n\r\n.leaflet-tooltip-pane   { z-index: 650; }\r\n\r\n.leaflet-popup-pane   { z-index: 700; }\r\n\r\n.leaflet-map-pane canvas { z-index: 100; }\r\n\r\n.leaflet-map-pane svg    { z-index: 200; }\r\n\r\n.leaflet-vml-shape {\r\n\twidth: 1px;\r\n\theight: 1px;\r\n\t}\r\n\r\n.lvml {\r\n\tbehavior: url(#default#VML);\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\t}\r\n\r\n/* control positioning */\r\n\r\n.leaflet-control {\r\n\tposition: relative;\r\n\tz-index: 800;\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n.leaflet-top,\r\n.leaflet-bottom {\r\n\tposition: absolute;\r\n\tz-index: 1000;\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-top {\r\n\ttop: 0;\r\n\t}\r\n\r\n.leaflet-right {\r\n\tright: 0;\r\n\t}\r\n\r\n.leaflet-bottom {\r\n\tbottom: 0;\r\n\t}\r\n\r\n.leaflet-left {\r\n\tleft: 0;\r\n\t}\r\n\r\n.leaflet-control {\r\n\tfloat: left;\r\n\tclear: both;\r\n\t}\r\n\r\n.leaflet-right .leaflet-control {\r\n\tfloat: right;\r\n\t}\r\n\r\n.leaflet-top .leaflet-control {\r\n\tmargin-top: 10px;\r\n\t}\r\n\r\n.leaflet-bottom .leaflet-control {\r\n\tmargin-bottom: 10px;\r\n\t}\r\n\r\n.leaflet-left .leaflet-control {\r\n\tmargin-left: 10px;\r\n\t}\r\n\r\n.leaflet-right .leaflet-control {\r\n\tmargin-right: 10px;\r\n\t}\r\n\r\n/* zoom and fade animations */\r\n\r\n.leaflet-fade-anim .leaflet-tile {\r\n\twill-change: opacity;\r\n\t}\r\n\r\n.leaflet-fade-anim .leaflet-popup {\r\n\topacity: 0;\r\n\t-webkit-transition: opacity 0.2s linear;\r\n\t        transition: opacity 0.2s linear;\r\n\t}\r\n\r\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\r\n\topacity: 1;\r\n\t}\r\n\r\n.leaflet-zoom-animated {\r\n\t-webkit-transform-origin: 0 0;\r\n\t        transform-origin: 0 0;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\twill-change: transform;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\t-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t        transition:         -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t        transition:         transform 0.25s cubic-bezier(0,0,0.25,1), -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-tile,\r\n.leaflet-pan-anim .leaflet-tile {\r\n\t-webkit-transition: none;\r\n\t        transition: none;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-hide {\r\n\tvisibility: hidden;\r\n\t}\r\n\r\n/* cursors */\r\n\r\n.leaflet-interactive {\r\n\tcursor: pointer;\r\n\t}\r\n\r\n.leaflet-grab {\r\n\tcursor: -webkit-grab;\r\n\tcursor:         grab;\r\n\t}\r\n\r\n.leaflet-crosshair,\r\n.leaflet-crosshair .leaflet-interactive {\r\n\tcursor: crosshair;\r\n\t}\r\n\r\n.leaflet-popup-pane,\r\n.leaflet-control {\r\n\tcursor: auto;\r\n\t}\r\n\r\n.leaflet-dragging .leaflet-grab,\r\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\r\n.leaflet-dragging .leaflet-marker-draggable {\r\n\tcursor: move;\r\n\tcursor: -webkit-grabbing;\r\n\tcursor:         grabbing;\r\n\t}\r\n\r\n/* marker & overlays interactivity */\r\n\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-image-layer,\r\n.leaflet-pane > svg path,\r\n.leaflet-tile-container {\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-marker-icon.leaflet-interactive,\r\n.leaflet-image-layer.leaflet-interactive,\r\n.leaflet-pane > svg path.leaflet-interactive,\r\nsvg.leaflet-image-layer.leaflet-interactive path {\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n/* visual tweaks */\r\n\r\n.leaflet-container {\r\n\tbackground: #ddd;\r\n\toutline: 0;\r\n\t}\r\n\r\n.leaflet-container a {\r\n\tcolor: #0078A8;\r\n\t}\r\n\r\n.leaflet-container a.leaflet-active {\r\n\toutline: 2px solid orange;\r\n\t}\r\n\r\n.leaflet-zoom-box {\r\n\tborder: 2px dotted #38f;\r\n\tbackground: rgba(255,255,255,0.5);\r\n\t}\r\n\r\n/* general typography */\r\n\r\n.leaflet-container {\r\n\tfont: 12px/1.5 \"Helvetica Neue\", Arial, Helvetica, sans-serif;\r\n\t}\r\n\r\n/* general toolbar styles */\r\n\r\n.leaflet-bar {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.65);\r\n\tborder-radius: 4px;\r\n\t}\r\n\r\n.leaflet-bar a,\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #fff;\r\n\tborder-bottom: 1px solid #ccc;\r\n\twidth: 26px;\r\n\theight: 26px;\r\n\tline-height: 26px;\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tcolor: black;\r\n\t}\r\n\r\n.leaflet-bar a,\r\n.leaflet-control-layers-toggle {\r\n\tbackground-position: 50% 50%;\r\n\tbackground-repeat: no-repeat;\r\n\tdisplay: block;\r\n\t}\r\n\r\n.leaflet-bar a:hover {\r\n\tbackground-color: #f4f4f4;\r\n\t}\r\n\r\n.leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 4px;\r\n\tborder-top-right-radius: 4px;\r\n\t}\r\n\r\n.leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 4px;\r\n\tborder-bottom-right-radius: 4px;\r\n\tborder-bottom: none;\r\n\t}\r\n\r\n.leaflet-bar a.leaflet-disabled {\r\n\tcursor: default;\r\n\tbackground-color: #f4f4f4;\r\n\tcolor: #bbb;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 2px;\r\n\tborder-top-right-radius: 2px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 2px;\r\n\tborder-bottom-right-radius: 2px;\r\n\t}\r\n\r\n/* zoom control */\r\n\r\n.leaflet-control-zoom-in,\r\n.leaflet-control-zoom-out {\r\n\tfont: bold 18px 'Lucida Console', Monaco, monospace;\r\n\ttext-indent: 1px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\r\n\tfont-size: 22px;\r\n\t}\r\n\r\n/* layers control */\r\n\r\n.leaflet-control-layers {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.4);\r\n\tbackground: #fff;\r\n\tborder-radius: 5px;\r\n\t}\r\n\r\n.leaflet-control-layers-toggle {\r\n\tbackground-image: url('layers.png');\r\n\twidth: 36px;\r\n\theight: 36px;\r\n\t}\r\n\r\n.leaflet-retina .leaflet-control-layers-toggle {\r\n\tbackground-image: url('layers-2x.png');\r\n\tbackground-size: 26px 26px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-layers-toggle {\r\n\twidth: 44px;\r\n\theight: 44px;\r\n\t}\r\n\r\n.leaflet-control-layers .leaflet-control-layers-list,\r\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\r\n\tdisplay: none;\r\n\t}\r\n\r\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\t}\r\n\r\n.leaflet-control-layers-expanded {\r\n\tpadding: 6px 10px 6px 6px;\r\n\tcolor: #333;\r\n\tbackground: #fff;\r\n\t}\r\n\r\n.leaflet-control-layers-scrollbar {\r\n\toverflow-y: scroll;\r\n\toverflow-x: hidden;\r\n\tpadding-right: 5px;\r\n\t}\r\n\r\n.leaflet-control-layers-selector {\r\n\tmargin-top: 2px;\r\n\tposition: relative;\r\n\ttop: 1px;\r\n\t}\r\n\r\n.leaflet-control-layers label {\r\n\tdisplay: block;\r\n\t}\r\n\r\n.leaflet-control-layers-separator {\r\n\theight: 0;\r\n\tborder-top: 1px solid #ddd;\r\n\tmargin: 5px -10px 5px -6px;\r\n\t}\r\n\r\n/* Default icon URLs */\r\n\r\n.leaflet-default-icon-path {\r\n\tbackground-image: url('marker-icon.png');\r\n\t}\r\n\r\n/* attribution and scale controls */\r\n\r\n.leaflet-container .leaflet-control-attribution {\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.7);\r\n\tmargin: 0;\r\n\t}\r\n\r\n.leaflet-control-attribution,\r\n.leaflet-control-scale-line {\r\n\tpadding: 0 5px;\r\n\tcolor: #333;\r\n\t}\r\n\r\n.leaflet-control-attribution a {\r\n\ttext-decoration: none;\r\n\t}\r\n\r\n.leaflet-control-attribution a:hover {\r\n\ttext-decoration: underline;\r\n\t}\r\n\r\n.leaflet-container .leaflet-control-attribution,\r\n.leaflet-container .leaflet-control-scale {\r\n\tfont-size: 11px;\r\n\t}\r\n\r\n.leaflet-left .leaflet-control-scale {\r\n\tmargin-left: 5px;\r\n\t}\r\n\r\n.leaflet-bottom .leaflet-control-scale {\r\n\tmargin-bottom: 5px;\r\n\t}\r\n\r\n.leaflet-control-scale-line {\r\n\tborder: 2px solid #777;\r\n\tborder-top: none;\r\n\tline-height: 1.1;\r\n\tpadding: 2px 5px 1px;\r\n\tfont-size: 11px;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\tbox-sizing: border-box;\r\n\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.5);\r\n\t}\r\n\r\n.leaflet-control-scale-line:not(:first-child) {\r\n\tborder-top: 2px solid #777;\r\n\tborder-bottom: none;\r\n\tmargin-top: -2px;\r\n\t}\r\n\r\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\r\n\tborder-bottom: 2px solid #777;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-attribution,\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tbox-shadow: none;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tborder: 2px solid rgba(0,0,0,0.2);\r\n\tbackground-clip: padding-box;\r\n\t}\r\n\r\n/* popup */\r\n\r\n.leaflet-popup {\r\n\tposition: absolute;\r\n\ttext-align: center;\r\n\tmargin-bottom: 20px;\r\n\t}\r\n\r\n.leaflet-popup-content-wrapper {\r\n\tpadding: 1px;\r\n\ttext-align: left;\r\n\tborder-radius: 12px;\r\n\t}\r\n\r\n.leaflet-popup-content {\r\n\tmargin: 13px 19px;\r\n\tline-height: 1.4;\r\n\t}\r\n\r\n.leaflet-popup-content p {\r\n\tmargin: 18px 0;\r\n\t}\r\n\r\n.leaflet-popup-tip-container {\r\n\twidth: 40px;\r\n\theight: 20px;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\tmargin-left: -20px;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-popup-tip {\r\n\twidth: 17px;\r\n\theight: 17px;\r\n\tpadding: 1px;\r\n\r\n\tmargin: -10px auto 0;\r\n\r\n\t-webkit-transform: rotate(45deg);\r\n\t        transform: rotate(45deg);\r\n\t}\r\n\r\n.leaflet-popup-content-wrapper,\r\n.leaflet-popup-tip {\r\n\tbackground: white;\r\n\tcolor: #333;\r\n\tbox-shadow: 0 3px 14px rgba(0,0,0,0.4);\r\n\t}\r\n\r\n.leaflet-container a.leaflet-popup-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tpadding: 4px 4px 0 0;\r\n\tborder: none;\r\n\ttext-align: center;\r\n\twidth: 18px;\r\n\theight: 14px;\r\n\tfont: 16px/14px Tahoma, Verdana, sans-serif;\r\n\tcolor: #c3c3c3;\r\n\ttext-decoration: none;\r\n\tfont-weight: bold;\r\n\tbackground: transparent;\r\n\t}\r\n\r\n.leaflet-container a.leaflet-popup-close-button:hover {\r\n\tcolor: #999;\r\n\t}\r\n\r\n.leaflet-popup-scrolled {\r\n\toverflow: auto;\r\n\tborder-bottom: 1px solid #ddd;\r\n\tborder-top: 1px solid #ddd;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-content-wrapper {\r\n\tzoom: 1;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\twidth: 24px;\r\n\tmargin: 0 auto;\r\n\r\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";\r\n\tfilter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-tip-container {\r\n\tmargin-top: -1px;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-control-zoom,\r\n.leaflet-oldie .leaflet-control-layers,\r\n.leaflet-oldie .leaflet-popup-content-wrapper,\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\tborder: 1px solid #999;\r\n\t}\r\n\r\n/* div icon */\r\n\r\n.leaflet-div-icon {\r\n\tbackground: #fff;\r\n\tborder: 1px solid #666;\r\n\t}\r\n\r\n/* Tooltip */\r\n\r\n/* Base styles for the element that has a tooltip */\r\n\r\n.leaflet-tooltip {\r\n\tposition: absolute;\r\n\tpadding: 6px;\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 3px;\r\n\tcolor: #222;\r\n\twhite-space: nowrap;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tpointer-events: none;\r\n\tbox-shadow: 0 1px 3px rgba(0,0,0,0.4);\r\n\t}\r\n\r\n.leaflet-tooltip.leaflet-clickable {\r\n\tcursor: pointer;\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n.leaflet-tooltip-top:before,\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\tborder: 6px solid transparent;\r\n\tbackground: transparent;\r\n\tcontent: \"\";\r\n\t}\r\n\r\n/* Directions */\r\n\r\n.leaflet-tooltip-bottom {\r\n\tmargin-top: 6px;\r\n}\r\n\r\n.leaflet-tooltip-top {\r\n\tmargin-top: -6px;\r\n}\r\n\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-top:before {\r\n\tleft: 50%;\r\n\tmargin-left: -6px;\r\n\t}\r\n\r\n.leaflet-tooltip-top:before {\r\n\tbottom: 0;\r\n\tmargin-bottom: -12px;\r\n\tborder-top-color: #fff;\r\n\t}\r\n\r\n.leaflet-tooltip-bottom:before {\r\n\ttop: 0;\r\n\tmargin-top: -12px;\r\n\tmargin-left: -6px;\r\n\tborder-bottom-color: #fff;\r\n\t}\r\n\r\n.leaflet-tooltip-left {\r\n\tmargin-left: -6px;\r\n}\r\n\r\n.leaflet-tooltip-right {\r\n\tmargin-left: 6px;\r\n}\r\n\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\ttop: 50%;\r\n\tmargin-top: -6px;\r\n\t}\r\n\r\n.leaflet-tooltip-left:before {\r\n\tright: 0;\r\n\tmargin-right: -12px;\r\n\tborder-left-color: #fff;\r\n\t}\r\n\r\n.leaflet-tooltip-right:before {\r\n\tleft: 0;\r\n\tmargin-left: -12px;\r\n\tborder-right-color: #fff;\r\n\t}\r\n\r\n.map-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 30px;\n}\r\n\r\n.map-frame {\n  border: 2px solid black;\n  height: 100%;\n}\r\n\r\n#map {\n  height: 100%;\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9sZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3MiLCJzcmMvYXBwL3BhZ2VzL3N1cHBvcnQtbWFwL0M6XFxVc2Vyc1xcSHVvbmdMYW5Ub1xcc2FuZGJveFxcVGhlc2lzXFx3ZWJfY2xpZW50L3NyY1xcYXBwXFxwYWdlc1xcc3VwcG9ydC1tYXBcXHN1cHBvcnQtbWFwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdXBwb3J0LW1hcC9zdXBwb3J0LW1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7O0FBRXBCOzs7Ozs7Ozs7O0NBVUMsa0JBQWtCO0NBQ2xCLE9BQU87Q0FDUCxNQUFNO0NBQ047O0FBQ0Q7Q0FDQyxnQkFBZ0I7Q0FDaEI7O0FBQ0Q7OztDQUdDLHlCQUF5QjtJQUN0QixzQkFBc0I7U0FDakIscUJBQWlCO0tBQWpCLGlCQUFpQjtHQUN2Qix1QkFBdUI7Q0FDekI7O0FBQ0Qsa0RBQWtEOztBQUNsRDtDQUNDLHVCQUF1QjtBQUN4Qjs7QUFGQTtDQUNDLHVCQUF1QjtBQUN4Qjs7QUFDQSxtRkFBbUY7O0FBQ25GO0NBQ0MsMENBQTBDO0NBQzFDOztBQUNELHFFQUFxRTs7QUFDckU7Q0FDQyxhQUFhO0NBQ2IsY0FBYztDQUNkLDZCQUE2QjtDQUM3Qjs7QUFDRDs7Q0FFQyxjQUFjO0NBQ2Q7O0FBQ0QsZ0dBQWdHOztBQUNoRyxxRkFBcUY7O0FBQ3JGOzs7Ozs7Q0FNQywwQkFBMEI7Q0FDMUIsMkJBQTJCO0NBQzNCOztBQUVEO0NBRUMseUJBQXlCO0NBQ3pCOztBQUNEO0NBRUMscURBQXFEO0NBQ3JELGtCQUFrQjtDQUNsQix3QkFBd0I7QUFDekI7O0FBQ0E7Q0FFQyxrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyx3Q0FBd0M7QUFDekM7O0FBQ0E7Q0FDQyxvREFBb0Q7QUFDckQ7O0FBQ0E7Q0FDQyx1QkFBZTtTQUFmLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEI7O0FBQ0Q7Q0FDQyxtQkFBbUI7Q0FDbkI7O0FBQ0Q7Q0FDQyxRQUFRO0NBQ1IsU0FBUztDQUVKLHNCQUFzQjtDQUMzQixZQUFZO0NBQ1o7O0FBQ0QsdUVBQXVFOztBQUN2RTtDQUNDLHNCQUFzQjtDQUN0Qjs7QUFFRCx3QkFBd0IsWUFBWSxFQUFFOztBQUV0Qyx3QkFBd0IsWUFBWSxFQUFFOztBQUN0Qyx3QkFBd0IsWUFBWSxFQUFFOztBQUN0Qyx3QkFBd0IsWUFBWSxFQUFFOztBQUN0Qyx3QkFBd0IsWUFBWSxFQUFFOztBQUN0QywwQkFBMEIsWUFBWSxFQUFFOztBQUN4Qyx3QkFBd0IsWUFBWSxFQUFFOztBQUV0QywyQkFBMkIsWUFBWSxFQUFFOztBQUN6QywyQkFBMkIsWUFBWSxFQUFFOztBQUV6QztDQUNDLFVBQVU7Q0FDVixXQUFXO0NBQ1g7O0FBQ0Q7Q0FDQywyQkFBMkI7Q0FDM0IscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQjs7QUFHRCx3QkFBd0I7O0FBRXhCO0NBQ0Msa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWiw4QkFBOEIsRUFBRSw4QkFBOEI7Q0FDOUQsb0JBQW9CO0NBQ3BCOztBQUNEOztDQUVDLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2Isb0JBQW9CO0NBQ3BCOztBQUNEO0NBQ0MsTUFBTTtDQUNOOztBQUNEO0NBQ0MsUUFBUTtDQUNSOztBQUNEO0NBQ0MsU0FBUztDQUNUOztBQUNEO0NBQ0MsT0FBTztDQUNQOztBQUNEO0NBQ0MsV0FBVztDQUNYLFdBQVc7Q0FDWDs7QUFDRDtDQUNDLFlBQVk7Q0FDWjs7QUFDRDtDQUNDLGdCQUFnQjtDQUNoQjs7QUFDRDtDQUNDLG1CQUFtQjtDQUNuQjs7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQjs7QUFDRDtDQUNDLGtCQUFrQjtDQUNsQjs7QUFHRCw2QkFBNkI7O0FBRTdCO0NBQ0Msb0JBQW9CO0NBQ3BCOztBQUNEO0NBQ0MsVUFBVTtDQUNWLHVDQUF1QztTQUUvQiwrQkFBK0I7Q0FDdkM7O0FBQ0Q7Q0FDQyxVQUFVO0NBQ1Y7O0FBQ0Q7Q0FDQyw2QkFBNkI7U0FFckIscUJBQXFCO0NBQzdCOztBQUNEO0NBQ0Msc0JBQXNCO0NBQ3RCOztBQUNEO0NBQ0Msb0VBQW9FO1NBRTVELG9FQUE0RDtTQUE1RCw0REFBNEQ7U0FBNUQsOEdBQTREO0NBQ3BFOztBQUNEOztDQUVDLHdCQUF3QjtTQUVoQixnQkFBZ0I7Q0FDeEI7O0FBRUQ7Q0FDQyxrQkFBa0I7Q0FDbEI7O0FBR0QsWUFBWTs7QUFFWjtDQUNDLGVBQWU7Q0FDZjs7QUFDRDtDQUNDLG9CQUFvQjtDQUVwQixvQkFBb0I7Q0FDcEI7O0FBQ0Q7O0NBRUMsaUJBQWlCO0NBQ2pCOztBQUNEOztDQUVDLFlBQVk7Q0FDWjs7QUFDRDs7O0NBR0MsWUFBWTtDQUNaLHdCQUF3QjtDQUV4Qix3QkFBd0I7Q0FDeEI7O0FBRUQsb0NBQW9DOztBQUNwQzs7Ozs7Q0FLQyxvQkFBb0I7Q0FDcEI7O0FBRUQ7Ozs7Q0FJQyw4QkFBOEIsRUFBRSw4QkFBOEI7Q0FDOUQsb0JBQW9CO0NBQ3BCOztBQUVELGtCQUFrQjs7QUFFbEI7Q0FDQyxnQkFBZ0I7Q0FDaEIsVUFBVTtDQUNWOztBQUNEO0NBQ0MsY0FBYztDQUNkOztBQUNEO0NBQ0MseUJBQXlCO0NBQ3pCOztBQUNEO0NBQ0MsdUJBQXVCO0NBQ3ZCLGlDQUFpQztDQUNqQzs7QUFHRCx1QkFBdUI7O0FBQ3ZCO0NBQ0MsNkRBQTZEO0NBQzdEOztBQUdELDJCQUEyQjs7QUFFM0I7Q0FDQyxzQ0FBc0M7Q0FDdEMsa0JBQWtCO0NBQ2xCOztBQUNEOztDQUVDLHNCQUFzQjtDQUN0Qiw2QkFBNkI7Q0FDN0IsV0FBVztDQUNYLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIsWUFBWTtDQUNaOztBQUNEOztDQUVDLDRCQUE0QjtDQUM1Qiw0QkFBNEI7Q0FDNUIsY0FBYztDQUNkOztBQUNEO0NBQ0MseUJBQXlCO0NBQ3pCOztBQUNEO0NBQ0MsMkJBQTJCO0NBQzNCLDRCQUE0QjtDQUM1Qjs7QUFDRDtDQUNDLDhCQUE4QjtDQUM5QiwrQkFBK0I7Q0FDL0IsbUJBQW1CO0NBQ25COztBQUNEO0NBQ0MsZUFBZTtDQUNmLHlCQUF5QjtDQUN6QixXQUFXO0NBQ1g7O0FBRUQ7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQjs7QUFDRDtDQUNDLDJCQUEyQjtDQUMzQiw0QkFBNEI7Q0FDNUI7O0FBQ0Q7Q0FDQyw4QkFBOEI7Q0FDOUIsK0JBQStCO0NBQy9COztBQUVELGlCQUFpQjs7QUFFakI7O0NBRUMsbURBQW1EO0NBQ25ELGdCQUFnQjtDQUNoQjs7QUFFRDtDQUNDLGVBQWU7Q0FDZjs7QUFHRCxtQkFBbUI7O0FBRW5CO0NBQ0MscUNBQXFDO0NBQ3JDLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEI7O0FBQ0Q7Q0FDQyxtQ0FBd0M7Q0FDeEMsV0FBVztDQUNYLFlBQVk7Q0FDWjs7QUFDRDtDQUNDLHNDQUEyQztDQUMzQywwQkFBMEI7Q0FDMUI7O0FBQ0Q7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaOztBQUNEOztDQUVDLGFBQWE7Q0FDYjs7QUFDRDtDQUNDLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEI7O0FBQ0Q7Q0FDQyx5QkFBeUI7Q0FDekIsV0FBVztDQUNYLGdCQUFnQjtDQUNoQjs7QUFDRDtDQUNDLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCOztBQUNEO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1I7O0FBQ0Q7Q0FDQyxjQUFjO0NBQ2Q7O0FBQ0Q7Q0FDQyxTQUFTO0NBQ1QsMEJBQTBCO0NBQzFCLDBCQUEwQjtDQUMxQjs7QUFFRCxzQkFBc0I7O0FBQ3RCO0NBQ0Msd0NBQTZDO0NBQzdDOztBQUdELG1DQUFtQzs7QUFFbkM7Q0FDQyxnQkFBZ0I7Q0FDaEIsb0NBQW9DO0NBQ3BDLFNBQVM7Q0FDVDs7QUFDRDs7Q0FFQyxjQUFjO0NBQ2QsV0FBVztDQUNYOztBQUNEO0NBQ0MscUJBQXFCO0NBQ3JCOztBQUNEO0NBQ0MsMEJBQTBCO0NBQzFCOztBQUNEOztDQUVDLGVBQWU7Q0FDZjs7QUFDRDtDQUNDLGdCQUFnQjtDQUNoQjs7QUFDRDtDQUNDLGtCQUFrQjtDQUNsQjs7QUFDRDtDQUNDLHNCQUFzQjtDQUN0QixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLG9CQUFvQjtDQUNwQixlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLGdCQUFnQjtDQUVYLHNCQUFzQjs7Q0FFM0IsZ0JBQWdCO0NBQ2hCLG9DQUFvQztDQUNwQzs7QUFDRDtDQUNDLDBCQUEwQjtDQUMxQixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCOztBQUNEO0NBQ0MsNkJBQTZCO0NBQzdCOztBQUVEOzs7Q0FHQyxnQkFBZ0I7Q0FDaEI7O0FBQ0Q7O0NBRUMsaUNBQWlDO0NBQ2pDLDRCQUE0QjtDQUM1Qjs7QUFHRCxVQUFVOztBQUVWO0NBQ0Msa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkI7O0FBQ0Q7Q0FDQyxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQjs7QUFDRDtDQUNDLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEI7O0FBQ0Q7Q0FDQyxjQUFjO0NBQ2Q7O0FBQ0Q7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1Qsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixvQkFBb0I7Q0FDcEI7O0FBQ0Q7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLFlBQVk7O0NBRVosb0JBQW9COztDQUVwQixnQ0FBZ0M7U0FHeEIsd0JBQXdCO0NBQ2hDOztBQUNEOztDQUVDLGlCQUFpQjtDQUNqQixXQUFXO0NBQ1gsc0NBQXNDO0NBQ3RDOztBQUNEO0NBQ0Msa0JBQWtCO0NBQ2xCLE1BQU07Q0FDTixRQUFRO0NBQ1Isb0JBQW9CO0NBQ3BCLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFlBQVk7Q0FDWiwyQ0FBMkM7Q0FDM0MsY0FBYztDQUNkLHFCQUFxQjtDQUNyQixpQkFBaUI7Q0FDakIsdUJBQXVCO0NBQ3ZCOztBQUNEO0NBQ0MsV0FBVztDQUNYOztBQUNEO0NBQ0MsY0FBYztDQUNkLDZCQUE2QjtDQUM3QiwwQkFBMEI7Q0FDMUI7O0FBRUQ7Q0FDQyxPQUFPO0NBQ1A7O0FBQ0Q7Q0FDQyxXQUFXO0NBQ1gsY0FBYzs7Q0FFZCx1SEFBdUg7Q0FDdkgsaUhBQWlIO0NBQ2pIOztBQUNEO0NBQ0MsZ0JBQWdCO0NBQ2hCOztBQUVEOzs7O0NBSUMsc0JBQXNCO0NBQ3RCOztBQUdELGFBQWE7O0FBRWI7Q0FDQyxnQkFBZ0I7Q0FDaEIsc0JBQXNCO0NBQ3RCOztBQUdELFlBQVk7O0FBQ1osbURBQW1EOztBQUNuRDtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osc0JBQXNCO0NBQ3RCLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLG1CQUFtQjtDQUNuQix5QkFBeUI7Q0FDekIsc0JBQXNCO0NBQ3RCLHFCQUFxQjtDQUNyQixpQkFBaUI7Q0FDakIsb0JBQW9CO0NBQ3BCLHFDQUFxQztDQUNyQzs7QUFDRDtDQUNDLGVBQWU7Q0FDZixvQkFBb0I7Q0FDcEI7O0FBQ0Q7Ozs7Q0FJQyxrQkFBa0I7Q0FDbEIsb0JBQW9CO0NBQ3BCLDZCQUE2QjtDQUM3Qix1QkFBdUI7Q0FDdkIsV0FBVztDQUNYOztBQUVELGVBQWU7O0FBRWY7Q0FDQyxlQUFlO0FBQ2hCOztBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUNBOztDQUVDLFNBQVM7Q0FDVCxpQkFBaUI7Q0FDakI7O0FBQ0Q7Q0FDQyxTQUFTO0NBQ1Qsb0JBQW9CO0NBQ3BCLHNCQUFzQjtDQUN0Qjs7QUFDRDtDQUNDLE1BQU07Q0FDTixpQkFBaUI7Q0FDakIsaUJBQWlCO0NBQ2pCLHlCQUF5QjtDQUN6Qjs7QUFDRDtDQUNDLGlCQUFpQjtBQUNsQjs7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFDQTs7Q0FFQyxRQUFRO0NBQ1IsZ0JBQWdCO0NBQ2hCOztBQUNEO0NBQ0MsUUFBUTtDQUNSLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkI7O0FBQ0Q7Q0FDQyxPQUFPO0NBQ1Asa0JBQWtCO0NBQ2xCLHdCQUF3QjtDQUN4Qjs7QUM3bkJEO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdXBwb3J0LW1hcC9zdXBwb3J0LW1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHJlcXVpcmVkIHN0eWxlcyAqL1xyXG5cclxuLmxlYWZsZXQtcGFuZSxcclxuLmxlYWZsZXQtdGlsZSxcclxuLmxlYWZsZXQtbWFya2VyLWljb24sXHJcbi5sZWFmbGV0LW1hcmtlci1zaGFkb3csXHJcbi5sZWFmbGV0LXRpbGUtY29udGFpbmVyLFxyXG4ubGVhZmxldC1wYW5lID4gc3ZnLFxyXG4ubGVhZmxldC1wYW5lID4gY2FudmFzLFxyXG4ubGVhZmxldC16b29tLWJveCxcclxuLmxlYWZsZXQtaW1hZ2UtbGF5ZXIsXHJcbi5sZWFmbGV0LWxheWVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogMDtcclxuXHR0b3A6IDA7XHJcblx0fVxyXG4ubGVhZmxldC1jb250YWluZXIge1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0fVxyXG4ubGVhZmxldC10aWxlLFxyXG4ubGVhZmxldC1tYXJrZXItaWNvbixcclxuLmxlYWZsZXQtbWFya2VyLXNoYWRvdyB7XHJcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuXHQgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG5cdCAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0ICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcclxuXHR9XHJcbi8qIFByZXZlbnRzIElFMTEgZnJvbSBoaWdobGlnaHRpbmcgdGlsZXMgaW4gYmx1ZSAqL1xyXG4ubGVhZmxldC10aWxlOjpzZWxlY3Rpb24ge1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcbi8qIFNhZmFyaSByZW5kZXJzIG5vbi1yZXRpbmEgdGlsZSBvbiByZXRpbmEgYmV0dGVyIHdpdGggdGhpcywgYnV0IENocm9tZSBpcyB3b3JzZSAqL1xyXG4ubGVhZmxldC1zYWZhcmkgLmxlYWZsZXQtdGlsZSB7XHJcblx0aW1hZ2UtcmVuZGVyaW5nOiAtd2Via2l0LW9wdGltaXplLWNvbnRyYXN0O1xyXG5cdH1cclxuLyogaGFjayB0aGF0IHByZXZlbnRzIGh3IGxheWVycyBcInN0cmV0Y2hpbmdcIiB3aGVuIGxvYWRpbmcgbmV3IHRpbGVzICovXHJcbi5sZWFmbGV0LXNhZmFyaSAubGVhZmxldC10aWxlLWNvbnRhaW5lciB7XHJcblx0d2lkdGg6IDE2MDBweDtcclxuXHRoZWlnaHQ6IDE2MDBweDtcclxuXHQtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuXHR9XHJcbi5sZWFmbGV0LW1hcmtlci1pY29uLFxyXG4ubGVhZmxldC1tYXJrZXItc2hhZG93IHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR9XHJcbi8qIC5sZWFmbGV0LWNvbnRhaW5lciBzdmc6IHJlc2V0IHN2ZyBtYXgtd2lkdGggZGVjbGVyYXRpb24gc2hpcHBlZCBpbiBKb29tbGEhIChqb29tbGEub3JnKSAzLnggKi9cclxuLyogLmxlYWZsZXQtY29udGFpbmVyIGltZzogbWFwIGlzIGJyb2tlbiBpbiBGRiBpZiB5b3UgaGF2ZSBtYXgtd2lkdGg6IDEwMCUgb24gdGlsZXMgKi9cclxuLmxlYWZsZXQtY29udGFpbmVyIC5sZWFmbGV0LW92ZXJsYXktcGFuZSBzdmcsXHJcbi5sZWFmbGV0LWNvbnRhaW5lciAubGVhZmxldC1tYXJrZXItcGFuZSBpbWcsXHJcbi5sZWFmbGV0LWNvbnRhaW5lciAubGVhZmxldC1zaGFkb3ctcGFuZSBpbWcsXHJcbi5sZWFmbGV0LWNvbnRhaW5lciAubGVhZmxldC10aWxlLXBhbmUgaW1nLFxyXG4ubGVhZmxldC1jb250YWluZXIgaW1nLmxlYWZsZXQtaW1hZ2UtbGF5ZXIsXHJcbi5sZWFmbGV0LWNvbnRhaW5lciAubGVhZmxldC10aWxlIHtcclxuXHRtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcclxuXHRtYXgtaGVpZ2h0OiBub25lICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuLmxlYWZsZXQtY29udGFpbmVyLmxlYWZsZXQtdG91Y2gtem9vbSB7XHJcblx0LW1zLXRvdWNoLWFjdGlvbjogcGFuLXggcGFuLXk7XHJcblx0dG91Y2gtYWN0aW9uOiBwYW4teCBwYW4teTtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRhaW5lci5sZWFmbGV0LXRvdWNoLWRyYWcge1xyXG5cdC1tcy10b3VjaC1hY3Rpb246IHBpbmNoLXpvb207XHJcblx0LyogRmFsbGJhY2sgZm9yIEZGIHdoaWNoIGRvZXNuJ3Qgc3VwcG9ydCBwaW5jaC16b29tICovXHJcblx0dG91Y2gtYWN0aW9uOiBub25lO1xyXG5cdHRvdWNoLWFjdGlvbjogcGluY2gtem9vbTtcclxufVxyXG4ubGVhZmxldC1jb250YWluZXIubGVhZmxldC10b3VjaC1kcmFnLmxlYWZsZXQtdG91Y2gtem9vbSB7XHJcblx0LW1zLXRvdWNoLWFjdGlvbjogbm9uZTtcclxuXHR0b3VjaC1hY3Rpb246IG5vbmU7XHJcbn1cclxuLmxlYWZsZXQtY29udGFpbmVyIHtcclxuXHQtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbi5sZWFmbGV0LWNvbnRhaW5lciBhIHtcclxuXHQtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoNTEsIDE4MSwgMjI5LCAwLjQpO1xyXG59XHJcbi5sZWFmbGV0LXRpbGUge1xyXG5cdGZpbHRlcjogaW5oZXJpdDtcclxuXHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0fVxyXG4ubGVhZmxldC10aWxlLWxvYWRlZCB7XHJcblx0dmlzaWJpbGl0eTogaW5oZXJpdDtcclxuXHR9XHJcbi5sZWFmbGV0LXpvb20tYm94IHtcclxuXHR3aWR0aDogMDtcclxuXHRoZWlnaHQ6IDA7XHJcblx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdCAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHR6LWluZGV4OiA4MDA7XHJcblx0fVxyXG4vKiB3b3JrYXJvdW5kIGZvciBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD04ODgzMTkgKi9cclxuLmxlYWZsZXQtb3ZlcmxheS1wYW5lIHN2ZyB7XHJcblx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuXHR9XHJcblxyXG4ubGVhZmxldC1wYW5lICAgICAgICAgeyB6LWluZGV4OiA0MDA7IH1cclxuXHJcbi5sZWFmbGV0LXRpbGUtcGFuZSAgICB7IHotaW5kZXg6IDIwMDsgfVxyXG4ubGVhZmxldC1vdmVybGF5LXBhbmUgeyB6LWluZGV4OiA0MDA7IH1cclxuLmxlYWZsZXQtc2hhZG93LXBhbmUgIHsgei1pbmRleDogNTAwOyB9XHJcbi5sZWFmbGV0LW1hcmtlci1wYW5lICB7IHotaW5kZXg6IDYwMDsgfVxyXG4ubGVhZmxldC10b29sdGlwLXBhbmUgICB7IHotaW5kZXg6IDY1MDsgfVxyXG4ubGVhZmxldC1wb3B1cC1wYW5lICAgeyB6LWluZGV4OiA3MDA7IH1cclxuXHJcbi5sZWFmbGV0LW1hcC1wYW5lIGNhbnZhcyB7IHotaW5kZXg6IDEwMDsgfVxyXG4ubGVhZmxldC1tYXAtcGFuZSBzdmcgICAgeyB6LWluZGV4OiAyMDA7IH1cclxuXHJcbi5sZWFmbGV0LXZtbC1zaGFwZSB7XHJcblx0d2lkdGg6IDFweDtcclxuXHRoZWlnaHQ6IDFweDtcclxuXHR9XHJcbi5sdm1sIHtcclxuXHRiZWhhdmlvcjogdXJsKCNkZWZhdWx0I1ZNTCk7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR9XHJcblxyXG5cclxuLyogY29udHJvbCBwb3NpdGlvbmluZyAqL1xyXG5cclxuLmxlYWZsZXQtY29udHJvbCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHotaW5kZXg6IDgwMDtcclxuXHRwb2ludGVyLWV2ZW50czogdmlzaWJsZVBhaW50ZWQ7IC8qIElFIDktMTAgZG9lc24ndCBoYXZlIGF1dG8gKi9cclxuXHRwb2ludGVyLWV2ZW50czogYXV0bztcclxuXHR9XHJcbi5sZWFmbGV0LXRvcCxcclxuLmxlYWZsZXQtYm90dG9tIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ei1pbmRleDogMTAwMDtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHR9XHJcbi5sZWFmbGV0LXRvcCB7XHJcblx0dG9wOiAwO1xyXG5cdH1cclxuLmxlYWZsZXQtcmlnaHQge1xyXG5cdHJpZ2h0OiAwO1xyXG5cdH1cclxuLmxlYWZsZXQtYm90dG9tIHtcclxuXHRib3R0b206IDA7XHJcblx0fVxyXG4ubGVhZmxldC1sZWZ0IHtcclxuXHRsZWZ0OiAwO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbCB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0Y2xlYXI6IGJvdGg7XHJcblx0fVxyXG4ubGVhZmxldC1yaWdodCAubGVhZmxldC1jb250cm9sIHtcclxuXHRmbG9hdDogcmlnaHQ7XHJcblx0fVxyXG4ubGVhZmxldC10b3AgLmxlYWZsZXQtY29udHJvbCB7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxuXHR9XHJcbi5sZWFmbGV0LWJvdHRvbSAubGVhZmxldC1jb250cm9sIHtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdH1cclxuLmxlYWZsZXQtbGVmdCAubGVhZmxldC1jb250cm9sIHtcclxuXHRtYXJnaW4tbGVmdDogMTBweDtcclxuXHR9XHJcbi5sZWFmbGV0LXJpZ2h0IC5sZWFmbGV0LWNvbnRyb2wge1xyXG5cdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHR9XHJcblxyXG5cclxuLyogem9vbSBhbmQgZmFkZSBhbmltYXRpb25zICovXHJcblxyXG4ubGVhZmxldC1mYWRlLWFuaW0gLmxlYWZsZXQtdGlsZSB7XHJcblx0d2lsbC1jaGFuZ2U6IG9wYWNpdHk7XHJcblx0fVxyXG4ubGVhZmxldC1mYWRlLWFuaW0gLmxlYWZsZXQtcG9wdXAge1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgbGluZWFyO1xyXG5cdCAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGxpbmVhcjtcclxuXHQgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBsaW5lYXI7XHJcblx0fVxyXG4ubGVhZmxldC1mYWRlLWFuaW0gLmxlYWZsZXQtbWFwLXBhbmUgLmxlYWZsZXQtcG9wdXAge1xyXG5cdG9wYWNpdHk6IDE7XHJcblx0fVxyXG4ubGVhZmxldC16b29tLWFuaW1hdGVkIHtcclxuXHQtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuXHQgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuXHQgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuXHR9XHJcbi5sZWFmbGV0LXpvb20tYW5pbSAubGVhZmxldC16b29tLWFuaW1hdGVkIHtcclxuXHR3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG5cdH1cclxuLmxlYWZsZXQtem9vbS1hbmltIC5sZWFmbGV0LXpvb20tYW5pbWF0ZWQge1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4yNXMgY3ViaWMtYmV6aWVyKDAsMCwwLjI1LDEpO1xyXG5cdCAgIC1tb3otdHJhbnNpdGlvbjogICAgLW1vei10cmFuc2Zvcm0gMC4yNXMgY3ViaWMtYmV6aWVyKDAsMCwwLjI1LDEpO1xyXG5cdCAgICAgICAgdHJhbnNpdGlvbjogICAgICAgICB0cmFuc2Zvcm0gMC4yNXMgY3ViaWMtYmV6aWVyKDAsMCwwLjI1LDEpO1xyXG5cdH1cclxuLmxlYWZsZXQtem9vbS1hbmltIC5sZWFmbGV0LXRpbGUsXHJcbi5sZWFmbGV0LXBhbi1hbmltIC5sZWFmbGV0LXRpbGUge1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZTtcclxuXHQgICAtbW96LXRyYW5zaXRpb246IG5vbmU7XHJcblx0ICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xyXG5cdH1cclxuXHJcbi5sZWFmbGV0LXpvb20tYW5pbSAubGVhZmxldC16b29tLWhpZGUge1xyXG5cdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHR9XHJcblxyXG5cclxuLyogY3Vyc29ycyAqL1xyXG5cclxuLmxlYWZsZXQtaW50ZXJhY3RpdmUge1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHR9XHJcbi5sZWFmbGV0LWdyYWIge1xyXG5cdGN1cnNvcjogLXdlYmtpdC1ncmFiO1xyXG5cdGN1cnNvcjogICAgLW1vei1ncmFiO1xyXG5cdGN1cnNvcjogICAgICAgICBncmFiO1xyXG5cdH1cclxuLmxlYWZsZXQtY3Jvc3NoYWlyLFxyXG4ubGVhZmxldC1jcm9zc2hhaXIgLmxlYWZsZXQtaW50ZXJhY3RpdmUge1xyXG5cdGN1cnNvcjogY3Jvc3NoYWlyO1xyXG5cdH1cclxuLmxlYWZsZXQtcG9wdXAtcGFuZSxcclxuLmxlYWZsZXQtY29udHJvbCB7XHJcblx0Y3Vyc29yOiBhdXRvO1xyXG5cdH1cclxuLmxlYWZsZXQtZHJhZ2dpbmcgLmxlYWZsZXQtZ3JhYixcclxuLmxlYWZsZXQtZHJhZ2dpbmcgLmxlYWZsZXQtZ3JhYiAubGVhZmxldC1pbnRlcmFjdGl2ZSxcclxuLmxlYWZsZXQtZHJhZ2dpbmcgLmxlYWZsZXQtbWFya2VyLWRyYWdnYWJsZSB7XHJcblx0Y3Vyc29yOiBtb3ZlO1xyXG5cdGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcclxuXHRjdXJzb3I6ICAgIC1tb3otZ3JhYmJpbmc7XHJcblx0Y3Vyc29yOiAgICAgICAgIGdyYWJiaW5nO1xyXG5cdH1cclxuXHJcbi8qIG1hcmtlciAmIG92ZXJsYXlzIGludGVyYWN0aXZpdHkgKi9cclxuLmxlYWZsZXQtbWFya2VyLWljb24sXHJcbi5sZWFmbGV0LW1hcmtlci1zaGFkb3csXHJcbi5sZWFmbGV0LWltYWdlLWxheWVyLFxyXG4ubGVhZmxldC1wYW5lID4gc3ZnIHBhdGgsXHJcbi5sZWFmbGV0LXRpbGUtY29udGFpbmVyIHtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHR9XHJcblxyXG4ubGVhZmxldC1tYXJrZXItaWNvbi5sZWFmbGV0LWludGVyYWN0aXZlLFxyXG4ubGVhZmxldC1pbWFnZS1sYXllci5sZWFmbGV0LWludGVyYWN0aXZlLFxyXG4ubGVhZmxldC1wYW5lID4gc3ZnIHBhdGgubGVhZmxldC1pbnRlcmFjdGl2ZSxcclxuc3ZnLmxlYWZsZXQtaW1hZ2UtbGF5ZXIubGVhZmxldC1pbnRlcmFjdGl2ZSBwYXRoIHtcclxuXHRwb2ludGVyLWV2ZW50czogdmlzaWJsZVBhaW50ZWQ7IC8qIElFIDktMTAgZG9lc24ndCBoYXZlIGF1dG8gKi9cclxuXHRwb2ludGVyLWV2ZW50czogYXV0bztcclxuXHR9XHJcblxyXG4vKiB2aXN1YWwgdHdlYWtzICovXHJcblxyXG4ubGVhZmxldC1jb250YWluZXIge1xyXG5cdGJhY2tncm91bmQ6ICNkZGQ7XHJcblx0b3V0bGluZTogMDtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRhaW5lciBhIHtcclxuXHRjb2xvcjogIzAwNzhBODtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRhaW5lciBhLmxlYWZsZXQtYWN0aXZlIHtcclxuXHRvdXRsaW5lOiAycHggc29saWQgb3JhbmdlO1xyXG5cdH1cclxuLmxlYWZsZXQtem9vbS1ib3gge1xyXG5cdGJvcmRlcjogMnB4IGRvdHRlZCAjMzhmO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuXHR9XHJcblxyXG5cclxuLyogZ2VuZXJhbCB0eXBvZ3JhcGh5ICovXHJcbi5sZWFmbGV0LWNvbnRhaW5lciB7XHJcblx0Zm9udDogMTJweC8xLjUgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG5cdH1cclxuXHJcblxyXG4vKiBnZW5lcmFsIHRvb2xiYXIgc3R5bGVzICovXHJcblxyXG4ubGVhZmxldC1iYXIge1xyXG5cdGJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsMCwwLDAuNjUpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHR9XHJcbi5sZWFmbGV0LWJhciBhLFxyXG4ubGVhZmxldC1iYXIgYTpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuXHR3aWR0aDogMjZweDtcclxuXHRoZWlnaHQ6IDI2cHg7XHJcblx0bGluZS1oZWlnaHQ6IDI2cHg7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRjb2xvcjogYmxhY2s7XHJcblx0fVxyXG4ubGVhZmxldC1iYXIgYSxcclxuLmxlYWZsZXQtY29udHJvbC1sYXllcnMtdG9nZ2xlIHtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0fVxyXG4ubGVhZmxldC1iYXIgYTpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuXHR9XHJcbi5sZWFmbGV0LWJhciBhOmZpcnN0LWNoaWxkIHtcclxuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XHJcblx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcclxuXHR9XHJcbi5sZWFmbGV0LWJhciBhOmxhc3QtY2hpbGQge1xyXG5cdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcclxuXHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xyXG5cdGJvcmRlci1ib3R0b206IG5vbmU7XHJcblx0fVxyXG4ubGVhZmxldC1iYXIgYS5sZWFmbGV0LWRpc2FibGVkIHtcclxuXHRjdXJzb3I6IGRlZmF1bHQ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuXHRjb2xvcjogI2JiYjtcclxuXHR9XHJcblxyXG4ubGVhZmxldC10b3VjaCAubGVhZmxldC1iYXIgYSB7XHJcblx0d2lkdGg6IDMwcHg7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG5cdH1cclxuLmxlYWZsZXQtdG91Y2ggLmxlYWZsZXQtYmFyIGE6Zmlyc3QtY2hpbGQge1xyXG5cdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDJweDtcclxuXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xyXG5cdH1cclxuLmxlYWZsZXQtdG91Y2ggLmxlYWZsZXQtYmFyIGE6bGFzdC1jaGlsZCB7XHJcblx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMnB4O1xyXG5cdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAycHg7XHJcblx0fVxyXG5cclxuLyogem9vbSBjb250cm9sICovXHJcblxyXG4ubGVhZmxldC1jb250cm9sLXpvb20taW4sXHJcbi5sZWFmbGV0LWNvbnRyb2wtem9vbS1vdXQge1xyXG5cdGZvbnQ6IGJvbGQgMThweCAnTHVjaWRhIENvbnNvbGUnLCBNb25hY28sIG1vbm9zcGFjZTtcclxuXHR0ZXh0LWluZGVudDogMXB4O1xyXG5cdH1cclxuXHJcbi5sZWFmbGV0LXRvdWNoIC5sZWFmbGV0LWNvbnRyb2wtem9vbS1pbiwgLmxlYWZsZXQtdG91Y2ggLmxlYWZsZXQtY29udHJvbC16b29tLW91dCAge1xyXG5cdGZvbnQtc2l6ZTogMjJweDtcclxuXHR9XHJcblxyXG5cclxuLyogbGF5ZXJzIGNvbnRyb2wgKi9cclxuXHJcbi5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzIHtcclxuXHRib3gtc2hhZG93OiAwIDFweCA1cHggcmdiYSgwLDAsMCwwLjQpO1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1sYXllcnMtdG9nZ2xlIHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaW1hZ2VzL2xheWVycy5wbmcpO1xyXG5cdHdpZHRoOiAzNnB4O1xyXG5cdGhlaWdodDogMzZweDtcclxuXHR9XHJcbi5sZWFmbGV0LXJldGluYSAubGVhZmxldC1jb250cm9sLWxheWVycy10b2dnbGUge1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChpbWFnZXMvbGF5ZXJzLTJ4LnBuZyk7XHJcblx0YmFja2dyb3VuZC1zaXplOiAyNnB4IDI2cHg7XHJcblx0fVxyXG4ubGVhZmxldC10b3VjaCAubGVhZmxldC1jb250cm9sLWxheWVycy10b2dnbGUge1xyXG5cdHdpZHRoOiA0NHB4O1xyXG5cdGhlaWdodDogNDRweDtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzIC5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLWxpc3QsXHJcbi5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLWV4cGFuZGVkIC5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLXRvZ2dsZSB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLWV4cGFuZGVkIC5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLWxpc3Qge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLWV4cGFuZGVkIHtcclxuXHRwYWRkaW5nOiA2cHggMTBweCA2cHggNnB4O1xyXG5cdGNvbG9yOiAjMzMzO1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLWxheWVycy1zY3JvbGxiYXIge1xyXG5cdG92ZXJmbG93LXk6IHNjcm9sbDtcclxuXHRvdmVyZmxvdy14OiBoaWRkZW47XHJcblx0cGFkZGluZy1yaWdodDogNXB4O1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1sYXllcnMtc2VsZWN0b3Ige1xyXG5cdG1hcmdpbi10b3A6IDJweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dG9wOiAxcHg7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLWxheWVycyBsYWJlbCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLWxheWVycy1zZXBhcmF0b3Ige1xyXG5cdGhlaWdodDogMDtcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcclxuXHRtYXJnaW46IDVweCAtMTBweCA1cHggLTZweDtcclxuXHR9XHJcblxyXG4vKiBEZWZhdWx0IGljb24gVVJMcyAqL1xyXG4ubGVhZmxldC1kZWZhdWx0LWljb24tcGF0aCB7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGltYWdlcy9tYXJrZXItaWNvbi5wbmcpO1xyXG5cdH1cclxuXHJcblxyXG4vKiBhdHRyaWJ1dGlvbiBhbmQgc2NhbGUgY29udHJvbHMgKi9cclxuXHJcbi5sZWFmbGV0LWNvbnRhaW5lciAubGVhZmxldC1jb250cm9sLWF0dHJpYnV0aW9uIHtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuXHRtYXJnaW46IDA7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLWF0dHJpYnV0aW9uLFxyXG4ubGVhZmxldC1jb250cm9sLXNjYWxlLWxpbmUge1xyXG5cdHBhZGRpbmc6IDAgNXB4O1xyXG5cdGNvbG9yOiAjMzMzO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1hdHRyaWJ1dGlvbiBhIHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLWF0dHJpYnV0aW9uIGE6aG92ZXIge1xyXG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udGFpbmVyIC5sZWFmbGV0LWNvbnRyb2wtYXR0cmlidXRpb24sXHJcbi5sZWFmbGV0LWNvbnRhaW5lciAubGVhZmxldC1jb250cm9sLXNjYWxlIHtcclxuXHRmb250LXNpemU6IDExcHg7XHJcblx0fVxyXG4ubGVhZmxldC1sZWZ0IC5sZWFmbGV0LWNvbnRyb2wtc2NhbGUge1xyXG5cdG1hcmdpbi1sZWZ0OiA1cHg7XHJcblx0fVxyXG4ubGVhZmxldC1ib3R0b20gLmxlYWZsZXQtY29udHJvbC1zY2FsZSB7XHJcblx0bWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1zY2FsZS1saW5lIHtcclxuXHRib3JkZXI6IDJweCBzb2xpZCAjNzc3O1xyXG5cdGJvcmRlci10b3A6IG5vbmU7XHJcblx0bGluZS1oZWlnaHQ6IDEuMTtcclxuXHRwYWRkaW5nOiAycHggNXB4IDFweDtcclxuXHRmb250LXNpemU6IDExcHg7XHJcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHQgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG5cdH1cclxuLmxlYWZsZXQtY29udHJvbC1zY2FsZS1saW5lOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuXHRib3JkZXItdG9wOiAycHggc29saWQgIzc3NztcclxuXHRib3JkZXItYm90dG9tOiBub25lO1xyXG5cdG1hcmdpbi10b3A6IC0ycHg7XHJcblx0fVxyXG4ubGVhZmxldC1jb250cm9sLXNjYWxlLWxpbmU6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XHJcblx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM3Nzc7XHJcblx0fVxyXG5cclxuLmxlYWZsZXQtdG91Y2ggLmxlYWZsZXQtY29udHJvbC1hdHRyaWJ1dGlvbixcclxuLmxlYWZsZXQtdG91Y2ggLmxlYWZsZXQtY29udHJvbC1sYXllcnMsXHJcbi5sZWFmbGV0LXRvdWNoIC5sZWFmbGV0LWJhciB7XHJcblx0Ym94LXNoYWRvdzogbm9uZTtcclxuXHR9XHJcbi5sZWFmbGV0LXRvdWNoIC5sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLFxyXG4ubGVhZmxldC10b3VjaCAubGVhZmxldC1iYXIge1xyXG5cdGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcclxuXHRiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG5cdH1cclxuXHJcblxyXG4vKiBwb3B1cCAqL1xyXG5cclxuLmxlYWZsZXQtcG9wdXAge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHR9XHJcbi5sZWFmbGV0LXBvcHVwLWNvbnRlbnQtd3JhcHBlciB7XHJcblx0cGFkZGluZzogMXB4O1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0Ym9yZGVyLXJhZGl1czogMTJweDtcclxuXHR9XHJcbi5sZWFmbGV0LXBvcHVwLWNvbnRlbnQge1xyXG5cdG1hcmdpbjogMTNweCAxOXB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjQ7XHJcblx0fVxyXG4ubGVhZmxldC1wb3B1cC1jb250ZW50IHAge1xyXG5cdG1hcmdpbjogMThweCAwO1xyXG5cdH1cclxuLmxlYWZsZXQtcG9wdXAtdGlwLWNvbnRhaW5lciB7XHJcblx0d2lkdGg6IDQwcHg7XHJcblx0aGVpZ2h0OiAyMHB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiA1MCU7XHJcblx0bWFyZ2luLWxlZnQ6IC0yMHB4O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblx0fVxyXG4ubGVhZmxldC1wb3B1cC10aXAge1xyXG5cdHdpZHRoOiAxN3B4O1xyXG5cdGhlaWdodDogMTdweDtcclxuXHRwYWRkaW5nOiAxcHg7XHJcblxyXG5cdG1hcmdpbjogLTEwcHggYXV0byAwO1xyXG5cclxuXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHQgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHQgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHQgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuXHR9XHJcbi5sZWFmbGV0LXBvcHVwLWNvbnRlbnQtd3JhcHBlcixcclxuLmxlYWZsZXQtcG9wdXAtdGlwIHtcclxuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHRjb2xvcjogIzMzMztcclxuXHRib3gtc2hhZG93OiAwIDNweCAxNHB4IHJnYmEoMCwwLDAsMC40KTtcclxuXHR9XHJcbi5sZWFmbGV0LWNvbnRhaW5lciBhLmxlYWZsZXQtcG9wdXAtY2xvc2UtYnV0dG9uIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdHBhZGRpbmc6IDRweCA0cHggMCAwO1xyXG5cdGJvcmRlcjogbm9uZTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0d2lkdGg6IDE4cHg7XHJcblx0aGVpZ2h0OiAxNHB4O1xyXG5cdGZvbnQ6IDE2cHgvMTRweCBUYWhvbWEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcblx0Y29sb3I6ICNjM2MzYzM7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdH1cclxuLmxlYWZsZXQtY29udGFpbmVyIGEubGVhZmxldC1wb3B1cC1jbG9zZS1idXR0b246aG92ZXIge1xyXG5cdGNvbG9yOiAjOTk5O1xyXG5cdH1cclxuLmxlYWZsZXQtcG9wdXAtc2Nyb2xsZWQge1xyXG5cdG92ZXJmbG93OiBhdXRvO1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG5cdH1cclxuXHJcbi5sZWFmbGV0LW9sZGllIC5sZWFmbGV0LXBvcHVwLWNvbnRlbnQtd3JhcHBlciB7XHJcblx0em9vbTogMTtcclxuXHR9XHJcbi5sZWFmbGV0LW9sZGllIC5sZWFmbGV0LXBvcHVwLXRpcCB7XHJcblx0d2lkdGg6IDI0cHg7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblxyXG5cdC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0Lk1hdHJpeChNMTE9MC43MDcxMDY3OCwgTTEyPTAuNzA3MTA2NzgsIE0yMT0tMC43MDcxMDY3OCwgTTIyPTAuNzA3MTA2NzgpXCI7XHJcblx0ZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuTWF0cml4KE0xMT0wLjcwNzEwNjc4LCBNMTI9MC43MDcxMDY3OCwgTTIxPS0wLjcwNzEwNjc4LCBNMjI9MC43MDcxMDY3OCk7XHJcblx0fVxyXG4ubGVhZmxldC1vbGRpZSAubGVhZmxldC1wb3B1cC10aXAtY29udGFpbmVyIHtcclxuXHRtYXJnaW4tdG9wOiAtMXB4O1xyXG5cdH1cclxuXHJcbi5sZWFmbGV0LW9sZGllIC5sZWFmbGV0LWNvbnRyb2wtem9vbSxcclxuLmxlYWZsZXQtb2xkaWUgLmxlYWZsZXQtY29udHJvbC1sYXllcnMsXHJcbi5sZWFmbGV0LW9sZGllIC5sZWFmbGV0LXBvcHVwLWNvbnRlbnQtd3JhcHBlcixcclxuLmxlYWZsZXQtb2xkaWUgLmxlYWZsZXQtcG9wdXAtdGlwIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xyXG5cdH1cclxuXHJcblxyXG4vKiBkaXYgaWNvbiAqL1xyXG5cclxuLmxlYWZsZXQtZGl2LWljb24ge1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzY2NjtcclxuXHR9XHJcblxyXG5cclxuLyogVG9vbHRpcCAqL1xyXG4vKiBCYXNlIHN0eWxlcyBmb3IgdGhlIGVsZW1lbnQgdGhhdCBoYXMgYSB0b29sdGlwICovXHJcbi5sZWFmbGV0LXRvb2x0aXAge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRwYWRkaW5nOiA2cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG5cdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRjb2xvcjogIzIyMjtcclxuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblx0Ym94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC40KTtcclxuXHR9XHJcbi5sZWFmbGV0LXRvb2x0aXAubGVhZmxldC1jbGlja2FibGUge1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRwb2ludGVyLWV2ZW50czogYXV0bztcclxuXHR9XHJcbi5sZWFmbGV0LXRvb2x0aXAtdG9wOmJlZm9yZSxcclxuLmxlYWZsZXQtdG9vbHRpcC1ib3R0b206YmVmb3JlLFxyXG4ubGVhZmxldC10b29sdGlwLWxlZnQ6YmVmb3JlLFxyXG4ubGVhZmxldC10b29sdGlwLXJpZ2h0OmJlZm9yZSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG5cdGJvcmRlcjogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdGNvbnRlbnQ6IFwiXCI7XHJcblx0fVxyXG5cclxuLyogRGlyZWN0aW9ucyAqL1xyXG5cclxuLmxlYWZsZXQtdG9vbHRpcC1ib3R0b20ge1xyXG5cdG1hcmdpbi10b3A6IDZweDtcclxufVxyXG4ubGVhZmxldC10b29sdGlwLXRvcCB7XHJcblx0bWFyZ2luLXRvcDogLTZweDtcclxufVxyXG4ubGVhZmxldC10b29sdGlwLWJvdHRvbTpiZWZvcmUsXHJcbi5sZWFmbGV0LXRvb2x0aXAtdG9wOmJlZm9yZSB7XHJcblx0bGVmdDogNTAlO1xyXG5cdG1hcmdpbi1sZWZ0OiAtNnB4O1xyXG5cdH1cclxuLmxlYWZsZXQtdG9vbHRpcC10b3A6YmVmb3JlIHtcclxuXHRib3R0b206IDA7XHJcblx0bWFyZ2luLWJvdHRvbTogLTEycHg7XHJcblx0Ym9yZGVyLXRvcC1jb2xvcjogI2ZmZjtcclxuXHR9XHJcbi5sZWFmbGV0LXRvb2x0aXAtYm90dG9tOmJlZm9yZSB7XHJcblx0dG9wOiAwO1xyXG5cdG1hcmdpbi10b3A6IC0xMnB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAtNnB4O1xyXG5cdGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XHJcblx0fVxyXG4ubGVhZmxldC10b29sdGlwLWxlZnQge1xyXG5cdG1hcmdpbi1sZWZ0OiAtNnB4O1xyXG59XHJcbi5sZWFmbGV0LXRvb2x0aXAtcmlnaHQge1xyXG5cdG1hcmdpbi1sZWZ0OiA2cHg7XHJcbn1cclxuLmxlYWZsZXQtdG9vbHRpcC1sZWZ0OmJlZm9yZSxcclxuLmxlYWZsZXQtdG9vbHRpcC1yaWdodDpiZWZvcmUge1xyXG5cdHRvcDogNTAlO1xyXG5cdG1hcmdpbi10b3A6IC02cHg7XHJcblx0fVxyXG4ubGVhZmxldC10b29sdGlwLWxlZnQ6YmVmb3JlIHtcclxuXHRyaWdodDogMDtcclxuXHRtYXJnaW4tcmlnaHQ6IC0xMnB4O1xyXG5cdGJvcmRlci1sZWZ0LWNvbG9yOiAjZmZmO1xyXG5cdH1cclxuLmxlYWZsZXQtdG9vbHRpcC1yaWdodDpiZWZvcmUge1xyXG5cdGxlZnQ6IDA7XHJcblx0bWFyZ2luLWxlZnQ6IC0xMnB4O1xyXG5cdGJvcmRlci1yaWdodC1jb2xvcjogI2ZmZjtcclxuXHR9XHJcbiIsIkBpbXBvcnQgXCJ+bGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzXCI7XHJcblxyXG4ubWFwLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbn1cclxuICBcclxuLm1hcC1mcmFtZSB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4gIFxyXG4jbWFwIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufSIsIkBpbXBvcnQgXCJ+bGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzXCI7XG4ubWFwLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IDMwcHg7XG59XG5cbi5tYXAtZnJhbWUge1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jbWFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/support-map/support-map.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/support-map/support-map.component.ts ***!
  \************************************************************/
/*! exports provided: SupportMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportMapComponent", function() { return SupportMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var leaflet_geosearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet-geosearch */ "./node_modules/leaflet-geosearch/dist/geosearch.module.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_location_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/location.service */ "./src/app/services/location.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


// const provider = new AlgoliaProvider();
// add to leaflet



var iconRetinaUrl = 'assets/marker-icon-2x.png';
var iconUrl = 'assets/marker-icon.png';
var shadowUrl = 'assets/marker-shadow.png';
// const iconRetinaUrl = '../../../assets/icon/happy.png';
// const iconUrl = '../../../assets/icon/happy.png';
// const shadowUrl = '../../../assets/icon/happy.png';
var iconDefault = leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"]({
    iconRetinaUrl: iconRetinaUrl,
    iconUrl: iconUrl,
    shadowUrl: shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
});
leaflet__WEBPACK_IMPORTED_MODULE_1__["Marker"].prototype.options.icon = iconDefault;
var supportIcon = leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"]({
    iconUrl: '../../../assets/icon/support.png',
    // shadowUrl: 'leaf-shadow.png',
    iconSize: [38, 95],
    // shadowSize:   [50, 64], // size of the shadow
    iconAnchor: [22, 94],
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});
;
var SupportMapComponent = /** @class */ (function () {
    function SupportMapComponent(dataService, locationService) {
        this.dataService = dataService;
        this.locationService = locationService;
        this.newItemEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.locationList = [];
        this.polygon = [];
        this.latlng = {
            lat: "",
            lon: ""
        };
    }
    SupportMapComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var provider, lat, lon, searchControl, onMapClick;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.initMap();
                        return [4 /*yield*/, this.getLocationList()];
                    case 1:
                        _a.sent();
                        if (this.locationList.length != 0) {
                            this.getMarkers();
                        }
                        provider = new leaflet_geosearch__WEBPACK_IMPORTED_MODULE_2__["OpenStreetMapProvider"]();
                        searchControl = new leaflet_geosearch__WEBPACK_IMPORTED_MODULE_2__["GeoSearchControl"]({
                            provider: provider,
                            showPopup: true,
                            marker: {
                                icon: iconDefault,
                                draggable: false,
                            },
                            popupFormat: function (_a) {
                                var query = _a.query, result = _a.result;
                                return result.label;
                            },
                            keepResult: true,
                        }).addTo(this.map);
                        onMapClick = function (e) {
                            _this.latlng = {
                                lat: e.latlng.lat,
                                lon: e.latlng.lng,
                            };
                            _this.newItemEvent.emit(_this.latlng);
                        };
                        this.map.on('click', onMapClick);
                        return [2 /*return*/];
                }
            });
        });
    };
    SupportMapComponent.prototype.initMap = function () {
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_1__["map"]('map', {
            center: [20.992966, 105.813566],
            zoom: 15
        });
        var tiles = leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });
        tiles.addTo(this.map);
    };
    SupportMapComponent.prototype.getLocationList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.locationService.getLocationListNoFilter().then(function (data) {
                            _this.locationList = data.data;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SupportMapComponent.prototype.getMarkers = function () {
        var markers = [];
        var temp = [];
        for (var i = 0; i < this.locationList.length; i++) {
            temp = [];
            temp.push(this.locationList[i].latitude);
            temp.push(this.locationList[i].longitude);
            temp.push(this.locationList[i].detail_location);
            temp.push(this.locationList[i].sub_district);
            temp.push(this.locationList[i].district);
            temp.push("<b style=\"font-size:15px\">" + this.locationList[i].detail_location + ", " + this.locationList[i].sub_district.name + ", " + this.locationList[i].district.path + "</b>");
            markers.push(temp);
        }
        //Loop through the markers array
        for (var i = 0; i < markers.length; i++) {
            var lon = Number(markers[i][1]);
            var lat = Number(markers[i][0]);
            var popupText = String(markers[i][5]);
            var markerLocation = new leaflet__WEBPACK_IMPORTED_MODULE_1__["LatLng"](lat, lon);
            var marker = new leaflet__WEBPACK_IMPORTED_MODULE_1__["Marker"](markerLocation);
            this.map.addLayer(marker);
            marker.bindPopup(popupText);
        }
        console.log(12, markers);
    };
    SupportMapComponent.ctorParameters = function () { return [
        { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: src_app_services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SupportMapComponent.prototype, "newItemEvent", void 0);
    SupportMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-support-map',
            template: __importDefault(__webpack_require__(/*! raw-loader!./support-map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support-map/support-map.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./support-map.component.scss */ "./src/app/pages/support-map/support-map.component.scss")).default]
        }),
        __metadata("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            src_app_services_location_service__WEBPACK_IMPORTED_MODULE_4__["LocationService"]])
    ], SupportMapComponent);
    return SupportMapComponent;
}());



/***/ }),

/***/ "./src/app/pages/tables/tables.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/tables/tables.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYmxlcy90YWJsZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/tables/tables.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/tables/tables.component.ts ***!
  \**************************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var TablesComponent = /** @class */ (function () {
    function TablesComponent() {
    }
    TablesComponent.prototype.ngOnInit = function () {
    };
    TablesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tables',
            template: __importDefault(__webpack_require__(/*! raw-loader!./tables.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tables/tables.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./tables.component.scss */ "./src/app/pages/tables/tables.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], TablesComponent);
    return TablesComponent;
}());



/***/ }),

/***/ "./src/app/pages/user-profile/user-profile.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/user-profile/user-profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/user-profile/user-profile.component.ts ***!
  \**************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(profileService, userService, spinnerService, toastrService) {
        this.profileService = profileService;
        this.userService = userService;
        this.spinnerService = spinnerService;
        this.toastrService = toastrService;
        this.profile_user = {
            name: "",
            email: "",
            phone: "",
            password: "",
        };
        this.checkEdit = false;
        this.roleName = "";
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spinnerService.show();
                        return [4 /*yield*/, this.getProfile()];
                    case 1:
                        _a.sent();
                        this.spinnerService.hide();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserProfileComponent.prototype.getProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.profileService.getProfile().then(function (data) {
                            _this.profile_user = data;
                            console.log(data);
                            _this.roleName = data.role.name;
                            // this.getUser(this.filter);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // async getUser(filter) {
    //   this.userService.getUser(filter).then((data: any) => {
    //     this.user = data[0];
    //     this.role = data[0].role.action_permission[0].name;
    //     console.log(456, data[0].role.action_permission[0].name);
    //     console.log(123,this.user.username);
    //   })
    // }
    UserProfileComponent.prototype.edit = function () {
        this.checkEdit = true;
    };
    UserProfileComponent.prototype.out = function () {
        this.getProfile();
        this.checkEdit = false;
    };
    UserProfileComponent.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.checkEdit = false;
                        return [4 /*yield*/, this.userService.updateUserInfo(this.profile_user._id, {
                                email: this.profile_user.email,
                                phone: this.profile_user.phone,
                                name: this.profile_user.name,
                                password: this.profile_user.password
                            }).then(function (data) {
                                _this.toastrService.success("Cập nhật thông tin cá nhân thành công.");
                            }).catch(function (err) {
                                _this.toastrService.warning("Cập nhật thất bại.");
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserProfileComponent.ctorParameters = function () { return [
        { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __importDefault(__webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-profile/user-profile.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/pages/user-profile/user-profile.component.scss")).default]
        }),
        __metadata("design:paramtypes", [src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());

var FIELDS = [
    {
        label: "Tên đăng nhập",
        fin: "username",
        key: "username",
        type: "input",
        readonly: true,
    },
    {
        label: "Mật khẩu",
        fin: "password",
        key: "password",
        type: "input",
        readonly: true,
    },
    {
        label: "Họ và tên",
        fin: "name",
        key: "name",
        type: "input",
        readonly: true,
    },
    {
        label: "Email",
        fin: "email",
        key: "email",
        type: "input",
        readonly: true,
    },
    {
        label: "Điện thoại",
        fin: "phone",
        key: "phone",
        type: "input",
        readonly: true,
    },
];


/***/ }),

/***/ "./src/app/pages/user/user.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/user/user.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/user/user.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/user/user.component.ts ***!
  \**********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_services_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/role.service */ "./src/app/services/role.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var UserComponent = /** @class */ (function () {
    function UserComponent(userService, roleService, profileService, spinnerService, toastrService) {
        this.userService = userService;
        this.roleService = roleService;
        this.profileService = profileService;
        this.spinnerService = spinnerService;
        this.toastrService = toastrService;
        this.userList = [];
        this.roleList = [];
        this.filter = {
            approve: "1",
            username: undefined,
            name: undefined,
            role: undefined,
            status: undefined
        };
        this.currentUser = {};
        this.currentPage = 1;
        this.sizePage = 5;
        this.check = false;
        // search
        this.searchUsername = "";
        this.searchName = "";
        this.searchRole = "";
        this.searchStatus = "";
    }
    UserComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.spinnerService.show();
                        return [4 /*yield*/, this.checkEditUserPermission()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.getRoleList()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.getUserList(this.filter, this.currentPage, this.sizePage)];
                    case 3:
                        _a.sent();
                        this.check = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(UserComponent.prototype, "fields", {
        get: function () {
            return FIELDS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserComponent.prototype, "key_data", {
        get: function () {
            return KEY_DATA;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserComponent.prototype, "status", {
        get: function () {
            return STATUS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserComponent.prototype, "modals", {
        get: function () {
            return MODALS;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserComponent.prototype, "data", {
        get: function () {
            return {
                status: STATUS,
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserComponent.prototype, "is_have_data", {
        get: function () {
            return Object.keys(this.currentUser).length;
        },
        enumerable: true,
        configurable: true
    });
    UserComponent.prototype.is_string = function (type) {
        return type === "string";
    };
    UserComponent.prototype.is_boolean = function (type) {
        return type === "boolean";
    };
    UserComponent.prototype.is_input = function (type) {
        return type === "input";
    };
    UserComponent.prototype.is_select = function (type) {
        return type === "select";
    };
    UserComponent.prototype.status_vn = function (value) {
        return value ? "Đang hoạt động" : "Dừng hoạt động";
    };
    UserComponent.prototype.getUserList = function (filter, currentPage, sizePage) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.currentPage = currentPage;
                        this.spinnerService.show();
                        return [4 /*yield*/, this.userService.getUserList(filter, currentPage, sizePage).then(function (data) {
                                _this.totalItems = data.total;
                                _this.userList = data.data;
                            })
                                .catch(function (err) {
                                _this.currentPage = 1;
                            })];
                    case 1:
                        _a.sent();
                        this.spinnerService.hide();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserComponent.prototype.updateUserInfo = function () {
        var _this = this;
        this.userService.updateUserInfo(this.currentUser._id, {
            name: this.currentUser.name,
            role: this.currentUser.role,
            email: this.currentUser.email,
            phone: this.currentUser.phone
        })
            .then(function (data) {
            _this.toastrService.success("Cập nhật thông tin người dùng thành công.");
        })
            .catch(function (err) {
            _this.toastrService.warning("Cập nhật thông tin người dùng thất bại.");
        });
        this.userService.updateStatus(this.currentUser._id, {
            status: this.currentUser.status
        })
            .then(function (data) { })
            .catch(function (err) {
            _this.toastrService.warning("Cập nhật trạng thái người dùng thất bại.");
        });
    };
    UserComponent.prototype.getRoleList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.roleService.getRoles().then(function (data) {
                            _this.roleList = data.data;
                            console.log(_this.roleList);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserComponent.prototype.redirect = function () {
        this.getUserList(this.filter, this.currentPage, this.sizePage);
    };
    UserComponent.prototype.search = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.searchUsername.length == 0) {
                            this.filter.username = undefined;
                        }
                        else {
                            this.filter.username = this.searchUsername;
                        }
                        if (this.searchName.length == 0) {
                            this.filter.name = undefined;
                        }
                        else {
                            this.filter.name = this.searchName;
                        }
                        if (this.searchRole.length == 0) {
                            this.filter.role = undefined;
                        }
                        else {
                            if (this.searchRole == "all") {
                                this.filter.role = undefined;
                            }
                            else {
                                this.filter.role = this.searchRole;
                            }
                        }
                        if (this.searchStatus.length == 0) {
                            this.filter.status = undefined;
                        }
                        else {
                            if (this.searchStatus == "all") {
                                this.filter.status = undefined;
                            }
                            else {
                                this.filter.status = String(this.searchStatus);
                            }
                        }
                        this.currentPage = 1;
                        console.log("filter", this.filter);
                        return [4 /*yield*/, this.getUserList(this.filter, this.currentPage, this.sizePage)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserComponent.prototype.reset = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.filter.username = undefined;
                        this.filter.name = undefined;
                        this.filter.role = undefined;
                        this.filter.status = undefined;
                        this.searchName = this.searchUsername = this.searchRole = this.searchStatus = "";
                        this.currentPage = 1;
                        return [4 /*yield*/, this.getUserList(this.filter, this.currentPage, this.sizePage)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserComponent.prototype.checkEditUserPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            var nameRole, actionName;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nameRole = "";
                        actionName = [];
                        return [4 /*yield*/, this.profileService.getProfile().then(function (data) {
                                nameRole = data.role.name;
                                actionName = data.role.action_permission;
                                if (nameRole == "Admin") {
                                    _this.isHavingEditUserPermission = true;
                                    ;
                                }
                                else {
                                    var check = [];
                                    actionName.forEach(function (e) {
                                        check.push(e.name);
                                    });
                                    if (actionName.includes("Tạo mới người dùng")) {
                                        _this.isHavingEditUserPermission = true;
                                    }
                                    else {
                                        _this.isHavingEditUserPermission = false;
                                    }
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserComponent.prototype.log = function (value, modal) {
        if (value[modal.key]) {
            console.log(value[modal.key].name);
        }
        console.log(modal);
    };
    UserComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] },
        { type: src_app_services_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"] },
        { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
    ]; };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __importDefault(__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user/user.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./user.component.css */ "./src/app/pages/user/user.component.css")).default]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            src_app_services_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"],
            src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], UserComponent);
    return UserComponent;
}());

var STATUS = [
    { value: 1, name: "Đang hoạt động" },
    { value: 0, name: "Dừng hoạt động" },
];
var KEY_DATA = [
    {
        key: "username",
        type: "string",
    },
    {
        key: "name",
        type: "string",
    },
    {
        key: "role",
        type: "string",
    },
    {
        key: "status",
        type: "boolean",
    },
    {
        key: "email",
        type: "string",
    },
    {
        key: "phone",
        type: "string"
    }
];
var FIELDS = [
    {
        label: "Tên đăng nhập",
        name: "username",
    },
    {
        label: "Họ và tên",
        name: "name",
    },
    {
        label: "Vai trò",
        name: "role",
    },
    {
        label: "Trạng thái",
        name: "status"
    },
    {
        label: "Email",
        name: "email"
    },
    {
        label: "Điện thoại",
        name: "phone"
    }
];
var MODALS = [
    {
        label: "Tên đăng nhập",
        fin: "username",
        key: "username",
        type: "input",
        readonly: true,
    },
    {
        label: "Họ và tên",
        fin: "name",
        key: "name",
        type: "input",
    },
    {
        label: "Vai trò",
        fin: "role",
        key: "role",
        type: "select",
    },
    {
        label: "email",
        fin: "email",
        key: "email",
        type: "input",
    },
    {
        label: "Điện thoại",
        fin: "phone",
        key: "phone",
        type: "input",
    },
    {
        label: "Trạng thái",
        fin: "status",
        key: "status",
        type: "select"
    }
];


/***/ }),

/***/ "./src/app/services/actionlog.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/actionlog.service.ts ***!
  \***********************************************/
/*! exports provided: ActionlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionlogService", function() { return ActionlogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/services/base.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var ActionlogService = /** @class */ (function (_super) {
    __extends(ActionlogService, _super);
    function ActionlogService(httpClient) {
        var _this = _super.call(this, httpClient) || this;
        _this.httpClient = httpClient;
        return _this;
    }
    ActionlogService.prototype.getActionLogList = function (filter, page, size) {
        var _this = this;
        filter = JSON.stringify(filter);
        filter = btoa(unescape(encodeURIComponent(filter)));
        return new Promise(function (resolve, reject) {
            _this.httpClient.get(_this.API_URL + ("/api/actionLog?filter=" + filter + "&page=" + page + "&size=" + size), _this.getOptions()).
                subscribe(function (res) {
                resolve(res.responseData);
            }, function (err) {
                reject(err);
            });
        });
    };
    ActionlogService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ActionlogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ActionlogService);
    return ActionlogService;
}(_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));



/***/ }),

/***/ "./src/app/services/location.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/location.service.ts ***!
  \**********************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/services/base.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var LocationService = /** @class */ (function (_super) {
    __extends(LocationService, _super);
    function LocationService(httpClient) {
        var _this = _super.call(this, httpClient) || this;
        _this.httpClient = httpClient;
        return _this;
    }
    LocationService.prototype.getLocationList = function (filter, page, size) {
        var _this = this;
        filter = JSON.stringify(filter);
        filter = btoa(unescape(encodeURIComponent(filter)));
        return new Promise(function (resolve, reject) {
            _this.httpClient.get(_this.API_URL + ("/api/location?filter=" + filter + "&page=" + page + "&size=" + size), _this.getOptions()).
                subscribe(function (res) {
                resolve(res.responseData);
            }, function (err) {
                reject(err);
            });
        });
    };
    LocationService.prototype.getLocationListNoFilter = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient.get(_this.API_URL + "/api/location", _this.getOptions()).
                subscribe(function (res) {
                console.log(res.responseData);
                resolve(res.responseData);
            }, function (err) {
                reject(err);
            });
        });
    };
    LocationService.prototype.createLocation = function (location) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient.post(_this.API_URL + '/api/location', location, _this.getOptions())
                .subscribe(function (res) {
                resolve(true);
            }, function (err) {
                reject(err);
            });
        });
    };
    LocationService.prototype.getProvinceList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient.get(_this.API_URL + '/api/province', _this.getOptions())
                .subscribe(function (res) {
                resolve(res.responseData);
            }, function (err) {
                reject(err);
            });
        });
    };
    LocationService.prototype.getDistrictList = function (filter) {
        var _this = this;
        filter = JSON.stringify(filter);
        filter = btoa(unescape(encodeURIComponent(filter)));
        return new Promise(function (resolve, reject) {
            _this.httpClient.get(_this.API_URL + ("/api/district?filter=" + filter), _this.getOptions())
                .subscribe(function (res) {
                resolve(res.responseData);
            }, function (err) {
                reject(err);
            });
        });
    };
    LocationService.prototype.getSubDistrictList = function (filter) {
        var _this = this;
        filter = JSON.stringify(filter);
        filter = btoa(unescape(encodeURIComponent(filter)));
        return new Promise(function (resolve, reject) {
            _this.httpClient.get(_this.API_URL + ("/api/subdistrict?filter=" + filter), _this.getOptions())
                .subscribe(function (res) {
                resolve(res.responseData);
            }, function (err) {
                reject(err);
            });
        });
    };
    LocationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    LocationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LocationService);
    return LocationService;
}(_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));



/***/ })

}]);
//# sourceMappingURL=layouts-admin-layout-admin-layout-module.js.map
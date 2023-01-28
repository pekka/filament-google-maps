(()=>{"use strict";var t={63:t=>{t.exports=function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){if(e.constructor!==r.constructor)return!1;var o,s,n;if(Array.isArray(e)){if((o=e.length)!=r.length)return!1;for(s=o;0!=s--;)if(!t(e[s],r[s]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if((o=(n=Object.keys(e)).length)!==Object.keys(r).length)return!1;for(s=o;0!=s--;)if(!Object.prototype.hasOwnProperty.call(r,n[s]))return!1;for(s=o;0!=s--;){var i=n[s];if(!t(e[i],r[i]))return!1}return!0}return e!=e&&r!=r}}},e={};function r(o){var s=e[o];if(void 0!==s)return s.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,r),n.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=r(63),e=r.n(t);function o(t,e,r,n,i,a){if(i-n<=r)return;const c=n+i>>1;s(t,e,c,n,i,a%2),o(t,e,r,n,c-1,a+1),o(t,e,r,c+1,i,a+1)}function s(t,e,r,o,i,a){for(;i>o;){if(i-o>600){const n=i-o+1,c=r-o+1,l=Math.log(n),u=.5*Math.exp(2*l/3),h=.5*Math.sqrt(l*u*(n-u)/n)*(c-n/2<0?-1:1);s(t,e,r,Math.max(o,Math.floor(r-c*u/n+h)),Math.min(i,Math.floor(r+(n-c)*u/n+h)),a)}const c=e[2*r+a];let l=o,u=i;for(n(t,e,o,r),e[2*i+a]>c&&n(t,e,o,i);l<u;){for(n(t,e,l,u),l++,u--;e[2*l+a]<c;)l++;for(;e[2*u+a]>c;)u--}e[2*o+a]===c?n(t,e,o,u):(u++,n(t,e,u,i)),u<=r&&(o=u+1),r<=u&&(i=u-1)}}function n(t,e,r,o){i(t,r,o),i(e,2*r,2*o),i(e,2*r+1,2*o+1)}function i(t,e,r){const o=t[e];t[e]=t[r],t[r]=o}function a(t,e,r,o){const s=t-r,n=e-o;return s*s+n*n}const c=t=>t[0],l=t=>t[1];class u{constructor(t,e=c,r=l,s=64,n=Float64Array){this.nodeSize=s,this.points=t;const i=t.length<65536?Uint16Array:Uint32Array,a=this.ids=new i(t.length),u=this.coords=new n(2*t.length);for(let o=0;o<t.length;o++)a[o]=o,u[2*o]=e(t[o]),u[2*o+1]=r(t[o]);o(a,u,s,0,a.length-1,0)}range(t,e,r,o){return function(t,e,r,o,s,n,i){const a=[0,t.length-1,0],c=[];let l,u;for(;a.length;){const h=a.pop(),p=a.pop(),m=a.pop();if(p-m<=i){for(let i=m;i<=p;i++)l=e[2*i],u=e[2*i+1],l>=r&&l<=s&&u>=o&&u<=n&&c.push(t[i]);continue}const g=Math.floor((m+p)/2);l=e[2*g],u=e[2*g+1],l>=r&&l<=s&&u>=o&&u<=n&&c.push(t[g]);const f=(h+1)%2;(0===h?r<=l:o<=u)&&(a.push(m),a.push(g-1),a.push(f)),(0===h?s>=l:n>=u)&&(a.push(g+1),a.push(p),a.push(f))}return c}(this.ids,this.coords,t,e,r,o,this.nodeSize)}within(t,e,r){return function(t,e,r,o,s,n){const i=[0,t.length-1,0],c=[],l=s*s;for(;i.length;){const u=i.pop(),h=i.pop(),p=i.pop();if(h-p<=n){for(let s=p;s<=h;s++)a(e[2*s],e[2*s+1],r,o)<=l&&c.push(t[s]);continue}const m=Math.floor((p+h)/2),g=e[2*m],f=e[2*m+1];a(g,f,r,o)<=l&&c.push(t[m]);const d=(u+1)%2;(0===u?r-s<=g:o-s<=f)&&(i.push(p),i.push(m-1),i.push(d)),(0===u?r+s>=g:o+s>=f)&&(i.push(m+1),i.push(h),i.push(d))}return c}(this.ids,this.coords,t,e,r,this.nodeSize)}}const h={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:t=>t},p=Math.fround||(m=new Float32Array(1),t=>(m[0]=+t,m[0]));var m;class g{constructor(t){this.options=x(Object.create(h),t),this.trees=new Array(this.options.maxZoom+1)}load(t){const{log:e,minZoom:r,maxZoom:o,nodeSize:s}=this.options;e&&console.time("total time");const n=`prepare ${t.length} points`;e&&console.time(n),this.points=t;let i=[];for(let e=0;e<t.length;e++)t[e].geometry&&i.push(d(t[e],e));this.trees[o+1]=new u(i,v,O,s,Float32Array),e&&console.timeEnd(n);for(let t=o;t>=r;t--){const r=+Date.now();i=this._cluster(i,t),this.trees[t]=new u(i,v,O,s,Float32Array),e&&console.log("z%d: %d clusters in %dms",t,i.length,+Date.now()-r)}return e&&console.timeEnd("total time"),this}getClusters(t,e){let r=((t[0]+180)%360+360)%360-180;const o=Math.max(-90,Math.min(90,t[1]));let s=180===t[2]?180:((t[2]+180)%360+360)%360-180;const n=Math.max(-90,Math.min(90,t[3]));if(t[2]-t[0]>=360)r=-180,s=180;else if(r>s){const t=this.getClusters([r,o,180,n],e),i=this.getClusters([-180,o,s,n],e);return t.concat(i)}const i=this.trees[this._limitZoom(e)],a=i.range(w(r),M(n),w(s),M(o)),c=[];for(const t of a){const e=i.points[t];c.push(e.numPoints?y(e):this.points[e.index])}return c}getChildren(t){const e=this._getOriginId(t),r=this._getOriginZoom(t),o="No cluster with the specified id.",s=this.trees[r];if(!s)throw new Error(o);const n=s.points[e];if(!n)throw new Error(o);const i=this.options.radius/(this.options.extent*Math.pow(2,r-1)),a=s.within(n.x,n.y,i),c=[];for(const e of a){const r=s.points[e];r.parentId===t&&c.push(r.numPoints?y(r):this.points[r.index])}if(0===c.length)throw new Error(o);return c}getLeaves(t,e,r){e=e||10,r=r||0;const o=[];return this._appendLeaves(o,t,e,r,0),o}getTile(t,e,r){const o=this.trees[this._limitZoom(t)],s=Math.pow(2,t),{extent:n,radius:i}=this.options,a=i/n,c=(r-a)/s,l=(r+1+a)/s,u={features:[]};return this._addTileFeatures(o.range((e-a)/s,c,(e+1+a)/s,l),o.points,e,r,s,u),0===e&&this._addTileFeatures(o.range(1-a/s,c,1,l),o.points,s,r,s,u),e===s-1&&this._addTileFeatures(o.range(0,c,a/s,l),o.points,-1,r,s,u),u.features.length?u:null}getClusterExpansionZoom(t){let e=this._getOriginZoom(t)-1;for(;e<=this.options.maxZoom;){const r=this.getChildren(t);if(e++,1!==r.length)break;t=r[0].properties.cluster_id}return e}_appendLeaves(t,e,r,o,s){const n=this.getChildren(e);for(const e of n){const n=e.properties;if(n&&n.cluster?s+n.point_count<=o?s+=n.point_count:s=this._appendLeaves(t,n.cluster_id,r,o,s):s<o?s++:t.push(e),t.length===r)break}return s}_addTileFeatures(t,e,r,o,s,n){for(const i of t){const t=e[i],a=t.numPoints;let c,l,u;if(a)c=k(t),l=t.x,u=t.y;else{const e=this.points[t.index];c=e.properties,l=w(e.geometry.coordinates[0]),u=M(e.geometry.coordinates[1])}const h={type:1,geometry:[[Math.round(this.options.extent*(l*s-r)),Math.round(this.options.extent*(u*s-o))]],tags:c};let p;a?p=t.id:this.options.generateId?p=t.index:this.points[t.index].id&&(p=this.points[t.index].id),void 0!==p&&(h.id=p),n.features.push(h)}}_limitZoom(t){return Math.max(this.options.minZoom,Math.min(Math.floor(+t),this.options.maxZoom+1))}_cluster(t,e){const r=[],{radius:o,extent:s,reduce:n,minPoints:i}=this.options,a=o/(s*Math.pow(2,e));for(let o=0;o<t.length;o++){const s=t[o];if(s.zoom<=e)continue;s.zoom=e;const c=this.trees[e+1],l=c.within(s.x,s.y,a),u=s.numPoints||1;let h=u;for(const t of l){const r=c.points[t];r.zoom>e&&(h+=r.numPoints||1)}if(h>u&&h>=i){let t=s.x*u,i=s.y*u,a=n&&u>1?this._map(s,!0):null;const p=(o<<5)+(e+1)+this.points.length;for(const r of l){const o=c.points[r];if(o.zoom<=e)continue;o.zoom=e;const l=o.numPoints||1;t+=o.x*l,i+=o.y*l,o.parentId=p,n&&(a||(a=this._map(s,!0)),n(a,this._map(o)))}s.parentId=p,r.push(f(t/h,i/h,p,h,a))}else if(r.push(s),h>1)for(const t of l){const o=c.points[t];o.zoom<=e||(o.zoom=e,r.push(o))}}return r}_getOriginId(t){return t-this.points.length>>5}_getOriginZoom(t){return(t-this.points.length)%32}_map(t,e){if(t.numPoints)return e?x({},t.properties):t.properties;const r=this.points[t.index].properties,o=this.options.map(r);return e&&o===r?x({},o):o}}function f(t,e,r,o,s){return{x:p(t),y:p(e),zoom:1/0,id:r,parentId:-1,numPoints:o,properties:s}}function d(t,e){const[r,o]=t.geometry.coordinates;return{x:p(w(r)),y:p(M(o)),zoom:1/0,index:e,parentId:-1}}function y(t){return{type:"Feature",id:t.id,properties:k(t),geometry:{type:"Point",coordinates:[(e=t.x,360*(e-.5)),b(t.y)]}};var e}function k(t){const e=t.numPoints,r=e>=1e4?`${Math.round(e/1e3)}k`:e>=1e3?Math.round(e/100)/10+"k":e;return x(x({},t.properties),{cluster:!0,cluster_id:t.id,point_count:e,point_count_abbreviated:r})}function w(t){return t/360+.5}function M(t){const e=Math.sin(t*Math.PI/180),r=.5-.25*Math.log((1+e)/(1-e))/Math.PI;return r<0?0:r>1?1:r}function b(t){const e=(180-360*t)*Math.PI/180;return 360*Math.atan(Math.exp(e))/Math.PI-90}function x(t,e){for(const r in e)t[r]=e[r];return t}function v(t){return t.x}function O(t){return t.y}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function C(t,e){var r={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(r[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(t);s<o.length;s++)e.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(t,o[s])&&(r[o[s]]=t[o[s]])}return r}class P{constructor({markers:t,position:e}){this.markers=t,e&&(e instanceof google.maps.LatLng?this._position=e:this._position=new google.maps.LatLng(e))}get bounds(){if(0!==this.markers.length||this._position)return this.markers.reduce(((t,e)=>t.extend(e.getPosition())),new google.maps.LatLngBounds(this._position,this._position))}get position(){return this._position||this.bounds.getCenter()}get count(){return this.markers.filter((t=>t.getVisible())).length}push(t){this.markers.push(t)}delete(){this.marker&&(this.marker.setMap(null),delete this.marker),this.markers.length=0}}class _{constructor({maxZoom:t=16}){this.maxZoom=t}noop({markers:t}){return L(t)}}const L=t=>t.map((t=>new P({position:t.getPosition(),markers:[t]})));class j extends _{constructor(t){var{maxZoom:e,radius:r=60}=t,o=C(t,["maxZoom","radius"]);super({maxZoom:e}),this.superCluster=new g(Object.assign({maxZoom:this.maxZoom,radius:r},o)),this.state={zoom:null}}calculate(t){let r=!1;if(!e()(t.markers,this.markers)){r=!0,this.markers=[...t.markers];const e=this.markers.map((t=>({type:"Feature",geometry:{type:"Point",coordinates:[t.getPosition().lng(),t.getPosition().lat()]},properties:{marker:t}})));this.superCluster.load(e)}const o={zoom:t.map.getZoom()};return r||this.state.zoom>this.maxZoom&&o.zoom>this.maxZoom||(r=r||!e()(this.state,o)),this.state=o,r&&(this.clusters=this.cluster(t)),{clusters:this.clusters,changed:r}}cluster({map:t}){return this.superCluster.getClusters([-180,-90,180,90],Math.round(t.getZoom())).map(this.transformCluster.bind(this))}transformCluster({geometry:{coordinates:[t,e]},properties:r}){if(r.cluster)return new P({markers:this.superCluster.getLeaves(r.cluster_id,1/0).map((t=>t.properties.marker)),position:new google.maps.LatLng({lat:e,lng:t})});{const t=r.marker;return new P({markers:[t],position:t.getPosition()})}}}class E{constructor(t,e){this.markers={sum:t.length};const r=e.map((t=>t.count)),o=r.reduce(((t,e)=>t+e),0);this.clusters={count:e.length,markers:{mean:o/e.length,sum:o,min:Math.min(...r),max:Math.max(...r)}}}}class S{render({count:t,position:e},r){const o=t>Math.max(10,r.clusters.markers.mean)?"#ff0000":"#0000ff",s=window.btoa(`\n  <svg fill="${o}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">\n    <circle cx="120" cy="120" opacity=".6" r="70" />\n    <circle cx="120" cy="120" opacity=".3" r="90" />\n    <circle cx="120" cy="120" opacity=".2" r="110" />\n  </svg>`);return new google.maps.Marker({position:e,icon:{url:`data:image/svg+xml;base64,${s}`,scaledSize:new google.maps.Size(45,45)},label:{text:String(t),color:"rgba(255,255,255,0.9)",fontSize:"12px"},title:`Cluster of ${t} markers`,zIndex:Number(google.maps.Marker.MAX_ZINDEX)+t})}}class z{constructor(){!function(t,e){for(let r in e.prototype)t.prototype[r]=e.prototype[r]}(z,google.maps.OverlayView)}}var I;!function(t){t.CLUSTERING_BEGIN="clusteringbegin",t.CLUSTERING_END="clusteringend",t.CLUSTER_CLICK="click"}(I||(I={}));const Z=(t,e,r)=>{r.fitBounds(e.bounds)};class A extends z{constructor({map:t,markers:e=[],algorithm:r=new j({}),renderer:o=new S,onClusterClick:s=Z}){super(),this.markers=[...e],this.clusters=[],this.algorithm=r,this.renderer=o,this.onClusterClick=s,t&&this.setMap(t)}addMarker(t,e){this.markers.includes(t)||(this.markers.push(t),e||this.render())}addMarkers(t,e){t.forEach((t=>{this.addMarker(t,!0)})),e||this.render()}removeMarker(t,e){const r=this.markers.indexOf(t);return-1!==r&&(t.setMap(null),this.markers.splice(r,1),e||this.render(),!0)}removeMarkers(t,e){let r=!1;return t.forEach((t=>{r=this.removeMarker(t,!0)||r})),r&&!e&&this.render(),r}clearMarkers(t){this.markers.length=0,t||this.render()}render(){const t=this.getMap();if(t instanceof google.maps.Map&&this.getProjection()){google.maps.event.trigger(this,I.CLUSTERING_BEGIN,this);const{clusters:e,changed:r}=this.algorithm.calculate({markers:this.markers,map:t,mapCanvasProjection:this.getProjection()});(r||null==r)&&(this.reset(),this.clusters=e,this.renderClusters()),google.maps.event.trigger(this,I.CLUSTERING_END,this)}}onAdd(){this.idleListener=this.getMap().addListener("idle",this.render.bind(this)),this.render()}onRemove(){google.maps.event.removeListener(this.idleListener),this.reset()}reset(){this.markers.forEach((t=>t.setMap(null))),this.clusters.forEach((t=>t.delete())),this.clusters=[]}renderClusters(){const t=new E(this.markers,this.clusters),e=this.getMap();this.clusters.forEach((r=>{1===r.markers.length?r.marker=r.markers[0]:(r.marker=this.renderer.render(r,t),this.onClusterClick&&r.marker.addListener("click",(t=>{google.maps.event.trigger(this,I.CLUSTER_CLICK,r),this.onClusterClick(t,r,e)}))),r.marker.setMap(e)}))}}function G(t){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(t)}function T(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function N(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?T(Object(r),!0).forEach((function(e){B(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function B(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}window.filamentGoogleMapsWidget=function(t,e){return{map:null,bounds:null,infoWindow:null,mapEl:null,data:null,markers:[],layers:[],clusterer:null,config:{center:{lat:0,lng:0},clustering:!1,controls:{mapTypeControl:!0,scaleControl:!0,streetViewControl:!0,rotateControl:!0,fullscreenControl:!0,searchBoxControl:!1,zoomControl:!1},fit:!0,gmaps:"",layers:[],zoom:12},loadGMaps:function(){if(document.getElementById("filament-google-maps-google-maps-js")){!function t(e,r){window[e]?r():setTimeout((function(){t(e,r)}),100)}("filamentGoogleMapsAPILoaded",function(){this.createMap()}.bind(this))}else{var t=document.createElement("script");t.id="filament-google-maps-google-maps-js",window.filamentGoogleMapsAsyncLoad=this.createMap.bind(this),t.src=this.config.gmaps+"&callback=filamentGoogleMapsAsyncLoad",document.head.appendChild(t)}},init:function(t,r){this.mapEl=document.getElementById(r)||r,this.data=t,this.config=N(N({},this.config),e),this.loadGMaps()},createMap:function(){window.filamentGoogleMapsAPILoaded=!0,this.infoWindow=new google.maps.InfoWindow({content:"",disableAutoPan:!0}),this.map=new google.maps.Map(this.mapEl,N({center:this.config.center,zoom:this.config.zoom},this.config.controls)),this.bounds=new google.maps.LatLngBounds,this.createMarkers(),this.createClustering(),this.createLayers(),this.show()},show:function(){this.config.fit?this.map.fitBounds(this.bounds):this.markers.length>0&&this.map.setCenter(this.markers[0].getPosition())},createLayers:function(){var t=this;this.layers=this.config.layers.map((function(e){return new google.maps.KmlLayer({url:e,map:t.map})}))},createMarkers:function(){var t=this;this.markers=this.data.map((function(e){var r;e.icon&&"object"===G(e.icon)&&e.icon.hasOwnProperty("url")&&(r={url:e.icon.url},e.icon.hasOwnProperty("type")&&"svg"===e.icon.type&&e.icon.hasOwnProperty("scale")&&(r.scaledSize=new google.maps.Size(e.icon.scale[0],e.icon.scale[1])));var o=e.location,s=e.label,n=new google.maps.Marker(N({position:o,map:t.map,title:s},r&&{icon:r}));return t.bounds.extend(o),n.addListener("click",(function(){t.infoWindow.setContent(s),t.infoWindow.open(t.map,n)})),n}))},removeMarkers:function(){for(var t=0;t<this.markers.length;t++)this.markers[t].setMap(null);this.markers=[]},createClustering:function(){this.config.clustering&&(this.clusterer=new A({map:this.map,markers:this.markers}))},updateClustering:function(){this.config.clustering&&(this.clusterer.clearMarkers(),this.clusterer.addMarkers(this.markers))},update:function(t){this.data=t,this.removeMarkers(),this.createMarkers(),this.updateClustering(),this.show()}}}})()})();
//# sourceMappingURL=filament-google-maps-widget.js.map
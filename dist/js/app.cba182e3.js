(function(t){function e(e){for(var s,i,r=e[0],o=e[1],c=e[2],m=0,h=[];m<r.length;m++)i=r[m],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&h.push(n[i][0]),n[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);d&&d(e);while(h.length)h.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],s=!0,r=1;r<a.length;r++){var o=a[r];0!==n[o]&&(s=!1)}s&&(l.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},l=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=o;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1833:function(t,e,a){},1844:function(t,e,a){},"1f2d":function(t,e,a){"use strict";var s=a("d3e6"),n=a.n(s);n.a},"1ffe":function(t,e,a){"use strict";var s=a("1833"),n=a.n(s);n.a},2187:function(t,e,a){"use strict";var s=a("590a"),n=a.n(s);n.a},"286f":function(t,e,a){"use strict";var s=a("c2ee"),n=a.n(s);n.a},"2c9e":function(t,e,a){},"35d7":function(t,e,a){},"385a":function(t,e,a){"use strict";var s=a("2c9e"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:""}},[a("v-list-item",{attrs:{to:"/roll/platonic"}},[a("v-list-item-action",[a("v-icon",[t._v("mdi-home")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Home")])],1)],1),a("v-list-item",{attrs:{to:"/learn/about"}},[a("v-list-item-action",[a("v-icon",[t._v("mdi-library-books")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("Learn")])],1)],1),a("v-list-item",[a("v-switch",{attrs:{"hide-details":"",inset:"",label:"Dark Mode"},on:{change:t.update},model:{value:t.isDark,callback:function(e){t.isDark=e},expression:"isDark"}})],1)],1)],1),a("v-app-bar",{attrs:{app:"",color:"indigo",dark:"","hide-on-scroll":""},scopedSlots:t._u([{key:"extension",fn:function(){return[a("router-view",{attrs:{name:"tabs"}})]},proxy:!0}])},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-toolbar-title",[t._v("Rollhedra")]),a("v-spacer")],1),a("router-view"),a("v-footer",{attrs:{color:"indigo",app:""}},[a("span",{staticClass:"white--text"},[t._v(" © "),a("v-icon",{attrs:{color:"white"}},[t._v("mdi-dice-d20")]),a("v-icon",{staticClass:"ml-n1",attrs:{color:"white"}},[t._v("mdi-dice-d20")])],1),a("span",{staticClass:"white--text"},[a("p",{staticClass:"ml-1 my-2 body-1"},[t._v("Sirfredrick")])])])],1)},l=[],i=(a("b0c0"),{props:{source:String},data:function(){return{drawer:!1,isDark:!1}},methods:{update:function(){this.$vuetify.theme.dark=this.isDark,localStorage.setItem("isDark",JSON.stringify(this.isDark))}},mounted:function(){localStorage.getItem("isDark")&&(this.isDark=JSON.parse(localStorage.getItem("isDark")),this.$vuetify.theme.dark=this.isDark),localStorage.setItem("isDark",JSON.stringify(this.isDark))},computed:{currentRouteName:function(){return this.$route.name}}}),r=i,o=a("2877"),c=a("6544"),d=a.n(c),m=a("7496"),h=a("40dc"),u=a("5bc1"),v=a("553a"),p=a("132d"),f=a("8860"),g=a("da13"),y=a("1800"),w=a("5d23"),x=a("f774"),b=a("2fa4"),_=a("b73d"),C=a("2a7f"),k=Object(o["a"])(r,n,l,!1,null,null,null),z=k.exports;d()(k,{VApp:m["a"],VAppBar:h["a"],VAppBarNavIcon:u["a"],VFooter:v["a"],VIcon:p["a"],VList:f["a"],VListItem:g["a"],VListItemAction:y["a"],VListItemContent:w["a"],VListItemTitle:w["b"],VNavigationDrawer:x["a"],VSpacer:b["a"],VSwitch:_["a"],VToolbarTitle:C["a"]});var V=a("f309"),S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticClass:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M4.421 3h15.158A1.418 1.418 0 0121 4.421v15.158c0 .787-.634 1.421-1.421 1.421H4.421A1.418 1.418 0 013 19.579V4.421C3 3.634 3.634 3 4.421 3zm9.624 5.359c-.484 0-.916.104-1.298.31a2.209 2.209 0 00-.888.85 2.37 2.37 0 00-.31 1.198h1.43c0-.362.092-.653.276-.873.188-.224.443-.335.765-.335.3 0 .53.091.691.276.161.18.242.43.242.75 0 .233-.077.48-.232.74-.151.26-.387.564-.705.913l-2.324 2.477v.977h4.924v-1.15h-3.089l1.633-1.722c.447-.49.763-.92.947-1.288.185-.368.277-.73.277-1.085 0-.648-.206-1.15-.617-1.505-.408-.356-.982-.533-1.722-.533zm-3.684.089L7.386 9.513v1.16l1.702-.528v5.497h1.426V8.448h-.153z"}})])},O=[],M={name:"c12a"},I=M,j=(a("6136"),Object(o["a"])(I,S,O,!1,null,null,null)),$=j.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticClass:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12.797 2.342l8.856 8.8c.46.458.463 1.197.005 1.655l-8.8 8.856a1.167 1.167 0 01-1.654.006l-8.857-8.8a1.167 1.167 0 01-.005-1.656l8.8-8.856a1.167 1.167 0 011.655-.006zm1.02 6.055c-.478 0-.907.103-1.285.309-.377.201-.67.482-.878.839a2.345 2.344 0 00-.308 1.187h1.417c0-.358.09-.647.273-.865.185-.222.437-.332.755-.332.297 0 .524.091.685.273.16.18.239.427.239.742 0 .232-.076.476-.23.734a5.545 5.544 0 01-.698.902l-2.3 2.45v.968h4.873v-1.137h-3.056l1.616-1.704c.443-.486.756-.91.938-1.275.182-.364.274-.722.274-1.074 0-.64-.205-1.138-.611-1.489-.405-.352-.971-.528-1.704-.528zm-3.234.09L7.639 9.54v1.147l1.685-.523v5.438h1.412V8.485z"}})])},D=[],A={name:"c12b"},T=A,R=(a("2187"),Object(o["a"])(T,P,D,!1,null,null,null)),N=R.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticClass:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M12.645 2.269l9.087 9.086a.911.911 0 010 1.29l-9.086 9.087a.911.911 0 01-1.29 0l-9.088-9.087a.911.911 0 010-1.291l9.087-9.086a.911.911 0 011.29 0zM9.366 8.526a2.556 2.555 0 00-1.238.3 2.105 2.104 0 00-.846.807 2.26 2.26 0 00-.298 1.144H8.35c0-.347.085-.624.262-.833a.906.905 0 01.73-.322c.287 0 .504.09.659.265.153.172.233.411.233.716a1.382 1.382 0 01-.222.707 5.338 5.337 0 01-.674.868l-2.216 2.367v.93h4.699V14.38H8.873l1.558-1.647c.428-.468.728-.878.902-1.228a2.28 2.28 0 00.266-1.036c0-.617-.195-1.097-.587-1.436-.389-.34-.939-.508-1.645-.508zm5.5.096l-2.86 4.513.06.857h2.81v1.485h1.362v-1.485h.778v-1.097h-.78V8.622zm.012 1.855v2.418h-1.513l1.423-2.264z"}})])},B=[],J={name:"c24a"},H=J,L=(a("6e7a"),Object(o["a"])(H,E,B,!1,null,null,null)),F=L.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticClass:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",height:"24",width:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M21 4.221l-.102 15.674A1.11 1.11 0 0119.778 21l-15.673-.102A1.11 1.11 0 013 19.778l.102-15.673A1.11 1.11 0 014.222 3l15.673.102A1.11 1.11 0 0121 4.222z M9.68 8.873c-.416 0-.786.09-1.114.268a1.898 1.898 0 00-.763.728c-.178.31-.268.654-.268 1.03h1.23c0-.311.079-.561.237-.75.161-.193.38-.29.656-.29.257 0 .456.08.594.239.138.155.207.37.207.644 0 .2-.066.412-.2.635-.13.223-.33.484-.605.783l-1.996 2.13v.837h4.23v-.986H9.235l1.405-1.48c.384-.422.654-.79.812-1.106.158-.317.238-.627.238-.932 0-.556-.178-.988-.53-1.293-.351-.305-.844-.457-1.48-.457zm4.847.084l-2.572 4.064.055.772h2.531v1.334h1.225v-1.334h.699v-.988h-.7V8.957h-1.238zm.014 1.67v2.178h-1.365l1.283-2.037.082-.141z"}})])},G=[],U={name:"c24b"},W=U,Y=(a("d3f7"),Object(o["a"])(W,q,G,!1,null,null,null)),K=Y.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticClass:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",height:"24",width:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M18.117 18.61L11.651 21 5.39 18.117 3 11.651 5.883 5.39 12.349 3l6.262 2.883L21 12.349z M9.748 9.057c-.405 0-.766.084-1.086.252a1.818 1.818 0 00-1.004 1.654h1.2c0-.293.076-.527.23-.705.157-.181.37-.272.64-.272.251 0 .444.074.579.223.135.146.203.35.203.607 0 .19-.066.388-.196.598-.126.21-.322.457-.59.738L7.78 14.154v.79H11.9v-.93H9.314l1.368-1.391c.374-.396.64-.743.795-1.041.154-.298.23-.592.23-.879 0-.524-.171-.928-.516-1.215-.341-.287-.823-.431-1.443-.431zm4.705.08l-2.508 3.824.055.726h2.467v1.256h1.193v-1.255h.682v-.93h-.682V9.137h-1.207zm.014 1.57v2.05h-1.332l1.252-1.917.08-.133z"}})])},X=[],Z={name:"c24c"},tt=Z,et=(a("385a"),Object(o["a"])(tt,Q,X,!1,null,null,null)),at=et.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticClass:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",height:"24",width:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M21 12a9 9 0 01-9 9 9 9 0 01-9-9 9 9 0 019-9 9 9 0 019 9z"}}),a("path",{attrs:{d:"M9.88 8.75c-.382 0-.724.082-1.026.246a1.748 1.748 0 00-.704.672 1.876 1.876 0 00-.246.95h1.133c0-.287.073-.518.219-.692a.748.748 0 01.605-.266c.237 0 .42.073.547.219.128.143.192.341.192.594 0 .185-.062.38-.184.586-.12.205-.306.446-.559.722l-1.84 1.961v.774h3.899v-.91H9.471l1.293-1.364c.354-.388.604-.728.75-1.02.146-.291.218-.577.218-.859 0-.513-.162-.91-.488-1.191-.323-.281-.777-.422-1.363-.422zm4.43.078l-2.37 3.746.05.711h2.332v1.23h1.13v-1.23h.644v-.91h-.645V8.828h-1.14zm.012 1.54v2.007h-1.258l1.184-1.879.074-.129z",fill:"#fff"}})])},nt=[],lt={name:"c48"},it=lt,rt=(a("1f2d"),Object(o["a"])(it,st,nt,!1,null,null,null)),ot=rt.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticClass:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",height:"24",width:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M21 12a9 9 0 01-9 9 9 9 0 01-9-9 9 9 0 019-9 9 9 0 019 9z M9.814 8.75c-.346 0-.664.066-.953.2a1.61 1.61 0 00-.672.554c-.158.234-.238.5-.238.797h1.13c0-.19.072-.344.218-.461a.827.827 0 01.543-.18c.24 0 .427.064.562.192.138.127.207.306.207.535 0 .237-.069.427-.207.57-.138.143-.35.215-.636.215h-.602v.883h.598c.625 0 .937.284.937.851a.738.738 0 01-.23.567c-.151.14-.361.21-.63.21a.893.893 0 01-.593-.203.656.656 0 01-.238-.523H7.88c0 .492.18.888.54 1.188.362.299.827.449 1.394.449.607 0 1.094-.153 1.461-.457.37-.305.555-.71.555-1.215 0-.313-.08-.583-.238-.813-.156-.229-.395-.4-.715-.515.258-.117.466-.285.625-.504.159-.219.238-.458.238-.719 0-.505-.17-.9-.511-1.187-.342-.29-.813-.434-1.415-.434zm4.2 0c-.62 0-1.095.206-1.426.617-.328.412-.492 1.015-.492 1.809v1.047c.008.763.175 1.349.504 1.757.328.41.802.614 1.421.614.628 0 1.105-.209 1.43-.625.326-.417.488-1.018.488-1.805v-1.047c-.007-.763-.175-1.347-.503-1.754-.329-.409-.803-.613-1.422-.613zm0 .914c.273 0 .474.108.601.324.13.214.196.556.196 1.028v1.351c-.006.445-.07.776-.192.992-.122.217-.321.325-.598.325-.278 0-.481-.112-.609-.336-.125-.227-.187-.572-.187-1.036V10.93c.007-.435.074-.754.199-.957.127-.206.324-.309.59-.309z"}})])},dt=[],mt={name:"c30"},ht=mt,ut=(a("286f"),Object(o["a"])(ht,ct,dt,!1,null,null,null)),vt=ut.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticClass:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",height:"24",width:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M4.421 3H19.58C20.366 3 21 3.634 21 4.421V19.58c0 .787-.634 1.421-1.421 1.421H4.42A1.418 1.418 0 013 19.579V4.42C3 3.634 3.634 3 4.421 3z M14.596 8.771c-.613 0-1.098.16-1.455.479-.357.317-.536.742-.536 1.277 0 .305.075.577.225.813.153.236.361.423.629.564a1.791 1.791 0 00-.72.606 1.563 1.563 0 00-.268.91c0 .555.191.997.574 1.322.383.325.901.487 1.555.487.653 0 1.17-.16 1.55-.483.38-.325.569-.768.569-1.326 0-.348-.09-.65-.268-.906a1.815 1.815 0 00-.724-.61c.267-.14.478-.328.63-.564.153-.236.229-.508.229-.813 0-.54-.18-.967-.54-1.28-.356-.318-.84-.476-1.45-.476zM9.9 8.857l-2.619 4.141.055.785h2.578v1.36h1.248v-1.36h.713v-1.006h-.713v-3.92H9.9zm4.696.92c.236 0 .419.075.549.225.13.147.193.341.193.586 0 .25-.064.453-.193.605-.127.153-.31.229-.545.229-.236 0-.42-.076-.55-.229-.129-.152-.193-.355-.193-.605 0-.253.064-.452.194-.596.13-.144.312-.215.545-.215zm-4.682.782v2.218h-1.39l1.308-2.076.082-.142zm4.678 1.869c.267 0 .48.082.638.246.159.164.237.383.237.656 0 .28-.077.498-.233.656-.152.159-.364.237-.634.237-.277 0-.493-.082-.649-.246-.155-.165-.232-.38-.232-.647 0-.276.08-.495.238-.656.158-.164.37-.246.635-.246z"}})])},ft=[],gt={name:"c48"},yt=gt,wt=(a("7da8"),Object(o["a"])(yt,pt,ft,!1,null,null,null)),xt=wt.exports,bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticClass:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M18.39 20.926l-6.458 2.054L5.5 20.846l-3.949-5.507.042-6.776 4.018-5.458 6.457-2.054L18.5 3.186l3.949 5.507-.042 6.776z M14.795 8.088c-.826 0-1.461.276-1.902.824-.438.549-.657 1.351-.657 2.41v1.397c.01 1.017.235 1.798.672 2.344s1.07.818 1.897.818c.837 0 1.472-.278 1.906-.834.434-.556.65-1.358.65-2.406v-1.397c-.01-1.017-.234-1.796-.671-2.338-.438-.545-1.069-.818-1.895-.818zm-4.328.027c-.767.004-1.444.178-2.027.526a3.417 3.417 0 00-1.338 1.463c-.31.628-.463 1.354-.463 2.177v.541c0 .927.245 1.67.734 2.225.493.555 1.14.834 1.938.834.493 0 .933-.112 1.322-.334.392-.222.694-.532.906-.932.216-.4.323-.847.323-1.34 0-.77-.194-1.39-.583-1.863s-.914-.709-1.574-.709c-.614 0-1.122.206-1.525.615.083-.61.33-1.09.744-1.433.417-.344.966-.521 1.647-.531h.146V8.115h-.25zm4.328 1.192c.365 0 .63.145.8.433.174.285.262.74.262 1.37v1.802c-.006.594-.092 1.034-.255 1.322-.164.289-.43.432-.797.432-.372 0-.643-.149-.813-.447-.166-.302-.25-.763-.25-1.381v-1.844c.01-.58.1-1.005.266-1.275.17-.275.433-.413.787-.413zm-5.547 2.605c.34 0 .611.126.813.38.201.253.3.586.3 1 0 .405-.099.738-.3.995a.942.942 0 01-.782.38c-.357 0-.636-.142-.834-.423-.198-.285-.297-.678-.297-1.181v-.46c.094-.208.24-.374.438-.5a1.19 1.19 0 01.662-.19z"}})])},_t=[],Ct={name:"c60a"},kt=Ct,zt=(a("88a7"),Object(o["a"])(kt,bt,_t,!1,null,null,null)),Vt=zt.exports,St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticClass:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M18.39 20.926l-6.458 2.054L5.5 20.846l-3.949-5.507.042-6.776 4.018-5.458 6.457-2.054L18.5 3.186l3.949 5.507-.042 6.776z M14.795 8.088c-.826 0-1.461.276-1.902.824-.438.549-.657 1.351-.657 2.41v1.397c.01 1.017.235 1.798.672 2.344s1.07.818 1.897.818c.837 0 1.472-.278 1.906-.834.434-.556.65-1.358.65-2.406v-1.397c-.01-1.017-.234-1.796-.671-2.338-.438-.545-1.069-.818-1.895-.818zm-4.328.027c-.767.004-1.444.178-2.027.526a3.417 3.417 0 00-1.338 1.463c-.31.628-.463 1.354-.463 2.177v.541c0 .927.245 1.67.734 2.225.493.555 1.14.834 1.938.834.493 0 .933-.112 1.322-.334.392-.222.694-.532.906-.932.216-.4.323-.847.323-1.34 0-.77-.194-1.39-.583-1.863s-.914-.709-1.574-.709c-.614 0-1.122.206-1.525.615.083-.61.33-1.09.744-1.433.417-.344.966-.521 1.647-.531h.146V8.115h-.25zm4.328 1.192c.365 0 .63.145.8.433.174.285.262.74.262 1.37v1.802c-.006.594-.092 1.034-.255 1.322-.164.289-.43.432-.797.432-.372 0-.643-.149-.813-.447-.166-.302-.25-.763-.25-1.381v-1.844c.01-.58.1-1.005.266-1.275.17-.275.433-.413.787-.413zm-5.547 2.605c.34 0 .611.126.813.38.201.253.3.586.3 1 0 .405-.099.738-.3.995a.942.942 0 01-.782.38c-.357 0-.636-.142-.834-.423-.198-.285-.297-.678-.297-1.181v-.46c.094-.208.24-.374.438-.5a1.19 1.19 0 01.662-.19z"}})])},Ot=[],Mt={name:"c60b"},It=Mt,jt=(a("1ffe"),Object(o["a"])(It,St,Ot,!1,null,null,null)),$t=jt.exports,Pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticClass:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M15.472 22.416l-6.777.054-5.514-3.939-2.145-6.428 2.042-6.46 5.45-4.028 6.777-.054 5.514 3.94 2.145 6.427-2.042 6.461z M14.795 8.088c-.826 0-1.461.276-1.902.824-.438.549-.657 1.351-.657 2.41v1.397c.01 1.017.235 1.798.672 2.344s1.07.818 1.897.818c.837 0 1.472-.278 1.906-.834.434-.556.65-1.358.65-2.406v-1.397c-.01-1.017-.234-1.796-.671-2.338-.438-.545-1.069-.818-1.895-.818zm-4.328.027c-.767.004-1.444.178-2.027.526a3.417 3.417 0 00-1.338 1.463c-.31.628-.463 1.354-.463 2.177v.541c0 .927.245 1.67.734 2.225.493.555 1.14.834 1.938.834.493 0 .933-.112 1.322-.334.392-.222.694-.532.906-.932.216-.4.323-.847.323-1.34 0-.77-.194-1.39-.583-1.863s-.914-.709-1.574-.709c-.614 0-1.122.206-1.525.615.083-.61.33-1.09.744-1.433.417-.344.966-.521 1.647-.531h.146V8.115h-.25zm4.328 1.192c.365 0 .63.145.8.433.174.285.262.74.262 1.37v1.802c-.006.594-.092 1.034-.255 1.322-.164.289-.43.432-.797.432-.372 0-.643-.149-.813-.447-.166-.302-.25-.763-.25-1.381v-1.844c.01-.58.1-1.005.266-1.275.17-.275.433-.413.787-.413zm-5.547 2.605c.34 0 .611.126.813.38.201.253.3.586.3 1 0 .405-.099.738-.3.995a.942.942 0 01-.782.38c-.357 0-.636-.142-.834-.423-.198-.285-.297-.678-.297-1.181v-.46c.094-.208.24-.374.438-.5a1.19 1.19 0 01.662-.19z"}})])},Dt=[],At={name:"c60c"},Tt=At,Rt=(a("6193"),Object(o["a"])(Tt,Pt,Dt,!1,null,null,null)),Nt=Rt.exports,Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticClass:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",height:"24",width:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M21 12a9 9 0 01-9 9 9 9 0 01-9-9 9 9 0 019-9 9 9 0 019 9z M14.014 8.75c-.62 0-1.095.206-1.426.617-.328.412-.492 1.015-.492 1.809v1.047c.008.763.175 1.349.504 1.757.328.41.802.614 1.421.614.628 0 1.105-.209 1.43-.625.326-.417.488-1.018.488-1.805v-1.047c-.007-.763-.175-1.347-.503-1.754-.329-.409-.803-.613-1.422-.613zm-3.121.02c-.576.002-1.082.134-1.52.394-.435.258-.77.624-1.004 1.098-.232.471-.348 1.015-.348 1.633v.406c0 .695.184 1.251.551 1.668.37.416.854.625 1.453.625.37 0 .7-.084.993-.25.294-.167.52-.4.68-.7.16-.299.241-.634.241-1.003 0-.579-.145-1.045-.437-1.399-.292-.354-.685-.531-1.18-.531-.46 0-.842.154-1.144.46.062-.457.248-.816.558-1.073.313-.258.724-.39 1.235-.399h.11v-.93h-.188zm3.12.894c.274 0 .475.108.602.324.13.214.196.556.196 1.028v1.351c-.006.445-.07.776-.192.992-.122.217-.321.325-.598.325-.278 0-.481-.112-.609-.336-.125-.227-.187-.572-.187-1.036V10.93c.007-.435.074-.754.199-.957.127-.206.324-.309.59-.309zM9.98 11.617c.255 0 .458.095.609.285.15.19.226.44.226.75 0 .305-.075.554-.226.746a.708.708 0 01-.586.286.72.72 0 01-.625-.317c-.148-.213-.223-.509-.223-.887v-.343a.847.847 0 01.328-.375.892.892 0 01.497-.145z"}})])},Bt=[],Jt={name:"c60d"},Ht=Jt,Lt=(a("e96c"),Object(o["a"])(Ht,Et,Bt,!1,null,null,null)),Ft=Lt.exports,qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticClass:"svg",attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",height:"24",width:"24",viewBox:"0 0 24 24"}},[a("path",{attrs:{d:"M21 12a9 9 0 01-9 9 9 9 0 01-9-9 9 9 0 019-9 9 9 0 019 9z M11.816 8.594c-.383 0-.725.082-1.027.246a1.748 1.748 0 00-.703.672 1.876 1.876 0 00-.247.949h1.133c0-.286.073-.517.219-.691a.748.748 0 01.606-.266c.236 0 .419.073.546.219.128.143.192.34.192.593 0 .185-.061.38-.184.586-.12.206-.306.447-.558.723l-1.84 1.961v.773h3.898v-.91h-2.445l1.293-1.363c.354-.388.604-.728.75-1.02.146-.291.219-.578.219-.859 0-.513-.163-.91-.489-1.191-.323-.282-.777-.422-1.363-.422zm4.133 0c-.62 0-1.095.206-1.426.617-.328.411-.492 1.014-.492 1.809v1.046c.008.764.176 1.35.504 1.758s.802.614 1.422.614c.627 0 1.104-.209 1.43-.625s.488-1.019.488-1.805V10.96c-.008-.763-.176-1.348-.504-1.754-.328-.409-.802-.613-1.422-.613zm-7.469.07l-2.356.844v.918l1.348-.418v4.351h1.13V8.664H8.48zm7.469.844c.273 0 .474.108.601.324.13.214.196.556.196 1.027v1.352c-.006.445-.07.776-.192.992-.122.216-.321.324-.597.324-.28 0-.482-.112-.61-.336-.125-.226-.187-.571-.187-1.035v-1.383c.008-.434.074-.753.199-.957.128-.205.324-.308.59-.308z"}})])},Gt=[],Ut={name:"c120"},Wt=Ut,Yt=(a("a9f9"),Object(o["a"])(Wt,qt,Gt,!1,null,null,null)),Kt=Yt.exports;s["a"].use(V["a"]);var Qt=new V["a"]({icons:{values:{c12a:{component:$},c12b:{component:N},c24a:{component:F},c24b:{component:K},c24c:{component:at},c24d:{component:ot},c30:{component:vt},c48:{component:xt},c60a:{component:Vt},c60b:{component:$t},c60c:{component:Nt},c60d:{component:Ft},c120:{component:Kt}}}}),Xt=a("8c4f"),Zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{align:"start"}},[a("v-col",{staticClass:"my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8",attrs:{cols:"12",xl:"4",lg:"4"}},[a("dice-panel",{attrs:{sides:"4",code:"d"}})],1),a("v-col",{staticClass:"my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8",attrs:{cols:"12",xl:"4",lg:"4"}},[a("dice-panel",{attrs:{sides:"6",code:"d"}})],1),a("v-col",{staticClass:"my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8",attrs:{cols:"12",xl:"4",lg:"4"}},[a("dice-panel",{attrs:{sides:"8",code:"d"}})],1),a("v-col",{staticClass:"my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8",attrs:{cols:"12",xl:"4",lg:"4"}},[a("dice-panel",{attrs:{sides:"12",code:"d"}})],1),a("v-col",{staticClass:"my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8",attrs:{cols:"12",xl:"4",lg:"4"}},[a("dice-panel",{attrs:{sides:"20",code:"d"}})],1),a("v-col",{staticClass:"my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8",attrs:{cols:"12",xl:"4",lg:"4"}},[a("dice-panel",{attrs:{sides:"10",code:"d"}})],1)],1)],1)},te=[],ee=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"flex-nowrap"},[a("span",{staticClass:"mt-5"},[a("v-icon",{attrs:{"x-large":""}},[t._v(t._s(this.iconPath))])],1),a("v-form",{ref:"form"},[a("v-text-field",{staticClass:"mt-5",staticStyle:{"min-width":"50px"},attrs:{type:"text",outlined:"",dense:"",counter:"6",maxlength:"6",rules:[t.rules.numberRule],required:""},on:{change:t.validate,focus:t.validate,input:t.validate},model:{value:t.amount,callback:function(e){t.amount=e},expression:"amount"}})],1),"b"!=this.code.charAt(0)||this.id?"t"!=this.code.charAt(0)||this.id?a("p",{staticClass:"mt-6 text-no-wrap headline"},[t._v(t._s(this.code.charAt(0))+t._s(this.sides)+" +")]):a("v-col",{staticClass:"mt-2 headline"},[a("v-form",{ref:"sideForm"},[a("v-row",{staticClass:"flex-nowrap"},[a("p",[t._v("t")]),a("v-text-field",{staticStyle:{"min-width":"125px"},attrs:{type:"text",outlined:"",dense:"",counter:"6",maxlength:"6",rules:[t.rules.numberRule,t.rules.trapezohedra],required:""},on:{change:t.validate,focus:t.validate,input:t.validate},model:{value:t.sides,callback:function(e){t.sides=e},expression:"sides"}}),a("p",[t._v("+")])],1)],1)],1):a("v-col",{staticClass:"mt-2 headline"},[a("v-form",{ref:"sideForm"},[a("v-row",{staticClass:"flex-nowrap"},[a("p",[t._v("b")]),a("v-text-field",{staticStyle:{"min-width":"125px"},attrs:{type:"text",outlined:"",dense:"",counter:"6",maxlength:"6",rules:[t.rules.numberRule,t.rules.bipyramid],required:""},on:{change:t.validate,focus:t.validate,input:t.validate},model:{value:t.sides,callback:function(e){t.sides=e},expression:"sides"}}),a("p",[t._v("+")])],1)],1)],1),a("v-text-field",{staticClass:"mt-5",staticStyle:{"min-width":"50px"},attrs:{type:"text",outlined:"",dense:"",counter:"6",maxlength:"6",rules:[t.rules.numberRule],value:"dog"},on:{change:t.validate,focus:t.validate,input:t.validate},model:{value:t.modifier,callback:function(e){t.modifier=e},expression:"modifier"}}),a("p",{staticClass:"mt-6 headline"},[t._v("=")]),a("v-text-field",{staticClass:"mt-5",staticStyle:{"min-width":"50px"},attrs:{type:"text",outlined:"",dense:"",readonly:""},on:{focus:t.validate},model:{value:t.result,callback:function(e){t.result=e},expression:"result"}}),a("v-col",[a("v-row",[a("v-btn",{staticClass:"mt-1 ml-1",attrs:{rounded:"","x-small":"",color:"success",disabled:t.disableRoll},on:{click:t.roll}},[t._v("Roll")])],1),a("v-row",[t.removable?a("v-btn",{staticClass:"mt-1 ml-1",attrs:{rounded:"","x-small":"",color:"error"},on:{click:t.remove}},[t._v("Omit")]):a("v-btn",{staticClass:"mt-1 ml-1",attrs:{rounded:"","x-small":"",color:"primary",disabled:t.disableRoll},on:{click:t.save}},[t._v("Save")])],1)],1)],1)],1)},ae=[],se=(a("99af"),a("a434"),a("a9e3"),a("acd8"),a("e25e"),a("cc98")),ne={props:{sides:Number,startAmount:Number,startModifier:Number,removable:Boolean,id:String,code:String},data:function(){return{rules:{numberRule:function(t){return!isNaN(parseFloat(t))&&t>=0&&t.length<=6||""},bipyramid:function(t){return!isNaN(parseFloat(t))&&t>8&&t%4==0||"Must be > 8 and / by 4."},trapezohedra:function(t){return!isNaN(parseFloat(t))&&t>6&&t%4!=0&&t%2==0||"Must be > 6 and / by 2 but not by 4."}},amount:null,modifier:null,disableRoll:!0,result:null,iconPath:"mdi-dice-d6"}},methods:{validate:function(){"b"!=this.code.charAt(0)&&"t"!=this.code.charAt(0)||this.id?this.disableRoll=!this.$refs.form.validate():this.disableRoll=!(this.$refs.form.validate()&&this.$refs.sideForm.validate())},roll:function(){if(this.amount)if(this.modifier){this.result=0;for(var t=0;t<parseInt(this.amount);t++)this.result+=Math.ceil(Math.random()*parseInt(this.sides))+parseInt(this.modifier)}else{this.result=0;for(var e=0;e<parseInt(this.amount);e++)this.result+=Math.ceil(Math.random()*parseInt(this.sides))}},save:function(){var t=[];this.id=se();var e=[];localStorage.getItem("dashboard")&&(t=JSON.parse(localStorage.getItem("dashboard"))),localStorage.getItem("ids")&&(e=JSON.parse(localStorage.getItem("ids"))),e.push(this.id),t.push({sides:this.sides,amount:this.amount,modifier:this.modifier,code:this.code,id:this.id}),localStorage.setItem("dashboard",JSON.stringify(t)),localStorage.setItem("ids",JSON.stringify(e)),this.$router.go(0),this.onTextChange()},remove:function(){var t=[];localStorage.getItem("dashboard")&&(t=JSON.parse(localStorage.getItem("dashboard")));var e=[];if(localStorage.getItem("ids")&&(e=JSON.parse(localStorage.getItem("ids"))),e)for(var a=0;a<e.length;a++)this.id===e[a]&&(t.splice(a,1),e.splice(a,1));localStorage.setItem("dashboard",JSON.stringify(t)),localStorage.setItem("ids",JSON.stringify(e)),this.$router.go(0)}},beforeMount:function(){"b"==this.code.charAt(0)?this.iconPath="mdi-rhombus":"t"==this.code.charAt(0)?this.iconPath="mdi-hexagon":"d"==this.code.charAt(0)?this.iconPath="mdi-dice-d".concat(this.sides):"c"==this.code.charAt(0)&&(this.code.length>1?this.iconPath="$c".concat(this.sides).concat(this.code.charAt(1)):this.iconPath="$c".concat(this.sides))},mounted:function(){this.startAmount&&(this.disableRoll=!this.$refs.form.validate(),this.amount=this.startAmount,this.startModifier&&(this.modifier=this.startModifier))}},le=ne,ie=a("8336"),re=a("62ad"),oe=a("a523"),ce=a("4bd4"),de=a("0fd9"),me=a("8654"),he=Object(o["a"])(le,ee,ae,!1,null,null,null),ue=he.exports;d()(he,{VBtn:ie["a"],VCol:re["a"],VContainer:oe["a"],VForm:ce["a"],VIcon:p["a"],VRow:de["a"],VTextField:me["a"]});var ve={components:{DicePanel:ue},props:{source:String}},pe=ve,fe=Object(o["a"])(pe,Zt,te,!1,null,null,null),ge=fe.exports;d()(fe,{VCol:re["a"],VContainer:oe["a"],VRow:de["a"]});var ye=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{align:"start"}},[a("v-col",{staticClass:"my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8",attrs:{cols:"12",xl:"4",lg:"4"}},[a("dice-panel",{attrs:{sides:"12",code:"ca"}})],1),a("v-col",{staticClass:"my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8",attrs:{cols:"12",xl:"4",lg:"4"}},[a("dice-panel",{attrs:{sides:"12",code:"cb"}})],1),a("v-col",{staticClass:"my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8",attrs:{cols:"12",xl:"4",lg:"4"}},[a("dice-panel",{attrs:{sides:"24",code:"ca"}})],1),a("v-col",{staticClass:"my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8",attrs:{cols:"12",xl:"4",lg:"4"}},[a("dice-panel",{attrs:{sides:"24",code:"cb"}})],1),a("v-col",{staticClass:"my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8",attrs:{cols:"12",xl:"4",lg:"4"}},[a("dice-panel",{attrs:{sides:"24",code:"cc"}})],1),a("v-col",{staticClass:"my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8",attrs:{cols:"12",xl:"4",lg:"4"}},[a("dice-panel",{attrs:{sides:"24",code:"cd"}})],1),a("v-col",{staticClass:"my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8",attrs:{cols:"12",xl:"4",lg:"4"}},[a("dice-panel",{attrs:{sides:"30",code:"c"}})],1),a("v-col",{staticClass:"my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8",attrs:{cols:"12",xl:"4",lg:"4"}},[a("dice-panel",{attrs:{sides:"48",code:"c"}})],1),a("v-col",{staticClass:"my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8",attrs:{cols:"12",xl:"4",lg:"4"}},[a("dice-panel",{attrs:{sides:"60",code:"ca"}})],1),a("v-col",{staticClass:"my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8",attrs:{cols:"12",xl:"4",lg:"4"}},[a("dice-panel",{attrs:{sides:"60",code:"cb"}})],1),a("v-col",{staticClass:"my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8",attrs:{cols:"12",xl:"4",lg:"4"}},[a("dice-panel",{attrs:{sides:"60",code:"cc"}})],1),a("v-col",{staticClass:"my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8",attrs:{cols:"12",xl:"4",lg:"4"}},[a("dice-panel",{attrs:{sides:"60",code:"cd"}})],1),a("v-col",{staticClass:"my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8",attrs:{cols:"12",xl:"4",lg:"4"}},[a("dice-panel",{attrs:{sides:"120",code:"c"}})],1)],1)],1)},we=[],xe={components:{DicePanel:ue},props:{source:String}},be=xe,_e=Object(o["a"])(be,ye,we,!1,null,null,null),Ce=_e.exports;d()(_e,{VCol:re["a"],VContainer:oe["a"],VRow:de["a"]});var ke=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{align:"start"}},[a("v-col",{staticClass:"my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8",attrs:{cols:"12",xl:"4",lg:"4"}},[a("dice-panel",{attrs:{code:"b"}})],1)],1)],1)},ze=[],Ve={components:{DicePanel:ue},props:{source:String}},Se=Ve,Oe=Object(o["a"])(Se,ke,ze,!1,null,null,null),Me=Oe.exports;d()(Oe,{VCol:re["a"],VContainer:oe["a"],VRow:de["a"]});var Ie=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{align:"start"}},[a("v-col",{staticClass:"my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8",attrs:{cols:"12",xl:"4",lg:"4"}},[a("dice-panel",{attrs:{code:"t"}})],1)],1)],1)},je=[],$e={components:{DicePanel:ue},props:{source:String}},Pe=$e,De=Object(o["a"])(Pe,Ie,je,!1,null,null,null),Ae=De.exports;d()(De,{VCol:re["a"],VContainer:oe["a"],VRow:de["a"]});var Te=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-content",[t.dashboard.length>0?a("v-card",{staticClass:"grey lighten-5"},[t.dashboard.length>0?a("p",{staticClass:"mt-0 align text-center text-no-wrap headline"},[t._v("Dashboard")]):t._e(),a("v-container",[a("v-row",t._l(t.dashboard,(function(t,e){return a("v-col",{key:e,staticClass:"my-n8 my-xl-2 my-lg-2 my-xs-n8 my-sm-n8 my-md-n8",attrs:{cols:"12",xl:"4",lg:"4"}},[a("dice-panel",{attrs:{sides:t.sides,startAmount:t.amount,startModifier:t.modifier,id:t.id,code:t.code,removable:""}})],1)})),1)],1)],1):t._e(),a("router-view")],1)],1)},Re=[],Ne={components:{DicePanel:ue},props:{source:String},data:function(){return{dashboard:[]}},mounted:function(){localStorage.getItem("dashboard")&&(this.dashboard=JSON.parse(localStorage.getItem("dashboard")))}},Ee=Ne,Be=a("b0af"),Je=a("a75b"),He=Object(o["a"])(Ee,Te,Re,!1,null,null,null),Le=He.exports;d()(He,{VApp:m["a"],VCard:Be["a"],VCol:re["a"],VContainer:oe["a"],VContent:Je["a"],VRow:de["a"]});var Fe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-tabs",{attrs:{centered:"","show-arrows":"","background-color":"transparent"},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},[a("v-tab",{attrs:{to:"platonic"}},[t._v('"Platonic"')]),a("v-tab",{attrs:{to:"catalan"}},[t._v("Catalan")]),a("v-tab",{attrs:{to:"bipyramid"}},[t._v("Bipyramid")]),a("v-tab",{attrs:{to:"trapezohedra"}},[t._v("Trapezohedra")])],1)},qe=[],Ge=a("71a3"),Ue=a("fe57"),We={},Ye=Object(o["a"])(We,Fe,qe,!1,null,null,null),Ke=Ye.exports;d()(Ye,{VTab:Ge["a"],VTabs:Ue["a"]});var Qe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-tabs",{attrs:{centered:"","show-arrows":"","background-color":"transparent"},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},[a("v-tab",{attrs:{to:"about"}},[t._v("About")]),a("v-tab",{attrs:{to:"platonic"}},[t._v('"Platonic"')])],1)},Xe=[],Ze={},ta=Object(o["a"])(Ze,Qe,Xe,!1,null,null,null),ea=ta.exports;d()(ta,{VTab:Ge["a"],VTabs:Ue["a"]});var aa=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("p",{staticClass:"mt-0 align text-center text-no-wrap headline"},[t._v("About Rollhedra")]),a("p",{staticClass:"body-1"},[t._v("Rollhedra takes a mathematical twist to the normal dice rolling web-app. It categorizes dice by their geometric properties. It includes subgroups of what are called "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Dice#Rarer_variations"}},[t._v('"Uniform Fair Dice"')]),t._v(" meaning that mathematically each side should have an equal chance of being rolled. This is due to them being symmetrical or face-transitive.")]),a("p",{staticClass:"body-1"},[t._v("These subgroups are the "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Platonic_solid"}},[t._v("Platonic Solids")]),t._v(", the "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Catalan_solid"}},[t._v("Catalan Solids")]),t._v(", the "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Bipyramid"}},[t._v("Bipyramids")]),t._v(", and the "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Trapezohedron"}},[t._v("Trapezohedra")]),t._v(".")]),a("p",{staticClass:"body-1"},[t._v("Rollhedra is built using "),a("a",{attrs:{href:"https://vuejs.org"}},[t._v("Vue JS")]),t._v(" and "),a("a",{attrs:{href:"https://vuetifyjs.com"}},[t._v("Vuetify")]),t._v(" and features responsive design to fit on both mobile and desktop configurations. It also supports "),a("a",{attrs:{href:"https://vivaldi.com"}},[t._v("Vivaldi")]),t._v(" Web Panels so you can roll your dice while looking up character or enemy stats at the same time.")]),a("p",{staticClass:"body-1"},[t._v("Rollhedra is licensed under MIT and is available on "),a("a",{attrs:{href:"https://github.com/sirfredrick/rollhedra"}},[t._v("Github")]),t._v(".")]),a("p",{staticClass:"body-1"},[t._v("More about fair dice: "),a("a",{attrs:{href:"http://bit.ly/FairDicePaper"}},[t._v("Fair Dice Paper")]),t._v(", "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=G7zT9MljJ3Y"}},[t._v("Numberphile Video")])])])},sa=[],na={},la=Object(o["a"])(na,aa,sa,!1,null,null,null),ia=la.exports;d()(la,{VContainer:oe["a"]});var ra=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("p",{staticClass:"mt-0 align text-center text-no-wrap headline"},[t._v("What is a Platonic Solid?")]),a("p",{staticClass:"body-1"},[t._v("A Platonic Solid is a 3D shape that is made up of regular polygons with the same number of faces meeting at each vertex. They are named after Greek Philosopher Plato.")]),a("p",{staticClass:"body-1"},[t._v("Unlike in 2D, where there are infintely many regular polygons, in 3D there are only 5 called the Platonic Solids. These are the tetrahedron (d4), the cube (d6), the octahedron (d8), the docecahedron (d12) and the icosahedron (d20).")]),a("p",{staticClass:"body-1"},[t._v("The tetrahedron (d4) is made up of 4 regular triangles in the shape of a pyramid. It has 4 faces and vertices and 6 edges.")]),a("p",{staticClass:"body-1"},[t._v("The cube (d6) is made up of 6 regular rectangles (squares) in the shape of a box. It has 6 faces, 8 vertices, and 12 edges.")]),a("p",{staticClass:"body-1"},[t._v("The octahedron (d8) is made up of 8 regular triangles in the shape of a crystal. It has 8 faces, 6 vertices, and 12 edges.")]),a("p",{staticClass:"body-1"},[t._v("The dodecahedron (d12) is made up of 12 regular pentagons. It has 12 faces, 20 vertices, and 30 edges.")]),a("p",{staticClass:"body-1"},[t._v("The icosahedron (d20) is made up of 20 regular triangles. It has 20 faces, 12 verticies, and 30 edges.")]),a("p",{staticClass:"body-1"},[t._v('The pentagonal trapezoid (d10) is not a platonic solid. However, it is grouped in RPGs such as Dungeons and Dragons with the other Platonic Solids to form the basic set of dice. Hence why the word "Platonic" is quoted in the app.')]),a("p",{staticClass:"body-1"},[t._v("The pentagonal trapezoid (d10) is made up of 10 kites. It has 10 faces, 12 verticies, and 20 edges.")])])},oa=[],ca={},da=Object(o["a"])(ca,ra,oa,!1,null,null,null),ma=da.exports;d()(da,{VContainer:oe["a"]}),s["a"].use(Xt["a"]);var ha=[{path:"/roll",components:{default:Le,tabs:Ke},children:[{path:"platonic",name:"platonic",component:ge},{path:"catalan",name:"catalan",component:Ce},{path:"bipyramid",name:"bipyramid",component:Me},{path:"trapezohedra",name:"trapezohedra",component:Ae}]},{path:"/learn",components:{default:Le,tabs:ea},children:[{path:"about",name:"about",component:ia},{path:"platonic",name:"platonic",component:ma}]},{path:"*",redirect:"/roll/platonic"}],ua=new Xt["a"]({mode:"history",base:"/",routes:ha}),va=ua;s["a"].config.productionTip=!1,new s["a"]({vuetify:Qt,router:va,render:function(t){return t(z)}}).$mount("#app")},"590a":function(t,e,a){},"5fa7":function(t,e,a){},6136:function(t,e,a){"use strict";var s=a("9fc2"),n=a.n(s);n.a},6193:function(t,e,a){"use strict";var s=a("1844"),n=a.n(s);n.a},"6e7a":function(t,e,a){"use strict";var s=a("9fd3"),n=a.n(s);n.a},"710a":function(t,e,a){},7185:function(t,e,a){},"7da8":function(t,e,a){"use strict";var s=a("5fa7"),n=a.n(s);n.a},"88a7":function(t,e,a){"use strict";var s=a("710a"),n=a.n(s);n.a},"9fc2":function(t,e,a){},"9fd3":function(t,e,a){},a9f9:function(t,e,a){"use strict";var s=a("ab54"),n=a.n(s);n.a},ab54:function(t,e,a){},c2ee:function(t,e,a){},d3e6:function(t,e,a){},d3f7:function(t,e,a){"use strict";var s=a("7185"),n=a.n(s);n.a},e96c:function(t,e,a){"use strict";var s=a("35d7"),n=a.n(s);n.a}});
//# sourceMappingURL=app.cba182e3.js.map
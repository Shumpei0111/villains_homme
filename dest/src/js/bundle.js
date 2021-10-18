/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/luxy.js/dist/js/luxy.min.js":
/*!**************************************************!*\
  !*** ./node_modules/luxy.js/dist/js/luxy.min.js ***!
  \**************************************************/
/***/ (function(module, exports) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! luxy.js v0.0.7 | (c) 2018 Mineo Okuda | MIT License | git+ssh://git@github.com:min30327/luxy.git */\n!(function(t,e){\"use strict\"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0})(this,(function(){\"use strict\";var t={wrapper:\"#luxy\",targets:\".luxy-el\",wrapperSpeed:.08,targetSpeed:.02,targetPercentage:.1},e=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.requestAnimationFrame=e;var i=window.cancelAnimationFrame||window.mozCancelAnimationFrame,s=function(){for(var t={},e=0,i=arguments.length;e<i;e++){var s=arguments[e];!(function(e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(s)}return t},r=function(){this.Targets=[],this.TargetsLength=0,this.wrapper=\"\",this.windowHeight=0,this.wapperOffset=0};return r.prototype={isAnimate:!1,isResize:!1,scrollId:\"\",resizeId:\"\",init:function(e){if(this.settings=s(t,e||{}),this.wrapper=document.querySelector(this.settings.wrapper),\"undefined\"===this.wrapper)return!1;this.targets=document.querySelectorAll(this.settings.targets),document.body.style.height=this.wrapper.clientHeight+\"px\",this.windowHeight=window.clientHeight,this.attachEvent(),this.apply(this.targets,this.wrapper),this.animate(),this.resize()},apply:function(t,e){this.wrapperInit(),this.targetsLength=t.length;for(var i=0;i<this.targetsLength;i++){var s={offset:t[i].getAttribute(\"data-offset\"),speedX:t[i].getAttribute(\"data-speed-x\"),speedY:t[i].getAttribute(\"data-speed-Y\"),percentage:t[i].getAttribute(\"data-percentage\"),horizontal:t[i].getAttribute(\"data-horizontal\")};this.targetsInit(t[i],s)}},wrapperInit:function(){this.wrapper.style.width=\"100%\",this.wrapper.style.position=\"fixed\"},targetsInit:function(t,e){this.Targets.push({elm:t,offset:e.offset?e.offset:0,horizontal:e.horizontal?e.horizontal:0,top:0,left:0,speedX:e.speedX?e.speedX:1,speedY:e.speedY?e.speedY:1,percentage:e.percentage?e.percentage:0})},scroll:function(){document.documentElement.scrollTop||document.body.scrollTop;this.scrollTop=document.documentElement.scrollTop||document.body.scrollTop;this.scrollTop,this.windowHeight;this.wrapperUpdate(this.scrollTop);for(var t=0;t<this.Targets.length;t++)this.targetsUpdate(this.Targets[t])},animate:function(){this.scroll(),this.scrollId=e(this.animate.bind(this))},wrapperUpdate:function(){this.wapperOffset+=(this.scrollTop-this.wapperOffset)*this.settings.wrapperSpeed,this.wrapper.style.transform=\"translate3d(0,\"+Math.round(100*-this.wapperOffset)/100+\"px ,0)\"},targetsUpdate:function(t){t.top+=(this.scrollTop*Number(this.settings.targetSpeed)*Number(t.speedY)-t.top)*this.settings.targetPercentage,t.left+=(this.scrollTop*Number(this.settings.targetSpeed)*Number(t.speedX)-t.left)*this.settings.targetPercentage;var e=parseInt(t.percentage)-t.top-parseInt(t.offset),i=Math.round(-100*e)/100,s=0;if(t.horizontal){var r=parseInt(t.percentage)-t.left-parseInt(t.offset);s=Math.round(-100*r)/100}t.elm.style.transform=\"translate3d(\"+s+\"px ,\"+i+\"px ,0)\"},resize:function(){var t=this;t.windowHeight=window.innerHeight||document.documentElement.clientHeight||0,parseInt(t.wrapper.clientHeight)!=parseInt(document.body.style.height)&&(document.body.style.height=t.wrapper.clientHeight+\"px\"),t.resizeId=e(t.resize.bind(t))},attachEvent:function(){var t=this;window.addEventListener(\"resize\",(function(){t.isResize||(i(t.resizeId),i(t.scrollId),t.isResize=!0,setTimeout((function(){t.isResize=!1,t.resizeId=e(t.resize.bind(t)),t.scrollId=e(t.animate.bind(t))}),200))}))}},new r}));\n\n//# sourceURL=webpack://project/./node_modules/luxy.js/dist/js/luxy.min.js?");

/***/ }),

/***/ "./src/js/fadein.js":
/*!**************************!*\
  !*** ./src/js/fadein.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst fadeIn = ( scrollVol, tgtClassName, addClassName ) => {\n    let $tgt = document.querySelectorAll( tgtClassName );\n\n    window.addEventListener( 'scroll', () => {\n        for (let i = 0; i < $tgt.length; i++) {\n            const element = $tgt[i].getBoundingClientRect().top;\n            const scroll  = window.pageYOffset || document.documentElement.scrollTop;\n            const offset  = element + scroll;\n            const windowHeight = window.innerHeight;\n\n            if( scroll > offset - windowHeight + scrollVol ) {\n                $tgt[ i ].classList.add( addClassName );\n            }\n        }\n    } );\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fadeIn);\n\n//# sourceURL=webpack://project/./src/js/fadein.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fadein_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fadein.js */ \"./src/js/fadein.js\");\n/* harmony import */ var luxy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! luxy.js */ \"./node_modules/luxy.js/dist/js/luxy.min.js\");\n/* harmony import */ var luxy_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(luxy_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n(0,_fadein_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( 150, '.animation', 'active' );\n(0,_fadein_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( 20, '.scrollin', 'active' );\n\nconst fvFadeIn = () => {\n    const $tgt = document.getElementById( 'fvAnimationTgt' );\n    const $topLogo = document.getElementById( 'fvLogo' );\n\n    const tgtArr = [ $tgt, $topLogo ];\n\n    for (let i = 0, n = tgtArr.length; i < n; i++) {\n        tgtArr[i].classList.add( 'active' );\n        \n    }\n}\n\nconst closeBtn = ( tgt, wrapper ) => {\n    const $tgt = document.getElementById( tgt );\n    $tgt.addEventListener( 'click', () => {\n        const $w = document.getElementById( wrapper );\n        console.log($w);\n        $w.classList.add( 'none' );\n    } );\n}\n\nconst setAdHeight = () => {\n    const $el = document.getElementById( 'carecheck' );\n    const point = window.innerHeight;\n    $el.style.top = point + 'px';\n}\n\nconst followAdWindow = () => {\n    const $el = document.getElementById( 'carecheck' );\n    const $elHeight = $el.clientHeight;\n    const point = window.innerHeight;\n    \n    window.addEventListener( 'scroll', () => {\n        $el.style.top = ( window.scrollY + point - $elHeight ) + 'px';\n    }, false );\n}\n\nsetTimeout( () => {\n    luxy_js__WEBPACK_IMPORTED_MODULE_1___default().init();\n    setAdHeight();\n    fvFadeIn();\n    closeBtn( 'bnrCloseBtn', 'carecheck' );\n    followAdWindow();\n}, 100 )\n\n//# sourceURL=webpack://project/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;
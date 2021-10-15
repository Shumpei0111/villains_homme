/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/fadein.js":
/*!**************************!*\
  !*** ./src/js/fadein.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst fadeIn = ( scrollVol, tgtClassName, addClassName ) => {\n    let $tgt = document.querySelectorAll( tgtClassName );\n\n    window.addEventListener( 'scroll', () => {\n        for (let i = 0; i < $tgt.length; i++) {\n            const element = $tgt[i].getBoundingClientRect().top;\n            const scroll  = window.pageYOffset || document.documentElement.scrollTop;\n            const offset  = element + scroll;\n            const windowHeight = window.innerHeight;\n\n            if( scroll > offset - windowHeight + scrollVol ) {\n                $tgt[ i ].classList.add( addClassName );\n            }\n        }\n    } );\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fadeIn);\n\n//# sourceURL=webpack://project/./src/js/fadein.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fadein_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fadein.js */ \"./src/js/fadein.js\");\n\n\n(0,_fadein_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( 150, '.animation', 'active' );\n(0,_fadein_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( 20, '.scrollin', 'active' );\n\nconst fvFadeIn = () => {\n    const $tgt = document.getElementById( 'fvAnimationTgt' );\n    const $topLogo = document.getElementById( 'fvLogo' );\n\n    const tgtArr = [ $tgt, $topLogo ];\n\n    for (let i = 0, n = tgtArr.length; i < n; i++) {\n        tgtArr[i].classList.add( 'active' );\n        \n    }\n}\n\nconst closeBtn = ( tgt, wrapper ) => {\n    const $tgt = document.getElementById( tgt );\n    $tgt.addEventListener( 'click', () => {\n        const $w = document.getElementById( wrapper );\n        console.log($w);\n        $w.classList.add( 'none' );\n    } );\n}\n\nconst handleEv = () => {}\n\nsetTimeout( () => {\n    fvFadeIn();\n    closeBtn( 'bnrCloseBtn', 'carecheck' );\n}, 100 )\n\n//# sourceURL=webpack://project/./src/js/index.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
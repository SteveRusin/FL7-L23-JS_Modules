/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interface_module__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__result_module__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calculate_module__ = __webpack_require__(3);




Object(__WEBPACK_IMPORTED_MODULE_0__interface_module__["a" /* buildCalculator */])();
document.getElementById('buttons').addEventListener('click', function(event){
    Object(__WEBPACK_IMPORTED_MODULE_1__result_module__["a" /* showResult */])(event, __WEBPACK_IMPORTED_MODULE_2__calculate_module__["a" /* default */].addition, __WEBPACK_IMPORTED_MODULE_2__calculate_module__["a" /* default */].subtraction, __WEBPACK_IMPORTED_MODULE_2__calculate_module__["a" /* default */].division, __WEBPACK_IMPORTED_MODULE_2__calculate_module__["a" /* default */].multiplication);
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = buildCalculator;
function buildCalculator() {
    let container = document.getElementById('container');
    container.innerHTML = `<input type="number" class="form-control"/> <br/>
                           <input type="number" class="form-control"/><br/>
                           <div id="buttons">
                           <button class="btn btn-primary">+</button>
                           <button class="btn btn-primary">-</button>
                           <button class="btn btn-primary">:</button>
                           <button class="btn btn-primary">*</button>
                           </div>
                           <br>
                           <div id="result"></div>`
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = showResult;
function showResult(event, add, sub, div, mult) {
    let target = event.target;
    let firstNumber = parseFloat(document.querySelectorAll('input')[0].value);
    let secondNumber = parseFloat(document.querySelectorAll('input')[1].value);
    let resultBlock = document.getElementById('result');
    let result;

    switch (target.innerHTML) {
        case '+':
            result = add(firstNumber, secondNumber);
            break;
        case '-':
            result = sub(firstNumber, secondNumber);
            break;
        case ':':
            result = div(firstNumber, secondNumber);
            break;
        case '*':
            result = mult(firstNumber, secondNumber);
            break;
        default:
            break;
    }

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        resultBlock.innerHTML = `Fields should not be black`
    } else {
        resultBlock.innerHTML = `${result}`
    }
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function division(a, b) {
    if (!b) {
        return 'You cannot divide by 0!'
    } else {
        return a / b;
    }
}

function multiplication(a, b) {
    return a * b;
}


/* harmony default export */ __webpack_exports__["a"] = ({
    addition: addition,
    subtraction: subtraction,
    division: division,
    multiplication: multiplication
});


/***/ })
/******/ ]);
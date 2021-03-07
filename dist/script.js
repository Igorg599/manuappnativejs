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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/logo */ "./src/js/modules/logo.js");
/* harmony import */ var _modules_iconLeftNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/iconLeftNav */ "./src/js/modules/iconLeftNav.js");
/* harmony import */ var _modules_iconRightNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/iconRightNav */ "./src/js/modules/iconRightNav.js");
/* harmony import */ var _modules_coin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/coin */ "./src/js/modules/coin.js");
/* harmony import */ var _modules_iconRightGamburger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/iconRightGamburger */ "./src/js/modules/iconRightGamburger.js");
/* harmony import */ var _modules_iconPopupRight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/iconPopupRight */ "./src/js/modules/iconPopupRight.js");
/* harmony import */ var _modules_setVisiblePopupRight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/setVisiblePopupRight */ "./src/js/modules/setVisiblePopupRight.js");







window.addEventListener('DOMContentLoaded', function () {
  Object(_modules_logo__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_iconLeftNav__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_coin__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_modules_iconRightNav__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_iconRightGamburger__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_modules_iconPopupRight__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_modules_setVisiblePopupRight__WEBPACK_IMPORTED_MODULE_6__["default"])('.navright__popup', '.navright__gamburger');
});

/***/ }),

/***/ "./src/js/modules/coin.js":
/*!********************************!*\
  !*** ./src/js/modules/coin.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./src/js/services.js");


const coin = () => {
  class Coin {
    constructor(src, width, name, parentSelector) {
      this.src = src;
      this.width = width;
      this.name = name;
      this.parent = document.querySelector(parentSelector);
    }

    render() {
      const element = document.createElement('div');
      this.classes = "navright__coin";
      element.classList.add(this.classes);
      element.innerHTML = `
                <img width=${this.width} src=${this.src} alt='coin'/>
                <p>${this.name}</p>
            `;
      this.parent.append(element);
    }

  }

  Object(_services__WEBPACK_IMPORTED_MODULE_0__["getResource"])('db.json').then(data => {
    new Coin(data.items.iconsrightmenu[0].src, data.items.iconsrightmenu[0].width, data.items.iconsrightmenu[0].name, ".header .navright").render();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (coin);

/***/ }),

/***/ "./src/js/modules/iconLeftNav.js":
/*!***************************************!*\
  !*** ./src/js/modules/iconLeftNav.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./src/js/services.js");


const iconLeftNav = () => {
  class IconLeftNav {
    constructor(src, width, name, parentSelector) {
      this.src = src;
      this.width = width;
      this.name = name;
      this.parent = document.querySelector(parentSelector);
    }

    render() {
      const element = document.createElement('div');
      this.classes = "navleft__icons";
      element.classList.add(this.classes);
      element.innerHTML = `
                <img width=${this.width} src=${this.src} alt='icon'/>
                <p>${this.name}</p>
            `;
      this.parent.append(element);
    }

  }

  Object(_services__WEBPACK_IMPORTED_MODULE_0__["getResource"])('db.json').then(data => {
    data.items.iconsleftmenu.filter(item => item.id < 10).forEach(item => {
      new IconLeftNav(item.src, item.width, item.name, ".header .navleft").render();
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (iconLeftNav);

/***/ }),

/***/ "./src/js/modules/iconPopupRight.js":
/*!******************************************!*\
  !*** ./src/js/modules/iconPopupRight.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./src/js/services.js");


const iconPopupRight = () => {
  class IconPopupRight {
    constructor(src, width, name, parentSelector) {
      this.src = src;
      this.width = width;
      this.name = name;
      this.parent = document.querySelector(parentSelector);
    }

    render() {
      const element = document.createElement('li');
      element.innerHTML = `
                <img width=${this.width} src=${this.src} alt='icon'/>
                <p>${this.name}</p>  
            `;
      this.parent.append(element);
    }

  }

  Object(_services__WEBPACK_IMPORTED_MODULE_0__["getResource"])('db.json').then(data => {
    data.items.iconsrightmenu.forEach(item => {
      new IconPopupRight(item.src, item.width, item.name, ".header .navright__popup ul").render();
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (iconPopupRight);

/***/ }),

/***/ "./src/js/modules/iconRightGamburger.js":
/*!**********************************************!*\
  !*** ./src/js/modules/iconRightGamburger.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./src/js/services.js");


const iconRightGamburger = () => {
  class IconRightGamburger {
    constructor(src, width, name, parentSelector) {
      this.src = src;
      this.width = width;
      this.name = name;
      this.parent = document.querySelector(parentSelector);
    }

    render() {
      const element = document.createElement('div');
      element.classList.add('navright__gamburger');
      element.innerHTML = `
                <img width=${this.width} src=${this.src} alt='coin'/>
                <div class='navright__gamburger_label'/>
            `;
      this.parent.append(element);
    }

  }

  Object(_services__WEBPACK_IMPORTED_MODULE_0__["getResource"])('db.json').then(data => {
    new IconRightGamburger(data.items.iconsrightmenu[2].src, data.items.iconsrightmenu[2].width, data.items.iconsrightmenu[2].name, ".header .navright").render();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (iconRightGamburger);

/***/ }),

/***/ "./src/js/modules/iconRightNav.js":
/*!****************************************!*\
  !*** ./src/js/modules/iconRightNav.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./src/js/services.js");


const iconRightNav = () => {
  class IconRightNav {
    constructor(src, width, name, parentSelector) {
      this.src = src;
      this.width = width;
      this.name = name;
      this.parent = document.querySelector(parentSelector);
    }

    render() {
      const element = document.createElement('div');
      this.classes = "navright__menu";
      element.classList.add(this.classes);
      element.style.margin = '0 6px';
      element.innerHTML = `
                <img width=${this.width} src=${this.src} alt='icon'/>
            `;
      this.parent.append(element);
    }

  }

  Object(_services__WEBPACK_IMPORTED_MODULE_0__["getResource"])('db.json').then(data => {
    data.items.iconsrightmenu.filter(item => item.id > 1).forEach(item => {
      new IconRightNav(item.src, item.width, item.name, ".header .navright").render();
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (iconRightNav);

/***/ }),

/***/ "./src/js/modules/logo.js":
/*!********************************!*\
  !*** ./src/js/modules/logo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services */ "./src/js/services.js");


const logo = () => {
  class Logo {
    constructor(src, width, name, parentSelector) {
      this.src = src;
      this.width = width;
      this.name = name;
      this.parent = document.querySelector(parentSelector);
    }

    render() {
      const element = document.createElement('div');
      this.classes = "navleft__logo";
      element.classList.add(this.classes);
      element.innerHTML = `
                <img width=${this.width} src=${this.src} alt='logo'/>
                <p>${this.name}</p>
            `;
      this.parent.append(element);
    }

  }

  Object(_services__WEBPACK_IMPORTED_MODULE_0__["getResource"])('db.json').then(data => {
    new Logo(data.items.logo.src, data.items.logo.width, data.items.logo.name, ".header .navleft").render();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (logo);

/***/ }),

/***/ "./src/js/modules/setVisiblePopupRight.js":
/*!************************************************!*\
  !*** ./src/js/modules/setVisiblePopupRight.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const setVisiblePopupRight = (popupSelector, iconSelector) => {
  const popup = document.querySelector(popupSelector);
  const icon = document.querySelector(iconSelector);
  window.addEventListener('click', () => {
    popup.style.display = 'none';
  });
  icon.addEventListener('click', () => {
    popup.style.display = 'block';
  });
};

/* harmony default export */ __webpack_exports__["default"] = (setVisiblePopupRight);

/***/ }),

/***/ "./src/js/services.js":
/*!****************************!*\
  !*** ./src/js/services.js ***!
  \****************************/
/*! exports provided: getResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });
async function getResource(url) {
  let res = await fetch(url);
  return await res.json();
}



/***/ })

/******/ });
//# sourceMappingURL=script.js.map
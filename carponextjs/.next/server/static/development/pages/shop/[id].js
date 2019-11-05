module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CarpoLayout.js":
/*!***********************************!*\
  !*** ./components/CarpoLayout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
var _jsxFileName = "C:\\Users\\DELL\\Desktop\\carponextjs\\components\\CarpoLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Layout = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), props.children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\DELL\\Desktop\\carponextjs\\components\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Footer = () => __jsx("footer", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("div", {
  className: "footer-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("div", {
  className: "news-letter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
  className: "heading text-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "\u0110\u0102NG K\xDD NH\u1EACN TH\xD4NG B\xC1O"), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "\u0110\u0103ng k\xFD nh\u1EADn th\xF4ng tin khuy\u1EBFn m\xE3i v\xE0 c\u1EADp nh\u1EADt s\u1EA3n ph\u1EA9m m\u1EDBi nh\u1EA5t t\u1EEB Carpo.")), __jsx("form", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("input", {
  type: "email",
  placeholder: "Nh\u1EADp \u0111\u1ECBa ch\u1EC9 Email c\u1EE7a b\u1EA1n",
  required: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx("button", {
  type: "submit",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, "\u0110\u0103ng k\xFD")))), __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx("div", {
  className: "col-lg-3 col-md-6 col-sm-6 col-xs-12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx("h4", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, "Carpo"), __jsx("div", {
  className: "contacts-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, "C\u1EEDa h\xE0ng th\u1EDDi trang nam mang phong c\xE1ch m\u1EDBi l\u1EA1 "), __jsx("address", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-location-arrow",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}), " ", __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, "123 Nguy\u1EC5n Tr\xE3i, Thanh Xu\xE2n, H\xE0 N\u1ED9i")), __jsx("div", {
  className: "phone-footer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-phone",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}), " +0 123 456 98765"), __jsx("div", {
  className: "email-footer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-envelope",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}), " ", __jsx("a", {
  href: "mailto:support@example.com",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, "Carpo@gmail.com"), " "))), __jsx("div", {
  className: "col-lg-3 col-md-6 col-sm-6 col-xs-12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, __jsx("h4", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, "V\u1EC1 ch\xFAng t\xF4i"), __jsx("ul", {
  className: "links",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, "Th\xF4ng tin v\u1EC1 Carpo")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, "Qu\xE1 tr\xECnh ph\xE1t tri\u1EC3n")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, "H\u1EC7 th\xF4ng c\u1EEDa h\xE0ng")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, "Tuy\u1EC3n d\u1EE5ng")))), __jsx("div", {
  className: "col-lg-3 col-md-6 col-sm-6 col-xs-12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, __jsx("h4", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}, "H\u1ED6 TR\u1EE2 MUA H\xC0NG"), __jsx("ul", {
  className: "links",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}, "H\u01B0\u1EDBng d\u1EABn mua h\xE0ng")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66
  },
  __self: undefined
}, "H\u01B0\u1EDBng d\u1EABn thanh to\xE1n")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
}, "Ph\u01B0\u01A1ng th\u1EE9c v\u1EADn chuy\u1EC3n")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}, "Tra c\u1EE9u \u0111\u01A1n h\xE0ng")))), __jsx("div", {
  className: "col-xs-12 col-lg-3 col-md-6 col-sm-6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
}, __jsx("div", {
  className: "social",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77
  },
  __self: undefined
}, __jsx("h4", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78
  },
  __self: undefined
}, "Theo d\xF5i ch\xFAng t\xF4i"), __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-facebook",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82
  },
  __self: undefined
}))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-twitter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87
  },
  __self: undefined
}))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-youtube",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92
  },
  __self: undefined
}))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-instagram",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97
  },
  __self: undefined
}))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-google-plus",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102
  },
  __self: undefined
}))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-skype",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107
  },
  __self: undefined
}))))))))), __jsx("div", {
  className: "footer-bottom",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 116
  },
  __self: undefined
}, __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 118
  },
  __self: undefined
}, __jsx("div", {
  className: "col-sm-12 col-xs-12 coppyright text-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 119
  },
  __self: undefined
}, "\xA9 2019 CarpoShop.")))));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\DELL\\Desktop\\carponextjs\\components\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const MainHeader = () => __jsx("header", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("nav", {
  className: "navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("a", {
  className: "navbar-brand order-xs-2 order-sm-2 order-md-2 order-lg-1",
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("strong", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "CarpoShop"))), __jsx("button", {
  className: "navbar-toggler order-xs-1 order-sm-1 order-md-1 order-lg-2",
  type: "button",
  "data-toggle": "collapse",
  "data-target": "#navbarSupportedContent",
  "aria-controls": "navbarSupportedContent",
  "aria-expanded": "false",
  "aria-label": "Toggle navigation",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("span", {
  className: "navbar-toggler-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
})), __jsx("div", {
  className: "collapse navbar-collapse",
  id: "navbarSupportedContent",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx("ul", {
  className: "navbar-nav mr-auto ml-auto",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx("li", {
  className: "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx("a", {
  className: "nav-link text-uppercase text-white",
  href: "./index.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, "Trang ch\u1EE7"))), __jsx("li", {
  className: "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/shop-list",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, __jsx("a", {
  className: "nav-link text-uppercase text-white",
  href: "./shop-list.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, "S\u1EA3n ph\u1EA9m"))), __jsx("li", {
  className: "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/blog",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, __jsx("a", {
  className: "nav-link text-uppercase text-white",
  href: "./blog.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, "Blog"))), __jsx("li", {
  className: "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/contact",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, __jsx("a", {
  className: "nav-link text-uppercase text-white",
  href: "./contact.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, "Li\xEAn h\u1EC7"))), __jsx("li", {
  className: "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/track-order",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
}, __jsx("a", {
  className: "nav-link text-uppercase text-white",
  href: "./track-order.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
}, "Theo d\xF5i \u0111\u01A1n h\xE0ng"))))), __jsx("ul", {
  className: "navbar-nav nav-flex-icons order-xs-3 order-sm-3 order-md-3 order-lg-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79
  },
  __self: undefined
}, __jsx("li", {
  className: "nav-item sm-display-none",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}, __jsx("a", {
  className: "nav-link icon-header",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-search text-white",
  "aria-hidden": "true",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82
  },
  __self: undefined
}))), __jsx("li", {
  className: "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/login",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86
  },
  __self: undefined
}, __jsx("a", {
  className: "nav-link icon-header",
  href: "./login.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-user text-white",
  "aria-hidden": "true",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88
  },
  __self: undefined
})))), __jsx("li", {
  className: "nav-item sm-display-none",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/shopping-cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93
  },
  __self: undefined
}, __jsx("a", {
  className: "nav-link icon-header",
  href: "./shopping-card.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-shopping-cart text-white",
  "aria-hidden": "true",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95
  },
  __self: undefined
})))))));

/* harmony default export */ __webpack_exports__["default"] = (MainHeader);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouteWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      props = await fetch(`/_next/data${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/shop/[id].js":
/*!****************************!*\
  !*** ./pages/shop/[id].js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CarpoLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/CarpoLayout */ "./components/CarpoLayout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\DELL\\Desktop\\carponextjs\\pages\\shop\\[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ProductDetail = ({
  url: {
    query: {
      id
    }
  }
}) => __jsx(_components_CarpoLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "Product Detail Page"), __jsx("link", {
  rel: "stylesheet",
  href: "/css/product-detail.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
})), __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("section", {
  id: "duong-dan",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("a", {
  href: "./index.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, "Trang ch\u1EE7")), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-angle-right",
  "aria-hidden": "true",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
})), __jsx("a", {
  href: "./shop-list.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, "S\u1EA3n ph\u1EA9m")), __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-angle-right",
  "aria-hidden": "true",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
})), __jsx("a", {
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, "\xC1o thun c\u1ED5 tr\u01A1n t\xFAi ng\u1EF1c ", id)))), __jsx("section", {
  className: "main-container col1-layout",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx("div", {
  className: "product-view",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, __jsx("div", {
  className: "product-essential",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, __jsx("form", {
  action: "#",
  method: "post",
  id: "product_addtocart_form",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, __jsx("div", {
  className: "product-img-box col-lg-4 col-sm-5 col-xs-12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, __jsx("div", {
  className: "product-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, __jsx("div", {
  className: "product-full",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, __jsx("img", {
  id: "product-zoom",
  src: "./images/7.png",
  "data-zoom-image": "./images/17.jpg",
  alt: "product-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
})))), __jsx("div", {
  className: "product-shop col-lg-8 col-sm-7 col-xs-12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, __jsx("div", {
  className: "product-name",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, "\xC1o thun c\u1ED5 tr\u01A1n t\xFAi ng\u1EF1c ", id)), __jsx("div", {
  className: "rating",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, " ", __jsx("i", {
  className: "fa fa-star",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}), " "), __jsx("div", {
  className: "price-block",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}, __jsx("div", {
  className: "price-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
}, __jsx("p", {
  className: "special-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "price-label",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, "Gi\xE1 khuy\u1EBFn m\u1EA1i"), __jsx("span", {
  className: "price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
}, " 230.000\u0111 ")), __jsx("p", {
  className: "old-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "price-label",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
}, "Gi\xE1:"), __jsx("span", {
  className: "price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70
  },
  __self: undefined
}), "470.000\u0111", " "), __jsx("p", {
  className: "availability in-stock",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  },
  __self: undefined
}, "C\xF2n h\xE0ng")))), __jsx("div", {
  className: "short-description",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78
  },
  __self: undefined
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79
  },
  __self: undefined
}, "M\xF4 t\u1EA3"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}, "\xC1o ph\xF4ng Cotton US, in d\u01B0\u1EDBi t\xFAi. Phom Regular, c\u1ED5 tr\xF2n, ng\u1EAFn tay. Phong c\xE1ch n\u0103ng \u0111\u1ED9ng, kh\u1ECFe kho\u0103n. Ph\xF9 h\u1EE3p v\u1EDBi qu\u1EA7n short v\xE0 jeans"), __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
  },
  __self: undefined
}), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86
  },
  __self: undefined
}, " ", "\xC1o thun tr\u1EAFng lu\xF4n l\xE0 s\u1EF1 l\u1EF1a ch\u1ECDn h\xE0ng \u0111\u1EA7u c\u1EE7a c\xE1c ch\xE0ng trai b\u1EDFi s\u1EF1 \u0111\u01A1n gi\u1EA3n, d\u1EC5 ph\u1ED1i \u0111\u1ED3 v\xE0 mang l\u1EA1i phtong c\xE1ch t\u01B0\u01A1i m\u1EDBi, tr\u1EBB trung, hi\u1EC7n \u0111\u1EA1i cho ng\u01B0\u1EDDi m\u1EB7c.")), __jsx("div", {
  className: "add-to-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93
  },
  __self: undefined
}, __jsx("div", {
  className: "add-to-cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94
  },
  __self: undefined
}, __jsx("div", {
  className: "pull-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95
  },
  __self: undefined
}, __jsx("div", {
  className: "custom pull-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96
  },
  __self: undefined
}, __jsx("label", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97
  },
  __self: undefined
}, "S\u1ED1 l\u01B0\u1EE3ng:"), __jsx("button", {
  type: "button",
  className: "increase items-count",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-minus",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102
  },
  __self: undefined
}, "\xA0")), __jsx("input", {
  type: "text",
  className: "input-text qty",
  title: "Qty",
  defaultValue: 1,
  maxLength: 12,
  id: "qty",
  name: "qty",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
}), __jsx("button", {
  className: "increase items-count",
  type: "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-plus",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117
  },
  __self: undefined
}, "\xA0")))), __jsx("button", {
  className: "button btn-cart",
  title: "Add to Cart",
  type: "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 121
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-shopping-cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 126
  },
  __self: undefined
}), " Th\xEAm v\xE0o gi\u1ECF h\xE0ng"))), __jsx("div", {
  className: "social",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 131
  },
  __self: undefined
}, __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 132
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 133
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 134
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-facebook",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 135
  },
  __self: undefined
}))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 138
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 139
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-twitter",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 140
  },
  __self: undefined
}))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 143
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 144
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-youtube",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 145
  },
  __self: undefined
}))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 148
  },
  __self: undefined
}, __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 149
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-instagram",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 150
  },
  __self: undefined
}))))))))), __jsx("div", {
  className: "product-collateral col-lg-12 col-sm-12 col-xs-12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 159
  },
  __self: undefined
}, __jsx("ul", {
  id: "product-detail-tab",
  className: "nav nav-tabs product-tabs",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 160
  },
  __self: undefined
}, __jsx("li", {
  className: "active",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 161
  },
  __self: undefined
}, " ", __jsx("a", {
  href: "#product_tabs_description",
  "data-toggle": "tab",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 163
  },
  __self: undefined
}, " ", "Chi ti\u1EBFt s\u1EA3n ph\u1EA9m")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 168
  },
  __self: undefined
}, __jsx("a", {
  href: "#reviews_tabs",
  "data-toggle": "tab",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 169
  },
  __self: undefined
}, "\u0110\xE1nh gi\xE1 s\u1EA3n ph\u1EA9m")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 173
  },
  __self: undefined
}, __jsx("a", {
  href: "#product_tabs_custom",
  "data-toggle": "tab",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 174
  },
  __self: undefined
}, "H\u01B0\u1EDBng d\u1EABn mua h\xE0ng"))), __jsx("div", {
  id: "productTabContent",
  className: "tab-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 179
  },
  __self: undefined
}, __jsx("div", {
  className: "tab-pane fade in active",
  id: "product_tabs_description",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 180
  },
  __self: undefined
}, __jsx("div", {
  className: "std",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 184
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 185
  },
  __self: undefined
}, "C\xF3 ngu\u1ED3n g\u1ED1c t\u1EEB lo\u1EA1i \xE1o ch\u1ED1ng r\xE9t c\u1EE7a ng\u01B0\u1EDDi Eskimo, \xE1o parka r\u1EA5t \u0111\u01B0\u1EE3c \u01B0u \xE1i trong nh\u1EEFng ng\xE0y \u0111\u1EA1i h\xE0n b\u1EDFi kh\u1EA3 n\u0103ng gi\u1EEF \u1EA5m tuy\u1EC7t v\u1EDDi. \u0110\u1EB7c \u0111i\u1EC3m c\u1EE7a chi\u1EBFc \xE1o kho\xE1c n\xE0y t\u1EA1i H2T l\xE0 \u0111\u01B0\u1EE3c c\u1EAFt may r\u1ED9ng r\xE3i, c\xF3 th\u1EC3 c\xF3 m\u0169 v\xE0 l\u1EDBp l\xF3t l\xF4ng b\xEAn trong, th\u01B0\u1EDDng g\u1EAFn li\u1EC1n v\u1EDBi c\xE1c gam m\xE0u tr\u1EA7m, qu\xE2n \u0111\u1ED9i nh\u01B0 xanh khaki, n\xE2u, \u0111en... Item n\xE0y r\u1EA5t \u0111\u01B0\u1EE3c \u01B0a chu\u1ED9ng \u1EDF c\xE1c n\u01B0\u1EDBc x\u1EE9 l\u1EA1nh b\u1EDFi ngo\xE0i kh\u1EA3 n\u0103ng gi\u1EEF \u1EA5m t\u01B0\u01A1ng \u0111\u1ED1i t\u1ED1t, n\xF3 c\xF2n mang l\u1EA1i n\xE9t ph\xF3ng kho\xE1ng, tho\u1EA3i m\xE1i cho ng\u01B0\u1EDDi m\u1EB7c.."), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 195
  },
  __self: undefined
}, " ", "N\u1EBFu c\xF3 m\u1ED9t l\u1EDDi khuy\xEAn d\xE0nh cho b\u1EA1n ngay khi ti\u1EBFt tr\u1EDDi \u0111ang sang thu v\xE0o \u0111\xF4ng n\xE0y th\xEC \u0111\xF3 l\xE0: \u0110\u1EEBng ng\u1EA1i chi ti\u1EC1n cho nh\u1EEFng chi\u1EBFc \xE1o kho\xE1c ch\u1EA5t l\u01B0\u1EE3ng! C\xF3 th\u1EC3 n\xF3i kh\xF4ng m\u1ED9t m\xF3n \u0111\u1ED3 n\xE0o quan tr\u1ECDng v\xE0 \u0111\xE1ng \u0111\u1EA7u t\u01B0 h\u01A1n m\u1ED9t chi\u1EBFc \xE1o kho\xE1c \u1EA5m khi tr\u1EDDi chuy\u1EC3n l\u1EA1nh. \u0110\u1EC3 ch\u1ECDn \u0111\u01B0\u1EE3c chi\u1EBFc \xE1o kho\xE1c t\u1ED1t v\xE0 ph\xF9 h\u1EE3p nh\u1EA5t b\u1EA1n n\xEAn \u01B0u ti\xEAn 3 ti\xEAu ch\xED: ch\u1EA5t li\u1EC7u, ki\u1EC3u d\xE1ng v\xE0 s\u1EF1 ti\u1EC7n d\u1EE5ng. V\xEC sao ch\u1EA5t li\u1EC7u c\u1EA7n \u0111\u01B0\u1EE3c \u0111\u1EB7t l\xEAn h\xE0ng \u0111\u1EA7u? B\u1EDFi m\u1ED9t chi\u1EBFc \xE1o kho\xE1c c\xF3 ch\u1EA5t li\u1EC7u t\u1ED1t s\u1EBD th\u1EC3 hi\u1EC7n kh\u1EA3 n\u0103ng gi\u1EEF \u1EA5m tuy\u1EC7t v\u1EDDi c\u1EE7a n\xF3. M\xE0 tr\u1EDDi l\u1EA1nh th\xEC kh\xF4ng g\xEC qu\xFD gi\xE1 h\u01A1n s\u1EF1 \u1EA5m \xE1p ph\u1EA3i kh\xF4ng?."))), __jsx("div", {
  className: "tab-pane fade",
  id: "reviews_tabs",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 210
  },
  __self: undefined
}, __jsx("div", {
  className: "box-collateral box-reviews",
  id: "customer-reviews",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 211
  },
  __self: undefined
}, __jsx("div", {
  className: "box-reviews1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 215
  },
  __self: undefined
}, __jsx("div", {
  className: "form-add",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 216
  },
  __self: undefined
}, __jsx("form", {
  id: "review-form",
  method: "post",
  action: "http://www.jtvcommerce.com/review/product/post/id/176/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 217
  },
  __self: undefined
}, __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 222
  },
  __self: undefined
}, "Vi\u1EBFt \u0111\xE1nh gi\xE1 c\u1EE7a b\u1EA1n"), __jsx("fieldset", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 223
  },
  __self: undefined
}, __jsx("h4", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 224
  },
  __self: undefined
}, "L\xE0m th\u1EBF n\xE0o \u0111\u1EC3 b\u1EA1n \u0111\xE1nh gi\xE1 s\u1EA3n ph\u1EA9m n\xE0y?", " ", __jsx("em", {
  className: "required",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 226
  },
  __self: undefined
}, "*")), __jsx("span", {
  id: "input-message-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 228
  },
  __self: undefined
}), __jsx("table", {
  id: "product-review-table",
  className: "data-table",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 229
  },
  __self: undefined
}, __jsx("thead", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 233
  },
  __self: undefined
}, __jsx("tr", {
  className: "first last",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 234
  },
  __self: undefined
}, __jsx("th", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 235
  },
  __self: undefined
}, "\xA0"), __jsx("th", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 236
  },
  __self: undefined
}, __jsx("span", {
  className: "nobr",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 237
  },
  __self: undefined
}, "1 *")), __jsx("th", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 239
  },
  __self: undefined
}, __jsx("span", {
  className: "nobr",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 240
  },
  __self: undefined
}, "2 *")), __jsx("th", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 242
  },
  __self: undefined
}, __jsx("span", {
  className: "nobr",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 243
  },
  __self: undefined
}, "3 *")), __jsx("th", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 245
  },
  __self: undefined
}, __jsx("span", {
  className: "nobr",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 246
  },
  __self: undefined
}, "4 *")), __jsx("th", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 248
  },
  __self: undefined
}, __jsx("span", {
  className: "nobr",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 249
  },
  __self: undefined
}, "5 *")))), __jsx("tbody", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 253
  },
  __self: undefined
}, __jsx("tr", {
  className: "first odd",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 254
  },
  __self: undefined
}, __jsx("th", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 255
  },
  __self: undefined
}, "Gi\xE1 b\xE1n"), __jsx("td", {
  className: "value",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 256
  },
  __self: undefined
}, __jsx("input", {
  type: "radio",
  className: "radio",
  defaultValue: 11,
  id: "Price_1",
  name: "ratings[3]",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 257
  },
  __self: undefined
})), __jsx("td", {
  className: "value",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 265
  },
  __self: undefined
}, __jsx("input", {
  type: "radio",
  className: "radio",
  defaultValue: 12,
  id: "Price_2",
  name: "ratings[3]",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 266
  },
  __self: undefined
})), __jsx("td", {
  className: "value",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 274
  },
  __self: undefined
}, __jsx("input", {
  type: "radio",
  className: "radio",
  defaultValue: 13,
  id: "Price_3",
  name: "ratings[3]",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 275
  },
  __self: undefined
})), __jsx("td", {
  className: "value",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 283
  },
  __self: undefined
}, __jsx("input", {
  type: "radio",
  className: "radio",
  defaultValue: 14,
  id: "Price_4",
  name: "ratings[3]",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 284
  },
  __self: undefined
})), __jsx("td", {
  className: "value last",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 292
  },
  __self: undefined
}, __jsx("input", {
  type: "radio",
  className: "radio",
  defaultValue: 15,
  id: "Price_5",
  name: "ratings[3]",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 293
  },
  __self: undefined
}))), __jsx("tr", {
  className: "even",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 302
  },
  __self: undefined
}, __jsx("th", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 303
  },
  __self: undefined
}, "Gi\xE1 tr\u1ECB"), __jsx("td", {
  className: "value",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 304
  },
  __self: undefined
}, __jsx("input", {
  type: "radio",
  className: "radio",
  defaultValue: 6,
  id: "Value_1",
  name: "ratings[2]",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 305
  },
  __self: undefined
})), __jsx("td", {
  className: "value",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 313
  },
  __self: undefined
}, __jsx("input", {
  type: "radio",
  className: "radio",
  defaultValue: 7,
  id: "Value_2",
  name: "ratings[2]",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 314
  },
  __self: undefined
})), __jsx("td", {
  className: "value",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 322
  },
  __self: undefined
}, __jsx("input", {
  type: "radio",
  className: "radio",
  defaultValue: 8,
  id: "Value_3",
  name: "ratings[2]",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 323
  },
  __self: undefined
})), __jsx("td", {
  className: "value",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 331
  },
  __self: undefined
}, __jsx("input", {
  type: "radio",
  className: "radio",
  defaultValue: 9,
  id: "Value_4",
  name: "ratings[2]",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 332
  },
  __self: undefined
})), __jsx("td", {
  className: "value last",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 340
  },
  __self: undefined
}, __jsx("input", {
  type: "radio",
  className: "radio",
  defaultValue: 10,
  id: "Value_5",
  name: "ratings[2]",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 341
  },
  __self: undefined
}))), __jsx("tr", {
  className: "last odd",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 350
  },
  __self: undefined
}, __jsx("th", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 351
  },
  __self: undefined
}, "Ch\u1EA5t l\u01B0\u1EE3ng"), __jsx("td", {
  className: "value",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 352
  },
  __self: undefined
}, __jsx("input", {
  type: "radio",
  className: "radio",
  defaultValue: 1,
  id: "Quality_1",
  name: "ratings[1]",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 353
  },
  __self: undefined
})), __jsx("td", {
  className: "value",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 361
  },
  __self: undefined
}, __jsx("input", {
  type: "radio",
  className: "radio",
  defaultValue: 2,
  id: "Quality_2",
  name: "ratings[1]",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 362
  },
  __self: undefined
})), __jsx("td", {
  className: "value",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 370
  },
  __self: undefined
}, __jsx("input", {
  type: "radio",
  className: "radio",
  defaultValue: 3,
  id: "Quality_3",
  name: "ratings[1]",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 371
  },
  __self: undefined
})), __jsx("td", {
  className: "value",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 379
  },
  __self: undefined
}, __jsx("input", {
  type: "radio",
  className: "radio",
  defaultValue: 4,
  id: "Quality_4",
  name: "ratings[1]",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 380
  },
  __self: undefined
})), __jsx("td", {
  className: "value last",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 388
  },
  __self: undefined
}, __jsx("input", {
  type: "radio",
  className: "radio",
  defaultValue: 5,
  id: "Quality_5",
  name: "ratings[1]",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 389
  },
  __self: undefined
}))))), __jsx("input", {
  type: "hidden",
  defaultValue: true,
  className: "validate-rating",
  name: "validate_rating",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 400
  },
  __self: undefined
}), __jsx("div", {
  className: "review1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 406
  },
  __self: undefined
}, __jsx("ul", {
  className: "form-list",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 407
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 408
  },
  __self: undefined
}, __jsx("label", {
  className: "required",
  htmlFor: "nickname_field",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 409
  },
  __self: undefined
}, "H\u1ECD t\xEAn", __jsx("em", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 413
  },
  __self: undefined
}, "*")), __jsx("div", {
  className: "input-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 415
  },
  __self: undefined
}, __jsx("input", {
  type: "text",
  className: "input-text",
  id: "nickname_field",
  name: "nickname",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 416
  },
  __self: undefined
}))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 424
  },
  __self: undefined
}, __jsx("label", {
  className: "required",
  htmlFor: "summary_field",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 425
  },
  __self: undefined
}, "T\xF3m t\u1EAFt", __jsx("em", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 429
  },
  __self: undefined
}, "*")), __jsx("div", {
  className: "input-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 431
  },
  __self: undefined
}, __jsx("input", {
  type: "text",
  className: "input-text",
  id: "summary_field",
  name: "title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 432
  },
  __self: undefined
}))))), __jsx("div", {
  className: "review2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 442
  },
  __self: undefined
}, __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 443
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 444
  },
  __self: undefined
}, __jsx("label", {
  className: "required ",
  htmlFor: "review_field",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 445
  },
  __self: undefined
}, "\u0110\xE1nh gi\xE1", __jsx("em", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 449
  },
  __self: undefined
}, "*")), __jsx("div", {
  className: "input-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 451
  },
  __self: undefined
}, __jsx("textarea", {
  rows: 3,
  cols: 5,
  id: "review_field",
  name: "detail",
  defaultValue: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 452
  },
  __self: undefined
})))), __jsx("div", {
  className: "buttons-set",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 462
  },
  __self: undefined
}, __jsx("button", {
  className: "button submit",
  title: "Submit Review",
  type: "submit",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 463
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 468
  },
  __self: undefined
}, "G\u1EEDi \u0111\xE1nh gi\xE1")))))))))), __jsx("div", {
  className: "tab-pane fade",
  id: "product_tabs_custom",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 478
  },
  __self: undefined
}, __jsx("div", {
  className: "product-tabs-content-inner clearfix",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 479
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 480
  },
  __self: undefined
}, __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 481
  },
  __self: undefined
}, "1. Khu v\u1EF1c H\xE0 N\u1ED9i: (Ship h\xE0ng v\xE0o 16h chi\u1EC1u h\xE0ng ng\xE0y)")), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 485
  },
  __self: undefined
}, __jsx("i", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 486
  },
  __self: undefined
}, "* V\u1EDBi c\xE1c b\u1EA1n \u1EDF HN c\xF3 th\u1EC3 \u0111\u1EBFn tr\u1EF1c ti\u1EBFp c\u1EEDa h\xE0ng 146 X\xE3 \u0110\xE0n, 51 Xu\xE2n Th\u1EE7y, 390 Quang Trung, 491A Nguy\u1EC5n V\u0103n C\u1EEB (m\u1EDF c\u1EEDa t\u1EEB 8:00 am- 22:00 pm) \u0111\u1EC3 giao d\u1ECBch tr\u1EF1c ti\u1EBFp.")), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 492
  },
  __self: undefined
}, __jsx("i", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 493
  },
  __self: undefined
}, "* C\xE1c b\u1EA1n \u1EDF HN nh\u01B0ng kh\xF4ng c\xF3 c\xF3 \u0111i\u1EC1u ki\u1EC7n qua xem tr\u1EF1c ti\u1EBFp c\xF3 th\u1EC3 li\xEAn h\u1EC7 v\u1EDBi b\xEAn m\xECnh \u0111\u1EC3 \u0111c v\u1EADn chuy\u1EC3n v\xE0 thanh to\xE1n tr\u1EF1c ti\u1EBFp t\u1EA1i nh\xE0 b\u1EB1ng c\xE1ch inbox tr\u1EF1c ti\u1EBFp fb ho\u1EB7c chat tr\u1EF1c ti\u1EBFp tr\xEAn website Shop: https://h2tstore.vn")), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 501
  },
  __self: undefined
}, __jsx("i", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 502
  },
  __self: undefined
}, "(\u0110\u1ECBa ch\u1EC9 vs s\u1ED1 \u0111t ng\u01B0\u1EDDi nh\u1EADn + M\u1EABu \xE1o +M\u1EA7u \xE1o+ size ho\u1EB7c chi\u1EC1u cao c\xE2n n\u1EB7ng -->inbox t\u1EA1i https://www.facebook.com/shopH2T ho\u1EB7c g\u1EEDi \u0111\u01A1n h\xE0ng tr\xEAn web )")), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 509
  },
  __self: undefined
}, __jsx("i", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 510
  },
  __self: undefined
}, "(Gi\xE1 tr\u1ECB thanh to\xE1n = gi\xE1 tr\u1ECB h\xE0ng + 30K ti\u1EC1n ph\xED ship ko k\u1EC3 s\u1ED1 l\u01B0\u1EE3ng)")), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 515
  },
  __self: undefined
}, __jsx("b", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 516
  },
  __self: undefined
}, __jsx("i", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 517
  },
  __self: undefined
}, "Khi chuy\u1EC3n \u0111\u1EBFn s\u1EBD g\u1ECDi \u0111i\u1EC7n cho b\u1EA1n tr\u01B0\u1EDBc 30 ph\xFAt!")))))))))), __jsx("section", {
  className: "main-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 528
  },
  __self: undefined
}, __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 529
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 530
  },
  __self: undefined
}, __jsx("div", {
  className: "col-sm-12 col-xs-12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 531
  },
  __self: undefined
}, __jsx("div", {
  className: "jtv-trending-products",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 533
  },
  __self: undefined
}, __jsx("div", {
  className: "slider-items-products",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 534
  },
  __self: undefined
}, __jsx("div", {
  className: "jtv-new-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 535
  },
  __self: undefined
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 536
  },
  __self: undefined
}, "S\u1EA3n ph\u1EA9m t\u01B0\u01A1ng t\u1EF1")), __jsx("div", {
  id: "trending-slider",
  className: "product-flexslider hidden-buttons",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 538
  },
  __self: undefined
}, __jsx("div", {
  className: "slider-items slider-width-col4 products-grid",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 542
  },
  __self: undefined
}, __jsx("div", {
  className: "item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 543
  },
  __self: undefined
}, __jsx("div", {
  className: "item-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 544
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 545
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 546
  },
  __self: undefined
}, __jsx("a", {
  className: "product-image",
  title: "Product tilte is here",
  href: "./blog-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 547
  },
  __self: undefined
}, " ", __jsx("img", {
  alt: "Product tilte is here",
  src: "./images/at12.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 553
  },
  __self: undefined
}), " "), __jsx("div", {
  className: "new-label new-top-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 558
  },
  __self: undefined
}, "new"), __jsx("div", {
  className: "mask-shop-white",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 559
  },
  __self: undefined
}), __jsx("div", {
  className: "new-label new-top-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 560
  },
  __self: undefined
}, "new"), __jsx("a", {
  className: "quickview-btn",
  href: "quick-view.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 561
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 565
  },
  __self: undefined
}, "Xem nhanh")))), __jsx("div", {
  className: "item-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 569
  },
  __self: undefined
}, __jsx("div", {
  className: "info-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 570
  },
  __self: undefined
}, __jsx("div", {
  className: "item-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 571
  },
  __self: undefined
}, " ", __jsx("a", {
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 573
  },
  __self: undefined
}, "\xC1o thun da tr\u01A1n t\xFAi ng\u1EF1c", " ")), __jsx("div", {
  className: "item-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 580
  },
  __self: undefined
}, __jsx("div", {
  className: "rating",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 581
  },
  __self: undefined
}, " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 583
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 584
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 585
  },
  __self: undefined
}), __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 586
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 587
  },
  __self: undefined
})), __jsx("div", {
  className: "item-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 589
  },
  __self: undefined
}, __jsx("div", {
  className: "price-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 590
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "regular-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 592
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 594
  },
  __self: undefined
}, "320.000\u0111")))), __jsx("div", {
  className: "actions",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 598
  },
  __self: undefined
}, __jsx("div", {
  className: "add_cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 599
  },
  __self: undefined
}, __jsx("button", {
  className: "button btn-cart",
  type: "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 600
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 604
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-shopping-cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 605
  },
  __self: undefined
}), " ", "Th\xEAm v\xE0o gi\u1ECF h\xE0ng"))))))))), __jsx("div", {
  className: "item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 616
  },
  __self: undefined
}, __jsx("div", {
  className: "item-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 617
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 618
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 619
  },
  __self: undefined
}, __jsx("a", {
  className: "product-image",
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 620
  },
  __self: undefined
}, " ", __jsx("img", {
  alt: "Product tilte is here",
  src: "./images/at13.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 626
  },
  __self: undefined
}), " "), __jsx("div", {
  className: "sale-label sale-top-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 631
  },
  __self: undefined
}, "Sale"), __jsx("div", {
  className: "mask-shop-white",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 634
  },
  __self: undefined
}), __jsx("div", {
  className: "new-label new-top-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 635
  },
  __self: undefined
}, "new"), __jsx("a", {
  className: "quickview-btn",
  href: "quick-view.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 636
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 640
  },
  __self: undefined
}, "Xem nhanh")))), __jsx("div", {
  className: "item-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 644
  },
  __self: undefined
}, __jsx("div", {
  className: "info-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 645
  },
  __self: undefined
}, __jsx("div", {
  className: "item-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 646
  },
  __self: undefined
}, " ", __jsx("a", {
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 648
  },
  __self: undefined
}, "\xC1o wash in h\xECnh", " "), " "), __jsx("div", {
  className: "item-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 655
  },
  __self: undefined
}, __jsx("div", {
  className: "rating",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 656
  },
  __self: undefined
}, " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 658
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 659
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 660
  },
  __self: undefined
}), __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 661
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 662
  },
  __self: undefined
})), __jsx("div", {
  className: "item-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 664
  },
  __self: undefined
}, __jsx("div", {
  className: "price-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 665
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "regular-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 667
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 669
  },
  __self: undefined
}, "530.000\u0111")))), __jsx("div", {
  className: "actions",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 673
  },
  __self: undefined
}, __jsx("div", {
  className: "add_cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 674
  },
  __self: undefined
}, __jsx("button", {
  className: "button btn-cart",
  type: "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 675
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 679
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-shopping-cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 680
  },
  __self: undefined
}), " ", "Th\xEAm v\xE0o gi\u1ECF h\xE0ng"))))))))), __jsx("div", {
  className: "item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 691
  },
  __self: undefined
}, __jsx("div", {
  className: "item-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 692
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 693
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 694
  },
  __self: undefined
}, __jsx("a", {
  className: "product-image",
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 695
  },
  __self: undefined
}, " ", __jsx("img", {
  alt: "Product tilte is here",
  src: "./images/at14.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 701
  },
  __self: undefined
}), " "), __jsx("div", {
  className: "mask-shop-white",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 706
  },
  __self: undefined
}), __jsx("div", {
  className: "new-label new-top-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 707
  },
  __self: undefined
}, "new"), __jsx("a", {
  className: "quickview-btn",
  href: "quick-view.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 708
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 712
  },
  __self: undefined
}, "Xem nhanh")))), __jsx("div", {
  className: "item-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 716
  },
  __self: undefined
}, __jsx("div", {
  className: "info-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 717
  },
  __self: undefined
}, __jsx("div", {
  className: "item-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 718
  },
  __self: undefined
}, " ", __jsx("a", {
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 720
  },
  __self: undefined
}, "\xC1o thun th\u1EC3 thao", " "), " "), __jsx("div", {
  className: "item-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 727
  },
  __self: undefined
}, __jsx("div", {
  className: "rating",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 728
  },
  __self: undefined
}, " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 730
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 731
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 732
  },
  __self: undefined
}), __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 733
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 734
  },
  __self: undefined
})), __jsx("div", {
  className: "item-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 736
  },
  __self: undefined
}, __jsx("div", {
  className: "price-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 737
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "regular-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 739
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 741
  },
  __self: undefined
}, "720.000\u0111")))), __jsx("div", {
  className: "actions",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 745
  },
  __self: undefined
}, __jsx("div", {
  className: "add_cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 746
  },
  __self: undefined
}, __jsx("button", {
  className: "button btn-cart",
  type: "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 747
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 751
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-shopping-cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 752
  },
  __self: undefined
}), " ", "Th\xEAm v\xE0o gi\u1ECF h\xE0ng"))))))))), __jsx("div", {
  className: "item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 763
  },
  __self: undefined
}, __jsx("div", {
  className: "item-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 764
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 765
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 766
  },
  __self: undefined
}, __jsx("a", {
  className: "product-image",
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 767
  },
  __self: undefined
}, " ", __jsx("img", {
  alt: "Product tilte is here",
  src: "./images/aothun4.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 773
  },
  __self: undefined
}), " "), __jsx("div", {
  className: "sale-label sale-top-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 778
  },
  __self: undefined
}, "Sale"), __jsx("div", {
  className: "mask-shop-white",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 781
  },
  __self: undefined
}), __jsx("div", {
  className: "new-label new-top-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 782
  },
  __self: undefined
}, "new"), __jsx("a", {
  className: "quickview-btn",
  href: "quick-view.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 783
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 787
  },
  __self: undefined
}, "Xem nhanh")))), __jsx("div", {
  className: "item-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 791
  },
  __self: undefined
}, __jsx("div", {
  className: "info-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 792
  },
  __self: undefined
}, __jsx("div", {
  className: "item-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 793
  },
  __self: undefined
}, " ", __jsx("a", {
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 795
  },
  __self: undefined
}, "\xC1o len c\u1ED9c tay m\xF9a h\xE8", " "), " "), __jsx("div", {
  className: "item-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 802
  },
  __self: undefined
}, __jsx("div", {
  className: "rating",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 803
  },
  __self: undefined
}, " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 805
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 806
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 807
  },
  __self: undefined
}), __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 808
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 809
  },
  __self: undefined
})), __jsx("div", {
  className: "item-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 811
  },
  __self: undefined
}, __jsx("div", {
  className: "price-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 812
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "regular-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 814
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 816
  },
  __self: undefined
}, "640.000\u0111")))), __jsx("div", {
  className: "actions",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 820
  },
  __self: undefined
}, __jsx("div", {
  className: "add_cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 821
  },
  __self: undefined
}, __jsx("button", {
  className: "button btn-cart",
  type: "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 822
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 826
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-shopping-cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 827
  },
  __self: undefined
}), " ", "Th\xEAm v\xE0o gi\u1ECF h\xE0ng"))))))))), __jsx("div", {
  className: "item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 838
  },
  __self: undefined
}, __jsx("div", {
  className: "item-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 839
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 840
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 841
  },
  __self: undefined
}, __jsx("a", {
  className: "product-image",
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 842
  },
  __self: undefined
}, " ", __jsx("img", {
  alt: "Product tilte is here",
  src: "./images/at1.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 848
  },
  __self: undefined
}), " "), __jsx("div", {
  className: "mask-shop-white",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 853
  },
  __self: undefined
}), __jsx("div", {
  className: "new-label new-top-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 854
  },
  __self: undefined
}, "new"), __jsx("a", {
  className: "quickview-btn",
  href: "quick-view.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 855
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 859
  },
  __self: undefined
}, "Xem nhanh")))), __jsx("div", {
  className: "item-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 863
  },
  __self: undefined
}, __jsx("div", {
  className: "info-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 864
  },
  __self: undefined
}, __jsx("div", {
  className: "item-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 865
  },
  __self: undefined
}, " ", __jsx("a", {
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 867
  },
  __self: undefined
}, "\xC1o thun c\u1ED5 tr\xF2n miix", " "), " "), __jsx("div", {
  className: "item-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 874
  },
  __self: undefined
}, __jsx("div", {
  className: "rating",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 875
  },
  __self: undefined
}, " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 877
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 878
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 879
  },
  __self: undefined
}), __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 880
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 881
  },
  __self: undefined
})), __jsx("div", {
  className: "item-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 883
  },
  __self: undefined
}, __jsx("div", {
  className: "price-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 884
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "regular-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 886
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 888
  },
  __self: undefined
}, "870.000\u0111")))), __jsx("div", {
  className: "actions",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 892
  },
  __self: undefined
}, __jsx("div", {
  className: "add_cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 893
  },
  __self: undefined
}, __jsx("button", {
  className: "button btn-cart",
  type: "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 894
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 898
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-shopping-cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 899
  },
  __self: undefined
}), " ", "Th\xEAm v\xE0o gi\u1ECF h\xE0ng"))))))))), __jsx("div", {
  className: "item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 910
  },
  __self: undefined
}, __jsx("div", {
  className: "item-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 911
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 912
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 913
  },
  __self: undefined
}, __jsx("a", {
  className: "product-image",
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 914
  },
  __self: undefined
}, " ", __jsx("img", {
  alt: "Product tilte is here",
  src: "./images/at10.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 920
  },
  __self: undefined
}), " "), __jsx("div", {
  className: "sale-label sale-top-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 925
  },
  __self: undefined
}, "Sale"), __jsx("div", {
  className: "mask-shop-white",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 928
  },
  __self: undefined
}), __jsx("div", {
  className: "new-label new-top-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 929
  },
  __self: undefined
}, "new"), __jsx("a", {
  className: "quickview-btn",
  href: "quick-view.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 930
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 934
  },
  __self: undefined
}, "Xem nhanh")))), __jsx("div", {
  className: "item-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 938
  },
  __self: undefined
}, __jsx("div", {
  className: "info-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 939
  },
  __self: undefined
}, __jsx("div", {
  className: "item-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 940
  },
  __self: undefined
}, " ", __jsx("a", {
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 942
  },
  __self: undefined
}, "\xC1o thun 3 l\u1ED7", " "), " "), __jsx("div", {
  className: "item-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 949
  },
  __self: undefined
}, __jsx("div", {
  className: "rating",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 950
  },
  __self: undefined
}, " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 952
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 953
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 954
  },
  __self: undefined
}), __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 955
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 956
  },
  __self: undefined
})), __jsx("div", {
  className: "item-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 958
  },
  __self: undefined
}, __jsx("div", {
  className: "price-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 959
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "regular-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 961
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 963
  },
  __self: undefined
}, "440.000\u0111")))), __jsx("div", {
  className: "actions",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 967
  },
  __self: undefined
}, __jsx("div", {
  className: "add_cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 968
  },
  __self: undefined
}, __jsx("button", {
  className: "button btn-cart",
  type: "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 969
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 973
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-shopping-cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 974
  },
  __self: undefined
}), " ", "Th\xEAm v\xE0o gi\u1ECF h\xE0ng"))))))))), __jsx("div", {
  className: "item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 985
  },
  __self: undefined
}, __jsx("div", {
  className: "item-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 986
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 987
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 988
  },
  __self: undefined
}, __jsx("a", {
  className: "product-image",
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 989
  },
  __self: undefined
}, " ", __jsx("img", {
  alt: "Product tilte is here",
  src: "./images/at11.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 995
  },
  __self: undefined
}), " "), __jsx("div", {
  className: "mask-shop-white",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1000
  },
  __self: undefined
}), __jsx("div", {
  className: "new-label new-top-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1001
  },
  __self: undefined
}, "new"), __jsx("a", {
  className: "quickview-btn",
  href: "quick-view.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1002
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1006
  },
  __self: undefined
}, "Xem nhanh")))), __jsx("div", {
  className: "item-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1010
  },
  __self: undefined
}, __jsx("div", {
  className: "info-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1011
  },
  __self: undefined
}, __jsx("div", {
  className: "item-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1012
  },
  __self: undefined
}, " ", __jsx("a", {
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1014
  },
  __self: undefined
}, "\xC1o ph\xF4ng c\u1ED5 tr\xF2n cao c\u1EA5p", " "), " "), __jsx("div", {
  className: "item-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1021
  },
  __self: undefined
}, __jsx("div", {
  className: "rating",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1022
  },
  __self: undefined
}, " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1024
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1025
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1026
  },
  __self: undefined
}), __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1027
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1028
  },
  __self: undefined
})), __jsx("div", {
  className: "item-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1030
  },
  __self: undefined
}, __jsx("div", {
  className: "price-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1031
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "regular-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1033
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1035
  },
  __self: undefined
}, "760.000\u0111")))), __jsx("div", {
  className: "actions",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1039
  },
  __self: undefined
}, __jsx("div", {
  className: "add_cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1040
  },
  __self: undefined
}, __jsx("button", {
  className: "button btn-cart",
  type: "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1041
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1045
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-shopping-cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1046
  },
  __self: undefined
}), " ", "Th\xEAm v\xE0o gi\u1ECF h\xE0ng")))))))))))))))))));

/* harmony default export */ __webpack_exports__["default"] = (ProductDetail);

/***/ }),

/***/ 5:
/*!**********************************!*\
  !*** multi ./pages/shop/[id].js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\DELL\Desktop\carponextjs\pages\shop\[id].js */"./pages/shop/[id].js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map
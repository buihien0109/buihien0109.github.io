module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
var _jsxFileName = "C:\\Users\\ADMIN\\Desktop\\Web-front end\\NextJS\\carponextjs\\components\\CarpoLayout.js";

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
var _jsxFileName = "C:\\Users\\ADMIN\\Desktop\\Web-front end\\NextJS\\carponextjs\\components\\Footer.js";

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
var _jsxFileName = "C:\\Users\\ADMIN\\Desktop\\Web-front end\\NextJS\\carponextjs\\components\\Header.js";

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
  href: "/shop",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, __jsx("a", {
  className: "nav-link text-uppercase text-white",
  href: "./shop.html",
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CarpoLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CarpoLayout */ "./components/CarpoLayout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\ADMIN\\Desktop\\Web-front end\\NextJS\\carponextjs\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Index = () => __jsx(_components_CarpoLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "Home page")), __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("div", {
  className: "container jtv-home-revslider",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("div", {
  className: "col-lg-9 col-sm-9 col-xs-12 jtv-main-home-slider",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("div", {
  className: "banner-block",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, " ", __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, " ", __jsx("img", {
  src: "./images/l-post8.jpg",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}), " "), __jsx("div", {
  className: "text-des-container pad-zero",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("div", {
  className: "text-des",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, "B\u1ED9 s\u01B0u t\u1EADp"), __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, "Thu - \u0110\xF4ng 2019"), __jsx("p", {
  className: "text-danger",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, "Tham gia \u0111\u1EC3 nh\u1EADn c\u01A1 h\u1ED9i gi\u1EA3m gi\xE1 l\xEAn \u0111\u1EBFn 50%"))))), __jsx("div", {
  className: "col-lg-3 col-md-3 col-sm-3 col-xs-12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, __jsx("div", {
  className: "banner-block",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, " ", __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, " ", __jsx("img", {
  src: "./images/l-post5.jpg",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}), " "), __jsx("div", {
  className: "text-des-container pad-zero",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, __jsx("div", {
  className: "text-des",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, "Phong c\xE1ch m\u1EDBi l\u1EA1"), __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, "Ph\u1EE5 ki\u1EC7n nam")))), __jsx("div", {
  className: "banner-block",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, " ", __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, " ", __jsx("img", {
  src: "./images/l-post6.jpg",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}), " "), __jsx("div", {
  className: "text-des-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, __jsx("div", {
  className: "text-des",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, "Xu h\u01B0\u1EDBng 2019"), __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, "B\u1ED9 s\u01B0u t\u1EADp"))))))), __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
}, __jsx("div", {
  className: "support-policy-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, __jsx("div", {
  className: "col-md-4 col-sm-4 col-xs-12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
}, __jsx("div", {
  className: "support-policy",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66
  },
  __self: undefined
}, " ", __jsx("i", {
  className: "fa fa-truck",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
}), __jsx("div", {
  className: "content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
}, "Mi\u1EC5n ph\xED \u0111\u01A1n h\xE0ng tr\xEAn 500.000"))), __jsx("div", {
  className: "col-md-4 col-sm-4 col-xs-12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}, __jsx("div", {
  className: "support-policy",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73
  },
  __self: undefined
}, " ", __jsx("i", {
  className: "fa fa-phone",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75
  },
  __self: undefined
}), __jsx("div", {
  className: "content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
}, "H\u1ED7 tr\u1EE3 +1 123 456 7890"))), __jsx("div", {
  className: "col-md-4 col-sm-4 col-xs-12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79
  },
  __self: undefined
}, __jsx("div", {
  className: "support-policy",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}, " ", __jsx("i", {
  className: "fa fa-refresh",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82
  },
  __self: undefined
}), __jsx("div", {
  className: "content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83
  },
  __self: undefined
}, "30 ng\xE0y \u0111\u1ED5i tr\u1EA3")))))), __jsx("section", {
  className: "main-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90
  },
  __self: undefined
}, __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92
  },
  __self: undefined
}, __jsx("div", {
  className: "col-sm-12 col-xs-12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93
  },
  __self: undefined
}, __jsx("div", {
  className: "jtv-trending-products",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95
  },
  __self: undefined
}, __jsx("div", {
  className: "slider-items-products",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96
  },
  __self: undefined
}, __jsx("div", {
  className: "jtv-new-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97
  },
  __self: undefined
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98
  },
  __self: undefined
}, "S\u1EA3n ph\u1EA9m m\u1EDBi nh\u1EA5t")), __jsx("div", {
  id: "latest-slider",
  className: "product-flexslider hidden-buttons",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100
  },
  __self: undefined
}, __jsx("div", {
  className: "slider-items slider-width-col4 products-grid",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
}, __jsx("div", {
  className: "item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105
  },
  __self: undefined
}, __jsx("div", {
  className: "item-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108
  },
  __self: undefined
}, __jsx("a", {
  className: "product-image",
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109
  },
  __self: undefined
}, " ", __jsx("img", {
  alt: "Product tilte is here",
  src: "./images/at2.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115
  },
  __self: undefined
}), " "), __jsx("div", {
  className: "new-label new-top-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 120
  },
  __self: undefined
}, "new"), __jsx("div", {
  className: "mask-shop-white",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 121
  },
  __self: undefined
}), __jsx("div", {
  className: "new-label new-top-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 122
  },
  __self: undefined
}, "new"), __jsx("a", {
  className: "quickview-btn",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 123
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 127
  },
  __self: undefined
}, "Xem nhanh")))), __jsx("div", {
  className: "item-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 131
  },
  __self: undefined
}, __jsx("div", {
  className: "info-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 132
  },
  __self: undefined
}, __jsx("div", {
  className: "item-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 133
  },
  __self: undefined
}, " ", __jsx("a", {
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 135
  },
  __self: undefined
}, "\xC1o thun da tr\u01A1n t\xFAi ng\u1EF1c", " ")), __jsx("div", {
  className: "item-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 142
  },
  __self: undefined
}, __jsx("div", {
  className: "rating",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 143
  },
  __self: undefined
}, " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 145
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 146
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 147
  },
  __self: undefined
}), __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 148
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 149
  },
  __self: undefined
})), __jsx("div", {
  className: "item-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 151
  },
  __self: undefined
}, __jsx("div", {
  className: "price-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 152
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "regular-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 154
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 156
  },
  __self: undefined
}, "320.000\u0111")))), __jsx("div", {
  className: "actions",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 160
  },
  __self: undefined
}, __jsx("div", {
  className: "add_cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 161
  },
  __self: undefined
}, __jsx("a", {
  href: "./shopping-card.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 162
  },
  __self: undefined
}, __jsx("button", {
  className: "button btn-cart",
  type: "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 163
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 167
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-shopping-cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 168
  },
  __self: undefined
}), " ", "Th\xEAm v\xE0o gi\u1ECF h\xE0ng")))))))))), __jsx("div", {
  className: "item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 180
  },
  __self: undefined
}, __jsx("div", {
  className: "item-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 181
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 182
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 183
  },
  __self: undefined
}, __jsx("a", {
  className: "product-image",
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 184
  },
  __self: undefined
}, " ", __jsx("img", {
  alt: "Product tilte is here",
  src: "./images/at3.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 190
  },
  __self: undefined
}), " "), __jsx("div", {
  className: "sale-label sale-top-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 195
  },
  __self: undefined
}, "Sale"), __jsx("div", {
  className: "mask-shop-white",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 198
  },
  __self: undefined
}), __jsx("div", {
  className: "new-label new-top-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 199
  },
  __self: undefined
}, "new"), __jsx("a", {
  className: "quickview-btn",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 200
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 204
  },
  __self: undefined
}, "Xem nhanh")))), __jsx("div", {
  className: "item-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 208
  },
  __self: undefined
}, __jsx("div", {
  className: "info-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 209
  },
  __self: undefined
}, __jsx("div", {
  className: "item-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 210
  },
  __self: undefined
}, " ", __jsx("a", {
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 212
  },
  __self: undefined
}, "\xC1o wash in h\xECnh", " "), " "), __jsx("div", {
  className: "item-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 219
  },
  __self: undefined
}, __jsx("div", {
  className: "rating",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 220
  },
  __self: undefined
}, " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 222
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 223
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 224
  },
  __self: undefined
}), __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 225
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 226
  },
  __self: undefined
})), __jsx("div", {
  className: "item-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 228
  },
  __self: undefined
}, __jsx("div", {
  className: "price-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 229
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "regular-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 231
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 233
  },
  __self: undefined
}, "530.000\u0111")))), __jsx("div", {
  className: "actions",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 237
  },
  __self: undefined
}, __jsx("div", {
  className: "add_cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 238
  },
  __self: undefined
}, __jsx("a", {
  href: "./shopping-card.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 239
  },
  __self: undefined
}, __jsx("button", {
  className: "button btn-cart",
  type: "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 240
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 244
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-shopping-cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 245
  },
  __self: undefined
}), " ", "Th\xEAm v\xE0o gi\u1ECF h\xE0ng")))))))))), __jsx("div", {
  className: "item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 257
  },
  __self: undefined
}, __jsx("div", {
  className: "item-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 258
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 259
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 260
  },
  __self: undefined
}, __jsx("a", {
  className: "product-image",
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 261
  },
  __self: undefined
}, " ", __jsx("img", {
  alt: "Product tilte is here",
  src: "./images/at4.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 267
  },
  __self: undefined
}), " "), __jsx("div", {
  className: "mask-shop-white",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 272
  },
  __self: undefined
}), __jsx("div", {
  className: "new-label new-top-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 273
  },
  __self: undefined
}, "new"), __jsx("a", {
  className: "quickview-btn",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 274
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 278
  },
  __self: undefined
}, "Xem nhanh")))), __jsx("div", {
  className: "item-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 282
  },
  __self: undefined
}, __jsx("div", {
  className: "info-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 283
  },
  __self: undefined
}, __jsx("div", {
  className: "item-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 284
  },
  __self: undefined
}, " ", __jsx("a", {
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 286
  },
  __self: undefined
}, "\xC1o thun th\u1EC3 thao", " "), " "), __jsx("div", {
  className: "item-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 293
  },
  __self: undefined
}, __jsx("div", {
  className: "rating",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 294
  },
  __self: undefined
}, " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 296
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 297
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 298
  },
  __self: undefined
}), __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 299
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 300
  },
  __self: undefined
})), __jsx("div", {
  className: "item-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 302
  },
  __self: undefined
}, __jsx("div", {
  className: "price-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 303
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "regular-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 305
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 307
  },
  __self: undefined
}, "720.000\u0111")))), __jsx("div", {
  className: "actions",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 311
  },
  __self: undefined
}, __jsx("div", {
  className: "add_cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 312
  },
  __self: undefined
}, __jsx("a", {
  href: "./shopping-card.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 313
  },
  __self: undefined
}, __jsx("button", {
  className: "button btn-cart",
  type: "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 314
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 318
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-shopping-cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 319
  },
  __self: undefined
}), " ", "Th\xEAm v\xE0o gi\u1ECF h\xE0ng")))))))))), __jsx("div", {
  className: "item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 331
  },
  __self: undefined
}, __jsx("div", {
  className: "item-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 332
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 333
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 334
  },
  __self: undefined
}, __jsx("a", {
  className: "product-image",
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 335
  },
  __self: undefined
}, " ", __jsx("img", {
  alt: "Product tilte is here",
  src: "./images/at5.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 341
  },
  __self: undefined
}), " "), __jsx("div", {
  className: "sale-label sale-top-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 346
  },
  __self: undefined
}, "Sale"), __jsx("div", {
  className: "mask-shop-white",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 349
  },
  __self: undefined
}), __jsx("div", {
  className: "new-label new-top-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 350
  },
  __self: undefined
}, "new"), __jsx("a", {
  className: "quickview-btn",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 351
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 355
  },
  __self: undefined
}, "Xem nhanh")))), __jsx("div", {
  className: "item-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 359
  },
  __self: undefined
}, __jsx("div", {
  className: "info-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 360
  },
  __self: undefined
}, __jsx("div", {
  className: "item-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 361
  },
  __self: undefined
}, " ", __jsx("a", {
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 363
  },
  __self: undefined
}, "\xC1o len c\u1ED9c tay m\xF9a h\xE8", " ")), __jsx("div", {
  className: "item-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 370
  },
  __self: undefined
}, __jsx("div", {
  className: "rating",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 371
  },
  __self: undefined
}, " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 373
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 374
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 375
  },
  __self: undefined
}), __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 376
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 377
  },
  __self: undefined
})), __jsx("div", {
  className: "item-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 379
  },
  __self: undefined
}, __jsx("div", {
  className: "price-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 380
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "regular-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 382
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 384
  },
  __self: undefined
}, "640.000\u0111")))), __jsx("div", {
  className: "actions",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 388
  },
  __self: undefined
}, __jsx("div", {
  className: "add_cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 389
  },
  __self: undefined
}, __jsx("a", {
  href: "./shopping-card.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 390
  },
  __self: undefined
}, __jsx("button", {
  className: "button btn-cart",
  type: "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 391
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 395
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-shopping-cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 396
  },
  __self: undefined
}), " ", "Th\xEAm v\xE0o gi\u1ECF h\xE0ng")))))))))), __jsx("div", {
  className: "item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 408
  },
  __self: undefined
}, __jsx("div", {
  className: "item-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 409
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 410
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 411
  },
  __self: undefined
}, __jsx("a", {
  className: "product-image",
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 412
  },
  __self: undefined
}, " ", __jsx("img", {
  alt: "Product tilte is here",
  src: "./images/at6.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 418
  },
  __self: undefined
}), " "), __jsx("div", {
  className: "mask-shop-white",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 423
  },
  __self: undefined
}), __jsx("div", {
  className: "new-label new-top-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 424
  },
  __self: undefined
}, "new"), __jsx("a", {
  className: "quickview-btn",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 425
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 429
  },
  __self: undefined
}, "Xem nhanh")))), __jsx("div", {
  className: "item-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 433
  },
  __self: undefined
}, __jsx("div", {
  className: "info-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 434
  },
  __self: undefined
}, __jsx("div", {
  className: "item-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 435
  },
  __self: undefined
}, " ", __jsx("a", {
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 437
  },
  __self: undefined
}, "\xC1o thun c\u1ED5 tr\xF2n miix", " ")), __jsx("div", {
  className: "item-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 444
  },
  __self: undefined
}, __jsx("div", {
  className: "rating",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 445
  },
  __self: undefined
}, " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 447
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 448
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 449
  },
  __self: undefined
}), __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 450
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 451
  },
  __self: undefined
})), __jsx("div", {
  className: "item-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 453
  },
  __self: undefined
}, __jsx("div", {
  className: "price-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 454
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "regular-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 456
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 458
  },
  __self: undefined
}, "870.000\u0111")))), __jsx("div", {
  className: "actions",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 462
  },
  __self: undefined
}, __jsx("div", {
  className: "add_cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 463
  },
  __self: undefined
}, __jsx("a", {
  href: "./shopping-card.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 464
  },
  __self: undefined
}, __jsx("button", {
  className: "button btn-cart",
  type: "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 465
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 469
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-shopping-cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 470
  },
  __self: undefined
}), " ", "Th\xEAm v\xE0o gi\u1ECF h\xE0ng")))))))))), __jsx("div", {
  className: "item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 482
  },
  __self: undefined
}, __jsx("div", {
  className: "item-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 483
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 484
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 485
  },
  __self: undefined
}, __jsx("a", {
  className: "product-image",
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 486
  },
  __self: undefined
}, " ", __jsx("img", {
  alt: "Product tilte is here",
  src: "./images/at8.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 492
  },
  __self: undefined
}), " "), __jsx("div", {
  className: "sale-label sale-top-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 497
  },
  __self: undefined
}, "Sale"), __jsx("div", {
  className: "mask-shop-white",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 500
  },
  __self: undefined
}), __jsx("div", {
  className: "new-label new-top-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 501
  },
  __self: undefined
}, "new"), __jsx("a", {
  className: "quickview-btn",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 502
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 506
  },
  __self: undefined
}, "Xem nhanh")))), __jsx("div", {
  className: "item-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 510
  },
  __self: undefined
}, __jsx("div", {
  className: "info-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 511
  },
  __self: undefined
}, __jsx("div", {
  className: "item-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 512
  },
  __self: undefined
}, " ", __jsx("a", {
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 514
  },
  __self: undefined
}, "\xC1o thun 3 l\u1ED7", " "), " "), __jsx("div", {
  className: "item-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 521
  },
  __self: undefined
}, __jsx("div", {
  className: "rating",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 522
  },
  __self: undefined
}, " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 524
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 525
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 526
  },
  __self: undefined
}), __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 527
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 528
  },
  __self: undefined
})), __jsx("div", {
  className: "item-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 530
  },
  __self: undefined
}, __jsx("div", {
  className: "price-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 531
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "regular-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 533
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 535
  },
  __self: undefined
}, "440.000\u0111")))), __jsx("div", {
  className: "actions",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 539
  },
  __self: undefined
}, __jsx("div", {
  className: "add_cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 540
  },
  __self: undefined
}, __jsx("a", {
  href: "./shopping-card.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 541
  },
  __self: undefined
}, __jsx("button", {
  className: "button btn-cart",
  type: "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 542
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 546
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-shopping-cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 547
  },
  __self: undefined
}), " ", "Th\xEAm v\xE0o gi\u1ECF h\xE0ng")))))))))), __jsx("div", {
  className: "item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 559
  },
  __self: undefined
}, __jsx("div", {
  className: "item-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 560
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 561
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 562
  },
  __self: undefined
}, __jsx("a", {
  className: "product-image",
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 563
  },
  __self: undefined
}, " ", __jsx("img", {
  alt: "Product tilte is here",
  src: "./images/at9.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 569
  },
  __self: undefined
}), " "), __jsx("div", {
  className: "mask-shop-white",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 574
  },
  __self: undefined
}), __jsx("div", {
  className: "new-label new-top-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 575
  },
  __self: undefined
}, "new"), __jsx("a", {
  className: "quickview-btn",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 576
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 580
  },
  __self: undefined
}, "Xem nhanh")))), __jsx("div", {
  className: "item-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 584
  },
  __self: undefined
}, __jsx("div", {
  className: "info-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 585
  },
  __self: undefined
}, __jsx("div", {
  className: "item-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 586
  },
  __self: undefined
}, " ", __jsx("a", {
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 588
  },
  __self: undefined
}, "\xC1o ph\xF4ng c\u1ED5 tr\xF2n cao c\u1EA5p", " ")), __jsx("div", {
  className: "item-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 595
  },
  __self: undefined
}, __jsx("div", {
  className: "rating",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 596
  },
  __self: undefined
}, " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 598
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 599
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 600
  },
  __self: undefined
}), __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 601
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 602
  },
  __self: undefined
})), __jsx("div", {
  className: "item-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 604
  },
  __self: undefined
}, __jsx("div", {
  className: "price-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 605
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "regular-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 607
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 609
  },
  __self: undefined
}, "760.000\u0111")))), __jsx("div", {
  className: "actions",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 613
  },
  __self: undefined
}, __jsx("div", {
  className: "add_cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 614
  },
  __self: undefined
}, __jsx("a", {
  href: "./shopping-card.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 615
  },
  __self: undefined
}, __jsx("button", {
  className: "button btn-cart",
  type: "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 616
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 620
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-shopping-cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 621
  },
  __self: undefined
}), " ", "Th\xEAm v\xE0o gi\u1ECF h\xE0ng")))))))))))))))))), __jsx("section", {
  className: "main-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 643
  },
  __self: undefined
}, __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 644
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 645
  },
  __self: undefined
}, __jsx("div", {
  className: "col-sm-12 col-xs-12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 646
  },
  __self: undefined
}, __jsx("div", {
  className: "jtv-trending-products",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 648
  },
  __self: undefined
}, __jsx("div", {
  className: "slider-items-products",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 649
  },
  __self: undefined
}, __jsx("div", {
  className: "jtv-new-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 650
  },
  __self: undefined
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 651
  },
  __self: undefined
}, "S\u1EA3n ph\u1EA9m b\xE1n ch\u1EA1y")), __jsx("div", {
  id: "trending-slider",
  className: "product-flexslider hidden-buttons",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 653
  },
  __self: undefined
}, __jsx("div", {
  className: "slider-items slider-width-col4 products-grid",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 657
  },
  __self: undefined
}, __jsx("div", {
  className: "item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 658
  },
  __self: undefined
}, __jsx("div", {
  className: "item-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 659
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 660
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 661
  },
  __self: undefined
}, __jsx("a", {
  className: "product-image",
  title: "Product tilte is here",
  href: "./blog-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 662
  },
  __self: undefined
}, " ", __jsx("img", {
  alt: "Product tilte is here",
  src: "./images/at12.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 668
  },
  __self: undefined
}), " "), __jsx("div", {
  className: "new-label new-top-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 673
  },
  __self: undefined
}, "new"), __jsx("div", {
  className: "mask-shop-white",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 674
  },
  __self: undefined
}), __jsx("div", {
  className: "new-label new-top-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 675
  },
  __self: undefined
}, "new"), __jsx("a", {
  className: "quickview-btn",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 676
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 680
  },
  __self: undefined
}, "Xem nhanh")))), __jsx("div", {
  className: "item-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 684
  },
  __self: undefined
}, __jsx("div", {
  className: "info-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 685
  },
  __self: undefined
}, __jsx("div", {
  className: "item-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 686
  },
  __self: undefined
}, " ", __jsx("a", {
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 688
  },
  __self: undefined
}, "\xC1o thun da tr\u01A1n t\xFAi ng\u1EF1c", " ")), __jsx("div", {
  className: "item-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 695
  },
  __self: undefined
}, __jsx("div", {
  className: "rating",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 696
  },
  __self: undefined
}, " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 698
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 699
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 700
  },
  __self: undefined
}), __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 701
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 702
  },
  __self: undefined
})), __jsx("div", {
  className: "item-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 704
  },
  __self: undefined
}, __jsx("div", {
  className: "price-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 705
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "regular-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 707
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 709
  },
  __self: undefined
}, "320.000\u0111")))), __jsx("div", {
  className: "actions",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 713
  },
  __self: undefined
}, __jsx("div", {
  className: "add_cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 714
  },
  __self: undefined
}, __jsx("a", {
  href: "./shopping-card.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 715
  },
  __self: undefined
}, __jsx("button", {
  className: "button btn-cart",
  type: "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 716
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 720
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-shopping-cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 721
  },
  __self: undefined
}), " ", "Th\xEAm v\xE0o gi\u1ECF h\xE0ng")))))))))), __jsx("div", {
  className: "item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 733
  },
  __self: undefined
}, __jsx("div", {
  className: "item-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 734
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 735
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 736
  },
  __self: undefined
}, __jsx("a", {
  className: "product-image",
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 737
  },
  __self: undefined
}, " ", __jsx("img", {
  alt: "Product tilte is here",
  src: "./images/at13.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 743
  },
  __self: undefined
}), " "), __jsx("div", {
  className: "sale-label sale-top-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 748
  },
  __self: undefined
}, "Sale"), __jsx("div", {
  className: "mask-shop-white",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 751
  },
  __self: undefined
}), __jsx("div", {
  className: "new-label new-top-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 752
  },
  __self: undefined
}, "new"), __jsx("a", {
  className: "quickview-btn",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 753
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 757
  },
  __self: undefined
}, "Xem nhanh")))), __jsx("div", {
  className: "item-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 761
  },
  __self: undefined
}, __jsx("div", {
  className: "info-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 762
  },
  __self: undefined
}, __jsx("div", {
  className: "item-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 763
  },
  __self: undefined
}, " ", __jsx("a", {
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 765
  },
  __self: undefined
}, "\xC1o wash in h\xECnh", " "), " "), __jsx("div", {
  className: "item-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 772
  },
  __self: undefined
}, __jsx("div", {
  className: "rating",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 773
  },
  __self: undefined
}, " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 775
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 776
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 777
  },
  __self: undefined
}), __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 778
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 779
  },
  __self: undefined
})), __jsx("div", {
  className: "item-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 781
  },
  __self: undefined
}, __jsx("div", {
  className: "price-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 782
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "regular-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 784
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 786
  },
  __self: undefined
}, "530.000\u0111")))), __jsx("div", {
  className: "actions",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 790
  },
  __self: undefined
}, __jsx("div", {
  className: "add_cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 791
  },
  __self: undefined
}, __jsx("a", {
  href: "./shopping-card.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 792
  },
  __self: undefined
}, __jsx("button", {
  className: "button btn-cart",
  type: "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 793
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 797
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-shopping-cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 798
  },
  __self: undefined
}), " ", "Th\xEAm v\xE0o gi\u1ECF h\xE0ng")))))))))), __jsx("div", {
  className: "item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 810
  },
  __self: undefined
}, __jsx("div", {
  className: "item-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 811
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 812
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 813
  },
  __self: undefined
}, __jsx("a", {
  className: "product-image",
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 814
  },
  __self: undefined
}, " ", __jsx("img", {
  alt: "Product tilte is here",
  src: "./images/at14.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 820
  },
  __self: undefined
}), " "), __jsx("div", {
  className: "mask-shop-white",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 825
  },
  __self: undefined
}), __jsx("div", {
  className: "new-label new-top-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 826
  },
  __self: undefined
}, "new"), __jsx("a", {
  className: "quickview-btn",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 827
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 831
  },
  __self: undefined
}, "Xem nhanh")))), __jsx("div", {
  className: "item-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 835
  },
  __self: undefined
}, __jsx("div", {
  className: "info-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 836
  },
  __self: undefined
}, __jsx("div", {
  className: "item-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 837
  },
  __self: undefined
}, " ", __jsx("a", {
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 839
  },
  __self: undefined
}, "\xC1o thun th\u1EC3 thao", " "), " "), __jsx("div", {
  className: "item-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 846
  },
  __self: undefined
}, __jsx("div", {
  className: "rating",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 847
  },
  __self: undefined
}, " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 849
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 850
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 851
  },
  __self: undefined
}), __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 852
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 853
  },
  __self: undefined
})), __jsx("div", {
  className: "item-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 855
  },
  __self: undefined
}, __jsx("div", {
  className: "price-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 856
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "regular-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 858
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 860
  },
  __self: undefined
}, "720.000\u0111")))), __jsx("div", {
  className: "actions",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 864
  },
  __self: undefined
}, __jsx("div", {
  className: "add_cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 865
  },
  __self: undefined
}, __jsx("a", {
  href: "./shopping-card.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 866
  },
  __self: undefined
}, __jsx("button", {
  className: "button btn-cart",
  type: "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 867
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 871
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-shopping-cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 872
  },
  __self: undefined
}), " ", "Th\xEAm v\xE0o gi\u1ECF h\xE0ng")))))))))), __jsx("div", {
  className: "item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 884
  },
  __self: undefined
}, __jsx("div", {
  className: "item-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 885
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 886
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 887
  },
  __self: undefined
}, __jsx("a", {
  className: "product-image",
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 888
  },
  __self: undefined
}, " ", __jsx("img", {
  alt: "Product tilte is here",
  src: "./images/aothun4.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 894
  },
  __self: undefined
}), " "), __jsx("div", {
  className: "sale-label sale-top-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 899
  },
  __self: undefined
}, "Sale"), __jsx("div", {
  className: "mask-shop-white",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 902
  },
  __self: undefined
}), __jsx("div", {
  className: "new-label new-top-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 903
  },
  __self: undefined
}, "new"), __jsx("a", {
  className: "quickview-btn",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 904
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 908
  },
  __self: undefined
}, "Xem nhanh")))), __jsx("div", {
  className: "item-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 912
  },
  __self: undefined
}, __jsx("div", {
  className: "info-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 913
  },
  __self: undefined
}, __jsx("div", {
  className: "item-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 914
  },
  __self: undefined
}, " ", __jsx("a", {
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 916
  },
  __self: undefined
}, "\xC1o len c\u1ED9c tay m\xF9a h\xE8", " ")), __jsx("div", {
  className: "item-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 923
  },
  __self: undefined
}, __jsx("div", {
  className: "rating",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 924
  },
  __self: undefined
}, " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 926
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 927
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 928
  },
  __self: undefined
}), __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 929
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 930
  },
  __self: undefined
})), __jsx("div", {
  className: "item-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 932
  },
  __self: undefined
}, __jsx("div", {
  className: "price-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 933
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "regular-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 935
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 937
  },
  __self: undefined
}, "640.000\u0111")))), __jsx("div", {
  className: "actions",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 941
  },
  __self: undefined
}, __jsx("div", {
  className: "add_cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 942
  },
  __self: undefined
}, __jsx("a", {
  href: "./shopping-card.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 943
  },
  __self: undefined
}, __jsx("button", {
  className: "button btn-cart",
  type: "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 944
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 948
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-shopping-cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 949
  },
  __self: undefined
}), " ", "Th\xEAm v\xE0o gi\u1ECF h\xE0ng")))))))))), __jsx("div", {
  className: "item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 961
  },
  __self: undefined
}, __jsx("div", {
  className: "item-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 962
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 963
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 964
  },
  __self: undefined
}, __jsx("a", {
  className: "product-image",
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 965
  },
  __self: undefined
}, " ", __jsx("img", {
  alt: "Product tilte is here",
  src: "./images/at1.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 971
  },
  __self: undefined
}), " "), __jsx("div", {
  className: "mask-shop-white",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 976
  },
  __self: undefined
}), __jsx("div", {
  className: "new-label new-top-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 977
  },
  __self: undefined
}, "new"), __jsx("a", {
  className: "quickview-btn",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 978
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 982
  },
  __self: undefined
}, "Xem nhanh")))), __jsx("div", {
  className: "item-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 986
  },
  __self: undefined
}, __jsx("div", {
  className: "info-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 987
  },
  __self: undefined
}, __jsx("div", {
  className: "item-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 988
  },
  __self: undefined
}, " ", __jsx("a", {
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 990
  },
  __self: undefined
}, "\xC1o thun c\u1ED5 tr\xF2n miix", " ")), __jsx("div", {
  className: "item-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 997
  },
  __self: undefined
}, __jsx("div", {
  className: "rating",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 998
  },
  __self: undefined
}, " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1000
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1001
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1002
  },
  __self: undefined
}), __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1003
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1004
  },
  __self: undefined
})), __jsx("div", {
  className: "item-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1006
  },
  __self: undefined
}, __jsx("div", {
  className: "price-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1007
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "regular-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1009
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1011
  },
  __self: undefined
}, "870.000\u0111")))), __jsx("div", {
  className: "actions",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1015
  },
  __self: undefined
}, __jsx("div", {
  className: "add_cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1016
  },
  __self: undefined
}, __jsx("a", {
  href: "./shopping-card.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1017
  },
  __self: undefined
}, __jsx("button", {
  className: "button btn-cart",
  type: "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1018
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1022
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-shopping-cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1023
  },
  __self: undefined
}), " ", "Th\xEAm v\xE0o gi\u1ECF h\xE0ng")))))))))), __jsx("div", {
  className: "item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1035
  },
  __self: undefined
}, __jsx("div", {
  className: "item-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1036
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1037
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1038
  },
  __self: undefined
}, __jsx("a", {
  className: "product-image",
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1039
  },
  __self: undefined
}, " ", __jsx("img", {
  alt: "Product tilte is here",
  src: "./images/at10.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1045
  },
  __self: undefined
}), " "), __jsx("div", {
  className: "sale-label sale-top-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1050
  },
  __self: undefined
}, "Sale"), __jsx("div", {
  className: "mask-shop-white",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1053
  },
  __self: undefined
}), __jsx("div", {
  className: "new-label new-top-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1054
  },
  __self: undefined
}, "new"), __jsx("a", {
  className: "quickview-btn",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1055
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1059
  },
  __self: undefined
}, "Xem nhanh")))), __jsx("div", {
  className: "item-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1063
  },
  __self: undefined
}, __jsx("div", {
  className: "info-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1064
  },
  __self: undefined
}, __jsx("div", {
  className: "item-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1065
  },
  __self: undefined
}, " ", __jsx("a", {
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1067
  },
  __self: undefined
}, "\xC1o thun 3 l\u1ED7", " "), " "), __jsx("div", {
  className: "item-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1074
  },
  __self: undefined
}, __jsx("div", {
  className: "rating",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1075
  },
  __self: undefined
}, " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1077
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1078
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1079
  },
  __self: undefined
}), __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1080
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1081
  },
  __self: undefined
})), __jsx("div", {
  className: "item-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1083
  },
  __self: undefined
}, __jsx("div", {
  className: "price-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1084
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "regular-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1086
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1088
  },
  __self: undefined
}, "440.000\u0111")))), __jsx("div", {
  className: "actions",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1092
  },
  __self: undefined
}, __jsx("div", {
  className: "add_cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1093
  },
  __self: undefined
}, __jsx("a", {
  href: "./shopping-card.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1094
  },
  __self: undefined
}, __jsx("button", {
  className: "button btn-cart",
  type: "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1095
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1099
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-shopping-cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1100
  },
  __self: undefined
}), " ", "Th\xEAm v\xE0o gi\u1ECF h\xE0ng")))))))))), __jsx("div", {
  className: "item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1112
  },
  __self: undefined
}, __jsx("div", {
  className: "item-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1113
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1114
  },
  __self: undefined
}, __jsx("div", {
  className: "item-img-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1115
  },
  __self: undefined
}, __jsx("a", {
  className: "product-image",
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1116
  },
  __self: undefined
}, " ", __jsx("img", {
  alt: "Product tilte is here",
  src: "./images/at11.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1122
  },
  __self: undefined
}), " "), __jsx("div", {
  className: "mask-shop-white",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1127
  },
  __self: undefined
}), __jsx("div", {
  className: "new-label new-top-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1128
  },
  __self: undefined
}, "new"), __jsx("a", {
  className: "quickview-btn",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1129
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1133
  },
  __self: undefined
}, "Xem nhanh")))), __jsx("div", {
  className: "item-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1137
  },
  __self: undefined
}, __jsx("div", {
  className: "info-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1138
  },
  __self: undefined
}, __jsx("div", {
  className: "item-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1139
  },
  __self: undefined
}, " ", __jsx("a", {
  title: "Product tilte is here",
  href: "./product-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1141
  },
  __self: undefined
}, "\xC1o ph\xF4ng c\u1ED5 tr\xF2n cao c\u1EA5p", " ")), __jsx("div", {
  className: "item-content",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1148
  },
  __self: undefined
}, __jsx("div", {
  className: "rating",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1149
  },
  __self: undefined
}, " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1151
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1152
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1153
  },
  __self: undefined
}), __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1154
  },
  __self: undefined
}), " ", __jsx("i", {
  className: "fa fa-star-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1155
  },
  __self: undefined
})), __jsx("div", {
  className: "item-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1157
  },
  __self: undefined
}, __jsx("div", {
  className: "price-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1158
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "regular-price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1160
  },
  __self: undefined
}, " ", __jsx("span", {
  className: "price",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1162
  },
  __self: undefined
}, "760.000\u0111")))), __jsx("div", {
  className: "actions",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1166
  },
  __self: undefined
}, __jsx("div", {
  className: "add_cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1167
  },
  __self: undefined
}, __jsx("a", {
  href: "./shopping-card.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1168
  },
  __self: undefined
}, __jsx("button", {
  className: "button btn-cart",
  type: "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1169
  },
  __self: undefined
}, __jsx("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1173
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-shopping-cart",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1174
  },
  __self: undefined
}), " ", "Th\xEAm v\xE0o gi\u1ECF h\xE0ng")))))))))))))), __jsx("div", {
  className: "jtv-latest-blog",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1192
  },
  __self: undefined
}, __jsx("div", {
  className: "jtv-new-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1193
  },
  __self: undefined
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1194
  },
  __self: undefined
}, "Tin t\u1EE9c m\u1EDBi nh\u1EA5t")), __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1196
  },
  __self: undefined
}, __jsx("div", {
  className: "blog-outer-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1197
  },
  __self: undefined
}, __jsx("div", {
  className: "blog-inner",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1198
  },
  __self: undefined
}, __jsx("div", {
  className: "col-xs-12 col-sm-6 col-md-4 blog-preview_item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1199
  },
  __self: undefined
}, __jsx("div", {
  className: "entry-thumb jtv-blog-img-hover",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1200
  },
  __self: undefined
}, " ", __jsx("a", {
  href: "./blog-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1202
  },
  __self: undefined
}, __jsx("img", {
  alt: "Blog",
  src: "./images/l-post1.jpg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1203
  },
  __self: undefined
}), " "), " "), __jsx("h4", {
  className: "blog-preview_title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1206
  },
  __self: undefined
}, __jsx("a", {
  href: "./blog-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1207
  },
  __self: undefined
}, "3 Ki\u1EC3u Qu\u1EA7n Jeans nam \u201Ckh\xF4ng th\u1EC3 thi\u1EBFu\u201D trong t\u1EE7 \u0111\u1ED3 m\u1ED9t ch\xE0ng trai Hi\u1EC7n \u0110\u1EA1i")), __jsx("div", {
  className: "blog-preview_info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1212
  },
  __self: undefined
}, __jsx("ul", {
  className: "post-meta",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1213
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1214
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-user",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1215
  },
  __self: undefined
}), "By ", __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1216
  },
  __self: undefined
}, "Admin")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1218
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-comments",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1219
  },
  __self: undefined
}), __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1220
  },
  __self: undefined
}, "8 B\xECnh lu\u1EADn")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1222
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-clock-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1223
  },
  __self: undefined
}), __jsx("span", {
  className: "day",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1224
  },
  __self: undefined
}, "12"), __jsx("span", {
  className: "month",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1225
  },
  __self: undefined
}, "Feb"))), __jsx("div", {
  className: "blog-preview_desc",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1228
  },
  __self: undefined
}, "B\u1EA5t ch\u1EA5p m\u1ECDi xu h\u01B0\u1EDBng th\u1EDDi trang, Qu\u1EA7n Jean Nam k\u1EC3 t\u1EEB khi ra \u0111\u1EDDi h\u01A1n 1 th\u1EBF k\u1EF7 tr\u01B0\u1EDBc \u0111\u1EBFn nay v\u1EABn l\xE0 m\xF3n \u0111\u1ED3 y\xEAu th\xEDch.", __jsx("a", {
  className: "read_btn",
  href: "./blog-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1232
  },
  __self: undefined
}, "Xem th\xEAm")))), __jsx("div", {
  className: "col-xs-12 col-sm-6 col-md-4 blog-preview_item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1238
  },
  __self: undefined
}, __jsx("div", {
  className: "entry-thumb jtv-blog-img-hover",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1239
  },
  __self: undefined
}, " ", __jsx("a", {
  href: "./blog-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1241
  },
  __self: undefined
}, __jsx("img", {
  alt: "Blog",
  src: "./images/l-post2.jpg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1242
  },
  __self: undefined
}), " "), " "), __jsx("h4", {
  className: "blog-preview_title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1245
  },
  __self: undefined
}, __jsx("a", {
  href: "./blog-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1246
  },
  __self: undefined
}, "C\xE1ch gi\u1EEF trang ph\u1EE5c b\u1EC1n \u0111\u1EB9p theo t\u1EEBng lo\u1EA1i v\u1EA3i")), __jsx("div", {
  className: "blog-preview_info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1250
  },
  __self: undefined
}, __jsx("ul", {
  className: "post-meta",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1251
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1252
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-user",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1253
  },
  __self: undefined
}), "By ", __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1254
  },
  __self: undefined
}, "Admin")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1256
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-comments",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1257
  },
  __self: undefined
}), __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1258
  },
  __self: undefined
}, "20 B\xECnh lu\u1EADn")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1260
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-clock-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1261
  },
  __self: undefined
}), __jsx("span", {
  className: "day",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1262
  },
  __self: undefined
}, "25"), __jsx("span", {
  className: "month",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1263
  },
  __self: undefined
}, "May"))), __jsx("div", {
  className: "blog-preview_desc",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1266
  },
  __self: undefined
}, "Khi c\u1EA5t gi\u1EEF v\u1EA3i l\u1EE5a, b\u1EA1n n\xEAn treo ch\xFAng ph\u1EB3ng phiu c\u1EA9n th\u1EADn \u1EDF n\u01A1i tr\xE1nh \xE1nh n\u1EAFng tr\u1EF1c ti\u1EBFp. Kh\xF4ng d\xF9ng h\u1ED9p nh\u1EF1a \u0111\u1EC3 \u0111\u1EF1ng b\u1EDFi l\u1EE5a l\xE0 lo\u1EA1i s\u1EE3i v\u1EA3i t\u1EF1 nhi\xEAn v\xE0 ch\xFAng c\u1EA7n \u0111\u01B0\u1EE3c 'th\u1EDF.", " ", __jsx("a", {
  className: "read_btn",
  href: "./blog-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1271
  },
  __self: undefined
}, "Xem th\xEAm")))), __jsx("div", {
  className: "col-xs-12 col-sm-6 col-md-4 blog-preview_item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1277
  },
  __self: undefined
}, __jsx("div", {
  className: "entry-thumb jtv-blog-img-hover",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1278
  },
  __self: undefined
}, " ", __jsx("a", {
  href: "./blog-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1280
  },
  __self: undefined
}, __jsx("img", {
  alt: "Blog",
  src: "./images/l-post3.jpg",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1281
  },
  __self: undefined
}), " "), " "), __jsx("h4", {
  className: "blog-preview_title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1284
  },
  __self: undefined
}, __jsx("a", {
  href: "./blog-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1285
  },
  __self: undefined
}, "5 c\xE1ch ph\u1ED1i \u0111\u1ED3 nam cho ng\xE0y h\xE8 s\xF4i \u0111\u1ED9ng")), __jsx("div", {
  className: "blog-preview_info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1289
  },
  __self: undefined
}, __jsx("ul", {
  className: "post-meta",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1290
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1291
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-user",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1292
  },
  __self: undefined
}), "By ", __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1293
  },
  __self: undefined
}, "Admin")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1295
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-comments",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1296
  },
  __self: undefined
}), __jsx("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1297
  },
  __self: undefined
}, "3 B\xECnh lu\u1EADn")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1299
  },
  __self: undefined
}, __jsx("i", {
  className: "fa fa-clock-o",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1300
  },
  __self: undefined
}), __jsx("span", {
  className: "day",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1301
  },
  __self: undefined
}, "15"), __jsx("span", {
  className: "month",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1302
  },
  __self: undefined
}, "Sep"))), __jsx("div", {
  className: "blog-preview_desc",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1305
  },
  __self: undefined
}, "Ch\xFAng ta ch\u1EAFc ch\u1EAFn ai c\u0169ng \u0111\xE3 t\u1EEBng r\u01A1i v\xE0o t\xECnh hu\u1ED1ng sau: t\u1EAFt \u0111\u1ED3ng h\u1ED3 b\xE1o th\u1EE9c, ng\u1EE7 ti\u1EBFp, th\u1EE9c d\u1EADy tr\u1EC5, ch\u1EC9 c\xF2n \u0111\xFAng v\xE0i ph\xFAt \u0111\u1EC3 b\u01B0\u1EDBc ch\xE2n ra kh\u1ECFi nh\xE0 v\xE0 ho\xE0n to\xE0n.", " ", __jsx("a", {
  className: "read_btn",
  href: "./blog-detail.html",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1310
  },
  __self: undefined
}, "Xem th\xEAm")))))))))))), __jsx("section", {
  className: "main-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1326
  },
  __self: undefined
}, __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1327
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1328
  },
  __self: undefined
}, __jsx("div", {
  className: "col-sm-12 col-xs-12",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1329
  },
  __self: undefined
}, __jsx("div", {
  className: "jtv-trending-products",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1331
  },
  __self: undefined
}, __jsx("div", {
  className: "slider-items-products",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1332
  },
  __self: undefined
}, __jsx("div", {
  className: "jtv-new-title",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1333
  },
  __self: undefined
}, __jsx("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1334
  },
  __self: undefined
}, "Th\u01B0 vi\u1EC7n \u1EA3nh")), __jsx("div", {
  className: "gallery-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1336
  },
  __self: undefined
}, __jsx("div", {
  className: "row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1337
  },
  __self: undefined
}, __jsx("div", {
  className: " col-xs-12 col-sm-12 col-md-8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1338
  },
  __self: undefined
}, __jsx("div", {
  className: "img-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1339
  },
  __self: undefined
}, __jsx("div", {
  className: "img-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1340
  },
  __self: undefined
}, __jsx("h3", {
  className: "text-uppercase",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1341
  },
  __self: undefined
}, "B\u1ED9 s\u01B0u t\u1EADp th\xE1ng\xA010"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1344
  },
  __self: undefined
}, "M\u1EDBi l\u1EA1 - phong c\xE1ch")), __jsx("span", {
  className: "top-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1346
  },
  __self: undefined
}), __jsx("span", {
  className: "right-bottom",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1347
  },
  __self: undefined
}), __jsx("img", {
  src: "./images/l-post1.jpg",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1348
  },
  __self: undefined
}))), __jsx("div", {
  className: " col-xs-12 col-sm-12 col-md-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1351
  },
  __self: undefined
}, __jsx("div", {
  className: "img-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1352
  },
  __self: undefined
}, __jsx("div", {
  className: "img-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1353
  },
  __self: undefined
}, __jsx("h3", {
  className: "text-uppercase",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1354
  },
  __self: undefined
}, "Xu h\u01B0\u1EDBng"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1355
  },
  __self: undefined
}, "Th\u1EDDi trang v\xE0 cu\u1ED9c s\u1ED1ng")), __jsx("span", {
  className: "top-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1357
  },
  __self: undefined
}), __jsx("span", {
  className: "right-bottom",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1358
  },
  __self: undefined
}), __jsx("img", {
  src: "./images/l-post4.jpg",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1359
  },
  __self: undefined
}))), __jsx("div", {
  className: " col-xs-12 col-sm-12 col-md-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1362
  },
  __self: undefined
}, __jsx("div", {
  className: "img-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1363
  },
  __self: undefined
}, __jsx("div", {
  className: "img-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1364
  },
  __self: undefined
}, __jsx("h3", {
  className: "text-uppercase",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1365
  },
  __self: undefined
}, "instagram"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1366
  },
  __self: undefined
}, "Tr\u1EBB trung - \u0111\u1ED9c \u0111\xE1o")), __jsx("span", {
  className: "top-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1368
  },
  __self: undefined
}), __jsx("span", {
  className: "right-bottom",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1369
  },
  __self: undefined
}), __jsx("img", {
  src: "./images/l-post9.jpg",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1370
  },
  __self: undefined
}))), __jsx("div", {
  className: " col-xs-12 col-sm-12 col-md-8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1373
  },
  __self: undefined
}, __jsx("div", {
  className: "img-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1374
  },
  __self: undefined
}, __jsx("div", {
  className: "img-info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1375
  },
  __self: undefined
}, __jsx("h3", {
  className: "text-uppercase",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1376
  },
  __self: undefined
}, "BTS Thu\xA0\u0110\xF4ng - 2019"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1379
  },
  __self: undefined
}, "Phong c\xE1ch \u0111\u1EBFn t\u1EEB s\u1EF1 s\xE1ng t\u1EA1o")), __jsx("span", {
  className: "top-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1381
  },
  __self: undefined
}), __jsx("span", {
  className: "right-bottom",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1382
  },
  __self: undefined
}), __jsx("img", {
  src: "./images/l-post8.jpg",
  alt: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 1383
  },
  __self: undefined
})))))))))))));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ADMIN\Desktop\Web-front end\NextJS\carponextjs\pages\index.js */"./pages/index.js");


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
//# sourceMappingURL=index.js.map
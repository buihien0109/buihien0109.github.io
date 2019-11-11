webpackHotUpdate("static\\development\\pages\\shop-list.js",{

/***/ "./pages/shop-list.js":
/*!****************************!*\
  !*** ./pages/shop-list.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_CarpoLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CarpoLayout */ "./components/CarpoLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_shop_Title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/shop/Title */ "./components/shop/Title.js");
/* harmony import */ var _components_shop_Path__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/shop/Path */ "./components/shop/Path.js");
/* harmony import */ var _components_shop_Banner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/shop/Banner */ "./components/shop/Banner.js");
/* harmony import */ var _components_shop_View__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/shop/View */ "./components/shop/View.js");
/* harmony import */ var _components_shop_Product__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/shop/Product */ "./components/shop/Product.js");
/* harmony import */ var _components_shop_Pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/shop/Pagination */ "./components/shop/Pagination.js");
/* harmony import */ var _components_shop_Sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/shop/Sort */ "./components/shop/Sort.js");


var _jsxFileName = "C:\\Users\\ADMIN\\Desktop\\carponextjs\\pages\\shop-list.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;













var ShopList = function ShopList(props) {
  var listProducts = props.listProducts; // console.log(props)

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(listProducts),
      products = _useState[0],
      setProducts = _useState[1];

  var filterProduct =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(name) {
      var res, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("https://carpo.herokuapp.com/products?brand=".concat(name));

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.json();

            case 5:
              data = _context.sent;
              // console.log(data)
              // return {products : data}
              setProducts(data);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function filterProduct(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx(_components_CarpoLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Shop Page"), __jsx("link", {
    rel: "stylesheet",
    href: "css/shop-list.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_components_shop_Path__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("div", {
    className: "main-container col2-left-layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-9 col-sm-push-3 main-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(_components_shop_Banner__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("article", {
    className: "col-main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(_components_shop_Title__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx(_components_shop_View__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx(_components_shop_Product__WEBPACK_IMPORTED_MODULE_11__["default"], {
    products: products,
    listProducts: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("div", {
    className: "toolbar bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_components_shop_Pagination__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })))), __jsx("div", {
    className: "sidebar col-sm-3 col-xs-12 col-sm-pull-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_components_shop_Sort__WEBPACK_IMPORTED_MODULE_13__["default"], {
    products: products,
    filterProduct: filterProduct,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })))))));
};

ShopList.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()('https://carpo.herokuapp.com/products');

        case 2:
          res = _context2.sent;
          _context2.next = 5;
          return res.json();

        case 5:
          data = _context2.sent;
          return _context2.abrupt("return", {
            listProducts: data
          });

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
}));
/* harmony default export */ __webpack_exports__["default"] = (ShopList);

/***/ })

})
//# sourceMappingURL=shop-list.js.6070e8d1aa8f1ed62ba3.hot-update.js.map
webpackHotUpdate("static\\development\\pages\\shop.js",{

/***/ "./pages/shop/index.js":
/*!*****************************!*\
  !*** ./pages/shop/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_CarpoLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/CarpoLayout */ "./components/CarpoLayout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_shop_Title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/shop/Title */ "./components/shop/Title.js");
/* harmony import */ var components_shop_Path__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/shop/Path */ "./components/shop/Path.js");
/* harmony import */ var components_shop_Banner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/shop/Banner */ "./components/shop/Banner.js");
/* harmony import */ var components_shop_View__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/shop/View */ "./components/shop/View.js");
/* harmony import */ var components_shop_Product__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/shop/Product */ "./components/shop/Product.js");
/* harmony import */ var components_shop_Pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/shop/Pagination */ "./components/shop/Pagination.js");
/* harmony import */ var components_shop_Sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/shop/Sort */ "./components/shop/Sort.js");
/* harmony import */ var _url_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../url.config */ "./url.config.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_16__);




var _jsxFileName = "C:\\Users\\ADMIN\\Desktop\\Web-front end\\NextJS\\carponextjs\\pages\\shop\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;














var ShopList = function ShopList(props) {
  var products = props.products,
      totalItems = props.totalItems,
      query = props.query;
  var _currentPage = query._currentPage,
      _limit = query._limit,
      _sort = query._sort,
      _order = query._order;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      shoppingCart = _useState[0],
      setShoppingCart = _useState[1];

  var onAddToCard =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {
      var res, data, productSaveInCart;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()("https://carpo.herokuapp.com/products/".concat(id));

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.json();

            case 5:
              data = _context.sent;
              productSaveInCart = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, data, {
                quantity: 1
              });
              setShoppingCart(function (shoppingCart) {
                return [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(shoppingCart), [productSaveInCart]);
              });

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onAddToCard(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx(components_CarpoLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Shop Page"), __jsx("link", {
    rel: "stylesheet",
    href: "css/shop-list.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(components_shop_Path__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("div", {
    className: "main-container col2-left-layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-9 col-sm-push-3 main-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(components_shop_Banner__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("article", {
    className: "col-main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(components_shop_Title__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx(components_shop_View__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx(components_shop_Product__WEBPACK_IMPORTED_MODULE_12__["default"], {
    products: products,
    onAddToCard: onAddToCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("div", {
    className: "toolbar bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(components_shop_Pagination__WEBPACK_IMPORTED_MODULE_13__["default"], {
    currentPage: _currentPage,
    totalItems: totalItems,
    limit: _limit,
    sort: _sort,
    order: _order,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })))), __jsx("div", {
    className: "sidebar col-sm-3 col-xs-12 col-sm-pull-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(components_shop_Sort__WEBPACK_IMPORTED_MODULE_14__["default"], {
    query: query,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })))))));
};

ShopList.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(context) {
    var query, transformedQuery, res, data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log(context);
            query = context.query;
            transformedQuery = {
              _query: query.query || "",
              _page: query.page || 1,
              _limit: query.limit || 12,
              _sort: query.sort || 'id',
              _order: query.order || 'desc'
            }; // transformedQuery = queryString.stringify(transformedQuery)
            // console.log(transformedQuery)
            // console.log(`${url}?${transformedQuery}`)

            _context2.next = 5;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()("".concat(_url_config__WEBPACK_IMPORTED_MODULE_15__["url"], "?").concat(query_string__WEBPACK_IMPORTED_MODULE_16___default.a.stringify(transformedQuery)));

          case 5:
            res = _context2.sent;
            _context2.next = 8;
            return res.json();

          case 8:
            data = _context2.sent;
            return _context2.abrupt("return", {
              products: data,
              totalItems: res.headers.get('X-Total-Count'),
              query: transformedQuery
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (ShopList);

/***/ })

})
//# sourceMappingURL=shop.js.920cc63c20ab65e02a47.hot-update.js.map
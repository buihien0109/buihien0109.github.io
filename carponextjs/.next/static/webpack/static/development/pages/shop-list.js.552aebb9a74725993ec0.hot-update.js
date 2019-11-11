webpackHotUpdate("static\\development\\pages\\shop-list.js",{

/***/ "./components/shop/Product.js":
/*!************************************!*\
  !*** ./components/shop/Product.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\ADMIN\\Desktop\\carponextjs\\components\\shop\\Product.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var Product = function Product(props) {
  var products = props.products;

  var filterProduct =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e, type, name) {
      var res, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("https://carpo.herokuapp.com/products?".concat(type, "=").concat(name));

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.json();

            case 5:
              data = _context.sent;
              return _context.abrupt("return", {
                data: data
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function filterProduct(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();

  var renderItem = products.map(function (item, index) {
    return __jsx("li", {
      className: "item col-lg-4 col-md-6 col-sm-6 col-xs-6",
      key: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/shop/".concat(item.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("div", {
      className: "item-inner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("div", {
      className: "item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx("div", {
      className: "item-img-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("a", {
      className: "product-image",
      title: "Product tilte is here",
      href: "./product-detail.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("img", {
      alt: "Product tilte is here",
      src: item.thumbnail,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    })), __jsx("div", {
      className: "new-label new-top-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "new"), __jsx("div", {
      className: "sale-label sale-top-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "sale"), __jsx("div", {
      className: "mask-shop-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), __jsx("div", {
      className: "new-label new-top-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "new"), __jsx("a", {
      className: "quickview-btn",
      href: "./product-detail.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "Xem nhanh")))), __jsx("div", {
      className: "item-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("div", {
      className: "info-inner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("div", {
      className: "item-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("a", {
      title: "Product tilte is here",
      href: "./product-detail.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, item.name)), __jsx("div", {
      className: "item-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("div", {
      className: "rating",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), " ", __jsx("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), __jsx("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), " ", __jsx("i", {
      className: "fa fa-star-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), __jsx("i", {
      className: "fa fa-star-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    })), __jsx("div", {
      className: "item-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("div", {
      className: "price-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("span", {
      className: "regular-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("span", {
      className: "price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, item.price, "\u0111")))), __jsx("div", {
      className: "actions",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("div", {
      className: "add_cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("a", {
      href: "./shopping-card.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, __jsx("button", {
      className: "button btn-cart",
      type: "button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx("i", {
      className: "fa fa-shopping-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), " Th\xEAm v\xE0o gi\u1ECF h\xE0ng")))))))))));
  });
  return __jsx("div", {
    className: "category-products",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("ul", {
    className: "products-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, renderItem));
};

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ })

})
//# sourceMappingURL=shop-list.js.552aebb9a74725993ec0.hot-update.js.map
webpackHotUpdate("static\\development\\pages\\shop-list.js",{

/***/ "./components/shop/Product.js":
/*!************************************!*\
  !*** ./components/shop/Product.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\ADMIN\\Desktop\\carponextjs\\components\\shop\\Product.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Product = function Product(props) {
  var products = props.products;
  var renderItem = products.map(function (item, index) {
    return __jsx("li", {
      className: "item col-lg-4 col-md-6 col-sm-6 col-xs-6",
      key: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/shop/".concat(item.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("div", {
      className: "item-inner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("div", {
      className: "item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("div", {
      className: "item-img-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("a", {
      className: "product-image",
      title: "Product tilte is here",
      href: "./product-detail.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("img", {
      alt: "Product tilte is here",
      src: item.thumbnail,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    })), __jsx("div", {
      className: "new-label new-top-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, "new"), __jsx("div", {
      className: "sale-label sale-top-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "sale"), __jsx("div", {
      className: "mask-shop-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), __jsx("div", {
      className: "new-label new-top-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "new"), __jsx("a", {
      className: "quickview-btn",
      href: "./product-detail.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "Xem nhanh")))), __jsx("div", {
      className: "item-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("div", {
      className: "info-inner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("div", {
      className: "item-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("a", {
      title: "Product tilte is here",
      href: "./product-detail.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, item.name)), __jsx("div", {
      className: "item-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("div", {
      className: "rating",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), " ", __jsx("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), __jsx("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), " ", __jsx("i", {
      className: "fa fa-star-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), __jsx("i", {
      className: "fa fa-star-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    })), __jsx("div", {
      className: "item-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("div", {
      className: "price-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("span", {
      className: "regular-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("span", {
      className: "price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, item.price, "\u0111")))), __jsx("div", {
      className: "actions",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("div", {
      className: "add_cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("a", {
      href: "./shopping-card.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("button", {
      className: "button btn-cart",
      type: "button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("i", {
      className: "fa fa-shopping-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }), " Th\xEAm v\xE0o gi\u1ECF h\xE0ng")))))))))));
  });
  return __jsx("div", {
    className: "category-products",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("ul", {
    className: "products-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, renderItem));
};

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ })

})
//# sourceMappingURL=shop-list.js.c58ba760efd55605dbd6.hot-update.js.map
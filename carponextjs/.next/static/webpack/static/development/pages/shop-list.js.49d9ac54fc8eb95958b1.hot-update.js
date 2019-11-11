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
  var renderItem = products.map(function (item) {
    return __jsx("li", {
      className: "item col-lg-4 col-md-6 col-sm-6 col-xs-6",
      key: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      href: "/shop/".concat(item.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("div", {
      className: "item-inner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("div", {
      className: "item-img-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("a", {
      className: "product-image",
      title: "Product tilte is here",
      href: "./product-detail.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("img", {
      alt: "Product tilte is here",
      src: item.thumbnail,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    })), __jsx("div", {
      className: "new-label new-top-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "new"), __jsx("div", {
      className: "sale-label sale-top-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "sale"), __jsx("div", {
      className: "mask-shop-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), __jsx("div", {
      className: "new-label new-top-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "new"), __jsx("a", {
      className: "quickview-btn",
      href: "./product-detail.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Xem nhanh")))), __jsx("div", {
      className: "item-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("div", {
      className: "info-inner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("div", {
      className: "item-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("a", {
      title: "Product tilte is here",
      href: "./product-detail.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, item.name)), __jsx("div", {
      className: "item-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("div", {
      className: "rating",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), " ", __jsx("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }), __jsx("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), " ", __jsx("i", {
      className: "fa fa-star-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), __jsx("i", {
      className: "fa fa-star-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    })), __jsx("div", {
      className: "item-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("div", {
      className: "price-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("span", {
      className: "regular-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("span", {
      className: "price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, item.price, "\u0111")))), __jsx("div", {
      className: "actions",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("div", {
      className: "add_cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("a", {
      href: "./shopping-card.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("button", {
      className: "button btn-cart",
      type: "button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("i", {
      className: "fa fa-shopping-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }), " Th\xEAm v\xE0o gi\u1ECF h\xE0ng")))))))))));
  });
  return __jsx("div", {
    className: "category-products",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("ul", {
    className: "products-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, renderItem));
};

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

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
  var products = props.products;
  console.log(products); // const onGetProduct = async (brand) => {
  //     const res = await fetch('https://carpo.herokuapp.com/products?brand='+brand);
  //     const data = await res.json();
  //     console.log(data)
  // }

  return __jsx(_components_CarpoLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Shop Page"), __jsx("link", {
    rel: "stylesheet",
    href: "css/shop-list.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_components_shop_Path__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("div", {
    className: "main-container col2-left-layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-9 col-sm-push-3 main-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_components_shop_Banner__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("article", {
    className: "col-main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(_components_shop_Title__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx(_components_shop_View__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("div", {
    className: "toolbar bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(_components_shop_Pagination__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })))), __jsx("div", {
    className: "sidebar col-sm-3 col-xs-12 col-sm-pull-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_components_shop_Sort__WEBPACK_IMPORTED_MODULE_13__["default"], {
    products: products,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })))))));
};

ShopList.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()('https://carpo.herokuapp.com/products');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          return _context.abrupt("return", {
            products: data
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (ShopList);

/***/ })

})
//# sourceMappingURL=shop-list.js.49d9ac54fc8eb95958b1.hot-update.js.map
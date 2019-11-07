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
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_CarpoLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CarpoLayout */ "./components/CarpoLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "C:\\Users\\DELL\\Desktop\\carponextjs\\pages\\shop-list.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





var ShopList = function ShopList(props) {
  var renderItem = props.products.map(function (item) {
    return __jsx("li", {
      className: "item col-lg-4 col-md-6 col-sm-6 col-xs-6",
      key: item.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/shop/".concat(item.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("div", {
      className: "item-inner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("div", {
      className: "item-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("div", {
      className: "item-img-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("a", {
      className: "product-image",
      title: "Product tilte is here",
      href: "./product-detail.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("img", {
      alt: "Product tilte is here",
      src: item.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    })), __jsx("div", {
      className: "new-label new-top-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "new"), __jsx("div", {
      className: "sale-label sale-top-right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, "sale"), __jsx("div", {
      className: "mask-shop-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), __jsx("div", {
      className: "new-label new-top-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "new"), __jsx("a", {
      className: "quickview-btn",
      href: "./product-detail.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "Xem nhanh")))), __jsx("div", {
      className: "item-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("div", {
      className: "info-inner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("div", {
      className: "item-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("a", {
      title: "Product tilte is here",
      href: "./product-detail.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, item.name)), __jsx("div", {
      className: "item-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("div", {
      className: "rating",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), " ", __jsx("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), __jsx("i", {
      className: "fa fa-star",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), " ", __jsx("i", {
      className: "fa fa-star-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), __jsx("i", {
      className: "fa fa-star-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    })), __jsx("div", {
      className: "item-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("div", {
      className: "price-box",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("span", {
      className: "regular-price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("span", {
      className: "price",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, item.price, "\u0111")))), __jsx("div", {
      className: "actions",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("div", {
      className: "add_cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("a", {
      href: "./shopping-card.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("button", {
      className: "button btn-cart",
      type: "button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("i", {
      className: "fa fa-shopping-cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), " Th\xEAm v\xE0o gi\u1ECF h\xE0ng")))))))))));
  });
  return __jsx(_components_CarpoLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Shop Page"), __jsx("link", {
    rel: "stylesheet",
    href: "css/shop-list.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("section", {
    id: "duong-dan",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("a", {
    href: "./index.html",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Trang ch\u1EE7")), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("i", {
    className: "fa fa-angle-right",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  })), __jsx("a", {
    href: "./shop-list.html",
    className: "duong-dan-active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "S\u1EA3n ph\u1EA9m")))), __jsx("div", {
    className: "main-container col2-left-layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-9 col-sm-push-3 main-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("div", {
    className: "category-description std",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("div", {
    className: "slider-items-products",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("div", {
    id: "category-desc-slider",
    className: "product-flexslider hidden-buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("div", {
    className: "slider-items slider-width-col1 owl-carousel owl-theme",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("div", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("img", {
    alt: "New Special Collection",
    src: "./images/new-fashion.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  })), __jsx("div", {
    className: "cat-img-title cat-bg cat-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("h2", {
    className: "cat-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "B\u1EAFt tr\u1ECDn thu v\xE0ng - Sale up \u0111\u1EBFn 50%"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "\u0110\u1EC3 vi\u1EBFt th\xEAm th\xF4ng tin v\u1EC1 ch\u01B0\u01A1ng tr\xECnh. Vui l\xF2ng truy c\u1EADp Carpo.vn"))), __jsx("div", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx("img", {
    alt: "New Fashion",
    src: "./images/new-special.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  })), __jsx("div", {
    className: "cat-img-title cat-bg cat-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx("h2", {
    className: "cat-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "Th\u1EDDi trang thu \u0111\xF4ng"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "T\u01B0ng b\u1EEBng l\u1EF1a ch\u1ECDn - Th\u1ECFa th\xEDch mua s\u1EAFm. "))))))), __jsx("article", {
    className: "col-main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx("div", {
    className: "page-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "Danh m\u1EE5c s\u1EA3n ph\u1EA9m")), __jsx("div", {
    className: "toolbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx("div", {
    id: "sort-by",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx("label", {
    className: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "S\u1EAFp x\u1EBFp: "), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "T\xF9y ch\u1ECDn", __jsx("span", {
    className: "right-arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  })), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "Gi\u1EA3m gi\xE1 nhi\u1EC1u nh\u1EA5t")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "T\u1EEB cao \u0111\u1EBFn th\u1EA5p")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "\u0110\xE1nh gi\xE1 cao nh\u1EA5t")))))), __jsx("div", {
    className: "pager",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, __jsx("div", {
    id: "limiter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "View: "), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "12", __jsx("span", {
    className: "right-arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  })), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "15")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, "20")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, "35")))))))), __jsx("div", {
    className: "category-products",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, __jsx("ul", {
    className: "products-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, renderItem)), __jsx("div", {
    className: "toolbar bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, __jsx("div", {
    className: "col-sm-12 col-md-6 text-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, __jsx("div", {
    className: "pages",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, __jsx("ul", {
    className: "pagination",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "\xAB")), __jsx("li", {
    className: "active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, "1")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, "2")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, "3")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, "\xBB"))))), __jsx("div", {
    className: "col-sm-12 col-md-6 text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, "Hi\u1EC3n th\u1ECB 1 - 15 c\u1EE7a 25 (2 trang)"))))), __jsx("div", {
    className: "sidebar col-sm-3 col-xs-12 col-sm-pull-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, __jsx("aside", {
    className: "sidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, __jsx("div", {
    className: "block block-layered-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, __jsx("div", {
    className: "block-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, "T\xECm ki\u1EBFm s\u1EA3n ph\u1EA9m")), __jsx("div", {
    className: "block-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, __jsx("dl", {
    id: "narrow-by-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, __jsx("dt", {
    className: "even",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, "Th\u01B0\u01A1ng hi\u1EC7u"), __jsx("dd", {
    className: "even",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, __jsx("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, "Louis Vuitton"), " (20)"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, "Chanel"), " (25)"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, "Prada"), " (8)"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, "Dior"), " (5)"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, "Hermes "), " (2)"))), __jsx("dt", {
    className: "odd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, "Ch\u1EA5t li\u1EC7u"), __jsx("dd", {
    className: "odd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, __jsx("ol", {
    className: "bag-material",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, __jsx("div", {
    className: "pretty p-icon p-smooth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, __jsx("input", {
    type: "checkbox",
    name: "Material",
    defaultValue: "Cotton",
    id: "Cotton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "Cotton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, "Cotton"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }, __jsx("div", {
    className: "pretty p-icon p-smooth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, __jsx("input", {
    type: "checkbox",
    name: "Material",
    defaultValue: "Kaki",
    id: "Kaki",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "Kaki",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, "Kaki"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, __jsx("div", {
    className: "pretty p-icon p-smooth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }, __jsx("input", {
    type: "checkbox",
    name: "Material",
    defaultValue: "Jeans",
    id: "Jeans",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "Jeans",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, "Jeans"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, __jsx("div", {
    className: "pretty p-icon p-smooth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, __jsx("input", {
    type: "checkbox",
    name: "Material",
    defaultValue: "Ni",
    id: "ni",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "ni",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }, "N\u1EC9"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  }, __jsx("div", {
    className: "pretty p-icon p-smooth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }, __jsx("input", {
    type: "checkbox",
    name: "Material",
    defaultValue: "Lanh",
    id: "Lanh",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "Lanh",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: this
  }, "Lanh"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: this
  }, __jsx("div", {
    className: "pretty p-icon p-smooth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, __jsx("input", {
    type: "checkbox",
    name: "Material",
    defaultValue: "Lua",
    id: "lua",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "lua",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }, "L\u1EE5a t\u1EF1 nhi\xEAn"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, __jsx("div", {
    className: "pretty p-icon p-smooth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  }, __jsx("input", {
    type: "checkbox",
    name: "Material",
    defaultValue: "Ren",
    id: "Ren",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "Ren",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }, "Ren"))))), __jsx("dt", {
    className: "odd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: this
  }, "K\xEDch th\u01B0\u1EDBc"), __jsx("div", {
    className: "size-area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, __jsx("div", {
    className: "size",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  }, "S")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: this
  }, "L")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: this
  }, "M")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
    },
    __self: this
  }, "XL")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: this
  }, "XXL"))))), __jsx("dt", {
    className: "odd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: this
  }, "M\xE0u s\u1EAFc"), __jsx("dd", {
    className: "odd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354
    },
    __self: this
  }, __jsx("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357
    },
    __self: this
  }, "Xanh l\xE1 c\xE2y"), " (1)"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    },
    __self: this
  }, "Tr\u1EAFng"), " (5)"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: this
  }, "\u0110en"), " (5)"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366
    },
    __self: this
  }, "X\xE1m"), " (4)"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369
    },
    __self: this
  }, "X\xE1m \u0111en"), " (3)"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: this
  }, "Xanh da tr\u1EDDi"), " (1)")))))), __jsx("div", {
    className: "block product-price-range ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379
    },
    __self: this
  }, __jsx("div", {
    className: "block-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: this
  }, "Gi\xE1")), __jsx("div", {
    className: "block-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    },
    __self: this
  }, __jsx("div", {
    className: "slider-range",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384
    },
    __self: this
  }, __jsx("ul", {
    className: "check-box-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: this
  }, __jsx("div", {
    className: "pretty p-icon p-smooth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387
    },
    __self: this
  }, __jsx("input", {
    type: "checkbox",
    name: "cc",
    defaultValue: "p1",
    id: "p1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "p1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    },
    __self: this
  }, "< 200.000\u0111", __jsx("span", {
    className: "count",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395
    },
    __self: this
  }, "(5)")))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399
    },
    __self: this
  }, __jsx("div", {
    className: "pretty p-icon p-smooth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400
    },
    __self: this
  }, __jsx("input", {
    type: "checkbox",
    name: "cc",
    defaultValue: "p2",
    id: "p2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "p2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407
    },
    __self: this
  }, "200.000 - 500.000", __jsx("span", {
    className: "count",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409
    },
    __self: this
  }, "(12)")))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413
    },
    __self: this
  }, __jsx("div", {
    className: "pretty p-icon p-smooth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414
    },
    __self: this
  }, __jsx("input", {
    type: "checkbox",
    name: "cc",
    defaultValue: "p3",
    id: "p3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "p3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421
    },
    __self: this
  }, "500.000 - 1.000.000", __jsx("span", {
    className: "count",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423
    },
    __self: this
  }, "(15)")))))))))))))));
};

ShopList.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()('https://carpo.herokuapp.com/products');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          console.log("Show data fetched. Count: ".concat(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(data)));
          return _context.abrupt("return", {
            products: dât
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (ShopList);

/***/ })

})
//# sourceMappingURL=shop-list.js.c93f9e8c30f1a2be7c41.hot-update.js.map
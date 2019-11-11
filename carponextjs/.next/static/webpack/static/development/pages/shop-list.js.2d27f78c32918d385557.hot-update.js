webpackHotUpdate("static\\development\\pages\\shop-list.js",{

/***/ "./components/shop/Sort.js":
/*!*********************************!*\
  !*** ./components/shop/Sort.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\ADMIN\\Desktop\\carponextjs\\components\\shop\\Sort.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Sort = function Sort(props) {
  var listProducts = props.listProducts,
      filterProduct = props.filterProduct; //Get List Brand

  var brands = listProducts.map(function (product) {
    return product.brand;
  });
  brands = brands.filter(function (brand, i) {
    return brands.indexOf(brand) === i;
  }); //Render Brand

  var renderBrand = brands.map(function (brand, index) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/shop-list?brand=".concat(brand),
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      onClick: function onClick() {
        return filterProduct("brand", brand);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, brand), "(20)"));
  }); //Get List material

  var materials = listProducts.map(function (product) {
    return product.material;
  });
  materials = materials.filter(function (material, i) {
    return materials.indexOf(material) === i;
  }); //Render material

  var renderMaterial = materials.map(function (material, index) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/shop-list?material=".concat(material),
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      onClick: function onClick() {
        return filterProduct("material", material);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, material)));
  }); //Get List size

  var sizes = listProducts.map(function (product) {
    return product.size;
  });
  sizes = sizes.filter(function (size, i) {
    return sizes.indexOf(size) === i;
  }); //Render size

  var renderSize = sizes.map(function (size, index) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/shop-list?size=".concat(size),
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      onClick: function onClick() {
        return filterProduct("size", size);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, size)));
  }); //Get List color

  var colors = listProducts.map(function (product) {
    return product.color;
  });
  colors = colors.filter(function (color, i) {
    return colors.indexOf(color) === i;
  }); //Render color

  var renderColor = colors.map(function (color, index) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/shop-list?color=".concat(color),
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      onClick: function onClick() {
        return filterProduct("color", color);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, color)));
  });

  var renderType = function renderType(type) {
    var listTy;
  };

  return __jsx("aside", {
    className: "sidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("div", {
    className: "block block-layered-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("div", {
    className: "block-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "T\xECm ki\u1EBFm s\u1EA3n ph\u1EA9m")), __jsx("div", {
    className: "block-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("dl", {
    id: "narrow-by-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("dt", {
    className: "even",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Th\u01B0\u01A1ng hi\u1EC7u"), __jsx("dd", {
    className: "even",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, renderBrand)), __jsx("dt", {
    className: "even",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Ch\u1EA5t li\u1EC7u"), __jsx("dd", {
    className: "even",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, renderMaterial)), __jsx("dt", {
    className: "odd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "K\xEDch th\u01B0\u1EDBc"), __jsx("div", {
    className: "size-area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("div", {
    className: "size",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, renderSize))), __jsx("dt", {
    className: "odd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "M\xE0u s\u1EAFc"), __jsx("dd", {
    className: "odd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, renderColor))))), __jsx("div", {
    className: "block product-price-range ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("div", {
    className: "block-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Gi\xE1")), __jsx("div", {
    className: "block-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("div", {
    className: "slider-range",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("ul", {
    className: "check-box-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx("div", {
    className: "pretty p-icon p-smooth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx("input", {
    type: "checkbox",
    name: "cc",
    defaultValue: "p1",
    id: "p1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "p1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "< 200.000\u0111", __jsx("span", {
    className: "count",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "(5)")))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("div", {
    className: "pretty p-icon p-smooth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx("input", {
    type: "checkbox",
    name: "cc",
    defaultValue: "p2",
    id: "p2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "p2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "200.000 - 500.000", __jsx("span", {
    className: "count",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "(12)")))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx("div", {
    className: "pretty p-icon p-smooth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx("input", {
    type: "checkbox",
    name: "cc",
    defaultValue: "p3",
    id: "p3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "p3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "500.000 - 1.000.000", __jsx("span", {
    className: "count",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "(15)")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Sort);

/***/ })

})
//# sourceMappingURL=shop-list.js.2d27f78c32918d385557.hot-update.js.map
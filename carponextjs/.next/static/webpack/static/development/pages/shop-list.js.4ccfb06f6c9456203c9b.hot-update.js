webpackHotUpdate("static\\development\\pages\\shop-list.js",{

/***/ "./components/shop/Sort.js":
/*!*********************************!*\
  !*** ./components/shop/Sort.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\ADMIN\\Desktop\\carponextjs\\components\\shop\\Sort.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

var Sort = function Sort(props) {
  var products = props.products; //Get List Brand

  var brands = products.map(function (product) {
    return product.brand;
  });
  brands = brands.filter(function (brand, i) {
    return brands.indexOf(brand) === i;
  }); //Render Brand

  var renderBrand = brands.map(function (brand, index) {
    return __jsx("li", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      onClick: filterProduct("brand", brand),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, brand), " (20)");
  }); //Get List material

  var materials = products.map(function (product) {
    return product.material;
  });
  materials = materials.filter(function (material, i) {
    return materials.indexOf(material) === i;
  }); //Render material

  var renderMaterial = materials.map(function (material, index) {
    return __jsx("li", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, material));
  }); //Get List size

  var sizes = products.map(function (product) {
    return product.size;
  });
  sizes = sizes.filter(function (size, i) {
    return sizes.indexOf(size) === i;
  }); //Render size

  var renderSize = sizes.map(function (size, index) {
    return __jsx("li", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, size));
  }); //Get List color

  var colors = products.map(function (product) {
    return product.color;
  });
  colors = colors.filter(function (color, i) {
    return colors.indexOf(color) === i;
  }); //Render color

  var renderColor = colors.map(function (color, index) {
    return __jsx("li", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, color));
  });

  var filterProduct =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(type, brand) {
      var res, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('https://carpo.herokuapp.com/products?brand=' + brand);

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.json();

            case 5:
              data = _context.sent;
              console.log(data);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function filterProduct(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx("aside", {
    className: "sidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("div", {
    className: "block block-layered-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("div", {
    className: "block-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "T\xECm ki\u1EBFm s\u1EA3n ph\u1EA9m")), __jsx("div", {
    className: "block-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("dl", {
    id: "narrow-by-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("dt", {
    className: "even",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Th\u01B0\u01A1ng hi\u1EC7u"), __jsx("dd", {
    className: "even",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, renderBrand)), __jsx("dt", {
    className: "even",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Ch\u1EA5t li\u1EC7u"), __jsx("dd", {
    className: "even",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, renderMaterial)), __jsx("dt", {
    className: "odd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "K\xEDch th\u01B0\u1EDBc"), __jsx("div", {
    className: "size-area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("div", {
    className: "size",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, renderSize))), __jsx("dt", {
    className: "odd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "M\xE0u s\u1EAFc"), __jsx("dd", {
    className: "odd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("ol", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, renderColor))))), __jsx("div", {
    className: "block product-price-range ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("div", {
    className: "block-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Gi\xE1")), __jsx("div", {
    className: "block-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("div", {
    className: "slider-range",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("ul", {
    className: "check-box-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("div", {
    className: "pretty p-icon p-smooth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("input", {
    type: "checkbox",
    name: "cc",
    defaultValue: "p1",
    id: "p1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "p1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "< 200.000\u0111", __jsx("span", {
    className: "count",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "(5)")))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("div", {
    className: "pretty p-icon p-smooth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("input", {
    type: "checkbox",
    name: "cc",
    defaultValue: "p2",
    id: "p2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "p2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "200.000 - 500.000", __jsx("span", {
    className: "count",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "(12)")))), __jsx("li", {
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
    defaultValue: "p3",
    id: "p3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "p3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "500.000 - 1.000.000", __jsx("span", {
    className: "count",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "(15)")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Sort);

/***/ })

})
//# sourceMappingURL=shop-list.js.4ccfb06f6c9456203c9b.hot-update.js.map
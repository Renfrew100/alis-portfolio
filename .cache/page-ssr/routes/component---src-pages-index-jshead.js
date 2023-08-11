exports.id = "component---src-pages-index-jshead";
exports.ids = ["component---src-pages-index-jshead"];
exports.modules = {

/***/ "./src/components/Header.jsx":
/*!***********************************!*\
  !*** ./src/components/Header.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Header: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _button_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.jsx */ "./src/components/button.jsx");
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.css */ "./src/components/header.css");
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_header_css__WEBPACK_IMPORTED_MODULE_2__);




const Header = ({
  home,
  projects,
  workexperience,
  about,
  resume
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_button_jsx__WEBPACK_IMPORTED_MODULE_1__.Button, {
  onClick: home,
  size: "large",
  label: "Home"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "/alis-portfolio/projects/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_button_jsx__WEBPACK_IMPORTED_MODULE_1__.Button, {
  onClick: projects,
  size: "large",
  label: "About"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "/alis-portfolio/work experience/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_button_jsx__WEBPACK_IMPORTED_MODULE_1__.Button, {
  onClick: workexperience,
  size: "large",
  label: "Work Experience"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "/alis-portfolio/about/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_button_jsx__WEBPACK_IMPORTED_MODULE_1__.Button, {
  onclick: about,
  size: "large",
  label: "Projects"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "/alis-portfolio/resume/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_button_jsx__WEBPACK_IMPORTED_MODULE_1__.Button, {
  onclick: resume,
  size: "large",
  label: "My Resume"
}))));
Header.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
    name: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string).isRequired
  }),
  onLogin: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired,
  onLogout: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired,
  onCreateAccount: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func).isRequired
};
Header.defaultProps = {
  user: null
};

/***/ }),

/***/ "./src/components/bio.js":
/*!*******************************!*\
  !*** ./src/components/bio.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_3257411868_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/3257411868.json */ "./public/page-data/sq/d/3257411868.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */



const Bio = () => {
  var _data$site$siteMetada, _data$site$siteMetada2;
  const data = _public_page_data_sq_d_3257411868_json__WEBPACK_IMPORTED_MODULE_0__.data;

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = (_data$site$siteMetada = data.site.siteMetadata) === null || _data$site$siteMetada === void 0 ? void 0 : _data$site$siteMetada.author;
  const social = (_data$site$siteMetada2 = data.site.siteMetadata) === null || _data$site$siteMetada2 === void 0 ? void 0 : _data$site$siteMetada2.social;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "bio"
  }, (author === null || author === void 0 ? void 0 : author.name) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), "Ali is a fourth-year student at the University of Ottawa pursuing an Honours BSc in Computer Science with an Engineering Management and Entrepreneurship option. (2023)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("br", null), "Ali is a fourth-year student at the University of Ottawa pursuing a BASs in Software Engineering with an Engineering Management and Entrepreneurship Option. (2018 - 2022)"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bio);

/***/ }),

/***/ "./src/components/button.jsx":
/*!***********************************!*\
  !*** ./src/components/button.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.css */ "./src/components/button.css");
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_css__WEBPACK_IMPORTED_MODULE_1__);




/**
 * Primary UI component for user interaction
 */
const Button = ({
  primary,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", Object.assign({
    type: "button",
    className: ['storybook-button', `storybook-button--${size}`, mode].join(' '),
    style: backgroundColor && {
      backgroundColor
    }
  }, props), label);
};
Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  /**
   * What background color to use
   */
  backgroundColor: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  /**
   * How large should the button be?
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
  /**
   * Optional click handler
   */
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
Button.defaultProps = {
  backgroundColor: 'null',
  primary: false,
  size: 'medium',
  onClick: undefined
};

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _button_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.jsx */ "./src/components/button.jsx");
/* harmony import */ var _Header_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.jsx */ "./src/components/Header.jsx");
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.css */ "./src/components/header.css");
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_header_css__WEBPACK_IMPORTED_MODULE_4__);





const Layout = ({
  location,
  title,
  children
}) => {
  const rootPath = `${""}/`;
  const isRootPath = location.pathname === rootPath;
  const [isOpen, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const Button = ({
    type = 'Button',
    onClick,
    size,
    label
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: type,
    onClick: onClick,
    className: `Button ${size}`
  }, label);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "global-wrapper",
    "data-is-root-path": isRootPath
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Header_jsx__WEBPACK_IMPORTED_MODULE_3__.Header, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", null, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer", null, "\xA9 ", new Date().getFullYear(), ", Built with", ` `, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://www.gatsbyjs.com"
  }, "Gatsby")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_2841359383_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/2841359383.json */ "./public/page-data/sq/d/2841359383.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */


const Seo = ({
  description,
  title,
  children
}) => {
  var _site$siteMetadata, _site$siteMetadata2, _site$siteMetadata2$s;
  const {
    site
  } = _public_page_data_sq_d_2841359383_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = (_site$siteMetadata = site.siteMetadata) === null || _site$siteMetadata === void 0 ? void 0 : _site$siteMetadata.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("title", null, defaultTitle ? `${title} | ${defaultTitle}` : title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "description",
    content: metaDescription
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:title",
    content: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:description",
    content: metaDescription
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:card",
    content: "summary"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:creator",
    content: ((_site$siteMetadata2 = site.siteMetadata) === null || _site$siteMetadata2 === void 0 ? void 0 : (_site$siteMetadata2$s = _site$siteMetadata2.social) === null || _site$siteMetadata2$s === void 0 ? void 0 : _site$siteMetadata2$s.twitter) || ``
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:title",
    content: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:description",
    content: metaDescription
  }), children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ "./src/pages/index.js?export=head":
/*!****************************************!*\
  !*** ./src/pages/index.js?export=head ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_bio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/bio */ "./src/components/bio.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");





const BlogIndex = ({
  data,
  location
}) => {
  var _data$site$siteMetada;
  const siteTitle = ((_data$site$siteMetada = data.site.siteMetadata) === null || _data$site$siteMetada === void 0 ? void 0 : _data$site$siteMetada.title) || `Title`;
  const posts = data.allMarkdownRemark.nodes;
  if (posts.length === 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      location: location,
      title: siteTitle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_bio__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "No blog posts found. Add markdown posts to \"content/blog\" (or the directory you specified for the \"gatsby-source-filesystem\" plugin in gatsby-config.js)."));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    location: location,
    title: siteTitle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_bio__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", {
    style: {
      listStyle: `none`
    }
  }, posts.map(post => {
    const title = post.frontmatter.title || post.fields.slug;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: post.fields.slug
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("article", {
      className: "post-list-item",
      itemScope: true,
      itemType: "http://schema.org/Article"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: post.fields.slug,
      itemProp: "url"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      itemProp: "headline"
    }, title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, post.frontmatter.date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      dangerouslySetInnerHTML: {
        __html: post.frontmatter.description || post.excerpt
      },
      itemProp: "description"
    }))));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogIndex);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_4__["default"], {
  title: "Ali's Portfolio"
});
const pageQuery = "3100300281";

/***/ }),

/***/ "./src/components/button.css":
/*!***********************************!*\
  !*** ./src/components/button.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./src/components/header.css":
/*!***********************************!*\
  !*** ./src/components/header.css ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./public/page-data/sq/d/2841359383.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/2841359383.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"","description":"A starter blog demonstrating what Gatsby can do.","social":{"twitter":"kylemathews"}}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/3257411868.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/3257411868.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"author":{"name":"Kyle Mathews","summary":"who lives and works in San Francisco building useful things."},"social":{"twitter":"kylemathews"}}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-jshead.js.map
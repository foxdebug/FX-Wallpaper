/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwallpaper"] = self["webpackChunkwallpaper"] || []).push([["home"],{

/***/ "./src/components/page/page.scss":
/*!***************************************!*\
  !*** ./src/components/page/page.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://wallpaper/./src/components/page/page.scss?");

/***/ }),

/***/ "./src/pages/collection/collection.scss":
/*!**********************************************!*\
  !*** ./src/pages/collection/collection.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://wallpaper/./src/pages/collection/collection.scss?");

/***/ }),

/***/ "./src/pages/home/home.scss":
/*!**********************************!*\
  !*** ./src/pages/home/home.scss ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://wallpaper/./src/pages/home/home.scss?");

/***/ }),

/***/ "./src/components/page/page.hbs":
/*!**************************************!*\
  !*** ./src/components/page/page.hbs ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"<div id=\\\"{{id}}\\\" class=\\\"page {{#secondary}}secondary{{/secondary}}\\\">\\n  <header>{{#secondary}}\\n    <span class=\\\"icon-arrow_back\\\" action=\\\"back\\\"></span>\\n    <span class=\\\"title\\\">{{{title}}}</span>\\n  {{/secondary}}</header>\\n  <div class=\\\"page-body\\\"></div>\\n</div>\");\n\n//# sourceURL=webpack://wallpaper/./src/components/page/page.hbs?");

/***/ }),

/***/ "./src/pages/collection/image-preview.hbs":
/*!************************************************!*\
  !*** ./src/pages/collection/image-preview.hbs ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"<div\\n  class='img'\\n  action='set-wallpaper'\\n  style='background-color: {{avgColor}}; \\n  background-image: url({{src.thumbnail}});\\n  height: {{relative_height}}px;\\n  width: {{relative_width}}px;\\n  top: {{top}}px;\\n  {{#left}}left: {{.}}px;{{/left}}\\n  {{#right}}right: {{.}}px;{{/right}}'\\n  count='{{count}}'\\n  page='{{page}}'\\n  favorite='{{favorite}}'\\n  image-id='{{id}}'\\n  avg-color='{{avgColor}}'\\n  author='{{meta.author}}'\\n  website='{{meta.website}}'\\n  email='{{meta.email}}'\\n  url-thumbnail='{{src.thumbnail}}'\\n  url-original='{{src.original}}'\\n  image-height='{{height}}',\\n  image-width='{{width}}'\\n>\\n  <div class='bottom-bar'>\\n    <div>\\n      {{#meta.author}}<small>by</small>&nbsp;{{/meta.author}}\\n      <span action='open-link' data-href='{{#meta.website}}{{.}}{{/meta.website}}'>{{#meta.author}}{{.}}{{/meta.author}}</span>\\n    </div>\\n    <span class='icon-favorite{{#favorite}} fill-red{{/favorite}}' action='favorite' image-id='{{id}}'></span>\\n  </div>\\n</div>\");\n\n//# sourceURL=webpack://wallpaper/./src/pages/collection/image-preview.hbs?");

/***/ }),

/***/ "./src/pages/home/header.hbs":
/*!***********************************!*\
  !*** ./src/pages/home/header.hbs ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"<input type='search' placeholder='Wallpaper FXDBG' />\\n<button class='icon-search' action='enable-search'></button>\\n<button class='icon-settings' action='settings'></button>\");\n\n//# sourceURL=webpack://wallpaper/./src/pages/home/header.hbs?");

/***/ }),

/***/ "./src/pages/home/home.hbs":
/*!*********************************!*\
  !*** ./src/pages/home/home.hbs ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"<div class=\\\"collections\\\">\\n  {{#collections}}\\n  <div\\n  class='collection'\\n  {{#hidden}}hidden{{/hidden}}\\n  {{#query}}query='.'{{/query}}\\n  title='{{title}}'\\n  action='{{type}}'\\n  image-src='{{src}}'\\n  collection-name='{{title}}'\\n    style=\\\"{{#src}}background-image: url({{src}});{{/src}}\\n    height: {{height}}px;\\n    width: {{width}}px;\\\"\\n  >\\n    <div class='bottom'>\\n      <span class='title'>{{title}}</span>\\n      <p class='description'>{{description}}</p>\\n    </div>\\n  </div>\\n{{/collections}}\\n</div>\\n\\n<h2>Explore wallpapers</h2>\\n<div class=\\\"tags scrollable\\\">\\n  {{#tags}}\\n  <span class=\\\"tag\\\" action='open-tag'>{{.}}</span>\\n  {{/tags}}\\n</div>\");\n\n//# sourceURL=webpack://wallpaper/./src/pages/home/home.hbs?");

/***/ }),

/***/ "./secrets.json":
/*!**********************!*\
  !*** ./secrets.json ***!
  \**********************/
/***/ (function(module) {

"use strict";
eval("module.exports = JSON.parse('{\"apiUrl\":\"https://wallpaper.foxdebug.com/\"}');\n\n//# sourceURL=webpack://wallpaper/./secrets.json?");

/***/ }),

/***/ "./src/components/page/page.js":
/*!*************************************!*\
  !*** ./src/components/page/page.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var _page_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page.scss */ \"./src/components/page/page.scss\");\n/* harmony import */ var html_tag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-tag-js */ \"./node_modules/html-tag-js/dist/tag.js\");\n/* harmony import */ var html_tag_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html_tag_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mustache */ \"./node_modules/mustache/mustache.mjs\");\n/* harmony import */ var _page_hbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.hbs */ \"./src/components/page/page.hbs\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/helpers */ \"./src/utils/helpers.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ \"./src/config.js\");\n\n\n\n\n\n\n\n\n\n/**\n *\n * @param {String} title\n * @param {boolean|PageOption} [options] options or is secondary?\n * @returns {Page}\n */\nfunction Page(title, options) {\n  let id = _utils_helpers__WEBPACK_IMPORTED_MODULE_4__.default.uuid();\n  let secondary = false;\n  let onhide;\n\n  if (typeof options === 'boolean') {\n    secondary = options;\n  } else if (typeof options === 'object') {\n    id = options.id;\n    secondary = options.secondary;\n  } else {\n    options = {};\n  }\n\n  const content = mustache__WEBPACK_IMPORTED_MODULE_2__.default.render(_page_hbs__WEBPACK_IMPORTED_MODULE_3__.default, {\n    id,\n    title,\n    secondary,\n  });\n  const $page = html_tag_js__WEBPACK_IMPORTED_MODULE_1___default().parse(content);\n\n  if (typeof options.onhide === 'function') {\n    $page.onhide = options.onhide;\n  }\n\n  Object.defineProperties($page, {\n    onhide: {\n      set(fun) {\n        onhide = fun;\n      },\n      get() {\n        return onhide;\n      },\n    },\n    id: {\n      value: id,\n    },\n    render: {\n      value() {\n        if (secondary) {\n          actionStack.push({\n            id,\n            type: 'page',\n            action: this.hide,\n          });\n        }\n\n        $page.addEventListener('click', (e) => {\n          const $target = e.target;\n          if ($target instanceof HTMLElement) {\n            const action = $target.getAttribute('action');\n            if (action === 'back') {\n              this.hide();\n              actionStack.remove(id);\n            }\n          }\n        });\n\n        app.append(this);\n      },\n    },\n    hide: {\n      value() {\n        if (typeof onhide === 'function') onhide();\n        $page.classList.add('hide');\n        setTimeout($page.remove.bind($page), _config__WEBPACK_IMPORTED_MODULE_5__.default.pageTransitionTimeout);\n      },\n    },\n    content: {\n      get() {\n        return this.get('.page-body').innerHTML;\n      },\n      set(HTMLtext) {\n        const $body = this.get('.page-body');\n        if (typeof HTMLtext === 'string') $body.innerHTML = HTMLtext;\n        if (HTMLtext instanceof HTMLElement) $body.append(HTMLtext);\n      },\n    },\n  });\n\n  return $page;\n}\n\n\n//# sourceURL=webpack://wallpaper/./src/components/page/page.js?");

/***/ }),

/***/ "./src/lib/api.js":
/*!************************!*\
  !*** ./src/lib/api.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Api; }\n/* harmony export */ });\n/* harmony import */ var _deadlyjack_ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deadlyjack/ajax */ \"./node_modules/@deadlyjack/ajax/dist/ajax.js\");\n/* harmony import */ var _deadlyjack_ajax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deadlyjack_ajax__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _secrets_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../secrets.json */ \"./secrets.json\");\n\n\n\nfunction Api(pageSize = 10) {\n  function requestObj(url) {\n    return {\n      url: `${_secrets_json__WEBPACK_IMPORTED_MODULE_1__.apiUrl}${url}`,\n    };\n  }\n\n  return {\n    async all(page) {\n      const request = requestObj(`images/all?page=${page}&count=${pageSize}`);\n      const response = await _deadlyjack_ajax__WEBPACK_IMPORTED_MODULE_0___default()(request);\n      return response;\n    },\n    async collections() {\n      const request = requestObj('collections');\n      const response = await _deadlyjack_ajax__WEBPACK_IMPORTED_MODULE_0___default()(request);\n      return response;\n    },\n    /**\n     *\n     * @param {String} id ID of the collection\n     * @param {Number} page Page number\n     */\n    async collection(id, page = 1) {\n      const request = requestObj(`collection/${id}?search=on&page=${page}&count=${pageSize}`);\n      const response = await _deadlyjack_ajax__WEBPACK_IMPORTED_MODULE_0___default()(request);\n      return response;\n    },\n    /**\n     * @returns {Number}\n     */\n    get PER_PAGE() {\n      return pageSize;\n    },\n  };\n}\n\n\n//# sourceURL=webpack://wallpaper/./src/lib/api.js?");

/***/ }),

/***/ "./src/lib/favorite.js":
/*!*****************************!*\
  !*** ./src/lib/favorite.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./save */ \"./src/lib/save.js\");\n\n\nconst FAVORITE = 'favorite';\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  /**\n   * Add an image to favorite list.\n   * @param {Image} image\n   */\n  add(image) {\n    _save__WEBPACK_IMPORTED_MODULE_0__.default.add(image, FAVORITE);\n    document.dispatchEvent(new CustomEvent('favorite:add'));\n    document.dispatchEvent(new CustomEvent('favorite:change'));\n  },\n  /**\n   * Remove an image from favorite list.\n   * @param {Image} image\n   */\n  remove(image) {\n    _save__WEBPACK_IMPORTED_MODULE_0__.default.remove(image, FAVORITE);\n    document.dispatchEvent(new CustomEvent('favorite:remove'));\n    document.dispatchEvent(new CustomEvent('favorite:change'));\n  },\n  /**\n   * Clears favorite list permanently\n   */\n  clear() {\n    _save__WEBPACK_IMPORTED_MODULE_0__.default.clear(FAVORITE);\n    document.dispatchEvent(new CustomEvent('favorite:clear'));\n    document.dispatchEvent(new CustomEvent('favorite:change'));\n  },\n  /**\n   * Finds an image in favorite list.\n   * @param {Image} image\n   * @returns {Image}\n   */\n  has(image) {\n    return _save__WEBPACK_IMPORTED_MODULE_0__.default.has(image, FAVORITE);\n  },\n  /**\n   * Retrive all images from favorite list.\n   * @returns {Array<Image>}\n   */\n  retrive() {\n    return _save__WEBPACK_IMPORTED_MODULE_0__.default.retrive(FAVORITE);\n  },\n});\n\n\n//# sourceURL=webpack://wallpaper/./src/lib/favorite.js?");

/***/ }),

/***/ "./src/lib/generatedImage.js":
/*!***********************************!*\
  !*** ./src/lib/generatedImage.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GeneratedImage; }\n/* harmony export */ });\n/* harmony import */ var _static_colors_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../static/colors.json */ \"./src/static/colors.json\");\n/* harmony import */ var _pages_collection_collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/collection/collection */ \"./src/pages/collection/collection.js\");\n// import tag from 'html-tag-js';\n\n\n\n/**\n *\n * @param {String} title\n * @param {'solid-colors' | 'patterns' | 'gradient'} type\n */\nfunction GeneratedImage(title, type) {\n  const { height, width } = window.screen;\n  const sHeight = 650;\n  const sWidth = (sHeight / height) * width;\n  const original = { width, height };\n  const thumbnail = { width: sWidth, height: sHeight };\n  const colorNames = shuffleArray(Object.keys(_static_colors_json__WEBPACK_IMPORTED_MODULE_0__));\n\n  if (type === 'solid-colors') {\n    const count = 25;\n    let pageNo = 0;\n\n    (0,_pages_collection_collection__WEBPACK_IMPORTED_MODULE_1__.default)('Solid colors', async () => {\n      const start = (pageNo++) * count;\n      const end = start + count;\n      const colorsSection = colorNames.slice(start, end);\n\n      /**\n       * @type {Array<Image>}\n       */\n      const images = [];\n      const len = colorsSection.length;\n      for (let i = 0; i < len; ++i) {\n        const colorName = colorsSection[i];\n        const color = _static_colors_json__WEBPACK_IMPORTED_MODULE_0__[colorName];\n\n        images.push(new Promise((resolve) => {\n          (async () => {\n            const originalSrc = await createImage(original, color);\n            const thumbnailSrc = await createImage(thumbnail, color);\n\n            resolve({\n              id: colorName,\n              height,\n              width,\n              avgColor: color,\n              src: {\n                original: originalSrc,\n                thumbnail: thumbnailSrc,\n              },\n            });\n          })();\n        }));\n      }\n      const result = await Promise.all(images);\n      return result;\n    });\n  }\n}\n\n/**\n *\n * @param {{height: Number, width: Number}} dimension\n * @param {String} color\n */\nfunction createImage(dimension, color) {\n  const { height, width } = dimension;\n  const $canvas = document.createElement('canvas');\n  const ctx = $canvas.getContext('2d');\n  $canvas.height = height;\n  $canvas.width = width;\n\n  ctx.fillStyle = color;\n  ctx.fillRect(0, 0, width, height);\n\n  return new Promise((resolve, reject) => {\n    $canvas.toBlob((blob) => {\n      const fileReader = new FileReader();\n      fileReader.readAsDataURL(blob);\n      fileReader.onloadend = (e) => {\n        resolve(e.target.result);\n      };\n      fileReader.onerror = reject;\n    }, 'image/jpeg', 1);\n  });\n}\n\n/**\n *\n * @param {Array<String>} array\n * @returns {Array<String>}\n */\nfunction shuffleArray(array) {\n  for (let i = array.length - 1; i > 0; i--) {\n    const j = Math.floor(Math.random() * (i + 1));\n    const temp = array[i];\n    array[i] = array[j];\n    array[j] = temp;\n  }\n  return array;\n}\n\n\n//# sourceURL=webpack://wallpaper/./src/lib/generatedImage.js?");

/***/ }),

/***/ "./src/lib/save.js":
/*!*************************!*\
  !*** ./src/lib/save.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  /**\n   * Add an image to favorite list.\n   * @param {Image} image\n   */\n  add(image, docName) {\n    const doc = this.retrive(docName);\n    doc.push(image);\n    localStorage[docName] = JSON.stringify(doc);\n  },\n  /**\n   * Remove an image from favorite list.\n   * @param {Image} image\n   */\n  remove(image, docName) {\n    const doc = this.retrive(docName);\n    const { id } = image;\n    const newList = doc.filter((favorite) => favorite.id !== id);\n    localStorage[docName] = JSON.stringify(newList);\n  },\n  /**\n   * Clears favorite list permanently\n   */\n  clear(docName) {\n    localStorage[docName] = '[]';\n  },\n  /**\n   * Finds an image in favorite list.\n   * @param {Image} image\n   * @returns {Image}\n   */\n  has(image, docName) {\n    const doc = this.retrive(docName);\n    const { id } = image;\n    const found = doc.find((record) => record.id === id);\n    return found;\n  },\n  /**\n   * Retrive all images from favorite list.\n   * @returns {Array<Image>}\n   */\n  retrive(docName) {\n    let doc = JSON.parse(localStorage[docName] || '[]');\n    if (!Array.isArray(doc)) doc = [];\n    return doc;\n  },\n});\n\n\n//# sourceURL=webpack://wallpaper/./src/lib/save.js?");

/***/ }),

/***/ "./src/pages/collection/collection.include.js":
/*!****************************************************!*\
  !*** ./src/pages/collection/collection.include.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CollectionInclude; }\n/* harmony export */ });\n/* harmony import */ var _collection_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collection.scss */ \"./src/pages/collection/collection.scss\");\n/* harmony import */ var html_tag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-tag-js */ \"./node_modules/html-tag-js/dist/tag.js\");\n/* harmony import */ var html_tag_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html_tag_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mustache */ \"./node_modules/mustache/mustache.mjs\");\n/* harmony import */ var _image_preview_hbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-preview.hbs */ \"./src/pages/collection/image-preview.hbs\");\n/* harmony import */ var _components_page_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/page/page */ \"./src/components/page/page.js\");\n/* harmony import */ var _lib_favorite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/favorite */ \"./src/lib/favorite.js\");\n/* harmony import */ var _components_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/loader */ \"./src/components/loader.js\");\n/* harmony import */ var _cropAndAdjust_cropAndAdjust__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cropAndAdjust/cropAndAdjust */ \"./src/pages/cropAndAdjust/cropAndAdjust.js\");\n\n\n\n\n\n\n\n\n\n/**\n *\n * @param {String} name\n * @param {function():Promise<Array<Image>>} nextPage\n */\nfunction CollectionInclude(name, nextPage, onhide) {\n  const { innerWidth } = window;\n  const width = (Math.min(innerWidth, 800)) / 2;\n  const $page = (0,_components_page_page__WEBPACK_IMPORTED_MODULE_4__.default)(name, {\n    id: 'ldxpq13x',\n    secondary: true,\n  });\n  const $pageBody = $page.get('.page-body');\n  const pages = [];\n  const loader = (0,_components_loader__WEBPACK_IMPORTED_MODULE_6__.default)('#39f');\n  let topRow1 = 0;\n  let topRow2 = 0;\n  let isLoading = false;\n  let shouldLoadNewPage = true;\n  let counter = 0;\n  let imgCounter = 0;\n  let row = 1;\n\n  loader\n    .show()\n    .percentageTextVisible(false)\n    .animate()\n    .messageText = 'Loading...';\n\n  nextPage().then((images) => {\n    const $container = parsePage(images);\n    loader.hide();\n    if (!$container.innerHTML) {\n      $pageBody.setAttribute('empty-message', 'No wallpaper found...');\n      return;\n    }\n    $pageBody.style.height = `${$container.getAttribute('height')}px`;\n    renderPage($container);\n    pages.push($container);\n  });\n\n  $page.addEventListener('scroll', scrollHander);\n  $page.addEventListener('click', clickHandler);\n  $page.render();\n\n  $page.onhide = () => {\n    pages.length = 0;\n    $page.removeEventListener('click', clickHandler);\n    loader.destroy();\n    if (typeof onhide === 'function') onhide();\n  };\n\n  function renderPage($container) {\n    // [...$pageBody.children].forEach(($el) => $el.remove());\n    $pageBody.append($container);\n  }\n\n  /**\n   *\n   * @param {Array<Image>} images\n   */\n  function parsePage(images) {\n    const oldTopRow1 = topRow1;\n    const oldTopRow2 = topRow2;\n    const id = `page_${++counter}`;\n    const $container = html_tag_js__WEBPACK_IMPORTED_MODULE_1___default()('div', { id });\n    let innerHTML = '';\n\n    images.map((img) => {\n      img.page = `Page: ${counter} | Row: ${row}`;\n      img.count = `Image: ${++imgCounter}`;\n      img.favorite = !!_lib_favorite__WEBPACK_IMPORTED_MODULE_5__.default.has(img);\n      img.relative_height = ((width / img.width) * img.height);\n      img.relative_width = width - 7.5;\n\n      if (row === 1) { // row1\n        img.top = topRow1 + 5;\n        img.left = 5;\n        topRow1 += img.relative_height + 5;\n        row = 2;\n      } else { // row2\n        img.top = topRow2 + 5;\n        img.right = 5;\n        topRow2 += img.relative_height + 5;\n        row = 1;\n      }\n\n      innerHTML += mustache__WEBPACK_IMPORTED_MODULE_2__.default.render(_image_preview_hbs__WEBPACK_IMPORTED_MODULE_3__.default, img);\n      return img;\n    });\n\n    const heightRow1 = topRow1 - oldTopRow1;\n    const heightRow2 = topRow2 - oldTopRow2;\n\n    $container.innerHTML = innerHTML;\n    $container.setAttribute('top', Math.min(topRow1, topRow2));\n    $container.setAttribute('bottom', Math.max(topRow1, topRow2));\n    $container.setAttribute('height', Math.max(heightRow1, heightRow2));\n    return $container;\n  }\n\n  /**\n   *\n   * @param {Event} e\n   */\n  function clickHandler(e) {\n    const $target = e.target;\n    if (!($target instanceof HTMLElement)) return;\n    const aciton = $target.getAttribute('action');\n    switch (aciton) {\n      case 'set-wallpaper':\n        (0,_cropAndAdjust_cropAndAdjust__WEBPACK_IMPORTED_MODULE_7__.default)(getImageData($target));\n        break;\n\n      case 'favorite':\n        setUnsetFavorite($target);\n        break;\n      default:\n        break;\n    }\n  }\n\n  /**\n   *\n   * @this {HTMLDivElement}\n   */\n  function scrollHander() {\n    if (isLoading) return;\n    const bottom = this.scrollHeight * 0.98;\n    const oldScrollTop = this.scrollTop;\n    if (bottom <= (oldScrollTop + this.clientHeight) && shouldLoadNewPage) {\n      isLoading = true;\n      loader\n        .show();\n      nextPage()\n        .then((images) => {\n          loader.hide();\n          isLoading = false;\n          if (!images.length) {\n            shouldLoadNewPage = false;\n            return;\n          }\n          const $container = parsePage(images);\n          $pageBody.style.height = `${$container.bottom}px`;\n          renderPage($container);\n          pages.push($container);\n        });\n    }\n  }\n}\n\nfunction setUnsetFavorite($target) {\n  const image = getImageData($target);\n  $target.classList.toggle('fill-red');\n  $target.classList.add('pop');\n  setTimeout(() => {\n    $target.classList.remove('pop');\n  }, 100);\n\n  if (_lib_favorite__WEBPACK_IMPORTED_MODULE_5__.default.has(image)) {\n    _lib_favorite__WEBPACK_IMPORTED_MODULE_5__.default.remove(image);\n  } else {\n    _lib_favorite__WEBPACK_IMPORTED_MODULE_5__.default.add(image);\n  }\n}\n\n/**\n *\n * @param {HTMLElement} $target\n */\nfunction getImageData($target) {\n  $target = html_tag_js__WEBPACK_IMPORTED_MODULE_1___default().get(`[image-id='${$target.getAttribute('image-id')}']`);\n  const getAtr = (atr) => $target.getAttribute(atr);\n  return {\n    id: getAtr('image-id'),\n    avgColor: getAtr('avg-color'),\n    height: getAtr('image-height'),\n    width: getAtr('image-width'),\n    meta: {\n      author: getAtr('author'),\n      website: getAtr('website'),\n      email: getAtr('email'),\n    },\n    src: {\n      thumbnail: getAtr('url-thumbnail'),\n      original: getAtr('url-original'),\n    },\n  };\n}\n\n\n//# sourceURL=webpack://wallpaper/./src/pages/collection/collection.include.js?");

/***/ }),

/***/ "./src/pages/collection/collection.js":
/*!********************************************!*\
  !*** ./src/pages/collection/collection.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Collection; }\n/* harmony export */ });\nfunction Collection(...args) {\n  __webpack_require__.e(/*! import() | home */ \"home\").then(__webpack_require__.bind(__webpack_require__, /*! ./collection.include */ \"./src/pages/collection/collection.include.js\"))\n    .then((module) => {\n      const home = module.default;\n      home(...args);\n    });\n}\n\n\n//# sourceURL=webpack://wallpaper/./src/pages/collection/collection.js?");

/***/ }),

/***/ "./src/pages/cropAndAdjust/cropAndAdjust.js":
/*!**************************************************!*\
  !*** ./src/pages/cropAndAdjust/cropAndAdjust.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CropAndAdjust; }\n/* harmony export */ });\nfunction CropAndAdjust(...args) {\n  Promise.all(/*! import() | cropAndAdjust */[__webpack_require__.e(\"vendors-node_modules_pinch-zoom-element_dist_pinch-zoom_es_js\"), __webpack_require__.e(\"cropAndAdjust\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cropAndAdjust.include */ \"./src/pages/cropAndAdjust/cropAndAdjust.include.js\"))\n    .then((module) => {\n      const cropAndAdjust = module.default;\n      cropAndAdjust(...args);\n    });\n}\n\n\n//# sourceURL=webpack://wallpaper/./src/pages/cropAndAdjust/cropAndAdjust.js?");

/***/ }),

/***/ "./src/pages/home/home.include.js":
/*!****************************************!*\
  !*** ./src/pages/home/home.include.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomeInclude; }\n/* harmony export */ });\n/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.scss */ \"./src/pages/home/home.scss\");\n/* harmony import */ var html_tag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-tag-js */ \"./node_modules/html-tag-js/dist/tag.js\");\n/* harmony import */ var html_tag_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html_tag_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mustache */ \"./node_modules/mustache/mustache.mjs\");\n/* harmony import */ var _home_hbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.hbs */ \"./src/pages/home/home.hbs\");\n/* harmony import */ var _header_hbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.hbs */ \"./src/pages/home/header.hbs\");\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/api */ \"./src/lib/api.js\");\n/* harmony import */ var _components_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/page/page */ \"./src/components/page/page.js\");\n/* harmony import */ var _collection_collection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../collection/collection */ \"./src/pages/collection/collection.js\");\n/* harmony import */ var _lib_favorite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/favorite */ \"./src/lib/favorite.js\");\n/* harmony import */ var _strings_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./strings.json */ \"./src/pages/home/strings.json\");\n/* harmony import */ var _cropAndAdjust_cropAndAdjust__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../cropAndAdjust/cropAndAdjust */ \"./src/pages/cropAndAdjust/cropAndAdjust.js\");\n/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../settings/settings */ \"./src/pages/settings/settings.js\");\n/* harmony import */ var _lib_generatedImage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../lib/generatedImage */ \"./src/lib/generatedImage.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst MY_LIKES = 'my likes';\nconst SOLID_COLORS = 'solid colors';\n\nfunction HomeInclude() {\n  const PER_PAGE = 25;\n  const MAX_WIDTH = 600;\n  const $page = (0,_components_page_page__WEBPACK_IMPORTED_MODULE_6__.default)('Home', {\n    id: 'logu5ufd',\n    secondary: false,\n  });\n  const api = (0,_lib_api__WEBPACK_IMPORTED_MODULE_5__.default)(PER_PAGE);\n  const $pageBody = $page.get('.page-body');\n  const $header = $page.get('header');\n  const { innerWidth } = window;\n  const width = ((Math.min(innerWidth, MAX_WIDTH)) / 2) - 15;\n  const height = width * 2;\n  const collections = [];\n  const { permissions } = cordova.plugins;\n  const permissionToRequest = permissions.READ_EXTERNAL_STORAGE;\n  let message;\n  let lastSearch;\n  const tags = ['all'];\n\n  if (_lib_favorite__WEBPACK_IMPORTED_MODULE_8__.default.retrive().length > 0) {\n    tags.push(MY_LIKES);\n  }\n\n  if (window.Worker) {\n    tags.push(SOLID_COLORS);\n  }\n\n  $pageBody.style.width = `${Math.min(innerWidth, MAX_WIDTH)}px`;\n  $header.innerHTML = _header_hbs__WEBPACK_IMPORTED_MODULE_4__.default;\n  const $searchInput = $header.get('[type=search]');\n\n  document.addEventListener('wallpaperchange', onWallpaperChange);\n  document.addEventListener('favorite:change', onFvoriteChange);\n  $searchInput.addEventListener('search', submitHandler);\n  $searchInput.addEventListener('focus', onfocus);\n  $page.addEventListener('click', clickHandler);\n  $page.render();\n  render();\n\n  api.collections()\n    .then((res) => {\n      if (Array.isArray(res)) {\n        tags.push(...res);\n      }\n      render();\n    })\n    .catch((err) => {\n      console.log(err);\n    });\n\n  permissions.checkPermission(permissionToRequest, ({ hasPermission }) => {\n    if (hasPermission) {\n      addSystemWallpaper()\n        .then(render)\n        .finally(makeAppReady);\n    } else {\n      const $notification = html_tag_js__WEBPACK_IMPORTED_MODULE_1___default()('div', {\n        textContent: _strings_json__WEBPACK_IMPORTED_MODULE_9__.errorMessage,\n        style: {\n          width: '100%',\n          padding: '20px',\n          boxSizing: 'border-box',\n          backgroundColor: '#f68',\n          textAlign: 'center',\n          color: 'white',\n          margin: '-10px 0 10px 0',\n        },\n        attr: {\n          action: 'grant-access',\n        },\n      });\n      message = () => ($pageBody.firstElementChild\n        ? $pageBody.insertBefore($notification, $pageBody.firstElementChild)\n        : $pageBody.append($notification));\n\n      render();\n      makeAppReady();\n    }\n  });\n\n  function makeAppReady() {\n    setTimeout(() => {\n      app.classList.add('ready');\n      setTimeout(() => {\n        app.classList.remove('ready', 'not-ready');\n      }, 1000);\n    }, 500);\n  }\n\n  /**\n   * @this HTMLFormElement\n   * @param {Event} e\n   */\n  function submitHandler(e) {\n    e.preventDefault();\n    const searchText = this.value;\n\n    if (!searchText) return;\n\n    this.blur();\n    openTag(searchText, api);\n  }\n\n  function onfocus() {\n    const $text = this;\n    if (lastSearch) this.value = lastSearch;\n    this.placeholder = _strings_json__WEBPACK_IMPORTED_MODULE_9__.search;\n    actionStack.push({\n      id: 'unfocus-search',\n      action() {\n        $text.blur();\n      },\n    });\n\n    this.onblur = function onblur() {\n      lastSearch = this.value;\n      this.value = '';\n      window.system.getAppInfo((res) => {\n        this.placeholder = res.label;\n      }, () => {\n        this.placeholder = 'Wallpaper';\n      });\n      actionStack.remove('unfocus-search');\n    };\n  }\n\n  function thumbnail(type, title, src, description) {\n    const collection = {\n      title,\n      type,\n      description,\n      height,\n      width,\n      get hidden() {\n        return !this.src;\n      },\n    };\n\n    if (typeof src === 'function') {\n      Object.defineProperty(collection, 'src', {\n        get: src,\n      });\n    } else {\n      collection.src = src;\n    }\n\n    return collection;\n  }\n\n  /**\n   *\n   * @param {Event} e\n   */\n  function clickHandler(e) {\n    const $target = e.target;\n    if (!($target instanceof HTMLElement)) return;\n    const action = $target.getAttribute('action');\n    const getAtr = (atr) => $target.getAttribute(atr);\n    switch (action) {\n      case 'open-tag':\n        openTag($target.textContent, api);\n        break;\n      case 'wallpaper':\n        openWallpaper(\n          getAtr('title'),\n          getAtr('image-src'),\n          '',\n        );\n        break;\n\n      case 'enable-search':\n        $searchInput.focus();\n        break;\n\n      case 'search':\n        openTag(getAtr('title'), api);\n        break;\n\n      case 'settings':\n        (0,_settings_settings__WEBPACK_IMPORTED_MODULE_11__.default)();\n        break;\n\n      case 'grant-access':\n        permissions.requestPermission(\n          permissionToRequest,\n          ({ hasPermission: gotPermission }) => {\n            if (gotPermission) {\n              message = null;\n              addSystemWallpaper().then(render);\n            }\n          },\n        );\n        break;\n\n      default:\n        break;\n    }\n  }\n\n  function render() {\n    $page.content = mustache__WEBPACK_IMPORTED_MODULE_2__.default.render(_home_hbs__WEBPACK_IMPORTED_MODULE_3__.default, { collections, tags });\n    if (typeof message === 'function') message();\n  }\n\n  async function addSystemWallpaper() {\n    const wallpapers = [];\n    let src;\n\n    src = await new Promise((resolve, reject) => {\n      window.wallpaper.getWallpaper('HOME', resolve, reject);\n    });\n    if (src) {\n      wallpapers.push({\n        name: 'Home screen',\n        src,\n      });\n    }\n\n    src = await new Promise((resolve, reject) => {\n      window.wallpaper.getWallpaper('LOCK', resolve, reject);\n    });\n    if (src) {\n      wallpapers.push({\n        name: 'Lock screen',\n        src,\n      });\n    }\n\n    const API = await new Promise((resolve, reject) => {\n      window.wallpaper.getAPILevel(resolve, reject);\n    });\n\n    if (API < 24) wallpapers.splice(1);\n\n    if (wallpapers.length === 1) {\n      wallpapers[0].name = 'Home & Lock screen';\n    }\n\n    wallpapers.forEach((wallpaper) => {\n      collections.unshift(thumbnail('wallpaper', wallpaper.name, wallpaper.src, 'Active wallpaper'));\n    });\n  }\n\n  function onWallpaperChange() {\n    let acc = 1;\n    const regex = /^(Home|Lock)(\\s&\\sLock)? screen/;\n    const [home, lock] = collections;\n    if (home && regex.test(home.title)) collections.splice(--acc, 1);\n    if (lock && regex.test(lock.title)) collections.splice(acc, 1);\n\n    addSystemWallpaper().then(render);\n  }\n\n  function onFvoriteChange() {\n    const favorites = _lib_favorite__WEBPACK_IMPORTED_MODULE_8__.default.retrive();\n    if (favorites.length && !tags.includes(MY_LIKES)) {\n      tags.unshift(MY_LIKES);\n    } else if (!favorites.length && tags.includes(MY_LIKES)) {\n      tags.splice(tags.indexOf(MY_LIKES), 1);\n    }\n    render();\n  }\n}\n\nfunction openWallpaper(id, original, thumbnail) {\n  (0,_cropAndAdjust_cropAndAdjust__WEBPACK_IMPORTED_MODULE_10__.default)({\n    title: id,\n    get id() {\n      return this.title;\n    },\n    src: {\n      original,\n      thumbnail,\n    },\n  });\n}\n\n/**\n   *\n   * @param {String} wallpaperTag\n   * @param {any} api\n   */\nfunction openTag(wallpaperTag, api) {\n  const { PER_PAGE } = api;\n  if (wallpaperTag === MY_LIKES) {\n    (0,_collection_collection__WEBPACK_IMPORTED_MODULE_7__.default)(MY_LIKES, (() => {\n      let pageCount = 0;\n      return (async () => {\n        const start = (pageCount++) * PER_PAGE;\n        return _lib_favorite__WEBPACK_IMPORTED_MODULE_8__.default.retrive().slice(start, start + PER_PAGE);\n      });\n    })());\n    return;\n  }\n\n  if (wallpaperTag === 'all') {\n    (0,_collection_collection__WEBPACK_IMPORTED_MODULE_7__.default)('All', (() => {\n      let pageCount = 0;\n      return (async () => {\n        const result = await api.all(++pageCount);\n        return result;\n      });\n    })());\n    return;\n  }\n\n  if (wallpaperTag === SOLID_COLORS) {\n    (0,_lib_generatedImage__WEBPACK_IMPORTED_MODULE_12__.default)(SOLID_COLORS, 'solid-colors');\n    return;\n  }\n\n  (0,_collection_collection__WEBPACK_IMPORTED_MODULE_7__.default)(wallpaperTag.capitalize(), (() => {\n    let pageCount = 0;\n    return (async () => {\n      const result = await api.collection(wallpaperTag, ++pageCount);\n      return result;\n    });\n  })());\n}\n\n\n//# sourceURL=webpack://wallpaper/./src/pages/home/home.include.js?");

/***/ }),

/***/ "./src/pages/home/strings.json":
/*!*************************************!*\
  !*** ./src/pages/home/strings.json ***!
  \*************************************/
/***/ (function(module) {

"use strict";
eval("module.exports = JSON.parse('{\"errorMessage\":\"Cannot display current wallpaper without access to your device\\'s storage. Click here to grant access.\",\"search\":\"Search\"}');\n\n//# sourceURL=webpack://wallpaper/./src/pages/home/strings.json?");

/***/ }),

/***/ "./src/pages/settings/settings.js":
/*!****************************************!*\
  !*** ./src/pages/settings/settings.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Settings; }\n/* harmony export */ });\nfunction Settings(...args) {\n  __webpack_require__.e(/*! import() | settings */ \"settings\").then(__webpack_require__.bind(__webpack_require__, /*! ./settings.include */ \"./src/pages/settings/settings.include.js\"))\n    .then((module) => {\n      const settings = module.default;\n      settings(...args);\n    });\n}\n\n\n//# sourceURL=webpack://wallpaper/./src/pages/settings/settings.js?");

/***/ }),

/***/ "./src/static/colors.json":
/*!********************************!*\
  !*** ./src/static/colors.json ***!
  \********************************/
/***/ (function(module) {

"use strict";
eval("module.exports = JSON.parse('{\"aliceblue\":\"#F0F8FF\",\"antiquewhite\":\"#FAEBD7\",\"aqua\":\"#00FFFF\",\"aquamarine\":\"#7FFFD4\",\"azure\":\"#F0FFFF\",\"beige\":\"#F5F5DC\",\"bisque\":\"#FFE4C4\",\"black\":\"#000000\",\"blanchedalmond\":\"#FFEBCD\",\"blue\":\"#0000FF\",\"blueviolet\":\"#8A2BE2\",\"brown\":\"#A52A2A\",\"burlywood\":\"#DEB887\",\"cadetblue\":\"#5F9EA0\",\"chartreuse\":\"#7FFF00\",\"chocolate\":\"#D2691E\",\"coral\":\"#FF7F50\",\"cornflowerblue\":\"#6495ED\",\"cornsilk\":\"#FFF8DC\",\"crimson\":\"#DC143C\",\"cyan\":\"#00FFFF\",\"darkblue\":\"#00008B\",\"darkcyan\":\"#008B8B\",\"darkgoldenrod\":\"#B8860B\",\"darkgray\":\"#A9A9A9\",\"darkgreen\":\"#006400\",\"darkkhaki\":\"#BDB76B\",\"darkmagenta\":\"#8B008B\",\"darkolivegreen\":\"#556B2F\",\"darkorange\":\"#FF8C00\",\"darkorchid\":\"#9932CC\",\"darkred\":\"#8B0000\",\"darksalmon\":\"#E9967A\",\"darkseagreen\":\"#8FBC8F\",\"darkslateblue\":\"#483D8B\",\"darkslategray\":\"#2F4F4F\",\"darkturquoise\":\"#00CED1\",\"darkviolet\":\"#9400D3\",\"deeppink\":\"#FF1493\",\"deepskyblue\":\"#00BFFF\",\"dimgray\":\"#696969\",\"dodgerblue\":\"#1E90FF\",\"firebrick\":\"#B22222\",\"floralwhite\":\"#FFFAF0\",\"forestgreen\":\"#228B22\",\"fuchsia\":\"#FF00FF\",\"gainsboro\":\"#DCDCDC\",\"ghostwhite\":\"#F8F8FF\",\"gold\":\"#FFD700\",\"goldenrod\":\"#DAA520\",\"gray\":\"#808080\",\"green\":\"#008000\",\"greenyellow\":\"#ADFF2F\",\"honeydew\":\"#F0FFF0\",\"hotpink\":\"#FF69B4\",\"indianred\":\"#CD5C5C\",\"indigo\":\"#4B0082\",\"ivory\":\"#FFFFF0\",\"khaki\":\"#F0E68C\",\"lavender\":\"#E6E6FA\",\"lavenderblush\":\"#FFF0F5\",\"lawngreen\":\"#7CFC00\",\"lemonchiffon\":\"#FFFACD\",\"lightblue\":\"#ADD8E6\",\"lightcoral\":\"#F08080\",\"lightcyan\":\"#E0FFFF\",\"lightgoldenrodyellow\":\"#FAFAD2\",\"lightgreen\":\"#90EE90\",\"lightgrey\":\"#D3D3D3\",\"lightpink\":\"#FFB6C1\",\"lightsalmon\":\"#FFA07A\",\"lightseagreen\":\"#20B2AA\",\"lightskyblue\":\"#87CEFA\",\"lightslategray\":\"#778899\",\"lightsteelblue\":\"#B0C4DE\",\"lightyellow\":\"#FFFFE0\",\"lime\":\"#00FF00\",\"limegreen\":\"#32CD32\",\"linen\":\"#FAF0E6\",\"magenta\":\"#FF00FF\",\"maroon\":\"#800000\",\"mediumaquamarine\":\"#66CDAA\",\"mediumblue\":\"#0000CD\",\"mediumorchid\":\"#BA55D3\",\"mediumpurple\":\"#9370DB\",\"mediumseagreen\":\"#3CB371\",\"mediumslateblue\":\"#7B68EE\",\"mediumspringgreen\":\"#00FA9A\",\"mediumturquoise\":\"#48D1CC\",\"mediumvioletred\":\"#C71585\",\"midnightblue\":\"#191970\",\"mintcream\":\"#F5FFFA\",\"mistyrose\":\"#FFE4E1\",\"moccasin\":\"#FFE4B5\",\"navajowhite\":\"#FFDEAD\",\"navy\":\"#000080\",\"oldlace\":\"#FDF5E6\",\"olive\":\"#808000\",\"olivedrab\":\"#6B8E23\",\"orange\":\"#FFA500\",\"orangered\":\"#FF4500\",\"orchid\":\"#DA70D6\",\"palegoldenrod\":\"#EEE8AA\",\"palegreen\":\"#98FB98\",\"paleturquoise\":\"#AFEEEE\",\"palevioletred\":\"#DB7093\",\"papayawhip\":\"#FFEFD5\",\"peachpuff\":\"#FFDAB9\",\"peru\":\"#CD853F\",\"pink\":\"#FFC0CB\",\"plum\":\"#DDA0DD\",\"powderblue\":\"#B0E0E6\",\"purple\":\"#800080\",\"red\":\"#FF0000\",\"rosybrown\":\"#BC8F8F\",\"royalblue\":\"#4169E1\",\"saddlebrown\":\"#8B4513\",\"salmon\":\"#FA8072\",\"sandybrown\":\"#FAA460\",\"seagreen\":\"#2E8B57\",\"seashell\":\"#FFF5EE\",\"sienna\":\"#A0522D\",\"silver\":\"#C0C0C0\",\"skyblue\":\"#87CEEB\",\"slateblue\":\"#6A5ACD\",\"slategray\":\"#708090\",\"snow\":\"#FFFAFA\",\"springgreen\":\"#00FF7F\",\"steelblue\":\"#4682B4\",\"tan\":\"#D2B48C\",\"teal\":\"#008080\",\"thistle\":\"#D8BFD8\",\"tomato\":\"#FF6347\",\"turquoise\":\"#40E0D0\",\"violet\":\"#EE82EE\",\"wheat\":\"#F5DEB3\",\"white\":\"#FFFFFF\",\"whitesmoke\":\"#F5F5F5\",\"yellow\":\"#FFFF00\",\"yellowgreen\":\"#9ACD32\"}');\n\n//# sourceURL=webpack://wallpaper/./src/static/colors.json?");

/***/ })

}]);
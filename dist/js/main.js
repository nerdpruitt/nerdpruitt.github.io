/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://nerdpruitt.github.io/./src/scss/index.scss?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("// Detect which link clicks to follow\n// Store scroll position\n// History - push, replace, and pop state\n// Fetch, validate pages and urls\n// cache pages\n\n// potentially move to utility\nfunction dispatchEvent (name, info) {\n    const event = new CustomEvent(name, {\n        detail: info\n    });\n\n    document.dispatchEvent(event);\n}\n\nfunction expandURL (locatable) {\n    const anchor = document.createElement('a');\n    anchor.href = locatable.toString();\n    return new URL(anchor.href);\n}\n\n/**\n * @description - Update the title and HTML content of the current page\n * @param {String} title - The new title for the page\n * @param {String} content - The new HTML content for the page\n */\nfunction updateContent (title, content) {\n    document.title = title;\n    document.querySelector('[data-element=\"main-content\"]').innerHTML = content;\n\n    // hide loading element\n}\n\nconst onClick = (event) => {\n    if (!event.target.closest(selector)) {\n        return;\n    }\n\n    const url = event.target.getAttribute('href');\n\n    fetch(url).then((response) => {\n        // show loading element\n\n        return response.text();\n    }).then((html) => {\n        // inspect the html to make sure it's all good.\n\n        // Convert the HTML string into a document object\n        var parser = new DOMParser();\n        var doc = parser.parseFromString(html, 'text/html');\n\n        // Get the title and main content\n        const title = page.querySelector('title').textContent;\n        const content = page.querySelector('[data-element=\"main-content\"]').innerHTML;\n\n        updateContent(title, content);\n\n        // hide loading element\n    }).catch((error) => {\n        // There was an error\n        console.warn('The guy who built this must be a hack because something went wrong.', error);\n    });\n};\n\n\nclass History {\n\n}\n\n\nclass Page {\n\n}\n\n// Link click observer delegate\n// willFollowLinkToLocation(link: Element, location: URL) {\n//     return this.elementIsNavigable(link) &&\n//         this.locationIsVisitable(location) &&\n//         this.applicationAllowsFollowingLinkToLocation(link, location);\n// }\n\n// followedLinkToLocation(link: Element, location: URL) {\n//     const action = this.getActionForLink(link)\n//     this.visit(location.href, { action })\n// }\n\n\n\nclass ScrollObserver {\n\n}\n\n\nclass LinkObserver {\n    start () {\n        if (!this.started) {\n            window.addEventListener('click', this.captureClick, true);\n            this.started = true;\n        }\n    }\n\n    stop () {\n        if (this.started) {\n            window.removeEventListener('click', this.captureClick, true);\n            this.started = false;\n        }\n    }\n\n    // Is this a click we should care about?\n    // Or is it cmd + click, right click, etc.\n    trackClick (event) {\n        return !(\n            (event.target && event.target.isContentEditable) ||\n            event.defaultPrevent ||\n            event.which > 1 ||\n            event.altKey ||\n            event.ctrlKey ||\n            event.metaKey ||\n            event.shiftKey\n        );\n    }\n\n    clickBubble (event) {\n        // Evaluate if we care about the click\n        if (this.trackClick(event)) {\n            const link = this.findLinkFromClickTarget(event.target);\n\n            if (link) {\n                const location = this.getLocationForLink(link);\n\n                // If it's all good, fetch location and go!!\n\n                // if (this.delegate.willFollowLinkToLocation(link, location)) {\n                //     event.preventDefault();\n                //     this.delegate.followedLinkToLocation(link, location);\n                // }\n            }\n        }\n    }\n\n    captureClick () {\n        window.removeEventListener('click', this.clickBubble);\n        window.addEventListener('click', this.clickBubble);\n    }\n\n    findLinkFromClickTarget (target) {\n        if (target) {\n            // Not opening in a new window or a download\n            return target.closest('a[href]:not([target^=_]):not([download])');\n        }\n    }\n\n    getLocationForLink (link) {\n        return expandURL(link.getAttribute('href') || '');\n    }\n}\n\n\n//# sourceURL=webpack://nerdpruitt.github.io/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/js/main.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scss/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\ictde\\Documents\\next-js-projs\\socket-chat\\pages\\index.tsx";



function HomePage() {
  const [msg, setMsg] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({
    hello: ''
  });
  const [source, setSource] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({
    src: 'data:image/png;base64,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'
  });
  const styles = {
    section: {
      width: '98vw',
      height: '97vh',
      // border: 'solid 1px black',
      display: 'flex',
      flexDirection: 'column'
    },
    navBarContainer: {
      position: 'relative',
      width: '100%',
      height: '20vh',
      display: 'flex'
    },
    navBar: {
      position: 'fixed',
      width: '100%',
      top: '0',
      left: '0',
      height: '13vh',
      background: 'white',
      boxShadow: '1px 2px 10px gray',
      overflow: 'hidden' // border: 'solid 1px black',

    },
    logo: {
      width: '35vw',
      height: 'auto'
    },
    chatArea: {
      fontSize: '15px',
      height: '100vh',
      width: '100%',
      background: 'white',
      borderRadius: '10px 10px 0 0',
      border: 'lightgray 1px solid',
      margin: '0 0 0.6rem 0',
      paddingTop: '0.7rem',
      display: 'flex',
      flexDirection: 'column',
      padding: '5px 0',
      overflowX: 'hidden',
      overflowY: 'auto'
    },
    preMessage: {
      width: '100%',
      height: 'auto',
      margin: '5px 9px',
      fontSize: '0.9rem',
      fontFamily: 'sans-serif',
      fontWeight: 700,
      color: '#656565'
    },
    message: {
      width: '100%',
      height: 'auto',
      margin: '5px 9px',
      fontFamily: 'sans-serif'
    },
    msgText: {},
    chatEndDisplay: {
      // padding: '0.7rem',
      width: '100%',
      height: '100%',
      display: 'grid'
    },
    newChatBtn: {
      width: '15vw',
      minWidth: '150px',
      height: 'auto',
      fontWeight: 600,
      padding: '1.9vw',
      margin: '0 1vw',
      textAlign: 'center',
      borderRadius: '5px',
      background: 'rgba(0,100,250,1)',
      color: 'white',
      border: 'lightgray 1px solid',
      display: 'grid',
      placeItems: 'center'
    },
    inputArea: {
      width: '100%',
      height: '17vh',
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    button1: {
      width: '15vw',
      minWidth: '100px',
      height: '100%',
      margin: '1rem 1.5rem 0.6rem 0',
      borderRadius: '0 0 0 10px',
      background: 'rgba(0,100,250,1)',
      color: 'white',
      fontWeight: 600,
      border: 'lightgray 1px solid'
    },
    button2: {
      width: '15vw',
      minWidth: '100px',
      height: '100%',
      margin: '1rem 0 0.6rem 0.6rem',
      borderRadius: '0 0 10px 0',
      background: 'white',
      color: 'gray',
      border: 'lightgray 1px solid'
    },
    input: {
      width: '89%',
      height: '95%',
      margin: '1rem 0 0.6rem 0',
      textAlign: 'left',
      border: 'lightgray 1px solid'
    }
  };
  const msgTest = [{
    sender: 'You',
    message: 'Hi'
  }, {
    sender: 'Stranger',
    message: 'hi'
  }, {
    sender: 'Stranger',
    message: 'asl?'
  }, {
    sender: 'You',
    message: 'm'
  }, {
    sender: 'Stranger',
    message: 'm'
  }, {
    sender: 'Stranger',
    message: 'oh. bye'
  }, {
    sender: 'You',
    message: 'Hi'
  }, {
    sender: 'Stranger',
    message: 'hi'
  }, {
    sender: 'Stranger',
    message: 'asl?'
  }, {
    sender: 'You',
    message: 'm'
  }, {
    sender: 'Stranger',
    message: 'm'
  }, {
    sender: 'Stranger',
    message: 'oh. bye'
  }, {
    sender: 'You',
    message: 'Hi'
  }, {
    sender: 'Stranger',
    message: 'hi'
  }, {
    sender: 'Stranger',
    message: 'asl?'
  }, {
    sender: 'You',
    message: 'm'
  }, {
    sender: 'Stranger',
    message: 'm'
  }, {
    sender: 'Stranger',
    message: 'oh. bye'
  }];
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    let socket_instance = socket_io_client__WEBPACK_IMPORTED_MODULE_2___default()();
    socket_instance.on('now', data => {
      setMsg(p => ({
        hello: data.message
      }));
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    style: styles.section,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: styles.navBarContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        style: styles.navBar,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: source.src,
          alt: "Omegle Logo",
          style: styles.logo
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: styles.chatArea,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        style: styles.preMessage,
        children: "You're now chatting with a random stranger. Say STAND WITH HONG KONG AGAINST THE CCP!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }, this), msgTest.map((m, idx) => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          style: styles.message,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            style: {
              'fontWeight': 600,
              fontSize: '15px',
              color: m.sender === 'You' ? 'blue' : 'red'
            },
            children: [m.sender, ": "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            style: styles.msgText,
            children: m.message
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 126
          }, this)]
        }, `po${idx * 3}in${idx}`, true, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 13
        }, this);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        style: styles.chatEndDisplay,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: styles.preMessage,
          children: "Stranger has disconnected."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          style: styles.newChatBtn,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "New chat"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 45
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: styles.inputArea,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        style: styles.button1,
        children: "New (Esc)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
        style: styles.input
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        style: styles.button2,
        children: "Send (Enter)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 155,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvLWNsaWVudFwiIl0sIm5hbWVzIjpbIkhvbWVQYWdlIiwibXNnIiwic2V0TXNnIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImhlbGxvIiwic291cmNlIiwic2V0U291cmNlIiwic3JjIiwic3R5bGVzIiwic2VjdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJuYXZCYXJDb250YWluZXIiLCJwb3NpdGlvbiIsIm5hdkJhciIsInRvcCIsImxlZnQiLCJiYWNrZ3JvdW5kIiwiYm94U2hhZG93Iiwib3ZlcmZsb3ciLCJsb2dvIiwiY2hhdEFyZWEiLCJmb250U2l6ZSIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsIm1hcmdpbiIsInBhZGRpbmdUb3AiLCJwYWRkaW5nIiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwicHJlTWVzc2FnZSIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwiY29sb3IiLCJtZXNzYWdlIiwibXNnVGV4dCIsImNoYXRFbmREaXNwbGF5IiwibmV3Q2hhdEJ0biIsIm1pbldpZHRoIiwidGV4dEFsaWduIiwicGxhY2VJdGVtcyIsImlucHV0QXJlYSIsIm1hcmdpblRvcCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJ1dHRvbjEiLCJidXR0b24yIiwiaW5wdXQiLCJtc2dUZXN0Iiwic2VuZGVyIiwidXNlRWZmZWN0Iiwic29ja2V0X2luc3RhbmNlIiwiaW8iLCJvbiIsImRhdGEiLCJwIiwibWFwIiwibSIsImlkeCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7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QUFBQTtBQUFBLGNBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFvQkU7QUFBSyxXQUFLLEVBQUUvQixNQUFNLENBQUNtQyxTQUFuQjtBQUFBLDhCQUNFO0FBQVEsYUFBSyxFQUFFbkMsTUFBTSxDQUFDdUMsT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQVUsYUFBSyxFQUFFdkMsTUFBTSxDQUFDeUM7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBUSxhQUFLLEVBQUV6QyxNQUFNLENBQUN3QyxPQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEQTtBQTRCRDs7QUFFY2pELHVFQUFmLEU7Ozs7Ozs7Ozs7O0FDdkxGLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XHJcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xyXG5cclxuICBjb25zdCBbIG1zZywgc2V0TXNnIF0gPSBSZWFjdC51c2VTdGF0ZSh7aGVsbG86Jyd9KTtcclxuICBjb25zdCBbIHNvdXJjZSwgc2V0U291cmNlIF0gPSBSZWFjdC51c2VTdGF0ZSh7c3JjOidkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVhnQUFBQ0dDQU1BQUFEZ3JHRkpBQUFBeGxCTVZFWC8vLy8vZndBOG52Ly9mUUQvZXdEL2VBQW9tUDdjN1BmZzd2di9kd0QvLy8wem0vLzhkUURDM2Z2OC8vK1N4Zm43cVdmN2pDejZ6Nno5L2ZmNWlpVDg3OTc2Z0FEcDlQcjVnZ0Q4K083NWV3RDZ1b3I1bzF6NHdwZjY4K2IzMkxmNzRzdjNubEppcmZZMW5QaHh0dmpGNFBla3p2WktvL2I0c1hiN21rdjVranI1NDh6NHdKTDUzTUQ0eTZYNGhRejRsVDYwMXZuUzZQajhxV2Q4dS9VUGtmNmR5UFcxMS9kZHFmYSszZlkvbi9pSndQWjd1ZmYzdEh2MnAxNzduRS82c1gxMnVPOGNtdzZvQUFBUTlrbEVRVlI0bk8xZENWZmJ1aEpPc0IzcXBTSjd5RTRJUy9hazBBZTBFT2o3LzMvcTJiRTFNOXBDRnJqM2xLZnZublBQcVNwSDFxZlJhRGE1dVp5RmhZV0ZoWVdGaFlXRmhZV0ZoWVdGaFlXRmhZV0ZoWVdGaFlXRmhjWC9LNExyNzJZMGduLzc5YjR3R2ovL1V6RGg1TXd5LzNrSXJuK2ZtRkM0c2N4L0locVhvWW41SWZ1M1grNHZSOUM0dmpsN2ZqNjcrWFVhcUVJY1BCZE1Jdi90WDNqWkw0T2c4WEFiQW9aWFA1UkRNM2d3TUcrSlB3S05ud1ZSbFlUaDViVkVmWENqWjk0U2Z6Q0NHdzJmWVhqN0tLb2NBL09XK0VQUmVESW9rZkJXbFByZ1ROZlJFbjhZZ3J1aG52WU5xVmVDcmcrdUxQRWZoZUNYMFU3Y0NQM0pMNkgzclNYK1l4RDhNbG1Kd09zemxmbUd1a3lXK0VOd3QxWGVVNkcvSXN3SGo4cENXZUlQZ0VhQU5jeGZVdWF2NUVjczhmc2plTnFGK0lSNXBMN3hOU1crVjh2US9BY2lJQ2FYU0dYK2hjajhqYlJZWDRMNFp1U25pS0wrNTQrbUNLK1plUktDREtSSTVaY2dmdUhsTTNqdFR4OHNlTjVKMGFUczNnSHpzaUgwSllnZnVKeDRmLzdwZ3pWMlZEUWIvQ1lpTHhyelg0TDRjd2NrdnZucGc4bktlaXRDWXM3L0VCNzhDc1EzUWVDZDZxY2Zyam92ZEJ2enA4QTgrM0lTWHdNVjc5NS8rbUI3YVpvWWFNMEh6MStOK0xrUG1xYjc2WU05N3FOcEVwRy9nMGZ2NkpyOXJjUlRsWUpHelQ5d3RwN3RTZnpKRlR3YTBJRG0zMGw4WmJRY1ZlQlBiZER4VWUzVGgxWjgvL2RRYVBCSGd4Znk3RjlKZkREeEhHL1o0MzhjY2VLZFZtWGJZeDh5dExsdXdBVDBvbjc4N2NSM0V0M2lMTG5wZUEvRWx6NC9ZdkMwTCs4bmwvRHNLVkh5ZnlQeDNTZzFZU1laeldOT3ZOdjU5TEgzdENZM0ZJTTBDQVpsWTlzdzI4QllaWU4vdkRCbkduRWJacDJPUGVIK2s3disvTkV2OXljZTRnWjAxZTYyanBJVHpRZUs2ZURjaTJLNHE2T2RSYmJiMnJIMFhhWXQ4Rk96czNUSkc4elc1TWRKeDk2SDYwbjRBNGpIQTJJTDcyemFIWTBuazNHeE85V1UrVjFFYmpwZDUwaExvbGRldjAwbXEwNjczek95dzJybGRXYzFtUXpXNVduYnk4WjFYRGRLaWE0RDhacllKR3YyMi9HenEvaloya2ZRdjdjNWVSSkNnV3J3TTJzYW5ocC92ems3OXozWGRlTDVlWDU5M1pQL2ZnSUhXalZ0cU14bnhjRmdQYVdUbTNhTGI0TlIxenpob0R5Sk5xTzRydWRGcTdLdWtKTTF1OVVvZTVYNFhiSnh2ZGFxMk82bi9XRUwrRlBsNGZrQW40MUtpK01WbzVyRWV4Y3ZNRjIrYWtiZTJjTDFZRVBINUxwUlcrU2t4L1ZzM3BzbC9XdkZtSko0Y3E0LzVodWdzcWdtUzVkTXVHcUlrdmVYUGhrbDcvaEwxUUZpaXhaOUZUNXFHdzNIQUltWE5oK2JUbnlYRHVDMUZzY3kvMjEvNGpGcThMQWhmbWcwYUNwalg1NnJYeEtFdm85ZWVreHFyeGpCL09MOW44eU5sWmZJbCtOM05MSmM2VVR5S0U2MFptTFB5cHZ5S25uSmJzUVltU2VhOGF5dER1QVBqalQxRHpCckpPTE52UGVXYmw2QlU2ZmkxQVV2M1ZrdTJxN1EzeTh0RnFOemtTOXZvakRmVzNwNUZYNVI2RlFwYVY0bEhuUkYrZ0R4VGwwZ3RiTHlOWSs2aytPWUQvWlg4bGNDOFdiZW16cmVrMmtSbWYrRFhSelBsZVRLOFpTbXZQZWFFNm12dGJTajVIMGhoN1RTZHhKaUE2RDJuQ1Y5MUxCbXNiRi9uTGJaWDlmODVJOG15U3N6NzJ4aW1LeGJSVmw1TmZReFE4cUdOdXNhRFpKMnhCT1NrWTBWMjY3Sk1jTC9PRUgyZXA2bU1jZE1hNWIzeTBjUkgrenR1ejdBb3kvaEZudW1UVFpvZkZ3U2Z0d2lUR3l3Ti9IT09SVTBnUlpwbERIMGFrSjdyTDVxemVhMERkdkV4MU95eGlYZXBRcG81SmtHY002UHV3Vnp2YWZJaDQ5b3h3L04vaXBNSXprbmwrTkJOY0tYeHFqcldDSSt0dGNVcHFVMkttZ01WemNtcGZxMnFoUExCZFhJakpNWGNjK29Nc2lhU0R3TWlSL2dDSGo2SjlONEc5ZngrTS83eDVVaTdIdThGdEJadXQwU29BRktZd3RqbzlTYnN4YmE3RnpNVmdLbmJuUmVxa3NXaE51cVZzOGpLdGNUSEFSWDEybDFFODgzbUtOR1J2K1R1NlQrQWg5OWMrVTJTRUM1ZURCWElBMGJUMk96a05NQmpPbUtCL2plMkZQa01TN01DTzlNa24wSWhEam5JSGk5RXV4NExyVVR5bkwwbW5UdEMxcmJYU2Y3cS9ZYWtXNXdPRFBRVkI0RUhOaXJFdXJpeStNUVNRYjFnNGJObEF1M080SmViVmlNcGJwL25PVnh4K3VlV242bzAyekJrNlRzT3k2WFJHTEROTG5vd2ZGVklpUnZYS2hjWXFkZ0l5anFMakx2Z1l4T2RjcUI4ZC9rdm5DdW5ESGxYOUEzNU5IM2lPc2FKUDRQdkRCL0ZZd2R4eWp5cFkyT3RPWDNNMnllTkw4UVhFcGhZVEROUkQwSVRIR1RneENQNUdFS2prUk5SdWhhUWRBV1ZuZEpHZWh6OVYzUEd0WnVKZ01DVDNPK0hOejZ1UURwQmtzVUR3ZnFmSUNDaTVRSXlKN1lvNmJwNU9SRmxmaktaU2dSeiswM1p5enVSaTRzUFBCS2lNZFpCS2hzV2lCb0ZkZ0h6bm5XQktzYlhkQXhlTFBUeWhxeTlYRkt3cXR3K2tBMFZPSUR2a09sY0NWWC9FY1R2OC81R2o0b3hMTkxKUkhDRDAwNWF3enFObE9QU0R3OXFUQUhWOFZHVUxmNUtGc052cnBVMGVTU0NraHBnVEtUVTNCVGNYMUFjNm5FYytVaktYUEcxeU02T3BKOXVydXl3YWh3aGlDSWVaZUloN25YY3hMNGFacnQzWkxHeENRMkhFMEZvUVhEbFlOaGRkZDhWMlhuQTh2NkdTUitDL0g4bHlTQkw0TXVPejQxKys2VkVFRGhsL2hrd0c1RGhYaXVQNGw5a0lGTGFUWmRKSjRlVktCRGhPZXJFQzVQYlNLVWJDSUtyREtDVmN2VUdSdHJkWHhmZkpPWWVIaVFFODlIOUtpR1p6UG85N2FkVkNPb0JiaHJyZlpKNFZyNGpZQ2xOcEZJL0l5TGl1SlY4OTJiVVFyRUMzb0FsTHc3STYyZ2dETHpoOWNmRVUzRGdrVWRhelQ0cWNrUEZuRm5RQ3ZYOFhPWmVEZ3NpTFBNNWxVc0tWN2tEc016WmQ1MFpWdFJOWS9DYjJTOFM4UnpjME1PYkdNSU1IT0RnSGd4elZuU0hXcGc3R1I5WjlKQm5XTzFOb201NC9uQU96b3JvcXJSN3VMdnFCRFBOUjdZdEt6WEpaRi9wM1dvaW4rbXQydDJsWG54Y0UzMWpFSTgzNk1hUXpjN21ETDlDTVNMMHNNZEk2RVZWY0dyMENubGlVMW5OQ3BCZzJUd29JY2JpSUhyQnUrbzZQZ1ptR2FiSjJxTFZVUnpLZEhCZFg1bjRzZE9yc09kck1wYnFsRTU3eUx4UEpmajFGWFhqazg0TFlSR1gxYXJCZ1RpcFZnSzJCYk9janJ0ZGxxK0dFTDJjUXRoYWlscVp5L1V3NVFqYkFORng0T2o1UFpyaStKNUpHYXd2RU0xZkpKdkRRVi9zM0c3MHkwMGlNY0g3RGM4SUJCZmtZeEdpb0dnaFpCNEljMDUwcDBSVFloQ2JNNkRDa2xNK1VyZzNpOFN2YnhHNTJ2Wm5kWnE4eEVHaEhCdEwyVFBGZU1abmpxQWQwUWk1Q3c4K1Mwd0V6enNKUFJQMlVWdlJoWktJQjcwcDJqQWJRREViNWdHNGtWZlJFdDhBTVJ2em9lZUx2SEVlMFQwVk03MWtEWEg5Wk5sd3E1bzZseklzWnFseExVd3dPdmVkQ09TNU5PVCtKMkN4bFhoZmVyRFlWSmFFelIrbTByNHdFMnE1aFFBOFJmSm41QjQ0YURTRXAvajRlSDBaMnRHNGgyL0twVUp0STE5eVdVbkpENzE1U3JHSEl2ajFZK0tDQ2ZFQzlkWEUyL285RVZEZlJnVzR2K0lmRi9lZkg4VXJwL3BpZGZvZU5IcktTbEgzQVpySGZHc0pSQS8xV1ZDODV1d3VXTEVCbFZEd29YNlFIUEpiYXNZZUhlODF1eTRGTWdtM1NveG4wanl6Vk5NY3NncER3dkRxNGZyMlBKczBKQk9LQ2tsTGZINVNDV2VHenl5eEF1ZHRCSy9DL0d1RncxMHRlMGtMU09BUm5tUStOUjhiT3EyaWVORkUyM1p6ajVJODl6aHBYUktCREgzajg5UHcwS2hFTjVlUGZ4cTVQak40aTJmK05EcmVEV0tCUHRYMXZGQ3I2SlcxZVFGNGk4VTRtUFdWd3VEYmIzUTdvOUlhNjVtUGtaVFdheVk5ZXJzQTBybnN3S0Q4RmFUd0l1NVpvekYveGMrRTJTMmU3UldqUlFCVDFBVC9SWjBvSVM5TWRBZXJtTG9USkw0bUpTM2hUbGF5TjVVWmVNSXZCUGlVNXVnS1Q3aHVOSGtJMWpQa2ZLOTRkMnVtNGVacnQ5cjdYalI1ZCtBQjVqeTNvWWtsSGlCZUREMktmR3duTm5oU29tUHo5UHVWaitTZFdUaUhYOHBIc0ZJZkdvRlYwaENKcWE5M3Y2d2F5SllVbE5RWTcybUNSaStQU2w2cnBBRW1zaEtIak5Ub3VjcUVBKytrY0dPM3hEZkk4UzdTOVhLWUZTRE5vdUN3blppOFYxMnBYY2pXMmp6YUlEWFh1UFhYV2pTRUlkbS9rZ3RVL2gwdWlQMVAvUWlyNC9WS0VvZXBDZ3Jua1BIUFJCNjhXMUJpZStKeEJOTjRJeDF6Z3dXVUxJRno3TW5wYk4rRk5WWDZ3dWxQeEtmWFMvRzBLbXoxQ214NHFIMzdzOEVLK1dNN1VTOUlUVXVFZy9YdU55MUtCVmRLWk92Umt3U2dHOGtFRitUZERBV0FHamo0dE9JeDVTYnZJUXp0cjlINVZxdnAvYzVVWGRseVFMVVRxNU95elJkalgrNEU4VHF2WEI0c3d2MXA3dEkvQnl6UllLb1lMVkU1cWxQdEE0VXlKNVFxRDZYaUlmakVwUFRGRVV2NDZWM3puMjIwbGEzaHhDZktuOFFIMXBSZ2xqNGg5NVJrOHNtdytIRCs1L0Z2dHRGNHRFU0kvVmM4WmFIc0JNUHhpTHhkSUg2SVBHVUtUaVhzOWg5ZXl2eHRTaExmMVY0Q1djMDI2NlQwUlhPSW5hUUNCUGl5Unl4RUIyYWM5WFVxdzVmcnJlTC9hbkJsRGZrWEdQdVJuaG5pdFI5WmVHenNiWWtIWkw3UW8wQ3FxbDBNWEVIYUNJVGJPVm15VzV3eG1nVWw3SGVSWG14bVBkMEVYcStIYkhCMVRBODhnNU9kbXNMaGNQaHkvZEdnTlo3UUEzNTRKdkpoVEpVR1NTejRGY01laDFTRHBjRmJhSGVUSWhPUXE1SklCNWFzNVFUVmtSNnltVXhGdE9TSnJ1QlBkUUxyTGJvbkVlK0Z4KzBYZ210VUl5NjhiZ3dlaGtEV2VSWjRwRWRtdXcyVkdpSGhjTHZxNGNmMTNjeHZ0LzgvQytPdWVYcmxCTHgxT3R6b3ZHczNPOE9hRXlROHd4Nldvakh3MzRSV21GMzhCUTRWcng2MGhsZVNXNndwcHA1SVRvT3NVYnBsaUlNOGpxZXkzZENrOXRTVVBFd3d5emZRTDZyNEI5eEQzbExhWHp5VWVmMG0veFBsSGRqZitXZWE1SDZLNjRYUTJqZ0dWYXN3YVAyeTdtT2VBYXRQR3hMQ2txOWFoL3YvRlhTeEt1YktEbDBuTnkzSmd0cTNZa24zY2hKYm8razB3UGl1VTZuaGJmMUJiTE01cVhOMVdUdG1Yc2M4WUFkZVZlSU4wV2xKRUpoZlVoV0x0ZlRmaWlKSE5pWkpoQThISC9abnZlYXpkNjBYTXdTcitsYVlqYkRkYXAxWDducGtFZFRGc0xBempKVHI2U0szUEh5bzM0eVFLMi96aEt2QjErSGZaLzRVT0I5VzNmbFpuZFJqWTJnK0VCOUdlcHRVczlFUEptcHRwVXJCeUh5RmZ0R1hxdEZja1dSbUZ6VTFvQnZtbm5GR1NZKzNFeDVUNm40SkFPNDhRQ3dlSkZ5T2ZERGlML2NsWGVWK0daTE84djBqY0dFUVZPWmxIZVUwUXNnVXlOZmF1TnFpVlhOWXlndW1oRU9UNTVpVjdDeGxBZ1BmZTVRLytsZDRnVjV2OTdlV2YyV1FkK29iSHhVSzFqeTNNS3g5Sjh2SVQ3QUJXKzcyS0xRMG1mWnRwMlhBckt1eURMNEQ3MXQ0bk53RnVvZDRrTXE3KzhWMFdzK0lyRTJwSWc4VXBlSHdrME1lU1NBMkd0RXVuMDBuOXVHTVhCMSs4WWVNQWovT1ZLUURLSmhGcDhqdmpTeG5YZ2hOZldPdk91LzN2R3FuYk0zSnI5THZrYUY4b01VRTNzTnoxYlF5Ym5rR29KcGRYbDVtVGx6eW44T3lqVFErU0Nremd6TTB5dDBIMHE4eVB1N3hVN2F6NmFNbEl1NUNTUFVNMGJqQjhza0s0NWlYZVRvRWtsUkNDMHhQcTZ1THZma0p0K3R5TTVJdEp3Z1VpRjhoVyttbVVUQyt4RWwydHZvcEx5L3A5OFQvTmJHUWJxUnBHRmRLQ25LZ0NZYytQMFlyS0luTGlwK3FYWjNKbzlCVFBNRWJDUXg3N2l0d1dMYTY4M0h5VitReTkwOVlyWVRuN1N2M3FROThtTDNsczh6Q2J4L2Y1LzN3cU0rd2xON28yVjFialNSTGJDaTcyYUFWTWdjbXNncG5PdEFxK3d2MXNaQzZaN2pSaVZoRk5ZbVM1TWs4Q0F2bTV4Q0VYRVZsaTY4RFAyRlpsRVlJTjR2YWgzRFhnallULzIvSUJjV3lOZmlnMGZ6UHpYSE1UVHdIbVA2MnZMU3lYaWVwZ0NnZWQ4cGJuQVBjbHpyM04rblRXdENjVzI5YWJ6dkRDN1VNWXIxS0dQTWkxb2RwY04wRVBHL3JhNXBORzdnQ1ZmdisrbTR4V0tuS0VaaGF1c2xIOEQxM1BIUlpRYTVvSEdxQi8xbFF4ZUtyZkhXOUVNbzkrMytKMzQydGpKZHJEdURRZWRQOTBLckEzcmxQNTFCWjdTUUVocVY0cTdPWjFBcnQrTlpERWF6K2VkLy9kWkNnUDFIOVN3c0xDd3NMQ3dzTEN3c0xDd3NMQ3dzTEN3c0xDd3NMQ3dzTEN3c0xDd3NMQ3dzTEN3c0xDd3NMQ3dzTEN3c0xMNDIvZ2VRREVwdi9aL1lKQUFBQUFCSlJVNUVya0pnZ2c9PSd9KTtcclxuXHJcbiAgY29uc3Qgc3R5bGVzOiB7W2tleTogc3RyaW5nXTpSZWFjdC5DU1NQcm9wZXJ0aWVzfSA9ICB7XHJcbiAgICBzZWN0aW9uOntcclxuICAgICAgd2lkdGg6ICc5OHZ3JyxcclxuICAgICAgaGVpZ2h0OiAnOTd2aCcsXHJcbiAgICAgIC8vIGJvcmRlcjogJ3NvbGlkIDFweCBibGFjaycsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbidcclxuICAgIH0sXHJcbiAgICBuYXZCYXJDb250YWluZXI6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGhlaWdodDogJzIwdmgnLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCdcclxuICAgIH0sXHJcbiAgICBuYXZCYXI6IHtcclxuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIHRvcDogJzAnLFxyXG4gICAgICBsZWZ0OiAnMCcsXHJcbiAgICAgIGhlaWdodDogJzEzdmgnLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgICBib3hTaGFkb3c6ICcxcHggMnB4IDEwcHggZ3JheScsXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgLy8gYm9yZGVyOiAnc29saWQgMXB4IGJsYWNrJyxcclxuICAgIH0sXHJcbiAgICBsb2dvOiB7XHJcbiAgICAgIHdpZHRoOiAnMzV2dycsXHJcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgfSxcclxuICAgIGNoYXRBcmVhOntcclxuICAgICAgZm9udFNpemU6ICcxNXB4JyxcclxuICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6ICcxMHB4IDEwcHggMCAwJyxcclxuICAgICAgYm9yZGVyOiAnbGlnaHRncmF5IDFweCBzb2xpZCcsXHJcbiAgICAgIG1hcmdpbjogJzAgMCAwLjZyZW0gMCcsXHJcbiAgICAgIHBhZGRpbmdUb3A6ICcwLjdyZW0nLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICBwYWRkaW5nOiAnNXB4IDAnLFxyXG4gICAgICBvdmVyZmxvd1g6ICdoaWRkZW4nLFxyXG4gICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcclxuICAgIH0sXHJcbiAgICBwcmVNZXNzYWdlOiB7XHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgICBtYXJnaW46ICc1cHggOXB4JyxcclxuICAgICAgZm9udFNpemU6ICcwLjlyZW0nLFxyXG4gICAgICBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgY29sb3I6ICcjNjU2NTY1JywgIFxyXG4gICAgfSxcclxuICAgIG1lc3NhZ2U6IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICAgIG1hcmdpbjogJzVweCA5cHgnLFxyXG4gICAgICBmb250RmFtaWx5OiAnc2Fucy1zZXJpZicsXHJcbiAgICB9LFxyXG4gICAgbXNnVGV4dDoge30sXHJcbiAgICBjaGF0RW5kRGlzcGxheToge1xyXG4gICAgICAvLyBwYWRkaW5nOiAnMC43cmVtJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgIGRpc3BsYXk6ICdncmlkJyxcclxuICAgIH0sXHJcbiAgICBuZXdDaGF0QnRuOiB7XHJcbiAgICAgIHdpZHRoOiAnMTV2dycsXHJcbiAgICAgIG1pbldpZHRoOiAnMTUwcHgnLFxyXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgICBwYWRkaW5nOiAnMS45dncnLFxyXG4gICAgICBtYXJnaW46ICcwIDF2dycsXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsMTAwLDI1MCwxKScsXHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBib3JkZXI6ICdsaWdodGdyYXkgMXB4IHNvbGlkJyxcclxuICAgICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgICBwbGFjZUl0ZW1zOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBpbnB1dEFyZWE6e1xyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBoZWlnaHQ6ICcxN3ZoJyxcclxuICAgICAgbWFyZ2luVG9wOiAnYXV0bycsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBidXR0b24xOiB7XHJcbiAgICAgIHdpZHRoOiAnMTV2dycsXHJcbiAgICAgIG1pbldpZHRoOiAnMTAwcHgnLFxyXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgbWFyZ2luOiAnMXJlbSAxLjVyZW0gMC42cmVtIDAnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6ICcwIDAgMCAxMHB4JyxcclxuICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMCwxMDAsMjUwLDEpJyxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgICAgYm9yZGVyOiAnbGlnaHRncmF5IDFweCBzb2xpZCcsXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uMjoge1xyXG4gICAgICB3aWR0aDogJzE1dncnLFxyXG4gICAgICBtaW5XaWR0aDogJzEwMHB4JyxcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgIG1hcmdpbjogJzFyZW0gMCAwLjZyZW0gMC42cmVtJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnMCAwIDEwcHggMCcsXHJcbiAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICAgIGNvbG9yOiAnZ3JheScsXHJcbiAgICAgIGJvcmRlcjogJ2xpZ2h0Z3JheSAxcHggc29saWQnLFxyXG4gICAgfSxcclxuICAgIGlucHV0OiB7XHJcbiAgICAgIHdpZHRoOiAnODklJyxcclxuICAgICAgaGVpZ2h0OiAnOTUlJyxcclxuICAgICAgbWFyZ2luOiAnMXJlbSAwIDAuNnJlbSAwJyxcclxuICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXHJcbiAgICAgIGJvcmRlcjogJ2xpZ2h0Z3JheSAxcHggc29saWQnLFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1zZ1Rlc3QgPSBbXHJcbiAgICB7c2VuZGVyOidZb3UnLCBtZXNzYWdlOiAnSGknfSxcclxuICAgIHtzZW5kZXI6J1N0cmFuZ2VyJywgbWVzc2FnZTogJ2hpJ30sXHJcbiAgICB7c2VuZGVyOidTdHJhbmdlcicsIG1lc3NhZ2U6ICdhc2w/J30sXHJcbiAgICB7c2VuZGVyOidZb3UnLCBtZXNzYWdlOiAnbSd9LFxyXG4gICAge3NlbmRlcjonU3RyYW5nZXInLCBtZXNzYWdlOiAnbSd9LFxyXG4gICAge3NlbmRlcjonU3RyYW5nZXInLCBtZXNzYWdlOiAnb2guIGJ5ZSd9LFxyXG4gICAge3NlbmRlcjonWW91JywgbWVzc2FnZTogJ0hpJ30sXHJcbiAgICB7c2VuZGVyOidTdHJhbmdlcicsIG1lc3NhZ2U6ICdoaSd9LFxyXG4gICAge3NlbmRlcjonU3RyYW5nZXInLCBtZXNzYWdlOiAnYXNsPyd9LFxyXG4gICAge3NlbmRlcjonWW91JywgbWVzc2FnZTogJ20nfSxcclxuICAgIHtzZW5kZXI6J1N0cmFuZ2VyJywgbWVzc2FnZTogJ20nfSxcclxuICAgIHtzZW5kZXI6J1N0cmFuZ2VyJywgbWVzc2FnZTogJ29oLiBieWUnfSxcclxuICAgIHtzZW5kZXI6J1lvdScsIG1lc3NhZ2U6ICdIaSd9LFxyXG4gICAge3NlbmRlcjonU3RyYW5nZXInLCBtZXNzYWdlOiAnaGknfSxcclxuICAgIHtzZW5kZXI6J1N0cmFuZ2VyJywgbWVzc2FnZTogJ2FzbD8nfSxcclxuICAgIHtzZW5kZXI6J1lvdScsIG1lc3NhZ2U6ICdtJ30sXHJcbiAgICB7c2VuZGVyOidTdHJhbmdlcicsIG1lc3NhZ2U6ICdtJ30sXHJcbiAgICB7c2VuZGVyOidTdHJhbmdlcicsIG1lc3NhZ2U6ICdvaC4gYnllJ30sXHJcbiAgXTtcclxuICBcclxuICBSZWFjdC51c2VFZmZlY3QoKCk9PntcclxuICAgIGxldCBzb2NrZXRfaW5zdGFuY2UgPSBpbygpO1xyXG4gICAgc29ja2V0X2luc3RhbmNlLm9uKCdub3cnLCBkYXRhPT57XHJcbiAgICAgIHNldE1zZyhwPT4oe2hlbGxvOiBkYXRhLm1lc3NhZ2V9KSlcclxuICAgIH0pXHJcbiAgfSxbXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gc3R5bGU9e3N0eWxlcy5zZWN0aW9ufT5cclxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLm5hdkJhckNvbnRhaW5lcn0+XHJcbiAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy5uYXZCYXJ9PlxyXG4gICAgICAgICAgPGltZyBzcmM9e3NvdXJjZS5zcmN9IGFsdD1cIk9tZWdsZSBMb2dvXCIgc3R5bGU9e3N0eWxlcy5sb2dvfS8+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNoYXRBcmVhfT5cclxuICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLnByZU1lc3NhZ2V9PllvdSdyZSBub3cgY2hhdHRpbmcgd2l0aCBhIHJhbmRvbSBzdHJhbmdlci4gU2F5IFNUQU5EIFdJVEggSE9ORyBLT05HIEFHQUlOU1QgVEhFIENDUCE8L3NwYW4+XHJcbiAgICAgICAge21zZ1Rlc3QubWFwKChtLCBpZHgpPT57XHJcbiAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMubWVzc2FnZX0ga2V5PXtgcG8ke2lkeCozfWluJHtpZHh9YH0+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3snZm9udFdlaWdodCc6IDYwMCwgZm9udFNpemU6ICcxNXB4JywgY29sb3I6IChtLnNlbmRlcj09PSdZb3UnKT8nYmx1ZSc6J3JlZCd9fT57bS5zZW5kZXJ9OiA8L3NwYW4+PHNwYW4gc3R5bGU9e3N0eWxlcy5tc2dUZXh0fT57bS5tZXNzYWdlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLmNoYXRFbmREaXNwbGF5fT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5wcmVNZXNzYWdlfT5TdHJhbmdlciBoYXMgZGlzY29ubmVjdGVkLjwvZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBzdHlsZT17c3R5bGVzLm5ld0NoYXRCdG59PjxzcGFuPk5ldyBjaGF0PC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5pbnB1dEFyZWF9PlxyXG4gICAgICAgIDxidXR0b24gc3R5bGU9e3N0eWxlcy5idXR0b24xfT5OZXcgKEVzYyk8L2J1dHRvbj5cclxuICAgICAgICA8dGV4dGFyZWEgc3R5bGU9e3N0eWxlcy5pbnB1dH0vPlxyXG4gICAgICAgIDxidXR0b24gc3R5bGU9e3N0eWxlcy5idXR0b24yfT5TZW5kIChFbnRlcik8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pby1jbGllbnRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==
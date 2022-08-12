/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nvar getRandomValues;\nvar rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation. Also,\n    // find the complete implementation of crypto (msCrypto) on IE11.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nvar byteToHex = [];\n\nfor (var i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).substr(1));\n}\n\nfunction stringify(arr) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  options = options || {};\n  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (var i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://todo-list/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ \"./src/localStorage.js\");\n\n\n\nclass Task {\n\tconstructor(title, description, dueDate, priority, isDone = false, id = (0,uuid__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()) {\n\t\tthis.title = title\n\t\tthis.description = description\n\t\tthis.dueDate = dueDate\n\t\tthis.priority = priority\n\t\tthis.isDone = isDone\n\t\tthis.id = id\n\t}\n\n\tdisplayTask() {\n\t\tconst tasksDiv = document.getElementById('tasks')\n\t\tconst task = document.createElement('div')\n\t\tconst title = document.createElement('p')\n\t\tconst description = document.createElement('p')\n\t\tconst dueDate = document.createElement('p')\n\t\tconst priority = document.createElement('p')\n\n\t\t// TODO: Create buttons to delete task and to mark as done\n\t\tconst buttonsDiv = document.createElement('div')\n\t\tconst doneButton = document.createElement('button')\n\t\tconst removeButton = document.createElement('button')\n\n\t\ttitle.textContent = this.title\n\t\tdescription.textContent = this.description\n\t\tdueDate.textContent = this.dueDate\n\t\tpriority.textContent = this.priority\n\t\tif (this.isDone) {\n\t\t\tdoneButton.textContent = 'Mark as not done'\n\t\t\tdoneButton.classList.add('done')\n\t\t\tdoneButton.classList.remove('not-done')\n\t\t} else {\n\t\t\tdoneButton.textContent = 'Mark as done'\n\t\t\tdoneButton.classList.add('not-done')\n\t\t\tdoneButton.classList.remove('done')\n\t\t}\n\t\tremoveButton.textContent = 'Remove Task'\n\n\t\ttask.classList.add('task-card')\n\t\ttitle.classList.add('task-title')\n\t\tdescription.classList.add('task-description')\n\t\tdueDate.classList.add('task-due-date')\n\t\tpriority.classList.add('task-priority')\n\t\tbuttonsDiv.classList.add('task-buttons')\n\t\tdoneButton.classList.add('done-button', 'not-done')\n\t\tremoveButton.classList.add('remove-button')\n\n\t\tdoneButton.onclick = this.changeStatus\n\t\tremoveButton.addEventListener('click', e => {\n\t\t\tconst btn = e.target\n\t\t\tconst taskCard = btn.closest('.task-card')\n\t\t\ttaskCard.remove()\n\t\t\t;(0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.deleteFromLocalStorage)(this)\n\t\t})\n\n\t\ttask.appendChild(title)\n\t\ttask.appendChild(description)\n\t\ttask.appendChild(dueDate)\n\t\ttask.appendChild(priority)\n\t\tbuttonsDiv.appendChild(doneButton)\n\t\tbuttonsDiv.appendChild(removeButton)\n\t\ttask.appendChild(buttonsDiv)\n\n\t\ttasksDiv.appendChild(task)\n\t}\n\n\tchangeStatus = e => {\n\t\tthis.isDone = !this.isDone\n\t\t;(0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.editTaskInLocalStorage)(this)\n\t\tconst button = e.target\n\t\tif (this.isDone) {\n\t\t\tbutton.textContent = 'Mark as not done'\n\t\t\tbutton.classList.add('done')\n\t\t\tbutton.classList.remove('not-done')\n\t\t} else {\n\t\t\tbutton.textContent = 'Mark as done'\n\t\t\tbutton.classList.add('not-done')\n\t\t\tbutton.classList.remove('done')\n\t\t}\n\t}\n}\n\n\n//# sourceURL=webpack://todo-list/./src/Task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n/* harmony import */ var _modalEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalEvents */ \"./src/modalEvents.js\");\n/* harmony import */ var _taskEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskEvents */ \"./src/taskEvents.js\");\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorage */ \"./src/localStorage.js\");\n\n\n\n\n\n\n(0,_localStorage__WEBPACK_IMPORTED_MODULE_3__.displayTasksInLocalStorage)()\n\n// Create projects and tasks inside projects\n// Maybe use date-fns\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deleteFromLocalStorage\": () => (/* binding */ deleteFromLocalStorage),\n/* harmony export */   \"displayTasksInLocalStorage\": () => (/* binding */ displayTasksInLocalStorage),\n/* harmony export */   \"editTaskInLocalStorage\": () => (/* binding */ editTaskInLocalStorage),\n/* harmony export */   \"saveToLocalStorage\": () => (/* binding */ saveToLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n\n\nconst saveToLocalStorage = taskToSave => {\n\tconsole.log('Saving to LocalStorage')\n\tconst oldTasks = JSON.parse(localStorage.getItem('tasks'))\n\tif (!oldTasks) {\n\t\tconsole.log('There is no old array')\n\t\tlet tasks = []\n\t\ttasks.push(taskToSave)\n\t\tlocalStorage.setItem('tasks', JSON.stringify(tasks))\n\t\tconsole.log('Saved to Local Storage')\n\t} else {\n\t\toldTasks.push(taskToSave)\n\t\tlocalStorage.setItem('tasks', JSON.stringify(oldTasks))\n\t\tconsole.log('Saved to Local Storage')\n\t}\n}\n\nconst deleteFromLocalStorage = taskToDelete => {\n\tconsole.log('Deleting from localstorage')\n\tconst oldTasks = JSON.parse(localStorage.getItem('tasks'))\n\tconst newTasks = oldTasks.filter(task => task.id !== taskToDelete.id)\n\tlocalStorage.setItem('tasks', JSON.stringify(newTasks))\n\tconsole.log('Deleted from localstorage')\n}\n\nconst editTaskInLocalStorage = editedTask => {\n\tconsole.log('Editing from localstorage')\n\tconst oldTasks = JSON.parse(localStorage.getItem('tasks'))\n\tconst newTasks = oldTasks.map(task => (task.id === editedTask.id ? editedTask : task))\n\tlocalStorage.setItem('tasks', JSON.stringify(newTasks))\n\tconsole.log('Edited from localstorage')\n}\n\nconst displayTasksInLocalStorage = () => {\n\t// Take the object from localStorage and make a new Task with it\n\tconsole.log('Displaying Tasks')\n\twindow.addEventListener(\n\t\t'DOMContentLoaded',\n\t\t() => {\n\t\t\tconst tasks = JSON.parse(localStorage.getItem('tasks'))\n\t\t\tif (!tasks || tasks.length == 0) {\n\t\t\t\tconsole.log('There is no array in localStorage')\n\t\t\t} else {\n\t\t\t\tconsole.log('There is an array in localStorage')\n\t\t\t\tconsole.log(tasks)\n\t\t\t\ttasks.forEach(task => {\n\t\t\t\t\tconst t = new _Task__WEBPACK_IMPORTED_MODULE_0__.Task(task.title, task.description, task.dueDate, task.priority, task.isDone, task.id)\n\t\t\t\t\tt.displayTask()\n\t\t\t\t\tconsole.log(t)\n\t\t\t\t})\n\t\t\t}\n\t\t},\n\t\t{ once: true }\n\t)\n}\n\n\n//# sourceURL=webpack://todo-list/./src/localStorage.js?");

/***/ }),

/***/ "./src/modalEvents.js":
/*!****************************!*\
  !*** ./src/modalEvents.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modalEvents\": () => (/* binding */ modalEvents)\n/* harmony export */ });\nconst modalEvents = (() => {\n\tconst modal = document.querySelector('.modal')\n\tconst overlay = document.getElementById('overlay')\n\tconst openModalButton = document.querySelector('[data-open-modal]')\n\tconst closeModalButton = document.querySelector('[data-close-modal]')\n\n\topenModalButton.addEventListener('click', () => {\n\t\tmodal.classList.add('active')\n\t\toverlay.classList.add('active')\n\t})\n\n\tcloseModalButton.addEventListener('click', () => {\n\t\tmodal.classList.remove('active')\n\t\toverlay.classList.remove('active')\n\t})\n\n\toverlay.addEventListener('click', () => {\n\t\tmodal.classList.remove('active')\n\t\toverlay.classList.remove('active')\n\t})\n})()\n\n\n//# sourceURL=webpack://todo-list/./src/modalEvents.js?");

/***/ }),

/***/ "./src/taskEvents.js":
/*!***************************!*\
  !*** ./src/taskEvents.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTask\": () => (/* binding */ createTask)\n/* harmony export */ });\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ \"./src/localStorage.js\");\n\n\n\nconst createTask = (() => {\n\tconst taskForm = document.querySelector('.task-form')\n\n\tfunction getFormData(e) {\n\t\tconst form = e.target\n\t\tconst title = form[0].value\n\t\tconst description = form[1].value\n\t\tconst dueDate = form[2].value\n\t\tconst priority = form[3].value\n\t\treturn { title, description, dueDate, priority }\n\t}\n\n\ttaskForm.addEventListener('submit', e => {\n\t\te.preventDefault()\n\t\tconst formData = getFormData(e)\n\t\tconst task = new _Task__WEBPACK_IMPORTED_MODULE_0__.Task(formData.title, formData.description, formData.dueDate, formData.priority)\n\t\ttask.displayTask()\n\t\t;(0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)(task)\n\t\tdocument.querySelector('[data-close-modal]').click()\n\t\ttaskForm.reset()\n\t})\n})()\n\n\n//# sourceURL=webpack://todo-list/./src/taskEvents.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
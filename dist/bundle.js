/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/emit-when-near.js":
/*!******************************************!*\
  !*** ./src/components/emit-when-near.js ***!
  \******************************************/
/***/ (() => {

AFRAME.registerComponent('emit-when-near', {
  schema: {
    target: {type: 'selector', default: '#camera-rig'},
    distance: {type: 'number', default: 1},
    event: {type: 'string', default: 'click'},
    eventFar: {type: 'string', default: 'unclick'},
  },
  init: function () {
    this.tick = AFRAME.utils.throttleTick(this.checkDist, 200, this);
    this.emiting = false;
  },
  checkDist: function () {
    let myPos = new THREE.Vector3(0, 0, 0);
    let targetPos = new THREE.Vector3(0, 0, 0);
    this.el.object3D.getWorldPosition(myPos);
    this.data.target.object3D.getWorldPosition(targetPos);
    let distanceTo = myPos.distanceTo(targetPos);
    if (distanceTo <= this.data.distance) {
      if (this.emiting) return;
      this.emiting = true;
      this.el.emit(this.data.event, {collidingEntity: this.data.target}, false);
      this.data.target.emit(this.data.event, {collidingEntity: this.el}, false);
    } else {
      if (!this.emiting) return;
      this.el.emit(this.data.eventFar, {collidingEntity: this.data.target}, false);
      this.data.target.emit(this.data.eventFar, {collidingEntity: this.el}, false);
      this.emiting = false;
    }
  }
});

/***/ }),

/***/ "./src/components/on-event-set.js":
/*!****************************************!*\
  !*** ./src/components/on-event-set.js ***!
  \****************************************/
/***/ (() => {

AFRAME.registerComponent('on-event-set', {
  multiple: true,

  schema: {
    event: {type: 'string', default: 'click'},
    attribute: {type: 'string'},
    value: {type: 'string'}
  },

  init: function() {
    this._onEvent = this._onEvent.bind(this);
    this.el.addEventListener(this.data.event, this._onEvent);
  },

  remove: function() {
    this.el.removeEventListener(this.data.event, this._onEvent);
  },

  _onEvent: function(evt) {
    AFRAME.utils.entity.setComponentProperty(this.el, this.data.attribute, this.data.value);
  }

});

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_emit_when_near__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/emit-when-near */ "./src/components/emit-when-near.js");
/* harmony import */ var _components_emit_when_near__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_emit_when_near__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_on_event_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/on-event-set */ "./src/components/on-event-set.js");
/* harmony import */ var _components_on_event_set__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_on_event_set__WEBPACK_IMPORTED_MODULE_1__);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxhQUFhLHlDQUF5QztBQUN0RCxlQUFlLDJCQUEyQjtBQUMxQyxZQUFZLGlDQUFpQztBQUM3QyxlQUFlLG1DQUFtQztBQUNsRCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxrQ0FBa0M7QUFDdkUsOENBQThDLHlCQUF5QjtBQUN2RSxNQUFNO0FBQ047QUFDQSx3Q0FBd0Msa0NBQWtDO0FBQzFFLGlEQUFpRCx5QkFBeUI7QUFDMUU7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7OztBQzdCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUNBQWlDO0FBQzdDLGdCQUFnQixlQUFlO0FBQy9CLFlBQVk7QUFDWixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7VUN0QkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZnJhbWUtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9jb21wb25lbnRzL2VtaXQtd2hlbi1uZWFyLmpzIiwid2VicGFjazovL2FmcmFtZS13ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL2NvbXBvbmVudHMvb24tZXZlbnQtc2V0LmpzIiwid2VicGFjazovL2FmcmFtZS13ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FmcmFtZS13ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FmcmFtZS13ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hZnJhbWUtd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FmcmFtZS13ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYWZyYW1lLXdlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ2VtaXQtd2hlbi1uZWFyJywge1xyXG4gIHNjaGVtYToge1xyXG4gICAgdGFyZ2V0OiB7dHlwZTogJ3NlbGVjdG9yJywgZGVmYXVsdDogJyNjYW1lcmEtcmlnJ30sXHJcbiAgICBkaXN0YW5jZToge3R5cGU6ICdudW1iZXInLCBkZWZhdWx0OiAxfSxcclxuICAgIGV2ZW50OiB7dHlwZTogJ3N0cmluZycsIGRlZmF1bHQ6ICdjbGljayd9LFxyXG4gICAgZXZlbnRGYXI6IHt0eXBlOiAnc3RyaW5nJywgZGVmYXVsdDogJ3VuY2xpY2snfSxcclxuICB9LFxyXG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMudGljayA9IEFGUkFNRS51dGlscy50aHJvdHRsZVRpY2sodGhpcy5jaGVja0Rpc3QsIDIwMCwgdGhpcyk7XHJcbiAgICB0aGlzLmVtaXRpbmcgPSBmYWxzZTtcclxuICB9LFxyXG4gIGNoZWNrRGlzdDogZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IG15UG9zID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICBsZXQgdGFyZ2V0UG9zID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICB0aGlzLmVsLm9iamVjdDNELmdldFdvcmxkUG9zaXRpb24obXlQb3MpO1xyXG4gICAgdGhpcy5kYXRhLnRhcmdldC5vYmplY3QzRC5nZXRXb3JsZFBvc2l0aW9uKHRhcmdldFBvcyk7XHJcbiAgICBsZXQgZGlzdGFuY2VUbyA9IG15UG9zLmRpc3RhbmNlVG8odGFyZ2V0UG9zKTtcclxuICAgIGlmIChkaXN0YW5jZVRvIDw9IHRoaXMuZGF0YS5kaXN0YW5jZSkge1xyXG4gICAgICBpZiAodGhpcy5lbWl0aW5nKSByZXR1cm47XHJcbiAgICAgIHRoaXMuZW1pdGluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuZWwuZW1pdCh0aGlzLmRhdGEuZXZlbnQsIHtjb2xsaWRpbmdFbnRpdHk6IHRoaXMuZGF0YS50YXJnZXR9LCBmYWxzZSk7XHJcbiAgICAgIHRoaXMuZGF0YS50YXJnZXQuZW1pdCh0aGlzLmRhdGEuZXZlbnQsIHtjb2xsaWRpbmdFbnRpdHk6IHRoaXMuZWx9LCBmYWxzZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIXRoaXMuZW1pdGluZykgcmV0dXJuO1xyXG4gICAgICB0aGlzLmVsLmVtaXQodGhpcy5kYXRhLmV2ZW50RmFyLCB7Y29sbGlkaW5nRW50aXR5OiB0aGlzLmRhdGEudGFyZ2V0fSwgZmFsc2UpO1xyXG4gICAgICB0aGlzLmRhdGEudGFyZ2V0LmVtaXQodGhpcy5kYXRhLmV2ZW50RmFyLCB7Y29sbGlkaW5nRW50aXR5OiB0aGlzLmVsfSwgZmFsc2UpO1xyXG4gICAgICB0aGlzLmVtaXRpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn0pOyIsIkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnb24tZXZlbnQtc2V0Jywge1xyXG4gIG11bHRpcGxlOiB0cnVlLFxyXG5cclxuICBzY2hlbWE6IHtcclxuICAgIGV2ZW50OiB7dHlwZTogJ3N0cmluZycsIGRlZmF1bHQ6ICdjbGljayd9LFxyXG4gICAgYXR0cmlidXRlOiB7dHlwZTogJ3N0cmluZyd9LFxyXG4gICAgdmFsdWU6IHt0eXBlOiAnc3RyaW5nJ31cclxuICB9LFxyXG5cclxuICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuX29uRXZlbnQgPSB0aGlzLl9vbkV2ZW50LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5kYXRhLmV2ZW50LCB0aGlzLl9vbkV2ZW50KTtcclxuICB9LFxyXG5cclxuICByZW1vdmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuZGF0YS5ldmVudCwgdGhpcy5fb25FdmVudCk7XHJcbiAgfSxcclxuXHJcbiAgX29uRXZlbnQ6IGZ1bmN0aW9uKGV2dCkge1xyXG4gICAgQUZSQU1FLnV0aWxzLmVudGl0eS5zZXRDb21wb25lbnRQcm9wZXJ0eSh0aGlzLmVsLCB0aGlzLmRhdGEuYXR0cmlidXRlLCB0aGlzLmRhdGEudmFsdWUpO1xyXG4gIH1cclxuXHJcbn0pOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vY29tcG9uZW50cy9lbWl0LXdoZW4tbmVhcic7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL29uLWV2ZW50LXNldCc7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
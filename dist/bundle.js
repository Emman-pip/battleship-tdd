/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module) {

const Ship = (arr) => {
  return {
    len: arr.length,
    hit: 0,
    isSunk: this.len == this.hit ? true : false,
    location: arr,
  };
};

class Gameboard {
  constructor(...ships) {
    this.pieces = [...ships];
    this.misses = [];
    this.hits = [];
  }

  receiveAttack(coordinates) {
    let flag = false;
    this.pieces.forEach((ship) => {
      ship.location.forEach((coordinate) => {
        if (coordinate.toString() === coordinates.toString()) {
          if (
            this.misses.toString().includes(coordinates.toString()) ||
            this.hits.toString().includes(coordinates.toString())
          ) {
            flag = null;
          } else {
            flag = true;
            ship.hit++;
          }
          this.hits.push(coordinates);
          return;
        }
      });
    });
    if (flag === false && flag !== null) {
      this.misses.push(coordinates);
    }
    return flag;
  }
  allSunk() {
    for (let i = 0; i < this.pieces.length; i++) {
      if (this.pieces[i].isSunk) {
        return true;
      }
    }
    return false;
  }
}

module.exports = { Ship, Gameboard };


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUI7Ozs7Ozs7VUNsRG5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRkZC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRkZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRkZC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAtdGRkL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRkZC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU2hpcCA9IChhcnIpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBsZW46IGFyci5sZW5ndGgsXG4gICAgaGl0OiAwLFxuICAgIGlzU3VuazogdGhpcy5sZW4gPT0gdGhpcy5oaXQgPyB0cnVlIDogZmFsc2UsXG4gICAgbG9jYXRpb246IGFycixcbiAgfTtcbn07XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKC4uLnNoaXBzKSB7XG4gICAgdGhpcy5waWVjZXMgPSBbLi4uc2hpcHNdO1xuICAgIHRoaXMubWlzc2VzID0gW107XG4gICAgdGhpcy5oaXRzID0gW107XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKSB7XG4gICAgbGV0IGZsYWcgPSBmYWxzZTtcbiAgICB0aGlzLnBpZWNlcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBzaGlwLmxvY2F0aW9uLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgaWYgKGNvb3JkaW5hdGUudG9TdHJpbmcoKSA9PT0gY29vcmRpbmF0ZXMudG9TdHJpbmcoKSkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMubWlzc2VzLnRvU3RyaW5nKCkuaW5jbHVkZXMoY29vcmRpbmF0ZXMudG9TdHJpbmcoKSkgfHxcbiAgICAgICAgICAgIHRoaXMuaGl0cy50b1N0cmluZygpLmluY2x1ZGVzKGNvb3JkaW5hdGVzLnRvU3RyaW5nKCkpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBmbGFnID0gbnVsbDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmxhZyA9IHRydWU7XG4gICAgICAgICAgICBzaGlwLmhpdCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmhpdHMucHVzaChjb29yZGluYXRlcyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAoZmxhZyA9PT0gZmFsc2UgJiYgZmxhZyAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5taXNzZXMucHVzaChjb29yZGluYXRlcyk7XG4gICAgfVxuICAgIHJldHVybiBmbGFnO1xuICB9XG4gIGFsbFN1bmsoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBpZWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMucGllY2VzW2ldLmlzU3Vuaykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBTaGlwLCBHYW1lYm9hcmQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
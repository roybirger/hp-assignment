/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 134);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __vendors;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(10);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Map = __webpack_require__(99);
var $export = __webpack_require__(27);
var shared = __webpack_require__(34)('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(101))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(34)('wks');
var uid = __webpack_require__(22);
var Symbol = __webpack_require__(6).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(9)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(1);
var IE8_DOM_DEFINE = __webpack_require__(54);
var toPrimitive = __webpack_require__(59);
var dP = Object.defineProperty;

exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterLink", function() { return RouterLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterLinkWithHref", function() { return RouterLinkWithHref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterLinkActive", function() { return RouterLinkActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterOutlet", function() { return RouterOutlet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardsCheckEnd", function() { return GuardsCheckEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardsCheckStart", function() { return GuardsCheckStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationCancel", function() { return NavigationCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationEnd", function() { return NavigationEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationError", function() { return NavigationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationStart", function() { return NavigationStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolveEnd", function() { return ResolveEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResolveStart", function() { return ResolveStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteConfigLoadEnd", function() { return RouteConfigLoadEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteConfigLoadStart", function() { return RouteConfigLoadStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutesRecognized", function() { return RoutesRecognized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteReuseStrategy", function() { return RouteReuseStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTER_CONFIGURATION", function() { return ROUTER_CONFIGURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTER_INITIALIZER", function() { return ROUTER_INITIALIZER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterModule", function() { return RouterModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideRoutes", function() { return provideRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildrenOutletContexts", function() { return ChildrenOutletContexts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletContext", function() { return OutletContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoPreloading", function() { return NoPreloading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloadAllModules", function() { return PreloadAllModules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloadingStrategy", function() { return PreloadingStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterPreloader", function() { return RouterPreloader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivatedRoute", function() { return ActivatedRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivatedRouteSnapshot", function() { return ActivatedRouteSnapshot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterState", function() { return RouterState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterStateSnapshot", function() { return RouterStateSnapshot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIMARY_OUTLET", function() { return PRIMARY_OUTLET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToParamMap", function() { return convertToParamMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlHandlingStrategy", function() { return UrlHandlingStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultUrlSerializer", function() { return DefaultUrlSerializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlSegment", function() { return UrlSegment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlSegmentGroup", function() { return UrlSegmentGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlSerializer", function() { return UrlSerializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlTree", function() { return UrlTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵROUTER_PROVIDERS", function() { return ROUTER_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵflatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ROUTER_FORROOT_GUARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return RouterInitializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return getAppInitializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return getBootstrapListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return provideForRootGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return provideLocationStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return provideRouterInitializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return rootRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return routerNgProbeToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return setupRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return Tree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return TreeNode; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_from__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_concatMap__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_concatMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operator_concatMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_every__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_every___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_operator_every__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operator_first__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_operator_last__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_operator_last___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_operator_last__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_map__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_operator_mergeMap__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_operator_reduce__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_operator_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_operator_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_operator_catch__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_rxjs_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_operator_concatAll__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_operator_concatAll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_rxjs_operator_concatAll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_util_EmptyError__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_util_EmptyError___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_rxjs_util_EmptyError__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_observable_fromPromise__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_rxjs_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_operator_mergeAll__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_operator_mergeAll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_rxjs_operator_mergeAll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_rxjs_operator_filter__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_rxjs_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_rxjs_operator_filter__);

/**
 * @license Angular v4.3.4
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */





















/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@whatItDoes Represents an event triggered when a navigation starts.
 *
 * \@stable
 */
var NavigationStart = (function () {
    /**
     * @param {?} id
     * @param {?} url
     */
    function NavigationStart(id, url) {
        this.id = id;
        this.url = url;
    }
    /**
     * \@docsNotRequired
     * @return {?}
     */
    NavigationStart.prototype.toString = function () { return "NavigationStart(id: " + this.id + ", url: '" + this.url + "')"; };
    return NavigationStart;
}());
/**
 * \@whatItDoes Represents an event triggered when a navigation ends successfully.
 *
 * \@stable
 */
var NavigationEnd = (function () {
    /**
     * @param {?} id
     * @param {?} url
     * @param {?} urlAfterRedirects
     */
    function NavigationEnd(id, url, urlAfterRedirects) {
        this.id = id;
        this.url = url;
        this.urlAfterRedirects = urlAfterRedirects;
    }
    /**
     * \@docsNotRequired
     * @return {?}
     */
    NavigationEnd.prototype.toString = function () {
        return "NavigationEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "')";
    };
    return NavigationEnd;
}());
/**
 * \@whatItDoes Represents an event triggered when a navigation is canceled.
 *
 * \@stable
 */
var NavigationCancel = (function () {
    /**
     * @param {?} id
     * @param {?} url
     * @param {?} reason
     */
    function NavigationCancel(id, url, reason) {
        this.id = id;
        this.url = url;
        this.reason = reason;
    }
    /**
     * \@docsNotRequired
     * @return {?}
     */
    NavigationCancel.prototype.toString = function () { return "NavigationCancel(id: " + this.id + ", url: '" + this.url + "')"; };
    return NavigationCancel;
}());
/**
 * \@whatItDoes Represents an event triggered when a navigation fails due to an unexpected error.
 *
 * \@stable
 */
var NavigationError = (function () {
    /**
     * @param {?} id
     * @param {?} url
     * @param {?} error
     */
    function NavigationError(id, url, error) {
        this.id = id;
        this.url = url;
        this.error = error;
    }
    /**
     * \@docsNotRequired
     * @return {?}
     */
    NavigationError.prototype.toString = function () {
        return "NavigationError(id: " + this.id + ", url: '" + this.url + "', error: " + this.error + ")";
    };
    return NavigationError;
}());
/**
 * \@whatItDoes Represents an event triggered when routes are recognized.
 *
 * \@stable
 */
var RoutesRecognized = (function () {
    /**
     * @param {?} id
     * @param {?} url
     * @param {?} urlAfterRedirects
     * @param {?} state
     */
    function RoutesRecognized(id, url, urlAfterRedirects, state) {
        this.id = id;
        this.url = url;
        this.urlAfterRedirects = urlAfterRedirects;
        this.state = state;
    }
    /**
     * \@docsNotRequired
     * @return {?}
     */
    RoutesRecognized.prototype.toString = function () {
        return "RoutesRecognized(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
    };
    return RoutesRecognized;
}());
/**
 * \@whatItDoes Represents an event triggered before lazy loading a route config.
 *
 * \@experimental
 */
var RouteConfigLoadStart = (function () {
    /**
     * @param {?} route
     */
    function RouteConfigLoadStart(route) {
        this.route = route;
    }
    /**
     * @return {?}
     */
    RouteConfigLoadStart.prototype.toString = function () { return "RouteConfigLoadStart(path: " + this.route.path + ")"; };
    return RouteConfigLoadStart;
}());
/**
 * \@whatItDoes Represents an event triggered when a route has been lazy loaded.
 *
 * \@experimental
 */
var RouteConfigLoadEnd = (function () {
    /**
     * @param {?} route
     */
    function RouteConfigLoadEnd(route) {
        this.route = route;
    }
    /**
     * @return {?}
     */
    RouteConfigLoadEnd.prototype.toString = function () { return "RouteConfigLoadEnd(path: " + this.route.path + ")"; };
    return RouteConfigLoadEnd;
}());
/**
 * \@whatItDoes Represents the start of the Guard phase of routing.
 *
 * \@experimental
 */
var GuardsCheckStart = (function () {
    /**
     * @param {?} id
     * @param {?} url
     * @param {?} urlAfterRedirects
     * @param {?} state
     */
    function GuardsCheckStart(id, url, urlAfterRedirects, state) {
        this.id = id;
        this.url = url;
        this.urlAfterRedirects = urlAfterRedirects;
        this.state = state;
    }
    /**
     * @return {?}
     */
    GuardsCheckStart.prototype.toString = function () {
        return "GuardsCheckStart(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
    };
    return GuardsCheckStart;
}());
/**
 * \@whatItDoes Represents the end of the Guard phase of routing.
 *
 * \@experimental
 */
var GuardsCheckEnd = (function () {
    /**
     * @param {?} id
     * @param {?} url
     * @param {?} urlAfterRedirects
     * @param {?} state
     * @param {?} shouldActivate
     */
    function GuardsCheckEnd(id, url, urlAfterRedirects, state, shouldActivate) {
        this.id = id;
        this.url = url;
        this.urlAfterRedirects = urlAfterRedirects;
        this.state = state;
        this.shouldActivate = shouldActivate;
    }
    /**
     * @return {?}
     */
    GuardsCheckEnd.prototype.toString = function () {
        return "GuardsCheckEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ", shouldActivate: " + this.shouldActivate + ")";
    };
    return GuardsCheckEnd;
}());
/**
 * \@whatItDoes Represents the start of the Resolve phase of routing. The timing of this
 * event may change, thus it's experimental. In the current iteration it will run
 * in the "resolve" phase whether there's things to resolve or not. In the future this
 * behavior may change to only run when there are things to be resolved.
 *
 * \@experimental
 */
var ResolveStart = (function () {
    /**
     * @param {?} id
     * @param {?} url
     * @param {?} urlAfterRedirects
     * @param {?} state
     */
    function ResolveStart(id, url, urlAfterRedirects, state) {
        this.id = id;
        this.url = url;
        this.urlAfterRedirects = urlAfterRedirects;
        this.state = state;
    }
    /**
     * @return {?}
     */
    ResolveStart.prototype.toString = function () {
        return "ResolveStart(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
    };
    return ResolveStart;
}());
/**
 * \@whatItDoes Represents the end of the Resolve phase of routing. See note on
 * {\@link ResolveStart} for use of this experimental API.
 *
 * \@experimental
 */
var ResolveEnd = (function () {
    /**
     * @param {?} id
     * @param {?} url
     * @param {?} urlAfterRedirects
     * @param {?} state
     */
    function ResolveEnd(id, url, urlAfterRedirects, state) {
        this.id = id;
        this.url = url;
        this.urlAfterRedirects = urlAfterRedirects;
        this.state = state;
    }
    /**
     * @return {?}
     */
    ResolveEnd.prototype.toString = function () {
        return "ResolveEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
    };
    return ResolveEnd;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@whatItDoes Name of the primary outlet.
 *
 * \@stable
 */
var PRIMARY_OUTLET = 'primary';
var ParamsAsMap = (function () {
    /**
     * @param {?} params
     */
    function ParamsAsMap(params) {
        this.params = params || {};
    }
    /**
     * @param {?} name
     * @return {?}
     */
    ParamsAsMap.prototype.has = function (name) { return this.params.hasOwnProperty(name); };
    /**
     * @param {?} name
     * @return {?}
     */
    ParamsAsMap.prototype.get = function (name) {
        if (this.has(name)) {
            var /** @type {?} */ v = this.params[name];
            return Array.isArray(v) ? v[0] : v;
        }
        return null;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ParamsAsMap.prototype.getAll = function (name) {
        if (this.has(name)) {
            var /** @type {?} */ v = this.params[name];
            return Array.isArray(v) ? v : [v];
        }
        return [];
    };
    Object.defineProperty(ParamsAsMap.prototype, "keys", {
        /**
         * @return {?}
         */
        get: function () { return Object.keys(this.params); },
        enumerable: true,
        configurable: true
    });
    return ParamsAsMap;
}());
/**
 * Convert a {\@link Params} instance to a {\@link ParamMap}.
 *
 * \@stable
 * @param {?} params
 * @return {?}
 */
function convertToParamMap(params) {
    return new ParamsAsMap(params);
}
var NAVIGATION_CANCELING_ERROR = 'ngNavigationCancelingError';
/**
 * @param {?} message
 * @return {?}
 */
function navigationCancelingError(message) {
    var /** @type {?} */ error = Error('NavigationCancelingError: ' + message);
    ((error))[NAVIGATION_CANCELING_ERROR] = true;
    return error;
}
/**
 * @param {?} error
 * @return {?}
 */
function isNavigationCancelingError(error) {
    return ((error))[NAVIGATION_CANCELING_ERROR];
}
/**
 * @param {?} segments
 * @param {?} segmentGroup
 * @param {?} route
 * @return {?}
 */
function defaultUrlMatcher(segments, segmentGroup, route) {
    var /** @type {?} */ parts = ((route.path)).split('/');
    if (parts.length > segments.length) {
        // The actual URL is shorter than the config, no match
        return null;
    }
    if (route.pathMatch === 'full' &&
        (segmentGroup.hasChildren() || parts.length < segments.length)) {
        // The config is longer than the actual URL but we are looking for a full match, return null
        return null;
    }
    var /** @type {?} */ posParams = {};
    // Check each config part against the actual URL
    for (var /** @type {?} */ index = 0; index < parts.length; index++) {
        var /** @type {?} */ part = parts[index];
        var /** @type {?} */ segment = segments[index];
        var /** @type {?} */ isParameter = part.startsWith(':');
        if (isParameter) {
            posParams[part.substring(1)] = segment;
        }
        else if (part !== segment.path) {
            // The actual URL part does not match the config, no match
            return null;
        }
    }
    return { consumed: segments.slice(0, parts.length), posParams: posParams };
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var LoadedRouterConfig = (function () {
    /**
     * @param {?} routes
     * @param {?} module
     */
    function LoadedRouterConfig(routes, module) {
        this.routes = routes;
        this.module = module;
    }
    return LoadedRouterConfig;
}());
/**
 * @param {?} config
 * @param {?=} parentPath
 * @return {?}
 */
function validateConfig(config, parentPath) {
    if (parentPath === void 0) { parentPath = ''; }
    // forEach doesn't iterate undefined values
    for (var /** @type {?} */ i = 0; i < config.length; i++) {
        var /** @type {?} */ route = config[i];
        var /** @type {?} */ fullPath = getFullPath(parentPath, route);
        validateNode(route, fullPath);
    }
}
/**
 * @param {?} route
 * @param {?} fullPath
 * @return {?}
 */
function validateNode(route, fullPath) {
    if (!route) {
        throw new Error("\n      Invalid configuration of route '" + fullPath + "': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    ");
    }
    if (Array.isArray(route)) {
        throw new Error("Invalid configuration of route '" + fullPath + "': Array cannot be specified");
    }
    if (!route.component && (route.outlet && route.outlet !== PRIMARY_OUTLET)) {
        throw new Error("Invalid configuration of route '" + fullPath + "': a componentless route cannot have a named outlet set");
    }
    if (route.redirectTo && route.children) {
        throw new Error("Invalid configuration of route '" + fullPath + "': redirectTo and children cannot be used together");
    }
    if (route.redirectTo && route.loadChildren) {
        throw new Error("Invalid configuration of route '" + fullPath + "': redirectTo and loadChildren cannot be used together");
    }
    if (route.children && route.loadChildren) {
        throw new Error("Invalid configuration of route '" + fullPath + "': children and loadChildren cannot be used together");
    }
    if (route.redirectTo && route.component) {
        throw new Error("Invalid configuration of route '" + fullPath + "': redirectTo and component cannot be used together");
    }
    if (route.path && route.matcher) {
        throw new Error("Invalid configuration of route '" + fullPath + "': path and matcher cannot be used together");
    }
    if (route.redirectTo === void 0 && !route.component && !route.children && !route.loadChildren) {
        throw new Error("Invalid configuration of route '" + fullPath + "'. One of the following must be provided: component, redirectTo, children or loadChildren");
    }
    if (route.path === void 0 && route.matcher === void 0) {
        throw new Error("Invalid configuration of route '" + fullPath + "': routes must have either a path or a matcher specified");
    }
    if (typeof route.path === 'string' && route.path.charAt(0) === '/') {
        throw new Error("Invalid configuration of route '" + fullPath + "': path cannot start with a slash");
    }
    if (route.path === '' && route.redirectTo !== void 0 && route.pathMatch === void 0) {
        var /** @type {?} */ exp = "The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.";
        throw new Error("Invalid configuration of route '{path: \"" + fullPath + "\", redirectTo: \"" + route.redirectTo + "\"}': please provide 'pathMatch'. " + exp);
    }
    if (route.pathMatch !== void 0 && route.pathMatch !== 'full' && route.pathMatch !== 'prefix') {
        throw new Error("Invalid configuration of route '" + fullPath + "': pathMatch can only be set to 'prefix' or 'full'");
    }
    if (route.children) {
        validateConfig(route.children, fullPath);
    }
}
/**
 * @param {?} parentPath
 * @param {?} currentRoute
 * @return {?}
 */
function getFullPath(parentPath, currentRoute) {
    if (!currentRoute) {
        return parentPath;
    }
    if (!parentPath && !currentRoute.path) {
        return '';
    }
    else if (parentPath && !currentRoute.path) {
        return parentPath + "/";
    }
    else if (!parentPath && currentRoute.path) {
        return currentRoute.path;
    }
    else {
        return parentPath + "/" + currentRoute.path;
    }
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function shallowEqualArrays(a, b) {
    if (a.length !== b.length)
        return false;
    for (var /** @type {?} */ i = 0; i < a.length; ++i) {
        if (!shallowEqual(a[i], b[i]))
            return false;
    }
    return true;
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function shallowEqual(a, b) {
    var /** @type {?} */ k1 = Object.keys(a);
    var /** @type {?} */ k2 = Object.keys(b);
    if (k1.length != k2.length) {
        return false;
    }
    var /** @type {?} */ key;
    for (var /** @type {?} */ i = 0; i < k1.length; i++) {
        key = k1[i];
        if (a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}
/**
 * @template T
 * @param {?} arr
 * @return {?}
 */
function flatten(arr) {
    return Array.prototype.concat.apply([], arr);
}
/**
 * @template T
 * @param {?} a
 * @return {?}
 */
function last$1(a) {
    return a.length > 0 ? a[a.length - 1] : null;
}
/**
 * @param {?} bools
 * @return {?}
 */
/**
 * @template K, V
 * @param {?} map
 * @param {?} callback
 * @return {?}
 */
function forEach(map$$1, callback) {
    for (var /** @type {?} */ prop in map$$1) {
        if (map$$1.hasOwnProperty(prop)) {
            callback(map$$1[prop], prop);
        }
    }
}
/**
 * @template A, B
 * @param {?} obj
 * @param {?} fn
 * @return {?}
 */
function waitForMap(obj, fn) {
    if (Object.keys(obj).length === 0) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])({});
    }
    var /** @type {?} */ waitHead = [];
    var /** @type {?} */ waitTail = [];
    var /** @type {?} */ res = {};
    forEach(obj, function (a, k) {
        var /** @type {?} */ mapped = __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_map__["map"].call(fn(k, a), function (r) { return res[k] = r; });
        if (k === PRIMARY_OUTLET) {
            waitHead.push(mapped);
        }
        else {
            waitTail.push(mapped);
        }
    });
    var /** @type {?} */ concat$ = __WEBPACK_IMPORTED_MODULE_16_rxjs_operator_concatAll__["concatAll"].call(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"].apply(void 0, waitHead.concat(waitTail)));
    var /** @type {?} */ last$ = __WEBPACK_IMPORTED_MODULE_10_rxjs_operator_last__["last"].call(concat$);
    return __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_map__["map"].call(last$, function () { return res; });
}
/**
 * @param {?} observables
 * @return {?}
 */
function andObservables(observables) {
    var /** @type {?} */ merged$ = __WEBPACK_IMPORTED_MODULE_19_rxjs_operator_mergeAll__["mergeAll"].call(observables);
    return __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_every__["every"].call(merged$, function (result) { return result === true; });
}
/**
 * @template T
 * @param {?} value
 * @return {?}
 */
function wrapIntoObservable(value) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ɵisObservable"])(value)) {
        return value;
    }
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ɵisPromise"])(value)) {
        // Use `Promise.resolve()` to wrap promise-like instances.
        // Required ie when a Resolver returns a AngularJS `$q` promise to correctly trigger the
        // change detection.
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18_rxjs_observable_fromPromise__["fromPromise"])(Promise.resolve(value));
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])(/** @type {?} */ (value));
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @return {?}
 */
function createEmptyUrlTree() {
    return new UrlTree(new UrlSegmentGroup([], {}), {}, null);
}
/**
 * @param {?} container
 * @param {?} containee
 * @param {?} exact
 * @return {?}
 */
function containsTree(container, containee, exact) {
    if (exact) {
        return equalQueryParams(container.queryParams, containee.queryParams) &&
            equalSegmentGroups(container.root, containee.root);
    }
    return containsQueryParams(container.queryParams, containee.queryParams) &&
        containsSegmentGroup(container.root, containee.root);
}
/**
 * @param {?} container
 * @param {?} containee
 * @return {?}
 */
function equalQueryParams(container, containee) {
    return shallowEqual(container, containee);
}
/**
 * @param {?} container
 * @param {?} containee
 * @return {?}
 */
function equalSegmentGroups(container, containee) {
    if (!equalPath(container.segments, containee.segments))
        return false;
    if (container.numberOfChildren !== containee.numberOfChildren)
        return false;
    for (var /** @type {?} */ c in containee.children) {
        if (!container.children[c])
            return false;
        if (!equalSegmentGroups(container.children[c], containee.children[c]))
            return false;
    }
    return true;
}
/**
 * @param {?} container
 * @param {?} containee
 * @return {?}
 */
function containsQueryParams(container, containee) {
    return Object.keys(containee).length <= Object.keys(container).length &&
        Object.keys(containee).every(function (key) { return containee[key] === container[key]; });
}
/**
 * @param {?} container
 * @param {?} containee
 * @return {?}
 */
function containsSegmentGroup(container, containee) {
    return containsSegmentGroupHelper(container, containee, containee.segments);
}
/**
 * @param {?} container
 * @param {?} containee
 * @param {?} containeePaths
 * @return {?}
 */
function containsSegmentGroupHelper(container, containee, containeePaths) {
    if (container.segments.length > containeePaths.length) {
        var /** @type {?} */ current = container.segments.slice(0, containeePaths.length);
        if (!equalPath(current, containeePaths))
            return false;
        if (containee.hasChildren())
            return false;
        return true;
    }
    else if (container.segments.length === containeePaths.length) {
        if (!equalPath(container.segments, containeePaths))
            return false;
        for (var /** @type {?} */ c in containee.children) {
            if (!container.children[c])
                return false;
            if (!containsSegmentGroup(container.children[c], containee.children[c]))
                return false;
        }
        return true;
    }
    else {
        var /** @type {?} */ current = containeePaths.slice(0, container.segments.length);
        var /** @type {?} */ next = containeePaths.slice(container.segments.length);
        if (!equalPath(container.segments, current))
            return false;
        if (!container.children[PRIMARY_OUTLET])
            return false;
        return containsSegmentGroupHelper(container.children[PRIMARY_OUTLET], containee, next);
    }
}
/**
 * \@whatItDoes Represents the parsed URL.
 *
 * \@howToUse
 *
 * ```
 * \@Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const tree: UrlTree =
 *       router.parseUrl('/team/33/(user/victor//support:help)?debug=true#fragment');
 *     const f = tree.fragment; // return 'fragment'
 *     const q = tree.queryParams; // returns {debug: 'true'}
 *     const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
 *     const s: UrlSegment[] = g.segments; // returns 2 segments 'team' and '33'
 *     g.children[PRIMARY_OUTLET].segments; // returns 2 segments 'user' and 'victor'
 *     g.children['support'].segments; // return 1 segment 'help'
 *   }
 * }
 * ```
 *
 * \@description
 *
 * Since a router state is a tree, and the URL is nothing but a serialized state, the URL is a
 * serialized tree.
 * UrlTree is a data structure that provides a lot of affordances in dealing with URLs
 *
 * \@stable
 */
var UrlTree = (function () {
    /**
     * \@internal
     * @param {?} root
     * @param {?} queryParams
     * @param {?} fragment
     */
    function UrlTree(root, queryParams, fragment) {
        this.root = root;
        this.queryParams = queryParams;
        this.fragment = fragment;
    }
    Object.defineProperty(UrlTree.prototype, "queryParamMap", {
        /**
         * @return {?}
         */
        get: function () {
            if (!this._queryParamMap) {
                this._queryParamMap = convertToParamMap(this.queryParams);
            }
            return this._queryParamMap;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@docsNotRequired
     * @return {?}
     */
    UrlTree.prototype.toString = function () { return DEFAULT_SERIALIZER.serialize(this); };
    return UrlTree;
}());
/**
 * \@whatItDoes Represents the parsed URL segment group.
 *
 * See {\@link UrlTree} for more information.
 *
 * \@stable
 */
var UrlSegmentGroup = (function () {
    /**
     * @param {?} segments
     * @param {?} children
     */
    function UrlSegmentGroup(segments, children) {
        var _this = this;
        this.segments = segments;
        this.children = children;
        /**
         * The parent node in the url tree
         */
        this.parent = null;
        forEach(children, function (v, k) { return v.parent = _this; });
    }
    /**
     * Whether the segment has child segments
     * @return {?}
     */
    UrlSegmentGroup.prototype.hasChildren = function () { return this.numberOfChildren > 0; };
    Object.defineProperty(UrlSegmentGroup.prototype, "numberOfChildren", {
        /**
         * Number of child segments
         * @return {?}
         */
        get: function () { return Object.keys(this.children).length; },
        enumerable: true,
        configurable: true
    });
    /**
     * \@docsNotRequired
     * @return {?}
     */
    UrlSegmentGroup.prototype.toString = function () { return serializePaths(this); };
    return UrlSegmentGroup;
}());
/**
 * \@whatItDoes Represents a single URL segment.
 *
 * \@howToUse
 *
 * ```
 * \@Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const tree: UrlTree = router.parseUrl('/team;id=33');
 *     const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
 *     const s: UrlSegment[] = g.segments;
 *     s[0].path; // returns 'team'
 *     s[0].parameters; // returns {id: 33}
 *   }
 * }
 * ```
 *
 * \@description
 *
 * A UrlSegment is a part of a URL between the two slashes. It contains a path and the matrix
 * parameters associated with the segment.
 *
 * \@stable
 */
var UrlSegment = (function () {
    /**
     * @param {?} path
     * @param {?} parameters
     */
    function UrlSegment(path, parameters) {
        this.path = path;
        this.parameters = parameters;
    }
    Object.defineProperty(UrlSegment.prototype, "parameterMap", {
        /**
         * @return {?}
         */
        get: function () {
            if (!this._parameterMap) {
                this._parameterMap = convertToParamMap(this.parameters);
            }
            return this._parameterMap;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * \@docsNotRequired
     * @return {?}
     */
    UrlSegment.prototype.toString = function () { return serializePath(this); };
    return UrlSegment;
}());
/**
 * @param {?} as
 * @param {?} bs
 * @return {?}
 */
function equalSegments(as, bs) {
    return equalPath(as, bs) && as.every(function (a, i) { return shallowEqual(a.parameters, bs[i].parameters); });
}
/**
 * @param {?} as
 * @param {?} bs
 * @return {?}
 */
function equalPath(as, bs) {
    if (as.length !== bs.length)
        return false;
    return as.every(function (a, i) { return a.path === bs[i].path; });
}
/**
 * @template T
 * @param {?} segment
 * @param {?} fn
 * @return {?}
 */
function mapChildrenIntoArray(segment, fn) {
    var /** @type {?} */ res = [];
    forEach(segment.children, function (child, childOutlet) {
        if (childOutlet === PRIMARY_OUTLET) {
            res = res.concat(fn(child, childOutlet));
        }
    });
    forEach(segment.children, function (child, childOutlet) {
        if (childOutlet !== PRIMARY_OUTLET) {
            res = res.concat(fn(child, childOutlet));
        }
    });
    return res;
}
/**
 * \@whatItDoes Serializes and deserializes a URL string into a URL tree.
 *
 * \@description The url serialization strategy is customizable. You can
 * make all URLs case insensitive by providing a custom UrlSerializer.
 *
 * See {\@link DefaultUrlSerializer} for an example of a URL serializer.
 *
 * \@stable
 * @abstract
 */
var UrlSerializer = (function () {
    function UrlSerializer() {
    }
    /**
     * Parse a url into a {\@link UrlTree}
     * @abstract
     * @param {?} url
     * @return {?}
     */
    UrlSerializer.prototype.parse = function (url) { };
    /**
     * Converts a {\@link UrlTree} into a url
     * @abstract
     * @param {?} tree
     * @return {?}
     */
    UrlSerializer.prototype.serialize = function (tree) { };
    return UrlSerializer;
}());
/**
 * \@whatItDoes A default implementation of the {\@link UrlSerializer}.
 *
 * \@description
 *
 * Example URLs:
 *
 * ```
 * /inbox/33(popup:compose)
 * /inbox/33;open=true/messages/44
 * ```
 *
 * DefaultUrlSerializer uses parentheses to serialize secondary segments (e.g., popup:compose), the
 * colon syntax to specify the outlet, and the ';parameter=value' syntax (e.g., open=true) to
 * specify route specific parameters.
 *
 * \@stable
 */
var DefaultUrlSerializer = (function () {
    function DefaultUrlSerializer() {
    }
    /**
     * Parses a url into a {\@link UrlTree}
     * @param {?} url
     * @return {?}
     */
    DefaultUrlSerializer.prototype.parse = function (url) {
        var /** @type {?} */ p = new UrlParser(url);
        return new UrlTree(p.parseRootSegment(), p.parseQueryParams(), p.parseFragment());
    };
    /**
     * Converts a {\@link UrlTree} into a url
     * @param {?} tree
     * @return {?}
     */
    DefaultUrlSerializer.prototype.serialize = function (tree) {
        var /** @type {?} */ segment = "/" + serializeSegment(tree.root, true);
        var /** @type {?} */ query = serializeQueryParams(tree.queryParams);
        var /** @type {?} */ fragment = typeof tree.fragment === "string" ? "#" + encodeURI(/** @type {?} */ ((tree.fragment))) : '';
        return "" + segment + query + fragment;
    };
    return DefaultUrlSerializer;
}());
var DEFAULT_SERIALIZER = new DefaultUrlSerializer();
/**
 * @param {?} segment
 * @return {?}
 */
function serializePaths(segment) {
    return segment.segments.map(function (p) { return serializePath(p); }).join('/');
}
/**
 * @param {?} segment
 * @param {?} root
 * @return {?}
 */
function serializeSegment(segment, root) {
    if (!segment.hasChildren()) {
        return serializePaths(segment);
    }
    if (root) {
        var /** @type {?} */ primary = segment.children[PRIMARY_OUTLET] ?
            serializeSegment(segment.children[PRIMARY_OUTLET], false) :
            '';
        var /** @type {?} */ children_1 = [];
        forEach(segment.children, function (v, k) {
            if (k !== PRIMARY_OUTLET) {
                children_1.push(k + ":" + serializeSegment(v, false));
            }
        });
        return children_1.length > 0 ? primary + "(" + children_1.join('//') + ")" : primary;
    }
    else {
        var /** @type {?} */ children = mapChildrenIntoArray(segment, function (v, k) {
            if (k === PRIMARY_OUTLET) {
                return [serializeSegment(segment.children[PRIMARY_OUTLET], false)];
            }
            return [k + ":" + serializeSegment(v, false)];
        });
        return serializePaths(segment) + "/(" + children.join('//') + ")";
    }
}
/**
 * This method is intended for encoding *key* or *value* parts of query component. We need a custom
 * method because encodeURIComponent is too aggressive and encodes stuff that doesn't have to be
 * encoded per http://tools.ietf.org/html/rfc3986:
 *    query         = *( pchar / "/" / "?" )
 *    pchar         = unreserved / pct-encoded / sub-delims / ":" / "\@"
 *    unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
 *    pct-encoded   = "%" HEXDIG HEXDIG
 *    sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
 *                     / "*" / "+" / "," / ";" / "="
 * @param {?} s
 * @return {?}
 */
function encode(s) {
    return encodeURIComponent(s)
        .replace(/%40/g, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';');
}
/**
 * @param {?} s
 * @return {?}
 */
function decode(s) {
    return decodeURIComponent(s);
}
/**
 * @param {?} path
 * @return {?}
 */
function serializePath(path) {
    return "" + encode(path.path) + serializeParams(path.parameters);
}
/**
 * @param {?} params
 * @return {?}
 */
function serializeParams(params) {
    return Object.keys(params).map(function (key) { return ";" + encode(key) + "=" + encode(params[key]); }).join('');
}
/**
 * @param {?} params
 * @return {?}
 */
function serializeQueryParams(params) {
    var /** @type {?} */ strParams = Object.keys(params).map(function (name) {
        var /** @type {?} */ value = params[name];
        return Array.isArray(value) ? value.map(function (v) { return encode(name) + "=" + encode(v); }).join('&') :
            encode(name) + "=" + encode(value);
    });
    return strParams.length ? "?" + strParams.join("&") : '';
}
var SEGMENT_RE = /^[^\/()?;=&#]+/;
/**
 * @param {?} str
 * @return {?}
 */
function matchSegments(str) {
    var /** @type {?} */ match = str.match(SEGMENT_RE);
    return match ? match[0] : '';
}
var QUERY_PARAM_RE = /^[^=?&#]+/;
/**
 * @param {?} str
 * @return {?}
 */
function matchQueryParams(str) {
    var /** @type {?} */ match = str.match(QUERY_PARAM_RE);
    return match ? match[0] : '';
}
var QUERY_PARAM_VALUE_RE = /^[^?&#]+/;
/**
 * @param {?} str
 * @return {?}
 */
function matchUrlQueryParamValue(str) {
    var /** @type {?} */ match = str.match(QUERY_PARAM_VALUE_RE);
    return match ? match[0] : '';
}
var UrlParser = (function () {
    /**
     * @param {?} url
     */
    function UrlParser(url) {
        this.url = url;
        this.remaining = url;
    }
    /**
     * @return {?}
     */
    UrlParser.prototype.parseRootSegment = function () {
        this.consumeOptional('/');
        if (this.remaining === '' || this.peekStartsWith('?') || this.peekStartsWith('#')) {
            return new UrlSegmentGroup([], {});
        }
        // The root segment group never has segments
        return new UrlSegmentGroup([], this.parseChildren());
    };
    /**
     * @return {?}
     */
    UrlParser.prototype.parseQueryParams = function () {
        var /** @type {?} */ params = {};
        if (this.consumeOptional('?')) {
            do {
                this.parseQueryParam(params);
            } while (this.consumeOptional('&'));
        }
        return params;
    };
    /**
     * @return {?}
     */
    UrlParser.prototype.parseFragment = function () {
        return this.consumeOptional('#') ? decodeURI(this.remaining) : null;
    };
    /**
     * @return {?}
     */
    UrlParser.prototype.parseChildren = function () {
        if (this.remaining === '') {
            return {};
        }
        this.consumeOptional('/');
        var /** @type {?} */ segments = [];
        if (!this.peekStartsWith('(')) {
            segments.push(this.parseSegment());
        }
        while (this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(')) {
            this.capture('/');
            segments.push(this.parseSegment());
        }
        var /** @type {?} */ children = {};
        if (this.peekStartsWith('/(')) {
            this.capture('/');
            children = this.parseParens(true);
        }
        var /** @type {?} */ res = {};
        if (this.peekStartsWith('(')) {
            res = this.parseParens(false);
        }
        if (segments.length > 0 || Object.keys(children).length > 0) {
            res[PRIMARY_OUTLET] = new UrlSegmentGroup(segments, children);
        }
        return res;
    };
    /**
     * @return {?}
     */
    UrlParser.prototype.parseSegment = function () {
        var /** @type {?} */ path = matchSegments(this.remaining);
        if (path === '' && this.peekStartsWith(';')) {
            throw new Error("Empty path url segment cannot have parameters: '" + this.remaining + "'.");
        }
        this.capture(path);
        return new UrlSegment(decode(path), this.parseMatrixParams());
    };
    /**
     * @return {?}
     */
    UrlParser.prototype.parseMatrixParams = function () {
        var /** @type {?} */ params = {};
        while (this.consumeOptional(';')) {
            this.parseParam(params);
        }
        return params;
    };
    /**
     * @param {?} params
     * @return {?}
     */
    UrlParser.prototype.parseParam = function (params) {
        var /** @type {?} */ key = matchSegments(this.remaining);
        if (!key) {
            return;
        }
        this.capture(key);
        var /** @type {?} */ value = '';
        if (this.consumeOptional('=')) {
            var /** @type {?} */ valueMatch = matchSegments(this.remaining);
            if (valueMatch) {
                value = valueMatch;
                this.capture(value);
            }
        }
        params[decode(key)] = decode(value);
    };
    /**
     * @param {?} params
     * @return {?}
     */
    UrlParser.prototype.parseQueryParam = function (params) {
        var /** @type {?} */ key = matchQueryParams(this.remaining);
        if (!key) {
            return;
        }
        this.capture(key);
        var /** @type {?} */ value = '';
        if (this.consumeOptional('=')) {
            var /** @type {?} */ valueMatch = matchUrlQueryParamValue(this.remaining);
            if (valueMatch) {
                value = valueMatch;
                this.capture(value);
            }
        }
        var /** @type {?} */ decodedKey = decode(key);
        var /** @type {?} */ decodedVal = decode(value);
        if (params.hasOwnProperty(decodedKey)) {
            // Append to existing values
            var /** @type {?} */ currentVal = params[decodedKey];
            if (!Array.isArray(currentVal)) {
                currentVal = [currentVal];
                params[decodedKey] = currentVal;
            }
            currentVal.push(decodedVal);
        }
        else {
            // Create a new value
            params[decodedKey] = decodedVal;
        }
    };
    /**
     * @param {?} allowPrimary
     * @return {?}
     */
    UrlParser.prototype.parseParens = function (allowPrimary) {
        var /** @type {?} */ segments = {};
        this.capture('(');
        while (!this.consumeOptional(')') && this.remaining.length > 0) {
            var /** @type {?} */ path = matchSegments(this.remaining);
            var /** @type {?} */ next = this.remaining[path.length];
            // if is is not one of these characters, then the segment was unescaped
            // or the group was not closed
            if (next !== '/' && next !== ')' && next !== ';') {
                throw new Error("Cannot parse url '" + this.url + "'");
            }
            var /** @type {?} */ outletName = ((undefined));
            if (path.indexOf(':') > -1) {
                outletName = path.substr(0, path.indexOf(':'));
                this.capture(outletName);
                this.capture(':');
            }
            else if (allowPrimary) {
                outletName = PRIMARY_OUTLET;
            }
            var /** @type {?} */ children = this.parseChildren();
            segments[outletName] = Object.keys(children).length === 1 ? children[PRIMARY_OUTLET] :
                new UrlSegmentGroup([], children);
            this.consumeOptional('//');
        }
        return segments;
    };
    /**
     * @param {?} str
     * @return {?}
     */
    UrlParser.prototype.peekStartsWith = function (str) { return this.remaining.startsWith(str); };
    /**
     * @param {?} str
     * @return {?}
     */
    UrlParser.prototype.consumeOptional = function (str) {
        if (this.peekStartsWith(str)) {
            this.remaining = this.remaining.substring(str.length);
            return true;
        }
        return false;
    };
    /**
     * @param {?} str
     * @return {?}
     */
    UrlParser.prototype.capture = function (str) {
        if (!this.consumeOptional(str)) {
            throw new Error("Expected \"" + str + "\".");
        }
    };
    return UrlParser;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var NoMatch = (function () {
    /**
     * @param {?=} segmentGroup
     */
    function NoMatch(segmentGroup) {
        this.segmentGroup = segmentGroup || null;
    }
    return NoMatch;
}());
var AbsoluteRedirect = (function () {
    /**
     * @param {?} urlTree
     */
    function AbsoluteRedirect(urlTree) {
        this.urlTree = urlTree;
    }
    return AbsoluteRedirect;
}());
/**
 * @param {?} segmentGroup
 * @return {?}
 */
function noMatch(segmentGroup) {
    return new __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"](function (obs) { return obs.error(new NoMatch(segmentGroup)); });
}
/**
 * @param {?} newTree
 * @return {?}
 */
function absoluteRedirect(newTree) {
    return new __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"](function (obs) { return obs.error(new AbsoluteRedirect(newTree)); });
}
/**
 * @param {?} redirectTo
 * @return {?}
 */
function namedOutletsRedirect(redirectTo) {
    return new __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"](function (obs) { return obs.error(new Error("Only absolute redirects can have named outlets. redirectTo: '" + redirectTo + "'")); });
}
/**
 * @param {?} route
 * @return {?}
 */
function canLoadFails(route) {
    return new __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"](function (obs) { return obs.error(navigationCancelingError("Cannot load children because the guard of the route \"path: '" + route.path + "'\" returned false")); });
}
/**
 * Returns the `UrlTree` with the redirection applied.
 *
 * Lazy modules are loaded along the way.
 * @param {?} moduleInjector
 * @param {?} configLoader
 * @param {?} urlSerializer
 * @param {?} urlTree
 * @param {?} config
 * @return {?}
 */
function applyRedirects(moduleInjector, configLoader, urlSerializer, urlTree, config) {
    return new ApplyRedirects(moduleInjector, configLoader, urlSerializer, urlTree, config).apply();
}
var ApplyRedirects = (function () {
    /**
     * @param {?} moduleInjector
     * @param {?} configLoader
     * @param {?} urlSerializer
     * @param {?} urlTree
     * @param {?} config
     */
    function ApplyRedirects(moduleInjector, configLoader, urlSerializer, urlTree, config) {
        this.configLoader = configLoader;
        this.urlSerializer = urlSerializer;
        this.urlTree = urlTree;
        this.config = config;
        this.allowRedirects = true;
        this.ngModule = moduleInjector.get(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModuleRef"]);
    }
    /**
     * @return {?}
     */
    ApplyRedirects.prototype.apply = function () {
        var _this = this;
        var /** @type {?} */ expanded$ = this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, PRIMARY_OUTLET);
        var /** @type {?} */ urlTrees$ = __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_map__["map"].call(expanded$, function (rootSegmentGroup) { return _this.createUrlTree(rootSegmentGroup, _this.urlTree.queryParams, /** @type {?} */ ((_this.urlTree.fragment))); });
        return __WEBPACK_IMPORTED_MODULE_15_rxjs_operator_catch__["_catch"].call(urlTrees$, function (e) {
            if (e instanceof AbsoluteRedirect) {
                // after an absolute redirect we do not apply any more redirects!
                _this.allowRedirects = false;
                // we need to run matching, so we can fetch all lazy-loaded modules
                return _this.match(e.urlTree);
            }
            if (e instanceof NoMatch) {
                throw _this.noMatchError(e);
            }
            throw e;
        });
    };
    /**
     * @param {?} tree
     * @return {?}
     */
    ApplyRedirects.prototype.match = function (tree) {
        var _this = this;
        var /** @type {?} */ expanded$ = this.expandSegmentGroup(this.ngModule, this.config, tree.root, PRIMARY_OUTLET);
        var /** @type {?} */ mapped$ = __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_map__["map"].call(expanded$, function (rootSegmentGroup) { return _this.createUrlTree(rootSegmentGroup, tree.queryParams, /** @type {?} */ ((tree.fragment))); });
        return __WEBPACK_IMPORTED_MODULE_15_rxjs_operator_catch__["_catch"].call(mapped$, function (e) {
            if (e instanceof NoMatch) {
                throw _this.noMatchError(e);
            }
            throw e;
        });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    ApplyRedirects.prototype.noMatchError = function (e) {
        return new Error("Cannot match any routes. URL Segment: '" + e.segmentGroup + "'");
    };
    /**
     * @param {?} rootCandidate
     * @param {?} queryParams
     * @param {?} fragment
     * @return {?}
     */
    ApplyRedirects.prototype.createUrlTree = function (rootCandidate, queryParams, fragment) {
        var /** @type {?} */ root = rootCandidate.segments.length > 0 ?
            new UrlSegmentGroup([], (_a = {}, _a[PRIMARY_OUTLET] = rootCandidate, _a)) :
            rootCandidate;
        return new UrlTree(root, queryParams, fragment);
        var _a;
    };
    /**
     * @param {?} ngModule
     * @param {?} routes
     * @param {?} segmentGroup
     * @param {?} outlet
     * @return {?}
     */
    ApplyRedirects.prototype.expandSegmentGroup = function (ngModule, routes, segmentGroup, outlet) {
        if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
            return __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_map__["map"].call(this.expandChildren(ngModule, routes, segmentGroup), function (children) { return new UrlSegmentGroup([], children); });
        }
        return this.expandSegment(ngModule, segmentGroup, routes, segmentGroup.segments, outlet, true);
    };
    /**
     * @param {?} ngModule
     * @param {?} routes
     * @param {?} segmentGroup
     * @return {?}
     */
    ApplyRedirects.prototype.expandChildren = function (ngModule, routes, segmentGroup) {
        var _this = this;
        return waitForMap(segmentGroup.children, function (childOutlet, child) { return _this.expandSegmentGroup(ngModule, routes, child, childOutlet); });
    };
    /**
     * @param {?} ngModule
     * @param {?} segmentGroup
     * @param {?} routes
     * @param {?} segments
     * @param {?} outlet
     * @param {?} allowRedirects
     * @return {?}
     */
    ApplyRedirects.prototype.expandSegment = function (ngModule, segmentGroup, routes, segments, outlet, allowRedirects) {
        var _this = this;
        var /** @type {?} */ routes$ = __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"].apply(void 0, routes);
        var /** @type {?} */ processedRoutes$ = __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_map__["map"].call(routes$, function (r) {
            var /** @type {?} */ expanded$ = _this.expandSegmentAgainstRoute(ngModule, segmentGroup, routes, r, segments, outlet, allowRedirects);
            return __WEBPACK_IMPORTED_MODULE_15_rxjs_operator_catch__["_catch"].call(expanded$, function (e) {
                if (e instanceof NoMatch) {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])(null);
                }
                throw e;
            });
        });
        var /** @type {?} */ concattedProcessedRoutes$ = __WEBPACK_IMPORTED_MODULE_16_rxjs_operator_concatAll__["concatAll"].call(processedRoutes$);
        var /** @type {?} */ first$ = __WEBPACK_IMPORTED_MODULE_9_rxjs_operator_first__["first"].call(concattedProcessedRoutes$, function (s) { return !!s; });
        return __WEBPACK_IMPORTED_MODULE_15_rxjs_operator_catch__["_catch"].call(first$, function (e, _) {
            if (e instanceof __WEBPACK_IMPORTED_MODULE_17_rxjs_util_EmptyError__["EmptyError"]) {
                if (_this.noLeftoversInUrl(segmentGroup, segments, outlet)) {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])(new UrlSegmentGroup([], {}));
                }
                throw new NoMatch(segmentGroup);
            }
            throw e;
        });
    };
    /**
     * @param {?} segmentGroup
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    ApplyRedirects.prototype.noLeftoversInUrl = function (segmentGroup, segments, outlet) {
        return segments.length === 0 && !segmentGroup.children[outlet];
    };
    /**
     * @param {?} ngModule
     * @param {?} segmentGroup
     * @param {?} routes
     * @param {?} route
     * @param {?} paths
     * @param {?} outlet
     * @param {?} allowRedirects
     * @return {?}
     */
    ApplyRedirects.prototype.expandSegmentAgainstRoute = function (ngModule, segmentGroup, routes, route, paths, outlet, allowRedirects) {
        if (getOutlet(route) !== outlet) {
            return noMatch(segmentGroup);
        }
        if (route.redirectTo === undefined) {
            return this.matchSegmentAgainstRoute(ngModule, segmentGroup, route, paths);
        }
        if (allowRedirects && this.allowRedirects) {
            return this.expandSegmentAgainstRouteUsingRedirect(ngModule, segmentGroup, routes, route, paths, outlet);
        }
        return noMatch(segmentGroup);
    };
    /**
     * @param {?} ngModule
     * @param {?} segmentGroup
     * @param {?} routes
     * @param {?} route
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    ApplyRedirects.prototype.expandSegmentAgainstRouteUsingRedirect = function (ngModule, segmentGroup, routes, route, segments, outlet) {
        if (route.path === '**') {
            return this.expandWildCardWithParamsAgainstRouteUsingRedirect(ngModule, routes, route, outlet);
        }
        return this.expandRegularSegmentAgainstRouteUsingRedirect(ngModule, segmentGroup, routes, route, segments, outlet);
    };
    /**
     * @param {?} ngModule
     * @param {?} routes
     * @param {?} route
     * @param {?} outlet
     * @return {?}
     */
    ApplyRedirects.prototype.expandWildCardWithParamsAgainstRouteUsingRedirect = function (ngModule, routes, route, outlet) {
        var _this = this;
        var /** @type {?} */ newTree = this.applyRedirectCommands([], /** @type {?} */ ((route.redirectTo)), {});
        if (((route.redirectTo)).startsWith('/')) {
            return absoluteRedirect(newTree);
        }
        return __WEBPACK_IMPORTED_MODULE_12_rxjs_operator_mergeMap__["mergeMap"].call(this.lineralizeSegments(route, newTree), function (newSegments) {
            var /** @type {?} */ group = new UrlSegmentGroup(newSegments, {});
            return _this.expandSegment(ngModule, group, routes, newSegments, outlet, false);
        });
    };
    /**
     * @param {?} ngModule
     * @param {?} segmentGroup
     * @param {?} routes
     * @param {?} route
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    ApplyRedirects.prototype.expandRegularSegmentAgainstRouteUsingRedirect = function (ngModule, segmentGroup, routes, route, segments, outlet) {
        var _this = this;
        var _a = match(segmentGroup, route, segments), matched = _a.matched, consumedSegments = _a.consumedSegments, lastChild = _a.lastChild, positionalParamSegments = _a.positionalParamSegments;
        if (!matched)
            return noMatch(segmentGroup);
        var /** @type {?} */ newTree = this.applyRedirectCommands(consumedSegments, /** @type {?} */ ((route.redirectTo)), /** @type {?} */ (positionalParamSegments));
        if (((route.redirectTo)).startsWith('/')) {
            return absoluteRedirect(newTree);
        }
        return __WEBPACK_IMPORTED_MODULE_12_rxjs_operator_mergeMap__["mergeMap"].call(this.lineralizeSegments(route, newTree), function (newSegments) {
            return _this.expandSegment(ngModule, segmentGroup, routes, newSegments.concat(segments.slice(lastChild)), outlet, false);
        });
    };
    /**
     * @param {?} ngModule
     * @param {?} rawSegmentGroup
     * @param {?} route
     * @param {?} segments
     * @return {?}
     */
    ApplyRedirects.prototype.matchSegmentAgainstRoute = function (ngModule, rawSegmentGroup, route, segments) {
        var _this = this;
        if (route.path === '**') {
            if (route.loadChildren) {
                return __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_map__["map"].call(this.configLoader.load(ngModule.injector, route), function (cfg) {
                    route._loadedConfig = cfg;
                    return new UrlSegmentGroup(segments, {});
                });
            }
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])(new UrlSegmentGroup(segments, {}));
        }
        var _a = match(rawSegmentGroup, route, segments), matched = _a.matched, consumedSegments = _a.consumedSegments, lastChild = _a.lastChild;
        if (!matched)
            return noMatch(rawSegmentGroup);
        var /** @type {?} */ rawSlicedSegments = segments.slice(lastChild);
        var /** @type {?} */ childConfig$ = this.getChildConfig(ngModule, route);
        return __WEBPACK_IMPORTED_MODULE_12_rxjs_operator_mergeMap__["mergeMap"].call(childConfig$, function (routerConfig) {
            var /** @type {?} */ childModule = routerConfig.module;
            var /** @type {?} */ childConfig = routerConfig.routes;
            var _a = split(rawSegmentGroup, consumedSegments, rawSlicedSegments, childConfig), segmentGroup = _a.segmentGroup, slicedSegments = _a.slicedSegments;
            if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
                var /** @type {?} */ expanded$_1 = _this.expandChildren(childModule, childConfig, segmentGroup);
                return __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_map__["map"].call(expanded$_1, function (children) { return new UrlSegmentGroup(consumedSegments, children); });
            }
            if (childConfig.length === 0 && slicedSegments.length === 0) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])(new UrlSegmentGroup(consumedSegments, {}));
            }
            var /** @type {?} */ expanded$ = _this.expandSegment(childModule, segmentGroup, childConfig, slicedSegments, PRIMARY_OUTLET, true);
            return __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_map__["map"].call(expanded$, function (cs) { return new UrlSegmentGroup(consumedSegments.concat(cs.segments), cs.children); });
        });
    };
    /**
     * @param {?} ngModule
     * @param {?} route
     * @return {?}
     */
    ApplyRedirects.prototype.getChildConfig = function (ngModule, route) {
        var _this = this;
        if (route.children) {
            // The children belong to the same module
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])(new LoadedRouterConfig(route.children, ngModule));
        }
        if (route.loadChildren) {
            // lazy children belong to the loaded module
            if (route._loadedConfig !== undefined) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])(route._loadedConfig);
            }
            return __WEBPACK_IMPORTED_MODULE_12_rxjs_operator_mergeMap__["mergeMap"].call(runCanLoadGuard(ngModule.injector, route), function (shouldLoad) {
                if (shouldLoad) {
                    return __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_map__["map"].call(_this.configLoader.load(ngModule.injector, route), function (cfg) {
                        route._loadedConfig = cfg;
                        return cfg;
                    });
                }
                return canLoadFails(route);
            });
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])(new LoadedRouterConfig([], ngModule));
    };
    /**
     * @param {?} route
     * @param {?} urlTree
     * @return {?}
     */
    ApplyRedirects.prototype.lineralizeSegments = function (route, urlTree) {
        var /** @type {?} */ res = [];
        var /** @type {?} */ c = urlTree.root;
        while (true) {
            res = res.concat(c.segments);
            if (c.numberOfChildren === 0) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])(res);
            }
            if (c.numberOfChildren > 1 || !c.children[PRIMARY_OUTLET]) {
                return namedOutletsRedirect(/** @type {?} */ ((route.redirectTo)));
            }
            c = c.children[PRIMARY_OUTLET];
        }
    };
    /**
     * @param {?} segments
     * @param {?} redirectTo
     * @param {?} posParams
     * @return {?}
     */
    ApplyRedirects.prototype.applyRedirectCommands = function (segments, redirectTo, posParams) {
        return this.applyRedirectCreatreUrlTree(redirectTo, this.urlSerializer.parse(redirectTo), segments, posParams);
    };
    /**
     * @param {?} redirectTo
     * @param {?} urlTree
     * @param {?} segments
     * @param {?} posParams
     * @return {?}
     */
    ApplyRedirects.prototype.applyRedirectCreatreUrlTree = function (redirectTo, urlTree, segments, posParams) {
        var /** @type {?} */ newRoot = this.createSegmentGroup(redirectTo, urlTree.root, segments, posParams);
        return new UrlTree(newRoot, this.createQueryParams(urlTree.queryParams, this.urlTree.queryParams), urlTree.fragment);
    };
    /**
     * @param {?} redirectToParams
     * @param {?} actualParams
     * @return {?}
     */
    ApplyRedirects.prototype.createQueryParams = function (redirectToParams, actualParams) {
        var /** @type {?} */ res = {};
        forEach(redirectToParams, function (v, k) {
            var /** @type {?} */ copySourceValue = typeof v === 'string' && v.startsWith(':');
            if (copySourceValue) {
                var /** @type {?} */ sourceName = v.substring(1);
                res[k] = actualParams[sourceName];
            }
            else {
                res[k] = v;
            }
        });
        return res;
    };
    /**
     * @param {?} redirectTo
     * @param {?} group
     * @param {?} segments
     * @param {?} posParams
     * @return {?}
     */
    ApplyRedirects.prototype.createSegmentGroup = function (redirectTo, group, segments, posParams) {
        var _this = this;
        var /** @type {?} */ updatedSegments = this.createSegments(redirectTo, group.segments, segments, posParams);
        var /** @type {?} */ children = {};
        forEach(group.children, function (child, name) {
            children[name] = _this.createSegmentGroup(redirectTo, child, segments, posParams);
        });
        return new UrlSegmentGroup(updatedSegments, children);
    };
    /**
     * @param {?} redirectTo
     * @param {?} redirectToSegments
     * @param {?} actualSegments
     * @param {?} posParams
     * @return {?}
     */
    ApplyRedirects.prototype.createSegments = function (redirectTo, redirectToSegments, actualSegments, posParams) {
        var _this = this;
        return redirectToSegments.map(function (s) { return s.path.startsWith(':') ? _this.findPosParam(redirectTo, s, posParams) :
            _this.findOrReturn(s, actualSegments); });
    };
    /**
     * @param {?} redirectTo
     * @param {?} redirectToUrlSegment
     * @param {?} posParams
     * @return {?}
     */
    ApplyRedirects.prototype.findPosParam = function (redirectTo, redirectToUrlSegment, posParams) {
        var /** @type {?} */ pos = posParams[redirectToUrlSegment.path.substring(1)];
        if (!pos)
            throw new Error("Cannot redirect to '" + redirectTo + "'. Cannot find '" + redirectToUrlSegment.path + "'.");
        return pos;
    };
    /**
     * @param {?} redirectToUrlSegment
     * @param {?} actualSegments
     * @return {?}
     */
    ApplyRedirects.prototype.findOrReturn = function (redirectToUrlSegment, actualSegments) {
        var /** @type {?} */ idx = 0;
        for (var _i = 0, actualSegments_1 = actualSegments; _i < actualSegments_1.length; _i++) {
            var s = actualSegments_1[_i];
            if (s.path === redirectToUrlSegment.path) {
                actualSegments.splice(idx);
                return s;
            }
            idx++;
        }
        return redirectToUrlSegment;
    };
    return ApplyRedirects;
}());
/**
 * @param {?} moduleInjector
 * @param {?} route
 * @return {?}
 */
function runCanLoadGuard(moduleInjector, route) {
    var /** @type {?} */ canLoad = route.canLoad;
    if (!canLoad || canLoad.length === 0)
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])(true);
    var /** @type {?} */ obs = __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_map__["map"].call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_from__["from"])(canLoad), function (injectionToken) {
        var /** @type {?} */ guard = moduleInjector.get(injectionToken);
        return wrapIntoObservable(guard.canLoad ? guard.canLoad(route) : guard(route));
    });
    return andObservables(obs);
}
/**
 * @param {?} segmentGroup
 * @param {?} route
 * @param {?} segments
 * @return {?}
 */
function match(segmentGroup, route, segments) {
    if (route.path === '') {
        if ((route.pathMatch === 'full') && (segmentGroup.hasChildren() || segments.length > 0)) {
            return { matched: false, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
        }
        return { matched: true, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
    }
    var /** @type {?} */ matcher = route.matcher || defaultUrlMatcher;
    var /** @type {?} */ res = matcher(segments, segmentGroup, route);
    if (!res) {
        return {
            matched: false,
            consumedSegments: /** @type {?} */ ([]),
            lastChild: 0,
            positionalParamSegments: {},
        };
    }
    return {
        matched: true,
        consumedSegments: /** @type {?} */ ((res.consumed)),
        lastChild: /** @type {?} */ ((res.consumed.length)),
        positionalParamSegments: /** @type {?} */ ((res.posParams)),
    };
}
/**
 * @param {?} segmentGroup
 * @param {?} consumedSegments
 * @param {?} slicedSegments
 * @param {?} config
 * @return {?}
 */
function split(segmentGroup, consumedSegments, slicedSegments, config) {
    if (slicedSegments.length > 0 &&
        containsEmptyPathRedirectsWithNamedOutlets(segmentGroup, slicedSegments, config)) {
        var /** @type {?} */ s = new UrlSegmentGroup(consumedSegments, createChildrenForEmptySegments(config, new UrlSegmentGroup(slicedSegments, segmentGroup.children)));
        return { segmentGroup: mergeTrivialChildren(s), slicedSegments: [] };
    }
    if (slicedSegments.length === 0 &&
        containsEmptyPathRedirects(segmentGroup, slicedSegments, config)) {
        var /** @type {?} */ s = new UrlSegmentGroup(segmentGroup.segments, addEmptySegmentsToChildrenIfNeeded(segmentGroup, slicedSegments, config, segmentGroup.children));
        return { segmentGroup: mergeTrivialChildren(s), slicedSegments: slicedSegments };
    }
    return { segmentGroup: segmentGroup, slicedSegments: slicedSegments };
}
/**
 * @param {?} s
 * @return {?}
 */
function mergeTrivialChildren(s) {
    if (s.numberOfChildren === 1 && s.children[PRIMARY_OUTLET]) {
        var /** @type {?} */ c = s.children[PRIMARY_OUTLET];
        return new UrlSegmentGroup(s.segments.concat(c.segments), c.children);
    }
    return s;
}
/**
 * @param {?} segmentGroup
 * @param {?} slicedSegments
 * @param {?} routes
 * @param {?} children
 * @return {?}
 */
function addEmptySegmentsToChildrenIfNeeded(segmentGroup, slicedSegments, routes, children) {
    var /** @type {?} */ res = {};
    for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
        var r = routes_1[_i];
        if (isEmptyPathRedirect(segmentGroup, slicedSegments, r) && !children[getOutlet(r)]) {
            res[getOutlet(r)] = new UrlSegmentGroup([], {});
        }
    }
    return Object.assign({}, children, res);
}
/**
 * @param {?} routes
 * @param {?} primarySegmentGroup
 * @return {?}
 */
function createChildrenForEmptySegments(routes, primarySegmentGroup) {
    var /** @type {?} */ res = {};
    res[PRIMARY_OUTLET] = primarySegmentGroup;
    for (var _i = 0, routes_2 = routes; _i < routes_2.length; _i++) {
        var r = routes_2[_i];
        if (r.path === '' && getOutlet(r) !== PRIMARY_OUTLET) {
            res[getOutlet(r)] = new UrlSegmentGroup([], {});
        }
    }
    return res;
}
/**
 * @param {?} segmentGroup
 * @param {?} segments
 * @param {?} routes
 * @return {?}
 */
function containsEmptyPathRedirectsWithNamedOutlets(segmentGroup, segments, routes) {
    return routes.some(function (r) { return isEmptyPathRedirect(segmentGroup, segments, r) && getOutlet(r) !== PRIMARY_OUTLET; });
}
/**
 * @param {?} segmentGroup
 * @param {?} segments
 * @param {?} routes
 * @return {?}
 */
function containsEmptyPathRedirects(segmentGroup, segments, routes) {
    return routes.some(function (r) { return isEmptyPathRedirect(segmentGroup, segments, r); });
}
/**
 * @param {?} segmentGroup
 * @param {?} segments
 * @param {?} r
 * @return {?}
 */
function isEmptyPathRedirect(segmentGroup, segments, r) {
    if ((segmentGroup.hasChildren() || segments.length > 0) && r.pathMatch === 'full') {
        return false;
    }
    return r.path === '' && r.redirectTo !== undefined;
}
/**
 * @param {?} route
 * @return {?}
 */
function getOutlet(route) {
    return route.outlet || PRIMARY_OUTLET;
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Tree = (function () {
    /**
     * @param {?} root
     */
    function Tree(root) {
        this._root = root;
    }
    Object.defineProperty(Tree.prototype, "root", {
        /**
         * @return {?}
         */
        get: function () { return this._root.value; },
        enumerable: true,
        configurable: true
    });
    /**
     * \@internal
     * @param {?} t
     * @return {?}
     */
    Tree.prototype.parent = function (t) {
        var /** @type {?} */ p = this.pathFromRoot(t);
        return p.length > 1 ? p[p.length - 2] : null;
    };
    /**
     * \@internal
     * @param {?} t
     * @return {?}
     */
    Tree.prototype.children = function (t) {
        var /** @type {?} */ n = findNode(t, this._root);
        return n ? n.children.map(function (t) { return t.value; }) : [];
    };
    /**
     * \@internal
     * @param {?} t
     * @return {?}
     */
    Tree.prototype.firstChild = function (t) {
        var /** @type {?} */ n = findNode(t, this._root);
        return n && n.children.length > 0 ? n.children[0].value : null;
    };
    /**
     * \@internal
     * @param {?} t
     * @return {?}
     */
    Tree.prototype.siblings = function (t) {
        var /** @type {?} */ p = findPath(t, this._root);
        if (p.length < 2)
            return [];
        var /** @type {?} */ c = p[p.length - 2].children.map(function (c) { return c.value; });
        return c.filter(function (cc) { return cc !== t; });
    };
    /**
     * \@internal
     * @param {?} t
     * @return {?}
     */
    Tree.prototype.pathFromRoot = function (t) { return findPath(t, this._root).map(function (s) { return s.value; }); };
    return Tree;
}());
/**
 * @template T
 * @param {?} value
 * @param {?} node
 * @return {?}
 */
function findNode(value, node) {
    if (value === node.value)
        return node;
    for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
        var child = _a[_i];
        var /** @type {?} */ node_1 = findNode(value, child);
        if (node_1)
            return node_1;
    }
    return null;
}
/**
 * @template T
 * @param {?} value
 * @param {?} node
 * @return {?}
 */
function findPath(value, node) {
    if (value === node.value)
        return [node];
    for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
        var child = _a[_i];
        var /** @type {?} */ path = findPath(value, child);
        if (path.length) {
            path.unshift(node);
            return path;
        }
    }
    return [];
}
var TreeNode = (function () {
    /**
     * @param {?} value
     * @param {?} children
     */
    function TreeNode(value, children) {
        this.value = value;
        this.children = children;
    }
    /**
     * @return {?}
     */
    TreeNode.prototype.toString = function () { return "TreeNode(" + this.value + ")"; };
    return TreeNode;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@whatItDoes Represents the state of the router.
 *
 * \@howToUse
 *
 * ```
 * \@Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const state: RouterState = router.routerState;
 *     const root: ActivatedRoute = state.root;
 *     const child = root.firstChild;
 *     const id: Observable<string> = child.params.map(p => p.id);
 *     //...
 *   }
 * }
 * ```
 *
 * \@description
 * RouterState is a tree of activated routes. Every node in this tree knows about the "consumed" URL
 * segments, the extracted parameters, and the resolved data.
 *
 * See {\@link ActivatedRoute} for more information.
 *
 * \@stable
 */
var RouterState = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](RouterState, _super);
    /**
     * \@internal
     * @param {?} root
     * @param {?} snapshot
     */
    function RouterState(root, snapshot) {
        var _this = _super.call(this, root) || this;
        _this.snapshot = snapshot;
        setRouterState(_this, root);
        return _this;
    }
    /**
     * @return {?}
     */
    RouterState.prototype.toString = function () { return this.snapshot.toString(); };
    return RouterState;
}(Tree));
/**
 * @param {?} urlTree
 * @param {?} rootComponent
 * @return {?}
 */
function createEmptyState(urlTree, rootComponent) {
    var /** @type {?} */ snapshot = createEmptyStateSnapshot(urlTree, rootComponent);
    var /** @type {?} */ emptyUrl = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]([new UrlSegment('', {})]);
    var /** @type {?} */ emptyParams = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]({});
    var /** @type {?} */ emptyData = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]({});
    var /** @type {?} */ emptyQueryParams = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]({});
    var /** @type {?} */ fragment = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]('');
    var /** @type {?} */ activated = new ActivatedRoute(emptyUrl, emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, snapshot.root);
    activated.snapshot = snapshot.root;
    return new RouterState(new TreeNode(activated, []), snapshot);
}
/**
 * @param {?} urlTree
 * @param {?} rootComponent
 * @return {?}
 */
function createEmptyStateSnapshot(urlTree, rootComponent) {
    var /** @type {?} */ emptyParams = {};
    var /** @type {?} */ emptyData = {};
    var /** @type {?} */ emptyQueryParams = {};
    var /** @type {?} */ fragment = '';
    var /** @type {?} */ activated = new ActivatedRouteSnapshot([], emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, null, urlTree.root, -1, {});
    return new RouterStateSnapshot('', new TreeNode(activated, []));
}
/**
 * \@whatItDoes Contains the information about a route associated with a component loaded in an
 * outlet.
 * An `ActivatedRoute` can also be used to traverse the router state tree.
 *
 * \@howToUse
 *
 * ```
 * \@Component({...})
 * class MyComponent {
 *   constructor(route: ActivatedRoute) {
 *     const id: Observable<string> = route.params.map(p => p.id);
 *     const url: Observable<string> = route.url.map(segments => segments.join(''));
 *     // route.data includes both `data` and `resolve`
 *     const user = route.data.map(d => d.user);
 *   }
 * }
 * ```
 *
 * \@stable
 */
var ActivatedRoute = (function () {
    /**
     * \@internal
     * @param {?} url
     * @param {?} params
     * @param {?} queryParams
     * @param {?} fragment
     * @param {?} data
     * @param {?} outlet
     * @param {?} component
     * @param {?} futureSnapshot
     */
    function ActivatedRoute(url, params, queryParams, fragment, data, outlet, component, futureSnapshot) {
        this.url = url;
        this.params = params;
        this.queryParams = queryParams;
        this.fragment = fragment;
        this.data = data;
        this.outlet = outlet;
        this.component = component;
        this._futureSnapshot = futureSnapshot;
    }
    Object.defineProperty(ActivatedRoute.prototype, "routeConfig", {
        /**
         * The configuration used to match this route
         * @return {?}
         */
        get: function () { return this._futureSnapshot.routeConfig; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "root", {
        /**
         * The root of the router state
         * @return {?}
         */
        get: function () { return this._routerState.root; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "parent", {
        /**
         * The parent of this route in the router state tree
         * @return {?}
         */
        get: function () { return this._routerState.parent(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "firstChild", {
        /**
         * The first child of this route in the router state tree
         * @return {?}
         */
        get: function () { return this._routerState.firstChild(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "children", {
        /**
         * The children of this route in the router state tree
         * @return {?}
         */
        get: function () { return this._routerState.children(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "pathFromRoot", {
        /**
         * The path from the root of the router state tree to this route
         * @return {?}
         */
        get: function () { return this._routerState.pathFromRoot(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "paramMap", {
        /**
         * @return {?}
         */
        get: function () {
            if (!this._paramMap) {
                this._paramMap = __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_map__["map"].call(this.params, function (p) { return convertToParamMap(p); });
            }
            return this._paramMap;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "queryParamMap", {
        /**
         * @return {?}
         */
        get: function () {
            if (!this._queryParamMap) {
                this._queryParamMap =
                    __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_map__["map"].call(this.queryParams, function (p) { return convertToParamMap(p); });
            }
            return this._queryParamMap;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ActivatedRoute.prototype.toString = function () {
        return this.snapshot ? this.snapshot.toString() : "Future(" + this._futureSnapshot + ")";
    };
    return ActivatedRoute;
}());
/**
 * \@internal
 * @param {?} route
 * @return {?}
 */
function inheritedParamsDataResolve(route) {
    var /** @type {?} */ pathToRoot = route.pathFromRoot;
    var /** @type {?} */ inhertingStartingFrom = pathToRoot.length - 1;
    while (inhertingStartingFrom >= 1) {
        var /** @type {?} */ current = pathToRoot[inhertingStartingFrom];
        var /** @type {?} */ parent = pathToRoot[inhertingStartingFrom - 1];
        // current route is an empty path => inherits its parent's params and data
        if (current.routeConfig && current.routeConfig.path === '') {
            inhertingStartingFrom--;
            // parent is componentless => current route should inherit its params and data
        }
        else if (!parent.component) {
            inhertingStartingFrom--;
        }
        else {
            break;
        }
    }
    return pathToRoot.slice(inhertingStartingFrom).reduce(function (res, curr) {
        var /** @type {?} */ params = Object.assign({}, res.params, curr.params);
        var /** @type {?} */ data = Object.assign({}, res.data, curr.data);
        var /** @type {?} */ resolve = Object.assign({}, res.resolve, curr._resolvedData);
        return { params: params, data: data, resolve: resolve };
    }, /** @type {?} */ ({ params: {}, data: {}, resolve: {} }));
}
/**
 * \@whatItDoes Contains the information about a route associated with a component loaded in an
 * outlet
 * at a particular moment in time. ActivatedRouteSnapshot can also be used to traverse the router
 * state tree.
 *
 * \@howToUse
 *
 * ```
 * \@Component({templateUrl:'./my-component.html'})
 * class MyComponent {
 *   constructor(route: ActivatedRoute) {
 *     const id: string = route.snapshot.params.id;
 *     const url: string = route.snapshot.url.join('');
 *     const user = route.snapshot.data.user;
 *   }
 * }
 * ```
 *
 * \@stable
 */
var ActivatedRouteSnapshot = (function () {
    /**
     * \@internal
     * @param {?} url
     * @param {?} params
     * @param {?} queryParams
     * @param {?} fragment
     * @param {?} data
     * @param {?} outlet
     * @param {?} component
     * @param {?} routeConfig
     * @param {?} urlSegment
     * @param {?} lastPathIndex
     * @param {?} resolve
     */
    function ActivatedRouteSnapshot(url, params, queryParams, fragment, data, outlet, component, routeConfig, urlSegment, lastPathIndex, resolve) {
        this.url = url;
        this.params = params;
        this.queryParams = queryParams;
        this.fragment = fragment;
        this.data = data;
        this.outlet = outlet;
        this.component = component;
        this._routeConfig = routeConfig;
        this._urlSegment = urlSegment;
        this._lastPathIndex = lastPathIndex;
        this._resolve = resolve;
    }
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "routeConfig", {
        /**
         * The configuration used to match this route
         * @return {?}
         */
        get: function () { return this._routeConfig; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "root", {
        /**
         * The root of the router state
         * @return {?}
         */
        get: function () { return this._routerState.root; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "parent", {
        /**
         * The parent of this route in the router state tree
         * @return {?}
         */
        get: function () { return this._routerState.parent(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "firstChild", {
        /**
         * The first child of this route in the router state tree
         * @return {?}
         */
        get: function () { return this._routerState.firstChild(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "children", {
        /**
         * The children of this route in the router state tree
         * @return {?}
         */
        get: function () { return this._routerState.children(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "pathFromRoot", {
        /**
         * The path from the root of the router state tree to this route
         * @return {?}
         */
        get: function () { return this._routerState.pathFromRoot(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "paramMap", {
        /**
         * @return {?}
         */
        get: function () {
            if (!this._paramMap) {
                this._paramMap = convertToParamMap(this.params);
            }
            return this._paramMap;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "queryParamMap", {
        /**
         * @return {?}
         */
        get: function () {
            if (!this._queryParamMap) {
                this._queryParamMap = convertToParamMap(this.queryParams);
            }
            return this._queryParamMap;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ActivatedRouteSnapshot.prototype.toString = function () {
        var /** @type {?} */ url = this.url.map(function (segment) { return segment.toString(); }).join('/');
        var /** @type {?} */ matched = this._routeConfig ? this._routeConfig.path : '';
        return "Route(url:'" + url + "', path:'" + matched + "')";
    };
    return ActivatedRouteSnapshot;
}());
/**
 * \@whatItDoes Represents the state of the router at a moment in time.
 *
 * \@howToUse
 *
 * ```
 * \@Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const state: RouterState = router.routerState;
 *     const snapshot: RouterStateSnapshot = state.snapshot;
 *     const root: ActivatedRouteSnapshot = snapshot.root;
 *     const child = root.firstChild;
 *     const id: Observable<string> = child.params.map(p => p.id);
 *     //...
 *   }
 * }
 * ```
 *
 * \@description
 * RouterStateSnapshot is a tree of activated route snapshots. Every node in this tree knows about
 * the "consumed" URL segments, the extracted parameters, and the resolved data.
 *
 * \@stable
 */
var RouterStateSnapshot = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](RouterStateSnapshot, _super);
    /**
     * \@internal
     * @param {?} url
     * @param {?} root
     */
    function RouterStateSnapshot(url, root) {
        var _this = _super.call(this, root) || this;
        _this.url = url;
        setRouterState(_this, root);
        return _this;
    }
    /**
     * @return {?}
     */
    RouterStateSnapshot.prototype.toString = function () { return serializeNode(this._root); };
    return RouterStateSnapshot;
}(Tree));
/**
 * @template U, T
 * @param {?} state
 * @param {?} node
 * @return {?}
 */
function setRouterState(state, node) {
    node.value._routerState = state;
    node.children.forEach(function (c) { return setRouterState(state, c); });
}
/**
 * @param {?} node
 * @return {?}
 */
function serializeNode(node) {
    var /** @type {?} */ c = node.children.length > 0 ? " { " + node.children.map(serializeNode).join(", ") + " } " : '';
    return "" + node.value + c;
}
/**
 * The expectation is that the activate route is created with the right set of parameters.
 * So we push new values into the observables only when they are not the initial values.
 * And we detect that by checking if the snapshot field is set.
 * @param {?} route
 * @return {?}
 */
function advanceActivatedRoute(route) {
    if (route.snapshot) {
        var /** @type {?} */ currentSnapshot = route.snapshot;
        var /** @type {?} */ nextSnapshot = route._futureSnapshot;
        route.snapshot = nextSnapshot;
        if (!shallowEqual(currentSnapshot.queryParams, nextSnapshot.queryParams)) {
            ((route.queryParams)).next(nextSnapshot.queryParams);
        }
        if (currentSnapshot.fragment !== nextSnapshot.fragment) {
            ((route.fragment)).next(nextSnapshot.fragment);
        }
        if (!shallowEqual(currentSnapshot.params, nextSnapshot.params)) {
            ((route.params)).next(nextSnapshot.params);
        }
        if (!shallowEqualArrays(currentSnapshot.url, nextSnapshot.url)) {
            ((route.url)).next(nextSnapshot.url);
        }
        if (!shallowEqual(currentSnapshot.data, nextSnapshot.data)) {
            ((route.data)).next(nextSnapshot.data);
        }
    }
    else {
        route.snapshot = route._futureSnapshot;
        // this is for resolved data
        ((route.data)).next(route._futureSnapshot.data);
    }
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function equalParamsAndUrlSegments(a, b) {
    var /** @type {?} */ equalUrlParams = shallowEqual(a.params, b.params) && equalSegments(a.url, b.url);
    var /** @type {?} */ parentsMismatch = !a.parent !== !b.parent;
    return equalUrlParams && !parentsMismatch &&
        (!a.parent || equalParamsAndUrlSegments(a.parent, /** @type {?} */ ((b.parent))));
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} routeReuseStrategy
 * @param {?} curr
 * @param {?} prevState
 * @return {?}
 */
function createRouterState(routeReuseStrategy, curr, prevState) {
    var /** @type {?} */ root = createNode(routeReuseStrategy, curr._root, prevState ? prevState._root : undefined);
    return new RouterState(root, curr);
}
/**
 * @param {?} routeReuseStrategy
 * @param {?} curr
 * @param {?=} prevState
 * @return {?}
 */
function createNode(routeReuseStrategy, curr, prevState) {
    // reuse an activated route that is currently displayed on the screen
    if (prevState && routeReuseStrategy.shouldReuseRoute(curr.value, prevState.value.snapshot)) {
        var /** @type {?} */ value = prevState.value;
        value._futureSnapshot = curr.value;
        var /** @type {?} */ children = createOrReuseChildren(routeReuseStrategy, curr, prevState);
        return new TreeNode(value, children);
        // retrieve an activated route that is used to be displayed, but is not currently displayed
    }
    else if (routeReuseStrategy.retrieve(curr.value)) {
        var /** @type {?} */ tree_1 = ((routeReuseStrategy.retrieve(curr.value))).route;
        setFutureSnapshotsOfActivatedRoutes(curr, tree_1);
        return tree_1;
    }
    else {
        var /** @type {?} */ value = createActivatedRoute(curr.value);
        var /** @type {?} */ children = curr.children.map(function (c) { return createNode(routeReuseStrategy, c); });
        return new TreeNode(value, children);
    }
}
/**
 * @param {?} curr
 * @param {?} result
 * @return {?}
 */
function setFutureSnapshotsOfActivatedRoutes(curr, result) {
    if (curr.value.routeConfig !== result.value.routeConfig) {
        throw new Error('Cannot reattach ActivatedRouteSnapshot created from a different route');
    }
    if (curr.children.length !== result.children.length) {
        throw new Error('Cannot reattach ActivatedRouteSnapshot with a different number of children');
    }
    result.value._futureSnapshot = curr.value;
    for (var /** @type {?} */ i = 0; i < curr.children.length; ++i) {
        setFutureSnapshotsOfActivatedRoutes(curr.children[i], result.children[i]);
    }
}
/**
 * @param {?} routeReuseStrategy
 * @param {?} curr
 * @param {?} prevState
 * @return {?}
 */
function createOrReuseChildren(routeReuseStrategy, curr, prevState) {
    return curr.children.map(function (child) {
        for (var _i = 0, _a = prevState.children; _i < _a.length; _i++) {
            var p = _a[_i];
            if (routeReuseStrategy.shouldReuseRoute(p.value.snapshot, child.value)) {
                return createNode(routeReuseStrategy, child, p);
            }
        }
        return createNode(routeReuseStrategy, child);
    });
}
/**
 * @param {?} c
 * @return {?}
 */
function createActivatedRoute(c) {
    return new ActivatedRoute(new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](c.url), new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](c.params), new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](c.queryParams), new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](c.fragment), new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](c.data), c.outlet, c.component, c);
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} route
 * @param {?} urlTree
 * @param {?} commands
 * @param {?} queryParams
 * @param {?} fragment
 * @return {?}
 */
function createUrlTree(route, urlTree, commands, queryParams, fragment) {
    if (commands.length === 0) {
        return tree(urlTree.root, urlTree.root, urlTree, queryParams, fragment);
    }
    var /** @type {?} */ nav = computeNavigation(commands);
    if (nav.toRoot()) {
        return tree(urlTree.root, new UrlSegmentGroup([], {}), urlTree, queryParams, fragment);
    }
    var /** @type {?} */ startingPosition = findStartingPosition(nav, urlTree, route);
    var /** @type {?} */ segmentGroup = startingPosition.processChildren ?
        updateSegmentGroupChildren(startingPosition.segmentGroup, startingPosition.index, nav.commands) :
        updateSegmentGroup(startingPosition.segmentGroup, startingPosition.index, nav.commands);
    return tree(startingPosition.segmentGroup, segmentGroup, urlTree, queryParams, fragment);
}
/**
 * @param {?} command
 * @return {?}
 */
function isMatrixParams(command) {
    return typeof command === 'object' && command != null && !command.outlets && !command.segmentPath;
}
/**
 * @param {?} oldSegmentGroup
 * @param {?} newSegmentGroup
 * @param {?} urlTree
 * @param {?} queryParams
 * @param {?} fragment
 * @return {?}
 */
function tree(oldSegmentGroup, newSegmentGroup, urlTree, queryParams, fragment) {
    var /** @type {?} */ qp = {};
    if (queryParams) {
        forEach(queryParams, function (value, name) {
            qp[name] = Array.isArray(value) ? value.map(function (v) { return "" + v; }) : "" + value;
        });
    }
    if (urlTree.root === oldSegmentGroup) {
        return new UrlTree(newSegmentGroup, qp, fragment);
    }
    return new UrlTree(replaceSegment(urlTree.root, oldSegmentGroup, newSegmentGroup), qp, fragment);
}
/**
 * @param {?} current
 * @param {?} oldSegment
 * @param {?} newSegment
 * @return {?}
 */
function replaceSegment(current, oldSegment, newSegment) {
    var /** @type {?} */ children = {};
    forEach(current.children, function (c, outletName) {
        if (c === oldSegment) {
            children[outletName] = newSegment;
        }
        else {
            children[outletName] = replaceSegment(c, oldSegment, newSegment);
        }
    });
    return new UrlSegmentGroup(current.segments, children);
}
var Navigation = (function () {
    /**
     * @param {?} isAbsolute
     * @param {?} numberOfDoubleDots
     * @param {?} commands
     */
    function Navigation(isAbsolute, numberOfDoubleDots, commands) {
        this.isAbsolute = isAbsolute;
        this.numberOfDoubleDots = numberOfDoubleDots;
        this.commands = commands;
        if (isAbsolute && commands.length > 0 && isMatrixParams(commands[0])) {
            throw new Error('Root segment cannot have matrix parameters');
        }
        var cmdWithOutlet = commands.find(function (c) { return typeof c === 'object' && c != null && c.outlets; });
        if (cmdWithOutlet && cmdWithOutlet !== last$1(commands)) {
            throw new Error('{outlets:{}} has to be the last command');
        }
    }
    /**
     * @return {?}
     */
    Navigation.prototype.toRoot = function () {
        return this.isAbsolute && this.commands.length === 1 && this.commands[0] == '/';
    };
    return Navigation;
}());
/**
 * Transforms commands to a normalized `Navigation`
 * @param {?} commands
 * @return {?}
 */
function computeNavigation(commands) {
    if ((typeof commands[0] === 'string') && commands.length === 1 && commands[0] === '/') {
        return new Navigation(true, 0, commands);
    }
    var /** @type {?} */ numberOfDoubleDots = 0;
    var /** @type {?} */ isAbsolute = false;
    var /** @type {?} */ res = commands.reduce(function (res, cmd, cmdIdx) {
        if (typeof cmd === 'object' && cmd != null) {
            if (cmd.outlets) {
                var /** @type {?} */ outlets_1 = {};
                forEach(cmd.outlets, function (commands, name) {
                    outlets_1[name] = typeof commands === 'string' ? commands.split('/') : commands;
                });
                return res.concat([{ outlets: outlets_1 }]);
            }
            if (cmd.segmentPath) {
                return res.concat([cmd.segmentPath]);
            }
        }
        if (!(typeof cmd === 'string')) {
            return res.concat([cmd]);
        }
        if (cmdIdx === 0) {
            cmd.split('/').forEach(function (urlPart, partIndex) {
                if (partIndex == 0 && urlPart === '.') {
                    // skip './a'
                }
                else if (partIndex == 0 && urlPart === '') {
                    isAbsolute = true;
                }
                else if (urlPart === '..') {
                    numberOfDoubleDots++;
                }
                else if (urlPart != '') {
                    res.push(urlPart);
                }
            });
            return res;
        }
        return res.concat([cmd]);
    }, []);
    return new Navigation(isAbsolute, numberOfDoubleDots, res);
}
var Position = (function () {
    /**
     * @param {?} segmentGroup
     * @param {?} processChildren
     * @param {?} index
     */
    function Position(segmentGroup, processChildren, index) {
        this.segmentGroup = segmentGroup;
        this.processChildren = processChildren;
        this.index = index;
    }
    return Position;
}());
/**
 * @param {?} nav
 * @param {?} tree
 * @param {?} route
 * @return {?}
 */
function findStartingPosition(nav, tree, route) {
    if (nav.isAbsolute) {
        return new Position(tree.root, true, 0);
    }
    if (route.snapshot._lastPathIndex === -1) {
        return new Position(route.snapshot._urlSegment, true, 0);
    }
    var /** @type {?} */ modifier = isMatrixParams(nav.commands[0]) ? 0 : 1;
    var /** @type {?} */ index = route.snapshot._lastPathIndex + modifier;
    return createPositionApplyingDoubleDots(route.snapshot._urlSegment, index, nav.numberOfDoubleDots);
}
/**
 * @param {?} group
 * @param {?} index
 * @param {?} numberOfDoubleDots
 * @return {?}
 */
function createPositionApplyingDoubleDots(group, index, numberOfDoubleDots) {
    var /** @type {?} */ g = group;
    var /** @type {?} */ ci = index;
    var /** @type {?} */ dd = numberOfDoubleDots;
    while (dd > ci) {
        dd -= ci;
        g = ((g.parent));
        if (!g) {
            throw new Error('Invalid number of \'../\'');
        }
        ci = g.segments.length;
    }
    return new Position(g, false, ci - dd);
}
/**
 * @param {?} command
 * @return {?}
 */
function getPath(command) {
    if (typeof command === 'object' && command != null && command.outlets) {
        return command.outlets[PRIMARY_OUTLET];
    }
    return "" + command;
}
/**
 * @param {?} commands
 * @return {?}
 */
function getOutlets(commands) {
    if (!(typeof commands[0] === 'object'))
        return _a = {}, _a[PRIMARY_OUTLET] = commands, _a;
    if (commands[0].outlets === undefined)
        return _b = {}, _b[PRIMARY_OUTLET] = commands, _b;
    return commands[0].outlets;
    var _a, _b;
}
/**
 * @param {?} segmentGroup
 * @param {?} startIndex
 * @param {?} commands
 * @return {?}
 */
function updateSegmentGroup(segmentGroup, startIndex, commands) {
    if (!segmentGroup) {
        segmentGroup = new UrlSegmentGroup([], {});
    }
    if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
        return updateSegmentGroupChildren(segmentGroup, startIndex, commands);
    }
    var /** @type {?} */ m = prefixedWith(segmentGroup, startIndex, commands);
    var /** @type {?} */ slicedCommands = commands.slice(m.commandIndex);
    if (m.match && m.pathIndex < segmentGroup.segments.length) {
        var /** @type {?} */ g = new UrlSegmentGroup(segmentGroup.segments.slice(0, m.pathIndex), {});
        g.children[PRIMARY_OUTLET] =
            new UrlSegmentGroup(segmentGroup.segments.slice(m.pathIndex), segmentGroup.children);
        return updateSegmentGroupChildren(g, 0, slicedCommands);
    }
    else if (m.match && slicedCommands.length === 0) {
        return new UrlSegmentGroup(segmentGroup.segments, {});
    }
    else if (m.match && !segmentGroup.hasChildren()) {
        return createNewSegmentGroup(segmentGroup, startIndex, commands);
    }
    else if (m.match) {
        return updateSegmentGroupChildren(segmentGroup, 0, slicedCommands);
    }
    else {
        return createNewSegmentGroup(segmentGroup, startIndex, commands);
    }
}
/**
 * @param {?} segmentGroup
 * @param {?} startIndex
 * @param {?} commands
 * @return {?}
 */
function updateSegmentGroupChildren(segmentGroup, startIndex, commands) {
    if (commands.length === 0) {
        return new UrlSegmentGroup(segmentGroup.segments, {});
    }
    else {
        var /** @type {?} */ outlets_2 = getOutlets(commands);
        var /** @type {?} */ children_2 = {};
        forEach(outlets_2, function (commands, outlet) {
            if (commands !== null) {
                children_2[outlet] = updateSegmentGroup(segmentGroup.children[outlet], startIndex, commands);
            }
        });
        forEach(segmentGroup.children, function (child, childOutlet) {
            if (outlets_2[childOutlet] === undefined) {
                children_2[childOutlet] = child;
            }
        });
        return new UrlSegmentGroup(segmentGroup.segments, children_2);
    }
}
/**
 * @param {?} segmentGroup
 * @param {?} startIndex
 * @param {?} commands
 * @return {?}
 */
function prefixedWith(segmentGroup, startIndex, commands) {
    var /** @type {?} */ currentCommandIndex = 0;
    var /** @type {?} */ currentPathIndex = startIndex;
    var /** @type {?} */ noMatch = { match: false, pathIndex: 0, commandIndex: 0 };
    while (currentPathIndex < segmentGroup.segments.length) {
        if (currentCommandIndex >= commands.length)
            return noMatch;
        var /** @type {?} */ path = segmentGroup.segments[currentPathIndex];
        var /** @type {?} */ curr = getPath(commands[currentCommandIndex]);
        var /** @type {?} */ next = currentCommandIndex < commands.length - 1 ? commands[currentCommandIndex + 1] : null;
        if (currentPathIndex > 0 && curr === undefined)
            break;
        if (curr && next && (typeof next === 'object') && next.outlets === undefined) {
            if (!compare(curr, next, path))
                return noMatch;
            currentCommandIndex += 2;
        }
        else {
            if (!compare(curr, {}, path))
                return noMatch;
            currentCommandIndex++;
        }
        currentPathIndex++;
    }
    return { match: true, pathIndex: currentPathIndex, commandIndex: currentCommandIndex };
}
/**
 * @param {?} segmentGroup
 * @param {?} startIndex
 * @param {?} commands
 * @return {?}
 */
function createNewSegmentGroup(segmentGroup, startIndex, commands) {
    var /** @type {?} */ paths = segmentGroup.segments.slice(0, startIndex);
    var /** @type {?} */ i = 0;
    while (i < commands.length) {
        if (typeof commands[i] === 'object' && commands[i].outlets !== undefined) {
            var /** @type {?} */ children = createNewSegmentChildren(commands[i].outlets);
            return new UrlSegmentGroup(paths, children);
        }
        // if we start with an object literal, we need to reuse the path part from the segment
        if (i === 0 && isMatrixParams(commands[0])) {
            var /** @type {?} */ p = segmentGroup.segments[startIndex];
            paths.push(new UrlSegment(p.path, commands[0]));
            i++;
            continue;
        }
        var /** @type {?} */ curr = getPath(commands[i]);
        var /** @type {?} */ next = (i < commands.length - 1) ? commands[i + 1] : null;
        if (curr && next && isMatrixParams(next)) {
            paths.push(new UrlSegment(curr, stringify(next)));
            i += 2;
        }
        else {
            paths.push(new UrlSegment(curr, {}));
            i++;
        }
    }
    return new UrlSegmentGroup(paths, {});
}
/**
 * @param {?} outlets
 * @return {?}
 */
function createNewSegmentChildren(outlets) {
    var /** @type {?} */ children = {};
    forEach(outlets, function (commands, outlet) {
        if (commands !== null) {
            children[outlet] = createNewSegmentGroup(new UrlSegmentGroup([], {}), 0, commands);
        }
    });
    return children;
}
/**
 * @param {?} params
 * @return {?}
 */
function stringify(params) {
    var /** @type {?} */ res = {};
    forEach(params, function (v, k) { return res[k] = "" + v; });
    return res;
}
/**
 * @param {?} path
 * @param {?} params
 * @param {?} segment
 * @return {?}
 */
function compare(path, params, segment) {
    return path == segment.path && shallowEqual(params, segment.parameters);
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var NoMatch$1 = (function () {
    function NoMatch$1() {
    }
    return NoMatch$1;
}());
/**
 * @param {?} rootComponentType
 * @param {?} config
 * @param {?} urlTree
 * @param {?} url
 * @return {?}
 */
function recognize(rootComponentType, config, urlTree, url) {
    return new Recognizer(rootComponentType, config, urlTree, url).recognize();
}
var Recognizer = (function () {
    /**
     * @param {?} rootComponentType
     * @param {?} config
     * @param {?} urlTree
     * @param {?} url
     */
    function Recognizer(rootComponentType, config, urlTree, url) {
        this.rootComponentType = rootComponentType;
        this.config = config;
        this.urlTree = urlTree;
        this.url = url;
    }
    /**
     * @return {?}
     */
    Recognizer.prototype.recognize = function () {
        try {
            var /** @type {?} */ rootSegmentGroup = split$1(this.urlTree.root, [], [], this.config).segmentGroup;
            var /** @type {?} */ children = this.processSegmentGroup(this.config, rootSegmentGroup, PRIMARY_OUTLET);
            var /** @type {?} */ root = new ActivatedRouteSnapshot([], Object.freeze({}), Object.freeze(this.urlTree.queryParams), /** @type {?} */ ((this.urlTree.fragment)), {}, PRIMARY_OUTLET, this.rootComponentType, null, this.urlTree.root, -1, {});
            var /** @type {?} */ rootNode = new TreeNode(root, children);
            var /** @type {?} */ routeState = new RouterStateSnapshot(this.url, rootNode);
            this.inheritParamsAndData(routeState._root);
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])(routeState);
        }
        catch (e) {
            return new __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"](function (obs) { return obs.error(e); });
        }
    };
    /**
     * @param {?} routeNode
     * @return {?}
     */
    Recognizer.prototype.inheritParamsAndData = function (routeNode) {
        var _this = this;
        var /** @type {?} */ route = routeNode.value;
        var /** @type {?} */ i = inheritedParamsDataResolve(route);
        route.params = Object.freeze(i.params);
        route.data = Object.freeze(i.data);
        routeNode.children.forEach(function (n) { return _this.inheritParamsAndData(n); });
    };
    /**
     * @param {?} config
     * @param {?} segmentGroup
     * @param {?} outlet
     * @return {?}
     */
    Recognizer.prototype.processSegmentGroup = function (config, segmentGroup, outlet) {
        if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
            return this.processChildren(config, segmentGroup);
        }
        return this.processSegment(config, segmentGroup, segmentGroup.segments, outlet);
    };
    /**
     * @param {?} config
     * @param {?} segmentGroup
     * @return {?}
     */
    Recognizer.prototype.processChildren = function (config, segmentGroup) {
        var _this = this;
        var /** @type {?} */ children = mapChildrenIntoArray(segmentGroup, function (child, childOutlet) { return _this.processSegmentGroup(config, child, childOutlet); });
        checkOutletNameUniqueness(children);
        sortActivatedRouteSnapshots(children);
        return children;
    };
    /**
     * @param {?} config
     * @param {?} segmentGroup
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    Recognizer.prototype.processSegment = function (config, segmentGroup, segments, outlet) {
        for (var _i = 0, config_1 = config; _i < config_1.length; _i++) {
            var r = config_1[_i];
            try {
                return this.processSegmentAgainstRoute(r, segmentGroup, segments, outlet);
            }
            catch (e) {
                if (!(e instanceof NoMatch$1))
                    throw e;
            }
        }
        if (this.noLeftoversInUrl(segmentGroup, segments, outlet)) {
            return [];
        }
        throw new NoMatch$1();
    };
    /**
     * @param {?} segmentGroup
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    Recognizer.prototype.noLeftoversInUrl = function (segmentGroup, segments, outlet) {
        return segments.length === 0 && !segmentGroup.children[outlet];
    };
    /**
     * @param {?} route
     * @param {?} rawSegment
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    Recognizer.prototype.processSegmentAgainstRoute = function (route, rawSegment, segments, outlet) {
        if (route.redirectTo)
            throw new NoMatch$1();
        if ((route.outlet || PRIMARY_OUTLET) !== outlet)
            throw new NoMatch$1();
        if (route.path === '**') {
            var /** @type {?} */ params = segments.length > 0 ? ((last$1(segments))).parameters : {};
            var /** @type {?} */ snapshot_1 = new ActivatedRouteSnapshot(segments, params, Object.freeze(this.urlTree.queryParams), /** @type {?} */ ((this.urlTree.fragment)), getData(route), outlet, /** @type {?} */ ((route.component)), route, getSourceSegmentGroup(rawSegment), getPathIndexShift(rawSegment) + segments.length, getResolve(route));
            return [new TreeNode(snapshot_1, [])];
        }
        var _a = match$1(rawSegment, route, segments), consumedSegments = _a.consumedSegments, parameters = _a.parameters, lastChild = _a.lastChild;
        var /** @type {?} */ rawSlicedSegments = segments.slice(lastChild);
        var /** @type {?} */ childConfig = getChildConfig(route);
        var _b = split$1(rawSegment, consumedSegments, rawSlicedSegments, childConfig), segmentGroup = _b.segmentGroup, slicedSegments = _b.slicedSegments;
        var /** @type {?} */ snapshot = new ActivatedRouteSnapshot(consumedSegments, parameters, Object.freeze(this.urlTree.queryParams), /** @type {?} */ ((this.urlTree.fragment)), getData(route), outlet, /** @type {?} */ ((route.component)), route, getSourceSegmentGroup(rawSegment), getPathIndexShift(rawSegment) + consumedSegments.length, getResolve(route));
        if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
            var /** @type {?} */ children_3 = this.processChildren(childConfig, segmentGroup);
            return [new TreeNode(snapshot, children_3)];
        }
        if (childConfig.length === 0 && slicedSegments.length === 0) {
            return [new TreeNode(snapshot, [])];
        }
        var /** @type {?} */ children = this.processSegment(childConfig, segmentGroup, slicedSegments, PRIMARY_OUTLET);
        return [new TreeNode(snapshot, children)];
    };
    return Recognizer;
}());
/**
 * @param {?} nodes
 * @return {?}
 */
function sortActivatedRouteSnapshots(nodes) {
    nodes.sort(function (a, b) {
        if (a.value.outlet === PRIMARY_OUTLET)
            return -1;
        if (b.value.outlet === PRIMARY_OUTLET)
            return 1;
        return a.value.outlet.localeCompare(b.value.outlet);
    });
}
/**
 * @param {?} route
 * @return {?}
 */
function getChildConfig(route) {
    if (route.children) {
        return route.children;
    }
    if (route.loadChildren) {
        return ((route._loadedConfig)).routes;
    }
    return [];
}
/**
 * @param {?} segmentGroup
 * @param {?} route
 * @param {?} segments
 * @return {?}
 */
function match$1(segmentGroup, route, segments) {
    if (route.path === '') {
        if (route.pathMatch === 'full' && (segmentGroup.hasChildren() || segments.length > 0)) {
            throw new NoMatch$1();
        }
        return { consumedSegments: [], lastChild: 0, parameters: {} };
    }
    var /** @type {?} */ matcher = route.matcher || defaultUrlMatcher;
    var /** @type {?} */ res = matcher(segments, segmentGroup, route);
    if (!res)
        throw new NoMatch$1();
    var /** @type {?} */ posParams = {};
    forEach(/** @type {?} */ ((res.posParams)), function (v, k) { posParams[k] = v.path; });
    var /** @type {?} */ parameters = res.consumed.length > 0 ? Object.assign({}, posParams, res.consumed[res.consumed.length - 1].parameters) :
        posParams;
    return { consumedSegments: res.consumed, lastChild: res.consumed.length, parameters: parameters };
}
/**
 * @param {?} nodes
 * @return {?}
 */
function checkOutletNameUniqueness(nodes) {
    var /** @type {?} */ names = {};
    nodes.forEach(function (n) {
        var /** @type {?} */ routeWithSameOutletName = names[n.value.outlet];
        if (routeWithSameOutletName) {
            var /** @type {?} */ p = routeWithSameOutletName.url.map(function (s) { return s.toString(); }).join('/');
            var /** @type {?} */ c = n.value.url.map(function (s) { return s.toString(); }).join('/');
            throw new Error("Two segments cannot have the same outlet name: '" + p + "' and '" + c + "'.");
        }
        names[n.value.outlet] = n.value;
    });
}
/**
 * @param {?} segmentGroup
 * @return {?}
 */
function getSourceSegmentGroup(segmentGroup) {
    var /** @type {?} */ s = segmentGroup;
    while (s._sourceSegment) {
        s = s._sourceSegment;
    }
    return s;
}
/**
 * @param {?} segmentGroup
 * @return {?}
 */
function getPathIndexShift(segmentGroup) {
    var /** @type {?} */ s = segmentGroup;
    var /** @type {?} */ res = (s._segmentIndexShift ? s._segmentIndexShift : 0);
    while (s._sourceSegment) {
        s = s._sourceSegment;
        res += (s._segmentIndexShift ? s._segmentIndexShift : 0);
    }
    return res - 1;
}
/**
 * @param {?} segmentGroup
 * @param {?} consumedSegments
 * @param {?} slicedSegments
 * @param {?} config
 * @return {?}
 */
function split$1(segmentGroup, consumedSegments, slicedSegments, config) {
    if (slicedSegments.length > 0 &&
        containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, config)) {
        var /** @type {?} */ s_1 = new UrlSegmentGroup(consumedSegments, createChildrenForEmptyPaths(segmentGroup, consumedSegments, config, new UrlSegmentGroup(slicedSegments, segmentGroup.children)));
        s_1._sourceSegment = segmentGroup;
        s_1._segmentIndexShift = consumedSegments.length;
        return { segmentGroup: s_1, slicedSegments: [] };
    }
    if (slicedSegments.length === 0 &&
        containsEmptyPathMatches(segmentGroup, slicedSegments, config)) {
        var /** @type {?} */ s_2 = new UrlSegmentGroup(segmentGroup.segments, addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, config, segmentGroup.children));
        s_2._sourceSegment = segmentGroup;
        s_2._segmentIndexShift = consumedSegments.length;
        return { segmentGroup: s_2, slicedSegments: slicedSegments };
    }
    var /** @type {?} */ s = new UrlSegmentGroup(segmentGroup.segments, segmentGroup.children);
    s._sourceSegment = segmentGroup;
    s._segmentIndexShift = consumedSegments.length;
    return { segmentGroup: s, slicedSegments: slicedSegments };
}
/**
 * @param {?} segmentGroup
 * @param {?} slicedSegments
 * @param {?} routes
 * @param {?} children
 * @return {?}
 */
function addEmptyPathsToChildrenIfNeeded(segmentGroup, slicedSegments, routes, children) {
    var /** @type {?} */ res = {};
    for (var _i = 0, routes_3 = routes; _i < routes_3.length; _i++) {
        var r = routes_3[_i];
        if (emptyPathMatch(segmentGroup, slicedSegments, r) && !children[getOutlet$1(r)]) {
            var /** @type {?} */ s = new UrlSegmentGroup([], {});
            s._sourceSegment = segmentGroup;
            s._segmentIndexShift = segmentGroup.segments.length;
            res[getOutlet$1(r)] = s;
        }
    }
    return Object.assign({}, children, res);
}
/**
 * @param {?} segmentGroup
 * @param {?} consumedSegments
 * @param {?} routes
 * @param {?} primarySegment
 * @return {?}
 */
function createChildrenForEmptyPaths(segmentGroup, consumedSegments, routes, primarySegment) {
    var /** @type {?} */ res = {};
    res[PRIMARY_OUTLET] = primarySegment;
    primarySegment._sourceSegment = segmentGroup;
    primarySegment._segmentIndexShift = consumedSegments.length;
    for (var _i = 0, routes_4 = routes; _i < routes_4.length; _i++) {
        var r = routes_4[_i];
        if (r.path === '' && getOutlet$1(r) !== PRIMARY_OUTLET) {
            var /** @type {?} */ s = new UrlSegmentGroup([], {});
            s._sourceSegment = segmentGroup;
            s._segmentIndexShift = consumedSegments.length;
            res[getOutlet$1(r)] = s;
        }
    }
    return res;
}
/**
 * @param {?} segmentGroup
 * @param {?} slicedSegments
 * @param {?} routes
 * @return {?}
 */
function containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, routes) {
    return routes.some(function (r) { return emptyPathMatch(segmentGroup, slicedSegments, r) && getOutlet$1(r) !== PRIMARY_OUTLET; });
}
/**
 * @param {?} segmentGroup
 * @param {?} slicedSegments
 * @param {?} routes
 * @return {?}
 */
function containsEmptyPathMatches(segmentGroup, slicedSegments, routes) {
    return routes.some(function (r) { return emptyPathMatch(segmentGroup, slicedSegments, r); });
}
/**
 * @param {?} segmentGroup
 * @param {?} slicedSegments
 * @param {?} r
 * @return {?}
 */
function emptyPathMatch(segmentGroup, slicedSegments, r) {
    if ((segmentGroup.hasChildren() || slicedSegments.length > 0) && r.pathMatch === 'full') {
        return false;
    }
    return r.path === '' && r.redirectTo === undefined;
}
/**
 * @param {?} route
 * @return {?}
 */
function getOutlet$1(route) {
    return route.outlet || PRIMARY_OUTLET;
}
/**
 * @param {?} route
 * @return {?}
 */
function getData(route) {
    return route.data || {};
}
/**
 * @param {?} route
 * @return {?}
 */
function getResolve(route) {
    return route.resolve || {};
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@whatItDoes Provides a way to customize when activated routes get reused.
 *
 * \@experimental
 * @abstract
 */
var RouteReuseStrategy = (function () {
    function RouteReuseStrategy() {
    }
    /**
     * Determines if this route (and its subtree) should be detached to be reused later
     * @abstract
     * @param {?} route
     * @return {?}
     */
    RouteReuseStrategy.prototype.shouldDetach = function (route) { };
    /**
     * Stores the detached route.
     *
     * Storing a `null` value should erase the previously stored value.
     * @abstract
     * @param {?} route
     * @param {?} handle
     * @return {?}
     */
    RouteReuseStrategy.prototype.store = function (route, handle) { };
    /**
     * Determines if this route (and its subtree) should be reattached
     * @abstract
     * @param {?} route
     * @return {?}
     */
    RouteReuseStrategy.prototype.shouldAttach = function (route) { };
    /**
     * Retrieves the previously stored route
     * @abstract
     * @param {?} route
     * @return {?}
     */
    RouteReuseStrategy.prototype.retrieve = function (route) { };
    /**
     * Determines if a route should be reused
     * @abstract
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    RouteReuseStrategy.prototype.shouldReuseRoute = function (future, curr) { };
    return RouteReuseStrategy;
}());
/**
 * Does not detach any subtrees. Reuses routes as long as their route config is the same.
 */
var DefaultRouteReuseStrategy = (function () {
    function DefaultRouteReuseStrategy() {
    }
    /**
     * @param {?} route
     * @return {?}
     */
    DefaultRouteReuseStrategy.prototype.shouldDetach = function (route) { return false; };
    /**
     * @param {?} route
     * @param {?} detachedTree
     * @return {?}
     */
    DefaultRouteReuseStrategy.prototype.store = function (route, detachedTree) { };
    /**
     * @param {?} route
     * @return {?}
     */
    DefaultRouteReuseStrategy.prototype.shouldAttach = function (route) { return false; };
    /**
     * @param {?} route
     * @return {?}
     */
    DefaultRouteReuseStrategy.prototype.retrieve = function (route) { return null; };
    /**
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    DefaultRouteReuseStrategy.prototype.shouldReuseRoute = function (future, curr) {
        return future.routeConfig === curr.routeConfig;
    };
    return DefaultRouteReuseStrategy;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@docsNotRequired
 * \@experimental
 */
var ROUTES = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["InjectionToken"]('ROUTES');
var RouterConfigLoader = (function () {
    /**
     * @param {?} loader
     * @param {?} compiler
     * @param {?=} onLoadStartListener
     * @param {?=} onLoadEndListener
     */
    function RouterConfigLoader(loader, compiler, onLoadStartListener, onLoadEndListener) {
        this.loader = loader;
        this.compiler = compiler;
        this.onLoadStartListener = onLoadStartListener;
        this.onLoadEndListener = onLoadEndListener;
    }
    /**
     * @param {?} parentInjector
     * @param {?} route
     * @return {?}
     */
    RouterConfigLoader.prototype.load = function (parentInjector, route) {
        var _this = this;
        if (this.onLoadStartListener) {
            this.onLoadStartListener(route);
        }
        var /** @type {?} */ moduleFactory$ = this.loadModuleFactory(/** @type {?} */ ((route.loadChildren)));
        return __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_map__["map"].call(moduleFactory$, function (factory) {
            if (_this.onLoadEndListener) {
                _this.onLoadEndListener(route);
            }
            var /** @type {?} */ module = factory.create(parentInjector);
            return new LoadedRouterConfig(flatten(module.injector.get(ROUTES)), module);
        });
    };
    /**
     * @param {?} loadChildren
     * @return {?}
     */
    RouterConfigLoader.prototype.loadModuleFactory = function (loadChildren) {
        var _this = this;
        if (typeof loadChildren === 'string') {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18_rxjs_observable_fromPromise__["fromPromise"])(this.loader.load(loadChildren));
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_12_rxjs_operator_mergeMap__["mergeMap"].call(wrapIntoObservable(loadChildren()), function (t) {
                if (t instanceof __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModuleFactory"]) {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])(t);
                }
                else {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_18_rxjs_observable_fromPromise__["fromPromise"])(_this.compiler.compileModuleAsync(t));
                }
            });
        }
    };
    return RouterConfigLoader;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@whatItDoes Provides a way to migrate AngularJS applications to Angular.
 *
 * \@experimental
 * @abstract
 */
var UrlHandlingStrategy = (function () {
    function UrlHandlingStrategy() {
    }
    /**
     * Tells the router if this URL should be processed.
     *
     * When it returns true, the router will execute the regular navigation.
     * When it returns false, the router will set the router state to an empty state.
     * As a result, all the active components will be destroyed.
     *
     * @abstract
     * @param {?} url
     * @return {?}
     */
    UrlHandlingStrategy.prototype.shouldProcessUrl = function (url) { };
    /**
     * Extracts the part of the URL that should be handled by the router.
     * The rest of the URL will remain untouched.
     * @abstract
     * @param {?} url
     * @return {?}
     */
    UrlHandlingStrategy.prototype.extract = function (url) { };
    /**
     * Merges the URL fragment with the rest of the URL.
     * @abstract
     * @param {?} newUrlPart
     * @param {?} rawUrl
     * @return {?}
     */
    UrlHandlingStrategy.prototype.merge = function (newUrlPart, rawUrl) { };
    return UrlHandlingStrategy;
}());
/**
 * \@experimental
 */
var DefaultUrlHandlingStrategy = (function () {
    function DefaultUrlHandlingStrategy() {
    }
    /**
     * @param {?} url
     * @return {?}
     */
    DefaultUrlHandlingStrategy.prototype.shouldProcessUrl = function (url) { return true; };
    /**
     * @param {?} url
     * @return {?}
     */
    DefaultUrlHandlingStrategy.prototype.extract = function (url) { return url; };
    /**
     * @param {?} newUrlPart
     * @param {?} wholeUrl
     * @return {?}
     */
    DefaultUrlHandlingStrategy.prototype.merge = function (newUrlPart, wholeUrl) { return newUrlPart; };
    return DefaultUrlHandlingStrategy;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} error
 * @return {?}
 */
function defaultErrorHandler(error) {
    throw error;
}
/**
 * \@internal
 * @param {?} snapshot
 * @return {?}
 */
function defaultRouterHook(snapshot) {
    return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])(null));
}
/**
 * \@whatItDoes Provides the navigation and url manipulation capabilities.
 *
 * See {\@link Routes} for more details and examples.
 *
 * \@ngModule RouterModule
 *
 * \@stable
 */
var Router = (function () {
    /**
     * @param {?} rootComponentType
     * @param {?} urlSerializer
     * @param {?} rootContexts
     * @param {?} location
     * @param {?} injector
     * @param {?} loader
     * @param {?} compiler
     * @param {?} config
     */
    function Router(rootComponentType, urlSerializer, rootContexts, location, injector, loader, compiler, config) {
        var _this = this;
        this.rootComponentType = rootComponentType;
        this.urlSerializer = urlSerializer;
        this.rootContexts = rootContexts;
        this.location = location;
        this.config = config;
        this.navigations = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](/** @type {?} */ ((null)));
        this.routerEvents = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.navigationId = 0;
        /**
         * Error handler that is invoked when a navigation errors.
         *
         * See {\@link ErrorHandler} for more information.
         */
        this.errorHandler = defaultErrorHandler;
        /**
         * Indicates if at least one navigation happened.
         */
        this.navigated = false;
        /**
         * Used by RouterModule. This allows us to
         * pause the navigation either before preactivation or after it.
         * \@internal
         */
        this.hooks = {
            beforePreactivation: defaultRouterHook,
            afterPreactivation: defaultRouterHook
        };
        /**
         * Extracts and merges URLs. Used for AngularJS to Angular migrations.
         */
        this.urlHandlingStrategy = new DefaultUrlHandlingStrategy();
        this.routeReuseStrategy = new DefaultRouteReuseStrategy();
        var onLoadStart = function (r) { return _this.triggerEvent(new RouteConfigLoadStart(r)); };
        var onLoadEnd = function (r) { return _this.triggerEvent(new RouteConfigLoadEnd(r)); };
        this.ngModule = injector.get(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModuleRef"]);
        this.resetConfig(config);
        this.currentUrlTree = createEmptyUrlTree();
        this.rawUrlTree = this.currentUrlTree;
        this.configLoader = new RouterConfigLoader(loader, compiler, onLoadStart, onLoadEnd);
        this.currentRouterState = createEmptyState(this.currentUrlTree, this.rootComponentType);
        this.processNavigations();
    }
    /**
     * \@internal
     * TODO: this should be removed once the constructor of the router made internal
     * @param {?} rootComponentType
     * @return {?}
     */
    Router.prototype.resetRootComponentType = function (rootComponentType) {
        this.rootComponentType = rootComponentType;
        // TODO: vsavkin router 4.0 should make the root component set to null
        // this will simplify the lifecycle of the router.
        this.currentRouterState.root.component = this.rootComponentType;
    };
    /**
     * Sets up the location change listener and performs the initial navigation.
     * @return {?}
     */
    Router.prototype.initialNavigation = function () {
        this.setUpLocationChangeListener();
        if (this.navigationId === 0) {
            this.navigateByUrl(this.location.path(true), { replaceUrl: true });
        }
    };
    /**
     * Sets up the location change listener.
     * @return {?}
     */
    Router.prototype.setUpLocationChangeListener = function () {
        var _this = this;
        // Zone.current.wrap is needed because of the issue with RxJS scheduler,
        // which does not work properly with zone.js in IE and Safari
        if (!this.locationSubscription) {
            this.locationSubscription = (this.location.subscribe(Zone.current.wrap(function (change) {
                var /** @type {?} */ rawUrlTree = _this.urlSerializer.parse(change['url']);
                var /** @type {?} */ source = change['type'] === 'popstate' ? 'popstate' : 'hashchange';
                setTimeout(function () { _this.scheduleNavigation(rawUrlTree, source, { replaceUrl: true }); }, 0);
            })));
        }
    };
    Object.defineProperty(Router.prototype, "routerState", {
        /**
         * The current route state
         * @return {?}
         */
        get: function () { return this.currentRouterState; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Router.prototype, "url", {
        /**
         * The current url
         * @return {?}
         */
        get: function () { return this.serializeUrl(this.currentUrlTree); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Router.prototype, "events", {
        /**
         * An observable of router events
         * @return {?}
         */
        get: function () { return this.routerEvents; },
        enumerable: true,
        configurable: true
    });
    /**
     * \@internal
     * @param {?} e
     * @return {?}
     */
    Router.prototype.triggerEvent = function (e) { this.routerEvents.next(e); };
    /**
     * Resets the configuration used for navigation and generating links.
     *
     * ### Usage
     *
     * ```
     * router.resetConfig([
     *  { path: 'team/:id', component: TeamCmp, children: [
     *    { path: 'simple', component: SimpleCmp },
     *    { path: 'user/:name', component: UserCmp }
     *  ]}
     * ]);
     * ```
     * @param {?} config
     * @return {?}
     */
    Router.prototype.resetConfig = function (config) {
        validateConfig(config);
        this.config = config;
        this.navigated = false;
    };
    /**
     * \@docsNotRequired
     * @return {?}
     */
    Router.prototype.ngOnDestroy = function () { this.dispose(); };
    /**
     * Disposes of the router
     * @return {?}
     */
    Router.prototype.dispose = function () {
        if (this.locationSubscription) {
            this.locationSubscription.unsubscribe();
            this.locationSubscription = ((null));
        }
    };
    /**
     * Applies an array of commands to the current url tree and creates a new url tree.
     *
     * When given an activate route, applies the given commands starting from the route.
     * When not given a route, applies the given command starting from the root.
     *
     * ### Usage
     *
     * ```
     * // create /team/33/user/11
     * router.createUrlTree(['/team', 33, 'user', 11]);
     *
     * // create /team/33;expand=true/user/11
     * router.createUrlTree(['/team', 33, {expand: true}, 'user', 11]);
     *
     * // you can collapse static segments like this (this works only with the first passed-in value):
     * router.createUrlTree(['/team/33/user', userId]);
     *
     * // If the first segment can contain slashes, and you do not want the router to split it, you
     * // can do the following:
     *
     * router.createUrlTree([{segmentPath: '/one/two'}]);
     *
     * // create /team/33/(user/11//right:chat)
     * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: 'chat'}}]);
     *
     * // remove the right secondary node
     * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: null}}]);
     *
     * // assuming the current url is `/team/33/user/11` and the route points to `user/11`
     *
     * // navigate to /team/33/user/11/details
     * router.createUrlTree(['details'], {relativeTo: route});
     *
     * // navigate to /team/33/user/22
     * router.createUrlTree(['../22'], {relativeTo: route});
     *
     * // navigate to /team/44/user/22
     * router.createUrlTree(['../../team/44/user/22'], {relativeTo: route});
     * ```
     * @param {?} commands
     * @param {?=} navigationExtras
     * @return {?}
     */
    Router.prototype.createUrlTree = function (commands, navigationExtras) {
        if (navigationExtras === void 0) { navigationExtras = {}; }
        var relativeTo = navigationExtras.relativeTo, queryParams = navigationExtras.queryParams, fragment = navigationExtras.fragment, preserveQueryParams = navigationExtras.preserveQueryParams, queryParamsHandling = navigationExtras.queryParamsHandling, preserveFragment = navigationExtras.preserveFragment;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["isDevMode"])() && preserveQueryParams && (console) && (console.warn)) {
            console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
        }
        var /** @type {?} */ a = relativeTo || this.routerState.root;
        var /** @type {?} */ f = preserveFragment ? this.currentUrlTree.fragment : fragment;
        var /** @type {?} */ q = null;
        if (queryParamsHandling) {
            switch (queryParamsHandling) {
                case 'merge':
                    q = Object.assign({}, this.currentUrlTree.queryParams, queryParams);
                    break;
                case 'preserve':
                    q = this.currentUrlTree.queryParams;
                    break;
                default:
                    q = queryParams || null;
            }
        }
        else {
            q = preserveQueryParams ? this.currentUrlTree.queryParams : queryParams || null;
        }
        return createUrlTree(a, this.currentUrlTree, commands, /** @type {?} */ ((q)), /** @type {?} */ ((f)));
    };
    /**
     * Navigate based on the provided url. This navigation is always absolute.
     *
     * Returns a promise that:
     * - resolves to 'true' when navigation succeeds,
     * - resolves to 'false' when navigation fails,
     * - is rejected when an error happens.
     *
     * ### Usage
     *
     * ```
     * router.navigateByUrl("/team/33/user/11");
     *
     * // Navigate without updating the URL
     * router.navigateByUrl("/team/33/user/11", { skipLocationChange: true });
     * ```
     *
     * In opposite to `navigate`, `navigateByUrl` takes a whole URL
     * and does not apply any delta to the current one.
     * @param {?} url
     * @param {?=} extras
     * @return {?}
     */
    Router.prototype.navigateByUrl = function (url, extras) {
        if (extras === void 0) { extras = { skipLocationChange: false }; }
        var /** @type {?} */ urlTree = url instanceof UrlTree ? url : this.parseUrl(url);
        var /** @type {?} */ mergedTree = this.urlHandlingStrategy.merge(urlTree, this.rawUrlTree);
        return this.scheduleNavigation(mergedTree, 'imperative', extras);
    };
    /**
     * Navigate based on the provided array of commands and a starting point.
     * If no starting route is provided, the navigation is absolute.
     *
     * Returns a promise that:
     * - resolves to 'true' when navigation succeeds,
     * - resolves to 'false' when navigation fails,
     * - is rejected when an error happens.
     *
     * ### Usage
     *
     * ```
     * router.navigate(['team', 33, 'user', 11], {relativeTo: route});
     *
     * // Navigate without updating the URL
     * router.navigate(['team', 33, 'user', 11], {relativeTo: route, skipLocationChange: true});
     * ```
     *
     * In opposite to `navigateByUrl`, `navigate` always takes a delta that is applied to the current
     * URL.
     * @param {?} commands
     * @param {?=} extras
     * @return {?}
     */
    Router.prototype.navigate = function (commands, extras) {
        if (extras === void 0) { extras = { skipLocationChange: false }; }
        validateCommands(commands);
        if (typeof extras.queryParams === 'object' && extras.queryParams !== null) {
            extras.queryParams = this.removeEmptyProps(extras.queryParams);
        }
        return this.navigateByUrl(this.createUrlTree(commands, extras), extras);
    };
    /**
     * Serializes a {\@link UrlTree} into a string
     * @param {?} url
     * @return {?}
     */
    Router.prototype.serializeUrl = function (url) { return this.urlSerializer.serialize(url); };
    /**
     * Parses a string into a {\@link UrlTree}
     * @param {?} url
     * @return {?}
     */
    Router.prototype.parseUrl = function (url) { return this.urlSerializer.parse(url); };
    /**
     * Returns whether the url is activated
     * @param {?} url
     * @param {?} exact
     * @return {?}
     */
    Router.prototype.isActive = function (url, exact) {
        if (url instanceof UrlTree) {
            return containsTree(this.currentUrlTree, url, exact);
        }
        var /** @type {?} */ urlTree = this.urlSerializer.parse(url);
        return containsTree(this.currentUrlTree, urlTree, exact);
    };
    /**
     * @param {?} params
     * @return {?}
     */
    Router.prototype.removeEmptyProps = function (params) {
        return Object.keys(params).reduce(function (result, key) {
            var /** @type {?} */ value = params[key];
            if (value !== null && value !== undefined) {
                result[key] = value;
            }
            return result;
        }, {});
    };
    /**
     * @return {?}
     */
    Router.prototype.processNavigations = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_concatMap__["concatMap"]
            .call(this.navigations, function (nav) {
            if (nav) {
                _this.executeScheduledNavigation(nav);
                // a failed navigation should not stop the router from processing
                // further navigations => the catch
                return nav.promise.catch(function () { });
            }
            else {
                return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])(null));
            }
        })
            .subscribe(function () { });
    };
    /**
     * @param {?} rawUrl
     * @param {?} source
     * @param {?} extras
     * @return {?}
     */
    Router.prototype.scheduleNavigation = function (rawUrl, source, extras) {
        var /** @type {?} */ lastNavigation = this.navigations.value;
        // If the user triggers a navigation imperatively (e.g., by using navigateByUrl),
        // and that navigation results in 'replaceState' that leads to the same URL,
        // we should skip those.
        if (lastNavigation && source !== 'imperative' && lastNavigation.source === 'imperative' &&
            lastNavigation.rawUrl.toString() === rawUrl.toString()) {
            return Promise.resolve(true); // return value is not used
        }
        // Because of a bug in IE and Edge, the location class fires two events (popstate and
        // hashchange) every single time. The second one should be ignored. Otherwise, the URL will
        // flicker.
        if (lastNavigation && source == 'hashchange' && lastNavigation.source === 'popstate' &&
            lastNavigation.rawUrl.toString() === rawUrl.toString()) {
            return Promise.resolve(true); // return value is not used
        }
        var /** @type {?} */ resolve = null;
        var /** @type {?} */ reject = null;
        var /** @type {?} */ promise = new Promise(function (res, rej) {
            resolve = res;
            reject = rej;
        });
        var /** @type {?} */ id = ++this.navigationId;
        this.navigations.next({ id: id, source: source, rawUrl: rawUrl, extras: extras, resolve: resolve, reject: reject, promise: promise });
        // Make sure that the error is propagated even though `processNavigations` catch
        // handler does not rethrow
        return promise.catch(function (e) { return Promise.reject(e); });
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    Router.prototype.executeScheduledNavigation = function (_a) {
        var _this = this;
        var id = _a.id, rawUrl = _a.rawUrl, extras = _a.extras, resolve = _a.resolve, reject = _a.reject;
        var /** @type {?} */ url = this.urlHandlingStrategy.extract(rawUrl);
        var /** @type {?} */ urlTransition = !this.navigated || url.toString() !== this.currentUrlTree.toString();
        if (urlTransition && this.urlHandlingStrategy.shouldProcessUrl(rawUrl)) {
            this.routerEvents.next(new NavigationStart(id, this.serializeUrl(url)));
            Promise.resolve()
                .then(function (_) { return _this.runNavigate(url, rawUrl, !!extras.skipLocationChange, !!extras.replaceUrl, id, null); })
                .then(resolve, reject);
            // we cannot process the current URL, but we could process the previous one =>
            // we need to do some cleanup
        }
        else if (urlTransition && this.rawUrlTree &&
            this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) {
            this.routerEvents.next(new NavigationStart(id, this.serializeUrl(url)));
            Promise.resolve()
                .then(function (_) { return _this.runNavigate(url, rawUrl, false, false, id, createEmptyState(url, _this.rootComponentType).snapshot); })
                .then(resolve, reject);
        }
        else {
            this.rawUrlTree = rawUrl;
            resolve(null);
        }
    };
    /**
     * @param {?} url
     * @param {?} rawUrl
     * @param {?} shouldPreventPushState
     * @param {?} shouldReplaceUrl
     * @param {?} id
     * @param {?} precreatedState
     * @return {?}
     */
    Router.prototype.runNavigate = function (url, rawUrl, shouldPreventPushState, shouldReplaceUrl, id, precreatedState) {
        var _this = this;
        if (id !== this.navigationId) {
            this.location.go(this.urlSerializer.serialize(this.currentUrlTree));
            this.routerEvents.next(new NavigationCancel(id, this.serializeUrl(url), "Navigation ID " + id + " is not equal to the current navigation id " + this.navigationId));
            return Promise.resolve(false);
        }
        return new Promise(function (resolvePromise, rejectPromise) {
            // create an observable of the url and route state snapshot
            // this operation do not result in any side effects
            var /** @type {?} */ urlAndSnapshot$;
            if (!precreatedState) {
                var /** @type {?} */ moduleInjector = _this.ngModule.injector;
                var /** @type {?} */ redirectsApplied$ = applyRedirects(moduleInjector, _this.configLoader, _this.urlSerializer, url, _this.config);
                urlAndSnapshot$ = __WEBPACK_IMPORTED_MODULE_12_rxjs_operator_mergeMap__["mergeMap"].call(redirectsApplied$, function (appliedUrl) {
                    return __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_map__["map"].call(recognize(_this.rootComponentType, _this.config, appliedUrl, _this.serializeUrl(appliedUrl)), function (snapshot) {
                        _this.routerEvents.next(new RoutesRecognized(id, _this.serializeUrl(url), _this.serializeUrl(appliedUrl), snapshot));
                        return { appliedUrl: appliedUrl, snapshot: snapshot };
                    });
                });
            }
            else {
                urlAndSnapshot$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])({ appliedUrl: url, snapshot: precreatedState });
            }
            var /** @type {?} */ beforePreactivationDone$ = __WEBPACK_IMPORTED_MODULE_12_rxjs_operator_mergeMap__["mergeMap"].call(urlAndSnapshot$, function (p) {
                return __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_map__["map"].call(_this.hooks.beforePreactivation(p.snapshot), function () { return p; });
            });
            // run preactivation: guards and data resolvers
            var /** @type {?} */ preActivation;
            var /** @type {?} */ preactivationTraverse$ = __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_map__["map"].call(beforePreactivationDone$, function (_a) {
                var appliedUrl = _a.appliedUrl, snapshot = _a.snapshot;
                var /** @type {?} */ moduleInjector = _this.ngModule.injector;
                preActivation =
                    new PreActivation(snapshot, _this.currentRouterState.snapshot, moduleInjector);
                preActivation.traverse(_this.rootContexts);
                return { appliedUrl: appliedUrl, snapshot: snapshot };
            });
            var /** @type {?} */ preactivationCheckGuards$ = __WEBPACK_IMPORTED_MODULE_12_rxjs_operator_mergeMap__["mergeMap"].call(preactivationTraverse$, function (_a) {
                var appliedUrl = _a.appliedUrl, snapshot = _a.snapshot;
                if (_this.navigationId !== id)
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])(false);
                _this.triggerEvent(new GuardsCheckStart(id, _this.serializeUrl(url), appliedUrl, snapshot));
                return __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_map__["map"].call(preActivation.checkGuards(), function (shouldActivate) {
                    _this.triggerEvent(new GuardsCheckEnd(id, _this.serializeUrl(url), appliedUrl, snapshot, shouldActivate));
                    return { appliedUrl: appliedUrl, snapshot: snapshot, shouldActivate: shouldActivate };
                });
            });
            var /** @type {?} */ preactivationResolveData$ = __WEBPACK_IMPORTED_MODULE_12_rxjs_operator_mergeMap__["mergeMap"].call(preactivationCheckGuards$, function (p) {
                if (_this.navigationId !== id)
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])(false);
                if (p.shouldActivate && preActivation.isActivating()) {
                    _this.triggerEvent(new ResolveStart(id, _this.serializeUrl(url), p.appliedUrl, p.snapshot));
                    return __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_map__["map"].call(preActivation.resolveData(), function () {
                        _this.triggerEvent(new ResolveEnd(id, _this.serializeUrl(url), p.appliedUrl, p.snapshot));
                        return p;
                    });
                }
                else {
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])(p);
                }
            });
            var /** @type {?} */ preactivationDone$ = __WEBPACK_IMPORTED_MODULE_12_rxjs_operator_mergeMap__["mergeMap"].call(preactivationResolveData$, function (p) {
                return __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_map__["map"].call(_this.hooks.afterPreactivation(p.snapshot), function () { return p; });
            });
            // create router state
            // this operation has side effects => route state is being affected
            var /** @type {?} */ routerState$ = __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_map__["map"].call(preactivationDone$, function (_a) {
                var appliedUrl = _a.appliedUrl, snapshot = _a.snapshot, shouldActivate = _a.shouldActivate;
                if (shouldActivate) {
                    var /** @type {?} */ state = createRouterState(_this.routeReuseStrategy, snapshot, _this.currentRouterState);
                    return { appliedUrl: appliedUrl, state: state, shouldActivate: shouldActivate };
                }
                else {
                    return { appliedUrl: appliedUrl, state: null, shouldActivate: shouldActivate };
                }
            });
            // applied the new router state
            // this operation has side effects
            var /** @type {?} */ navigationIsSuccessful;
            var /** @type {?} */ storedState = _this.currentRouterState;
            var /** @type {?} */ storedUrl = _this.currentUrlTree;
            routerState$
                .forEach(function (_a) {
                var appliedUrl = _a.appliedUrl, state = _a.state, shouldActivate = _a.shouldActivate;
                if (!shouldActivate || id !== _this.navigationId) {
                    navigationIsSuccessful = false;
                    return;
                }
                _this.currentUrlTree = appliedUrl;
                _this.rawUrlTree = _this.urlHandlingStrategy.merge(_this.currentUrlTree, rawUrl);
                _this.currentRouterState = state;
                if (!shouldPreventPushState) {
                    var /** @type {?} */ path = _this.urlSerializer.serialize(_this.rawUrlTree);
                    if (_this.location.isCurrentPathEqualTo(path) || shouldReplaceUrl) {
                        _this.location.replaceState(path);
                    }
                    else {
                        _this.location.go(path);
                    }
                }
                new ActivateRoutes(_this.routeReuseStrategy, state, storedState)
                    .activate(_this.rootContexts);
                navigationIsSuccessful = true;
            })
                .then(function () {
                if (navigationIsSuccessful) {
                    _this.navigated = true;
                    _this.routerEvents.next(new NavigationEnd(id, _this.serializeUrl(url), _this.serializeUrl(_this.currentUrlTree)));
                    resolvePromise(true);
                }
                else {
                    _this.resetUrlToCurrentUrlTree();
                    _this.routerEvents.next(new NavigationCancel(id, _this.serializeUrl(url), ''));
                    resolvePromise(false);
                }
            }, function (e) {
                if (isNavigationCancelingError(e)) {
                    _this.resetUrlToCurrentUrlTree();
                    _this.navigated = true;
                    _this.routerEvents.next(new NavigationCancel(id, _this.serializeUrl(url), e.message));
                    resolvePromise(false);
                }
                else {
                    _this.routerEvents.next(new NavigationError(id, _this.serializeUrl(url), e));
                    try {
                        resolvePromise(_this.errorHandler(e));
                    }
                    catch (ee) {
                        rejectPromise(ee);
                    }
                }
                _this.currentRouterState = storedState;
                _this.currentUrlTree = storedUrl;
                _this.rawUrlTree = _this.urlHandlingStrategy.merge(_this.currentUrlTree, rawUrl);
                _this.location.replaceState(_this.serializeUrl(_this.rawUrlTree));
            });
        });
    };
    /**
     * @return {?}
     */
    Router.prototype.resetUrlToCurrentUrlTree = function () {
        var /** @type {?} */ path = this.urlSerializer.serialize(this.rawUrlTree);
        this.location.replaceState(path);
    };
    return Router;
}());
var CanActivate = (function () {
    /**
     * @param {?} path
     */
    function CanActivate(path) {
        this.path = path;
    }
    Object.defineProperty(CanActivate.prototype, "route", {
        /**
         * @return {?}
         */
        get: function () { return this.path[this.path.length - 1]; },
        enumerable: true,
        configurable: true
    });
    return CanActivate;
}());
var CanDeactivate = (function () {
    /**
     * @param {?} component
     * @param {?} route
     */
    function CanDeactivate(component, route) {
        this.component = component;
        this.route = route;
    }
    return CanDeactivate;
}());
var PreActivation = (function () {
    /**
     * @param {?} future
     * @param {?} curr
     * @param {?} moduleInjector
     */
    function PreActivation(future, curr, moduleInjector) {
        this.future = future;
        this.curr = curr;
        this.moduleInjector = moduleInjector;
        this.canActivateChecks = [];
        this.canDeactivateChecks = [];
    }
    /**
     * @param {?} parentContexts
     * @return {?}
     */
    PreActivation.prototype.traverse = function (parentContexts) {
        var /** @type {?} */ futureRoot = this.future._root;
        var /** @type {?} */ currRoot = this.curr ? this.curr._root : null;
        this.traverseChildRoutes(futureRoot, currRoot, parentContexts, [futureRoot.value]);
    };
    /**
     * @return {?}
     */
    PreActivation.prototype.checkGuards = function () {
        var _this = this;
        if (!this.isDeactivating() && !this.isActivating()) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])(true);
        }
        var /** @type {?} */ canDeactivate$ = this.runCanDeactivateChecks();
        return __WEBPACK_IMPORTED_MODULE_12_rxjs_operator_mergeMap__["mergeMap"].call(canDeactivate$, function (canDeactivate) { return canDeactivate ? _this.runCanActivateChecks() : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])(false); });
    };
    /**
     * @return {?}
     */
    PreActivation.prototype.resolveData = function () {
        var _this = this;
        if (!this.isActivating())
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])(null);
        var /** @type {?} */ checks$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_from__["from"])(this.canActivateChecks);
        var /** @type {?} */ runningChecks$ = __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_concatMap__["concatMap"].call(checks$, function (check) { return _this.runResolve(check.route); });
        return __WEBPACK_IMPORTED_MODULE_13_rxjs_operator_reduce__["reduce"].call(runningChecks$, function (_, __) { return _; });
    };
    /**
     * @return {?}
     */
    PreActivation.prototype.isDeactivating = function () { return this.canDeactivateChecks.length !== 0; };
    /**
     * @return {?}
     */
    PreActivation.prototype.isActivating = function () { return this.canActivateChecks.length !== 0; };
    /**
     * @param {?} futureNode
     * @param {?} currNode
     * @param {?} contexts
     * @param {?} futurePath
     * @return {?}
     */
    PreActivation.prototype.traverseChildRoutes = function (futureNode, currNode, contexts, futurePath) {
        var _this = this;
        var /** @type {?} */ prevChildren = nodeChildrenAsMap(currNode);
        // Process the children of the future route
        futureNode.children.forEach(function (c) {
            _this.traverseRoutes(c, prevChildren[c.value.outlet], contexts, futurePath.concat([c.value]));
            delete prevChildren[c.value.outlet];
        });
        // Process any children left from the current route (not active for the future route)
        forEach(prevChildren, function (v, k) { return _this.deactivateRouteAndItsChildren(v, /** @type {?} */ ((contexts)).getContext(k)); });
    };
    /**
     * @param {?} futureNode
     * @param {?} currNode
     * @param {?} parentContexts
     * @param {?} futurePath
     * @return {?}
     */
    PreActivation.prototype.traverseRoutes = function (futureNode, currNode, parentContexts, futurePath) {
        var /** @type {?} */ future = futureNode.value;
        var /** @type {?} */ curr = currNode ? currNode.value : null;
        var /** @type {?} */ context = parentContexts ? parentContexts.getContext(futureNode.value.outlet) : null;
        // reusing the node
        if (curr && future._routeConfig === curr._routeConfig) {
            var /** @type {?} */ shouldRunGuardsAndResolvers = this.shouldRunGuardsAndResolvers(curr, future, /** @type {?} */ ((future._routeConfig)).runGuardsAndResolvers);
            if (shouldRunGuardsAndResolvers) {
                this.canActivateChecks.push(new CanActivate(futurePath));
            }
            else {
                // we need to set the data
                future.data = curr.data;
                future._resolvedData = curr._resolvedData;
            }
            // If we have a component, we need to go through an outlet.
            if (future.component) {
                this.traverseChildRoutes(futureNode, currNode, context ? context.children : null, futurePath);
                // if we have a componentless route, we recurse but keep the same outlet map.
            }
            else {
                this.traverseChildRoutes(futureNode, currNode, parentContexts, futurePath);
            }
            if (shouldRunGuardsAndResolvers) {
                var /** @type {?} */ outlet = ((((context)).outlet));
                this.canDeactivateChecks.push(new CanDeactivate(outlet.component, curr));
            }
        }
        else {
            if (curr) {
                this.deactivateRouteAndItsChildren(currNode, context);
            }
            this.canActivateChecks.push(new CanActivate(futurePath));
            // If we have a component, we need to go through an outlet.
            if (future.component) {
                this.traverseChildRoutes(futureNode, null, context ? context.children : null, futurePath);
                // if we have a componentless route, we recurse but keep the same outlet map.
            }
            else {
                this.traverseChildRoutes(futureNode, null, parentContexts, futurePath);
            }
        }
    };
    /**
     * @param {?} curr
     * @param {?} future
     * @param {?} mode
     * @return {?}
     */
    PreActivation.prototype.shouldRunGuardsAndResolvers = function (curr, future, mode) {
        switch (mode) {
            case 'always':
                return true;
            case 'paramsOrQueryParamsChange':
                return !equalParamsAndUrlSegments(curr, future) ||
                    !shallowEqual(curr.queryParams, future.queryParams);
            case 'paramsChange':
            default:
                return !equalParamsAndUrlSegments(curr, future);
        }
    };
    /**
     * @param {?} route
     * @param {?} context
     * @return {?}
     */
    PreActivation.prototype.deactivateRouteAndItsChildren = function (route, context) {
        var _this = this;
        var /** @type {?} */ children = nodeChildrenAsMap(route);
        var /** @type {?} */ r = route.value;
        forEach(children, function (node, childName) {
            if (!r.component) {
                _this.deactivateRouteAndItsChildren(node, context);
            }
            else if (context) {
                _this.deactivateRouteAndItsChildren(node, context.children.getContext(childName));
            }
            else {
                _this.deactivateRouteAndItsChildren(node, null);
            }
        });
        if (!r.component) {
            this.canDeactivateChecks.push(new CanDeactivate(null, r));
        }
        else if (context && context.outlet && context.outlet.isActivated) {
            this.canDeactivateChecks.push(new CanDeactivate(context.outlet.component, r));
        }
        else {
            this.canDeactivateChecks.push(new CanDeactivate(null, r));
        }
    };
    /**
     * @return {?}
     */
    PreActivation.prototype.runCanDeactivateChecks = function () {
        var _this = this;
        var /** @type {?} */ checks$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_from__["from"])(this.canDeactivateChecks);
        var /** @type {?} */ runningChecks$ = __WEBPACK_IMPORTED_MODULE_12_rxjs_operator_mergeMap__["mergeMap"].call(checks$, function (check) { return _this.runCanDeactivate(check.component, check.route); });
        return __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_every__["every"].call(runningChecks$, function (result) { return result === true; });
    };
    /**
     * @return {?}
     */
    PreActivation.prototype.runCanActivateChecks = function () {
        var _this = this;
        var /** @type {?} */ checks$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_from__["from"])(this.canActivateChecks);
        var /** @type {?} */ runningChecks$ = __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_concatMap__["concatMap"].call(checks$, function (check) { return andObservables(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_from__["from"])([_this.runCanActivateChild(check.path), _this.runCanActivate(check.route)])); });
        return __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_every__["every"].call(runningChecks$, function (result) { return result === true; });
    };
    /**
     * @param {?} future
     * @return {?}
     */
    PreActivation.prototype.runCanActivate = function (future) {
        var _this = this;
        var /** @type {?} */ canActivate = future._routeConfig ? future._routeConfig.canActivate : null;
        if (!canActivate || canActivate.length === 0)
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])(true);
        var /** @type {?} */ obs = __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_map__["map"].call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_from__["from"])(canActivate), function (c) {
            var /** @type {?} */ guard = _this.getToken(c, future);
            var /** @type {?} */ observable;
            if (guard.canActivate) {
                observable = wrapIntoObservable(guard.canActivate(future, _this.future));
            }
            else {
                observable = wrapIntoObservable(guard(future, _this.future));
            }
            return __WEBPACK_IMPORTED_MODULE_9_rxjs_operator_first__["first"].call(observable);
        });
        return andObservables(obs);
    };
    /**
     * @param {?} path
     * @return {?}
     */
    PreActivation.prototype.runCanActivateChild = function (path) {
        var _this = this;
        var /** @type {?} */ future = path[path.length - 1];
        var /** @type {?} */ canActivateChildGuards = path.slice(0, path.length - 1)
            .reverse()
            .map(function (p) { return _this.extractCanActivateChild(p); })
            .filter(function (_) { return _ !== null; });
        return andObservables(__WEBPACK_IMPORTED_MODULE_11_rxjs_operator_map__["map"].call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_from__["from"])(canActivateChildGuards), function (d) {
            var /** @type {?} */ obs = __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_map__["map"].call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_from__["from"])(d.guards), function (c) {
                var /** @type {?} */ guard = _this.getToken(c, d.node);
                var /** @type {?} */ observable;
                if (guard.canActivateChild) {
                    observable = wrapIntoObservable(guard.canActivateChild(future, _this.future));
                }
                else {
                    observable = wrapIntoObservable(guard(future, _this.future));
                }
                return __WEBPACK_IMPORTED_MODULE_9_rxjs_operator_first__["first"].call(observable);
            });
            return andObservables(obs);
        }));
    };
    /**
     * @param {?} p
     * @return {?}
     */
    PreActivation.prototype.extractCanActivateChild = function (p) {
        var /** @type {?} */ canActivateChild = p._routeConfig ? p._routeConfig.canActivateChild : null;
        if (!canActivateChild || canActivateChild.length === 0)
            return null;
        return { node: p, guards: canActivateChild };
    };
    /**
     * @param {?} component
     * @param {?} curr
     * @return {?}
     */
    PreActivation.prototype.runCanDeactivate = function (component, curr) {
        var _this = this;
        var /** @type {?} */ canDeactivate = curr && curr._routeConfig ? curr._routeConfig.canDeactivate : null;
        if (!canDeactivate || canDeactivate.length === 0)
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])(true);
        var /** @type {?} */ canDeactivate$ = __WEBPACK_IMPORTED_MODULE_12_rxjs_operator_mergeMap__["mergeMap"].call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_from__["from"])(canDeactivate), function (c) {
            var /** @type {?} */ guard = _this.getToken(c, curr);
            var /** @type {?} */ observable;
            if (guard.canDeactivate) {
                observable =
                    wrapIntoObservable(guard.canDeactivate(component, curr, _this.curr, _this.future));
            }
            else {
                observable = wrapIntoObservable(guard(component, curr, _this.curr, _this.future));
            }
            return __WEBPACK_IMPORTED_MODULE_9_rxjs_operator_first__["first"].call(observable);
        });
        return __WEBPACK_IMPORTED_MODULE_8_rxjs_operator_every__["every"].call(canDeactivate$, function (result) { return result === true; });
    };
    /**
     * @param {?} future
     * @return {?}
     */
    PreActivation.prototype.runResolve = function (future) {
        var /** @type {?} */ resolve = future._resolve;
        return __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_map__["map"].call(this.resolveNode(resolve, future), function (resolvedData) {
            future._resolvedData = resolvedData;
            future.data = Object.assign({}, future.data, inheritedParamsDataResolve(future).resolve);
            return null;
        });
    };
    /**
     * @param {?} resolve
     * @param {?} future
     * @return {?}
     */
    PreActivation.prototype.resolveNode = function (resolve, future) {
        var _this = this;
        var /** @type {?} */ keys = Object.keys(resolve);
        if (keys.length === 0) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])({});
        }
        if (keys.length === 1) {
            var /** @type {?} */ key_1 = keys[0];
            return __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_map__["map"].call(this.getResolver(resolve[key_1], future), function (value) {
                return _a = {}, _a[key_1] = value, _a;
                var _a;
            });
        }
        var /** @type {?} */ data = {};
        var /** @type {?} */ runningResolvers$ = __WEBPACK_IMPORTED_MODULE_12_rxjs_operator_mergeMap__["mergeMap"].call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_from__["from"])(keys), function (key) {
            return __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_map__["map"].call(_this.getResolver(resolve[key], future), function (value) {
                data[key] = value;
                return value;
            });
        });
        return __WEBPACK_IMPORTED_MODULE_11_rxjs_operator_map__["map"].call(__WEBPACK_IMPORTED_MODULE_10_rxjs_operator_last__["last"].call(runningResolvers$), function () { return data; });
    };
    /**
     * @param {?} injectionToken
     * @param {?} future
     * @return {?}
     */
    PreActivation.prototype.getResolver = function (injectionToken, future) {
        var /** @type {?} */ resolver = this.getToken(injectionToken, future);
        return resolver.resolve ? wrapIntoObservable(resolver.resolve(future, this.future)) :
            wrapIntoObservable(resolver(future, this.future));
    };
    /**
     * @param {?} token
     * @param {?} snapshot
     * @return {?}
     */
    PreActivation.prototype.getToken = function (token, snapshot) {
        var /** @type {?} */ config = closestLoadedConfig(snapshot);
        var /** @type {?} */ injector = config ? config.module.injector : this.moduleInjector;
        return injector.get(token);
    };
    return PreActivation;
}());
var ActivateRoutes = (function () {
    /**
     * @param {?} routeReuseStrategy
     * @param {?} futureState
     * @param {?} currState
     */
    function ActivateRoutes(routeReuseStrategy, futureState, currState) {
        this.routeReuseStrategy = routeReuseStrategy;
        this.futureState = futureState;
        this.currState = currState;
    }
    /**
     * @param {?} parentContexts
     * @return {?}
     */
    ActivateRoutes.prototype.activate = function (parentContexts) {
        var /** @type {?} */ futureRoot = this.futureState._root;
        var /** @type {?} */ currRoot = this.currState ? this.currState._root : null;
        this.deactivateChildRoutes(futureRoot, currRoot, parentContexts);
        advanceActivatedRoute(this.futureState.root);
        this.activateChildRoutes(futureRoot, currRoot, parentContexts);
    };
    /**
     * @param {?} futureNode
     * @param {?} currNode
     * @param {?} contexts
     * @return {?}
     */
    ActivateRoutes.prototype.deactivateChildRoutes = function (futureNode, currNode, contexts) {
        var _this = this;
        var /** @type {?} */ children = nodeChildrenAsMap(currNode);
        // Recurse on the routes active in the future state to de-activate deeper children
        futureNode.children.forEach(function (futureChild) {
            var /** @type {?} */ childOutletName = futureChild.value.outlet;
            _this.deactivateRoutes(futureChild, children[childOutletName], contexts);
            delete children[childOutletName];
        });
        // De-activate the routes that will not be re-used
        forEach(children, function (v, childName) {
            _this.deactivateRouteAndItsChildren(v, contexts);
        });
    };
    /**
     * @param {?} futureNode
     * @param {?} currNode
     * @param {?} parentContext
     * @return {?}
     */
    ActivateRoutes.prototype.deactivateRoutes = function (futureNode, currNode, parentContext) {
        var /** @type {?} */ future = futureNode.value;
        var /** @type {?} */ curr = currNode ? currNode.value : null;
        if (future === curr) {
            // Reusing the node, check to see if the children need to be de-activated
            if (future.component) {
                // If we have a normal route, we need to go through an outlet.
                var /** @type {?} */ context = parentContext.getContext(future.outlet);
                if (context) {
                    this.deactivateChildRoutes(futureNode, currNode, context.children);
                }
            }
            else {
                // if we have a componentless route, we recurse but keep the same outlet map.
                this.deactivateChildRoutes(futureNode, currNode, parentContext);
            }
        }
        else {
            if (curr) {
                // Deactivate the current route which will not be re-used
                this.deactivateRouteAndItsChildren(currNode, parentContext);
            }
        }
    };
    /**
     * @param {?} route
     * @param {?} parentContexts
     * @return {?}
     */
    ActivateRoutes.prototype.deactivateRouteAndItsChildren = function (route, parentContexts) {
        if (this.routeReuseStrategy.shouldDetach(route.value.snapshot)) {
            this.detachAndStoreRouteSubtree(route, parentContexts);
        }
        else {
            this.deactivateRouteAndOutlet(route, parentContexts);
        }
    };
    /**
     * @param {?} route
     * @param {?} parentContexts
     * @return {?}
     */
    ActivateRoutes.prototype.detachAndStoreRouteSubtree = function (route, parentContexts) {
        var /** @type {?} */ context = parentContexts.getContext(route.value.outlet);
        if (context && context.outlet) {
            var /** @type {?} */ componentRef = context.outlet.detach();
            var /** @type {?} */ contexts = context.children.onOutletDeactivated();
            this.routeReuseStrategy.store(route.value.snapshot, { componentRef: componentRef, route: route, contexts: contexts });
        }
    };
    /**
     * @param {?} route
     * @param {?} parentContexts
     * @return {?}
     */
    ActivateRoutes.prototype.deactivateRouteAndOutlet = function (route, parentContexts) {
        var _this = this;
        var /** @type {?} */ context = parentContexts.getContext(route.value.outlet);
        if (context) {
            var /** @type {?} */ children = nodeChildrenAsMap(route);
            var /** @type {?} */ contexts_1 = route.value.component ? context.children : parentContexts;
            forEach(children, function (v, k) { return _this.deactivateRouteAndItsChildren(v, contexts_1); });
            if (context.outlet) {
                // Destroy the component
                context.outlet.deactivate();
                // Destroy the contexts for all the outlets that were in the component
                context.children.onOutletDeactivated();
            }
        }
    };
    /**
     * @param {?} futureNode
     * @param {?} currNode
     * @param {?} contexts
     * @return {?}
     */
    ActivateRoutes.prototype.activateChildRoutes = function (futureNode, currNode, contexts) {
        var _this = this;
        var /** @type {?} */ children = nodeChildrenAsMap(currNode);
        futureNode.children.forEach(function (c) { _this.activateRoutes(c, children[c.value.outlet], contexts); });
    };
    /**
     * @param {?} futureNode
     * @param {?} currNode
     * @param {?} parentContexts
     * @return {?}
     */
    ActivateRoutes.prototype.activateRoutes = function (futureNode, currNode, parentContexts) {
        var /** @type {?} */ future = futureNode.value;
        var /** @type {?} */ curr = currNode ? currNode.value : null;
        advanceActivatedRoute(future);
        // reusing the node
        if (future === curr) {
            if (future.component) {
                // If we have a normal route, we need to go through an outlet.
                var /** @type {?} */ context = parentContexts.getOrCreateContext(future.outlet);
                this.activateChildRoutes(futureNode, currNode, context.children);
            }
            else {
                // if we have a componentless route, we recurse but keep the same outlet map.
                this.activateChildRoutes(futureNode, currNode, parentContexts);
            }
        }
        else {
            if (future.component) {
                // if we have a normal route, we need to place the component into the outlet and recurse.
                var /** @type {?} */ context = parentContexts.getOrCreateContext(future.outlet);
                if (this.routeReuseStrategy.shouldAttach(future.snapshot)) {
                    var /** @type {?} */ stored = ((this.routeReuseStrategy.retrieve(future.snapshot)));
                    this.routeReuseStrategy.store(future.snapshot, null);
                    context.children.onOutletReAttached(stored.contexts);
                    context.attachRef = stored.componentRef;
                    context.route = stored.route.value;
                    if (context.outlet) {
                        // Attach right away when the outlet has already been instantiated
                        // Otherwise attach from `RouterOutlet.ngOnInit` when it is instantiated
                        context.outlet.attach(stored.componentRef, stored.route.value);
                    }
                    advanceActivatedRouteNodeAndItsChildren(stored.route);
                }
                else {
                    var /** @type {?} */ config = parentLoadedConfig(future.snapshot);
                    var /** @type {?} */ cmpFactoryResolver = config ? config.module.componentFactoryResolver : null;
                    context.route = future;
                    context.resolver = cmpFactoryResolver;
                    if (context.outlet) {
                        // Activate the outlet when it has already been instantiated
                        // Otherwise it will get activated from its `ngOnInit` when instantiated
                        context.outlet.activateWith(future, cmpFactoryResolver);
                    }
                    this.activateChildRoutes(futureNode, null, context.children);
                }
            }
            else {
                // if we have a componentless route, we recurse but keep the same outlet map.
                this.activateChildRoutes(futureNode, null, parentContexts);
            }
        }
    };
    return ActivateRoutes;
}());
/**
 * @param {?} node
 * @return {?}
 */
function advanceActivatedRouteNodeAndItsChildren(node) {
    advanceActivatedRoute(node.value);
    node.children.forEach(advanceActivatedRouteNodeAndItsChildren);
}
/**
 * @param {?} snapshot
 * @return {?}
 */
function parentLoadedConfig(snapshot) {
    for (var /** @type {?} */ s = snapshot.parent; s; s = s.parent) {
        var /** @type {?} */ route = s._routeConfig;
        if (route && route._loadedConfig)
            return route._loadedConfig;
        if (route && route.component)
            return null;
    }
    return null;
}
/**
 * @param {?} snapshot
 * @return {?}
 */
function closestLoadedConfig(snapshot) {
    if (!snapshot)
        return null;
    for (var /** @type {?} */ s = snapshot.parent; s; s = s.parent) {
        var /** @type {?} */ route = s._routeConfig;
        if (route && route._loadedConfig)
            return route._loadedConfig;
    }
    return null;
}
/**
 * @template T
 * @param {?} node
 * @return {?}
 */
function nodeChildrenAsMap(node) {
    var /** @type {?} */ map$$1 = {};
    if (node) {
        node.children.forEach(function (child) { return map$$1[child.value.outlet] = child; });
    }
    return map$$1;
}
/**
 * @param {?} commands
 * @return {?}
 */
function validateCommands(commands) {
    for (var /** @type {?} */ i = 0; i < commands.length; i++) {
        var /** @type {?} */ cmd = commands[i];
        if (cmd == null) {
            throw new Error("The requested path contains " + cmd + " segment at index " + i);
        }
    }
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@whatItDoes Lets you link to specific parts of your app.
 *
 * \@howToUse
 *
 * Consider the following route configuration:
 * `[{ path: 'user/:name', component: UserCmp }]`
 *
 * When linking to this `user/:name` route, you can write:
 * `<a routerLink='/user/bob'>link to user component</a>`
 *
 * \@description
 *
 * The RouterLink directives let you link to specific parts of your app.
 *
 * When the link is static, you can use the directive as follows:
 * `<a routerLink="/user/bob">link to user component</a>`
 *
 * If you use dynamic values to generate the link, you can pass an array of path
 * segments, followed by the params for each segment.
 *
 * For instance `['/team', teamId, 'user', userName, {details: true}]`
 * means that we want to generate a link to `/team/11/user/bob;details=true`.
 *
 * Multiple static segments can be merged into one
 * (e.g., `['/team/11/user', userName, {details: true}]`).
 *
 * The first segment name can be prepended with `/`, `./`, or `../`:
 * * If the first segment begins with `/`, the router will look up the route from the root of the
 *   app.
 * * If the first segment begins with `./`, or doesn't begin with a slash, the router will
 *   instead look in the children of the current activated route.
 * * And if the first segment begins with `../`, the router will go up one level.
 *
 * You can set query params and fragment as follows:
 *
 * ```
 * <a [routerLink]="['/user/bob']" [queryParams]="{debug: true}" fragment="education">
 *   link to user component
 * </a>
 * ```
 * RouterLink will use these to generate this link: `/user/bob#education?debug=true`.
 *
 * (Deprecated in v4.0.0 use `queryParamsHandling` instead) You can also tell the
 * directive to preserve the current query params and fragment:
 *
 * ```
 * <a [routerLink]="['/user/bob']" preserveQueryParams preserveFragment>
 *   link to user component
 * </a>
 * ```
 *
 * You can tell the directive to how to handle queryParams, available options are:
 *  - 'merge' merge the queryParams into the current queryParams
 *  - 'preserve' preserve the current queryParams
 *  - default / '' use the queryParams only
 *  same options for {\@link NavigationExtras#queryParamsHandling}
 *
 * ```
 * <a [routerLink]="['/user/bob']" [queryParams]="{debug: true}" queryParamsHandling="merge">
 *   link to user component
 * </a>
 * ```
 *
 * The router link directive always treats the provided input as a delta to the current url.
 *
 * For instance, if the current url is `/user/(box//aux:team)`.
 *
 * Then the following link `<a [routerLink]="['/user/jim']">Jim</a>` will generate the link
 * `/user/(jim//aux:team)`.
 *
 * \@ngModule RouterModule
 *
 * See {\@link Router#createUrlTree} for more information.
 *
 * \@stable
 */
var RouterLink = (function () {
    /**
     * @param {?} router
     * @param {?} route
     * @param {?} tabIndex
     * @param {?} renderer
     * @param {?} el
     */
    function RouterLink(router, route, tabIndex, renderer, el) {
        this.router = router;
        this.route = route;
        this.commands = [];
        if (tabIndex == null) {
            renderer.setAttribute(el.nativeElement, 'tabindex', '0');
        }
    }
    Object.defineProperty(RouterLink.prototype, "routerLink", {
        /**
         * @param {?} commands
         * @return {?}
         */
        set: function (commands) {
            if (commands != null) {
                this.commands = Array.isArray(commands) ? commands : [commands];
            }
            else {
                this.commands = [];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterLink.prototype, "preserveQueryParams", {
        /**
         * @deprecated 4.0.0 use `queryParamsHandling` instead.
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["isDevMode"])() && (console) && (console.warn)) {
                console.warn('preserveQueryParams is deprecated!, use queryParamsHandling instead.');
            }
            this.preserve = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    RouterLink.prototype.onClick = function () {
        var /** @type {?} */ extras = {
            skipLocationChange: attrBoolValue(this.skipLocationChange),
            replaceUrl: attrBoolValue(this.replaceUrl),
        };
        this.router.navigateByUrl(this.urlTree, extras);
        return true;
    };
    Object.defineProperty(RouterLink.prototype, "urlTree", {
        /**
         * @return {?}
         */
        get: function () {
            return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: attrBoolValue(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: attrBoolValue(this.preserveFragment),
            });
        },
        enumerable: true,
        configurable: true
    });
    return RouterLink;
}());
RouterLink.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Directive"], args: [{ selector: ':not(a)[routerLink]' },] },
];
/**
 * @nocollapse
 */
RouterLink.ctorParameters = function () { return [
    { type: Router, },
    { type: ActivatedRoute, },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Attribute"], args: ['tabindex',] },] },
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"], },
]; };
RouterLink.propDecorators = {
    'queryParams': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] },],
    'fragment': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] },],
    'queryParamsHandling': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] },],
    'preserveFragment': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] },],
    'skipLocationChange': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] },],
    'replaceUrl': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] },],
    'routerLink': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] },],
    'preserveQueryParams': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] },],
    'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["HostListener"], args: ['click',] },],
};
/**
 * \@whatItDoes Lets you link to specific parts of your app.
 *
 * See {\@link RouterLink} for more information.
 *
 * \@ngModule RouterModule
 *
 * \@stable
 */
var RouterLinkWithHref = (function () {
    /**
     * @param {?} router
     * @param {?} route
     * @param {?} locationStrategy
     */
    function RouterLinkWithHref(router, route, locationStrategy) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.locationStrategy = locationStrategy;
        this.commands = [];
        this.subscription = router.events.subscribe(function (s) {
            if (s instanceof NavigationEnd) {
                _this.updateTargetUrlAndHref();
            }
        });
    }
    Object.defineProperty(RouterLinkWithHref.prototype, "routerLink", {
        /**
         * @param {?} commands
         * @return {?}
         */
        set: function (commands) {
            if (commands != null) {
                this.commands = Array.isArray(commands) ? commands : [commands];
            }
            else {
                this.commands = [];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterLinkWithHref.prototype, "preserveQueryParams", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["isDevMode"])() && (console) && (console.warn)) {
                console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
            }
            this.preserve = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    RouterLinkWithHref.prototype.ngOnChanges = function (changes) { this.updateTargetUrlAndHref(); };
    /**
     * @return {?}
     */
    RouterLinkWithHref.prototype.ngOnDestroy = function () { this.subscription.unsubscribe(); };
    /**
     * @param {?} button
     * @param {?} ctrlKey
     * @param {?} metaKey
     * @param {?} shiftKey
     * @return {?}
     */
    RouterLinkWithHref.prototype.onClick = function (button, ctrlKey, metaKey, shiftKey) {
        if (button !== 0 || ctrlKey || metaKey || shiftKey) {
            return true;
        }
        if (typeof this.target === 'string' && this.target != '_self') {
            return true;
        }
        var /** @type {?} */ extras = {
            skipLocationChange: attrBoolValue(this.skipLocationChange),
            replaceUrl: attrBoolValue(this.replaceUrl),
        };
        this.router.navigateByUrl(this.urlTree, extras);
        return false;
    };
    /**
     * @return {?}
     */
    RouterLinkWithHref.prototype.updateTargetUrlAndHref = function () {
        this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree));
    };
    Object.defineProperty(RouterLinkWithHref.prototype, "urlTree", {
        /**
         * @return {?}
         */
        get: function () {
            return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: attrBoolValue(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: attrBoolValue(this.preserveFragment),
            });
        },
        enumerable: true,
        configurable: true
    });
    return RouterLinkWithHref;
}());
RouterLinkWithHref.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Directive"], args: [{ selector: 'a[routerLink]' },] },
];
/**
 * @nocollapse
 */
RouterLinkWithHref.ctorParameters = function () { return [
    { type: Router, },
    { type: ActivatedRoute, },
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_common__["LocationStrategy"], },
]; };
RouterLinkWithHref.propDecorators = {
    'target': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["HostBinding"], args: ['attr.target',] }, { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] },],
    'queryParams': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] },],
    'fragment': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] },],
    'queryParamsHandling': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] },],
    'preserveFragment': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] },],
    'skipLocationChange': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] },],
    'replaceUrl': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] },],
    'href': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["HostBinding"] },],
    'routerLink': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] },],
    'preserveQueryParams': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] },],
    'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["HostListener"], args: ['click', ['$event.button', '$event.ctrlKey', '$event.metaKey', '$event.shiftKey'],] },],
};
/**
 * @param {?} s
 * @return {?}
 */
function attrBoolValue(s) {
    return s === '' || !!s;
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@whatItDoes Lets you add a CSS class to an element when the link's route becomes active.
 *
 * \@howToUse
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="active-link">Bob</a>
 * ```
 *
 * \@description
 *
 * The RouterLinkActive directive lets you add a CSS class to an element when the link's route
 * becomes active.
 *
 * Consider the following example:
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="active-link">Bob</a>
 * ```
 *
 * When the url is either '/user' or '/user/bob', the active-link class will
 * be added to the `a` tag. If the url changes, the class will be removed.
 *
 * You can set more than one class, as follows:
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="class1 class2">Bob</a>
 * <a routerLink="/user/bob" [routerLinkActive]="['class1', 'class2']">Bob</a>
 * ```
 *
 * You can configure RouterLinkActive by passing `exact: true`. This will add the classes
 * only when the url matches the link exactly.
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact:
 * true}">Bob</a>
 * ```
 *
 * You can assign the RouterLinkActive instance to a template variable and directly check
 * the `isActive` status.
 * ```
 * <a routerLink="/user/bob" routerLinkActive #rla="routerLinkActive">
 *   Bob {{ rla.isActive ? '(already open)' : ''}}
 * </a>
 * ```
 *
 * Finally, you can apply the RouterLinkActive directive to an ancestor of a RouterLink.
 *
 * ```
 * <div routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">
 *   <a routerLink="/user/jim">Jim</a>
 *   <a routerLink="/user/bob">Bob</a>
 * </div>
 * ```
 *
 * This will set the active-link class on the div tag if the url is either '/user/jim' or
 * '/user/bob'.
 *
 * \@ngModule RouterModule
 *
 * \@stable
 */
var RouterLinkActive = (function () {
    /**
     * @param {?} router
     * @param {?} element
     * @param {?} renderer
     * @param {?} cdr
     */
    function RouterLinkActive(router, element, renderer, cdr) {
        var _this = this;
        this.router = router;
        this.element = element;
        this.renderer = renderer;
        this.cdr = cdr;
        this.classes = [];
        this.active = false;
        this.routerLinkActiveOptions = { exact: false };
        this.subscription = router.events.subscribe(function (s) {
            if (s instanceof NavigationEnd) {
                _this.update();
            }
        });
    }
    Object.defineProperty(RouterLinkActive.prototype, "isActive", {
        /**
         * @return {?}
         */
        get: function () { return this.active; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    RouterLinkActive.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.links.changes.subscribe(function (_) { return _this.update(); });
        this.linksWithHrefs.changes.subscribe(function (_) { return _this.update(); });
        this.update();
    };
    Object.defineProperty(RouterLinkActive.prototype, "routerLinkActive", {
        /**
         * @param {?} data
         * @return {?}
         */
        set: function (data) {
            var /** @type {?} */ classes = Array.isArray(data) ? data : data.split(' ');
            this.classes = classes.filter(function (c) { return !!c; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    RouterLinkActive.prototype.ngOnChanges = function (changes) { this.update(); };
    /**
     * @return {?}
     */
    RouterLinkActive.prototype.ngOnDestroy = function () { this.subscription.unsubscribe(); };
    /**
     * @return {?}
     */
    RouterLinkActive.prototype.update = function () {
        var _this = this;
        if (!this.links || !this.linksWithHrefs || !this.router.navigated)
            return;
        var /** @type {?} */ hasActiveLinks = this.hasActiveLinks();
        // react only when status has changed to prevent unnecessary dom updates
        if (this.active !== hasActiveLinks) {
            this.classes.forEach(function (c) {
                if (hasActiveLinks) {
                    _this.renderer.addClass(_this.element.nativeElement, c);
                }
                else {
                    _this.renderer.removeClass(_this.element.nativeElement, c);
                }
            });
            Promise.resolve(hasActiveLinks).then(function (active) { return _this.active = active; });
        }
    };
    /**
     * @param {?} router
     * @return {?}
     */
    RouterLinkActive.prototype.isLinkActive = function (router) {
        var _this = this;
        return function (link) { return router.isActive(link.urlTree, _this.routerLinkActiveOptions.exact); };
    };
    /**
     * @return {?}
     */
    RouterLinkActive.prototype.hasActiveLinks = function () {
        return this.links.some(this.isLinkActive(this.router)) ||
            this.linksWithHrefs.some(this.isLinkActive(this.router));
    };
    return RouterLinkActive;
}());
RouterLinkActive.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Directive"], args: [{
                selector: '[routerLinkActive]',
                exportAs: 'routerLinkActive',
            },] },
];
/**
 * @nocollapse
 */
RouterLinkActive.ctorParameters = function () { return [
    { type: Router, },
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Renderer2"], },
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ChangeDetectorRef"], },
]; };
RouterLinkActive.propDecorators = {
    'links': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ContentChildren"], args: [RouterLink, { descendants: true },] },],
    'linksWithHrefs': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ContentChildren"], args: [RouterLinkWithHref, { descendants: true },] },],
    'routerLinkActiveOptions': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] },],
    'routerLinkActive': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"] },],
};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Store contextual information about a {\@link RouterOutlet}
 *
 * \@stable
 */
var OutletContext = (function () {
    function OutletContext() {
        this.outlet = null;
        this.route = null;
        this.resolver = null;
        this.children = new ChildrenOutletContexts();
        this.attachRef = null;
    }
    return OutletContext;
}());
/**
 * Store contextual information about the children (= nested) {\@link RouterOutlet}
 *
 * \@stable
 */
var ChildrenOutletContexts = (function () {
    function ChildrenOutletContexts() {
        this.contexts = new Map();
    }
    /**
     * Called when a `RouterOutlet` directive is instantiated
     * @param {?} childName
     * @param {?} outlet
     * @return {?}
     */
    ChildrenOutletContexts.prototype.onChildOutletCreated = function (childName, outlet) {
        var /** @type {?} */ context = this.getOrCreateContext(childName);
        context.outlet = outlet;
        this.contexts.set(childName, context);
    };
    /**
     * Called when a `RouterOutlet` directive is destroyed.
     * We need to keep the context as the outlet could be destroyed inside a NgIf and might be
     * re-created later.
     * @param {?} childName
     * @return {?}
     */
    ChildrenOutletContexts.prototype.onChildOutletDestroyed = function (childName) {
        var /** @type {?} */ context = this.getContext(childName);
        if (context) {
            context.outlet = null;
        }
    };
    /**
     * Called when the corresponding route is deactivated during navigation.
     * Because the component get destroyed, all children outlet are destroyed.
     * @return {?}
     */
    ChildrenOutletContexts.prototype.onOutletDeactivated = function () {
        var /** @type {?} */ contexts = this.contexts;
        this.contexts = new Map();
        return contexts;
    };
    /**
     * @param {?} contexts
     * @return {?}
     */
    ChildrenOutletContexts.prototype.onOutletReAttached = function (contexts) { this.contexts = contexts; };
    /**
     * @param {?} childName
     * @return {?}
     */
    ChildrenOutletContexts.prototype.getOrCreateContext = function (childName) {
        var /** @type {?} */ context = this.getContext(childName);
        if (!context) {
            context = new OutletContext();
            this.contexts.set(childName, context);
        }
        return context;
    };
    /**
     * @param {?} childName
     * @return {?}
     */
    ChildrenOutletContexts.prototype.getContext = function (childName) { return this.contexts.get(childName) || null; };
    return ChildrenOutletContexts;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@whatItDoes Acts as a placeholder that Angular dynamically fills based on the current router
 * state.
 *
 * \@howToUse
 *
 * ```
 * <router-outlet></router-outlet>
 * <router-outlet name='left'></router-outlet>
 * <router-outlet name='right'></router-outlet>
 * ```
 *
 * A router outlet will emit an activate event any time a new component is being instantiated,
 * and a deactivate event when it is being destroyed.
 *
 * ```
 * <router-outlet
 *   (activate)='onActivate($event)'
 *   (deactivate)='onDeactivate($event)'></router-outlet>
 * ```
 * \@ngModule RouterModule
 *
 * \@stable
 */
var RouterOutlet = (function () {
    /**
     * @param {?} parentContexts
     * @param {?} location
     * @param {?} resolver
     * @param {?} name
     * @param {?} changeDetector
     */
    function RouterOutlet(parentContexts, location, resolver, name, changeDetector) {
        this.parentContexts = parentContexts;
        this.location = location;
        this.resolver = resolver;
        this.changeDetector = changeDetector;
        this.activated = null;
        this._activatedRoute = null;
        this.activateEvents = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.deactivateEvents = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.name = name || PRIMARY_OUTLET;
        parentContexts.onChildOutletCreated(this.name, this);
    }
    /**
     * @return {?}
     */
    RouterOutlet.prototype.ngOnDestroy = function () { this.parentContexts.onChildOutletDestroyed(this.name); };
    /**
     * @return {?}
     */
    RouterOutlet.prototype.ngOnInit = function () {
        if (!this.activated) {
            // If the outlet was not instantiated at the time the route got activated we need to populate
            // the outlet when it is initialized (ie inside a NgIf)
            var /** @type {?} */ context = this.parentContexts.getContext(this.name);
            if (context && context.route) {
                if (context.attachRef) {
                    // `attachRef` is populated when there is an existing component to mount
                    this.attach(context.attachRef, context.route);
                }
                else {
                    // otherwise the component defined in the configuration is created
                    this.activateWith(context.route, context.resolver || null);
                }
            }
        }
    };
    Object.defineProperty(RouterOutlet.prototype, "locationInjector", {
        /**
         * @deprecated since v4 *
         * @return {?}
         */
        get: function () { return this.location.injector; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterOutlet.prototype, "locationFactoryResolver", {
        /**
         * @deprecated since v4 *
         * @return {?}
         */
        get: function () { return this.resolver; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterOutlet.prototype, "isActivated", {
        /**
         * @return {?}
         */
        get: function () { return !!this.activated; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterOutlet.prototype, "component", {
        /**
         * @return {?}
         */
        get: function () {
            if (!this.activated)
                throw new Error('Outlet is not activated');
            return this.activated.instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterOutlet.prototype, "activatedRoute", {
        /**
         * @return {?}
         */
        get: function () {
            if (!this.activated)
                throw new Error('Outlet is not activated');
            return (this._activatedRoute);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterOutlet.prototype, "activatedRouteData", {
        /**
         * @return {?}
         */
        get: function () {
            if (this._activatedRoute) {
                return this._activatedRoute.snapshot.data;
            }
            return {};
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Called when the `RouteReuseStrategy` instructs to detach the subtree
     * @return {?}
     */
    RouterOutlet.prototype.detach = function () {
        if (!this.activated)
            throw new Error('Outlet is not activated');
        this.location.detach();
        var /** @type {?} */ cmp = this.activated;
        this.activated = null;
        this._activatedRoute = null;
        return cmp;
    };
    /**
     * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
     * @param {?} ref
     * @param {?} activatedRoute
     * @return {?}
     */
    RouterOutlet.prototype.attach = function (ref, activatedRoute) {
        this.activated = ref;
        this._activatedRoute = activatedRoute;
        this.location.insert(ref.hostView);
    };
    /**
     * @return {?}
     */
    RouterOutlet.prototype.deactivate = function () {
        if (this.activated) {
            var /** @type {?} */ c = this.component;
            this.activated.destroy();
            this.activated = null;
            this._activatedRoute = null;
            this.deactivateEvents.emit(c);
        }
    };
    /**
     * @param {?} activatedRoute
     * @param {?} resolver
     * @return {?}
     */
    RouterOutlet.prototype.activateWith = function (activatedRoute, resolver) {
        if (this.isActivated) {
            throw new Error('Cannot activate an already activated outlet');
        }
        this._activatedRoute = activatedRoute;
        var /** @type {?} */ snapshot = activatedRoute._futureSnapshot;
        var /** @type {?} */ component = (((snapshot._routeConfig)).component);
        resolver = resolver || this.resolver;
        var /** @type {?} */ factory = resolver.resolveComponentFactory(component);
        var /** @type {?} */ childContexts = this.parentContexts.getOrCreateContext(this.name).children;
        var /** @type {?} */ injector = new OutletInjector(activatedRoute, childContexts, this.location.injector);
        this.activated = this.location.createComponent(factory, this.location.length, injector);
        // Calling `markForCheck` to make sure we will run the change detection when the
        // `RouterOutlet` is inside a `ChangeDetectionStrategy.OnPush` component.
        this.changeDetector.markForCheck();
        this.activateEvents.emit(this.activated.instance);
    };
    return RouterOutlet;
}());
RouterOutlet.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Directive"], args: [{ selector: 'router-outlet', exportAs: 'outlet' },] },
];
/**
 * @nocollapse
 */
RouterOutlet.ctorParameters = function () { return [
    { type: ChildrenOutletContexts, },
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewContainerRef"], },
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ComponentFactoryResolver"], },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Attribute"], args: ['name',] },] },
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ChangeDetectorRef"], },
]; };
RouterOutlet.propDecorators = {
    'activateEvents': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"], args: ['activate',] },],
    'deactivateEvents': [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"], args: ['deactivate',] },],
};
var OutletInjector = (function () {
    /**
     * @param {?} route
     * @param {?} childContexts
     * @param {?} parent
     */
    function OutletInjector(route, childContexts, parent) {
        this.route = route;
        this.childContexts = childContexts;
        this.parent = parent;
    }
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    OutletInjector.prototype.get = function (token, notFoundValue) {
        if (token === ActivatedRoute) {
            return this.route;
        }
        if (token === ChildrenOutletContexts) {
            return this.childContexts;
        }
        return this.parent.get(token, notFoundValue);
    };
    return OutletInjector;
}());
/**
*@license
*Copyright Google Inc. All Rights Reserved.
*
*Use of this source code is governed by an MIT-style license that can be
*found in the LICENSE file at https://angular.io/license
*/
/**
 * \@whatItDoes Provides a preloading strategy.
 *
 * \@experimental
 * @abstract
 */
var PreloadingStrategy = (function () {
    function PreloadingStrategy() {
    }
    /**
     * @abstract
     * @param {?} route
     * @param {?} fn
     * @return {?}
     */
    PreloadingStrategy.prototype.preload = function (route, fn) { };
    return PreloadingStrategy;
}());
/**
 * \@whatItDoes Provides a preloading strategy that preloads all modules as quickly as possible.
 *
 * \@howToUse
 *
 * ```
 * RouteModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
 * ```
 *
 * \@experimental
 */
var PreloadAllModules = (function () {
    function PreloadAllModules() {
    }
    /**
     * @param {?} route
     * @param {?} fn
     * @return {?}
     */
    PreloadAllModules.prototype.preload = function (route, fn) {
        return __WEBPACK_IMPORTED_MODULE_15_rxjs_operator_catch__["_catch"].call(fn(), function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])(null); });
    };
    return PreloadAllModules;
}());
/**
 * \@whatItDoes Provides a preloading strategy that does not preload any modules.
 *
 * \@description
 *
 * This strategy is enabled by default.
 *
 * \@experimental
 */
var NoPreloading = (function () {
    function NoPreloading() {
    }
    /**
     * @param {?} route
     * @param {?} fn
     * @return {?}
     */
    NoPreloading.prototype.preload = function (route, fn) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])(null); };
    return NoPreloading;
}());
/**
 * The preloader optimistically loads all router configurations to
 * make navigations into lazily-loaded sections of the application faster.
 *
 * The preloader runs in the background. When the router bootstraps, the preloader
 * starts listening to all navigation events. After every such event, the preloader
 * will check if any configurations can be loaded lazily.
 *
 * If a route is protected by `canLoad` guards, the preloaded will not load it.
 *
 * \@stable
 */
var RouterPreloader = (function () {
    /**
     * @param {?} router
     * @param {?} moduleLoader
     * @param {?} compiler
     * @param {?} injector
     * @param {?} preloadingStrategy
     */
    function RouterPreloader(router, moduleLoader, compiler, injector, preloadingStrategy) {
        this.router = router;
        this.injector = injector;
        this.preloadingStrategy = preloadingStrategy;
        var onStartLoad = function (r) { return router.triggerEvent(new RouteConfigLoadStart(r)); };
        var onEndLoad = function (r) { return router.triggerEvent(new RouteConfigLoadEnd(r)); };
        this.loader = new RouterConfigLoader(moduleLoader, compiler, onStartLoad, onEndLoad);
    }
    ;
    /**
     * @return {?}
     */
    RouterPreloader.prototype.setUpPreloading = function () {
        var _this = this;
        var /** @type {?} */ navigations$ = __WEBPACK_IMPORTED_MODULE_21_rxjs_operator_filter__["filter"].call(this.router.events, function (e) { return e instanceof NavigationEnd; });
        this.subscription = __WEBPACK_IMPORTED_MODULE_7_rxjs_operator_concatMap__["concatMap"].call(navigations$, function () { return _this.preload(); }).subscribe(function () { });
    };
    /**
     * @return {?}
     */
    RouterPreloader.prototype.preload = function () {
        var /** @type {?} */ ngModule = this.injector.get(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModuleRef"]);
        return this.processRoutes(ngModule, this.router.config);
    };
    /**
     * @return {?}
     */
    RouterPreloader.prototype.ngOnDestroy = function () { this.subscription.unsubscribe(); };
    /**
     * @param {?} ngModule
     * @param {?} routes
     * @return {?}
     */
    RouterPreloader.prototype.processRoutes = function (ngModule, routes) {
        var /** @type {?} */ res = [];
        for (var _i = 0, routes_5 = routes; _i < routes_5.length; _i++) {
            var route = routes_5[_i];
            // we already have the config loaded, just recurse
            if (route.loadChildren && !route.canLoad && route._loadedConfig) {
                var /** @type {?} */ childConfig = route._loadedConfig;
                res.push(this.processRoutes(childConfig.module, childConfig.routes));
                // no config loaded, fetch the config
            }
            else if (route.loadChildren && !route.canLoad) {
                res.push(this.preloadConfig(ngModule, route));
                // recurse into children
            }
            else if (route.children) {
                res.push(this.processRoutes(ngModule, route.children));
            }
        }
        return __WEBPACK_IMPORTED_MODULE_19_rxjs_operator_mergeAll__["mergeAll"].call(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_from__["from"])(res));
    };
    /**
     * @param {?} ngModule
     * @param {?} route
     * @return {?}
     */
    RouterPreloader.prototype.preloadConfig = function (ngModule, route) {
        var _this = this;
        return this.preloadingStrategy.preload(route, function () {
            var /** @type {?} */ loaded$ = _this.loader.load(ngModule.injector, route);
            return __WEBPACK_IMPORTED_MODULE_12_rxjs_operator_mergeMap__["mergeMap"].call(loaded$, function (config) {
                route._loadedConfig = config;
                return _this.processRoutes(config.module, config.routes);
            });
        });
    };
    return RouterPreloader;
}());
RouterPreloader.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
RouterPreloader.ctorParameters = function () { return [
    { type: Router, },
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModuleFactoryLoader"], },
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Compiler"], },
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Injector"], },
    { type: PreloadingStrategy, },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@whatItDoes Contains a list of directives
 * \@stable
 */
var ROUTER_DIRECTIVES = [RouterOutlet, RouterLink, RouterLinkWithHref, RouterLinkActive];
/**
 * \@whatItDoes Is used in DI to configure the router.
 * \@stable
 */
var ROUTER_CONFIGURATION = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["InjectionToken"]('ROUTER_CONFIGURATION');
/**
 * \@docsNotRequired
 */
var ROUTER_FORROOT_GUARD = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["InjectionToken"]('ROUTER_FORROOT_GUARD');
var ROUTER_PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"],
    { provide: UrlSerializer, useClass: DefaultUrlSerializer },
    {
        provide: Router,
        useFactory: setupRouter,
        deps: [
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["ApplicationRef"], UrlSerializer, ChildrenOutletContexts, __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_2__angular_core__["Injector"],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModuleFactoryLoader"], __WEBPACK_IMPORTED_MODULE_2__angular_core__["Compiler"], ROUTES, ROUTER_CONFIGURATION,
            [UrlHandlingStrategy, new __WEBPACK_IMPORTED_MODULE_2__angular_core__["Optional"]()], [RouteReuseStrategy, new __WEBPACK_IMPORTED_MODULE_2__angular_core__["Optional"]()]
        ]
    },
    ChildrenOutletContexts,
    { provide: ActivatedRoute, useFactory: rootRoute, deps: [Router] },
    { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModuleFactoryLoader"], useClass: __WEBPACK_IMPORTED_MODULE_2__angular_core__["SystemJsNgModuleLoader"] },
    RouterPreloader,
    NoPreloading,
    PreloadAllModules,
    { provide: ROUTER_CONFIGURATION, useValue: { enableTracing: false } },
];
/**
 * @return {?}
 */
function routerNgProbeToken() {
    return new __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgProbeToken"]('Router', Router);
}
/**
 * \@whatItDoes Adds router directives and providers.
 *
 * \@howToUse
 *
 * RouterModule can be imported multiple times: once per lazily-loaded bundle.
 * Since the router deals with a global shared resource--location, we cannot have
 * more than one router service active.
 *
 * That is why there are two ways to create the module: `RouterModule.forRoot` and
 * `RouterModule.forChild`.
 *
 * * `forRoot` creates a module that contains all the directives, the given routes, and the router
 *   service itself.
 * * `forChild` creates a module that contains all the directives and the given routes, but does not
 *   include the router service.
 *
 * When registered at the root, the module should be used as follows
 *
 * ```
 * \@NgModule({
 *   imports: [RouterModule.forRoot(ROUTES)]
 * })
 * class MyNgModule {}
 * ```
 *
 * For submodules and lazy loaded submodules the module should be used as follows:
 *
 * ```
 * \@NgModule({
 *   imports: [RouterModule.forChild(ROUTES)]
 * })
 * class MyNgModule {}
 * ```
 *
 * \@description
 *
 * Managing state transitions is one of the hardest parts of building applications. This is
 * especially true on the web, where you also need to ensure that the state is reflected in the URL.
 * In addition, we often want to split applications into multiple bundles and load them on demand.
 * Doing this transparently is not trivial.
 *
 * The Angular router solves these problems. Using the router, you can declaratively specify
 * application states, manage state transitions while taking care of the URL, and load bundles on
 * demand.
 *
 * [Read this developer guide](https://angular.io/docs/ts/latest/guide/router.html) to get an
 * overview of how the router should be used.
 *
 * \@stable
 */
var RouterModule = (function () {
    /**
     * @param {?} guard
     * @param {?} router
     */
    function RouterModule(guard, router) {
    }
    /**
     * Creates a module with all the router providers and directives. It also optionally sets up an
     * application listener to perform an initial navigation.
     *
     * Options:
     * * `enableTracing` makes the router log all its internal events to the console.
     * * `useHash` enables the location strategy that uses the URL fragment instead of the history
     * API.
     * * `initialNavigation` disables the initial navigation.
     * * `errorHandler` provides a custom error handler.
     * @param {?} routes
     * @param {?=} config
     * @return {?}
     */
    RouterModule.forRoot = function (routes, config) {
        return {
            ngModule: RouterModule,
            providers: [
                ROUTER_PROVIDERS,
                provideRoutes(routes),
                {
                    provide: ROUTER_FORROOT_GUARD,
                    useFactory: provideForRootGuard,
                    deps: [[Router, new __WEBPACK_IMPORTED_MODULE_2__angular_core__["Optional"](), new __WEBPACK_IMPORTED_MODULE_2__angular_core__["SkipSelf"]()]]
                },
                { provide: ROUTER_CONFIGURATION, useValue: config ? config : {} },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_common__["LocationStrategy"],
                    useFactory: provideLocationStrategy,
                    deps: [
                        __WEBPACK_IMPORTED_MODULE_1__angular_common__["PlatformLocation"], [new __WEBPACK_IMPORTED_MODULE_2__angular_core__["Inject"](__WEBPACK_IMPORTED_MODULE_1__angular_common__["APP_BASE_HREF"]), new __WEBPACK_IMPORTED_MODULE_2__angular_core__["Optional"]()], ROUTER_CONFIGURATION
                    ]
                },
                {
                    provide: PreloadingStrategy,
                    useExisting: config && config.preloadingStrategy ? config.preloadingStrategy :
                        NoPreloading
                },
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgProbeToken"], multi: true, useFactory: routerNgProbeToken },
                provideRouterInitializer(),
            ],
        };
    };
    /**
     * Creates a module with all the router directives and a provider registering routes.
     * @param {?} routes
     * @return {?}
     */
    RouterModule.forChild = function (routes) {
        return { ngModule: RouterModule, providers: [provideRoutes(routes)] };
    };
    return RouterModule;
}());
RouterModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"], args: [{ declarations: ROUTER_DIRECTIVES, exports: ROUTER_DIRECTIVES },] },
];
/**
 * @nocollapse
 */
RouterModule.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Optional"] }, { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Inject"], args: [ROUTER_FORROOT_GUARD,] },] },
    { type: Router, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Optional"] },] },
]; };
/**
 * @param {?} platformLocationStrategy
 * @param {?} baseHref
 * @param {?=} options
 * @return {?}
 */
function provideLocationStrategy(platformLocationStrategy, baseHref, options) {
    if (options === void 0) { options = {}; }
    return options.useHash ? new __WEBPACK_IMPORTED_MODULE_1__angular_common__["HashLocationStrategy"](platformLocationStrategy, baseHref) :
        new __WEBPACK_IMPORTED_MODULE_1__angular_common__["PathLocationStrategy"](platformLocationStrategy, baseHref);
}
/**
 * @param {?} router
 * @return {?}
 */
function provideForRootGuard(router) {
    if (router) {
        throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");
    }
    return 'guarded';
}
/**
 * \@whatItDoes Registers routes.
 *
 * \@howToUse
 *
 * ```
 * \@NgModule({
 *   imports: [RouterModule.forChild(ROUTES)],
 *   providers: [provideRoutes(EXTRA_ROUTES)]
 * })
 * class MyNgModule {}
 * ```
 *
 * \@stable
 * @param {?} routes
 * @return {?}
 */
function provideRoutes(routes) {
    return [
        { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ANALYZE_FOR_ENTRY_COMPONENTS"], multi: true, useValue: routes },
        { provide: ROUTES, multi: true, useValue: routes },
    ];
}
/**
 * @param {?} ref
 * @param {?} urlSerializer
 * @param {?} contexts
 * @param {?} location
 * @param {?} injector
 * @param {?} loader
 * @param {?} compiler
 * @param {?} config
 * @param {?=} opts
 * @param {?=} urlHandlingStrategy
 * @param {?=} routeReuseStrategy
 * @return {?}
 */
function setupRouter(ref, urlSerializer, contexts, location, injector, loader, compiler, config, opts, urlHandlingStrategy, routeReuseStrategy) {
    if (opts === void 0) { opts = {}; }
    var /** @type {?} */ router = new Router(null, urlSerializer, contexts, location, injector, loader, compiler, flatten(config));
    if (urlHandlingStrategy) {
        router.urlHandlingStrategy = urlHandlingStrategy;
    }
    if (routeReuseStrategy) {
        router.routeReuseStrategy = routeReuseStrategy;
    }
    if (opts.errorHandler) {
        router.errorHandler = opts.errorHandler;
    }
    if (opts.enableTracing) {
        var /** @type {?} */ dom_1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_20__angular_platform_browser__["ɵgetDOM"])();
        router.events.subscribe(function (e) {
            dom_1.logGroup("Router Event: " + ((e.constructor)).name);
            dom_1.log(e.toString());
            dom_1.log(e);
            dom_1.logGroupEnd();
        });
    }
    return router;
}
/**
 * @param {?} router
 * @return {?}
 */
function rootRoute(router) {
    return router.routerState.root;
}
/**
 * To initialize the router properly we need to do in two steps:
 *
 * We need to start the navigation in a APP_INITIALIZER to block the bootstrap if
 * a resolver or a guards executes asynchronously. Second, we need to actually run
 * activation in a BOOTSTRAP_LISTENER. We utilize the afterPreactivation
 * hook provided by the router to do that.
 *
 * The router navigation starts, reaches the point when preactivation is done, and then
 * pauses. It waits for the hook to be resolved. We then resolve it only in a bootstrap listener.
 */
var RouterInitializer = (function () {
    /**
     * @param {?} injector
     */
    function RouterInitializer(injector) {
        this.injector = injector;
        this.initNavigation = false;
        this.resultOfPreactivationDone = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
    }
    /**
     * @return {?}
     */
    RouterInitializer.prototype.appInitializer = function () {
        var _this = this;
        var /** @type {?} */ p = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_common__["LOCATION_INITIALIZED"], Promise.resolve(null));
        return p.then(function () {
            var /** @type {?} */ resolve = ((null));
            var /** @type {?} */ res = new Promise(function (r) { return resolve = r; });
            var /** @type {?} */ router = _this.injector.get(Router);
            var /** @type {?} */ opts = _this.injector.get(ROUTER_CONFIGURATION);
            if (_this.isLegacyDisabled(opts) || _this.isLegacyEnabled(opts)) {
                resolve(true);
            }
            else if (opts.initialNavigation === 'disabled') {
                router.setUpLocationChangeListener();
                resolve(true);
            }
            else if (opts.initialNavigation === 'enabled') {
                router.hooks.afterPreactivation = function () {
                    // only the initial navigation should be delayed
                    if (!_this.initNavigation) {
                        _this.initNavigation = true;
                        resolve(true);
                        return _this.resultOfPreactivationDone;
                        // subsequent navigations should not be delayed
                    }
                    else {
                        return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_of__["of"])(null));
                    }
                };
                router.initialNavigation();
            }
            else {
                throw new Error("Invalid initialNavigation options: '" + opts.initialNavigation + "'");
            }
            return res;
        });
    };
    /**
     * @param {?} bootstrappedComponentRef
     * @return {?}
     */
    RouterInitializer.prototype.bootstrapListener = function (bootstrappedComponentRef) {
        var /** @type {?} */ opts = this.injector.get(ROUTER_CONFIGURATION);
        var /** @type {?} */ preloader = this.injector.get(RouterPreloader);
        var /** @type {?} */ router = this.injector.get(Router);
        var /** @type {?} */ ref = this.injector.get(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ApplicationRef"]);
        if (bootstrappedComponentRef !== ref.components[0]) {
            return;
        }
        if (this.isLegacyEnabled(opts)) {
            router.initialNavigation();
        }
        else if (this.isLegacyDisabled(opts)) {
            router.setUpLocationChangeListener();
        }
        preloader.setUpPreloading();
        router.resetRootComponentType(ref.componentTypes[0]);
        this.resultOfPreactivationDone.next(/** @type {?} */ ((null)));
        this.resultOfPreactivationDone.complete();
    };
    /**
     * @param {?} opts
     * @return {?}
     */
    RouterInitializer.prototype.isLegacyEnabled = function (opts) {
        return opts.initialNavigation === 'legacy_enabled' || opts.initialNavigation === true ||
            opts.initialNavigation === undefined;
    };
    /**
     * @param {?} opts
     * @return {?}
     */
    RouterInitializer.prototype.isLegacyDisabled = function (opts) {
        return opts.initialNavigation === 'legacy_disabled' || opts.initialNavigation === false;
    };
    return RouterInitializer;
}());
RouterInitializer.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
RouterInitializer.ctorParameters = function () { return [
    { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["Injector"], },
]; };
/**
 * @param {?} r
 * @return {?}
 */
function getAppInitializer(r) {
    return r.appInitializer.bind(r);
}
/**
 * @param {?} r
 * @return {?}
 */
function getBootstrapListener(r) {
    return r.bootstrapListener.bind(r);
}
/**
 * A token for the router initializer that will be called after the app is bootstrapped.
 *
 * \@experimental
 */
var ROUTER_INITIALIZER = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["InjectionToken"]('Router Initializer');
/**
 * @return {?}
 */
function provideRouterInitializer() {
    return [
        RouterInitializer,
        {
            provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["APP_INITIALIZER"],
            multi: true,
            useFactory: getAppInitializer,
            deps: [RouterInitializer]
        },
        { provide: ROUTER_INITIALIZER, useFactory: getBootstrapListener, deps: [RouterInitializer] },
        { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["APP_BOOTSTRAP_LISTENER"], multi: true, useExisting: ROUTER_INITIALIZER },
    ];
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the common package.
 */
/**
 * \@stable
 */
var VERSION = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["Version"]('4.3.4');
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the router package.
 */
// This file only reexports content of the `src` folder. Keep it that way.
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=router.es5.js.map


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(48);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var hide = __webpack_require__(19);
var has = __webpack_require__(7);
var SRC = __webpack_require__(22)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(17).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(38);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var http_1 = __webpack_require__(42);
var store_1 = __webpack_require__(15);
var users_reducer_1 = __webpack_require__(23);
var user_reducer_1 = __webpack_require__(45);
__webpack_require__(116);
var UsersService = (function () {
    function UsersService(http, store, userstore) {
        var _this = this;
        this.http = http;
        this.store = store;
        this.userstore = userstore;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.getUsers = function () {
            _this.http.get('/api/users')
                .toPromise()
                .then(function (response) {
                var data = response.json();
                data.users = data.users.map(function (user) {
                    user.show = true;
                    return user;
                });
                _this.store.dispatch({ type: users_reducer_1.UPDATE_USERS, payload: data });
            });
        };
        this.addUser = function (name) {
            _this.http.post('/api/user/add', JSON.stringify({ user: {
                    name: name
                } }), { headers: _this.headers }).toPromise().then(function (response) {
                _this.store.dispatch({ type: users_reducer_1.ADD_USER, payload: name });
            });
        };
        this.getUser = function (id) {
            _this.http.get('/api/get_user/' + id).toPromise().then(function (response) {
                var data = response.json();
                if (data.success) {
                    _this.userstore.dispatch({ type: user_reducer_1.UPDATE_USER, payload: data.user });
                }
            });
        };
        this.returnBook = function (userId, bookId) {
            _this.http.post('/api/user_return', JSON.stringify({ data: { userId: userId, bookId: bookId } }), { headers: _this.headers })
                .toPromise().then(function (response) {
                var data = response.json();
                if (data.success) {
                    _this.userstore.dispatch({ type: user_reducer_1.UPDATE_USER, payload: data.user });
                }
            });
        };
        store.select('users');
        userstore.select('user');
        this.getUsers();
    }
    UsersService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, store_1.Store, store_1.Store])
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.0' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(12);
var call = __webpack_require__(84);
var isArrayIter = __webpack_require__(82);
var anObject = __webpack_require__(1);
var toLength = __webpack_require__(36);
var getIterFn = __webpack_require__(98);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10);
var createDesc = __webpack_require__(30);
module.exports = __webpack_require__(8) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(22)('meta');
var isObject = __webpack_require__(3);
var has = __webpack_require__(7);
var setDesc = __webpack_require__(10).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(9)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(7);
var toObject = __webpack_require__(37);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FETCH_USERS = 'FETCH_USERS';
exports.ADD_USER = 'ADD_USER';
exports.SEARCH_USER = 'SEARCH_USER';
exports.UPDATE_USERS = 'UPDATE_USERS';
exports.CLEAN_FILTERS = 'CLEAN_FILTERS';
var id;
exports.users = function (state, _a) {
    if (state === void 0) { state = []; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case exports.CLEAN_FILTERS:
            console.log('clean filter');
            return state.map(function (user) {
                user.show = true;
                return user;
            });
        case exports.UPDATE_USERS:
            console.log('updating users');
            state = payload.users;
            id = payload.totalUsers;
            return state;
        case exports.FETCH_USERS:
            console.log('fetching users');
            return state;
        case exports.ADD_USER:
            console.log('adding user');
            state.push({
                'id': id,
                'name': payload,
                'show': true
            });
            id++;
            return state;
        case exports.SEARCH_USER:
            console.log('searching user');
            return state.map(function (user) {
                user.show = user.name.toLowerCase().indexOf(payload) > -1;
                return user;
            });
        default:
            return state;
    }
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(6);
var $export = __webpack_require__(27);
var redefine = __webpack_require__(13);
var redefineAll = __webpack_require__(31);
var meta = __webpack_require__(20);
var forOf = __webpack_require__(18);
var anInstance = __webpack_require__(24);
var isObject = __webpack_require__(3);
var fails = __webpack_require__(9);
var $iterDetect = __webpack_require__(87);
var setToStringTag = __webpack_require__(32);
var inheritIfRequired = __webpack_require__(81);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var core = __webpack_require__(17);
var hide = __webpack_require__(19);
var redefine = __webpack_require__(13);
var ctx = __webpack_require__(12);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(25);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(13);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(10).f;
var has = __webpack_require__(7);
var TAG = __webpack_require__(5)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(34)('keys');
var uid = __webpack_require__(22);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(28);
var defined = __webpack_require__(51);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(58);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(51);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(0);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(122);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(173);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(48);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserXhr", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPBackend", function() { return JSONPBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPConnection", function() { return JSONPConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieXSRFStrategy", function() { return CookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRBackend", function() { return XHRBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRConnection", function() { return XHRConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRequestOptions", function() { return BaseRequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestOptions", function() { return RequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResponseOptions", function() { return BaseResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseOptions", function() { return ResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadyState", function() { return ReadyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestMethod", function() { return RequestMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseContentType", function() { return ResponseContentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseType", function() { return ResponseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Http", function() { return Http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jsonp", function() { return Jsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpModule", function() { return HttpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpModule", function() { return JsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return Connection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionBackend", function() { return ConnectionBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XSRFStrategy", function() { return XSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryEncoder", function() { return QueryEncoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLSearchParams", function() { return URLSearchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return BrowserJsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return JSONPBackend_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return Body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return _createDefaultCookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return httpFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return jsonpFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(41);

/**
 * @license Angular v4.3.4
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */



/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A backend for http that uses the `XMLHttpRequest` browser API.
 *
 * Take care not to evaluate this in non-browser contexts.
 *
 * \@experimental
 */
var BrowserXhr = (function () {
    function BrowserXhr() {
    }
    /**
     * @return {?}
     */
    BrowserXhr.prototype.build = function () { return ((new XMLHttpRequest())); };
    return BrowserXhr;
}());
BrowserXhr.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
BrowserXhr.ctorParameters = function () { return []; };
var RequestMethod = {};
RequestMethod.Get = 0;
RequestMethod.Post = 1;
RequestMethod.Put = 2;
RequestMethod.Delete = 3;
RequestMethod.Options = 4;
RequestMethod.Head = 5;
RequestMethod.Patch = 6;
RequestMethod[RequestMethod.Get] = "Get";
RequestMethod[RequestMethod.Post] = "Post";
RequestMethod[RequestMethod.Put] = "Put";
RequestMethod[RequestMethod.Delete] = "Delete";
RequestMethod[RequestMethod.Options] = "Options";
RequestMethod[RequestMethod.Head] = "Head";
RequestMethod[RequestMethod.Patch] = "Patch";
var ReadyState = {};
ReadyState.Unsent = 0;
ReadyState.Open = 1;
ReadyState.HeadersReceived = 2;
ReadyState.Loading = 3;
ReadyState.Done = 4;
ReadyState.Cancelled = 5;
ReadyState[ReadyState.Unsent] = "Unsent";
ReadyState[ReadyState.Open] = "Open";
ReadyState[ReadyState.HeadersReceived] = "HeadersReceived";
ReadyState[ReadyState.Loading] = "Loading";
ReadyState[ReadyState.Done] = "Done";
ReadyState[ReadyState.Cancelled] = "Cancelled";
var ResponseType = {};
ResponseType.Basic = 0;
ResponseType.Cors = 1;
ResponseType.Default = 2;
ResponseType.Error = 3;
ResponseType.Opaque = 4;
ResponseType[ResponseType.Basic] = "Basic";
ResponseType[ResponseType.Cors] = "Cors";
ResponseType[ResponseType.Default] = "Default";
ResponseType[ResponseType.Error] = "Error";
ResponseType[ResponseType.Opaque] = "Opaque";
var ContentType = {};
ContentType.NONE = 0;
ContentType.JSON = 1;
ContentType.FORM = 2;
ContentType.FORM_DATA = 3;
ContentType.TEXT = 4;
ContentType.BLOB = 5;
ContentType.ARRAY_BUFFER = 6;
ContentType[ContentType.NONE] = "NONE";
ContentType[ContentType.JSON] = "JSON";
ContentType[ContentType.FORM] = "FORM";
ContentType[ContentType.FORM_DATA] = "FORM_DATA";
ContentType[ContentType.TEXT] = "TEXT";
ContentType[ContentType.BLOB] = "BLOB";
ContentType[ContentType.ARRAY_BUFFER] = "ARRAY_BUFFER";
var ResponseContentType = {};
ResponseContentType.Text = 0;
ResponseContentType.Json = 1;
ResponseContentType.ArrayBuffer = 2;
ResponseContentType.Blob = 3;
ResponseContentType[ResponseContentType.Text] = "Text";
ResponseContentType[ResponseContentType.Json] = "Json";
ResponseContentType[ResponseContentType.ArrayBuffer] = "ArrayBuffer";
ResponseContentType[ResponseContentType.Blob] = "Blob";
/**
 * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
 * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
 *
 * The only known difference between this `Headers` implementation and the spec is the
 * lack of an `entries` method.
 *
 * ### Example
 *
 * ```
 * import {Headers} from '\@angular/http';
 *
 * var firstHeaders = new Headers();
 * firstHeaders.append('Content-Type', 'image/jpeg');
 * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
 *
 * // Create headers from Plain Old JavaScript Object
 * var secondHeaders = new Headers({
 *   'X-My-Custom-Header': 'Angular'
 * });
 * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
 *
 * var thirdHeaders = new Headers(secondHeaders);
 * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
 * ```
 *
 * \@experimental
 */
var Headers = (function () {
    /**
     * @param {?=} headers
     */
    function Headers(headers) {
        var _this = this;
        /**
         * \@internal header names are lower case
         */
        this._headers = new Map();
        /**
         * \@internal map lower case names to actual names
         */
        this._normalizedNames = new Map();
        if (!headers) {
            return;
        }
        if (headers instanceof Headers) {
            headers.forEach(function (values, name) {
                values.forEach(function (value) { return _this.append(name, value); });
            });
            return;
        }
        Object.keys(headers).forEach(function (name) {
            var values = Array.isArray(headers[name]) ? headers[name] : [headers[name]];
            _this.delete(name);
            values.forEach(function (value) { return _this.append(name, value); });
        });
    }
    /**
     * Returns a new Headers instance from the given DOMString of Response Headers
     * @param {?} headersString
     * @return {?}
     */
    Headers.fromResponseHeaderString = function (headersString) {
        var /** @type {?} */ headers = new Headers();
        headersString.split('\n').forEach(function (line) {
            var /** @type {?} */ index = line.indexOf(':');
            if (index > 0) {
                var /** @type {?} */ name = line.slice(0, index);
                var /** @type {?} */ value = line.slice(index + 1).trim();
                headers.set(name, value);
            }
        });
        return headers;
    };
    /**
     * Appends a header to existing list of header values for a given header name.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    Headers.prototype.append = function (name, value) {
        var /** @type {?} */ values = this.getAll(name);
        if (values === null) {
            this.set(name, value);
        }
        else {
            values.push(value);
        }
    };
    /**
     * Deletes all header values for the given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.delete = function (name) {
        var /** @type {?} */ lcName = name.toLowerCase();
        this._normalizedNames.delete(lcName);
        this._headers.delete(lcName);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    Headers.prototype.forEach = function (fn) {
        var _this = this;
        this._headers.forEach(function (values, lcName) { return fn(values, _this._normalizedNames.get(lcName), _this._headers); });
    };
    /**
     * Returns first header that matches given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.get = function (name) {
        var /** @type {?} */ values = this.getAll(name);
        if (values === null) {
            return null;
        }
        return values.length > 0 ? values[0] : null;
    };
    /**
     * Checks for existence of header by given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.has = function (name) { return this._headers.has(name.toLowerCase()); };
    /**
     * Returns the names of the headers
     * @return {?}
     */
    Headers.prototype.keys = function () { return Array.from(this._normalizedNames.values()); };
    /**
     * Sets or overrides header value for given name.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    Headers.prototype.set = function (name, value) {
        if (Array.isArray(value)) {
            if (value.length) {
                this._headers.set(name.toLowerCase(), [value.join(',')]);
            }
        }
        else {
            this._headers.set(name.toLowerCase(), [value]);
        }
        this.mayBeSetNormalizedName(name);
    };
    /**
     * Returns values of all headers.
     * @return {?}
     */
    Headers.prototype.values = function () { return Array.from(this._headers.values()); };
    /**
     * @return {?}
     */
    Headers.prototype.toJSON = function () {
        var _this = this;
        var /** @type {?} */ serialized = {};
        this._headers.forEach(function (values, name) {
            var /** @type {?} */ split = [];
            values.forEach(function (v) { return split.push.apply(split, v.split(',')); });
            serialized[((_this._normalizedNames.get(name)))] = split;
        });
        return serialized;
    };
    /**
     * Returns list of header values for a given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.getAll = function (name) {
        return this.has(name) ? this._headers.get(name.toLowerCase()) || null : null;
    };
    /**
     * This method is not implemented.
     * @return {?}
     */
    Headers.prototype.entries = function () { throw new Error('"entries" method is not implemented on Headers class'); };
    /**
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.mayBeSetNormalizedName = function (name) {
        var /** @type {?} */ lcName = name.toLowerCase();
        if (!this._normalizedNames.has(lcName)) {
            this._normalizedNames.set(lcName, name);
        }
    };
    return Headers;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a response options object to be optionally provided when instantiating a
 * {\@link Response}.
 *
 * This class is based on the `ResponseInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#responseinit).
 *
 * All values are null by default. Typical defaults can be found in the
 * {\@link BaseResponseOptions} class, which sub-classes `ResponseOptions`.
 *
 * This class may be used in tests to build {\@link Response Responses} for
 * mock responses (see {\@link MockBackend}).
 *
 * ### Example ([live demo](http://plnkr.co/edit/P9Jkk8e8cz6NVzbcxEsD?p=preview))
 *
 * ```typescript
 * import {ResponseOptions, Response} from '\@angular/http';
 *
 * var options = new ResponseOptions({
 *   body: '{"name":"Jeff"}'
 * });
 * var res = new Response(options);
 *
 * console.log('res.json():', res.json()); // Object {name: "Jeff"}
 * ```
 *
 * \@experimental
 */
var ResponseOptions = (function () {
    /**
     * @param {?=} opts
     */
    function ResponseOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var body = opts.body, status = opts.status, headers = opts.headers, statusText = opts.statusText, type = opts.type, url = opts.url;
        this.body = body != null ? body : null;
        this.status = status != null ? status : null;
        this.headers = headers != null ? headers : null;
        this.statusText = statusText != null ? statusText : null;
        this.type = type != null ? type : null;
        this.url = url != null ? url : null;
    }
    /**
     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
     * override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * This may be useful when sharing a base `ResponseOptions` object inside tests,
     * where certain properties may change from test to test.
     *
     * ### Example ([live demo](http://plnkr.co/edit/1lXquqFfgduTFBWjNoRE?p=preview))
     *
     * ```typescript
     * import {ResponseOptions, Response} from '\@angular/http';
     *
     * var options = new ResponseOptions({
     *   body: {name: 'Jeff'}
     * });
     * var res = new Response(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('options.url:', options.url); // null
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * console.log('res.url:', res.url); // https://google.com
     * ```
     * @param {?=} options
     * @return {?}
     */
    ResponseOptions.prototype.merge = function (options) {
        return new ResponseOptions({
            body: options && options.body != null ? options.body : this.body,
            status: options && options.status != null ? options.status : this.status,
            headers: options && options.headers != null ? options.headers : this.headers,
            statusText: options && options.statusText != null ? options.statusText : this.statusText,
            type: options && options.type != null ? options.type : this.type,
            url: options && options.url != null ? options.url : this.url,
        });
    };
    return ResponseOptions;
}());
/**
 * Subclass of {\@link ResponseOptions}, with default values.
 *
 * Default values:
 *  * status: 200
 *  * headers: empty {\@link Headers} object
 *
 * This class could be extended and bound to the {\@link ResponseOptions} class
 * when configuring an {\@link Injector}, in order to override the default options
 * used by {\@link Http} to create {\@link Response Responses}.
 *
 * ### Example ([live demo](http://plnkr.co/edit/qv8DLT?p=preview))
 *
 * ```typescript
 * import {provide} from '\@angular/core';
 * import {bootstrap} from '\@angular/platform-browser/browser';
 * import {HTTP_PROVIDERS, Headers, Http, BaseResponseOptions, ResponseOptions} from
 * '\@angular/http';
 * import {App} from './myapp';
 *
 * class MyOptions extends BaseResponseOptions {
 *   headers:Headers = new Headers({network: 'github'});
 * }
 *
 * bootstrap(App, [HTTP_PROVIDERS, {provide: ResponseOptions, useClass: MyOptions}]);
 * ```
 *
 * The options could also be extended when manually creating a {\@link Response}
 * object.
 *
 * ### Example ([live demo](http://plnkr.co/edit/VngosOWiaExEtbstDoix?p=preview))
 *
 * ```
 * import {BaseResponseOptions, Response} from '\@angular/http';
 *
 * var options = new BaseResponseOptions();
 * var res = new Response(options.merge({
 *   body: 'Angular',
 *   headers: new Headers({framework: 'angular'})
 * }));
 * console.log('res.headers.get("framework"):', res.headers.get('framework')); // angular
 * console.log('res.text():', res.text()); // Angular;
 * ```
 *
 * \@experimental
 */
var BaseResponseOptions = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](BaseResponseOptions, _super);
    function BaseResponseOptions() {
        return _super.call(this, { status: 200, statusText: 'Ok', type: ResponseType.Default, headers: new Headers() }) || this;
    }
    return BaseResponseOptions;
}(ResponseOptions));
BaseResponseOptions.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
BaseResponseOptions.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Abstract class from which real backends are derived.
 *
 * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
 * {\@link Request}.
 *
 * \@experimental
 * @abstract
 */
var ConnectionBackend = (function () {
    function ConnectionBackend() {
    }
    /**
     * @abstract
     * @param {?} request
     * @return {?}
     */
    ConnectionBackend.prototype.createConnection = function (request) { };
    return ConnectionBackend;
}());
/**
 * Abstract class from which real connections are derived.
 *
 * \@experimental
 * @abstract
 */
var Connection = (function () {
    function Connection() {
    }
    return Connection;
}());
/**
 * An XSRFStrategy configures XSRF protection (e.g. via headers) on an HTTP request.
 *
 * \@experimental
 * @abstract
 */
var XSRFStrategy = (function () {
    function XSRFStrategy() {
    }
    /**
     * @abstract
     * @param {?} req
     * @return {?}
     */
    XSRFStrategy.prototype.configureRequest = function (req) { };
    return XSRFStrategy;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} method
 * @return {?}
 */
function normalizeMethodName(method) {
    if (typeof method !== 'string')
        return method;
    switch (method.toUpperCase()) {
        case 'GET':
            return RequestMethod.Get;
        case 'POST':
            return RequestMethod.Post;
        case 'PUT':
            return RequestMethod.Put;
        case 'DELETE':
            return RequestMethod.Delete;
        case 'OPTIONS':
            return RequestMethod.Options;
        case 'HEAD':
            return RequestMethod.Head;
        case 'PATCH':
            return RequestMethod.Patch;
    }
    throw new Error("Invalid request method. The method \"" + method + "\" is not supported.");
}
var isSuccess = function (status) { return (status >= 200 && status < 300); };
/**
 * @param {?} xhr
 * @return {?}
 */
function getResponseURL(xhr) {
    if ('responseURL' in xhr) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
/**
 * @param {?} input
 * @return {?}
 */
/**
 * @param {?} input
 * @return {?}
 */
function stringToArrayBuffer(input) {
    var /** @type {?} */ view = new Uint16Array(input.length);
    for (var /** @type {?} */ i = 0, /** @type {?} */ strLen = input.length; i < strLen; i++) {
        view[i] = input.charCodeAt(i);
    }
    return view.buffer;
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 * @param {?=} rawParams
 * @return {?}
 */
function paramParser(rawParams) {
    if (rawParams === void 0) { rawParams = ''; }
    var /** @type {?} */ map = new Map();
    if (rawParams.length > 0) {
        var /** @type {?} */ params = rawParams.split('&');
        params.forEach(function (param) {
            var /** @type {?} */ eqIdx = param.indexOf('=');
            var _a = eqIdx == -1 ? [param, ''] : [param.slice(0, eqIdx), param.slice(eqIdx + 1)], key = _a[0], val = _a[1];
            var /** @type {?} */ list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        });
    }
    return map;
}
/**
 * \@experimental
 *
 */
var QueryEncoder = (function () {
    function QueryEncoder() {
    }
    /**
     * @param {?} k
     * @return {?}
     */
    QueryEncoder.prototype.encodeKey = function (k) { return standardEncoding(k); };
    /**
     * @param {?} v
     * @return {?}
     */
    QueryEncoder.prototype.encodeValue = function (v) { return standardEncoding(v); };
    return QueryEncoder;
}());
/**
 * @param {?} v
 * @return {?}
 */
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * Map-like representation of url search parameters, based on
 * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
 * with several extensions for merging URLSearchParams objects:
 *   - setAll()
 *   - appendAll()
 *   - replaceAll()
 *
 * This class accepts an optional second parameter of ${\@link QueryEncoder},
 * which is used to serialize parameters before making a request. By default,
 * `QueryEncoder` encodes keys and values of parameters using `encodeURIComponent`,
 * and then un-encodes certain characters that are allowed to be part of the query
 * according to IETF RFC 3986: https://tools.ietf.org/html/rfc3986.
 *
 * These are the characters that are not encoded: `! $ \' ( ) * + , ; A 9 - . _ ~ ? /`
 *
 * If the set of allowed query characters is not acceptable for a particular backend,
 * `QueryEncoder` can be subclassed and provided as the 2nd argument to URLSearchParams.
 *
 * ```
 * import {URLSearchParams, QueryEncoder} from '\@angular/http';
 * class MyQueryEncoder extends QueryEncoder {
 *   encodeKey(k: string): string {
 *     return myEncodingFunction(k);
 *   }
 *
 *   encodeValue(v: string): string {
 *     return myEncodingFunction(v);
 *   }
 * }
 *
 * let params = new URLSearchParams('', new MyQueryEncoder());
 * ```
 * \@experimental
 */
var URLSearchParams = (function () {
    /**
     * @param {?=} rawParams
     * @param {?=} queryEncoder
     */
    function URLSearchParams(rawParams, queryEncoder) {
        if (rawParams === void 0) { rawParams = ''; }
        if (queryEncoder === void 0) { queryEncoder = new QueryEncoder(); }
        this.rawParams = rawParams;
        this.queryEncoder = queryEncoder;
        this.paramsMap = paramParser(rawParams);
    }
    /**
     * @return {?}
     */
    URLSearchParams.prototype.clone = function () {
        var /** @type {?} */ clone = new URLSearchParams('', this.queryEncoder);
        clone.appendAll(this);
        return clone;
    };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.has = function (param) { return this.paramsMap.has(param); };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.get = function (param) {
        var /** @type {?} */ storedParam = this.paramsMap.get(param);
        return Array.isArray(storedParam) ? storedParam[0] : null;
    };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.getAll = function (param) { return this.paramsMap.get(param) || []; };
    /**
     * @param {?} param
     * @param {?} val
     * @return {?}
     */
    URLSearchParams.prototype.set = function (param, val) {
        if (val === void 0 || val === null) {
            this.delete(param);
            return;
        }
        var /** @type {?} */ list = this.paramsMap.get(param) || [];
        list.length = 0;
        list.push(val);
        this.paramsMap.set(param, list);
    };
    /**
     * @param {?} searchParams
     * @return {?}
     */
    URLSearchParams.prototype.setAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var /** @type {?} */ list = _this.paramsMap.get(param) || [];
            list.length = 0;
            list.push(value[0]);
            _this.paramsMap.set(param, list);
        });
    };
    /**
     * @param {?} param
     * @param {?} val
     * @return {?}
     */
    URLSearchParams.prototype.append = function (param, val) {
        if (val === void 0 || val === null)
            return;
        var /** @type {?} */ list = this.paramsMap.get(param) || [];
        list.push(val);
        this.paramsMap.set(param, list);
    };
    /**
     * @param {?} searchParams
     * @return {?}
     */
    URLSearchParams.prototype.appendAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var /** @type {?} */ list = _this.paramsMap.get(param) || [];
            for (var /** @type {?} */ i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    /**
     * @param {?} searchParams
     * @return {?}
     */
    URLSearchParams.prototype.replaceAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var /** @type {?} */ list = _this.paramsMap.get(param) || [];
            list.length = 0;
            for (var /** @type {?} */ i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    /**
     * @return {?}
     */
    URLSearchParams.prototype.toString = function () {
        var _this = this;
        var /** @type {?} */ paramsList = [];
        this.paramsMap.forEach(function (values, k) {
            values.forEach(function (v) { return paramsList.push(_this.queryEncoder.encodeKey(k) + '=' + _this.queryEncoder.encodeValue(v)); });
        });
        return paramsList.join('&');
    };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.delete = function (param) { this.paramsMap.delete(param); };
    return URLSearchParams;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * HTTP request body used by both {\@link Request} and {\@link Response}
 * https://fetch.spec.whatwg.org/#body
 * @abstract
 */
var Body = (function () {
    function Body() {
    }
    /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     * @return {?}
     */
    Body.prototype.json = function () {
        if (typeof this._body === 'string') {
            return JSON.parse(/** @type {?} */ (this._body));
        }
        if (this._body instanceof ArrayBuffer) {
            return JSON.parse(this.text());
        }
        return this._body;
    };
    /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     *
     * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
     * bytes in the buffer will be interpreted. Valid values are:
     *
     * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
     *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
     *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
     *   into consideration. This is the default behavior to avoid breaking apps, but should be
     *   considered deprecated.
     *
     * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
     * @param {?=} encodingHint
     * @return {?}
     */
    Body.prototype.text = function (encodingHint) {
        if (encodingHint === void 0) { encodingHint = 'legacy'; }
        if (this._body instanceof URLSearchParams) {
            return this._body.toString();
        }
        if (this._body instanceof ArrayBuffer) {
            switch (encodingHint) {
                case 'legacy':
                    return String.fromCharCode.apply(null, new Uint16Array(/** @type {?} */ (this._body)));
                case 'iso-8859':
                    return String.fromCharCode.apply(null, new Uint8Array(/** @type {?} */ (this._body)));
                default:
                    throw new Error("Invalid value for encodingHint: " + encodingHint);
            }
        }
        if (this._body == null) {
            return '';
        }
        if (typeof this._body === 'object') {
            return JSON.stringify(this._body, null, 2);
        }
        return this._body.toString();
    };
    /**
     * Return the body as an ArrayBuffer
     * @return {?}
     */
    Body.prototype.arrayBuffer = function () {
        if (this._body instanceof ArrayBuffer) {
            return (this._body);
        }
        return stringToArrayBuffer(this.text());
    };
    /**
     * Returns the request's body as a Blob, assuming that body exists.
     * @return {?}
     */
    Body.prototype.blob = function () {
        if (this._body instanceof Blob) {
            return (this._body);
        }
        if (this._body instanceof ArrayBuffer) {
            return new Blob([this._body]);
        }
        throw new Error('The request body isn\'t either a blob or an array buffer');
    };
    return Body;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates `Response` instances from provided values.
 *
 * Though this object isn't
 * usually instantiated by end-users, it is the primary object interacted with when it comes time to
 * add data to a view.
 *
 * ### Example
 *
 * ```
 * http.request('my-friends.txt').subscribe(response => this.friends = response.text());
 * ```
 *
 * The Response's interface is inspired by the Response constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#response-class), but is considered a static value whose body
 * can be accessed many times. There are other differences in the implementation, but this is the
 * most significant.
 *
 * \@experimental
 */
var Response = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](Response, _super);
    /**
     * @param {?} responseOptions
     */
    function Response(responseOptions) {
        var _this = _super.call(this) || this;
        _this._body = responseOptions.body;
        _this.status = responseOptions.status;
        _this.ok = (_this.status >= 200 && _this.status <= 299);
        _this.statusText = responseOptions.statusText;
        _this.headers = responseOptions.headers;
        _this.type = responseOptions.type;
        _this.url = responseOptions.url;
        return _this;
    }
    /**
     * @return {?}
     */
    Response.prototype.toString = function () {
        return "Response with status: " + this.status + " " + this.statusText + " for URL: " + this.url;
    };
    return Response;
}(Body));
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _nextRequestId = 0;
var JSONP_HOME = '__ng_jsonp__';
var _jsonpConnections = null;
/**
 * @return {?}
 */
function _getJsonpConnections() {
    var /** @type {?} */ w = typeof window == 'object' ? window : {};
    if (_jsonpConnections === null) {
        _jsonpConnections = w[JSONP_HOME] = {};
    }
    return _jsonpConnections;
}
var BrowserJsonp = (function () {
    function BrowserJsonp() {
    }
    /**
     * @param {?} url
     * @return {?}
     */
    BrowserJsonp.prototype.build = function (url) {
        var /** @type {?} */ node = document.createElement('script');
        node.src = url;
        return node;
    };
    /**
     * @return {?}
     */
    BrowserJsonp.prototype.nextRequestID = function () { return "__req" + _nextRequestId++; };
    /**
     * @param {?} id
     * @return {?}
     */
    BrowserJsonp.prototype.requestCallback = function (id) { return JSONP_HOME + "." + id + ".finished"; };
    /**
     * @param {?} id
     * @param {?} connection
     * @return {?}
     */
    BrowserJsonp.prototype.exposeConnection = function (id, connection) {
        var /** @type {?} */ connections = _getJsonpConnections();
        connections[id] = connection;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    BrowserJsonp.prototype.removeConnection = function (id) {
        var /** @type {?} */ connections = _getJsonpConnections();
        connections[id] = null;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserJsonp.prototype.send = function (node) { document.body.appendChild(/** @type {?} */ ((node))); };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserJsonp.prototype.cleanup = function (node) {
        if (node.parentNode) {
            node.parentNode.removeChild(/** @type {?} */ ((node)));
        }
    };
    return BrowserJsonp;
}());
BrowserJsonp.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
BrowserJsonp.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
/**
 * Abstract base class for an in-flight JSONP request.
 *
 * \@experimental
 * @abstract
 */
var JSONPConnection = (function () {
    function JSONPConnection() {
    }
    /**
     * Callback called when the JSONP request completes, to notify the application
     * of the new data.
     * @abstract
     * @param {?=} data
     * @return {?}
     */
    JSONPConnection.prototype.finished = function (data) { };
    return JSONPConnection;
}());
var JSONPConnection_ = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](JSONPConnection_, _super);
    /**
     * @param {?} req
     * @param {?} _dom
     * @param {?=} baseResponseOptions
     */
    function JSONPConnection_(req, _dom, baseResponseOptions) {
        var _this = _super.call(this) || this;
        _this._dom = _dom;
        _this.baseResponseOptions = baseResponseOptions;
        _this._finished = false;
        if (req.method !== RequestMethod.Get) {
            throw new TypeError(JSONP_ERR_WRONG_METHOD);
        }
        _this.request = req;
        _this.response = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (responseObserver) {
            _this.readyState = ReadyState.Loading;
            var id = _this._id = _dom.nextRequestID();
            _dom.exposeConnection(id, _this);
            // Workaround Dart
            // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);
            var callback = _dom.requestCallback(_this._id);
            var url = req.url;
            if (url.indexOf('=JSONP_CALLBACK&') > -1) {
                url = url.replace('=JSONP_CALLBACK&', "=" + callback + "&");
            }
            else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
                url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ("=" + callback);
            }
            var script = _this._script = _dom.build(url);
            var onLoad = function (event) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                if (!_this._finished) {
                    var responseOptions_1 = new ResponseOptions({ body: JSONP_ERR_NO_CALLBACK, type: ResponseType.Error, url: url });
                    if (baseResponseOptions) {
                        responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
                    }
                    responseObserver.error(new Response(responseOptions_1));
                    return;
                }
                var responseOptions = new ResponseOptions({ body: _this._responseData, url: url });
                if (_this.baseResponseOptions) {
                    responseOptions = _this.baseResponseOptions.merge(responseOptions);
                }
                responseObserver.next(new Response(responseOptions));
                responseObserver.complete();
            };
            var onError = function (error) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                var responseOptions = new ResponseOptions({ body: error.message, type: ResponseType.Error });
                if (baseResponseOptions) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            script.addEventListener('load', onLoad);
            script.addEventListener('error', onError);
            _dom.send(script);
            return function () {
                _this.readyState = ReadyState.Cancelled;
                script.removeEventListener('load', onLoad);
                script.removeEventListener('error', onError);
                _this._dom.cleanup(script);
            };
        });
        return _this;
    }
    /**
     * @param {?=} data
     * @return {?}
     */
    JSONPConnection_.prototype.finished = function (data) {
        // Don't leak connections
        this._finished = true;
        this._dom.removeConnection(this._id);
        if (this.readyState === ReadyState.Cancelled)
            return;
        this._responseData = data;
    };
    return JSONPConnection_;
}(JSONPConnection));
/**
 * A {\@link ConnectionBackend} that uses the JSONP strategy of making requests.
 *
 * \@experimental
 * @abstract
 */
var JSONPBackend = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](JSONPBackend, _super);
    function JSONPBackend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JSONPBackend;
}(ConnectionBackend));
var JSONPBackend_ = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](JSONPBackend_, _super);
    /**
     * @param {?} _browserJSONP
     * @param {?} _baseResponseOptions
     */
    function JSONPBackend_(_browserJSONP, _baseResponseOptions) {
        var _this = _super.call(this) || this;
        _this._browserJSONP = _browserJSONP;
        _this._baseResponseOptions = _baseResponseOptions;
        return _this;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    JSONPBackend_.prototype.createConnection = function (request) {
        return new JSONPConnection_(request, this._browserJSONP, this._baseResponseOptions);
    };
    return JSONPBackend_;
}(JSONPBackend));
JSONPBackend_.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
JSONPBackend_.ctorParameters = function () { return [
    { type: BrowserJsonp, },
    { type: ResponseOptions, },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Creates connections using `XMLHttpRequest`. Given a fully-qualified
 * request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
 * request.
 *
 * This class would typically not be created or interacted with directly inside applications, though
 * the {\@link MockConnection} may be interacted with in tests.
 *
 * \@experimental
 */
var XHRConnection = (function () {
    /**
     * @param {?} req
     * @param {?} browserXHR
     * @param {?=} baseResponseOptions
     */
    function XHRConnection(req, browserXHR, baseResponseOptions) {
        var _this = this;
        this.request = req;
        this.response = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (responseObserver) {
            var _xhr = browserXHR.build();
            _xhr.open(RequestMethod[req.method].toUpperCase(), req.url);
            if (req.withCredentials != null) {
                _xhr.withCredentials = req.withCredentials;
            }
            // load event handler
            var onLoad = function () {
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status = _xhr.status === 1223 ? 204 : _xhr.status;
                var body = null;
                // HTTP 204 means no content
                if (status !== 204) {
                    // responseText is the old-school way of retrieving response (supported by IE8 & 9)
                    // response/responseType properties were introduced in ResourceLoader Level2 spec
                    // (supported by IE10)
                    body = (typeof _xhr.response === 'undefined') ? _xhr.responseText : _xhr.response;
                    // Implicitly strip a potential XSSI prefix.
                    if (typeof body === 'string') {
                        body = body.replace(XSSI_PREFIX, '');
                    }
                }
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status === 0) {
                    status = body ? 200 : 0;
                }
                var headers = Headers.fromResponseHeaderString(_xhr.getAllResponseHeaders());
                // IE 9 does not provide the way to get URL of response
                var url = getResponseURL(_xhr) || req.url;
                var statusText = _xhr.statusText || 'OK';
                var responseOptions = new ResponseOptions({ body: body, status: status, headers: headers, statusText: statusText, url: url });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                var response = new Response(responseOptions);
                response.ok = isSuccess(status);
                if (response.ok) {
                    responseObserver.next(response);
                    // TODO(gdi2290): defer complete if array buffer until done
                    responseObserver.complete();
                    return;
                }
                responseObserver.error(response);
            };
            // error event handler
            var onError = function (err) {
                var responseOptions = new ResponseOptions({
                    body: err,
                    type: ResponseType.Error,
                    status: _xhr.status,
                    statusText: _xhr.statusText,
                });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            _this.setDetectedContentType(req, _xhr);
            if (req.headers == null) {
                req.headers = new Headers();
            }
            if (!req.headers.has('Accept')) {
                req.headers.append('Accept', 'application/json, text/plain, */*');
            }
            req.headers.forEach(function (values, name) { return _xhr.setRequestHeader(name, values.join(',')); });
            // Select the correct buffer type to store the response
            if (req.responseType != null && _xhr.responseType != null) {
                switch (req.responseType) {
                    case ResponseContentType.ArrayBuffer:
                        _xhr.responseType = 'arraybuffer';
                        break;
                    case ResponseContentType.Json:
                        _xhr.responseType = 'json';
                        break;
                    case ResponseContentType.Text:
                        _xhr.responseType = 'text';
                        break;
                    case ResponseContentType.Blob:
                        _xhr.responseType = 'blob';
                        break;
                    default:
                        throw new Error('The selected responseType is not supported');
                }
            }
            _xhr.addEventListener('load', onLoad);
            _xhr.addEventListener('error', onError);
            _xhr.send(_this.request.getBody());
            return function () {
                _xhr.removeEventListener('load', onLoad);
                _xhr.removeEventListener('error', onError);
                _xhr.abort();
            };
        });
    }
    /**
     * @param {?} req
     * @param {?} _xhr
     * @return {?}
     */
    XHRConnection.prototype.setDetectedContentType = function (req /** TODO Request */, _xhr /** XMLHttpRequest */) {
        // Skip if a custom Content-Type header is provided
        if (req.headers != null && req.headers.get('Content-Type') != null) {
            return;
        }
        // Set the detected content type
        switch (req.contentType) {
            case ContentType.NONE:
                break;
            case ContentType.JSON:
                _xhr.setRequestHeader('content-type', 'application/json');
                break;
            case ContentType.FORM:
                _xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                break;
            case ContentType.TEXT:
                _xhr.setRequestHeader('content-type', 'text/plain');
                break;
            case ContentType.BLOB:
                var /** @type {?} */ blob = req.blob();
                if (blob.type) {
                    _xhr.setRequestHeader('content-type', blob.type);
                }
                break;
        }
    };
    return XHRConnection;
}());
/**
 * `XSRFConfiguration` sets up Cross Site Request Forgery (XSRF) protection for the application
 * using a cookie. See https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)
 * for more information on XSRF.
 *
 * Applications can configure custom cookie and header names by binding an instance of this class
 * with different `cookieName` and `headerName` values. See the main HTTP documentation for more
 * details.
 *
 * \@experimental
 */
var CookieXSRFStrategy = (function () {
    /**
     * @param {?=} _cookieName
     * @param {?=} _headerName
     */
    function CookieXSRFStrategy(_cookieName, _headerName) {
        if (_cookieName === void 0) { _cookieName = 'XSRF-TOKEN'; }
        if (_headerName === void 0) { _headerName = 'X-XSRF-TOKEN'; }
        this._cookieName = _cookieName;
        this._headerName = _headerName;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    CookieXSRFStrategy.prototype.configureRequest = function (req) {
        var /** @type {?} */ xsrfToken = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["ɵgetDOM"])().getCookie(this._cookieName);
        if (xsrfToken) {
            req.headers.set(this._headerName, xsrfToken);
        }
    };
    return CookieXSRFStrategy;
}());
/**
 * Creates {\@link XHRConnection} instances.
 *
 * This class would typically not be used by end users, but could be
 * overridden if a different backend implementation should be used,
 * such as in a node backend.
 *
 * ### Example
 *
 * ```
 * import {Http, MyNodeBackend, HTTP_PROVIDERS, BaseRequestOptions} from '\@angular/http';
 * \@Component({
 *   viewProviders: [
 *     HTTP_PROVIDERS,
 *     {provide: Http, useFactory: (backend, options) => {
 *       return new Http(backend, options);
 *     }, deps: [MyNodeBackend, BaseRequestOptions]}]
 * })
 * class MyComponent {
 *   constructor(http:Http) {
 *     http.request('people.json').subscribe(res => this.people = res.json());
 *   }
 * }
 * ```
 * \@experimental
 */
var XHRBackend = (function () {
    /**
     * @param {?} _browserXHR
     * @param {?} _baseResponseOptions
     * @param {?} _xsrfStrategy
     */
    function XHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy) {
        this._browserXHR = _browserXHR;
        this._baseResponseOptions = _baseResponseOptions;
        this._xsrfStrategy = _xsrfStrategy;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    XHRBackend.prototype.createConnection = function (request) {
        this._xsrfStrategy.configureRequest(request);
        return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
    };
    return XHRBackend;
}());
XHRBackend.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
XHRBackend.ctorParameters = function () { return [
    { type: BrowserXhr, },
    { type: ResponseOptions, },
    { type: XSRFStrategy, },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a request options object to be optionally provided when instantiating a
 * {\@link Request}.
 *
 * This class is based on the `RequestInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#requestinit).
 *
 * All values are null by default. Typical defaults can be found in the {\@link BaseRequestOptions}
 * class, which sub-classes `RequestOptions`.
 *
 * ```typescript
 * import {RequestOptions, Request, RequestMethod} from '\@angular/http';
 *
 * const options = new RequestOptions({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * });
 * const req = new Request(options);
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // https://google.com
 * ```
 *
 * \@experimental
 */
var RequestOptions = (function () {
    /**
     * @param {?=} opts
     */
    function RequestOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var method = opts.method, headers = opts.headers, body = opts.body, url = opts.url, search = opts.search, params = opts.params, withCredentials = opts.withCredentials, responseType = opts.responseType;
        this.method = method != null ? normalizeMethodName(method) : null;
        this.headers = headers != null ? headers : null;
        this.body = body != null ? body : null;
        this.url = url != null ? url : null;
        this.params = this._mergeSearchParams(params || search);
        this.withCredentials = withCredentials != null ? withCredentials : null;
        this.responseType = responseType != null ? responseType : null;
    }
    Object.defineProperty(RequestOptions.prototype, "search", {
        /**
         * @deprecated from 4.0.0. Use params instead.
         * @return {?}
         */
        get: function () { return this.params; },
        /**
         * @deprecated from 4.0.0. Use params instead.
         * @param {?} params
         * @return {?}
         */
        set: function (params) { this.params = params; },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '\@angular/http';
     *
     * const options = new RequestOptions({
     *   method: RequestMethod.Post
     * });
     * const req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     * @param {?=} options
     * @return {?}
     */
    RequestOptions.prototype.merge = function (options) {
        return new RequestOptions({
            method: options && options.method != null ? options.method : this.method,
            headers: options && options.headers != null ? options.headers : new Headers(this.headers),
            body: options && options.body != null ? options.body : this.body,
            url: options && options.url != null ? options.url : this.url,
            params: options && this._mergeSearchParams(options.params || options.search),
            withCredentials: options && options.withCredentials != null ? options.withCredentials :
                this.withCredentials,
            responseType: options && options.responseType != null ? options.responseType :
                this.responseType
        });
    };
    /**
     * @param {?=} params
     * @return {?}
     */
    RequestOptions.prototype._mergeSearchParams = function (params) {
        if (!params)
            return this.params;
        if (params instanceof URLSearchParams) {
            return params.clone();
        }
        if (typeof params === 'string') {
            return new URLSearchParams(params);
        }
        return this._parseParams(params);
    };
    /**
     * @param {?=} objParams
     * @return {?}
     */
    RequestOptions.prototype._parseParams = function (objParams) {
        var _this = this;
        if (objParams === void 0) { objParams = {}; }
        var /** @type {?} */ params = new URLSearchParams();
        Object.keys(objParams).forEach(function (key) {
            var /** @type {?} */ value = objParams[key];
            if (Array.isArray(value)) {
                value.forEach(function (item) { return _this._appendParam(key, item, params); });
            }
            else {
                _this._appendParam(key, value, params);
            }
        });
        return params;
    };
    /**
     * @param {?} key
     * @param {?} value
     * @param {?} params
     * @return {?}
     */
    RequestOptions.prototype._appendParam = function (key, value, params) {
        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }
        params.append(key, value);
    };
    return RequestOptions;
}());
/**
 * Subclass of {\@link RequestOptions}, with default values.
 *
 * Default values:
 *  * method: {\@link RequestMethod RequestMethod.Get}
 *  * headers: empty {\@link Headers} object
 *
 * This class could be extended and bound to the {\@link RequestOptions} class
 * when configuring an {\@link Injector}, in order to override the default options
 * used by {\@link Http} to create and send {\@link Request Requests}.
 *
 * ```typescript
 * import {BaseRequestOptions, RequestOptions} from '\@angular/http';
 *
 * class MyOptions extends BaseRequestOptions {
 *   search: string = 'coreTeam=true';
 * }
 *
 * {provide: RequestOptions, useClass: MyOptions};
 * ```
 *
 * The options could also be extended when manually creating a {\@link Request}
 * object.
 *
 * ```
 * import {BaseRequestOptions, Request, RequestMethod} from '\@angular/http';
 *
 * const options = new BaseRequestOptions();
 * const req = new Request(options.merge({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * }));
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // null
 * console.log('req.url:', req.url); // https://google.com
 * ```
 *
 * \@experimental
 */
var BaseRequestOptions = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](BaseRequestOptions, _super);
    function BaseRequestOptions() {
        return _super.call(this, { method: RequestMethod.Get, headers: new Headers() }) || this;
    }
    return BaseRequestOptions;
}(RequestOptions));
BaseRequestOptions.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
BaseRequestOptions.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates `Request` instances from provided values.
 *
 * The Request's interface is inspired by the Request constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#request-class),
 * but is considered a static value whose body can be accessed many times. There are other
 * differences in the implementation, but this is the most significant.
 *
 * `Request` instances are typically created by higher-level classes, like {\@link Http} and
 * {\@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
 * One such example is when creating services that wrap higher-level services, like {\@link Http},
 * where it may be useful to generate a `Request` with arbitrary headers and search params.
 *
 * ```typescript
 * import {Injectable, Injector} from '\@angular/core';
 * import {HTTP_PROVIDERS, Http, Request, RequestMethod} from '\@angular/http';
 *
 * \@Injectable()
 * class AutoAuthenticator {
 *   constructor(public http:Http) {}
 *   request(url:string) {
 *     return this.http.request(new Request({
 *       method: RequestMethod.Get,
 *       url: url,
 *       search: 'password=123'
 *     }));
 *   }
 * }
 *
 * var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, AutoAuthenticator]);
 * var authenticator = injector.get(AutoAuthenticator);
 * authenticator.request('people.json').subscribe(res => {
 *   //URL should have included '?password=123'
 *   console.log('people', res.json());
 * });
 * ```
 *
 * \@experimental
 */
var Request = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](Request, _super);
    /**
     * @param {?} requestOptions
     */
    function Request(requestOptions) {
        var _this = _super.call(this) || this;
        // TODO: assert that url is present
        var url = requestOptions.url;
        _this.url = requestOptions.url;
        var paramsArg = requestOptions.params || requestOptions.search;
        if (paramsArg) {
            var params = void 0;
            if (typeof paramsArg === 'object' && !(paramsArg instanceof URLSearchParams)) {
                params = urlEncodeParams(paramsArg).toString();
            }
            else {
                params = paramsArg.toString();
            }
            if (params.length > 0) {
                var prefix = '?';
                if (_this.url.indexOf('?') != -1) {
                    prefix = (_this.url[_this.url.length - 1] == '&') ? '' : '&';
                }
                // TODO: just delete search-query-looking string in url?
                _this.url = url + prefix + params;
            }
        }
        _this._body = requestOptions.body;
        _this.method = normalizeMethodName(requestOptions.method);
        // TODO(jeffbcross): implement behavior
        // Defaults to 'omit', consistent with browser
        _this.headers = new Headers(requestOptions.headers);
        _this.contentType = _this.detectContentType();
        _this.withCredentials = requestOptions.withCredentials;
        _this.responseType = requestOptions.responseType;
        return _this;
    }
    /**
     * Returns the content type enum based on header options.
     * @return {?}
     */
    Request.prototype.detectContentType = function () {
        switch (this.headers.get('content-type')) {
            case 'application/json':
                return ContentType.JSON;
            case 'application/x-www-form-urlencoded':
                return ContentType.FORM;
            case 'multipart/form-data':
                return ContentType.FORM_DATA;
            case 'text/plain':
            case 'text/html':
                return ContentType.TEXT;
            case 'application/octet-stream':
                return this._body instanceof ArrayBuffer$1 ? ContentType.ARRAY_BUFFER : ContentType.BLOB;
            default:
                return this.detectContentTypeFromBody();
        }
    };
    /**
     * Returns the content type of request's body based on its type.
     * @return {?}
     */
    Request.prototype.detectContentTypeFromBody = function () {
        if (this._body == null) {
            return ContentType.NONE;
        }
        else if (this._body instanceof URLSearchParams) {
            return ContentType.FORM;
        }
        else if (this._body instanceof FormData) {
            return ContentType.FORM_DATA;
        }
        else if (this._body instanceof Blob$1) {
            return ContentType.BLOB;
        }
        else if (this._body instanceof ArrayBuffer$1) {
            return ContentType.ARRAY_BUFFER;
        }
        else if (this._body && typeof this._body === 'object') {
            return ContentType.JSON;
        }
        else {
            return ContentType.TEXT;
        }
    };
    /**
     * Returns the request's body according to its type. If body is undefined, return
     * null.
     * @return {?}
     */
    Request.prototype.getBody = function () {
        switch (this.contentType) {
            case ContentType.JSON:
                return this.text();
            case ContentType.FORM:
                return this.text();
            case ContentType.FORM_DATA:
                return this._body;
            case ContentType.TEXT:
                return this.text();
            case ContentType.BLOB:
                return this.blob();
            case ContentType.ARRAY_BUFFER:
                return this.arrayBuffer();
            default:
                return null;
        }
    };
    return Request;
}(Body));
/**
 * @param {?} params
 * @return {?}
 */
function urlEncodeParams(params) {
    var /** @type {?} */ searchParams = new URLSearchParams();
    Object.keys(params).forEach(function (key) {
        var /** @type {?} */ value = params[key];
        if (value && Array.isArray(value)) {
            value.forEach(function (element) { return searchParams.append(key, element.toString()); });
        }
        else {
            searchParams.append(key, value.toString());
        }
    });
    return searchParams;
}
var noop = function () { };
var w = typeof window == 'object' ? window : noop;
var FormData = ((w) /** TODO #9100 */)['FormData'] || noop;
var Blob$1 = ((w) /** TODO #9100 */)['Blob'] || noop;
var ArrayBuffer$1 = ((w) /** TODO #9100 */)['ArrayBuffer'] || noop;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} backend
 * @param {?} request
 * @return {?}
 */
function httpRequest(backend, request) {
    return backend.createConnection(request).response;
}
/**
 * @param {?} defaultOpts
 * @param {?} providedOpts
 * @param {?} method
 * @param {?} url
 * @return {?}
 */
function mergeOptions(defaultOpts, providedOpts, method, url) {
    var /** @type {?} */ newOptions = defaultOpts;
    if (providedOpts) {
        // Hack so Dart can used named parameters
        return (newOptions.merge(new RequestOptions({
            method: providedOpts.method || method,
            url: providedOpts.url || url,
            search: providedOpts.search,
            params: providedOpts.params,
            headers: providedOpts.headers,
            body: providedOpts.body,
            withCredentials: providedOpts.withCredentials,
            responseType: providedOpts.responseType
        })));
    }
    return (newOptions.merge(new RequestOptions({ method: method, url: url })));
}
/**
 * Performs http requests using `XMLHttpRequest` as the default backend.
 *
 * `Http` is available as an injectable class, with methods to perform http requests. Calling
 * `request` returns an `Observable` which will emit a single {\@link Response} when a
 * response is received.
 *
 * ### Example
 *
 * ```typescript
 * import {Http, HTTP_PROVIDERS} from '\@angular/http';
 * import 'rxjs/add/operator/map'
 * \@Component({
 *   selector: 'http-app',
 *   viewProviders: [HTTP_PROVIDERS],
 *   templateUrl: 'people.html'
 * })
 * class PeopleComponent {
 *   constructor(http: Http) {
 *     http.get('people.json')
 *       // Call map on the response observable to get the parsed people object
 *       .map(res => res.json())
 *       // Subscribe to the observable to get the parsed people object and attach it to the
 *       // component
 *       .subscribe(people => this.people = people);
 *   }
 * }
 * ```
 *
 *
 * ### Example
 *
 * ```
 * http.get('people.json').subscribe((res:Response) => this.people = res.json());
 * ```
 *
 * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
 * {\@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
 * the {\@link XHRBackend} provider, as in the following example:
 *
 * ### Example
 *
 * ```typescript
 * import {BaseRequestOptions, Http} from '\@angular/http';
 * import {MockBackend} from '\@angular/http/testing';
 * var injector = Injector.resolveAndCreate([
 *   BaseRequestOptions,
 *   MockBackend,
 *   {provide: Http, useFactory:
 *       function(backend, defaultOptions) {
 *         return new Http(backend, defaultOptions);
 *       },
 *       deps: [MockBackend, BaseRequestOptions]}
 * ]);
 * var http = injector.get(Http);
 * http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
 * ```
 *
 * \@experimental
 */
var Http = (function () {
    /**
     * @param {?} _backend
     * @param {?} _defaultOptions
     */
    function Http(_backend, _defaultOptions) {
        this._backend = _backend;
        this._defaultOptions = _defaultOptions;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {\@link BaseRequestOptions} before performing the request.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.request = function (url, options) {
        var /** @type {?} */ responseObservable;
        if (typeof url === 'string') {
            responseObservable = httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, /** @type {?} */ (url))));
        }
        else if (url instanceof Request) {
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    /**
     * Performs a request with `get` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.get = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
    };
    /**
     * Performs a request with `post` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.post = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Post, url)));
    };
    /**
     * Performs a request with `put` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.put = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Put, url)));
    };
    /**
     * Performs a request with `delete` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.delete = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Delete, url)));
    };
    /**
     * Performs a request with `patch` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.patch = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Patch, url)));
    };
    /**
     * Performs a request with `head` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.head = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Head, url)));
    };
    /**
     * Performs a request with `options` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.options = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Options, url)));
    };
    return Http;
}());
Http.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
Http.ctorParameters = function () { return [
    { type: ConnectionBackend, },
    { type: RequestOptions, },
]; };
/**
 * \@experimental
 */
var Jsonp = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](Jsonp, _super);
    /**
     * @param {?} backend
     * @param {?} defaultOptions
     */
    function Jsonp(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {\@link BaseRequestOptions} before performing the request.
     *
     * \@security Regular XHR is the safest alternative to JSONP for most applications, and is
     * supported by all current browsers. Because JSONP creates a `<script>` element with
     * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
     * source could expose your application to XSS risks. Data exposed by JSONP may also be
     * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
     * future security issues (e.g. content sniffing).  For more detail, see the
     * [Security Guide](http://g.co/ng/security).
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Jsonp.prototype.request = function (url, options) {
        var /** @type {?} */ responseObservable;
        if (typeof url === 'string') {
            url =
                new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, /** @type {?} */ (url)));
        }
        if (url instanceof Request) {
            if (url.method !== RequestMethod.Get) {
                throw new Error('JSONP requests must use GET request method.');
            }
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    return Jsonp;
}(Http));
Jsonp.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
Jsonp.ctorParameters = function () { return [
    { type: ConnectionBackend, },
    { type: RequestOptions, },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * The http module provides services to perform http requests. To get started, see the {@link Http}
 * class.
 */
/**
 * @return {?}
 */
function _createDefaultCookieXSRFStrategy() {
    return new CookieXSRFStrategy();
}
/**
 * @param {?} xhrBackend
 * @param {?} requestOptions
 * @return {?}
 */
function httpFactory(xhrBackend, requestOptions) {
    return new Http(xhrBackend, requestOptions);
}
/**
 * @param {?} jsonpBackend
 * @param {?} requestOptions
 * @return {?}
 */
function jsonpFactory(jsonpBackend, requestOptions) {
    return new Jsonp(jsonpBackend, requestOptions);
}
/**
 * The module that includes http's providers
 *
 * \@experimental
 */
var HttpModule = (function () {
    function HttpModule() {
    }
    return HttpModule;
}());
HttpModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                providers: [
                    // TODO(pascal): use factory type annotations once supported in DI
                    // issue: https://github.com/angular/angular/issues/3183
                    { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] },
                    BrowserXhr,
                    { provide: RequestOptions, useClass: BaseRequestOptions },
                    { provide: ResponseOptions, useClass: BaseResponseOptions },
                    XHRBackend,
                    { provide: XSRFStrategy, useFactory: _createDefaultCookieXSRFStrategy },
                ],
            },] },
];
/**
 * @nocollapse
 */
HttpModule.ctorParameters = function () { return []; };
/**
 * The module that includes jsonp's providers
 *
 * \@experimental
 */
var JsonpModule = (function () {
    function JsonpModule() {
    }
    return JsonpModule;
}());
JsonpModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                providers: [
                    // TODO(pascal): use factory type annotations once supported in DI
                    // issue: https://github.com/angular/angular/issues/3183
                    { provide: Jsonp, useFactory: jsonpFactory, deps: [JSONPBackend, RequestOptions] },
                    BrowserJsonp,
                    { provide: RequestOptions, useClass: BaseRequestOptions },
                    { provide: ResponseOptions, useClass: BaseResponseOptions },
                    { provide: JSONPBackend, useClass: JSONPBackend_ },
                ],
            },] },
];
/**
 * @nocollapse
 */
JsonpModule.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the common package.
 */
/**
 * \@stable
 */
var VERSION = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["Version"]('4.3.4');
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the http package.
 */
// This file only reexports content of the `src` folder. Keep it that way.
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=http.es5.js.map


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        core_1.Component({
            template: '<h2>Page not found</h2>'
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
exports.PageNotFoundComponent = PageNotFoundComponent;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var store_1 = __webpack_require__(15);
var router_1 = __webpack_require__(11);
var users_service_1 = __webpack_require__(16);
__webpack_require__(40);
__webpack_require__(39);
var UserDetailComponent = (function () {
    function UserDetailComponent(store, route, usersService) {
        var _this = this;
        this.store = store;
        this.route = route;
        this.usersService = usersService;
        this.returnBook = function (book) { return _this.usersService.returnBook(_this.id, book.id); };
        store.select('user').subscribe(function (u) { _this.user = u[0]; });
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.usersService.getUser(_this.id);
        });
    };
    UserDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    UserDetailComponent = __decorate([
        core_1.Component({
            selector: 'users-main',
            template: "\n                  <div *ngIf=\"user\">\n                    <h2 style=\"margin-top: 1rem\">User id: {{user.id}}, user name: {{user.name}}</h2>\n                    <div *ngIf=\"user.books\" style=\"margin-top: 1rem\">\n                        <div *ngFor=\"let book of user.books\">\n                            <span >Book id: {{book.id}}, book name: {{book.name}}</span><button (click)=\"returnBook(book)\" style=\"margin-left: 0.5rem\">Return</button>    \n                        </div>\n                    </div>\n                  </div>\n\n                "
        }),
        __metadata("design:paramtypes", [store_1.Store, router_1.ActivatedRoute, users_service_1.UsersService])
    ], UserDetailComponent);
    return UserDetailComponent;
}());
exports.UserDetailComponent = UserDetailComponent;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FETCH_USER = 'FETCH_USER';
exports.RETURN_BOOK = 'RETURN_BOOK';
exports.UPDATE_USER = 'UPDATE_USER';
exports.user = function (state, _a) {
    if (state === void 0) { state = []; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case exports.FETCH_USER:
            console.log('fetching user');
            return state;
        case exports.RETURN_BOOK:
            console.log('return book');
            return state.map(function (user) {
                if (user.id === payload.userId) {
                    user.books = user.books.filter(function (book) { return book.id !== payload.bookId; });
                }
                return user;
            });
        case exports.UPDATE_USER:
            console.log('updating user');
            state = [payload];
            return state;
        default:
            return state;
    }
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var store_1 = __webpack_require__(15);
var users_service_1 = __webpack_require__(16);
__webpack_require__(40);
__webpack_require__(39);
var UsersAddComponent = (function () {
    function UsersAddComponent(store, usersService) {
        var _this = this;
        this.usersService = usersService;
        this.click = function (name) {
            _this.usersService.addUser(name);
        };
        this.users = store.select('users');
        // Observable.merge(
        //     this.click$,
        // )
        //     .subscribe(store.dispatch.bind(store))
    }
    UsersAddComponent = __decorate([
        core_1.Component({
            selector: 'users-add',
            template: "\n                <span>User name:</span><input #inputName type=\"text\" >\n                <!--<button (click)=\"click$.next(inputName.value)\" >Add</button>-->\n                <button (click)=\"click(inputName.value)\" >Add</button>\n                <users-list [users]=\"users\"></users-list>\n                "
        }),
        __metadata("design:paramtypes", [store_1.Store, users_service_1.UsersService])
    ], UsersAddComponent);
    return UsersAddComponent;
}());
exports.UsersAddComponent = UsersAddComponent;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var Observable_1 = __webpack_require__(38);
var Subject_1 = __webpack_require__(62);
var store_1 = __webpack_require__(15);
var router_1 = __webpack_require__(11);
var users_service_1 = __webpack_require__(16);
__webpack_require__(40);
__webpack_require__(39);
var users_reducer_1 = __webpack_require__(23);
var UsersMainComponent = (function () {
    function UsersMainComponent(store, usersService, router) {
        this.usersService = usersService;
        this.router = router;
        this.search$ = new Subject_1.Subject()
            .map(function (value) { return ({ type: users_reducer_1.SEARCH_USER, payload: value }); });
        this.users = store.select('users');
        store.dispatch({ type: users_reducer_1.CLEAN_FILTERS });
        Observable_1.Observable.merge(this.search$)
            .subscribe(store.dispatch.bind(store));
    }
    UsersMainComponent.prototype.addUserClick = function () {
        this.router.navigate(['/users/add']);
    };
    UsersMainComponent = __decorate([
        core_1.Component({
            selector: 'users-main',
            template: "\n                <input #inputUserSearch type=\"text\" placeholder=\"Enter name\">\n                <button #search (click)=\"search$.next(inputUserSearch.value)\">Search</button>\n                <button (click)=\"addUserClick()\">Add User</button>\n                <users-list [users]=\"users\"></users-list>       \n                "
        }),
        __metadata("design:paramtypes", [store_1.Store, users_service_1.UsersService, router_1.Router])
    ], UsersMainComponent);
    return UsersMainComponent;
}());
exports.UsersMainComponent = UsersMainComponent;


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(12);
var IObject = __webpack_require__(28);
var toObject = __webpack_require__(37);
var toLength = __webpack_require__(36);
var asc = __webpack_require__(77);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(10).f;
var create = __webpack_require__(55);
var redefineAll = __webpack_require__(31);
var ctx = __webpack_require__(12);
var anInstance = __webpack_require__(24);
var forOf = __webpack_require__(18);
var $iterDefine = __webpack_require__(86);
var step = __webpack_require__(88);
var setSpecies = __webpack_require__(96);
var DESCRIPTORS = __webpack_require__(8);
var fastKey = __webpack_require__(20).fastKey;
var validate = __webpack_require__(14);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 51 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
var document = __webpack_require__(6).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 53 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(8) && !__webpack_require__(9)(function () {
  return Object.defineProperty(__webpack_require__(52)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(1);
var dPs = __webpack_require__(91);
var enumBugKeys = __webpack_require__(53);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(52)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(80).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(94);
var enumBugKeys = __webpack_require__(53);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 57 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 58 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(3);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(22);

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(37);

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(5);

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = __webpack_require__(133);
var app_module_1 = __webpack_require__(70);
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(102);
__webpack_require__(103);
__webpack_require__(105);
__webpack_require__(104);
__webpack_require__(107);
__webpack_require__(106);
__webpack_require__(108);
__webpack_require__(109);
__webpack_require__(110);
module.exports = __webpack_require__(17).Reflect;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(111);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(113)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js!./tachyons.min.css", function() {
			var newContent = require("!!../../css-loader/index.js!./tachyons.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
(function (global, factory) {
	 true ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Zone$1 = (function (global) {
    var performance = global['performance'];
    function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
    }
    function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
    }
    mark('Zone');
    if (global['Zone']) {
        throw new Error('Zone already loaded.');
    }
    var Zone = (function () {
        function Zone(parent, zoneSpec) {
            this._properties = null;
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate =
                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }
        Zone.assertZonePatched = function () {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                    'has been overwritten.\n' +
                    'Most likely cause is that a Promise polyfill has been loaded ' +
                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                    'If you must load one, do so before loading zone.js.)');
            }
        };
        Object.defineProperty(Zone, "root", {
            get: function () {
                var zone = Zone.current;
                while (zone.parent) {
                    zone = zone.parent;
                }
                return zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Zone, "current", {
            get: function () {
                return _currentZoneFrame.zone;
            },
            enumerable: true,
            configurable: true
        });
        
        Object.defineProperty(Zone, "currentTask", {
            get: function () {
                return _currentTask;
            },
            enumerable: true,
            configurable: true
        });
        
        Zone.__load_patch = function (name, fn) {
            if (patches.hasOwnProperty(name)) {
                throw Error('Already loaded patch: ' + name);
            }
            else if (!global['__Zone_disable_' + name]) {
                var perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
            }
        };
        Object.defineProperty(Zone.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        
        Object.defineProperty(Zone.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        
        Zone.prototype.get = function (key) {
            var zone = this.getZoneWith(key);
            if (zone)
                return zone._properties[key];
        };
        Zone.prototype.getZoneWith = function (key) {
            var current = this;
            while (current) {
                if (current._properties.hasOwnProperty(key)) {
                    return current;
                }
                current = current._parent;
            }
            return null;
        };
        Zone.prototype.fork = function (zoneSpec) {
            if (!zoneSpec)
                throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
        };
        Zone.prototype.wrap = function (callback, source) {
            if (typeof callback !== 'function') {
                throw new Error('Expecting function got: ' + callback);
            }
            var _callback = this._zoneDelegate.intercept(this, callback, source);
            var zone = this;
            return function () {
                return zone.runGuarded(_callback, this, arguments, source);
            };
        };
        Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = undefined; }
            if (applyArgs === void 0) { applyArgs = null; }
            if (source === void 0) { source = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
            if (applyThis === void 0) { applyThis = null; }
            if (applyArgs === void 0) { applyArgs = null; }
            if (source === void 0) { source = null; }
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        };
        Zone.prototype.runTask = function (task, applyThis, applyArgs) {
            if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            }
            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return
            // we have to define an variable here, if not
            // typescript compiler will complain below
            var isNotScheduled = task.state === notScheduled;
            if (isNotScheduled && task.type === eventTask) {
                return;
            }
            var reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            var previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                    task.cancelFn = null;
                }
                try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                        reEntryGuard && task._transitionTo(scheduled, running);
                    }
                    else {
                        task.runCount = 0;
                        this._updateTaskCount(task, -1);
                        reEntryGuard &&
                            task._transitionTo(notScheduled, running, notScheduled);
                    }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
            }
        };
        Zone.prototype.scheduleTask = function (task) {
            if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                var newZone = this;
                while (newZone) {
                    if (newZone === task.zone) {
                        throw Error("can not reschedule task to " + this
                            .name + " which is descendants of the original zone " + task.zone.name);
                    }
                    newZone = newZone.parent;
                }
            }
            task._transitionTo(scheduling, notScheduled);
            var zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;
            try {
                task = this._zoneDelegate.scheduleTask(this, task);
            }
            catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled);
                // TODO: @JiaLiPassion, should we check the result from handleError?
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
            }
            if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
            }
            return task;
        };
        Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, null));
        };
        Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
        };
        Zone.prototype.cancelTask = function (task) {
            if (task.zone != this)
                throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            task._transitionTo(canceling, scheduled, running);
            try {
                this._zoneDelegate.cancelTask(this, task);
            }
            catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            this._updateTaskCount(task, -1);
            task._transitionTo(notScheduled, canceling);
            task.runCount = 0;
            return task;
        };
        Zone.prototype._updateTaskCount = function (task, count) {
            var zoneDelegates = task._zoneDelegates;
            if (count == -1) {
                task._zoneDelegates = null;
            }
            for (var i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
            }
        };
        return Zone;
    }());
    Zone.__symbol__ = __symbol__;
    var DELEGATE_ZS = {
        name: '',
        onHasTask: function (delegate, _, target, hasTaskState) {
            return delegate.hasTask(target, hasTaskState);
        },
        onScheduleTask: function (delegate, _, target, task) {
            return delegate.scheduleTask(target, task);
        },
        onInvokeTask: function (delegate, _, target, task, applyThis, applyArgs) { return delegate.invokeTask(target, task, applyThis, applyArgs); },
        onCancelTask: function (delegate, _, target, task) {
            return delegate.cancelTask(target, task);
        }
    };
    var ZoneDelegate = (function () {
        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
            this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
            this._interceptZS =
                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt =
                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone =
                zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt =
                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
            this._handleErrorZS =
                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt =
                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone =
                zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
            this._scheduleTaskZS =
                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt =
                zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone =
                zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
            this._invokeTaskZS =
                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt =
                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone =
                zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
            this._cancelTaskZS =
                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt =
                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone =
                zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
            if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;
                if (!zoneSpec.onScheduleTask) {
                    this._scheduleTaskZS = DELEGATE_ZS;
                    this._scheduleTaskDlgt = parentDelegate;
                    this._scheduleTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onInvokeTask) {
                    this._invokeTaskZS = DELEGATE_ZS;
                    this._invokeTaskDlgt = parentDelegate;
                    this._invokeTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onCancelTask) {
                    this._cancelTaskZS = DELEGATE_ZS;
                    this._cancelTaskDlgt = parentDelegate;
                    this._cancelTaskCurrZone = this.zone;
                }
            }
        }
        ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                new Zone(targetZone, zoneSpec);
        };
        ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
            return this._interceptZS ?
                this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                callback;
        };
        ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ?
                this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.handleError = function (targetZone, error) {
            return this._handleErrorZS ?
                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                true;
        };
        ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
            var returnTask = task;
            if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                    returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                }
                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                if (!returnTask)
                    returnTask = task;
            }
            else {
                if (task.scheduleFn) {
                    task.scheduleFn(task);
                }
                else if (task.type == microTask) {
                    scheduleMicroTask(task);
                }
                else {
                    throw new Error('Task is missing scheduleFn.');
                }
            }
            return returnTask;
        };
        ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ?
                this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                task.callback.apply(applyThis, applyArgs);
        };
        ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
            var value;
            if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            }
            else {
                if (!task.cancelFn) {
                    throw Error('Task is not cancelable');
                }
                value = task.cancelFn(task);
            }
            return value;
        };
        ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
                return this._hasTaskZS &&
                    this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            }
            catch (err) {
                this.handleError(targetZone, err);
            }
        };
        ZoneDelegate.prototype._updateTaskCount = function (type, count) {
            var counts = this._taskCounts;
            var prev = counts[type];
            var next = counts[type] = prev + count;
            if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
            }
            if (prev == 0 || next == 0) {
                var isEmpty = {
                    microTask: counts.microTask > 0,
                    macroTask: counts.macroTask > 0,
                    eventTask: counts.eventTask > 0,
                    change: type
                };
                this.hasTask(this.zone, isEmpty);
            }
        };
        return ZoneDelegate;
    }());
    var ZoneTask = (function () {
        function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
            this._zone = null;
            this.runCount = 0;
            this._zoneDelegates = null;
            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;
            this.callback = callback;
            var self = this;
            if (type === eventTask && options && options.isUsingGlobalCallback) {
                this.invoke = ZoneTask.invokeTask;
            }
            else {
                this.invoke = function () {
                    return ZoneTask.invokeTask.apply(global, [self, this, arguments]);
                };
            }
        }
        ZoneTask.invokeTask = function (task, target, args) {
            if (!task) {
                task = this;
            }
            _numberOfNestedTaskFrames++;
            try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
            }
            finally {
                if (_numberOfNestedTaskFrames == 1) {
                    drainMicroTaskQueue();
                }
                _numberOfNestedTaskFrames--;
            }
        };
        Object.defineProperty(ZoneTask.prototype, "zone", {
            get: function () {
                return this._zone;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ZoneTask.prototype, "state", {
            get: function () {
                return this._state;
            },
            enumerable: true,
            configurable: true
        });
        ZoneTask.prototype.cancelScheduleRequest = function () {
            this._transitionTo(notScheduled, scheduling);
        };
        ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;
                if (toState == notScheduled) {
                    this._zoneDelegates = null;
                }
            }
            else {
                throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ?
                    ' or \'' + fromState2 + '\'' :
                    '') + ", was '" + this._state + "'.");
            }
        };
        ZoneTask.prototype.toString = function () {
            if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId;
            }
            else {
                return Object.prototype.toString.call(this);
            }
        };
        // add toJSON method to prevent cyclic error when
        // call JSON.stringify(zoneTask)
        ZoneTask.prototype.toJSON = function () {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                invoke: this.invoke,
                scheduleFn: this.scheduleFn,
                cancelFn: this.cancelFn,
                runCount: this.runCount,
                callback: this.callback
            };
        };
        return ZoneTask;
    }());
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var symbolSetTimeout = __symbol__('setTimeout');
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (global[symbolPromise]) {
                global[symbolPromise].resolve(0)[symbolThen](drainMicroTaskQueue);
            }
            else {
                global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
        }
        task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;
            while (_microTaskQueue.length) {
                var queue = _microTaskQueue;
                _microTaskQueue = [];
                for (var i = 0; i < queue.length; i++) {
                    var task = queue[i];
                    try {
                        task.zone.runTask(task, null, null);
                    }
                    catch (error) {
                        _api.onUnhandledError(error);
                    }
                }
            }
            var showError = !Zone[__symbol__('ignoreConsoleErrorUncaughtError')];
            _api.microtaskDrainDone();
            _isDrainingMicrotaskQueue = false;
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    var NO_ZONE = { name: 'NO ZONE' };
    var notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
    var microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
    var patches = {};
    var _api = {
        symbol: __symbol__,
        currentZoneFrame: function () { return _currentZoneFrame; },
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: function () { return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')]; },
        patchEventTarget: function () { return []; },
        patchOnProperties: noop,
        patchMethod: function () { return noop; },
    };
    var _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
    var _currentTask = null;
    var _numberOfNestedTaskFrames = 0;
    function noop() { }
    function __symbol__(name) {
        return '__zone_symbol__' + name;
    }
    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
    var __symbol__ = api.symbol;
    var _uncaughtPromiseErrors = [];
    var symbolPromise = __symbol__('Promise');
    var symbolThen = __symbol__('then');
    api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
            var rejection = e && e.rejection;
            if (rejection) {
                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            }
            else {
                console.error(e);
            }
        }
    };
    api.microtaskDrainDone = function () {
        while (_uncaughtPromiseErrors.length) {
            var _loop_1 = function () {
                var uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(function () {
                        throw uncaughtPromiseError;
                    });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            };
            while (_uncaughtPromiseErrors.length) {
                _loop_1();
            }
        }
    };
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            var handler = Zone[__symbol__('unhandledPromiseRejectionHandler')];
            if (handler && typeof handler === 'function') {
                handler.apply(this, [e]);
            }
        }
        catch (err) {
        }
    }
    function isThenable(value) {
        return value && value.then;
    }
    function forwardResolution(value) {
        return value;
    }
    function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
    }
    var symbolState = __symbol__('state');
    var symbolValue = __symbol__('value');
    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return function (v) {
            try {
                resolvePromise(promise, state, v);
            }
            catch (err) {
                resolvePromise(promise, false, err);
            }
            // Do not return value or you will break the Promise spec.
        };
    }
    var once = function () {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function () {
                if (wasCalled) {
                    return;
                }
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        var onceWrapper = once();
        if (promise === value) {
            throw new TypeError('Promise resolved with itself');
        }
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            var then = null;
            try {
                if (typeof value === 'object' || typeof value === 'function') {
                    then = value && value.then;
                }
            }
            catch (err) {
                onceWrapper(function () {
                    resolvePromise(promise, false, err);
                })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            }
            else if (state !== REJECTED && typeof then === 'function') {
                try {
                    then.apply(value, [
                        onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false))
                    ]);
                }
                catch (err) {
                    onceWrapper(function () {
                        resolvePromise(promise, false, err);
                    })();
                }
            }
            else {
                promise[symbolState] = state;
                var queue = promise[symbolValue];
                promise[symbolValue] = value;
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    value[__symbol__('currentTask')] = Zone.currentTask;
                }
                for (var i = 0; i < queue.length;) {
                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                }
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    try {
                        throw new Error('Uncaught (in promise): ' + value +
                            (value && value.stack ? '\n' + value.stack : ''));
                    }
                    catch (err) {
                        var error_1 = err;
                        error_1.rejection = value;
                        error_1.promise = promise;
                        error_1.zone = Zone.current;
                        error_1.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(error_1);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                var handler = Zone[__symbol__('rejectionHandledHandler')];
                if (handler && typeof handler === 'function') {
                    handler.apply(this, [{ rejection: promise[symbolValue], promise: promise }]);
                }
            }
            catch (err) {
            }
            promise[symbolState] = REJECTED;
            for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
                if (promise === _uncaughtPromiseErrors[i].promise) {
                    _uncaughtPromiseErrors.splice(i, 1);
                }
            }
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var delegate = promise[symbolState] ?
            (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
            (typeof onRejected === 'function') ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
            try {
                resolvePromise(chainPromise, true, zone.run(delegate, undefined, [promise[symbolValue]]));
            }
            catch (error) {
                resolvePromise(chainPromise, false, error);
            }
        });
    }
    var ZoneAwarePromise = (function () {
        function ZoneAwarePromise(executor) {
            var promise = this;
            if (!(promise instanceof ZoneAwarePromise)) {
                throw new Error('Must be an instanceof Promise.');
            }
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            }
            catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        ZoneAwarePromise.toString = function () {
            return 'function ZoneAwarePromise() { [native code] }';
        };
        ZoneAwarePromise.resolve = function (value) {
            return resolvePromise(new this(null), RESOLVED, value);
        };
        ZoneAwarePromise.reject = function (error) {
            return resolvePromise(new this(null), REJECTED, error);
        };
        ZoneAwarePromise.race = function (values) {
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                _a = [res, rej], resolve = _a[0], reject = _a[1];
                var _a;
            });
            function onResolve(value) {
                promise && (promise = null || resolve(value));
            }
            function onReject(error) {
                promise && (promise = null || reject(error));
            }
            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                var value = values_1[_i];
                if (!isThenable(value)) {
                    value = this.resolve(value);
                }
                value.then(onResolve, onReject);
            }
            return promise;
        };
        ZoneAwarePromise.all = function (values) {
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
                resolve = res;
                reject = rej;
            });
            var count = 0;
            var resolvedValues = [];
            for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
                var value = values_2[_i];
                if (!isThenable(value)) {
                    value = this.resolve(value);
                }
                value.then((function (index) { return function (value) {
                    resolvedValues[index] = value;
                    count--;
                    if (!count) {
                        resolve(resolvedValues);
                    }
                }; })(count), reject);
                count++;
            }
            if (!count)
                resolve(resolvedValues);
            return promise;
        };
        ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
            var chainPromise = new this.constructor(null);
            var zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }
            return chainPromise;
        };
        ZoneAwarePromise.prototype.catch = function (onRejected) {
            return this.then(null, onRejected);
        };
        return ZoneAwarePromise;
    }());
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[symbolPromise] = global['Promise'];
    global['Promise'] = ZoneAwarePromise;
    var symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        // check Ctor.prototype.then propertyDescritor is writable or not
        // in meteor env, writable is false, we have to make it to be true.
        var prop = Object.getOwnPropertyDescriptor(Ctor.prototype, 'then');
        if (prop && prop.writable === false && prop.configurable) {
            Object.defineProperty(Ctor.prototype, 'then', { writable: true });
        }
        Ctor.prototype.then = function (onResolve, onReject) {
            var _this = this;
            var wrapped = new ZoneAwarePromise(function (resolve, reject) {
                originalThen.call(_this, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    function zoneify(fn) {
        return function () {
            var resultPromise = fn.apply(this, arguments);
            if (resultPromise instanceof ZoneAwarePromise) {
                return resultPromise;
            }
            var ctor = resultPromise.constructor;
            if (!ctor[symbolThenPatched]) {
                patchThen(ctor);
            }
            return resultPromise;
        };
    }
    if (NativePromise) {
        patchThen(NativePromise);
        var fetch_1 = global['fetch'];
        if (typeof fetch_1 == 'function') {
            global['fetch'] = zoneify(fetch_1);
        }
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis}
 */
var zoneSymbol = Zone.__symbol__;
var _global = typeof window === 'object' && window || typeof self === 'object' && self || global;
function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
            args[i] = Zone.current.wrap(args[i], source + '_' + i);
        }
    }
    return args;
}
function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];
    var _loop_1 = function (i) {
        var name_1 = fnNames[i];
        var delegate = prototype[name_1];
        if (delegate) {
            prototype[name_1] = (function (delegate) {
                var patched = function () {
                    return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
                };
                attachOriginToPatched(patched, delegate);
                return patched;
            })(delegate);
        }
    };
    for (var i = 0; i < fnNames.length; i++) {
        _loop_1(i);
    }
}
var isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
// Make sure to access `process` through `_global` so that WebPack does not accidently browserify
// this code.
var isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]');
var isBrowser = !isNode && !isWebWorker && !!(typeof window !== 'undefined' && window['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidently browserify
// this code.
var isMix = typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
    !!(typeof window !== 'undefined' && window['HTMLElement']);
function patchProperty(obj, prop, prototype) {
    var desc = Object.getOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        var prototypeDesc = Object.getOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) {
            desc = { enumerable: true, configurable: true };
        }
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) {
        return;
    }
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    var originalDescGet = desc.get;
    // substr(2) cuz 'onclick' -> 'click', etc
    var eventName = prop.substr(2);
    var _prop = zoneSymbol('_' + prop);
    desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return;
        }
        var previousValue = target[_prop];
        if (previousValue) {
            target.removeEventListener(eventName, previousValue);
        }
        if (typeof newValue === 'function') {
            var wrapFn = function (event) {
                var result = newValue.apply(this, arguments);
                if (result != undefined && !result) {
                    event.preventDefault();
                }
                return result;
            };
            target[_prop] = wrapFn;
            target.addEventListener(eventName, wrapFn, false);
        }
        else {
            target[_prop] = null;
        }
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return null;
        }
        if (target.hasOwnProperty(_prop)) {
            return target[_prop];
        }
        else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            var value = originalDescGet && originalDescGet.apply(this);
            if (value) {
                desc.set.apply(this, [value]);
                if (typeof target['removeAttribute'] === 'function') {
                    target.removeAttribute(prop);
                }
                return value;
            }
        }
        return null;
    };
    Object.defineProperty(obj, prop, desc);
}
function patchOnProperties(obj, properties, prototype) {
    if (properties) {
        for (var i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
        }
    }
    else {
        var onProperties = [];
        for (var prop in obj) {
            if (prop.substr(0, 2) == 'on') {
                onProperties.push(prop);
            }
        }
        for (var j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
        }
    }
}
var originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
    var OriginalClass = _global[className];
    if (!OriginalClass)
        return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function () {
        var a = bindArguments(arguments, className);
        switch (a.length) {
            case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;
            case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;
            case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;
            case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;
            case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;
            default:
                throw new Error('Arg list too long.');
        }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    var instance = new OriginalClass(function () { });
    var prop;
    for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
            continue;
        (function (prop) {
            if (typeof instance[prop] === 'function') {
                _global[className].prototype[prop] = function () {
                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                };
            }
            else {
                Object.defineProperty(_global[className].prototype, prop, {
                    set: function (fn) {
                        if (typeof fn === 'function') {
                            this[originalInstanceKey][prop] = Zone.current.wrap(fn, className + '.' + prop);
                            // keep callback in wrapped function so we can
                            // use it in Function.prototype.toString to return
                            // the native one.
                            attachOriginToPatched(this[originalInstanceKey][prop], fn);
                        }
                        else {
                            this[originalInstanceKey][prop] = fn;
                        }
                    },
                    get: function () {
                        return this[originalInstanceKey][prop];
                    }
                });
            }
        }(prop));
    }
    for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
        }
    }
}
function patchMethod(target, name, patchFn) {
    var proto = target;
    while (proto && !proto.hasOwnProperty(name)) {
        proto = Object.getPrototypeOf(proto);
    }
    if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
    }
    var delegateName = zoneSymbol(name);
    var delegate;
    if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name];
        var patchDelegate_1 = patchFn(delegate, delegateName, name);
        proto[name] = function () {
            return patchDelegate_1(this, arguments);
        };
        attachOriginToPatched(proto[name], delegate);
    }
    return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
    var setNative = null;
    function scheduleTask(task) {
        var data = task.data;
        data.args[data.callbackIndex] = function () {
            task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
    }
    setNative = patchMethod(obj, funcName, function (delegate) { return function (self, args) {
        var meta = metaCreator(self, args);
        if (meta.callbackIndex >= 0 && typeof args[meta.callbackIndex] === 'function') {
            var task = Zone.current.scheduleMacroTask(meta.name, args[meta.callbackIndex], meta, scheduleTask, null);
            return task;
        }
        else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
        }
    }; });
}

function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
}
var isDetectedIEOrEdge = false;
var ieOrEdge = false;
function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
        return ieOrEdge;
    }
    isDetectedIEOrEdge = true;
    try {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
        }
        return ieOrEdge;
    }
    catch (error) {
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', function (global, Zone, api) {
    // patch Func.prototype.toString to let them look like native
    var originalFunctionToString = Zone['__zone_symbol__originalToString'] =
        Function.prototype.toString;
    Function.prototype.toString = function () {
        if (typeof this === 'function') {
            var originalDelegate = this[zoneSymbol('OriginalDelegate')];
            if (originalDelegate) {
                if (typeof originalDelegate === 'function') {
                    return originalFunctionToString.apply(this[zoneSymbol('OriginalDelegate')], arguments);
                }
                else {
                    return Object.prototype.toString.call(originalDelegate);
                }
            }
            if (this === Promise) {
                var nativePromise = global[zoneSymbol('Promise')];
                if (nativePromise) {
                    return originalFunctionToString.apply(nativePromise, arguments);
                }
            }
            if (this === Error) {
                var nativeError = global[zoneSymbol('Error')];
                if (nativeError) {
                    return originalFunctionToString.apply(nativeError, arguments);
                }
            }
        }
        return originalFunctionToString.apply(this, arguments);
    };
    // patch Object.prototype.toString to let them look like native
    var originalObjectToString = Object.prototype.toString;
    Object.prototype.toString = function () {
        if (this instanceof Promise) {
            return '[object Promise]';
        }
        return originalObjectToString.apply(this, arguments);
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var TRUE_STR = 'true';
var FALSE_STR = 'false';
// an identifier to tell ZoneTask do not create a new invoke closure
var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    isUsingGlobalCallback: true
};
var zoneSymbolEventNames = {};
var globalSources = {};
var CONSTRUCTOR_NAME = 'name';
var FUNCTION_TYPE = 'function';
var OBJECT_TYPE = 'object';
var ZONE_SYMBOL_PREFIX = '__zone_symbol__';
var EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
function patchEventTarget(_global, apis, patchOptions) {
    var ADD_EVENT_LISTENER = (patchOptions && patchOptions.addEventListenerFnName) || 'addEventListener';
    var REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.removeEventListenerFnName) || 'removeEventListener';
    var LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listenersFnName) || 'eventListeners';
    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.removeAllFnName) || 'removeAllListeners';
    var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    var PREPEND_EVENT_LISTENER = 'prependListener';
    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
    var invokeTask = function (task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
            return;
        }
        var delegate = task.callback;
        if (typeof delegate === OBJECT_TYPE && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = function (event) { return delegate.handleEvent(event); };
            task.originalDelegate = delegate;
        }
        // invoke static task.invoke
        task.invoke(task, target, [event]);
        var options = task.options;
        if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
            target[REMOVE_EVENT_LISTENER].apply(target, [event.type, delegate_1, options]);
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = false
    var globalZoneAwareCallback = function (event) {
        var target = this || _global;
        var tasks = target[zoneSymbolEventNames[event.type][FALSE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    var globalZoneAwareCaptureCallback = function (event) {
        var target = this || _global;
        var tasks = target[zoneSymbolEventNames[event.type][TRUE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                var copyTasks = tasks.slice();
                for (var i = 0; i < copyTasks.length; i++) {
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
            return false;
        }
        var useGlobalCallback = true;
        if (patchOptions && patchOptions.useGlobalCallback !== undefined) {
            useGlobalCallback = patchOptions.useGlobalCallback;
        }
        var validateHandler = patchOptions && patchOptions.validateHandler;
        var checkDuplicate = true;
        if (patchOptions && patchOptions.checkDuplicate !== undefined) {
            checkDuplicate = patchOptions.checkDuplicate;
        }
        var returnTarget = false;
        if (patchOptions && patchOptions.returnTarget !== undefined) {
            returnTarget = patchOptions.returnTarget;
        }
        var proto = obj;
        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = Object.getPrototypeOf(proto);
        }
        if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
        }
        if (!proto) {
            return false;
        }
        if (proto[zoneSymbolAddEventListener]) {
            return false;
        }
        // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data
        var taskData = {};
        var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
            proto[REMOVE_EVENT_LISTENER];
        var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
            proto[LISTENERS_EVENT_LISTENER];
        var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        var nativePrependEventListener;
        if (patchOptions && patchOptions.prependEventListenerFnName) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prependEventListenerFnName)] =
                proto[patchOptions.prependEventListenerFnName];
        }
        var customScheduleGlobal = function (task) {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
                return;
            }
            return nativeAddEventListener.apply(taskData.target, [
                taskData.eventName,
                taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback,
                taskData.options
            ]);
        };
        var customCancelGlobal = function (task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
                var symbolEventNames = zoneSymbolEventNames[task.eventName];
                var symbolEventName = void 0;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = symbolEventName && task.target[symbolEventName];
                if (existingTasks) {
                    for (var i = 0; i < existingTasks.length; i++) {
                        var existingTask = existingTasks[i];
                        if (existingTask === task) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            task.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                task.allRemoved = true;
                                task.target[symbolEventName] = null;
                            }
                            break;
                        }
                    }
                }
            }
            // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return
            if (!task.allRemoved) {
                return;
            }
            return nativeRemoveEventListener.apply(task.target, [
                task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback,
                task.options
            ]);
        };
        var customScheduleNonGlobal = function (task) {
            return nativeAddEventListener.apply(taskData.target, [taskData.eventName, task.invoke, taskData.options]);
        };
        var customSchedulePrepend = function (task) {
            return nativePrependEventListener.apply(taskData.target, [taskData.eventName, task.invoke, taskData.options]);
        };
        var customCancelNonGlobal = function (task) {
            return nativeRemoveEventListener.apply(task.target, [task.eventName, task.invoke, task.options]);
        };
        var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        var compareTaskCallbackVsDelegate = function (task, delegate) {
            var typeOfDelegate = typeof delegate;
            if ((typeOfDelegate === FUNCTION_TYPE && task.callback === delegate) ||
                (typeOfDelegate === OBJECT_TYPE && task.originalDelegate === delegate)) {
                // same callback, same capture, same event name, just return
                return true;
            }
            return false;
        };
        var compare = (patchOptions && patchOptions.compareTaskCallbackVsDelegate) ?
            patchOptions.compareTaskCallbackVsDelegate :
            compareTaskCallbackVsDelegate;
        var makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
            if (returnTarget === void 0) { returnTarget = false; }
            if (prepend === void 0) { prepend = false; }
            return function () {
                var target = this || _global;
                var targetZone = Zone.current;
                var delegate = arguments[1];
                if (!delegate) {
                    return nativeListener.apply(this, arguments);
                }
                // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke
                var isHandleEvent = false;
                if (typeof delegate !== FUNCTION_TYPE) {
                    if (!delegate.handleEvent) {
                        return nativeListener.apply(this, arguments);
                    }
                    isHandleEvent = true;
                }
                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                    return;
                }
                var eventName = arguments[0];
                var options = arguments[2];
                var capture;
                var once = false;
                if (options === undefined) {
                    capture = false;
                }
                else if (options === true) {
                    capture = true;
                }
                else if (options === false) {
                    capture = false;
                }
                else {
                    capture = options ? !!options.capture : false;
                    once = options ? !!options.once : false;
                }
                var zone = Zone.current;
                var symbolEventNames = zoneSymbolEventNames[eventName];
                var symbolEventName;
                if (!symbolEventNames) {
                    // the code is duplicate, but I just want to get some better performance
                    var falseEventName = eventName + FALSE_STR;
                    var trueEventName = eventName + TRUE_STR;
                    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                    zoneSymbolEventNames[eventName] = {};
                    zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
                    zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
                    symbolEventName = capture ? symbolCapture : symbol;
                }
                else {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                var existingTasks = target[symbolEventName];
                var isExisting = false;
                if (existingTasks) {
                    // already have task registered
                    isExisting = true;
                    if (checkDuplicate) {
                        for (var i = 0; i < existingTasks.length; i++) {
                            if (compare(existingTasks[i], delegate)) {
                                // same callback, same capture, same event name, just return
                                return;
                            }
                        }
                    }
                }
                else {
                    existingTasks = target[symbolEventName] = [];
                }
                var source;
                var constructorName = target.constructor[CONSTRUCTOR_NAME];
                var targetSource = globalSources[constructorName];
                if (targetSource) {
                    source = targetSource[eventName];
                }
                if (!source) {
                    source = constructorName + addSource + eventName;
                }
                // do not create a new object as task.data to pass those things
                // just use the global shared one
                taskData.options = options;
                if (once) {
                    // if addEventListener with once options, we don't pass it to
                    // native addEventListener, instead we keep the once setting
                    // and handle ourselves.
                    taskData.options.once = false;
                }
                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : null;
                var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                // have to save those information to task in case
                // application may call task.zone.cancelTask() directly
                if (once) {
                    options.once = true;
                }
                task.options = options;
                task.target = target;
                task.capture = capture;
                task.eventName = eventName;
                if (isHandleEvent) {
                    // save original delegate for compare to check duplicate
                    task.originalDelegate = delegate;
                }
                if (!prepend) {
                    existingTasks.push(task);
                }
                else {
                    existingTasks.unshift(task);
                }
                if (returnTarget) {
                    return target;
                }
            };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
        if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }
        proto[REMOVE_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var options = arguments[2];
            var capture;
            if (options === undefined) {
                capture = false;
            }
            else if (options === true) {
                capture = true;
            }
            else if (options === false) {
                capture = false;
            }
            else {
                capture = options ? !!options.capture : false;
            }
            var delegate = arguments[1];
            if (!delegate) {
                return nativeRemoveEventListener.apply(this, arguments);
            }
            if (validateHandler &&
                !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                return;
            }
            var symbolEventNames = zoneSymbolEventNames[eventName];
            var symbolEventName;
            if (symbolEventNames) {
                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }
            var existingTasks = symbolEventName && target[symbolEventName];
            if (existingTasks) {
                for (var i = 0; i < existingTasks.length; i++) {
                    var existingTask = existingTasks[i];
                    var typeOfDelegate = typeof delegate;
                    if (compare(existingTask, delegate)) {
                        existingTasks.splice(i, 1);
                        // set isRemoved to data for faster invokeTask check
                        existingTask.isRemoved = true;
                        if (existingTasks.length === 0) {
                            // all tasks for the eventName + capture have gone,
                            // remove globalZoneAwareCallback and remove the task cache from target
                            existingTask.allRemoved = true;
                            target[symbolEventName] = null;
                        }
                        existingTask.zone.cancelTask(existingTask);
                        return;
                    }
                }
            }
        };
        proto[LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            var listeners = [];
            var tasks = findEventTasks(target, eventName);
            for (var i = 0; i < tasks.length; i++) {
                var task = tasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
            }
            return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            var target = this || _global;
            var eventName = arguments[0];
            if (!eventName) {
                var keys = Object.keys(target);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    var evtName = match && match[1];
                    // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed
                    if (evtName && evtName !== 'removeListener') {
                        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].apply(this, [evtName]);
                    }
                }
                // remove removeListener listener finally
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].apply(this, ['removeListener']);
            }
            else {
                var symbolEventNames = zoneSymbolEventNames[eventName];
                if (symbolEventNames) {
                    var symbolEventName = symbolEventNames[FALSE_STR];
                    var symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    var tasks = target[symbolEventName];
                    var captureTasks = target[symbolCaptureEventName];
                    if (tasks) {
                        var removeTasks = tasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].apply(this, [eventName, delegate, task.options]);
                        }
                    }
                    if (captureTasks) {
                        var removeTasks = captureTasks.slice();
                        for (var i = 0; i < removeTasks.length; i++) {
                            var task = removeTasks[i];
                            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].apply(this, [eventName, delegate, task.options]);
                        }
                    }
                }
            }
        };
        // for native toString patch
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }
        if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }
        return true;
    }
    var results = [];
    for (var i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }
    return results;
}
function findEventTasks(target, eventName) {
    var foundTasks = [];
    for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];
        if (evtName && (!eventName || evtName === eventName)) {
            var tasks = target[prop];
            if (tasks) {
                for (var i = 0; i < tasks.length; i++) {
                    foundTasks.push(tasks[i]);
                }
            }
        }
    }
    return foundTasks;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};
    function scheduleTask(task) {
        var data = task.data;
        function timer() {
            try {
                task.invoke.apply(this, arguments);
            }
            finally {
                if (typeof data.handleId === 'number') {
                    // Node returns complex objects as handleIds
                    delete tasksByHandleId[data.handleId];
                }
            }
        }
        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        if (typeof data.handleId === 'number') {
            // Node returns complex objects as handleIds -> no need to keep them around. Additionally,
            // this throws an
            // exception in older node versions and has no effect there, because of the stringified key.
            tasksByHandleId[data.handleId] = task;
        }
        return task;
    }
    function clearTask(task) {
        if (typeof task.data.handleId === 'number') {
            // Node returns complex objects as handleIds
            delete tasksByHandleId[task.data.handleId];
        }
        return clearNative(task.data.handleId);
    }
    setNative =
        patchMethod(window, setName, function (delegate) { return function (self, args) {
            if (typeof args[0] === 'function') {
                var zone = Zone.current;
                var options = {
                    handleId: null,
                    isPeriodic: nameSuffix === 'Interval',
                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 : null,
                    args: args
                };
                var task = zone.scheduleMacroTask(setName, args[0], options, scheduleTask, clearTask);
                if (!task) {
                    return task;
                }
                // Node.js must additionally support the ref and unref functions.
                var handle = task.data.handleId;
                // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                    typeof handle.unref === 'function') {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                }
                return task;
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(window, args);
            }
        }; });
    clearNative =
        patchMethod(window, cancelName, function (delegate) { return function (self, args) {
            var task = typeof args[0] === 'number' ? tasksByHandleId[args[0]] : args[0];
            if (task && typeof task.type === 'string') {
                if (task.state !== 'notScheduled' &&
                    (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                    // Do not cancel already canceled functions
                    task.zone.cancelTask(task);
                }
            }
            else {
                // cause an error by calling it directly.
                delegate.apply(window, args);
            }
        }; });
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/*
 * This is necessary for Chrome and Chrome mobile, to enable
 * things like redefining `createdCallback` on an element.
 */
var _defineProperty = Object[zoneSymbol('defineProperty')] = Object.defineProperty;
var _getOwnPropertyDescriptor = Object[zoneSymbol('getOwnPropertyDescriptor')] =
    Object.getOwnPropertyDescriptor;
var _create = Object.create;
var unconfigurablesKey = zoneSymbol('unconfigurables');
function propertyPatch() {
    Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }
        var originalConfigurableFlag = desc.configurable;
        if (prop !== 'prototype') {
            desc = rewriteDescriptor(obj, prop, desc);
        }
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };
    Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
            Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
    };
    Object.create = function (obj, proto) {
        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
            Object.keys(proto).forEach(function (prop) {
                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
            });
        }
        return _create(obj, proto);
    };
    Object.getOwnPropertyDescriptor = function (obj, prop) {
        var desc = _getOwnPropertyDescriptor(obj, prop);
        if (isUnconfigurable(obj, prop)) {
            desc.configurable = false;
        }
        return desc;
    };
}
function _redefineProperty(obj, prop, desc) {
    var originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
}
function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
}
function rewriteDescriptor(obj, prop, desc) {
    desc.configurable = true;
    if (!desc.configurable) {
        if (!obj[unconfigurablesKey]) {
            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
        }
        obj[unconfigurablesKey][prop] = true;
    }
    return desc;
}
function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
        return _defineProperty(obj, prop, desc);
    }
    catch (error) {
        if (desc.configurable) {
            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
            // retry with the original flag value
            if (typeof originalConfigurableFlag == 'undefined') {
                delete desc.configurable;
            }
            else {
                desc.configurable = originalConfigurableFlag;
            }
            try {
                return _defineProperty(obj, prop, desc);
            }
            catch (error) {
                var descJson = null;
                try {
                    descJson = JSON.stringify(desc);
                }
                catch (error) {
                    descJson = descJson.toString();
                }
                console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
            }
        }
        else {
            throw error;
        }
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// we have to patch the instance since the proto is non-configurable
function apply(api, _global) {
    var WS = _global.WebSocket;
    // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
    // On older Chrome, no need since EventTarget was already patched
    if (!_global.EventTarget) {
        patchEventTarget(api, _global, [WS.prototype]);
    }
    _global.WebSocket = function (a, b) {
        var socket = arguments.length > 1 ? new WS(a, b) : new WS(a);
        var proxySocket;
        var proxySocketProto;
        // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
        var onmessageDesc = Object.getOwnPropertyDescriptor(socket, 'onmessage');
        if (onmessageDesc && onmessageDesc.configurable === false) {
            proxySocket = Object.create(socket);
            // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
            // but proxySocket not, so we will keep socket as prototype and pass it to
            // patchOnProperties method
            proxySocketProto = socket;
            ['addEventListener', 'removeEventListener', 'send', 'close'].forEach(function (propName) {
                proxySocket[propName] = function () {
                    return socket[propName].apply(socket, arguments);
                };
            });
        }
        else {
            // we can patch the real socket
            proxySocket = socket;
        }
        patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
        return proxySocket;
    };
    for (var prop in WS) {
        _global['WebSocket'][prop] = WS[prop];
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var globalEventHandlersEventNames = [
    'abort',
    'animationcancel',
    'animationend',
    'animationiteration',
    'auxclick',
    'beforeinput',
    'blur',
    'cancel',
    'canplay',
    'canplaythrough',
    'change',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'cuechange',
    'click',
    'close',
    'contextmenu',
    'curechange',
    'dblclick',
    'drag',
    'dragend',
    'dragenter',
    'dragexit',
    'dragleave',
    'dragover',
    'drop',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'focus',
    'focusin',
    'focusout',
    'gotpointercapture',
    'input',
    'invalid',
    'keydown',
    'keypress',
    'keyup',
    'load',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'lostpointercapture',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'mousewheel',
    'pause',
    'play',
    'playing',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerlockchange',
    'mozpointerlockchange',
    'webkitpointerlockerchange',
    'pointerlockerror',
    'mozpointerlockerror',
    'webkitpointerlockerror',
    'pointermove',
    'pointout',
    'pointerover',
    'pointerup',
    'progress',
    'ratechange',
    'reset',
    'resize',
    'scroll',
    'seeked',
    'seeking',
    'select',
    'selectionchange',
    'selectstart',
    'show',
    'sort',
    'stalled',
    'submit',
    'suspend',
    'timeupdate',
    'volumechange',
    'touchcancel',
    'touchmove',
    'touchstart',
    'transitioncancel',
    'transitionend',
    'waiting',
    'wheel'
];
var documentEventNames = [
    'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'fullscreenchange',
    'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
    'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange'
];
var windowEventNames = [
    'absolutedeviceorientation',
    'afterinput',
    'afterprint',
    'appinstalled',
    'beforeinstallprompt',
    'beforeprint',
    'beforeunload',
    'devicelight',
    'devicemotion',
    'deviceorientation',
    'deviceorientationabsolute',
    'deviceproximity',
    'hashchange',
    'languagechange',
    'message',
    'mozbeforepaint',
    'offline',
    'online',
    'paint',
    'pageshow',
    'pagehide',
    'popstate',
    'rejectionhandled',
    'storage',
    'unhandledrejection',
    'unload',
    'userproximity',
    'vrdisplyconnected',
    'vrdisplaydisconnected',
    'vrdisplaypresentchange'
];
var htmlElementEventNames = [
    'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
    'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
    'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
];
var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
var ieElementEventNames = [
    'activate',
    'afterupdate',
    'ariarequest',
    'beforeactivate',
    'beforedeactivate',
    'beforeeditfocus',
    'beforeupdate',
    'cellchange',
    'controlselect',
    'dataavailable',
    'datasetchanged',
    'datasetcomplete',
    'errorupdate',
    'filterchange',
    'layoutcomplete',
    'losecapture',
    'move',
    'moveend',
    'movestart',
    'propertychange',
    'resizeend',
    'resizestart',
    'rowenter',
    'rowexit',
    'rowsdelete',
    'rowsinserted',
    'command',
    'compassneedscalibration',
    'deactivate',
    'help',
    'mscontentzoom',
    'msmanipulationstatechanged',
    'msgesturechange',
    'msgesturedoubletap',
    'msgestureend',
    'msgesturehold',
    'msgesturestart',
    'msgesturetap',
    'msgotpointercapture',
    'msinertiastart',
    'mslostpointercapture',
    'mspointercancel',
    'mspointerdown',
    'mspointerenter',
    'mspointerhover',
    'mspointerleave',
    'mspointermove',
    'mspointerout',
    'mspointerover',
    'mspointerup',
    'pointerout',
    'mssitemodejumplistitemremoved',
    'msthumbnailclick',
    'stop',
    'storagecommit'
];
var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
var formEventNames = ['autocomplete', 'autocompleteerror'];
var detailEventNames = ['toggle'];
var frameEventNames = ['load'];
var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll'];
var marqueeEventNames = ['bounce', 'finish', 'start'];
var XMLHttpRequestEventNames = [
    'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
    'readystatechange'
];
var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
var websocketEventNames = ['close', 'error', 'open', 'message'];
var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
        return;
    }
    var supportsWebSocket = typeof WebSocket !== 'undefined';
    if (canPatchViaPropertyDescriptor()) {
        // for browsers that we can patch the descriptor:  Chrome & Firefox
        if (isBrowser) {
            // in IE/Edge, onProp not exist in window object, but in WindowPrototype
            // so we need to pass WindowPrototype to check onProp exist or not
            patchOnProperties(window, eventNames, Object.getPrototypeOf(window));
            patchOnProperties(Document.prototype, eventNames);
            if (typeof window['SVGElement'] !== 'undefined') {
                patchOnProperties(window['SVGElement'].prototype, eventNames);
            }
            patchOnProperties(Element.prototype, eventNames);
            patchOnProperties(HTMLElement.prototype, eventNames);
            patchOnProperties(HTMLMediaElement.prototype, mediaElementEventNames);
            patchOnProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames));
            patchOnProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames));
            patchOnProperties(HTMLFrameElement.prototype, frameEventNames);
            patchOnProperties(HTMLIFrameElement.prototype, frameEventNames);
            var HTMLMarqueeElement_1 = window['HTMLMarqueeElement'];
            if (HTMLMarqueeElement_1) {
                patchOnProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames);
            }
        }
        patchOnProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames);
        var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];
        if (XMLHttpRequestEventTarget) {
            patchOnProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames);
        }
        if (typeof IDBIndex !== 'undefined') {
            patchOnProperties(IDBIndex.prototype, IDBIndexEventNames);
            patchOnProperties(IDBRequest.prototype, IDBIndexEventNames);
            patchOnProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames);
            patchOnProperties(IDBDatabase.prototype, IDBIndexEventNames);
            patchOnProperties(IDBTransaction.prototype, IDBIndexEventNames);
            patchOnProperties(IDBCursor.prototype, IDBIndexEventNames);
        }
        if (supportsWebSocket) {
            patchOnProperties(WebSocket.prototype, websocketEventNames);
        }
    }
    else {
        // Safari, Android browsers (Jelly Bean)
        patchViaCapturingAllTheEvents();
        patchClass('XMLHttpRequest');
        if (supportsWebSocket) {
            apply(api, _global);
        }
    }
}
function canPatchViaPropertyDescriptor() {
    if ((isBrowser || isMix) && !Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') &&
        typeof Element !== 'undefined') {
        // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
        // IDL interface attributes are not configurable
        var desc = Object.getOwnPropertyDescriptor(Element.prototype, 'onclick');
        if (desc && !desc.configurable)
            return false;
    }
    var xhrDesc = Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype, 'onreadystatechange');
    // add enumerable and configurable here because in opera
    // by default XMLHttpRequest.prototype.onreadystatechange is undefined
    // without adding enumerable and configurable will cause onreadystatechange
    // non-configurable
    // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
    // we should set a real desc instead a fake one
    if (xhrDesc) {
        Object.defineProperty(XMLHttpRequest.prototype, 'onreadystatechange', {
            enumerable: true,
            configurable: true,
            get: function () {
                return true;
            }
        });
        var req = new XMLHttpRequest();
        var result = !!req.onreadystatechange;
        // restore original desc
        Object.defineProperty(XMLHttpRequest.prototype, 'onreadystatechange', xhrDesc || {});
        return result;
    }
    else {
        Object.defineProperty(XMLHttpRequest.prototype, 'onreadystatechange', {
            enumerable: true,
            configurable: true,
            get: function () {
                return this[zoneSymbol('fakeonreadystatechange')];
            },
            set: function (value) {
                this[zoneSymbol('fakeonreadystatechange')] = value;
            }
        });
        var req = new XMLHttpRequest();
        var detectFunc = function () { };
        req.onreadystatechange = detectFunc;
        var result = req[zoneSymbol('fakeonreadystatechange')] === detectFunc;
        req.onreadystatechange = null;
        return result;
    }
}

var unboundKey = zoneSymbol('unbound');
// Whenever any eventListener fires, we check the eventListener target and all parents
// for `onwhatever` properties and replace them with zone-bound functions
// - Chrome (for now)
function patchViaCapturingAllTheEvents() {
    var _loop_1 = function (i) {
        var property = eventNames[i];
        var onproperty = 'on' + property;
        self.addEventListener(property, function (event) {
            var elt = event.target, bound, source;
            if (elt) {
                source = elt.constructor['name'] + '.' + onproperty;
            }
            else {
                source = 'unknown.' + onproperty;
            }
            while (elt) {
                if (elt[onproperty] && !elt[onproperty][unboundKey]) {
                    bound = Zone.current.wrap(elt[onproperty], source);
                    bound[unboundKey] = elt[onproperty];
                    elt[onproperty] = bound;
                }
                elt = elt.parentElement;
            }
        }, true);
    };
    for (var i = 0; i < eventNames.length; i++) {
        _loop_1(i);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'
        .split(',');
    var EVENT_TARGET = 'EventTarget';
    var apis = [];
    var isWtf = _global['wtf'];
    var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');
    if (isWtf) {
        // Workaround for: https://github.com/google/tracing-framework/issues/555
        apis = WTF_ISSUE_555_ARRAY.map(function (v) { return 'HTML' + v + 'Element'; }).concat(NO_EVENT_TARGET);
    }
    else if (_global[EVENT_TARGET]) {
        apis.push(EVENT_TARGET);
    }
    else {
        // Note: EventTarget is not available in all browsers,
        // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
        apis = NO_EVENT_TARGET;
    }
    var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
    var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
    var ieOrEdge = isIEOrEdge();
    var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
    var FUNCTION_WRAPPER = '[object FunctionWrapper]';
    var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames[eventName] = {};
        zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    }
    //  predefine all task.source string
    for (var i = 0; i < WTF_ISSUE_555.length; i++) {
        var target = WTF_ISSUE_555_ARRAY[i];
        var targets = globalSources[target] = {};
        for (var j = 0; j < eventNames.length; j++) {
            var eventName = eventNames[j];
            targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
        }
    }
    var checkIEAndCrossContext = function (nativeDelegate, delegate, target, args) {
        if (!isDisableIECheck && ieOrEdge) {
            if (isEnableCrossContextCheck) {
                try {
                    var testString = delegate.toString();
                    if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                        nativeDelegate.apply(target, args);
                        return false;
                    }
                }
                catch (error) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
            else {
                var testString = delegate.toString();
                if ((testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS)) {
                    nativeDelegate.apply(target, args);
                    return false;
                }
            }
        }
        else if (isEnableCrossContextCheck) {
            try {
                delegate.toString();
            }
            catch (error) {
                nativeDelegate.apply(target, args);
                return false;
            }
        }
        return true;
    };
    var apiTypes = [];
    for (var i = 0; i < apis.length; i++) {
        var type = _global[apis[i]];
        apiTypes.push(type && type.prototype);
    }
    patchEventTarget(_global, apiTypes, { validateHandler: checkIEAndCrossContext });
    api.patchEventTarget = patchEventTarget;
    return true;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function registerElementPatch(_global) {
    if ((!isBrowser && !isMix) || !('registerElement' in _global.document)) {
        return;
    }
    var _registerElement = document.registerElement;
    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
    document.registerElement = function (name, opts) {
        if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
                var source = 'Document.registerElement::' + callback;
                if (opts.prototype.hasOwnProperty(callback)) {
                    var descriptor = Object.getOwnPropertyDescriptor(opts.prototype, callback);
                    if (descriptor && descriptor.value) {
                        descriptor.value = Zone.current.wrap(descriptor.value, source);
                        _redefineProperty(opts.prototype, callback, descriptor);
                    }
                    else {
                        opts.prototype[callback] = Zone.current.wrap(opts.prototype[callback], source);
                    }
                }
                else if (opts.prototype[callback]) {
                    opts.prototype[callback] = Zone.current.wrap(opts.prototype[callback], source);
                }
            });
        }
        return _registerElement.apply(document, [name, opts]);
    };
    attachOriginToPatched(document.registerElement, _registerElement);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('timers', function (global, Zone, api) {
    var set = 'set';
    var clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', function (global, Zone, api) {
    var blockingMethods = ['alert', 'prompt', 'confirm'];
    for (var i = 0; i < blockingMethods.length; i++) {
        var name_1 = blockingMethods[i];
        patchMethod(global, name_1, function (delegate, symbol, name) {
            return function (s, args) {
                return Zone.current.run(delegate, global, args, name);
            };
        });
    }
});
Zone.__load_patch('EventTarget', function (global, Zone, api) {
    eventTargetPatch(global, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
    }
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
    patchClass('FileReader');
});
Zone.__load_patch('on_property', function (global, Zone, api) {
    propertyDescriptorPatch(api, global);
    propertyPatch();
    registerElementPatch(global);
});
Zone.__load_patch('canvas', function (global, Zone, api) {
    var HTMLCanvasElement = global['HTMLCanvasElement'];
    if (typeof HTMLCanvasElement !== 'undefined' && HTMLCanvasElement.prototype &&
        HTMLCanvasElement.prototype.toBlob) {
        patchMacroTask(HTMLCanvasElement.prototype, 'toBlob', function (self, args) {
            return { name: 'HTMLCanvasElement.toBlob', target: self, callbackIndex: 0, args: args };
        });
    }
});
Zone.__load_patch('XHR', function (global, Zone, api) {
    // Treat XMLHTTPRequest as a macrotask.
    patchXHR(global);
    var XHR_TASK = zoneSymbol('xhrTask');
    var XHR_SYNC = zoneSymbol('xhrSync');
    var XHR_LISTENER = zoneSymbol('xhrListener');
    var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    function patchXHR(window) {
        function findPendingTask(target) {
            var pendingTask = target[XHR_TASK];
            return pendingTask;
        }
        function scheduleTask(task) {
            XMLHttpRequest[XHR_SCHEDULED] = false;
            var data = task.data;
            // remove existing event listener
            var listener = data.target[XHR_LISTENER];
            var oriAddListener = data.target[zoneSymbol('addEventListener')];
            var oriRemoveListener = data.target[zoneSymbol('removeEventListener')];
            if (listener) {
                oriRemoveListener.apply(data.target, ['readystatechange', listener]);
            }
            var newListener = data.target[XHR_LISTENER] = function () {
                if (data.target.readyState === data.target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && XMLHttpRequest[XHR_SCHEDULED] &&
                        task.state === 'scheduled') {
                        task.invoke();
                    }
                }
            };
            oriAddListener.apply(data.target, ['readystatechange', newListener]);
            var storedTask = data.target[XHR_TASK];
            if (!storedTask) {
                data.target[XHR_TASK] = task;
            }
            sendNative.apply(data.target, data.args);
            XMLHttpRequest[XHR_SCHEDULED] = true;
            return task;
        }
        function placeholderCallback() { }
        function clearTask(task) {
            var data = task.data;
            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.
            data.aborted = true;
            return abortNative.apply(data.target, data.args);
        }
        var openNative = patchMethod(window.XMLHttpRequest.prototype, 'open', function () { return function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            return openNative.apply(self, args);
        }; });
        var sendNative = patchMethod(window.XMLHttpRequest.prototype, 'send', function () { return function (self, args) {
            var zone = Zone.current;
            if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
            }
            else {
                var options = { target: self, isPeriodic: false, delay: null, args: args, aborted: false };
                return zone.scheduleMacroTask('XMLHttpRequest.send', placeholderCallback, options, scheduleTask, clearTask);
            }
        }; });
        var abortNative = patchMethod(window.XMLHttpRequest.prototype, 'abort', function (delegate) { return function (self, args) {
            var task = findPendingTask(self);
            if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || (task.data && task.data.aborted)) {
                    return;
                }
                task.zone.cancelTask(task);
            }
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
        }; });
    }
});
Zone.__load_patch('geolocation', function (global, Zone, api) {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
});
Zone.__load_patch('PromiseRejectionEvent', function (global, Zone, api) {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
        return function (e) {
            var eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(function (eventTask) {
                // windows has added unhandledrejection event listener
                // trigger the event listener
                var PromiseRejectionEvent = global['PromiseRejectionEvent'];
                if (PromiseRejectionEvent) {
                    var evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                    eventTask.invoke(evt);
                }
            });
        };
    }
    if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
            findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] =
            findPromiseRejectionHandler('rejectionhandled');
    }
});
Zone.__load_patch('util', function (global, Zone, api) {
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(129)))

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var router_1 = __webpack_require__(11);
var not_found_component_1 = __webpack_require__(43);
var appRoutes = [
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    { path: '**', component: not_found_component_1.PageNotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(appRoutes, {
                    enableTracing: true
                })
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var store_1 = __webpack_require__(15);
var users_reducer_1 = __webpack_require__(23);
var user_reducer_1 = __webpack_require__(45);
var AppStoreModule = (function () {
    function AppStoreModule() {
    }
    AppStoreModule = __decorate([
        core_1.NgModule({
            imports: [store_1.StoreModule.provideStore({ users: users_reducer_1.users, user: user_reducer_1.user })]
        })
    ], AppStoreModule);
    return AppStoreModule;
}());
exports.AppStoreModule = AppStoreModule;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n            <h1 class=\"title\">Library</h1>\n            <nav>\n            <a routerLink=\"/users\" routerLinkActive=\"active\">Users</a>\n            </nav>\n            <router-outlet></router-outlet>  \n        "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var platform_browser_1 = __webpack_require__(41);
var router_1 = __webpack_require__(11);
var http_1 = __webpack_require__(42);
var app_component_1 = __webpack_require__(69);
var app_routing_module_1 = __webpack_require__(67);
var app_store_1 = __webpack_require__(68);
var users_module_1 = __webpack_require__(73);
var not_found_component_1 = __webpack_require__(43);
var AppModule = (function () {
    function AppModule(router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                users_module_1.UsersModule,
                app_routing_module_1.AppRoutingModule,
                app_store_1.AppStoreModule,
                http_1.HttpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                not_found_component_1.PageNotFoundComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var UsersListComponent = (function () {
    function UsersListComponent() {
        console.log('USERS: ' + this.users);
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], UsersListComponent.prototype, "users", void 0);
    UsersListComponent = __decorate([
        core_1.Component({
            selector: 'users-list',
            template: "\n                \n                    <div *ngFor=\"let user of users | async\" style=\"margin-top: 0.5rem\">\n                        <a *ngIf=\"user.show\" routerLink=\"/users/{{user.id}}\">\n                            <h3 style=\"margin-top: 1rem\">User id: {{user.id}}, user name: {{user.name}}</h3>\n                        </a>    \n                    </div>\n                "
        }),
        __metadata("design:paramtypes", [])
    ], UsersListComponent);
    return UsersListComponent;
}());
exports.UsersListComponent = UsersListComponent;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var router_1 = __webpack_require__(11);
var users_main_component_1 = __webpack_require__(47);
var users_add_component_1 = __webpack_require__(46);
var user_detail_component_1 = __webpack_require__(44);
var usersRoutes = [
    { path: 'users', component: users_main_component_1.UsersMainComponent },
    { path: 'users/add', component: users_add_component_1.UsersAddComponent },
    { path: 'users/:id', component: user_detail_component_1.UserDetailComponent }
];
var UsersRoutingModule = (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(usersRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());
exports.UsersRoutingModule = UsersRoutingModule;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(2);
var common_1 = __webpack_require__(61);
var users_main_component_1 = __webpack_require__(47);
var users_list_component_1 = __webpack_require__(71);
var users_add_component_1 = __webpack_require__(46);
var user_detail_component_1 = __webpack_require__(44);
var users_routing_module_1 = __webpack_require__(72);
var users_service_1 = __webpack_require__(16);
var UsersModule = (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                users_routing_module_1.UsersRoutingModule
            ],
            declarations: [
                users_main_component_1.UsersMainComponent,
                users_list_component_1.UsersListComponent,
                users_add_component_1.UsersAddComponent,
                user_detail_component_1.UserDetailComponent
            ],
            providers: [
                users_service_1.UsersService
            ]
        })
    ], UsersModule);
    return UsersModule;
}());
exports.UsersModule = UsersModule;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(18);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(35);
var toLength = __webpack_require__(36);
var toAbsoluteIndex = __webpack_require__(97);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
var isArray = __webpack_require__(83);
var SPECIES = __webpack_require__(5)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(76);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(25);
var TAG = __webpack_require__(5)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(31);
var getWeak = __webpack_require__(20).getWeak;
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(3);
var anInstance = __webpack_require__(24);
var forOf = __webpack_require__(18);
var createArrayMethod = __webpack_require__(49);
var $has = __webpack_require__(7);
var validate = __webpack_require__(14);
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(6).document;
module.exports = document && document.documentElement;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);
var setPrototypeOf = __webpack_require__(95).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(29);
var ITERATOR = __webpack_require__(5)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(25);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(1);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(55);
var descriptor = __webpack_require__(30);
var setToStringTag = __webpack_require__(32);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(19)(IteratorPrototype, __webpack_require__(5)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(89);
var $export = __webpack_require__(27);
var redefine = __webpack_require__(13);
var hide = __webpack_require__(19);
var has = __webpack_require__(7);
var Iterators = __webpack_require__(29);
var $iterCreate = __webpack_require__(85);
var setToStringTag = __webpack_require__(32);
var getPrototypeOf = __webpack_require__(21);
var ITERATOR = __webpack_require__(5)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(5)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(56);
var gOPS = __webpack_require__(93);
var pIE = __webpack_require__(57);
var toObject = __webpack_require__(37);
var IObject = __webpack_require__(28);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(9)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(10);
var anObject = __webpack_require__(1);
var getKeys = __webpack_require__(56);

module.exports = __webpack_require__(8) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(57);
var createDesc = __webpack_require__(30);
var toIObject = __webpack_require__(35);
var toPrimitive = __webpack_require__(59);
var has = __webpack_require__(7);
var IE8_DOM_DEFINE = __webpack_require__(54);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(8) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 93 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(7);
var toIObject = __webpack_require__(35);
var arrayIndexOf = __webpack_require__(75)(false);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(3);
var anObject = __webpack_require__(1);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(12)(Function.call, __webpack_require__(92).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(6);
var dP = __webpack_require__(10);
var DESCRIPTORS = __webpack_require__(8);
var SPECIES = __webpack_require__(5)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(58);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(78);
var ITERATOR = __webpack_require__(5)('iterator');
var Iterators = __webpack_require__(29);
module.exports = __webpack_require__(17).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(50);
var validate = __webpack_require__(14);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(26)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(50);
var validate = __webpack_require__(14);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(26)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var each = __webpack_require__(49)(0);
var redefine = __webpack_require__(13);
var meta = __webpack_require__(20);
var assign = __webpack_require__(90);
var weak = __webpack_require__(79);
var isObject = __webpack_require__(3);
var fails = __webpack_require__(9);
var validate = __webpack_require__(14);
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(26)(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(4);
var anObject = __webpack_require__(1);
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(4);
var anObject = __webpack_require__(1);
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(100);
var from = __webpack_require__(74);
var metadata = __webpack_require__(4);
var anObject = __webpack_require__(1);
var getPrototypeOf = __webpack_require__(21);
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(4);
var anObject = __webpack_require__(1);
var getPrototypeOf = __webpack_require__(21);
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(4);
var anObject = __webpack_require__(1);
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(4);
var anObject = __webpack_require__(1);
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(4);
var anObject = __webpack_require__(1);
var getPrototypeOf = __webpack_require__(21);
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(4);
var anObject = __webpack_require__(1);
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var $metadata = __webpack_require__(4);
var anObject = __webpack_require__(1);
var aFunction = __webpack_require__(48);
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(112)(undefined);
// imports


// module
exports.push([module.i, "/*! TACHYONS v4.7.3 | http://tachyons.io */\n/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}/* 1 */ [type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}/* 1 */ menu,details{display:block}summary{display:list-item}canvas{display:inline-block}[hidden],template{display:none}.border-box,a,article,body,code,dd,div,dl,dt,fieldset,footer,form,h1,h2,h3,h4,h5,h6,header,html,input[type=email],input[type=number],input[type=password],input[type=tel],input[type=text],input[type=url],legend,li,main,ol,p,pre,section,table,td,textarea,th,tr,ul{box-sizing:border-box}.aspect-ratio{height:0;position:relative}.aspect-ratio--16x9{padding-bottom:56.25%}.aspect-ratio--9x16{padding-bottom:177.77%}.aspect-ratio--4x3{padding-bottom:75%}.aspect-ratio--3x4{padding-bottom:133.33%}.aspect-ratio--6x4{padding-bottom:66.6%}.aspect-ratio--4x6{padding-bottom:150%}.aspect-ratio--8x5{padding-bottom:62.5%}.aspect-ratio--5x8{padding-bottom:160%}.aspect-ratio--7x5{padding-bottom:71.42%}.aspect-ratio--5x7{padding-bottom:140%}.aspect-ratio--1x1{padding-bottom:100%}.aspect-ratio--object{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:100}img{max-width:100%}.cover{background-size:cover!important}.contain{background-size:contain!important}.bg-center{background-position:50%}.bg-center,.bg-top{background-repeat:no-repeat}.bg-top{background-position:top}.bg-right{background-position:100%}.bg-bottom,.bg-right{background-repeat:no-repeat}.bg-bottom{background-position:bottom}.bg-left{background-repeat:no-repeat;background-position:0}.outline{outline:1px solid}.outline-transparent{outline:1px solid transparent}.outline-0{outline:0}.ba{border-style:solid;border-width:1px}.bt{border-top-style:solid;border-top-width:1px}.br{border-right-style:solid;border-right-width:1px}.bb{border-bottom-style:solid;border-bottom-width:1px}.bl{border-left-style:solid;border-left-width:1px}.bn{border-style:none;border-width:0}.b--black{border-color:#000}.b--near-black{border-color:#111}.b--dark-gray{border-color:#333}.b--mid-gray{border-color:#555}.b--gray{border-color:#777}.b--silver{border-color:#999}.b--light-silver{border-color:#aaa}.b--moon-gray{border-color:#ccc}.b--light-gray{border-color:#eee}.b--near-white{border-color:#f4f4f4}.b--white{border-color:#fff}.b--white-90{border-color:hsla(0,0%,100%,.9)}.b--white-80{border-color:hsla(0,0%,100%,.8)}.b--white-70{border-color:hsla(0,0%,100%,.7)}.b--white-60{border-color:hsla(0,0%,100%,.6)}.b--white-50{border-color:hsla(0,0%,100%,.5)}.b--white-40{border-color:hsla(0,0%,100%,.4)}.b--white-30{border-color:hsla(0,0%,100%,.3)}.b--white-20{border-color:hsla(0,0%,100%,.2)}.b--white-10{border-color:hsla(0,0%,100%,.1)}.b--white-05{border-color:hsla(0,0%,100%,.05)}.b--white-025{border-color:hsla(0,0%,100%,.025)}.b--white-0125{border-color:hsla(0,0%,100%,.0125)}.b--black-90{border-color:rgba(0,0,0,.9)}.b--black-80{border-color:rgba(0,0,0,.8)}.b--black-70{border-color:rgba(0,0,0,.7)}.b--black-60{border-color:rgba(0,0,0,.6)}.b--black-50{border-color:rgba(0,0,0,.5)}.b--black-40{border-color:rgba(0,0,0,.4)}.b--black-30{border-color:rgba(0,0,0,.3)}.b--black-20{border-color:rgba(0,0,0,.2)}.b--black-10{border-color:rgba(0,0,0,.1)}.b--black-05{border-color:rgba(0,0,0,.05)}.b--black-025{border-color:rgba(0,0,0,.025)}.b--black-0125{border-color:rgba(0,0,0,.0125)}.b--dark-red{border-color:#e7040f}.b--red{border-color:#ff4136}.b--light-red{border-color:#ff725c}.b--orange{border-color:#ff6300}.b--gold{border-color:#ffb700}.b--yellow{border-color:gold}.b--light-yellow{border-color:#fbf1a9}.b--purple{border-color:#5e2ca5}.b--light-purple{border-color:#a463f2}.b--dark-pink{border-color:#d5008f}.b--hot-pink{border-color:#ff41b4}.b--pink{border-color:#ff80cc}.b--light-pink{border-color:#ffa3d7}.b--dark-green{border-color:#137752}.b--green{border-color:#19a974}.b--light-green{border-color:#9eebcf}.b--navy{border-color:#001b44}.b--dark-blue{border-color:#00449e}.b--blue{border-color:#357edd}.b--light-blue{border-color:#96ccff}.b--lightest-blue{border-color:#cdecff}.b--washed-blue{border-color:#f6fffe}.b--washed-green{border-color:#e8fdf5}.b--washed-yellow{border-color:#fffceb}.b--washed-red{border-color:#ffdfdf}.b--transparent{border-color:transparent}.b--inherit{border-color:inherit}.br0{border-radius:0}.br1{border-radius:.125rem}.br2{border-radius:.25rem}.br3{border-radius:.5rem}.br4{border-radius:1rem}.br-100{border-radius:100%}.br-pill{border-radius:9999px}.br--bottom{border-top-left-radius:0;border-top-right-radius:0}.br--top{border-bottom-right-radius:0}.br--right,.br--top{border-bottom-left-radius:0}.br--right{border-top-left-radius:0}.br--left{border-top-right-radius:0;border-bottom-right-radius:0}.b--dotted{border-style:dotted}.b--dashed{border-style:dashed}.b--solid{border-style:solid}.b--none{border-style:none}.bw0{border-width:0}.bw1{border-width:.125rem}.bw2{border-width:.25rem}.bw3{border-width:.5rem}.bw4{border-width:1rem}.bw5{border-width:2rem}.bt-0{border-top-width:0}.br-0{border-right-width:0}.bb-0{border-bottom-width:0}.bl-0{border-left-width:0}.shadow-1{box-shadow:0 0 4px 2px rgba(0,0,0,.2)}.shadow-2{box-shadow:0 0 8px 2px rgba(0,0,0,.2)}.shadow-3{box-shadow:2px 2px 4px 2px rgba(0,0,0,.2)}.shadow-4{box-shadow:2px 2px 8px 0 rgba(0,0,0,.2)}.shadow-5{box-shadow:4px 4px 8px 0 rgba(0,0,0,.2)}.pre{overflow-x:auto;overflow-y:hidden;overflow:scroll}.top-0{top:0}.right-0{right:0}.bottom-0{bottom:0}.left-0{left:0}.top-1{top:1rem}.right-1{right:1rem}.bottom-1{bottom:1rem}.left-1{left:1rem}.top-2{top:2rem}.right-2{right:2rem}.bottom-2{bottom:2rem}.left-2{left:2rem}.top--1{top:-1rem}.right--1{right:-1rem}.bottom--1{bottom:-1rem}.left--1{left:-1rem}.top--2{top:-2rem}.right--2{right:-2rem}.bottom--2{bottom:-2rem}.left--2{left:-2rem}.absolute--fill{top:0;right:0;bottom:0;left:0}.cf:after,.cf:before{content:\" \";display:table}.cf:after{clear:both}.cf{*zoom:1}.cl{clear:left}.cr{clear:right}.cb{clear:both}.cn{clear:none}.dn{display:none}.di{display:inline}.db{display:block}.dib{display:inline-block}.dit{display:inline-table}.dt{display:table}.dtc{display:table-cell}.dt-row{display:table-row}.dt-row-group{display:table-row-group}.dt-column{display:table-column}.dt-column-group{display:table-column-group}.dt--fixed{table-layout:fixed;width:100%}.flex{display:-webkit-box;display:-ms-flexbox;display:flex}.inline-flex{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.flex-auto{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;min-height:0}.flex-none{-webkit-box-flex:0;-ms-flex:none;flex:none}.flex-column{-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column}.flex-column,.flex-row{-webkit-box-direction:normal}.flex-row{-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row}.flex-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.flex-column-reverse{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.flex-row-reverse{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.flex-wrap-reverse{-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}.items-start{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.items-end{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.items-center{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.items-baseline{-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline}.items-stretch{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.self-start{-ms-flex-item-align:start;align-self:flex-start}.self-end{-ms-flex-item-align:end;align-self:flex-end}.self-center{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.self-baseline{-ms-flex-item-align:baseline;align-self:baseline}.self-stretch{-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch}.justify-start{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.justify-end{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.justify-center{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.justify-between{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.justify-around{-ms-flex-pack:distribute;justify-content:space-around}.content-start{-ms-flex-line-pack:start;align-content:flex-start}.content-end{-ms-flex-line-pack:end;align-content:flex-end}.content-center{-ms-flex-line-pack:center;align-content:center}.content-between{-ms-flex-line-pack:justify;align-content:space-between}.content-around{-ms-flex-line-pack:distribute;align-content:space-around}.content-stretch{-ms-flex-line-pack:stretch;align-content:stretch}.order-0{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.order-1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-4{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.order-5{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.order-6{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.order-7{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.order-8{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.order-last{-webkit-box-ordinal-group:100000;-ms-flex-order:99999;order:99999}.fl{float:left}.fl,.fr{_display:inline}.fr{float:right}.fn{float:none}.sans-serif{font-family:-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif}.serif{font-family:georgia,times,serif}.system-sans-serif{font-family:sans-serif}.system-serif{font-family:serif}.code,code{font-family:Consolas,monaco,monospace}.courier{font-family:Courier Next,courier,monospace}.helvetica{font-family:helvetica neue,helvetica,sans-serif}.avenir{font-family:avenir next,avenir,sans-serif}.athelas{font-family:athelas,georgia,serif}.georgia{font-family:georgia,serif}.times{font-family:times,serif}.bodoni{font-family:Bodoni MT,serif}.calisto{font-family:Calisto MT,serif}.garamond{font-family:garamond,serif}.baskerville{font-family:baskerville,serif}.i{font-style:italic}.fs-normal{font-style:normal}.normal{font-weight:400}.b{font-weight:700}.fw1{font-weight:100}.fw2{font-weight:200}.fw3{font-weight:300}.fw4{font-weight:400}.fw5{font-weight:500}.fw6{font-weight:600}.fw7{font-weight:700}.fw8{font-weight:800}.fw9{font-weight:900}.input-reset{-webkit-appearance:none;-moz-appearance:none}.button-reset::-moz-focus-inner,.input-reset::-moz-focus-inner{border:0;padding:0}.h1{height:1rem}.h2{height:2rem}.h3{height:4rem}.h4{height:8rem}.h5{height:16rem}.h-25{height:25%}.h-50{height:50%}.h-75{height:75%}.h-100{height:100%}.min-h-100{min-height:100%}.vh-25{height:25vh}.vh-50{height:50vh}.vh-75{height:75vh}.vh-100{height:100vh}.min-vh-100{min-height:100vh}.h-auto{height:auto}.h-inherit{height:inherit}.tracked{letter-spacing:.1em}.tracked-tight{letter-spacing:-.05em}.tracked-mega{letter-spacing:.25em}.lh-solid{line-height:1}.lh-title{line-height:1.25}.lh-copy{line-height:1.5}.link{text-decoration:none}.link,.link:active,.link:focus,.link:hover,.link:link,.link:visited{-webkit-transition:color .15s ease-in;transition:color .15s ease-in}.link:focus{outline:1px dotted currentColor}.list{list-style-type:none}.mw-100{max-width:100%}.mw1{max-width:1rem}.mw2{max-width:2rem}.mw3{max-width:4rem}.mw4{max-width:8rem}.mw5{max-width:16rem}.mw6{max-width:32rem}.mw7{max-width:48rem}.mw8{max-width:64rem}.mw9{max-width:96rem}.mw-none{max-width:none}.w1{width:1rem}.w2{width:2rem}.w3{width:4rem}.w4{width:8rem}.w5{width:16rem}.w-10{width:10%}.w-20{width:20%}.w-25{width:25%}.w-30{width:30%}.w-33{width:33%}.w-34{width:34%}.w-40{width:40%}.w-50{width:50%}.w-60{width:60%}.w-70{width:70%}.w-75{width:75%}.w-80{width:80%}.w-90{width:90%}.w-100{width:100%}.w-third{width:33.33333%}.w-two-thirds{width:66.66667%}.w-auto{width:auto}.overflow-visible{overflow:visible}.overflow-hidden{overflow:hidden}.overflow-scroll{overflow:scroll}.overflow-auto{overflow:auto}.overflow-x-visible{overflow-x:visible}.overflow-x-hidden{overflow-x:hidden}.overflow-x-scroll{overflow-x:scroll}.overflow-x-auto{overflow-x:auto}.overflow-y-visible{overflow-y:visible}.overflow-y-hidden{overflow-y:hidden}.overflow-y-scroll{overflow-y:scroll}.overflow-y-auto{overflow-y:auto}.static{position:static}.relative{position:relative}.absolute{position:absolute}.fixed{position:fixed}.o-100{opacity:1}.o-90{opacity:.9}.o-80{opacity:.8}.o-70{opacity:.7}.o-60{opacity:.6}.o-50{opacity:.5}.o-40{opacity:.4}.o-30{opacity:.3}.o-20{opacity:.2}.o-10{opacity:.1}.o-05{opacity:.05}.o-025{opacity:.025}.o-0{opacity:0}.rotate-45{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.rotate-135{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.rotate-225{-webkit-transform:rotate(225deg);transform:rotate(225deg)}.rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.rotate-315{-webkit-transform:rotate(315deg);transform:rotate(315deg)}.black-90{color:rgba(0,0,0,.9)}.black-80{color:rgba(0,0,0,.8)}.black-70{color:rgba(0,0,0,.7)}.black-60{color:rgba(0,0,0,.6)}.black-50{color:rgba(0,0,0,.5)}.black-40{color:rgba(0,0,0,.4)}.black-30{color:rgba(0,0,0,.3)}.black-20{color:rgba(0,0,0,.2)}.black-10{color:rgba(0,0,0,.1)}.black-05{color:rgba(0,0,0,.05)}.white-90{color:hsla(0,0%,100%,.9)}.white-80{color:hsla(0,0%,100%,.8)}.white-70{color:hsla(0,0%,100%,.7)}.white-60{color:hsla(0,0%,100%,.6)}.white-50{color:hsla(0,0%,100%,.5)}.white-40{color:hsla(0,0%,100%,.4)}.white-30{color:hsla(0,0%,100%,.3)}.white-20{color:hsla(0,0%,100%,.2)}.white-10{color:hsla(0,0%,100%,.1)}.black{color:#000}.near-black{color:#111}.dark-gray{color:#333}.mid-gray{color:#555}.gray{color:#777}.silver{color:#999}.light-silver{color:#aaa}.moon-gray{color:#ccc}.light-gray{color:#eee}.near-white{color:#f4f4f4}.white{color:#fff}.dark-red{color:#e7040f}.red{color:#ff4136}.light-red{color:#ff725c}.orange{color:#ff6300}.gold{color:#ffb700}.yellow{color:gold}.light-yellow{color:#fbf1a9}.purple{color:#5e2ca5}.light-purple{color:#a463f2}.dark-pink{color:#d5008f}.hot-pink{color:#ff41b4}.pink{color:#ff80cc}.light-pink{color:#ffa3d7}.dark-green{color:#137752}.green{color:#19a974}.light-green{color:#9eebcf}.navy{color:#001b44}.dark-blue{color:#00449e}.blue{color:#357edd}.light-blue{color:#96ccff}.lightest-blue{color:#cdecff}.washed-blue{color:#f6fffe}.washed-green{color:#e8fdf5}.washed-yellow{color:#fffceb}.washed-red{color:#ffdfdf}.color-inherit{color:inherit}.bg-black-90{background-color:rgba(0,0,0,.9)}.bg-black-80{background-color:rgba(0,0,0,.8)}.bg-black-70{background-color:rgba(0,0,0,.7)}.bg-black-60{background-color:rgba(0,0,0,.6)}.bg-black-50{background-color:rgba(0,0,0,.5)}.bg-black-40{background-color:rgba(0,0,0,.4)}.bg-black-30{background-color:rgba(0,0,0,.3)}.bg-black-20{background-color:rgba(0,0,0,.2)}.bg-black-10{background-color:rgba(0,0,0,.1)}.bg-black-05{background-color:rgba(0,0,0,.05)}.bg-white-90{background-color:hsla(0,0%,100%,.9)}.bg-white-80{background-color:hsla(0,0%,100%,.8)}.bg-white-70{background-color:hsla(0,0%,100%,.7)}.bg-white-60{background-color:hsla(0,0%,100%,.6)}.bg-white-50{background-color:hsla(0,0%,100%,.5)}.bg-white-40{background-color:hsla(0,0%,100%,.4)}.bg-white-30{background-color:hsla(0,0%,100%,.3)}.bg-white-20{background-color:hsla(0,0%,100%,.2)}.bg-white-10{background-color:hsla(0,0%,100%,.1)}.bg-black{background-color:#000}.bg-near-black{background-color:#111}.bg-dark-gray{background-color:#333}.bg-mid-gray{background-color:#555}.bg-gray{background-color:#777}.bg-silver{background-color:#999}.bg-light-silver{background-color:#aaa}.bg-moon-gray{background-color:#ccc}.bg-light-gray{background-color:#eee}.bg-near-white{background-color:#f4f4f4}.bg-white{background-color:#fff}.bg-transparent{background-color:transparent}.bg-dark-red{background-color:#e7040f}.bg-red{background-color:#ff4136}.bg-light-red{background-color:#ff725c}.bg-orange{background-color:#ff6300}.bg-gold{background-color:#ffb700}.bg-yellow{background-color:gold}.bg-light-yellow{background-color:#fbf1a9}.bg-purple{background-color:#5e2ca5}.bg-light-purple{background-color:#a463f2}.bg-dark-pink{background-color:#d5008f}.bg-hot-pink{background-color:#ff41b4}.bg-pink{background-color:#ff80cc}.bg-light-pink{background-color:#ffa3d7}.bg-dark-green{background-color:#137752}.bg-green{background-color:#19a974}.bg-light-green{background-color:#9eebcf}.bg-navy{background-color:#001b44}.bg-dark-blue{background-color:#00449e}.bg-blue{background-color:#357edd}.bg-light-blue{background-color:#96ccff}.bg-lightest-blue{background-color:#cdecff}.bg-washed-blue{background-color:#f6fffe}.bg-washed-green{background-color:#e8fdf5}.bg-washed-yellow{background-color:#fffceb}.bg-washed-red{background-color:#ffdfdf}.bg-inherit{background-color:inherit}.hover-black:focus,.hover-black:hover{color:#000}.hover-near-black:focus,.hover-near-black:hover{color:#111}.hover-dark-gray:focus,.hover-dark-gray:hover{color:#333}.hover-mid-gray:focus,.hover-mid-gray:hover{color:#555}.hover-gray:focus,.hover-gray:hover{color:#777}.hover-silver:focus,.hover-silver:hover{color:#999}.hover-light-silver:focus,.hover-light-silver:hover{color:#aaa}.hover-moon-gray:focus,.hover-moon-gray:hover{color:#ccc}.hover-light-gray:focus,.hover-light-gray:hover{color:#eee}.hover-near-white:focus,.hover-near-white:hover{color:#f4f4f4}.hover-white:focus,.hover-white:hover{color:#fff}.hover-black-90:focus,.hover-black-90:hover{color:rgba(0,0,0,.9)}.hover-black-80:focus,.hover-black-80:hover{color:rgba(0,0,0,.8)}.hover-black-70:focus,.hover-black-70:hover{color:rgba(0,0,0,.7)}.hover-black-60:focus,.hover-black-60:hover{color:rgba(0,0,0,.6)}.hover-black-50:focus,.hover-black-50:hover{color:rgba(0,0,0,.5)}.hover-black-40:focus,.hover-black-40:hover{color:rgba(0,0,0,.4)}.hover-black-30:focus,.hover-black-30:hover{color:rgba(0,0,0,.3)}.hover-black-20:focus,.hover-black-20:hover{color:rgba(0,0,0,.2)}.hover-black-10:focus,.hover-black-10:hover{color:rgba(0,0,0,.1)}.hover-white-90:focus,.hover-white-90:hover{color:hsla(0,0%,100%,.9)}.hover-white-80:focus,.hover-white-80:hover{color:hsla(0,0%,100%,.8)}.hover-white-70:focus,.hover-white-70:hover{color:hsla(0,0%,100%,.7)}.hover-white-60:focus,.hover-white-60:hover{color:hsla(0,0%,100%,.6)}.hover-white-50:focus,.hover-white-50:hover{color:hsla(0,0%,100%,.5)}.hover-white-40:focus,.hover-white-40:hover{color:hsla(0,0%,100%,.4)}.hover-white-30:focus,.hover-white-30:hover{color:hsla(0,0%,100%,.3)}.hover-white-20:focus,.hover-white-20:hover{color:hsla(0,0%,100%,.2)}.hover-white-10:focus,.hover-white-10:hover{color:hsla(0,0%,100%,.1)}.hover-inherit:focus,.hover-inherit:hover{color:inherit}.hover-bg-black:focus,.hover-bg-black:hover{background-color:#000}.hover-bg-near-black:focus,.hover-bg-near-black:hover{background-color:#111}.hover-bg-dark-gray:focus,.hover-bg-dark-gray:hover{background-color:#333}.hover-bg-dark-gray:focus,.hover-bg-mid-gray:hover{background-color:#555}.hover-bg-gray:focus,.hover-bg-gray:hover{background-color:#777}.hover-bg-silver:focus,.hover-bg-silver:hover{background-color:#999}.hover-bg-light-silver:focus,.hover-bg-light-silver:hover{background-color:#aaa}.hover-bg-moon-gray:focus,.hover-bg-moon-gray:hover{background-color:#ccc}.hover-bg-light-gray:focus,.hover-bg-light-gray:hover{background-color:#eee}.hover-bg-near-white:focus,.hover-bg-near-white:hover{background-color:#f4f4f4}.hover-bg-white:focus,.hover-bg-white:hover{background-color:#fff}.hover-bg-transparent:focus,.hover-bg-transparent:hover{background-color:transparent}.hover-bg-black-90:focus,.hover-bg-black-90:hover{background-color:rgba(0,0,0,.9)}.hover-bg-black-80:focus,.hover-bg-black-80:hover{background-color:rgba(0,0,0,.8)}.hover-bg-black-70:focus,.hover-bg-black-70:hover{background-color:rgba(0,0,0,.7)}.hover-bg-black-60:focus,.hover-bg-black-60:hover{background-color:rgba(0,0,0,.6)}.hover-bg-black-50:focus,.hover-bg-black-50:hover{background-color:rgba(0,0,0,.5)}.hover-bg-black-40:focus,.hover-bg-black-40:hover{background-color:rgba(0,0,0,.4)}.hover-bg-black-30:focus,.hover-bg-black-30:hover{background-color:rgba(0,0,0,.3)}.hover-bg-black-20:focus,.hover-bg-black-20:hover{background-color:rgba(0,0,0,.2)}.hover-bg-black-10:focus,.hover-bg-black-10:hover{background-color:rgba(0,0,0,.1)}.hover-bg-white-90:focus,.hover-bg-white-90:hover{background-color:hsla(0,0%,100%,.9)}.hover-bg-white-80:focus,.hover-bg-white-80:hover{background-color:hsla(0,0%,100%,.8)}.hover-bg-white-70:focus,.hover-bg-white-70:hover{background-color:hsla(0,0%,100%,.7)}.hover-bg-white-60:focus,.hover-bg-white-60:hover{background-color:hsla(0,0%,100%,.6)}.hover-bg-white-50:focus,.hover-bg-white-50:hover{background-color:hsla(0,0%,100%,.5)}.hover-bg-white-40:focus,.hover-bg-white-40:hover{background-color:hsla(0,0%,100%,.4)}.hover-bg-white-30:focus,.hover-bg-white-30:hover{background-color:hsla(0,0%,100%,.3)}.hover-bg-white-20:focus,.hover-bg-white-20:hover{background-color:hsla(0,0%,100%,.2)}.hover-bg-white-10:focus,.hover-bg-white-10:hover{background-color:hsla(0,0%,100%,.1)}.hover-dark-red:focus,.hover-dark-red:hover{color:#e7040f}.hover-red:focus,.hover-red:hover{color:#ff4136}.hover-light-red:focus,.hover-light-red:hover{color:#ff725c}.hover-orange:focus,.hover-orange:hover{color:#ff6300}.hover-gold:focus,.hover-gold:hover{color:#ffb700}.hover-yellow:focus,.hover-yellow:hover{color:gold}.hover-light-yellow:focus,.hover-light-yellow:hover{color:#fbf1a9}.hover-purple:focus,.hover-purple:hover{color:#5e2ca5}.hover-light-purple:focus,.hover-light-purple:hover{color:#a463f2}.hover-dark-pink:focus,.hover-dark-pink:hover{color:#d5008f}.hover-hot-pink:focus,.hover-hot-pink:hover{color:#ff41b4}.hover-pink:focus,.hover-pink:hover{color:#ff80cc}.hover-light-pink:focus,.hover-light-pink:hover{color:#ffa3d7}.hover-dark-green:focus,.hover-dark-green:hover{color:#137752}.hover-green:focus,.hover-green:hover{color:#19a974}.hover-light-green:focus,.hover-light-green:hover{color:#9eebcf}.hover-navy:focus,.hover-navy:hover{color:#001b44}.hover-dark-blue:focus,.hover-dark-blue:hover{color:#00449e}.hover-blue:focus,.hover-blue:hover{color:#357edd}.hover-light-blue:focus,.hover-light-blue:hover{color:#96ccff}.hover-lightest-blue:focus,.hover-lightest-blue:hover{color:#cdecff}.hover-washed-blue:focus,.hover-washed-blue:hover{color:#f6fffe}.hover-washed-green:focus,.hover-washed-green:hover{color:#e8fdf5}.hover-washed-yellow:focus,.hover-washed-yellow:hover{color:#fffceb}.hover-washed-red:focus,.hover-washed-red:hover{color:#ffdfdf}.hover-bg-dark-red:focus,.hover-bg-dark-red:hover{background-color:#e7040f}.hover-bg-red:focus,.hover-bg-red:hover{background-color:#ff4136}.hover-bg-light-red:focus,.hover-bg-light-red:hover{background-color:#ff725c}.hover-bg-orange:focus,.hover-bg-orange:hover{background-color:#ff6300}.hover-bg-gold:focus,.hover-bg-gold:hover{background-color:#ffb700}.hover-bg-yellow:focus,.hover-bg-yellow:hover{background-color:gold}.hover-bg-light-yellow:focus,.hover-bg-light-yellow:hover{background-color:#fbf1a9}.hover-bg-purple:focus,.hover-bg-purple:hover{background-color:#5e2ca5}.hover-bg-light-purple:focus,.hover-bg-light-purple:hover{background-color:#a463f2}.hover-bg-dark-pink:focus,.hover-bg-dark-pink:hover{background-color:#d5008f}.hover-bg-hot-pink:focus,.hover-bg-hot-pink:hover{background-color:#ff41b4}.hover-bg-pink:focus,.hover-bg-pink:hover{background-color:#ff80cc}.hover-bg-light-pink:focus,.hover-bg-light-pink:hover{background-color:#ffa3d7}.hover-bg-dark-green:focus,.hover-bg-dark-green:hover{background-color:#137752}.hover-bg-green:focus,.hover-bg-green:hover{background-color:#19a974}.hover-bg-light-green:focus,.hover-bg-light-green:hover{background-color:#9eebcf}.hover-bg-navy:focus,.hover-bg-navy:hover{background-color:#001b44}.hover-bg-dark-blue:focus,.hover-bg-dark-blue:hover{background-color:#00449e}.hover-bg-blue:focus,.hover-bg-blue:hover{background-color:#357edd}.hover-bg-light-blue:focus,.hover-bg-light-blue:hover{background-color:#96ccff}.hover-bg-lightest-blue:focus,.hover-bg-lightest-blue:hover{background-color:#cdecff}.hover-bg-washed-blue:focus,.hover-bg-washed-blue:hover{background-color:#f6fffe}.hover-bg-washed-green:focus,.hover-bg-washed-green:hover{background-color:#e8fdf5}.hover-bg-washed-yellow:focus,.hover-bg-washed-yellow:hover{background-color:#fffceb}.hover-bg-washed-red:focus,.hover-bg-washed-red:hover{background-color:#ffdfdf}.hover-bg-inherit:focus,.hover-bg-inherit:hover{background-color:inherit}.pa0{padding:0}.pa1{padding:.25rem}.pa2{padding:.5rem}.pa3{padding:1rem}.pa4{padding:2rem}.pa5{padding:4rem}.pa6{padding:8rem}.pa7{padding:16rem}.pl0{padding-left:0}.pl1{padding-left:.25rem}.pl2{padding-left:.5rem}.pl3{padding-left:1rem}.pl4{padding-left:2rem}.pl5{padding-left:4rem}.pl6{padding-left:8rem}.pl7{padding-left:16rem}.pr0{padding-right:0}.pr1{padding-right:.25rem}.pr2{padding-right:.5rem}.pr3{padding-right:1rem}.pr4{padding-right:2rem}.pr5{padding-right:4rem}.pr6{padding-right:8rem}.pr7{padding-right:16rem}.pb0{padding-bottom:0}.pb1{padding-bottom:.25rem}.pb2{padding-bottom:.5rem}.pb3{padding-bottom:1rem}.pb4{padding-bottom:2rem}.pb5{padding-bottom:4rem}.pb6{padding-bottom:8rem}.pb7{padding-bottom:16rem}.pt0{padding-top:0}.pt1{padding-top:.25rem}.pt2{padding-top:.5rem}.pt3{padding-top:1rem}.pt4{padding-top:2rem}.pt5{padding-top:4rem}.pt6{padding-top:8rem}.pt7{padding-top:16rem}.pv0{padding-top:0;padding-bottom:0}.pv1{padding-top:.25rem;padding-bottom:.25rem}.pv2{padding-top:.5rem;padding-bottom:.5rem}.pv3{padding-top:1rem;padding-bottom:1rem}.pv4{padding-top:2rem;padding-bottom:2rem}.pv5{padding-top:4rem;padding-bottom:4rem}.pv6{padding-top:8rem;padding-bottom:8rem}.pv7{padding-top:16rem;padding-bottom:16rem}.ph0{padding-left:0;padding-right:0}.ph1{padding-left:.25rem;padding-right:.25rem}.ph2{padding-left:.5rem;padding-right:.5rem}.ph3{padding-left:1rem;padding-right:1rem}.ph4{padding-left:2rem;padding-right:2rem}.ph5{padding-left:4rem;padding-right:4rem}.ph6{padding-left:8rem;padding-right:8rem}.ph7{padding-left:16rem;padding-right:16rem}.ma0{margin:0}.ma1{margin:.25rem}.ma2{margin:.5rem}.ma3{margin:1rem}.ma4{margin:2rem}.ma5{margin:4rem}.ma6{margin:8rem}.ma7{margin:16rem}.ml0{margin-left:0}.ml1{margin-left:.25rem}.ml2{margin-left:.5rem}.ml3{margin-left:1rem}.ml4{margin-left:2rem}.ml5{margin-left:4rem}.ml6{margin-left:8rem}.ml7{margin-left:16rem}.mr0{margin-right:0}.mr1{margin-right:.25rem}.mr2{margin-right:.5rem}.mr3{margin-right:1rem}.mr4{margin-right:2rem}.mr5{margin-right:4rem}.mr6{margin-right:8rem}.mr7{margin-right:16rem}.mb0{margin-bottom:0}.mb1{margin-bottom:.25rem}.mb2{margin-bottom:.5rem}.mb3{margin-bottom:1rem}.mb4{margin-bottom:2rem}.mb5{margin-bottom:4rem}.mb6{margin-bottom:8rem}.mb7{margin-bottom:16rem}.mt0{margin-top:0}.mt1{margin-top:.25rem}.mt2{margin-top:.5rem}.mt3{margin-top:1rem}.mt4{margin-top:2rem}.mt5{margin-top:4rem}.mt6{margin-top:8rem}.mt7{margin-top:16rem}.mv0{margin-top:0;margin-bottom:0}.mv1{margin-top:.25rem;margin-bottom:.25rem}.mv2{margin-top:.5rem;margin-bottom:.5rem}.mv3{margin-top:1rem;margin-bottom:1rem}.mv4{margin-top:2rem;margin-bottom:2rem}.mv5{margin-top:4rem;margin-bottom:4rem}.mv6{margin-top:8rem;margin-bottom:8rem}.mv7{margin-top:16rem;margin-bottom:16rem}.mh0{margin-left:0;margin-right:0}.mh1{margin-left:.25rem;margin-right:.25rem}.mh2{margin-left:.5rem;margin-right:.5rem}.mh3{margin-left:1rem;margin-right:1rem}.mh4{margin-left:2rem;margin-right:2rem}.mh5{margin-left:4rem;margin-right:4rem}.mh6{margin-left:8rem;margin-right:8rem}.mh7{margin-left:16rem;margin-right:16rem}.na1{margin:-.25rem}.na2{margin:-.5rem}.na3{margin:-1rem}.na4{margin:-2rem}.na5{margin:-4rem}.na6{margin:-8rem}.na7{margin:-16rem}.nl1{margin-left:-.25rem}.nl2{margin-left:-.5rem}.nl3{margin-left:-1rem}.nl4{margin-left:-2rem}.nl5{margin-left:-4rem}.nl6{margin-left:-8rem}.nl7{margin-left:-16rem}.nr1{margin-right:-.25rem}.nr2{margin-right:-.5rem}.nr3{margin-right:-1rem}.nr4{margin-right:-2rem}.nr5{margin-right:-4rem}.nr6{margin-right:-8rem}.nr7{margin-right:-16rem}.nb1{margin-bottom:-.25rem}.nb2{margin-bottom:-.5rem}.nb3{margin-bottom:-1rem}.nb4{margin-bottom:-2rem}.nb5{margin-bottom:-4rem}.nb6{margin-bottom:-8rem}.nb7{margin-bottom:-16rem}.nt1{margin-top:-.25rem}.nt2{margin-top:-.5rem}.nt3{margin-top:-1rem}.nt4{margin-top:-2rem}.nt5{margin-top:-4rem}.nt6{margin-top:-8rem}.nt7{margin-top:-16rem}.collapse{border-collapse:collapse;border-spacing:0}.striped--light-silver:nth-child(odd){background-color:#aaa}.striped--moon-gray:nth-child(odd){background-color:#ccc}.striped--light-gray:nth-child(odd){background-color:#eee}.striped--near-white:nth-child(odd){background-color:#f4f4f4}.stripe-light:nth-child(odd){background-color:hsla(0,0%,100%,.1)}.stripe-dark:nth-child(odd){background-color:rgba(0,0,0,.1)}.strike{text-decoration:line-through}.underline{text-decoration:underline}.no-underline{text-decoration:none}.tl{text-align:left}.tr{text-align:right}.tc{text-align:center}.ttc{text-transform:capitalize}.ttl{text-transform:lowercase}.ttu{text-transform:uppercase}.ttn{text-transform:none}.f-6,.f-headline{font-size:6rem}.f-5,.f-subheadline{font-size:5rem}.f1{font-size:3rem}.f2{font-size:2.25rem}.f3{font-size:1.5rem}.f4{font-size:1.25rem}.f5{font-size:1rem}.f6{font-size:.875rem}.f7{font-size:.75rem}.measure{max-width:30em}.measure-wide{max-width:34em}.measure-narrow{max-width:20em}.indent{text-indent:1em;margin-top:0;margin-bottom:0}.small-caps{font-variant:small-caps}.truncate{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.overflow-container{overflow-y:scroll}.center{margin-right:auto;margin-left:auto}.clip{position:fixed!important;_position:absolute!important;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px)}.ws-normal{white-space:normal}.nowrap{white-space:nowrap}.pre{white-space:pre}.v-base{vertical-align:baseline}.v-mid{vertical-align:middle}.v-top{vertical-align:top}.v-btm{vertical-align:bottom}.dim{opacity:1}.dim,.dim:focus,.dim:hover{-webkit-transition:opacity .15s ease-in;transition:opacity .15s ease-in}.dim:focus,.dim:hover{opacity:.5}.dim:active{opacity:.8;-webkit-transition:opacity .15s ease-out;transition:opacity .15s ease-out}.glow,.glow:focus,.glow:hover{-webkit-transition:opacity .15s ease-in;transition:opacity .15s ease-in}.glow:focus,.glow:hover{opacity:1}.hide-child .child{opacity:0;-webkit-transition:opacity .15s ease-in;transition:opacity .15s ease-in}.hide-child:active .child,.hide-child:focus .child,.hide-child:hover .child{opacity:1;-webkit-transition:opacity .15s ease-in;transition:opacity .15s ease-in}.underline-hover:focus,.underline-hover:hover{text-decoration:underline}.grow{-moz-osx-font-smoothing:grayscale;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:-webkit-transform .25s ease-out;transition:-webkit-transform .25s ease-out;transition:transform .25s ease-out;transition:transform .25s ease-out,-webkit-transform .25s ease-out}.grow:focus,.grow:hover{-webkit-transform:scale(1.05);transform:scale(1.05)}.grow:active{-webkit-transform:scale(.9);transform:scale(.9)}.grow-large{-moz-osx-font-smoothing:grayscale;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:-webkit-transform .25s ease-in-out;transition:-webkit-transform .25s ease-in-out;transition:transform .25s ease-in-out;transition:transform .25s ease-in-out,-webkit-transform .25s ease-in-out}.grow-large:focus,.grow-large:hover{-webkit-transform:scale(1.2);transform:scale(1.2)}.grow-large:active{-webkit-transform:scale(.95);transform:scale(.95)}.pointer:hover,.shadow-hover{cursor:pointer}.shadow-hover{position:relative;-webkit-transition:all .5s cubic-bezier(.165,.84,.44,1);transition:all .5s cubic-bezier(.165,.84,.44,1)}.shadow-hover:after{content:\"\";box-shadow:0 0 16px 2px rgba(0,0,0,.2);opacity:0;position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;-webkit-transition:opacity .5s cubic-bezier(.165,.84,.44,1);transition:opacity .5s cubic-bezier(.165,.84,.44,1)}.shadow-hover:focus:after,.shadow-hover:hover:after{opacity:1}.bg-animate,.bg-animate:focus,.bg-animate:hover{-webkit-transition:background-color .15s ease-in-out;transition:background-color .15s ease-in-out}.z-0{z-index:0}.z-1{z-index:1}.z-2{z-index:2}.z-3{z-index:3}.z-4{z-index:4}.z-5{z-index:5}.z-999{z-index:999}.z-9999{z-index:9999}.z-max{z-index:2147483647}.z-inherit{z-index:inherit}.z-initial{z-index:auto}.z-unset{z-index:unset}.nested-copy-line-height ol,.nested-copy-line-height p,.nested-copy-line-height ul{line-height:1.5}.nested-headline-line-height h1,.nested-headline-line-height h2,.nested-headline-line-height h3,.nested-headline-line-height h4,.nested-headline-line-height h5,.nested-headline-line-height h6{line-height:1.25}.nested-list-reset ol,.nested-list-reset ul{padding-left:0;margin-left:0;list-style-type:none}.nested-copy-indent p+p{text-indent:1em;margin-top:0;margin-bottom:0}.nested-copy-seperator p+p{margin-top:1.5em}.nested-img img{width:100%;max-width:100%;display:block}.nested-links a{color:#357edd;-webkit-transition:color .15s ease-in;transition:color .15s ease-in}.nested-links a:focus,.nested-links a:hover{color:#96ccff;-webkit-transition:color .15s ease-in;transition:color .15s ease-in}.debug *{outline:1px solid gold}.debug-white *{outline:1px solid #fff}.debug-black *{outline:1px solid #000}.debug-grid{background:transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTRDOTY4N0U2N0VFMTFFNjg2MzZDQjkwNkQ4MjgwMEIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTRDOTY4N0Q2N0VFMTFFNjg2MzZDQjkwNkQ4MjgwMEIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NjcyQkQ3NjY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NjcyQkQ3NzY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsBS+GMAAAAjSURBVHjaYvz//z8DLsD4gcGXiYEAGBIKGBne//fFpwAgwAB98AaF2pjlUQAAAABJRU5ErkJggg==) repeat 0 0}.debug-grid-16{background:transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODYyRjhERDU2N0YyMTFFNjg2MzZDQjkwNkQ4MjgwMEIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODYyRjhERDQ2N0YyMTFFNjg2MzZDQjkwNkQ4MjgwMEIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NjcyQkQ3QTY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NjcyQkQ3QjY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvCS01IAAABMSURBVHjaYmR4/5+BFPBfAMFm/MBgx8RAGWCn1AAmSg34Q6kBDKMGMDCwICeMIemF/5QawEipAWwUhwEjMDvbAWlWkvVBwu8vQIABAEwBCph8U6c0AAAAAElFTkSuQmCC) repeat 0 0}.debug-grid-8-solid{background:#fff url(data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAAAAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzExMSA3OS4xNTgzMjUsIDIwMTUvMDkvMTAtMDE6MTA6MjAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkIxMjI0OTczNjdCMzExRTZCMkJDRTI0MDgxMDAyMTcxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkIxMjI0OTc0NjdCMzExRTZCMkJDRTI0MDgxMDAyMTcxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjEyMjQ5NzE2N0IzMTFFNkIyQkNFMjQwODEwMDIxNzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjEyMjQ5NzI2N0IzMTFFNkIyQkNFMjQwODEwMDIxNzEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAbGhopHSlBJiZBQi8vL0JHPz4+P0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHAR0pKTQmND8oKD9HPzU/R0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0f/wAARCAAIAAgDASIAAhEBAxEB/8QAWQABAQAAAAAAAAAAAAAAAAAAAAYBAQEAAAAAAAAAAAAAAAAAAAIEEAEBAAMBAAAAAAAAAAAAAAABADECA0ERAAEDBQAAAAAAAAAAAAAAAAARITFBUWESIv/aAAwDAQACEQMRAD8AoOnTV1QTD7JJshP3vSM3P//Z) repeat 0 0}.debug-grid-16-solid{background:#fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzY3MkJEN0U2N0M1MTFFNkIyQkNFMjQwODEwMDIxNzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzY3MkJEN0Y2N0M1MTFFNkIyQkNFMjQwODEwMDIxNzEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NjcyQkQ3QzY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NjcyQkQ3RDY3QzUxMUU2QjJCQ0UyNDA4MTAwMjE3MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pve6J3kAAAAzSURBVHjaYvz//z8D0UDsMwMjSRoYP5Gq4SPNbRjVMEQ1fCRDg+in/6+J1AJUxsgAEGAA31BAJMS0GYEAAAAASUVORK5CYII=) repeat 0 0}@media screen and (min-width:30em){.aspect-ratio-ns{height:0;position:relative}.aspect-ratio--16x9-ns{padding-bottom:56.25%}.aspect-ratio--9x16-ns{padding-bottom:177.77%}.aspect-ratio--4x3-ns{padding-bottom:75%}.aspect-ratio--3x4-ns{padding-bottom:133.33%}.aspect-ratio--6x4-ns{padding-bottom:66.6%}.aspect-ratio--4x6-ns{padding-bottom:150%}.aspect-ratio--8x5-ns{padding-bottom:62.5%}.aspect-ratio--5x8-ns{padding-bottom:160%}.aspect-ratio--7x5-ns{padding-bottom:71.42%}.aspect-ratio--5x7-ns{padding-bottom:140%}.aspect-ratio--1x1-ns{padding-bottom:100%}.aspect-ratio--object-ns{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:100}.cover-ns{background-size:cover!important}.contain-ns{background-size:contain!important}.bg-center-ns{background-position:50%}.bg-center-ns,.bg-top-ns{background-repeat:no-repeat}.bg-top-ns{background-position:top}.bg-right-ns{background-position:100%}.bg-bottom-ns,.bg-right-ns{background-repeat:no-repeat}.bg-bottom-ns{background-position:bottom}.bg-left-ns{background-repeat:no-repeat;background-position:0}.outline-ns{outline:1px solid}.outline-transparent-ns{outline:1px solid transparent}.outline-0-ns{outline:0}.ba-ns{border-style:solid;border-width:1px}.bt-ns{border-top-style:solid;border-top-width:1px}.br-ns{border-right-style:solid;border-right-width:1px}.bb-ns{border-bottom-style:solid;border-bottom-width:1px}.bl-ns{border-left-style:solid;border-left-width:1px}.bn-ns{border-style:none;border-width:0}.br0-ns{border-radius:0}.br1-ns{border-radius:.125rem}.br2-ns{border-radius:.25rem}.br3-ns{border-radius:.5rem}.br4-ns{border-radius:1rem}.br-100-ns{border-radius:100%}.br-pill-ns{border-radius:9999px}.br--bottom-ns{border-top-left-radius:0;border-top-right-radius:0}.br--top-ns{border-bottom-right-radius:0}.br--right-ns,.br--top-ns{border-bottom-left-radius:0}.br--right-ns{border-top-left-radius:0}.br--left-ns{border-top-right-radius:0;border-bottom-right-radius:0}.b--dotted-ns{border-style:dotted}.b--dashed-ns{border-style:dashed}.b--solid-ns{border-style:solid}.b--none-ns{border-style:none}.bw0-ns{border-width:0}.bw1-ns{border-width:.125rem}.bw2-ns{border-width:.25rem}.bw3-ns{border-width:.5rem}.bw4-ns{border-width:1rem}.bw5-ns{border-width:2rem}.bt-0-ns{border-top-width:0}.br-0-ns{border-right-width:0}.bb-0-ns{border-bottom-width:0}.bl-0-ns{border-left-width:0}.shadow-1-ns{box-shadow:0 0 4px 2px rgba(0,0,0,.2)}.shadow-2-ns{box-shadow:0 0 8px 2px rgba(0,0,0,.2)}.shadow-3-ns{box-shadow:2px 2px 4px 2px rgba(0,0,0,.2)}.shadow-4-ns{box-shadow:2px 2px 8px 0 rgba(0,0,0,.2)}.shadow-5-ns{box-shadow:4px 4px 8px 0 rgba(0,0,0,.2)}.top-0-ns{top:0}.left-0-ns{left:0}.right-0-ns{right:0}.bottom-0-ns{bottom:0}.top-1-ns{top:1rem}.left-1-ns{left:1rem}.right-1-ns{right:1rem}.bottom-1-ns{bottom:1rem}.top-2-ns{top:2rem}.left-2-ns{left:2rem}.right-2-ns{right:2rem}.bottom-2-ns{bottom:2rem}.top--1-ns{top:-1rem}.right--1-ns{right:-1rem}.bottom--1-ns{bottom:-1rem}.left--1-ns{left:-1rem}.top--2-ns{top:-2rem}.right--2-ns{right:-2rem}.bottom--2-ns{bottom:-2rem}.left--2-ns{left:-2rem}.absolute--fill-ns{top:0;right:0;bottom:0;left:0}.cl-ns{clear:left}.cr-ns{clear:right}.cb-ns{clear:both}.cn-ns{clear:none}.dn-ns{display:none}.di-ns{display:inline}.db-ns{display:block}.dib-ns{display:inline-block}.dit-ns{display:inline-table}.dt-ns{display:table}.dtc-ns{display:table-cell}.dt-row-ns{display:table-row}.dt-row-group-ns{display:table-row-group}.dt-column-ns{display:table-column}.dt-column-group-ns{display:table-column-group}.dt--fixed-ns{table-layout:fixed;width:100%}.flex-ns{display:-webkit-box;display:-ms-flexbox;display:flex}.inline-flex-ns{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.flex-auto-ns{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;min-height:0}.flex-none-ns{-webkit-box-flex:0;-ms-flex:none;flex:none}.flex-column-ns{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.flex-row-ns{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.flex-wrap-ns{-ms-flex-wrap:wrap;flex-wrap:wrap}.flex-column-reverse-ns{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.flex-row-reverse-ns{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.flex-wrap-reverse-ns{-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}.items-start-ns{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.items-end-ns{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.items-center-ns{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.items-baseline-ns{-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline}.items-stretch-ns{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.self-start-ns{-ms-flex-item-align:start;align-self:flex-start}.self-end-ns{-ms-flex-item-align:end;align-self:flex-end}.self-center-ns{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.self-baseline-ns{-ms-flex-item-align:baseline;align-self:baseline}.self-stretch-ns{-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch}.justify-start-ns{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.justify-end-ns{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.justify-center-ns{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.justify-between-ns{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.justify-around-ns{-ms-flex-pack:distribute;justify-content:space-around}.content-start-ns{-ms-flex-line-pack:start;align-content:flex-start}.content-end-ns{-ms-flex-line-pack:end;align-content:flex-end}.content-center-ns{-ms-flex-line-pack:center;align-content:center}.content-between-ns{-ms-flex-line-pack:justify;align-content:space-between}.content-around-ns{-ms-flex-line-pack:distribute;align-content:space-around}.content-stretch-ns{-ms-flex-line-pack:stretch;align-content:stretch}.order-0-ns{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.order-1-ns{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-2-ns{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-3-ns{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-4-ns{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.order-5-ns{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.order-6-ns{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.order-7-ns{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.order-8-ns{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.order-last-ns{-webkit-box-ordinal-group:100000;-ms-flex-order:99999;order:99999}.fl-ns{float:left}.fl-ns,.fr-ns{display:inline}.fr-ns{float:right}.fn-ns{float:none}.i-ns{font-style:italic}.fs-normal-ns{font-style:normal}.normal-ns{font-weight:400}.b-ns{font-weight:700}.fw1-ns{font-weight:100}.fw2-ns{font-weight:200}.fw3-ns{font-weight:300}.fw4-ns{font-weight:400}.fw5-ns{font-weight:500}.fw6-ns{font-weight:600}.fw7-ns{font-weight:700}.fw8-ns{font-weight:800}.fw9-ns{font-weight:900}.h1-ns{height:1rem}.h2-ns{height:2rem}.h3-ns{height:4rem}.h4-ns{height:8rem}.h5-ns{height:16rem}.h-25-ns{height:25%}.h-50-ns{height:50%}.h-75-ns{height:75%}.h-100-ns{height:100%}.min-h-100-ns{min-height:100%}.vh-25-ns{height:25vh}.vh-50-ns{height:50vh}.vh-75-ns{height:75vh}.vh-100-ns{height:100vh}.min-vh-100-ns{min-height:100vh}.h-auto-ns{height:auto}.h-inherit-ns{height:inherit}.tracked-ns{letter-spacing:.1em}.tracked-tight-ns{letter-spacing:-.05em}.tracked-mega-ns{letter-spacing:.25em}.lh-solid-ns{line-height:1}.lh-title-ns{line-height:1.25}.lh-copy-ns{line-height:1.5}.mw-100-ns{max-width:100%}.mw1-ns{max-width:1rem}.mw2-ns{max-width:2rem}.mw3-ns{max-width:4rem}.mw4-ns{max-width:8rem}.mw5-ns{max-width:16rem}.mw6-ns{max-width:32rem}.mw7-ns{max-width:48rem}.mw8-ns{max-width:64rem}.mw9-ns{max-width:96rem}.mw-none-ns{max-width:none}.w1-ns{width:1rem}.w2-ns{width:2rem}.w3-ns{width:4rem}.w4-ns{width:8rem}.w5-ns{width:16rem}.w-10-ns{width:10%}.w-20-ns{width:20%}.w-25-ns{width:25%}.w-30-ns{width:30%}.w-33-ns{width:33%}.w-34-ns{width:34%}.w-40-ns{width:40%}.w-50-ns{width:50%}.w-60-ns{width:60%}.w-70-ns{width:70%}.w-75-ns{width:75%}.w-80-ns{width:80%}.w-90-ns{width:90%}.w-100-ns{width:100%}.w-third-ns{width:33.33333%}.w-two-thirds-ns{width:66.66667%}.w-auto-ns{width:auto}.overflow-visible-ns{overflow:visible}.overflow-hidden-ns{overflow:hidden}.overflow-scroll-ns{overflow:scroll}.overflow-auto-ns{overflow:auto}.overflow-x-visible-ns{overflow-x:visible}.overflow-x-hidden-ns{overflow-x:hidden}.overflow-x-scroll-ns{overflow-x:scroll}.overflow-x-auto-ns{overflow-x:auto}.overflow-y-visible-ns{overflow-y:visible}.overflow-y-hidden-ns{overflow-y:hidden}.overflow-y-scroll-ns{overflow-y:scroll}.overflow-y-auto-ns{overflow-y:auto}.static-ns{position:static}.relative-ns{position:relative}.absolute-ns{position:absolute}.fixed-ns{position:fixed}.rotate-45-ns{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.rotate-90-ns{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.rotate-135-ns{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.rotate-180-ns{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.rotate-225-ns{-webkit-transform:rotate(225deg);transform:rotate(225deg)}.rotate-270-ns{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.rotate-315-ns{-webkit-transform:rotate(315deg);transform:rotate(315deg)}.pa0-ns{padding:0}.pa1-ns{padding:.25rem}.pa2-ns{padding:.5rem}.pa3-ns{padding:1rem}.pa4-ns{padding:2rem}.pa5-ns{padding:4rem}.pa6-ns{padding:8rem}.pa7-ns{padding:16rem}.pl0-ns{padding-left:0}.pl1-ns{padding-left:.25rem}.pl2-ns{padding-left:.5rem}.pl3-ns{padding-left:1rem}.pl4-ns{padding-left:2rem}.pl5-ns{padding-left:4rem}.pl6-ns{padding-left:8rem}.pl7-ns{padding-left:16rem}.pr0-ns{padding-right:0}.pr1-ns{padding-right:.25rem}.pr2-ns{padding-right:.5rem}.pr3-ns{padding-right:1rem}.pr4-ns{padding-right:2rem}.pr5-ns{padding-right:4rem}.pr6-ns{padding-right:8rem}.pr7-ns{padding-right:16rem}.pb0-ns{padding-bottom:0}.pb1-ns{padding-bottom:.25rem}.pb2-ns{padding-bottom:.5rem}.pb3-ns{padding-bottom:1rem}.pb4-ns{padding-bottom:2rem}.pb5-ns{padding-bottom:4rem}.pb6-ns{padding-bottom:8rem}.pb7-ns{padding-bottom:16rem}.pt0-ns{padding-top:0}.pt1-ns{padding-top:.25rem}.pt2-ns{padding-top:.5rem}.pt3-ns{padding-top:1rem}.pt4-ns{padding-top:2rem}.pt5-ns{padding-top:4rem}.pt6-ns{padding-top:8rem}.pt7-ns{padding-top:16rem}.pv0-ns{padding-top:0;padding-bottom:0}.pv1-ns{padding-top:.25rem;padding-bottom:.25rem}.pv2-ns{padding-top:.5rem;padding-bottom:.5rem}.pv3-ns{padding-top:1rem;padding-bottom:1rem}.pv4-ns{padding-top:2rem;padding-bottom:2rem}.pv5-ns{padding-top:4rem;padding-bottom:4rem}.pv6-ns{padding-top:8rem;padding-bottom:8rem}.pv7-ns{padding-top:16rem;padding-bottom:16rem}.ph0-ns{padding-left:0;padding-right:0}.ph1-ns{padding-left:.25rem;padding-right:.25rem}.ph2-ns{padding-left:.5rem;padding-right:.5rem}.ph3-ns{padding-left:1rem;padding-right:1rem}.ph4-ns{padding-left:2rem;padding-right:2rem}.ph5-ns{padding-left:4rem;padding-right:4rem}.ph6-ns{padding-left:8rem;padding-right:8rem}.ph7-ns{padding-left:16rem;padding-right:16rem}.ma0-ns{margin:0}.ma1-ns{margin:.25rem}.ma2-ns{margin:.5rem}.ma3-ns{margin:1rem}.ma4-ns{margin:2rem}.ma5-ns{margin:4rem}.ma6-ns{margin:8rem}.ma7-ns{margin:16rem}.ml0-ns{margin-left:0}.ml1-ns{margin-left:.25rem}.ml2-ns{margin-left:.5rem}.ml3-ns{margin-left:1rem}.ml4-ns{margin-left:2rem}.ml5-ns{margin-left:4rem}.ml6-ns{margin-left:8rem}.ml7-ns{margin-left:16rem}.mr0-ns{margin-right:0}.mr1-ns{margin-right:.25rem}.mr2-ns{margin-right:.5rem}.mr3-ns{margin-right:1rem}.mr4-ns{margin-right:2rem}.mr5-ns{margin-right:4rem}.mr6-ns{margin-right:8rem}.mr7-ns{margin-right:16rem}.mb0-ns{margin-bottom:0}.mb1-ns{margin-bottom:.25rem}.mb2-ns{margin-bottom:.5rem}.mb3-ns{margin-bottom:1rem}.mb4-ns{margin-bottom:2rem}.mb5-ns{margin-bottom:4rem}.mb6-ns{margin-bottom:8rem}.mb7-ns{margin-bottom:16rem}.mt0-ns{margin-top:0}.mt1-ns{margin-top:.25rem}.mt2-ns{margin-top:.5rem}.mt3-ns{margin-top:1rem}.mt4-ns{margin-top:2rem}.mt5-ns{margin-top:4rem}.mt6-ns{margin-top:8rem}.mt7-ns{margin-top:16rem}.mv0-ns{margin-top:0;margin-bottom:0}.mv1-ns{margin-top:.25rem;margin-bottom:.25rem}.mv2-ns{margin-top:.5rem;margin-bottom:.5rem}.mv3-ns{margin-top:1rem;margin-bottom:1rem}.mv4-ns{margin-top:2rem;margin-bottom:2rem}.mv5-ns{margin-top:4rem;margin-bottom:4rem}.mv6-ns{margin-top:8rem;margin-bottom:8rem}.mv7-ns{margin-top:16rem;margin-bottom:16rem}.mh0-ns{margin-left:0;margin-right:0}.mh1-ns{margin-left:.25rem;margin-right:.25rem}.mh2-ns{margin-left:.5rem;margin-right:.5rem}.mh3-ns{margin-left:1rem;margin-right:1rem}.mh4-ns{margin-left:2rem;margin-right:2rem}.mh5-ns{margin-left:4rem;margin-right:4rem}.mh6-ns{margin-left:8rem;margin-right:8rem}.mh7-ns{margin-left:16rem;margin-right:16rem}.na1-ns{margin:-.25rem}.na2-ns{margin:-.5rem}.na3-ns{margin:-1rem}.na4-ns{margin:-2rem}.na5-ns{margin:-4rem}.na6-ns{margin:-8rem}.na7-ns{margin:-16rem}.nl1-ns{margin-left:-.25rem}.nl2-ns{margin-left:-.5rem}.nl3-ns{margin-left:-1rem}.nl4-ns{margin-left:-2rem}.nl5-ns{margin-left:-4rem}.nl6-ns{margin-left:-8rem}.nl7-ns{margin-left:-16rem}.nr1-ns{margin-right:-.25rem}.nr2-ns{margin-right:-.5rem}.nr3-ns{margin-right:-1rem}.nr4-ns{margin-right:-2rem}.nr5-ns{margin-right:-4rem}.nr6-ns{margin-right:-8rem}.nr7-ns{margin-right:-16rem}.nb1-ns{margin-bottom:-.25rem}.nb2-ns{margin-bottom:-.5rem}.nb3-ns{margin-bottom:-1rem}.nb4-ns{margin-bottom:-2rem}.nb5-ns{margin-bottom:-4rem}.nb6-ns{margin-bottom:-8rem}.nb7-ns{margin-bottom:-16rem}.nt1-ns{margin-top:-.25rem}.nt2-ns{margin-top:-.5rem}.nt3-ns{margin-top:-1rem}.nt4-ns{margin-top:-2rem}.nt5-ns{margin-top:-4rem}.nt6-ns{margin-top:-8rem}.nt7-ns{margin-top:-16rem}.strike-ns{text-decoration:line-through}.underline-ns{text-decoration:underline}.no-underline-ns{text-decoration:none}.tl-ns{text-align:left}.tr-ns{text-align:right}.tc-ns{text-align:center}.ttc-ns{text-transform:capitalize}.ttl-ns{text-transform:lowercase}.ttu-ns{text-transform:uppercase}.ttn-ns{text-transform:none}.f-6-ns,.f-headline-ns{font-size:6rem}.f-5-ns,.f-subheadline-ns{font-size:5rem}.f1-ns{font-size:3rem}.f2-ns{font-size:2.25rem}.f3-ns{font-size:1.5rem}.f4-ns{font-size:1.25rem}.f5-ns{font-size:1rem}.f6-ns{font-size:.875rem}.f7-ns{font-size:.75rem}.measure-ns{max-width:30em}.measure-wide-ns{max-width:34em}.measure-narrow-ns{max-width:20em}.indent-ns{text-indent:1em;margin-top:0;margin-bottom:0}.small-caps-ns{font-variant:small-caps}.truncate-ns{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.center-ns{margin-right:auto;margin-left:auto}.clip-ns{position:fixed!important;position:absolute!important;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px)}.ws-normal-ns{white-space:normal}.nowrap-ns{white-space:nowrap}.pre-ns{white-space:pre}.v-base-ns{vertical-align:baseline}.v-mid-ns{vertical-align:middle}.v-top-ns{vertical-align:top}.v-btm-ns{vertical-align:bottom}}@media screen and (min-width:30em) and (max-width:60em){.aspect-ratio-m{height:0;position:relative}.aspect-ratio--16x9-m{padding-bottom:56.25%}.aspect-ratio--9x16-m{padding-bottom:177.77%}.aspect-ratio--4x3-m{padding-bottom:75%}.aspect-ratio--3x4-m{padding-bottom:133.33%}.aspect-ratio--6x4-m{padding-bottom:66.6%}.aspect-ratio--4x6-m{padding-bottom:150%}.aspect-ratio--8x5-m{padding-bottom:62.5%}.aspect-ratio--5x8-m{padding-bottom:160%}.aspect-ratio--7x5-m{padding-bottom:71.42%}.aspect-ratio--5x7-m{padding-bottom:140%}.aspect-ratio--1x1-m{padding-bottom:100%}.aspect-ratio--object-m{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:100}.cover-m{background-size:cover!important}.contain-m{background-size:contain!important}.bg-center-m{background-position:50%}.bg-center-m,.bg-top-m{background-repeat:no-repeat}.bg-top-m{background-position:top}.bg-right-m{background-position:100%}.bg-bottom-m,.bg-right-m{background-repeat:no-repeat}.bg-bottom-m{background-position:bottom}.bg-left-m{background-repeat:no-repeat;background-position:0}.outline-m{outline:1px solid}.outline-transparent-m{outline:1px solid transparent}.outline-0-m{outline:0}.ba-m{border-style:solid;border-width:1px}.bt-m{border-top-style:solid;border-top-width:1px}.br-m{border-right-style:solid;border-right-width:1px}.bb-m{border-bottom-style:solid;border-bottom-width:1px}.bl-m{border-left-style:solid;border-left-width:1px}.bn-m{border-style:none;border-width:0}.br0-m{border-radius:0}.br1-m{border-radius:.125rem}.br2-m{border-radius:.25rem}.br3-m{border-radius:.5rem}.br4-m{border-radius:1rem}.br-100-m{border-radius:100%}.br-pill-m{border-radius:9999px}.br--bottom-m{border-top-left-radius:0;border-top-right-radius:0}.br--top-m{border-bottom-right-radius:0}.br--right-m,.br--top-m{border-bottom-left-radius:0}.br--right-m{border-top-left-radius:0}.br--left-m{border-top-right-radius:0;border-bottom-right-radius:0}.b--dotted-m{border-style:dotted}.b--dashed-m{border-style:dashed}.b--solid-m{border-style:solid}.b--none-m{border-style:none}.bw0-m{border-width:0}.bw1-m{border-width:.125rem}.bw2-m{border-width:.25rem}.bw3-m{border-width:.5rem}.bw4-m{border-width:1rem}.bw5-m{border-width:2rem}.bt-0-m{border-top-width:0}.br-0-m{border-right-width:0}.bb-0-m{border-bottom-width:0}.bl-0-m{border-left-width:0}.shadow-1-m{box-shadow:0 0 4px 2px rgba(0,0,0,.2)}.shadow-2-m{box-shadow:0 0 8px 2px rgba(0,0,0,.2)}.shadow-3-m{box-shadow:2px 2px 4px 2px rgba(0,0,0,.2)}.shadow-4-m{box-shadow:2px 2px 8px 0 rgba(0,0,0,.2)}.shadow-5-m{box-shadow:4px 4px 8px 0 rgba(0,0,0,.2)}.top-0-m{top:0}.left-0-m{left:0}.right-0-m{right:0}.bottom-0-m{bottom:0}.top-1-m{top:1rem}.left-1-m{left:1rem}.right-1-m{right:1rem}.bottom-1-m{bottom:1rem}.top-2-m{top:2rem}.left-2-m{left:2rem}.right-2-m{right:2rem}.bottom-2-m{bottom:2rem}.top--1-m{top:-1rem}.right--1-m{right:-1rem}.bottom--1-m{bottom:-1rem}.left--1-m{left:-1rem}.top--2-m{top:-2rem}.right--2-m{right:-2rem}.bottom--2-m{bottom:-2rem}.left--2-m{left:-2rem}.absolute--fill-m{top:0;right:0;bottom:0;left:0}.cl-m{clear:left}.cr-m{clear:right}.cb-m{clear:both}.cn-m{clear:none}.dn-m{display:none}.di-m{display:inline}.db-m{display:block}.dib-m{display:inline-block}.dit-m{display:inline-table}.dt-m{display:table}.dtc-m{display:table-cell}.dt-row-m{display:table-row}.dt-row-group-m{display:table-row-group}.dt-column-m{display:table-column}.dt-column-group-m{display:table-column-group}.dt--fixed-m{table-layout:fixed;width:100%}.flex-m{display:-webkit-box;display:-ms-flexbox;display:flex}.inline-flex-m{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.flex-auto-m{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;min-height:0}.flex-none-m{-webkit-box-flex:0;-ms-flex:none;flex:none}.flex-column-m{-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column}.flex-column-m,.flex-row-m{-webkit-box-direction:normal}.flex-row-m{-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row}.flex-wrap-m{-ms-flex-wrap:wrap;flex-wrap:wrap}.flex-column-reverse-m{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.flex-row-reverse-m{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.flex-wrap-reverse-m{-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}.items-start-m{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.items-end-m{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.items-center-m{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.items-baseline-m{-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline}.items-stretch-m{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.self-start-m{-ms-flex-item-align:start;align-self:flex-start}.self-end-m{-ms-flex-item-align:end;align-self:flex-end}.self-center-m{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.self-baseline-m{-ms-flex-item-align:baseline;align-self:baseline}.self-stretch-m{-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch}.justify-start-m{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.justify-end-m{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.justify-center-m{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.justify-between-m{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.justify-around-m{-ms-flex-pack:distribute;justify-content:space-around}.content-start-m{-ms-flex-line-pack:start;align-content:flex-start}.content-end-m{-ms-flex-line-pack:end;align-content:flex-end}.content-center-m{-ms-flex-line-pack:center;align-content:center}.content-between-m{-ms-flex-line-pack:justify;align-content:space-between}.content-around-m{-ms-flex-line-pack:distribute;align-content:space-around}.content-stretch-m{-ms-flex-line-pack:stretch;align-content:stretch}.order-0-m{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.order-1-m{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-2-m{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-3-m{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-4-m{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.order-5-m{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.order-6-m{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.order-7-m{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.order-8-m{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.order-last-m{-webkit-box-ordinal-group:100000;-ms-flex-order:99999;order:99999}.fl-m{float:left}.fl-m,.fr-m{display:inline}.fr-m{float:right}.fn-m{float:none}.i-m{font-style:italic}.fs-normal-m{font-style:normal}.normal-m{font-weight:400}.b-m{font-weight:700}.fw1-m{font-weight:100}.fw2-m{font-weight:200}.fw3-m{font-weight:300}.fw4-m{font-weight:400}.fw5-m{font-weight:500}.fw6-m{font-weight:600}.fw7-m{font-weight:700}.fw8-m{font-weight:800}.fw9-m{font-weight:900}.h1-m{height:1rem}.h2-m{height:2rem}.h3-m{height:4rem}.h4-m{height:8rem}.h5-m{height:16rem}.h-25-m{height:25%}.h-50-m{height:50%}.h-75-m{height:75%}.h-100-m{height:100%}.min-h-100-m{min-height:100%}.vh-25-m{height:25vh}.vh-50-m{height:50vh}.vh-75-m{height:75vh}.vh-100-m{height:100vh}.min-vh-100-m{min-height:100vh}.h-auto-m{height:auto}.h-inherit-m{height:inherit}.tracked-m{letter-spacing:.1em}.tracked-tight-m{letter-spacing:-.05em}.tracked-mega-m{letter-spacing:.25em}.lh-solid-m{line-height:1}.lh-title-m{line-height:1.25}.lh-copy-m{line-height:1.5}.mw-100-m{max-width:100%}.mw1-m{max-width:1rem}.mw2-m{max-width:2rem}.mw3-m{max-width:4rem}.mw4-m{max-width:8rem}.mw5-m{max-width:16rem}.mw6-m{max-width:32rem}.mw7-m{max-width:48rem}.mw8-m{max-width:64rem}.mw9-m{max-width:96rem}.mw-none-m{max-width:none}.w1-m{width:1rem}.w2-m{width:2rem}.w3-m{width:4rem}.w4-m{width:8rem}.w5-m{width:16rem}.w-10-m{width:10%}.w-20-m{width:20%}.w-25-m{width:25%}.w-30-m{width:30%}.w-33-m{width:33%}.w-34-m{width:34%}.w-40-m{width:40%}.w-50-m{width:50%}.w-60-m{width:60%}.w-70-m{width:70%}.w-75-m{width:75%}.w-80-m{width:80%}.w-90-m{width:90%}.w-100-m{width:100%}.w-third-m{width:33.33333%}.w-two-thirds-m{width:66.66667%}.w-auto-m{width:auto}.overflow-visible-m{overflow:visible}.overflow-hidden-m{overflow:hidden}.overflow-scroll-m{overflow:scroll}.overflow-auto-m{overflow:auto}.overflow-x-visible-m{overflow-x:visible}.overflow-x-hidden-m{overflow-x:hidden}.overflow-x-scroll-m{overflow-x:scroll}.overflow-x-auto-m{overflow-x:auto}.overflow-y-visible-m{overflow-y:visible}.overflow-y-hidden-m{overflow-y:hidden}.overflow-y-scroll-m{overflow-y:scroll}.overflow-y-auto-m{overflow-y:auto}.static-m{position:static}.relative-m{position:relative}.absolute-m{position:absolute}.fixed-m{position:fixed}.rotate-45-m{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.rotate-90-m{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.rotate-135-m{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.rotate-180-m{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.rotate-225-m{-webkit-transform:rotate(225deg);transform:rotate(225deg)}.rotate-270-m{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.rotate-315-m{-webkit-transform:rotate(315deg);transform:rotate(315deg)}.pa0-m{padding:0}.pa1-m{padding:.25rem}.pa2-m{padding:.5rem}.pa3-m{padding:1rem}.pa4-m{padding:2rem}.pa5-m{padding:4rem}.pa6-m{padding:8rem}.pa7-m{padding:16rem}.pl0-m{padding-left:0}.pl1-m{padding-left:.25rem}.pl2-m{padding-left:.5rem}.pl3-m{padding-left:1rem}.pl4-m{padding-left:2rem}.pl5-m{padding-left:4rem}.pl6-m{padding-left:8rem}.pl7-m{padding-left:16rem}.pr0-m{padding-right:0}.pr1-m{padding-right:.25rem}.pr2-m{padding-right:.5rem}.pr3-m{padding-right:1rem}.pr4-m{padding-right:2rem}.pr5-m{padding-right:4rem}.pr6-m{padding-right:8rem}.pr7-m{padding-right:16rem}.pb0-m{padding-bottom:0}.pb1-m{padding-bottom:.25rem}.pb2-m{padding-bottom:.5rem}.pb3-m{padding-bottom:1rem}.pb4-m{padding-bottom:2rem}.pb5-m{padding-bottom:4rem}.pb6-m{padding-bottom:8rem}.pb7-m{padding-bottom:16rem}.pt0-m{padding-top:0}.pt1-m{padding-top:.25rem}.pt2-m{padding-top:.5rem}.pt3-m{padding-top:1rem}.pt4-m{padding-top:2rem}.pt5-m{padding-top:4rem}.pt6-m{padding-top:8rem}.pt7-m{padding-top:16rem}.pv0-m{padding-top:0;padding-bottom:0}.pv1-m{padding-top:.25rem;padding-bottom:.25rem}.pv2-m{padding-top:.5rem;padding-bottom:.5rem}.pv3-m{padding-top:1rem;padding-bottom:1rem}.pv4-m{padding-top:2rem;padding-bottom:2rem}.pv5-m{padding-top:4rem;padding-bottom:4rem}.pv6-m{padding-top:8rem;padding-bottom:8rem}.pv7-m{padding-top:16rem;padding-bottom:16rem}.ph0-m{padding-left:0;padding-right:0}.ph1-m{padding-left:.25rem;padding-right:.25rem}.ph2-m{padding-left:.5rem;padding-right:.5rem}.ph3-m{padding-left:1rem;padding-right:1rem}.ph4-m{padding-left:2rem;padding-right:2rem}.ph5-m{padding-left:4rem;padding-right:4rem}.ph6-m{padding-left:8rem;padding-right:8rem}.ph7-m{padding-left:16rem;padding-right:16rem}.ma0-m{margin:0}.ma1-m{margin:.25rem}.ma2-m{margin:.5rem}.ma3-m{margin:1rem}.ma4-m{margin:2rem}.ma5-m{margin:4rem}.ma6-m{margin:8rem}.ma7-m{margin:16rem}.ml0-m{margin-left:0}.ml1-m{margin-left:.25rem}.ml2-m{margin-left:.5rem}.ml3-m{margin-left:1rem}.ml4-m{margin-left:2rem}.ml5-m{margin-left:4rem}.ml6-m{margin-left:8rem}.ml7-m{margin-left:16rem}.mr0-m{margin-right:0}.mr1-m{margin-right:.25rem}.mr2-m{margin-right:.5rem}.mr3-m{margin-right:1rem}.mr4-m{margin-right:2rem}.mr5-m{margin-right:4rem}.mr6-m{margin-right:8rem}.mr7-m{margin-right:16rem}.mb0-m{margin-bottom:0}.mb1-m{margin-bottom:.25rem}.mb2-m{margin-bottom:.5rem}.mb3-m{margin-bottom:1rem}.mb4-m{margin-bottom:2rem}.mb5-m{margin-bottom:4rem}.mb6-m{margin-bottom:8rem}.mb7-m{margin-bottom:16rem}.mt0-m{margin-top:0}.mt1-m{margin-top:.25rem}.mt2-m{margin-top:.5rem}.mt3-m{margin-top:1rem}.mt4-m{margin-top:2rem}.mt5-m{margin-top:4rem}.mt6-m{margin-top:8rem}.mt7-m{margin-top:16rem}.mv0-m{margin-top:0;margin-bottom:0}.mv1-m{margin-top:.25rem;margin-bottom:.25rem}.mv2-m{margin-top:.5rem;margin-bottom:.5rem}.mv3-m{margin-top:1rem;margin-bottom:1rem}.mv4-m{margin-top:2rem;margin-bottom:2rem}.mv5-m{margin-top:4rem;margin-bottom:4rem}.mv6-m{margin-top:8rem;margin-bottom:8rem}.mv7-m{margin-top:16rem;margin-bottom:16rem}.mh0-m{margin-left:0;margin-right:0}.mh1-m{margin-left:.25rem;margin-right:.25rem}.mh2-m{margin-left:.5rem;margin-right:.5rem}.mh3-m{margin-left:1rem;margin-right:1rem}.mh4-m{margin-left:2rem;margin-right:2rem}.mh5-m{margin-left:4rem;margin-right:4rem}.mh6-m{margin-left:8rem;margin-right:8rem}.mh7-m{margin-left:16rem;margin-right:16rem}.na1-m{margin:-.25rem}.na2-m{margin:-.5rem}.na3-m{margin:-1rem}.na4-m{margin:-2rem}.na5-m{margin:-4rem}.na6-m{margin:-8rem}.na7-m{margin:-16rem}.nl1-m{margin-left:-.25rem}.nl2-m{margin-left:-.5rem}.nl3-m{margin-left:-1rem}.nl4-m{margin-left:-2rem}.nl5-m{margin-left:-4rem}.nl6-m{margin-left:-8rem}.nl7-m{margin-left:-16rem}.nr1-m{margin-right:-.25rem}.nr2-m{margin-right:-.5rem}.nr3-m{margin-right:-1rem}.nr4-m{margin-right:-2rem}.nr5-m{margin-right:-4rem}.nr6-m{margin-right:-8rem}.nr7-m{margin-right:-16rem}.nb1-m{margin-bottom:-.25rem}.nb2-m{margin-bottom:-.5rem}.nb3-m{margin-bottom:-1rem}.nb4-m{margin-bottom:-2rem}.nb5-m{margin-bottom:-4rem}.nb6-m{margin-bottom:-8rem}.nb7-m{margin-bottom:-16rem}.nt1-m{margin-top:-.25rem}.nt2-m{margin-top:-.5rem}.nt3-m{margin-top:-1rem}.nt4-m{margin-top:-2rem}.nt5-m{margin-top:-4rem}.nt6-m{margin-top:-8rem}.nt7-m{margin-top:-16rem}.strike-m{text-decoration:line-through}.underline-m{text-decoration:underline}.no-underline-m{text-decoration:none}.tl-m{text-align:left}.tr-m{text-align:right}.tc-m{text-align:center}.ttc-m{text-transform:capitalize}.ttl-m{text-transform:lowercase}.ttu-m{text-transform:uppercase}.ttn-m{text-transform:none}.f-6-m,.f-headline-m{font-size:6rem}.f-5-m,.f-subheadline-m{font-size:5rem}.f1-m{font-size:3rem}.f2-m{font-size:2.25rem}.f3-m{font-size:1.5rem}.f4-m{font-size:1.25rem}.f5-m{font-size:1rem}.f6-m{font-size:.875rem}.f7-m{font-size:.75rem}.measure-m{max-width:30em}.measure-wide-m{max-width:34em}.measure-narrow-m{max-width:20em}.indent-m{text-indent:1em;margin-top:0;margin-bottom:0}.small-caps-m{font-variant:small-caps}.truncate-m{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.center-m{margin-right:auto;margin-left:auto}.clip-m{position:fixed!important;position:absolute!important;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px)}.ws-normal-m{white-space:normal}.nowrap-m{white-space:nowrap}.pre-m{white-space:pre}.v-base-m{vertical-align:baseline}.v-mid-m{vertical-align:middle}.v-top-m{vertical-align:top}.v-btm-m{vertical-align:bottom}}@media screen and (min-width:60em){.aspect-ratio-l{height:0;position:relative}.aspect-ratio--16x9-l{padding-bottom:56.25%}.aspect-ratio--9x16-l{padding-bottom:177.77%}.aspect-ratio--4x3-l{padding-bottom:75%}.aspect-ratio--3x4-l{padding-bottom:133.33%}.aspect-ratio--6x4-l{padding-bottom:66.6%}.aspect-ratio--4x6-l{padding-bottom:150%}.aspect-ratio--8x5-l{padding-bottom:62.5%}.aspect-ratio--5x8-l{padding-bottom:160%}.aspect-ratio--7x5-l{padding-bottom:71.42%}.aspect-ratio--5x7-l{padding-bottom:140%}.aspect-ratio--1x1-l{padding-bottom:100%}.aspect-ratio--object-l{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:100}.cover-l{background-size:cover!important}.contain-l{background-size:contain!important}.bg-center-l{background-position:50%}.bg-center-l,.bg-top-l{background-repeat:no-repeat}.bg-top-l{background-position:top}.bg-right-l{background-position:100%}.bg-bottom-l,.bg-right-l{background-repeat:no-repeat}.bg-bottom-l{background-position:bottom}.bg-left-l{background-repeat:no-repeat;background-position:0}.outline-l{outline:1px solid}.outline-transparent-l{outline:1px solid transparent}.outline-0-l{outline:0}.ba-l{border-style:solid;border-width:1px}.bt-l{border-top-style:solid;border-top-width:1px}.br-l{border-right-style:solid;border-right-width:1px}.bb-l{border-bottom-style:solid;border-bottom-width:1px}.bl-l{border-left-style:solid;border-left-width:1px}.bn-l{border-style:none;border-width:0}.br0-l{border-radius:0}.br1-l{border-radius:.125rem}.br2-l{border-radius:.25rem}.br3-l{border-radius:.5rem}.br4-l{border-radius:1rem}.br-100-l{border-radius:100%}.br-pill-l{border-radius:9999px}.br--bottom-l{border-top-left-radius:0;border-top-right-radius:0}.br--top-l{border-bottom-right-radius:0}.br--right-l,.br--top-l{border-bottom-left-radius:0}.br--right-l{border-top-left-radius:0}.br--left-l{border-top-right-radius:0;border-bottom-right-radius:0}.b--dotted-l{border-style:dotted}.b--dashed-l{border-style:dashed}.b--solid-l{border-style:solid}.b--none-l{border-style:none}.bw0-l{border-width:0}.bw1-l{border-width:.125rem}.bw2-l{border-width:.25rem}.bw3-l{border-width:.5rem}.bw4-l{border-width:1rem}.bw5-l{border-width:2rem}.bt-0-l{border-top-width:0}.br-0-l{border-right-width:0}.bb-0-l{border-bottom-width:0}.bl-0-l{border-left-width:0}.shadow-1-l{box-shadow:0 0 4px 2px rgba(0,0,0,.2)}.shadow-2-l{box-shadow:0 0 8px 2px rgba(0,0,0,.2)}.shadow-3-l{box-shadow:2px 2px 4px 2px rgba(0,0,0,.2)}.shadow-4-l{box-shadow:2px 2px 8px 0 rgba(0,0,0,.2)}.shadow-5-l{box-shadow:4px 4px 8px 0 rgba(0,0,0,.2)}.top-0-l{top:0}.left-0-l{left:0}.right-0-l{right:0}.bottom-0-l{bottom:0}.top-1-l{top:1rem}.left-1-l{left:1rem}.right-1-l{right:1rem}.bottom-1-l{bottom:1rem}.top-2-l{top:2rem}.left-2-l{left:2rem}.right-2-l{right:2rem}.bottom-2-l{bottom:2rem}.top--1-l{top:-1rem}.right--1-l{right:-1rem}.bottom--1-l{bottom:-1rem}.left--1-l{left:-1rem}.top--2-l{top:-2rem}.right--2-l{right:-2rem}.bottom--2-l{bottom:-2rem}.left--2-l{left:-2rem}.absolute--fill-l{top:0;right:0;bottom:0;left:0}.cl-l{clear:left}.cr-l{clear:right}.cb-l{clear:both}.cn-l{clear:none}.dn-l{display:none}.di-l{display:inline}.db-l{display:block}.dib-l{display:inline-block}.dit-l{display:inline-table}.dt-l{display:table}.dtc-l{display:table-cell}.dt-row-l{display:table-row}.dt-row-group-l{display:table-row-group}.dt-column-l{display:table-column}.dt-column-group-l{display:table-column-group}.dt--fixed-l{table-layout:fixed;width:100%}.flex-l{display:-webkit-box;display:-ms-flexbox;display:flex}.inline-flex-l{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.flex-auto-l{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;min-height:0}.flex-none-l{-webkit-box-flex:0;-ms-flex:none;flex:none}.flex-column-l{-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column}.flex-column-l,.flex-row-l{-webkit-box-direction:normal}.flex-row-l{-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row}.flex-wrap-l{-ms-flex-wrap:wrap;flex-wrap:wrap}.flex-column-reverse-l{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.flex-row-reverse-l{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.flex-wrap-reverse-l{-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse}.items-start-l{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.items-end-l{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end}.items-center-l{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.items-baseline-l{-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline}.items-stretch-l{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.self-start-l{-ms-flex-item-align:start;align-self:flex-start}.self-end-l{-ms-flex-item-align:end;align-self:flex-end}.self-center-l{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.self-baseline-l{-ms-flex-item-align:baseline;align-self:baseline}.self-stretch-l{-ms-flex-item-align:stretch;-ms-grid-row-align:stretch;align-self:stretch}.justify-start-l{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.justify-end-l{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.justify-center-l{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.justify-between-l{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.justify-around-l{-ms-flex-pack:distribute;justify-content:space-around}.content-start-l{-ms-flex-line-pack:start;align-content:flex-start}.content-end-l{-ms-flex-line-pack:end;align-content:flex-end}.content-center-l{-ms-flex-line-pack:center;align-content:center}.content-between-l{-ms-flex-line-pack:justify;align-content:space-between}.content-around-l{-ms-flex-line-pack:distribute;align-content:space-around}.content-stretch-l{-ms-flex-line-pack:stretch;align-content:stretch}.order-0-l{-webkit-box-ordinal-group:1;-ms-flex-order:0;order:0}.order-1-l{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-2-l{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-3-l{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-4-l{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.order-5-l{-webkit-box-ordinal-group:6;-ms-flex-order:5;order:5}.order-6-l{-webkit-box-ordinal-group:7;-ms-flex-order:6;order:6}.order-7-l{-webkit-box-ordinal-group:8;-ms-flex-order:7;order:7}.order-8-l{-webkit-box-ordinal-group:9;-ms-flex-order:8;order:8}.order-last-l{-webkit-box-ordinal-group:100000;-ms-flex-order:99999;order:99999}.fl-l{float:left}.fl-l,.fr-l{display:inline}.fr-l{float:right}.fn-l{float:none}.i-l{font-style:italic}.fs-normal-l{font-style:normal}.normal-l{font-weight:400}.b-l{font-weight:700}.fw1-l{font-weight:100}.fw2-l{font-weight:200}.fw3-l{font-weight:300}.fw4-l{font-weight:400}.fw5-l{font-weight:500}.fw6-l{font-weight:600}.fw7-l{font-weight:700}.fw8-l{font-weight:800}.fw9-l{font-weight:900}.h1-l{height:1rem}.h2-l{height:2rem}.h3-l{height:4rem}.h4-l{height:8rem}.h5-l{height:16rem}.h-25-l{height:25%}.h-50-l{height:50%}.h-75-l{height:75%}.h-100-l{height:100%}.min-h-100-l{min-height:100%}.vh-25-l{height:25vh}.vh-50-l{height:50vh}.vh-75-l{height:75vh}.vh-100-l{height:100vh}.min-vh-100-l{min-height:100vh}.h-auto-l{height:auto}.h-inherit-l{height:inherit}.tracked-l{letter-spacing:.1em}.tracked-tight-l{letter-spacing:-.05em}.tracked-mega-l{letter-spacing:.25em}.lh-solid-l{line-height:1}.lh-title-l{line-height:1.25}.lh-copy-l{line-height:1.5}.mw-100-l{max-width:100%}.mw1-l{max-width:1rem}.mw2-l{max-width:2rem}.mw3-l{max-width:4rem}.mw4-l{max-width:8rem}.mw5-l{max-width:16rem}.mw6-l{max-width:32rem}.mw7-l{max-width:48rem}.mw8-l{max-width:64rem}.mw9-l{max-width:96rem}.mw-none-l{max-width:none}.w1-l{width:1rem}.w2-l{width:2rem}.w3-l{width:4rem}.w4-l{width:8rem}.w5-l{width:16rem}.w-10-l{width:10%}.w-20-l{width:20%}.w-25-l{width:25%}.w-30-l{width:30%}.w-33-l{width:33%}.w-34-l{width:34%}.w-40-l{width:40%}.w-50-l{width:50%}.w-60-l{width:60%}.w-70-l{width:70%}.w-75-l{width:75%}.w-80-l{width:80%}.w-90-l{width:90%}.w-100-l{width:100%}.w-third-l{width:33.33333%}.w-two-thirds-l{width:66.66667%}.w-auto-l{width:auto}.overflow-visible-l{overflow:visible}.overflow-hidden-l{overflow:hidden}.overflow-scroll-l{overflow:scroll}.overflow-auto-l{overflow:auto}.overflow-x-visible-l{overflow-x:visible}.overflow-x-hidden-l{overflow-x:hidden}.overflow-x-scroll-l{overflow-x:scroll}.overflow-x-auto-l{overflow-x:auto}.overflow-y-visible-l{overflow-y:visible}.overflow-y-hidden-l{overflow-y:hidden}.overflow-y-scroll-l{overflow-y:scroll}.overflow-y-auto-l{overflow-y:auto}.static-l{position:static}.relative-l{position:relative}.absolute-l{position:absolute}.fixed-l{position:fixed}.rotate-45-l{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.rotate-90-l{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.rotate-135-l{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.rotate-180-l{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.rotate-225-l{-webkit-transform:rotate(225deg);transform:rotate(225deg)}.rotate-270-l{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.rotate-315-l{-webkit-transform:rotate(315deg);transform:rotate(315deg)}.pa0-l{padding:0}.pa1-l{padding:.25rem}.pa2-l{padding:.5rem}.pa3-l{padding:1rem}.pa4-l{padding:2rem}.pa5-l{padding:4rem}.pa6-l{padding:8rem}.pa7-l{padding:16rem}.pl0-l{padding-left:0}.pl1-l{padding-left:.25rem}.pl2-l{padding-left:.5rem}.pl3-l{padding-left:1rem}.pl4-l{padding-left:2rem}.pl5-l{padding-left:4rem}.pl6-l{padding-left:8rem}.pl7-l{padding-left:16rem}.pr0-l{padding-right:0}.pr1-l{padding-right:.25rem}.pr2-l{padding-right:.5rem}.pr3-l{padding-right:1rem}.pr4-l{padding-right:2rem}.pr5-l{padding-right:4rem}.pr6-l{padding-right:8rem}.pr7-l{padding-right:16rem}.pb0-l{padding-bottom:0}.pb1-l{padding-bottom:.25rem}.pb2-l{padding-bottom:.5rem}.pb3-l{padding-bottom:1rem}.pb4-l{padding-bottom:2rem}.pb5-l{padding-bottom:4rem}.pb6-l{padding-bottom:8rem}.pb7-l{padding-bottom:16rem}.pt0-l{padding-top:0}.pt1-l{padding-top:.25rem}.pt2-l{padding-top:.5rem}.pt3-l{padding-top:1rem}.pt4-l{padding-top:2rem}.pt5-l{padding-top:4rem}.pt6-l{padding-top:8rem}.pt7-l{padding-top:16rem}.pv0-l{padding-top:0;padding-bottom:0}.pv1-l{padding-top:.25rem;padding-bottom:.25rem}.pv2-l{padding-top:.5rem;padding-bottom:.5rem}.pv3-l{padding-top:1rem;padding-bottom:1rem}.pv4-l{padding-top:2rem;padding-bottom:2rem}.pv5-l{padding-top:4rem;padding-bottom:4rem}.pv6-l{padding-top:8rem;padding-bottom:8rem}.pv7-l{padding-top:16rem;padding-bottom:16rem}.ph0-l{padding-left:0;padding-right:0}.ph1-l{padding-left:.25rem;padding-right:.25rem}.ph2-l{padding-left:.5rem;padding-right:.5rem}.ph3-l{padding-left:1rem;padding-right:1rem}.ph4-l{padding-left:2rem;padding-right:2rem}.ph5-l{padding-left:4rem;padding-right:4rem}.ph6-l{padding-left:8rem;padding-right:8rem}.ph7-l{padding-left:16rem;padding-right:16rem}.ma0-l{margin:0}.ma1-l{margin:.25rem}.ma2-l{margin:.5rem}.ma3-l{margin:1rem}.ma4-l{margin:2rem}.ma5-l{margin:4rem}.ma6-l{margin:8rem}.ma7-l{margin:16rem}.ml0-l{margin-left:0}.ml1-l{margin-left:.25rem}.ml2-l{margin-left:.5rem}.ml3-l{margin-left:1rem}.ml4-l{margin-left:2rem}.ml5-l{margin-left:4rem}.ml6-l{margin-left:8rem}.ml7-l{margin-left:16rem}.mr0-l{margin-right:0}.mr1-l{margin-right:.25rem}.mr2-l{margin-right:.5rem}.mr3-l{margin-right:1rem}.mr4-l{margin-right:2rem}.mr5-l{margin-right:4rem}.mr6-l{margin-right:8rem}.mr7-l{margin-right:16rem}.mb0-l{margin-bottom:0}.mb1-l{margin-bottom:.25rem}.mb2-l{margin-bottom:.5rem}.mb3-l{margin-bottom:1rem}.mb4-l{margin-bottom:2rem}.mb5-l{margin-bottom:4rem}.mb6-l{margin-bottom:8rem}.mb7-l{margin-bottom:16rem}.mt0-l{margin-top:0}.mt1-l{margin-top:.25rem}.mt2-l{margin-top:.5rem}.mt3-l{margin-top:1rem}.mt4-l{margin-top:2rem}.mt5-l{margin-top:4rem}.mt6-l{margin-top:8rem}.mt7-l{margin-top:16rem}.mv0-l{margin-top:0;margin-bottom:0}.mv1-l{margin-top:.25rem;margin-bottom:.25rem}.mv2-l{margin-top:.5rem;margin-bottom:.5rem}.mv3-l{margin-top:1rem;margin-bottom:1rem}.mv4-l{margin-top:2rem;margin-bottom:2rem}.mv5-l{margin-top:4rem;margin-bottom:4rem}.mv6-l{margin-top:8rem;margin-bottom:8rem}.mv7-l{margin-top:16rem;margin-bottom:16rem}.mh0-l{margin-left:0;margin-right:0}.mh1-l{margin-left:.25rem;margin-right:.25rem}.mh2-l{margin-left:.5rem;margin-right:.5rem}.mh3-l{margin-left:1rem;margin-right:1rem}.mh4-l{margin-left:2rem;margin-right:2rem}.mh5-l{margin-left:4rem;margin-right:4rem}.mh6-l{margin-left:8rem;margin-right:8rem}.mh7-l{margin-left:16rem;margin-right:16rem}.na1-l{margin:-.25rem}.na2-l{margin:-.5rem}.na3-l{margin:-1rem}.na4-l{margin:-2rem}.na5-l{margin:-4rem}.na6-l{margin:-8rem}.na7-l{margin:-16rem}.nl1-l{margin-left:-.25rem}.nl2-l{margin-left:-.5rem}.nl3-l{margin-left:-1rem}.nl4-l{margin-left:-2rem}.nl5-l{margin-left:-4rem}.nl6-l{margin-left:-8rem}.nl7-l{margin-left:-16rem}.nr1-l{margin-right:-.25rem}.nr2-l{margin-right:-.5rem}.nr3-l{margin-right:-1rem}.nr4-l{margin-right:-2rem}.nr5-l{margin-right:-4rem}.nr6-l{margin-right:-8rem}.nr7-l{margin-right:-16rem}.nb1-l{margin-bottom:-.25rem}.nb2-l{margin-bottom:-.5rem}.nb3-l{margin-bottom:-1rem}.nb4-l{margin-bottom:-2rem}.nb5-l{margin-bottom:-4rem}.nb6-l{margin-bottom:-8rem}.nb7-l{margin-bottom:-16rem}.nt1-l{margin-top:-.25rem}.nt2-l{margin-top:-.5rem}.nt3-l{margin-top:-1rem}.nt4-l{margin-top:-2rem}.nt5-l{margin-top:-4rem}.nt6-l{margin-top:-8rem}.nt7-l{margin-top:-16rem}.strike-l{text-decoration:line-through}.underline-l{text-decoration:underline}.no-underline-l{text-decoration:none}.tl-l{text-align:left}.tr-l{text-align:right}.tc-l{text-align:center}.ttc-l{text-transform:capitalize}.ttl-l{text-transform:lowercase}.ttu-l{text-transform:uppercase}.ttn-l{text-transform:none}.f-6-l,.f-headline-l{font-size:6rem}.f-5-l,.f-subheadline-l{font-size:5rem}.f1-l{font-size:3rem}.f2-l{font-size:2.25rem}.f3-l{font-size:1.5rem}.f4-l{font-size:1.25rem}.f5-l{font-size:1rem}.f6-l{font-size:.875rem}.f7-l{font-size:.75rem}.measure-l{max-width:30em}.measure-wide-l{max-width:34em}.measure-narrow-l{max-width:20em}.indent-l{text-indent:1em;margin-top:0;margin-bottom:0}.small-caps-l{font-variant:small-caps}.truncate-l{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.center-l{margin-right:auto;margin-left:auto}.clip-l{position:fixed!important;position:absolute!important;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px)}.ws-normal-l{white-space:normal}.nowrap-l{white-space:nowrap}.pre-l{white-space:pre}.v-base-l{vertical-align:baseline}.v-mid-l{vertical-align:middle}.v-top-l{vertical-align:top}.v-btm-l{vertical-align:bottom}}\n\n", ""]);

// exports


/***/ }),
/* 112 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(114);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 114 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(16);

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(226);

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(26);

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(263);

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(266);

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(27);

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(271);

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(287);

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(289);

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(290);

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(303);

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(309);

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(31);

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(312);

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(36);

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(43);

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(44);

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(69);

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(92);

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(65);
__webpack_require__(64);
__webpack_require__(66);
module.exports = __webpack_require__(63);


/***/ })
/******/ ]);
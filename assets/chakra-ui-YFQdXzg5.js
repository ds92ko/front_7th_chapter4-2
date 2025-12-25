import { b as __commonJS, c as __esm, d as __export, f as __toESM } from "./rolldown-runtime-CINmCwk_.js";

//#region node_modules/.pnpm/react@19.1.1/node_modules/react/cjs/react.production.js
var require_react_production = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/react@19.1.1/node_modules/react/cjs/react.production.js": ((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
		if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
		maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
		return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var ReactNoopUpdateQueue = {
		isMounted: function() {
			return !1;
		},
		enqueueForceUpdate: function() {},
		enqueueReplaceState: function() {},
		enqueueSetState: function() {}
	}, assign$1 = Object.assign, emptyObject = {};
	function Component(props, context, updater) {
		this.props = props;
		this.context = context;
		this.refs = emptyObject;
		this.updater = updater || ReactNoopUpdateQueue;
	}
	Component.prototype.isReactComponent = {};
	Component.prototype.setState = function(partialState, callback) {
		if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
		this.updater.enqueueSetState(this, partialState, callback, "setState");
	};
	Component.prototype.forceUpdate = function(callback) {
		this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
	};
	function ComponentDummy() {}
	ComponentDummy.prototype = Component.prototype;
	function PureComponent(props, context, updater) {
		this.props = props;
		this.context = context;
		this.refs = emptyObject;
		this.updater = updater || ReactNoopUpdateQueue;
	}
	var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
	pureComponentPrototype.constructor = PureComponent;
	assign$1(pureComponentPrototype, Component.prototype);
	pureComponentPrototype.isPureReactComponent = !0;
	var isArrayImpl = Array.isArray, ReactSharedInternals = {
		H: null,
		A: null,
		T: null,
		S: null,
		V: null
	}, hasOwnProperty$1 = Object.prototype.hasOwnProperty;
	function ReactElement(type, key, self$1, source, owner, props) {
		self$1 = props.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== self$1 ? self$1 : null,
			props
		};
	}
	function cloneAndReplaceKey(oldElement, newKey) {
		return ReactElement(oldElement.type, newKey, void 0, void 0, void 0, oldElement.props);
	}
	function isValidElement$1(object) {
		return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function escape$2(key) {
		var escaperLookup = {
			"=": "=0",
			":": "=2"
		};
		return "$" + key.replace(/[=:]/g, function(match$1) {
			return escaperLookup[match$1];
		});
	}
	var userProvidedKeyEscapeRegex = /\/+/g;
	function getElementKey(element, index) {
		return "object" === typeof element && null !== element && null != element.key ? escape$2("" + element.key) : index.toString(36);
	}
	function noop$1() {}
	function resolveThenable(thenable) {
		switch (thenable.status) {
			case "fulfilled": return thenable.value;
			case "rejected": throw thenable.reason;
			default: switch ("string" === typeof thenable.status ? thenable.then(noop$1, noop$1) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
				"pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
			}, function(error) {
				"pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
			})), thenable.status) {
				case "fulfilled": return thenable.value;
				case "rejected": throw thenable.reason;
			}
		}
		throw thenable;
	}
	function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
		var type = typeof children;
		if ("undefined" === type || "boolean" === type) children = null;
		var invokeCallback = !1;
		if (null === children) invokeCallback = !0;
		else switch (type) {
			case "bigint":
			case "string":
			case "number":
				invokeCallback = !0;
				break;
			case "object": switch (children.$$typeof) {
				case REACT_ELEMENT_TYPE:
				case REACT_PORTAL_TYPE:
					invokeCallback = !0;
					break;
				case REACT_LAZY_TYPE: return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
			}
		}
		if (invokeCallback) return callback = callback(children), invokeCallback = "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar, isArrayImpl(callback) ? (escapedPrefix = "", null != invokeCallback && (escapedPrefix = invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c$1) {
			return c$1;
		})) : null != callback && (isValidElement$1(callback) && (callback = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || children && children.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + invokeCallback)), array.push(callback)), 1;
		invokeCallback = 0;
		var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
		if (isArrayImpl(children)) for (var i = 0; i < children.length; i++) nameSoFar = children[i], type = nextNamePrefix + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if (i = getIteratorFn(children), "function" === typeof i) for (children = i.call(children), i = 0; !(nameSoFar = children.next()).done;) nameSoFar = nameSoFar.value, type = nextNamePrefix + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
		else if ("object" === type) {
			if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
			array = String(children);
			throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
		}
		return invokeCallback;
	}
	function mapChildren(children, func, context) {
		if (null == children) return children;
		var result = [], count = 0;
		mapIntoArray(children, result, "", "", function(child) {
			return func.call(context, child, count++);
		});
		return result;
	}
	function lazyInitializer(payload) {
		if (-1 === payload._status) {
			var ctor = payload._result;
			ctor = ctor();
			ctor.then(function(moduleObject) {
				if (0 === payload._status || -1 === payload._status) payload._status = 1, payload._result = moduleObject;
			}, function(error) {
				if (0 === payload._status || -1 === payload._status) payload._status = 2, payload._result = error;
			});
			-1 === payload._status && (payload._status = 0, payload._result = ctor);
		}
		if (1 === payload._status) return payload._result.default;
		throw payload._result;
	}
	var reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
		if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
			var event = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
				error
			});
			if (!window.dispatchEvent(event)) return;
		} else if ("object" === typeof process && "function" === typeof process.emit) {
			process.emit("uncaughtException", error);
			return;
		}
		console.error(error);
	};
	function noop() {}
	exports.Children = {
		map: mapChildren,
		forEach: function(children, forEachFunc, forEachContext) {
			mapChildren(children, function() {
				forEachFunc.apply(this, arguments);
			}, forEachContext);
		},
		count: function(children) {
			var n$1 = 0;
			mapChildren(children, function() {
				n$1++;
			});
			return n$1;
		},
		toArray: function(children) {
			return mapChildren(children, function(child) {
				return child;
			}) || [];
		},
		only: function(children) {
			if (!isValidElement$1(children)) throw Error("React.Children.only expected to receive a single React element child.");
			return children;
		}
	};
	exports.Component = Component;
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.Profiler = REACT_PROFILER_TYPE;
	exports.PureComponent = PureComponent;
	exports.StrictMode = REACT_STRICT_MODE_TYPE;
	exports.Suspense = REACT_SUSPENSE_TYPE;
	exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
	exports.__COMPILER_RUNTIME = {
		__proto__: null,
		c: function(size$1) {
			return ReactSharedInternals.H.useMemoCache(size$1);
		}
	};
	exports.cache = function(fn) {
		return function() {
			return fn.apply(null, arguments);
		};
	};
	exports.cloneElement = function(element, config$1, children) {
		if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
		var props = assign$1({}, element.props), key = element.key, owner = void 0;
		if (null != config$1) for (propName in void 0 !== config$1.ref && (owner = void 0), void 0 !== config$1.key && (key = "" + config$1.key), config$1) !hasOwnProperty$1.call(config$1, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config$1.ref || (props[propName] = config$1[propName]);
		var propName = arguments.length - 2;
		if (1 === propName) props.children = children;
		else if (1 < propName) {
			for (var childArray = Array(propName), i = 0; i < propName; i++) childArray[i] = arguments[i + 2];
			props.children = childArray;
		}
		return ReactElement(element.type, key, void 0, void 0, owner, props);
	};
	exports.createContext = function(defaultValue) {
		defaultValue = {
			$$typeof: REACT_CONTEXT_TYPE,
			_currentValue: defaultValue,
			_currentValue2: defaultValue,
			_threadCount: 0,
			Provider: null,
			Consumer: null
		};
		defaultValue.Provider = defaultValue;
		defaultValue.Consumer = {
			$$typeof: REACT_CONSUMER_TYPE,
			_context: defaultValue
		};
		return defaultValue;
	};
	exports.createElement = function(type, config$1, children) {
		var propName, props = {}, key = null;
		if (null != config$1) for (propName in void 0 !== config$1.key && (key = "" + config$1.key), config$1) hasOwnProperty$1.call(config$1, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (props[propName] = config$1[propName]);
		var childrenLength = arguments.length - 2;
		if (1 === childrenLength) props.children = children;
		else if (1 < childrenLength) {
			for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++) childArray[i] = arguments[i + 2];
			props.children = childArray;
		}
		if (type && type.defaultProps) for (propName in childrenLength = type.defaultProps, childrenLength) void 0 === props[propName] && (props[propName] = childrenLength[propName]);
		return ReactElement(type, key, void 0, void 0, null, props);
	};
	exports.createRef = function() {
		return { current: null };
	};
	exports.forwardRef = function(render) {
		return {
			$$typeof: REACT_FORWARD_REF_TYPE,
			render
		};
	};
	exports.isValidElement = isValidElement$1;
	exports.lazy = function(ctor) {
		return {
			$$typeof: REACT_LAZY_TYPE,
			_payload: {
				_status: -1,
				_result: ctor
			},
			_init: lazyInitializer
		};
	};
	exports.memo = function(type, compare) {
		return {
			$$typeof: REACT_MEMO_TYPE,
			type,
			compare: void 0 === compare ? null : compare
		};
	};
	exports.startTransition = function(scope) {
		var prevTransition = ReactSharedInternals.T, currentTransition = {};
		ReactSharedInternals.T = currentTransition;
		try {
			var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
			null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
			"object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
		} catch (error) {
			reportGlobalError(error);
		} finally {
			ReactSharedInternals.T = prevTransition;
		}
	};
	exports.unstable_useCacheRefresh = function() {
		return ReactSharedInternals.H.useCacheRefresh();
	};
	exports.use = function(usable) {
		return ReactSharedInternals.H.use(usable);
	};
	exports.useActionState = function(action, initialState, permalink) {
		return ReactSharedInternals.H.useActionState(action, initialState, permalink);
	};
	exports.useCallback = function(callback, deps) {
		return ReactSharedInternals.H.useCallback(callback, deps);
	};
	exports.useContext = function(Context) {
		return ReactSharedInternals.H.useContext(Context);
	};
	exports.useDebugValue = function() {};
	exports.useDeferredValue = function(value, initialValue) {
		return ReactSharedInternals.H.useDeferredValue(value, initialValue);
	};
	exports.useEffect = function(create, createDeps, update) {
		var dispatcher = ReactSharedInternals.H;
		if ("function" === typeof update) throw Error("useEffect CRUD overload is not enabled in this build of React.");
		return dispatcher.useEffect(create, createDeps);
	};
	exports.useId = function() {
		return ReactSharedInternals.H.useId();
	};
	exports.useImperativeHandle = function(ref, create, deps) {
		return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
	};
	exports.useInsertionEffect = function(create, deps) {
		return ReactSharedInternals.H.useInsertionEffect(create, deps);
	};
	exports.useLayoutEffect = function(create, deps) {
		return ReactSharedInternals.H.useLayoutEffect(create, deps);
	};
	exports.useMemo = function(create, deps) {
		return ReactSharedInternals.H.useMemo(create, deps);
	};
	exports.useOptimistic = function(passthrough, reducer) {
		return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
	};
	exports.useReducer = function(reducer, initialArg, init) {
		return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
	};
	exports.useRef = function(initialValue) {
		return ReactSharedInternals.H.useRef(initialValue);
	};
	exports.useState = function(initialState) {
		return ReactSharedInternals.H.useState(initialState);
	};
	exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
		return ReactSharedInternals.H.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
	};
	exports.useTransition = function() {
		return ReactSharedInternals.H.useTransition();
	};
	exports.version = "19.1.1";
}) });

//#endregion
//#region node_modules/.pnpm/react@19.1.1/node_modules/react/index.js
var require_react = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/react@19.1.1/node_modules/react/index.js": ((exports, module) => {
	module.exports = require_react_production();
}) });

//#endregion
//#region node_modules/.pnpm/@chakra-ui+utils@2.2.5_react@19.1.1/node_modules/@chakra-ui/utils/dist/esm/is-element.mjs
function isHTMLElement(el) {
	return el != null && typeof el == "object" && "nodeType" in el && el.nodeType === Node.ELEMENT_NODE;
}
function isBrowser$1() {
	return Boolean(globalThis?.document);
}
function isHiddenElement(element) {
	if (element.parentElement && isHiddenElement(element.parentElement)) return true;
	return element.hidden;
}
function isContentEditableElement(element) {
	const value = element.getAttribute("contenteditable");
	return value !== "false" && value != null;
}
function isDisabledElement(element) {
	return Boolean(element.getAttribute("disabled")) === true || Boolean(element.getAttribute("aria-disabled")) === true;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+utils@2.2.5_react@19.1.1/node_modules/@chakra-ui/utils/dist/esm/owner.mjs
function getOwnerWindow(node$1) {
	return getOwnerDocument$1(node$1)?.defaultView ?? window;
}
function getOwnerDocument$1(node$1) {
	return isHTMLElement(node$1) ? node$1.ownerDocument : document;
}
function getActiveElement(node$1) {
	return getOwnerDocument$1(node$1).activeElement;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+utils@2.2.5_react@19.1.1/node_modules/@chakra-ui/utils/dist/esm/assign-after.mjs
function assignAfter(target, ...sources) {
	if (target == null) throw new TypeError("Cannot convert undefined or null to object");
	const result = { ...target };
	for (const nextSource of sources) {
		if (nextSource == null) continue;
		for (const nextKey in nextSource) {
			if (!Object.prototype.hasOwnProperty.call(nextSource, nextKey)) continue;
			if (nextKey in result) delete result[nextKey];
			result[nextKey] = nextSource[nextKey];
		}
	}
	return result;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+utils@2.2.5_react@19.1.1/node_modules/@chakra-ui/utils/dist/esm/attr.mjs
const dataAttr = (condition) => condition ? "" : void 0;
const ariaAttr = (condition) => condition ? true : void 0;

//#endregion
//#region node_modules/.pnpm/@chakra-ui+utils@2.2.5_react@19.1.1/node_modules/@chakra-ui/utils/dist/esm/is.mjs
function isArray(value) {
	return Array.isArray(value);
}
function isObject(value) {
	const type = typeof value;
	return value != null && (type === "object" || type === "function") && !isArray(value);
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+utils@2.2.5_react@19.1.1/node_modules/@chakra-ui/utils/dist/esm/breakpoint.mjs
function getLastItem(array) {
	const length$1 = array == null ? 0 : array.length;
	return length$1 ? array[length$1 - 1] : void 0;
}
function analyzeCSSValue$1(value) {
	const num = parseFloat(value.toString());
	const unit = value.toString().replace(String(num), "");
	return {
		unitless: !unit,
		value: num,
		unit
	};
}
function px(value) {
	if (value == null) return value;
	const { unitless } = analyzeCSSValue$1(value);
	return unitless || typeof value === "number" ? `${value}px` : value;
}
const sortByBreakpointValue = (a, b$1) => parseInt(a[1], 10) > parseInt(b$1[1], 10) ? 1 : -1;
const sortBps = (breakpoints$2) => Object.fromEntries(Object.entries(breakpoints$2).sort(sortByBreakpointValue));
function normalize$1(breakpoints$2) {
	const sorted = sortBps(breakpoints$2);
	return Object.assign(Object.values(sorted), sorted);
}
function keys(breakpoints$2) {
	const value = Object.keys(sortBps(breakpoints$2));
	return new Set(value);
}
function subtract$2(value) {
	if (!value) return value;
	value = px(value) ?? value;
	const OFFSET = -.02;
	return typeof value === "number" ? `${value + OFFSET}` : value.replace(/(\d+\.?\d*)/u, (m$1) => `${parseFloat(m$1) + OFFSET}`);
}
function toMediaQueryString(min, max) {
	const query = ["@media screen"];
	if (min) query.push("and", `(min-width: ${px(min)})`);
	if (max) query.push("and", `(max-width: ${px(max)})`);
	return query.join(" ");
}
function analyzeBreakpoints(breakpoints$2) {
	if (!breakpoints$2) return null;
	breakpoints$2.base = breakpoints$2.base ?? "0px";
	const normalized = normalize$1(breakpoints$2);
	const queries = Object.entries(breakpoints$2).sort(sortByBreakpointValue).map(([breakpoint, minW], index, entry) => {
		let [, maxW] = entry[index + 1] ?? [];
		maxW = parseFloat(maxW) > 0 ? subtract$2(maxW) : void 0;
		return {
			_minW: subtract$2(minW),
			breakpoint,
			minW,
			maxW,
			maxWQuery: toMediaQueryString(null, maxW),
			minWQuery: toMediaQueryString(minW),
			minMaxQuery: toMediaQueryString(minW, maxW)
		};
	});
	const _keys = keys(breakpoints$2);
	const _keysArr = Array.from(_keys.values());
	return {
		keys: _keys,
		normalized,
		isResponsive(test) {
			const keys2 = Object.keys(test);
			return keys2.length > 0 && keys2.every((key) => _keys.has(key));
		},
		asObject: sortBps(breakpoints$2),
		asArray: normalize$1(breakpoints$2),
		details: queries,
		get(key) {
			return queries.find((q$1) => q$1.breakpoint === key);
		},
		media: [null, ...normalized.map((minW) => toMediaQueryString(minW)).slice(1)],
		toArrayValue(test) {
			if (!isObject(test)) throw new Error("toArrayValue: value must be an object");
			const result = _keysArr.map((bp) => test[bp] ?? null);
			while (getLastItem(result) === null) result.pop();
			return result;
		},
		toObjectValue(test) {
			if (!Array.isArray(test)) throw new Error("toObjectValue: value must be an array");
			return test.reduce((acc, value, index) => {
				const key = _keysArr[index];
				if (key != null && value != null) acc[key] = value;
				return acc;
			}, {});
		}
	};
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+utils@2.2.5_react@19.1.1/node_modules/@chakra-ui/utils/dist/esm/call-all.mjs
function callAll(...fns) {
	return function mergedFn(...args) {
		fns.forEach((fn) => fn?.(...args));
	};
}
function callAllHandlers(...fns) {
	return function func(event) {
		fns.some((fn) => {
			fn?.(event);
			return event?.defaultPrevented;
		});
	};
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+utils@2.2.5_react@19.1.1/node_modules/@chakra-ui/utils/dist/esm/children.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function getValidChildren(children) {
	return import_react.Children.toArray(children).filter((child) => (0, import_react.isValidElement)(child));
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+utils@2.2.5_react@19.1.1/node_modules/@chakra-ui/utils/dist/esm/compact.mjs
function compact(object) {
	const clone = Object.assign({}, object);
	for (let key in clone) if (clone[key] === void 0) delete clone[key];
	return clone;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+utils@2.2.5_react@19.1.1/node_modules/@chakra-ui/utils/dist/esm/context.mjs
function getErrorMessage(hook, provider) {
	return `${hook} returned \`undefined\`. Seems you forgot to wrap component within ${provider}`;
}
function createContext(options = {}) {
	const { name, strict = true, hookName = "useContext", providerName = "Provider", errorMessage, defaultValue } = options;
	const Context = (0, import_react.createContext)(defaultValue);
	Context.displayName = name;
	function useContext$1$1() {
		const context = (0, import_react.useContext)(Context);
		if (!context && strict) {
			const error = new Error(errorMessage ?? getErrorMessage(hookName, providerName));
			error.name = "ContextError";
			Error.captureStackTrace?.(error, useContext$1$1);
			throw error;
		}
		return context;
	}
	return [
		Context.Provider,
		useContext$1$1,
		Context
	];
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+utils@2.2.5_react@19.1.1/node_modules/@chakra-ui/utils/dist/esm/cx.mjs
const cx = (...classNames) => classNames.filter(Boolean).join(" ");

//#endregion
//#region node_modules/.pnpm/@chakra-ui+utils@2.2.5_react@19.1.1/node_modules/@chakra-ui/utils/dist/esm/tabbable.mjs
const hasTabIndex = (element) => element.hasAttribute("tabindex");
const hasNegativeTabIndex = (element) => hasTabIndex(element) && element.tabIndex === -1;
function isFocusable(element) {
	if (!isHTMLElement(element) || isHiddenElement(element) || isDisabledElement(element)) return false;
	const { localName } = element;
	const focusableTags = [
		"input",
		"select",
		"textarea",
		"button"
	];
	if (focusableTags.indexOf(localName) >= 0) return true;
	const others$1 = {
		a: () => element.hasAttribute("href"),
		audio: () => element.hasAttribute("controls"),
		video: () => element.hasAttribute("controls")
	};
	if (localName in others$1) return others$1[localName]();
	if (isContentEditableElement(element)) return true;
	return hasTabIndex(element);
}
function isTabbable(element) {
	if (!element) return false;
	return isHTMLElement(element) && isFocusable(element) && !hasNegativeTabIndex(element);
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+utils@2.2.5_react@19.1.1/node_modules/@chakra-ui/utils/dist/esm/focusable.mjs
const focusableElList = [
	"input:not(:disabled):not([disabled])",
	"select:not(:disabled):not([disabled])",
	"textarea:not(:disabled):not([disabled])",
	"embed",
	"iframe",
	"object",
	"a[href]",
	"area[href]",
	"button:not(:disabled):not([disabled])",
	"[tabindex]",
	"audio[controls]",
	"video[controls]",
	"*[tabindex]:not([aria-disabled])",
	"*[contenteditable]"
];
const focusableElSelector = focusableElList.join();
const isVisible = (el) => el.offsetWidth > 0 && el.offsetHeight > 0;
function getAllFocusable(container$1) {
	const focusableEls = Array.from(container$1.querySelectorAll(focusableElSelector));
	focusableEls.unshift(container$1);
	return focusableEls.filter((el) => isFocusable(el) && isVisible(el));
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+utils@2.2.5_react@19.1.1/node_modules/@chakra-ui/utils/dist/esm/get.mjs
function get$2(obj, path, fallback, index) {
	const key = typeof path === "string" ? path.split(".") : [path];
	for (index = 0; index < key.length; index += 1) {
		if (!obj) break;
		obj = obj[key[index]];
	}
	return obj === void 0 ? fallback : obj;
}
const memoize$2 = (fn) => {
	const cache = /* @__PURE__ */ new WeakMap();
	const memoizedFn = (obj, path, fallback, index) => {
		if (typeof obj === "undefined") return fn(obj, path, fallback);
		if (!cache.has(obj)) cache.set(obj, /* @__PURE__ */ new Map());
		const map = cache.get(obj);
		if (map.has(path)) return map.get(path);
		const value = fn(obj, path, fallback, index);
		map.set(path, value);
		return value;
	};
	return memoizedFn;
};
const memoizedGet$1 = memoize$2(get$2);

//#endregion
//#region node_modules/.pnpm/@chakra-ui+utils@2.2.5_react@19.1.1/node_modules/@chakra-ui/utils/dist/esm/interop-default.mjs
const interopDefault = (mod) => mod.default || mod;

//#endregion
//#region node_modules/.pnpm/@chakra-ui+utils@2.2.5_react@19.1.1/node_modules/@chakra-ui/utils/dist/esm/lazy.mjs
function lazyDisclosure(options) {
	const { wasSelected, enabled, isSelected, mode: mode$1 = "unmount" } = options;
	if (!enabled) return true;
	if (isSelected) return true;
	if (mode$1 === "keepMounted" && wasSelected) return true;
	return false;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+utils@2.2.5_react@19.1.1/node_modules/@chakra-ui/utils/dist/esm/omit.mjs
function omit(object, keysToOmit = []) {
	const clone = Object.assign({}, object);
	for (const key of keysToOmit) if (key in clone) delete clone[key];
	return clone;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+utils@2.2.5_react@19.1.1/node_modules/@chakra-ui/utils/dist/esm/pick.mjs
function pick(object, keysToPick) {
	const result = {};
	for (const key of keysToPick) if (key in object) result[key] = object[key];
	return result;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+utils@2.2.5_react@19.1.1/node_modules/@chakra-ui/utils/dist/esm/responsive.mjs
const breakpoints$1 = Object.freeze([
	"base",
	"sm",
	"md",
	"lg",
	"xl",
	"2xl"
]);
function mapResponsive(prop, mapper) {
	if (Array.isArray(prop)) return prop.map((item) => item === null ? null : mapper(item));
	if (isObject(prop)) return Object.keys(prop).reduce((result, key) => {
		result[key] = mapper(prop[key]);
		return result;
	}, {});
	if (prop != null) return mapper(prop);
	return null;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+utils@2.2.5_react@19.1.1/node_modules/@chakra-ui/utils/dist/esm/run-if-fn.mjs
const isFunction$3 = (value) => typeof value === "function";
function runIfFn$1(valueOrFn, ...args) {
	return isFunction$3(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+utils@2.2.5_react@19.1.1/node_modules/@chakra-ui/utils/dist/esm/split.mjs
function split(object, keys$1) {
	const picked = {};
	const omitted = {};
	for (const [key, value] of Object.entries(object)) if (keys$1.includes(key)) picked[key] = value;
	else omitted[key] = value;
	return [picked, omitted];
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+utils@2.2.5_react@19.1.1/node_modules/@chakra-ui/utils/dist/esm/split-props.mjs
function splitProps(props, ...keys$1) {
	const descriptors = Object.getOwnPropertyDescriptors(props);
	const dKeys = Object.keys(descriptors);
	const split$1 = (k$1) => {
		const clone = {};
		for (let i = 0; i < k$1.length; i++) {
			const key = k$1[i];
			if (descriptors[key]) {
				Object.defineProperty(clone, key, descriptors[key]);
				delete descriptors[key];
			}
		}
		return clone;
	};
	const fn = (key) => split$1(Array.isArray(key) ? key : dKeys.filter(key));
	return keys$1.map(fn).concat(split$1(dKeys));
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+utils@2.2.5_react@19.1.1/node_modules/@chakra-ui/utils/dist/esm/walk-object.mjs
function walkObject(target, predicate, options = {}) {
	const { stop, getKey } = options;
	function inner(value, path = []) {
		if (isObject(value) || Array.isArray(value)) {
			const result = {};
			for (const [prop, child] of Object.entries(value)) {
				const key = getKey?.(prop) ?? prop;
				const childPath = [...path, key];
				if (stop?.(value, childPath)) return predicate(value, path);
				result[key] = inner(child, childPath);
			}
			return result;
		}
		return predicate(value, path);
	}
	return inner(target);
}

//#endregion
//#region node_modules/.pnpm/lodash.mergewith@4.6.2/node_modules/lodash.mergewith/index.js
var require_lodash = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/lodash.mergewith@4.6.2/node_modules/lodash.mergewith/index.js": ((exports, module) => {
	/**
	* Lodash (Custom Build) <https://lodash.com/>
	* Build: `lodash modularize exports="npm" -o ./`
	* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
	* Released under MIT license <https://lodash.com/license>
	* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	*/
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = "__lodash_hash_undefined__";
	/** Used to detect hot functions by number of calls within a span of milliseconds. */
	var HOT_COUNT = 800, HOT_SPAN = 16;
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	/** `Object#toString` result references. */
	var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]";
	var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
	/**
	* Used to match `RegExp`
	* [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	*/
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
	/** Detect free variable `self`. */
	var freeSelf = typeof self == "object" && self && self.Object === Object && self;
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function("return this")();
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	/** Used to access faster Node.js helpers. */
	var nodeUtil = function() {
		try {
			var types = freeModule && freeModule.require && freeModule.require("util").types;
			if (types) return types;
			return freeProcess && freeProcess.binding && freeProcess.binding("util");
		} catch (e$1) {}
	}();
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	/**
	* A faster alternative to `Function#apply`, this function invokes `func`
	* with the `this` binding of `thisArg` and the arguments of `args`.
	*
	* @private
	* @param {Function} func The function to invoke.
	* @param {*} thisArg The `this` binding of `func`.
	* @param {Array} args The arguments to invoke `func` with.
	* @returns {*} Returns the result of `func`.
	*/
	function apply(func, thisArg, args) {
		switch (args.length) {
			case 0: return func.call(thisArg);
			case 1: return func.call(thisArg, args[0]);
			case 2: return func.call(thisArg, args[0], args[1]);
			case 3: return func.call(thisArg, args[0], args[1], args[2]);
		}
		return func.apply(thisArg, args);
	}
	/**
	* The base implementation of `_.times` without support for iteratee shorthands
	* or max array length checks.
	*
	* @private
	* @param {number} n The number of times to invoke `iteratee`.
	* @param {Function} iteratee The function invoked per iteration.
	* @returns {Array} Returns the array of results.
	*/
	function baseTimes(n$1, iteratee) {
		var index = -1, result = Array(n$1);
		while (++index < n$1) result[index] = iteratee(index);
		return result;
	}
	/**
	* The base implementation of `_.unary` without support for storing metadata.
	*
	* @private
	* @param {Function} func The function to cap arguments for.
	* @returns {Function} Returns the new capped function.
	*/
	function baseUnary(func) {
		return function(value) {
			return func(value);
		};
	}
	/**
	* Gets the value at `key` of `object`.
	*
	* @private
	* @param {Object} [object] The object to query.
	* @param {string} key The key of the property to get.
	* @returns {*} Returns the property value.
	*/
	function getValue(object, key) {
		return object == null ? void 0 : object[key];
	}
	/**
	* Creates a unary function that invokes `func` with its argument transformed.
	*
	* @private
	* @param {Function} func The function to wrap.
	* @param {Function} transform The argument transform.
	* @returns {Function} Returns the new function.
	*/
	function overArg(func, transform$1) {
		return function(arg) {
			return func(transform$1(arg));
		};
	}
	/** Used for built-in method references. */
	var arrayProto = Array.prototype, funcProto = Function.prototype, objectProto = Object.prototype;
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root["__core-js_shared__"];
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = function() {
		var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
		return uid ? "Symbol(src)_1." + uid : "";
	}();
	/**
	* Used to resolve the
	* [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	* of values.
	*/
	var nativeObjectToString = objectProto.toString;
	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);
	/** Used to detect if a method is native. */
	var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : void 0, Symbol$1 = root.Symbol, Uint8Array = root.Uint8Array, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0, getPrototype = overArg(Object.getPrototypeOf, Object), objectCreate = Object.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
	var defineProperty$1 = function() {
		try {
			var func = getNative(Object, "defineProperty");
			func({}, "", {});
			return func;
		} catch (e$1) {}
	}();
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0, nativeMax = Math.max, nativeNow = Date.now;
	var Map$1 = getNative(root, "Map"), nativeCreate = getNative(Object, "create");
	/**
	* The base implementation of `_.create` without support for assigning
	* properties to the created object.
	*
	* @private
	* @param {Object} proto The object to inherit from.
	* @returns {Object} Returns the new object.
	*/
	var baseCreate = function() {
		function object() {}
		return function(proto) {
			if (!isObject$1(proto)) return {};
			if (objectCreate) return objectCreate(proto);
			object.prototype = proto;
			var result = new object();
			object.prototype = void 0;
			return result;
		};
	}();
	/**
	* Creates a hash object.
	*
	* @private
	* @constructor
	* @param {Array} [entries] The key-value pairs to cache.
	*/
	function Hash(entries) {
		var index = -1, length$1 = entries == null ? 0 : entries.length;
		this.clear();
		while (++index < length$1) {
			var entry = entries[index];
			this.set(entry[0], entry[1]);
		}
	}
	/**
	* Removes all key-value entries from the hash.
	*
	* @private
	* @name clear
	* @memberOf Hash
	*/
	function hashClear() {
		this.__data__ = nativeCreate ? nativeCreate(null) : {};
		this.size = 0;
	}
	/**
	* Removes `key` and its value from the hash.
	*
	* @private
	* @name delete
	* @memberOf Hash
	* @param {Object} hash The hash to modify.
	* @param {string} key The key of the value to remove.
	* @returns {boolean} Returns `true` if the entry was removed, else `false`.
	*/
	function hashDelete(key) {
		var result = this.has(key) && delete this.__data__[key];
		this.size -= result ? 1 : 0;
		return result;
	}
	/**
	* Gets the hash value for `key`.
	*
	* @private
	* @name get
	* @memberOf Hash
	* @param {string} key The key of the value to get.
	* @returns {*} Returns the entry value.
	*/
	function hashGet(key) {
		var data = this.__data__;
		if (nativeCreate) {
			var result = data[key];
			return result === HASH_UNDEFINED ? void 0 : result;
		}
		return hasOwnProperty.call(data, key) ? data[key] : void 0;
	}
	/**
	* Checks if a hash value for `key` exists.
	*
	* @private
	* @name has
	* @memberOf Hash
	* @param {string} key The key of the entry to check.
	* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	*/
	function hashHas(key) {
		var data = this.__data__;
		return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
	}
	/**
	* Sets the hash `key` to `value`.
	*
	* @private
	* @name set
	* @memberOf Hash
	* @param {string} key The key of the value to set.
	* @param {*} value The value to set.
	* @returns {Object} Returns the hash instance.
	*/
	function hashSet(key, value) {
		var data = this.__data__;
		this.size += this.has(key) ? 0 : 1;
		data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
		return this;
	}
	Hash.prototype.clear = hashClear;
	Hash.prototype["delete"] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	/**
	* Creates an list cache object.
	*
	* @private
	* @constructor
	* @param {Array} [entries] The key-value pairs to cache.
	*/
	function ListCache(entries) {
		var index = -1, length$1 = entries == null ? 0 : entries.length;
		this.clear();
		while (++index < length$1) {
			var entry = entries[index];
			this.set(entry[0], entry[1]);
		}
	}
	/**
	* Removes all key-value entries from the list cache.
	*
	* @private
	* @name clear
	* @memberOf ListCache
	*/
	function listCacheClear() {
		this.__data__ = [];
		this.size = 0;
	}
	/**
	* Removes `key` and its value from the list cache.
	*
	* @private
	* @name delete
	* @memberOf ListCache
	* @param {string} key The key of the value to remove.
	* @returns {boolean} Returns `true` if the entry was removed, else `false`.
	*/
	function listCacheDelete(key) {
		var data = this.__data__, index = assocIndexOf(data, key);
		if (index < 0) return false;
		var lastIndex = data.length - 1;
		if (index == lastIndex) data.pop();
		else splice.call(data, index, 1);
		--this.size;
		return true;
	}
	/**
	* Gets the list cache value for `key`.
	*
	* @private
	* @name get
	* @memberOf ListCache
	* @param {string} key The key of the value to get.
	* @returns {*} Returns the entry value.
	*/
	function listCacheGet(key) {
		var data = this.__data__, index = assocIndexOf(data, key);
		return index < 0 ? void 0 : data[index][1];
	}
	/**
	* Checks if a list cache value for `key` exists.
	*
	* @private
	* @name has
	* @memberOf ListCache
	* @param {string} key The key of the entry to check.
	* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	*/
	function listCacheHas(key) {
		return assocIndexOf(this.__data__, key) > -1;
	}
	/**
	* Sets the list cache `key` to `value`.
	*
	* @private
	* @name set
	* @memberOf ListCache
	* @param {string} key The key of the value to set.
	* @param {*} value The value to set.
	* @returns {Object} Returns the list cache instance.
	*/
	function listCacheSet(key, value) {
		var data = this.__data__, index = assocIndexOf(data, key);
		if (index < 0) {
			++this.size;
			data.push([key, value]);
		} else data[index][1] = value;
		return this;
	}
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype["delete"] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	/**
	* Creates a map cache object to store key-value pairs.
	*
	* @private
	* @constructor
	* @param {Array} [entries] The key-value pairs to cache.
	*/
	function MapCache(entries) {
		var index = -1, length$1 = entries == null ? 0 : entries.length;
		this.clear();
		while (++index < length$1) {
			var entry = entries[index];
			this.set(entry[0], entry[1]);
		}
	}
	/**
	* Removes all key-value entries from the map.
	*
	* @private
	* @name clear
	* @memberOf MapCache
	*/
	function mapCacheClear() {
		this.size = 0;
		this.__data__ = {
			"hash": new Hash(),
			"map": new (Map$1 || ListCache)(),
			"string": new Hash()
		};
	}
	/**
	* Removes `key` and its value from the map.
	*
	* @private
	* @name delete
	* @memberOf MapCache
	* @param {string} key The key of the value to remove.
	* @returns {boolean} Returns `true` if the entry was removed, else `false`.
	*/
	function mapCacheDelete(key) {
		var result = getMapData(this, key)["delete"](key);
		this.size -= result ? 1 : 0;
		return result;
	}
	/**
	* Gets the map value for `key`.
	*
	* @private
	* @name get
	* @memberOf MapCache
	* @param {string} key The key of the value to get.
	* @returns {*} Returns the entry value.
	*/
	function mapCacheGet(key) {
		return getMapData(this, key).get(key);
	}
	/**
	* Checks if a map value for `key` exists.
	*
	* @private
	* @name has
	* @memberOf MapCache
	* @param {string} key The key of the entry to check.
	* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	*/
	function mapCacheHas(key) {
		return getMapData(this, key).has(key);
	}
	/**
	* Sets the map `key` to `value`.
	*
	* @private
	* @name set
	* @memberOf MapCache
	* @param {string} key The key of the value to set.
	* @param {*} value The value to set.
	* @returns {Object} Returns the map cache instance.
	*/
	function mapCacheSet(key, value) {
		var data = getMapData(this, key), size$1 = data.size;
		data.set(key, value);
		this.size += data.size == size$1 ? 0 : 1;
		return this;
	}
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype["delete"] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	/**
	* Creates a stack cache object to store key-value pairs.
	*
	* @private
	* @constructor
	* @param {Array} [entries] The key-value pairs to cache.
	*/
	function Stack(entries) {
		var data = this.__data__ = new ListCache(entries);
		this.size = data.size;
	}
	/**
	* Removes all key-value entries from the stack.
	*
	* @private
	* @name clear
	* @memberOf Stack
	*/
	function stackClear() {
		this.__data__ = new ListCache();
		this.size = 0;
	}
	/**
	* Removes `key` and its value from the stack.
	*
	* @private
	* @name delete
	* @memberOf Stack
	* @param {string} key The key of the value to remove.
	* @returns {boolean} Returns `true` if the entry was removed, else `false`.
	*/
	function stackDelete(key) {
		var data = this.__data__, result = data["delete"](key);
		this.size = data.size;
		return result;
	}
	/**
	* Gets the stack value for `key`.
	*
	* @private
	* @name get
	* @memberOf Stack
	* @param {string} key The key of the value to get.
	* @returns {*} Returns the entry value.
	*/
	function stackGet(key) {
		return this.__data__.get(key);
	}
	/**
	* Checks if a stack value for `key` exists.
	*
	* @private
	* @name has
	* @memberOf Stack
	* @param {string} key The key of the entry to check.
	* @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	*/
	function stackHas(key) {
		return this.__data__.has(key);
	}
	/**
	* Sets the stack `key` to `value`.
	*
	* @private
	* @name set
	* @memberOf Stack
	* @param {string} key The key of the value to set.
	* @param {*} value The value to set.
	* @returns {Object} Returns the stack cache instance.
	*/
	function stackSet(key, value) {
		var data = this.__data__;
		if (data instanceof ListCache) {
			var pairs = data.__data__;
			if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
				pairs.push([key, value]);
				this.size = ++data.size;
				return this;
			}
			data = this.__data__ = new MapCache(pairs);
		}
		data.set(key, value);
		this.size = data.size;
		return this;
	}
	Stack.prototype.clear = stackClear;
	Stack.prototype["delete"] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	/**
	* Creates an array of the enumerable property names of the array-like `value`.
	*
	* @private
	* @param {*} value The value to query.
	* @param {boolean} inherited Specify returning inherited property names.
	* @returns {Array} Returns the array of property names.
	*/
	function arrayLikeKeys(value, inherited) {
		var isArr = isArray$1(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length$1 = result.length;
		for (var key in value) if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length$1)))) result.push(key);
		return result;
	}
	/**
	* This function is like `assignValue` except that it doesn't assign
	* `undefined` values.
	*
	* @private
	* @param {Object} object The object to modify.
	* @param {string} key The key of the property to assign.
	* @param {*} value The value to assign.
	*/
	function assignMergeValue(object, key, value) {
		if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) baseAssignValue(object, key, value);
	}
	/**
	* Assigns `value` to `key` of `object` if the existing value is not equivalent
	* using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	* for equality comparisons.
	*
	* @private
	* @param {Object} object The object to modify.
	* @param {string} key The key of the property to assign.
	* @param {*} value The value to assign.
	*/
	function assignValue(object, key, value) {
		var objValue = object[key];
		if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) baseAssignValue(object, key, value);
	}
	/**
	* Gets the index at which the `key` is found in `array` of key-value pairs.
	*
	* @private
	* @param {Array} array The array to inspect.
	* @param {*} key The key to search for.
	* @returns {number} Returns the index of the matched value, else `-1`.
	*/
	function assocIndexOf(array, key) {
		var length$1 = array.length;
		while (length$1--) if (eq(array[length$1][0], key)) return length$1;
		return -1;
	}
	/**
	* The base implementation of `assignValue` and `assignMergeValue` without
	* value checks.
	*
	* @private
	* @param {Object} object The object to modify.
	* @param {string} key The key of the property to assign.
	* @param {*} value The value to assign.
	*/
	function baseAssignValue(object, key, value) {
		if (key == "__proto__" && defineProperty$1) defineProperty$1(object, key, {
			"configurable": true,
			"enumerable": true,
			"value": value,
			"writable": true
		});
		else object[key] = value;
	}
	/**
	* The base implementation of `baseForOwn` which iterates over `object`
	* properties returned by `keysFunc` and invokes `iteratee` for each property.
	* Iteratee functions may exit iteration early by explicitly returning `false`.
	*
	* @private
	* @param {Object} object The object to iterate over.
	* @param {Function} iteratee The function invoked per iteration.
	* @param {Function} keysFunc The function to get the keys of `object`.
	* @returns {Object} Returns `object`.
	*/
	var baseFor = createBaseFor();
	/**
	* The base implementation of `getTag` without fallbacks for buggy environments.
	*
	* @private
	* @param {*} value The value to query.
	* @returns {string} Returns the `toStringTag`.
	*/
	function baseGetTag(value) {
		if (value == null) return value === void 0 ? undefinedTag : nullTag;
		return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
	}
	/**
	* The base implementation of `_.isArguments`.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is an `arguments` object,
	*/
	function baseIsArguments(value) {
		return isObjectLike(value) && baseGetTag(value) == argsTag;
	}
	/**
	* The base implementation of `_.isNative` without bad shim checks.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a native function,
	*  else `false`.
	*/
	function baseIsNative(value) {
		if (!isObject$1(value) || isMasked(value)) return false;
		var pattern = isFunction$2(value) ? reIsNative : reIsHostCtor;
		return pattern.test(toSource(value));
	}
	/**
	* The base implementation of `_.isTypedArray` without Node.js optimizations.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	*/
	function baseIsTypedArray(value) {
		return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}
	/**
	* The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	*
	* @private
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names.
	*/
	function baseKeysIn(object) {
		if (!isObject$1(object)) return nativeKeysIn(object);
		var isProto = isPrototype(object), result = [];
		for (var key in object) if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) result.push(key);
		return result;
	}
	/**
	* The base implementation of `_.merge` without support for multiple sources.
	*
	* @private
	* @param {Object} object The destination object.
	* @param {Object} source The source object.
	* @param {number} srcIndex The index of `source`.
	* @param {Function} [customizer] The function to customize merged values.
	* @param {Object} [stack] Tracks traversed source values and their merged
	*  counterparts.
	*/
	function baseMerge(object, source, srcIndex, customizer, stack) {
		if (object === source) return;
		baseFor(source, function(srcValue, key) {
			stack || (stack = new Stack());
			if (isObject$1(srcValue)) baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
			else {
				var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
				if (newValue === void 0) newValue = srcValue;
				assignMergeValue(object, key, newValue);
			}
		}, keysIn);
	}
	/**
	* A specialized version of `baseMerge` for arrays and objects which performs
	* deep merges and tracks traversed objects enabling objects with circular
	* references to be merged.
	*
	* @private
	* @param {Object} object The destination object.
	* @param {Object} source The source object.
	* @param {string} key The key of the value to merge.
	* @param {number} srcIndex The index of `source`.
	* @param {Function} mergeFunc The function to merge values.
	* @param {Function} [customizer] The function to customize assigned values.
	* @param {Object} [stack] Tracks traversed source values and their merged
	*  counterparts.
	*/
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
		var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
		if (stacked) {
			assignMergeValue(object, key, stacked);
			return;
		}
		var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
		var isCommon = newValue === void 0;
		if (isCommon) {
			var isArr = isArray$1(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
			newValue = srcValue;
			if (isArr || isBuff || isTyped) if (isArray$1(objValue)) newValue = objValue;
			else if (isArrayLikeObject(objValue)) newValue = copyArray(objValue);
			else if (isBuff) {
				isCommon = false;
				newValue = cloneBuffer(srcValue, true);
			} else if (isTyped) {
				isCommon = false;
				newValue = cloneTypedArray(srcValue, true);
			} else newValue = [];
			else if (isPlainObject(srcValue) || isArguments(srcValue)) {
				newValue = objValue;
				if (isArguments(objValue)) newValue = toPlainObject(objValue);
				else if (!isObject$1(objValue) || isFunction$2(objValue)) newValue = initCloneObject(srcValue);
			} else isCommon = false;
		}
		if (isCommon) {
			stack.set(srcValue, newValue);
			mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
			stack["delete"](srcValue);
		}
		assignMergeValue(object, key, newValue);
	}
	/**
	* The base implementation of `_.rest` which doesn't validate or coerce arguments.
	*
	* @private
	* @param {Function} func The function to apply a rest parameter to.
	* @param {number} [start=func.length-1] The start position of the rest parameter.
	* @returns {Function} Returns the new function.
	*/
	function baseRest(func, start) {
		return setToString(overRest(func, start, identity), func + "");
	}
	/**
	* The base implementation of `setToString` without support for hot loop shorting.
	*
	* @private
	* @param {Function} func The function to modify.
	* @param {Function} string The `toString` result.
	* @returns {Function} Returns `func`.
	*/
	var baseSetToString = !defineProperty$1 ? identity : function(func, string) {
		return defineProperty$1(func, "toString", {
			"configurable": true,
			"enumerable": false,
			"value": constant(string),
			"writable": true
		});
	};
	/**
	* Creates a clone of  `buffer`.
	*
	* @private
	* @param {Buffer} buffer The buffer to clone.
	* @param {boolean} [isDeep] Specify a deep clone.
	* @returns {Buffer} Returns the cloned buffer.
	*/
	function cloneBuffer(buffer, isDeep) {
		if (isDeep) return buffer.slice();
		var length$1 = buffer.length, result = allocUnsafe ? allocUnsafe(length$1) : new buffer.constructor(length$1);
		buffer.copy(result);
		return result;
	}
	/**
	* Creates a clone of `arrayBuffer`.
	*
	* @private
	* @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	* @returns {ArrayBuffer} Returns the cloned array buffer.
	*/
	function cloneArrayBuffer(arrayBuffer) {
		var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
		new Uint8Array(result).set(new Uint8Array(arrayBuffer));
		return result;
	}
	/**
	* Creates a clone of `typedArray`.
	*
	* @private
	* @param {Object} typedArray The typed array to clone.
	* @param {boolean} [isDeep] Specify a deep clone.
	* @returns {Object} Returns the cloned typed array.
	*/
	function cloneTypedArray(typedArray, isDeep) {
		var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
		return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}
	/**
	* Copies the values of `source` to `array`.
	*
	* @private
	* @param {Array} source The array to copy values from.
	* @param {Array} [array=[]] The array to copy values to.
	* @returns {Array} Returns `array`.
	*/
	function copyArray(source, array) {
		var index = -1, length$1 = source.length;
		array || (array = Array(length$1));
		while (++index < length$1) array[index] = source[index];
		return array;
	}
	/**
	* Copies properties of `source` to `object`.
	*
	* @private
	* @param {Object} source The object to copy properties from.
	* @param {Array} props The property identifiers to copy.
	* @param {Object} [object={}] The object to copy properties to.
	* @param {Function} [customizer] The function to customize copied values.
	* @returns {Object} Returns `object`.
	*/
	function copyObject(source, props, object, customizer) {
		var isNew = !object;
		object || (object = {});
		var index = -1, length$1 = props.length;
		while (++index < length$1) {
			var key = props[index];
			var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
			if (newValue === void 0) newValue = source[key];
			if (isNew) baseAssignValue(object, key, newValue);
			else assignValue(object, key, newValue);
		}
		return object;
	}
	/**
	* Creates a function like `_.assign`.
	*
	* @private
	* @param {Function} assigner The function to assign values.
	* @returns {Function} Returns the new assigner function.
	*/
	function createAssigner(assigner) {
		return baseRest(function(object, sources) {
			var index = -1, length$1 = sources.length, customizer = length$1 > 1 ? sources[length$1 - 1] : void 0, guard$1 = length$1 > 2 ? sources[2] : void 0;
			customizer = assigner.length > 3 && typeof customizer == "function" ? (length$1--, customizer) : void 0;
			if (guard$1 && isIterateeCall(sources[0], sources[1], guard$1)) {
				customizer = length$1 < 3 ? void 0 : customizer;
				length$1 = 1;
			}
			object = Object(object);
			while (++index < length$1) {
				var source = sources[index];
				if (source) assigner(object, source, index, customizer);
			}
			return object;
		});
	}
	/**
	* Creates a base function for methods like `_.forIn` and `_.forOwn`.
	*
	* @private
	* @param {boolean} [fromRight] Specify iterating from right to left.
	* @returns {Function} Returns the new base function.
	*/
	function createBaseFor(fromRight) {
		return function(object, iteratee, keysFunc) {
			var index = -1, iterable = Object(object), props = keysFunc(object), length$1 = props.length;
			while (length$1--) {
				var key = props[fromRight ? length$1 : ++index];
				if (iteratee(iterable[key], key, iterable) === false) break;
			}
			return object;
		};
	}
	/**
	* Gets the data for `map`.
	*
	* @private
	* @param {Object} map The map to query.
	* @param {string} key The reference key.
	* @returns {*} Returns the map data.
	*/
	function getMapData(map, key) {
		var data = map.__data__;
		return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
	}
	/**
	* Gets the native function at `key` of `object`.
	*
	* @private
	* @param {Object} object The object to query.
	* @param {string} key The key of the method to get.
	* @returns {*} Returns the function if it's native, else `undefined`.
	*/
	function getNative(object, key) {
		var value = getValue(object, key);
		return baseIsNative(value) ? value : void 0;
	}
	/**
	* A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	*
	* @private
	* @param {*} value The value to query.
	* @returns {string} Returns the raw `toStringTag`.
	*/
	function getRawTag(value) {
		var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
		try {
			value[symToStringTag] = void 0;
			var unmasked = true;
		} catch (e$1) {}
		var result = nativeObjectToString.call(value);
		if (unmasked) if (isOwn) value[symToStringTag] = tag;
		else delete value[symToStringTag];
		return result;
	}
	/**
	* Initializes an object clone.
	*
	* @private
	* @param {Object} object The object to clone.
	* @returns {Object} Returns the initialized clone.
	*/
	function initCloneObject(object) {
		return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
	}
	/**
	* Checks if `value` is a valid array-like index.
	*
	* @private
	* @param {*} value The value to check.
	* @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	* @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	*/
	function isIndex(value, length$1) {
		var type = typeof value;
		length$1 = length$1 == null ? MAX_SAFE_INTEGER : length$1;
		return !!length$1 && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length$1;
	}
	/**
	* Checks if the given arguments are from an iteratee call.
	*
	* @private
	* @param {*} value The potential iteratee value argument.
	* @param {*} index The potential iteratee index or key argument.
	* @param {*} object The potential iteratee object argument.
	* @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	*  else `false`.
	*/
	function isIterateeCall(value, index, object) {
		if (!isObject$1(object)) return false;
		var type = typeof index;
		if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) return eq(object[index], value);
		return false;
	}
	/**
	* Checks if `value` is suitable for use as unique object key.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	*/
	function isKeyable(value) {
		var type = typeof value;
		return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
	}
	/**
	* Checks if `func` has its source masked.
	*
	* @private
	* @param {Function} func The function to check.
	* @returns {boolean} Returns `true` if `func` is masked, else `false`.
	*/
	function isMasked(func) {
		return !!maskSrcKey && maskSrcKey in func;
	}
	/**
	* Checks if `value` is likely a prototype object.
	*
	* @private
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	*/
	function isPrototype(value) {
		var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
		return value === proto;
	}
	/**
	* This function is like
	* [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	* except that it includes inherited enumerable properties.
	*
	* @private
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names.
	*/
	function nativeKeysIn(object) {
		var result = [];
		if (object != null) for (var key in Object(object)) result.push(key);
		return result;
	}
	/**
	* Converts `value` to a string using `Object.prototype.toString`.
	*
	* @private
	* @param {*} value The value to convert.
	* @returns {string} Returns the converted string.
	*/
	function objectToString(value) {
		return nativeObjectToString.call(value);
	}
	/**
	* A specialized version of `baseRest` which transforms the rest array.
	*
	* @private
	* @param {Function} func The function to apply a rest parameter to.
	* @param {number} [start=func.length-1] The start position of the rest parameter.
	* @param {Function} transform The rest array transform.
	* @returns {Function} Returns the new function.
	*/
	function overRest(func, start, transform$1) {
		start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
		return function() {
			var args = arguments, index = -1, length$1 = nativeMax(args.length - start, 0), array = Array(length$1);
			while (++index < length$1) array[index] = args[start + index];
			index = -1;
			var otherArgs = Array(start + 1);
			while (++index < start) otherArgs[index] = args[index];
			otherArgs[start] = transform$1(array);
			return apply(func, this, otherArgs);
		};
	}
	/**
	* Gets the value at `key`, unless `key` is "__proto__" or "constructor".
	*
	* @private
	* @param {Object} object The object to query.
	* @param {string} key The key of the property to get.
	* @returns {*} Returns the property value.
	*/
	function safeGet(object, key) {
		if (key === "constructor" && typeof object[key] === "function") return;
		if (key == "__proto__") return;
		return object[key];
	}
	/**
	* Sets the `toString` method of `func` to return `string`.
	*
	* @private
	* @param {Function} func The function to modify.
	* @param {Function} string The `toString` result.
	* @returns {Function} Returns `func`.
	*/
	var setToString = shortOut(baseSetToString);
	/**
	* Creates a function that'll short out and invoke `identity` instead
	* of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
	* milliseconds.
	*
	* @private
	* @param {Function} func The function to restrict.
	* @returns {Function} Returns the new shortable function.
	*/
	function shortOut(func) {
		var count = 0, lastCalled = 0;
		return function() {
			var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
			lastCalled = stamp;
			if (remaining > 0) {
				if (++count >= HOT_COUNT) return arguments[0];
			} else count = 0;
			return func.apply(void 0, arguments);
		};
	}
	/**
	* Converts `func` to its source code.
	*
	* @private
	* @param {Function} func The function to convert.
	* @returns {string} Returns the source code.
	*/
	function toSource(func) {
		if (func != null) {
			try {
				return funcToString.call(func);
			} catch (e$1) {}
			try {
				return func + "";
			} catch (e$1) {}
		}
		return "";
	}
	/**
	* Performs a
	* [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	* comparison between two values to determine if they are equivalent.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to compare.
	* @param {*} other The other value to compare.
	* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	* @example
	*
	* var object = { 'a': 1 };
	* var other = { 'a': 1 };
	*
	* _.eq(object, object);
	* // => true
	*
	* _.eq(object, other);
	* // => false
	*
	* _.eq('a', 'a');
	* // => true
	*
	* _.eq('a', Object('a'));
	* // => false
	*
	* _.eq(NaN, NaN);
	* // => true
	*/
	function eq(value, other) {
		return value === other || value !== value && other !== other;
	}
	/**
	* Checks if `value` is likely an `arguments` object.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is an `arguments` object,
	*  else `false`.
	* @example
	*
	* _.isArguments(function() { return arguments; }());
	* // => true
	*
	* _.isArguments([1, 2, 3]);
	* // => false
	*/
	var isArguments = baseIsArguments(function() {
		return arguments;
	}()) ? baseIsArguments : function(value) {
		return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
	};
	/**
	* Checks if `value` is classified as an `Array` object.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is an array, else `false`.
	* @example
	*
	* _.isArray([1, 2, 3]);
	* // => true
	*
	* _.isArray(document.body.children);
	* // => false
	*
	* _.isArray('abc');
	* // => false
	*
	* _.isArray(_.noop);
	* // => false
	*/
	var isArray$1 = Array.isArray;
	/**
	* Checks if `value` is array-like. A value is considered array-like if it's
	* not a function and has a `value.length` that's an integer greater than or
	* equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	* @example
	*
	* _.isArrayLike([1, 2, 3]);
	* // => true
	*
	* _.isArrayLike(document.body.children);
	* // => true
	*
	* _.isArrayLike('abc');
	* // => true
	*
	* _.isArrayLike(_.noop);
	* // => false
	*/
	function isArrayLike(value) {
		return value != null && isLength(value.length) && !isFunction$2(value);
	}
	/**
	* This method is like `_.isArrayLike` except that it also checks if `value`
	* is an object.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is an array-like object,
	*  else `false`.
	* @example
	*
	* _.isArrayLikeObject([1, 2, 3]);
	* // => true
	*
	* _.isArrayLikeObject(document.body.children);
	* // => true
	*
	* _.isArrayLikeObject('abc');
	* // => false
	*
	* _.isArrayLikeObject(_.noop);
	* // => false
	*/
	function isArrayLikeObject(value) {
		return isObjectLike(value) && isArrayLike(value);
	}
	/**
	* Checks if `value` is a buffer.
	*
	* @static
	* @memberOf _
	* @since 4.3.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	* @example
	*
	* _.isBuffer(new Buffer(2));
	* // => true
	*
	* _.isBuffer(new Uint8Array(2));
	* // => false
	*/
	var isBuffer = nativeIsBuffer || stubFalse;
	/**
	* Checks if `value` is classified as a `Function` object.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a function, else `false`.
	* @example
	*
	* _.isFunction(_);
	* // => true
	*
	* _.isFunction(/abc/);
	* // => false
	*/
	function isFunction$2(value) {
		if (!isObject$1(value)) return false;
		var tag = baseGetTag(value);
		return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	/**
	* Checks if `value` is a valid array-like length.
	*
	* **Note:** This method is loosely based on
	* [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	* @example
	*
	* _.isLength(3);
	* // => true
	*
	* _.isLength(Number.MIN_VALUE);
	* // => false
	*
	* _.isLength(Infinity);
	* // => false
	*
	* _.isLength('3');
	* // => false
	*/
	function isLength(value) {
		return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	/**
	* Checks if `value` is the
	* [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	* of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is an object, else `false`.
	* @example
	*
	* _.isObject({});
	* // => true
	*
	* _.isObject([1, 2, 3]);
	* // => true
	*
	* _.isObject(_.noop);
	* // => true
	*
	* _.isObject(null);
	* // => false
	*/
	function isObject$1(value) {
		var type = typeof value;
		return value != null && (type == "object" || type == "function");
	}
	/**
	* Checks if `value` is object-like. A value is object-like if it's not `null`
	* and has a `typeof` result of "object".
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	* @example
	*
	* _.isObjectLike({});
	* // => true
	*
	* _.isObjectLike([1, 2, 3]);
	* // => true
	*
	* _.isObjectLike(_.noop);
	* // => false
	*
	* _.isObjectLike(null);
	* // => false
	*/
	function isObjectLike(value) {
		return value != null && typeof value == "object";
	}
	/**
	* Checks if `value` is a plain object, that is, an object created by the
	* `Object` constructor or one with a `[[Prototype]]` of `null`.
	*
	* @static
	* @memberOf _
	* @since 0.8.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	* @example
	*
	* function Foo() {
	*   this.a = 1;
	* }
	*
	* _.isPlainObject(new Foo);
	* // => false
	*
	* _.isPlainObject([1, 2, 3]);
	* // => false
	*
	* _.isPlainObject({ 'x': 0, 'y': 0 });
	* // => true
	*
	* _.isPlainObject(Object.create(null));
	* // => true
	*/
	function isPlainObject(value) {
		if (!isObjectLike(value) || baseGetTag(value) != objectTag) return false;
		var proto = getPrototype(value);
		if (proto === null) return true;
		var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
		return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
	}
	/**
	* Checks if `value` is classified as a typed array.
	*
	* @static
	* @memberOf _
	* @since 3.0.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	* @example
	*
	* _.isTypedArray(new Uint8Array);
	* // => true
	*
	* _.isTypedArray([]);
	* // => false
	*/
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	/**
	* Converts `value` to a plain object flattening inherited enumerable string
	* keyed properties of `value` to own properties of the plain object.
	*
	* @static
	* @memberOf _
	* @since 3.0.0
	* @category Lang
	* @param {*} value The value to convert.
	* @returns {Object} Returns the converted plain object.
	* @example
	*
	* function Foo() {
	*   this.b = 2;
	* }
	*
	* Foo.prototype.c = 3;
	*
	* _.assign({ 'a': 1 }, new Foo);
	* // => { 'a': 1, 'b': 2 }
	*
	* _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	* // => { 'a': 1, 'b': 2, 'c': 3 }
	*/
	function toPlainObject(value) {
		return copyObject(value, keysIn(value));
	}
	/**
	* Creates an array of the own and inherited enumerable property names of `object`.
	*
	* **Note:** Non-object values are coerced to objects.
	*
	* @static
	* @memberOf _
	* @since 3.0.0
	* @category Object
	* @param {Object} object The object to query.
	* @returns {Array} Returns the array of property names.
	* @example
	*
	* function Foo() {
	*   this.a = 1;
	*   this.b = 2;
	* }
	*
	* Foo.prototype.c = 3;
	*
	* _.keysIn(new Foo);
	* // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	*/
	function keysIn(object) {
		return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}
	/**
	* This method is like `_.merge` except that it accepts `customizer` which
	* is invoked to produce the merged values of the destination and source
	* properties. If `customizer` returns `undefined`, merging is handled by the
	* method instead. The `customizer` is invoked with six arguments:
	* (objValue, srcValue, key, object, source, stack).
	*
	* **Note:** This method mutates `object`.
	*
	* @static
	* @memberOf _
	* @since 4.0.0
	* @category Object
	* @param {Object} object The destination object.
	* @param {...Object} sources The source objects.
	* @param {Function} customizer The function to customize assigned values.
	* @returns {Object} Returns `object`.
	* @example
	*
	* function customizer(objValue, srcValue) {
	*   if (_.isArray(objValue)) {
	*     return objValue.concat(srcValue);
	*   }
	* }
	*
	* var object = { 'a': [1], 'b': [2] };
	* var other = { 'a': [3], 'b': [4] };
	*
	* _.mergeWith(object, other, customizer);
	* // => { 'a': [1, 3], 'b': [2, 4] }
	*/
	var mergeWith$5 = createAssigner(function(object, source, srcIndex, customizer) {
		baseMerge(object, source, srcIndex, customizer);
	});
	/**
	* Creates a function that returns `value`.
	*
	* @static
	* @memberOf _
	* @since 2.4.0
	* @category Util
	* @param {*} value The value to return from the new function.
	* @returns {Function} Returns the new constant function.
	* @example
	*
	* var objects = _.times(2, _.constant({ 'a': 1 }));
	*
	* console.log(objects);
	* // => [{ 'a': 1 }, { 'a': 1 }]
	*
	* console.log(objects[0] === objects[1]);
	* // => true
	*/
	function constant(value) {
		return function() {
			return value;
		};
	}
	/**
	* This method returns the first argument it receives.
	*
	* @static
	* @since 0.1.0
	* @memberOf _
	* @category Util
	* @param {*} value Any value.
	* @returns {*} Returns `value`.
	* @example
	*
	* var object = { 'a': 1 };
	*
	* console.log(_.identity(object) === object);
	* // => true
	*/
	function identity(value) {
		return value;
	}
	/**
	* This method returns `false`.
	*
	* @static
	* @memberOf _
	* @since 4.13.0
	* @category Util
	* @returns {boolean} Returns `false`.
	* @example
	*
	* _.times(2, _.stubFalse);
	* // => [false, false]
	*/
	function stubFalse() {
		return false;
	}
	module.exports = mergeWith$5;
}) });

//#endregion
//#region node_modules/.pnpm/@chakra-ui+utils@2.2.5_react@19.1.1/node_modules/@chakra-ui/utils/dist/esm/index.mjs
var import_lodash = /* @__PURE__ */ __toESM(require_lodash(), 1);

//#endregion
//#region node_modules/.pnpm/@chakra-ui+hooks@2.4.5_react@19.1.1/node_modules/@chakra-ui/hooks/dist/esm/use-callback-ref.mjs
function useCallbackRef(callback, deps = []) {
	const callbackRef = (0, import_react.useRef)(callback);
	(0, import_react.useEffect)(() => {
		callbackRef.current = callback;
	});
	return (0, import_react.useCallback)((...args) => callbackRef.current?.(...args), deps);
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+hooks@2.4.5_react@19.1.1/node_modules/@chakra-ui/hooks/dist/esm/use-event-listener.mjs
function useEventListener(target, event, handler, options) {
	const listener = useCallbackRef(handler);
	(0, import_react.useEffect)(() => {
		const node$1 = typeof target === "function" ? target() : target ?? document;
		if (!handler || !node$1) return;
		node$1.addEventListener(event, listener, options);
		return () => {
			node$1.removeEventListener(event, listener, options);
		};
	}, [
		event,
		target,
		options,
		listener,
		handler
	]);
	return () => {
		const node$1 = typeof target === "function" ? target() : target ?? document;
		node$1?.removeEventListener(event, listener, options);
	};
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+hooks@2.4.5_react@19.1.1/node_modules/@chakra-ui/hooks/dist/esm/use-animation-state.mjs
function useAnimationState(props) {
	const { isOpen, ref } = props;
	const [mounted, setMounted] = (0, import_react.useState)(isOpen);
	const [once, setOnce] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!once) {
			setMounted(isOpen);
			setOnce(true);
		}
	}, [
		isOpen,
		once,
		mounted
	]);
	useEventListener(() => ref.current, "animationend", () => {
		setMounted(isOpen);
	});
	const hidden = isOpen ? false : !mounted;
	return {
		present: !hidden,
		onComplete() {
			const win = getOwnerWindow(ref.current);
			const evt = new win.CustomEvent("animationend", { bubbles: true });
			ref.current?.dispatchEvent(evt);
		}
	};
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+hooks@2.4.5_react@19.1.1/node_modules/@chakra-ui/hooks/dist/esm/use-controllable-state.mjs
function useControllableState(props) {
	const { value: valueProp, defaultValue, onChange, shouldUpdate = (prev$1, next$1) => prev$1 !== next$1 } = props;
	const onChangeProp = useCallbackRef(onChange);
	const shouldUpdateProp = useCallbackRef(shouldUpdate);
	const [uncontrolledState, setUncontrolledState] = (0, import_react.useState)(defaultValue);
	const controlled = valueProp !== void 0;
	const value = controlled ? valueProp : uncontrolledState;
	const setValue = useCallbackRef((next$1) => {
		const setter = next$1;
		const nextValue = typeof next$1 === "function" ? setter(value) : next$1;
		if (!shouldUpdateProp(value, nextValue)) return;
		if (!controlled) setUncontrolledState(nextValue);
		onChangeProp(nextValue);
	}, [
		controlled,
		onChangeProp,
		value,
		shouldUpdateProp
	]);
	return [value, setValue];
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+hooks@2.4.5_react@19.1.1/node_modules/@chakra-ui/hooks/dist/esm/use-disclosure.mjs
function useDisclosure(props = {}) {
	const { onClose: onCloseProp, onOpen: onOpenProp, isOpen: isOpenProp, id: idProp } = props;
	const handleOpen = useCallbackRef(onOpenProp);
	const handleClose = useCallbackRef(onCloseProp);
	const [isOpenState, setIsOpen] = (0, import_react.useState)(props.defaultIsOpen || false);
	const isOpen = isOpenProp !== void 0 ? isOpenProp : isOpenState;
	const isControlled = isOpenProp !== void 0;
	const uid = (0, import_react.useId)();
	const id = idProp ?? `disclosure-${uid}`;
	const onClose = (0, import_react.useCallback)(() => {
		if (!isControlled) setIsOpen(false);
		handleClose?.();
	}, [isControlled, handleClose]);
	const onOpen = (0, import_react.useCallback)(() => {
		if (!isControlled) setIsOpen(true);
		handleOpen?.();
	}, [isControlled, handleOpen]);
	const onToggle = (0, import_react.useCallback)(() => {
		if (isOpen) onClose();
		else onOpen();
	}, [
		isOpen,
		onOpen,
		onClose
	]);
	function getButtonProps(props2 = {}) {
		return {
			...props2,
			"aria-expanded": isOpen,
			"aria-controls": id,
			onClick(event) {
				props2.onClick?.(event);
				onToggle();
			}
		};
	}
	function getDisclosureProps(props2 = {}) {
		return {
			...props2,
			hidden: !isOpen,
			id
		};
	}
	return {
		isOpen,
		onOpen,
		onClose,
		onToggle,
		isControlled,
		getButtonProps,
		getDisclosureProps
	};
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+hooks@2.4.5_react@19.1.1/node_modules/@chakra-ui/hooks/dist/esm/use-safe-layout-effect.mjs
const useSafeLayoutEffect = Boolean(globalThis?.document) ? import_react.useLayoutEffect : import_react.useEffect;

//#endregion
//#region node_modules/.pnpm/@chakra-ui+hooks@2.4.5_react@19.1.1/node_modules/@chakra-ui/hooks/dist/esm/use-update-effect.mjs
const useUpdateEffect = (effect$1, deps) => {
	const renderCycleRef = (0, import_react.useRef)(false);
	const effectCycleRef = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		const isMounted = renderCycleRef.current;
		const shouldRun = isMounted && effectCycleRef.current;
		if (shouldRun) return effect$1();
		effectCycleRef.current = true;
	}, deps);
	(0, import_react.useEffect)(() => {
		renderCycleRef.current = true;
		return () => {
			renderCycleRef.current = false;
		};
	}, []);
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+hooks@2.4.5_react@19.1.1/node_modules/@chakra-ui/hooks/dist/esm/use-focus-effect.mjs
function preventReturnFocus(containerRef) {
	const el = containerRef.current;
	if (!el) return false;
	const activeElement = getActiveElement(el);
	if (!activeElement) return false;
	if (el.contains(activeElement)) return false;
	if (isTabbable(activeElement)) return true;
	return false;
}
function useFocusOnHide(containerRef, options) {
	const { shouldFocus: shouldFocusProp, visible, focusRef } = options;
	const shouldFocus = shouldFocusProp && !visible;
	useUpdateEffect(() => {
		if (!shouldFocus) return;
		if (preventReturnFocus(containerRef)) return;
		const el = focusRef?.current || containerRef.current;
		let rafId;
		if (el) {
			rafId = requestAnimationFrame(() => {
				el.focus({ preventScroll: true });
			});
			return () => {
				cancelAnimationFrame(rafId);
			};
		}
	}, [
		shouldFocus,
		containerRef,
		focusRef
	]);
}
const defaultOptions = {
	preventScroll: true,
	shouldFocus: false
};
function useFocusOnShow(target, options = defaultOptions) {
	const { focusRef, preventScroll, shouldFocus, visible } = options;
	const element = isRefObject$1(target) ? target.current : target;
	const autoFocusValue = shouldFocus && visible;
	const autoFocusRef = (0, import_react.useRef)(autoFocusValue);
	const lastVisibleRef = (0, import_react.useRef)(visible);
	useSafeLayoutEffect(() => {
		if (!lastVisibleRef.current && visible) autoFocusRef.current = autoFocusValue;
		lastVisibleRef.current = visible;
	}, [visible, autoFocusValue]);
	const onFocus = (0, import_react.useCallback)(() => {
		if (!visible || !element || !autoFocusRef.current) return;
		autoFocusRef.current = false;
		if (element.contains(document.activeElement)) return;
		if (focusRef?.current) requestAnimationFrame(() => {
			focusRef.current?.focus({ preventScroll });
		});
		else {
			const tabbableEls = getAllFocusable(element);
			if (tabbableEls.length > 0) requestAnimationFrame(() => {
				tabbableEls[0].focus({ preventScroll });
			});
		}
	}, [
		visible,
		preventScroll,
		element,
		focusRef
	]);
	useUpdateEffect(() => {
		onFocus();
	}, [onFocus]);
	useEventListener(element, "transitionend", onFocus);
}
function isRefObject$1(val) {
	return "current" in val;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+hooks@2.4.5_react@19.1.1/node_modules/@chakra-ui/hooks/dist/esm/use-focus-on-pointer-down.mjs
function isRefObject(val) {
	return "current" in val;
}
const isDom = () => typeof window !== "undefined";
function getPlatform() {
	const agent = navigator.userAgentData;
	return agent?.platform ?? navigator.platform;
}
const vn = (v$1) => isDom() && v$1.test(navigator.vendor);
const pt = (v$1) => isDom() && v$1.test(getPlatform());
const isApple = () => pt(/mac|iphone|ipad|ipod/i);
const isSafari = () => isApple() && vn(/apple/i);
function useFocusOnPointerDown(props) {
	const { ref, elements, enabled } = props;
	const doc = () => ref.current?.ownerDocument ?? document;
	useEventListener(doc, "pointerdown", (event) => {
		if (!isSafari() || !enabled) return;
		const target = event.composedPath?.()?.[0] ?? event.target;
		const els = elements ?? [ref];
		const isValidTarget = els.some((elementOrRef) => {
			const el = isRefObject(elementOrRef) ? elementOrRef.current : elementOrRef;
			return el?.contains(target) || el === target;
		});
		if (doc().activeElement !== target && isValidTarget) {
			event.preventDefault();
			target.focus();
		}
	});
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+hooks@2.4.5_react@19.1.1/node_modules/@chakra-ui/hooks/dist/esm/use-merge-refs.mjs
function assignRef(ref, value) {
	if (ref == null) return;
	if (typeof ref === "function") {
		ref(value);
		return;
	}
	try {
		ref.current = value;
	} catch (error) {
		throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
	}
}
function mergeRefs(...refs) {
	return (node$1) => {
		refs.forEach((ref) => {
			assignRef(ref, node$1);
		});
	};
}
function useMergeRefs(...refs) {
	return (0, import_react.useMemo)(() => mergeRefs(...refs), refs);
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+hooks@2.4.5_react@19.1.1/node_modules/@chakra-ui/hooks/dist/esm/use-outside-click.mjs
function useOutsideClick(props) {
	const { ref, handler, enabled = true } = props;
	const savedHandler = useCallbackRef(handler);
	const stateRef = (0, import_react.useRef)({
		isPointerDown: false,
		ignoreEmulatedMouseEvents: false
	});
	const state$1 = stateRef.current;
	(0, import_react.useEffect)(() => {
		if (!enabled) return;
		const onPointerDown = (e$1) => {
			if (isValidEvent(e$1, ref)) state$1.isPointerDown = true;
		};
		const onMouseUp = (event) => {
			if (state$1.ignoreEmulatedMouseEvents) {
				state$1.ignoreEmulatedMouseEvents = false;
				return;
			}
			if (state$1.isPointerDown && handler && isValidEvent(event, ref)) {
				state$1.isPointerDown = false;
				savedHandler(event);
			}
		};
		const onTouchEnd = (event) => {
			state$1.ignoreEmulatedMouseEvents = true;
			if (handler && state$1.isPointerDown && isValidEvent(event, ref)) {
				state$1.isPointerDown = false;
				savedHandler(event);
			}
		};
		const doc = getOwnerDocument(ref.current);
		doc.addEventListener("mousedown", onPointerDown, true);
		doc.addEventListener("mouseup", onMouseUp, true);
		doc.addEventListener("touchstart", onPointerDown, true);
		doc.addEventListener("touchend", onTouchEnd, true);
		return () => {
			doc.removeEventListener("mousedown", onPointerDown, true);
			doc.removeEventListener("mouseup", onMouseUp, true);
			doc.removeEventListener("touchstart", onPointerDown, true);
			doc.removeEventListener("touchend", onTouchEnd, true);
		};
	}, [
		handler,
		ref,
		savedHandler,
		state$1,
		enabled
	]);
}
function isValidEvent(event, ref) {
	const target = event.composedPath?.()[0] ?? event.target;
	if (target) {
		const doc = getOwnerDocument(target);
		if (!doc.contains(target)) return false;
	}
	return !ref.current?.contains(target);
}
function getOwnerDocument(node$1) {
	return node$1?.ownerDocument ?? document;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+hooks@2.4.5_react@19.1.1/node_modules/@chakra-ui/hooks/dist/esm/use-timeout.mjs
function useTimeout(callback, delay) {
	const fn = useCallbackRef(callback);
	(0, import_react.useEffect)(() => {
		if (delay == null) return void 0;
		let timeoutId = null;
		timeoutId = window.setTimeout(() => {
			fn();
		}, delay);
		return () => {
			if (timeoutId) window.clearTimeout(timeoutId);
		};
	}, [delay, fn]);
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/pseudos.mjs
const state = {
	open: (str, post) => `${str}[data-open], ${str}[open], ${str}[data-state=open] ${post}`,
	closed: (str, post) => `${str}[data-closed], ${str}[data-state=closed] ${post}`,
	hover: (str, post) => `${str}:hover ${post}, ${str}[data-hover] ${post}`,
	focus: (str, post) => `${str}:focus ${post}, ${str}[data-focus] ${post}`,
	focusVisible: (str, post) => `${str}:focus-visible ${post}`,
	focusWithin: (str, post) => `${str}:focus-within ${post}`,
	active: (str, post) => `${str}:active ${post}, ${str}[data-active] ${post}`,
	disabled: (str, post) => `${str}:disabled ${post}, ${str}[data-disabled] ${post}`,
	invalid: (str, post) => `${str}:invalid ${post}, ${str}[data-invalid] ${post}`,
	checked: (str, post) => `${str}:checked ${post}, ${str}[data-checked] ${post}`,
	indeterminate: (str, post) => `${str}:indeterminate ${post}, ${str}[aria-checked=mixed] ${post}, ${str}[data-indeterminate] ${post}`,
	readOnly: (str, post) => `${str}:read-only ${post}, ${str}[readonly] ${post}, ${str}[data-read-only] ${post}`,
	expanded: (str, post) => `${str}:read-only ${post}, ${str}[aria-expanded=true] ${post}, ${str}[data-expanded] ${post}`,
	placeholderShown: (str, post) => `${str}:placeholder-shown ${post}`
};
const toGroup = (fn) => merge((v$1) => fn(v$1, "&"), "[role=group]", "[data-group]", ".group");
const toPeer = (fn) => merge((v$1) => fn(v$1, "~ &"), "[data-peer]", ".peer");
const merge = (fn, ...selectors) => selectors.map(fn).join(", ");
const pseudoSelectors = {
	_hover: "&:hover, &[data-hover]",
	_active: "&:active, &[data-active]",
	_focus: "&:focus, &[data-focus]",
	_highlighted: "&[data-highlighted]",
	_focusWithin: "&:focus-within, &[data-focus-within]",
	_focusVisible: "&:focus-visible, &[data-focus-visible]",
	_disabled: "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
	_readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
	_before: "&::before",
	_after: "&::after",
	_empty: "&:empty, &[data-empty]",
	_expanded: "&[aria-expanded=true], &[data-expanded], &[data-state=expanded]",
	_checked: "&[aria-checked=true], &[data-checked], &[data-state=checked]",
	_grabbed: "&[aria-grabbed=true], &[data-grabbed]",
	_pressed: "&[aria-pressed=true], &[data-pressed]",
	_invalid: "&[aria-invalid=true], &[data-invalid]",
	_valid: "&[data-valid], &[data-state=valid]",
	_loading: "&[data-loading], &[aria-busy=true]",
	_selected: "&[aria-selected=true], &[data-selected]",
	_hidden: "&[hidden], &[data-hidden]",
	_autofill: "&:-webkit-autofill",
	_even: "&:nth-of-type(even)",
	_odd: "&:nth-of-type(odd)",
	_first: "&:first-of-type",
	_firstLetter: "&::first-letter",
	_last: "&:last-of-type",
	_notFirst: "&:not(:first-of-type)",
	_notLast: "&:not(:last-of-type)",
	_visited: "&:visited",
	_activeLink: "&[aria-current=page]",
	_activeStep: "&[aria-current=step]",
	_indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate], &[data-state=indeterminate]",
	_groupOpen: toGroup(state.open),
	_groupClosed: toGroup(state.closed),
	_groupHover: toGroup(state.hover),
	_peerHover: toPeer(state.hover),
	_groupFocus: toGroup(state.focus),
	_peerFocus: toPeer(state.focus),
	_groupFocusVisible: toGroup(state.focusVisible),
	_peerFocusVisible: toPeer(state.focusVisible),
	_groupActive: toGroup(state.active),
	_peerActive: toPeer(state.active),
	_groupDisabled: toGroup(state.disabled),
	_peerDisabled: toPeer(state.disabled),
	_groupInvalid: toGroup(state.invalid),
	_peerInvalid: toPeer(state.invalid),
	_groupChecked: toGroup(state.checked),
	_peerChecked: toPeer(state.checked),
	_groupFocusWithin: toGroup(state.focusWithin),
	_peerFocusWithin: toPeer(state.focusWithin),
	_peerPlaceholderShown: toPeer(state.placeholderShown),
	_placeholder: "&::placeholder, &[data-placeholder]",
	_placeholderShown: "&:placeholder-shown, &[data-placeholder-shown]",
	_fullScreen: "&:fullscreen, &[data-fullscreen]",
	_selection: "&::selection",
	_rtl: "[dir=rtl] &, &[dir=rtl]",
	_ltr: "[dir=ltr] &, &[dir=ltr]",
	_mediaDark: "@media (prefers-color-scheme: dark)",
	_mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
	_dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
	_light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
	_horizontal: "&[data-orientation=horizontal]",
	_vertical: "&[data-orientation=vertical]",
	_open: "&[data-open], &[open], &[data-state=open]",
	_closed: "&[data-closed], &[data-state=closed]",
	_complete: "&[data-complete]",
	_incomplete: "&[data-incomplete]",
	_current: "&[data-current]"
};
const pseudoPropNames = Object.keys(pseudoSelectors);

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/utils/create-transform.mjs
const isImportant = (value) => /!(important)?$/.test(value);
const withoutImportant = (value) => typeof value === "string" ? value.replace(/!(important)?$/, "").trim() : value;
const tokenToCSSVar = (scale, value) => (theme$1) => {
	const valueStr = String(value);
	const important = isImportant(valueStr);
	const valueWithoutImportant = withoutImportant(valueStr);
	const key = scale ? `${scale}.${valueWithoutImportant}` : valueWithoutImportant;
	let transformed = isObject(theme$1.__cssMap) && key in theme$1.__cssMap ? theme$1.__cssMap[key].varRef : value;
	transformed = withoutImportant(transformed);
	return important ? `${transformed} !important` : transformed;
};
function createTransform(options) {
	const { scale, transform: transform$1, compose } = options;
	const fn = (value, theme$1) => {
		const _value = tokenToCSSVar(scale, value)(theme$1);
		let result = transform$1?.(_value, theme$1) ?? _value;
		if (compose) result = compose(result, theme$1);
		return result;
	};
	return fn;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/utils/pipe.mjs
const pipe = (...fns) => (v$1) => fns.reduce((a, b$1) => b$1(a), v$1);

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/utils/prop-config.mjs
function toConfig(scale, transform$1) {
	return (property) => {
		const result = {
			property,
			scale
		};
		result.transform = createTransform({
			scale,
			transform: transform$1
		});
		return result;
	};
}
const getRtl = ({ rtl, ltr }) => (theme$1) => theme$1.direction === "rtl" ? rtl : ltr;
function logical(options) {
	const { property, scale, transform: transform$1 } = options;
	return {
		scale,
		property: getRtl(property),
		transform: scale ? createTransform({
			scale,
			compose: transform$1
		}) : transform$1
	};
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/utils/templates.mjs
const transformTemplate = [
	"rotate(var(--chakra-rotate, 0))",
	"scaleX(var(--chakra-scale-x, 1))",
	"scaleY(var(--chakra-scale-y, 1))",
	"skewX(var(--chakra-skew-x, 0))",
	"skewY(var(--chakra-skew-y, 0))"
];
function getTransformTemplate() {
	return [
		"translateX(var(--chakra-translate-x, 0))",
		"translateY(var(--chakra-translate-y, 0))",
		...transformTemplate
	].join(" ");
}
function getTransformGpuTemplate() {
	return ["translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)", ...transformTemplate].join(" ");
}
const filterTemplate = {
	"--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
	"--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
	"--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
	"--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
	"--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
	"--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
	"--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
	"--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
	"--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
	filter: [
		"var(--chakra-blur)",
		"var(--chakra-brightness)",
		"var(--chakra-contrast)",
		"var(--chakra-grayscale)",
		"var(--chakra-hue-rotate)",
		"var(--chakra-invert)",
		"var(--chakra-saturate)",
		"var(--chakra-sepia)",
		"var(--chakra-drop-shadow)"
	].join(" ")
};
const backdropFilterTemplate = {
	backdropFilter: [
		"var(--chakra-backdrop-blur)",
		"var(--chakra-backdrop-brightness)",
		"var(--chakra-backdrop-contrast)",
		"var(--chakra-backdrop-grayscale)",
		"var(--chakra-backdrop-hue-rotate)",
		"var(--chakra-backdrop-invert)",
		"var(--chakra-backdrop-opacity)",
		"var(--chakra-backdrop-saturate)",
		"var(--chakra-backdrop-sepia)"
	].join(" "),
	"--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
	"--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
	"--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
	"--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
	"--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
	"--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
	"--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
	"--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
	"--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
};
function getRingTemplate(value) {
	return {
		"--chakra-ring-offset-shadow": `var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)`,
		"--chakra-ring-shadow": `var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)`,
		"--chakra-ring-width": value,
		boxShadow: [
			`var(--chakra-ring-offset-shadow)`,
			`var(--chakra-ring-shadow)`,
			`var(--chakra-shadow, 0 0 #0000)`
		].join(", ")
	};
}
const flexDirectionTemplate = {
	"row-reverse": {
		space: "--chakra-space-x-reverse",
		divide: "--chakra-divide-x-reverse"
	},
	"column-reverse": {
		space: "--chakra-space-y-reverse",
		divide: "--chakra-divide-y-reverse"
	}
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/utils/parse-gradient.mjs
const directionMap = {
	"to-t": "to top",
	"to-tr": "to top right",
	"to-r": "to right",
	"to-br": "to bottom right",
	"to-b": "to bottom",
	"to-bl": "to bottom left",
	"to-l": "to left",
	"to-tl": "to top left"
};
const valueSet = new Set(Object.values(directionMap));
const globalSet = /* @__PURE__ */ new Set([
	"none",
	"-moz-initial",
	"inherit",
	"initial",
	"revert",
	"unset"
]);
const trimSpace = (str) => str.trim();
function parseGradient(value, theme$1) {
	if (value == null || globalSet.has(value)) return value;
	const prevent = isCSSFunction(value) || globalSet.has(value);
	if (!prevent) return `url('${value}')`;
	const regex = /(^[a-z-A-Z]+)\((.*)\)/g;
	const results = regex.exec(value);
	const type = results?.[1];
	const values = results?.[2];
	if (!type || !values) return value;
	const _type = type.includes("-gradient") ? type : `${type}-gradient`;
	const [maybeDirection, ...stops] = values.split(",").map(trimSpace).filter(Boolean);
	if (stops?.length === 0) return value;
	const direction$1 = maybeDirection in directionMap ? directionMap[maybeDirection] : maybeDirection;
	stops.unshift(direction$1);
	const _values = stops.map((stop) => {
		if (valueSet.has(stop)) return stop;
		const firstStop = stop.indexOf(" ");
		const [_color, _stop] = firstStop !== -1 ? [stop.substr(0, firstStop), stop.substr(firstStop + 1)] : [stop];
		const _stopOrFunc = isCSSFunction(_stop) ? _stop : _stop && _stop.split(" ");
		const key = `colors.${_color}`;
		const color$1 = key in theme$1.__cssMap ? theme$1.__cssMap[key].varRef : _color;
		return _stopOrFunc ? [color$1, ...Array.isArray(_stopOrFunc) ? _stopOrFunc : [_stopOrFunc]].join(" ") : color$1;
	});
	return `${_type}(${_values.join(", ")})`;
}
const isCSSFunction = (value) => {
	return typeof value === "string" && value.includes("(") && value.includes(")");
};
const gradientTransform = (value, theme$1) => parseGradient(value, theme$1 ?? {});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/utils/transform-functions.mjs
function isCssVar$1(value) {
	return /^var\(--.+\)$/.test(value);
}
const analyzeCSSValue = (value) => {
	const num = parseFloat(value.toString());
	const unit = value.toString().replace(String(num), "");
	return {
		unitless: !unit,
		value: num,
		unit
	};
};
const wrap = (str) => (value) => `${str}(${value})`;
const transformFunctions = {
	filter(value) {
		return value !== "auto" ? value : filterTemplate;
	},
	backdropFilter(value) {
		return value !== "auto" ? value : backdropFilterTemplate;
	},
	ring(value) {
		return getRingTemplate(transformFunctions.px(value));
	},
	bgClip(value) {
		return value === "text" ? {
			color: "transparent",
			backgroundClip: "text"
		} : { backgroundClip: value };
	},
	transform(value) {
		if (value === "auto") return getTransformTemplate();
		if (value === "auto-gpu") return getTransformGpuTemplate();
		return value;
	},
	vh(value) {
		return value === "$100vh" ? "var(--chakra-vh)" : value;
	},
	px(value) {
		if (value == null) return value;
		const { unitless } = analyzeCSSValue(value);
		return unitless || typeof value === "number" ? `${value}px` : value;
	},
	fraction(value) {
		return !(typeof value === "number") || value > 1 ? value : `${value * 100}%`;
	},
	float(value, theme$1) {
		const map = {
			left: "right",
			right: "left"
		};
		return theme$1.direction === "rtl" ? map[value] : value;
	},
	degree(value) {
		if (isCssVar$1(value) || value == null) return value;
		const unitless = typeof value === "string" && !value.endsWith("deg");
		return typeof value === "number" || unitless ? `${value}deg` : value;
	},
	gradient: gradientTransform,
	blur: wrap("blur"),
	opacity: wrap("opacity"),
	brightness: wrap("brightness"),
	contrast: wrap("contrast"),
	dropShadow: wrap("drop-shadow"),
	grayscale: wrap("grayscale"),
	hueRotate: (value) => wrap("hue-rotate")(transformFunctions.degree(value)),
	invert: wrap("invert"),
	saturate: wrap("saturate"),
	sepia: wrap("sepia"),
	bgImage(value) {
		if (value == null) return value;
		const prevent = isCSSFunction(value) || globalSet.has(value);
		return !prevent ? `url(${value})` : value;
	},
	outline(value) {
		const isNoneOrZero = String(value) === "0" || String(value) === "none";
		return value !== null && isNoneOrZero ? {
			outline: "2px solid transparent",
			outlineOffset: "2px"
		} : { outline: value };
	},
	flexDirection(value) {
		const { space: space$1, divide: divide$2 } = flexDirectionTemplate[value] ?? {};
		const result = { flexDirection: value };
		if (space$1) result[space$1] = 1;
		if (divide$2) result[divide$2] = 1;
		return result;
	}
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/utils/index.mjs
const t$1 = {
	borderWidths: toConfig("borderWidths"),
	borderStyles: toConfig("borderStyles"),
	colors: toConfig("colors"),
	borders: toConfig("borders"),
	gradients: toConfig("gradients", transformFunctions.gradient),
	radii: toConfig("radii", transformFunctions.px),
	space: toConfig("space", pipe(transformFunctions.vh, transformFunctions.px)),
	spaceT: toConfig("space", pipe(transformFunctions.vh, transformFunctions.px)),
	degreeT(property) {
		return {
			property,
			transform: transformFunctions.degree
		};
	},
	prop(property, scale, transform$1) {
		return {
			property,
			scale,
			...scale && { transform: createTransform({
				scale,
				transform: transform$1
			}) }
		};
	},
	propT(property, transform$1) {
		return {
			property,
			transform: transform$1
		};
	},
	sizes: toConfig("sizes", pipe(transformFunctions.vh, transformFunctions.px)),
	sizesT: toConfig("sizes", pipe(transformFunctions.vh, transformFunctions.fraction)),
	shadows: toConfig("shadows"),
	logical,
	blur: toConfig("blur", transformFunctions.blur)
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/config/background.mjs
const background = {
	background: t$1.colors("background"),
	backgroundColor: t$1.colors("backgroundColor"),
	backgroundImage: t$1.gradients("backgroundImage"),
	backgroundSize: true,
	backgroundPosition: true,
	backgroundRepeat: true,
	backgroundAttachment: true,
	backgroundClip: { transform: transformFunctions.bgClip },
	bgSize: t$1.prop("backgroundSize"),
	bgPosition: t$1.prop("backgroundPosition"),
	bg: t$1.colors("background"),
	bgColor: t$1.colors("backgroundColor"),
	bgPos: t$1.prop("backgroundPosition"),
	bgRepeat: t$1.prop("backgroundRepeat"),
	bgAttachment: t$1.prop("backgroundAttachment"),
	bgGradient: t$1.gradients("backgroundImage"),
	bgClip: { transform: transformFunctions.bgClip }
};
Object.assign(background, {
	bgImage: background.backgroundImage,
	bgImg: background.backgroundImage
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/config/border.mjs
const border = {
	border: t$1.borders("border"),
	borderWidth: t$1.borderWidths("borderWidth"),
	borderStyle: t$1.borderStyles("borderStyle"),
	borderColor: t$1.colors("borderColor"),
	borderRadius: t$1.radii("borderRadius"),
	borderTop: t$1.borders("borderTop"),
	borderBlockStart: t$1.borders("borderBlockStart"),
	borderTopLeftRadius: t$1.radii("borderTopLeftRadius"),
	borderStartStartRadius: t$1.logical({
		scale: "radii",
		property: {
			ltr: "borderTopLeftRadius",
			rtl: "borderTopRightRadius"
		}
	}),
	borderEndStartRadius: t$1.logical({
		scale: "radii",
		property: {
			ltr: "borderBottomLeftRadius",
			rtl: "borderBottomRightRadius"
		}
	}),
	borderTopRightRadius: t$1.radii("borderTopRightRadius"),
	borderStartEndRadius: t$1.logical({
		scale: "radii",
		property: {
			ltr: "borderTopRightRadius",
			rtl: "borderTopLeftRadius"
		}
	}),
	borderEndEndRadius: t$1.logical({
		scale: "radii",
		property: {
			ltr: "borderBottomRightRadius",
			rtl: "borderBottomLeftRadius"
		}
	}),
	borderRight: t$1.borders("borderRight"),
	borderInlineEnd: t$1.borders("borderInlineEnd"),
	borderBottom: t$1.borders("borderBottom"),
	borderBlockEnd: t$1.borders("borderBlockEnd"),
	borderBottomLeftRadius: t$1.radii("borderBottomLeftRadius"),
	borderBottomRightRadius: t$1.radii("borderBottomRightRadius"),
	borderLeft: t$1.borders("borderLeft"),
	borderInlineStart: {
		property: "borderInlineStart",
		scale: "borders"
	},
	borderInlineStartRadius: t$1.logical({
		scale: "radii",
		property: {
			ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
			rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
		}
	}),
	borderInlineEndRadius: t$1.logical({
		scale: "radii",
		property: {
			ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
			rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
		}
	}),
	borderX: t$1.borders(["borderLeft", "borderRight"]),
	borderInline: t$1.borders("borderInline"),
	borderY: t$1.borders(["borderTop", "borderBottom"]),
	borderBlock: t$1.borders("borderBlock"),
	borderTopWidth: t$1.borderWidths("borderTopWidth"),
	borderBlockStartWidth: t$1.borderWidths("borderBlockStartWidth"),
	borderTopColor: t$1.colors("borderTopColor"),
	borderBlockStartColor: t$1.colors("borderBlockStartColor"),
	borderTopStyle: t$1.borderStyles("borderTopStyle"),
	borderBlockStartStyle: t$1.borderStyles("borderBlockStartStyle"),
	borderBottomWidth: t$1.borderWidths("borderBottomWidth"),
	borderBlockEndWidth: t$1.borderWidths("borderBlockEndWidth"),
	borderBottomColor: t$1.colors("borderBottomColor"),
	borderBlockEndColor: t$1.colors("borderBlockEndColor"),
	borderBottomStyle: t$1.borderStyles("borderBottomStyle"),
	borderBlockEndStyle: t$1.borderStyles("borderBlockEndStyle"),
	borderLeftWidth: t$1.borderWidths("borderLeftWidth"),
	borderInlineStartWidth: t$1.borderWidths("borderInlineStartWidth"),
	borderLeftColor: t$1.colors("borderLeftColor"),
	borderInlineStartColor: t$1.colors("borderInlineStartColor"),
	borderLeftStyle: t$1.borderStyles("borderLeftStyle"),
	borderInlineStartStyle: t$1.borderStyles("borderInlineStartStyle"),
	borderRightWidth: t$1.borderWidths("borderRightWidth"),
	borderInlineEndWidth: t$1.borderWidths("borderInlineEndWidth"),
	borderRightColor: t$1.colors("borderRightColor"),
	borderInlineEndColor: t$1.colors("borderInlineEndColor"),
	borderRightStyle: t$1.borderStyles("borderRightStyle"),
	borderInlineEndStyle: t$1.borderStyles("borderInlineEndStyle"),
	borderTopRadius: t$1.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
	borderBottomRadius: t$1.radii(["borderBottomLeftRadius", "borderBottomRightRadius"]),
	borderLeftRadius: t$1.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
	borderRightRadius: t$1.radii(["borderTopRightRadius", "borderBottomRightRadius"])
};
Object.assign(border, {
	rounded: border.borderRadius,
	roundedTop: border.borderTopRadius,
	roundedTopLeft: border.borderTopLeftRadius,
	roundedTopRight: border.borderTopRightRadius,
	roundedTopStart: border.borderStartStartRadius,
	roundedTopEnd: border.borderStartEndRadius,
	roundedBottom: border.borderBottomRadius,
	roundedBottomLeft: border.borderBottomLeftRadius,
	roundedBottomRight: border.borderBottomRightRadius,
	roundedBottomStart: border.borderEndStartRadius,
	roundedBottomEnd: border.borderEndEndRadius,
	roundedLeft: border.borderLeftRadius,
	roundedRight: border.borderRightRadius,
	roundedStart: border.borderInlineStartRadius,
	roundedEnd: border.borderInlineEndRadius,
	borderStart: border.borderInlineStart,
	borderEnd: border.borderInlineEnd,
	borderTopStartRadius: border.borderStartStartRadius,
	borderTopEndRadius: border.borderStartEndRadius,
	borderBottomStartRadius: border.borderEndStartRadius,
	borderBottomEndRadius: border.borderEndEndRadius,
	borderStartRadius: border.borderInlineStartRadius,
	borderEndRadius: border.borderInlineEndRadius,
	borderStartWidth: border.borderInlineStartWidth,
	borderEndWidth: border.borderInlineEndWidth,
	borderStartColor: border.borderInlineStartColor,
	borderEndColor: border.borderInlineEndColor,
	borderStartStyle: border.borderInlineStartStyle,
	borderEndStyle: border.borderInlineEndStyle
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/config/color.mjs
const color = {
	color: t$1.colors("color"),
	textColor: t$1.colors("color"),
	fill: t$1.colors("fill"),
	stroke: t$1.colors("stroke"),
	accentColor: t$1.colors("accentColor"),
	textFillColor: t$1.colors("textFillColor")
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/config/flexbox.mjs
const flexbox = {
	alignItems: true,
	alignContent: true,
	justifyItems: true,
	justifyContent: true,
	flexWrap: true,
	flexDirection: { transform: transformFunctions.flexDirection },
	flex: true,
	flexFlow: true,
	flexGrow: true,
	flexShrink: true,
	flexBasis: t$1.sizes("flexBasis"),
	justifySelf: true,
	alignSelf: true,
	order: true,
	placeItems: true,
	placeContent: true,
	placeSelf: true,
	gap: t$1.space("gap"),
	rowGap: t$1.space("rowGap"),
	columnGap: t$1.space("columnGap")
};
Object.assign(flexbox, { flexDir: flexbox.flexDirection });

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/config/layout.mjs
const layout = {
	width: t$1.sizesT("width"),
	inlineSize: t$1.sizesT("inlineSize"),
	height: t$1.sizes("height"),
	blockSize: t$1.sizes("blockSize"),
	boxSize: t$1.sizes(["width", "height"]),
	minWidth: t$1.sizes("minWidth"),
	minInlineSize: t$1.sizes("minInlineSize"),
	minHeight: t$1.sizes("minHeight"),
	minBlockSize: t$1.sizes("minBlockSize"),
	maxWidth: t$1.sizes("maxWidth"),
	maxInlineSize: t$1.sizes("maxInlineSize"),
	maxHeight: t$1.sizes("maxHeight"),
	maxBlockSize: t$1.sizes("maxBlockSize"),
	overflow: true,
	overflowX: true,
	overflowY: true,
	overscrollBehavior: true,
	overscrollBehaviorX: true,
	overscrollBehaviorY: true,
	display: true,
	aspectRatio: true,
	hideFrom: {
		scale: "breakpoints",
		transform: (value, theme$1) => {
			const breakpoint = theme$1.__breakpoints?.get(value)?.minW ?? value;
			const mq = `@media screen and (min-width: ${breakpoint})`;
			return { [mq]: { display: "none" } };
		}
	},
	hideBelow: {
		scale: "breakpoints",
		transform: (value, theme$1) => {
			const breakpoint = theme$1.__breakpoints?.get(value)?._minW ?? value;
			const mq = `@media screen and (max-width: ${breakpoint})`;
			return { [mq]: { display: "none" } };
		}
	},
	verticalAlign: true,
	boxSizing: true,
	boxDecorationBreak: true,
	float: t$1.propT("float", transformFunctions.float),
	objectFit: true,
	objectPosition: true,
	visibility: true,
	isolation: true
};
Object.assign(layout, {
	w: layout.width,
	h: layout.height,
	minW: layout.minWidth,
	maxW: layout.maxWidth,
	minH: layout.minHeight,
	maxH: layout.maxHeight,
	overscroll: layout.overscrollBehavior,
	overscrollX: layout.overscrollBehaviorX,
	overscrollY: layout.overscrollBehaviorY
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/config/filter.mjs
const filter = {
	filter: { transform: transformFunctions.filter },
	blur: t$1.blur("--chakra-blur"),
	brightness: t$1.propT("--chakra-brightness", transformFunctions.brightness),
	contrast: t$1.propT("--chakra-contrast", transformFunctions.contrast),
	hueRotate: t$1.propT("--chakra-hue-rotate", transformFunctions.hueRotate),
	invert: t$1.propT("--chakra-invert", transformFunctions.invert),
	saturate: t$1.propT("--chakra-saturate", transformFunctions.saturate),
	dropShadow: t$1.propT("--chakra-drop-shadow", transformFunctions.dropShadow),
	backdropFilter: { transform: transformFunctions.backdropFilter },
	backdropBlur: t$1.blur("--chakra-backdrop-blur"),
	backdropBrightness: t$1.propT("--chakra-backdrop-brightness", transformFunctions.brightness),
	backdropContrast: t$1.propT("--chakra-backdrop-contrast", transformFunctions.contrast),
	backdropHueRotate: t$1.propT("--chakra-backdrop-hue-rotate", transformFunctions.hueRotate),
	backdropInvert: t$1.propT("--chakra-backdrop-invert", transformFunctions.invert),
	backdropSaturate: t$1.propT("--chakra-backdrop-saturate", transformFunctions.saturate)
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/config/ring.mjs
const ring = {
	ring: { transform: transformFunctions.ring },
	ringColor: t$1.colors("--chakra-ring-color"),
	ringOffset: t$1.prop("--chakra-ring-offset-width"),
	ringOffsetColor: t$1.colors("--chakra-ring-offset-color"),
	ringInset: t$1.prop("--chakra-ring-inset")
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/config/interactivity.mjs
const interactivity = {
	appearance: true,
	cursor: true,
	resize: true,
	userSelect: true,
	pointerEvents: true,
	outline: { transform: transformFunctions.outline },
	outlineOffset: true,
	outlineColor: t$1.colors("outlineColor")
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/config/grid.mjs
const grid = {
	gridGap: t$1.space("gridGap"),
	gridColumnGap: t$1.space("gridColumnGap"),
	gridRowGap: t$1.space("gridRowGap"),
	gridColumn: true,
	gridRow: true,
	gridAutoFlow: true,
	gridAutoColumns: true,
	gridColumnStart: true,
	gridColumnEnd: true,
	gridRowStart: true,
	gridRowEnd: true,
	gridAutoRows: true,
	gridTemplate: true,
	gridTemplateColumns: true,
	gridTemplateRows: true,
	gridTemplateAreas: true,
	gridArea: true
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/get.mjs
function get$1(obj, path, fallback, index) {
	const key = typeof path === "string" ? path.split(".") : [path];
	for (index = 0; index < key.length; index += 1) {
		if (!obj) break;
		obj = obj[key[index]];
	}
	return obj === void 0 ? fallback : obj;
}
const memoize$1 = (fn) => {
	const cache = /* @__PURE__ */ new WeakMap();
	const memoizedFn = (obj, path, fallback, index) => {
		if (typeof obj === "undefined") return fn(obj, path, fallback);
		if (!cache.has(obj)) cache.set(obj, /* @__PURE__ */ new Map());
		const map = cache.get(obj);
		if (map.has(path)) return map.get(path);
		const value = fn(obj, path, fallback, index);
		map.set(path, value);
		return value;
	};
	return memoizedFn;
};
const memoizedGet = memoize$1(get$1);

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/config/others.mjs
const srOnly = {
	border: "0px",
	clip: "rect(0, 0, 0, 0)",
	width: "1px",
	height: "1px",
	margin: "-1px",
	padding: "0px",
	overflow: "hidden",
	whiteSpace: "nowrap",
	position: "absolute"
};
const srFocusable = {
	position: "static",
	width: "auto",
	height: "auto",
	clip: "auto",
	padding: "0",
	margin: "0",
	overflow: "visible",
	whiteSpace: "normal"
};
const getWithPriority = (theme$1, key, styles$1) => {
	const result = {};
	const obj = memoizedGet(theme$1, key, {});
	for (const prop in obj) {
		const isInStyles = prop in styles$1 && styles$1[prop] != null;
		if (!isInStyles) result[prop] = obj[prop];
	}
	return result;
};
const others = {
	srOnly: { transform(value) {
		if (value === true) return srOnly;
		if (value === "focusable") return srFocusable;
		return {};
	} },
	layerStyle: {
		processResult: true,
		transform: (value, theme$1, styles$1) => getWithPriority(theme$1, `layerStyles.${value}`, styles$1)
	},
	textStyle: {
		processResult: true,
		transform: (value, theme$1, styles$1) => getWithPriority(theme$1, `textStyles.${value}`, styles$1)
	},
	apply: {
		processResult: true,
		transform: (value, theme$1, styles$1) => getWithPriority(theme$1, value, styles$1)
	}
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/config/position.mjs
const position$1 = {
	position: true,
	pos: t$1.prop("position"),
	zIndex: t$1.prop("zIndex", "zIndices"),
	inset: t$1.spaceT("inset"),
	insetX: t$1.spaceT(["left", "right"]),
	insetInline: t$1.spaceT("insetInline"),
	insetY: t$1.spaceT(["top", "bottom"]),
	insetBlock: t$1.spaceT("insetBlock"),
	top: t$1.spaceT("top"),
	insetBlockStart: t$1.spaceT("insetBlockStart"),
	bottom: t$1.spaceT("bottom"),
	insetBlockEnd: t$1.spaceT("insetBlockEnd"),
	left: t$1.spaceT("left"),
	insetInlineStart: t$1.logical({
		scale: "space",
		property: {
			ltr: "left",
			rtl: "right"
		}
	}),
	right: t$1.spaceT("right"),
	insetInlineEnd: t$1.logical({
		scale: "space",
		property: {
			ltr: "right",
			rtl: "left"
		}
	})
};
Object.assign(position$1, {
	insetStart: position$1.insetInlineStart,
	insetEnd: position$1.insetInlineEnd
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/config/effect.mjs
const effect = {
	boxShadow: t$1.shadows("boxShadow"),
	mixBlendMode: true,
	blendMode: t$1.prop("mixBlendMode"),
	backgroundBlendMode: true,
	bgBlendMode: t$1.prop("backgroundBlendMode"),
	opacity: true
};
Object.assign(effect, { shadow: effect.boxShadow });

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/config/space.mjs
const space = {
	margin: t$1.spaceT("margin"),
	marginTop: t$1.spaceT("marginTop"),
	marginBlockStart: t$1.spaceT("marginBlockStart"),
	marginRight: t$1.spaceT("marginRight"),
	marginInlineEnd: t$1.spaceT("marginInlineEnd"),
	marginBottom: t$1.spaceT("marginBottom"),
	marginBlockEnd: t$1.spaceT("marginBlockEnd"),
	marginLeft: t$1.spaceT("marginLeft"),
	marginInlineStart: t$1.spaceT("marginInlineStart"),
	marginX: t$1.spaceT(["marginInlineStart", "marginInlineEnd"]),
	marginInline: t$1.spaceT("marginInline"),
	marginY: t$1.spaceT(["marginTop", "marginBottom"]),
	marginBlock: t$1.spaceT("marginBlock"),
	padding: t$1.space("padding"),
	paddingTop: t$1.space("paddingTop"),
	paddingBlockStart: t$1.space("paddingBlockStart"),
	paddingRight: t$1.space("paddingRight"),
	paddingBottom: t$1.space("paddingBottom"),
	paddingBlockEnd: t$1.space("paddingBlockEnd"),
	paddingLeft: t$1.space("paddingLeft"),
	paddingInlineStart: t$1.space("paddingInlineStart"),
	paddingInlineEnd: t$1.space("paddingInlineEnd"),
	paddingX: t$1.space(["paddingInlineStart", "paddingInlineEnd"]),
	paddingInline: t$1.space("paddingInline"),
	paddingY: t$1.space(["paddingTop", "paddingBottom"]),
	paddingBlock: t$1.space("paddingBlock")
};
Object.assign(space, {
	m: space.margin,
	mt: space.marginTop,
	mr: space.marginRight,
	me: space.marginInlineEnd,
	marginEnd: space.marginInlineEnd,
	mb: space.marginBottom,
	ml: space.marginLeft,
	ms: space.marginInlineStart,
	marginStart: space.marginInlineStart,
	mx: space.marginX,
	my: space.marginY,
	p: space.padding,
	pt: space.paddingTop,
	py: space.paddingY,
	px: space.paddingX,
	pb: space.paddingBottom,
	pl: space.paddingLeft,
	ps: space.paddingInlineStart,
	paddingStart: space.paddingInlineStart,
	pr: space.paddingRight,
	pe: space.paddingInlineEnd,
	paddingEnd: space.paddingInlineEnd
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/config/scroll.mjs
const scroll = {
	scrollBehavior: true,
	scrollSnapAlign: true,
	scrollSnapStop: true,
	scrollSnapType: true,
	scrollMargin: t$1.spaceT("scrollMargin"),
	scrollMarginTop: t$1.spaceT("scrollMarginTop"),
	scrollMarginBottom: t$1.spaceT("scrollMarginBottom"),
	scrollMarginLeft: t$1.spaceT("scrollMarginLeft"),
	scrollMarginRight: t$1.spaceT("scrollMarginRight"),
	scrollMarginX: t$1.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
	scrollMarginY: t$1.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
	scrollPadding: t$1.spaceT("scrollPadding"),
	scrollPaddingTop: t$1.spaceT("scrollPaddingTop"),
	scrollPaddingBottom: t$1.spaceT("scrollPaddingBottom"),
	scrollPaddingLeft: t$1.spaceT("scrollPaddingLeft"),
	scrollPaddingRight: t$1.spaceT("scrollPaddingRight"),
	scrollPaddingX: t$1.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
	scrollPaddingY: t$1.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/config/typography.mjs
const typography$1 = {
	fontFamily: t$1.prop("fontFamily", "fonts"),
	fontSize: t$1.prop("fontSize", "fontSizes", transformFunctions.px),
	fontWeight: t$1.prop("fontWeight", "fontWeights"),
	lineHeight: t$1.prop("lineHeight", "lineHeights"),
	letterSpacing: t$1.prop("letterSpacing", "letterSpacings"),
	textAlign: true,
	fontStyle: true,
	textIndent: true,
	wordBreak: true,
	overflowWrap: true,
	textOverflow: true,
	textTransform: true,
	whiteSpace: true,
	isTruncated: { transform(value) {
		if (value === true) return {
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap"
		};
	} },
	noOfLines: {
		static: {
			overflow: "hidden",
			textOverflow: "ellipsis",
			display: "-webkit-box",
			WebkitBoxOrient: "vertical",
			WebkitLineClamp: "var(--chakra-line-clamp)"
		},
		property: "--chakra-line-clamp"
	}
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/config/text-decoration.mjs
const textDecoration = {
	textDecorationColor: t$1.colors("textDecorationColor"),
	textDecoration: true,
	textDecor: { property: "textDecoration" },
	textDecorationLine: true,
	textDecorationStyle: true,
	textDecorationThickness: true,
	textUnderlineOffset: true,
	textShadow: t$1.shadows("textShadow")
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/config/transform.mjs
const transform = {
	clipPath: true,
	transform: t$1.propT("transform", transformFunctions.transform),
	transformOrigin: true,
	translateX: t$1.spaceT("--chakra-translate-x"),
	translateY: t$1.spaceT("--chakra-translate-y"),
	skewX: t$1.degreeT("--chakra-skew-x"),
	skewY: t$1.degreeT("--chakra-skew-y"),
	scaleX: t$1.prop("--chakra-scale-x"),
	scaleY: t$1.prop("--chakra-scale-y"),
	scale: t$1.prop(["--chakra-scale-x", "--chakra-scale-y"]),
	rotate: t$1.degreeT("--chakra-rotate")
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/config/list.mjs
const list = {
	listStyleType: true,
	listStylePosition: true,
	listStylePos: t$1.prop("listStylePosition"),
	listStyleImage: true,
	listStyleImg: t$1.prop("listStyleImage")
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/config/transition.mjs
const transition$1 = {
	transition: true,
	transitionDelay: true,
	animation: true,
	willChange: true,
	transitionDuration: t$1.prop("transitionDuration", "transition.duration"),
	transitionProperty: t$1.prop("transitionProperty", "transition.property"),
	transitionTimingFunction: t$1.prop("transitionTimingFunction", "transition.easing")
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/system.mjs
const systemProps = (0, import_lodash.default)({}, background, border, color, flexbox, layout, filter, ring, interactivity, grid, others, position$1, effect, space, scroll, typography$1, textDecoration, transform, list, transition$1);
const layoutSystem = Object.assign({}, space, layout, flexbox, grid, position$1);
const layoutPropNames = Object.keys(layoutSystem);
const propNames = [...Object.keys(systemProps), ...pseudoPropNames];
const styleProps = {
	...systemProps,
	...pseudoSelectors
};
const isStyleProp = (prop) => prop in styleProps;

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/utils/expand-responsive.mjs
const expandResponsive = (styles$1) => (theme$1) => {
	if (!theme$1.__breakpoints) return styles$1;
	const { isResponsive, toArrayValue, media: medias } = theme$1.__breakpoints;
	const computedStyles = {};
	for (const key in styles$1) {
		let value = runIfFn$1(styles$1[key], theme$1);
		if (value == null) continue;
		value = isObject(value) && isResponsive(value) ? toArrayValue(value) : value;
		if (!Array.isArray(value)) {
			computedStyles[key] = value;
			continue;
		}
		const queries = value.slice(0, medias.length).length;
		for (let index = 0; index < queries; index += 1) {
			const media = medias?.[index];
			if (!media) {
				computedStyles[key] = value[index];
				continue;
			}
			computedStyles[media] = computedStyles[media] || {};
			if (value[index] == null) continue;
			computedStyles[media][key] = value[index];
		}
	}
	return computedStyles;
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/utils/split-by-comma.mjs
function splitByComma(value) {
	const chunks = [];
	let chunk = "";
	let inParens = false;
	for (let i = 0; i < value.length; i++) {
		const char$1 = value[i];
		if (char$1 === "(") {
			inParens = true;
			chunk += char$1;
		} else if (char$1 === ")") {
			inParens = false;
			chunk += char$1;
		} else if (char$1 === "," && !inParens) {
			chunks.push(chunk);
			chunk = "";
		} else chunk += char$1;
	}
	chunk = chunk.trim();
	if (chunk) chunks.push(chunk);
	return chunks;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/css.mjs
function isCssVar(value) {
	return /^var\(--.+\)$/.test(value);
}
const isCSSVariableTokenValue = (key, value) => key.startsWith("--") && typeof value === "string" && !isCssVar(value);
const resolveTokenValue = (theme$1, value) => {
	if (value == null) return value;
	const getVar = (val) => theme$1.__cssMap?.[val]?.varRef;
	const getValue$1 = (val) => getVar(val) ?? val;
	const [tokenValue, fallbackValue] = splitByComma(value);
	value = getVar(tokenValue) ?? getValue$1(fallbackValue) ?? getValue$1(value);
	return value;
};
function getCss(options) {
	const { configs = {}, pseudos = {}, theme: theme$1 } = options;
	const css2 = (stylesOrFn, nested = false) => {
		const _styles = runIfFn$1(stylesOrFn, theme$1);
		const styles$1 = expandResponsive(_styles)(theme$1);
		let computedStyles = {};
		for (let key in styles$1) {
			const valueOrFn = styles$1[key];
			let value = runIfFn$1(valueOrFn, theme$1);
			if (key in pseudos) key = pseudos[key];
			if (isCSSVariableTokenValue(key, value)) value = resolveTokenValue(theme$1, value);
			let config$1 = configs[key];
			if (config$1 === true) config$1 = { property: key };
			if (isObject(value)) {
				computedStyles[key] = computedStyles[key] ?? {};
				computedStyles[key] = (0, import_lodash.default)({}, computedStyles[key], css2(value, true));
				continue;
			}
			let rawValue = config$1?.transform?.(value, theme$1, _styles) ?? value;
			rawValue = config$1?.processResult ? css2(rawValue, true) : rawValue;
			const configProperty = runIfFn$1(config$1?.property, theme$1);
			if (!nested && config$1?.static) {
				const staticStyles = runIfFn$1(config$1.static, theme$1);
				computedStyles = (0, import_lodash.default)({}, computedStyles, staticStyles);
			}
			if (configProperty && Array.isArray(configProperty)) {
				for (const property of configProperty) computedStyles[property] = rawValue;
				continue;
			}
			if (configProperty) {
				if (configProperty === "&" && isObject(rawValue)) computedStyles = (0, import_lodash.default)({}, computedStyles, rawValue);
				else computedStyles[configProperty] = rawValue;
				continue;
			}
			if (isObject(rawValue)) {
				computedStyles = (0, import_lodash.default)({}, computedStyles, rawValue);
				continue;
			}
			computedStyles[key] = rawValue;
		}
		return computedStyles;
	};
	return css2;
}
const css$1 = (styles$1) => (theme$1) => {
	const cssFn = getCss({
		theme: theme$1,
		pseudos: pseudoSelectors,
		configs: systemProps
	});
	return cssFn(styles$1);
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/define-styles.mjs
function defineStyle(styles$1) {
	return styles$1;
}
function defineStyleConfig(config$1) {
	return config$1;
}
function createMultiStyleConfigHelpers(parts) {
	return {
		definePartsStyle(config$1) {
			return config$1;
		},
		defineMultiStyleConfig(config$1) {
			return {
				parts,
				...config$1
			};
		}
	};
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/style-config.mjs
function normalize(value, toArray) {
	if (Array.isArray(value)) return value;
	if (isObject(value)) return toArray(value);
	if (value != null) return [value];
}
function getNextIndex(values, i) {
	for (let j = i + 1; j < values.length; j++) if (values[j] != null) return j;
	return -1;
}
function createResolver(theme$1) {
	const breakpointUtil = theme$1.__breakpoints;
	return function resolver(config$1, prop, value, props) {
		if (!breakpointUtil) return;
		const result = {};
		const normalized = normalize(value, breakpointUtil.toArrayValue);
		if (!normalized) return result;
		const len = normalized.length;
		const isSingle = len === 1;
		const isMultipart = !!config$1.parts;
		for (let i = 0; i < len; i++) {
			const key = breakpointUtil.details[i];
			const nextKey = breakpointUtil.details[getNextIndex(normalized, i)];
			const query = toMediaQueryString(key.minW, nextKey?._minW);
			const styles$1 = runIfFn$1(config$1[prop]?.[normalized[i]], props);
			if (!styles$1) continue;
			if (isMultipart) {
				config$1.parts?.forEach((part) => {
					(0, import_lodash.default)(result, { [part]: isSingle ? styles$1[part] : { [query]: styles$1[part] } });
				});
				continue;
			}
			if (!isMultipart) {
				if (isSingle) (0, import_lodash.default)(result, styles$1);
				else result[query] = styles$1;
				continue;
			}
			result[query] = styles$1;
		}
		return result;
	};
}
function resolveStyleConfig(config$1) {
	return (props) => {
		const { variant, size: size$1, theme: theme$1 } = props;
		const recipe = createResolver(theme$1);
		return (0, import_lodash.default)({}, runIfFn$1(config$1.baseStyle ?? {}, props), recipe(config$1, "sizes", size$1, props), recipe(config$1, "variants", variant, props));
	};
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/theming-props.mjs
function omitThemingProps(props) {
	return omit(props, [
		"styleConfig",
		"size",
		"variant",
		"colorScheme"
	]);
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/create-theme-vars/calc.mjs
function resolveReference(operand) {
	if (isObject(operand) && operand.reference) return operand.reference;
	return String(operand);
}
const toExpression = (operator, ...operands) => operands.map(resolveReference).join(` ${operator} `).replace(/calc/g, "");
const add$1 = (...operands) => `calc(${toExpression("+", ...operands)})`;
const subtract$1 = (...operands) => `calc(${toExpression("-", ...operands)})`;
const multiply$1 = (...operands) => `calc(${toExpression("*", ...operands)})`;
const divide$1 = (...operands) => `calc(${toExpression("/", ...operands)})`;
const negate$1 = (x$1) => {
	const value = resolveReference(x$1);
	if (value != null && !Number.isNaN(parseFloat(value))) return String(value).startsWith("-") ? String(value).slice(1) : `-${value}`;
	return multiply$1(value, -1);
};
const calc$1 = Object.assign((x$1) => ({
	add: (...operands) => calc$1(add$1(x$1, ...operands)),
	subtract: (...operands) => calc$1(subtract$1(x$1, ...operands)),
	multiply: (...operands) => calc$1(multiply$1(x$1, ...operands)),
	divide: (...operands) => calc$1(divide$1(x$1, ...operands)),
	negate: () => calc$1(negate$1(x$1)),
	toString: () => x$1.toString()
}), {
	add: add$1,
	subtract: subtract$1,
	multiply: multiply$1,
	divide: divide$1,
	negate: negate$1
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/create-theme-vars/css-var.mjs
function replaceWhiteSpace$1(value, replaceValue = "-") {
	return value.replace(/\s+/g, replaceValue);
}
function escape$1(value) {
	const valueStr = replaceWhiteSpace$1(value.toString());
	return escapeSymbol(escapeDot(valueStr));
}
function escapeDot(value) {
	if (value.includes("\\.")) return value;
	const isDecimal$1 = !Number.isInteger(parseFloat(value.toString()));
	return isDecimal$1 ? value.replace(".", `\\.`) : value;
}
function escapeSymbol(value) {
	return value.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function addPrefix$1(value, prefix$1 = "") {
	return [prefix$1, value].filter(Boolean).join("-");
}
function toVarReference(name, fallback) {
	return `var(${name}${fallback ? `, ${fallback}` : ""})`;
}
function toVarDefinition(value, prefix$1 = "") {
	return escape$1(`--${addPrefix$1(value, prefix$1)}`);
}
function cssVar$1(name, fallback, cssVarPrefix) {
	const cssVariable = toVarDefinition(name, cssVarPrefix);
	return {
		variable: cssVariable,
		reference: toVarReference(cssVariable, fallback)
	};
}
function defineCssVars(scope, keys$1) {
	const vars$1 = {};
	for (const key of keys$1) {
		if (Array.isArray(key)) {
			const [name, fallback] = key;
			vars$1[name] = cssVar$1(`${scope}-${name}`, fallback);
			continue;
		}
		vars$1[key] = cssVar$1(`${scope}-${key}`);
	}
	return vars$1;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/create-theme-vars/theme-tokens.mjs
const tokens = [
	"colors",
	"borders",
	"borderWidths",
	"borderStyles",
	"fonts",
	"fontSizes",
	"fontWeights",
	"gradients",
	"letterSpacings",
	"lineHeights",
	"radii",
	"space",
	"shadows",
	"sizes",
	"zIndices",
	"transition",
	"blur",
	"breakpoints"
];
function extractTokens(theme$1) {
	const _tokens = tokens;
	return pick(theme$1, _tokens);
}
function extractSemanticTokens(theme$1) {
	return theme$1.semanticTokens;
}
function omitVars(rawTheme) {
	const { __cssMap, __cssVars, __breakpoints,...cleanTheme } = rawTheme;
	return cleanTheme;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/create-theme-vars/flatten-tokens.mjs
function flattenTokens(theme$1) {
	const tokens$1 = extractTokens(theme$1);
	const semanticTokens$1 = extractSemanticTokens(theme$1);
	const isSemanticCondition = (key) => pseudoPropNames.includes(key) || "default" === key;
	const result = {};
	walkObject(tokens$1, (value, path) => {
		if (value == null) return;
		result[path.join(".")] = {
			isSemantic: false,
			value
		};
	});
	walkObject(semanticTokens$1, (value, path) => {
		if (value == null) return;
		result[path.join(".")] = {
			isSemantic: true,
			value
		};
	}, { stop: (value) => Object.keys(value).every(isSemanticCondition) });
	return result;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/create-theme-vars/create-theme-vars.mjs
function tokenToCssVar(token$1, prefix$1) {
	return cssVar$1(String(token$1).replace(/\./g, "-"), void 0, prefix$1);
}
function createThemeVars(theme$1) {
	const flatTokens = flattenTokens(theme$1);
	const cssVarPrefix = theme$1.config?.cssVarPrefix;
	let cssVars = {};
	const cssMap = {};
	function lookupToken(token$1, maybeToken) {
		const scale = String(token$1).split(".")[0];
		const withScale = [scale, maybeToken].join(".");
		const resolvedTokenValue = flatTokens[withScale];
		if (!resolvedTokenValue) return maybeToken;
		const { reference } = tokenToCssVar(withScale, cssVarPrefix);
		return reference;
	}
	for (const [token$1, tokenValue] of Object.entries(flatTokens)) {
		const { isSemantic, value } = tokenValue;
		const { variable, reference } = tokenToCssVar(token$1, cssVarPrefix);
		if (!isSemantic) {
			if (token$1.startsWith("space")) {
				const keys$1 = token$1.split(".");
				const [firstKey, ...referenceKeys] = keys$1;
				const negativeLookupKey = `${firstKey}.-${referenceKeys.join(".")}`;
				const negativeValue = calc$1.negate(value);
				const negatedReference = calc$1.negate(reference);
				cssMap[negativeLookupKey] = {
					value: negativeValue,
					var: variable,
					varRef: negatedReference
				};
			}
			cssVars[variable] = value;
			cssMap[token$1] = {
				value,
				var: variable,
				varRef: reference
			};
			continue;
		}
		const normalizedValue = isObject(value) ? value : { default: value };
		cssVars = (0, import_lodash.default)(cssVars, Object.entries(normalizedValue).reduce((acc, [conditionAlias, conditionValue]) => {
			if (!conditionValue) return acc;
			const tokenReference = lookupToken(token$1, `${conditionValue}`);
			if (conditionAlias === "default") {
				acc[variable] = tokenReference;
				return acc;
			}
			const conditionSelector = pseudoSelectors?.[conditionAlias] ?? conditionAlias;
			acc[conditionSelector] = { [variable]: tokenReference };
			return acc;
		}, {}));
		cssMap[token$1] = {
			value: reference,
			var: variable,
			varRef: reference
		};
	}
	return {
		cssVars,
		cssMap
	};
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+styled-system@2.12.4_react@19.1.1/node_modules/@chakra-ui/styled-system/dist/esm/create-theme-vars/to-css-var.mjs
function toCSSVar(rawTheme) {
	const theme$1 = omitVars(rawTheme);
	const { cssMap, cssVars } = createThemeVars(theme$1);
	const defaultCssVars = {
		"--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
		"--chakra-ring-offset-width": "0px",
		"--chakra-ring-offset-color": "#fff",
		"--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
		"--chakra-ring-offset-shadow": "0 0 #0000",
		"--chakra-ring-shadow": "0 0 #0000",
		"--chakra-space-x-reverse": "0",
		"--chakra-space-y-reverse": "0"
	};
	Object.assign(theme$1, {
		__cssVars: {
			...defaultCssVars,
			...cssVars
		},
		__cssMap: cssMap,
		__breakpoints: analyzeBreakpoints(theme$1.breakpoints)
	});
	return theme$1;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+anatomy@2.3.6/node_modules/@chakra-ui/anatomy/dist/esm/create-anatomy.mjs
function anatomy(name, map = {}) {
	let called = false;
	function assert() {
		if (!called) {
			called = true;
			return;
		}
		throw new Error("[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?");
	}
	function parts(...values) {
		assert();
		for (const part of values) map[part] = toPart(part);
		return anatomy(name, map);
	}
	function extend(...parts2) {
		for (const part of parts2) {
			if (part in map) continue;
			map[part] = toPart(part);
		}
		return anatomy(name, map);
	}
	function selectors() {
		const value = Object.fromEntries(Object.entries(map).map(([key, part]) => [key, part.selector]));
		return value;
	}
	function classnames() {
		const value = Object.fromEntries(Object.entries(map).map(([key, part]) => [key, part.className]));
		return value;
	}
	function toPart(part) {
		const el = ["container", "root"].includes(part ?? "") ? [name] : [name, part];
		const attr = el.filter(Boolean).join("__");
		const className = `chakra-${attr}`;
		const partObj = {
			className,
			selector: `.${className}`,
			toString: () => part
		};
		return partObj;
	}
	const __type = {};
	return {
		parts,
		toPart,
		extend,
		selectors,
		classnames,
		get keys() {
			return Object.keys(map);
		},
		__type
	};
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+anatomy@2.3.6/node_modules/@chakra-ui/anatomy/dist/esm/components.mjs
const accordionAnatomy = anatomy("accordion").parts("root", "container", "button", "panel", "icon");
const alertAnatomy = anatomy("alert").parts("title", "description", "container", "icon", "spinner");
const avatarAnatomy = anatomy("avatar").parts("label", "badge", "container", "excessLabel", "group");
const breadcrumbAnatomy = anatomy("breadcrumb").parts("link", "item", "container", "separator");
const buttonAnatomy = anatomy("button").parts();
const checkboxAnatomy = anatomy("checkbox").parts("control", "icon", "container", "label");
const circularProgressAnatomy = anatomy("progress").parts("track", "filledTrack", "label");
const drawerAnatomy = anatomy("drawer").parts("overlay", "dialogContainer", "dialog", "header", "closeButton", "body", "footer");
const editableAnatomy = anatomy("editable").parts("preview", "input", "textarea");
const formAnatomy = anatomy("form").parts("container", "requiredIndicator", "helperText");
const formErrorAnatomy = anatomy("formError").parts("text", "icon");
const inputAnatomy = anatomy("input").parts("addon", "field", "element", "group");
const listAnatomy = anatomy("list").parts("container", "item", "icon");
const menuAnatomy = anatomy("menu").parts("button", "list", "item", "groupTitle", "icon", "command", "divider");
const modalAnatomy = anatomy("modal").parts("overlay", "dialogContainer", "dialog", "header", "closeButton", "body", "footer");
const numberInputAnatomy = anatomy("numberinput").parts("root", "field", "stepperGroup", "stepper");
const pinInputAnatomy = anatomy("pininput").parts("field");
const popoverAnatomy = anatomy("popover").parts("content", "header", "body", "footer", "popper", "arrow", "closeButton");
const progressAnatomy = anatomy("progress").parts("label", "filledTrack", "track");
const radioAnatomy = anatomy("radio").parts("container", "control", "label");
const selectAnatomy = anatomy("select").parts("field", "icon");
const sliderAnatomy = anatomy("slider").parts("container", "track", "thumb", "filledTrack", "mark");
const statAnatomy = anatomy("stat").parts("container", "label", "helpText", "number", "icon");
const switchAnatomy = anatomy("switch").parts("container", "track", "thumb", "label");
const tableAnatomy = anatomy("table").parts("table", "thead", "tbody", "tr", "th", "td", "tfoot", "caption");
const tabsAnatomy = anatomy("tabs").parts("root", "tab", "tablist", "tabpanel", "tabpanels", "indicator");
const tagAnatomy = anatomy("tag").parts("container", "label", "closeButton");
const cardAnatomy = anatomy("card").parts("container", "header", "body", "footer");
const stepperAnatomy = anatomy("stepper").parts("stepper", "step", "title", "description", "indicator", "separator", "icon", "number");

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/accordion.mjs
const { definePartsStyle: definePartsStyle$25, defineMultiStyleConfig: defineMultiStyleConfig$25 } = createMultiStyleConfigHelpers(accordionAnatomy.keys);
const baseStyleContainer$4 = defineStyle({
	borderTopWidth: "1px",
	borderColor: "inherit",
	_last: { borderBottomWidth: "1px" }
});
const baseStyleButton$1 = defineStyle({
	transitionProperty: "common",
	transitionDuration: "normal",
	fontSize: "md",
	_focusVisible: { boxShadow: "outline" },
	_hover: { bg: "blackAlpha.50" },
	_disabled: {
		opacity: .4,
		cursor: "not-allowed"
	},
	px: "4",
	py: "2"
});
const baseStylePanel = defineStyle({
	pt: "2",
	px: "4",
	pb: "5"
});
const baseStyleIcon$6 = defineStyle({ fontSize: "1.25em" });
const baseStyle$41 = definePartsStyle$25({
	container: baseStyleContainer$4,
	button: baseStyleButton$1,
	panel: baseStylePanel,
	icon: baseStyleIcon$6
});
const accordionTheme = defineMultiStyleConfig$25({ baseStyle: baseStyle$41 });

//#endregion
//#region node_modules/.pnpm/color2k@2.0.3/node_modules/color2k/dist/index.exports.import.es.mjs
/**
* A simple guard function:
*
* ```js
* Math.min(Math.max(low, value), high)
* ```
*/
function guard(low, high, value) {
	return Math.min(Math.max(low, value), high);
}
var ColorError = class extends Error {
	constructor(color$1) {
		super(`Failed to parse color: "${color$1}"`);
	}
};
var ColorError$1 = ColorError;
/**
* Parses a color into red, gree, blue, alpha parts
*
* @param color the input color. Can be a RGB, RBGA, HSL, HSLA, or named color
*/
function parseToRgba(color$1) {
	if (typeof color$1 !== "string") throw new ColorError$1(color$1);
	if (color$1.trim().toLowerCase() === "transparent") return [
		0,
		0,
		0,
		0
	];
	let normalizedColor = color$1.trim();
	normalizedColor = namedColorRegex.test(color$1) ? nameToHex(color$1) : color$1;
	const reducedHexMatch = reducedHexRegex.exec(normalizedColor);
	if (reducedHexMatch) {
		const arr = Array.from(reducedHexMatch).slice(1);
		return [...arr.slice(0, 3).map((x$1) => parseInt(r$1(x$1, 2), 16)), parseInt(r$1(arr[3] || "f", 2), 16) / 255];
	}
	const hexMatch = hexRegex.exec(normalizedColor);
	if (hexMatch) {
		const arr = Array.from(hexMatch).slice(1);
		return [...arr.slice(0, 3).map((x$1) => parseInt(x$1, 16)), parseInt(arr[3] || "ff", 16) / 255];
	}
	const rgbaMatch = rgbaRegex.exec(normalizedColor);
	if (rgbaMatch) {
		const arr = Array.from(rgbaMatch).slice(1);
		return [...arr.slice(0, 3).map((x$1) => parseInt(x$1, 10)), parseFloat(arr[3] || "1")];
	}
	const hslaMatch = hslaRegex.exec(normalizedColor);
	if (hslaMatch) {
		const [h$1, s, l$1, a] = Array.from(hslaMatch).slice(1).map(parseFloat);
		if (guard(0, 100, s) !== s) throw new ColorError$1(color$1);
		if (guard(0, 100, l$1) !== l$1) throw new ColorError$1(color$1);
		return [...hslToRgb(h$1, s, l$1), Number.isNaN(a) ? 1 : a];
	}
	throw new ColorError$1(color$1);
}
function hash$1(str) {
	let hash$2 = 5381;
	let i = str.length;
	while (i) hash$2 = hash$2 * 33 ^ str.charCodeAt(--i);
	return (hash$2 >>> 0) % 2341;
}
const colorToInt = (x$1) => parseInt(x$1.replace(/_/g, ""), 36);
const compressedColorMap = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((acc, next$1) => {
	const key = colorToInt(next$1.substring(0, 3));
	const hex = colorToInt(next$1.substring(3)).toString(16);
	let prefix$1 = "";
	for (let i = 0; i < 6 - hex.length; i++) prefix$1 += "0";
	acc[key] = `${prefix$1}${hex}`;
	return acc;
}, {});
/**
* Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
*/
function nameToHex(color$1) {
	const normalizedColorName = color$1.toLowerCase().trim();
	const result = compressedColorMap[hash$1(normalizedColorName)];
	if (!result) throw new ColorError$1(color$1);
	return `#${result}`;
}
const r$1 = (str, amount) => Array.from(Array(amount)).map(() => str).join("");
const reducedHexRegex = new RegExp(`^#${r$1("([a-f0-9])", 3)}([a-f0-9])?$`, "i");
const hexRegex = new RegExp(`^#${r$1("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i");
const rgbaRegex = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${r$1(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i");
const hslaRegex = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i;
const namedColorRegex = /^[a-z]+$/i;
const roundColor = (color$1) => {
	return Math.round(color$1 * 255);
};
const hslToRgb = (hue, saturation, lightness) => {
	let l$1 = lightness / 100;
	if (saturation === 0) return [
		l$1,
		l$1,
		l$1
	].map(roundColor);
	const huePrime = (hue % 360 + 360) % 360 / 60;
	const chroma = (1 - Math.abs(2 * l$1 - 1)) * (saturation / 100);
	const secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
	let red = 0;
	let green = 0;
	let blue = 0;
	if (huePrime >= 0 && huePrime < 1) {
		red = chroma;
		green = secondComponent;
	} else if (huePrime >= 1 && huePrime < 2) {
		red = secondComponent;
		green = chroma;
	} else if (huePrime >= 2 && huePrime < 3) {
		green = chroma;
		blue = secondComponent;
	} else if (huePrime >= 3 && huePrime < 4) {
		green = secondComponent;
		blue = chroma;
	} else if (huePrime >= 4 && huePrime < 5) {
		red = secondComponent;
		blue = chroma;
	} else if (huePrime >= 5 && huePrime < 6) {
		red = chroma;
		blue = secondComponent;
	}
	const lightnessModification = l$1 - chroma / 2;
	const finalRed = red + lightnessModification;
	const finalGreen = green + lightnessModification;
	const finalBlue = blue + lightnessModification;
	return [
		finalRed,
		finalGreen,
		finalBlue
	].map(roundColor);
};
/**
* Takes in rgba parts and returns an rgba string
*
* @param red The amount of red in the red channel, given in a number between 0 and 255 inclusive
* @param green The amount of green in the red channel, given in a number between 0 and 255 inclusive
* @param blue The amount of blue in the red channel, given in a number between 0 and 255 inclusive
* @param alpha Percentage of opacity, given as a decimal between 0 and 1
*/
function rgba(red, green, blue, alpha) {
	return `rgba(${guard(0, 255, red).toFixed()}, ${guard(0, 255, green).toFixed()}, ${guard(0, 255, blue).toFixed()}, ${parseFloat(guard(0, 1, alpha).toFixed(3))})`;
}
/**
* Takes in a color and makes it more transparent by convert to `rgba` and
* decreasing the amount in the alpha channel.
*
* @param amount The amount to increase the transparency by, given as a decimal between 0 and 1
*/
function transparentize$1(color$1, amount) {
	const [r$2, g$1, b$1, a] = parseToRgba(color$1);
	return rgba(r$2, g$1, b$1, a - amount);
}
/**
* Takes in any color and returns it as a hex code.
*/
function toHex(color$1) {
	const [r$2, g$1, b$1, a] = parseToRgba(color$1);
	let hex = (x$1) => {
		const h$1 = guard(0, 255, x$1).toString(16);
		return h$1.length === 1 ? `0${h$1}` : h$1;
	};
	return `#${hex(r$2)}${hex(g$1)}${hex(b$1)}${a < 1 ? hex(Math.round(a * 255)) : ""}`;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme-tools@2.2.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme-tools/dist/esm/color.mjs
const isEmptyObject = (obj) => Object.keys(obj).length === 0;
function get(obj, key, def, p$1, undef) {
	key = key.split ? key.split(".") : key;
	for (p$1 = 0; p$1 < key.length; p$1++) obj = obj ? obj[key[p$1]] : undef;
	return obj === undef ? def : obj;
}
const getColor = (theme$1, color$1, fallback) => {
	const hex = get(theme$1, `colors.${color$1}`, color$1);
	try {
		toHex(hex);
		return hex;
	} catch {
		return fallback ?? "#000000";
	}
};
const getBrightness = (color$1) => {
	const [r$2, g$1, b$1] = parseToRgba(color$1);
	return (r$2 * 299 + g$1 * 587 + b$1 * 114) / 1e3;
};
const tone = (color$1) => (theme$1) => {
	const hex = getColor(theme$1, color$1);
	const brightness = getBrightness(hex);
	const isDark2 = brightness < 128;
	return isDark2 ? "dark" : "light";
};
const isDark = (color$1) => (theme$1) => tone(color$1)(theme$1) === "dark";
const transparentize = (color$1, opacity) => (theme$1) => {
	const raw = getColor(theme$1, color$1);
	return transparentize$1(raw, 1 - opacity);
};
function generateStripe(size$1 = "1rem", color$1 = "rgba(255, 255, 255, 0.15)") {
	return {
		backgroundImage: `linear-gradient(
    45deg,
    ${color$1} 25%,
    transparent 25%,
    transparent 50%,
    ${color$1} 50%,
    ${color$1} 75%,
    transparent 75%,
    transparent
  )`,
		backgroundSize: `${size$1} ${size$1}`
	};
}
const randomHex = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function randomColor(opts) {
	const fallback = randomHex();
	if (!opts || isEmptyObject(opts)) return fallback;
	if (opts.string && opts.colors) return randomColorFromList(opts.string, opts.colors);
	if (opts.string && !opts.colors) return randomColorFromString(opts.string);
	if (opts.colors && !opts.string) return randomFromList(opts.colors);
	return fallback;
}
function randomColorFromString(str) {
	let hash$2 = 0;
	if (str.length === 0) return hash$2.toString();
	for (let i = 0; i < str.length; i += 1) {
		hash$2 = str.charCodeAt(i) + ((hash$2 << 5) - hash$2);
		hash$2 = hash$2 & hash$2;
	}
	let color$1 = "#";
	for (let j = 0; j < 3; j += 1) {
		const value = hash$2 >> j * 8 & 255;
		color$1 += `00${value.toString(16)}`.substr(-2);
	}
	return color$1;
}
function randomColorFromList(str, list$1) {
	let index = 0;
	if (str.length === 0) return list$1[0];
	for (let i = 0; i < str.length; i += 1) {
		index = str.charCodeAt(i) + ((index << 5) - index);
		index = index & index;
	}
	index = (index % list$1.length + list$1.length) % list$1.length;
	return list$1[index];
}
function randomFromList(list$1) {
	return list$1[Math.floor(Math.random() * list$1.length)];
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme-tools@2.2.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme-tools/dist/esm/component.mjs
function mode(light, dark) {
	return (props) => props.colorMode === "dark" ? dark : light;
}
function orient(options) {
	const { orientation, vertical, horizontal } = options;
	if (!orientation) return {};
	return orientation === "vertical" ? vertical : horizontal;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme-tools@2.2.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme-tools/dist/esm/css-calc.mjs
function toRef(operand) {
	if (isObject(operand) && operand.reference) return operand.reference;
	return String(operand);
}
const toExpr = (operator, ...operands) => operands.map(toRef).join(` ${operator} `).replace(/calc/g, "");
const add = (...operands) => `calc(${toExpr("+", ...operands)})`;
const subtract = (...operands) => `calc(${toExpr("-", ...operands)})`;
const multiply = (...operands) => `calc(${toExpr("*", ...operands)})`;
const divide = (...operands) => `calc(${toExpr("/", ...operands)})`;
const negate = (x$1) => {
	const value = toRef(x$1);
	if (value != null && !Number.isNaN(parseFloat(value))) return String(value).startsWith("-") ? String(value).slice(1) : `-${value}`;
	return multiply(value, -1);
};
const calc = Object.assign((x$1) => ({
	add: (...operands) => calc(add(x$1, ...operands)),
	subtract: (...operands) => calc(subtract(x$1, ...operands)),
	multiply: (...operands) => calc(multiply(x$1, ...operands)),
	divide: (...operands) => calc(divide(x$1, ...operands)),
	negate: () => calc(negate(x$1)),
	toString: () => x$1.toString()
}), {
	add,
	subtract,
	multiply,
	divide,
	negate
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme-tools@2.2.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme-tools/dist/esm/css-var.mjs
function isDecimal(value) {
	return !Number.isInteger(parseFloat(value.toString()));
}
function replaceWhiteSpace(value, replaceValue = "-") {
	return value.replace(/\s+/g, replaceValue);
}
function escape(value) {
	const valueStr = replaceWhiteSpace(value.toString());
	if (valueStr.includes("\\.")) return value;
	return isDecimal(value) ? valueStr.replace(".", `\\.`) : value;
}
function addPrefix(value, prefix$1 = "") {
	return [prefix$1, escape(value)].filter(Boolean).join("-");
}
function toVarRef(name, fallback) {
	return `var(${escape(name)}${fallback ? `, ${fallback}` : ""})`;
}
function toVar(value, prefix$1 = "") {
	return `--${addPrefix(value, prefix$1)}`;
}
function cssVar(name, options) {
	const cssVariable = toVar(name, options?.prefix);
	return {
		variable: cssVariable,
		reference: toVarRef(cssVariable, getFallback(options?.fallback))
	};
}
function getFallback(fallback) {
	if (typeof fallback === "string") return fallback;
	return fallback?.reference;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/alert.mjs
const { definePartsStyle: definePartsStyle$24, defineMultiStyleConfig: defineMultiStyleConfig$24 } = createMultiStyleConfigHelpers(alertAnatomy.keys);
const $fg$5 = cssVar$1("alert-fg");
const $bg$15 = cssVar$1("alert-bg");
const baseStyle$40 = definePartsStyle$24({
	container: {
		bg: $bg$15.reference,
		px: "4",
		py: "3"
	},
	title: {
		fontWeight: "bold",
		lineHeight: "6",
		marginEnd: "2"
	},
	description: { lineHeight: "6" },
	icon: {
		color: $fg$5.reference,
		flexShrink: 0,
		marginEnd: "3",
		w: "5",
		h: "6"
	},
	spinner: {
		color: $fg$5.reference,
		flexShrink: 0,
		marginEnd: "3",
		w: "5",
		h: "5"
	}
});
function getBg(props) {
	const { theme: theme$1, colorScheme: c$1 } = props;
	const darkBg = transparentize(`${c$1}.200`, .16)(theme$1);
	return {
		light: `colors.${c$1}.100`,
		dark: darkBg
	};
}
const variantSubtle$1 = definePartsStyle$24((props) => {
	const { colorScheme: c$1 } = props;
	const bg = getBg(props);
	return { container: {
		[$fg$5.variable]: `colors.${c$1}.600`,
		[$bg$15.variable]: bg.light,
		_dark: {
			[$fg$5.variable]: `colors.${c$1}.200`,
			[$bg$15.variable]: bg.dark
		}
	} };
});
const variantLeftAccent = definePartsStyle$24((props) => {
	const { colorScheme: c$1 } = props;
	const bg = getBg(props);
	return { container: {
		[$fg$5.variable]: `colors.${c$1}.600`,
		[$bg$15.variable]: bg.light,
		_dark: {
			[$fg$5.variable]: `colors.${c$1}.200`,
			[$bg$15.variable]: bg.dark
		},
		paddingStart: "3",
		borderStartWidth: "4px",
		borderStartColor: $fg$5.reference
	} };
});
const variantTopAccent = definePartsStyle$24((props) => {
	const { colorScheme: c$1 } = props;
	const bg = getBg(props);
	return { container: {
		[$fg$5.variable]: `colors.${c$1}.600`,
		[$bg$15.variable]: bg.light,
		_dark: {
			[$fg$5.variable]: `colors.${c$1}.200`,
			[$bg$15.variable]: bg.dark
		},
		pt: "2",
		borderTopWidth: "4px",
		borderTopColor: $fg$5.reference
	} };
});
const variantSolid$3 = definePartsStyle$24((props) => {
	const { colorScheme: c$1 } = props;
	return { container: {
		[$fg$5.variable]: `colors.white`,
		[$bg$15.variable]: `colors.${c$1}.600`,
		_dark: {
			[$fg$5.variable]: `colors.gray.900`,
			[$bg$15.variable]: `colors.${c$1}.200`
		},
		color: $fg$5.reference
	} };
});
const variants$11 = {
	subtle: variantSubtle$1,
	"left-accent": variantLeftAccent,
	"top-accent": variantTopAccent,
	solid: variantSolid$3
};
const alertTheme = defineMultiStyleConfig$24({
	baseStyle: baseStyle$40,
	variants: variants$11,
	defaultProps: {
		variant: "subtle",
		colorScheme: "blue"
	}
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/foundations/spacing.mjs
const spacing = {
	px: "1px",
	.5: "0.125rem",
	1: "0.25rem",
	1.5: "0.375rem",
	2: "0.5rem",
	2.5: "0.625rem",
	3: "0.75rem",
	3.5: "0.875rem",
	4: "1rem",
	5: "1.25rem",
	6: "1.5rem",
	7: "1.75rem",
	8: "2rem",
	9: "2.25rem",
	10: "2.5rem",
	12: "3rem",
	14: "3.5rem",
	16: "4rem",
	20: "5rem",
	24: "6rem",
	28: "7rem",
	32: "8rem",
	36: "9rem",
	40: "10rem",
	44: "11rem",
	48: "12rem",
	52: "13rem",
	56: "14rem",
	60: "15rem",
	64: "16rem",
	72: "18rem",
	80: "20rem",
	96: "24rem"
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/foundations/sizes.mjs
const largeSizes = {
	max: "max-content",
	min: "min-content",
	full: "100%",
	"3xs": "14rem",
	"2xs": "16rem",
	xs: "20rem",
	sm: "24rem",
	md: "28rem",
	lg: "32rem",
	xl: "36rem",
	"2xl": "42rem",
	"3xl": "48rem",
	"4xl": "56rem",
	"5xl": "64rem",
	"6xl": "72rem",
	"7xl": "80rem",
	"8xl": "90rem",
	prose: "60ch"
};
const container = {
	sm: "640px",
	md: "768px",
	lg: "1024px",
	xl: "1280px"
};
const sizes = {
	...spacing,
	...largeSizes,
	container
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/utils/run-if-fn.mjs
const isFunction = (value) => typeof value === "function";
function runIfFn(valueOrFn, ...args) {
	return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/avatar.mjs
const { definePartsStyle: definePartsStyle$23, defineMultiStyleConfig: defineMultiStyleConfig$23 } = createMultiStyleConfigHelpers(avatarAnatomy.keys);
const $border$3 = cssVar$1("avatar-border-color");
const $bg$14 = cssVar$1("avatar-bg");
const $fs = cssVar$1("avatar-font-size");
const $size$4 = cssVar$1("avatar-size");
const baseStyleBadge = defineStyle({
	borderRadius: "full",
	border: "0.2em solid",
	borderColor: $border$3.reference,
	[$border$3.variable]: "white",
	_dark: { [$border$3.variable]: "colors.gray.800" }
});
const baseStyleExcessLabel = defineStyle({
	bg: $bg$14.reference,
	fontSize: $fs.reference,
	width: $size$4.reference,
	height: $size$4.reference,
	lineHeight: "1",
	[$bg$14.variable]: "colors.gray.200",
	_dark: { [$bg$14.variable]: "colors.whiteAlpha.400" }
});
const baseStyleContainer$3 = defineStyle((props) => {
	const { name, theme: theme$1 } = props;
	const bg = name ? randomColor({ string: name }) : "colors.gray.400";
	const isBgDark = isDark(bg)(theme$1);
	let color$1 = "white";
	if (!isBgDark) color$1 = "gray.800";
	return {
		bg: $bg$14.reference,
		fontSize: $fs.reference,
		color: color$1,
		borderColor: $border$3.reference,
		verticalAlign: "top",
		width: $size$4.reference,
		height: $size$4.reference,
		"&:not([data-loaded])": { [$bg$14.variable]: bg },
		[$border$3.variable]: "colors.white",
		_dark: { [$border$3.variable]: "colors.gray.800" }
	};
});
const baseStyleLabel$4 = defineStyle({
	fontSize: $fs.reference,
	lineHeight: "1"
});
const baseStyle$39 = definePartsStyle$23((props) => ({
	badge: runIfFn(baseStyleBadge, props),
	excessLabel: runIfFn(baseStyleExcessLabel, props),
	container: runIfFn(baseStyleContainer$3, props),
	label: baseStyleLabel$4
}));
function getSize$3(size$1) {
	const themeSize = size$1 !== "100%" ? sizes[size$1] : void 0;
	return definePartsStyle$23({
		container: {
			[$size$4.variable]: themeSize ?? size$1,
			[$fs.variable]: `calc(${themeSize ?? size$1} / 2.5)`
		},
		excessLabel: {
			[$size$4.variable]: themeSize ?? size$1,
			[$fs.variable]: `calc(${themeSize ?? size$1} / 2.5)`
		}
	});
}
const sizes$22 = {
	"2xs": getSize$3(4),
	xs: getSize$3(6),
	sm: getSize$3(8),
	md: getSize$3(12),
	lg: getSize$3(16),
	xl: getSize$3(24),
	"2xl": getSize$3(32),
	full: getSize$3("100%")
};
const avatarTheme = defineMultiStyleConfig$23({
	baseStyle: baseStyle$39,
	sizes: sizes$22,
	defaultProps: { size: "md" }
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/badge.mjs
const vars = defineCssVars("badge", [
	"bg",
	"color",
	"shadow"
]);
const baseStyle$38 = defineStyle({
	px: 1,
	textTransform: "uppercase",
	fontSize: "xs",
	borderRadius: "sm",
	fontWeight: "bold",
	bg: vars.bg.reference,
	color: vars.color.reference,
	boxShadow: vars.shadow.reference
});
const variantSolid$2 = defineStyle((props) => {
	const { colorScheme: c$1, theme: theme$1 } = props;
	const dark = transparentize(`${c$1}.500`, .6)(theme$1);
	return {
		[vars.bg.variable]: `colors.${c$1}.500`,
		[vars.color.variable]: `colors.white`,
		_dark: {
			[vars.bg.variable]: dark,
			[vars.color.variable]: `colors.whiteAlpha.800`
		}
	};
});
const variantSubtle = defineStyle((props) => {
	const { colorScheme: c$1, theme: theme$1 } = props;
	const darkBg = transparentize(`${c$1}.200`, .16)(theme$1);
	return {
		[vars.bg.variable]: `colors.${c$1}.100`,
		[vars.color.variable]: `colors.${c$1}.800`,
		_dark: {
			[vars.bg.variable]: darkBg,
			[vars.color.variable]: `colors.${c$1}.200`
		}
	};
});
const variantOutline$2 = defineStyle((props) => {
	const { colorScheme: c$1, theme: theme$1 } = props;
	const darkColor = transparentize(`${c$1}.200`, .8)(theme$1);
	return {
		[vars.color.variable]: `colors.${c$1}.500`,
		_dark: { [vars.color.variable]: darkColor },
		[vars.shadow.variable]: `inset 0 0 0px 1px ${vars.color.reference}`
	};
});
const variants$10 = {
	solid: variantSolid$2,
	subtle: variantSubtle,
	outline: variantOutline$2
};
const badgeTheme = defineStyleConfig({
	baseStyle: baseStyle$38,
	variants: variants$10,
	defaultProps: {
		variant: "subtle",
		colorScheme: "gray"
	}
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/breadcrumb.mjs
const { defineMultiStyleConfig: defineMultiStyleConfig$22, definePartsStyle: definePartsStyle$22 } = createMultiStyleConfigHelpers(breadcrumbAnatomy.keys);
const $decor = cssVar$1("breadcrumb-link-decor");
const baseStyleLink = defineStyle({
	transitionProperty: "common",
	transitionDuration: "fast",
	transitionTimingFunction: "ease-out",
	outline: "none",
	color: "inherit",
	textDecoration: $decor.reference,
	[$decor.variable]: "none",
	"&:not([aria-current=page])": {
		cursor: "pointer",
		_hover: { [$decor.variable]: "underline" },
		_focusVisible: { boxShadow: "outline" }
	}
});
const baseStyle$37 = definePartsStyle$22({ link: baseStyleLink });
const breadcrumbTheme = defineMultiStyleConfig$22({ baseStyle: baseStyle$37 });

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/button.mjs
const baseStyle$36 = defineStyle({
	lineHeight: "1.2",
	borderRadius: "md",
	fontWeight: "semibold",
	transitionProperty: "common",
	transitionDuration: "normal",
	_focusVisible: { boxShadow: "outline" },
	_disabled: {
		opacity: .4,
		cursor: "not-allowed",
		boxShadow: "none"
	},
	_hover: { _disabled: { bg: "initial" } }
});
const variantGhost = defineStyle((props) => {
	const { colorScheme: c$1, theme: theme$1 } = props;
	if (c$1 === "gray") return {
		color: mode(`gray.800`, `whiteAlpha.900`)(props),
		_hover: { bg: mode(`gray.100`, `whiteAlpha.200`)(props) },
		_active: { bg: mode(`gray.200`, `whiteAlpha.300`)(props) }
	};
	const darkHoverBg = transparentize(`${c$1}.200`, .12)(theme$1);
	const darkActiveBg = transparentize(`${c$1}.200`, .24)(theme$1);
	return {
		color: mode(`${c$1}.600`, `${c$1}.200`)(props),
		bg: "transparent",
		_hover: { bg: mode(`${c$1}.50`, darkHoverBg)(props) },
		_active: { bg: mode(`${c$1}.100`, darkActiveBg)(props) }
	};
});
const variantOutline$1 = defineStyle((props) => {
	const { colorScheme: c$1 } = props;
	const borderColor = mode(`gray.200`, `whiteAlpha.300`)(props);
	return {
		border: "1px solid",
		borderColor: c$1 === "gray" ? borderColor : "currentColor",
		".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
		".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
		...runIfFn(variantGhost, props)
	};
});
const accessibleColorMap = {
	yellow: {
		bg: "yellow.400",
		color: "black",
		hoverBg: "yellow.500",
		activeBg: "yellow.600"
	},
	cyan: {
		bg: "cyan.400",
		color: "black",
		hoverBg: "cyan.500",
		activeBg: "cyan.600"
	}
};
const variantSolid$1 = defineStyle((props) => {
	const { colorScheme: c$1 } = props;
	if (c$1 === "gray") {
		const bg2 = mode(`gray.100`, `whiteAlpha.200`)(props);
		return {
			bg: bg2,
			color: mode(`gray.800`, `whiteAlpha.900`)(props),
			_hover: {
				bg: mode(`gray.200`, `whiteAlpha.300`)(props),
				_disabled: { bg: bg2 }
			},
			_active: { bg: mode(`gray.300`, `whiteAlpha.400`)(props) }
		};
	}
	const { bg = `${c$1}.500`, color: color$1 = "white", hoverBg = `${c$1}.600`, activeBg = `${c$1}.700` } = accessibleColorMap[c$1] ?? {};
	const background$1 = mode(bg, `${c$1}.200`)(props);
	return {
		bg: background$1,
		color: mode(color$1, `gray.800`)(props),
		_hover: {
			bg: mode(hoverBg, `${c$1}.300`)(props),
			_disabled: { bg: background$1 }
		},
		_active: { bg: mode(activeBg, `${c$1}.400`)(props) }
	};
});
const variantLink = defineStyle((props) => {
	const { colorScheme: c$1 } = props;
	return {
		padding: 0,
		height: "auto",
		lineHeight: "normal",
		verticalAlign: "baseline",
		color: mode(`${c$1}.500`, `${c$1}.200`)(props),
		_hover: {
			textDecoration: "underline",
			_disabled: { textDecoration: "none" }
		},
		_active: { color: mode(`${c$1}.700`, `${c$1}.500`)(props) }
	};
});
const variantUnstyled$2 = defineStyle({
	bg: "none",
	color: "inherit",
	display: "inline",
	lineHeight: "inherit",
	m: "0",
	p: "0"
});
const variants$9 = {
	ghost: variantGhost,
	outline: variantOutline$1,
	solid: variantSolid$1,
	link: variantLink,
	unstyled: variantUnstyled$2
};
const sizes$21 = {
	lg: defineStyle({
		h: "12",
		minW: "12",
		fontSize: "lg",
		px: "6"
	}),
	md: defineStyle({
		h: "10",
		minW: "10",
		fontSize: "md",
		px: "4"
	}),
	sm: defineStyle({
		h: "8",
		minW: "8",
		fontSize: "sm",
		px: "3"
	}),
	xs: defineStyle({
		h: "6",
		minW: "6",
		fontSize: "xs",
		px: "2"
	})
};
const buttonTheme = defineStyleConfig({
	baseStyle: baseStyle$36,
	variants: variants$9,
	sizes: sizes$21,
	defaultProps: {
		variant: "solid",
		size: "md",
		colorScheme: "gray"
	}
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/card.mjs
const { definePartsStyle: definePartsStyle$21, defineMultiStyleConfig: defineMultiStyleConfig$21 } = createMultiStyleConfigHelpers(cardAnatomy.keys);
const $bg$13 = cssVar$1("card-bg");
const $padding$1 = cssVar$1("card-padding");
const $shadow$3 = cssVar$1("card-shadow");
const $radius = cssVar$1("card-radius");
const $border$2 = cssVar$1("card-border-width", "0");
const $borderColor = cssVar$1("card-border-color");
const baseStyle$35 = definePartsStyle$21({
	container: {
		[$bg$13.variable]: "colors.chakra-body-bg",
		backgroundColor: $bg$13.reference,
		boxShadow: $shadow$3.reference,
		borderRadius: $radius.reference,
		color: "chakra-body-text",
		borderWidth: $border$2.reference,
		borderColor: $borderColor.reference
	},
	body: {
		padding: $padding$1.reference,
		flex: "1 1 0%"
	},
	header: { padding: $padding$1.reference },
	footer: { padding: $padding$1.reference }
});
const sizes$20 = {
	sm: definePartsStyle$21({ container: {
		[$radius.variable]: "radii.base",
		[$padding$1.variable]: "space.3"
	} }),
	md: definePartsStyle$21({ container: {
		[$radius.variable]: "radii.md",
		[$padding$1.variable]: "space.5"
	} }),
	lg: definePartsStyle$21({ container: {
		[$radius.variable]: "radii.xl",
		[$padding$1.variable]: "space.7"
	} })
};
const variants$8 = {
	elevated: definePartsStyle$21({ container: {
		[$shadow$3.variable]: "shadows.base",
		_dark: { [$bg$13.variable]: "colors.gray.700" }
	} }),
	outline: definePartsStyle$21({ container: {
		[$border$2.variable]: "1px",
		[$borderColor.variable]: "colors.chakra-border-color"
	} }),
	filled: definePartsStyle$21({ container: { [$bg$13.variable]: "colors.chakra-subtle-bg" } }),
	unstyled: {
		body: { [$padding$1.variable]: 0 },
		header: { [$padding$1.variable]: 0 },
		footer: { [$padding$1.variable]: 0 }
	}
};
const cardTheme = defineMultiStyleConfig$21({
	baseStyle: baseStyle$35,
	variants: variants$8,
	sizes: sizes$20,
	defaultProps: {
		variant: "elevated",
		size: "md"
	}
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/checkbox.mjs
const { definePartsStyle: definePartsStyle$20, defineMultiStyleConfig: defineMultiStyleConfig$20 } = createMultiStyleConfigHelpers(checkboxAnatomy.keys);
const $size$3 = cssVar$1("checkbox-size");
const baseStyleControl$1 = defineStyle((props) => {
	const { colorScheme: c$1 } = props;
	return {
		w: $size$3.reference,
		h: $size$3.reference,
		transitionProperty: "box-shadow",
		transitionDuration: "normal",
		border: "2px solid",
		borderRadius: "sm",
		borderColor: "inherit",
		color: "white",
		_checked: {
			bg: mode(`${c$1}.500`, `${c$1}.200`)(props),
			borderColor: mode(`${c$1}.500`, `${c$1}.200`)(props),
			color: mode("white", "gray.900")(props),
			_hover: {
				bg: mode(`${c$1}.600`, `${c$1}.300`)(props),
				borderColor: mode(`${c$1}.600`, `${c$1}.300`)(props)
			},
			_disabled: {
				borderColor: mode("gray.200", "transparent")(props),
				bg: mode("gray.200", "whiteAlpha.300")(props),
				color: mode("gray.500", "whiteAlpha.500")(props)
			}
		},
		_indeterminate: {
			bg: mode(`${c$1}.500`, `${c$1}.200`)(props),
			borderColor: mode(`${c$1}.500`, `${c$1}.200`)(props),
			color: mode("white", "gray.900")(props)
		},
		_disabled: {
			bg: mode("gray.100", "whiteAlpha.100")(props),
			borderColor: mode("gray.100", "transparent")(props)
		},
		_focusVisible: { boxShadow: "outline" },
		_invalid: { borderColor: mode("red.500", "red.300")(props) }
	};
});
const baseStyleContainer$2 = defineStyle({ _disabled: { cursor: "not-allowed" } });
const baseStyleLabel$3 = defineStyle({
	userSelect: "none",
	_disabled: { opacity: .4 }
});
const baseStyleIcon$5 = defineStyle({
	transitionProperty: "transform",
	transitionDuration: "normal"
});
const baseStyle$34 = definePartsStyle$20((props) => ({
	icon: baseStyleIcon$5,
	container: baseStyleContainer$2,
	control: runIfFn(baseStyleControl$1, props),
	label: baseStyleLabel$3
}));
const sizes$19 = {
	sm: definePartsStyle$20({
		control: { [$size$3.variable]: "sizes.3" },
		label: { fontSize: "sm" },
		icon: { fontSize: "3xs" }
	}),
	md: definePartsStyle$20({
		control: { [$size$3.variable]: "sizes.4" },
		label: { fontSize: "md" },
		icon: { fontSize: "2xs" }
	}),
	lg: definePartsStyle$20({
		control: { [$size$3.variable]: "sizes.5" },
		label: { fontSize: "lg" },
		icon: { fontSize: "2xs" }
	})
};
const checkboxTheme = defineMultiStyleConfig$20({
	baseStyle: baseStyle$34,
	sizes: sizes$19,
	defaultProps: {
		size: "md",
		colorScheme: "blue"
	}
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/close-button.mjs
const $size$2 = cssVar("close-button-size");
const $bg$12 = cssVar("close-button-bg");
const baseStyle$33 = defineStyle({
	w: [$size$2.reference],
	h: [$size$2.reference],
	borderRadius: "md",
	transitionProperty: "common",
	transitionDuration: "normal",
	_disabled: {
		opacity: .4,
		cursor: "not-allowed",
		boxShadow: "none"
	},
	_hover: {
		[$bg$12.variable]: "colors.blackAlpha.100",
		_dark: { [$bg$12.variable]: "colors.whiteAlpha.100" }
	},
	_active: {
		[$bg$12.variable]: "colors.blackAlpha.200",
		_dark: { [$bg$12.variable]: "colors.whiteAlpha.200" }
	},
	_focusVisible: { boxShadow: "outline" },
	bg: $bg$12.reference
});
const sizes$18 = {
	lg: defineStyle({
		[$size$2.variable]: "sizes.10",
		fontSize: "md"
	}),
	md: defineStyle({
		[$size$2.variable]: "sizes.8",
		fontSize: "xs"
	}),
	sm: defineStyle({
		[$size$2.variable]: "sizes.6",
		fontSize: "2xs"
	})
};
const closeButtonTheme = defineStyleConfig({
	baseStyle: baseStyle$33,
	sizes: sizes$18,
	defaultProps: { size: "md" }
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/code.mjs
const { variants: variants$7, defaultProps } = badgeTheme;
const baseStyle$32 = defineStyle({
	fontFamily: "mono",
	fontSize: "sm",
	px: "0.2em",
	borderRadius: "sm",
	bg: vars.bg.reference,
	color: vars.color.reference,
	boxShadow: vars.shadow.reference
});
const codeTheme = defineStyleConfig({
	baseStyle: baseStyle$32,
	variants: variants$7,
	defaultProps
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/container.mjs
const baseStyle$31 = defineStyle({
	w: "100%",
	mx: "auto",
	maxW: "prose",
	px: "4"
});
const containerTheme = defineStyleConfig({ baseStyle: baseStyle$31 });

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/divider.mjs
const baseStyle$30 = defineStyle({
	opacity: .6,
	borderColor: "inherit"
});
const variantSolid = defineStyle({ borderStyle: "solid" });
const variantDashed = defineStyle({ borderStyle: "dashed" });
const variants$6 = {
	solid: variantSolid,
	dashed: variantDashed
};
const dividerTheme = defineStyleConfig({
	baseStyle: baseStyle$30,
	variants: variants$6,
	defaultProps: { variant: "solid" }
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/drawer.mjs
const { definePartsStyle: definePartsStyle$19, defineMultiStyleConfig: defineMultiStyleConfig$19 } = createMultiStyleConfigHelpers(drawerAnatomy.keys);
const $bg$11 = cssVar$1("drawer-bg");
const $bs = cssVar$1("drawer-box-shadow");
function getSize$2(value) {
	if (value === "full") return definePartsStyle$19({ dialog: {
		maxW: "100vw",
		h: "100vh"
	} });
	return definePartsStyle$19({ dialog: { maxW: value } });
}
const baseStyleOverlay$1 = defineStyle({
	bg: "blackAlpha.600",
	zIndex: "modal"
});
const baseStyleDialogContainer$1 = defineStyle({
	display: "flex",
	zIndex: "modal",
	justifyContent: "center"
});
const baseStyleDialog$1 = defineStyle((props) => {
	const { isFullHeight } = props;
	return {
		...isFullHeight && { height: "100vh" },
		zIndex: "modal",
		maxH: "100vh",
		color: "inherit",
		[$bg$11.variable]: "colors.white",
		[$bs.variable]: "shadows.lg",
		_dark: {
			[$bg$11.variable]: "colors.gray.700",
			[$bs.variable]: "shadows.dark-lg"
		},
		bg: $bg$11.reference,
		boxShadow: $bs.reference
	};
});
const baseStyleHeader$2 = defineStyle({
	px: "6",
	py: "4",
	fontSize: "xl",
	fontWeight: "semibold"
});
const baseStyleCloseButton$3 = defineStyle({
	position: "absolute",
	top: "2",
	insetEnd: "3"
});
const baseStyleBody$2 = defineStyle({
	px: "6",
	py: "2",
	flex: "1",
	overflow: "auto"
});
const baseStyleFooter$2 = defineStyle({
	px: "6",
	py: "4"
});
const baseStyle$29 = definePartsStyle$19((props) => ({
	overlay: baseStyleOverlay$1,
	dialogContainer: baseStyleDialogContainer$1,
	dialog: runIfFn(baseStyleDialog$1, props),
	header: baseStyleHeader$2,
	closeButton: baseStyleCloseButton$3,
	body: baseStyleBody$2,
	footer: baseStyleFooter$2
}));
const sizes$17 = {
	xs: getSize$2("xs"),
	sm: getSize$2("md"),
	md: getSize$2("lg"),
	lg: getSize$2("2xl"),
	xl: getSize$2("4xl"),
	full: getSize$2("full")
};
const drawerTheme = defineMultiStyleConfig$19({
	baseStyle: baseStyle$29,
	sizes: sizes$17,
	defaultProps: { size: "xs" }
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/editable.mjs
const { definePartsStyle: definePartsStyle$18, defineMultiStyleConfig: defineMultiStyleConfig$18 } = createMultiStyleConfigHelpers(editableAnatomy.keys);
const baseStylePreview = defineStyle({
	borderRadius: "md",
	py: "1",
	transitionProperty: "common",
	transitionDuration: "normal"
});
const baseStyleInput = defineStyle({
	borderRadius: "md",
	py: "1",
	transitionProperty: "common",
	transitionDuration: "normal",
	width: "full",
	_focusVisible: { boxShadow: "outline" },
	_placeholder: { opacity: .6 }
});
const baseStyleTextarea = defineStyle({
	borderRadius: "md",
	py: "1",
	transitionProperty: "common",
	transitionDuration: "normal",
	width: "full",
	_focusVisible: { boxShadow: "outline" },
	_placeholder: { opacity: .6 }
});
const baseStyle$28 = definePartsStyle$18({
	preview: baseStylePreview,
	input: baseStyleInput,
	textarea: baseStyleTextarea
});
const editableTheme = defineMultiStyleConfig$18({ baseStyle: baseStyle$28 });

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/form-control.mjs
const { definePartsStyle: definePartsStyle$17, defineMultiStyleConfig: defineMultiStyleConfig$17 } = createMultiStyleConfigHelpers(formAnatomy.keys);
const $fg$4 = cssVar$1("form-control-color");
const baseStyleRequiredIndicator = defineStyle({
	marginStart: "1",
	[$fg$4.variable]: "colors.red.500",
	_dark: { [$fg$4.variable]: "colors.red.300" },
	color: $fg$4.reference
});
const baseStyleHelperText = defineStyle({
	mt: "2",
	[$fg$4.variable]: "colors.gray.600",
	_dark: { [$fg$4.variable]: "colors.whiteAlpha.600" },
	color: $fg$4.reference,
	lineHeight: "normal",
	fontSize: "sm"
});
const baseStyle$27 = definePartsStyle$17({
	container: {
		width: "100%",
		position: "relative"
	},
	requiredIndicator: baseStyleRequiredIndicator,
	helperText: baseStyleHelperText
});
const formTheme = defineMultiStyleConfig$17({ baseStyle: baseStyle$27 });

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/form-error.mjs
const { definePartsStyle: definePartsStyle$16, defineMultiStyleConfig: defineMultiStyleConfig$16 } = createMultiStyleConfigHelpers(formErrorAnatomy.keys);
const $fg$3 = cssVar$1("form-error-color");
const baseStyleText = defineStyle({
	[$fg$3.variable]: `colors.red.500`,
	_dark: { [$fg$3.variable]: `colors.red.300` },
	color: $fg$3.reference,
	mt: "2",
	fontSize: "sm",
	lineHeight: "normal"
});
const baseStyleIcon$4 = defineStyle({
	marginEnd: "0.5em",
	[$fg$3.variable]: `colors.red.500`,
	_dark: { [$fg$3.variable]: `colors.red.300` },
	color: $fg$3.reference
});
const baseStyle$26 = definePartsStyle$16({
	text: baseStyleText,
	icon: baseStyleIcon$4
});
const formErrorTheme = defineMultiStyleConfig$16({ baseStyle: baseStyle$26 });

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/form-label.mjs
const baseStyle$25 = defineStyle({
	fontSize: "md",
	marginEnd: "3",
	mb: "2",
	fontWeight: "medium",
	transitionProperty: "common",
	transitionDuration: "normal",
	opacity: 1,
	_disabled: { opacity: .4 }
});
const formLabelTheme = defineStyleConfig({ baseStyle: baseStyle$25 });

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/heading.mjs
const baseStyle$24 = defineStyle({
	fontFamily: "heading",
	fontWeight: "bold"
});
const sizes$16 = {
	"4xl": defineStyle({
		fontSize: [
			"6xl",
			null,
			"7xl"
		],
		lineHeight: 1
	}),
	"3xl": defineStyle({
		fontSize: [
			"5xl",
			null,
			"6xl"
		],
		lineHeight: 1
	}),
	"2xl": defineStyle({
		fontSize: [
			"4xl",
			null,
			"5xl"
		],
		lineHeight: [
			1.2,
			null,
			1
		]
	}),
	xl: defineStyle({
		fontSize: [
			"3xl",
			null,
			"4xl"
		],
		lineHeight: [
			1.33,
			null,
			1.2
		]
	}),
	lg: defineStyle({
		fontSize: [
			"2xl",
			null,
			"3xl"
		],
		lineHeight: [
			1.33,
			null,
			1.2
		]
	}),
	md: defineStyle({
		fontSize: "xl",
		lineHeight: 1.2
	}),
	sm: defineStyle({
		fontSize: "md",
		lineHeight: 1.2
	}),
	xs: defineStyle({
		fontSize: "sm",
		lineHeight: 1.2
	})
};
const headingTheme = defineStyleConfig({
	baseStyle: baseStyle$24,
	sizes: sizes$16,
	defaultProps: { size: "xl" }
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/input.mjs
const { definePartsStyle: definePartsStyle$15, defineMultiStyleConfig: defineMultiStyleConfig$15 } = createMultiStyleConfigHelpers(inputAnatomy.keys);
const $height$1 = cssVar$1("input-height");
const $fontSize$1 = cssVar$1("input-font-size");
const $padding = cssVar$1("input-padding");
const $borderRadius = cssVar$1("input-border-radius");
const baseStyle$23 = definePartsStyle$15({
	addon: {
		height: $height$1.reference,
		fontSize: $fontSize$1.reference,
		px: $padding.reference,
		borderRadius: $borderRadius.reference
	},
	field: {
		width: "100%",
		height: $height$1.reference,
		fontSize: $fontSize$1.reference,
		px: $padding.reference,
		borderRadius: $borderRadius.reference,
		minWidth: 0,
		outline: 0,
		position: "relative",
		appearance: "none",
		transitionProperty: "common",
		transitionDuration: "normal",
		_disabled: {
			opacity: .4,
			cursor: "not-allowed"
		}
	}
});
const size = {
	lg: defineStyle({
		[$fontSize$1.variable]: "fontSizes.lg",
		[$padding.variable]: "space.4",
		[$borderRadius.variable]: "radii.md",
		[$height$1.variable]: "sizes.12"
	}),
	md: defineStyle({
		[$fontSize$1.variable]: "fontSizes.md",
		[$padding.variable]: "space.4",
		[$borderRadius.variable]: "radii.md",
		[$height$1.variable]: "sizes.10"
	}),
	sm: defineStyle({
		[$fontSize$1.variable]: "fontSizes.sm",
		[$padding.variable]: "space.3",
		[$borderRadius.variable]: "radii.sm",
		[$height$1.variable]: "sizes.8"
	}),
	xs: defineStyle({
		[$fontSize$1.variable]: "fontSizes.xs",
		[$padding.variable]: "space.2",
		[$borderRadius.variable]: "radii.sm",
		[$height$1.variable]: "sizes.6"
	})
};
const sizes$15 = {
	lg: definePartsStyle$15({
		field: size.lg,
		group: size.lg
	}),
	md: definePartsStyle$15({
		field: size.md,
		group: size.md
	}),
	sm: definePartsStyle$15({
		field: size.sm,
		group: size.sm
	}),
	xs: definePartsStyle$15({
		field: size.xs,
		group: size.xs
	})
};
function getDefaults(props) {
	const { focusBorderColor: fc, errorBorderColor: ec } = props;
	return {
		focusBorderColor: fc || mode("blue.500", "blue.300")(props),
		errorBorderColor: ec || mode("red.500", "red.300")(props)
	};
}
const variantOutline = definePartsStyle$15((props) => {
	const { theme: theme$1 } = props;
	const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
	return {
		field: {
			border: "1px solid",
			borderColor: "inherit",
			bg: "inherit",
			_hover: { borderColor: mode("gray.300", "whiteAlpha.400")(props) },
			_readOnly: {
				boxShadow: "none !important",
				userSelect: "all"
			},
			_invalid: {
				borderColor: getColor(theme$1, ec),
				boxShadow: `0 0 0 1px ${getColor(theme$1, ec)}`
			},
			_focusVisible: {
				zIndex: 1,
				borderColor: getColor(theme$1, fc),
				boxShadow: `0 0 0 1px ${getColor(theme$1, fc)}`
			}
		},
		addon: {
			border: "1px solid",
			borderColor: mode("inherit", "whiteAlpha.50")(props),
			bg: mode("gray.100", "whiteAlpha.300")(props)
		}
	};
});
const variantFilled = definePartsStyle$15((props) => {
	const { theme: theme$1 } = props;
	const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
	return {
		field: {
			border: "2px solid",
			borderColor: "transparent",
			bg: mode("gray.100", "whiteAlpha.50")(props),
			_hover: { bg: mode("gray.200", "whiteAlpha.100")(props) },
			_readOnly: {
				boxShadow: "none !important",
				userSelect: "all"
			},
			_invalid: { borderColor: getColor(theme$1, ec) },
			_focusVisible: {
				bg: "transparent",
				borderColor: getColor(theme$1, fc)
			}
		},
		addon: {
			border: "2px solid",
			borderColor: "transparent",
			bg: mode("gray.100", "whiteAlpha.50")(props)
		}
	};
});
const variantFlushed = definePartsStyle$15((props) => {
	const { theme: theme$1 } = props;
	const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
	return {
		field: {
			borderBottom: "1px solid",
			borderColor: "inherit",
			borderRadius: "0",
			px: "0",
			bg: "transparent",
			_readOnly: {
				boxShadow: "none !important",
				userSelect: "all"
			},
			_invalid: {
				borderColor: getColor(theme$1, ec),
				boxShadow: `0px 1px 0px 0px ${getColor(theme$1, ec)}`
			},
			_focusVisible: {
				borderColor: getColor(theme$1, fc),
				boxShadow: `0px 1px 0px 0px ${getColor(theme$1, fc)}`
			}
		},
		addon: {
			borderBottom: "2px solid",
			borderColor: "inherit",
			borderRadius: "0",
			px: "0",
			bg: "transparent"
		}
	};
});
const variantUnstyled$1 = definePartsStyle$15({
	field: {
		bg: "transparent",
		px: "0",
		height: "auto"
	},
	addon: {
		bg: "transparent",
		px: "0",
		height: "auto"
	}
});
const variants$5 = {
	outline: variantOutline,
	filled: variantFilled,
	flushed: variantFlushed,
	unstyled: variantUnstyled$1
};
const inputTheme = defineMultiStyleConfig$15({
	baseStyle: baseStyle$23,
	sizes: sizes$15,
	variants: variants$5,
	defaultProps: {
		size: "md",
		variant: "outline"
	}
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/kbd.mjs
const $bg$10 = cssVar$1("kbd-bg");
const baseStyle$22 = defineStyle({
	[$bg$10.variable]: "colors.gray.100",
	_dark: { [$bg$10.variable]: "colors.whiteAlpha.100" },
	bg: $bg$10.reference,
	borderRadius: "md",
	borderWidth: "1px",
	borderBottomWidth: "3px",
	fontSize: "0.8em",
	fontWeight: "bold",
	lineHeight: "normal",
	px: "0.4em",
	whiteSpace: "nowrap"
});
const kbdTheme = defineStyleConfig({ baseStyle: baseStyle$22 });

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/link.mjs
const baseStyle$21 = defineStyle({
	transitionProperty: "common",
	transitionDuration: "fast",
	transitionTimingFunction: "ease-out",
	cursor: "pointer",
	textDecoration: "none",
	outline: "none",
	color: "inherit",
	_hover: { textDecoration: "underline" },
	_focusVisible: { boxShadow: "outline" }
});
const linkTheme = defineStyleConfig({ baseStyle: baseStyle$21 });

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/list.mjs
const { defineMultiStyleConfig: defineMultiStyleConfig$14, definePartsStyle: definePartsStyle$14 } = createMultiStyleConfigHelpers(listAnatomy.keys);
const baseStyleIcon$3 = defineStyle({
	marginEnd: "2",
	display: "inline",
	verticalAlign: "text-bottom"
});
const baseStyle$20 = definePartsStyle$14({ icon: baseStyleIcon$3 });
const listTheme = defineMultiStyleConfig$14({ baseStyle: baseStyle$20 });

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/menu.mjs
const { defineMultiStyleConfig: defineMultiStyleConfig$13, definePartsStyle: definePartsStyle$13 } = createMultiStyleConfigHelpers(menuAnatomy.keys);
const $bg$9 = cssVar$1("menu-bg");
const $shadow$2 = cssVar$1("menu-shadow");
const baseStyleList = defineStyle({
	[$bg$9.variable]: "#fff",
	[$shadow$2.variable]: "shadows.sm",
	_dark: {
		[$bg$9.variable]: "colors.gray.700",
		[$shadow$2.variable]: "shadows.dark-lg"
	},
	color: "inherit",
	minW: "3xs",
	py: "2",
	zIndex: "dropdown",
	borderRadius: "md",
	borderWidth: "1px",
	bg: $bg$9.reference,
	boxShadow: $shadow$2.reference
});
const baseStyleItem = defineStyle({
	py: "1.5",
	px: "3",
	transitionProperty: "background",
	transitionDuration: "ultra-fast",
	transitionTimingFunction: "ease-in",
	_focus: {
		[$bg$9.variable]: "colors.gray.100",
		_dark: { [$bg$9.variable]: "colors.whiteAlpha.100" }
	},
	_active: {
		[$bg$9.variable]: "colors.gray.200",
		_dark: { [$bg$9.variable]: "colors.whiteAlpha.200" }
	},
	_expanded: {
		[$bg$9.variable]: "colors.gray.100",
		_dark: { [$bg$9.variable]: "colors.whiteAlpha.100" }
	},
	_disabled: {
		opacity: .4,
		cursor: "not-allowed"
	},
	bg: $bg$9.reference
});
const baseStyleGroupTitle = defineStyle({
	mx: 4,
	my: 2,
	fontWeight: "semibold",
	fontSize: "sm"
});
const baseStyleIcon$2 = defineStyle({
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0
});
const baseStyleCommand = defineStyle({ opacity: .6 });
const baseStyleDivider = defineStyle({
	border: 0,
	borderBottom: "1px solid",
	borderColor: "inherit",
	my: "2",
	opacity: .6
});
const baseStyleButton = defineStyle({
	transitionProperty: "common",
	transitionDuration: "normal"
});
const baseStyle$19 = definePartsStyle$13({
	button: baseStyleButton,
	list: baseStyleList,
	item: baseStyleItem,
	groupTitle: baseStyleGroupTitle,
	icon: baseStyleIcon$2,
	command: baseStyleCommand,
	divider: baseStyleDivider
});
const menuTheme = defineMultiStyleConfig$13({ baseStyle: baseStyle$19 });

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/modal.mjs
const { defineMultiStyleConfig: defineMultiStyleConfig$12, definePartsStyle: definePartsStyle$12 } = createMultiStyleConfigHelpers(modalAnatomy.keys);
const $bg$8 = cssVar$1("modal-bg");
const $shadow$1 = cssVar$1("modal-shadow");
const baseStyleOverlay = defineStyle({
	bg: "blackAlpha.600",
	zIndex: "modal"
});
const baseStyleDialogContainer = defineStyle((props) => {
	const { isCentered, scrollBehavior } = props;
	return {
		display: "flex",
		zIndex: "modal",
		justifyContent: "center",
		alignItems: isCentered ? "center" : "flex-start",
		overflow: scrollBehavior === "inside" ? "hidden" : "auto",
		overscrollBehaviorY: "none"
	};
});
const baseStyleDialog = defineStyle((props) => {
	const { isCentered, scrollBehavior } = props;
	return {
		borderRadius: "md",
		color: "inherit",
		my: isCentered ? "auto" : "16",
		mx: isCentered ? "auto" : void 0,
		zIndex: "modal",
		maxH: scrollBehavior === "inside" ? "calc(100% - 7.5rem)" : void 0,
		[$bg$8.variable]: "colors.white",
		[$shadow$1.variable]: "shadows.lg",
		_dark: {
			[$bg$8.variable]: "colors.gray.700",
			[$shadow$1.variable]: "shadows.dark-lg"
		},
		bg: $bg$8.reference,
		boxShadow: $shadow$1.reference
	};
});
const baseStyleHeader$1 = defineStyle({
	px: "6",
	py: "4",
	fontSize: "xl",
	fontWeight: "semibold"
});
const baseStyleCloseButton$2 = defineStyle({
	position: "absolute",
	top: "2",
	insetEnd: "3"
});
const baseStyleBody$1 = defineStyle((props) => {
	const { scrollBehavior } = props;
	return {
		px: "6",
		py: "2",
		flex: "1",
		overflow: scrollBehavior === "inside" ? "auto" : void 0
	};
});
const baseStyleFooter$1 = defineStyle({
	px: "6",
	py: "4"
});
const baseStyle$18 = definePartsStyle$12((props) => ({
	overlay: baseStyleOverlay,
	dialogContainer: runIfFn(baseStyleDialogContainer, props),
	dialog: runIfFn(baseStyleDialog, props),
	header: baseStyleHeader$1,
	closeButton: baseStyleCloseButton$2,
	body: runIfFn(baseStyleBody$1, props),
	footer: baseStyleFooter$1
}));
function getSize$1(value) {
	if (value === "full") return definePartsStyle$12({ dialog: {
		maxW: "100vw",
		minH: "$100vh",
		my: "0",
		borderRadius: "0"
	} });
	return definePartsStyle$12({ dialog: { maxW: value } });
}
const sizes$14 = {
	xs: getSize$1("xs"),
	sm: getSize$1("sm"),
	md: getSize$1("md"),
	lg: getSize$1("lg"),
	xl: getSize$1("xl"),
	"2xl": getSize$1("2xl"),
	"3xl": getSize$1("3xl"),
	"4xl": getSize$1("4xl"),
	"5xl": getSize$1("5xl"),
	"6xl": getSize$1("6xl"),
	full: getSize$1("full")
};
const modalTheme = defineMultiStyleConfig$12({
	baseStyle: baseStyle$18,
	sizes: sizes$14,
	defaultProps: { size: "md" }
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/foundations/typography.mjs
const typography = {
	letterSpacings: {
		tighter: "-0.05em",
		tight: "-0.025em",
		normal: "0",
		wide: "0.025em",
		wider: "0.05em",
		widest: "0.1em"
	},
	lineHeights: {
		normal: "normal",
		none: 1,
		shorter: 1.25,
		short: 1.375,
		base: 1.5,
		tall: 1.625,
		taller: "2",
		"3": ".75rem",
		"4": "1rem",
		"5": "1.25rem",
		"6": "1.5rem",
		"7": "1.75rem",
		"8": "2rem",
		"9": "2.25rem",
		"10": "2.5rem"
	},
	fontWeights: {
		hairline: 100,
		thin: 200,
		light: 300,
		normal: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
		extrabold: 800,
		black: 900
	},
	fonts: {
		heading: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
		body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
		mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`
	},
	fontSizes: {
		"3xs": "0.45rem",
		"2xs": "0.625rem",
		xs: "0.75rem",
		sm: "0.875rem",
		md: "1rem",
		lg: "1.125rem",
		xl: "1.25rem",
		"2xl": "1.5rem",
		"3xl": "1.875rem",
		"4xl": "2.25rem",
		"5xl": "3rem",
		"6xl": "3.75rem",
		"7xl": "4.5rem",
		"8xl": "6rem",
		"9xl": "8rem"
	}
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/number-input.mjs
const { defineMultiStyleConfig: defineMultiStyleConfig$11, definePartsStyle: definePartsStyle$11 } = createMultiStyleConfigHelpers(numberInputAnatomy.keys);
const $stepperWidth = cssVar("number-input-stepper-width");
const $inputPadding = cssVar("number-input-input-padding");
const inputPaddingValue = calc($stepperWidth).add("0.5rem").toString();
const $bg$7 = cssVar("number-input-bg");
const $fg$2 = cssVar("number-input-color");
const $border$1 = cssVar("number-input-border-color");
const baseStyleRoot$1 = defineStyle({
	[$stepperWidth.variable]: "sizes.6",
	[$inputPadding.variable]: inputPaddingValue
});
const baseStyleField$1 = defineStyle((props) => runIfFn(inputTheme.baseStyle, props)?.field ?? {});
const baseStyleStepperGroup = defineStyle({ width: $stepperWidth.reference });
const baseStyleStepper = defineStyle({
	borderStart: "1px solid",
	borderStartColor: $border$1.reference,
	color: $fg$2.reference,
	bg: $bg$7.reference,
	[$fg$2.variable]: "colors.chakra-body-text",
	[$border$1.variable]: "colors.chakra-border-color",
	_dark: {
		[$fg$2.variable]: "colors.whiteAlpha.800",
		[$border$1.variable]: "colors.whiteAlpha.300"
	},
	_active: {
		[$bg$7.variable]: "colors.gray.200",
		_dark: { [$bg$7.variable]: "colors.whiteAlpha.300" }
	},
	_disabled: {
		opacity: .4,
		cursor: "not-allowed"
	}
});
const baseStyle$17 = definePartsStyle$11((props) => ({
	root: baseStyleRoot$1,
	field: runIfFn(baseStyleField$1, props) ?? {},
	stepperGroup: baseStyleStepperGroup,
	stepper: baseStyleStepper
}));
function getSize(size$1) {
	const sizeStyle = inputTheme.sizes?.[size$1];
	const radius = {
		lg: "md",
		md: "md",
		sm: "sm",
		xs: "sm"
	};
	const _fontSize = sizeStyle.field?.fontSize ?? "md";
	const fontSize = typography.fontSizes[_fontSize];
	return definePartsStyle$11({
		field: {
			...sizeStyle.field,
			paddingInlineEnd: $inputPadding.reference,
			verticalAlign: "top"
		},
		stepper: {
			fontSize: calc(fontSize).multiply(.75).toString(),
			_first: { borderTopEndRadius: radius[size$1] },
			_last: {
				borderBottomEndRadius: radius[size$1],
				mt: "-1px",
				borderTopWidth: 1
			}
		}
	});
}
const sizes$13 = {
	xs: getSize("xs"),
	sm: getSize("sm"),
	md: getSize("md"),
	lg: getSize("lg")
};
const numberInputTheme = defineMultiStyleConfig$11({
	baseStyle: baseStyle$17,
	sizes: sizes$13,
	variants: inputTheme.variants,
	defaultProps: inputTheme.defaultProps
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/pin-input.mjs
const baseStyle$16 = defineStyle({
	...inputTheme.baseStyle?.field,
	textAlign: "center"
});
const sizes$12 = {
	lg: defineStyle({
		fontSize: "lg",
		w: 12,
		h: 12,
		borderRadius: "md"
	}),
	md: defineStyle({
		fontSize: "md",
		w: 10,
		h: 10,
		borderRadius: "md"
	}),
	sm: defineStyle({
		fontSize: "sm",
		w: 8,
		h: 8,
		borderRadius: "sm"
	}),
	xs: defineStyle({
		fontSize: "xs",
		w: 6,
		h: 6,
		borderRadius: "sm"
	})
};
const variants$4 = {
	outline: defineStyle((props) => runIfFn(inputTheme.variants?.outline, props)?.field ?? {}),
	flushed: defineStyle((props) => runIfFn(inputTheme.variants?.flushed, props)?.field ?? {}),
	filled: defineStyle((props) => runIfFn(inputTheme.variants?.filled, props)?.field ?? {}),
	unstyled: inputTheme.variants?.unstyled.field ?? {}
};
const pinInputTheme = defineStyleConfig({
	baseStyle: baseStyle$16,
	sizes: sizes$12,
	variants: variants$4,
	defaultProps: inputTheme.defaultProps
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/popover.mjs
const { defineMultiStyleConfig: defineMultiStyleConfig$10, definePartsStyle: definePartsStyle$10 } = createMultiStyleConfigHelpers(popoverAnatomy.keys);
const $popperBg = cssVar("popper-bg");
const $arrowBg$1 = cssVar("popper-arrow-bg");
const $arrowShadowColor = cssVar("popper-arrow-shadow-color");
const baseStylePopper = defineStyle({ zIndex: "popover" });
const baseStyleContent = defineStyle({
	[$popperBg.variable]: `colors.white`,
	bg: $popperBg.reference,
	[$arrowBg$1.variable]: $popperBg.reference,
	[$arrowShadowColor.variable]: `colors.gray.200`,
	_dark: {
		[$popperBg.variable]: `colors.gray.700`,
		[$arrowShadowColor.variable]: `colors.whiteAlpha.300`
	},
	width: "xs",
	border: "1px solid",
	borderColor: "inherit",
	borderRadius: "md",
	boxShadow: "sm",
	zIndex: "inherit",
	_focusVisible: {
		outline: 0,
		boxShadow: "outline"
	}
});
const baseStyleHeader = defineStyle({
	px: 3,
	py: 2,
	borderBottomWidth: "1px"
});
const baseStyleBody = defineStyle({
	px: 3,
	py: 2
});
const baseStyleFooter = defineStyle({
	px: 3,
	py: 2,
	borderTopWidth: "1px"
});
const baseStyleCloseButton$1 = defineStyle({
	position: "absolute",
	borderRadius: "md",
	top: 1,
	insetEnd: 2,
	padding: 2
});
const baseStyle$15 = definePartsStyle$10({
	popper: baseStylePopper,
	content: baseStyleContent,
	header: baseStyleHeader,
	body: baseStyleBody,
	footer: baseStyleFooter,
	closeButton: baseStyleCloseButton$1
});
const popoverTheme = defineMultiStyleConfig$10({ baseStyle: baseStyle$15 });

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/progress.mjs
const { defineMultiStyleConfig: defineMultiStyleConfig$9, definePartsStyle: definePartsStyle$9 } = createMultiStyleConfigHelpers(progressAnatomy.keys);
const filledStyle = defineStyle((props) => {
	const { colorScheme: c$1, theme: t$2, isIndeterminate, hasStripe } = props;
	const stripeStyle = mode(generateStripe(), generateStripe("1rem", "rgba(0,0,0,0.1)"))(props);
	const bgColor = mode(`${c$1}.500`, `${c$1}.200`)(props);
	const gradient = `linear-gradient(
    to right,
    transparent 0%,
    ${getColor(t$2, bgColor)} 50%,
    transparent 100%
  )`;
	const addStripe = !isIndeterminate && hasStripe;
	return {
		...addStripe && stripeStyle,
		...isIndeterminate ? { bgImage: gradient } : { bgColor }
	};
});
const baseStyleLabel$2 = defineStyle({
	lineHeight: "1",
	fontSize: "0.25em",
	fontWeight: "bold",
	color: "white"
});
const baseStyleTrack$2 = defineStyle((props) => {
	return { bg: mode("gray.100", "whiteAlpha.300")(props) };
});
const baseStyleFilledTrack$1 = defineStyle((props) => {
	return {
		transitionProperty: "common",
		transitionDuration: "slow",
		...filledStyle(props)
	};
});
const baseStyle$14 = definePartsStyle$9((props) => ({
	label: baseStyleLabel$2,
	filledTrack: baseStyleFilledTrack$1(props),
	track: baseStyleTrack$2(props)
}));
const sizes$11 = {
	xs: definePartsStyle$9({ track: { h: "1" } }),
	sm: definePartsStyle$9({ track: { h: "2" } }),
	md: definePartsStyle$9({ track: { h: "3" } }),
	lg: definePartsStyle$9({ track: { h: "4" } })
};
const progressTheme = defineMultiStyleConfig$9({
	sizes: sizes$11,
	baseStyle: baseStyle$14,
	defaultProps: {
		size: "md",
		colorScheme: "blue"
	}
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/radio.mjs
const { defineMultiStyleConfig: defineMultiStyleConfig$8, definePartsStyle: definePartsStyle$8 } = createMultiStyleConfigHelpers(radioAnatomy.keys);
const baseStyleControl = defineStyle((props) => {
	const controlStyle = runIfFn(checkboxTheme.baseStyle, props)?.control;
	return {
		...controlStyle,
		borderRadius: "full",
		_checked: {
			...controlStyle?.["_checked"],
			_before: {
				content: `""`,
				display: "inline-block",
				pos: "relative",
				w: "50%",
				h: "50%",
				borderRadius: "50%",
				bg: "currentColor"
			}
		}
	};
});
const baseStyle$13 = definePartsStyle$8((props) => ({
	label: checkboxTheme.baseStyle?.(props).label,
	container: checkboxTheme.baseStyle?.(props).container,
	control: baseStyleControl(props)
}));
const sizes$10 = {
	md: definePartsStyle$8({
		control: {
			w: "4",
			h: "4"
		},
		label: { fontSize: "md" }
	}),
	lg: definePartsStyle$8({
		control: {
			w: "5",
			h: "5"
		},
		label: { fontSize: "lg" }
	}),
	sm: definePartsStyle$8({
		control: {
			width: "3",
			height: "3"
		},
		label: { fontSize: "sm" }
	})
};
const radioTheme = defineMultiStyleConfig$8({
	baseStyle: baseStyle$13,
	sizes: sizes$10,
	defaultProps: {
		size: "md",
		colorScheme: "blue"
	}
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/select.mjs
const { defineMultiStyleConfig: defineMultiStyleConfig$7, definePartsStyle: definePartsStyle$7 } = createMultiStyleConfigHelpers(selectAnatomy.keys);
const $bg$6 = cssVar$1("select-bg");
const baseStyleField = defineStyle({
	...inputTheme.baseStyle?.field,
	appearance: "none",
	paddingBottom: "1px",
	lineHeight: "normal",
	bg: $bg$6.reference,
	[$bg$6.variable]: "colors.white",
	_dark: { [$bg$6.variable]: "colors.gray.700" },
	"> option, > optgroup": { bg: $bg$6.reference }
});
const baseStyleIcon$1 = defineStyle({
	width: "6",
	height: "100%",
	insetEnd: "2",
	position: "relative",
	color: "currentColor",
	fontSize: "xl",
	_disabled: { opacity: .5 }
});
const baseStyle$12 = definePartsStyle$7({
	field: baseStyleField,
	icon: baseStyleIcon$1
});
const iconSpacing = defineStyle({ paddingInlineEnd: "8" });
const sizes$9 = {
	lg: {
		...inputTheme.sizes?.lg,
		field: {
			...inputTheme.sizes?.lg.field,
			...iconSpacing
		}
	},
	md: {
		...inputTheme.sizes?.md,
		field: {
			...inputTheme.sizes?.md.field,
			...iconSpacing
		}
	},
	sm: {
		...inputTheme.sizes?.sm,
		field: {
			...inputTheme.sizes?.sm.field,
			...iconSpacing
		}
	},
	xs: {
		...inputTheme.sizes?.xs,
		field: {
			...inputTheme.sizes?.xs.field,
			...iconSpacing
		},
		icon: { insetEnd: "1" }
	}
};
const selectTheme = defineMultiStyleConfig$7({
	baseStyle: baseStyle$12,
	sizes: sizes$9,
	variants: inputTheme.variants,
	defaultProps: inputTheme.defaultProps
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/skeleton.mjs
const $startColor = cssVar$1("skeleton-start-color");
const $endColor = cssVar$1("skeleton-end-color");
const baseStyle$11 = defineStyle({
	[$startColor.variable]: "colors.gray.100",
	[$endColor.variable]: "colors.gray.400",
	_dark: {
		[$startColor.variable]: "colors.gray.800",
		[$endColor.variable]: "colors.gray.600"
	},
	background: $startColor.reference,
	borderColor: $endColor.reference,
	opacity: .7,
	borderRadius: "sm"
});
const skeletonTheme = defineStyleConfig({ baseStyle: baseStyle$11 });

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/skip-link.mjs
const $bg$5 = cssVar$1("skip-link-bg");
const baseStyle$10 = defineStyle({
	borderRadius: "md",
	fontWeight: "semibold",
	_focusVisible: {
		boxShadow: "outline",
		padding: "4",
		position: "fixed",
		top: "6",
		insetStart: "6",
		[$bg$5.variable]: "colors.white",
		_dark: { [$bg$5.variable]: "colors.gray.700" },
		bg: $bg$5.reference
	}
});
const skipLinkTheme = defineStyleConfig({ baseStyle: baseStyle$10 });

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/slider.mjs
const { defineMultiStyleConfig: defineMultiStyleConfig$6, definePartsStyle: definePartsStyle$6 } = createMultiStyleConfigHelpers(sliderAnatomy.keys);
const $thumbSize = cssVar$1("slider-thumb-size");
const $trackSize = cssVar$1("slider-track-size");
const $bg$4 = cssVar$1("slider-bg");
const baseStyleContainer$1 = defineStyle((props) => {
	const { orientation } = props;
	return {
		display: "inline-block",
		position: "relative",
		cursor: "pointer",
		_disabled: {
			opacity: .6,
			cursor: "default",
			pointerEvents: "none"
		},
		...orient({
			orientation,
			vertical: {
				h: "100%",
				px: calc$1($thumbSize.reference).divide(2).toString()
			},
			horizontal: {
				w: "100%",
				py: calc$1($thumbSize.reference).divide(2).toString()
			}
		})
	};
});
const baseStyleTrack$1 = defineStyle((props) => {
	const orientationStyles = orient({
		orientation: props.orientation,
		horizontal: { h: $trackSize.reference },
		vertical: { w: $trackSize.reference }
	});
	return {
		...orientationStyles,
		overflow: "hidden",
		borderRadius: "sm",
		[$bg$4.variable]: "colors.gray.200",
		_dark: { [$bg$4.variable]: "colors.whiteAlpha.200" },
		_disabled: {
			[$bg$4.variable]: "colors.gray.300",
			_dark: { [$bg$4.variable]: "colors.whiteAlpha.300" }
		},
		bg: $bg$4.reference
	};
});
const baseStyleThumb$1 = defineStyle((props) => {
	const { orientation } = props;
	const orientationStyle = orient({
		orientation,
		vertical: { left: "50%" },
		horizontal: { top: "50%" }
	});
	return {
		...orientationStyle,
		w: $thumbSize.reference,
		h: $thumbSize.reference,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		position: "absolute",
		outline: 0,
		zIndex: 1,
		borderRadius: "full",
		bg: "white",
		boxShadow: "base",
		border: "1px solid",
		borderColor: "transparent",
		transitionProperty: "transform",
		transitionDuration: "normal",
		_focusVisible: { boxShadow: "outline" },
		_active: { "--slider-thumb-scale": `1.15` },
		_disabled: { bg: "gray.300" }
	};
});
const baseStyleFilledTrack = defineStyle((props) => {
	const { colorScheme: c$1 } = props;
	return {
		width: "inherit",
		height: "inherit",
		[$bg$4.variable]: `colors.${c$1}.500`,
		_dark: { [$bg$4.variable]: `colors.${c$1}.200` },
		bg: $bg$4.reference
	};
});
const baseStyle$9 = definePartsStyle$6((props) => ({
	container: baseStyleContainer$1(props),
	track: baseStyleTrack$1(props),
	thumb: baseStyleThumb$1(props),
	filledTrack: baseStyleFilledTrack(props)
}));
const sizeLg = definePartsStyle$6({ container: {
	[$thumbSize.variable]: `sizes.4`,
	[$trackSize.variable]: `sizes.1`
} });
const sizeMd = definePartsStyle$6({ container: {
	[$thumbSize.variable]: `sizes.3.5`,
	[$trackSize.variable]: `sizes.1`
} });
const sizeSm = definePartsStyle$6({ container: {
	[$thumbSize.variable]: `sizes.2.5`,
	[$trackSize.variable]: `sizes.0.5`
} });
const sizes$8 = {
	lg: sizeLg,
	md: sizeMd,
	sm: sizeSm
};
const sliderTheme = defineMultiStyleConfig$6({
	baseStyle: baseStyle$9,
	sizes: sizes$8,
	defaultProps: {
		size: "md",
		colorScheme: "blue"
	}
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/spinner.mjs
const $size$1 = cssVar("spinner-size");
const baseStyle$8 = defineStyle({
	width: [$size$1.reference],
	height: [$size$1.reference]
});
const sizes$7 = {
	xs: defineStyle({ [$size$1.variable]: "sizes.3" }),
	sm: defineStyle({ [$size$1.variable]: "sizes.4" }),
	md: defineStyle({ [$size$1.variable]: "sizes.6" }),
	lg: defineStyle({ [$size$1.variable]: "sizes.8" }),
	xl: defineStyle({ [$size$1.variable]: "sizes.12" })
};
const spinnerTheme = defineStyleConfig({
	baseStyle: baseStyle$8,
	sizes: sizes$7,
	defaultProps: { size: "md" }
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/stat.mjs
const { defineMultiStyleConfig: defineMultiStyleConfig$5, definePartsStyle: definePartsStyle$5 } = createMultiStyleConfigHelpers(statAnatomy.keys);
const baseStyleLabel$1 = defineStyle({ fontWeight: "medium" });
const baseStyleHelpText = defineStyle({
	opacity: .8,
	marginBottom: "2"
});
const baseStyleNumber = defineStyle({
	verticalAlign: "baseline",
	fontWeight: "semibold"
});
const baseStyleIcon = defineStyle({
	marginEnd: 1,
	w: "3.5",
	h: "3.5",
	verticalAlign: "middle"
});
const baseStyle$7 = definePartsStyle$5({
	container: {},
	label: baseStyleLabel$1,
	helpText: baseStyleHelpText,
	number: baseStyleNumber,
	icon: baseStyleIcon
});
const sizes$6 = { md: definePartsStyle$5({
	label: { fontSize: "sm" },
	helpText: { fontSize: "sm" },
	number: { fontSize: "2xl" }
}) };
const statTheme = defineMultiStyleConfig$5({
	baseStyle: baseStyle$7,
	sizes: sizes$6,
	defaultProps: { size: "md" }
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/stepper.mjs
const { defineMultiStyleConfig: defineMultiStyleConfig$4, definePartsStyle: definePartsStyle$4 } = createMultiStyleConfigHelpers([
	"stepper",
	"step",
	"title",
	"description",
	"indicator",
	"separator",
	"icon",
	"number"
]);
const $size = cssVar$1("stepper-indicator-size");
const $iconSize = cssVar$1("stepper-icon-size");
const $titleFontSize = cssVar$1("stepper-title-font-size");
const $descFontSize = cssVar$1("stepper-description-font-size");
const $accentColor = cssVar$1("stepper-accent-color");
const baseStyle$6 = definePartsStyle$4(({ colorScheme: c$1 }) => ({
	stepper: {
		display: "flex",
		justifyContent: "space-between",
		gap: "4",
		"&[data-orientation=vertical]": {
			flexDirection: "column",
			alignItems: "flex-start"
		},
		"&[data-orientation=horizontal]": {
			flexDirection: "row",
			alignItems: "center"
		},
		[$accentColor.variable]: `colors.${c$1}.500`,
		_dark: { [$accentColor.variable]: `colors.${c$1}.200` }
	},
	title: {
		fontSize: $titleFontSize.reference,
		fontWeight: "medium"
	},
	description: {
		fontSize: $descFontSize.reference,
		color: "chakra-subtle-text"
	},
	number: { fontSize: $titleFontSize.reference },
	step: {
		flexShrink: 0,
		position: "relative",
		display: "flex",
		gap: "2",
		"&[data-orientation=horizontal]": { alignItems: "center" },
		flex: "1",
		"&:last-of-type:not([data-stretch])": { flex: "initial" }
	},
	icon: {
		flexShrink: 0,
		width: $iconSize.reference,
		height: $iconSize.reference
	},
	indicator: {
		flexShrink: 0,
		borderRadius: "full",
		width: $size.reference,
		height: $size.reference,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		"&[data-status=active]": {
			borderWidth: "2px",
			borderColor: $accentColor.reference
		},
		"&[data-status=complete]": {
			bg: $accentColor.reference,
			color: "chakra-inverse-text"
		},
		"&[data-status=incomplete]": { borderWidth: "2px" }
	},
	separator: {
		bg: "chakra-border-color",
		flex: "1",
		"&[data-status=complete]": { bg: $accentColor.reference },
		"&[data-orientation=horizontal]": {
			width: "100%",
			height: "2px",
			marginStart: "2"
		},
		"&[data-orientation=vertical]": {
			width: "2px",
			position: "absolute",
			height: "100%",
			maxHeight: `calc(100% - ${$size.reference} - 8px)`,
			top: `calc(${$size.reference} + 4px)`,
			insetStart: `calc(${$size.reference} / 2 - 1px)`
		}
	}
}));
const stepperTheme = defineMultiStyleConfig$4({
	baseStyle: baseStyle$6,
	sizes: {
		xs: definePartsStyle$4({ stepper: {
			[$size.variable]: "sizes.4",
			[$iconSize.variable]: "sizes.3",
			[$titleFontSize.variable]: "fontSizes.xs",
			[$descFontSize.variable]: "fontSizes.xs"
		} }),
		sm: definePartsStyle$4({ stepper: {
			[$size.variable]: "sizes.6",
			[$iconSize.variable]: "sizes.4",
			[$titleFontSize.variable]: "fontSizes.sm",
			[$descFontSize.variable]: "fontSizes.xs"
		} }),
		md: definePartsStyle$4({ stepper: {
			[$size.variable]: "sizes.8",
			[$iconSize.variable]: "sizes.5",
			[$titleFontSize.variable]: "fontSizes.md",
			[$descFontSize.variable]: "fontSizes.sm"
		} }),
		lg: definePartsStyle$4({ stepper: {
			[$size.variable]: "sizes.10",
			[$iconSize.variable]: "sizes.6",
			[$titleFontSize.variable]: "fontSizes.lg",
			[$descFontSize.variable]: "fontSizes.md"
		} })
	},
	defaultProps: {
		size: "md",
		colorScheme: "blue"
	}
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/switch.mjs
const { defineMultiStyleConfig: defineMultiStyleConfig$3, definePartsStyle: definePartsStyle$3 } = createMultiStyleConfigHelpers(switchAnatomy.keys);
const $width = cssVar("switch-track-width");
const $height = cssVar("switch-track-height");
const $diff = cssVar("switch-track-diff");
const diffValue = calc.subtract($width, $height);
const $translateX = cssVar("switch-thumb-x");
const $bg$3 = cssVar("switch-bg");
const baseStyleTrack = defineStyle((props) => {
	const { colorScheme: c$1 } = props;
	return {
		borderRadius: "full",
		p: "0.5",
		width: [$width.reference],
		height: [$height.reference],
		transitionProperty: "common",
		transitionDuration: "fast",
		[$bg$3.variable]: "colors.gray.300",
		_dark: { [$bg$3.variable]: "colors.whiteAlpha.400" },
		_focusVisible: { boxShadow: "outline" },
		_disabled: {
			opacity: .4,
			cursor: "not-allowed"
		},
		_checked: {
			[$bg$3.variable]: `colors.${c$1}.500`,
			_dark: { [$bg$3.variable]: `colors.${c$1}.200` }
		},
		bg: $bg$3.reference
	};
});
const baseStyleThumb = defineStyle({
	bg: "white",
	transitionProperty: "transform",
	transitionDuration: "normal",
	borderRadius: "inherit",
	width: [$height.reference],
	height: [$height.reference],
	_checked: { transform: `translateX(${$translateX.reference})` }
});
const baseStyle$5 = definePartsStyle$3((props) => ({
	container: {
		[$diff.variable]: diffValue,
		[$translateX.variable]: $diff.reference,
		_rtl: { [$translateX.variable]: calc($diff).negate().toString() }
	},
	track: baseStyleTrack(props),
	thumb: baseStyleThumb
}));
const sizes$5 = {
	sm: definePartsStyle$3({ container: {
		[$width.variable]: "1.375rem",
		[$height.variable]: "sizes.3"
	} }),
	md: definePartsStyle$3({ container: {
		[$width.variable]: "1.875rem",
		[$height.variable]: "sizes.4"
	} }),
	lg: definePartsStyle$3({ container: {
		[$width.variable]: "2.875rem",
		[$height.variable]: "sizes.6"
	} })
};
const switchTheme = defineMultiStyleConfig$3({
	baseStyle: baseStyle$5,
	sizes: sizes$5,
	defaultProps: {
		size: "md",
		colorScheme: "blue"
	}
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/table.mjs
const { defineMultiStyleConfig: defineMultiStyleConfig$2, definePartsStyle: definePartsStyle$2 } = createMultiStyleConfigHelpers(tableAnatomy.keys);
const baseStyle$4 = definePartsStyle$2({
	table: {
		fontVariantNumeric: "lining-nums tabular-nums",
		borderCollapse: "collapse",
		width: "full"
	},
	th: {
		fontFamily: "heading",
		fontWeight: "bold",
		textTransform: "uppercase",
		letterSpacing: "wider",
		textAlign: "start"
	},
	td: { textAlign: "start" },
	caption: {
		mt: 4,
		fontFamily: "heading",
		textAlign: "center",
		fontWeight: "medium"
	}
});
const numericStyles = defineStyle({ "&[data-is-numeric=true]": { textAlign: "end" } });
const variantSimple = definePartsStyle$2((props) => {
	const { colorScheme: c$1 } = props;
	return {
		th: {
			color: mode("gray.600", "gray.400")(props),
			borderBottom: "1px",
			borderColor: mode(`${c$1}.100`, `${c$1}.700`)(props),
			...numericStyles
		},
		td: {
			borderBottom: "1px",
			borderColor: mode(`${c$1}.100`, `${c$1}.700`)(props),
			...numericStyles
		},
		caption: { color: mode("gray.600", "gray.100")(props) },
		tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } }
	};
});
const variantStripe = definePartsStyle$2((props) => {
	const { colorScheme: c$1 } = props;
	return {
		th: {
			color: mode("gray.600", "gray.400")(props),
			borderBottom: "1px",
			borderColor: mode(`${c$1}.100`, `${c$1}.700`)(props),
			...numericStyles
		},
		td: {
			borderBottom: "1px",
			borderColor: mode(`${c$1}.100`, `${c$1}.700`)(props),
			...numericStyles
		},
		caption: { color: mode("gray.600", "gray.100")(props) },
		tbody: { tr: { "&:nth-of-type(odd)": {
			"th, td": {
				borderBottomWidth: "1px",
				borderColor: mode(`${c$1}.100`, `${c$1}.700`)(props)
			},
			td: { background: mode(`${c$1}.100`, `${c$1}.700`)(props) }
		} } },
		tfoot: { tr: { "&:last-of-type": { th: { borderBottomWidth: 0 } } } }
	};
});
const variants$3 = {
	simple: variantSimple,
	striped: variantStripe,
	unstyled: defineStyle({})
};
const sizes$4 = {
	sm: definePartsStyle$2({
		th: {
			px: "4",
			py: "1",
			lineHeight: "4",
			fontSize: "xs"
		},
		td: {
			px: "4",
			py: "2",
			fontSize: "sm",
			lineHeight: "4"
		},
		caption: {
			px: "4",
			py: "2",
			fontSize: "xs"
		}
	}),
	md: definePartsStyle$2({
		th: {
			px: "6",
			py: "3",
			lineHeight: "4",
			fontSize: "xs"
		},
		td: {
			px: "6",
			py: "4",
			lineHeight: "5"
		},
		caption: {
			px: "6",
			py: "2",
			fontSize: "sm"
		}
	}),
	lg: definePartsStyle$2({
		th: {
			px: "8",
			py: "4",
			lineHeight: "5",
			fontSize: "sm"
		},
		td: {
			px: "8",
			py: "5",
			lineHeight: "6"
		},
		caption: {
			px: "6",
			py: "2",
			fontSize: "md"
		}
	})
};
const tableTheme = defineMultiStyleConfig$2({
	baseStyle: baseStyle$4,
	variants: variants$3,
	sizes: sizes$4,
	defaultProps: {
		variant: "simple",
		size: "md",
		colorScheme: "gray"
	}
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/tabs.mjs
const $fg$1 = cssVar$1("tabs-color");
const $bg$2 = cssVar$1("tabs-bg");
const $border = cssVar$1("tabs-border-color");
const { defineMultiStyleConfig: defineMultiStyleConfig$1, definePartsStyle: definePartsStyle$1 } = createMultiStyleConfigHelpers(tabsAnatomy.keys);
const baseStyleRoot = defineStyle((props) => {
	const { orientation } = props;
	return { display: orientation === "vertical" ? "flex" : "block" };
});
const baseStyleTab = defineStyle((props) => {
	const { isFitted } = props;
	return {
		flex: isFitted ? 1 : void 0,
		transitionProperty: "common",
		transitionDuration: "normal",
		_focusVisible: {
			zIndex: 1,
			boxShadow: "outline"
		},
		_disabled: {
			cursor: "not-allowed",
			opacity: .4
		}
	};
});
const baseStyleTablist = defineStyle((props) => {
	const { align = "start", orientation } = props;
	const alignments = {
		end: "flex-end",
		center: "center",
		start: "flex-start"
	};
	return {
		justifyContent: alignments[align],
		flexDirection: orientation === "vertical" ? "column" : "row"
	};
});
const baseStyleTabpanel = defineStyle({ p: 4 });
const baseStyle$3 = definePartsStyle$1((props) => ({
	root: baseStyleRoot(props),
	tab: baseStyleTab(props),
	tablist: baseStyleTablist(props),
	tabpanel: baseStyleTabpanel
}));
const sizes$3 = {
	sm: definePartsStyle$1({ tab: {
		py: 1,
		px: 4,
		fontSize: "sm"
	} }),
	md: definePartsStyle$1({ tab: {
		fontSize: "md",
		py: 2,
		px: 4
	} }),
	lg: definePartsStyle$1({ tab: {
		fontSize: "lg",
		py: 3,
		px: 4
	} })
};
const variantLine = definePartsStyle$1((props) => {
	const { colorScheme: c$1, orientation } = props;
	const isVertical = orientation === "vertical";
	const borderProp = isVertical ? "borderStart" : "borderBottom";
	const marginProp = isVertical ? "marginStart" : "marginBottom";
	return {
		tablist: {
			[borderProp]: "2px solid",
			borderColor: "inherit"
		},
		tab: {
			[borderProp]: "2px solid",
			borderColor: "transparent",
			[marginProp]: "-2px",
			_selected: {
				[$fg$1.variable]: `colors.${c$1}.600`,
				_dark: { [$fg$1.variable]: `colors.${c$1}.300` },
				borderColor: "currentColor"
			},
			_active: {
				[$bg$2.variable]: "colors.gray.200",
				_dark: { [$bg$2.variable]: "colors.whiteAlpha.300" }
			},
			_disabled: { _active: { bg: "none" } },
			color: $fg$1.reference,
			bg: $bg$2.reference
		}
	};
});
const variantEnclosed = definePartsStyle$1((props) => {
	const { colorScheme: c$1 } = props;
	return {
		tab: {
			borderTopRadius: "md",
			border: "1px solid",
			borderColor: "transparent",
			mb: "-1px",
			[$border.variable]: "transparent",
			_selected: {
				[$fg$1.variable]: `colors.${c$1}.600`,
				[$border.variable]: `colors.white`,
				_dark: {
					[$fg$1.variable]: `colors.${c$1}.300`,
					[$border.variable]: `colors.gray.800`
				},
				borderColor: "inherit",
				borderBottomColor: $border.reference
			},
			color: $fg$1.reference
		},
		tablist: {
			mb: "-1px",
			borderBottom: "1px solid",
			borderColor: "inherit"
		}
	};
});
const variantEnclosedColored = definePartsStyle$1((props) => {
	const { colorScheme: c$1 } = props;
	return {
		tab: {
			border: "1px solid",
			borderColor: "inherit",
			[$bg$2.variable]: "colors.gray.50",
			_dark: { [$bg$2.variable]: "colors.whiteAlpha.50" },
			mb: "-1px",
			_notLast: { marginEnd: "-1px" },
			_selected: {
				[$bg$2.variable]: "colors.white",
				[$fg$1.variable]: `colors.${c$1}.600`,
				_dark: {
					[$bg$2.variable]: "colors.gray.800",
					[$fg$1.variable]: `colors.${c$1}.300`
				},
				borderColor: "inherit",
				borderTopColor: "currentColor",
				borderBottomColor: "transparent"
			},
			color: $fg$1.reference,
			bg: $bg$2.reference
		},
		tablist: {
			mb: "-1px",
			borderBottom: "1px solid",
			borderColor: "inherit"
		}
	};
});
const variantSoftRounded = definePartsStyle$1((props) => {
	const { colorScheme: c$1, theme: theme$1 } = props;
	return { tab: {
		borderRadius: "full",
		fontWeight: "semibold",
		color: "gray.600",
		_selected: {
			color: getColor(theme$1, `${c$1}.700`),
			bg: getColor(theme$1, `${c$1}.100`)
		}
	} };
});
const variantSolidRounded = definePartsStyle$1((props) => {
	const { colorScheme: c$1 } = props;
	return { tab: {
		borderRadius: "full",
		fontWeight: "semibold",
		[$fg$1.variable]: "colors.gray.600",
		_dark: { [$fg$1.variable]: "inherit" },
		_selected: {
			[$fg$1.variable]: "colors.white",
			[$bg$2.variable]: `colors.${c$1}.600`,
			_dark: {
				[$fg$1.variable]: "colors.gray.800",
				[$bg$2.variable]: `colors.${c$1}.300`
			}
		},
		color: $fg$1.reference,
		bg: $bg$2.reference
	} };
});
const variantUnstyled = definePartsStyle$1({});
const variants$2 = {
	line: variantLine,
	enclosed: variantEnclosed,
	"enclosed-colored": variantEnclosedColored,
	"soft-rounded": variantSoftRounded,
	"solid-rounded": variantSolidRounded,
	unstyled: variantUnstyled
};
const tabsTheme = defineMultiStyleConfig$1({
	baseStyle: baseStyle$3,
	sizes: sizes$3,
	variants: variants$2,
	defaultProps: {
		size: "md",
		variant: "line",
		colorScheme: "blue"
	}
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/tag.mjs
const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(tagAnatomy.keys);
const $bg$1 = cssVar$1("tag-bg");
const $color = cssVar$1("tag-color");
const $shadow = cssVar$1("tag-shadow");
const $minH = cssVar$1("tag-min-height");
const $minW = cssVar$1("tag-min-width");
const $fontSize = cssVar$1("tag-font-size");
const $paddingX = cssVar$1("tag-padding-inline");
const baseStyleContainer = defineStyle({
	fontWeight: "medium",
	lineHeight: 1.2,
	outline: 0,
	[$color.variable]: vars.color.reference,
	[$bg$1.variable]: vars.bg.reference,
	[$shadow.variable]: vars.shadow.reference,
	color: $color.reference,
	bg: $bg$1.reference,
	boxShadow: $shadow.reference,
	borderRadius: "md",
	minH: $minH.reference,
	minW: $minW.reference,
	fontSize: $fontSize.reference,
	px: $paddingX.reference,
	_focusVisible: { [$shadow.variable]: "shadows.outline" }
});
const baseStyleLabel = defineStyle({
	lineHeight: 1.2,
	overflow: "visible"
});
const baseStyleCloseButton = defineStyle({
	fontSize: "lg",
	w: "5",
	h: "5",
	transitionProperty: "common",
	transitionDuration: "normal",
	borderRadius: "full",
	marginStart: "1.5",
	marginEnd: "-1",
	opacity: .5,
	_disabled: { opacity: .4 },
	_focusVisible: {
		boxShadow: "outline",
		bg: "rgba(0, 0, 0, 0.14)"
	},
	_hover: { opacity: .8 },
	_active: { opacity: 1 }
});
const baseStyle$2 = definePartsStyle({
	container: baseStyleContainer,
	label: baseStyleLabel,
	closeButton: baseStyleCloseButton
});
const sizes$2 = {
	sm: definePartsStyle({
		container: {
			[$minH.variable]: "sizes.5",
			[$minW.variable]: "sizes.5",
			[$fontSize.variable]: "fontSizes.xs",
			[$paddingX.variable]: "space.2"
		},
		closeButton: {
			marginEnd: "-2px",
			marginStart: "0.35rem"
		}
	}),
	md: definePartsStyle({ container: {
		[$minH.variable]: "sizes.6",
		[$minW.variable]: "sizes.6",
		[$fontSize.variable]: "fontSizes.sm",
		[$paddingX.variable]: "space.2"
	} }),
	lg: definePartsStyle({ container: {
		[$minH.variable]: "sizes.8",
		[$minW.variable]: "sizes.8",
		[$fontSize.variable]: "fontSizes.md",
		[$paddingX.variable]: "space.3"
	} })
};
const variants$1 = {
	subtle: definePartsStyle((props) => ({ container: badgeTheme.variants?.subtle(props) })),
	solid: definePartsStyle((props) => ({ container: badgeTheme.variants?.solid(props) })),
	outline: definePartsStyle((props) => ({ container: badgeTheme.variants?.outline(props) }))
};
const tagTheme = defineMultiStyleConfig({
	variants: variants$1,
	baseStyle: baseStyle$2,
	sizes: sizes$2,
	defaultProps: {
		size: "md",
		variant: "subtle",
		colorScheme: "gray"
	}
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/textarea.mjs
const baseStyle$1 = defineStyle({
	...inputTheme.baseStyle?.field,
	paddingY: "2",
	minHeight: "20",
	lineHeight: "short",
	verticalAlign: "top"
});
const variants = {
	outline: defineStyle((props) => inputTheme.variants?.outline(props).field ?? {}),
	flushed: defineStyle((props) => inputTheme.variants?.flushed(props).field ?? {}),
	filled: defineStyle((props) => inputTheme.variants?.filled(props).field ?? {}),
	unstyled: inputTheme.variants?.unstyled.field ?? {}
};
const sizes$1 = {
	xs: inputTheme.sizes?.xs.field ?? {},
	sm: inputTheme.sizes?.sm.field ?? {},
	md: inputTheme.sizes?.md.field ?? {},
	lg: inputTheme.sizes?.lg.field ?? {}
};
const textareaTheme = defineStyleConfig({
	baseStyle: baseStyle$1,
	sizes: sizes$1,
	variants,
	defaultProps: {
		size: "md",
		variant: "outline"
	}
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/tooltip.mjs
const $bg = cssVar("tooltip-bg");
const $fg = cssVar("tooltip-fg");
const $arrowBg = cssVar("popper-arrow-bg");
const baseStyle = defineStyle({
	bg: $bg.reference,
	color: $fg.reference,
	[$bg.variable]: "colors.gray.700",
	[$fg.variable]: "colors.whiteAlpha.900",
	_dark: {
		[$bg.variable]: "colors.gray.300",
		[$fg.variable]: "colors.gray.900"
	},
	[$arrowBg.variable]: $bg.reference,
	px: "2",
	py: "0.5",
	borderRadius: "sm",
	fontWeight: "medium",
	fontSize: "sm",
	boxShadow: "md",
	maxW: "xs",
	zIndex: "tooltip"
});
const tooltipTheme = defineStyleConfig({ baseStyle });

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/components/index.mjs
const components = {
	Accordion: accordionTheme,
	Alert: alertTheme,
	Avatar: avatarTheme,
	Badge: badgeTheme,
	Breadcrumb: breadcrumbTheme,
	Button: buttonTheme,
	Checkbox: checkboxTheme,
	CloseButton: closeButtonTheme,
	Code: codeTheme,
	Container: containerTheme,
	Divider: dividerTheme,
	Drawer: drawerTheme,
	Editable: editableTheme,
	Form: formTheme,
	FormError: formErrorTheme,
	FormLabel: formLabelTheme,
	Heading: headingTheme,
	Input: inputTheme,
	Kbd: kbdTheme,
	Link: linkTheme,
	List: listTheme,
	Menu: menuTheme,
	Modal: modalTheme,
	NumberInput: numberInputTheme,
	PinInput: pinInputTheme,
	Popover: popoverTheme,
	Progress: progressTheme,
	Radio: radioTheme,
	Select: selectTheme,
	Skeleton: skeletonTheme,
	SkipLink: skipLinkTheme,
	Slider: sliderTheme,
	Spinner: spinnerTheme,
	Stat: statTheme,
	Switch: switchTheme,
	Table: tableTheme,
	Tabs: tabsTheme,
	Tag: tagTheme,
	Textarea: textareaTheme,
	Tooltip: tooltipTheme,
	Card: cardTheme,
	Stepper: stepperTheme
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/foundations/borders.mjs
const borders = {
	none: 0,
	"1px": "1px solid",
	"2px": "2px solid",
	"4px": "4px solid",
	"8px": "8px solid"
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/foundations/breakpoints.mjs
const breakpoints = {
	base: "0em",
	sm: "30em",
	md: "48em",
	lg: "62em",
	xl: "80em",
	"2xl": "96em"
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/foundations/colors.mjs
const colors = {
	transparent: "transparent",
	current: "currentColor",
	black: "#000000",
	white: "#FFFFFF",
	whiteAlpha: {
		50: "rgba(255, 255, 255, 0.04)",
		100: "rgba(255, 255, 255, 0.06)",
		200: "rgba(255, 255, 255, 0.08)",
		300: "rgba(255, 255, 255, 0.16)",
		400: "rgba(255, 255, 255, 0.24)",
		500: "rgba(255, 255, 255, 0.36)",
		600: "rgba(255, 255, 255, 0.48)",
		700: "rgba(255, 255, 255, 0.64)",
		800: "rgba(255, 255, 255, 0.80)",
		900: "rgba(255, 255, 255, 0.92)"
	},
	blackAlpha: {
		50: "rgba(0, 0, 0, 0.04)",
		100: "rgba(0, 0, 0, 0.06)",
		200: "rgba(0, 0, 0, 0.08)",
		300: "rgba(0, 0, 0, 0.16)",
		400: "rgba(0, 0, 0, 0.24)",
		500: "rgba(0, 0, 0, 0.36)",
		600: "rgba(0, 0, 0, 0.48)",
		700: "rgba(0, 0, 0, 0.64)",
		800: "rgba(0, 0, 0, 0.80)",
		900: "rgba(0, 0, 0, 0.92)"
	},
	gray: {
		50: "#F7FAFC",
		100: "#EDF2F7",
		200: "#E2E8F0",
		300: "#CBD5E0",
		400: "#A0AEC0",
		500: "#718096",
		600: "#4A5568",
		700: "#2D3748",
		800: "#1A202C",
		900: "#171923"
	},
	red: {
		50: "#FFF5F5",
		100: "#FED7D7",
		200: "#FEB2B2",
		300: "#FC8181",
		400: "#F56565",
		500: "#E53E3E",
		600: "#C53030",
		700: "#9B2C2C",
		800: "#822727",
		900: "#63171B"
	},
	orange: {
		50: "#FFFAF0",
		100: "#FEEBC8",
		200: "#FBD38D",
		300: "#F6AD55",
		400: "#ED8936",
		500: "#DD6B20",
		600: "#C05621",
		700: "#9C4221",
		800: "#7B341E",
		900: "#652B19"
	},
	yellow: {
		50: "#FFFFF0",
		100: "#FEFCBF",
		200: "#FAF089",
		300: "#F6E05E",
		400: "#ECC94B",
		500: "#D69E2E",
		600: "#B7791F",
		700: "#975A16",
		800: "#744210",
		900: "#5F370E"
	},
	green: {
		50: "#F0FFF4",
		100: "#C6F6D5",
		200: "#9AE6B4",
		300: "#68D391",
		400: "#48BB78",
		500: "#38A169",
		600: "#2F855A",
		700: "#276749",
		800: "#22543D",
		900: "#1C4532"
	},
	teal: {
		50: "#E6FFFA",
		100: "#B2F5EA",
		200: "#81E6D9",
		300: "#4FD1C5",
		400: "#38B2AC",
		500: "#319795",
		600: "#2C7A7B",
		700: "#285E61",
		800: "#234E52",
		900: "#1D4044"
	},
	blue: {
		50: "#ebf8ff",
		100: "#bee3f8",
		200: "#90cdf4",
		300: "#63b3ed",
		400: "#4299e1",
		500: "#3182ce",
		600: "#2b6cb0",
		700: "#2c5282",
		800: "#2a4365",
		900: "#1A365D"
	},
	cyan: {
		50: "#EDFDFD",
		100: "#C4F1F9",
		200: "#9DECF9",
		300: "#76E4F7",
		400: "#0BC5EA",
		500: "#00B5D8",
		600: "#00A3C4",
		700: "#0987A0",
		800: "#086F83",
		900: "#065666"
	},
	purple: {
		50: "#FAF5FF",
		100: "#E9D8FD",
		200: "#D6BCFA",
		300: "#B794F4",
		400: "#9F7AEA",
		500: "#805AD5",
		600: "#6B46C1",
		700: "#553C9A",
		800: "#44337A",
		900: "#322659"
	},
	pink: {
		50: "#FFF5F7",
		100: "#FED7E2",
		200: "#FBB6CE",
		300: "#F687B3",
		400: "#ED64A6",
		500: "#D53F8C",
		600: "#B83280",
		700: "#97266D",
		800: "#702459",
		900: "#521B41"
	}
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/foundations/radius.mjs
const radii = {
	none: "0",
	sm: "0.125rem",
	base: "0.25rem",
	md: "0.375rem",
	lg: "0.5rem",
	xl: "0.75rem",
	"2xl": "1rem",
	"3xl": "1.5rem",
	full: "9999px"
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/foundations/shadows.mjs
const shadows = {
	xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
	sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
	base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
	md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
	lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
	xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
	"2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
	outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
	inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
	none: "none",
	"dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/foundations/transition.mjs
const transitionProperty = {
	common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
	colors: "background-color, border-color, color, fill, stroke",
	dimensions: "width, height",
	position: "left, right, top, bottom",
	background: "background-color, background-image, background-position"
};
const transitionTimingFunction = {
	"ease-in": "cubic-bezier(0.4, 0, 1, 1)",
	"ease-out": "cubic-bezier(0, 0, 0.2, 1)",
	"ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
};
const transitionDuration = {
	"ultra-fast": "50ms",
	faster: "100ms",
	fast: "150ms",
	normal: "200ms",
	slow: "300ms",
	slower: "400ms",
	"ultra-slow": "500ms"
};
const transition = {
	property: transitionProperty,
	easing: transitionTimingFunction,
	duration: transitionDuration
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/foundations/z-index.mjs
const zIndices = {
	hide: -1,
	auto: "auto",
	base: 0,
	docked: 10,
	dropdown: 1e3,
	sticky: 1100,
	banner: 1200,
	overlay: 1300,
	modal: 1400,
	popover: 1500,
	skipLink: 1600,
	toast: 1700,
	tooltip: 1800
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/foundations/blur.mjs
const blur = {
	none: 0,
	sm: "4px",
	base: "8px",
	md: "12px",
	lg: "16px",
	xl: "24px",
	"2xl": "40px",
	"3xl": "64px"
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/foundations/index.mjs
const foundations = {
	breakpoints,
	zIndices,
	radii,
	blur,
	colors,
	...typography,
	sizes,
	shadows,
	space: spacing,
	borders,
	transition
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/semantic-tokens.mjs
const semanticTokens = { colors: {
	"chakra-body-text": {
		_light: "gray.800",
		_dark: "whiteAlpha.900"
	},
	"chakra-body-bg": {
		_light: "white",
		_dark: "gray.800"
	},
	"chakra-border-color": {
		_light: "gray.200",
		_dark: "whiteAlpha.300"
	},
	"chakra-inverse-text": {
		_light: "white",
		_dark: "gray.800"
	},
	"chakra-subtle-bg": {
		_light: "gray.100",
		_dark: "gray.700"
	},
	"chakra-subtle-text": {
		_light: "gray.600",
		_dark: "gray.400"
	},
	"chakra-placeholder-color": {
		_light: "gray.500",
		_dark: "whiteAlpha.400"
	}
} };

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/styles.mjs
const styles = { global: {
	body: {
		fontFamily: "body",
		color: "chakra-body-text",
		bg: "chakra-body-bg",
		transitionProperty: "background-color",
		transitionDuration: "normal",
		lineHeight: "base"
	},
	"*::placeholder": { color: "chakra-placeholder-color" },
	"*, *::before, &::after": { borderColor: "chakra-border-color" }
} };

//#endregion
//#region node_modules/.pnpm/@chakra-ui+theme@3.4.9_@chakra-ui+styled-system@2.12.4_react@19.1.1__react@19.1.1/node_modules/@chakra-ui/theme/dist/esm/index.mjs
const direction = "ltr";
const config = {
	useSystemColorMode: false,
	initialColorMode: "light",
	cssVarPrefix: "chakra"
};
const theme = {
	semanticTokens,
	direction,
	...foundations,
	components,
	styles,
	config
};
const baseTheme = {
	semanticTokens,
	direction,
	components: {},
	...foundations,
	styles,
	config
};

//#endregion
//#region node_modules/.pnpm/@emotion+sheet@1.4.0/node_modules/@emotion/sheet/dist/emotion-sheet.esm.js
var isDevelopment$3 = false;
function sheetForTag(tag) {
	if (tag.sheet) return tag.sheet;
	/* istanbul ignore next */
	for (var i = 0; i < document.styleSheets.length; i++) if (document.styleSheets[i].ownerNode === tag) return document.styleSheets[i];
	return void 0;
}
function createStyleElement(options) {
	var tag = document.createElement("style");
	tag.setAttribute("data-emotion", options.key);
	if (options.nonce !== void 0) tag.setAttribute("nonce", options.nonce);
	tag.appendChild(document.createTextNode(""));
	tag.setAttribute("data-s", "");
	return tag;
}
var StyleSheet = /* @__PURE__ */ function() {
	function StyleSheet$1(options) {
		var _this = this;
		this._insertTag = function(tag) {
			var before;
			if (_this.tags.length === 0) if (_this.insertionPoint) before = _this.insertionPoint.nextSibling;
			else if (_this.prepend) before = _this.container.firstChild;
			else before = _this.before;
			else before = _this.tags[_this.tags.length - 1].nextSibling;
			_this.container.insertBefore(tag, before);
			_this.tags.push(tag);
		};
		this.isSpeedy = options.speedy === void 0 ? !isDevelopment$3 : options.speedy;
		this.tags = [];
		this.ctr = 0;
		this.nonce = options.nonce;
		this.key = options.key;
		this.container = options.container;
		this.prepend = options.prepend;
		this.insertionPoint = options.insertionPoint;
		this.before = null;
	}
	var _proto = StyleSheet$1.prototype;
	_proto.hydrate = function hydrate(nodes) {
		nodes.forEach(this._insertTag);
	};
	_proto.insert = function insert(rule) {
		if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) this._insertTag(createStyleElement(this));
		var tag = this.tags[this.tags.length - 1];
		if (this.isSpeedy) {
			var sheet = sheetForTag(tag);
			try {
				sheet.insertRule(rule, sheet.cssRules.length);
			} catch (e$1) {}
		} else tag.appendChild(document.createTextNode(rule));
		this.ctr++;
	};
	_proto.flush = function flush() {
		this.tags.forEach(function(tag) {
			var _tag$parentNode;
			return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
		});
		this.tags = [];
		this.ctr = 0;
	};
	return StyleSheet$1;
}();

//#endregion
//#region node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Enum.js
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";

//#endregion
//#region node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Utility.js
/**
* @param {number}
* @return {number}
*/
var abs = Math.abs;
/**
* @param {number}
* @return {string}
*/
var from = String.fromCharCode;
/**
* @param {object}
* @return {object}
*/
var assign = Object.assign;
/**
* @param {string} value
* @param {number} length
* @return {number}
*/
function hash(value, length$1) {
	return charat(value, 0) ^ 45 ? (((length$1 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
/**
* @param {string} value
* @return {string}
*/
function trim(value) {
	return value.trim();
}
/**
* @param {string} value
* @param {RegExp} pattern
* @return {string?}
*/
function match(value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value;
}
/**
* @param {string} value
* @param {(string|RegExp)} pattern
* @param {string} replacement
* @return {string}
*/
function replace(value, pattern, replacement) {
	return value.replace(pattern, replacement);
}
/**
* @param {string} value
* @param {string} search
* @return {number}
*/
function indexof(value, search) {
	return value.indexOf(search);
}
/**
* @param {string} value
* @param {number} index
* @return {number}
*/
function charat(value, index) {
	return value.charCodeAt(index) | 0;
}
/**
* @param {string} value
* @param {number} begin
* @param {number} end
* @return {string}
*/
function substr(value, begin, end) {
	return value.slice(begin, end);
}
/**
* @param {string} value
* @return {number}
*/
function strlen(value) {
	return value.length;
}
/**
* @param {any[]} value
* @return {number}
*/
function sizeof(value) {
	return value.length;
}
/**
* @param {any} value
* @param {any[]} array
* @return {any}
*/
function append(value, array) {
	return array.push(value), value;
}
/**
* @param {string[]} array
* @param {function} callback
* @return {string}
*/
function combine(array, callback) {
	return array.map(callback).join("");
}

//#endregion
//#region node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Tokenizer.js
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
/**
* @param {string} value
* @param {object | null} root
* @param {object | null} parent
* @param {string} type
* @param {string[] | string} props
* @param {object[] | string} children
* @param {number} length
*/
function node(value, root$1, parent, type, props, children, length$1) {
	return {
		value,
		root: root$1,
		parent,
		type,
		props,
		children,
		line,
		column,
		length: length$1,
		return: ""
	};
}
/**
* @param {object} root
* @param {object} props
* @return {object}
*/
function copy(root$1, props) {
	return assign(node("", null, null, "", null, null, 0), root$1, { length: -root$1.length }, props);
}
/**
* @return {number}
*/
function char() {
	return character;
}
/**
* @return {number}
*/
function prev() {
	character = position > 0 ? charat(characters, --position) : 0;
	if (column--, character === 10) column = 1, line--;
	return character;
}
/**
* @return {number}
*/
function next() {
	character = position < length ? charat(characters, position++) : 0;
	if (column++, character === 10) column = 1, line++;
	return character;
}
/**
* @return {number}
*/
function peek() {
	return charat(characters, position);
}
/**
* @return {number}
*/
function caret() {
	return position;
}
/**
* @param {number} begin
* @param {number} end
* @return {string}
*/
function slice(begin, end) {
	return substr(characters, begin, end);
}
/**
* @param {number} type
* @return {number}
*/
function token(type) {
	switch (type) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32: return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125: return 4;
		case 58: return 3;
		case 34:
		case 39:
		case 40:
		case 91: return 2;
		case 41:
		case 93: return 1;
	}
	return 0;
}
/**
* @param {string} value
* @return {any[]}
*/
function alloc(value) {
	return line = column = 1, length = strlen(characters = value), position = 0, [];
}
/**
* @param {any} value
* @return {any}
*/
function dealloc(value) {
	return characters = "", value;
}
/**
* @param {number} type
* @return {string}
*/
function delimit(type) {
	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
/**
* @param {number} type
* @return {string}
*/
function whitespace(type) {
	while (character = peek()) if (character < 33) next();
	else break;
	return token(type) > 2 || token(character) > 3 ? "" : " ";
}
/**
* @param {number} index
* @param {number} count
* @return {string}
*/
function escaping(index, count) {
	while (--count && next()) if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
/**
* @param {number} type
* @return {number}
*/
function delimiter(type) {
	while (next()) switch (character) {
		case type: return position;
		case 34:
		case 39:
			if (type !== 34 && type !== 39) delimiter(character);
			break;
		case 40:
			if (type === 41) delimiter(type);
			break;
		case 92:
			next();
			break;
	}
	return position;
}
/**
* @param {number} type
* @param {number} index
* @return {number}
*/
function commenter(type, index) {
	while (next()) if (type + character === 57) break;
	else if (type + character === 84 && peek() === 47) break;
	return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
/**
* @param {number} index
* @return {string}
*/
function identifier(index) {
	while (!token(peek())) next();
	return slice(index, position);
}

//#endregion
//#region node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Parser.js
/**
* @param {string} value
* @return {object[]}
*/
function compile(value) {
	return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
/**
* @param {string} value
* @param {object} root
* @param {object?} parent
* @param {string[]} rule
* @param {string[]} rules
* @param {string[]} rulesets
* @param {number[]} pseudo
* @param {number[]} points
* @param {string[]} declarations
* @return {object}
*/
function parse(value, root$1, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0;
	var offset = 0;
	var length$1 = pseudo;
	var atrule = 0;
	var property = 0;
	var previous = 0;
	var variable = 1;
	var scanning = 1;
	var ampersand = 1;
	var character$1 = 0;
	var type = "";
	var props = rules;
	var children = rulesets;
	var reference = rule;
	var characters$1 = type;
	while (scanning) switch (previous = character$1, character$1 = next()) {
		case 40: if (previous != 108 && charat(characters$1, length$1 - 1) == 58) {
			if (indexof(characters$1 += replace(delimit(character$1), "&", "&\f"), "&\f") != -1) ampersand = -1;
			break;
		}
		case 34:
		case 39:
		case 91:
			characters$1 += delimit(character$1);
			break;
		case 9:
		case 10:
		case 13:
		case 32:
			characters$1 += whitespace(previous);
			break;
		case 92:
			characters$1 += escaping(caret() - 1, 7);
			continue;
		case 47:
			switch (peek()) {
				case 42:
				case 47:
					append(comment(commenter(next(), caret()), root$1, parent), declarations);
					break;
				default: characters$1 += "/";
			}
			break;
		case 123 * variable: points[index++] = strlen(characters$1) * ampersand;
		case 125 * variable:
		case 59:
		case 0:
			switch (character$1) {
				case 0:
				case 125: scanning = 0;
				case 59 + offset:
					if (ampersand == -1) characters$1 = replace(characters$1, /\f/g, "");
					if (property > 0 && strlen(characters$1) - length$1) append(property > 32 ? declaration(characters$1 + ";", rule, parent, length$1 - 1) : declaration(replace(characters$1, " ", "") + ";", rule, parent, length$1 - 2), declarations);
					break;
				case 59: characters$1 += ";";
				default:
					append(reference = ruleset(characters$1, root$1, parent, index, offset, rules, points, type, props = [], children = [], length$1), rulesets);
					if (character$1 === 123) if (offset === 0) parse(characters$1, root$1, reference, reference, props, rulesets, length$1, points, children);
					else switch (atrule === 99 && charat(characters$1, 3) === 110 ? 100 : atrule) {
						case 100:
						case 108:
						case 109:
						case 115:
							parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length$1), children), rules, children, length$1, points, rule ? props : children);
							break;
						default: parse(characters$1, reference, reference, reference, [""], children, 0, points, children);
					}
			}
			index = offset = property = 0, variable = ampersand = 1, type = characters$1 = "", length$1 = pseudo;
			break;
		case 58: length$1 = 1 + strlen(characters$1), property = previous;
		default:
			if (variable < 1) {
				if (character$1 == 123) --variable;
				else if (character$1 == 125 && variable++ == 0 && prev() == 125) continue;
			}
			switch (characters$1 += from(character$1), character$1 * variable) {
				case 38:
					ampersand = offset > 0 ? 1 : (characters$1 += "\f", -1);
					break;
				case 44:
					points[index++] = (strlen(characters$1) - 1) * ampersand, ampersand = 1;
					break;
				case 64:
					if (peek() === 45) characters$1 += delimit(next());
					atrule = peek(), offset = length$1 = strlen(type = characters$1 += identifier(caret())), character$1++;
					break;
				case 45: if (previous === 45 && strlen(characters$1) == 2) variable = 0;
			}
	}
	return rulesets;
}
/**
* @param {string} value
* @param {object} root
* @param {object?} parent
* @param {number} index
* @param {number} offset
* @param {string[]} rules
* @param {number[]} points
* @param {string} type
* @param {string[]} props
* @param {string[]} children
* @param {number} length
* @return {object}
*/
function ruleset(value, root$1, parent, index, offset, rules, points, type, props, children, length$1) {
	var post = offset - 1;
	var rule = offset === 0 ? rules : [""];
	var size$1 = sizeof(rule);
	for (var i = 0, j = 0, k$1 = 0; i < index; ++i) for (var x$1 = 0, y$1 = substr(value, post + 1, post = abs(j = points[i])), z$1 = value; x$1 < size$1; ++x$1) if (z$1 = trim(j > 0 ? rule[x$1] + " " + y$1 : replace(y$1, /&\f/g, rule[x$1]))) props[k$1++] = z$1;
	return node(value, root$1, parent, offset === 0 ? RULESET : type, props, children, length$1);
}
/**
* @param {number} value
* @param {object} root
* @param {object?} parent
* @return {object}
*/
function comment(value, root$1, parent) {
	return node(value, root$1, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
/**
* @param {string} value
* @param {object} root
* @param {object?} parent
* @param {number} length
* @return {object}
*/
function declaration(value, root$1, parent, length$1) {
	return node(value, root$1, parent, DECLARATION, substr(value, 0, length$1), substr(value, length$1 + 1, -1), length$1);
}

//#endregion
//#region node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Serializer.js
/**
* @param {object[]} children
* @param {function} callback
* @return {string}
*/
function serialize(children, callback) {
	var output = "";
	var length$1 = sizeof(children);
	for (var i = 0; i < length$1; i++) output += callback(children[i], i, children, callback) || "";
	return output;
}
/**
* @param {object} element
* @param {number} index
* @param {object[]} children
* @param {function} callback
* @return {string}
*/
function stringify(element, index, children, callback) {
	switch (element.type) {
		case LAYER: if (element.children.length) break;
		case IMPORT:
		case DECLARATION: return element.return = element.return || element.value;
		case COMMENT: return "";
		case KEYFRAMES: return element.return = element.value + "{" + serialize(element.children, callback) + "}";
		case RULESET: element.value = element.props.join(",");
	}
	return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}

//#endregion
//#region node_modules/.pnpm/stylis@4.2.0/node_modules/stylis/src/Middleware.js
/**
* @param {function[]} collection
* @return {function}
*/
function middleware(collection) {
	var length$1 = sizeof(collection);
	return function(element, index, children, callback) {
		var output = "";
		for (var i = 0; i < length$1; i++) output += collection[i](element, index, children, callback) || "";
		return output;
	};
}
/**
* @param {function} callback
* @return {function}
*/
function rulesheet(callback) {
	return function(element) {
		if (!element.root) {
			if (element = element.return) callback(element);
		}
	};
}

//#endregion
//#region node_modules/.pnpm/@emotion+weak-memoize@0.4.0/node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js
var weakMemoize = function weakMemoize$1(func) {
	var cache = /* @__PURE__ */ new WeakMap();
	return function(arg) {
		if (cache.has(arg)) return cache.get(arg);
		var ret = func(arg);
		cache.set(arg, ret);
		return ret;
	};
};

//#endregion
//#region node_modules/.pnpm/@emotion+memoize@0.9.0/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
	var cache = Object.create(null);
	return function(arg) {
		if (cache[arg] === void 0) cache[arg] = fn(arg);
		return cache[arg];
	};
}
var init_emotion_memoize_esm = __esm({ "node_modules/.pnpm/@emotion+memoize@0.9.0/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js": (() => {}) });

//#endregion
//#region node_modules/.pnpm/@emotion+cache@11.14.0/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
var identifierWithPointTracking = function identifierWithPointTracking$1(begin, points, index) {
	var previous = 0;
	var character$1 = 0;
	while (true) {
		previous = character$1;
		character$1 = peek();
		if (previous === 38 && character$1 === 12) points[index] = 1;
		if (token(character$1)) break;
		next();
	}
	return slice(begin, position);
};
var toRules = function toRules$1(parsed, points) {
	var index = -1;
	var character$1 = 44;
	do
		switch (token(character$1)) {
			case 0:
				if (character$1 === 38 && peek() === 12) points[index] = 1;
				parsed[index] += identifierWithPointTracking(position - 1, points, index);
				break;
			case 2:
				parsed[index] += delimit(character$1);
				break;
			case 4: if (character$1 === 44) {
				parsed[++index] = peek() === 58 ? "&\f" : "";
				points[index] = parsed[index].length;
				break;
			}
			default: parsed[index] += from(character$1);
		}
	while (character$1 = next());
	return parsed;
};
var getRules = function getRules$1(value, points) {
	return dealloc(toRules(alloc(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat$1(element) {
	if (element.type !== "rule" || !element.parent || element.length < 1) return;
	var value = element.value;
	var parent = element.parent;
	var isImplicitRule = element.column === parent.column && element.line === parent.line;
	while (parent.type !== "rule") {
		parent = parent.parent;
		if (!parent) return;
	}
	if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) return;
	if (isImplicitRule) return;
	fixedElements.set(element, true);
	var points = [];
	var rules = getRules(value, points);
	var parentRules = parent.props;
	for (var i = 0, k$1 = 0; i < rules.length; i++) for (var j = 0; j < parentRules.length; j++, k$1++) element.props[k$1] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
};
var removeLabel = function removeLabel$1(element) {
	if (element.type === "decl") {
		var value = element.value;
		if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
			element["return"] = "";
			element.value = "";
		}
	}
};
function prefix(value, length$1) {
	switch (hash(value, length$1)) {
		case 5103: return WEBKIT + "print-" + value + value;
		case 5737:
		case 4201:
		case 3177:
		case 3433:
		case 1641:
		case 4457:
		case 2921:
		case 5572:
		case 6356:
		case 5844:
		case 3191:
		case 6645:
		case 3005:
		case 6391:
		case 5879:
		case 5623:
		case 6135:
		case 4599:
		case 4855:
		case 4215:
		case 6389:
		case 5109:
		case 5365:
		case 5621:
		case 3829: return WEBKIT + value + value;
		case 5349:
		case 4246:
		case 4810:
		case 6968:
		case 2756: return WEBKIT + value + MOZ + value + MS + value + value;
		case 6828:
		case 4268: return WEBKIT + value + MS + value + value;
		case 6165: return WEBKIT + value + MS + "flex-" + value + value;
		case 5187: return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
		case 5443: return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
		case 4675: return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
		case 5548: return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
		case 5292: return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
		case 6060: return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
		case 4554: return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
		case 6187: return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
		case 5495:
		case 3959: return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
		case 4968: return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
		case 4095:
		case 3583:
		case 4068:
		case 2532: return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
		case 8116:
		case 7059:
		case 5753:
		case 5535:
		case 5445:
		case 5701:
		case 4933:
		case 4677:
		case 5533:
		case 5789:
		case 5021:
		case 4765:
			if (strlen(value) - 1 - length$1 > 6) switch (charat(value, length$1 + 1)) {
				case 109: if (charat(value, length$1 + 4) !== 45) break;
				case 102: return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length$1 + 3) == 108 ? "$3" : "$2-$3")) + value;
				case 115: return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length$1) + value : value;
			}
			break;
		case 4949: if (charat(value, length$1 + 1) !== 115) break;
		case 6444:
			switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
				case 107: return replace(value, ":", ":" + WEBKIT) + value;
				case 101: return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
			}
			break;
		case 5936:
			switch (charat(value, length$1 + 11)) {
				case 114: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
				case 108: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
				case 45: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
			}
			return WEBKIT + value + MS + value + value;
	}
	return value;
}
var prefixer = function prefixer$1(element, index, children, callback) {
	if (element.length > -1) {
		if (!element["return"]) switch (element.type) {
			case DECLARATION:
				element["return"] = prefix(element.value, element.length);
				break;
			case KEYFRAMES: return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
			case RULESET: if (element.length) return combine(element.props, function(value) {
				switch (match(value, /(::plac\w+|:read-\w+)/)) {
					case ":read-only":
					case ":read-write": return serialize([copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] })], callback);
					case "::placeholder": return serialize([
						copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }),
						copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }),
						copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] })
					], callback);
				}
				return "";
			});
		}
	}
};
var defaultStylisPlugins = [prefixer];
var createCache = function createCache$1(options) {
	var key = options.key;
	if (key === "css") {
		var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
		Array.prototype.forEach.call(ssrStyles, function(node$1) {
			var dataEmotionAttribute = node$1.getAttribute("data-emotion");
			if (dataEmotionAttribute.indexOf(" ") === -1) return;
			document.head.appendChild(node$1);
			node$1.setAttribute("data-s", "");
		});
	}
	var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
	var inserted = {};
	var container$1;
	var nodesToHydrate = [];
	container$1 = options.container || document.head;
	Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function(node$1) {
		var attrib = node$1.getAttribute("data-emotion").split(" ");
		for (var i = 1; i < attrib.length; i++) inserted[attrib[i]] = true;
		nodesToHydrate.push(node$1);
	});
	var _insert;
	var omnipresentPlugins = [compat, removeLabel];
	var currentSheet;
	var finalizingPlugins = [stringify, rulesheet(function(rule) {
		currentSheet.insert(rule);
	})];
	var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
	var stylis = function stylis$1(styles$1) {
		return serialize(compile(styles$1), serializer);
	};
	_insert = function insert(selector, serialized, sheet, shouldCache) {
		currentSheet = sheet;
		stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
		if (shouldCache) cache.inserted[serialized.name] = true;
	};
	var cache = {
		key,
		sheet: new StyleSheet({
			key,
			container: container$1,
			nonce: options.nonce,
			speedy: options.speedy,
			prepend: options.prepend,
			insertionPoint: options.insertionPoint
		}),
		nonce: options.nonce,
		inserted,
		registered: {},
		insert: _insert
	};
	cache.sheet.hydrate(nodesToHydrate);
	return cache;
};

//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
	return _extends = Object.assign ? Object.assign.bind() : function(n$1) {
		for (var e$1 = 1; e$1 < arguments.length; e$1++) {
			var t$2 = arguments[e$1];
			for (var r$2 in t$2) ({}).hasOwnProperty.call(t$2, r$2) && (n$1[r$2] = t$2[r$2]);
		}
		return n$1;
	}, _extends.apply(null, arguments);
}

//#endregion
//#region node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js
var require_react_is_production_min = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js": ((exports) => {
	var b = "function" === typeof Symbol && Symbol.for, c = b ? Symbol.for("react.element") : 60103, d = b ? Symbol.for("react.portal") : 60106, e = b ? Symbol.for("react.fragment") : 60107, f = b ? Symbol.for("react.strict_mode") : 60108, g = b ? Symbol.for("react.profiler") : 60114, h = b ? Symbol.for("react.provider") : 60109, k = b ? Symbol.for("react.context") : 60110, l = b ? Symbol.for("react.async_mode") : 60111, m = b ? Symbol.for("react.concurrent_mode") : 60111, n = b ? Symbol.for("react.forward_ref") : 60112, p = b ? Symbol.for("react.suspense") : 60113, q = b ? Symbol.for("react.suspense_list") : 60120, r = b ? Symbol.for("react.memo") : 60115, t = b ? Symbol.for("react.lazy") : 60116, v = b ? Symbol.for("react.block") : 60121, w = b ? Symbol.for("react.fundamental") : 60117, x = b ? Symbol.for("react.responder") : 60118, y = b ? Symbol.for("react.scope") : 60119;
	function z(a) {
		if ("object" === typeof a && null !== a) {
			var u = a.$$typeof;
			switch (u) {
				case c: switch (a = a.type, a) {
					case l:
					case m:
					case e:
					case g:
					case f:
					case p: return a;
					default: switch (a = a && a.$$typeof, a) {
						case k:
						case n:
						case t:
						case r:
						case h: return a;
						default: return u;
					}
				}
				case d: return u;
			}
		}
	}
	function A(a) {
		return z(a) === m;
	}
	exports.AsyncMode = l;
	exports.ConcurrentMode = m;
	exports.ContextConsumer = k;
	exports.ContextProvider = h;
	exports.Element = c;
	exports.ForwardRef = n;
	exports.Fragment = e;
	exports.Lazy = t;
	exports.Memo = r;
	exports.Portal = d;
	exports.Profiler = g;
	exports.StrictMode = f;
	exports.Suspense = p;
	exports.isAsyncMode = function(a) {
		return A(a) || z(a) === l;
	};
	exports.isConcurrentMode = A;
	exports.isContextConsumer = function(a) {
		return z(a) === k;
	};
	exports.isContextProvider = function(a) {
		return z(a) === h;
	};
	exports.isElement = function(a) {
		return "object" === typeof a && null !== a && a.$$typeof === c;
	};
	exports.isForwardRef = function(a) {
		return z(a) === n;
	};
	exports.isFragment = function(a) {
		return z(a) === e;
	};
	exports.isLazy = function(a) {
		return z(a) === t;
	};
	exports.isMemo = function(a) {
		return z(a) === r;
	};
	exports.isPortal = function(a) {
		return z(a) === d;
	};
	exports.isProfiler = function(a) {
		return z(a) === g;
	};
	exports.isStrictMode = function(a) {
		return z(a) === f;
	};
	exports.isSuspense = function(a) {
		return z(a) === p;
	};
	exports.isValidElementType = function(a) {
		return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
	};
	exports.typeOf = z;
}) });

//#endregion
//#region node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js
var require_react_is = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/index.js": ((exports, module) => {
	module.exports = require_react_is_production_min();
}) });

//#endregion
//#region node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/hoist-non-react-statics@3.3.2/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js": ((exports, module) => {
	var reactIs = require_react_is();
	/**
	* Copyright 2015, Yahoo! Inc.
	* Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	*/
	var REACT_STATICS = {
		childContextTypes: true,
		contextType: true,
		contextTypes: true,
		defaultProps: true,
		displayName: true,
		getDefaultProps: true,
		getDerivedStateFromError: true,
		getDerivedStateFromProps: true,
		mixins: true,
		propTypes: true,
		type: true
	};
	var KNOWN_STATICS = {
		name: true,
		length: true,
		prototype: true,
		caller: true,
		callee: true,
		arguments: true,
		arity: true
	};
	var FORWARD_REF_STATICS = {
		"$$typeof": true,
		render: true,
		defaultProps: true,
		displayName: true,
		propTypes: true
	};
	var MEMO_STATICS = {
		"$$typeof": true,
		compare: true,
		defaultProps: true,
		displayName: true,
		propTypes: true,
		type: true
	};
	var TYPE_STATICS = {};
	TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
	TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
	function getStatics(component) {
		if (reactIs.isMemo(component)) return MEMO_STATICS;
		return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
	}
	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = Object.prototype;
	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
		if (typeof sourceComponent !== "string") {
			if (objectPrototype) {
				var inheritedComponent = getPrototypeOf(sourceComponent);
				if (inheritedComponent && inheritedComponent !== objectPrototype) hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
			}
			var keys$1 = getOwnPropertyNames(sourceComponent);
			if (getOwnPropertySymbols) keys$1 = keys$1.concat(getOwnPropertySymbols(sourceComponent));
			var targetStatics = getStatics(targetComponent);
			var sourceStatics = getStatics(sourceComponent);
			for (var i = 0; i < keys$1.length; ++i) {
				var key = keys$1[i];
				if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
					var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
					try {
						defineProperty(targetComponent, key, descriptor);
					} catch (e$1) {}
				}
			}
		}
		return targetComponent;
	}
	module.exports = hoistNonReactStatics;
}) });

//#endregion
//#region node_modules/.pnpm/@emotion+utils@1.4.2/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames) {
	var rawClassName = "";
	classNames.split(" ").forEach(function(className) {
		if (registered[className] !== void 0) registeredStyles.push(registered[className] + ";");
		else if (className) rawClassName += className + " ";
	});
	return rawClassName;
}
var registerStyles = function registerStyles$1(cache, serialized, isStringTag) {
	var className = cache.key + "-" + serialized.name;
	if ((isStringTag === false || isBrowser === false) && cache.registered[className] === void 0) cache.registered[className] = serialized.styles;
};
var insertStyles = function insertStyles$1(cache, serialized, isStringTag) {
	registerStyles(cache, serialized, isStringTag);
	var className = cache.key + "-" + serialized.name;
	if (cache.inserted[serialized.name] === void 0) {
		var current = serialized;
		do {
			cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
			current = current.next;
		} while (current !== void 0);
	}
};

//#endregion
//#region node_modules/.pnpm/@emotion+hash@0.9.2/node_modules/@emotion/hash/dist/emotion-hash.esm.js
function murmur2(str) {
	var h$1 = 0;
	var k$1, i = 0, len = str.length;
	for (; len >= 4; ++i, len -= 4) {
		k$1 = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
		k$1 = (k$1 & 65535) * 1540483477 + ((k$1 >>> 16) * 59797 << 16);
		k$1 ^= k$1 >>> 24;
		h$1 = (k$1 & 65535) * 1540483477 + ((k$1 >>> 16) * 59797 << 16) ^ (h$1 & 65535) * 1540483477 + ((h$1 >>> 16) * 59797 << 16);
	}
	switch (len) {
		case 3: h$1 ^= (str.charCodeAt(i + 2) & 255) << 16;
		case 2: h$1 ^= (str.charCodeAt(i + 1) & 255) << 8;
		case 1:
			h$1 ^= str.charCodeAt(i) & 255;
			h$1 = (h$1 & 65535) * 1540483477 + ((h$1 >>> 16) * 59797 << 16);
	}
	h$1 ^= h$1 >>> 13;
	h$1 = (h$1 & 65535) * 1540483477 + ((h$1 >>> 16) * 59797 << 16);
	return ((h$1 ^ h$1 >>> 15) >>> 0).toString(36);
}

//#endregion
//#region node_modules/.pnpm/@emotion+unitless@0.10.0/node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var unitlessKeys = {
	animationIterationCount: 1,
	aspectRatio: 1,
	borderImageOutset: 1,
	borderImageSlice: 1,
	borderImageWidth: 1,
	boxFlex: 1,
	boxFlexGroup: 1,
	boxOrdinalGroup: 1,
	columnCount: 1,
	columns: 1,
	flex: 1,
	flexGrow: 1,
	flexPositive: 1,
	flexShrink: 1,
	flexNegative: 1,
	flexOrder: 1,
	gridRow: 1,
	gridRowEnd: 1,
	gridRowSpan: 1,
	gridRowStart: 1,
	gridColumn: 1,
	gridColumnEnd: 1,
	gridColumnSpan: 1,
	gridColumnStart: 1,
	msGridRow: 1,
	msGridRowSpan: 1,
	msGridColumn: 1,
	msGridColumnSpan: 1,
	fontWeight: 1,
	lineHeight: 1,
	opacity: 1,
	order: 1,
	orphans: 1,
	scale: 1,
	tabSize: 1,
	widows: 1,
	zIndex: 1,
	zoom: 1,
	WebkitLineClamp: 1,
	fillOpacity: 1,
	floodOpacity: 1,
	stopOpacity: 1,
	strokeDasharray: 1,
	strokeDashoffset: 1,
	strokeMiterlimit: 1,
	strokeOpacity: 1,
	strokeWidth: 1
};

//#endregion
//#region node_modules/.pnpm/@emotion+serialize@1.3.3/node_modules/@emotion/serialize/dist/emotion-serialize.esm.js
init_emotion_memoize_esm();
var isDevelopment$2 = false;
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty$1(property) {
	return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue$1(value) {
	return value != null && typeof value !== "boolean";
};
var processStyleName = /* @__PURE__ */ memoize(function(styleName) {
	return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue$1(key, value) {
	switch (key) {
		case "animation":
		case "animationName": if (typeof value === "string") return value.replace(animationRegex, function(match$1, p1, p2) {
			cursor = {
				name: p1,
				styles: p2,
				next: cursor
			};
			return p1;
		});
	}
	if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) return value + "px";
	return value;
};
var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function handleInterpolation(mergedProps, registered, interpolation) {
	if (interpolation == null) return "";
	var componentSelector = interpolation;
	if (componentSelector.__emotion_styles !== void 0) return componentSelector;
	switch (typeof interpolation) {
		case "boolean": return "";
		case "object":
			var keyframes$1 = interpolation;
			if (keyframes$1.anim === 1) {
				cursor = {
					name: keyframes$1.name,
					styles: keyframes$1.styles,
					next: cursor
				};
				return keyframes$1.name;
			}
			var serializedStyles = interpolation;
			if (serializedStyles.styles !== void 0) {
				var next$1 = serializedStyles.next;
				if (next$1 !== void 0) while (next$1 !== void 0) {
					cursor = {
						name: next$1.name,
						styles: next$1.styles,
						next: cursor
					};
					next$1 = next$1.next;
				}
				var styles$1 = serializedStyles.styles + ";";
				return styles$1;
			}
			return createStringFromObject(mergedProps, registered, interpolation);
		case "function":
			if (mergedProps !== void 0) {
				var previousCursor = cursor;
				var result = interpolation(mergedProps);
				cursor = previousCursor;
				return handleInterpolation(mergedProps, registered, result);
			}
			break;
	}
	var asString = interpolation;
	if (registered == null) return asString;
	var cached = registered[asString];
	return cached !== void 0 ? cached : asString;
}
function createStringFromObject(mergedProps, registered, obj) {
	var string = "";
	if (Array.isArray(obj)) for (var i = 0; i < obj.length; i++) string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
	else for (var key in obj) {
		var value = obj[key];
		if (typeof value !== "object") {
			var asString = value;
			if (registered != null && registered[asString] !== void 0) string += key + "{" + registered[asString] + "}";
			else if (isProcessableValue(asString)) string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
		} else {
			if (key === "NO_COMPONENT_SELECTOR" && isDevelopment$2) throw new Error(noComponentSelectorMessage);
			if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
				for (var _i = 0; _i < value.length; _i++) if (isProcessableValue(value[_i])) string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
			} else {
				var interpolated = handleInterpolation(mergedProps, registered, value);
				switch (key) {
					case "animation":
					case "animationName":
						string += processStyleName(key) + ":" + interpolated + ";";
						break;
					default: string += key + "{" + interpolated + "}";
				}
			}
		}
	}
	return string;
}
var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g;
var cursor;
function serializeStyles(args, registered, mergedProps) {
	if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) return args[0];
	var stringMode = true;
	var styles$1 = "";
	cursor = void 0;
	var strings = args[0];
	if (strings == null || strings.raw === void 0) {
		stringMode = false;
		styles$1 += handleInterpolation(mergedProps, registered, strings);
	} else {
		var asTemplateStringsArr = strings;
		styles$1 += asTemplateStringsArr[0];
	}
	for (var i = 1; i < args.length; i++) {
		styles$1 += handleInterpolation(mergedProps, registered, args[i]);
		if (stringMode) {
			var templateStringsArr = strings;
			styles$1 += templateStringsArr[i];
		}
	}
	labelPattern.lastIndex = 0;
	var identifierName = "";
	var match$1;
	while ((match$1 = labelPattern.exec(styles$1)) !== null) identifierName += "-" + match$1[1];
	var name = murmur2(styles$1) + identifierName;
	return {
		name,
		styles: styles$1,
		next: cursor
	};
}

//#endregion
//#region node_modules/.pnpm/@emotion+use-insertion-effect-with-fallbacks@1.2.0_react@19.1.1/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js
var syncFallback = function syncFallback$1(create) {
	return create();
};
var useInsertionEffect = import_react.useInsertionEffect ? import_react.useInsertionEffect : false;
var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect || syncFallback;
var useInsertionEffectWithLayoutFallback = useInsertionEffect || import_react.useLayoutEffect;

//#endregion
//#region node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1/node_modules/@emotion/react/dist/emotion-element-f0de968e.browser.esm.js
var isDevelopment$1 = false;
var EmotionCacheContext = /* @__PURE__ */ import_react.createContext(typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache({ key: "css" }) : null);
var CacheProvider = EmotionCacheContext.Provider;
var __unsafe_useEmotionCache = function useEmotionCache() {
	return (0, import_react.useContext)(EmotionCacheContext);
};
var withEmotionCache = function withEmotionCache$1(func) {
	return /* @__PURE__ */ (0, import_react.forwardRef)(function(props, ref) {
		var cache = (0, import_react.useContext)(EmotionCacheContext);
		return func(props, cache, ref);
	});
};
var ThemeContext = /* @__PURE__ */ import_react.createContext({});
var getTheme = function getTheme$1(outerTheme, theme$1) {
	if (typeof theme$1 === "function") {
		var mergedTheme = theme$1(outerTheme);
		return mergedTheme;
	}
	return _extends({}, outerTheme, theme$1);
};
var createCacheWithTheme = /* @__PURE__ */ weakMemoize(function(outerTheme) {
	return weakMemoize(function(theme$1) {
		return getTheme(outerTheme, theme$1);
	});
});
var ThemeProvider = function ThemeProvider$1(props) {
	var theme$1 = import_react.useContext(ThemeContext);
	if (props.theme !== theme$1) theme$1 = createCacheWithTheme(theme$1)(props.theme);
	return /* @__PURE__ */ import_react.createElement(ThemeContext.Provider, { value: theme$1 }, props.children);
};
var hasOwn = {}.hasOwnProperty;
var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
var createEmotionProps = function createEmotionProps$1(type, props) {
	var newProps = {};
	for (var _key in props) if (hasOwn.call(props, _key)) newProps[_key] = props[_key];
	newProps[typePropName] = type;
	return newProps;
};
var Insertion$1 = function Insertion$2(_ref) {
	var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
	registerStyles(cache, serialized, isStringTag);
	useInsertionEffectAlwaysWithSyncFallback(function() {
		return insertStyles(cache, serialized, isStringTag);
	});
	return null;
};
var Emotion = /* @__PURE__ */ withEmotionCache(function(props, cache, ref) {
	var cssProp = props.css;
	if (typeof cssProp === "string" && cache.registered[cssProp] !== void 0) cssProp = cache.registered[cssProp];
	var WrappedComponent = props[typePropName];
	var registeredStyles = [cssProp];
	var className = "";
	if (typeof props.className === "string") className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
	else if (props.className != null) className = props.className + " ";
	var serialized = serializeStyles(registeredStyles, void 0, import_react.useContext(ThemeContext));
	className += cache.key + "-" + serialized.name;
	var newProps = {};
	for (var _key2 in props) if (hasOwn.call(props, _key2) && _key2 !== "css" && _key2 !== typePropName && !isDevelopment$1) newProps[_key2] = props[_key2];
	newProps.className = className;
	if (ref) newProps.ref = ref;
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(Insertion$1, {
		cache,
		serialized,
		isStringTag: typeof WrappedComponent === "string"
	}), /* @__PURE__ */ import_react.createElement(WrappedComponent, newProps));
});
var Emotion$1 = Emotion;

//#endregion
//#region node_modules/.pnpm/@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var import_hoist_non_react_statics_cjs = /* @__PURE__ */ __toESM(require_hoist_non_react_statics_cjs());
var jsx = function jsx$1(type, props) {
	var args = arguments;
	if (props == null || !hasOwn.call(props, "css")) return import_react.createElement.apply(void 0, args);
	var argsLength = args.length;
	var createElementArgArray = new Array(argsLength);
	createElementArgArray[0] = Emotion$1;
	createElementArgArray[1] = createEmotionProps(type, props);
	for (var i = 2; i < argsLength; i++) createElementArgArray[i] = args[i];
	return import_react.createElement.apply(null, createElementArgArray);
};
(function(_jsx) {
	var JSX;
	(function(_JSX) {})(JSX || (JSX = _jsx.JSX || (_jsx.JSX = {})));
})(jsx || (jsx = {}));
var Global = /* @__PURE__ */ withEmotionCache(function(props, cache) {
	var styles$1 = props.styles;
	var serialized = serializeStyles([styles$1], void 0, import_react.useContext(ThemeContext));
	var sheetRef = import_react.useRef();
	useInsertionEffectWithLayoutFallback(function() {
		var key = cache.key + "-global";
		var sheet = new cache.sheet.constructor({
			key,
			nonce: cache.sheet.nonce,
			container: cache.sheet.container,
			speedy: cache.sheet.isSpeedy
		});
		var rehydrating = false;
		var node$1 = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");
		if (cache.sheet.tags.length) sheet.before = cache.sheet.tags[0];
		if (node$1 !== null) {
			rehydrating = true;
			node$1.setAttribute("data-emotion", key);
			sheet.hydrate([node$1]);
		}
		sheetRef.current = [sheet, rehydrating];
		return function() {
			sheet.flush();
		};
	}, [cache]);
	useInsertionEffectWithLayoutFallback(function() {
		var sheetRefCurrent = sheetRef.current;
		var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
		if (rehydrating) {
			sheetRefCurrent[1] = false;
			return;
		}
		if (serialized.next !== void 0) insertStyles(cache, serialized.next, true);
		if (sheet.tags.length) {
			var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
			sheet.before = element;
			sheet.flush();
		}
		cache.insert("", serialized, sheet, false);
	}, [cache, serialized.name]);
	return null;
});
function css() {
	for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
	return serializeStyles(args);
}
function keyframes() {
	var insertable = css.apply(void 0, arguments);
	var name = "animation-" + insertable.name;
	return {
		name,
		styles: "@keyframes " + name + "{" + insertable.styles + "}",
		anim: 1,
		toString: function toString() {
			return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
		}
	};
}

//#endregion
//#region node_modules/.pnpm/@emotion+is-prop-valid@1.3.1/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js
var emotion_is_prop_valid_esm_exports = {};
__export(emotion_is_prop_valid_esm_exports, { default: () => isPropValid });
var reactPropsRegex, isPropValid;
var init_emotion_is_prop_valid_esm = __esm({ "node_modules/.pnpm/@emotion+is-prop-valid@1.3.1/node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js": (() => {
	init_emotion_memoize_esm();
	reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
	isPropValid = /* @__PURE__ */ memoize(function(prop) {
		return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
	});
}) });

//#endregion
//#region node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@types+react@19.1.12_react@19.1.1/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js
init_emotion_is_prop_valid_esm();
var isDevelopment = false;
var testOmitPropsOnStringTag = isPropValid;
var testOmitPropsOnComponent = function testOmitPropsOnComponent$1(key) {
	return key !== "theme";
};
var getDefaultShouldForwardProp = function getDefaultShouldForwardProp$1(tag) {
	return typeof tag === "string" && tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps$1(tag, options, isReal) {
	var shouldForwardProp;
	if (options) {
		var optionsShouldForwardProp = options.shouldForwardProp;
		shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
			return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
		} : optionsShouldForwardProp;
	}
	if (typeof shouldForwardProp !== "function" && isReal) shouldForwardProp = tag.__emotion_forwardProp;
	return shouldForwardProp;
};
var Insertion = function Insertion$2(_ref) {
	var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
	registerStyles(cache, serialized, isStringTag);
	useInsertionEffectAlwaysWithSyncFallback(function() {
		return insertStyles(cache, serialized, isStringTag);
	});
	return null;
};
var createStyled = function createStyled$1(tag, options) {
	var isReal = tag.__emotion_real === tag;
	var baseTag = isReal && tag.__emotion_base || tag;
	var identifierName;
	var targetClassName;
	if (options !== void 0) {
		identifierName = options.label;
		targetClassName = options.target;
	}
	var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
	var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
	var shouldUseAs = !defaultShouldForwardProp("as");
	return function() {
		var args = arguments;
		var styles$1 = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
		if (identifierName !== void 0) styles$1.push("label:" + identifierName + ";");
		if (args[0] == null || args[0].raw === void 0) styles$1.push.apply(styles$1, args);
		else {
			var templateStringsArr = args[0];
			styles$1.push(templateStringsArr[0]);
			var len = args.length;
			var i = 1;
			for (; i < len; i++) styles$1.push(args[i], templateStringsArr[i]);
		}
		var Styled = withEmotionCache(function(props, cache, ref) {
			var FinalTag = shouldUseAs && props.as || baseTag;
			var className = "";
			var classInterpolations = [];
			var mergedProps = props;
			if (props.theme == null) {
				mergedProps = {};
				for (var key in props) mergedProps[key] = props[key];
				mergedProps.theme = import_react.useContext(ThemeContext);
			}
			if (typeof props.className === "string") className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
			else if (props.className != null) className = props.className + " ";
			var serialized = serializeStyles(styles$1.concat(classInterpolations), cache.registered, mergedProps);
			className += cache.key + "-" + serialized.name;
			if (targetClassName !== void 0) className += " " + targetClassName;
			var finalShouldForwardProp = shouldUseAs && shouldForwardProp === void 0 ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
			var newProps = {};
			for (var _key in props) {
				if (shouldUseAs && _key === "as") continue;
				if (finalShouldForwardProp(_key)) newProps[_key] = props[_key];
			}
			newProps.className = className;
			if (ref) newProps.ref = ref;
			return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement(Insertion, {
				cache,
				serialized,
				isStringTag: typeof FinalTag === "string"
			}), /* @__PURE__ */ import_react.createElement(FinalTag, newProps));
		});
		Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
		Styled.defaultProps = tag.defaultProps;
		Styled.__emotion_real = Styled;
		Styled.__emotion_base = baseTag;
		Styled.__emotion_styles = styles$1;
		Styled.__emotion_forwardProp = shouldForwardProp;
		Object.defineProperty(Styled, "toString", { value: function value() {
			if (targetClassName === void 0 && isDevelopment) return "NO_COMPONENT_SELECTOR";
			return "." + targetClassName;
		} });
		Styled.withComponent = function(nextTag, nextOptions) {
			var newStyled = createStyled$1(nextTag, _extends({}, options, nextOptions, { shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true) }));
			return newStyled.apply(void 0, styles$1);
		};
		return Styled;
	};
};

//#endregion
//#region node_modules/.pnpm/@emotion+styled@11.14.1_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@types+react@19.1.12_react@19.1.1/node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js
var tags = [
	"a",
	"abbr",
	"address",
	"area",
	"article",
	"aside",
	"audio",
	"b",
	"base",
	"bdi",
	"bdo",
	"big",
	"blockquote",
	"body",
	"br",
	"button",
	"canvas",
	"caption",
	"cite",
	"code",
	"col",
	"colgroup",
	"data",
	"datalist",
	"dd",
	"del",
	"details",
	"dfn",
	"dialog",
	"div",
	"dl",
	"dt",
	"em",
	"embed",
	"fieldset",
	"figcaption",
	"figure",
	"footer",
	"form",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"head",
	"header",
	"hgroup",
	"hr",
	"html",
	"i",
	"iframe",
	"img",
	"input",
	"ins",
	"kbd",
	"keygen",
	"label",
	"legend",
	"li",
	"link",
	"main",
	"map",
	"mark",
	"marquee",
	"menu",
	"menuitem",
	"meta",
	"meter",
	"nav",
	"noscript",
	"object",
	"ol",
	"optgroup",
	"option",
	"output",
	"p",
	"param",
	"picture",
	"pre",
	"progress",
	"q",
	"rp",
	"rt",
	"ruby",
	"s",
	"samp",
	"script",
	"section",
	"select",
	"small",
	"source",
	"span",
	"strong",
	"style",
	"sub",
	"summary",
	"sup",
	"table",
	"tbody",
	"td",
	"textarea",
	"tfoot",
	"th",
	"thead",
	"time",
	"title",
	"tr",
	"track",
	"u",
	"ul",
	"var",
	"video",
	"wbr",
	"circle",
	"clipPath",
	"defs",
	"ellipse",
	"foreignObject",
	"g",
	"image",
	"line",
	"linearGradient",
	"mask",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"radialGradient",
	"rect",
	"stop",
	"svg",
	"text",
	"tspan"
];
var styled = createStyled.bind(null);
tags.forEach(function(tagName) {
	styled[tagName] = styled(tagName);
});

//#endregion
export { isBrowser$1 as $, useUpdateEffect as A, useSafeLayoutEffect as B, useDisclosure as C, useControllableState as D, useAnimationState as E, useCallbackRef as F, import_lodash as G, splitProps as H, split as I, runIfFn$1 as J, mapResponsive as K, omit as L, lazyDisclosure as M, interopDefault as N, memoizedGet$1 as O, getAllFocusable as P, isFocusable as Q, cx as R, createContext as S, compact as T, getValidChildren as U, callAll as V, callAllHandlers as W, isObject as X, ariaAttr as Y, dataAttr as Z, assignAfter as _, require_react as a1, styled as b, emotion_is_prop_valid_esm_exports as c, init_emotion_is_prop_valid_esm as d, Global as e, keyframes as f, ThemeContext as g, ThemeProvider as h, __unsafe_useEmotionCache as i, _extends as j, theme as k, toCSSVar as l, omitThemingProps as m, resolveStyleConfig as n, defineStyle as o, css$1 as p, isStyleProp as q, layoutPropNames as r, propNames as s, useTimeout as t, useOutsideClick as u, mergeRefs as v, useMergeRefs as w, useFocusOnPointerDown as x, useFocusOnHide as y, useFocusOnShow as z };
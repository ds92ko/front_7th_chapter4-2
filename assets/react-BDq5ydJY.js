import { b as __commonJS, e as __toCommonJS, f as __toESM } from "./rolldown-runtime-CINmCwk_.js";
import { $ as isBrowser$1, A as useUpdateEffect, B as useSafeLayoutEffect, C as useDisclosure, D as useControllableState, E as useAnimationState, F as useCallbackRef$1, G as import_lodash, H as splitProps, I as split, J as runIfFn, K as mapResponsive, L as omit, M as lazyDisclosure, N as interopDefault, O as memoizedGet, P as getAllFocusable, Q as isFocusable, R as cx, S as createContext, T as compact, U as getValidChildren, V as callAll, W as callAllHandlers, X as isObject, Y as ariaAttr, Z as dataAttr, _ as assignAfter, a1 as require_react, b as styled$1, c as emotion_is_prop_valid_esm_exports, d as init_emotion_is_prop_valid_esm, e as Global, f as keyframes, g as ThemeContext, h as ThemeProvider$1, i as __unsafe_useEmotionCache, j as _extends, k as theme, l as toCSSVar, m as omitThemingProps, n as resolveStyleConfig, o as defineStyle, p as css, q as isStyleProp, r as layoutPropNames, s as propNames, t as useTimeout, u as useOutsideClick, v as mergeRefs, w as useMergeRefs$1, x as useFocusOnPointerDown, y as useFocusOnHide, z as useFocusOnShow } from "./chakra-ui-YFQdXzg5.js";

//#region node_modules/.pnpm/react-dom@19.1.1_react@19.1.1/node_modules/react-dom/cjs/react-dom.production.js
var require_react_dom_production = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/react-dom@19.1.1_react@19.1.1/node_modules/react-dom/cjs/react-dom.production.js": ((exports) => {
	var React$5 = require_react();
	function formatProdErrorMessage(code) {
		var url = "https://react.dev/errors/" + code;
		if (1 < arguments.length) {
			url += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var i = 2; i < arguments.length; i++) url += "&args[]=" + encodeURIComponent(arguments[i]);
		}
		return "Minified React error #" + code + "; visit " + url + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function noop$2() {}
	var Internals = {
		d: {
			f: noop$2,
			r: function() {
				throw Error(formatProdErrorMessage(522));
			},
			D: noop$2,
			C: noop$2,
			L: noop$2,
			m: noop$2,
			X: noop$2,
			S: noop$2,
			M: noop$2
		},
		p: 0,
		findDOMNode: null
	}, REACT_PORTAL_TYPE = Symbol.for("react.portal");
	function createPortal$1(children, containerInfo, implementation) {
		var key = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
		return {
			$$typeof: REACT_PORTAL_TYPE,
			key: null == key ? null : "" + key,
			children,
			containerInfo,
			implementation
		};
	}
	var ReactSharedInternals = React$5.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function getCrossOriginStringAs(as, input) {
		if ("font" === as) return "";
		if ("string" === typeof input) return "use-credentials" === input ? input : "";
	}
	exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Internals;
	exports.createPortal = function(children, container) {
		var key = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
		if (!container || 1 !== container.nodeType && 9 !== container.nodeType && 11 !== container.nodeType) throw Error(formatProdErrorMessage(299));
		return createPortal$1(children, container, null, key);
	};
	exports.flushSync = function(fn) {
		var previousTransition = ReactSharedInternals.T, previousUpdatePriority = Internals.p;
		try {
			if (ReactSharedInternals.T = null, Internals.p = 2, fn) return fn();
		} finally {
			ReactSharedInternals.T = previousTransition, Internals.p = previousUpdatePriority, Internals.d.f();
		}
	};
	exports.preconnect = function(href, options$1) {
		"string" === typeof href && (options$1 ? (options$1 = options$1.crossOrigin, options$1 = "string" === typeof options$1 ? "use-credentials" === options$1 ? options$1 : "" : void 0) : options$1 = null, Internals.d.C(href, options$1));
	};
	exports.prefetchDNS = function(href) {
		"string" === typeof href && Internals.d.D(href);
	};
	exports.preinit = function(href, options$1) {
		if ("string" === typeof href && options$1 && "string" === typeof options$1.as) {
			var as = options$1.as, crossOrigin = getCrossOriginStringAs(as, options$1.crossOrigin), integrity = "string" === typeof options$1.integrity ? options$1.integrity : void 0, fetchPriority = "string" === typeof options$1.fetchPriority ? options$1.fetchPriority : void 0;
			"style" === as ? Internals.d.S(href, "string" === typeof options$1.precedence ? options$1.precedence : void 0, {
				crossOrigin,
				integrity,
				fetchPriority
			}) : "script" === as && Internals.d.X(href, {
				crossOrigin,
				integrity,
				fetchPriority,
				nonce: "string" === typeof options$1.nonce ? options$1.nonce : void 0
			});
		}
	};
	exports.preinitModule = function(href, options$1) {
		if ("string" === typeof href) if ("object" === typeof options$1 && null !== options$1) {
			if (null == options$1.as || "script" === options$1.as) {
				var crossOrigin = getCrossOriginStringAs(options$1.as, options$1.crossOrigin);
				Internals.d.M(href, {
					crossOrigin,
					integrity: "string" === typeof options$1.integrity ? options$1.integrity : void 0,
					nonce: "string" === typeof options$1.nonce ? options$1.nonce : void 0
				});
			}
		} else options$1 ?? Internals.d.M(href);
	};
	exports.preload = function(href, options$1) {
		if ("string" === typeof href && "object" === typeof options$1 && null !== options$1 && "string" === typeof options$1.as) {
			var as = options$1.as, crossOrigin = getCrossOriginStringAs(as, options$1.crossOrigin);
			Internals.d.L(href, as, {
				crossOrigin,
				integrity: "string" === typeof options$1.integrity ? options$1.integrity : void 0,
				nonce: "string" === typeof options$1.nonce ? options$1.nonce : void 0,
				type: "string" === typeof options$1.type ? options$1.type : void 0,
				fetchPriority: "string" === typeof options$1.fetchPriority ? options$1.fetchPriority : void 0,
				referrerPolicy: "string" === typeof options$1.referrerPolicy ? options$1.referrerPolicy : void 0,
				imageSrcSet: "string" === typeof options$1.imageSrcSet ? options$1.imageSrcSet : void 0,
				imageSizes: "string" === typeof options$1.imageSizes ? options$1.imageSizes : void 0,
				media: "string" === typeof options$1.media ? options$1.media : void 0
			});
		}
	};
	exports.preloadModule = function(href, options$1) {
		if ("string" === typeof href) if (options$1) {
			var crossOrigin = getCrossOriginStringAs(options$1.as, options$1.crossOrigin);
			Internals.d.m(href, {
				as: "string" === typeof options$1.as && "script" !== options$1.as ? options$1.as : void 0,
				crossOrigin,
				integrity: "string" === typeof options$1.integrity ? options$1.integrity : void 0
			});
		} else Internals.d.m(href);
	};
	exports.requestFormReset = function(form) {
		Internals.d.r(form);
	};
	exports.unstable_batchedUpdates = function(fn, a) {
		return fn(a);
	};
	exports.useFormState = function(action, initialState$1, permalink) {
		return ReactSharedInternals.H.useFormState(action, initialState$1, permalink);
	};
	exports.useFormStatus = function() {
		return ReactSharedInternals.H.useHostTransitionStatus();
	};
	exports.version = "19.1.1";
}) });

//#endregion
//#region node_modules/.pnpm/react-dom@19.1.1_react@19.1.1/node_modules/react-dom/index.js
var require_react_dom = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/react-dom@19.1.1_react@19.1.1/node_modules/react-dom/index.js": ((exports, module) => {
	function checkDCE() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
		} catch (err) {
			console.error(err);
		}
	}
	checkDCE();
	module.exports = require_react_dom_production();
}) });

//#endregion
//#region node_modules/.pnpm/react@19.1.1/node_modules/react/cjs/react-jsx-runtime.production.js
var require_react_jsx_runtime_production = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/react@19.1.1/node_modules/react/cjs/react-jsx-runtime.production.js": ((exports) => {
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
		var key = null;
		void 0 !== maybeKey && (key = "" + maybeKey);
		void 0 !== config.key && (key = "" + config.key);
		if ("key" in config) {
			maybeKey = {};
			for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
		} else maybeKey = config;
		config = maybeKey.ref;
		return {
			$$typeof: REACT_ELEMENT_TYPE,
			type,
			key,
			ref: void 0 !== config ? config : null,
			props: maybeKey
		};
	}
	exports.Fragment = REACT_FRAGMENT_TYPE;
	exports.jsx = jsxProd;
	exports.jsxs = jsxProd;
}) });

//#endregion
//#region node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js
var require_jsx_runtime = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js": ((exports, module) => {
	module.exports = require_react_jsx_runtime_production();
}) });

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/color-mode/color-mode-context.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
const ColorModeContext = (0, import_react.createContext)({});
ColorModeContext.displayName = "ColorModeContext";
function useColorMode() {
	const context = (0, import_react.useContext)(ColorModeContext);
	if (context === void 0) throw new Error("useColorMode must be used within a ColorModeProvider");
	return context;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/color-mode/color-mode.utils.mjs
const classNames = {
	light: "chakra-ui-light",
	dark: "chakra-ui-dark"
};
function getColorModeUtils(options$1 = {}) {
	const { preventTransition = true, nonce } = options$1;
	const utils = {
		setDataset: (value) => {
			const cleanup = preventTransition ? utils.preventTransition() : void 0;
			document.documentElement.dataset.theme = value;
			document.documentElement.style.colorScheme = value;
			cleanup?.();
		},
		setClassName(dark) {
			document.body.classList.add(dark ? classNames.dark : classNames.light);
			document.body.classList.remove(dark ? classNames.light : classNames.dark);
		},
		query() {
			return window.matchMedia("(prefers-color-scheme: dark)");
		},
		getSystemTheme(fallback) {
			const dark = utils.query().matches ?? fallback === "dark";
			return dark ? "dark" : "light";
		},
		addListener(fn) {
			const mql = utils.query();
			const listener = (e) => {
				fn(e.matches ? "dark" : "light");
			};
			if (typeof mql.addListener === "function") mql.addListener(listener);
			else mql.addEventListener("change", listener);
			return () => {
				if (typeof mql.removeListener === "function") mql.removeListener(listener);
				else mql.removeEventListener("change", listener);
			};
		},
		preventTransition() {
			const css$2 = document.createElement("style");
			css$2.appendChild(document.createTextNode(`*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`));
			if (nonce !== void 0) css$2.nonce = nonce;
			document.head.appendChild(css$2);
			return () => {
				window.getComputedStyle(document.body);
				requestAnimationFrame(() => {
					requestAnimationFrame(() => {
						document.head.removeChild(css$2);
					});
				});
			};
		}
	};
	return utils;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/color-mode/storage-manager.mjs
const STORAGE_KEY = "chakra-ui-color-mode";
function createLocalStorageManager(key) {
	return {
		ssr: false,
		type: "localStorage",
		get(init) {
			if (!globalThis?.document) return init;
			let value;
			try {
				value = localStorage.getItem(key) || init;
			} catch (e) {}
			return value || init;
		},
		set(value) {
			try {
				localStorage.setItem(key, value);
			} catch (e) {}
		}
	};
}
const localStorageManager = createLocalStorageManager(STORAGE_KEY);
function parseCookie(cookie, key) {
	const match = cookie.match(/* @__PURE__ */ new RegExp(`(^| )${key}=([^;]+)`));
	return match?.[2];
}
function createCookieStorageManager(key, cookie) {
	return {
		ssr: !!cookie,
		type: "cookie",
		get(init) {
			if (cookie) return parseCookie(cookie, key);
			if (!globalThis?.document) return init;
			return parseCookie(document.cookie, key) || init;
		},
		set(value) {
			document.cookie = `${key}=${value}; max-age=31536000; path=/`;
		}
	};
}
const cookieStorageManager = createCookieStorageManager(STORAGE_KEY);

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/color-mode/color-mode-provider.mjs
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
const noop$1 = () => {};
const useSafeLayoutEffect$1 = isBrowser$1() ? import_react.useLayoutEffect : import_react.useEffect;
function getTheme(manager, fallback) {
	return manager.type === "cookie" && manager.ssr ? manager.get(fallback) : fallback;
}
const ColorModeProvider = function ColorModeProvider2(props) {
	const { value, children, options: { useSystemColorMode, initialColorMode, disableTransitionOnChange } = {}, colorModeManager = localStorageManager } = props;
	const cache = __unsafe_useEmotionCache();
	const defaultColorMode = initialColorMode === "dark" ? "dark" : "light";
	const [colorMode, rawSetColorMode] = (0, import_react.useState)(() => getTheme(colorModeManager, defaultColorMode));
	const [resolvedColorMode, setResolvedColorMode] = (0, import_react.useState)(() => getTheme(colorModeManager));
	const { getSystemTheme, setClassName, setDataset, addListener } = (0, import_react.useMemo)(() => getColorModeUtils({
		preventTransition: disableTransitionOnChange,
		nonce: cache?.nonce
	}), [disableTransitionOnChange, cache?.nonce]);
	const resolvedValue = initialColorMode === "system" && !colorMode ? resolvedColorMode : colorMode;
	const setColorMode = (0, import_react.useCallback)((value2) => {
		const resolved = value2 === "system" ? getSystemTheme() : value2;
		rawSetColorMode(resolved);
		setClassName(resolved === "dark");
		setDataset(resolved);
		colorModeManager.set(resolved);
	}, [
		colorModeManager,
		getSystemTheme,
		setClassName,
		setDataset
	]);
	useSafeLayoutEffect$1(() => {
		if (initialColorMode === "system") setResolvedColorMode(getSystemTheme());
	}, []);
	(0, import_react.useEffect)(() => {
		const managerValue = colorModeManager.get();
		if (managerValue) {
			setColorMode(managerValue);
			return;
		}
		if (initialColorMode === "system") {
			setColorMode("system");
			return;
		}
		setColorMode(defaultColorMode);
	}, [
		colorModeManager,
		defaultColorMode,
		initialColorMode,
		setColorMode
	]);
	const toggleColorMode = (0, import_react.useCallback)(() => {
		setColorMode(resolvedValue === "dark" ? "light" : "dark");
	}, [resolvedValue, setColorMode]);
	(0, import_react.useEffect)(() => {
		if (!useSystemColorMode) return;
		return addListener(setColorMode);
	}, [
		useSystemColorMode,
		addListener,
		setColorMode
	]);
	const context = (0, import_react.useMemo)(() => ({
		colorMode: value ?? resolvedValue,
		toggleColorMode: value ? noop$1 : toggleColorMode,
		setColorMode: value ? noop$1 : setColorMode,
		forced: value !== void 0
	}), [
		resolvedValue,
		toggleColorMode,
		setColorMode,
		value
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorModeContext.Provider, {
		value: context,
		children
	});
};
ColorModeProvider.displayName = "ColorModeProvider";
function DarkMode(props) {
	const context = (0, import_react.useMemo)(() => ({
		colorMode: "dark",
		toggleColorMode: noop$1,
		setColorMode: noop$1,
		forced: true
	}), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorModeContext.Provider, {
		value: context,
		...props
	});
}
DarkMode.displayName = "DarkMode";
function LightMode(props) {
	const context = (0, import_react.useMemo)(() => ({
		colorMode: "light",
		toggleColorMode: noop$1,
		setColorMode: noop$1,
		forced: true
	}), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorModeContext.Provider, {
		value: context,
		...props
	});
}
LightMode.displayName = "LightMode";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/css-reset/css-reset.mjs
const css$1 = String.raw;
const vhPolyfill = css$1`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`;
const CSSPolyfill = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Global, { styles: vhPolyfill });
const CSSReset = ({ scope = "" }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Global, { styles: css$1`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${scope} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${scope} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${scope} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${scope} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${scope} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${scope} :where(b, strong) {
        font-weight: bold;
      }

      ${scope} small {
        font-size: 80%;
      }

      ${scope} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${scope} sub {
        bottom: -0.25em;
      }

      ${scope} sup {
        top: -0.5em;
      }

      ${scope} img {
        border-style: none;
      }

      ${scope} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${scope} :where(button, input) {
        overflow: visible;
      }

      ${scope} :where(button, select) {
        text-transform: none;
      }

      ${scope} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${scope} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${scope} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${scope} progress {
        vertical-align: baseline;
      }

      ${scope} textarea {
        overflow: auto;
      }

      ${scope} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${scope} input[type="number"]::-webkit-inner-spin-button,
      ${scope} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${scope} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${scope} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${scope} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${scope} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${scope} details {
        display: block;
      }

      ${scope} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${scope} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${scope} button {
        background: transparent;
        padding: 0;
      }

      ${scope} fieldset {
        margin: 0;
        padding: 0;
      }

      ${scope} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${scope} textarea {
        resize: vertical;
      }

      ${scope} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${scope} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${scope} table {
        border-collapse: collapse;
      }

      ${scope} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${scope} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${scope} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${scope} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${scope} select::-ms-expand {
        display: none;
      }

      ${vhPolyfill}
    ` });

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/system/providers.mjs
function ThemeProvider(props) {
	const { cssVarsRoot, theme: theme$1, children } = props;
	const computedTheme = (0, import_react.useMemo)(() => toCSSVar(theme$1), [theme$1]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ThemeProvider$1, {
		theme: computedTheme,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CSSVars, { root: cssVarsRoot }), children]
	});
}
function CSSVars({ root = ":host, :root" }) {
	const selector = [root, `[data-theme]`].join(",");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Global, { styles: (theme$1) => ({ [selector]: theme$1.__cssVars }) });
}
const [StylesProvider, useStyles] = createContext({
	name: "StylesContext",
	errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function GlobalStyle() {
	const { colorMode } = useColorMode();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Global, { styles: (theme$1) => {
		const styleObjectOrFn = memoizedGet(theme$1, "styles.global");
		const globalStyles = runIfFn(styleObjectOrFn, {
			theme: theme$1,
			colorMode
		});
		if (!globalStyles) return void 0;
		const styles = css(globalStyles)(theme$1);
		return styles;
	} });
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/portal/portal-manager.mjs
const [PortalManagerContextProvider, usePortalManager] = createContext({
	strict: false,
	name: "PortalManagerContext"
});
function PortalManager(props) {
	const { children, zIndex } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalManagerContextProvider, {
		value: { zIndex },
		children
	});
}
PortalManager.displayName = "PortalManager";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/env/env.mjs
const EnvironmentContext = (0, import_react.createContext)({
	getDocument() {
		return document;
	},
	getWindow() {
		return window;
	}
});
EnvironmentContext.displayName = "EnvironmentContext";
function EnvironmentProvider(props) {
	const { children, environment: environmentProp, disabled } = props;
	const ref = (0, import_react.useRef)(null);
	const context = (0, import_react.useMemo)(() => {
		if (environmentProp) return environmentProp;
		return {
			getDocument: () => ref.current?.ownerDocument ?? document,
			getWindow: () => ref.current?.ownerDocument.defaultView ?? window
		};
	}, [environmentProp]);
	const showSpan = !disabled || !environmentProp;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(EnvironmentContext.Provider, {
		value: context,
		children: [children, showSpan && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			id: "__chakra_env",
			hidden: true,
			ref
		})]
	});
}
EnvironmentProvider.displayName = "EnvironmentProvider";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/provider/provider.mjs
const Provider = (props) => {
	const { children, colorModeManager, portalZIndex, resetScope, resetCSS = true, theme: theme$1 = {}, environment, cssVarsRoot, disableEnvironment, disableGlobalStyle } = props;
	const _children = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnvironmentProvider, {
		environment,
		disabled: disableEnvironment,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, {
		theme: theme$1,
		cssVarsRoot,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ColorModeProvider, {
			colorModeManager,
			options: theme$1.config,
			children: [
				resetCSS ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CSSReset, { scope: resetScope }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CSSPolyfill, {}),
				!disableGlobalStyle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalStyle, {}),
				portalZIndex ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalManager, {
					zIndex: portalZIndex,
					children: _children
				}) : _children
			]
		})
	});
};

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
const LayoutGroupContext = (0, import_react.createContext)({});

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/utils/use-constant.mjs
/**
* Creates a constant value over the lifecycle of a component.
*
* Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
* a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
* you can ensure that initialisers don't execute twice or more.
*/
function useConstant(init) {
	const ref = (0, import_react.useRef)(null);
	if (ref.current === null) ref.current = init();
	return ref.current;
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/utils/is-browser.mjs
const isBrowser = typeof window !== "undefined";

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
const useIsomorphicLayoutEffect$1 = isBrowser ? import_react.useLayoutEffect : import_react.useEffect;

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/context/PresenceContext.mjs
/**
* @public
*/
const PresenceContext = /* @__PURE__ */ (0, import_react.createContext)(null);

//#endregion
//#region node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/array.mjs
function addUniqueItem(arr, item) {
	if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
	const index = arr.indexOf(item);
	if (index > -1) arr.splice(index, 1);
}

//#endregion
//#region node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/clamp.mjs
const clamp = (min$1, max$1, v) => {
	if (v > max$1) return max$1;
	if (v < min$1) return min$1;
	return v;
};

//#endregion
//#region node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/errors.mjs
let warning = () => {};
let invariant = () => {};

//#endregion
//#region node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/global-config.mjs
const MotionGlobalConfig = {};

//#endregion
//#region node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/is-numerical-string.mjs
/**
* Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
*/
const isNumericalString = (v) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);

//#endregion
//#region node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/is-object.mjs
function isObject$1(value) {
	return typeof value === "object" && value !== null;
}

//#endregion
//#region node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/is-zero-value-string.mjs
/**
* Check if the value is a zero value string like "0px" or "0%"
*/
const isZeroValueString = (v) => /^0[^.\s]+$/u.test(v);

//#endregion
//#region node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/memo.mjs
/* @__NO_SIDE_EFFECTS__ */
function memo$1(callback) {
	let result;
	return () => {
		if (result === void 0) result = callback();
		return result;
	};
}

//#endregion
//#region node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/noop.mjs
const noop = /* @__NO_SIDE_EFFECTS__ */ (any) => any;

//#endregion
//#region node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/pipe.mjs
/**
* Pipe
* Compose other transformers to run linearily
* pipe(min(20), max(40))
* @param  {...functions} transformers
* @return {function}
*/
const combineFunctions = (a, b) => (v) => b(a(v));
const pipe = (...transformers) => transformers.reduce(combineFunctions);

//#endregion
//#region node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/progress.mjs
const progress = /* @__NO_SIDE_EFFECTS__ */ (from, to, value) => {
	const toFromDifference = to - from;
	return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};

//#endregion
//#region node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/subscription-manager.mjs
var SubscriptionManager = class {
	constructor() {
		this.subscriptions = [];
	}
	add(handler) {
		addUniqueItem(this.subscriptions, handler);
		return () => removeItem(this.subscriptions, handler);
	}
	notify(a, b, c) {
		const numSubscriptions = this.subscriptions.length;
		if (!numSubscriptions) return;
		if (numSubscriptions === 1)
 /**
		* If there's only a single handler we can just call it without invoking a loop.
		*/
		this.subscriptions[0](a, b, c);
		else for (let i = 0; i < numSubscriptions; i++) {
			/**
			* Check whether the handler exists before firing as it's possible
			* the subscriptions were modified during this loop running.
			*/
			const handler = this.subscriptions[i];
			handler && handler(a, b, c);
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
};

//#endregion
//#region node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/time-conversion.mjs
/**
* Converts seconds to milliseconds
*
* @param seconds - Time in seconds.
* @return milliseconds - Converted time in milliseconds.
*/
const secondsToMilliseconds = /* @__NO_SIDE_EFFECTS__ */ (seconds) => seconds * 1e3;
const millisecondsToSeconds = /* @__NO_SIDE_EFFECTS__ */ (milliseconds) => milliseconds / 1e3;

//#endregion
//#region node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/velocity-per-second.mjs
function velocityPerSecond(velocity, frameDuration) {
	return frameDuration ? velocity * (1e3 / frameDuration) : 0;
}

//#endregion
//#region node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs
const calcBezier = (t, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t + (3 * a2 - 6 * a1)) * t + 3 * a1) * t;
const subdivisionPrecision = 1e-7;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
	let currentX;
	let currentT;
	let i = 0;
	do {
		currentT = lowerBound + (upperBound - lowerBound) / 2;
		currentX = calcBezier(currentT, mX1, mX2) - x;
		if (currentX > 0) upperBound = currentT;
		else lowerBound = currentT;
	} while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
	return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
	if (mX1 === mY1 && mX2 === mY2) return noop;
	const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
	return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}

//#endregion
//#region node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
const mirrorEasing = (easing) => (p) => p <= .5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;

//#endregion
//#region node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs
const reverseEasing = (easing) => (p) => 1 - easing(1 - p);

//#endregion
//#region node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/back.mjs
const backOut = /* @__PURE__ */ cubicBezier(.33, 1.53, .69, .99);
const backIn = /* @__PURE__ */ reverseEasing(backOut);
const backInOut = /* @__PURE__ */ mirrorEasing(backIn);

//#endregion
//#region node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/anticipate.mjs
const anticipate = (p) => (p *= 2) < 1 ? .5 * backIn(p) : .5 * (2 - Math.pow(2, -10 * (p - 1)));

//#endregion
//#region node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/circ.mjs
const circIn = (p) => 1 - Math.sin(Math.acos(p));
const circOut = reverseEasing(circIn);
const circInOut = mirrorEasing(circIn);

//#endregion
//#region node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/ease.mjs
const easeIn = /* @__PURE__ */ cubicBezier(.42, 0, 1, 1);
const easeOut = /* @__PURE__ */ cubicBezier(0, 0, .58, 1);
const easeInOut = /* @__PURE__ */ cubicBezier(.42, 0, .58, 1);

//#endregion
//#region node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs
const isEasingArray = (ease$1) => {
	return Array.isArray(ease$1) && typeof ease$1[0] !== "number";
};

//#endregion
//#region node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs
const isBezierDefinition = (easing) => Array.isArray(easing) && typeof easing[0] === "number";

//#endregion
//#region node_modules/.pnpm/motion-utils@12.23.6/node_modules/motion-utils/dist/es/easing/utils/map.mjs
const easingLookup = {
	linear: noop,
	easeIn,
	easeInOut,
	easeOut,
	circIn,
	circInOut,
	circOut,
	backIn,
	backInOut,
	backOut,
	anticipate
};
const isValidEasing = (easing) => {
	return typeof easing === "string";
};
const easingDefinitionToFunction = (definition) => {
	if (isBezierDefinition(definition)) {
		invariant(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`, "cubic-bezier-length");
		const [x1, y1, x2, y2] = definition;
		return cubicBezier(x1, y1, x2, y2);
	} else if (isValidEasing(definition)) {
		invariant(easingLookup[definition] !== void 0, `Invalid easing type '${definition}'`, "invalid-easing-type");
		return easingLookup[definition];
	}
	return definition;
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/frameloop/order.mjs
const stepsOrder = [
	"setup",
	"read",
	"resolveKeyframes",
	"preUpdate",
	"update",
	"preRender",
	"render",
	"postRender"
];

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/stats/buffer.mjs
const statsBuffer = {
	value: null,
	addProjectionMetrics: null
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/frameloop/render-step.mjs
function createRenderStep(runNextFrame, stepName) {
	/**
	* We create and reuse two queues, one to queue jobs for the current frame
	* and one for the next. We reuse to avoid triggering GC after x frames.
	*/
	let thisFrame = /* @__PURE__ */ new Set();
	let nextFrame = /* @__PURE__ */ new Set();
	/**
	* Track whether we're currently processing jobs in this step. This way
	* we can decide whether to schedule new jobs for this frame or next.
	*/
	let isProcessing = false;
	let flushNextFrame = false;
	/**
	* A set of processes which were marked keepAlive when scheduled.
	*/
	const toKeepAlive = /* @__PURE__ */ new WeakSet();
	let latestFrameData = {
		delta: 0,
		timestamp: 0,
		isProcessing: false
	};
	let numCalls = 0;
	function triggerCallback(callback) {
		if (toKeepAlive.has(callback)) {
			step.schedule(callback);
			runNextFrame();
		}
		numCalls++;
		callback(latestFrameData);
	}
	const step = {
		schedule: (callback, keepAlive = false, immediate = false) => {
			const addToCurrentFrame = immediate && isProcessing;
			const queue = addToCurrentFrame ? thisFrame : nextFrame;
			if (keepAlive) toKeepAlive.add(callback);
			if (!queue.has(callback)) queue.add(callback);
			return callback;
		},
		cancel: (callback) => {
			nextFrame.delete(callback);
			toKeepAlive.delete(callback);
		},
		process: (frameData$1) => {
			latestFrameData = frameData$1;
			/**
			* If we're already processing we've probably been triggered by a flushSync
			* inside an existing process. Instead of executing, mark flushNextFrame
			* as true and ensure we flush the following frame at the end of this one.
			*/
			if (isProcessing) {
				flushNextFrame = true;
				return;
			}
			isProcessing = true;
			[thisFrame, nextFrame] = [nextFrame, thisFrame];
			thisFrame.forEach(triggerCallback);
			/**
			* If we're recording stats then
			*/
			if (stepName && statsBuffer.value) statsBuffer.value.frameloop[stepName].push(numCalls);
			numCalls = 0;
			thisFrame.clear();
			isProcessing = false;
			if (flushNextFrame) {
				flushNextFrame = false;
				step.process(frameData$1);
			}
		}
	};
	return step;
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/frameloop/batcher.mjs
const maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
	let runNextFrame = false;
	let useDefaultElapsed = true;
	const state = {
		delta: 0,
		timestamp: 0,
		isProcessing: false
	};
	const flagRunNextFrame = () => runNextFrame = true;
	const steps = stepsOrder.reduce((acc, key) => {
		acc[key] = createRenderStep(flagRunNextFrame, allowKeepAlive ? key : void 0);
		return acc;
	}, {});
	const { setup, read: read$1, resolveKeyframes, preUpdate, update, preRender, render, postRender } = steps;
	const processBatch = () => {
		const timestamp = MotionGlobalConfig.useManualTiming ? state.timestamp : performance.now();
		runNextFrame = false;
		if (!MotionGlobalConfig.useManualTiming) state.delta = useDefaultElapsed ? 1e3 / 60 : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
		state.timestamp = timestamp;
		state.isProcessing = true;
		setup.process(state);
		read$1.process(state);
		resolveKeyframes.process(state);
		preUpdate.process(state);
		update.process(state);
		preRender.process(state);
		render.process(state);
		postRender.process(state);
		state.isProcessing = false;
		if (runNextFrame && allowKeepAlive) {
			useDefaultElapsed = false;
			scheduleNextBatch(processBatch);
		}
	};
	const wake = () => {
		runNextFrame = true;
		useDefaultElapsed = true;
		if (!state.isProcessing) scheduleNextBatch(processBatch);
	};
	const schedule = stepsOrder.reduce((acc, key) => {
		const step = steps[key];
		acc[key] = (process, keepAlive = false, immediate = false) => {
			if (!runNextFrame) wake();
			return step.schedule(process, keepAlive, immediate);
		};
		return acc;
	}, {});
	const cancel = (process) => {
		for (let i = 0; i < stepsOrder.length; i++) steps[stepsOrder[i]].cancel(process);
	};
	return {
		schedule,
		cancel,
		state,
		steps
	};
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/frameloop/frame.mjs
const { schedule: frame, cancel: cancelFrame, state: frameData, steps: frameSteps } = /* @__PURE__ */ createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true);

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/frameloop/sync-time.mjs
let now;
function clearTime() {
	now = void 0;
}
/**
* An eventloop-synchronous alternative to performance.now().
*
* Ensures that time measurements remain consistent within a synchronous context.
* Usually calling performance.now() twice within the same synchronous context
* will return different values which isn't useful for animations when we're usually
* trying to sync animations to the same frame.
*/
const time = {
	now: () => {
		if (now === void 0) time.set(frameData.isProcessing || MotionGlobalConfig.useManualTiming ? frameData.timestamp : performance.now());
		return now;
	},
	set: (newTime) => {
		now = newTime;
		queueMicrotask(clearTime);
	}
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/stats/animation-count.mjs
const activeAnimations = {
	layout: 0,
	mainThread: 0,
	waapi: 0
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/utils/is-css-variable.mjs
const checkStringStartsWith = (token) => (key) => typeof key === "string" && key.startsWith(token);
const isCSSVariableName = /* @__PURE__ */ checkStringStartsWith("--");
const startsAsVariableToken = /* @__PURE__ */ checkStringStartsWith("var(--");
const isCSSVariableToken = (value) => {
	const startsWithToken = startsAsVariableToken(value);
	if (!startsWithToken) return false;
	return singleCssVariableRegex.test(value.split("/*")[0].trim());
};
const singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/value/types/numbers/index.mjs
const number = {
	test: (v) => typeof v === "number",
	parse: parseFloat,
	transform: (v) => v
};
const alpha = {
	...number,
	transform: (v) => clamp(0, 1, v)
};
const scale = {
	...number,
	default: 1
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/value/types/utils/sanitize.mjs
const sanitize = (v) => Math.round(v * 1e5) / 1e5;

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/value/types/utils/float-regex.mjs
const floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
function isNullish(v) {
	return v == null;
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
const singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/value/types/color/utils.mjs
/**
* Returns true if the provided string is a color, ie rgba(0,0,0,0) or #000,
* but false if a number or multiple colors
*/
const isColorString = (type, testProp) => (v) => {
	return Boolean(typeof v === "string" && singleColorRegex.test(v) && v.startsWith(type) || testProp && !isNullish(v) && Object.prototype.hasOwnProperty.call(v, testProp));
};
const splitColor = (aName, bName, cName) => (v) => {
	if (typeof v !== "string") return v;
	const [a, b, c, alpha$1] = v.match(floatRegex);
	return {
		[aName]: parseFloat(a),
		[bName]: parseFloat(b),
		[cName]: parseFloat(c),
		alpha: alpha$1 !== void 0 ? parseFloat(alpha$1) : 1
	};
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/value/types/color/rgba.mjs
const clampRgbUnit = (v) => clamp(0, 255, v);
const rgbUnit = {
	...number,
	transform: (v) => Math.round(clampRgbUnit(v))
};
const rgba = {
	test: /* @__PURE__ */ isColorString("rgb", "red"),
	parse: /* @__PURE__ */ splitColor("red", "green", "blue"),
	transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/value/types/color/hex.mjs
function parseHex(v) {
	let r = "";
	let g = "";
	let b = "";
	let a = "";
	if (v.length > 5) {
		r = v.substring(1, 3);
		g = v.substring(3, 5);
		b = v.substring(5, 7);
		a = v.substring(7, 9);
	} else {
		r = v.substring(1, 2);
		g = v.substring(2, 3);
		b = v.substring(3, 4);
		a = v.substring(4, 5);
		r += r;
		g += g;
		b += b;
		a += a;
	}
	return {
		red: parseInt(r, 16),
		green: parseInt(g, 16),
		blue: parseInt(b, 16),
		alpha: a ? parseInt(a, 16) / 255 : 1
	};
}
const hex = {
	test: /* @__PURE__ */ isColorString("#"),
	parse: parseHex,
	transform: rgba.transform
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/value/types/numbers/units.mjs
const createUnitType = /* @__NO_SIDE_EFFECTS__ */ (unit) => ({
	test: (v) => typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1,
	parse: parseFloat,
	transform: (v) => `${v}${unit}`
});
const degrees = /* @__PURE__ */ createUnitType("deg");
const percent = /* @__PURE__ */ createUnitType("%");
const px = /* @__PURE__ */ createUnitType("px");
const vh = /* @__PURE__ */ createUnitType("vh");
const vw = /* @__PURE__ */ createUnitType("vw");
const progressPercentage = /* @__PURE__ */ (() => ({
	...percent,
	parse: (v) => percent.parse(v) / 100,
	transform: (v) => percent.transform(v * 100)
}))();

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/value/types/color/hsla.mjs
const hsla = {
	test: /* @__PURE__ */ isColorString("hsl", "hue"),
	parse: /* @__PURE__ */ splitColor("hue", "saturation", "lightness"),
	transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
		return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
	}
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/value/types/color/index.mjs
const color = {
	test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
	parse: (v) => {
		if (rgba.test(v)) return rgba.parse(v);
		else if (hsla.test(v)) return hsla.parse(v);
		else return hex.parse(v);
	},
	transform: (v) => {
		return typeof v === "string" ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
	},
	getAnimatableNone: (v) => {
		const parsed = color.parse(v);
		parsed.alpha = 0;
		return color.transform(parsed);
	}
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/value/types/utils/color-regex.mjs
const colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/value/types/complex/index.mjs
function test(v) {
	return isNaN(v) && typeof v === "string" && (v.match(floatRegex)?.length || 0) + (v.match(colorRegex)?.length || 0) > 0;
}
const NUMBER_TOKEN = "number";
const COLOR_TOKEN = "color";
const VAR_TOKEN = "var";
const VAR_FUNCTION_TOKEN = "var(";
const SPLIT_TOKEN = "${}";
const complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function analyseComplexValue(value) {
	const originalValue = value.toString();
	const values = [];
	const indexes = {
		color: [],
		number: [],
		var: []
	};
	const types = [];
	let i = 0;
	const tokenised = originalValue.replace(complexRegex, (parsedValue) => {
		if (color.test(parsedValue)) {
			indexes.color.push(i);
			types.push(COLOR_TOKEN);
			values.push(color.parse(parsedValue));
		} else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
			indexes.var.push(i);
			types.push(VAR_TOKEN);
			values.push(parsedValue);
		} else {
			indexes.number.push(i);
			types.push(NUMBER_TOKEN);
			values.push(parseFloat(parsedValue));
		}
		++i;
		return SPLIT_TOKEN;
	});
	const split$1 = tokenised.split(SPLIT_TOKEN);
	return {
		values,
		split: split$1,
		indexes,
		types
	};
}
function parseComplexValue(v) {
	return analyseComplexValue(v).values;
}
function createTransformer(source) {
	const { split: split$1, types } = analyseComplexValue(source);
	const numSections = split$1.length;
	return (v) => {
		let output = "";
		for (let i = 0; i < numSections; i++) {
			output += split$1[i];
			if (v[i] !== void 0) {
				const type = types[i];
				if (type === NUMBER_TOKEN) output += sanitize(v[i]);
				else if (type === COLOR_TOKEN) output += color.transform(v[i]);
				else output += v[i];
			}
		}
		return output;
	};
}
const convertNumbersToZero = (v) => typeof v === "number" ? 0 : color.test(v) ? color.getAnimatableNone(v) : v;
function getAnimatableNone$1(v) {
	const parsed = parseComplexValue(v);
	const transformer = createTransformer(v);
	return transformer(parsed.map(convertNumbersToZero));
}
const complex = {
	test,
	parse: parseComplexValue,
	createTransformer,
	getAnimatableNone: getAnimatableNone$1
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
function hueToRgb(p, q, t) {
	if (t < 0) t += 1;
	if (t > 1) t -= 1;
	if (t < 1 / 6) return p + (q - p) * 6 * t;
	if (t < 1 / 2) return q;
	if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
	return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha: alpha$1 }) {
	hue /= 360;
	saturation /= 100;
	lightness /= 100;
	let red = 0;
	let green = 0;
	let blue = 0;
	if (!saturation) red = green = blue = lightness;
	else {
		const q = lightness < .5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
		const p = 2 * lightness - q;
		red = hueToRgb(p, q, hue + 1 / 3);
		green = hueToRgb(p, q, hue);
		blue = hueToRgb(p, q, hue - 1 / 3);
	}
	return {
		red: Math.round(red * 255),
		green: Math.round(green * 255),
		blue: Math.round(blue * 255),
		alpha: alpha$1
	};
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/utils/mix/immediate.mjs
function mixImmediate(a, b) {
	return (p) => p > 0 ? b : a;
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/utils/mix/number.mjs
const mixNumber = (from, to, progress$1) => {
	return from + (to - from) * progress$1;
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/utils/mix/color.mjs
const mixLinearColor = (from, to, v) => {
	const fromExpo = from * from;
	const expo = v * (to * to - fromExpo) + fromExpo;
	return expo < 0 ? 0 : Math.sqrt(expo);
};
const colorTypes = [
	hex,
	rgba,
	hsla
];
const getColorType = (v) => colorTypes.find((type) => type.test(v));
function asRGBA(color$1) {
	const type = getColorType(color$1);
	warning(Boolean(type), `'${color$1}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable");
	if (!Boolean(type)) return false;
	let model = type.parse(color$1);
	if (type === hsla) model = hslaToRgba(model);
	return model;
}
const mixColor = (from, to) => {
	const fromRGBA = asRGBA(from);
	const toRGBA = asRGBA(to);
	if (!fromRGBA || !toRGBA) return mixImmediate(from, to);
	const blended = { ...fromRGBA };
	return (v) => {
		blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
		blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
		blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
		blended.alpha = mixNumber(fromRGBA.alpha, toRGBA.alpha, v);
		return rgba.transform(blended);
	};
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/utils/mix/visibility.mjs
const invisibleValues = new Set(["none", "hidden"]);
/**
* Returns a function that, when provided a progress value between 0 and 1,
* will return the "none" or "hidden" string only when the progress is that of
* the origin or target.
*/
function mixVisibility(origin, target) {
	if (invisibleValues.has(origin)) return (p) => p <= 0 ? origin : target;
	else return (p) => p >= 1 ? target : origin;
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/utils/mix/complex.mjs
function mixNumber$1(a, b) {
	return (p) => mixNumber(a, b, p);
}
function getMixer(a) {
	if (typeof a === "number") return mixNumber$1;
	else if (typeof a === "string") return isCSSVariableToken(a) ? mixImmediate : color.test(a) ? mixColor : mixComplex;
	else if (Array.isArray(a)) return mixArray;
	else if (typeof a === "object") return color.test(a) ? mixColor : mixObject;
	return mixImmediate;
}
function mixArray(a, b) {
	const output = [...a];
	const numValues = output.length;
	const blendValue = a.map((v, i) => getMixer(v)(v, b[i]));
	return (p) => {
		for (let i = 0; i < numValues; i++) output[i] = blendValue[i](p);
		return output;
	};
}
function mixObject(a, b) {
	const output = {
		...a,
		...b
	};
	const blendValue = {};
	for (const key in output) if (a[key] !== void 0 && b[key] !== void 0) blendValue[key] = getMixer(a[key])(a[key], b[key]);
	return (v) => {
		for (const key in blendValue) output[key] = blendValue[key](v);
		return output;
	};
}
function matchOrder(origin, target) {
	const orderedOrigin = [];
	const pointers = {
		color: 0,
		var: 0,
		number: 0
	};
	for (let i = 0; i < target.values.length; i++) {
		const type = target.types[i];
		const originIndex = origin.indexes[type][pointers[type]];
		const originValue = origin.values[originIndex] ?? 0;
		orderedOrigin[i] = originValue;
		pointers[type]++;
	}
	return orderedOrigin;
}
const mixComplex = (origin, target) => {
	const template = complex.createTransformer(target);
	const originStats = analyseComplexValue(origin);
	const targetStats = analyseComplexValue(target);
	const canInterpolate = originStats.indexes.var.length === targetStats.indexes.var.length && originStats.indexes.color.length === targetStats.indexes.color.length && originStats.indexes.number.length >= targetStats.indexes.number.length;
	if (canInterpolate) {
		if (invisibleValues.has(origin) && !targetStats.values.length || invisibleValues.has(target) && !originStats.values.length) return mixVisibility(origin, target);
		return pipe(mixArray(matchOrder(originStats, targetStats), targetStats.values), template);
	} else {
		warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different");
		return mixImmediate(origin, target);
	}
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/utils/mix/index.mjs
function mix(from, to, p) {
	if (typeof from === "number" && typeof to === "number" && typeof p === "number") return mixNumber(from, to, p);
	const mixer = getMixer(from);
	return mixer(from, to);
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/drivers/frame.mjs
const frameloopDriver = (update) => {
	const passTimestamp = ({ timestamp }) => update(timestamp);
	return {
		start: (keepAlive = true) => frame.update(passTimestamp, keepAlive),
		stop: () => cancelFrame(passTimestamp),
		now: () => frameData.isProcessing ? frameData.timestamp : time.now()
	};
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs
const generateLinearEasing = (easing, duration, resolution = 10) => {
	let points = "";
	const numPoints = Math.max(Math.round(duration / resolution), 2);
	for (let i = 0; i < numPoints; i++) points += Math.round(easing(i / (numPoints - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${points.substring(0, points.length - 2)})`;
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs
/**
* Implement a practical max duration for keyframe generation
* to prevent infinite loops
*/
const maxGeneratorDuration = 2e4;
function calcGeneratorDuration(generator) {
	let duration = 0;
	const timeStep = 50;
	let state = generator.next(duration);
	while (!state.done && duration < maxGeneratorDuration) {
		duration += timeStep;
		state = generator.next(duration);
	}
	return duration >= maxGeneratorDuration ? Infinity : duration;
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
/**
* Create a progress => progress easing function from a generator.
*/
function createGeneratorEasing(options$1, scale$1 = 100, createGenerator) {
	const generator = createGenerator({
		...options$1,
		keyframes: [0, scale$1]
	});
	const duration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
	return {
		type: "keyframes",
		ease: (progress$1) => {
			return generator.next(duration * progress$1).value / scale$1;
		},
		duration: millisecondsToSeconds(duration)
	};
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs
const velocitySampleDuration = 5;
function calcGeneratorVelocity(resolveValue, t, current) {
	const prevT = Math.max(t - velocitySampleDuration, 0);
	return velocityPerSecond(current - resolveValue(prevT), t - prevT);
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/generators/spring/defaults.mjs
const springDefaults = {
	stiffness: 100,
	damping: 10,
	mass: 1,
	velocity: 0,
	duration: 800,
	bounce: .3,
	visualDuration: .3,
	restSpeed: {
		granular: .01,
		default: 2
	},
	restDelta: {
		granular: .005,
		default: .5
	},
	minDuration: .01,
	maxDuration: 10,
	minDamping: .05,
	maxDamping: 1
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/generators/spring/find.mjs
const safeMin = .001;
function findSpring({ duration = springDefaults.duration, bounce = springDefaults.bounce, velocity = springDefaults.velocity, mass = springDefaults.mass }) {
	let envelope;
	let derivative;
	warning(duration <= secondsToMilliseconds(springDefaults.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
	let dampingRatio = 1 - bounce;
	/**
	* Restrict dampingRatio and duration to within acceptable ranges.
	*/
	dampingRatio = clamp(springDefaults.minDamping, springDefaults.maxDamping, dampingRatio);
	duration = clamp(springDefaults.minDuration, springDefaults.maxDuration, millisecondsToSeconds(duration));
	if (dampingRatio < 1) {
		/**
		* Underdamped spring
		*/
		envelope = (undampedFreq$1) => {
			const exponentialDecay = undampedFreq$1 * dampingRatio;
			const delta = exponentialDecay * duration;
			const a = exponentialDecay - velocity;
			const b = calcAngularFreq(undampedFreq$1, dampingRatio);
			const c = Math.exp(-delta);
			return safeMin - a / b * c;
		};
		derivative = (undampedFreq$1) => {
			const exponentialDecay = undampedFreq$1 * dampingRatio;
			const delta = exponentialDecay * duration;
			const d = delta * velocity + velocity;
			const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq$1, 2) * duration;
			const f = Math.exp(-delta);
			const g = calcAngularFreq(Math.pow(undampedFreq$1, 2), dampingRatio);
			const factor = -envelope(undampedFreq$1) + safeMin > 0 ? -1 : 1;
			return factor * ((d - e) * f) / g;
		};
	} else {
		/**
		* Critically-damped spring
		*/
		envelope = (undampedFreq$1) => {
			const a = Math.exp(-undampedFreq$1 * duration);
			const b = (undampedFreq$1 - velocity) * duration + 1;
			return -safeMin + a * b;
		};
		derivative = (undampedFreq$1) => {
			const a = Math.exp(-undampedFreq$1 * duration);
			const b = (velocity - undampedFreq$1) * (duration * duration);
			return a * b;
		};
	}
	const initialGuess = 5 / duration;
	const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
	duration = secondsToMilliseconds(duration);
	if (isNaN(undampedFreq)) return {
		stiffness: springDefaults.stiffness,
		damping: springDefaults.damping,
		duration
	};
	else {
		const stiffness = Math.pow(undampedFreq, 2) * mass;
		return {
			stiffness,
			damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
			duration
		};
	}
}
const rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
	let result = initialGuess;
	for (let i = 1; i < rootIterations; i++) result = result - envelope(result) / derivative(result);
	return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
	return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/generators/spring/index.mjs
const durationKeys = ["duration", "bounce"];
const physicsKeys = [
	"stiffness",
	"damping",
	"mass"
];
function isSpringType(options$1, keys) {
	return keys.some((key) => options$1[key] !== void 0);
}
function getSpringOptions(options$1) {
	let springOptions = {
		velocity: springDefaults.velocity,
		stiffness: springDefaults.stiffness,
		damping: springDefaults.damping,
		mass: springDefaults.mass,
		isResolvedFromDuration: false,
		...options$1
	};
	if (!isSpringType(options$1, physicsKeys) && isSpringType(options$1, durationKeys)) if (options$1.visualDuration) {
		const visualDuration = options$1.visualDuration;
		const root = 2 * Math.PI / (visualDuration * 1.2);
		const stiffness = root * root;
		const damping = 2 * clamp(.05, 1, 1 - (options$1.bounce || 0)) * Math.sqrt(stiffness);
		springOptions = {
			...springOptions,
			mass: springDefaults.mass,
			stiffness,
			damping
		};
	} else {
		const derived = findSpring(options$1);
		springOptions = {
			...springOptions,
			...derived,
			mass: springDefaults.mass
		};
		springOptions.isResolvedFromDuration = true;
	}
	return springOptions;
}
function spring(optionsOrVisualDuration = springDefaults.visualDuration, bounce = springDefaults.bounce) {
	const options$1 = typeof optionsOrVisualDuration !== "object" ? {
		visualDuration: optionsOrVisualDuration,
		keyframes: [0, 1],
		bounce
	} : optionsOrVisualDuration;
	let { restSpeed, restDelta } = options$1;
	const origin = options$1.keyframes[0];
	const target = options$1.keyframes[options$1.keyframes.length - 1];
	/**
	* This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
	* to reduce GC during animation.
	*/
	const state = {
		done: false,
		value: origin
	};
	const { stiffness, damping, mass, duration, velocity, isResolvedFromDuration } = getSpringOptions({
		...options$1,
		velocity: -millisecondsToSeconds(options$1.velocity || 0)
	});
	const initialVelocity = velocity || 0;
	const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
	const initialDelta = target - origin;
	const undampedAngularFreq = millisecondsToSeconds(Math.sqrt(stiffness / mass));
	/**
	* If we're working on a granular scale, use smaller defaults for determining
	* when the spring is finished.
	*
	* These defaults have been selected emprically based on what strikes a good
	* ratio between feeling good and finishing as soon as changes are imperceptible.
	*/
	const isGranularScale = Math.abs(initialDelta) < 5;
	restSpeed || (restSpeed = isGranularScale ? springDefaults.restSpeed.granular : springDefaults.restSpeed.default);
	restDelta || (restDelta = isGranularScale ? springDefaults.restDelta.granular : springDefaults.restDelta.default);
	let resolveSpring;
	if (dampingRatio < 1) {
		const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
		resolveSpring = (t) => {
			const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
			return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
		};
	} else if (dampingRatio === 1) resolveSpring = (t) => target - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
	else {
		const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
		resolveSpring = (t) => {
			const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
			const freqForT = Math.min(dampedAngularFreq * t, 300);
			return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
		};
	}
	const generator = {
		calculatedDuration: isResolvedFromDuration ? duration || null : null,
		next: (t) => {
			const current = resolveSpring(t);
			if (!isResolvedFromDuration) {
				let currentVelocity = t === 0 ? initialVelocity : 0;
				/**
				* We only need to calculate velocity for under-damped springs
				* as over- and critically-damped springs can't overshoot, so
				* checking only for displacement is enough.
				*/
				if (dampingRatio < 1) currentVelocity = t === 0 ? secondsToMilliseconds(initialVelocity) : calcGeneratorVelocity(resolveSpring, t, current);
				const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
				const isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
				state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
			} else state.done = t >= duration;
			state.value = state.done ? target : current;
			return state;
		},
		toString: () => {
			const calculatedDuration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
			const easing = generateLinearEasing((progress$1) => generator.next(calculatedDuration * progress$1).value, calculatedDuration, 30);
			return calculatedDuration + "ms " + easing;
		},
		toTransition: () => {}
	};
	return generator;
}
spring.applyToOptions = (options$1) => {
	const generatorOptions = createGeneratorEasing(options$1, 100, spring);
	options$1.ease = generatorOptions.ease;
	options$1.duration = secondsToMilliseconds(generatorOptions.duration);
	options$1.type = "keyframes";
	return options$1;
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
function inertia({ keyframes: keyframes$2, velocity = 0, power = .8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min: min$1, max: max$1, restDelta = .5, restSpeed }) {
	const origin = keyframes$2[0];
	const state = {
		done: false,
		value: origin
	};
	const isOutOfBounds = (v) => min$1 !== void 0 && v < min$1 || max$1 !== void 0 && v > max$1;
	const nearestBoundary = (v) => {
		if (min$1 === void 0) return max$1;
		if (max$1 === void 0) return min$1;
		return Math.abs(min$1 - v) < Math.abs(max$1 - v) ? min$1 : max$1;
	};
	let amplitude = power * velocity;
	const ideal = origin + amplitude;
	const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
	/**
	* If the target has changed we need to re-calculate the amplitude, otherwise
	* the animation will start from the wrong position.
	*/
	if (target !== ideal) amplitude = target - origin;
	const calcDelta = (t) => -amplitude * Math.exp(-t / timeConstant);
	const calcLatest = (t) => target + calcDelta(t);
	const applyFriction = (t) => {
		const delta = calcDelta(t);
		const latest = calcLatest(t);
		state.done = Math.abs(delta) <= restDelta;
		state.value = state.done ? target : latest;
	};
	/**
	* Ideally this would resolve for t in a stateless way, we could
	* do that by always precalculating the animation but as we know
	* this will be done anyway we can assume that spring will
	* be discovered during that.
	*/
	let timeReachedBoundary;
	let spring$1;
	const checkCatchBoundary = (t) => {
		if (!isOutOfBounds(state.value)) return;
		timeReachedBoundary = t;
		spring$1 = spring({
			keyframes: [state.value, nearestBoundary(state.value)],
			velocity: calcGeneratorVelocity(calcLatest, t, state.value),
			damping: bounceDamping,
			stiffness: bounceStiffness,
			restDelta,
			restSpeed
		});
	};
	checkCatchBoundary(0);
	return {
		calculatedDuration: null,
		next: (t) => {
			/**
			* We need to resolve the friction to figure out if we need a
			* spring but we don't want to do this twice per frame. So here
			* we flag if we updated for this frame and later if we did
			* we can skip doing it again.
			*/
			let hasUpdatedFrame = false;
			if (!spring$1 && timeReachedBoundary === void 0) {
				hasUpdatedFrame = true;
				applyFriction(t);
				checkCatchBoundary(t);
			}
			/**
			* If we have a spring and the provided t is beyond the moment the friction
			* animation crossed the min/max boundary, use the spring.
			*/
			if (timeReachedBoundary !== void 0 && t >= timeReachedBoundary) return spring$1.next(t - timeReachedBoundary);
			else {
				!hasUpdatedFrame && applyFriction(t);
				return state;
			}
		}
	};
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/utils/interpolate.mjs
function createMixers(output, ease$1, customMixer) {
	const mixers = [];
	const mixerFactory = customMixer || MotionGlobalConfig.mix || mix;
	const numMixers = output.length - 1;
	for (let i = 0; i < numMixers; i++) {
		let mixer = mixerFactory(output[i], output[i + 1]);
		if (ease$1) {
			const easingFunction = Array.isArray(ease$1) ? ease$1[i] || noop : ease$1;
			mixer = pipe(easingFunction, mixer);
		}
		mixers.push(mixer);
	}
	return mixers;
}
/**
* Create a function that maps from a numerical input array to a generic output array.
*
* Accepts:
*   - Numbers
*   - Colors (hex, hsl, hsla, rgb, rgba)
*   - Complex (combinations of one or more numbers or strings)
*
* ```jsx
* const mixColor = interpolate([0, 1], ['#fff', '#000'])
*
* mixColor(0.5) // 'rgba(128, 128, 128, 1)'
* ```
*
* TODO Revisit this approach once we've moved to data models for values,
* probably not needed to pregenerate mixer functions.
*
* @public
*/
function interpolate(input, output, { clamp: isClamp = true, ease: ease$1, mixer } = {}) {
	const inputLength = input.length;
	invariant(inputLength === output.length, "Both input and output ranges must be the same length", "range-length");
	/**
	* If we're only provided a single input, we can just make a function
	* that returns the output.
	*/
	if (inputLength === 1) return () => output[0];
	if (inputLength === 2 && output[0] === output[1]) return () => output[1];
	const isZeroDeltaRange = input[0] === input[1];
	if (input[0] > input[inputLength - 1]) {
		input = [...input].reverse();
		output = [...output].reverse();
	}
	const mixers = createMixers(output, ease$1, mixer);
	const numMixers = mixers.length;
	const interpolator = (v) => {
		if (isZeroDeltaRange && v < input[0]) return output[0];
		let i = 0;
		if (numMixers > 1) {
			for (; i < input.length - 2; i++) if (v < input[i + 1]) break;
		}
		const progressInRange = progress(input[i], input[i + 1], v);
		return mixers[i](progressInRange);
	};
	return isClamp ? (v) => interpolator(clamp(input[0], input[inputLength - 1], v)) : interpolator;
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
function fillOffset(offset$1, remaining) {
	const min$1 = offset$1[offset$1.length - 1];
	for (let i = 1; i <= remaining; i++) {
		const offsetProgress = progress(0, remaining, i);
		offset$1.push(mixNumber(min$1, 1, offsetProgress));
	}
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
function defaultOffset(arr) {
	const offset$1 = [0];
	fillOffset(offset$1, arr.length - 1);
	return offset$1;
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function convertOffsetToTimes(offset$1, duration) {
	return offset$1.map((o) => o * duration);
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
function defaultEasing(values, easing) {
	return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function keyframes$1({ duration = 300, keyframes: keyframeValues, times, ease: ease$1 = "easeInOut" }) {
	/**
	* Easing functions can be externally defined as strings. Here we convert them
	* into actual functions.
	*/
	const easingFunctions = isEasingArray(ease$1) ? ease$1.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease$1);
	/**
	* This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
	* to reduce GC during animation.
	*/
	const state = {
		done: false,
		value: keyframeValues[0]
	};
	/**
	* Create a times array based on the provided 0-1 offsets
	*/
	const absoluteTimes = convertOffsetToTimes(times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues), duration);
	const mapTimeToKeyframe = interpolate(absoluteTimes, keyframeValues, { ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions) });
	return {
		calculatedDuration: duration,
		next: (t) => {
			state.value = mapTimeToKeyframe(t);
			state.done = t >= duration;
			return state;
		}
	};
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
const isNotNull$1 = (value) => value !== null;
function getFinalKeyframe$1(keyframes$2, { repeat, repeatType = "loop" }, finalKeyframe, speed = 1) {
	const resolvedKeyframes = keyframes$2.filter(isNotNull$1);
	const useFirstKeyframe = speed < 0 || repeat && repeatType !== "loop" && repeat % 2 === 1;
	const index = useFirstKeyframe ? 0 : resolvedKeyframes.length - 1;
	return !index || finalKeyframe === void 0 ? resolvedKeyframes[index] : finalKeyframe;
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
const transitionTypeMap = {
	decay: inertia,
	inertia,
	tween: keyframes$1,
	keyframes: keyframes$1,
	spring
};
function replaceTransitionType(transition) {
	if (typeof transition.type === "string") transition.type = transitionTypeMap[transition.type];
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
var WithPromise = class {
	constructor() {
		this.updateFinished();
	}
	get finished() {
		return this._finished;
	}
	updateFinished() {
		this._finished = new Promise((resolve) => {
			this.resolve = resolve;
		});
	}
	notifyFinished() {
		this.resolve();
	}
	/**
	* Allows the animation to be awaited.
	*
	* @deprecated Use `finished` instead.
	*/
	then(onResolve, onReject) {
		return this.finished.then(onResolve, onReject);
	}
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/JSAnimation.mjs
const percentToProgress = (percent$1) => percent$1 / 100;
var JSAnimation = class extends WithPromise {
	constructor(options$1) {
		super();
		this.state = "idle";
		this.startTime = null;
		this.isStopped = false;
		/**
		* The current time of the animation.
		*/
		this.currentTime = 0;
		/**
		* The time at which the animation was paused.
		*/
		this.holdTime = null;
		/**
		* Playback speed as a factor. 0 would be stopped, -1 reverse and 2 double speed.
		*/
		this.playbackSpeed = 1;
		/**
		* This method is bound to the instance to fix a pattern where
		* animation.stop is returned as a reference from a useEffect.
		*/
		this.stop = () => {
			const { motionValue: motionValue$1 } = this.options;
			if (motionValue$1 && motionValue$1.updatedAt !== time.now()) this.tick(time.now());
			this.isStopped = true;
			if (this.state === "idle") return;
			this.teardown();
			this.options.onStop?.();
		};
		activeAnimations.mainThread++;
		this.options = options$1;
		this.initAnimation();
		this.play();
		if (options$1.autoplay === false) this.pause();
	}
	initAnimation() {
		const { options: options$1 } = this;
		replaceTransitionType(options$1);
		const { type = keyframes$1, repeat = 0, repeatDelay = 0, repeatType, velocity = 0 } = options$1;
		let { keyframes: keyframes$1$1 } = options$1;
		const generatorFactory = type || keyframes$1;
		if (generatorFactory !== keyframes$1 && typeof keyframes$1$1[0] !== "number") {
			this.mixKeyframes = pipe(percentToProgress, mix(keyframes$1$1[0], keyframes$1$1[1]));
			keyframes$1$1 = [0, 100];
		}
		const generator = generatorFactory({
			...options$1,
			keyframes: keyframes$1$1
		});
		/**
		* If we have a mirror repeat type we need to create a second generator that outputs the
		* mirrored (not reversed) animation and later ping pong between the two generators.
		*/
		if (repeatType === "mirror") this.mirroredGenerator = generatorFactory({
			...options$1,
			keyframes: [...keyframes$1$1].reverse(),
			velocity: -velocity
		});
		/**
		* If duration is undefined and we have repeat options,
		* we need to calculate a duration from the generator.
		*
		* We set it to the generator itself to cache the duration.
		* Any timeline resolver will need to have already precalculated
		* the duration by this step.
		*/
		if (generator.calculatedDuration === null) generator.calculatedDuration = calcGeneratorDuration(generator);
		const { calculatedDuration } = generator;
		this.calculatedDuration = calculatedDuration;
		this.resolvedDuration = calculatedDuration + repeatDelay;
		this.totalDuration = this.resolvedDuration * (repeat + 1) - repeatDelay;
		this.generator = generator;
	}
	updateTime(timestamp) {
		const animationTime = Math.round(timestamp - this.startTime) * this.playbackSpeed;
		if (this.holdTime !== null) this.currentTime = this.holdTime;
		else this.currentTime = animationTime;
	}
	tick(timestamp, sample = false) {
		const { generator, totalDuration, mixKeyframes, mirroredGenerator, resolvedDuration, calculatedDuration } = this;
		if (this.startTime === null) return generator.next(0);
		const { delay: delay$1 = 0, keyframes: keyframes$2, repeat, repeatType, repeatDelay, type, onUpdate, finalKeyframe } = this.options;
		/**
		* requestAnimationFrame timestamps can come through as lower than
		* the startTime as set by performance.now(). Here we prevent this,
		* though in the future it could be possible to make setting startTime
		* a pending operation that gets resolved here.
		*/
		if (this.speed > 0) this.startTime = Math.min(this.startTime, timestamp);
		else if (this.speed < 0) this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
		if (sample) this.currentTime = timestamp;
		else this.updateTime(timestamp);
		const timeWithoutDelay = this.currentTime - delay$1 * (this.playbackSpeed >= 0 ? 1 : -1);
		const isInDelayPhase = this.playbackSpeed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
		this.currentTime = Math.max(timeWithoutDelay, 0);
		if (this.state === "finished" && this.holdTime === null) this.currentTime = totalDuration;
		let elapsed = this.currentTime;
		let frameGenerator = generator;
		if (repeat) {
			/**
			* Get the current progress (0-1) of the animation. If t is >
			* than duration we'll get values like 2.5 (midway through the
			* third iteration)
			*/
			const progress$1 = Math.min(this.currentTime, totalDuration) / resolvedDuration;
			/**
			* Get the current iteration (0 indexed). For instance the floor of
			* 2.5 is 2.
			*/
			let currentIteration = Math.floor(progress$1);
			/**
			* Get the current progress of the iteration by taking the remainder
			* so 2.5 is 0.5 through iteration 2
			*/
			let iterationProgress = progress$1 % 1;
			/**
			* If iteration progress is 1 we count that as the end
			* of the previous iteration.
			*/
			if (!iterationProgress && progress$1 >= 1) iterationProgress = 1;
			iterationProgress === 1 && currentIteration--;
			currentIteration = Math.min(currentIteration, repeat + 1);
			/**
			* Reverse progress if we're not running in "normal" direction
			*/
			const isOddIteration = Boolean(currentIteration % 2);
			if (isOddIteration) {
				if (repeatType === "reverse") {
					iterationProgress = 1 - iterationProgress;
					if (repeatDelay) iterationProgress -= repeatDelay / resolvedDuration;
				} else if (repeatType === "mirror") frameGenerator = mirroredGenerator;
			}
			elapsed = clamp(0, 1, iterationProgress) * resolvedDuration;
		}
		/**
		* If we're in negative time, set state as the initial keyframe.
		* This prevents delay: x, duration: 0 animations from finishing
		* instantly.
		*/
		const state = isInDelayPhase ? {
			done: false,
			value: keyframes$2[0]
		} : frameGenerator.next(elapsed);
		if (mixKeyframes) state.value = mixKeyframes(state.value);
		let { done } = state;
		if (!isInDelayPhase && calculatedDuration !== null) done = this.playbackSpeed >= 0 ? this.currentTime >= totalDuration : this.currentTime <= 0;
		const isAnimationFinished = this.holdTime === null && (this.state === "finished" || this.state === "running" && done);
		if (isAnimationFinished && type !== inertia) state.value = getFinalKeyframe$1(keyframes$2, this.options, finalKeyframe, this.speed);
		if (onUpdate) onUpdate(state.value);
		if (isAnimationFinished) this.finish();
		return state;
	}
	/**
	* Allows the returned animation to be awaited or promise-chained. Currently
	* resolves when the animation finishes at all but in a future update could/should
	* reject if its cancels.
	*/
	then(resolve, reject) {
		return this.finished.then(resolve, reject);
	}
	get duration() {
		return millisecondsToSeconds(this.calculatedDuration);
	}
	get time() {
		return millisecondsToSeconds(this.currentTime);
	}
	set time(newTime) {
		newTime = secondsToMilliseconds(newTime);
		this.currentTime = newTime;
		if (this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0) this.holdTime = newTime;
		else if (this.driver) this.startTime = this.driver.now() - newTime / this.playbackSpeed;
		this.driver?.start(false);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(newSpeed) {
		this.updateTime(time.now());
		const hasChanged = this.playbackSpeed !== newSpeed;
		this.playbackSpeed = newSpeed;
		if (hasChanged) this.time = millisecondsToSeconds(this.currentTime);
	}
	play() {
		if (this.isStopped) return;
		const { driver = frameloopDriver, startTime } = this.options;
		if (!this.driver) this.driver = driver((timestamp) => this.tick(timestamp));
		this.options.onPlay?.();
		const now$1 = this.driver.now();
		if (this.state === "finished") {
			this.updateFinished();
			this.startTime = now$1;
		} else if (this.holdTime !== null) this.startTime = now$1 - this.holdTime;
		else if (!this.startTime) this.startTime = startTime ?? now$1;
		if (this.state === "finished" && this.speed < 0) this.startTime += this.calculatedDuration;
		this.holdTime = null;
		/**
		* Set playState to running only after we've used it in
		* the previous logic.
		*/
		this.state = "running";
		this.driver.start();
	}
	pause() {
		this.state = "paused";
		this.updateTime(time.now());
		this.holdTime = this.currentTime;
	}
	complete() {
		if (this.state !== "running") this.play();
		this.state = "finished";
		this.holdTime = null;
	}
	finish() {
		this.notifyFinished();
		this.teardown();
		this.state = "finished";
		this.options.onComplete?.();
	}
	cancel() {
		this.holdTime = null;
		this.startTime = 0;
		this.tick(0);
		this.teardown();
		this.options.onCancel?.();
	}
	teardown() {
		this.state = "idle";
		this.stopDriver();
		this.startTime = this.holdTime = null;
		activeAnimations.mainThread--;
	}
	stopDriver() {
		if (!this.driver) return;
		this.driver.stop();
		this.driver = void 0;
	}
	sample(sampleTime) {
		this.startTime = 0;
		return this.tick(sampleTime, true);
	}
	attachTimeline(timeline) {
		if (this.options.allowFlatten) {
			this.options.type = "keyframes";
			this.options.ease = "linear";
			this.initAnimation();
		}
		this.driver?.stop();
		return timeline.observe(this);
	}
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
function fillWildcards(keyframes$2) {
	for (let i = 1; i < keyframes$2.length; i++) keyframes$2[i] ?? (keyframes$2[i] = keyframes$2[i - 1]);
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
const radToDeg = (rad) => rad * 180 / Math.PI;
const rotate = (v) => {
	const angle = radToDeg(Math.atan2(v[1], v[0]));
	return rebaseAngle(angle);
};
const matrix2dParsers = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scale: (v) => (Math.abs(v[0]) + Math.abs(v[3])) / 2,
	rotate,
	rotateZ: rotate,
	skewX: (v) => radToDeg(Math.atan(v[1])),
	skewY: (v) => radToDeg(Math.atan(v[2])),
	skew: (v) => (Math.abs(v[1]) + Math.abs(v[2])) / 2
};
const rebaseAngle = (angle) => {
	angle = angle % 360;
	if (angle < 0) angle += 360;
	return angle;
};
const rotateZ = rotate;
const scaleX = (v) => Math.sqrt(v[0] * v[0] + v[1] * v[1]);
const scaleY = (v) => Math.sqrt(v[4] * v[4] + v[5] * v[5]);
const matrix3dParsers = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX,
	scaleY,
	scale: (v) => (scaleX(v) + scaleY(v)) / 2,
	rotateX: (v) => rebaseAngle(radToDeg(Math.atan2(v[6], v[5]))),
	rotateY: (v) => rebaseAngle(radToDeg(Math.atan2(-v[2], v[0]))),
	rotateZ,
	rotate: rotateZ,
	skewX: (v) => radToDeg(Math.atan(v[4])),
	skewY: (v) => radToDeg(Math.atan(v[1])),
	skew: (v) => (Math.abs(v[1]) + Math.abs(v[4])) / 2
};
function defaultTransformValue(name) {
	return name.includes("scale") ? 1 : 0;
}
function parseValueFromTransform(transform, name) {
	if (!transform || transform === "none") return defaultTransformValue(name);
	const matrix3dMatch = transform.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
	let parsers;
	let match;
	if (matrix3dMatch) {
		parsers = matrix3dParsers;
		match = matrix3dMatch;
	} else {
		const matrix2dMatch = transform.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		parsers = matrix2dParsers;
		match = matrix2dMatch;
	}
	if (!match) return defaultTransformValue(name);
	const valueParser = parsers[name];
	const values = match[1].split(",").map(convertTransformToNumber);
	return typeof valueParser === "function" ? valueParser(values) : values[valueParser];
}
const readTransformValue = (instance, name) => {
	const { transform = "none" } = getComputedStyle(instance);
	return parseValueFromTransform(transform, name);
};
function convertTransformToNumber(value) {
	return parseFloat(value.trim());
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs
/**
* Generate a list of every possible transform key.
*/
const transformPropOrder = [
	"transformPerspective",
	"x",
	"y",
	"z",
	"translateX",
	"translateY",
	"translateZ",
	"scale",
	"scaleX",
	"scaleY",
	"rotate",
	"rotateX",
	"rotateY",
	"rotateZ",
	"skew",
	"skewX",
	"skewY"
];
/**
* A quick lookup for transform props.
*/
const transformProps = /* @__PURE__ */ (() => new Set(transformPropOrder))();

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/keyframes/utils/unit-conversion.mjs
const isNumOrPxType = (v) => v === number || v === px;
const transformKeys = new Set([
	"x",
	"y",
	"z"
]);
const nonTranslationalTransformKeys = transformPropOrder.filter((key) => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
	const removedTransforms = [];
	nonTranslationalTransformKeys.forEach((key) => {
		const value = visualElement.getValue(key);
		if (value !== void 0) {
			removedTransforms.push([key, value.get()]);
			value.set(key.startsWith("scale") ? 1 : 0);
		}
	});
	return removedTransforms;
}
const positionalValues = {
	width: ({ x }, { paddingLeft = "0", paddingRight = "0" }) => x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
	height: ({ y }, { paddingTop = "0", paddingBottom = "0" }) => y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
	top: (_bbox, { top: top$1 }) => parseFloat(top$1),
	left: (_bbox, { left: left$1 }) => parseFloat(left$1),
	bottom: ({ y }, { top: top$1 }) => parseFloat(top$1) + (y.max - y.min),
	right: ({ x }, { left: left$1 }) => parseFloat(left$1) + (x.max - x.min),
	x: (_bbox, { transform }) => parseValueFromTransform(transform, "x"),
	y: (_bbox, { transform }) => parseValueFromTransform(transform, "y")
};
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
const toResolve = /* @__PURE__ */ new Set();
let isScheduled = false;
let anyNeedsMeasurement = false;
let isForced = false;
function measureAllKeyframes() {
	if (anyNeedsMeasurement) {
		const resolversToMeasure = Array.from(toResolve).filter((resolver) => resolver.needsMeasurement);
		const elementsToMeasure = new Set(resolversToMeasure.map((resolver) => resolver.element));
		const transformsToRestore = /* @__PURE__ */ new Map();
		/**
		* Write pass
		* If we're measuring elements we want to remove bounding box-changing transforms.
		*/
		elementsToMeasure.forEach((element) => {
			const removedTransforms = removeNonTranslationalTransform(element);
			if (!removedTransforms.length) return;
			transformsToRestore.set(element, removedTransforms);
			element.render();
		});
		resolversToMeasure.forEach((resolver) => resolver.measureInitialState());
		elementsToMeasure.forEach((element) => {
			element.render();
			const restore = transformsToRestore.get(element);
			if (restore) restore.forEach(([key, value]) => {
				element.getValue(key)?.set(value);
			});
		});
		resolversToMeasure.forEach((resolver) => resolver.measureEndState());
		resolversToMeasure.forEach((resolver) => {
			if (resolver.suspendedScrollY !== void 0) window.scrollTo(0, resolver.suspendedScrollY);
		});
	}
	anyNeedsMeasurement = false;
	isScheduled = false;
	toResolve.forEach((resolver) => resolver.complete(isForced));
	toResolve.clear();
}
function readAllKeyframes() {
	toResolve.forEach((resolver) => {
		resolver.readKeyframes();
		if (resolver.needsMeasurement) anyNeedsMeasurement = true;
	});
}
function flushKeyframeResolvers() {
	isForced = true;
	readAllKeyframes();
	measureAllKeyframes();
	isForced = false;
}
var KeyframeResolver = class {
	constructor(unresolvedKeyframes, onComplete, name, motionValue$1, element, isAsync = false) {
		this.state = "pending";
		/**
		* Track whether this resolver is async. If it is, it'll be added to the
		* resolver queue and flushed in the next frame. Resolvers that aren't going
		* to trigger read/write thrashing don't need to be async.
		*/
		this.isAsync = false;
		/**
		* Track whether this resolver needs to perform a measurement
		* to resolve its keyframes.
		*/
		this.needsMeasurement = false;
		this.unresolvedKeyframes = [...unresolvedKeyframes];
		this.onComplete = onComplete;
		this.name = name;
		this.motionValue = motionValue$1;
		this.element = element;
		this.isAsync = isAsync;
	}
	scheduleResolve() {
		this.state = "scheduled";
		if (this.isAsync) {
			toResolve.add(this);
			if (!isScheduled) {
				isScheduled = true;
				frame.read(readAllKeyframes);
				frame.resolveKeyframes(measureAllKeyframes);
			}
		} else {
			this.readKeyframes();
			this.complete();
		}
	}
	readKeyframes() {
		const { unresolvedKeyframes, name, element, motionValue: motionValue$1 } = this;
		if (unresolvedKeyframes[0] === null) {
			const currentValue = motionValue$1?.get();
			const finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
			if (currentValue !== void 0) unresolvedKeyframes[0] = currentValue;
			else if (element && name) {
				const valueAsRead = element.readValue(name, finalKeyframe);
				if (valueAsRead !== void 0 && valueAsRead !== null) unresolvedKeyframes[0] = valueAsRead;
			}
			if (unresolvedKeyframes[0] === void 0) unresolvedKeyframes[0] = finalKeyframe;
			if (motionValue$1 && currentValue === void 0) motionValue$1.set(unresolvedKeyframes[0]);
		}
		fillWildcards(unresolvedKeyframes);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(isForcedComplete = false) {
		this.state = "complete";
		this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, isForcedComplete);
		toResolve.delete(this);
	}
	cancel() {
		if (this.state === "scheduled") {
			toResolve.delete(this);
			this.state = "pending";
		}
	}
	resume() {
		if (this.state === "pending") this.scheduleResolve();
	}
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/render/dom/is-css-var.mjs
const isCSSVar = (name) => name.startsWith("--");

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/render/dom/style-set.mjs
function setStyle(element, name, value) {
	isCSSVar(name) ? element.style.setProperty(name, value) : element.style[name] = value;
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
const supportsScrollTimeline = /* @__PURE__ */ memo$1(() => window.ScrollTimeline !== void 0);

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/utils/supports/flags.mjs
/**
* Add the ability for test suites to manually set support flags
* to better test more environments.
*/
const supportsFlags = {};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/utils/supports/memo.mjs
function memoSupports(callback, supportsFlag) {
	const memoized = memo$1(callback);
	return () => supportsFlags[supportsFlag] ?? memoized();
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs
const supportsLinearEasing = /* @__PURE__ */ memoSupports(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch (e) {
		return false;
	}
	return true;
}, "linearEasing");

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/waapi/easing/cubic-bezier.mjs
const cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/waapi/easing/supported.mjs
const supportedWaapiEasing = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /* @__PURE__ */ cubicBezierAsString([
		0,
		.65,
		.55,
		1
	]),
	circOut: /* @__PURE__ */ cubicBezierAsString([
		.55,
		0,
		1,
		.45
	]),
	backIn: /* @__PURE__ */ cubicBezierAsString([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /* @__PURE__ */ cubicBezierAsString([
		.33,
		1.53,
		.69,
		.99
	])
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function mapEasingToNativeEasing(easing, duration) {
	if (!easing) return void 0;
	else if (typeof easing === "function") return supportsLinearEasing() ? generateLinearEasing(easing, duration) : "ease-out";
	else if (isBezierDefinition(easing)) return cubicBezierAsString(easing);
	else if (Array.isArray(easing)) return easing.map((segmentEasing) => mapEasingToNativeEasing(segmentEasing, duration) || supportedWaapiEasing.easeOut);
	else return supportedWaapiEasing[easing];
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function startWaapiAnimation(element, valueName, keyframes$2, { delay: delay$1 = 0, duration = 300, repeat = 0, repeatType = "loop", ease: ease$1 = "easeOut", times } = {}, pseudoElement = void 0) {
	const keyframeOptions = { [valueName]: keyframes$2 };
	if (times) keyframeOptions.offset = times;
	const easing = mapEasingToNativeEasing(ease$1, duration);
	/**
	* If this is an easing array, apply to keyframes, not animation as a whole
	*/
	if (Array.isArray(easing)) keyframeOptions.easing = easing;
	if (statsBuffer.value) activeAnimations.waapi++;
	const options$1 = {
		delay: delay$1,
		duration,
		easing: !Array.isArray(easing) ? easing : "linear",
		fill: "both",
		iterations: repeat + 1,
		direction: repeatType === "reverse" ? "alternate" : "normal"
	};
	if (pseudoElement) options$1.pseudoElement = pseudoElement;
	const animation = element.animate(keyframeOptions, options$1);
	if (statsBuffer.value) animation.finished.finally(() => {
		activeAnimations.waapi--;
	});
	return animation;
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function isGenerator(type) {
	return typeof type === "function" && "applyToOptions" in type;
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function applyGeneratorOptions({ type,...options$1 }) {
	if (isGenerator(type) && supportsLinearEasing()) return type.applyToOptions(options$1);
	else {
		options$1.duration ?? (options$1.duration = 300);
		options$1.ease ?? (options$1.ease = "easeOut");
	}
	return options$1;
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
/**
* NativeAnimation implements AnimationPlaybackControls for the browser's Web Animations API.
*/
var NativeAnimation = class extends WithPromise {
	constructor(options$1) {
		super();
		this.finishedTime = null;
		this.isStopped = false;
		if (!options$1) return;
		const { element, name, keyframes: keyframes$2, pseudoElement, allowFlatten = false, finalKeyframe, onComplete } = options$1;
		this.isPseudoElement = Boolean(pseudoElement);
		this.allowFlatten = allowFlatten;
		this.options = options$1;
		invariant(typeof options$1.type !== "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
		const transition = applyGeneratorOptions(options$1);
		this.animation = startWaapiAnimation(element, name, keyframes$2, transition, pseudoElement);
		if (transition.autoplay === false) this.animation.pause();
		this.animation.onfinish = () => {
			this.finishedTime = this.time;
			if (!pseudoElement) {
				const keyframe = getFinalKeyframe$1(keyframes$2, this.options, finalKeyframe, this.speed);
				if (this.updateMotionValue) this.updateMotionValue(keyframe);
				else
 /**
				* If we can, we want to commit the final style as set by the user,
				* rather than the computed keyframe value supplied by the animation.
				*/
				setStyle(element, name, keyframe);
				this.animation.cancel();
			}
			onComplete?.();
			this.notifyFinished();
		};
	}
	play() {
		if (this.isStopped) return;
		this.animation.play();
		if (this.state === "finished") this.updateFinished();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.finish?.();
	}
	cancel() {
		try {
			this.animation.cancel();
		} catch (e) {}
	}
	stop() {
		if (this.isStopped) return;
		this.isStopped = true;
		const { state } = this;
		if (state === "idle" || state === "finished") return;
		if (this.updateMotionValue) this.updateMotionValue();
		else this.commitStyles();
		if (!this.isPseudoElement) this.cancel();
	}
	/**
	* WAAPI doesn't natively have any interruption capabilities.
	*
	* In this method, we commit styles back to the DOM before cancelling
	* the animation.
	*
	* This is designed to be overridden by NativeAnimationExtended, which
	* will create a renderless JS animation and sample it twice to calculate
	* its current value, "previous" value, and therefore allow
	* Motion to also correctly calculate velocity for any subsequent animation
	* while deferring the commit until the next animation frame.
	*/
	commitStyles() {
		if (!this.isPseudoElement) this.animation.commitStyles?.();
	}
	get duration() {
		const duration = this.animation.effect?.getComputedTiming?.().duration || 0;
		return millisecondsToSeconds(Number(duration));
	}
	get time() {
		return millisecondsToSeconds(Number(this.animation.currentTime) || 0);
	}
	set time(newTime) {
		this.finishedTime = null;
		this.animation.currentTime = secondsToMilliseconds(newTime);
	}
	/**
	* The playback speed of the animation.
	* 1 = normal speed, 2 = double speed, 0.5 = half speed.
	*/
	get speed() {
		return this.animation.playbackRate;
	}
	set speed(newSpeed) {
		if (newSpeed < 0) this.finishedTime = null;
		this.animation.playbackRate = newSpeed;
	}
	get state() {
		return this.finishedTime !== null ? "finished" : this.animation.playState;
	}
	get startTime() {
		return Number(this.animation.startTime);
	}
	set startTime(newStartTime) {
		this.animation.startTime = newStartTime;
	}
	/**
	* Attaches a timeline to the animation, for instance the `ScrollTimeline`.
	*/
	attachTimeline({ timeline, observe }) {
		if (this.allowFlatten) this.animation.effect?.updateTiming({ easing: "linear" });
		this.animation.onfinish = null;
		if (timeline && supportsScrollTimeline()) {
			this.animation.timeline = timeline;
			return noop;
		} else return observe(this);
	}
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/waapi/utils/unsupported-easing.mjs
const unsupportedEasingFunctions = {
	anticipate,
	backInOut,
	circInOut
};
function isUnsupportedEase(key) {
	return key in unsupportedEasingFunctions;
}
function replaceStringEasing(transition) {
	if (typeof transition.ease === "string" && isUnsupportedEase(transition.ease)) transition.ease = unsupportedEasingFunctions[transition.ease];
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs
/**
* 10ms is chosen here as it strikes a balance between smooth
* results (more than one keyframe per frame at 60fps) and
* keyframe quantity.
*/
const sampleDelta = 10;
var NativeAnimationExtended = class extends NativeAnimation {
	constructor(options$1) {
		/**
		* The base NativeAnimation function only supports a subset
		* of Motion easings, and WAAPI also only supports some
		* easing functions via string/cubic-bezier definitions.
		*
		* This function replaces those unsupported easing functions
		* with a JS easing function. This will later get compiled
		* to a linear() easing function.
		*/
		replaceStringEasing(options$1);
		/**
		* Ensure we replace the transition type with a generator function
		* before passing to WAAPI.
		*
		* TODO: Does this have a better home? It could be shared with
		* JSAnimation.
		*/
		replaceTransitionType(options$1);
		super(options$1);
		if (options$1.startTime) this.startTime = options$1.startTime;
		this.options = options$1;
	}
	/**
	* WAAPI doesn't natively have any interruption capabilities.
	*
	* Rather than read commited styles back out of the DOM, we can
	* create a renderless JS animation and sample it twice to calculate
	* its current value, "previous" value, and therefore allow
	* Motion to calculate velocity for any subsequent animation.
	*/
	updateMotionValue(value) {
		const { motionValue: motionValue$1, onUpdate, onComplete, element,...options$1 } = this.options;
		if (!motionValue$1) return;
		if (value !== void 0) {
			motionValue$1.set(value);
			return;
		}
		const sampleAnimation = new JSAnimation({
			...options$1,
			autoplay: false
		});
		const sampleTime = secondsToMilliseconds(this.finishedTime ?? this.time);
		motionValue$1.setWithVelocity(sampleAnimation.sample(sampleTime - sampleDelta).value, sampleAnimation.sample(sampleTime).value, sampleDelta);
		sampleAnimation.stop();
	}
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/utils/is-animatable.mjs
/**
* Check if a value is animatable. Examples:
*
* ✅: 100, "100px", "#fff"
* ❌: "block", "url(2.jpg)"
* @param value
*
* @internal
*/
const isAnimatable = (value, name) => {
	if (name === "zIndex") return false;
	if (typeof value === "number" || Array.isArray(value)) return true;
	if (typeof value === "string" && (complex.test(value) || value === "0") && !value.startsWith("url(")) return true;
	return false;
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
function hasKeyframesChanged(keyframes$2) {
	const current = keyframes$2[0];
	if (keyframes$2.length === 1) return true;
	for (let i = 0; i < keyframes$2.length; i++) if (keyframes$2[i] !== current) return true;
}
function canAnimate(keyframes$2, name, type, velocity) {
	/**
	* Check if we're able to animate between the start and end keyframes,
	* and throw a warning if we're attempting to animate between one that's
	* animatable and another that isn't.
	*/
	const originKeyframe = keyframes$2[0];
	if (originKeyframe === null) return false;
	/**
	* These aren't traditionally animatable but we do support them.
	* In future we could look into making this more generic or replacing
	* this function with mix() === mixImmediate
	*/
	if (name === "display" || name === "visibility") return true;
	const targetKeyframe = keyframes$2[keyframes$2.length - 1];
	const isOriginAnimatable = isAnimatable(originKeyframe, name);
	const isTargetAnimatable = isAnimatable(targetKeyframe, name);
	warning(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${name} from "${originKeyframe}" to "${targetKeyframe}". "${isOriginAnimatable ? targetKeyframe : originKeyframe}" is not an animatable value.`, "value-not-animatable");
	if (!isOriginAnimatable || !isTargetAnimatable) return false;
	return hasKeyframesChanged(keyframes$2) || (type === "spring" || isGenerator(type)) && velocity;
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs
function makeAnimationInstant(options$1) {
	options$1.duration = 0;
	options$1.type;
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
/**
* A list of values that can be hardware-accelerated.
*/
const acceleratedValues = new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]);
const supportsWaapi = /* @__PURE__ */ memo$1(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function supportsBrowserAnimation(options$1) {
	const { motionValue: motionValue$1, name, repeatDelay, repeatType, damping, type } = options$1;
	const subject = motionValue$1?.owner?.current;
	/**
	* We use this check instead of isHTMLElement() because we explicitly
	* **don't** want elements in different timing contexts (i.e. popups)
	* to be accelerated, as it's not possible to sync these animations
	* properly with those driven from the main window frameloop.
	*/
	if (!(subject instanceof HTMLElement)) return false;
	const { onUpdate, transformTemplate } = motionValue$1.owner.getProps();
	return supportsWaapi() && name && acceleratedValues.has(name) && (name !== "transform" || !transformTemplate) && !onUpdate && !repeatDelay && repeatType !== "mirror" && damping !== 0 && type !== "inertia";
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
/**
* Maximum time allowed between an animation being created and it being
* resolved for us to use the latter as the start time.
*
* This is to ensure that while we prefer to "start" an animation as soon
* as it's triggered, we also want to avoid a visual jump if there's a big delay
* between these two moments.
*/
const MAX_RESOLVE_DELAY = 40;
var AsyncMotionValueAnimation = class extends WithPromise {
	constructor({ autoplay = true, delay: delay$1 = 0, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", keyframes: keyframes$2, name, motionValue: motionValue$1, element,...options$1 }) {
		super();
		/**
		* Bound to support return animation.stop pattern
		*/
		this.stop = () => {
			if (this._animation) {
				this._animation.stop();
				this.stopTimeline?.();
			}
			this.keyframeResolver?.cancel();
		};
		this.createdAt = time.now();
		const optionsWithDefaults = {
			autoplay,
			delay: delay$1,
			type,
			repeat,
			repeatDelay,
			repeatType,
			name,
			motionValue: motionValue$1,
			element,
			...options$1
		};
		const KeyframeResolver$1 = element?.KeyframeResolver || KeyframeResolver;
		this.keyframeResolver = new KeyframeResolver$1(keyframes$2, (resolvedKeyframes, finalKeyframe, forced) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe, optionsWithDefaults, !forced), name, motionValue$1, element);
		this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(keyframes$2, finalKeyframe, options$1, sync) {
		this.keyframeResolver = void 0;
		const { name, type, velocity, delay: delay$1, isHandoff, onUpdate } = options$1;
		this.resolvedAt = time.now();
		/**
		* If we can't animate this value with the resolved keyframes
		* then we should complete it immediately.
		*/
		if (!canAnimate(keyframes$2, name, type, velocity)) {
			if (MotionGlobalConfig.instantAnimations || !delay$1) onUpdate?.(getFinalKeyframe$1(keyframes$2, options$1, finalKeyframe));
			keyframes$2[0] = keyframes$2[keyframes$2.length - 1];
			makeAnimationInstant(options$1);
			options$1.repeat = 0;
		}
		/**
		* Resolve startTime for the animation.
		*
		* This method uses the createdAt and resolvedAt to calculate the
		* animation startTime. *Ideally*, we would use the createdAt time as t=0
		* as the following frame would then be the first frame of the animation in
		* progress, which would feel snappier.
		*
		* However, if there's a delay (main thread work) between the creation of
		* the animation and the first commited frame, we prefer to use resolvedAt
		* to avoid a sudden jump into the animation.
		*/
		const startTime = sync ? !this.resolvedAt ? this.createdAt : this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt : void 0;
		const resolvedOptions = {
			startTime,
			finalKeyframe,
			...options$1,
			keyframes: keyframes$2
		};
		/**
		* Animate via WAAPI if possible. If this is a handoff animation, the optimised animation will be running via
		* WAAPI. Therefore, this animation must be JS to ensure it runs "under" the
		* optimised animation.
		*/
		const animation = !isHandoff && supportsBrowserAnimation(resolvedOptions) ? new NativeAnimationExtended({
			...resolvedOptions,
			element: resolvedOptions.motionValue.owner.current
		}) : new JSAnimation(resolvedOptions);
		animation.finished.then(() => this.notifyFinished()).catch(noop);
		if (this.pendingTimeline) {
			this.stopTimeline = animation.attachTimeline(this.pendingTimeline);
			this.pendingTimeline = void 0;
		}
		this._animation = animation;
	}
	get finished() {
		if (!this._animation) return this._finished;
		else return this.animation.finished;
	}
	then(onResolve, _onReject) {
		return this.finished.finally(onResolve).then(() => {});
	}
	get animation() {
		if (!this._animation) {
			this.keyframeResolver?.resume();
			flushKeyframeResolvers();
		}
		return this._animation;
	}
	get duration() {
		return this.animation.duration;
	}
	get time() {
		return this.animation.time;
	}
	set time(newTime) {
		this.animation.time = newTime;
	}
	get speed() {
		return this.animation.speed;
	}
	get state() {
		return this.animation.state;
	}
	set speed(newSpeed) {
		this.animation.speed = newSpeed;
	}
	get startTime() {
		return this.animation.startTime;
	}
	attachTimeline(timeline) {
		if (this._animation) this.stopTimeline = this.animation.attachTimeline(timeline);
		else this.pendingTimeline = timeline;
		return () => this.stop();
	}
	play() {
		this.animation.play();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.complete();
	}
	cancel() {
		if (this._animation) this.animation.cancel();
		this.keyframeResolver?.cancel();
	}
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/utils/css-variables-conversion.mjs
/**
* Parse Framer's special CSS variable format into a CSS token and a fallback.
*
* ```
* `var(--foo, #fff)` => [`--foo`, '#fff']
* ```
*
* @param current
*/
const splitCSSVariableRegex = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function parseCSSVariable(current) {
	const match = splitCSSVariableRegex.exec(current);
	if (!match) return [,];
	const [, token1, token2, fallback] = match;
	return [`--${token1 ?? token2}`, fallback];
}
const maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
	invariant(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
	const [token, fallback] = parseCSSVariable(current);
	if (!token) return;
	const resolved = window.getComputedStyle(element).getPropertyValue(token);
	if (resolved) {
		const trimmed = resolved.trim();
		return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
	}
	return isCSSVariableToken(fallback) ? getVariableValue(fallback, element, depth + 1) : fallback;
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
function getValueTransition(transition, key) {
	return transition?.[key] ?? transition?.["default"] ?? transition;
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/render/utils/keys-position.mjs
const positionalKeys = new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...transformPropOrder
]);

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/value/types/auto.mjs
/**
* ValueType for "auto"
*/
const auto$1 = {
	test: (v) => v === "auto",
	parse: (v) => v
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/value/types/test.mjs
/**
* Tests a provided value against a ValueType
*/
const testValueType = (v) => (type) => type.test(v);

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/value/types/dimensions.mjs
/**
* A list of value types commonly used for dimensions
*/
const dimensionValueTypes = [
	number,
	px,
	percent,
	degrees,
	vw,
	vh,
	auto$1
];
/**
* Tests a dimensional value against the list of dimension ValueTypes
*/
const findDimensionValueType = (v) => dimensionValueTypes.find(testValueType(v));

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
function isNone(value) {
	if (typeof value === "number") return value === 0;
	else if (value !== null) return value === "none" || value === "0" || isZeroValueString(value);
	else return true;
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/value/types/complex/filter.mjs
/**
* Properties that should default to 1 or 100%
*/
const maxDefaults = new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function applyDefaultFilter(v) {
	const [name, value] = v.slice(0, -1).split("(");
	if (name === "drop-shadow") return v;
	const [number$1] = value.match(floatRegex) || [];
	if (!number$1) return v;
	const unit = value.replace(number$1, "");
	let defaultValue = maxDefaults.has(name) ? 1 : 0;
	if (number$1 !== value) defaultValue *= 100;
	return name + "(" + defaultValue + unit + ")";
}
const functionRegex = /\b([a-z-]*)\(.*?\)/gu;
const filter = {
	...complex,
	getAnimatableNone: (v) => {
		const functions = v.match(functionRegex);
		return functions ? functions.map(applyDefaultFilter).join(" ") : v;
	}
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/value/types/int.mjs
const int = {
	...number,
	transform: Math.round
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/value/types/maps/transform.mjs
const transformValueTypes = {
	rotate: degrees,
	rotateX: degrees,
	rotateY: degrees,
	rotateZ: degrees,
	scale,
	scaleX: scale,
	scaleY: scale,
	scaleZ: scale,
	skew: degrees,
	skewX: degrees,
	skewY: degrees,
	distance: px,
	translateX: px,
	translateY: px,
	translateZ: px,
	x: px,
	y: px,
	z: px,
	perspective: px,
	transformPerspective: px,
	opacity: alpha,
	originX: progressPercentage,
	originY: progressPercentage,
	originZ: px
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/value/types/maps/number.mjs
const numberValueTypes = {
	borderWidth: px,
	borderTopWidth: px,
	borderRightWidth: px,
	borderBottomWidth: px,
	borderLeftWidth: px,
	borderRadius: px,
	radius: px,
	borderTopLeftRadius: px,
	borderTopRightRadius: px,
	borderBottomRightRadius: px,
	borderBottomLeftRadius: px,
	width: px,
	maxWidth: px,
	height: px,
	maxHeight: px,
	top: px,
	right: px,
	bottom: px,
	left: px,
	padding: px,
	paddingTop: px,
	paddingRight: px,
	paddingBottom: px,
	paddingLeft: px,
	margin: px,
	marginTop: px,
	marginRight: px,
	marginBottom: px,
	marginLeft: px,
	backgroundPositionX: px,
	backgroundPositionY: px,
	...transformValueTypes,
	zIndex: int,
	fillOpacity: alpha,
	strokeOpacity: alpha,
	numOctaves: int
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/value/types/maps/defaults.mjs
/**
* A map of default value types for common values
*/
const defaultValueTypes = {
	...numberValueTypes,
	color,
	backgroundColor: color,
	outlineColor: color,
	fill: color,
	stroke: color,
	borderColor: color,
	borderTopColor: color,
	borderRightColor: color,
	borderBottomColor: color,
	borderLeftColor: color,
	filter,
	WebkitFilter: filter
};
/**
* Gets the default ValueType for the provided value key
*/
const getDefaultValueType = (key) => defaultValueTypes[key];

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/value/types/utils/animatable-none.mjs
function getAnimatableNone(key, value) {
	let defaultValueType = getDefaultValueType(key);
	if (defaultValueType !== filter) defaultValueType = complex;
	return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : void 0;
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
/**
* If we encounter keyframes like "none" or "0" and we also have keyframes like
* "#fff" or "200px 200px" we want to find a keyframe to serve as a template for
* the "none" keyframes. In this case "#fff" or "200px 200px" - then these get turned into
* zero equivalents, i.e. "#fff0" or "0px 0px".
*/
const invalidTemplates = new Set([
	"auto",
	"none",
	"0"
]);
function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
	let i = 0;
	let animatableTemplate = void 0;
	while (i < unresolvedKeyframes.length && !animatableTemplate) {
		const keyframe = unresolvedKeyframes[i];
		if (typeof keyframe === "string" && !invalidTemplates.has(keyframe) && analyseComplexValue(keyframe).values.length) animatableTemplate = unresolvedKeyframes[i];
		i++;
	}
	if (animatableTemplate && name) for (const noneIndex of noneKeyframeIndexes) unresolvedKeyframes[noneIndex] = getAnimatableNone(name, animatableTemplate);
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
var DOMKeyframesResolver = class extends KeyframeResolver {
	constructor(unresolvedKeyframes, onComplete, name, motionValue$1, element) {
		super(unresolvedKeyframes, onComplete, name, motionValue$1, element, true);
	}
	readKeyframes() {
		const { unresolvedKeyframes, element, name } = this;
		if (!element || !element.current) return;
		super.readKeyframes();
		/**
		* If any keyframe is a CSS variable, we need to find its value by sampling the element
		*/
		for (let i = 0; i < unresolvedKeyframes.length; i++) {
			let keyframe = unresolvedKeyframes[i];
			if (typeof keyframe === "string") {
				keyframe = keyframe.trim();
				if (isCSSVariableToken(keyframe)) {
					const resolved = getVariableValue(keyframe, element.current);
					if (resolved !== void 0) unresolvedKeyframes[i] = resolved;
					if (i === unresolvedKeyframes.length - 1) this.finalKeyframe = keyframe;
				}
			}
		}
		/**
		* Resolve "none" values. We do this potentially twice - once before and once after measuring keyframes.
		* This could be seen as inefficient but it's a trade-off to avoid measurements in more situations, which
		* have a far bigger performance impact.
		*/
		this.resolveNoneKeyframes();
		/**
		* Check to see if unit type has changed. If so schedule jobs that will
		* temporarily set styles to the destination keyframes.
		* Skip if we have more than two keyframes or this isn't a positional value.
		* TODO: We can throw if there are multiple keyframes and the value type changes.
		*/
		if (!positionalKeys.has(name) || unresolvedKeyframes.length !== 2) return;
		const [origin, target] = unresolvedKeyframes;
		const originType = findDimensionValueType(origin);
		const targetType = findDimensionValueType(target);
		/**
		* Either we don't recognise these value types or we can animate between them.
		*/
		if (originType === targetType) return;
		/**
		* If both values are numbers or pixels, we can animate between them by
		* converting them to numbers.
		*/
		if (isNumOrPxType(originType) && isNumOrPxType(targetType)) for (let i = 0; i < unresolvedKeyframes.length; i++) {
			const value = unresolvedKeyframes[i];
			if (typeof value === "string") unresolvedKeyframes[i] = parseFloat(value);
		}
		else if (positionalValues[name])
 /**
		* Else, the only way to resolve this is by measuring the element.
		*/
		this.needsMeasurement = true;
	}
	resolveNoneKeyframes() {
		const { unresolvedKeyframes, name } = this;
		const noneKeyframeIndexes = [];
		for (let i = 0; i < unresolvedKeyframes.length; i++) if (unresolvedKeyframes[i] === null || isNone(unresolvedKeyframes[i])) noneKeyframeIndexes.push(i);
		if (noneKeyframeIndexes.length) makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name);
	}
	measureInitialState() {
		const { element, unresolvedKeyframes, name } = this;
		if (!element || !element.current) return;
		if (name === "height") this.suspendedScrollY = window.pageYOffset;
		this.measuredOrigin = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
		unresolvedKeyframes[0] = this.measuredOrigin;
		const measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
		if (measureKeyframe !== void 0) element.getValue(name, measureKeyframe).jump(measureKeyframe, false);
	}
	measureEndState() {
		const { element, name, unresolvedKeyframes } = this;
		if (!element || !element.current) return;
		const value = element.getValue(name);
		value && value.jump(this.measuredOrigin, false);
		const finalKeyframeIndex = unresolvedKeyframes.length - 1;
		const finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
		unresolvedKeyframes[finalKeyframeIndex] = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
		if (finalKeyframe !== null && this.finalKeyframe === void 0) this.finalKeyframe = finalKeyframe;
		if (this.removedTransforms?.length) this.removedTransforms.forEach(([unsetTransformName, unsetTransformValue]) => {
			element.getValue(unsetTransformName).set(unsetTransformValue);
		});
		this.resolveNoneKeyframes();
	}
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
function resolveElements(elementOrSelector, scope, selectorCache) {
	if (elementOrSelector instanceof EventTarget) return [elementOrSelector];
	else if (typeof elementOrSelector === "string") {
		let root = document;
		if (scope) root = scope.current;
		const elements = selectorCache?.[elementOrSelector] ?? root.querySelectorAll(elementOrSelector);
		return elements ? Array.from(elements) : [];
	}
	return Array.from(elementOrSelector);
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs
/**
* Provided a value and a ValueType, returns the value as that value type.
*/
const getValueAsType = (value, type) => {
	return type && typeof value === "number" ? type.transform(value) : value;
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/utils/is-html-element.mjs
/**
* Checks if an element is an HTML element in a way
* that works across iframes
*/
function isHTMLElement$1(element) {
	return isObject$1(element) && "offsetHeight" in element;
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/value/index.mjs
/**
* Maximum time between the value of two frames, beyond which we
* assume the velocity has since been 0.
*/
const MAX_VELOCITY_DELTA = 30;
const isFloat = (value) => {
	return !isNaN(parseFloat(value));
};
const collectMotionValues = { current: void 0 };
/**
* `MotionValue` is used to track the state and velocity of motion values.
*
* @public
*/
var MotionValue = class {
	/**
	* @param init - The initiating value
	* @param config - Optional configuration options
	*
	* -  `transformer`: A function to transform incoming values with.
	*/
	constructor(init, options$1 = {}) {
		/**
		* Tracks whether this value can output a velocity. Currently this is only true
		* if the value is numerical, but we might be able to widen the scope here and support
		* other value types.
		*
		* @internal
		*/
		this.canTrackVelocity = null;
		/**
		* An object containing a SubscriptionManager for each active event.
		*/
		this.events = {};
		this.updateAndNotify = (v) => {
			const currentTime = time.now();
			/**
			* If we're updating the value during another frame or eventloop
			* than the previous frame, then the we set the previous frame value
			* to current.
			*/
			if (this.updatedAt !== currentTime) this.setPrevFrameValue();
			this.prev = this.current;
			this.setCurrent(v);
			if (this.current !== this.prev) {
				this.events.change?.notify(this.current);
				if (this.dependents) for (const dependent of this.dependents) dependent.dirty();
			}
		};
		this.hasAnimated = false;
		this.setCurrent(init);
		this.owner = options$1.owner;
	}
	setCurrent(current) {
		this.current = current;
		this.updatedAt = time.now();
		if (this.canTrackVelocity === null && current !== void 0) this.canTrackVelocity = isFloat(this.current);
	}
	setPrevFrameValue(prevFrameValue = this.current) {
		this.prevFrameValue = prevFrameValue;
		this.prevUpdatedAt = this.updatedAt;
	}
	/**
	* Adds a function that will be notified when the `MotionValue` is updated.
	*
	* It returns a function that, when called, will cancel the subscription.
	*
	* When calling `onChange` inside a React component, it should be wrapped with the
	* `useEffect` hook. As it returns an unsubscribe function, this should be returned
	* from the `useEffect` function to ensure you don't add duplicate subscribers..
	*
	* ```jsx
	* export const MyComponent = () => {
	*   const x = useMotionValue(0)
	*   const y = useMotionValue(0)
	*   const opacity = useMotionValue(1)
	*
	*   useEffect(() => {
	*     function updateOpacity() {
	*       const maxXY = Math.max(x.get(), y.get())
	*       const newOpacity = transform(maxXY, [0, 100], [1, 0])
	*       opacity.set(newOpacity)
	*     }
	*
	*     const unsubscribeX = x.on("change", updateOpacity)
	*     const unsubscribeY = y.on("change", updateOpacity)
	*
	*     return () => {
	*       unsubscribeX()
	*       unsubscribeY()
	*     }
	*   }, [])
	*
	*   return <motion.div style={{ x }} />
	* }
	* ```
	*
	* @param subscriber - A function that receives the latest value.
	* @returns A function that, when called, will cancel this subscription.
	*
	* @deprecated
	*/
	onChange(subscription) {
		return this.on("change", subscription);
	}
	on(eventName, callback) {
		if (!this.events[eventName]) this.events[eventName] = new SubscriptionManager();
		const unsubscribe = this.events[eventName].add(callback);
		if (eventName === "change") return () => {
			unsubscribe();
			/**
			* If we have no more change listeners by the start
			* of the next frame, stop active animations.
			*/
			frame.read(() => {
				if (!this.events.change.getSize()) this.stop();
			});
		};
		return unsubscribe;
	}
	clearListeners() {
		for (const eventManagers in this.events) this.events[eventManagers].clear();
	}
	/**
	* Attaches a passive effect to the `MotionValue`.
	*/
	attach(passiveEffect, stopPassiveEffect) {
		this.passiveEffect = passiveEffect;
		this.stopPassiveEffect = stopPassiveEffect;
	}
	/**
	* Sets the state of the `MotionValue`.
	*
	* @remarks
	*
	* ```jsx
	* const x = useMotionValue(0)
	* x.set(10)
	* ```
	*
	* @param latest - Latest value to set.
	* @param render - Whether to notify render subscribers. Defaults to `true`
	*
	* @public
	*/
	set(v) {
		if (!this.passiveEffect) this.updateAndNotify(v);
		else this.passiveEffect(v, this.updateAndNotify);
	}
	setWithVelocity(prev, current, delta) {
		this.set(current);
		this.prev = void 0;
		this.prevFrameValue = prev;
		this.prevUpdatedAt = this.updatedAt - delta;
	}
	/**
	* Set the state of the `MotionValue`, stopping any active animations,
	* effects, and resets velocity to `0`.
	*/
	jump(v, endAnimation = true) {
		this.updateAndNotify(v);
		this.prev = v;
		this.prevUpdatedAt = this.prevFrameValue = void 0;
		endAnimation && this.stop();
		if (this.stopPassiveEffect) this.stopPassiveEffect();
	}
	dirty() {
		this.events.change?.notify(this.current);
	}
	addDependent(dependent) {
		if (!this.dependents) this.dependents = /* @__PURE__ */ new Set();
		this.dependents.add(dependent);
	}
	removeDependent(dependent) {
		if (this.dependents) this.dependents.delete(dependent);
	}
	/**
	* Returns the latest state of `MotionValue`
	*
	* @returns - The latest state of `MotionValue`
	*
	* @public
	*/
	get() {
		if (collectMotionValues.current) collectMotionValues.current.push(this);
		return this.current;
	}
	/**
	* @public
	*/
	getPrevious() {
		return this.prev;
	}
	/**
	* Returns the latest velocity of `MotionValue`
	*
	* @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
	*
	* @public
	*/
	getVelocity() {
		const currentTime = time.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || currentTime - this.updatedAt > MAX_VELOCITY_DELTA) return 0;
		const delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
		return velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), delta);
	}
	/**
	* Registers a new animation to control this `MotionValue`. Only one
	* animation can drive a `MotionValue` at one time.
	*
	* ```jsx
	* value.start()
	* ```
	*
	* @param animation - A function that starts the provided animation
	*/
	start(startAnimation) {
		this.stop();
		return new Promise((resolve) => {
			this.hasAnimated = true;
			this.animation = startAnimation(resolve);
			if (this.events.animationStart) this.events.animationStart.notify();
		}).then(() => {
			if (this.events.animationComplete) this.events.animationComplete.notify();
			this.clearAnimation();
		});
	}
	/**
	* Stop the currently active animation.
	*
	* @public
	*/
	stop() {
		if (this.animation) {
			this.animation.stop();
			if (this.events.animationCancel) this.events.animationCancel.notify();
		}
		this.clearAnimation();
	}
	/**
	* Returns `true` if this value is currently animating.
	*
	* @public
	*/
	isAnimating() {
		return !!this.animation;
	}
	clearAnimation() {
		delete this.animation;
	}
	/**
	* Destroy and clean up subscribers to this `MotionValue`.
	*
	* The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
	* handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
	* created a `MotionValue` via the `motionValue` function.
	*
	* @public
	*/
	destroy() {
		this.dependents?.clear();
		this.events.destroy?.notify();
		this.clearListeners();
		this.stop();
		if (this.stopPassiveEffect) this.stopPassiveEffect();
	}
};
function motionValue(init, options$1) {
	return new MotionValue(init, options$1);
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/frameloop/microtask.mjs
const { schedule: microtask, cancel: cancelMicrotask } = /* @__PURE__ */ createRenderBatcher(queueMicrotask, false);

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs
const isDragging = {
	x: false,
	y: false
};
function isDragActive() {
	return isDragging.x || isDragging.y;
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs
function setDragLock(axis) {
	if (axis === "x" || axis === "y") if (isDragging[axis]) return null;
	else {
		isDragging[axis] = true;
		return () => {
			isDragging[axis] = false;
		};
	}
	else if (isDragging.x || isDragging.y) return null;
	else {
		isDragging.x = isDragging.y = true;
		return () => {
			isDragging.x = isDragging.y = false;
		};
	}
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/gestures/utils/setup.mjs
function setupGesture(elementOrSelector, options$1) {
	const elements = resolveElements(elementOrSelector);
	const gestureAbortController = new AbortController();
	const eventOptions = {
		passive: true,
		...options$1,
		signal: gestureAbortController.signal
	};
	const cancel = () => gestureAbortController.abort();
	return [
		elements,
		eventOptions,
		cancel
	];
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/gestures/hover.mjs
function isValidHover(event) {
	return !(event.pointerType === "touch" || isDragActive());
}
/**
* Create a hover gesture. hover() is different to .addEventListener("pointerenter")
* in that it has an easier syntax, filters out polyfilled touch events, interoperates
* with drag gestures, and automatically removes the "pointerennd" event listener when the hover ends.
*
* @public
*/
function hover(elementOrSelector, onHoverStart, options$1 = {}) {
	const [elements, eventOptions, cancel] = setupGesture(elementOrSelector, options$1);
	const onPointerEnter = (enterEvent) => {
		if (!isValidHover(enterEvent)) return;
		const { target } = enterEvent;
		const onHoverEnd = onHoverStart(target, enterEvent);
		if (typeof onHoverEnd !== "function" || !target) return;
		const onPointerLeave = (leaveEvent) => {
			if (!isValidHover(leaveEvent)) return;
			onHoverEnd(leaveEvent);
			target.removeEventListener("pointerleave", onPointerLeave);
		};
		target.addEventListener("pointerleave", onPointerLeave, eventOptions);
	};
	elements.forEach((element) => {
		element.addEventListener("pointerenter", onPointerEnter, eventOptions);
	});
	return cancel;
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs
/**
* Recursively traverse up the tree to check whether the provided child node
* is the parent or a descendant of it.
*
* @param parent - Element to find
* @param child - Element to test against parent
*/
const isNodeOrChild = (parent, child) => {
	if (!child) return false;
	else if (parent === child) return true;
	else return isNodeOrChild(parent, child.parentElement);
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs
const isPrimaryPointer = (event) => {
	if (event.pointerType === "mouse") return typeof event.button !== "number" || event.button <= 0;
	else
 /**
	* isPrimary is true for all mice buttons, whereas every touch point
	* is regarded as its own input. So subsequent concurrent touch points
	* will be false.
	*
	* Specifically match against false here as incomplete versions of
	* PointerEvents in very old browser might have it set as undefined.
	*/
	return event.isPrimary !== false;
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/gestures/press/utils/is-keyboard-accessible.mjs
const focusableElements = new Set([
	"BUTTON",
	"INPUT",
	"SELECT",
	"TEXTAREA",
	"A"
]);
function isElementKeyboardAccessible(element) {
	return focusableElements.has(element.tagName) || element.tabIndex !== -1;
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs
const isPressing = /* @__PURE__ */ new WeakSet();

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
/**
* Filter out events that are not "Enter" keys.
*/
function filterEvents(callback) {
	return (event) => {
		if (event.key !== "Enter") return;
		callback(event);
	};
}
function firePointerEvent(target, type) {
	target.dispatchEvent(new PointerEvent("pointer" + type, {
		isPrimary: true,
		bubbles: true
	}));
}
const enableKeyboardPress = (focusEvent, eventOptions) => {
	const element = focusEvent.currentTarget;
	if (!element) return;
	const handleKeydown = filterEvents(() => {
		if (isPressing.has(element)) return;
		firePointerEvent(element, "down");
		const handleKeyup = filterEvents(() => {
			firePointerEvent(element, "up");
		});
		const handleBlur = () => firePointerEvent(element, "cancel");
		element.addEventListener("keyup", handleKeyup, eventOptions);
		element.addEventListener("blur", handleBlur, eventOptions);
	});
	element.addEventListener("keydown", handleKeydown, eventOptions);
	/**
	* Add an event listener that fires on blur to remove the keydown events.
	*/
	element.addEventListener("blur", () => element.removeEventListener("keydown", handleKeydown), eventOptions);
};

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/gestures/press/index.mjs
/**
* Filter out events that are not primary pointer events, or are triggering
* while a Motion gesture is active.
*/
function isValidPressEvent(event) {
	return isPrimaryPointer(event) && !isDragActive();
}
/**
* Create a press gesture.
*
* Press is different to `"pointerdown"`, `"pointerup"` in that it
* automatically filters out secondary pointer events like right
* click and multitouch.
*
* It also adds accessibility support for keyboards, where
* an element with a press gesture will receive focus and
*  trigger on Enter `"keydown"` and `"keyup"` events.
*
* This is different to a browser's `"click"` event, which does
* respond to keyboards but only for the `"click"` itself, rather
* than the press start and end/cancel. The element also needs
* to be focusable for this to work, whereas a press gesture will
* make an element focusable by default.
*
* @public
*/
function press(targetOrSelector, onPressStart, options$1 = {}) {
	const [targets, eventOptions, cancelEvents] = setupGesture(targetOrSelector, options$1);
	const startPress = (startEvent) => {
		const target = startEvent.currentTarget;
		if (!isValidPressEvent(startEvent)) return;
		isPressing.add(target);
		const onPressEnd = onPressStart(target, startEvent);
		const onPointerEnd = (endEvent, success) => {
			window.removeEventListener("pointerup", onPointerUp);
			window.removeEventListener("pointercancel", onPointerCancel);
			if (isPressing.has(target)) isPressing.delete(target);
			if (!isValidPressEvent(endEvent)) return;
			if (typeof onPressEnd === "function") onPressEnd(endEvent, { success });
		};
		const onPointerUp = (upEvent) => {
			onPointerEnd(upEvent, target === window || target === document || options$1.useGlobalTarget || isNodeOrChild(target, upEvent.target));
		};
		const onPointerCancel = (cancelEvent) => {
			onPointerEnd(cancelEvent, false);
		};
		window.addEventListener("pointerup", onPointerUp, eventOptions);
		window.addEventListener("pointercancel", onPointerCancel, eventOptions);
	};
	targets.forEach((target) => {
		const pointerDownTarget = options$1.useGlobalTarget ? window : target;
		pointerDownTarget.addEventListener("pointerdown", startPress, eventOptions);
		if (isHTMLElement$1(target)) {
			target.addEventListener("focus", (event) => enableKeyboardPress(event, eventOptions));
			if (!isElementKeyboardAccessible(target) && !target.hasAttribute("tabindex")) target.tabIndex = 0;
		}
	});
	return cancelEvents;
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
/**
* Checks if an element is an SVG element in a way
* that works across iframes
*/
function isSVGElement(element) {
	return isObject$1(element) && "ownerSVGElement" in element;
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs
/**
* Checks if an element is specifically an SVGSVGElement (the root SVG element)
* in a way that works across iframes
*/
function isSVGSVGElement(element) {
	return isSVGElement(element) && element.tagName === "svg";
}

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
const isMotionValue = (value) => Boolean(value && value.getVelocity);

//#endregion
//#region node_modules/.pnpm/motion-dom@12.23.12/node_modules/motion-dom/dist/es/value/types/utils/find.mjs
/**
* A list of all ValueTypes
*/
const valueTypes = [
	...dimensionValueTypes,
	color,
	complex
];
/**
* Tests a value against the list of ValueTypes
*/
const findValueType = (v) => valueTypes.find(testValueType(v));

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
/**
* @public
*/
const MotionConfigContext = (0, import_react.createContext)({
	transformPagePoint: (p) => p,
	isStatic: false,
	reducedMotion: "never"
});

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
/**
* Measurement functionality has to be within a separate component
* to leverage snapshot lifecycle.
*/
var PopChildMeasure = class extends import_react.Component {
	getSnapshotBeforeUpdate(prevProps) {
		const element = this.props.childRef.current;
		if (element && prevProps.isPresent && !this.props.isPresent) {
			const parent = element.offsetParent;
			const parentWidth = isHTMLElement$1(parent) ? parent.offsetWidth || 0 : 0;
			const size = this.props.sizeRef.current;
			size.height = element.offsetHeight || 0;
			size.width = element.offsetWidth || 0;
			size.top = element.offsetTop;
			size.left = element.offsetLeft;
			size.right = parentWidth - size.width - size.left;
		}
		return null;
	}
	/**
	* Required with getSnapshotBeforeUpdate to stop React complaining.
	*/
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function PopChild({ children, isPresent: isPresent$1, anchorX, root }) {
	const id$2 = (0, import_react.useId)();
	const ref = (0, import_react.useRef)(null);
	const size = (0, import_react.useRef)({
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		right: 0
	});
	const { nonce } = (0, import_react.useContext)(MotionConfigContext);
	/**
	* We create and inject a style block so we can apply this explicit
	* sizing in a non-destructive manner by just deleting the style block.
	*
	* We can't apply size via render as the measurement happens
	* in getSnapshotBeforeUpdate (post-render), likewise if we apply the
	* styles directly on the DOM node, we might be overwriting
	* styles set via the style prop.
	*/
	(0, import_react.useInsertionEffect)(() => {
		const { width, height, top: top$1, left: left$1, right: right$1 } = size.current;
		if (isPresent$1 || !ref.current || !width || !height) return;
		const x = anchorX === "left" ? `left: ${left$1}` : `right: ${right$1}`;
		ref.current.dataset.motionPopId = id$2;
		const style = document.createElement("style");
		if (nonce) style.nonce = nonce;
		const parent = root ?? document.head;
		parent.appendChild(style);
		if (style.sheet) style.sheet.insertRule(`
          [data-motion-pop-id="${id$2}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            ${x}px !important;
            top: ${top$1}px !important;
          }
        `);
		return () => {
			if (parent.contains(style)) parent.removeChild(style);
		};
	}, [isPresent$1]);
	return (0, import_jsx_runtime.jsx)(PopChildMeasure, {
		isPresent: isPresent$1,
		childRef: ref,
		sizeRef: size,
		children: import_react.cloneElement(children, { ref })
	});
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
const PresenceChild = ({ children, initial, isPresent: isPresent$1, onExitComplete, custom, presenceAffectsLayout, mode, anchorX, root }) => {
	const presenceChildren = useConstant(newChildrenMap);
	const id$2 = (0, import_react.useId)();
	let isReusedContext = true;
	let context = (0, import_react.useMemo)(() => {
		isReusedContext = false;
		return {
			id: id$2,
			initial,
			isPresent: isPresent$1,
			custom,
			onExitComplete: (childId) => {
				presenceChildren.set(childId, true);
				for (const isComplete of presenceChildren.values()) if (!isComplete) return;
				onExitComplete && onExitComplete();
			},
			register: (childId) => {
				presenceChildren.set(childId, false);
				return () => presenceChildren.delete(childId);
			}
		};
	}, [
		isPresent$1,
		presenceChildren,
		onExitComplete
	]);
	/**
	* If the presence of a child affects the layout of the components around it,
	* we want to make a new context value to ensure they get re-rendered
	* so they can detect that layout change.
	*/
	if (presenceAffectsLayout && isReusedContext) context = { ...context };
	(0, import_react.useMemo)(() => {
		presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
	}, [isPresent$1]);
	/**
	* If there's no `motion` components to fire exit animations, we want to remove this
	* component immediately.
	*/
	import_react.useEffect(() => {
		!isPresent$1 && !presenceChildren.size && onExitComplete && onExitComplete();
	}, [isPresent$1]);
	if (mode === "popLayout") children = (0, import_jsx_runtime.jsx)(PopChild, {
		isPresent: isPresent$1,
		anchorX,
		root,
		children
	});
	return (0, import_jsx_runtime.jsx)(PresenceContext.Provider, {
		value: context,
		children
	});
};
function newChildrenMap() {
	return /* @__PURE__ */ new Map();
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
/**
* When a component is the child of `AnimatePresence`, it can use `usePresence`
* to access information about whether it's still present in the React tree.
*
* ```jsx
* import { usePresence } from "framer-motion"
*
* export const Component = () => {
*   const [isPresent, safeToRemove] = usePresence()
*
*   useEffect(() => {
*     !isPresent && setTimeout(safeToRemove, 1000)
*   }, [isPresent])
*
*   return <div />
* }
* ```
*
* If `isPresent` is `false`, it means that a component has been removed the tree, but
* `AnimatePresence` won't really remove it until `safeToRemove` has been called.
*
* @public
*/
function usePresence(subscribe = true) {
	const context = (0, import_react.useContext)(PresenceContext);
	if (context === null) return [true, null];
	const { isPresent: isPresent$1, onExitComplete, register } = context;
	const id$2 = (0, import_react.useId)();
	(0, import_react.useEffect)(() => {
		if (subscribe) return register(id$2);
	}, [subscribe]);
	const safeToRemove = (0, import_react.useCallback)(() => subscribe && onExitComplete && onExitComplete(id$2), [
		id$2,
		onExitComplete,
		subscribe
	]);
	return !isPresent$1 && onExitComplete ? [false, safeToRemove] : [true];
}
/**
* Similar to `usePresence`, except `useIsPresent` simply returns whether or not the component is present.
* There is no `safeToRemove` function.
*
* ```jsx
* import { useIsPresent } from "framer-motion"
*
* export const Component = () => {
*   const isPresent = useIsPresent()
*
*   useEffect(() => {
*     !isPresent && console.log("I've been removed!")
*   }, [isPresent])
*
*   return <div />
* }
* ```
*
* @public
*/
function useIsPresent() {
	return isPresent((0, import_react.useContext)(PresenceContext));
}
function isPresent(context) {
	return context === null ? true : context.isPresent;
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs
const getChildKey = (child) => child.key || "";
function onlyElements(children) {
	const filtered = [];
	import_react.Children.forEach(children, (child) => {
		if ((0, import_react.isValidElement)(child)) filtered.push(child);
	});
	return filtered;
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
/**
* `AnimatePresence` enables the animation of components that have been removed from the tree.
*
* When adding/removing more than a single child, every child **must** be given a unique `key` prop.
*
* Any `motion` components that have an `exit` property defined will animate out when removed from
* the tree.
*
* ```jsx
* import { motion, AnimatePresence } from 'framer-motion'
*
* export const Items = ({ items }) => (
*   <AnimatePresence>
*     {items.map(item => (
*       <motion.div
*         key={item.id}
*         initial={{ opacity: 0 }}
*         animate={{ opacity: 1 }}
*         exit={{ opacity: 0 }}
*       />
*     ))}
*   </AnimatePresence>
* )
* ```
*
* You can sequence exit animations throughout a tree using variants.
*
* If a child contains multiple `motion` components with `exit` props, it will only unmount the child
* once all `motion` components have finished animating out. Likewise, any components using
* `usePresence` all need to call `safeToRemove`.
*
* @public
*/
const AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false, anchorX = "left", root }) => {
	const [isParentPresent, safeToRemove] = usePresence(propagate);
	/**
	* Filter any children that aren't ReactElements. We can only track components
	* between renders with a props.key.
	*/
	const presentChildren = (0, import_react.useMemo)(() => onlyElements(children), [children]);
	/**
	* Track the keys of the currently rendered children. This is used to
	* determine which children are exiting.
	*/
	const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(getChildKey);
	/**
	* If `initial={false}` we only want to pass this to components in the first render.
	*/
	const isInitialRender = (0, import_react.useRef)(true);
	/**
	* A ref containing the currently present children. When all exit animations
	* are complete, we use this to re-render the component with the latest children
	* *committed* rather than the latest children *rendered*.
	*/
	const pendingPresentChildren = (0, import_react.useRef)(presentChildren);
	/**
	* Track which exiting children have finished animating out.
	*/
	const exitComplete = useConstant(() => /* @__PURE__ */ new Map());
	/**
	* Save children to render as React state. To ensure this component is concurrent-safe,
	* we check for exiting children via an effect.
	*/
	const [diffedChildren, setDiffedChildren] = (0, import_react.useState)(presentChildren);
	const [renderedChildren, setRenderedChildren] = (0, import_react.useState)(presentChildren);
	useIsomorphicLayoutEffect$1(() => {
		isInitialRender.current = false;
		pendingPresentChildren.current = presentChildren;
		/**
		* Update complete status of exiting children.
		*/
		for (let i = 0; i < renderedChildren.length; i++) {
			const key = getChildKey(renderedChildren[i]);
			if (!presentKeys.includes(key)) {
				if (exitComplete.get(key) !== true) exitComplete.set(key, false);
			} else exitComplete.delete(key);
		}
	}, [
		renderedChildren,
		presentKeys.length,
		presentKeys.join("-")
	]);
	const exitingChildren = [];
	if (presentChildren !== diffedChildren) {
		let nextChildren = [...presentChildren];
		/**
		* Loop through all the currently rendered components and decide which
		* are exiting.
		*/
		for (let i = 0; i < renderedChildren.length; i++) {
			const child = renderedChildren[i];
			const key = getChildKey(child);
			if (!presentKeys.includes(key)) {
				nextChildren.splice(i, 0, child);
				exitingChildren.push(child);
			}
		}
		/**
		* If we're in "wait" mode, and we have exiting children, we want to
		* only render these until they've all exited.
		*/
		if (mode === "wait" && exitingChildren.length) nextChildren = exitingChildren;
		setRenderedChildren(onlyElements(nextChildren));
		setDiffedChildren(presentChildren);
		/**
		* Early return to ensure once we've set state with the latest diffed
		* children, we can immediately re-render.
		*/
		return null;
	}
	/**
	* If we've been provided a forceRender function by the LayoutGroupContext,
	* we can use it to force a re-render amongst all surrounding components once
	* all components have finished animating out.
	*/
	const { forceRender } = (0, import_react.useContext)(LayoutGroupContext);
	return (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: renderedChildren.map((child) => {
		const key = getChildKey(child);
		const isPresent$1 = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
		const onExit = () => {
			if (exitComplete.has(key)) exitComplete.set(key, true);
			else return;
			let isEveryExitComplete = true;
			exitComplete.forEach((isExitComplete) => {
				if (!isExitComplete) isEveryExitComplete = false;
			});
			if (isEveryExitComplete) {
				forceRender?.();
				setRenderedChildren(pendingPresentChildren.current);
				propagate && safeToRemove?.();
				onExitComplete && onExitComplete();
			}
		};
		return (0, import_jsx_runtime.jsx)(PresenceChild, {
			isPresent: isPresent$1,
			initial: !isInitialRender.current || initial ? void 0 : false,
			custom,
			presenceAffectsLayout,
			mode,
			root,
			onExitComplete: isPresent$1 ? void 0 : onExit,
			anchorX,
			children: child
		}, key);
	}) });
};

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/context/LazyContext.mjs
const LazyContext = (0, import_react.createContext)({ strict: false });

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/motion/features/definitions.mjs
const featureProps = {
	animation: [
		"animate",
		"variants",
		"whileHover",
		"whileTap",
		"exit",
		"whileInView",
		"whileFocus",
		"whileDrag"
	],
	exit: ["exit"],
	drag: ["drag", "dragControls"],
	focus: ["whileFocus"],
	hover: [
		"whileHover",
		"onHoverStart",
		"onHoverEnd"
	],
	tap: [
		"whileTap",
		"onTap",
		"onTapStart",
		"onTapCancel"
	],
	pan: [
		"onPan",
		"onPanStart",
		"onPanSessionStart",
		"onPanEnd"
	],
	inView: [
		"whileInView",
		"onViewportEnter",
		"onViewportLeave"
	],
	layout: ["layout", "layoutId"]
};
const featureDefinitions = {};
for (const key in featureProps) featureDefinitions[key] = { isEnabled: (props) => featureProps[key].some((name) => !!props[name]) };

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/motion/features/load-features.mjs
function loadFeatures(features) {
	for (const key in features) featureDefinitions[key] = {
		...featureDefinitions[key],
		...features[key]
	};
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
/**
* A list of all valid MotionProps.
*
* @privateRemarks
* This doesn't throw if a `MotionProp` name is missing - it should.
*/
const validMotionProps = new Set([
	"animate",
	"exit",
	"variants",
	"initial",
	"style",
	"values",
	"variants",
	"transition",
	"transformTemplate",
	"custom",
	"inherit",
	"onBeforeLayoutMeasure",
	"onAnimationStart",
	"onAnimationComplete",
	"onUpdate",
	"onDragStart",
	"onDrag",
	"onDragEnd",
	"onMeasureDragConstraints",
	"onDirectionLock",
	"onDragTransitionEnd",
	"_dragX",
	"_dragY",
	"onHoverStart",
	"onHoverEnd",
	"onViewportEnter",
	"onViewportLeave",
	"globalTapTarget",
	"ignoreStrict",
	"viewport"
]);
/**
* Check whether a prop name is a valid `MotionProp` key.
*
* @param key - Name of the property to check
* @returns `true` is key is a valid `MotionProp`.
*
* @public
*/
function isValidMotionProp(key) {
	return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || key.startsWith("onLayout") || validMotionProps.has(key);
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
let shouldForward = (key) => !isValidMotionProp(key);
function loadExternalIsValidProp(isValidProp) {
	if (typeof isValidProp !== "function") return;
	shouldForward = (key) => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
}
/**
* Emotion and Styled Components both allow users to pass through arbitrary props to their components
* to dynamically generate CSS. They both use the `@emotion/is-prop-valid` package to determine which
* of these should be passed to the underlying DOM node.
*
* However, when styling a Motion component `styled(motion.div)`, both packages pass through *all* props
* as it's seen as an arbitrary component rather than a DOM node. Motion only allows arbitrary props
* passed through the `custom` prop so it doesn't *need* the payload or computational overhead of
* `@emotion/is-prop-valid`, however to fix this problem we need to use it.
*
* By making it an optionalDependency we can offer this functionality only in the situations where it's
* actually required.
*/
try {
	/**
	* We attempt to import this package but require won't be defined in esm environments, in that case
	* isPropValid will have to be provided via `MotionContext`. In a 6.0.0 this should probably be removed
	* in favour of explicit injection.
	*/
	loadExternalIsValidProp((init_emotion_is_prop_valid_esm(), __toCommonJS(emotion_is_prop_valid_esm_exports)).default);
} catch {}
function filterProps(props, isDom$1, forwardMotionProps) {
	const filteredProps = {};
	for (const key in props) {
		/**
		* values is considered a valid prop by Emotion, so if it's present
		* this will be rendered out to the DOM unless explicitly filtered.
		*
		* We check the type as it could be used with the `feColorMatrix`
		* element, which we support.
		*/
		if (key === "values" && typeof props.values === "object") continue;
		if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom$1 && !isValidMotionProp(key) || props["draggable"] && key.startsWith("onDrag")) filteredProps[key] = props[key];
	}
	return filteredProps;
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
const MotionContext = /* @__PURE__ */ (0, import_react.createContext)({});

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs
function isAnimationControls(v) {
	return v !== null && typeof v === "object" && typeof v.start === "function";
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/utils/is-variant-label.mjs
/**
* Decides if the supplied variable is variant label
*/
function isVariantLabel(v) {
	return typeof v === "string" || Array.isArray(v);
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/utils/variant-props.mjs
const variantPriorityOrder = [
	"animate",
	"whileInView",
	"whileFocus",
	"whileHover",
	"whileTap",
	"whileDrag",
	"exit"
];
const variantProps = ["initial", ...variantPriorityOrder];

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/utils/is-controlling-variants.mjs
function isControllingVariants(props) {
	return isAnimationControls(props.animate) || variantProps.some((name) => isVariantLabel(props[name]));
}
function isVariantNode(props) {
	return Boolean(isControllingVariants(props) || props.variants);
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function getCurrentTreeVariants(props, context) {
	if (isControllingVariants(props)) {
		const { initial, animate } = props;
		return {
			initial: initial === false || isVariantLabel(initial) ? initial : void 0,
			animate: isVariantLabel(animate) ? animate : void 0
		};
	}
	return props.inherit !== false ? context : {};
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
function useCreateMotionContext(props) {
	const { initial, animate } = getCurrentTreeVariants(props, (0, import_react.useContext)(MotionContext));
	return (0, import_react.useMemo)(() => ({
		initial,
		animate
	}), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
}
function variantLabelsAsDependency(prop) {
	return Array.isArray(prop) ? prop.join(" ") : prop;
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs
const scaleCorrectors = {};
function addScaleCorrector(correctors) {
	for (const key in correctors) {
		scaleCorrectors[key] = correctors[key];
		if (isCSSVariableName(key)) scaleCorrectors[key].isCSSVariable = true;
	}
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs
function isForcedMotionValue(key, { layout: layout$1, layoutId }) {
	return transformProps.has(key) || key.startsWith("origin") || (layout$1 || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs
const translateAlias = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
};
const numTransforms = transformPropOrder.length;
/**
* Build a CSS transform style from individual x/y/scale etc properties.
*
* This outputs with a default order of transforms/scales/rotations, this can be customised by
* providing a transformTemplate function.
*/
function buildTransform(latestValues, transform, transformTemplate) {
	let transformString = "";
	let transformIsDefault = true;
	/**
	* Loop over all possible transforms in order, adding the ones that
	* are present to the transform string.
	*/
	for (let i = 0; i < numTransforms; i++) {
		const key = transformPropOrder[i];
		const value = latestValues[key];
		if (value === void 0) continue;
		let valueIsDefault = true;
		if (typeof value === "number") valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
		else valueIsDefault = parseFloat(value) === 0;
		if (!valueIsDefault || transformTemplate) {
			const valueAsType = getValueAsType(value, numberValueTypes[key]);
			if (!valueIsDefault) {
				transformIsDefault = false;
				const transformName = translateAlias[key] || key;
				transformString += `${transformName}(${valueAsType}) `;
			}
			if (transformTemplate) transform[key] = valueAsType;
		}
	}
	transformString = transformString.trim();
	if (transformTemplate) transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
	else if (transformIsDefault) transformString = "none";
	return transformString;
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs
function buildHTMLStyles(state, latestValues, transformTemplate) {
	const { style, vars, transformOrigin: transformOrigin$1 } = state;
	let hasTransform$1 = false;
	let hasTransformOrigin = false;
	/**
	* Loop over all our latest animated values and decide whether to handle them
	* as a style or CSS variable.
	*
	* Transforms and transform origins are kept separately for further processing.
	*/
	for (const key in latestValues) {
		const value = latestValues[key];
		if (transformProps.has(key)) {
			hasTransform$1 = true;
			continue;
		} else if (isCSSVariableName(key)) {
			vars[key] = value;
			continue;
		} else {
			const valueAsType = getValueAsType(value, numberValueTypes[key]);
			if (key.startsWith("origin")) {
				hasTransformOrigin = true;
				transformOrigin$1[key] = valueAsType;
			} else style[key] = valueAsType;
		}
	}
	if (!latestValues.transform) {
		if (hasTransform$1 || transformTemplate) style.transform = buildTransform(latestValues, state.transform, transformTemplate);
		else if (style.transform)
 /**
		* If we have previously created a transform but currently don't have any,
		* reset transform style to none.
		*/
		style.transform = "none";
	}
	/**
	* Build a transformOrigin style. Uses the same defaults as the browser for
	* undefined origins.
	*/
	if (hasTransformOrigin) {
		const { originX = "50%", originY = "50%", originZ = 0 } = transformOrigin$1;
		style.transformOrigin = `${originX} ${originY} ${originZ}`;
	}
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
const createHtmlRenderState = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
});

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/html/use-props.mjs
function copyRawValuesOnly(target, source, props) {
	for (const key in source) if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) target[key] = source[key];
}
function useInitialMotionValues({ transformTemplate }, visualState) {
	return (0, import_react.useMemo)(() => {
		const state = createHtmlRenderState();
		buildHTMLStyles(state, visualState, transformTemplate);
		return Object.assign({}, state.vars, state.style);
	}, [visualState]);
}
function useStyle(props, visualState) {
	const styleProp = props.style || {};
	const style = {};
	/**
	* Copy non-Motion Values straight into style
	*/
	copyRawValuesOnly(style, styleProp, props);
	Object.assign(style, useInitialMotionValues(props, visualState));
	return style;
}
function useHTMLProps(props, visualState) {
	const htmlProps = {};
	const style = useStyle(props, visualState);
	if (props.drag && props.dragListener !== false) {
		htmlProps.draggable = false;
		style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
		style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
	}
	if (props.tabIndex === void 0 && (props.onTap || props.onTapStart || props.whileTap)) htmlProps.tabIndex = 0;
	htmlProps.style = style;
	return htmlProps;
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/svg/utils/path.mjs
const dashKeys = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
};
const camelKeys = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
/**
* Build SVG path properties. Uses the path's measured length to convert
* our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
* and stroke-dasharray attributes.
*
* This function is mutative to reduce per-frame GC.
*/
function buildSVGPath(attrs, length, spacing = 1, offset$1 = 0, useDashCase = true) {
	attrs.pathLength = 1;
	const keys = useDashCase ? dashKeys : camelKeys;
	attrs[keys.offset] = px.transform(-offset$1);
	const pathLength = px.transform(length);
	const pathSpacing = px.transform(spacing);
	attrs[keys.array] = `${pathLength} ${pathSpacing}`;
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs
/**
* Build SVG visual attributes, like cx and style.transform
*/
function buildSVGAttrs(state, { attrX, attrY, attrScale, pathLength, pathSpacing = 1, pathOffset = 0,...latest }, isSVGTag$1, transformTemplate, styleProp) {
	buildHTMLStyles(state, latest, transformTemplate);
	/**
	* For svg tags we just want to make sure viewBox is animatable and treat all the styles
	* as normal HTML tags.
	*/
	if (isSVGTag$1) {
		if (state.style.viewBox) state.attrs.viewBox = state.style.viewBox;
		return;
	}
	state.attrs = state.style;
	state.style = {};
	const { attrs, style } = state;
	/**
	* However, we apply transforms as CSS transforms.
	* So if we detect a transform, transformOrigin we take it from attrs and copy it into style.
	*/
	if (attrs.transform) {
		style.transform = attrs.transform;
		delete attrs.transform;
	}
	if (style.transform || attrs.transformOrigin) {
		style.transformOrigin = attrs.transformOrigin ?? "50% 50%";
		delete attrs.transformOrigin;
	}
	if (style.transform) {
		/**
		* SVG's element transform-origin uses its own median as a reference.
		* Therefore, transformBox becomes a fill-box
		*/
		style.transformBox = styleProp?.transformBox ?? "fill-box";
		delete attrs.transformBox;
	}
	if (attrX !== void 0) attrs.x = attrX;
	if (attrY !== void 0) attrs.y = attrY;
	if (attrScale !== void 0) attrs.scale = attrScale;
	if (pathLength !== void 0) buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
const createSvgRenderState = () => ({
	...createHtmlRenderState(),
	attrs: {}
});

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/svg/utils/is-svg-tag.mjs
const isSVGTag = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/svg/use-props.mjs
function useSVGProps(props, visualState, _isStatic, Component$1) {
	const visualProps = (0, import_react.useMemo)(() => {
		const state = createSvgRenderState();
		buildSVGAttrs(state, visualState, isSVGTag(Component$1), props.transformTemplate, props.style);
		return {
			...state.attrs,
			style: { ...state.style }
		};
	}, [visualState]);
	if (props.style) {
		const rawStyles = {};
		copyRawValuesOnly(rawStyles, props.style, props);
		visualProps.style = {
			...rawStyles,
			...visualProps.style
		};
	}
	return visualProps;
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
/**
* We keep these listed separately as we use the lowercase tag names as part
* of the runtime bundle to detect SVG components
*/
const lowercaseSVGElements = [
	"animate",
	"circle",
	"defs",
	"desc",
	"ellipse",
	"g",
	"image",
	"line",
	"filter",
	"marker",
	"mask",
	"metadata",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"rect",
	"stop",
	"switch",
	"symbol",
	"svg",
	"text",
	"tspan",
	"use",
	"view"
];

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function isSVGComponent(Component$1) {
	if (typeof Component$1 !== "string" || Component$1.includes("-")) return false;
	else if (lowercaseSVGElements.indexOf(Component$1) > -1 || /[A-Z]/u.test(Component$1)) return true;
	return false;
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/dom/use-render.mjs
function useRender(Component$1, props, ref, { latestValues }, isStatic, forwardMotionProps = false) {
	const useVisualProps = isSVGComponent(Component$1) ? useSVGProps : useHTMLProps;
	const visualProps = useVisualProps(props, latestValues, isStatic, Component$1);
	const filteredProps = filterProps(props, typeof Component$1 === "string", forwardMotionProps);
	const elementProps = Component$1 !== import_react.Fragment ? {
		...filteredProps,
		...visualProps,
		ref
	} : {};
	/**
	* If component has been handed a motion value as its child,
	* memoise its initial value and render that. Subsequent updates
	* will be handled by the onChange handler
	*/
	const { children } = props;
	const renderedChildren = (0, import_react.useMemo)(() => isMotionValue(children) ? children.get() : children, [children]);
	return (0, import_react.createElement)(Component$1, {
		...elementProps,
		children: renderedChildren
	});
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/utils/resolve-variants.mjs
function getValueState(visualElement) {
	const state = [{}, {}];
	visualElement?.values.forEach((value, key) => {
		state[0][key] = value.get();
		state[1][key] = value.getVelocity();
	});
	return state;
}
function resolveVariantFromProps(props, definition, custom, visualElement) {
	/**
	* If the variant definition is a function, resolve.
	*/
	if (typeof definition === "function") {
		const [current, velocity] = getValueState(visualElement);
		definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
	}
	/**
	* If the variant definition is a variant label, or
	* the function returned a variant label, resolve.
	*/
	if (typeof definition === "string") definition = props.variants && props.variants[definition];
	/**
	* At this point we've resolved both functions and variant labels,
	* but the resolved variant label might itself have been a function.
	* If so, resolve. This can only have returned a valid target object.
	*/
	if (typeof definition === "function") {
		const [current, velocity] = getValueState(visualElement);
		definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
	}
	return definition;
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs
/**
* If the provided value is a MotionValue, this returns the actual value, otherwise just the value itself
*
* TODO: Remove and move to library
*/
function resolveMotionValue(value) {
	return isMotionValue(value) ? value.get() : value;
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function makeState({ scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$2, createRenderState }, props, context, presenceContext) {
	const state = {
		latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps$2),
		renderState: createRenderState()
	};
	return state;
}
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
	const values = {};
	const motionValues = scrapeMotionValues(props, {});
	for (const key in motionValues) values[key] = resolveMotionValue(motionValues[key]);
	let { initial, animate } = props;
	const isControllingVariants$1 = isControllingVariants(props);
	const isVariantNode$1 = isVariantNode(props);
	if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
		if (initial === void 0) initial = context.initial;
		if (animate === void 0) animate = context.animate;
	}
	let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
	isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
	const variantToSet = isInitialAnimationBlocked ? animate : initial;
	if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
		const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
		for (let i = 0; i < list.length; i++) {
			const resolved = resolveVariantFromProps(props, list[i]);
			if (resolved) {
				const { transitionEnd, transition,...target } = resolved;
				for (const key in target) {
					let valueTarget = target[key];
					if (Array.isArray(valueTarget)) {
						/**
						* Take final keyframe if the initial animation is blocked because
						* we want to initialise at the end of that blocked animation.
						*/
						const index = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
						valueTarget = valueTarget[index];
					}
					if (valueTarget !== null) values[key] = valueTarget;
				}
				for (const key in transitionEnd) values[key] = transitionEnd[key];
			}
		}
	}
	return values;
}
const makeUseVisualState = (config) => (props, isStatic) => {
	const context = (0, import_react.useContext)(MotionContext);
	const presenceContext = (0, import_react.useContext)(PresenceContext);
	const make = () => makeState(config, props, context, presenceContext);
	return isStatic ? make() : useConstant(make);
};

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps$1(props, prevProps, visualElement) {
	const { style } = props;
	const newValues = {};
	for (const key in style) if (isMotionValue(style[key]) || prevProps.style && isMotionValue(prevProps.style[key]) || isForcedMotionValue(key, props) || visualElement?.getValue(key)?.liveStyle !== void 0) newValues[key] = style[key];
	return newValues;
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/html/use-html-visual-state.mjs
const useHTMLVisualState = /* @__PURE__ */ makeUseVisualState({
	scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
	createRenderState: createHtmlRenderState
});

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
	const newValues = scrapeMotionValuesFromProps$1(props, prevProps, visualElement);
	for (const key in props) if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
		const targetKey = transformPropOrder.indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
		newValues[targetKey] = props[key];
	}
	return newValues;
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/svg/use-svg-visual-state.mjs
const useSVGVisualState = /* @__PURE__ */ makeUseVisualState({
	scrapeMotionValuesFromProps,
	createRenderState: createSvgRenderState
});

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/motion/utils/symbol.mjs
const motionComponentSymbol = Symbol.for("motionComponentSymbol");

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function isRefObject(ref) {
	return ref && typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
/**
* Creates a ref function that, when called, hydrates the provided
* external ref and VisualElement.
*/
function useMotionRef(visualState, visualElement, externalRef) {
	return (0, import_react.useCallback)(
		(instance) => {
			if (instance) visualState.onMount && visualState.onMount(instance);
			if (visualElement) if (instance) visualElement.mount(instance);
			else visualElement.unmount();
			if (externalRef) {
				if (typeof externalRef === "function") externalRef(instance);
				else if (isRefObject(externalRef)) externalRef.current = instance;
			}
		},
		/**
		* Only pass a new ref callback to React if we've received a visual element
		* factory. Otherwise we'll be mounting/remounting every time externalRef
		* or other dependencies change.
		*/
		[visualElement]
	);
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs
/**
* Convert camelCase to dash-case properties.
*/
const camelToDash = (str) => str.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/animation/optimized-appear/data-id.mjs
const optimizedAppearDataId = "framerAppearId";
const optimizedAppearDataAttribute = "data-" + camelToDash(optimizedAppearDataId);

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
/**
* Internal, exported only for usage in Framer
*/
const SwitchLayoutGroupContext = (0, import_react.createContext)({});

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function useVisualElement(Component$1, visualState, props, createVisualElement, ProjectionNodeConstructor) {
	const { visualElement: parent } = (0, import_react.useContext)(MotionContext);
	const lazyContext = (0, import_react.useContext)(LazyContext);
	const presenceContext = (0, import_react.useContext)(PresenceContext);
	const reducedMotionConfig = (0, import_react.useContext)(MotionConfigContext).reducedMotion;
	const visualElementRef = (0, import_react.useRef)(null);
	/**
	* If we haven't preloaded a renderer, check to see if we have one lazy-loaded
	*/
	createVisualElement = createVisualElement || lazyContext.renderer;
	if (!visualElementRef.current && createVisualElement) visualElementRef.current = createVisualElement(Component$1, {
		visualState,
		parent,
		props,
		presenceContext,
		blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
		reducedMotionConfig
	});
	const visualElement = visualElementRef.current;
	/**
	* Load Motion gesture and animation features. These are rendered as renderless
	* components so each feature can optionally make use of React lifecycle methods.
	*/
	const initialLayoutGroupConfig = (0, import_react.useContext)(SwitchLayoutGroupContext);
	if (visualElement && !visualElement.projection && ProjectionNodeConstructor && (visualElement.type === "html" || visualElement.type === "svg")) createProjectionNode$1(visualElementRef.current, props, ProjectionNodeConstructor, initialLayoutGroupConfig);
	const isMounted = (0, import_react.useRef)(false);
	(0, import_react.useInsertionEffect)(() => {
		/**
		* Check the component has already mounted before calling
		* `update` unnecessarily. This ensures we skip the initial update.
		*/
		if (visualElement && isMounted.current) visualElement.update(props, presenceContext);
	});
	/**
	* Cache this value as we want to know whether HandoffAppearAnimations
	* was present on initial render - it will be deleted after this.
	*/
	const optimisedAppearId = props[optimizedAppearDataAttribute];
	const wantsHandoff = (0, import_react.useRef)(Boolean(optimisedAppearId) && !window.MotionHandoffIsComplete?.(optimisedAppearId) && window.MotionHasOptimisedAnimation?.(optimisedAppearId));
	useIsomorphicLayoutEffect$1(() => {
		if (!visualElement) return;
		isMounted.current = true;
		window.MotionIsMounted = true;
		visualElement.updateFeatures();
		visualElement.scheduleRenderMicrotask();
		/**
		* Ideally this function would always run in a useEffect.
		*
		* However, if we have optimised appear animations to handoff from,
		* it needs to happen synchronously to ensure there's no flash of
		* incorrect styles in the event of a hydration error.
		*
		* So if we detect a situtation where optimised appear animations
		* are running, we use useLayoutEffect to trigger animations.
		*/
		if (wantsHandoff.current && visualElement.animationState) visualElement.animationState.animateChanges();
	});
	(0, import_react.useEffect)(() => {
		if (!visualElement) return;
		if (!wantsHandoff.current && visualElement.animationState) visualElement.animationState.animateChanges();
		if (wantsHandoff.current) {
			queueMicrotask(() => {
				window.MotionHandoffMarkAsComplete?.(optimisedAppearId);
			});
			wantsHandoff.current = false;
		}
		/**
		* Now we've finished triggering animations for this element we
		* can wipe the enteringChildren set for the next render.
		*/
		visualElement.enteringChildren = void 0;
	});
	return visualElement;
}
function createProjectionNode$1(visualElement, props, ProjectionNodeConstructor, initialPromotionConfig) {
	const { layoutId, layout: layout$1, drag: drag$1, dragConstraints, layoutScroll, layoutRoot, layoutCrossfade } = props;
	visualElement.projection = new ProjectionNodeConstructor(visualElement.latestValues, props["data-framer-portal-id"] ? void 0 : getClosestProjectingNode(visualElement.parent));
	visualElement.projection.setOptions({
		layoutId,
		layout: layout$1,
		alwaysMeasureLayout: Boolean(drag$1) || dragConstraints && isRefObject(dragConstraints),
		visualElement,
		animationType: typeof layout$1 === "string" ? layout$1 : "both",
		initialPromotionConfig,
		crossfade: layoutCrossfade,
		layoutScroll,
		layoutRoot
	});
}
function getClosestProjectingNode(visualElement) {
	if (!visualElement) return void 0;
	return visualElement.options.allowProjection !== false ? visualElement.projection : getClosestProjectingNode(visualElement.parent);
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/motion/index.mjs
/**
* Create a `motion` component.
*
* This function accepts a Component argument, which can be either a string (ie "div"
* for `motion.div`), or an actual React component.
*
* Alongside this is a config option which provides a way of rendering the provided
* component "offline", or outside the React render cycle.
*/
function createMotionComponent(Component$1, { forwardMotionProps = false } = {}, preloadedFeatures, createVisualElement) {
	preloadedFeatures && loadFeatures(preloadedFeatures);
	const useVisualState = isSVGComponent(Component$1) ? useSVGVisualState : useHTMLVisualState;
	function MotionDOMComponent(props, externalRef) {
		/**
		* If we need to measure the element we load this functionality in a
		* separate class component in order to gain access to getSnapshotBeforeUpdate.
		*/
		let MeasureLayout$1;
		const configAndProps = {
			...(0, import_react.useContext)(MotionConfigContext),
			...props,
			layoutId: useLayoutId(props)
		};
		const { isStatic } = configAndProps;
		const context = useCreateMotionContext(props);
		const visualState = useVisualState(props, isStatic);
		if (!isStatic && isBrowser) {
			useStrictMode(configAndProps, preloadedFeatures);
			const layoutProjection = getProjectionFunctionality(configAndProps);
			MeasureLayout$1 = layoutProjection.MeasureLayout;
			/**
			* Create a VisualElement for this component. A VisualElement provides a common
			* interface to renderer-specific APIs (ie DOM/Three.js etc) as well as
			* providing a way of rendering to these APIs outside of the React render loop
			* for more performant animations and interactions
			*/
			context.visualElement = useVisualElement(Component$1, visualState, configAndProps, createVisualElement, layoutProjection.ProjectionNode);
		}
		/**
		* The mount order and hierarchy is specific to ensure our element ref
		* is hydrated by the time features fire their effects.
		*/
		return (0, import_jsx_runtime.jsxs)(MotionContext.Provider, {
			value: context,
			children: [MeasureLayout$1 && context.visualElement ? (0, import_jsx_runtime.jsx)(MeasureLayout$1, {
				visualElement: context.visualElement,
				...configAndProps
			}) : null, useRender(Component$1, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, forwardMotionProps)]
		});
	}
	MotionDOMComponent.displayName = `motion.${typeof Component$1 === "string" ? Component$1 : `create(${Component$1.displayName ?? Component$1.name ?? ""})`}`;
	const ForwardRefMotionComponent = (0, import_react.forwardRef)(MotionDOMComponent);
	ForwardRefMotionComponent[motionComponentSymbol] = Component$1;
	return ForwardRefMotionComponent;
}
function useLayoutId({ layoutId }) {
	const layoutGroupId = (0, import_react.useContext)(LayoutGroupContext).id;
	return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}
function useStrictMode(configAndProps, preloadedFeatures) {
	(0, import_react.useContext)(LazyContext).strict;
}
function getProjectionFunctionality(props) {
	const { drag: drag$1, layout: layout$1 } = featureDefinitions;
	if (!drag$1 && !layout$1) return {};
	const combined = {
		...drag$1,
		...layout$1
	};
	return {
		MeasureLayout: drag$1?.isEnabled(props) || layout$1?.isEnabled(props) ? combined.MeasureLayout : void 0,
		ProjectionNode: combined.ProjectionNode
	};
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/components/create-proxy.mjs
function createMotionProxy(preloadedFeatures, createVisualElement) {
	if (typeof Proxy === "undefined") return createMotionComponent;
	/**
	* A cache of generated `motion` components, e.g `motion.div`, `motion.input` etc.
	* Rather than generating them anew every render.
	*/
	const componentCache = /* @__PURE__ */ new Map();
	const factory$1 = (Component$1, options$1) => {
		return createMotionComponent(Component$1, options$1, preloadedFeatures, createVisualElement);
	};
	/**
	* Support for deprecated`motion(Component)` pattern
	*/
	const deprecatedFactoryFunction = (Component$1, options$1) => {
		return factory$1(Component$1, options$1);
	};
	return new Proxy(deprecatedFactoryFunction, { get: (_target, key) => {
		if (key === "create") return factory$1;
		/**
		* If this element doesn't exist in the component cache, create it and cache.
		*/
		if (!componentCache.has(key)) componentCache.set(key, createMotionComponent(key, void 0, preloadedFeatures, createVisualElement));
		return componentCache.get(key);
	} });
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs
/**
* Bounding boxes tend to be defined as top, left, right, bottom. For various operations
* it's easier to consider each axis individually. This function returns a bounding box
* as a map of single-axis min/max values.
*/
function convertBoundingBoxToBox({ top: top$1, left: left$1, right: right$1, bottom: bottom$1 }) {
	return {
		x: {
			min: left$1,
			max: right$1
		},
		y: {
			min: top$1,
			max: bottom$1
		}
	};
}
function convertBoxToBoundingBox({ x, y }) {
	return {
		top: y.min,
		right: x.max,
		bottom: y.max,
		left: x.min
	};
}
/**
* Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
* provided by Framer to allow measured points to be corrected for device scaling. This is used
* when measuring DOM elements and DOM event points.
*/
function transformBoxPoints(point, transformPoint$1) {
	if (!transformPoint$1) return point;
	const topLeft = transformPoint$1({
		x: point.left,
		y: point.top
	});
	const bottomRight = transformPoint$1({
		x: point.right,
		y: point.bottom
	});
	return {
		top: topLeft.y,
		left: topLeft.x,
		bottom: bottomRight.y,
		right: bottomRight.x
	};
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs
function isIdentityScale(scale$1) {
	return scale$1 === void 0 || scale$1 === 1;
}
function hasScale({ scale: scale$1, scaleX: scaleX$1, scaleY: scaleY$1 }) {
	return !isIdentityScale(scale$1) || !isIdentityScale(scaleX$1) || !isIdentityScale(scaleY$1);
}
function hasTransform(values) {
	return hasScale(values) || has2DTranslate(values) || values.z || values.rotate || values.rotateX || values.rotateY || values.skewX || values.skewY;
}
function has2DTranslate(values) {
	return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
	return value && value !== "0%";
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs
/**
* Scales a point based on a factor and an originPoint
*/
function scalePoint(point, scale$1, originPoint) {
	const distanceFromOrigin = point - originPoint;
	const scaled = scale$1 * distanceFromOrigin;
	return originPoint + scaled;
}
/**
* Applies a translate/scale delta to a point
*/
function applyPointDelta(point, translate, scale$1, originPoint, boxScale) {
	if (boxScale !== void 0) point = scalePoint(point, boxScale, originPoint);
	return scalePoint(point, scale$1, originPoint) + translate;
}
/**
* Applies a translate/scale delta to an axis
*/
function applyAxisDelta(axis, translate = 0, scale$1 = 1, originPoint, boxScale) {
	axis.min = applyPointDelta(axis.min, translate, scale$1, originPoint, boxScale);
	axis.max = applyPointDelta(axis.max, translate, scale$1, originPoint, boxScale);
}
/**
* Applies a translate/scale delta to a box
*/
function applyBoxDelta(box, { x, y }) {
	applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
	applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
const TREE_SCALE_SNAP_MIN = .999999999999;
const TREE_SCALE_SNAP_MAX = 1.0000000000001;
/**
* Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
* in a tree upon our box before then calculating how to project it into our desired viewport-relative box
*
* This is the final nested loop within updateLayoutDelta for future refactoring
*/
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
	const treeLength = treePath.length;
	if (!treeLength) return;
	treeScale.x = treeScale.y = 1;
	let node;
	let delta;
	for (let i = 0; i < treeLength; i++) {
		node = treePath[i];
		delta = node.projectionDelta;
		/**
		* TODO: Prefer to remove this, but currently we have motion components with
		* display: contents in Framer.
		*/
		const { visualElement } = node.options;
		if (visualElement && visualElement.props.style && visualElement.props.style.display === "contents") continue;
		if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) transformBox(box, {
			x: -node.scroll.offset.x,
			y: -node.scroll.offset.y
		});
		if (delta) {
			treeScale.x *= delta.x.scale;
			treeScale.y *= delta.y.scale;
			applyBoxDelta(box, delta);
		}
		if (isSharedTransition && hasTransform(node.latestValues)) transformBox(box, node.latestValues);
	}
	/**
	* Snap tree scale back to 1 if it's within a non-perceivable threshold.
	* This will help reduce useless scales getting rendered.
	*/
	if (treeScale.x < TREE_SCALE_SNAP_MAX && treeScale.x > TREE_SCALE_SNAP_MIN) treeScale.x = 1;
	if (treeScale.y < TREE_SCALE_SNAP_MAX && treeScale.y > TREE_SCALE_SNAP_MIN) treeScale.y = 1;
}
function translateAxis(axis, distance$1) {
	axis.min = axis.min + distance$1;
	axis.max = axis.max + distance$1;
}
/**
* Apply a transform to an axis from the latest resolved motion values.
* This function basically acts as a bridge between a flat motion value map
* and applyAxisDelta
*/
function transformAxis(axis, axisTranslate, axisScale, boxScale, axisOrigin = .5) {
	const originPoint = mixNumber(axis.min, axis.max, axisOrigin);
	applyAxisDelta(axis, axisTranslate, axisScale, originPoint, boxScale);
}
/**
* Apply a transform to a box from the latest resolved motion values.
*/
function transformBox(box, transform) {
	transformAxis(box.x, transform.x, transform.scaleX, transform.scale, transform.originX);
	transformAxis(box.y, transform.y, transform.scaleY, transform.scale, transform.originY);
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/projection/utils/measure.mjs
function measureViewportBox(instance, transformPoint$1) {
	return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint$1));
}
function measurePageBox(element, rootProjectionNode$1, transformPagePoint) {
	const viewportBox = measureViewportBox(element, transformPagePoint);
	const { scroll } = rootProjectionNode$1;
	if (scroll) {
		translateAxis(viewportBox.x, scroll.offset.x);
		translateAxis(viewportBox.y, scroll.offset.y);
	}
	return viewportBox;
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/projection/geometry/models.mjs
const createAxisDelta = () => ({
	translate: 0,
	scale: 1,
	origin: 0,
	originPoint: 0
});
const createDelta = () => ({
	x: createAxisDelta(),
	y: createAxisDelta()
});
const createAxis = () => ({
	min: 0,
	max: 0
});
const createBox = () => ({
	x: createAxis(),
	y: createAxis()
});

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs
const prefersReducedMotion = { current: null };
const hasReducedMotionListener = { current: false };

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs
function initPrefersReducedMotion() {
	hasReducedMotionListener.current = true;
	if (!isBrowser) return;
	if (window.matchMedia) {
		const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
		const setReducedMotionPreferences = () => prefersReducedMotion.current = motionMediaQuery.matches;
		motionMediaQuery.addEventListener("change", setReducedMotionPreferences);
		setReducedMotionPreferences();
	} else prefersReducedMotion.current = false;
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/store.mjs
const visualElementStore = /* @__PURE__ */ new WeakMap();

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/utils/motion-values.mjs
function updateMotionValuesFromProps(element, next, prev) {
	for (const key in next) {
		const nextValue = next[key];
		const prevValue = prev[key];
		if (isMotionValue(nextValue))
 /**
		* If this is a motion value found in props or style, we want to add it
		* to our visual element's motion value map.
		*/
		element.addValue(key, nextValue);
		else if (isMotionValue(prevValue))
 /**
		* If we're swapping from a motion value to a static value,
		* create a new motion value from that
		*/
		element.addValue(key, motionValue(nextValue, { owner: element }));
		else if (prevValue !== nextValue)
 /**
		* If this is a flat value that has changed, update the motion value
		* or create one if it doesn't exist. We only want to do this if we're
		* not handling the value with our animation state.
		*/
		if (element.hasValue(key)) {
			const existingValue = element.getValue(key);
			if (existingValue.liveStyle === true) existingValue.jump(nextValue);
			else if (!existingValue.hasAnimated) existingValue.set(nextValue);
		} else {
			const latestValue = element.getStaticValue(key);
			element.addValue(key, motionValue(latestValue !== void 0 ? latestValue : nextValue, { owner: element }));
		}
	}
	for (const key in prev) if (next[key] === void 0) element.removeValue(key);
	return next;
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/VisualElement.mjs
const propEventHandlers = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete"
];
/**
* A VisualElement is an imperative abstraction around UI elements such as
* HTMLElement, SVGElement, Three.Object3D etc.
*/
var VisualElement = class {
	/**
	* This method takes React props and returns found MotionValues. For example, HTML
	* MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
	*
	* This isn't an abstract method as it needs calling in the constructor, but it is
	* intended to be one.
	*/
	scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
		return {};
	}
	constructor({ parent, props, presenceContext, reducedMotionConfig, blockInitialAnimation, visualState }, options$1 = {}) {
		/**
		* A reference to the current underlying Instance, e.g. a HTMLElement
		* or Three.Mesh etc.
		*/
		this.current = null;
		/**
		* A set containing references to this VisualElement's children.
		*/
		this.children = /* @__PURE__ */ new Set();
		/**
		* Determine what role this visual element should take in the variant tree.
		*/
		this.isVariantNode = false;
		this.isControllingVariants = false;
		/**
		* Decides whether this VisualElement should animate in reduced motion
		* mode.
		*
		* TODO: This is currently set on every individual VisualElement but feels
		* like it could be set globally.
		*/
		this.shouldReduceMotion = null;
		/**
		* A map of all motion values attached to this visual element. Motion
		* values are source of truth for any given animated value. A motion
		* value might be provided externally by the component via props.
		*/
		this.values = /* @__PURE__ */ new Map();
		this.KeyframeResolver = KeyframeResolver;
		/**
		* Cleanup functions for active features (hover/tap/exit etc)
		*/
		this.features = {};
		/**
		* A map of every subscription that binds the provided or generated
		* motion values onChange listeners to this visual element.
		*/
		this.valueSubscriptions = /* @__PURE__ */ new Map();
		/**
		* A reference to the previously-provided motion values as returned
		* from scrapeMotionValuesFromProps. We use the keys in here to determine
		* if any motion values need to be removed after props are updated.
		*/
		this.prevMotionValues = {};
		/**
		* An object containing a SubscriptionManager for each active event.
		*/
		this.events = {};
		/**
		* An object containing an unsubscribe function for each prop event subscription.
		* For example, every "Update" event can have multiple subscribers via
		* VisualElement.on(), but only one of those can be defined via the onUpdate prop.
		*/
		this.propEventSubscriptions = {};
		this.notifyUpdate = () => this.notify("Update", this.latestValues);
		this.render = () => {
			if (!this.current) return;
			this.triggerBuild();
			this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
		};
		this.renderScheduledAt = 0;
		this.scheduleRender = () => {
			const now$1 = time.now();
			if (this.renderScheduledAt < now$1) {
				this.renderScheduledAt = now$1;
				frame.render(this.render, false, true);
			}
		};
		const { latestValues, renderState } = visualState;
		this.latestValues = latestValues;
		this.baseTarget = { ...latestValues };
		this.initialValues = props.initial ? { ...latestValues } : {};
		this.renderState = renderState;
		this.parent = parent;
		this.props = props;
		this.presenceContext = presenceContext;
		this.depth = parent ? parent.depth + 1 : 0;
		this.reducedMotionConfig = reducedMotionConfig;
		this.options = options$1;
		this.blockInitialAnimation = Boolean(blockInitialAnimation);
		this.isControllingVariants = isControllingVariants(props);
		this.isVariantNode = isVariantNode(props);
		if (this.isVariantNode) this.variantChildren = /* @__PURE__ */ new Set();
		this.manuallyAnimateOnMount = Boolean(parent && parent.current);
		/**
		* Any motion values that are provided to the element when created
		* aren't yet bound to the element, as this would technically be impure.
		* However, we iterate through the motion values and set them to the
		* initial values for this component.
		*
		* TODO: This is impure and we should look at changing this to run on mount.
		* Doing so will break some tests but this isn't necessarily a breaking change,
		* more a reflection of the test.
		*/
		const { willChange,...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {}, this);
		for (const key in initialMotionValues) {
			const value = initialMotionValues[key];
			if (latestValues[key] !== void 0 && isMotionValue(value)) value.set(latestValues[key]);
		}
	}
	mount(instance) {
		this.current = instance;
		visualElementStore.set(instance, this);
		if (this.projection && !this.projection.instance) this.projection.mount(instance);
		if (this.parent && this.isVariantNode && !this.isControllingVariants) this.removeFromVariantTree = this.parent.addVariantChild(this);
		this.values.forEach((value, key) => this.bindToMotionValue(key, value));
		if (!hasReducedMotionListener.current) initPrefersReducedMotion();
		this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : prefersReducedMotion.current;
		this.parent?.addChild(this);
		this.update(this.props, this.presenceContext);
	}
	unmount() {
		this.projection && this.projection.unmount();
		cancelFrame(this.notifyUpdate);
		cancelFrame(this.render);
		this.valueSubscriptions.forEach((remove) => remove());
		this.valueSubscriptions.clear();
		this.removeFromVariantTree && this.removeFromVariantTree();
		this.parent?.removeChild(this);
		for (const key in this.events) this.events[key].clear();
		for (const key in this.features) {
			const feature = this.features[key];
			if (feature) {
				feature.unmount();
				feature.isMounted = false;
			}
		}
		this.current = null;
	}
	addChild(child) {
		this.children.add(child);
		this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set());
		this.enteringChildren.add(child);
	}
	removeChild(child) {
		this.children.delete(child);
		this.enteringChildren && this.enteringChildren.delete(child);
	}
	bindToMotionValue(key, value) {
		if (this.valueSubscriptions.has(key)) this.valueSubscriptions.get(key)();
		const valueIsTransform = transformProps.has(key);
		if (valueIsTransform && this.onBindTransform) this.onBindTransform();
		const removeOnChange = value.on("change", (latestValue) => {
			this.latestValues[key] = latestValue;
			this.props.onUpdate && frame.preRender(this.notifyUpdate);
			if (valueIsTransform && this.projection) this.projection.isTransformDirty = true;
			this.scheduleRender();
		});
		let removeSyncCheck;
		if (window.MotionCheckAppearSync) removeSyncCheck = window.MotionCheckAppearSync(this, key, value);
		this.valueSubscriptions.set(key, () => {
			removeOnChange();
			if (removeSyncCheck) removeSyncCheck();
			if (value.owner) value.stop();
		});
	}
	sortNodePosition(other) {
		/**
		* If these nodes aren't even of the same type we can't compare their depth.
		*/
		if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type) return 0;
		return this.sortInstanceNodePosition(this.current, other.current);
	}
	updateFeatures() {
		let key = "animation";
		for (key in featureDefinitions) {
			const featureDefinition = featureDefinitions[key];
			if (!featureDefinition) continue;
			const { isEnabled, Feature: FeatureConstructor } = featureDefinition;
			/**
			* If this feature is enabled but not active, make a new instance.
			*/
			if (!this.features[key] && FeatureConstructor && isEnabled(this.props)) this.features[key] = new FeatureConstructor(this);
			/**
			* If we have a feature, mount or update it.
			*/
			if (this.features[key]) {
				const feature = this.features[key];
				if (feature.isMounted) feature.update();
				else {
					feature.mount();
					feature.isMounted = true;
				}
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props);
	}
	/**
	* Measure the current viewport box with or without transforms.
	* Only measures axis-aligned boxes, rotate and skew must be manually
	* removed with a re-render to work.
	*/
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
	}
	getStaticValue(key) {
		return this.latestValues[key];
	}
	setStaticValue(key, value) {
		this.latestValues[key] = value;
	}
	/**
	* Update the provided props. Ensure any newly-added motion values are
	* added to our map, old ones removed, and listeners updated.
	*/
	update(props, presenceContext) {
		if (props.transformTemplate || this.props.transformTemplate) this.scheduleRender();
		this.prevProps = this.props;
		this.props = props;
		this.prevPresenceContext = this.presenceContext;
		this.presenceContext = presenceContext;
		/**
		* Update prop event handlers ie onAnimationStart, onAnimationComplete
		*/
		for (let i = 0; i < propEventHandlers.length; i++) {
			const key = propEventHandlers[i];
			if (this.propEventSubscriptions[key]) {
				this.propEventSubscriptions[key]();
				delete this.propEventSubscriptions[key];
			}
			const listenerName = "on" + key;
			const listener = props[listenerName];
			if (listener) this.propEventSubscriptions[key] = this.on(key, listener);
		}
		this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps, this), this.prevMotionValues);
		if (this.handleChildMotionValue) this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	/**
	* Returns the variant definition with a given name.
	*/
	getVariant(name) {
		return this.props.variants ? this.props.variants[name] : void 0;
	}
	/**
	* Returns the defined default transition on this component.
	*/
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	getClosestVariantNode() {
		return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
	}
	/**
	* Add a child visual element to our set of children.
	*/
	addVariantChild(child) {
		const closestVariantNode = this.getClosestVariantNode();
		if (closestVariantNode) {
			closestVariantNode.variantChildren && closestVariantNode.variantChildren.add(child);
			return () => closestVariantNode.variantChildren.delete(child);
		}
	}
	/**
	* Add a motion value and bind it to this visual element.
	*/
	addValue(key, value) {
		const existingValue = this.values.get(key);
		if (value !== existingValue) {
			if (existingValue) this.removeValue(key);
			this.bindToMotionValue(key, value);
			this.values.set(key, value);
			this.latestValues[key] = value.get();
		}
	}
	/**
	* Remove a motion value and unbind any active subscriptions.
	*/
	removeValue(key) {
		this.values.delete(key);
		const unsubscribe = this.valueSubscriptions.get(key);
		if (unsubscribe) {
			unsubscribe();
			this.valueSubscriptions.delete(key);
		}
		delete this.latestValues[key];
		this.removeValueFromRenderState(key, this.renderState);
	}
	/**
	* Check whether we have a motion value for this key
	*/
	hasValue(key) {
		return this.values.has(key);
	}
	getValue(key, defaultValue) {
		if (this.props.values && this.props.values[key]) return this.props.values[key];
		let value = this.values.get(key);
		if (value === void 0 && defaultValue !== void 0) {
			value = motionValue(defaultValue === null ? void 0 : defaultValue, { owner: this });
			this.addValue(key, value);
		}
		return value;
	}
	/**
	* If we're trying to animate to a previously unencountered value,
	* we need to check for it in our state and as a last resort read it
	* directly from the instance (which might have performance implications).
	*/
	readValue(key, target) {
		let value = this.latestValues[key] !== void 0 || !this.current ? this.latestValues[key] : this.getBaseTargetFromProps(this.props, key) ?? this.readValueFromInstance(this.current, key, this.options);
		if (value !== void 0 && value !== null) {
			if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) value = parseFloat(value);
			else if (!findValueType(value) && complex.test(target)) value = getAnimatableNone(key, target);
			this.setBaseTarget(key, isMotionValue(value) ? value.get() : value);
		}
		return isMotionValue(value) ? value.get() : value;
	}
	/**
	* Set the base target to later animate back to. This is currently
	* only hydrated on creation and when we first read a value.
	*/
	setBaseTarget(key, value) {
		this.baseTarget[key] = value;
	}
	/**
	* Find the base target for a value thats been removed from all animation
	* props.
	*/
	getBaseTarget(key) {
		const { initial } = this.props;
		let valueFromInitial;
		if (typeof initial === "string" || typeof initial === "object") {
			const variant = resolveVariantFromProps(this.props, initial, this.presenceContext?.custom);
			if (variant) valueFromInitial = variant[key];
		}
		/**
		* If this value still exists in the current initial variant, read that.
		*/
		if (initial && valueFromInitial !== void 0) return valueFromInitial;
		/**
		* Alternatively, if this VisualElement config has defined a getBaseTarget
		* so we can read the value from an alternative source, try that.
		*/
		const target = this.getBaseTargetFromProps(this.props, key);
		if (target !== void 0 && !isMotionValue(target)) return target;
		/**
		* If the value was initially defined on initial, but it doesn't any more,
		* return undefined. Otherwise return the value as initially read from the DOM.
		*/
		return this.initialValues[key] !== void 0 && valueFromInitial === void 0 ? void 0 : this.baseTarget[key];
	}
	on(eventName, callback) {
		if (!this.events[eventName]) this.events[eventName] = new SubscriptionManager();
		return this.events[eventName].add(callback);
	}
	notify(eventName, ...args) {
		if (this.events[eventName]) this.events[eventName].notify(...args);
	}
	scheduleRenderMicrotask() {
		microtask.render(this.render);
	}
};

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/dom/DOMVisualElement.mjs
var DOMVisualElement = class extends VisualElement {
	constructor() {
		super(...arguments);
		this.KeyframeResolver = DOMKeyframesResolver;
	}
	sortInstanceNodePosition(a, b) {
		/**
		* compareDocumentPosition returns a bitmask, by using the bitwise &
		* we're returning true if 2 in that bitmask is set to true. 2 is set
		* to true if b preceeds a.
		*/
		return a.compareDocumentPosition(b) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(props, key) {
		return props.style ? props.style[key] : void 0;
	}
	removeValueFromRenderState(key, { vars, style }) {
		delete vars[key];
		delete style[key];
	}
	handleChildMotionValue() {
		if (this.childSubscription) {
			this.childSubscription();
			delete this.childSubscription;
		}
		const { children } = this.props;
		if (isMotionValue(children)) this.childSubscription = children.on("change", (latest) => {
			if (this.current) this.current.textContent = `${latest}`;
		});
	}
};

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/html/utils/render.mjs
function renderHTML(element, { style, vars }, styleProp, projection) {
	const elementStyle = element.style;
	let key;
	for (key in style) elementStyle[key] = style[key];
	projection?.applyProjectionStyles(elementStyle, styleProp);
	for (key in vars) elementStyle.setProperty(key, vars[key]);
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/html/HTMLVisualElement.mjs
function getComputedStyle$2(element) {
	return window.getComputedStyle(element);
}
var HTMLVisualElement = class extends DOMVisualElement {
	constructor() {
		super(...arguments);
		this.type = "html";
		this.renderInstance = renderHTML;
	}
	readValueFromInstance(instance, key) {
		if (transformProps.has(key)) return this.projection?.isProjecting ? defaultTransformValue(key) : readTransformValue(instance, key);
		else {
			const computedStyle = getComputedStyle$2(instance);
			const value = (isCSSVariableName(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
			return typeof value === "string" ? value.trim() : value;
		}
	}
	measureInstanceViewportBox(instance, { transformPagePoint }) {
		return measureViewportBox(instance, transformPagePoint);
	}
	build(renderState, latestValues, props) {
		buildHTMLStyles(renderState, latestValues, props.transformTemplate);
	}
	scrapeMotionValuesFromProps(props, prevProps, visualElement) {
		return scrapeMotionValuesFromProps$1(props, prevProps, visualElement);
	}
};

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs
/**
* A set of attribute names that are always read/written as camel case.
*/
const camelCaseAttributes = new Set([
	"baseFrequency",
	"diffuseConstant",
	"kernelMatrix",
	"kernelUnitLength",
	"keySplines",
	"keyTimes",
	"limitingConeAngle",
	"markerHeight",
	"markerWidth",
	"numOctaves",
	"targetX",
	"targetY",
	"surfaceScale",
	"specularConstant",
	"specularExponent",
	"stdDeviation",
	"tableValues",
	"viewBox",
	"gradientTransform",
	"pathLength",
	"startOffset",
	"textLength",
	"lengthAdjust"
]);

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/svg/utils/render.mjs
function renderSVG(element, renderState, _styleProp, projection) {
	renderHTML(element, renderState, void 0, projection);
	for (const key in renderState.attrs) element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/svg/SVGVisualElement.mjs
var SVGVisualElement = class extends DOMVisualElement {
	constructor() {
		super(...arguments);
		this.type = "svg";
		this.isSVGTag = false;
		this.measureInstanceViewportBox = createBox;
	}
	getBaseTargetFromProps(props, key) {
		return props[key];
	}
	readValueFromInstance(instance, key) {
		if (transformProps.has(key)) {
			const defaultType = getDefaultValueType(key);
			return defaultType ? defaultType.default || 0 : 0;
		}
		key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
		return instance.getAttribute(key);
	}
	scrapeMotionValuesFromProps(props, prevProps, visualElement) {
		return scrapeMotionValuesFromProps(props, prevProps, visualElement);
	}
	build(renderState, latestValues, props) {
		buildSVGAttrs(renderState, latestValues, this.isSVGTag, props.transformTemplate, props.style);
	}
	renderInstance(instance, renderState, styleProp, projection) {
		renderSVG(instance, renderState, styleProp, projection);
	}
	mount(instance) {
		this.isSVGTag = isSVGTag(instance.tagName);
		super.mount(instance);
	}
};

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
const createDomVisualElement = (Component$1, options$1) => {
	return isSVGComponent(Component$1) ? new SVGVisualElement(options$1) : new HTMLVisualElement(options$1, { allowProjection: Component$1 !== import_react.Fragment });
};

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs
function resolveVariant(visualElement, definition, custom) {
	const props = visualElement.getProps();
	return resolveVariantFromProps(props, definition, custom !== void 0 ? custom : props.custom, visualElement);
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs
const isKeyframesTarget = (v) => {
	return Array.isArray(v);
};

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/utils/setters.mjs
/**
* Set VisualElement's MotionValue, creating a new MotionValue for it if
* it doesn't exist.
*/
function setMotionValue(visualElement, key, value) {
	if (visualElement.hasValue(key)) visualElement.getValue(key).set(value);
	else visualElement.addValue(key, motionValue(value));
}
function resolveFinalValueInKeyframes(v) {
	return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
}
function setTarget(visualElement, definition) {
	const resolved = resolveVariant(visualElement, definition);
	let { transitionEnd = {}, transition = {},...target } = resolved || {};
	target = {
		...target,
		...transitionEnd
	};
	for (const key in target) {
		const value = resolveFinalValueInKeyframes(target[key]);
		setMotionValue(visualElement, key, value);
	}
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/value/use-will-change/is.mjs
function isWillChangeMotionValue(value) {
	return Boolean(isMotionValue(value) && value.add);
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/value/use-will-change/add-will-change.mjs
function addValueToWillChange(visualElement, key) {
	const willChange = visualElement.getValue("willChange");
	/**
	* It could be that a user has set willChange to a regular MotionValue,
	* in which case we can't add the value to it.
	*/
	if (isWillChangeMotionValue(willChange)) return willChange.add(key);
	else if (!willChange && MotionGlobalConfig.WillChange) {
		const newWillChange = new MotionGlobalConfig.WillChange("auto");
		visualElement.addValue("willChange", newWillChange);
		newWillChange.add(key);
	}
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/animation/optimized-appear/get-appear-id.mjs
function getOptimisedAppearId(visualElement) {
	return visualElement.props[optimizedAppearDataAttribute];
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs
const isNotNull = (value) => value !== null;
function getFinalKeyframe(keyframes$2, { repeat, repeatType = "loop" }, finalKeyframe) {
	const resolvedKeyframes = keyframes$2.filter(isNotNull);
	const index = repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : resolvedKeyframes.length - 1;
	return !index || finalKeyframe === void 0 ? resolvedKeyframes[index] : finalKeyframe;
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs
const underDampedSpring = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
};
const criticallyDampedSpring = (target) => ({
	type: "spring",
	stiffness: 550,
	damping: target === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
});
const keyframesTransition = {
	type: "keyframes",
	duration: .8
};
/**
* Default easing curve is a slightly shallower version of
* the default browser easing curve.
*/
const ease = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
};
const getDefaultTransition = (valueKey, { keyframes: keyframes$2 }) => {
	if (keyframes$2.length > 2) return keyframesTransition;
	else if (transformProps.has(valueKey)) return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes$2[1]) : underDampedSpring;
	return ease;
};

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/animation/utils/is-transition-defined.mjs
/**
* Decide whether a transition is defined on a given Transition.
* This filters out orchestration options and returns true
* if any options are left.
*/
function isTransitionDefined({ when, delay: _delay, delayChildren, staggerChildren, staggerDirection, repeat, repeatType, repeatDelay, from, elapsed,...transition }) {
	return !!Object.keys(transition).length;
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/animation/interfaces/motion-value.mjs
const animateMotionValue = (name, value, target, transition = {}, element, isHandoff) => (onComplete) => {
	const valueTransition = getValueTransition(transition, name) || {};
	/**
	* Most transition values are currently completely overwritten by value-specific
	* transitions. In the future it'd be nicer to blend these transitions. But for now
	* delay actually does inherit from the root transition if not value-specific.
	*/
	const delay$1 = valueTransition.delay || transition.delay || 0;
	/**
	* Elapsed isn't a public transition option but can be passed through from
	* optimized appear effects in milliseconds.
	*/
	let { elapsed = 0 } = transition;
	elapsed = elapsed - secondsToMilliseconds(delay$1);
	const options$1 = {
		keyframes: Array.isArray(target) ? target : [null, target],
		ease: "easeOut",
		velocity: value.getVelocity(),
		...valueTransition,
		delay: -elapsed,
		onUpdate: (v) => {
			value.set(v);
			valueTransition.onUpdate && valueTransition.onUpdate(v);
		},
		onComplete: () => {
			onComplete();
			valueTransition.onComplete && valueTransition.onComplete();
		},
		name,
		motionValue: value,
		element: isHandoff ? void 0 : element
	};
	/**
	* If there's no transition defined for this value, we can generate
	* unique transition settings for this value.
	*/
	if (!isTransitionDefined(valueTransition)) Object.assign(options$1, getDefaultTransition(name, options$1));
	/**
	* Both WAAPI and our internal animation functions use durations
	* as defined by milliseconds, while our external API defines them
	* as seconds.
	*/
	options$1.duration && (options$1.duration = secondsToMilliseconds(options$1.duration));
	options$1.repeatDelay && (options$1.repeatDelay = secondsToMilliseconds(options$1.repeatDelay));
	/**
	* Support deprecated way to set initial value. Prefer keyframe syntax.
	*/
	if (options$1.from !== void 0) options$1.keyframes[0] = options$1.from;
	let shouldSkip = false;
	if (options$1.type === false || options$1.duration === 0 && !options$1.repeatDelay) {
		makeAnimationInstant(options$1);
		if (options$1.delay === 0) shouldSkip = true;
	}
	if (MotionGlobalConfig.instantAnimations || MotionGlobalConfig.skipAnimations) {
		shouldSkip = true;
		makeAnimationInstant(options$1);
		options$1.delay = 0;
	}
	/**
	* If the transition type or easing has been explicitly set by the user
	* then we don't want to allow flattening the animation.
	*/
	options$1.allowFlatten = !valueTransition.type && !valueTransition.ease;
	/**
	* If we can or must skip creating the animation, and apply only
	* the final keyframe, do so. We also check once keyframes are resolved but
	* this early check prevents the need to create an animation at all.
	*/
	if (shouldSkip && !isHandoff && value.get() !== void 0) {
		const finalKeyframe = getFinalKeyframe(options$1.keyframes, valueTransition);
		if (finalKeyframe !== void 0) {
			frame.update(() => {
				options$1.onUpdate(finalKeyframe);
				options$1.onComplete();
			});
			return;
		}
	}
	return valueTransition.isSync ? new JSAnimation(options$1) : new AsyncMotionValueAnimation(options$1);
};

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs
/**
* Decide whether we should block this animation. Previously, we achieved this
* just by checking whether the key was listed in protectedKeys, but this
* posed problems if an animation was triggered by afterChildren and protectedKeys
* had been set to true in the meantime.
*/
function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
	const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
	needsAnimating[key] = false;
	return shouldBlock;
}
function animateTarget(visualElement, targetAndTransition, { delay: delay$1 = 0, transitionOverride, type } = {}) {
	let { transition = visualElement.getDefaultTransition(), transitionEnd,...target } = targetAndTransition;
	if (transitionOverride) transition = transitionOverride;
	const animations$1 = [];
	const animationTypeState = type && visualElement.animationState && visualElement.animationState.getState()[type];
	for (const key in target) {
		const value = visualElement.getValue(key, visualElement.latestValues[key] ?? null);
		const valueTarget = target[key];
		if (valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) continue;
		const valueTransition = {
			delay: delay$1,
			...getValueTransition(transition || {}, key)
		};
		/**
		* If the value is already at the defined target, skip the animation.
		*/
		const currentValue = value.get();
		if (currentValue !== void 0 && !value.isAnimating && !Array.isArray(valueTarget) && valueTarget === currentValue && !valueTransition.velocity) continue;
		/**
		* If this is the first time a value is being animated, check
		* to see if we're handling off from an existing animation.
		*/
		let isHandoff = false;
		if (window.MotionHandoffAnimation) {
			const appearId = getOptimisedAppearId(visualElement);
			if (appearId) {
				const startTime = window.MotionHandoffAnimation(appearId, key, frame);
				if (startTime !== null) {
					valueTransition.startTime = startTime;
					isHandoff = true;
				}
			}
		}
		addValueToWillChange(visualElement, key);
		value.start(animateMotionValue(key, value, valueTarget, visualElement.shouldReduceMotion && positionalKeys.has(key) ? { type: false } : valueTransition, visualElement, isHandoff));
		const animation = value.animation;
		if (animation) animations$1.push(animation);
	}
	if (transitionEnd) Promise.all(animations$1).then(() => {
		frame.update(() => {
			transitionEnd && setTarget(visualElement, transitionEnd);
		});
	});
	return animations$1;
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/animation/utils/calc-child-stagger.mjs
function calcChildStagger(children, child, delayChildren, staggerChildren = 0, staggerDirection = 1) {
	const index = Array.from(children).sort((a, b) => a.sortNodePosition(b)).indexOf(child);
	const numChildren = children.size;
	const maxStaggerDuration = (numChildren - 1) * staggerChildren;
	const delayIsFunction = typeof delayChildren === "function";
	return delayIsFunction ? delayChildren(index, numChildren) : staggerDirection === 1 ? index * staggerChildren : maxStaggerDuration - index * staggerChildren;
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/animation/interfaces/visual-element-variant.mjs
function animateVariant(visualElement, variant, options$1 = {}) {
	const resolved = resolveVariant(visualElement, variant, options$1.type === "exit" ? visualElement.presenceContext?.custom : void 0);
	let { transition = visualElement.getDefaultTransition() || {} } = resolved || {};
	if (options$1.transitionOverride) transition = options$1.transitionOverride;
	/**
	* If we have a variant, create a callback that runs it as an animation.
	* Otherwise, we resolve a Promise immediately for a composable no-op.
	*/
	const getAnimation = resolved ? () => Promise.all(animateTarget(visualElement, resolved, options$1)) : () => Promise.resolve();
	/**
	* If we have children, create a callback that runs all their animations.
	* Otherwise, we resolve a Promise immediately for a composable no-op.
	*/
	const getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size ? (forwardDelay = 0) => {
		const { delayChildren = 0, staggerChildren, staggerDirection } = transition;
		return animateChildren(visualElement, variant, forwardDelay, delayChildren, staggerChildren, staggerDirection, options$1);
	} : () => Promise.resolve();
	/**
	* If the transition explicitly defines a "when" option, we need to resolve either
	* this animation or all children animations before playing the other.
	*/
	const { when } = transition;
	if (when) {
		const [first, last] = when === "beforeChildren" ? [getAnimation, getChildAnimations] : [getChildAnimations, getAnimation];
		return first().then(() => last());
	} else return Promise.all([getAnimation(), getChildAnimations(options$1.delay)]);
}
function animateChildren(visualElement, variant, delay$1 = 0, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options$1) {
	const animations$1 = [];
	for (const child of visualElement.variantChildren) {
		child.notify("AnimationStart", variant);
		animations$1.push(animateVariant(child, variant, {
			...options$1,
			delay: delay$1 + (typeof delayChildren === "function" ? 0 : delayChildren) + calcChildStagger(visualElement.variantChildren, child, delayChildren, staggerChildren, staggerDirection)
		}).then(() => child.notify("AnimationComplete", variant)));
	}
	return Promise.all(animations$1);
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/animation/interfaces/visual-element.mjs
function animateVisualElement(visualElement, definition, options$1 = {}) {
	visualElement.notify("AnimationStart", definition);
	let animation;
	if (Array.isArray(definition)) {
		const animations$1 = definition.map((variant) => animateVariant(visualElement, variant, options$1));
		animation = Promise.all(animations$1);
	} else if (typeof definition === "string") animation = animateVariant(visualElement, definition, options$1);
	else {
		const resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement, definition, options$1.custom) : definition;
		animation = Promise.all(animateTarget(visualElement, resolvedDefinition, options$1));
	}
	return animation.then(() => {
		visualElement.notify("AnimationComplete", definition);
	});
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/utils/shallow-compare.mjs
function shallowCompare(next, prev) {
	if (!Array.isArray(prev)) return false;
	const prevLength = prev.length;
	if (prevLength !== next.length) return false;
	for (let i = 0; i < prevLength; i++) if (prev[i] !== next[i]) return false;
	return true;
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/utils/get-variant-context.mjs
const numVariantProps = variantProps.length;
function getVariantContext(visualElement) {
	if (!visualElement) return void 0;
	if (!visualElement.isControllingVariants) {
		const context$1 = visualElement.parent ? getVariantContext(visualElement.parent) || {} : {};
		if (visualElement.props.initial !== void 0) context$1.initial = visualElement.props.initial;
		return context$1;
	}
	const context = {};
	for (let i = 0; i < numVariantProps; i++) {
		const name = variantProps[i];
		const prop = visualElement.props[name];
		if (isVariantLabel(prop) || prop === false) context[name] = prop;
	}
	return context;
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/utils/animation-state.mjs
const reversePriorityOrder = [...variantPriorityOrder].reverse();
const numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement) {
	return (animations$1) => Promise.all(animations$1.map(({ animation, options: options$1 }) => animateVisualElement(visualElement, animation, options$1)));
}
function createAnimationState(visualElement) {
	let animate = animateList(visualElement);
	let state = createState();
	let isInitialRender = true;
	/**
	* This function will be used to reduce the animation definitions for
	* each active animation type into an object of resolved values for it.
	*/
	const buildResolvedTypeValues = (type) => (acc, definition) => {
		const resolved = resolveVariant(visualElement, definition, type === "exit" ? visualElement.presenceContext?.custom : void 0);
		if (resolved) {
			const { transition, transitionEnd,...target } = resolved;
			acc = {
				...acc,
				...target,
				...transitionEnd
			};
		}
		return acc;
	};
	/**
	* This just allows us to inject mocked animation functions
	* @internal
	*/
	function setAnimateFunction(makeAnimator) {
		animate = makeAnimator(visualElement);
	}
	/**
	* When we receive new props, we need to:
	* 1. Create a list of protected keys for each type. This is a directory of
	*    value keys that are currently being "handled" by types of a higher priority
	*    so that whenever an animation is played of a given type, these values are
	*    protected from being animated.
	* 2. Determine if an animation type needs animating.
	* 3. Determine if any values have been removed from a type and figure out
	*    what to animate those to.
	*/
	function animateChanges(changedActiveType) {
		const { props } = visualElement;
		const context = getVariantContext(visualElement.parent) || {};
		/**
		* A list of animations that we'll build into as we iterate through the animation
		* types. This will get executed at the end of the function.
		*/
		const animations$1 = [];
		/**
		* Keep track of which values have been removed. Then, as we hit lower priority
		* animation types, we can check if they contain removed values and animate to that.
		*/
		const removedKeys = /* @__PURE__ */ new Set();
		/**
		* A dictionary of all encountered keys. This is an object to let us build into and
		* copy it without iteration. Each time we hit an animation type we set its protected
		* keys - the keys its not allowed to animate - to the latest version of this object.
		*/
		let encounteredKeys = {};
		/**
		* If a variant has been removed at a given index, and this component is controlling
		* variant animations, we want to ensure lower-priority variants are forced to animate.
		*/
		let removedVariantIndex = Infinity;
		/**
		* Iterate through all animation types in reverse priority order. For each, we want to
		* detect which values it's handling and whether or not they've changed (and therefore
		* need to be animated). If any values have been removed, we want to detect those in
		* lower priority props and flag for animation.
		*/
		for (let i = 0; i < numAnimationTypes; i++) {
			const type = reversePriorityOrder[i];
			const typeState = state[type];
			const prop = props[type] !== void 0 ? props[type] : context[type];
			const propIsVariant = isVariantLabel(prop);
			/**
			* If this type has *just* changed isActive status, set activeDelta
			* to that status. Otherwise set to null.
			*/
			const activeDelta = type === changedActiveType ? typeState.isActive : null;
			if (activeDelta === false) removedVariantIndex = i;
			/**
			* If this prop is an inherited variant, rather than been set directly on the
			* component itself, we want to make sure we allow the parent to trigger animations.
			*
			* TODO: Can probably change this to a !isControllingVariants check
			*/
			let isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
			if (isInherited && isInitialRender && visualElement.manuallyAnimateOnMount) isInherited = false;
			/**
			* Set all encountered keys so far as the protected keys for this type. This will
			* be any key that has been animated or otherwise handled by active, higher-priortiy types.
			*/
			typeState.protectedKeys = { ...encounteredKeys };
			if (!typeState.isActive && activeDelta === null || !prop && !typeState.prevProp || isAnimationControls(prop) || typeof prop === "boolean") continue;
			/**
			* As we go look through the values defined on this type, if we detect
			* a changed value or a value that was removed in a higher priority, we set
			* this to true and add this prop to the animation list.
			*/
			const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
			let shouldAnimateType = variantDidChange || type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || i > removedVariantIndex && propIsVariant;
			let handledRemovedValues = false;
			/**
			* As animations can be set as variant lists, variants or target objects, we
			* coerce everything to an array if it isn't one already
			*/
			const definitionList = Array.isArray(prop) ? prop : [prop];
			/**
			* Build an object of all the resolved values. We'll use this in the subsequent
			* animateChanges calls to determine whether a value has changed.
			*/
			let resolvedValues = definitionList.reduce(buildResolvedTypeValues(type), {});
			if (activeDelta === false) resolvedValues = {};
			/**
			* Now we need to loop through all the keys in the prev prop and this prop,
			* and decide:
			* 1. If the value has changed, and needs animating
			* 2. If it has been removed, and needs adding to the removedKeys set
			* 3. If it has been removed in a higher priority type and needs animating
			* 4. If it hasn't been removed in a higher priority but hasn't changed, and
			*    needs adding to the type's protectedKeys list.
			*/
			const { prevResolvedValues = {} } = typeState;
			const allKeys = {
				...prevResolvedValues,
				...resolvedValues
			};
			const markToAnimate = (key) => {
				shouldAnimateType = true;
				if (removedKeys.has(key)) {
					handledRemovedValues = true;
					removedKeys.delete(key);
				}
				typeState.needsAnimating[key] = true;
				const motionValue$1 = visualElement.getValue(key);
				if (motionValue$1) motionValue$1.liveStyle = false;
			};
			for (const key in allKeys) {
				const next = resolvedValues[key];
				const prev = prevResolvedValues[key];
				if (encounteredKeys.hasOwnProperty(key)) continue;
				/**
				* If the value has changed, we probably want to animate it.
				*/
				let valueHasChanged = false;
				if (isKeyframesTarget(next) && isKeyframesTarget(prev)) valueHasChanged = !shallowCompare(next, prev);
				else valueHasChanged = next !== prev;
				if (valueHasChanged) if (next !== void 0 && next !== null) markToAnimate(key);
				else removedKeys.add(key);
				else if (next !== void 0 && removedKeys.has(key))
 /**
				* If next hasn't changed and it isn't undefined, we want to check if it's
				* been removed by a higher priority
				*/
				markToAnimate(key);
				else
 /**
				* If it hasn't changed, we add it to the list of protected values
				* to ensure it doesn't get animated.
				*/
				typeState.protectedKeys[key] = true;
			}
			/**
			* Update the typeState so next time animateChanges is called we can compare the
			* latest prop and resolvedValues to these.
			*/
			typeState.prevProp = prop;
			typeState.prevResolvedValues = resolvedValues;
			if (typeState.isActive) encounteredKeys = {
				...encounteredKeys,
				...resolvedValues
			};
			if (isInitialRender && visualElement.blockInitialAnimation) shouldAnimateType = false;
			/**
			* If this is an inherited prop we want to skip this animation
			* unless the inherited variants haven't changed on this render.
			*/
			const willAnimateViaParent = isInherited && variantDidChange;
			const needsAnimating = !willAnimateViaParent || handledRemovedValues;
			if (shouldAnimateType && needsAnimating) animations$1.push(...definitionList.map((animation) => {
				const options$1 = { type };
				/**
				* If we're performing the initial animation, but we're not
				* rendering at the same time as the variant-controlling parent,
				* we want to use the parent's transition to calculate the stagger.
				*/
				if (typeof animation === "string" && isInitialRender && !willAnimateViaParent && visualElement.manuallyAnimateOnMount && visualElement.parent) {
					const { parent } = visualElement;
					const parentVariant = resolveVariant(parent, animation);
					if (parent.enteringChildren && parentVariant) {
						const { delayChildren } = parentVariant.transition || {};
						options$1.delay = calcChildStagger(parent.enteringChildren, visualElement, delayChildren);
					}
				}
				return {
					animation,
					options: options$1
				};
			}));
		}
		/**
		* If there are some removed value that haven't been dealt with,
		* we need to create a new animation that falls back either to the value
		* defined in the style prop, or the last read value.
		*/
		if (removedKeys.size) {
			const fallbackAnimation = {};
			/**
			* If the initial prop contains a transition we can use that, otherwise
			* allow the animation function to use the visual element's default.
			*/
			if (typeof props.initial !== "boolean") {
				const initialTransition = resolveVariant(visualElement, Array.isArray(props.initial) ? props.initial[0] : props.initial);
				if (initialTransition && initialTransition.transition) fallbackAnimation.transition = initialTransition.transition;
			}
			removedKeys.forEach((key) => {
				const fallbackTarget = visualElement.getBaseTarget(key);
				const motionValue$1 = visualElement.getValue(key);
				if (motionValue$1) motionValue$1.liveStyle = true;
				fallbackAnimation[key] = fallbackTarget ?? null;
			});
			animations$1.push({ animation: fallbackAnimation });
		}
		let shouldAnimate = Boolean(animations$1.length);
		if (isInitialRender && (props.initial === false || props.initial === props.animate) && !visualElement.manuallyAnimateOnMount) shouldAnimate = false;
		isInitialRender = false;
		return shouldAnimate ? animate(animations$1) : Promise.resolve();
	}
	/**
	* Change whether a certain animation type is active.
	*/
	function setActive(type, isActive) {
		if (state[type].isActive === isActive) return Promise.resolve();
		visualElement.variantChildren?.forEach((child) => child.animationState?.setActive(type, isActive));
		state[type].isActive = isActive;
		const animations$1 = animateChanges(type);
		for (const key in state) state[key].protectedKeys = {};
		return animations$1;
	}
	return {
		animateChanges,
		setActive,
		setAnimateFunction,
		getState: () => state,
		reset: () => {
			state = createState();
			isInitialRender = true;
		}
	};
}
function checkVariantsDidChange(prev, next) {
	if (typeof next === "string") return next !== prev;
	else if (Array.isArray(next)) return !shallowCompare(next, prev);
	return false;
}
function createTypeState(isActive = false) {
	return {
		isActive,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	};
}
function createState() {
	return {
		animate: createTypeState(true),
		whileInView: createTypeState(),
		whileHover: createTypeState(),
		whileTap: createTypeState(),
		whileDrag: createTypeState(),
		whileFocus: createTypeState(),
		exit: createTypeState()
	};
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/motion/features/Feature.mjs
var Feature = class {
	constructor(node) {
		this.isMounted = false;
		this.node = node;
	}
	update() {}
};

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/motion/features/animation/index.mjs
var AnimationFeature = class extends Feature {
	/**
	* We dynamically generate the AnimationState manager as it contains a reference
	* to the underlying animation library. We only want to load that if we load this,
	* so people can optionally code split it out using the `m` component.
	*/
	constructor(node) {
		super(node);
		node.animationState || (node.animationState = createAnimationState(node));
	}
	updateAnimationControlsSubscription() {
		const { animate } = this.node.getProps();
		if (isAnimationControls(animate)) this.unmountControls = animate.subscribe(this.node);
	}
	/**
	* Subscribe any provided AnimationControls to the component's VisualElement
	*/
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		const { animate } = this.node.getProps();
		const { animate: prevAnimate } = this.node.prevProps || {};
		if (animate !== prevAnimate) this.updateAnimationControlsSubscription();
	}
	unmount() {
		this.node.animationState.reset();
		this.unmountControls?.();
	}
};

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs
let id$1 = 0;
var ExitAnimationFeature = class extends Feature {
	constructor() {
		super(...arguments);
		this.id = id$1++;
	}
	update() {
		if (!this.node.presenceContext) return;
		const { isPresent: isPresent$1, onExitComplete } = this.node.presenceContext;
		const { isPresent: prevIsPresent } = this.node.prevPresenceContext || {};
		if (!this.node.animationState || isPresent$1 === prevIsPresent) return;
		const exitAnimation = this.node.animationState.setActive("exit", !isPresent$1);
		if (onExitComplete && !isPresent$1) exitAnimation.then(() => {
			onExitComplete(this.id);
		});
	}
	mount() {
		const { register, onExitComplete } = this.node.presenceContext || {};
		if (onExitComplete) onExitComplete(this.id);
		if (register) this.unmount = register(this.id);
	}
	unmount() {}
};

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/motion/features/animations.mjs
const animations = {
	animation: { Feature: AnimationFeature },
	exit: { Feature: ExitAnimationFeature }
};

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/events/add-dom-event.mjs
function addDomEvent(target, eventName, handler, options$1 = { passive: true }) {
	target.addEventListener(eventName, handler, options$1);
	return () => target.removeEventListener(eventName, handler);
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/events/event-info.mjs
function extractEventInfo(event) {
	return { point: {
		x: event.pageX,
		y: event.pageY
	} };
}
const addPointerInfo = (handler) => {
	return (event) => isPrimaryPointer(event) && handler(event, extractEventInfo(event));
};

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/events/add-pointer-event.mjs
function addPointerEvent(target, eventName, handler, options$1) {
	return addDomEvent(target, eventName, addPointerInfo(handler), options$1);
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs
const SCALE_PRECISION = 1e-4;
const SCALE_MIN = 1 - SCALE_PRECISION;
const SCALE_MAX = 1 + SCALE_PRECISION;
const TRANSLATE_PRECISION = .01;
const TRANSLATE_MIN = 0 - TRANSLATE_PRECISION;
const TRANSLATE_MAX = 0 + TRANSLATE_PRECISION;
function calcLength(axis) {
	return axis.max - axis.min;
}
function isNear(value, target, maxDistance) {
	return Math.abs(value - target) <= maxDistance;
}
function calcAxisDelta(delta, source, target, origin = .5) {
	delta.origin = origin;
	delta.originPoint = mixNumber(source.min, source.max, delta.origin);
	delta.scale = calcLength(target) / calcLength(source);
	delta.translate = mixNumber(target.min, target.max, delta.origin) - delta.originPoint;
	if (delta.scale >= SCALE_MIN && delta.scale <= SCALE_MAX || isNaN(delta.scale)) delta.scale = 1;
	if (delta.translate >= TRANSLATE_MIN && delta.translate <= TRANSLATE_MAX || isNaN(delta.translate)) delta.translate = 0;
}
function calcBoxDelta(delta, source, target, origin) {
	calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : void 0);
	calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : void 0);
}
function calcRelativeAxis(target, relative, parent) {
	target.min = parent.min + relative.min;
	target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent) {
	calcRelativeAxis(target.x, relative.x, parent.x);
	calcRelativeAxis(target.y, relative.y, parent.y);
}
function calcRelativeAxisPosition(target, layout$1, parent) {
	target.min = layout$1.min - parent.min;
	target.max = target.min + calcLength(layout$1);
}
function calcRelativePosition(target, layout$1, parent) {
	calcRelativeAxisPosition(target.x, layout$1.x, parent.x);
	calcRelativeAxisPosition(target.y, layout$1.y, parent.y);
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs
function eachAxis(callback) {
	return [callback("x"), callback("y")];
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/utils/get-context-window.mjs
const getContextWindow = ({ current }) => {
	return current ? current.ownerDocument.defaultView : null;
};

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/utils/distance.mjs
const distance = (a, b) => Math.abs(a - b);
function distance2D(a, b) {
	const xDelta = distance(a.x, b.x);
	const yDelta = distance(a.y, b.y);
	return Math.sqrt(xDelta ** 2 + yDelta ** 2);
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs
/**
* @internal
*/
var PanSession = class {
	constructor(event, handlers$1, { transformPagePoint, contextWindow = window, dragSnapToOrigin = false, distanceThreshold = 3 } = {}) {
		/**
		* @internal
		*/
		this.startEvent = null;
		/**
		* @internal
		*/
		this.lastMoveEvent = null;
		/**
		* @internal
		*/
		this.lastMoveEventInfo = null;
		/**
		* @internal
		*/
		this.handlers = {};
		/**
		* @internal
		*/
		this.contextWindow = window;
		this.updatePoint = () => {
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			const info$1 = getPanInfo(this.lastMoveEventInfo, this.history);
			const isPanStarted = this.startEvent !== null;
			const isDistancePastThreshold = distance2D(info$1.offset, {
				x: 0,
				y: 0
			}) >= this.distanceThreshold;
			if (!isPanStarted && !isDistancePastThreshold) return;
			const { point: point$1 } = info$1;
			const { timestamp: timestamp$1 } = frameData;
			this.history.push({
				...point$1,
				timestamp: timestamp$1
			});
			const { onStart, onMove } = this.handlers;
			if (!isPanStarted) {
				onStart && onStart(this.lastMoveEvent, info$1);
				this.startEvent = this.lastMoveEvent;
			}
			onMove && onMove(this.lastMoveEvent, info$1);
		};
		this.handlePointerMove = (event$1, info$1) => {
			this.lastMoveEvent = event$1;
			this.lastMoveEventInfo = transformPoint(info$1, this.transformPagePoint);
			frame.update(this.updatePoint, true);
		};
		this.handlePointerUp = (event$1, info$1) => {
			this.end();
			const { onEnd, onSessionEnd, resumeAnimation } = this.handlers;
			if (this.dragSnapToOrigin) resumeAnimation && resumeAnimation();
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			const panInfo = getPanInfo(event$1.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(info$1, this.transformPagePoint), this.history);
			if (this.startEvent && onEnd) onEnd(event$1, panInfo);
			onSessionEnd && onSessionEnd(event$1, panInfo);
		};
		if (!isPrimaryPointer(event)) return;
		this.dragSnapToOrigin = dragSnapToOrigin;
		this.handlers = handlers$1;
		this.transformPagePoint = transformPagePoint;
		this.distanceThreshold = distanceThreshold;
		this.contextWindow = contextWindow || window;
		const info = extractEventInfo(event);
		const initialInfo = transformPoint(info, this.transformPagePoint);
		const { point } = initialInfo;
		const { timestamp } = frameData;
		this.history = [{
			...point,
			timestamp
		}];
		const { onSessionStart } = handlers$1;
		onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
		this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp));
	}
	updateHandlers(handlers$1) {
		this.handlers = handlers$1;
	}
	end() {
		this.removeListeners && this.removeListeners();
		cancelFrame(this.updatePoint);
	}
};
function transformPoint(info, transformPagePoint) {
	return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a, b) {
	return {
		x: a.x - b.x,
		y: a.y - b.y
	};
}
function getPanInfo({ point }, history) {
	return {
		point,
		delta: subtractPoint(point, lastDevicePoint(history)),
		offset: subtractPoint(point, startDevicePoint(history)),
		velocity: getVelocity(history, .1)
	};
}
function startDevicePoint(history) {
	return history[0];
}
function lastDevicePoint(history) {
	return history[history.length - 1];
}
function getVelocity(history, timeDelta) {
	if (history.length < 2) return {
		x: 0,
		y: 0
	};
	let i = history.length - 1;
	let timestampedPoint = null;
	const lastPoint = lastDevicePoint(history);
	while (i >= 0) {
		timestampedPoint = history[i];
		if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) break;
		i--;
	}
	if (!timestampedPoint) return {
		x: 0,
		y: 0
	};
	const time$1 = millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
	if (time$1 === 0) return {
		x: 0,
		y: 0
	};
	const currentVelocity = {
		x: (lastPoint.x - timestampedPoint.x) / time$1,
		y: (lastPoint.y - timestampedPoint.y) / time$1
	};
	if (currentVelocity.x === Infinity) currentVelocity.x = 0;
	if (currentVelocity.y === Infinity) currentVelocity.y = 0;
	return currentVelocity;
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
/**
* Apply constraints to a point. These constraints are both physical along an
* axis, and an elastic factor that determines how much to constrain the point
* by if it does lie outside the defined parameters.
*/
function applyConstraints(point, { min: min$1, max: max$1 }, elastic) {
	if (min$1 !== void 0 && point < min$1) point = elastic ? mixNumber(min$1, point, elastic.min) : Math.max(point, min$1);
	else if (max$1 !== void 0 && point > max$1) point = elastic ? mixNumber(max$1, point, elastic.max) : Math.min(point, max$1);
	return point;
}
/**
* Calculate constraints in terms of the viewport when defined relatively to the
* measured axis. This is measured from the nearest edge, so a max constraint of 200
* on an axis with a max value of 300 would return a constraint of 500 - axis length
*/
function calcRelativeAxisConstraints(axis, min$1, max$1) {
	return {
		min: min$1 !== void 0 ? axis.min + min$1 : void 0,
		max: max$1 !== void 0 ? axis.max + max$1 - (axis.max - axis.min) : void 0
	};
}
/**
* Calculate constraints in terms of the viewport when
* defined relatively to the measured bounding box.
*/
function calcRelativeConstraints(layoutBox, { top: top$1, left: left$1, bottom: bottom$1, right: right$1 }) {
	return {
		x: calcRelativeAxisConstraints(layoutBox.x, left$1, right$1),
		y: calcRelativeAxisConstraints(layoutBox.y, top$1, bottom$1)
	};
}
/**
* Calculate viewport constraints when defined as another viewport-relative axis
*/
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
	let min$1 = constraintsAxis.min - layoutAxis.min;
	let max$1 = constraintsAxis.max - layoutAxis.max;
	if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) [min$1, max$1] = [max$1, min$1];
	return {
		min: min$1,
		max: max$1
	};
}
/**
* Calculate viewport constraints when defined as another viewport-relative box
*/
function calcViewportConstraints(layoutBox, constraintsBox) {
	return {
		x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
		y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
	};
}
/**
* Calculate a transform origin relative to the source axis, between 0-1, that results
* in an asthetically pleasing scale/transform needed to project from source to target.
*/
function calcOrigin(source, target) {
	let origin = .5;
	const sourceLength = calcLength(source);
	const targetLength = calcLength(target);
	if (targetLength > sourceLength) origin = progress(target.min, target.max - sourceLength, source.min);
	else if (sourceLength > targetLength) origin = progress(source.min, source.max - targetLength, target.min);
	return clamp(0, 1, origin);
}
/**
* Rebase the calculated viewport constraints relative to the layout.min point.
*/
function rebaseAxisConstraints(layout$1, constraints) {
	const relativeConstraints = {};
	if (constraints.min !== void 0) relativeConstraints.min = constraints.min - layout$1.min;
	if (constraints.max !== void 0) relativeConstraints.max = constraints.max - layout$1.min;
	return relativeConstraints;
}
const defaultElastic = .35;
/**
* Accepts a dragElastic prop and returns resolved elastic values for each axis.
*/
function resolveDragElastic(dragElastic = defaultElastic) {
	if (dragElastic === false) dragElastic = 0;
	else if (dragElastic === true) dragElastic = defaultElastic;
	return {
		x: resolveAxisElastic(dragElastic, "left", "right"),
		y: resolveAxisElastic(dragElastic, "top", "bottom")
	};
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
	return {
		min: resolvePointElastic(dragElastic, minLabel),
		max: resolvePointElastic(dragElastic, maxLabel)
	};
}
function resolvePointElastic(dragElastic, label) {
	return typeof dragElastic === "number" ? dragElastic : dragElastic[label] || 0;
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
const elementDragControls = /* @__PURE__ */ new WeakMap();
var VisualElementDragControls = class {
	constructor(visualElement) {
		this.openDragLock = null;
		this.isDragging = false;
		this.currentDirection = null;
		this.originPoint = {
			x: 0,
			y: 0
		};
		/**
		* The permitted boundaries of travel, in pixels.
		*/
		this.constraints = false;
		this.hasMutatedConstraints = false;
		/**
		* The per-axis resolved elastic values.
		*/
		this.elastic = createBox();
		/**
		* The latest pointer event. Used as fallback when the `cancel` and `stop` functions are called without arguments.
		*/
		this.latestPointerEvent = null;
		/**
		* The latest pan info. Used as fallback when the `cancel` and `stop` functions are called without arguments.
		*/
		this.latestPanInfo = null;
		this.visualElement = visualElement;
	}
	start(originEvent, { snapToCursor = false, distanceThreshold } = {}) {
		/**
		* Don't start dragging if this component is exiting
		*/
		const { presenceContext } = this.visualElement;
		if (presenceContext && presenceContext.isPresent === false) return;
		const onSessionStart = (event) => {
			const { dragSnapToOrigin: dragSnapToOrigin$1 } = this.getProps();
			dragSnapToOrigin$1 ? this.pauseAnimation() : this.stopAnimation();
			if (snapToCursor) this.snapToCursor(extractEventInfo(event).point);
		};
		const onStart = (event, info) => {
			const { drag: drag$1, dragPropagation, onDragStart } = this.getProps();
			if (drag$1 && !dragPropagation) {
				if (this.openDragLock) this.openDragLock();
				this.openDragLock = setDragLock(drag$1);
				if (!this.openDragLock) return;
			}
			this.latestPointerEvent = event;
			this.latestPanInfo = info;
			this.isDragging = true;
			this.currentDirection = null;
			this.resolveConstraints();
			if (this.visualElement.projection) {
				this.visualElement.projection.isAnimationBlocked = true;
				this.visualElement.projection.target = void 0;
			}
			/**
			* Record gesture origin
			*/
			eachAxis((axis) => {
				let current = this.getAxisMotionValue(axis).get() || 0;
				/**
				* If the MotionValue is a percentage value convert to px
				*/
				if (percent.test(current)) {
					const { projection } = this.visualElement;
					if (projection && projection.layout) {
						const measuredAxis = projection.layout.layoutBox[axis];
						if (measuredAxis) {
							const length = calcLength(measuredAxis);
							current = length * (parseFloat(current) / 100);
						}
					}
				}
				this.originPoint[axis] = current;
			});
			if (onDragStart) frame.postRender(() => onDragStart(event, info));
			addValueToWillChange(this.visualElement, "transform");
			const { animationState } = this.visualElement;
			animationState && animationState.setActive("whileDrag", true);
		};
		const onMove = (event, info) => {
			this.latestPointerEvent = event;
			this.latestPanInfo = info;
			const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag } = this.getProps();
			if (!dragPropagation && !this.openDragLock) return;
			const { offset: offset$1 } = info;
			if (dragDirectionLock && this.currentDirection === null) {
				this.currentDirection = getCurrentDirection(offset$1);
				if (this.currentDirection !== null) onDirectionLock && onDirectionLock(this.currentDirection);
				return;
			}
			this.updateAxis("x", info.point, offset$1);
			this.updateAxis("y", info.point, offset$1);
			/**
			* Ideally we would leave the renderer to fire naturally at the end of
			* this frame but if the element is about to change layout as the result
			* of a re-render we want to ensure the browser can read the latest
			* bounding box to ensure the pointer and element don't fall out of sync.
			*/
			this.visualElement.render();
			/**
			* This must fire after the render call as it might trigger a state
			* change which itself might trigger a layout update.
			*/
			onDrag && onDrag(event, info);
		};
		const onSessionEnd = (event, info) => {
			this.latestPointerEvent = event;
			this.latestPanInfo = info;
			this.stop(event, info);
			this.latestPointerEvent = null;
			this.latestPanInfo = null;
		};
		const resumeAnimation = () => eachAxis((axis) => this.getAnimationState(axis) === "paused" && this.getAxisMotionValue(axis).animation?.play());
		const { dragSnapToOrigin } = this.getProps();
		this.panSession = new PanSession(originEvent, {
			onSessionStart,
			onStart,
			onMove,
			onSessionEnd,
			resumeAnimation
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin,
			distanceThreshold,
			contextWindow: getContextWindow(this.visualElement)
		});
	}
	/**
	* @internal
	*/
	stop(event, panInfo) {
		const finalEvent = event || this.latestPointerEvent;
		const finalPanInfo = panInfo || this.latestPanInfo;
		const isDragging$1 = this.isDragging;
		this.cancel();
		if (!isDragging$1 || !finalPanInfo || !finalEvent) return;
		const { velocity } = finalPanInfo;
		this.startAnimation(velocity);
		const { onDragEnd } = this.getProps();
		if (onDragEnd) frame.postRender(() => onDragEnd(finalEvent, finalPanInfo));
	}
	/**
	* @internal
	*/
	cancel() {
		this.isDragging = false;
		const { projection, animationState } = this.visualElement;
		if (projection) projection.isAnimationBlocked = false;
		this.panSession && this.panSession.end();
		this.panSession = void 0;
		const { dragPropagation } = this.getProps();
		if (!dragPropagation && this.openDragLock) {
			this.openDragLock();
			this.openDragLock = null;
		}
		animationState && animationState.setActive("whileDrag", false);
	}
	updateAxis(axis, _point, offset$1) {
		const { drag: drag$1 } = this.getProps();
		if (!offset$1 || !shouldDrag(axis, drag$1, this.currentDirection)) return;
		const axisValue = this.getAxisMotionValue(axis);
		let next = this.originPoint[axis] + offset$1[axis];
		if (this.constraints && this.constraints[axis]) next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
		axisValue.set(next);
	}
	resolveConstraints() {
		const { dragConstraints, dragElastic } = this.getProps();
		const layout$1 = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : this.visualElement.projection?.layout;
		const prevConstraints = this.constraints;
		if (dragConstraints && isRefObject(dragConstraints)) {
			if (!this.constraints) this.constraints = this.resolveRefConstraints();
		} else if (dragConstraints && layout$1) this.constraints = calcRelativeConstraints(layout$1.layoutBox, dragConstraints);
		else this.constraints = false;
		this.elastic = resolveDragElastic(dragElastic);
		/**
		* If we're outputting to external MotionValues, we want to rebase the measured constraints
		* from viewport-relative to component-relative.
		*/
		if (prevConstraints !== this.constraints && layout$1 && this.constraints && !this.hasMutatedConstraints) eachAxis((axis) => {
			if (this.constraints !== false && this.getAxisMotionValue(axis)) this.constraints[axis] = rebaseAxisConstraints(layout$1.layoutBox[axis], this.constraints[axis]);
		});
	}
	resolveRefConstraints() {
		const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
		if (!constraints || !isRefObject(constraints)) return false;
		const constraintsElement = constraints.current;
		invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
		const { projection } = this.visualElement;
		if (!projection || !projection.layout) return false;
		const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
		let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
		/**
		* If there's an onMeasureDragConstraints listener we call it and
		* if different constraints are returned, set constraints to that
		*/
		if (onMeasureDragConstraints) {
			const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
			this.hasMutatedConstraints = !!userConstraints;
			if (userConstraints) measuredConstraints = convertBoundingBoxToBox(userConstraints);
		}
		return measuredConstraints;
	}
	startAnimation(velocity) {
		const { drag: drag$1, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd } = this.getProps();
		const constraints = this.constraints || {};
		const momentumAnimations = eachAxis((axis) => {
			if (!shouldDrag(axis, drag$1, this.currentDirection)) return;
			let transition = constraints && constraints[axis] || {};
			if (dragSnapToOrigin) transition = {
				min: 0,
				max: 0
			};
			/**
			* Overdamp the boundary spring if `dragElastic` is disabled. There's still a frame
			* of spring animations so we should look into adding a disable spring option to `inertia`.
			* We could do something here where we affect the `bounceStiffness` and `bounceDamping`
			* using the value of `dragElastic`.
			*/
			const bounceStiffness = dragElastic ? 200 : 1e6;
			const bounceDamping = dragElastic ? 40 : 1e7;
			const inertia$1 = {
				type: "inertia",
				velocity: dragMomentum ? velocity[axis] : 0,
				bounceStiffness,
				bounceDamping,
				timeConstant: 750,
				restDelta: 1,
				restSpeed: 10,
				...dragTransition,
				...transition
			};
			return this.startAxisValueAnimation(axis, inertia$1);
		});
		return Promise.all(momentumAnimations).then(onDragTransitionEnd);
	}
	startAxisValueAnimation(axis, transition) {
		const axisValue = this.getAxisMotionValue(axis);
		addValueToWillChange(this.visualElement, axis);
		return axisValue.start(animateMotionValue(axis, axisValue, 0, transition, this.visualElement, false));
	}
	stopAnimation() {
		eachAxis((axis) => this.getAxisMotionValue(axis).stop());
	}
	pauseAnimation() {
		eachAxis((axis) => this.getAxisMotionValue(axis).animation?.pause());
	}
	getAnimationState(axis) {
		return this.getAxisMotionValue(axis).animation?.state;
	}
	/**
	* Drag works differently depending on which props are provided.
	*
	* - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
	* - Otherwise, we apply the delta to the x/y motion values.
	*/
	getAxisMotionValue(axis) {
		const dragKey = `_drag${axis.toUpperCase()}`;
		const props = this.visualElement.getProps();
		const externalMotionValue = props[dragKey];
		return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, (props.initial ? props.initial[axis] : void 0) || 0);
	}
	snapToCursor(point) {
		eachAxis((axis) => {
			const { drag: drag$1 } = this.getProps();
			if (!shouldDrag(axis, drag$1, this.currentDirection)) return;
			const { projection } = this.visualElement;
			const axisValue = this.getAxisMotionValue(axis);
			if (projection && projection.layout) {
				const { min: min$1, max: max$1 } = projection.layout.layoutBox[axis];
				axisValue.set(point[axis] - mixNumber(min$1, max$1, .5));
			}
		});
	}
	/**
	* When the viewport resizes we want to check if the measured constraints
	* have changed and, if so, reposition the element within those new constraints
	* relative to where it was before the resize.
	*/
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		const { drag: drag$1, dragConstraints } = this.getProps();
		const { projection } = this.visualElement;
		if (!isRefObject(dragConstraints) || !projection || !this.constraints) return;
		/**
		* Stop current animations as there can be visual glitching if we try to do
		* this mid-animation
		*/
		this.stopAnimation();
		/**
		* Record the relative position of the dragged element relative to the
		* constraints box and save as a progress value.
		*/
		const boxProgress = {
			x: 0,
			y: 0
		};
		eachAxis((axis) => {
			const axisValue = this.getAxisMotionValue(axis);
			if (axisValue && this.constraints !== false) {
				const latest = axisValue.get();
				boxProgress[axis] = calcOrigin({
					min: latest,
					max: latest
				}, this.constraints[axis]);
			}
		});
		/**
		* Update the layout of this element and resolve the latest drag constraints
		*/
		const { transformTemplate } = this.visualElement.getProps();
		this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
		projection.root && projection.root.updateScroll();
		projection.updateLayout();
		this.resolveConstraints();
		/**
		* For each axis, calculate the current progress of the layout axis
		* within the new constraints.
		*/
		eachAxis((axis) => {
			if (!shouldDrag(axis, drag$1, null)) return;
			/**
			* Calculate a new transform based on the previous box progress
			*/
			const axisValue = this.getAxisMotionValue(axis);
			const { min: min$1, max: max$1 } = this.constraints[axis];
			axisValue.set(mixNumber(min$1, max$1, boxProgress[axis]));
		});
	}
	addListeners() {
		if (!this.visualElement.current) return;
		elementDragControls.set(this.visualElement, this);
		const element = this.visualElement.current;
		/**
		* Attach a pointerdown event listener on this DOM element to initiate drag tracking.
		*/
		const stopPointerListener = addPointerEvent(element, "pointerdown", (event) => {
			const { drag: drag$1, dragListener = true } = this.getProps();
			drag$1 && dragListener && this.start(event);
		});
		const measureDragConstraints = () => {
			const { dragConstraints } = this.getProps();
			if (isRefObject(dragConstraints) && dragConstraints.current) this.constraints = this.resolveRefConstraints();
		};
		const { projection } = this.visualElement;
		const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
		if (projection && !projection.layout) {
			projection.root && projection.root.updateScroll();
			projection.updateLayout();
		}
		frame.read(measureDragConstraints);
		/**
		* Attach a window resize listener to scale the draggable target within its defined
		* constraints as the window resizes.
		*/
		const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
		/**
		* If the element's layout changes, calculate the delta and apply that to
		* the drag gesture's origin point.
		*/
		const stopLayoutUpdateListener = projection.addEventListener("didUpdate", (({ delta, hasLayoutChanged }) => {
			if (this.isDragging && hasLayoutChanged) {
				eachAxis((axis) => {
					const motionValue$1 = this.getAxisMotionValue(axis);
					if (!motionValue$1) return;
					this.originPoint[axis] += delta[axis].translate;
					motionValue$1.set(motionValue$1.get() + delta[axis].translate);
				});
				this.visualElement.render();
			}
		}));
		return () => {
			stopResizeListener();
			stopPointerListener();
			stopMeasureLayoutListener();
			stopLayoutUpdateListener && stopLayoutUpdateListener();
		};
	}
	getProps() {
		const props = this.visualElement.getProps();
		const { drag: drag$1 = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = defaultElastic, dragMomentum = true } = props;
		return {
			...props,
			drag: drag$1,
			dragDirectionLock,
			dragPropagation,
			dragConstraints,
			dragElastic,
			dragMomentum
		};
	}
};
function shouldDrag(direction, drag$1, currentDirection) {
	return (drag$1 === true || drag$1 === direction) && (currentDirection === null || currentDirection === direction);
}
/**
* Based on an x/y offset determine the current drag direction. If both axis' offsets are lower
* than the provided threshold, return `null`.
*
* @param offset - The x/y offset from origin.
* @param lockThreshold - (Optional) - the minimum absolute offset before we can determine a drag direction.
*/
function getCurrentDirection(offset$1, lockThreshold = 10) {
	let direction = null;
	if (Math.abs(offset$1.y) > lockThreshold) direction = "y";
	else if (Math.abs(offset$1.x) > lockThreshold) direction = "x";
	return direction;
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/gestures/drag/index.mjs
var DragGesture = class extends Feature {
	constructor(node) {
		super(node);
		this.removeGroupControls = noop;
		this.removeListeners = noop;
		this.controls = new VisualElementDragControls(node);
	}
	mount() {
		const { dragControls } = this.node.getProps();
		if (dragControls) this.removeGroupControls = dragControls.subscribe(this.controls);
		this.removeListeners = this.controls.addListeners() || noop;
	}
	unmount() {
		this.removeGroupControls();
		this.removeListeners();
	}
};

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/gestures/pan/index.mjs
const asyncHandler = (handler) => (event, info) => {
	if (handler) frame.postRender(() => handler(event, info));
};
var PanGesture = class extends Feature {
	constructor() {
		super(...arguments);
		this.removePointerDownListener = noop;
	}
	onPointerDown(pointerDownEvent) {
		this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: getContextWindow(this.node)
		});
	}
	createPanHandlers() {
		const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
		return {
			onSessionStart: asyncHandler(onPanSessionStart),
			onStart: asyncHandler(onPanStart),
			onMove: onPan,
			onEnd: (event, info) => {
				delete this.session;
				if (onPanEnd) frame.postRender(() => onPanEnd(event, info));
			}
		};
	}
	mount() {
		this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (event) => this.onPointerDown(event));
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener();
		this.session && this.session.end();
	}
};

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/projection/node/state.mjs
/**
* This should only ever be modified on the client otherwise it'll
* persist through server requests. If we need instanced states we
* could lazy-init via root.
*/
const globalProjectionState = {
	hasAnimatedSinceResize: true,
	hasEverUpdated: false
};

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs
function pixelsToPercent(pixels, axis) {
	if (axis.max === axis.min) return 0;
	return pixels / (axis.max - axis.min) * 100;
}
/**
* We always correct borderRadius as a percentage rather than pixels to reduce paints.
* For example, if you are projecting a box that is 100px wide with a 10px borderRadius
* into a box that is 200px wide with a 20px borderRadius, that is actually a 10%
* borderRadius in both states. If we animate between the two in pixels that will trigger
* a paint each time. If we animate between the two in percentage we'll avoid a paint.
*/
const correctBorderRadius = { correct: (latest, node) => {
	if (!node.target) return latest;
	/**
	* If latest is a string, if it's a percentage we can return immediately as it's
	* going to be stretched appropriately. Otherwise, if it's a pixel, convert it to a number.
	*/
	if (typeof latest === "string") if (px.test(latest)) latest = parseFloat(latest);
	else return latest;
	/**
	* If latest is a number, it's a pixel value. We use the current viewportBox to calculate that
	* pixel value as a percentage of each axis
	*/
	const x = pixelsToPercent(latest, node.target.x);
	const y = pixelsToPercent(latest, node.target.y);
	return `${x}% ${y}%`;
} };

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs
const correctBoxShadow = { correct: (latest, { treeScale, projectionDelta }) => {
	const original = latest;
	const shadow = complex.parse(latest);
	if (shadow.length > 5) return original;
	const template = complex.createTransformer(latest);
	const offset$1 = typeof shadow[0] !== "number" ? 1 : 0;
	const xScale = projectionDelta.x.scale * treeScale.x;
	const yScale = projectionDelta.y.scale * treeScale.y;
	shadow[0 + offset$1] /= xScale;
	shadow[1 + offset$1] /= yScale;
	/**
	* Ideally we'd correct x and y scales individually, but because blur and
	* spread apply to both we have to take a scale average and apply that instead.
	* We could potentially improve the outcome of this by incorporating the ratio between
	* the two scales.
	*/
	const averageScale = mixNumber(xScale, yScale, .5);
	if (typeof shadow[2 + offset$1] === "number") shadow[2 + offset$1] /= averageScale;
	if (typeof shadow[3 + offset$1] === "number") shadow[3 + offset$1] /= averageScale;
	return template(shadow);
} };

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
/**
* Track whether we've taken any snapshots yet. If not,
* we can safely skip notification of didUpdate.
*
* Difficult to capture in a test but to prevent flickering
* we must set this to true either on update or unmount.
* Running `next-env/layout-id` in Safari will show this behaviour if broken.
*/
let hasTakenAnySnapshot = false;
var MeasureLayoutWithContext = class extends import_react.Component {
	/**
	* This only mounts projection nodes for components that
	* need measuring, we might want to do it for all components
	* in order to incorporate transforms
	*/
	componentDidMount() {
		const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
		const { projection } = visualElement;
		addScaleCorrector(defaultScaleCorrectors);
		if (projection) {
			if (layoutGroup.group) layoutGroup.group.add(projection);
			if (switchLayoutGroup && switchLayoutGroup.register && layoutId) switchLayoutGroup.register(projection);
			if (hasTakenAnySnapshot) projection.root.didUpdate();
			projection.addEventListener("animationComplete", () => {
				this.safeToRemove();
			});
			projection.setOptions({
				...projection.options,
				onExitComplete: () => this.safeToRemove()
			});
		}
		globalProjectionState.hasEverUpdated = true;
	}
	getSnapshotBeforeUpdate(prevProps) {
		const { layoutDependency, visualElement, drag: drag$1, isPresent: isPresent$1 } = this.props;
		const { projection } = visualElement;
		if (!projection) return null;
		/**
		* TODO: We use this data in relegate to determine whether to
		* promote a previous element. There's no guarantee its presence data
		* will have updated by this point - if a bug like this arises it will
		* have to be that we markForRelegation and then find a new lead some other way,
		* perhaps in didUpdate
		*/
		projection.isPresent = isPresent$1;
		hasTakenAnySnapshot = true;
		if (drag$1 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0 || prevProps.isPresent !== isPresent$1) projection.willUpdate();
		else this.safeToRemove();
		if (prevProps.isPresent !== isPresent$1) {
			if (isPresent$1) projection.promote();
			else if (!projection.relegate())
 /**
			* If there's another stack member taking over from this one,
			* it's in charge of the exit animation and therefore should
			* be in charge of the safe to remove. Otherwise we call it here.
			*/
			frame.postRender(() => {
				const stack = projection.getStack();
				if (!stack || !stack.members.length) this.safeToRemove();
			});
		}
		return null;
	}
	componentDidUpdate() {
		const { projection } = this.props.visualElement;
		if (projection) {
			projection.root.didUpdate();
			microtask.postRender(() => {
				if (!projection.currentAnimation && projection.isLead()) this.safeToRemove();
			});
		}
	}
	componentWillUnmount() {
		const { visualElement, layoutGroup, switchLayoutGroup: promoteContext } = this.props;
		const { projection } = visualElement;
		hasTakenAnySnapshot = true;
		if (projection) {
			projection.scheduleCheckAfterUnmount();
			if (layoutGroup && layoutGroup.group) layoutGroup.group.remove(projection);
			if (promoteContext && promoteContext.deregister) promoteContext.deregister(projection);
		}
	}
	safeToRemove() {
		const { safeToRemove } = this.props;
		safeToRemove && safeToRemove();
	}
	render() {
		return null;
	}
};
function MeasureLayout(props) {
	const [isPresent$1, safeToRemove] = usePresence();
	const layoutGroup = (0, import_react.useContext)(LayoutGroupContext);
	return (0, import_jsx_runtime.jsx)(MeasureLayoutWithContext, {
		...props,
		layoutGroup,
		switchLayoutGroup: (0, import_react.useContext)(SwitchLayoutGroupContext),
		isPresent: isPresent$1,
		safeToRemove
	});
}
const defaultScaleCorrectors = {
	borderRadius: {
		...correctBorderRadius,
		applyTo: [
			"borderTopLeftRadius",
			"borderTopRightRadius",
			"borderBottomLeftRadius",
			"borderBottomRightRadius"
		]
	},
	borderTopLeftRadius: correctBorderRadius,
	borderTopRightRadius: correctBorderRadius,
	borderBottomLeftRadius: correctBorderRadius,
	borderBottomRightRadius: correctBorderRadius,
	boxShadow: correctBoxShadow
};

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/animation/animate/single-value.mjs
function animateSingleValue(value, keyframes$2, options$1) {
	const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
	motionValue$1.start(animateMotionValue("", motionValue$1, keyframes$2, options$1));
	return motionValue$1.animation;
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs
const compareByDepth = (a, b) => a.depth - b.depth;

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs
var FlatTree = class {
	constructor() {
		this.children = [];
		this.isDirty = false;
	}
	add(child) {
		addUniqueItem(this.children, child);
		this.isDirty = true;
	}
	remove(child) {
		removeItem(this.children, child);
		this.isDirty = true;
	}
	forEach(callback) {
		this.isDirty && this.children.sort(compareByDepth);
		this.isDirty = false;
		this.children.forEach(callback);
	}
};

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/utils/delay.mjs
/**
* Timeout defined in ms
*/
function delay(callback, timeout) {
	const start$1 = time.now();
	const checkElapsed = ({ timestamp }) => {
		const elapsed = timestamp - start$1;
		if (elapsed >= timeout) {
			cancelFrame(checkElapsed);
			callback(elapsed - timeout);
		}
	};
	frame.setup(checkElapsed, true);
	return () => cancelFrame(checkElapsed);
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs
const borders = [
	"TopLeft",
	"TopRight",
	"BottomLeft",
	"BottomRight"
];
const numBorders = borders.length;
const asNumber = (value) => typeof value === "string" ? parseFloat(value) : value;
const isPx = (value) => typeof value === "number" || px.test(value);
function mixValues(target, follow, lead, progress$1, shouldCrossfadeOpacity, isOnlyMember) {
	if (shouldCrossfadeOpacity) {
		target.opacity = mixNumber(0, lead.opacity ?? 1, easeCrossfadeIn(progress$1));
		target.opacityExit = mixNumber(follow.opacity ?? 1, 0, easeCrossfadeOut(progress$1));
	} else if (isOnlyMember) target.opacity = mixNumber(follow.opacity ?? 1, lead.opacity ?? 1, progress$1);
	/**
	* Mix border radius
	*/
	for (let i = 0; i < numBorders; i++) {
		const borderLabel = `border${borders[i]}Radius`;
		let followRadius = getRadius(follow, borderLabel);
		let leadRadius = getRadius(lead, borderLabel);
		if (followRadius === void 0 && leadRadius === void 0) continue;
		followRadius || (followRadius = 0);
		leadRadius || (leadRadius = 0);
		const canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
		if (canMix) {
			target[borderLabel] = Math.max(mixNumber(asNumber(followRadius), asNumber(leadRadius), progress$1), 0);
			if (percent.test(leadRadius) || percent.test(followRadius)) target[borderLabel] += "%";
		} else target[borderLabel] = leadRadius;
	}
	/**
	* Mix rotation
	*/
	if (follow.rotate || lead.rotate) target.rotate = mixNumber(follow.rotate || 0, lead.rotate || 0, progress$1);
}
function getRadius(values, radiusName) {
	return values[radiusName] !== void 0 ? values[radiusName] : values.borderRadius;
}
const easeCrossfadeIn = /* @__PURE__ */ compress(0, .5, circOut);
const easeCrossfadeOut = /* @__PURE__ */ compress(.5, .95, noop);
function compress(min$1, max$1, easing) {
	return (p) => {
		if (p < min$1) return 0;
		if (p > max$1) return 1;
		return easing(progress(min$1, max$1, p));
	};
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/projection/geometry/copy.mjs
/**
* Reset an axis to the provided origin box.
*
* This is a mutative operation.
*/
function copyAxisInto(axis, originAxis) {
	axis.min = originAxis.min;
	axis.max = originAxis.max;
}
/**
* Reset a box to the provided origin box.
*
* This is a mutative operation.
*/
function copyBoxInto(box, originBox) {
	copyAxisInto(box.x, originBox.x);
	copyAxisInto(box.y, originBox.y);
}
/**
* Reset a delta to the provided origin box.
*
* This is a mutative operation.
*/
function copyAxisDeltaInto(delta, originDelta) {
	delta.translate = originDelta.translate;
	delta.scale = originDelta.scale;
	delta.originPoint = originDelta.originPoint;
	delta.origin = originDelta.origin;
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs
/**
* Remove a delta from a point. This is essentially the steps of applyPointDelta in reverse
*/
function removePointDelta(point, translate, scale$1, originPoint, boxScale) {
	point -= translate;
	point = scalePoint(point, 1 / scale$1, originPoint);
	if (boxScale !== void 0) point = scalePoint(point, 1 / boxScale, originPoint);
	return point;
}
/**
* Remove a delta from an axis. This is essentially the steps of applyAxisDelta in reverse
*/
function removeAxisDelta(axis, translate = 0, scale$1 = 1, origin = .5, boxScale, originAxis = axis, sourceAxis = axis) {
	if (percent.test(translate)) {
		translate = parseFloat(translate);
		const relativeProgress = mixNumber(sourceAxis.min, sourceAxis.max, translate / 100);
		translate = relativeProgress - sourceAxis.min;
	}
	if (typeof translate !== "number") return;
	let originPoint = mixNumber(originAxis.min, originAxis.max, origin);
	if (axis === originAxis) originPoint -= translate;
	axis.min = removePointDelta(axis.min, translate, scale$1, originPoint, boxScale);
	axis.max = removePointDelta(axis.max, translate, scale$1, originPoint, boxScale);
}
/**
* Remove a transforms from an axis. This is essentially the steps of applyAxisTransforms in reverse
* and acts as a bridge between motion values and removeAxisDelta
*/
function removeAxisTransforms(axis, transforms$1, [key, scaleKey, originKey], origin, sourceAxis) {
	removeAxisDelta(axis, transforms$1[key], transforms$1[scaleKey], transforms$1[originKey], transforms$1.scale, origin, sourceAxis);
}
/**
* The names of the motion values we want to apply as translation, scale and origin.
*/
const xKeys = [
	"x",
	"scaleX",
	"originX"
];
const yKeys = [
	"y",
	"scaleY",
	"originY"
];
/**
* Remove a transforms from an box. This is essentially the steps of applyAxisBox in reverse
* and acts as a bridge between motion values and removeAxisDelta
*/
function removeBoxTransforms(box, transforms$1, originBox, sourceBox) {
	removeAxisTransforms(box.x, transforms$1, xKeys, originBox ? originBox.x : void 0, sourceBox ? sourceBox.x : void 0);
	removeAxisTransforms(box.y, transforms$1, yKeys, originBox ? originBox.y : void 0, sourceBox ? sourceBox.y : void 0);
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/projection/geometry/utils.mjs
function isAxisDeltaZero(delta) {
	return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
	return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function axisEquals(a, b) {
	return a.min === b.min && a.max === b.max;
}
function boxEquals(a, b) {
	return axisEquals(a.x, b.x) && axisEquals(a.y, b.y);
}
function axisEqualsRounded(a, b) {
	return Math.round(a.min) === Math.round(b.min) && Math.round(a.max) === Math.round(b.max);
}
function boxEqualsRounded(a, b) {
	return axisEqualsRounded(a.x, b.x) && axisEqualsRounded(a.y, b.y);
}
function aspectRatio(box) {
	return calcLength(box.x) / calcLength(box.y);
}
function axisDeltaEquals(a, b) {
	return a.translate === b.translate && a.scale === b.scale && a.originPoint === b.originPoint;
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/projection/shared/stack.mjs
var NodeStack = class {
	constructor() {
		this.members = [];
	}
	add(node) {
		addUniqueItem(this.members, node);
		node.scheduleRender();
	}
	remove(node) {
		removeItem(this.members, node);
		if (node === this.prevLead) this.prevLead = void 0;
		if (node === this.lead) {
			const prevLead = this.members[this.members.length - 1];
			if (prevLead) this.promote(prevLead);
		}
	}
	relegate(node) {
		const indexOfNode = this.members.findIndex((member) => node === member);
		if (indexOfNode === 0) return false;
		/**
		* Find the next projection node that is present
		*/
		let prevLead;
		for (let i = indexOfNode; i >= 0; i--) {
			const member = this.members[i];
			if (member.isPresent !== false) {
				prevLead = member;
				break;
			}
		}
		if (prevLead) {
			this.promote(prevLead);
			return true;
		} else return false;
	}
	promote(node, preserveFollowOpacity) {
		const prevLead = this.lead;
		if (node === prevLead) return;
		this.prevLead = prevLead;
		this.lead = node;
		node.show();
		if (prevLead) {
			prevLead.instance && prevLead.scheduleRender();
			node.scheduleRender();
			node.resumeFrom = prevLead;
			if (preserveFollowOpacity) node.resumeFrom.preserveOpacity = true;
			if (prevLead.snapshot) {
				node.snapshot = prevLead.snapshot;
				node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
			}
			if (node.root && node.root.isUpdating) node.isLayoutDirty = true;
			const { crossfade } = node.options;
			if (crossfade === false) prevLead.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((node) => {
			const { options: options$1, resumingFrom } = node;
			options$1.onExitComplete && options$1.onExitComplete();
			if (resumingFrom) resumingFrom.options.onExitComplete && resumingFrom.options.onExitComplete();
		});
	}
	scheduleRender() {
		this.members.forEach((node) => {
			node.instance && node.scheduleRender(false);
		});
	}
	/**
	* Clear any leads that have been removed this render to prevent them from being
	* used in future animations and to prevent memory leaks
	*/
	removeLeadSnapshot() {
		if (this.lead && this.lead.snapshot) this.lead.snapshot = void 0;
	}
};

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/projection/styles/transform.mjs
function buildProjectionTransform(delta, treeScale, latestTransform) {
	let transform = "";
	/**
	* The translations we use to calculate are always relative to the viewport coordinate space.
	* But when we apply scales, we also scale the coordinate space of an element and its children.
	* For instance if we have a treeScale (the culmination of all parent scales) of 0.5 and we need
	* to move an element 100 pixels, we actually need to move it 200 in within that scaled space.
	*/
	const xTranslate = delta.x.translate / treeScale.x;
	const yTranslate = delta.y.translate / treeScale.y;
	const zTranslate = latestTransform?.z || 0;
	if (xTranslate || yTranslate || zTranslate) transform = `translate3d(${xTranslate}px, ${yTranslate}px, ${zTranslate}px) `;
	/**
	* Apply scale correction for the tree transform.
	* This will apply scale to the screen-orientated axes.
	*/
	if (treeScale.x !== 1 || treeScale.y !== 1) transform += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
	if (latestTransform) {
		const { transformPerspective, rotate: rotate$1, rotateX, rotateY, skewX, skewY } = latestTransform;
		if (transformPerspective) transform = `perspective(${transformPerspective}px) ${transform}`;
		if (rotate$1) transform += `rotate(${rotate$1}deg) `;
		if (rotateX) transform += `rotateX(${rotateX}deg) `;
		if (rotateY) transform += `rotateY(${rotateY}deg) `;
		if (skewX) transform += `skewX(${skewX}deg) `;
		if (skewY) transform += `skewY(${skewY}deg) `;
	}
	/**
	* Apply scale to match the size of the element to the size we want it.
	* This will apply scale to the element-orientated axes.
	*/
	const elementScaleX = delta.x.scale * treeScale.x;
	const elementScaleY = delta.y.scale * treeScale.y;
	if (elementScaleX !== 1 || elementScaleY !== 1) transform += `scale(${elementScaleX}, ${elementScaleY})`;
	return transform || "none";
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs
const metrics = {
	nodes: 0,
	calculatedTargetDeltas: 0,
	calculatedProjections: 0
};
const transformAxes = [
	"",
	"X",
	"Y",
	"Z"
];
/**
* We use 1000 as the animation target as 0-1000 maps better to pixels than 0-1
* which has a noticeable difference in spring animations
*/
const animationTarget = 1e3;
let id = 0;
function resetDistortingTransform(key, visualElement, values, sharedAnimationValues) {
	const { latestValues } = visualElement;
	if (latestValues[key]) {
		values[key] = latestValues[key];
		visualElement.setStaticValue(key, 0);
		if (sharedAnimationValues) sharedAnimationValues[key] = 0;
	}
}
function cancelTreeOptimisedTransformAnimations(projectionNode) {
	projectionNode.hasCheckedOptimisedAppear = true;
	if (projectionNode.root === projectionNode) return;
	const { visualElement } = projectionNode.options;
	if (!visualElement) return;
	const appearId = getOptimisedAppearId(visualElement);
	if (window.MotionHasOptimisedAnimation(appearId, "transform")) {
		const { layout: layout$1, layoutId } = projectionNode.options;
		window.MotionCancelOptimisedAnimation(appearId, "transform", frame, !(layout$1 || layoutId));
	}
	const { parent } = projectionNode;
	if (parent && !parent.hasCheckedOptimisedAppear) cancelTreeOptimisedTransformAnimations(parent);
}
function createProjectionNode({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform }) {
	return class ProjectionNode {
		constructor(latestValues = {}, parent = defaultParent?.()) {
			/**
			* A unique ID generated for every projection node.
			*/
			this.id = id++;
			/**
			* An id that represents a unique session instigated by startUpdate.
			*/
			this.animationId = 0;
			this.animationCommitId = 0;
			/**
			* A Set containing all this component's children. This is used to iterate
			* through the children.
			*
			* TODO: This could be faster to iterate as a flat array stored on the root node.
			*/
			this.children = /* @__PURE__ */ new Set();
			/**
			* Options for the node. We use this to configure what kind of layout animations
			* we should perform (if any).
			*/
			this.options = {};
			/**
			* We use this to detect when its safe to shut down part of a projection tree.
			* We have to keep projecting children for scale correction and relative projection
			* until all their parents stop performing layout animations.
			*/
			this.isTreeAnimating = false;
			this.isAnimationBlocked = false;
			/**
			* Flag to true if we think this layout has been changed. We can't always know this,
			* currently we set it to true every time a component renders, or if it has a layoutDependency
			* if that has changed between renders. Additionally, components can be grouped by LayoutGroup
			* and if one node is dirtied, they all are.
			*/
			this.isLayoutDirty = false;
			/**
			* Flag to true if we think the projection calculations for this node needs
			* recalculating as a result of an updated transform or layout animation.
			*/
			this.isProjectionDirty = false;
			/**
			* Flag to true if the layout *or* transform has changed. This then gets propagated
			* throughout the projection tree, forcing any element below to recalculate on the next frame.
			*/
			this.isSharedProjectionDirty = false;
			/**
			* Flag transform dirty. This gets propagated throughout the whole tree but is only
			* respected by shared nodes.
			*/
			this.isTransformDirty = false;
			/**
			* Block layout updates for instant layout transitions throughout the tree.
			*/
			this.updateManuallyBlocked = false;
			this.updateBlockedByResize = false;
			/**
			* Set to true between the start of the first `willUpdate` call and the end of the `didUpdate`
			* call.
			*/
			this.isUpdating = false;
			/**
			* If this is an SVG element we currently disable projection transforms
			*/
			this.isSVG = false;
			/**
			* Flag to true (during promotion) if a node doing an instant layout transition needs to reset
			* its projection styles.
			*/
			this.needsReset = false;
			/**
			* Flags whether this node should have its transform reset prior to measuring.
			*/
			this.shouldResetTransform = false;
			/**
			* Store whether this node has been checked for optimised appear animations. As
			* effects fire bottom-up, and we want to look up the tree for appear animations,
			* this makes sure we only check each path once, stopping at nodes that
			* have already been checked.
			*/
			this.hasCheckedOptimisedAppear = false;
			/**
			* An object representing the calculated contextual/accumulated/tree scale.
			* This will be used to scale calculcated projection transforms, as these are
			* calculated in screen-space but need to be scaled for elements to layoutly
			* make it to their calculated destinations.
			*
			* TODO: Lazy-init
			*/
			this.treeScale = {
				x: 1,
				y: 1
			};
			/**
			*
			*/
			this.eventHandlers = /* @__PURE__ */ new Map();
			this.hasTreeAnimated = false;
			this.updateScheduled = false;
			this.scheduleUpdate = () => this.update();
			this.projectionUpdateScheduled = false;
			this.checkUpdateFailed = () => {
				if (this.isUpdating) {
					this.isUpdating = false;
					this.clearAllSnapshots();
				}
			};
			/**
			* This is a multi-step process as shared nodes might be of different depths. Nodes
			* are sorted by depth order, so we need to resolve the entire tree before moving to
			* the next step.
			*/
			this.updateProjection = () => {
				this.projectionUpdateScheduled = false;
				/**
				* Reset debug counts. Manually resetting rather than creating a new
				* object each frame.
				*/
				if (statsBuffer.value) metrics.nodes = metrics.calculatedTargetDeltas = metrics.calculatedProjections = 0;
				this.nodes.forEach(propagateDirtyNodes);
				this.nodes.forEach(resolveTargetDelta);
				this.nodes.forEach(calcProjection);
				this.nodes.forEach(cleanDirtyNodes);
				if (statsBuffer.addProjectionMetrics) statsBuffer.addProjectionMetrics(metrics);
			};
			/**
			* Frame calculations
			*/
			this.resolvedRelativeTargetAt = 0;
			this.hasProjected = false;
			this.isVisible = true;
			this.animationProgress = 0;
			/**
			* Shared layout
			*/
			this.sharedNodes = /* @__PURE__ */ new Map();
			this.latestValues = latestValues;
			this.root = parent ? parent.root || parent : this;
			this.path = parent ? [...parent.path, parent] : [];
			this.parent = parent;
			this.depth = parent ? parent.depth + 1 : 0;
			for (let i = 0; i < this.path.length; i++) this.path[i].shouldResetTransform = true;
			if (this.root === this) this.nodes = new FlatTree();
		}
		addEventListener(name, handler) {
			if (!this.eventHandlers.has(name)) this.eventHandlers.set(name, new SubscriptionManager());
			return this.eventHandlers.get(name).add(handler);
		}
		notifyListeners(name, ...args) {
			const subscriptionManager = this.eventHandlers.get(name);
			subscriptionManager && subscriptionManager.notify(...args);
		}
		hasListeners(name) {
			return this.eventHandlers.has(name);
		}
		/**
		* Lifecycles
		*/
		mount(instance) {
			if (this.instance) return;
			this.isSVG = isSVGElement(instance) && !isSVGSVGElement(instance);
			this.instance = instance;
			const { layoutId, layout: layout$1, visualElement } = this.options;
			if (visualElement && !visualElement.current) visualElement.mount(instance);
			this.root.nodes.add(this);
			this.parent && this.parent.children.add(this);
			if (this.root.hasTreeAnimated && (layout$1 || layoutId)) this.isLayoutDirty = true;
			if (attachResizeListener) {
				let cancelDelay;
				let innerWidth = 0;
				const resizeUnblockUpdate = () => this.root.updateBlockedByResize = false;
				frame.read(() => {
					innerWidth = window.innerWidth;
				});
				attachResizeListener(instance, () => {
					const newInnerWidth = window.innerWidth;
					if (newInnerWidth === innerWidth) return;
					innerWidth = newInnerWidth;
					this.root.updateBlockedByResize = true;
					cancelDelay && cancelDelay();
					cancelDelay = delay(resizeUnblockUpdate, 250);
					if (globalProjectionState.hasAnimatedSinceResize) {
						globalProjectionState.hasAnimatedSinceResize = false;
						this.nodes.forEach(finishAnimation);
					}
				});
			}
			if (layoutId) this.root.registerSharedNode(layoutId, this);
			if (this.options.animate !== false && visualElement && (layoutId || layout$1)) this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeLayoutChanged, layout: newLayout }) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0;
					this.relativeTarget = void 0;
					return;
				}
				const layoutTransition = this.options.transition || visualElement.getDefaultTransition() || defaultLayoutTransition;
				const { onLayoutAnimationStart, onLayoutAnimationComplete } = visualElement.getProps();
				/**
				* The target layout of the element might stay the same,
				* but its position relative to its parent has changed.
				*/
				const hasTargetChanged = !this.targetLayout || !boxEqualsRounded(this.targetLayout, newLayout);
				/**
				* If the layout hasn't seemed to have changed, it might be that the
				* element is visually in the same place in the document but its position
				* relative to its parent has indeed changed. So here we check for that.
				*/
				const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeLayoutChanged;
				if (this.options.layoutRoot || this.resumeFrom || hasOnlyRelativeTargetChanged || hasLayoutChanged && (hasTargetChanged || !this.currentAnimation)) {
					if (this.resumeFrom) {
						this.resumingFrom = this.resumeFrom;
						this.resumingFrom.resumingFrom = void 0;
					}
					const animationOptions = {
						...getValueTransition(layoutTransition, "layout"),
						onPlay: onLayoutAnimationStart,
						onComplete: onLayoutAnimationComplete
					};
					if (visualElement.shouldReduceMotion || this.options.layoutRoot) {
						animationOptions.delay = 0;
						animationOptions.type = false;
					}
					this.startAnimation(animationOptions);
					/**
					* Set animation origin after starting animation to avoid layout jump
					* caused by stopping previous layout animation
					*/
					this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
				} else {
					/**
					* If the layout hasn't changed and we have an animation that hasn't started yet,
					* finish it immediately. Otherwise it will be animating from a location
					* that was probably never commited to screen and look like a jumpy box.
					*/
					if (!hasLayoutChanged) finishAnimation(this);
					if (this.isLead() && this.options.onExitComplete) this.options.onExitComplete();
				}
				this.targetLayout = newLayout;
			});
		}
		unmount() {
			this.options.layoutId && this.willUpdate();
			this.root.nodes.remove(this);
			const stack = this.getStack();
			stack && stack.remove(this);
			this.parent && this.parent.children.delete(this);
			this.instance = void 0;
			this.eventHandlers.clear();
			cancelFrame(this.updateProjection);
		}
		blockUpdate() {
			this.updateManuallyBlocked = true;
		}
		unblockUpdate() {
			this.updateManuallyBlocked = false;
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize;
		}
		isTreeAnimationBlocked() {
			return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
		}
		startUpdate() {
			if (this.isUpdateBlocked()) return;
			this.isUpdating = true;
			this.nodes && this.nodes.forEach(resetSkewAndRotation);
			this.animationId++;
		}
		getTransformTemplate() {
			const { visualElement } = this.options;
			return visualElement && visualElement.getProps().transformTemplate;
		}
		willUpdate(shouldNotifyListeners = true) {
			this.root.hasTreeAnimated = true;
			if (this.root.isUpdateBlocked()) {
				this.options.onExitComplete && this.options.onExitComplete();
				return;
			}
			/**
			* If we're running optimised appear animations then these must be
			* cancelled before measuring the DOM. This is so we can measure
			* the true layout of the element rather than the WAAPI animation
			* which will be unaffected by the resetSkewAndRotate step.
			*
			* Note: This is a DOM write. Worst case scenario is this is sandwiched
			* between other snapshot reads which will cause unnecessary style recalculations.
			* This has to happen here though, as we don't yet know which nodes will need
			* snapshots in startUpdate(), but we only want to cancel optimised animations
			* if a layout animation measurement is actually going to be affected by them.
			*/
			if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear) cancelTreeOptimisedTransformAnimations(this);
			!this.root.isUpdating && this.root.startUpdate();
			if (this.isLayoutDirty) return;
			this.isLayoutDirty = true;
			for (let i = 0; i < this.path.length; i++) {
				const node = this.path[i];
				node.shouldResetTransform = true;
				node.updateScroll("snapshot");
				if (node.options.layoutRoot) node.willUpdate(false);
			}
			const { layoutId, layout: layout$1 } = this.options;
			if (layoutId === void 0 && !layout$1) return;
			const transformTemplate = this.getTransformTemplate();
			this.prevTransformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
			this.updateSnapshot();
			shouldNotifyListeners && this.notifyListeners("willUpdate");
		}
		update() {
			this.updateScheduled = false;
			const updateWasBlocked = this.isUpdateBlocked();
			if (updateWasBlocked) {
				this.unblockUpdate();
				this.clearAllSnapshots();
				this.nodes.forEach(clearMeasurements);
				return;
			}
			/**
			* If this is a repeat of didUpdate then ignore the animation.
			*/
			if (this.animationId <= this.animationCommitId) {
				this.nodes.forEach(clearIsLayoutDirty);
				return;
			}
			this.animationCommitId = this.animationId;
			if (!this.isUpdating) this.nodes.forEach(clearIsLayoutDirty);
			else {
				this.isUpdating = false;
				/**
				* Write
				*/
				this.nodes.forEach(resetTransformStyle);
				/**
				* Read ==================
				*/
				this.nodes.forEach(updateLayout);
				/**
				* Write
				*/
				this.nodes.forEach(notifyLayoutUpdate);
			}
			this.clearAllSnapshots();
			/**
			* Manually flush any pending updates. Ideally
			* we could leave this to the following requestAnimationFrame but this seems
			* to leave a flash of incorrectly styled content.
			*/
			const now$1 = time.now();
			frameData.delta = clamp(0, 1e3 / 60, now$1 - frameData.timestamp);
			frameData.timestamp = now$1;
			frameData.isProcessing = true;
			frameSteps.update.process(frameData);
			frameSteps.preRender.process(frameData);
			frameSteps.render.process(frameData);
			frameData.isProcessing = false;
		}
		didUpdate() {
			if (!this.updateScheduled) {
				this.updateScheduled = true;
				microtask.read(this.scheduleUpdate);
			}
		}
		clearAllSnapshots() {
			this.nodes.forEach(clearSnapshot);
			this.sharedNodes.forEach(removeLeadSnapshots);
		}
		scheduleUpdateProjection() {
			if (!this.projectionUpdateScheduled) {
				this.projectionUpdateScheduled = true;
				frame.preRender(this.updateProjection, false, true);
			}
		}
		scheduleCheckAfterUnmount() {
			/**
			* If the unmounting node is in a layoutGroup and did trigger a willUpdate,
			* we manually call didUpdate to give a chance to the siblings to animate.
			* Otherwise, cleanup all snapshots to prevents future nodes from reusing them.
			*/
			frame.postRender(() => {
				if (this.isLayoutDirty) this.root.didUpdate();
				else this.root.checkUpdateFailed();
			});
		}
		/**
		* Update measurements
		*/
		updateSnapshot() {
			if (this.snapshot || !this.instance) return;
			this.snapshot = this.measure();
			if (this.snapshot && !calcLength(this.snapshot.measuredBox.x) && !calcLength(this.snapshot.measuredBox.y)) this.snapshot = void 0;
		}
		updateLayout() {
			if (!this.instance) return;
			this.updateScroll();
			if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) return;
			/**
			* When a node is mounted, it simply resumes from the prevLead's
			* snapshot instead of taking a new one, but the ancestors scroll
			* might have updated while the prevLead is unmounted. We need to
			* update the scroll again to make sure the layout we measure is
			* up to date.
			*/
			if (this.resumeFrom && !this.resumeFrom.instance) for (let i = 0; i < this.path.length; i++) {
				const node = this.path[i];
				node.updateScroll();
			}
			const prevLayout = this.layout;
			this.layout = this.measure(false);
			this.layoutCorrected = createBox();
			this.isLayoutDirty = false;
			this.projectionDelta = void 0;
			this.notifyListeners("measure", this.layout.layoutBox);
			const { visualElement } = this.options;
			visualElement && visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : void 0);
		}
		updateScroll(phase = "measure") {
			let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
			if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === phase) needsMeasurement = false;
			if (needsMeasurement && this.instance) {
				const isRoot = checkIsScrollRoot(this.instance);
				this.scroll = {
					animationId: this.root.animationId,
					phase,
					isRoot,
					offset: measureScroll(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : isRoot
				};
			}
		}
		resetTransform() {
			if (!resetTransform) return;
			const isResetRequested = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
			const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
			const transformTemplate = this.getTransformTemplate();
			const transformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
			const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
			if (isResetRequested && this.instance && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
				resetTransform(this.instance, transformTemplateValue);
				this.shouldResetTransform = false;
				this.scheduleRender();
			}
		}
		measure(removeTransform = true) {
			const pageBox = this.measurePageBox();
			let layoutBox = this.removeElementScroll(pageBox);
			/**
			* Measurements taken during the pre-render stage
			* still have transforms applied so we remove them
			* via calculation.
			*/
			if (removeTransform) layoutBox = this.removeTransform(layoutBox);
			roundBox(layoutBox);
			return {
				animationId: this.root.animationId,
				measuredBox: pageBox,
				layoutBox,
				latestValues: {},
				source: this.id
			};
		}
		measurePageBox() {
			const { visualElement } = this.options;
			if (!visualElement) return createBox();
			const box = visualElement.measureViewportBox();
			const wasInScrollRoot = this.scroll?.wasRoot || this.path.some(checkNodeWasScrollRoot);
			if (!wasInScrollRoot) {
				const { scroll } = this.root;
				if (scroll) {
					translateAxis(box.x, scroll.offset.x);
					translateAxis(box.y, scroll.offset.y);
				}
			}
			return box;
		}
		removeElementScroll(box) {
			const boxWithoutScroll = createBox();
			copyBoxInto(boxWithoutScroll, box);
			if (this.scroll?.wasRoot) return boxWithoutScroll;
			/**
			* Performance TODO: Keep a cumulative scroll offset down the tree
			* rather than loop back up the path.
			*/
			for (let i = 0; i < this.path.length; i++) {
				const node = this.path[i];
				const { scroll, options: options$1 } = node;
				if (node !== this.root && scroll && options$1.layoutScroll) {
					/**
					* If this is a new scroll root, we want to remove all previous scrolls
					* from the viewport box.
					*/
					if (scroll.wasRoot) copyBoxInto(boxWithoutScroll, box);
					translateAxis(boxWithoutScroll.x, scroll.offset.x);
					translateAxis(boxWithoutScroll.y, scroll.offset.y);
				}
			}
			return boxWithoutScroll;
		}
		applyTransform(box, transformOnly = false) {
			const withTransforms = createBox();
			copyBoxInto(withTransforms, box);
			for (let i = 0; i < this.path.length; i++) {
				const node = this.path[i];
				if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) transformBox(withTransforms, {
					x: -node.scroll.offset.x,
					y: -node.scroll.offset.y
				});
				if (!hasTransform(node.latestValues)) continue;
				transformBox(withTransforms, node.latestValues);
			}
			if (hasTransform(this.latestValues)) transformBox(withTransforms, this.latestValues);
			return withTransforms;
		}
		removeTransform(box) {
			const boxWithoutTransform = createBox();
			copyBoxInto(boxWithoutTransform, box);
			for (let i = 0; i < this.path.length; i++) {
				const node = this.path[i];
				if (!node.instance) continue;
				if (!hasTransform(node.latestValues)) continue;
				hasScale(node.latestValues) && node.updateSnapshot();
				const sourceBox = createBox();
				const nodeBox = node.measurePageBox();
				copyBoxInto(sourceBox, nodeBox);
				removeBoxTransforms(boxWithoutTransform, node.latestValues, node.snapshot ? node.snapshot.layoutBox : void 0, sourceBox);
			}
			if (hasTransform(this.latestValues)) removeBoxTransforms(boxWithoutTransform, this.latestValues);
			return boxWithoutTransform;
		}
		setTargetDelta(delta) {
			this.targetDelta = delta;
			this.root.scheduleUpdateProjection();
			this.isProjectionDirty = true;
		}
		setOptions(options$1) {
			this.options = {
				...this.options,
				...options$1,
				crossfade: options$1.crossfade !== void 0 ? options$1.crossfade : true
			};
		}
		clearMeasurements() {
			this.scroll = void 0;
			this.layout = void 0;
			this.snapshot = void 0;
			this.prevTransformTemplateValue = void 0;
			this.targetDelta = void 0;
			this.target = void 0;
			this.isLayoutDirty = false;
		}
		forceRelativeParentToResolveTarget() {
			if (!this.relativeParent) return;
			/**
			* If the parent target isn't up-to-date, force it to update.
			* This is an unfortunate de-optimisation as it means any updating relative
			* projection will cause all the relative parents to recalculate back
			* up the tree.
			*/
			if (this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp) this.relativeParent.resolveTargetDelta(true);
		}
		resolveTargetDelta(forceRecalculation = false) {
			/**
			* Once the dirty status of nodes has been spread through the tree, we also
			* need to check if we have a shared node of a different depth that has itself
			* been dirtied.
			*/
			const lead = this.getLead();
			this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
			this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
			this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
			const isShared = Boolean(this.resumingFrom) || this !== lead;
			/**
			* We don't use transform for this step of processing so we don't
			* need to check whether any nodes have changed transform.
			*/
			const canSkip = !(forceRecalculation || isShared && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize);
			if (canSkip) return;
			const { layout: layout$1, layoutId } = this.options;
			/**
			* If we have no layout, we can't perform projection, so early return
			*/
			if (!this.layout || !(layout$1 || layoutId)) return;
			this.resolvedRelativeTargetAt = frameData.timestamp;
			/**
			* If we don't have a targetDelta but do have a layout, we can attempt to resolve
			* a relativeParent. This will allow a component to perform scale correction
			* even if no animation has started.
			*/
			if (!this.targetDelta && !this.relativeTarget) {
				const relativeParent = this.getClosestProjectingParent();
				if (relativeParent && relativeParent.layout && this.animationProgress !== 1) {
					this.relativeParent = relativeParent;
					this.forceRelativeParentToResolveTarget();
					this.relativeTarget = createBox();
					this.relativeTargetOrigin = createBox();
					calcRelativePosition(this.relativeTargetOrigin, this.layout.layoutBox, relativeParent.layout.layoutBox);
					copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
				} else this.relativeParent = this.relativeTarget = void 0;
			}
			/**
			* If we have no relative target or no target delta our target isn't valid
			* for this frame.
			*/
			if (!this.relativeTarget && !this.targetDelta) return;
			/**
			* Lazy-init target data structure
			*/
			if (!this.target) {
				this.target = createBox();
				this.targetWithTransforms = createBox();
			}
			/**
			* If we've got a relative box for this component, resolve it into a target relative to the parent.
			*/
			if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
				this.forceRelativeParentToResolveTarget();
				calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target);
			} else if (this.targetDelta) {
				if (Boolean(this.resumingFrom)) this.target = this.applyTransform(this.layout.layoutBox);
				else copyBoxInto(this.target, this.layout.layoutBox);
				applyBoxDelta(this.target, this.targetDelta);
			} else
 /**
			* If no target, use own layout as target
			*/
			copyBoxInto(this.target, this.layout.layoutBox);
			/**
			* If we've been told to attempt to resolve a relative target, do so.
			*/
			if (this.attemptToResolveRelativeTarget) {
				this.attemptToResolveRelativeTarget = false;
				const relativeParent = this.getClosestProjectingParent();
				if (relativeParent && Boolean(relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !relativeParent.options.layoutScroll && relativeParent.target && this.animationProgress !== 1) {
					this.relativeParent = relativeParent;
					this.forceRelativeParentToResolveTarget();
					this.relativeTarget = createBox();
					this.relativeTargetOrigin = createBox();
					calcRelativePosition(this.relativeTargetOrigin, this.target, relativeParent.target);
					copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
				} else this.relativeParent = this.relativeTarget = void 0;
			}
			/**
			* Increase debug counter for resolved target deltas
			*/
			if (statsBuffer.value) metrics.calculatedTargetDeltas++;
		}
		getClosestProjectingParent() {
			if (!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues)) return void 0;
			if (this.parent.isProjecting()) return this.parent;
			else return this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
		}
		calcProjection() {
			const lead = this.getLead();
			const isShared = Boolean(this.resumingFrom) || this !== lead;
			let canSkip = true;
			/**
			* If this is a normal layout animation and neither this node nor its nearest projecting
			* is dirty then we can't skip.
			*/
			if (this.isProjectionDirty || this.parent?.isProjectionDirty) canSkip = false;
			/**
			* If this is a shared layout animation and this node's shared projection is dirty then
			* we can't skip.
			*/
			if (isShared && (this.isSharedProjectionDirty || this.isTransformDirty)) canSkip = false;
			/**
			* If we have resolved the target this frame we must recalculate the
			* projection to ensure it visually represents the internal calculations.
			*/
			if (this.resolvedRelativeTargetAt === frameData.timestamp) canSkip = false;
			if (canSkip) return;
			const { layout: layout$1, layoutId } = this.options;
			/**
			* If this section of the tree isn't animating we can
			* delete our target sources for the following frame.
			*/
			this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation);
			if (!this.isTreeAnimating) this.targetDelta = this.relativeTarget = void 0;
			if (!this.layout || !(layout$1 || layoutId)) return;
			/**
			* Reset the corrected box with the latest values from box, as we're then going
			* to perform mutative operations on it.
			*/
			copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
			/**
			* Record previous tree scales before updating.
			*/
			const prevTreeScaleX = this.treeScale.x;
			const prevTreeScaleY = this.treeScale.y;
			/**
			* Apply all the parent deltas to this box to produce the corrected box. This
			* is the layout box, as it will appear on screen as a result of the transforms of its parents.
			*/
			applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared);
			/**
			* If this layer needs to perform scale correction but doesn't have a target,
			* use the layout as the target.
			*/
			if (lead.layout && !lead.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
				lead.target = lead.layout.layoutBox;
				lead.targetWithTransforms = createBox();
			}
			const { target } = lead;
			if (!target) {
				/**
				* If we don't have a target to project into, but we were previously
				* projecting, we want to remove the stored transform and schedule
				* a render to ensure the elements reflect the removed transform.
				*/
				if (this.prevProjectionDelta) {
					this.createProjectionDeltas();
					this.scheduleRender();
				}
				return;
			}
			if (!this.projectionDelta || !this.prevProjectionDelta) this.createProjectionDeltas();
			else {
				copyAxisDeltaInto(this.prevProjectionDelta.x, this.projectionDelta.x);
				copyAxisDeltaInto(this.prevProjectionDelta.y, this.projectionDelta.y);
			}
			/**
			* Update the delta between the corrected box and the target box before user-set transforms were applied.
			* This will allow us to calculate the corrected borderRadius and boxShadow to compensate
			* for our layout reprojection, but still allow them to be scaled correctly by the user.
			* It might be that to simplify this we may want to accept that user-set scale is also corrected
			* and we wouldn't have to keep and calc both deltas, OR we could support a user setting
			* to allow people to choose whether these styles are corrected based on just the
			* layout reprojection or the final bounding box.
			*/
			calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
			if (this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY || !axisDeltaEquals(this.projectionDelta.x, this.prevProjectionDelta.x) || !axisDeltaEquals(this.projectionDelta.y, this.prevProjectionDelta.y)) {
				this.hasProjected = true;
				this.scheduleRender();
				this.notifyListeners("projectionUpdate", target);
			}
			/**
			* Increase debug counter for recalculated projections
			*/
			if (statsBuffer.value) metrics.calculatedProjections++;
		}
		hide() {
			this.isVisible = false;
		}
		show() {
			this.isVisible = true;
		}
		scheduleRender(notifyAll = true) {
			this.options.visualElement?.scheduleRender();
			if (notifyAll) {
				const stack = this.getStack();
				stack && stack.scheduleRender();
			}
			if (this.resumingFrom && !this.resumingFrom.instance) this.resumingFrom = void 0;
		}
		createProjectionDeltas() {
			this.prevProjectionDelta = createDelta();
			this.projectionDelta = createDelta();
			this.projectionDeltaWithTransform = createDelta();
		}
		setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false) {
			const snapshot = this.snapshot;
			const snapshotLatestValues = snapshot ? snapshot.latestValues : {};
			const mixedValues = { ...this.latestValues };
			const targetDelta = createDelta();
			if (!this.relativeParent || !this.relativeParent.options.layoutRoot) this.relativeTarget = this.relativeTargetOrigin = void 0;
			this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
			const relativeLayout = createBox();
			const snapshotSource = snapshot ? snapshot.source : void 0;
			const layoutSource = this.layout ? this.layout.source : void 0;
			const isSharedLayoutAnimation = snapshotSource !== layoutSource;
			const stack = this.getStack();
			const isOnlyMember = !stack || stack.members.length <= 1;
			const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
			this.animationProgress = 0;
			let prevRelativeTarget;
			this.mixTargetDelta = (latest) => {
				const progress$1 = latest / 1e3;
				mixAxisDelta(targetDelta.x, delta.x, progress$1);
				mixAxisDelta(targetDelta.y, delta.y, progress$1);
				this.setTargetDelta(targetDelta);
				if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
					calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox);
					mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress$1);
					/**
					* If this is an unchanged relative target we can consider the
					* projection not dirty.
					*/
					if (prevRelativeTarget && boxEquals(this.relativeTarget, prevRelativeTarget)) this.isProjectionDirty = false;
					if (!prevRelativeTarget) prevRelativeTarget = createBox();
					copyBoxInto(prevRelativeTarget, this.relativeTarget);
				}
				if (isSharedLayoutAnimation) {
					this.animationValues = mixedValues;
					mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress$1, shouldCrossfadeOpacity, isOnlyMember);
				}
				this.root.scheduleUpdateProjection();
				this.scheduleRender();
				this.animationProgress = progress$1;
			};
			this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(options$1) {
			this.notifyListeners("animationStart");
			this.currentAnimation?.stop();
			this.resumingFrom?.currentAnimation?.stop();
			if (this.pendingAnimation) {
				cancelFrame(this.pendingAnimation);
				this.pendingAnimation = void 0;
			}
			/**
			* Start the animation in the next frame to have a frame with progress 0,
			* where the target is the same as when the animation started, so we can
			* calculate the relative positions correctly for instant transitions.
			*/
			this.pendingAnimation = frame.update(() => {
				globalProjectionState.hasAnimatedSinceResize = true;
				activeAnimations.layout++;
				this.motionValue || (this.motionValue = motionValue(0));
				this.currentAnimation = animateSingleValue(this.motionValue, [0, 1e3], {
					...options$1,
					velocity: 0,
					isSync: true,
					onUpdate: (latest) => {
						this.mixTargetDelta(latest);
						options$1.onUpdate && options$1.onUpdate(latest);
					},
					onStop: () => {
						activeAnimations.layout--;
					},
					onComplete: () => {
						activeAnimations.layout--;
						options$1.onComplete && options$1.onComplete();
						this.completeAnimation();
					}
				});
				if (this.resumingFrom) this.resumingFrom.currentAnimation = this.currentAnimation;
				this.pendingAnimation = void 0;
			});
		}
		completeAnimation() {
			if (this.resumingFrom) {
				this.resumingFrom.currentAnimation = void 0;
				this.resumingFrom.preserveOpacity = void 0;
			}
			const stack = this.getStack();
			stack && stack.exitAnimationComplete();
			this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
			this.notifyListeners("animationComplete");
		}
		finishAnimation() {
			if (this.currentAnimation) {
				this.mixTargetDelta && this.mixTargetDelta(animationTarget);
				this.currentAnimation.stop();
			}
			this.completeAnimation();
		}
		applyTransformsToTarget() {
			const lead = this.getLead();
			let { targetWithTransforms, target, layout: layout$1, latestValues } = lead;
			if (!targetWithTransforms || !target || !layout$1) return;
			/**
			* If we're only animating position, and this element isn't the lead element,
			* then instead of projecting into the lead box we instead want to calculate
			* a new target that aligns the two boxes but maintains the layout shape.
			*/
			if (this !== lead && this.layout && layout$1 && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout$1.layoutBox)) {
				target = this.target || createBox();
				const xLength = calcLength(this.layout.layoutBox.x);
				target.x.min = lead.target.x.min;
				target.x.max = target.x.min + xLength;
				const yLength = calcLength(this.layout.layoutBox.y);
				target.y.min = lead.target.y.min;
				target.y.max = target.y.min + yLength;
			}
			copyBoxInto(targetWithTransforms, target);
			/**
			* Apply the latest user-set transforms to the targetBox to produce the targetBoxFinal.
			* This is the final box that we will then project into by calculating a transform delta and
			* applying it to the corrected box.
			*/
			transformBox(targetWithTransforms, latestValues);
			/**
			* Update the delta between the corrected box and the final target box, after
			* user-set transforms are applied to it. This will be used by the renderer to
			* create a transform style that will reproject the element from its layout layout
			* into the desired bounding box.
			*/
			calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
		}
		registerSharedNode(layoutId, node) {
			if (!this.sharedNodes.has(layoutId)) this.sharedNodes.set(layoutId, new NodeStack());
			const stack = this.sharedNodes.get(layoutId);
			stack.add(node);
			const config = node.options.initialPromotionConfig;
			node.promote({
				transition: config ? config.transition : void 0,
				preserveFollowOpacity: config && config.shouldPreserveFollowOpacity ? config.shouldPreserveFollowOpacity(node) : void 0
			});
		}
		isLead() {
			const stack = this.getStack();
			return stack ? stack.lead === this : true;
		}
		getLead() {
			const { layoutId } = this.options;
			return layoutId ? this.getStack()?.lead || this : this;
		}
		getPrevLead() {
			const { layoutId } = this.options;
			return layoutId ? this.getStack()?.prevLead : void 0;
		}
		getStack() {
			const { layoutId } = this.options;
			if (layoutId) return this.root.sharedNodes.get(layoutId);
		}
		promote({ needsReset, transition, preserveFollowOpacity } = {}) {
			const stack = this.getStack();
			if (stack) stack.promote(this, preserveFollowOpacity);
			if (needsReset) {
				this.projectionDelta = void 0;
				this.needsReset = true;
			}
			if (transition) this.setOptions({ transition });
		}
		relegate() {
			const stack = this.getStack();
			if (stack) return stack.relegate(this);
			else return false;
		}
		resetSkewAndRotation() {
			const { visualElement } = this.options;
			if (!visualElement) return;
			let hasDistortingTransform = false;
			/**
			* An unrolled check for rotation values. Most elements don't have any rotation and
			* skipping the nested loop and new object creation is 50% faster.
			*/
			const { latestValues } = visualElement;
			if (latestValues.z || latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.rotateZ || latestValues.skewX || latestValues.skewY) hasDistortingTransform = true;
			if (!hasDistortingTransform) return;
			const resetValues = {};
			if (latestValues.z) resetDistortingTransform("z", visualElement, resetValues, this.animationValues);
			for (let i = 0; i < transformAxes.length; i++) {
				resetDistortingTransform(`rotate${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
				resetDistortingTransform(`skew${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
			}
			visualElement.render();
			for (const key in resetValues) {
				visualElement.setStaticValue(key, resetValues[key]);
				if (this.animationValues) this.animationValues[key] = resetValues[key];
			}
			visualElement.scheduleRender();
		}
		applyProjectionStyles(targetStyle, styleProp) {
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) {
				targetStyle.visibility = "hidden";
				return;
			}
			const transformTemplate = this.getTransformTemplate();
			if (this.needsReset) {
				this.needsReset = false;
				targetStyle.visibility = "";
				targetStyle.opacity = "";
				targetStyle.pointerEvents = resolveMotionValue(styleProp?.pointerEvents) || "";
				targetStyle.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
				return;
			}
			const lead = this.getLead();
			if (!this.projectionDelta || !this.layout || !lead.target) {
				if (this.options.layoutId) {
					targetStyle.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1;
					targetStyle.pointerEvents = resolveMotionValue(styleProp?.pointerEvents) || "";
				}
				if (this.hasProjected && !hasTransform(this.latestValues)) {
					targetStyle.transform = transformTemplate ? transformTemplate({}, "") : "none";
					this.hasProjected = false;
				}
				return;
			}
			targetStyle.visibility = "";
			const valuesToRender = lead.animationValues || lead.latestValues;
			this.applyTransformsToTarget();
			let transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
			if (transformTemplate) transform = transformTemplate(valuesToRender, transform);
			targetStyle.transform = transform;
			const { x, y } = this.projectionDelta;
			targetStyle.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
			if (lead.animationValues)
 /**
			* If the lead component is animating, assign this either the entering/leaving
			* opacity
			*/
			targetStyle.opacity = lead === this ? valuesToRender.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
			else
 /**
			* Or we're not animating at all, set the lead component to its layout
			* opacity and other components to hidden.
			*/
			targetStyle.opacity = lead === this ? valuesToRender.opacity !== void 0 ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== void 0 ? valuesToRender.opacityExit : 0;
			/**
			* Apply scale correction
			*/
			for (const key in scaleCorrectors) {
				if (valuesToRender[key] === void 0) continue;
				const { correct, applyTo, isCSSVariable } = scaleCorrectors[key];
				/**
				* Only apply scale correction to the value if we have an
				* active projection transform. Otherwise these values become
				* vulnerable to distortion if the element changes size without
				* a corresponding layout animation.
				*/
				const corrected = transform === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
				if (applyTo) {
					const num = applyTo.length;
					for (let i = 0; i < num; i++) targetStyle[applyTo[i]] = corrected;
				} else if (isCSSVariable) this.options.visualElement.renderState.vars[key] = corrected;
				else targetStyle[key] = corrected;
			}
			/**
			* Disable pointer events on follow components. This is to ensure
			* that if a follow component covers a lead component it doesn't block
			* pointer events on the lead.
			*/
			if (this.options.layoutId) targetStyle.pointerEvents = lead === this ? resolveMotionValue(styleProp?.pointerEvents) || "" : "none";
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((node) => node.currentAnimation?.stop());
			this.root.nodes.forEach(clearMeasurements);
			this.root.sharedNodes.clear();
		}
	};
}
function updateLayout(node) {
	node.updateLayout();
}
function notifyLayoutUpdate(node) {
	const snapshot = node.resumeFrom?.snapshot || node.snapshot;
	if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
		const { layoutBox: layout$1, measuredBox: measuredLayout } = node.layout;
		const { animationType } = node.options;
		const isShared = snapshot.source !== node.layout.source;
		if (animationType === "size") eachAxis((axis) => {
			const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
			const length = calcLength(axisSnapshot);
			axisSnapshot.min = layout$1[axis].min;
			axisSnapshot.max = axisSnapshot.min + length;
		});
		else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout$1)) eachAxis((axis) => {
			const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
			const length = calcLength(layout$1[axis]);
			axisSnapshot.max = axisSnapshot.min + length;
			/**
			* Ensure relative target gets resized and rerendererd
			*/
			if (node.relativeTarget && !node.currentAnimation) {
				node.isProjectionDirty = true;
				node.relativeTarget[axis].max = node.relativeTarget[axis].min + length;
			}
		});
		const layoutDelta = createDelta();
		calcBoxDelta(layoutDelta, layout$1, snapshot.layoutBox);
		const visualDelta = createDelta();
		if (isShared) calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
		else calcBoxDelta(visualDelta, layout$1, snapshot.layoutBox);
		const hasLayoutChanged = !isDeltaZero(layoutDelta);
		let hasRelativeLayoutChanged = false;
		if (!node.resumeFrom) {
			const relativeParent = node.getClosestProjectingParent();
			/**
			* If the relativeParent is itself resuming from a different element then
			* the relative snapshot is not relavent
			*/
			if (relativeParent && !relativeParent.resumeFrom) {
				const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
				if (parentSnapshot && parentLayout) {
					const relativeSnapshot = createBox();
					calcRelativePosition(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox);
					const relativeLayout = createBox();
					calcRelativePosition(relativeLayout, layout$1, parentLayout.layoutBox);
					if (!boxEqualsRounded(relativeSnapshot, relativeLayout)) hasRelativeLayoutChanged = true;
					if (relativeParent.options.layoutRoot) {
						node.relativeTarget = relativeLayout;
						node.relativeTargetOrigin = relativeSnapshot;
						node.relativeParent = relativeParent;
					}
				}
			}
		}
		node.notifyListeners("didUpdate", {
			layout: layout$1,
			snapshot,
			delta: visualDelta,
			layoutDelta,
			hasLayoutChanged,
			hasRelativeLayoutChanged
		});
	} else if (node.isLead()) {
		const { onExitComplete } = node.options;
		onExitComplete && onExitComplete();
	}
	/**
	* Clearing transition
	* TODO: Investigate why this transition is being passed in as {type: false } from Framer
	* and why we need it at all
	*/
	node.options.transition = void 0;
}
function propagateDirtyNodes(node) {
	/**
	* Increase debug counter for nodes encountered this frame
	*/
	if (statsBuffer.value) metrics.nodes++;
	if (!node.parent) return;
	/**
	* If this node isn't projecting, propagate isProjectionDirty. It will have
	* no performance impact but it will allow the next child that *is* projecting
	* but *isn't* dirty to just check its parent to see if *any* ancestor needs
	* correcting.
	*/
	if (!node.isProjecting()) node.isProjectionDirty = node.parent.isProjectionDirty;
	/**
	* Propagate isSharedProjectionDirty and isTransformDirty
	* throughout the whole tree. A future revision can take another look at
	* this but for safety we still recalcualte shared nodes.
	*/
	node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty || node.parent.isProjectionDirty || node.parent.isSharedProjectionDirty));
	node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
}
function cleanDirtyNodes(node) {
	node.isProjectionDirty = node.isSharedProjectionDirty = node.isTransformDirty = false;
}
function clearSnapshot(node) {
	node.clearSnapshot();
}
function clearMeasurements(node) {
	node.clearMeasurements();
}
function clearIsLayoutDirty(node) {
	node.isLayoutDirty = false;
}
function resetTransformStyle(node) {
	const { visualElement } = node.options;
	if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) visualElement.notify("BeforeLayoutMeasure");
	node.resetTransform();
}
function finishAnimation(node) {
	node.finishAnimation();
	node.targetDelta = node.relativeTarget = node.target = void 0;
	node.isProjectionDirty = true;
}
function resolveTargetDelta(node) {
	node.resolveTargetDelta();
}
function calcProjection(node) {
	node.calcProjection();
}
function resetSkewAndRotation(node) {
	node.resetSkewAndRotation();
}
function removeLeadSnapshots(stack) {
	stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p) {
	output.translate = mixNumber(delta.translate, 0, p);
	output.scale = mixNumber(delta.scale, 1, p);
	output.origin = delta.origin;
	output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p) {
	output.min = mixNumber(from.min, to.min, p);
	output.max = mixNumber(from.max, to.max, p);
}
function mixBox(output, from, to, p) {
	mixAxis(output.x, from.x, to.x, p);
	mixAxis(output.y, from.y, to.y, p);
}
function hasOpacityCrossfade(node) {
	return node.animationValues && node.animationValues.opacityExit !== void 0;
}
const defaultLayoutTransition = {
	duration: .45,
	ease: [
		.4,
		0,
		.1,
		1
	]
};
const userAgentContains = (string) => typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(string);
/**
* Measured bounding boxes must be rounded in Safari and
* left untouched in Chrome, otherwise non-integer layouts within scaled-up elements
* can appear to jump.
*/
const roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : noop;
function roundAxis(axis) {
	axis.min = roundPoint(axis.min);
	axis.max = roundPoint(axis.max);
}
function roundBox(box) {
	roundAxis(box.x);
	roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout$1) {
	return animationType === "position" || animationType === "preserve-aspect" && !isNear(aspectRatio(snapshot), aspectRatio(layout$1), .2);
}
function checkNodeWasScrollRoot(node) {
	return node !== node.root && node.scroll?.wasRoot;
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs
const DocumentProjectionNode = createProjectionNode({
	attachResizeListener: (ref, notify) => addDomEvent(ref, "resize", notify),
	measureScroll: () => ({
		x: document.documentElement.scrollLeft || document.body.scrollLeft,
		y: document.documentElement.scrollTop || document.body.scrollTop
	}),
	checkIsScrollRoot: () => true
});

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs
const rootProjectionNode = { current: void 0 };
const HTMLProjectionNode = createProjectionNode({
	measureScroll: (instance) => ({
		x: instance.scrollLeft,
		y: instance.scrollTop
	}),
	defaultParent: () => {
		if (!rootProjectionNode.current) {
			const documentNode = new DocumentProjectionNode({});
			documentNode.mount(window);
			documentNode.setOptions({ layoutScroll: true });
			rootProjectionNode.current = documentNode;
		}
		return rootProjectionNode.current;
	},
	resetTransform: (instance, value) => {
		instance.style.transform = value !== void 0 ? value : "none";
	},
	checkIsScrollRoot: (instance) => Boolean(window.getComputedStyle(instance).position === "fixed")
});

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/motion/features/drag.mjs
const drag = {
	pan: { Feature: PanGesture },
	drag: {
		Feature: DragGesture,
		ProjectionNode: HTMLProjectionNode,
		MeasureLayout
	}
};

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/gestures/hover.mjs
function handleHoverEvent(node, event, lifecycle) {
	const { props } = node;
	if (node.animationState && props.whileHover) node.animationState.setActive("whileHover", lifecycle === "Start");
	const eventName = "onHover" + lifecycle;
	const callback = props[eventName];
	if (callback) frame.postRender(() => callback(event, extractEventInfo(event)));
}
var HoverGesture = class extends Feature {
	mount() {
		const { current } = this.node;
		if (!current) return;
		this.unmount = hover(current, (_element, startEvent) => {
			handleHoverEvent(this.node, startEvent, "Start");
			return (endEvent) => handleHoverEvent(this.node, endEvent, "End");
		});
	}
	unmount() {}
};

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/gestures/focus.mjs
var FocusGesture = class extends Feature {
	constructor() {
		super(...arguments);
		this.isActive = false;
	}
	onFocus() {
		let isFocusVisible$1 = false;
		/**
		* If this element doesn't match focus-visible then don't
		* apply whileHover. But, if matches throws that focus-visible
		* is not a valid selector then in that browser outline styles will be applied
		* to the element by default and we want to match that behaviour with whileFocus.
		*/
		try {
			isFocusVisible$1 = this.node.current.matches(":focus-visible");
		} catch (e) {
			isFocusVisible$1 = true;
		}
		if (!isFocusVisible$1 || !this.node.animationState) return;
		this.node.animationState.setActive("whileFocus", true);
		this.isActive = true;
	}
	onBlur() {
		if (!this.isActive || !this.node.animationState) return;
		this.node.animationState.setActive("whileFocus", false);
		this.isActive = false;
	}
	mount() {
		this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
	}
	unmount() {}
};

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/gestures/press.mjs
function handlePressEvent(node, event, lifecycle) {
	const { props } = node;
	if (node.current instanceof HTMLButtonElement && node.current.disabled) return;
	if (node.animationState && props.whileTap) node.animationState.setActive("whileTap", lifecycle === "Start");
	const eventName = "onTap" + (lifecycle === "End" ? "" : lifecycle);
	const callback = props[eventName];
	if (callback) frame.postRender(() => callback(event, extractEventInfo(event)));
}
var PressGesture = class extends Feature {
	mount() {
		const { current } = this.node;
		if (!current) return;
		this.unmount = press(current, (_element, startEvent) => {
			handlePressEvent(this.node, startEvent, "Start");
			return (endEvent, { success }) => handlePressEvent(this.node, endEvent, success ? "End" : "Cancel");
		}, { useGlobalTarget: this.node.props.globalTapTarget });
	}
	unmount() {}
};

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs
/**
* Map an IntersectionHandler callback to an element. We only ever make one handler for one
* element, so even though these handlers might all be triggered by different
* observers, we can keep them in the same map.
*/
const observerCallbacks = /* @__PURE__ */ new WeakMap();
/**
* Multiple observers can be created for multiple element/document roots. Each with
* different settings. So here we store dictionaries of observers to each root,
* using serialised settings (threshold/margin) as lookup keys.
*/
const observers = /* @__PURE__ */ new WeakMap();
const fireObserverCallback = (entry) => {
	const callback = observerCallbacks.get(entry.target);
	callback && callback(entry);
};
const fireAllObserverCallbacks = (entries) => {
	entries.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root,...options$1 }) {
	const lookupRoot = root || document;
	/**
	* If we don't have an observer lookup map for this root, create one.
	*/
	if (!observers.has(lookupRoot)) observers.set(lookupRoot, {});
	const rootObservers = observers.get(lookupRoot);
	const key = JSON.stringify(options$1);
	/**
	* If we don't have an observer for this combination of root and settings,
	* create one.
	*/
	if (!rootObservers[key]) rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, {
		root,
		...options$1
	});
	return rootObservers[key];
}
function observeIntersection(element, options$1, callback) {
	const rootInteresectionObserver = initIntersectionObserver(options$1);
	observerCallbacks.set(element, callback);
	rootInteresectionObserver.observe(element);
	return () => {
		observerCallbacks.delete(element);
		rootInteresectionObserver.unobserve(element);
	};
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
const thresholdNames = {
	some: 0,
	all: 1
};
var InViewFeature = class extends Feature {
	constructor() {
		super(...arguments);
		this.hasEnteredView = false;
		this.isInView = false;
	}
	startObserver() {
		this.unmount();
		const { viewport: viewport$1 = {} } = this.node.getProps();
		const { root, margin: rootMargin, amount = "some", once } = viewport$1;
		const options$1 = {
			root: root ? root.current : void 0,
			rootMargin,
			threshold: typeof amount === "number" ? amount : thresholdNames[amount]
		};
		const onIntersectionUpdate = (entry) => {
			const { isIntersecting } = entry;
			/**
			* If there's been no change in the viewport state, early return.
			*/
			if (this.isInView === isIntersecting) return;
			this.isInView = isIntersecting;
			/**
			* Handle hasEnteredView. If this is only meant to run once, and
			* element isn't visible, early return. Otherwise set hasEnteredView to true.
			*/
			if (once && !isIntersecting && this.hasEnteredView) return;
			else if (isIntersecting) this.hasEnteredView = true;
			if (this.node.animationState) this.node.animationState.setActive("whileInView", isIntersecting);
			/**
			* Use the latest committed props rather than the ones in scope
			* when this observer is created
			*/
			const { onViewportEnter, onViewportLeave } = this.node.getProps();
			const callback = isIntersecting ? onViewportEnter : onViewportLeave;
			callback && callback(entry);
		};
		return observeIntersection(this.node.current, options$1, onIntersectionUpdate);
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver === "undefined") return;
		const { props, prevProps } = this.node;
		const hasOptionsChanged = [
			"amount",
			"margin",
			"root"
		].some(hasViewportOptionChanged(props, prevProps));
		if (hasOptionsChanged) this.startObserver();
	}
	unmount() {}
};
function hasViewportOptionChanged({ viewport: viewport$1 = {} }, { viewport: prevViewport = {} } = {}) {
	return (name) => viewport$1[name] !== prevViewport[name];
}

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/motion/features/gestures.mjs
const gestureAnimations = {
	inView: { Feature: InViewFeature },
	tap: { Feature: PressGesture },
	focus: { Feature: FocusGesture },
	hover: { Feature: HoverGesture }
};

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/motion/features/layout.mjs
const layout = { layout: {
	ProjectionNode: HTMLProjectionNode,
	MeasureLayout
} };

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/components/motion/feature-bundle.mjs
const featureBundle = {
	...animations,
	...gestureAnimations,
	...drag,
	...layout
};

//#endregion
//#region node_modules/.pnpm/framer-motion@12.23.12_@emotion+is-prop-valid@1.3.1_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs
const motion = /* @__PURE__ */ createMotionProxy(featureBundle, createDomVisualElement);

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/toast/toast.utils.mjs
const findById = (arr, id$2) => arr.find((toast) => toast.id === id$2);
function findToast(toasts, id$2) {
	const position = getToastPosition(toasts, id$2);
	const index = position ? toasts[position].findIndex((toast) => toast.id === id$2) : -1;
	return {
		position,
		index
	};
}
function getToastPosition(toasts, id$2) {
	for (const [position, values] of Object.entries(toasts)) if (findById(values, id$2)) return position;
}
function getToastStyle(position) {
	const isRighty = position.includes("right");
	const isLefty = position.includes("left");
	let alignItems = "center";
	if (isRighty) alignItems = "flex-end";
	if (isLefty) alignItems = "flex-start";
	return {
		display: "flex",
		flexDirection: "column",
		alignItems
	};
}
function getToastListStyle(position) {
	const isTopOrBottom = position === "top" || position === "bottom";
	const margin = isTopOrBottom ? "0 auto" : void 0;
	const top$1 = position.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0;
	const bottom$1 = position.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0;
	const right$1 = !position.includes("left") ? "env(safe-area-inset-right, 0px)" : void 0;
	const left$1 = !position.includes("right") ? "env(safe-area-inset-left, 0px)" : void 0;
	return {
		position: "fixed",
		zIndex: "var(--toast-z-index, 5500)",
		pointerEvents: "none",
		display: "flex",
		flexDirection: "column",
		margin,
		top: top$1,
		bottom: bottom$1,
		right: right$1,
		left: left$1
	};
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/system/should-forward-prop.mjs
const allPropNames = /* @__PURE__ */ new Set([
	...propNames,
	"textStyle",
	"layerStyle",
	"apply",
	"noOfLines",
	"focusBorderColor",
	"errorBorderColor",
	"as",
	"__css",
	"css",
	"sx"
]);
const validHTMLProps = /* @__PURE__ */ new Set([
	"htmlWidth",
	"htmlHeight",
	"htmlSize",
	"htmlTranslate"
]);
function shouldForwardProp(prop) {
	return (validHTMLProps.has(prop) || !allPropNames.has(prop)) && prop[0] !== "_";
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/system/system.mjs
const emotion_styled = interopDefault(styled$1);
const toCSSObject = ({ baseStyle }) => (props) => {
	const { theme: theme$1, css: cssProp, __css, sx,...restProps } = props;
	const [styleProps] = splitProps(restProps, isStyleProp);
	const finalBaseStyle = runIfFn(baseStyle, props);
	const finalStyles = assignAfter({}, __css, finalBaseStyle, compact(styleProps), sx);
	const computedCSS = css(finalStyles)(props.theme);
	return cssProp ? [computedCSS, cssProp] : computedCSS;
};
function styled(component, options$1) {
	const { baseStyle,...styledOptions } = options$1 ?? {};
	if (!styledOptions.shouldForwardProp) styledOptions.shouldForwardProp = shouldForwardProp;
	const styleObject = toCSSObject({ baseStyle });
	const Component$1 = emotion_styled(component, styledOptions)(styleObject);
	const chakraComponent = (0, import_react.forwardRef)(function ChakraComponent2(props, ref) {
		const { children,...restProps } = props;
		const { colorMode, forced } = useColorMode();
		const dataTheme = forced ? colorMode : void 0;
		return (0, import_react.createElement)(Component$1, {
			ref,
			"data-theme": dataTheme,
			...restProps
		}, children);
	});
	return chakraComponent;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/system/factory.mjs
function factory() {
	const cache = /* @__PURE__ */ new Map();
	return new Proxy(styled, {
		apply(target, thisArg, argArray) {
			return styled(...argArray);
		},
		get(_, element) {
			if (!cache.has(element)) cache.set(element, styled(element));
			return cache.get(element);
		}
	});
}
const chakra = factory();

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/toast/toast.component.mjs
const toastMotionVariants = {
	initial: (props) => {
		const { position } = props;
		const dir = ["top", "bottom"].includes(position) ? "y" : "x";
		let factor = ["top-right", "bottom-right"].includes(position) ? 1 : -1;
		if (position === "bottom") factor = 1;
		return {
			opacity: 0,
			[dir]: factor * 24
		};
	},
	animate: {
		opacity: 1,
		y: 0,
		x: 0,
		scale: 1,
		transition: {
			duration: .4,
			ease: [
				.4,
				0,
				.2,
				1
			]
		}
	},
	exit: {
		opacity: 0,
		scale: .85,
		transition: {
			duration: .2,
			ease: [
				.4,
				0,
				1,
				1
			]
		}
	}
};
const ToastComponent = (0, import_react.memo)((props) => {
	const { id: id$2, message, onCloseComplete, onRequestRemove, requestClose = false, position = "bottom", duration = 5e3, containerStyle, motionVariants = toastMotionVariants, toastSpacing = "0.5rem" } = props;
	const [delay$1, setDelay] = (0, import_react.useState)(duration);
	const isPresent$1 = useIsPresent();
	useUpdateEffect(() => {
		if (!isPresent$1) onCloseComplete?.();
	}, [isPresent$1]);
	useUpdateEffect(() => {
		setDelay(duration);
	}, [duration]);
	const onMouseEnter = () => setDelay(null);
	const onMouseLeave = () => setDelay(duration);
	const close = () => {
		if (isPresent$1) onRequestRemove();
	};
	(0, import_react.useEffect)(() => {
		if (isPresent$1 && requestClose) onRequestRemove();
	}, [
		isPresent$1,
		requestClose,
		onRequestRemove
	]);
	useTimeout(close, delay$1);
	const containerStyles = (0, import_react.useMemo)(() => ({
		pointerEvents: "auto",
		maxWidth: 560,
		minWidth: 300,
		margin: toastSpacing,
		...containerStyle
	}), [containerStyle, toastSpacing]);
	const toastStyle = (0, import_react.useMemo)(() => getToastStyle(position), [position]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		layout: true,
		className: "chakra-toast",
		variants: motionVariants,
		initial: "initial",
		animate: "animate",
		exit: "exit",
		onHoverStart: onMouseEnter,
		onHoverEnd: onMouseLeave,
		custom: { position },
		style: toastStyle,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
			role: "status",
			"aria-atomic": "true",
			className: "chakra-toast__inner",
			__css: containerStyles,
			children: runIfFn(message, {
				id: id$2,
				onClose: close
			})
		})
	});
});
ToastComponent.displayName = "ToastComponent";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/system/forward-ref.mjs
function forwardRef(component) {
	return (0, import_react.forwardRef)(component);
}

//#endregion
//#region node_modules/.pnpm/react-fast-compare@3.2.2/node_modules/react-fast-compare/index.js
var require_react_fast_compare = /* @__PURE__ */ __commonJS({ "node_modules/.pnpm/react-fast-compare@3.2.2/node_modules/react-fast-compare/index.js": ((exports, module) => {
	var hasElementType = typeof Element !== "undefined";
	var hasMap = typeof Map === "function";
	var hasSet = typeof Set === "function";
	var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
	function equal(a, b) {
		if (a === b) return true;
		if (a && b && typeof a == "object" && typeof b == "object") {
			if (a.constructor !== b.constructor) return false;
			var length, i, keys;
			if (Array.isArray(a)) {
				length = a.length;
				if (length != b.length) return false;
				for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;
				return true;
			}
			var it;
			if (hasMap && a instanceof Map && b instanceof Map) {
				if (a.size !== b.size) return false;
				it = a.entries();
				while (!(i = it.next()).done) if (!b.has(i.value[0])) return false;
				it = a.entries();
				while (!(i = it.next()).done) if (!equal(i.value[1], b.get(i.value[0]))) return false;
				return true;
			}
			if (hasSet && a instanceof Set && b instanceof Set) {
				if (a.size !== b.size) return false;
				it = a.entries();
				while (!(i = it.next()).done) if (!b.has(i.value[0])) return false;
				return true;
			}
			if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
				length = a.length;
				if (length != b.length) return false;
				for (i = length; i-- !== 0;) if (a[i] !== b[i]) return false;
				return true;
			}
			if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
			if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === "function" && typeof b.valueOf === "function") return a.valueOf() === b.valueOf();
			if (a.toString !== Object.prototype.toString && typeof a.toString === "function" && typeof b.toString === "function") return a.toString() === b.toString();
			keys = Object.keys(a);
			length = keys.length;
			if (length !== Object.keys(b).length) return false;
			for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
			if (hasElementType && a instanceof Element) return false;
			for (i = length; i-- !== 0;) {
				if ((keys[i] === "_owner" || keys[i] === "__v" || keys[i] === "__o") && a.$$typeof) continue;
				if (!equal(a[keys[i]], b[keys[i]])) return false;
			}
			return true;
		}
		return a !== a && b !== b;
	}
	module.exports = function isEqual$1(a, b) {
		try {
			return equal(a, b);
		} catch (error) {
			if ((error.message || "").match(/stack|recursion/i)) {
				console.warn("react-fast-compare cannot handle circular refs");
				return false;
			}
			throw error;
		}
	};
}) });

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/system/use-theme.mjs
function useTheme() {
	const theme$1 = (0, import_react.useContext)(ThemeContext);
	if (!theme$1) throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");
	return theme$1;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/system/hooks.mjs
function useChakra() {
	const colorModeResult = useColorMode();
	const theme$1 = useTheme();
	return {
		...colorModeResult,
		theme: theme$1
	};
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/system/use-style-config.mjs
var import_react_fast_compare = /* @__PURE__ */ __toESM(require_react_fast_compare(), 1);
function omitReactElements(props) {
	return Object.fromEntries(Object.entries(props).filter(([key, value]) => {
		return value !== void 0 && key !== "children" && !(0, import_react.isValidElement)(value);
	}));
}
function useStyleConfigImpl(themeKey, props = {}) {
	const { styleConfig: styleConfigProp,...rest } = props;
	const { theme: theme$1, colorMode } = useChakra();
	const themeStyleConfig = themeKey ? memoizedGet(theme$1, `components.${themeKey}`) : void 0;
	const styleConfig = styleConfigProp || themeStyleConfig;
	const mergedProps = (0, import_lodash.default)({
		theme: theme$1,
		colorMode
	}, styleConfig?.defaultProps ?? {}, omitReactElements(rest), (obj, src) => !obj ? src : void 0);
	const stylesRef = (0, import_react.useRef)({});
	if (styleConfig) {
		const getStyles$1 = resolveStyleConfig(styleConfig);
		const styles = getStyles$1(mergedProps);
		const isStyleEqual = (0, import_react_fast_compare.default)(stylesRef.current, styles);
		if (!isStyleEqual) stylesRef.current = styles;
	}
	return stylesRef.current;
}
function useStyleConfig(themeKey, props = {}) {
	return useStyleConfigImpl(themeKey, props);
}
function useMultiStyleConfig(themeKey, props = {}) {
	return useStyleConfigImpl(themeKey, props);
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/icon/icon.mjs
const fallbackIcon = {
	path: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		stroke: "currentColor",
		strokeWidth: "1.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				strokeLinecap: "round",
				fill: "none",
				d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				fill: "currentColor",
				strokeLinecap: "round",
				d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				fill: "none",
				strokeMiterlimit: "10",
				cx: "12",
				cy: "12",
				r: "11.25"
			})
		]
	}),
	viewBox: "0 0 24 24"
};
const Icon = forwardRef((props, ref) => {
	const { as: element, viewBox, color: color$1 = "currentColor", focusable = false, children, className, __css,...rest } = props;
	const _className = cx("chakra-icon", className);
	const customStyles = useStyleConfig("Icon", props);
	const styles = {
		w: "1em",
		h: "1em",
		display: "inline-block",
		lineHeight: "1em",
		flexShrink: 0,
		color: color$1,
		...__css,
		...customStyles
	};
	const shared = {
		ref,
		focusable,
		className: _className,
		__css: styles
	};
	const _viewBox = viewBox ?? fallbackIcon.viewBox;
	if (element && typeof element !== "string") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.svg, {
		as: element,
		...shared,
		...rest
	});
	const _path = children ?? fallbackIcon.path;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.svg, {
		verticalAlign: "middle",
		viewBox: _viewBox,
		...shared,
		...rest,
		children: _path
	});
});
Icon.displayName = "Icon";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/alert/alert-icons.mjs
function CheckIcon$1(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
		viewBox: "0 0 24 24",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
		})
	});
}
function InfoIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
		viewBox: "0 0 24 24",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
		})
	});
}
function WarningIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
		viewBox: "0 0 24 24",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
		})
	});
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/spinner/spinner.mjs
const spin = keyframes({
	"0%": { transform: "rotate(0deg)" },
	"100%": { transform: "rotate(360deg)" }
});
const Spinner = forwardRef((props, ref) => {
	const styles = useStyleConfig("Spinner", props);
	const { label = "Loading...", thickness = "2px", speed = "0.45s", emptyColor = "transparent", className,...rest } = omitThemingProps(props);
	const _className = cx("chakra-spinner", className);
	const spinnerStyles = {
		display: "inline-block",
		borderColor: "currentColor",
		borderStyle: "solid",
		borderRadius: "99999px",
		borderWidth: thickness,
		borderBottomColor: emptyColor,
		borderLeftColor: emptyColor,
		animation: `${spin} ${speed} linear infinite`,
		...styles
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
		ref,
		__css: spinnerStyles,
		className: _className,
		...rest,
		children: label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.span, {
			srOnly: true,
			children: label
		})
	});
});
Spinner.displayName = "Spinner";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/alert/alert-context.mjs
const [AlertProvider, useAlertContext] = createContext({
	name: "AlertContext",
	hookName: "useAlertContext",
	providerName: "<Alert />"
});
const [AlertStylesProvider, useAlertStyles] = createContext({
	name: `AlertStylesContext`,
	hookName: `useAlertStyles`,
	providerName: "<Alert />"
});
const STATUSES = {
	info: {
		icon: InfoIcon,
		colorScheme: "blue"
	},
	warning: {
		icon: WarningIcon,
		colorScheme: "orange"
	},
	success: {
		icon: CheckIcon$1,
		colorScheme: "green"
	},
	error: {
		icon: WarningIcon,
		colorScheme: "red"
	},
	loading: {
		icon: Spinner,
		colorScheme: "blue"
	}
};
function getStatusColorScheme(status) {
	return STATUSES[status].colorScheme;
}
function getStatusIcon(status) {
	return STATUSES[status].icon;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/alert/alert.mjs
const Alert = forwardRef(function Alert2(props, ref) {
	const { status = "info", addRole = true,...rest } = omitThemingProps(props);
	const colorScheme = props.colorScheme ?? getStatusColorScheme(status);
	const styles = useMultiStyleConfig("Alert", {
		...props,
		colorScheme
	});
	const alertStyles = defineStyle({
		width: "100%",
		display: "flex",
		alignItems: "center",
		position: "relative",
		overflow: "hidden",
		...styles.container
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertProvider, {
		value: { status },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertStylesProvider, {
			value: styles,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
				"data-status": status,
				role: addRole ? "alert" : void 0,
				ref,
				...rest,
				className: cx("chakra-alert", props.className),
				__css: alertStyles
			})
		})
	});
});
Alert.displayName = "Alert";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/alert/alert-icon.mjs
function AlertIcon(props) {
	const { status } = useAlertContext();
	const BaseIcon = getStatusIcon(status);
	const styles = useAlertStyles();
	const css$2 = status === "loading" ? styles.spinner : styles.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.span, {
		display: "inherit",
		"data-status": status,
		...props,
		className: cx("chakra-alert__icon", props.className),
		__css: css$2,
		children: props.children || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BaseIcon, {
			h: "100%",
			w: "100%"
		})
	});
}
AlertIcon.displayName = "AlertIcon";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/alert/alert-title.mjs
const AlertTitle = forwardRef(function AlertTitle2(props, ref) {
	const styles = useAlertStyles();
	const { status } = useAlertContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
		ref,
		"data-status": status,
		...props,
		className: cx("chakra-alert__title", props.className),
		__css: styles.title
	});
});
AlertTitle.displayName = "AlertTitle";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/alert/alert-description.mjs
const AlertDescription = forwardRef(function AlertDescription2(props, ref) {
	const { status } = useAlertContext();
	const styles = useAlertStyles();
	const descriptionStyles = defineStyle({
		display: "inline",
		...styles.description
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
		ref,
		"data-status": status,
		...props,
		className: cx("chakra-alert__desc", props.className),
		__css: descriptionStyles
	});
});
AlertDescription.displayName = "AlertDescription";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/close-button/close-button.mjs
function CloseIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
		focusable: "false",
		"aria-hidden": true,
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "currentColor",
			d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
		})
	});
}
const CloseButton = forwardRef(function CloseButton2(props, ref) {
	const styles = useStyleConfig("CloseButton", props);
	const { children, isDisabled, __css,...rest } = omitThemingProps(props);
	const baseStyle = {
		outline: 0,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexShrink: 0
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.button, {
		type: "button",
		"aria-label": "Close",
		ref,
		disabled: isDisabled,
		__css: {
			...baseStyle,
			...styles,
			...__css
		},
		...rest,
		children: children || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseIcon, {
			width: "1em",
			height: "1em"
		})
	});
});
CloseButton.displayName = "CloseButton";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/toast/toast.mjs
const Toast = (props) => {
	const { status, variant = "solid", id: id$2, title, isClosable, onClose, description, colorScheme, icon } = props;
	const ids = id$2 ? {
		root: `toast-${id$2}`,
		title: `toast-${id$2}-title`,
		description: `toast-${id$2}-description`
	} : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Alert, {
		addRole: false,
		status,
		variant,
		id: ids?.root,
		alignItems: "start",
		borderRadius: "md",
		boxShadow: "lg",
		paddingEnd: 8,
		textAlign: "start",
		width: "auto",
		colorScheme,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertIcon, { children: icon }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(chakra.div, {
				flex: "1",
				maxWidth: "100%",
				children: [title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertTitle, {
					id: ids?.title,
					children: title
				}), description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDescription, {
					id: ids?.description,
					display: "block",
					children: description
				})]
			}),
			isClosable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseButton, {
				size: "sm",
				onClick: onClose,
				position: "absolute",
				insetEnd: 1,
				top: 1
			})
		]
	});
};
function createRenderToast(options$1 = {}) {
	const { render, toastComponent: ToastComponent$1 = Toast } = options$1;
	const renderToast = (props) => {
		if (typeof render === "function") return render({
			...props,
			...options$1
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastComponent$1, {
			...props,
			...options$1
		});
	};
	return renderToast;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/toast/toast.store.mjs
const initialState = {
	top: [],
	"top-left": [],
	"top-right": [],
	"bottom-left": [],
	bottom: [],
	"bottom-right": []
};
const toastStore = createStore(initialState);
function createStore(initialState2) {
	let state = initialState2;
	const listeners = /* @__PURE__ */ new Set();
	const setState = (setStateFn) => {
		state = setStateFn(state);
		listeners.forEach((l) => l());
	};
	return {
		getState: () => state,
		subscribe: (listener) => {
			listeners.add(listener);
			return () => {
				setState(() => initialState2);
				listeners.delete(listener);
			};
		},
		removeToast: (id$2, position) => {
			setState((prevState) => ({
				...prevState,
				[position]: prevState[position].filter((toast) => toast.id != id$2)
			}));
		},
		notify: (message, options$1) => {
			const toast = createToast(message, options$1);
			const { position, id: id$2 } = toast;
			setState((prevToasts) => {
				const isTop = position.includes("top");
				const toasts = isTop ? [toast, ...prevToasts[position] ?? []] : [...prevToasts[position] ?? [], toast];
				return {
					...prevToasts,
					[position]: toasts
				};
			});
			return id$2;
		},
		update: (id$2, options$1) => {
			if (!id$2) return;
			setState((prevState) => {
				const nextState = { ...prevState };
				const { position, index } = findToast(nextState, id$2);
				if (position && index !== -1) nextState[position][index] = {
					...nextState[position][index],
					...options$1,
					message: createRenderToast(options$1)
				};
				return nextState;
			});
		},
		closeAll: ({ positions } = {}) => {
			setState((prev) => {
				const allPositions = [
					"bottom",
					"bottom-right",
					"bottom-left",
					"top",
					"top-left",
					"top-right"
				];
				const positionsToClose = positions ?? allPositions;
				return positionsToClose.reduce((acc, position) => {
					acc[position] = prev[position].map((toast) => ({
						...toast,
						requestClose: true
					}));
					return acc;
				}, { ...prev });
			});
		},
		close: (id$2) => {
			setState((prevState) => {
				const position = getToastPosition(prevState, id$2);
				if (!position) return prevState;
				return {
					...prevState,
					[position]: prevState[position].map((toast) => {
						if (toast.id == id$2) return {
							...toast,
							requestClose: true
						};
						return toast;
					})
				};
			});
		},
		isActive: (id$2) => Boolean(findToast(toastStore.getState(), id$2).position)
	};
}
let counter = 0;
function createToast(message, options$1 = {}) {
	counter += 1;
	const id$2 = options$1.id ?? counter;
	const position = options$1.position ?? "bottom";
	return {
		id: id$2,
		message,
		position,
		duration: options$1.duration,
		onCloseComplete: options$1.onCloseComplete,
		onRequestRemove: () => toastStore.removeToast(String(id$2), position),
		status: options$1.status,
		requestClose: false,
		containerStyle: options$1.containerStyle
	};
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/portal/portal.mjs
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
const [PortalContextProvider, usePortalContext] = createContext({
	strict: false,
	name: "PortalContext"
});
const PORTAL_CLASSNAME = "chakra-portal";
const PORTAL_SELECTOR = `.chakra-portal`;
const Container = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "chakra-portal-zIndex",
	style: {
		position: "absolute",
		zIndex: props.zIndex,
		top: 0,
		left: 0,
		right: 0
	},
	children: props.children
});
const DefaultPortal = (props) => {
	const { appendToParentPortal, children } = props;
	const [tempNode, setTempNode] = (0, import_react.useState)(null);
	const portal = (0, import_react.useRef)(null);
	const [, forceUpdate] = (0, import_react.useState)({});
	(0, import_react.useEffect)(() => forceUpdate({}), []);
	const parentPortal = usePortalContext();
	const manager = usePortalManager();
	useSafeLayoutEffect(() => {
		if (!tempNode) return;
		const doc = tempNode.ownerDocument;
		const host = appendToParentPortal ? parentPortal ?? doc.body : doc.body;
		if (!host) return;
		portal.current = doc.createElement("div");
		portal.current.className = PORTAL_CLASSNAME;
		host.appendChild(portal.current);
		forceUpdate({});
		const portalNode = portal.current;
		return () => {
			if (host.contains(portalNode)) host.removeChild(portalNode);
		};
	}, [tempNode]);
	const _children = manager?.zIndex ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
		zIndex: manager?.zIndex,
		children
	}) : children;
	return portal.current ? (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalContextProvider, {
		value: portal.current,
		children: _children
	}), portal.current) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { ref: (el) => {
		if (el) setTempNode(el);
	} });
};
const ContainerPortal = (props) => {
	const { children, containerRef, appendToParentPortal } = props;
	const containerEl = containerRef.current;
	const host = containerEl ?? (typeof window !== "undefined" ? document.body : void 0);
	const portal = (0, import_react.useMemo)(() => {
		const node = containerEl?.ownerDocument.createElement("div");
		if (node) node.className = PORTAL_CLASSNAME;
		return node;
	}, [containerEl]);
	const [, forceUpdate] = (0, import_react.useState)({});
	useSafeLayoutEffect(() => forceUpdate({}), []);
	useSafeLayoutEffect(() => {
		if (!portal || !host) return;
		host.appendChild(portal);
		return () => {
			host.removeChild(portal);
		};
	}, [portal, host]);
	if (host && portal) return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalContextProvider, {
		value: appendToParentPortal ? portal : null,
		children
	}), portal);
	return null;
};
function Portal(props) {
	const portalProps = {
		appendToParentPortal: true,
		...props
	};
	const { containerRef,...rest } = portalProps;
	return containerRef ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContainerPortal, {
		containerRef,
		...rest
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultPortal, { ...rest });
}
Portal.className = PORTAL_CLASSNAME;
Portal.selector = PORTAL_SELECTOR;
Portal.displayName = "Portal";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/toast/toast.provider.mjs
const [ToastOptionProvider, useToastOptionContext] = createContext({
	name: `ToastOptionsContext`,
	strict: false
});
const ToastProvider = (props) => {
	const state = (0, import_react.useSyncExternalStore)(toastStore.subscribe, toastStore.getState, toastStore.getState);
	const { motionVariants, component: Component$1 = ToastComponent, portalProps, animatePresenceProps } = props;
	const stateKeys = Object.keys(state);
	const toastList = stateKeys.map((position) => {
		const toasts = state[position];
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "region",
			"aria-live": "polite",
			"aria-label": `Notifications-${position}`,
			id: `chakra-toast-manager-${position}`,
			style: getToastListStyle(position),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				...animatePresenceProps,
				initial: false,
				children: toasts.map((toast) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component$1, {
					motionVariants,
					...toast
				}, toast.id))
			})
		}, position);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
		...portalProps,
		children: toastList
	});
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/provider/create-provider.mjs
const createProvider = (providerTheme) => {
	return function ChakraProvider$1({ children, theme: theme$1 = providerTheme, toastOptions,...restProps }) {
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Provider, {
			theme: theme$1,
			...restProps,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastOptionProvider, {
				value: toastOptions?.defaultOptions,
				children
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastProvider, { ...toastOptions })]
		});
	};
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/chakra-provider.mjs
const ChakraProvider = createProvider(theme);

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/transition/transition-utils.mjs
const TRANSITION_EASINGS = {
	ease: [
		.25,
		.1,
		.25,
		1
	],
	easeIn: [
		.4,
		0,
		1,
		1
	],
	easeOut: [
		0,
		0,
		.2,
		1
	],
	easeInOut: [
		.4,
		0,
		.2,
		1
	]
};
const TRANSITION_DEFAULTS = {
	enter: {
		duration: .2,
		ease: TRANSITION_EASINGS.easeOut
	},
	exit: {
		duration: .1,
		ease: TRANSITION_EASINGS.easeIn
	}
};
const withDelay = {
	enter: (transition, delay$1) => ({
		...transition,
		delay: typeof delay$1 === "number" ? delay$1 : delay$1?.["enter"]
	}),
	exit: (transition, delay$1) => ({
		...transition,
		delay: typeof delay$1 === "number" ? delay$1 : delay$1?.["exit"]
	})
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/box/box.mjs
const Box = chakra("div");
Box.displayName = "Box";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/button/button-context.mjs
const [ButtonGroupProvider, useButtonGroup] = createContext({
	strict: false,
	name: "ButtonGroupContext"
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/button/button-icon.mjs
function ButtonIcon(props) {
	const { children, className,...rest } = props;
	const _children = (0, import_react.isValidElement)(children) ? (0, import_react.cloneElement)(children, {
		"aria-hidden": true,
		focusable: false
	}) : children;
	const _className = cx("chakra-button__icon", className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.span, {
		display: "inline-flex",
		alignSelf: "center",
		flexShrink: 0,
		...rest,
		className: _className,
		children: _children
	});
}
ButtonIcon.displayName = "ButtonIcon";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/button/button-spinner.mjs
function ButtonSpinner(props) {
	const { label, placement, spacing = "0.5rem", children = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, {
		color: "currentColor",
		width: "1em",
		height: "1em"
	}), className, __css,...rest } = props;
	const _className = cx("chakra-button__spinner", className);
	const marginProp = placement === "start" ? "marginEnd" : "marginStart";
	const spinnerStyles = (0, import_react.useMemo)(() => defineStyle({
		display: "flex",
		alignItems: "center",
		position: label ? "relative" : "absolute",
		[marginProp]: label ? spacing : 0,
		fontSize: "1em",
		lineHeight: "normal",
		...__css
	}), [
		__css,
		label,
		marginProp,
		spacing
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
		className: _className,
		...rest,
		__css: spinnerStyles,
		children
	});
}
ButtonSpinner.displayName = "ButtonSpinner";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/button/use-button-type.mjs
function useButtonType(value) {
	const [isButton, setIsButton] = (0, import_react.useState)(!value);
	const refCallback = (0, import_react.useCallback)((node) => {
		if (!node) return;
		setIsButton(node.tagName === "BUTTON");
	}, []);
	const type = isButton ? "button" : void 0;
	return {
		ref: refCallback,
		type
	};
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/button/button.mjs
const Button = forwardRef((props, ref) => {
	const group = useButtonGroup();
	const styles = useStyleConfig("Button", {
		...group,
		...props
	});
	const { isDisabled = group?.isDisabled, isLoading, isActive, children, leftIcon, rightIcon, loadingText, iconSpacing = "0.5rem", type, spinner, spinnerPlacement = "start", className, as, shouldWrapChildren,...rest } = omitThemingProps(props);
	const buttonStyles = (0, import_react.useMemo)(() => {
		const _focus = {
			...styles?.["_focus"],
			zIndex: 1
		};
		return {
			display: "inline-flex",
			appearance: "none",
			alignItems: "center",
			justifyContent: "center",
			userSelect: "none",
			position: "relative",
			whiteSpace: "nowrap",
			verticalAlign: "middle",
			outline: "none",
			...styles,
			...!!group && { _focus }
		};
	}, [styles, group]);
	const { ref: _ref$1, type: defaultType } = useButtonType(as);
	const contentProps = {
		rightIcon,
		leftIcon,
		iconSpacing,
		children,
		shouldWrapChildren
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(chakra.button, {
		disabled: isDisabled || isLoading,
		ref: useMergeRefs$1(ref, _ref$1),
		as,
		type: type ?? defaultType,
		"data-active": dataAttr(isActive),
		"data-loading": dataAttr(isLoading),
		__css: buttonStyles,
		className: cx("chakra-button", className),
		...rest,
		children: [
			isLoading && spinnerPlacement === "start" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonSpinner, {
				className: "chakra-button__spinner--start",
				label: loadingText,
				placement: "start",
				spacing: iconSpacing,
				children: spinner
			}),
			isLoading ? loadingText || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.span, {
				opacity: 0,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonContent, { ...contentProps })
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonContent, { ...contentProps }),
			isLoading && spinnerPlacement === "end" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonSpinner, {
				className: "chakra-button__spinner--end",
				label: loadingText,
				placement: "end",
				spacing: iconSpacing,
				children: spinner
			})
		]
	});
});
Button.displayName = "Button";
function ButtonContent(props) {
	const { leftIcon, rightIcon, children, iconSpacing, shouldWrapChildren } = props;
	if (!shouldWrapChildren) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		leftIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonIcon, {
			marginEnd: iconSpacing,
			children: leftIcon
		}),
		children,
		rightIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonIcon, {
			marginStart: iconSpacing,
			children: rightIcon
		})
	] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		style: { display: "contents" },
		children: [
			leftIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonIcon, {
				marginEnd: iconSpacing,
				children: leftIcon
			}),
			children,
			rightIcon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonIcon, {
				marginStart: iconSpacing,
				children: rightIcon
			})
		]
	});
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/button/button-group.mjs
const attachedStyles = {
	horizontal: {
		"> *:first-of-type:not(:last-of-type)": { borderEndRadius: 0 },
		"> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
		"> *:not(:first-of-type):last-of-type": { borderStartRadius: 0 }
	},
	vertical: {
		"> *:first-of-type:not(:last-of-type)": { borderBottomRadius: 0 },
		"> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
		"> *:not(:first-of-type):last-of-type": { borderTopRadius: 0 }
	}
};
const gapStyles = {
	horizontal: (spacing) => ({ "& > *:not(style) ~ *:not(style)": { marginStart: spacing } }),
	vertical: (spacing) => ({ "& > *:not(style) ~ *:not(style)": { marginTop: spacing } })
};
const ButtonGroup = forwardRef(function ButtonGroup2(props, ref) {
	const { size, colorScheme, variant, className, spacing = "0.5rem", isAttached, isDisabled, orientation = "horizontal",...rest } = props;
	const _className = cx("chakra-button__group", className);
	const context = (0, import_react.useMemo)(() => ({
		size,
		colorScheme,
		variant,
		isDisabled
	}), [
		size,
		colorScheme,
		variant,
		isDisabled
	]);
	let groupStyles = {
		display: "inline-flex",
		...isAttached ? attachedStyles[orientation] : gapStyles[orientation](spacing)
	};
	const isVertical = orientation === "vertical";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ButtonGroupProvider, {
		value: context,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
			ref,
			role: "group",
			__css: groupStyles,
			className: _className,
			"data-attached": isAttached ? "" : void 0,
			"data-orientation": orientation,
			flexDir: isVertical ? "column" : void 0,
			...rest
		})
	});
});
ButtonGroup.displayName = "ButtonGroup";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/checkbox/checkbox-context.mjs
const [CheckboxGroupProvider, useCheckboxGroupContext] = createContext({
	name: "CheckboxGroupContext",
	strict: false
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/checkbox/checkbox-icon.mjs
function CheckIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.svg, {
		width: "1.2em",
		viewBox: "0 0 12 10",
		style: {
			fill: "none",
			strokeWidth: 2,
			stroke: "currentColor",
			strokeDasharray: 16
		},
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", { points: "1.5 6 4.5 9 10.5 1" })
	});
}
function IndeterminateIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.svg, {
		width: "1.2em",
		viewBox: "0 0 24 24",
		style: {
			stroke: "currentColor",
			strokeWidth: 4
		},
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: "21",
			x2: "3",
			y1: "12",
			y2: "12"
		})
	});
}
function CheckboxIcon(props) {
	const { isIndeterminate, isChecked,...rest } = props;
	const BaseIcon = isIndeterminate ? IndeterminateIcon : CheckIcon;
	return isChecked || isIndeterminate ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
		style: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			height: "100%"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BaseIcon, { ...rest })
	}) : null;
}

//#endregion
//#region node_modules/.pnpm/@zag-js+dom-query@0.31.1/node_modules/@zag-js/dom-query/dist/index.mjs
var isDom = () => typeof document !== "undefined";

//#endregion
//#region node_modules/.pnpm/@zag-js+focus-visible@0.31.1/node_modules/@zag-js/focus-visible/dist/index.mjs
var hasSetup = false;
var modality = null;
var hasEventBeforeFocus = false;
var hasBlurredWindowRecently = false;
var handlers = /* @__PURE__ */ new Set();
function trigger(modality2, event) {
	handlers.forEach((handler) => handler(modality2, event));
}
var isMac = typeof window !== "undefined" && window.navigator != null ? /^Mac/.test(window.navigator.platform) : false;
function isValidKey(e) {
	return !(e.metaKey || !isMac && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function onKeyboardEvent(event) {
	hasEventBeforeFocus = true;
	if (isValidKey(event)) {
		modality = "keyboard";
		trigger("keyboard", event);
	}
}
function onPointerEvent(event) {
	modality = "pointer";
	if (event.type === "mousedown" || event.type === "pointerdown") {
		hasEventBeforeFocus = true;
		const target = event.composedPath ? event.composedPath()[0] : event.target;
		let matches = false;
		try {
			matches = target.matches(":focus-visible");
		} catch {}
		if (matches) return;
		trigger("pointer", event);
	}
}
function isVirtualClick(event) {
	if (event.mozInputSource === 0 && event.isTrusted) return true;
	return event.detail === 0 && !event.pointerType;
}
function onClickEvent(e) {
	if (isVirtualClick(e)) {
		hasEventBeforeFocus = true;
		modality = "virtual";
	}
}
function onWindowFocus$1(event) {
	if (event.target === window || event.target === document) return;
	if (event.target instanceof Element && event.target.hasAttribute("tabindex")) return;
	if (!hasEventBeforeFocus && !hasBlurredWindowRecently) {
		modality = "virtual";
		trigger("virtual", event);
	}
	hasEventBeforeFocus = false;
	hasBlurredWindowRecently = false;
}
function onWindowBlur$1() {
	hasEventBeforeFocus = false;
	hasBlurredWindowRecently = true;
}
function isFocusVisible() {
	return modality !== "pointer";
}
function setupGlobalFocusEvents() {
	if (!isDom() || hasSetup) return;
	const { focus } = HTMLElement.prototype;
	HTMLElement.prototype.focus = function focusElement(...args) {
		hasEventBeforeFocus = true;
		focus.apply(this, args);
	};
	document.addEventListener("keydown", onKeyboardEvent, true);
	document.addEventListener("keyup", onKeyboardEvent, true);
	document.addEventListener("click", onClickEvent, true);
	window.addEventListener("focus", onWindowFocus$1, true);
	window.addEventListener("blur", onWindowBlur$1, false);
	if (typeof PointerEvent !== "undefined") {
		document.addEventListener("pointerdown", onPointerEvent, true);
		document.addEventListener("pointermove", onPointerEvent, true);
		document.addEventListener("pointerup", onPointerEvent, true);
	} else {
		document.addEventListener("mousedown", onPointerEvent, true);
		document.addEventListener("mousemove", onPointerEvent, true);
		document.addEventListener("mouseup", onPointerEvent, true);
	}
	hasSetup = true;
}
function trackFocusVisible(fn) {
	setupGlobalFocusEvents();
	fn(isFocusVisible());
	const handler = () => fn(isFocusVisible());
	handlers.add(handler);
	return () => {
		handlers.delete(handler);
	};
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/form-control/form-control.mjs
const [FormControlStylesProvider, useFormControlStyles] = createContext({
	name: `FormControlStylesContext`,
	errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
});
const [FormControlProvider, useFormControlContext] = createContext({
	strict: false,
	name: "FormControlContext"
});
function useFormControlProvider(props) {
	const { id: idProp, isRequired, isInvalid, isDisabled, isReadOnly,...htmlProps } = props;
	const uuid = (0, import_react.useId)();
	const id$2 = idProp || `field-${uuid}`;
	const labelId = `${id$2}-label`;
	const feedbackId = `${id$2}-feedback`;
	const helpTextId = `${id$2}-helptext`;
	const [hasFeedbackText, setHasFeedbackText] = (0, import_react.useState)(false);
	const [hasHelpText, setHasHelpText] = (0, import_react.useState)(false);
	const [isFocused, setFocus] = (0, import_react.useState)(false);
	const getHelpTextProps = (0, import_react.useCallback)((props2 = {}, forwardedRef = null) => ({
		id: helpTextId,
		...props2,
		ref: mergeRefs(forwardedRef, (node) => {
			if (!node) return;
			setHasHelpText(true);
		})
	}), [helpTextId]);
	const getLabelProps = (0, import_react.useCallback)((props2 = {}, forwardedRef = null) => ({
		...props2,
		ref: forwardedRef,
		"data-focus": dataAttr(isFocused),
		"data-disabled": dataAttr(isDisabled),
		"data-invalid": dataAttr(isInvalid),
		"data-readonly": dataAttr(isReadOnly),
		id: props2.id !== void 0 ? props2.id : labelId,
		htmlFor: props2.htmlFor !== void 0 ? props2.htmlFor : id$2
	}), [
		id$2,
		isDisabled,
		isFocused,
		isInvalid,
		isReadOnly,
		labelId
	]);
	const getErrorMessageProps = (0, import_react.useCallback)((props2 = {}, forwardedRef = null) => ({
		id: feedbackId,
		...props2,
		ref: mergeRefs(forwardedRef, (node) => {
			if (!node) return;
			setHasFeedbackText(true);
		}),
		"aria-live": "polite"
	}), [feedbackId]);
	const getRootProps = (0, import_react.useCallback)((props2 = {}, forwardedRef = null) => ({
		...props2,
		...htmlProps,
		ref: forwardedRef,
		role: "group",
		"data-focus": dataAttr(isFocused),
		"data-disabled": dataAttr(isDisabled),
		"data-invalid": dataAttr(isInvalid),
		"data-readonly": dataAttr(isReadOnly)
	}), [
		htmlProps,
		isDisabled,
		isFocused,
		isInvalid,
		isReadOnly
	]);
	const getRequiredIndicatorProps = (0, import_react.useCallback)((props2 = {}, forwardedRef = null) => ({
		...props2,
		ref: forwardedRef,
		role: "presentation",
		"aria-hidden": true,
		children: props2.children || "*"
	}), []);
	return {
		isRequired: !!isRequired,
		isInvalid: !!isInvalid,
		isReadOnly: !!isReadOnly,
		isDisabled: !!isDisabled,
		isFocused: !!isFocused,
		onFocus: () => setFocus(true),
		onBlur: () => setFocus(false),
		hasFeedbackText,
		setHasFeedbackText,
		hasHelpText,
		setHasHelpText,
		id: id$2,
		labelId,
		feedbackId,
		helpTextId,
		htmlProps,
		getHelpTextProps,
		getErrorMessageProps,
		getRootProps,
		getLabelProps,
		getRequiredIndicatorProps
	};
}
const FormControl = forwardRef(function FormControl2(props, ref) {
	const styles = useMultiStyleConfig("Form", props);
	const ownProps = omitThemingProps(props);
	const { getRootProps, htmlProps: _,...context } = useFormControlProvider(ownProps);
	const className = cx("chakra-form-control", props.className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControlProvider, {
		value: context,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormControlStylesProvider, {
			value: styles,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
				...getRootProps({}, ref),
				className,
				__css: styles["container"]
			})
		})
	});
});
FormControl.displayName = "FormControl";
const FormHelperText = forwardRef(function FormHelperText2(props, ref) {
	const field = useFormControlContext();
	const styles = useFormControlStyles();
	const className = cx("chakra-form__helper-text", props.className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
		...field?.getHelpTextProps(props, ref),
		__css: styles.helperText,
		className
	});
});
FormHelperText.displayName = "FormHelperText";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/form-control/use-form-control.mjs
function useFormControl(props) {
	const { isDisabled, isInvalid, isReadOnly, isRequired,...rest } = useFormControlProps(props);
	return {
		...rest,
		disabled: isDisabled,
		readOnly: isReadOnly,
		required: isRequired,
		"aria-invalid": ariaAttr(isInvalid),
		"aria-required": ariaAttr(isRequired),
		"aria-readonly": ariaAttr(isReadOnly)
	};
}
function useFormControlProps(props) {
	const field = useFormControlContext();
	const { id: id$2, disabled, readOnly, required, isRequired, isInvalid, isReadOnly, isDisabled, onFocus: onFocus$1, onBlur: onBlur$1,...rest } = props;
	const labelIds = props["aria-describedby"] ? [props["aria-describedby"]] : [];
	if (field?.hasFeedbackText && field?.isInvalid) labelIds.push(field.feedbackId);
	if (field?.hasHelpText) labelIds.push(field.helpTextId);
	return {
		...rest,
		"aria-describedby": labelIds.join(" ") || void 0,
		id: id$2 ?? field?.id,
		isDisabled: disabled ?? isDisabled ?? field?.isDisabled,
		isReadOnly: readOnly ?? isReadOnly ?? field?.isReadOnly,
		isRequired: required ?? isRequired ?? field?.isRequired,
		isInvalid: isInvalid ?? field?.isInvalid,
		onFocus: callAllHandlers(field?.onFocus, onFocus$1),
		onBlur: callAllHandlers(field?.onBlur, onBlur$1)
	};
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/visually-hidden/visually-hidden.style.mjs
const visuallyHiddenStyle = {
	border: "0",
	clip: "rect(0, 0, 0, 0)",
	height: "1px",
	width: "1px",
	margin: "-1px",
	padding: "0",
	overflow: "hidden",
	whiteSpace: "nowrap",
	position: "absolute"
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/checkbox/use-checkbox.mjs
function useCheckbox(props = {}) {
	const formControlProps = useFormControlProps(props);
	const { isDisabled, isReadOnly, isRequired, isInvalid, id: id$2, onBlur: onBlur$1, onFocus: onFocus$1, "aria-describedby": ariaDescribedBy } = formControlProps;
	const { defaultChecked, isChecked: checkedProp, isFocusable: isFocusable$1, onChange, isIndeterminate, name, value, tabIndex = void 0, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, "aria-invalid": ariaInvalid,...rest } = props;
	const htmlProps = omit(rest, [
		"isDisabled",
		"isReadOnly",
		"isRequired",
		"isInvalid",
		"id",
		"onBlur",
		"onFocus",
		"aria-describedby"
	]);
	const onChangeProp = useCallbackRef$1(onChange);
	const onBlurProp = useCallbackRef$1(onBlur$1);
	const onFocusProp = useCallbackRef$1(onFocus$1);
	const [isFocused, setFocused] = (0, import_react.useState)(false);
	const [isHovered, setHovered] = (0, import_react.useState)(false);
	const [isActive, setActive] = (0, import_react.useState)(false);
	const isFocusVisibleRef = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		return trackFocusVisible((state2) => {
			isFocusVisibleRef.current = state2;
		});
	}, []);
	const inputRef = (0, import_react.useRef)(null);
	const [rootIsLabelElement, setRootIsLabelElement] = (0, import_react.useState)(true);
	const [checkedState, setCheckedState] = (0, import_react.useState)(!!defaultChecked);
	const isControlled = checkedProp !== void 0;
	const isChecked = isControlled ? checkedProp : checkedState;
	const handleChange = (0, import_react.useCallback)((event) => {
		if (isReadOnly || isDisabled) {
			event.preventDefault();
			return;
		}
		if (!isControlled) if (isChecked) setCheckedState(event.currentTarget.checked);
		else setCheckedState(isIndeterminate ? true : event.currentTarget.checked);
		onChangeProp?.(event);
	}, [
		isReadOnly,
		isDisabled,
		isChecked,
		isControlled,
		isIndeterminate,
		onChangeProp
	]);
	useSafeLayoutEffect(() => {
		if (inputRef.current) inputRef.current.indeterminate = Boolean(isIndeterminate);
	}, [isIndeterminate]);
	useUpdateEffect(() => {
		if (isDisabled) setFocused(false);
	}, [isDisabled, setFocused]);
	useSafeLayoutEffect(() => {
		const el = inputRef.current;
		if (!el?.form) return;
		const formResetListener = () => {
			setCheckedState(!!defaultChecked);
		};
		el.form.addEventListener("reset", formResetListener);
		return () => el.form?.removeEventListener("reset", formResetListener);
	}, []);
	const trulyDisabled = isDisabled && !isFocusable$1;
	const onKeyDown = (0, import_react.useCallback)((event) => {
		if (event.key === " ") setActive(true);
	}, [setActive]);
	const onKeyUp = (0, import_react.useCallback)((event) => {
		if (event.key === " ") setActive(false);
	}, [setActive]);
	useSafeLayoutEffect(() => {
		if (!inputRef.current) return;
		const notInSync = inputRef.current.checked !== isChecked;
		if (notInSync) setCheckedState(inputRef.current.checked);
	}, [inputRef.current]);
	const getCheckboxProps = (0, import_react.useCallback)((props2 = {}, forwardedRef = null) => {
		const onPressDown = (event) => {
			if (isFocused) event.preventDefault();
			setActive(true);
		};
		return {
			...props2,
			ref: forwardedRef,
			"data-active": dataAttr(isActive),
			"data-hover": dataAttr(isHovered),
			"data-checked": dataAttr(isChecked),
			"data-focus": dataAttr(isFocused),
			"data-focus-visible": dataAttr(isFocused && isFocusVisibleRef.current),
			"data-indeterminate": dataAttr(isIndeterminate),
			"data-disabled": dataAttr(isDisabled),
			"data-invalid": dataAttr(isInvalid),
			"data-readonly": dataAttr(isReadOnly),
			"aria-hidden": true,
			onMouseDown: callAllHandlers(props2.onMouseDown, onPressDown),
			onMouseUp: callAllHandlers(props2.onMouseUp, () => setActive(false)),
			onMouseEnter: callAllHandlers(props2.onMouseEnter, () => setHovered(true)),
			onMouseLeave: callAllHandlers(props2.onMouseLeave, () => setHovered(false))
		};
	}, [
		isActive,
		isChecked,
		isDisabled,
		isFocused,
		isHovered,
		isIndeterminate,
		isInvalid,
		isReadOnly
	]);
	const getIndicatorProps = (0, import_react.useCallback)((props2 = {}, forwardedRef = null) => ({
		...props2,
		ref: forwardedRef,
		"data-active": dataAttr(isActive),
		"data-hover": dataAttr(isHovered),
		"data-checked": dataAttr(isChecked),
		"data-focus": dataAttr(isFocused),
		"data-focus-visible": dataAttr(isFocused && isFocusVisibleRef.current),
		"data-indeterminate": dataAttr(isIndeterminate),
		"data-disabled": dataAttr(isDisabled),
		"data-invalid": dataAttr(isInvalid),
		"data-readonly": dataAttr(isReadOnly)
	}), [
		isActive,
		isChecked,
		isDisabled,
		isFocused,
		isHovered,
		isIndeterminate,
		isInvalid,
		isReadOnly
	]);
	const getRootProps = (0, import_react.useCallback)((props2 = {}, forwardedRef = null) => ({
		...htmlProps,
		...props2,
		ref: mergeRefs(forwardedRef, (node) => {
			if (!node) return;
			setRootIsLabelElement(node.tagName === "LABEL");
		}),
		onClick: callAllHandlers(props2.onClick, () => {
			if (!rootIsLabelElement) {
				inputRef.current?.click();
				requestAnimationFrame(() => {
					inputRef.current?.focus({ preventScroll: true });
				});
			}
		}),
		"data-disabled": dataAttr(isDisabled),
		"data-checked": dataAttr(isChecked),
		"data-invalid": dataAttr(isInvalid)
	}), [
		htmlProps,
		isDisabled,
		isChecked,
		isInvalid,
		rootIsLabelElement
	]);
	const getInputProps = (0, import_react.useCallback)((props2 = {}, forwardedRef = null) => {
		return {
			...props2,
			ref: mergeRefs(inputRef, forwardedRef),
			type: "checkbox",
			name,
			value,
			id: id$2,
			tabIndex,
			onChange: callAllHandlers(props2.onChange, handleChange),
			onBlur: callAllHandlers(props2.onBlur, onBlurProp, () => setFocused(false)),
			onFocus: callAllHandlers(props2.onFocus, onFocusProp, () => setFocused(true)),
			onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDown),
			onKeyUp: callAllHandlers(props2.onKeyUp, onKeyUp),
			required: isRequired,
			checked: isChecked,
			disabled: trulyDisabled,
			readOnly: isReadOnly,
			"aria-label": ariaLabel,
			"aria-labelledby": ariaLabelledBy,
			"aria-invalid": ariaInvalid ? Boolean(ariaInvalid) : isInvalid,
			"aria-describedby": ariaDescribedBy,
			"aria-disabled": isDisabled,
			"aria-checked": isIndeterminate ? "mixed" : isChecked,
			style: visuallyHiddenStyle
		};
	}, [
		name,
		value,
		id$2,
		tabIndex,
		handleChange,
		onBlurProp,
		onFocusProp,
		onKeyDown,
		onKeyUp,
		isRequired,
		isChecked,
		trulyDisabled,
		isReadOnly,
		ariaLabel,
		ariaLabelledBy,
		ariaInvalid,
		isInvalid,
		ariaDescribedBy,
		isDisabled,
		isIndeterminate
	]);
	const getLabelProps = (0, import_react.useCallback)((props2 = {}, forwardedRef = null) => ({
		...props2,
		ref: forwardedRef,
		onMouseDown: callAllHandlers(props2.onMouseDown, stopEvent),
		"data-disabled": dataAttr(isDisabled),
		"data-checked": dataAttr(isChecked),
		"data-invalid": dataAttr(isInvalid)
	}), [
		isChecked,
		isDisabled,
		isInvalid
	]);
	const state = {
		isInvalid,
		isFocused,
		isChecked,
		isActive,
		isHovered,
		isIndeterminate,
		isDisabled,
		isReadOnly,
		isRequired
	};
	return {
		state,
		getRootProps,
		getCheckboxProps,
		getIndicatorProps,
		getInputProps,
		getLabelProps,
		htmlProps
	};
}
function stopEvent(event) {
	event.preventDefault();
	event.stopPropagation();
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/checkbox/use-initial-animation-state.mjs
function useInitialAnimationState(isChecked) {
	const [previousIsChecked, setPreviousIsChecked] = (0, import_react.useState)(isChecked);
	const [shouldAnimate, setShouldAnimate] = (0, import_react.useState)(false);
	if (isChecked !== previousIsChecked) {
		setShouldAnimate(true);
		setPreviousIsChecked(isChecked);
	}
	return shouldAnimate;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/checkbox/checkbox.mjs
const controlStyles = {
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	verticalAlign: "top",
	userSelect: "none",
	flexShrink: 0
};
const rootStyles = {
	cursor: "pointer",
	display: "inline-flex",
	alignItems: "center",
	verticalAlign: "top",
	position: "relative"
};
const checkAnim = keyframes({
	from: {
		opacity: 0,
		strokeDashoffset: 16,
		transform: "scale(0.95)"
	},
	to: {
		opacity: 1,
		strokeDashoffset: 0,
		transform: "scale(1)"
	}
});
const indeterminateOpacityAnim = keyframes({
	from: { opacity: 0 },
	to: { opacity: 1 }
});
const indeterminateScaleAnim = keyframes({
	from: { transform: "scaleX(0.65)" },
	to: { transform: "scaleX(1)" }
});
const Checkbox = forwardRef(function Checkbox2(props, ref) {
	const group = useCheckboxGroupContext();
	const mergedProps = {
		...group,
		...props
	};
	const styles = useMultiStyleConfig("Checkbox", mergedProps);
	const ownProps = omitThemingProps(props);
	const { spacing = "0.5rem", className, children, iconColor, iconSize, icon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIcon, {}), isChecked: isCheckedProp, isDisabled = group?.isDisabled, onChange: onChangeProp, inputProps,...rest } = ownProps;
	let isChecked = isCheckedProp;
	if (group?.value && ownProps.value) isChecked = group.value.includes(ownProps.value);
	let onChange = onChangeProp;
	if (group?.onChange && ownProps.value) onChange = callAll(group.onChange, onChangeProp);
	const { state, getInputProps, getCheckboxProps, getLabelProps, getRootProps } = useCheckbox({
		...rest,
		isDisabled,
		isChecked,
		onChange
	});
	const shouldAnimate = useInitialAnimationState(state.isChecked);
	const iconStyles = (0, import_react.useMemo)(() => ({
		animation: !shouldAnimate ? void 0 : state.isIndeterminate ? `${indeterminateOpacityAnim} 20ms linear, ${indeterminateScaleAnim} 200ms linear` : `${checkAnim} 200ms linear`,
		...styles.icon,
		...compact({
			fontSize: iconSize,
			color: iconColor
		})
	}), [
		iconColor,
		iconSize,
		shouldAnimate,
		state.isIndeterminate,
		styles.icon
	]);
	const clonedIcon = (0, import_react.cloneElement)(icon, {
		__css: iconStyles,
		isIndeterminate: state.isIndeterminate,
		isChecked: state.isChecked
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(chakra.label, {
		__css: {
			...rootStyles,
			...styles.container
		},
		className: cx("chakra-checkbox", className),
		...getRootProps(),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				className: "chakra-checkbox__input",
				...getInputProps(inputProps, ref)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.span, {
				__css: {
					...controlStyles,
					...styles.control
				},
				className: "chakra-checkbox__control",
				...getCheckboxProps(),
				children: clonedIcon
			}),
			children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.span, {
				className: "chakra-checkbox__label",
				...getLabelProps(),
				__css: {
					marginStart: spacing,
					...styles.label
				},
				children
			})
		]
	});
});
Checkbox.displayName = "Checkbox";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/checkbox/use-checkbox-group.mjs
function isInputEvent(value) {
	return value && isObject(value) && isObject(value.target);
}
function useCheckboxGroup(props = {}) {
	const { defaultValue, value: valueProp, onChange, isDisabled, isNative } = props;
	const onChangeProp = useCallbackRef$1(onChange);
	const [value, setValue] = useControllableState({
		value: valueProp,
		defaultValue: defaultValue || [],
		onChange: onChangeProp
	});
	const handleChange = (0, import_react.useCallback)((eventOrValue) => {
		if (!value) return;
		const isChecked = isInputEvent(eventOrValue) ? eventOrValue.target.checked : !value.includes(eventOrValue);
		const selectedValue = isInputEvent(eventOrValue) ? eventOrValue.target.value : eventOrValue;
		const nextValue = isChecked ? [...value, selectedValue] : value.filter((v) => String(v) !== String(selectedValue));
		setValue(nextValue);
	}, [setValue, value]);
	const getCheckboxProps = (0, import_react.useCallback)((props2 = {}) => {
		const checkedKey = isNative ? "checked" : "isChecked";
		return {
			...props2,
			[checkedKey]: value.some((val) => String(props2.value) === String(val)),
			onChange: handleChange
		};
	}, [
		handleChange,
		isNative,
		value
	]);
	return {
		value,
		isDisabled,
		onChange: handleChange,
		setValue,
		getCheckboxProps
	};
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/checkbox/checkbox-group.mjs
function CheckboxGroup(props) {
	const { colorScheme, size, variant, children, isDisabled } = props;
	const { value, onChange } = useCheckboxGroup(props);
	const group = (0, import_react.useMemo)(() => ({
		size,
		onChange,
		colorScheme,
		value,
		variant,
		isDisabled
	}), [
		size,
		onChange,
		colorScheme,
		value,
		variant,
		isDisabled
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxGroupProvider, {
		value: group,
		children
	});
}
CheckboxGroup.displayName = "CheckboxGroup";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/flex/flex.mjs
const Flex = forwardRef(function Flex2(props, ref) {
	const { direction, align, justify, wrap, basis, grow, shrink,...rest } = props;
	const styles = {
		display: "flex",
		flexDirection: direction,
		alignItems: align,
		justifyContent: justify,
		flexWrap: wrap,
		flexBasis: basis,
		flexGrow: grow,
		flexShrink: shrink
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
		ref,
		__css: styles,
		...rest
	});
});
Flex.displayName = "Flex";

//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}

//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/constants.js
/**
* defines a focus group
*/
var FOCUS_GROUP = "data-focus-lock";
/**
* disables element discovery inside a group marked by key
*/
var FOCUS_DISABLED = "data-focus-lock-disabled";
/**
* allows uncontrolled focus within the marked area, effectively disabling focus lock for it's content
*/
var FOCUS_ALLOW = "data-no-focus-lock";
/**
* instructs autofocus engine to pick default autofocus inside a given node
* can be set on the element or container
*/
var FOCUS_AUTO = "data-autofocus-inside";
/**
* instructs autofocus to ignore elements within a given node
* can be set on the element or container
*/
var FOCUS_NO_AUTOFOCUS = "data-no-autofocus";

//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.1.12_react@19.1.1/node_modules/use-callback-ref/dist/es2015/assignRef.js
/**
* Assigns a value for a given ref, no matter of the ref format
* @param {RefObject} ref - a callback function or ref object
* @param value - a new value
*
* @see https://github.com/theKashey/use-callback-ref#assignref
* @example
* const refObject = useRef();
* const refFn = (ref) => {....}
*
* assignRef(refObject, "refValue");
* assignRef(refFn, "refValue");
*/
function assignRef(ref, value) {
	if (typeof ref === "function") ref(value);
	else if (ref) ref.current = value;
	return ref;
}

//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.1.12_react@19.1.1/node_modules/use-callback-ref/dist/es2015/useRef.js
/**
* creates a MutableRef with ref change callback
* @param initialValue - initial ref value
* @param {Function} callback - a callback to run when value changes
*
* @example
* const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);
* ref.current = 1;
* // prints 0 -> 1
*
* @see https://reactjs.org/docs/hooks-reference.html#useref
* @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref
* @returns {MutableRefObject}
*/
function useCallbackRef(initialValue, callback) {
	var ref = (0, import_react.useState)(function() {
		return {
			value: initialValue,
			callback,
			facade: {
				get current() {
					return ref.value;
				},
				set current(value) {
					var last = ref.value;
					if (last !== value) {
						ref.value = value;
						ref.callback(value, last);
					}
				}
			}
		};
	})[0];
	ref.callback = callback;
	return ref.facade;
}

//#endregion
//#region node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.1.12_react@19.1.1/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react.useLayoutEffect : import_react.useEffect;
var currentValues = /* @__PURE__ */ new WeakMap();
/**
* Merges two or more refs together providing a single interface to set their value
* @param {RefObject|Ref} refs
* @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
*
* @see {@link mergeRefs} a version without buit-in memoization
* @see https://github.com/theKashey/use-callback-ref#usemergerefs
* @example
* const Component = React.forwardRef((props, ref) => {
*   const ownRef = useRef();
*   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together
*   return <div ref={domRef}>...</div>
* }
*/
function useMergeRefs(refs, defaultValue) {
	var callbackRef = useCallbackRef(defaultValue || null, function(newValue) {
		return refs.forEach(function(ref) {
			return assignRef(ref, newValue);
		});
	});
	useIsomorphicLayoutEffect(function() {
		var oldValue = currentValues.get(callbackRef);
		if (oldValue) {
			var prevRefs_1 = new Set(oldValue);
			var nextRefs_1 = new Set(refs);
			var current_1 = callbackRef.current;
			prevRefs_1.forEach(function(ref) {
				if (!nextRefs_1.has(ref)) assignRef(ref, null);
			});
			nextRefs_1.forEach(function(ref) {
				if (!prevRefs_1.has(ref)) assignRef(ref, current_1);
			});
		}
		currentValues.set(callbackRef, refs);
	}, [refs]);
	return callbackRef;
}

//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.6_@types+react@19.1.12_react@19.1.1/node_modules/react-focus-lock/dist/es2015/FocusGuard.js
var hiddenGuard = {
	width: "1px",
	height: "0px",
	padding: 0,
	overflow: "hidden",
	position: "fixed",
	top: "1px",
	left: "1px"
};
var InFocusGuard = function InFocusGuard$1(_ref$1) {
	var _ref$children = _ref$1.children, children = _ref$children === void 0 ? null : _ref$children;
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, /* @__PURE__ */ import_react.createElement("div", {
		key: "guard-first",
		"data-focus-guard": true,
		"data-focus-auto-guard": true,
		style: hiddenGuard
	}), children, children && /* @__PURE__ */ import_react.createElement("div", {
		key: "guard-last",
		"data-focus-guard": true,
		"data-focus-auto-guard": true,
		style: hiddenGuard
	}));
};
InFocusGuard.propTypes = {};

//#endregion
//#region node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs
var __assign = function() {
	__assign = Object.assign || function __assign$1(t) {
		for (var s, i = 1, n = arguments.length; i < n; i++) {
			s = arguments[i];
			for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
		}
		return t;
	};
	return __assign.apply(this, arguments);
};
function __rest(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
}
function __spreadArray(to, from, pack) {
	if (pack || arguments.length === 2) {
		for (var i = 0, l = from.length, ar; i < l; i++) if (ar || !(i in from)) {
			if (!ar) ar = Array.prototype.slice.call(from, 0, i);
			ar[i] = from[i];
		}
	}
	return to.concat(ar || Array.prototype.slice.call(from));
}

//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.1.12_react@19.1.1/node_modules/use-sidecar/dist/es2015/medium.js
function ItoI(a) {
	return a;
}
function innerCreateMedium(defaults, middleware) {
	if (middleware === void 0) middleware = ItoI;
	var buffer = [];
	var assigned = false;
	var medium = {
		read: function() {
			if (assigned) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			if (buffer.length) return buffer[buffer.length - 1];
			return defaults;
		},
		useMedium: function(data) {
			var item = middleware(data, assigned);
			buffer.push(item);
			return function() {
				buffer = buffer.filter(function(x) {
					return x !== item;
				});
			};
		},
		assignSyncMedium: function(cb) {
			assigned = true;
			while (buffer.length) {
				var cbs = buffer;
				buffer = [];
				cbs.forEach(cb);
			}
			buffer = {
				push: function(x) {
					return cb(x);
				},
				filter: function() {
					return buffer;
				}
			};
		},
		assignMedium: function(cb) {
			assigned = true;
			var pendingQueue = [];
			if (buffer.length) {
				var cbs = buffer;
				buffer = [];
				cbs.forEach(cb);
				pendingQueue = buffer;
			}
			var executeQueue = function() {
				var cbs$1 = pendingQueue;
				pendingQueue = [];
				cbs$1.forEach(cb);
			};
			var cycle = function() {
				return Promise.resolve().then(executeQueue);
			};
			cycle();
			buffer = {
				push: function(x) {
					pendingQueue.push(x);
					cycle();
				},
				filter: function(filter$1) {
					pendingQueue = pendingQueue.filter(filter$1);
					return buffer;
				}
			};
		}
	};
	return medium;
}
function createMedium(defaults, middleware) {
	if (middleware === void 0) middleware = ItoI;
	return innerCreateMedium(defaults, middleware);
}
function createSidecarMedium(options$1) {
	if (options$1 === void 0) options$1 = {};
	var medium = innerCreateMedium(null);
	medium.options = __assign({
		async: true,
		ssr: false
	}, options$1);
	return medium;
}

//#endregion
//#region node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.1.12_react@19.1.1/node_modules/use-sidecar/dist/es2015/exports.js
var SideCar = function(_a) {
	var sideCar = _a.sideCar, rest = __rest(_a, ["sideCar"]);
	if (!sideCar) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
	var Target = sideCar.read();
	if (!Target) throw new Error("Sidecar medium not found");
	return import_react.createElement(Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
	medium.useMedium(exported);
	return SideCar;
}

//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.6_@types+react@19.1.12_react@19.1.1/node_modules/react-focus-lock/dist/es2015/medium.js
var mediumFocus = createMedium({}, function(_ref$1) {
	var target = _ref$1.target, currentTarget = _ref$1.currentTarget;
	return {
		target,
		currentTarget
	};
});
var mediumBlur = createMedium();
var mediumEffect = createMedium();
var mediumSidecar = createSidecarMedium({
	async: true,
	ssr: typeof document !== "undefined"
});

//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.6_@types+react@19.1.12_react@19.1.1/node_modules/react-focus-lock/dist/es2015/scope.js
var focusScope = /* @__PURE__ */ (0, import_react.createContext)(void 0);

//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.6_@types+react@19.1.12_react@19.1.1/node_modules/react-focus-lock/dist/es2015/Lock.js
var emptyArray = [];
var FocusLock$1 = /* @__PURE__ */ (0, import_react.forwardRef)(function FocusLockUI(props, parentRef) {
	var _extends2;
	var _useState = (0, import_react.useState)(), realObserved = _useState[0], setObserved = _useState[1];
	var observed = (0, import_react.useRef)();
	var isActive = (0, import_react.useRef)(false);
	var originalFocusedElement = (0, import_react.useRef)(null);
	var _useState2 = (0, import_react.useState)({}), update = _useState2[1], children = props.children, _props$disabled = props.disabled, disabled = _props$disabled === void 0 ? false : _props$disabled, _props$noFocusGuards = props.noFocusGuards, noFocusGuards = _props$noFocusGuards === void 0 ? false : _props$noFocusGuards, _props$persistentFocu = props.persistentFocus, persistentFocus = _props$persistentFocu === void 0 ? false : _props$persistentFocu, _props$crossFrame = props.crossFrame, crossFrame = _props$crossFrame === void 0 ? true : _props$crossFrame, _props$autoFocus = props.autoFocus, autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus;
	props.allowTextSelection;
	var group = props.group, className = props.className, whiteList = props.whiteList, hasPositiveIndices = props.hasPositiveIndices, _props$shards = props.shards, shards = _props$shards === void 0 ? emptyArray : _props$shards, _props$as = props.as, Container$1 = _props$as === void 0 ? "div" : _props$as, _props$lockProps = props.lockProps, containerProps = _props$lockProps === void 0 ? {} : _props$lockProps, SideCar$1 = props.sideCar, _props$returnFocus = props.returnFocus, shouldReturnFocus = _props$returnFocus === void 0 ? false : _props$returnFocus, focusOptions = props.focusOptions, onActivationCallback = props.onActivation, onDeactivationCallback = props.onDeactivation;
	var _useState3 = (0, import_react.useState)({}), id$2 = _useState3[0];
	var onActivation = (0, import_react.useCallback)(function(_ref$1) {
		var captureFocusRestore$1 = _ref$1.captureFocusRestore;
		if (!originalFocusedElement.current) {
			var _document;
			var activeElement = (_document = document) == null ? void 0 : _document.activeElement;
			originalFocusedElement.current = activeElement;
			if (activeElement !== document.body) originalFocusedElement.current = captureFocusRestore$1(activeElement);
		}
		if (observed.current && onActivationCallback) onActivationCallback(observed.current);
		isActive.current = true;
		update();
	}, [onActivationCallback]);
	var onDeactivation = (0, import_react.useCallback)(function() {
		isActive.current = false;
		if (onDeactivationCallback) onDeactivationCallback(observed.current);
		update();
	}, [onDeactivationCallback]);
	var returnFocus = (0, import_react.useCallback)(function(allowDefer) {
		var focusRestore = originalFocusedElement.current;
		if (focusRestore) {
			var returnFocusTo = (typeof focusRestore === "function" ? focusRestore() : focusRestore) || document.body;
			var howToReturnFocus = typeof shouldReturnFocus === "function" ? shouldReturnFocus(returnFocusTo) : shouldReturnFocus;
			if (howToReturnFocus) {
				var returnFocusOptions = typeof howToReturnFocus === "object" ? howToReturnFocus : void 0;
				originalFocusedElement.current = null;
				if (allowDefer) Promise.resolve().then(function() {
					return returnFocusTo.focus(returnFocusOptions);
				});
				else returnFocusTo.focus(returnFocusOptions);
			}
		}
	}, [shouldReturnFocus]);
	var onFocus$1 = (0, import_react.useCallback)(function(event) {
		if (isActive.current) mediumFocus.useMedium(event);
	}, []);
	var onBlur$1 = mediumBlur.useMedium;
	var setObserveNode = (0, import_react.useCallback)(function(newObserved) {
		if (observed.current !== newObserved) {
			observed.current = newObserved;
			setObserved(newObserved);
		}
	}, []);
	var lockProps = _extends((_extends2 = {}, _extends2[FOCUS_DISABLED] = disabled && "disabled", _extends2[FOCUS_GROUP] = group, _extends2), containerProps);
	var hasLeadingGuards = noFocusGuards !== true;
	var hasTailingGuards = hasLeadingGuards && noFocusGuards !== "tail";
	var mergedRef = useMergeRefs([parentRef, setObserveNode]);
	var focusScopeValue = (0, import_react.useMemo)(function() {
		return {
			observed,
			shards,
			enabled: !disabled,
			active: isActive.current
		};
	}, [
		disabled,
		isActive.current,
		shards,
		realObserved
	]);
	return /* @__PURE__ */ import_react.createElement(import_react.Fragment, null, hasLeadingGuards && [/* @__PURE__ */ import_react.createElement("div", {
		key: "guard-first",
		"data-focus-guard": true,
		tabIndex: disabled ? -1 : 0,
		style: hiddenGuard
	}), hasPositiveIndices ? /* @__PURE__ */ import_react.createElement("div", {
		key: "guard-nearest",
		"data-focus-guard": true,
		tabIndex: disabled ? -1 : 1,
		style: hiddenGuard
	}) : null], !disabled && /* @__PURE__ */ import_react.createElement(SideCar$1, {
		id: id$2,
		sideCar: mediumSidecar,
		observed: realObserved,
		disabled,
		persistentFocus,
		crossFrame,
		autoFocus,
		whiteList,
		shards,
		onActivation,
		onDeactivation,
		returnFocus,
		focusOptions,
		noFocusGuards
	}), /* @__PURE__ */ import_react.createElement(Container$1, _extends({ ref: mergedRef }, lockProps, {
		className,
		onBlur: onBlur$1,
		onFocus: onFocus$1
	}), /* @__PURE__ */ import_react.createElement(focusScope.Provider, { value: focusScopeValue }, children)), hasTailingGuards && /* @__PURE__ */ import_react.createElement("div", {
		"data-focus-guard": true,
		tabIndex: disabled ? -1 : 0,
		style: hiddenGuard
	}));
});
FocusLock$1.propTypes = {};
var Lock_default = FocusLock$1;

//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
	return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t$1, e$1) {
		return t$1.__proto__ = e$1, t$1;
	}, _setPrototypeOf(t, e);
}

//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(t, o) {
	t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}

//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
	"@babel/helpers - typeof";
	return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o$1) {
		return typeof o$1;
	} : function(o$1) {
		return o$1 && "function" == typeof Symbol && o$1.constructor === Symbol && o$1 !== Symbol.prototype ? "symbol" : typeof o$1;
	}, _typeof(o);
}

//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function toPrimitive(t, r) {
	if ("object" != _typeof(t) || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != _typeof(i)) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}

//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
	var i = toPrimitive(t, "string");
	return "symbol" == _typeof(i) ? i : i + "";
}

//#endregion
//#region node_modules/.pnpm/@babel+runtime@7.27.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(e, r, t) {
	return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}

//#endregion
//#region node_modules/.pnpm/react-clientside-effect@1.2.8_react@19.1.1/node_modules/react-clientside-effect/lib/index.es.js
function withSideEffect(reducePropsToState$1, handleStateChangeOnClient$1) {
	function getDisplayName(WrappedComponent) {
		return WrappedComponent.displayName || WrappedComponent.name || "Component";
	}
	return function wrap(WrappedComponent) {
		var mountedInstances = [];
		var state;
		function emitChange() {
			state = reducePropsToState$1(mountedInstances.map(function(instance) {
				return instance.props;
			}));
			handleStateChangeOnClient$1(state);
		}
		var SideEffect = /* @__PURE__ */ function(_PureComponent) {
			_inheritsLoose(SideEffect$1, _PureComponent);
			function SideEffect$1() {
				return _PureComponent.apply(this, arguments) || this;
			}
			SideEffect$1.peek = function peek() {
				return state;
			};
			var _proto = SideEffect$1.prototype;
			_proto.componentDidMount = function componentDidMount() {
				mountedInstances.push(this);
				emitChange();
			};
			_proto.componentDidUpdate = function componentDidUpdate() {
				emitChange();
			};
			_proto.componentWillUnmount = function componentWillUnmount() {
				var index = mountedInstances.indexOf(this);
				mountedInstances.splice(index, 1);
				emitChange();
			};
			_proto.render = function render() {
				return /* @__PURE__ */ import_react.createElement(WrappedComponent, this.props);
			};
			return SideEffect$1;
		}(import_react.PureComponent);
		_defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");
		return SideEffect;
	};
}
var index_es_default = withSideEffect;

//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/array.js
var toArray = function(a) {
	var ret = Array(a.length);
	for (var i = 0; i < a.length; ++i) ret[i] = a[i];
	return ret;
};
var asArray = function(a) {
	return Array.isArray(a) ? a : [a];
};
var getFirst = function(a) {
	return Array.isArray(a) ? a[0] : a;
};

//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/is.js
var isElementHidden = function(node) {
	if (node.nodeType !== Node.ELEMENT_NODE) return false;
	var computedStyle = window.getComputedStyle(node, null);
	if (!computedStyle || !computedStyle.getPropertyValue) return false;
	return computedStyle.getPropertyValue("display") === "none" || computedStyle.getPropertyValue("visibility") === "hidden";
};
var getParentNode$1 = function(node) {
	return node.parentNode && node.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? node.parentNode.host : node.parentNode;
};
var isTopNode = function(node) {
	return node === document || node && node.nodeType === Node.DOCUMENT_NODE;
};
var isInert = function(node) {
	return node.hasAttribute("inert");
};
/**
* @see https://github.com/testing-library/jest-dom/blob/main/src/to-be-visible.js
*/
var isVisibleUncached = function(node, checkParent) {
	return !node || isTopNode(node) || !isElementHidden(node) && !isInert(node) && checkParent(getParentNode$1(node));
};
var isVisibleCached = function(visibilityCache, node) {
	var cached = visibilityCache.get(node);
	if (cached !== void 0) return cached;
	var result = isVisibleUncached(node, isVisibleCached.bind(void 0, visibilityCache));
	visibilityCache.set(node, result);
	return result;
};
var isAutoFocusAllowedUncached = function(node, checkParent) {
	return node && !isTopNode(node) ? isAutoFocusAllowed(node) ? checkParent(getParentNode$1(node)) : false : true;
};
var isAutoFocusAllowedCached = function(cache, node) {
	var cached = cache.get(node);
	if (cached !== void 0) return cached;
	var result = isAutoFocusAllowedUncached(node, isAutoFocusAllowedCached.bind(void 0, cache));
	cache.set(node, result);
	return result;
};
var getDataset = function(node) {
	return node.dataset;
};
var isHTMLButtonElement = function(node) {
	return node.tagName === "BUTTON";
};
var isHTMLInputElement = function(node) {
	return node.tagName === "INPUT";
};
var isRadioElement = function(node) {
	return isHTMLInputElement(node) && node.type === "radio";
};
var notHiddenInput = function(node) {
	return !((isHTMLInputElement(node) || isHTMLButtonElement(node)) && (node.type === "hidden" || node.disabled));
};
var isAutoFocusAllowed = function(node) {
	var attribute = node.getAttribute(FOCUS_NO_AUTOFOCUS);
	return ![
		true,
		"true",
		""
	].includes(attribute);
};
var isGuard = function(node) {
	var _a;
	return Boolean(node && ((_a = getDataset(node)) === null || _a === void 0 ? void 0 : _a.focusGuard));
};
var isNotAGuard = function(node) {
	return !isGuard(node);
};
var isDefined = function(x) {
	return Boolean(x);
};

//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/tabOrder.js
var tabSort = function(a, b) {
	var aTab = Math.max(0, a.tabIndex);
	var bTab = Math.max(0, b.tabIndex);
	var tabDiff = aTab - bTab;
	var indexDiff = a.index - b.index;
	if (tabDiff) {
		if (!aTab) return 1;
		if (!bTab) return -1;
	}
	return tabDiff || indexDiff;
};
var getTabIndex = function(node) {
	if (node.tabIndex < 0) {
		if (!node.hasAttribute("tabindex")) return 0;
	}
	return node.tabIndex;
};
var orderByTabIndex = function(nodes, filterNegative, keepGuards) {
	return toArray(nodes).map(function(node, index) {
		var tabIndex = getTabIndex(node);
		return {
			node,
			index,
			tabIndex: keepGuards && tabIndex === -1 ? (node.dataset || {}).focusGuard ? 0 : -1 : tabIndex
		};
	}).filter(function(data) {
		return !filterNegative || data.tabIndex >= 0;
	}).sort(tabSort);
};

//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/tabbables.js
/**
* list of the object to be considered as focusable
*/
var tabbables = [
	"button:enabled",
	"select:enabled",
	"textarea:enabled",
	"input:enabled",
	"a[href]",
	"area[href]",
	"summary",
	"iframe",
	"object",
	"embed",
	"audio[controls]",
	"video[controls]",
	"[tabindex]",
	"[contenteditable]",
	"[autofocus]"
];

//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/tabUtils.js
var queryTabbables = tabbables.join(",");
var queryGuardTabbables = "".concat(queryTabbables, ", [data-focus-guard]");
var getFocusablesWithShadowDom = function(parent, withGuards) {
	return toArray((parent.shadowRoot || parent).children).reduce(function(acc, child) {
		return acc.concat(child.matches(withGuards ? queryGuardTabbables : queryTabbables) ? [child] : [], getFocusablesWithShadowDom(child));
	}, []);
};
var getFocusablesWithIFrame = function(parent, withGuards) {
	var _a;
	if (parent instanceof HTMLIFrameElement && ((_a = parent.contentDocument) === null || _a === void 0 ? void 0 : _a.body)) return getFocusables([parent.contentDocument.body], withGuards);
	return [parent];
};
var getFocusables = function(parents, withGuards) {
	return parents.reduce(function(acc, parent) {
		var _a;
		var focusableWithShadowDom = getFocusablesWithShadowDom(parent, withGuards);
		var focusableWithIframes = (_a = []).concat.apply(_a, focusableWithShadowDom.map(function(node) {
			return getFocusablesWithIFrame(node, withGuards);
		}));
		return acc.concat(focusableWithIframes, parent.parentNode ? toArray(parent.parentNode.querySelectorAll(queryTabbables)).filter(function(node) {
			return node === parent;
		}) : []);
	}, []);
};
/**
* return a list of focusable nodes within an area marked as "auto-focusable"
* @param parent
*/
var getParentAutofocusables = function(parent) {
	var parentFocus = parent.querySelectorAll("[".concat(FOCUS_AUTO, "]"));
	return toArray(parentFocus).map(function(node) {
		return getFocusables([node]);
	}).reduce(function(acc, nodes) {
		return acc.concat(nodes);
	}, []);
};

//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/DOMutils.js
/**
* given list of focusable elements keeps the ones user can interact with
* @param nodes
* @param visibilityCache
*/
var filterFocusable = function(nodes, visibilityCache) {
	return toArray(nodes).filter(function(node) {
		return isVisibleCached(visibilityCache, node);
	}).filter(function(node) {
		return notHiddenInput(node);
	});
};
var filterAutoFocusable = function(nodes, cache) {
	if (cache === void 0) cache = /* @__PURE__ */ new Map();
	return toArray(nodes).filter(function(node) {
		return isAutoFocusAllowedCached(cache, node);
	});
};
/**
* !__WARNING__! Low level API.
* @returns all tabbable nodes
*
* @see {@link getFocusableNodes} to get any focusable element
*
* @param topNodes - array of top level HTMLElements to search inside
* @param visibilityCache - an cache to store intermediate measurements. Expected to be a fresh `new Map` on every call
*/
var getTabbableNodes = function(topNodes, visibilityCache, withGuards) {
	return orderByTabIndex(filterFocusable(getFocusables(topNodes, withGuards), visibilityCache), true, withGuards);
};
/**
* !__WARNING__! Low level API.
*
* @returns anything "focusable", not only tabbable. The difference is in `tabIndex=-1`
* (without guards, as long as they are not expected to be ever focused)
*
* @see {@link getTabbableNodes} to get only tabble nodes element
*
* @param topNodes - array of top level HTMLElements to search inside
* @param visibilityCache - an cache to store intermediate measurements. Expected to be a fresh `new Map` on every call
*/
var getFocusableNodes = function(topNodes, visibilityCache) {
	return orderByTabIndex(filterFocusable(getFocusables(topNodes), visibilityCache), false);
};
/**
* return list of nodes which are expected to be auto-focused
* @param topNode
* @param visibilityCache
*/
var parentAutofocusables = function(topNode, visibilityCache) {
	return filterFocusable(getParentAutofocusables(topNode), visibilityCache);
};
var contains$2 = function(scope, element) {
	if (scope.shadowRoot) return contains$2(scope.shadowRoot, element);
	else {
		if (Object.getPrototypeOf(scope).contains !== void 0 && Object.getPrototypeOf(scope).contains.call(scope, element)) return true;
		return toArray(scope.children).some(function(child) {
			var _a;
			if (child instanceof HTMLIFrameElement) {
				var iframeBody = (_a = child.contentDocument) === null || _a === void 0 ? void 0 : _a.body;
				if (iframeBody) return contains$2(iframeBody, element);
				return false;
			}
			return contains$2(child, element);
		});
	}
};

//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/all-affected.js
/**
* in case of multiple nodes nested inside each other
* keeps only top ones
* this is O(nlogn)
* @param nodes
* @returns {*}
*/
var filterNested = function(nodes) {
	var contained = /* @__PURE__ */ new Set();
	var l = nodes.length;
	for (var i = 0; i < l; i += 1) for (var j = i + 1; j < l; j += 1) {
		var position = nodes[i].compareDocumentPosition(nodes[j]);
		if ((position & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0) contained.add(j);
		if ((position & Node.DOCUMENT_POSITION_CONTAINS) > 0) contained.add(i);
	}
	return nodes.filter(function(_, index) {
		return !contained.has(index);
	});
};
/**
* finds top most parent for a node
* @param node
* @returns {*}
*/
var getTopParent = function(node) {
	return node.parentNode ? getTopParent(node.parentNode) : node;
};
/**
* returns all "focus containers" inside a given node
* @param node - node or nodes to look inside
* @returns Element[]
*/
var getAllAffectedNodes = function(node) {
	var nodes = asArray(node);
	return nodes.filter(Boolean).reduce(function(acc, currentNode) {
		var group = currentNode.getAttribute(FOCUS_GROUP);
		acc.push.apply(acc, group ? filterNested(toArray(getTopParent(currentNode).querySelectorAll("[".concat(FOCUS_GROUP, "=\"").concat(group, "\"]:not([").concat(FOCUS_DISABLED, "=\"disabled\"])")))) : [currentNode]);
		return acc;
	}, []);
};

//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/safe.js
var safeProbe = function(cb) {
	try {
		return cb();
	} catch (e) {
		return void 0;
	}
};

//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/getActiveElement.js
/**
* returns current active element. If the active element is a "container" itself(shadowRoot or iframe) returns active element inside it
* @param [inDocument]
*/
var getActiveElement = function(inDocument) {
	if (inDocument === void 0) inDocument = document;
	if (!inDocument || !inDocument.activeElement) return void 0;
	var activeElement = inDocument.activeElement;
	return activeElement.shadowRoot ? getActiveElement(activeElement.shadowRoot) : activeElement instanceof HTMLIFrameElement && safeProbe(function() {
		return activeElement.contentWindow.document;
	}) ? getActiveElement(activeElement.contentWindow.document) : activeElement;
};

//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/focusInside.js
var focusInFrame = function(frame$1, activeElement) {
	return frame$1 === activeElement;
};
var focusInsideIframe = function(topNode, activeElement) {
	return Boolean(toArray(topNode.querySelectorAll("iframe")).some(function(node) {
		return focusInFrame(node, activeElement);
	}));
};
/**
* @returns {Boolean} true, if the current focus is inside given node or nodes.
* Supports nodes hidden inside shadowDom
*/
var focusInside = function(topNode, activeElement) {
	if (activeElement === void 0) activeElement = getActiveElement(getFirst(topNode).ownerDocument);
	if (!activeElement || activeElement.dataset && activeElement.dataset.focusGuard) return false;
	return getAllAffectedNodes(topNode).some(function(node) {
		return contains$2(node, activeElement) || focusInsideIframe(node, activeElement);
	});
};

//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/focusIsHidden.js
/**
* checks if focus is hidden FROM the focus-lock
* ie contained inside a node focus-lock shall ignore
*
* This is a utility function coupled with {@link FOCUS_ALLOW} constant
*
* @returns {boolean} focus is currently is in "allow" area
*/
var focusIsHidden = function(inDocument) {
	if (inDocument === void 0) inDocument = document;
	var activeElement = getActiveElement(inDocument);
	if (!activeElement) return false;
	return toArray(inDocument.querySelectorAll("[".concat(FOCUS_ALLOW, "]"))).some(function(node) {
		return contains$2(node, activeElement);
	});
};

//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/correctFocus.js
var findSelectedRadio = function(node, nodes) {
	return nodes.filter(isRadioElement).filter(function(el) {
		return el.name === node.name;
	}).filter(function(el) {
		return el.checked;
	})[0] || node;
};
var correctNode = function(node, nodes) {
	if (isRadioElement(node) && node.name) return findSelectedRadio(node, nodes);
	return node;
};
/**
* giving a set of radio inputs keeps only selected (tabbable) ones
* @param nodes
*/
var correctNodes = function(nodes) {
	var resultSet = /* @__PURE__ */ new Set();
	nodes.forEach(function(node) {
		return resultSet.add(correctNode(node, nodes));
	});
	return nodes.filter(function(node) {
		return resultSet.has(node);
	});
};

//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/firstFocus.js
var pickFirstFocus = function(nodes) {
	if (nodes[0] && nodes.length > 1) return correctNode(nodes[0], nodes);
	return nodes[0];
};
var pickFocusable = function(nodes, node) {
	return nodes.indexOf(correctNode(node, nodes));
};

//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/solver.js
var NEW_FOCUS = "NEW_FOCUS";
/**
* Main solver for the "find next focus" question
* @param innerNodes - used to control "return focus"
* @param innerTabbables - used to control "autofocus"
* @param outerNodes
* @param activeElement
* @param lastNode
* @returns {number|string|undefined|*}
*/
var newFocus = function(innerNodes, innerTabbables, outerNodes, activeElement, lastNode) {
	var cnt = innerNodes.length;
	var firstFocus = innerNodes[0];
	var lastFocus = innerNodes[cnt - 1];
	var isOnGuard = isGuard(activeElement);
	if (activeElement && innerNodes.indexOf(activeElement) >= 0) return void 0;
	var activeIndex = activeElement !== void 0 ? outerNodes.indexOf(activeElement) : -1;
	var lastIndex = lastNode ? outerNodes.indexOf(lastNode) : activeIndex;
	var lastNodeInside = lastNode ? innerNodes.indexOf(lastNode) : -1;
	if (activeIndex === -1) {
		if (lastNodeInside !== -1) return lastNodeInside;
		return NEW_FOCUS;
	}
	if (lastNodeInside === -1) return NEW_FOCUS;
	var indexDiff = activeIndex - lastIndex;
	var firstNodeIndex = outerNodes.indexOf(firstFocus);
	var lastNodeIndex = outerNodes.indexOf(lastFocus);
	var correctedNodes = correctNodes(outerNodes);
	var currentFocusableIndex = activeElement !== void 0 ? correctedNodes.indexOf(activeElement) : -1;
	var previousFocusableIndex = lastNode ? correctedNodes.indexOf(lastNode) : currentFocusableIndex;
	var tabbableNodes = correctedNodes.filter(function(node) {
		return node.tabIndex >= 0;
	});
	var currentTabbableIndex = activeElement !== void 0 ? tabbableNodes.indexOf(activeElement) : -1;
	var previousTabbableIndex = lastNode ? tabbableNodes.indexOf(lastNode) : currentTabbableIndex;
	var focusIndexDiff = currentTabbableIndex >= 0 && previousTabbableIndex >= 0 ? previousTabbableIndex - currentTabbableIndex : previousFocusableIndex - currentFocusableIndex;
	if (!indexDiff && lastNodeInside >= 0) return lastNodeInside;
	if (innerTabbables.length === 0) return lastNodeInside;
	var returnFirstNode = pickFocusable(innerNodes, innerTabbables[0]);
	var returnLastNode = pickFocusable(innerNodes, innerTabbables[innerTabbables.length - 1]);
	if (activeIndex <= firstNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) return returnLastNode;
	if (activeIndex >= lastNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) return returnFirstNode;
	if (indexDiff && Math.abs(focusIndexDiff) > 1) return lastNodeInside;
	if (activeIndex <= firstNodeIndex) return returnLastNode;
	if (activeIndex > lastNodeIndex) return returnFirstNode;
	if (indexDiff) {
		if (Math.abs(indexDiff) > 1) return lastNodeInside;
		return (cnt + lastNodeInside + indexDiff) % cnt;
	}
	return void 0;
};

//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/auto-focus.js
var findAutoFocused = function(autoFocusables) {
	return function(node) {
		var _a;
		var autofocus = (_a = getDataset(node)) === null || _a === void 0 ? void 0 : _a.autofocus;
		return node.autofocus || autofocus !== void 0 && autofocus !== "false" || autoFocusables.indexOf(node) >= 0;
	};
};
var pickAutofocus = function(nodesIndexes, orderedNodes, groups) {
	var nodes = nodesIndexes.map(function(_a) {
		var node = _a.node;
		return node;
	});
	var autoFocusable = filterAutoFocusable(nodes.filter(findAutoFocused(groups)));
	if (autoFocusable && autoFocusable.length) return pickFirstFocus(autoFocusable);
	return pickFirstFocus(filterAutoFocusable(orderedNodes));
};

//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/utils/parenting.js
var getParents = function(node, parents) {
	if (parents === void 0) parents = [];
	parents.push(node);
	if (node.parentNode) getParents(node.parentNode.host || node.parentNode, parents);
	return parents;
};
/**
* finds a parent for both nodeA and nodeB
* @param nodeA
* @param nodeB
* @returns {boolean|*}
*/
var getCommonParent = function(nodeA, nodeB) {
	var parentsA = getParents(nodeA);
	var parentsB = getParents(nodeB);
	for (var i = 0; i < parentsA.length; i += 1) {
		var currentParent = parentsA[i];
		if (parentsB.indexOf(currentParent) >= 0) return currentParent;
	}
	return false;
};
var getTopCommonParent = function(baseActiveElement, leftEntry, rightEntries) {
	var activeElements = asArray(baseActiveElement);
	var leftEntries = asArray(leftEntry);
	var activeElement = activeElements[0];
	var topCommon = false;
	leftEntries.filter(Boolean).forEach(function(entry) {
		topCommon = getCommonParent(topCommon || entry, entry) || topCommon;
		rightEntries.filter(Boolean).forEach(function(subEntry) {
			var common = getCommonParent(activeElement, subEntry);
			if (common) if (!topCommon || contains$2(common, topCommon)) topCommon = common;
			else topCommon = getCommonParent(common, topCommon);
		});
	});
	return topCommon;
};
/**
* return list of nodes which are expected to be autofocused inside a given top nodes
* @param entries
* @param visibilityCache
*/
var allParentAutofocusables = function(entries, visibilityCache) {
	return entries.reduce(function(acc, node) {
		return acc.concat(parentAutofocusables(node, visibilityCache));
	}, []);
};

//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/focusSolver.js
var reorderNodes = function(srcNodes, dstNodes) {
	var remap = /* @__PURE__ */ new Map();
	dstNodes.forEach(function(entity) {
		return remap.set(entity.node, entity);
	});
	return srcNodes.map(function(node) {
		return remap.get(node);
	}).filter(isDefined);
};
/**
* contains the main logic of the `focus-lock` package.
*
* ! you probably dont need this function !
*
* given top node(s) and the last active element returns the element to be focused next
* @returns element which should be focused to move focus inside
* @param topNode
* @param lastNode
*/
var focusSolver = function(topNode, lastNode) {
	var activeElement = getActiveElement(asArray(topNode).length > 0 ? document : getFirst(topNode).ownerDocument);
	var entries = getAllAffectedNodes(topNode).filter(isNotAGuard);
	var commonParent = getTopCommonParent(activeElement || topNode, topNode, entries);
	var visibilityCache = /* @__PURE__ */ new Map();
	var anyFocusable = getFocusableNodes(entries, visibilityCache);
	var innerElements = anyFocusable.filter(function(_a) {
		var node = _a.node;
		return isNotAGuard(node);
	});
	if (!innerElements[0]) return void 0;
	var outerNodes = getFocusableNodes([commonParent], visibilityCache).map(function(_a) {
		var node = _a.node;
		return node;
	});
	var orderedInnerElements = reorderNodes(outerNodes, innerElements);
	var innerFocusables = orderedInnerElements.map(function(_a) {
		var node = _a.node;
		return node;
	});
	var innerTabbable = orderedInnerElements.filter(function(_a) {
		var tabIndex = _a.tabIndex;
		return tabIndex >= 0;
	}).map(function(_a) {
		var node = _a.node;
		return node;
	});
	var newId = newFocus(innerFocusables, innerTabbable, outerNodes, activeElement, lastNode);
	if (newId === NEW_FOCUS) {
		var focusNode = pickAutofocus(anyFocusable, innerTabbable, allParentAutofocusables(entries, visibilityCache)) || pickAutofocus(anyFocusable, innerFocusables, allParentAutofocusables(entries, visibilityCache));
		if (focusNode) return { node: focusNode };
		else {
			console.warn("focus-lock: cannot find any node to move focus into");
			return void 0;
		}
	}
	if (newId === void 0) return newId;
	return orderedInnerElements[newId];
};

//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/focusables.js
/**
* traverses all related nodes (including groups) returning a list of all nodes(outer and internal) with meta information
* This is low-level API!
* @returns list of focusable elements inside a given top(!) node.
* @see {@link getFocusableNodes} providing a simpler API
*/
var expandFocusableNodes = function(topNode) {
	var entries = getAllAffectedNodes(topNode).filter(isNotAGuard);
	var commonParent = getTopCommonParent(topNode, topNode, entries);
	var outerNodes = orderByTabIndex(getFocusables([commonParent], true), true, true);
	var innerElements = getFocusables(entries, false);
	return outerNodes.map(function(_a) {
		var node = _a.node, index = _a.index;
		return {
			node,
			index,
			lockItem: innerElements.indexOf(node) >= 0,
			guard: isGuard(node)
		};
	});
};

//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/commands.js
var focusOn = function(target, focusOptions) {
	if (!target) return;
	if ("focus" in target) target.focus(focusOptions);
	if ("contentWindow" in target && target.contentWindow) target.contentWindow.focus();
};

//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/moveFocusInside.js
var guardCount = 0;
var lockDisabled = false;
/**
* The main functionality of the focus-lock package
*
* Contains focus at a given node.
* The last focused element will help to determine which element(first or last) should be focused.
* The found element will be focused.
*
* This is one time action (move), not a persistent focus-lock
*
* HTML markers (see {@link import('./constants').FOCUS_AUTO} constants) can control autofocus
* @see {@link focusSolver} for the same functionality without autofocus
*/
var moveFocusInside = function(topNode, lastNode, options$1) {
	if (options$1 === void 0) options$1 = {};
	var focusable = focusSolver(topNode, lastNode);
	if (lockDisabled) return;
	if (focusable) {
		/** +FOCUS-FIGHTING prevention **/
		if (guardCount > 2) {
			console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting");
			lockDisabled = true;
			setTimeout(function() {
				lockDisabled = false;
			}, 1);
			return;
		}
		guardCount++;
		focusOn(focusable.node, options$1.focusOptions);
		guardCount--;
	}
};

//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/return-focus.js
function weakRef(value) {
	if (!value) return null;
	if (typeof WeakRef === "undefined") return function() {
		return value || null;
	};
	var w = value ? new WeakRef(value) : null;
	return function() {
		return (w === null || w === void 0 ? void 0 : w.deref()) || null;
	};
}
var recordElementLocation = function(element) {
	if (!element) return null;
	var stack = [];
	var currentElement = element;
	while (currentElement && currentElement !== document.body) {
		stack.push({
			current: weakRef(currentElement),
			parent: weakRef(currentElement.parentElement),
			left: weakRef(currentElement.previousElementSibling),
			right: weakRef(currentElement.nextElementSibling)
		});
		currentElement = currentElement.parentElement;
	}
	return {
		element: weakRef(element),
		stack,
		ownerDocument: element.ownerDocument
	};
};
var restoreFocusTo = function(location) {
	var _a, _b, _c, _d, _e;
	if (!location) return void 0;
	var stack = location.stack, ownerDocument = location.ownerDocument;
	var visibilityCache = /* @__PURE__ */ new Map();
	for (var _i = 0, stack_1 = stack; _i < stack_1.length; _i++) {
		var line = stack_1[_i];
		var parent_1 = (_a = line.parent) === null || _a === void 0 ? void 0 : _a.call(line);
		if (parent_1 && ownerDocument.contains(parent_1)) {
			var left$1 = (_b = line.left) === null || _b === void 0 ? void 0 : _b.call(line);
			var savedCurrent = line.current();
			var current = parent_1.contains(savedCurrent) ? savedCurrent : void 0;
			var right$1 = (_c = line.right) === null || _c === void 0 ? void 0 : _c.call(line);
			var focusables = getTabbableNodes([parent_1], visibilityCache);
			var aim = (_e = (_d = current !== null && current !== void 0 ? current : left$1 === null || left$1 === void 0 ? void 0 : left$1.nextElementSibling) !== null && _d !== void 0 ? _d : right$1) !== null && _e !== void 0 ? _e : left$1;
			while (aim) {
				for (var _f = 0, focusables_1 = focusables; _f < focusables_1.length; _f++) {
					var focusable = focusables_1[_f];
					if (aim === null || aim === void 0 ? void 0 : aim.contains(focusable.node)) return focusable.node;
				}
				aim = aim.nextElementSibling;
			}
			if (focusables.length) return focusables[0].node;
		}
	}
	return void 0;
};
/**
* Captures the current focused element to restore focus as close as possible in the future
* Handles situations where the focused element is removed from the DOM or no longer focusable
* moving focus to the closest focusable element
* @param targetElement - element where focus should be restored
* @returns a function returning a new element to focus
*/
var captureFocusRestore = function(targetElement) {
	var location = recordElementLocation(targetElement);
	return function() {
		return restoreFocusTo(location);
	};
};

//#endregion
//#region node_modules/.pnpm/focus-lock@1.3.6/node_modules/focus-lock/dist/es2015/sibling.js
/**
* for a given `element` in a given `scope` returns focusable siblings
* @param element - base element
* @param scope - common parent. Can be document, but better to narrow it down for performance reasons
* @returns {prev,next} - references to a focusable element before and after
* @returns undefined - if operation is not applicable
*/
var getRelativeFocusable = function(element, scope, useTabbables) {
	if (!element || !scope) {
		console.error("no element or scope given");
		return {};
	}
	var shards = asArray(scope);
	if (shards.every(function(shard) {
		return !contains$2(shard, element);
	})) {
		console.error("Active element is not contained in the scope");
		return {};
	}
	var focusables = useTabbables ? getTabbableNodes(shards, /* @__PURE__ */ new Map()) : getFocusableNodes(shards, /* @__PURE__ */ new Map());
	var current = focusables.findIndex(function(_a) {
		var node = _a.node;
		return node === element;
	});
	if (current === -1) return void 0;
	return {
		prev: focusables[current - 1],
		next: focusables[current + 1],
		first: focusables[0],
		last: focusables[focusables.length - 1]
	};
};
var getBoundary = function(shards, useTabbables) {
	var set = useTabbables ? getTabbableNodes(asArray(shards), /* @__PURE__ */ new Map()) : getFocusableNodes(asArray(shards), /* @__PURE__ */ new Map());
	return {
		first: set[0],
		last: set[set.length - 1]
	};
};
var defaultOptions = function(options$1) {
	return Object.assign({
		scope: document.body,
		cycle: true,
		onlyTabbable: true
	}, options$1);
};
var moveFocus = function(fromElement, options$1, cb) {
	if (options$1 === void 0) options$1 = {};
	var newOptions = defaultOptions(options$1);
	var solution = getRelativeFocusable(fromElement, newOptions.scope, newOptions.onlyTabbable);
	if (!solution) return;
	var target = cb(solution, newOptions.cycle);
	if (target) focusOn(target.node, newOptions.focusOptions);
};
/**
* focuses next element in the tab-order
* @param fromElement - common parent to scope active element search or tab cycle order
* @param {FocusNextOptions} [options] - focus options
*/
var focusNextElement = function(fromElement, options$1) {
	if (options$1 === void 0) options$1 = {};
	moveFocus(fromElement, options$1, function(_a, cycle) {
		var next = _a.next, first = _a.first;
		return next || cycle && first;
	});
};
/**
* focuses prev element in the tab order
* @param fromElement - common parent to scope active element search or tab cycle order
* @param {FocusNextOptions} [options] - focus options
*/
var focusPrevElement = function(fromElement, options$1) {
	if (options$1 === void 0) options$1 = {};
	moveFocus(fromElement, options$1, function(_a, cycle) {
		var prev = _a.prev, last = _a.last;
		return prev || cycle && last;
	});
};
var pickBoundary = function(scope, options$1, what) {
	var _a;
	var boundary = getBoundary(scope, (_a = options$1.onlyTabbable) !== null && _a !== void 0 ? _a : true);
	var node = boundary[what];
	if (node) focusOn(node.node, options$1.focusOptions);
};
/**
* focuses first element in the tab-order
* @param {FocusNextOptions} options - focus options
*/
var focusFirstElement = function(scope, options$1) {
	if (options$1 === void 0) options$1 = {};
	pickBoundary(scope, options$1, "first");
};
/**
* focuses last element in the tab order
* @param {FocusNextOptions} options - focus options
*/
var focusLastElement = function(scope, options$1) {
	if (options$1 === void 0) options$1 = {};
	pickBoundary(scope, options$1, "last");
};

//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.6_@types+react@19.1.12_react@19.1.1/node_modules/react-focus-lock/dist/es2015/util.js
function deferAction(action) {
	setTimeout(action, 1);
}
var extractRef$1 = function extractRef$2(ref) {
	return ref && "current" in ref ? ref.current : ref;
};

//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.6_@types+react@19.1.12_react@19.1.1/node_modules/react-focus-lock/dist/es2015/Trap.js
var focusOnBody = function focusOnBody$1() {
	return document && document.activeElement === document.body;
};
var isFreeFocus = function isFreeFocus$1() {
	return focusOnBody() || focusIsHidden();
};
var lastActiveTrap = null;
var lastActiveFocus = null;
var tryRestoreFocus = function tryRestoreFocus$1() {
	return null;
};
var lastPortaledElement = null;
var focusWasOutsideWindow = false;
var windowFocused = false;
var defaultWhitelist = function defaultWhitelist$1() {
	return true;
};
var focusWhitelisted = function focusWhitelisted$1(activeElement) {
	return (lastActiveTrap.whiteList || defaultWhitelist)(activeElement);
};
var recordPortal = function recordPortal$1(observerNode, portaledElement) {
	lastPortaledElement = {
		observerNode,
		portaledElement
	};
};
var focusIsPortaledPair = function focusIsPortaledPair$1(element) {
	return lastPortaledElement && lastPortaledElement.portaledElement === element;
};
function autoGuard(startIndex, end$1, step, allNodes) {
	var lastGuard = null;
	var i = startIndex;
	do {
		var item = allNodes[i];
		if (item.guard) {
			if (item.node.dataset.focusAutoGuard) lastGuard = item;
		} else if (item.lockItem) {
			if (i !== startIndex) return;
			lastGuard = null;
		} else break;
	} while ((i += step) !== end$1);
	if (lastGuard) lastGuard.node.tabIndex = 0;
}
var focusWasOutside = function focusWasOutside$1(crossFrameOption) {
	if (crossFrameOption) return Boolean(focusWasOutsideWindow);
	return focusWasOutsideWindow === "meanwhile";
};
var checkInHost = function checkInHost$1(check, el, boundary) {
	return el && (el.host === check && (!el.activeElement || boundary.contains(el.activeElement)) || el.parentNode && checkInHost$1(check, el.parentNode, boundary));
};
var withinHost = function withinHost$1(activeElement, workingArea) {
	return workingArea.some(function(area) {
		return checkInHost(activeElement, area, area);
	});
};
var getNodeFocusables = function getNodeFocusables$1(nodes) {
	return getFocusableNodes(nodes, /* @__PURE__ */ new Map());
};
var isNotFocusable = function isNotFocusable$1(node) {
	return !getNodeFocusables([node.parentNode]).some(function(el) {
		return el.node === node;
	});
};
var activateTrap = function activateTrap$1() {
	var result = false;
	if (lastActiveTrap) {
		var _lastActiveTrap = lastActiveTrap, observed = _lastActiveTrap.observed, persistentFocus = _lastActiveTrap.persistentFocus, autoFocus = _lastActiveTrap.autoFocus, shards = _lastActiveTrap.shards, crossFrame = _lastActiveTrap.crossFrame, focusOptions = _lastActiveTrap.focusOptions, noFocusGuards = _lastActiveTrap.noFocusGuards;
		var workingNode = observed || lastPortaledElement && lastPortaledElement.portaledElement;
		if (focusOnBody() && lastActiveFocus && lastActiveFocus !== document.body) {
			if (!document.body.contains(lastActiveFocus) || isNotFocusable(lastActiveFocus)) {
				var newTarget = tryRestoreFocus();
				if (newTarget) newTarget.focus();
			}
		}
		var activeElement = document && document.activeElement;
		if (workingNode) {
			var workingArea = [workingNode].concat(shards.map(extractRef$1).filter(Boolean));
			var shouldForceRestoreFocus = function shouldForceRestoreFocus$1() {
				if (!focusWasOutside(crossFrame) || !noFocusGuards || !lastActiveFocus || windowFocused) return false;
				var nodes = getNodeFocusables(workingArea);
				var lastIndex = nodes.findIndex(function(_ref$1) {
					var node = _ref$1.node;
					return node === lastActiveFocus;
				});
				return lastIndex === 0 || lastIndex === nodes.length - 1;
			};
			if (!activeElement || focusWhitelisted(activeElement)) {
				if (persistentFocus || shouldForceRestoreFocus() || !isFreeFocus() || !lastActiveFocus && autoFocus) {
					if (workingNode && !(focusInside(workingArea) || activeElement && withinHost(activeElement, workingArea) || focusIsPortaledPair(activeElement, workingNode))) if (document && !lastActiveFocus && activeElement && !autoFocus) {
						if (activeElement.blur) activeElement.blur();
						document.body.focus();
					} else {
						result = moveFocusInside(workingArea, lastActiveFocus, { focusOptions });
						lastPortaledElement = {};
					}
					lastActiveFocus = document && document.activeElement;
					if (lastActiveFocus !== document.body) tryRestoreFocus = captureFocusRestore(lastActiveFocus);
					focusWasOutsideWindow = false;
				}
			}
			if (document && activeElement !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
				var newActiveElement = document && document.activeElement;
				var allNodes = expandFocusableNodes(workingArea);
				var focusedIndex = allNodes.map(function(_ref2) {
					var node = _ref2.node;
					return node;
				}).indexOf(newActiveElement);
				if (focusedIndex > -1) {
					allNodes.filter(function(_ref3) {
						var guard = _ref3.guard, node = _ref3.node;
						return guard && node.dataset.focusAutoGuard;
					}).forEach(function(_ref4) {
						var node = _ref4.node;
						return node.removeAttribute("tabIndex");
					});
					autoGuard(focusedIndex, allNodes.length, 1, allNodes);
					autoGuard(focusedIndex, -1, -1, allNodes);
				}
			}
		}
	}
	return result;
};
var onTrap = function onTrap$1(event) {
	if (activateTrap() && event) {
		event.stopPropagation();
		event.preventDefault();
	}
};
var onBlur = function onBlur$1() {
	return deferAction(activateTrap);
};
var onFocus = function onFocus$1(event) {
	var source = event.target;
	var currentNode = event.currentTarget;
	if (!currentNode.contains(source)) recordPortal(currentNode, source);
};
var FocusWatcher = function FocusWatcher$1() {
	return null;
};
var FocusTrap$1 = function FocusTrap$2(_ref5) {
	var children = _ref5.children;
	return /* @__PURE__ */ import_react.createElement("div", {
		onBlur,
		onFocus
	}, children);
};
FocusTrap$1.propTypes = {};
var onWindowFocus = function onWindowFocus$2() {
	windowFocused = true;
};
var onWindowBlur = function onWindowBlur$2() {
	windowFocused = false;
	focusWasOutsideWindow = "just";
	deferAction(function() {
		focusWasOutsideWindow = "meanwhile";
	});
};
var attachHandler = function attachHandler$1() {
	document.addEventListener("focusin", onTrap);
	document.addEventListener("focusout", onBlur);
	window.addEventListener("focus", onWindowFocus);
	window.addEventListener("blur", onWindowBlur);
};
var detachHandler = function detachHandler$1() {
	document.removeEventListener("focusin", onTrap);
	document.removeEventListener("focusout", onBlur);
	window.removeEventListener("focus", onWindowFocus);
	window.removeEventListener("blur", onWindowBlur);
};
function reducePropsToState(propsList) {
	return propsList.filter(function(_ref6) {
		var disabled = _ref6.disabled;
		return !disabled;
	});
}
var focusLockAPI = {
	moveFocusInside,
	focusInside,
	focusNextElement,
	focusPrevElement,
	focusFirstElement,
	focusLastElement,
	captureFocusRestore
};
function handleStateChangeOnClient(traps) {
	var trap = traps.slice(-1)[0];
	if (trap && !lastActiveTrap) attachHandler();
	var lastTrap = lastActiveTrap;
	var sameTrap = lastTrap && trap && trap.id === lastTrap.id;
	lastActiveTrap = trap;
	if (lastTrap && !sameTrap) {
		lastTrap.onDeactivation();
		if (!traps.filter(function(_ref7) {
			var id$2 = _ref7.id;
			return id$2 === lastTrap.id;
		}).length) lastTrap.returnFocus(!trap);
	}
	if (trap) {
		lastActiveFocus = null;
		if (!sameTrap || lastTrap.observed !== trap.observed) trap.onActivation(focusLockAPI);
		activateTrap(true);
		deferAction(activateTrap);
	} else {
		detachHandler();
		lastActiveFocus = null;
	}
}
mediumFocus.assignSyncMedium(onFocus);
mediumBlur.assignMedium(onBlur);
mediumEffect.assignMedium(function(cb) {
	return cb(focusLockAPI);
});
var Trap_default = index_es_default(reducePropsToState, handleStateChangeOnClient)(FocusWatcher);

//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.6_@types+react@19.1.12_react@19.1.1/node_modules/react-focus-lock/dist/es2015/Combination.js
var FocusLockCombination = /* @__PURE__ */ (0, import_react.forwardRef)(function FocusLockUICombination(props, ref) {
	return /* @__PURE__ */ import_react.createElement(Lock_default, _extends({
		sideCar: Trap_default,
		ref
	}, props));
}), _ref = Lock_default.propTypes || {};
_ref.sideCar;
_objectWithoutPropertiesLoose(_ref, ["sideCar"]);
FocusLockCombination.propTypes = {};
var Combination_default$1 = FocusLockCombination;

//#endregion
//#region node_modules/.pnpm/react-focus-lock@2.13.6_@types+react@19.1.12_react@19.1.1/node_modules/react-focus-lock/dist/es2015/index.js
var es2015_default = Combination_default$1;

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/focus-lock/focus-lock.mjs
const FocusTrap = es2015_default.default ?? es2015_default;
const FocusLock = (props) => {
	const { initialFocusRef, finalFocusRef, contentRef, restoreFocus, children, isDisabled, autoFocus, persistentFocus, lockFocusAcrossFrames } = props;
	const onActivation = (0, import_react.useCallback)(() => {
		if (initialFocusRef?.current) initialFocusRef.current.focus();
		else if (contentRef?.current) {
			const focusables = getAllFocusable(contentRef.current);
			if (focusables.length === 0) requestAnimationFrame(() => {
				contentRef.current?.focus();
			});
		}
	}, [initialFocusRef, contentRef]);
	const onDeactivation = (0, import_react.useCallback)(() => {
		finalFocusRef?.current?.focus();
	}, [finalFocusRef]);
	const returnFocus = restoreFocus && !finalFocusRef;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusTrap, {
		crossFrame: lockFocusAcrossFrames,
		persistentFocus,
		autoFocus,
		disabled: isDisabled,
		onActivation,
		onDeactivation,
		returnFocus,
		children
	});
};
FocusLock.displayName = "FocusLock";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/form-control/form-label.mjs
const FormLabel = forwardRef(function FormLabel2(passedProps, ref) {
	const styles = useStyleConfig("FormLabel", passedProps);
	const props = omitThemingProps(passedProps);
	const { className, children, requiredIndicator = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RequiredIndicator, {}), optionalIndicator = null,...rest } = props;
	const field = useFormControlContext();
	const ownProps = field?.getLabelProps(rest, ref) ?? {
		ref,
		...rest
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(chakra.label, {
		...ownProps,
		className: cx("chakra-form__label", props.className),
		__css: {
			display: "block",
			textAlign: "start",
			...styles
		},
		children: [children, field?.isRequired ? requiredIndicator : optionalIndicator]
	});
});
FormLabel.displayName = "FormLabel";
const RequiredIndicator = forwardRef(function RequiredIndicator2(props, ref) {
	const field = useFormControlContext();
	const styles = useFormControlStyles();
	if (!field?.isRequired) return null;
	const className = cx("chakra-form__required-indicator", props.className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.span, {
		...field?.getRequiredIndicatorProps(props, ref),
		__css: styles.requiredIndicator,
		className
	});
});
RequiredIndicator.displayName = "RequiredIndicator";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/grid/grid.mjs
const Grid = forwardRef(function Grid2(props, ref) {
	const { templateAreas, gap, rowGap, columnGap, column, row, autoFlow, autoRows, templateRows, autoColumns, templateColumns,...rest } = props;
	const styles = {
		display: "grid",
		gridTemplateAreas: templateAreas,
		gridGap: gap,
		gridRowGap: rowGap,
		gridColumnGap: columnGap,
		gridAutoColumns: autoColumns,
		gridColumn: column,
		gridRow: row,
		gridAutoFlow: autoFlow,
		gridAutoRows: autoRows,
		gridTemplateRows: templateRows,
		gridTemplateColumns: templateColumns
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
		ref,
		__css: styles,
		...rest
	});
});
Grid.displayName = "Grid";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/grid/grid-item.mjs
function spanFn(span) {
	return mapResponsive(span, (value) => value === "auto" ? "auto" : `span ${value}/span ${value}`);
}
const GridItem = forwardRef(function GridItem2(props, ref) {
	const { area, colSpan, colStart, colEnd, rowEnd, rowSpan, rowStart,...rest } = props;
	const styles = compact({
		gridArea: area,
		gridColumn: spanFn(colSpan),
		gridRow: spanFn(rowSpan),
		gridColumnStart: colStart,
		gridColumnEnd: colEnd,
		gridRowStart: rowStart,
		gridRowEnd: rowEnd
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
		ref,
		__css: styles,
		...rest
	});
});
GridItem.displayName = "GridItem";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/input/input.mjs
const Input = forwardRef(function Input2(props, ref) {
	const { htmlSize,...rest } = props;
	const styles = useMultiStyleConfig("Input", rest);
	const ownProps = omitThemingProps(rest);
	const input = useFormControl(ownProps);
	const _className = cx("chakra-input", props.className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.input, {
		size: htmlSize,
		...input,
		__css: styles.field,
		ref,
		className: _className
	});
});
Input.displayName = "Input";
Input.id = "Input";

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [
	top,
	bottom,
	right,
	left
];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
	return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
	return acc.concat([
		placement,
		placement + "-" + start,
		placement + "-" + end
	]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [
	beforeRead,
	read,
	afterRead,
	beforeMain,
	main,
	afterMain,
	beforeWrite,
	write,
	afterWrite
];

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
	return element ? (element.nodeName || "").toLowerCase() : null;
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
	if (node == null) return window;
	if (node.toString() !== "[object Window]") {
		var ownerDocument = node.ownerDocument;
		return ownerDocument ? ownerDocument.defaultView || window : window;
	}
	return node;
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function isElement(node) {
	var OwnElement = getWindow(node).Element;
	return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
	var OwnElement = getWindow(node).HTMLElement;
	return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
	if (typeof ShadowRoot === "undefined") return false;
	var OwnElement = getWindow(node).ShadowRoot;
	return node instanceof OwnElement || node instanceof ShadowRoot;
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/applyStyles.js
function applyStyles(_ref$1) {
	var state = _ref$1.state;
	Object.keys(state.elements).forEach(function(name) {
		var style = state.styles[name] || {};
		var attributes = state.attributes[name] || {};
		var element = state.elements[name];
		if (!isHTMLElement(element) || !getNodeName(element)) return;
		Object.assign(element.style, style);
		Object.keys(attributes).forEach(function(name$1) {
			var value = attributes[name$1];
			if (value === false) element.removeAttribute(name$1);
			else element.setAttribute(name$1, value === true ? "" : value);
		});
	});
}
function effect$2(_ref2) {
	var state = _ref2.state;
	var initialStyles = {
		popper: {
			position: state.options.strategy,
			left: "0",
			top: "0",
			margin: "0"
		},
		arrow: { position: "absolute" },
		reference: {}
	};
	Object.assign(state.elements.popper.style, initialStyles.popper);
	state.styles = initialStyles;
	if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
	return function() {
		Object.keys(state.elements).forEach(function(name) {
			var element = state.elements[name];
			var attributes = state.attributes[name] || {};
			var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
			var style = styleProperties.reduce(function(style$1, property) {
				style$1[property] = "";
				return style$1;
			}, {});
			if (!isHTMLElement(element) || !getNodeName(element)) return;
			Object.assign(element.style, style);
			Object.keys(attributes).forEach(function(attribute) {
				element.removeAttribute(attribute);
			});
		});
	};
}
var applyStyles_default = {
	name: "applyStyles",
	enabled: true,
	phase: "write",
	fn: applyStyles,
	effect: effect$2,
	requires: ["computeStyles"]
};

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function getBasePlacement(placement) {
	return placement.split("-")[0];
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/math.js
var max = Math.max;
var min = Math.min;
var round = Math.round;

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
	var uaData = navigator.userAgentData;
	if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) return uaData.brands.map(function(item) {
		return item.brand + "/" + item.version;
	}).join(" ");
	return navigator.userAgent;
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function isLayoutViewport() {
	return !/^((?!chrome|android).)*safari/i.test(getUAString());
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
	if (includeScale === void 0) includeScale = false;
	if (isFixedStrategy === void 0) isFixedStrategy = false;
	var clientRect = element.getBoundingClientRect();
	var scaleX$1 = 1;
	var scaleY$1 = 1;
	if (includeScale && isHTMLElement(element)) {
		scaleX$1 = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
		scaleY$1 = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
	}
	var _ref$1 = isElement(element) ? getWindow(element) : window, visualViewport = _ref$1.visualViewport;
	var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
	var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX$1;
	var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY$1;
	var width = clientRect.width / scaleX$1;
	var height = clientRect.height / scaleY$1;
	return {
		width,
		height,
		top: y,
		right: x + width,
		bottom: y + height,
		left: x,
		x,
		y
	};
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
	var clientRect = getBoundingClientRect(element);
	var width = element.offsetWidth;
	var height = element.offsetHeight;
	if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
	if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
	return {
		x: element.offsetLeft,
		y: element.offsetTop,
		width,
		height
	};
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/contains.js
function contains$1(parent, child) {
	var rootNode = child.getRootNode && child.getRootNode();
	if (parent.contains(child)) return true;
	else if (rootNode && isShadowRoot(rootNode)) {
		var next = child;
		do {
			if (next && parent.isSameNode(next)) return true;
			next = next.parentNode || next.host;
		} while (next);
	}
	return false;
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function getComputedStyle$1(element) {
	return getWindow(element).getComputedStyle(element);
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function isTableElement(element) {
	return [
		"table",
		"td",
		"th"
	].indexOf(getNodeName(element)) >= 0;
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
	return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function getParentNode(element) {
	if (getNodeName(element) === "html") return element;
	return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
	if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") return null;
	return element.offsetParent;
}
function getContainingBlock(element) {
	var isFirefox = /firefox/i.test(getUAString());
	var isIE = /Trident/i.test(getUAString());
	if (isIE && isHTMLElement(element)) {
		var elementCss = getComputedStyle$1(element);
		if (elementCss.position === "fixed") return null;
	}
	var currentNode = getParentNode(element);
	if (isShadowRoot(currentNode)) currentNode = currentNode.host;
	while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
		var css$2 = getComputedStyle$1(currentNode);
		if (css$2.transform !== "none" || css$2.perspective !== "none" || css$2.contain === "paint" || ["transform", "perspective"].indexOf(css$2.willChange) !== -1 || isFirefox && css$2.willChange === "filter" || isFirefox && css$2.filter && css$2.filter !== "none") return currentNode;
		else currentNode = currentNode.parentNode;
	}
	return null;
}
function getOffsetParent(element) {
	var window$1 = getWindow(element);
	var offsetParent = getTrueOffsetParent(element);
	while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") offsetParent = getTrueOffsetParent(offsetParent);
	if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static")) return window$1;
	return offsetParent || getContainingBlock(element) || window$1;
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
	return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/within.js
function within(min$1, value, max$1) {
	return max(min$1, min(value, max$1));
}
function withinMaxClamp(min$1, value, max$1) {
	var v = within(min$1, value, max$1);
	return v > max$1 ? max$1 : v;
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	};
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
	return Object.assign({}, getFreshSideObject(), paddingObject);
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
	return keys.reduce(function(hashMap, key) {
		hashMap[key] = value;
		return hashMap;
	}, {});
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/arrow.js
var toPaddingObject = function toPaddingObject$1(padding, state) {
	padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, { placement: state.placement })) : padding;
	return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref$1) {
	var _state$modifiersData$;
	var state = _ref$1.state, name = _ref$1.name, options$1 = _ref$1.options;
	var arrowElement = state.elements.arrow;
	var popperOffsets$1 = state.modifiersData.popperOffsets;
	var basePlacement = getBasePlacement(state.placement);
	var axis = getMainAxisFromPlacement(basePlacement);
	var isVertical = [left, right].indexOf(basePlacement) >= 0;
	var len = isVertical ? "height" : "width";
	if (!arrowElement || !popperOffsets$1) return;
	var paddingObject = toPaddingObject(options$1.padding, state);
	var arrowRect = getLayoutRect(arrowElement);
	var minProp = axis === "y" ? top : left;
	var maxProp = axis === "y" ? bottom : right;
	var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets$1[axis] - state.rects.popper[len];
	var startDiff = popperOffsets$1[axis] - state.rects.reference[axis];
	var arrowOffsetParent = getOffsetParent(arrowElement);
	var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
	var centerToReference = endDiff / 2 - startDiff / 2;
	var min$1 = paddingObject[minProp];
	var max$1 = clientSize - arrowRect[len] - paddingObject[maxProp];
	var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
	var offset$1 = within(min$1, center, max$1);
	var axisProp = axis;
	state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset$1, _state$modifiersData$.centerOffset = offset$1 - center, _state$modifiersData$);
}
function effect$1(_ref2) {
	var state = _ref2.state, options$1 = _ref2.options;
	var _options$element = options$1.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
	if (arrowElement == null) return;
	if (typeof arrowElement === "string") {
		arrowElement = state.elements.popper.querySelector(arrowElement);
		if (!arrowElement) return;
	}
	if (!contains$1(state.elements.popper, arrowElement)) return;
	state.elements.arrow = arrowElement;
}
var arrow_default = {
	name: "arrow",
	enabled: true,
	phase: "main",
	fn: arrow,
	effect: effect$1,
	requires: ["popperOffsets"],
	requiresIfExists: ["preventOverflow"]
};

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
	return placement.split("-")[1];
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/computeStyles.js
var unsetSides = {
	top: "auto",
	right: "auto",
	bottom: "auto",
	left: "auto"
};
function roundOffsetsByDPR(_ref$1, win) {
	var x = _ref$1.x, y = _ref$1.y;
	var dpr = win.devicePixelRatio || 1;
	return {
		x: round(x * dpr) / dpr || 0,
		y: round(y * dpr) / dpr || 0
	};
}
function mapToStyles(_ref2) {
	var _Object$assign2;
	var popper$1 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
	var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
	var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
		x,
		y
	}) : {
		x,
		y
	};
	x = _ref3.x;
	y = _ref3.y;
	var hasX = offsets.hasOwnProperty("x");
	var hasY = offsets.hasOwnProperty("y");
	var sideX = left;
	var sideY = top;
	var win = window;
	if (adaptive) {
		var offsetParent = getOffsetParent(popper$1);
		var heightProp = "clientHeight";
		var widthProp = "clientWidth";
		if (offsetParent === getWindow(popper$1)) {
			offsetParent = getDocumentElement(popper$1);
			if (getComputedStyle$1(offsetParent).position !== "static" && position === "absolute") {
				heightProp = "scrollHeight";
				widthProp = "scrollWidth";
			}
		}
		offsetParent = offsetParent;
		if (placement === top || (placement === left || placement === right) && variation === end) {
			sideY = bottom;
			var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
			y -= offsetY - popperRect.height;
			y *= gpuAcceleration ? 1 : -1;
		}
		if (placement === left || (placement === top || placement === bottom) && variation === end) {
			sideX = right;
			var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
			x -= offsetX - popperRect.width;
			x *= gpuAcceleration ? 1 : -1;
		}
	}
	var commonStyles = Object.assign({ position }, adaptive && unsetSides);
	var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
		x,
		y
	}, getWindow(popper$1)) : {
		x,
		y
	};
	x = _ref4.x;
	y = _ref4.y;
	if (gpuAcceleration) {
		var _Object$assign;
		return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
	}
	return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
	var state = _ref5.state, options$1 = _ref5.options;
	var _options$gpuAccelerat = options$1.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options$1.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options$1.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
	var commonStyles = {
		placement: getBasePlacement(state.placement),
		variation: getVariation(state.placement),
		popper: state.elements.popper,
		popperRect: state.rects.popper,
		gpuAcceleration,
		isFixed: state.options.strategy === "fixed"
	};
	if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
		offsets: state.modifiersData.popperOffsets,
		position: state.options.strategy,
		adaptive,
		roundOffsets
	})));
	if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
		offsets: state.modifiersData.arrow,
		position: "absolute",
		adaptive: false,
		roundOffsets
	})));
	state.attributes.popper = Object.assign({}, state.attributes.popper, { "data-popper-placement": state.placement });
}
var computeStyles_default = {
	name: "computeStyles",
	enabled: true,
	phase: "beforeWrite",
	fn: computeStyles,
	data: {}
};

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/eventListeners.js
var passive = { passive: true };
function effect(_ref$1) {
	var state = _ref$1.state, instance = _ref$1.instance, options$1 = _ref$1.options;
	var _options$scroll = options$1.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options$1.resize, resize = _options$resize === void 0 ? true : _options$resize;
	var window$1 = getWindow(state.elements.popper);
	var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
	if (scroll) scrollParents.forEach(function(scrollParent) {
		scrollParent.addEventListener("scroll", instance.update, passive);
	});
	if (resize) window$1.addEventListener("resize", instance.update, passive);
	return function() {
		if (scroll) scrollParents.forEach(function(scrollParent) {
			scrollParent.removeEventListener("scroll", instance.update, passive);
		});
		if (resize) window$1.removeEventListener("resize", instance.update, passive);
	};
}
var eventListeners_default = {
	name: "eventListeners",
	enabled: true,
	phase: "write",
	fn: function fn() {},
	effect,
	data: {}
};

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash$1 = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function getOppositePlacement(placement) {
	return placement.replace(/left|right|bottom|top/g, function(matched) {
		return hash$1[matched];
	});
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var hash = {
	start: "end",
	end: "start"
};
function getOppositeVariationPlacement(placement) {
	return placement.replace(/start|end/g, function(matched) {
		return hash[matched];
	});
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function getWindowScroll(node) {
	var win = getWindow(node);
	var scrollLeft = win.pageXOffset;
	var scrollTop = win.pageYOffset;
	return {
		scrollLeft,
		scrollTop
	};
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
	return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function getViewportRect(element, strategy) {
	var win = getWindow(element);
	var html = getDocumentElement(element);
	var visualViewport = win.visualViewport;
	var width = html.clientWidth;
	var height = html.clientHeight;
	var x = 0;
	var y = 0;
	if (visualViewport) {
		width = visualViewport.width;
		height = visualViewport.height;
		var layoutViewport = isLayoutViewport();
		if (layoutViewport || !layoutViewport && strategy === "fixed") {
			x = visualViewport.offsetLeft;
			y = visualViewport.offsetTop;
		}
	}
	return {
		width,
		height,
		x: x + getWindowScrollBarX(element),
		y
	};
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
	var _element$ownerDocumen;
	var html = getDocumentElement(element);
	var winScroll = getWindowScroll(element);
	var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
	var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
	var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
	var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
	var y = -winScroll.scrollTop;
	if (getComputedStyle$1(body || html).direction === "rtl") x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
	return {
		width,
		height,
		x,
		y
	};
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function isScrollParent(element) {
	var _getComputedStyle = getComputedStyle$1(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
	return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function getScrollParent(node) {
	if ([
		"html",
		"body",
		"#document"
	].indexOf(getNodeName(node)) >= 0) return node.ownerDocument.body;
	if (isHTMLElement(node) && isScrollParent(node)) return node;
	return getScrollParent(getParentNode(node));
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
	var _element$ownerDocumen;
	if (list === void 0) list = [];
	var scrollParent = getScrollParent(element);
	var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
	var win = getWindow(scrollParent);
	var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
	var updatedList = list.concat(target);
	return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
	return Object.assign({}, rect, {
		left: rect.x,
		top: rect.y,
		right: rect.x + rect.width,
		bottom: rect.y + rect.height
	});
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element, strategy) {
	var rect = getBoundingClientRect(element, false, strategy === "fixed");
	rect.top = rect.top + element.clientTop;
	rect.left = rect.left + element.clientLeft;
	rect.bottom = rect.top + element.clientHeight;
	rect.right = rect.left + element.clientWidth;
	rect.width = element.clientWidth;
	rect.height = element.clientHeight;
	rect.x = rect.left;
	rect.y = rect.top;
	return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
	return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
	var clippingParents$1 = listScrollParents(getParentNode(element));
	var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle$1(element).position) >= 0;
	var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
	if (!isElement(clipperElement)) return [];
	return clippingParents$1.filter(function(clippingParent) {
		return isElement(clippingParent) && contains$1(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
	});
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
	var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
	var clippingParents$1 = [].concat(mainClippingParents, [rootBoundary]);
	var firstClippingParent = clippingParents$1[0];
	var clippingRect = clippingParents$1.reduce(function(accRect, clippingParent) {
		var rect = getClientRectFromMixedType(element, clippingParent, strategy);
		accRect.top = max(rect.top, accRect.top);
		accRect.right = min(rect.right, accRect.right);
		accRect.bottom = min(rect.bottom, accRect.bottom);
		accRect.left = max(rect.left, accRect.left);
		return accRect;
	}, getClientRectFromMixedType(element, firstClippingParent, strategy));
	clippingRect.width = clippingRect.right - clippingRect.left;
	clippingRect.height = clippingRect.bottom - clippingRect.top;
	clippingRect.x = clippingRect.left;
	clippingRect.y = clippingRect.top;
	return clippingRect;
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeOffsets.js
function computeOffsets(_ref$1) {
	var reference$1 = _ref$1.reference, element = _ref$1.element, placement = _ref$1.placement;
	var basePlacement = placement ? getBasePlacement(placement) : null;
	var variation = placement ? getVariation(placement) : null;
	var commonX = reference$1.x + reference$1.width / 2 - element.width / 2;
	var commonY = reference$1.y + reference$1.height / 2 - element.height / 2;
	var offsets;
	switch (basePlacement) {
		case top:
			offsets = {
				x: commonX,
				y: reference$1.y - element.height
			};
			break;
		case bottom:
			offsets = {
				x: commonX,
				y: reference$1.y + reference$1.height
			};
			break;
		case right:
			offsets = {
				x: reference$1.x + reference$1.width,
				y: commonY
			};
			break;
		case left:
			offsets = {
				x: reference$1.x - element.width,
				y: commonY
			};
			break;
		default: offsets = {
			x: reference$1.x,
			y: reference$1.y
		};
	}
	var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
	if (mainAxis != null) {
		var len = mainAxis === "y" ? "height" : "width";
		switch (variation) {
			case start:
				offsets[mainAxis] = offsets[mainAxis] - (reference$1[len] / 2 - element[len] / 2);
				break;
			case end:
				offsets[mainAxis] = offsets[mainAxis] + (reference$1[len] / 2 - element[len] / 2);
				break;
			default:
		}
	}
	return offsets;
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/detectOverflow.js
function detectOverflow(state, options$1) {
	if (options$1 === void 0) options$1 = {};
	var _options = options$1, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
	var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
	var altContext = elementContext === popper ? reference : popper;
	var popperRect = state.rects.popper;
	var element = state.elements[altBoundary ? altContext : elementContext];
	var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
	var referenceClientRect = getBoundingClientRect(state.elements.reference);
	var popperOffsets$1 = computeOffsets({
		reference: referenceClientRect,
		element: popperRect,
		strategy: "absolute",
		placement
	});
	var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets$1));
	var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
	var overflowOffsets = {
		top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
		bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
		left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
		right: elementClientRect.right - clippingClientRect.right + paddingObject.right
	};
	var offsetData = state.modifiersData.offset;
	if (elementContext === popper && offsetData) {
		var offset$1 = offsetData[placement];
		Object.keys(overflowOffsets).forEach(function(key) {
			var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
			var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
			overflowOffsets[key] += offset$1[axis] * multiply;
		});
	}
	return overflowOffsets;
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function computeAutoPlacement(state, options$1) {
	if (options$1 === void 0) options$1 = {};
	var _options = options$1, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
	var variation = getVariation(placement);
	var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement$1) {
		return getVariation(placement$1) === variation;
	}) : basePlacements;
	var allowedPlacements = placements$1.filter(function(placement$1) {
		return allowedAutoPlacements.indexOf(placement$1) >= 0;
	});
	if (allowedPlacements.length === 0) allowedPlacements = placements$1;
	var overflows = allowedPlacements.reduce(function(acc, placement$1) {
		acc[placement$1] = detectOverflow(state, {
			placement: placement$1,
			boundary,
			rootBoundary,
			padding
		})[getBasePlacement(placement$1)];
		return acc;
	}, {});
	return Object.keys(overflows).sort(function(a, b) {
		return overflows[a] - overflows[b];
	});
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
	if (getBasePlacement(placement) === auto) return [];
	var oppositePlacement = getOppositePlacement(placement);
	return [
		getOppositeVariationPlacement(placement),
		oppositePlacement,
		getOppositeVariationPlacement(oppositePlacement)
	];
}
function flip(_ref$1) {
	var state = _ref$1.state, options$1 = _ref$1.options, name = _ref$1.name;
	if (state.modifiersData[name]._skip) return;
	var _options$mainAxis = options$1.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options$1.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options$1.fallbackPlacements, padding = options$1.padding, boundary = options$1.boundary, rootBoundary = options$1.rootBoundary, altBoundary = options$1.altBoundary, _options$flipVariatio = options$1.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options$1.allowedAutoPlacements;
	var preferredPlacement = state.options.placement;
	var basePlacement = getBasePlacement(preferredPlacement);
	var isBasePlacement = basePlacement === preferredPlacement;
	var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
	var placements$1 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement$1) {
		return acc.concat(getBasePlacement(placement$1) === auto ? computeAutoPlacement(state, {
			placement: placement$1,
			boundary,
			rootBoundary,
			padding,
			flipVariations,
			allowedAutoPlacements
		}) : placement$1);
	}, []);
	var referenceRect = state.rects.reference;
	var popperRect = state.rects.popper;
	var checksMap = /* @__PURE__ */ new Map();
	var makeFallbackChecks = true;
	var firstFittingPlacement = placements$1[0];
	for (var i = 0; i < placements$1.length; i++) {
		var placement = placements$1[i];
		var _basePlacement = getBasePlacement(placement);
		var isStartVariation = getVariation(placement) === start;
		var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
		var len = isVertical ? "width" : "height";
		var overflow = detectOverflow(state, {
			placement,
			boundary,
			rootBoundary,
			altBoundary,
			padding
		});
		var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
		if (referenceRect[len] > popperRect[len]) mainVariationSide = getOppositePlacement(mainVariationSide);
		var altVariationSide = getOppositePlacement(mainVariationSide);
		var checks = [];
		if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
		if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
		if (checks.every(function(check) {
			return check;
		})) {
			firstFittingPlacement = placement;
			makeFallbackChecks = false;
			break;
		}
		checksMap.set(placement, checks);
	}
	if (makeFallbackChecks) {
		var numberOfChecks = flipVariations ? 3 : 1;
		var _loop = function _loop$1(_i$1) {
			var fittingPlacement = placements$1.find(function(placement$1) {
				var checks$1 = checksMap.get(placement$1);
				if (checks$1) return checks$1.slice(0, _i$1).every(function(check) {
					return check;
				});
			});
			if (fittingPlacement) {
				firstFittingPlacement = fittingPlacement;
				return "break";
			}
		};
		for (var _i = numberOfChecks; _i > 0; _i--) {
			var _ret = _loop(_i);
			if (_ret === "break") break;
		}
	}
	if (state.placement !== firstFittingPlacement) {
		state.modifiersData[name]._skip = true;
		state.placement = firstFittingPlacement;
		state.reset = true;
	}
}
var flip_default = {
	name: "flip",
	enabled: true,
	phase: "main",
	fn: flip,
	requiresIfExists: ["offset"],
	data: { _skip: false }
};

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/hide.js
function getSideOffsets(overflow, rect, preventedOffsets) {
	if (preventedOffsets === void 0) preventedOffsets = {
		x: 0,
		y: 0
	};
	return {
		top: overflow.top - rect.height - preventedOffsets.y,
		right: overflow.right - rect.width + preventedOffsets.x,
		bottom: overflow.bottom - rect.height + preventedOffsets.y,
		left: overflow.left - rect.width - preventedOffsets.x
	};
}
function isAnySideFullyClipped(overflow) {
	return [
		top,
		right,
		bottom,
		left
	].some(function(side) {
		return overflow[side] >= 0;
	});
}
function hide(_ref$1) {
	var state = _ref$1.state, name = _ref$1.name;
	var referenceRect = state.rects.reference;
	var popperRect = state.rects.popper;
	var preventedOffsets = state.modifiersData.preventOverflow;
	var referenceOverflow = detectOverflow(state, { elementContext: "reference" });
	var popperAltOverflow = detectOverflow(state, { altBoundary: true });
	var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
	var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
	var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
	var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
	state.modifiersData[name] = {
		referenceClippingOffsets,
		popperEscapeOffsets,
		isReferenceHidden,
		hasPopperEscaped
	};
	state.attributes.popper = Object.assign({}, state.attributes.popper, {
		"data-popper-reference-hidden": isReferenceHidden,
		"data-popper-escaped": hasPopperEscaped
	});
}
var hide_default = {
	name: "hide",
	enabled: true,
	phase: "main",
	requiresIfExists: ["preventOverflow"],
	fn: hide
};

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset$1) {
	var basePlacement = getBasePlacement(placement);
	var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
	var _ref$1 = typeof offset$1 === "function" ? offset$1(Object.assign({}, rects, { placement })) : offset$1, skidding = _ref$1[0], distance$1 = _ref$1[1];
	skidding = skidding || 0;
	distance$1 = (distance$1 || 0) * invertDistance;
	return [left, right].indexOf(basePlacement) >= 0 ? {
		x: distance$1,
		y: skidding
	} : {
		x: skidding,
		y: distance$1
	};
}
function offset(_ref2) {
	var state = _ref2.state, options$1 = _ref2.options, name = _ref2.name;
	var _options$offset = options$1.offset, offset$1 = _options$offset === void 0 ? [0, 0] : _options$offset;
	var data = placements.reduce(function(acc, placement) {
		acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset$1);
		return acc;
	}, {});
	var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
	if (state.modifiersData.popperOffsets != null) {
		state.modifiersData.popperOffsets.x += x;
		state.modifiersData.popperOffsets.y += y;
	}
	state.modifiersData[name] = data;
}
var offset_default = {
	name: "offset",
	enabled: true,
	phase: "main",
	requires: ["popperOffsets"],
	fn: offset
};

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function popperOffsets(_ref$1) {
	var state = _ref$1.state, name = _ref$1.name;
	state.modifiersData[name] = computeOffsets({
		reference: state.rects.reference,
		element: state.rects.popper,
		strategy: "absolute",
		placement: state.placement
	});
}
var popperOffsets_default = {
	name: "popperOffsets",
	enabled: true,
	phase: "read",
	fn: popperOffsets,
	data: {}
};

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
	return axis === "x" ? "y" : "x";
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function preventOverflow(_ref$1) {
	var state = _ref$1.state, options$1 = _ref$1.options, name = _ref$1.name;
	var _options$mainAxis = options$1.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options$1.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options$1.boundary, rootBoundary = options$1.rootBoundary, altBoundary = options$1.altBoundary, padding = options$1.padding, _options$tether = options$1.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options$1.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
	var overflow = detectOverflow(state, {
		boundary,
		rootBoundary,
		padding,
		altBoundary
	});
	var basePlacement = getBasePlacement(state.placement);
	var variation = getVariation(state.placement);
	var isBasePlacement = !variation;
	var mainAxis = getMainAxisFromPlacement(basePlacement);
	var altAxis = getAltAxis(mainAxis);
	var popperOffsets$1 = state.modifiersData.popperOffsets;
	var referenceRect = state.rects.reference;
	var popperRect = state.rects.popper;
	var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, { placement: state.placement })) : tetherOffset;
	var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
		mainAxis: tetherOffsetValue,
		altAxis: tetherOffsetValue
	} : Object.assign({
		mainAxis: 0,
		altAxis: 0
	}, tetherOffsetValue);
	var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
	var data = {
		x: 0,
		y: 0
	};
	if (!popperOffsets$1) return;
	if (checkMainAxis) {
		var _offsetModifierState$;
		var mainSide = mainAxis === "y" ? top : left;
		var altSide = mainAxis === "y" ? bottom : right;
		var len = mainAxis === "y" ? "height" : "width";
		var offset$1 = popperOffsets$1[mainAxis];
		var min$1 = offset$1 + overflow[mainSide];
		var max$1 = offset$1 - overflow[altSide];
		var additive = tether ? -popperRect[len] / 2 : 0;
		var minLen = variation === start ? referenceRect[len] : popperRect[len];
		var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
		var arrowElement = state.elements.arrow;
		var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
			width: 0,
			height: 0
		};
		var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
		var arrowPaddingMin = arrowPaddingObject[mainSide];
		var arrowPaddingMax = arrowPaddingObject[altSide];
		var arrowLen = within(0, referenceRect[len], arrowRect[len]);
		var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
		var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
		var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
		var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
		var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
		var tetherMin = offset$1 + minOffset - offsetModifierValue - clientOffset;
		var tetherMax = offset$1 + maxOffset - offsetModifierValue;
		var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset$1, tether ? max(max$1, tetherMax) : max$1);
		popperOffsets$1[mainAxis] = preventedOffset;
		data[mainAxis] = preventedOffset - offset$1;
	}
	if (checkAltAxis) {
		var _offsetModifierState$2;
		var _mainSide = mainAxis === "x" ? top : left;
		var _altSide = mainAxis === "x" ? bottom : right;
		var _offset = popperOffsets$1[altAxis];
		var _len = altAxis === "y" ? "height" : "width";
		var _min = _offset + overflow[_mainSide];
		var _max = _offset - overflow[_altSide];
		var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
		var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
		var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
		var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
		var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
		popperOffsets$1[altAxis] = _preventedOffset;
		data[altAxis] = _preventedOffset - _offset;
	}
	state.modifiersData[name] = data;
}
var preventOverflow_default = {
	name: "preventOverflow",
	enabled: true,
	phase: "main",
	fn: preventOverflow,
	requiresIfExists: ["offset"]
};

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
	return {
		scrollLeft: element.scrollLeft,
		scrollTop: element.scrollTop
	};
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
	if (node === getWindow(node) || !isHTMLElement(node)) return getWindowScroll(node);
	else return getHTMLElementScroll(node);
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function isElementScaled(element) {
	var rect = element.getBoundingClientRect();
	var scaleX$1 = round(rect.width) / element.offsetWidth || 1;
	var scaleY$1 = round(rect.height) / element.offsetHeight || 1;
	return scaleX$1 !== 1 || scaleY$1 !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
	if (isFixed === void 0) isFixed = false;
	var isOffsetParentAnElement = isHTMLElement(offsetParent);
	var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
	var documentElement = getDocumentElement(offsetParent);
	var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
	var scroll = {
		scrollLeft: 0,
		scrollTop: 0
	};
	var offsets = {
		x: 0,
		y: 0
	};
	if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
		if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) scroll = getNodeScroll(offsetParent);
		if (isHTMLElement(offsetParent)) {
			offsets = getBoundingClientRect(offsetParent, true);
			offsets.x += offsetParent.clientLeft;
			offsets.y += offsetParent.clientTop;
		} else if (documentElement) offsets.x = getWindowScrollBarX(documentElement);
	}
	return {
		x: rect.left + scroll.scrollLeft - offsets.x,
		y: rect.top + scroll.scrollTop - offsets.y,
		width: rect.width,
		height: rect.height
	};
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/orderModifiers.js
function order(modifiers) {
	var map = /* @__PURE__ */ new Map();
	var visited = /* @__PURE__ */ new Set();
	var result = [];
	modifiers.forEach(function(modifier) {
		map.set(modifier.name, modifier);
	});
	function sort(modifier) {
		visited.add(modifier.name);
		var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
		requires.forEach(function(dep) {
			if (!visited.has(dep)) {
				var depModifier = map.get(dep);
				if (depModifier) sort(depModifier);
			}
		});
		result.push(modifier);
	}
	modifiers.forEach(function(modifier) {
		if (!visited.has(modifier.name)) sort(modifier);
	});
	return result;
}
function orderModifiers(modifiers) {
	var orderedModifiers = order(modifiers);
	return modifierPhases.reduce(function(acc, phase) {
		return acc.concat(orderedModifiers.filter(function(modifier) {
			return modifier.phase === phase;
		}));
	}, []);
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn) {
	var pending;
	return function() {
		if (!pending) pending = new Promise(function(resolve) {
			Promise.resolve().then(function() {
				pending = void 0;
				resolve(fn());
			});
		});
		return pending;
	};
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
	var merged = modifiers.reduce(function(merged$1, current) {
		var existing = merged$1[current.name];
		merged$1[current.name] = existing ? Object.assign({}, existing, current, {
			options: Object.assign({}, existing.options, current.options),
			data: Object.assign({}, existing.data, current.data)
		}) : current;
		return merged$1;
	}, {});
	return Object.keys(merged).map(function(key) {
		return merged[key];
	});
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/createPopper.js
var DEFAULT_OPTIONS = {
	placement: "bottom",
	modifiers: [],
	strategy: "absolute"
};
function areValidElements() {
	for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
	return !args.some(function(element) {
		return !(element && typeof element.getBoundingClientRect === "function");
	});
}
function popperGenerator(generatorOptions) {
	if (generatorOptions === void 0) generatorOptions = {};
	var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers$1 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions$1 = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
	return function createPopper$1(reference$1, popper$1, options$1) {
		if (options$1 === void 0) options$1 = defaultOptions$1;
		var state = {
			placement: "bottom",
			orderedModifiers: [],
			options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions$1),
			modifiersData: {},
			elements: {
				reference: reference$1,
				popper: popper$1
			},
			attributes: {},
			styles: {}
		};
		var effectCleanupFns = [];
		var isDestroyed = false;
		var instance = {
			state,
			setOptions: function setOptions(setOptionsAction) {
				var options$2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
				cleanupModifierEffects();
				state.options = Object.assign({}, defaultOptions$1, state.options, options$2);
				state.scrollParents = {
					reference: isElement(reference$1) ? listScrollParents(reference$1) : reference$1.contextElement ? listScrollParents(reference$1.contextElement) : [],
					popper: listScrollParents(popper$1)
				};
				var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers$1, state.options.modifiers)));
				state.orderedModifiers = orderedModifiers.filter(function(m) {
					return m.enabled;
				});
				runModifierEffects();
				return instance.update();
			},
			forceUpdate: function forceUpdate() {
				if (isDestroyed) return;
				var _state$elements = state.elements, reference$2 = _state$elements.reference, popper$2 = _state$elements.popper;
				if (!areValidElements(reference$2, popper$2)) return;
				state.rects = {
					reference: getCompositeRect(reference$2, getOffsetParent(popper$2), state.options.strategy === "fixed"),
					popper: getLayoutRect(popper$2)
				};
				state.reset = false;
				state.placement = state.options.placement;
				state.orderedModifiers.forEach(function(modifier) {
					return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
				});
				for (var index = 0; index < state.orderedModifiers.length; index++) {
					if (state.reset === true) {
						state.reset = false;
						index = -1;
						continue;
					}
					var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
					if (typeof fn === "function") state = fn({
						state,
						options: _options,
						name,
						instance
					}) || state;
				}
			},
			update: debounce(function() {
				return new Promise(function(resolve) {
					instance.forceUpdate();
					resolve(state);
				});
			}),
			destroy: function destroy() {
				cleanupModifierEffects();
				isDestroyed = true;
			}
		};
		if (!areValidElements(reference$1, popper$1)) return instance;
		instance.setOptions(options$1).then(function(state$1) {
			if (!isDestroyed && options$1.onFirstUpdate) options$1.onFirstUpdate(state$1);
		});
		function runModifierEffects() {
			state.orderedModifiers.forEach(function(_ref$1) {
				var name = _ref$1.name, _ref$options = _ref$1.options, options$2 = _ref$options === void 0 ? {} : _ref$options, effect$3 = _ref$1.effect;
				if (typeof effect$3 === "function") {
					var cleanupFn = effect$3({
						state,
						name,
						instance,
						options: options$2
					});
					var noopFn = function noopFn$1() {};
					effectCleanupFns.push(cleanupFn || noopFn);
				}
			});
		}
		function cleanupModifierEffects() {
			effectCleanupFns.forEach(function(fn) {
				return fn();
			});
			effectCleanupFns = [];
		}
		return instance;
	};
}

//#endregion
//#region node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/popper.js
var defaultModifiers = [
	eventListeners_default,
	popperOffsets_default,
	computeStyles_default,
	applyStyles_default,
	offset_default,
	flip_default,
	preventOverflow_default,
	arrow_default,
	hide_default
];
var createPopper = /* @__PURE__ */ popperGenerator({ defaultModifiers });

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/popper/utils.mjs
const toVar = (value, fallback) => ({
	var: value,
	varRef: fallback ? `var(${value}, ${fallback})` : `var(${value})`
});
const cssVars = {
	arrowShadowColor: toVar("--popper-arrow-shadow-color"),
	arrowSize: toVar("--popper-arrow-size", "8px"),
	arrowSizeHalf: toVar("--popper-arrow-size-half"),
	arrowBg: toVar("--popper-arrow-bg"),
	transformOrigin: toVar("--popper-transform-origin"),
	arrowOffset: toVar("--popper-arrow-offset")
};
function getBoxShadow(placement) {
	if (placement.includes("top")) return `1px 1px 0px 0 var(--popper-arrow-shadow-color)`;
	if (placement.includes("bottom")) return `-1px -1px 0px 0 var(--popper-arrow-shadow-color)`;
	if (placement.includes("right")) return `-1px 1px 0px 0 var(--popper-arrow-shadow-color)`;
	if (placement.includes("left")) return `1px -1px 0px 0 var(--popper-arrow-shadow-color)`;
}
const transforms = {
	top: "bottom center",
	"top-start": "bottom left",
	"top-end": "bottom right",
	bottom: "top center",
	"bottom-start": "top left",
	"bottom-end": "top right",
	left: "right center",
	"left-start": "right top",
	"left-end": "right bottom",
	right: "left center",
	"right-start": "left top",
	"right-end": "left bottom"
};
const toTransformOrigin = (placement) => transforms[placement];
const defaultEventListeners = {
	scroll: true,
	resize: true
};
function getEventListenerOptions(value) {
	let eventListeners;
	if (typeof value === "object") eventListeners = {
		enabled: true,
		options: {
			...defaultEventListeners,
			...value
		}
	};
	else eventListeners = {
		enabled: value,
		options: defaultEventListeners
	};
	return eventListeners;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/popper/modifiers.mjs
const matchWidth = {
	name: "matchWidth",
	enabled: true,
	phase: "beforeWrite",
	requires: ["computeStyles"],
	fn: ({ state }) => {
		state.styles.popper.width = `${state.rects.reference.width}px`;
	},
	effect: ({ state }) => () => {
		const reference$1 = state.elements.reference;
		state.elements.popper.style.width = `${reference$1.offsetWidth}px`;
	}
};
const transformOrigin = {
	name: "transformOrigin",
	enabled: true,
	phase: "write",
	fn: ({ state }) => {
		setTransformOrigin(state);
	},
	effect: ({ state }) => () => {
		setTransformOrigin(state);
	}
};
const setTransformOrigin = (state) => {
	state.elements.popper.style.setProperty(cssVars.transformOrigin.var, toTransformOrigin(state.placement));
};
const positionArrow = {
	name: "positionArrow",
	enabled: true,
	phase: "afterWrite",
	fn: ({ state }) => {
		setArrowStyles(state);
	}
};
const setArrowStyles = (state) => {
	if (!state.placement) return;
	const overrides = getArrowStyle$1(state.placement);
	if (state.elements?.arrow && overrides) {
		Object.assign(state.elements.arrow.style, {
			[overrides.property]: overrides.value,
			width: cssVars.arrowSize.varRef,
			height: cssVars.arrowSize.varRef,
			zIndex: -1
		});
		const vars = {
			[cssVars.arrowSizeHalf.var]: `calc(${cssVars.arrowSize.varRef} / 2 - 1px)`,
			[cssVars.arrowOffset.var]: `calc(${cssVars.arrowSizeHalf.varRef} * -1)`
		};
		for (const property in vars) state.elements.arrow.style.setProperty(property, vars[property]);
	}
};
const getArrowStyle$1 = (placement) => {
	if (placement.startsWith("top")) return {
		property: "bottom",
		value: cssVars.arrowOffset.varRef
	};
	if (placement.startsWith("bottom")) return {
		property: "top",
		value: cssVars.arrowOffset.varRef
	};
	if (placement.startsWith("left")) return {
		property: "right",
		value: cssVars.arrowOffset.varRef
	};
	if (placement.startsWith("right")) return {
		property: "left",
		value: cssVars.arrowOffset.varRef
	};
};
const innerArrow = {
	name: "innerArrow",
	enabled: true,
	phase: "main",
	requires: ["arrow"],
	fn: ({ state }) => {
		setInnerArrowStyles(state);
	},
	effect: ({ state }) => () => {
		setInnerArrowStyles(state);
	}
};
const setInnerArrowStyles = (state) => {
	if (!state.elements.arrow) return;
	const inner = state.elements.arrow.querySelector("[data-popper-arrow-inner]");
	if (!inner) return;
	const boxShadow = getBoxShadow(state.placement);
	if (boxShadow) inner.style.setProperty("--popper-arrow-default-shadow", boxShadow);
	Object.assign(inner.style, {
		transform: "rotate(45deg)",
		background: cssVars.arrowBg.varRef,
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		position: "absolute",
		zIndex: "inherit",
		boxShadow: `var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))`
	});
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/popper/popper.placement.mjs
const logicals = {
	"start-start": {
		ltr: "left-start",
		rtl: "right-start"
	},
	"start-end": {
		ltr: "left-end",
		rtl: "right-end"
	},
	"end-start": {
		ltr: "right-start",
		rtl: "left-start"
	},
	"end-end": {
		ltr: "right-end",
		rtl: "left-end"
	},
	start: {
		ltr: "left",
		rtl: "right"
	},
	end: {
		ltr: "right",
		rtl: "left"
	}
};
const opposites = {
	"auto-start": "auto-end",
	"auto-end": "auto-start",
	"top-start": "top-end",
	"top-end": "top-start",
	"bottom-start": "bottom-end",
	"bottom-end": "bottom-start"
};
function getPopperPlacement(placement, dir = "ltr") {
	const value = logicals[placement]?.[dir] || placement;
	if (dir === "ltr") return value;
	return opposites[placement] ?? value;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/popper/use-popper.mjs
function usePopper(props = {}) {
	const { enabled = true, modifiers, placement: placementProp = "bottom", strategy = "absolute", arrowPadding = 8, eventListeners = true, offset: offset$1, gutter = 8, flip: flip$1 = true, boundary = "clippingParents", preventOverflow: preventOverflow$1 = true, matchWidth: matchWidth$1, direction = "ltr" } = props;
	const reference$1 = (0, import_react.useRef)(null);
	const popper$1 = (0, import_react.useRef)(null);
	const instance = (0, import_react.useRef)(null);
	const placement = getPopperPlacement(placementProp, direction);
	const cleanup = (0, import_react.useRef)(() => {});
	const setupPopper = (0, import_react.useCallback)(() => {
		if (!enabled || !reference$1.current || !popper$1.current) return;
		cleanup.current?.();
		instance.current = createPopper(reference$1.current, popper$1.current, {
			placement,
			modifiers: [
				innerArrow,
				positionArrow,
				transformOrigin,
				{
					...matchWidth,
					enabled: !!matchWidth$1
				},
				{
					name: "eventListeners",
					...getEventListenerOptions(eventListeners)
				},
				{
					name: "arrow",
					options: { padding: arrowPadding }
				},
				{
					name: "offset",
					options: { offset: offset$1 ?? [0, gutter] }
				},
				{
					name: "flip",
					enabled: !!flip$1,
					options: { padding: 8 }
				},
				{
					name: "preventOverflow",
					enabled: !!preventOverflow$1,
					options: { boundary }
				},
				...modifiers ?? []
			],
			strategy
		});
		instance.current.forceUpdate();
		cleanup.current = instance.current.destroy;
	}, [
		placement,
		enabled,
		modifiers,
		matchWidth$1,
		eventListeners,
		arrowPadding,
		offset$1,
		gutter,
		flip$1,
		preventOverflow$1,
		boundary,
		strategy
	]);
	(0, import_react.useEffect)(() => {
		return () => {
			if (!reference$1.current && !popper$1.current) {
				instance.current?.destroy();
				instance.current = null;
			}
		};
	}, []);
	const referenceRef = (0, import_react.useCallback)((node) => {
		reference$1.current = node;
		setupPopper();
	}, [setupPopper]);
	const getReferenceProps = (0, import_react.useCallback)((props2 = {}, ref = null) => ({
		...props2,
		ref: mergeRefs(referenceRef, ref)
	}), [referenceRef]);
	const popperRef = (0, import_react.useCallback)((node) => {
		popper$1.current = node;
		setupPopper();
	}, [setupPopper]);
	const getPopperProps = (0, import_react.useCallback)((props2 = {}, ref = null) => ({
		...props2,
		ref: mergeRefs(popperRef, ref),
		style: {
			...props2.style,
			position: strategy,
			minWidth: matchWidth$1 ? void 0 : "max-content",
			inset: "0 auto auto 0"
		}
	}), [
		strategy,
		popperRef,
		matchWidth$1
	]);
	const getArrowProps = (0, import_react.useCallback)((props2 = {}, ref = null) => {
		const { size, shadowColor, bg, style,...rest } = props2;
		return {
			...rest,
			ref,
			"data-popper-arrow": "",
			style: getArrowStyle(props2)
		};
	}, []);
	const getArrowInnerProps = (0, import_react.useCallback)((props2 = {}, ref = null) => ({
		...props2,
		ref,
		"data-popper-arrow-inner": ""
	}), []);
	return {
		update() {
			instance.current?.update();
		},
		forceUpdate() {
			instance.current?.forceUpdate();
		},
		transformOrigin: cssVars.transformOrigin.varRef,
		referenceRef,
		popperRef,
		getPopperProps,
		getArrowProps,
		getArrowInnerProps,
		getReferenceProps
	};
}
function getArrowStyle(props) {
	const { size, shadowColor, bg, style } = props;
	const computedStyle = {
		...style,
		position: "absolute"
	};
	if (size) computedStyle["--popper-arrow-size"] = size;
	if (shadowColor) computedStyle["--popper-arrow-shadow-color"] = shadowColor;
	if (bg) computedStyle["--popper-arrow-bg"] = bg;
	return computedStyle;
}

//#endregion
//#region node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var getDefaultParent = function(originalTarget) {
	if (typeof document === "undefined") return null;
	var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
	return sampleTarget.ownerDocument.body;
};
var counterMap = /* @__PURE__ */ new WeakMap();
var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
	return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
	return targets.map(function(target) {
		if (parent.contains(target)) return target;
		var correctedTarget = unwrapHost(target);
		if (correctedTarget && parent.contains(correctedTarget)) return correctedTarget;
		console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
		return null;
	}).filter(function(x) {
		return Boolean(x);
	});
};
/**
* Marks everything except given node(or nodes) as aria-hidden
* @param {Element | Element[]} originalTarget - elements to keep on the page
* @param [parentNode] - top element, defaults to document.body
* @param {String} [markerName] - a special attribute to mark every node
* @param {String} [controlAttribute] - html Attribute to control
* @return {Undo} undo command
*/
var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
	var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
	if (!markerMap[markerName]) markerMap[markerName] = /* @__PURE__ */ new WeakMap();
	var markerCounter = markerMap[markerName];
	var hiddenNodes = [];
	var elementsToKeep = /* @__PURE__ */ new Set();
	var elementsToStop = new Set(targets);
	var keep = function(el) {
		if (!el || elementsToKeep.has(el)) return;
		elementsToKeep.add(el);
		keep(el.parentNode);
	};
	targets.forEach(keep);
	var deep = function(parent) {
		if (!parent || elementsToStop.has(parent)) return;
		Array.prototype.forEach.call(parent.children, function(node) {
			if (elementsToKeep.has(node)) deep(node);
			else try {
				var attr = node.getAttribute(controlAttribute);
				var alreadyHidden = attr !== null && attr !== "false";
				var counterValue = (counterMap.get(node) || 0) + 1;
				var markerValue = (markerCounter.get(node) || 0) + 1;
				counterMap.set(node, counterValue);
				markerCounter.set(node, markerValue);
				hiddenNodes.push(node);
				if (counterValue === 1 && alreadyHidden) uncontrolledNodes.set(node, true);
				if (markerValue === 1) node.setAttribute(markerName, "true");
				if (!alreadyHidden) node.setAttribute(controlAttribute, "true");
			} catch (e) {
				console.error("aria-hidden: cannot operate on ", node, e);
			}
		});
	};
	deep(parentNode);
	elementsToKeep.clear();
	lockCount++;
	return function() {
		hiddenNodes.forEach(function(node) {
			var counterValue = counterMap.get(node) - 1;
			var markerValue = markerCounter.get(node) - 1;
			counterMap.set(node, counterValue);
			markerCounter.set(node, markerValue);
			if (!counterValue) {
				if (!uncontrolledNodes.has(node)) node.removeAttribute(controlAttribute);
				uncontrolledNodes.delete(node);
			}
			if (!markerValue) node.removeAttribute(markerName);
		});
		lockCount--;
		if (!lockCount) {
			counterMap = /* @__PURE__ */ new WeakMap();
			counterMap = /* @__PURE__ */ new WeakMap();
			uncontrolledNodes = /* @__PURE__ */ new WeakMap();
			markerMap = {};
		}
	};
};
/**
* Marks everything except given node(or nodes) as aria-hidden
* @param {Element | Element[]} originalTarget - elements to keep on the page
* @param [parentNode] - top element, defaults to document.body
* @param {String} [markerName] - a special attribute to mark every node
* @return {Undo} undo command
*/
var hideOthers = function(originalTarget, parentNode, markerName) {
	if (markerName === void 0) markerName = "data-aria-hidden";
	var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
	var activeParentNode = parentNode || getDefaultParent(originalTarget);
	if (!activeParentNode) return function() {
		return null;
	};
	targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live], script")));
	return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
};

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/modal/modal-manager.mjs
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
	enumerable: true,
	configurable: true,
	writable: true,
	value
}) : obj[key] = value;
var __publicField = (obj, key, value) => {
	__defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
	return value;
};
var ModalManager = class {
	constructor() {
		__publicField(this, "modals");
		this.modals = /* @__PURE__ */ new Set();
	}
	add(modal) {
		this.modals.add(modal);
		return this.modals.size;
	}
	remove(modal) {
		this.modals.delete(modal);
	}
	isTopModal(modal) {
		if (!modal) return false;
		const topModal = Array.from(this.modals)[this.modals.size - 1];
		return modal === topModal;
	}
};
const modalManager = new ModalManager();
function useModalManager(ref, isOpen) {
	const [index, setIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const node = ref.current;
		if (!node) return;
		if (isOpen) {
			const index2 = modalManager.add(node);
			setIndex(index2);
		}
		return () => {
			modalManager.remove(node);
			setIndex(0);
		};
	}, [isOpen, ref]);
	return index;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/modal/use-modal.mjs
function useModal(props) {
	const { isOpen, onClose, id: id$2, closeOnOverlayClick = true, closeOnEsc = true, useInert = true, onOverlayClick: onOverlayClickProp, onEsc } = props;
	const dialogRef = (0, import_react.useRef)(null);
	const overlayRef = (0, import_react.useRef)(null);
	const [dialogId, headerId, bodyId] = useIds(id$2, `chakra-modal`, `chakra-modal--header`, `chakra-modal--body`);
	useAriaHidden(dialogRef, isOpen && useInert);
	const index = useModalManager(dialogRef, isOpen);
	const mouseDownTarget = (0, import_react.useRef)(null);
	const onMouseDown = (0, import_react.useCallback)((event) => {
		mouseDownTarget.current = event.target;
	}, []);
	const onKeyDown = (0, import_react.useCallback)((event) => {
		if (event.key === "Escape") {
			event.stopPropagation();
			if (closeOnEsc) onClose?.();
			onEsc?.();
		}
	}, [
		closeOnEsc,
		onClose,
		onEsc
	]);
	const [headerMounted, setHeaderMounted] = (0, import_react.useState)(false);
	const [bodyMounted, setBodyMounted] = (0, import_react.useState)(false);
	const getDialogProps = (0, import_react.useCallback)((props2 = {}, ref = null) => ({
		role: "dialog",
		...props2,
		ref: mergeRefs(ref, dialogRef),
		id: dialogId,
		tabIndex: -1,
		"aria-modal": true,
		"aria-labelledby": headerMounted ? headerId : void 0,
		"aria-describedby": bodyMounted ? bodyId : void 0,
		onClick: callAllHandlers(props2.onClick, (event) => event.stopPropagation())
	}), [
		bodyId,
		bodyMounted,
		dialogId,
		headerId,
		headerMounted
	]);
	const onOverlayClick = (0, import_react.useCallback)((event) => {
		event.stopPropagation();
		if (mouseDownTarget.current !== event.target) return;
		if (!modalManager.isTopModal(dialogRef.current)) return;
		if (closeOnOverlayClick) onClose?.();
		onOverlayClickProp?.();
	}, [
		onClose,
		closeOnOverlayClick,
		onOverlayClickProp
	]);
	const getDialogContainerProps = (0, import_react.useCallback)((props2 = {}, ref = null) => ({
		...props2,
		ref: mergeRefs(ref, overlayRef),
		onClick: callAllHandlers(props2.onClick, onOverlayClick),
		onKeyDown: callAllHandlers(props2.onKeyDown, onKeyDown),
		onMouseDown: callAllHandlers(props2.onMouseDown, onMouseDown)
	}), [
		onKeyDown,
		onMouseDown,
		onOverlayClick
	]);
	return {
		isOpen,
		onClose,
		headerId,
		bodyId,
		setBodyMounted,
		setHeaderMounted,
		dialogRef,
		overlayRef,
		getDialogProps,
		getDialogContainerProps,
		index
	};
}
function useAriaHidden(ref, shouldHide) {
	const currentElement = ref.current;
	(0, import_react.useEffect)(() => {
		if (!ref.current || !shouldHide) return void 0;
		return hideOthers(ref.current);
	}, [
		shouldHide,
		ref,
		currentElement
	]);
}
function useIds(idProp, ...prefixes) {
	const reactId = (0, import_react.useId)();
	const id$2 = idProp || reactId;
	return (0, import_react.useMemo)(() => {
		return prefixes.map((prefix) => `${prefix}-${id$2}`);
	}, [id$2, prefixes]);
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/modal/modal.mjs
const [ModalStylesProvider, useModalStyles] = createContext({
	name: `ModalStylesContext`,
	errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
});
const [ModalContextProvider, useModalContext] = createContext({
	strict: true,
	name: "ModalContext",
	errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
});
const Modal = (props) => {
	const modalProps = {
		scrollBehavior: "outside",
		autoFocus: true,
		trapFocus: true,
		returnFocusOnClose: true,
		blockScrollOnMount: true,
		allowPinchZoom: false,
		preserveScrollBarGap: true,
		motionPreset: "scale",
		...props,
		lockFocusAcrossFrames: props.lockFocusAcrossFrames ?? true
	};
	const { portalProps, children, autoFocus, trapFocus, initialFocusRef, finalFocusRef, returnFocusOnClose, blockScrollOnMount, allowPinchZoom, preserveScrollBarGap, motionPreset, lockFocusAcrossFrames, animatePresenceProps, onCloseComplete } = modalProps;
	const styles = useMultiStyleConfig("Modal", modalProps);
	const modal = useModal(modalProps);
	const context = {
		...modal,
		autoFocus,
		trapFocus,
		initialFocusRef,
		finalFocusRef,
		returnFocusOnClose,
		blockScrollOnMount,
		allowPinchZoom,
		preserveScrollBarGap,
		motionPreset,
		lockFocusAcrossFrames
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalContextProvider, {
		value: context,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalStylesProvider, {
			value: styles,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				...animatePresenceProps,
				onExitComplete: onCloseComplete,
				children: context.isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, {
					...portalProps,
					children
				})
			})
		})
	});
};
Modal.displayName = "Modal";

//#endregion
//#region node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.1.12_react@19.1.1/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var zeroRightClassName = "right-scroll-bar-position";
var fullWidthClassName = "width-before-scroll-bar";
var noScrollbarsClassName = "with-scroll-bars-hidden";
/**
* Name of a CSS variable containing the amount of "hidden" scrollbar
* ! might be undefined ! use will fallback!
*/
var removedBarSizeVariable = "--removed-body-scroll-bar-size";

//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@19.1.12_react@19.1.1/node_modules/react-remove-scroll/dist/es2015/medium.js
var effectCar = createSidecarMedium();

//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@19.1.12_react@19.1.1/node_modules/react-remove-scroll/dist/es2015/UI.js
var nothing = function() {};
/**
* Removes scrollbar from the page and contain the scroll within the Lock
*/
var RemoveScroll = import_react.forwardRef(function(props, parentRef) {
	var ref = import_react.useRef(null);
	var _a = import_react.useState({
		onScrollCapture: nothing,
		onWheelCapture: nothing,
		onTouchMoveCapture: nothing
	}), callbacks = _a[0], setCallbacks = _a[1];
	var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container$1 = _b === void 0 ? "div" : _b, gapMode = props.gapMode, rest = __rest(props, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]);
	var SideCar$1 = sideCar;
	var containerRef = useMergeRefs([ref, parentRef]);
	var containerProps = __assign(__assign({}, rest), callbacks);
	return import_react.createElement(import_react.Fragment, null, enabled && import_react.createElement(SideCar$1, {
		sideCar: effectCar,
		removeScrollBar,
		shards,
		noRelative,
		noIsolation,
		inert,
		setCallbacks,
		allowPinchZoom: !!allowPinchZoom,
		lockRef: ref,
		gapMode
	}), forwardProps ? import_react.cloneElement(import_react.Children.only(children), __assign(__assign({}, containerProps), { ref: containerRef })) : import_react.createElement(Container$1, __assign({}, containerProps, {
		className,
		ref: containerRef
	}), children));
});
RemoveScroll.defaultProps = {
	enabled: true,
	removeScrollBar: true,
	inert: false
};
RemoveScroll.classNames = {
	fullWidth: fullWidthClassName,
	zeroRight: zeroRightClassName
};

//#endregion
//#region node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var currentNonce;
var getNonce = function() {
	if (currentNonce) return currentNonce;
	if (typeof __webpack_nonce__ !== "undefined") return __webpack_nonce__;
	return void 0;
};

//#endregion
//#region node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.1.12_react@19.1.1/node_modules/react-style-singleton/dist/es2015/singleton.js
function makeStyleTag() {
	if (!document) return null;
	var tag = document.createElement("style");
	tag.type = "text/css";
	var nonce = getNonce();
	if (nonce) tag.setAttribute("nonce", nonce);
	return tag;
}
function injectStyles(tag, css$2) {
	if (tag.styleSheet) tag.styleSheet.cssText = css$2;
	else tag.appendChild(document.createTextNode(css$2));
}
function insertStyleTag(tag) {
	var head = document.head || document.getElementsByTagName("head")[0];
	head.appendChild(tag);
}
var stylesheetSingleton = function() {
	var counter$1 = 0;
	var stylesheet = null;
	return {
		add: function(style) {
			if (counter$1 == 0) {
				if (stylesheet = makeStyleTag()) {
					injectStyles(stylesheet, style);
					insertStyleTag(stylesheet);
				}
			}
			counter$1++;
		},
		remove: function() {
			counter$1--;
			if (!counter$1 && stylesheet) {
				stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
				stylesheet = null;
			}
		}
	};
};

//#endregion
//#region node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.1.12_react@19.1.1/node_modules/react-style-singleton/dist/es2015/hook.js
/**
* creates a hook to control style singleton
* @see {@link styleSingleton} for a safer component version
* @example
* ```tsx
* const useStyle = styleHookSingleton();
* ///
* useStyle('body { overflow: hidden}');
*/
var styleHookSingleton = function() {
	var sheet = stylesheetSingleton();
	return function(styles, isDynamic) {
		import_react.useEffect(function() {
			sheet.add(styles);
			return function() {
				sheet.remove();
			};
		}, [styles && isDynamic]);
	};
};

//#endregion
//#region node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.1.12_react@19.1.1/node_modules/react-style-singleton/dist/es2015/component.js
/**
* create a Component to add styles on demand
* - styles are added when first instance is mounted
* - styles are removed when the last instance is unmounted
* - changing styles in runtime does nothing unless dynamic is set. But with multiple components that can lead to the undefined behavior
*/
var styleSingleton = function() {
	var useStyle$1 = styleHookSingleton();
	var Sheet = function(_a) {
		var styles = _a.styles, dynamic = _a.dynamic;
		useStyle$1(styles, dynamic);
		return null;
	};
	return Sheet;
};

//#endregion
//#region node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.1.12_react@19.1.1/node_modules/react-remove-scroll-bar/dist/es2015/utils.js
var zeroGap = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
};
var parse = function(x) {
	return parseInt(x || "", 10) || 0;
};
var getOffset = function(gapMode) {
	var cs = window.getComputedStyle(document.body);
	var left$1 = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
	var top$1 = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
	var right$1 = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
	return [
		parse(left$1),
		parse(top$1),
		parse(right$1)
	];
};
var getGapWidth = function(gapMode) {
	if (gapMode === void 0) gapMode = "margin";
	if (typeof window === "undefined") return zeroGap;
	var offsets = getOffset(gapMode);
	var documentWidth = document.documentElement.clientWidth;
	var windowWidth = window.innerWidth;
	return {
		left: offsets[0],
		top: offsets[1],
		right: offsets[2],
		gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
	};
};

//#endregion
//#region node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.1.12_react@19.1.1/node_modules/react-remove-scroll-bar/dist/es2015/component.js
var Style = styleSingleton();
var lockAttribute = "data-scroll-locked";
var getStyles = function(_a, allowRelative, gapMode, important) {
	var left$1 = _a.left, top$1 = _a.top, right$1 = _a.right, gap = _a.gap;
	if (gapMode === void 0) gapMode = "margin";
	return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
		allowRelative && "position: relative ".concat(important, ";"),
		gapMode === "margin" && "\n    padding-left: ".concat(left$1, "px;\n    padding-top: ").concat(top$1, "px;\n    padding-right: ").concat(right$1, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
		gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
	].filter(Boolean).join(""), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
	var counter$1 = parseInt(document.body.getAttribute(lockAttribute) || "0", 10);
	return isFinite(counter$1) ? counter$1 : 0;
};
var useLockAttribute = function() {
	import_react.useEffect(function() {
		document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
		return function() {
			var newCounter = getCurrentUseCounter() - 1;
			if (newCounter <= 0) document.body.removeAttribute(lockAttribute);
			else document.body.setAttribute(lockAttribute, newCounter.toString());
		};
	}, []);
};
/**
* Removes page scrollbar and blocks page scroll when mounted
*/
var RemoveScrollBar = function(_a) {
	var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? "margin" : _b;
	useLockAttribute();
	var gap = import_react.useMemo(function() {
		return getGapWidth(gapMode);
	}, [gapMode]);
	return import_react.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
};

//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@19.1.12_react@19.1.1/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js
var passiveSupported = false;
if (typeof window !== "undefined") try {
	var options = Object.defineProperty({}, "passive", { get: function() {
		passiveSupported = true;
		return true;
	} });
	window.addEventListener("test", options, options);
	window.removeEventListener("test", options, options);
} catch (err) {
	passiveSupported = false;
}
var nonPassive = passiveSupported ? { passive: false } : false;

//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@19.1.12_react@19.1.1/node_modules/react-remove-scroll/dist/es2015/handleScroll.js
var alwaysContainsScroll = function(node) {
	return node.tagName === "TEXTAREA";
};
var elementCanBeScrolled = function(node, overflow) {
	if (!(node instanceof Element)) return false;
	var styles = window.getComputedStyle(node);
	return styles[overflow] !== "hidden" && !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible");
};
var elementCouldBeVScrolled = function(node) {
	return elementCanBeScrolled(node, "overflowY");
};
var elementCouldBeHScrolled = function(node) {
	return elementCanBeScrolled(node, "overflowX");
};
var locationCouldBeScrolled = function(axis, node) {
	var ownerDocument = node.ownerDocument;
	var current = node;
	do {
		if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) current = current.host;
		var isScrollable = elementCouldBeScrolled(axis, current);
		if (isScrollable) {
			var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
			if (scrollHeight > clientHeight) return true;
		}
		current = current.parentNode;
	} while (current && current !== ownerDocument.body);
	return false;
};
var getVScrollVariables = function(_a) {
	var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
	return [
		scrollTop,
		scrollHeight,
		clientHeight
	];
};
var getHScrollVariables = function(_a) {
	var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
	return [
		scrollLeft,
		scrollWidth,
		clientWidth
	];
};
var elementCouldBeScrolled = function(axis, node) {
	return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
	return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
	/**
	* If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
	* and then increasingly negative as you scroll towards the end of the content.
	* @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
	*/
	return axis === "h" && direction === "rtl" ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
	var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
	var delta = directionFactor * sourceDelta;
	var target = event.target;
	var targetInLock = endTarget.contains(target);
	var shouldCancelScroll = false;
	var isDeltaPositive = delta > 0;
	var availableScroll = 0;
	var availableScrollTop = 0;
	do {
		if (!target) break;
		var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
		var elementScroll = scroll_1 - capacity - directionFactor * position;
		if (position || elementScroll) {
			if (elementCouldBeScrolled(axis, target)) {
				availableScroll += elementScroll;
				availableScrollTop += position;
			}
		}
		var parent_1 = target.parentNode;
		target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
	} while (!targetInLock && target !== document.body || targetInLock && (endTarget.contains(target) || endTarget === target));
	if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) shouldCancelScroll = true;
	else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) shouldCancelScroll = true;
	return shouldCancelScroll;
};

//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@19.1.12_react@19.1.1/node_modules/react-remove-scroll/dist/es2015/SideEffect.js
var getTouchXY = function(event) {
	return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
var getDeltaXY = function(event) {
	return [event.deltaX, event.deltaY];
};
var extractRef = function(ref) {
	return ref && "current" in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
	return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id$2) {
	return "\n  .block-interactivity-".concat(id$2, " {pointer-events: none;}\n  .allow-interactivity-").concat(id$2, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
	var shouldPreventQueue = import_react.useRef([]);
	var touchStartRef = import_react.useRef([0, 0]);
	var activeAxis = import_react.useRef();
	var id$2 = import_react.useState(idCounter++)[0];
	var Style$1 = import_react.useState(styleSingleton)[0];
	var lastProps = import_react.useRef(props);
	import_react.useEffect(function() {
		lastProps.current = props;
	}, [props]);
	import_react.useEffect(function() {
		if (props.inert) {
			document.body.classList.add("block-interactivity-".concat(id$2));
			var allow_1 = __spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
			allow_1.forEach(function(el) {
				return el.classList.add("allow-interactivity-".concat(id$2));
			});
			return function() {
				document.body.classList.remove("block-interactivity-".concat(id$2));
				allow_1.forEach(function(el) {
					return el.classList.remove("allow-interactivity-".concat(id$2));
				});
			};
		}
	}, [
		props.inert,
		props.lockRef.current,
		props.shards
	]);
	var shouldCancelEvent = import_react.useCallback(function(event, parent) {
		if ("touches" in event && event.touches.length === 2 || event.type === "wheel" && event.ctrlKey) return !lastProps.current.allowPinchZoom;
		var touch = getTouchXY(event);
		var touchStart = touchStartRef.current;
		var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
		var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
		var currentAxis;
		var target = event.target;
		var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
		if ("touches" in event && moveDirection === "h" && target.type === "range") return false;
		var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
		if (!canBeScrolledInMainDirection) return true;
		if (canBeScrolledInMainDirection) currentAxis = moveDirection;
		else {
			currentAxis = moveDirection === "v" ? "h" : "v";
			canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
		}
		if (!canBeScrolledInMainDirection) return false;
		if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) activeAxis.current = currentAxis;
		if (!currentAxis) return true;
		var cancelingAxis = activeAxis.current || currentAxis;
		return handleScroll(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
	}, []);
	var shouldPrevent = import_react.useCallback(function(_event) {
		var event = _event;
		if (!lockStack.length || lockStack[lockStack.length - 1] !== Style$1) return;
		var delta = "deltaY" in event ? getDeltaXY(event) : getTouchXY(event);
		var sourceEvent = shouldPreventQueue.current.filter(function(e) {
			return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
		})[0];
		if (sourceEvent && sourceEvent.should) {
			if (event.cancelable) event.preventDefault();
			return;
		}
		if (!sourceEvent) {
			var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
				return node.contains(event.target);
			});
			var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
			if (shouldStop) {
				if (event.cancelable) event.preventDefault();
			}
		}
	}, []);
	var shouldCancel = import_react.useCallback(function(name, delta, target, should) {
		var event = {
			name,
			delta,
			target,
			should,
			shadowParent: getOutermostShadowParent(target)
		};
		shouldPreventQueue.current.push(event);
		setTimeout(function() {
			shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
				return e !== event;
			});
		}, 1);
	}, []);
	var scrollTouchStart = import_react.useCallback(function(event) {
		touchStartRef.current = getTouchXY(event);
		activeAxis.current = void 0;
	}, []);
	var scrollWheel = import_react.useCallback(function(event) {
		shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
	}, []);
	var scrollTouchMove = import_react.useCallback(function(event) {
		shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
	}, []);
	import_react.useEffect(function() {
		lockStack.push(Style$1);
		props.setCallbacks({
			onScrollCapture: scrollWheel,
			onWheelCapture: scrollWheel,
			onTouchMoveCapture: scrollTouchMove
		});
		document.addEventListener("wheel", shouldPrevent, nonPassive);
		document.addEventListener("touchmove", shouldPrevent, nonPassive);
		document.addEventListener("touchstart", scrollTouchStart, nonPassive);
		return function() {
			lockStack = lockStack.filter(function(inst) {
				return inst !== Style$1;
			});
			document.removeEventListener("wheel", shouldPrevent, nonPassive);
			document.removeEventListener("touchmove", shouldPrevent, nonPassive);
			document.removeEventListener("touchstart", scrollTouchStart, nonPassive);
		};
	}, []);
	var removeScrollBar = props.removeScrollBar, inert = props.inert;
	return import_react.createElement(import_react.Fragment, null, inert ? import_react.createElement(Style$1, { styles: generateStyle(id$2) }) : null, removeScrollBar ? import_react.createElement(RemoveScrollBar, {
		noRelative: props.noRelative,
		gapMode: props.gapMode
	}) : null);
}
function getOutermostShadowParent(node) {
	var shadowParent = null;
	while (node !== null) {
		if (node instanceof ShadowRoot) {
			shadowParent = node.host;
			node = node.host;
		}
		node = node.parentNode;
	}
	return shadowParent;
}

//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@19.1.12_react@19.1.1/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar);

//#endregion
//#region node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@19.1.12_react@19.1.1/node_modules/react-remove-scroll/dist/es2015/Combination.js
var ReactRemoveScroll = import_react.forwardRef(function(props, ref) {
	return import_react.createElement(RemoveScroll, __assign({}, props, {
		ref,
		sideCar: sidecar_default
	}));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll;

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/modal/modal-focus.mjs
function ModalFocusScope(props) {
	const { autoFocus, trapFocus, dialogRef, initialFocusRef, blockScrollOnMount, allowPinchZoom, finalFocusRef, returnFocusOnClose, preserveScrollBarGap, lockFocusAcrossFrames, isOpen } = useModalContext();
	const [isPresent$1, safeToRemove] = usePresence();
	(0, import_react.useEffect)(() => {
		if (!isPresent$1 && safeToRemove) setTimeout(safeToRemove);
	}, [isPresent$1, safeToRemove]);
	const index = useModalManager(dialogRef, isOpen);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FocusLock, {
		autoFocus,
		isDisabled: !trapFocus,
		initialFocusRef,
		finalFocusRef,
		restoreFocus: returnFocusOnClose,
		contentRef: dialogRef,
		lockFocusAcrossFrames,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Combination_default, {
			removeScrollBar: !preserveScrollBarGap,
			allowPinchZoom,
			enabled: index === 1 && blockScrollOnMount,
			forwardProps: true,
			children: props.children
		})
	});
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/transition/slide-fade.mjs
const variants$2 = {
	initial: ({ offsetX, offsetY, transition, transitionEnd, delay: delay$1 }) => ({
		opacity: 0,
		x: offsetX,
		y: offsetY,
		transition: transition?.exit ?? withDelay.exit(TRANSITION_DEFAULTS.exit, delay$1),
		transitionEnd: transitionEnd?.exit
	}),
	enter: ({ transition, transitionEnd, delay: delay$1 }) => ({
		opacity: 1,
		x: 0,
		y: 0,
		transition: transition?.enter ?? withDelay.enter(TRANSITION_DEFAULTS.enter, delay$1),
		transitionEnd: transitionEnd?.enter
	}),
	exit: ({ offsetY, offsetX, transition, transitionEnd, reverse, delay: delay$1 }) => {
		const offset$1 = {
			x: offsetX,
			y: offsetY
		};
		return {
			opacity: 0,
			transition: transition?.exit ?? withDelay.exit(TRANSITION_DEFAULTS.exit, delay$1),
			...reverse ? {
				...offset$1,
				transitionEnd: transitionEnd?.exit
			} : { transitionEnd: {
				...offset$1,
				...transitionEnd?.exit
			} }
		};
	}
};
const slideFadeConfig = {
	initial: "initial",
	animate: "enter",
	exit: "exit",
	variants: variants$2
};
const SlideFade = (0, import_react.forwardRef)(function SlideFade2(props, ref) {
	const { unmountOnExit, in: isOpen, reverse = true, className, offsetX = 0, offsetY = 8, transition, transitionEnd, delay: delay$1, animatePresenceProps,...rest } = props;
	const show = unmountOnExit ? isOpen && unmountOnExit : true;
	const animate = isOpen || unmountOnExit ? "enter" : "exit";
	const custom = {
		offsetX,
		offsetY,
		reverse,
		transition,
		transitionEnd,
		delay: delay$1
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
		...animatePresenceProps,
		custom,
		children: show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			ref,
			className: cx("chakra-offset-slide", className),
			custom,
			...slideFadeConfig,
			animate,
			...rest
		})
	});
});
SlideFade.displayName = "SlideFade";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/transition/scale-fade.mjs
const variants$1 = {
	exit: ({ reverse, initialScale, transition, transitionEnd, delay: delay$1 }) => ({
		opacity: 0,
		...reverse ? {
			scale: initialScale,
			transitionEnd: transitionEnd?.exit
		} : { transitionEnd: {
			scale: initialScale,
			...transitionEnd?.exit
		} },
		transition: transition?.exit ?? withDelay.exit(TRANSITION_DEFAULTS.exit, delay$1)
	}),
	enter: ({ transitionEnd, transition, delay: delay$1 }) => ({
		opacity: 1,
		scale: 1,
		transition: transition?.enter ?? withDelay.enter(TRANSITION_DEFAULTS.enter, delay$1),
		transitionEnd: transitionEnd?.enter
	})
};
const scaleFadeConfig = {
	initial: "exit",
	animate: "enter",
	exit: "exit",
	variants: variants$1
};
const ScaleFade = (0, import_react.forwardRef)(function ScaleFade2(props, ref) {
	const { unmountOnExit, in: isOpen, reverse = true, initialScale = .95, className, transition, transitionEnd, delay: delay$1, animatePresenceProps,...rest } = props;
	const show = unmountOnExit ? isOpen && unmountOnExit : true;
	const animate = isOpen || unmountOnExit ? "enter" : "exit";
	const custom = {
		initialScale,
		reverse,
		transition,
		transitionEnd,
		delay: delay$1
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
		...animatePresenceProps,
		custom,
		children: show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			ref,
			className: cx("chakra-offset-slide", className),
			...scaleFadeConfig,
			animate,
			custom,
			...rest
		})
	});
});
ScaleFade.displayName = "ScaleFade";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/modal/modal-transition.mjs
const transitions = {
	slideInBottom: {
		...slideFadeConfig,
		custom: {
			offsetY: 16,
			reverse: true
		}
	},
	slideInRight: {
		...slideFadeConfig,
		custom: {
			offsetX: 16,
			reverse: true
		}
	},
	slideInTop: {
		...slideFadeConfig,
		custom: {
			offsetY: -16,
			reverse: true
		}
	},
	slideInLeft: {
		...slideFadeConfig,
		custom: {
			offsetX: -16,
			reverse: true
		}
	},
	scale: {
		...scaleFadeConfig,
		custom: {
			initialScale: .95,
			reverse: true
		}
	},
	none: {}
};
const MotionSection$1 = chakra(motion.section);
const getMotionProps = (preset) => {
	return transitions[preset || "none"];
};
const ModalTransition = (0, import_react.forwardRef)((props, ref) => {
	const { preset, motionProps = getMotionProps(preset),...rest } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionSection$1, {
		ref,
		...motionProps,
		...rest
	});
});
ModalTransition.displayName = "ModalTransition";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/modal/modal-content.mjs
const ModalContent = forwardRef((props, ref) => {
	const { className, children, containerProps: rootProps, motionProps,...rest } = props;
	const { getDialogProps, getDialogContainerProps } = useModalContext();
	const dialogProps = getDialogProps(rest, ref);
	const containerProps = getDialogContainerProps(rootProps);
	const _className = cx("chakra-modal__content", className);
	const styles = useModalStyles();
	const dialogStyles = defineStyle({
		display: "flex",
		flexDirection: "column",
		position: "relative",
		width: "100%",
		outline: 0,
		...styles.dialog
	});
	const dialogContainerStyles = defineStyle({
		display: "flex",
		width: "100vw",
		height: "$100vh",
		position: "fixed",
		left: 0,
		top: 0,
		...styles.dialogContainer
	});
	const { motionPreset } = useModalContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalFocusScope, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
		...containerProps,
		className: "chakra-modal__content-container",
		tabIndex: -1,
		__css: dialogContainerStyles,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalTransition, {
			preset: motionPreset,
			motionProps,
			className: _className,
			...dialogProps,
			__css: dialogStyles,
			children
		})
	}) });
});
ModalContent.displayName = "ModalContent";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/modal/modal-body.mjs
const ModalBody = forwardRef((props, ref) => {
	const { className,...rest } = props;
	const { bodyId, setBodyMounted } = useModalContext();
	(0, import_react.useEffect)(() => {
		setBodyMounted(true);
		return () => setBodyMounted(false);
	}, [setBodyMounted]);
	const _className = cx("chakra-modal__body", className);
	const styles = useModalStyles();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
		ref,
		className: _className,
		id: bodyId,
		...rest,
		__css: styles.body
	});
});
ModalBody.displayName = "ModalBody";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/modal/modal-close-button.mjs
const ModalCloseButton = forwardRef((props, ref) => {
	const { onClick, className,...rest } = props;
	const { onClose } = useModalContext();
	const _className = cx("chakra-modal__close-btn", className);
	const styles = useModalStyles();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseButton, {
		ref,
		__css: styles.closeButton,
		className: _className,
		onClick: callAllHandlers(onClick, (event) => {
			event.stopPropagation();
			onClose();
		}),
		...rest
	});
});
ModalCloseButton.displayName = "ModalCloseButton";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/modal/modal-header.mjs
const ModalHeader = forwardRef((props, ref) => {
	const { className,...rest } = props;
	const { headerId, setHeaderMounted } = useModalContext();
	(0, import_react.useEffect)(() => {
		setHeaderMounted(true);
		return () => setHeaderMounted(false);
	}, [setHeaderMounted]);
	const _className = cx("chakra-modal__header", className);
	const styles = useModalStyles();
	const headerStyles = defineStyle({
		flex: 0,
		...styles.header
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.header, {
		ref,
		className: _className,
		id: headerId,
		...rest,
		__css: headerStyles
	});
});
ModalHeader.displayName = "ModalHeader";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/transition/fade.mjs
const variants = {
	enter: ({ transition, transitionEnd, delay: delay$1 } = {}) => ({
		opacity: 1,
		transition: transition?.enter ?? withDelay.enter(TRANSITION_DEFAULTS.enter, delay$1),
		transitionEnd: transitionEnd?.enter
	}),
	exit: ({ transition, transitionEnd, delay: delay$1 } = {}) => ({
		opacity: 0,
		transition: transition?.exit ?? withDelay.exit(TRANSITION_DEFAULTS.exit, delay$1),
		transitionEnd: transitionEnd?.exit
	})
};
const fadeConfig = {
	initial: "exit",
	animate: "enter",
	exit: "exit",
	variants
};
const Fade = (0, import_react.forwardRef)(function Fade2(props, ref) {
	const { unmountOnExit, in: isOpen, className, transition, transitionEnd, delay: delay$1, animatePresenceProps,...rest } = props;
	const animate = isOpen || unmountOnExit ? "enter" : "exit";
	const show = unmountOnExit ? isOpen && unmountOnExit : true;
	const custom = {
		transition,
		transitionEnd,
		delay: delay$1
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
		...animatePresenceProps,
		custom,
		children: show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			ref,
			className: cx("chakra-fade", className),
			custom,
			...fadeConfig,
			animate,
			...rest
		})
	});
});
Fade.displayName = "Fade";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/modal/modal-overlay.mjs
const MotionDiv = chakra(motion.div);
const ModalOverlay = forwardRef((props, ref) => {
	const { className, transition, motionProps: _motionProps,...rest } = props;
	const _className = cx("chakra-modal__overlay", className);
	const styles = useModalStyles();
	const overlayStyle = {
		pos: "fixed",
		left: "0",
		top: "0",
		w: "100vw",
		h: "100vh",
		...styles.overlay
	};
	const { motionPreset } = useModalContext();
	const defaultMotionProps = motionPreset === "none" ? {} : fadeConfig;
	const motionProps = _motionProps || defaultMotionProps;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionDiv, {
		...motionProps,
		__css: overlayStyle,
		ref,
		className: _className,
		...rest
	});
});
ModalOverlay.displayName = "ModalOverlay";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/popover/popover-context.mjs
const [PopoverProvider, usePopoverContext] = createContext({
	name: "PopoverContext",
	errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
});
const [PopoverStylesProvider, usePopoverStyles] = createContext({
	name: `PopoverStylesContext`,
	errorMessage: `usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/popover/use-popover.mjs
const TRIGGER = {
	click: "click",
	hover: "hover"
};
function usePopover(props = {}) {
	const { closeOnBlur = true, closeOnEsc = true, initialFocusRef, id: id$2, returnFocusOnClose = true, autoFocus = true, arrowSize, arrowShadowColor, trigger: trigger$1 = TRIGGER.click, openDelay = 200, closeDelay = 200, isLazy, lazyBehavior = "unmount", computePositionOnMount,...popperProps } = props;
	const { isOpen, onClose, onOpen, onToggle } = useDisclosure(props);
	const [restoreFocus, setRestoreFocus] = (0, import_react.useState)(returnFocusOnClose);
	(0, import_react.useEffect)(() => setRestoreFocus(returnFocusOnClose), [returnFocusOnClose]);
	const anchorRef = (0, import_react.useRef)(null);
	const triggerRef = (0, import_react.useRef)(null);
	const popoverRef = (0, import_react.useRef)(null);
	const isHoveringRef = (0, import_react.useRef)(false);
	const hasBeenOpened = (0, import_react.useRef)(false);
	if (isOpen) hasBeenOpened.current = true;
	const [hasHeader, setHasHeader] = (0, import_react.useState)(false);
	const [hasBody, setHasBody] = (0, import_react.useState)(false);
	const uuid = (0, import_react.useId)();
	const uid = id$2 ?? uuid;
	const [triggerId, popoverId, headerId, bodyId] = [
		"popover-trigger",
		"popover-content",
		"popover-header",
		"popover-body"
	].map((id2) => `${id2}-${uid}`);
	const { referenceRef, getArrowProps, getPopperProps, getArrowInnerProps, forceUpdate } = usePopper({
		...popperProps,
		enabled: isOpen || !!computePositionOnMount
	});
	const animated = useAnimationState({
		isOpen,
		ref: popoverRef
	});
	useFocusOnPointerDown({
		enabled: isOpen,
		ref: triggerRef
	});
	useFocusOnHide(popoverRef, {
		focusRef: triggerRef,
		visible: isOpen,
		shouldFocus: restoreFocus && trigger$1 === TRIGGER.click
	});
	useFocusOnShow(popoverRef, {
		focusRef: initialFocusRef,
		visible: isOpen,
		shouldFocus: autoFocus && trigger$1 === TRIGGER.click
	});
	useOutsideClick({
		enabled: isOpen && closeOnBlur,
		ref: popoverRef,
		handler(event) {
			const relatedTarget = event.composedPath?.()[0] ?? [event.target];
			if (contains(triggerRef.current, relatedTarget)) return;
			if (relatedTarget) setRestoreFocus(!isFocusable(relatedTarget));
			onClose();
		}
	});
	const shouldRenderChildren = lazyDisclosure({
		wasSelected: hasBeenOpened.current,
		enabled: isLazy,
		mode: lazyBehavior,
		isSelected: animated.present
	});
	const getPopoverProps = (0, import_react.useCallback)((props2 = {}, _ref$1 = null) => {
		const popoverProps = {
			...props2,
			style: {
				...props2.style,
				transformOrigin: cssVars.transformOrigin.varRef,
				[cssVars.arrowSize.var]: arrowSize ? `${arrowSize}px` : void 0,
				[cssVars.arrowShadowColor.var]: arrowShadowColor
			},
			ref: mergeRefs(popoverRef, _ref$1),
			children: shouldRenderChildren ? props2.children : null,
			id: popoverId,
			tabIndex: -1,
			role: "dialog",
			onKeyDown: callAllHandlers(props2.onKeyDown, (event) => {
				if (event.nativeEvent.isComposing) return;
				if (closeOnEsc && event.key === "Escape") {
					event.preventDefault();
					event.stopPropagation();
					onClose();
				}
			}),
			onBlur: callAllHandlers(props2.onBlur, (event) => {
				const relatedTarget = getRelatedTarget(event);
				const targetIsPopover = contains(popoverRef.current, relatedTarget);
				const targetIsTrigger = contains(triggerRef.current, relatedTarget);
				const isValidBlur = !targetIsPopover && !targetIsTrigger;
				if (relatedTarget) setRestoreFocus(!isFocusable(relatedTarget));
				if (isOpen && closeOnBlur && isValidBlur) onClose();
			}),
			"aria-labelledby": hasHeader ? headerId : void 0,
			"aria-describedby": hasBody ? bodyId : void 0
		};
		if (trigger$1 === TRIGGER.hover) {
			popoverProps.role = "tooltip";
			popoverProps.onMouseEnter = callAllHandlers(props2.onMouseEnter, () => {
				isHoveringRef.current = true;
			});
			popoverProps.onMouseLeave = callAllHandlers(props2.onMouseLeave, (event) => {
				if (event.nativeEvent.relatedTarget === null) return;
				isHoveringRef.current = false;
				setTimeout(() => onClose(), closeDelay);
			});
		}
		return popoverProps;
	}, [
		shouldRenderChildren,
		popoverId,
		hasHeader,
		headerId,
		hasBody,
		bodyId,
		trigger$1,
		closeOnEsc,
		onClose,
		isOpen,
		closeOnBlur,
		closeDelay,
		arrowShadowColor,
		arrowSize
	]);
	const getPopoverPositionerProps = (0, import_react.useCallback)((props2 = {}, forwardedRef = null) => getPopperProps({
		...props2,
		style: {
			visibility: isOpen ? "visible" : "hidden",
			...props2.style
		}
	}, forwardedRef), [isOpen, getPopperProps]);
	const getAnchorProps = (0, import_react.useCallback)((props2, _ref$1 = null) => {
		return {
			...props2,
			ref: mergeRefs(_ref$1, anchorRef, referenceRef)
		};
	}, [anchorRef, referenceRef]);
	const openTimeout = (0, import_react.useRef)(void 0);
	const closeTimeout = (0, import_react.useRef)(void 0);
	const maybeReferenceRef = (0, import_react.useCallback)((node) => {
		if (anchorRef.current == null) referenceRef(node);
	}, [referenceRef]);
	const getTriggerProps = (0, import_react.useCallback)((props2 = {}, _ref$1 = null) => {
		const triggerProps = {
			...props2,
			ref: mergeRefs(triggerRef, _ref$1, maybeReferenceRef),
			id: triggerId,
			"aria-haspopup": "dialog",
			"aria-expanded": isOpen,
			"aria-controls": popoverId
		};
		if (trigger$1 === TRIGGER.click) triggerProps.onClick = callAllHandlers(props2.onClick, onToggle);
		if (trigger$1 === TRIGGER.hover) {
			triggerProps.onFocus = callAllHandlers(props2.onFocus, () => {
				if (openTimeout.current === void 0) onOpen();
			});
			triggerProps.onBlur = callAllHandlers(props2.onBlur, (event) => {
				const relatedTarget = getRelatedTarget(event);
				const isValidBlur = !contains(popoverRef.current, relatedTarget);
				if (isOpen && closeOnBlur && isValidBlur) onClose();
			});
			triggerProps.onKeyDown = callAllHandlers(props2.onKeyDown, (event) => {
				if (event.key === "Escape") onClose();
			});
			triggerProps.onMouseEnter = callAllHandlers(props2.onMouseEnter, () => {
				isHoveringRef.current = true;
				openTimeout.current = window.setTimeout(() => onOpen(), openDelay);
			});
			triggerProps.onMouseLeave = callAllHandlers(props2.onMouseLeave, () => {
				isHoveringRef.current = false;
				if (openTimeout.current) {
					clearTimeout(openTimeout.current);
					openTimeout.current = void 0;
				}
				closeTimeout.current = window.setTimeout(() => {
					if (isHoveringRef.current === false) onClose();
				}, closeDelay);
			});
		}
		return triggerProps;
	}, [
		triggerId,
		isOpen,
		popoverId,
		trigger$1,
		maybeReferenceRef,
		onToggle,
		onOpen,
		closeOnBlur,
		onClose,
		openDelay,
		closeDelay
	]);
	(0, import_react.useEffect)(() => {
		return () => {
			if (openTimeout.current) clearTimeout(openTimeout.current);
			if (closeTimeout.current) clearTimeout(closeTimeout.current);
		};
	}, []);
	const getHeaderProps = (0, import_react.useCallback)((props2 = {}, ref = null) => ({
		...props2,
		id: headerId,
		ref: mergeRefs(ref, (node) => {
			setHasHeader(!!node);
		})
	}), [headerId]);
	const getBodyProps = (0, import_react.useCallback)((props2 = {}, ref = null) => ({
		...props2,
		id: bodyId,
		ref: mergeRefs(ref, (node) => {
			setHasBody(!!node);
		})
	}), [bodyId]);
	return {
		forceUpdate,
		isOpen,
		onAnimationComplete: animated.onComplete,
		onClose,
		getAnchorProps,
		getArrowProps,
		getArrowInnerProps,
		getPopoverPositionerProps,
		getPopoverProps,
		getTriggerProps,
		getHeaderProps,
		getBodyProps
	};
}
function contains(parent, child) {
	return parent === child || parent?.contains(child);
}
function getRelatedTarget(event) {
	const activeEl = event.currentTarget.ownerDocument.activeElement;
	return event.relatedTarget ?? activeEl;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/popover/popover.mjs
function Popover(props) {
	const styles = useMultiStyleConfig("Popover", props);
	const { children,...rest } = omitThemingProps(props);
	const theme$1 = useTheme();
	const context = usePopover({
		...rest,
		direction: theme$1.direction
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverProvider, {
		value: context,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverStylesProvider, {
			value: styles,
			children: runIfFn(children, {
				isOpen: context.isOpen,
				onClose: context.onClose,
				forceUpdate: context.forceUpdate
			})
		})
	});
}
Popover.displayName = "Popover";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/element-ref.mjs
function getElementRef(el) {
	const version = import_react.version;
	if (typeof version !== "string") return el?.ref;
	if (version.startsWith("18.")) return el?.ref;
	return el?.props?.ref;
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/popover/popover-arrow.mjs
const resolveVar = (scale$1, value) => value ? `${scale$1}.${value}, ${value}` : void 0;
function PopoverArrow(props) {
	const { bg, bgColor, backgroundColor, shadow, boxShadow, shadowColor,...rest } = props;
	const { getArrowProps, getArrowInnerProps } = usePopoverContext();
	const styles = usePopoverStyles();
	const arrowBg = bg ?? bgColor ?? backgroundColor;
	const arrowShadow = shadow ?? boxShadow;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
		...getArrowProps(),
		className: "chakra-popover__arrow-positioner",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
			className: cx("chakra-popover__arrow", props.className),
			...getArrowInnerProps(rest),
			__css: {
				"--popper-arrow-shadow-color": resolveVar("colors", shadowColor),
				"--popper-arrow-bg": resolveVar("colors", arrowBg),
				"--popper-arrow-shadow": resolveVar("shadows", arrowShadow),
				...styles.arrow
			}
		})
	});
}
PopoverArrow.displayName = "PopoverArrow";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/popover/popover-body.mjs
const PopoverBody = forwardRef(function PopoverBody2(props, ref) {
	const { getBodyProps } = usePopoverContext();
	const styles = usePopoverStyles();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
		...getBodyProps(props, ref),
		className: cx("chakra-popover__body", props.className),
		__css: styles.body
	});
});
PopoverBody.displayName = "PopoverBody";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/popover/popover-close-button.mjs
const PopoverCloseButton = forwardRef(function PopoverCloseButton2(props, ref) {
	const { onClose } = usePopoverContext();
	const styles = usePopoverStyles();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseButton, {
		size: "sm",
		onClick: onClose,
		className: cx("chakra-popover__close-btn", props.className),
		__css: styles.closeButton,
		ref,
		...props
	});
});
PopoverCloseButton.displayName = "PopoverCloseButton";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/popover/popover-transition.mjs
function mergeVariants(variants$3) {
	if (!variants$3) return;
	return {
		enter: {
			...variants$3.enter,
			visibility: "visible"
		},
		exit: {
			...variants$3.exit,
			transitionEnd: { visibility: "hidden" }
		}
	};
}
const scaleFade = {
	exit: {
		opacity: 0,
		scale: .95,
		transition: {
			duration: .1,
			ease: [
				.4,
				0,
				1,
				1
			]
		}
	},
	enter: {
		scale: 1,
		opacity: 1,
		transition: {
			duration: .15,
			ease: [
				0,
				0,
				.2,
				1
			]
		}
	}
};
const MotionSection = chakra(motion.section);
const PopoverTransition = forwardRef(function PopoverTransition2(props, ref) {
	const { variants: variants$3 = scaleFade,...rest } = props;
	const { isOpen } = usePopoverContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionSection, {
		ref,
		variants: mergeVariants(variants$3),
		initial: false,
		animate: isOpen ? "enter" : "exit",
		...rest
	});
});
PopoverTransition.displayName = "PopoverTransition";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/popover/popover-content.mjs
const PopoverContent = forwardRef(function PopoverContent2(props, ref) {
	const { rootProps, motionProps,...contentProps } = props;
	const { getPopoverProps, getPopoverPositionerProps, onAnimationComplete } = usePopoverContext();
	const styles = usePopoverStyles();
	const contentStyles = defineStyle({
		position: "relative",
		display: "flex",
		flexDirection: "column",
		...styles.content
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
		...getPopoverPositionerProps(rootProps),
		__css: styles.popper,
		className: "chakra-popover__popper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTransition, {
			...motionProps,
			...getPopoverProps(contentProps, ref),
			onAnimationComplete: callAll(onAnimationComplete, contentProps.onAnimationComplete),
			className: cx("chakra-popover__content", props.className),
			__css: contentStyles
		})
	});
});
PopoverContent.displayName = "PopoverContent";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/popover/popover-trigger.mjs
function PopoverTrigger(props) {
	const child = import_react.Children.only(props.children);
	const { getTriggerProps } = usePopoverContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (0, import_react.cloneElement)(child, getTriggerProps(child.props, getElementRef(child))) });
}
PopoverTrigger.displayName = "PopoverTrigger";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/select/select-field.mjs
const SelectField = forwardRef(function SelectField2(props, ref) {
	const { children, placeholder, className,...rest } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(chakra.select, {
		...rest,
		ref,
		className: cx("chakra-select", className),
		children: [placeholder && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: "",
			children: placeholder
		}), children]
	});
});
SelectField.displayName = "SelectField";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/select/select.mjs
const Select = forwardRef((props, ref) => {
	const styles = useMultiStyleConfig("Select", props);
	const { rootProps, placeholder, icon, color: color$1, height, h, minH, minHeight, iconColor, iconSize,...rest } = omitThemingProps(props);
	const [layoutProps, otherProps] = split(rest, layoutPropNames);
	const ownProps = useFormControl(otherProps);
	const rootStyles$1 = {
		width: "100%",
		height: "fit-content",
		position: "relative",
		color: color$1
	};
	const fieldStyles = {
		paddingEnd: "2rem",
		...styles.field,
		_focus: {
			zIndex: "unset",
			...styles.field?.["_focus"]
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(chakra.div, {
		className: "chakra-select__wrapper",
		__css: rootStyles$1,
		...layoutProps,
		...rootProps,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
			ref,
			height: h ?? height,
			minH: minH ?? minHeight,
			placeholder,
			...ownProps,
			__css: fieldStyles,
			children: props.children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
			"data-disabled": dataAttr(ownProps.disabled),
			...(iconColor || color$1) && { color: iconColor || color$1 },
			__css: styles.icon,
			...iconSize && { fontSize: iconSize },
			children: icon
		})]
	});
});
Select.displayName = "Select";
const DefaultIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	viewBox: "0 0 24 24",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		fill: "currentColor",
		d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
	})
});
const IconWrapper = chakra("div", { baseStyle: {
	position: "absolute",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	pointerEvents: "none",
	top: "50%",
	transform: "translateY(-50%)"
} });
const SelectIcon = (props) => {
	const { children = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultIcon, {}),...rest } = props;
	const clone = (0, import_react.cloneElement)(children, {
		role: "presentation",
		className: "chakra-select__icon",
		focusable: false,
		"aria-hidden": true,
		style: {
			width: "1em",
			height: "1em",
			color: "currentColor"
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconWrapper, {
		...rest,
		className: "chakra-select__icon-wrapper",
		children: (0, import_react.isValidElement)(children) ? clone : null
	});
};
SelectIcon.displayName = "SelectIcon";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/stack/stack-item.mjs
const StackItem = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
	className: "chakra-stack__item",
	...props,
	__css: {
		display: "inline-block",
		flex: "0 0 auto",
		minWidth: 0,
		...props["__css"]
	}
});
StackItem.displayName = "StackItem";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/stack/stack.utils.mjs
function getDividerStyles(options$1) {
	const { spacing, direction } = options$1;
	const dividerStyles = {
		column: {
			my: spacing,
			mx: 0,
			borderLeftWidth: 0,
			borderBottomWidth: "1px"
		},
		"column-reverse": {
			my: spacing,
			mx: 0,
			borderLeftWidth: 0,
			borderBottomWidth: "1px"
		},
		row: {
			mx: spacing,
			my: 0,
			borderLeftWidth: "1px",
			borderBottomWidth: 0
		},
		"row-reverse": {
			mx: spacing,
			my: 0,
			borderLeftWidth: "1px",
			borderBottomWidth: 0
		}
	};
	return { "&": mapResponsive(direction, (value) => dividerStyles[value]) };
}

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/stack/stack.mjs
const Stack = forwardRef((props, ref) => {
	const { isInline, direction: directionProp, align, justify, spacing = "0.5rem", wrap, children, divider, className, shouldWrapChildren,...rest } = props;
	const direction = isInline ? "row" : directionProp ?? "column";
	const dividerStyle = (0, import_react.useMemo)(() => getDividerStyles({
		spacing,
		direction
	}), [spacing, direction]);
	const hasDivider = !!divider;
	const shouldUseChildren = !shouldWrapChildren && !hasDivider;
	const clones = (0, import_react.useMemo)(() => {
		const validChildren = getValidChildren(children);
		return shouldUseChildren ? validChildren : validChildren.map((child, index) => {
			const key = typeof child.key !== "undefined" ? child.key : index;
			const isLast = index + 1 === validChildren.length;
			const wrappedChild = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackItem, { children: child }, key);
			const _child = shouldWrapChildren ? wrappedChild : child;
			if (!hasDivider) return _child;
			const clonedDivider = (0, import_react.cloneElement)(divider, { __css: dividerStyle });
			const _divider = isLast ? null : clonedDivider;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [_child, _divider] }, key);
		});
	}, [
		divider,
		dividerStyle,
		hasDivider,
		shouldUseChildren,
		shouldWrapChildren,
		children
	]);
	const _className = cx("chakra-stack", className);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
		ref,
		display: "flex",
		alignItems: align,
		justifyContent: justify,
		flexDirection: direction,
		flexWrap: wrap,
		gap: hasDivider ? void 0 : spacing,
		className: _className,
		...rest,
		children: clones
	});
});
Stack.displayName = "Stack";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/stack/h-stack.mjs
const HStack = forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {
	align: "center",
	...props,
	direction: "row",
	ref
}));
HStack.displayName = "HStack";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/stack/v-stack.mjs
const VStack = forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {
	align: "center",
	...props,
	direction: "column",
	ref
}));
VStack.displayName = "VStack";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/table/table.mjs
const [TableStylesProvider, useTableStyles] = createContext({
	name: `TableStylesContext`,
	errorMessage: `useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `
});
const Table = forwardRef((props, ref) => {
	const styles = useMultiStyleConfig("Table", props);
	const { className, layout: layout$1,...tableProps } = omitThemingProps(props);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableStylesProvider, {
		value: styles,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.table, {
			ref,
			__css: {
				tableLayout: layout$1,
				...styles.table
			},
			className: cx("chakra-table", className),
			...tableProps
		})
	});
});
Table.displayName = "Table";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/table/tbody.mjs
const Tbody = forwardRef((props, ref) => {
	const styles = useTableStyles();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.tbody, {
		...props,
		ref,
		__css: styles.tbody
	});
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/table/td.mjs
const Td = forwardRef(({ isNumeric,...rest }, ref) => {
	const styles = useTableStyles();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.td, {
		...rest,
		ref,
		__css: styles.td,
		"data-is-numeric": isNumeric
	});
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/table/th.mjs
const Th = forwardRef(({ isNumeric,...rest }, ref) => {
	const styles = useTableStyles();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.th, {
		...rest,
		ref,
		__css: styles.th,
		"data-is-numeric": isNumeric
	});
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/table/thead.mjs
const Thead = forwardRef((props, ref) => {
	const styles = useTableStyles();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.thead, {
		...props,
		ref,
		__css: styles.thead
	});
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/table/tr.mjs
const Tr = forwardRef((props, ref) => {
	const styles = useTableStyles();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.tr, {
		...props,
		ref,
		__css: styles.tr
	});
});

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/tag/tag.mjs
const [TagStylesProvider, useTagStyles] = createContext({
	name: `TagStylesContext`,
	errorMessage: `useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tag />" `
});
const Tag = forwardRef((props, ref) => {
	const styles = useMultiStyleConfig("Tag", props);
	const ownProps = omitThemingProps(props);
	const containerStyles = {
		display: "inline-flex",
		verticalAlign: "top",
		alignItems: "center",
		maxWidth: "100%",
		...styles.container
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagStylesProvider, {
		value: styles,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.span, {
			ref,
			...ownProps,
			__css: containerStyles
		})
	});
});
Tag.displayName = "Tag";
const TagLabel = forwardRef((props, ref) => {
	const styles = useTagStyles();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.span, {
		ref,
		noOfLines: 1,
		...props,
		__css: styles.label
	});
});
TagLabel.displayName = "TagLabel";
const TagLeftIcon = forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
	ref,
	verticalAlign: "top",
	marginEnd: "0.5rem",
	...props
}));
TagLeftIcon.displayName = "TagLeftIcon";
const TagRightIcon = forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
	ref,
	verticalAlign: "top",
	marginStart: "0.5rem",
	...props
}));
TagRightIcon.displayName = "TagRightIcon";
const TagCloseIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
	verticalAlign: "inherit",
	viewBox: "0 0 512 512",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		fill: "currentColor",
		d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
	})
});
TagCloseIcon.displayName = "TagCloseIcon";
const TagCloseButton = forwardRef((props, ref) => {
	const { isDisabled, children,...rest } = props;
	const styles = useTagStyles();
	const btnStyles = {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		outline: "0",
		...styles.closeButton
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.button, {
		ref,
		"aria-label": "close",
		...rest,
		type: "button",
		disabled: isDisabled,
		__css: btnStyles,
		children: children || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagCloseIcon, {})
	});
});
TagCloseButton.displayName = "TagCloseButton";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/typography/heading.mjs
const Heading = forwardRef(function Heading2(props, ref) {
	const styles = useStyleConfig("Heading", props);
	const { className,...rest } = omitThemingProps(props);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.h2, {
		ref,
		className: cx("chakra-heading", props.className),
		...rest,
		__css: styles
	});
});
Heading.displayName = "Heading";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/typography/text.mjs
const Text = forwardRef(function Text2(props, ref) {
	const styles = useStyleConfig("Text", props);
	const { className, align, decoration, casing,...rest } = omitThemingProps(props);
	const aliasedProps = compact({
		textAlign: props.align,
		textDecoration: props.decoration,
		textTransform: props.casing
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.p, {
		ref,
		className: cx("chakra-text", props.className),
		...aliasedProps,
		...rest,
		__css: styles
	});
});
Text.displayName = "Text";

//#endregion
//#region node_modules/.pnpm/@chakra-ui+react@2.10.9_@emotion+react@11.14.0_@types+react@19.1.12_react@19.1.1__@emot_46b74536a872b59e9975c3c6db53a0f2/node_modules/@chakra-ui/react/dist/esm/wrap/wrap.mjs
const Wrap = forwardRef(function Wrap2(props, ref) {
	const { spacing = "0.5rem", spacingX, spacingY, children, justify, direction, align, className, shouldWrapChildren,...rest } = props;
	const _children = (0, import_react.useMemo)(() => shouldWrapChildren ? import_react.Children.map(children, (child, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WrapItem, { children: child }, index)) : children, [children, shouldWrapChildren]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.div, {
		ref,
		className: cx("chakra-wrap", className),
		...rest,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.ul, {
			className: "chakra-wrap__list",
			__css: {
				display: "flex",
				flexWrap: "wrap",
				justifyContent: justify,
				alignItems: align,
				flexDirection: direction,
				listStyleType: "none",
				gap: spacing,
				columnGap: spacingX,
				rowGap: spacingY,
				padding: "0"
			},
			children: _children
		})
	});
});
Wrap.displayName = "Wrap";
const WrapItem = forwardRef(function WrapItem2(props, ref) {
	const { className,...rest } = props;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(chakra.li, {
		ref,
		__css: {
			display: "flex",
			alignItems: "flex-start"
		},
		className: cx("chakra-wrap__listitem", className),
		...rest
	});
});
WrapItem.displayName = "WrapItem";

//#endregion
export { ModalBody as A, ModalContent as B, Modal as C, Input as D, GridItem as E, Grid as F, FormLabel as G, Flex as H, CheckboxGroup as I, Checkbox as J, FormControl as K, ButtonGroup as L, Button as M, Box as N, ChakraProvider as O, require_jsx_runtime as P, require_react_dom as Q, Wrap as b, Text as c, Heading as d, Tag as e, TagCloseButton as f, TagLabel as g, Tr as h, Thead as i, Th as j, Td as k, Tbody as l, Table as m, VStack as n, HStack as o, Stack as p, Select as q, PopoverTrigger as r, PopoverContent as s, PopoverCloseButton as t, PopoverBody as u, PopoverArrow as v, Popover as w, ModalOverlay as x, ModalHeader as y, ModalCloseButton as z };
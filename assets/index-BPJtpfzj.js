const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SearchDialog-BWb8PK5y.js","assets/react-BDq5ydJY.js","assets/chakra-ui-YFQdXzg5.js","assets/rolldown-runtime-CINmCwk_.js","assets/vendor--8zDkgLI.js"])))=>i.map(i=>d[i]);
import { f as __toESM } from "./rolldown-runtime-CINmCwk_.js";
import { b as DndContext, c as PointerSensor, d as useDndContext, e as useDraggable, f as useSensor, g as useSensors, h as require_client } from "./react-dom-DQVbXeS_.js";
import { C as useDisclosure, a1 as require_react } from "./chakra-ui-YFQdXzg5.js";
import { E as GridItem, F as Grid, H as Flex, L as ButtonGroup, M as Button, N as Box, O as ChakraProvider, P as require_jsx_runtime, c as Text, d as Heading, p as Stack, r as PopoverTrigger, s as PopoverContent, t as PopoverCloseButton, u as PopoverBody, v as PopoverArrow, w as Popover } from "./react-BDq5ydJY.js";
import { e as CSS } from "./dnd-kit-BdY5nInc.js";

//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();

//#endregion
//#region src/contexts/ScheduleContext.ts
var import_client = /* @__PURE__ */ __toESM(require_client());
var import_react = /* @__PURE__ */ __toESM(require_react());
const ScheduleContext = (0, import_react.createContext)(void 0);
const ScheduleAction = (0, import_react.createContext)(void 0);
const useScheduleContext = () => {
	const context = (0, import_react.useContext)(ScheduleContext);
	if (context === void 0) throw new Error("useScheduleContext must be used within a ScheduleProvider");
	return context;
};
const useScheduleAction = () => {
	const context = (0, import_react.useContext)(ScheduleAction);
	if (context === void 0) throw new Error("useScheduleAction must be used within a ScheduleProvider");
	return context;
};

//#endregion
//#region src/hooks/useAutoCallback.ts
const useAutoCallback = (callback) => {
	const callbackRef = (0, import_react.useRef)(callback);
	callbackRef.current = callback;
	return (0, import_react.useCallback)((...args) => callbackRef.current?.(...args), []);
};
var useAutoCallback_default = useAutoCallback;

//#endregion
//#region src/hooks/useScheduleBoard.ts
const useScheduleBoard = () => {
	const setSchedulesMap = useScheduleAction();
	const duplicateBoard = (targetId) => {
		(0, import_react.startTransition)(() => {
			setSchedulesMap((prev) => ({
				...prev,
				[`schedule-${Date.now()}`]: [...prev[targetId]]
			}));
		});
	};
	const removeBoard = (targetId) => {
		(0, import_react.startTransition)(() => {
			setSchedulesMap((prev) => {
				delete prev[targetId];
				return { ...prev };
			});
		});
	};
	const deleteSchedule = (tableId, { day, time }) => {
		(0, import_react.startTransition)(() => {
			setSchedulesMap((prev) => ({
				...prev,
				[tableId]: prev[tableId].filter((schedule) => schedule.day !== day || !schedule.range.includes(time))
			}));
		});
	};
	return {
		duplicateBoard,
		removeBoard,
		deleteSchedule
	};
};

//#endregion
//#region src/constants/common.ts
const DAY_LABELS = [
	"월",
	"화",
	"수",
	"목",
	"금",
	"토"
];

//#endregion
//#region src/utils/format.ts
const fill2 = (n) => String(n).padStart(2, "0");
const parseHnM = (current) => {
	const date = new Date(current);
	return `${fill2(date.getHours())}:${fill2(date.getMinutes())}`;
};

//#endregion
//#region src/constants/schedule.ts
const CellSize = {
	WIDTH: 80,
	HEIGHT: 30
};
const 초 = 1e3;
const 분 = 60 * 초;
const TIMES = [...Array(18).fill(0).map((v, k) => v + k * 30 * 분).map((v) => `${parseHnM(v)}~${parseHnM(v + 30 * 분)}`), ...Array(6).fill(540 * 분).map((v, k) => v + k * 55 * 분).map((v) => `${parseHnM(v)}~${parseHnM(v + 50 * 분)}`)];
const SCHEDULE_COLORS = [
	"#fdd",
	"#ffd",
	"#dff",
	"#ddf",
	"#fdf",
	"#dfd"
];

//#endregion
//#region src/contexts/ScheduleDndProvider.tsx
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function createSnapModifier() {
	return ({ transform, containerNodeRect, draggingNodeRect }) => {
		const containerTop = containerNodeRect?.top ?? 0;
		const containerLeft = containerNodeRect?.left ?? 0;
		const containerBottom = containerNodeRect?.bottom ?? 0;
		const containerRight = containerNodeRect?.right ?? 0;
		const { top = 0, left = 0, bottom = 0, right = 0 } = draggingNodeRect ?? {};
		const minX = containerLeft - left + 120 + 1;
		const minY = containerTop - top + 40 + 1;
		const maxX = containerRight - right;
		const maxY = containerBottom - bottom;
		return {
			...transform,
			x: Math.min(Math.max(Math.round(transform.x / CellSize.WIDTH) * CellSize.WIDTH, minX), maxX),
			y: Math.min(Math.max(Math.round(transform.y / CellSize.HEIGHT) * CellSize.HEIGHT, minY), maxY)
		};
	};
}
const modifiers = [createSnapModifier()];
function ScheduleDndProvider({ children }) {
	const setSchedulesMap = useScheduleAction();
	const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 8 } }));
	const handleDragEnd = useAutoCallback_default((event) => {
		const { active, delta } = event;
		const { x, y } = delta;
		const [tableId, index] = String(active.id).split(":");
		const moveDayIndex = Math.floor(x / 80);
		const moveTimeIndex = Math.floor(y / 30);
		setSchedulesMap((prev) => {
			const schedule = prev[tableId][Number(index)];
			const nowDayIndex = DAY_LABELS.indexOf(schedule.day);
			return {
				...prev,
				[tableId]: prev[tableId].map((targetSchedule, targetIndex) => {
					if (targetIndex !== Number(index)) return { ...targetSchedule };
					return {
						...targetSchedule,
						day: DAY_LABELS[nowDayIndex + moveDayIndex],
						range: targetSchedule.range.map((time) => time + moveTimeIndex)
					};
				})
			};
		});
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DndContext, {
		sensors,
		onDragEnd: handleDragEnd,
		modifiers,
		children
	});
}
var ScheduleDndProvider_default = ScheduleDndProvider;

//#endregion
//#region src/components/schedule/ScheduleControls.tsx
const ScheduleControls = (0, import_react.memo)(({ tableId, onOpenSearchDialog, onDuplicateBoard, onRemoveBoard, isRemoveDisabled }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ButtonGroup, {
		size: "sm",
		isAttached: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				colorScheme: "green",
				onClick: () => onOpenSearchDialog(tableId),
				children: "시간표 추가"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				colorScheme: "green",
				mx: "1px",
				onClick: () => onDuplicateBoard(tableId),
				children: "복제"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				colorScheme: "green",
				isDisabled: isRemoveDisabled,
				onClick: () => onRemoveBoard(tableId),
				children: "삭제"
			})
		]
	});
});
var ScheduleControls_default = ScheduleControls;

//#endregion
//#region src/utils/schedule.ts
const getTimeRange = (value) => {
	const [start, end] = value.split("~").map(Number);
	if (end === void 0) return [start];
	return Array(end - start + 1).fill(start).map((v, k) => v + k);
};
const parseSchedule = (schedule) => {
	const schedules = schedule.split("<p>");
	return schedules.map((schedule$1) => {
		const reg = /^([가-힣])(\d+(~\d+)?)(.*)/;
		const [day] = schedule$1.split(/(\d+)/);
		const range = getTimeRange(schedule$1.replace(reg, "$2"));
		const room = schedule$1.replace(reg, "$4")?.replace(/\(|\)/g, "");
		return {
			day,
			range,
			room
		};
	});
};
const createScheduleColorMap = (schedules) => {
	const lectures = [...new Set(schedules.map(({ lecture }) => lecture.id))];
	const map = /* @__PURE__ */ new Map();
	lectures.forEach((lectureId, index) => {
		map.set(lectureId, SCHEDULE_COLORS[index % SCHEDULE_COLORS.length]);
	});
	return map;
};

//#endregion
//#region src/components/schedule/ScheduleGrid.tsx
const ScheduleGrid = (0, import_react.memo)(({ onScheduleTimeClick }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Grid, {
		templateColumns: `120px repeat(${DAY_LABELS.length}, ${CellSize.WIDTH}px)`,
		templateRows: `40px repeat(${TIMES.length}, ${CellSize.HEIGHT}px)`,
		bg: "white",
		fontSize: "sm",
		textAlign: "center",
		outline: "1px solid",
		outlineColor: "gray.300",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridItem, {
				borderColor: "gray.300",
				bg: "gray.100",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
					justifyContent: "center",
					alignItems: "center",
					h: "full",
					w: "full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						fontWeight: "bold",
						children: "교시"
					})
				})
			}, "교시"),
			DAY_LABELS.map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridItem, {
				borderLeft: "1px",
				borderColor: "gray.300",
				bg: "gray.100",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
					justifyContent: "center",
					alignItems: "center",
					h: "full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
						fontWeight: "bold",
						children: day
					})
				})
			}, day)),
			TIMES.map((time, timeIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridItem, {
				borderTop: "1px solid",
				borderColor: "gray.300",
				bg: timeIndex > 17 ? "gray.200" : "gray.100",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
					justifyContent: "center",
					alignItems: "center",
					h: "full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
						fontSize: "xs",
						children: [
							fill2(timeIndex + 1),
							" (",
							time,
							")"
						]
					})
				})
			}), DAY_LABELS.map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridItem, {
				borderWidth: "1px 0 0 1px",
				borderColor: "gray.300",
				bg: timeIndex > 17 ? "gray.100" : "white",
				cursor: "pointer",
				_hover: { bg: "yellow.100" },
				onClick: () => onScheduleTimeClick?.({
					day,
					time: timeIndex + 1
				})
			}, `${day}-${timeIndex + 2}`))] }, `시간-${timeIndex + 1}`))
		]
	});
});
var ScheduleGrid_default = ScheduleGrid;

//#endregion
//#region src/components/schedule/ScheduleText.tsx
const ScheduleText = (0, import_react.memo)(({ title, room }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
		fontSize: "sm",
		fontWeight: "bold",
		children: title
	}), room && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
		fontSize: "xs",
		children: room
	})] });
});
var ScheduleText_default = ScheduleText;

//#endregion
//#region src/components/schedule/ScheduleItem.tsx
const ScheduleItem = (0, import_react.memo)(({ id, data, bg, onDeleteButtonClick }) => {
	const { isOpen, onToggle, onClose } = useDisclosure();
	const { day, range, room, lecture } = data;
	const { attributes, setNodeRef, listeners, transform } = useDraggable({ id });
	const leftIndex = DAY_LABELS.indexOf(day);
	const topIndex = range[0] - 1;
	const size = range.length;
	const transformString = (0, import_react.useMemo)(() => {
		return transform ? CSS.Translate.toString(transform) : void 0;
	}, [transform]);
	const positionStyles = (0, import_react.useMemo)(() => ({
		left: `${120 + CellSize.WIDTH * leftIndex + 1}px`,
		top: `${40 + topIndex * CellSize.HEIGHT + 1}px`,
		width: `${CellSize.WIDTH - 1}px`,
		height: `${CellSize.HEIGHT * size - 1}px`
	}), [
		leftIndex,
		topIndex,
		size
	]);
	const handleDelete = useAutoCallback_default(() => onDeleteButtonClick?.({
		day,
		time: range[0]
	}));
	const content = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		position: "absolute",
		left: positionStyles.left,
		top: positionStyles.top,
		width: positionStyles.width,
		height: positionStyles.height,
		bg,
		p: 1,
		boxSizing: "border-box",
		cursor: "pointer",
		ref: setNodeRef,
		transform: transformString,
		...listeners,
		...attributes,
		onClick: onToggle,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScheduleText_default, {
			title: lecture.title,
			room
		})
	});
	return isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, {
		isOpen,
		onClose,
		isLazy: true,
		lazyBehavior: "unmount",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, { children: content }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PopoverContent, {
			onClick: (event) => event.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverArrow, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverCloseButton, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PopoverBody, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: "강의를 삭제하시겠습니까?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					colorScheme: "red",
					size: "xs",
					onClick: handleDelete,
					children: "삭제"
				})] })
			]
		})]
	}) : content;
});
var ScheduleItem_default = ScheduleItem;

//#endregion
//#region src/components/schedule/ScheduleTable.tsx
const ScheduleTable = (0, import_react.memo)(({ tableId, schedules, onScheduleTimeClick, onDeleteButtonClick }) => {
	const deferredSchedules = (0, import_react.useDeferredValue)(schedules);
	const colorsMap = (0, import_react.useMemo)(() => createScheduleColorMap(deferredSchedules), [deferredSchedules]);
	const getColor = (lectureId) => colorsMap.get(lectureId);
	const dndContext = useDndContext();
	const activeTableId = (0, import_react.useMemo)(() => {
		const activeId = dndContext.active?.id;
		return activeId ? String(activeId).split(":")[0] : null;
	}, [dndContext.active?.id]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Box, {
		position: "relative",
		outline: activeTableId === tableId ? "5px dashed" : void 0,
		outlineColor: "blue.300",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScheduleGrid_default, { onScheduleTimeClick }), deferredSchedules.map((schedule, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScheduleItem_default, {
			id: `${tableId}:${index}`,
			data: schedule,
			bg: getColor(schedule.lecture.id),
			onDeleteButtonClick
		}, `${schedule.lecture.title}-${index}`))]
	});
});
var ScheduleTable_default = ScheduleTable;

//#endregion
//#region src/components/schedule/ScheduleBoard.tsx
const ScheduleBoard = (0, import_react.memo)(({ index, tableId, schedules, isRemoveDisabled, onOpenSearchDialog, onDuplicateBoard, onRemoveBoard, onEmptyTimeCellClick, onScheduleDelete }) => {
	const handleScheduleTimeClick = useAutoCallback_default((timeInfo) => {
		onEmptyTimeCellClick(tableId, timeInfo);
	});
	const handleDeleteButtonClick = useAutoCallback_default((timeInfo) => {
		onScheduleDelete(tableId, timeInfo);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, {
		width: "600px",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
			justifyContent: "space-between",
			alignItems: "center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Heading, {
				as: "h3",
				fontSize: "lg",
				children: ["시간표 ", index + 1]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScheduleControls_default, {
				tableId,
				onOpenSearchDialog,
				onDuplicateBoard,
				onRemoveBoard,
				isRemoveDisabled
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScheduleDndProvider_default, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScheduleTable_default, {
			schedules,
			tableId,
			onScheduleTimeClick: handleScheduleTimeClick,
			onDeleteButtonClick: handleDeleteButtonClick
		}) })]
	});
});
var ScheduleBoard_default = ScheduleBoard;

//#endregion
//#region \0vite/preload-helper.js
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
	return "/front_7th_chapter4-2/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
	let promise = Promise.resolve();
	if (true               && deps && deps.length > 0) {
		const links = document.getElementsByTagName("link");
		const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
		const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
		function allSettled(promises$2) {
			return Promise.all(promises$2.map((p) => Promise.resolve(p).then((value$1) => ({
				status: "fulfilled",
				value: value$1
			}), (reason) => ({
				status: "rejected",
				reason
			}))));
		}
		promise = allSettled(deps.map((dep) => {
			dep = assetsURL(dep, importerUrl);
			if (dep in seen) return;
			seen[dep] = true;
			const isCss = dep.endsWith(".css");
			const cssSelector = isCss ? "[rel=\"stylesheet\"]" : "";
			const isBaseRelative = !!importerUrl;
			if (isBaseRelative) for (let i$1 = links.length - 1; i$1 >= 0; i$1--) {
				const link$1 = links[i$1];
				if (link$1.href === dep && (!isCss || link$1.rel === "stylesheet")) return;
			}
			else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) return;
			const link = document.createElement("link");
			link.rel = isCss ? "stylesheet" : scriptRel;
			if (!isCss) link.as = "script";
			link.crossOrigin = "";
			link.href = dep;
			if (cspNonce) link.setAttribute("nonce", cspNonce);
			document.head.appendChild(link);
			if (isCss) return new Promise((res, rej) => {
				link.addEventListener("load", res);
				link.addEventListener("error", () => rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`)));
			});
		}));
	}
	function handlePreloadError(err$2) {
		const e$1 = new Event("vite:preloadError", { cancelable: true });
		e$1.payload = err$2;
		window.dispatchEvent(e$1);
		if (!e$1.defaultPrevented) throw err$2;
	}
	return promise.then((res) => {
		for (const item of res || []) {
			if (item.status !== "rejected") continue;
			handlePreloadError(item.reason);
		}
		return baseModule().catch(handlePreloadError);
	});
};

//#endregion
//#region src/components/schedule/SchedulePage.tsx
const SearchDialog = (0, import_react.lazy)(() => __vitePreload(() => import("./SearchDialog-BWb8PK5y.js"), true               ? __vite__mapDeps([0,1,2,3,4]) : void 0));
const SchedulePage = () => {
	const schedulesMap = useScheduleContext();
	const { duplicateBoard, removeBoard, deleteSchedule } = useScheduleBoard();
	const [searchInfo, setSearchInfo] = (0, import_react.useState)(null);
	const deferredSchedulesMap = (0, import_react.useDeferredValue)(schedulesMap);
	const isRemoveDisabled = (0, import_react.useMemo)(() => Object.keys(schedulesMap).length === 1, [schedulesMap]);
	const handleOpenSearchDialog = useAutoCallback_default((tableId) => setSearchInfo({ tableId }));
	const handleCloseSearchDialog = useAutoCallback_default(() => setSearchInfo(null));
	const handleEmptyTimeCellClick = useAutoCallback_default((tableId, timeInfo) => setSearchInfo({
		tableId,
		...timeInfo
	}));
	const handleDuplicateBoard = useAutoCallback_default(duplicateBoard);
	const handleRemoveBoard = useAutoCallback_default(removeBoard);
	const handleScheduleDelete = useAutoCallback_default(deleteSchedule);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
		w: "full",
		gap: 6,
		p: 6,
		flexWrap: "wrap",
		children: Object.entries(deferredSchedulesMap).map(([tableId, schedules], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScheduleBoard_default, {
			index,
			tableId,
			schedules,
			isRemoveDisabled,
			onOpenSearchDialog: handleOpenSearchDialog,
			onDuplicateBoard: handleDuplicateBoard,
			onRemoveBoard: handleRemoveBoard,
			onEmptyTimeCellClick: handleEmptyTimeCellClick,
			onScheduleDelete: handleScheduleDelete
		}, tableId))
	}), searchInfo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
		fallback: null,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchDialog, {
			searchInfo,
			onClose: handleCloseSearchDialog
		})
	})] });
};
var SchedulePage_default = SchedulePage;

//#endregion
//#region src/data/dummyScheduleMap.ts
var dummyScheduleMap_default = {
	"schedule-1": [
		{
			day: "월",
			range: [
				1,
				2,
				3,
				4,
				5,
				6
			],
			room: "2공521",
			lecture: {
				id: "529540",
				title: "SW융합코딩1",
				credits: "3(0)",
				major: "SW융합대학<p>SW융합학부<p>SW융합경제경영전공",
				schedule: "월1~6(2공521)",
				grade: 1
			}
		},
		{
			day: "화",
			range: [
				1,
				2,
				3
			],
			room: "미디어509",
			lecture: {
				id: "527790",
				title: "객체지향프로그래밍(SW)",
				credits: "3(0)",
				major: "SW융합대학<p>SW융합학부<p>SW융합경제경영전공",
				schedule: "화1~3(미디어509)<p>목1~3(미디어509)",
				grade: 2
			}
		},
		{
			day: "목",
			range: [
				1,
				2,
				3
			],
			room: "미디어509",
			lecture: {
				id: "527790",
				title: "객체지향프로그래밍(SW)",
				credits: "3(0)",
				major: "SW융합대학<p>SW융합학부<p>SW융합경제경영전공",
				schedule: "화1~3(미디어509)<p>목1~3(미디어509)",
				grade: 2
			}
		},
		{
			day: "수",
			range: [
				1,
				2,
				3,
				4,
				5,
				6
			],
			room: "소프트304",
			lecture: {
				id: "540970",
				title: "파이썬프로그래밍(SW융합)",
				credits: "3(0)",
				major: "SW융합대학<p>SW융합학부<p>SW융합경제경영전공",
				schedule: "수1~6(소프트304)",
				grade: 2
			}
		},
		{
			day: "금",
			range: [
				1,
				2,
				3,
				4,
				5,
				6
			],
			room: "2공524",
			lecture: {
				id: "359210",
				title: "선형대수",
				credits: "3(0)",
				major: "SW융합대학<p>SW융합학부<p>SW융합경제경영전공",
				schedule: "금1~6(2공524)",
				grade: 2
			}
		},
		{
			day: "목",
			range: [
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12,
				13,
				14,
				15,
				16,
				17,
				18
			],
			room: "소프트414",
			lecture: {
				id: "548310",
				title: "실무중심종합설계프로젝트(티맥스)",
				credits: "3(0)",
				major: "SW융합대학<p>SW융합학부<p>SW융합경제경영전공",
				schedule: "목1~18(소프트414)<p>토1~18(소프트414)",
				grade: 3
			}
		},
		{
			day: "토",
			range: [
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12,
				13,
				14,
				15,
				16,
				17,
				18
			],
			room: "소프트414",
			lecture: {
				id: "548310",
				title: "실무중심종합설계프로젝트(티맥스)",
				credits: "3(0)",
				major: "SW융합대학<p>SW융합학부<p>SW융합경제경영전공",
				schedule: "목1~18(소프트414)<p>토1~18(소프트414)",
				grade: 3
			}
		}
	],
	"schedule-2": [
		{
			day: "월",
			range: [
				1,
				2,
				3,
				4,
				5,
				6
			],
			room: "국제205_PC",
			lecture: {
				id: "525770",
				title: "자료구조기초및실습",
				credits: "3(0)",
				major: "SW융합대학<p>SW융합학부<p>SW융합경제경영전공",
				schedule: "월1~6(국제205_PC)",
				grade: 2
			}
		},
		{
			day: "화",
			range: [
				1,
				2,
				3,
				4,
				5,
				6
			],
			room: "소프트227",
			lecture: {
				id: "372460",
				title: "알고리즘",
				credits: "3(0)",
				major: "SW융합대학<p>SW융합학부<p>SW융합경제경영전공",
				schedule: "화1~6(소프트227)",
				grade: 3
			}
		},
		{
			day: "수",
			range: [
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9
			],
			room: "2공524",
			lecture: {
				id: "388600",
				title: "인공지능",
				credits: "3(0)",
				major: "SW융합대학<p>SW융합학부<p>SW융합경제경영전공",
				schedule: "수1~9(2공524)",
				grade: 3
			}
		},
		{
			day: "목",
			range: [
				1,
				2,
				3,
				4,
				5,
				6
			],
			room: "소프트516",
			lecture: {
				id: "524820",
				title: "오픈소스SW활용",
				credits: "3(0)",
				major: "SW융합대학<p>SW융합학부<p>SW융합경제경영전공",
				schedule: "목1~6(소프트516)",
				grade: 3
			}
		},
		{
			day: "금",
			range: [
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11
			],
			room: "소프트414",
			lecture: {
				id: "548300",
				title: "인공지능입문및실습(티맥스)",
				credits: "3(0)",
				major: "SW융합대학<p>SW융합학부<p>SW융합경제경영전공",
				schedule: "금1~11(소프트414)",
				grade: 3
			}
		},
		{
			day: "토",
			range: [1, 2],
			room: "",
			lecture: {
				id: "451150",
				title: "노래-목소리3",
				credits: "1(0)",
				major: "음악·예술대학<p>공연영화학부 뮤지컬전공",
				schedule: "토1~2",
				grade: 3
			}
		}
	],
	"schedule-3": [
		{
			day: "월",
			range: [
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11
			],
			room: "소프트414",
			lecture: {
				id: "548290",
				title: "운영체제및실습(티맥스)",
				credits: "3(0)",
				major: "SW융합대학<p>SW융합학부<p>SW융합경제경영전공",
				schedule: "월1~11(소프트414)",
				grade: 4
			}
		},
		{
			day: "화",
			range: [
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11
			],
			room: "소프트414",
			lecture: {
				id: "548280",
				title: "데이터베이스와SQL실습(티맥스)",
				credits: "3(0)",
				major: "SW융합대학<p>SW융합학부<p>SW융합경제경영전공",
				schedule: "화1~11(소프트414)",
				grade: 4
			}
		},
		{
			day: "수",
			range: [
				1,
				2,
				3,
				4,
				5,
				6
			],
			room: "소프트406",
			lecture: {
				id: "366770",
				title: "시스템분석및설계",
				credits: "3(0)",
				major: "SW융합대학<p>SW융합학부<p>SW융합바이오전공",
				schedule: "수1~6(소프트406)",
				grade: 4
			}
		},
		{
			day: "목",
			range: [
				1,
				2,
				3,
				4,
				5,
				6
			],
			room: "미디어403",
			lecture: {
				id: "539800",
				title: "캡스톤디자인(정보통계)",
				credits: "3(0)",
				major: "SW융합대학<p>정보통계학과",
				schedule: "목1~6(미디어403)",
				grade: 4
			}
		},
		{
			day: "금",
			range: [1, 2],
			room: "치114",
			lecture: {
				id: "394090",
				title: "임상보철학2",
				credits: "1(0)",
				major: "치과대학<p>치의학과",
				schedule: "금1~2(치114)",
				grade: 4
			}
		},
		{
			day: "토",
			range: [
				1,
				2,
				3,
				4,
				5,
				6
			],
			room: "",
			lecture: {
				id: "550040",
				title: "반도체기초공학및산업의이해",
				credits: "3(0)",
				major: "공과대학<p>반도체WAVE융합전공",
				schedule: "토1~6",
				grade: 4
			}
		}
	],
	"schedule-4": [
		{
			day: "월",
			range: [
				11,
				12,
				13,
				14,
				15,
				16
			],
			room: "예323",
			lecture: {
				id: "343070",
				title: "문학사세미나",
				credits: "3(0)",
				major: "예술대학<p>문예창작과",
				schedule: "월11~16(예323)",
				grade: 1
			}
		},
		{
			day: "화",
			range: [
				3,
				4,
				5,
				6,
				7,
				8
			],
			room: "예018",
			lecture: {
				id: "361960",
				title: "소설창작세미나1",
				credits: "3(0)",
				major: "예술대학<p>문예창작과",
				schedule: "화3~8(예018)",
				grade: 3
			}
		},
		{
			day: "수",
			range: [
				3,
				4,
				5,
				6,
				7,
				8
			],
			room: "예술관D동207",
			lecture: {
				id: "533510",
				title: "영상문학의이론과창작",
				credits: "3(0)",
				major: "예술대학<p>문예창작과",
				schedule: "수3~8(예술관D동207)",
				grade: 2
			}
		},
		{
			day: "목",
			range: [
				3,
				4,
				5,
				6,
				7,
				8
			],
			room: "예술관D동308",
			lecture: {
				id: "533520",
				title: "비평창작연습",
				credits: "3(0)",
				major: "예술대학<p>문예창작과",
				schedule: "목3~8(예술관D동308)",
				grade: 3
			}
		},
		{
			day: "금",
			range: [
				3,
				4,
				5,
				6,
				7,
				8
			],
			room: "예술관D동308",
			lecture: {
				id: "481130",
				title: "소설창작연습",
				credits: "3(0)",
				major: "예술대학<p>문예창작과",
				schedule: "금3~8(예술관D동308)",
				grade: 2
			}
		}
	],
	"schedule-5": [
		{
			day: "월",
			range: [
				3,
				4,
				5,
				6
			],
			room: "의228",
			lecture: {
				id: "432030",
				title: "해부학",
				credits: "2(0)",
				major: "간호대학<p>간호학과",
				schedule: "월3~6(의228)",
				grade: 1
			}
		},
		{
			day: "화",
			range: [
				1,
				2,
				3
			],
			room: "의228",
			lecture: {
				id: "323070",
				title: "기본간호학1",
				credits: "3(0)",
				major: "간호대학<p>간호학과",
				schedule: "화1~3(의228)<p>목10~12(의228)",
				grade: 2
			}
		},
		{
			day: "목",
			range: [
				7,
				8,
				9
			],
			room: "의228",
			lecture: {
				id: "323070",
				title: "기본간호학1",
				credits: "3(0)",
				major: "간호대학<p>간호학과",
				schedule: "화1~3(의228)<p>목10~12(의228)",
				grade: 2
			}
		},
		{
			day: "수",
			range: [
				1,
				2,
				3,
				4
			],
			room: "의230",
			lecture: {
				id: "411690",
				title: "지역사회간호학3",
				credits: "2(0)",
				major: "간호대학<p>간호학과",
				schedule: "수1~4(의230)",
				grade: 4
			}
		},
		{
			day: "금",
			range: [
				1,
				2,
				3
			],
			room: "인521",
			lecture: {
				id: "409440",
				title: "중급일본어강독1",
				credits: "3(0)",
				major: "외국어대학<p>아시아중동학부 일본학전공",
				schedule: "화15~17(인521)<p>목8~10(인424)",
				grade: 2
			}
		},
		{
			day: "목",
			range: [
				1,
				2,
				3
			],
			room: "인424",
			lecture: {
				id: "409440",
				title: "중급일본어강독1",
				credits: "3(0)",
				major: "외국어대학<p>아시아중동학부 일본학전공",
				schedule: "화15~17(인521)<p>목8~10(인424)",
				grade: 2
			}
		}
	],
	"schedule-6": [
		{
			day: "화",
			range: [9, 10],
			room: "음악133",
			lecture: {
				id: "471870",
				title: "연주A",
				credits: "1(0)",
				major: "음악·예술대학<p>음악학부 기악전공(피아노)",
				schedule: "화9~10(음악133)",
				grade: 1
			}
		},
		{
			day: "토",
			range: [3, 4],
			room: "",
			lecture: {
				id: "502420",
				title: "피아노실기A",
				credits: "1(0)",
				major: "음악·예술대학<p>음악학부 기악전공(피아노)",
				schedule: "토3~4",
				grade: 1
			}
		},
		{
			day: "토",
			range: [7, 8],
			room: "",
			lecture: {
				id: "502420",
				title: "피아노실기A",
				credits: "1(0)",
				major: "음악·예술대학<p>음악학부 기악전공(피아노)",
				schedule: "토7~8",
				grade: 1
			}
		},
		{
			day: "월",
			range: [
				13,
				14,
				15,
				16
			],
			room: "음악104",
			lecture: {
				id: "318720",
				title: "국악사1",
				credits: "2(0)",
				major: "음악·예술대학<p>음악학부 기악전공",
				schedule: "월13~16(음악104)",
				grade: 2
			}
		},
		{
			day: "목",
			range: [
				9,
				10,
				11,
				12
			],
			room: "음악106",
			lecture: {
				id: "358200",
				title: "서양음악사1",
				credits: "2(0)",
				major: "음악·예술대학<p>음악학부 기악전공",
				schedule: "목9~12(음악106)",
				grade: 2
			}
		},
		{
			day: "화",
			range: [
				1,
				2,
				3,
				4
			],
			room: "음악105",
			lecture: {
				id: "367110",
				title: "시창청음",
				credits: "2(0)",
				major: "음악·예술대학<p>음악학부 기악전공",
				schedule: "화5~8(음악105)",
				grade: 1
			}
		},
		{
			day: "금",
			range: [
				5,
				6,
				7,
				8
			],
			room: "음악105",
			lecture: {
				id: "358200",
				title: "서양음악사1",
				credits: "2(0)",
				major: "음악·예술대학<p>음악학부 기악전공",
				schedule: "금5~8(음악105)",
				grade: 2
			}
		}
	]
};

//#endregion
//#region src/contexts/ScheduleProvider.tsx
const ScheduleProvider = ({ children }) => {
	const [schedulesMap, setSchedulesMap] = (0, import_react.useState)(dummyScheduleMap_default);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScheduleAction.Provider, {
		value: setSchedulesMap,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScheduleContext.Provider, {
			value: schedulesMap,
			children
		})
	});
};

//#endregion
//#region src/App.tsx
function App() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChakraProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScheduleProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SchedulePage_default, {}) }) });
}
var App_default = App;

//#endregion
//#region src/main.tsx
(0, import_client.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(App_default, {}));

//#endregion
export { parseSchedule as b, DAY_LABELS as c, useAutoCallback_default as d, useScheduleAction as e };
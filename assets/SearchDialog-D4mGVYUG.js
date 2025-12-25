import { f as __toESM } from "./rolldown-runtime-CINmCwk_.js";
import { a1 as require_react } from "./chakra-ui-YFQdXzg5.js";
import { A as ModalBody, B as ModalContent, C as Modal, D as Input, G as FormLabel, I as CheckboxGroup, J as Checkbox, K as FormControl, M as Button, N as Box, P as require_jsx_runtime, b as Wrap, c as Text, e as Tag, f as TagCloseButton, g as TagLabel, h as Tr, i as Thead, j as Th, k as Td, l as Tbody, m as Table, n as VStack, o as HStack, p as Stack, q as Select, x as ModalOverlay, y as ModalHeader, z as ModalCloseButton } from "./react-BDq5ydJY.js";
import { b as DAY_LABELS, c as useAutoCallback_default, d as useScheduleAction } from "./index-B_0QMDr5.js";
import { b as axios_default } from "./vendor--8zDkgLI.js";

//#region src/constants/search.ts
var import_react = /* @__PURE__ */ __toESM(require_react());
const TIME_SLOTS = [
	{
		id: 1,
		label: "09:00~09:30"
	},
	{
		id: 2,
		label: "09:30~10:00"
	},
	{
		id: 3,
		label: "10:00~10:30"
	},
	{
		id: 4,
		label: "10:30~11:00"
	},
	{
		id: 5,
		label: "11:00~11:30"
	},
	{
		id: 6,
		label: "11:30~12:00"
	},
	{
		id: 7,
		label: "12:00~12:30"
	},
	{
		id: 8,
		label: "12:30~13:00"
	},
	{
		id: 9,
		label: "13:00~13:30"
	},
	{
		id: 10,
		label: "13:30~14:00"
	},
	{
		id: 11,
		label: "14:00~14:30"
	},
	{
		id: 12,
		label: "14:30~15:00"
	},
	{
		id: 13,
		label: "15:00~15:30"
	},
	{
		id: 14,
		label: "15:30~16:00"
	},
	{
		id: 15,
		label: "16:00~16:30"
	},
	{
		id: 16,
		label: "16:30~17:00"
	},
	{
		id: 17,
		label: "17:00~17:30"
	},
	{
		id: 18,
		label: "17:30~18:00"
	},
	{
		id: 19,
		label: "18:00~18:50"
	},
	{
		id: 20,
		label: "18:55~19:45"
	},
	{
		id: 21,
		label: "19:50~20:40"
	},
	{
		id: 22,
		label: "20:45~21:35"
	},
	{
		id: 23,
		label: "21:40~22:30"
	},
	{
		id: 24,
		label: "22:35~23:25"
	}
];
const PAGE_SIZE = 100;

//#endregion
//#region src/lib/cachedFetch.ts
const cache = /* @__PURE__ */ new Map();
function cachedFetch(url) {
	const isCacheHit = cache.has(url);
	console.log(`[${isCacheHit ? "캐시" : "요청"}] ${url}:`, performance.now());
	if (isCacheHit) return cache.get(url);
	const promise = axios_default.get(url).then((response) => response, (error) => {
		cache.delete(url);
		throw error;
	});
	cache.set(url, promise);
	return promise;
}

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

//#endregion
//#region src/components/search/SearchFormControls.tsx
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
const QueryInput = (0, import_react.memo)(({ value, onChange }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormControl, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "검색어" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
		placeholder: "과목명 또는 과목코드",
		value,
		onChange: (e) => onChange(e.target.value)
	})] });
});
const CreditsSelect = (0, import_react.memo)(({ value, onChange }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormControl, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "학점" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
		value,
		onChange: (e) => onChange(+e.target.value),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: "",
				children: "전체"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: "1",
				children: "1학점"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: "2",
				children: "2학점"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
				value: "3",
				children: "3학점"
			})
		]
	})] });
});
const GradesCheckboxes = (0, import_react.memo)(({ value, onChange }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormControl, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "학년" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxGroup, {
		value,
		onChange: (value$1) => onChange(value$1.map(Number)),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HStack, {
			spacing: 4,
			children: [
				1,
				2,
				3,
				4
			].map((grade) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Checkbox, {
				value: grade,
				children: [grade, "학년"]
			}, grade))
		})
	})] });
});
const DaysCheckboxes = (0, import_react.memo)(({ value, onChange }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormControl, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "요일" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxGroup, {
		value,
		onChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HStack, {
			spacing: 4,
			children: DAY_LABELS.map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
				value: day,
				children: day
			}, day))
		})
	})] });
});
const TimesCheckboxes = (0, import_react.memo)(({ value, onChange }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormControl, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "시간" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxGroup, {
		colorScheme: "green",
		value,
		onChange: (values) => onChange(values.map(Number)),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrap, {
			spacing: 1,
			mb: 2,
			children: value.sort((a, b) => a - b).map((time) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tag, {
				size: "sm",
				variant: "outline",
				colorScheme: "blue",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TagLabel, { children: [time, "교시"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagCloseButton, { onClick: () => onChange(value.filter((v) => v !== time)) })]
			}, time))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {
			spacing: 2,
			overflowY: "auto",
			h: "100px",
			border: "1px solid",
			borderColor: "gray.200",
			borderRadius: 5,
			p: 2,
			children: TIME_SLOTS.map(({ id, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Checkbox, {
				size: "sm",
				value: id,
				children: [
					id,
					"교시(",
					label,
					")"
				]
			}, id) }, id))
		})]
	})] });
});
const MajorsCheckboxes = (0, import_react.memo)(({ value, onChange, items }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormControl, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "전공" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxGroup, {
		colorScheme: "green",
		value,
		onChange,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrap, {
			spacing: 1,
			mb: 2,
			children: value.map((major) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tag, {
				size: "sm",
				variant: "outline",
				colorScheme: "blue",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagLabel, { children: major.split("<p>").pop() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagCloseButton, { onClick: () => onChange(value.filter((v) => v !== major)) })]
			}, major))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {
			spacing: 2,
			overflowY: "auto",
			h: "100px",
			border: "1px solid",
			borderColor: "gray.200",
			borderRadius: 5,
			p: 2,
			children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
				size: "sm",
				value: item,
				children: item.replace(/<p>/gi, " ")
			}, item) }, item))
		})]
	})] });
});

//#endregion
//#region src/components/search/SearchItem.tsx
const SearchItem = (0, import_react.memo)(({ onClick,...lecture }) => {
	const handleClick = () => onClick(lecture);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tr, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
			width: "100px",
			children: lecture.id
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
			width: "50px",
			children: lecture.grade
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
			width: "200px",
			children: lecture.title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
			width: "50px",
			children: lecture.credits
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
			width: "150px",
			dangerouslySetInnerHTML: { __html: lecture.major }
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
			width: "150px",
			dangerouslySetInnerHTML: { __html: lecture.schedule }
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
			width: "80px",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				colorScheme: "green",
				onClick: handleClick,
				children: "추가"
			})
		})
	] });
});
var SearchItem_default = SearchItem;

//#endregion
//#region src/components/search/SearchTableBody.tsx
const SearchTableBody = (0, import_react.memo)(({ visibleLectures, onAddSchedule, loaderWrapperRef, loaderRef }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Box, {
	overflowY: "auto",
	maxH: "500px",
	ref: loaderWrapperRef,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
		size: "sm",
		variant: "striped",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tbody, { children: visibleLectures.map((lecture, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchItem_default, {
			onClick: onAddSchedule,
			...lecture
		}, `${lecture.id}-${index}`)) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		ref: loaderRef,
		h: "20px"
	})]
}));
var SearchTableBody_default = SearchTableBody;

//#endregion
//#region src/components/search/SearchTableHeader.tsx
const SearchTableHeader = (0, import_react.memo)(() => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thead, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tr, { children: [
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, {
		width: "100px",
		children: "과목코드"
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, {
		width: "50px",
		children: "학년"
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, {
		width: "200px",
		children: "과목명"
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, {
		width: "50px",
		children: "학점"
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, {
		width: "150px",
		children: "전공"
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, {
		width: "150px",
		children: "시간"
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { width: "80px" })
] }) }) }));
var SearchTableHeader_default = SearchTableHeader;

//#endregion
//#region src/components/search/SearchDialog.tsx
const fetchMajors = () => cachedFetch("./schedules-majors.json");
const fetchLiberalArts = () => cachedFetch("./schedules-liberal-arts.json");
const fetchAllLectures = () => Promise.all([
	fetchMajors(),
	fetchLiberalArts(),
	fetchMajors(),
	fetchLiberalArts(),
	fetchMajors(),
	fetchLiberalArts()
]);
const SearchDialog = (0, import_react.memo)(({ searchInfo, onClose }) => {
	const setSchedulesMap = useScheduleAction();
	const loaderWrapperRef = (0, import_react.useRef)(null);
	const loaderRef = (0, import_react.useRef)(null);
	const [lectures, setLectures] = (0, import_react.useState)([]);
	const [page, setPage] = (0, import_react.useState)(1);
	const [searchOptions, setSearchOptions] = (0, import_react.useState)({
		query: "",
		grades: [],
		days: [],
		times: [],
		majors: []
	});
	const filteredLectures = (0, import_react.useMemo)(() => {
		const { query = "", credits, grades, days, times, majors } = searchOptions;
		return lectures.filter((lecture) => lecture.title.toLowerCase().includes(query.toLowerCase()) || lecture.id.toLowerCase().includes(query.toLowerCase())).filter((lecture) => grades.length === 0 || grades.includes(lecture.grade)).filter((lecture) => majors.length === 0 || majors.includes(lecture.major)).filter((lecture) => !credits || lecture.credits.startsWith(String(credits))).filter((lecture) => {
			if (days.length === 0) return true;
			const schedules = lecture.schedule ? parseSchedule(lecture.schedule) : [];
			return schedules.some((s) => days.includes(s.day));
		}).filter((lecture) => {
			if (times.length === 0) return true;
			const schedules = lecture.schedule ? parseSchedule(lecture.schedule) : [];
			return schedules.some((s) => s.range.some((time) => times.includes(time)));
		});
	}, [lectures, searchOptions]);
	const lastPage = Math.ceil(filteredLectures.length / PAGE_SIZE);
	const visibleLectures = (0, import_react.useMemo)(() => filteredLectures.slice(0, page * PAGE_SIZE), [filteredLectures, page]);
	const allMajors = (0, import_react.useMemo)(() => [...new Set(lectures.map((lecture) => lecture.major))], [lectures]);
	const changeSearchOption = useAutoCallback_default((field, value) => {
		setPage(1);
		setSearchOptions((prev) => ({
			...prev,
			[field]: value
		}));
		loaderWrapperRef.current?.scrollTo(0, 0);
	});
	const addSchedule = useAutoCallback_default((lecture) => {
		if (!searchInfo) return;
		const { tableId } = searchInfo;
		const schedules = parseSchedule(lecture.schedule).map((schedule) => ({
			...schedule,
			lecture
		}));
		setSchedulesMap((prev) => ({
			...prev,
			[tableId]: [...prev[tableId], ...schedules]
		}));
		onClose();
	});
	(0, import_react.useEffect)(() => {
		if (!searchInfo) return;
		const start = performance.now();
		console.log("API 호출 시작: ", start);
		fetchAllLectures().then((results) => {
			const end = performance.now();
			console.log("모든 API 호출 완료 ", end);
			console.log("API 호출에 걸린 시간(ms): ", end - start);
			setLectures(results.flatMap((result) => result.data));
		});
	}, [searchInfo]);
	(0, import_react.useEffect)(() => {
		const $loader = loaderRef.current;
		const $loaderWrapper = loaderWrapperRef.current;
		if (!$loader || !$loaderWrapper) return;
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) setPage((prevPage) => Math.min(lastPage, prevPage + 1));
		}, {
			threshold: 0,
			root: $loaderWrapper
		});
		observer.observe($loader);
		return () => observer.unobserve($loader);
	}, [lastPage]);
	(0, import_react.useEffect)(() => {
		setSearchOptions((prev) => ({
			...prev,
			days: searchInfo?.day ? [searchInfo.day] : [],
			times: searchInfo?.time ? [searchInfo.time] : []
		}));
		setPage(1);
	}, [searchInfo]);
	const handleChangeQuery = useAutoCallback_default((value) => changeSearchOption("query", value));
	const handleChangeCredits = useAutoCallback_default((value) => changeSearchOption("credits", value));
	const handleChangeGrades = useAutoCallback_default((value) => changeSearchOption("grades", value));
	const handleChangeDays = useAutoCallback_default((value) => changeSearchOption("days", value));
	const handleChangeTimes = useAutoCallback_default((value) => changeSearchOption("times", value));
	const handleChangeMajors = useAutoCallback_default((value) => changeSearchOption("majors", value));
	const handleChange = {
		query: handleChangeQuery,
		credits: handleChangeCredits,
		grades: handleChangeGrades,
		days: handleChangeDays,
		times: handleChangeTimes,
		majors: handleChangeMajors
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
		isOpen: Boolean(searchInfo),
		onClose,
		size: "6xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ModalContent, {
			maxW: "90vw",
			w: "1000px",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalHeader, { children: "수업 검색" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalCloseButton, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalBody, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(VStack, {
					spacing: 4,
					align: "stretch",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HStack, {
							spacing: 4,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryInput, {
								value: searchOptions.query,
								onChange: handleChange.query
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditsSelect, {
								value: searchOptions.credits,
								onChange: handleChange.credits
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HStack, {
							spacing: 4,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GradesCheckboxes, {
								value: searchOptions.grades,
								onChange: handleChange.grades
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DaysCheckboxes, {
								value: searchOptions.days,
								onChange: handleChange.days
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HStack, {
							spacing: 4,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimesCheckboxes, {
								value: searchOptions.times,
								onChange: handleChange.times
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MajorsCheckboxes, {
								value: searchOptions.majors,
								onChange: handleChange.majors,
								items: allMajors
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
							align: "right",
							children: [
								"검색결과: ",
								filteredLectures.length,
								"개"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Box, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchTableHeader_default, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchTableBody_default, {
							visibleLectures,
							onAddSchedule: addSchedule,
							loaderWrapperRef,
							loaderRef
						})] })
					]
				}) })
			]
		})]
	});
});
var SearchDialog_default = SearchDialog;

//#endregion
export { SearchDialog_default as default };
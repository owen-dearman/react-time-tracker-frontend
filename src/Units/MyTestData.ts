import { TTimingCategory } from "./Types";

type TTestData = { title: string, desc: string, cat: TTimingCategory, fromTime: number[], toTime: number[] };

export var myTestData: TTestData[] = [
    {
        "title": "Third line support",
        "desc": "Fixed broken servers",
        "cat": TTimingCategory.tcSupport,
        "fromTime": [
            5,
            0,
            0
        ],
        "toTime": [
            5,
            30,
            0
        ]
    },
    {
        "title": "Go to barber shop",
        "desc": "Time for a trim",
        "cat": TTimingCategory.tcOoh,
        "fromTime": [
            12,
            30,
            0
        ],
        "toTime": [
            13,
            30,
            0
        ]
    },
    {
        "title": "TICKET-30000",
        "desc": "started development",
        "cat": TTimingCategory.tcDev,
        "fromTime": [
            11,
            0,
            0
        ],
        "toTime": [
            11,
            0,
            0
        ]
    },
    {
        "title": "Invent time travelling",
        "desc": "removed 60mph speed limiter on car",
        "cat": TTimingCategory.tcTest,
        "fromTime": [
            17,
            0,
            0
        ],
        "toTime": [
            15,
            30,
            30
        ]
    },
    {
        "title": "Live Laugh Love",
        "desc": "Let's go to the pub",
        "cat": TTimingCategory.tcBreak,
        "fromTime": [
            22,
            15,
            0
        ],
        "toTime": [
            23,
            59,
            0
        ]
    },
    {
        "title": "Restrospective",
        "desc": "",
        "cat": TTimingCategory.tcIntMeet,
        "fromTime": [
            14,
            35,
            40
        ],
        "toTime": [
            15,
            0,
            0
        ]
    }
]
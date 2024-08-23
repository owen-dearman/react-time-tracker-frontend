import { msToHHMMSSWords } from "./TimeUtils";

export type TSchedule = { date: string, timings: TTimings };
export type TTimings = TTiming[];

export class TTiming {
    id: number;
    title: string;
    category: TTimingCategory
    description: string;
    startTime: Date; //Ignore Date aspect
    endTime: Date; //Ignore Date aspect


    private DurationMilliseconds(): number {
        return this.endTime.getTime() - this.startTime.getTime();
    }

    DurationHHMMSS(aWantMS = false): string {
        var duration = this.DurationMilliseconds();
        if (duration < 1) {
            return ""
        } else {
            return msToHHMMSSWords(duration, aWantMS);
        }
    }

    Date(): number {
        if (this.startTime.getDate() !== this.endTime.getDate()) {
            console.debug('Start time and end time are on different dates. Using date from Start time');
        }
        return this.startTime.getDate();
    }

    constructor(id: number, title: string, description: string, category: TTimingCategory, startTime: Date, endTime: Date) {
        // if (startTime > endTime) {
        // throw new Error("Start time later than end time");
        // }

        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.startTime = startTime;
        this.endTime = endTime;

    };
}

export enum TTimingCategory {
    tcAdmin = "Admin",
    tcBreak = "Break",
    tcDev = "Development",
    tcIntMeet = "Meeting (Internal)",
    tcExtMeet = "Meeting (External)",
    tcOoh = "Out Of Office",
    tcSupport = "Support",
    tcTest = "Testing",
    tcTrain = "Training",
    tcOther = "Other"
};

export enum TDay {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

export enum TMonth {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    October,
    November,
    December
}
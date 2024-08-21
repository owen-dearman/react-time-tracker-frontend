import { msToHHMMSSWords } from "./TimeUtils";

export type TTimings = TTiming[];

export class TTiming {
    id: number;
    title: string;
    category: TTimingCategory
    description: string;
    startTime: Date;
    endTime: Date;

    private DurationMilliseconds(): number {
        return this.endTime.getTime() - this.startTime.getTime();
    }

    DurationHHMMSS(aWantMS = false): string {
        return msToHHMMSSWords(this.DurationMilliseconds(), aWantMS);
    }

    TheDate(): string {
        if (this.startTime.getDate = this.endTime.getDate) {
            return this.startTime.toDateString();
        }
        else
            return this.startTime.toDateString() + " to " + this.endTime.toDateString();
    }

    constructor(title: string, description: string, category: TTimingCategory, startTime: Date, endTime: Date) {
        if (startTime > endTime) {
            throw new Error("Start time later than end time");
        }

        this.id = 1;
        this.title = title;
        this.description = description;
        this.category = category;
        this.startTime = startTime;
        this.endTime = endTime;

    };
}

export enum TTimingCategory {
    tcMeet = "Meeting",
    tcDev = "Development",
    tcLunch = "Lunch",
    tcSupport = "Support",
    tcTest = "Testing",
    tcOoh = "Out Of Office",
    tcTrain = "Training",
    tcAdmin = "Admin",
    tcOther = "Other"
};
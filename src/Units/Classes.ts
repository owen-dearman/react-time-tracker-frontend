class TTiming {
    id: number;
    title: string;
    category: TTimingCategory
    description: string;
    startTime: Date;
    endTime: Date;

    DurationMilliseconds(): number {
        return this.endTime.getTime() - this.startTime.getTime();
    }

    DurationUTC(): () => string {
        var diffDate: Date = new Date(0)
        diffDate.setUTCMilliseconds(this.DurationMilliseconds());
        return diffDate.toUTCString;
    }

    constructor(title: string, description: string, category: TTimingCategory, startTime: Date, endTime: Date) {
        this.id = 1;
        this.title = title;
        this.description = description;
        this.category = category;
        this.startTime = startTime;
        this.endTime = endTime;

    };
}

enum TTimingCategory {
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
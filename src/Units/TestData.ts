import { TTiming } from "./Types";
import { myTestData } from "./MyTestData";

export function TestData(): TTiming[] {
    var result: TTiming[] = [];

    myTestData.forEach(element => {
        var idx = myTestData.indexOf(element);
        var fromDate = new Date(Date.now());
        fromDate.setHours(element.fromTime[0], element.fromTime[1], element.fromTime[2]);
        var toDate = new Date(Date.now());
        toDate.setHours(element.toTime[0], element.toTime[1], element.toTime[2]);
        var timing = new TTiming(idx, element.title, element.desc, element.cat, fromDate, toDate);
        result.push(timing);
    })

    return result;
};
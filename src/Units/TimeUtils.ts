import { TDay, TMonth } from "./Types";

export function msToHHMMSSSymbols(aDuration: number, aWantS: boolean = false, aWantMS: boolean = false) {
    var [hours, minutes, seconds, milliseconds] = msToHHMMSS(aDuration);
    return `${hours}:${minutes}` + (aWantS ? `:${seconds}` : "") + (aWantMS ? `.${milliseconds}` : "");
}

export function msToHHMMSSWords(aDuration: number, aWantMS: boolean) {
    var [hours, minutes, seconds, milliseconds] = msToHHMMSS(aDuration);
    var result = "";
    if (hours !== "00") {
        result = result + hours + " hours ";
    };
    if (minutes !== "00") {
        result = result + minutes + " minutes ";
    };
    if (seconds !== "00") {
        result = result + seconds + " seconds ";
    };
    if (aWantMS && milliseconds !== "00") {
        result = result + milliseconds + " milliseconds ";
    };

    return result;
}

function msToHHMMSS(aDuration: number): string[] {
    var milliseconds = Math.floor((aDuration % 1000) / 100).toString().padStart(2, "0");
    var seconds = Math.floor((aDuration / 1000) % 60).toString().padStart(2, "0");
    var minutes = Math.floor((aDuration / (1000 * 60)) % 60).toString().padStart(2, "0");
    var hours = Math.floor((aDuration / (1000 * 60 * 60)) % 24).toString().padStart(2, "0");
    return [hours, minutes, seconds, milliseconds];
}


export function GetDateString(aDate: Date): string { return `${TDay[aDate.getDay()]} ${aDate.getDate()} ${TMonth[aDate.getMonth()]} ${aDate.getFullYear()}` };
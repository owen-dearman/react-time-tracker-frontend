export function msToHHMMSS(aDuration: number, aWantMS: boolean) {
    var milliseconds = Math.floor((aDuration % 1000) / 100).toString().padStart(2, "0");
    var seconds = Math.floor((aDuration / 1000) % 60).toString().padStart(2, "0");
    var minutes = Math.floor((aDuration / (1000 * 60)) % 60).toString().padStart(2, "0");
    var hours = Math.floor((aDuration / (1000 * 60 * 60)) % 24).toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}` + ((aWantMS) ? `.${milliseconds}` : "");
}
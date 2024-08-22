import { TTiming } from "./Types";
import { TError } from "./Errors";

export function ValidateTiming(aTiming: TTiming): { isValid: boolean; errMsg: string } {
    var result = { isValid: true, errMsg: "" };
    try {

        if (aTiming.startTime.getTime() > aTiming.endTime.getTime()) {
            result = { isValid: false, errMsg: TError.eStartTimeAfterEndTime };
        }

        if (aTiming.startTime.getTime() == aTiming.endTime.getTime()) {
            result = { isValid: false, errMsg: TError.eStartTimeEqualToEndTime };
        }

    } catch (error) {
        console.error(error);
        throw error;

    } finally {
        console.debug({ Title: aTiming.title, Start: aTiming.startTime, End: aTiming.endTime, isValid: result.isValid, errMsg: result.errMsg });
        return result;
    }
}

import { TTiming } from "./Types";
import { TError, TErrorLevel, TValidation } from "./Errors";

export function ValidateTiming(aTiming: TTiming): TValidation {
    var result: TValidation = { validation: TErrorLevel.elNone, errMsg: "" };
    try {

        if (aTiming.startTime.getTime() > aTiming.endTime.getTime()) {
            result = { validation: TErrorLevel.elError, errMsg: TError.eStartTimeAfterEndTime };
        }

        if (aTiming.startTime.getTime() == aTiming.endTime.getTime()) {
            result = { validation: TErrorLevel.elWarning, errMsg: TError.eStartTimeEqualToEndTime };
        }

    } catch (error) {
        console.error(error);
        throw error;

    } finally {
        console.debug({ Title: aTiming.title, Start: aTiming.startTime, End: aTiming.endTime, result: result.validation, errMsg: result.errMsg });
        return result;
    }
}

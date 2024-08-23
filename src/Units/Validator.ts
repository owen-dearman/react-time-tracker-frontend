import { TTiming } from "./Types";
import { TError, TErrorLevel, TValidation } from "./Errors";

export function ValidateTiming(aTiming: TTiming): TValidation {
    var result: TValidation = { validation: TErrorLevel.None, errMsg: "" };
    try {

        if (aTiming.startTime.getTime() > aTiming.endTime.getTime()) {
            result = { validation: TErrorLevel.Error, errMsg: TError.StartTimeAfterEndTime };
        }

        if (aTiming.startTime.getTime() === aTiming.endTime.getTime()) {
            result = { validation: TErrorLevel.Warning, errMsg: TError.StartTimeEqualToEndTime };
        }

    } catch (error) {
        console.error(error);
        throw error;

    } finally {
        console.log({ Title: aTiming.title, Start: aTiming.startTime, End: aTiming.endTime, result: result.validation, errMsg: result.errMsg });
        return result;
    }
}

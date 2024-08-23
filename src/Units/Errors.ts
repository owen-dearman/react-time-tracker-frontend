export enum TError {
    eStartTimeAfterEndTime = "Start time is later than end time",
    eStartTimeEqualToEndTime = "Start time is equal to end time"
}

export enum TErrorLevel {
    elError,
    elWarning,
    elHint,
    elInfo,
    elNone
}

export type TValidation = { validation: TErrorLevel, errMsg: string };


export function GetErrorLevelIconURL(aLvl: TErrorLevel): string {
    switch (aLvl) {
        case TErrorLevel.elError: { return "Icons/Error.png" };
        case TErrorLevel.elWarning: { return "Icons/Warning.png" };
        case TErrorLevel.elHint, TErrorLevel.elInfo: { return "Icons/Hint.png" };
        default: { return "Icons/GreyTick.png" };
    }
}
export enum TError {
    StartTimeAfterEndTime = "Start time is later than end time",
    StartTimeEqualToEndTime = "Start time is equal to end time"
}

export enum TErrorLevel {
    Error,
    Warning,
    Hint,
    Info,
    None
}

export type TValidation = { validation: TErrorLevel, errMsg: string };


export function GetErrorLevelIconURL(aLvl: TErrorLevel): string {
    switch (aLvl) {
        case TErrorLevel.Error: { return "Icons/Error.png" };
        case TErrorLevel.Warning: { return "Icons/Warning.png" };
        case TErrorLevel.Hint, TErrorLevel.Info: { return "Icons/Hint.png" };
        default: { return "Icons/GreyTick.png" };
    }
}
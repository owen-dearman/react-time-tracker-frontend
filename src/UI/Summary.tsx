import { useState } from "react";
import { TTiming } from "../Units/Types"
import { ValidateTiming } from "../Units/Validator";
import { TimeContainer } from "./TimeContainer";
import { GetErrorLevelIconURL } from "../Units/Errors";

interface ISummary {
    aTiming: TTiming
}
export function Summary({ aTiming }: ISummary): JSX.Element {
    var [isSectionExpanded, SetIsSectionExpanded] = useState(false);
    const { validation, errMsg } = ValidateTiming(aTiming);

    return (
        <div className="summary-row" onClick={() => SetIsSectionExpanded(!isSectionExpanded)}>
            <div className="summary-info-container">
                <div className="summary-banner">
                    <p className="summary-category">{aTiming.category}</p>
                    {aTiming.title !== "" && <div className="vertical-line"></div>}
                    <p className="summary-title">{aTiming.title}</p>
                </div>
                {isSectionExpanded && <p className="summary-description">{aTiming.description}</p>}
                <TimeContainer startTime={aTiming.startTime.getTime()} endTime={aTiming.endTime.getTime()} />
                {isSectionExpanded && <p className="summary-duration">{aTiming.DurationHHMMSS()}</p>}
            </div>
            <div>
                <img className="status-icon" src={GetErrorLevelIconURL(validation)} title={errMsg}></img>
            </div>
        </div>
    )
}
import { msToHHMMSSSymbols } from "../Units/TimeUtils"
import { TTiming } from "../Units/Types"

interface ISummary {
    aTiming: TTiming
}
export function Summary({ aTiming }: ISummary): JSX.Element {
    var isSectionExpanded = false;
    return (
        <div className="summary-row">
            <div className="summary-info-container">
                <div className="summary-banner">
                    <p className="summary-category">{aTiming.category}</p>
                    <div className="vertical-line"></div>
                    <p className="summary-title">{aTiming.title}</p>
                </div>
                <div className="summary-time-container">
                    <div className="timebox">
                        <img className="timebox-icon" src="Icons\FromArrow.png"></img>
                        <p className="timebox-time">{msToHHMMSSSymbols(aTiming.startTime.getTime(), false)}</p>
                    </div>
                    <div className="timebox">
                        <p className="timebox-time">{msToHHMMSSSymbols(aTiming.endTime.getTime(), false)}</p>
                        <img className="timebox-icon" src="Icons\ToArrow.png"></img>
                    </div>
                </div>
                {<p className="summary-duration">{aTiming.DurationHHMMSS()}</p>}
                {isSectionExpanded && <p>{aTiming.description}</p>}
            </div>
            <div>
                <img className="status-icon" src="Icons\GreyTick.png"></img>
            </div>
        </div>
    )
}
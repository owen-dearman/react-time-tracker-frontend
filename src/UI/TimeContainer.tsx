import { msToHHMMSSSymbols } from "../Units/TimeUtils"

interface ITimeContainer {
    startTime: number;
    endTime: number
}

export function TimeContainer(aTimes: ITimeContainer): JSX.Element {
    return (
        <div className="summary-time-container">
            <div className="timebox">
                <img className="timebox-icon" src="Icons\FromArrow.png" alt="Icon of white clock face with blank hands to 7 o'clock. Offset green circle with white arrow pointing to the right" />
                <p className="timebox-time">{msToHHMMSSSymbols(aTimes.startTime)}</p>
            </div>
            <div className="timebox">
                <p className="timebox-time">{msToHHMMSSSymbols(aTimes.endTime)}</p>
                <img className="timebox-icon" src="Icons\ToArrow.png" alt="Icon of white clock face with blank hands to 7 o'clock. Offset red circle with white arrow pointing to the left" />
            </div>
        </div>
    )
}
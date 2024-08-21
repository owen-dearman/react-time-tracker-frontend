import { msToHHMMSSSymbols } from "../Units/TimeUtils"
import { TTiming } from "../Units/Types"

interface ISummary {
    aTiming: TTiming
}
export function Summary({ aTiming }: ISummary): JSX.Element {
    return (
        <section className="summary-row">
            <p className="summary-category">{aTiming.category}</p>
            <h2 className="summary-title">{aTiming.title}</h2>
            <div className="summary-time-container">
                <h3>{msToHHMMSSSymbols(aTiming.startTime.getTime(), false)}</h3>
                <h3>{msToHHMMSSSymbols(aTiming.endTime.getTime(), false)}</h3>
            </div>
            <p className="summary-duration">{aTiming.DurationHHMMSS()}</p>
            {/* <p>{aTiming.description}</p> */}
        </section>
    )
}
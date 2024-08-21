import { msToHHMMSS } from "../Units/TimeUtils"
import { TTiming } from "../Units/Types"

interface ISummary {
    aTiming: TTiming
}
export function Summary({ aTiming }: ISummary): JSX.Element {
    return (
        <section>
            <h2>{aTiming.title}</h2>
            <h3>{aTiming.category}</h3>
            <div>
                <h3>{msToHHMMSS(aTiming.startTime.getTime(), false)}</h3>
                <h3>{msToHHMMSS(aTiming.endTime.getTime(), false)}</h3>
            </div>
            <h3>{aTiming.DurationHHMMSS()}</h3>
            <p>{aTiming.description}</p>
        </section>
    )
}
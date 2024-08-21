import { TTimings } from "../Units/Types";
import { Summary } from "./Summary";

interface ISummaryList {
    aTimings: TTimings
}

export function SummaryList({ aTimings }: ISummaryList): JSX.Element {
    return (
        <div>
            <h2>Your Summary</h2>
            {aTimings.map((aTiming) => { return <Summary aTiming={aTiming} /> })}
        </div>
    )
}
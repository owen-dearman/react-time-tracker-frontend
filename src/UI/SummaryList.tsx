import { TSchedule } from "../Units/Types";
import { Summary } from "./Summary";
import { NewTimingForm } from "./NewTimingForm";
import { useState } from "react";

interface ISummaryList {
    aSchedule: TSchedule
}

export function SummaryList({ aSchedule }: ISummaryList): JSX.Element {
    var [isNewTimingsFormOpen, setNewTimingsFormOpen] = useState(true);


    return (
        <div className="summary-container">
            <h2 className="summary-list-title">{aSchedule.date}</h2>
            {!isNewTimingsFormOpen ? <button onClick={() => { setNewTimingsFormOpen(true) }}>+</button> : <button onClick={() => { setNewTimingsFormOpen(false) }}>X</button>}
            {isNewTimingsFormOpen && <NewTimingForm aDate={aSchedule.date} />}

            <div className="summary-list">
                {aSchedule.timings.map((aTiming) => { return <Summary key={aTiming.id} aTiming={aTiming} /> })}
            </div>
        </div>

    )
}
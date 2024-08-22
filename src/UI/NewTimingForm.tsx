import { TTimingCategory } from "../Units/Types";
import { TimeContainer } from "./TimeContainer";
import { TimePicker } from "react-time-picker"

interface INewTimingForm {
    aDate: string;
}

export function NewTimingForm({ aDate }: INewTimingForm): JSX.Element {
    return (
        <section className="new-times-form-container">
            <div className="new-times-banner">
                <p>Add timing for {aDate}</p>
            </div>
            <TimeContainer startTime={Date.now()} endTime={Date.now()} />
            {/* <TimePicker /> */}
            <h2>Title</h2>
            <input placeholder="Working hard..." />
            <select>
                {Object.entries(TTimingCategory).map(([key, value]) => { return <option value={key}>{value}</option> })}
            </select>
            <h2>Description</h2>
            <textarea placeholder="...or hardly working?" />
            <button type="submit">Submit</button>
            <button>Close</button>
        </section>
    )
}
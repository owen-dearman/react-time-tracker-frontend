import { Title } from "./Title";
import { SummaryList } from "./SummaryList";
import { TTimings, TTiming, TTimingCategory } from "../Units/Types";

function App(): JSX.Element {
    var timings: TTimings = [];

    const fromDate = new Date(Date.now());
    fromDate.setHours(8, 10, 30);

    const testEvent = new TTiming('test', 'test', TTimingCategory.tcAdmin, fromDate, new Date(Date.now()));
    const testEvent2 = new TTiming('test1', 'test1', TTimingCategory.tcDev, new Date(Date.now()), new Date(Date.now()));
    timings.push(testEvent);
    timings.push(testEvent2);

    return (
        <div>
            <Title />
            <SummaryList aTimings={timings} />
        </div>
    );
}

export default App;
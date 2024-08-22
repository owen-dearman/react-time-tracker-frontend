import { Title } from "./Title";
import { SummaryList } from "./SummaryList";
import { TSchedule, TTiming, TTimingCategory } from "../Units/Types";
import { NavBar } from "./NavBar";
import { GetDateString } from "../Units/TimeUtils";

function App(): JSX.Element {
    const fromDate = new Date(Date.now());
    var schedule: TSchedule = { date: GetDateString(fromDate), timings: [] };


    fromDate.setHours(8, 10, 30);

    const testEvent = new TTiming(1, 'Third line support', 'Fixed broken servers', TTimingCategory.tcSupport, fromDate, new Date(Date.now()));
    const testEvent2 = new TTiming(2, 'ATTUNE-1000', 'Started development and created preliminary branch', TTimingCategory.tcDev, new Date(Date.now()), new Date(Date.now()));
    const testEvent3 = new TTiming(3, '', 'Started development and created preliminary branch', TTimingCategory.tcIntMeet, fromDate, new Date(Date.now()));
    schedule.timings.push(testEvent, testEvent2, testEvent3);

    return (
        <div>
            <Title />
            <div className="page-content">
                <NavBar />
                <SummaryList aSchedule={schedule} />
            </div>
        </div>
    );
}

export default App;
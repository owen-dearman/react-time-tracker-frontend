import { Title } from "./Title";
import { SummaryList } from "./SummaryList";
import { TSchedule } from "../Units/Types";
import { NavBar } from "./NavBar";
import { GetDateString } from "../Units/TimeUtils";
import { TestData } from "../Units/TestData";

function App(): JSX.Element {
    var schedule: TSchedule = { date: GetDateString(new Date(Date.now())), timings: [] };
    schedule.timings = schedule.timings.concat(TestData());

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
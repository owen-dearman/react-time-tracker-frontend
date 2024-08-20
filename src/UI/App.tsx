import { Title } from "./Title";
import { Summary } from "./Summary";

function App(): JSX.Element {
    var timings: TTiming[] = [];
    const testEvent = new TTiming('test', 'test', TTimingCategory.tcAdmin, new Date(Date.now()), new Date(Date.now()));
    timings.push(testEvent);

    return (
        <div>
            <Title />
            <Summary />
        </div>
    );
}

export default App;
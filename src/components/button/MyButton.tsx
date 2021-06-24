import { EventsForTrackers, EXAMPLE_EVENT_ONE } from "../../events/events";
import TrackerWrapper from "../tracker-wrapper/TrackerWrapper"

export interface MyChildrenProps {
    title: string;
}

const MyButton = ({title}: MyChildrenProps) => {
    return (
        <button
            onClick={() => alert('action')}
        >
            {title}
        </button>
    )
}

export const WrappedButton = TrackerWrapper(EventsForTrackers[EXAMPLE_EVENT_ONE],  MyButton);
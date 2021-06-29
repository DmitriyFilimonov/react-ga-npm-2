import { EventsForTrackers, EXAMPLE_EVENT_ONE } from "../../events/events";
import TrackerWrapper from "../tracker-wrapper/TrackerWrapper";

export interface MyChildrenProps {
    title: string;
    onClick: Function;
}

export const MyButton: React.FC<MyChildrenProps> = ({ title, onClick: myOnClick }) => {
    const innerOnClick = myOnClick
    return (
        <button
            onClick={() => innerOnClick()}
        >
            {title}
        </button>
    )
}

export const WrappedButton = TrackerWrapper(EventsForTrackers[EXAMPLE_EVENT_ONE], MyButton);
import React from "react"
import { EventsForTrackers, EXAMPLE_EVENT_TWO } from "../../events/events";
import TrackerWrapper from "../tracker-wrapper/TrackerWrapper";
import { MyButton } from "./abstract-button/MyButton";

const WrappedButton = TrackerWrapper(EventsForTrackers[EXAMPLE_EVENT_TWO], MyButton);
export const WithEventTwoWrappedButton = () =>
    <WrappedButton
        onClick={() => alert(`button's action two`)}
        title='button 2'
    />
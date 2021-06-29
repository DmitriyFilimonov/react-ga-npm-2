import React from "react"
import { EventsForTrackers } from "../../events/events";
import TrackerWrapper from "../tracker-wrapper/TrackerWrapper";
import { MyButton } from "./abstract-button/MyButton"

const WrappedButton = TrackerWrapper(EventsForTrackers.EXAMPLE_EVENT_ONE, MyButton);
export const WithEventOneWrappedButton = () =>
    <WrappedButton
        onClick={() => alert(`button's action one`)}
        title='button 1'
    />
import { TrackerEventType } from "../types/types";

// event names
export const EXAMPLE_EVENT_ONE = 'EXAMPLE_EVENT_ONE';
export const EXAMPLE_EVENT_TWO = 'EXAMPLE_EVENT_TWO';

//events
export const EventsForTrackers: { [eventName: string]: TrackerEventType[] } = {
    EXAMPLE_EVENT_ONE: [{
        serviceName: "google",
        action: 'anyValue',
        category: 'anyValue',
        label: 'anyValue',
    }, {
        serviceName: "yandex",
        name: 'anyValue',
        type: 'anyValue',
        conditions: [],
    },]
};
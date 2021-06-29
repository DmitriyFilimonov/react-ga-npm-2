import { TrackerEvent } from "../types/types";

// event names
export const EXAMPLE_EVENT_ONE = 'EXAMPLE_EVENT_ONE';
export const EXAMPLE_EVENT_TWO = 'EXAMPLE_EVENT_TWO';

//events
export const EventsForTrackers: { [eventName: string]: TrackerEvent[] } = {
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
    },],
    EXAMPLE_EVENT_TWO: [{
        serviceName: "google",
        action: 'anotherValue',
        category: 'anotherValue',
        label: 'anotherValue',
    }, {
        serviceName: "yandex",
        name: 'anotherValue',
        type: 'anotherValue',
        conditions: [],
    },]
};
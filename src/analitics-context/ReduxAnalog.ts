import GA4React from "ga-4-react";
import { ClickEventWrapper, GoogleEvent, YandexEvent } from "../types/types";

export interface IMyStore {
    serviceId: {
        [ServiceNames.Google]: string,
        [ServiceNames.Yandex]: string
    };
    eventsBuffer: {
        [ServiceNames.Google]: GoogleEvent[],
        [ServiceNames.Yandex]: YandexEvent[]
    };
    isInitialized: boolean;
    analiticsInstance: GA4React | undefined;
    acceptGoogleId: (googleId: string) => IMyStore;
    getStateAnalog: () => IMyStore;
    tryCallEvents: (params: ClickEventWrapper) => void;
}

enum ServiceNames {
    Google = 'google',
    Yandex = 'yandex',
};

export const myStore: IMyStore = {
    serviceId: {
        [ServiceNames.Google]: '',
        [ServiceNames.Yandex]: '',
    },
    eventsBuffer: {
        [ServiceNames.Google]: [],
        [ServiceNames.Yandex]: [],
    },
    isInitialized: false,
    analiticsInstance: undefined,
    acceptGoogleId(googleId: string) {
        if (googleId == '') return this;
        this.serviceId.google = googleId;
        this.analiticsInstance = new GA4React(googleId);
        this.analiticsInstance.initialize();
        this.isInitialized = true;
        return this;
    },
    tryCallEvents({
        action,
        category,
        label,
    }: ClickEventWrapper) {

        if (!this.serviceId.google) {
            this.eventsBuffer.google.push({
                action,
                category,
                label,
            });
        } else {
            this.analiticsInstance?.event(
                action,
                category,
                label,
            )
        }

        if (!this.serviceId.yandex) {
            this.eventsBuffer.yandex.push({
                name: action,
                type: category
            })
        } else {
            // call yandex event
        }

    },
    getStateAnalog() {
        return this;
    },
}
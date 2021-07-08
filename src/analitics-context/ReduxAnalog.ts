import GA4React from "ga-4-react";

export interface IMyStore {
    id: string;
    isInitialized: boolean;
    analiticsInstance: GA4React | undefined;
    acceptGoogleId: (googleId: string) => IMyStore;
    getStateAnalog: () => IMyStore;
}

export const myStore: IMyStore = {
    id: '',
    isInitialized: false,
    analiticsInstance: undefined,
    acceptGoogleId(googleId: string) {
        if (googleId == '') return this;
        this.id = googleId;
        this.analiticsInstance = new GA4React(googleId);
        this.analiticsInstance.initialize();
        this.isInitialized = true;
        return this;
    },
    getStateAnalog() {
        return this;
    }
}
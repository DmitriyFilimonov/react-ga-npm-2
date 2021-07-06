import GA4React from "ga-4-react";

export interface IMyStore {
    isInitialized: boolean;
    ga4React: GA4React | undefined;
    acceptGoogleId: (googleId: string) => IMyStore;
    getStateAnalog: () => IMyStore;
}

export const myStore: IMyStore = {
    isInitialized: false,
    ga4React: undefined,
    acceptGoogleId(googleId: string) {
        alert('initialization')
        this.ga4React = new GA4React(
            googleId, // 'G-1B6E1Z43HE' // сделать идентификатор динамическим, проверить исходник редакс (контекст)
        );
        this.ga4React.initialize();
        this.isInitialized = true;
        return this;
    },
    getStateAnalog() {
        return this;
    }
}
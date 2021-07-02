import { createContext } from "react";
import { ClickEventWrapper } from "../types/types";
import GA4React from 'ga-4-react';

export type onRenderFunction = (url: string) => void;

type Refresh = 'pass' | 'refresh';

export interface IAnaliticsContext {
    onClick: Function,
    onRender: onRenderFunction,
}

export const AnaliticsObject: IAnaliticsContext = (() => {
    const ga4react = new GA4React(
        'G-1B6E1Z43HE',
    );
    let ga4 = ga4react.initialize().then(ga4 => ga4)
    return {
        onClick: function ({
            action,
            category,
            label,
        }: ClickEventWrapper) {
            ga4.then(ga4 => {
                ga4.event(
                    action,
                    category,
                    label
                )
            }, (err) => console.log(err))
        },
        onRender: function (url: string) {
            ga4react.pageview(url)
        },
    }
})()
export const AnaliticsContext = createContext<IAnaliticsContext>(AnaliticsObject);
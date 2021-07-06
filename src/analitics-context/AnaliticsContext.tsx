import { createContext } from "react";
import { ClickEventWrapper } from "../types/types";
import GA4React from 'ga-4-react';
import { myStore } from "./ReduxAnalog";

export type onRenderFunction = (url: string) => void;

type Refresh = 'pass' | 'refresh';

export interface IAnaliticsContext {
    onClick: Function,
    onRender: onRenderFunction,
}

// export const analiticsObject: {
//     const ga4react = new GA4React(
//         googleId, // 'G-1B6E1Z43HE' // сделать идентификатор динамическим, проверить исходник редакс (контекст)
//     );
//     let ga4 = ga4react.initialize().then(ga4 => ga4)
//     return {
//         onClick({
//             action,
//             category,
//             label,
//         }: ClickEventWrapper) {
//             ga4.then(ga4 => {
//                 ga4.event(
//                     action,
//                     category,
//                     label
//                 )
//             }, (err) => console.log(err))
//         },
//         onRender(url: string) {
//             ga4react.pageview(url)
//         },
//     }
// }
export const AnaliticsContext = createContext(myStore);
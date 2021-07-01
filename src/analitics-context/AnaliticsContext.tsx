import React, { createContext } from "react";
import { ClickEventWrapper } from "../types/types";

export type onRenderFunction = (url: string) => void;

export interface IAnaliticsContext {
    history: string[],
    onClick: Function,
    onRender: onRenderFunction,
    systemsMapper: (url: string) => void,
    systems: string[],
    getIsVisited: (url: string) => boolean,
}
type Refresh = 'pass' | 'refresh';

export const AnaliticsObject: IAnaliticsContext = (() => {
    return {
        history: [],
        onClick: function ({
            action,
            category,
            label,
        }: ClickEventWrapper) {
            AnaliticsObject.systems.map(
                system => alert(`${system}`)
            );
        },
        systems: ['google', 'yandex', 'and more...'],
        getIsVisited: function (url: string) {
            return url == AnaliticsObject.history[AnaliticsObject.history.length];
        },
        systemsMapper: function (message: string) {
            console.log(AnaliticsObject.history)
            AnaliticsObject.systems.map(
                system => alert(`${system}${message}`)
            );
        },
        onRender: function (url: string) {
            AnaliticsObject.history.push(url);
            const message: Refresh = AnaliticsObject.getIsVisited(url)
                ? 'refresh'
                : 'pass';
            AnaliticsObject.systemsMapper(message);
        },
    }
})()
export const AnaliticsContext = createContext<IAnaliticsContext>(AnaliticsObject);
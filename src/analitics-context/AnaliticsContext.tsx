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

export const AnaliticsContext = createContext(myStore);
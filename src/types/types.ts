import { MouseEventHandler } from "react";

export interface ButtonChildProps {
    title: string;
    onClick: Function;
}
export interface PageChildProps {
    ownProp1?: any;
}
export interface PageEventWrapper {
    extendedProp1: any;
}
export interface ClickEventWrapper {
    category: string,
    action: string,
    label: string,
}
export interface GoogleEvent {
    category: string,
    action: string,
    label: string,
}
export interface YandexEvent {
    name: string;
    type: string;
    conditions?: any[];
}
import { MouseEventHandler } from "react";

export interface ButtonChildProps {
    title: string;
    onClick: MouseEventHandler<HTMLElement>;
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
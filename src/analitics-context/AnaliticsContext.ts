import React, { createContext } from "react";
import { ClickEventWrapper } from "../types/types";

export const AnaliticsObject = {
    onClick: function ({
        action,
        category,
        label,
    }: ClickEventWrapper) {
        alert('google')
        alert('yandex')
        alert('and more...')
    },
    onRender: function (url: string) {
        alert('google' + url)
        alert('yandex' + url)
        alert('and more...' + url)
    },
}
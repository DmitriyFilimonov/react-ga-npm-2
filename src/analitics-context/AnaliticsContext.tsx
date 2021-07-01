import React, { createContext } from "react";
import { GAEventType } from "../types/types";


export const AnaliticsObject = {
    customEvent: function ({
        action,
        category,
        label,
    }: GAEventType) {
        alert('google')
        alert('yandex')
        alert('and more...')
    },
}
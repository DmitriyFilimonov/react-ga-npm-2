import React from "react";
import { ReactNode, useEffect, useState } from "react";
import { getGoogleIdFromStoreDummy } from "../getGoogleIdFromStoreDummy";
import { AnaliticsContext } from "./AnaliticsContext";
import { myStore } from "./ReduxAnalog";

const MyProvider = (props: {
    children: ReactNode;
}) => {
    useEffect(() => {
        getGoogleIdFromStoreDummy()
            .then(() => 'G-1B6E1Z43HE')
            .then(result => {
                !myStore.isInitialized && myStore.acceptGoogleId(result)
            })
    }, []);

    return (
        <AnaliticsContext.Provider value={myStore}> {/* если закоментировать - тоже работает */}
            {props.children}
        </AnaliticsContext.Provider>
    )
}
export default React.memo(MyProvider);
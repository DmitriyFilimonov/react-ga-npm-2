import { ReactNode, useEffect, useState } from "react";
import { getGoogleIdFromStoreDummy } from "../getGoogleIdFromStoreDummy";
import { AnaliticsContext } from "./AnaliticsContext";
import { myStore } from "./ReduxAnalog";

export const MyProvider = (props: { children: ReactNode }) => {

    const googleId = getGoogleIdFromStoreDummy();

    useEffect(() => {
        !myStore.isInitialized && myStore.acceptGoogleId(googleId);
    }, [myStore.isInitialized])

    if (!myStore.isInitialized) return <></>;
    return (
        <AnaliticsContext.Provider value={myStore}> {/* если закоментировать - тоже работает */}
            {props.children}
        </AnaliticsContext.Provider>
    )
}
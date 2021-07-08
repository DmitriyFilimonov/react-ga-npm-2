import React, { createContext } from "react";
import { ReactNode, useEffect, useState } from "react";
import { getGoogleIdFromStoreDummy } from "../getGoogleIdFromStoreDummy";
import { AnaliticsContext } from "./AnaliticsContext";
import { myStore } from "./ReduxAnalog";

const MyProvider = (props: {
    children: ReactNode;
    serviceId?: string;
}) => {
    const {
        children,
        serviceId,
    } = props;
    const [storeInState, setStoreInState] = useState(myStore);
    useEffect(() => {
        serviceId
            ? myStore.acceptGoogleId(serviceId)
            : getGoogleIdFromStoreDummy()
                .then(() => 'G-1B6E1Z43HE')
                .then(result => {
                    const updatedInstance = myStore.acceptGoogleId(result)
                    !myStore.isInitialized && setStoreInState(
                        { ...updatedInstance }
                    )
                })
    }, [serviceId]);
    return (
        <AnaliticsContext.Provider value={storeInState}>
            {children}
        </AnaliticsContext.Provider>
    )
}
export default React.memo(MyProvider);
export const getGoogleIdFromStoreDummy = () =>
    new Promise(
        resolve => {
            setTimeout(
                () => {resolve(undefined)},
                7000
            )
        }
    );
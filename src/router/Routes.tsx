import { Route } from "react-router-dom"
import { WrappedHomePage } from "../components/pages/HomePage"
import { WrappedPageOne } from "../components/pages/PageOne"

export const Routes = () => {
    return (
        <>
            {[{
                path: '/',
                exact: true,
                Component: WrappedHomePage,
            }, {
                path: '/one',
                exact: false,
                Component: WrappedPageOne,
            }].map(({ exact, path, Component }) =>
                <Route
                    path={path}
                    exact={exact}
                    component={Component}
                />

            )}
        </>
    )
}
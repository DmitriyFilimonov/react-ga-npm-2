import { TrackerWrapperForPage } from "../tracker-wrapper/TrackerWrapperForPage";

const HomePage = () => {
    return (
        <h1>Home page</h1>
    )
}
export const WrappedHomePage = TrackerWrapperForPage(HomePage, '/example-url/one');
export default HomePage;
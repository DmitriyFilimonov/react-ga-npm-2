import { TrackerWrapperForPage } from "../tracker-wrapper/TrackerWrapperForPage";

const PageOne = () => {
    return (
        <h1>Page 1</h1>
    )
}
export const WrappedPageOne = TrackerWrapperForPage(PageOne, '/example-url/two');
export default PageOne;
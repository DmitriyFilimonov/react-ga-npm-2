export interface GAEvent {
    category: string,
    action: string,
    label: string
}
export const ReactGA = {
    event: (event: GAEvent) => {

    }
}
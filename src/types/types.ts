export type TrackerType = 'google' | 'yandex' | 'new relic';

export interface TrackerBaseEventType<T extends TrackerType> {
    serviceName: T,
}
export interface GAEventType {
    category: string,
    action: string,
    label: string,
}
export interface YandexEventType extends TrackerBaseEventType<'yandex'> {
    name: string;
    type: string;
    conditions: any[];
}
export type TrackerEvent =
    | GAEventType
    | YandexEventType;
export interface ButtonChildrenProps {
    title: string;
    onClick: Function;
}
export interface ComponentChildrenProps {
}
export interface GAEvent {
    category: string,
    action: string,
    label: string
}
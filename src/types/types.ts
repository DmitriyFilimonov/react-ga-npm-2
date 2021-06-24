export type TrackerType = 'google' | 'yandex' | 'new relic';

export interface TrackerBaseEventType<T extends TrackerType> {
    serviceName: T,
}
export interface GAEventType extends TrackerBaseEventType<'google'> {
    category: string,
    action: string,
    label: string,
}
export interface YandexEventType extends TrackerBaseEventType<'yandex'> {
    name: string;
    type: string;
    conditions: any[];
}
export type TrackerEventType =
    | GAEventType
    | YandexEventType;
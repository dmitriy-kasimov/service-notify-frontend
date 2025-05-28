export type TMessageType = 'success' | 'error' | 'info' | 'warning' | 'default'
export type TMessage = {
    type: TMessageType;
    body: string;
}
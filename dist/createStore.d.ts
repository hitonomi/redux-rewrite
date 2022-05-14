declare type CombinedReducer<TState extends Record<string, unknown>> = (state: TState, action: DispatchAction) => TState;
interface DispatchAction {
    type: string;
    payload: unknown;
}
export interface StoreConfiguration<TState extends Record<string, unknown>> {
    initialState: TState;
    reducer: CombinedReducer<TState>;
}
export interface CreateStoreReturn<TState extends Record<string, unknown>> {
    dispatch: (action: DispatchAction) => void;
    getState: () => TState;
}
/**
 *
 */
export declare const createStore: <TState extends Record<string, unknown>>({ initialState, reducer, }: StoreConfiguration<TState>) => CreateStoreReturn<TState>;
export {};

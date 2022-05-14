type CombinedReducer<TState extends Record<string, unknown>> = (
  state: TState,
  action: DispatchAction
) => TState;

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
export const createStore = <TState extends Record<string, unknown>>({
  initialState,
  reducer,
}: StoreConfiguration<TState>): CreateStoreReturn<TState> => {
  let state = { ...initialState };

  /**
   * Gets the current state of the store and returns it.
   */
  const getState = () => state;

  /**
   * Calls the reducer with the given action and the current state of the store and updates the current state with the results.
   */
  const dispatch = (action: DispatchAction) => {
    state = { ...reducer({ ...getState() }, action) };
  };

  return { dispatch, getState };
};

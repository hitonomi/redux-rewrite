interface StoreConfiguration<TState extends Record<string, unknown>> {
  initialState: TState;
}

interface CreateStoreReturn<TState extends Record<string, unknown>> {
  dispatch: () => void;
  getState: () => TState;
}

/**
 *
 */
export const createStore = <TState extends Record<string, unknown>>({
  initialState,
}: StoreConfiguration<TState>): CreateStoreReturn<TState> => {
  const state = { ...initialState };

  /**
   * Gets the current state of the store and returns a copy of it.
   */
  const getState = () => ({ ...state });

  return {
    dispatch: () => {},
    getState,
  };
};

const store = createStore({ initialState: {} });

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 */
exports.createStore = ({ initialState, reducer, }) => {
    let state = Object.assign({}, initialState);
    /**
     * Gets the current state of the store and returns it.
     */
    const getState = () => state;
    /**
     * Calls the reducer with the given action and the current state of the store and updates the current state with the results.
     */
    const dispatch = (action) => {
        state = Object.assign({}, reducer(Object.assign({}, getState()), action));
    };
    return { dispatch, getState };
};

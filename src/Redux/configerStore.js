import { createStore } from 'redux';
import { Reducer, initialstate } from './Reducer';

export const  configerStore = () => {

    const store = createStore(Reducer, initialstate);

    return store;
}
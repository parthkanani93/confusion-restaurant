import { createStore,combineReducers } from 'redux';
import {Comments} from './comment';
import {Dishes} from './dishes';
import {Leaders} from './leaders';
import {Promotions} from './promotions';

export const  configerStore = () => {

    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
     );

    return store;
}
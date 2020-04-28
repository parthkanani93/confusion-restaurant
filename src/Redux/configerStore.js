import { createStore,combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
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
        }),
        applyMiddleware(thunk,logger)
     );

    return store;
}
import { createStore,applyMiddleware,combineReducers } from "redux";
import thunk from 'redux-thunk';
import Reducer1 from "../Reducers/Reducer1";
const createReducer = asyncReducers =>
	combineReducers({
        Reducer1,
		
		...asyncReducers
	});
 const store = createStore(createReducer(),applyMiddleware(thunk));
export default store;
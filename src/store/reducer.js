import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer} from '../common/header/store';
import {reducer as homeReducer} from '../pages/Home/store';
/*  combineReducers:
    each subReducer being responsible for their own component
    won't let all the state in one reducer
*/

const reducer=combineReducers({
    header:headerReducer,
    home:homeReducer,
})

export default reducer;
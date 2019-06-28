import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable' 

const defaultState=fromJS({
    focused:false,
    trendingSearchList:[],
    currentPage:0,
    totalPage:1,
    mouseEnter:false
});

export default (state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.CHANGE_INPUT_FOCUS:
            return state.set('focused',!state.get('focused'));
        case actionTypes.CHANGE_TRENDING_SEARCH_LIST:
            return state.merge(
                {
                    trendingSearchList:action.data,
                    totalPage:action.totalPage
                }
            ) 
        case actionTypes.CHANGE_MOUSE_ENTER:
            return state.set('mouseEnter',true);
        case actionTypes.CHANGE_MOUSE_LEAVE:
            return state.set('mouseEnter',false);
        case actionTypes.CHNAGE_PAGE_LIST:
            let currentPage=state.get('currentPage');
            currentPage=(currentPage+1)%state.get('totalPage');
            return state.set('currentPage',currentPage)
        default:
            return state;
    }
}


import {fromJS} from 'immutable'
import * as actionTypes from './actionTypes';

const defaultState=fromJS({
    topicList:[],
    articleList:[],
    recommendList:[]
})


export default (state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.INITIALIZE_HOME_PAGE_DATA:
            return state.merge({
                topicList:action.data.get('topicList'),
                articleList:action.data.get('articleList'),
                recommendList:action.data.get('recommendList')
            })
        case actionTypes.ADD_ARTICLES_TO_LIST:
            // console.log(action.data.get('articleList'));
            return state.set(
                'articleList',
                state.get('articleList').concat(action.data.get('articleList'))
            )
        default:
            return state;
    }
}
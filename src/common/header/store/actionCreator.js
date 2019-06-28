import * as actionTypes from './actionTypes';
import axios from 'axios';
import {fromJS} from 'immutable'


const changeList=(data)=>({
    type:actionTypes.CHANGE_TRENDING_SEARCH_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length/10)
})

export const getChangeInputFocus=()=>({
    type:actionTypes.CHANGE_INPUT_FOCUS
})


/* it is what react-thunk can do, it enables returning functions and async logics like AJAX requests*/
export const getTrendingSearchList=()=>{
    return (dispatch)=>{
        axios.get('/api/trendingSearchList.json').then((res)=>{
            const data=res.data;
            dispatch(changeList(data.data));
        }).catch(()=>{
            console.log('trending search list requested unsuccessfully!')
        })
    }
}

export const mouseEnter=()=>({
    type:actionTypes.CHANGE_MOUSE_ENTER
})

export const mouseLeave=()=>({
    type:actionTypes.CHANGE_MOUSE_LEAVE
})

export const changePageList=()=>({
    type:actionTypes.CHNAGE_PAGE_LIST
})
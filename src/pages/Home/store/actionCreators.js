import * as actionTypes from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';

const initializeHomeDataAction = (data) => {
    return {
        type: actionTypes.INITIALIZE_HOME_PAGE_DATA,
        data: fromJS(data)
    }
}

const addArtcileToList=(data)=>{
    return{
        type:actionTypes.ADD_ARTICLES_TO_LIST,
        data:fromJS(data)
    }
}

export const getInitialHomeData = () => {
    return (dispatch)=>{
        axios.get('/api/homeData.json')
            .then((res) => {
                const data=res.data;
                const action=initializeHomeDataAction(data.data);
                dispatch(action);

            })
            .catch((error) => {
                console.log(error);
            })
    }
};

export const loadMoreArticles=()=>{
    return (dispatch)=>{
        axios.get('/api/get_more_articles.json')
        .then((res)=>{
            const data=res.data;
            dispatch(addArtcileToList(data))
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}
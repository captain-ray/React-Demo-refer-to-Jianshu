import React, { PureComponent } from 'react';
import {
    ListItem,
    ListInfo,
    LoadMore

} from '../style'

import { connect } from 'react-redux'
import { actionCreators } from '../store';
import {Link} from 'react-router-dom'

class List extends PureComponent {


    render() {
        const { articleList, handleLoadMoreArticles } = this.props;
        return (
            <div>
                {
                    articleList.map((item, index) => (
                        <Link key={index} to='/detail'>
                            <ListItem>
                                <img className='img' alt='' src={item.get('imgUrl')} />
                                <ListInfo>
                                    <h3 className='title'>{item.get('title')}</h3>
                                    <p className='content'>
                                        {item.get('content')}
                                    </p>
                                </ListInfo>
                            </ListItem>
                        </Link>

                    ))
                }
                <LoadMore onClick={handleLoadMoreArticles}>Load More...</LoadMore>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        articleList: state.get('home').get('articleList')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoadMoreArticles() {
            dispatch(actionCreators.loadMoreArticles())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
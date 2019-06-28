import React, { PureComponent } from 'react';
import {
    TopicWrapper,
    TopicItem,
} from '../style';


import { connect } from 'react-redux'



class Topic extends PureComponent {

    render() {

        const { topicList } = this.props;

        return (
            <TopicWrapper>

                {
                    topicList.map((item) => {
                        return (
                            <TopicItem key={item.get('id')}>
                                <img className='topic-pic' src={item.get('imgUrl')} alt=''></img>
                                {item.get('topic')}
                            </TopicItem>
                        )
                    })
                }


            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    const home = state.get('home');
    return {
        topicList: home.get('topicList')
    }
}

export default connect(mapStateToProps, null)(Topic);
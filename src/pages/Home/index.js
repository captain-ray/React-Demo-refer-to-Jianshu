import React, { Component } from 'react';
import List from './Components/List';
import Recommend from './Components/Recommend';
import Topic from './Components/Topic';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackToTop,
} from './style'

import {connect} from 'react-redux';
import {actionCreators} from './store'

class Home extends Component {


    componentDidMount(){
        this.props.renderInitialHomePage();
    }

    handleScrollTop(){
        window.scrollTo(0,0);
    }

    render() {

        
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='img-banner' alt='' src='//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'></img>
                    <Topic></Topic>
                    <List></List>
                    
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    {/* <Writer></Writer> */}
                </HomeRight>
                <BackToTop onClick={this.handleScrollTop}>BackToTop</BackToTop>
            </HomeWrapper>
        )
    }

}


const mapDispatchToProps=(dispatch)=>{
    return{
       renderInitialHomePage(){
           dispatch(actionCreators.getInitialHomeData())
       },
    }
}


export default connect(null,mapDispatchToProps)(Home);


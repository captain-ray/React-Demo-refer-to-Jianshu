import React, { PureComponent } from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
} from './style'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFont, faPen, faSpinner } from '@fortawesome/free-solid-svg-icons';

import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store'
import { Link } from 'react-router-dom';
class Header extends PureComponent {

    showSearchInfo = (show) => {
        const { trendingSearchList, currentPage, mouseEnter, handleChangePageList, handleMouseEnter, handleMouseLeave } = this.props;

        //trendingSearchList here is a immutable object, need to convert to JS object
        const newTrendingSearchList = trendingSearchList.toJS();

        const currentPageList = [];

        if (newTrendingSearchList.length) {
            for (let i = currentPage * 10; i < (currentPage + 1) * 10 && i < newTrendingSearchList.length; i++) {
                currentPageList.push(
                    <SearchInfoItem key={newTrendingSearchList[i]}>{newTrendingSearchList[i]}</SearchInfoItem>
                );
            }
        }

        if (show || mouseEnter) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>Popular Searches
                        <SearchInfoSwitch onClick={handleChangePageList}>
                            <FontAwesomeIcon icon={faSpinner} className='icon'></FontAwesomeIcon>
                            switch
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>

                        {currentPageList}

                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }

    render() {
        const { focused, handleInputBlur, handleInputFocus, trendingSearchList } = this.props

        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo/>
                </Link>
                <Nav>
                    <NavItem className='left active'>HomePage</NavItem>
                    <NavItem className='left'>Download APP</NavItem>
                    <NavItem className='right'>Login</NavItem>
                    <NavItem className='right'>
                        <FontAwesomeIcon icon={faFont} />
                    </NavItem>

                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={300}
                            classNames="slide"
                        >
                            <NavSearch className={focused ? 'focused' : 'blurred'}
                                onFocus={() => handleInputFocus(trendingSearchList)}
                                onBlur={handleInputBlur}

                            />
                        </CSSTransition>
                        <FontAwesomeIcon icon={faSearch} className={focused ? 'faSearch focused' : 'faSearch'} />
                        {this.showSearchInfo(focused)}
                    </SearchWrapper>
                    <Addition>
                        <Button className='write'>
                            <FontAwesomeIcon icon={faPen} className='faPen' />
                            Write Article</Button>
                        <Button className='registration'>Registration</Button>
                    </Addition>
                </Nav>

                <Addition>

                </Addition>
            </HeaderWrapper>
        )
    }
}




const mapStateToProps = (state) => {
    const header = state.get('header');
    return {
        focused: header.get('focused'),
        trendingSearchList: header.get('trendingSearchList'),
        totalPage: header.get('totalPage'),
        currentPage: header.get('currentPage'),
        mouseEnter: header.get('mouseEnter'),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(trendingSearchList) {
            if (trendingSearchList.size === 0) {
                dispatch(actionCreators.getTrendingSearchList())
            }
            dispatch(actionCreators.getChangeInputFocus());
        },
        handleInputBlur() {

            dispatch(actionCreators.getChangeInputFocus());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePageList() {
            dispatch(actionCreators.changePageList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
import styled from 'styled-components';
import logoPic from '../../statics/logo.png'
export const HeaderWrapper = styled.div`
    position: relative;
    height:56px;
    border-bottom: 1px solid #f0f0f0;

`;

export const Logo = styled.div`
    position:absolute;  
    top:0;
    left:0;
    width:100px;
    height:56px;
    display:block;
    background: url(${logoPic});
    background-size:contain;
`;


export const Nav = styled.div`
    width:960px;
    margin:0 auto;
    height:100%;
    padding-right:200px;
    box-sizing:border-box;
`

export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left{
        float:left;
    };
    &.right{
        float:right;
        color:#969696;
    };
    &.active{
        color:#ea6f5a;
    };
`

export const SearchWrapper = styled.div`
    position:relative;
    float:left;

    .slide-enter{
        transition:all .3s ease-out;
    }
    .slide-enter-active{
        width:240px;
    }

    .slide-exit{
        transition:all .3s ease-out;
    }

    .slide-exit-active{
        width:160px;
    }
     
    

    .faSearch{
        position:absolute;
        right:5px;
        top:20px;
        width:20px;
        height:20px;
        border-radius:10px;
        text-align:center;
        
        &.focused{
            background:#777;
        }
    }
`

export const SearchInfo = styled.div`
    position:absolute;
    margin-top:10px;
    left:0;
    width:240px;
    padding: 0 10px;
    box-shadow:0 0 8px rgba(0,0,0,.2);
    background:#fff;
`


export const SearchInfoTitle = styled.div`
    padding-top:10px;
    margin-top:10px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;

`

export const SearchInfoSwitch = styled.span`
    position:relative;
    float:right;
    font-size:13px;
    cursor:pointer;
    .icon{
        margin-right:5px;
    }
`


export const SearchInfoList=styled.div`
    overflow:hidden;
`

export const SearchInfoItem = styled.a`
    display:block;
    inline-height:10px;
    padding: 2px 5px;
    font-size:12px;
    border: 1px solid #ddd;
    color:#969696;
    border-radius:3px;
    float:left;
    margin-right:10px;
    margin-bottom: 10px;
`



export const NavSearch = styled.input.attrs({
    placeholder: 'Search'
})`
    width:160px;
    height:38px;
    border:none;
    padding:0 30px 0 20px;
    margin-left:20px;
    border-radius:19px;
    margin-top:9px;
    box-sizing:border-box;
    background:#eee;
    font-size:14px;
    color:#666;
    &::placeholder{
        color:#999;
    };
    &.focused{
        width:200px;
    }
    
`

export const Addition = styled.div`
    position:absolute;
    top:0;
    right:0;
    height:56px;
`

export const Button = styled.div`
    float:right;
    margin-top:9px;
    line-height:38px;
    margin-right:20px;
    padding:0 20px;
    border-radius:19px;
    border:1px solid #ec6149;
    font-size:15px;
    &.write{
        background:#ea6f5a;
        color:white;
    };
    .faPen{
        margin-right:5px;
    };
    &.registration{
        color:#ea6f5a;
    };    
`




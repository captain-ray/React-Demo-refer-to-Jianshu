import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow:hidden;
    width:960px;
    margin:0 auto;
`

export const HomeLeft = styled.div`
    float:left;
    margin-left:15px;
    padding-top:30px;
    width:625px;
    .img-banner{
        width:625px;
        height:270px;
    }
`

export const HomeRight = styled.div`
    width:280px;
    float:right;
`

export const TopicWrapper = styled.div`
    overflow:hidden;
    padding:20px 0 10px 0;
`

export const TopicItem = styled.div`
    float:left;
    background: #f7f7f7;
    height:32px;
    padding-right:10px;
    margin-right:18px;
    margin-bottom:18px;
    line-height:32px;
    color:#000;
    border: 1px solid #dcdcdc;
    border-radius:4px;
    .topic-pic{
        display:block;
        float:left;
        width:32px;
        height:32px;
        margin-right:10px;
    }
`


export const ListItem = styled.div`
    overflow:hidden;
    margin-bototm:15px;
    padding: 20px 0;
    border-bottom: 1px solid #f0f0f0;

    .img{
        display:block;
        float:right;
        width:125px;
        height:100px;
        border-radius:10px;
    }
`

export const ListInfo = styled.div`
    width:500px;
    float:left;
    .title{
        margin:-7px 0 4px;
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:#333;
    }
    .content{
        line-height:24px;
        font-size:13px;
        color:#999999;
        height:100px;
        overflow:hidden;
    }
`

export const RecommendWrapper = styled.div`
    margin:30px 0;
    width:280px;
`

export const RecommendItem = styled.div`
    margin-bottom:6px;
    width:280px;
    height:50px;
    background:url(${(props) => props.imgUrl});
    background-size:contain;
`

export const WriterWrapper = styled.div`
    width:279px;
    height:400px;
    border:1px solid #d3d3d3;
    text-align:center;
    line-height:400px;
    border-radius:3px;
`

export const LoadMore = styled.div`
    width: 100%;
    height:20px;
    padding:10px 15px;
    margin:30px 0 60px 0;
    border-radius:20px;
    background:#a5a5a5;
    text-align:center;
    color:#fff;
    cursor:pointer;
`

export const BackToTop = styled.div`
    position:fixed;
    right:100px;
    bottom:30px;
    width:100px;
    height:60px;
    line-height:60px;
    text-align:center;
    border:1px solid #ccc;
    cursor:pointer;
`
import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;

    .t-left{
        margin-left: 160px;
    }

    @media (max-width:768px) {

        .t-left{
            margin-left: 30px;
        }
    }

    @media (max-width:565px) {
        .t-left{
            margin-left: 0;
            margin: 0 35px;
        }
    }

    @media (max-width:455px) {
        .t-left{
            margin: 0;
        }
    }

    @media (max-width:375px) {
        .t-left{
            margin-left: 30px;
            margin-right: 30px;
        }
    }
`

export const Pages = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: end;
    align-items: center;

    h3{
        font-weight: 400;
        font-size: 16px;
        line-height: 140%;
        text-align: right;
        color: #333333;
    }

    .mui-icon{
        width: 26px;
        height: 26px;
        object-fit: contain;
        cursor: pointer;
        color: #333333;
        margin-left: 34px;

        :hover{
            opacity: 0.7;
        }
    }

    .m-right{
        margin-right: 30px;
    }

    @media (max-width:768px) {
        margin-top: 120px;
    }

    @media (max-width:565px) {
        height: 80px;
    }

    @media (max-width:455px) {
        max-width: 300px;
        margin: 0 auto;
        justify-content: space-between;
        
        .mui-icon{
            margin: 0;
        }
    }

    @media (max-width:375px) {
        max-width: none;

        h3{
            margin: 0 30px;
        }

        .mui-icon{
            margin-right: 30px;
        }
    }
`

export const LinksWr = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 50px;

    @media (max-width:565px) {
        justify-content: center;
        height: 100px;
    }

    @media (max-width:455px) {
        max-width: 300px;
        margin: 0 auto;
        justify-content: space-between;
    }

    @media (max-width:375px) {
        max-width: none;
        justify-content: start;
    }
`

export const LinkDiv = styled.h2`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;

    h3{
        font-weight: 400;
        font-size: 16px;
        line-height: 140%;
        color: #333333;
        text-transform: capitalize;
        margin-bottom: 5px;
        cursor: pointer;
        
        :hover{
            opacity: 0.7;
        }
    }

    div{
        width: 100%;
        height: 3px;
        background-color: #B59571;
        transition: all ease 0.3s;
    }

    @media (max-width:565px) {
        margin-right: 0;
        margin: 0 35px;
    }

    @media (max-width:455px) {
        margin: 0;
    }

    @media (max-width:375px) {
        margin-right: 30px;
    }
`



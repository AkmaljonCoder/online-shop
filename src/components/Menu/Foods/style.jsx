import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
`

export const Container = styled.div`
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    margin-left: 160px;

    @media (max-width:768px) {
        margin-left: 0;
        justify-content: space-around;
    }
`

export const Box = styled.div`
    width: 306px;
    height: 404px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin: 13px;
    border: 1px solid rgba(51, 51, 51, 0.2);

    @media (max-width:663px) {
        width: 250px;
        height: 360px;
    }

    @media (max-width:551px) {
        width: 306px;
        height: 404px;
    }

    @media (max-width:425px) {
        width: 85%;
        height: 500px;
        align-items: flex-start;
    }

    @media (max-width:375px) {
        height: 470px;
    }
`

export const FoodImg = styled.img`
    width: 304px;
    height: 220px;
    object-fit: contain;
    margin-bottom: 30px;

    @media (max-width:663px) {
        width: 250px;
        height: auto;
    }

    @media (max-width:551px) {
        width: 304px;
        height: 220px;
    }

    @media (max-width:425px) {
        width: 100%;
        height: auto;
    }
`

export const Title = styled.h2`
    height: 56px;
    max-width: 246px;
    font-weight: 700;
    font-size: 20px;
    line-height: 140%;
    text-align: center;
    color: #333333;
    margin-bottom: 25px;

    @media (max-width:663px) {
        font-size: 18px;
    }

    @media (max-width:425px) {
        text-align: start;
        margin-left: 15px;
    }
`

export const BottomDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width:425px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const Price = styled.h1`
    font-weight: 700;
    font-size: 32px;
    line-height: 120%;
    color: #333333;
    margin-left: 30px;

    @media (max-width:663px) {
        font-size: 20px;
        margin-left: 15px;
    }

    @media (max-width:551px) {
        font-size: 32px;
        margin-left: 30px;
    }

    @media (max-width:425px) {
        width: 100%;
        text-align: start;
        margin-left: 0;
        padding-left: 15px;
        margin-bottom: 20px;
    }
`

export const Button = styled.button`
    width: 113px;
    height: 42px;
    background-color: #B59571;
    border: none;
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;
    text-align: center;
    color: #FFFFFF;
    margin-right: 30px;
    cursor: pointer;

    &:hover{
        opacity: 0.7;
    }

    @media (max-width:663px) {
        margin-right: 15px;
    }

    @media (max-width:551) {
        margin-right: 30px;
    }

    @media (max-width:425px) {
        width: 90%;
        margin-right: 0;
    }
`

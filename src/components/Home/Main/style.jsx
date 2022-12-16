import styled from 'styled-components'
import Background from '../../../Assets/Home/background.png'

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-image: url(${Background});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
`

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width:768px) {
        align-items: center;
    }
`

export const Navbar = styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .link{
        font-weight: 400;
        font-size: 16px;
        line-height: 140%;
        color: #FFFFFF;
        margin-left: 50px;
        cursor: pointer;

        :hover{
            opacity: 0.7;
        }
    }

    button{
        width: 145px;
        height: 42px;
        border: none;
        display: inline-block;
        cursor: pointer;
        font-weight: 700;
        font-size: 16px;
        line-height: 140%;
        color: #FFFFFF;
        background: #B59571;
        margin: 0 30px 0 50px;

        :hover{
            opacity: 0.7;
        }
    }

    @media (max-width:768px) {
        margin-top: 100px;
    }

    @media (max-width:580px) {
        justify-content: space-around;

        .link{
            margin: 0;
        }

        button{
            margin: 0;
        }
    }

    @media (max-width:540px) {
        margin-top: 110px;
        flex-wrap: wrap;
        max-width: 90%;

        .link{
            padding: 21px 12px;
        }

        button{
            width: 100%;
        }
    }
`

export const BottomText = styled.h1`
    max-width: 856px;
    font-weight: 500;
    font-size: 54px;
    line-height: 140%;
    color: #FFFFFF;
    margin-bottom: 120px;
    margin-left: 230px;

    @media (max-width:1024px) {
        max-width: 500px;
        font-size: 35px;
        margin-left: 150px;
    }

    @media (max-width:768px) {
        margin: 120px 0;
        text-align: center;
    }

    @media (max-width:540px) {
        font-size: 25px;
        max-width: 90%;
    }
`

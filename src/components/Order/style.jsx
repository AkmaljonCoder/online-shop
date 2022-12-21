import styled from 'styled-components'

export const Wrapper = styled.div`
    
    .order-none{
        width: 100%;
        height: 100vh;
        position: fixed;
        opacity: 0;
        visibility: hidden; 
        transition: 0.5s;
        background: linear-gradient(0deg, rgba(51, 51, 51, 0.4), rgba(51, 51, 51, 0.4));
        backdrop-filter: blur(20px);

        .card{
            display: none;
        }
    }

    .order-flex{
        width: 100%;
        height: 100vh;
        position: fixed;
        z-index: 3;
        background: linear-gradient(0deg, rgba(51, 51, 51, 0.4), rgba(51, 51, 51, 0.4));
        backdrop-filter: blur(20px);
        transition: 0.5s;
        opacity: 1;
        visibility: visible;

        display: flex;
        justify-content: center;
        align-items: center;

        @keyframes appearCard {
            0% { opacity: 0; translate: 0 500px; }
            100% { opacity: 1; }
        }

        .card{
            width: 416px;
            height: 572px;
            animation: appearCard 0.3s both;
            animation-duration: 0.7s;
            animation-delay: 0.3s;
            background-color: #333333;
            position: relative;
            box-shadow: 0px 3px 18px 4px rgba(0, 0, 0, 0.2);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }

    @media (max-width:560px) {

        .order-flex{

            .card{
                width: 90%;
            }
        }
    }

    @media (max-width:375px) {
        .order-flex{

            .card{
                width: 100%;
                height: 100%;
                animation: none;
            }
        }
    }
`

export const CloseIc = styled.img`
    width: 40px;
    height: 40px;
    object-fit: contain;
    top: 20px;
    right: 20px;
    position: absolute;
    cursor: pointer;
`

export const LogoImg = styled.img`
    width: 80px;
    height: 46px;
    object-fit: contain;
    margin-bottom: 40px;
`

export const Title = styled.h1`
    font-weight: 700;
    font-size: 20px;
    line-height: 140%;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 40px;
    color: #FFFFFF;
`

export const Input = styled.input`
    width: 296px;
    height: 52px;
    background-color: rgb(0,0,0,0);
    padding: 0 20px;
    border: 1px solid #707070;
    outline: none;
    margin-bottom: 30px;
    color: #707070;

    ::placeholder{
        color: #707070;
    }
`

export const InpWrapper = styled.div`
    width: 296px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    .input{
        width: 136px;
        height: 52px;
        background-color: rgb(0,0,0,0);
        padding: 0 20px;
        color: #707070;
        border: 1px solid #707070;
        outline: none;

        ::placeholder{
            color: #707070;
        }
    }
`

export const Button = styled.button`
    width: 150px;
    height: 42px;
    border: none;
    display: inline-block;
    cursor: pointer;
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;
    color: #FFFFFF;
    background: #B59571;

    :hover{
        opacity: 0.7;
    }
`

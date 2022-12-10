import styled from 'styled-components'

// icons

import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

export const MainWr = styled.div`

    .menu1{
        width: 120px;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #333333;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        transition: 0.7s;
    }

    .menu2{
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #333333;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        transition: 0.7s;
    }
    
    .flex-div{
        display: flex;
        flex-direction: column;
        justify-content: center;

        @keyframes appear {
           0% { opacity: 0; translate: 0 50px; }
           100% { opacity: 1; }
        }

        h2{
            animation: appear 0.3s both;
            animation-duration: 0.6s;
            font-weight:600;
            font-size: 48px;
            text-align: center;
            line-height: 120%;
            color: #FFFFFF;
            margin-bottom: 20px;
            cursor: pointer;
        }

        .button{
            animation: appear 0.3s both;
            animation-duration: 0.6s;
            width: 237px;
            height: 74px;
            border: none;
            display: inline-block;
            cursor: pointer;
            font-weight: 700;
            font-size: 24px;
            line-height: 140%;
            color: #FFFFFF;
            background: #B59571;
        }
    }

    .link-div{
        display: none;
    }
`

export const TopDiv = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .logo{
        width: 80px;
        height: 46px;
        object-fit: contain;
        cursor: pointer;
        margin-bottom: 30px;
    }

    .menu{
        width: 40px;
        height: 40px;
        object-fit: contain;
        cursor: pointer;
        transition: 0.3s;

        :active{
            opacity: 0;
        }
    }
`

export const BottomDiv = styled.div`
    margin-bottom: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .icon{
        width: 40px;
        height: 40px;
        object-fit: contain;
        color: #B59571;
        transition: 0.5s;
        margin: 15px;
        cursor: pointer;

        :hover{
            color: white;
        }
    }
`

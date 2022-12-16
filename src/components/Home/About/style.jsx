import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    margin-top: 150px;
`

export const Box = styled.div`
    width: 100%;
    margin-bottom: 160px;

    @media (max-width:768px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const LittleDiv = styled.div`
    width: 100%;
    margin-bottom: 92px;
    display: flex;
    justify-content: start;
    align-items: center;
    
    h3{
        font-weight: 700;
        font-size: 20px;
        line-height: 140%;
        text-transform: uppercase;
        color: #333333;
        margin: 0 30px 0 30px;
        margin-left: 200px;
    }

    div{
        width: 60px;
        height: 3px;
        background-color: #B59571;
    }

    @media (max-width:768px) {
        
        h3{
            margin-left: 30px;
        }
    }

    @media (max-width:425px) {
        margin-bottom: 60px;

        h3{
            font-size: 15px;
        }
        div{
            width: 40px;
        }
    }
`

export const TextDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    
    h1{
        max-width: 196px;
        font-weight: 700;
        font-size: 64px;
        line-height: 120%;
        color: #333333;
        margin-right: 140px;
        margin-left: 60px;
    }

    p{
        max-width: 526px;
        font-weight: 400;
        font-size: 18px;
        line-height: 140%;
        color: #333333;
    }

    @media (max-width:1220px) {
        h1{
            margin-right: 30px;
            margin-left: 140px;
            font-size: 45px;
        }
        p{
            font-size: 14px;
            max-width: 370px;
        }
    }

    @media (max-width:768px) {
        width: auto;
        flex-direction: column;
        align-items: flex-start;
        justify-content: start;

        h1{
            margin: 0;
            max-width: 100%;
            text-align: start;
            margin-bottom: 50px;
        }

        p{
            text-align: start;
        }
    }

    @media (max-width:500px) {
        width: 100%;

        h1{
            margin-left: 30px;
        }
        p{
            margin-left: 30px;
        }
    }

    @media (max-width:425px) {
        h1{
            font-size: 30px;
        }
        p{
            font-size: 12px;
            max-width: 85%;
        }
    }
`

export const ImageDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
    flex-wrap: wrap;

    .box{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 20px;

        .outline-div{
            width: 416px;
            height: 240px;
            display: flex;
            margin-bottom: 80px;
            justify-content: center;
            border: 1px solid rgba(51, 51, 51, 0.2);
    
            img{
                width: 336px;
                height: 240px;
                margin-top: 50px;
            }
        }

        .line-div{
            display: flex;
            align-items: center;
    
            h3{
                font-weight: 700;
                font-size: 20px;
                line-height: 140%;
                text-transform: uppercase;
                color: #333333;
                margin-right: 30px;
            }
    
            div{
                width: 60px;
                height: 3px;
                background-color: #B59571;
            }
        }
    }

    @media (max-width:1140px) {
        justify-content: flex-end;
    }

    @media (max-width:1040px) {
        flex-direction: column;
        .box{
            margin: 30px 0;
        }
    }

    @media (max-width:510px) {
        .box{
            width: 100%;

            .outline-div{
                width: 90%;
                /* height: 180px; */

                img{
                    width: 90%;
                    object-fit: contain;
                }
            }
        }
    }

    @media (max-width:375px) {
        .box{
            .outline-div{
                height: 200px;
                img{
                    margin-top: 10px;
                }
            }
        }
    }
`



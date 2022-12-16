import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%; 
    height: 120px;
    display: flex;
    justify-content: center;
    background-color: #333333;
`

export const Container = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1440px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3{
        font-weight: 400;
        font-size: 16px;
        line-height: 140%;
        color: #FFFFFF;
        margin-left: 160px;
    }

    h2{
        font-weight: 700;
        font-size: 16px;
        line-height: 140%;
        text-align: right;
        color: #FFFFFF;
        margin-right: 30px;
    }

    @media (max-width:768px) {
        h3{
            margin-left: 30px;
        }
        h2{
            margin-right: 30px;
        }
    }

    @media (max-width:450px) {
        flex-direction: column;
        justify-content: space-around;

        h3{
            margin: 0;
        }
        h2{
            margin: 0;
        }
    }

    @media (max-width:375px) {
        align-items: flex-start;

        h3{
            margin-left: 30px;
        }
        h2{
            margin-left: 30px;
        }
    }
`

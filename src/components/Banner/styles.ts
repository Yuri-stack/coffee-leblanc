import styled from "styled-components";

export const BannerContainer = styled.section`
    height: 26rem;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const BannerContent = styled.section`
    width: 31.25rem;
    margin-right: 4rem;
`

export const TitleContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-bottom: 3.5rem;

    h1{
        font: 800 2.5rem/2.75rem 'Baloo 2', cursive;
        text-align: justify;
    }

    p{
        font-size: 20px;
    }
`

export const InfoContainer = styled.section`
    width: 31.25rem;
    display: flex;
`

export const InfoItem = styled.section`
    display: flex;
    align-items: center;

    width: 20rem;
    gap: 1rem;

    margin-bottom: 1.5rem;

    p{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    div{
        display: flex;
        align-items: center;

        padding: .5rem;
        border-radius: 50%;
        background: ${props => props.theme["yellow-dark"]};
    }
`


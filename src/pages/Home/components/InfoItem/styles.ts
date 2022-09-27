import styled from "styled-components";

export const InfoItemContainer = styled.div`
    display: flex;
    align-items: center;

    width: 20rem;
    gap: 1rem;

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
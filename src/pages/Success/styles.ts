import styled from "styled-components";

export const SuccessContainer = styled.section`
    margin: 2rem 0 0;
    padding: 0 10rem;
`

export const OrderContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 2rem 0 0;
`

export const OrderDataContainer = styled.section`
    box-sizing: border-box;
    width: 31.25rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem;
    gap: 2rem;

    border-radius: 6px 36px;
    border: 1px solid white;
`

export const OrderDataContent = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    svg{
        display: flex;
        align-items: center;

        width: 2.25rem;
        height: 2.25rem;
        padding: 0.5rem;

        border-radius: 50%;
        background: ${props => props.theme["yellow-dark"]};
    }
`
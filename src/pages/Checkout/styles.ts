import styled from "styled-components";

interface InputProps {
    placeholder: string
    largura?: string
}

export const CheckoutContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    padding: 0 10rem;
`

export const CoffeCardContainer = styled.section`
    margin: 0 0 1rem;
    padding: 1.5rem;

    background-color: ${props => props.theme["base-card"]};

    p{
        font: 400 1rem/1.6 'Roboto', sans-serif;
        color: ${props => props.theme["base-text"]};
    }

    hr{
        border-color: ${props => props.theme["yellow-dark"]};
        margin: 1rem 0;
    }
`

export const CoffeCardContent = styled.article`
    display: flex;
    gap: .5rem;

    margin: 0 0 1rem;
`

export const FormContainer = styled.form`
    max-width: 640px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    div{
        width: 100%;
        display: flex;
        gap: .5rem;
    }
`

export const InputForm = styled.input<InputProps>`
    padding: .75rem;
    border: 1px solid #E6E5E5;
    border-radius: 4px;
    width: ${props => props.largura ? props.largura : "auto"}
`

export const ButtonCardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: .5rem;

    button{
        display: flex;
        align-items: flex-end;
        gap: .5rem;

        width: 11rem;
        padding: .75rem;

        font: 400 0.75rem/1.6 'Roboto', sans-serif;
        text-transform: uppercase;

        border: 1px solid transparent;
        border-radius: 6px;
    }

    a{
        display: flex;
        justify-content: center;
        gap: .5rem;

        width: 11rem;
        padding: .75rem;

        font: 400 1rem/1.6 'Roboto', sans-serif;
        text-transform: uppercase;
        text-decoration: none;
        color: ${props => props.theme["base-text"]};

        border: 1px solid white;
        border-radius: 6px;
    }
`

export const CoffeCardSelected = styled.article`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem; 

    img{
        width: 5rem;
    }
`

export const CoffeCardSelectedInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    max-width: 12rem;

    strong{
        text-align: center;
    }
`

export const CoffeeCheckout = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    margin: 1rem 0;

    div{
        p{
            text-align: right;
            margin: 0 0 .25rem;
        }
    }
`
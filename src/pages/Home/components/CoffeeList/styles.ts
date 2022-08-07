import styled from 'styled-components'

export const CoffeeListContainer = styled.section`
    display: flex;
    flex-direction: column;

    padding: 2rem 10rem;
`

export const CoffeeListContent = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem 1.25rem;
    list-style: none;

    margin-top: 2rem;

    li{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background: ${props => props.theme['base-card']};
        border-radius: 25px;

        padding: 0 2rem 2rem;

        img {
            align-self: center;
            max-width: 150px;
            margin-top: -1.25rem;
        }

        >div{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .5rem;

            span{
                text-transform: uppercase;
                font-size: .75rem;
                font-weight: bold;
                line-height: 1;

                background: ${props => props.theme['yellow-light']};
                color: ${props => props.theme['yellow-dark']};

                border-radius: 100px;

                padding: .25rem .5rem;
            }
        }

        strong {
            font: 700 1.5rem/1.6 'Baloo 2', cursive;
            color: ${props => props.theme['yellow-dark']};
            text-align: center;
        }

        p{
            font-size: 1rem;
            text-align: center;
        }

        span{
            display: flex;
            align-items: center;
            gap: .5rem;

            /* div:nth-child(3){
                display: flex;
                align-items: center;

                padding: .5rem;
                gap: .25rem;

                border-radius: 6px;
                background: ${props => props.theme['yellow-light']};

                svg {
                    color: ${props => props.theme['yellow-dark']};
                }
            } */
        }
    }
`

export const ActionsContentCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 3.5rem;

    border-radius: 5px;
    /* border: 1px solid ${props => props.theme['yellow-light']}; */
    /* background: ${props => props.theme['yellow-light']}; */

    input {
        width: 2rem;
        padding: .5rem 0;

        text-align: center;
        border: none;
        
        font-size: 1rem;
        font-weight: bold;
        color: ${props => props.theme['base-text']};
        background: none;
    }

    button{
        background: none;
        border: 0;
        padding: 6px;

        display: flex;
        justify-content: center;
        align-items: center;

        :focus{
            box-shadow: 0 0 0 2px ${props => props.theme["yellow-dark"]};
        }

        svg {
            color: ${props => props.theme['yellow-dark']};
        }
    }
`
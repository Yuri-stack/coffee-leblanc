import styled from 'styled-components'
import { BasicActionsContent } from '../Navbar/styles'

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

        div{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .5rem;

            span{
                text-transform: uppercase;
                font-size: .75rem;
                font-weight: bold;

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
        }
    }
`

export const ActionsContentCart = styled(BasicActionsContent)`
    background: ${props => props.theme["red"]};

    &:hover {
        background: ${props => props.theme["red-light"]};
    }
`
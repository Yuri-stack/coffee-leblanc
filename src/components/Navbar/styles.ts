import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem 10rem;
`

export const ActionsContainer = styled.div`
    display: flex;
    align-items: center;

    gap: .75rem;
`

export const BasicActionsContent = styled.div`
    display: flex;
    align-items: center;

    padding: .5rem;
    gap: .25rem;

    border-radius: 6px;

    p{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
    }
`

export const ActionsContentLocation = styled(BasicActionsContent)`
    background: ${props => props.theme["yellow-dark"]};
`

export const ActionsContentCart = styled(BasicActionsContent)`
    background: ${props => props.theme["red"]};

    &:hover {
        background: ${props => props.theme["red-light"]};
    }
`
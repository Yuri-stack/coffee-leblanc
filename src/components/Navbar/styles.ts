import styled from "styled-components";

const colors = {
    red: 'red',
    red_light: 'red-light',
    yellow_dark: 'yellow-dark',
    yellow_light: 'yellow-light',
    base_text: 'base-text',
} as const

interface ButtonProps{
    bg_color: keyof typeof colors
    hover_color?: keyof typeof colors
    txt_color: keyof typeof colors
}

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

export const ActionsContentLocation = styled.div`
    display: flex;
    align-items: center;

    padding: .5rem;
    gap: .25rem;

    border-radius: 6px;
    background: ${props => props.theme["yellow-dark"]};

    p{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
        color: ${props => props.theme["base-text"]};

    }
`

export const BasicActionsButton = styled.button<ButtonProps>`
    display: flex;
    align-items: center;

    padding: .5rem;
    gap: .25rem;

    border: none;

    border-radius: 6px;
    color: ${props => props.theme[colors[props.txt_color]]};

    background: ${props => props.theme[colors[props.bg_color]]};

    &:hover {
        background: ${props => (props.hover_color ? props.theme[colors[props.hover_color]] : '')};
    }
`

/* export const CartContentButton = styled(BasicActionsButton)<ButtonProps>`
    background: ${props => props.theme["red"]};

    &:hover {
        background: ${props => props.theme["red-light"]};
    }
` */
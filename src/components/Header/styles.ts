import { Link } from "react-router-dom";
import styled from "styled-components";

const colors = {
    red: 'red',
    red_light: 'red-light',
    yellow_dark: 'yellow-dark',
    yellow_light: 'yellow-light',
    base_text: 'base-text',
} as const

interface ButtonProps {
    bg_color: keyof typeof colors
    hover_color?: keyof typeof colors
    txt_color: keyof typeof colors
}

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem 10rem;

    max-width: 1400px;
    margin: 0 auto;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;

    gap: .75rem;
`

export const Location = styled.div`
    display: flex;
    align-items: center;

    padding: .5rem;
    gap: .25rem;

    border-radius: 8px;
    background: ${props => props.theme["yellow-dark"]};

    p{
        /* font-weight: 400; */
        font-size: 0.875rem;
        color: ${props => props.theme["base-text"]};
    }
`

export const CartButtonLink = styled(Link) <ButtonProps>`
    display: flex;
    align-items: center;

    position: relative;
    padding: .5rem;
    line-height: 0; // para que o número de itens não fique fora do centro

    border: none;
    border-radius: 8px;

    background: ${props => props.theme[colors[props.bg_color]]};
    color: ${props => props.theme[colors[props.txt_color]]};

    &:hover {
        background: ${props => (props.hover_color ? props.theme[colors[props.hover_color]] : '')};
    }

/* 
  line-height: 0;
  height: 2.375rem;
  width: 2.375rem;
  transition: all 0.2s;
   */
`

export const TotalItem = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -7px;
    right: -7px;

    width: 1.25rem;
    height: 1.25rem;

    font-weight: bold;
    font-size: 0.75rem;
    border-radius: 50%;

    background-color: ${({ theme }) => theme["base-label"]};
    color: ${({ theme }) => theme["base-text"]};
`
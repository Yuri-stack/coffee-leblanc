import styled, { css } from "styled-components";

interface HeaderButtonProps {
    variant: "purple" | "yellow";
}

export const HeaderContainer = styled.header`
    width: 100%;
    height: 6.5rem;
    background: ${({ theme }) => theme.colors["base-background"]};
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 5;

    > div{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    gap: .75rem;
`

export const HeaderButton = styled.button<HeaderButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 2.3rem;
    height: 2.3rem;
    gap: .25rem;
    padding: 0 .5rem;
    border-radius: 6px;
    border: none;
    position: relative;
    font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};

    ${({ variant }) => css`
        background: ${({ theme }) => theme.colors[`brand-${variant}-light`]};
        color: ${({ theme }) => theme.colors[`brand-${variant}-dark`]};
    `}

    ${({ variant }) => variant === "purple" && css`
      svg {
        color: ${({ theme }) => theme.colors[`brand-${variant}`]};
      }
    `}
`
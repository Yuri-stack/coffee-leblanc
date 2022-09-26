import { MapPin, ShoppingCart, SunDim } from 'phosphor-react'

import { ActionsContainer, HeaderContainer, ActionsContentLocation, BasicActionsButton } from "./styles";

import logoCoffee from '../../assets/logo-coffee-delivery.svg'

export function Header2() {
    return (
        <HeaderContainer>
            <img src={logoCoffee} alt="" />

            <ActionsContainer>
                <ActionsContentLocation>
                    <MapPin size={22} weight="fill"/>
                    <p>São Paulo, SP</p>
                </ActionsContentLocation>

                <BasicActionsButton 
                    bg_color='red' 
                    hover_color='red_light' 
                    txt_color='base_text'
                >
                    <ShoppingCart size={22} weight="fill"/>
                </BasicActionsButton>

                <BasicActionsButton 
                    bg_color='red' 
                    hover_color='red_light' 
                    txt_color='base_text'
                >
                    <SunDim size={22} weight="duotone" />
                </BasicActionsButton>

            </ActionsContainer>
        </HeaderContainer>
    )
}

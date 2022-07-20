import { MapPin, ShoppingCart, SunDim } from 'phosphor-react'

import { ActionsContainer, HeaderContainer, ActionsContentLocation, ActionsContentCart } from "./styles";

import logoCoffee from '../../assets/logo-coffee-delivery.svg'

export function Header() {
    return (
        <HeaderContainer>
            <img src={logoCoffee} alt="" />

            <ActionsContainer>
                <ActionsContentLocation>
                    <MapPin size={22} weight="fill"/>
                    <p>São Paulo, SP</p>
                </ActionsContentLocation>

                <ActionsContentCart>
                    <ShoppingCart size={22} weight="fill"/>
                </ActionsContentCart>

                <ActionsContentCart>
                    <SunDim size={22} weight="duotone" />
                </ActionsContentCart>

            </ActionsContainer>
        </HeaderContainer>
    )
}

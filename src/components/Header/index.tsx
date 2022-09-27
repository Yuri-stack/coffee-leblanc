import { MapPin, ShoppingCart } from 'phosphor-react'
import { CartButtonLink, HeaderContainer, Location, TotalItem, HeaderContent } from './styles'
import logoCoffee from '../../assets/logo-coffee-delivery.svg'

export function Header() {
    return (
        <HeaderContainer>
            <img src={logoCoffee} alt="" />

            <HeaderContent>
                <Location>
                    <MapPin size={22} weight="fill" />
                    <p>São Paulo, SP</p>
                </Location>

                <CartButtonLink 
                    to="/checkout"
                    bg_color='red'
                    hover_color='red_light'
                    txt_color='base_text'
                >
                    <ShoppingCart size={22} weight="fill" />
                    <TotalItem>10</TotalItem>

                </CartButtonLink>
            </HeaderContent>

        </HeaderContainer>
    )
}

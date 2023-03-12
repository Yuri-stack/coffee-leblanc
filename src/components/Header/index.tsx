import { HeaderButton, HeaderContainer, HeaderContent } from "./styles";
import logoCoffee from '../../assets/logo-coffee-delivery.svg'
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
        <div className="container">
            <img src={logoCoffee} alt="" />
            
            <HeaderContent>
              <HeaderButton variant="purple">
                <MapPin size={20} weight="fill" />
                São Paulo, SP
              </HeaderButton>

              <HeaderButton variant="yellow">
                <ShoppingCart size={20} weight="fill" />
              </HeaderButton>
            </HeaderContent>
        </div>
    </HeaderContainer>
  )
}

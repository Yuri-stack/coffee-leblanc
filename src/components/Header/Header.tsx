import { HeaderButton, HeaderContainer, HeaderContent } from "./styles";
import logoCoffee from '../../assets/logo-coffee-delivery.svg'
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {
	const { cartQuantity } = useCart()

	return (
		<HeaderContainer>
			<div className="container">
				<NavLink to="/">
					<img src={logoCoffee} alt="" />
				</NavLink>

				<HeaderContent>
					<HeaderButton variant="purple">
						<MapPin size={20} weight="fill" />
						São Paulo, SP
					</HeaderButton>

					<NavLink to="/checkout">
						<HeaderButton variant="yellow">
							{ cartQuantity >= 1 && <span>{ cartQuantity }</span> }
							<ShoppingCart size={20} weight="fill" />
						</HeaderButton>
					</NavLink>
				</HeaderContent>
			</div>
		</HeaderContainer>
	)
}

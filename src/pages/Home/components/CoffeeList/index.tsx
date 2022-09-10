import { Minus, Plus, ShoppingCart } from "phosphor-react"

import { BasicActionsButton } from "../../../../components/Navbar/styles"
import { ActionsContentCart, CoffeeListContainer, CoffeeListContent } from "./styles"

import { dataProducts } from '../../../../mock/products-data'

export function CoffeeList() {
    return (
        <CoffeeListContainer>
            <h1>Nossos Cafés</h1>

            <CoffeeListContent>
                {dataProducts.map(item => (
                    <li key={item.id}>
                        <img src={item.image} alt={item.name} /> 
                        <div>
                            {item.tags.map(tag => (
                                <span key={tag}>{tag}</span>
                            ))}
                        </div>
                        <strong>{item.name}</strong>
                        <p>{item.description}</p>

                        <span>
                            <strong>{item.price}</strong>

                            <ActionsContentCart>
                                <button type="button"
                                    data-coffeeaction="increment-coffee"
                                >
                                    <Plus size={22} weight="bold" />
                                </button>

                                <input
                                    type="text"
                                    data-coffeeaction="product-amount"
                                    readOnly
                                    value={item.amount}
                                />

                                <button type="button"
                                    data-coffeeaction="decrement-coffee"
                                    disabled={item.amount <= 1}
                                >
                                    <Minus size={22} weight="bold" />
                                </button>

                            </ActionsContentCart>

                            <BasicActionsButton
                                bg_color='yellow_light'
                                txt_color='yellow_dark'
                            >
                                <ShoppingCart size={22} weight="fill" />
                            </BasicActionsButton>

                        </span>
                    </li>
                ))}
            </CoffeeListContent>
        </CoffeeListContainer>
    )
}

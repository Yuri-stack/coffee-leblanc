import { useEffect, useState } from "react"
import { Minus, Plus, ShoppingCart } from "phosphor-react"
import { api } from "../../../../services/api"

import { BasicActionsButton } from "../../../../components/Navbar/styles"
import { ActionsContentCart, CoffeeListContainer, CoffeeListContent } from "./styles"

import imgReplace from '../../../../assets/coffe-img.svg'

interface Coffee {
    id: number
    name: string
    description: string
    tags: Array<string>
    price: string
    image: string
    amount: number
}

export function CoffeeList() {
    const [list, setList] = useState<Coffee[]>([])

    useEffect(() => {
        async function loadProducts() {
            const response = await api.get<Coffee[]>('products')
            setList(response.data)
        }

        loadProducts()
    }, [])

    return (
        <CoffeeListContainer>
            <h1>Nossos Cafés</h1>

            <CoffeeListContent>
                {list.map(item => (
                    <li key={item.id}>
                        { 
                            item.image ? 
                                <img src={item.image} alt={item.name} /> 
                            : 
                                <img src={imgReplace} alt="Imagem de uma xícara de café" />
                        }
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
                                    disabled={item.amount <= 1}
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

import { useEffect, useState } from "react"
import { ShoppingCart } from "phosphor-react"
import { api } from "../../services/api"

import { ActionsContentCart, CoffeeListContainer, CoffeeListContent } from "./styles"

interface Coffee {
    id: number
    name: string
    description: string
    tags: Array<string>
    price: string
    image: string
}

export function CoffeeList() {
    const [list, setList] = useState<Coffee[]>([])

    useEffect(() => {
        async function loadProducts(){
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
                        <img src={item.image} alt={item.name} />
                        <div>
                            { item.tags.map(tag => (
                                <span key={tag}>{tag}</span>
                            ))}
                        </div>
                        <strong>{item.name}</strong>
                        <p>{item.description}</p>
                        <span>
                            R$<strong>{item.price}</strong>

                            <ActionsContentCart>
                                <ShoppingCart size={22} weight="fill"/>
                            </ActionsContentCart>
                        </span>
                    </li>
                ))}
            </CoffeeListContent>
        </CoffeeListContainer>
    )
}

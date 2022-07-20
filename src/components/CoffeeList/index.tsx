import { useEffect, useState } from "react"
import { api } from "../../services/api"

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
        <>
            <h1>Nossos Cafés</h1>

            <div>
                {list.map(item => (
                    <li key={item.id}>
                        <img src={item.image} alt={item.name} />
                        { item.tags.map(tag => (
                            <span key={tag}>{tag} - </span>
                        ))}
                        <strong>{item.name}</strong>
                        <p>{item.description}</p>
                        <span>{item.price}</span>
                    </li>
                ))}
            </div>
        </>
    )
}

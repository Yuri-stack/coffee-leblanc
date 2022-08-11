import coffeExpresso from './images/coffe-expresso.svg'
import coffeGelado from './images/coffe-gelado.svg'
import coffeChocoQuente from './images/coffe-chocoQuente.svg'
import coffeCapuccino from './images/coffe-capuccino.svg'
import coffeCubano from './images/coffe-cubano.svg'
import coffeHavaino from './images/coffe-havaiano.svg'

export const dataProducts = [
    {
        "id": 1,
        "name": "Expresso Tradicional",
        "description": "O tradicional café feito com água quente e grãos moídos",
        "tags": ["Tradicional"],
        "price": 9.90,
        "image": coffeExpresso,
        "amount":5
    },
    {
        "id": 2,
        "name": "Expresso Gelado",
        "description": "Bebida preparada com café expresso e cubos de gelo",
        "tags": ["Tradicional", "Gelado"],
        "price": 9.90,
        "image": coffeGelado,
        "amount":5
    },
    {
        "id": 3,
        "name": "Chocolate Quente",
        "description": "Bebida feita com chocolate dissolvido no leite quente e café",
        "tags": ["Especial", "Com Leite"],
        "price": 9.90,
        "image": coffeChocoQuente,
        "amount":5
    },
    {
        "id": 4,
        "name": "Capuccino",
        "description": "Bebida com canela feita de doses iguais de café, leite e espuma",
        "tags": ["Tradicional", "Com Leite"],
        "price": 9.90,
        "image": coffeCapuccino,
        "amount":5
    },
    {
        "id": 5,
        "name": "Cubano",
        "description": "Drink gelado de café expresso com rum, creme de leite e hortelã",
        "tags": ["Especial", "Alcoólico", "Gelado"],
        "price": 9.90,
        "image": coffeCubano,
        "amount":5
    },
    {
        "id": 6,
        "name": "Havaiano",
        "description": "Bebida adocicada preparada com café e leite de coco",
        "tags": ["Especial"],
        "price": 9.90,
        "image": coffeHavaino,
        "amount":5
    }
]
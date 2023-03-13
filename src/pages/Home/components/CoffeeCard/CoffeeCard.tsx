import { useState } from "react";
import { ShoppingCart } from 'phosphor-react';
import { formatMoney } from "../../../../utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";
import { QuantityInput } from "../../../../components/QuantityInput/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { CardFooter, CartWrapper, CoffeeCardContainer, Description, Name, Tags } from "./styles";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  image: string;
  price: number;
}

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { addCoffeeToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const formattedPrice = formatMoney(coffee.price)

  function handleIncrease(){
    setQuantity((state) => state + 1)
  }

  function handleDecrease(){
    setQuantity((state) => state - 1)
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    
    addCoffeeToCart(coffeeToAdd)
  }

  return (
    <CoffeeCardContainer>
      <img src={coffee.image} alt="" />

      <Tags>
        {coffee.tags.map(tag => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Name>{ coffee.name }</Name>
      <Description>{ coffee.description }</Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">{ formattedPrice }</TitleText>
        </div>

        <CartWrapper>
          <QuantityInput 
            onIncrease = {handleIncrease}
            onDecrease = {handleDecrease}
            quantity = {quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </CartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}

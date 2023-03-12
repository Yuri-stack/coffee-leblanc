import { TitleText } from "../../../../components/Typography";
import { coffees } from "../../../../data/coffee-data";
import { CoffeeCard } from "../CoffeeCard/CoffeeCard";
import { CoffeeList, CoffeesContainer } from "./styles";

export function Coffees() {
  return (
    <CoffeesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>

      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </CoffeesContainer>
  )
}

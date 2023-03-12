import { TitleText } from "../../../../components/Typography";
import { CoffeeCartCard } from "../CoffeeCartCard/CoffeeCartCard";
import { ConfirmationSection } from "../ConfirmationSection/ConfirmationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
        <TitleText size="xs" color="subtitle">Cafés Selecionados</TitleText>
        <DetailsContainer>
            <CoffeeCartCard />
            <CoffeeCartCard />
            <CoffeeCartCard />

            <ConfirmationSection />
        </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}

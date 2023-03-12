import { CheckoutForm } from "./components/CheckoutForm/CheckoutForm";
import { SelectedCoffees } from "./components/SelectedCoffees/SelectedCoffees";
import { CheckoutContainer } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer className="container">
      <CheckoutForm />
      <SelectedCoffees />
    </CheckoutContainer>
  )
}

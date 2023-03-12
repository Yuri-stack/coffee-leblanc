import { TitleText } from "../../../../components/Typography";
import { CheckoutFormContainer, FormSectionContainer } from "./styles";
import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { useTheme } from "styled-components";
import { AddressForm } from "../AddressForm/AddressForm";
import { PaymentOptions } from "../PaymentOptions/PaymentOptions";

export function CheckoutForm() {
  const { colors } = useTheme()

  return (
    <CheckoutFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>

      <FormSectionContainer>
        <SectionTitle 
          title="Endereço de Entrega" 
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine size={22} color={colors["brand-yellow-dark"]} />}
        />
        <AddressForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitle 
          title="Pagamento" 
          subtitle="O pagamento feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar size={22} color={colors["brand-purple"]} />}
        />
        <PaymentOptions />
      </FormSectionContainer>
    </CheckoutFormContainer>
  )
}

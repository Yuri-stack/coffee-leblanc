import { Button } from "../../../../components/Button/Button";
import { RegularText } from "../../../../components/Typography";
import { ConfirmationSectionContainer } from "./styles";

export function ConfirmationSection() {
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ </RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ </RegularText>
      </div>
      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ 
        </RegularText>
      </div>

      <Button
        text="Confirmar Pedido"
        // disabled={cartQuantity <= 0}
        type="submit"
      />
    </ConfirmationSectionContainer>
  )
}

import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";

export function CoffeeCartCard() {
    return (
        <CoffeeCartCardContainer>
            <div>
                <img src="" alt="" />

                <div>
                    <RegularText color="subtitle">Nome do Café</RegularText>
                    <ActionsContainer>
                        <QuantityInput
                            size="small"
                        />
                        <RemoveButton type="button">
                            <Trash size={16} />
                            REMOVER
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div >

            <p>R$ 9.90</p>
        </CoffeeCartCardContainer>
    )
}

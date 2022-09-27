import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { BannerContainer, BannerContent, InfoContainer, TitleContainer } from "./styles";
import InfoItem from "../InfoItem/InfoItem";

import imagemCoffee from '../../../../assets/imagem-coffee.svg'

export function Banner() {
    return (
        <BannerContainer>
            <BannerContent>
                <TitleContainer>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.</p>
                </TitleContainer>

                <InfoContainer>
                    <InfoItem
                        title="Compra Simples e Segura."
                        icon={ShoppingCart} />

                    <InfoItem
                        title="Entrega rápida e rastreada."
                        icon={Timer} />

                    <InfoItem
                        title="Embalagem mantém o café intacto."
                        icon={Package} />

                    <InfoItem
                        title="O café chega fresquinho até você."
                        icon={Coffee} />
                </InfoContainer>
            </BannerContent>

            <img src={imagemCoffee} alt="Imagem de um copo de café e alguns grãos ao redor" />
        </BannerContainer>
    )
}

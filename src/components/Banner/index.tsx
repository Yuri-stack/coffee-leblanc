import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { BannerContainer, BannerContent, InfoContainer, InfoItem, TitleContainer } from "./styles";

import imagemCoffee from '../../assets/imagem-coffee.svg'

export function Banner() {
  return (
    <BannerContainer>
        <BannerContent>
            <TitleContainer>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.</p>
            </TitleContainer>
            
            <InfoContainer>
                <InfoItem>
                    <div>
                        <ShoppingCart size={22} weight="fill"/>
                    </div>
                    <p>Compra Simples e Segura.</p>
                </InfoItem>

                <InfoItem>
                    <div>
                        <Timer size={22} weight="fill"/>
                    </div>
                    <p>Entrega rápida e rastreada.</p>
                </InfoItem>
            </InfoContainer>

            <InfoContainer>
                <InfoItem>
                    <div>
                        <Package size={22} weight="fill"/>
                    </div>
                    <p>Embalagem mantém o café intacto.</p>
                </InfoItem>

                <InfoItem>
                    <div>
                        <Coffee size={22} weight="fill"/>
                    </div>
                    <p>O café chega fresquinho até você.</p>
                </InfoItem>
            </InfoContainer>
        </BannerContent>

        <img src={imagemCoffee} alt="Imagem de um copo papelão com café" />
    </BannerContainer>
  )
}

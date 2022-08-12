import { Bank, CreditCard, CurrencyDollar, MapPin, Minus, Money, Plus, Trash } from "phosphor-react";
import { ActionsContentCart } from "../Home/components/CoffeeList/styles";
import { ButtonCardContainer, CheckoutContainer, CoffeCardContainer, CoffeCardContent, CoffeCardSelected, CoffeCardSelectedInfo, CoffeeCheckout, FormContainer, InputForm } from "./styles";

import coffeExpresso from '../../mock/images/coffe-expresso.svg'
import { BasicActionsButton } from "../../components/Navbar/styles";
import { Link } from "react-router-dom";

export function Checkout() {
  return (
    <CheckoutContainer>
      <section>
        <strong>Complete seu Pedido</strong>

        <CoffeCardContainer>
          <CoffeCardContent>
            <MapPin size={22} />
            <div>
              <strong>Endereço de Entrega</strong>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </CoffeCardContent>

          <FormContainer>
            <InputForm placeholder="CEP" required />
            <InputForm placeholder="Rua" largura="100%" required />

            <div>
              <InputForm type="number" placeholder="Número" largura="200px" required />
              <InputForm placeholder="Complemento" largura="100%" />
            </div>

            <div>
              <InputForm placeholder="Bairro" required />
              <InputForm placeholder="Cidade" largura="100%" required />
              <InputForm placeholder="UF" largura="60px" maxLength={2} required />
            </div>
          </FormContainer>
        </CoffeCardContainer>

        <CoffeCardContainer>
          <CoffeCardContent>
            <CurrencyDollar size={22} />
            <div>
              <strong>Pagamento</strong>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </CoffeCardContent>

          <ButtonCardContainer>
            <button>
              <CreditCard size={22} color="red" />
              Cartão de Crédito
            </button>
            <button>
              <Bank size={22} color="red" />
              Cartão de Dédito
            </button>
            <button>
              <Money size={22} color="red" />
              Dinheiro
            </button>
          </ButtonCardContainer>

        </CoffeCardContainer>
      </section>

      <section>
        <strong>Café(s) Selecionado(s)</strong>

        <CoffeCardContainer>
          <CoffeCardSelected>
            <img src={coffeExpresso} alt="Café" />

            <CoffeCardSelectedInfo>
              <strong>Expresso Tradicional</strong>

              <ActionsContentCart>
                <button type="button"
                  data-coffeeaction="increment-coffee"
                // disabled={item.amount <= 1}
                >
                  <Plus size={22} weight="bold" />
                </button>

                <input
                  type="text"
                  data-coffeeaction="product-amount"
                  readOnly
                  value={5}
                // value={item.amount}
                />

                <button type="button"
                  data-coffeeaction="decrement-coffee"
                >
                  <Minus size={22} weight="bold" />
                </button>

                <BasicActionsButton
                  bg_color='yellow_light'
                  txt_color='yellow_dark'
                >
                  <Trash size={22} />
                </BasicActionsButton>

              </ActionsContentCart>
            </CoffeCardSelectedInfo>

            <strong>R$ 9,90</strong>
          </CoffeCardSelected>

          <hr />

          <CoffeCardSelected>
            <img src={coffeExpresso} alt="Café" />

            <CoffeCardSelectedInfo>
              <strong>Expresso Tradicional</strong>

              <ActionsContentCart>
                <button type="button"
                  data-coffeeaction="increment-coffee"
                // disabled={item.amount <= 1}
                >
                  <Plus size={22} weight="bold" />
                </button>

                <input
                  type="text"
                  data-coffeeaction="product-amount"
                  readOnly
                  value={5}
                // value={item.amount}
                />

                <button type="button"
                  data-coffeeaction="decrement-coffee"
                >
                  <Minus size={22} weight="bold" />
                </button>

                <BasicActionsButton
                  bg_color='yellow_light'
                  txt_color='yellow_dark'
                >
                  <Trash size={22} />
                </BasicActionsButton>

              </ActionsContentCart>
            </CoffeCardSelectedInfo>

            <strong>R$ 9,90</strong>
          </CoffeCardSelected>

          <hr />

          <CoffeeCheckout>
            <section>
              <p>Total de Entregas</p>
              <p>Entrega</p>
              <h3>Total</h3>
            </section>

            <div>
              <p>R$29,70</p>
              <p>R$29,70</p>
              <h3>R$29,70</h3>
            </div>
          </CoffeeCheckout>

          <ButtonCardContainer>
            <Link to="/">
              Cancelar
            </Link>
            <Link to="/success">
              Confirmar
            </Link>
          </ButtonCardContainer>
        </CoffeCardContainer>
      </section>

    </CheckoutContainer>
  )
}

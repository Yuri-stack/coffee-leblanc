import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "phosphor-react";
import { ButtonCardContainer, CheckoutContainer, CoffeCardContainer, CoffeCardContent, FormContainer, InputForm } from "./styles";

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
              <InputForm placeholder="CEP" required/>
              <InputForm placeholder="Rua" largura="100%" required/>

              <div>
                <InputForm type="number" placeholder="Número" largura="200px" required/>
                <InputForm placeholder="Complemento" largura="100%" required/>
              </div>

              <div>
                <InputForm placeholder="Bairro" required/>
                <InputForm placeholder="Cidade" largura="100%" required/>
                <InputForm placeholder="UF" largura="60px" required/>
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
                <CreditCard size={22} color="red"/>
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
            <CoffeCardContent>
              <MapPin size={22} />
              <div>
                <strong>Endereço de Entrega</strong>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </CoffeCardContent>

            <form style={{ display: 'flex', flexDirection: 'column' }}>
              <input type="text" placeholder="CEP" />
              <input type="text" placeholder="Rua" />
              <input type="number" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </form>

        </CoffeCardContainer>
      </section>

    </CheckoutContainer>
  )
}

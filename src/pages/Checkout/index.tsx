import { CheckoutContainer, CoffeCardContainer } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <section>
        <strong>Complete seu Pedido</strong>

        <div style={{ backgroundColor: '#ccc', padding: '1.5rem', color: '#000' }}>
          <div style={{ border: '1px solid #000' }}>
            <div>
              <p>Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
            <form style={{ display: 'flex', flexDirection: 'column' }}>
              <input type="text" placeholder="CEP" />
              <input type="text" placeholder="Rua" />
              <input type="number" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </form>
          </div>
        </div>

        <div style={{ backgroundColor: '#ccc', padding: '1.5rem', marginTop: '1rem' }}>
          <div style={{ border: '1px solid #000' }}>
            <div>
              <p>Pagamento</p>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>

            <div>
              <button>Cartão de Crédito</button>
              <button>Cartão de Dédito</button>
              <button>Dinheiro</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <strong>Café(s) Selecionado(s)</strong>

        <div style={{ backgroundColor: '#ccc', padding: '1.5rem', color: '#000' }}>
          <div style={{ border: '1px solid #000' }}>
            <div>
              <p>Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
            <form style={{ display: 'flex', flexDirection: 'column' }}>
              <input type="text" placeholder="CEP" />
              <input type="text" placeholder="Rua" />
              <input type="number" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </form>
          </div>
        </div>
      </section>
    </CheckoutContainer>
  )
}

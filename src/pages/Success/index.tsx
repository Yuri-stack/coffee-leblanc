import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { useTheme } from "styled-components";
import { InfoWithIcon } from "../../components/InfoWithIcon/InfoWithIcon";
import { RegularText, TitleText } from "../../components/Typography";
import { DetailsContainer, SuccessContainer } from "./styles";
import deliveryMan from '../../assets/delivery.svg'
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../Checkout";
import { useEffect } from "react";
import { paymentMethods } from "../Checkout/components/PaymentOptions/PaymentOptions";

interface LocationType {
    state: OrderData;
}

export function Success() {
    const { colors } = useTheme();
    const { state } = useLocation() as unknown as LocationType;

    const navigate = useNavigate();

    useEffect(() => {
        if (!state) {
            navigate("/");
        }
    }, []);

    if (!state) return <></>;

    return (
        <SuccessContainer className="container">
            <div>
                <TitleText size="l">Uhu! Pedido confirmado</TitleText>
                <RegularText size="l" color="subtitle">
                    Agora é só aguardar que logo o café chegará até você
                </RegularText>
            </div>

            <section>
                <DetailsContainer>
                    <InfoWithIcon
                        icon={<MapPin weight="fill" />}
                        iconBg={colors["brand-purple"]}
                        text={
                            <RegularText>
                                Entrega em <strong>{state.street}</strong>, {state.number}
                                <br />
                                {state.district} - {state.city}, {state.uf}
                            </RegularText>
                        }
                    />

                    <InfoWithIcon
                        icon={<Clock weight="fill" />}
                        iconBg={colors["brand-yellow"]}
                        text={
                            <RegularText>
                                Previsão de entrega
                                <br />
                                <strong>20 min - 30 min</strong>
                            </RegularText>
                        }
                    />

                    <InfoWithIcon
                        icon={<CurrencyDollar weight="fill" />}
                        iconBg={colors["brand-yellow-dark"]}
                        text={
                            <RegularText>
                                Pagamento na entrega
                                <br />
                                <strong>{paymentMethods[state.paymentMethod].label}</strong>
                            </RegularText>
                        }
                    />
                </DetailsContainer>
                <img src={deliveryMan} />
            </section>
        </SuccessContainer>
    );
}

import { CheckoutForm } from "./components/CheckoutForm/CheckoutForm";
import { SelectedCoffees } from "./components/SelectedCoffees/SelectedCoffees";
import { CheckoutContainer } from "./styles";

import * as zod from 'zod'
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

enum PaymentMethods {
    credit = "credit",
    debit = "debit",
    money = "money",
}

const confirmedOrderFormValidationSchema = zod.object({
    cep: zod.string().min(1, "Informe o CEP"),
    street: zod.string().min(1, "Informe o Rua"),
    number: zod.string().min(1, "Informe o Número"),
    complement: zod.string(),
    district: zod.string().min(1, "Informe o Bairro"),
    city: zod.string().min(1, "Informe a Cidade"),
    uf: zod.string().min(1, "Informe a UF"),
    paymentMethod: zod.nativeEnum(PaymentMethods, {
        errorMap: () => {
            return { message: "Informe o método de pagamento" };
        },
    }),
});

export type OrderData = zod.infer<typeof confirmedOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export function Checkout() {
    const confirmedOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmedOrderFormValidationSchema)
    })

    const { handleSubmit } = confirmedOrderForm
    const { cleanCart } = useCart()

    const navigate = useNavigate()

    function handleConfirmOrder(data: ConfirmOrderFormData) {
        navigate("/success", {
            state: data
        })
        cleanCart()
    }

    return (
        <FormProvider {...confirmedOrderForm}>
            <CheckoutContainer className="container" onSubmit={handleSubmit(handleConfirmOrder)}>
                <CheckoutForm />
                <SelectedCoffees />
            </CheckoutContainer>
        </FormProvider>
    )
}

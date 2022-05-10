import { useState, useEffect, useCallback } from 'react';
import { IPayment } from '../services/api/Payments';

interface IValidationCreditCard {
    numeroCartao: {
        status: boolean;
        messageError?: string;
    },
    nome: {
        status: boolean;
        messageError?: string;
    },
    validade: {
        status: boolean;
        messageError?: string;
    },
    cvv: {
        status: boolean;
        messageError?: string;
    },
    numeroParcelas: {
        status: boolean;
        messageError?: string;
    },

}

export default function useCreditCard() {
    const [creditCard, setCreditCard] = useState<IPayment>({
        id: '',
        numeroCartao: '',
        nome: '',
        validade: '',
        cvv: '',
        numeroParcelas: '',
    });

    const [validationCard, setValidationCard] = useState<IValidationCreditCard>({
        numeroCartao: {
            status: false,
            messageError: ""
        },
        nome: {
            status: false,
            messageError: ""
        },
        validade: {
            status: false,
            messageError: ""
        },
        cvv: {
            status: false,
            messageError: ""
        },
        numeroParcelas: {
            status: false,
            messageError: ""
        }
    });

    const checkCard = (card:any) => {
        let validation = validationCard;
        if (card.numeroCartao.replace(/\D/g, "").length < 16) {
            validation = { ...validation, numeroCartao: { status: false, messageError: "Número de cartão inválido" } };
        } else {
            validation = { ...validation, numeroCartao: { status: true, messageError: "" } };
        }

        if (card.nome.length < 5) {
            validation = { ...validation, nome: { status: false, messageError: "Insira seu nome completo" } };
        } else {
            validation = { ...validation, nome: { status: true, messageError: "" } };
        }

        if (card.validade.replace(/\D/g, "").length < 4) {
            validation = { ...validation, validade: { status: false, messageError: "Data inválida" } };
        } else {
            validation = { ...validation, validade: { status: true, messageError: "" } };
        }

        if (card.cvv.replace(/\D/g, "").length < 3) {
            validation = { ...validation, cvv: { status: false, messageError: "Código inválido" } };
        } else {
            validation = { ...validation, cvv: { status: true, messageError: "" } };
        }

        if (card.numeroParcelas==="Número de parcelas" || card.numeroParcelas==="") {
            validation = { ...validation, numeroParcelas: { status: false, messageError: "Insira o número de parcelas" } };
        } else {
            validation = { ...validation, numeroParcelas: { status: true, messageError: "" } };
        }

        setValidationCard(validation);

    }


    return { creditCard, setCreditCard, validationCard, setValidationCard, checkCard }
}
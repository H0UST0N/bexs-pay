import React, { SyntheticEvent, useContext } from "react";
import Image from 'next/image';
import styles from './styles.module.css';

import Header from "../../components/layout/Header";
import Content from "../../components/layout/Content";
import CreditCard from "../../components/general/CreditCard";
import chevron from '../../assets/svg/chevron.svg';
import iconInformation from '../../assets/svg/iconInformation.svg';
import cardIcon from '../../assets/svg/cardIcon.svg';
import { useRouter } from "next/router";
import Input from "../../components/general/Input";
import Form from "../../components/general/Form";
import Select from "../../components/general/Select";
import { CreditCardContext } from "../../contexts/CreditCardContext";
import Button from "../../components/general/Button";
import Breadcrumb from "../../components/general/Breadcrumb";
import Payments from "../../services/api/Payments";

const optionsParcelas = [
    {
        id: 0,
        name: 'Número de parcelas'
    },
    {
        id: 1,
        name: '1x R$ 12.000,00 sem juros'
    },
    {
        id: 2,
        name: '2x R$ 6.000,00 sem juros'
    },
    {
        id: 3,
        name: '3x R$ 4.000,00 sem juros'
    },
    {
        id: 4,
        name: '4x R$ 3.000,00 sem juros'
    },
    {
        id: 5,
        name: '5x R$ 2.400,00 sem juros'
    },
    {
        id: 6,
        name: '6x R$ 2.000,00 sem juros'
    },
    {
        id: 7,
        name: '7x R$ 1.714,29 sem juros'
    },
    {
        id: 8,
        name: '8x R$ 1.500,00 sem juros'
    },
    {
        id: 9,
        name: '9x R$ 1.333,33 sem juros'
    },
    {
        id: 10,
        name: '10x R$ 1.200,00 sem juros'
    },
    {
        id: 11,
        name: '11x R$ 1.090,90 sem juros'
    },
    {
        id: 12,
        name: '12x R$ 1.000,00 sem juros'
    },
]

export default function Payment() {
    const router = useRouter();
    const { creditCard, validationCard, checkCard } = useContext(CreditCardContext);

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await checkCard(creditCard);
        if (validationCard.nome.status && validationCard.numeroCartao.status && validationCard.numeroParcelas.status && validationCard.cvv.status && validationCard.validade.status) {
            await Payments.save(creditCard);
        } else {
            console.log('Cartão Inválido');
        }
        
    }
    return (
        <>
            <Header>
                <div className={styles.changePay} onClick={() => router.push(`/home`)}>
                    <div>
                        <Image src={chevron} />
                    </div>
                    <div>
                        Alterar forma de pagamento
                    </div>
                </div>
                <div className={styles.title}>
                    <div>
                        <Image src={cardIcon} />
                    </div>
                    <p>Adicione um novo cartão de crédito</p>
                </div>
                <CreditCard />
            </Header>
            <Content>
                <Form onSubmit={handleSubmit}>
                    <Breadcrumb />
                    <Input mask="9999 9999 9999 9999" label={"Número do cartão"} type={"text"} nome={"numeroCartao"} messageError={validationCard.numeroCartao?.messageError} />
                    <Input label={"Nome (igual ao cartão)"} type={"text"} nome={"nome"} messageError={validationCard.nome?.messageError} />
                    <div className={styles.doubleColumn}>
                        <Input mask="99/99" label={"Validade"} type={"text"} nome={"validade"} messageError={validationCard.validade?.messageError} />
                        <Input mask="999" label={"CVV"} type={"text"} nome={"cvv"} icon={<Image src={iconInformation} />} messageError={validationCard.cvv?.messageError} />
                    </div>
                    <Select
                        label={"Número de parcelas"}
                        children={
                            optionsParcelas?.map(
                                (item: { name: string; id?: string | number }) => (
                                    <option key={item.id} value={item.name}>{item.name}</option>
                                )
                            )
                        }
                        placeholder={"Parcelas"}
                        messageError={validationCard.numeroParcelas?.messageError}
                    />
                    <div className={styles.button}>
                        <Button type="submit">
                            CONTINUAR
                        </Button>
                    </div>
                </Form>
            </Content>
        </>
    );
}

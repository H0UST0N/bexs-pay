import React, { SyntheticEvent } from "react";
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

export default function Payment() {
    const router = useRouter();

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
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
                    <Input label={"Número do cartão"} type={"number"} name={"numero"} />
                    <Input label={"Nome (igual ao cartão)"} type={"text"} name={"nome"} />
                    <div className={styles.doubleColumn}>
                        <Input label={"Validade"} type={"number"} name={"validade"} />
                        <Input label={"CVV"} type={"number"} name={"cvv"} icon={<Image src={iconInformation} />}/>
                    </div>
                    <Select children={undefined} placeholder={"Parcelas"} />
                </Form>
            </Content>
        </>
    );
}

import { useContext, useEffect } from 'react';
import { CreditCardContext } from '../../../contexts/CreditCardContext';
import styles from './styles.module.css';

const CreditCard = () => {
    const { creditCard } = useContext(CreditCardContext);

    return (
        <div className={`${styles.creditCard} ${(creditCard.numeroCartao.replace(/\D/g,"").length < 16 || creditCard.nome == "" || creditCard.validade.replace(/\D/g,"").length < 4 || creditCard.cvv.replace(/\D/g,"").length < 3 ) ? styles.creditCardUnfilled : styles.creditCardFilled}`}>
            <div className={styles.numero}>
                {creditCard?.numeroCartao ? creditCard?.numeroCartao : "**** **** **** ****"}
            </div>

            <div className={styles.bottom}>
                <div className={styles.nome}>
                {creditCard?.nome ? creditCard?.nome : "NOME DO TITULAR" }
                </div>
                <div className={styles.validade}>
                {creditCard?.validade ? creditCard?.validade : "00/00"}
                </div>
            </div>
        </div>
    );
};
export default CreditCard;
import { useContext, useState } from 'react';
import { CreditCardContext } from '../../../contexts/CreditCardContext';
import styles from './styles.module.css';

interface SelectProps {
    label: any;
    children: React.ReactNode,
    placeholder: string,
    messageError?:string;
};

const Select = ({ children, placeholder, label, messageError }: SelectProps) => {
    const { creditCard, setCreditCard } = useContext(CreditCardContext);
    const [displayLabel, setDisplayLabel] = useState(false);

    const onChange = (e) => {
        let card = creditCard;
        if (e.target.value!=="Número de parcelas") {
            setDisplayLabel(true);
        } else {
            setDisplayLabel(false);
        }
        card.numeroParcelas = e.target.value;
        setCreditCard({ ...creditCard, ...card });
    }

    return (
        <div className={styles.content}>
            <label className={styles.label}>{displayLabel && label}</label>
            <select
                placeholder={placeholder}
                className={styles.select}
                onChange={onChange}
            >
                {children}
            </select>
            {messageError && <label className={styles.labelError}>{messageError}</label>}
        </div>
    );
}

export default Select;
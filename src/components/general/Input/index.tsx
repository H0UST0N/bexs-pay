import { useContext, useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import iconInformation from '../../assets/svg/iconInformation.svg';
import { CreditCardContext } from '../../../contexts/CreditCardContext';
import InputMask from "react-input-mask";

interface InputProps {
    label: any;
    type: any;
    nome: string;
    mask?: string;
    icon?: JSX.Element;
    messageError?:string;
};



const Input = ({ type, nome, label, icon, mask, messageError }: InputProps) => {

    const { creditCard, setCreditCard } = useContext(CreditCardContext);

    const [displayLabel, setDisplayLabel] = useState(false);
    const onChange = (e: any) => {
        let card = creditCard;
        if (e.target.value) {
            setDisplayLabel(true);
        } else {
            setDisplayLabel(false);
        }
        card[nome] = e.target.value;
        setCreditCard({ ...creditCard, ...card });
    }
    return (
        <div className={styles.content}>
            <label className={styles.label}>{displayLabel && label} {displayLabel && icon}</label>
            {mask
                ? <InputMask mask={mask} type={type} name={nome} className={messageError ? styles.inputError : styles.input} placeholder={!displayLabel && label} onChange={onChange} />
                : <input type={type} name={nome} className={messageError ? styles.inputError : styles.input} placeholder={!displayLabel && label} onChange={onChange} />
            }
            {messageError && <label className={styles.labelError}>{messageError}</label>}
        </div>
    );
}

export default Input;
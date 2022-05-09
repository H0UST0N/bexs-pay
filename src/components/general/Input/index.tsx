import { useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import iconInformation from '../../assets/svg/iconInformation.svg';

interface InputProps {
    label: any;
    type: any;
    name: string;
    icon?: JSX.Element;
};



const Input = ({ type, name, label, icon }: InputProps) => {
    const [displayLabel, setDisplayLabel] = useState(false);
    const onChange = (e: any) => {
        if (e.target.value) {
            setDisplayLabel(true);
        } else {
            setDisplayLabel(false);
        }
        
    }
    return (
        <div className={styles.content}>
            <label className={styles.label}>{displayLabel && label} {displayLabel && icon}</label>
            <input type={type} name={name} className={styles.input} placeholder={!displayLabel && label } onChange={onChange}/>
        </div>
    );
}

export default Input;
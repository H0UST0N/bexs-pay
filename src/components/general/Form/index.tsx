import React from 'react';
import styles from './styles.module.css';

interface FormProps {
    children: React.ReactNode,
    onSubmit: (e: React.SyntheticEvent) => any
};

const Form = ({ children, onSubmit }: FormProps) => {

    return (
        <form onSubmit={onSubmit} className={styles.form}>
            {children}
        </form>
    );
}

export default Form;
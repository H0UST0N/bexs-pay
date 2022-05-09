import styles from './styles.module.css';

interface SelectProps {
    children: React.ReactNode,
    placeholder: string,
};

const Select = ({ children, placeholder }: SelectProps) => {


    return (

        <select
            placeholder={placeholder}
            className={styles.select}
        >
            {children}
        </select>
    );
}

export default Select;
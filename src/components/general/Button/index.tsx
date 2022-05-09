import styles from './styles.module.css';

interface ButtonProps {
    type: 'submit' | 'reset' | 'button' | undefined;
    children: string;
    onClick?: (e: any) => void;
};


const Button = ({ type, children, onClick }: ButtonProps) => {
    return (
        <button type={type} className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
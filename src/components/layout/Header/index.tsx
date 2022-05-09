import styles from './styles.module.css';

interface HeaderProps {
    children: any,
};

const Header = ({ children }: HeaderProps) => {
    return (
        <header className={styles.header}>
            {children}
        </header>
    );
}
export default Header;
import styles from './styles.module.css';

interface ContainerProps {
    children: any;
};

const Container = ({ children }: ContainerProps) => {
    return (
        <main className={styles.main}>
            {children}
        </main>
    );
}
export default Container;
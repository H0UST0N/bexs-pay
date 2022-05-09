import styles from './styles.module.css';

interface ContentProps {
    children: any
};

const Content = ({ children }: ContentProps) => {
    return (
        <div className={styles.content}>
                {children}
        </div>

    );
}
export default Content;
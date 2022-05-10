import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import chevronNext from '../../../assets/svg/chevronNext.svg';
import checked from '../../../assets/svg/checked.svg';

const Breadcrumb = () => {

    return (
        <div className={styles.breadcrumb}>
            <div className={styles.stage}>1</div>
            <div className={styles.text}>Carrinho</div>
            <div className={styles.icon}><Image src={chevronNext} /></div>
            <div className={styles.stageChecked}><Image src={checked} /></div>
            <div className={styles.text}>Pagamento</div>
            <div className={styles.icon}><Image src={chevronNext} /></div>
            <div className={styles.stage}>3</div>
            <div className={styles.text}>Confirmação</div>
        </div>
    );
}

export default Breadcrumb;
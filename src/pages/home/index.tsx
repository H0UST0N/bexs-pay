import React from "react";
import styles from './styles.module.css';

import Image from 'next/image';

import logoBexs from '../../assets/img/logo.png';


export default function Home() {
    return (
        <div className={styles.container}>
            <Image src={logoBexs} />
        </div>
    );
}

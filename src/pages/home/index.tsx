import React from "react";


import Button from "../../components/general/Button";
import { useRouter } from "next/router";

import styles from './styles.module.css';

export default function Home() {
    const router = useRouter();
    return (

        <div className={styles.capa}>
            <div className={styles.logo}>
            </div>
            <div className={styles.button}>
                <Button type="button" onClick={() => router.push(`/payment`)}>
                    CHECKOUT
                </Button>
            </div>
        </div>


    );
}

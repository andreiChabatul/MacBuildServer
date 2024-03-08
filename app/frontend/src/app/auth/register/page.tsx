'use client'

import FormAuth from "@/app/components/ui/forms/formAuth";
import styles from "./register.module.scss";

export default function PageRegister() {
    return <div className={styles.wrapper}>
        <h3 className={styles.title}>Регистрация нового пользователя</h3>
        <FormAuth type='register' />
    </div>
}

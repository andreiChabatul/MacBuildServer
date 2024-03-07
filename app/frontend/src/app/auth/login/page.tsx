import FormAuth from "@/app/components/ui/forms/formAuth";
import styles from "./register.module.scss";

export default function PageLogin() {
    return <div className={styles.wrapper}>
        <h3 className={styles.title}>Вход в профиль</h3>
        <FormAuth type='login' />
    </div>
}

import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styles from './button.module.scss';

type typeButton = ButtonHTMLAttributes<HTMLButtonElement>;


export default function Button({ children, ...rest }: PropsWithChildren<typeButton>) {

    return <button className={styles.wrapper} {...rest}>
        {children}
    </button>

}
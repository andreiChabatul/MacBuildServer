'use client'

import Image from "next/image";
import styles from './header.module.scss';
import Menu from "./components/menu/Menu";
import { useRouter } from "next/navigation";


export default function Header() {

    const router = useRouter();

    return <header className={styles.wrapper}>
        <Image
            onClick={() => router.push('/')}
            className={styles.logo}
            src={'/logo.png'}
            width={45}
            height={45}
            alt="logo" />
        <Menu />
    </header>
}
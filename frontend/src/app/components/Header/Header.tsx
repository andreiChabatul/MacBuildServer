'use client'

import Image from "next/image";
import styles from './header.module.scss';
import { useShowBurger } from "./hooks/useShowBurger";

import { useEffect, useState } from "react";
import Menu from "./components/menu/Menu";

export default function Header() {


    const { isShowBurger } = useShowBurger();
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => { setIsOpen(!isShowBurger) }, [isShowBurger])


    return <header className={styles.wrapper}>
        <Image className={styles.logo} src={'/logo.png'} width={45} height={45} alt="logo" />
        
        {/* {isOpen && <Menu />} */}
        <Menu />
    </header>
}
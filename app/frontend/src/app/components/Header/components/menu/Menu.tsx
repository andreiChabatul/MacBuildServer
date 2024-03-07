import { useRef, useState } from 'react';
import { useShowBurger } from '../../hooks/useShowBurger';
import { useClickOutside } from '../../hooks/useClickOutside';
import styles from './menu.module.scss';
import { IoMenu } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";

export default function Menu() {

    const { isShowBurger } = useShowBurger();
    const menuref = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    useClickOutside(menuref, () => setIsOpen(false))

    return <div>
        {isShowBurger && <IoMenu className={styles.burgerIco} onClick={() => setIsOpen(true)} />}
        <nav ref={menuref}>
            <ul className={`${styles.wrapper} ${isShowBurger ? styles.wrapper_burger : ''} ${isOpen ? styles.wrapper_burger__open : ''}`}>
                <li>Works</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Profile</li>
                {(isOpen && isShowBurger) && <VscChromeClose className={styles.close} onClick={() => setIsOpen(false)} />}
            </ul>

        </nav>
    </div>
}

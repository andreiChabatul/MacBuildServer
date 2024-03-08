import { useRef, useState } from 'react';
import { useShowBurger } from '../../hooks/useShowBurger';
import { useClickOutside } from '../../hooks/useClickOutside';
import styles from './menu.module.scss';
import { IoMenu } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";
import Profile from '../profile/Profile';
import { useAppSelector } from '@/lib/hooks';
import { RiLoginBoxLine } from "react-icons/ri";

export default function Menu() {

    const { isShowBurger } = useShowBurger();
    const menuref = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    useClickOutside(menuref, () => setIsOpen(false));
    const email = useAppSelector((state) => state.user.user.email);

    return <div>
        {isShowBurger && <IoMenu className={styles.burgerIco} onClick={() => setIsOpen(true)} />}
        <nav ref={menuref}>
            <ul className={`${styles.wrapper} ${isShowBurger ? styles.wrapper_burger : ''} ${isOpen ? styles.wrapper_burger__open : ''}`}>
                <li>Works</li>
                <li>Blog</li>
                <li>Contact</li>
                {!email && <li> <a href='/auth/login' className={styles.login}>Войти <RiLoginBoxLine /></a></li>}
                {email && <Profile />}
                {(isOpen && isShowBurger) && <VscChromeClose className={styles.close} onClick={() => setIsOpen(false)} />}
            </ul>

        </nav>
    </div>
}

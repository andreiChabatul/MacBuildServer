import Image from "next/image";
import styles from './header.module.scss';

export default function Header() {
    return <header className={styles.wrapper}>
        <Image className={styles.logo} src={'/logo.png'} width={45} height={45} alt="logo" />
        <nav>
            <ul className={styles.navWrapper}>
                <li>Works</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Profile</li>
            </ul>
        </nav>
    </header>
}
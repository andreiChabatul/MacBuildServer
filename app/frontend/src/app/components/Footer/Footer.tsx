import { FOOTER_DATA } from './data';
import styles from './footer.module.scss';

export default function Footer() {
    return <footer className={styles.wrapper}>
        <div className={styles.container}>
            <ul className={styles.containerLink}>
                {FOOTER_DATA.map((item, index) =>
                    <li key={index}>
                        <a href={item.link}><item.icon /></a>
                    </li>
                )}
            </ul>
            <p className={styles.text}>Copyright ©2024 All rights reserved</p>
        </div>
    </footer>
}
'use client'

import ItemPost from './components/itemPost/ItemPost';
import { POSTS } from './data';
import { useResize } from './hooks/useResize';
import styles from './section.module.scss';

export default function SectionTwo() {

    const { amount } = useResize();

    return <section className={styles.wrapper}>
        <div className={styles.header}>
            <h3>Recent posts</h3>
            <a href="">View all</a>
        </div>
        <ul className={styles.postsContainer}>
            {POSTS.map((item, index) =>
                (index < amount) &&
                <li key={index}>
                    <ItemPost{...item} />
                </li>
            )}
        </ul>
    </section>
}
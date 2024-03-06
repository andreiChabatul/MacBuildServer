import ItemPost from './components/itemPost/ItemPost';
import { POSTS } from './data';
import styles from './section.module.scss';

export default function SectionTwo() {
    return <section className={styles.wrapper}>
        <div>
            <p>Recent posts</p>
            <a href="">View all</a>
        </div>
        <ul className={styles.postsContainer}>
            {POSTS.map((item) =>
                <li>
                    <ItemPost{...item} />
                </li>
            )}
        </ul>
    </section>
}
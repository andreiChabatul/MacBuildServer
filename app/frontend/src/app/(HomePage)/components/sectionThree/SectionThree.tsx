import ItemPost from './components/ItemPost/ItemPost';
import { POSTS } from './data';
import styles from './section.module.scss';

export default function SectionThree() {
    return <section className={styles.wrapper}>
        <h3 className='mb-5'>Featured works</h3>
        <ul>
            {POSTS.map((item, index) =>
                <li key={index}>
                    <ItemPost{...item} />
                </li>)}
        </ul>
    </section>
}
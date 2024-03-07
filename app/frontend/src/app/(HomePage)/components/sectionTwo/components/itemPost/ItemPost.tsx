import { typeItemPost } from '@/types/ItemPost';
import styles from './itemPost.module.scss';

export default function ItemPost({ title, description, date, category }: typeItemPost) {
    return <div className={styles.wrapper}>
        <p className={styles.title}>{title}</p>
        <div className={styles.info}>
            <span>{date}</span>
            <span>|</span>
            <span>{category}</span>
        </div>
        <p>{description}</p>
    </div>
}
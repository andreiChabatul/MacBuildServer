import { typeItemPostExtra } from '@/types/ItemPost';
import styles from './itemPost.module.scss';
import Image from 'next/image';

export default function ItemPost({ title, description, date, category, image }: typeItemPostExtra) {
    return <div className={styles.wrapper}>
        <Image className={styles.image} width={246} height={180} alt={title} src={image} />
        <div className={styles.description}>
            <p className={styles.title}>{title}</p>
            <div>
                <span className={styles.date}>{date}</span>
                <span className={styles.category}>{category}</span>
            </div>

            <p>{description}</p>
        </div>
    </div>
}
import Image from 'next/image';
import styles from './section.module.scss';
import Button from '@/app/components/ui/button/Button';

export default function SectionOne() {

    return <section className={styles.wrapper}>
        <div className={styles.descContainer}>
            <h1 className={styles.descTitle}>Hi, I am John,<br />Creative Technologist</h1>
            <p className={styles.descText}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <Button>Download Resume</Button>
        </div>
        <div className={styles.image}>
            <Image className={styles.photo} width={243} height={243} alt='sectionOneImage' src={'/john.png'} />
        </div>

    </section>
}
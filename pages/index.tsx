import Link from 'next/link';
import styles from './index.module.css';

export default function Home() {
    return (
        <div className={`${styles.homeBox} ${styles.lightMode}`}>
            <h1 className={styles.title}>Welcome to We Share</h1>
            <div className={styles.buttonContainer}>
                <Link href="/login">
                    <button className={styles.button}>Login</button>
                </Link>
                <Link href="/register">
                    <button className={styles.button}>Register</button>
                </Link>
            </div>
        </div>
    );
}

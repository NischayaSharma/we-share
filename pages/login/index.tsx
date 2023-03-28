import Link from 'next/link';
import { useState } from 'react';
import styles from './index.module.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Perform login action
    };

    return (
        <div className={`${styles.loginBox} ${styles.lightMode}`}>
            <h1 className={styles.title}>Login</h1>
            {error && <div className={styles.error}>{error}</div>}
            <form onSubmit={handleSubmit}>
                <label className={styles.label} htmlFor="email">
                    Email:
                </label>
                <input
                    className={styles.input}
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />

                <label className={styles.label} htmlFor="password">
                    Password:
                </label>
                <input
                    className={styles.input}
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />

                <label className={styles.checkboxLabel}>
                    <input
                        className={styles.checkbox}
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(event) => setRememberMe(event.target.checked)}
                    />
                    Remember me
                </label>

                <button className={styles.submitButton} type="submit">
                    Login
                </button>
            </form>
            <div className={styles.loginLinkContainer}>
                <span>Don't have an account?</span>
                <Link href="/register">
                    <span className={styles.loginLink}>Register</span>
                </Link>
            </div>
            <div className={styles.homeLinkContainer}>
                <Link href="/">
                    <span className={styles.homeLink}>Home</span>
                </Link>
            </div>
        </div>
    );
}

import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import styles from './Header.module.css';

export default function Header() {
    const { logout } = useAuth();
    return (
        <header>
            <div className={styles.logo}>
                <img src="/images/icon.svg" alt="SportSee Icon"/>
                <img src="/images/logo.svg" alt="SportSee Logo"/>
            </div>
            <nav>
                <div className={styles.links}>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/profile">Mon profil</Link>
                </div>
                <button onClick={logout}>Se déconecter</button>
            </nav>
        </header>
    );
}
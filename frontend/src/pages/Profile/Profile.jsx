import { useAuth } from '../../context/AuthContext';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Profile from '../../components/Profile/Profile';
import styles from './Profile.module.css';
import ProfileStat from '../../components/ProfileStat/ProfileStat';

export default function ProfilePage() {
    const { user } = useAuth();
    return (
        <>
            <Header />
            <main className={styles.profile}>
                <section className={styles.profile}>
                    <div>
                        <Profile />
                    </div>
                    <div className={styles.informations}>
                        <div className={styles.title}>
                            <h4>Votre profile</h4>
                        </div>
                        <div className={styles.infos}>
                            <span>Âge : {user.profile.age}</span>
                            <span>Genre : {user.profile.gender == 'male' ? 'Homme' : (user.profile.gender == 'female' ? 'Femme' : 'Unknown')}</span>
                            <span>Taille : {user.profile.height}</span>
                            <span>Poids : {user.profile.weight}</span>
                        </div>
                    </div>
                </section>
                <section className={styles.statistics}>
                    <div className={styles.title}>
                        <h4>Vos statistiques</h4>
                        <span>depuis le {new Date(user.profile.createdAt).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}</span>
                    </div>
                    <div className={styles.stats}>
                        <ProfileStat desc="Durée totale courue" value={`${Math.floor(user.statistics.totalDuration / 60)}h`} unit={`${user.statistics.totalDuration % 60}min`} />
                        <ProfileStat desc="Distance totale parcourue" value={user.statistics.totalDistance} unit="km" />
                        <ProfileStat desc="Nombre de sessions" value={user.statistics.totalSessions} unit="km" />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
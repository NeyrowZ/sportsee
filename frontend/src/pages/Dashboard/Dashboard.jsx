import { useAuth } from '../../context/AuthContext';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function Dashboard() {
    const { user } = useAuth();
    return (
        <>
            <Header />
            <main>
                <ul>
                    <li>{user.profile.firstName} {user.profile.lastName}</li>
                    <li>Member depuis le {new Date(user.profile.createdAt).toLocaleDateString("fr-FR", {year: "numeric", month: "long", day: "numeric"})}</li>
                    <li>Durée totale parcourue {user.statistics.totalDistance}km</li>
                </ul>
            </main>
            <Footer />
        </>
    );
}
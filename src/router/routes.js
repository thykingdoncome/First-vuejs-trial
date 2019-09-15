import HomePage from "../components/HomePage"
import Profile from '../components/ProfilePage'
import Reset from '../components/ResetPassword'
import Account from '../components/CreateAccount'


const routes = [
    { path: '/', component: HomePage },
    { path: '/profile', component: Profile },
    { path: '/resetpassword', component: Reset },
    { path: '/createaccount', component: Account }
];

export default routes;
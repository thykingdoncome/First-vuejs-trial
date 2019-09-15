import HomePage from "../components/HomePage"
import Profile from '../components/ProfilePage/profile'
import Reset from '../components/ResetPassword/reset'
import Account from '../components/CreateAccount/account'


const routes = [
    { path: '/', component: HomePage },
    { path: '/profile', component: Profile },
    { path: '/resetpassword', component: Reset },
    { path: '/createaccount', component: Account }
];

export default routes;
import { Outlet } from 'react-router-dom';
import Navigation from '../components/header/Navigation';
import SearchBar from '../components/bar/SearchBar/SearchBar';
const Layout = ({ session }) => {

    return (
        <>
            <Navigation session={session} />
            <Outlet/>

        </>
    );
}

export default Layout;
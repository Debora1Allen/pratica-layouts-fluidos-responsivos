import './style.css';
import Logo from '../../assest/logo.svg';
import Menu from '../Menu';

function Header() {
    return (
        <header>
            <img className="logo" src={Logo} alt="logo" />
            <Menu />
        </header>

    )
}
export default Header;
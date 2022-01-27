import './style.css';
import menu from '../../assest/menu.svg';
import close from '../../assest/close.svg';
import { useEffect, useState } from 'react';
function Menu() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.querySelector('body').style.overflow = open ? 'hidden' : 'scroll';
    }, [open]);
    return (
        <div className={`${open && 'fullscreen-menu'}`}>
            {open ? <img
                className='icon-close'
                style={{ display: `${open} ? 'block' : 'none'` }}
                onClick={() => setOpen(false)} src={close} alt='close icon'
            /> : <img
                className='icon-menu'
                onClick={() => setOpen(true)} src={menu} alt='menu icon'
            />}
            <ul className="menu">
                <li>Ação</li>
                <li>Comédia</li>
                <li>Drama</li>
                <li>Documentário</li>
                <li>Infantis</li>
            </ul>
        </div>
    )
}
export default Menu;
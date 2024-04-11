import './Navbar.css';
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>Logo</div>
            <ul className='navlinks'>
                <li>Home</li>
                <li>Destination</li>
                <li>Faq</li>
                <li>Contact</li>
            </ul>
        </div>
    );
};

export default Navbar;

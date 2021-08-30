import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <img src={process.env.PUBLIC_URL + '/weeii2.png'} width="130px" height ="130px" />
            </div>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/business">Our Business</Link>
        </nav>
     );
}
 
export default Navbar;
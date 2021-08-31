import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <>
        <nav>
            <div className="logo">
                <img src={process.env.PUBLIC_URL + '/weeii2.png'} width="130px" height ="130px" />
            </div>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/business">Our Business</Link>
        </nav>
        <style jsx>{`

            nav {
                background: #fe0000;
                margin: 0px auto 50px;
                padding: 10px 0;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                border-bottom: 1px solid #ddd;
                height: 50px;
            }
            
            nav a {
                margin-left: 30px;
                margin-right: 30px;
                color: white;
                font-weight: 1000;
                text-decoration: none;
            }
            
            nav a:hover {
                color: black;
            }
            
            nav .logo {
                margin-right: auto;
                align-items: center;
                margin-left: 20px;
                margin-top: 10px;
                color: white;
            }

        `}
        </style>
        </>
     );
}
 
export default Navbar;
import { Helmet } from 'react-helmet';

const About = () => {
    return ( 
        <>
            <Helmet>
            <title>Weeii | About Us</title>
            </Helmet>
            <div className="content">
                <h1>About Us</h1>
                <p>Voluptate sit mollit esse qui amet mollit ullamco quis dolore enim quis. Enim sint consequat aute non cillum id. Culpa nostrud commodo quis aliqua nostrud mollit consequat laboris voluptate proident adipisicing esse. Nisi mollit occaecat aliqua et cillum. Amet et qui ut officia.
                </p>
            </div>
            <style jsx>{`
                .content {
                    max-width: 80%;
                    margin: 0 auto;
                }
            `}
            </style>
        </>
     );
}
 
export default About;
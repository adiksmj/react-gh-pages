import { Helmet } from 'react-helmet';

const Business = () => {
    return ( 
        <>  
            <Helmet>
                <title>Weeii | Our Business</title>
            </Helmet>
            <div className="content">
                <h1>Our Business</h1>
                <p>Testing Consequat Lorem elit occaecat proident et aute do quis duis ullamco pariatur. Aliqua magna exercitation enim ad sint exercitation ullamco. Duis id quis ullamco nulla culpa culpa cillum do. Sit veniam tempor veniam ea in culpa. Dolor Lorem esse dolor labore sit quis esse consectetur velit Lorem proident.</p>
            </div>
            <style jsx>{`
                .content {
                    max-width: 80%;
                    margin: 200px auto;
                }
            `}
            </style>
        </>
     );
}
 
export default Business;
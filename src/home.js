import FotoProduk from './comps/fotoproduk';
import ProdukInfo from './comps/produkinfo';
import ReviewItems from './comps/review';
import { Helmet } from 'react-helmet';


const Home = () => {
    return (
    <> 
      <Helmet>
        <title>Weeii | Home</title>
      </Helmet>
      <div className="Parentbox">
        <FotoProduk /> 
        <ProdukInfo />
        <ReviewItems />
      </div>
      <style jsx>{`
      .content {
        max-width: 80%;
        margin: 0 auto;
      }
      
      .Parentbox {
        width: 80%;
        overflow: hidden;
        margin: auto;
        margin-top: 50px;
      }
      `}

      </style>
    </>
     );
}
 
export default Home;
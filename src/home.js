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
        .Parentbox {
          width: 80%;
          overflow: hidden;
          margin: 200px auto;
        }
      `}

      </style>
    </>
     );
}
 
export default Home;
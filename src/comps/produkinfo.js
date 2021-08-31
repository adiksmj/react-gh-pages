function ProdukInfo(props) {
    
    return (    
      <> 
        <div className="Deskripsi">
          <p className="Cate">RUNNING</p>
          <h1 className="Title">ADIDAS KW 5000</h1>
          <p className="Price">IDR 73.000.000</p>
          <p className="Info">
            One of the most recognizable shoes in the AJ collection, the Air Jordan 3 Retro features lightweight, visible cushioning just like the original from '88. Signature details and materials celebrate the game-changing icon.
          </p>
          <a>Add to Cart</a>  
        </div>
      <style jsx>{`
        .Deskripsi {
          width: 40%;
          overflow: hidden;
          float: left;
          margin-left: 80px;
        }
        
        .Deskripsi .Info {
          line-height: 1.8;
          color: rgb(18, 11, 49);
        }
        
        .Deskripsi .Price {
          font-size: 20px;
          font-weight: 500;
        }
        
        .Deskripsi .Title {
          margin: 0;
        }
        
        .Deskripsi .Cate {
          color: #acaeb2;
        }
        
        .Deskripsi a {
          background-color: black;
          text-decoration: none;
          color: white;
          padding: 10px 15px 10px 15px;
          display: inline-block;
          font-weight: 500;
          border-radius: 2px;
          transition: all 0.5s;
          margin-top: 20px;
          cursor: pointer;
        }
        
        .Deskripsi a:hover {
          color: white;
          background: gray;
        }
        
      `}</style>
          
      </>
        )
  }


  export default ProdukInfo;
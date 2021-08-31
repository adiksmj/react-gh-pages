const FotoProduk = () => {
    return (
      <>
        <div className="Foto">
          <img src="https://upperdeckstore.com/media/catalog/product/cache/cca31960a2955b031df57569d9e7c7f0/m/i/michael_jordan_autographed_nike_air_jordan_11_retro_bred_2019_shoes_95676_2.jpg"/>
        </div>
        <style jsx>{`
          .Foto {
            float: left;
            width: auto;
            height: auto;
            background: #e3e9ee;
            line-height: 0;
          }
          
          .Foto img {
            width: 100%;
          }
        `}
        </style>
      </>
    )
  }

  export default FotoProduk;
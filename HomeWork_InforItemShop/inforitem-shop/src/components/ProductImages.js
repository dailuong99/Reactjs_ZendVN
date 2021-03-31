import React from 'react';

function ProductImages({selectedVariant}){
  if(!selectedVariant){
    return null;
  }
    return(
        <div className="product-image">
        <div className="image"><img src={selectedVariant.images} alt="" /></div>
      </div>
    )
}
export default ProductImages;
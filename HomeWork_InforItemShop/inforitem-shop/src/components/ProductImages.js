import React from 'react';

function ProductImages(props){
  let {selectedVariant} = props;
    return(
        <div className="product-image">
        <div className="image"><img src={selectedVariant.images} alt="" /></div>
      </div>
    )
}
export default ProductImages;
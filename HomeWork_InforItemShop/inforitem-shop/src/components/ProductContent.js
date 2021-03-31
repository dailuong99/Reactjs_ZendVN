import React from 'react';

export default  function ProductContent({title,branch,variations ,selectedVariant,updateSelectedVariant,...restProps}){
function formatPrice(price){
return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
}
function renderPrice(){
    if(!selectedVariant){
return null;
    }
    const {percent,price} = selectedVariant;

    if (selectedVariant.percent === 0){
        return(
            <div className="final-price">{formatPrice(price)}</div>
        )
    }
    return(
        <>
        <div className="final-price">{formatPrice(price * (1 - percent))}</div>
        <div className="origin-price">{formatPrice(price)}</div>
        <div className="sale-price">-{percent * 100}%</div>
        </>
    )
}

 let handleAddtoCard = () =>{
    if(restProps && restProps.handleAddtoCard ){
        restProps.handleAddtoCard()
      }
}
if(!selectedVariant){
    return null;
  }
    return(
        <div className="product-content">
        <h3 className="title"><a href="https://www.lazada.vn/products/ao-thun-nam-the-thao-hang-vnxk-vai-day-min-vai-dom-i265780948-s382816279.html" target="_blank">{title}</a></h3>
        <p className="brand">Thương hiệu: {branch ? branch : 'No Branch'}</p>
        <p className="quantity">Còn lại: {selectedVariant && selectedVariant.quantity} Sản phẩm</p>
        {/**/}
        <div className="wrapper-price">
        {renderPrice()}
        </div>
        <div className="wrapper-color">
            <div className="text">Màu sắc :</div>
            <div className="list-color">
                <p className="color-text">{selectedVariant && selectedVariant.name}</p>
                <ul>
                    {
                   variations && variations.map(varian => {
                           return <li
                           onClick={e => updateSelectedVariant(varian)}
                            className={varian.id === selectedVariant.id ? 'active' : ''}
                             key={varian.id}>
                                 <img src={varian.images}  alt="Màu Đỏ" />
                                 </li>
                       })
                    }
                </ul>
            </div>
        </div> <button onClick={()=>handleAddtoCard()} className="add-to-cart">Add to cart</button>
    </div>
    )
}

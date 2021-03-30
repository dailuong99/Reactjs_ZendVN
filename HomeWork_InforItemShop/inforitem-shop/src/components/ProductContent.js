import React from 'react';

export default  function ProductContent({title,branch,variations ,selectedVariant}){


    return(
        <div className="product-content">
        <h3 className="title"><a href="https://www.lazada.vn/products/ao-thun-nam-the-thao-hang-vnxk-vai-day-min-vai-dom-i265780948-s382816279.html" target="_blank">{title}</a></h3>
        <p className="brand">Thương hiệu: {branch ? branch : 'No Branch'}</p>
        <p className="quantity">Còn lại: 2 Sản phẩm</p>
        {/**/}
        <div className="wrapper-price">
            <div className="final-price">18.000&nbsp;₫</div>
            <div className="origin-price">20.000&nbsp;₫</div>
            <div className="sale-price">-10%</div>
        </div>
        <div className="wrapper-color">
            <div className="text">Màu sắc :</div>
            <div className="list-color">
                <p className="color-text">{selectedVariant.name}</p>
                <ul>
                    {
                       variations.map(varian => {
                           return <li
                            className={varian.id === selectedVariant.id ? 'active' : ''}
                             key={varian.id}>
                                 <img src={varian.images}  alt="Màu Đỏ" />
                                 </li>
                       })
                    }
                    {/* <li className=""><img src="./images/red.jpg" alt="Màu Đỏ" /></li>
                    <li className=""><img src="./images/blue.jpg" alt="Màu Xanh" /></li>
                    <li className=""><img src="./images/black.jpg" alt="Màu Đen" /></li> */}
                </ul>
            </div>
        </div> <button className="add-to-cart">Add to cart</button>
    </div>
    )
}
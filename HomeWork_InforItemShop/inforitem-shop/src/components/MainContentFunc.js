import React from 'react';
import ProductImages from './ProductImages';
import ProductContent from './ProductContent';
import ProductDescription from './ProductDescription';

export default function MainContentFunc() {
    return (
        <div>
            <div className="container">
                <div className="list-blog">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi sunt eveniet maxime magni in, nostrum facilis, temporibus, quam facere sint est blanditiis harum dicta. Tempore suscipit ut hic. Deleniti, qui.
                 </p>
                </div>
                <div id="app">
                    <div className="cart">Giỏ hàng (1)</div>
                    <div className="product">
                        <ProductImages></ProductImages>
                        <ProductContent></ProductContent>
                    </div>
                    <ProductDescription></ProductDescription>
                </div>
            </div>

        </div>
    )
}
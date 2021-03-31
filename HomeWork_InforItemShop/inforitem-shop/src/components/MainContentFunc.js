import React,{useState} from 'react';
import ProductImages from './ProductImages';
import ProductContent from './ProductContent';
import ProductDescription from './ProductDescription';
import {stateHooks,_selectedVariant} from '../model/state';

export default function MainContentFunc() {
    const [cart,setCart]= useState(0);
    const [selectedVariant,setSelectedVariant]= useState(_selectedVariant);
    const [productData,setProductData]= useState(stateHooks);

    let injectedPropsProductDes = {
        attrProducts:productData.attrProducts,
        descriptions :productData.descriptions
    }

   let updateSelectedVariant = (varian) => {
       setCart(0);
    setSelectedVariant(varian);
    }

    let  handleAddtoCard = () => {
        if (cart === selectedVariant.quantity) {
            return;
        }
        setCart(cart + 1);
    }

    let injectedProps = {
        cart,
        ...productData,
        selectedVariant,
        updateSelectedVariant,
        handleAddtoCard
    }

    return (
        <div>
            <div className="container">
                <div className="list-blog">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi sunt eveniet maxime magni in, nostrum facilis, temporibus, quam facere sint est blanditiis harum dicta. Tempore suscipit ut hic. Deleniti, qui.
                 </p>
                </div>
                <div id="app">
                    <div className="cart">Giỏ hàng ({cart})</div>
                    <div className="product">
                        <ProductImages selectedVariant={selectedVariant}></ProductImages>
                        <ProductContent {...injectedProps}></ProductContent>
                    </div>
                    <ProductDescription  {...injectedPropsProductDes} ></ProductDescription>
                </div>
            </div>

        </div>
    )
}
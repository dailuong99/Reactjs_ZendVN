import React, { Component } from 'react';
import ProductImages from './ProductImages';
import ProductContent from './ProductContent';
import ProductDescription from './ProductDescription';
import initData from '../model/state';

export default class MainContentClass extends Component {
    constructor(props){
        super(props);

        this.state= initData
    }

    render(){
    let {title,branch,variations,selectedVariant} = this.state;
    let injectedProps = {
        variations,
        title,
        branch,
        selectedVariant
    }
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
                            <ProductImages selectedVariant={selectedVariant}></ProductImages>
                            <ProductContent 
                           {...injectedProps}
                            ></ProductContent>
                        </div>
                        <ProductDescription></ProductDescription>
                    </div>
                </div>
    
            </div>
        )
    }
}
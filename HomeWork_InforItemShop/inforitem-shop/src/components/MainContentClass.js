import React, { Component } from 'react';
import ProductImages from './ProductImages';
import ProductContent from './ProductContent';
import ProductDescription from './ProductDescription';
import initData from '../model/state';

export default class MainContentClass extends Component {
    constructor(props) {
        super(props);

        this.state = initData;
    }

    updateSelectedVariant = (varian) => {
        this.setState({
            cart:0,
            selectedVariant: varian
        })
    }

    handleAddtoCard = () => {
        let { cart, selectedVariant } = this.state;
        if (cart === selectedVariant.quantity) {
            console.log("co nhieu do san pham thoi ba oi them du vay!");
            return;
        }
        this.setState({
            cart: cart + 1
        })
    }
    render() {
        let { updateSelectedVariant, state, handleAddtoCard } = this;
        let { title, branch, variations, selectedVariant, attrProducts, descriptions, cart } = this.state;
        let injectedProps = {
            variations,
            title,
            branch,
            selectedVariant,
            updateSelectedVariant,
            handleAddtoCard
        }

        let injectedPropsProductDes = {
            attrProducts,
            descriptions
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
                            <ProductContent
                                {...injectedProps}
                            ></ProductContent>
                        </div>
                        <ProductDescription  {...injectedPropsProductDes} />
                    </div>
                </div>

            </div>
        )
    }
}
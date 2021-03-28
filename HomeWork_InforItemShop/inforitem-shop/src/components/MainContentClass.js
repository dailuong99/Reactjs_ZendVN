import React, { Component } from 'react';
import ProductImages from './ProductImages';
import ProductContent from './ProductContent';
import ProductDescription from './ProductDescription';

export default class MainContentClass extends Component {
    constructor(props){
        super(props);
        let idVariantDefault = Math.ceil(Math.random() * 9999);
        this.state= {
            selectedVariantId : idVariantDefault,
            title:'Áo thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm test',
            branch: 'Adidas',
            variations:[
                {
                    id: Math.ceil(Math.random() * 9999),
                    name: 'Màu đen',
                    images:'/images/black.jpg',
                    price:18000,
                    quantity:10,
                    percent:0.1,
                },
                {
                    id: Math.ceil(Math.random() * 9999),
                    name: 'Màu xanh',
                    images:'/images/blue.jpg',
                    price:19000,
                    quantity:5,
                    percent:0.3,
                },
                {
                    id: idVariantDefault,
                    name: 'Màu đỏ',
                    images:'/images/red.jpg',
                    price:30000,
                    quantity:2,
                    percent:0.2,
                }
            ],
            attrProducts: [
                {
                    name:'chất liệu',
                    value:'polyester và thun',

                },
                {
                    name:'',
                    value:'Thoát mồ hôi tốt',
                    
                },
                {
                    name:'',
                    value:'Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát',
                    
                },
                {
                    name:'',
                    value:'Kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc',
                    
                },
                {
                    name:'chất liệu',
                    value:'polyester và thun',
  
                }
            ],
            descriptions:'Mô tả: Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát và thoát mồ hôi tốt, kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc '
        }
    }


    render(){
    let {title,branch,variations,selectedVariantId} = this.state;
    let injectedProps = {
        variations,
        title,
        branch,
        selectedVariantId
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
                            <ProductImages></ProductImages>
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
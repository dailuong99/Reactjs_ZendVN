let variations = [{
        id: Math.ceil(Math.random() * 9999),
        name: 'Màu đen',
        images: '/images/black.jpg',
        price: 18000,
        quantity: 10,
        percent: 0.1,
    },
    {
        id: Math.ceil(Math.random() * 9999),
        name: 'Màu xanh',
        images: '/images/blue.jpg',
        price: 19000,
        quantity: 5,
        percent: 0.3,
    },
    {
        id: Math.ceil(Math.random() * 9999),
        name: 'Màu đỏ',
        images: '/images/red.jpg',
        price: 30000,
        quantity: 2,
        percent: 0.2,
    }
]


let state = {
    selectedVariant: variations[2],
    title: 'Áo thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm test',
    branch: 'Adidas',
    variations,
    attrProducts: [{
            name: 'chất liệu',
            value: 'polyester và thun',

        },
        {
            name: '',
            value: 'Thoát mồ hôi tốt',

        },
        {
            name: '',
            value: 'Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát',

        },
        {
            name: '',
            value: 'Kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc',

        },
        {
            name: 'chất liệu',
            value: 'polyester và thun',

        }
    ],
    descriptions: 'Mô tả: Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát và thoát mồ hôi tốt, kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc '
};

export default state;
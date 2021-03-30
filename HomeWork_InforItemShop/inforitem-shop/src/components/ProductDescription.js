import React from 'react';

export default  function ProductDescription({ attrProducts, descriptions }){
    return(
      <div className="description">
      <ul className="extra-info">
          {
              attrProducts.map((o,key) =>{
                  return <li key={key}>{o.name === ''? null : o.name + ' :'}{o.value}</li>
              })
          }
          {/* <li>Chất liệu: polyester và thun</li>
          <li>Thoát mồ hôi tốt</li>
          <li>Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát</li>
          <li>Kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc</li>
          <li>Chất liệu: polyester và thun</li> */}
      </ul>
      <div dangerouslySetInnerHTML={{
           __html: descriptions
        }}>
      </div>
      </div>
    )
}

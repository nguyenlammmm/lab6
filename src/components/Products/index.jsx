import React from 'react'
import prd1 from "../../assets/imgs/product1.jpg"
import prd2 from "../../assets/imgs/product2.jpg"
import prd3 from "../../assets/imgs/product3.jpg"
import prd4 from "../../assets/imgs/product4.png"
import { Link } from 'react-router-dom'
export default function Products() {
  const product = [
    {
      id: 1, prdName: "ĐỒNG HỒ DANIEL WELLINGTON", price: 1490000, prdImage: prd1, description: "Chiếc đồng hồ vừa mang phong cách cổ điển vừa hiện đại sẽ là một điểm nhấn không thể thiếu cho trang phục hàng ngày trong cuộc sống của bạn. Với thiết kế 2 size 28mm và 32mm, chiều lòng nàng hơn với 2 màu viền rosegold và silver để bạn có thể tha hồ lựa chọn phù hợp với sở thích bản thân."
    },
    {
      id: 2, prdName: "Đồng hồ Casio Edifice EFS-S570D-1A ", price: 5286000, prdImage: prd2, description: "Là 1 sản phẩm Đồng hồ Casio Edifice Nhật Bản, phong cách lịch lãm, trẻ trung, tốc độ và thông minh."
    },
    {
      id: 3, prdName: "Đồng hồ Olym Pianus 990-162AMS ", price: 4941000, prdImage: prd3, description: "Olym Pianus OP990-162AM để lộ tinh tế thiết kế Open Heart kinh điển ở góc 9h. Bộ kim dạng mũi kiếm quen thuộc kết hợp với cọc số thẳng trên nền mặt xanh đánh vân Guliche tinh xảo. Bảo vệ mặt số là lớp kính sapphire chống xước, bên ngoài là lớp vỏ thép không gỉ 316L."
    },
    {
      id: 4, prdName: "Đồng hồ G-shock GA-120-1A ", price: 3632000, prdImage: prd4, description: "Là 1 sản phẩm Đồng hồ G-Shock Nhật Bản chuyên chống va đập, chống nước tối thiểu 200m, wr20bar. Họa tiết các môn thể thao đua mô-tô của các mẫu kết hợp kim-số này chắc chắn sẽ đưa những mẫu này gia nhập làng thời trang. Phụ kiện của mặt đồng hồ được tạo hình mô phỏng phanh đĩa xe mô-tô và các mối nối của kim đồng hồ được tạo hình các bánh răng."
    }
  ]
  return (
    <section className='container mx-auto p-6'>
      <h2 className='text-2x1 font-boid'>Danh sách đồng hồ</h2>
      <div className="grid grid-cols-4 space-x-5">
        { 
          product.map((product) => {
            return(
              <div key={product.id} className= 'bg-white shadow-md rounded-lg'>
                <img src={product.prdImage} alt={product.prdName} className='h-80'/>
                <h3 className='text-lg font-semibold'>{product.prdName}</h3>
                <p className='text-red-400 font-medium text-lg'>{product.price} VNĐ</p>
                <div className='flex flex-col'>
                <Link to={`/detail/&{product.id}`} state={{product}} className='w-full block text-center bg-blue-500 text-white py-2 rounded-lg mb-2'>Chi tiết sản phẩm</Link>
                <button className='w-full block bg-green-500 text-white py-2 rouded-lg mb-2'>Thêm vào giỏ hàng</button>
              </div>
            </div>
            )
          })
        }
      </div>
    </section>
  )
}
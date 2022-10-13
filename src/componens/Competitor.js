import React, { useState, useEffect } from 'react'
import IconMoreFilled from '../assets/icon/IconMoreFilled.png'
import axios from 'axios'

const Competitor = () => {
     const [dataproduct, SetDataProduct] = useState([]);
     const url = `https://fakestoreapi.com/products/category/women's clothing`;

     const getProduct = () => {
          axios.get(`${url}`).then((res) => {
               SetDataProduct(res['data'])
          })
               .catch(error => console.error(`Error : ${error}`));
     }

     useEffect(() => {
          getProduct();
     }, []);

  return (
     <div className="product">
               <div className='title'>
                    <h3>TOP COMPETITOR SKU</h3>
                    <img src={IconMoreFilled} alt="Logo" className='logo' />
               </div>
               <div className="item_data">
                     {
                         dataproduct.slice(0,5).map((item, i) => (
                              <div className={`${i ===0 ? 'pertama flex': 'flex'}`} key={item.id}>
                              <div className="col-4 px-0">
                                   <img src={item.image} alt="Logo" className='logo' />
                              </div>
                              <div className="col-8 px-0">
                                   <div className="nama_product">
                                        <h4>{item.title}</h4>
                                   </div>
                                   <div className="harga_jumlah">
                                        <span>${item.price}</span>
                                        <span>{item.rating.count}</span>
                                   </div>
                              </div>
                              </div>
                         ))
                    }

               </div>
          </div>
  )
}

export default Competitor

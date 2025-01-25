'use client'

import { UseAddData, UseEditProduct } from '@/app/zustand/store'
import React, { useEffect, useState } from 'react'

function Page() {
  const {data} = UseAddData();
  const {dataEditProduct, editProduct} = UseEditProduct();

  const [dataDetail, setDataDetail] = useState({});

  useEffect(()=>{
    handleData();
  },[data]);

  useEffect(()=>{
    handleNewData()
  }, [dataEditProduct])

  const handleData = ()=>{
    localStorage.removeItem('data-Edit-product');
    setDataDetail({
      image: data?.image,
      label: data?.label,
      stock: data?.stock,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    })
    editProduct({
      image: data?.image,
      name: data?.label,
      stock: data?.stock,
      price: 1000,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    })
  };  

  const handleNewData = ()=>{
    if (dataEditProduct?.name) {      
      setDataDetail({
        image: dataEditProduct?.image,
        label: dataEditProduct?.name,
        stock: dataEditProduct?.stock,
        desc: dataEditProduct?.desc,
        price: dataEditProduct?.price
      })
    }
  }

  if (!dataDetail) {
    return(
      <div className='flex justify-center items-center w-full h-full mt-20'>
        <h1 className='text-center'>Data telah di hapus</h1>
      </div>
    )
  }
  
  return (
    <div className='lg:pt-20 sm:pt-0 lg:px-52 sm:px-1'>
      <div className="relative flex flex-col md:flex-row my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
        <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden">
          <img
            src={dataDetail?.image}
            alt="card-image"
            className="h-80 w-full rounded-md md:rounded-lg object-cover"
          />
        </div>
        <div className="p-6">
          <div className='flex justify-between w-full items-center'>
            <div className="mb-4 rounded-full font-semibold bg-slate-800 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
              {dataDetail?.label}</div>
              <div className='italic cursor-pointer mb-4 text-gray-500'
              onClick={()=>setDataDetail(false)}
              >Remove</div>
          </div>
          <h4 className="mb-2 text-slate-800 text-xl font-semibold">
            Description about {dataDetail?.label}
          </h4>
          <p className="mb-8 text-slate-600 leading-normal font-light">
              {dataDetail?.desc}
          </p>
          <div className='flex justify-between items-center'>
                <p className='text-sm italic text-gray-500'>Rp {dataDetail?.stock+10000}</p>
                <p className='text-sm italic text-gray-500'>Stock: {dataDetail?.stock}</p>
            </div>
        </div>
      </div> 
    </div>
  )
}

export default Page
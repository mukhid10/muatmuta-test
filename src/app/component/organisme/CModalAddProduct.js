'use client'

import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CInput } from '../atoms/CInput';
import { UseAddProduct, UseEditProduct } from '@/app/zustand/store';

function CmodalAddProduct({show, setShow, label}) {
    const {addProduct} = UseAddProduct()
    const {dataEditProduct, editProduct} = UseEditProduct()

    const [data, setData] = useState({
        name: '',
        image: '',
        stock: 0,
        price: 0,
        desc: ''
    });

    useEffect(()=>{
        handleInitValue();
    },[dataEditProduct])

    const handleData = ()=>{
        if (label == "Edit Product") {
            editProduct(data);
            setShow(false);
        } else {            
            addProduct(data);
            setShow(false);
        }
    }

    const handleInitValue = ()=>{
        if (label == "Edit Product") {            
            setData({
                ...data,
                image: dataEditProduct?.image,
                name: dataEditProduct?.name,
                stock: dataEditProduct?.stock,
                desc: dataEditProduct?.desc,
                price: dataEditProduct?.price
            })
        }
    }
    
  return (
    <>
        <Modal
            centered
            show={show}
            onHide={()=>setShow(false)}
            className='mt-3'
        >
            <Modal.Header closeButton>
            <Modal.Title className='text-dark text-gray-900'>{label}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='m-2'>
                    <label className='text-gray-900'>Name <span className='text-red-600'>*</span></label>
                    <CInput value={data?.name} setValue={(e)=>setData({
                        ...data,
                        name: e.target.value
                    })}/>
                </div>
                <div className='m-2'>
                    <label className='text-gray-900'>Image <span className='text-red-600'>*</span></label>
                    <CInput  value={data?.image} setValue={(e)=>setData({
                        ...data,
                        image: e.target.value
                    })}/>
                </div >
                <div className='m-2'>
                    <label className='text-gray-900'>Stock <span className='text-red-600'>*</span></label>
                    <CInput  value={data?.stock} setValue={(e)=>setData({
                        ...data,
                        stock: e.target.value
                    })}/>
                </div>
                <div className='m-2'>
                    <label className='text-gray-900'>Price <span className='text-red-600'>*</span></label>
                    <CInput  value={data?.price} setValue={(e)=>setData({
                        ...data,
                        price: e.target.value
                    })}/>
                </div>
                <div className='m-2'>
                    <label className='text-gray-900'>Description <span className='text-red-600'>*</span></label>
                    <div className="w-full">
                        <div className="relative w-full">
                            <textarea
                            className="peer text-gray-900 h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder="Description"
                            value={data?.desc} onChange={(e)=>setData({
                                ...data,
                                desc: e.target.value
                            })}
                            ></textarea>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={()=>setShow(false)}>
                Close
            </Button>
                {data.name && data?.image && data?.stock > 0 && data.price && data.desc ?
                <Button variant="dark"
                onClick={()=>handleData()}
                >Submit</Button> :
                <Button variant='secondari' disabled>Submit</Button> 
            }
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default CmodalAddProduct
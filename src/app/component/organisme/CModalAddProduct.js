'use client'

import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CInput } from '../atoms/CInput';
import { UseAddProduct, UseEditProduct } from '@/app/zustand/store';
import { useForm } from 'react-hook-form';

function CmodalAddProduct({show, setShow, label}) {
    const {addProduct} = UseAddProduct()
    const {dataEditProduct, editProduct} = UseEditProduct()

    const {
        register,
        handleSubmit,
        watch,
        formState:{errors},
        setValue,
        reset
    } = useForm({
        defaultValues:{
            name: '',
            image: '',
            stock: 0,
            price: 0,
            desc: ''
        }
    })

    useEffect(()=>{
        handleInitValue();
    },[dataEditProduct])

    const handleData = (data)=>{
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
            setValue("name", dataEditProduct?.name);
            setValue("image", dataEditProduct?.image);
            setValue("stock", dataEditProduct?.stock);
            setValue("desc", dataEditProduct?.desc);
            setValue("price", dataEditProduct?.price);
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
                <form onSubmit={handleSubmit(handleData)}>
                    <div className='m-2'>
                        <label className='text-gray-900'>Name <span className='text-red-600'>*</span></label>
                        <CInput register={register("name", {required: "Name is required"})}/>
                        <small className="text-[11px] text-red-600 italic">{errors?.name?.message}</small>
                    </div>
                    <div className='m-2'>
                        <label className='text-gray-900'>Image <span className='text-red-600'>*</span></label>
                        <CInput  register={register("image", {required: "Image is required"})}/>
                        <small className="text-[11px] text-red-600 italic">{errors?.image?.message}</small>
                    </div >
                    <div className='m-2'>
                        <label className='text-gray-900'>Stock <span className='text-red-600'>*</span></label>
                        <CInput  register={register("stock", {required: "Stock is required", min:{
                            value: 0,
                            message: "Minimun value 0"
                        }})}/>
                        <small className="text-[11px] text-red-600 italic">{errors?.stock?.message}</small>
                    </div>
                    <div className='m-2'>
                        <label className='text-gray-900'>Price <span className='text-red-600'>*</span></label>
                        <CInput  register={register("price", {required: "Price is required", min:{
                            value: 0,
                            message:'Minimun value 0'
                        }})}/>
                        <small className="text-[11px] text-red-600 italic">{errors?.price?.message}</small>
                    </div>
                    <div className='m-2'>
                        <label className='text-gray-900'>Description <span className='text-red-600'>*</span></label>
                        <div className="w-full">
                            <div className="relative w-full">
                                <textarea
                                className="peer text-gray-900 h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder="Description"
                                {...register("desc", {required:"Description is Required"})}
                                ></textarea>
                            </div>
                        </div>
                        <small className="text-[11px] text-red-600 italic">{errors?.desc?.message}</small>
                    </div>
                    <div className='mt-2 flex justify-end'>
                        <Button variant="secondary" 
                        onClick={()=>{
                            setShow(false)
                            reset()
                            }} className='mr-2'>
                            Close
                        </Button>
                        <Button variant="dark" type='submit'>Submit</Button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    </>
  )
}

export default CmodalAddProduct
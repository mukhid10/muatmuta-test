'use client'

import React, { useState } from 'react'
import CmodalAddProduct from './CModalAddProduct'
import { useParams } from 'next/navigation';

function CNavbar() {
const params = useParams();
const { slug } = params;
const [modalAdd, setModalAdd] = useState(false)
const [modalEdit, setModalEdit] = useState(false)


  return (
    <>
        <nav className="block rounded-md w-full max-w-screen-lg px-4 py-4\3 mx-auto bg-white bg-opacity-90 sticky top-3 shadow lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
            <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
            <a href="#"
                className="mr-4 block cursor-pointer py-1.5 text-slate-800 text-lg font-semibold italic">
                Local Pride
            </a>
            <div className="lg:block h-fit">
                <ul className="flex items-center m-0">
                    {
                        slug ?
                            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                                <div className='italic cursor-pointer'
                                onClick={()=>setModalEdit(true)}
                                >Edit Product</div>
                            </li> :
                            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                                <div className='italic cursor-pointer'
                                onClick={()=>setModalAdd(true)}
                                >Add Product</div>
                            </li>
                    }
                </ul>
            </div>
            </div>
        </nav>
        <CmodalAddProduct show={modalAdd} setShow={setModalAdd} label="Add Product"/>
        <CmodalAddProduct show={modalEdit} setShow={setModalEdit} label="Edit Product"/>
    </>
  )
}

export default CNavbar
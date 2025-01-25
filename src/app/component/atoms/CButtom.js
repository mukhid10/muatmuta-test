'use client'

import React from 'react'

export function CButtom(props) {
    const {styleProps, label, action} = props;
    return (
        <div>
            <button 
                className='bg-[#000] px-3 py-1 rounded-md text-yellow-600'>{label}</button>
        </div>
    )
}
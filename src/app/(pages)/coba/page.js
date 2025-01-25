'use client'

import { CButtom } from '@/app/component/atoms/CButtom'
import { CInput } from '@/app/component/atoms/CInput'
import React from 'react'

function Page() {
  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen'>
        <h1 className='text-yellow-600'>nnn</h1>
        <CButtom label='haloo' action={()=>{}}/>
          <CInput/>
    </div>
  )
}

export default Page
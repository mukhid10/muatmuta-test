import React from 'react'

function CCard(props) {
    const {label, price, stock, action, image} = props;
  return (
    <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-52 max-h-96">
        <div className="relative h-28 m-2.5 overflow-hidden text-white rounded-md">
            <img src={image} alt="card-image" />
        </div>
        <div className="px-2">
            <h6 className="mb-2 text-slate-800 text-md font-bold">
                {label}
            </h6>
            <div className='flex justify-between items-center'>
                <p className='text-sm italic text-gray-500'>Rp {price+10000}</p>
                <p className='text-sm italic text-gray-500'>Stock: {stock}</p>
            </div>
        </div>
        <div className="px-2 pb-2 mt-2">
            <button className="rounded-md w-full bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button"
                onClick={action}
            >
            Read more
            </button>
        </div>
    </div>  
  )
}

export default CCard
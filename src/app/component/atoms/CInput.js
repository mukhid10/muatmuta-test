import React from 'react'

export function CInput(props) {
    const {value, setValue} = props;
  return (
    <>
        <div className="w-full">
            <input className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 focus:shadow" placeholder="Type here..."
                value={value}
                onChange={setValue}
            />
        </div>
    </>
  )
}
import React from 'react'
import CNavbar from './organisme/CNavbar';

function AppShell(props) {
    const {children} = props;
  return (
    <div className='lg:px-16 md:px-16 px-2'>
        <CNavbar/>
        {children}
    </div>
  )
}

export default AppShell
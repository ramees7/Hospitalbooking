import React, { createContext, useState } from 'react'


export const docterEditResContext=createContext()

function ContextShares({children}) {
    const [docterEditRes,setDocterEditRes]=useState({})
    const [appoinmentAdd,setAppoinmentAdd]=useState({})
    const [drAdd,setDrAdd]=useState({})

  return (
    <>
        <docterEditResContext.Provider value={{docterEditRes,setDocterEditRes} && {appoinmentAdd,setAppoinmentAdd} && {drAdd,setDrAdd}} >
            {children}
        </docterEditResContext.Provider>
    </>
  )
}

export default ContextShares
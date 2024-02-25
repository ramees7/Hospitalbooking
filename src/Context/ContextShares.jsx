import React, { createContext, useState } from 'react'


export const docterEditResContext=createContext()

function ContextShares({children}) {
    const [docterEditRes,setDocterEditRes]=useState({})

  return (
    <>
        <docterEditResContext.Provider value={{docterEditRes,setDocterEditRes}}>
            {children}
        </docterEditResContext.Provider>
    </>
  )
}

export default ContextShares
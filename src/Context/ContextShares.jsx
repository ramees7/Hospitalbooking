import React, { createContext, useState } from 'react'


export const docterEditResContext = createContext()
export const docterAddContext = createContext()


function ContextShares({ children }) {
  const [docterEditRes, setDocterEditRes] = useState({})
  const [docterAddRes, setDocterAddRes] = useState({})

  return (
    <>
      <docterEditResContext.Provider value={{ docterEditRes, setDocterEditRes }} >
        <docterAddContext.Provider value={{docterAddRes, setDocterAddRes}}>
          {children}
        </docterAddContext.Provider>
      </docterEditResContext.Provider>
    </>
  )
}

export default ContextShares
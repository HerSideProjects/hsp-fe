'use client'

import React from 'react'
import { Toaster } from 'react-hot-toast'

interface Props {
  children: React.ReactNode
}

function Provider({ children }: Props) {
  return (
    <>
      <Toaster reverseOrder={false} />
      {children}
    </>
  )
}

export default Provider

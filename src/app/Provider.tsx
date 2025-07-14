'use client'

import React from 'react'
import { Toaster } from 'react-hot-toast'

interface Props {
  children: React.ReactNode
}

function Provider({ children }: Props) {
  return (
    <>
      <Toaster reverseOrder={false}
      toastOptions={{
          duration: 3000,
          success: {
            style: {
              background: "#E2F1AE",
              color: "#1C1719",
              border: "1px solid #A2C34C"
            }
          },
          error: {
            style: {
              background: "#FEF6EB",
              color: "#EF3187",
              border: "1px solid #EF3187"
            }
        },
        loading: {
            style: {
            background: "#FEF6EB",
            color: "#39001A",
            border: "1px solid #39001A"
            }
        }
        }}
      />
      {children}
    </>
  )
}

export default Provider

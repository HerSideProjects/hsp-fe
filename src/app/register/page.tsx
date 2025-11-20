import { RegisterModule } from '@/modules/register-module/register'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Register',
  robots: {
    index: false,
    follow: false,
  },
}

export default function RegisterPage() {
  return (
    <RegisterModule />
  )
}

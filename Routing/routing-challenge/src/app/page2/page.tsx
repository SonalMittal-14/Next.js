"use client"

import React from 'react'
import { useRouter } from 'next/navigation'


const PageTwo = () => {
    const router = useRouter();  
  return (
    <div>
        <h1>Welcome to Page 2</h1>
        <p>Bhai tu page 2 pe h thk </p>
        <button onClick = {() => router.back()}>back</button>
    </div>
  )
}

export default PageTwo
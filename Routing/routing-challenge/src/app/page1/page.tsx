"use client"

import { useRouter } from 'next/navigation'
import React from 'react'


const PageOne = () => {
    const router = useRouter();
    const goToPage2 = () => router.push("/page2");
  return (
    <div>
        <h1>Welcome to Page One</h1>
        <button onClick={goToPage2}>Go to Page Two</button>
    </div>
  )
}

export default PageOne
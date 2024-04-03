import Link from 'next/link'
import React from 'react'

const InterceptedAbout = () => {
  return (
    <div>
      Intercepted About page
      <div>
        <Link href={'/f1'}>F1</Link>
      </div>
    </div>
  )
}

export default InterceptedAbout

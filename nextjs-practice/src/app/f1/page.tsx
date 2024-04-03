import Link from 'next/link'
import React from 'react'

const F1 = () => {
  return (
    <div>
      F1 Page
      <div>
        <Link href={'/f1/f2'}>F2</Link>
        <Link href={'/f1/f3'}>F3</Link>
        <Link href={'/f1/f4'}>F4</Link>
      </div>
    </div>
  )
}

export default F1

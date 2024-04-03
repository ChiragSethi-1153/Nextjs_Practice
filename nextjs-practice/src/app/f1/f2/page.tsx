import Link from 'next/link'
import React from 'react'

const F2 = () => {
  return (
    <div>
      F2 page
      <div>
        <Link href={'/f1'}>F1</Link>
      </div>
    </div>
  )
}

export default F2

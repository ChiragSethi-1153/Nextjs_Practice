import React from 'react'
import { Metadata } from 'next'
import { resolve } from 'path'

type Props = {
  userId: string
}

export const generateMetadata = async ({params}: {
  params: {userId : String}
}): Promise<Metadata> => {
  
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`profile ${params.userId}`)
    }, 100);
  })

  return {
    title: `User ${title}`
  }
}


const Profile = ({params}: {
    params: {userId : String}
}) => {
  return (
    <div>
      {params.userId}
    </div>
  )
}

export default Profile

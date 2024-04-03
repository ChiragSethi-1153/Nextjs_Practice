import React from 'react'

const Docs = ({params}: {
    params: {
        slug: string[]
    }
}) => {

    if(params.slug.length === 2){

        return (
          <div>
            {params.slug[1]} 
          </div>
        )
    }


}

export default Docs

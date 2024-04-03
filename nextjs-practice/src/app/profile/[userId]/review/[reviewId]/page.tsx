import React from 'react'

const Review = ({params}: {
    params: {reviewId: String}
}) => {
  return (
    <div>
      {params.reviewId}
    </div>
  )
}

export default Review

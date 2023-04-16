import React from 'react'
import '../../All styles/Blogs.css'
import CustomerReview from '../CustomerReview/CustomerReview'

function Blogs(props) {
  return (
    <>
      <CustomerReview blogs={props.blogs} />
    </>
  )
}

export default Blogs

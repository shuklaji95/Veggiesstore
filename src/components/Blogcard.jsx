import React from 'react'

const Blogcard = ({id,img}) => {
  return (
    <div className=' items-center border hover:shadow-2xl'> 
        <img className='object-cover mx-auto' src={img} alt="imgname" />
        <div className="container">
          <div className=' flex  justify-between py-3'>
            <p className=' font-semibold'>By Amit</p>
           <p> Date: {" "+ new Date().toLocaleDateString()}</p>
          </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quidem.
        </div>
    </div>
  )
}

export default Blogcard
import React from 'react'

const Productcard = ({img,name,price}) => {
  return (
    <div className="items-center border border-gray-200 hover:border-black " >
<img  className=" mx-auto " src={img} alt="Simple photo" />
<div className="container py-3">
    <span className='  font-thin text-gray-400'>fruits</span>
<h2>{name}</h2>
<p className=" text-primary">{price}</p>
</div>


    </div>
  )
}

export default Productcard
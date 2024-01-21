import React from 'react'
import Blogcard from './Blogcard'
const d=[
    {
        id:0,
        img:"./post-1.jpg",
    },
    {
        id:1,
        img:"./post-2.jpg",
    },
    {
        id:2,
        img:"./post-3.jpg",
    },
    {
        id:3,
        img:"./post-4.jpg",
    },
]
const Blogs = () => {
  return (
    <div className=' pt-6'>
<div className=' container'>
    <div className=" sm:text-[20px] md:text-[30px] lg:text-[40px]">Our Blogs</div>
    <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4 lg:grid-cols-4'>

{
    d.map(k=>{
        return <Blogcard {...k} key={k.id}/>
    })
}
    </div>
</div>
    </div>
  )
}

export default Blogs
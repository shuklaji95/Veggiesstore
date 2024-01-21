import React from 'react'
import { data3 } from './Data'
import Productcard from './Productcard'
const Discount = () => {
  return (
    <div className=' pt-10'>
        <div className=' container'>
            
                <div className=" p-3 sm:text-[20px] md:text-[30px] xl:text-[40px]"> Discount </div>
                
                <div className=' grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-10 pt-10'>
                    <div className=' relative w-fit'>
                        <img src="./discount-bg.jpg" alt="discount-bg" />
<div className=' absolute w-full h-full left-0 top-0  grid place-items-center  text-white'>
    <div className=' flex-col'>  <p className=' font-bold text-[20px]'>$20</p>
    <p className=' font-semibold'>on listed items</p>
    </div>
   
</div>
                    </div>
{

 

    data3.map((desc,i)=>{
        return <Productcard {...desc} key={i}/>
    })
}

               
            </div>
        </div>
    </div>
  )
}

export default Discount
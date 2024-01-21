import React from 'react'
import { data2 } from './Data'
 import Productcard from './Productcard'
const FeatureProduct = () => {
  return (
    <div className="pt-20">
        <div className="container">
            <div className="flex  justify-between items-center">
<div className="test-xl md:text-4xl pb-4 sm:pb-0">Feature Products</div>
<div className="flex gap-8 items-center text-[14px] md:text-lg">
<button className="border-b border-black">Best Seller </button>
<button> Most popular</button>

</div>

            </div>
            <div className="grid md:grid-cols-4 xl:grid-cols-5 sm:grid-cols-2 gap-10 pt-4" >
{data2.map((des,i)=>{
return <Productcard {...des} key={i}/>

})}

            </div>
        </div>
    </div>
  )
}

export default FeatureProduct
// pehle data fetch karna aur bhejna sikh le
import React from 'react'
import Servicecard from './servicecard';
import { Data } from './Data';


export const Feature = () => {
  return (
    <div className="bg-[#f7f5ee]">
<div className="container grid gap-8 md:grid-cols-2 xl:grid-cols-4 py-10">
 {
    Data.map((desc,i)=>  {
return <Servicecard {...desc} key={i}/>
    })
 }

</div>

    </div>
  )
}

import React from 'react'

const Servicecard = ({title,icon,desc}) => {
  return (
    <div className="flex gap-4 items-center">
        <div className="text-[40px] text-primary">
            {icon}
        </div>
        <div>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm font-normal">{desc}</p>
        </div>
    </div>
  )
}

export default Servicecard